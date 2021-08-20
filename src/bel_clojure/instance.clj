(ns bel-clojure.instancej
  (:require
   [clojure.java.io :as io]
   [instaparse.core :as insta]
   [clojure.walk :as walk]))

;; Reader
;; ------

(def parse-string
  (-> "bel.ebnf"
      io/resource
      slurp
      insta/parser))

(defn walk-on-form [k f]
  (fn [x]
    (if (and
         (coll? x)
         (= (first x) k))
      (f x)
      x)))

(def unwrap-sexp (walk-on-form :sexp second))
(def unwrap-name (walk-on-form :name second))
(def list->pair
  (walk-on-form
   :list
   (fn [[_t & children]]
     (let [[left-side right-side]
           (split-with (fn [[t]]
                         (not= t :dot))
                       children)]
       [:pair
        left-side
        right-side]))))

(->> "(foo . bar)"
     parse-string
     (walk/postwalk
      (comp
       list->pair
       unwrap-name
       unwrap-sexp)))

;; TODO for parse tree:
"
Hmm, okay. So now, here's what I know:

Lists are made of pairs.

When we ingest a list, we must convert it to pairs

Strings are a list of chars. Same idea, they _should_ convert to a list of chars

And a _Pair_ can be mutable. It's left and right half can be switched up.


"

;; Evaluator
;; ---------



