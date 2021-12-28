(ns bel-clojure.reader
  (:require
   [clojure.java.io :as io]
   [instaparse.core :as insta]
   [clojure.walk :as walk]
   [clojure.string :as cstring]
   [clojure.edn :as edn]
   [bel-clojure.model :as m]))

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
                     'fn
                     (m/make-pair
                      (m/make-pair '_ m/bel-nil)
                      (m/make-pair
                       (m/<-pairs xs)
                       m/bel-nil))))))

(defn <-compose [xs]
  (m/make-pair 'compose
               (m/<-pairs xs)))

(def comp->pair
  (form-transform :comp
                  (fn [[_ & xs]]
                    (<-compose
                     (reduce
                      (fn [ret x]
                        (into ret
                              (if (and (seqable? x) (= (first x) :no_comp))
                                ['no (second x)]
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
                  (fn [[_ v]]
                    [:number (edn/read-string v)])))

;; TODO: Right now, I only handle "sp"
;; We also want to handle tab, lf, cr, sp
;; I don't know lf cr sp. Will look deeper on that

(def transform-symbol
  (form-transform :symbol (fn [[_ v]] (symbol v))))

(def transform-space
  (form-transform :space (fn [_] "sp")))

(def parse-string (-> "bel.ebnf" io/resource insta/parser))

(def parse-postwalk
  (comp
   list->pair
   string->pair
   quote->pair
   transform-symbol
   unwrap-name
   unwrap-sexp
   transform-space
   abbrev-fn->pair
   comp->pair
   type-comp->pair
   transform-number))

(def bel-parse
  (comp (partial walk/postwalk parse-postwalk) parse-string cstring/trim))

;; ------
;; bel->pretty-clj

(defn bel->pretty-clj [form]
  (condp = (m/p-type form)
    'symbol (if (= m/bel-nil form) nil form)
    'char (symbol (str "c-" (second form)))
    'backquote (list 'bq (bel->pretty-clj (second form)))
    'comma (list 'cm (bel->pretty-clj (second form)))
    'splice (list 'spl (bel->pretty-clj (second form)))
    'err (list 'err (bel->pretty-clj (second form)))
    'number (second form)
    'pair
    (if (m/bel-string? form)
      (->> form
           m/pair->clojure-seq
           (map m/bel-char->clj)
           cstring/join)
      (let [[_ a b] form]
        (concat [(bel->pretty-clj a)]
                (cond
                  (= m/bel-nil b) nil
                  (m/bel-pair? b) (bel->pretty-clj b)
                  :else ['. (bel->pretty-clj b)]))))
    form))


