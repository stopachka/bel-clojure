goog.provide('instaparse.core');
instaparse.core._STAR_default_output_format_STAR_ = new cljs.core.Keyword(null,"hiccup","hiccup",1218876238);
/**
 * Changes the default output format.  Input should be :hiccup or :enlive
 */
instaparse.core.set_default_output_format_BANG_ = (function instaparse$core$set_default_output_format_BANG_(type){
if(cljs.core.truth_((function (){var fexpr__25040 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),null,new cljs.core.Keyword(null,"enlive","enlive",1679023921),null], null), null);
return (fexpr__25040.cljs$core$IFn$_invoke$arity$1 ? fexpr__25040.cljs$core$IFn$_invoke$arity$1(type) : fexpr__25040.call(null,type));
})())){
} else {
throw (new Error("Assert failed: (#{:hiccup :enlive} type)"));
}

return (instaparse.core._STAR_default_output_format_STAR_ = type);
});
instaparse.core._STAR_default_input_format_STAR_ = new cljs.core.Keyword(null,"ebnf","ebnf",31967825);
/**
 * Changes the default input format.  Input should be :abnf or :ebnf
 */
instaparse.core.set_default_input_format_BANG_ = (function instaparse$core$set_default_input_format_BANG_(type){
if(cljs.core.truth_((function (){var fexpr__25041 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ebnf","ebnf",31967825),null,new cljs.core.Keyword(null,"abnf","abnf",-152462052),null], null), null);
return (fexpr__25041.cljs$core$IFn$_invoke$arity$1 ? fexpr__25041.cljs$core$IFn$_invoke$arity$1(type) : fexpr__25041.call(null,type));
})())){
} else {
throw (new Error("Assert failed: (#{:ebnf :abnf} type)"));
}

return (instaparse.core._STAR_default_input_format_STAR_ = type);
});


instaparse.core.unhide_parser = (function instaparse$core$unhide_parser(parser,unhide){
var G__25046 = unhide;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__25046)){
return parser;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"content","content",15833224),G__25046)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(parser,new cljs.core.Keyword(null,"grammar","grammar",1881328267),instaparse.combinators_source.unhide_all_content(new cljs.core.Keyword(null,"grammar","grammar",1881328267).cljs$core$IFn$_invoke$arity$1(parser)));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tags","tags",1771418977),G__25046)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(parser,new cljs.core.Keyword(null,"grammar","grammar",1881328267),instaparse.combinators_source.unhide_tags(new cljs.core.Keyword(null,"output-format","output-format",-1826382676).cljs$core$IFn$_invoke$arity$1(parser),new cljs.core.Keyword(null,"grammar","grammar",1881328267).cljs$core$IFn$_invoke$arity$1(parser)));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"all","all",892129742),G__25046)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(parser,new cljs.core.Keyword(null,"grammar","grammar",1881328267),instaparse.combinators_source.unhide_all(new cljs.core.Keyword(null,"output-format","output-format",-1826382676).cljs$core$IFn$_invoke$arity$1(parser),new cljs.core.Keyword(null,"grammar","grammar",1881328267).cljs$core$IFn$_invoke$arity$1(parser)));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25046)].join('')));

}
}
}
}
});
/**
 * Use parser to parse the text.  Returns first parse tree found
 * that completely parses the text.  If no parse tree is possible, returns
 * a Failure object.
 * 
 * Optional keyword arguments:
 * :start :keyword  (where :keyword is name of starting production rule)
 * :partial true    (parses that don't consume the whole string are okay)
 * :total true      (if parse fails, embed failure node in tree)
 * :unhide <:tags or :content or :all> (for this parse, disable hiding)
 * :optimize :memory   (when possible, employ strategy to use less memory)
 * 
 * Clj only:
 * :trace true      (print diagnostic trace while parsing)
 */
