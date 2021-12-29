(ns bel-clojure.model
  (:require
   [clojure.string :as cstring])
  (:import
   (java.util ArrayList)))

;; ----
;; Misc

(defn first-and-only [xs msg]
  (assert (= (count xs) 1) msg)
  (first xs))

;; ---------
;; Pair Cons

(defn make-pair
  ([a b]
   (ArrayList. [:pair a b] )))

;; ---------
;; Constants

(def bel-quote 'qt)
(def bel-nil (symbol "nil"))
(def bel-t 't)
(def bel-err-sym 'err)
(def bel-dot [:dot "."])
(def bel-lit 'lit)
(def bel-prim 'prim)
(def bel-o 'o)
(def bel-a 'a)
(def bel-d 'd)
(def bel-apply 'apply)
(def bel-set 'set)
(def bel-clo 'clo)
(def bel-mac 'mac)
(def bel-globe 'globe)
(def bel-scope 'scope)
(def bel-if 'if)
(def bel-cont 'cont)
(def bel-vmark-sym 'vmark)

(defonce bel-vmark (make-pair bel-nil bel-nil))

;; -------------
;; Pair Helpers

(defn make-quoted-pair [a]
  (make-pair bel-quote a))

(defn <-pairs
  [xs]
  (let [[x n & after-n] xs
        after-x (rest xs)]
    (if (empty? xs)
      bel-nil
      (make-pair
       x
       (if (= bel-dot n)
         (first-and-only after-n "dotted list _must_ have 1 exp after the dot")
         (<-pairs after-x))))))

(declare p-car p-cdr)

(declare bel-pair?)

(defn pair->clojure-seq [form]
  (if (= bel-nil form)
    ()
    (cons
     (p-car form)
     (let [r (p-cdr form)]
       (cond
         (bel-pair? r) (pair->clojure-seq r)
         (= bel-nil r) []
         :else [r])))))

(declare bel-pair?)

(defn p-id [a b]
  (let [id-f (if (bel-pair? a) identical? =)]
    (if (id-f a b) bel-t bel-nil)))

(defn p-join [a b] (make-pair a b))

(def bel-string? string?)
(def bel-char? char?)
(def bel-symbol? symbol?)
(def bel-number? number?)

(defn p-car [form]
  (cond
    (= bel-nil form) form

    (bel-string? form) (first form)

    (not (bel-pair? form))
    (throw (Exception. (format "expected pair, got = %s" form)))

    :else
    (second form)))

(defn p-cdr [form]
  (cond
    (= bel-nil form) form

    (bel-string? form) (<-pairs (rest form))

    (not (bel-pair? form))
    (throw (Exception. (format "expected pair, got = %s" form)))

    :else
    (last form)))

(defn p-type [x]
  (cond
    (symbol? x) 'symbol
    (string? x) 'string
    (char? x) 'char
    (number? x) 'number
    (= (type x) java.util.HashMap) 'mut-map
    (= (type x) clojure.lang.PersistentArrayMap) 'imm-map
    :else (symbol (first x))))

(defn bel-pair? [a] (and (seqable? a) (= :pair (first a))))

(defn p-xar [form y]
  (.set form 1 y)
  form)

(defn p-xdr [form y]
  (.set form 2 y)
  form)

(def p-sym symbol)

(def p-nom name)

(defn p-coin [] (rand-nth [bel-t bel-nil]))

(defn pair-proper? [p]
  (or (= bel-nil p)
      (and (bel-pair? p)
           (pair-proper? (p-cdr p)))))

(defn pair-map [f p]
  (if (= bel-nil p) bel-nil
      (make-pair
       (f (p-car p))
       (pair-map f (p-cdr p)))))

(defn pair-append [a b]
  (cond
    (= bel-nil a) b
    (= bel-nil (p-cdr a)) (make-pair (p-car a) b)
    :else
    (make-pair
     (p-car a)
     (pair-append (p-cdr a) b))))

(defn pair-every? [f p]
  (if (= bel-nil p) true
      (and (f (p-car p))
           (pair-every? f (p-cdr p)))))

;; ---------
;; Variable


(defn bel-variable? [x]
  (bel-symbol? x))

;; ---------
;; Optional

(defn bel-optional? [[_ h]]
  (= bel-o h))

(defn bel-optional-var [[_ _h [_ variable]]] variable)

(defn bel-optional-arg [[_ _h [_ _variable r]]] (p-car r))

;; ---------
;; Typecheck

(defn bel-typecheck? [[_ h]]
  (= bel-t h))

(defn bel-typecheck-var [[_ _h [_ variable]]] variable)

(defn bel-typecheck-f [[_ _h [_ _variable r]]] (p-car r))

;; -------
;; Interop

(defn clj-bool->bel [x] (if x bel-t bel-nil))

;; ----
;; Maps

(defn map-get [m k]
  (if (= m bel-nil)
    bel-nil
    (or (.get m k) bel-nil)))

(defn map-assoc [m k v]
  (let [m' (if (= bel-nil m) {} m)]
    (assoc m' k v)))

(defn map-dissoc [m k]
  (if (= bel-nil m) bel-nil
      (let [m' (dissoc m k)]
        (if (empty? m') bel-nil m'))))

(defn mut-map []
  (java.util.HashMap.))

(defn map-put [m k v]
  (.put m k v))

(defn map-delete [m k]
  (.remove m k))

