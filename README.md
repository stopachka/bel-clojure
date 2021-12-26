# bel-clojure

Get ready for a mind-meld. This is an attempt to make PG's self-evaluating Bel Interpreter run on Clojure.

Here's how it works:

First, there's an Interpreter written in Clojure. This interpreter is a subset of Bel. It's juust intelligent enough, to read PG's own implementation of an intepreter `source.bel`. Once the source code is read, then PG's code can take over and handle user code.

```
User Code -> PG's Source Code -> Clojure Instance Interpreter
```

Warning: I won't be making optimizations, and since this is an interpreter on an interpreter, it will be slow. However, it can start as a REPL for the language. And who knows, one day we could optimize it and make it work for real-world programs.

## Current Status

You can check the `===BREAK===` breakpoint in `source.bel`. Right now we're about halfway through. I stopped here, as I did not implement proper tail call recursion, which is causing stack overflows. Hopefully will open this up and patch forward.

# Dev

```
clj -R:nREPL -m nrepl.cmdline -p 3434 -i
```