instaparse.core.parse = (function instaparse$core$parse(var_args){
var args__5775__auto__ = [];
var len__5769__auto___25124 = arguments.length;
var i__5770__auto___25125 = (0);
while(true){
if((i__5770__auto___25125 < len__5769__auto___25124)){
args__5775__auto__.push((arguments[i__5770__auto___25125]));

var G__25126 = (i__5770__auto___25125 + (1));
i__5770__auto___25125 = G__25126;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return instaparse.core.parse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(instaparse.core.parse.cljs$core$IFn$_invoke$arity$variadic = (function (parser,text,p__25069){
var map__25070 = p__25069;
var map__25070__$1 = cljs.core.__destructure_map(map__25070);
var options = map__25070__$1;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [null,null,new cljs.core.Keyword(null,"tags","tags",1771418977),null,new cljs.core.Keyword(null,"content","content",15833224),null,new cljs.core.Keyword(null,"all","all",892129742),null], null), null),cljs.core.get.cljs$core$IFn$_invoke$arity$2(options,new cljs.core.Keyword(null,"unhide","unhide",-413983695)))){
} else {
throw (new Error("Assert failed: (contains? #{nil :tags :content :all} (get options :unhide))"));
}

if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [null,null,new cljs.core.Keyword(null,"memory","memory",-1449401430),null], null), null),cljs.core.get.cljs$core$IFn$_invoke$arity$2(options,new cljs.core.Keyword(null,"optimize","optimize",-1912349448)))){
} else {
throw (new Error("Assert failed: (contains? #{nil :memory} (get options :optimize))"));
}

var start_production = cljs.core.get.cljs$core$IFn$_invoke$arity$3(options,new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Keyword(null,"start-production","start-production",687546537).cljs$core$IFn$_invoke$arity$1(parser));
var partial_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(options,new cljs.core.Keyword(null,"partial","partial",241141745),false);
var optimize_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(options,new cljs.core.Keyword(null,"optimize","optimize",-1912349448),false);
var unhide = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options,new cljs.core.Keyword(null,"unhide","unhide",-413983695));
var trace_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(options,new cljs.core.Keyword(null,"trace","trace",-1082747415),false);
var parser__$1 = instaparse.core.unhide_parser(parser,unhide);
if(cljs.core.truth_(new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(options))){
return instaparse.gll.parse_total(new cljs.core.Keyword(null,"grammar","grammar",1881328267).cljs$core$IFn$_invoke$arity$1(parser__$1),start_production,text,partial_QMARK_,(function (){var G__25076 = new cljs.core.Keyword(null,"output-format","output-format",-1826382676).cljs$core$IFn$_invoke$arity$1(parser__$1);
return (instaparse.reduction.node_builders.cljs$core$IFn$_invoke$arity$1 ? instaparse.reduction.node_builders.cljs$core$IFn$_invoke$arity$1(G__25076) : instaparse.reduction.node_builders.call(null,G__25076));
})());
} else {
if(cljs.core.truth_((function (){var and__5043__auto__ = optimize_QMARK_;
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not(partial_QMARK_);
} else {
return and__5043__auto__;
}
})())){
var result = instaparse.repeat.try_repeating_parse_strategy(parser__$1,text,start_production);
if(cljs.core.truth_((instaparse.core.failure_QMARK_.cljs$core$IFn$_invoke$arity$1 ? instaparse.core.failure_QMARK_.cljs$core$IFn$_invoke$arity$1(result) : instaparse.core.failure_QMARK_.call(null,result)))){
return instaparse.gll.parse(new cljs.core.Keyword(null,"grammar","grammar",1881328267).cljs$core$IFn$_invoke$arity$1(parser__$1),start_production,text,partial_QMARK_);
} else {
return result;
}
} else {
return instaparse.gll.parse(new cljs.core.Keyword(null,"grammar","grammar",1881328267).cljs$core$IFn$_invoke$arity$1(parser__$1),start_production,text,partial_QMARK_);

}
}
}));

