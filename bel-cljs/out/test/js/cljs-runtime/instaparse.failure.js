goog.provide('instaparse.failure');
/**
 * Takes an index into text, and determines the line and column info
 */
instaparse.failure.index__GT_line_column = (function instaparse$failure$index__GT_line_column(index,text){
var line = (1);
var col = (1);
var counter = (0);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(index,counter)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),col], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.get.cljs$core$IFn$_invoke$arity$2(text,counter))){
var G__23186 = (line + (1));
var G__23187 = (1);
var G__23188 = (counter + (1));
line = G__23186;
col = G__23187;
counter = G__23188;
continue;
} else {
var G__23189 = line;
var G__23190 = (col + (1));
var G__23191 = (counter + (1));
line = G__23189;
col = G__23190;
counter = G__23191;
continue;

}
}
break;
}
});
instaparse.failure.get_line = (function instaparse$failure$get_line(n,text){
var chars = cljs.core.seq(clojure.string.replace(text,"\r\n","\n"));
var n__$1 = n;
while(true){
if(cljs.core.empty_QMARK_(chars)){
return "";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n__$1,(1))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["\n",null], null), null)),chars));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.first(chars))){
var G__23192 = cljs.core.next(chars);
var G__23193 = (n__$1 - (1));
chars = G__23192;
n__$1 = G__23193;
continue;
} else {
var G__23194 = cljs.core.next(chars);
var G__23195 = n__$1;
chars = G__23194;
n__$1 = G__23195;
continue;

}
}
}
break;
}
});
/**
 * Creates string with caret at nth position, 1-based
 * and accounts for horizontal tabs which might change
 * the alignment of the '^' to the error location.
 */
instaparse.failure.marker = (function instaparse$failure$marker(text,n){
if(cljs.core.truth_((function (){var and__5043__auto__ = text;
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.integer_QMARK_(n);
} else {
return and__5043__auto__;
}
})())){
var marker_text = clojure.string.replace(text,/[^\s]/," ");
if((n <= (1))){
return "^";
} else {
return [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(marker_text,(0),(n - (1))),"^"].join('');
}
} else {
return null;
}
});
/**
 * Adds text, line, and column info to failure object.
 */
instaparse.failure.augment_failure = (function instaparse$failure$augment_failure(failure,text){
var lc = instaparse.failure.index__GT_line_column(new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(failure),text);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([failure,lc,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),instaparse.failure.get_line(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(lc),text)], null)], 0));
});
/**
 * Provides special case for printing negative lookahead reasons
 */
instaparse.failure.print_reason = (function instaparse$failure$print_reason(r){
if(cljs.core.truth_(new cljs.core.Keyword(null,"NOT","NOT",-1689245341).cljs$core$IFn$_invoke$arity$1(r))){
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["NOT "], 0));

return cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"NOT","NOT",-1689245341).cljs$core$IFn$_invoke$arity$1(r)], 0));
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"char-range","char-range",1443391389).cljs$core$IFn$_invoke$arity$1(r))){
return cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.print.char_range__GT_str(r)], 0));
} else {
if((r instanceof RegExp)){
return cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.print.regexp__GT_str(r)], 0));
} else {
return cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([r], 0));

}
}
}
});
/**
 * Takes an augmented failure object and prints the error message
 */
instaparse.failure.pprint_failure = (function instaparse$failure$pprint_failure(p__23174){
var map__23175 = p__23174;
var map__23175__$1 = cljs.core.__destructure_map(map__23175);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23175__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23175__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23175__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var reason = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23175__$1,new cljs.core.Keyword(null,"reason","reason",-2070751759));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["Parse error at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column),":"].join('')], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([text], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.failure.marker(text,column)], 0));

var full_reasons = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expecting","expecting",-57706705),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"full","full",436801220),reason)));
var partial_reasons = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expecting","expecting",-57706705),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(new cljs.core.Keyword(null,"full","full",436801220)),reason)));
var total = (cljs.core.count(full_reasons) + cljs.core.count(partial_reasons));
if((total === (0))){
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),total)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Expected:"], 0));
} else {
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Expected one of:"], 0));

}
}

