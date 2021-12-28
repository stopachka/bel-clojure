(ns bel-clojure.evaluator
  (:require
   [bel-clojure.model :as m]
   [bel-clojure.reader :as r]))

;; ----
;; Misc

(def drop-lastv (comp vec drop-last))

;; --------
;; variable

(defn remove-variable! [var-pair-head sym-to-remove]
  (cond
    (= m/bel-nil var-pair-head)
    m/bel-nil

    (= (m/p-car (m/p-car var-pair-head)) sym-to-remove)
    (do
      (m/p-xar var-pair-head
               (m/p-car (m/p-cdr var-pair-head)))
      (m/p-xdr var-pair-head
               (m/p-cdr (m/p-cdr var-pair-head))))
    :else
    (remove-variable! (m/p-cdr var-pair-head) sym-to-remove)))

(defn make-env-pair [sym v]
  (assert (m/bel-variable? sym)
          (format "expected left-side to be a variable= %s" sym))
  (m/make-pair sym v))

(defn find-env-pair [to-find pairs]
  (let [v (some->> pairs
                   (m/pair-find
                    (fn [p] (= m/bel-t (m/p-id to-find (m/p-car p))))))]
    (when (not= v m/bel-nil) v)))

(defn get-variable [{:keys [dyn scope globe]} form]
  (let [v (->> [dyn scope globe]
               (some (partial find-env-pair form)))]
    (assert v (format "expected value for variable = %s" form))
    v))

(declare in-where?)

(defn bel-eval-variable [es rs env form]
  (cond
    (= m/bel-globe form)
    [es (conj rs (:globe env))]

    (= m/bel-scope form)
    [es (conj rs (:scope env))]

    (= m/bel-vmark-sym form)
    [es (conj rs m/bel-vmark)]
    :else
    (let [v-pair (get-variable env form)]
      (if (in-where? es)
        [(drop-lastv es)
         (conj rs
               (m/make-pair v-pair (m/make-pair m/bel-d m/bel-nil)))]
        [es
         (conj rs (m/p-cdr v-pair))]))))

;; ----
;; dyn

(defn bel-eval-dyn-remove [es rs {:keys [dyn]} [_ variable]]
  (remove-variable! dyn variable)
  [es rs])

(defn bel-eval-dyn-2 [es rs env [_ variable after]]
  (let [ev (last rs)
        rest-rs (drop-lastv rs)
        {:keys [dyn]} env
        [_ head tail] dyn]
    (m/p-xar dyn (make-env-pair variable ev))
    (m/p-xdr dyn (m/make-pair head tail))
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
       (m/make-pair
        f-evaled
        (m/make-pair
         (m/<-pairs [m/bel-lit m/bel-cont (fn [] [es rest-rs])])
         m/bel-nil))])
     rest-rs]))

(defn p-ccc [es rs env f]
  [(conj
    es
    [env [:ccc-2]]
    [env f])
   rs])

;; ------
;; where

(defn in-where? [es]
  (= (second (last es)) [:where]))

(defn p-where [es rs env x]
  [(conj es
         [env [:where]]
         [env x])
   rs])

;; ---
;; err

(defn p-err [es rs env e]
  [[] [[:err e]]])

;; -------
;; debug

(defn p-debug
  [x] (println "[DEBUG] " (r/bel->pretty-clj x)))

;; ----
;; math

(defn wrap-math-fn [f]
  (fn [& args]
    (let [xs (map m/bel-unwrap args)
          v (apply f xs)]
      (if
       (number? v) (m/clj-num->bel-num v)
       (m/clj-bool->bel v)))))

(def math-name->fn
  {"+" (wrap-math-fn +)
   "-" (wrap-math-fn -)
   "*" (wrap-math-fn *)
   "/" (wrap-math-fn /)
   "int?" (wrap-math-fn int?)
   "num<" (wrap-math-fn <)
   "abs" (wrap-math-fn #(Math/abs %))
   "hash" (wrap-math-fn #(.hashCode %))})

;; ---
;; Env

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
    "p-debug" #'p-debug}
   math-name->fn))

;; -------------
;; special-prims

(def special-prim-name->fn
  {"dyn" #'p-dyn
   "ccc" #'p-ccc
   "where" #'p-where
   "err" #'p-err})

;; ---
;; Env

(defn make-bel-globe []
  (->> (merge prim-name->fn special-prim-name->fn)
       (map (fn [[k]]
              (m/make-pair
               [:symbol k]
               (m/<-pairs [m/bel-lit m/bel-prim [:symbol k]]))))
       m/<-pairs))

(defn make-env
  ([] (make-env (make-bel-globe)))
  ([g]
   {:globe g
    :scope m/bel-nil
    :dyn
    (m/make-pair m/bel-nil m/bel-nil)}))

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
              (m/make-pair m/bel-if r)]))
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
        rest-rs (drop-lastv rs)
        [_ head tail] globe]
    (m/p-xar globe (make-env-pair sym evaled-v))
    (m/p-xdr globe (m/make-pair head tail))
    [es rest-rs]))

