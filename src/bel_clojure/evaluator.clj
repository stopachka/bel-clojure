(ns bel-clojure.evaluator
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

(defn p-where [es rs env x]
  [(conj es
         [env [:where]]
         [env x])
   rs])

;; --------
;; variable

(defn make-env-pair [sym v]
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

(defn bel-eval-variable [es rs env form]
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
         (conj rs (m/p-cdr v-pair))]))))

;; ----
;; dyn

(defn bel-eval-dyn-remove [es rs {:keys [dyn]} [_ variable]]
  (m/map-delete dyn variable)
  [es rs])

(defn bel-eval-dyn-2 [es rs env [_ variable after]]
  (let [ev (last rs)
        rest-rs (drop-lastv rs)
        {:keys [dyn]} env]
    (m/map-put dyn variable (make-env-pair variable ev))
    [(conj es
           [env [:dyn-remove variable]]
           [env after])
     rest-rs]))

(defn p-dyn [es rs env variable arg after]
  [(conj
    es
    [env [:dyn-2 variable after]]
    [env arg])
   rs])


;; ----------
;; p-thread


(defn p-thread [es rs env form]
  [(conj
    es
    [env [:start-thread env form]])
   rs])

;; ----------
;; p-locking

(defn p-locking [es rs env form]
  [(conj
    es
    [env [:lock-stop]]
    [env form]
    [env [:lock-start]])
   rs])

;; ----
;; ccc

(defn bel-eval-cont [_es _rs _env litv args-head]
  (let [[_ f] litv
        [es rs] (f)]
    [es (conj rs (m/p-car args-head))]))

(defn bel-eval-ccc-2 [es rs env _form]
  (let [f-evaled (last rs)
        rest-rs (drop-lastv rs)]
    [(conj
      es
      [env
       (m/p
        f-evaled
        (m/p
         (m/<-pairs [m/bel-lit m/bel-cont (fn [] [es rest-rs])])
         m/bel-nil))])
     rest-rs]))

(defn p-ccc [es rs env f]
  [(conj
    es
    [env [:ccc-2]]
    [env f])
   rs])

;; ---
;; err

(defn p-err [_es _rs _env e]
  [[] [[:err e]]])

;; -----
;; debug

(defn p-debug
  [x] (println "[DEBUG] " (r/bel->pretty-clj x)))

;; ----
;; uvar

(def p-uvar gensym)

;; ----
;; bin<

(declare bel-compare)

(defn base-compare
  [a b] (compare a b))

(defn list-compare
  [a b]
  (let [c1 (m/p-car a)
        c2 (m/p-car b)
        v (bel-compare c1 c2)]
    (cond
      (not= 0 v) v
      (not= m/bel-nil (m/p-cdr a)) (bel-compare (m/p-cdr a) (m/p-cdr b))
      :else v)))

(defn bel-compare [a b]
  (let [f (condp = (m/p-type a)
            'pair list-compare
            base-compare)]
    (f a b)))

(defn p-bin< [& xs]
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
   {"id" #'m/p-id
    "car" #'m/p-car
    "cdr" #'m/p-cdr
    "join" #'m/p-join
    "type" #'m/p-type
    "xar" #'m/p-xar
    "xdr" #'m/p-xdr
    "sym" #'m/p-sym
    "nom" #'m/p-nom
    "coin" #'m/p-coin
    "p-debug" #'p-debug
    "uvar" #'p-uvar
    "bin<" #'p-bin<
    "map-assoc" #'m/map-assoc}
   math-name->fn))

;; -------------
;; special-prims