var seq__23177_23196 = cljs.core.seq(full_reasons);
var chunk__23178_23197 = null;
var count__23179_23198 = (0);
var i__23180_23199 = (0);
while(true){
if((i__23180_23199 < count__23179_23198)){
var r_23200 = chunk__23178_23197.cljs$core$IIndexed$_nth$arity$2(null,i__23180_23199);
instaparse.failure.print_reason(r_23200);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" (followed by end-of-string)"], 0));


var G__23201 = seq__23177_23196;
var G__23202 = chunk__23178_23197;
var G__23203 = count__23179_23198;
var G__23204 = (i__23180_23199 + (1));
seq__23177_23196 = G__23201;
chunk__23178_23197 = G__23202;
count__23179_23198 = G__23203;
i__23180_23199 = G__23204;
continue;
} else {
var temp__5804__auto___23205 = cljs.core.seq(seq__23177_23196);
if(temp__5804__auto___23205){
var seq__23177_23206__$1 = temp__5804__auto___23205;
if(cljs.core.chunked_seq_QMARK_(seq__23177_23206__$1)){
var c__5568__auto___23207 = cljs.core.chunk_first(seq__23177_23206__$1);
var G__23208 = cljs.core.chunk_rest(seq__23177_23206__$1);
var G__23209 = c__5568__auto___23207;
var G__23210 = cljs.core.count(c__5568__auto___23207);
var G__23211 = (0);
seq__23177_23196 = G__23208;
chunk__23178_23197 = G__23209;
count__23179_23198 = G__23210;
i__23180_23199 = G__23211;
continue;
} else {
var r_23212 = cljs.core.first(seq__23177_23206__$1);
instaparse.failure.print_reason(r_23212);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" (followed by end-of-string)"], 0));


var G__23213 = cljs.core.next(seq__23177_23206__$1);
var G__23214 = null;
var G__23215 = (0);
var G__23216 = (0);
seq__23177_23196 = G__23213;
chunk__23178_23197 = G__23214;
count__23179_23198 = G__23215;
i__23180_23199 = G__23216;
continue;
}
} else {
}
}
break;
}

var seq__23182 = cljs.core.seq(partial_reasons);
var chunk__23183 = null;
var count__23184 = (0);
var i__23185 = (0);
while(true){
if((i__23185 < count__23184)){
var r = chunk__23183.cljs$core$IIndexed$_nth$arity$2(null,i__23185);
instaparse.failure.print_reason(r);

cljs.core.println();


var G__23217 = seq__23182;
var G__23218 = chunk__23183;
var G__23219 = count__23184;
var G__23220 = (i__23185 + (1));
seq__23182 = G__23217;
chunk__23183 = G__23218;
count__23184 = G__23219;
i__23185 = G__23220;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__23182);
if(temp__5804__auto__){
var seq__23182__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23182__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__23182__$1);
var G__23221 = cljs.core.chunk_rest(seq__23182__$1);
var G__23222 = c__5568__auto__;
var G__23223 = cljs.core.count(c__5568__auto__);
var G__23224 = (0);
seq__23182 = G__23221;
chunk__23183 = G__23222;
count__23184 = G__23223;
i__23185 = G__23224;
continue;
} else {
var r = cljs.core.first(seq__23182__$1);
instaparse.failure.print_reason(r);

cljs.core.println();


var G__23225 = cljs.core.next(seq__23182__$1);
var G__23226 = null;
var G__23227 = (0);
var G__23228 = (0);
seq__23182 = G__23225;
chunk__23183 = G__23226;
count__23184 = G__23227;
i__23185 = G__23228;
continue;
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=instaparse.failure.js.map
