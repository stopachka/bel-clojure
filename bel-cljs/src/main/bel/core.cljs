(ns bel.core
  (:require [bel.evaluator :as e]
            [bel.reader :as r]
            [bel.bootstrap :refer [bootstrap-env]]))

(def form (.getElementById js/document "repl"))
(def textarea (.getElementById js/document "textarea"))
(def output (.getElementById js/document "output"))
(def env (bootstrap-env))

(defn set-output [txt]
  (set! (.-innerText output) txt))

(defn handle-submit [e]
  (.preventDefault e)
  (let [text (.-value textarea)]
    (try
      (set-output (r/bel->pretty (e/eval-single env (r/parse text))))
      (catch js/Object e
        (set-output e)))))

(defn -main []
  (let [_ (set! (.-innerHTML output) ";; Bel loaded. Type away!")
        _ (.addEventListener form "submit" handle-submit)]
    (println "Wohoo!")))

