(ns bel-clojure.instancej
  (:require
   [clojure.java.io :as io]
   [instaparse.core :as insta]
   [clojure.walk :as walk])
  (:import
   (java.util ArrayList)))

;; Reader
;; ------

(def bel-nil [:symbol "nil"])
(def bel-t [:symbol "t"])

(def parse-string
  (-> "bel.ebnf"
      io/resource
      slurp
      insta/parser))

(defn walk-on-form
  [k f]
  (fn [x]
    (if (and
         (coll? x)
         (= (first x) k))
      (f x)
      x)))

(def unwrap-sexp (walk-on-form :sexp second))

(defn make-pair [a b]
  (ArrayList. [:pair a b]))

(defn make-quoted-pair [a]
  (make-pair [:symbol "quote"] a))

(defn dot? [[t]]
  (= :dot t))

(defn first-and-only [xs msg]
  (assert (= (count xs) 1) msg)
  (first xs))

(defn <-pairs [xs]
  (let [[x n] xs
        r (rest xs)]
    (make-pair
     x
     (cond
       (dot? n)
       (first-and-only (rest r)
                       "dotted list _must_ have 1 exp after the dot")

       (empty? r)
       bel-nil

       :else
       (<-pairs r)))))

(def list->pair
  (walk-on-form
   :list
   (fn [[_t & children]]
     (<-pairs children))))

(def string->pair
  (walk-on-form
   :string
   (fn [[_t & children]]
     (make-quoted-pair
      (<-pairs
       (map (fn [[_ v]]
              [:char v])
            children))))))

(def unwrap-name (walk-on-form :name second))

(def quote->pair
  (walk-on-form :quote
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
  (bel-parse "'+")
  (bel-parse "\\bel")
  ;; uh oh
  (bel-parse "(a . b)")
  (bel-parse "(a b . c)"))

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

    ;; TODO: is this err the right thing?
    ;; perhaps delegate to `err` fn
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

    ;; TODO: is this err the right thing?
    ;; perhaps delegate to `err` fn
    (not= :pair t)
    (throw (Exception. "expected pair"))

    :else
    r)
  )

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

;; Evaluator
;; ---------

(defn eval-symbol [env [_ v :as form]]
  (cond
    (#{"t" "nil" "o" "apply"} v)
    form
    :else
    (throw (Exception. "todo: implement fetch var"))))

(defn quote? [[t v :as _form]]
  (and (= t :symbol) (= v "quote")))

(defn eval-pair [env [_ l r :as x]]
  (cond
    (quote? l) r
    :else
    (throw (Exception. "todo: implement pair eval"))))

(defn bel-eval [env [t :as form]]
  (condp = t
    :char form
    :symbol
    (eval-symbol env form)
    :pair
    (eval-pair env form)))

(def global-env {})
(comment
  (bel-eval global-env (bel-parse "nil"))
  (bel-eval global-env (bel-parse "'foo"))
  (bel-eval global-env (bel-parse "\"foo\"")))

;; TODOs:
;; symbol nil -> empty list on read?
;; () -> will this make the empty list? what does that mean again?

