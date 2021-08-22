(ns bel-clojure.instance
  (:require
   [clojure.java.io :as io]
   [instaparse.core :as insta]
   [clojure.string :as cstring]
   [clojure.walk :as walk])
  (:import
   (java.util ArrayList)))

;; Constants
;; ---------


(def bel-quote [:symbol "quote"])
(def bel-nil [:symbol "nil"])
(def bel-t [:symbol "t"])
(def bel-dot [:dot "."])
(def bel-lit [:symbol "lit"])
(def bel-prim [:symbol "prim"])
(def bel-o [:symbol "o"])
(def bel-apply [:symbol "apply"])

;; Reader
;; ------

(def parse-string (-> "bel.ebnf" io/resource insta/parser))

(defn form-transform
  [k f]
  (fn [x]
    (if (and
         (coll? x)
         (= (first x) k))
      (f x)
      x)))

(def unwrap-sexp (form-transform :sexp second))

(defn make-pair [a b]
  (ArrayList. [:pair a b]))

(defn make-quoted-pair [a]
  (make-pair bel-quote a))

(defn first-and-only [xs msg]
  (assert (= (count xs) 1) msg)
  (first xs))

(defn <-pairs [xs]
  (let [[x n & after-n] xs
        after-x (rest xs)]
    (if (empty? xs)
      bel-nil
      (make-pair
       x
       (if (= bel-dot n)
         (first-and-only after-n "dotted list _must_ have 1 exp after the dot")
         (<-pairs after-x))))))

(def list->pair
  (form-transform
   :list
   (fn [[_t & children]]
     (<-pairs children))))

(def string->pair
  (form-transform
   :string
   (fn [[_t & children]]
     (make-quoted-pair
      (<-pairs
       (map (fn [[_ v]]
              [:char v])
            children))))))

(def unwrap-name (form-transform :name second))

(def quote->pair
  (form-transform :quote
                  (fn [[_ exp]]
                    (make-quoted-pair exp))))

(def bel-parse
  (comp
   (partial
    walk/postwalk
    (comp
     list->pair
     string->pair
     quote->pair
     unwrap-name
     unwrap-sexp))
   parse-string))

(comment
  (bel-parse "\"str\"")
  (bel-parse "(a b c)")
  (bel-parse "_")
  (bel-parse "'+")
  (bel-parse "\\bel")
  (bel-parse "(a . b)")
  (bel-parse "(a b . c)")
  (bel-parse "()"))

;; Primitives
;; ----------

(defn p-id [[t-a :as a] b]
  (let [id-f (if (= t-a :pair) identical? =)]
    (if (id-f a b)
      bel-t
      bel-nil)))

(comment
  (p-id (bel-parse "a") (bel-parse "a"))
  (p-id (bel-parse "a") (bel-parse "b"))
  (p-id (bel-parse "(a)") (bel-parse "(a)")))

(def p-join make-pair)

(defn p-car [[t l _r :as form]]
  (cond
    (= bel-nil form) form

    (not= :pair t)
    (throw (Exception. "expected pair"))

    :else
    l))

(comment
  (p-car (bel-parse "(a b c)"))
  (p-car (bel-parse "nil")))

(defn p-cdr [[t _l r :as form]]
  (cond
    (= bel-nil form) form

    (not= :pair t)
    (throw (Exception. "expected pair"))

    :else
    r))

(comment
  (p-cdr (bel-parse "(a . b)"))
  (p-cdr (bel-parse "(a b)"))
  (p-cdr (bel-parse "nil")))

(defn p-type [[t]]
  [:symbol (name t)])

(comment
  (p-type (bel-parse "a"))
  (p-type (bel-parse "(a)"))
  (p-type (bel-parse "\\a")))

(defn p-xar [form y]
  (.set form 1 y)
  form)

(comment
  (p-xar (bel-parse "(a . b)") (bel-parse "c")))

(defn p-xdr [form y]
  (.set form 2 y)
  form)

