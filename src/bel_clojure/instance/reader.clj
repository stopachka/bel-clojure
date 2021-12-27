(ns bel-clojure.instance.reader
  (:require
   [clojure.java.io :as io]
   [instaparse.core :as insta]
   [clojure.walk :as walk]
   [bel-clojure.instance.model :as m]
   [clojure.string :as cstring]
   [clojure.edn :as edn]))

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

(def unwrap-name (form-transform :name (fn [[_ & xs]]
                                         (cstring/join (map second xs)))))

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

(defn <-compose [xs]
  (m/make-pair
   [:symbol "compose"]
   (m/<-pairs xs)))

(def comp->pair
  (form-transform :comp
                  (fn [[_ & xs]]
                    (<-compose
                     (reduce
                      (fn [ret [t r :as x]]
                        (into ret
                              (if (= t :no_comp)
                                [[:symbol "no"] r]
                                [x])))
                      []
                      xs)))))

(def type-comp->pair
  (form-transform :type_comp
                  (fn [[_ a b]]
                    (m/make-pair
                     m/bel-t
                     (m/make-pair a (m/make-pair b m/bel-nil))))))

(def transform-number
  (form-transform :number
                  (fn [[_ & xs]]
                    [:number
                     (->> xs
                          (map second)
                          cstring/join
                          edn/read-string)])))

(def parse-string (-> "bel.ebnf" io/resource insta/parser))

(def parse-postwalk
  (comp
   list->pair
   string->pair
   quote->pair
   unwrap-name
   unwrap-sexp
   abbrev-fn->pair
   comp->pair
   type-comp->pair
   transform-number))

(def bel-parse
  (comp (partial walk/postwalk parse-postwalk) parse-string cstring/trim))

;; ------
;; bel->pretty-clj

(defn bel->pretty-clj [[t a b :as form]]
  (cond
    (= m/bel-nil form) nil
    (= t :symbol) (symbol a)
    (= t :char) (symbol (str "c-" a))
    (= t :backquote) (list 'bq (bel->pretty-clj a))
    (= t :comma) (list 'cm (bel->pretty-clj a))
    (= t :splice) (list 'spl (bel->pretty-clj a))
    (= t :err) (list 'err (bel->pretty-clj (second form)))
    (= t :number) a
    (m/bel-string? form)
    (->> form
         m/pair->clojure-seq
         (map second)
         cstring/join)

    (= t :pair)
    (let [[b-t] b]
      (concat [(bel->pretty-clj a)]
              (cond
                (= m/bel-nil b) nil
                (= :pair b-t) (bel->pretty-clj b)
                :else ['. (bel->pretty-clj b)])))

    :else
    form))
