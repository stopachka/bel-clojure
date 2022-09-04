goog.provide('bel.reader');
bel.reader.form_transform = (function bel$reader$form_transform(k,f){
return (function (x){
if(((cljs.core.coll_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(x),k)))){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x));
} else {
return x;
}
});
});
bel.reader.unwrap_sexp = bel.reader.form_transform(new cljs.core.Keyword(null,"sexp","sexp",-1528364050),cljs.core.second);
bel.reader.unwrap_space = bel.reader.form_transform(new cljs.core.Keyword(null,"space","space",348133475),cljs.core.second);
bel.reader.unwrap_name = bel.reader.form_transform(new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.second);
bel.reader.list__GT_pair = bel.reader.form_transform(new cljs.core.Keyword(null,"list","list",765357683),(function (p__28093){
var vec__28094 = p__28093;
var seq__28095 = cljs.core.seq(vec__28094);
var first__28096 = cljs.core.first(seq__28095);
var seq__28095__$1 = cljs.core.next(seq__28095);
var _t = first__28096;
var children = seq__28095__$1;
return bel.model.seq__GT_p(children);
}));
bel.reader.transform_string = bel.reader.form_transform(new cljs.core.Keyword(null,"string","string",-1989541586),(function (p__28097){
var vec__28098 = p__28097;
var seq__28099 = cljs.core.seq(vec__28098);
var first__28100 = cljs.core.first(seq__28099);
var seq__28099__$1 = cljs.core.next(seq__28099);
var _t = first__28100;
var children = seq__28099__$1;
return clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children));
}));
bel.reader.quote__GT_pair = bel.reader.form_transform(new cljs.core.Keyword(null,"quote","quote",-262615245),(function (p__28101){
var vec__28102 = p__28101;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28102,(0),null);
var exp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28102,(1),null);
return bel.model.quoted_p(exp);
}));
bel.reader.abbrev_fn__GT_pair = bel.reader.form_transform(new cljs.core.Keyword(null,"abbrev_fn","abbrev_fn",-171318287),(function (p__28105){
var vec__28106 = p__28105;
var seq__28107 = cljs.core.seq(vec__28106);
var first__28108 = cljs.core.first(seq__28107);
var seq__28107__$1 = cljs.core.next(seq__28107);
var _ = first__28108;
var xs = seq__28107__$1;
var G__28109 = new cljs.core.Symbol(null,"fn","fn",465265323,null);
var G__28110 = (function (){var G__28111 = (function (){var G__28113 = new cljs.core.Symbol(null,"_","_",-1201019570,null);
var G__28114 = bel.model.bel_nil;
return (bel.model.p.cljs$core$IFn$_invoke$arity$2 ? bel.model.p.cljs$core$IFn$_invoke$arity$2(G__28113,G__28114) : bel.model.p.call(null,G__28113,G__28114));
})();
var G__28112 = (function (){var G__28115 = bel.model.seq__GT_p(xs);
var G__28116 = bel.model.bel_nil;
return (bel.model.p.cljs$core$IFn$_invoke$arity$2 ? bel.model.p.cljs$core$IFn$_invoke$arity$2(G__28115,G__28116) : bel.model.p.call(null,G__28115,G__28116));
})();
return (bel.model.p.cljs$core$IFn$_invoke$arity$2 ? bel.model.p.cljs$core$IFn$_invoke$arity$2(G__28111,G__28112) : bel.model.p.call(null,G__28111,G__28112));
})();
return (bel.model.p.cljs$core$IFn$_invoke$arity$2 ? bel.model.p.cljs$core$IFn$_invoke$arity$2(G__28109,G__28110) : bel.model.p.call(null,G__28109,G__28110));
}));
bel.reader.handle_bar = (function bel$reader$handle_bar(left_xs,right_xs){
var G__28117 = new cljs.core.Symbol(null,"t","t",242699008,null);
var G__28118 = (function (){var G__28119 = (bel.reader.handle_abbrev_sym.cljs$core$IFn$_invoke$arity$1 ? bel.reader.handle_abbrev_sym.cljs$core$IFn$_invoke$arity$1(left_xs) : bel.reader.handle_abbrev_sym.call(null,left_xs));
var G__28120 = (function (){var G__28121 = (bel.reader.handle_abbrev_sym.cljs$core$IFn$_invoke$arity$1 ? bel.reader.handle_abbrev_sym.cljs$core$IFn$_invoke$arity$1(right_xs) : bel.reader.handle_abbrev_sym.call(null,right_xs));
var G__28122 = bel.model.bel_nil;
return (bel.model.p.cljs$core$IFn$_invoke$arity$2 ? bel.model.p.cljs$core$IFn$_invoke$arity$2(G__28121,G__28122) : bel.model.p.call(null,G__28121,G__28122));
})();
return (bel.model.p.cljs$core$IFn$_invoke$arity$2 ? bel.model.p.cljs$core$IFn$_invoke$arity$2(G__28119,G__28120) : bel.model.p.call(null,G__28119,G__28120));
})();
return (bel.model.p.cljs$core$IFn$_invoke$arity$2 ? bel.model.p.cljs$core$IFn$_invoke$arity$2(G__28117,G__28118) : bel.model.p.call(null,G__28117,G__28118));
});
bel.reader.handle_dot = (function bel$reader$handle_dot(left_xs,right_xs){
var G__28123 = ((cljs.core.seq(left_xs))?(bel.reader.handle_abbrev_sym.cljs$core$IFn$_invoke$arity$1 ? bel.reader.handle_abbrev_sym.cljs$core$IFn$_invoke$arity$1(left_xs) : bel.reader.handle_abbrev_sym.call(null,left_xs)):new cljs.core.Symbol(null,"upon","upon",-676647387,null));
var G__28124 = (function (){var G__28125 = (bel.reader.handle_abbrev_sym.cljs$core$IFn$_invoke$arity$1 ? bel.reader.handle_abbrev_sym.cljs$core$IFn$_invoke$arity$1(right_xs) : bel.reader.handle_abbrev_sym.call(null,right_xs));
var G__28126 = bel.model.bel_nil;
return (bel.model.p.cljs$core$IFn$_invoke$arity$2 ? bel.model.p.cljs$core$IFn$_invoke$arity$2(G__28125,G__28126) : bel.model.p.call(null,G__28125,G__28126));
})();
return (bel.model.p.cljs$core$IFn$_invoke$arity$2 ? bel.model.p.cljs$core$IFn$_invoke$arity$2(G__28123,G__28124) : bel.model.p.call(null,G__28123,G__28124));
});
bel.reader.handle_excl = (function bel$reader$handle_excl(left_xs,right_xs){
var G__28127 = ((cljs.core.seq(left_xs))?(bel.reader.handle_abbrev_sym.cljs$core$IFn$_invoke$arity$1 ? bel.reader.handle_abbrev_sym.cljs$core$IFn$_invoke$arity$1(left_xs) : bel.reader.handle_abbrev_sym.call(null,left_xs)):new cljs.core.Symbol(null,"upon","upon",-676647387,null));
var G__28128 = (function (){var G__28129 = bel.model.quoted_p((bel.reader.handle_abbrev_sym.cljs$core$IFn$_invoke$arity$1 ? bel.reader.handle_abbrev_sym.cljs$core$IFn$_invoke$arity$1(right_xs) : bel.reader.handle_abbrev_sym.call(null,right_xs)));
var G__28130 = bel.model.bel_nil;
return (bel.model.p.cljs$core$IFn$_invoke$arity$2 ? bel.model.p.cljs$core$IFn$_invoke$arity$2(G__28129,G__28130) : bel.model.p.call(null,G__28129,G__28130));
})();
return (bel.model.p.cljs$core$IFn$_invoke$arity$2 ? bel.model.p.cljs$core$IFn$_invoke$arity$2(G__28127,G__28128) : bel.model.p.call(null,G__28127,G__28128));
});
bel.reader.handle_no = (function bel$reader$handle_no(left_xs,p__28131){
var vec__28132 = p__28131;
var seq__28133 = cljs.core.seq(vec__28132);
var first__28134 = cljs.core.first(seq__28133);
var seq__28133__$1 = cljs.core.next(seq__28133);
var r = first__28134;
var right_xs = seq__28133__$1;
var G__28135 = cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(left_xs,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__28136 = new cljs.core.Symbol(null,"compose","compose",1144740903,null);
var G__28137 = (function (){var G__28138 = new cljs.core.Symbol(null,"no","no",1250157893,null);
var G__28139 = (bel.model.p.cljs$core$IFn$_invoke$arity$2 ? bel.model.p.cljs$core$IFn$_invoke$arity$2(r,bel.model.bel_nil) : bel.model.p.call(null,r,bel.model.bel_nil));
return (bel.model.p.cljs$core$IFn$_invoke$arity$2 ? bel.model.p.cljs$core$IFn$_invoke$arity$2(G__28138,G__28139) : bel.model.p.call(null,G__28138,G__28139));
})();
return (bel.model.p.cljs$core$IFn$_invoke$arity$2 ? bel.model.p.cljs$core$IFn$_invoke$arity$2(G__28136,G__28137) : bel.model.p.call(null,G__28136,G__28137));
})()], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([right_xs], 0));
return (bel.reader.handle_abbrev_sym.cljs$core$IFn$_invoke$arity$1 ? bel.reader.handle_abbrev_sym.cljs$core$IFn$_invoke$arity$1(G__28135) : bel.reader.handle_abbrev_sym.call(null,G__28135));
});
bel.reader.handle_col = (function bel$reader$handle_col(left_xs,right_xs){
var G__28140 = new cljs.core.Symbol(null,"compose","compose",1144740903,null);
var G__28141 = bel.model.seq__GT_p(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (x){
return ((cljs.core.seqable_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(x),new cljs.core.Keyword(null,"comp_id","comp_id",947162069))));
}),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(left_xs,right_xs)));
return (bel.model.p.cljs$core$IFn$_invoke$arity$2 ? bel.model.p.cljs$core$IFn$_invoke$arity$2(G__28140,G__28141) : bel.model.p.call(null,G__28140,G__28141));
});
bel.reader.handle_abbrev_sym = (function bel$reader$handle_abbrev_sym(x){
if(cljs.core.truth_((function (){var or__5045__auto__ = (bel.model.pair_QMARK_.cljs$core$IFn$_invoke$arity$1 ? bel.model.pair_QMARK_.cljs$core$IFn$_invoke$arity$1(x) : bel.model.pair_QMARK_.call(null,x));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (bel.model.symbol_QMARK_.cljs$core$IFn$_invoke$arity$1 ? bel.model.symbol_QMARK_.cljs$core$IFn$_invoke$arity$1(x) : bel.model.symbol_QMARK_.call(null,x));
}
})())){
return x;
} else {
var vec__28142 = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__28151){
var vec__28152 = p__28151;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28152,(0),null);
return cljs.core.some(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"comp_id","comp_id",947162069),id], null)),x);
}),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["|",bel.reader.handle_bar], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [".",bel.reader.handle_dot], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["!",bel.reader.handle_excl], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["~",bel.reader.handle_no], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [":",bel.reader.handle_col], null)], null)));
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28142,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28142,(1),null);
var vec__28145 = cljs.core.split_with(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.not_EQ_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"comp_id","comp_id",947162069),id], null)),x);
var before_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28145,(0),null);
var vec__28148 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28145,(1),null);
var seq__28149 = cljs.core.seq(vec__28148);
var first__28150 = cljs.core.first(seq__28149);
var seq__28149__$1 = cljs.core.next(seq__28149);
var _ = first__28150;
var after_id = seq__28149__$1;
if(cljs.core.truth_(f)){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(before_id,after_id) : f.call(null,before_id,after_id));
} else {
return cljs.core.first(x);
}
}
});
bel.reader.abbrev_sym__GT_pair = bel.reader.form_transform(new cljs.core.Keyword(null,"comp_sym","comp_sym",745191524),(function (p__28155){
var vec__28156 = p__28155;
var seq__28157 = cljs.core.seq(vec__28156);
var first__28158 = cljs.core.first(seq__28157);
var seq__28157__$1 = cljs.core.next(seq__28157);
var _ = first__28158;
var xs = seq__28157__$1;
return bel.reader.handle_abbrev_sym(xs);
}));
bel.reader.transform_number = bel.reader.form_transform(new cljs.core.Keyword(null,"number","number",1570378438),(function (p__28159){
var vec__28160 = p__28159;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28160,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28160,(1),null);
return clojure.edn.read_string.cljs$core$IFn$_invoke$arity$1(v);
}));
bel.reader.transform_symbol = bel.reader.form_transform(new cljs.core.Keyword(null,"symbol","symbol",-1038572696),(function (p__28163){
var vec__28164 = p__28163;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28164,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28164,(1),null);
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(v);
}));
bel.reader.transform_char = bel.reader.form_transform(new cljs.core.Keyword(null,"char","char",-641587586),(function (p__28167){
var vec__28168 = p__28167;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28168,(0),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28168,(1),null);
return clojure.edn.read_string.cljs$core$IFn$_invoke$arity$1(["\\",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join(''));
}));
bel.reader.bel_ebnf = "sexp = string | list | abbrev_fn | quote | backquote | comma | splice | char | symbol | dot | number | comp_sym\nlist = lparen sexp? (<whitespace> sexp)* rparen\nabbrev_fn = <'['> sexp? (<whitespace> sexp)* <']'>\ncomp_sym = symbol (comp_id* symbol)* | (comp_id* symbol) (comp_id* symbol)*\ncomp_id = (':' | '!' | '.' | '~' | ':' | '|')\n<lparen> = <'('>\n<rparen> = <')'>\nstring = <'\"'> any_char* <'\"'>\nchar = <'\\\\'> name\nsymbol = name\ndot = #'\\.'\nquote = <'\\''> sexp\nbackquote = <'`'> sexp\ncomma = <','> sexp\nsplice = <',@'> sexp\nname = #'[a-zA-Z\\-*+_=>\\/<\\^][a-zA-Z0-9\\-*+_=>\\/<\\^\\?]*'\nnumber = #'[+-]?[0-9][0-9]*[.]?[0-9]*'\nany_char = #'.' | space\nspace = #'\\s'\nwhitespace = #'\\s+'\n";
bel.reader.parse_string = instaparse.core.parser(bel.reader.bel_ebnf);
bel.reader.unwrap_abbrev_sym_pt = bel.reader.form_transform(new cljs.core.Keyword(null,"abbrev_sym_pt","abbrev_sym_pt",-1719727089),cljs.core.second);
bel.reader.parse_postwalk = cljs.core.comp.cljs$core$IFn$_invoke$arity$variadic(bel.reader.list__GT_pair,bel.reader.transform_string,bel.reader.quote__GT_pair,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([bel.reader.transform_symbol,bel.reader.unwrap_name,bel.reader.unwrap_sexp,bel.reader.unwrap_abbrev_sym_pt,bel.reader.unwrap_space,bel.reader.abbrev_fn__GT_pair,bel.reader.abbrev_sym__GT_pair,bel.reader.transform_number,bel.reader.transform_char], 0));
bel.reader.parse = cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(clojure.walk.postwalk,bel.reader.parse_postwalk),bel.reader.parse_string,clojure.string.trim);
bel.reader.bel__GT_pretty = (function bel$reader$bel__GT_pretty(form){
var pred__28171 = cljs.core._EQ_;
var expr__28172 = bel.model.type_nilable(form);
if(cljs.core.truth_((function (){var G__28174 = new cljs.core.Symbol(null,"symbol","symbol",601958831,null);
var G__28175 = expr__28172;
return (pred__28171.cljs$core$IFn$_invoke$arity$2 ? pred__28171.cljs$core$IFn$_invoke$arity$2(G__28174,G__28175) : pred__28171.call(null,G__28174,G__28175));
})())){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(bel.model.bel_nil,form)){
return null;
} else {
return form;
}
} else {
if(cljs.core.truth_((function (){var G__28176 = new cljs.core.Symbol(null,"backquote","backquote",-1323865401,null);
var G__28177 = expr__28172;
return (pred__28171.cljs$core$IFn$_invoke$arity$2 ? pred__28171.cljs$core$IFn$_invoke$arity$2(G__28176,G__28177) : pred__28171.call(null,G__28176,G__28177));
})())){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"bq","bq",-155061565,null),(new cljs.core.List(null,(function (){var G__28178 = cljs.core.second(form);
return (bel.reader.bel__GT_pretty.cljs$core$IFn$_invoke$arity$1 ? bel.reader.bel__GT_pretty.cljs$core$IFn$_invoke$arity$1(G__28178) : bel.reader.bel__GT_pretty.call(null,G__28178));
})(),null,(1),null)),(2),null));
} else {
if(cljs.core.truth_((function (){var G__28179 = new cljs.core.Symbol(null,"comma","comma",-955411024,null);
var G__28180 = expr__28172;
return (pred__28171.cljs$core$IFn$_invoke$arity$2 ? pred__28171.cljs$core$IFn$_invoke$arity$2(G__28179,G__28180) : pred__28171.call(null,G__28179,G__28180));
})())){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"cm","cm",-2113844233,null),(new cljs.core.List(null,(function (){var G__28181 = cljs.core.second(form);
return (bel.reader.bel__GT_pretty.cljs$core$IFn$_invoke$arity$1 ? bel.reader.bel__GT_pretty.cljs$core$IFn$_invoke$arity$1(G__28181) : bel.reader.bel__GT_pretty.call(null,G__28181));
})(),null,(1),null)),(2),null));
} else {
if(cljs.core.truth_((function (){var G__28182 = new cljs.core.Symbol(null,"splice","splice",2090119692,null);
var G__28183 = expr__28172;
return (pred__28171.cljs$core$IFn$_invoke$arity$2 ? pred__28171.cljs$core$IFn$_invoke$arity$2(G__28182,G__28183) : pred__28171.call(null,G__28182,G__28183));
})())){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"spl","spl",539175274,null),(new cljs.core.List(null,(function (){var G__28184 = cljs.core.second(form);
return (bel.reader.bel__GT_pretty.cljs$core$IFn$_invoke$arity$1 ? bel.reader.bel__GT_pretty.cljs$core$IFn$_invoke$arity$1(G__28184) : bel.reader.bel__GT_pretty.call(null,G__28184));
})(),null,(1),null)),(2),null));
} else {
if(cljs.core.truth_((function (){var G__28185 = new cljs.core.Symbol(null,"err","err",-448925678,null);
var G__28186 = expr__28172;
return (pred__28171.cljs$core$IFn$_invoke$arity$2 ? pred__28171.cljs$core$IFn$_invoke$arity$2(G__28185,G__28186) : pred__28171.call(null,G__28185,G__28186));
})())){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"err","err",-448925678,null),(new cljs.core.List(null,(function (){var G__28187 = cljs.core.second(form);
return (bel.reader.bel__GT_pretty.cljs$core$IFn$_invoke$arity$1 ? bel.reader.bel__GT_pretty.cljs$core$IFn$_invoke$arity$1(G__28187) : bel.reader.bel__GT_pretty.call(null,G__28187));
})(),null,(1),null)),(2),null));
} else {
if(cljs.core.truth_((function (){var G__28188 = new cljs.core.Symbol(null,"char","char",998943941,null);
var G__28189 = expr__28172;
return (pred__28171.cljs$core$IFn$_invoke$arity$2 ? pred__28171.cljs$core$IFn$_invoke$arity$2(G__28188,G__28189) : pred__28171.call(null,G__28188,G__28189));
})())){
return form;
} else {
if(cljs.core.truth_((function (){var G__28190 = new cljs.core.Symbol(null,"number","number",-1084057331,null);
var G__28191 = expr__28172;
return (pred__28171.cljs$core$IFn$_invoke$arity$2 ? pred__28171.cljs$core$IFn$_invoke$arity$2(G__28190,G__28191) : pred__28171.call(null,G__28190,G__28191));
})())){
return form;
} else {
if(cljs.core.truth_((function (){var G__28192 = new cljs.core.Symbol(null,"string","string",-349010059,null);
var G__28193 = expr__28172;
return (pred__28171.cljs$core$IFn$_invoke$arity$2 ? pred__28171.cljs$core$IFn$_invoke$arity$2(G__28192,G__28193) : pred__28171.call(null,G__28192,G__28193));
})())){
return form;
} else {
if(cljs.core.truth_((function (){var G__28194 = new cljs.core.Symbol(null,"pair","pair",1193015215,null);
var G__28195 = expr__28172;
return (pred__28171.cljs$core$IFn$_invoke$arity$2 ? pred__28171.cljs$core$IFn$_invoke$arity$2(G__28194,G__28195) : pred__28171.call(null,G__28194,G__28195));
})())){
var vec__28196 = form;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28196,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28196,(1),null);
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(bel.reader.bel__GT_pretty.cljs$core$IFn$_invoke$arity$1 ? bel.reader.bel__GT_pretty.cljs$core$IFn$_invoke$arity$1(a) : bel.reader.bel__GT_pretty.call(null,a))], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(bel.model.bel_nil,b))?null:(cljs.core.truth_((bel.model.pair_QMARK_.cljs$core$IFn$_invoke$arity$1 ? bel.model.pair_QMARK_.cljs$core$IFn$_invoke$arity$1(b) : bel.model.pair_QMARK_.call(null,b)))?(bel.reader.bel__GT_pretty.cljs$core$IFn$_invoke$arity$1 ? bel.reader.bel__GT_pretty.cljs$core$IFn$_invoke$arity$1(b) : bel.reader.bel__GT_pretty.call(null,b)):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,".",".",1975675962,null),(bel.reader.bel__GT_pretty.cljs$core$IFn$_invoke$arity$1 ? bel.reader.bel__GT_pretty.cljs$core$IFn$_invoke$arity$1(b) : bel.reader.bel__GT_pretty.call(null,b))], null)
)));
} else {
return form;
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

//# sourceMappingURL=bel.reader.js.map