(comment
  (p-xdr (bel-parse "(a . b)") (bel-parse "c")))

(defn pair->clojure-seq [[_t l [r-t :as r]]]
  (cons
   l
   (cond
     (= :pair r-t) (pair->clojure-seq r)
     (= bel-nil r) []
     :else [r])))

(defn p-sym [char-pairs]
  (let [cs (pair->clojure-seq char-pairs)
        _  (assert (every? (comp (partial = :char) first) cs)
                   "Expected a string")]
    [:symbol (->> cs (map second) cstring/join)]))

(comment
  (p-sym (p-cdr (bel-parse "\"foo\""))))

(defn p-nom [[t v]]
  (assert (= t :symbol) "expected symbol")
  (->> v
       (map (fn [c] [:char (str c)]))
       <-pairs))

(comment
  (p-nom (bel-parse "foo")))

;; todo: primitives for streams, sys

(defn p-coin [] (rand-nth [bel-t bel-nil]))

(comment (p-coin))

;; Globe & Scope
;; -------------

(def prim-name->fn
  {"id" #'p-id
   "car" #'p-car
   "cdr" #'p-cdr
   "join" #'p-join
   "type" #'p-type
   "xar" #'p-xar
   "xdr" #'p-xdr
   "sym" #'p-sym
   "nom" #'p-nom
   "coin" #'p-coin})

(def bel-globe
  (->> prim-name->fn
       (map (fn [[k]]
              (make-pair
               [:symbol k]
               (<-pairs [bel-lit bel-prim [:symbol k]]))))
       <-pairs))

(def bel-scope bel-nil)

;; Evaluator
;; ---------

(declare bel-eval)

(defn eval-symbol [env form]
  (if
   (#{bel-nil bel-t bel-o bel-apply} form)
    form
    (->> env
         pair->clojure-seq
         (filter (fn [[_ sym]]
                   (= form sym)))
         first
         (drop 2)
         first)))

(defn exec-prim [r args]
  (let [[_ [_ n]] r
        f (prim-name->fn n)
        niled-args (->> f
                        meta
                        :arglists
                        first
                        (map-indexed (fn [i _] (nth args i bel-nil))))
        _ (assert (<= (count args) (count niled-args))
                  "too many args")]
    (apply f niled-args)))

(defn eval-pair [env [_ l r :as x]]
  (cond
    (= bel-quote l) r
    (= bel-lit l) x
    :else
    (let [[f & args] (map (partial bel-eval env)
                          (pair->clojure-seq x))

          [_ lit [_ t r]] f
          _ (assert (= bel-lit lit)
                    "error: expected lit expression as fn call")]
       (condp = t
        bel-prim
        (exec-prim r args)

        (throw (Exception. "todo: unsupported fn call"))))))

(defn bel-eval [env [t :as form]]
  (condp = t
    :char form
    :symbol
    (eval-symbol env form)
    :pair
    (eval-pair env form)))

(comment
  (bel-eval bel-globe (bel-parse "nil"))
  (bel-eval bel-globe (bel-parse "'foo"))
  (bel-eval bel-globe (bel-parse "\"foo\""))
  (bel-eval bel-globe (bel-parse "(lit (foo bar baz))"))
  (bel-eval bel-globe (bel-parse "car"))
  (bel-eval bel-globe (bel-parse "(id t nil)"))
  (bel-eval bel-globe (bel-parse "(id t t)"))
  (bel-eval bel-globe (bel-parse "(id t)"))
  (bel-eval bel-globe (bel-parse "(id)")))

;; Source Reader
;; -------------

;; make a decision: how should I handle the pair data struct?
;;  if I use the arraylist, than I have to re-implement all the seq stuff
;;  but if I _don't_ -- than what? I make my own? a mutable v?
;; next, let's get set working
;; next, let's just get lit clo with nil working
;; this'll help us think about bel-globe
;; then, we can think about scope

