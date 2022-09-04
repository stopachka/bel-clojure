goog.provide('shadow.test.env');
/**
 * @define {boolean}
 */
shadow.test.env.UI_DRIVEN = goog.define("shadow.test.env.UI_DRIVEN",false);
if((typeof shadow !== 'undefined') && (typeof shadow.test !== 'undefined') && (typeof shadow.test.env !== 'undefined') && (typeof shadow.test.env.tests_ref !== 'undefined')){
} else {
shadow.test.env.tests_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cljs.core.PersistentArrayMap.EMPTY], null));
}
shadow.test.env.reset_test_data_BANG_ = (function shadow$test$env$reset_test_data_BANG_(test_data){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(shadow.test.env.tests_ref,cljs.core.assoc,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),test_data);
});
shadow.test.env.get_tests = (function shadow$test$env$get_tests(){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.test.env.tests_ref),new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469));
});
shadow.test.env.get_test_vars = (function shadow$test$env$get_test_vars(){
var iter__5523__auto__ = (function shadow$test$env$get_test_vars_$_iter__21124(s__21125){
return (new cljs.core.LazySeq(null,(function (){
var s__21125__$1 = s__21125;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__21125__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var vec__21133 = cljs.core.first(xs__6360__auto__);
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21133,(0),null);
var ns_info = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21133,(1),null);
var iterys__5519__auto__ = ((function (s__21125__$1,vec__21133,ns,ns_info,xs__6360__auto__,temp__5804__auto__){
return (function shadow$test$env$get_test_vars_$_iter__21124_$_iter__21126(s__21127){
return (new cljs.core.LazySeq(null,((function (s__21125__$1,vec__21133,ns,ns_info,xs__6360__auto__,temp__5804__auto__){
return (function (){
var s__21127__$1 = s__21127;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__21127__$1);
if(temp__5804__auto____$1){
var s__21127__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__21127__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__21127__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__21129 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__21128 = (0);
while(true){
if((i__21128 < size__5522__auto__)){
var var$ = cljs.core._nth(c__5521__auto__,i__21128);
cljs.core.chunk_append(b__21129,var$);

var G__21154 = (i__21128 + (1));
i__21128 = G__21154;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21129),shadow$test$env$get_test_vars_$_iter__21124_$_iter__21126(cljs.core.chunk_rest(s__21127__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21129),null);
}
} else {
var var$ = cljs.core.first(s__21127__$2);
return cljs.core.cons(var$,shadow$test$env$get_test_vars_$_iter__21124_$_iter__21126(cljs.core.rest(s__21127__$2)));
}
} else {
return null;
}
break;
}
});})(s__21125__$1,vec__21133,ns,ns_info,xs__6360__auto__,temp__5804__auto__))
,null,null));
});})(s__21125__$1,vec__21133,ns,ns_info,xs__6360__auto__,temp__5804__auto__))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__(new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(ns_info)));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,shadow$test$env$get_test_vars_$_iter__21124(cljs.core.rest(s__21125__$1)));
} else {
var G__21155 = cljs.core.rest(s__21125__$1);
s__21125__$1 = G__21155;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(shadow.test.env.get_tests());
});
shadow.test.env.get_test_ns_info = (function shadow$test$env$get_test_ns_info(ns){
if((ns instanceof cljs.core.Symbol)){
} else {
throw (new Error("Assert failed: (symbol? ns)"));
}

return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.test.env.tests_ref),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),ns], null));
});
/**
 * returns all the registered test namespaces and symbols
 * use (get-test-ns-info the-sym) to get the details
 */
shadow.test.env.get_test_namespaces = (function shadow$test$env$get_test_namespaces(){
return cljs.core.keys(new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(shadow.test.env.tests_ref)));
});
shadow.test.env.get_test_count = (function shadow$test$env$get_test_count(){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,(0),(function (){var iter__5523__auto__ = (function shadow$test$env$get_test_count_$_iter__21145(s__21146){
return (new cljs.core.LazySeq(null,(function (){
var s__21146__$1 = s__21146;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__21146__$1);
if(temp__5804__auto__){
var s__21146__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__21146__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__21146__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__21148 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__21147 = (0);
while(true){
if((i__21147 < size__5522__auto__)){
var map__21150 = cljs.core._nth(c__5521__auto__,i__21147);
var map__21150__$1 = cljs.core.__destructure_map(map__21150);
var test_ns = map__21150__$1;
var vars = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21150__$1,new cljs.core.Keyword(null,"vars","vars",-2046957217));
cljs.core.chunk_append(b__21148,cljs.core.count(vars));

var G__21157 = (i__21147 + (1));
i__21147 = G__21157;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21148),shadow$test$env$get_test_count_$_iter__21145(cljs.core.chunk_rest(s__21146__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21148),null);
}
} else {
var map__21152 = cljs.core.first(s__21146__$2);
var map__21152__$1 = cljs.core.__destructure_map(map__21152);
var test_ns = map__21152__$1;
var vars = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21152__$1,new cljs.core.Keyword(null,"vars","vars",-2046957217));
return cljs.core.cons(cljs.core.count(vars),shadow$test$env$get_test_count_$_iter__21145(cljs.core.rest(s__21146__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cljs.core.vals(new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(shadow.test.env.tests_ref))));
})());
});

//# sourceMappingURL=shadow.test.env.js.map
