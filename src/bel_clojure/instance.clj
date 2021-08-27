(ns bel-clojure.instance
  (:require
   [clojure.java.io :as io]
   [instaparse.core :as insta]
   [clojure.string :as cstring]
   [clojure.walk :as walk])
  (:import
   (java.util ArrayList)))

;; Constants
;; ---------

(def bel-quote [:symbol "quote"])
(def bel-nil [:symbol "nil"])
(def bel-t [:symbol "t"])
(def bel-dot [:dot "."])
(def bel-lit [:symbol "lit"])
(def bel-prim [:symbol "prim"])
(def bel-o [:symbol "o"])
(def bel-apply [:symbol "apply"])
(def bel-set [:symbol "set"])
(def bel-clo [:symbol "clo"])
(def bel-mac [:symbol "mac"])
(def bel-globe [:symbol "globe"])
(def bel-scope [:symbol "scope"])
(def bel-if [:symbol "if"])
(def bel-vmark-sym [:symbol "vmark"])

;; Pair
;; ----

(defn make-pair [a b]
  (ArrayList. [:pair a b]))

(defn make-quoted-pair [a]
  (make-pair bel-quote a))

(declare p-car)
(declare p-cdr)

(defn pair->clojure-seq [[_t l [r-t :as r] :as form]]
  (if (= bel-nil form)
    ()
    (cons
     l
     (cond
       (= :pair r-t) (pair->clojure-seq r)
       (= bel-nil r) []
       :else [r]))))

(defn pair-find [f p]
  (cond
    (= bel-nil p) p
    (f (p-car p)) (p-car p)
    :else (pair-find f (p-cdr p))))

(defn pair-map [f p]
  (if (= bel-nil p) bel-nil
      (make-pair
       (f (p-car p))
       (pair-map f (p-cdr p)))))

(defn pair-append [a b]
  (cond
    (= bel-nil a) b
    (= bel-nil (p-cdr a)) (make-pair (p-car a) b)
    :else
    (make-pair
     (p-car a)
     (pair-append (p-cdr a) b))))

(defn pair-proper? [[p-t :as p]]
  (or (= bel-nil p)
      (and (= p-t :pair)
           (pair-proper? (p-cdr p)))))

(defn pair-every? [f p]
  (if (= bel-nil p) true
      (and (f (p-car p))
           (pair-every? f (p-cdr p)))))

;; Reader
;; ------

(defn form-transform
  [k f]
  (fn [x]
    (if (and
         (coll? x)
         (= (first x) k))
      (f x)
      x)))

(defn first-and-only [xs msg]
  (assert (= (count xs) 1) msg)
  (first xs))

(def unwrap-sexp (form-transform :sexp second))

(defn <-pairs [xs]
  (let [[x n & after-n] xs
        after-x (rest xs)]
    (if (empty? xs)
      bel-nil
      (make-pair
       x
       (if (= bel-dot n)
         (first-and-only after-n "dotted list _must_ have 1 exp after the dot")
         (<-pairs after-x))))))

(def list->pair
  (form-transform
   :list
   (fn [[_t & children]]
     (<-pairs children))))

(def string->pair
  (form-transform
   :string
   (fn [[_t & children]]
     (<-pairs (map (fn [[_ v]] [:char v]) children)))))

(def unwrap-name (form-transform :name second))

(def quote->pair
  (form-transform :quote
                  (fn [[_ exp]]
                    (make-quoted-pair exp))))

(def abbrev-fn->pair
  (form-transform :abbrev_fn
                  (fn [[_ & xs]]
                    (make-pair
                     [:symbol "fn"]
                     (make-pair
                      (make-pair [:symbol "_"] bel-nil)
                      (make-pair
                       (<-pairs xs)
                       bel-nil))))))

(def parse-string (-> "bel.ebnf" io/resource insta/parser))

(def parse-postwalk
  (comp
   list->pair
   string->pair
   quote->pair
   unwrap-name
   unwrap-sexp
   abbrev-fn->pair))

(def bel-parse
  (comp (partial walk/postwalk parse-postwalk) parse-string))

(comment
  (bel-parse "\"str\"")
  (bel-parse "(a b c)")
  (bel-parse "_")
  (bel-parse "'+")
  (bel-parse "\\bel")
  (bel-parse "(a . b)")
  (bel-parse "(a b . c)")
  (bel-parse "()")
  (bel-parse "`(foo ,a ,@b)")
  (bel-parse "=")
  (bel-parse ">=")
  (bel-parse "[id _ (car args)]"))

;; Primitives
;; ----------

(defn p-id [[t-a :as a] b]
  (let [id-f (if (= t-a :pair) identical? =)]
    (if (id-f a b)
      bel-t
      bel-nil)))

