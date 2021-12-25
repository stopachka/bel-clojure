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
  (loop [p p]
    (cond
      (= bel-nil p) p
      (f (p-car p)) (p-car p)
      :else (recur (p-cdr p)))))

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

(declare bel->clj)
(defn p-debug
  "Note, this is not necessary for
   Bel, but helps for debugging"
  [x]
  (println (bel->clj x)))

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

(comment
  (get-variable {:scope bel-nil
                 :globe (make-bel-globe)} [:symbol "id"]))

(defn eval-prim [_env r args-head]
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

    (apply f niled-args)))

(defn get-variable [{:keys [scope globe]} form]
  (cond
    (#{bel-nil bel-t bel-o bel-apply} form) form
    (= bel-globe form) globe
    (= bel-scope form) scope
    :else
    (let [v (->> [scope globe]
                 (some (partial find-env-pair form)))]
      (assert v (format "expected value for variable = %s" form))
      (p-cdr v))))

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

(defn eval-set [{:keys [globe] :as env} r]
  (let [vmark (find-vmark globe)]
    (letfn [(f [p]
              (let [[_ sym after-sym] p
                    _ (assert (not= bel-nil after-sym)
                              "Set sym needs a value")
                    [_ v after-v] after-sym
                    evaled-v (bel-eval env v)
                    [_ head tail] globe]
                (p-xar globe (make-env-pair vmark sym evaled-v))
                (p-xdr globe (make-pair head tail))
                (when (not= bel-nil after-v)
                  (f after-v))))]
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
                     (bel-optional-arg var-head)
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

(defn eval-if [env [_ test-form [_ consequent-form r]]]
  (if (not= (bel-eval env test-form)
            bel-nil)
    (bel-eval env consequent-form)
    (cond
      (= bel-nil r) r
      (= bel-nil (p-cdr r)) (bel-eval env (p-car r))
      :else (eval-if env r))))

(defn eval-pairs [env head]
  (->> head
       pair->clojure-seq
       (map (partial bel-eval env))
       <-pairs))

(defn apply-head->args-head [x]
  (let [xs (pair->clojure-seq x)
        but-last (drop-last xs)
        [last-t :as l] (last xs)
        ls (if (= :pair last-t)
             (pair->clojure-seq l)
             [l])]
    (->> (concat but-last ls)
         (map make-quoted-pair)
         <-pairs)))

(defn assert-lit [[_ lit :as form]]
  (assert (= bel-lit lit) "expected lit expression")
  form)

(defn lit-type [[_ _lit [_ t]]] t)

(defn lit-v [[_ _lit [_ _t v]]] v)

(defn eval-lit [env lit args-head]
  (condp = (lit-type lit)
    bel-prim
    (eval-prim env (lit-v lit) args-head)
    bel-clo
    (eval-clo env (lit-v lit) args-head)
    bel-mac
    (eval-mac env (lit-v lit) args-head)
    (throw (Exception. "err unsupported fn call"))))

(defn eval-apply [env [_ f apply-head :as form]]
  (bel-eval
   env
   (make-pair
    f
    (apply-head->args-head (eval-pairs env apply-head)))))

(defn eval-pair [env [_ l r :as x]]
  (cond
    (= bel-quote l) r
    (= bel-lit l) x
    (= bel-set l) (eval-set env r)
    (= bel-if l) (eval-if env r)
    (= bel-apply l) (eval-apply env r)
    :else
    (let [[_ f args-head] x
          evaled-lit (assert-lit (bel-eval env f))]
      (eval-lit
       env
       evaled-lit
       (if (= bel-mac (lit-type evaled-lit))
         args-head
         (eval-pairs env args-head))))))

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


(defn bel-eval [{:keys [globe] :as env} form]
  (let [vmark (find-vmark globe)
        [t] form]
    (cond
      (= t :char) form
      (bel-string? form) form
      (bel-variable? vmark form) (get-variable env form)
      (= t :pair) (eval-pair env form)
      (= t :backquote) (eval-backquote env form))))


;


(defn stack-eval-if-2 [es rs vmark env [_ consequent-form r]]
  (let [evaled-test (last rs)
        rs' (vec (drop-last rs))]

    (if (not= bel-nil))));


(defn stack-eval-if [es rs vmark env [_ test-form [_ consequent-form r]]]
  [(conj es
         [env :if-2 consequent-form r]
         [env test-form])
   rs]
  (if (not= (bel-eval env test-form)
            bel-nil)
    (bel-eval env consequent-form)
    (cond
      (= bel-nil r) r
      (= bel-nil (p-cdr r)) (bel-eval env (p-car r))
      :else (eval-if env r))))

(defn stack-eval-set-2 [es rs vmark {:keys [globe]} [_ sym]]
  (let [v (last rs)
        rs' (vec (drop-last rs))
        [_ head tail] globe]
    (p-xar globe (make-env-pair vmark sym v))
    (p-xdr globe (make-pair head tail))
    [es rs']))

(defn stack-eval-set [es rs env x]
  (let [[_ sym after-sym] x
        _ (assert (not= bel-nil after-sym)
                  "Set sym needs a value")
        [_ v after-v] after-sym
        es' (if (not= after-v bel-nil)
              (conj es [env (make-pair bel-set after-v)])
              es)]
    [(conj es'
           [env [:set-2 sym]]
           [env v])
     rs]))

(defn stack-eval-pair [es rs env [_ l r :as x]]
  (cond
    (= bel-quote l) [es (conj rs r)]
    (= bel-lit l) [es (conj rs x)]
    (= bel-set l) (stack-eval-set
                   es rs env r)))

(defn stack-eval [eval-stack return-stack]
  (loop [es eval-stack
         rs return-stack]
    (if (empty? es)
      (last rs)
      (let [[{:keys [globe] :as env} [t :as form]] (last es)
            vmark (find-vmark globe)
            es' (vec (drop-last es))]
        (cond
          (= t :char)
          (recur es' (conj rs form))

          (bel-string? form)
          (recur es' (conj rs form))

          (bel-variable? vmark form)
          (recur es' (conj rs
                           (get-variable env form)))

          (= t :pair)
          (let [[new-es new-rs] (stack-eval-pair es' rs env form)]
            (recur new-es new-rs))

          (= t :set-2)
          (let [[new-es new-rs] (stack-eval-set-2 es' rs vmark env form)]
            (recur new-es new-rs)))))))

(comment
  (def globe (make-bel-globe))
  globe
  (stack-eval
   [[{:globe globe :scope bel-nil}
     (bel-parse "(set foo 'id)")]]

   []))

;; ---
;; Run


(defn ensure-seq [x]
  (seq? x)
  [x])

(defn bel->clj [[t a b :as form]]
  (condp = t
    :symbol (symbol a)
    :char (symbol a)
    :pair
    (concat (ensure-seq (bel->clj a))
            (ensure-seq (bel->clj b)))
    form))

(defn run-all
  ([ss] (run-all (make-bel-globe) ss))
  ([globe ss]
   (let [vs (->> ss
                 (map (fn [s] (bel-eval {:globe globe :scope bel-nil} (bel-parse s))))
                 doall)]
     {:globe globe
      :vs (map bel->clj vs)})))

(defn run [& ss]
  (->> (run-all ss)
       :vs
       last))

(comment
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
  (def globe (:globe (run-all (readable-source))))
  (:vs
   (run-all
    globe
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
     "(begins '(a b c d e) '(a b))"])))

; next up
; start by making dyn. Then move on to ccc, then err
; waiting: -- what should happen if we see (fn ((nil .nil) x) y)
