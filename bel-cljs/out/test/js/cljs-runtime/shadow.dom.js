goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_19198 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_19198(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_19199 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_19199(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__17613 = coll;
var G__17614 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__17613,G__17614) : shadow.dom.lazy_native_coll_seq.call(null,G__17613,G__17614));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5045__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__17646 = arguments.length;
switch (G__17646) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__17676 = arguments.length;
switch (G__17676) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__17681 = arguments.length;
switch (G__17681) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__17687 = arguments.length;
switch (G__17687) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__17710 = arguments.length;
switch (G__17710) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__17724 = arguments.length;
switch (G__17724) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e17753){if((e17753 instanceof Object)){
var e = e17753;
return console.log("didnt support attachEvent",el,e);
} else {
throw e17753;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__17769 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__17770 = null;
var count__17771 = (0);
var i__17772 = (0);
while(true){
if((i__17772 < count__17771)){
var el = chunk__17770.cljs$core$IIndexed$_nth$arity$2(null,i__17772);
var handler_19208__$1 = ((function (seq__17769,chunk__17770,count__17771,i__17772,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__17769,chunk__17770,count__17771,i__17772,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_19208__$1);


var G__19209 = seq__17769;
var G__19210 = chunk__17770;
var G__19211 = count__17771;
var G__19212 = (i__17772 + (1));
seq__17769 = G__19209;
chunk__17770 = G__19210;
count__17771 = G__19211;
i__17772 = G__19212;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__17769);
if(temp__5804__auto__){
var seq__17769__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17769__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__17769__$1);
var G__19213 = cljs.core.chunk_rest(seq__17769__$1);
var G__19214 = c__5568__auto__;
var G__19215 = cljs.core.count(c__5568__auto__);
var G__19216 = (0);
seq__17769 = G__19213;
chunk__17770 = G__19214;
count__17771 = G__19215;
i__17772 = G__19216;
continue;
} else {
var el = cljs.core.first(seq__17769__$1);
var handler_19217__$1 = ((function (seq__17769,chunk__17770,count__17771,i__17772,el,seq__17769__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__17769,chunk__17770,count__17771,i__17772,el,seq__17769__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_19217__$1);


var G__19218 = cljs.core.next(seq__17769__$1);
var G__19219 = null;
var G__19220 = (0);
var G__19221 = (0);
seq__17769 = G__19218;
chunk__17770 = G__19219;
count__17771 = G__19220;
i__17772 = G__19221;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__17790 = arguments.length;
switch (G__17790) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__17817 = cljs.core.seq(events);
var chunk__17819 = null;
var count__17820 = (0);
var i__17821 = (0);
while(true){
if((i__17821 < count__17820)){
var vec__17834 = chunk__17819.cljs$core$IIndexed$_nth$arity$2(null,i__17821);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17834,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17834,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__19227 = seq__17817;
var G__19228 = chunk__17819;
var G__19229 = count__17820;
var G__19230 = (i__17821 + (1));
seq__17817 = G__19227;
chunk__17819 = G__19228;
count__17820 = G__19229;
i__17821 = G__19230;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__17817);
if(temp__5804__auto__){
var seq__17817__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17817__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__17817__$1);
var G__19231 = cljs.core.chunk_rest(seq__17817__$1);
var G__19232 = c__5568__auto__;
var G__19233 = cljs.core.count(c__5568__auto__);
var G__19234 = (0);
seq__17817 = G__19231;
chunk__17819 = G__19232;
count__17820 = G__19233;
i__17821 = G__19234;
continue;
} else {
var vec__17846 = cljs.core.first(seq__17817__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17846,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17846,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__19235 = cljs.core.next(seq__17817__$1);
var G__19236 = null;
var G__19237 = (0);
var G__19238 = (0);
seq__17817 = G__19235;
chunk__17819 = G__19236;
count__17820 = G__19237;
i__17821 = G__19238;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__17862 = cljs.core.seq(styles);
var chunk__17863 = null;
var count__17864 = (0);
var i__17865 = (0);
while(true){
if((i__17865 < count__17864)){
var vec__17886 = chunk__17863.cljs$core$IIndexed$_nth$arity$2(null,i__17865);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17886,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17886,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__19239 = seq__17862;
var G__19240 = chunk__17863;
var G__19241 = count__17864;
var G__19242 = (i__17865 + (1));
seq__17862 = G__19239;
chunk__17863 = G__19240;
count__17864 = G__19241;
i__17865 = G__19242;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__17862);
if(temp__5804__auto__){
var seq__17862__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17862__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__17862__$1);
var G__19243 = cljs.core.chunk_rest(seq__17862__$1);
var G__19244 = c__5568__auto__;
var G__19245 = cljs.core.count(c__5568__auto__);
var G__19246 = (0);
seq__17862 = G__19243;
chunk__17863 = G__19244;
count__17864 = G__19245;
i__17865 = G__19246;
continue;
} else {
var vec__17895 = cljs.core.first(seq__17862__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17895,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17895,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__19248 = cljs.core.next(seq__17862__$1);
var G__19249 = null;
var G__19250 = (0);
var G__19251 = (0);
seq__17862 = G__19248;
chunk__17863 = G__19249;
count__17864 = G__19250;
i__17865 = G__19251;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__17904_19253 = key;
var G__17904_19254__$1 = (((G__17904_19253 instanceof cljs.core.Keyword))?G__17904_19253.fqn:null);
switch (G__17904_19254__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_19256 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5045__auto__ = goog.string.startsWith(ks_19256,"data-");
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return goog.string.startsWith(ks_19256,"aria-");
}
})())){
el.setAttribute(ks_19256,value);
} else {
(el[ks_19256] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__17929){
var map__17930 = p__17929;
var map__17930__$1 = cljs.core.__destructure_map(map__17930);
var props = map__17930__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17930__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__17932 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17932,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17932,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17932,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__17939 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__17939,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__17939;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__17947 = arguments.length;
switch (G__17947) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__17956){
var vec__17957 = p__17956;
var seq__17958 = cljs.core.seq(vec__17957);
var first__17959 = cljs.core.first(seq__17958);
var seq__17958__$1 = cljs.core.next(seq__17958);
var nn = first__17959;
var first__17959__$1 = cljs.core.first(seq__17958__$1);
var seq__17958__$2 = cljs.core.next(seq__17958__$1);
var np = first__17959__$1;
var nc = seq__17958__$2;
var node = vec__17957;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__17961 = nn;
var G__17962 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__17961,G__17962) : create_fn.call(null,G__17961,G__17962));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__17963 = nn;
var G__17964 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__17963,G__17964) : create_fn.call(null,G__17963,G__17964));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__17965 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17965,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17965,(1),null);
var seq__17969_19263 = cljs.core.seq(node_children);
var chunk__17970_19264 = null;
var count__17971_19265 = (0);
var i__17972_19266 = (0);
while(true){
if((i__17972_19266 < count__17971_19265)){
var child_struct_19267 = chunk__17970_19264.cljs$core$IIndexed$_nth$arity$2(null,i__17972_19266);
var children_19268 = shadow.dom.dom_node(child_struct_19267);
if(cljs.core.seq_QMARK_(children_19268)){
var seq__18005_19269 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_19268));
var chunk__18007_19270 = null;
var count__18008_19271 = (0);
var i__18009_19272 = (0);
while(true){
if((i__18009_19272 < count__18008_19271)){
var child_19273 = chunk__18007_19270.cljs$core$IIndexed$_nth$arity$2(null,i__18009_19272);
if(cljs.core.truth_(child_19273)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_19273);


var G__19274 = seq__18005_19269;
var G__19275 = chunk__18007_19270;
var G__19276 = count__18008_19271;
var G__19277 = (i__18009_19272 + (1));
seq__18005_19269 = G__19274;
chunk__18007_19270 = G__19275;
count__18008_19271 = G__19276;
i__18009_19272 = G__19277;
continue;
} else {
var G__19278 = seq__18005_19269;
var G__19279 = chunk__18007_19270;
var G__19280 = count__18008_19271;
var G__19281 = (i__18009_19272 + (1));
seq__18005_19269 = G__19278;
chunk__18007_19270 = G__19279;
count__18008_19271 = G__19280;
i__18009_19272 = G__19281;
continue;
}
} else {
var temp__5804__auto___19282 = cljs.core.seq(seq__18005_19269);
if(temp__5804__auto___19282){
var seq__18005_19283__$1 = temp__5804__auto___19282;
if(cljs.core.chunked_seq_QMARK_(seq__18005_19283__$1)){
var c__5568__auto___19284 = cljs.core.chunk_first(seq__18005_19283__$1);
var G__19285 = cljs.core.chunk_rest(seq__18005_19283__$1);
var G__19286 = c__5568__auto___19284;
var G__19287 = cljs.core.count(c__5568__auto___19284);
var G__19288 = (0);
seq__18005_19269 = G__19285;
chunk__18007_19270 = G__19286;
count__18008_19271 = G__19287;
i__18009_19272 = G__19288;
continue;
} else {
var child_19289 = cljs.core.first(seq__18005_19283__$1);
if(cljs.core.truth_(child_19289)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_19289);


var G__19290 = cljs.core.next(seq__18005_19283__$1);
var G__19291 = null;
var G__19292 = (0);
var G__19293 = (0);
seq__18005_19269 = G__19290;
chunk__18007_19270 = G__19291;
count__18008_19271 = G__19292;
i__18009_19272 = G__19293;
continue;
} else {
var G__19294 = cljs.core.next(seq__18005_19283__$1);
var G__19295 = null;
var G__19296 = (0);
var G__19297 = (0);
seq__18005_19269 = G__19294;
chunk__18007_19270 = G__19295;
count__18008_19271 = G__19296;
i__18009_19272 = G__19297;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_19268);
}


var G__19303 = seq__17969_19263;
var G__19304 = chunk__17970_19264;
var G__19305 = count__17971_19265;
var G__19306 = (i__17972_19266 + (1));
seq__17969_19263 = G__19303;
chunk__17970_19264 = G__19304;
count__17971_19265 = G__19305;
i__17972_19266 = G__19306;
continue;
} else {
var temp__5804__auto___19307 = cljs.core.seq(seq__17969_19263);
if(temp__5804__auto___19307){
var seq__17969_19308__$1 = temp__5804__auto___19307;
if(cljs.core.chunked_seq_QMARK_(seq__17969_19308__$1)){
var c__5568__auto___19311 = cljs.core.chunk_first(seq__17969_19308__$1);
var G__19312 = cljs.core.chunk_rest(seq__17969_19308__$1);
var G__19313 = c__5568__auto___19311;
var G__19314 = cljs.core.count(c__5568__auto___19311);
var G__19315 = (0);
seq__17969_19263 = G__19312;
chunk__17970_19264 = G__19313;
count__17971_19265 = G__19314;
i__17972_19266 = G__19315;
continue;
} else {
var child_struct_19316 = cljs.core.first(seq__17969_19308__$1);
var children_19317 = shadow.dom.dom_node(child_struct_19316);
if(cljs.core.seq_QMARK_(children_19317)){
var seq__18026_19319 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_19317));
var chunk__18028_19320 = null;
var count__18029_19321 = (0);
var i__18030_19322 = (0);
while(true){
if((i__18030_19322 < count__18029_19321)){
var child_19323 = chunk__18028_19320.cljs$core$IIndexed$_nth$arity$2(null,i__18030_19322);
if(cljs.core.truth_(child_19323)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_19323);


var G__19324 = seq__18026_19319;
var G__19325 = chunk__18028_19320;
var G__19326 = count__18029_19321;
var G__19327 = (i__18030_19322 + (1));
seq__18026_19319 = G__19324;
chunk__18028_19320 = G__19325;
count__18029_19321 = G__19326;
i__18030_19322 = G__19327;
continue;
} else {
var G__19329 = seq__18026_19319;
var G__19330 = chunk__18028_19320;
var G__19331 = count__18029_19321;
var G__19332 = (i__18030_19322 + (1));
seq__18026_19319 = G__19329;
chunk__18028_19320 = G__19330;
count__18029_19321 = G__19331;
i__18030_19322 = G__19332;
continue;
}
} else {
var temp__5804__auto___19333__$1 = cljs.core.seq(seq__18026_19319);
if(temp__5804__auto___19333__$1){
var seq__18026_19334__$1 = temp__5804__auto___19333__$1;
if(cljs.core.chunked_seq_QMARK_(seq__18026_19334__$1)){
var c__5568__auto___19335 = cljs.core.chunk_first(seq__18026_19334__$1);
var G__19336 = cljs.core.chunk_rest(seq__18026_19334__$1);
var G__19337 = c__5568__auto___19335;
var G__19338 = cljs.core.count(c__5568__auto___19335);
var G__19339 = (0);
seq__18026_19319 = G__19336;
chunk__18028_19320 = G__19337;
count__18029_19321 = G__19338;
i__18030_19322 = G__19339;
continue;
} else {
var child_19340 = cljs.core.first(seq__18026_19334__$1);
if(cljs.core.truth_(child_19340)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_19340);


var G__19341 = cljs.core.next(seq__18026_19334__$1);
var G__19342 = null;
var G__19343 = (0);
var G__19344 = (0);
seq__18026_19319 = G__19341;
chunk__18028_19320 = G__19342;
count__18029_19321 = G__19343;
i__18030_19322 = G__19344;
continue;
} else {
var G__19346 = cljs.core.next(seq__18026_19334__$1);
var G__19347 = null;
var G__19348 = (0);
var G__19349 = (0);
seq__18026_19319 = G__19346;
chunk__18028_19320 = G__19347;
count__18029_19321 = G__19348;
i__18030_19322 = G__19349;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_19317);
}


var G__19350 = cljs.core.next(seq__17969_19308__$1);
var G__19351 = null;
var G__19352 = (0);
var G__19353 = (0);
seq__17969_19263 = G__19350;
chunk__17970_19264 = G__19351;
count__17971_19265 = G__19352;
i__17972_19266 = G__19353;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__18078 = cljs.core.seq(node);
var chunk__18079 = null;
var count__18080 = (0);
var i__18081 = (0);
while(true){
if((i__18081 < count__18080)){
var n = chunk__18079.cljs$core$IIndexed$_nth$arity$2(null,i__18081);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__19357 = seq__18078;
var G__19358 = chunk__18079;
var G__19359 = count__18080;
var G__19360 = (i__18081 + (1));
seq__18078 = G__19357;
chunk__18079 = G__19358;
count__18080 = G__19359;
i__18081 = G__19360;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__18078);
if(temp__5804__auto__){
var seq__18078__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18078__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__18078__$1);
var G__19361 = cljs.core.chunk_rest(seq__18078__$1);
var G__19362 = c__5568__auto__;
var G__19363 = cljs.core.count(c__5568__auto__);
var G__19364 = (0);
seq__18078 = G__19361;
chunk__18079 = G__19362;
count__18080 = G__19363;
i__18081 = G__19364;
continue;
} else {
var n = cljs.core.first(seq__18078__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__19366 = cljs.core.next(seq__18078__$1);
var G__19367 = null;
var G__19368 = (0);
var G__19369 = (0);
seq__18078 = G__19366;
chunk__18079 = G__19367;
count__18080 = G__19368;
i__18081 = G__19369;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__18113 = arguments.length;
switch (G__18113) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__18136 = arguments.length;
switch (G__18136) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__18159 = arguments.length;
switch (G__18159) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5045__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5775__auto__ = [];
var len__5769__auto___19387 = arguments.length;
var i__5770__auto___19394 = (0);
while(true){
if((i__5770__auto___19394 < len__5769__auto___19387)){
args__5775__auto__.push((arguments[i__5770__auto___19394]));

var G__19395 = (i__5770__auto___19394 + (1));
i__5770__auto___19394 = G__19395;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__18221_19396 = cljs.core.seq(nodes);
var chunk__18222_19397 = null;
var count__18223_19398 = (0);
var i__18224_19399 = (0);
while(true){
if((i__18224_19399 < count__18223_19398)){
var node_19400 = chunk__18222_19397.cljs$core$IIndexed$_nth$arity$2(null,i__18224_19399);
fragment.appendChild(shadow.dom._to_dom(node_19400));


var G__19407 = seq__18221_19396;
var G__19408 = chunk__18222_19397;
var G__19409 = count__18223_19398;
var G__19410 = (i__18224_19399 + (1));
seq__18221_19396 = G__19407;
chunk__18222_19397 = G__19408;
count__18223_19398 = G__19409;
i__18224_19399 = G__19410;
continue;
} else {
var temp__5804__auto___19411 = cljs.core.seq(seq__18221_19396);
if(temp__5804__auto___19411){
var seq__18221_19412__$1 = temp__5804__auto___19411;
if(cljs.core.chunked_seq_QMARK_(seq__18221_19412__$1)){
var c__5568__auto___19413 = cljs.core.chunk_first(seq__18221_19412__$1);
var G__19414 = cljs.core.chunk_rest(seq__18221_19412__$1);
var G__19415 = c__5568__auto___19413;
var G__19416 = cljs.core.count(c__5568__auto___19413);
var G__19417 = (0);
seq__18221_19396 = G__19414;
chunk__18222_19397 = G__19415;
count__18223_19398 = G__19416;
i__18224_19399 = G__19417;
continue;
} else {
var node_19418 = cljs.core.first(seq__18221_19412__$1);
fragment.appendChild(shadow.dom._to_dom(node_19418));


var G__19419 = cljs.core.next(seq__18221_19412__$1);
var G__19420 = null;
var G__19421 = (0);
var G__19422 = (0);
seq__18221_19396 = G__19419;
chunk__18222_19397 = G__19420;
count__18223_19398 = G__19421;
i__18224_19399 = G__19422;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq18209){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18209));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__18268_19423 = cljs.core.seq(scripts);
var chunk__18269_19424 = null;
var count__18270_19425 = (0);
var i__18271_19426 = (0);
while(true){
if((i__18271_19426 < count__18270_19425)){
var vec__18311_19427 = chunk__18269_19424.cljs$core$IIndexed$_nth$arity$2(null,i__18271_19426);
var script_tag_19428 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18311_19427,(0),null);
var script_body_19429 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18311_19427,(1),null);
eval(script_body_19429);


var G__19430 = seq__18268_19423;
var G__19431 = chunk__18269_19424;
var G__19432 = count__18270_19425;
var G__19433 = (i__18271_19426 + (1));
seq__18268_19423 = G__19430;
chunk__18269_19424 = G__19431;
count__18270_19425 = G__19432;
i__18271_19426 = G__19433;
continue;
} else {
var temp__5804__auto___19434 = cljs.core.seq(seq__18268_19423);
if(temp__5804__auto___19434){
var seq__18268_19435__$1 = temp__5804__auto___19434;
if(cljs.core.chunked_seq_QMARK_(seq__18268_19435__$1)){
var c__5568__auto___19436 = cljs.core.chunk_first(seq__18268_19435__$1);
var G__19441 = cljs.core.chunk_rest(seq__18268_19435__$1);
var G__19442 = c__5568__auto___19436;
var G__19443 = cljs.core.count(c__5568__auto___19436);
var G__19444 = (0);
seq__18268_19423 = G__19441;
chunk__18269_19424 = G__19442;
count__18270_19425 = G__19443;
i__18271_19426 = G__19444;
continue;
} else {
var vec__18323_19445 = cljs.core.first(seq__18268_19435__$1);
var script_tag_19446 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18323_19445,(0),null);
var script_body_19447 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18323_19445,(1),null);
eval(script_body_19447);


var G__19454 = cljs.core.next(seq__18268_19435__$1);
var G__19455 = null;
var G__19456 = (0);
var G__19457 = (0);
seq__18268_19423 = G__19454;
chunk__18269_19424 = G__19455;
count__18270_19425 = G__19456;
i__18271_19426 = G__19457;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__18336){
var vec__18337 = p__18336;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18337,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18337,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__18365 = arguments.length;
switch (G__18365) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__18425 = cljs.core.seq(style_keys);
var chunk__18426 = null;
var count__18427 = (0);
var i__18428 = (0);
while(true){
if((i__18428 < count__18427)){
var it = chunk__18426.cljs$core$IIndexed$_nth$arity$2(null,i__18428);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__19470 = seq__18425;
var G__19471 = chunk__18426;
var G__19472 = count__18427;
var G__19473 = (i__18428 + (1));
seq__18425 = G__19470;
chunk__18426 = G__19471;
count__18427 = G__19472;
i__18428 = G__19473;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__18425);
if(temp__5804__auto__){
var seq__18425__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18425__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__18425__$1);
var G__19474 = cljs.core.chunk_rest(seq__18425__$1);
var G__19475 = c__5568__auto__;
var G__19476 = cljs.core.count(c__5568__auto__);
var G__19477 = (0);
seq__18425 = G__19474;
chunk__18426 = G__19475;
count__18427 = G__19476;
i__18428 = G__19477;
continue;
} else {
var it = cljs.core.first(seq__18425__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__19478 = cljs.core.next(seq__18425__$1);
var G__19479 = null;
var G__19480 = (0);
var G__19481 = (0);
seq__18425 = G__19478;
chunk__18426 = G__19479;
count__18427 = G__19480;
i__18428 = G__19481;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k18461,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__18490 = k18461;
var G__18490__$1 = (((G__18490 instanceof cljs.core.Keyword))?G__18490.fqn:null);
switch (G__18490__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k18461,else__5346__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__18497){
var vec__18500 = p__18497;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18500,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18500,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__18460){
var self__ = this;
var G__18460__$1 = this;
return (new cljs.core.RecordIter((0),G__18460__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this18462,other18463){
var self__ = this;
var this18462__$1 = this;
return (((!((other18463 == null)))) && ((((this18462__$1.constructor === other18463.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18462__$1.x,other18463.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18462__$1.y,other18463.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18462__$1.__extmap,other18463.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k18461){
var self__ = this;
var this__5350__auto____$1 = this;
var G__18533 = k18461;
var G__18533__$1 = (((G__18533 instanceof cljs.core.Keyword))?G__18533.fqn:null);
switch (G__18533__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k18461);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__18460){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__18540 = cljs.core.keyword_identical_QMARK_;
var expr__18541 = k__5352__auto__;
if(cljs.core.truth_((pred__18540.cljs$core$IFn$_invoke$arity$2 ? pred__18540.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__18541) : pred__18540.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__18541)))){
return (new shadow.dom.Coordinate(G__18460,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__18540.cljs$core$IFn$_invoke$arity$2 ? pred__18540.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__18541) : pred__18540.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__18541)))){
return (new shadow.dom.Coordinate(self__.x,G__18460,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__18460),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__18460){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__18460,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__18470){
var extmap__5385__auto__ = (function (){var G__18556 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__18470,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__18470)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__18556);
} else {
return G__18556;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__18470),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__18470),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k18576,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__18592 = k18576;
var G__18592__$1 = (((G__18592 instanceof cljs.core.Keyword))?G__18592.fqn:null);
switch (G__18592__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k18576,else__5346__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__18597){
var vec__18599 = p__18597;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18599,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18599,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Size{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__18575){
var self__ = this;
var G__18575__$1 = this;
return (new cljs.core.RecordIter((0),G__18575__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this18577,other18578){
var self__ = this;
var this18577__$1 = this;
return (((!((other18578 == null)))) && ((((this18577__$1.constructor === other18578.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18577__$1.w,other18578.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18577__$1.h,other18578.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18577__$1.__extmap,other18578.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k18576){
var self__ = this;
var this__5350__auto____$1 = this;
var G__18624 = k18576;
var G__18624__$1 = (((G__18624 instanceof cljs.core.Keyword))?G__18624.fqn:null);
switch (G__18624__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k18576);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__18575){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__18629 = cljs.core.keyword_identical_QMARK_;
var expr__18630 = k__5352__auto__;
if(cljs.core.truth_((pred__18629.cljs$core$IFn$_invoke$arity$2 ? pred__18629.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__18630) : pred__18629.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__18630)))){
return (new shadow.dom.Size(G__18575,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__18629.cljs$core$IFn$_invoke$arity$2 ? pred__18629.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__18630) : pred__18629.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__18630)))){
return (new shadow.dom.Size(self__.w,G__18575,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__18575),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__18575){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__18575,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__18584){
var extmap__5385__auto__ = (function (){var G__18662 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__18584,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__18584)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__18662);
} else {
return G__18662;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__18584),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__18584),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5633__auto__ = opts;
var l__5634__auto__ = a__5633__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5634__auto__)){
var G__19548 = (i + (1));
var G__19549 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__19548;
ret = G__19549;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__18713){
var vec__18716 = p__18713;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18716,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18716,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__18723 = arguments.length;
switch (G__18723) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5802__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5802__auto__)){
var child = temp__5802__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__19551 = ps;
var G__19552 = (i + (1));
el__$1 = G__19551;
i = G__19552;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__18786 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18786,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18786,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18786,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__18794_19565 = cljs.core.seq(props);
var chunk__18795_19566 = null;
var count__18796_19567 = (0);
var i__18797_19568 = (0);
while(true){
if((i__18797_19568 < count__18796_19567)){
var vec__18828_19569 = chunk__18795_19566.cljs$core$IIndexed$_nth$arity$2(null,i__18797_19568);
var k_19570 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18828_19569,(0),null);
var v_19571 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18828_19569,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_19570);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_19570),v_19571);


var G__19574 = seq__18794_19565;
var G__19575 = chunk__18795_19566;
var G__19576 = count__18796_19567;
var G__19577 = (i__18797_19568 + (1));
seq__18794_19565 = G__19574;
chunk__18795_19566 = G__19575;
count__18796_19567 = G__19576;
i__18797_19568 = G__19577;
continue;
} else {
var temp__5804__auto___19578 = cljs.core.seq(seq__18794_19565);
if(temp__5804__auto___19578){
var seq__18794_19579__$1 = temp__5804__auto___19578;
if(cljs.core.chunked_seq_QMARK_(seq__18794_19579__$1)){
var c__5568__auto___19580 = cljs.core.chunk_first(seq__18794_19579__$1);
var G__19581 = cljs.core.chunk_rest(seq__18794_19579__$1);
var G__19582 = c__5568__auto___19580;
var G__19583 = cljs.core.count(c__5568__auto___19580);
var G__19584 = (0);
seq__18794_19565 = G__19581;
chunk__18795_19566 = G__19582;
count__18796_19567 = G__19583;
i__18797_19568 = G__19584;
continue;
} else {
var vec__18840_19588 = cljs.core.first(seq__18794_19579__$1);
var k_19589 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18840_19588,(0),null);
var v_19590 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18840_19588,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_19589);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_19589),v_19590);


var G__19591 = cljs.core.next(seq__18794_19579__$1);
var G__19592 = null;
var G__19593 = (0);
var G__19594 = (0);
seq__18794_19565 = G__19591;
chunk__18795_19566 = G__19592;
count__18796_19567 = G__19593;
i__18797_19568 = G__19594;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__18861 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18861,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18861,(1),null);
var seq__18864_19597 = cljs.core.seq(node_children);
var chunk__18866_19598 = null;
var count__18867_19599 = (0);
var i__18868_19600 = (0);
while(true){
if((i__18868_19600 < count__18867_19599)){
var child_struct_19601 = chunk__18866_19598.cljs$core$IIndexed$_nth$arity$2(null,i__18868_19600);
if((!((child_struct_19601 == null)))){
if(typeof child_struct_19601 === 'string'){
var text_19602 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_19602),child_struct_19601].join(''));
} else {
var children_19603 = shadow.dom.svg_node(child_struct_19601);
if(cljs.core.seq_QMARK_(children_19603)){
var seq__18982_19605 = cljs.core.seq(children_19603);
var chunk__18984_19606 = null;
var count__18985_19607 = (0);
var i__18986_19608 = (0);
while(true){
if((i__18986_19608 < count__18985_19607)){
var child_19609 = chunk__18984_19606.cljs$core$IIndexed$_nth$arity$2(null,i__18986_19608);
if(cljs.core.truth_(child_19609)){
node.appendChild(child_19609);


var G__19610 = seq__18982_19605;
var G__19611 = chunk__18984_19606;
var G__19612 = count__18985_19607;
var G__19613 = (i__18986_19608 + (1));
seq__18982_19605 = G__19610;
chunk__18984_19606 = G__19611;
count__18985_19607 = G__19612;
i__18986_19608 = G__19613;
continue;
} else {
var G__19614 = seq__18982_19605;
var G__19615 = chunk__18984_19606;
var G__19616 = count__18985_19607;
var G__19617 = (i__18986_19608 + (1));
seq__18982_19605 = G__19614;
chunk__18984_19606 = G__19615;
count__18985_19607 = G__19616;
i__18986_19608 = G__19617;
continue;
}
} else {
var temp__5804__auto___19618 = cljs.core.seq(seq__18982_19605);
if(temp__5804__auto___19618){
var seq__18982_19622__$1 = temp__5804__auto___19618;
if(cljs.core.chunked_seq_QMARK_(seq__18982_19622__$1)){
var c__5568__auto___19623 = cljs.core.chunk_first(seq__18982_19622__$1);
var G__19624 = cljs.core.chunk_rest(seq__18982_19622__$1);
var G__19625 = c__5568__auto___19623;
var G__19626 = cljs.core.count(c__5568__auto___19623);
var G__19627 = (0);
seq__18982_19605 = G__19624;
chunk__18984_19606 = G__19625;
count__18985_19607 = G__19626;
i__18986_19608 = G__19627;
continue;
} else {
var child_19631 = cljs.core.first(seq__18982_19622__$1);
if(cljs.core.truth_(child_19631)){
node.appendChild(child_19631);


var G__19632 = cljs.core.next(seq__18982_19622__$1);
var G__19633 = null;
var G__19634 = (0);
var G__19635 = (0);
seq__18982_19605 = G__19632;
chunk__18984_19606 = G__19633;
count__18985_19607 = G__19634;
i__18986_19608 = G__19635;
continue;
} else {
var G__19636 = cljs.core.next(seq__18982_19622__$1);
var G__19637 = null;
var G__19638 = (0);
var G__19639 = (0);
seq__18982_19605 = G__19636;
chunk__18984_19606 = G__19637;
count__18985_19607 = G__19638;
i__18986_19608 = G__19639;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_19603);
}
}


var G__19640 = seq__18864_19597;
var G__19641 = chunk__18866_19598;
var G__19642 = count__18867_19599;
var G__19643 = (i__18868_19600 + (1));
seq__18864_19597 = G__19640;
chunk__18866_19598 = G__19641;
count__18867_19599 = G__19642;
i__18868_19600 = G__19643;
continue;
} else {
var G__19644 = seq__18864_19597;
var G__19645 = chunk__18866_19598;
var G__19646 = count__18867_19599;
var G__19647 = (i__18868_19600 + (1));
seq__18864_19597 = G__19644;
chunk__18866_19598 = G__19645;
count__18867_19599 = G__19646;
i__18868_19600 = G__19647;
continue;
}
} else {
var temp__5804__auto___19648 = cljs.core.seq(seq__18864_19597);
if(temp__5804__auto___19648){
var seq__18864_19649__$1 = temp__5804__auto___19648;
if(cljs.core.chunked_seq_QMARK_(seq__18864_19649__$1)){
var c__5568__auto___19650 = cljs.core.chunk_first(seq__18864_19649__$1);
var G__19651 = cljs.core.chunk_rest(seq__18864_19649__$1);
var G__19652 = c__5568__auto___19650;
var G__19653 = cljs.core.count(c__5568__auto___19650);
var G__19654 = (0);
seq__18864_19597 = G__19651;
chunk__18866_19598 = G__19652;
count__18867_19599 = G__19653;
i__18868_19600 = G__19654;
continue;
} else {
var child_struct_19655 = cljs.core.first(seq__18864_19649__$1);
if((!((child_struct_19655 == null)))){
if(typeof child_struct_19655 === 'string'){
var text_19656 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_19656),child_struct_19655].join(''));
} else {
var children_19657 = shadow.dom.svg_node(child_struct_19655);
if(cljs.core.seq_QMARK_(children_19657)){
var seq__19025_19658 = cljs.core.seq(children_19657);
var chunk__19027_19659 = null;
var count__19028_19660 = (0);
var i__19029_19661 = (0);
while(true){
if((i__19029_19661 < count__19028_19660)){
var child_19662 = chunk__19027_19659.cljs$core$IIndexed$_nth$arity$2(null,i__19029_19661);
if(cljs.core.truth_(child_19662)){
node.appendChild(child_19662);


var G__19663 = seq__19025_19658;
var G__19664 = chunk__19027_19659;
var G__19665 = count__19028_19660;
var G__19666 = (i__19029_19661 + (1));
seq__19025_19658 = G__19663;
chunk__19027_19659 = G__19664;
count__19028_19660 = G__19665;
i__19029_19661 = G__19666;
continue;
} else {
var G__19667 = seq__19025_19658;
var G__19668 = chunk__19027_19659;
var G__19669 = count__19028_19660;
var G__19670 = (i__19029_19661 + (1));
seq__19025_19658 = G__19667;
chunk__19027_19659 = G__19668;
count__19028_19660 = G__19669;
i__19029_19661 = G__19670;
continue;
}
} else {
var temp__5804__auto___19671__$1 = cljs.core.seq(seq__19025_19658);
if(temp__5804__auto___19671__$1){
var seq__19025_19672__$1 = temp__5804__auto___19671__$1;
if(cljs.core.chunked_seq_QMARK_(seq__19025_19672__$1)){
var c__5568__auto___19673 = cljs.core.chunk_first(seq__19025_19672__$1);
var G__19674 = cljs.core.chunk_rest(seq__19025_19672__$1);
var G__19675 = c__5568__auto___19673;
var G__19676 = cljs.core.count(c__5568__auto___19673);
var G__19677 = (0);
seq__19025_19658 = G__19674;
chunk__19027_19659 = G__19675;
count__19028_19660 = G__19676;
i__19029_19661 = G__19677;
continue;
} else {
var child_19678 = cljs.core.first(seq__19025_19672__$1);
if(cljs.core.truth_(child_19678)){
node.appendChild(child_19678);


var G__19679 = cljs.core.next(seq__19025_19672__$1);
var G__19680 = null;
var G__19681 = (0);
var G__19682 = (0);
seq__19025_19658 = G__19679;
chunk__19027_19659 = G__19680;
count__19028_19660 = G__19681;
i__19029_19661 = G__19682;
continue;
} else {
var G__19683 = cljs.core.next(seq__19025_19672__$1);
var G__19684 = null;
var G__19685 = (0);
var G__19686 = (0);
seq__19025_19658 = G__19683;
chunk__19027_19659 = G__19684;
count__19028_19660 = G__19685;
i__19029_19661 = G__19686;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_19657);
}
}


var G__19688 = cljs.core.next(seq__18864_19649__$1);
var G__19689 = null;
var G__19690 = (0);
var G__19691 = (0);
seq__18864_19597 = G__19688;
chunk__18866_19598 = G__19689;
count__18867_19599 = G__19690;
i__18868_19600 = G__19691;
continue;
} else {
var G__19692 = cljs.core.next(seq__18864_19649__$1);
var G__19693 = null;
var G__19694 = (0);
var G__19695 = (0);
seq__18864_19597 = G__19692;
chunk__18866_19598 = G__19693;
count__18867_19599 = G__19694;
i__18868_19600 = G__19695;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___19699 = arguments.length;
var i__5770__auto___19700 = (0);
while(true){
if((i__5770__auto___19700 < len__5769__auto___19699)){
args__5775__auto__.push((arguments[i__5770__auto___19700]));

var G__19701 = (i__5770__auto___19700 + (1));
i__5770__auto___19700 = G__19701;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq19078){
var G__19079 = cljs.core.first(seq19078);
var seq19078__$1 = cljs.core.next(seq19078);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19079,seq19078__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__19099 = arguments.length;
switch (G__19099) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__5043__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__5043__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__5043__auto__;
}
})())){
var c__14648__auto___19711 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14649__auto__ = (function (){var switch__14468__auto__ = (function (state_19177){
var state_val_19178 = (state_19177[(1)]);
if((state_val_19178 === (1))){
var state_19177__$1 = state_19177;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19177__$1,(2),once_or_cleanup);
} else {
if((state_val_19178 === (2))){
var inst_19174 = (state_19177[(2)]);
var inst_19175 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_19177__$1 = (function (){var statearr_19181 = state_19177;
(statearr_19181[(7)] = inst_19174);

return statearr_19181;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_19177__$1,inst_19175);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__14469__auto__ = null;
var shadow$dom$state_machine__14469__auto____0 = (function (){
var statearr_19183 = [null,null,null,null,null,null,null,null];
(statearr_19183[(0)] = shadow$dom$state_machine__14469__auto__);

(statearr_19183[(1)] = (1));

return statearr_19183;
});
var shadow$dom$state_machine__14469__auto____1 = (function (state_19177){
while(true){
var ret_value__14470__auto__ = (function (){try{while(true){
var result__14471__auto__ = switch__14468__auto__(state_19177);
if(cljs.core.keyword_identical_QMARK_(result__14471__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14471__auto__;
}
break;
}
}catch (e19184){var ex__14472__auto__ = e19184;
var statearr_19185_19712 = state_19177;
(statearr_19185_19712[(2)] = ex__14472__auto__);


if(cljs.core.seq((state_19177[(4)]))){
var statearr_19187_19714 = state_19177;
(statearr_19187_19714[(1)] = cljs.core.first((state_19177[(4)])));

} else {
throw ex__14472__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14470__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19718 = state_19177;
state_19177 = G__19718;
continue;
} else {
return ret_value__14470__auto__;
}
break;
}
});
shadow$dom$state_machine__14469__auto__ = function(state_19177){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__14469__auto____0.call(this);
case 1:
return shadow$dom$state_machine__14469__auto____1.call(this,state_19177);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__14469__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__14469__auto____0;
shadow$dom$state_machine__14469__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__14469__auto____1;
return shadow$dom$state_machine__14469__auto__;
})()
})();
var state__14650__auto__ = (function (){var statearr_19193 = f__14649__auto__();
(statearr_19193[(6)] = c__14648__auto___19711);

return statearr_19193;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14650__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