(comment
  (p-id (bel-parse "a") (bel-parse "a"))
  (p-id (bel-parse "a") (bel-parse "b"))
  (p-id (bel-parse "(a)") (bel-parse "(a)")))

(defn p-join [a b] (make-pair a b))

(comment
  (p-join (bel-parse "a") (bel-parse "b")))

(defn p-car [[t l _r :as form]]
  (cond
    (= bel-nil form) form

    (not= :pair t)
    (throw (Exception. (format "expected pair, got = %s" form)))

    :else
    l))

(comment
  (p-car (bel-parse "(a b c)"))
  (p-car (bel-parse "nil")))

(defn p-cdr [[t _l r :as form]]
  (cond
    (= bel-nil form) form

    (not= :pair t)
    (throw (Exception. "expected pair"))

    :else
    r))

(comment
  (p-cdr (bel-parse "(a . b)"))
  (p-cdr (bel-parse "(a b)"))
  (p-cdr (bel-parse "nil")))

(defn p-type [[t]]
  [:symbol (name t)])

(comment
  (p-type (bel-parse "a"))
  (p-type (bel-parse "(a)"))
  (p-type (bel-parse "\\a")))

(defn p-xar [form y]
  (.set form 1 y)
  form)

(comment
  (p-xar (bel-parse "(a . b)") (bel-parse "c")))

(defn p-xdr [form y]
  (.set form 2 y)
  form)

(comment
  (p-xdr (bel-parse "(a . b)") (bel-parse "c")))

(defn p-sym [char-pairs]
  (let [cs (pair->clojure-seq char-pairs)
        _  (assert (every? (comp (partial = :char) first) cs)
                   "Expected a string")]
    [:symbol (->> cs (map second) cstring/join)]))

(comment
  (p-sym (p-cdr (bel-parse "\"foo\""))))

(defn p-nom [[t v]]
  (assert (= t :symbol) "expected symbol")
  (->> v
       (map (fn [c] [:char (str c)]))
       <-pairs))

(comment
  (p-nom (bel-parse "foo")))

;; todo: primitives for streams, sys

(defn p-coin [] (rand-nth [bel-t bel-nil]))

(comment (p-coin))

(def _d (atom nil))
(defn p-debug
  "Note, this is not necessary for
   Bel, but helps for debugging"
  [x]
  (reset! _d x)
  (println x))

;; Globe
;; -------------