(instaparse.core.parse.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(instaparse.core.parse.cljs$lang$applyTo = (function (seq25051){
var G__25052 = cljs.core.first(seq25051);
var seq25051__$1 = cljs.core.next(seq25051);
var G__25053 = cljs.core.first(seq25051__$1);
var seq25051__$2 = cljs.core.next(seq25051__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25052,G__25053,seq25051__$2);
}));

/**
 * Use parser to parse the text.  Returns lazy seq of all parse trees
 * that completely parse the text.  If no parse tree is possible, returns
 * () with a Failure object attached as metadata.
 * 
 * Optional keyword arguments:
 * :start :keyword  (where :keyword is name of starting production rule)
 * :partial true    (parses that don't consume the whole string are okay)
 * :total true      (if parse fails, embed failure node in tree)
 * :unhide <:tags or :content or :all> (for this parse, disable hiding)
 * 
 * Clj only:
 * :trace true      (print diagnostic trace while parsing)
 */
instaparse.core.parses = (function instaparse$core$parses(var_args){
var args__5775__auto__ = [];
var len__5769__auto___25127 = arguments.length;
var i__5770__auto___25128 = (0);
while(true){
if((i__5770__auto___25128 < len__5769__auto___25127)){
args__5775__auto__.push((arguments[i__5770__auto___25128]));

var G__25129 = (i__5770__auto___25128 + (1));
i__5770__auto___25128 = G__25129;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return instaparse.core.parses.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(instaparse.core.parses.cljs$core$IFn$_invoke$arity$variadic = (function (parser,text,p__25092){
var map__25097 = p__25092;
var map__25097__$1 = cljs.core.__destructure_map(map__25097);
var options = map__25097__$1;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [null,null,new cljs.core.Keyword(null,"tags","tags",1771418977),null,new cljs.core.Keyword(null,"content","content",15833224),null,new cljs.core.Keyword(null,"all","all",892129742),null], null), null),cljs.core.get.cljs$core$IFn$_invoke$arity$2(options,new cljs.core.Keyword(null,"unhide","unhide",-413983695)))){
} else {
throw (new Error("Assert failed: (contains? #{nil :tags :content :all} (get options :unhide))"));
}

var start_production = cljs.core.get.cljs$core$IFn$_invoke$arity$3(options,new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Keyword(null,"start-production","start-production",687546537).cljs$core$IFn$_invoke$arity$1(parser));
var partial_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(options,new cljs.core.Keyword(null,"partial","partial",241141745),false);
var unhide = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options,new cljs.core.Keyword(null,"unhide","unhide",-413983695));
var trace_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(options,new cljs.core.Keyword(null,"trace","trace",-1082747415),false);
var parser__$1 = instaparse.core.unhide_parser(parser,unhide);
if(cljs.core.truth_(new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(options))){
return instaparse.gll.parses_total(new cljs.core.Keyword(null,"grammar","grammar",1881328267).cljs$core$IFn$_invoke$arity$1(parser__$1),start_production,text,partial_QMARK_,(function (){var G__25098 = new cljs.core.Keyword(null,"output-format","output-format",-1826382676).cljs$core$IFn$_invoke$arity$1(parser__$1);
return (instaparse.reduction.node_builders.cljs$core$IFn$_invoke$arity$1 ? instaparse.reduction.node_builders.cljs$core$IFn$_invoke$arity$1(G__25098) : instaparse.reduction.node_builders.call(null,G__25098));
})());
} else {
return instaparse.gll.parses(new cljs.core.Keyword(null,"grammar","grammar",1881328267).cljs$core$IFn$_invoke$arity$1(parser__$1),start_production,text,partial_QMARK_);

}
}));

(instaparse.core.parses.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(instaparse.core.parses.cljs$lang$applyTo = (function (seq25085){
var G__25086 = cljs.core.first(seq25085);
var seq25085__$1 = cljs.core.next(seq25085);
var G__25087 = cljs.core.first(seq25085__$1);
var seq25085__$2 = cljs.core.next(seq25085__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25086,G__25087,seq25085__$2);
}));


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IFn}
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
instaparse.core.Parser = (function (grammar,start_production,output_format,__meta,__extmap,__hash){
this.grammar = grammar;
this.start_production = start_production;
this.output_format = output_format;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716171;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(instaparse.core.Parser.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(instaparse.core.Parser.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k25100,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__25105 = k25100;
var G__25105__$1 = (((G__25105 instanceof cljs.core.Keyword))?G__25105.fqn:null);
switch (G__25105__$1) {
case "grammar":
return self__.grammar;

break;
case "start-production":
return self__.start_production;

break;
case "output-format":
return self__.output_format;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k25100,else__5346__auto__);

}
}));

