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

(def unwrap-space (form-transform :space second))

(def list->pair
  (form-transform
   :list
   (fn [[_t & children]]
     (m/<-pairs children))))

(def string->pair
  (form-transform
   :string
   (fn [[_t & children]]
     (cstring/join (map second  children)))))

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

(declare handle-abbrev-sym)

(defn handle-bar [left-xs right-xs]
  (m/make-pair 't (m/make-pair
                   (handle-abbrev-sym left-xs)
                   (m/make-pair
                    (handle-abbrev-sym right-xs)
                    m/bel-nil))))

(defn handle-dot [left-xs right-xs]
  (m/make-pair (if (seq left-xs)
                 (handle-abbrev-sym left-xs)
                 'upon)
               (m/make-pair (handle-abbrev-sym right-xs) m/bel-nil)))

(defn handle-excl [left-xs right-xs]
  (m/make-pair (if (seq left-xs)
                 (handle-abbrev-sym left-xs)
                 'upon)
               (m/make-pair (m/make-pair m/bel-quote
                                         (handle-abbrev-sym right-xs)) m/bel-nil)))

(defn handle-no [left-xs [r & right-xs]]
  (handle-abbrev-sym
   (concat left-xs
           [(m/make-pair
             'compose
             (m/make-pair
              'no
              (m/make-pair r m/bel-nil)))]
           right-xs)))

(defn handle-col [left-xs right-xs]
  (m/make-pair
   'compose
   (->> (concat left-xs right-xs)
        (remove (fn [x] (and (seqable? x) (= (first x) :comp_id))))
        m/<-pairs)))

(defn handle-abbrev-sym [x]
  (if
   (or (m/bel-pair? x) (m/bel-symbol? x))
    x
    (let [[id f] (->> [["|" handle-bar]
                       ["." handle-dot]
                       ["!" handle-excl]
                       ["~" handle-no]
                       [":" handle-col]]
                      (filter (fn [[id]]
                                (some (partial = [:comp_id id]) x)))
                      first)
          [before-id [_ & after-id]]
          (split-with (partial not= [:comp_id id]) x)]
      (if f
        (f before-id after-id)
        (first x)))))

(def abbrev-sym->pair
  (form-transform :comp_sym
                  (fn [[_ & xs :as form]]
                    (handle-abbrev-sym xs))))

(def transform-number
  (form-transform :number
                  (fn [[_ v]] (edn/read-string v))))

(def transform-symbol
  (form-transform :symbol (fn [[_ v]]
                            (symbol v))))

(def transform-char
  (form-transform :char (fn [[_ x]]
                          (edn/read-string (str "\\" x)))))

(def parse-string (-> "bel.ebnf" io/resource insta/parser))

(def unwrap-abbrev-sym-pt (form-transform :abbrev_sym_pt second))

(def parse-postwalk
  (comp
   list->pair
   string->pair
   quote->pair
   transform-symbol
   unwrap-name
   unwrap-sexp
   unwrap-abbrev-sym-pt
   unwrap-space
   abbrev-fn->pair
   abbrev-sym->pair
   transform-number
   transform-char))

(def bel-parse
  (comp (partial walk/postwalk parse-postwalk) parse-string cstring/trim))

;; ----------------
;; bel->pretty-clj

(defn bel->pretty-clj [form]
  (condp = (m/p-type form)
    'symbol (if (= m/bel-nil form) nil form)
    'backquote (list 'bq (bel->pretty-clj (second form)))
    'comma (list 'cm (bel->pretty-clj (second form)))
    'splice (list 'spl (bel->pretty-clj (second form)))
    'err (list 'err (bel->pretty-clj (second form)))
    'char form
    'number form
    'string form
    'pair
    (let [[_ a b] form]
      (concat [(bel->pretty-clj a)]
                (cond
                  (= m/bel-nil b) nil
                  (m/bel-pair? b) (bel->pretty-clj b)
                  :else ['. (bel->pretty-clj b)])))
    form))

