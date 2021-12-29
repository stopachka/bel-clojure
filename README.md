# Bel-Clojure, Alpha

This is an attempt to run PG’s Bel in Clojure. It’s still early and incomplete, but good enough now to play with a REPL.


![](https://paper-attachments.dropbox.com/s_15C89CEDCE707B6F8971B64BFFE97004DB63ADF6E54143F4805460DC78B1DF41_1640807407334_bel-demo.gif)


**Try it out.** Make sure you have [Clojure](https://clojure.org/guides/getting_started#_clojure_installer_and_cli_tools) installed. After that: 


    clj -X:repl


## Notable Differences, and Todos

To make the interpreter tolerably fast, I departed from the source in 2 ways:


1. I represent the environment as a map, rather than a list
2. I leaked java’s numbers, strings, and characters into Bel
3. I moved some logic out of the source and into the interpreter

There are three big pieces left, to make this usable: 

1. Streams. I didn’t implement streams yet. I think the best plan would be to leak Java streams, and I wanted to think about it.  
2. Multi-threading. It should be simple (famous last words), but I haven’t gotten to it yet,.

This has been a lot of fun to write. I hope it’s as fun for you to play with it. I hope to write something deeper about my impression of Bel as I built it down.