(instaparse.core.Parser.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__25106){
var vec__25107 = p__25106;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25107,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25107,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(instaparse.core.Parser.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#instaparse.core.Parser{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"grammar","grammar",1881328267),self__.grammar],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-production","start-production",687546537),self__.start_production],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"output-format","output-format",-1826382676),self__.output_format],null))], null),self__.__extmap));
}));

(instaparse.core.Parser.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__25099){
var self__ = this;
var G__25099__$1 = this;
return (new cljs.core.RecordIter((0),G__25099__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"grammar","grammar",1881328267),new cljs.core.Keyword(null,"start-production","start-production",687546537),new cljs.core.Keyword(null,"output-format","output-format",-1826382676)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(instaparse.core.Parser.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(instaparse.core.Parser.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new instaparse.core.Parser(self__.grammar,self__.start_production,self__.output_format,self__.__meta,self__.__extmap,self__.__hash));
}));

(instaparse.core.Parser.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
}));

(instaparse.core.Parser.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (-360509877 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(instaparse.core.Parser.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this25101,other25102){
var self__ = this;
var this25101__$1 = this;
return (((!((other25102 == null)))) && ((((this25101__$1.constructor === other25102.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25101__$1.grammar,other25102.grammar)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25101__$1.start_production,other25102.start_production)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25101__$1.output_format,other25102.output_format)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25101__$1.__extmap,other25102.__extmap)))))))))));
}));

(instaparse.core.Parser.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"start-production","start-production",687546537),null,new cljs.core.Keyword(null,"grammar","grammar",1881328267),null,new cljs.core.Keyword(null,"output-format","output-format",-1826382676),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new instaparse.core.Parser(self__.grammar,self__.start_production,self__.output_format,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(instaparse.core.Parser.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k25100){
var self__ = this;
var this__5350__auto____$1 = this;
var G__25110 = k25100;
var G__25110__$1 = (((G__25110 instanceof cljs.core.Keyword))?G__25110.fqn:null);
switch (G__25110__$1) {
case "grammar":
case "start-production":
case "output-format":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k25100);

}
}));

(instaparse.core.Parser.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__25099){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__25111 = cljs.core.keyword_identical_QMARK_;
var expr__25112 = k__5352__auto__;
if(cljs.core.truth_((pred__25111.cljs$core$IFn$_invoke$arity$2 ? pred__25111.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"grammar","grammar",1881328267),expr__25112) : pred__25111.call(null,new cljs.core.Keyword(null,"grammar","grammar",1881328267),expr__25112)))){
return (new instaparse.core.Parser(G__25099,self__.start_production,self__.output_format,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__25111.cljs$core$IFn$_invoke$arity$2 ? pred__25111.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"start-production","start-production",687546537),expr__25112) : pred__25111.call(null,new cljs.core.Keyword(null,"start-production","start-production",687546537),expr__25112)))){
return (new instaparse.core.Parser(self__.grammar,G__25099,self__.output_format,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__25111.cljs$core$IFn$_invoke$arity$2 ? pred__25111.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"output-format","output-format",-1826382676),expr__25112) : pred__25111.call(null,new cljs.core.Keyword(null,"output-format","output-format",-1826382676),expr__25112)))){
return (new instaparse.core.Parser(self__.grammar,self__.start_production,G__25099,self__.__meta,self__.__extmap,null));
} else {
return (new instaparse.core.Parser(self__.grammar,self__.start_production,self__.output_format,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__25099),null));
}
}
}
}));

(instaparse.core.Parser.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"grammar","grammar",1881328267),self__.grammar,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"start-production","start-production",687546537),self__.start_production,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"output-format","output-format",-1826382676),self__.output_format,null))], null),self__.__extmap));
}));

