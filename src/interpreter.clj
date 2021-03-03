(ns interpreter)

;; notes

;; dot syntax, \bel larger chargs
;;  -- clojure's reader won't support these. should we drop em?


; data
; symbols, pairs, chars, streams
; nil is empty list, t is true, rest truthy

; fns
; i.e (lit clo nil (x) (+ x 1))
; this `lit` keyword is interest
; (fn (x) (+ x 1)) ^ produces above

; evaluating expression:
 ;; can return value (+ 1 2) returns 3
 ;; can cause error (/ 1 0) will
 ;; can fail to terminate (while t)
 ;; cause mutations (prn 1)

;; what evaluations to itself:
 ;; chars, streams, nil, t, o, apply

 ;; rest variable names

;; bindings and vars
  ; global
  ; closure
  ; dynamic binding (how?)
  ;

;; err is fn that is called, which we'll need to handle


;; ----------------
;; axioms

;; todo: not quite sure what these need to be. following along for now

(def bel-true 't)
(def bel-nil nil)
(def bel-o 'o)
(def bel-apply 'apply)
(def bel-quote 'quote)

(defn int->binary-str
  [n]
  (.toString (biginteger n) 2))

(comment
  (int->binary-str 255))

(def bel-chars (->> (range (int \0) (int \z))
                    (map (fn [n] [(char n) (int->binary-str n)]))))
;; 'var 'val pairs
(def bel-globe-scope ())

(def bel-ins ())
(def bel-outs ())


; primitives
; ----------

(defn bel-err [msg]
  (throw (Exception. msg)))

(defn bel-id [a b]
  (if (identical? a b)
    bel-true
    bel-nil))

(comment
  (bel-id 1 1)
  (bel-id 1 0))

;; using an atom, so we can allow for mutation. maybe something different
(defn bel-join [a b]
  (atom [a b]))

(comment
  (bel-id (bel-join 'a 'b) (bel-join 'a 'b)))

;; todo -- this check for nil seems inelegant. maybe we can do better
(defn bel-car [bel-pair] (if (bel-id bel-pair bel-nil)
                           bel-nil
                           (first @bel-pair)))

(defn bel-cdr [bel-pair] (if (bel-id bel-pair bel-nil)
                           bel-nil
                           (second @bel-pair)))

(comment
  (bel-car bel-nil)
  (bel-cdr bel-nil)
  (bel-car (bel-join 'a 'b))
  (bel-cdr (bel-join 'a (bel-join 'b bel-nil))))

(defn bel-pair? [form]
  (instance? clojure.lang.Atom form))

(defn bel-type [form]
  ;; todo bel-err?
  (cond
    (symbol? form)
    'symbol
    (bel-pair? form)
    'pair
    (char? form)
    'char))

(comment
  (bel-type 'a)
  (bel-type (bel-join 'a 'b ))
  (bel-type \a))

(defn bel-xar
  "replace car of x with y, returning y."
  ;; todo bel-err?
  [x y]
  (swap! x assoc 0 y)
  y)

(comment
  (def x (bel-join 'a 'b))
  (bel-xar x 'c)
  x)

(defn bel-xdr
  "replace cdr of x with y, returning y."
  ;; todo bel-err?
  [x y]
  (swap! x assoc 1 y)
  y)

(comment
  (def x (bel-join 'a 'b))
  (bel-xdr x 'c)
  x)

(def bel-sym symbol)


