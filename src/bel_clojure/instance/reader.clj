(ns bel-clojure.instance.reader
  (:require
   [clojure.java.io :as io]
   [instaparse.core :as insta]
   [clojure.walk :as walk]
   [bel-clojure.instance.model :as m]))

(defn form-transform
  [k f]
  (fn [x]
    (if (and
         (coll? x)
         (= (first x) k))
      (f x)
      x)))

(def unwrap-sexp (form-transform :sexp second))

(def list->pair
  (form-transform
   :list
   (fn [[_t & children]]
     (m/<-pairs children))))

(def string->pair
  (form-transform
   :string
   (fn [[_t & children]]
     (m/<-pairs (map (fn [[_ v]] [:char v]) children)))))

(def unwrap-name (form-transform :name second))

(def quote->pair
  (form-transform :quote
                  (fn [[_ exp]]
                    (m/make-quoted-pair exp))))

(def abbrev-fn->pair
  (form-transform :abbrev_fn
                  (fn [[_ & xs]]
                    (m/make-pair
                     [:symbol "fn"]
                     (m/make-pair
                      (m/make-pair [:symbol "_"] m/bel-nil)
                      (m/make-pair
                       (m/<-pairs xs)
                       m/bel-nil))))))

(def parse-string (-> "bel.ebnf" io/resource insta/parser))

(def parse-postwalk
  (comp
   list->pair
   string->pair
   quote->pair
   unwrap-name
   unwrap-sexp
   abbrev-fn->pair))

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
  (bel-parse "()")
  (bel-parse "`(foo ,a ,@b)")
  (bel-parse "=")
  (bel-parse ">=")
  (bel-parse "[id _ (car args)]"))

;; ------
;; bel->pretty-clj

(defn ensure-seq [x]
  (seq? x)
  [x])

(defn bel->pretty-clj [[t a b :as form]]
  (condp = t
    :symbol (symbol a)
    :char (symbol a)
    :pair
    (concat (ensure-seq (bel->pretty-clj a))
            (ensure-seq (bel->pretty-clj b)))
    form))

