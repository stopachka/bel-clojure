(ns bel-clojure.instance.model
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

(defn make-pair [a b]
  (ArrayList. [:pair a b]))

;; ---------
;; Constants

(def bel-quote [:symbol "quote"])
(def bel-nil [:symbol "nil"])
(def bel-t [:symbol "t"])
(def bel-err-sym [:symbol "err"])
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
(def bel-cont [:symbol "cont"])
(def bel-vmark-sym [:symbol "vmark"])

(defonce bel-vmark (make-pair bel-nil bel-nil))

;; ----
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

(defn pair->clojure-seq [[_t l [r-t :as r] :as form]]
  (if (= bel-nil form)
    ()
    (cons
     l
     (cond
       (= :pair r-t) (pair->clojure-seq r)
       (= bel-nil r) []
       :else [r]))))

(defn p-id [[t-a :as a] b]
  (let [id-f (if (= t-a :pair) identical? =)]
    (if (id-f a b) bel-t bel-nil)))

(defn p-join [a b] (make-pair a b))

(defn p-car [[t l _r :as form]]
  (cond
    (= bel-nil form) form

    (not= :pair t)
    (throw (Exception. (format "expected pair, got = %s" form)))

    :else
    l))

(defn p-cdr [[t _l r :as form]]
  (cond
    (= bel-nil form) form





    (not= :pair t)
    (throw (Exception. (format "expected pair, got = %s" form)))

    :else
    r))

(defn p-type [[t]]
  [:symbol (name t)])

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
    [:symbol (->> cs (map second) cstring/join)]))

(defn p-nom [[t v]]
  (assert (= t :symbol) "expected symbol")
  (->> v
       (map (fn [c] [:char (str c)]))
       <-pairs))

(defn p-coin [] (rand-nth [bel-t bel-nil]))

(defn pair-proper? [[p-t :as p]]
  (or (= bel-nil p)
      (and (= p-t :pair)
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

(defn bel-string? [a]
  (and (pair-proper? a)
       (pair-every? (fn [[t]] (= t :char)) a)))

(defn bel-variable? [[var-t :as var-head]]
  (or
   (= var-t :symbol)
   (and (= var-t :pair)
        (= (p-id (p-car var-head) bel-vmark) bel-t))))

(defn bel-optional? [[_ h]]
  (= bel-o h))

(defn bel-optional-var [[_ _h [_ variable]]] variable)

(defn bel-optional-arg [[_ _h [_ _variable r]]] (p-car r))

(defn bel-typecheck? [[_ h]]
  (= bel-t h))

(defn bel-typecheck-var [[_ _h [_ variable]]] variable)

(defn bel-typecheck-f [[_ _h [_ _variable r]]] (p-car r))

(def bel-unwrap second)
(defn clj-num->bel-num  [x] [:number x])
(defn clj-bool->bel [x] (if x bel-t bel-nil))

(defn bel-char->clj [[_ v]]
  (condp = v
    "sp" " "
    v))
