goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__14765 = arguments.length;
switch (G__14765) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async14775 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14775 = (function (f,blockable,meta14776){
this.f = f;
this.blockable = blockable;
this.meta14776 = meta14776;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14775.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14777,meta14776__$1){
var self__ = this;
var _14777__$1 = this;
return (new cljs.core.async.t_cljs$core$async14775(self__.f,self__.blockable,meta14776__$1));
}));

(cljs.core.async.t_cljs$core$async14775.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14777){
var self__ = this;
var _14777__$1 = this;
return self__.meta14776;
}));

(cljs.core.async.t_cljs$core$async14775.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14775.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async14775.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async14775.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async14775.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta14776","meta14776",272854090,null)], null);
}));

(cljs.core.async.t_cljs$core$async14775.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14775.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14775");

(cljs.core.async.t_cljs$core$async14775.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async14775");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14775.
 */
cljs.core.async.__GT_t_cljs$core$async14775 = (function cljs$core$async$__GT_t_cljs$core$async14775(f__$1,blockable__$1,meta14776){
return (new cljs.core.async.t_cljs$core$async14775(f__$1,blockable__$1,meta14776));
});

}

return (new cljs.core.async.t_cljs$core$async14775(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__14823 = arguments.length;
switch (G__14823) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__14842 = arguments.length;
switch (G__14842) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__14857 = arguments.length;
switch (G__14857) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_17600 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_17600) : fn1.call(null,val_17600));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_17600) : fn1.call(null,val_17600));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__14880 = arguments.length;
switch (G__14880) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5636__auto___17606 = n;
var x_17607 = (0);
while(true){
if((x_17607 < n__5636__auto___17606)){
(a[x_17607] = x_17607);

var G__17611 = (x_17607 + (1));
x_17607 = G__17611;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async14901 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14901 = (function (flag,meta14902){
this.flag = flag;
this.meta14902 = meta14902;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14901.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14903,meta14902__$1){
var self__ = this;
var _14903__$1 = this;
return (new cljs.core.async.t_cljs$core$async14901(self__.flag,meta14902__$1));
}));

(cljs.core.async.t_cljs$core$async14901.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14903){
var self__ = this;
var _14903__$1 = this;
return self__.meta14902;
}));

(cljs.core.async.t_cljs$core$async14901.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14901.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async14901.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async14901.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async14901.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta14902","meta14902",76926785,null)], null);
}));

(cljs.core.async.t_cljs$core$async14901.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14901.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14901");

(cljs.core.async.t_cljs$core$async14901.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async14901");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14901.
 */
cljs.core.async.__GT_t_cljs$core$async14901 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async14901(flag__$1,meta14902){
return (new cljs.core.async.t_cljs$core$async14901(flag__$1,meta14902));
});

}

return (new cljs.core.async.t_cljs$core$async14901(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async14918 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14918 = (function (flag,cb,meta14919){
this.flag = flag;
this.cb = cb;
this.meta14919 = meta14919;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14918.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14920,meta14919__$1){
var self__ = this;
var _14920__$1 = this;
return (new cljs.core.async.t_cljs$core$async14918(self__.flag,self__.cb,meta14919__$1));
}));

(cljs.core.async.t_cljs$core$async14918.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14920){
var self__ = this;
var _14920__$1 = this;
return self__.meta14919;
}));

(cljs.core.async.t_cljs$core$async14918.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14918.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async14918.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async14918.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async14918.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta14919","meta14919",415627942,null)], null);
}));

(cljs.core.async.t_cljs$core$async14918.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14918.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14918");

(cljs.core.async.t_cljs$core$async14918.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async14918");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14918.
 */
cljs.core.async.__GT_t_cljs$core$async14918 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async14918(flag__$1,cb__$1,meta14919){
return (new cljs.core.async.t_cljs$core$async14918(flag__$1,cb__$1,meta14919));
});

}

