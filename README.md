# bel-clojure

Play: Let's create an interpreter _for_ PG's Bel Interpreter, and run Bel on top of Clojure!

I started this to understand his work on Bel -- what better way than to follow the guide, and implement a live version?

The Plan:

We'll write a minimal interpreter -- something _just_ goood enough to interpreter PG's source code. Then, PG's source code will run it's own interpreter, and that's where user code will go too.

Note:

I won't be making optimizations, and since this is an interpreter on an interpreter, it will likely be slow. However, it can start as a REPL for the language. And who knows, one day we could optimize it and make it work for real-world programs.

