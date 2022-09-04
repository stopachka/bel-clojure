goog.provide('shadow.test');
/**
 * like ct/test-vars-block but more generic
 * groups vars by namespace, executes fixtures
 */
shadow.test.test_vars_grouped_block = (function shadow$test$test_vars_grouped_block(vars){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__22232){
var vec__22233 = p__22232;
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22233,(0),null);
var vars__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22233,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return cljs.test.report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033),new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
}),(function (){
return cljs.test.block((function (){var env = cljs.test.get_current_env();
var once_fixtures = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-fixtures","once-fixtures",1253947167),ns], null));
var each_fixtures = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"each-fixtures","each-fixtures",802243977),ns], null));
var G__22261 = cljs.test.execution_strategy(once_fixtures,each_fixtures);
var G__22261__$1 = (((G__22261 instanceof cljs.core.Keyword))?G__22261.fqn:null);
switch (G__22261__$1) {
case "async":
return cljs.test.wrap_map_fixtures(once_fixtures,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.test.wrap_map_fixtures,each_fixtures),cljs.test.test_var_block),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"test","test",577538877),cljs.core.meta),vars__$1)], 0)));

break;
case "sync":
var each_fixture_fn = cljs.test.join_fixtures(each_fixtures);
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
var G__22265 = (function (){
var seq__22267 = cljs.core.seq(vars__$1);
var chunk__22268 = null;
var count__22269 = (0);
var i__22270 = (0);
while(true){
if((i__22270 < count__22269)){
var v = chunk__22268.cljs$core$IIndexed$_nth$arity$2(null,i__22270);
var temp__5804__auto___22422 = new cljs.core.Keyword(null,"test","test",577538877).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(v));
if(cljs.core.truth_(temp__5804__auto___22422)){
var t_22423 = temp__5804__auto___22422;
var G__22282_22424 = ((function (seq__22267,chunk__22268,count__22269,i__22270,t_22423,temp__5804__auto___22422,v,each_fixture_fn,G__22261,G__22261__$1,env,once_fixtures,each_fixtures,vec__22233,ns,vars__$1){
return (function (){
return cljs.test.run_block(cljs.test.test_var_block_STAR_(v,cljs.test.disable_async(t_22423)));
});})(seq__22267,chunk__22268,count__22269,i__22270,t_22423,temp__5804__auto___22422,v,each_fixture_fn,G__22261,G__22261__$1,env,once_fixtures,each_fixtures,vec__22233,ns,vars__$1))
;
(each_fixture_fn.cljs$core$IFn$_invoke$arity$1 ? each_fixture_fn.cljs$core$IFn$_invoke$arity$1(G__22282_22424) : each_fixture_fn.call(null,G__22282_22424));
} else {
}


var G__22427 = seq__22267;
var G__22428 = chunk__22268;
var G__22429 = count__22269;
var G__22430 = (i__22270 + (1));
seq__22267 = G__22427;
chunk__22268 = G__22428;
count__22269 = G__22429;
i__22270 = G__22430;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__22267);
if(temp__5804__auto__){
var seq__22267__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22267__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__22267__$1);
var G__22431 = cljs.core.chunk_rest(seq__22267__$1);
var G__22432 = c__5568__auto__;
var G__22433 = cljs.core.count(c__5568__auto__);
var G__22434 = (0);
seq__22267 = G__22431;
chunk__22268 = G__22432;
count__22269 = G__22433;
i__22270 = G__22434;
continue;
} else {
var v = cljs.core.first(seq__22267__$1);
var temp__5804__auto___22435__$1 = new cljs.core.Keyword(null,"test","test",577538877).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(v));
if(cljs.core.truth_(temp__5804__auto___22435__$1)){
var t_22436 = temp__5804__auto___22435__$1;
var G__22284_22437 = ((function (seq__22267,chunk__22268,count__22269,i__22270,t_22436,temp__5804__auto___22435__$1,v,seq__22267__$1,temp__5804__auto__,each_fixture_fn,G__22261,G__22261__$1,env,once_fixtures,each_fixtures,vec__22233,ns,vars__$1){
return (function (){
return cljs.test.run_block(cljs.test.test_var_block_STAR_(v,cljs.test.disable_async(t_22436)));
});})(seq__22267,chunk__22268,count__22269,i__22270,t_22436,temp__5804__auto___22435__$1,v,seq__22267__$1,temp__5804__auto__,each_fixture_fn,G__22261,G__22261__$1,env,once_fixtures,each_fixtures,vec__22233,ns,vars__$1))
;
(each_fixture_fn.cljs$core$IFn$_invoke$arity$1 ? each_fixture_fn.cljs$core$IFn$_invoke$arity$1(G__22284_22437) : each_fixture_fn.call(null,G__22284_22437));
} else {
}


var G__22439 = cljs.core.next(seq__22267__$1);
var G__22440 = null;
var G__22441 = (0);
var G__22442 = (0);
seq__22267 = G__22439;
chunk__22268 = G__22440;
count__22269 = G__22441;
i__22270 = G__22442;
continue;
}
} else {
return null;
}
}
break;
}
});
var fexpr__22264 = cljs.test.join_fixtures(once_fixtures);
return (fexpr__22264.cljs$core$IFn$_invoke$arity$1 ? fexpr__22264.cljs$core$IFn$_invoke$arity$1(G__22265) : fexpr__22264.call(null,G__22265));
})], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__22261__$1)].join('')));

}
})());
}),(function (){
return cljs.test.report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645),new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
})], null);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.group_by((function (p1__22230_SHARP_){
return new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p1__22230_SHARP_));
}),vars))], 0));
});
/**
 * Like test-ns, but returns a block for further composition and
 *   later execution.  Does not clear the current env.
 */
