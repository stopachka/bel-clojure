(ns bel.bootstrap
  (:require
   [clojure.string :as cstring]
   [bel.evaluator :as e]
   [shadow.resource :as rc]))

;; ---------
;; Bootstrap

(defn source-str->parts [source-str]
  (->> (cstring/split source-str #"\n")
       (partition-by cstring/blank?)
       (map (fn [xs] (cstring/join "\n" xs)))
       (remove (fn [s] (cstring/starts-with? s ";")))
       (remove cstring/blank?)))

(defn bootstrap-env []
  (let [env (e/env)]
    (e/eval-all env (source-str->parts (rc/inline "core.bel")))
    env))
