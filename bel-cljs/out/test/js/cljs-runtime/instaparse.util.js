goog.provide('instaparse.util');
instaparse.util.throw_runtime_exception = (function instaparse$util$throw_runtime_exception(var_args){
var args__5775__auto__ = [];
var len__5769__auto___23128 = arguments.length;
var i__5770__auto___23129 = (0);
while(true){
if((i__5770__auto___23129 < len__5769__auto___23128)){
args__5775__auto__.push((arguments[i__5770__auto___23129]));

var G__23130 = (i__5770__auto___23129 + (1));
i__5770__auto___23129 = G__23130;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return instaparse.util.throw_runtime_exception.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(instaparse.util.throw_runtime_exception.cljs$core$IFn$_invoke$arity$variadic = (function (message){
var text = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,message);
throw text;
}));

(instaparse.util.throw_runtime_exception.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(instaparse.util.throw_runtime_exception.cljs$lang$applyTo = (function (seq23119){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq23119));
}));

instaparse.util.throw_illegal_argument_exception = (function instaparse$util$throw_illegal_argument_exception(var_args){
var args__5775__auto__ = [];
var len__5769__auto___23133 = arguments.length;
var i__5770__auto___23134 = (0);
while(true){
if((i__5770__auto___23134 < len__5769__auto___23133)){
args__5775__auto__.push((arguments[i__5770__auto___23134]));

var G__23135 = (i__5770__auto___23134 + (1));
i__5770__auto___23134 = G__23135;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return instaparse.util.throw_illegal_argument_exception.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(instaparse.util.throw_illegal_argument_exception.cljs$core$IFn$_invoke$arity$variadic = (function (message){
var text = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,message);
throw text;
}));

(instaparse.util.throw_illegal_argument_exception.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(instaparse.util.throw_illegal_argument_exception.cljs$lang$applyTo = (function (seq23122){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq23122));
}));

instaparse.util.regexp_flags = (function instaparse$util$regexp_flags(re){
var G__23125 = "";
var G__23125__$1 = (cljs.core.truth_(re.ignoreCase)?[G__23125,"i"].join(''):G__23125);
var G__23125__$2 = (cljs.core.truth_(re.multiline)?[G__23125__$1,"m"].join(''):G__23125__$1);
if(cljs.core.truth_(re.unicode)){
return [G__23125__$2,"u"].join('');
} else {
return G__23125__$2;
}
});

//# sourceMappingURL=instaparse.util.js.map
