(ns bel-clojure.evaluator
  (:refer-clojure :exclude [eval])
  (:require
   [bel-clojure.model :as m]
   [bel-clojure.reader :as r]))

;; ----
;; Misc

(def drop-lastv (comp vec drop-last))

;; ------
;; where

(defn in-where? [es]
  (= (second (last es)) [:where]))

(defn b-where [es rs env x]
  [(conj es
         [env [:where]]
         [env x])
   rs])

;; --------
;; variable

(defn env-pair [sym v]
  (assert (m/bel-variable? sym)
          (format "expected left-side to be a variable= %s" sym))
  (m/p sym v))

(defn not-bel-nil [x]
  (when-not (= x m/bel-nil) x))

(defn get-variable [{:keys [dyn scope globe]} form]
  (let [v (->> [dyn scope globe]
               (some (fn [x]
                       (not-bel-nil (m/map-get x form)))))]
    (assert v
            (format "expected value for variable = %s" form))
    v))

(defn eval-variable [es rs env form]
  (cond
    (= m/bel-globe form)
    [es (conj rs (:globe env))]

    (= m/bel-scope form)
    [es (conj rs (:scope env))]

    :else
    (let [v-pair (get-variable env form)]
      (if (in-where? es)
        [(drop-lastv es)
         (conj rs
               (m/p v-pair (m/p m/bel-d m/bel-nil)))]
        [es
         (conj rs (m/cdr v-pair))]))))

;; ----------
;; thread

(declare env)

(defn b-thread [es rs {:keys [globe] :as env1} form]
  [(conj
    es
    [env1 [:start-thread (assoc (env) :globe globe) form]])
   rs])

;; ----
;; dyn

(defn eval-dyn-remove [es rs {:keys [dyn]} [_ variable]]
  (m/map-delete dyn variable)
  [es rs])

(defn eval-dyn-2 [es rs env [_ variable after]]
  (let [ev (last rs)
        rest-rs (drop-lastv rs)
        {:keys [dyn]} env]
    (m/map-put dyn variable (env-pair variable ev))
    [(conj es
           [env [:dyn-remove variable]]
           [env after])
     rest-rs]))

(defn b-dyn [es rs env variable arg after]
  [(conj
    es
    [env [:dyn-2 variable after]]
    [env arg])
   rs])

;; ----
;; ccc

(defn eval-cont [_es _rs _env litv args-head]
  (let [[f] litv
        [es rs] (f)]
    [es (conj rs (m/car args-head))]))

(defn eval-ccc-2 [es rs env _form]
  (let [f-evaled (last rs)
        rest-rs (drop-lastv rs)]
    [(conj
      es
      [env
       (m/p
        f-evaled
        (m/p
         (m/seq->p [m/bel-lit m/bel-cont (fn [] [es rest-rs])])
         m/bel-nil))])
     rest-rs]))

(defn b-ccc [es rs env f]
  [(conj
    es
    [env [:ccc-2]]
    [env f])
   rs])

;; ---
;; err

(defn b-err [_es _rs _env e]
  [[] [[:err e]]])

;; -----
;; debug

(defn b-debug
  [x] (println "[DEBUG] " (r/bel->pretty x)))

;; ----
;; uvar

(def b-uvar gensym)

;; ----
;; bin<

(declare bel-compare)

(defn base-compare
  [a b] (compare a b))

(defn list-compare
  [a b]
  (let [c1 (m/car a)
        c2 (m/car b)
        v (bel-compare c1 c2)]
    (cond
      (not= 0 v) v
      (not= m/bel-nil (m/cdr a)) (bel-compare (m/cdr a) (m/cdr b))
      :else v)))

(defn bel-compare [a b]
  (let [f (condp = (m/type a)
            'pair list-compare
            base-compare)]
    (f a b)))

(defn b-bin< [& xs]
  (m/clj-bool->bel (neg? (apply bel-compare xs))))

;; ----
;; math

(defn wrap-math-fn [f]
  (fn [& xs]
    (let [v (apply f xs)]
      (if
       (number? v) v
       (m/clj-bool->bel v)))))

