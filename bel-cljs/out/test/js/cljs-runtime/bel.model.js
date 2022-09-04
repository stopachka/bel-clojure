goog.provide('bel.model');
goog.scope(function(){
  bel.model.goog$module$goog$object = goog.module.get('goog.object');
});
bel.model.first_and_only = (function bel$model$first_and_only(xs,msg){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(xs),(1))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg),"\n","(= (count xs) 1)"].join('')));
}

return cljs.core.first(xs);
});
bel.model.string_QMARK_ = cljs.core.string_QMARK_;
bel.model.char_QMARK_ = cljs.core.char_QMARK_;
bel.model.symbol_QMARK_ = cljs.core.symbol_QMARK_;
bel.model.number_QMARK_ = cljs.core.number_QMARK_;
bel.model.pair_QMARK_ = cljs.core.array_QMARK_;
bel.model.mut_map_QMARK_ = cljs.core.object_QMARK_;
bel.model.imm_map_QMARK_ = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,cljs.core.PersistentArrayMap),cljs.core.type);
bel.model.clj_err_QMARK_ = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.instance_QMARK_,Error);
bel.model.type_nilable = (function bel$model$type_nilable(x){
if(cljs.core.truth_((bel.model.symbol_QMARK_.cljs$core$IFn$_invoke$arity$1 ? bel.model.symbol_QMARK_.cljs$core$IFn$_invoke$arity$1(x) : bel.model.symbol_QMARK_.call(null,x)))){
return new cljs.core.Symbol(null,"symbol","symbol",601958831,null);
} else {
if(cljs.core.truth_((bel.model.string_QMARK_.cljs$core$IFn$_invoke$arity$1 ? bel.model.string_QMARK_.cljs$core$IFn$_invoke$arity$1(x) : bel.model.string_QMARK_.call(null,x)))){
return new cljs.core.Symbol(null,"string","string",-349010059,null);
} else {
if(cljs.core.truth_((bel.model.char_QMARK_.cljs$core$IFn$_invoke$arity$1 ? bel.model.char_QMARK_.cljs$core$IFn$_invoke$arity$1(x) : bel.model.char_QMARK_.call(null,x)))){
return new cljs.core.Symbol(null,"char","char",998943941,null);
} else {
if(cljs.core.truth_((bel.model.number_QMARK_.cljs$core$IFn$_invoke$arity$1 ? bel.model.number_QMARK_.cljs$core$IFn$_invoke$arity$1(x) : bel.model.number_QMARK_.call(null,x)))){
return new cljs.core.Symbol(null,"number","number",-1084057331,null);
} else {
if(cljs.core.truth_((bel.model.pair_QMARK_.cljs$core$IFn$_invoke$arity$1 ? bel.model.pair_QMARK_.cljs$core$IFn$_invoke$arity$1(x) : bel.model.pair_QMARK_.call(null,x)))){
return new cljs.core.Symbol(null,"pair","pair",1193015215,null);
} else {
if(cljs.core.truth_((bel.model.mut_map_QMARK_.cljs$core$IFn$_invoke$arity$1 ? bel.model.mut_map_QMARK_.cljs$core$IFn$_invoke$arity$1(x) : bel.model.mut_map_QMARK_.call(null,x)))){
return new cljs.core.Symbol(null,"mut-map","mut-map",1609152237,null);
} else {
if(cljs.core.truth_(bel.model.imm_map_QMARK_(x))){
return new cljs.core.Symbol(null,"imm-map","imm-map",-1034423304,null);
} else {
if(cljs.core.truth_(bel.model.clj_err_QMARK_(x))){
return new cljs.core.Symbol(null,"clj-err","clj-err",513595198,null);
} else {
var v = (function (){var and__5043__auto__ = cljs.core.seqable_QMARK_(x);
if(and__5043__auto__){
return cljs.core.first(x);
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_((function (){var fexpr__12647 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"backquote","backquote",1330570368),null,new cljs.core.Keyword(null,"splice","splice",449588165),null,new cljs.core.Keyword(null,"comma","comma",1699024745),null], null), null);
return (fexpr__12647.cljs$core$IFn$_invoke$arity$1 ? fexpr__12647.cljs$core$IFn$_invoke$arity$1(v) : fexpr__12647.call(null,v));
})())){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(v));
} else {
return null;
}

}
}
}
}
}
}
}
}
});
bel.model.type = (function bel$model$type(x){
var v = bel.model.type_nilable(x);
if(cljs.core.truth_(v)){
} else {
throw (new Error(["Assert failed: ",["unsupported type for form = ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join(''),"\n","v"].join('')));
}

return v;
});
bel.model.p = cljs.core.array;
bel.model.bel_quote = new cljs.core.Symbol(null,"quote","quote",1377916282,null);
bel.model.bel_nil = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1("nil");
bel.model.bel_t = new cljs.core.Symbol(null,"t","t",242699008,null);
bel.model.bel_err_sym = new cljs.core.Symbol(null,"err","err",-448925678,null);
bel.model.bel_dot = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dot","dot",1442709401),"."], null);
bel.model.bel_lit = new cljs.core.Symbol(null,"lit","lit",1079096147,null);
bel.model.bel_prim = new cljs.core.Symbol(null,"prim","prim",1846150885,null);
bel.model.bel_o = new cljs.core.Symbol(null,"o","o",290524299,null);
bel.model.bel_a = new cljs.core.Symbol(null,"a","a",-482876059,null);
bel.model.bel_d = new cljs.core.Symbol(null,"d","d",-682293345,null);
bel.model.bel_apply = new cljs.core.Symbol(null,"apply","apply",-1334050276,null);
bel.model.bel_set = new cljs.core.Symbol(null,"set","set",1945134081,null);
bel.model.bel_clo = new cljs.core.Symbol(null,"clo","clo",-274311987,null);
bel.model.bel_mac = new cljs.core.Symbol(null,"mac","mac",-238860123,null);
bel.model.bel_globe = new cljs.core.Symbol(null,"globe","globe",-1992262972,null);
bel.model.bel_scope = new cljs.core.Symbol(null,"scope","scope",1201173109,null);
bel.model.bel_if = new cljs.core.Symbol(null,"if","if",1181717262,null);
bel.model.bel_cont = new cljs.core.Symbol(null,"cont","cont",1063431313,null);
bel.model.quoted_p = (function bel$model$quoted_p(a){
var G__12662 = bel.model.bel_quote;
var G__12663 = (bel.model.p.cljs$core$IFn$_invoke$arity$2 ? bel.model.p.cljs$core$IFn$_invoke$arity$2(a,bel.model.bel_nil) : bel.model.p.call(null,a,bel.model.bel_nil));
return (bel.model.p.cljs$core$IFn$_invoke$arity$2 ? bel.model.p.cljs$core$IFn$_invoke$arity$2(G__12662,G__12663) : bel.model.p.call(null,G__12662,G__12663));
});
bel.model.seq__GT_p = (function bel$model$seq__GT_p(xs){
var vec__12669 = xs;
var seq__12670 = cljs.core.seq(vec__12669);
var first__12671 = cljs.core.first(seq__12670);
var seq__12670__$1 = cljs.core.next(seq__12670);
var x = first__12671;
var first__12671__$1 = cljs.core.first(seq__12670__$1);
var seq__12670__$2 = cljs.core.next(seq__12670__$1);
var n = first__12671__$1;
var after_n = seq__12670__$2;
var after_x = cljs.core.rest(xs);
if(cljs.core.empty_QMARK_(xs)){
return bel.model.bel_nil;
} else {
var G__12676 = x;
var G__12677 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(bel.model.bel_dot,n))?bel.model.first_and_only(after_n,"dotted list _must_ have 1 exp after the dot"):(bel.model.seq__GT_p.cljs$core$IFn$_invoke$arity$1 ? bel.model.seq__GT_p.cljs$core$IFn$_invoke$arity$1(after_x) : bel.model.seq__GT_p.call(null,after_x)));
return (bel.model.p.cljs$core$IFn$_invoke$arity$2 ? bel.model.p.cljs$core$IFn$_invoke$arity$2(G__12676,G__12677) : bel.model.p.call(null,G__12676,G__12677));
}
});
bel.model.id = (function bel$model$id(a,b){
var id_f = (cljs.core.truth_((bel.model.pair_QMARK_.cljs$core$IFn$_invoke$arity$1 ? bel.model.pair_QMARK_.cljs$core$IFn$_invoke$arity$1(a) : bel.model.pair_QMARK_.call(null,a)))?cljs.core.identical_QMARK_:cljs.core._EQ_);
if(cljs.core.truth_((id_f.cljs$core$IFn$_invoke$arity$2 ? id_f.cljs$core$IFn$_invoke$arity$2(a,b) : id_f.call(null,a,b)))){
return bel.model.bel_t;
} else {
return bel.model.bel_nil;
}
});
bel.model.join = (function bel$model$join(a,b){
var G__12685 = a;
var G__12686 = (cljs.core.truth_((bel.model.string_QMARK_.cljs$core$IFn$_invoke$arity$1 ? bel.model.string_QMARK_.cljs$core$IFn$_invoke$arity$1(b) : bel.model.string_QMARK_.call(null,b)))?bel.model.seq__GT_p(b):b);
return (bel.model.p.cljs$core$IFn$_invoke$arity$2 ? bel.model.p.cljs$core$IFn$_invoke$arity$2(G__12685,G__12686) : bel.model.p.call(null,G__12685,G__12686));
});
bel.model.car = (function bel$model$car(form){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(bel.model.bel_nil,form)){
return form;
} else {
if(cljs.core.truth_((bel.model.string_QMARK_.cljs$core$IFn$_invoke$arity$1 ? bel.model.string_QMARK_.cljs$core$IFn$_invoke$arity$1(form) : bel.model.string_QMARK_.call(null,form)))){
return cljs.core.first(form);
} else {
if(cljs.core.not((bel.model.pair_QMARK_.cljs$core$IFn$_invoke$arity$1 ? bel.model.pair_QMARK_.cljs$core$IFn$_invoke$arity$1(form) : bel.model.pair_QMARK_.call(null,form)))){
throw (new Error(["expected pair, got = ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(form)].join('')));
} else {
return cljs.core.first(form);

}
}
}
});
bel.model.cdr = (function bel$model$cdr(form){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(bel.model.bel_nil,form)){
return form;
} else {
if(cljs.core.truth_((bel.model.string_QMARK_.cljs$core$IFn$_invoke$arity$1 ? bel.model.string_QMARK_.cljs$core$IFn$_invoke$arity$1(form) : bel.model.string_QMARK_.call(null,form)))){
return bel.model.seq__GT_p(cljs.core.rest(form));
} else {
if(cljs.core.not((bel.model.pair_QMARK_.cljs$core$IFn$_invoke$arity$1 ? bel.model.pair_QMARK_.cljs$core$IFn$_invoke$arity$1(form) : bel.model.pair_QMARK_.call(null,form)))){
throw (new Error(["expected pair, got = ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(form)].join('')));
} else {
return cljs.core.last(form);

}
}
}
});
bel.model.p__GT_seq = (function bel$model$p__GT_seq(form){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(bel.model.bel_nil,form)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons(bel.model.car(form),(function (){var r = bel.model.cdr(form);
if(cljs.core.truth_((bel.model.pair_QMARK_.cljs$core$IFn$_invoke$arity$1 ? bel.model.pair_QMARK_.cljs$core$IFn$_invoke$arity$1(r) : bel.model.pair_QMARK_.call(null,r)))){
return (bel.model.p__GT_seq.cljs$core$IFn$_invoke$arity$1 ? bel.model.p__GT_seq.cljs$core$IFn$_invoke$arity$1(r) : bel.model.p__GT_seq.call(null,r));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(bel.model.bel_nil,r)){
return cljs.core.PersistentVector.EMPTY;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [r], null);

}
}
})());
}
});
bel.model.xar = (function bel$model$xar(form,y){
(form[(0)] = y);

return form;
});
bel.model.xdr = (function bel$model$xdr(form,y){
(form[(1)] = y);

return form;
});
bel.model.sym = cljs.core.symbol;
bel.model.nom = cljs.core.name;
bel.model.coin = (function bel$model$coin(){
return cljs.core.rand_nth(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bel.model.bel_t,bel.model.bel_nil], null));
});
bel.model.p_append = (function bel$model$p_append(a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(bel.model.bel_nil,a)){
return b;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(bel.model.bel_nil,bel.model.cdr(a))){
var G__12712 = bel.model.car(a);
var G__12713 = b;
return (bel.model.p.cljs$core$IFn$_invoke$arity$2 ? bel.model.p.cljs$core$IFn$_invoke$arity$2(G__12712,G__12713) : bel.model.p.call(null,G__12712,G__12713));
} else {
var G__12714 = bel.model.car(a);
var G__12715 = (function (){var G__12716 = bel.model.cdr(a);
var G__12717 = b;
return (bel.model.p_append.cljs$core$IFn$_invoke$arity$2 ? bel.model.p_append.cljs$core$IFn$_invoke$arity$2(G__12716,G__12717) : bel.model.p_append.call(null,G__12716,G__12717));
})();
return (bel.model.p.cljs$core$IFn$_invoke$arity$2 ? bel.model.p.cljs$core$IFn$_invoke$arity$2(G__12714,G__12715) : bel.model.p.call(null,G__12714,G__12715));

}
}
});
bel.model.bel_variable_QMARK_ = bel.model.symbol_QMARK_;
bel.model.bel_optional_QMARK_ = (function bel$model$bel_optional_QMARK_(p__12718){
var vec__12719 = p__12718;
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12719,(0),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(bel.model.bel_o,h);
});
bel.model.bel_optional_var = (function bel$model$bel_optional_var(p__12722){
var vec__12723 = p__12722;
var _h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12723,(0),null);
var vec__12726 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12723,(1),null);
var variable = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12726,(0),null);
return variable;
});
bel.model.bel_optional_arg = (function bel$model$bel_optional_arg(p__12729){
var vec__12730 = p__12729;
var _h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12730,(0),null);
var vec__12733 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12730,(1),null);
var _variable = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12733,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12733,(1),null);
return bel.model.car(r);
});
bel.model.bel_typecheck_QMARK_ = (function bel$model$bel_typecheck_QMARK_(p__12736){
var vec__12737 = p__12736;
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12737,(0),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(bel.model.bel_t,h);
});
bel.model.bel_typecheck_var = (function bel$model$bel_typecheck_var(p__12740){
var vec__12741 = p__12740;
var _h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12741,(0),null);
var vec__12744 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12741,(1),null);
var variable = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12744,(0),null);
return variable;
});
bel.model.bel_typecheck_f = (function bel$model$bel_typecheck_f(p__12747){
var vec__12748 = p__12747;
var _h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12748,(0),null);
var vec__12751 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12748,(1),null);
var _variable = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12751,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12751,(1),null);
return bel.model.car(r);
});
bel.model.clj_bool__GT_bel = (function bel$model$clj_bool__GT_bel(x){
if(cljs.core.truth_(x)){
return bel.model.bel_t;
} else {
return bel.model.bel_nil;
}
});
bel.model.map_get = (function bel$model$map_get(m,k){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(m,bel.model.bel_nil)){
return bel.model.bel_nil;
} else {
var or__5045__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = bel.model.goog$module$goog$object.get(m,k);
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
return bel.model.bel_nil;
}
}
}
});
bel.model.map_assoc = (function bel$model$map_assoc(m,k,v){
var m_SINGLEQUOTE_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(bel.model.bel_nil,m))?cljs.core.PersistentArrayMap.EMPTY:m);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m_SINGLEQUOTE_,k,v);
});
bel.model.map_dissoc = (function bel$model$map_dissoc(m,k){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(bel.model.bel_nil,m)){
return bel.model.bel_nil;
} else {
var m_SINGLEQUOTE_ = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,k);
if(cljs.core.empty_QMARK_(m_SINGLEQUOTE_)){
return bel.model.bel_nil;
} else {
return m_SINGLEQUOTE_;
}
}
});
bel.model.mut_map = (function bel$model$mut_map(){
return ({});
});
bel.model.map_put = (function bel$model$map_put(m,k,v){
bel.model.goog$module$goog$object.set(m,k,v);

return m;
});
bel.model.map_delete = (function bel$model$map_delete(m,k){
return delete m[k];
});

//# sourceMappingURL=bel.model.js.map
