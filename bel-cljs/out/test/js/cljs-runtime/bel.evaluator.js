goog.provide('bel.evaluator');
bel.evaluator.stack_pop = (function bel$evaluator$stack_pop(x){
return (new cljs.core.List(null,cljs.core.peek(x),(new cljs.core.List(null,cljs.core.pop(x),null,(1),null)),(2),null));
});
bel.evaluator.stack_pop_2 = (function bel$evaluator$stack_pop_2(x){
return (new cljs.core.List(null,(new cljs.core.List(null,cljs.core.peek(cljs.core.pop(x)),(new cljs.core.List(null,cljs.core.peek(x),null,(1),null)),(2),null)),(new cljs.core.List(null,cljs.core.pop(cljs.core.pop(x)),null,(1),null)),(2),null));
});
bel.evaluator.stack_pop_until_breakpoint = (function bel$evaluator$stack_pop_until_breakpoint(breakpoint,x){
var peeks = cljs.core.List.EMPTY;
var pops = x;
while(true){
if(cljs.core.empty_QMARK_(pops)){
return (new cljs.core.List(null,peeks,(new cljs.core.List(null,pops,null,(1),null)),(2),null));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.peek(pops),breakpoint)){
return (new cljs.core.List(null,peeks,(new cljs.core.List(null,cljs.core.pop(pops),null,(1),null)),(2),null));
} else {
var G__13980 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(peeks,cljs.core.peek(pops));
var G__13981 = cljs.core.pop(pops);
peeks = G__13980;
pops = G__13981;
continue;

}
}
break;
}
});
bel.evaluator.in_where_QMARK_ = (function bel$evaluator$in_where_QMARK_(es){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.second(cljs.core.peek(es)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"where","where",-2044795965)], null));
});
bel.evaluator.b_where = (function bel$evaluator$b_where(es,rs,env,x){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(es,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [env,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"where","where",-2044795965)], null)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [env,x], null)], 0)),rs], null);
});
bel.evaluator.env_pair = (function bel$evaluator$env_pair(sym,v){
if(cljs.core.truth_((bel.model.bel_variable_QMARK_.cljs$core$IFn$_invoke$arity$1 ? bel.model.bel_variable_QMARK_.cljs$core$IFn$_invoke$arity$1(sym) : bel.model.bel_variable_QMARK_.call(null,sym)))){
} else {
throw (new Error(["Assert failed: ",["expected left-side to be a variable = ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)].join(''),"\n","(m/bel-variable? sym)"].join('')));
}

return (bel.model.p.cljs$core$IFn$_invoke$arity$2 ? bel.model.p.cljs$core$IFn$_invoke$arity$2(sym,v) : bel.model.p.call(null,sym,v));
});
bel.evaluator.not_bel_nil = (function bel$evaluator$not_bel_nil(x){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,bel.model.bel_nil)){
return null;
} else {
return x;
}
});
bel.evaluator.v_pair = (function bel$evaluator$v_pair(p__13610,form){
var map__13611 = p__13610;
var map__13611__$1 = cljs.core.__destructure_map(map__13611);
var dyn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13611__$1,new cljs.core.Keyword(null,"dyn","dyn",248213352));
var scope = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13611__$1,new cljs.core.Keyword(null,"scope","scope",-439358418));
var globe = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13611__$1,new cljs.core.Keyword(null,"globe","globe",662172797));
var v = cljs.core.some((function (x){
return bel.evaluator.not_bel_nil(bel.model.map_get(x,form));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [dyn,scope,globe], null));
if(cljs.core.truth_(v)){
} else {
throw (new Error(["Assert failed: ",["expected value for variable = ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(form)].join(''),"\n","v"].join('')));
}

return v;
});
bel.evaluator.eval_variable = (function bel$evaluator$eval_variable(es,rs,env,form){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(bel.model.bel_globe,form)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [es,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(rs,new cljs.core.Keyword(null,"globe","globe",662172797).cljs$core$IFn$_invoke$arity$1(env))], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(bel.model.bel_scope,form)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [es,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(rs,new cljs.core.Keyword(null,"scope","scope",-439358418).cljs$core$IFn$_invoke$arity$1(env))], null);
} else {
var vp = bel.evaluator.v_pair(env,form);
if(bel.evaluator.in_where_QMARK_(es)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.pop(es),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(rs,(function (){var G__13620 = vp;
var G__13621 = (bel.model.p.cljs$core$IFn$_invoke$arity$2 ? bel.model.p.cljs$core$IFn$_invoke$arity$2(bel.model.bel_d,bel.model.bel_nil) : bel.model.p.call(null,bel.model.bel_d,bel.model.bel_nil));
return (bel.model.p.cljs$core$IFn$_invoke$arity$2 ? bel.model.p.cljs$core$IFn$_invoke$arity$2(G__13620,G__13621) : bel.model.p.call(null,G__13620,G__13621));
})())], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [es,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(rs,bel.model.cdr(vp))], null);
}

}
}
});
bel.evaluator.b_thread = (function bel$evaluator$b_thread(es,rs,p__13623,form){
var map__13624 = p__13623;
var map__13624__$1 = cljs.core.__destructure_map(map__13624);
var env1 = map__13624__$1;
var globe = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13624__$1,new cljs.core.Keyword(null,"globe","globe",662172797));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(es,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [env1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"start-thread","start-thread",214043518),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((bel.evaluator.env.cljs$core$IFn$_invoke$arity$0 ? bel.evaluator.env.cljs$core$IFn$_invoke$arity$0() : bel.evaluator.env.call(null)),new cljs.core.Keyword(null,"globe","globe",662172797),globe),form], null)], null)),rs], null);
});
bel.evaluator.eval_dyn_2 = (function bel$evaluator$eval_dyn_2(es,rs,env,p__13625){
var vec__13626 = p__13625;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13626,(0),null);
var variable = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13626,(1),null);
var after = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13626,(2),null);
var vec__13629 = bel.evaluator.stack_pop(rs);
var ev = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13629,(0),null);
var rest_rs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13629,(1),null);
var map__13632 = env;
var map__13632__$1 = cljs.core.__destructure_map(map__13632);
var dyn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13632__$1,new cljs.core.Keyword(null,"dyn","dyn",248213352));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(es,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword(null,"dyn","dyn",248213352),bel.model.map_assoc(dyn,variable,bel.evaluator.env_pair(variable,ev))),after], null)),rest_rs], null);
});
bel.evaluator.b_dyn = (function bel$evaluator$b_dyn(es,rs,env,variable,arg,after){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(es,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [env,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dyn-2","dyn-2",871987235),variable,after], null)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [env,arg], null)], 0)),rs], null);
});
bel.evaluator.eval_cont = (function bel$evaluator$eval_cont(_es,_rs,_env,litv,args_head){
var vec__13635 = litv;
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13635,(0),null);
var vec__13638 = (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
var es = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13638,(0),null);
var rs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13638,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [es,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(rs,bel.model.car(args_head))], null);
});
bel.evaluator.eval_ccc_2 = (function bel$evaluator$eval_ccc_2(es,rs,env,_form){
var vec__13641 = bel.evaluator.stack_pop(rs);
var f_evaled = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13641,(0),null);
var rest_rs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13641,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(es,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [env,(function (){var G__13644 = f_evaled;
var G__13645 = (function (){var G__13646 = bel.model.seq__GT_p(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bel.model.bel_lit,bel.model.bel_cont,(function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [es,rest_rs], null);
})], null));
var G__13647 = bel.model.bel_nil;
return (bel.model.p.cljs$core$IFn$_invoke$arity$2 ? bel.model.p.cljs$core$IFn$_invoke$arity$2(G__13646,G__13647) : bel.model.p.call(null,G__13646,G__13647));
})();
return (bel.model.p.cljs$core$IFn$_invoke$arity$2 ? bel.model.p.cljs$core$IFn$_invoke$arity$2(G__13644,G__13645) : bel.model.p.call(null,G__13644,G__13645));
})()], null)),rest_rs], null);
});
bel.evaluator.b_ccc = (function bel$evaluator$b_ccc(es,rs,env,f){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(es,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [env,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ccc-2","ccc-2",-459273906)], null)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [env,f], null)], 0)),rs], null);
});
bel.evaluator.b_err = (function bel$evaluator$b_err(_es,_rs,_env,e){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__13648 = bel.model.bel_lit;
var G__13649 = (function (){var G__13650 = new cljs.core.Symbol(null,"error","error",661562495,null);
var G__13651 = (bel.model.p.cljs$core$IFn$_invoke$arity$2 ? bel.model.p.cljs$core$IFn$_invoke$arity$2(e,bel.model.bel_nil) : bel.model.p.call(null,e,bel.model.bel_nil));
return (bel.model.p.cljs$core$IFn$_invoke$arity$2 ? bel.model.p.cljs$core$IFn$_invoke$arity$2(G__13650,G__13651) : bel.model.p.call(null,G__13650,G__13651));
})();
return (bel.model.p.cljs$core$IFn$_invoke$arity$2 ? bel.model.p.cljs$core$IFn$_invoke$arity$2(G__13648,G__13649) : bel.model.p.call(null,G__13648,G__13649));
})()], null)], null);
});
bel.evaluator.b_debug = (function bel$evaluator$b_debug(x){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["[DEBUG] ",bel.reader.bel__GT_pretty(x)], 0));
});
bel.evaluator.b_uvar = cljs.core.gensym;
bel.evaluator.base_compare = (function bel$evaluator$base_compare(a,b){
return cljs.core.compare(a,b);
});
bel.evaluator.list_compare = (function bel$evaluator$list_compare(a,b){
var c1 = bel.model.car(a);
var c2 = bel.model.car(b);
var v = (bel.evaluator.bel_compare.cljs$core$IFn$_invoke$arity$2 ? bel.evaluator.bel_compare.cljs$core$IFn$_invoke$arity$2(c1,c2) : bel.evaluator.bel_compare.call(null,c1,c2));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((0),v)){
return v;
} else {
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(bel.model.bel_nil,bel.model.cdr(a))){
var G__13654 = bel.model.cdr(a);
var G__13655 = bel.model.cdr(b);
return (bel.evaluator.bel_compare.cljs$core$IFn$_invoke$arity$2 ? bel.evaluator.bel_compare.cljs$core$IFn$_invoke$arity$2(G__13654,G__13655) : bel.evaluator.bel_compare.call(null,G__13654,G__13655));
} else {
return v;

}
}
});
bel.evaluator.bel_compare = (function bel$evaluator$bel_compare(a,b){
var f = (function (){var pred__13657 = cljs.core._EQ_;
var expr__13658 = bel.model.type(a);
if(cljs.core.truth_((function (){var G__13660 = new cljs.core.Symbol(null,"pair","pair",1193015215,null);
var G__13661 = expr__13658;
return (pred__13657.cljs$core$IFn$_invoke$arity$2 ? pred__13657.cljs$core$IFn$_invoke$arity$2(G__13660,G__13661) : pred__13657.call(null,G__13660,G__13661));
})())){
return bel.evaluator.list_compare;
} else {
return bel.evaluator.base_compare;
}
})();
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(a,b) : f.call(null,a,b));
});
bel.evaluator.b_bin_LT_ = (function bel$evaluator$b_bin_LT_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___13982 = arguments.length;
var i__5770__auto___13983 = (0);
while(true){
if((i__5770__auto___13983 < len__5769__auto___13982)){
args__5775__auto__.push((arguments[i__5770__auto___13983]));

var G__13984 = (i__5770__auto___13983 + (1));
i__5770__auto___13983 = G__13984;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return bel.evaluator.b_bin_LT_.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(bel.evaluator.b_bin_LT_.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
return bel.model.clj_bool__GT_bel((cljs.core.apply.cljs$core$IFn$_invoke$arity$2(bel.evaluator.bel_compare,xs) < (0)));
}));

(bel.evaluator.b_bin_LT_.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(bel.evaluator.b_bin_LT_.cljs$lang$applyTo = (function (seq13663){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq13663));
}));

