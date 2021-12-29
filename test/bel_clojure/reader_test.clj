(ns bel-clojure.reader-test
  (:require
   [bel-clojure.reader :refer :all]
   [clojure.test :refer :all]))

(defn pretty-parse  [x] (bel->pretty-clj (bel-parse x)))

(deftest test-reader
  (is (= (pretty-parse "\"str\"") "str"))
  (is (= (pretty-parse "\"hello world\"") "hello world"))
  (is (= (pretty-parse "(a b c)") '(a b c)))
  (is (= (pretty-parse "_") '_))
  (is (= (pretty-parse "'+") '(qt . +)))
  (is (= (pretty-parse "\\b") \b))
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
  (is (= (pretty-parse "~cdr")
         '(compose no cdr)))
  (is (= (pretty-parse "car:cdr")
         '(compose car cdr)))
  (is (= (pretty-parse "car:cdr:cdr")
         '(compose  car cdr cdr)))
  (is (= (pretty-parse "c|isa!cont")
         '(t c (isa (qt . cont)))))
  (is (= (pretty-parse "!a")
         '(upon (qt . a))))
  (is (= '(compose no f)
         (pretty-parse "~f")))
  (is (= (pretty-parse "x|~f:g!a")
         '(t x ((compose (compose no f) g) (qt . a)))))
  (is (= (pretty-parse "~f:car")
         '(compose (compose no f) car)))
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
  (is (= (pretty-parse "int?") 'int?)))
