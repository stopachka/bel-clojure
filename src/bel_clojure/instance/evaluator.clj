(ns bel-clojure.instance.evaluator
  (:require
    [bel-clojure.instance.model :as m]
    [bel-clojure.instance.primitives :as p]))

;; Env
;; -------------

(def prim-name->fn
  {"id" #'p/p-id
   "car" #'p/p-car
   "cdr" #'p/p-cdr
   "join" #'p/p-join
   "type" #'p/p-type
   "xar" #'p/p-xar
   "xdr" #'p/p-xdr
   "sym" #'p/p-sym
   "nom" #'p/p-nom
   "coin" #'p/p-coin
   "p-debug" #'p/p-debug})

(defn make-bel-globe []
  (->> prim-name->fn
       (map (fn [[k]]
              (m/make-pair
               [:symbol k]
               (m/<-pairs [m/bel-lit m/bel-prim [:symbol k]]))))
       m/<-pairs))

