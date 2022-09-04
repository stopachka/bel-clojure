goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___22826 = arguments.length;
var i__5770__auto___22827 = (0);
while(true){
if((i__5770__auto___22827 < len__5769__auto___22826)){
args__5775__auto__.push((arguments[i__5770__auto___22827]));

var G__22828 = (i__5770__auto___22827 + (1));
i__5770__auto___22827 = G__22828;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq22515){
var G__22516 = cljs.core.first(seq22515);
var seq22515__$1 = cljs.core.next(seq22515);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22516,seq22515__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__22522 = cljs.core.seq(sources);
var chunk__22523 = null;
var count__22524 = (0);
var i__22525 = (0);
while(true){
if((i__22525 < count__22524)){
var map__22534 = chunk__22523.cljs$core$IIndexed$_nth$arity$2(null,i__22525);
var map__22534__$1 = cljs.core.__destructure_map(map__22534);
var src = map__22534__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22534__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22534__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22534__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22534__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e22536){var e_22829 = e22536;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_22829);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_22829.message)].join('')));
}

var G__22830 = seq__22522;
var G__22831 = chunk__22523;
var G__22832 = count__22524;
var G__22833 = (i__22525 + (1));
seq__22522 = G__22830;
chunk__22523 = G__22831;
count__22524 = G__22832;
i__22525 = G__22833;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__22522);
if(temp__5804__auto__){
var seq__22522__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22522__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__22522__$1);
var G__22834 = cljs.core.chunk_rest(seq__22522__$1);
var G__22835 = c__5568__auto__;
var G__22836 = cljs.core.count(c__5568__auto__);
var G__22837 = (0);
seq__22522 = G__22834;
chunk__22523 = G__22835;
count__22524 = G__22836;
i__22525 = G__22837;
continue;
} else {
var map__22537 = cljs.core.first(seq__22522__$1);
var map__22537__$1 = cljs.core.__destructure_map(map__22537);
var src = map__22537__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22537__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22537__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22537__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22537__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e22540){var e_22838 = e22540;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_22838);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_22838.message)].join('')));
}

var G__22839 = cljs.core.next(seq__22522__$1);
var G__22840 = null;
var G__22841 = (0);
var G__22842 = (0);
seq__22522 = G__22839;
chunk__22523 = G__22840;
count__22524 = G__22841;
i__22525 = G__22842;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__22542 = cljs.core.seq(js_requires);
var chunk__22543 = null;
var count__22544 = (0);
var i__22545 = (0);
while(true){
if((i__22545 < count__22544)){
var js_ns = chunk__22543.cljs$core$IIndexed$_nth$arity$2(null,i__22545);
var require_str_22843 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_22843);


var G__22844 = seq__22542;
var G__22845 = chunk__22543;
var G__22846 = count__22544;
var G__22847 = (i__22545 + (1));
seq__22542 = G__22844;
chunk__22543 = G__22845;
count__22544 = G__22846;
i__22545 = G__22847;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__22542);
if(temp__5804__auto__){
var seq__22542__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22542__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__22542__$1);
var G__22848 = cljs.core.chunk_rest(seq__22542__$1);
var G__22849 = c__5568__auto__;
var G__22850 = cljs.core.count(c__5568__auto__);
var G__22851 = (0);
seq__22542 = G__22848;
chunk__22543 = G__22849;
count__22544 = G__22850;
i__22545 = G__22851;
continue;
} else {
var js_ns = cljs.core.first(seq__22542__$1);
var require_str_22852 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_22852);