bel.evaluator.wrap_math_fn = (function bel$evaluator$wrap_math_fn(f){
return (function() { 
var G__13985__delegate = function (xs){
var v = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,xs);
if(typeof v === 'number'){
return v;
} else {
return bel.model.clj_bool__GT_bel(v);
}
};
var G__13985 = function (var_args){
var xs = null;
if (arguments.length > 0) {
var G__13986__i = 0, G__13986__a = new Array(arguments.length -  0);
while (G__13986__i < G__13986__a.length) {G__13986__a[G__13986__i] = arguments[G__13986__i + 0]; ++G__13986__i;}
  xs = new cljs.core.IndexedSeq(G__13986__a,0,null);
} 
return G__13985__delegate.call(this,xs);};
G__13985.cljs$lang$maxFixedArity = 0;
G__13985.cljs$lang$applyTo = (function (arglist__13987){
var xs = cljs.core.seq(arglist__13987);
return G__13985__delegate(xs);
});
G__13985.cljs$core$IFn$_invoke$arity$variadic = G__13985__delegate;
return G__13985;
})()
;
});
bel.evaluator.math_name__GT_fn = new cljs.core.PersistentArrayMap(null, 8, ["+",bel.evaluator.wrap_math_fn(cljs.core._PLUS_),"-",bel.evaluator.wrap_math_fn(cljs.core._),"*",bel.evaluator.wrap_math_fn(cljs.core._STAR_),"/",bel.evaluator.wrap_math_fn(cljs.core._SLASH_),"int",bel.evaluator.wrap_math_fn(cljs.core.int_QMARK_),"num<",bel.evaluator.wrap_math_fn(cljs.core._LT_),"abs",bel.evaluator.wrap_math_fn((function (p1__13666_SHARP_){
return Math.abs(p1__13666_SHARP_);
})),"hash",bel.evaluator.wrap_math_fn(cljs.core.hash)], null);
bel.evaluator.prim_name__GT_fn = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentHashMap.fromArrays(["nom","map-assoc","id","uvar","coin","xar","debug","xdr","type","join","car","bin<","sym","cdr"],[new cljs.core.Var(function(){return bel.model.nom;},new cljs.core.Symbol("bel.model","nom","bel.model/nom",678979735,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"bel.model","bel.model",-1266674062,null),new cljs.core.Symbol(null,"nom","nom",-1943580949,null),"bel/model.cljs",9,1,147,147,cljs.core.List.EMPTY,null,(cljs.core.truth_(bel.model.nom)?bel.model.nom.cljs$lang$test:null)])),new cljs.core.Var(function(){return bel.model.map_assoc;},new cljs.core.Symbol("bel.model","map-assoc","bel.model/map-assoc",-880054317,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"bel.model","bel.model",-1266674062,null),new cljs.core.Symbol(null,"map-assoc","map-assoc",-1347926689,null),"bel/model.cljs",16,1,198,198,cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",-1021758608,null),new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"v","v",1661996586,null)], null)),null,(cljs.core.truth_(bel.model.map_assoc)?bel.model.map_assoc.cljs$lang$test:null)])),new cljs.core.Var(function(){return bel.model.id;},new cljs.core.Symbol("bel.model","id","bel.model/id",-1419618537,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"bel.model","bel.model",-1266674062,null),new cljs.core.Symbol(null,"id","id",252129435,null),"bel/model.cljs",9,1,94,94,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"a","a",-482876059,null),new cljs.core.Symbol(null,"b","b",-1172211299,null)], null)),null,(cljs.core.truth_(bel.model.id)?bel.model.id.cljs$lang$test:null)])),new cljs.core.Var(function(){return bel.evaluator.b_uvar;},new cljs.core.Symbol("bel.evaluator","b-uvar","bel.evaluator/b-uvar",-780873393,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"bel.evaluator","bel.evaluator",1137899495,null),new cljs.core.Symbol(null,"b-uvar","b-uvar",-1722568615,null),"bel/evaluator.cljs",12,1,148,148,cljs.core.List.EMPTY,null,(cljs.core.truth_(bel.evaluator.b_uvar)?bel.evaluator.b_uvar.cljs$lang$test:null)])),new cljs.core.Var(function(){return bel.model.coin;},new cljs.core.Symbol("bel.model","coin","bel.model/coin",807100574,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"bel.model","bel.model",-1266674062,null),new cljs.core.Symbol(null,"coin","coin",1412974338,null),"bel/model.cljs",11,1,149,149,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(bel.model.coin)?bel.model.coin.cljs$lang$test:null)])),new cljs.core.Var(function(){return bel.model.xar;},new cljs.core.Symbol("bel.model","xar","bel.model/xar",1849507724,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"bel.model","bel.model",-1266674062,null),new cljs.core.Symbol(null,"xar","xar",48113136,null),"bel/model.cljs",10,1,137,137,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"form","form",16469056,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null)),null,(cljs.core.truth_(bel.model.xar)?bel.model.xar.cljs$lang$test:null)])),new cljs.core.Var(function(){return bel.evaluator.b_debug;},new cljs.core.Symbol("bel.evaluator","b-debug","bel.evaluator/b-debug",591650536,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"bel.evaluator","bel.evaluator",1137899495,null),new cljs.core.Symbol(null,"b-debug","b-debug",1801551870,null),"bel/evaluator.cljs",14,1,142,142,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null)),null,(cljs.core.truth_(bel.evaluator.b_debug)?bel.evaluator.b_debug.cljs$lang$test:null)])),new cljs.core.Var(function(){return bel.model.xdr;},new cljs.core.Symbol("bel.model","xdr","bel.model/xdr",1221927385,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"bel.model","bel.model",-1266674062,null),new cljs.core.Symbol(null,"xdr","xdr",750141277,null),"bel/model.cljs",10,1,141,141,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"form","form",16469056,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null)),null,(cljs.core.truth_(bel.model.xdr)?bel.model.xdr.cljs$lang$test:null)])),new cljs.core.Var(function(){return bel.model.type;},new cljs.core.Symbol("bel.model","type","bel.model/type",1126526039,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"bel.model","bel.model",-1266674062,null),new cljs.core.Symbol(null,"type","type",-1480165421,null),"bel/model.cljs",11,1,44,44,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null)),null,(cljs.core.truth_(bel.model.type)?bel.model.type.cljs$lang$test:null)])),new cljs.core.Var(function(){return bel.model.join;},new cljs.core.Symbol("bel.model","join","bel.model/join",1490036873,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"bel.model","bel.model",-1266674062,null),new cljs.core.Symbol(null,"join","join",881669637,null),"bel/model.cljs",11,1,98,98,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"a","a",-482876059,null),new cljs.core.Symbol(null,"b","b",-1172211299,null)], null)),null,(cljs.core.truth_(bel.model.join)?bel.model.join.cljs$lang$test:null)])),new cljs.core.Var(function(){return bel.model.car;},new cljs.core.Symbol("bel.model","car","bel.model/car",-1456713553,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"bel.model","bel.model",-1266674062,null),new cljs.core.Symbol(null,"car","car",84879915,null),"bel/model.cljs",10,1,102,102,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"form","form",16469056,null)], null)),null,(cljs.core.truth_(bel.model.car)?bel.model.car.cljs$lang$test:null)])),new cljs.core.Var(function(){return bel.evaluator.b_bin_LT_;},new cljs.core.Symbol("bel.evaluator","b-bin<","bel.evaluator/b-bin<",-1989802013,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"bel.evaluator","bel.evaluator",1137899495,null),new cljs.core.Symbol(null,"b-bin<","b-bin<",1099260149,null),"bel/evaluator.cljs",13,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"variadic?","variadic?",584179762),true,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),(0),new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),(0),new cljs.core.Keyword(null,"method-params","method-params",-980792179),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"xs","xs",-2004992428,null))], null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"xs","xs",-2004992428,null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.list(null)], null),1,174,174,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"xs","xs",-2004992428,null)], null)),null,(cljs.core.truth_(bel.evaluator.b_bin_LT_)?bel.evaluator.b_bin_LT_.cljs$lang$test:null)])),new cljs.core.Var(function(){return bel.model.sym;},new cljs.core.Symbol("bel.model","sym","bel.model/sym",-280584654,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"bel.model","bel.model",-1266674062,null),new cljs.core.Symbol(null,"sym","sym",195671222,null),"bel/model.cljs",9,1,145,145,cljs.core.List.EMPTY,null,(cljs.core.truth_(bel.model.sym)?bel.model.sym.cljs$lang$test:null)])),new cljs.core.Var(function(){return bel.model.cdr;},new cljs.core.Symbol("bel.model","cdr","bel.model/cdr",-861112988,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"bel.model","bel.model",-1266674062,null),new cljs.core.Symbol(null,"cdr","cdr",1766924024,null),"bel/model.cljs",10,1,114,114,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"form","form",16469056,null)], null)),null,(cljs.core.truth_(bel.model.cdr)?bel.model.cdr.cljs$lang$test:null)]))]),bel.evaluator.math_name__GT_fn], 0));
bel.evaluator.special_prim_name__GT_fn = new cljs.core.PersistentArrayMap(null, 5, ["dyn",new cljs.core.Var(function(){return bel.evaluator.b_dyn;},new cljs.core.Symbol("bel.evaluator","b-dyn","bel.evaluator/b-dyn",-1267354868,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"bel.evaluator","bel.evaluator",1137899495,null),new cljs.core.Symbol(null,"b-dyn","b-dyn",-329838094,null),"bel/evaluator.cljs",12,1,99,99,cljs.core.list(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"es","es",-822762550,null),new cljs.core.Symbol(null,"rs","rs",-1740853800,null),new cljs.core.Symbol(null,"env","env",-175281708,null),new cljs.core.Symbol(null,"variable","variable",1359185035,null),new cljs.core.Symbol(null,"arg","arg",-106730310,null),new cljs.core.Symbol(null,"after","after",-2059438855,null)], null)),null,(cljs.core.truth_(bel.evaluator.b_dyn)?bel.evaluator.b_dyn.cljs$lang$test:null)])),"ccc",new cljs.core.Var(function(){return bel.evaluator.b_ccc;},new cljs.core.Symbol("bel.evaluator","b-ccc","bel.evaluator/b-ccc",-2057914335,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"bel.evaluator","bel.evaluator",1137899495,null),new cljs.core.Symbol(null,"b-ccc","b-ccc",-583771361,null),"bel/evaluator.cljs",12,1,126,126,cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"es","es",-822762550,null),new cljs.core.Symbol(null,"rs","rs",-1740853800,null),new cljs.core.Symbol(null,"env","env",-175281708,null),new cljs.core.Symbol(null,"f","f",43394975,null)], null)),null,(cljs.core.truth_(bel.evaluator.b_ccc)?bel.evaluator.b_ccc.cljs$lang$test:null)])),"where",new cljs.core.Var(function(){return bel.evaluator.b_where;},new cljs.core.Symbol("bel.evaluator","b-where","bel.evaluator/b-where",-1765577900,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"bel.evaluator","bel.evaluator",1137899495,null),new cljs.core.Symbol(null,"b-where","b-where",-286930846,null),"bel/evaluator.cljs",14,1,33,33,cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"es","es",-822762550,null),new cljs.core.Symbol(null,"rs","rs",-1740853800,null),new cljs.core.Symbol(null,"env","env",-175281708,null),new cljs.core.Symbol(null,"x","x",-555367584,null)], null)),null,(cljs.core.truth_(bel.evaluator.b_where)?bel.evaluator.b_where.cljs$lang$test:null)])),"err",new cljs.core.Var(function(){return bel.evaluator.b_err;},new cljs.core.Symbol("bel.evaluator","b-err","bel.evaluator/b-err",-1171311839,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"bel.evaluator","bel.evaluator",1137899495,null),new cljs.core.Symbol(null,"b-err","b-err",-2109042121,null),"bel/evaluator.cljs",12,1,136,136,cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_es","_es",-995668245,null),new cljs.core.Symbol(null,"_rs","_rs",495851672,null),new cljs.core.Symbol(null,"_env","_env",-1935963291,null),new cljs.core.Symbol(null,"e","e",-1273166571,null)], null)),null,(cljs.core.truth_(bel.evaluator.b_err)?bel.evaluator.b_err.cljs$lang$test:null)])),"thread",new cljs.core.Var(function(){return bel.evaluator.b_thread;},new cljs.core.Symbol("bel.evaluator","b-thread","bel.evaluator/b-thread",-2146425181,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"bel.evaluator","bel.evaluator",1137899495,null),new cljs.core.Symbol(null,"b-thread","b-thread",-666990179,null),"bel/evaluator.cljs",15,1,80,80,cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"es","es",-822762550,null),new cljs.core.Symbol(null,"rs","rs",-1740853800,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"globe","globe",-1992262972,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"env1","env1",-1797873405,null)], null),new cljs.core.Symbol(null,"form","form",16469056,null)], null)),null,(cljs.core.truth_(bel.evaluator.b_thread)?bel.evaluator.b_thread.cljs$lang$test:null)]))], null);
bel.evaluator.bel_globe = (function bel$evaluator$bel_globe(){
var m = bel.model.mut_map();
cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__13690){
var vec__13691 = p__13690;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13691,(0),null);
var sym_k = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(k));
return bel.model.map_put(m,sym_k,(function (){var G__13695 = sym_k;
var G__13696 = bel.model.seq__GT_p(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bel.model.bel_lit,bel.model.bel_prim,sym_k], null));
return (bel.model.p.cljs$core$IFn$_invoke$arity$2 ? bel.model.p.cljs$core$IFn$_invoke$arity$2(G__13695,G__13696) : bel.model.p.call(null,G__13695,G__13696));
})());
}),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([bel.evaluator.prim_name__GT_fn,bel.evaluator.special_prim_name__GT_fn], 0))));

