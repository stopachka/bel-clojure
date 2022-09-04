goog.provide('cljs_test_display.notify');
goog.scope(function(){
  cljs_test_display.notify.goog$module$goog$object = goog.module.get('goog.object');
});
cljs_test_display.notify.notification = cljs_test_display.notify.goog$module$goog$object.get(goog.global,"Notification");
cljs_test_display.notify.with_permission = (function cljs_test_display$notify$with_permission(perm,thunk){
if(cljs.core.truth_(cljs_test_display.notify.notification)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(perm,cljs_test_display.notify.goog$module$goog$object.get(cljs_test_display.notify.notification,"permission"))){
return (thunk.cljs$core$IFn$_invoke$arity$0 ? thunk.cljs$core$IFn$_invoke$arity$0() : thunk.call(null));
} else {
return null;
}
} else {
return null;
}
});
cljs_test_display.notify.ask_permission_BANG_ = (function cljs_test_display$notify$ask_permission_BANG_(){
return cljs_test_display.notify.with_permission("default",(function (){
return cljs_test_display.notify.notification.requestPermission();
}));
});
cljs_test_display.notify.red_url = cljs_test_display.favicon.color_data_url("#d00",(512));
cljs_test_display.notify.green_url = cljs_test_display.favicon.color_data_url("#0d0",(512));
cljs_test_display.notify.success = (function cljs_test_display$notify$success(){
return cljs_test_display.notify.with_permission("granted",(function (){
return (new Notification("All CLJS Tests Passed",({"icon": cljs_test_display.notify.green_url, "silent": true})));
}));
});
cljs_test_display.notify.failure = (function cljs_test_display$notify$failure(p__22337){
var map__22338 = p__22337;
var map__22338__$1 = cljs.core.__destructure_map(map__22338);
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22338__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var fail = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22338__$1,new cljs.core.Keyword(null,"fail","fail",1706214930));
return cljs_test_display.notify.with_permission("granted",(function (){
return (new Notification("CLJS Tests Failed",({"icon": cljs_test_display.notify.red_url, "silent": true, "body": [(cljs.core.truth_(fail)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(fail)," failures "].join(''):null),(cljs.core.truth_(error)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(error)," errors"].join(''):null)].join('')})));
}));
});

//# sourceMappingURL=cljs_test_display.notify.js.map
