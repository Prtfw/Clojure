// Compiled by ClojureScript 1.7.228 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args21784 = [];
var len__19349__auto___21790 = arguments.length;
var i__19350__auto___21791 = (0);
while(true){
if((i__19350__auto___21791 < len__19349__auto___21790)){
args21784.push((arguments[i__19350__auto___21791]));

var G__21792 = (i__19350__auto___21791 + (1));
i__19350__auto___21791 = G__21792;
continue;
} else {
}
break;
}

var G__21786 = args21784.length;
switch (G__21786) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21784.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async21787 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21787 = (function (f,blockable,meta21788){
this.f = f;
this.blockable = blockable;
this.meta21788 = meta21788;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21787.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21789,meta21788__$1){
var self__ = this;
var _21789__$1 = this;
return (new cljs.core.async.t_cljs$core$async21787(self__.f,self__.blockable,meta21788__$1));
});

cljs.core.async.t_cljs$core$async21787.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21789){
var self__ = this;
var _21789__$1 = this;
return self__.meta21788;
});

cljs.core.async.t_cljs$core$async21787.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async21787.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async21787.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async21787.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async21787.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta21788","meta21788",1946586194,null)], null);
});

cljs.core.async.t_cljs$core$async21787.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21787.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21787";

cljs.core.async.t_cljs$core$async21787.cljs$lang$ctorPrWriter = (function (this__18889__auto__,writer__18890__auto__,opt__18891__auto__){
return cljs.core._write.call(null,writer__18890__auto__,"cljs.core.async/t_cljs$core$async21787");
});

cljs.core.async.__GT_t_cljs$core$async21787 = (function cljs$core$async$__GT_t_cljs$core$async21787(f__$1,blockable__$1,meta21788){
return (new cljs.core.async.t_cljs$core$async21787(f__$1,blockable__$1,meta21788));
});

}

return (new cljs.core.async.t_cljs$core$async21787(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
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
var args21796 = [];
var len__19349__auto___21799 = arguments.length;
var i__19350__auto___21800 = (0);
while(true){
if((i__19350__auto___21800 < len__19349__auto___21799)){
args21796.push((arguments[i__19350__auto___21800]));

var G__21801 = (i__19350__auto___21800 + (1));
i__19350__auto___21800 = G__21801;
continue;
} else {
}
break;
}

var G__21798 = args21796.length;
switch (G__21798) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21796.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args21803 = [];
var len__19349__auto___21806 = arguments.length;
var i__19350__auto___21807 = (0);
while(true){
if((i__19350__auto___21807 < len__19349__auto___21806)){
args21803.push((arguments[i__19350__auto___21807]));

var G__21808 = (i__19350__auto___21807 + (1));
i__19350__auto___21807 = G__21808;
continue;
} else {
}
break;
}

var G__21805 = args21803.length;
switch (G__21805) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21803.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
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
var args21810 = [];
var len__19349__auto___21813 = arguments.length;
var i__19350__auto___21814 = (0);
while(true){
if((i__19350__auto___21814 < len__19349__auto___21813)){
args21810.push((arguments[i__19350__auto___21814]));

var G__21815 = (i__19350__auto___21814 + (1));
i__19350__auto___21814 = G__21815;
continue;
} else {
}
break;
}

var G__21812 = args21810.length;
switch (G__21812) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21810.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_21817 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_21817);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_21817,ret){
return (function (){
return fn1.call(null,val_21817);
});})(val_21817,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args21818 = [];
var len__19349__auto___21821 = arguments.length;
var i__19350__auto___21822 = (0);
while(true){
if((i__19350__auto___21822 < len__19349__auto___21821)){
args21818.push((arguments[i__19350__auto___21822]));

var G__21823 = (i__19350__auto___21822 + (1));
i__19350__auto___21822 = G__21823;
continue;
} else {
}
break;
}

var G__21820 = args21818.length;
switch (G__21820) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21818.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4423__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4423__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__19194__auto___21825 = n;
var x_21826 = (0);
while(true){
if((x_21826 < n__19194__auto___21825)){
(a[x_21826] = (0));

var G__21827 = (x_21826 + (1));
x_21826 = G__21827;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__21828 = (i + (1));
i = G__21828;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async21832 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21832 = (function (alt_flag,flag,meta21833){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta21833 = meta21833;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21832.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_21834,meta21833__$1){
var self__ = this;
var _21834__$1 = this;
return (new cljs.core.async.t_cljs$core$async21832(self__.alt_flag,self__.flag,meta21833__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async21832.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_21834){
var self__ = this;
var _21834__$1 = this;
return self__.meta21833;
});})(flag))
;

cljs.core.async.t_cljs$core$async21832.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async21832.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async21832.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async21832.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async21832.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta21833","meta21833",1399871491,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async21832.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21832.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21832";

cljs.core.async.t_cljs$core$async21832.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__18889__auto__,writer__18890__auto__,opt__18891__auto__){
return cljs.core._write.call(null,writer__18890__auto__,"cljs.core.async/t_cljs$core$async21832");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async21832 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async21832(alt_flag__$1,flag__$1,meta21833){
return (new cljs.core.async.t_cljs$core$async21832(alt_flag__$1,flag__$1,meta21833));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async21832(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async21838 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21838 = (function (alt_handler,flag,cb,meta21839){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta21839 = meta21839;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21838.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21840,meta21839__$1){
var self__ = this;
var _21840__$1 = this;
return (new cljs.core.async.t_cljs$core$async21838(self__.alt_handler,self__.flag,self__.cb,meta21839__$1));
});

cljs.core.async.t_cljs$core$async21838.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21840){
var self__ = this;
var _21840__$1 = this;
return self__.meta21839;
});

cljs.core.async.t_cljs$core$async21838.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async21838.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async21838.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async21838.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async21838.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta21839","meta21839",564347522,null)], null);
});

cljs.core.async.t_cljs$core$async21838.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21838.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21838";

cljs.core.async.t_cljs$core$async21838.cljs$lang$ctorPrWriter = (function (this__18889__auto__,writer__18890__auto__,opt__18891__auto__){
return cljs.core._write.call(null,writer__18890__auto__,"cljs.core.async/t_cljs$core$async21838");
});

cljs.core.async.__GT_t_cljs$core$async21838 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async21838(alt_handler__$1,flag__$1,cb__$1,meta21839){
return (new cljs.core.async.t_cljs$core$async21838(alt_handler__$1,flag__$1,cb__$1,meta21839));
});

}

