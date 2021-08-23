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
(def bel-set [:symbol "set"])
(def bel-clo [:symbol "clo"])
(def bel-mac [:symbol "mac"])
(def bel-globe [:symbol "globe"])
(def bel-scope [:symbol "scope"])
(def bel-if [:symbol "if"])

;; Reader
;; ------

(defn form-transform
  [k f]
  (fn [x]
    (if (and
         (coll? x)
         (= (first x) k))
      (f x)
      x)))

(defn make-pair [a b]
  (ArrayList. [:pair a b]))

(defn make-quoted-pair [a]
  (make-pair bel-quote a))

(defn first-and-only [xs msg]
  (assert (= (count xs) 1) msg)
  (first xs))

(def unwrap-sexp (form-transform :sexp second))

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

(def parse-string (-> "bel.ebnf" io/resource insta/parser))

(def parse-postwalk
  (comp
   list->pair
   string->pair
   quote->pair
   unwrap-name
   unwrap-sexp))

(def bel-parse
  (comp (partial walk/postwalk parse-postwalk) parse-string))

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

(defn p-join [a b] (make-pair a b))

(comment
  (p-join (bel-parse "a") (bel-parse "b")))

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

;; Globe
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

(defn make-bel-globe []
  (->> prim-name->fn
       (map (fn [[k]]
              (make-pair
               [:symbol k]
               (<-pairs [bel-lit bel-prim [:symbol k]]))))
       <-pairs))

;; Evaluator
;; ---------

(declare bel-eval)

(defn find-val [sym-to-find pairs]
  (some->> pairs
           pair->clojure-seq
           (filter (fn [[_ sym]]
                     (= sym-to-find sym)))
           first
           p-cdr))

(defn eval-symbol [{:keys [scope globe]} form]
  (cond
    (#{bel-nil bel-t bel-o bel-apply} form) form
    (= bel-globe form) globe
    (= bel-scope form) scope
    :else
    (let [v (->> [scope globe]
                 (some (partial find-val form)))]
      (assert v (format "expected value for symbol = %s" form))

      v)))

(comment
  (eval-symbol {:globe (make-bel-globe)} [:symbol "id"]))

(defn map-pair [f p]
  (if (= bel-nil p) bel-nil
      (make-pair
       (f (p-car p))
       (map-pair f (p-cdr p)))))

(defn args-head->evaled-args-seq [env args-head]
  (map (partial bel-eval env) (pair->clojure-seq args-head)))

(defn exec-prim [env r args-head]
  (let [[_ [_ n]] r
        args (args-head->evaled-args-seq env args-head)
        f (prim-name->fn n)
        niled-args (->> f
                        meta
                        :arglists
                        first
                        (map-indexed (fn [i _] (nth args i bel-nil))))
        _ (assert (<= (count args) (count niled-args))
                  (format
                   "too many args = %s niled-args = %s niled-args" args niled-args))]

    (apply f niled-args)))

(defn make-var-pair [[sym-t :as sym] evaled]
  (assert (= :symbol sym-t)
          (format
           "expected left-side of set to be a symbol = %s" sym))
  (make-pair sym evaled))

(defn exec-set [{:keys [globe] :as env} [_ _ r]]
  (->> r
       pair->clojure-seq
       (partition 2)
       (map (fn [[sym v]]
              (let [to-set (bel-eval env v)
                    [_ head tail] globe]
                (p-xar globe (make-var-pair sym to-set))
                (p-xdr globe (make-pair head tail)))))
       doall))

(defn exec-clo [env r args-seq]
  (let [[scope args-var-head body-head] (pair->clojure-seq r)
        args-vars (pair->clojure-seq args-var-head)
        new-scope
        (reduce (fn [s p] (make-pair p s))
                scope
                (map make-var-pair args-vars args-seq))]
    (bel-eval
     (assoc env :scope new-scope)
     body-head)))

(defn exec-mac [env r args-head]
  (let [code (exec-clo
              env
              (p-cdr (p-cdr (p-car r)))
              (pair->clojure-seq args-head))]
    (bel-eval env code)))

(defn eval-if [env [_ test-form [_ consequent-form r]]]
  (if (not= (bel-eval env test-form)
            bel-nil)
    (bel-eval env consequent-form)
    (cond
      (= bel-nil r) r
      (= bel-nil (p-cdr r)) (bel-eval env (p-car r))
      :else (eval-if env r))))

(defn eval-pair [env [_ l r :as x]]
  (cond
    (= bel-quote l) r
    (= bel-lit l) x
    (= bel-set l) (exec-set env x)
    (= bel-if l) (eval-if env r)
    :else
    (let [[_ f args-head] x
          evaled-f (bel-eval env f)
          [_ lit [_ t r]] evaled-f
          _ (assert (= bel-lit lit)
                    "error: expected lit expression as fn call")]
      (condp = t
        bel-prim
        (exec-prim env r args-head)
        bel-clo
        (exec-clo env r (args-head->evaled-args-seq env args-head))
        bel-mac
        (exec-mac env r args-head)
        (throw (Exception. "todo: unsupported fn call"))))))

(defn bel-eval [env [t :as form]]
  (condp = t
    :char form
    :symbol
    (eval-symbol env form)
    :pair
    (eval-pair env form)))

(defn run [& ss]
  (let [globe (make-bel-globe)]
    (->> ss
         (map (fn [s] (bel-eval {:globe globe} (bel-parse s))))
         doall
         last)))

(comment
  (run "nil")
  (run "'foo")
  (run "\"foo\"")
  (run "(lit (foo bar baz))")
  (run "car")
  (run "(car '(a b))")
  (run "(id t nil)")
  (run "(id t t)")
  (run "(id t)")
  (run "(id)")
  (run "(set a 'b)" "a")
  (run "((lit clo nil (x) (id x t)) t)")
  (run "((lit clo nil (x) (id x t)) nil)")
  (run "globe")
  (run "(if nil a)")
  (run "(if t 'a)")
  (run "(if nil 'a 'b)")
  (run "(if nil a nil b t 'c)"))

;; Source Reader
;; -------------

(defn readable-source
  "I've added a BREAK character. This way,
   we can incrementally evaluate the source,
   and build up this interpreter"
  []
  (->> (-> (io/resource "source.bel")
           slurp
           (cstring/split #"\n"))
       (partition-by cstring/blank?)
       (map (fn [xs] (cstring/join "\n" xs)))
       (remove (fn [s]
                 (cstring/starts-with? s ";")))

       (remove cstring/blank?)
       (take-while
        (fn [s] (not= s "===BREAK===")))))

(comment
  (apply run (readable-source)))


; next up, let's stop using pair->clojure-seq -- just create pair helper fns
; then, do the smarter assignment for sym -> val on lambda