(def prim-name->fn
  {"id" #'p-id
   "car" #'p-car
   "cdr" #'p-cdr
   "join" #'p-join
   "type" #'p-type
   "xar" #'p-xar
   "xdr" #'p-xdr
   "sym" #'p-sym
   "nom" #'p-nom
   "coin" #'p-coin
   "p-debug" #'p-debug})

(defn make-bel-globe []
  (->> prim-name->fn
       (map (fn [[k]]
              (make-pair
               [:symbol k]
               (<-pairs [bel-lit bel-prim [:symbol k]]))))
       <-pairs))

;; Evaluator
;; ---------

(declare bel-eval)

(defn find-env-pair [to-find pairs]
  (let [v (some->> pairs
                   (pair-find
                    (fn [p] (= bel-t (p-id to-find (p-car p))))))]
    (when (not= v bel-nil) v)))



(defn eval-variable [{:keys [scope globe]} form done-f]
  (cond
    (#{bel-nil bel-t bel-o bel-apply} form) (done-f form)
    (= bel-globe form) (done-f globe)
    (= bel-scope form) (done-f scope)
    :else
    (let [v (->> [scope globe]
                 (some (partial find-env-pair form)))]
      (assert v (format "expected value for variable = %s" form))
      (done-f (p-cdr v)))))

(comment
  (eval-variable {:scope bel-nil
                  :globe (make-bel-globe)} [:symbol "id"]
                 (fn [x] (println x))))

(defn eval-prim [_env r args-head done-f]
  (let [[_ [_ n]] r
        f (prim-name->fn n)
        args (pair->clojure-seq args-head)
        niled-args (->> f
                        meta
                        :arglists
                        first
                        (map-indexed (fn [i _] (nth args i bel-nil))))
        _ (assert (<= (count args) (count niled-args))
                  (format
                   "too many args = %s niled-args = %s niled-args" args niled-args))]
    (done-f (apply f niled-args))))

(defn find-vmark
  "This needs to run on every eval, which
  certainly slows things down. We may want to
  consider an optimization soonish"
  [globe]
  (some-> (find-env-pair bel-vmark-sym globe) p-cdr))

(defn bel-variable? [[vmark-t :as vmark] [var-t :as var-head]]
  (or
   (= var-t :symbol)
   (and (= vmark-t :pair)
        (= var-t :pair)
        (= (p-id vmark (p-car var-head)) bel-t))))

(defn make-env-pair [vmark sym v]
  (assert (bel-variable? vmark sym)
          (format "expected left-side to be a variable= %s" sym))
  (make-pair sym v))

(defn eval-set [{:keys [globe] :as env} r done-f]
  (let [vmark (find-vmark globe)]
    (letfn [(f [p]
              (let [[_ sym after-sym] p
                    _ (assert (not= bel-nil after-sym)
                              "Set sym needs a value")
                    [_ v after-v] after-sym]
                (bel-eval
                 env v
                 (fn [evaled-v]
                   (let [[_ head tail] globe]
                     (p-xar globe (make-env-pair vmark sym evaled-v))
                     (p-xdr globe (make-pair head tail))
                     (if (= bel-nil after-v)
                       (done-f bel-nil)
                       (f after-v)))))))]

      (f r))))

(defn bel-optional? [[_ h]]
  (= bel-o h))
(defn bel-optional-var [[_ _h [_ variable]]] variable)
(defn bel-optional-arg [[_ _h [_ _variable r]]] (p-car r))

(comment
  (bel-optional? (bel-parse "(o f =)"))
  (bel-optional-var (bel-parse "(o f =)"))
  (bel-optional-arg (bel-parse "(o f =)")))

(defn assign-vars [{:keys [globe scope] :as env} var-head arg-head]
  (let [vmark (find-vmark globe)]
    (letfn [(f [scope var-head arg-head]
              (cond
                (every? (partial = bel-nil) [var-head arg-head])
                scope

                (bel-variable? vmark var-head)
                (make-pair (make-env-pair
                            vmark
                            var-head
                            arg-head)
                           scope)

                (bel-optional? var-head)
                (f scope
                   (bel-optional-var var-head)
                   (if (= bel-nil arg-head)
                     (bel-eval env (bel-optional-arg var-head))
                     arg-head))

                :else
                (let [s' (f scope
                            (p-car var-head)
                            (p-car arg-head))]
                  (f s' (p-cdr var-head) (p-cdr arg-head)))))]
      (f scope var-head arg-head))))

(comment
  (assign-vars {:globe bel-nil :scope bel-nil}
               (bel-parse "(x y)") (bel-parse "(a b)"))
  (assign-vars
   {:globe bel-nil :scope bel-nil}
   (bel-parse "(x y . z)") (bel-parse "(a b c d)"))
  (assign-vars
   {:globe bel-nil :scope bel-nil}
   (bel-parse "(n . rest)") (bel-parse "(n args)"))
  (let [vmark (make-pair bel-nil bel-nil)]
    (assign-vars
     {:globe (make-pair
              (make-pair bel-vmark-sym vmark)
              bel-nil)
      :scope bel-nil}
     (make-pair vmark bel-nil)
     (bel-parse "a")))
  (assign-vars {:globe bel-nil :scope bel-nil}
               (bel-parse "(a b (o f =))") (bel-parse "(a b c)"))
  (assign-vars {:globe (make-bel-globe) :scope bel-nil}
               (bel-parse "(a b (o f id))") (bel-parse "(a b)")))

(defn eval-clo [env r args-head]
  (let [[_ scope [_ args-sym-head [_ body-head]]] r
        new-scope (assign-vars (assoc env :scope scope)
                               args-sym-head
                               args-head)]
    (bel-eval (assoc env :scope new-scope) body-head)))

(defn eval-mac [env [_ [_ _ [_ _ clo]]] args-head]
  (let [code (eval-clo env clo args-head)]
    (bel-eval env code)))

(defn eval-if [env [_ test-form [_ consequent-form r]] done-f]
  (bel-eval
   env
   test-form
   (fn [evaled-test-form]
     (if (not= evaled-test-form bel-nil)
       (bel-eval env consequent-form done-f)
       (cond
         (= bel-nil r) (done-f r)
         (= bel-nil (p-cdr r)) (bel-eval env (p-car r) done-f)
         :else (eval-if env r done-f))))))

(defn eval-pairs [env head done-f]
  (letfn [(f [res h]
            (if (= bel-nil h)
              (done-f (-> res reverse <-pairs))
              (bel-eval
               env
               (p-car h)
               (fn [evaled-h]
                 (f
                  (conj res evaled-h)
                  (p-cdr h))))))]
    (f () head)))

(defn apply-head->args-head [x]
  (let [xs (pair->clojure-seq x)
        but-last (drop-last xs)
        [last-t :as l] (last xs)
        ls (if (= :pair last-t)
             (pair->clojure-seq l)
             [l])]
    (<-pairs (concat but-last ls))))

(defn assert-lit [[_ lit :as form]]
  (assert (= bel-lit lit) "expected lit expression")
  form)

(defn lit-type [[_ _lit [_ t]]] t)

(defn lit-v [[_ _lit [_ _t v]]] v)

(defn eval-lit [env lit args-head done-f]
  (condp = (lit-type lit)
    bel-prim
    (eval-prim env (lit-v lit) args-head done-f)
    bel-clo
    (eval-clo env (lit-v lit) args-head done-f)
    bel-mac
    (eval-mac env (lit-v lit) args-head done-f)
    (throw (Exception. "err unsupported fn call"))))

(defn eval-apply [env [_ f apply-head] done-f]
  (bel-eval
   env f
   (fn [lit]
     (eval-pairs
      env apply-head
      (fn [evaled-args]
        (eval-lit
         (assert-lit lit)
         evaled-args
         done-f))))))

(defn eval-pair [env [_ l r :as x] done-f]
  (cond
    (= bel-quote l) (done-f r)
    (= bel-lit l) (done-f x)
    (= bel-set l) (eval-set env r done-f)
    (= bel-if l) (eval-if env r done-f)
    (= bel-apply l) (eval-apply env r done-f)
    :else
    (let [[_ f args-head] x]
      (bel-eval
       env
       f
       (fn [evaled-lit]
         (assert-lit evaled-lit)
         (if (= bel-mac (lit-type evaled-lit))
           (eval-lit evaled-lit args-head done-f)
           (eval-pairs
            env args-head
            (fn [evaled-args]
              (eval-lit evaled-lit evaled-args done-f)))))))))

(defn eval-backquoted-form [env [t [h-t :as h] r :as form]]
  (cond
    (= t :comma) (bel-eval env (second form))

    (not= t :pair) form

    (= :quote h-t) (make-pair
                    (make-quoted-pair (eval-backquoted-form env (second h)))
                    (eval-backquoted-form env r))

    (= h-t :comma) (make-pair
                    (bel-eval env (second h))
                    (eval-backquoted-form env r))

    (= h-t :splice) (pair-append
                     (bel-eval env (second h))
                     (eval-backquoted-form env r))

    (= h-t :pair) (make-pair
                   (eval-backquoted-form env h)
                   (eval-backquoted-form env r))

    :else (make-pair h (eval-backquoted-form env r))))

(defn eval-backquote [env [_ r]]
  (eval-backquoted-form env r))

(comment
  (eval-backquote
   {:scope (bel-parse "((b . foo) (d . bar))")}
   (bel-parse "`(a ,b (c ,d))"))
  (eval-backquote
   {:scope (bel-parse "((b . (b c)))")}
   (bel-parse "`(a (b c ,@b) d e)"))
  (eval-backquote
   {:globe (make-bel-globe)
    :scope (bel-parse "((parms . (a)) (body . (inc id a)))")}
   (bel-parse "`(',parms ',(car body))")))

(defn bel-string? [a]
  (and (pair-proper? a)
       (pair-every? (fn [[t]] (= t :char)) a)))

(defn bel-eval [{:keys [globe] :as env} form done-f]
  (let [vmark (find-vmark globe)
        [t] form]
    (cond
      (= t :char) (done-f form)
      (bel-string? form) (done-f form)
      (bel-variable? vmark form) (eval-variable env form done-f)
      (= t :pair) (eval-pair env form done-f)
      (= t :backquote) (eval-backquote env form))))

(defn run [& ss]
  (let [ globe (make-bel-globe)]
    (letfn [(f [ss done-f]
              (bel-eval {:globe globe :scope bel-nil}
                        (bel-parse (first ss))
                        (fn [r]
                          (if (seq (rest ss))
                            (f (rest ss) done-f)
                            (done-f r)))))]
      (f ss (fn [r] (println ">>" r))))))

(comment
  (run "\\bel")
  (run "nil")
  (run "'foo")
  (run "\"foo\"")
  (run "(lit (foo bar baz))")
  (run "car")
  (run "(car '(a b))")
  (run "(id t nil)")
  (run "(id t t)")
  (run "(id t)")
  (run "(id)")
  (run "(set a 'b c 'd)" "c")
  (run "(apply join '(a b))")
  (run "(apply join 'a '(b))")
  (run "((lit clo nil (x) (id x t)) t)")
  (run "((lit clo nil (x) (id x t)) nil)")
  (run "globe")
  (run "(if nil a)")
  (run "(if t 'a)")
  (run "(if nil 'a 'b)")
  (run "(set a 'foo b '(bar baz))"
       "`(foo ',a ,@b)"))

;; Source Reader
;; -------------

(defn readable-source
  "I've added a BREAK character. This way,
   we can incrementally evaluate the source,
   and build up this interpreter"
  []
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
  (map bel-parse (readable-source))
  (time (apply run (readable-source))))

; next up
; start by making dyn. Then move on to ccc, then err
; waiting: -- what should happen if we see (fn ((nil .nil) x) y)