var G__22853 = cljs.core.next(seq__22542__$1);
var G__22854 = null;
var G__22855 = (0);
var G__22856 = (0);
seq__22542 = G__22853;
chunk__22543 = G__22854;
count__22544 = G__22855;
i__22545 = G__22856;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__22550){
var map__22551 = p__22550;
var map__22551__$1 = cljs.core.__destructure_map(map__22551);
var msg = map__22551__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22551__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22551__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5523__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__22552(s__22553){
return (new cljs.core.LazySeq(null,(function (){
var s__22553__$1 = s__22553;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__22553__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__22558 = cljs.core.first(xs__6360__auto__);
var map__22558__$1 = cljs.core.__destructure_map(map__22558);
var src = map__22558__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22558__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22558__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5519__auto__ = ((function (s__22553__$1,map__22558,map__22558__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__22551,map__22551__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__22552_$_iter__22554(s__22555){
return (new cljs.core.LazySeq(null,((function (s__22553__$1,map__22558,map__22558__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__22551,map__22551__$1,msg,info,reload_info){
return (function (){
var s__22555__$1 = s__22555;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__22555__$1);
if(temp__5804__auto____$1){
var s__22555__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__22555__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__22555__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__22557 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__22556 = (0);
while(true){
if((i__22556 < size__5522__auto__)){
var warning = cljs.core._nth(c__5521__auto__,i__22556);
cljs.core.chunk_append(b__22557,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__22857 = (i__22556 + (1));
i__22556 = G__22857;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22557),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__22552_$_iter__22554(cljs.core.chunk_rest(s__22555__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22557),null);
}
} else {
var warning = cljs.core.first(s__22555__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__22552_$_iter__22554(cljs.core.rest(s__22555__$2)));
}
} else {
return null;
}
break;
}
});})(s__22553__$1,map__22558,map__22558__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__22551,map__22551__$1,msg,info,reload_info))
,null,null));
});})(s__22553__$1,map__22558,map__22558__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__22551,map__22551__$1,msg,info,reload_info))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__(warnings));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__22552(cljs.core.rest(s__22553__$1)));
} else {
var G__22858 = cljs.core.rest(s__22553__$1);
s__22553__$1 = G__22858;
continue;
}
} else {
var G__22859 = cljs.core.rest(s__22553__$1);
s__22553__$1 = G__22859;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__22559_22860 = cljs.core.seq(warnings);
var chunk__22560_22861 = null;
var count__22561_22862 = (0);
var i__22562_22863 = (0);
while(true){
if((i__22562_22863 < count__22561_22862)){
var map__22565_22864 = chunk__22560_22861.cljs$core$IIndexed$_nth$arity$2(null,i__22562_22863);
var map__22565_22865__$1 = cljs.core.__destructure_map(map__22565_22864);
var w_22866 = map__22565_22865__$1;
var msg_22867__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22565_22865__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_22868 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22565_22865__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_22869 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22565_22865__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_22870 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22565_22865__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_22870)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_22868),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_22869),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_22867__$1)].join(''));


var G__22871 = seq__22559_22860;
var G__22872 = chunk__22560_22861;
var G__22873 = count__22561_22862;
var G__22874 = (i__22562_22863 + (1));
seq__22559_22860 = G__22871;
chunk__22560_22861 = G__22872;
count__22561_22862 = G__22873;
i__22562_22863 = G__22874;
continue;
} else {
var temp__5804__auto___22875 = cljs.core.seq(seq__22559_22860);
if(temp__5804__auto___22875){
var seq__22559_22876__$1 = temp__5804__auto___22875;
if(cljs.core.chunked_seq_QMARK_(seq__22559_22876__$1)){
var c__5568__auto___22877 = cljs.core.chunk_first(seq__22559_22876__$1);
var G__22878 = cljs.core.chunk_rest(seq__22559_22876__$1);
var G__22879 = c__5568__auto___22877;
var G__22880 = cljs.core.count(c__5568__auto___22877);
var G__22881 = (0);
seq__22559_22860 = G__22878;
chunk__22560_22861 = G__22879;
count__22561_22862 = G__22880;
i__22562_22863 = G__22881;
continue;
} else {
var map__22568_22882 = cljs.core.first(seq__22559_22876__$1);
var map__22568_22883__$1 = cljs.core.__destructure_map(map__22568_22882);
var w_22884 = map__22568_22883__$1;
var msg_22885__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22568_22883__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_22886 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22568_22883__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_22887 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22568_22883__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_22888 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22568_22883__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_22888)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_22886),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_22887),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_22885__$1)].join(''));