return m;
});
bel.evaluator.env = (function bel$evaluator$env(var_args){
var G__13709 = arguments.length;
switch (G__13709) {
case 0:
return bel.evaluator.env.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return bel.evaluator.env.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(bel.evaluator.env.cljs$core$IFn$_invoke$arity$0 = (function (){
return bel.evaluator.env.cljs$core$IFn$_invoke$arity$1(bel.evaluator.bel_globe());
}));

(bel.evaluator.env.cljs$core$IFn$_invoke$arity$1 = (function (g){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"globe","globe",662172797),g,new cljs.core.Keyword(null,"scope","scope",-439358418),bel.model.bel_nil,new cljs.core.Keyword(null,"dyn","dyn",248213352),bel.model.bel_nil], null);
}));

(bel.evaluator.env.cljs$lang$maxFixedArity = 1);

bel.evaluator.eval_if_2 = (function bel$evaluator$eval_if_2(es,rs,env,p__13727){
var vec__13730 = p__13727;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13730,(0),null);
var vec__13733 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13730,(1),null);
var consequent_form = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13733,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13733,(1),null);
var vec__13736 = bel.evaluator.stack_pop(rs);
var evaled_test_form = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13736,(0),null);
var rest_rs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13736,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(es,((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(bel.model.bel_nil,evaled_test_form))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [env,consequent_form], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(bel.model.bel_nil,r))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [env,r], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(bel.model.bel_nil,bel.model.cdr(r)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [env,bel.model.car(r)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [env,(bel.model.p.cljs$core$IFn$_invoke$arity$2 ? bel.model.p.cljs$core$IFn$_invoke$arity$2(bel.model.bel_if,r) : bel.model.p.call(null,bel.model.bel_if,r))], null)
)))),rest_rs], null);
});
bel.evaluator.eval_if_1 = (function bel$evaluator$eval_if_1(es,rs,env,p__13745){
var vec__13746 = p__13745;
var test_form = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13746,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13746,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(es,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"if-2","if-2",-859249213),r], null)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [env,test_form], null)], 0)),rs], null);
});
bel.evaluator.eval_set_2 = (function bel$evaluator$eval_set_2(es,rs,p__13753,form){
var map__13754 = p__13753;
var map__13754__$1 = cljs.core.__destructure_map(map__13754);
var _env = map__13754__$1;
var globe = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13754__$1,new cljs.core.Keyword(null,"globe","globe",662172797));
var vec__13755 = form;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13755,(0),null);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13755,(1),null);
var vec__13758 = bel.evaluator.stack_pop(rs);
var evaled_v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13758,(0),null);
var rest_rs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13758,(1),null);
bel.model.map_put(globe,sym,bel.evaluator.env_pair(sym,evaled_v));

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [es,rest_rs], null);
});
bel.evaluator.eval_set_1 = (function bel$evaluator$eval_set_1(es,rs,env,form){
var vec__13761 = form;
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13761,(0),null);
var after_sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13761,(1),null);
var _ = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(bel.model.bel_nil,after_sym))?null:(function(){throw (new Error(["Assert failed: ","Set sym needs a value","\n","(not= m/bel-nil after-sym)"].join('')))})());
var vec__13764 = after_sym;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13764,(0),null);
var after_v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13764,(1),null);
var es_SINGLEQUOTE_ = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(after_v,bel.model.bel_nil))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(es,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [env,(bel.model.p.cljs$core$IFn$_invoke$arity$2 ? bel.model.p.cljs$core$IFn$_invoke$arity$2(bel.model.bel_set,after_v) : bel.model.p.call(null,bel.model.bel_set,after_v))], null)):es);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(es_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-2","set-2",-1662096161),sym], null)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [env,v], null)], 0)),rs], null);
});
bel.evaluator.lit_type = (function bel$evaluator$lit_type(p__13767){
var vec__13768 = p__13767;
var _lit = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13768,(0),null);
var vec__13771 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13768,(1),null);
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13771,(0),null);
return t;
});
bel.evaluator.lit_v = (function bel$evaluator$lit_v(p__13774){
var vec__13775 = p__13774;
var _lit = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13775,(0),null);
var vec__13778 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13775,(1),null);
var _t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13778,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13778,(1),null);
return v;
});
bel.evaluator.assert_lit = (function bel$evaluator$assert_lit(p__13781){
var vec__13782 = p__13781;
var lit = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13782,(0),null);
var form = vec__13782;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(bel.model.bel_lit,lit)){
} else {
throw (new Error(["Assert failed: ",["expected lit expression got form = ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(form)].join(''),"\n","(= m/bel-lit lit)"].join('')));
}

return form;
});
bel.evaluator.bel_nil_args = (function bel$evaluator$bel_nil_args(f,args){
var arglist = cljs.core.first(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(f)));
var niled_args = (cljs.core.truth_(arglist)?cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i,_){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$3(args,i,bel.model.bel_nil);
}),arglist):args);
return niled_args;
});
bel.evaluator.eval_prim_simple = (function bel$evaluator$eval_prim_simple(es,rs,env,p__13785){
var vec__13786 = p__13785;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13786,(0),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13786,(1),null);
var simple_f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13786,(2),null);
var vec__13789 = bel.evaluator.stack_pop(rs);
var evaled_args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13789,(0),null);
var rest_rs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13789,(1),null);
var args = bel.model.p__GT_seq(evaled_args);
try{if(bel.evaluator.in_where_QMARK_(es)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.pop(es),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(rs,(function (){var G__13795 = bel.model.car(evaled_args);
var G__13796 = (function (){var G__13797 = (function (){var pred__13799 = cljs.core._EQ_;
var expr__13800 = n;
if(cljs.core.truth_((pred__13799.cljs$core$IFn$_invoke$arity$2 ? pred__13799.cljs$core$IFn$_invoke$arity$2("car",expr__13800) : pred__13799.call(null,"car",expr__13800)))){
return bel.model.bel_a;
} else {
if(cljs.core.truth_((pred__13799.cljs$core$IFn$_invoke$arity$2 ? pred__13799.cljs$core$IFn$_invoke$arity$2("cdr",expr__13800) : pred__13799.call(null,"cdr",expr__13800)))){
return bel.model.bel_d;
} else {
throw (new Error("unexpected use of where"));
}
}
})();
var G__13798 = bel.model.bel_nil;
return (bel.model.p.cljs$core$IFn$_invoke$arity$2 ? bel.model.p.cljs$core$IFn$_invoke$arity$2(G__13797,G__13798) : bel.model.p.call(null,G__13797,G__13798));
})();
return (bel.model.p.cljs$core$IFn$_invoke$arity$2 ? bel.model.p.cljs$core$IFn$_invoke$arity$2(G__13795,G__13796) : bel.model.p.call(null,G__13795,G__13796));
})())], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [es,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(rest_rs,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(simple_f,bel.evaluator.bel_nil_args(simple_f,args)))], null);
}
}catch (e13792){if((e13792 instanceof Object)){
var e = e13792;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(es,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [env,(function (){var G__13793 = bel.model.bel_err_sym;
var G__13794 = (bel.model.p.cljs$core$IFn$_invoke$arity$2 ? bel.model.p.cljs$core$IFn$_invoke$arity$2(e,bel.model.bel_nil) : bel.model.p.call(null,e,bel.model.bel_nil));
return (bel.model.p.cljs$core$IFn$_invoke$arity$2 ? bel.model.p.cljs$core$IFn$_invoke$arity$2(G__13793,G__13794) : bel.model.p.call(null,G__13793,G__13794));
})()], null)),rest_rs], null);
} else {
throw e13792;

}
}});
bel.evaluator.eval_prim = (function bel$evaluator$eval_prim(es,rs,env,litv,args_head){
var n = cljs.core.name(bel.model.car(litv));
var simple_f = (bel.evaluator.prim_name__GT_fn.cljs$core$IFn$_invoke$arity$1 ? bel.evaluator.prim_name__GT_fn.cljs$core$IFn$_invoke$arity$1(n) : bel.evaluator.prim_name__GT_fn.call(null,n));
var special_f = (bel.evaluator.special_prim_name__GT_fn.cljs$core$IFn$_invoke$arity$1 ? bel.evaluator.special_prim_name__GT_fn.cljs$core$IFn$_invoke$arity$1(n) : bel.evaluator.special_prim_name__GT_fn.call(null,n));
if(cljs.core.truth_(simple_f)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(es,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [env,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"eval-prim-simple","eval-prim-simple",796575653),n,simple_f], null)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"eval-many-1","eval-many-1",219906014),args_head], null)], null)], 0)),rs], null);
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(special_f,bel.evaluator.bel_nil_args(special_f,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [es,rs,env], null),bel.model.p__GT_seq(args_head))));
}
});
bel.evaluator.assign_vars_typecheck_2 = (function bel$evaluator$assign_vars_typecheck_2(es,rs,env,p__13802){
var vec__13803 = p__13802;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13803,(0),null);
var variable = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13803,(1),null);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13803,(2),null);
var vec__13806 = bel.evaluator.stack_pop(rs);
var check = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13806,(0),null);
var rest_rs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13806,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(bel.model.bel_nil,check)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(es,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [env,(function (){var G__13809 = bel.model.bel_err_sym;
var G__13810 = (function (){var G__13811 = bel.model.quoted_p(new cljs.core.Symbol(null,"mistype","mistype",-971919030,null));
var G__13812 = bel.model.bel_nil;
return (bel.model.p.cljs$core$IFn$_invoke$arity$2 ? bel.model.p.cljs$core$IFn$_invoke$arity$2(G__13811,G__13812) : bel.model.p.call(null,G__13811,G__13812));
})();
return (bel.model.p.cljs$core$IFn$_invoke$arity$2 ? bel.model.p.cljs$core$IFn$_invoke$arity$2(G__13809,G__13810) : bel.model.p.call(null,G__13809,G__13810));
})()], null)),rs], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(es,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [env,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assign-vars-1","assign-vars-1",338096520),bel.model.bel_typecheck_var(variable),arg], null)], null)),rest_rs], null);
}
});
bel.evaluator.assign_vars_typecheck_1 = (function bel$evaluator$assign_vars_typecheck_1(es,rs,env,p__13813){
var vec__13814 = p__13813;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13814,(0),null);
var variable = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13814,(1),null);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13814,(2),null);
var vec__13817 = bel.evaluator.stack_pop(rs);
var evaled_f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13817,(0),null);
var rest_rs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13817,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(es,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [env,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assign-vars-typecheck-2","assign-vars-typecheck-2",494666689),variable,arg], null)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [env,(function (){var G__13820 = evaled_f;
var G__13821 = (function (){var G__13822 = bel.model.quoted_p(arg);
var G__13823 = bel.model.bel_nil;
return (bel.model.p.cljs$core$IFn$_invoke$arity$2 ? bel.model.p.cljs$core$IFn$_invoke$arity$2(G__13822,G__13823) : bel.model.p.call(null,G__13822,G__13823));
})();
return (bel.model.p.cljs$core$IFn$_invoke$arity$2 ? bel.model.p.cljs$core$IFn$_invoke$arity$2(G__13820,G__13821) : bel.model.p.call(null,G__13820,G__13821));
})()], null)], 0)),rest_rs], null);
});
bel.evaluator.assign_vars_optional_arg = (function bel$evaluator$assign_vars_optional_arg(es,rs,env,p__13824){
var vec__13825 = p__13824;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13825,(0),null);
var variable = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13825,(1),null);
var vec__13828 = bel.evaluator.stack_pop(rs);
var arg_evaled = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13828,(0),null);
var rest_rs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13828,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(es,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [env,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assign-vars-1","assign-vars-1",338096520),variable,arg_evaled], null)], null)),rest_rs], null);
});
bel.evaluator.assign_vars_rest = (function bel$evaluator$assign_vars_rest(es,rs,env,p__13831){
var vec__13832 = p__13831;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13832,(0),null);
var var_head = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13832,(1),null);
var arg_head = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13832,(2),null);
var vec__13835 = bel.evaluator.stack_pop(rs);
var scope = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13835,(0),null);
var rest_rs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13835,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(es,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword(null,"scope","scope",-439358418),scope),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assign-vars-1","assign-vars-1",338096520),var_head,arg_head], null)], null)),rest_rs], null);
});
bel.evaluator.assign_vars_1 = (function bel$evaluator$assign_vars_1(es,rs,p__13838,p__13839){
var map__13840 = p__13838;
var map__13840__$1 = cljs.core.__destructure_map(map__13840);
var env = map__13840__$1;
var scope = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13840__$1,new cljs.core.Keyword(null,"scope","scope",-439358418));
var vec__13841 = p__13839;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13841,(0),null);
var var_head = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13841,(1),null);
var arg_head = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13841,(2),null);
if(cljs.core.every_QMARK_(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,bel.model.bel_nil),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [var_head,arg_head], null))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [es,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(rs,scope)], null);
} else {
if(cljs.core.truth_((bel.model.bel_variable_QMARK_.cljs$core$IFn$_invoke$arity$1 ? bel.model.bel_variable_QMARK_.cljs$core$IFn$_invoke$arity$1(var_head) : bel.model.bel_variable_QMARK_.call(null,var_head)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [es,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(rs,bel.model.map_assoc(scope,var_head,bel.evaluator.env_pair(var_head,arg_head)))], null);
} else {
if(bel.model.bel_optional_QMARK_(var_head)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(bel.model.bel_nil,arg_head)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(es,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assign-vars-optional-arg","assign-vars-optional-arg",-1334516659),bel.model.bel_optional_var(var_head)], null)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [env,bel.model.bel_optional_arg(var_head)], null)], 0)),rs], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(es,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [env,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assign-vars-1","assign-vars-1",338096520),bel.model.bel_optional_var(var_head),arg_head], null)], null)),rs], null);
}
} else {
if(bel.model.bel_typecheck_QMARK_(var_head)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(es,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [env,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assign-vars-typecheck-1","assign-vars-typecheck-1",-1863391890),var_head,arg_head], null)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [env,bel.model.bel_typecheck_f(var_head)], null)], 0)),rs], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(es,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [env,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assign-vars-rest","assign-vars-rest",1255636267),bel.model.cdr(var_head),bel.model.cdr(arg_head)], null)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [env,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assign-vars-1","assign-vars-1",338096520),bel.model.car(var_head),bel.model.car(arg_head)], null)], null)], 0)),rs], null);

}
}
}
}
});
bel.evaluator.eval_clo_2 = (function bel$evaluator$eval_clo_2(es,rs,env,p__13844){
var vec__13845 = p__13844;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13845,(0),null);
var body_head = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13845,(1),null);
var vec__13848 = bel.evaluator.stack_pop(rs);
var scope = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13848,(0),null);
var rest_rs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13848,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(es,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword(null,"scope","scope",-439358418),scope),body_head], null)),rest_rs], null);
});
bel.evaluator.clo_expression_stack = (function bel$evaluator$clo_expression_stack(env,litv,args_head){
var vec__13851 = litv;
var scope = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13851,(0),null);
var vec__13854 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13851,(1),null);
var args_sym_head = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13854,(0),null);
var vec__13857 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13854,(1),null);
var body_head = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13857,(0),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"eval-clo-2","eval-clo-2",778162519),body_head], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword(null,"scope","scope",-439358418),scope),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assign-vars-1","assign-vars-1",338096520),args_sym_head,args_head], null)], null)], null);
});
bel.evaluator.eval_clo = (function bel$evaluator$eval_clo(es,rs,env,litv,args_head){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [es], null),bel.evaluator.clo_expression_stack(env,litv,args_head))),rs], null);
});
bel.evaluator.eval_mac_2 = (function bel$evaluator$eval_mac_2(es,rs,env,_form){
var vec__13860 = bel.evaluator.stack_pop(rs);
var code = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13860,(0),null);
var rest_rs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13860,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(es,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [env,code], null)),rest_rs], null);
});
bel.evaluator.eval_mac_1 = (function bel$evaluator$eval_mac_1(es,rs,env,litv,args_head){
var vec__13863 = litv;
var vec__13866 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13863,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13866,(0),null);
var vec__13869 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13866,(1),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13869,(0),null);
var clo = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13869,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [es,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [env,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"eval-mac-2","eval-mac-2",-1281361943)], null)], null)], null),bel.evaluator.clo_expression_stack(env,clo,args_head))),rs], null);
});
bel.evaluator.eval_lit_1 = (function bel$evaluator$eval_lit_1(es,rs,env,p__13872){
var vec__13873 = p__13872;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13873,(0),null);
var evaled_lit = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13873,(1),null);
var vec__13876 = bel.evaluator.stack_pop(rs);
var args_head = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13876,(0),null);
var rest_rs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13876,(1),null);
var litv = bel.evaluator.lit_v(evaled_lit);
var pred__13879 = cljs.core._EQ_;
var expr__13880 = bel.evaluator.lit_type(evaled_lit);
if(cljs.core.truth_((pred__13879.cljs$core$IFn$_invoke$arity$2 ? pred__13879.cljs$core$IFn$_invoke$arity$2(bel.model.bel_prim,expr__13880) : pred__13879.call(null,bel.model.bel_prim,expr__13880)))){
return bel.evaluator.eval_prim(es,rest_rs,env,litv,args_head);
} else {
if(cljs.core.truth_((pred__13879.cljs$core$IFn$_invoke$arity$2 ? pred__13879.cljs$core$IFn$_invoke$arity$2(bel.model.bel_clo,expr__13880) : pred__13879.call(null,bel.model.bel_clo,expr__13880)))){
return bel.evaluator.eval_clo(es,rest_rs,env,litv,args_head);
} else {
if(cljs.core.truth_((pred__13879.cljs$core$IFn$_invoke$arity$2 ? pred__13879.cljs$core$IFn$_invoke$arity$2(bel.model.bel_mac,expr__13880) : pred__13879.call(null,bel.model.bel_mac,expr__13880)))){
return bel.evaluator.eval_mac_1(es,rest_rs,env,litv,args_head);
} else {
if(cljs.core.truth_((pred__13879.cljs$core$IFn$_invoke$arity$2 ? pred__13879.cljs$core$IFn$_invoke$arity$2(bel.model.bel_cont,expr__13880) : pred__13879.call(null,bel.model.bel_cont,expr__13880)))){
return bel.evaluator.eval_cont(es,rest_rs,env,litv,args_head);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__13880)].join('')));
}
}
}
}
});
bel.evaluator.eval_many_2 = (function bel$evaluator$eval_many_2(es,rs,_env,_form){
var vec__13882 = bel.evaluator.stack_pop_until_breakpoint(new cljs.core.Keyword(null,"eval-many-breakpoint","eval-many-breakpoint",-760836807),rs);
var top_ps = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13882,(0),null);
var rest_rs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13882,(1),null);
var evaled_pairs = bel.model.seq__GT_p(cljs.core.reverse(top_ps));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [es,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(rest_rs,evaled_pairs)], null);
});
bel.evaluator.eval_many_1 = (function bel$evaluator$eval_many_1(es,rs,env,p__13885){
var vec__13886 = p__13885;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13886,(0),null);
var args_head = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13886,(1),null);
var pairs_to_eval = bel.model.p__GT_seq(args_head);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [es,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [env,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"eval-many-2","eval-many-2",-1324470170)], null)], null)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [env,p], null);
}),pairs_to_eval))),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(rs,new cljs.core.Keyword(null,"eval-many-breakpoint","eval-many-breakpoint",-760836807))], null);
});
bel.evaluator.eval_application_2 = (function bel$evaluator$eval_application_2(es,rs,env,p__13889){
var vec__13890 = p__13889;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13890,(0),null);
var args_head = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13890,(1),null);
var vec__13893 = bel.evaluator.stack_pop(rs);
var evaled = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13893,(0),null);
var rest_rs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13893,(1),null);
if(cljs.core.truth_((bel.model.number_QMARK_.cljs$core$IFn$_invoke$arity$1 ? bel.model.number_QMARK_.cljs$core$IFn$_invoke$arity$1(evaled) : bel.model.number_QMARK_.call(null,evaled)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(es,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"eval-lit-1","eval-lit-1",1695921063),bel.model.cdr(bel.evaluator.v_pair(env,new cljs.core.Symbol(null,"nth","nth",1529209554,null)))], null)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"eval-many-1","eval-many-1",219906014),(bel.model.p.cljs$core$IFn$_invoke$arity$2 ? bel.model.p.cljs$core$IFn$_invoke$arity$2(evaled,args_head) : bel.model.p.call(null,evaled,args_head))], null)], null)], 0)),rest_rs], null);
} else {
var evaled_lit = bel.evaluator.assert_lit(evaled);
var es_SINGLEQUOTE_ = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(es,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"eval-lit-1","eval-lit-1",1695921063),evaled_lit], null)], null));
if(cljs.core.truth_((function (){var G__13897 = bel.evaluator.lit_type(evaled_lit);
var fexpr__13896 = cljs.core.PersistentHashSet.createAsIfByAssoc([bel.model.bel_prim,bel.model.bel_mac]);
return (fexpr__13896.cljs$core$IFn$_invoke$arity$1 ? fexpr__13896.cljs$core$IFn$_invoke$arity$1(G__13897) : fexpr__13896.call(null,G__13897));
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [es_SINGLEQUOTE_,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(rest_rs,args_head)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(es_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"eval-many-1","eval-many-1",219906014),args_head], null)], null)),rest_rs], null);
}
}
});
bel.evaluator.eval_application_1 = (function bel$evaluator$eval_application_1(es,rs,env,p__13898){
var vec__13899 = p__13898;
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13899,(0),null);
var args_head = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13899,(1),null);
var _form = vec__13899;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(es,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"application-2","application-2",-1151012964),args_head], null)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [env,f], null)], 0)),rs], null);
});
bel.evaluator.apply_head__GT_args_head = (function bel$evaluator$apply_head__GT_args_head(x){
var xs = bel.model.p__GT_seq(x);
var but_last = cljs.core.drop_last.cljs$core$IFn$_invoke$arity$1(xs);
var l = cljs.core.last(xs);
var ls = (cljs.core.truth_((bel.model.pair_QMARK_.cljs$core$IFn$_invoke$arity$1 ? bel.model.pair_QMARK_.cljs$core$IFn$_invoke$arity$1(l) : bel.model.pair_QMARK_.call(null,l)))?bel.model.p__GT_seq(l):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [l], null));
return bel.model.seq__GT_p(cljs.core.map.cljs$core$IFn$_invoke$arity$2(bel.model.quoted_p,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(but_last,ls)));
});
bel.evaluator.eval_apply_2 = (function bel$evaluator$eval_apply_2(es,rs,env,p__13902){
var vec__13903 = p__13902;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13903,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13903,(1),null);
var vec__13906 = bel.evaluator.stack_pop(rs);
var evaled_apply_head = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13906,(0),null);
var rest_rs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13906,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(es,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [env,(function (){var G__13909 = f;
var G__13910 = bel.evaluator.apply_head__GT_args_head(evaled_apply_head);
return (bel.model.p.cljs$core$IFn$_invoke$arity$2 ? bel.model.p.cljs$core$IFn$_invoke$arity$2(G__13909,G__13910) : bel.model.p.call(null,G__13909,G__13910));
})()], null)),rest_rs], null);
});
bel.evaluator.eval_apply_1 = (function bel$evaluator$eval_apply_1(es,rs,env,p__13911){
var vec__13912 = p__13911;
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13912,(0),null);
var apply_head = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13912,(1),null);
var _form = vec__13912;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(es,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"eval-apply-2","eval-apply-2",1435873441),f], null)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"eval-many-1","eval-many-1",219906014),apply_head], null)], null)], 0)),rs], null);
});
bel.evaluator.eval_pair = (function bel$evaluator$eval_pair(es,rs,env,p__13915){
var vec__13916 = p__13915;
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13916,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13916,(1),null);
var form = vec__13916;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(bel.model.bel_quote,l)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [es,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(rs,bel.model.car(r))], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(bel.model.bel_set,l)){
return bel.evaluator.eval_set_1(es,rs,env,r);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(bel.model.bel_if,l)){
return bel.evaluator.eval_if_1(es,rs,env,r);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(bel.model.bel_apply,l)){
return bel.evaluator.eval_apply_1(es,rs,env,r);
} else {
return bel.evaluator.eval_application_1(es,rs,env,form);

}
}
}
}
});
bel.evaluator.eval_bq_comma_1 = (function bel$evaluator$eval_bq_comma_1(es,rs,_env,_form){
var vec__13919 = bel.evaluator.stack_pop_2(rs);
var vec__13922 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13919,(0),null);
var r_evaled = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13922,(0),null);
var h_evaled = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13922,(1),null);
var rest_rs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13919,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [es,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(rest_rs,(bel.model.p.cljs$core$IFn$_invoke$arity$2 ? bel.model.p.cljs$core$IFn$_invoke$arity$2(h_evaled,r_evaled) : bel.model.p.call(null,h_evaled,r_evaled)))], null);
});
bel.evaluator.eval_bq_splice_1 = (function bel$evaluator$eval_bq_splice_1(es,rs,_env,_form){
var vec__13925 = bel.evaluator.stack_pop_2(rs);
var vec__13928 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13925,(0),null);
var r_evaled = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13928,(0),null);
var h_evaled = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13928,(1),null);
var rest_rs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13925,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [es,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(rest_rs,bel.model.p_append(h_evaled,r_evaled))], null);
});
bel.evaluator.eval_bq_pair_1 = (function bel$evaluator$eval_bq_pair_1(es,rs,_env,_form){
var vec__13931 = bel.evaluator.stack_pop_2(rs);
var vec__13934 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13931,(0),null);
var r_evaled = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13934,(0),null);
var h_evaled = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13934,(1),null);
var rest_rs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13931,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [es,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(rest_rs,(bel.model.p.cljs$core$IFn$_invoke$arity$2 ? bel.model.p.cljs$core$IFn$_invoke$arity$2(h_evaled,r_evaled) : bel.model.p.call(null,h_evaled,r_evaled)))], null);
});
bel.evaluator.eval_bq_rest_1 = (function bel$evaluator$eval_bq_rest_1(es,rs,_env,p__13937){
var vec__13938 = p__13937;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13938,(0),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13938,(1),null);
var vec__13941 = bel.evaluator.stack_pop(rs);
var r_evaled = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13941,(0),null);
var rest_rs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13941,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [es,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(rest_rs,(bel.model.p.cljs$core$IFn$_invoke$arity$2 ? bel.model.p.cljs$core$IFn$_invoke$arity$2(h,r_evaled) : bel.model.p.call(null,h,r_evaled)))], null);
});
bel.evaluator.eval_backquote = (function bel$evaluator$eval_backquote(es,rs,env,p__13944){
var vec__13945 = p__13944;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13945,(0),null);
var form = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13945,(1),null);
var t = bel.model.type(form);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(t,new cljs.core.Symbol(null,"comma","comma",-955411024,null))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(es,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [env,cljs.core.second(form)], null)),rs], null);
} else {
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(t,new cljs.core.Symbol(null,"pair","pair",1193015215,null))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [es,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(rs,form)], null);
} else {
var vec__13948 = form;
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13948,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13948,(1),null);
var h_t = bel.model.type(h);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(h_t,new cljs.core.Symbol(null,"comma","comma",-955411024,null))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(es,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [env,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"eval-bq-comma-1","eval-bq-comma-1",2071833366)], null)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [env,cljs.core.second(h)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"backquote","backquote",1330570368),r], null)], null)], 0)),rs], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(h_t,new cljs.core.Symbol(null,"splice","splice",2090119692,null))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(es,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [env,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"eval-bq-splice-1","eval-bq-splice-1",1390566886)], null)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [env,cljs.core.second(h)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"backquote","backquote",1330570368),r], null)], null)], 0)),rs], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(h_t,new cljs.core.Symbol(null,"pair","pair",1193015215,null))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(es,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [env,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"eval-bq-pair-1","eval-bq-pair-1",-905734135)], null)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"backquote","backquote",1330570368),h], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"backquote","backquote",1330570368),r], null)], null)], 0)),rs], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(es,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"eval-bq-rest-1","eval-bq-rest-1",-1098808526),h], null)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"backquote","backquote",1330570368),r], null)], null)], 0)),rs], null);

}
}
}

}
}
});
bel.evaluator.literal_QMARK_ = (function bel$evaluator$literal_QMARK_(form){
var or__5045__auto__ = (function (){var G__13952 = bel.model.type_nilable(form);
var fexpr__13951 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Symbol(null,"number","number",-1084057331,null),null,new cljs.core.Symbol(null,"char","char",998943941,null),null,new cljs.core.Symbol(null,"clj-err","clj-err",513595198,null),null], null), null);
return (fexpr__13951.cljs$core$IFn$_invoke$arity$1 ? fexpr__13951.cljs$core$IFn$_invoke$arity$1(G__13952) : fexpr__13951.call(null,G__13952));
})();
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = (function (){var fexpr__13953 = cljs.core.PersistentHashSet.createAsIfByAssoc([bel.model.bel_t,bel.model.bel_nil,bel.model.bel_o,bel.model.bel_apply]);
return (fexpr__13953.cljs$core$IFn$_invoke$arity$1 ? fexpr__13953.cljs$core$IFn$_invoke$arity$1(form) : fexpr__13953.call(null,form));
})();
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
var or__5045__auto____$2 = (function (){var and__5043__auto__ = (bel.model.pair_QMARK_.cljs$core$IFn$_invoke$arity$1 ? bel.model.pair_QMARK_.cljs$core$IFn$_invoke$arity$1(form) : bel.model.pair_QMARK_.call(null,form));
if(cljs.core.truth_(and__5043__auto__)){
var G__13955 = bel.model.car(form);
var fexpr__13954 = cljs.core.PersistentHashSet.createAsIfByAssoc([bel.model.bel_lit]);
return (fexpr__13954.cljs$core$IFn$_invoke$arity$1 ? fexpr__13954.cljs$core$IFn$_invoke$arity$1(G__13955) : fexpr__13954.call(null,G__13955));
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(or__5045__auto____$2)){
return or__5045__auto____$2;
} else {
return (bel.model.string_QMARK_.cljs$core$IFn$_invoke$arity$1 ? bel.model.string_QMARK_.cljs$core$IFn$_invoke$arity$1(form) : bel.model.string_QMARK_.call(null,form));
}
}
}
});
bel.evaluator.step__GT_fn = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"backquote","backquote",1330570368),new cljs.core.Keyword(null,"eval-apply-2","eval-apply-2",1435873441),new cljs.core.Keyword(null,"assign-vars-typecheck-2","assign-vars-typecheck-2",494666689),new cljs.core.Keyword(null,"dyn-2","dyn-2",871987235),new cljs.core.Keyword(null,"if-2","if-2",-859249213),new cljs.core.Keyword(null,"eval-prim-simple","eval-prim-simple",796575653),new cljs.core.Keyword(null,"eval-many-2","eval-many-2",-1324470170),new cljs.core.Keyword(null,"eval-bq-splice-1","eval-bq-splice-1",1390566886),new cljs.core.Keyword(null,"eval-lit-1","eval-lit-1",1695921063),new cljs.core.Keyword(null,"assign-vars-1","assign-vars-1",338096520),new cljs.core.Keyword(null,"eval-bq-pair-1","eval-bq-pair-1",-905734135),new cljs.core.Keyword(null,"eval-mac-2","eval-mac-2",-1281361943),new cljs.core.Keyword(null,"assign-vars-rest","assign-vars-rest",1255636267),new cljs.core.Keyword(null,"assign-vars-optional-arg","assign-vars-optional-arg",-1334516659),new cljs.core.Keyword(null,"ccc-2","ccc-2",-459273906),new cljs.core.Keyword(null,"assign-vars-typecheck-1","assign-vars-typecheck-1",-1863391890),new cljs.core.Keyword(null,"eval-bq-rest-1","eval-bq-rest-1",-1098808526),new cljs.core.Keyword(null,"eval-bq-comma-1","eval-bq-comma-1",2071833366),new cljs.core.Keyword(null,"eval-clo-2","eval-clo-2",778162519),new cljs.core.Keyword(null,"application-2","application-2",-1151012964),new cljs.core.Keyword(null,"eval-many-1","eval-many-1",219906014),new cljs.core.Keyword(null,"set-2","set-2",-1662096161)],[bel.evaluator.eval_backquote,bel.evaluator.eval_apply_2,bel.evaluator.assign_vars_typecheck_2,bel.evaluator.eval_dyn_2,bel.evaluator.eval_if_2,bel.evaluator.eval_prim_simple,bel.evaluator.eval_many_2,bel.evaluator.eval_bq_splice_1,bel.evaluator.eval_lit_1,bel.evaluator.assign_vars_1,bel.evaluator.eval_bq_pair_1,bel.evaluator.eval_mac_2,bel.evaluator.assign_vars_rest,bel.evaluator.assign_vars_optional_arg,bel.evaluator.eval_ccc_2,bel.evaluator.assign_vars_typecheck_1,bel.evaluator.eval_bq_rest_1,bel.evaluator.eval_bq_comma_1,bel.evaluator.eval_clo_2,bel.evaluator.eval_application_2,bel.evaluator.eval_many_1,bel.evaluator.eval_set_2]);
bel.evaluator.eval_step = (function bel$evaluator$eval_step(es,rs){
var vec__13956 = bel.evaluator.stack_pop(es);
var top = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13956,(0),null);
var rest_es = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13956,(1),null);
var vec__13959 = top;
var env = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13959,(0),null);
var form = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13959,(1),null);
if(cljs.core.truth_(bel.evaluator.literal_QMARK_(form))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rest_es,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(rs,form)], null);
} else {
if(cljs.core.truth_((bel.model.bel_variable_QMARK_.cljs$core$IFn$_invoke$arity$1 ? bel.model.bel_variable_QMARK_.cljs$core$IFn$_invoke$arity$1(form) : bel.model.bel_variable_QMARK_.call(null,form)))){
return bel.evaluator.eval_variable(rest_es,rs,env,form);
} else {
if(cljs.core.truth_((bel.model.pair_QMARK_.cljs$core$IFn$_invoke$arity$1 ? bel.model.pair_QMARK_.cljs$core$IFn$_invoke$arity$1(form) : bel.model.pair_QMARK_.call(null,form)))){
return bel.evaluator.eval_pair(rest_es,rs,env,form);
} else {
var f = (function (){var G__13962 = cljs.core.first(form);
return (bel.evaluator.step__GT_fn.cljs$core$IFn$_invoke$arity$1 ? bel.evaluator.step__GT_fn.cljs$core$IFn$_invoke$arity$1(G__13962) : bel.evaluator.step__GT_fn.call(null,G__13962));
})();
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(rest_es,rs,env,form) : f.call(null,rest_es,rs,env,form));

}
}
}
});
bel.evaluator.debug_loop = (function bel$evaluator$debug_loop(tid,es,rs){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["---start--"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["tid:",tid], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["in:"], 0));

cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.println,bel.reader.bel__GT_pretty,cljs.core.second),es));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["out:"], 0));

cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.println,rs));

return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["---end---"], 0));
});
bel.evaluator.start_thread_command_QMARK_ = (function bel$evaluator$start_thread_command_QMARK_(form){
return ((cljs.core.seqable_QMARK_(form)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"start-thread","start-thread",214043518),cljs.core.first(form))));
});
bel.evaluator.start_thread_command__GT_thread = (function bel$evaluator$start_thread_command__GT_thread(p__13963){
var vec__13964 = p__13963;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13964,(0),null);
var env = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13964,(1),null);
var form = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13964,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.gensym.cljs$core$IFn$_invoke$arity$0(),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [env,form], null),null,(1),null)),cljs.core.List.EMPTY], null);
});
bel.evaluator.locking_QMARK_ = (function bel$evaluator$locking_QMARK_(es){
var lock = (function (){var G__13967 = es;
var G__13967__$1 = (((G__13967 == null))?null:cljs.core.peek(G__13967));
var G__13967__$2 = (((G__13967__$1 == null))?null:cljs.core.first(G__13967__$1));
var G__13967__$3 = (((G__13967__$2 == null))?null:new cljs.core.Keyword(null,"dyn","dyn",248213352).cljs$core$IFn$_invoke$arity$1(G__13967__$2));
if((G__13967__$3 == null)){
return null;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(G__13967__$3,new cljs.core.Symbol(null,"lock","lock",1152343461,null));
}
})();
var and__5043__auto__ = lock;
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(lock,bel.model.bel_nil);
} else {
return and__5043__auto__;
}
});
bel.evaluator.eval = (function bel$evaluator$eval(threads){
var threads__$1 = threads;
while(true){
var vec__13968 = threads__$1;
var seq__13969 = cljs.core.seq(vec__13968);
var first__13970 = cljs.core.first(seq__13969);
var seq__13969__$1 = cljs.core.next(seq__13969);
var top_thread = first__13970;
var rest_threads = seq__13969__$1;
var vec__13971 = top_thread;
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13971,(0),null);
var es = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13971,(1),null);
var rs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13971,(2),null);
var vec__13974 = cljs.core.peek(es);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13974,(0),null);
var top_form = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13974,(1),null);
if(cljs.core.empty_QMARK_(es)){
if(cljs.core.empty_QMARK_(rest_threads)){
var or__5045__auto__ = cljs.core.peek(rs);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return bel.model.bel_nil;
}
} else {
var G__13989 = rest_threads;
threads__$1 = G__13989;
continue;
}
} else {
if(bel.evaluator.start_thread_command_QMARK_(top_form)){
var G__13990 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bel.evaluator.start_thread_command__GT_thread(top_form),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tid,cljs.core.pop(es),rs], null)], null),rest_threads);
threads__$1 = G__13990;
continue;
} else {
var vec__13977 = bel.evaluator.eval_step(es,rs);
var es_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13977,(0),null);
var rs_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13977,(1),null);
var thread_SINGLEQUOTE_ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tid,es_SINGLEQUOTE_,rs_SINGLEQUOTE_], null);
var G__13991 = (cljs.core.truth_(bel.evaluator.locking_QMARK_(es_SINGLEQUOTE_))?cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [thread_SINGLEQUOTE_], null),rest_threads):cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(rest_threads),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [thread_SINGLEQUOTE_], null)));
threads__$1 = G__13991;
continue;

}
}
break;
}
});
bel.evaluator.eval_single = (function bel$evaluator$eval_single(env,form){
return bel.evaluator.eval(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.gensym.cljs$core$IFn$_invoke$arity$0(),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [env,form], null),null,(1),null)),cljs.core.List.EMPTY], null)], null));
});
bel.evaluator.eval_all = (function bel$evaluator$eval_all(env,strs){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (s){
return bel.evaluator.eval_single(env,bel.reader.parse(s));
}),strs);
});

//# sourceMappingURL=bel.evaluator.js.map