(def math-name->fn
  {"+" (wrap-math-fn +)
   "-" (wrap-math-fn -)
   "*" (wrap-math-fn *)
   "/" (wrap-math-fn /)
   "int" (wrap-math-fn int?)
   "num<" (wrap-math-fn <)
   "abs" (wrap-math-fn #(Math/abs %))
   "hash" (wrap-math-fn #(.hashCode %))})

;; ------------
;; simple-prims

(def prim-name->fn
  (merge
   {"id" #'m/id
    "car" #'m/car
    "cdr" #'m/cdr
    "join" #'m/join
    "type" #'m/type
    "xar" #'m/xar
    "xdr" #'m/xdr
    "sym" #'m/sym
    "nom" #'m/nom
    "coin" #'m/coin
    "p-debug" #'b-debug
    "uvar" #'b-uvar
    "bin<" #'b-bin<
    "map-assoc" #'m/map-assoc}
   math-name->fn))

;; -------------
;; special-prims

(def special-prim-name->fn
  {"dyn" #'b-dyn
   "ccc" #'b-ccc
   "where" #'b-where
   "err" #'b-err
   "thread" #'b-thread})

;; ---
;; Env

(defn bel-globe []
  (let [m (m/mut-map)]
    (->> (merge prim-name->fn special-prim-name->fn)
         (map (fn [[k]]
                (let [sym-k (symbol (name k))]
                  (m/map-put
                   m
                   sym-k
                   (m/p
                    sym-k
                    (m/seq->p [m/bel-lit m/bel-prim sym-k]))))))
         doall)
    m))

(defn env
  ([] (env (bel-globe)))
  ([g]
   {:globe g
    :scope m/bel-nil
    :dyn (m/mut-map)}))

;; ------------
;; eval-if

(defn eval-if-2 [es rs env [_ [consequent-form r]]]
  (let [evaled-test-form (last rs)
        rest-rs (drop-lastv rs)]
    [(conj es
           (cond
             (not= m/bel-nil evaled-test-form)
             [env consequent-form]

             (= m/bel-nil r)
             [env r]

             (= m/bel-nil (m/cdr r))
             [env (m/car r)]
             :else
             [env
              (m/p m/bel-if r)]))
     rest-rs]))

(defn eval-if-1 [es rs env [test-form r]]
  [(conj es
         [env [:if-2 r]]
         [env test-form])
   rs])

;; ------------
;; eval-set

(defn eval-set-2 [es rs {:keys [globe] :as _env} form]
  (let [[_ sym] form
        evaled-v (last rs)
        rest-rs (drop-lastv rs)]
    (m/map-put
     globe
     sym
     (env-pair sym evaled-v))
    [es (conj rest-rs)]))

(defn eval-set-1 [es rs env form]
  (let [[sym after-sym] form
        _ (assert (not= m/bel-nil after-sym)
                  "Set sym needs a value")
        [v after-v] after-sym
        es' (if (not= after-v m/bel-nil)
              (conj es [env (m/p m/bel-set after-v)])
              es)]
    [(conj es'
           [env [:set-2 sym]]
           [env v])
     rs]))

;; eval-application
;; --------------------

(defn lit-type [[ _lit [ t]]] t)

(defn lit-v [[ _lit [ _t v]]] v)

(defn assert-lit [[lit :as form]]
  (assert (= m/bel-lit lit)
          (format
           "expected lit expression got form = %s" form))
  form)

;; -------------
;; eval-prim

(defn bel-nil-args [f args]
  (let [arglist (->> f meta :arglists first)
        niled-args (if arglist
                     (map-indexed (fn [i _] (nth args i m/bel-nil)) arglist)
                     args)]
    niled-args))

(defn eval-prim-simple [es rs env [_ n simple-f]]
  (let [evaled-args (last rs)
        rest-rs (drop-lastv rs)
        args (m/p->seq evaled-args)]
    (try
      (if (in-where? es)
        [(drop-lastv es)
         (conj rs
               (m/p
                (m/car evaled-args)
                (m/p
                 (condp = n
                   "car" m/bel-a
                   "cdr" m/bel-d
                   (throw (Exception. "unexpected use of where")))
                 m/bel-nil)))]

        [es
         (conj rest-rs
               (apply simple-f
                      (bel-nil-args simple-f args)))])
      (catch Throwable e
        [(conj es [env (m/p
                        m/bel-err-sym
                        (m/p [:clj-err e]
                             m/bel-nil))])
         rest-rs]))))

(defn eval-prim [es rs env litv args-head]
  (let [n (name (m/car litv))
        simple-f (prim-name->fn n)
        special-f (special-prim-name->fn n)]
    (if simple-f
      [(conj es
             [env [:eval-prim-simple n simple-f]]
             [env [:eval-many-1 args-head]])
       rs]
      (apply special-f
             (bel-nil-args
              special-f
              (concat [es rs env]
                      (m/p->seq args-head)))))))

;; -----------
;; assign-vars

(defn assign-vars-typecheck-2 [es rs env [_ variable arg]]
  (let [check (last rs)
        rest-rs (drop-lastv rs)]
    (if (= m/bel-nil check)
      [(conj es
             [env (m/p
                   m/bel-err-sym
                   (m/p (m/p m/bel-quote 'mistype)
                        m/bel-nil))])
       rs]
      [(conj es
             [env
              [:assign-vars-1
               (m/bel-typecheck-var variable)
               arg]])
       rest-rs])))

(defn assign-vars-typecheck-1 [es rs env [_ variable arg]]
  (let [evaled-f (last rs)
        rest-rs (drop-lastv rs)]
    [(conj es
           [env [:assign-vars-typecheck-2 variable arg]]
           [env (m/p
                 evaled-f
                 (m/p (m/p m/bel-quote arg)
                      m/bel-nil))])
     rest-rs]))

(defn assign-vars-optional-arg [es rs env [_ variable]]
  (let [arg-evaled (last rs)
        rest-rs (drop-lastv rs)]
    [(conj es
           [env [:assign-vars-1 variable arg-evaled]])
     rest-rs]))

(defn assign-vars-rest [es rs env [_ var-head arg-head]]
  (let [scope (last rs)
        rest-rs (drop-lastv rs)]
    [(conj es
           [(assoc env :scope scope)
            [:assign-vars-1 var-head arg-head]])
     rest-rs]))

(defn assign-vars-1 [es rs {:keys [scope] :as env} [_ var-head arg-head]]
  (cond
    (every? (partial = m/bel-nil) [var-head arg-head])
    [es (conj rs scope)]

    (m/bel-variable? var-head)
    [es (conj rs
              (m/map-assoc
               scope
               var-head
               (env-pair
                var-head
                arg-head)))]

    (m/bel-optional? var-head)
    (if (= m/bel-nil arg-head)
      [(conj es
             [env [:assign-vars-optional-arg
                   (m/bel-optional-var var-head)]]
             [env (m/bel-optional-arg var-head)])

       rs]
      [(conj es
             [env [:assign-vars-1
                   (m/bel-optional-var var-head) arg-head]])
       rs])
    (m/bel-typecheck? var-head)
    [(conj es
           [env [:assign-vars-typecheck-1 var-head arg-head]]
           [env (m/bel-typecheck-f var-head)])
     rs]
    :else
    [(conj es
           [env [:assign-vars-rest
                 (m/cdr var-head) (m/cdr arg-head)]]
           [env [:assign-vars-1
                 (m/car var-head) (m/car arg-head)]])
     rs]))

;; ------------
;; eval-clo

(defn eval-clo-2 [es rs env [_ body-head]]
  (let [scope (last rs)
        rest-rs (drop-lastv rs)]
    [(conj es
           [(assoc env :scope scope) body-head])
     rest-rs]))

(defn clo-expression-stack [env litv args-head]
  (let [[scope [args-sym-head [body-head]]] litv]
    [[env [:eval-clo-2 body-head]]
     [(assoc env :scope scope)
      [:assign-vars-1 args-sym-head args-head]]]))

(defn eval-clo [es rs env litv args-head]
  [(into es (clo-expression-stack env litv args-head))
   rs])

;; ------------
;; eval-mac

(defn eval-mac-2 [es rs env _form]
  (let [code (last rs)
        rest-rs (drop-lastv rs)]
    [(conj es [env code])
     rest-rs]))

(defn eval-mac-1 [es rs env litv args-head]
  (let [[ [ _ [ _ clo]]] litv]
    [(into es
           (concat [[env [:eval-mac-2]]]
                   (clo-expression-stack env clo args-head)))
     rs]))

;; ------------
;; eval-lit

(defn eval-lit-1 [es rs env [_ evaled-lit]]
  (let [args-head (last rs)
        rest-rs (drop-lastv rs)
        litv (lit-v evaled-lit)]
    (condp = (lit-type evaled-lit)
      m/bel-prim
      (eval-prim es rest-rs env litv args-head)
      m/bel-clo
      (eval-clo es rest-rs env litv args-head)
      m/bel-mac
      (eval-mac-1 es rest-rs env litv args-head)
      m/bel-cont
      (eval-cont es rest-rs env litv args-head))))

;; --------------
;; eval-many

(defn eval-many-2 [es rs _env [_ rs-cnt]]
  (let [rest-rs (vec (take rs-cnt rs))
        evaled-pairs (m/seq->p (reverse (drop rs-cnt rs)))]
    [es (conj rest-rs evaled-pairs)]))

(defn eval-many-1 [es rs env [_ args-head]]
  (let [pairs-to-eval (m/p->seq args-head)]
    [(vec
      (concat
       (conj es [env [:eval-many-2 (count rs)]])
       (map (fn [p] [env p]) pairs-to-eval)))
     rs]))

;; --------------------
;; eval-application

(defn eval-application-2 [es rs env [_ args-head]]
  (let [evaled (last rs)
        rest-rs (drop-lastv rs)]
    (if (m/number? evaled)
      [(conj es
             [env [:eval-lit-1 (m/cdr (get-variable env 'nth))]]
             [env [:eval-many-1 (m/p evaled args-head)]])
       rest-rs]
      (let [evaled-lit (assert-lit evaled)
            es' (conj es [env [:eval-lit-1 evaled-lit]])]
        (if (#{m/bel-mac m/bel-prim}
             (lit-type evaled-lit))
          [es' (conj rest-rs args-head)]
          [(conj es'
                 [env [:eval-many-1 args-head]])
           rest-rs])))))

(defn eval-application-1 [es rs env [f args-head :as _form]]
  [(conj es
         [env [:application-2 args-head]]
         [env f])
   rs])

;; eval-apply
;; -------------

(defn apply-head->args-head [x]
  (let [xs (m/p->seq x)
        but-last (drop-last xs)
        l (last xs)
        ls (if (m/pair? l)
             (m/p->seq l)
             [l])]
    (->> (concat but-last ls)
         (map m/quoted-p)
         m/seq->p)))

(defn eval-apply-2 [es rs env [_ f]]
  (let [evaled-apply-head (last rs)
        rest-rs (drop-lastv rs)]
    [(conj
      es
      [env (m/p
            f (apply-head->args-head evaled-apply-head))])
     rest-rs]))

(defn eval-apply-1 [es rs env [f apply-head :as _form]]
  [(conj
    es
    [env [:eval-apply-2 f]]
    [env [:eval-many-1 apply-head]])
   rs])

;; -------------
;; eval-pair

(defn eval-pair [es rs env [l r :as form]]
  (cond
    (= m/bel-quote l) [es (conj rs r)]
    (= m/bel-set l) (eval-set-1 es rs env r)
    (= m/bel-if l) (eval-if-1 es rs env r)
    (= m/bel-apply l) (eval-apply-1 es rs env r)
    :else (eval-application-1 es rs env form)))

;; ------------------
;; eval-backquote

(defn eval-bq-comma-1 [es rs _env _form]
  (let [[r-evaled h-evaled] (take-last 2 rs)
        rest-rs (drop-lastv 2 rs)]
    [es
     (conj
      rest-rs
      (m/p
       h-evaled
       r-evaled))]))

(defn eval-bq-splice-1 [es rs _env _form]
  (let [[r-evaled h-evaled] (take-last 2 rs)
        rest-rs (drop-lastv 2 rs)]
    [es
     (conj
      rest-rs
      (m/p-append
       h-evaled
       r-evaled))]))

(defn eval-bq-pair-1 [es rs _env _form]
  (let [[r-evaled h-evaled] (take-last 2 rs)
        rest-rs (drop-lastv 2 rs)]
    [es
     (conj
      rest-rs
      (m/p
       h-evaled
       r-evaled))]))

(defn eval-bq-rest-1 [es rs _env [_ h]]
  (let [r-evaled (last rs)
        rest-rs (drop-lastv rs)]
    [es
     (conj
      rest-rs
      (m/p
       h
       r-evaled))]))

(defn eval-backquote [es rs env [_ form]]
  (let [t (m/type form)]
    (cond
      (= t 'comma)
      [(conj es [env (second form)])
       rs]

      (not= t 'pair)
      [es (conj rs form)]

      :else
      (let [[h r] form
            h-t (m/type h)]
        (cond
          (= h-t 'comma)
          [(conj
            es
            [env [:eval-bq-comma-1]]
            [env (second h)]
            [env [:backquote r]])
           rs]
          (= h-t 'splice)
          [(conj
            es
            [env [:eval-bq-splice-1]]
            [env (second h)]
            [env [:backquote r]])
           rs]
          (= h-t 'pair)
          [(conj es
                 [env [:eval-bq-pair-1]]
                 [env [:backquote h]]
                 [env [:backquote r]])
           rs]
          :else
          [(conj es
                 [env [:eval-bq-rest-1 h]]
                 [env [:backquote r]])
           rs])))))

;; --------
;; eval

(defn literal? [form]
  (or (#{'clj-err 'char 'number} (m/type form))
      (#{m/bel-nil m/bel-t m/bel-o m/bel-apply} form)
      (and (m/pair? form) (#{m/bel-lit} (m/car form)))
      (m/string? form)))

(def step->fn
  {:set-2 eval-set-2
   :if-2 eval-if-2
   :application-2 eval-application-2
   :eval-many-1 eval-many-1
   :eval-many-2 eval-many-2
   :eval-lit-1 eval-lit-1
   :eval-prim-simple eval-prim-simple
   :eval-mac-2 eval-mac-2
   :assign-vars-1 assign-vars-1
   :assign-vars-optional-arg assign-vars-optional-arg
   :assign-vars-typecheck-1 assign-vars-typecheck-1
   :assign-vars-typecheck-2 assign-vars-typecheck-2
   :assign-vars-rest assign-vars-rest
   :eval-clo-2 eval-clo-2
   :dyn-2 eval-dyn-2
   :dyn-remove eval-dyn-remove
   :ccc-2 eval-ccc-2
   :backquote eval-backquote
   :eval-bq-comma-1 eval-bq-comma-1
   :eval-bq-splice-1 eval-bq-splice-1
   :eval-bq-pair-1 eval-bq-pair-1
   :eval-bq-rest-1 eval-bq-rest-1
   :eval-apply-2 eval-apply-2})

(defn eval-step [es rs]
  (let [top (last es)
        rest-es (drop-lastv es)
        [env form] top]
    (cond
      (literal? form)
      [rest-es (conj rs form)]

      (m/bel-variable? form)
      (eval-variable rest-es rs env form)

      (m/pair? form)
      (eval-pair rest-es rs env form)

      :else
      (let [f (step->fn (first form))]
        (f rest-es rs env form)))))

(defn debug-loop [tid es rs]
  (println "---start--")
  (println "tid:" tid)
  (println "in:")
  (doall (map (comp println r/bel->pretty second) es))
  (println "out:")
  (doall (map println rs))
  (println "---end---"))

(defn start-thread-command? [form]
  (and (seqable? form) (= :start-thread (first form))))

(defn start-thread-command->thread [[_ env form]]
  [(gensym) [[env form]] []])

(defn locking? [es]
  (let [lock (some-> es last first :dyn (get 'lock))]
    (and lock (not= lock m/bel-nil))))

(defn eval [threads]
  (loop [threads threads]
    (let [[top-thread & rest-threads] threads
          [tid es rs] top-thread
          [_ top-form] (last es)]
      (cond
        (empty? es)
        (if (empty? rest-threads)
          (or (last rs) m/bel-nil)
          (recur rest-threads))

        (start-thread-command? top-form)
        (recur
         (into [(start-thread-command->thread top-form)
                [tid (drop-lastv es) rs]]
               rest-threads))
        :else
        (let [[es' rs'] (eval-step es rs)
              thread' [tid es' rs']]
          (recur
           (if (locking? es')
             (into [thread'] rest-threads)
             (into (vec rest-threads) [thread']))))))))

(defn eval-single [env form]
  (eval [[(gensym) [[env form]] []]]))

(defn eval-all
  [env strs]
  (mapv (fn [s]
          (eval-single env (r/parse s))) strs))
