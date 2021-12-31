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

;; -------
;; unwrap 

(def unwrap-sexp (form-transform :sexp second))

(def unwrap-space (form-transform :space second))

(def unwrap-name (form-transform :name second))

;; ----
;; list 

(def list->pair
  (form-transform
   :list
   (fn [[_t & children]]
     (m/seq->p children))))

;; -------
;; string 

(def transform-string
  (form-transform
   :string
   (fn [[_t & children]]
     (cstring/join (map second children)))))

;; -----
;; quote

(def quote->pair
  (form-transform :quote
                  (fn [[_ exp]]
                    (m/quoted-p exp))))

;; ----------
;; abbrev-fn

(def abbrev-fn->pair
  (form-transform :abbrev_fn
                  (fn [[_ & xs]]
                    (m/p
                     'fn
                     (m/p
                      (m/p '_ m/bel-nil)
                      (m/p
                       (m/seq->p xs)
                       m/bel-nil))))))

;; ----------
;; abbrev-sym 

(declare handle-abbrev-sym)

(defn handle-bar [left-xs right-xs]
  (m/p 't (m/p
           (handle-abbrev-sym left-xs)
           (m/p
            (handle-abbrev-sym right-xs)
            m/bel-nil))))

(defn handle-dot [left-xs right-xs]
  (m/p (if (seq left-xs)
         (handle-abbrev-sym left-xs)
         'upon)
       (m/p (handle-abbrev-sym right-xs) m/bel-nil)))

(defn handle-excl [left-xs right-xs]
  (m/p (if (seq left-xs)
         (handle-abbrev-sym left-xs)
         'upon)
       (m/p (m/p m/bel-quote
                 (handle-abbrev-sym right-xs)) m/bel-nil)))

(defn handle-no [left-xs [r & right-xs]]
  (handle-abbrev-sym
   (concat left-xs
           [(m/p
             'compose
             (m/p
              'no
              (m/p r m/bel-nil)))]
           right-xs)))

(defn handle-col [left-xs right-xs]
  (m/p
   'compose
   (->> (concat left-xs right-xs)
        (remove (fn [x] (and (seqable? x) (= (first x) :comp_id))))
        m/seq->p)))

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
                  (fn [[_ & xs]]
                    (handle-abbrev-sym xs))))

;; ------
;; number

(def transform-number
  (form-transform :number
                  (fn [[_ v]] (edn/read-string v))))

;; ------
;; symbol

(def transform-symbol
  (form-transform :symbol (fn [[_ v]] (symbol v))))

;; ------
;; char

(def transform-char
  (form-transform :char (fn [[_ x]]
                          (edn/read-string (str "\\" x)))))

;; -----
;; bel-parse 

(def parse-string (-> "bel.ebnf" io/resource insta/parser))

(def unwrap-abbrev-sym-pt (form-transform :abbrev_sym_pt second))

(def parse-postwalk
  (comp
   list->pair
   transform-string
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
;; bel->pretty

(defn bel->pretty [form]
  (condp = (m/type form)
    'symbol (if (= m/bel-nil form) nil form)
    'backquote (list 'bq (bel->pretty (second form)))
    'comma (list 'cm (bel->pretty (second form)))
    'splice (list 'spl (bel->pretty (second form)))
    'err (list 'err (bel->pretty (second form)))
    'char form
    'number form
    'string form
    'pair
    (let [[_ a b] form]
      (concat [(bel->pretty a)]
              (cond
                (= m/bel-nil b) nil
                (m/bel-pair? b) (bel->pretty b)
                :else ['. (bel->pretty b)])))
    form))
