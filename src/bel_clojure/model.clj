(ns bel-clojure.model
  (:require
   [clojure.string :aj cstring]
   [bel-clojure.model :as m])
  (:import
   (java.util ArrayList)))

;; ----
;; Misc

(defn first-and-only [xs msg]
  (assert (= (count xs) 1) msg)
  (first xs))

;; ---------
;; Pair Cons

(defn make-pair [a b]
  (ArrayList. [:pair a b]))

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

(declare p-car p-cdr)

(defn pair->clojure-seq [form]
  (if (= bel-nil form)
    ()
    (cons
     (p-car form)
     (let [r (p-cdr form)]
       (cond
         (m/bel-pair? r) (pair->clojure-seq r)
         (= bel-nil r) []
         :else [r])))))

(declare bel-pair?)

(defn p-id [a b]
  (let [id-f (if (bel-pair? a) identical? =)]
    (if (id-f a b) bel-t bel-nil)))

(defn p-join [a b] (make-pair a b))

(defn p-car [form]
  (cond
    (= bel-nil form) form

    (not (bel-pair? form))
    (throw (Exception. (format "expected pair, got = %s" form)))

    :else
    (second form)))

(defn p-cdr [form]
  (cond
    (= bel-nil form) form

    (not (bel-pair? form))
    (throw (Exception. (format "expected pair, got = %s" form)))

    :else
    (last form)))

(defn p-type [x]
  (condp = (type x)
    clojure.lang.Symbol 'symbol
    (symbol (first x))))

(defn bel-pair? [a] (and (seqable? a) (= (first a) :pair)))
(defn bel-char? [a] (and (seqable? a) (= (first a) :char)))
(defn bel-symbol? [a] (= (type a) clojure.lang.Symbol))

(defn p-xar [form y]
  (.set form 1 y)
  form)

(defn p-xdr [form y]
  (.set form 2 y)
  form)

(defn p-sym [char-pairs]
  (let [cs (pair->clojure-seq char-pairs)
        _  (assert (every? (comp (partial = :char) first) cs)
                   "Expected a string")]
    (symbol (->> cs (map second) cstring/join))))

(defn p-nom [x]
  (->> (name x)
       (map (fn [c] [:char (str c)]))
       <-pairs))

(defn p-coin [] (rand-nth [bel-t bel-nil]))

(defn pair-proper? [p]
  (or (= bel-nil p)
      (and (m/bel-pair? p)
           (pair-proper? (p-cdr p)))))

(defn pair-find [f p]
  (loop [p p]
    (cond
      (= bel-nil p) p
      (f (p-car p)) (p-car p)
      :else (recur (p-cdr p)))))

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

;; -------
;; String

(defn bel-string? [a]
  (and (bel-pair? a)
       (pair-proper? a)
       (pair-every? bel-char? a)))

;; ---------
;; Variable

(defn bel-variable? [x]
  (or
   (bel-symbol? x)
   (and (bel-pair? x)
        (= (p-id (p-car x) bel-vmark) bel-t))))

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

(def bel-unwrap second)

(defn clj-num->bel-num  [x] [:number x])

(defn clj-bool->bel [x] (if x bel-t bel-nil))

(defn bel-char->clj [[_ v]]
  (condp = v
    "sp" " "
    v))
