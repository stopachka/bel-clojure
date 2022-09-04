goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__20985,p__20986){
var map__20987 = p__20985;
var map__20987__$1 = cljs.core.__destructure_map(map__20987);
var svc = map__20987__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20987__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20987__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20987__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__20988 = p__20986;
var map__20988__$1 = cljs.core.__destructure_map(map__20988);
var msg = map__20988__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20988__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20988__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20988__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__20988__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history__$1)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__20993,p__20994){
var map__20995 = p__20993;
var map__20995__$1 = cljs.core.__destructure_map(map__20995);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20995__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__20996 = p__20994;
var map__20996__$1 = cljs.core.__destructure_map(map__20996);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20996__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__21002,p__21003){
var map__21004 = p__21002;
var map__21004__$1 = cljs.core.__destructure_map(map__21004);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21004__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21004__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__21005 = p__21003;
var map__21005__$1 = cljs.core.__destructure_map(map__21005);
var msg = map__21005__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__21005__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__21014,tid){
var map__21015 = p__21014;
var map__21015__$1 = cljs.core.__destructure_map(map__21015);
var svc = map__21015__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21015__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__21025 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__21026 = null;
var count__21027 = (0);
var i__21028 = (0);
while(true){
if((i__21028 < count__21027)){
var vec__21037 = chunk__21026.cljs$core$IIndexed$_nth$arity$2(null,i__21028);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21037,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21037,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__21058 = seq__21025;
var G__21059 = chunk__21026;
var G__21060 = count__21027;
var G__21061 = (i__21028 + (1));
seq__21025 = G__21058;
chunk__21026 = G__21059;
count__21027 = G__21060;
i__21028 = G__21061;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__21025);
if(temp__5804__auto__){
var seq__21025__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21025__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__21025__$1);
var G__21062 = cljs.core.chunk_rest(seq__21025__$1);
var G__21063 = c__5568__auto__;
var G__21064 = cljs.core.count(c__5568__auto__);
var G__21065 = (0);
seq__21025 = G__21062;
chunk__21026 = G__21063;
count__21027 = G__21064;
i__21028 = G__21065;
continue;
} else {
var vec__21042 = cljs.core.first(seq__21025__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21042,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21042,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__21066 = cljs.core.next(seq__21025__$1);
var G__21067 = null;
var G__21068 = (0);
var G__21069 = (0);
seq__21025 = G__21066;
chunk__21026 = G__21067;
count__21027 = G__21068;
i__21028 = G__21069;
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
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__21016_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__21016_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__21017_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__21017_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__21018_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__21018_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__21019_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__21019_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__21046){
var map__21047 = p__21046;
var map__21047__$1 = cljs.core.__destructure_map(map__21047);
var svc = map__21047__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21047__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21047__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
