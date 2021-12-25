(ns bel-clojure.instance.evaluator
  (:require
   [bel-clojure.instance.model :as m]
   [bel-clojure.instance.primitives :as p]
   [bel-clojure.instance.reader :as r]))

;; Misc
;; -------------

(def drop-lastv (comp vec drop-last))

;; Env
;; -------------

(def prim-name->fn
  {"id" #'p/p-id
   "car" #'p/p-car
   "cdr" #'p/p-cdr
   "join" #'p/p-join
   "type" #'p/p-type
   "xar" #'p/p-xar
   "xdr" #'p/p-xdr
   "sym" #'p/p-sym
   "nom" #'p/p-nom
   "coin" #'p/p-coin
   "p-debug" #'p/p-debug})

(defn make-bel-globe []
  (->> prim-name->fn
       (map (fn [[k]]
              (m/make-pair
               [:symbol k]
               (m/<-pairs [m/bel-lit m/bel-prim [:symbol k]]))))
       m/<-pairs))

;; variable
;; ---------

(defn make-env-pair [sym v]
  (assert (p/bel-variable? sym)
          (format "expected left-side to be a variable= %s" sym))
  (m/make-pair sym v))

(defn find-env-pair [to-find pairs]
  (let [v (some->> pairs
                   (p/pair-find
                    (fn [p] (= m/bel-t (p/p-id to-find (p/p-car p))))))]
    (when (not= v m/bel-nil) v)))

(defn get-variable [{:keys [scope globe]} form]
  (cond
    (#{m/bel-nil m/bel-t m/bel-o m/bel-apply} form) form
    (= m/bel-globe form) globe
    (= m/bel-scope form) scope
    (= m/bel-vmark-sym form) m/bel-vmark
    :else
    (let [v (->> [scope globe]
                 (some (partial find-env-pair form)))]
      (assert v (format "expected value for variable = %s" form))
      (p/p-cdr v))))

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

             (= m/bel-nil (p/p-cdr r))
             [env (p/p-car r)]
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
    (p/p-xar globe (make-env-pair sym evaled-v))
    (p/p-xdr globe (m/make-pair head tail))
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


(defn run-prim [litv args-head]
  (let [[_ [_ n]] litv
        f (prim-name->fn n)
        args (m/pair->clojure-seq args-head)
        niled-args (->> f
                        meta
                        :arglists
                        first
                        (map-indexed (fn [i _] (nth args i m/bel-nil))))
        _ (assert (<= (count args) (count niled-args))
                  (format
                   "too many args = %s niled-args = %s niled-args" args niled-args))]

    (apply f niled-args)))

(defn bel-eval-prim [es rs litv args-head]
  [es (conj rs (run-prim litv args-head))])

;; -------------
;; bel-eval-clo

(defn bel-assign-vars-optional-arg [es rs env [_ scope var-head]]
  (let [arg-evaled (last rs)
        rest-rs (drop-lastv rs)]
    [(conj es
           [env [:assign-vars-1 scope var-head arg-evaled]])
     rest-rs]))

(defn bel-assign-vars-rest [es rs env [_ var-head arg-head]]
  (let [scope (last rs)
        rest-rs (drop-lastv rs)]
    [(conj es
           [env [:assign-vars-1 scope var-head arg-head]])
     rest-rs]))

(defn bel-assign-vars-1 [es rs env [_ scope var-head arg-head]]
  (cond
    (every? (partial = m/bel-nil) [var-head arg-head])
    [es (conj rs scope)]

    (p/bel-variable? var-head)
    [es (conj rs
              (m/make-pair (make-env-pair
                            var-head
                            arg-head)
                           scope))]

    (p/bel-optional? var-head)
    (if (= m/bel-nil arg-head)
      [(conj es
             [env [:assign-vars-optional-arg scope (p/bel-optional-var var-head)]]
             [env (p/bel-optional-arg var-head)])

       rs]

      [(conj es
             [env [:assign-vars-1 scope (p/bel-optional-var var-head) arg-head]])
       rs])

    :else
    [(conj es
           [env [:assign-vars-rest (p/p-cdr var-head) (p/p-cdr arg-head)]]
           [env [:assign-vars-1 scope (p/p-car var-head) (p/p-car arg-head)]])
     rs]))

(defn bel-eval-clo-2 [es rs env [_ body-head]]
  (let [scope (last rs)
        rest-rs (drop-lastv rs)]
    (println "scope:" (r/bel->pretty-clj scope))
    [(conj es
           [(assoc env :scope scope) body-head])
     rest-rs]))

(defn bel-clo-es [env litv args-head]
  (let [[_ scope [_ args-sym-head [_ body-head]]] litv]
    [[env [:eval-clo-2 body-head]]
     [env [:assign-vars-1 scope args-sym-head args-head]]]))

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
      (bel-eval-prim es rest-rs litv args-head)
      m/bel-clo
      (bel-eval-clo es rest-rs env litv args-head)
      m/bel-mac
      (bel-eval-mac-1 es rest-rs env litv args-head))))

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
    (if (= (lit-type evaled-lit) m/bel-mac)
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

(defn bel-eval-pair [es rs env [_ l r :as form]]
  (cond
    (= m/bel-quote l) [es (conj rs r)]
    (= m/bel-lit l) [es (conj rs form)]
    (= m/bel-set l) (bel-eval-set-1 es rs env r)
    (= m/bel-if l) (bel-eval-if-1 es rs env r)
    (= m/bel-apply l) (bel-eval-apply-1 es rs env r)
    :else (bel-eval-application-1 es rs env form)))

;; bel-eval-backquote
;; -------------

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
      (p/pair-append
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

;; bel-eval
;; -------------

(defn bel-eval-step [es rs]
  (let [top (last es)
        rest-es (drop-lastv es)
        [env [t :as form]] top]
    (cond
      (= t :char)
      [rest-es (conj rs form)]

      (p/bel-string? form)
      [rest-es (conj rs form)]

      (p/bel-variable? form)
      [rest-es (conj rs (get-variable env form))]

      (= t :pair)
      (bel-eval-pair rest-es rs env form)

      (= t :set-2)
      (bel-eval-set-2 rest-es rs env form)

      (= t :if-2)
      (bel-eval-if-2 rest-es rs env form)

      (= t :application-2)
      (bel-eval-application-2 rest-es rs env form)

      (= t :eval-many-1)
      (bel-eval-many-1 rest-es rs env form)

      (= t :eval-many-2)
      (bel-eval-many-2 rest-es rs env form)

      (= t :eval-lit-1)
      (bel-eval-lit-1 rest-es rs env form)

      (= t :eval-mac-2)
      (bel-eval-mac-2 rest-es rs env form)

      (= t :assign-vars-1)
      (bel-assign-vars-1 rest-es rs env form)

      (= t :assign-vars-optional-arg)
      (bel-assign-vars-optional-arg rest-es rs env form)

      (= t :assign-vars-rest)
      (bel-assign-vars-rest rest-es rs env form)

      (= t :eval-clo-2)
      (bel-eval-clo-2 rest-es rs env form)

      (= t :backquote)
      (bel-eval-backquote rest-es rs env form)

      (= t :eval-bq-comma-1)
      (bel-eval-bq-comma-1 rest-es rs env form)

      (= t :eval-bq-splice-1)
      (bel-eval-bq-splice-1 rest-es rs env form)

      (= t :eval-bq-pair-1)
      (bel-eval-bq-pair-1 rest-es rs env form)

      (= t :eval-bq-rest-1)
      (bel-eval-bq-rest-1 rest-es rs env form)

      (= t :eval-apply-2)
      (bel-eval-apply-2 rest-es rs env form))))

;; bel-eval
;; --------

(defn debug-loop [es rs]
  (println "in:")
  (mapv (comp println second) es)
  (println "out:")
  (mapv println rs)
  (println "---"))

(defn bel-eval [eval-stack return-stack]
  (loop [es eval-stack
         rs return-stack]
    #_(debug-loop es rs)
    (if (empty? es)
      (last rs)
      (let [[new-es new-rs] (bel-eval-step es rs)]
        (recur new-es new-rs)))))

(defn bel-eval-single [env form]
  (bel-eval [[env form]] []))

(defn run-all
  [env ss]
  (mapv (fn [s]
          (println "run:" s)
          (r/bel->pretty-clj
           (bel-eval-single env (r/bel-parse s))))
        ss))

(defn run [& ss]
  (last (run-all
         {:globe (make-bel-globe) :scope m/bel-nil}
         ss)))

(comment
  (run "nil")
  (run "\\bel")
  (run "\"foo\"")
  (run "'foo")
  (run "globe")
  (run "(lit (foo bar baz))")
  (run "car")
  (run "(set a 'b c 'd)" "c")
  (run "(if t 'a 'b)")
  (run "(if nil 'a 'b)")
  (run "(if nil 'a nil 'b 'c)")
  (run "(car '(a b))")
  (run "(id t nil)")
  (run "(id t t)")
  (run "(id t)")
  (run "(id)")
  (run "((lit clo nil (x) (id x t)) t)")
  (run "((lit clo nil (x) (id x t)) nil)")
  (run "(apply join '(a b))")
  (run "(apply join 'a '(b))")
  (run "((lit clo nil (x (o y)) y) 'a)")
  (run "((lit clo nil (x (o y 'b)) y) 'a)")
  (run
    ;; see source.bel
   "(set def (lit mac (lit clo nil (n p e) (join 'set (join n (join (join 'lit (join 'clo (join nil (join p (join e nil))))) nil))))))"
   "(def no (x) (id x nil))"
   "(no nil)")

  (quote (foo ('foo (bar (baz nil)))))
  (run "(set a 'foo b '(bar baz))"
       "`(foo ',a ,@b)")

  (quote (x (a (y nil))))
  (run "(set x 'a)"
       "`(x ,x y)")

  (quote (x (a (y (t nil)))))
  (run "(set x 'a)"
       "`(x ,x y ,(id 'a 'a))")

  (quote (x (a (y nil))))
  (run "(set x 'a)"
       "`(x ,x y)")

  (quote (a (b (c (d (e (f nil)))))))
  (run "(set y '(c d))"
       "`(a b ,@y e f)"))
