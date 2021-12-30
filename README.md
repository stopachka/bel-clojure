# bel-clojure: super-alpha

<p align="center">
<img src="/reference/repl-demo.gif" width="450" />
</p>

This is my hack to run PG’s Bel in Clojure. Want to try it out?

First, Make sure you have [Clojure](https://clojure.org/guides/getting_started#_clojure_installer_and_cli_tools) installed. After that:

```bash
clj -X:repl
```

## Tests

```
clj -X:test
```

## Some Examples

This is PG's `examples`, recreated on this interpreter. You can note what's implemented, and the slight differences.

```clojure
>
(cons 'a 'b '(c d e))
>  (a b c d e)
(cons \h "ello")
>  (h e l l o)
(set w '(a (b c) d (e f)))
>  nil
(find pair w)
>  (b c)
(pop (find pair w))
>  b
w
>  (a (c) d (e f))
(dedup:sort < "abracadabra")
>  (a b c d r)
(map (upon 2 3) (list + - * /))
>  (5 -1 6 2/3)
(let x 'a
    (cons x 'b))
>  (a . b)
(with (x 1 y 2)
    (+ x y))
>  3
(let ((x y) . z) '((a b) c)
    (list x y z))
>  (a b (c))
((fn (x) (cons x 'b)) 'a)
>  (a . b)
((fn (x|symbol) (cons x 'b)) 'a)
>  (a . b)
((fn (x|int) (cons x 'b)) 'a)
>  (err (qt . mistype))
((fn (f x|f) (cons x 'b)) sym 'a)
>  (a . b)
((macro (v) `(set ,v 7)) x)
>  nil
x
>  7
(apply or '(t nil))
>  t
(best (of > len) '((a b) (a b c d) (a) (a b c)))
>  (a b c d)
(do (thread (do (join 'a 'b)))
    (thread (do (join 'a 'b) (join 'b 'd))))
>  (b . d)
(do (thread (do (join 'a 'b)))
    (thread
      (atomic (do (join 'a 'b) (join 'b 'd)))))
>  (a . b)
```

## Notes

To make the interpreter tolerably fast, **I tweaked the source in three ways**

1. I represent the environment as a map, rather than a list
2. I leaked java’s numbers, strings, and characters into Bel
3. I moved some logic out of the source and into the interpreter

This isn't done yet. **There's 3 todos remaining**

1. Streams. I didn’t implement streams yet. I think the best plan would be to leak Java streams, and I wanted to think about it.
2. Virfns. Numbers don't yet work as functions.
3. Performance tuning. I made some tweaks, but there's a lot of low-hanging fruit still.

This has been a lot of fun to write. I hope it’s as fun for you to play with it.

