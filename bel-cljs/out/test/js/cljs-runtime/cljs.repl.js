goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__20550){
var map__20551 = p__20550;
var map__20551__$1 = cljs.core.__destructure_map(map__20551);
var m = map__20551__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20551__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20551__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5045__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return [(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__20552_20755 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__20553_20756 = null;
var count__20554_20757 = (0);
var i__20555_20758 = (0);
while(true){
if((i__20555_20758 < count__20554_20757)){
var f_20761 = chunk__20553_20756.cljs$core$IIndexed$_nth$arity$2(null,i__20555_20758);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_20761], 0));


var G__20764 = seq__20552_20755;
var G__20765 = chunk__20553_20756;
var G__20766 = count__20554_20757;
var G__20767 = (i__20555_20758 + (1));
seq__20552_20755 = G__20764;
chunk__20553_20756 = G__20765;
count__20554_20757 = G__20766;
i__20555_20758 = G__20767;
continue;
} else {
var temp__5804__auto___20768 = cljs.core.seq(seq__20552_20755);
if(temp__5804__auto___20768){
var seq__20552_20769__$1 = temp__5804__auto___20768;
if(cljs.core.chunked_seq_QMARK_(seq__20552_20769__$1)){
var c__5568__auto___20770 = cljs.core.chunk_first(seq__20552_20769__$1);
var G__20771 = cljs.core.chunk_rest(seq__20552_20769__$1);
var G__20772 = c__5568__auto___20770;
var G__20773 = cljs.core.count(c__5568__auto___20770);
var G__20774 = (0);
seq__20552_20755 = G__20771;
chunk__20553_20756 = G__20772;
count__20554_20757 = G__20773;
i__20555_20758 = G__20774;
continue;
} else {
var f_20775 = cljs.core.first(seq__20552_20769__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_20775], 0));


var G__20776 = cljs.core.next(seq__20552_20769__$1);
var G__20777 = null;
var G__20778 = (0);
var G__20779 = (0);
seq__20552_20755 = G__20776;
chunk__20553_20756 = G__20777;
count__20554_20757 = G__20778;
i__20555_20758 = G__20779;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_20780 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_20780], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_20780)))?cljs.core.second(arglists_20780):arglists_20780)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__20558_20785 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__20559_20786 = null;
var count__20560_20787 = (0);
var i__20561_20788 = (0);
while(true){
if((i__20561_20788 < count__20560_20787)){
var vec__20574_20789 = chunk__20559_20786.cljs$core$IIndexed$_nth$arity$2(null,i__20561_20788);
var name_20790 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20574_20789,(0),null);
var map__20577_20791 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20574_20789,(1),null);
var map__20577_20792__$1 = cljs.core.__destructure_map(map__20577_20791);
var doc_20793 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20577_20792__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_20794 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20577_20792__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_20790], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_20794], 0));

if(cljs.core.truth_(doc_20793)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_20793], 0));
} else {
}


var G__20795 = seq__20558_20785;
var G__20796 = chunk__20559_20786;
var G__20797 = count__20560_20787;
var G__20798 = (i__20561_20788 + (1));
seq__20558_20785 = G__20795;
chunk__20559_20786 = G__20796;
count__20560_20787 = G__20797;
i__20561_20788 = G__20798;
continue;
} else {
var temp__5804__auto___20799 = cljs.core.seq(seq__20558_20785);
if(temp__5804__auto___20799){
var seq__20558_20800__$1 = temp__5804__auto___20799;
if(cljs.core.chunked_seq_QMARK_(seq__20558_20800__$1)){
var c__5568__auto___20801 = cljs.core.chunk_first(seq__20558_20800__$1);
var G__20802 = cljs.core.chunk_rest(seq__20558_20800__$1);
var G__20803 = c__5568__auto___20801;
var G__20804 = cljs.core.count(c__5568__auto___20801);
var G__20805 = (0);
seq__20558_20785 = G__20802;
chunk__20559_20786 = G__20803;
count__20560_20787 = G__20804;
i__20561_20788 = G__20805;
continue;
} else {
var vec__20579_20808 = cljs.core.first(seq__20558_20800__$1);
var name_20809 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20579_20808,(0),null);
var map__20582_20810 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20579_20808,(1),null);
var map__20582_20811__$1 = cljs.core.__destructure_map(map__20582_20810);
var doc_20812 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20582_20811__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_20813 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20582_20811__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_20809], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_20813], 0));