(instaparse.core.Parser.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__25099){
var self__ = this;
var this__5342__auto____$1 = this;
return (new instaparse.core.Parser(self__.grammar,self__.start_production,self__.output_format,G__25099,self__.__extmap,self__.__hash));
}));

(instaparse.core.Parser.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(instaparse.core.Parser.prototype.call = (function (unused__10298__auto__){
var self__ = this;
var self__ = this;
var G__25114 = (arguments.length - (1));
switch (G__25114) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
case (3):
return self__.cljs$core$IFn$_invoke$arity$3((arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case (5):
return self__.cljs$core$IFn$_invoke$arity$5((arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
case (7):
return self__.cljs$core$IFn$_invoke$arity$7((arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]));

break;
case (9):
return self__.cljs$core$IFn$_invoke$arity$9((arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]));

break;
case (11):
return self__.cljs$core$IFn$_invoke$arity$11((arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]),(arguments[(11)]));

break;
case (13):
return self__.cljs$core$IFn$_invoke$arity$13((arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]),(arguments[(11)]),(arguments[(12)]),(arguments[(13)]));

break;
case (15):
return self__.cljs$core$IFn$_invoke$arity$15((arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]),(arguments[(11)]),(arguments[(12)]),(arguments[(13)]),(arguments[(14)]),(arguments[(15)]));

break;
case (17):
return self__.cljs$core$IFn$_invoke$arity$17((arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]),(arguments[(11)]),(arguments[(12)]),(arguments[(13)]),(arguments[(14)]),(arguments[(15)]),(arguments[(16)]),(arguments[(17)]));

break;
case (19):
return self__.cljs$core$IFn$_invoke$arity$19((arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]),(arguments[(11)]),(arguments[(12)]),(arguments[(13)]),(arguments[(14)]),(arguments[(15)]),(arguments[(16)]),(arguments[(17)]),(arguments[(18)]),(arguments[(19)]));

break;
case (21):
return self__.cljs$core$IFn$_invoke$arity$21((arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]),(arguments[(11)]),(arguments[(12)]),(arguments[(13)]),(arguments[(14)]),(arguments[(15)]),(arguments[(16)]),(arguments[(17)]),(arguments[(18)]),(arguments[(19)]),(arguments[(20)]),(arguments[(21)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(instaparse.core.Parser.prototype.apply = (function (self__,args25104){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args25104)));
}));

(instaparse.core.Parser.prototype.cljs$core$IFn$_invoke$arity$1 = (function (text){
var self__ = this;
var parser = this;
return instaparse.core.parse(parser,text);
}));

(instaparse.core.Parser.prototype.cljs$core$IFn$_invoke$arity$3 = (function (text,key1,val1){
var self__ = this;
var parser = this;
return instaparse.core.parse.cljs$core$IFn$_invoke$arity$variadic(parser,text,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([key1,val1], 0));
}));

(instaparse.core.Parser.prototype.cljs$core$IFn$_invoke$arity$5 = (function (text,key1,val1,key2,val2){
var self__ = this;
var parser = this;
return instaparse.core.parse.cljs$core$IFn$_invoke$arity$variadic(parser,text,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([key1,val1,key2,val2], 0));
}));

(instaparse.core.Parser.prototype.cljs$core$IFn$_invoke$arity$7 = (function (text,key1,val1,key2,val2,key3,val3){
var self__ = this;
var parser = this;
return instaparse.core.parse.cljs$core$IFn$_invoke$arity$variadic(parser,text,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([key1,val1,key2,val2,key3,val3], 0));
}));

(instaparse.core.Parser.prototype.cljs$core$IFn$_invoke$arity$9 = (function (text,a,b,c,d,e,f,g,h){
var self__ = this;
var parser = this;
return instaparse.core.parse.cljs$core$IFn$_invoke$arity$variadic(parser,text,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h], 0));
}));

(instaparse.core.Parser.prototype.cljs$core$IFn$_invoke$arity$11 = (function (text,a,b,c,d,e,f,g,h,i,j){
var self__ = this;
var parser = this;
return instaparse.core.parse.cljs$core$IFn$_invoke$arity$variadic(parser,text,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j], 0));
}));

