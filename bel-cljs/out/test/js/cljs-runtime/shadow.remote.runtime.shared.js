goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
return shadow.remote.runtime.api.relay_msg(runtime,msg);
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__16887,res){
var map__16889 = p__16887;
var map__16889__$1 = cljs.core.__destructure_map(map__16889);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16889__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16889__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__16891 = res;
var G__16891__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__16891,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__16891);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__16891__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__16891__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__16901 = arguments.length;
switch (G__16901) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__16918,msg,handlers,timeout_after_ms){
var map__16919 = p__16918;
var map__16919__$1 = cljs.core.__destructure_map(map__16919);
var runtime = map__16919__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16919__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___17181 = arguments.length;
var i__5770__auto___17182 = (0);
while(true){
if((i__5770__auto___17182 < len__5769__auto___17181)){
args__5775__auto__.push((arguments[i__5770__auto___17182]));

var G__17183 = (i__5770__auto___17182 + (1));
i__5770__auto___17182 = G__17183;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__16933,ev,args){
var map__16934 = p__16933;
var map__16934__$1 = cljs.core.__destructure_map(map__16934);
var runtime = map__16934__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16934__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__16935 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__16938 = null;
var count__16940 = (0);
var i__16941 = (0);
while(true){
if((i__16941 < count__16940)){
var ext = chunk__16938.cljs$core$IIndexed$_nth$arity$2(null,i__16941);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__17185 = seq__16935;
var G__17186 = chunk__16938;
var G__17187 = count__16940;
var G__17188 = (i__16941 + (1));
seq__16935 = G__17185;
chunk__16938 = G__17186;
count__16940 = G__17187;
i__16941 = G__17188;
continue;
} else {
var G__17189 = seq__16935;
var G__17190 = chunk__16938;
var G__17191 = count__16940;
var G__17192 = (i__16941 + (1));
seq__16935 = G__17189;
chunk__16938 = G__17190;
count__16940 = G__17191;
i__16941 = G__17192;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__16935);
if(temp__5804__auto__){
var seq__16935__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16935__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__16935__$1);
var G__17197 = cljs.core.chunk_rest(seq__16935__$1);
var G__17198 = c__5568__auto__;
var G__17199 = cljs.core.count(c__5568__auto__);
var G__17200 = (0);
seq__16935 = G__17197;
chunk__16938 = G__17198;
count__16940 = G__17199;
i__16941 = G__17200;
continue;
} else {
var ext = cljs.core.first(seq__16935__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__17203 = cljs.core.next(seq__16935__$1);
var G__17204 = null;
var G__17205 = (0);
var G__17206 = (0);
seq__16935 = G__17203;
chunk__16938 = G__17204;
count__16940 = G__17205;
i__16941 = G__17206;
continue;
} else {
var G__17207 = cljs.core.next(seq__16935__$1);
var G__17208 = null;
var G__17209 = (0);
var G__17210 = (0);
seq__16935 = G__17207;
chunk__16938 = G__17208;
count__16940 = G__17209;
i__16941 = G__17210;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq16923){
var G__16924 = cljs.core.first(seq16923);
var seq16923__$1 = cljs.core.next(seq16923);
var G__16925 = cljs.core.first(seq16923__$1);
var seq16923__$2 = cljs.core.next(seq16923__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16924,G__16925,seq16923__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__16979,p__16980){
var map__16986 = p__16979;
var map__16986__$1 = cljs.core.__destructure_map(map__16986);
var runtime = map__16986__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16986__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__16987 = p__16980;
var map__16987__$1 = cljs.core.__destructure_map(map__16987);
var msg = map__16987__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16987__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__16988 = cljs.core.deref(state_ref);
var map__16988__$1 = cljs.core.__destructure_map(map__16988);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16988__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16988__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__17002){
var map__17003 = p__17002;
var map__17003__$1 = cljs.core.__destructure_map(map__17003);
var runtime = map__17003__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17003__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5045__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__17018,msg){
var map__17021 = p__17018;
var map__17021__$1 = cljs.core.__destructure_map(map__17021);
var runtime = map__17021__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17021__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__17070,key,p__17071){
var map__17072 = p__17070;
var map__17072__$1 = cljs.core.__destructure_map(map__17072);
var state = map__17072__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17072__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__17073 = p__17071;
var map__17073__$1 = cljs.core.__destructure_map(map__17073);
var spec = map__17073__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17073__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__17081,key,spec){
var map__17082 = p__17081;
var map__17082__$1 = cljs.core.__destructure_map(map__17082);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17082__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__17086_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__17086_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__17087_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__17087_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__17091_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__17091_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__17092_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__17092_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__17093_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__17093_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__17107,key){
var map__17108 = p__17107;
var map__17108__$1 = cljs.core.__destructure_map(map__17108);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17108__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__17111,msg){
var map__17113 = p__17111;
var map__17113__$1 = cljs.core.__destructure_map(map__17113);
var runtime = map__17113__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17113__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__17123,p__17124){
var map__17125 = p__17123;
var map__17125__$1 = cljs.core.__destructure_map(map__17125);
var runtime = map__17125__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17125__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__17126 = p__17124;
var map__17126__$1 = cljs.core.__destructure_map(map__17126);
var msg = map__17126__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17126__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17126__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__17142 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__17144 = null;
var count__17145 = (0);
var i__17146 = (0);
while(true){
if((i__17146 < count__17145)){
var map__17156 = chunk__17144.cljs$core$IIndexed$_nth$arity$2(null,i__17146);
var map__17156__$1 = cljs.core.__destructure_map(map__17156);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17156__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__17267 = seq__17142;
var G__17268 = chunk__17144;
var G__17269 = count__17145;
var G__17270 = (i__17146 + (1));
seq__17142 = G__17267;
chunk__17144 = G__17268;
count__17145 = G__17269;
i__17146 = G__17270;
continue;
} else {
var G__17271 = seq__17142;
var G__17272 = chunk__17144;
var G__17273 = count__17145;
var G__17274 = (i__17146 + (1));
seq__17142 = G__17271;
chunk__17144 = G__17272;
count__17145 = G__17273;
i__17146 = G__17274;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__17142);
if(temp__5804__auto__){
var seq__17142__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17142__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__17142__$1);
var G__17276 = cljs.core.chunk_rest(seq__17142__$1);
var G__17277 = c__5568__auto__;
var G__17278 = cljs.core.count(c__5568__auto__);
var G__17279 = (0);
seq__17142 = G__17276;
chunk__17144 = G__17277;
count__17145 = G__17278;
i__17146 = G__17279;
continue;
} else {
var map__17163 = cljs.core.first(seq__17142__$1);
var map__17163__$1 = cljs.core.__destructure_map(map__17163);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17163__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__17282 = cljs.core.next(seq__17142__$1);
var G__17283 = null;
var G__17284 = (0);
var G__17285 = (0);
seq__17142 = G__17282;
chunk__17144 = G__17283;
count__17145 = G__17284;
i__17146 = G__17285;
continue;
} else {
var G__17287 = cljs.core.next(seq__17142__$1);
var G__17288 = null;
var G__17289 = (0);
var G__17290 = (0);
seq__17142 = G__17287;
chunk__17144 = G__17288;
count__17145 = G__17289;
i__17146 = G__17290;
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

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
