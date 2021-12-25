(ns bel-clojure.instance.repl
  (:require
   [clojure.java.io :as io]
   [clojure.string :as cstring]
   [bel-clojure.instance.model :as m]
   [bel-clojure.instance.evaluator :as e]))

;; ------
;; Source

(defn readable-source []
  (->> (-> (io/resource "source.bel")
           slurp
           (cstring/split #"\n"))
       (partition-by cstring/blank?)
       (map (fn [xs] (cstring/join "\n" xs)))
       (remove (fn [s]
                 (cstring/starts-with? s ";")))

       (remove cstring/blank?)
       (take-while
        (fn [s] (not= s "===BREAK===")))))

(comment
  (def env {:globe (e/make-bel-globe) :scope m/bel-nil})
  (e/run-all env (readable-source))
  (e/run-all env
             ["(no nil)"
              "(atom \\a)"
              "(atom '(a))"
              "(all atom '(a b))"
              "(all atom '(a (b c) d))"
              "(some atom '((a b) (c d)))"
              "(some atom '((a b) c (d e)))"
              "(reduce join '(a b c))"
              "(cons 'a 'b 'c '(d e f))"
              "(append '(a b c) '(d e f))"
              "(append '(a) nil '(b c) '(d e f))"
              "(snoc '(a b c) 'd 'e)"
              "(list 'a 'b)"
              "(map car '((a b) (c d) (e f)))"
              "(map cons '(a b c) '(d e f))"
              "(symbol 'a)"
              "(let (x . y) '(a b c) y)"
              "((macro (v) `(set ,v 'a)) x)"
              "x"
              "(apply or '(nil a nil b))"
              "(proper '(a . b))"
              "(proper '(a b))"
              "(string \"foo\")"
              "(mem \\a \"foobar\")"
              "(let (x (o (y . z) '(a . b))) '(f) (list x y z))"
              "(begins '(a b c d e) '(a b))"]))
