(ns bel-clojure.instancej
  (:require
   [clojure.java.io :as io]
   [instaparse.core :as insta]))

;; Reader
;; ------

(def parse
  (-> "bel.ebnf" io/resource slurp insta/parser))

