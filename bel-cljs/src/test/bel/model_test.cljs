(ns bel.model-test
  (:refer-clojure :exclude [eval char? string? number? symbol? type])
  (:require
   [bel.reader :as r]
   [cljs.test :refer :all]
   [bel.model :refer :all]))

(defn pretty-f [f & args]
  (r/bel->pretty (apply f (map r/parse args))))

(deftest test-model
  (is (= (pretty-f id "a" "a") 't))
  (is (= (pretty-f id "a" "b") nil))
  (is (= (pretty-f id "(a)" "(a)") nil))
  (is (= (pretty-f join  "a" "b") '(a . b)))
  (is (= (pretty-f car "(a b c)") 'a))
  (is (= (pretty-f car "nil") nil))
  (is (= (pretty-f car "\"foo\"") \f))
  (is (= (pretty-f cdr "(a . b)") 'b))
  (is (= (pretty-f cdr "(a b)") '(b)))
  (is (= (pretty-f cdr "nil") nil))
  (is (= (pretty-f cdr "\"foo\"") '(\o \o)))
  (is (= (pretty-f type "a") 'symbol))
  (is (= (pretty-f type "(a b)") 'pair))
  (is (= (pretty-f type "\\a") 'char))
  (is (= (pretty-f type "\"a\"") 'string))
  (let [p (r/parse "(a . b)")
        c (r/parse "c")]
    (xar p c)
    (is (= (car p) c)))
  (let [p (r/parse "(a . b)")
        c (r/parse "c")]
    (xdr p c)
    (is (= (cdr p) c)))
  (is (= (pretty-f sym "\"foo\"") 'foo))
  (is (= (pretty-f nom "foo") "foo"))
  (is (= (map-assoc bel-nil 'foo 1) {'foo 1}))
  (is (= (map-dissoc bel-nil {'foo 1}) bel-nil)))