shadow.test.test_ns_block = (function shadow$test$test_ns_block(ns){
if((ns instanceof cljs.core.Symbol)){
} else {
throw (new Error("Assert failed: (symbol? ns)"));
}

var map__22294 = shadow.test.env.get_test_ns_info(ns);
var map__22294__$1 = cljs.core.__destructure_map(map__22294);
var test_ns = map__22294__$1;
var vars = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22294__$1,new cljs.core.Keyword(null,"vars","vars",-2046957217));
if(cljs.core.not(test_ns)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["Namespace: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)," not found, no tests to run."].join('')], 0));
})], null);
} else {
return shadow.test.test_vars_grouped_block(vars);
}
});
shadow.test.prepare_test_run = (function shadow$test$prepare_test_run(p__22303,vars){
var map__22304 = p__22303;
var map__22304__$1 = cljs.core.__destructure_map(map__22304);
var env = map__22304__$1;
var report_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22304__$1,new cljs.core.Keyword(null,"report-fn","report-fn",-549046115));
var orig_report = cljs.test.report;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
cljs.test.set_env_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("shadow.test","report-fn","shadow.test/report-fn",1075704061),orig_report));

if(cljs.core.truth_(report_fn)){
(cljs.test.report = report_fn);
} else {
}

var seq__22327_22444 = cljs.core.seq(shadow.test.env.get_tests());
var chunk__22329_22445 = null;
var count__22330_22446 = (0);
var i__22331_22447 = (0);
while(true){
if((i__22331_22447 < count__22330_22446)){
var vec__22345_22448 = chunk__22329_22445.cljs$core$IIndexed$_nth$arity$2(null,i__22331_22447);
var test_ns_22449 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22345_22448,(0),null);
var ns_info_22450 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22345_22448,(1),null);
var map__22348_22451 = ns_info_22450;
var map__22348_22452__$1 = cljs.core.__destructure_map(map__22348_22451);
var fixtures_22453 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22348_22452__$1,new cljs.core.Keyword(null,"fixtures","fixtures",1009814994));
var temp__5804__auto___22455 = new cljs.core.Keyword(null,"once","once",-262568523).cljs$core$IFn$_invoke$arity$1(fixtures_22453);
if(cljs.core.truth_(temp__5804__auto___22455)){
var fix_22456 = temp__5804__auto___22455;
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-fixtures","once-fixtures",1253947167)], null),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([test_ns_22449,fix_22456], 0));
} else {
}

var temp__5804__auto___22458 = new cljs.core.Keyword(null,"each","each",940016129).cljs$core$IFn$_invoke$arity$1(fixtures_22453);
if(cljs.core.truth_(temp__5804__auto___22458)){
var fix_22459 = temp__5804__auto___22458;
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"each-fixtures","each-fixtures",802243977)], null),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([test_ns_22449,fix_22459], 0));
} else {
}