return (new cljs.core.async.t_cljs$core$async14918(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__14927_SHARP_){
var G__14935 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14927_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__14935) : fret.call(null,G__14935));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__14928_SHARP_){
var G__14939 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14928_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__14939) : fret.call(null,G__14939));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5045__auto__ = wport;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return port;
}
})()], null));
} else {
var G__17623 = (i + (1));
i = G__17623;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5045__auto__ = ret;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__5043__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5043__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___17626 = arguments.length;
var i__5770__auto___17627 = (0);
while(true){
if((i__5770__auto___17627 < len__5769__auto___17626)){
args__5775__auto__.push((arguments[i__5770__auto___17627]));

var G__17628 = (i__5770__auto___17627 + (1));
i__5770__auto___17627 = G__17628;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__14947){
var map__14949 = p__14947;
var map__14949__$1 = cljs.core.__destructure_map(map__14949);
var opts = map__14949__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq14945){
var G__14946 = cljs.core.first(seq14945);
var seq14945__$1 = cljs.core.next(seq14945);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14946,seq14945__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__14964 = arguments.length;
switch (G__14964) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__14648__auto___17636 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14649__auto__ = (function (){var switch__14468__auto__ = (function (state_15047){
var state_val_15048 = (state_15047[(1)]);
if((state_val_15048 === (7))){
var inst_15043 = (state_15047[(2)]);
var state_15047__$1 = state_15047;
var statearr_15054_17638 = state_15047__$1;
(statearr_15054_17638[(2)] = inst_15043);

(statearr_15054_17638[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15048 === (1))){
var state_15047__$1 = state_15047;
var statearr_15055_17639 = state_15047__$1;
(statearr_15055_17639[(2)] = null);

(statearr_15055_17639[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15048 === (4))){
var inst_15017 = (state_15047[(7)]);
var inst_15017__$1 = (state_15047[(2)]);
var inst_15018 = (inst_15017__$1 == null);
var state_15047__$1 = (function (){var statearr_15057 = state_15047;
(statearr_15057[(7)] = inst_15017__$1);

return statearr_15057;
})();
if(cljs.core.truth_(inst_15018)){
var statearr_15060_17640 = state_15047__$1;
(statearr_15060_17640[(1)] = (5));

} else {
var statearr_15061_17641 = state_15047__$1;
(statearr_15061_17641[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15048 === (13))){
var state_15047__$1 = state_15047;
var statearr_15064_17642 = state_15047__$1;
(statearr_15064_17642[(2)] = null);

(statearr_15064_17642[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15048 === (6))){
var inst_15017 = (state_15047[(7)]);
var state_15047__$1 = state_15047;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15047__$1,(11),to,inst_15017);
} else {
if((state_val_15048 === (3))){
var inst_15045 = (state_15047[(2)]);
var state_15047__$1 = state_15047;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15047__$1,inst_15045);
} else {
if((state_val_15048 === (12))){
var state_15047__$1 = state_15047;
var statearr_15068_17644 = state_15047__$1;
(statearr_15068_17644[(2)] = null);

(statearr_15068_17644[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15048 === (2))){
var state_15047__$1 = state_15047;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15047__$1,(4),from);
} else {
if((state_val_15048 === (11))){
var inst_15035 = (state_15047[(2)]);
var state_15047__$1 = state_15047;
if(cljs.core.truth_(inst_15035)){
var statearr_15069_17647 = state_15047__$1;
(statearr_15069_17647[(1)] = (12));

} else {
var statearr_15070_17648 = state_15047__$1;
(statearr_15070_17648[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15048 === (9))){
var state_15047__$1 = state_15047;
var statearr_15071_17649 = state_15047__$1;
(statearr_15071_17649[(2)] = null);

(statearr_15071_17649[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15048 === (5))){
var state_15047__$1 = state_15047;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15072_17654 = state_15047__$1;
(statearr_15072_17654[(1)] = (8));

} else {
var statearr_15074_17655 = state_15047__$1;
(statearr_15074_17655[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15048 === (14))){
var inst_15041 = (state_15047[(2)]);
var state_15047__$1 = state_15047;
var statearr_15075_17660 = state_15047__$1;
(statearr_15075_17660[(2)] = inst_15041);

(statearr_15075_17660[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15048 === (10))){
var inst_15030 = (state_15047[(2)]);
var state_15047__$1 = state_15047;
var statearr_15076_17665 = state_15047__$1;
(statearr_15076_17665[(2)] = inst_15030);

(statearr_15076_17665[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15048 === (8))){
var inst_15022 = cljs.core.async.close_BANG_(to);
var state_15047__$1 = state_15047;
var statearr_15079_17670 = state_15047__$1;
(statearr_15079_17670[(2)] = inst_15022);

(statearr_15079_17670[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14469__auto__ = null;
var cljs$core$async$state_machine__14469__auto____0 = (function (){
var statearr_15082 = [null,null,null,null,null,null,null,null];
(statearr_15082[(0)] = cljs$core$async$state_machine__14469__auto__);

(statearr_15082[(1)] = (1));

return statearr_15082;
});
var cljs$core$async$state_machine__14469__auto____1 = (function (state_15047){
while(true){
var ret_value__14470__auto__ = (function (){try{while(true){
var result__14471__auto__ = switch__14468__auto__(state_15047);
if(cljs.core.keyword_identical_QMARK_(result__14471__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14471__auto__;
}
break;
}
}catch (e15083){var ex__14472__auto__ = e15083;
var statearr_15084_17677 = state_15047;
(statearr_15084_17677[(2)] = ex__14472__auto__);


if(cljs.core.seq((state_15047[(4)]))){
var statearr_15085_17678 = state_15047;
(statearr_15085_17678[(1)] = cljs.core.first((state_15047[(4)])));

} else {
throw ex__14472__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14470__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17682 = state_15047;
state_15047 = G__17682;
continue;
} else {
return ret_value__14470__auto__;
}
break;
}
});
cljs$core$async$state_machine__14469__auto__ = function(state_15047){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14469__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14469__auto____1.call(this,state_15047);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14469__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14469__auto____0;
cljs$core$async$state_machine__14469__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14469__auto____1;
return cljs$core$async$state_machine__14469__auto__;
})()
})();
var state__14650__auto__ = (function (){var statearr_15087 = f__14649__auto__();
(statearr_15087[(6)] = c__14648__auto___17636);

return statearr_15087;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14650__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__15096){
var vec__15097 = p__15096;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15097,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15097,(1),null);
var job = vec__15097;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__14648__auto___17686 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14649__auto__ = (function (){var switch__14468__auto__ = (function (state_15106){
var state_val_15107 = (state_15106[(1)]);
if((state_val_15107 === (1))){
var state_15106__$1 = state_15106;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15106__$1,(2),res,v);
} else {
if((state_val_15107 === (2))){
var inst_15103 = (state_15106[(2)]);
var inst_15104 = cljs.core.async.close_BANG_(res);
var state_15106__$1 = (function (){var statearr_15115 = state_15106;
(statearr_15115[(7)] = inst_15103);

return statearr_15115;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_15106__$1,inst_15104);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14469__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14469__auto____0 = (function (){
var statearr_15116 = [null,null,null,null,null,null,null,null];
(statearr_15116[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14469__auto__);

(statearr_15116[(1)] = (1));

return statearr_15116;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14469__auto____1 = (function (state_15106){
while(true){
var ret_value__14470__auto__ = (function (){try{while(true){
var result__14471__auto__ = switch__14468__auto__(state_15106);
if(cljs.core.keyword_identical_QMARK_(result__14471__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14471__auto__;
}
break;
}
}catch (e15117){var ex__14472__auto__ = e15117;
var statearr_15121_17692 = state_15106;
(statearr_15121_17692[(2)] = ex__14472__auto__);


if(cljs.core.seq((state_15106[(4)]))){
var statearr_15122_17693 = state_15106;
(statearr_15122_17693[(1)] = cljs.core.first((state_15106[(4)])));

} else {
throw ex__14472__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14470__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17696 = state_15106;
state_15106 = G__17696;
continue;
} else {
return ret_value__14470__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14469__auto__ = function(state_15106){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14469__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14469__auto____1.call(this,state_15106);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14469__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14469__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14469__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14469__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14469__auto__;
})()
})();
var state__14650__auto__ = (function (){var statearr_15129 = f__14649__auto__();
(statearr_15129[(6)] = c__14648__auto___17686);

return statearr_15129;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14650__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__15130){
var vec__15131 = p__15130;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15131,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15131,(1),null);
var job = vec__15131;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5636__auto___17701 = n;
var __17702 = (0);
while(true){
if((__17702 < n__5636__auto___17701)){
var G__15134_17703 = type;
var G__15134_17704__$1 = (((G__15134_17703 instanceof cljs.core.Keyword))?G__15134_17703.fqn:null);
switch (G__15134_17704__$1) {
case "compute":
var c__14648__auto___17706 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__17702,c__14648__auto___17706,G__15134_17703,G__15134_17704__$1,n__5636__auto___17701,jobs,results,process__$1,async){
return (function (){
var f__14649__auto__ = (function (){var switch__14468__auto__ = ((function (__17702,c__14648__auto___17706,G__15134_17703,G__15134_17704__$1,n__5636__auto___17701,jobs,results,process__$1,async){
return (function (state_15148){
var state_val_15149 = (state_15148[(1)]);
if((state_val_15149 === (1))){
var state_15148__$1 = state_15148;
var statearr_15151_17709 = state_15148__$1;
(statearr_15151_17709[(2)] = null);

(statearr_15151_17709[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15149 === (2))){
var state_15148__$1 = state_15148;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15148__$1,(4),jobs);
} else {
if((state_val_15149 === (3))){
var inst_15146 = (state_15148[(2)]);
var state_15148__$1 = state_15148;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15148__$1,inst_15146);
} else {
if((state_val_15149 === (4))){
var inst_15138 = (state_15148[(2)]);
var inst_15139 = process__$1(inst_15138);
var state_15148__$1 = state_15148;
if(cljs.core.truth_(inst_15139)){
var statearr_15157_17711 = state_15148__$1;
(statearr_15157_17711[(1)] = (5));

} else {
var statearr_15158_17712 = state_15148__$1;
(statearr_15158_17712[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15149 === (5))){
var state_15148__$1 = state_15148;
var statearr_15159_17714 = state_15148__$1;
(statearr_15159_17714[(2)] = null);

(statearr_15159_17714[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15149 === (6))){
var state_15148__$1 = state_15148;
var statearr_15161_17715 = state_15148__$1;
(statearr_15161_17715[(2)] = null);

(statearr_15161_17715[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15149 === (7))){
var inst_15144 = (state_15148[(2)]);
var state_15148__$1 = state_15148;
var statearr_15162_17716 = state_15148__$1;
(statearr_15162_17716[(2)] = inst_15144);

(statearr_15162_17716[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__17702,c__14648__auto___17706,G__15134_17703,G__15134_17704__$1,n__5636__auto___17701,jobs,results,process__$1,async))
;
return ((function (__17702,switch__14468__auto__,c__14648__auto___17706,G__15134_17703,G__15134_17704__$1,n__5636__auto___17701,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14469__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14469__auto____0 = (function (){
var statearr_15165 = [null,null,null,null,null,null,null];
(statearr_15165[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14469__auto__);

(statearr_15165[(1)] = (1));

return statearr_15165;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14469__auto____1 = (function (state_15148){
while(true){
var ret_value__14470__auto__ = (function (){try{while(true){
var result__14471__auto__ = switch__14468__auto__(state_15148);
if(cljs.core.keyword_identical_QMARK_(result__14471__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14471__auto__;
}
break;
}
}catch (e15167){var ex__14472__auto__ = e15167;
var statearr_15168_17717 = state_15148;
(statearr_15168_17717[(2)] = ex__14472__auto__);


if(cljs.core.seq((state_15148[(4)]))){
var statearr_15169_17718 = state_15148;
(statearr_15169_17718[(1)] = cljs.core.first((state_15148[(4)])));

} else {
throw ex__14472__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14470__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17719 = state_15148;
state_15148 = G__17719;
continue;
} else {
return ret_value__14470__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14469__auto__ = function(state_15148){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14469__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14469__auto____1.call(this,state_15148);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14469__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14469__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14469__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14469__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14469__auto__;
})()
;})(__17702,switch__14468__auto__,c__14648__auto___17706,G__15134_17703,G__15134_17704__$1,n__5636__auto___17701,jobs,results,process__$1,async))
})();
var state__14650__auto__ = (function (){var statearr_15173 = f__14649__auto__();
(statearr_15173[(6)] = c__14648__auto___17706);

return statearr_15173;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14650__auto__);
});})(__17702,c__14648__auto___17706,G__15134_17703,G__15134_17704__$1,n__5636__auto___17701,jobs,results,process__$1,async))
);


break;
case "async":
var c__14648__auto___17721 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__17702,c__14648__auto___17721,G__15134_17703,G__15134_17704__$1,n__5636__auto___17701,jobs,results,process__$1,async){
return (function (){
var f__14649__auto__ = (function (){var switch__14468__auto__ = ((function (__17702,c__14648__auto___17721,G__15134_17703,G__15134_17704__$1,n__5636__auto___17701,jobs,results,process__$1,async){
return (function (state_15187){
var state_val_15188 = (state_15187[(1)]);
if((state_val_15188 === (1))){
var state_15187__$1 = state_15187;
var statearr_15192_17723 = state_15187__$1;
(statearr_15192_17723[(2)] = null);

(statearr_15192_17723[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15188 === (2))){
var state_15187__$1 = state_15187;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15187__$1,(4),jobs);
} else {
if((state_val_15188 === (3))){
var inst_15185 = (state_15187[(2)]);
var state_15187__$1 = state_15187;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15187__$1,inst_15185);
} else {
if((state_val_15188 === (4))){
var inst_15177 = (state_15187[(2)]);
var inst_15178 = async(inst_15177);
var state_15187__$1 = state_15187;
if(cljs.core.truth_(inst_15178)){
var statearr_15198_17729 = state_15187__$1;
(statearr_15198_17729[(1)] = (5));

} else {
var statearr_15199_17730 = state_15187__$1;
(statearr_15199_17730[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15188 === (5))){
var state_15187__$1 = state_15187;
var statearr_15201_17731 = state_15187__$1;
(statearr_15201_17731[(2)] = null);

(statearr_15201_17731[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15188 === (6))){
var state_15187__$1 = state_15187;
var statearr_15203_17737 = state_15187__$1;
(statearr_15203_17737[(2)] = null);

(statearr_15203_17737[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15188 === (7))){
var inst_15183 = (state_15187[(2)]);
var state_15187__$1 = state_15187;
var statearr_15204_17742 = state_15187__$1;
(statearr_15204_17742[(2)] = inst_15183);

(statearr_15204_17742[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__17702,c__14648__auto___17721,G__15134_17703,G__15134_17704__$1,n__5636__auto___17701,jobs,results,process__$1,async))
;
return ((function (__17702,switch__14468__auto__,c__14648__auto___17721,G__15134_17703,G__15134_17704__$1,n__5636__auto___17701,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14469__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14469__auto____0 = (function (){
var statearr_15205 = [null,null,null,null,null,null,null];
(statearr_15205[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14469__auto__);

(statearr_15205[(1)] = (1));

return statearr_15205;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14469__auto____1 = (function (state_15187){
while(true){
var ret_value__14470__auto__ = (function (){try{while(true){
var result__14471__auto__ = switch__14468__auto__(state_15187);
if(cljs.core.keyword_identical_QMARK_(result__14471__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14471__auto__;
}
break;
}
}catch (e15206){var ex__14472__auto__ = e15206;
var statearr_15207_17743 = state_15187;
(statearr_15207_17743[(2)] = ex__14472__auto__);


if(cljs.core.seq((state_15187[(4)]))){
var statearr_15210_17744 = state_15187;
(statearr_15210_17744[(1)] = cljs.core.first((state_15187[(4)])));

} else {
throw ex__14472__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14470__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17745 = state_15187;
state_15187 = G__17745;
continue;
} else {
return ret_value__14470__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14469__auto__ = function(state_15187){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14469__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14469__auto____1.call(this,state_15187);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14469__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14469__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14469__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14469__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14469__auto__;
})()
;})(__17702,switch__14468__auto__,c__14648__auto___17721,G__15134_17703,G__15134_17704__$1,n__5636__auto___17701,jobs,results,process__$1,async))
})();
var state__14650__auto__ = (function (){var statearr_15213 = f__14649__auto__();
(statearr_15213[(6)] = c__14648__auto___17721);

return statearr_15213;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14650__auto__);
});})(__17702,c__14648__auto___17721,G__15134_17703,G__15134_17704__$1,n__5636__auto___17701,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__15134_17704__$1)].join('')));

}

var G__17751 = (__17702 + (1));
__17702 = G__17751;
continue;
} else {
}
break;
}

var c__14648__auto___17752 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14649__auto__ = (function (){var switch__14468__auto__ = (function (state_15241){
var state_val_15242 = (state_15241[(1)]);
if((state_val_15242 === (7))){
var inst_15237 = (state_15241[(2)]);
var state_15241__$1 = state_15241;
var statearr_15243_17754 = state_15241__$1;
(statearr_15243_17754[(2)] = inst_15237);

(statearr_15243_17754[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15242 === (1))){
var state_15241__$1 = state_15241;
var statearr_15244_17755 = state_15241__$1;
(statearr_15244_17755[(2)] = null);

(statearr_15244_17755[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15242 === (4))){
var inst_15217 = (state_15241[(7)]);
var inst_15217__$1 = (state_15241[(2)]);
var inst_15218 = (inst_15217__$1 == null);
var state_15241__$1 = (function (){var statearr_15245 = state_15241;
(statearr_15245[(7)] = inst_15217__$1);

return statearr_15245;
})();
if(cljs.core.truth_(inst_15218)){
var statearr_15247_17756 = state_15241__$1;
(statearr_15247_17756[(1)] = (5));

} else {
var statearr_15248_17757 = state_15241__$1;
(statearr_15248_17757[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15242 === (6))){
var inst_15217 = (state_15241[(7)]);
var inst_15223 = (state_15241[(8)]);
var inst_15223__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_15225 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_15229 = [inst_15217,inst_15223__$1];
var inst_15230 = (new cljs.core.PersistentVector(null,2,(5),inst_15225,inst_15229,null));
var state_15241__$1 = (function (){var statearr_15249 = state_15241;
(statearr_15249[(8)] = inst_15223__$1);

return statearr_15249;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15241__$1,(8),jobs,inst_15230);
} else {
if((state_val_15242 === (3))){
var inst_15239 = (state_15241[(2)]);
var state_15241__$1 = state_15241;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15241__$1,inst_15239);
} else {
if((state_val_15242 === (2))){
var state_15241__$1 = state_15241;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15241__$1,(4),from);
} else {
if((state_val_15242 === (9))){
var inst_15234 = (state_15241[(2)]);
var state_15241__$1 = (function (){var statearr_15250 = state_15241;
(statearr_15250[(9)] = inst_15234);

return statearr_15250;
})();
var statearr_15251_17766 = state_15241__$1;
(statearr_15251_17766[(2)] = null);

(statearr_15251_17766[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15242 === (5))){
var inst_15220 = cljs.core.async.close_BANG_(jobs);
var state_15241__$1 = state_15241;
var statearr_15252_17767 = state_15241__$1;
(statearr_15252_17767[(2)] = inst_15220);

(statearr_15252_17767[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15242 === (8))){
var inst_15223 = (state_15241[(8)]);
var inst_15232 = (state_15241[(2)]);
var state_15241__$1 = (function (){var statearr_15253 = state_15241;
(statearr_15253[(10)] = inst_15232);

return statearr_15253;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15241__$1,(9),results,inst_15223);
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
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14469__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14469__auto____0 = (function (){
var statearr_15255 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15255[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14469__auto__);

(statearr_15255[(1)] = (1));

return statearr_15255;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14469__auto____1 = (function (state_15241){
while(true){
var ret_value__14470__auto__ = (function (){try{while(true){
var result__14471__auto__ = switch__14468__auto__(state_15241);
if(cljs.core.keyword_identical_QMARK_(result__14471__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14471__auto__;
}
break;
}
}catch (e15257){var ex__14472__auto__ = e15257;
var statearr_15258_17773 = state_15241;
(statearr_15258_17773[(2)] = ex__14472__auto__);


if(cljs.core.seq((state_15241[(4)]))){
var statearr_15259_17774 = state_15241;
(statearr_15259_17774[(1)] = cljs.core.first((state_15241[(4)])));

} else {
throw ex__14472__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14470__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17775 = state_15241;
state_15241 = G__17775;
continue;
} else {
return ret_value__14470__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14469__auto__ = function(state_15241){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14469__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14469__auto____1.call(this,state_15241);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14469__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14469__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14469__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14469__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14469__auto__;
})()
})();
var state__14650__auto__ = (function (){var statearr_15263 = f__14649__auto__();
(statearr_15263[(6)] = c__14648__auto___17752);

return statearr_15263;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14650__auto__);
}));


var c__14648__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14649__auto__ = (function (){var switch__14468__auto__ = (function (state_15304){
var state_val_15305 = (state_15304[(1)]);
if((state_val_15305 === (7))){
var inst_15298 = (state_15304[(2)]);
var state_15304__$1 = state_15304;
var statearr_15317_17776 = state_15304__$1;
(statearr_15317_17776[(2)] = inst_15298);

(statearr_15317_17776[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15305 === (20))){
var state_15304__$1 = state_15304;
var statearr_15318_17777 = state_15304__$1;
(statearr_15318_17777[(2)] = null);

(statearr_15318_17777[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15305 === (1))){
var state_15304__$1 = state_15304;
var statearr_15319_17778 = state_15304__$1;
(statearr_15319_17778[(2)] = null);

(statearr_15319_17778[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15305 === (4))){
var inst_15266 = (state_15304[(7)]);
var inst_15266__$1 = (state_15304[(2)]);
var inst_15267 = (inst_15266__$1 == null);
var state_15304__$1 = (function (){var statearr_15320 = state_15304;
(statearr_15320[(7)] = inst_15266__$1);

return statearr_15320;
})();
if(cljs.core.truth_(inst_15267)){
var statearr_15321_17781 = state_15304__$1;
(statearr_15321_17781[(1)] = (5));

} else {
var statearr_15322_17782 = state_15304__$1;
(statearr_15322_17782[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15305 === (15))){
var inst_15279 = (state_15304[(8)]);
var state_15304__$1 = state_15304;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15304__$1,(18),to,inst_15279);
} else {
if((state_val_15305 === (21))){
var inst_15293 = (state_15304[(2)]);
var state_15304__$1 = state_15304;
var statearr_15323_17783 = state_15304__$1;
(statearr_15323_17783[(2)] = inst_15293);

(statearr_15323_17783[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15305 === (13))){
var inst_15295 = (state_15304[(2)]);
var state_15304__$1 = (function (){var statearr_15324 = state_15304;
(statearr_15324[(9)] = inst_15295);

return statearr_15324;
})();
var statearr_15325_17784 = state_15304__$1;
(statearr_15325_17784[(2)] = null);

(statearr_15325_17784[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15305 === (6))){
var inst_15266 = (state_15304[(7)]);
var state_15304__$1 = state_15304;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15304__$1,(11),inst_15266);
} else {
if((state_val_15305 === (17))){
var inst_15288 = (state_15304[(2)]);
var state_15304__$1 = state_15304;
if(cljs.core.truth_(inst_15288)){
var statearr_15326_17788 = state_15304__$1;
(statearr_15326_17788[(1)] = (19));

} else {
var statearr_15327_17789 = state_15304__$1;
(statearr_15327_17789[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15305 === (3))){
var inst_15300 = (state_15304[(2)]);
var state_15304__$1 = state_15304;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15304__$1,inst_15300);
} else {
if((state_val_15305 === (12))){
var inst_15276 = (state_15304[(10)]);
var state_15304__$1 = state_15304;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15304__$1,(14),inst_15276);
} else {
if((state_val_15305 === (2))){
var state_15304__$1 = state_15304;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15304__$1,(4),results);
} else {
if((state_val_15305 === (19))){
var state_15304__$1 = state_15304;
var statearr_15329_17794 = state_15304__$1;
(statearr_15329_17794[(2)] = null);

(statearr_15329_17794[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15305 === (11))){
var inst_15276 = (state_15304[(2)]);
var state_15304__$1 = (function (){var statearr_15331 = state_15304;
(statearr_15331[(10)] = inst_15276);

return statearr_15331;
})();
var statearr_15332_17798 = state_15304__$1;
(statearr_15332_17798[(2)] = null);

(statearr_15332_17798[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15305 === (9))){
var state_15304__$1 = state_15304;
var statearr_15333_17799 = state_15304__$1;
(statearr_15333_17799[(2)] = null);

(statearr_15333_17799[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15305 === (5))){
var state_15304__$1 = state_15304;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15334_17800 = state_15304__$1;
(statearr_15334_17800[(1)] = (8));

} else {
var statearr_15335_17801 = state_15304__$1;
(statearr_15335_17801[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15305 === (14))){
var inst_15282 = (state_15304[(11)]);
var inst_15279 = (state_15304[(8)]);
var inst_15279__$1 = (state_15304[(2)]);
var inst_15281 = (inst_15279__$1 == null);
var inst_15282__$1 = cljs.core.not(inst_15281);
var state_15304__$1 = (function (){var statearr_15336 = state_15304;
(statearr_15336[(11)] = inst_15282__$1);

(statearr_15336[(8)] = inst_15279__$1);

return statearr_15336;
})();
if(inst_15282__$1){
var statearr_15337_17805 = state_15304__$1;
(statearr_15337_17805[(1)] = (15));

} else {
var statearr_15338_17806 = state_15304__$1;
(statearr_15338_17806[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15305 === (16))){
var inst_15282 = (state_15304[(11)]);
var state_15304__$1 = state_15304;
var statearr_15343_17808 = state_15304__$1;
(statearr_15343_17808[(2)] = inst_15282);

(statearr_15343_17808[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15305 === (10))){
var inst_15273 = (state_15304[(2)]);
var state_15304__$1 = state_15304;
var statearr_15347_17809 = state_15304__$1;
(statearr_15347_17809[(2)] = inst_15273);

(statearr_15347_17809[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15305 === (18))){
var inst_15285 = (state_15304[(2)]);
var state_15304__$1 = state_15304;
var statearr_15350_17813 = state_15304__$1;
(statearr_15350_17813[(2)] = inst_15285);

(statearr_15350_17813[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15305 === (8))){
var inst_15270 = cljs.core.async.close_BANG_(to);
var state_15304__$1 = state_15304;
var statearr_15351_17814 = state_15304__$1;
(statearr_15351_17814[(2)] = inst_15270);

(statearr_15351_17814[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
}
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
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14469__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14469__auto____0 = (function (){
var statearr_15352 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15352[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14469__auto__);

(statearr_15352[(1)] = (1));

return statearr_15352;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14469__auto____1 = (function (state_15304){
while(true){
var ret_value__14470__auto__ = (function (){try{while(true){
var result__14471__auto__ = switch__14468__auto__(state_15304);
if(cljs.core.keyword_identical_QMARK_(result__14471__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14471__auto__;
}
break;
}
}catch (e15353){var ex__14472__auto__ = e15353;
var statearr_15354_17816 = state_15304;
(statearr_15354_17816[(2)] = ex__14472__auto__);


if(cljs.core.seq((state_15304[(4)]))){
var statearr_15355_17818 = state_15304;
(statearr_15355_17818[(1)] = cljs.core.first((state_15304[(4)])));

} else {
throw ex__14472__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14470__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17822 = state_15304;
state_15304 = G__17822;
continue;
} else {
return ret_value__14470__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14469__auto__ = function(state_15304){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14469__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14469__auto____1.call(this,state_15304);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14469__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14469__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14469__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14469__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14469__auto__;
})()
})();
var state__14650__auto__ = (function (){var statearr_15360 = f__14649__auto__();
(statearr_15360[(6)] = c__14648__auto__);

return statearr_15360;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14650__auto__);
}));

return c__14648__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__15376 = arguments.length;
switch (G__15376) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__15386 = arguments.length;
switch (G__15386) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__15407 = arguments.length;
switch (G__15407) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__14648__auto___17850 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14649__auto__ = (function (){var switch__14468__auto__ = (function (state_15437){
var state_val_15438 = (state_15437[(1)]);
if((state_val_15438 === (7))){
var inst_15433 = (state_15437[(2)]);
var state_15437__$1 = state_15437;
var statearr_15442_17853 = state_15437__$1;
(statearr_15442_17853[(2)] = inst_15433);

(statearr_15442_17853[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15438 === (1))){
var state_15437__$1 = state_15437;
var statearr_15443_17854 = state_15437__$1;
(statearr_15443_17854[(2)] = null);

(statearr_15443_17854[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15438 === (4))){
var inst_15413 = (state_15437[(7)]);
var inst_15413__$1 = (state_15437[(2)]);
var inst_15415 = (inst_15413__$1 == null);
var state_15437__$1 = (function (){var statearr_15444 = state_15437;
(statearr_15444[(7)] = inst_15413__$1);

return statearr_15444;
})();
if(cljs.core.truth_(inst_15415)){
var statearr_15446_17860 = state_15437__$1;
(statearr_15446_17860[(1)] = (5));

} else {
var statearr_15447_17861 = state_15437__$1;
(statearr_15447_17861[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15438 === (13))){
var state_15437__$1 = state_15437;
var statearr_15451_17867 = state_15437__$1;
(statearr_15451_17867[(2)] = null);

(statearr_15451_17867[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15438 === (6))){
var inst_15413 = (state_15437[(7)]);
var inst_15420 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_15413) : p.call(null,inst_15413));
var state_15437__$1 = state_15437;
if(cljs.core.truth_(inst_15420)){
var statearr_15452_17873 = state_15437__$1;
(statearr_15452_17873[(1)] = (9));

} else {
var statearr_15453_17876 = state_15437__$1;
(statearr_15453_17876[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15438 === (3))){
var inst_15435 = (state_15437[(2)]);
var state_15437__$1 = state_15437;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15437__$1,inst_15435);
} else {
if((state_val_15438 === (12))){
var state_15437__$1 = state_15437;
var statearr_15454_17878 = state_15437__$1;
(statearr_15454_17878[(2)] = null);

(statearr_15454_17878[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15438 === (2))){
var state_15437__$1 = state_15437;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15437__$1,(4),ch);
} else {
if((state_val_15438 === (11))){
var inst_15413 = (state_15437[(7)]);
var inst_15424 = (state_15437[(2)]);
var state_15437__$1 = state_15437;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15437__$1,(8),inst_15424,inst_15413);
} else {
if((state_val_15438 === (9))){
var state_15437__$1 = state_15437;
var statearr_15456_17879 = state_15437__$1;
(statearr_15456_17879[(2)] = tc);

(statearr_15456_17879[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15438 === (5))){
var inst_15417 = cljs.core.async.close_BANG_(tc);
var inst_15418 = cljs.core.async.close_BANG_(fc);
var state_15437__$1 = (function (){var statearr_15457 = state_15437;
(statearr_15457[(8)] = inst_15417);

return statearr_15457;
})();
var statearr_15458_17883 = state_15437__$1;
(statearr_15458_17883[(2)] = inst_15418);

(statearr_15458_17883[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15438 === (14))){
var inst_15431 = (state_15437[(2)]);
var state_15437__$1 = state_15437;
var statearr_15459_17884 = state_15437__$1;
(statearr_15459_17884[(2)] = inst_15431);

(statearr_15459_17884[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15438 === (10))){
var state_15437__$1 = state_15437;
var statearr_15460_17885 = state_15437__$1;
(statearr_15460_17885[(2)] = fc);

(statearr_15460_17885[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15438 === (8))){
var inst_15426 = (state_15437[(2)]);
var state_15437__$1 = state_15437;
if(cljs.core.truth_(inst_15426)){
var statearr_15462_17889 = state_15437__$1;
(statearr_15462_17889[(1)] = (12));

} else {
var statearr_15463_17890 = state_15437__$1;
(statearr_15463_17890[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14469__auto__ = null;
var cljs$core$async$state_machine__14469__auto____0 = (function (){
var statearr_15468 = [null,null,null,null,null,null,null,null,null];
(statearr_15468[(0)] = cljs$core$async$state_machine__14469__auto__);

(statearr_15468[(1)] = (1));

return statearr_15468;
});
var cljs$core$async$state_machine__14469__auto____1 = (function (state_15437){
while(true){
var ret_value__14470__auto__ = (function (){try{while(true){
var result__14471__auto__ = switch__14468__auto__(state_15437);
if(cljs.core.keyword_identical_QMARK_(result__14471__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14471__auto__;
}
break;
}
}catch (e15476){var ex__14472__auto__ = e15476;
var statearr_15477_17892 = state_15437;
(statearr_15477_17892[(2)] = ex__14472__auto__);


if(cljs.core.seq((state_15437[(4)]))){
var statearr_15480_17893 = state_15437;
(statearr_15480_17893[(1)] = cljs.core.first((state_15437[(4)])));

} else {
throw ex__14472__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14470__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17894 = state_15437;
state_15437 = G__17894;
continue;
} else {
return ret_value__14470__auto__;
}
break;
}
});
cljs$core$async$state_machine__14469__auto__ = function(state_15437){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14469__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14469__auto____1.call(this,state_15437);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14469__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14469__auto____0;
cljs$core$async$state_machine__14469__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14469__auto____1;
return cljs$core$async$state_machine__14469__auto__;
})()
})();
var state__14650__auto__ = (function (){var statearr_15484 = f__14649__auto__();
(statearr_15484[(6)] = c__14648__auto___17850);

return statearr_15484;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14650__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__14648__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14649__auto__ = (function (){var switch__14468__auto__ = (function (state_15506){
var state_val_15507 = (state_15506[(1)]);
if((state_val_15507 === (7))){
var inst_15502 = (state_15506[(2)]);
var state_15506__$1 = state_15506;
var statearr_15511_17899 = state_15506__$1;
(statearr_15511_17899[(2)] = inst_15502);

(statearr_15511_17899[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15507 === (1))){
var inst_15485 = init;
var inst_15486 = inst_15485;
var state_15506__$1 = (function (){var statearr_15516 = state_15506;
(statearr_15516[(7)] = inst_15486);

return statearr_15516;
})();
var statearr_15522_17902 = state_15506__$1;
(statearr_15522_17902[(2)] = null);

(statearr_15522_17902[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15507 === (4))){
var inst_15489 = (state_15506[(8)]);
var inst_15489__$1 = (state_15506[(2)]);
var inst_15490 = (inst_15489__$1 == null);
var state_15506__$1 = (function (){var statearr_15523 = state_15506;
(statearr_15523[(8)] = inst_15489__$1);

return statearr_15523;
})();
if(cljs.core.truth_(inst_15490)){
var statearr_15528_17905 = state_15506__$1;
(statearr_15528_17905[(1)] = (5));

} else {
var statearr_15529_17906 = state_15506__$1;
(statearr_15529_17906[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15507 === (6))){
var inst_15486 = (state_15506[(7)]);
var inst_15493 = (state_15506[(9)]);
var inst_15489 = (state_15506[(8)]);
var inst_15493__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_15486,inst_15489) : f.call(null,inst_15486,inst_15489));
var inst_15494 = cljs.core.reduced_QMARK_(inst_15493__$1);
var state_15506__$1 = (function (){var statearr_15533 = state_15506;
(statearr_15533[(9)] = inst_15493__$1);

return statearr_15533;
})();
if(inst_15494){
var statearr_15535_17907 = state_15506__$1;
(statearr_15535_17907[(1)] = (8));

} else {
var statearr_15536_17908 = state_15506__$1;
(statearr_15536_17908[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15507 === (3))){
var inst_15504 = (state_15506[(2)]);
var state_15506__$1 = state_15506;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15506__$1,inst_15504);
} else {
if((state_val_15507 === (2))){
var state_15506__$1 = state_15506;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15506__$1,(4),ch);
} else {
if((state_val_15507 === (9))){
var inst_15493 = (state_15506[(9)]);
var inst_15486 = inst_15493;
var state_15506__$1 = (function (){var statearr_15540 = state_15506;
(statearr_15540[(7)] = inst_15486);

return statearr_15540;
})();
var statearr_15541_17910 = state_15506__$1;
(statearr_15541_17910[(2)] = null);

(statearr_15541_17910[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15507 === (5))){
var inst_15486 = (state_15506[(7)]);
var state_15506__$1 = state_15506;
var statearr_15548_17911 = state_15506__$1;
(statearr_15548_17911[(2)] = inst_15486);

(statearr_15548_17911[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15507 === (10))){
var inst_15500 = (state_15506[(2)]);
var state_15506__$1 = state_15506;
var statearr_15549_17912 = state_15506__$1;
(statearr_15549_17912[(2)] = inst_15500);

(statearr_15549_17912[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15507 === (8))){
var inst_15493 = (state_15506[(9)]);
var inst_15496 = cljs.core.deref(inst_15493);
var state_15506__$1 = state_15506;
var statearr_15550_17913 = state_15506__$1;
(statearr_15550_17913[(2)] = inst_15496);

(statearr_15550_17913[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__14469__auto__ = null;
var cljs$core$async$reduce_$_state_machine__14469__auto____0 = (function (){
var statearr_15552 = [null,null,null,null,null,null,null,null,null,null];
(statearr_15552[(0)] = cljs$core$async$reduce_$_state_machine__14469__auto__);

(statearr_15552[(1)] = (1));

return statearr_15552;
});
var cljs$core$async$reduce_$_state_machine__14469__auto____1 = (function (state_15506){
while(true){
var ret_value__14470__auto__ = (function (){try{while(true){
var result__14471__auto__ = switch__14468__auto__(state_15506);
if(cljs.core.keyword_identical_QMARK_(result__14471__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14471__auto__;
}
break;
}
}catch (e15554){var ex__14472__auto__ = e15554;
var statearr_15555_17916 = state_15506;
(statearr_15555_17916[(2)] = ex__14472__auto__);


if(cljs.core.seq((state_15506[(4)]))){
var statearr_15557_17917 = state_15506;
(statearr_15557_17917[(1)] = cljs.core.first((state_15506[(4)])));

} else {
throw ex__14472__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14470__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17918 = state_15506;
state_15506 = G__17918;
continue;
} else {
return ret_value__14470__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__14469__auto__ = function(state_15506){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__14469__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__14469__auto____1.call(this,state_15506);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__14469__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__14469__auto____0;
cljs$core$async$reduce_$_state_machine__14469__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__14469__auto____1;
return cljs$core$async$reduce_$_state_machine__14469__auto__;
})()
})();
var state__14650__auto__ = (function (){var statearr_15562 = f__14649__auto__();
(statearr_15562[(6)] = c__14648__auto__);

return statearr_15562;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14650__auto__);
}));

return c__14648__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__14648__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14649__auto__ = (function (){var switch__14468__auto__ = (function (state_15571){
var state_val_15572 = (state_15571[(1)]);
if((state_val_15572 === (1))){
var inst_15566 = cljs.core.async.reduce(f__$1,init,ch);
var state_15571__$1 = state_15571;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15571__$1,(2),inst_15566);
} else {
if((state_val_15572 === (2))){
var inst_15568 = (state_15571[(2)]);
var inst_15569 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_15568) : f__$1.call(null,inst_15568));
var state_15571__$1 = state_15571;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15571__$1,inst_15569);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__14469__auto__ = null;
var cljs$core$async$transduce_$_state_machine__14469__auto____0 = (function (){
var statearr_15582 = [null,null,null,null,null,null,null];
(statearr_15582[(0)] = cljs$core$async$transduce_$_state_machine__14469__auto__);

(statearr_15582[(1)] = (1));

return statearr_15582;
});
var cljs$core$async$transduce_$_state_machine__14469__auto____1 = (function (state_15571){
while(true){
var ret_value__14470__auto__ = (function (){try{while(true){
var result__14471__auto__ = switch__14468__auto__(state_15571);
if(cljs.core.keyword_identical_QMARK_(result__14471__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14471__auto__;
}
break;
}
}catch (e15583){var ex__14472__auto__ = e15583;
var statearr_15584_17921 = state_15571;
(statearr_15584_17921[(2)] = ex__14472__auto__);


if(cljs.core.seq((state_15571[(4)]))){
var statearr_15585_17922 = state_15571;
(statearr_15585_17922[(1)] = cljs.core.first((state_15571[(4)])));

} else {
throw ex__14472__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14470__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17923 = state_15571;
state_15571 = G__17923;
continue;
} else {
return ret_value__14470__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__14469__auto__ = function(state_15571){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__14469__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__14469__auto____1.call(this,state_15571);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__14469__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__14469__auto____0;
cljs$core$async$transduce_$_state_machine__14469__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__14469__auto____1;
return cljs$core$async$transduce_$_state_machine__14469__auto__;
})()
})();
var state__14650__auto__ = (function (){var statearr_15586 = f__14649__auto__();
(statearr_15586[(6)] = c__14648__auto__);

return statearr_15586;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14650__auto__);
}));

return c__14648__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__15589 = arguments.length;
switch (G__15589) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__14648__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14649__auto__ = (function (){var switch__14468__auto__ = (function (state_15623){
var state_val_15624 = (state_15623[(1)]);
if((state_val_15624 === (7))){
var inst_15604 = (state_15623[(2)]);
var state_15623__$1 = state_15623;
var statearr_15625_17926 = state_15623__$1;
(statearr_15625_17926[(2)] = inst_15604);

(statearr_15625_17926[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15624 === (1))){
var inst_15596 = cljs.core.seq(coll);
var inst_15597 = inst_15596;
var state_15623__$1 = (function (){var statearr_15626 = state_15623;
(statearr_15626[(7)] = inst_15597);

return statearr_15626;
})();
var statearr_15631_17928 = state_15623__$1;
(statearr_15631_17928[(2)] = null);

(statearr_15631_17928[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15624 === (4))){
var inst_15597 = (state_15623[(7)]);
var inst_15601 = cljs.core.first(inst_15597);
var state_15623__$1 = state_15623;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15623__$1,(7),ch,inst_15601);
} else {
if((state_val_15624 === (13))){
var inst_15617 = (state_15623[(2)]);
var state_15623__$1 = state_15623;
var statearr_15633_17931 = state_15623__$1;
(statearr_15633_17931[(2)] = inst_15617);

(statearr_15633_17931[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15624 === (6))){
var inst_15607 = (state_15623[(2)]);
var state_15623__$1 = state_15623;
if(cljs.core.truth_(inst_15607)){
var statearr_15634_17935 = state_15623__$1;
(statearr_15634_17935[(1)] = (8));

} else {
var statearr_15635_17936 = state_15623__$1;
(statearr_15635_17936[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15624 === (3))){
var inst_15621 = (state_15623[(2)]);
var state_15623__$1 = state_15623;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15623__$1,inst_15621);
} else {
if((state_val_15624 === (12))){
var state_15623__$1 = state_15623;
var statearr_15636_17938 = state_15623__$1;
(statearr_15636_17938[(2)] = null);

(statearr_15636_17938[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15624 === (2))){
var inst_15597 = (state_15623[(7)]);
var state_15623__$1 = state_15623;
if(cljs.core.truth_(inst_15597)){
var statearr_15637_17941 = state_15623__$1;
(statearr_15637_17941[(1)] = (4));

} else {
var statearr_15638_17942 = state_15623__$1;
(statearr_15638_17942[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15624 === (11))){
var inst_15613 = cljs.core.async.close_BANG_(ch);
var state_15623__$1 = state_15623;
var statearr_15639_17943 = state_15623__$1;
(statearr_15639_17943[(2)] = inst_15613);

(statearr_15639_17943[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15624 === (9))){
var state_15623__$1 = state_15623;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15640_17944 = state_15623__$1;
(statearr_15640_17944[(1)] = (11));

} else {
var statearr_15641_17945 = state_15623__$1;
(statearr_15641_17945[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15624 === (5))){
var inst_15597 = (state_15623[(7)]);
var state_15623__$1 = state_15623;
var statearr_15645_17948 = state_15623__$1;
(statearr_15645_17948[(2)] = inst_15597);

(statearr_15645_17948[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15624 === (10))){
var inst_15619 = (state_15623[(2)]);
var state_15623__$1 = state_15623;
var statearr_15646_17949 = state_15623__$1;
(statearr_15646_17949[(2)] = inst_15619);

(statearr_15646_17949[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15624 === (8))){
var inst_15597 = (state_15623[(7)]);
var inst_15609 = cljs.core.next(inst_15597);
var inst_15597__$1 = inst_15609;
var state_15623__$1 = (function (){var statearr_15647 = state_15623;
(statearr_15647[(7)] = inst_15597__$1);

return statearr_15647;
})();
var statearr_15648_17950 = state_15623__$1;
(statearr_15648_17950[(2)] = null);

(statearr_15648_17950[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14469__auto__ = null;
var cljs$core$async$state_machine__14469__auto____0 = (function (){
var statearr_15651 = [null,null,null,null,null,null,null,null];
(statearr_15651[(0)] = cljs$core$async$state_machine__14469__auto__);

(statearr_15651[(1)] = (1));

return statearr_15651;
});
var cljs$core$async$state_machine__14469__auto____1 = (function (state_15623){
while(true){
var ret_value__14470__auto__ = (function (){try{while(true){
var result__14471__auto__ = switch__14468__auto__(state_15623);
if(cljs.core.keyword_identical_QMARK_(result__14471__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14471__auto__;
}
break;
}
}catch (e15653){var ex__14472__auto__ = e15653;
var statearr_15654_17951 = state_15623;
(statearr_15654_17951[(2)] = ex__14472__auto__);


if(cljs.core.seq((state_15623[(4)]))){
var statearr_15655_17952 = state_15623;
(statearr_15655_17952[(1)] = cljs.core.first((state_15623[(4)])));

} else {
throw ex__14472__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14470__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17953 = state_15623;
state_15623 = G__17953;
continue;
} else {
return ret_value__14470__auto__;
}
break;
}
});
cljs$core$async$state_machine__14469__auto__ = function(state_15623){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14469__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14469__auto____1.call(this,state_15623);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14469__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14469__auto____0;
cljs$core$async$state_machine__14469__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14469__auto____1;
return cljs$core$async$state_machine__14469__auto__;
})()
})();
var state__14650__auto__ = (function (){var statearr_15660 = f__14649__auto__();
(statearr_15660[(6)] = c__14648__auto__);

return statearr_15660;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14650__auto__);
}));

return c__14648__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__15672 = arguments.length;
switch (G__15672) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_17960 = (function (_){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5394__auto__.call(null,_));
} else {
var m__5392__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5392__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_17960(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_17968 = (function (m,ch,close_QMARK_){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5394__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5392__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_17968(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_17983 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_17983(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_17984 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_17984(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async15713 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15713 = (function (ch,cs,meta15714){
this.ch = ch;
this.cs = cs;
this.meta15714 = meta15714;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15713.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15715,meta15714__$1){
var self__ = this;
var _15715__$1 = this;
return (new cljs.core.async.t_cljs$core$async15713(self__.ch,self__.cs,meta15714__$1));
}));

(cljs.core.async.t_cljs$core$async15713.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15715){
var self__ = this;
var _15715__$1 = this;
return self__.meta15714;
}));

(cljs.core.async.t_cljs$core$async15713.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15713.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async15713.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15713.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async15713.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async15713.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async15713.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta15714","meta15714",1646292463,null)], null);
}));

(cljs.core.async.t_cljs$core$async15713.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15713.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15713");

(cljs.core.async.t_cljs$core$async15713.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async15713");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15713.
 */
cljs.core.async.__GT_t_cljs$core$async15713 = (function cljs$core$async$mult_$___GT_t_cljs$core$async15713(ch__$1,cs__$1,meta15714){
return (new cljs.core.async.t_cljs$core$async15713(ch__$1,cs__$1,meta15714));
});

}

return (new cljs.core.async.t_cljs$core$async15713(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__14648__auto___17987 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14649__auto__ = (function (){var switch__14468__auto__ = (function (state_15924){
var state_val_15930 = (state_15924[(1)]);
if((state_val_15930 === (7))){
var inst_15913 = (state_15924[(2)]);
var state_15924__$1 = state_15924;
var statearr_15943_17994 = state_15924__$1;
(statearr_15943_17994[(2)] = inst_15913);

(statearr_15943_17994[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15930 === (20))){
var inst_15779 = (state_15924[(7)]);
var inst_15798 = cljs.core.first(inst_15779);
var inst_15799 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15798,(0),null);
var inst_15800 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15798,(1),null);
var state_15924__$1 = (function (){var statearr_15945 = state_15924;
(statearr_15945[(8)] = inst_15799);

return statearr_15945;
})();
if(cljs.core.truth_(inst_15800)){
var statearr_15946_17996 = state_15924__$1;
(statearr_15946_17996[(1)] = (22));

} else {
var statearr_15947_17997 = state_15924__$1;
(statearr_15947_17997[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15930 === (27))){
var inst_15834 = (state_15924[(9)]);
var inst_15845 = (state_15924[(10)]);
var inst_15731 = (state_15924[(11)]);
var inst_15832 = (state_15924[(12)]);
var inst_15845__$1 = cljs.core._nth(inst_15832,inst_15834);
var inst_15848 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_15845__$1,inst_15731,done);
var state_15924__$1 = (function (){var statearr_15948 = state_15924;
(statearr_15948[(10)] = inst_15845__$1);

return statearr_15948;
})();
if(cljs.core.truth_(inst_15848)){
var statearr_15949_17998 = state_15924__$1;
(statearr_15949_17998[(1)] = (30));

} else {
var statearr_15950_17999 = state_15924__$1;
(statearr_15950_17999[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15930 === (1))){
var state_15924__$1 = state_15924;
var statearr_15960_18000 = state_15924__$1;
(statearr_15960_18000[(2)] = null);

(statearr_15960_18000[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15930 === (24))){
var inst_15779 = (state_15924[(7)]);
var inst_15805 = (state_15924[(2)]);
var inst_15810 = cljs.core.next(inst_15779);
var inst_15740 = inst_15810;
var inst_15741 = null;
var inst_15742 = (0);
var inst_15743 = (0);
var state_15924__$1 = (function (){var statearr_15961 = state_15924;
(statearr_15961[(13)] = inst_15742);

(statearr_15961[(14)] = inst_15743);

(statearr_15961[(15)] = inst_15741);

(statearr_15961[(16)] = inst_15740);

(statearr_15961[(17)] = inst_15805);

return statearr_15961;
})();
var statearr_15964_18004 = state_15924__$1;
(statearr_15964_18004[(2)] = null);

(statearr_15964_18004[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15930 === (39))){
var state_15924__$1 = state_15924;
var statearr_15973_18011 = state_15924__$1;
(statearr_15973_18011[(2)] = null);

(statearr_15973_18011[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15930 === (4))){
var inst_15731 = (state_15924[(11)]);
var inst_15731__$1 = (state_15924[(2)]);
var inst_15732 = (inst_15731__$1 == null);
var state_15924__$1 = (function (){var statearr_15975 = state_15924;
(statearr_15975[(11)] = inst_15731__$1);

return statearr_15975;
})();
if(cljs.core.truth_(inst_15732)){
var statearr_15977_18012 = state_15924__$1;
(statearr_15977_18012[(1)] = (5));

} else {
var statearr_15979_18013 = state_15924__$1;
(statearr_15979_18013[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15930 === (15))){
var inst_15742 = (state_15924[(13)]);
var inst_15743 = (state_15924[(14)]);
var inst_15741 = (state_15924[(15)]);
var inst_15740 = (state_15924[(16)]);
var inst_15768 = (state_15924[(2)]);
var inst_15771 = (inst_15743 + (1));
var tmp15969 = inst_15742;
var tmp15970 = inst_15741;
var tmp15971 = inst_15740;
var inst_15740__$1 = tmp15971;
var inst_15741__$1 = tmp15970;
var inst_15742__$1 = tmp15969;
var inst_15743__$1 = inst_15771;
var state_15924__$1 = (function (){var statearr_15980 = state_15924;
(statearr_15980[(13)] = inst_15742__$1);

(statearr_15980[(14)] = inst_15743__$1);

(statearr_15980[(18)] = inst_15768);

(statearr_15980[(15)] = inst_15741__$1);

(statearr_15980[(16)] = inst_15740__$1);

return statearr_15980;
})();
var statearr_15981_18016 = state_15924__$1;
(statearr_15981_18016[(2)] = null);

(statearr_15981_18016[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15930 === (21))){
var inst_15813 = (state_15924[(2)]);
var state_15924__$1 = state_15924;
var statearr_15985_18017 = state_15924__$1;
(statearr_15985_18017[(2)] = inst_15813);

(statearr_15985_18017[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15930 === (31))){
var inst_15845 = (state_15924[(10)]);
var inst_15855 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_15845);
var state_15924__$1 = state_15924;
var statearr_15988_18018 = state_15924__$1;
(statearr_15988_18018[(2)] = inst_15855);

(statearr_15988_18018[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15930 === (32))){
var inst_15834 = (state_15924[(9)]);
var inst_15831 = (state_15924[(19)]);
var inst_15833 = (state_15924[(20)]);
var inst_15832 = (state_15924[(12)]);
var inst_15857 = (state_15924[(2)]);
var inst_15862 = (inst_15834 + (1));
var tmp15982 = inst_15831;
var tmp15983 = inst_15833;
var tmp15984 = inst_15832;
var inst_15831__$1 = tmp15982;
var inst_15832__$1 = tmp15984;
var inst_15833__$1 = tmp15983;
var inst_15834__$1 = inst_15862;
var state_15924__$1 = (function (){var statearr_15989 = state_15924;
(statearr_15989[(9)] = inst_15834__$1);

(statearr_15989[(19)] = inst_15831__$1);

(statearr_15989[(20)] = inst_15833__$1);

(statearr_15989[(21)] = inst_15857);

(statearr_15989[(12)] = inst_15832__$1);

return statearr_15989;
})();
var statearr_15994_18020 = state_15924__$1;
(statearr_15994_18020[(2)] = null);

(statearr_15994_18020[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15930 === (40))){
var inst_15882 = (state_15924[(22)]);
var inst_15890 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_15882);
var state_15924__$1 = state_15924;
var statearr_15999_18023 = state_15924__$1;
(statearr_15999_18023[(2)] = inst_15890);

(statearr_15999_18023[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15930 === (33))){
var inst_15866 = (state_15924[(23)]);
var inst_15869 = cljs.core.chunked_seq_QMARK_(inst_15866);
var state_15924__$1 = state_15924;
if(inst_15869){
var statearr_16004_18024 = state_15924__$1;
(statearr_16004_18024[(1)] = (36));

} else {
var statearr_16005_18025 = state_15924__$1;
(statearr_16005_18025[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15930 === (13))){
var inst_15757 = (state_15924[(24)]);
var inst_15765 = cljs.core.async.close_BANG_(inst_15757);
var state_15924__$1 = state_15924;
var statearr_16006_18032 = state_15924__$1;
(statearr_16006_18032[(2)] = inst_15765);

(statearr_16006_18032[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15930 === (22))){
var inst_15799 = (state_15924[(8)]);
var inst_15802 = cljs.core.async.close_BANG_(inst_15799);
var state_15924__$1 = state_15924;
var statearr_16008_18033 = state_15924__$1;
(statearr_16008_18033[(2)] = inst_15802);

(statearr_16008_18033[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15930 === (36))){
var inst_15866 = (state_15924[(23)]);
var inst_15876 = cljs.core.chunk_first(inst_15866);
var inst_15877 = cljs.core.chunk_rest(inst_15866);
var inst_15878 = cljs.core.count(inst_15876);
var inst_15831 = inst_15877;
var inst_15832 = inst_15876;
var inst_15833 = inst_15878;
var inst_15834 = (0);
var state_15924__$1 = (function (){var statearr_16009 = state_15924;
(statearr_16009[(9)] = inst_15834);

(statearr_16009[(19)] = inst_15831);

(statearr_16009[(20)] = inst_15833);

(statearr_16009[(12)] = inst_15832);

return statearr_16009;
})();
var statearr_16010_18034 = state_15924__$1;
(statearr_16010_18034[(2)] = null);

(statearr_16010_18034[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15930 === (41))){
var inst_15866 = (state_15924[(23)]);
var inst_15892 = (state_15924[(2)]);
var inst_15893 = cljs.core.next(inst_15866);
var inst_15831 = inst_15893;
var inst_15832 = null;
var inst_15833 = (0);
var inst_15834 = (0);
var state_15924__$1 = (function (){var statearr_16011 = state_15924;
(statearr_16011[(9)] = inst_15834);

(statearr_16011[(19)] = inst_15831);

(statearr_16011[(20)] = inst_15833);

(statearr_16011[(25)] = inst_15892);

(statearr_16011[(12)] = inst_15832);

return statearr_16011;
})();
var statearr_16012_18035 = state_15924__$1;
(statearr_16012_18035[(2)] = null);

(statearr_16012_18035[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15930 === (43))){
var state_15924__$1 = state_15924;
var statearr_16013_18036 = state_15924__$1;
(statearr_16013_18036[(2)] = null);

(statearr_16013_18036[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15930 === (29))){
var inst_15901 = (state_15924[(2)]);
var state_15924__$1 = state_15924;
var statearr_16014_18038 = state_15924__$1;
(statearr_16014_18038[(2)] = inst_15901);

(statearr_16014_18038[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15930 === (44))){
var inst_15910 = (state_15924[(2)]);
var state_15924__$1 = (function (){var statearr_16015 = state_15924;
(statearr_16015[(26)] = inst_15910);

return statearr_16015;
})();
var statearr_16016_18039 = state_15924__$1;
(statearr_16016_18039[(2)] = null);

(statearr_16016_18039[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15930 === (6))){
var inst_15823 = (state_15924[(27)]);
var inst_15822 = cljs.core.deref(cs);
var inst_15823__$1 = cljs.core.keys(inst_15822);
var inst_15824 = cljs.core.count(inst_15823__$1);
var inst_15825 = cljs.core.reset_BANG_(dctr,inst_15824);
var inst_15830 = cljs.core.seq(inst_15823__$1);
var inst_15831 = inst_15830;
var inst_15832 = null;
var inst_15833 = (0);
var inst_15834 = (0);
var state_15924__$1 = (function (){var statearr_16027 = state_15924;
(statearr_16027[(9)] = inst_15834);

(statearr_16027[(19)] = inst_15831);

(statearr_16027[(20)] = inst_15833);

(statearr_16027[(28)] = inst_15825);

(statearr_16027[(27)] = inst_15823__$1);

(statearr_16027[(12)] = inst_15832);

return statearr_16027;
})();
var statearr_16028_18042 = state_15924__$1;
(statearr_16028_18042[(2)] = null);

(statearr_16028_18042[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15930 === (28))){
var inst_15831 = (state_15924[(19)]);
var inst_15866 = (state_15924[(23)]);
var inst_15866__$1 = cljs.core.seq(inst_15831);
var state_15924__$1 = (function (){var statearr_16029 = state_15924;
(statearr_16029[(23)] = inst_15866__$1);

return statearr_16029;
})();
if(inst_15866__$1){
var statearr_16034_18044 = state_15924__$1;
(statearr_16034_18044[(1)] = (33));

} else {
var statearr_16035_18045 = state_15924__$1;
(statearr_16035_18045[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15930 === (25))){
var inst_15834 = (state_15924[(9)]);
var inst_15833 = (state_15924[(20)]);
var inst_15838 = (inst_15834 < inst_15833);
var inst_15839 = inst_15838;
var state_15924__$1 = state_15924;
if(cljs.core.truth_(inst_15839)){
var statearr_16036_18047 = state_15924__$1;
(statearr_16036_18047[(1)] = (27));

} else {
var statearr_16037_18048 = state_15924__$1;
(statearr_16037_18048[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15930 === (34))){
var state_15924__$1 = state_15924;
var statearr_16039_18049 = state_15924__$1;
(statearr_16039_18049[(2)] = null);

(statearr_16039_18049[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15930 === (17))){
var state_15924__$1 = state_15924;
var statearr_16040_18050 = state_15924__$1;
(statearr_16040_18050[(2)] = null);

(statearr_16040_18050[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15930 === (3))){
var inst_15915 = (state_15924[(2)]);
var state_15924__$1 = state_15924;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15924__$1,inst_15915);
} else {
if((state_val_15930 === (12))){
var inst_15818 = (state_15924[(2)]);
var state_15924__$1 = state_15924;
var statearr_16042_18052 = state_15924__$1;
(statearr_16042_18052[(2)] = inst_15818);

(statearr_16042_18052[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15930 === (2))){
var state_15924__$1 = state_15924;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15924__$1,(4),ch);
} else {
if((state_val_15930 === (23))){
var state_15924__$1 = state_15924;
var statearr_16043_18054 = state_15924__$1;
(statearr_16043_18054[(2)] = null);

(statearr_16043_18054[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15930 === (35))){
var inst_15899 = (state_15924[(2)]);
var state_15924__$1 = state_15924;
var statearr_16044_18055 = state_15924__$1;
(statearr_16044_18055[(2)] = inst_15899);

(statearr_16044_18055[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15930 === (19))){
var inst_15779 = (state_15924[(7)]);
var inst_15787 = cljs.core.chunk_first(inst_15779);
var inst_15788 = cljs.core.chunk_rest(inst_15779);
var inst_15789 = cljs.core.count(inst_15787);
var inst_15740 = inst_15788;
var inst_15741 = inst_15787;
var inst_15742 = inst_15789;
var inst_15743 = (0);
var state_15924__$1 = (function (){var statearr_16048 = state_15924;
(statearr_16048[(13)] = inst_15742);

(statearr_16048[(14)] = inst_15743);

(statearr_16048[(15)] = inst_15741);

(statearr_16048[(16)] = inst_15740);

return statearr_16048;
})();
var statearr_16049_18061 = state_15924__$1;
(statearr_16049_18061[(2)] = null);

(statearr_16049_18061[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15930 === (11))){
var inst_15740 = (state_15924[(16)]);
var inst_15779 = (state_15924[(7)]);
var inst_15779__$1 = cljs.core.seq(inst_15740);
var state_15924__$1 = (function (){var statearr_16059 = state_15924;
(statearr_16059[(7)] = inst_15779__$1);

return statearr_16059;
})();
if(inst_15779__$1){
var statearr_16060_18064 = state_15924__$1;
(statearr_16060_18064[(1)] = (16));

} else {
var statearr_16061_18065 = state_15924__$1;
(statearr_16061_18065[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15930 === (9))){
var inst_15820 = (state_15924[(2)]);
var state_15924__$1 = state_15924;
var statearr_16062_18068 = state_15924__$1;
(statearr_16062_18068[(2)] = inst_15820);

(statearr_16062_18068[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15930 === (5))){
var inst_15738 = cljs.core.deref(cs);
var inst_15739 = cljs.core.seq(inst_15738);
var inst_15740 = inst_15739;
var inst_15741 = null;
var inst_15742 = (0);
var inst_15743 = (0);
var state_15924__$1 = (function (){var statearr_16063 = state_15924;
(statearr_16063[(13)] = inst_15742);

(statearr_16063[(14)] = inst_15743);

(statearr_16063[(15)] = inst_15741);

(statearr_16063[(16)] = inst_15740);

return statearr_16063;
})();
var statearr_16064_18069 = state_15924__$1;
(statearr_16064_18069[(2)] = null);

(statearr_16064_18069[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15930 === (14))){
var state_15924__$1 = state_15924;
var statearr_16065_18070 = state_15924__$1;
(statearr_16065_18070[(2)] = null);

(statearr_16065_18070[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15930 === (45))){
var inst_15907 = (state_15924[(2)]);
var state_15924__$1 = state_15924;
var statearr_16066_18072 = state_15924__$1;
(statearr_16066_18072[(2)] = inst_15907);

(statearr_16066_18072[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15930 === (26))){
var inst_15823 = (state_15924[(27)]);
var inst_15903 = (state_15924[(2)]);
var inst_15904 = cljs.core.seq(inst_15823);
var state_15924__$1 = (function (){var statearr_16071 = state_15924;
(statearr_16071[(29)] = inst_15903);

return statearr_16071;
})();
if(inst_15904){
var statearr_16072_18073 = state_15924__$1;
(statearr_16072_18073[(1)] = (42));

} else {
var statearr_16073_18075 = state_15924__$1;
(statearr_16073_18075[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15930 === (16))){
var inst_15779 = (state_15924[(7)]);
var inst_15785 = cljs.core.chunked_seq_QMARK_(inst_15779);
var state_15924__$1 = state_15924;
if(inst_15785){
var statearr_16074_18076 = state_15924__$1;
(statearr_16074_18076[(1)] = (19));

} else {
var statearr_16075_18077 = state_15924__$1;
(statearr_16075_18077[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15930 === (38))){
var inst_15896 = (state_15924[(2)]);
var state_15924__$1 = state_15924;
var statearr_16076_18082 = state_15924__$1;
(statearr_16076_18082[(2)] = inst_15896);

(statearr_16076_18082[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15930 === (30))){
var state_15924__$1 = state_15924;
var statearr_16077_18083 = state_15924__$1;
(statearr_16077_18083[(2)] = null);

(statearr_16077_18083[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15930 === (10))){
var inst_15743 = (state_15924[(14)]);
var inst_15741 = (state_15924[(15)]);
var inst_15756 = cljs.core._nth(inst_15741,inst_15743);
var inst_15757 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15756,(0),null);
var inst_15758 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15756,(1),null);
var state_15924__$1 = (function (){var statearr_16078 = state_15924;
(statearr_16078[(24)] = inst_15757);

return statearr_16078;
})();
if(cljs.core.truth_(inst_15758)){
var statearr_16079_18090 = state_15924__$1;
(statearr_16079_18090[(1)] = (13));

} else {
var statearr_16080_18091 = state_15924__$1;
(statearr_16080_18091[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15930 === (18))){
var inst_15816 = (state_15924[(2)]);
var state_15924__$1 = state_15924;
var statearr_16081_18093 = state_15924__$1;
(statearr_16081_18093[(2)] = inst_15816);

(statearr_16081_18093[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15930 === (42))){
var state_15924__$1 = state_15924;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15924__$1,(45),dchan);
} else {
if((state_val_15930 === (37))){
var inst_15866 = (state_15924[(23)]);
var inst_15882 = (state_15924[(22)]);
var inst_15731 = (state_15924[(11)]);
var inst_15882__$1 = cljs.core.first(inst_15866);
var inst_15887 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_15882__$1,inst_15731,done);
var state_15924__$1 = (function (){var statearr_16082 = state_15924;
(statearr_16082[(22)] = inst_15882__$1);

return statearr_16082;
})();
if(cljs.core.truth_(inst_15887)){
var statearr_16083_18100 = state_15924__$1;
(statearr_16083_18100[(1)] = (39));

} else {
var statearr_16084_18101 = state_15924__$1;
(statearr_16084_18101[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15930 === (8))){
var inst_15742 = (state_15924[(13)]);
var inst_15743 = (state_15924[(14)]);
var inst_15749 = (inst_15743 < inst_15742);
var inst_15750 = inst_15749;
var state_15924__$1 = state_15924;
if(cljs.core.truth_(inst_15750)){
var statearr_16085_18103 = state_15924__$1;
(statearr_16085_18103[(1)] = (10));

} else {
var statearr_16086_18104 = state_15924__$1;
(statearr_16086_18104[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
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
return (function() {
var cljs$core$async$mult_$_state_machine__14469__auto__ = null;
var cljs$core$async$mult_$_state_machine__14469__auto____0 = (function (){
var statearr_16096 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16096[(0)] = cljs$core$async$mult_$_state_machine__14469__auto__);

(statearr_16096[(1)] = (1));

return statearr_16096;
});
var cljs$core$async$mult_$_state_machine__14469__auto____1 = (function (state_15924){
while(true){
var ret_value__14470__auto__ = (function (){try{while(true){
var result__14471__auto__ = switch__14468__auto__(state_15924);
if(cljs.core.keyword_identical_QMARK_(result__14471__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14471__auto__;
}
break;
}
}catch (e16098){var ex__14472__auto__ = e16098;
var statearr_16099_18117 = state_15924;
(statearr_16099_18117[(2)] = ex__14472__auto__);


if(cljs.core.seq((state_15924[(4)]))){
var statearr_16100_18122 = state_15924;
(statearr_16100_18122[(1)] = cljs.core.first((state_15924[(4)])));

} else {
throw ex__14472__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14470__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18123 = state_15924;
state_15924 = G__18123;
continue;
} else {
return ret_value__14470__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__14469__auto__ = function(state_15924){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__14469__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__14469__auto____1.call(this,state_15924);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__14469__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__14469__auto____0;
cljs$core$async$mult_$_state_machine__14469__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__14469__auto____1;
return cljs$core$async$mult_$_state_machine__14469__auto__;
})()
})();
var state__14650__auto__ = (function (){var statearr_16101 = f__14649__auto__();
(statearr_16101[(6)] = c__14648__auto___17987);

return statearr_16101;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14650__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__16108 = arguments.length;
switch (G__16108) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_18138 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_18138(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_18140 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_18140(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_18148 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_18148(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_18152 = (function (m,state_map){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5394__auto__.call(null,m,state_map));
} else {
var m__5392__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5392__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_18152(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_18157 = (function (m,mode){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5394__auto__.call(null,m,mode));
} else {
var m__5392__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5392__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_18157(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___18160 = arguments.length;
var i__5770__auto___18161 = (0);
while(true){
if((i__5770__auto___18161 < len__5769__auto___18160)){
args__5775__auto__.push((arguments[i__5770__auto___18161]));

var G__18162 = (i__5770__auto___18161 + (1));
i__5770__auto___18161 = G__18162;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__16139){
var map__16140 = p__16139;
var map__16140__$1 = cljs.core.__destructure_map(map__16140);
var opts = map__16140__$1;
var statearr_16141_18165 = state;
(statearr_16141_18165[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_16146_18166 = state;
(statearr_16146_18166[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_16147_18171 = state;
(statearr_16147_18171[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq16134){
var G__16135 = cljs.core.first(seq16134);
var seq16134__$1 = cljs.core.next(seq16134);
var G__16136 = cljs.core.first(seq16134__$1);
var seq16134__$2 = cljs.core.next(seq16134__$1);
var G__16137 = cljs.core.first(seq16134__$2);
var seq16134__$3 = cljs.core.next(seq16134__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16135,G__16136,G__16137,seq16134__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async16150 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16150 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta16151){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta16151 = meta16151;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16150.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16152,meta16151__$1){
var self__ = this;
var _16152__$1 = this;
return (new cljs.core.async.t_cljs$core$async16150(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta16151__$1));
}));

(cljs.core.async.t_cljs$core$async16150.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16152){
var self__ = this;
var _16152__$1 = this;
return self__.meta16151;
}));

(cljs.core.async.t_cljs$core$async16150.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16150.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async16150.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16150.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async16150.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async16150.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async16150.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async16150.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async16150.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta16151","meta16151",314229179,null)], null);
}));

(cljs.core.async.t_cljs$core$async16150.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16150.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16150");

(cljs.core.async.t_cljs$core$async16150.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async16150");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16150.
 */
cljs.core.async.__GT_t_cljs$core$async16150 = (function cljs$core$async$mix_$___GT_t_cljs$core$async16150(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta16151){
return (new cljs.core.async.t_cljs$core$async16150(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta16151));
});

}

return (new cljs.core.async.t_cljs$core$async16150(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__14648__auto___18226 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14649__auto__ = (function (){var switch__14468__auto__ = (function (state_16232){
var state_val_16233 = (state_16232[(1)]);
if((state_val_16233 === (7))){
var inst_16188 = (state_16232[(2)]);
var state_16232__$1 = state_16232;
if(cljs.core.truth_(inst_16188)){
var statearr_16237_18230 = state_16232__$1;
(statearr_16237_18230[(1)] = (8));

} else {
var statearr_16241_18231 = state_16232__$1;
(statearr_16241_18231[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16233 === (20))){
var inst_16181 = (state_16232[(7)]);
var state_16232__$1 = state_16232;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16232__$1,(23),out,inst_16181);
} else {
if((state_val_16233 === (1))){
var inst_16164 = calc_state();
var inst_16165 = cljs.core.__destructure_map(inst_16164);
var inst_16166 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16165,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_16167 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16165,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_16168 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16165,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_16169 = inst_16164;
var state_16232__$1 = (function (){var statearr_16242 = state_16232;
(statearr_16242[(8)] = inst_16168);

(statearr_16242[(9)] = inst_16166);

(statearr_16242[(10)] = inst_16169);

(statearr_16242[(11)] = inst_16167);

return statearr_16242;
})();
var statearr_16247_18232 = state_16232__$1;
(statearr_16247_18232[(2)] = null);

(statearr_16247_18232[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16233 === (24))){
var inst_16172 = (state_16232[(12)]);
var inst_16169 = inst_16172;
var state_16232__$1 = (function (){var statearr_16248 = state_16232;
(statearr_16248[(10)] = inst_16169);

return statearr_16248;
})();
var statearr_16249_18233 = state_16232__$1;
(statearr_16249_18233[(2)] = null);

(statearr_16249_18233[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16233 === (4))){
var inst_16183 = (state_16232[(13)]);
var inst_16181 = (state_16232[(7)]);
var inst_16180 = (state_16232[(2)]);
var inst_16181__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16180,(0),null);
var inst_16182 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16180,(1),null);
var inst_16183__$1 = (inst_16181__$1 == null);
var state_16232__$1 = (function (){var statearr_16253 = state_16232;
(statearr_16253[(14)] = inst_16182);

(statearr_16253[(13)] = inst_16183__$1);

(statearr_16253[(7)] = inst_16181__$1);

return statearr_16253;
})();
if(cljs.core.truth_(inst_16183__$1)){
var statearr_16254_18239 = state_16232__$1;
(statearr_16254_18239[(1)] = (5));

} else {
var statearr_16255_18241 = state_16232__$1;
(statearr_16255_18241[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16233 === (15))){
var inst_16173 = (state_16232[(15)]);
var inst_16206 = (state_16232[(16)]);
var inst_16206__$1 = cljs.core.empty_QMARK_(inst_16173);
var state_16232__$1 = (function (){var statearr_16260 = state_16232;
(statearr_16260[(16)] = inst_16206__$1);

return statearr_16260;
})();
if(inst_16206__$1){
var statearr_16261_18244 = state_16232__$1;
(statearr_16261_18244[(1)] = (17));

} else {
var statearr_16262_18245 = state_16232__$1;
(statearr_16262_18245[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16233 === (21))){
var inst_16172 = (state_16232[(12)]);
var inst_16169 = inst_16172;
var state_16232__$1 = (function (){var statearr_16263 = state_16232;
(statearr_16263[(10)] = inst_16169);

return statearr_16263;
})();
var statearr_16266_18249 = state_16232__$1;
(statearr_16266_18249[(2)] = null);

(statearr_16266_18249[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16233 === (13))){
var inst_16195 = (state_16232[(2)]);
var inst_16196 = calc_state();
var inst_16169 = inst_16196;
var state_16232__$1 = (function (){var statearr_16267 = state_16232;
(statearr_16267[(17)] = inst_16195);

(statearr_16267[(10)] = inst_16169);

return statearr_16267;
})();
var statearr_16273_18257 = state_16232__$1;
(statearr_16273_18257[(2)] = null);

(statearr_16273_18257[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16233 === (22))){
var inst_16226 = (state_16232[(2)]);
var state_16232__$1 = state_16232;
var statearr_16276_18263 = state_16232__$1;
(statearr_16276_18263[(2)] = inst_16226);

(statearr_16276_18263[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16233 === (6))){
var inst_16182 = (state_16232[(14)]);
var inst_16186 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_16182,change);
var state_16232__$1 = state_16232;
var statearr_16277_18273 = state_16232__$1;
(statearr_16277_18273[(2)] = inst_16186);

(statearr_16277_18273[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16233 === (25))){
var state_16232__$1 = state_16232;
var statearr_16278_18274 = state_16232__$1;
(statearr_16278_18274[(2)] = null);

(statearr_16278_18274[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16233 === (17))){
var inst_16182 = (state_16232[(14)]);
var inst_16174 = (state_16232[(18)]);
var inst_16208 = (inst_16174.cljs$core$IFn$_invoke$arity$1 ? inst_16174.cljs$core$IFn$_invoke$arity$1(inst_16182) : inst_16174.call(null,inst_16182));
var inst_16209 = cljs.core.not(inst_16208);
var state_16232__$1 = state_16232;
var statearr_16279_18282 = state_16232__$1;
(statearr_16279_18282[(2)] = inst_16209);

(statearr_16279_18282[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16233 === (3))){
var inst_16230 = (state_16232[(2)]);
var state_16232__$1 = state_16232;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16232__$1,inst_16230);
} else {
if((state_val_16233 === (12))){
var state_16232__$1 = state_16232;
var statearr_16280_18286 = state_16232__$1;
(statearr_16280_18286[(2)] = null);

(statearr_16280_18286[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16233 === (2))){
var inst_16169 = (state_16232[(10)]);
var inst_16172 = (state_16232[(12)]);
var inst_16172__$1 = cljs.core.__destructure_map(inst_16169);
var inst_16173 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16172__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_16174 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16172__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_16175 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16172__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_16232__$1 = (function (){var statearr_16283 = state_16232;
(statearr_16283[(15)] = inst_16173);

(statearr_16283[(12)] = inst_16172__$1);

(statearr_16283[(18)] = inst_16174);

return statearr_16283;
})();
return cljs.core.async.ioc_alts_BANG_(state_16232__$1,(4),inst_16175);
} else {
if((state_val_16233 === (23))){
var inst_16217 = (state_16232[(2)]);
var state_16232__$1 = state_16232;
if(cljs.core.truth_(inst_16217)){
var statearr_16284_18308 = state_16232__$1;
(statearr_16284_18308[(1)] = (24));

} else {
var statearr_16285_18310 = state_16232__$1;
(statearr_16285_18310[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16233 === (19))){
var inst_16212 = (state_16232[(2)]);
var state_16232__$1 = state_16232;
var statearr_16286_18316 = state_16232__$1;
(statearr_16286_18316[(2)] = inst_16212);

(statearr_16286_18316[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16233 === (11))){
var inst_16182 = (state_16232[(14)]);
var inst_16192 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_16182);
var state_16232__$1 = state_16232;
var statearr_16287_18318 = state_16232__$1;
(statearr_16287_18318[(2)] = inst_16192);

(statearr_16287_18318[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16233 === (9))){
var inst_16173 = (state_16232[(15)]);
var inst_16182 = (state_16232[(14)]);
var inst_16199 = (state_16232[(19)]);
var inst_16199__$1 = (inst_16173.cljs$core$IFn$_invoke$arity$1 ? inst_16173.cljs$core$IFn$_invoke$arity$1(inst_16182) : inst_16173.call(null,inst_16182));
var state_16232__$1 = (function (){var statearr_16288 = state_16232;
(statearr_16288[(19)] = inst_16199__$1);

return statearr_16288;
})();
if(cljs.core.truth_(inst_16199__$1)){
var statearr_16289_18321 = state_16232__$1;
(statearr_16289_18321[(1)] = (14));

} else {
var statearr_16290_18322 = state_16232__$1;
(statearr_16290_18322[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16233 === (5))){
var inst_16183 = (state_16232[(13)]);
var state_16232__$1 = state_16232;
var statearr_16291_18326 = state_16232__$1;
(statearr_16291_18326[(2)] = inst_16183);

(statearr_16291_18326[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16233 === (14))){
var inst_16199 = (state_16232[(19)]);
var state_16232__$1 = state_16232;
var statearr_16292_18327 = state_16232__$1;
(statearr_16292_18327[(2)] = inst_16199);

(statearr_16292_18327[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16233 === (26))){
var inst_16222 = (state_16232[(2)]);
var state_16232__$1 = state_16232;
var statearr_16293_18335 = state_16232__$1;
(statearr_16293_18335[(2)] = inst_16222);

(statearr_16293_18335[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16233 === (16))){
var inst_16214 = (state_16232[(2)]);
var state_16232__$1 = state_16232;
if(cljs.core.truth_(inst_16214)){
var statearr_16294_18340 = state_16232__$1;
(statearr_16294_18340[(1)] = (20));

} else {
var statearr_16295_18342 = state_16232__$1;
(statearr_16295_18342[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16233 === (10))){
var inst_16228 = (state_16232[(2)]);
var state_16232__$1 = state_16232;
var statearr_16296_18344 = state_16232__$1;
(statearr_16296_18344[(2)] = inst_16228);

(statearr_16296_18344[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16233 === (18))){
var inst_16206 = (state_16232[(16)]);
var state_16232__$1 = state_16232;
var statearr_16297_18347 = state_16232__$1;
(statearr_16297_18347[(2)] = inst_16206);

(statearr_16297_18347[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16233 === (8))){
var inst_16181 = (state_16232[(7)]);
var inst_16190 = (inst_16181 == null);
var state_16232__$1 = state_16232;
if(cljs.core.truth_(inst_16190)){
var statearr_16298_18349 = state_16232__$1;
(statearr_16298_18349[(1)] = (11));

} else {
var statearr_16300_18350 = state_16232__$1;
(statearr_16300_18350[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
}
}
}
}
}
}
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
return (function() {
var cljs$core$async$mix_$_state_machine__14469__auto__ = null;
var cljs$core$async$mix_$_state_machine__14469__auto____0 = (function (){
var statearr_16301 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16301[(0)] = cljs$core$async$mix_$_state_machine__14469__auto__);

(statearr_16301[(1)] = (1));

return statearr_16301;
});
var cljs$core$async$mix_$_state_machine__14469__auto____1 = (function (state_16232){
while(true){
var ret_value__14470__auto__ = (function (){try{while(true){
var result__14471__auto__ = switch__14468__auto__(state_16232);
if(cljs.core.keyword_identical_QMARK_(result__14471__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14471__auto__;
}
break;
}
}catch (e16302){var ex__14472__auto__ = e16302;
var statearr_16303_18353 = state_16232;
(statearr_16303_18353[(2)] = ex__14472__auto__);


if(cljs.core.seq((state_16232[(4)]))){
var statearr_16304_18356 = state_16232;
(statearr_16304_18356[(1)] = cljs.core.first((state_16232[(4)])));

} else {
throw ex__14472__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14470__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18358 = state_16232;
state_16232 = G__18358;
continue;
} else {
return ret_value__14470__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__14469__auto__ = function(state_16232){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__14469__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__14469__auto____1.call(this,state_16232);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__14469__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__14469__auto____0;
cljs$core$async$mix_$_state_machine__14469__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__14469__auto____1;
return cljs$core$async$mix_$_state_machine__14469__auto__;
})()
})();
var state__14650__auto__ = (function (){var statearr_16305 = f__14649__auto__();
(statearr_16305[(6)] = c__14648__auto___18226);

return statearr_16305;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14650__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_18372 = (function (p,v,ch,close_QMARK_){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5394__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5392__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_18372(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_18378 = (function (p,v,ch){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5394__auto__.call(null,p,v,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5392__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_18378(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_18393 = (function() {
var G__18394 = null;
var G__18394__1 = (function (p){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5394__auto__.call(null,p));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5392__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__18394__2 = (function (p,v){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5394__auto__.call(null,p,v));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5392__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__18394 = function(p,v){
switch(arguments.length){
case 1:
return G__18394__1.call(this,p);
case 2:
return G__18394__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__18394.cljs$core$IFn$_invoke$arity$1 = G__18394__1;
G__18394.cljs$core$IFn$_invoke$arity$2 = G__18394__2;
return G__18394;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__16323 = arguments.length;
switch (G__16323) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_18393(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_18393(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__16352 = arguments.length;
switch (G__16352) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5045__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__16341_SHARP_){
if(cljs.core.truth_((p1__16341_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__16341_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__16341_SHARP_.call(null,topic)))){
return p1__16341_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__16341_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async16357 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16357 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta16358){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta16358 = meta16358;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16357.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16359,meta16358__$1){
var self__ = this;
var _16359__$1 = this;
return (new cljs.core.async.t_cljs$core$async16357(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta16358__$1));
}));

(cljs.core.async.t_cljs$core$async16357.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16359){
var self__ = this;
var _16359__$1 = this;
return self__.meta16358;
}));

(cljs.core.async.t_cljs$core$async16357.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16357.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async16357.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16357.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async16357.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async16357.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async16357.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async16357.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta16358","meta16358",1937629960,null)], null);
}));

(cljs.core.async.t_cljs$core$async16357.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16357.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16357");

(cljs.core.async.t_cljs$core$async16357.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async16357");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16357.
 */
cljs.core.async.__GT_t_cljs$core$async16357 = (function cljs$core$async$__GT_t_cljs$core$async16357(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta16358){
return (new cljs.core.async.t_cljs$core$async16357(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta16358));
});

}

return (new cljs.core.async.t_cljs$core$async16357(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__14648__auto___18455 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14649__auto__ = (function (){var switch__14468__auto__ = (function (state_16457){
var state_val_16458 = (state_16457[(1)]);
if((state_val_16458 === (7))){
var inst_16453 = (state_16457[(2)]);
var state_16457__$1 = state_16457;
var statearr_16459_18457 = state_16457__$1;
(statearr_16459_18457[(2)] = inst_16453);

(statearr_16459_18457[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16458 === (20))){
var state_16457__$1 = state_16457;
var statearr_16461_18465 = state_16457__$1;
(statearr_16461_18465[(2)] = null);

(statearr_16461_18465[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16458 === (1))){
var state_16457__$1 = state_16457;
var statearr_16463_18469 = state_16457__$1;
(statearr_16463_18469[(2)] = null);

(statearr_16463_18469[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16458 === (24))){
var inst_16431 = (state_16457[(7)]);
var inst_16444 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_16431);
var state_16457__$1 = state_16457;
var statearr_16464_18471 = state_16457__$1;
(statearr_16464_18471[(2)] = inst_16444);

(statearr_16464_18471[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16458 === (4))){
var inst_16376 = (state_16457[(8)]);
var inst_16376__$1 = (state_16457[(2)]);
var inst_16377 = (inst_16376__$1 == null);
var state_16457__$1 = (function (){var statearr_16466 = state_16457;
(statearr_16466[(8)] = inst_16376__$1);

return statearr_16466;
})();
if(cljs.core.truth_(inst_16377)){
var statearr_16467_18474 = state_16457__$1;
(statearr_16467_18474[(1)] = (5));

} else {
var statearr_16468_18477 = state_16457__$1;
(statearr_16468_18477[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16458 === (15))){
var inst_16425 = (state_16457[(2)]);
var state_16457__$1 = state_16457;
var statearr_16471_18480 = state_16457__$1;
(statearr_16471_18480[(2)] = inst_16425);

(statearr_16471_18480[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16458 === (21))){
var inst_16450 = (state_16457[(2)]);
var state_16457__$1 = (function (){var statearr_16476 = state_16457;
(statearr_16476[(9)] = inst_16450);

return statearr_16476;
})();
var statearr_16477_18485 = state_16457__$1;
(statearr_16477_18485[(2)] = null);

(statearr_16477_18485[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16458 === (13))){
var inst_16403 = (state_16457[(10)]);
var inst_16406 = cljs.core.chunked_seq_QMARK_(inst_16403);
var state_16457__$1 = state_16457;
if(inst_16406){
var statearr_16478_18488 = state_16457__$1;
(statearr_16478_18488[(1)] = (16));

} else {
var statearr_16479_18489 = state_16457__$1;
(statearr_16479_18489[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16458 === (22))){
var inst_16441 = (state_16457[(2)]);
var state_16457__$1 = state_16457;
if(cljs.core.truth_(inst_16441)){
var statearr_16480_18491 = state_16457__$1;
(statearr_16480_18491[(1)] = (23));

} else {
var statearr_16481_18494 = state_16457__$1;
(statearr_16481_18494[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16458 === (6))){
var inst_16431 = (state_16457[(7)]);
var inst_16376 = (state_16457[(8)]);
var inst_16436 = (state_16457[(11)]);
var inst_16431__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_16376) : topic_fn.call(null,inst_16376));
var inst_16434 = cljs.core.deref(mults);
var inst_16436__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16434,inst_16431__$1);
var state_16457__$1 = (function (){var statearr_16482 = state_16457;
(statearr_16482[(7)] = inst_16431__$1);

(statearr_16482[(11)] = inst_16436__$1);

return statearr_16482;
})();
if(cljs.core.truth_(inst_16436__$1)){
var statearr_16483_18499 = state_16457__$1;
(statearr_16483_18499[(1)] = (19));

} else {
var statearr_16484_18503 = state_16457__$1;
(statearr_16484_18503[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16458 === (25))){
var inst_16446 = (state_16457[(2)]);
var state_16457__$1 = state_16457;
var statearr_16485_18504 = state_16457__$1;
(statearr_16485_18504[(2)] = inst_16446);

(statearr_16485_18504[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16458 === (17))){
var inst_16403 = (state_16457[(10)]);
var inst_16414 = cljs.core.first(inst_16403);
var inst_16416 = cljs.core.async.muxch_STAR_(inst_16414);
var inst_16417 = cljs.core.async.close_BANG_(inst_16416);
var inst_16418 = cljs.core.next(inst_16403);
var inst_16387 = inst_16418;
var inst_16388 = null;
var inst_16389 = (0);
var inst_16390 = (0);
var state_16457__$1 = (function (){var statearr_16486 = state_16457;
(statearr_16486[(12)] = inst_16389);

(statearr_16486[(13)] = inst_16387);

(statearr_16486[(14)] = inst_16417);

(statearr_16486[(15)] = inst_16390);

(statearr_16486[(16)] = inst_16388);

return statearr_16486;
})();
var statearr_16489_18505 = state_16457__$1;
(statearr_16489_18505[(2)] = null);

(statearr_16489_18505[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16458 === (3))){
var inst_16455 = (state_16457[(2)]);
var state_16457__$1 = state_16457;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16457__$1,inst_16455);
} else {
if((state_val_16458 === (12))){
var inst_16427 = (state_16457[(2)]);
var state_16457__$1 = state_16457;
var statearr_16490_18509 = state_16457__$1;
(statearr_16490_18509[(2)] = inst_16427);

(statearr_16490_18509[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16458 === (2))){
var state_16457__$1 = state_16457;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16457__$1,(4),ch);
} else {
if((state_val_16458 === (23))){
var state_16457__$1 = state_16457;
var statearr_16497_18513 = state_16457__$1;
(statearr_16497_18513[(2)] = null);

(statearr_16497_18513[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16458 === (19))){
var inst_16376 = (state_16457[(8)]);
var inst_16436 = (state_16457[(11)]);
var inst_16439 = cljs.core.async.muxch_STAR_(inst_16436);
var state_16457__$1 = state_16457;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16457__$1,(22),inst_16439,inst_16376);
} else {
if((state_val_16458 === (11))){
var inst_16387 = (state_16457[(13)]);
var inst_16403 = (state_16457[(10)]);
var inst_16403__$1 = cljs.core.seq(inst_16387);
var state_16457__$1 = (function (){var statearr_16505 = state_16457;
(statearr_16505[(10)] = inst_16403__$1);

return statearr_16505;
})();
if(inst_16403__$1){
var statearr_16510_18517 = state_16457__$1;
(statearr_16510_18517[(1)] = (13));

} else {
var statearr_16511_18518 = state_16457__$1;
(statearr_16511_18518[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16458 === (9))){
var inst_16429 = (state_16457[(2)]);
var state_16457__$1 = state_16457;
var statearr_16514_18519 = state_16457__$1;
(statearr_16514_18519[(2)] = inst_16429);

(statearr_16514_18519[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16458 === (5))){
var inst_16384 = cljs.core.deref(mults);
var inst_16385 = cljs.core.vals(inst_16384);
var inst_16386 = cljs.core.seq(inst_16385);
var inst_16387 = inst_16386;
var inst_16388 = null;
var inst_16389 = (0);
var inst_16390 = (0);
var state_16457__$1 = (function (){var statearr_16519 = state_16457;
(statearr_16519[(12)] = inst_16389);

(statearr_16519[(13)] = inst_16387);

(statearr_16519[(15)] = inst_16390);

(statearr_16519[(16)] = inst_16388);

return statearr_16519;
})();
var statearr_16520_18520 = state_16457__$1;
(statearr_16520_18520[(2)] = null);

(statearr_16520_18520[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16458 === (14))){
var state_16457__$1 = state_16457;
var statearr_16524_18521 = state_16457__$1;
(statearr_16524_18521[(2)] = null);

(statearr_16524_18521[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16458 === (16))){
var inst_16403 = (state_16457[(10)]);
var inst_16409 = cljs.core.chunk_first(inst_16403);
var inst_16410 = cljs.core.chunk_rest(inst_16403);
var inst_16411 = cljs.core.count(inst_16409);
var inst_16387 = inst_16410;
var inst_16388 = inst_16409;
var inst_16389 = inst_16411;
var inst_16390 = (0);
var state_16457__$1 = (function (){var statearr_16535 = state_16457;
(statearr_16535[(12)] = inst_16389);

(statearr_16535[(13)] = inst_16387);

(statearr_16535[(15)] = inst_16390);

(statearr_16535[(16)] = inst_16388);

return statearr_16535;
})();
var statearr_16536_18522 = state_16457__$1;
(statearr_16536_18522[(2)] = null);

(statearr_16536_18522[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16458 === (10))){
var inst_16389 = (state_16457[(12)]);
var inst_16387 = (state_16457[(13)]);
var inst_16390 = (state_16457[(15)]);
var inst_16388 = (state_16457[(16)]);
var inst_16396 = cljs.core._nth(inst_16388,inst_16390);
var inst_16398 = cljs.core.async.muxch_STAR_(inst_16396);
var inst_16399 = cljs.core.async.close_BANG_(inst_16398);
var inst_16400 = (inst_16390 + (1));
var tmp16521 = inst_16389;
var tmp16522 = inst_16387;
var tmp16523 = inst_16388;
var inst_16387__$1 = tmp16522;
var inst_16388__$1 = tmp16523;
var inst_16389__$1 = tmp16521;
var inst_16390__$1 = inst_16400;
var state_16457__$1 = (function (){var statearr_16541 = state_16457;
(statearr_16541[(17)] = inst_16399);

(statearr_16541[(12)] = inst_16389__$1);

(statearr_16541[(13)] = inst_16387__$1);

(statearr_16541[(15)] = inst_16390__$1);

(statearr_16541[(16)] = inst_16388__$1);

return statearr_16541;
})();
var statearr_16542_18524 = state_16457__$1;
(statearr_16542_18524[(2)] = null);

(statearr_16542_18524[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16458 === (18))){
var inst_16421 = (state_16457[(2)]);
var state_16457__$1 = state_16457;
var statearr_16543_18525 = state_16457__$1;
(statearr_16543_18525[(2)] = inst_16421);

(statearr_16543_18525[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16458 === (8))){
var inst_16389 = (state_16457[(12)]);
var inst_16390 = (state_16457[(15)]);
var inst_16393 = (inst_16390 < inst_16389);
var inst_16394 = inst_16393;
var state_16457__$1 = state_16457;
if(cljs.core.truth_(inst_16394)){
var statearr_16548_18526 = state_16457__$1;
(statearr_16548_18526[(1)] = (10));

} else {
var statearr_16553_18527 = state_16457__$1;
(statearr_16553_18527[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
}
}
}
}
}
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
return (function() {
var cljs$core$async$state_machine__14469__auto__ = null;
var cljs$core$async$state_machine__14469__auto____0 = (function (){
var statearr_16555 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16555[(0)] = cljs$core$async$state_machine__14469__auto__);

(statearr_16555[(1)] = (1));

return statearr_16555;
});
var cljs$core$async$state_machine__14469__auto____1 = (function (state_16457){
while(true){
var ret_value__14470__auto__ = (function (){try{while(true){
var result__14471__auto__ = switch__14468__auto__(state_16457);
if(cljs.core.keyword_identical_QMARK_(result__14471__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14471__auto__;
}
break;
}
}catch (e16556){var ex__14472__auto__ = e16556;
var statearr_16557_18530 = state_16457;
(statearr_16557_18530[(2)] = ex__14472__auto__);


if(cljs.core.seq((state_16457[(4)]))){
var statearr_16558_18531 = state_16457;
(statearr_16558_18531[(1)] = cljs.core.first((state_16457[(4)])));

} else {
throw ex__14472__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14470__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18534 = state_16457;
state_16457 = G__18534;
continue;
} else {
return ret_value__14470__auto__;
}
break;
}
});
cljs$core$async$state_machine__14469__auto__ = function(state_16457){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14469__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14469__auto____1.call(this,state_16457);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14469__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14469__auto____0;
cljs$core$async$state_machine__14469__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14469__auto____1;
return cljs$core$async$state_machine__14469__auto__;
})()
})();
var state__14650__auto__ = (function (){var statearr_16559 = f__14649__auto__();
(statearr_16559[(6)] = c__14648__auto___18455);

return statearr_16559;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14650__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__16563 = arguments.length;
switch (G__16563) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__16570 = arguments.length;
switch (G__16570) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__16579 = arguments.length;
switch (G__16579) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__14648__auto___18557 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14649__auto__ = (function (){var switch__14468__auto__ = (function (state_16644){
var state_val_16645 = (state_16644[(1)]);
if((state_val_16645 === (7))){
var state_16644__$1 = state_16644;
var statearr_16648_18558 = state_16644__$1;
(statearr_16648_18558[(2)] = null);

(statearr_16648_18558[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16645 === (1))){
var state_16644__$1 = state_16644;
var statearr_16649_18559 = state_16644__$1;
(statearr_16649_18559[(2)] = null);

(statearr_16649_18559[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16645 === (4))){
var inst_16590 = (state_16644[(7)]);
var inst_16591 = (state_16644[(8)]);
var inst_16594 = (inst_16591 < inst_16590);
var state_16644__$1 = state_16644;
if(cljs.core.truth_(inst_16594)){
var statearr_16650_18562 = state_16644__$1;
(statearr_16650_18562[(1)] = (6));

} else {
var statearr_16653_18564 = state_16644__$1;
(statearr_16653_18564[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16645 === (15))){
var inst_16629 = (state_16644[(9)]);
var inst_16635 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_16629);
var state_16644__$1 = state_16644;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16644__$1,(17),out,inst_16635);
} else {
if((state_val_16645 === (13))){
var inst_16629 = (state_16644[(9)]);
var inst_16629__$1 = (state_16644[(2)]);
var inst_16630 = cljs.core.some(cljs.core.nil_QMARK_,inst_16629__$1);
var state_16644__$1 = (function (){var statearr_16654 = state_16644;
(statearr_16654[(9)] = inst_16629__$1);

return statearr_16654;
})();
if(cljs.core.truth_(inst_16630)){
var statearr_16655_18568 = state_16644__$1;
(statearr_16655_18568[(1)] = (14));

} else {
var statearr_16656_18569 = state_16644__$1;
(statearr_16656_18569[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16645 === (6))){
var state_16644__$1 = state_16644;
var statearr_16657_18570 = state_16644__$1;
(statearr_16657_18570[(2)] = null);

(statearr_16657_18570[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16645 === (17))){
var inst_16637 = (state_16644[(2)]);
var state_16644__$1 = (function (){var statearr_16662 = state_16644;
(statearr_16662[(10)] = inst_16637);

return statearr_16662;
})();
var statearr_16664_18571 = state_16644__$1;
(statearr_16664_18571[(2)] = null);

(statearr_16664_18571[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16645 === (3))){
var inst_16642 = (state_16644[(2)]);
var state_16644__$1 = state_16644;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16644__$1,inst_16642);
} else {
if((state_val_16645 === (12))){
var _ = (function (){var statearr_16665 = state_16644;
(statearr_16665[(4)] = cljs.core.rest((state_16644[(4)])));

return statearr_16665;
})();
var state_16644__$1 = state_16644;
var ex16660 = (state_16644__$1[(2)]);
var statearr_16666_18572 = state_16644__$1;
(statearr_16666_18572[(5)] = ex16660);


if((ex16660 instanceof Object)){
var statearr_16673_18573 = state_16644__$1;
(statearr_16673_18573[(1)] = (11));

(statearr_16673_18573[(5)] = null);

} else {
throw ex16660;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16645 === (2))){
var inst_16589 = cljs.core.reset_BANG_(dctr,cnt);
var inst_16590 = cnt;
var inst_16591 = (0);
var state_16644__$1 = (function (){var statearr_16683 = state_16644;
(statearr_16683[(7)] = inst_16590);

(statearr_16683[(11)] = inst_16589);

(statearr_16683[(8)] = inst_16591);

return statearr_16683;
})();
var statearr_16684_18579 = state_16644__$1;
(statearr_16684_18579[(2)] = null);

(statearr_16684_18579[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16645 === (11))){
var inst_16601 = (state_16644[(2)]);
var inst_16603 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_16644__$1 = (function (){var statearr_16685 = state_16644;
(statearr_16685[(12)] = inst_16601);

return statearr_16685;
})();
var statearr_16686_18582 = state_16644__$1;
(statearr_16686_18582[(2)] = inst_16603);

(statearr_16686_18582[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16645 === (9))){
var inst_16591 = (state_16644[(8)]);
var _ = (function (){var statearr_16687 = state_16644;
(statearr_16687[(4)] = cljs.core.cons((12),(state_16644[(4)])));

return statearr_16687;
})();
var inst_16609 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_16591) : chs__$1.call(null,inst_16591));
var inst_16613 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_16591) : done.call(null,inst_16591));
var inst_16614 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_16609,inst_16613);
var ___$1 = (function (){var statearr_16688 = state_16644;
(statearr_16688[(4)] = cljs.core.rest((state_16644[(4)])));

return statearr_16688;
})();
var state_16644__$1 = state_16644;
var statearr_16690_18586 = state_16644__$1;
(statearr_16690_18586[(2)] = inst_16614);

(statearr_16690_18586[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16645 === (5))){
var inst_16627 = (state_16644[(2)]);
var state_16644__$1 = (function (){var statearr_16691 = state_16644;
(statearr_16691[(13)] = inst_16627);

return statearr_16691;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16644__$1,(13),dchan);
} else {
if((state_val_16645 === (14))){
var inst_16632 = cljs.core.async.close_BANG_(out);
var state_16644__$1 = state_16644;
var statearr_16692_18590 = state_16644__$1;
(statearr_16692_18590[(2)] = inst_16632);

(statearr_16692_18590[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16645 === (16))){
var inst_16640 = (state_16644[(2)]);
var state_16644__$1 = state_16644;
var statearr_16694_18612 = state_16644__$1;
(statearr_16694_18612[(2)] = inst_16640);

(statearr_16694_18612[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16645 === (10))){
var inst_16591 = (state_16644[(8)]);
var inst_16617 = (state_16644[(2)]);
var inst_16621 = (inst_16591 + (1));
var inst_16591__$1 = inst_16621;
var state_16644__$1 = (function (){var statearr_16695 = state_16644;
(statearr_16695[(8)] = inst_16591__$1);

(statearr_16695[(14)] = inst_16617);

return statearr_16695;
})();
var statearr_16696_18613 = state_16644__$1;
(statearr_16696_18613[(2)] = null);

(statearr_16696_18613[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16645 === (8))){
var inst_16625 = (state_16644[(2)]);
var state_16644__$1 = state_16644;
var statearr_16697_18614 = state_16644__$1;
(statearr_16697_18614[(2)] = inst_16625);

(statearr_16697_18614[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14469__auto__ = null;
var cljs$core$async$state_machine__14469__auto____0 = (function (){
var statearr_16704 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16704[(0)] = cljs$core$async$state_machine__14469__auto__);

(statearr_16704[(1)] = (1));

return statearr_16704;
});
var cljs$core$async$state_machine__14469__auto____1 = (function (state_16644){
while(true){
var ret_value__14470__auto__ = (function (){try{while(true){
var result__14471__auto__ = switch__14468__auto__(state_16644);
if(cljs.core.keyword_identical_QMARK_(result__14471__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14471__auto__;
}
break;
}
}catch (e16707){var ex__14472__auto__ = e16707;
var statearr_16708_18615 = state_16644;
(statearr_16708_18615[(2)] = ex__14472__auto__);


if(cljs.core.seq((state_16644[(4)]))){
var statearr_16709_18616 = state_16644;
(statearr_16709_18616[(1)] = cljs.core.first((state_16644[(4)])));

} else {
throw ex__14472__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14470__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18617 = state_16644;
state_16644 = G__18617;
continue;
} else {
return ret_value__14470__auto__;
}
break;
}
});
cljs$core$async$state_machine__14469__auto__ = function(state_16644){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14469__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14469__auto____1.call(this,state_16644);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14469__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14469__auto____0;
cljs$core$async$state_machine__14469__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14469__auto____1;
return cljs$core$async$state_machine__14469__auto__;
})()
})();
var state__14650__auto__ = (function (){var statearr_16710 = f__14649__auto__();
(statearr_16710[(6)] = c__14648__auto___18557);

return statearr_16710;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14650__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__16713 = arguments.length;
switch (G__16713) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14648__auto___18632 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14649__auto__ = (function (){var switch__14468__auto__ = (function (state_16746){
var state_val_16747 = (state_16746[(1)]);
if((state_val_16747 === (7))){
var inst_16726 = (state_16746[(7)]);
var inst_16725 = (state_16746[(8)]);
var inst_16725__$1 = (state_16746[(2)]);
var inst_16726__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16725__$1,(0),null);
var inst_16727 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16725__$1,(1),null);
var inst_16728 = (inst_16726__$1 == null);
var state_16746__$1 = (function (){var statearr_16748 = state_16746;
(statearr_16748[(9)] = inst_16727);

(statearr_16748[(7)] = inst_16726__$1);

(statearr_16748[(8)] = inst_16725__$1);

return statearr_16748;
})();
if(cljs.core.truth_(inst_16728)){
var statearr_16749_18638 = state_16746__$1;
(statearr_16749_18638[(1)] = (8));

} else {
var statearr_16750_18640 = state_16746__$1;
(statearr_16750_18640[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16747 === (1))){
var inst_16714 = cljs.core.vec(chs);
var inst_16715 = inst_16714;
var state_16746__$1 = (function (){var statearr_16751 = state_16746;
(statearr_16751[(10)] = inst_16715);

return statearr_16751;
})();
var statearr_16752_18644 = state_16746__$1;
(statearr_16752_18644[(2)] = null);

(statearr_16752_18644[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16747 === (4))){
var inst_16715 = (state_16746[(10)]);
var state_16746__$1 = state_16746;
return cljs.core.async.ioc_alts_BANG_(state_16746__$1,(7),inst_16715);
} else {
if((state_val_16747 === (6))){
var inst_16742 = (state_16746[(2)]);
var state_16746__$1 = state_16746;
var statearr_16753_18646 = state_16746__$1;
(statearr_16753_18646[(2)] = inst_16742);

(statearr_16753_18646[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16747 === (3))){
var inst_16744 = (state_16746[(2)]);
var state_16746__$1 = state_16746;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16746__$1,inst_16744);
} else {
if((state_val_16747 === (2))){
var inst_16715 = (state_16746[(10)]);
var inst_16718 = cljs.core.count(inst_16715);
var inst_16719 = (inst_16718 > (0));
var state_16746__$1 = state_16746;
if(cljs.core.truth_(inst_16719)){
var statearr_16760_18648 = state_16746__$1;
(statearr_16760_18648[(1)] = (4));

} else {
var statearr_16761_18649 = state_16746__$1;
(statearr_16761_18649[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16747 === (11))){
var inst_16715 = (state_16746[(10)]);
var inst_16735 = (state_16746[(2)]);
var tmp16754 = inst_16715;
var inst_16715__$1 = tmp16754;
var state_16746__$1 = (function (){var statearr_16762 = state_16746;
(statearr_16762[(11)] = inst_16735);

(statearr_16762[(10)] = inst_16715__$1);

return statearr_16762;
})();
var statearr_16765_18654 = state_16746__$1;
(statearr_16765_18654[(2)] = null);

(statearr_16765_18654[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16747 === (9))){
var inst_16726 = (state_16746[(7)]);
var state_16746__$1 = state_16746;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16746__$1,(11),out,inst_16726);
} else {
if((state_val_16747 === (5))){
var inst_16740 = cljs.core.async.close_BANG_(out);
var state_16746__$1 = state_16746;
var statearr_16766_18656 = state_16746__$1;
(statearr_16766_18656[(2)] = inst_16740);

(statearr_16766_18656[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16747 === (10))){
var inst_16738 = (state_16746[(2)]);
var state_16746__$1 = state_16746;
var statearr_16767_18657 = state_16746__$1;
(statearr_16767_18657[(2)] = inst_16738);

(statearr_16767_18657[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16747 === (8))){
var inst_16727 = (state_16746[(9)]);
var inst_16726 = (state_16746[(7)]);
var inst_16725 = (state_16746[(8)]);
var inst_16715 = (state_16746[(10)]);
var inst_16730 = (function (){var cs = inst_16715;
var vec__16721 = inst_16725;
var v = inst_16726;
var c = inst_16727;
return (function (p1__16711_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__16711_SHARP_);
});
})();
var inst_16731 = cljs.core.filterv(inst_16730,inst_16715);
var inst_16715__$1 = inst_16731;
var state_16746__$1 = (function (){var statearr_16768 = state_16746;
(statearr_16768[(10)] = inst_16715__$1);

return statearr_16768;
})();
var statearr_16769_18663 = state_16746__$1;
(statearr_16769_18663[(2)] = null);

(statearr_16769_18663[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
});
return (function() {
var cljs$core$async$state_machine__14469__auto__ = null;
var cljs$core$async$state_machine__14469__auto____0 = (function (){
var statearr_16771 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16771[(0)] = cljs$core$async$state_machine__14469__auto__);

(statearr_16771[(1)] = (1));

return statearr_16771;
});
var cljs$core$async$state_machine__14469__auto____1 = (function (state_16746){
while(true){
var ret_value__14470__auto__ = (function (){try{while(true){
var result__14471__auto__ = switch__14468__auto__(state_16746);
if(cljs.core.keyword_identical_QMARK_(result__14471__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14471__auto__;
}
break;
}
}catch (e16772){var ex__14472__auto__ = e16772;
var statearr_16773_18667 = state_16746;
(statearr_16773_18667[(2)] = ex__14472__auto__);


if(cljs.core.seq((state_16746[(4)]))){
var statearr_16774_18669 = state_16746;
(statearr_16774_18669[(1)] = cljs.core.first((state_16746[(4)])));

} else {
throw ex__14472__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14470__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18670 = state_16746;
state_16746 = G__18670;
continue;
} else {
return ret_value__14470__auto__;
}
break;
}
});
cljs$core$async$state_machine__14469__auto__ = function(state_16746){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14469__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14469__auto____1.call(this,state_16746);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14469__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14469__auto____0;
cljs$core$async$state_machine__14469__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14469__auto____1;
return cljs$core$async$state_machine__14469__auto__;
})()
})();
var state__14650__auto__ = (function (){var statearr_16775 = f__14649__auto__();
(statearr_16775[(6)] = c__14648__auto___18632);

return statearr_16775;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14650__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__16777 = arguments.length;
switch (G__16777) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14648__auto___18676 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14649__auto__ = (function (){var switch__14468__auto__ = (function (state_16806){
var state_val_16807 = (state_16806[(1)]);
if((state_val_16807 === (7))){
var inst_16784 = (state_16806[(7)]);
var inst_16784__$1 = (state_16806[(2)]);
var inst_16787 = (inst_16784__$1 == null);
var inst_16788 = cljs.core.not(inst_16787);
var state_16806__$1 = (function (){var statearr_16810 = state_16806;
(statearr_16810[(7)] = inst_16784__$1);

return statearr_16810;
})();
if(inst_16788){
var statearr_16811_18680 = state_16806__$1;
(statearr_16811_18680[(1)] = (8));

} else {
var statearr_16812_18681 = state_16806__$1;
(statearr_16812_18681[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16807 === (1))){
var inst_16779 = (0);
var state_16806__$1 = (function (){var statearr_16813 = state_16806;
(statearr_16813[(8)] = inst_16779);

return statearr_16813;
})();
var statearr_16814_18685 = state_16806__$1;
(statearr_16814_18685[(2)] = null);

(statearr_16814_18685[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16807 === (4))){
var state_16806__$1 = state_16806;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16806__$1,(7),ch);
} else {
if((state_val_16807 === (6))){
var inst_16801 = (state_16806[(2)]);
var state_16806__$1 = state_16806;
var statearr_16815_18692 = state_16806__$1;
(statearr_16815_18692[(2)] = inst_16801);

(statearr_16815_18692[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16807 === (3))){
var inst_16803 = (state_16806[(2)]);
var inst_16804 = cljs.core.async.close_BANG_(out);
var state_16806__$1 = (function (){var statearr_16817 = state_16806;
(statearr_16817[(9)] = inst_16803);

return statearr_16817;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_16806__$1,inst_16804);
} else {
if((state_val_16807 === (2))){
var inst_16779 = (state_16806[(8)]);
var inst_16781 = (inst_16779 < n);
var state_16806__$1 = state_16806;
if(cljs.core.truth_(inst_16781)){
var statearr_16818_18695 = state_16806__$1;
(statearr_16818_18695[(1)] = (4));

} else {
var statearr_16819_18697 = state_16806__$1;
(statearr_16819_18697[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16807 === (11))){
var inst_16779 = (state_16806[(8)]);
var inst_16791 = (state_16806[(2)]);
var inst_16794 = (inst_16779 + (1));
var inst_16779__$1 = inst_16794;
var state_16806__$1 = (function (){var statearr_16820 = state_16806;
(statearr_16820[(10)] = inst_16791);

(statearr_16820[(8)] = inst_16779__$1);

return statearr_16820;
})();
var statearr_16821_18700 = state_16806__$1;
(statearr_16821_18700[(2)] = null);

(statearr_16821_18700[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16807 === (9))){
var state_16806__$1 = state_16806;
var statearr_16822_18701 = state_16806__$1;
(statearr_16822_18701[(2)] = null);

(statearr_16822_18701[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16807 === (5))){
var state_16806__$1 = state_16806;
var statearr_16823_18702 = state_16806__$1;
(statearr_16823_18702[(2)] = null);

(statearr_16823_18702[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16807 === (10))){
var inst_16798 = (state_16806[(2)]);
var state_16806__$1 = state_16806;
var statearr_16824_18703 = state_16806__$1;
(statearr_16824_18703[(2)] = inst_16798);

(statearr_16824_18703[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16807 === (8))){
var inst_16784 = (state_16806[(7)]);
var state_16806__$1 = state_16806;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16806__$1,(11),out,inst_16784);
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
}
}
});
return (function() {
var cljs$core$async$state_machine__14469__auto__ = null;
var cljs$core$async$state_machine__14469__auto____0 = (function (){
var statearr_16825 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16825[(0)] = cljs$core$async$state_machine__14469__auto__);

(statearr_16825[(1)] = (1));

return statearr_16825;
});
var cljs$core$async$state_machine__14469__auto____1 = (function (state_16806){
while(true){
var ret_value__14470__auto__ = (function (){try{while(true){
var result__14471__auto__ = switch__14468__auto__(state_16806);
if(cljs.core.keyword_identical_QMARK_(result__14471__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14471__auto__;
}
break;
}
}catch (e16826){var ex__14472__auto__ = e16826;
var statearr_16827_18711 = state_16806;
(statearr_16827_18711[(2)] = ex__14472__auto__);


if(cljs.core.seq((state_16806[(4)]))){
var statearr_16828_18712 = state_16806;
(statearr_16828_18712[(1)] = cljs.core.first((state_16806[(4)])));

} else {
throw ex__14472__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14470__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18715 = state_16806;
state_16806 = G__18715;
continue;
} else {
return ret_value__14470__auto__;
}
break;
}
});
cljs$core$async$state_machine__14469__auto__ = function(state_16806){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14469__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14469__auto____1.call(this,state_16806);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14469__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14469__auto____0;
cljs$core$async$state_machine__14469__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14469__auto____1;
return cljs$core$async$state_machine__14469__auto__;
})()
})();
var state__14650__auto__ = (function (){var statearr_16829 = f__14649__auto__();
(statearr_16829[(6)] = c__14648__auto___18676);

return statearr_16829;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14650__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async16831 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16831 = (function (f,ch,meta16832){
this.f = f;
this.ch = ch;
this.meta16832 = meta16832;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16831.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16833,meta16832__$1){
var self__ = this;
var _16833__$1 = this;
return (new cljs.core.async.t_cljs$core$async16831(self__.f,self__.ch,meta16832__$1));
}));

(cljs.core.async.t_cljs$core$async16831.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16833){
var self__ = this;
var _16833__$1 = this;
return self__.meta16832;
}));

(cljs.core.async.t_cljs$core$async16831.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16831.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16831.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16831.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16831.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async16835 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16835 = (function (f,ch,meta16832,_,fn1,meta16836){
this.f = f;
this.ch = ch;
this.meta16832 = meta16832;
this._ = _;
this.fn1 = fn1;
this.meta16836 = meta16836;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16835.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16837,meta16836__$1){
var self__ = this;
var _16837__$1 = this;
return (new cljs.core.async.t_cljs$core$async16835(self__.f,self__.ch,self__.meta16832,self__._,self__.fn1,meta16836__$1));
}));

(cljs.core.async.t_cljs$core$async16835.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16837){
var self__ = this;
var _16837__$1 = this;
return self__.meta16836;
}));

(cljs.core.async.t_cljs$core$async16835.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16835.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async16835.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async16835.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__16830_SHARP_){
var G__16841 = (((p1__16830_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__16830_SHARP_) : self__.f.call(null,p1__16830_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__16841) : f1.call(null,G__16841));
});
}));

(cljs.core.async.t_cljs$core$async16835.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16832","meta16832",325984527,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async16831","cljs.core.async/t_cljs$core$async16831",16696000,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta16836","meta16836",1856338270,null)], null);
}));

(cljs.core.async.t_cljs$core$async16835.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16835.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16835");

(cljs.core.async.t_cljs$core$async16835.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async16835");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16835.
 */
cljs.core.async.__GT_t_cljs$core$async16835 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async16835(f__$1,ch__$1,meta16832__$1,___$2,fn1__$1,meta16836){
return (new cljs.core.async.t_cljs$core$async16835(f__$1,ch__$1,meta16832__$1,___$2,fn1__$1,meta16836));
});

}

return (new cljs.core.async.t_cljs$core$async16835(self__.f,self__.ch,self__.meta16832,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__5043__auto__ = ret;
if(cljs.core.truth_(and__5043__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5043__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__16846 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__16846) : self__.f.call(null,G__16846));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async16831.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16831.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async16831.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16832","meta16832",325984527,null)], null);
}));

(cljs.core.async.t_cljs$core$async16831.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16831.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16831");

(cljs.core.async.t_cljs$core$async16831.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async16831");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16831.
 */
cljs.core.async.__GT_t_cljs$core$async16831 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async16831(f__$1,ch__$1,meta16832){
return (new cljs.core.async.t_cljs$core$async16831(f__$1,ch__$1,meta16832));
});

}

return (new cljs.core.async.t_cljs$core$async16831(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async16852 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16852 = (function (f,ch,meta16853){
this.f = f;
this.ch = ch;
this.meta16853 = meta16853;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16852.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16854,meta16853__$1){
var self__ = this;
var _16854__$1 = this;
return (new cljs.core.async.t_cljs$core$async16852(self__.f,self__.ch,meta16853__$1));
}));

(cljs.core.async.t_cljs$core$async16852.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16854){
var self__ = this;
var _16854__$1 = this;
return self__.meta16853;
}));

(cljs.core.async.t_cljs$core$async16852.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16852.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16852.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16852.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async16852.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16852.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async16852.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16853","meta16853",-1358054935,null)], null);
}));

(cljs.core.async.t_cljs$core$async16852.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16852.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16852");

(cljs.core.async.t_cljs$core$async16852.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async16852");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16852.
 */
cljs.core.async.__GT_t_cljs$core$async16852 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async16852(f__$1,ch__$1,meta16853){
return (new cljs.core.async.t_cljs$core$async16852(f__$1,ch__$1,meta16853));
});

}

return (new cljs.core.async.t_cljs$core$async16852(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async16860 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16860 = (function (p,ch,meta16861){
this.p = p;
this.ch = ch;
this.meta16861 = meta16861;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16860.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16862,meta16861__$1){
var self__ = this;
var _16862__$1 = this;
return (new cljs.core.async.t_cljs$core$async16860(self__.p,self__.ch,meta16861__$1));
}));

(cljs.core.async.t_cljs$core$async16860.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16862){
var self__ = this;
var _16862__$1 = this;
return self__.meta16861;
}));

(cljs.core.async.t_cljs$core$async16860.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16860.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16860.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16860.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16860.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async16860.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16860.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async16860.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16861","meta16861",-1151954247,null)], null);
}));

(cljs.core.async.t_cljs$core$async16860.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16860.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16860");

(cljs.core.async.t_cljs$core$async16860.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async16860");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16860.
 */
cljs.core.async.__GT_t_cljs$core$async16860 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async16860(p__$1,ch__$1,meta16861){
return (new cljs.core.async.t_cljs$core$async16860(p__$1,ch__$1,meta16861));
});

}

return (new cljs.core.async.t_cljs$core$async16860(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__16890 = arguments.length;
switch (G__16890) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14648__auto___18757 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14649__auto__ = (function (){var switch__14468__auto__ = (function (state_16916){
var state_val_16917 = (state_16916[(1)]);
if((state_val_16917 === (7))){
var inst_16912 = (state_16916[(2)]);
var state_16916__$1 = state_16916;
var statearr_16920_18759 = state_16916__$1;
(statearr_16920_18759[(2)] = inst_16912);

(statearr_16920_18759[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16917 === (1))){
var state_16916__$1 = state_16916;
var statearr_16921_18760 = state_16916__$1;
(statearr_16921_18760[(2)] = null);

(statearr_16921_18760[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16917 === (4))){
var inst_16897 = (state_16916[(7)]);
var inst_16897__$1 = (state_16916[(2)]);
var inst_16898 = (inst_16897__$1 == null);
var state_16916__$1 = (function (){var statearr_16926 = state_16916;
(statearr_16926[(7)] = inst_16897__$1);

return statearr_16926;
})();
if(cljs.core.truth_(inst_16898)){
var statearr_16927_18764 = state_16916__$1;
(statearr_16927_18764[(1)] = (5));

} else {
var statearr_16928_18765 = state_16916__$1;
(statearr_16928_18765[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16917 === (6))){
var inst_16897 = (state_16916[(7)]);
var inst_16903 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_16897) : p.call(null,inst_16897));
var state_16916__$1 = state_16916;
if(cljs.core.truth_(inst_16903)){
var statearr_16931_18767 = state_16916__$1;
(statearr_16931_18767[(1)] = (8));

} else {
var statearr_16932_18768 = state_16916__$1;
(statearr_16932_18768[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16917 === (3))){
var inst_16914 = (state_16916[(2)]);
var state_16916__$1 = state_16916;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16916__$1,inst_16914);
} else {
if((state_val_16917 === (2))){
var state_16916__$1 = state_16916;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16916__$1,(4),ch);
} else {
if((state_val_16917 === (11))){
var inst_16906 = (state_16916[(2)]);
var state_16916__$1 = state_16916;
var statearr_16939_18770 = state_16916__$1;
(statearr_16939_18770[(2)] = inst_16906);

(statearr_16939_18770[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16917 === (9))){
var state_16916__$1 = state_16916;
var statearr_16946_18772 = state_16916__$1;
(statearr_16946_18772[(2)] = null);

(statearr_16946_18772[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16917 === (5))){
var inst_16900 = cljs.core.async.close_BANG_(out);
var state_16916__$1 = state_16916;
var statearr_16947_18773 = state_16916__$1;
(statearr_16947_18773[(2)] = inst_16900);

(statearr_16947_18773[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16917 === (10))){
var inst_16909 = (state_16916[(2)]);
var state_16916__$1 = (function (){var statearr_16949 = state_16916;
(statearr_16949[(8)] = inst_16909);

return statearr_16949;
})();
var statearr_16951_18774 = state_16916__$1;
(statearr_16951_18774[(2)] = null);

(statearr_16951_18774[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16917 === (8))){
var inst_16897 = (state_16916[(7)]);
var state_16916__$1 = state_16916;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16916__$1,(11),out,inst_16897);
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
}
}
});
return (function() {
var cljs$core$async$state_machine__14469__auto__ = null;
var cljs$core$async$state_machine__14469__auto____0 = (function (){
var statearr_16953 = [null,null,null,null,null,null,null,null,null];
(statearr_16953[(0)] = cljs$core$async$state_machine__14469__auto__);

(statearr_16953[(1)] = (1));

return statearr_16953;
});
var cljs$core$async$state_machine__14469__auto____1 = (function (state_16916){
while(true){
var ret_value__14470__auto__ = (function (){try{while(true){
var result__14471__auto__ = switch__14468__auto__(state_16916);
if(cljs.core.keyword_identical_QMARK_(result__14471__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14471__auto__;
}
break;
}
}catch (e16954){var ex__14472__auto__ = e16954;
var statearr_16955_18777 = state_16916;
(statearr_16955_18777[(2)] = ex__14472__auto__);


if(cljs.core.seq((state_16916[(4)]))){
var statearr_16956_18779 = state_16916;
(statearr_16956_18779[(1)] = cljs.core.first((state_16916[(4)])));

} else {
throw ex__14472__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14470__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18781 = state_16916;
state_16916 = G__18781;
continue;
} else {
return ret_value__14470__auto__;
}
break;
}
});
cljs$core$async$state_machine__14469__auto__ = function(state_16916){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14469__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14469__auto____1.call(this,state_16916);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14469__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14469__auto____0;
cljs$core$async$state_machine__14469__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14469__auto____1;
return cljs$core$async$state_machine__14469__auto__;
})()
})();
var state__14650__auto__ = (function (){var statearr_16959 = f__14649__auto__();
(statearr_16959[(6)] = c__14648__auto___18757);

return statearr_16959;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14650__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__16971 = arguments.length;
switch (G__16971) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__14648__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14649__auto__ = (function (){var switch__14468__auto__ = (function (state_17064){
var state_val_17069 = (state_17064[(1)]);
if((state_val_17069 === (7))){
var inst_17060 = (state_17064[(2)]);
var state_17064__$1 = state_17064;
var statearr_17075_18798 = state_17064__$1;
(statearr_17075_18798[(2)] = inst_17060);

(statearr_17075_18798[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17069 === (20))){
var inst_17022 = (state_17064[(7)]);
var inst_17037 = (state_17064[(2)]);
var inst_17038 = cljs.core.next(inst_17022);
var inst_17006 = inst_17038;
var inst_17007 = null;
var inst_17008 = (0);
var inst_17009 = (0);
var state_17064__$1 = (function (){var statearr_17078 = state_17064;
(statearr_17078[(8)] = inst_17007);

(statearr_17078[(9)] = inst_17006);

(statearr_17078[(10)] = inst_17009);

(statearr_17078[(11)] = inst_17008);

(statearr_17078[(12)] = inst_17037);

return statearr_17078;
})();
var statearr_17079_18805 = state_17064__$1;
(statearr_17079_18805[(2)] = null);

(statearr_17079_18805[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17069 === (1))){
var state_17064__$1 = state_17064;
var statearr_17080_18806 = state_17064__$1;
(statearr_17080_18806[(2)] = null);

(statearr_17080_18806[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17069 === (4))){
var inst_16993 = (state_17064[(13)]);
var inst_16993__$1 = (state_17064[(2)]);
var inst_16994 = (inst_16993__$1 == null);
var state_17064__$1 = (function (){var statearr_17083 = state_17064;
(statearr_17083[(13)] = inst_16993__$1);

return statearr_17083;
})();
if(cljs.core.truth_(inst_16994)){
var statearr_17084_18808 = state_17064__$1;
(statearr_17084_18808[(1)] = (5));

} else {
var statearr_17085_18809 = state_17064__$1;
(statearr_17085_18809[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17069 === (15))){
var state_17064__$1 = state_17064;
var statearr_17094_18813 = state_17064__$1;
(statearr_17094_18813[(2)] = null);

(statearr_17094_18813[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17069 === (21))){
var state_17064__$1 = state_17064;
var statearr_17095_18814 = state_17064__$1;
(statearr_17095_18814[(2)] = null);

(statearr_17095_18814[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17069 === (13))){
var inst_17007 = (state_17064[(8)]);
var inst_17006 = (state_17064[(9)]);
var inst_17009 = (state_17064[(10)]);
var inst_17008 = (state_17064[(11)]);
var inst_17016 = (state_17064[(2)]);
var inst_17017 = (inst_17009 + (1));
var tmp17088 = inst_17007;
var tmp17089 = inst_17006;
var tmp17090 = inst_17008;
var inst_17006__$1 = tmp17089;
var inst_17007__$1 = tmp17088;
var inst_17008__$1 = tmp17090;
var inst_17009__$1 = inst_17017;
var state_17064__$1 = (function (){var statearr_17100 = state_17064;
(statearr_17100[(8)] = inst_17007__$1);

(statearr_17100[(9)] = inst_17006__$1);

(statearr_17100[(14)] = inst_17016);

(statearr_17100[(10)] = inst_17009__$1);

(statearr_17100[(11)] = inst_17008__$1);

return statearr_17100;
})();
var statearr_17101_18822 = state_17064__$1;
(statearr_17101_18822[(2)] = null);

(statearr_17101_18822[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17069 === (22))){
var state_17064__$1 = state_17064;
var statearr_17102_18826 = state_17064__$1;
(statearr_17102_18826[(2)] = null);

(statearr_17102_18826[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17069 === (6))){
var inst_16993 = (state_17064[(13)]);
var inst_17004 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_16993) : f.call(null,inst_16993));
var inst_17005 = cljs.core.seq(inst_17004);
var inst_17006 = inst_17005;
var inst_17007 = null;
var inst_17008 = (0);
var inst_17009 = (0);
var state_17064__$1 = (function (){var statearr_17103 = state_17064;
(statearr_17103[(8)] = inst_17007);

(statearr_17103[(9)] = inst_17006);

(statearr_17103[(10)] = inst_17009);

(statearr_17103[(11)] = inst_17008);

return statearr_17103;
})();
var statearr_17104_18832 = state_17064__$1;
(statearr_17104_18832[(2)] = null);

(statearr_17104_18832[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17069 === (17))){
var inst_17022 = (state_17064[(7)]);
var inst_17026 = cljs.core.chunk_first(inst_17022);
var inst_17027 = cljs.core.chunk_rest(inst_17022);
var inst_17028 = cljs.core.count(inst_17026);
var inst_17006 = inst_17027;
var inst_17007 = inst_17026;
var inst_17008 = inst_17028;
var inst_17009 = (0);
var state_17064__$1 = (function (){var statearr_17110 = state_17064;
(statearr_17110[(8)] = inst_17007);

(statearr_17110[(9)] = inst_17006);

(statearr_17110[(10)] = inst_17009);

(statearr_17110[(11)] = inst_17008);

return statearr_17110;
})();
var statearr_17112_18837 = state_17064__$1;
(statearr_17112_18837[(2)] = null);

(statearr_17112_18837[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17069 === (3))){
var inst_17062 = (state_17064[(2)]);
var state_17064__$1 = state_17064;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17064__$1,inst_17062);
} else {
if((state_val_17069 === (12))){
var inst_17046 = (state_17064[(2)]);
var state_17064__$1 = state_17064;
var statearr_17116_18838 = state_17064__$1;
(statearr_17116_18838[(2)] = inst_17046);

(statearr_17116_18838[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17069 === (2))){
var state_17064__$1 = state_17064;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17064__$1,(4),in$);
} else {
if((state_val_17069 === (23))){
var inst_17058 = (state_17064[(2)]);
var state_17064__$1 = state_17064;
var statearr_17120_18843 = state_17064__$1;
(statearr_17120_18843[(2)] = inst_17058);

(statearr_17120_18843[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17069 === (19))){
var inst_17041 = (state_17064[(2)]);
var state_17064__$1 = state_17064;
var statearr_17122_18847 = state_17064__$1;
(statearr_17122_18847[(2)] = inst_17041);

(statearr_17122_18847[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17069 === (11))){
var inst_17022 = (state_17064[(7)]);
var inst_17006 = (state_17064[(9)]);
var inst_17022__$1 = cljs.core.seq(inst_17006);
var state_17064__$1 = (function (){var statearr_17127 = state_17064;
(statearr_17127[(7)] = inst_17022__$1);

return statearr_17127;
})();
if(inst_17022__$1){
var statearr_17128_18848 = state_17064__$1;
(statearr_17128_18848[(1)] = (14));

} else {
var statearr_17130_18850 = state_17064__$1;
(statearr_17130_18850[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17069 === (9))){
var inst_17048 = (state_17064[(2)]);
var inst_17049 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_17064__$1 = (function (){var statearr_17135 = state_17064;
(statearr_17135[(15)] = inst_17048);

return statearr_17135;
})();
if(cljs.core.truth_(inst_17049)){
var statearr_17136_18851 = state_17064__$1;
(statearr_17136_18851[(1)] = (21));

} else {
var statearr_17137_18853 = state_17064__$1;
(statearr_17137_18853[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17069 === (5))){
var inst_16996 = cljs.core.async.close_BANG_(out);
var state_17064__$1 = state_17064;
var statearr_17138_18856 = state_17064__$1;
(statearr_17138_18856[(2)] = inst_16996);

(statearr_17138_18856[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17069 === (14))){
var inst_17022 = (state_17064[(7)]);
var inst_17024 = cljs.core.chunked_seq_QMARK_(inst_17022);
var state_17064__$1 = state_17064;
if(inst_17024){
var statearr_17139_18880 = state_17064__$1;
(statearr_17139_18880[(1)] = (17));

} else {
var statearr_17140_18881 = state_17064__$1;
(statearr_17140_18881[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17069 === (16))){
var inst_17044 = (state_17064[(2)]);
var state_17064__$1 = state_17064;
var statearr_17141_18883 = state_17064__$1;
(statearr_17141_18883[(2)] = inst_17044);

(statearr_17141_18883[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17069 === (10))){
var inst_17007 = (state_17064[(8)]);
var inst_17009 = (state_17064[(10)]);
var inst_17014 = cljs.core._nth(inst_17007,inst_17009);
var state_17064__$1 = state_17064;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17064__$1,(13),out,inst_17014);
} else {
if((state_val_17069 === (18))){
var inst_17022 = (state_17064[(7)]);
var inst_17031 = cljs.core.first(inst_17022);
var state_17064__$1 = state_17064;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17064__$1,(20),out,inst_17031);
} else {
if((state_val_17069 === (8))){
var inst_17009 = (state_17064[(10)]);
var inst_17008 = (state_17064[(11)]);
var inst_17011 = (inst_17009 < inst_17008);
var inst_17012 = inst_17011;
var state_17064__$1 = state_17064;
if(cljs.core.truth_(inst_17012)){
var statearr_17149_18884 = state_17064__$1;
(statearr_17149_18884[(1)] = (10));

} else {
var statearr_17150_18885 = state_17064__$1;
(statearr_17150_18885[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
}
}
}
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
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__14469__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__14469__auto____0 = (function (){
var statearr_17157 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17157[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__14469__auto__);

(statearr_17157[(1)] = (1));

return statearr_17157;
});
var cljs$core$async$mapcat_STAR__$_state_machine__14469__auto____1 = (function (state_17064){
while(true){
var ret_value__14470__auto__ = (function (){try{while(true){
var result__14471__auto__ = switch__14468__auto__(state_17064);
if(cljs.core.keyword_identical_QMARK_(result__14471__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14471__auto__;
}
break;
}
}catch (e17160){var ex__14472__auto__ = e17160;
var statearr_17161_18895 = state_17064;
(statearr_17161_18895[(2)] = ex__14472__auto__);


if(cljs.core.seq((state_17064[(4)]))){
var statearr_17162_18896 = state_17064;
(statearr_17162_18896[(1)] = cljs.core.first((state_17064[(4)])));

} else {
throw ex__14472__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14470__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18902 = state_17064;
state_17064 = G__18902;
continue;
} else {
return ret_value__14470__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__14469__auto__ = function(state_17064){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__14469__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__14469__auto____1.call(this,state_17064);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__14469__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__14469__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__14469__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__14469__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__14469__auto__;
})()
})();
var state__14650__auto__ = (function (){var statearr_17165 = f__14649__auto__();
(statearr_17165[(6)] = c__14648__auto__);

return statearr_17165;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14650__auto__);
}));

return c__14648__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__17170 = arguments.length;
switch (G__17170) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__17176 = arguments.length;
switch (G__17176) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__17202 = arguments.length;
switch (G__17202) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14648__auto___18945 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14649__auto__ = (function (){var switch__14468__auto__ = (function (state_17237){
var state_val_17238 = (state_17237[(1)]);
if((state_val_17238 === (7))){
var inst_17232 = (state_17237[(2)]);
var state_17237__$1 = state_17237;
var statearr_17239_18950 = state_17237__$1;
(statearr_17239_18950[(2)] = inst_17232);

(statearr_17239_18950[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17238 === (1))){
var inst_17214 = null;
var state_17237__$1 = (function (){var statearr_17241 = state_17237;
(statearr_17241[(7)] = inst_17214);

return statearr_17241;
})();
var statearr_17242_18954 = state_17237__$1;
(statearr_17242_18954[(2)] = null);

(statearr_17242_18954[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17238 === (4))){
var inst_17217 = (state_17237[(8)]);
var inst_17217__$1 = (state_17237[(2)]);
var inst_17218 = (inst_17217__$1 == null);
var inst_17219 = cljs.core.not(inst_17218);
var state_17237__$1 = (function (){var statearr_17247 = state_17237;
(statearr_17247[(8)] = inst_17217__$1);

return statearr_17247;
})();
if(inst_17219){
var statearr_17248_18956 = state_17237__$1;
(statearr_17248_18956[(1)] = (5));

} else {
var statearr_17249_18957 = state_17237__$1;
(statearr_17249_18957[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17238 === (6))){
var state_17237__$1 = state_17237;
var statearr_17250_18959 = state_17237__$1;
(statearr_17250_18959[(2)] = null);

(statearr_17250_18959[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17238 === (3))){
var inst_17234 = (state_17237[(2)]);
var inst_17235 = cljs.core.async.close_BANG_(out);
var state_17237__$1 = (function (){var statearr_17251 = state_17237;
(statearr_17251[(9)] = inst_17234);

return statearr_17251;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_17237__$1,inst_17235);
} else {
if((state_val_17238 === (2))){
var state_17237__$1 = state_17237;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17237__$1,(4),ch);
} else {
if((state_val_17238 === (11))){
var inst_17217 = (state_17237[(8)]);
var inst_17226 = (state_17237[(2)]);
var inst_17214 = inst_17217;
var state_17237__$1 = (function (){var statearr_17258 = state_17237;
(statearr_17258[(7)] = inst_17214);

(statearr_17258[(10)] = inst_17226);

return statearr_17258;
})();
var statearr_17259_18967 = state_17237__$1;
(statearr_17259_18967[(2)] = null);

(statearr_17259_18967[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17238 === (9))){
var inst_17217 = (state_17237[(8)]);
var state_17237__$1 = state_17237;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17237__$1,(11),out,inst_17217);
} else {
if((state_val_17238 === (5))){
var inst_17214 = (state_17237[(7)]);
var inst_17217 = (state_17237[(8)]);
var inst_17221 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17217,inst_17214);
var state_17237__$1 = state_17237;
if(inst_17221){
var statearr_17262_18971 = state_17237__$1;
(statearr_17262_18971[(1)] = (8));

} else {
var statearr_17263_18976 = state_17237__$1;
(statearr_17263_18976[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17238 === (10))){
var inst_17229 = (state_17237[(2)]);
var state_17237__$1 = state_17237;
var statearr_17264_18977 = state_17237__$1;
(statearr_17264_18977[(2)] = inst_17229);

(statearr_17264_18977[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17238 === (8))){
var inst_17214 = (state_17237[(7)]);
var tmp17261 = inst_17214;
var inst_17214__$1 = tmp17261;
var state_17237__$1 = (function (){var statearr_17265 = state_17237;
(statearr_17265[(7)] = inst_17214__$1);

return statearr_17265;
})();
var statearr_17266_18981 = state_17237__$1;
(statearr_17266_18981[(2)] = null);

(statearr_17266_18981[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
});
return (function() {
var cljs$core$async$state_machine__14469__auto__ = null;
var cljs$core$async$state_machine__14469__auto____0 = (function (){
var statearr_17275 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17275[(0)] = cljs$core$async$state_machine__14469__auto__);

(statearr_17275[(1)] = (1));

return statearr_17275;
});
var cljs$core$async$state_machine__14469__auto____1 = (function (state_17237){
while(true){
var ret_value__14470__auto__ = (function (){try{while(true){
var result__14471__auto__ = switch__14468__auto__(state_17237);
if(cljs.core.keyword_identical_QMARK_(result__14471__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14471__auto__;
}
break;
}
}catch (e17280){var ex__14472__auto__ = e17280;
var statearr_17281_18996 = state_17237;
(statearr_17281_18996[(2)] = ex__14472__auto__);


if(cljs.core.seq((state_17237[(4)]))){
var statearr_17291_18999 = state_17237;
(statearr_17291_18999[(1)] = cljs.core.first((state_17237[(4)])));

} else {
throw ex__14472__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14470__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19000 = state_17237;
state_17237 = G__19000;
continue;
} else {
return ret_value__14470__auto__;
}
break;
}
});
cljs$core$async$state_machine__14469__auto__ = function(state_17237){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14469__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14469__auto____1.call(this,state_17237);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14469__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14469__auto____0;
cljs$core$async$state_machine__14469__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14469__auto____1;
return cljs$core$async$state_machine__14469__auto__;
})()
})();
var state__14650__auto__ = (function (){var statearr_17292 = f__14649__auto__();
(statearr_17292[(6)] = c__14648__auto___18945);

return statearr_17292;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14650__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__17294 = arguments.length;
switch (G__17294) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14648__auto___19041 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14649__auto__ = (function (){var switch__14468__auto__ = (function (state_17335){
var state_val_17336 = (state_17335[(1)]);
if((state_val_17336 === (7))){
var inst_17330 = (state_17335[(2)]);
var state_17335__$1 = state_17335;
var statearr_17339_19043 = state_17335__$1;
(statearr_17339_19043[(2)] = inst_17330);

(statearr_17339_19043[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17336 === (1))){
var inst_17296 = (new Array(n));
var inst_17297 = inst_17296;
var inst_17298 = (0);
var state_17335__$1 = (function (){var statearr_17340 = state_17335;
(statearr_17340[(7)] = inst_17298);

(statearr_17340[(8)] = inst_17297);

return statearr_17340;
})();
var statearr_17341_19045 = state_17335__$1;
(statearr_17341_19045[(2)] = null);

(statearr_17341_19045[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17336 === (4))){
var inst_17301 = (state_17335[(9)]);
var inst_17301__$1 = (state_17335[(2)]);
var inst_17302 = (inst_17301__$1 == null);
var inst_17303 = cljs.core.not(inst_17302);
var state_17335__$1 = (function (){var statearr_17342 = state_17335;
(statearr_17342[(9)] = inst_17301__$1);

return statearr_17342;
})();
if(inst_17303){
var statearr_17343_19051 = state_17335__$1;
(statearr_17343_19051[(1)] = (5));

} else {
var statearr_17344_19052 = state_17335__$1;
(statearr_17344_19052[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17336 === (15))){
var inst_17324 = (state_17335[(2)]);
var state_17335__$1 = state_17335;
var statearr_17345_19053 = state_17335__$1;
(statearr_17345_19053[(2)] = inst_17324);

(statearr_17345_19053[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17336 === (13))){
var state_17335__$1 = state_17335;
var statearr_17346_19055 = state_17335__$1;
(statearr_17346_19055[(2)] = null);

(statearr_17346_19055[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17336 === (6))){
var inst_17298 = (state_17335[(7)]);
var inst_17320 = (inst_17298 > (0));
var state_17335__$1 = state_17335;
if(cljs.core.truth_(inst_17320)){
var statearr_17347_19057 = state_17335__$1;
(statearr_17347_19057[(1)] = (12));

} else {
var statearr_17348_19059 = state_17335__$1;
(statearr_17348_19059[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17336 === (3))){
var inst_17332 = (state_17335[(2)]);
var state_17335__$1 = state_17335;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17335__$1,inst_17332);
} else {
if((state_val_17336 === (12))){
var inst_17297 = (state_17335[(8)]);
var inst_17322 = cljs.core.vec(inst_17297);
var state_17335__$1 = state_17335;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17335__$1,(15),out,inst_17322);
} else {
if((state_val_17336 === (2))){
var state_17335__$1 = state_17335;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17335__$1,(4),ch);
} else {
if((state_val_17336 === (11))){
var inst_17314 = (state_17335[(2)]);
var inst_17315 = (new Array(n));
var inst_17297 = inst_17315;
var inst_17298 = (0);
var state_17335__$1 = (function (){var statearr_17349 = state_17335;
(statearr_17349[(7)] = inst_17298);

(statearr_17349[(10)] = inst_17314);

(statearr_17349[(8)] = inst_17297);

return statearr_17349;
})();
var statearr_17350_19060 = state_17335__$1;
(statearr_17350_19060[(2)] = null);

(statearr_17350_19060[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17336 === (9))){
var inst_17297 = (state_17335[(8)]);
var inst_17312 = cljs.core.vec(inst_17297);
var state_17335__$1 = state_17335;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17335__$1,(11),out,inst_17312);
} else {
if((state_val_17336 === (5))){
var inst_17298 = (state_17335[(7)]);
var inst_17297 = (state_17335[(8)]);
var inst_17301 = (state_17335[(9)]);
var inst_17307 = (state_17335[(11)]);
var inst_17305 = (inst_17297[inst_17298] = inst_17301);
var inst_17307__$1 = (inst_17298 + (1));
var inst_17308 = (inst_17307__$1 < n);
var state_17335__$1 = (function (){var statearr_17351 = state_17335;
(statearr_17351[(12)] = inst_17305);

(statearr_17351[(11)] = inst_17307__$1);

return statearr_17351;
})();
if(cljs.core.truth_(inst_17308)){
var statearr_17352_19062 = state_17335__$1;
(statearr_17352_19062[(1)] = (8));

} else {
var statearr_17353_19063 = state_17335__$1;
(statearr_17353_19063[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17336 === (14))){
var inst_17327 = (state_17335[(2)]);
var inst_17328 = cljs.core.async.close_BANG_(out);
var state_17335__$1 = (function (){var statearr_17355 = state_17335;
(statearr_17355[(13)] = inst_17327);

return statearr_17355;
})();
var statearr_17356_19068 = state_17335__$1;
(statearr_17356_19068[(2)] = inst_17328);

(statearr_17356_19068[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17336 === (10))){
var inst_17318 = (state_17335[(2)]);
var state_17335__$1 = state_17335;
var statearr_17357_19072 = state_17335__$1;
(statearr_17357_19072[(2)] = inst_17318);

(statearr_17357_19072[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17336 === (8))){
var inst_17297 = (state_17335[(8)]);
var inst_17307 = (state_17335[(11)]);
var tmp17354 = inst_17297;
var inst_17297__$1 = tmp17354;
var inst_17298 = inst_17307;
var state_17335__$1 = (function (){var statearr_17358 = state_17335;
(statearr_17358[(7)] = inst_17298);

(statearr_17358[(8)] = inst_17297__$1);

return statearr_17358;
})();
var statearr_17359_19074 = state_17335__$1;
(statearr_17359_19074[(2)] = null);

(statearr_17359_19074[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14469__auto__ = null;
var cljs$core$async$state_machine__14469__auto____0 = (function (){
var statearr_17360 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17360[(0)] = cljs$core$async$state_machine__14469__auto__);

(statearr_17360[(1)] = (1));

return statearr_17360;
});
var cljs$core$async$state_machine__14469__auto____1 = (function (state_17335){
while(true){
var ret_value__14470__auto__ = (function (){try{while(true){
var result__14471__auto__ = switch__14468__auto__(state_17335);
if(cljs.core.keyword_identical_QMARK_(result__14471__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14471__auto__;
}
break;
}
}catch (e17367){var ex__14472__auto__ = e17367;
var statearr_17368_19081 = state_17335;
(statearr_17368_19081[(2)] = ex__14472__auto__);


if(cljs.core.seq((state_17335[(4)]))){
var statearr_17369_19082 = state_17335;
(statearr_17369_19082[(1)] = cljs.core.first((state_17335[(4)])));

} else {
throw ex__14472__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14470__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19083 = state_17335;
state_17335 = G__19083;
continue;
} else {
return ret_value__14470__auto__;
}
break;
}
});
cljs$core$async$state_machine__14469__auto__ = function(state_17335){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14469__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14469__auto____1.call(this,state_17335);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14469__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14469__auto____0;
cljs$core$async$state_machine__14469__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14469__auto____1;
return cljs$core$async$state_machine__14469__auto__;
})()
})();
var state__14650__auto__ = (function (){var statearr_17371 = f__14649__auto__();
(statearr_17371[(6)] = c__14648__auto___19041);

return statearr_17371;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14650__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__17373 = arguments.length;
switch (G__17373) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14648__auto___19088 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14649__auto__ = (function (){var switch__14468__auto__ = (function (state_17426){
var state_val_17427 = (state_17426[(1)]);
if((state_val_17427 === (7))){
var inst_17422 = (state_17426[(2)]);
var state_17426__$1 = state_17426;
var statearr_17428_19089 = state_17426__$1;
(statearr_17428_19089[(2)] = inst_17422);

(statearr_17428_19089[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17427 === (1))){
var inst_17378 = [];
var inst_17379 = inst_17378;
var inst_17380 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_17426__$1 = (function (){var statearr_17434 = state_17426;
(statearr_17434[(7)] = inst_17379);

(statearr_17434[(8)] = inst_17380);

return statearr_17434;
})();
var statearr_17435_19104 = state_17426__$1;
(statearr_17435_19104[(2)] = null);

(statearr_17435_19104[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17427 === (4))){
var inst_17383 = (state_17426[(9)]);
var inst_17383__$1 = (state_17426[(2)]);
var inst_17384 = (inst_17383__$1 == null);
var inst_17385 = cljs.core.not(inst_17384);
var state_17426__$1 = (function (){var statearr_17436 = state_17426;
(statearr_17436[(9)] = inst_17383__$1);

return statearr_17436;
})();
if(inst_17385){
var statearr_17437_19105 = state_17426__$1;
(statearr_17437_19105[(1)] = (5));

} else {
var statearr_17438_19106 = state_17426__$1;
(statearr_17438_19106[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17427 === (15))){
var inst_17379 = (state_17426[(7)]);
var inst_17414 = cljs.core.vec(inst_17379);
var state_17426__$1 = state_17426;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17426__$1,(18),out,inst_17414);
} else {
if((state_val_17427 === (13))){
var inst_17409 = (state_17426[(2)]);
var state_17426__$1 = state_17426;
var statearr_17447_19108 = state_17426__$1;
(statearr_17447_19108[(2)] = inst_17409);

(statearr_17447_19108[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17427 === (6))){
var inst_17379 = (state_17426[(7)]);
var inst_17411 = inst_17379.length;
var inst_17412 = (inst_17411 > (0));
var state_17426__$1 = state_17426;
if(cljs.core.truth_(inst_17412)){
var statearr_17451_19109 = state_17426__$1;
(statearr_17451_19109[(1)] = (15));

} else {
var statearr_17452_19110 = state_17426__$1;
(statearr_17452_19110[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17427 === (17))){
var inst_17419 = (state_17426[(2)]);
var inst_17420 = cljs.core.async.close_BANG_(out);
var state_17426__$1 = (function (){var statearr_17453 = state_17426;
(statearr_17453[(10)] = inst_17419);

return statearr_17453;
})();
var statearr_17454_19111 = state_17426__$1;
(statearr_17454_19111[(2)] = inst_17420);

(statearr_17454_19111[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17427 === (3))){
var inst_17424 = (state_17426[(2)]);
var state_17426__$1 = state_17426;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17426__$1,inst_17424);
} else {
if((state_val_17427 === (12))){
var inst_17379 = (state_17426[(7)]);
var inst_17402 = cljs.core.vec(inst_17379);
var state_17426__$1 = state_17426;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17426__$1,(14),out,inst_17402);
} else {
if((state_val_17427 === (2))){
var state_17426__$1 = state_17426;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17426__$1,(4),ch);
} else {
if((state_val_17427 === (11))){
var inst_17383 = (state_17426[(9)]);
var inst_17379 = (state_17426[(7)]);
var inst_17387 = (state_17426[(11)]);
var inst_17399 = inst_17379.push(inst_17383);
var tmp17463 = inst_17379;
var inst_17379__$1 = tmp17463;
var inst_17380 = inst_17387;
var state_17426__$1 = (function (){var statearr_17469 = state_17426;
(statearr_17469[(7)] = inst_17379__$1);

(statearr_17469[(8)] = inst_17380);

(statearr_17469[(12)] = inst_17399);

return statearr_17469;
})();
var statearr_17471_19116 = state_17426__$1;
(statearr_17471_19116[(2)] = null);

(statearr_17471_19116[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17427 === (9))){
var inst_17380 = (state_17426[(8)]);
var inst_17393 = cljs.core.keyword_identical_QMARK_(inst_17380,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_17426__$1 = state_17426;
var statearr_17473_19117 = state_17426__$1;
(statearr_17473_19117[(2)] = inst_17393);

(statearr_17473_19117[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17427 === (5))){
var inst_17383 = (state_17426[(9)]);
var inst_17387 = (state_17426[(11)]);
var inst_17390 = (state_17426[(13)]);
var inst_17380 = (state_17426[(8)]);
var inst_17387__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_17383) : f.call(null,inst_17383));
var inst_17390__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17387__$1,inst_17380);
var state_17426__$1 = (function (){var statearr_17476 = state_17426;
(statearr_17476[(11)] = inst_17387__$1);

(statearr_17476[(13)] = inst_17390__$1);

return statearr_17476;
})();
if(inst_17390__$1){
var statearr_17477_19123 = state_17426__$1;
(statearr_17477_19123[(1)] = (8));

} else {
var statearr_17478_19124 = state_17426__$1;
(statearr_17478_19124[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17427 === (14))){
var inst_17383 = (state_17426[(9)]);
var inst_17387 = (state_17426[(11)]);
var inst_17404 = (state_17426[(2)]);
var inst_17405 = [];
var inst_17406 = inst_17405.push(inst_17383);
var inst_17379 = inst_17405;
var inst_17380 = inst_17387;
var state_17426__$1 = (function (){var statearr_17479 = state_17426;
(statearr_17479[(14)] = inst_17404);

(statearr_17479[(7)] = inst_17379);

(statearr_17479[(15)] = inst_17406);

(statearr_17479[(8)] = inst_17380);

return statearr_17479;
})();
var statearr_17481_19125 = state_17426__$1;
(statearr_17481_19125[(2)] = null);

(statearr_17481_19125[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17427 === (16))){
var state_17426__$1 = state_17426;
var statearr_17482_19126 = state_17426__$1;
(statearr_17482_19126[(2)] = null);

(statearr_17482_19126[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17427 === (10))){
var inst_17397 = (state_17426[(2)]);
var state_17426__$1 = state_17426;
if(cljs.core.truth_(inst_17397)){
var statearr_17483_19127 = state_17426__$1;
(statearr_17483_19127[(1)] = (11));

} else {
var statearr_17484_19128 = state_17426__$1;
(statearr_17484_19128[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17427 === (18))){
var inst_17416 = (state_17426[(2)]);
var state_17426__$1 = state_17426;
var statearr_17485_19132 = state_17426__$1;
(statearr_17485_19132[(2)] = inst_17416);

(statearr_17485_19132[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17427 === (8))){
var inst_17390 = (state_17426[(13)]);
var state_17426__$1 = state_17426;
var statearr_17486_19134 = state_17426__$1;
(statearr_17486_19134[(2)] = inst_17390);

(statearr_17486_19134[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
return (function() {
var cljs$core$async$state_machine__14469__auto__ = null;
var cljs$core$async$state_machine__14469__auto____0 = (function (){
var statearr_17490 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17490[(0)] = cljs$core$async$state_machine__14469__auto__);

(statearr_17490[(1)] = (1));

return statearr_17490;
});
var cljs$core$async$state_machine__14469__auto____1 = (function (state_17426){
while(true){
var ret_value__14470__auto__ = (function (){try{while(true){
var result__14471__auto__ = switch__14468__auto__(state_17426);
if(cljs.core.keyword_identical_QMARK_(result__14471__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14471__auto__;
}
break;
}
}catch (e17491){var ex__14472__auto__ = e17491;
var statearr_17492_19135 = state_17426;
(statearr_17492_19135[(2)] = ex__14472__auto__);


if(cljs.core.seq((state_17426[(4)]))){
var statearr_17494_19136 = state_17426;
(statearr_17494_19136[(1)] = cljs.core.first((state_17426[(4)])));

} else {
throw ex__14472__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14470__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19140 = state_17426;
state_17426 = G__19140;
continue;
} else {
return ret_value__14470__auto__;
}
break;
}
});
cljs$core$async$state_machine__14469__auto__ = function(state_17426){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14469__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14469__auto____1.call(this,state_17426);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14469__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14469__auto____0;
cljs$core$async$state_machine__14469__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14469__auto____1;
return cljs$core$async$state_machine__14469__auto__;
})()
})();
var state__14650__auto__ = (function (){var statearr_17495 = f__14649__auto__();
(statearr_17495[(6)] = c__14648__auto___19088);

return statearr_17495;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14650__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
