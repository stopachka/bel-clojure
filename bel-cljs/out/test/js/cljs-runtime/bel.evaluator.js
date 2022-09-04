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
var G__28574 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(peeks,cljs.core.peek(pops));
var G__28575 = cljs.core.pop(pops);
peeks = G__28574;
pops = G__28575;
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
bel.evaluator.v_pair = (function bel$evaluator$v_pair(p__28202,form){
var map__28203 = p__28202;
var map__28203__$1 = cljs.core.__destructure_map(map__28203);
var dyn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28203__$1,new cljs.core.Keyword(null,"dyn","dyn",248213352));
var scope = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28203__$1,new cljs.core.Keyword(null,"scope","scope",-439358418));
var globe = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28203__$1,new cljs.core.Keyword(null,"globe","globe",662172797));
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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.pop(es),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(rs,(function (){var G__28207 = vp;
var G__28208 = (bel.model.p.cljs$core$IFn$_invoke$arity$2 ? bel.model.p.cljs$core$IFn$_invoke$arity$2(bel.model.bel_d,bel.model.bel_nil) : bel.model.p.call(null,bel.model.bel_d,bel.model.bel_nil));
return (bel.model.p.cljs$core$IFn$_invoke$arity$2 ? bel.model.p.cljs$core$IFn$_invoke$arity$2(G__28207,G__28208) : bel.model.p.call(null,G__28207,G__28208));
})())], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [es,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(rs,bel.model.cdr(vp))], null);
}

}
}
});
bel.evaluator.b_thread = (function bel$evaluator$b_thread(es,rs,p__28211,form){
var map__28212 = p__28211;
var map__28212__$1 = cljs.core.__destructure_map(map__28212);
var env1 = map__28212__$1;
var globe = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28212__$1,new cljs.core.Keyword(null,"globe","globe",662172797));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(es,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [env1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"start-thread","start-thread",214043518),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((bel.evaluator.env.cljs$core$IFn$_invoke$arity$0 ? bel.evaluator.env.cljs$core$IFn$_invoke$arity$0() : bel.evaluator.env.call(null)),new cljs.core.Keyword(null,"globe","globe",662172797),globe),form], null)], null)),rs], null);
});
bel.evaluator.eval_dyn_2 = (function bel$evaluator$eval_dyn_2(es,rs,env,p__28214){
var vec__28216 = p__28214;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28216,(0),null);
var variable = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28216,(1),null);
var after = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28216,(2),null);
var vec__28219 = bel.evaluator.stack_pop(rs);
var ev = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28219,(0),null);
var rest_rs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28219,(1),null);
var map__28222 = env;
var map__28222__$1 = cljs.core.__destructure_map(map__28222);
var dyn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28222__$1,new cljs.core.Keyword(null,"dyn","dyn",248213352));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(es,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword(null,"dyn","dyn",248213352),bel.model.map_assoc(dyn,variable,bel.evaluator.env_pair(variable,ev))),after], null)),rest_rs], null);
});
bel.evaluator.b_dyn = (function bel$evaluator$b_dyn(es,rs,env,variable,arg,after){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(es,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [env,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dyn-2","dyn-2",871987235),variable,after], null)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [env,arg], null)], 0)),rs], null);
});
bel.evaluator.eval_cont = (function bel$evaluator$eval_cont(_es,_rs,_env,litv,args_head){
var vec__28225 = litv;
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28225,(0),null);
var vec__28228 = (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
var es = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28228,(0),null);
var rs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28228,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [es,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(rs,bel.model.car(args_head))], null);
});
bel.evaluator.eval_ccc_2 = (function bel$evaluator$eval_ccc_2(es,rs,env,_form){
var vec__28232 = bel.evaluator.stack_pop(rs);
var f_evaled = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28232,(0),null);
var rest_rs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28232,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(es,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [env,(function (){var G__28236 = f_evaled;
var G__28237 = (function (){var G__28238 = bel.model.seq__GT_p(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bel.model.bel_lit,bel.model.bel_cont,(function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [es,rest_rs], null);
})], null));
var G__28239 = bel.model.bel_nil;
return (bel.model.p.cljs$core$IFn$_invoke$arity$2 ? bel.model.p.cljs$core$IFn$_invoke$arity$2(G__28238,G__28239) : bel.model.p.call(null,G__28238,G__28239));
})();
return (bel.model.p.cljs$core$IFn$_invoke$arity$2 ? bel.model.p.cljs$core$IFn$_invoke$arity$2(G__28236,G__28237) : bel.model.p.call(null,G__28236,G__28237));
})()], null)),rest_rs], null);
});
bel.evaluator.b_ccc = (function bel$evaluator$b_ccc(es,rs,env,f){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(es,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [env,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ccc-2","ccc-2",-459273906)], null)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [env,f], null)], 0)),rs], null);
});
bel.evaluator.b_err = (function bel$evaluator$b_err(_es,_rs,_env,e){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__28241 = bel.model.bel_lit;
var G__28242 = (function (){var G__28243 = new cljs.core.Symbol(null,"error","error",661562495,null);
var G__28244 = (bel.model.p.cljs$core$IFn$_invoke$arity$2 ? bel.model.p.cljs$core$IFn$_invoke$arity$2(e,bel.model.bel_nil) : bel.model.p.call(null,e,bel.model.bel_nil));
return (bel.model.p.cljs$core$IFn$_invoke$arity$2 ? bel.model.p.cljs$core$IFn$_invoke$arity$2(G__28243,G__28244) : bel.model.p.call(null,G__28243,G__28244));
})();
return (bel.model.p.cljs$core$IFn$_invoke$arity$2 ? bel.model.p.cljs$core$IFn$_invoke$arity$2(G__28241,G__28242) : bel.model.p.call(null,G__28241,G__28242));
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
var G__28247 = bel.model.cdr(a);
var G__28248 = bel.model.cdr(b);
return (bel.evaluator.bel_compare.cljs$core$IFn$_invoke$arity$2 ? bel.evaluator.bel_compare.cljs$core$IFn$_invoke$arity$2(G__28247,G__28248) : bel.evaluator.bel_compare.call(null,G__28247,G__28248));
} else {
return v;

}
}
});
bel.evaluator.bel_compare = (function bel$evaluator$bel_compare(a,b){
var f = (function (){var pred__28250 = cljs.core._EQ_;
var expr__28251 = bel.model.type(a);
if(cljs.core.truth_((function (){var G__28254 = new cljs.core.Symbol(null,"pair","pair",1193015215,null);
var G__28255 = expr__28251;
return (pred__28250.cljs$core$IFn$_invoke$arity$2 ? pred__28250.cljs$core$IFn$_invoke$arity$2(G__28254,G__28255) : pred__28250.call(null,G__28254,G__28255));
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
var len__5769__auto___28576 = arguments.length;
var i__5770__auto___28577 = (0);
while(true){
if((i__5770__auto___28577 < len__5769__auto___28576)){
args__5775__auto__.push((arguments[i__5770__auto___28577]));

var G__28578 = (i__5770__auto___28577 + (1));
i__5770__auto___28577 = G__28578;
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
(bel.evaluator.b_bin_LT_.cljs$lang$applyTo = (function (seq28256){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq28256));
}));

bel.evaluator.wrap_math_fn = (function bel$evaluator$wrap_math_fn(f){
return (function() { 
var G__28579__delegate = function (xs){
var v = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,xs);
if(typeof v === 'number'){
return v;
} else {
return bel.model.clj_bool__GT_bel(v);
}
};
var G__28579 = function (var_args){
var xs = null;
if (arguments.length > 0) {
var G__28580__i = 0, G__28580__a = new Array(arguments.length -  0);
while (G__28580__i < G__28580__a.length) {G__28580__a[G__28580__i] = arguments[G__28580__i + 0]; ++G__28580__i;}
  xs = new cljs.core.IndexedSeq(G__28580__a,0,null);
} 
return G__28579__delegate.call(this,xs);};
G__28579.cljs$lang$maxFixedArity = 0;
G__28579.cljs$lang$applyTo = (function (arglist__28581){
var xs = cljs.core.seq(arglist__28581);
return G__28579__delegate(xs);
});
G__28579.cljs$core$IFn$_invoke$arity$variadic = G__28579__delegate;
return G__28579;
})()
;
});
bel.evaluator.math_name__GT_fn = new cljs.core.PersistentArrayMap(null, 8, ["+",bel.evaluator.wrap_math_fn(cljs.core._PLUS_),"-",bel.evaluator.wrap_math_fn(cljs.core._),"*",bel.evaluator.wrap_math_fn(cljs.core._STAR_),"/",bel.evaluator.wrap_math_fn(cljs.core._SLASH_),"int",bel.evaluator.wrap_math_fn(cljs.core.int_QMARK_),"num<",bel.evaluator.wrap_math_fn(cljs.core._LT_),"abs",bel.evaluator.wrap_math_fn((function (p1__28260_SHARP_){
return Math.abs(p1__28260_SHARP_);
})),"hash",bel.evaluator.wrap_math_fn(cljs.core.hash)], null);
bel.evaluator.prim_name__GT_fn = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentHashMap.fromArrays(["nom","map-assoc","id","uvar","coin","xar","debug","xdr","type","join","car","bin<","sym","cdr"],[new cljs.core.Var(function(){return bel.model.nom;},new cljs.core.Symbol("bel.model","nom","bel.model/nom",678979735,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"bel.model","bel.model",-1266674062,null),new cljs.core.Symbol(null,"nom","nom",-1943580949,null),"bel/model.cljs",9,1,151,151,cljs.core.List.EMPTY,null,(cljs.core.truth_(bel.model.nom)?bel.model.nom.cljs$lang$test:null)])),new cljs.core.Var(function(){return bel.model.map_assoc;},new cljs.core.Symbol("bel.model","map-assoc","bel.model/map-assoc",-880054317,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"bel.model","bel.model",-1266674062,null),new cljs.core.Symbol(null,"map-assoc","map-assoc",-1347926689,null),"bel/model.cljs",16,1,202,202,cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",-1021758608,null),new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"v","v",1661996586,null)], null)),null,(cljs.core.truth_(bel.model.map_assoc)?bel.model.map_assoc.cljs$lang$test:null)])),new cljs.core.Var(function(){return bel.model.id;},new cljs.core.Symbol("bel.model","id","bel.model/id",-1419618537,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"bel.model","bel.model",-1266674062,null),new cljs.core.Symbol(null,"id","id",252129435,null),"bel/model.cljs",9,1,98,98,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"a","a",-482876059,null),new cljs.core.Symbol(null,"b","b",-1172211299,null)], null)),null,(cljs.core.truth_(bel.model.id)?bel.model.id.cljs$lang$test:null)])),new cljs.core.Var(function(){return bel.evaluator.b_uvar;},new cljs.core.Symbol("bel.evaluator","b-uvar","bel.evaluator/b-uvar",-780873393,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"bel.evaluator","bel.evaluator",1137899495,null),new cljs.core.Symbol(null,"b-uvar","b-uvar",-1722568615,null),"bel/evaluator.cljs",12,1,148,148,cljs.core.List.EMPTY,null,(cljs.core.truth_(bel.evaluator.b_uvar)?bel.evaluator.b_uvar.cljs$lang$test:null)])),new cljs.core.Var(function(){return bel.model.coin;},new cljs.core.Symbol("bel.model","coin","bel.model/coin",807100574,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"bel.model","bel.model",-1266674062,null),new cljs.core.Symbol(null,"coin","coin",1412974338,null),"bel/model.cljs",11,1,153,153,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(bel.model.coin)?bel.model.coin.cljs$lang$test:null)])),new cljs.core.Var(function(){return bel.model.xar;},new cljs.core.Symbol("bel.model","xar","bel.model/xar",1849507724,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"bel.model","bel.model",-1266674062,null),new cljs.core.Symbol(null,"xar","xar",48113136,null),"bel/model.cljs",10,1,141,141,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"form","form",16469056,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null)),null,(cljs.core.truth_(bel.model.xar)?bel.model.xar.cljs$lang$test:null)])),new cljs.core.Var(function(){return bel.evaluator.b_debug;},new cljs.core.Symbol("bel.evaluator","b-debug","bel.evaluator/b-debug",591650536,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"bel.evaluator","bel.evaluator",1137899495,null),new cljs.core.Symbol(null,"b-debug","b-debug",1801551870,null),"bel/evaluator.cljs",14,1,142,142,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null)),null,(cljs.core.truth_(bel.evaluator.b_debug)?bel.evaluator.b_debug.cljs$lang$test:null)])),new cljs.core.Var(function(){return bel.model.xdr;},new cljs.core.Symbol("bel.model","xdr","bel.model/xdr",1221927385,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"bel.model","bel.model",-1266674062,null),new cljs.core.Symbol(null,"xdr","xdr",750141277,null),"bel/model.cljs",10,1,145,145,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"form","form",16469056,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null)),null,(cljs.core.truth_(bel.model.xdr)?bel.model.xdr.cljs$lang$test:null)])),new cljs.core.Var(function(){return bel.model.type;},new cljs.core.Symbol("bel.model","type","bel.model/type",1126526039,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"bel.model","bel.model",-1266674062,null),new cljs.core.Symbol(null,"type","type",-1480165421,null),"bel/model.cljs",11,1,48,48,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null)),null,(cljs.core.truth_(bel.model.type)?bel.model.type.cljs$lang$test:null)])),new cljs.core.Var(function(){return bel.model.join;},new cljs.core.Symbol("bel.model","join","bel.model/join",1490036873,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"bel.model","bel.model",-1266674062,null),new cljs.core.Symbol(null,"join","join",881669637,null),"bel/model.cljs",11,1,102,102,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"a","a",-482876059,null),new cljs.core.Symbol(null,"b","b",-1172211299,null)], null)),null,(cljs.core.truth_(bel.model.join)?bel.model.join.cljs$lang$test:null)])),new cljs.core.Var(function(){return bel.model.car;},new cljs.core.Symbol("bel.model","car","bel.model/car",-1456713553,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"bel.model","bel.model",-1266674062,null),new cljs.core.Symbol(null,"car","car",84879915,null),"bel/model.cljs",10,1,106,106,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"form","form",16469056,null)], null)),null,(cljs.core.truth_(bel.model.car)?bel.model.car.cljs$lang$test:null)])),new cljs.core.Var(function(){return bel.evaluator.b_bin_LT_;},new cljs.core.Symbol("bel.evaluator","b-bin<","bel.evaluator/b-bin<",-1989802013,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"bel.evaluator","bel.evaluator",1137899495,null),new cljs.core.Symbol(null,"b-bin<","b-bin<",1099260149,null),"bel/evaluator.cljs",13,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"variadic?","variadic?",584179762),true,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),(0),new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),(0),new cljs.core.Keyword(null,"method-params","method-params",-980792179),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"xs","xs",-2004992428,null))], null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"xs","xs",-2004992428,null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.list(null)], null),1,174,174,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"xs","xs",-2004992428,null)], null)),null,(cljs.core.truth_(bel.evaluator.b_bin_LT_)?bel.evaluator.b_bin_LT_.cljs$lang$test:null)])),new cljs.core.Var(function(){return bel.model.sym;},new cljs.core.Symbol("bel.model","sym","bel.model/sym",-280584654,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"bel.model","bel.model",-1266674062,null),new cljs.core.Symbol(null,"sym","sym",195671222,null),"bel/model.cljs",9,1,149,149,cljs.core.List.EMPTY,null,(cljs.core.truth_(bel.model.sym)?bel.model.sym.cljs$lang$test:null)])),new cljs.core.Var(function(){return bel.model.cdr;},new cljs.core.Symbol("bel.model","cdr","bel.model/cdr",-861112988,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"bel.model","bel.model",-1266674062,null),new cljs.core.Symbol(null,"cdr","cdr",1766924024,null),"bel/model.cljs",10,1,118,118,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"form","form",16469056,null)], null)),null,(cljs.core.truth_(bel.model.cdr)?bel.model.cdr.cljs$lang$test:null)]))]),bel.evaluator.math_name__GT_fn], 0));
bel.evaluator.special_prim_name__GT_fn = new cljs.core.PersistentArrayMap(null, 5, ["dyn",new cljs.core.Var(function(){return bel.evaluator.b_dyn;},new cljs.core.Symbol("bel.evaluator","b-dyn","bel.evaluator/b-dyn",-1267354868,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"bel.evaluator","bel.evaluator",1137899495,null),new cljs.core.Symbol(null,"b-dyn","b-dyn",-329838094,null),"bel/evaluator.cljs",12,1,99,99,cljs.core.list(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"es","es",-822762550,null),new cljs.core.Symbol(null,"rs","rs",-1740853800,null),new cljs.core.Symbol(null,"env","env",-175281708,null),new cljs.core.Symbol(null,"variable","variable",1359185035,null),new cljs.core.Symbol(null,"arg","arg",-106730310,null),new cljs.core.Symbol(null,"after","after",-2059438855,null)], null)),null,(cljs.core.truth_(bel.evaluator.b_dyn)?bel.evaluator.b_dyn.cljs$lang$test:null)])),"ccc",new cljs.core.Var(function(){return bel.evaluator.b_ccc;},new cljs.core.Symbol("bel.evaluator","b-ccc","bel.evaluator/b-ccc",-2057914335,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"bel.evaluator","bel.evaluator",1137899495,null),new cljs.core.Symbol(null,"b-ccc","b-ccc",-583771361,null),"bel/evaluator.cljs",12,1,126,126,cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"es","es",-822762550,null),new cljs.core.Symbol(null,"rs","rs",-1740853800,null),new cljs.core.Symbol(null,"env","env",-175281708,null),new cljs.core.Symbol(null,"f","f",43394975,null)], null)),null,(cljs.core.truth_(bel.evaluator.b_ccc)?bel.evaluator.b_ccc.cljs$lang$test:null)])),"where",new cljs.core.Var(function(){return bel.evaluator.b_where;},new cljs.core.Symbol("bel.evaluator","b-where","bel.evaluator/b-where",-1765577900,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"bel.evaluator","bel.evaluator",1137899495,null),new cljs.core.Symbol(null,"b-where","b-where",-286930846,null),"bel/evaluator.cljs",14,1,33,33,cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"es","es",-822762550,null),new cljs.core.Symbol(null,"rs","rs",-1740853800,null),new cljs.core.Symbol(null,"env","env",-175281708,null),new cljs.core.Symbol(null,"x","x",-555367584,null)], null)),null,(cljs.core.truth_(bel.evaluator.b_where)?bel.evaluator.b_where.cljs$lang$test:null)])),"err",new cljs.core.Var(function(){return bel.evaluator.b_err;},new cljs.core.Symbol("bel.evaluator","b-err","bel.evaluator/b-err",-1171311839,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"bel.evaluator","bel.evaluator",1137899495,null),new cljs.core.Symbol(null,"b-err","b-err",-2109042121,null),"bel/evaluator.cljs",12,1,136,136,cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_es","_es",-995668245,null),new cljs.core.Symbol(null,"_rs","_rs",495851672,null),new cljs.core.Symbol(null,"_env","_env",-1935963291,null),new cljs.core.Symbol(null,"e","e",-1273166571,null)], null)),null,(cljs.core.truth_(bel.evaluator.b_err)?bel.evaluator.b_err.cljs$lang$test:null)])),"thread",new cljs.core.Var(function(){return bel.evaluator.b_thread;},new cljs.core.Symbol("bel.evaluator","b-thread","bel.evaluator/b-thread",-2146425181,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"bel.evaluator","bel.evaluator",1137899495,null),new cljs.core.Symbol(null,"b-thread","b-thread",-666990179,null),"bel/evaluator.cljs",15,1,80,80,cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"es","es",-822762550,null),new cljs.core.Symbol(null,"rs","rs",-1740853800,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"globe","globe",-1992262972,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"env1","env1",-1797873405,null)], null),new cljs.core.Symbol(null,"form","form",16469056,null)], null)),null,(cljs.core.truth_(bel.evaluator.b_thread)?bel.evaluator.b_thread.cljs$lang$test:null)]))], null);
bel.evaluator.bel_globe = (function bel$evaluator$bel_globe(){
var m = bel.model.mut_map();
cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__28278){
var vec__28280 = p__28278;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28280,(0),null);
var sym_k = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(k));
return bel.model.map_put(m,sym_k,(function (){var G__28285 = sym_k;
var G__28286 = bel.model.seq__GT_p(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bel.model.bel_lit,bel.model.bel_prim,sym_k], null));
return (bel.model.p.cljs$core$IFn$_invoke$arity$2 ? bel.model.p.cljs$core$IFn$_invoke$arity$2(G__28285,G__28286) : bel.model.p.call(null,G__28285,G__28286));
})());
}),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([bel.evaluator.prim_name__GT_fn,bel.evaluator.special_prim_name__GT_fn], 0))));