return (new cljs.core.async.t_cljs$core$async21838(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__21841_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__21841_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__21842_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__21842_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__18291__auto__ = wport;
if(cljs.core.truth_(or__18291__auto__)){
return or__18291__auto__;
} else {
return port;
}
})()], null));
} else {
var G__21843 = (i + (1));
i = G__21843;
continue;
}
} else {
return null;
}
break;
}
})();
var or__18291__auto__ = ret;
if(cljs.core.truth_(or__18291__auto__)){
return or__18291__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__18279__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__18279__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__18279__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
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
var args__19356__auto__ = [];
var len__19349__auto___21849 = arguments.length;
var i__19350__auto___21850 = (0);
while(true){
if((i__19350__auto___21850 < len__19349__auto___21849)){
args__19356__auto__.push((arguments[i__19350__auto___21850]));

var G__21851 = (i__19350__auto___21850 + (1));
i__19350__auto___21850 = G__21851;
continue;
} else {
}
break;
}

var argseq__19357__auto__ = ((((1) < args__19356__auto__.length))?(new cljs.core.IndexedSeq(args__19356__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19357__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__21846){
var map__21847 = p__21846;
var map__21847__$1 = ((((!((map__21847 == null)))?((((map__21847.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21847.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21847):map__21847);
var opts = map__21847__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq21844){
var G__21845 = cljs.core.first.call(null,seq21844);
var seq21844__$1 = cljs.core.next.call(null,seq21844);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__21845,seq21844__$1);
});
/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
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
var args21852 = [];
var len__19349__auto___21902 = arguments.length;
var i__19350__auto___21903 = (0);
while(true){
if((i__19350__auto___21903 < len__19349__auto___21902)){
args21852.push((arguments[i__19350__auto___21903]));

var G__21904 = (i__19350__auto___21903 + (1));
i__19350__auto___21903 = G__21904;
continue;
} else {
}
break;
}

var G__21854 = args21852.length;
switch (G__21854) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21852.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__21739__auto___21906 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21739__auto___21906){
return (function (){
var f__21740__auto__ = (function (){var switch__21627__auto__ = ((function (c__21739__auto___21906){
return (function (state_21878){
var state_val_21879 = (state_21878[(1)]);
if((state_val_21879 === (7))){
var inst_21874 = (state_21878[(2)]);
var state_21878__$1 = state_21878;
var statearr_21880_21907 = state_21878__$1;
(statearr_21880_21907[(2)] = inst_21874);

(statearr_21880_21907[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21879 === (1))){
var state_21878__$1 = state_21878;
var statearr_21881_21908 = state_21878__$1;
(statearr_21881_21908[(2)] = null);

(statearr_21881_21908[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21879 === (4))){
var inst_21857 = (state_21878[(7)]);
var inst_21857__$1 = (state_21878[(2)]);
var inst_21858 = (inst_21857__$1 == null);
var state_21878__$1 = (function (){var statearr_21882 = state_21878;
(statearr_21882[(7)] = inst_21857__$1);

return statearr_21882;
})();
if(cljs.core.truth_(inst_21858)){
var statearr_21883_21909 = state_21878__$1;
(statearr_21883_21909[(1)] = (5));

} else {
var statearr_21884_21910 = state_21878__$1;
(statearr_21884_21910[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21879 === (13))){
var state_21878__$1 = state_21878;
var statearr_21885_21911 = state_21878__$1;
(statearr_21885_21911[(2)] = null);

(statearr_21885_21911[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21879 === (6))){
var inst_21857 = (state_21878[(7)]);
var state_21878__$1 = state_21878;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21878__$1,(11),to,inst_21857);
} else {
if((state_val_21879 === (3))){
var inst_21876 = (state_21878[(2)]);
var state_21878__$1 = state_21878;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21878__$1,inst_21876);
} else {
if((state_val_21879 === (12))){
var state_21878__$1 = state_21878;
var statearr_21886_21912 = state_21878__$1;
(statearr_21886_21912[(2)] = null);

(statearr_21886_21912[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21879 === (2))){
var state_21878__$1 = state_21878;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21878__$1,(4),from);
} else {
if((state_val_21879 === (11))){
var inst_21867 = (state_21878[(2)]);
var state_21878__$1 = state_21878;
if(cljs.core.truth_(inst_21867)){
var statearr_21887_21913 = state_21878__$1;
(statearr_21887_21913[(1)] = (12));

} else {
var statearr_21888_21914 = state_21878__$1;
(statearr_21888_21914[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21879 === (9))){
var state_21878__$1 = state_21878;
var statearr_21889_21915 = state_21878__$1;
(statearr_21889_21915[(2)] = null);

(statearr_21889_21915[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21879 === (5))){
var state_21878__$1 = state_21878;
if(cljs.core.truth_(close_QMARK_)){
var statearr_21890_21916 = state_21878__$1;
(statearr_21890_21916[(1)] = (8));

} else {
var statearr_21891_21917 = state_21878__$1;
(statearr_21891_21917[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21879 === (14))){
var inst_21872 = (state_21878[(2)]);
var state_21878__$1 = state_21878;
var statearr_21892_21918 = state_21878__$1;
(statearr_21892_21918[(2)] = inst_21872);

(statearr_21892_21918[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21879 === (10))){
var inst_21864 = (state_21878[(2)]);
var state_21878__$1 = state_21878;
var statearr_21893_21919 = state_21878__$1;
(statearr_21893_21919[(2)] = inst_21864);

(statearr_21893_21919[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21879 === (8))){
var inst_21861 = cljs.core.async.close_BANG_.call(null,to);
var state_21878__$1 = state_21878;
var statearr_21894_21920 = state_21878__$1;
(statearr_21894_21920[(2)] = inst_21861);

(statearr_21894_21920[(1)] = (10));


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
});})(c__21739__auto___21906))
;
return ((function (switch__21627__auto__,c__21739__auto___21906){
return (function() {
var cljs$core$async$state_machine__21628__auto__ = null;
var cljs$core$async$state_machine__21628__auto____0 = (function (){
var statearr_21898 = [null,null,null,null,null,null,null,null];
(statearr_21898[(0)] = cljs$core$async$state_machine__21628__auto__);

(statearr_21898[(1)] = (1));

return statearr_21898;
});
var cljs$core$async$state_machine__21628__auto____1 = (function (state_21878){
while(true){
var ret_value__21629__auto__ = (function (){try{while(true){
var result__21630__auto__ = switch__21627__auto__.call(null,state_21878);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21630__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21630__auto__;
}
break;
}
}catch (e21899){if((e21899 instanceof Object)){
var ex__21631__auto__ = e21899;
var statearr_21900_21921 = state_21878;
(statearr_21900_21921[(5)] = ex__21631__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21878);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21899;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21629__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21922 = state_21878;
state_21878 = G__21922;
continue;
} else {
return ret_value__21629__auto__;
}
break;
}
});
cljs$core$async$state_machine__21628__auto__ = function(state_21878){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21628__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21628__auto____1.call(this,state_21878);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21628__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21628__auto____0;
cljs$core$async$state_machine__21628__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21628__auto____1;
return cljs$core$async$state_machine__21628__auto__;
})()
;})(switch__21627__auto__,c__21739__auto___21906))
})();
var state__21741__auto__ = (function (){var statearr_21901 = f__21740__auto__.call(null);
(statearr_21901[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21739__auto___21906);

return statearr_21901;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21741__auto__);
});})(c__21739__auto___21906))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__22106){
var vec__22107 = p__22106;
var v = cljs.core.nth.call(null,vec__22107,(0),null);
var p = cljs.core.nth.call(null,vec__22107,(1),null);
var job = vec__22107;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__21739__auto___22289 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21739__auto___22289,res,vec__22107,v,p,job,jobs,results){
return (function (){
var f__21740__auto__ = (function (){var switch__21627__auto__ = ((function (c__21739__auto___22289,res,vec__22107,v,p,job,jobs,results){
return (function (state_22112){
var state_val_22113 = (state_22112[(1)]);
if((state_val_22113 === (1))){
var state_22112__$1 = state_22112;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22112__$1,(2),res,v);
} else {
if((state_val_22113 === (2))){
var inst_22109 = (state_22112[(2)]);
var inst_22110 = cljs.core.async.close_BANG_.call(null,res);
var state_22112__$1 = (function (){var statearr_22114 = state_22112;
(statearr_22114[(7)] = inst_22109);

return statearr_22114;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22112__$1,inst_22110);
} else {
return null;
}
}
});})(c__21739__auto___22289,res,vec__22107,v,p,job,jobs,results))
;
return ((function (switch__21627__auto__,c__21739__auto___22289,res,vec__22107,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21628__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21628__auto____0 = (function (){
var statearr_22118 = [null,null,null,null,null,null,null,null];
(statearr_22118[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21628__auto__);

(statearr_22118[(1)] = (1));

return statearr_22118;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21628__auto____1 = (function (state_22112){
while(true){
var ret_value__21629__auto__ = (function (){try{while(true){
var result__21630__auto__ = switch__21627__auto__.call(null,state_22112);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21630__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21630__auto__;
}
break;
}
}catch (e22119){if((e22119 instanceof Object)){
var ex__21631__auto__ = e22119;
var statearr_22120_22290 = state_22112;
(statearr_22120_22290[(5)] = ex__21631__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22112);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22119;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21629__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22291 = state_22112;
state_22112 = G__22291;
continue;
} else {
return ret_value__21629__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21628__auto__ = function(state_22112){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21628__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21628__auto____1.call(this,state_22112);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21628__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21628__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21628__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21628__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21628__auto__;
})()
;})(switch__21627__auto__,c__21739__auto___22289,res,vec__22107,v,p,job,jobs,results))
})();
var state__21741__auto__ = (function (){var statearr_22121 = f__21740__auto__.call(null);
(statearr_22121[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21739__auto___22289);

return statearr_22121;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21741__auto__);
});})(c__21739__auto___22289,res,vec__22107,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__22122){
var vec__22123 = p__22122;
var v = cljs.core.nth.call(null,vec__22123,(0),null);
var p = cljs.core.nth.call(null,vec__22123,(1),null);
var job = vec__22123;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__19194__auto___22292 = n;
var __22293 = (0);
while(true){
if((__22293 < n__19194__auto___22292)){
var G__22124_22294 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__22124_22294) {
case "compute":
var c__21739__auto___22296 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__22293,c__21739__auto___22296,G__22124_22294,n__19194__auto___22292,jobs,results,process,async){
return (function (){
var f__21740__auto__ = (function (){var switch__21627__auto__ = ((function (__22293,c__21739__auto___22296,G__22124_22294,n__19194__auto___22292,jobs,results,process,async){
return (function (state_22137){
var state_val_22138 = (state_22137[(1)]);
if((state_val_22138 === (1))){
var state_22137__$1 = state_22137;
var statearr_22139_22297 = state_22137__$1;
(statearr_22139_22297[(2)] = null);

(statearr_22139_22297[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22138 === (2))){
var state_22137__$1 = state_22137;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22137__$1,(4),jobs);
} else {
if((state_val_22138 === (3))){
var inst_22135 = (state_22137[(2)]);
var state_22137__$1 = state_22137;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22137__$1,inst_22135);
} else {
if((state_val_22138 === (4))){
var inst_22127 = (state_22137[(2)]);
var inst_22128 = process.call(null,inst_22127);
var state_22137__$1 = state_22137;
if(cljs.core.truth_(inst_22128)){
var statearr_22140_22298 = state_22137__$1;
(statearr_22140_22298[(1)] = (5));

} else {
var statearr_22141_22299 = state_22137__$1;
(statearr_22141_22299[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22138 === (5))){
var state_22137__$1 = state_22137;
var statearr_22142_22300 = state_22137__$1;
(statearr_22142_22300[(2)] = null);

(statearr_22142_22300[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22138 === (6))){
var state_22137__$1 = state_22137;
var statearr_22143_22301 = state_22137__$1;
(statearr_22143_22301[(2)] = null);

(statearr_22143_22301[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22138 === (7))){
var inst_22133 = (state_22137[(2)]);
var state_22137__$1 = state_22137;
var statearr_22144_22302 = state_22137__$1;
(statearr_22144_22302[(2)] = inst_22133);

(statearr_22144_22302[(1)] = (3));


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
});})(__22293,c__21739__auto___22296,G__22124_22294,n__19194__auto___22292,jobs,results,process,async))
;
return ((function (__22293,switch__21627__auto__,c__21739__auto___22296,G__22124_22294,n__19194__auto___22292,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21628__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21628__auto____0 = (function (){
var statearr_22148 = [null,null,null,null,null,null,null];
(statearr_22148[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21628__auto__);

(statearr_22148[(1)] = (1));

return statearr_22148;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21628__auto____1 = (function (state_22137){
while(true){
var ret_value__21629__auto__ = (function (){try{while(true){
var result__21630__auto__ = switch__21627__auto__.call(null,state_22137);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21630__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21630__auto__;
}
break;
}
}catch (e22149){if((e22149 instanceof Object)){
var ex__21631__auto__ = e22149;
var statearr_22150_22303 = state_22137;
(statearr_22150_22303[(5)] = ex__21631__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22137);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22149;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21629__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22304 = state_22137;
state_22137 = G__22304;
continue;
} else {
return ret_value__21629__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21628__auto__ = function(state_22137){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21628__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21628__auto____1.call(this,state_22137);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21628__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21628__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21628__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21628__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21628__auto__;
})()
;})(__22293,switch__21627__auto__,c__21739__auto___22296,G__22124_22294,n__19194__auto___22292,jobs,results,process,async))
})();
var state__21741__auto__ = (function (){var statearr_22151 = f__21740__auto__.call(null);
(statearr_22151[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21739__auto___22296);

return statearr_22151;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21741__auto__);
});})(__22293,c__21739__auto___22296,G__22124_22294,n__19194__auto___22292,jobs,results,process,async))
);


break;
case "async":
var c__21739__auto___22305 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__22293,c__21739__auto___22305,G__22124_22294,n__19194__auto___22292,jobs,results,process,async){
return (function (){
var f__21740__auto__ = (function (){var switch__21627__auto__ = ((function (__22293,c__21739__auto___22305,G__22124_22294,n__19194__auto___22292,jobs,results,process,async){
return (function (state_22164){
var state_val_22165 = (state_22164[(1)]);
if((state_val_22165 === (1))){
var state_22164__$1 = state_22164;
var statearr_22166_22306 = state_22164__$1;
(statearr_22166_22306[(2)] = null);

(statearr_22166_22306[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22165 === (2))){
var state_22164__$1 = state_22164;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22164__$1,(4),jobs);
} else {
if((state_val_22165 === (3))){
var inst_22162 = (state_22164[(2)]);
var state_22164__$1 = state_22164;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22164__$1,inst_22162);
} else {
if((state_val_22165 === (4))){
var inst_22154 = (state_22164[(2)]);
var inst_22155 = async.call(null,inst_22154);
var state_22164__$1 = state_22164;
if(cljs.core.truth_(inst_22155)){
var statearr_22167_22307 = state_22164__$1;
(statearr_22167_22307[(1)] = (5));

} else {
var statearr_22168_22308 = state_22164__$1;
(statearr_22168_22308[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22165 === (5))){
var state_22164__$1 = state_22164;
var statearr_22169_22309 = state_22164__$1;
(statearr_22169_22309[(2)] = null);

(statearr_22169_22309[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22165 === (6))){
var state_22164__$1 = state_22164;
var statearr_22170_22310 = state_22164__$1;
(statearr_22170_22310[(2)] = null);

(statearr_22170_22310[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22165 === (7))){
var inst_22160 = (state_22164[(2)]);
var state_22164__$1 = state_22164;
var statearr_22171_22311 = state_22164__$1;
(statearr_22171_22311[(2)] = inst_22160);

(statearr_22171_22311[(1)] = (3));


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
});})(__22293,c__21739__auto___22305,G__22124_22294,n__19194__auto___22292,jobs,results,process,async))
;
return ((function (__22293,switch__21627__auto__,c__21739__auto___22305,G__22124_22294,n__19194__auto___22292,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21628__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21628__auto____0 = (function (){
var statearr_22175 = [null,null,null,null,null,null,null];
(statearr_22175[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21628__auto__);

(statearr_22175[(1)] = (1));

return statearr_22175;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21628__auto____1 = (function (state_22164){
while(true){
var ret_value__21629__auto__ = (function (){try{while(true){
var result__21630__auto__ = switch__21627__auto__.call(null,state_22164);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21630__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21630__auto__;
}
break;
}
}catch (e22176){if((e22176 instanceof Object)){
var ex__21631__auto__ = e22176;
var statearr_22177_22312 = state_22164;
(statearr_22177_22312[(5)] = ex__21631__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22164);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22176;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21629__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22313 = state_22164;
state_22164 = G__22313;
continue;
} else {
return ret_value__21629__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21628__auto__ = function(state_22164){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21628__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21628__auto____1.call(this,state_22164);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21628__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21628__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21628__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21628__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21628__auto__;
})()
;})(__22293,switch__21627__auto__,c__21739__auto___22305,G__22124_22294,n__19194__auto___22292,jobs,results,process,async))
})();
var state__21741__auto__ = (function (){var statearr_22178 = f__21740__auto__.call(null);
(statearr_22178[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21739__auto___22305);

return statearr_22178;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21741__auto__);
});})(__22293,c__21739__auto___22305,G__22124_22294,n__19194__auto___22292,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__22314 = (__22293 + (1));
__22293 = G__22314;
continue;
} else {
}
break;
}

var c__21739__auto___22315 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21739__auto___22315,jobs,results,process,async){
return (function (){
var f__21740__auto__ = (function (){var switch__21627__auto__ = ((function (c__21739__auto___22315,jobs,results,process,async){
return (function (state_22200){
var state_val_22201 = (state_22200[(1)]);
if((state_val_22201 === (1))){
var state_22200__$1 = state_22200;
var statearr_22202_22316 = state_22200__$1;
(statearr_22202_22316[(2)] = null);

(statearr_22202_22316[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22201 === (2))){
var state_22200__$1 = state_22200;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22200__$1,(4),from);
} else {
if((state_val_22201 === (3))){
var inst_22198 = (state_22200[(2)]);
var state_22200__$1 = state_22200;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22200__$1,inst_22198);
} else {
if((state_val_22201 === (4))){
var inst_22181 = (state_22200[(7)]);
var inst_22181__$1 = (state_22200[(2)]);
var inst_22182 = (inst_22181__$1 == null);
var state_22200__$1 = (function (){var statearr_22203 = state_22200;
(statearr_22203[(7)] = inst_22181__$1);

return statearr_22203;
})();
if(cljs.core.truth_(inst_22182)){
var statearr_22204_22317 = state_22200__$1;
(statearr_22204_22317[(1)] = (5));

} else {
var statearr_22205_22318 = state_22200__$1;
(statearr_22205_22318[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22201 === (5))){
var inst_22184 = cljs.core.async.close_BANG_.call(null,jobs);
var state_22200__$1 = state_22200;
var statearr_22206_22319 = state_22200__$1;
(statearr_22206_22319[(2)] = inst_22184);

(statearr_22206_22319[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22201 === (6))){
var inst_22181 = (state_22200[(7)]);
var inst_22186 = (state_22200[(8)]);
var inst_22186__$1 = cljs.core.async.chan.call(null,(1));
var inst_22187 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_22188 = [inst_22181,inst_22186__$1];
var inst_22189 = (new cljs.core.PersistentVector(null,2,(5),inst_22187,inst_22188,null));
var state_22200__$1 = (function (){var statearr_22207 = state_22200;
(statearr_22207[(8)] = inst_22186__$1);

return statearr_22207;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22200__$1,(8),jobs,inst_22189);
} else {
if((state_val_22201 === (7))){
var inst_22196 = (state_22200[(2)]);
var state_22200__$1 = state_22200;
var statearr_22208_22320 = state_22200__$1;
(statearr_22208_22320[(2)] = inst_22196);

(statearr_22208_22320[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22201 === (8))){
var inst_22186 = (state_22200[(8)]);
var inst_22191 = (state_22200[(2)]);
var state_22200__$1 = (function (){var statearr_22209 = state_22200;
(statearr_22209[(9)] = inst_22191);

return statearr_22209;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22200__$1,(9),results,inst_22186);
} else {
if((state_val_22201 === (9))){
var inst_22193 = (state_22200[(2)]);
var state_22200__$1 = (function (){var statearr_22210 = state_22200;
(statearr_22210[(10)] = inst_22193);

return statearr_22210;
})();
var statearr_22211_22321 = state_22200__$1;
(statearr_22211_22321[(2)] = null);

(statearr_22211_22321[(1)] = (2));


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
});})(c__21739__auto___22315,jobs,results,process,async))
;
return ((function (switch__21627__auto__,c__21739__auto___22315,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21628__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21628__auto____0 = (function (){
var statearr_22215 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22215[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21628__auto__);

(statearr_22215[(1)] = (1));

return statearr_22215;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21628__auto____1 = (function (state_22200){
while(true){
var ret_value__21629__auto__ = (function (){try{while(true){
var result__21630__auto__ = switch__21627__auto__.call(null,state_22200);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21630__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21630__auto__;
}
break;
}
}catch (e22216){if((e22216 instanceof Object)){
var ex__21631__auto__ = e22216;
var statearr_22217_22322 = state_22200;
(statearr_22217_22322[(5)] = ex__21631__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22200);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22216;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21629__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22323 = state_22200;
state_22200 = G__22323;
continue;
} else {
return ret_value__21629__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21628__auto__ = function(state_22200){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21628__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21628__auto____1.call(this,state_22200);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21628__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21628__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21628__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21628__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21628__auto__;
})()
;})(switch__21627__auto__,c__21739__auto___22315,jobs,results,process,async))
})();
var state__21741__auto__ = (function (){var statearr_22218 = f__21740__auto__.call(null);
(statearr_22218[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21739__auto___22315);

return statearr_22218;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21741__auto__);
});})(c__21739__auto___22315,jobs,results,process,async))
);


var c__21739__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21739__auto__,jobs,results,process,async){
return (function (){
var f__21740__auto__ = (function (){var switch__21627__auto__ = ((function (c__21739__auto__,jobs,results,process,async){
return (function (state_22256){
var state_val_22257 = (state_22256[(1)]);
if((state_val_22257 === (7))){
var inst_22252 = (state_22256[(2)]);
var state_22256__$1 = state_22256;
var statearr_22258_22324 = state_22256__$1;
(statearr_22258_22324[(2)] = inst_22252);

(statearr_22258_22324[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22257 === (20))){
var state_22256__$1 = state_22256;
var statearr_22259_22325 = state_22256__$1;
(statearr_22259_22325[(2)] = null);

(statearr_22259_22325[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22257 === (1))){
var state_22256__$1 = state_22256;
var statearr_22260_22326 = state_22256__$1;
(statearr_22260_22326[(2)] = null);

(statearr_22260_22326[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22257 === (4))){
var inst_22221 = (state_22256[(7)]);
var inst_22221__$1 = (state_22256[(2)]);
var inst_22222 = (inst_22221__$1 == null);
var state_22256__$1 = (function (){var statearr_22261 = state_22256;
(statearr_22261[(7)] = inst_22221__$1);

return statearr_22261;
})();
if(cljs.core.truth_(inst_22222)){
var statearr_22262_22327 = state_22256__$1;
(statearr_22262_22327[(1)] = (5));

} else {
var statearr_22263_22328 = state_22256__$1;
(statearr_22263_22328[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22257 === (15))){
var inst_22234 = (state_22256[(8)]);
var state_22256__$1 = state_22256;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22256__$1,(18),to,inst_22234);
} else {
if((state_val_22257 === (21))){
var inst_22247 = (state_22256[(2)]);
var state_22256__$1 = state_22256;
var statearr_22264_22329 = state_22256__$1;
(statearr_22264_22329[(2)] = inst_22247);

(statearr_22264_22329[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22257 === (13))){
var inst_22249 = (state_22256[(2)]);
var state_22256__$1 = (function (){var statearr_22265 = state_22256;
(statearr_22265[(9)] = inst_22249);

return statearr_22265;
})();
var statearr_22266_22330 = state_22256__$1;
(statearr_22266_22330[(2)] = null);

(statearr_22266_22330[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22257 === (6))){
var inst_22221 = (state_22256[(7)]);
var state_22256__$1 = state_22256;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22256__$1,(11),inst_22221);
} else {
if((state_val_22257 === (17))){
var inst_22242 = (state_22256[(2)]);
var state_22256__$1 = state_22256;
if(cljs.core.truth_(inst_22242)){
var statearr_22267_22331 = state_22256__$1;
(statearr_22267_22331[(1)] = (19));

} else {
var statearr_22268_22332 = state_22256__$1;
(statearr_22268_22332[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22257 === (3))){
var inst_22254 = (state_22256[(2)]);
var state_22256__$1 = state_22256;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22256__$1,inst_22254);
} else {
if((state_val_22257 === (12))){
var inst_22231 = (state_22256[(10)]);
var state_22256__$1 = state_22256;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22256__$1,(14),inst_22231);
} else {
if((state_val_22257 === (2))){
var state_22256__$1 = state_22256;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22256__$1,(4),results);
} else {
if((state_val_22257 === (19))){
var state_22256__$1 = state_22256;
var statearr_22269_22333 = state_22256__$1;
(statearr_22269_22333[(2)] = null);

(statearr_22269_22333[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22257 === (11))){
var inst_22231 = (state_22256[(2)]);
var state_22256__$1 = (function (){var statearr_22270 = state_22256;
(statearr_22270[(10)] = inst_22231);

return statearr_22270;
})();
var statearr_22271_22334 = state_22256__$1;
(statearr_22271_22334[(2)] = null);

(statearr_22271_22334[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22257 === (9))){
var state_22256__$1 = state_22256;
var statearr_22272_22335 = state_22256__$1;
(statearr_22272_22335[(2)] = null);

(statearr_22272_22335[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22257 === (5))){
var state_22256__$1 = state_22256;
if(cljs.core.truth_(close_QMARK_)){
var statearr_22273_22336 = state_22256__$1;
(statearr_22273_22336[(1)] = (8));

} else {
var statearr_22274_22337 = state_22256__$1;
(statearr_22274_22337[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22257 === (14))){
var inst_22236 = (state_22256[(11)]);
var inst_22234 = (state_22256[(8)]);
var inst_22234__$1 = (state_22256[(2)]);
var inst_22235 = (inst_22234__$1 == null);
var inst_22236__$1 = cljs.core.not.call(null,inst_22235);
var state_22256__$1 = (function (){var statearr_22275 = state_22256;
(statearr_22275[(11)] = inst_22236__$1);

(statearr_22275[(8)] = inst_22234__$1);

return statearr_22275;
})();
if(inst_22236__$1){
var statearr_22276_22338 = state_22256__$1;
(statearr_22276_22338[(1)] = (15));

} else {
var statearr_22277_22339 = state_22256__$1;
(statearr_22277_22339[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22257 === (16))){
var inst_22236 = (state_22256[(11)]);
var state_22256__$1 = state_22256;
var statearr_22278_22340 = state_22256__$1;
(statearr_22278_22340[(2)] = inst_22236);

(statearr_22278_22340[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22257 === (10))){
var inst_22228 = (state_22256[(2)]);
var state_22256__$1 = state_22256;
var statearr_22279_22341 = state_22256__$1;
(statearr_22279_22341[(2)] = inst_22228);

(statearr_22279_22341[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22257 === (18))){
var inst_22239 = (state_22256[(2)]);
var state_22256__$1 = state_22256;
var statearr_22280_22342 = state_22256__$1;
(statearr_22280_22342[(2)] = inst_22239);

(statearr_22280_22342[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22257 === (8))){
var inst_22225 = cljs.core.async.close_BANG_.call(null,to);
var state_22256__$1 = state_22256;
var statearr_22281_22343 = state_22256__$1;
(statearr_22281_22343[(2)] = inst_22225);

(statearr_22281_22343[(1)] = (10));


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
});})(c__21739__auto__,jobs,results,process,async))
;
return ((function (switch__21627__auto__,c__21739__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21628__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21628__auto____0 = (function (){
var statearr_22285 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22285[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21628__auto__);

(statearr_22285[(1)] = (1));

return statearr_22285;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21628__auto____1 = (function (state_22256){
while(true){
var ret_value__21629__auto__ = (function (){try{while(true){
var result__21630__auto__ = switch__21627__auto__.call(null,state_22256);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21630__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21630__auto__;
}
break;
}
}catch (e22286){if((e22286 instanceof Object)){
var ex__21631__auto__ = e22286;
var statearr_22287_22344 = state_22256;
(statearr_22287_22344[(5)] = ex__21631__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22256);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22286;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21629__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22345 = state_22256;
state_22256 = G__22345;
continue;
} else {
return ret_value__21629__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21628__auto__ = function(state_22256){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21628__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21628__auto____1.call(this,state_22256);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21628__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21628__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21628__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21628__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21628__auto__;
})()
;})(switch__21627__auto__,c__21739__auto__,jobs,results,process,async))
})();
var state__21741__auto__ = (function (){var statearr_22288 = f__21740__auto__.call(null);
(statearr_22288[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21739__auto__);

return statearr_22288;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21741__auto__);
});})(c__21739__auto__,jobs,results,process,async))
);

return c__21739__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args22346 = [];
var len__19349__auto___22349 = arguments.length;
var i__19350__auto___22350 = (0);
while(true){
if((i__19350__auto___22350 < len__19349__auto___22349)){
args22346.push((arguments[i__19350__auto___22350]));

var G__22351 = (i__19350__auto___22350 + (1));
i__19350__auto___22350 = G__22351;
continue;
} else {
}
break;
}

var G__22348 = args22346.length;
switch (G__22348) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22346.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
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
var args22353 = [];
var len__19349__auto___22356 = arguments.length;
var i__19350__auto___22357 = (0);
while(true){
if((i__19350__auto___22357 < len__19349__auto___22356)){
args22353.push((arguments[i__19350__auto___22357]));

var G__22358 = (i__19350__auto___22357 + (1));
i__19350__auto___22357 = G__22358;
continue;
} else {
}
break;
}

var G__22355 = args22353.length;
switch (G__22355) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22353.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
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
var args22360 = [];
var len__19349__auto___22413 = arguments.length;
var i__19350__auto___22414 = (0);
while(true){
if((i__19350__auto___22414 < len__19349__auto___22413)){
args22360.push((arguments[i__19350__auto___22414]));

var G__22415 = (i__19350__auto___22414 + (1));
i__19350__auto___22414 = G__22415;
continue;
} else {
}
break;
}

var G__22362 = args22360.length;
switch (G__22362) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22360.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__21739__auto___22417 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21739__auto___22417,tc,fc){
return (function (){
var f__21740__auto__ = (function (){var switch__21627__auto__ = ((function (c__21739__auto___22417,tc,fc){
return (function (state_22388){
var state_val_22389 = (state_22388[(1)]);
if((state_val_22389 === (7))){
var inst_22384 = (state_22388[(2)]);
var state_22388__$1 = state_22388;
var statearr_22390_22418 = state_22388__$1;
(statearr_22390_22418[(2)] = inst_22384);

(statearr_22390_22418[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22389 === (1))){
var state_22388__$1 = state_22388;
var statearr_22391_22419 = state_22388__$1;
(statearr_22391_22419[(2)] = null);

(statearr_22391_22419[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22389 === (4))){
var inst_22365 = (state_22388[(7)]);
var inst_22365__$1 = (state_22388[(2)]);
var inst_22366 = (inst_22365__$1 == null);
var state_22388__$1 = (function (){var statearr_22392 = state_22388;
(statearr_22392[(7)] = inst_22365__$1);

return statearr_22392;
})();
if(cljs.core.truth_(inst_22366)){
var statearr_22393_22420 = state_22388__$1;
(statearr_22393_22420[(1)] = (5));

} else {
var statearr_22394_22421 = state_22388__$1;
(statearr_22394_22421[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22389 === (13))){
var state_22388__$1 = state_22388;
var statearr_22395_22422 = state_22388__$1;
(statearr_22395_22422[(2)] = null);

(statearr_22395_22422[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22389 === (6))){
var inst_22365 = (state_22388[(7)]);
var inst_22371 = p.call(null,inst_22365);
var state_22388__$1 = state_22388;
if(cljs.core.truth_(inst_22371)){
var statearr_22396_22423 = state_22388__$1;
(statearr_22396_22423[(1)] = (9));

} else {
var statearr_22397_22424 = state_22388__$1;
(statearr_22397_22424[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22389 === (3))){
var inst_22386 = (state_22388[(2)]);
var state_22388__$1 = state_22388;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22388__$1,inst_22386);
} else {
if((state_val_22389 === (12))){
var state_22388__$1 = state_22388;
var statearr_22398_22425 = state_22388__$1;
(statearr_22398_22425[(2)] = null);

(statearr_22398_22425[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22389 === (2))){
var state_22388__$1 = state_22388;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22388__$1,(4),ch);
} else {
if((state_val_22389 === (11))){
var inst_22365 = (state_22388[(7)]);
var inst_22375 = (state_22388[(2)]);
var state_22388__$1 = state_22388;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22388__$1,(8),inst_22375,inst_22365);
} else {
if((state_val_22389 === (9))){
var state_22388__$1 = state_22388;
var statearr_22399_22426 = state_22388__$1;
(statearr_22399_22426[(2)] = tc);

(statearr_22399_22426[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22389 === (5))){
var inst_22368 = cljs.core.async.close_BANG_.call(null,tc);
var inst_22369 = cljs.core.async.close_BANG_.call(null,fc);
var state_22388__$1 = (function (){var statearr_22400 = state_22388;
(statearr_22400[(8)] = inst_22368);

return statearr_22400;
})();
var statearr_22401_22427 = state_22388__$1;
(statearr_22401_22427[(2)] = inst_22369);

(statearr_22401_22427[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22389 === (14))){
var inst_22382 = (state_22388[(2)]);
var state_22388__$1 = state_22388;
var statearr_22402_22428 = state_22388__$1;
(statearr_22402_22428[(2)] = inst_22382);

(statearr_22402_22428[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22389 === (10))){
var state_22388__$1 = state_22388;
var statearr_22403_22429 = state_22388__$1;
(statearr_22403_22429[(2)] = fc);

(statearr_22403_22429[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22389 === (8))){
var inst_22377 = (state_22388[(2)]);
var state_22388__$1 = state_22388;
if(cljs.core.truth_(inst_22377)){
var statearr_22404_22430 = state_22388__$1;
(statearr_22404_22430[(1)] = (12));

} else {
var statearr_22405_22431 = state_22388__$1;
(statearr_22405_22431[(1)] = (13));

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
});})(c__21739__auto___22417,tc,fc))
;
return ((function (switch__21627__auto__,c__21739__auto___22417,tc,fc){
return (function() {
var cljs$core$async$state_machine__21628__auto__ = null;
var cljs$core$async$state_machine__21628__auto____0 = (function (){
var statearr_22409 = [null,null,null,null,null,null,null,null,null];
(statearr_22409[(0)] = cljs$core$async$state_machine__21628__auto__);

(statearr_22409[(1)] = (1));

return statearr_22409;
});
var cljs$core$async$state_machine__21628__auto____1 = (function (state_22388){
while(true){
var ret_value__21629__auto__ = (function (){try{while(true){
var result__21630__auto__ = switch__21627__auto__.call(null,state_22388);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21630__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21630__auto__;
}
break;
}
}catch (e22410){if((e22410 instanceof Object)){
var ex__21631__auto__ = e22410;
var statearr_22411_22432 = state_22388;
(statearr_22411_22432[(5)] = ex__21631__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22388);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22410;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21629__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22433 = state_22388;
state_22388 = G__22433;
continue;
} else {
return ret_value__21629__auto__;
}
break;
}
});
cljs$core$async$state_machine__21628__auto__ = function(state_22388){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21628__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21628__auto____1.call(this,state_22388);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21628__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21628__auto____0;
cljs$core$async$state_machine__21628__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21628__auto____1;
return cljs$core$async$state_machine__21628__auto__;
})()
;})(switch__21627__auto__,c__21739__auto___22417,tc,fc))
})();
var state__21741__auto__ = (function (){var statearr_22412 = f__21740__auto__.call(null);
(statearr_22412[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21739__auto___22417);

return statearr_22412;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21741__auto__);
});})(c__21739__auto___22417,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__21739__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21739__auto__){
return (function (){
var f__21740__auto__ = (function (){var switch__21627__auto__ = ((function (c__21739__auto__){
return (function (state_22497){
var state_val_22498 = (state_22497[(1)]);
if((state_val_22498 === (7))){
var inst_22493 = (state_22497[(2)]);
var state_22497__$1 = state_22497;
var statearr_22499_22520 = state_22497__$1;
(statearr_22499_22520[(2)] = inst_22493);

(statearr_22499_22520[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22498 === (1))){
var inst_22477 = init;
var state_22497__$1 = (function (){var statearr_22500 = state_22497;
(statearr_22500[(7)] = inst_22477);

return statearr_22500;
})();
var statearr_22501_22521 = state_22497__$1;
(statearr_22501_22521[(2)] = null);

(statearr_22501_22521[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22498 === (4))){
var inst_22480 = (state_22497[(8)]);
var inst_22480__$1 = (state_22497[(2)]);
var inst_22481 = (inst_22480__$1 == null);
var state_22497__$1 = (function (){var statearr_22502 = state_22497;
(statearr_22502[(8)] = inst_22480__$1);

return statearr_22502;
})();
if(cljs.core.truth_(inst_22481)){
var statearr_22503_22522 = state_22497__$1;
(statearr_22503_22522[(1)] = (5));

} else {
var statearr_22504_22523 = state_22497__$1;
(statearr_22504_22523[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22498 === (6))){
var inst_22477 = (state_22497[(7)]);
var inst_22480 = (state_22497[(8)]);
var inst_22484 = (state_22497[(9)]);
var inst_22484__$1 = f.call(null,inst_22477,inst_22480);
var inst_22485 = cljs.core.reduced_QMARK_.call(null,inst_22484__$1);
var state_22497__$1 = (function (){var statearr_22505 = state_22497;
(statearr_22505[(9)] = inst_22484__$1);

return statearr_22505;
})();
if(inst_22485){
var statearr_22506_22524 = state_22497__$1;
(statearr_22506_22524[(1)] = (8));

} else {
var statearr_22507_22525 = state_22497__$1;
(statearr_22507_22525[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22498 === (3))){
var inst_22495 = (state_22497[(2)]);
var state_22497__$1 = state_22497;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22497__$1,inst_22495);
} else {
if((state_val_22498 === (2))){
var state_22497__$1 = state_22497;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22497__$1,(4),ch);
} else {
if((state_val_22498 === (9))){
var inst_22484 = (state_22497[(9)]);
var inst_22477 = inst_22484;
var state_22497__$1 = (function (){var statearr_22508 = state_22497;
(statearr_22508[(7)] = inst_22477);

return statearr_22508;
})();
var statearr_22509_22526 = state_22497__$1;
(statearr_22509_22526[(2)] = null);

(statearr_22509_22526[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22498 === (5))){
var inst_22477 = (state_22497[(7)]);
var state_22497__$1 = state_22497;
var statearr_22510_22527 = state_22497__$1;
(statearr_22510_22527[(2)] = inst_22477);

(statearr_22510_22527[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22498 === (10))){
var inst_22491 = (state_22497[(2)]);
var state_22497__$1 = state_22497;
var statearr_22511_22528 = state_22497__$1;
(statearr_22511_22528[(2)] = inst_22491);

(statearr_22511_22528[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22498 === (8))){
var inst_22484 = (state_22497[(9)]);
var inst_22487 = cljs.core.deref.call(null,inst_22484);
var state_22497__$1 = state_22497;
var statearr_22512_22529 = state_22497__$1;
(statearr_22512_22529[(2)] = inst_22487);

(statearr_22512_22529[(1)] = (10));


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
});})(c__21739__auto__))
;
return ((function (switch__21627__auto__,c__21739__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__21628__auto__ = null;
var cljs$core$async$reduce_$_state_machine__21628__auto____0 = (function (){
var statearr_22516 = [null,null,null,null,null,null,null,null,null,null];
(statearr_22516[(0)] = cljs$core$async$reduce_$_state_machine__21628__auto__);

(statearr_22516[(1)] = (1));

return statearr_22516;
});
var cljs$core$async$reduce_$_state_machine__21628__auto____1 = (function (state_22497){
while(true){
var ret_value__21629__auto__ = (function (){try{while(true){
var result__21630__auto__ = switch__21627__auto__.call(null,state_22497);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21630__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21630__auto__;
}
break;
}
}catch (e22517){if((e22517 instanceof Object)){
var ex__21631__auto__ = e22517;
var statearr_22518_22530 = state_22497;
(statearr_22518_22530[(5)] = ex__21631__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22497);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22517;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21629__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22531 = state_22497;
state_22497 = G__22531;
continue;
} else {
return ret_value__21629__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__21628__auto__ = function(state_22497){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__21628__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__21628__auto____1.call(this,state_22497);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__21628__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__21628__auto____0;
cljs$core$async$reduce_$_state_machine__21628__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__21628__auto____1;
return cljs$core$async$reduce_$_state_machine__21628__auto__;
})()
;})(switch__21627__auto__,c__21739__auto__))
})();
var state__21741__auto__ = (function (){var statearr_22519 = f__21740__auto__.call(null);
(statearr_22519[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21739__auto__);

return statearr_22519;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21741__auto__);
});})(c__21739__auto__))
);

return c__21739__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args22532 = [];
var len__19349__auto___22584 = arguments.length;
var i__19350__auto___22585 = (0);
while(true){
if((i__19350__auto___22585 < len__19349__auto___22584)){
args22532.push((arguments[i__19350__auto___22585]));

var G__22586 = (i__19350__auto___22585 + (1));
i__19350__auto___22585 = G__22586;
continue;
} else {
}
break;
}

var G__22534 = args22532.length;
switch (G__22534) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22532.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__21739__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21739__auto__){
return (function (){
var f__21740__auto__ = (function (){var switch__21627__auto__ = ((function (c__21739__auto__){
return (function (state_22559){
var state_val_22560 = (state_22559[(1)]);
if((state_val_22560 === (7))){
var inst_22541 = (state_22559[(2)]);
var state_22559__$1 = state_22559;
var statearr_22561_22588 = state_22559__$1;
(statearr_22561_22588[(2)] = inst_22541);

(statearr_22561_22588[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22560 === (1))){
var inst_22535 = cljs.core.seq.call(null,coll);
var inst_22536 = inst_22535;
var state_22559__$1 = (function (){var statearr_22562 = state_22559;
(statearr_22562[(7)] = inst_22536);

return statearr_22562;
})();
var statearr_22563_22589 = state_22559__$1;
(statearr_22563_22589[(2)] = null);

(statearr_22563_22589[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22560 === (4))){
var inst_22536 = (state_22559[(7)]);
var inst_22539 = cljs.core.first.call(null,inst_22536);
var state_22559__$1 = state_22559;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22559__$1,(7),ch,inst_22539);
} else {
if((state_val_22560 === (13))){
var inst_22553 = (state_22559[(2)]);
var state_22559__$1 = state_22559;
var statearr_22564_22590 = state_22559__$1;
(statearr_22564_22590[(2)] = inst_22553);

(statearr_22564_22590[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22560 === (6))){
var inst_22544 = (state_22559[(2)]);
var state_22559__$1 = state_22559;
if(cljs.core.truth_(inst_22544)){
var statearr_22565_22591 = state_22559__$1;
(statearr_22565_22591[(1)] = (8));

} else {
var statearr_22566_22592 = state_22559__$1;
(statearr_22566_22592[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22560 === (3))){
var inst_22557 = (state_22559[(2)]);
var state_22559__$1 = state_22559;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22559__$1,inst_22557);
} else {
if((state_val_22560 === (12))){
var state_22559__$1 = state_22559;
var statearr_22567_22593 = state_22559__$1;
(statearr_22567_22593[(2)] = null);

(statearr_22567_22593[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22560 === (2))){
var inst_22536 = (state_22559[(7)]);
var state_22559__$1 = state_22559;
if(cljs.core.truth_(inst_22536)){
var statearr_22568_22594 = state_22559__$1;
(statearr_22568_22594[(1)] = (4));

} else {
var statearr_22569_22595 = state_22559__$1;
(statearr_22569_22595[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22560 === (11))){
var inst_22550 = cljs.core.async.close_BANG_.call(null,ch);
var state_22559__$1 = state_22559;
var statearr_22570_22596 = state_22559__$1;
(statearr_22570_22596[(2)] = inst_22550);

(statearr_22570_22596[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22560 === (9))){
var state_22559__$1 = state_22559;
if(cljs.core.truth_(close_QMARK_)){
var statearr_22571_22597 = state_22559__$1;
(statearr_22571_22597[(1)] = (11));

} else {
var statearr_22572_22598 = state_22559__$1;
(statearr_22572_22598[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22560 === (5))){
var inst_22536 = (state_22559[(7)]);
var state_22559__$1 = state_22559;
var statearr_22573_22599 = state_22559__$1;
(statearr_22573_22599[(2)] = inst_22536);

(statearr_22573_22599[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22560 === (10))){
var inst_22555 = (state_22559[(2)]);
var state_22559__$1 = state_22559;
var statearr_22574_22600 = state_22559__$1;
(statearr_22574_22600[(2)] = inst_22555);

(statearr_22574_22600[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22560 === (8))){
var inst_22536 = (state_22559[(7)]);
var inst_22546 = cljs.core.next.call(null,inst_22536);
var inst_22536__$1 = inst_22546;
var state_22559__$1 = (function (){var statearr_22575 = state_22559;
(statearr_22575[(7)] = inst_22536__$1);

return statearr_22575;
})();
var statearr_22576_22601 = state_22559__$1;
(statearr_22576_22601[(2)] = null);

(statearr_22576_22601[(1)] = (2));


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
});})(c__21739__auto__))
;
return ((function (switch__21627__auto__,c__21739__auto__){
return (function() {
var cljs$core$async$state_machine__21628__auto__ = null;
var cljs$core$async$state_machine__21628__auto____0 = (function (){
var statearr_22580 = [null,null,null,null,null,null,null,null];
(statearr_22580[(0)] = cljs$core$async$state_machine__21628__auto__);

(statearr_22580[(1)] = (1));

return statearr_22580;
});
var cljs$core$async$state_machine__21628__auto____1 = (function (state_22559){
while(true){
var ret_value__21629__auto__ = (function (){try{while(true){
var result__21630__auto__ = switch__21627__auto__.call(null,state_22559);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21630__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21630__auto__;
}
break;
}
}catch (e22581){if((e22581 instanceof Object)){
var ex__21631__auto__ = e22581;
var statearr_22582_22602 = state_22559;
(statearr_22582_22602[(5)] = ex__21631__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22559);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22581;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21629__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22603 = state_22559;
state_22559 = G__22603;
continue;
} else {
return ret_value__21629__auto__;
}
break;
}
});
cljs$core$async$state_machine__21628__auto__ = function(state_22559){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21628__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21628__auto____1.call(this,state_22559);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21628__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21628__auto____0;
cljs$core$async$state_machine__21628__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21628__auto____1;
return cljs$core$async$state_machine__21628__auto__;
})()
;})(switch__21627__auto__,c__21739__auto__))
})();
var state__21741__auto__ = (function (){var statearr_22583 = f__21740__auto__.call(null);
(statearr_22583[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21739__auto__);

return statearr_22583;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21741__auto__);
});})(c__21739__auto__))
);

return c__21739__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__18946__auto__ = (((_ == null))?null:_);
var m__18947__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__18946__auto__)]);
if(!((m__18947__auto__ == null))){
return m__18947__auto__.call(null,_);
} else {
var m__18947__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__18947__auto____$1 == null))){
return m__18947__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__18946__auto__ = (((m == null))?null:m);
var m__18947__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__18946__auto__)]);
if(!((m__18947__auto__ == null))){
return m__18947__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__18947__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__18947__auto____$1 == null))){
return m__18947__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__18946__auto__ = (((m == null))?null:m);
var m__18947__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__18946__auto__)]);
if(!((m__18947__auto__ == null))){
return m__18947__auto__.call(null,m,ch);
} else {
var m__18947__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__18947__auto____$1 == null))){
return m__18947__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__18946__auto__ = (((m == null))?null:m);
var m__18947__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__18946__auto__)]);
if(!((m__18947__auto__ == null))){
return m__18947__auto__.call(null,m);
} else {
var m__18947__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__18947__auto____$1 == null))){
return m__18947__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
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
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async22825 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22825 = (function (mult,ch,cs,meta22826){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta22826 = meta22826;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22825.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_22827,meta22826__$1){
var self__ = this;
var _22827__$1 = this;
return (new cljs.core.async.t_cljs$core$async22825(self__.mult,self__.ch,self__.cs,meta22826__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async22825.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_22827){
var self__ = this;
var _22827__$1 = this;
return self__.meta22826;
});})(cs))
;

cljs.core.async.t_cljs$core$async22825.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async22825.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async22825.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async22825.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async22825.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async22825.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async22825.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta22826","meta22826",69702116,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async22825.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22825.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22825";

cljs.core.async.t_cljs$core$async22825.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__18889__auto__,writer__18890__auto__,opt__18891__auto__){
return cljs.core._write.call(null,writer__18890__auto__,"cljs.core.async/t_cljs$core$async22825");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async22825 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async22825(mult__$1,ch__$1,cs__$1,meta22826){
return (new cljs.core.async.t_cljs$core$async22825(mult__$1,ch__$1,cs__$1,meta22826));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async22825(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__21739__auto___23046 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21739__auto___23046,cs,m,dchan,dctr,done){
return (function (){
var f__21740__auto__ = (function (){var switch__21627__auto__ = ((function (c__21739__auto___23046,cs,m,dchan,dctr,done){
return (function (state_22958){
var state_val_22959 = (state_22958[(1)]);
if((state_val_22959 === (7))){
var inst_22954 = (state_22958[(2)]);
var state_22958__$1 = state_22958;
var statearr_22960_23047 = state_22958__$1;
(statearr_22960_23047[(2)] = inst_22954);

(statearr_22960_23047[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22959 === (20))){
var inst_22859 = (state_22958[(7)]);
var inst_22869 = cljs.core.first.call(null,inst_22859);
var inst_22870 = cljs.core.nth.call(null,inst_22869,(0),null);
var inst_22871 = cljs.core.nth.call(null,inst_22869,(1),null);
var state_22958__$1 = (function (){var statearr_22961 = state_22958;
(statearr_22961[(8)] = inst_22870);

return statearr_22961;
})();
if(cljs.core.truth_(inst_22871)){
var statearr_22962_23048 = state_22958__$1;
(statearr_22962_23048[(1)] = (22));

} else {
var statearr_22963_23049 = state_22958__$1;
(statearr_22963_23049[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22959 === (27))){
var inst_22901 = (state_22958[(9)]);
var inst_22899 = (state_22958[(10)]);
var inst_22830 = (state_22958[(11)]);
var inst_22906 = (state_22958[(12)]);
var inst_22906__$1 = cljs.core._nth.call(null,inst_22899,inst_22901);
var inst_22907 = cljs.core.async.put_BANG_.call(null,inst_22906__$1,inst_22830,done);
var state_22958__$1 = (function (){var statearr_22964 = state_22958;
(statearr_22964[(12)] = inst_22906__$1);

return statearr_22964;
})();
if(cljs.core.truth_(inst_22907)){
var statearr_22965_23050 = state_22958__$1;
(statearr_22965_23050[(1)] = (30));

} else {
var statearr_22966_23051 = state_22958__$1;
(statearr_22966_23051[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22959 === (1))){
var state_22958__$1 = state_22958;
var statearr_22967_23052 = state_22958__$1;
(statearr_22967_23052[(2)] = null);

(statearr_22967_23052[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22959 === (24))){
var inst_22859 = (state_22958[(7)]);
var inst_22876 = (state_22958[(2)]);
var inst_22877 = cljs.core.next.call(null,inst_22859);
var inst_22839 = inst_22877;
var inst_22840 = null;
var inst_22841 = (0);
var inst_22842 = (0);
var state_22958__$1 = (function (){var statearr_22968 = state_22958;
(statearr_22968[(13)] = inst_22842);

(statearr_22968[(14)] = inst_22840);

(statearr_22968[(15)] = inst_22876);

(statearr_22968[(16)] = inst_22839);

(statearr_22968[(17)] = inst_22841);

return statearr_22968;
})();
var statearr_22969_23053 = state_22958__$1;
(statearr_22969_23053[(2)] = null);

(statearr_22969_23053[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22959 === (39))){
var state_22958__$1 = state_22958;
var statearr_22973_23054 = state_22958__$1;
(statearr_22973_23054[(2)] = null);

(statearr_22973_23054[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22959 === (4))){
var inst_22830 = (state_22958[(11)]);
var inst_22830__$1 = (state_22958[(2)]);
var inst_22831 = (inst_22830__$1 == null);
var state_22958__$1 = (function (){var statearr_22974 = state_22958;
(statearr_22974[(11)] = inst_22830__$1);

return statearr_22974;
})();
if(cljs.core.truth_(inst_22831)){
var statearr_22975_23055 = state_22958__$1;
(statearr_22975_23055[(1)] = (5));

} else {
var statearr_22976_23056 = state_22958__$1;
(statearr_22976_23056[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22959 === (15))){
var inst_22842 = (state_22958[(13)]);
var inst_22840 = (state_22958[(14)]);
var inst_22839 = (state_22958[(16)]);
var inst_22841 = (state_22958[(17)]);
var inst_22855 = (state_22958[(2)]);
var inst_22856 = (inst_22842 + (1));
var tmp22970 = inst_22840;
var tmp22971 = inst_22839;
var tmp22972 = inst_22841;
var inst_22839__$1 = tmp22971;
var inst_22840__$1 = tmp22970;
var inst_22841__$1 = tmp22972;
var inst_22842__$1 = inst_22856;
var state_22958__$1 = (function (){var statearr_22977 = state_22958;
(statearr_22977[(13)] = inst_22842__$1);

(statearr_22977[(14)] = inst_22840__$1);

(statearr_22977[(16)] = inst_22839__$1);

(statearr_22977[(17)] = inst_22841__$1);

(statearr_22977[(18)] = inst_22855);

return statearr_22977;
})();
var statearr_22978_23057 = state_22958__$1;
(statearr_22978_23057[(2)] = null);

(statearr_22978_23057[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22959 === (21))){
var inst_22880 = (state_22958[(2)]);
var state_22958__$1 = state_22958;
var statearr_22982_23058 = state_22958__$1;
(statearr_22982_23058[(2)] = inst_22880);

(statearr_22982_23058[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22959 === (31))){
var inst_22906 = (state_22958[(12)]);
var inst_22910 = done.call(null,null);
var inst_22911 = cljs.core.async.untap_STAR_.call(null,m,inst_22906);
var state_22958__$1 = (function (){var statearr_22983 = state_22958;
(statearr_22983[(19)] = inst_22910);

return statearr_22983;
})();
var statearr_22984_23059 = state_22958__$1;
(statearr_22984_23059[(2)] = inst_22911);

(statearr_22984_23059[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22959 === (32))){
var inst_22900 = (state_22958[(20)]);
var inst_22901 = (state_22958[(9)]);
var inst_22899 = (state_22958[(10)]);
var inst_22898 = (state_22958[(21)]);
var inst_22913 = (state_22958[(2)]);
var inst_22914 = (inst_22901 + (1));
var tmp22979 = inst_22900;
var tmp22980 = inst_22899;
var tmp22981 = inst_22898;
var inst_22898__$1 = tmp22981;
var inst_22899__$1 = tmp22980;
var inst_22900__$1 = tmp22979;
var inst_22901__$1 = inst_22914;
var state_22958__$1 = (function (){var statearr_22985 = state_22958;
(statearr_22985[(20)] = inst_22900__$1);

(statearr_22985[(9)] = inst_22901__$1);

(statearr_22985[(10)] = inst_22899__$1);

(statearr_22985[(22)] = inst_22913);

(statearr_22985[(21)] = inst_22898__$1);

return statearr_22985;
})();
var statearr_22986_23060 = state_22958__$1;
(statearr_22986_23060[(2)] = null);

(statearr_22986_23060[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22959 === (40))){
var inst_22926 = (state_22958[(23)]);
var inst_22930 = done.call(null,null);
var inst_22931 = cljs.core.async.untap_STAR_.call(null,m,inst_22926);
var state_22958__$1 = (function (){var statearr_22987 = state_22958;
(statearr_22987[(24)] = inst_22930);

return statearr_22987;
})();
var statearr_22988_23061 = state_22958__$1;
(statearr_22988_23061[(2)] = inst_22931);

(statearr_22988_23061[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22959 === (33))){
var inst_22917 = (state_22958[(25)]);
var inst_22919 = cljs.core.chunked_seq_QMARK_.call(null,inst_22917);
var state_22958__$1 = state_22958;
if(inst_22919){
var statearr_22989_23062 = state_22958__$1;
(statearr_22989_23062[(1)] = (36));

} else {
var statearr_22990_23063 = state_22958__$1;
(statearr_22990_23063[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22959 === (13))){
var inst_22849 = (state_22958[(26)]);
var inst_22852 = cljs.core.async.close_BANG_.call(null,inst_22849);
var state_22958__$1 = state_22958;
var statearr_22991_23064 = state_22958__$1;
(statearr_22991_23064[(2)] = inst_22852);

(statearr_22991_23064[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22959 === (22))){
var inst_22870 = (state_22958[(8)]);
var inst_22873 = cljs.core.async.close_BANG_.call(null,inst_22870);
var state_22958__$1 = state_22958;
var statearr_22992_23065 = state_22958__$1;
(statearr_22992_23065[(2)] = inst_22873);

(statearr_22992_23065[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22959 === (36))){
var inst_22917 = (state_22958[(25)]);
var inst_22921 = cljs.core.chunk_first.call(null,inst_22917);
var inst_22922 = cljs.core.chunk_rest.call(null,inst_22917);
var inst_22923 = cljs.core.count.call(null,inst_22921);
var inst_22898 = inst_22922;
var inst_22899 = inst_22921;
var inst_22900 = inst_22923;
var inst_22901 = (0);
var state_22958__$1 = (function (){var statearr_22993 = state_22958;
(statearr_22993[(20)] = inst_22900);

(statearr_22993[(9)] = inst_22901);

(statearr_22993[(10)] = inst_22899);

(statearr_22993[(21)] = inst_22898);

return statearr_22993;
})();
var statearr_22994_23066 = state_22958__$1;
(statearr_22994_23066[(2)] = null);

(statearr_22994_23066[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22959 === (41))){
var inst_22917 = (state_22958[(25)]);
var inst_22933 = (state_22958[(2)]);
var inst_22934 = cljs.core.next.call(null,inst_22917);
var inst_22898 = inst_22934;
var inst_22899 = null;
var inst_22900 = (0);
var inst_22901 = (0);
var state_22958__$1 = (function (){var statearr_22995 = state_22958;
(statearr_22995[(20)] = inst_22900);

(statearr_22995[(9)] = inst_22901);

(statearr_22995[(10)] = inst_22899);

(statearr_22995[(27)] = inst_22933);

(statearr_22995[(21)] = inst_22898);

return statearr_22995;
})();
var statearr_22996_23067 = state_22958__$1;
(statearr_22996_23067[(2)] = null);

(statearr_22996_23067[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22959 === (43))){
var state_22958__$1 = state_22958;
var statearr_22997_23068 = state_22958__$1;
(statearr_22997_23068[(2)] = null);

(statearr_22997_23068[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22959 === (29))){
var inst_22942 = (state_22958[(2)]);
var state_22958__$1 = state_22958;
var statearr_22998_23069 = state_22958__$1;
(statearr_22998_23069[(2)] = inst_22942);

(statearr_22998_23069[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22959 === (44))){
var inst_22951 = (state_22958[(2)]);
var state_22958__$1 = (function (){var statearr_22999 = state_22958;
(statearr_22999[(28)] = inst_22951);

return statearr_22999;
})();
var statearr_23000_23070 = state_22958__$1;
(statearr_23000_23070[(2)] = null);

(statearr_23000_23070[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22959 === (6))){
var inst_22890 = (state_22958[(29)]);
var inst_22889 = cljs.core.deref.call(null,cs);
var inst_22890__$1 = cljs.core.keys.call(null,inst_22889);
var inst_22891 = cljs.core.count.call(null,inst_22890__$1);
var inst_22892 = cljs.core.reset_BANG_.call(null,dctr,inst_22891);
var inst_22897 = cljs.core.seq.call(null,inst_22890__$1);
var inst_22898 = inst_22897;
var inst_22899 = null;
var inst_22900 = (0);
var inst_22901 = (0);
var state_22958__$1 = (function (){var statearr_23001 = state_22958;
(statearr_23001[(20)] = inst_22900);

(statearr_23001[(9)] = inst_22901);

(statearr_23001[(30)] = inst_22892);

(statearr_23001[(10)] = inst_22899);

(statearr_23001[(21)] = inst_22898);

(statearr_23001[(29)] = inst_22890__$1);

return statearr_23001;
})();
var statearr_23002_23071 = state_22958__$1;
(statearr_23002_23071[(2)] = null);

(statearr_23002_23071[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22959 === (28))){
var inst_22917 = (state_22958[(25)]);
var inst_22898 = (state_22958[(21)]);
var inst_22917__$1 = cljs.core.seq.call(null,inst_22898);
var state_22958__$1 = (function (){var statearr_23003 = state_22958;
(statearr_23003[(25)] = inst_22917__$1);

return statearr_23003;
})();
if(inst_22917__$1){
var statearr_23004_23072 = state_22958__$1;
(statearr_23004_23072[(1)] = (33));

} else {
var statearr_23005_23073 = state_22958__$1;
(statearr_23005_23073[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22959 === (25))){
var inst_22900 = (state_22958[(20)]);
var inst_22901 = (state_22958[(9)]);
var inst_22903 = (inst_22901 < inst_22900);
var inst_22904 = inst_22903;
var state_22958__$1 = state_22958;
if(cljs.core.truth_(inst_22904)){
var statearr_23006_23074 = state_22958__$1;
(statearr_23006_23074[(1)] = (27));

} else {
var statearr_23007_23075 = state_22958__$1;
(statearr_23007_23075[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22959 === (34))){
var state_22958__$1 = state_22958;
var statearr_23008_23076 = state_22958__$1;
(statearr_23008_23076[(2)] = null);

(statearr_23008_23076[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22959 === (17))){
var state_22958__$1 = state_22958;
var statearr_23009_23077 = state_22958__$1;
(statearr_23009_23077[(2)] = null);

(statearr_23009_23077[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22959 === (3))){
var inst_22956 = (state_22958[(2)]);
var state_22958__$1 = state_22958;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22958__$1,inst_22956);
} else {
if((state_val_22959 === (12))){
var inst_22885 = (state_22958[(2)]);
var state_22958__$1 = state_22958;
var statearr_23010_23078 = state_22958__$1;
(statearr_23010_23078[(2)] = inst_22885);

(statearr_23010_23078[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22959 === (2))){
var state_22958__$1 = state_22958;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22958__$1,(4),ch);
} else {
if((state_val_22959 === (23))){
var state_22958__$1 = state_22958;
var statearr_23011_23079 = state_22958__$1;
(statearr_23011_23079[(2)] = null);

(statearr_23011_23079[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22959 === (35))){
var inst_22940 = (state_22958[(2)]);
var state_22958__$1 = state_22958;
var statearr_23012_23080 = state_22958__$1;
(statearr_23012_23080[(2)] = inst_22940);

(statearr_23012_23080[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22959 === (19))){
var inst_22859 = (state_22958[(7)]);
var inst_22863 = cljs.core.chunk_first.call(null,inst_22859);
var inst_22864 = cljs.core.chunk_rest.call(null,inst_22859);
var inst_22865 = cljs.core.count.call(null,inst_22863);
var inst_22839 = inst_22864;
var inst_22840 = inst_22863;
var inst_22841 = inst_22865;
var inst_22842 = (0);
var state_22958__$1 = (function (){var statearr_23013 = state_22958;
(statearr_23013[(13)] = inst_22842);

(statearr_23013[(14)] = inst_22840);

(statearr_23013[(16)] = inst_22839);

(statearr_23013[(17)] = inst_22841);

return statearr_23013;
})();
var statearr_23014_23081 = state_22958__$1;
(statearr_23014_23081[(2)] = null);

(statearr_23014_23081[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22959 === (11))){
var inst_22859 = (state_22958[(7)]);
var inst_22839 = (state_22958[(16)]);
var inst_22859__$1 = cljs.core.seq.call(null,inst_22839);
var state_22958__$1 = (function (){var statearr_23015 = state_22958;
(statearr_23015[(7)] = inst_22859__$1);

return statearr_23015;
})();
if(inst_22859__$1){
var statearr_23016_23082 = state_22958__$1;
(statearr_23016_23082[(1)] = (16));

} else {
var statearr_23017_23083 = state_22958__$1;
(statearr_23017_23083[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22959 === (9))){
var inst_22887 = (state_22958[(2)]);
var state_22958__$1 = state_22958;
var statearr_23018_23084 = state_22958__$1;
(statearr_23018_23084[(2)] = inst_22887);

(statearr_23018_23084[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22959 === (5))){
var inst_22837 = cljs.core.deref.call(null,cs);
var inst_22838 = cljs.core.seq.call(null,inst_22837);
var inst_22839 = inst_22838;
var inst_22840 = null;
var inst_22841 = (0);
var inst_22842 = (0);
var state_22958__$1 = (function (){var statearr_23019 = state_22958;
(statearr_23019[(13)] = inst_22842);

(statearr_23019[(14)] = inst_22840);

(statearr_23019[(16)] = inst_22839);

(statearr_23019[(17)] = inst_22841);

return statearr_23019;
})();
var statearr_23020_23085 = state_22958__$1;
(statearr_23020_23085[(2)] = null);

(statearr_23020_23085[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22959 === (14))){
var state_22958__$1 = state_22958;
var statearr_23021_23086 = state_22958__$1;
(statearr_23021_23086[(2)] = null);

(statearr_23021_23086[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22959 === (45))){
var inst_22948 = (state_22958[(2)]);
var state_22958__$1 = state_22958;
var statearr_23022_23087 = state_22958__$1;
(statearr_23022_23087[(2)] = inst_22948);

(statearr_23022_23087[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22959 === (26))){
var inst_22890 = (state_22958[(29)]);
var inst_22944 = (state_22958[(2)]);
var inst_22945 = cljs.core.seq.call(null,inst_22890);
var state_22958__$1 = (function (){var statearr_23023 = state_22958;
(statearr_23023[(31)] = inst_22944);

return statearr_23023;
})();
if(inst_22945){
var statearr_23024_23088 = state_22958__$1;
(statearr_23024_23088[(1)] = (42));

} else {
var statearr_23025_23089 = state_22958__$1;
(statearr_23025_23089[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22959 === (16))){
var inst_22859 = (state_22958[(7)]);
var inst_22861 = cljs.core.chunked_seq_QMARK_.call(null,inst_22859);
var state_22958__$1 = state_22958;
if(inst_22861){
var statearr_23026_23090 = state_22958__$1;
(statearr_23026_23090[(1)] = (19));

} else {
var statearr_23027_23091 = state_22958__$1;
(statearr_23027_23091[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22959 === (38))){
var inst_22937 = (state_22958[(2)]);
var state_22958__$1 = state_22958;
var statearr_23028_23092 = state_22958__$1;
(statearr_23028_23092[(2)] = inst_22937);

(statearr_23028_23092[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22959 === (30))){
var state_22958__$1 = state_22958;
var statearr_23029_23093 = state_22958__$1;
(statearr_23029_23093[(2)] = null);

(statearr_23029_23093[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22959 === (10))){
var inst_22842 = (state_22958[(13)]);
var inst_22840 = (state_22958[(14)]);
var inst_22848 = cljs.core._nth.call(null,inst_22840,inst_22842);
var inst_22849 = cljs.core.nth.call(null,inst_22848,(0),null);
var inst_22850 = cljs.core.nth.call(null,inst_22848,(1),null);
var state_22958__$1 = (function (){var statearr_23030 = state_22958;
(statearr_23030[(26)] = inst_22849);

return statearr_23030;
})();
if(cljs.core.truth_(inst_22850)){
var statearr_23031_23094 = state_22958__$1;
(statearr_23031_23094[(1)] = (13));

} else {
var statearr_23032_23095 = state_22958__$1;
(statearr_23032_23095[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22959 === (18))){
var inst_22883 = (state_22958[(2)]);
var state_22958__$1 = state_22958;
var statearr_23033_23096 = state_22958__$1;
(statearr_23033_23096[(2)] = inst_22883);

(statearr_23033_23096[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22959 === (42))){
var state_22958__$1 = state_22958;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22958__$1,(45),dchan);
} else {
if((state_val_22959 === (37))){
var inst_22917 = (state_22958[(25)]);
var inst_22830 = (state_22958[(11)]);
var inst_22926 = (state_22958[(23)]);
var inst_22926__$1 = cljs.core.first.call(null,inst_22917);
var inst_22927 = cljs.core.async.put_BANG_.call(null,inst_22926__$1,inst_22830,done);
var state_22958__$1 = (function (){var statearr_23034 = state_22958;
(statearr_23034[(23)] = inst_22926__$1);

return statearr_23034;
})();
if(cljs.core.truth_(inst_22927)){
var statearr_23035_23097 = state_22958__$1;
(statearr_23035_23097[(1)] = (39));

} else {
var statearr_23036_23098 = state_22958__$1;
(statearr_23036_23098[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22959 === (8))){
var inst_22842 = (state_22958[(13)]);
var inst_22841 = (state_22958[(17)]);
var inst_22844 = (inst_22842 < inst_22841);
var inst_22845 = inst_22844;
var state_22958__$1 = state_22958;
if(cljs.core.truth_(inst_22845)){
var statearr_23037_23099 = state_22958__$1;
(statearr_23037_23099[(1)] = (10));

} else {
var statearr_23038_23100 = state_22958__$1;
(statearr_23038_23100[(1)] = (11));

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
});})(c__21739__auto___23046,cs,m,dchan,dctr,done))
;
return ((function (switch__21627__auto__,c__21739__auto___23046,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__21628__auto__ = null;
var cljs$core$async$mult_$_state_machine__21628__auto____0 = (function (){
var statearr_23042 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23042[(0)] = cljs$core$async$mult_$_state_machine__21628__auto__);

(statearr_23042[(1)] = (1));

return statearr_23042;
});
var cljs$core$async$mult_$_state_machine__21628__auto____1 = (function (state_22958){
while(true){
var ret_value__21629__auto__ = (function (){try{while(true){
var result__21630__auto__ = switch__21627__auto__.call(null,state_22958);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21630__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21630__auto__;
}
break;
}
}catch (e23043){if((e23043 instanceof Object)){
var ex__21631__auto__ = e23043;
var statearr_23044_23101 = state_22958;
(statearr_23044_23101[(5)] = ex__21631__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22958);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23043;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21629__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23102 = state_22958;
state_22958 = G__23102;
continue;
} else {
return ret_value__21629__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__21628__auto__ = function(state_22958){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__21628__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__21628__auto____1.call(this,state_22958);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__21628__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__21628__auto____0;
cljs$core$async$mult_$_state_machine__21628__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__21628__auto____1;
return cljs$core$async$mult_$_state_machine__21628__auto__;
})()
;})(switch__21627__auto__,c__21739__auto___23046,cs,m,dchan,dctr,done))
})();
var state__21741__auto__ = (function (){var statearr_23045 = f__21740__auto__.call(null);
(statearr_23045[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21739__auto___23046);

return statearr_23045;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21741__auto__);
});})(c__21739__auto___23046,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args23103 = [];
var len__19349__auto___23106 = arguments.length;
var i__19350__auto___23107 = (0);
while(true){
if((i__19350__auto___23107 < len__19349__auto___23106)){
args23103.push((arguments[i__19350__auto___23107]));

var G__23108 = (i__19350__auto___23107 + (1));
i__19350__auto___23107 = G__23108;
continue;
} else {
}
break;
}

var G__23105 = args23103.length;
switch (G__23105) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23103.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__18946__auto__ = (((m == null))?null:m);
var m__18947__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__18946__auto__)]);
if(!((m__18947__auto__ == null))){
return m__18947__auto__.call(null,m,ch);
} else {
var m__18947__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__18947__auto____$1 == null))){
return m__18947__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__18946__auto__ = (((m == null))?null:m);
var m__18947__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__18946__auto__)]);
if(!((m__18947__auto__ == null))){
return m__18947__auto__.call(null,m,ch);
} else {
var m__18947__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__18947__auto____$1 == null))){
return m__18947__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__18946__auto__ = (((m == null))?null:m);
var m__18947__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__18946__auto__)]);
if(!((m__18947__auto__ == null))){
return m__18947__auto__.call(null,m);
} else {
var m__18947__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__18947__auto____$1 == null))){
return m__18947__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__18946__auto__ = (((m == null))?null:m);
var m__18947__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__18946__auto__)]);
if(!((m__18947__auto__ == null))){
return m__18947__auto__.call(null,m,state_map);
} else {
var m__18947__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__18947__auto____$1 == null))){
return m__18947__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__18946__auto__ = (((m == null))?null:m);
var m__18947__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__18946__auto__)]);
if(!((m__18947__auto__ == null))){
return m__18947__auto__.call(null,m,mode);
} else {
var m__18947__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__18947__auto____$1 == null))){
return m__18947__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__19356__auto__ = [];
var len__19349__auto___23120 = arguments.length;
var i__19350__auto___23121 = (0);
while(true){
if((i__19350__auto___23121 < len__19349__auto___23120)){
args__19356__auto__.push((arguments[i__19350__auto___23121]));

var G__23122 = (i__19350__auto___23121 + (1));
i__19350__auto___23121 = G__23122;
continue;
} else {
}
break;
}

var argseq__19357__auto__ = ((((3) < args__19356__auto__.length))?(new cljs.core.IndexedSeq(args__19356__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__19357__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__23114){
var map__23115 = p__23114;
var map__23115__$1 = ((((!((map__23115 == null)))?((((map__23115.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23115.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23115):map__23115);
var opts = map__23115__$1;
var statearr_23117_23123 = state;
(statearr_23117_23123[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__23115,map__23115__$1,opts){
return (function (val){
var statearr_23118_23124 = state;
(statearr_23118_23124[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__23115,map__23115__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_23119_23125 = state;
(statearr_23119_23125[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq23110){
var G__23111 = cljs.core.first.call(null,seq23110);
var seq23110__$1 = cljs.core.next.call(null,seq23110);
var G__23112 = cljs.core.first.call(null,seq23110__$1);
var seq23110__$2 = cljs.core.next.call(null,seq23110__$1);
var G__23113 = cljs.core.first.call(null,seq23110__$2);
var seq23110__$3 = cljs.core.next.call(null,seq23110__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__23111,G__23112,G__23113,seq23110__$3);
});
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
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async23289 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23289 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta23290){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta23290 = meta23290;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23289.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_23291,meta23290__$1){
var self__ = this;
var _23291__$1 = this;
return (new cljs.core.async.t_cljs$core$async23289(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta23290__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23289.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_23291){
var self__ = this;
var _23291__$1 = this;
return self__.meta23290;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23289.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async23289.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23289.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async23289.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23289.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23289.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23289.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23289.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23289.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta23290","meta23290",1961265054,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23289.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23289.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23289";

cljs.core.async.t_cljs$core$async23289.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__18889__auto__,writer__18890__auto__,opt__18891__auto__){
return cljs.core._write.call(null,writer__18890__auto__,"cljs.core.async/t_cljs$core$async23289");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async23289 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async23289(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta23290){
return (new cljs.core.async.t_cljs$core$async23289(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta23290));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async23289(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__21739__auto___23452 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21739__auto___23452,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__21740__auto__ = (function (){var switch__21627__auto__ = ((function (c__21739__auto___23452,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_23389){
var state_val_23390 = (state_23389[(1)]);
if((state_val_23390 === (7))){
var inst_23307 = (state_23389[(2)]);
var state_23389__$1 = state_23389;
var statearr_23391_23453 = state_23389__$1;
(statearr_23391_23453[(2)] = inst_23307);

(statearr_23391_23453[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23390 === (20))){
var inst_23319 = (state_23389[(7)]);
var state_23389__$1 = state_23389;
var statearr_23392_23454 = state_23389__$1;
(statearr_23392_23454[(2)] = inst_23319);

(statearr_23392_23454[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23390 === (27))){
var state_23389__$1 = state_23389;
var statearr_23393_23455 = state_23389__$1;
(statearr_23393_23455[(2)] = null);

(statearr_23393_23455[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23390 === (1))){
var inst_23295 = (state_23389[(8)]);
var inst_23295__$1 = calc_state.call(null);
var inst_23297 = (inst_23295__$1 == null);
var inst_23298 = cljs.core.not.call(null,inst_23297);
var state_23389__$1 = (function (){var statearr_23394 = state_23389;
(statearr_23394[(8)] = inst_23295__$1);

return statearr_23394;
})();
if(inst_23298){
var statearr_23395_23456 = state_23389__$1;
(statearr_23395_23456[(1)] = (2));

} else {
var statearr_23396_23457 = state_23389__$1;
(statearr_23396_23457[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23390 === (24))){
var inst_23342 = (state_23389[(9)]);
var inst_23363 = (state_23389[(10)]);
var inst_23349 = (state_23389[(11)]);
var inst_23363__$1 = inst_23342.call(null,inst_23349);
var state_23389__$1 = (function (){var statearr_23397 = state_23389;
(statearr_23397[(10)] = inst_23363__$1);

return statearr_23397;
})();
if(cljs.core.truth_(inst_23363__$1)){
var statearr_23398_23458 = state_23389__$1;
(statearr_23398_23458[(1)] = (29));

} else {
var statearr_23399_23459 = state_23389__$1;
(statearr_23399_23459[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23390 === (4))){
var inst_23310 = (state_23389[(2)]);
var state_23389__$1 = state_23389;
if(cljs.core.truth_(inst_23310)){
var statearr_23400_23460 = state_23389__$1;
(statearr_23400_23460[(1)] = (8));

} else {
var statearr_23401_23461 = state_23389__$1;
(statearr_23401_23461[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23390 === (15))){
var inst_23336 = (state_23389[(2)]);
var state_23389__$1 = state_23389;
if(cljs.core.truth_(inst_23336)){
var statearr_23402_23462 = state_23389__$1;
(statearr_23402_23462[(1)] = (19));

} else {
var statearr_23403_23463 = state_23389__$1;
(statearr_23403_23463[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23390 === (21))){
var inst_23341 = (state_23389[(12)]);
var inst_23341__$1 = (state_23389[(2)]);
var inst_23342 = cljs.core.get.call(null,inst_23341__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_23343 = cljs.core.get.call(null,inst_23341__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_23344 = cljs.core.get.call(null,inst_23341__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_23389__$1 = (function (){var statearr_23404 = state_23389;
(statearr_23404[(9)] = inst_23342);

(statearr_23404[(13)] = inst_23343);

(statearr_23404[(12)] = inst_23341__$1);

return statearr_23404;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_23389__$1,(22),inst_23344);
} else {
if((state_val_23390 === (31))){
var inst_23371 = (state_23389[(2)]);
var state_23389__$1 = state_23389;
if(cljs.core.truth_(inst_23371)){
var statearr_23405_23464 = state_23389__$1;
(statearr_23405_23464[(1)] = (32));

} else {
var statearr_23406_23465 = state_23389__$1;
(statearr_23406_23465[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23390 === (32))){
var inst_23348 = (state_23389[(14)]);
var state_23389__$1 = state_23389;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23389__$1,(35),out,inst_23348);
} else {
if((state_val_23390 === (33))){
var inst_23341 = (state_23389[(12)]);
var inst_23319 = inst_23341;
var state_23389__$1 = (function (){var statearr_23407 = state_23389;
(statearr_23407[(7)] = inst_23319);

return statearr_23407;
})();
var statearr_23408_23466 = state_23389__$1;
(statearr_23408_23466[(2)] = null);

(statearr_23408_23466[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23390 === (13))){
var inst_23319 = (state_23389[(7)]);
var inst_23326 = inst_23319.cljs$lang$protocol_mask$partition0$;
var inst_23327 = (inst_23326 & (64));
var inst_23328 = inst_23319.cljs$core$ISeq$;
var inst_23329 = (inst_23327) || (inst_23328);
var state_23389__$1 = state_23389;
if(cljs.core.truth_(inst_23329)){
var statearr_23409_23467 = state_23389__$1;
(statearr_23409_23467[(1)] = (16));

} else {
var statearr_23410_23468 = state_23389__$1;
(statearr_23410_23468[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23390 === (22))){
var inst_23348 = (state_23389[(14)]);
var inst_23349 = (state_23389[(11)]);
var inst_23347 = (state_23389[(2)]);
var inst_23348__$1 = cljs.core.nth.call(null,inst_23347,(0),null);
var inst_23349__$1 = cljs.core.nth.call(null,inst_23347,(1),null);
var inst_23350 = (inst_23348__$1 == null);
var inst_23351 = cljs.core._EQ_.call(null,inst_23349__$1,change);
var inst_23352 = (inst_23350) || (inst_23351);
var state_23389__$1 = (function (){var statearr_23411 = state_23389;
(statearr_23411[(14)] = inst_23348__$1);

(statearr_23411[(11)] = inst_23349__$1);

return statearr_23411;
})();
if(cljs.core.truth_(inst_23352)){
var statearr_23412_23469 = state_23389__$1;
(statearr_23412_23469[(1)] = (23));

} else {
var statearr_23413_23470 = state_23389__$1;
(statearr_23413_23470[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23390 === (36))){
var inst_23341 = (state_23389[(12)]);
var inst_23319 = inst_23341;
var state_23389__$1 = (function (){var statearr_23414 = state_23389;
(statearr_23414[(7)] = inst_23319);

return statearr_23414;
})();
var statearr_23415_23471 = state_23389__$1;
(statearr_23415_23471[(2)] = null);

(statearr_23415_23471[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23390 === (29))){
var inst_23363 = (state_23389[(10)]);
var state_23389__$1 = state_23389;
var statearr_23416_23472 = state_23389__$1;
(statearr_23416_23472[(2)] = inst_23363);

(statearr_23416_23472[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23390 === (6))){
var state_23389__$1 = state_23389;
var statearr_23417_23473 = state_23389__$1;
(statearr_23417_23473[(2)] = false);

(statearr_23417_23473[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23390 === (28))){
var inst_23359 = (state_23389[(2)]);
var inst_23360 = calc_state.call(null);
var inst_23319 = inst_23360;
var state_23389__$1 = (function (){var statearr_23418 = state_23389;
(statearr_23418[(15)] = inst_23359);

(statearr_23418[(7)] = inst_23319);

return statearr_23418;
})();
var statearr_23419_23474 = state_23389__$1;
(statearr_23419_23474[(2)] = null);

(statearr_23419_23474[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23390 === (25))){
var inst_23385 = (state_23389[(2)]);
var state_23389__$1 = state_23389;
var statearr_23420_23475 = state_23389__$1;
(statearr_23420_23475[(2)] = inst_23385);

(statearr_23420_23475[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23390 === (34))){
var inst_23383 = (state_23389[(2)]);
var state_23389__$1 = state_23389;
var statearr_23421_23476 = state_23389__$1;
(statearr_23421_23476[(2)] = inst_23383);

(statearr_23421_23476[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23390 === (17))){
var state_23389__$1 = state_23389;
var statearr_23422_23477 = state_23389__$1;
(statearr_23422_23477[(2)] = false);

(statearr_23422_23477[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23390 === (3))){
var state_23389__$1 = state_23389;
var statearr_23423_23478 = state_23389__$1;
(statearr_23423_23478[(2)] = false);

(statearr_23423_23478[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23390 === (12))){
var inst_23387 = (state_23389[(2)]);
var state_23389__$1 = state_23389;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23389__$1,inst_23387);
} else {
if((state_val_23390 === (2))){
var inst_23295 = (state_23389[(8)]);
var inst_23300 = inst_23295.cljs$lang$protocol_mask$partition0$;
var inst_23301 = (inst_23300 & (64));
var inst_23302 = inst_23295.cljs$core$ISeq$;
var inst_23303 = (inst_23301) || (inst_23302);
var state_23389__$1 = state_23389;
if(cljs.core.truth_(inst_23303)){
var statearr_23424_23479 = state_23389__$1;
(statearr_23424_23479[(1)] = (5));

} else {
var statearr_23425_23480 = state_23389__$1;
(statearr_23425_23480[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23390 === (23))){
var inst_23348 = (state_23389[(14)]);
var inst_23354 = (inst_23348 == null);
var state_23389__$1 = state_23389;
if(cljs.core.truth_(inst_23354)){
var statearr_23426_23481 = state_23389__$1;
(statearr_23426_23481[(1)] = (26));

} else {
var statearr_23427_23482 = state_23389__$1;
(statearr_23427_23482[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23390 === (35))){
var inst_23374 = (state_23389[(2)]);
var state_23389__$1 = state_23389;
if(cljs.core.truth_(inst_23374)){
var statearr_23428_23483 = state_23389__$1;
(statearr_23428_23483[(1)] = (36));

} else {
var statearr_23429_23484 = state_23389__$1;
(statearr_23429_23484[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23390 === (19))){
var inst_23319 = (state_23389[(7)]);
var inst_23338 = cljs.core.apply.call(null,cljs.core.hash_map,inst_23319);
var state_23389__$1 = state_23389;
var statearr_23430_23485 = state_23389__$1;
(statearr_23430_23485[(2)] = inst_23338);

(statearr_23430_23485[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23390 === (11))){
var inst_23319 = (state_23389[(7)]);
var inst_23323 = (inst_23319 == null);
var inst_23324 = cljs.core.not.call(null,inst_23323);
var state_23389__$1 = state_23389;
if(inst_23324){
var statearr_23431_23486 = state_23389__$1;
(statearr_23431_23486[(1)] = (13));

} else {
var statearr_23432_23487 = state_23389__$1;
(statearr_23432_23487[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23390 === (9))){
var inst_23295 = (state_23389[(8)]);
var state_23389__$1 = state_23389;
var statearr_23433_23488 = state_23389__$1;
(statearr_23433_23488[(2)] = inst_23295);

(statearr_23433_23488[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23390 === (5))){
var state_23389__$1 = state_23389;
var statearr_23434_23489 = state_23389__$1;
(statearr_23434_23489[(2)] = true);

(statearr_23434_23489[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23390 === (14))){
var state_23389__$1 = state_23389;
var statearr_23435_23490 = state_23389__$1;
(statearr_23435_23490[(2)] = false);

(statearr_23435_23490[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23390 === (26))){
var inst_23349 = (state_23389[(11)]);
var inst_23356 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_23349);
var state_23389__$1 = state_23389;
var statearr_23436_23491 = state_23389__$1;
(statearr_23436_23491[(2)] = inst_23356);

(statearr_23436_23491[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23390 === (16))){
var state_23389__$1 = state_23389;
var statearr_23437_23492 = state_23389__$1;
(statearr_23437_23492[(2)] = true);

(statearr_23437_23492[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23390 === (38))){
var inst_23379 = (state_23389[(2)]);
var state_23389__$1 = state_23389;
var statearr_23438_23493 = state_23389__$1;
(statearr_23438_23493[(2)] = inst_23379);

(statearr_23438_23493[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23390 === (30))){
var inst_23342 = (state_23389[(9)]);
var inst_23343 = (state_23389[(13)]);
var inst_23349 = (state_23389[(11)]);
var inst_23366 = cljs.core.empty_QMARK_.call(null,inst_23342);
var inst_23367 = inst_23343.call(null,inst_23349);
var inst_23368 = cljs.core.not.call(null,inst_23367);
var inst_23369 = (inst_23366) && (inst_23368);
var state_23389__$1 = state_23389;
var statearr_23439_23494 = state_23389__$1;
(statearr_23439_23494[(2)] = inst_23369);

(statearr_23439_23494[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23390 === (10))){
var inst_23295 = (state_23389[(8)]);
var inst_23315 = (state_23389[(2)]);
var inst_23316 = cljs.core.get.call(null,inst_23315,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_23317 = cljs.core.get.call(null,inst_23315,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_23318 = cljs.core.get.call(null,inst_23315,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_23319 = inst_23295;
var state_23389__$1 = (function (){var statearr_23440 = state_23389;
(statearr_23440[(16)] = inst_23316);

(statearr_23440[(17)] = inst_23318);

(statearr_23440[(7)] = inst_23319);

(statearr_23440[(18)] = inst_23317);

return statearr_23440;
})();
var statearr_23441_23495 = state_23389__$1;
(statearr_23441_23495[(2)] = null);

(statearr_23441_23495[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23390 === (18))){
var inst_23333 = (state_23389[(2)]);
var state_23389__$1 = state_23389;
var statearr_23442_23496 = state_23389__$1;
(statearr_23442_23496[(2)] = inst_23333);

(statearr_23442_23496[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23390 === (37))){
var state_23389__$1 = state_23389;
var statearr_23443_23497 = state_23389__$1;
(statearr_23443_23497[(2)] = null);

(statearr_23443_23497[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23390 === (8))){
var inst_23295 = (state_23389[(8)]);
var inst_23312 = cljs.core.apply.call(null,cljs.core.hash_map,inst_23295);
var state_23389__$1 = state_23389;
var statearr_23444_23498 = state_23389__$1;
(statearr_23444_23498[(2)] = inst_23312);

(statearr_23444_23498[(1)] = (10));


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
});})(c__21739__auto___23452,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__21627__auto__,c__21739__auto___23452,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__21628__auto__ = null;
var cljs$core$async$mix_$_state_machine__21628__auto____0 = (function (){
var statearr_23448 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23448[(0)] = cljs$core$async$mix_$_state_machine__21628__auto__);

(statearr_23448[(1)] = (1));

return statearr_23448;
});
var cljs$core$async$mix_$_state_machine__21628__auto____1 = (function (state_23389){
while(true){
var ret_value__21629__auto__ = (function (){try{while(true){
var result__21630__auto__ = switch__21627__auto__.call(null,state_23389);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21630__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21630__auto__;
}
break;
}
}catch (e23449){if((e23449 instanceof Object)){
var ex__21631__auto__ = e23449;
var statearr_23450_23499 = state_23389;
(statearr_23450_23499[(5)] = ex__21631__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23389);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23449;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21629__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23500 = state_23389;
state_23389 = G__23500;
continue;
} else {
return ret_value__21629__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__21628__auto__ = function(state_23389){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__21628__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__21628__auto____1.call(this,state_23389);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__21628__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__21628__auto____0;
cljs$core$async$mix_$_state_machine__21628__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__21628__auto____1;
return cljs$core$async$mix_$_state_machine__21628__auto__;
})()
;})(switch__21627__auto__,c__21739__auto___23452,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__21741__auto__ = (function (){var statearr_23451 = f__21740__auto__.call(null);
(statearr_23451[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21739__auto___23452);

return statearr_23451;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21741__auto__);
});})(c__21739__auto___23452,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
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
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__18946__auto__ = (((p == null))?null:p);
var m__18947__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__18946__auto__)]);
if(!((m__18947__auto__ == null))){
return m__18947__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__18947__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__18947__auto____$1 == null))){
return m__18947__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__18946__auto__ = (((p == null))?null:p);
var m__18947__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__18946__auto__)]);
if(!((m__18947__auto__ == null))){
return m__18947__auto__.call(null,p,v,ch);
} else {
var m__18947__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__18947__auto____$1 == null))){
return m__18947__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args23501 = [];
var len__19349__auto___23504 = arguments.length;
var i__19350__auto___23505 = (0);
while(true){
if((i__19350__auto___23505 < len__19349__auto___23504)){
args23501.push((arguments[i__19350__auto___23505]));

var G__23506 = (i__19350__auto___23505 + (1));
i__19350__auto___23505 = G__23506;
continue;
} else {
}
break;
}

var G__23503 = args23501.length;
switch (G__23503) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23501.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__18946__auto__ = (((p == null))?null:p);
var m__18947__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__18946__auto__)]);
if(!((m__18947__auto__ == null))){
return m__18947__auto__.call(null,p);
} else {
var m__18947__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__18947__auto____$1 == null))){
return m__18947__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__18946__auto__ = (((p == null))?null:p);
var m__18947__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__18946__auto__)]);
if(!((m__18947__auto__ == null))){
return m__18947__auto__.call(null,p,v);
} else {
var m__18947__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__18947__auto____$1 == null))){
return m__18947__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

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
var args23509 = [];
var len__19349__auto___23634 = arguments.length;
var i__19350__auto___23635 = (0);
while(true){
if((i__19350__auto___23635 < len__19349__auto___23634)){
args23509.push((arguments[i__19350__auto___23635]));

var G__23636 = (i__19350__auto___23635 + (1));
i__19350__auto___23635 = G__23636;
continue;
} else {
}
break;
}

var G__23511 = args23509.length;
switch (G__23511) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23509.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__18291__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__18291__auto__)){
return or__18291__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__18291__auto__,mults){
return (function (p1__23508_SHARP_){
if(cljs.core.truth_(p1__23508_SHARP_.call(null,topic))){
return p1__23508_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__23508_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__18291__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async23512 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23512 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta23513){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta23513 = meta23513;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23512.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_23514,meta23513__$1){
var self__ = this;
var _23514__$1 = this;
return (new cljs.core.async.t_cljs$core$async23512(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta23513__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23512.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_23514){
var self__ = this;
var _23514__$1 = this;
return self__.meta23513;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23512.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async23512.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23512.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async23512.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23512.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23512.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23512.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23512.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta23513","meta23513",-1956397479,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23512.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23512.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23512";

cljs.core.async.t_cljs$core$async23512.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__18889__auto__,writer__18890__auto__,opt__18891__auto__){
return cljs.core._write.call(null,writer__18890__auto__,"cljs.core.async/t_cljs$core$async23512");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async23512 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async23512(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta23513){
return (new cljs.core.async.t_cljs$core$async23512(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta23513));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async23512(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__21739__auto___23638 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21739__auto___23638,mults,ensure_mult,p){
return (function (){
var f__21740__auto__ = (function (){var switch__21627__auto__ = ((function (c__21739__auto___23638,mults,ensure_mult,p){
return (function (state_23586){
var state_val_23587 = (state_23586[(1)]);
if((state_val_23587 === (7))){
var inst_23582 = (state_23586[(2)]);
var state_23586__$1 = state_23586;
var statearr_23588_23639 = state_23586__$1;
(statearr_23588_23639[(2)] = inst_23582);

(statearr_23588_23639[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23587 === (20))){
var state_23586__$1 = state_23586;
var statearr_23589_23640 = state_23586__$1;
(statearr_23589_23640[(2)] = null);

(statearr_23589_23640[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23587 === (1))){
var state_23586__$1 = state_23586;
var statearr_23590_23641 = state_23586__$1;
(statearr_23590_23641[(2)] = null);

(statearr_23590_23641[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23587 === (24))){
var inst_23565 = (state_23586[(7)]);
var inst_23574 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_23565);
var state_23586__$1 = state_23586;
var statearr_23591_23642 = state_23586__$1;
(statearr_23591_23642[(2)] = inst_23574);

(statearr_23591_23642[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23587 === (4))){
var inst_23517 = (state_23586[(8)]);
var inst_23517__$1 = (state_23586[(2)]);
var inst_23518 = (inst_23517__$1 == null);
var state_23586__$1 = (function (){var statearr_23592 = state_23586;
(statearr_23592[(8)] = inst_23517__$1);

return statearr_23592;
})();
if(cljs.core.truth_(inst_23518)){
var statearr_23593_23643 = state_23586__$1;
(statearr_23593_23643[(1)] = (5));

} else {
var statearr_23594_23644 = state_23586__$1;
(statearr_23594_23644[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23587 === (15))){
var inst_23559 = (state_23586[(2)]);
var state_23586__$1 = state_23586;
var statearr_23595_23645 = state_23586__$1;
(statearr_23595_23645[(2)] = inst_23559);

(statearr_23595_23645[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23587 === (21))){
var inst_23579 = (state_23586[(2)]);
var state_23586__$1 = (function (){var statearr_23596 = state_23586;
(statearr_23596[(9)] = inst_23579);

return statearr_23596;
})();
var statearr_23597_23646 = state_23586__$1;
(statearr_23597_23646[(2)] = null);

(statearr_23597_23646[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23587 === (13))){
var inst_23541 = (state_23586[(10)]);
var inst_23543 = cljs.core.chunked_seq_QMARK_.call(null,inst_23541);
var state_23586__$1 = state_23586;
if(inst_23543){
var statearr_23598_23647 = state_23586__$1;
(statearr_23598_23647[(1)] = (16));

} else {
var statearr_23599_23648 = state_23586__$1;
(statearr_23599_23648[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23587 === (22))){
var inst_23571 = (state_23586[(2)]);
var state_23586__$1 = state_23586;
if(cljs.core.truth_(inst_23571)){
var statearr_23600_23649 = state_23586__$1;
(statearr_23600_23649[(1)] = (23));

} else {
var statearr_23601_23650 = state_23586__$1;
(statearr_23601_23650[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23587 === (6))){
var inst_23567 = (state_23586[(11)]);
var inst_23565 = (state_23586[(7)]);
var inst_23517 = (state_23586[(8)]);
var inst_23565__$1 = topic_fn.call(null,inst_23517);
var inst_23566 = cljs.core.deref.call(null,mults);
var inst_23567__$1 = cljs.core.get.call(null,inst_23566,inst_23565__$1);
var state_23586__$1 = (function (){var statearr_23602 = state_23586;
(statearr_23602[(11)] = inst_23567__$1);

(statearr_23602[(7)] = inst_23565__$1);

return statearr_23602;
})();
if(cljs.core.truth_(inst_23567__$1)){
var statearr_23603_23651 = state_23586__$1;
(statearr_23603_23651[(1)] = (19));

} else {
var statearr_23604_23652 = state_23586__$1;
(statearr_23604_23652[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23587 === (25))){
var inst_23576 = (state_23586[(2)]);
var state_23586__$1 = state_23586;
var statearr_23605_23653 = state_23586__$1;
(statearr_23605_23653[(2)] = inst_23576);

(statearr_23605_23653[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23587 === (17))){
var inst_23541 = (state_23586[(10)]);
var inst_23550 = cljs.core.first.call(null,inst_23541);
var inst_23551 = cljs.core.async.muxch_STAR_.call(null,inst_23550);
var inst_23552 = cljs.core.async.close_BANG_.call(null,inst_23551);
var inst_23553 = cljs.core.next.call(null,inst_23541);
var inst_23527 = inst_23553;
var inst_23528 = null;
var inst_23529 = (0);
var inst_23530 = (0);
var state_23586__$1 = (function (){var statearr_23606 = state_23586;
(statearr_23606[(12)] = inst_23530);

(statearr_23606[(13)] = inst_23527);

(statearr_23606[(14)] = inst_23529);

(statearr_23606[(15)] = inst_23528);

(statearr_23606[(16)] = inst_23552);

return statearr_23606;
})();
var statearr_23607_23654 = state_23586__$1;
(statearr_23607_23654[(2)] = null);

(statearr_23607_23654[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23587 === (3))){
var inst_23584 = (state_23586[(2)]);
var state_23586__$1 = state_23586;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23586__$1,inst_23584);
} else {
if((state_val_23587 === (12))){
var inst_23561 = (state_23586[(2)]);
var state_23586__$1 = state_23586;
var statearr_23608_23655 = state_23586__$1;
(statearr_23608_23655[(2)] = inst_23561);

(statearr_23608_23655[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23587 === (2))){
var state_23586__$1 = state_23586;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23586__$1,(4),ch);
} else {
if((state_val_23587 === (23))){
var state_23586__$1 = state_23586;
var statearr_23609_23656 = state_23586__$1;
(statearr_23609_23656[(2)] = null);

(statearr_23609_23656[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23587 === (19))){
var inst_23567 = (state_23586[(11)]);
var inst_23517 = (state_23586[(8)]);
var inst_23569 = cljs.core.async.muxch_STAR_.call(null,inst_23567);
var state_23586__$1 = state_23586;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23586__$1,(22),inst_23569,inst_23517);
} else {
if((state_val_23587 === (11))){
var inst_23541 = (state_23586[(10)]);
var inst_23527 = (state_23586[(13)]);
var inst_23541__$1 = cljs.core.seq.call(null,inst_23527);
var state_23586__$1 = (function (){var statearr_23610 = state_23586;
(statearr_23610[(10)] = inst_23541__$1);

return statearr_23610;
})();
if(inst_23541__$1){
var statearr_23611_23657 = state_23586__$1;
(statearr_23611_23657[(1)] = (13));

} else {
var statearr_23612_23658 = state_23586__$1;
(statearr_23612_23658[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23587 === (9))){
var inst_23563 = (state_23586[(2)]);
var state_23586__$1 = state_23586;
var statearr_23613_23659 = state_23586__$1;
(statearr_23613_23659[(2)] = inst_23563);

(statearr_23613_23659[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23587 === (5))){
var inst_23524 = cljs.core.deref.call(null,mults);
var inst_23525 = cljs.core.vals.call(null,inst_23524);
var inst_23526 = cljs.core.seq.call(null,inst_23525);
var inst_23527 = inst_23526;
var inst_23528 = null;
var inst_23529 = (0);
var inst_23530 = (0);
var state_23586__$1 = (function (){var statearr_23614 = state_23586;
(statearr_23614[(12)] = inst_23530);

(statearr_23614[(13)] = inst_23527);

(statearr_23614[(14)] = inst_23529);

(statearr_23614[(15)] = inst_23528);

return statearr_23614;
})();
var statearr_23615_23660 = state_23586__$1;
(statearr_23615_23660[(2)] = null);

(statearr_23615_23660[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23587 === (14))){
var state_23586__$1 = state_23586;
var statearr_23619_23661 = state_23586__$1;
(statearr_23619_23661[(2)] = null);

(statearr_23619_23661[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23587 === (16))){
var inst_23541 = (state_23586[(10)]);
var inst_23545 = cljs.core.chunk_first.call(null,inst_23541);
var inst_23546 = cljs.core.chunk_rest.call(null,inst_23541);
var inst_23547 = cljs.core.count.call(null,inst_23545);
var inst_23527 = inst_23546;
var inst_23528 = inst_23545;
var inst_23529 = inst_23547;
var inst_23530 = (0);
var state_23586__$1 = (function (){var statearr_23620 = state_23586;
(statearr_23620[(12)] = inst_23530);

(statearr_23620[(13)] = inst_23527);

(statearr_23620[(14)] = inst_23529);

(statearr_23620[(15)] = inst_23528);

return statearr_23620;
})();
var statearr_23621_23662 = state_23586__$1;
(statearr_23621_23662[(2)] = null);

(statearr_23621_23662[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23587 === (10))){
var inst_23530 = (state_23586[(12)]);
var inst_23527 = (state_23586[(13)]);
var inst_23529 = (state_23586[(14)]);
var inst_23528 = (state_23586[(15)]);
var inst_23535 = cljs.core._nth.call(null,inst_23528,inst_23530);
var inst_23536 = cljs.core.async.muxch_STAR_.call(null,inst_23535);
var inst_23537 = cljs.core.async.close_BANG_.call(null,inst_23536);
var inst_23538 = (inst_23530 + (1));
var tmp23616 = inst_23527;
var tmp23617 = inst_23529;
var tmp23618 = inst_23528;
var inst_23527__$1 = tmp23616;
var inst_23528__$1 = tmp23618;
var inst_23529__$1 = tmp23617;
var inst_23530__$1 = inst_23538;
var state_23586__$1 = (function (){var statearr_23622 = state_23586;
(statearr_23622[(17)] = inst_23537);

(statearr_23622[(12)] = inst_23530__$1);

(statearr_23622[(13)] = inst_23527__$1);

(statearr_23622[(14)] = inst_23529__$1);

(statearr_23622[(15)] = inst_23528__$1);

return statearr_23622;
})();
var statearr_23623_23663 = state_23586__$1;
(statearr_23623_23663[(2)] = null);

(statearr_23623_23663[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23587 === (18))){
var inst_23556 = (state_23586[(2)]);
var state_23586__$1 = state_23586;
var statearr_23624_23664 = state_23586__$1;
(statearr_23624_23664[(2)] = inst_23556);

(statearr_23624_23664[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23587 === (8))){
var inst_23530 = (state_23586[(12)]);
var inst_23529 = (state_23586[(14)]);
var inst_23532 = (inst_23530 < inst_23529);
var inst_23533 = inst_23532;
var state_23586__$1 = state_23586;
if(cljs.core.truth_(inst_23533)){
var statearr_23625_23665 = state_23586__$1;
(statearr_23625_23665[(1)] = (10));

} else {
var statearr_23626_23666 = state_23586__$1;
(statearr_23626_23666[(1)] = (11));

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
});})(c__21739__auto___23638,mults,ensure_mult,p))
;
return ((function (switch__21627__auto__,c__21739__auto___23638,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__21628__auto__ = null;
var cljs$core$async$state_machine__21628__auto____0 = (function (){
var statearr_23630 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23630[(0)] = cljs$core$async$state_machine__21628__auto__);

(statearr_23630[(1)] = (1));

return statearr_23630;
});
var cljs$core$async$state_machine__21628__auto____1 = (function (state_23586){
while(true){
var ret_value__21629__auto__ = (function (){try{while(true){
var result__21630__auto__ = switch__21627__auto__.call(null,state_23586);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21630__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21630__auto__;
}
break;
}
}catch (e23631){if((e23631 instanceof Object)){
var ex__21631__auto__ = e23631;
var statearr_23632_23667 = state_23586;
(statearr_23632_23667[(5)] = ex__21631__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23586);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23631;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21629__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23668 = state_23586;
state_23586 = G__23668;
continue;
} else {
return ret_value__21629__auto__;
}
break;
}
});
cljs$core$async$state_machine__21628__auto__ = function(state_23586){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21628__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21628__auto____1.call(this,state_23586);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21628__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21628__auto____0;
cljs$core$async$state_machine__21628__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21628__auto____1;
return cljs$core$async$state_machine__21628__auto__;
})()
;})(switch__21627__auto__,c__21739__auto___23638,mults,ensure_mult,p))
})();
var state__21741__auto__ = (function (){var statearr_23633 = f__21740__auto__.call(null);
(statearr_23633[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21739__auto___23638);

return statearr_23633;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21741__auto__);
});})(c__21739__auto___23638,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args23669 = [];
var len__19349__auto___23672 = arguments.length;
var i__19350__auto___23673 = (0);
while(true){
if((i__19350__auto___23673 < len__19349__auto___23672)){
args23669.push((arguments[i__19350__auto___23673]));

var G__23674 = (i__19350__auto___23673 + (1));
i__19350__auto___23673 = G__23674;
continue;
} else {
}
break;
}

var G__23671 = args23669.length;
switch (G__23671) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23669.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args23676 = [];
var len__19349__auto___23679 = arguments.length;
var i__19350__auto___23680 = (0);
while(true){
if((i__19350__auto___23680 < len__19349__auto___23679)){
args23676.push((arguments[i__19350__auto___23680]));

var G__23681 = (i__19350__auto___23680 + (1));
i__19350__auto___23680 = G__23681;
continue;
} else {
}
break;
}

var G__23678 = args23676.length;
switch (G__23678) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23676.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
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
var args23683 = [];
var len__19349__auto___23754 = arguments.length;
var i__19350__auto___23755 = (0);
while(true){
if((i__19350__auto___23755 < len__19349__auto___23754)){
args23683.push((arguments[i__19350__auto___23755]));

var G__23756 = (i__19350__auto___23755 + (1));
i__19350__auto___23755 = G__23756;
continue;
} else {
}
break;
}

var G__23685 = args23683.length;
switch (G__23685) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23683.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__21739__auto___23758 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21739__auto___23758,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__21740__auto__ = (function (){var switch__21627__auto__ = ((function (c__21739__auto___23758,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_23724){
var state_val_23725 = (state_23724[(1)]);
if((state_val_23725 === (7))){
var state_23724__$1 = state_23724;
var statearr_23726_23759 = state_23724__$1;
(statearr_23726_23759[(2)] = null);

(statearr_23726_23759[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23725 === (1))){
var state_23724__$1 = state_23724;
var statearr_23727_23760 = state_23724__$1;
(statearr_23727_23760[(2)] = null);

(statearr_23727_23760[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23725 === (4))){
var inst_23688 = (state_23724[(7)]);
var inst_23690 = (inst_23688 < cnt);
var state_23724__$1 = state_23724;
if(cljs.core.truth_(inst_23690)){
var statearr_23728_23761 = state_23724__$1;
(statearr_23728_23761[(1)] = (6));

} else {
var statearr_23729_23762 = state_23724__$1;
(statearr_23729_23762[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23725 === (15))){
var inst_23720 = (state_23724[(2)]);
var state_23724__$1 = state_23724;
var statearr_23730_23763 = state_23724__$1;
(statearr_23730_23763[(2)] = inst_23720);

(statearr_23730_23763[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23725 === (13))){
var inst_23713 = cljs.core.async.close_BANG_.call(null,out);
var state_23724__$1 = state_23724;
var statearr_23731_23764 = state_23724__$1;
(statearr_23731_23764[(2)] = inst_23713);

(statearr_23731_23764[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23725 === (6))){
var state_23724__$1 = state_23724;
var statearr_23732_23765 = state_23724__$1;
(statearr_23732_23765[(2)] = null);

(statearr_23732_23765[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23725 === (3))){
var inst_23722 = (state_23724[(2)]);
var state_23724__$1 = state_23724;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23724__$1,inst_23722);
} else {
if((state_val_23725 === (12))){
var inst_23710 = (state_23724[(8)]);
var inst_23710__$1 = (state_23724[(2)]);
var inst_23711 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_23710__$1);
var state_23724__$1 = (function (){var statearr_23733 = state_23724;
(statearr_23733[(8)] = inst_23710__$1);

return statearr_23733;
})();
if(cljs.core.truth_(inst_23711)){
var statearr_23734_23766 = state_23724__$1;
(statearr_23734_23766[(1)] = (13));

} else {
var statearr_23735_23767 = state_23724__$1;
(statearr_23735_23767[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23725 === (2))){
var inst_23687 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_23688 = (0);
var state_23724__$1 = (function (){var statearr_23736 = state_23724;
(statearr_23736[(9)] = inst_23687);

(statearr_23736[(7)] = inst_23688);

return statearr_23736;
})();
var statearr_23737_23768 = state_23724__$1;
(statearr_23737_23768[(2)] = null);

(statearr_23737_23768[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23725 === (11))){
var inst_23688 = (state_23724[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_23724,(10),Object,null,(9));
var inst_23697 = chs__$1.call(null,inst_23688);
var inst_23698 = done.call(null,inst_23688);
var inst_23699 = cljs.core.async.take_BANG_.call(null,inst_23697,inst_23698);
var state_23724__$1 = state_23724;
var statearr_23738_23769 = state_23724__$1;
(statearr_23738_23769[(2)] = inst_23699);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23724__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23725 === (9))){
var inst_23688 = (state_23724[(7)]);
var inst_23701 = (state_23724[(2)]);
var inst_23702 = (inst_23688 + (1));
var inst_23688__$1 = inst_23702;
var state_23724__$1 = (function (){var statearr_23739 = state_23724;
(statearr_23739[(7)] = inst_23688__$1);

(statearr_23739[(10)] = inst_23701);

return statearr_23739;
})();
var statearr_23740_23770 = state_23724__$1;
(statearr_23740_23770[(2)] = null);

(statearr_23740_23770[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23725 === (5))){
var inst_23708 = (state_23724[(2)]);
var state_23724__$1 = (function (){var statearr_23741 = state_23724;
(statearr_23741[(11)] = inst_23708);

return statearr_23741;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23724__$1,(12),dchan);
} else {
if((state_val_23725 === (14))){
var inst_23710 = (state_23724[(8)]);
var inst_23715 = cljs.core.apply.call(null,f,inst_23710);
var state_23724__$1 = state_23724;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23724__$1,(16),out,inst_23715);
} else {
if((state_val_23725 === (16))){
var inst_23717 = (state_23724[(2)]);
var state_23724__$1 = (function (){var statearr_23742 = state_23724;
(statearr_23742[(12)] = inst_23717);

return statearr_23742;
})();
var statearr_23743_23771 = state_23724__$1;
(statearr_23743_23771[(2)] = null);

(statearr_23743_23771[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23725 === (10))){
var inst_23692 = (state_23724[(2)]);
var inst_23693 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_23724__$1 = (function (){var statearr_23744 = state_23724;
(statearr_23744[(13)] = inst_23692);

return statearr_23744;
})();
var statearr_23745_23772 = state_23724__$1;
(statearr_23745_23772[(2)] = inst_23693);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23724__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23725 === (8))){
var inst_23706 = (state_23724[(2)]);
var state_23724__$1 = state_23724;
var statearr_23746_23773 = state_23724__$1;
(statearr_23746_23773[(2)] = inst_23706);

(statearr_23746_23773[(1)] = (5));


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
});})(c__21739__auto___23758,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__21627__auto__,c__21739__auto___23758,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__21628__auto__ = null;
var cljs$core$async$state_machine__21628__auto____0 = (function (){
var statearr_23750 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23750[(0)] = cljs$core$async$state_machine__21628__auto__);

(statearr_23750[(1)] = (1));

return statearr_23750;
});
var cljs$core$async$state_machine__21628__auto____1 = (function (state_23724){
while(true){
var ret_value__21629__auto__ = (function (){try{while(true){
var result__21630__auto__ = switch__21627__auto__.call(null,state_23724);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21630__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21630__auto__;
}
break;
}
}catch (e23751){if((e23751 instanceof Object)){
var ex__21631__auto__ = e23751;
var statearr_23752_23774 = state_23724;
(statearr_23752_23774[(5)] = ex__21631__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23724);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23751;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21629__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23775 = state_23724;
state_23724 = G__23775;
continue;
} else {
return ret_value__21629__auto__;
}
break;
}
});
cljs$core$async$state_machine__21628__auto__ = function(state_23724){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21628__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21628__auto____1.call(this,state_23724);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21628__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21628__auto____0;
cljs$core$async$state_machine__21628__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21628__auto____1;
return cljs$core$async$state_machine__21628__auto__;
})()
;})(switch__21627__auto__,c__21739__auto___23758,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__21741__auto__ = (function (){var statearr_23753 = f__21740__auto__.call(null);
(statearr_23753[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21739__auto___23758);

return statearr_23753;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21741__auto__);
});})(c__21739__auto___23758,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args23777 = [];
var len__19349__auto___23833 = arguments.length;
var i__19350__auto___23834 = (0);
while(true){
if((i__19350__auto___23834 < len__19349__auto___23833)){
args23777.push((arguments[i__19350__auto___23834]));

var G__23835 = (i__19350__auto___23834 + (1));
i__19350__auto___23834 = G__23835;
continue;
} else {
}
break;
}

var G__23779 = args23777.length;
switch (G__23779) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23777.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21739__auto___23837 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21739__auto___23837,out){
return (function (){
var f__21740__auto__ = (function (){var switch__21627__auto__ = ((function (c__21739__auto___23837,out){
return (function (state_23809){
var state_val_23810 = (state_23809[(1)]);
if((state_val_23810 === (7))){
var inst_23789 = (state_23809[(7)]);
var inst_23788 = (state_23809[(8)]);
var inst_23788__$1 = (state_23809[(2)]);
var inst_23789__$1 = cljs.core.nth.call(null,inst_23788__$1,(0),null);
var inst_23790 = cljs.core.nth.call(null,inst_23788__$1,(1),null);
var inst_23791 = (inst_23789__$1 == null);
var state_23809__$1 = (function (){var statearr_23811 = state_23809;
(statearr_23811[(7)] = inst_23789__$1);

(statearr_23811[(8)] = inst_23788__$1);

(statearr_23811[(9)] = inst_23790);

return statearr_23811;
})();
if(cljs.core.truth_(inst_23791)){
var statearr_23812_23838 = state_23809__$1;
(statearr_23812_23838[(1)] = (8));

} else {
var statearr_23813_23839 = state_23809__$1;
(statearr_23813_23839[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23810 === (1))){
var inst_23780 = cljs.core.vec.call(null,chs);
var inst_23781 = inst_23780;
var state_23809__$1 = (function (){var statearr_23814 = state_23809;
(statearr_23814[(10)] = inst_23781);

return statearr_23814;
})();
var statearr_23815_23840 = state_23809__$1;
(statearr_23815_23840[(2)] = null);

(statearr_23815_23840[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23810 === (4))){
var inst_23781 = (state_23809[(10)]);
var state_23809__$1 = state_23809;
return cljs.core.async.ioc_alts_BANG_.call(null,state_23809__$1,(7),inst_23781);
} else {
if((state_val_23810 === (6))){
var inst_23805 = (state_23809[(2)]);
var state_23809__$1 = state_23809;
var statearr_23816_23841 = state_23809__$1;
(statearr_23816_23841[(2)] = inst_23805);

(statearr_23816_23841[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23810 === (3))){
var inst_23807 = (state_23809[(2)]);
var state_23809__$1 = state_23809;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23809__$1,inst_23807);
} else {
if((state_val_23810 === (2))){
var inst_23781 = (state_23809[(10)]);
var inst_23783 = cljs.core.count.call(null,inst_23781);
var inst_23784 = (inst_23783 > (0));
var state_23809__$1 = state_23809;
if(cljs.core.truth_(inst_23784)){
var statearr_23818_23842 = state_23809__$1;
(statearr_23818_23842[(1)] = (4));

} else {
var statearr_23819_23843 = state_23809__$1;
(statearr_23819_23843[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23810 === (11))){
var inst_23781 = (state_23809[(10)]);
var inst_23798 = (state_23809[(2)]);
var tmp23817 = inst_23781;
var inst_23781__$1 = tmp23817;
var state_23809__$1 = (function (){var statearr_23820 = state_23809;
(statearr_23820[(10)] = inst_23781__$1);

(statearr_23820[(11)] = inst_23798);

return statearr_23820;
})();
var statearr_23821_23844 = state_23809__$1;
(statearr_23821_23844[(2)] = null);

(statearr_23821_23844[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23810 === (9))){
var inst_23789 = (state_23809[(7)]);
var state_23809__$1 = state_23809;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23809__$1,(11),out,inst_23789);
} else {
if((state_val_23810 === (5))){
var inst_23803 = cljs.core.async.close_BANG_.call(null,out);
var state_23809__$1 = state_23809;
var statearr_23822_23845 = state_23809__$1;
(statearr_23822_23845[(2)] = inst_23803);

(statearr_23822_23845[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23810 === (10))){
var inst_23801 = (state_23809[(2)]);
var state_23809__$1 = state_23809;
var statearr_23823_23846 = state_23809__$1;
(statearr_23823_23846[(2)] = inst_23801);

(statearr_23823_23846[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23810 === (8))){
var inst_23781 = (state_23809[(10)]);
var inst_23789 = (state_23809[(7)]);
var inst_23788 = (state_23809[(8)]);
var inst_23790 = (state_23809[(9)]);
var inst_23793 = (function (){var cs = inst_23781;
var vec__23786 = inst_23788;
var v = inst_23789;
var c = inst_23790;
return ((function (cs,vec__23786,v,c,inst_23781,inst_23789,inst_23788,inst_23790,state_val_23810,c__21739__auto___23837,out){
return (function (p1__23776_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__23776_SHARP_);
});
;})(cs,vec__23786,v,c,inst_23781,inst_23789,inst_23788,inst_23790,state_val_23810,c__21739__auto___23837,out))
})();
var inst_23794 = cljs.core.filterv.call(null,inst_23793,inst_23781);
var inst_23781__$1 = inst_23794;
var state_23809__$1 = (function (){var statearr_23824 = state_23809;
(statearr_23824[(10)] = inst_23781__$1);

return statearr_23824;
})();
var statearr_23825_23847 = state_23809__$1;
(statearr_23825_23847[(2)] = null);

(statearr_23825_23847[(1)] = (2));


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
});})(c__21739__auto___23837,out))
;
return ((function (switch__21627__auto__,c__21739__auto___23837,out){
return (function() {
var cljs$core$async$state_machine__21628__auto__ = null;
var cljs$core$async$state_machine__21628__auto____0 = (function (){
var statearr_23829 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23829[(0)] = cljs$core$async$state_machine__21628__auto__);

(statearr_23829[(1)] = (1));

return statearr_23829;
});
var cljs$core$async$state_machine__21628__auto____1 = (function (state_23809){
while(true){
var ret_value__21629__auto__ = (function (){try{while(true){
var result__21630__auto__ = switch__21627__auto__.call(null,state_23809);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21630__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21630__auto__;
}
break;
}
}catch (e23830){if((e23830 instanceof Object)){
var ex__21631__auto__ = e23830;
var statearr_23831_23848 = state_23809;
(statearr_23831_23848[(5)] = ex__21631__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23809);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23830;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21629__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23849 = state_23809;
state_23809 = G__23849;
continue;
} else {
return ret_value__21629__auto__;
}
break;
}
});
cljs$core$async$state_machine__21628__auto__ = function(state_23809){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21628__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21628__auto____1.call(this,state_23809);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21628__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21628__auto____0;
cljs$core$async$state_machine__21628__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21628__auto____1;
return cljs$core$async$state_machine__21628__auto__;
})()
;})(switch__21627__auto__,c__21739__auto___23837,out))
})();
var state__21741__auto__ = (function (){var statearr_23832 = f__21740__auto__.call(null);
(statearr_23832[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21739__auto___23837);

return statearr_23832;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21741__auto__);
});})(c__21739__auto___23837,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args23850 = [];
var len__19349__auto___23899 = arguments.length;
var i__19350__auto___23900 = (0);
while(true){
if((i__19350__auto___23900 < len__19349__auto___23899)){
args23850.push((arguments[i__19350__auto___23900]));

var G__23901 = (i__19350__auto___23900 + (1));
i__19350__auto___23900 = G__23901;
continue;
} else {
}
break;
}

var G__23852 = args23850.length;
switch (G__23852) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23850.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21739__auto___23903 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21739__auto___23903,out){
return (function (){
var f__21740__auto__ = (function (){var switch__21627__auto__ = ((function (c__21739__auto___23903,out){
return (function (state_23876){
var state_val_23877 = (state_23876[(1)]);
if((state_val_23877 === (7))){
var inst_23858 = (state_23876[(7)]);
var inst_23858__$1 = (state_23876[(2)]);
var inst_23859 = (inst_23858__$1 == null);
var inst_23860 = cljs.core.not.call(null,inst_23859);
var state_23876__$1 = (function (){var statearr_23878 = state_23876;
(statearr_23878[(7)] = inst_23858__$1);

return statearr_23878;
})();
if(inst_23860){
var statearr_23879_23904 = state_23876__$1;
(statearr_23879_23904[(1)] = (8));

} else {
var statearr_23880_23905 = state_23876__$1;
(statearr_23880_23905[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23877 === (1))){
var inst_23853 = (0);
var state_23876__$1 = (function (){var statearr_23881 = state_23876;
(statearr_23881[(8)] = inst_23853);

return statearr_23881;
})();
var statearr_23882_23906 = state_23876__$1;
(statearr_23882_23906[(2)] = null);

(statearr_23882_23906[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23877 === (4))){
var state_23876__$1 = state_23876;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23876__$1,(7),ch);
} else {
if((state_val_23877 === (6))){
var inst_23871 = (state_23876[(2)]);
var state_23876__$1 = state_23876;
var statearr_23883_23907 = state_23876__$1;
(statearr_23883_23907[(2)] = inst_23871);

(statearr_23883_23907[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23877 === (3))){
var inst_23873 = (state_23876[(2)]);
var inst_23874 = cljs.core.async.close_BANG_.call(null,out);
var state_23876__$1 = (function (){var statearr_23884 = state_23876;
(statearr_23884[(9)] = inst_23873);

return statearr_23884;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23876__$1,inst_23874);
} else {
if((state_val_23877 === (2))){
var inst_23853 = (state_23876[(8)]);
var inst_23855 = (inst_23853 < n);
var state_23876__$1 = state_23876;
if(cljs.core.truth_(inst_23855)){
var statearr_23885_23908 = state_23876__$1;
(statearr_23885_23908[(1)] = (4));

} else {
var statearr_23886_23909 = state_23876__$1;
(statearr_23886_23909[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23877 === (11))){
var inst_23853 = (state_23876[(8)]);
var inst_23863 = (state_23876[(2)]);
var inst_23864 = (inst_23853 + (1));
var inst_23853__$1 = inst_23864;
var state_23876__$1 = (function (){var statearr_23887 = state_23876;
(statearr_23887[(10)] = inst_23863);

(statearr_23887[(8)] = inst_23853__$1);

return statearr_23887;
})();
var statearr_23888_23910 = state_23876__$1;
(statearr_23888_23910[(2)] = null);

(statearr_23888_23910[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23877 === (9))){
var state_23876__$1 = state_23876;
var statearr_23889_23911 = state_23876__$1;
(statearr_23889_23911[(2)] = null);

(statearr_23889_23911[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23877 === (5))){
var state_23876__$1 = state_23876;
var statearr_23890_23912 = state_23876__$1;
(statearr_23890_23912[(2)] = null);

(statearr_23890_23912[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23877 === (10))){
var inst_23868 = (state_23876[(2)]);
var state_23876__$1 = state_23876;
var statearr_23891_23913 = state_23876__$1;
(statearr_23891_23913[(2)] = inst_23868);

(statearr_23891_23913[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23877 === (8))){
var inst_23858 = (state_23876[(7)]);
var state_23876__$1 = state_23876;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23876__$1,(11),out,inst_23858);
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
});})(c__21739__auto___23903,out))
;
return ((function (switch__21627__auto__,c__21739__auto___23903,out){
return (function() {
var cljs$core$async$state_machine__21628__auto__ = null;
var cljs$core$async$state_machine__21628__auto____0 = (function (){
var statearr_23895 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23895[(0)] = cljs$core$async$state_machine__21628__auto__);

(statearr_23895[(1)] = (1));

return statearr_23895;
});
var cljs$core$async$state_machine__21628__auto____1 = (function (state_23876){
while(true){
var ret_value__21629__auto__ = (function (){try{while(true){
var result__21630__auto__ = switch__21627__auto__.call(null,state_23876);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21630__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21630__auto__;
}
break;
}
}catch (e23896){if((e23896 instanceof Object)){
var ex__21631__auto__ = e23896;
var statearr_23897_23914 = state_23876;
(statearr_23897_23914[(5)] = ex__21631__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23876);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23896;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21629__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23915 = state_23876;
state_23876 = G__23915;
continue;
} else {
return ret_value__21629__auto__;
}
break;
}
});
cljs$core$async$state_machine__21628__auto__ = function(state_23876){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21628__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21628__auto____1.call(this,state_23876);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21628__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21628__auto____0;
cljs$core$async$state_machine__21628__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21628__auto____1;
return cljs$core$async$state_machine__21628__auto__;
})()
;})(switch__21627__auto__,c__21739__auto___23903,out))
})();
var state__21741__auto__ = (function (){var statearr_23898 = f__21740__auto__.call(null);
(statearr_23898[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21739__auto___23903);

return statearr_23898;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21741__auto__);
});})(c__21739__auto___23903,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async23923 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23923 = (function (map_LT_,f,ch,meta23924){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta23924 = meta23924;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23923.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23925,meta23924__$1){
var self__ = this;
var _23925__$1 = this;
return (new cljs.core.async.t_cljs$core$async23923(self__.map_LT_,self__.f,self__.ch,meta23924__$1));
});

cljs.core.async.t_cljs$core$async23923.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23925){
var self__ = this;
var _23925__$1 = this;
return self__.meta23924;
});

cljs.core.async.t_cljs$core$async23923.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async23923.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async23923.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async23923.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async23923.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async23926 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23926 = (function (map_LT_,f,ch,meta23924,_,fn1,meta23927){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta23924 = meta23924;
this._ = _;
this.fn1 = fn1;
this.meta23927 = meta23927;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23926.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_23928,meta23927__$1){
var self__ = this;
var _23928__$1 = this;
return (new cljs.core.async.t_cljs$core$async23926(self__.map_LT_,self__.f,self__.ch,self__.meta23924,self__._,self__.fn1,meta23927__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async23926.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_23928){
var self__ = this;
var _23928__$1 = this;
return self__.meta23927;
});})(___$1))
;

cljs.core.async.t_cljs$core$async23926.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async23926.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async23926.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async23926.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__23916_SHARP_){
return f1.call(null,(((p1__23916_SHARP_ == null))?null:self__.f.call(null,p1__23916_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async23926.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta23924","meta23924",505226462,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async23923","cljs.core.async/t_cljs$core$async23923",1110103061,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta23927","meta23927",1934355099,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async23926.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23926.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23926";

cljs.core.async.t_cljs$core$async23926.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__18889__auto__,writer__18890__auto__,opt__18891__auto__){
return cljs.core._write.call(null,writer__18890__auto__,"cljs.core.async/t_cljs$core$async23926");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async23926 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async23926(map_LT___$1,f__$1,ch__$1,meta23924__$1,___$2,fn1__$1,meta23927){
return (new cljs.core.async.t_cljs$core$async23926(map_LT___$1,f__$1,ch__$1,meta23924__$1,___$2,fn1__$1,meta23927));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async23926(self__.map_LT_,self__.f,self__.ch,self__.meta23924,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__18279__auto__ = ret;
if(cljs.core.truth_(and__18279__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__18279__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async23923.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async23923.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async23923.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta23924","meta23924",505226462,null)], null);
});

cljs.core.async.t_cljs$core$async23923.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23923.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23923";

cljs.core.async.t_cljs$core$async23923.cljs$lang$ctorPrWriter = (function (this__18889__auto__,writer__18890__auto__,opt__18891__auto__){
return cljs.core._write.call(null,writer__18890__auto__,"cljs.core.async/t_cljs$core$async23923");
});

cljs.core.async.__GT_t_cljs$core$async23923 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async23923(map_LT___$1,f__$1,ch__$1,meta23924){
return (new cljs.core.async.t_cljs$core$async23923(map_LT___$1,f__$1,ch__$1,meta23924));
});

}

return (new cljs.core.async.t_cljs$core$async23923(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async23932 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23932 = (function (map_GT_,f,ch,meta23933){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta23933 = meta23933;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23932.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23934,meta23933__$1){
var self__ = this;
var _23934__$1 = this;
return (new cljs.core.async.t_cljs$core$async23932(self__.map_GT_,self__.f,self__.ch,meta23933__$1));
});

cljs.core.async.t_cljs$core$async23932.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23934){
var self__ = this;
var _23934__$1 = this;
return self__.meta23933;
});

cljs.core.async.t_cljs$core$async23932.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async23932.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async23932.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async23932.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async23932.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async23932.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async23932.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta23933","meta23933",-1973466380,null)], null);
});

cljs.core.async.t_cljs$core$async23932.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23932.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23932";

cljs.core.async.t_cljs$core$async23932.cljs$lang$ctorPrWriter = (function (this__18889__auto__,writer__18890__auto__,opt__18891__auto__){
return cljs.core._write.call(null,writer__18890__auto__,"cljs.core.async/t_cljs$core$async23932");
});

cljs.core.async.__GT_t_cljs$core$async23932 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async23932(map_GT___$1,f__$1,ch__$1,meta23933){
return (new cljs.core.async.t_cljs$core$async23932(map_GT___$1,f__$1,ch__$1,meta23933));
});

}

return (new cljs.core.async.t_cljs$core$async23932(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async23938 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23938 = (function (filter_GT_,p,ch,meta23939){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta23939 = meta23939;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23938.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23940,meta23939__$1){
var self__ = this;
var _23940__$1 = this;
return (new cljs.core.async.t_cljs$core$async23938(self__.filter_GT_,self__.p,self__.ch,meta23939__$1));
});

cljs.core.async.t_cljs$core$async23938.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23940){
var self__ = this;
var _23940__$1 = this;
return self__.meta23939;
});

cljs.core.async.t_cljs$core$async23938.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async23938.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async23938.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async23938.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async23938.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async23938.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async23938.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async23938.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta23939","meta23939",-752872076,null)], null);
});

cljs.core.async.t_cljs$core$async23938.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23938.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23938";

cljs.core.async.t_cljs$core$async23938.cljs$lang$ctorPrWriter = (function (this__18889__auto__,writer__18890__auto__,opt__18891__auto__){
return cljs.core._write.call(null,writer__18890__auto__,"cljs.core.async/t_cljs$core$async23938");
});

cljs.core.async.__GT_t_cljs$core$async23938 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async23938(filter_GT___$1,p__$1,ch__$1,meta23939){
return (new cljs.core.async.t_cljs$core$async23938(filter_GT___$1,p__$1,ch__$1,meta23939));
});

}

return (new cljs.core.async.t_cljs$core$async23938(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args23941 = [];
var len__19349__auto___23985 = arguments.length;
var i__19350__auto___23986 = (0);
while(true){
if((i__19350__auto___23986 < len__19349__auto___23985)){
args23941.push((arguments[i__19350__auto___23986]));

var G__23987 = (i__19350__auto___23986 + (1));
i__19350__auto___23986 = G__23987;
continue;
} else {
}
break;
}

var G__23943 = args23941.length;
switch (G__23943) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23941.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21739__auto___23989 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21739__auto___23989,out){
return (function (){
var f__21740__auto__ = (function (){var switch__21627__auto__ = ((function (c__21739__auto___23989,out){
return (function (state_23964){
var state_val_23965 = (state_23964[(1)]);
if((state_val_23965 === (7))){
var inst_23960 = (state_23964[(2)]);
var state_23964__$1 = state_23964;
var statearr_23966_23990 = state_23964__$1;
(statearr_23966_23990[(2)] = inst_23960);

(statearr_23966_23990[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23965 === (1))){
var state_23964__$1 = state_23964;
var statearr_23967_23991 = state_23964__$1;
(statearr_23967_23991[(2)] = null);

(statearr_23967_23991[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23965 === (4))){
var inst_23946 = (state_23964[(7)]);
var inst_23946__$1 = (state_23964[(2)]);
var inst_23947 = (inst_23946__$1 == null);
var state_23964__$1 = (function (){var statearr_23968 = state_23964;
(statearr_23968[(7)] = inst_23946__$1);

return statearr_23968;
})();
if(cljs.core.truth_(inst_23947)){
var statearr_23969_23992 = state_23964__$1;
(statearr_23969_23992[(1)] = (5));

} else {
var statearr_23970_23993 = state_23964__$1;
(statearr_23970_23993[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23965 === (6))){
var inst_23946 = (state_23964[(7)]);
var inst_23951 = p.call(null,inst_23946);
var state_23964__$1 = state_23964;
if(cljs.core.truth_(inst_23951)){
var statearr_23971_23994 = state_23964__$1;
(statearr_23971_23994[(1)] = (8));

} else {
var statearr_23972_23995 = state_23964__$1;
(statearr_23972_23995[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23965 === (3))){
var inst_23962 = (state_23964[(2)]);
var state_23964__$1 = state_23964;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23964__$1,inst_23962);
} else {
if((state_val_23965 === (2))){
var state_23964__$1 = state_23964;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23964__$1,(4),ch);
} else {
if((state_val_23965 === (11))){
var inst_23954 = (state_23964[(2)]);
var state_23964__$1 = state_23964;
var statearr_23973_23996 = state_23964__$1;
(statearr_23973_23996[(2)] = inst_23954);

(statearr_23973_23996[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23965 === (9))){
var state_23964__$1 = state_23964;
var statearr_23974_23997 = state_23964__$1;
(statearr_23974_23997[(2)] = null);

(statearr_23974_23997[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23965 === (5))){
var inst_23949 = cljs.core.async.close_BANG_.call(null,out);
var state_23964__$1 = state_23964;
var statearr_23975_23998 = state_23964__$1;
(statearr_23975_23998[(2)] = inst_23949);

(statearr_23975_23998[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23965 === (10))){
var inst_23957 = (state_23964[(2)]);
var state_23964__$1 = (function (){var statearr_23976 = state_23964;
(statearr_23976[(8)] = inst_23957);

return statearr_23976;
})();
var statearr_23977_23999 = state_23964__$1;
(statearr_23977_23999[(2)] = null);

(statearr_23977_23999[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23965 === (8))){
var inst_23946 = (state_23964[(7)]);
var state_23964__$1 = state_23964;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23964__$1,(11),out,inst_23946);
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
});})(c__21739__auto___23989,out))
;
return ((function (switch__21627__auto__,c__21739__auto___23989,out){
return (function() {
var cljs$core$async$state_machine__21628__auto__ = null;
var cljs$core$async$state_machine__21628__auto____0 = (function (){
var statearr_23981 = [null,null,null,null,null,null,null,null,null];
(statearr_23981[(0)] = cljs$core$async$state_machine__21628__auto__);

(statearr_23981[(1)] = (1));

return statearr_23981;
});
var cljs$core$async$state_machine__21628__auto____1 = (function (state_23964){
while(true){
var ret_value__21629__auto__ = (function (){try{while(true){
var result__21630__auto__ = switch__21627__auto__.call(null,state_23964);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21630__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21630__auto__;
}
break;
}
}catch (e23982){if((e23982 instanceof Object)){
var ex__21631__auto__ = e23982;
var statearr_23983_24000 = state_23964;
(statearr_23983_24000[(5)] = ex__21631__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23964);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23982;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21629__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24001 = state_23964;
state_23964 = G__24001;
continue;
} else {
return ret_value__21629__auto__;
}
break;
}
});
cljs$core$async$state_machine__21628__auto__ = function(state_23964){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21628__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21628__auto____1.call(this,state_23964);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21628__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21628__auto____0;
cljs$core$async$state_machine__21628__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21628__auto____1;
return cljs$core$async$state_machine__21628__auto__;
})()
;})(switch__21627__auto__,c__21739__auto___23989,out))
})();
var state__21741__auto__ = (function (){var statearr_23984 = f__21740__auto__.call(null);
(statearr_23984[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21739__auto___23989);

return statearr_23984;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21741__auto__);
});})(c__21739__auto___23989,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args24002 = [];
var len__19349__auto___24005 = arguments.length;
var i__19350__auto___24006 = (0);
while(true){
if((i__19350__auto___24006 < len__19349__auto___24005)){
args24002.push((arguments[i__19350__auto___24006]));

var G__24007 = (i__19350__auto___24006 + (1));
i__19350__auto___24006 = G__24007;
continue;
} else {
}
break;
}

var G__24004 = args24002.length;
switch (G__24004) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24002.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__21739__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21739__auto__){
return (function (){
var f__21740__auto__ = (function (){var switch__21627__auto__ = ((function (c__21739__auto__){
return (function (state_24174){
var state_val_24175 = (state_24174[(1)]);
if((state_val_24175 === (7))){
var inst_24170 = (state_24174[(2)]);
var state_24174__$1 = state_24174;
var statearr_24176_24217 = state_24174__$1;
(statearr_24176_24217[(2)] = inst_24170);

(statearr_24176_24217[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24175 === (20))){
var inst_24140 = (state_24174[(7)]);
var inst_24151 = (state_24174[(2)]);
var inst_24152 = cljs.core.next.call(null,inst_24140);
var inst_24126 = inst_24152;
var inst_24127 = null;
var inst_24128 = (0);
var inst_24129 = (0);
var state_24174__$1 = (function (){var statearr_24177 = state_24174;
(statearr_24177[(8)] = inst_24127);

(statearr_24177[(9)] = inst_24128);

(statearr_24177[(10)] = inst_24129);

(statearr_24177[(11)] = inst_24126);

(statearr_24177[(12)] = inst_24151);

return statearr_24177;
})();
var statearr_24178_24218 = state_24174__$1;
(statearr_24178_24218[(2)] = null);

(statearr_24178_24218[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24175 === (1))){
var state_24174__$1 = state_24174;
var statearr_24179_24219 = state_24174__$1;
(statearr_24179_24219[(2)] = null);

(statearr_24179_24219[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24175 === (4))){
var inst_24115 = (state_24174[(13)]);
var inst_24115__$1 = (state_24174[(2)]);
var inst_24116 = (inst_24115__$1 == null);
var state_24174__$1 = (function (){var statearr_24180 = state_24174;
(statearr_24180[(13)] = inst_24115__$1);

return statearr_24180;
})();
if(cljs.core.truth_(inst_24116)){
var statearr_24181_24220 = state_24174__$1;
(statearr_24181_24220[(1)] = (5));

} else {
var statearr_24182_24221 = state_24174__$1;
(statearr_24182_24221[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24175 === (15))){
var state_24174__$1 = state_24174;
var statearr_24186_24222 = state_24174__$1;
(statearr_24186_24222[(2)] = null);

(statearr_24186_24222[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24175 === (21))){
var state_24174__$1 = state_24174;
var statearr_24187_24223 = state_24174__$1;
(statearr_24187_24223[(2)] = null);

(statearr_24187_24223[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24175 === (13))){
var inst_24127 = (state_24174[(8)]);
var inst_24128 = (state_24174[(9)]);
var inst_24129 = (state_24174[(10)]);
var inst_24126 = (state_24174[(11)]);
var inst_24136 = (state_24174[(2)]);
var inst_24137 = (inst_24129 + (1));
var tmp24183 = inst_24127;
var tmp24184 = inst_24128;
var tmp24185 = inst_24126;
var inst_24126__$1 = tmp24185;
var inst_24127__$1 = tmp24183;
var inst_24128__$1 = tmp24184;
var inst_24129__$1 = inst_24137;
var state_24174__$1 = (function (){var statearr_24188 = state_24174;
(statearr_24188[(8)] = inst_24127__$1);

(statearr_24188[(9)] = inst_24128__$1);

(statearr_24188[(10)] = inst_24129__$1);

(statearr_24188[(11)] = inst_24126__$1);

(statearr_24188[(14)] = inst_24136);

return statearr_24188;
})();
var statearr_24189_24224 = state_24174__$1;
(statearr_24189_24224[(2)] = null);

(statearr_24189_24224[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24175 === (22))){
var state_24174__$1 = state_24174;
var statearr_24190_24225 = state_24174__$1;
(statearr_24190_24225[(2)] = null);

(statearr_24190_24225[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24175 === (6))){
var inst_24115 = (state_24174[(13)]);
var inst_24124 = f.call(null,inst_24115);
var inst_24125 = cljs.core.seq.call(null,inst_24124);
var inst_24126 = inst_24125;
var inst_24127 = null;
var inst_24128 = (0);
var inst_24129 = (0);
var state_24174__$1 = (function (){var statearr_24191 = state_24174;
(statearr_24191[(8)] = inst_24127);

(statearr_24191[(9)] = inst_24128);

(statearr_24191[(10)] = inst_24129);

(statearr_24191[(11)] = inst_24126);

return statearr_24191;
})();
var statearr_24192_24226 = state_24174__$1;
(statearr_24192_24226[(2)] = null);

(statearr_24192_24226[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24175 === (17))){
var inst_24140 = (state_24174[(7)]);
var inst_24144 = cljs.core.chunk_first.call(null,inst_24140);
var inst_24145 = cljs.core.chunk_rest.call(null,inst_24140);
var inst_24146 = cljs.core.count.call(null,inst_24144);
var inst_24126 = inst_24145;
var inst_24127 = inst_24144;
var inst_24128 = inst_24146;
var inst_24129 = (0);
var state_24174__$1 = (function (){var statearr_24193 = state_24174;
(statearr_24193[(8)] = inst_24127);

(statearr_24193[(9)] = inst_24128);

(statearr_24193[(10)] = inst_24129);

(statearr_24193[(11)] = inst_24126);

return statearr_24193;
})();
var statearr_24194_24227 = state_24174__$1;
(statearr_24194_24227[(2)] = null);

(statearr_24194_24227[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24175 === (3))){
var inst_24172 = (state_24174[(2)]);
var state_24174__$1 = state_24174;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24174__$1,inst_24172);
} else {
if((state_val_24175 === (12))){
var inst_24160 = (state_24174[(2)]);
var state_24174__$1 = state_24174;
var statearr_24195_24228 = state_24174__$1;
(statearr_24195_24228[(2)] = inst_24160);

(statearr_24195_24228[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24175 === (2))){
var state_24174__$1 = state_24174;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24174__$1,(4),in$);
} else {
if((state_val_24175 === (23))){
var inst_24168 = (state_24174[(2)]);
var state_24174__$1 = state_24174;
var statearr_24196_24229 = state_24174__$1;
(statearr_24196_24229[(2)] = inst_24168);

(statearr_24196_24229[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24175 === (19))){
var inst_24155 = (state_24174[(2)]);
var state_24174__$1 = state_24174;
var statearr_24197_24230 = state_24174__$1;
(statearr_24197_24230[(2)] = inst_24155);

(statearr_24197_24230[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24175 === (11))){
var inst_24140 = (state_24174[(7)]);
var inst_24126 = (state_24174[(11)]);
var inst_24140__$1 = cljs.core.seq.call(null,inst_24126);
var state_24174__$1 = (function (){var statearr_24198 = state_24174;
(statearr_24198[(7)] = inst_24140__$1);

return statearr_24198;
})();
if(inst_24140__$1){
var statearr_24199_24231 = state_24174__$1;
(statearr_24199_24231[(1)] = (14));

} else {
var statearr_24200_24232 = state_24174__$1;
(statearr_24200_24232[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24175 === (9))){
var inst_24162 = (state_24174[(2)]);
var inst_24163 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_24174__$1 = (function (){var statearr_24201 = state_24174;
(statearr_24201[(15)] = inst_24162);

return statearr_24201;
})();
if(cljs.core.truth_(inst_24163)){
var statearr_24202_24233 = state_24174__$1;
(statearr_24202_24233[(1)] = (21));

} else {
var statearr_24203_24234 = state_24174__$1;
(statearr_24203_24234[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24175 === (5))){
var inst_24118 = cljs.core.async.close_BANG_.call(null,out);
var state_24174__$1 = state_24174;
var statearr_24204_24235 = state_24174__$1;
(statearr_24204_24235[(2)] = inst_24118);

(statearr_24204_24235[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24175 === (14))){
var inst_24140 = (state_24174[(7)]);
var inst_24142 = cljs.core.chunked_seq_QMARK_.call(null,inst_24140);
var state_24174__$1 = state_24174;
if(inst_24142){
var statearr_24205_24236 = state_24174__$1;
(statearr_24205_24236[(1)] = (17));

} else {
var statearr_24206_24237 = state_24174__$1;
(statearr_24206_24237[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24175 === (16))){
var inst_24158 = (state_24174[(2)]);
var state_24174__$1 = state_24174;
var statearr_24207_24238 = state_24174__$1;
(statearr_24207_24238[(2)] = inst_24158);

(statearr_24207_24238[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24175 === (10))){
var inst_24127 = (state_24174[(8)]);
var inst_24129 = (state_24174[(10)]);
var inst_24134 = cljs.core._nth.call(null,inst_24127,inst_24129);
var state_24174__$1 = state_24174;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24174__$1,(13),out,inst_24134);
} else {
if((state_val_24175 === (18))){
var inst_24140 = (state_24174[(7)]);
var inst_24149 = cljs.core.first.call(null,inst_24140);
var state_24174__$1 = state_24174;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24174__$1,(20),out,inst_24149);
} else {
if((state_val_24175 === (8))){
var inst_24128 = (state_24174[(9)]);
var inst_24129 = (state_24174[(10)]);
var inst_24131 = (inst_24129 < inst_24128);
var inst_24132 = inst_24131;
var state_24174__$1 = state_24174;
if(cljs.core.truth_(inst_24132)){
var statearr_24208_24239 = state_24174__$1;
(statearr_24208_24239[(1)] = (10));

} else {
var statearr_24209_24240 = state_24174__$1;
(statearr_24209_24240[(1)] = (11));

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
});})(c__21739__auto__))
;
return ((function (switch__21627__auto__,c__21739__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__21628__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__21628__auto____0 = (function (){
var statearr_24213 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24213[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__21628__auto__);

(statearr_24213[(1)] = (1));

return statearr_24213;
});
var cljs$core$async$mapcat_STAR__$_state_machine__21628__auto____1 = (function (state_24174){
while(true){
var ret_value__21629__auto__ = (function (){try{while(true){
var result__21630__auto__ = switch__21627__auto__.call(null,state_24174);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21630__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21630__auto__;
}
break;
}
}catch (e24214){if((e24214 instanceof Object)){
var ex__21631__auto__ = e24214;
var statearr_24215_24241 = state_24174;
(statearr_24215_24241[(5)] = ex__21631__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24174);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24214;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21629__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24242 = state_24174;
state_24174 = G__24242;
continue;
} else {
return ret_value__21629__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__21628__auto__ = function(state_24174){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__21628__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__21628__auto____1.call(this,state_24174);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__21628__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__21628__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__21628__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__21628__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__21628__auto__;
})()
;})(switch__21627__auto__,c__21739__auto__))
})();
var state__21741__auto__ = (function (){var statearr_24216 = f__21740__auto__.call(null);
(statearr_24216[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21739__auto__);

return statearr_24216;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21741__auto__);
});})(c__21739__auto__))
);

return c__21739__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args24243 = [];
var len__19349__auto___24246 = arguments.length;
var i__19350__auto___24247 = (0);
while(true){
if((i__19350__auto___24247 < len__19349__auto___24246)){
args24243.push((arguments[i__19350__auto___24247]));

var G__24248 = (i__19350__auto___24247 + (1));
i__19350__auto___24247 = G__24248;
continue;
} else {
}
break;
}

var G__24245 = args24243.length;
switch (G__24245) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24243.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args24250 = [];
var len__19349__auto___24253 = arguments.length;
var i__19350__auto___24254 = (0);
while(true){
if((i__19350__auto___24254 < len__19349__auto___24253)){
args24250.push((arguments[i__19350__auto___24254]));

var G__24255 = (i__19350__auto___24254 + (1));
i__19350__auto___24254 = G__24255;
continue;
} else {
}
break;
}

var G__24252 = args24250.length;
switch (G__24252) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24250.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args24257 = [];
var len__19349__auto___24308 = arguments.length;
var i__19350__auto___24309 = (0);
while(true){
if((i__19350__auto___24309 < len__19349__auto___24308)){
args24257.push((arguments[i__19350__auto___24309]));

var G__24310 = (i__19350__auto___24309 + (1));
i__19350__auto___24309 = G__24310;
continue;
} else {
}
break;
}

var G__24259 = args24257.length;
switch (G__24259) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24257.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21739__auto___24312 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21739__auto___24312,out){
return (function (){
var f__21740__auto__ = (function (){var switch__21627__auto__ = ((function (c__21739__auto___24312,out){
return (function (state_24283){
var state_val_24284 = (state_24283[(1)]);
if((state_val_24284 === (7))){
var inst_24278 = (state_24283[(2)]);
var state_24283__$1 = state_24283;
var statearr_24285_24313 = state_24283__$1;
(statearr_24285_24313[(2)] = inst_24278);

(statearr_24285_24313[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24284 === (1))){
var inst_24260 = null;
var state_24283__$1 = (function (){var statearr_24286 = state_24283;
(statearr_24286[(7)] = inst_24260);

return statearr_24286;
})();
var statearr_24287_24314 = state_24283__$1;
(statearr_24287_24314[(2)] = null);

(statearr_24287_24314[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24284 === (4))){
var inst_24263 = (state_24283[(8)]);
var inst_24263__$1 = (state_24283[(2)]);
var inst_24264 = (inst_24263__$1 == null);
var inst_24265 = cljs.core.not.call(null,inst_24264);
var state_24283__$1 = (function (){var statearr_24288 = state_24283;
(statearr_24288[(8)] = inst_24263__$1);

return statearr_24288;
})();
if(inst_24265){
var statearr_24289_24315 = state_24283__$1;
(statearr_24289_24315[(1)] = (5));

} else {
var statearr_24290_24316 = state_24283__$1;
(statearr_24290_24316[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24284 === (6))){
var state_24283__$1 = state_24283;
var statearr_24291_24317 = state_24283__$1;
(statearr_24291_24317[(2)] = null);

(statearr_24291_24317[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24284 === (3))){
var inst_24280 = (state_24283[(2)]);
var inst_24281 = cljs.core.async.close_BANG_.call(null,out);
var state_24283__$1 = (function (){var statearr_24292 = state_24283;
(statearr_24292[(9)] = inst_24280);

return statearr_24292;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24283__$1,inst_24281);
} else {
if((state_val_24284 === (2))){
var state_24283__$1 = state_24283;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24283__$1,(4),ch);
} else {
if((state_val_24284 === (11))){
var inst_24263 = (state_24283[(8)]);
var inst_24272 = (state_24283[(2)]);
var inst_24260 = inst_24263;
var state_24283__$1 = (function (){var statearr_24293 = state_24283;
(statearr_24293[(7)] = inst_24260);

(statearr_24293[(10)] = inst_24272);

return statearr_24293;
})();
var statearr_24294_24318 = state_24283__$1;
(statearr_24294_24318[(2)] = null);

(statearr_24294_24318[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24284 === (9))){
var inst_24263 = (state_24283[(8)]);
var state_24283__$1 = state_24283;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24283__$1,(11),out,inst_24263);
} else {
if((state_val_24284 === (5))){
var inst_24260 = (state_24283[(7)]);
var inst_24263 = (state_24283[(8)]);
var inst_24267 = cljs.core._EQ_.call(null,inst_24263,inst_24260);
var state_24283__$1 = state_24283;
if(inst_24267){
var statearr_24296_24319 = state_24283__$1;
(statearr_24296_24319[(1)] = (8));

} else {
var statearr_24297_24320 = state_24283__$1;
(statearr_24297_24320[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24284 === (10))){
var inst_24275 = (state_24283[(2)]);
var state_24283__$1 = state_24283;
var statearr_24298_24321 = state_24283__$1;
(statearr_24298_24321[(2)] = inst_24275);

(statearr_24298_24321[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24284 === (8))){
var inst_24260 = (state_24283[(7)]);
var tmp24295 = inst_24260;
var inst_24260__$1 = tmp24295;
var state_24283__$1 = (function (){var statearr_24299 = state_24283;
(statearr_24299[(7)] = inst_24260__$1);

return statearr_24299;
})();
var statearr_24300_24322 = state_24283__$1;
(statearr_24300_24322[(2)] = null);

(statearr_24300_24322[(1)] = (2));


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
});})(c__21739__auto___24312,out))
;
return ((function (switch__21627__auto__,c__21739__auto___24312,out){
return (function() {
var cljs$core$async$state_machine__21628__auto__ = null;
var cljs$core$async$state_machine__21628__auto____0 = (function (){
var statearr_24304 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24304[(0)] = cljs$core$async$state_machine__21628__auto__);

(statearr_24304[(1)] = (1));

return statearr_24304;
});
var cljs$core$async$state_machine__21628__auto____1 = (function (state_24283){
while(true){
var ret_value__21629__auto__ = (function (){try{while(true){
var result__21630__auto__ = switch__21627__auto__.call(null,state_24283);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21630__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21630__auto__;
}
break;
}
}catch (e24305){if((e24305 instanceof Object)){
var ex__21631__auto__ = e24305;
var statearr_24306_24323 = state_24283;
(statearr_24306_24323[(5)] = ex__21631__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24283);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24305;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21629__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24324 = state_24283;
state_24283 = G__24324;
continue;
} else {
return ret_value__21629__auto__;
}
break;
}
});
cljs$core$async$state_machine__21628__auto__ = function(state_24283){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21628__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21628__auto____1.call(this,state_24283);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21628__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21628__auto____0;
cljs$core$async$state_machine__21628__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21628__auto____1;
return cljs$core$async$state_machine__21628__auto__;
})()
;})(switch__21627__auto__,c__21739__auto___24312,out))
})();
var state__21741__auto__ = (function (){var statearr_24307 = f__21740__auto__.call(null);
(statearr_24307[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21739__auto___24312);

return statearr_24307;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21741__auto__);
});})(c__21739__auto___24312,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args24325 = [];
var len__19349__auto___24395 = arguments.length;
var i__19350__auto___24396 = (0);
while(true){
if((i__19350__auto___24396 < len__19349__auto___24395)){
args24325.push((arguments[i__19350__auto___24396]));

var G__24397 = (i__19350__auto___24396 + (1));
i__19350__auto___24396 = G__24397;
continue;
} else {
}
break;
}

var G__24327 = args24325.length;
switch (G__24327) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24325.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21739__auto___24399 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21739__auto___24399,out){
return (function (){
var f__21740__auto__ = (function (){var switch__21627__auto__ = ((function (c__21739__auto___24399,out){
return (function (state_24365){
var state_val_24366 = (state_24365[(1)]);
if((state_val_24366 === (7))){
var inst_24361 = (state_24365[(2)]);
var state_24365__$1 = state_24365;
var statearr_24367_24400 = state_24365__$1;
(statearr_24367_24400[(2)] = inst_24361);

(statearr_24367_24400[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24366 === (1))){
var inst_24328 = (new Array(n));
var inst_24329 = inst_24328;
var inst_24330 = (0);
var state_24365__$1 = (function (){var statearr_24368 = state_24365;
(statearr_24368[(7)] = inst_24329);

(statearr_24368[(8)] = inst_24330);

return statearr_24368;
})();
var statearr_24369_24401 = state_24365__$1;
(statearr_24369_24401[(2)] = null);

(statearr_24369_24401[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24366 === (4))){
var inst_24333 = (state_24365[(9)]);
var inst_24333__$1 = (state_24365[(2)]);
var inst_24334 = (inst_24333__$1 == null);
var inst_24335 = cljs.core.not.call(null,inst_24334);
var state_24365__$1 = (function (){var statearr_24370 = state_24365;
(statearr_24370[(9)] = inst_24333__$1);

return statearr_24370;
})();
if(inst_24335){
var statearr_24371_24402 = state_24365__$1;
(statearr_24371_24402[(1)] = (5));

} else {
var statearr_24372_24403 = state_24365__$1;
(statearr_24372_24403[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24366 === (15))){
var inst_24355 = (state_24365[(2)]);
var state_24365__$1 = state_24365;
var statearr_24373_24404 = state_24365__$1;
(statearr_24373_24404[(2)] = inst_24355);

(statearr_24373_24404[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24366 === (13))){
var state_24365__$1 = state_24365;
var statearr_24374_24405 = state_24365__$1;
(statearr_24374_24405[(2)] = null);

(statearr_24374_24405[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24366 === (6))){
var inst_24330 = (state_24365[(8)]);
var inst_24351 = (inst_24330 > (0));
var state_24365__$1 = state_24365;
if(cljs.core.truth_(inst_24351)){
var statearr_24375_24406 = state_24365__$1;
(statearr_24375_24406[(1)] = (12));

} else {
var statearr_24376_24407 = state_24365__$1;
(statearr_24376_24407[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24366 === (3))){
var inst_24363 = (state_24365[(2)]);
var state_24365__$1 = state_24365;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24365__$1,inst_24363);
} else {
if((state_val_24366 === (12))){
var inst_24329 = (state_24365[(7)]);
var inst_24353 = cljs.core.vec.call(null,inst_24329);
var state_24365__$1 = state_24365;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24365__$1,(15),out,inst_24353);
} else {
if((state_val_24366 === (2))){
var state_24365__$1 = state_24365;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24365__$1,(4),ch);
} else {
if((state_val_24366 === (11))){
var inst_24345 = (state_24365[(2)]);
var inst_24346 = (new Array(n));
var inst_24329 = inst_24346;
var inst_24330 = (0);
var state_24365__$1 = (function (){var statearr_24377 = state_24365;
(statearr_24377[(7)] = inst_24329);

(statearr_24377[(8)] = inst_24330);

(statearr_24377[(10)] = inst_24345);

return statearr_24377;
})();
var statearr_24378_24408 = state_24365__$1;
(statearr_24378_24408[(2)] = null);

(statearr_24378_24408[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24366 === (9))){
var inst_24329 = (state_24365[(7)]);
var inst_24343 = cljs.core.vec.call(null,inst_24329);
var state_24365__$1 = state_24365;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24365__$1,(11),out,inst_24343);
} else {
if((state_val_24366 === (5))){
var inst_24329 = (state_24365[(7)]);
var inst_24330 = (state_24365[(8)]);
var inst_24333 = (state_24365[(9)]);
var inst_24338 = (state_24365[(11)]);
var inst_24337 = (inst_24329[inst_24330] = inst_24333);
var inst_24338__$1 = (inst_24330 + (1));
var inst_24339 = (inst_24338__$1 < n);
var state_24365__$1 = (function (){var statearr_24379 = state_24365;
(statearr_24379[(12)] = inst_24337);

(statearr_24379[(11)] = inst_24338__$1);

return statearr_24379;
})();
if(cljs.core.truth_(inst_24339)){
var statearr_24380_24409 = state_24365__$1;
(statearr_24380_24409[(1)] = (8));

} else {
var statearr_24381_24410 = state_24365__$1;
(statearr_24381_24410[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24366 === (14))){
var inst_24358 = (state_24365[(2)]);
var inst_24359 = cljs.core.async.close_BANG_.call(null,out);
var state_24365__$1 = (function (){var statearr_24383 = state_24365;
(statearr_24383[(13)] = inst_24358);

return statearr_24383;
})();
var statearr_24384_24411 = state_24365__$1;
(statearr_24384_24411[(2)] = inst_24359);

(statearr_24384_24411[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24366 === (10))){
var inst_24349 = (state_24365[(2)]);
var state_24365__$1 = state_24365;
var statearr_24385_24412 = state_24365__$1;
(statearr_24385_24412[(2)] = inst_24349);

(statearr_24385_24412[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24366 === (8))){
var inst_24329 = (state_24365[(7)]);
var inst_24338 = (state_24365[(11)]);
var tmp24382 = inst_24329;
var inst_24329__$1 = tmp24382;
var inst_24330 = inst_24338;
var state_24365__$1 = (function (){var statearr_24386 = state_24365;
(statearr_24386[(7)] = inst_24329__$1);

(statearr_24386[(8)] = inst_24330);

return statearr_24386;
})();
var statearr_24387_24413 = state_24365__$1;
(statearr_24387_24413[(2)] = null);

(statearr_24387_24413[(1)] = (2));


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
});})(c__21739__auto___24399,out))
;
return ((function (switch__21627__auto__,c__21739__auto___24399,out){
return (function() {
var cljs$core$async$state_machine__21628__auto__ = null;
var cljs$core$async$state_machine__21628__auto____0 = (function (){
var statearr_24391 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24391[(0)] = cljs$core$async$state_machine__21628__auto__);

(statearr_24391[(1)] = (1));

return statearr_24391;
});
var cljs$core$async$state_machine__21628__auto____1 = (function (state_24365){
while(true){
var ret_value__21629__auto__ = (function (){try{while(true){
var result__21630__auto__ = switch__21627__auto__.call(null,state_24365);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21630__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21630__auto__;
}
break;
}
}catch (e24392){if((e24392 instanceof Object)){
var ex__21631__auto__ = e24392;
var statearr_24393_24414 = state_24365;
(statearr_24393_24414[(5)] = ex__21631__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24365);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24392;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21629__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24415 = state_24365;
state_24365 = G__24415;
continue;
} else {
return ret_value__21629__auto__;
}
break;
}
});
cljs$core$async$state_machine__21628__auto__ = function(state_24365){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21628__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21628__auto____1.call(this,state_24365);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21628__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21628__auto____0;
cljs$core$async$state_machine__21628__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21628__auto____1;
return cljs$core$async$state_machine__21628__auto__;
})()
;})(switch__21627__auto__,c__21739__auto___24399,out))
})();
var state__21741__auto__ = (function (){var statearr_24394 = f__21740__auto__.call(null);
(statearr_24394[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21739__auto___24399);

return statearr_24394;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21741__auto__);
});})(c__21739__auto___24399,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args24416 = [];
var len__19349__auto___24490 = arguments.length;
var i__19350__auto___24491 = (0);
while(true){
if((i__19350__auto___24491 < len__19349__auto___24490)){
args24416.push((arguments[i__19350__auto___24491]));

var G__24492 = (i__19350__auto___24491 + (1));
i__19350__auto___24491 = G__24492;
continue;
} else {
}
break;
}

var G__24418 = args24416.length;
switch (G__24418) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24416.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21739__auto___24494 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21739__auto___24494,out){
return (function (){
var f__21740__auto__ = (function (){var switch__21627__auto__ = ((function (c__21739__auto___24494,out){
return (function (state_24460){
var state_val_24461 = (state_24460[(1)]);
if((state_val_24461 === (7))){
var inst_24456 = (state_24460[(2)]);
var state_24460__$1 = state_24460;
var statearr_24462_24495 = state_24460__$1;
(statearr_24462_24495[(2)] = inst_24456);

(statearr_24462_24495[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24461 === (1))){
var inst_24419 = [];
var inst_24420 = inst_24419;
var inst_24421 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_24460__$1 = (function (){var statearr_24463 = state_24460;
(statearr_24463[(7)] = inst_24420);

(statearr_24463[(8)] = inst_24421);

return statearr_24463;
})();
var statearr_24464_24496 = state_24460__$1;
(statearr_24464_24496[(2)] = null);

(statearr_24464_24496[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24461 === (4))){
var inst_24424 = (state_24460[(9)]);
var inst_24424__$1 = (state_24460[(2)]);
var inst_24425 = (inst_24424__$1 == null);
var inst_24426 = cljs.core.not.call(null,inst_24425);
var state_24460__$1 = (function (){var statearr_24465 = state_24460;
(statearr_24465[(9)] = inst_24424__$1);

return statearr_24465;
})();
if(inst_24426){
var statearr_24466_24497 = state_24460__$1;
(statearr_24466_24497[(1)] = (5));

} else {
var statearr_24467_24498 = state_24460__$1;
(statearr_24467_24498[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24461 === (15))){
var inst_24450 = (state_24460[(2)]);
var state_24460__$1 = state_24460;
var statearr_24468_24499 = state_24460__$1;
(statearr_24468_24499[(2)] = inst_24450);

(statearr_24468_24499[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24461 === (13))){
var state_24460__$1 = state_24460;
var statearr_24469_24500 = state_24460__$1;
(statearr_24469_24500[(2)] = null);

(statearr_24469_24500[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24461 === (6))){
var inst_24420 = (state_24460[(7)]);
var inst_24445 = inst_24420.length;
var inst_24446 = (inst_24445 > (0));
var state_24460__$1 = state_24460;
if(cljs.core.truth_(inst_24446)){
var statearr_24470_24501 = state_24460__$1;
(statearr_24470_24501[(1)] = (12));

} else {
var statearr_24471_24502 = state_24460__$1;
(statearr_24471_24502[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24461 === (3))){
var inst_24458 = (state_24460[(2)]);
var state_24460__$1 = state_24460;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24460__$1,inst_24458);
} else {
if((state_val_24461 === (12))){
var inst_24420 = (state_24460[(7)]);
var inst_24448 = cljs.core.vec.call(null,inst_24420);
var state_24460__$1 = state_24460;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24460__$1,(15),out,inst_24448);
} else {
if((state_val_24461 === (2))){
var state_24460__$1 = state_24460;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24460__$1,(4),ch);
} else {
if((state_val_24461 === (11))){
var inst_24428 = (state_24460[(10)]);
var inst_24424 = (state_24460[(9)]);
var inst_24438 = (state_24460[(2)]);
var inst_24439 = [];
var inst_24440 = inst_24439.push(inst_24424);
var inst_24420 = inst_24439;
var inst_24421 = inst_24428;
var state_24460__$1 = (function (){var statearr_24472 = state_24460;
(statearr_24472[(7)] = inst_24420);

(statearr_24472[(11)] = inst_24440);

(statearr_24472[(12)] = inst_24438);

(statearr_24472[(8)] = inst_24421);

return statearr_24472;
})();
var statearr_24473_24503 = state_24460__$1;
(statearr_24473_24503[(2)] = null);

(statearr_24473_24503[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24461 === (9))){
var inst_24420 = (state_24460[(7)]);
var inst_24436 = cljs.core.vec.call(null,inst_24420);
var state_24460__$1 = state_24460;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24460__$1,(11),out,inst_24436);
} else {
if((state_val_24461 === (5))){
var inst_24428 = (state_24460[(10)]);
var inst_24424 = (state_24460[(9)]);
var inst_24421 = (state_24460[(8)]);
var inst_24428__$1 = f.call(null,inst_24424);
var inst_24429 = cljs.core._EQ_.call(null,inst_24428__$1,inst_24421);
var inst_24430 = cljs.core.keyword_identical_QMARK_.call(null,inst_24421,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_24431 = (inst_24429) || (inst_24430);
var state_24460__$1 = (function (){var statearr_24474 = state_24460;
(statearr_24474[(10)] = inst_24428__$1);

return statearr_24474;
})();
if(cljs.core.truth_(inst_24431)){
var statearr_24475_24504 = state_24460__$1;
(statearr_24475_24504[(1)] = (8));

} else {
var statearr_24476_24505 = state_24460__$1;
(statearr_24476_24505[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24461 === (14))){
var inst_24453 = (state_24460[(2)]);
var inst_24454 = cljs.core.async.close_BANG_.call(null,out);
var state_24460__$1 = (function (){var statearr_24478 = state_24460;
(statearr_24478[(13)] = inst_24453);

return statearr_24478;
})();
var statearr_24479_24506 = state_24460__$1;
(statearr_24479_24506[(2)] = inst_24454);

(statearr_24479_24506[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24461 === (10))){
var inst_24443 = (state_24460[(2)]);
var state_24460__$1 = state_24460;
var statearr_24480_24507 = state_24460__$1;
(statearr_24480_24507[(2)] = inst_24443);

(statearr_24480_24507[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24461 === (8))){
var inst_24428 = (state_24460[(10)]);
var inst_24424 = (state_24460[(9)]);
var inst_24420 = (state_24460[(7)]);
var inst_24433 = inst_24420.push(inst_24424);
var tmp24477 = inst_24420;
var inst_24420__$1 = tmp24477;
var inst_24421 = inst_24428;
var state_24460__$1 = (function (){var statearr_24481 = state_24460;
(statearr_24481[(7)] = inst_24420__$1);

(statearr_24481[(14)] = inst_24433);

(statearr_24481[(8)] = inst_24421);

return statearr_24481;
})();
var statearr_24482_24508 = state_24460__$1;
(statearr_24482_24508[(2)] = null);

(statearr_24482_24508[(1)] = (2));


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
});})(c__21739__auto___24494,out))
;
return ((function (switch__21627__auto__,c__21739__auto___24494,out){
return (function() {
var cljs$core$async$state_machine__21628__auto__ = null;
var cljs$core$async$state_machine__21628__auto____0 = (function (){
var statearr_24486 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24486[(0)] = cljs$core$async$state_machine__21628__auto__);

(statearr_24486[(1)] = (1));

return statearr_24486;
});
var cljs$core$async$state_machine__21628__auto____1 = (function (state_24460){
while(true){
var ret_value__21629__auto__ = (function (){try{while(true){
var result__21630__auto__ = switch__21627__auto__.call(null,state_24460);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21630__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21630__auto__;
}
break;
}
}catch (e24487){if((e24487 instanceof Object)){
var ex__21631__auto__ = e24487;
var statearr_24488_24509 = state_24460;
(statearr_24488_24509[(5)] = ex__21631__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24460);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24487;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21629__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24510 = state_24460;
state_24460 = G__24510;
continue;
} else {
return ret_value__21629__auto__;
}
break;
}
});
cljs$core$async$state_machine__21628__auto__ = function(state_24460){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21628__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21628__auto____1.call(this,state_24460);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21628__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21628__auto____0;
cljs$core$async$state_machine__21628__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21628__auto____1;
return cljs$core$async$state_machine__21628__auto__;
})()
;})(switch__21627__auto__,c__21739__auto___24494,out))
})();
var state__21741__auto__ = (function (){var statearr_24489 = f__21740__auto__.call(null);
(statearr_24489[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21739__auto___24494);

return statearr_24489;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21741__auto__);
});})(c__21739__auto___24494,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map