(instaparse.core.Parser.prototype.cljs$core$IFn$_invoke$arity$13 = (function (text,a,b,c,d,e,f,g,h,i,j,k,l){
var self__ = this;
var parser = this;
return instaparse.core.parse.cljs$core$IFn$_invoke$arity$variadic(parser,text,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l], 0));
}));

(instaparse.core.Parser.prototype.cljs$core$IFn$_invoke$arity$15 = (function (text,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
var self__ = this;
var parser = this;
return instaparse.core.parse.cljs$core$IFn$_invoke$arity$variadic(parser,text,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n], 0));
}));

(instaparse.core.Parser.prototype.cljs$core$IFn$_invoke$arity$17 = (function (text,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
var self__ = this;
var parser = this;
return instaparse.core.parse.cljs$core$IFn$_invoke$arity$variadic(parser,text,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p], 0));
}));

(instaparse.core.Parser.prototype.cljs$core$IFn$_invoke$arity$19 = (function (text,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){
var self__ = this;
var parser = this;
return instaparse.core.parse.cljs$core$IFn$_invoke$arity$variadic(parser,text,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p], 0));
}));

(instaparse.core.Parser.prototype.cljs$core$IFn$_invoke$arity$21 = (function (text,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,more){
var self__ = this;
var parser = this;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(instaparse.core.parse,parser,text,a,b,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,more], 0));
}));

(instaparse.core.Parser.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"grammar","grammar",-773107502,null),new cljs.core.Symbol(null,"start-production","start-production",-1966889232,null),new cljs.core.Symbol(null,"output-format","output-format",-185851149,null)], null);
}));

(instaparse.core.Parser.cljs$lang$type = true);

(instaparse.core.Parser.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"instaparse.core/Parser",null,(1),null));
}));

(instaparse.core.Parser.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"instaparse.core/Parser");
}));

/**
 * Positional factory function for instaparse.core/Parser.
 */
instaparse.core.__GT_Parser = (function instaparse$core$__GT_Parser(grammar,start_production,output_format){
return (new instaparse.core.Parser(grammar,start_production,output_format,null,null,null));
});

/**
 * Factory function for instaparse.core/Parser, taking a map of keywords to field values.
 */
