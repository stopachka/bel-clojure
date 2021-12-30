(ns bel-clojure.model
  (:import
   (java.util ArrayList)))

;; ----
;; Misc

(defn first-and-only [xs msg]
  (assert (= (count xs) 1) msg)
  (first xs))

;; -------------
;; Primitive Types

(def bel-string? string?)
(def bel-char? char?)
(def bel-symbol? symbol?)
(def bel-number? number?)
(defn bel-pair? [a] (and (seqable? a) (= :pair (first a))))

(defn p-type [x]
  (cond
    (bel-symbol? x) 'symbol
    (bel-string? x) 'string
    (bel-char? x) 'char
    (bel-number? x) 'number
    (= (type x) java.util.HashMap) 'mut-map
    (= (type x) clojure.lang.PersistentArrayMap) 'imm-map
    :else (symbol (first x))))

;; ---------
;; Pair Cons

(defn p
  ([a b]
   (ArrayList. [:pair a b])))

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

;; -------------
;; Pair Helpers

(defn make-quoted-pair [a]
  (p bel-quote a))

(defn <-pairs
  [xs]
  (let [[x n & after-n] xs
        after-x (rest xs)]
    (if (empty? xs)
      bel-nil
      (p
       x
       (if (= bel-dot n)
         (first-and-only after-n "dotted list _must_ have 1 exp after the dot")
         (<-pairs after-x))))))

(defn p-id [a b]
  (let [id-f (if (bel-pair? a) identical? =)]
    (if (id-f a b) bel-t bel-nil)))

(defn p-join [a b]
  (p a
     (if (bel-string? b) (<-pairs b) b)))

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

(defn p-xar [form y]
  (.set form 1 y)
  form)

(defn p-xdr [form y]
  (.set form 2 y)
  form)

(def p-sym symbol)

(def p-nom name)

(defn p-coin [] (rand-nth [bel-t bel-nil]))

(defn pair-append [a b]
  (cond
    (= bel-nil a) b
    (= bel-nil (p-cdr a)) (p (p-car a) b)
    :else
    (p
     (p-car a)
     (pair-append (p-cdr a) b))))

;; ---------
;; Variable

(def bel-variable? bel-symbol?)

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
