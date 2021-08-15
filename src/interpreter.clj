(ns interpreter
  (:require [clojure.java.shell :refer [sh]]))

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


;; ---------------
;; helpers

(defn int->binary-str
  [n]
  (.toString (biginteger n) 2))

(comment
  (int->binary-str 255))

;; ----------------
;; variables & constants

(def bel-true 't)
(def bel-nil nil)
(def bel-o 'o)

(def bel-chars
  "A list of all characters. Its elements are of the form (c . b), where
  c is a character and b is its binary representation in the form of a
  string of \1 and \0 characters. Bel doesn't specify which characters
  are in chars, but obviously they should include at least those in the
  Bel source."
  (->> (range (int \0) (int \z))
        (map (fn [n] [(char n) (int->binary-str n)]))))

;; todo: implemente
(def bel-globe-scope
  "The current global and lexical environments, represented as lists of
  (var . val) pairs of variables and their values."
  ())

;; todo: streams -- make this work
(def bel-ins nil)
(def bel-outs nil)

;; ----------
;; primitives

(defn bel-err [msg]
  (throw (Exception. msg)))

(defn bel-id
  "Returns true iff x and y are identical."
  [a b]
  (if (identical? a b)
    bel-true
    bel-nil))

(comment
  (bel-id 1 1)
  (bel-id 1 0))

;; todo consider java list
(defn bel-join
  "Returns a new pair whose first half is x and second half is y."
  [a b]
  (atom [a b]))

(comment
  (bel-id (bel-join 'a 'b) (bel-join 'a 'b)))

;; todo: nil check inelegant, potential for errors

(defn bel-car
  "Returns the first half of a pair"
  [bel-pair]
  (if (bel-id bel-pair bel-nil) bel-nil (first @bel-pair)))

;; todo: nil check inelegant, potential for errors
(defn bel-cdr
 "Returns the second half of a pair:"
  [bel-pair]
  (if (bel-id bel-pair bel-nil) bel-nil (second @bel-pair)))

(comment
  (bel-car bel-nil)
  (bel-cdr bel-nil)
  (bel-car (bel-join 'a 'b))
  (bel-cdr (bel-join 'a (bel-join 'b bel-nil))))

(defn bel-pair? [form]
  (instance? clojure.lang.Atom form))

(defn bel-type
  "Returns either symbol, pair, char, or stream depending on the type
  of x."
  [x]
  ;; todo potential for errors
  (cond
    (symbol? x)
    'symbol
    (bel-pair? x)
    'pair
    (char? x)
    'char))

(comment
  (bel-type 'a)
  (bel-type (bel-join 'a 'b ))
  (bel-type \a))

;; todo potential for errors
(defn bel-xar
  "Replaces the car of x with y, returning y. Signals an error if x is
  not a pair."
  [x y]
  (swap! x assoc 0 y)
  y)

(comment
  (def x (bel-join 'a 'b))
  (bel-xar x 'c)
  x)

;; todo potential for errors
(defn bel-xdr
  "Like xar, except that it replaces the cdr of x."
  [x y]
  (swap! x assoc 1 y)
  y)

(comment
  (def x (bel-join 'a 'b))
  (bel-xdr x 'c)
  x)

(def bel-sym
  "Returns the symbol whose name is the elements of x. Signals an error
  if x is not a string."
  symbol)

(def bel-nom
  "Returns a fresh list of the characters in the name of x. Signals an
  error if x is not a symbol."
  ;; todo: handle error
  name)

(comment
  (bel-sym "foo")
  (bel-nom 'foo))

;; -----------------
;; stream oeprations

(defn wrb
  "Writes the bit x (represented by either \1 or \0) to the stream y.
  Returns x. Signals an error if it can't or if x is not \1 or \0. If y
  is nil, writes to the initial output stream."
  [x y]
  ;; todo: check for x 1 or 1
  ;; todo: faking a stream -- make it an actual one
  (conj x y))

(defn rdb
  "Tries to read a bit from the stream x. Returns \1 or \0 if it finds
  one, nil if no bit is currently available, or eof if no more will be
  available. Signals an error if it can't. If x is nil, reads from the
  initial input stream."
  [x]
  ;; todo this needs to _actually_ take from x, and "reduce" it's size
  (first x))

(defn ins-stream? [s]
  (= bel-ins s))
(defn outs-stream? [s]
  (= bel-outs s))

(defn ops
  "Returns a stream that writes to or reads from the place whose name is
  the string x, depending on whether y is out or in respectively.
  Signals an error if it can't, or if y is not out or in."
  [x y]
  (cond
    (ins-stream? y)
    () ;; todo: writes values from y to x
    (outs-stream? y)
    () ;; todo: reads values from x to y
    ;; todo: handle error
    )
  )
;; stopa-thought: interesting abstraction -- both in and out handle by one thing

(defn cls
 "Closes the stream x. Signals an error if it can't."
 [x]
 () ;; todo: close stream x
 )

(defn stat
  "Returns either closed, in, or out depending on whether the stream x
  is closed, or reading from or writing to something respectively.
  Signals an error if it can't."
  [x]
  ;; todo return 'closed, 'in, 'out, dependenting on status of stream
  )

(defn coin
  "Returns either t or nil randomly."
  []
  (rand-nth [bel-true bel-nil]))

(defn sys
  "Sends x as a command to the operating system."
  [x]
  (sh x))

;; -------------
;; special forms

;; todo: implement
(def bel-quote
  "The quote operator is a special form, but it has to be described
  first because so many code examples use it.

  It returns its argument without evaluating it. Its purpose is to
  prevent evaluation.

  >  (quote a)
  a"
  'quote)

;; todo: implement
(def bel-lit
  "The name stands for literal, and it can take any number of arguments.
  This is how you make things that evaluate to themselves, the way
  characters or nil do. Functions are lits, for example, as are
  numbers.

  The value of a primitive p is  (lit prim p).  "
  'lit)

;; todo: implement
(def bel-if
  "An if expression with an odd number of arguments

  (if a1 a2 a3 a4 ... an)

  is equivalent to

  if a1 then a2 else if a3 then a4 ... else an")

;; todo: implement
(def bel-apply
  "An expression of the form

  (apply f x y ... z)

  is equivalent to

  (f 'a 'b ... 'c1 ... 'cn)

  where a is the value of x, b the value of y, and the ci the elements
  of the value of z.

  >  (join 'a 'b)
  (a . b)
  >  (apply join '(a b))
  (a . b)
  >  (apply join 'a '(b))
  (a . b)

  The last argument to apply can be a dotted list if it matches the
  parameters of the first.  "
  'apply)

;; todo: implement
(def bel-where
  "Evaluates x. If its value comes from a pair, returns a list of that
  pair and either a or d depending on whether the value is stored in
  the car or cdr. Signals an error if the value of x doesn't come from
  a pair.

  For example, if x is (a b c),

  > (where  (cdr x))
  ((a b c) d)"
  'where)

;; todo: implement
(def bel-dyn
  "Evaluates x, then causes y to be evaluated with the variable v
  dynamically bound to the value of x.

  For example, if x is a,

  > x
  a
  >  (dyn x 'z  (join x 'b))
  (z . b)
  > x
  a "
  'dyn)

(def bel-after
  "Evaluates both its arguments in order. The second will be evaluated
  even if the evaluation of the first is interrupted (e.g. by an
  error)."
  'after)

(def bel-ccc
  "Evaluates f and calls its value on the current continuation. The
  continuation, if called with one argument, will return it as the
  value of the ccc expression  (even if you are no longer in the ccc
  expression or in code called by it).  "
  'ccc)
;; todo what are continuations again?

;; todo: implement
(defn bel-thread
  "Starts a new thread in which x will be evaluated. Global bindings are
  shared between threads, but not dynamic ones."
  [x]
  x)

;; todo: pg doesn't explicitly say this, but i guess we need to provide `set`?

;; todo: implement
(defn bel-set [& args]
  "(set v1 e1 ... vn en)

  it means each vi is globally bound to the value of ei.

  In the source I try not to use things before I've defined them, but
  I've made a handful of exceptions to make the code easier to read.  "
  args
  )

;; todo: I guess we implement def and mac as well?
(defn bel-def
  "In the Bel source, when you see an expression of the form

  (set v1 e1 ... vn en)

  it means each vi is globally bound to the value of ei."
  [n p e]
  [n p e])

(defn bel-mac
  "and when you see

  (mac n p e)

  treat it as an abbreviation for

  (set n (lit mac (lit clo nil p e))) "
  [n p e]
  [n p e])

"
todo: this will be important for the reader

Treat an expression in square brackets, e.g.

[f _ x]

as an abbreviation for

(fn (_) (f _ x))
"

;; okay, now we move onto the source

;; stopa note: def feeling sicp vibes -- the recusing on car cdr

;; stopa note: def cons args -- interesting: no parens on (args) -- maybe syntax sugar?

