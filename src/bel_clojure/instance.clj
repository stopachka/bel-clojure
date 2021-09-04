(ns bel-clojure.instance
  (:require
   [clojure.java.io :as io]
   [instaparse.core :as insta]
   [clojure.string :as cstring]
   [clojure.walk :as walk]
   [clojure.core.async :refer [thread]])
  (:import
   (java.util ArrayList)
   (clojure.lang ExceptionInfo)))

;; Constants
;; ---------

(def bel-quote [:symbol "quote"])
(def bel-nil [:symbol "nil"])
(def bel-t [:symbol "t"])
(def bel-dot [:dot "."])
(def bel-lit [:symbol "lit"])
(def bel-cont [:symbol "cont-instance"])
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
  (bel-parse "[id _ (car args)]")
  (bel-parse "e1"))

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

(defn bel-string->str [p]
  (let [cs (pair->clojure-seq p)]
    (assert (every? (comp (partial = :char) first) cs)
            "Expected a string")
    (->> cs (map second) cstring/join)))

(defn p-sym [char-pairs]
  [:symbol (bel-string->str char-pairs)])

(comment
  (p-sym (bel-parse "\"foo\"")))

(defn clojure-str->bel-str [v]
  (->> v
       (map (fn [c] [:char (str c)]))
       <-pairs))
(defn p-nom [[t v]]
  (assert (= t :symbol) "expected symbol")
  (clojure-str->bel-str v))

(comment
  (p-nom (bel-parse "foo")))

(defn p-err [msg & more]
  (throw (ex-info
          (format "Bel error = %s" (bel-string->str msg))
          {:more more})))

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

(declare bel-eval*)
(declare eval-pairs)

(defn p-ccc [{:keys [env done-f]} args-head]
  (eval-pairs
   env args-head
   (fn [evaled-args-head]
     (let [cont (<-pairs [bel-lit bel-cont done-f])]
       (bel-eval*
        env
        (make-pair (p-car evaled-args-head)
                   (make-pair cont bel-nil))
        done-f)))))

(declare find-vmark)
(declare make-env-pair)

(defn remove-variable! [var-pair-head sym-to-remove]
  (cond
    (= bel-nil var-pair-head)
    bel-nil

    (= (p-car (p-car var-pair-head)) sym-to-remove)
    (do
      (p-xar var-pair-head
             (p-car (p-cdr var-pair-head)))
      (p-xdr var-pair-head
             (p-cdr (p-cdr var-pair-head))))

    :else
    (remove-variable! (p-cdr var-pair-head) sym-to-remove)))

(defn p-dyn [{:keys [env done-f]} args-head]
  (let [{:keys [globe dyn]} env
        [_ v [_ x [_ y]]] args-head
        vmark (find-vmark globe)]
    (bel-eval*
     env
     x
     (fn [evaled-x]
       (let [[_ head tail] dyn]
         (p-xar dyn (make-env-pair vmark v evaled-x))
         (p-xdr dyn (make-pair head tail))
         (bel-eval*
          env
          y
          (fn [res]
            (remove-variable! dyn v)
            (done-f res))))))))

(defn p-thread [{:keys [env done-f]} args-head]
  (thread
    (bel-eval*
     (assoc env :dyn (make-pair bel-nil bel-nil))
     (p-car args-head)
     done-f)))

;; Globe
;; -------------