var G__22889 = cljs.core.next(seq__22559_22876__$1);
var G__22890 = null;
var G__22891 = (0);
var G__22892 = (0);
seq__22559_22860 = G__22889;
chunk__22560_22861 = G__22890;
count__22561_22862 = G__22891;
i__22562_22863 = G__22892;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__22549_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__22549_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5043__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5043__auto__){
var and__5043__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5043__auto____$1){
return new$;
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__22570){
var map__22571 = p__22570;
var map__22571__$1 = cljs.core.__destructure_map(map__22571);
var msg = map__22571__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22571__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22571__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__22572 = cljs.core.seq(updates);
var chunk__22574 = null;
var count__22575 = (0);
var i__22576 = (0);
while(true){
if((i__22576 < count__22575)){
var path = chunk__22574.cljs$core$IIndexed$_nth$arity$2(null,i__22576);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__22698_22893 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__22702_22894 = null;
var count__22703_22895 = (0);
var i__22704_22896 = (0);
while(true){
if((i__22704_22896 < count__22703_22895)){
var node_22897 = chunk__22702_22894.cljs$core$IIndexed$_nth$arity$2(null,i__22704_22896);
if(cljs.core.not(node_22897.shadow$old)){
var path_match_22898 = shadow.cljs.devtools.client.browser.match_paths(node_22897.getAttribute("href"),path);
if(cljs.core.truth_(path_match_22898)){
var new_link_22899 = (function (){var G__22730 = node_22897.cloneNode(true);
G__22730.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_22898),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__22730;
})();
(node_22897.shadow$old = true);

(new_link_22899.onload = ((function (seq__22698_22893,chunk__22702_22894,count__22703_22895,i__22704_22896,seq__22572,chunk__22574,count__22575,i__22576,new_link_22899,path_match_22898,node_22897,path,map__22571,map__22571__$1,msg,updates,reload_info){
return (function (e){
var seq__22731_22900 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__22733_22901 = null;
var count__22734_22902 = (0);
var i__22735_22903 = (0);
while(true){
if((i__22735_22903 < count__22734_22902)){
var map__22739_22904 = chunk__22733_22901.cljs$core$IIndexed$_nth$arity$2(null,i__22735_22903);
var map__22739_22905__$1 = cljs.core.__destructure_map(map__22739_22904);
var task_22906 = map__22739_22905__$1;
var fn_str_22907 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22739_22905__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_22908 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22739_22905__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_22909 = goog.getObjectByName(fn_str_22907,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_22908)].join(''));

(fn_obj_22909.cljs$core$IFn$_invoke$arity$2 ? fn_obj_22909.cljs$core$IFn$_invoke$arity$2(path,new_link_22899) : fn_obj_22909.call(null,path,new_link_22899));


var G__22910 = seq__22731_22900;
var G__22911 = chunk__22733_22901;
var G__22912 = count__22734_22902;
var G__22913 = (i__22735_22903 + (1));
seq__22731_22900 = G__22910;
chunk__22733_22901 = G__22911;
count__22734_22902 = G__22912;
i__22735_22903 = G__22913;
continue;
} else {
var temp__5804__auto___22914 = cljs.core.seq(seq__22731_22900);
if(temp__5804__auto___22914){
var seq__22731_22915__$1 = temp__5804__auto___22914;
if(cljs.core.chunked_seq_QMARK_(seq__22731_22915__$1)){
var c__5568__auto___22916 = cljs.core.chunk_first(seq__22731_22915__$1);
var G__22917 = cljs.core.chunk_rest(seq__22731_22915__$1);
var G__22918 = c__5568__auto___22916;
var G__22919 = cljs.core.count(c__5568__auto___22916);
var G__22920 = (0);
seq__22731_22900 = G__22917;
chunk__22733_22901 = G__22918;
count__22734_22902 = G__22919;
i__22735_22903 = G__22920;
continue;
} else {
var map__22740_22921 = cljs.core.first(seq__22731_22915__$1);
var map__22740_22922__$1 = cljs.core.__destructure_map(map__22740_22921);
var task_22923 = map__22740_22922__$1;
var fn_str_22924 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22740_22922__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_22925 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22740_22922__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_22926 = goog.getObjectByName(fn_str_22924,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_22925)].join(''));

(fn_obj_22926.cljs$core$IFn$_invoke$arity$2 ? fn_obj_22926.cljs$core$IFn$_invoke$arity$2(path,new_link_22899) : fn_obj_22926.call(null,path,new_link_22899));


var G__22927 = cljs.core.next(seq__22731_22915__$1);
var G__22928 = null;
var G__22929 = (0);
var G__22930 = (0);
seq__22731_22900 = G__22927;
chunk__22733_22901 = G__22928;
count__22734_22902 = G__22929;
i__22735_22903 = G__22930;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_22897);
});})(seq__22698_22893,chunk__22702_22894,count__22703_22895,i__22704_22896,seq__22572,chunk__22574,count__22575,i__22576,new_link_22899,path_match_22898,node_22897,path,map__22571,map__22571__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_22898], 0));

goog.dom.insertSiblingAfter(new_link_22899,node_22897);


var G__22931 = seq__22698_22893;
var G__22932 = chunk__22702_22894;
var G__22933 = count__22703_22895;
var G__22934 = (i__22704_22896 + (1));
seq__22698_22893 = G__22931;
chunk__22702_22894 = G__22932;
count__22703_22895 = G__22933;
i__22704_22896 = G__22934;
continue;
} else {
var G__22935 = seq__22698_22893;
var G__22936 = chunk__22702_22894;
var G__22937 = count__22703_22895;
var G__22938 = (i__22704_22896 + (1));
seq__22698_22893 = G__22935;
chunk__22702_22894 = G__22936;
count__22703_22895 = G__22937;
i__22704_22896 = G__22938;
continue;
}
} else {
var G__22939 = seq__22698_22893;
var G__22940 = chunk__22702_22894;
var G__22941 = count__22703_22895;
var G__22942 = (i__22704_22896 + (1));
seq__22698_22893 = G__22939;
chunk__22702_22894 = G__22940;
count__22703_22895 = G__22941;
i__22704_22896 = G__22942;
continue;
}
} else {
var temp__5804__auto___22943 = cljs.core.seq(seq__22698_22893);
if(temp__5804__auto___22943){
var seq__22698_22944__$1 = temp__5804__auto___22943;
if(cljs.core.chunked_seq_QMARK_(seq__22698_22944__$1)){
var c__5568__auto___22945 = cljs.core.chunk_first(seq__22698_22944__$1);
var G__22946 = cljs.core.chunk_rest(seq__22698_22944__$1);
var G__22947 = c__5568__auto___22945;
var G__22948 = cljs.core.count(c__5568__auto___22945);
var G__22949 = (0);
seq__22698_22893 = G__22946;
chunk__22702_22894 = G__22947;
count__22703_22895 = G__22948;
i__22704_22896 = G__22949;
continue;
} else {
var node_22950 = cljs.core.first(seq__22698_22944__$1);
if(cljs.core.not(node_22950.shadow$old)){
var path_match_22951 = shadow.cljs.devtools.client.browser.match_paths(node_22950.getAttribute("href"),path);
if(cljs.core.truth_(path_match_22951)){
var new_link_22952 = (function (){var G__22741 = node_22950.cloneNode(true);
G__22741.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_22951),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__22741;
})();
(node_22950.shadow$old = true);

(new_link_22952.onload = ((function (seq__22698_22893,chunk__22702_22894,count__22703_22895,i__22704_22896,seq__22572,chunk__22574,count__22575,i__22576,new_link_22952,path_match_22951,node_22950,seq__22698_22944__$1,temp__5804__auto___22943,path,map__22571,map__22571__$1,msg,updates,reload_info){
return (function (e){
var seq__22742_22953 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__22744_22954 = null;
var count__22745_22955 = (0);
var i__22746_22956 = (0);
while(true){
if((i__22746_22956 < count__22745_22955)){
var map__22750_22957 = chunk__22744_22954.cljs$core$IIndexed$_nth$arity$2(null,i__22746_22956);
var map__22750_22958__$1 = cljs.core.__destructure_map(map__22750_22957);
var task_22959 = map__22750_22958__$1;
var fn_str_22960 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22750_22958__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_22961 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22750_22958__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_22962 = goog.getObjectByName(fn_str_22960,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_22961)].join(''));

(fn_obj_22962.cljs$core$IFn$_invoke$arity$2 ? fn_obj_22962.cljs$core$IFn$_invoke$arity$2(path,new_link_22952) : fn_obj_22962.call(null,path,new_link_22952));


var G__22963 = seq__22742_22953;
var G__22964 = chunk__22744_22954;
var G__22965 = count__22745_22955;
var G__22966 = (i__22746_22956 + (1));
seq__22742_22953 = G__22963;
chunk__22744_22954 = G__22964;
count__22745_22955 = G__22965;
i__22746_22956 = G__22966;
continue;
} else {
var temp__5804__auto___22967__$1 = cljs.core.seq(seq__22742_22953);
if(temp__5804__auto___22967__$1){
var seq__22742_22968__$1 = temp__5804__auto___22967__$1;
if(cljs.core.chunked_seq_QMARK_(seq__22742_22968__$1)){
var c__5568__auto___22969 = cljs.core.chunk_first(seq__22742_22968__$1);
var G__22970 = cljs.core.chunk_rest(seq__22742_22968__$1);
var G__22971 = c__5568__auto___22969;
var G__22972 = cljs.core.count(c__5568__auto___22969);
var G__22973 = (0);
seq__22742_22953 = G__22970;
chunk__22744_22954 = G__22971;
count__22745_22955 = G__22972;
i__22746_22956 = G__22973;
continue;
} else {
var map__22751_22974 = cljs.core.first(seq__22742_22968__$1);
var map__22751_22975__$1 = cljs.core.__destructure_map(map__22751_22974);
var task_22976 = map__22751_22975__$1;
var fn_str_22977 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22751_22975__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_22978 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22751_22975__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_22979 = goog.getObjectByName(fn_str_22977,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_22978)].join(''));

(fn_obj_22979.cljs$core$IFn$_invoke$arity$2 ? fn_obj_22979.cljs$core$IFn$_invoke$arity$2(path,new_link_22952) : fn_obj_22979.call(null,path,new_link_22952));


var G__22980 = cljs.core.next(seq__22742_22968__$1);
var G__22981 = null;
var G__22982 = (0);
var G__22983 = (0);
seq__22742_22953 = G__22980;
chunk__22744_22954 = G__22981;
count__22745_22955 = G__22982;
i__22746_22956 = G__22983;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_22950);
});})(seq__22698_22893,chunk__22702_22894,count__22703_22895,i__22704_22896,seq__22572,chunk__22574,count__22575,i__22576,new_link_22952,path_match_22951,node_22950,seq__22698_22944__$1,temp__5804__auto___22943,path,map__22571,map__22571__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_22951], 0));

goog.dom.insertSiblingAfter(new_link_22952,node_22950);


var G__22984 = cljs.core.next(seq__22698_22944__$1);
var G__22985 = null;
var G__22986 = (0);
var G__22987 = (0);
seq__22698_22893 = G__22984;
chunk__22702_22894 = G__22985;
count__22703_22895 = G__22986;
i__22704_22896 = G__22987;
continue;
} else {
var G__22988 = cljs.core.next(seq__22698_22944__$1);
var G__22989 = null;
var G__22990 = (0);
var G__22991 = (0);
seq__22698_22893 = G__22988;
chunk__22702_22894 = G__22989;
count__22703_22895 = G__22990;
i__22704_22896 = G__22991;
continue;
}
} else {
var G__22992 = cljs.core.next(seq__22698_22944__$1);
var G__22993 = null;
var G__22994 = (0);
var G__22995 = (0);
seq__22698_22893 = G__22992;
chunk__22702_22894 = G__22993;
count__22703_22895 = G__22994;
i__22704_22896 = G__22995;
continue;
}
}
} else {
}
}
break;
}