(def special-prim-name->fn
  {"dyn" #'p-dyn
   "ccc" #'p-ccc
   "where" #'p-where
   "err" #'p-err
   "thread" #'p-thread
   "locking" #'p-locking})

;; ---
;; Env

(defn make-bel-globe []
  (let [m (m/mut-map)]
    (->> (merge prim-name->fn special-prim-name->fn)
         (map (fn [[k]]
                (let [sym-k (symbol (name k))]
                  (m/map-put
                   m
                   sym-k
                   (m/p
                    sym-k
                    (m/<-pairs [m/bel-lit m/bel-prim sym-k]))))))
         doall)
    m))

(defn make-env
  ([] (make-env (make-bel-globe)))
  ([g]
   {:globe g
    :scope m/bel-nil
    :dyn (m/mut-map)}))

;; ------------
;; bel-eval-if

(defn bel-eval-if-2 [es rs env [_ [_ consequent-form r]]]
  (let [evaled-test-form (last rs)
        rest-rs (drop-lastv rs)]
    [(conj es
           (cond
             (not= m/bel-nil evaled-test-form)
             [env consequent-form]

             (= m/bel-nil r)
             [env r]

             (= m/bel-nil (m/p-cdr r))
             [env (m/p-car r)]
             :else
             [env
              (m/p m/bel-if r)]))
     rest-rs]))

(defn bel-eval-if-1 [es rs env [_ test-form r]]
  [(conj es
         [env [:if-2 r]]
         [env test-form])
   rs])

;; ------------
;; bel-eval-set

(defn bel-eval-set-2 [es rs {:keys [globe] :as _env} form]
  (let [[_ sym] form
        evaled-v (last rs)
        rest-rs (drop-lastv rs)]
    (m/map-put
     globe
     sym
     (make-env-pair sym evaled-v))
    [es (conj rest-rs)]))

(defn bel-eval-set-1 [es rs env form]
  (let [[_ sym after-sym] form
        _ (assert (not= m/bel-nil after-sym)
                  "Set sym needs a value")
        [_ v after-v] after-sym
        es' (if (not= after-v m/bel-nil)
              (conj es [env (m/p m/bel-set after-v)])
              es)]
    [(conj es'
           [env [:set-2 sym]]
           [env v])
     rs]))

;; bel-eval-application
;; --------------------

(defn lit-type [[_ _lit [_ t]]] t)

(defn lit-v [[_ _lit [_ _t v]]] v)

(defn assert-lit [[_ lit :as form]]
  (assert (= m/bel-lit lit)
          (format
           "expected lit expression got form = %s" form))
  form)

;; -------------
;; bel-eval-prim

(defn bel-nil-args [f args]
  (let [arglist (->> f meta :arglists first)
        niled-args (if arglist
                     (map-indexed (fn [i _] (nth args i m/bel-nil)) arglist)
                     args)]
    niled-args))

(defn bel-eval-prim-simple [es rs env [_ n simple-f]]
  (let [evaled-args (last rs)
        rest-rs (drop-lastv rs)
        args (m/pair->clojure-seq evaled-args)]
    (try
      (if (in-where? es)
        [(drop-lastv es)
         (conj rs
               (m/p
                (m/p-car evaled-args)
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

(defn bel-eval-prim [es rs env litv args-head]
  (let [n (name (m/p-car litv))
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
                      (m/pair->clojure-seq args-head)))))))

;; -----------
;; assign-vars

(defn bel-assign-vars-typecheck-2 [es rs env [_ variable arg]]
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

(defn bel-assign-vars-typecheck-1 [es rs env [_ variable arg]]
  (let [evaled-f (last rs)
        rest-rs (drop-lastv rs)]
    [(conj es
           [env [:assign-vars-typecheck-2 variable arg]]
           [env (m/p
                 evaled-f
                 (m/p (m/p m/bel-quote arg)
                      m/bel-nil))])
     rest-rs]))

(defn bel-assign-vars-optional-arg [es rs env [_ variable]]
  (let [arg-evaled (last rs)
        rest-rs (drop-lastv rs)]
    [(conj es
           [env [:assign-vars-1 variable arg-evaled]])
     rest-rs]))

(defn bel-assign-vars-rest [es rs env [_ var-head arg-head]]
  (let [scope (last rs)
        rest-rs (drop-lastv rs)]
    [(conj es
           [(assoc env :scope scope)
            [:assign-vars-1 var-head arg-head]])
     rest-rs]))

(defn bel-assign-vars-1 [es rs {:keys [scope] :as env} [_ var-head arg-head]]
  (cond
    (every? (partial = m/bel-nil) [var-head arg-head])
    [es (conj rs scope)]

    (m/bel-variable? var-head)
    [es (conj rs
              (m/map-assoc
               scope
               var-head
               (make-env-pair
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
                 (m/p-cdr var-head) (m/p-cdr arg-head)]]
           [env [:assign-vars-1
                 (m/p-car var-head) (m/p-car arg-head)]])
     rs]))

;; ------------
;; bel-eval-clo

(defn bel-eval-clo-2 [es rs env [_ body-head]]
  (let [scope (last rs)
        rest-rs (drop-lastv rs)]
    [(conj es
           [(assoc env :scope scope) body-head])
     rest-rs]))

(defn bel-clo-es [env litv args-head]
  (let [[_ scope [_ args-sym-head [_ body-head]]] litv]
    [[env [:eval-clo-2 body-head]]
     [(assoc env :scope scope)
      [:assign-vars-1 args-sym-head args-head]]]))

(defn bel-eval-clo [es rs env litv args-head]
  [(into es (bel-clo-es env litv args-head))
   rs])

;; ------------
;; bel-eval-mac

(defn bel-eval-mac-2 [es rs env _form]
  (let [code (last rs)
        rest-rs (drop-lastv rs)]
    [(conj es [env code])
     rest-rs]))

(defn bel-eval-mac-1 [es rs env litv args-head]
  (let [[_ [_ _ [_ _ clo]]] litv]
    [(into es
           (concat [[env [:eval-mac-2]]]
                   (bel-clo-es env clo args-head)))
     rs]))

;; ------------
;; bel-eval-lit

(defn bel-eval-lit-1 [es rs env [_ evaled-lit]]
  (let [args-head (last rs)
        rest-rs (drop-lastv rs)
        litv (lit-v evaled-lit)]
    (condp = (lit-type evaled-lit)
      m/bel-prim
      (bel-eval-prim es rest-rs env litv args-head)
      m/bel-clo
      (bel-eval-clo es rest-rs env litv args-head)
      m/bel-mac
      (bel-eval-mac-1 es rest-rs env litv args-head)
      m/bel-cont
      (bel-eval-cont es rest-rs env litv args-head))))

;; --------------
;; bel-eval-many

(defn bel-eval-many-2 [es rs _env [_ rs-cnt]]
  (let [rest-rs (vec (take rs-cnt rs))
        evaled-pairs (m/<-pairs (reverse (drop rs-cnt rs)))]
    [es (conj rest-rs evaled-pairs)]))

(defn bel-eval-many-1 [es rs env [_ args-head]]
  (let [pairs-to-eval (m/pair->clojure-seq args-head)]
    [(vec
      (concat
       (conj es [env [:eval-many-2 (count rs)]])
       (map (fn [p] [env p]) pairs-to-eval)))
     rs]))

;; --------------------
;; bel-eval-application

(defn bel-eval-application-2 [es rs env [_ args-head]]
  (let [evaled-lit (assert-lit (last rs))
        rest-rs (drop-lastv rs)
        es' (conj es [env [:eval-lit-1 evaled-lit]])]
    (if (#{m/bel-mac m/bel-prim}
         (lit-type evaled-lit))
      [es' (conj rest-rs args-head)]
      [(conj es'
             [env [:eval-many-1 args-head]])
       rest-rs])))

(defn bel-eval-application-1 [es rs env [_ f args-head :as _form]]
  [(conj es
         [env [:application-2 args-head]]
         [env f])
   rs])

;; bel-eval-apply
;; -------------

(defn apply-head->args-head [x]
  (let [xs (m/pair->clojure-seq x)
        but-last (drop-last xs)
        l (last xs)
        ls (if (m/bel-pair? l)
             (m/pair->clojure-seq l)
             [l])]
    (->> (concat but-last ls)
         (map m/make-quoted-pair)
         m/<-pairs)))

(defn bel-eval-apply-2 [es rs env [_ f]]
  (let [evaled-apply-head (last rs)
        rest-rs (drop-lastv rs)]
    [(conj
      es
      [env (m/p
            f (apply-head->args-head evaled-apply-head))])
     rest-rs]))

(defn bel-eval-apply-1 [es rs env [_ f apply-head :as _form]]
  [(conj
    es
    [env [:eval-apply-2 f]]
    [env [:eval-many-1 apply-head]])
   rs])

;; -------------
;; bel-eval-pair

(defn bel-eval-pair [es rs env [_ l r :as form]]
  (cond
    (= m/bel-quote l) [es (conj rs r)]
    (= m/bel-set l) (bel-eval-set-1 es rs env r)
    (= m/bel-if l) (bel-eval-if-1 es rs env r)
    (= m/bel-apply l) (bel-eval-apply-1 es rs env r)
    :else (bel-eval-application-1 es rs env form)))

;; ------------------
;; bel-eval-backquote

(defn bel-eval-bq-comma-1 [es rs _env _form]
  (let [[r-evaled h-evaled] (take-last 2 rs)
        rest-rs (drop-lastv 2 rs)]
    [es
     (conj
      rest-rs
      (m/p
       h-evaled
       r-evaled))]))

(defn bel-eval-bq-splice-1 [es rs _env _form]
  (let [[r-evaled h-evaled] (take-last 2 rs)
        rest-rs (drop-lastv 2 rs)]
    [es
     (conj
      rest-rs
      (m/pair-append
       h-evaled
       r-evaled))]))

(defn bel-eval-bq-pair-1 [es rs _env _form]
  (let [[r-evaled h-evaled] (take-last 2 rs)
        rest-rs (drop-lastv 2 rs)]
    [es
     (conj
      rest-rs
      (m/p
       h-evaled
       r-evaled))]))

(defn bel-eval-bq-rest-1 [es rs _env [_ h]]
  (let [r-evaled (last rs)
        rest-rs (drop-lastv rs)]
    [es
     (conj
      rest-rs
      (m/p
       h
       r-evaled))]))

(defn bel-eval-backquote [es rs env [_ form]]
  (let [t (m/p-type form)]
    (cond
      (= t 'comma)
      [(conj es [env (second form)])
       rs]

      (not= t 'pair)
      [es (conj rs form)]

      :else
      (let [[_ h r] form
            h-t (m/p-type h)]
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
;; bel-eval

(defn literal? [form]
  (or (#{'clj-err 'char 'number} (m/p-type form))
      (#{m/bel-nil m/bel-t m/bel-o m/bel-apply} form)
      (and (m/bel-pair? form) (#{m/bel-lit} (m/p-car form)))
      (m/bel-string? form)))

(def step->fn
  {:pair bel-eval-pair
   :set-2 bel-eval-set-2
   :if-2 bel-eval-if-2
   :application-2 bel-eval-application-2
   :eval-many-1 bel-eval-many-1
   :eval-many-2 bel-eval-many-2
   :eval-lit-1 bel-eval-lit-1
   :eval-prim-simple bel-eval-prim-simple
   :eval-mac-2 bel-eval-mac-2
   :assign-vars-1 bel-assign-vars-1
   :assign-vars-optional-arg bel-assign-vars-optional-arg
   :assign-vars-typecheck-1 bel-assign-vars-typecheck-1
   :assign-vars-typecheck-2 bel-assign-vars-typecheck-2
   :assign-vars-rest bel-assign-vars-rest
   :eval-clo-2 bel-eval-clo-2
   :dyn-2 bel-eval-dyn-2
   :dyn-remove bel-eval-dyn-remove
   :ccc-2 bel-eval-ccc-2
   :backquote bel-eval-backquote
   :eval-bq-comma-1 bel-eval-bq-comma-1
   :eval-bq-splice-1 bel-eval-bq-splice-1
   :eval-bq-pair-1 bel-eval-bq-pair-1
   :eval-bq-rest-1 bel-eval-bq-rest-1
   :eval-apply-2 bel-eval-apply-2})

(defn bel-eval-step [es rs]
  (let [top (last es)
        rest-es (drop-lastv es)
        [env form] top]
    (cond
      (literal? form)
      [rest-es (conj rs form)]

      (m/bel-variable? form)
      (bel-eval-variable rest-es rs env form)

      :else
      (let [f (step->fn (first form))]
        (f rest-es rs env form)))))

(defn run-thread [todo-orchestration
                  [expression-stack return-stack]]
  (future
    (loop [es rs]
      (when (todo-locked? todo-orchestration)
        (todo-wait! todo-orchestration))
      (let [top (last es)
            rest-es (drop-lastv es)
            maybe-orch-message (and (seqable? top) (first top))
            [es rs]
            (condp = maybe-orch-message
              :start-thread
              (do (run-thread
                   todo-orchestration
                   [(second top) []])
                  [rest-es rs])
              :lock-start
              (do (todo-lock! todo-orchestration)
                  [rest-es rs])
              :lock-stop
              (do  (todo-unlock! todo-orchestration)
                   [rest-es rs])
              [es rs])
            [es' rs'] (bel-eval-step es rs)]
        (if (empty? es')
          (todo-done! todo-orchestration (last rs'))
          (recur es' rs'))))))

(defn bel-eval
  ([eval-stack return-stack]
   (run-thread
    todo-orchestration
    [eval-stack return-stack])))

(defn bel-eval-single [env form]
  (bel-eval [[env form]] []))

(defn eval-all
  [env strs]
  (mapv (fn [s]
          (bel-eval-single env (r/bel-parse s))) strs))
