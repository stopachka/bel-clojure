(ns bel-clojure.instance.core-test
  (:require
   [bel-clojure.instance.reader :as r]
   [bel-clojure.instance.evaluator :as e]
   [bel-clojure.instance.core :refer :all]
   [clojure.test :refer :all]))

(def env (delay (bootstrap-env)))

(defn ev [& strs]
  (r/bel->pretty-clj (last (e/eval-all @env strs))))

(deftest core-test
  (is (= (ev "(no nil)") 't))
  (is (= (ev "(atom \\a)") 't))
  (is (= (ev "(atom '(a))") nil))
  (is (= (ev "(all atom '(a b))") 't))
  (is (= (ev "(all atom '(a (b c) d))") nil))
  (is (= (ev "(some atom '((a b) (c d)))") nil))
  (is (= (ev "(some atom '((a b) c (d e)))") '(c (d e))))
  (is (= (ev "(reduce join '(a b c))") '(a b . c)))
  (is (= (ev "(cons 'a 'b 'c '(d e f))")
         '(a b c d e f)))
  (is (= (ev "(append '(a b c) '(d e f))")
         '(a b c d e f)))
  (is (= (ev "(append '(a) nil '(b c) '(d e f))")
         '(a b c d e f)))
  (is (= (ev "(snoc '(a b c) 'd 'e)")
         '(a b c d e)))
  (is (= (ev "(list 'a 'b)")
         '(a b)))
  (is (= (ev "(map car '((a b) (c d) (e f)))")
         '(a c e)))
  (is (= (ev "(map cons '(a b c) '(d e f))")
         '((a . d) (b . e) (c . f))))
  (is (= (ev "(symbol 'a)")
         't))
  (is (= (ev "(let (x . y) '(a b c) y)")
         '(b c)))
  (is (= (ev "((macro (v) `(set ,v 'a)) x)"
             "x")
         'a))
  (is (= (ev "(apply or '(nil a nil b))")
         'a))
  (is (= (ev "(proper '(a . b))")
         nil))
  (is (= (ev "(proper '(a b))")
         't))
  (is (= (ev "(string \"foo\")")
         't))
  (is (= (ev "(mem \\a \"foobar\")")
         "ar"))
  (is (= (ev "(let (x (o (y . z) '(a . b))) '(f) (list x y z))")
         '(f a b)))
  (is (= (ev "(begins '(a b c d e) '(a b))")
         't))
  (is (= (ev "(= '(a b) '(a b))") 't))
  (is (= (ev "(case '+ + 'plus - 'minus 'unknown)") 'plus))
  (is (= (ev "(iflet x nil 'foo '(a b c) (car x) 'bar)") 'a))
  (is (= (ev "(find [= (car _) \\a] '(\"pear\" \"apple\" \"grape\"))")
         "apple"))
  (is (= (ev "(caris '(a b) 'a)") 't))
  (is (= (ev "(hug '(a b c d e))") '((a b) (c d) (e))))
  (is (= (ev "(with (x 'a y 'b) (cons x y))")  '(a . b)))
  (is (= (ev "(rem \\a \"abracadabra\")") "brcdbr"))
  (is (= (ev "(set x '((a . d) (b . e) (c . f)))"
             "(get 'a x)")
         '(a . d)))
  (is (= (ev "(set x '((a . d) (b . e) (c . f)))"
             "(put 'z 'y x)")
         '((z . y) (a . d) (b . e) (c . f))))
  (is (= (ev "(rev \"able\")") "elba"))
  (is (= (ev "(snap '(a b) '(c d e f g))") '((c d) (e f g))))
  (is (= (ev "(udrop '(a b) '(c d e f g))") '(e f g)))
  (is (= (ev "(map idfn '(a b c))") '(a b c)))
  (is (= (ev "((is 'a) 'a)") 't))
  (is (= (ev "(eif x (car 'a) 'oops x)") 'oops))
  (is (= (ev "(onerr 'oops (car 'a))") 'oops))
  (is (= (ev "(safe (car 'a))") nil))
  (is (= (ev "(safe (car '(a b)))") 'a))
  (is (= (ev "(map literal (list nil \"foo\" car))") '((nil o apply) t t)))
  (is (= (ev "(map variable (list 'x (uvar) t))") '(t t nil)))
  (is (= (ev "((isa 'clo) map)") 't))

  (is (= (ev "(match '(a (b) c d) (list 'a pair 'c t))") 't))
  (is (= (ev "(def consa (xs|pair) (cons 'a xs))"
             "(consa 'z)")
         '(err (quote . mistype))))
  (is (= (ev "(def consa (xs|pair) (cons 'a xs))"
             "(consa '(a b))")
         '(a a b)))
  (is (= (ev "(def foo ((o (t (x . y) [caris _ 'a]) '(a . b))) x)"
             "(foo '(b b))")
         '(err (quote . mistype))))
  (is (=
       (ev "(def foo ((o (t (x . y) [caris _ 'a]) '(a . b))) x)"
           "(foo)")
       'a)))