var G__22996 = seq__22572;
var G__22997 = chunk__22574;
var G__22998 = count__22575;
var G__22999 = (i__22576 + (1));
seq__22572 = G__22996;
chunk__22574 = G__22997;
count__22575 = G__22998;
i__22576 = G__22999;
continue;
} else {
var G__23000 = seq__22572;
var G__23001 = chunk__22574;
var G__23002 = count__22575;
var G__23003 = (i__22576 + (1));
seq__22572 = G__23000;
chunk__22574 = G__23001;
count__22575 = G__23002;
i__22576 = G__23003;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__22572);
if(temp__5804__auto__){
var seq__22572__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22572__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__22572__$1);
var G__23004 = cljs.core.chunk_rest(seq__22572__$1);
var G__23005 = c__5568__auto__;
var G__23006 = cljs.core.count(c__5568__auto__);
var G__23007 = (0);
seq__22572 = G__23004;
chunk__22574 = G__23005;
count__22575 = G__23006;
i__22576 = G__23007;
continue;
} else {
var path = cljs.core.first(seq__22572__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__22752_23008 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__22756_23009 = null;
var count__22757_23010 = (0);
var i__22758_23011 = (0);
while(true){
if((i__22758_23011 < count__22757_23010)){
var node_23012 = chunk__22756_23009.cljs$core$IIndexed$_nth$arity$2(null,i__22758_23011);
if(cljs.core.not(node_23012.shadow$old)){
var path_match_23013 = shadow.cljs.devtools.client.browser.match_paths(node_23012.getAttribute("href"),path);
if(cljs.core.truth_(path_match_23013)){
var new_link_23014 = (function (){var G__22784 = node_23012.cloneNode(true);
G__22784.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_23013),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__22784;
})();
(node_23012.shadow$old = true);

(new_link_23014.onload = ((function (seq__22752_23008,chunk__22756_23009,count__22757_23010,i__22758_23011,seq__22572,chunk__22574,count__22575,i__22576,new_link_23014,path_match_23013,node_23012,path,seq__22572__$1,temp__5804__auto__,map__22571,map__22571__$1,msg,updates,reload_info){
return (function (e){
var seq__22785_23015 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__22787_23016 = null;
var count__22788_23017 = (0);
var i__22789_23018 = (0);
while(true){
if((i__22789_23018 < count__22788_23017)){
var map__22793_23019 = chunk__22787_23016.cljs$core$IIndexed$_nth$arity$2(null,i__22789_23018);
var map__22793_23020__$1 = cljs.core.__destructure_map(map__22793_23019);
var task_23021 = map__22793_23020__$1;
var fn_str_23022 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22793_23020__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_23023 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22793_23020__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_23024 = goog.getObjectByName(fn_str_23022,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_23023)].join(''));

(fn_obj_23024.cljs$core$IFn$_invoke$arity$2 ? fn_obj_23024.cljs$core$IFn$_invoke$arity$2(path,new_link_23014) : fn_obj_23024.call(null,path,new_link_23014));


var G__23025 = seq__22785_23015;
var G__23026 = chunk__22787_23016;
var G__23027 = count__22788_23017;
var G__23028 = (i__22789_23018 + (1));
seq__22785_23015 = G__23025;
chunk__22787_23016 = G__23026;
count__22788_23017 = G__23027;
i__22789_23018 = G__23028;
continue;
} else {
var temp__5804__auto___23029__$1 = cljs.core.seq(seq__22785_23015);
if(temp__5804__auto___23029__$1){
var seq__22785_23030__$1 = temp__5804__auto___23029__$1;
if(cljs.core.chunked_seq_QMARK_(seq__22785_23030__$1)){
var c__5568__auto___23031 = cljs.core.chunk_first(seq__22785_23030__$1);
var G__23032 = cljs.core.chunk_rest(seq__22785_23030__$1);
var G__23033 = c__5568__auto___23031;
var G__23034 = cljs.core.count(c__5568__auto___23031);
var G__23035 = (0);
seq__22785_23015 = G__23032;
chunk__22787_23016 = G__23033;
count__22788_23017 = G__23034;
i__22789_23018 = G__23035;
continue;
} else {
var map__22794_23036 = cljs.core.first(seq__22785_23030__$1);
var map__22794_23037__$1 = cljs.core.__destructure_map(map__22794_23036);
var task_23038 = map__22794_23037__$1;
var fn_str_23039 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22794_23037__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_23040 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22794_23037__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_23041 = goog.getObjectByName(fn_str_23039,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_23040)].join(''));

(fn_obj_23041.cljs$core$IFn$_invoke$arity$2 ? fn_obj_23041.cljs$core$IFn$_invoke$arity$2(path,new_link_23014) : fn_obj_23041.call(null,path,new_link_23014));


var G__23042 = cljs.core.next(seq__22785_23030__$1);
var G__23043 = null;
var G__23044 = (0);
var G__23045 = (0);
seq__22785_23015 = G__23042;
chunk__22787_23016 = G__23043;
count__22788_23017 = G__23044;
i__22789_23018 = G__23045;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_23012);
});})(seq__22752_23008,chunk__22756_23009,count__22757_23010,i__22758_23011,seq__22572,chunk__22574,count__22575,i__22576,new_link_23014,path_match_23013,node_23012,path,seq__22572__$1,temp__5804__auto__,map__22571,map__22571__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_23013], 0));

goog.dom.insertSiblingAfter(new_link_23014,node_23012);


var G__23046 = seq__22752_23008;
var G__23047 = chunk__22756_23009;
var G__23048 = count__22757_23010;
var G__23049 = (i__22758_23011 + (1));
seq__22752_23008 = G__23046;
chunk__22756_23009 = G__23047;
count__22757_23010 = G__23048;
i__22758_23011 = G__23049;
continue;
} else {
var G__23050 = seq__22752_23008;
var G__23051 = chunk__22756_23009;
var G__23052 = count__22757_23010;
var G__23053 = (i__22758_23011 + (1));
seq__22752_23008 = G__23050;
chunk__22756_23009 = G__23051;
count__22757_23010 = G__23052;
i__22758_23011 = G__23053;
continue;
}
} else {
var G__23054 = seq__22752_23008;
var G__23055 = chunk__22756_23009;
var G__23056 = count__22757_23010;
var G__23057 = (i__22758_23011 + (1));
seq__22752_23008 = G__23054;
chunk__22756_23009 = G__23055;
count__22757_23010 = G__23056;
i__22758_23011 = G__23057;
continue;
}
} else {
var temp__5804__auto___23058__$1 = cljs.core.seq(seq__22752_23008);
if(temp__5804__auto___23058__$1){
var seq__22752_23059__$1 = temp__5804__auto___23058__$1;
if(cljs.core.chunked_seq_QMARK_(seq__22752_23059__$1)){
var c__5568__auto___23060 = cljs.core.chunk_first(seq__22752_23059__$1);
var G__23061 = cljs.core.chunk_rest(seq__22752_23059__$1);
var G__23062 = c__5568__auto___23060;
var G__23063 = cljs.core.count(c__5568__auto___23060);
var G__23064 = (0);
seq__22752_23008 = G__23061;
chunk__22756_23009 = G__23062;
count__22757_23010 = G__23063;
i__22758_23011 = G__23064;
continue;
} else {
var node_23065 = cljs.core.first(seq__22752_23059__$1);
if(cljs.core.not(node_23065.shadow$old)){
var path_match_23066 = shadow.cljs.devtools.client.browser.match_paths(node_23065.getAttribute("href"),path);
if(cljs.core.truth_(path_match_23066)){
var new_link_23067 = (function (){var G__22795 = node_23065.cloneNode(true);
G__22795.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_23066),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__22795;
})();
(node_23065.shadow$old = true);

(new_link_23067.onload = ((function (seq__22752_23008,chunk__22756_23009,count__22757_23010,i__22758_23011,seq__22572,chunk__22574,count__22575,i__22576,new_link_23067,path_match_23066,node_23065,seq__22752_23059__$1,temp__5804__auto___23058__$1,path,seq__22572__$1,temp__5804__auto__,map__22571,map__22571__$1,msg,updates,reload_info){
return (function (e){
var seq__22796_23068 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__22798_23069 = null;
var count__22799_23070 = (0);
var i__22800_23071 = (0);
while(true){
if((i__22800_23071 < count__22799_23070)){
var map__22804_23072 = chunk__22798_23069.cljs$core$IIndexed$_nth$arity$2(null,i__22800_23071);
var map__22804_23073__$1 = cljs.core.__destructure_map(map__22804_23072);
var task_23074 = map__22804_23073__$1;
var fn_str_23075 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22804_23073__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_23076 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22804_23073__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_23077 = goog.getObjectByName(fn_str_23075,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_23076)].join(''));

(fn_obj_23077.cljs$core$IFn$_invoke$arity$2 ? fn_obj_23077.cljs$core$IFn$_invoke$arity$2(path,new_link_23067) : fn_obj_23077.call(null,path,new_link_23067));


var G__23078 = seq__22796_23068;
var G__23079 = chunk__22798_23069;
var G__23080 = count__22799_23070;
var G__23081 = (i__22800_23071 + (1));
seq__22796_23068 = G__23078;
chunk__22798_23069 = G__23079;
count__22799_23070 = G__23080;
i__22800_23071 = G__23081;
continue;
} else {
var temp__5804__auto___23082__$2 = cljs.core.seq(seq__22796_23068);
if(temp__5804__auto___23082__$2){
var seq__22796_23083__$1 = temp__5804__auto___23082__$2;
if(cljs.core.chunked_seq_QMARK_(seq__22796_23083__$1)){
var c__5568__auto___23084 = cljs.core.chunk_first(seq__22796_23083__$1);
var G__23085 = cljs.core.chunk_rest(seq__22796_23083__$1);
var G__23086 = c__5568__auto___23084;
var G__23087 = cljs.core.count(c__5568__auto___23084);
var G__23088 = (0);
seq__22796_23068 = G__23085;
chunk__22798_23069 = G__23086;
count__22799_23070 = G__23087;
i__22800_23071 = G__23088;
continue;
} else {
var map__22805_23089 = cljs.core.first(seq__22796_23083__$1);
var map__22805_23090__$1 = cljs.core.__destructure_map(map__22805_23089);
var task_23091 = map__22805_23090__$1;
var fn_str_23092 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22805_23090__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_23093 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22805_23090__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_23094 = goog.getObjectByName(fn_str_23092,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_23093)].join(''));

(fn_obj_23094.cljs$core$IFn$_invoke$arity$2 ? fn_obj_23094.cljs$core$IFn$_invoke$arity$2(path,new_link_23067) : fn_obj_23094.call(null,path,new_link_23067));


var G__23095 = cljs.core.next(seq__22796_23083__$1);
var G__23096 = null;
var G__23097 = (0);
var G__23098 = (0);
seq__22796_23068 = G__23095;
chunk__22798_23069 = G__23096;
count__22799_23070 = G__23097;
i__22800_23071 = G__23098;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_23065);
});})(seq__22752_23008,chunk__22756_23009,count__22757_23010,i__22758_23011,seq__22572,chunk__22574,count__22575,i__22576,new_link_23067,path_match_23066,node_23065,seq__22752_23059__$1,temp__5804__auto___23058__$1,path,seq__22572__$1,temp__5804__auto__,map__22571,map__22571__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_23066], 0));

goog.dom.insertSiblingAfter(new_link_23067,node_23065);


var G__23099 = cljs.core.next(seq__22752_23059__$1);
var G__23100 = null;
var G__23101 = (0);
var G__23102 = (0);
seq__22752_23008 = G__23099;
chunk__22756_23009 = G__23100;
count__22757_23010 = G__23101;
i__22758_23011 = G__23102;
continue;
} else {
var G__23103 = cljs.core.next(seq__22752_23059__$1);
var G__23104 = null;
var G__23105 = (0);
var G__23106 = (0);
seq__22752_23008 = G__23103;
chunk__22756_23009 = G__23104;
count__22757_23010 = G__23105;
i__22758_23011 = G__23106;
continue;
}
} else {
var G__23107 = cljs.core.next(seq__22752_23059__$1);
var G__23108 = null;
var G__23109 = (0);
var G__23110 = (0);
seq__22752_23008 = G__23107;
chunk__22756_23009 = G__23108;
count__22757_23010 = G__23109;
i__22758_23011 = G__23110;
continue;
}
}
} else {
}
}
break;
}