if(cljs.core.truth_(doc_20812)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_20812], 0));
} else {
}


var G__20816 = cljs.core.next(seq__20558_20800__$1);
var G__20817 = null;
var G__20818 = (0);
var G__20819 = (0);
seq__20558_20785 = G__20816;
chunk__20559_20786 = G__20817;
count__20560_20787 = G__20818;
i__20561_20788 = G__20819;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5804__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5804__auto__)){
var fnspec = temp__5804__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__20583 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__20584 = null;
var count__20585 = (0);
var i__20586 = (0);
while(true){
if((i__20586 < count__20585)){
var role = chunk__20584.cljs$core$IIndexed$_nth$arity$2(null,i__20586);
var temp__5804__auto___20821__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___20821__$1)){
var spec_20822 = temp__5804__auto___20821__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_20822)], 0));
} else {
}


var G__20823 = seq__20583;
var G__20824 = chunk__20584;
var G__20825 = count__20585;
var G__20826 = (i__20586 + (1));
seq__20583 = G__20823;
chunk__20584 = G__20824;
count__20585 = G__20825;
i__20586 = G__20826;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__20583);
if(temp__5804__auto____$1){
var seq__20583__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__20583__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__20583__$1);
var G__20827 = cljs.core.chunk_rest(seq__20583__$1);
var G__20828 = c__5568__auto__;
var G__20829 = cljs.core.count(c__5568__auto__);
var G__20830 = (0);
seq__20583 = G__20827;
chunk__20584 = G__20828;
count__20585 = G__20829;
i__20586 = G__20830;
continue;
} else {
var role = cljs.core.first(seq__20583__$1);
var temp__5804__auto___20831__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___20831__$2)){
var spec_20832 = temp__5804__auto___20831__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_20832)], 0));
} else {
}