return m;
});
bel.evaluator.env = (function bel$evaluator$env(var_args){
var G__28291 = arguments.length;
switch (G__28291) {
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

bel.evaluator.eval_if_2 = (function bel$evaluator$eval_if_2(es,rs,env,p__28298){
var vec__28299 = p__28298;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28299,(0),null);
var vec__28302 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28299,(1),null);
var consequent_form = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28302,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28302,(1),null);
var vec__28305 = bel.evaluator.stack_pop(rs);
var evaled_test_form = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28305,(0),null);
var rest_rs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28305,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(es,((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(bel.model.bel_nil,evaled_test_form))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [env,consequent_form], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(bel.model.bel_nil,r))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [env,r], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(bel.model.bel_nil,bel.model.cdr(r)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [env,bel.model.car(r)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [env,(bel.model.p.cljs$core$IFn$_invoke$arity$2 ? bel.model.p.cljs$core$IFn$_invoke$arity$2(bel.model.bel_if,r) : bel.model.p.call(null,bel.model.bel_if,r))], null)
)))),rest_rs], null);
});
bel.evaluator.eval_if_1 = (function bel$evaluator$eval_if_1(es,rs,env,p__28314){
var vec__28316 = p__28314;
var test_form = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28316,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28316,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(es,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"if-2","if-2",-859249213),r], null)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [env,test_form], null)], 0)),rs], null);
});
bel.evaluator.eval_set_2 = (function bel$evaluator$eval_set_2(es,rs,p__28322,form){
var map__28323 = p__28322;
var map__28323__$1 = cljs.core.__destructure_map(map__28323);
var _env = map__28323__$1;
var globe = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28323__$1,new cljs.core.Keyword(null,"globe","globe",662172797));
var vec__28326 = form;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28326,(0),null);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28326,(1),null);
var vec__28329 = bel.evaluator.stack_pop(rs);
var evaled_v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28329,(0),null);
var rest_rs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28329,(1),null);
bel.model.map_put(globe,sym,bel.evaluator.env_pair(sym,evaled_v));

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [es,rest_rs], null);
});
bel.evaluator.eval_set_1 = (function bel$evaluator$eval_set_1(es,rs,env,form){
var vec__28335 = form;
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28335,(0),null);
var after_sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28335,(1),null);
var _ = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(bel.model.bel_nil,after_sym))?null:(function(){throw (new Error(["Assert failed: ","Set sym needs a value","\n","(not= m/bel-nil after-sym)"].join('')))})());
var vec__28338 = after_sym;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28338,(0),null);
var after_v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28338,(1),null);
var es_SINGLEQUOTE_ = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(after_v,bel.model.bel_nil))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(es,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [env,(bel.model.p.cljs$core$IFn$_invoke$arity$2 ? bel.model.p.cljs$core$IFn$_invoke$arity$2(bel.model.bel_set,after_v) : bel.model.p.call(null,bel.model.bel_set,after_v))], null)):es);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(es_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-2","set-2",-1662096161),sym], null)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [env,v], null)], 0)),rs], null);
});
bel.evaluator.lit_type = (function bel$evaluator$lit_type(p__28349){
var vec__28352 = p__28349;
var _lit = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28352,(0),null);
var vec__28355 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28352,(1),null);
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28355,(0),null);
return t;
});
bel.evaluator.lit_v = (function bel$evaluator$lit_v(p__28361){
var vec__28363 = p__28361;
var _lit = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28363,(0),null);
var vec__28366 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28363,(1),null);
var _t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28366,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28366,(1),null);
return v;
});
bel.evaluator.assert_lit = (function bel$evaluator$assert_lit(p__28372){
var vec__28375 = p__28372;
var lit = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28375,(0),null);
var form = vec__28375;
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
bel.evaluator.eval_prim_simple = (function bel$evaluator$eval_prim_simple(es,rs,env,p__28379){
var vec__28380 = p__28379;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28380,(0),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28380,(1),null);
var simple_f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28380,(2),null);
var vec__28383 = bel.evaluator.stack_pop(rs);
var evaled_args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28383,(0),null);
var rest_rs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28383,(1),null);
var args = bel.model.p__GT_seq(evaled_args);
try{if(bel.evaluator.in_where_QMARK_(es)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.pop(es),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(rs,(function (){var G__28389 = bel.model.car(evaled_args);
var G__28390 = (function (){var G__28391 = (function (){var pred__28393 = cljs.core._EQ_;
var expr__28394 = n;
if(cljs.core.truth_((pred__28393.cljs$core$IFn$_invoke$arity$2 ? pred__28393.cljs$core$IFn$_invoke$arity$2("car",expr__28394) : pred__28393.call(null,"car",expr__28394)))){
return bel.model.bel_a;
} else {
if(cljs.core.truth_((pred__28393.cljs$core$IFn$_invoke$arity$2 ? pred__28393.cljs$core$IFn$_invoke$arity$2("cdr",expr__28394) : pred__28393.call(null,"cdr",expr__28394)))){
return bel.model.bel_d;
} else {
throw (new Error("unexpected use of where"));
}
}
})();
var G__28392 = bel.model.bel_nil;
return (bel.model.p.cljs$core$IFn$_invoke$arity$2 ? bel.model.p.cljs$core$IFn$_invoke$arity$2(G__28391,G__28392) : bel.model.p.call(null,G__28391,G__28392));
})();
return (bel.model.p.cljs$core$IFn$_invoke$arity$2 ? bel.model.p.cljs$core$IFn$_invoke$arity$2(G__28389,G__28390) : bel.model.p.call(null,G__28389,G__28390));
})())], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [es,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(rest_rs,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(simple_f,bel.evaluator.bel_nil_args(simple_f,args)))], null);
}
}catch (e28386){if((e28386 instanceof Object)){
var e = e28386;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(es,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [env,(function (){var G__28387 = bel.model.bel_err_sym;
var G__28388 = (bel.model.p.cljs$core$IFn$_invoke$arity$2 ? bel.model.p.cljs$core$IFn$_invoke$arity$2(e,bel.model.bel_nil) : bel.model.p.call(null,e,bel.model.bel_nil));
return (bel.model.p.cljs$core$IFn$_invoke$arity$2 ? bel.model.p.cljs$core$IFn$_invoke$arity$2(G__28387,G__28388) : bel.model.p.call(null,G__28387,G__28388));
})()], null)),rest_rs], null);
} else {
throw e28386;

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
bel.evaluator.assign_vars_typecheck_2 = (function bel$evaluator$assign_vars_typecheck_2(es,rs,env,p__28396){
var vec__28397 = p__28396;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28397,(0),null);
var variable = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28397,(1),null);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28397,(2),null);
var vec__28400 = bel.evaluator.stack_pop(rs);
var check = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28400,(0),null);
var rest_rs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28400,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(bel.model.bel_nil,check)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(es,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [env,(function (){var G__28403 = bel.model.bel_err_sym;
var G__28404 = (function (){var G__28405 = bel.model.quoted_p(new cljs.core.Symbol(null,"mistype","mistype",-971919030,null));
var G__28406 = bel.model.bel_nil;
return (bel.model.p.cljs$core$IFn$_invoke$arity$2 ? bel.model.p.cljs$core$IFn$_invoke$arity$2(G__28405,G__28406) : bel.model.p.call(null,G__28405,G__28406));
})();
return (bel.model.p.cljs$core$IFn$_invoke$arity$2 ? bel.model.p.cljs$core$IFn$_invoke$arity$2(G__28403,G__28404) : bel.model.p.call(null,G__28403,G__28404));
})()], null)),rs], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(es,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [env,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assign-vars-1","assign-vars-1",338096520),bel.model.bel_typecheck_var(variable),arg], null)], null)),rest_rs], null);
}
});
bel.evaluator.assign_vars_typecheck_1 = (function bel$evaluator$assign_vars_typecheck_1(es,rs,env,p__28407){
var vec__28408 = p__28407;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28408,(0),null);
var variable = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28408,(1),null);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28408,(2),null);
var vec__28411 = bel.evaluator.stack_pop(rs);
var evaled_f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28411,(0),null);
var rest_rs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28411,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(es,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [env,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assign-vars-typecheck-2","assign-vars-typecheck-2",494666689),variable,arg], null)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [env,(function (){var G__28414 = evaled_f;
var G__28415 = (function (){var G__28416 = bel.model.quoted_p(arg);
var G__28417 = bel.model.bel_nil;
return (bel.model.p.cljs$core$IFn$_invoke$arity$2 ? bel.model.p.cljs$core$IFn$_invoke$arity$2(G__28416,G__28417) : bel.model.p.call(null,G__28416,G__28417));
})();
return (bel.model.p.cljs$core$IFn$_invoke$arity$2 ? bel.model.p.cljs$core$IFn$_invoke$arity$2(G__28414,G__28415) : bel.model.p.call(null,G__28414,G__28415));
})()], null)], 0)),rest_rs], null);
});
bel.evaluator.assign_vars_optional_arg = (function bel$evaluator$assign_vars_optional_arg(es,rs,env,p__28418){
var vec__28419 = p__28418;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28419,(0),null);
var variable = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28419,(1),null);
var vec__28422 = bel.evaluator.stack_pop(rs);
var arg_evaled = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28422,(0),null);
var rest_rs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28422,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(es,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [env,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assign-vars-1","assign-vars-1",338096520),variable,arg_evaled], null)], null)),rest_rs], null);
});
bel.evaluator.assign_vars_rest = (function bel$evaluator$assign_vars_rest(es,rs,env,p__28425){
var vec__28426 = p__28425;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28426,(0),null);
var var_head = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28426,(1),null);
var arg_head = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28426,(2),null);
var vec__28429 = bel.evaluator.stack_pop(rs);
var scope = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28429,(0),null);
var rest_rs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28429,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(es,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword(null,"scope","scope",-439358418),scope),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assign-vars-1","assign-vars-1",338096520),var_head,arg_head], null)], null)),rest_rs], null);
});
bel.evaluator.assign_vars_1 = (function bel$evaluator$assign_vars_1(es,rs,p__28432,p__28433){
var map__28434 = p__28432;
var map__28434__$1 = cljs.core.__destructure_map(map__28434);
var env = map__28434__$1;
var scope = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28434__$1,new cljs.core.Keyword(null,"scope","scope",-439358418));
var vec__28435 = p__28433;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28435,(0),null);
var var_head = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28435,(1),null);
var arg_head = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28435,(2),null);
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
bel.evaluator.eval_clo_2 = (function bel$evaluator$eval_clo_2(es,rs,env,p__28438){
var vec__28439 = p__28438;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28439,(0),null);
var body_head = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28439,(1),null);
var vec__28442 = bel.evaluator.stack_pop(rs);
var scope = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28442,(0),null);
var rest_rs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28442,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(es,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword(null,"scope","scope",-439358418),scope),body_head], null)),rest_rs], null);
});
bel.evaluator.clo_expression_stack = (function bel$evaluator$clo_expression_stack(env,litv,args_head){
var vec__28445 = litv;
var scope = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28445,(0),null);
var vec__28448 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28445,(1),null);
var args_sym_head = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28448,(0),null);
var vec__28451 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28448,(1),null);
var body_head = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28451,(0),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"eval-clo-2","eval-clo-2",778162519),body_head], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword(null,"scope","scope",-439358418),scope),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assign-vars-1","assign-vars-1",338096520),args_sym_head,args_head], null)], null)], null);
});
bel.evaluator.eval_clo = (function bel$evaluator$eval_clo(es,rs,env,litv,args_head){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [es], null),bel.evaluator.clo_expression_stack(env,litv,args_head))),rs], null);
});
bel.evaluator.eval_mac_2 = (function bel$evaluator$eval_mac_2(es,rs,env,_form){
var vec__28454 = bel.evaluator.stack_pop(rs);
var code = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28454,(0),null);
var rest_rs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28454,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(es,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [env,code], null)),rest_rs], null);
});
bel.evaluator.eval_mac_1 = (function bel$evaluator$eval_mac_1(es,rs,env,litv,args_head){
var vec__28457 = litv;
var vec__28460 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28457,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28460,(0),null);
var vec__28463 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28460,(1),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28463,(0),null);
var clo = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28463,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [es,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [env,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"eval-mac-2","eval-mac-2",-1281361943)], null)], null)], null),bel.evaluator.clo_expression_stack(env,clo,args_head))),rs], null);
});
bel.evaluator.eval_lit_1 = (function bel$evaluator$eval_lit_1(es,rs,env,p__28466){
var vec__28467 = p__28466;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28467,(0),null);
var evaled_lit = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28467,(1),null);
var vec__28470 = bel.evaluator.stack_pop(rs);
var args_head = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28470,(0),null);
var rest_rs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28470,(1),null);
var litv = bel.evaluator.lit_v(evaled_lit);
var pred__28473 = cljs.core._EQ_;
var expr__28474 = bel.evaluator.lit_type(evaled_lit);
if(cljs.core.truth_((pred__28473.cljs$core$IFn$_invoke$arity$2 ? pred__28473.cljs$core$IFn$_invoke$arity$2(bel.model.bel_prim,expr__28474) : pred__28473.call(null,bel.model.bel_prim,expr__28474)))){
return bel.evaluator.eval_prim(es,rest_rs,env,litv,args_head);
} else {
if(cljs.core.truth_((pred__28473.cljs$core$IFn$_invoke$arity$2 ? pred__28473.cljs$core$IFn$_invoke$arity$2(bel.model.bel_clo,expr__28474) : pred__28473.call(null,bel.model.bel_clo,expr__28474)))){
return bel.evaluator.eval_clo(es,rest_rs,env,litv,args_head);
} else {
if(cljs.core.truth_((pred__28473.cljs$core$IFn$_invoke$arity$2 ? pred__28473.cljs$core$IFn$_invoke$arity$2(bel.model.bel_mac,expr__28474) : pred__28473.call(null,bel.model.bel_mac,expr__28474)))){
return bel.evaluator.eval_mac_1(es,rest_rs,env,litv,args_head);
} else {
if(cljs.core.truth_((pred__28473.cljs$core$IFn$_invoke$arity$2 ? pred__28473.cljs$core$IFn$_invoke$arity$2(bel.model.bel_cont,expr__28474) : pred__28473.call(null,bel.model.bel_cont,expr__28474)))){
return bel.evaluator.eval_cont(es,rest_rs,env,litv,args_head);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__28474)].join('')));
}
}
}
}
});
bel.evaluator.eval_many_2 = (function bel$evaluator$eval_many_2(es,rs,_env,_form){
var vec__28476 = bel.evaluator.stack_pop_until_breakpoint(new cljs.core.Keyword(null,"eval-many-breakpoint","eval-many-breakpoint",-760836807),rs);
var top_ps = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28476,(0),null);
var rest_rs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28476,(1),null);
var evaled_pairs = bel.model.seq__GT_p(cljs.core.reverse(top_ps));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [es,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(rest_rs,evaled_pairs)], null);
});
bel.evaluator.eval_many_1 = (function bel$evaluator$eval_many_1(es,rs,env,p__28479){
var vec__28480 = p__28479;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28480,(0),null);
var args_head = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28480,(1),null);
var pairs_to_eval = bel.model.p__GT_seq(args_head);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [es,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [env,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"eval-many-2","eval-many-2",-1324470170)], null)], null)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [env,p], null);
}),pairs_to_eval))),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(rs,new cljs.core.Keyword(null,"eval-many-breakpoint","eval-many-breakpoint",-760836807))], null);
});
bel.evaluator.eval_application_2 = (function bel$evaluator$eval_application_2(es,rs,env,p__28483){
var vec__28484 = p__28483;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28484,(0),null);
var args_head = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28484,(1),null);
var vec__28487 = bel.evaluator.stack_pop(rs);
var evaled = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28487,(0),null);
var rest_rs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28487,(1),null);
if(cljs.core.truth_((bel.model.number_QMARK_.cljs$core$IFn$_invoke$arity$1 ? bel.model.number_QMARK_.cljs$core$IFn$_invoke$arity$1(evaled) : bel.model.number_QMARK_.call(null,evaled)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(es,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"eval-lit-1","eval-lit-1",1695921063),bel.model.cdr(bel.evaluator.v_pair(env,new cljs.core.Symbol(null,"nth","nth",1529209554,null)))], null)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"eval-many-1","eval-many-1",219906014),(bel.model.p.cljs$core$IFn$_invoke$arity$2 ? bel.model.p.cljs$core$IFn$_invoke$arity$2(evaled,args_head) : bel.model.p.call(null,evaled,args_head))], null)], null)], 0)),rest_rs], null);
} else {
var evaled_lit = bel.evaluator.assert_lit(evaled);
var es_SINGLEQUOTE_ = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(es,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"eval-lit-1","eval-lit-1",1695921063),evaled_lit], null)], null));
if(cljs.core.truth_((function (){var G__28491 = bel.evaluator.lit_type(evaled_lit);
var fexpr__28490 = cljs.core.PersistentHashSet.createAsIfByAssoc([bel.model.bel_prim,bel.model.bel_mac]);
return (fexpr__28490.cljs$core$IFn$_invoke$arity$1 ? fexpr__28490.cljs$core$IFn$_invoke$arity$1(G__28491) : fexpr__28490.call(null,G__28491));
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [es_SINGLEQUOTE_,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(rest_rs,args_head)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(es_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"eval-many-1","eval-many-1",219906014),args_head], null)], null)),rest_rs], null);
}
}
});
bel.evaluator.eval_application_1 = (function bel$evaluator$eval_application_1(es,rs,env,p__28492){
var vec__28493 = p__28492;
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28493,(0),null);
var args_head = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28493,(1),null);
var _form = vec__28493;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(es,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"application-2","application-2",-1151012964),args_head], null)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [env,f], null)], 0)),rs], null);
});
bel.evaluator.apply_head__GT_args_head = (function bel$evaluator$apply_head__GT_args_head(x){
var xs = bel.model.p__GT_seq(x);
var but_last = cljs.core.drop_last.cljs$core$IFn$_invoke$arity$1(xs);
var l = cljs.core.last(xs);
var ls = (cljs.core.truth_((bel.model.pair_QMARK_.cljs$core$IFn$_invoke$arity$1 ? bel.model.pair_QMARK_.cljs$core$IFn$_invoke$arity$1(l) : bel.model.pair_QMARK_.call(null,l)))?bel.model.p__GT_seq(l):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [l], null));
return bel.model.seq__GT_p(cljs.core.map.cljs$core$IFn$_invoke$arity$2(bel.model.quoted_p,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(but_last,ls)));
});
bel.evaluator.eval_apply_2 = (function bel$evaluator$eval_apply_2(es,rs,env,p__28496){
var vec__28497 = p__28496;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28497,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28497,(1),null);
var vec__28500 = bel.evaluator.stack_pop(rs);
var evaled_apply_head = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28500,(0),null);
var rest_rs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28500,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(es,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [env,(function (){var G__28503 = f;
var G__28504 = bel.evaluator.apply_head__GT_args_head(evaled_apply_head);
return (bel.model.p.cljs$core$IFn$_invoke$arity$2 ? bel.model.p.cljs$core$IFn$_invoke$arity$2(G__28503,G__28504) : bel.model.p.call(null,G__28503,G__28504));
})()], null)),rest_rs], null);
});
bel.evaluator.eval_apply_1 = (function bel$evaluator$eval_apply_1(es,rs,env,p__28505){
var vec__28506 = p__28505;
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28506,(0),null);
var apply_head = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28506,(1),null);
var _form = vec__28506;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(es,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"eval-apply-2","eval-apply-2",1435873441),f], null)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"eval-many-1","eval-many-1",219906014),apply_head], null)], null)], 0)),rs], null);
});
bel.evaluator.eval_pair = (function bel$evaluator$eval_pair(es,rs,env,p__28509){
var vec__28510 = p__28509;
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28510,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28510,(1),null);
var form = vec__28510;
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
var vec__28513 = bel.evaluator.stack_pop_2(rs);
var vec__28516 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28513,(0),null);
var r_evaled = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28516,(0),null);
var h_evaled = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28516,(1),null);
var rest_rs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28513,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [es,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(rest_rs,(bel.model.p.cljs$core$IFn$_invoke$arity$2 ? bel.model.p.cljs$core$IFn$_invoke$arity$2(h_evaled,r_evaled) : bel.model.p.call(null,h_evaled,r_evaled)))], null);
});
bel.evaluator.eval_bq_splice_1 = (function bel$evaluator$eval_bq_splice_1(es,rs,_env,_form){
var vec__28519 = bel.evaluator.stack_pop_2(rs);
var vec__28522 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28519,(0),null);
var r_evaled = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28522,(0),null);
var h_evaled = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28522,(1),null);
var rest_rs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28519,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [es,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(rest_rs,bel.model.p_append(h_evaled,r_evaled))], null);
});
bel.evaluator.eval_bq_pair_1 = (function bel$evaluator$eval_bq_pair_1(es,rs,_env,_form){
var vec__28525 = bel.evaluator.stack_pop_2(rs);
var vec__28528 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28525,(0),null);
var r_evaled = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28528,(0),null);
var h_evaled = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28528,(1),null);
var rest_rs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28525,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [es,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(rest_rs,(bel.model.p.cljs$core$IFn$_invoke$arity$2 ? bel.model.p.cljs$core$IFn$_invoke$arity$2(h_evaled,r_evaled) : bel.model.p.call(null,h_evaled,r_evaled)))], null);
});
bel.evaluator.eval_bq_rest_1 = (function bel$evaluator$eval_bq_rest_1(es,rs,_env,p__28531){
var vec__28532 = p__28531;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28532,(0),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28532,(1),null);
var vec__28535 = bel.evaluator.stack_pop(rs);
var r_evaled = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28535,(0),null);
var rest_rs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28535,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [es,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(rest_rs,(bel.model.p.cljs$core$IFn$_invoke$arity$2 ? bel.model.p.cljs$core$IFn$_invoke$arity$2(h,r_evaled) : bel.model.p.call(null,h,r_evaled)))], null);
});
bel.evaluator.eval_backquote = (function bel$evaluator$eval_backquote(es,rs,env,p__28538){
var vec__28539 = p__28538;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28539,(0),null);
var form = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28539,(1),null);
var t = bel.model.type(form);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(t,new cljs.core.Symbol(null,"comma","comma",-955411024,null))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(es,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [env,cljs.core.second(form)], null)),rs], null);
} else {
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(t,new cljs.core.Symbol(null,"pair","pair",1193015215,null))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [es,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(rs,form)], null);
} else {
var vec__28542 = form;
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28542,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28542,(1),null);
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
var or__5045__auto__ = (function (){var G__28546 = bel.model.type_nilable(form);
var fexpr__28545 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Symbol(null,"number","number",-1084057331,null),null,new cljs.core.Symbol(null,"char","char",998943941,null),null,new cljs.core.Symbol(null,"clj-err","clj-err",513595198,null),null], null), null);
return (fexpr__28545.cljs$core$IFn$_invoke$arity$1 ? fexpr__28545.cljs$core$IFn$_invoke$arity$1(G__28546) : fexpr__28545.call(null,G__28546));
})();
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = (function (){var fexpr__28547 = cljs.core.PersistentHashSet.createAsIfByAssoc([bel.model.bel_t,bel.model.bel_nil,bel.model.bel_o,bel.model.bel_apply]);
return (fexpr__28547.cljs$core$IFn$_invoke$arity$1 ? fexpr__28547.cljs$core$IFn$_invoke$arity$1(form) : fexpr__28547.call(null,form));
})();
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
var or__5045__auto____$2 = (function (){var and__5043__auto__ = (bel.model.pair_QMARK_.cljs$core$IFn$_invoke$arity$1 ? bel.model.pair_QMARK_.cljs$core$IFn$_invoke$arity$1(form) : bel.model.pair_QMARK_.call(null,form));
if(cljs.core.truth_(and__5043__auto__)){
var G__28549 = bel.model.car(form);
var fexpr__28548 = cljs.core.PersistentHashSet.createAsIfByAssoc([bel.model.bel_lit]);
return (fexpr__28548.cljs$core$IFn$_invoke$arity$1 ? fexpr__28548.cljs$core$IFn$_invoke$arity$1(G__28549) : fexpr__28548.call(null,G__28549));
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
var vec__28550 = bel.evaluator.stack_pop(es);
var top = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28550,(0),null);
var rest_es = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28550,(1),null);
var vec__28553 = top;
var env = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28553,(0),null);
var form = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28553,(1),null);
if(cljs.core.truth_(bel.evaluator.literal_QMARK_(form))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rest_es,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(rs,form)], null);
} else {
if(cljs.core.truth_((bel.model.bel_variable_QMARK_.cljs$core$IFn$_invoke$arity$1 ? bel.model.bel_variable_QMARK_.cljs$core$IFn$_invoke$arity$1(form) : bel.model.bel_variable_QMARK_.call(null,form)))){
return bel.evaluator.eval_variable(rest_es,rs,env,form);
} else {
if(cljs.core.truth_((bel.model.pair_QMARK_.cljs$core$IFn$_invoke$arity$1 ? bel.model.pair_QMARK_.cljs$core$IFn$_invoke$arity$1(form) : bel.model.pair_QMARK_.call(null,form)))){
return bel.evaluator.eval_pair(rest_es,rs,env,form);
} else {
var f = (function (){var G__28556 = cljs.core.first(form);
return (bel.evaluator.step__GT_fn.cljs$core$IFn$_invoke$arity$1 ? bel.evaluator.step__GT_fn.cljs$core$IFn$_invoke$arity$1(G__28556) : bel.evaluator.step__GT_fn.call(null,G__28556));
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
bel.evaluator.start_thread_command__GT_thread = (function bel$evaluator$start_thread_command__GT_thread(p__28557){
var vec__28558 = p__28557;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28558,(0),null);
var env = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28558,(1),null);
var form = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28558,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.gensym.cljs$core$IFn$_invoke$arity$0(),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [env,form], null),null,(1),null)),cljs.core.List.EMPTY], null);
});
bel.evaluator.locking_QMARK_ = (function bel$evaluator$locking_QMARK_(es){
var lock = (function (){var G__28561 = es;
var G__28561__$1 = (((G__28561 == null))?null:cljs.core.peek(G__28561));
var G__28561__$2 = (((G__28561__$1 == null))?null:cljs.core.first(G__28561__$1));
var G__28561__$3 = (((G__28561__$2 == null))?null:new cljs.core.Keyword(null,"dyn","dyn",248213352).cljs$core$IFn$_invoke$arity$1(G__28561__$2));
if((G__28561__$3 == null)){
return null;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(G__28561__$3,new cljs.core.Symbol(null,"lock","lock",1152343461,null));
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
var vec__28562 = threads__$1;
var seq__28563 = cljs.core.seq(vec__28562);
var first__28564 = cljs.core.first(seq__28563);
var seq__28563__$1 = cljs.core.next(seq__28563);
var top_thread = first__28564;
var rest_threads = seq__28563__$1;
var vec__28565 = top_thread;
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28565,(0),null);
var es = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28565,(1),null);
var rs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28565,(2),null);
var vec__28568 = cljs.core.peek(es);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28568,(0),null);
var top_form = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28568,(1),null);
if(cljs.core.empty_QMARK_(es)){
if(cljs.core.empty_QMARK_(rest_threads)){
var or__5045__auto__ = cljs.core.peek(rs);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return bel.model.bel_nil;
}
} else {
var G__28583 = rest_threads;
threads__$1 = G__28583;
continue;
}
} else {
if(bel.evaluator.start_thread_command_QMARK_(top_form)){
var G__28584 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bel.evaluator.start_thread_command__GT_thread(top_form),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tid,cljs.core.pop(es),rs], null)], null),rest_threads);
threads__$1 = G__28584;
continue;
} else {
var vec__28571 = bel.evaluator.eval_step(es,rs);
var es_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28571,(0),null);
var rs_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28571,(1),null);
var thread_SINGLEQUOTE_ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tid,es_SINGLEQUOTE_,rs_SINGLEQUOTE_], null);
var G__28585 = (cljs.core.truth_(bel.evaluator.locking_QMARK_(es_SINGLEQUOTE_))?cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [thread_SINGLEQUOTE_], null),rest_threads):cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(rest_threads),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [thread_SINGLEQUOTE_], null)));
threads__$1 = G__28585;
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