instaparse.core.map__GT_Parser = (function instaparse$core$map__GT_Parser(G__25103){
var extmap__5385__auto__ = (function (){var G__25115 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__25103,new cljs.core.Keyword(null,"grammar","grammar",1881328267),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"start-production","start-production",687546537),new cljs.core.Keyword(null,"output-format","output-format",-1826382676)], 0));
if(cljs.core.record_QMARK_(G__25103)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__25115);
} else {
return G__25115;
}
})();
return (new instaparse.core.Parser(new cljs.core.Keyword(null,"grammar","grammar",1881328267).cljs$core$IFn$_invoke$arity$1(G__25103),new cljs.core.Keyword(null,"start-production","start-production",687546537).cljs$core$IFn$_invoke$arity$1(G__25103),new cljs.core.Keyword(null,"output-format","output-format",-1826382676).cljs$core$IFn$_invoke$arity$1(G__25103),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

(instaparse.core.Parser.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL);

(instaparse.core.Parser.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (parser,writer,_){
var parser__$1 = this;
return cljs.core._write(writer,instaparse.print.Parser__GT_str(parser__$1));
}));
/**
 * Takes a string specification of a context-free grammar,
 *   or a URI for a text file containing such a specification (Clj only),
 *   or a map of parser combinators and returns a parser for that grammar.
 * 
 *   Optional keyword arguments:
 *   :input-format :ebnf
 *   or
 *   :input-format :abnf
 * 
 *   :output-format :enlive
 *   or
 *   :output-format :hiccup
 * 
 *   :start :keyword (where :keyword is name of starting production rule)
 * 
 *   :string-ci true (treat all string literals as case insensitive)
 * 
 *   :auto-whitespace (:standard or :comma)
 *   or
 *   :auto-whitespace custom-whitespace-parser
 * 
 *   Clj only:
 *   :no-slurp true (disables use of slurp to auto-detect whether
 *                input is a URI.  When using this option, input
 *                must be a grammar string or grammar map.  Useful
 *                for platforms where slurp is slow or not available.)
 */
instaparse.core.parser = (function instaparse$core$parser(var_args){
var args__5775__auto__ = [];
var len__5769__auto___25145 = arguments.length;
var i__5770__auto___25146 = (0);
while(true){
if((i__5770__auto___25146 < len__5769__auto___25145)){
args__5775__auto__.push((arguments[i__5770__auto___25146]));

var G__25147 = (i__5770__auto___25146 + (1));
i__5770__auto___25146 = G__25147;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return instaparse.core.parser.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(instaparse.core.parser.cljs$core$IFn$_invoke$arity$variadic = (function (grammar_specification,p__25118){
var map__25119 = p__25118;
var map__25119__$1 = cljs.core.__destructure_map(map__25119);
var options = map__25119__$1;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [null,null,new cljs.core.Keyword(null,"ebnf","ebnf",31967825),null,new cljs.core.Keyword(null,"abnf","abnf",-152462052),null], null), null),cljs.core.get.cljs$core$IFn$_invoke$arity$2(options,new cljs.core.Keyword(null,"input-format","input-format",-422703481)))){
} else {
throw (new Error("Assert failed: (contains? #{nil :ebnf :abnf} (get options :input-format))"));
}

if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [null,null,new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),null,new cljs.core.Keyword(null,"enlive","enlive",1679023921),null], null), null),cljs.core.get.cljs$core$IFn$_invoke$arity$2(options,new cljs.core.Keyword(null,"output-format","output-format",-1826382676)))){
} else {
throw (new Error("Assert failed: (contains? #{nil :hiccup :enlive} (get options :output-format))"));
}

if((function (){var ws_parser = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options,new cljs.core.Keyword(null,"auto-whitespace","auto-whitespace",741152317));
return (((ws_parser == null)) || (((cljs.core.contains_QMARK_(instaparse.core.standard_whitespace_parsers,ws_parser)) || (((cljs.core.map_QMARK_(ws_parser)) && (((cljs.core.contains_QMARK_(ws_parser,new cljs.core.Keyword(null,"grammar","grammar",1881328267))) && (cljs.core.contains_QMARK_(ws_parser,new cljs.core.Keyword(null,"start-production","start-production",687546537))))))))));
})()){
} else {
throw (new Error("Assert failed: (let [ws-parser (get options :auto-whitespace)] (or (nil? ws-parser) (contains? standard-whitespace-parsers ws-parser) (and (map? ws-parser) (contains? ws-parser :grammar) (contains? ws-parser :start-production))))"));
}

