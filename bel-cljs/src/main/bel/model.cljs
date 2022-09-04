(ns bel.model
  (:require [goog.object :as gobj])
  (:refer-clojure :rename {type clj-type
                           symbol? clj-symbol?
                           string? clj-string?
                           char? clj-char?
                           number? clj-number?}))

;; ----
;; Misc

(defn first-and-only [xs msg]
  (assert (= (count xs) 1) msg)
  (first xs))

;; -------------
;; primitive types

(def string? clj-string?)

;; hack: js does not have chars. We need to be careful
(defn char? [x]
  (and (string? x) (= (count x) 1)))

(def symbol? clj-symbol?)
(def number? clj-number?)

(def pair? array?)
(def mut-map? object?)
(def imm-map? (comp (partial = PersistentArrayMap) clj-type))
(def clj-err? (partial instance? js/Error))

(defn type-nilable [x]
  (cond
    (symbol? x) 'symbol
    (char? x) 'char
    (number? x) 'number
    (string? x) 'string
    (pair? x) 'pair
    (mut-map? x) 'mut-map
    (imm-map? x) 'imm-map
    (clj-err? x) 'clj-err
    :else
    (let [v (and (seqable? x) (first x))]
      (when (#{:splice :comma :backquote} v)
        (symbol (name v))))))

(defn type [x]
  (let [v (type-nilable x)]
    (assert v (str "unsupported type for form = " x))
    v))

;; ---------
;; Pair Cons

(def p array)

;; ---------
;; Constants

(def bel-quote 'quote)
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
  (p bel-quote (p a bel-nil)))

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
  (let [id-f (if (pair? a) identical? =)]
    (if (id-f a b) bel-t bel-nil)))

(defn join [a b]
  (p a
     (if (string? b) (seq->p b) b)))

(defn car [form]
  (cond
    (= bel-nil form) form

    (string? form) (first form)

    (not (pair? form))
    (throw (js/Error.  (str "expected pair, got = " form)))

    :else
    (first form)))

(defn cdr [form]
  (cond
    (= bel-nil form) form

    (string? form) (seq->p (rest form))

    (not (pair? form))
    (throw (js/Error. (str "expected pair, got = " form)))

    :else
    (last form)))

(defn p->seq [form]
  (if (= bel-nil form)
    ()
    (cons
     (car form)
     (let [r (cdr form)]
       (cond
         (pair? r) (p->seq r)
         (= bel-nil r) []
         :else [r])))))

(defn xar [form y]
  (aset form 0 y)
  form)

(defn xdr [form y]
  (aset form 1 y)
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

(def bel-variable? symbol?)

;; ---------
;; Optional

(defn bel-optional? [[h]]
  (= bel-o h))

(defn bel-optional-var [[_h [variable]]] variable)

(defn bel-optional-arg [[_h [_variable r]]] (car r))

;; ---------
;; Typecheck

(defn bel-typecheck? [[h]]
  (= bel-t h))

(defn bel-typecheck-var [[_h [variable]]] variable)

(defn bel-typecheck-f [[_h [_variable r]]] (car r))

;; -------
;; Interop

(defn clj-bool->bel [x] (if x bel-t bel-nil))

;; ----
;; Maps

(defn map-get [m k]
  (if (= m bel-nil)
    bel-nil
    (or (get m k) (gobj/get m k) bel-nil)))

(defn map-assoc [m k v]
  (let [m' (if (= bel-nil m) {} m)]
    (assoc m' k v)))

(defn map-dissoc [m k]
  (if (= bel-nil m) bel-nil
      (let [m' (dissoc m k)]
        (if (empty? m') bel-nil m'))))

(defn mut-map []
  #js {})

(defn map-put [m k v]
  (gobj/set m k v)
  m)

(defn map-delete [m k]
  (js-delete  m k))