var G__22460 = seq__22327_22444;
var G__22461 = chunk__22329_22445;
var G__22462 = count__22330_22446;
var G__22463 = (i__22331_22447 + (1));
seq__22327_22444 = G__22460;
chunk__22329_22445 = G__22461;
count__22330_22446 = G__22462;
i__22331_22447 = G__22463;
continue;
} else {
var temp__5804__auto___22467 = cljs.core.seq(seq__22327_22444);
if(temp__5804__auto___22467){
var seq__22327_22468__$1 = temp__5804__auto___22467;
if(cljs.core.chunked_seq_QMARK_(seq__22327_22468__$1)){
var c__5568__auto___22469 = cljs.core.chunk_first(seq__22327_22468__$1);
var G__22470 = cljs.core.chunk_rest(seq__22327_22468__$1);
var G__22471 = c__5568__auto___22469;
var G__22472 = cljs.core.count(c__5568__auto___22469);
var G__22473 = (0);
seq__22327_22444 = G__22470;
chunk__22329_22445 = G__22471;
count__22330_22446 = G__22472;
i__22331_22447 = G__22473;
continue;
} else {
var vec__22349_22475 = cljs.core.first(seq__22327_22468__$1);
var test_ns_22476 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22349_22475,(0),null);
var ns_info_22477 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22349_22475,(1),null);
var map__22352_22479 = ns_info_22477;
var map__22352_22480__$1 = cljs.core.__destructure_map(map__22352_22479);
var fixtures_22481 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22352_22480__$1,new cljs.core.Keyword(null,"fixtures","fixtures",1009814994));
var temp__5804__auto___22482__$1 = new cljs.core.Keyword(null,"once","once",-262568523).cljs$core$IFn$_invoke$arity$1(fixtures_22481);
if(cljs.core.truth_(temp__5804__auto___22482__$1)){
var fix_22483 = temp__5804__auto___22482__$1;
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-fixtures","once-fixtures",1253947167)], null),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([test_ns_22476,fix_22483], 0));
} else {
}

var temp__5804__auto___22484__$1 = new cljs.core.Keyword(null,"each","each",940016129).cljs$core$IFn$_invoke$arity$1(fixtures_22481);
if(cljs.core.truth_(temp__5804__auto___22484__$1)){
var fix_22485 = temp__5804__auto___22484__$1;
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"each-fixtures","each-fixtures",802243977)], null),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([test_ns_22476,fix_22485], 0));
} else {
}


var G__22486 = cljs.core.next(seq__22327_22468__$1);
var G__22487 = null;
var G__22488 = (0);
var G__22489 = (0);
seq__22327_22444 = G__22486;
chunk__22329_22445 = G__22487;
count__22330_22446 = G__22488;
i__22331_22447 = G__22489;
continue;
}
} else {
}
}
break;
}

return cljs.test.report.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-run-tests","begin-run-tests",309363062),new cljs.core.Keyword(null,"var-count","var-count",-1513152110),cljs.core.count(vars),new cljs.core.Keyword(null,"ns-count","ns-count",-1269070724),cljs.core.count(cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__22300_SHARP_){
return new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p1__22300_SHARP_));
}),vars)))], null));
})], null);
});
shadow.test.finish_test_run = (function shadow$test$finish_test_run(block){
if(cljs.core.vector_QMARK_(block)){
} else {
throw (new Error("Assert failed: (vector? block)"));
}

return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(block,(function (){
var map__22367 = cljs.test.get_current_env();
var map__22367__$1 = cljs.core.__destructure_map(map__22367);
var env = map__22367__$1;
var report_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22367__$1,new cljs.core.Keyword("shadow.test","report-fn","shadow.test/report-fn",1075704061));
var report_counters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22367__$1,new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242));
cljs.test.report.call(null,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(report_counters,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"summary","summary",380847952)));

cljs.test.report.call(null,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(report_counters,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-run-tests","end-run-tests",267300563)));

return (cljs.test.report = report_fn);
}));
});
/**
 * tests all vars grouped by namespace, expects seq of test vars, can be obtained from env
 */
