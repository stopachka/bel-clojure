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

(def clj-type type)
(defn type [x]
  (cond
    (bel-symbol? x) 'symbol
    (bel-string? x) 'string
    (bel-char? x) 'char
    (bel-number? x) 'number
    (= (clj-type x) java.util.HashMap) 'mut-map
    (= (clj-type x) clojure.lang.PersistentArrayMap) 'imm-map
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

(defn quoted-p [a]
  (p bel-quote a))

(defn seq->p
  [xs]
  (let [[x n & after-n] xs
        after-x (rest xs)]
    (if (empty? xs)
      bel-nil
      (p
       x
       (if (= bel-dot n)
         (first-and-only after-n "dotted list _must_ have 1 exp after the dot")
         (seq->p after-x))))))

(defn id [a b]
  (let [id-f (if (bel-pair? a) identical? =)]
    (if (id-f a b) bel-t bel-nil)))

(defn join [a b]
  (p a
     (if (bel-string? b) (seq->p b) b)))

(defn car [form]
  (cond
    (= bel-nil form) form

    (bel-string? form) (first form)

    (not (bel-pair? form))
    (throw (Exception. (format "expected pair, got = %s" form)))

    :else
    (second form)))

(defn cdr [form]
  (cond
    (= bel-nil form) form

    (bel-string? form) (seq->p (rest form))

    (not (bel-pair? form))
    (throw (Exception. (format "expected pair, got = %s" form)))

    :else
    (last form)))

(defn p->seq [form]
  (if (= bel-nil form)
    ()
    (cons
     (car form)
     (let [r (cdr form)]
       (cond
         (bel-pair? r) (p->seq r)
         (= bel-nil r) []
         :else [r])))))

(defn xar [form y]
  (.set form 1 y)
  form)

(defn xdr [form y]
  (.set form 2 y)
  form)

(def sym symbol)

(def nom name)

(defn coin [] (rand-nth [bel-t bel-nil]))

(defn p-append [a b]
  (cond
    (= bel-nil a) b
    (= bel-nil (cdr a)) (p (car a) b)
    :else
    (p
     (car a)
     (p-append (cdr a) b))))

;; ---------
;; Variable

(def bel-variable? bel-symbol?)

;; ---------
;; Optional

(defn bel-optional? [[_ h]]
  (= bel-o h))

(defn bel-optional-var [[_ _h [_ variable]]] variable)

(defn bel-optional-arg [[_ _h [_ _variable r]]] (car r))

;; ---------
;; Typecheck

(defn bel-typecheck? [[_ h]]
  (= bel-t h))

(defn bel-typecheck-var [[_ _h [_ variable]]] variable)

(defn bel-typecheck-f [[_ _h [_ _variable r]]] (car r))

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
