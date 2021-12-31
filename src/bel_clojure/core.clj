(ns bel-clojure.core
  (:require
   [clojure.java.io :as io]
   [clojure.string :as cstring]
   [bel-clojure.evaluator :as e]
   [bel-clojure.reader :as r]))

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
    (e/eval-all env (source-str->parts (slurp (io/resource "core.bel"))))
    env))

;; ----
;; REPL

(defn read-form
  ([] (read-form []))
  ([ret]
   (let [x (read-line)
         new-ret (conj ret x)]
     (try
       (let [v (r/parse (cstring/join "\n" new-ret))]
         (assert (not (:index v)))
         v)
       (catch Throwable _e
         (read-form new-ret))))))

(defn repl [env]
  (println
   (str "🦁 Welcome to Bel\n"
        "   Write some code, and press enter\n"
        "   (id t t)\n"
        "   (cons 'a 'b '(c d e))\n"
        ">"))
  (loop []
    (let [form (read-form)]
      (println "> "
               (r/bel->pretty
                (e/eval-single
                 env form)))
      (recur))))

(defn -main [& _args]
  (println "   Loading core.bel...")
  (repl (bootstrap-env)))