(defn bel-eval-set-1 [es rs env form]
  (let [[_ sym after-sym] form
        _ (assert (not= m/bel-nil after-sym)
                  "Set sym needs a value")
        [_ v after-v] after-sym
        es' (if (not= after-v m/bel-nil)
              (conj es [env (m/make-pair m/bel-set after-v)])
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
               (m/make-pair
                (m/p-car evaled-args)
                (m/make-pair
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
        [(conj es [env (m/make-pair
                        m/bel-err-sym
                        (m/make-pair [:clj-err e]
                                     m/bel-nil))])
         rest-rs]))))

(defn bel-eval-prim [es rs env litv args-head]
  (let [[_ [_ n]] litv
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
             [env (m/make-pair
                   m/bel-err-sym
                   (m/make-pair (m/make-pair m/bel-quote
                                             [:symbol "mistype"])
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
           [env (m/make-pair
                 evaled-f
                 (m/make-pair (m/make-pair m/bel-quote arg)
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
              (m/make-pair (make-env-pair
                            var-head
                            arg-head)
                           scope))]

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

;; -----
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
        [last-t :as l] (last xs)
        ls (if (= :pair last-t)
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
      [env (m/make-pair
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
      (m/make-pair
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
      (m/make-pair
       h-evaled
       r-evaled))]))

(defn bel-eval-bq-rest-1 [es rs _env [_ h]]
  (let [r-evaled (last rs)
        rest-rs (drop-lastv rs)]
    [es
     (conj
      rest-rs
      (m/make-pair
       h
       r-evaled))]))

(defn bel-eval-backquote [es rs env [_ [t [h-t :as h] r :as form]]]
  (cond
    (= t :comma)
    [(conj es [env h])
     rs]
    (not= t :pair)
    [es (conj rs form)]
    (= h-t :comma)
    [(conj
      es
      [env [:eval-bq-comma-1]]
      [env (second h)]
      [env [:backquote r]])
     rs]
    (= h-t :splice)
    [(conj
      es
      [env [:eval-bq-splice-1]]
      [env (second h)]
      [env [:backquote r]])
     rs]
    (= h-t :pair)
    [(conj es
           [env [:eval-bq-pair-1]]
           [env [:backquote h]]
           [env [:backquote r]])
     rs]
    :else
    [(conj es
           [env [:eval-bq-rest-1 h]]
           [env [:backquote r]])
     rs]))

;; --------
;; bel-eval

(defn literal? [[t a :as form]]
  (or (#{:clj-err :char :number} t)
      (#{m/bel-nil m/bel-t m/bel-o m/bel-apply} form)
      (and (= t :pair) (#{m/bel-lit} a))
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
        [env [t :as form]] top]
    (cond
      (literal? form)
      [rest-es (conj rs form)]

      (m/bel-variable? form)
      (bel-eval-variable rest-es rs env form)

      :else
      (let [f (step->fn t)]
        (f rest-es rs env form)))))

(defn debug-loop [es rs]
  (println "in:")
  (mapv (comp println r/bel->pretty-clj second) es)
  (println "out:")
  (mapv println rs)
  (println "---"))

(defn bel-eval [eval-stack return-stack]
  (loop [es eval-stack
         rs return-stack]
    (if (empty? es)
      (last rs)
      (let [[new-es new-rs] (bel-eval-step es rs)]
        (recur new-es new-rs)))))

(defn bel-eval-single [env form]
  (bel-eval [[env form]] []))

(defn eval-all
  [env strs]
  (mapv (fn [s]
          (println "> " s)
          (bel-eval-single env (r/bel-parse s))) strs))