(def sync-prim-name->fn
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
   "p-debug" #'p-debug
   "err" #'p-err})

(def async-prim-name->fn {"ccc" #'p-ccc
                          "dyn" #'p-dyn
                          "thread" #'p-thread})

(defn make-bel-globe []
  (->> (merge sync-prim-name->fn async-prim-name->fn)
       (map (fn [[k]]
              (make-pair
               [:symbol k]
               (<-pairs [bel-lit bel-prim [:symbol k]]))))
       <-pairs))

;; Evaluator
;; ---------

(defn find-env-pair [to-find pairs]
  (let [v (some->> pairs
                   (pair-find
                    (fn [p] (= bel-t (p-id to-find (p-car p))))))]
    (when (not= v bel-nil) v)))

(defn eval-variable [{:keys [scope globe dyn]} form done-f]
  (cond
    (#{bel-nil bel-t bel-o bel-apply} form) (done-f form)
    (= bel-globe form) (done-f globe)
    (= bel-scope form) (done-f scope)
    :else
    (let [v (->> [dyn scope globe]
                 (some (partial find-env-pair form)))]
      (assert v (format "expected value for variable = %s" form))
      (done-f (p-cdr v)))))

(comment
  (eval-variable {:scope bel-nil
                  :globe (make-bel-globe)} [:symbol "id"]
                 (fn [x] (println x))))

(defn fill-nil-args [f args]
  (let [res (->> f
                 meta
                 :arglists
                 first
                 (map-indexed (fn [i _] (nth args i bel-nil))))]
    (assert (<= (count args) (count res))
            (format
             "too many args = %s niled-args = %s niled-args" args res))
    res))

(defn eval-prim
  "Sync-f expects niled args as a seq
   Async-f expects unevaled args.
   This is necessary, because dyn for example, requires
   special evaluation rules.

   This is unfortunate. Now callers of this fn
   need to make sure that args are unevaled.

   It feels like a smell, and perhaps we should refactor it,
   but let's move on for now"
  [env r args-head done-f]
  (let [[_ [_ n]] r
        sync-f (sync-prim-name->fn n)
        async-f (async-prim-name->fn n)]
    (cond
      sync-f
      (eval-pairs
       env args-head
       (fn [evaled-args-head]
         (done-f
          (apply sync-f
                 (fill-nil-args sync-f
                                (pair->clojure-seq evaled-args-head))))))

      async-f
      (apply async-f
             [{:env env :done-f done-f} args-head]))))

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
                (bel-eval*
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

(defn assign-vars [{:keys [globe scope] :as env} var-head arg-head done-f]
  (let [vmark (find-vmark globe)]
    (letfn [(f [scope var-head arg-head done-f]
              (cond
                (every? (partial = bel-nil) [var-head arg-head])
                (done-f scope)

                (bel-variable? vmark var-head)
                (done-f (make-pair (make-env-pair
                                    vmark
                                    var-head
                                    arg-head)
                                   scope))

                (bel-optional? var-head)
                (if (not= bel-nil arg-head)
                  (f scope (bel-optional-var var-head) arg-head done-f)
                  (bel-eval*
                   env
                   (bel-optional-arg var-head)
                   (fn [evaled-arg]
                     (f scope (bel-optional-var var-head) evaled-arg done-f))))
                :else
                (f scope
                   (p-car var-head)
                   (p-car arg-head)
                   (fn [s']
                     (f s'
                        (p-cdr var-head)
                        (p-cdr arg-head)
                        done-f)))))]
      (f scope var-head arg-head done-f))))

(comment
  (assign-vars {:globe bel-nil :scope bel-nil}
               (bel-parse "(x y)") (bel-parse "(a b)")
               (fn [x] (println x)))
  (assign-vars
   {:globe bel-nil :scope bel-nil}
   (bel-parse "(x y . z)") (bel-parse "(a b c d)")
   (fn [x] (println x)))
  (assign-vars
   {:globe bel-nil :scope bel-nil}
   (bel-parse "(n . rest)") (bel-parse "(n args)")
   (fn [x] (println x)))
  (let [vmark (make-pair bel-nil bel-nil)]
    (assign-vars
     {:globe (make-pair
              (make-pair bel-vmark-sym vmark)
              bel-nil)
      :scope bel-nil}
     (make-pair vmark bel-nil)
     (bel-parse "a")
     (fn [x] (println x))))
  (assign-vars {:globe bel-nil :scope bel-nil}
               (bel-parse "(a b (o f =))")
               (bel-parse "(a b c)")
               (fn [x] (println x)))
  (assign-vars {:globe (make-bel-globe) :scope bel-nil}
               (bel-parse "(a b (o f id))") (bel-parse "(a b)")
               (fn [x] (println x))))

(defn eval-clo [env r args-head done-f]
  (let [[_ scope [_ args-sym-head [_ body-head]]] r]
    (assign-vars
     (assoc env :scope scope)
     args-sym-head
     args-head
     (fn [new-scope]
       (bel-eval*
        (assoc env :scope new-scope)
        body-head
        done-f)))))

(defn eval-mac [env [_ [_ _ [_ _ clo]]] args-head done-f]
  (eval-clo
   env clo args-head
   (fn [code]
     (bel-eval* env code done-f))))

(defn eval-if [env [_ test-form [_ consequent-form r]] done-f]
  (bel-eval*
   env test-form
   (fn [evaled-test-form]
     (if (not= evaled-test-form
               bel-nil)
       (bel-eval* env consequent-form done-f)
       (cond
         (= bel-nil r) (done-f r)
         (= bel-nil (p-cdr r)) (bel-eval* env (p-car r) done-f)
         :else (eval-if env r done-f))))))

(defn eval-pairs [env head done-f]
  (letfn [(f [res p]
            (if (= p bel-nil)
              (done-f (-> res <-pairs))

              (bel-eval*
               env
               (p-car p)
               (fn [evaled-h]
                 (f (conj res evaled-h)
                    (p-cdr p))))))]
    (f [] head)))

(comment
  (eval-pairs {:globe (make-bel-globe)}
              (bel-parse "(apply o)")
              (fn [x] (println x))))

(defn apply-head->args-head [x]
  (let [xs (pair->clojure-seq x)
        but-last (drop-last xs)
        [last-t :as l] (last xs)
        ls (if (= :pair last-t)
             (pair->clojure-seq l)
             [l])]
    (<-pairs (concat but-last ls))))

(defn assert-lit [[_ lit :as form]]
  (assert (= bel-lit lit)
          (format "expected lit expression got = %s" form))
  form)

(defn lit-type [[_ _lit [_ t]]] t)

(defn lit-v [[_ _lit [_ _t v]]] v)

(defn eval-cont [_env [_ f] args-head _done-f]
  (f (p-car args-head)))

(defn eval-lit [env lit args-head done-f]
  (condp = (lit-type lit)
    bel-prim
    (eval-prim env (lit-v lit) args-head done-f)
    bel-clo
    (eval-clo env (lit-v lit) args-head done-f)
    bel-mac
    (eval-mac env (lit-v lit) args-head done-f)
    bel-cont
    (eval-cont env (lit-v lit) args-head done-f)
    (throw (Exception. "err unsupported fn call"))))

(defn eval-apply [env [_ f apply-head] done-f]
  (bel-eval*
   env
   f
   (fn [evaled-lit]
     (assert-lit evaled-lit)
     (eval-pairs
      env
      apply-head
      (fn [evaled-head]
        (eval-lit
         env
         evaled-lit
         (apply-head->args-head evaled-head)
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
      (bel-eval*
       env f
       (fn [evaled-lit]
         (assert-lit evaled-lit)
         (if (#{bel-mac bel-prim} (lit-type evaled-lit))
           (eval-lit env evaled-lit args-head done-f)
           (eval-pairs
            env args-head
            (fn [evaled-args-head]
              (eval-lit env evaled-lit evaled-args-head done-f)))))))))

(defn eval-backquoted-form [env [t [h-t :as h] r :as form] done-f]
  (cond
    (= t :comma) (bel-eval* env (second form) done-f)

    (not= t :pair) (done-f form)

    (= :quote h-t)
    (eval-backquoted-form
     env (second h)
     (fn [evaled-second-h]
       (eval-backquoted-form
        env r
        (fn [evaled-r]
          (done-f
           (make-pair
            (make-quoted-pair evaled-second-h)
            evaled-r))))))

    (= h-t :comma)
    (bel-eval*
     env (second h)
     (fn [evaled-second-h]
       (eval-backquoted-form
        env r
        (fn [evaled-r]
          (done-f
           (make-pair evaled-second-h evaled-r))))))

    (= h-t :splice)
    (bel-eval*
     env (second h)
     (fn [evaled-second-h]
       (eval-backquoted-form
        env r
        (fn [evaled-r]
          (done-f
           (pair-append evaled-second-h evaled-r))))))

    (= h-t :pair)
    (eval-backquoted-form
     env h
     (fn [evaled-h]
       (eval-backquoted-form
        env r
        (fn [evaled-r]
          (done-f (make-pair evaled-h evaled-r))))))

    :else
    (eval-backquoted-form env r
                          (fn [evaled-r]
                            (done-f (make-pair h evaled-r))))))

(defn eval-backquote [env [_ r] done-f]
  (eval-backquoted-form env r done-f))

(comment
  (eval-backquote
   {:scope (bel-parse "((b . foo) (d . bar))")}
   (bel-parse "`(a ,b (c ,d))")
   (fn [x] (println x)))
  (eval-backquote
   {:scope (bel-parse "((b . (b c)))")}
   (bel-parse "`(a (b c ,@b) d e)")
   (fn [x] (println x)))
  (eval-backquote
   {:globe (make-bel-globe)
    :scope (bel-parse "((parms . (a)) (body . (inc id a)))")}
   (bel-parse "`(',parms ',(car body))")
   (fn [x] (println x))))

(defn bel-string? [a]
  (and (pair-proper? a)
       (pair-every? (fn [[t]] (= t :char)) a)))

(defn bel-eval* [{:keys [globe] :as env} form done-f]
  (let [vmark (find-vmark globe)
        [t] form]
    (cond
      (= t :char) (done-f form)
      (bel-string? form) (done-f form)
      (bel-variable? vmark form) (eval-variable env form done-f)
      (= t :pair) (eval-pair env form done-f)
      (= t :backquote) (eval-backquote env form done-f))))

(defn bel-eval [env form done-f]
  (try
    (bel-eval* env form done-f)
    (catch ExceptionInfo _e) ; ignore, caused by err signal
    (catch
     Exception e
      (bel-eval*
       env
       (make-pair
        [:symbol "err"]
        (make-pair
         (clojure-str->bel-str "Uncaught bel error")
         (make-pair
          (make-pair bel-lit (make-pair e bel-nil))
          bel-nil)))
       done-f))))

(defn run [& ss]
  (let [a (atom [])
        env {:globe (make-bel-globe) :scope bel-nil
             :dyn (make-pair bel-nil bel-nil)}]
    (->> ss
         (map (fn [s]
                (bel-eval env (bel-parse s)
                          (fn [x]
                            (swap! a conj x)))))
         doall)
    (take-last 2 @a)))

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
  (time (apply run (readable-source)))
    (require '[clj-async-profiler.core :as prof])
 (prof/profile (apply run (readable-source)))
  )

; next up
; compose is not working. it's also getting veeery slow. time to speed up?
; waiting: -- what should happen if we see (fn ((nil . nil) x) y)
