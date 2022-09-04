(ns bel.core
  (:require [bel.model :as m]
            [bel.reader :as r]))

(defn -main []
  (println "hello" m/p r/bel-ebnf))

