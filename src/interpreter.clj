(ns interpreter)

(declare bel-eval)

;; symbols

(def bel-symbol? symbol?)
(comment (bel-eval 'foo))

;; pairs

;; unsupported: dotted pair syntax

(bel-eval '(foo . bar))

;; truth

(defn bel-eval [form]
  (cond
    (bel-symbol? form)
    form
    :else
    (throw (Exception. (str "unsupported form = " form)))))