var input_format = cljs.core.get.cljs$core$IFn$_invoke$arity$3(options,new cljs.core.Keyword(null,"input-format","input-format",-422703481),instaparse.core._STAR_default_input_format_STAR_);
var build_parser = (function (spec,output_format){
var _STAR_case_insensitive_literals_STAR__orig_val__25120 = instaparse.cfg._STAR_case_insensitive_literals_STAR_;
var _STAR_case_insensitive_literals_STAR__temp_val__25121 = new cljs.core.Keyword(null,"string-ci","string-ci",374631805).cljs$core$IFn$_invoke$arity$2(options,new cljs.core.Keyword(null,"default","default",-1987822328));
(instaparse.cfg._STAR_case_insensitive_literals_STAR_ = _STAR_case_insensitive_literals_STAR__temp_val__25121);

try{var G__25122 = input_format;
var G__25122__$1 = (((G__25122 instanceof cljs.core.Keyword))?G__25122.fqn:null);
switch (G__25122__$1) {
case "abnf":
return instaparse.abnf.build_parser(spec,output_format);

break;
case "ebnf":
return instaparse.cfg.build_parser(spec,output_format);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25122__$1)].join('')));

}
}finally {(instaparse.cfg._STAR_case_insensitive_literals_STAR_ = _STAR_case_insensitive_literals_STAR__orig_val__25120);
}});
var output_format = cljs.core.get.cljs$core$IFn$_invoke$arity$3(options,new cljs.core.Keyword(null,"output-format","output-format",-1826382676),instaparse.core._STAR_default_output_format_STAR_);
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$3(options,new cljs.core.Keyword(null,"start","start",-355208981),null);
var built_parser = ((typeof grammar_specification === 'string')?(function (){var parser = build_parser(grammar_specification,output_format);
if(cljs.core.truth_(start)){
return instaparse.core.map__GT_Parser(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(parser,new cljs.core.Keyword(null,"start-production","start-production",687546537),start));
} else {
return instaparse.core.map__GT_Parser(parser);
}
})():((cljs.core.map_QMARK_(grammar_specification))?(function (){var parser = instaparse.cfg.build_parser_from_combinators(grammar_specification,output_format,start);
return instaparse.core.map__GT_Parser(parser);
})():((cljs.core.vector_QMARK_(grammar_specification))?(function (){var start__$1 = (cljs.core.truth_(start)?start:(grammar_specification.cljs$core$IFn$_invoke$arity$1 ? grammar_specification.cljs$core$IFn$_invoke$arity$1((0)) : grammar_specification.call(null,(0))));
var parser = instaparse.cfg.build_parser_from_combinators(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,grammar_specification),output_format,start__$1);
return instaparse.core.map__GT_Parser(parser);
})():instaparse.util.throw_illegal_argument_exception.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Expected string, map, or vector as grammar specification, got ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([grammar_specification], 0))], 0))
)));
var auto_whitespace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options,new cljs.core.Keyword(null,"auto-whitespace","auto-whitespace",741152317));
var whitespace_parser = (((auto_whitespace instanceof cljs.core.Keyword))?cljs.core.get.cljs$core$IFn$_invoke$arity$2(instaparse.core.standard_whitespace_parsers,auto_whitespace):auto_whitespace);
var temp__5802__auto__ = whitespace_parser;
if(cljs.core.truth_(temp__5802__auto__)){
var map__25123 = temp__5802__auto__;
var map__25123__$1 = cljs.core.__destructure_map(map__25123);
var ws_grammar = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25123__$1,new cljs.core.Keyword(null,"grammar","grammar",1881328267));
var ws_start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25123__$1,new cljs.core.Keyword(null,"start-production","start-production",687546537));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(built_parser,new cljs.core.Keyword(null,"grammar","grammar",1881328267),instaparse.combinators_source.auto_whitespace(built_parser.grammar,built_parser.start_production,ws_grammar,ws_start));
} else {
return built_parser;
}
}));

(instaparse.core.parser.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(instaparse.core.parser.cljs$lang$applyTo = (function (seq25116){
var G__25117 = cljs.core.first(seq25116);
var seq25116__$1 = cljs.core.next(seq25116);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25117,seq25116__$1);
}));

/**
 * Tests whether a parse result is a failure.
 */
instaparse.core.failure_QMARK_ = (function instaparse$core$failure_QMARK_(result){
return (((result instanceof instaparse.gll.failure_type)) || ((cljs.core.meta(result) instanceof instaparse.gll.failure_type)));
});
/**
 * Extracts failure object from failed parse result.
 */
instaparse.core.get_failure = (function instaparse$core$get_failure(result){
if((result instanceof instaparse.gll.failure_type)){
return result;
} else {
if((cljs.core.meta(result) instanceof instaparse.gll.failure_type)){
return cljs.core.meta(result);
} else {
return null;

}
}
});
instaparse.core.standard_whitespace_parsers = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"standard","standard",-1769206695),instaparse.core.parser("whitespace = #'\\s+'"),new cljs.core.Keyword(null,"comma","comma",1699024745),instaparse.core.parser("whitespace = #'[,\\s]+'")], null);
instaparse.core.transform = instaparse.transform.transform;
instaparse.core.add_line_and_column_info_to_metadata = instaparse.line_col.add_line_col_spans;
instaparse.core.span = instaparse.viz.span;

//# sourceMappingURL=instaparse.core.js.map
