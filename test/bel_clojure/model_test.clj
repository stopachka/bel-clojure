(ns bel-clojure.model-test
  (:require
   [bel-clojure.reader :as r]
   [bel-clojure.model :refer :all]
   [clojure.test :refer :all]))

(defn pretty-f [f & args]
  (r/bel->pretty-clj (apply f (map r/bel-parse args))))

(deftest test-model
  (is (= (pretty-f p-id "a" "a") 't))
  (is (= (pretty-f p-id "a" "b") nil))
  (is (= (pretty-f p-id "(a)" "(a)") nil))
  (is (= (pretty-f p-join  "a" "b") '(a . b)))
  (is (= (pretty-f p-car "(a b c)") 'a))
  (is (= (pretty-f p-car "nil") nil))
  (is (= (pretty-f p-car "\"foo\"") \f))
  (is (= (pretty-f p-cdr "(a . b)") 'b))
  (is (= (pretty-f p-cdr "(a b)") '(b)))
  (is (= (pretty-f p-cdr "nil") nil))
  (is (= (pretty-f p-cdr "\"foo\"") '(\o \o)))
  (is (= (pretty-f p-type "a") 'symbol))
  (is (= (pretty-f p-type "(a b)") 'pair))
  (is (= (pretty-f p-type "\\a") 'char))
  (is (= (pretty-f p-type "\"a\"") 'string))
  (let [p (r/bel-parse "(a . b)")
        c (r/bel-parse "c")]
    (p-xar p c)
    (is (= (p-car p) c)))
  (let [p (r/bel-parse "(a . b)")
        c (r/bel-parse "c")]
    (p-xdr p c)
    (is (= (p-cdr p) c)))
  (is (= (pretty-f p-sym "\"foo\"") 'foo))
  (is (= (pretty-f p-nom "foo") "foo"))
  (is (= (map-assoc bel-nil 'foo 1) {'foo 1}))
  (is (= (map-dissoc bel-nil {'foo 1}) bel-nil)))