var G__23111 = cljs.core.next(seq__22572__$1);
var G__23112 = null;
var G__23113 = (0);
var G__23114 = (0);
seq__22572 = G__23111;
chunk__22574 = G__23112;
count__22575 = G__23113;
i__22576 = G__23114;
continue;
} else {
var G__23115 = cljs.core.next(seq__22572__$1);
var G__23116 = null;
var G__23117 = (0);
var G__23118 = (0);
seq__22572 = G__23115;
chunk__22574 = G__23116;
count__22575 = G__23117;
i__22576 = G__23118;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__22806){
var map__22807 = p__22806;
var map__22807__$1 = cljs.core.__destructure_map(map__22807);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22807__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__22808){
var map__22809 = p__22808;
var map__22809__$1 = cljs.core.__destructure_map(map__22809);
var _ = map__22809__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22809__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__22810,done,error){
var map__22811 = p__22810;
var map__22811__$1 = cljs.core.__destructure_map(map__22811);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22811__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__22812,done,error){
var map__22813 = p__22812;
var map__22813__$1 = cljs.core.__destructure_map(map__22813);
var msg = map__22813__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22813__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22813__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22813__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__22814){
var map__22815 = p__22814;
var map__22815__$1 = cljs.core.__destructure_map(map__22815);
var src = map__22815__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22815__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5043__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5043__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__22816 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__22816) : done.call(null,G__22816));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__22817){
var map__22818 = p__22817;
var map__22818__$1 = cljs.core.__destructure_map(map__22818);
var msg__$1 = map__22818__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22818__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e22819){var ex = e22819;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__22820){
var map__22821 = p__22820;
var map__22821__$1 = cljs.core.__destructure_map(map__22821);
var env = map__22821__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22821__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__22822){
var map__22823 = p__22822;
var map__22823__$1 = cljs.core.__destructure_map(map__22823);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22823__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22823__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__22824){
var map__22825 = p__22824;
var map__22825__$1 = cljs.core.__destructure_map(map__22825);
var svc = map__22825__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22825__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