shadow.test.run_test_vars = (function shadow$test$run_test_vars(var_args){
var G__22371 = arguments.length;
switch (G__22371) {
case 1:
return shadow.test.run_test_vars.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.test.run_test_vars.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.test.run_test_vars.cljs$core$IFn$_invoke$arity$1 = (function (test_vars){
return shadow.test.run_test_vars.cljs$core$IFn$_invoke$arity$2(cljs.test.empty_env.cljs$core$IFn$_invoke$arity$0(),test_vars);
}));

(shadow.test.run_test_vars.cljs$core$IFn$_invoke$arity$2 = (function (env,vars){
return cljs.test.run_block(shadow.test.finish_test_run(cljs.core.into.cljs$core$IFn$_invoke$arity$2(shadow.test.prepare_test_run(env,vars),shadow.test.test_vars_grouped_block(vars))));
}));

(shadow.test.run_test_vars.cljs$lang$maxFixedArity = 2);

/**
 * test all vars for given namespace symbol
 */
shadow.test.test_ns = (function shadow$test$test_ns(var_args){
var G__22384 = arguments.length;
switch (G__22384) {
case 1:
return shadow.test.test_ns.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.test.test_ns.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.test.test_ns.cljs$core$IFn$_invoke$arity$1 = (function (ns){
return shadow.test.test_ns.cljs$core$IFn$_invoke$arity$2(cljs.test.empty_env.cljs$core$IFn$_invoke$arity$0(),ns);
}));

(shadow.test.test_ns.cljs$core$IFn$_invoke$arity$2 = (function (env,ns){
var map__22398 = shadow.test.env.get_test_ns_info(ns);
var map__22398__$1 = cljs.core.__destructure_map(map__22398);
var vars = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22398__$1,new cljs.core.Keyword(null,"vars","vars",-2046957217));
return cljs.test.run_block(shadow.test.finish_test_run(cljs.core.into.cljs$core$IFn$_invoke$arity$2(shadow.test.prepare_test_run(env,vars),shadow.test.test_vars_grouped_block(vars))));
}));

(shadow.test.test_ns.cljs$lang$maxFixedArity = 2);

/**
 * test all vars in specified namespace symbol set
 */
shadow.test.run_tests = (function shadow$test$run_tests(var_args){
var G__22407 = arguments.length;
switch (G__22407) {
case 0:
return shadow.test.run_tests.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return shadow.test.run_tests.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.test.run_tests.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.test.run_tests.cljs$core$IFn$_invoke$arity$0 = (function (){
return shadow.test.run_tests.cljs$core$IFn$_invoke$arity$1(cljs.test.empty_env.cljs$core$IFn$_invoke$arity$0());
}));

(shadow.test.run_tests.cljs$core$IFn$_invoke$arity$1 = (function (env){
return shadow.test.run_tests.cljs$core$IFn$_invoke$arity$2(env,shadow.test.env.get_test_namespaces());
}));

(shadow.test.run_tests.cljs$core$IFn$_invoke$arity$2 = (function (env,namespaces){
if(cljs.core.set_QMARK_(namespaces)){
} else {
throw (new Error("Assert failed: (set? namespaces)"));
}

var vars = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__22402_SHARP_){
return cljs.core.contains_QMARK_(namespaces,new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p1__22402_SHARP_)));
}),shadow.test.env.get_test_vars());
return cljs.test.run_block(shadow.test.finish_test_run(cljs.core.into.cljs$core$IFn$_invoke$arity$2(shadow.test.prepare_test_run(env,vars),shadow.test.test_vars_grouped_block(vars))));
}));

(shadow.test.run_tests.cljs$lang$maxFixedArity = 2);

/**
 * Runs all tests in all namespaces; prints results.
 *   Optional argument is a regular expression; only namespaces with
 *   names matching the regular expression (with re-matches) will be
 *   tested.
 */
shadow.test.run_all_tests = (function shadow$test$run_all_tests(var_args){
var G__22412 = arguments.length;
switch (G__22412) {
case 0:
return shadow.test.run_all_tests.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return shadow.test.run_all_tests.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.test.run_all_tests.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.test.run_all_tests.cljs$core$IFn$_invoke$arity$0 = (function (){
return shadow.test.run_all_tests.cljs$core$IFn$_invoke$arity$2(cljs.test.empty_env.cljs$core$IFn$_invoke$arity$0(),null);
}));

(shadow.test.run_all_tests.cljs$core$IFn$_invoke$arity$1 = (function (env){
return shadow.test.run_all_tests.cljs$core$IFn$_invoke$arity$2(env,null);
}));

(shadow.test.run_all_tests.cljs$core$IFn$_invoke$arity$2 = (function (env,re){
return shadow.test.run_tests.cljs$core$IFn$_invoke$arity$2(env,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__22410_SHARP_){
var or__5045__auto__ = (re == null);
if(or__5045__auto__){
return or__5045__auto__;
} else {
return cljs.core.re_matches(re,cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__22410_SHARP_));
}
}),shadow.test.env.get_test_namespaces())));
}));

(shadow.test.run_all_tests.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=shadow.test.js.map
