(ns bel-clojure.instance.primitives
  (:require [clojure.string :as cstring]
            [bel-clojure.instance.model :as m]
            [bel-clojure.instance.reader :as r]))

;; --------------
;; Bel Primitives

(defn p-id [[t-a :as a] b]
  (let [id-f (if (= t-a :pair) identical? =)]
    (if (id-f a b)
      m/bel-t
      m/bel-nil)))

(comment
  (p-id (r/bel-parse "a") (r/bel-parse "a"))
  (p-id (r/bel-parse "a") (r/bel-parse "b"))
  (p-id (r/bel-parse "(a)") (r/bel-parse "(a)")))

(defn p-join [a b] (m/make-pair a b))

(comment
  (p-join (r/bel-parse "a") (r/bel-parse "b")))

(defn p-car [[t l _r :as form]]
  (cond
    (= m/bel-nil form) form

    (not= :pair t)
    (throw (Exception. (format "expected pair, got = %s" form)))

    :else
    l))

(comment
  (p-car (r/bel-parse "(a b c)"))
  (p-car (r/bel-parse "nil")))

(defn p-cdr [[t _l r :as form]]
  (cond
    (= m/bel-nil form) form

    (not= :pair t)
    (throw (Exception. "expected pair"))

    :else
    r))

(comment
  (p-cdr (r/bel-parse "(a . b)"))
  (p-cdr (r/bel-parse "(a b)"))
  (p-cdr (r/bel-parse "nil")))

(defn p-type [[t]]
  [:symbol (name t)])

(comment
  (p-type (r/bel-parse "a"))
  (p-type (r/bel-parse "(a)"))
  (p-type (r/bel-parse "\\a")))

(defn p-xar [form y]
  (.set form 1 y)
  form)

(comment
  (p-xar (r/bel-parse "(a . b)") (r/bel-parse "c")))

(defn p-xdr [form y]
  (.set form 2 y)
  form)

(comment
  (p-xdr (r/bel-parse "(a . b)") (r/bel-parse "c")))

(defn p-sym [char-pairs]
  (let [cs (m/pair->clojure-seq char-pairs)
        _  (assert (every? (comp (partial = :char) first) cs)
                   "Expected a string")]
    [:symbol (->> cs (map second) cstring/join)]))

(comment
  (p-sym (p-cdr (r/bel-parse "\"foo\""))))

(defn p-nom [[t v]]
  (assert (= t :symbol) "expected symbol")
  (->> v
       (map (fn [c] [:char (str c)]))
       m/<-pairs))

(comment
  (p-nom (r/bel-parse "foo")))

;; todo: primitives for streams, sys

(defn p-coin [] (rand-nth [m/bel-t m/bel-nil]))

(comment (p-coin))

(defn p-debug
  "Note, this is not necessary for
   Bel, but helps for debugging"
  [x]
  (println "[DEBUG] " (r/bel->pretty-clj x)))

