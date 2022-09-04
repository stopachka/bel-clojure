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
bel.reader.list__GT_pair = bel.reader.form_transform(new cljs.core.Keyword(null,"list","list",765357683),(function (p__13499){
var vec__13500 = p__13499;
var seq__13501 = cljs.core.seq(vec__13500);
var first__13502 = cljs.core.first(seq__13501);
var seq__13501__$1 = cljs.core.next(seq__13501);
var _t = first__13502;
var children = seq__13501__$1;
return bel.model.seq__GT_p(children);
}));
bel.reader.transform_string = bel.reader.form_transform(new cljs.core.Keyword(null,"string","string",-1989541586),(function (p__13503){
var vec__13504 = p__13503;
var seq__13505 = cljs.core.seq(vec__13504);
var first__13506 = cljs.core.first(seq__13505);
var seq__13505__$1 = cljs.core.next(seq__13505);
var _t = first__13506;
var children = seq__13505__$1;
return clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children));
}));
bel.reader.quote__GT_pair = bel.reader.form_transform(new cljs.core.Keyword(null,"quote","quote",-262615245),(function (p__13507){
var vec__13508 = p__13507;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13508,(0),null);
var exp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13508,(1),null);
return bel.model.quoted_p(exp);
}));
bel.reader.abbrev_fn__GT_pair = bel.reader.form_transform(new cljs.core.Keyword(null,"abbrev_fn","abbrev_fn",-171318287),(function (p__13511){
var vec__13512 = p__13511;
var seq__13513 = cljs.core.seq(vec__13512);
var first__13514 = cljs.core.first(seq__13513);
var seq__13513__$1 = cljs.core.next(seq__13513);
var _ = first__13514;
var xs = seq__13513__$1;
var G__13515 = new cljs.core.Symbol(null,"fn","fn",465265323,null);
var G__13516 = (function (){var G__13517 = (function (){var G__13519 = new cljs.core.Symbol(null,"_","_",-1201019570,null);
var G__13520 = bel.model.bel_nil;
return (bel.model.p.cljs$core$IFn$_invoke$arity$2 ? bel.model.p.cljs$core$IFn$_invoke$arity$2(G__13519,G__13520) : bel.model.p.call(null,G__13519,G__13520));
})();
var G__13518 = (function (){var G__13521 = bel.model.seq__GT_p(xs);
var G__13522 = bel.model.bel_nil;
return (bel.model.p.cljs$core$IFn$_invoke$arity$2 ? bel.model.p.cljs$core$IFn$_invoke$arity$2(G__13521,G__13522) : bel.model.p.call(null,G__13521,G__13522));
})();
return (bel.model.p.cljs$core$IFn$_invoke$arity$2 ? bel.model.p.cljs$core$IFn$_invoke$arity$2(G__13517,G__13518) : bel.model.p.call(null,G__13517,G__13518));
})();
return (bel.model.p.cljs$core$IFn$_invoke$arity$2 ? bel.model.p.cljs$core$IFn$_invoke$arity$2(G__13515,G__13516) : bel.model.p.call(null,G__13515,G__13516));
}));
bel.reader.handle_bar = (function bel$reader$handle_bar(left_xs,right_xs){
var G__13523 = new cljs.core.Symbol(null,"t","t",242699008,null);
var G__13524 = (function (){var G__13525 = (bel.reader.handle_abbrev_sym.cljs$core$IFn$_invoke$arity$1 ? bel.reader.handle_abbrev_sym.cljs$core$IFn$_invoke$arity$1(left_xs) : bel.reader.handle_abbrev_sym.call(null,left_xs));
var G__13526 = (function (){var G__13527 = (bel.reader.handle_abbrev_sym.cljs$core$IFn$_invoke$arity$1 ? bel.reader.handle_abbrev_sym.cljs$core$IFn$_invoke$arity$1(right_xs) : bel.reader.handle_abbrev_sym.call(null,right_xs));
var G__13528 = bel.model.bel_nil;
return (bel.model.p.cljs$core$IFn$_invoke$arity$2 ? bel.model.p.cljs$core$IFn$_invoke$arity$2(G__13527,G__13528) : bel.model.p.call(null,G__13527,G__13528));
})();
return (bel.model.p.cljs$core$IFn$_invoke$arity$2 ? bel.model.p.cljs$core$IFn$_invoke$arity$2(G__13525,G__13526) : bel.model.p.call(null,G__13525,G__13526));
})();
return (bel.model.p.cljs$core$IFn$_invoke$arity$2 ? bel.model.p.cljs$core$IFn$_invoke$arity$2(G__13523,G__13524) : bel.model.p.call(null,G__13523,G__13524));
});
bel.reader.handle_dot = (function bel$reader$handle_dot(left_xs,right_xs){
var G__13529 = ((cljs.core.seq(left_xs))?(bel.reader.handle_abbrev_sym.cljs$core$IFn$_invoke$arity$1 ? bel.reader.handle_abbrev_sym.cljs$core$IFn$_invoke$arity$1(left_xs) : bel.reader.handle_abbrev_sym.call(null,left_xs)):new cljs.core.Symbol(null,"upon","upon",-676647387,null));
var G__13530 = (function (){var G__13531 = (bel.reader.handle_abbrev_sym.cljs$core$IFn$_invoke$arity$1 ? bel.reader.handle_abbrev_sym.cljs$core$IFn$_invoke$arity$1(right_xs) : bel.reader.handle_abbrev_sym.call(null,right_xs));
var G__13532 = bel.model.bel_nil;
return (bel.model.p.cljs$core$IFn$_invoke$arity$2 ? bel.model.p.cljs$core$IFn$_invoke$arity$2(G__13531,G__13532) : bel.model.p.call(null,G__13531,G__13532));
})();
return (bel.model.p.cljs$core$IFn$_invoke$arity$2 ? bel.model.p.cljs$core$IFn$_invoke$arity$2(G__13529,G__13530) : bel.model.p.call(null,G__13529,G__13530));
});
bel.reader.handle_excl = (function bel$reader$handle_excl(left_xs,right_xs){
var G__13533 = ((cljs.core.seq(left_xs))?(bel.reader.handle_abbrev_sym.cljs$core$IFn$_invoke$arity$1 ? bel.reader.handle_abbrev_sym.cljs$core$IFn$_invoke$arity$1(left_xs) : bel.reader.handle_abbrev_sym.call(null,left_xs)):new cljs.core.Symbol(null,"upon","upon",-676647387,null));
var G__13534 = (function (){var G__13535 = bel.model.quoted_p((bel.reader.handle_abbrev_sym.cljs$core$IFn$_invoke$arity$1 ? bel.reader.handle_abbrev_sym.cljs$core$IFn$_invoke$arity$1(right_xs) : bel.reader.handle_abbrev_sym.call(null,right_xs)));
var G__13536 = bel.model.bel_nil;
return (bel.model.p.cljs$core$IFn$_invoke$arity$2 ? bel.model.p.cljs$core$IFn$_invoke$arity$2(G__13535,G__13536) : bel.model.p.call(null,G__13535,G__13536));
})();
return (bel.model.p.cljs$core$IFn$_invoke$arity$2 ? bel.model.p.cljs$core$IFn$_invoke$arity$2(G__13533,G__13534) : bel.model.p.call(null,G__13533,G__13534));
});
bel.reader.handle_no = (function bel$reader$handle_no(left_xs,p__13537){
var vec__13538 = p__13537;
var seq__13539 = cljs.core.seq(vec__13538);
var first__13540 = cljs.core.first(seq__13539);
var seq__13539__$1 = cljs.core.next(seq__13539);
var r = first__13540;
var right_xs = seq__13539__$1;
var G__13541 = cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(left_xs,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__13542 = new cljs.core.Symbol(null,"compose","compose",1144740903,null);
var G__13543 = (function (){var G__13544 = new cljs.core.Symbol(null,"no","no",1250157893,null);
var G__13545 = (bel.model.p.cljs$core$IFn$_invoke$arity$2 ? bel.model.p.cljs$core$IFn$_invoke$arity$2(r,bel.model.bel_nil) : bel.model.p.call(null,r,bel.model.bel_nil));
return (bel.model.p.cljs$core$IFn$_invoke$arity$2 ? bel.model.p.cljs$core$IFn$_invoke$arity$2(G__13544,G__13545) : bel.model.p.call(null,G__13544,G__13545));
})();
return (bel.model.p.cljs$core$IFn$_invoke$arity$2 ? bel.model.p.cljs$core$IFn$_invoke$arity$2(G__13542,G__13543) : bel.model.p.call(null,G__13542,G__13543));
})()], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([right_xs], 0));
return (bel.reader.handle_abbrev_sym.cljs$core$IFn$_invoke$arity$1 ? bel.reader.handle_abbrev_sym.cljs$core$IFn$_invoke$arity$1(G__13541) : bel.reader.handle_abbrev_sym.call(null,G__13541));
});
bel.reader.handle_col = (function bel$reader$handle_col(left_xs,right_xs){
var G__13546 = new cljs.core.Symbol(null,"compose","compose",1144740903,null);
var G__13547 = bel.model.seq__GT_p(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (x){
return ((cljs.core.seqable_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(x),new cljs.core.Keyword(null,"comp_id","comp_id",947162069))));
}),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(left_xs,right_xs)));
return (bel.model.p.cljs$core$IFn$_invoke$arity$2 ? bel.model.p.cljs$core$IFn$_invoke$arity$2(G__13546,G__13547) : bel.model.p.call(null,G__13546,G__13547));
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
var vec__13548 = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__13557){
var vec__13558 = p__13557;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13558,(0),null);
return cljs.core.some(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"comp_id","comp_id",947162069),id], null)),x);
}),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["|",bel.reader.handle_bar], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [".",bel.reader.handle_dot], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["!",bel.reader.handle_excl], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["~",bel.reader.handle_no], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [":",bel.reader.handle_col], null)], null)));
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13548,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13548,(1),null);
var vec__13551 = cljs.core.split_with(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.not_EQ_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"comp_id","comp_id",947162069),id], null)),x);
var before_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13551,(0),null);
var vec__13554 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13551,(1),null);
var seq__13555 = cljs.core.seq(vec__13554);
var first__13556 = cljs.core.first(seq__13555);
var seq__13555__$1 = cljs.core.next(seq__13555);
var _ = first__13556;
var after_id = seq__13555__$1;
if(cljs.core.truth_(f)){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(before_id,after_id) : f.call(null,before_id,after_id));
} else {
return cljs.core.first(x);
}
}
});
bel.reader.abbrev_sym__GT_pair = bel.reader.form_transform(new cljs.core.Keyword(null,"comp_sym","comp_sym",745191524),(function (p__13561){
var vec__13562 = p__13561;
var seq__13563 = cljs.core.seq(vec__13562);
var first__13564 = cljs.core.first(seq__13563);
var seq__13563__$1 = cljs.core.next(seq__13563);
var _ = first__13564;
var xs = seq__13563__$1;
return bel.reader.handle_abbrev_sym(xs);
}));
bel.reader.transform_number = bel.reader.form_transform(new cljs.core.Keyword(null,"number","number",1570378438),(function (p__13565){
var vec__13566 = p__13565;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13566,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13566,(1),null);
return clojure.edn.read_string.cljs$core$IFn$_invoke$arity$1(v);
}));
bel.reader.transform_symbol = bel.reader.form_transform(new cljs.core.Keyword(null,"symbol","symbol",-1038572696),(function (p__13569){
var vec__13570 = p__13569;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13570,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13570,(1),null);
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(v);
}));
bel.reader.transform_char = bel.reader.form_transform(new cljs.core.Keyword(null,"char","char",-641587586),(function (p__13573){
var vec__13574 = p__13573;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13574,(0),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13574,(1),null);
return clojure.edn.read_string.cljs$core$IFn$_invoke$arity$1(["\\",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join(''));
}));
bel.reader.bel_ebnf = "sexp = string | list | abbrev_fn | quote | backquote | comma | splice | char | symbol | dot | number | comp_sym\nlist = lparen sexp? (<whitespace> sexp)* rparen\nabbrev_fn = <'['> sexp? (<whitespace> sexp)* <']'>\ncomp_sym = symbol (comp_id* symbol)* | (comp_id* symbol) (comp_id* symbol)*\ncomp_id = (':' | '!' | '.' | '~' | ':' | '|')\n<lparen> = <'('>\n<rparen> = <')'>\nstring = <'\"'> any_char* <'\"'>\nchar = <'\\\\'> name\nsymbol = name\ndot = #'\\.'\nquote = <'\\''> sexp\nbackquote = <'`'> sexp\ncomma = <','> sexp\nsplice = <',@'> sexp\nname = #'[a-zA-Z\\-*+_=>\\/<\\^][a-zA-Z0-9\\-*+_=>\\/<\\^\\?]*'\nnumber = #'[+-]?[0-9][0-9]*[.]?[0-9]*'\nany_char = #'.' | space\nspace = #'\\s'\nwhitespace = #'\\s+'\n";
bel.reader.parse_string = instaparse.core.parser(bel.reader.bel_ebnf);
bel.reader.unwrap_abbrev_sym_pt = bel.reader.form_transform(new cljs.core.Keyword(null,"abbrev_sym_pt","abbrev_sym_pt",-1719727089),cljs.core.second);
bel.reader.parse_postwalk = cljs.core.comp.cljs$core$IFn$_invoke$arity$variadic(bel.reader.list__GT_pair,bel.reader.transform_string,bel.reader.quote__GT_pair,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([bel.reader.transform_symbol,bel.reader.unwrap_name,bel.reader.unwrap_sexp,bel.reader.unwrap_abbrev_sym_pt,bel.reader.unwrap_space,bel.reader.abbrev_fn__GT_pair,bel.reader.abbrev_sym__GT_pair,bel.reader.transform_number,bel.reader.transform_char], 0));
bel.reader.parse = cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(clojure.walk.postwalk,bel.reader.parse_postwalk),bel.reader.parse_string,clojure.string.trim);
bel.reader.bel__GT_pretty = (function bel$reader$bel__GT_pretty(form){
var pred__13577 = cljs.core._EQ_;
var expr__13578 = bel.model.type_nilable(form);
if(cljs.core.truth_((function (){var G__13580 = new cljs.core.Symbol(null,"symbol","symbol",601958831,null);
var G__13581 = expr__13578;
return (pred__13577.cljs$core$IFn$_invoke$arity$2 ? pred__13577.cljs$core$IFn$_invoke$arity$2(G__13580,G__13581) : pred__13577.call(null,G__13580,G__13581));
})())){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(bel.model.bel_nil,form)){
return null;
} else {
return form;
}
} else {
if(cljs.core.truth_((function (){var G__13582 = new cljs.core.Symbol(null,"backquote","backquote",-1323865401,null);
var G__13583 = expr__13578;
return (pred__13577.cljs$core$IFn$_invoke$arity$2 ? pred__13577.cljs$core$IFn$_invoke$arity$2(G__13582,G__13583) : pred__13577.call(null,G__13582,G__13583));
})())){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"bq","bq",-155061565,null),(new cljs.core.List(null,(function (){var G__13584 = cljs.core.second(form);
return (bel.reader.bel__GT_pretty.cljs$core$IFn$_invoke$arity$1 ? bel.reader.bel__GT_pretty.cljs$core$IFn$_invoke$arity$1(G__13584) : bel.reader.bel__GT_pretty.call(null,G__13584));
})(),null,(1),null)),(2),null));
} else {
if(cljs.core.truth_((function (){var G__13585 = new cljs.core.Symbol(null,"comma","comma",-955411024,null);
var G__13586 = expr__13578;
return (pred__13577.cljs$core$IFn$_invoke$arity$2 ? pred__13577.cljs$core$IFn$_invoke$arity$2(G__13585,G__13586) : pred__13577.call(null,G__13585,G__13586));
})())){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"cm","cm",-2113844233,null),(new cljs.core.List(null,(function (){var G__13587 = cljs.core.second(form);
return (bel.reader.bel__GT_pretty.cljs$core$IFn$_invoke$arity$1 ? bel.reader.bel__GT_pretty.cljs$core$IFn$_invoke$arity$1(G__13587) : bel.reader.bel__GT_pretty.call(null,G__13587));
})(),null,(1),null)),(2),null));
} else {
if(cljs.core.truth_((function (){var G__13588 = new cljs.core.Symbol(null,"splice","splice",2090119692,null);
var G__13589 = expr__13578;
return (pred__13577.cljs$core$IFn$_invoke$arity$2 ? pred__13577.cljs$core$IFn$_invoke$arity$2(G__13588,G__13589) : pred__13577.call(null,G__13588,G__13589));
})())){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"spl","spl",539175274,null),(new cljs.core.List(null,(function (){var G__13590 = cljs.core.second(form);
return (bel.reader.bel__GT_pretty.cljs$core$IFn$_invoke$arity$1 ? bel.reader.bel__GT_pretty.cljs$core$IFn$_invoke$arity$1(G__13590) : bel.reader.bel__GT_pretty.call(null,G__13590));
})(),null,(1),null)),(2),null));
} else {
if(cljs.core.truth_((function (){var G__13591 = new cljs.core.Symbol(null,"err","err",-448925678,null);
var G__13592 = expr__13578;
return (pred__13577.cljs$core$IFn$_invoke$arity$2 ? pred__13577.cljs$core$IFn$_invoke$arity$2(G__13591,G__13592) : pred__13577.call(null,G__13591,G__13592));
})())){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"err","err",-448925678,null),(new cljs.core.List(null,(function (){var G__13593 = cljs.core.second(form);
return (bel.reader.bel__GT_pretty.cljs$core$IFn$_invoke$arity$1 ? bel.reader.bel__GT_pretty.cljs$core$IFn$_invoke$arity$1(G__13593) : bel.reader.bel__GT_pretty.call(null,G__13593));
})(),null,(1),null)),(2),null));
} else {
if(cljs.core.truth_((function (){var G__13594 = new cljs.core.Symbol(null,"char","char",998943941,null);
var G__13595 = expr__13578;
return (pred__13577.cljs$core$IFn$_invoke$arity$2 ? pred__13577.cljs$core$IFn$_invoke$arity$2(G__13594,G__13595) : pred__13577.call(null,G__13594,G__13595));
})())){
return form;
} else {
if(cljs.core.truth_((function (){var G__13596 = new cljs.core.Symbol(null,"number","number",-1084057331,null);
var G__13597 = expr__13578;
return (pred__13577.cljs$core$IFn$_invoke$arity$2 ? pred__13577.cljs$core$IFn$_invoke$arity$2(G__13596,G__13597) : pred__13577.call(null,G__13596,G__13597));
})())){
return form;
} else {
if(cljs.core.truth_((function (){var G__13598 = new cljs.core.Symbol(null,"string","string",-349010059,null);
var G__13599 = expr__13578;
return (pred__13577.cljs$core$IFn$_invoke$arity$2 ? pred__13577.cljs$core$IFn$_invoke$arity$2(G__13598,G__13599) : pred__13577.call(null,G__13598,G__13599));
})())){
return form;
} else {
if(cljs.core.truth_((function (){var G__13600 = new cljs.core.Symbol(null,"pair","pair",1193015215,null);
var G__13601 = expr__13578;
return (pred__13577.cljs$core$IFn$_invoke$arity$2 ? pred__13577.cljs$core$IFn$_invoke$arity$2(G__13600,G__13601) : pred__13577.call(null,G__13600,G__13601));
})())){
var vec__13602 = form;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13602,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13602,(1),null);
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
