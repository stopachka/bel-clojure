(ns bel-clojure.core-test
  (:require
   [bel-clojure.reader :as r]
   [bel-clojure.evaluator :as e]
   [bel-clojure.core :refer :all]
   [clojure.test :refer :all]))

(def env (delay (bootstrap-env)))

(defn ev [& strs]
  (r/bel->pretty-clj (last (e/eval-all @env strs))))

(deftest core-test
  (is (= (ev "(no nil)") 't))
  (is (= (ev "(atom \\a)") 't))
  (is (= (ev "(atom '(a))") nil))
  (is (= (ev "(atom \"foo\")") nil))
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
         '(\a \r)))
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
  (is (= (ev "(rem \\a \"abracadabra\")")
         '(\b \r \c \d \b \r)))
  (is (= (ev "(set x '((a . d) (b . e) (c . f)))"
             "(get 'a x)")
         '(a . d)))
  (is (= (ev "(set x '((a . d) (b . e) (c . f)))"
             "(put 'z 'y x)")
         '((z . y) (a . d) (b . e) (c . f))))
  (is (= (ev "(rev \"able\")")
         '(\e \l \b \a)))
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
  (is (= (ev "(def consa (xs|pair) (cons 'a xs))"
             "(consa 'z)")
         '(err (qt . mistype))))
  (is (= (ev "(def consa (xs|pair) (cons 'a xs))"
             "(consa '(a b))")
         '(a a b)))
  (is (= (ev "(def foo ((o (t (x . y) [caris _ 'a]) '(a . b))) x)"
             "(foo '(b b))")
         '(err (qt . mistype))))
  (is (= (ev "(def foo ((o (t (x . y) [caris _ 'a]) '(a . b))) x)"
             "(foo)")
         'a))
  (is (= (ev "((fn (x (o y x)) y) 'a)") 'a))
  (is (= (ev "((fn (f x|f) x) pair 'a)")
         '(err (qt . mistype))))
  (is (= (ev "(map function (list car append 'foo))") '(prim clo nil)))
  (is (= (ev "(map (con 'yo) '(a b c))") '(yo yo yo)))
  (is (= (ev "(car:cdr '(a b c))") 'b))
  (is (= (ev "(map ~cdr '((a) (a b c) (a b)))")
         '(t nil nil)))
  (is (= (ev "(map ((combine and) car cdr) '((a . nil) (a . b) (nil . b)))")
         '(nil b nil)))
  (is (= (ev "((cand pair cdr) '(a b))") '(b)))
  (is (= (ev "((cor char pair) 'a)") nil))
  (is (= (ev "(foldl cons nil '(a b))") '(b a)))
  (is (= (ev "(foldr cons nil '(a b))") '(a b)))
  (is (= (ev "(map (upon '(a b c)) (list car cadr cdr))")
         '(a b (b c))))
  (is (= (ev "(fuse [list 'a _] '(b c d))")
         '(a b a c a d)))
  (is (= (ev "(match '(a (b) c d) (list 'a pair 'c t))") 't))
  (is (= (ev "(split (is \\a) \"frantic\")")
         '((\f \r) (\a \n \t \i \c))))
  (is (= (ev "(inc 2)") 3))
  (is (= (ev "(len '(a b c))") 3))
  (is (= (ev "(pos \\s \"ask\")") 2))
  (is (= (ev "(> 3 2)") 't))
  (is (= (ev "(< \"apple\" \"apply\")") 't))
  (is (= (ev "((afn (x)
                (if (no x) 0 (inc:self:cdr x))) '(a b c))")
         3))
  (is (= (ev "(pint 1)") 't))
  (is (= (ev "(runs pint '(1 1 0 0 0 1 1 1 0))")
         '((1 1) (0 0 0) (1 1 1) (0))))
  (is (= (ev "(tokens \"the age of the essay\")")
         '((\t \h \e) (\a \g \e) (\o \f) (\t \h \e) (\e \s \s \a \y))))
  (is (= (ev "(dups \"abracadabra\")")
         '(\a \b \r)))
  (is (= (ev "(consif (cadr '(a)) '(x y))") '(x y)))
  (is (= (ev "(let x 'a (withs (x 'b y x) y))") 'b))
  (is (= (ev "(tail [caris _ \\-] \"non-nil\")") '(\- \n \i \l)))
  (is (= (ev "(dock '(a b c))") '(a b)))
  (is (= (ev "(lastcdr '(a b c))") '(c)))
  (is (= (ev "(last '(a b c))") 'c))
  (is (= (ev "(set x (newq))" "(enq 'a x)" "(enq 'b x)")
         '((a b))))
  (is (= (ev "(set x (newq))" "(enq 'a x)" "(enq 'b x)" "(deq x)")
         'a))
  (is (= (ev "(set x (newq))" "(enq 'a x)" "(enq 'b x)" "(deq x)" "x")
         '((b))))
  (is (= (ev "(let x '(a b c) (zap cdr x) x)") '(b c)))
  (is (= (ev "(let x '(a b c) (push 'z x) (pull 'c x) x)") '(z a b)))
  (is (= (ev "(let x 'nil (push 'a x) (push 'b x) x)") '(b a)))
  (is (= (ev "(drop 2 '(a b c d e))") '(c d e)))
  (is (= (ev "(nth 2 '(a b c d e))") 'b))
  (is (= (ev "(first 2 '(a b c de))") '(a b)))
  (is (= (ev "(catch (throw 'a) (/ 1 0))") 'a))
  (is (= (ev "(cut \"foobar\" 2 4)") '(\o \o \b)))
  (is (= (ev "(cut \"foobar\" 2 -1)") '(\o \o \b \a)))
  (is (= (ev "((flip -) 1 10)") 9))
  (is (= (ev "((part cons 'a) 'b)") '(a . b)))
  (is (= (ev "((trap cons 'a) 'b)") '(b . a)))
  (is (= (ev "(let x nil
                (set find only.car:some)
                (find [= (car _) \\a] '(\"pear\" \"apple\" \"grape\")))")
         "apple"))
  (is (= (ev "(let z nil
               (let x '(a b c) (whilet y (pop x) (push y z)) x) z)")
         '(c b a)))
  (is (= (ev "(let z nil
                (loop x 1 (+ x 1) (< x 5) (push x z))
              z)")
         '(4 3 2 1)))
  (is (= (ev "(let z nil
                (for x 1 5 (push x z))
              z)")
         '(5 4 3 2 1)))
  (is (= (ev "(let x '(a b c d e) (poll (pop x) is!c) x)") '(d e)))
  (is (= (ev "(let x '(a b c) (pop (cdr x)) x)") '(a c)))
  (is (= (ev "(let (x y z) '(a b c) (swap x y z) (list x y z))") '(b c a)))
  (is (= (ev "(adjoin 'a '(a b c))") '(a b c)))
  (is (= (ev "(adjoin 'z '(a b c))") '(z a b c)))
  (is (= (ev "(dedup \"abracadabra\")")
         '(\a \b \r \c \d)))
  (is (= (ev "(insert < 3 '(1 2 4 5))") '(1 2 3 4 5)))
  (is (= (ev "(sort < '(5 1 3 2 4))") '(1 2 3 4 5)))
  (is (= (ev "(best > '(1 2 4 5))") 5))
  (is (= (ev "(best (of > len) '((a) (b c) (d e) (f)))") '(b c)))
  (is (= (ev "(do (thread (do (join 'a 'b)))
                  (thread (do (join 'a 'b) (join 'b 'd))))")
         '(b . d)))
  (is (= (ev "(do (thread (do (join 'a 'b)))
                  (thread
                    (atomic (do (join 'a 'b) (join 'b 'd)))))")
         '(a . b))))