var G__20833 = cljs.core.next(seq__20583__$1);
var G__20834 = null;
var G__20835 = (0);
var G__20836 = (0);
seq__20583 = G__20833;
chunk__20584 = G__20834;
count__20585 = G__20835;
i__20586 = G__20836;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5804__auto__)){
var msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5804__auto__)){
var ed = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__20837 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__20838 = cljs.core.ex_cause(t);
via = G__20837;
t = G__20838;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5804__auto__)){
var root_msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5804__auto__)){
var data = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5804__auto__)){
var phase = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__20615 = datafied_throwable;
var map__20615__$1 = cljs.core.__destructure_map(map__20615);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20615__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20615__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__20615__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__20616 = cljs.core.last(via);
var map__20616__$1 = cljs.core.__destructure_map(map__20616);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20616__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20616__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20616__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__20617 = data;
var map__20617__$1 = cljs.core.__destructure_map(map__20617);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20617__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20617__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20617__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__20618 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__20618__$1 = cljs.core.__destructure_map(map__20618);
var top_data = map__20618__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20618__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__20626 = phase;
var G__20626__$1 = (((G__20626 instanceof cljs.core.Keyword))?G__20626.fqn:null);
switch (G__20626__$1) {
case "read-source":
var map__20637 = data;
var map__20637__$1 = cljs.core.__destructure_map(map__20637);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20637__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20637__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__20638 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__20638__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20638,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__20638);
var G__20638__$2 = (cljs.core.truth_((function (){var fexpr__20639 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__20639.cljs$core$IFn$_invoke$arity$1 ? fexpr__20639.cljs$core$IFn$_invoke$arity$1(source) : fexpr__20639.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__20638__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__20638__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20638__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__20638__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__20644 = top_data;
var G__20644__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20644,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__20644);
var G__20644__$2 = (cljs.core.truth_((function (){var fexpr__20656 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__20656.cljs$core$IFn$_invoke$arity$1 ? fexpr__20656.cljs$core$IFn$_invoke$arity$1(source) : fexpr__20656.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__20644__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__20644__$1);
var G__20644__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20644__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__20644__$2);
var G__20644__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20644__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__20644__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20644__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__20644__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__20666 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20666,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20666,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20666,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20666,(3),null);
var G__20673 = top_data;
var G__20673__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20673,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__20673);
var G__20673__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20673__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__20673__$1);
var G__20673__$3 = (cljs.core.truth_((function (){var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20673__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__20673__$2);
var G__20673__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20673__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__20673__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20673__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__20673__$4;
}

break;
case "execution":
var vec__20691 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20691,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20691,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20691,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20691,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__20610_SHARP_){
var or__5045__auto__ = (p1__20610_SHARP_ == null);
if(or__5045__auto__){
return or__5045__auto__;
} else {
var fexpr__20702 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__20702.cljs$core$IFn$_invoke$arity$1 ? fexpr__20702.cljs$core$IFn$_invoke$arity$1(p1__20610_SHARP_) : fexpr__20702.call(null,p1__20610_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return line;
}
})();
var G__20703 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__20703__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20703,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__20703);
var G__20703__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20703__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__20703__$1);
var G__20703__$3 = (cljs.core.truth_((function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20703__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__20703__$2);
var G__20703__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20703__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__20703__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20703__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__20703__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20626__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__20712){
var map__20713 = p__20712;
var map__20713__$1 = cljs.core.__destructure_map(map__20713);
var triage_data = map__20713__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20713__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20713__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20713__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20713__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20713__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20713__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20713__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20713__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = source;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = line;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5045__auto__ = class$;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__20715 = phase;
var G__20715__$1 = (((G__20715 instanceof cljs.core.Keyword))?G__20715.fqn:null);
switch (G__20715__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__20716 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__20717 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__20718 = loc;
var G__20719 = (cljs.core.truth_(spec)?(function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__20720_20849 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__20721_20850 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__20722_20851 = true;
var _STAR_print_fn_STAR__temp_val__20723_20852 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__20722_20851);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__20723_20852);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__20709_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__20709_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__20721_20850);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__20720_20849);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__20716,G__20717,G__20718,G__20719) : format.call(null,G__20716,G__20717,G__20718,G__20719));

break;
case "macroexpansion":
var G__20726 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__20727 = cause_type;
var G__20728 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__20729 = loc;
var G__20730 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__20726,G__20727,G__20728,G__20729,G__20730) : format.call(null,G__20726,G__20727,G__20728,G__20729,G__20730));

break;
case "compile-syntax-check":
var G__20731 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__20732 = cause_type;
var G__20733 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__20734 = loc;
var G__20735 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__20731,G__20732,G__20733,G__20734,G__20735) : format.call(null,G__20731,G__20732,G__20733,G__20734,G__20735));

break;
case "compilation":
var G__20736 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__20737 = cause_type;
var G__20738 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__20739 = loc;
var G__20740 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__20736,G__20737,G__20738,G__20739,G__20740) : format.call(null,G__20736,G__20737,G__20738,G__20739,G__20740));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__20741 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__20742 = symbol;
var G__20743 = loc;
var G__20744 = (function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__20745_20856 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__20746_20857 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__20747_20858 = true;
var _STAR_print_fn_STAR__temp_val__20748_20859 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__20747_20858);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__20748_20859);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__20711_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__20711_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__20746_20857);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__20745_20856);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__20741,G__20742,G__20743,G__20744) : format.call(null,G__20741,G__20742,G__20743,G__20744));
} else {
var G__20750 = "Execution error%s at %s(%s).\n%s\n";
var G__20751 = cause_type;
var G__20752 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__20753 = loc;
var G__20754 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__20750,G__20751,G__20752,G__20753,G__20754) : format.call(null,G__20750,G__20751,G__20752,G__20753,G__20754));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20715__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
