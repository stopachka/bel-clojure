(ns bel-clojure.instance-old
  "Bel Programs run in two steps:
   1. There's a Bel Instance, which can run the source code for the Bel Interpreter
   2. Then Bel Programs run on top of the Bel Interpreter

   Instance Interpreter <- Bel Interpreter <- Bel Programs

   This is the source code for the Bel Instance. The goal here
   is to be able to evaluate all the source code in the Bel Interpreter"
  (:require
   [clojure.string :as string])
  (:import
   (java.util ArrayList)))


;; Primitives V0
;; -------------

(defn id [a b]
  (let [compare-fn (if (seq? a)
                     identical?
                     =)]
    (when (compare-fn a b) 't)))

;; Eval V0
;; -------

(defn bel-read-string [s]
  (read-string s))

(defn bel-eval [env form]
  (cond
    (nil? form) nil
    (= 't form) 't
    (symbol? form)
    (get env form)

    (seq? form)
    (let [[f & args] form
          evaled-f (bel-eval env f)
          evaled-args (map (partial bel-eval env) args)]
      (apply evaled-f evaled-args))))

(defn run-code [env s]
  (bel-eval env (bel-read-string s)))

(comment
  (run-code {'x 1} "x")
  (run-code {'id id} "(id t nil)")
  (run-code {'id id} "(id t t)"))





























;; Data Types
;; ----------

; Symbol -> Clojure _Keyword_
; Why keyword? so it passes the _identical_ check

; Pair -> java.util.ArrayList

; Characters -> bel_clojure.instance.Char
; Note: We do not interop with java chars, as PG
; allows you to have chars like `\bel`, which would not work

;; TODO: Streams


(defrecord Char [value])

;; Primitves
;; ---------

; Note, to understand these functions, you may want to have the `guide`
; handy.

(defn join
  ([x y] (ArrayList. [x y])))

(def car first)

(def cdr second)

(defn xar [x y]
  (.set x 0 y) y)

(defn xdr [x y]
  (.set x 1 y) y)

(defn pairs->seq [pairs]
  (cons
   (car pairs)
   (if (cdr pairs)
     (pairs->seq (cdr pairs))
     nil)))

(defn sym [pairs]
  (->> pairs
       pairs->seq
       (map :value)
       (string/join "")
       keyword))

(comment (sym (join (->Char "a")
                    (join (->Char "b")
                          (join (->Char "c") nil)))))

(defn seq->pairs [xs]
  (join (first xs)
        (if (seq (rest xs))
          (seq->pairs (rest xs))
          nil)))

(defn nom [s]
  (->> s
       name
       (map ->Char)
       seq->pairs))

(comment
  (sym (nom :foo)))

(defn coin []
  (rand-nth [:t nil]))

;; TODO: when we get to more advanced bits of the interpreter:
;; wrb, rdb, ops, cls, stat

;; Data Type
;; ---------
; TODO: Symbol
; Name of things
; -- case sensitive

; TODO: Pair
; Pairs of two things, represented like so
; Ex: (foo . bar)

; TODO: Char
; Ex: \a
; TODO:
; Characters don't _have_ to be letters
; Ex: \bel

; TODO: Stream

; TODO: List
; a bunch of pairs
; nil -> empty list, also repreentable as ()
; (a . nil)
; If the second half of a pair is a list, the `.` can be omitted,
; (a b c) -> (a . (b . (c . nil))

; TODO: String
; simply a list of chars
; (\a \b) => "ab"


; TODO: Truth
; nil -> false
; t -> true

; TODO: Function
; (lit clo nil (x) (+ x 1))  -> (fn (x) (+ x 1))

;; Reader
;; ------

; TODO: How to deal with the dot?

; (foo . bar)
; should we rewrite that with (cons foo bar) ?


;; TODO: ...
;; -> this "splices" values in


;; TODO: exp in square brackets

;; [f _ x]
;; (fn (_) (f _ x))

; Reflections

; `lit`
; Really like the `lit` macro: gives the programmer a lot of power
; I can decide to tell the interpreter _not_ to interpret something
; Like the simplicity of `if` being n-arity

; `[f _ x]` like this form of anon fn design

; This fn composition seems interesting. What is ~?
; (def all (f xs)
;  (~some ~f xs))

;; fn arg matching as a tree ; use of `o` as optional

;; def and mac are used before defined?
;; it's cool to expose the environment into the language level


;; do as a macro is cool -- using nested fn calls!
;; use of anaphoric macros is interesting: aif

;; hug is a funny fn

;; what was the point of let? mayve with would have been fine

; composition is darn cool

; numbers are callable -- that's interesting!
; pairwise

; like how he represents numbers
