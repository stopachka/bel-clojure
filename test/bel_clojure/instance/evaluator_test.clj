(ns bel-clojure.instance.evaluator-test
  (:require
   [bel-clojure.instance.reader :as r]
   [bel-clojure.instance.evaluator :refer :all]
   [clojure.test :refer :all]))

(defn ev-all [env strs]
  (mapv r/bel->pretty-clj (eval-all env strs)))

(defn ev [& strs]
  (last (ev-all (make-env) strs)))

(deftest test-evaluator
  (is (= (ev "nil") nil))
  (is (= (ev "\\bel") 'c-bel))
  (is (= (ev "\"foo\"") "foo"))
  (is (= (ev "'foo") 'foo))
  (is (= (ev "(type globe)") 'pair))
  (is (= (ev "(type scope)") 'pair))
  (is (= (ev "(lit (foo bar baz))") '(lit (foo bar baz))))
  (is (= (ev "car") '(lit prim car)))
  (is (= (ev "(set a 'b c 'd)" "c") 'd))
  (is (= (ev "(if t 'a 'b)") 'a))
  (is (= (ev "(if nil 'a 'b)") 'b))
  (is (= (ev "(if nil 'a nil 'b 'c)") 'c))
  (is (= (ev "(car '(a b))") 'a))
  (is (= (ev "(id t nil)") nil))
  (is (= (ev "(id t t)") 't))
  (is (= (ev "(id t)") nil))
  (is (= (ev "(id)") 't))
  (is (= (ev "((lit clo nil (x) (id x t)) t)")
         't))
  (is (= (ev "((lit clo nil (x) (id x t)) nil)")
         nil))
  (is (= (ev "(apply join '(a b))")
         '(a . b)))
  (is (= (ev "(apply join 'a '(b))")
         '(a . b)))
  (is (= (ev "((lit clo nil (x (o y)) y) 'a)")
         nil))
  (is (= (ev "((lit clo nil (x (o y 'b)) y) 'a)")
         'b))

  (is (= (ev
          ;; see source.bel
          "(set def (lit mac (lit clo nil (n p e) (join 'set (join n (join (join 'lit (join 'clo (join nil (join p (join e nil))))) nil))))))"
          "(def no (x) (id x nil))"
          "(no nil)")
         't))

  (is (= (ev "(set a 'foo b '(bar baz))" "`(foo ',a ,@b)")
         '(foo (quote . foo) bar baz)))

  (is (= (ev "(set x 'a)" "`(x ,x y)")
         '(x a y)))

  (is (= (ev "(set x 'a)" "`(x ,x y ,(id 'a 'a))")
         '(x a y t)))

  (is (= (ev "(set y '(c d))" "`(a b ,@y e f)")
         '(a b c d e f)))

  (is (= (take-last 2 (ev-all (make-env)
                              ["(set x 'a)"
                               "x"
                               "(dyn x 'z (join x 'b))"
                               "x"]))
         '((z . b) a)))

  (is (= (take-last 2 (ev-all (make-env)
                              ["(join 'a (ccc (lit clo nil (c) (set cont c))))"
                               "(cont 'b)"
                               "(cont 'c)"]))
         '((a . b) (a . c))))

  (is (= (ev "(err \"something\")")
         '(err "something")))
  (is (= (first (ev "(car 'a)")) 'err))
  (is (= (ev
          "(dyn err (lit clo nil (x) 'hello) (car 'a))")
         'hello))
  (is (=
       (ev "((lit clo nil ((t x (lit clo nil (x) (id t x)))) 'hello) t)")
       'hello))

  (is (= (ev
          "((lit clo nil ((t x (lit clo nil (x) (id t x)))) 'hello) nil)")
         '(err (quote . mistype)))))
