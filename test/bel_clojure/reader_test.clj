(ns bel-clojure.instance.reader-test
  (:require
   [bel-clojure.reader :refer :all]
   [clojure.test :refer :all]))

(def pretty-parse (comp bel->pretty-clj bel-parse))
(deftest test-reader
  (is (= (pretty-parse "\"str\"") "str"))
  (is (= (pretty-parse "\"hello world\"") "hello world"))
  (is (= (pretty-parse "(a b c)") '(a b c)))
  (is (= (pretty-parse "_") '_))
  (is (= (pretty-parse "'+") '(quote . +)))
  (is (= (pretty-parse "\\bel") 'c-bel))
  (pretty-parse "a.b")
  (is (= (pretty-parse "(a . b)")
         '(a . b)))
  (is (= (pretty-parse "(a b . c)")
         '(a b . c)))
  (is (= (pretty-parse "()") nil))
  (is (= (pretty-parse "`(foo ,a ,@b)")
         '(bq (foo (cm a) (spl b)))))
  (is (= (pretty-parse "=") '=))
  (is (= (pretty-parse ">=") '>=))
  (is (= (pretty-parse "[id _ (car args)]")
         '(fn (_) (id _ (car args)))))
  (is (= (pretty-parse "(mac e1)")
         '(mac e1)))
  (is (= (pretty-parse "e1")
         'e1))
  (is (= (pretty-parse "car:cdr")
         '(compose car cdr)))
  (is (= (pretty-parse "car:cdr:cdr")
         '(compose car cdr cdr)))
  (is (= (pretty-parse "~f")
         '(compose no f)))
  (is (= (pretty-parse "~f:car")
         '(compose no f car)))
  (is (= (pretty-parse "car:i/")
         (list 'compose 'car (symbol "i/"))))
  (is (= (pretty-parse "i*") 'i*))
  (is (= (pretty-parse "i<") 'i<))
  (is (= (pretty-parse "i^") (symbol "i^")))
  (is (= (pretty-parse "a|b") '(t a b)))
  (is (= (pretty-parse "1") 1))
  (is (= (pretty-parse "1.05") 1.05))
  (is (= (pretty-parse "-1.05") -1.05))
  (is (= (pretty-parse "+0.05") 0.05))
  (is (= (pretty-parse "int?") 'int?))
  (is (= (pretty-parse "a.b") '(a b)))
  (is (= (pretty-parse "a!b") '(a (quote . b))))
  (pretty-parse "'a!b.c")
  )
