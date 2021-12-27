(ns bel-clojure.instance.core
  (:require
   [clojure.java.io :as io]
   [clojure.string :as cstring]
   [bel-clojure.instance.evaluator :as e]))

;; ------
;; Bootstrap

(defn readable-source []
  (->> (-> (io/resource "core.bel")
           slurp
           (cstring/split #"\n"))
       (partition-by cstring/blank?)
       (map (fn [xs] (cstring/join "\n" xs)))
       (remove (fn [s]
                 (cstring/starts-with? s ";")))

       (remove cstring/blank?)
       (take-while
        (fn [s] (not= s "===BREAK===")))))

(defn bootstrap-env []
  (let [env (e/make-env)]
    (println "loading readable source...")
    (e/eval-all env (readable-source))
    env))

