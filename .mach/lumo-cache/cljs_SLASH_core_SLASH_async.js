goog.provide("cljs.core.async");
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__949 = arguments.length;
switch (G__949) {
case (1):
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case (2):
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async950 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.impl.protocols.Handler}
*/
cljs.core.async.t_cljs$core$async950 = (function (f,blockable,meta951){
this.f = f;
this.blockable = blockable;
this.meta951 = meta951;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async950.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_952,meta951__$1){
var self__ = this;
var _952__$1 = this;
return (new cljs.core.async.t_cljs$core$async950(self__.f,self__.blockable,meta951__$1));
});

cljs.core.async.t_cljs$core$async950.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_952){
var self__ = this;
var _952__$1 = this;
return self__.meta951;
});

cljs.core.async.t_cljs$core$async950.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async950.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async950.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async950.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async950.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"blockable","blockable",(-28395259),null),new cljs.core.Symbol(null,"meta951","meta951",(-1855595865),null)], null);
});

cljs.core.async.t_cljs$core$async950.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async950.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async950";

cljs.core.async.t_cljs$core$async950.cljs$lang$ctorPrWriter = (function (this__22617__auto__,writer__22618__auto__,opt__22619__auto__){
return cljs.core._write.call(null,writer__22618__auto__,"cljs.core.async/t_cljs$core$async950");
});

cljs.core.async.__GT_t_cljs$core$async950 = (function cljs$core$async$__GT_t_cljs$core$async950(f__$1,blockable__$1,meta951){
return (new cljs.core.async.t_cljs$core$async950(f__$1,blockable__$1,meta951));
});

}

return (new cljs.core.async.t_cljs$core$async950(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = (2);

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
if((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$))){
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
var G__956 = arguments.length;
switch (G__956) {
case (0):
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case (1):
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case (2):
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case (3):
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = (3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__959 = arguments.length;
switch (G__959) {
case (0):
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case (1):
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case (2):
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = (2);

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
var G__962 = arguments.length;
switch (G__962) {
case (2):
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case (3):
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_964 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_964);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_964,ret){
return (function (){
return fn1.call(null,val_964);
});})(val_964,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = (3);

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
var G__966 = arguments.length;
switch (G__966) {
case (2):
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case (3):
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case (4):
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__20271__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__20271__auto__)){
var ret = temp__20271__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__20271__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__20271__auto__)){
var retb = temp__20271__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__20271__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__20271__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = (4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__22965__auto___968 = n;
var x_969 = (0);
while(true){
if((x_969 < n__22965__auto___968)){
(a[x_969] = (0));

var G__970 = (x_969 + (1));
x_969 = G__970;
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

var G__971 = (i + (1));
i = G__971;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async972 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.impl.protocols.Handler}
*/
cljs.core.async.t_cljs$core$async972 = (function (flag,meta973){
this.flag = flag;
this.meta973 = meta973;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async972.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_974,meta973__$1){
var self__ = this;
var _974__$1 = this;
return (new cljs.core.async.t_cljs$core$async972(self__.flag,meta973__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async972.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_974){
var self__ = this;
var _974__$1 = this;
return self__.meta973;
});})(flag))
;

cljs.core.async.t_cljs$core$async972.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async972.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async972.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async972.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async972.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",(-1565787888),null),new cljs.core.Symbol(null,"meta973","meta973",(267440127),null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async972.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async972.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async972";

cljs.core.async.t_cljs$core$async972.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__22617__auto__,writer__22618__auto__,opt__22619__auto__){
return cljs.core._write.call(null,writer__22618__auto__,"cljs.core.async/t_cljs$core$async972");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async972 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async972(flag__$1,meta973){
return (new cljs.core.async.t_cljs$core$async972(flag__$1,meta973));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async972(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async975 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.impl.protocols.Handler}
*/
cljs.core.async.t_cljs$core$async975 = (function (flag,cb,meta976){
this.flag = flag;
this.cb = cb;
this.meta976 = meta976;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async975.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_977,meta976__$1){
var self__ = this;
var _977__$1 = this;
return (new cljs.core.async.t_cljs$core$async975(self__.flag,self__.cb,meta976__$1));
});

cljs.core.async.t_cljs$core$async975.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_977){
var self__ = this;
var _977__$1 = this;
return self__.meta976;
});

cljs.core.async.t_cljs$core$async975.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async975.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async975.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async975.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async975.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",(-1565787888),null),new cljs.core.Symbol(null,"cb","cb",(-2064487928),null),new cljs.core.Symbol(null,"meta976","meta976",(1335771317),null)], null);
});

cljs.core.async.t_cljs$core$async975.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async975.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async975";

cljs.core.async.t_cljs$core$async975.cljs$lang$ctorPrWriter = (function (this__22617__auto__,writer__22618__auto__,opt__22619__auto__){
return cljs.core._write.call(null,writer__22618__auto__,"cljs.core.async/t_cljs$core$async975");
});

cljs.core.async.__GT_t_cljs$core$async975 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async975(flag__$1,cb__$1,meta976){
return (new cljs.core.async.t_cljs$core$async975(flag__$1,cb__$1,meta976));
});

}

return (new cljs.core.async.t_cljs$core$async975(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",(1431093715)).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__13_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__13_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__14_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__20917__auto__ = wport;
if(cljs.core.truth_(or__20917__auto__)){
return or__20917__auto__;
} else {
return port;
}
})()], null));
} else {
var G__978 = (i + (1));
i = G__978;
continue;
}
} else {
return null;
}
break;
}
})();
var or__20917__auto__ = ret;
if(cljs.core.truth_(or__20917__auto__)){
return or__20917__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",(-1987822328)))){
var temp__20428__auto__ = (function (){var and__20896__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__20896__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__20896__auto__;
}
})();
if(cljs.core.truth_(temp__20428__auto__)){
var got = temp__20428__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",(-1987822328)).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",(-1987822328))], null));
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
var args__23177__auto__ = [];
var len__23174__auto___984 = arguments.length;
var i__23175__auto___985 = (0);
while(true){
if((i__23175__auto___985 < len__23174__auto___984)){
args__23177__auto__.push((arguments[i__23175__auto___985]));

var G__986 = (i__23175__auto___985 + (1));
i__23175__auto___985 = G__986;
continue;
} else {
}
break;
}

var argseq__23178__auto__ = ((((1) < args__23177__auto__.length))?(new cljs.core.IndexedSeq(args__23177__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__23178__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__981){
var map__982 = p__981;
var map__982__$1 = ((((!((map__982 == null)))?((((map__982.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__982.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__982):map__982);
var opts = map__982__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq979){
var G__980 = cljs.core.first.call(null,seq979);
var seq979__$1 = cljs.core.next.call(null,seq979);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__980,seq979__$1);
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
var G__988 = arguments.length;
switch (G__988) {
case (2):
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case (3):
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__8__auto___1034 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8__auto___1034){
return (function (){
var f__9__auto__ = (function (){var switch__3__auto__ = ((function (c__8__auto___1034){
return (function (state_1012){
var state_val_1013 = (state_1012[(1)]);
if((state_val_1013 === (1))){
var state_1012__$1 = state_1012;
var statearr_1014_1035 = state_1012__$1;
(statearr_1014_1035[(2)] = null);

(statearr_1014_1035[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1013 === (2))){
var state_1012__$1 = state_1012;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_1012__$1,(4),from);
} else {
if((state_val_1013 === (3))){
var inst_1010 = (state_1012[(2)]);
var state_1012__$1 = state_1012;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_1012__$1,inst_1010);
} else {
if((state_val_1013 === (4))){
var inst_991 = (state_1012[(7)]);
var inst_991__$1 = (state_1012[(2)]);
var inst_992 = (inst_991__$1 == null);
var state_1012__$1 = (function (){var statearr_1015 = state_1012;
(statearr_1015[(7)] = inst_991__$1);

return statearr_1015;
})();
if(cljs.core.truth_(inst_992)){
var statearr_1016_1036 = state_1012__$1;
(statearr_1016_1036[(1)] = (5));

} else {
var statearr_1017_1037 = state_1012__$1;
(statearr_1017_1037[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1013 === (5))){
var state_1012__$1 = state_1012;
if(cljs.core.truth_(close_QMARK_)){
var statearr_1018_1038 = state_1012__$1;
(statearr_1018_1038[(1)] = (8));

} else {
var statearr_1019_1039 = state_1012__$1;
(statearr_1019_1039[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1013 === (6))){
var inst_991 = (state_1012[(7)]);
var state_1012__$1 = state_1012;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_1012__$1,(11),to,inst_991);
} else {
if((state_val_1013 === (7))){
var inst_1008 = (state_1012[(2)]);
var state_1012__$1 = state_1012;
var statearr_1020_1040 = state_1012__$1;
(statearr_1020_1040[(2)] = inst_1008);

(statearr_1020_1040[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1013 === (8))){
var inst_995 = cljs.core.async.close_BANG_.call(null,to);
var state_1012__$1 = state_1012;
var statearr_1021_1041 = state_1012__$1;
(statearr_1021_1041[(2)] = inst_995);

(statearr_1021_1041[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1013 === (9))){
var state_1012__$1 = state_1012;
var statearr_1022_1042 = state_1012__$1;
(statearr_1022_1042[(2)] = null);

(statearr_1022_1042[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1013 === (10))){
var inst_998 = (state_1012[(2)]);
var state_1012__$1 = state_1012;
var statearr_1023_1043 = state_1012__$1;
(statearr_1023_1043[(2)] = inst_998);

(statearr_1023_1043[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1013 === (11))){
var inst_1001 = (state_1012[(2)]);
var state_1012__$1 = state_1012;
if(cljs.core.truth_(inst_1001)){
var statearr_1024_1044 = state_1012__$1;
(statearr_1024_1044[(1)] = (12));

} else {
var statearr_1025_1045 = state_1012__$1;
(statearr_1025_1045[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1013 === (12))){
var state_1012__$1 = state_1012;
var statearr_1026_1046 = state_1012__$1;
(statearr_1026_1046[(2)] = null);

(statearr_1026_1046[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1013 === (13))){
var state_1012__$1 = state_1012;
var statearr_1027_1047 = state_1012__$1;
(statearr_1027_1047[(2)] = null);

(statearr_1027_1047[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1013 === (14))){
var inst_1006 = (state_1012[(2)]);
var state_1012__$1 = state_1012;
var statearr_1028_1048 = state_1012__$1;
(statearr_1028_1048[(2)] = inst_1006);

(statearr_1028_1048[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
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
});})(c__8__auto___1034))
;
return ((function (switch__3__auto__,c__8__auto___1034){
return (function() {
var cljs$core$async$state_machine__4__auto__ = null;
var cljs$core$async$state_machine__4__auto____0 = (function (){
var statearr_1029 = [null,null,null,null,null,null,null,null];
(statearr_1029[(0)] = cljs$core$async$state_machine__4__auto__);

(statearr_1029[(1)] = (1));

return statearr_1029;
});
var cljs$core$async$state_machine__4__auto____1 = (function (state_1012){
while(true){
var ret_value__5__auto__ = (function (){try{while(true){
var result__6__auto__ = switch__3__auto__.call(null,state_1012);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
continue;
} else {
return result__6__auto__;
}
break;
}
}catch (e1030){if((e1030 instanceof Object)){
var ex__7__auto__ = e1030;
var statearr_1031_1049 = state_1012;
(statearr_1031_1049[(5)] = ex__7__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_1012);

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
throw e1030;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
var G__1050 = state_1012;
state_1012 = G__1050;
continue;
} else {
return ret_value__5__auto__;
}
break;
}
});
cljs$core$async$state_machine__4__auto__ = function(state_1012){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__4__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__4__auto____1.call(this,state_1012);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__4__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__4__auto____0;
cljs$core$async$state_machine__4__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__4__auto____1;
return cljs$core$async$state_machine__4__auto__;
})()
;})(switch__3__auto__,c__8__auto___1034))
})();
var state__10__auto__ = (function (){var statearr_1032 = f__9__auto__.call(null);
(statearr_1032[(6)] = c__8__auto___1034);

return statearr_1032;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10__auto__);
});})(c__8__auto___1034))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = (3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__1051){
var vec__1052 = p__1051;
var v = cljs.core.nth.call(null,vec__1052,(0),null);
var p = cljs.core.nth.call(null,vec__1052,(1),null);
var job = vec__1052;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__8__auto___1223 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8__auto___1223,res,vec__1052,v,p,job,jobs,results){
return (function (){
var f__9__auto__ = (function (){var switch__3__auto__ = ((function (c__8__auto___1223,res,vec__1052,v,p,job,jobs,results){
return (function (state_1059){
var state_val_1060 = (state_1059[(1)]);
if((state_val_1060 === (1))){
var state_1059__$1 = state_1059;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_1059__$1,(2),res,v);
} else {
if((state_val_1060 === (2))){
var inst_1056 = (state_1059[(2)]);
var inst_1057 = cljs.core.async.close_BANG_.call(null,res);
var state_1059__$1 = (function (){var statearr_1061 = state_1059;
(statearr_1061[(7)] = inst_1056);

return statearr_1061;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_1059__$1,inst_1057);
} else {
return null;
}
}
});})(c__8__auto___1223,res,vec__1052,v,p,job,jobs,results))
;
return ((function (switch__3__auto__,c__8__auto___1223,res,vec__1052,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__4__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__4__auto____0 = (function (){
var statearr_1062 = [null,null,null,null,null,null,null,null];
(statearr_1062[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__4__auto__);

(statearr_1062[(1)] = (1));

return statearr_1062;
});
var cljs$core$async$pipeline_STAR__$_state_machine__4__auto____1 = (function (state_1059){
while(true){
var ret_value__5__auto__ = (function (){try{while(true){
var result__6__auto__ = switch__3__auto__.call(null,state_1059);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
continue;
} else {
return result__6__auto__;
}
break;
}
}catch (e1063){if((e1063 instanceof Object)){
var ex__7__auto__ = e1063;
var statearr_1064_1224 = state_1059;
(statearr_1064_1224[(5)] = ex__7__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_1059);

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
throw e1063;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
var G__1225 = state_1059;
state_1059 = G__1225;
continue;
} else {
return ret_value__5__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__4__auto__ = function(state_1059){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__4__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__4__auto____1.call(this,state_1059);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__4__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__4__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__4__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__4__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__4__auto__;
})()
;})(switch__3__auto__,c__8__auto___1223,res,vec__1052,v,p,job,jobs,results))
})();
var state__10__auto__ = (function (){var statearr_1065 = f__9__auto__.call(null);
(statearr_1065[(6)] = c__8__auto___1223);

return statearr_1065;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10__auto__);
});})(c__8__auto___1223,res,vec__1052,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__1066){
var vec__1067 = p__1066;
var v = cljs.core.nth.call(null,vec__1067,(0),null);
var p = cljs.core.nth.call(null,vec__1067,(1),null);
var job = vec__1067;
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
var n__22965__auto___1226 = n;
var __1227 = (0);
while(true){
if((__1227 < n__22965__auto___1226)){
var G__1070_1228 = type;
var G__1070_1229__$1 = (((G__1070_1228 instanceof cljs.core.Keyword))?G__1070_1228.fqn:null);
switch (G__1070_1229__$1) {
case "compute":
var c__8__auto___1231 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__1227,c__8__auto___1231,G__1070_1228,G__1070_1229__$1,n__22965__auto___1226,jobs,results,process,async){
return (function (){
var f__9__auto__ = (function (){var switch__3__auto__ = ((function (__1227,c__8__auto___1231,G__1070_1228,G__1070_1229__$1,n__22965__auto___1226,jobs,results,process,async){
return (function (state_1083){
var state_val_1084 = (state_1083[(1)]);
if((state_val_1084 === (1))){
var state_1083__$1 = state_1083;
var statearr_1085_1232 = state_1083__$1;
(statearr_1085_1232[(2)] = null);

(statearr_1085_1232[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1084 === (2))){
var state_1083__$1 = state_1083;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_1083__$1,(4),jobs);
} else {
if((state_val_1084 === (3))){
var inst_1081 = (state_1083[(2)]);
var state_1083__$1 = state_1083;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_1083__$1,inst_1081);
} else {
if((state_val_1084 === (4))){
var inst_1073 = (state_1083[(2)]);
var inst_1074 = process.call(null,inst_1073);
var state_1083__$1 = state_1083;
if(cljs.core.truth_(inst_1074)){
var statearr_1086_1233 = state_1083__$1;
(statearr_1086_1233[(1)] = (5));

} else {
var statearr_1087_1234 = state_1083__$1;
(statearr_1087_1234[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1084 === (5))){
var state_1083__$1 = state_1083;
var statearr_1088_1235 = state_1083__$1;
(statearr_1088_1235[(2)] = null);

(statearr_1088_1235[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1084 === (6))){
var state_1083__$1 = state_1083;
var statearr_1089_1236 = state_1083__$1;
(statearr_1089_1236[(2)] = null);

(statearr_1089_1236[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1084 === (7))){
var inst_1079 = (state_1083[(2)]);
var state_1083__$1 = state_1083;
var statearr_1090_1237 = state_1083__$1;
(statearr_1090_1237[(2)] = inst_1079);

(statearr_1090_1237[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
return null;
}
}
}
}
}
}
}
});})(__1227,c__8__auto___1231,G__1070_1228,G__1070_1229__$1,n__22965__auto___1226,jobs,results,process,async))
;
return ((function (__1227,switch__3__auto__,c__8__auto___1231,G__1070_1228,G__1070_1229__$1,n__22965__auto___1226,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__4__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__4__auto____0 = (function (){
var statearr_1091 = [null,null,null,null,null,null,null];
(statearr_1091[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__4__auto__);

(statearr_1091[(1)] = (1));

return statearr_1091;
});
var cljs$core$async$pipeline_STAR__$_state_machine__4__auto____1 = (function (state_1083){
while(true){
var ret_value__5__auto__ = (function (){try{while(true){
var result__6__auto__ = switch__3__auto__.call(null,state_1083);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
continue;
} else {
return result__6__auto__;
}
break;
}
}catch (e1092){if((e1092 instanceof Object)){
var ex__7__auto__ = e1092;
var statearr_1093_1238 = state_1083;
(statearr_1093_1238[(5)] = ex__7__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_1083);

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
throw e1092;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
var G__1239 = state_1083;
state_1083 = G__1239;
continue;
} else {
return ret_value__5__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__4__auto__ = function(state_1083){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__4__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__4__auto____1.call(this,state_1083);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__4__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__4__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__4__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__4__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__4__auto__;
})()
;})(__1227,switch__3__auto__,c__8__auto___1231,G__1070_1228,G__1070_1229__$1,n__22965__auto___1226,jobs,results,process,async))
})();
var state__10__auto__ = (function (){var statearr_1094 = f__9__auto__.call(null);
(statearr_1094[(6)] = c__8__auto___1231);

return statearr_1094;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10__auto__);
});})(__1227,c__8__auto___1231,G__1070_1228,G__1070_1229__$1,n__22965__auto___1226,jobs,results,process,async))
);


break;
case "async":
var c__8__auto___1240 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__1227,c__8__auto___1240,G__1070_1228,G__1070_1229__$1,n__22965__auto___1226,jobs,results,process,async){
return (function (){
var f__9__auto__ = (function (){var switch__3__auto__ = ((function (__1227,c__8__auto___1240,G__1070_1228,G__1070_1229__$1,n__22965__auto___1226,jobs,results,process,async){
return (function (state_1107){
var state_val_1108 = (state_1107[(1)]);
if((state_val_1108 === (1))){
var state_1107__$1 = state_1107;
var statearr_1109_1241 = state_1107__$1;
(statearr_1109_1241[(2)] = null);

(statearr_1109_1241[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1108 === (2))){
var state_1107__$1 = state_1107;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_1107__$1,(4),jobs);
} else {
if((state_val_1108 === (3))){
var inst_1105 = (state_1107[(2)]);
var state_1107__$1 = state_1107;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_1107__$1,inst_1105);
} else {
if((state_val_1108 === (4))){
var inst_1097 = (state_1107[(2)]);
var inst_1098 = async.call(null,inst_1097);
var state_1107__$1 = state_1107;
if(cljs.core.truth_(inst_1098)){
var statearr_1110_1242 = state_1107__$1;
(statearr_1110_1242[(1)] = (5));

} else {
var statearr_1111_1243 = state_1107__$1;
(statearr_1111_1243[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1108 === (5))){
var state_1107__$1 = state_1107;
var statearr_1112_1244 = state_1107__$1;
(statearr_1112_1244[(2)] = null);

(statearr_1112_1244[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1108 === (6))){
var state_1107__$1 = state_1107;
var statearr_1113_1245 = state_1107__$1;
(statearr_1113_1245[(2)] = null);

(statearr_1113_1245[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1108 === (7))){
var inst_1103 = (state_1107[(2)]);
var state_1107__$1 = state_1107;
var statearr_1114_1246 = state_1107__$1;
(statearr_1114_1246[(2)] = inst_1103);

(statearr_1114_1246[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
return null;
}
}
}
}
}
}
}
});})(__1227,c__8__auto___1240,G__1070_1228,G__1070_1229__$1,n__22965__auto___1226,jobs,results,process,async))
;
return ((function (__1227,switch__3__auto__,c__8__auto___1240,G__1070_1228,G__1070_1229__$1,n__22965__auto___1226,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__4__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__4__auto____0 = (function (){
var statearr_1115 = [null,null,null,null,null,null,null];
(statearr_1115[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__4__auto__);

(statearr_1115[(1)] = (1));

return statearr_1115;
});
var cljs$core$async$pipeline_STAR__$_state_machine__4__auto____1 = (function (state_1107){
while(true){
var ret_value__5__auto__ = (function (){try{while(true){
var result__6__auto__ = switch__3__auto__.call(null,state_1107);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
continue;
} else {
return result__6__auto__;
}
break;
}
}catch (e1116){if((e1116 instanceof Object)){
var ex__7__auto__ = e1116;
var statearr_1117_1247 = state_1107;
(statearr_1117_1247[(5)] = ex__7__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_1107);

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
throw e1116;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
var G__1248 = state_1107;
state_1107 = G__1248;
continue;
} else {
return ret_value__5__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__4__auto__ = function(state_1107){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__4__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__4__auto____1.call(this,state_1107);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__4__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__4__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__4__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__4__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__4__auto__;
})()
;})(__1227,switch__3__auto__,c__8__auto___1240,G__1070_1228,G__1070_1229__$1,n__22965__auto___1226,jobs,results,process,async))
})();
var state__10__auto__ = (function (){var statearr_1118 = f__9__auto__.call(null);
(statearr_1118[(6)] = c__8__auto___1240);

return statearr_1118;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10__auto__);
});})(__1227,c__8__auto___1240,G__1070_1228,G__1070_1229__$1,n__22965__auto___1226,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__1070_1229__$1)].join('')));

}

var G__1249 = (__1227 + (1));
__1227 = G__1249;
continue;
} else {
}
break;
}

var c__8__auto___1250 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8__auto___1250,jobs,results,process,async){
return (function (){
var f__9__auto__ = (function (){var switch__3__auto__ = ((function (c__8__auto___1250,jobs,results,process,async){
return (function (state_1140){
var state_val_1141 = (state_1140[(1)]);
if((state_val_1141 === (1))){
var state_1140__$1 = state_1140;
var statearr_1142_1251 = state_1140__$1;
(statearr_1142_1251[(2)] = null);

(statearr_1142_1251[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1141 === (2))){
var state_1140__$1 = state_1140;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_1140__$1,(4),from);
} else {
if((state_val_1141 === (3))){
var inst_1138 = (state_1140[(2)]);
var state_1140__$1 = state_1140;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_1140__$1,inst_1138);
} else {
if((state_val_1141 === (4))){
var inst_1121 = (state_1140[(7)]);
var inst_1121__$1 = (state_1140[(2)]);
var inst_1122 = (inst_1121__$1 == null);
var state_1140__$1 = (function (){var statearr_1143 = state_1140;
(statearr_1143[(7)] = inst_1121__$1);

return statearr_1143;
})();
if(cljs.core.truth_(inst_1122)){
var statearr_1144_1252 = state_1140__$1;
(statearr_1144_1252[(1)] = (5));

} else {
var statearr_1145_1253 = state_1140__$1;
(statearr_1145_1253[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1141 === (5))){
var inst_1124 = cljs.core.async.close_BANG_.call(null,jobs);
var state_1140__$1 = state_1140;
var statearr_1146_1254 = state_1140__$1;
(statearr_1146_1254[(2)] = inst_1124);

(statearr_1146_1254[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1141 === (6))){
var inst_1121 = (state_1140[(7)]);
var inst_1126 = (state_1140[(8)]);
var inst_1126__$1 = cljs.core.async.chan.call(null,(1));
var inst_1127 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_1128 = [inst_1121,inst_1126__$1];
var inst_1129 = (new cljs.core.PersistentVector(null,(2),(5),inst_1127,inst_1128,null));
var state_1140__$1 = (function (){var statearr_1147 = state_1140;
(statearr_1147[(8)] = inst_1126__$1);

return statearr_1147;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_1140__$1,(8),jobs,inst_1129);
} else {
if((state_val_1141 === (7))){
var inst_1136 = (state_1140[(2)]);
var state_1140__$1 = state_1140;
var statearr_1148_1255 = state_1140__$1;
(statearr_1148_1255[(2)] = inst_1136);

(statearr_1148_1255[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1141 === (8))){
var inst_1126 = (state_1140[(8)]);
var inst_1131 = (state_1140[(2)]);
var state_1140__$1 = (function (){var statearr_1149 = state_1140;
(statearr_1149[(9)] = inst_1131);

return statearr_1149;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_1140__$1,(9),results,inst_1126);
} else {
if((state_val_1141 === (9))){
var inst_1133 = (state_1140[(2)]);
var state_1140__$1 = (function (){var statearr_1150 = state_1140;
(statearr_1150[(10)] = inst_1133);

return statearr_1150;
})();
var statearr_1151_1256 = state_1140__$1;
(statearr_1151_1256[(2)] = null);

(statearr_1151_1256[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
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
});})(c__8__auto___1250,jobs,results,process,async))
;
return ((function (switch__3__auto__,c__8__auto___1250,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__4__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__4__auto____0 = (function (){
var statearr_1152 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_1152[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__4__auto__);

(statearr_1152[(1)] = (1));

return statearr_1152;
});
var cljs$core$async$pipeline_STAR__$_state_machine__4__auto____1 = (function (state_1140){
while(true){
var ret_value__5__auto__ = (function (){try{while(true){
var result__6__auto__ = switch__3__auto__.call(null,state_1140);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
continue;
} else {
return result__6__auto__;
}
break;
}
}catch (e1153){if((e1153 instanceof Object)){
var ex__7__auto__ = e1153;
var statearr_1154_1257 = state_1140;
(statearr_1154_1257[(5)] = ex__7__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_1140);

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
throw e1153;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
var G__1258 = state_1140;
state_1140 = G__1258;
continue;
} else {
return ret_value__5__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__4__auto__ = function(state_1140){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__4__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__4__auto____1.call(this,state_1140);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__4__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__4__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__4__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__4__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__4__auto__;
})()
;})(switch__3__auto__,c__8__auto___1250,jobs,results,process,async))
})();
var state__10__auto__ = (function (){var statearr_1155 = f__9__auto__.call(null);
(statearr_1155[(6)] = c__8__auto___1250);

return statearr_1155;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10__auto__);
});})(c__8__auto___1250,jobs,results,process,async))
);


var c__8__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8__auto__,jobs,results,process,async){
return (function (){
var f__9__auto__ = (function (){var switch__3__auto__ = ((function (c__8__auto__,jobs,results,process,async){
return (function (state_1193){
var state_val_1194 = (state_1193[(1)]);
if((state_val_1194 === (1))){
var state_1193__$1 = state_1193;
var statearr_1195_1259 = state_1193__$1;
(statearr_1195_1259[(2)] = null);

(statearr_1195_1259[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1194 === (2))){
var state_1193__$1 = state_1193;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_1193__$1,(4),results);
} else {
if((state_val_1194 === (3))){
var inst_1191 = (state_1193[(2)]);
var state_1193__$1 = state_1193;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_1193__$1,inst_1191);
} else {
if((state_val_1194 === (4))){
var inst_1158 = (state_1193[(7)]);
var inst_1158__$1 = (state_1193[(2)]);
var inst_1159 = (inst_1158__$1 == null);
var state_1193__$1 = (function (){var statearr_1196 = state_1193;
(statearr_1196[(7)] = inst_1158__$1);

return statearr_1196;
})();
if(cljs.core.truth_(inst_1159)){
var statearr_1197_1260 = state_1193__$1;
(statearr_1197_1260[(1)] = (5));

} else {
var statearr_1198_1261 = state_1193__$1;
(statearr_1198_1261[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1194 === (5))){
var state_1193__$1 = state_1193;
if(cljs.core.truth_(close_QMARK_)){
var statearr_1199_1262 = state_1193__$1;
(statearr_1199_1262[(1)] = (8));

} else {
var statearr_1200_1263 = state_1193__$1;
(statearr_1200_1263[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1194 === (6))){
var inst_1158 = (state_1193[(7)]);
var state_1193__$1 = state_1193;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_1193__$1,(11),inst_1158);
} else {
if((state_val_1194 === (7))){
var inst_1189 = (state_1193[(2)]);
var state_1193__$1 = state_1193;
var statearr_1201_1264 = state_1193__$1;
(statearr_1201_1264[(2)] = inst_1189);

(statearr_1201_1264[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1194 === (8))){
var inst_1162 = cljs.core.async.close_BANG_.call(null,to);
var state_1193__$1 = state_1193;
var statearr_1202_1265 = state_1193__$1;
(statearr_1202_1265[(2)] = inst_1162);

(statearr_1202_1265[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1194 === (9))){
var state_1193__$1 = state_1193;
var statearr_1203_1266 = state_1193__$1;
(statearr_1203_1266[(2)] = null);

(statearr_1203_1266[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1194 === (10))){
var inst_1165 = (state_1193[(2)]);
var state_1193__$1 = state_1193;
var statearr_1204_1267 = state_1193__$1;
(statearr_1204_1267[(2)] = inst_1165);

(statearr_1204_1267[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1194 === (11))){
var inst_1168 = (state_1193[(2)]);
var state_1193__$1 = (function (){var statearr_1205 = state_1193;
(statearr_1205[(8)] = inst_1168);

return statearr_1205;
})();
var statearr_1206_1268 = state_1193__$1;
(statearr_1206_1268[(2)] = null);

(statearr_1206_1268[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1194 === (12))){
var inst_1168 = (state_1193[(8)]);
var state_1193__$1 = state_1193;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_1193__$1,(14),inst_1168);
} else {
if((state_val_1194 === (13))){
var inst_1186 = (state_1193[(2)]);
var state_1193__$1 = (function (){var statearr_1207 = state_1193;
(statearr_1207[(9)] = inst_1186);

return statearr_1207;
})();
var statearr_1208_1269 = state_1193__$1;
(statearr_1208_1269[(2)] = null);

(statearr_1208_1269[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1194 === (14))){
var inst_1171 = (state_1193[(10)]);
var inst_1173 = (state_1193[(11)]);
var inst_1171__$1 = (state_1193[(2)]);
var inst_1172 = (inst_1171__$1 == null);
var inst_1173__$1 = cljs.core.not.call(null,inst_1172);
var state_1193__$1 = (function (){var statearr_1209 = state_1193;
(statearr_1209[(10)] = inst_1171__$1);

(statearr_1209[(11)] = inst_1173__$1);

return statearr_1209;
})();
if(inst_1173__$1){
var statearr_1210_1270 = state_1193__$1;
(statearr_1210_1270[(1)] = (15));

} else {
var statearr_1211_1271 = state_1193__$1;
(statearr_1211_1271[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1194 === (15))){
var inst_1171 = (state_1193[(10)]);
var state_1193__$1 = state_1193;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_1193__$1,(18),to,inst_1171);
} else {
if((state_val_1194 === (16))){
var inst_1173 = (state_1193[(11)]);
var state_1193__$1 = state_1193;
var statearr_1212_1272 = state_1193__$1;
(statearr_1212_1272[(2)] = inst_1173);

(statearr_1212_1272[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1194 === (17))){
var inst_1179 = (state_1193[(2)]);
var state_1193__$1 = state_1193;
if(cljs.core.truth_(inst_1179)){
var statearr_1213_1273 = state_1193__$1;
(statearr_1213_1273[(1)] = (19));

} else {
var statearr_1214_1274 = state_1193__$1;
(statearr_1214_1274[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1194 === (18))){
var inst_1176 = (state_1193[(2)]);
var state_1193__$1 = state_1193;
var statearr_1215_1275 = state_1193__$1;
(statearr_1215_1275[(2)] = inst_1176);

(statearr_1215_1275[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1194 === (19))){
var state_1193__$1 = state_1193;
var statearr_1216_1276 = state_1193__$1;
(statearr_1216_1276[(2)] = null);

(statearr_1216_1276[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1194 === (20))){
var state_1193__$1 = state_1193;
var statearr_1217_1277 = state_1193__$1;
(statearr_1217_1277[(2)] = null);

(statearr_1217_1277[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1194 === (21))){
var inst_1184 = (state_1193[(2)]);
var state_1193__$1 = state_1193;
var statearr_1218_1278 = state_1193__$1;
(statearr_1218_1278[(2)] = inst_1184);

(statearr_1218_1278[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
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
});})(c__8__auto__,jobs,results,process,async))
;
return ((function (switch__3__auto__,c__8__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__4__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__4__auto____0 = (function (){
var statearr_1219 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_1219[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__4__auto__);

(statearr_1219[(1)] = (1));

return statearr_1219;
});
var cljs$core$async$pipeline_STAR__$_state_machine__4__auto____1 = (function (state_1193){
while(true){
var ret_value__5__auto__ = (function (){try{while(true){
var result__6__auto__ = switch__3__auto__.call(null,state_1193);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
continue;
} else {
return result__6__auto__;
}
break;
}
}catch (e1220){if((e1220 instanceof Object)){
var ex__7__auto__ = e1220;
var statearr_1221_1279 = state_1193;
(statearr_1221_1279[(5)] = ex__7__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_1193);

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
throw e1220;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
var G__1280 = state_1193;
state_1193 = G__1280;
continue;
} else {
return ret_value__5__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__4__auto__ = function(state_1193){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__4__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__4__auto____1.call(this,state_1193);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__4__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__4__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__4__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__4__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__4__auto__;
})()
;})(switch__3__auto__,c__8__auto__,jobs,results,process,async))
})();
var state__10__auto__ = (function (){var statearr_1222 = f__9__auto__.call(null);
(statearr_1222[(6)] = c__8__auto__);

return statearr_1222;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10__auto__);
});})(c__8__auto__,jobs,results,process,async))
);

return c__8__auto__;
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
var G__1282 = arguments.length;
switch (G__1282) {
case (4):
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case (5):
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",(1050769601)));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = (5);

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
var G__1285 = arguments.length;
switch (G__1285) {
case (4):
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case (5):
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case (6):
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",(1555393130)));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = (6);

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
var G__1288 = arguments.length;
switch (G__1288) {
case (2):
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case (4):
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__8__auto___1337 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8__auto___1337,tc,fc){
return (function (){
var f__9__auto__ = (function (){var switch__3__auto__ = ((function (c__8__auto___1337,tc,fc){
return (function (state_1314){
var state_val_1315 = (state_1314[(1)]);
if((state_val_1315 === (1))){
var state_1314__$1 = state_1314;
var statearr_1316_1338 = state_1314__$1;
(statearr_1316_1338[(2)] = null);

(statearr_1316_1338[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1315 === (2))){
var state_1314__$1 = state_1314;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_1314__$1,(4),ch);
} else {
if((state_val_1315 === (3))){
var inst_1312 = (state_1314[(2)]);
var state_1314__$1 = state_1314;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_1314__$1,inst_1312);
} else {
if((state_val_1315 === (4))){
var inst_1291 = (state_1314[(7)]);
var inst_1291__$1 = (state_1314[(2)]);
var inst_1292 = (inst_1291__$1 == null);
var state_1314__$1 = (function (){var statearr_1317 = state_1314;
(statearr_1317[(7)] = inst_1291__$1);

return statearr_1317;
})();
if(cljs.core.truth_(inst_1292)){
var statearr_1318_1339 = state_1314__$1;
(statearr_1318_1339[(1)] = (5));

} else {
var statearr_1319_1340 = state_1314__$1;
(statearr_1319_1340[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1315 === (5))){
var inst_1294 = cljs.core.async.close_BANG_.call(null,tc);
var inst_1295 = cljs.core.async.close_BANG_.call(null,fc);
var state_1314__$1 = (function (){var statearr_1320 = state_1314;
(statearr_1320[(8)] = inst_1294);

return statearr_1320;
})();
var statearr_1321_1341 = state_1314__$1;
(statearr_1321_1341[(2)] = inst_1295);

(statearr_1321_1341[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1315 === (6))){
var inst_1291 = (state_1314[(7)]);
var inst_1297 = p.call(null,inst_1291);
var state_1314__$1 = state_1314;
if(cljs.core.truth_(inst_1297)){
var statearr_1322_1342 = state_1314__$1;
(statearr_1322_1342[(1)] = (9));

} else {
var statearr_1323_1343 = state_1314__$1;
(statearr_1323_1343[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1315 === (7))){
var inst_1310 = (state_1314[(2)]);
var state_1314__$1 = state_1314;
var statearr_1324_1344 = state_1314__$1;
(statearr_1324_1344[(2)] = inst_1310);

(statearr_1324_1344[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1315 === (8))){
var inst_1303 = (state_1314[(2)]);
var state_1314__$1 = state_1314;
if(cljs.core.truth_(inst_1303)){
var statearr_1325_1345 = state_1314__$1;
(statearr_1325_1345[(1)] = (12));

} else {
var statearr_1326_1346 = state_1314__$1;
(statearr_1326_1346[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1315 === (9))){
var state_1314__$1 = state_1314;
var statearr_1327_1347 = state_1314__$1;
(statearr_1327_1347[(2)] = tc);

(statearr_1327_1347[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1315 === (10))){
var state_1314__$1 = state_1314;
var statearr_1328_1348 = state_1314__$1;
(statearr_1328_1348[(2)] = fc);

(statearr_1328_1348[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1315 === (11))){
var inst_1291 = (state_1314[(7)]);
var inst_1301 = (state_1314[(2)]);
var state_1314__$1 = state_1314;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_1314__$1,(8),inst_1301,inst_1291);
} else {
if((state_val_1315 === (12))){
var state_1314__$1 = state_1314;
var statearr_1329_1349 = state_1314__$1;
(statearr_1329_1349[(2)] = null);

(statearr_1329_1349[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1315 === (13))){
var state_1314__$1 = state_1314;
var statearr_1330_1350 = state_1314__$1;
(statearr_1330_1350[(2)] = null);

(statearr_1330_1350[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1315 === (14))){
var inst_1308 = (state_1314[(2)]);
var state_1314__$1 = state_1314;
var statearr_1331_1351 = state_1314__$1;
(statearr_1331_1351[(2)] = inst_1308);

(statearr_1331_1351[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
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
});})(c__8__auto___1337,tc,fc))
;
return ((function (switch__3__auto__,c__8__auto___1337,tc,fc){
return (function() {
var cljs$core$async$state_machine__4__auto__ = null;
var cljs$core$async$state_machine__4__auto____0 = (function (){
var statearr_1332 = [null,null,null,null,null,null,null,null,null];
(statearr_1332[(0)] = cljs$core$async$state_machine__4__auto__);

(statearr_1332[(1)] = (1));

return statearr_1332;
});
var cljs$core$async$state_machine__4__auto____1 = (function (state_1314){
while(true){
var ret_value__5__auto__ = (function (){try{while(true){
var result__6__auto__ = switch__3__auto__.call(null,state_1314);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
continue;
} else {
return result__6__auto__;
}
break;
}
}catch (e1333){if((e1333 instanceof Object)){
var ex__7__auto__ = e1333;
var statearr_1334_1352 = state_1314;
(statearr_1334_1352[(5)] = ex__7__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_1314);

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
throw e1333;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
var G__1353 = state_1314;
state_1314 = G__1353;
continue;
} else {
return ret_value__5__auto__;
}
break;
}
});
cljs$core$async$state_machine__4__auto__ = function(state_1314){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__4__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__4__auto____1.call(this,state_1314);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__4__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__4__auto____0;
cljs$core$async$state_machine__4__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__4__auto____1;
return cljs$core$async$state_machine__4__auto__;
})()
;})(switch__3__auto__,c__8__auto___1337,tc,fc))
})();
var state__10__auto__ = (function (){var statearr_1335 = f__9__auto__.call(null);
(statearr_1335[(6)] = c__8__auto___1337);

return statearr_1335;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10__auto__);
});})(c__8__auto___1337,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = (4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__8__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8__auto__){
return (function (){
var f__9__auto__ = (function (){var switch__3__auto__ = ((function (c__8__auto__){
return (function (state_1374){
var state_val_1375 = (state_1374[(1)]);
if((state_val_1375 === (1))){
var inst_1354 = init;
var state_1374__$1 = (function (){var statearr_1376 = state_1374;
(statearr_1376[(7)] = inst_1354);

return statearr_1376;
})();
var statearr_1377_1394 = state_1374__$1;
(statearr_1377_1394[(2)] = null);

(statearr_1377_1394[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1375 === (2))){
var state_1374__$1 = state_1374;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_1374__$1,(4),ch);
} else {
if((state_val_1375 === (3))){
var inst_1372 = (state_1374[(2)]);
var state_1374__$1 = state_1374;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_1374__$1,inst_1372);
} else {
if((state_val_1375 === (4))){
var inst_1357 = (state_1374[(8)]);
var inst_1357__$1 = (state_1374[(2)]);
var inst_1358 = (inst_1357__$1 == null);
var state_1374__$1 = (function (){var statearr_1378 = state_1374;
(statearr_1378[(8)] = inst_1357__$1);

return statearr_1378;
})();
if(cljs.core.truth_(inst_1358)){
var statearr_1379_1395 = state_1374__$1;
(statearr_1379_1395[(1)] = (5));

} else {
var statearr_1380_1396 = state_1374__$1;
(statearr_1380_1396[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1375 === (5))){
var inst_1354 = (state_1374[(7)]);
var state_1374__$1 = state_1374;
var statearr_1381_1397 = state_1374__$1;
(statearr_1381_1397[(2)] = inst_1354);

(statearr_1381_1397[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1375 === (6))){
var inst_1354 = (state_1374[(7)]);
var inst_1357 = (state_1374[(8)]);
var inst_1361 = (state_1374[(9)]);
var inst_1361__$1 = f.call(null,inst_1354,inst_1357);
var inst_1362 = cljs.core.reduced_QMARK_.call(null,inst_1361__$1);
var state_1374__$1 = (function (){var statearr_1382 = state_1374;
(statearr_1382[(9)] = inst_1361__$1);

return statearr_1382;
})();
if(inst_1362){
var statearr_1383_1398 = state_1374__$1;
(statearr_1383_1398[(1)] = (8));

} else {
var statearr_1384_1399 = state_1374__$1;
(statearr_1384_1399[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1375 === (7))){
var inst_1370 = (state_1374[(2)]);
var state_1374__$1 = state_1374;
var statearr_1385_1400 = state_1374__$1;
(statearr_1385_1400[(2)] = inst_1370);

(statearr_1385_1400[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1375 === (8))){
var inst_1361 = (state_1374[(9)]);
var inst_1364 = cljs.core.deref.call(null,inst_1361);
var state_1374__$1 = state_1374;
var statearr_1386_1401 = state_1374__$1;
(statearr_1386_1401[(2)] = inst_1364);

(statearr_1386_1401[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1375 === (9))){
var inst_1361 = (state_1374[(9)]);
var inst_1354 = inst_1361;
var state_1374__$1 = (function (){var statearr_1387 = state_1374;
(statearr_1387[(7)] = inst_1354);

return statearr_1387;
})();
var statearr_1388_1402 = state_1374__$1;
(statearr_1388_1402[(2)] = null);

(statearr_1388_1402[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1375 === (10))){
var inst_1368 = (state_1374[(2)]);
var state_1374__$1 = state_1374;
var statearr_1389_1403 = state_1374__$1;
(statearr_1389_1403[(2)] = inst_1368);

(statearr_1389_1403[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
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
});})(c__8__auto__))
;
return ((function (switch__3__auto__,c__8__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__4__auto__ = null;
var cljs$core$async$reduce_$_state_machine__4__auto____0 = (function (){
var statearr_1390 = [null,null,null,null,null,null,null,null,null,null];
(statearr_1390[(0)] = cljs$core$async$reduce_$_state_machine__4__auto__);

(statearr_1390[(1)] = (1));

return statearr_1390;
});
var cljs$core$async$reduce_$_state_machine__4__auto____1 = (function (state_1374){
while(true){
var ret_value__5__auto__ = (function (){try{while(true){
var result__6__auto__ = switch__3__auto__.call(null,state_1374);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
continue;
} else {
return result__6__auto__;
}
break;
}
}catch (e1391){if((e1391 instanceof Object)){
var ex__7__auto__ = e1391;
var statearr_1392_1404 = state_1374;
(statearr_1392_1404[(5)] = ex__7__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_1374);

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
throw e1391;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
var G__1405 = state_1374;
state_1374 = G__1405;
continue;
} else {
return ret_value__5__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__4__auto__ = function(state_1374){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__4__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__4__auto____1.call(this,state_1374);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__4__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__4__auto____0;
cljs$core$async$reduce_$_state_machine__4__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__4__auto____1;
return cljs$core$async$reduce_$_state_machine__4__auto__;
})()
;})(switch__3__auto__,c__8__auto__))
})();
var state__10__auto__ = (function (){var statearr_1393 = f__9__auto__.call(null);
(statearr_1393[(6)] = c__8__auto__);

return statearr_1393;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10__auto__);
});})(c__8__auto__))
);

return c__8__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__8__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8__auto__,f__$1){
return (function (){
var f__9__auto__ = (function (){var switch__3__auto__ = ((function (c__8__auto__,f__$1){
return (function (state_1411){
var state_val_1412 = (state_1411[(1)]);
if((state_val_1412 === (1))){
var inst_1406 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_1411__$1 = state_1411;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_1411__$1,(2),inst_1406);
} else {
if((state_val_1412 === (2))){
var inst_1408 = (state_1411[(2)]);
var inst_1409 = f__$1.call(null,inst_1408);
var state_1411__$1 = state_1411;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_1411__$1,inst_1409);
} else {
return null;
}
}
});})(c__8__auto__,f__$1))
;
return ((function (switch__3__auto__,c__8__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__4__auto__ = null;
var cljs$core$async$transduce_$_state_machine__4__auto____0 = (function (){
var statearr_1413 = [null,null,null,null,null,null,null];
(statearr_1413[(0)] = cljs$core$async$transduce_$_state_machine__4__auto__);

(statearr_1413[(1)] = (1));

return statearr_1413;
});
var cljs$core$async$transduce_$_state_machine__4__auto____1 = (function (state_1411){
while(true){
var ret_value__5__auto__ = (function (){try{while(true){
var result__6__auto__ = switch__3__auto__.call(null,state_1411);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
continue;
} else {
return result__6__auto__;
}
break;
}
}catch (e1414){if((e1414 instanceof Object)){
var ex__7__auto__ = e1414;
var statearr_1415_1417 = state_1411;
(statearr_1415_1417[(5)] = ex__7__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_1411);

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
throw e1414;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
var G__1418 = state_1411;
state_1411 = G__1418;
continue;
} else {
return ret_value__5__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__4__auto__ = function(state_1411){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__4__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__4__auto____1.call(this,state_1411);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__4__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__4__auto____0;
cljs$core$async$transduce_$_state_machine__4__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__4__auto____1;
return cljs$core$async$transduce_$_state_machine__4__auto__;
})()
;})(switch__3__auto__,c__8__auto__,f__$1))
})();
var state__10__auto__ = (function (){var statearr_1416 = f__9__auto__.call(null);
(statearr_1416[(6)] = c__8__auto__);

return statearr_1416;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10__auto__);
});})(c__8__auto__,f__$1))
);

return c__8__auto__;
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
var G__1420 = arguments.length;
switch (G__1420) {
case (2):
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case (3):
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__8__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8__auto__){
return (function (){
var f__9__auto__ = (function (){var switch__3__auto__ = ((function (c__8__auto__){
return (function (state_1445){
var state_val_1446 = (state_1445[(1)]);
if((state_val_1446 === (1))){
var inst_1421 = cljs.core.seq.call(null,coll);
var inst_1422 = inst_1421;
var state_1445__$1 = (function (){var statearr_1447 = state_1445;
(statearr_1447[(7)] = inst_1422);

return statearr_1447;
})();
var statearr_1448_1468 = state_1445__$1;
(statearr_1448_1468[(2)] = null);

(statearr_1448_1468[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1446 === (2))){
var inst_1422 = (state_1445[(7)]);
var state_1445__$1 = state_1445;
if(cljs.core.truth_(inst_1422)){
var statearr_1449_1469 = state_1445__$1;
(statearr_1449_1469[(1)] = (4));

} else {
var statearr_1450_1470 = state_1445__$1;
(statearr_1450_1470[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1446 === (3))){
var inst_1443 = (state_1445[(2)]);
var state_1445__$1 = state_1445;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_1445__$1,inst_1443);
} else {
if((state_val_1446 === (4))){
var inst_1422 = (state_1445[(7)]);
var inst_1425 = cljs.core.first.call(null,inst_1422);
var state_1445__$1 = state_1445;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_1445__$1,(7),ch,inst_1425);
} else {
if((state_val_1446 === (5))){
var inst_1422 = (state_1445[(7)]);
var state_1445__$1 = state_1445;
var statearr_1451_1471 = state_1445__$1;
(statearr_1451_1471[(2)] = inst_1422);

(statearr_1451_1471[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1446 === (6))){
var inst_1430 = (state_1445[(2)]);
var state_1445__$1 = state_1445;
if(cljs.core.truth_(inst_1430)){
var statearr_1452_1472 = state_1445__$1;
(statearr_1452_1472[(1)] = (8));

} else {
var statearr_1453_1473 = state_1445__$1;
(statearr_1453_1473[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1446 === (7))){
var inst_1427 = (state_1445[(2)]);
var state_1445__$1 = state_1445;
var statearr_1454_1474 = state_1445__$1;
(statearr_1454_1474[(2)] = inst_1427);

(statearr_1454_1474[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1446 === (8))){
var inst_1422 = (state_1445[(7)]);
var inst_1432 = cljs.core.next.call(null,inst_1422);
var inst_1422__$1 = inst_1432;
var state_1445__$1 = (function (){var statearr_1455 = state_1445;
(statearr_1455[(7)] = inst_1422__$1);

return statearr_1455;
})();
var statearr_1456_1475 = state_1445__$1;
(statearr_1456_1475[(2)] = null);

(statearr_1456_1475[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1446 === (9))){
var state_1445__$1 = state_1445;
if(cljs.core.truth_(close_QMARK_)){
var statearr_1457_1476 = state_1445__$1;
(statearr_1457_1476[(1)] = (11));

} else {
var statearr_1458_1477 = state_1445__$1;
(statearr_1458_1477[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1446 === (10))){
var inst_1441 = (state_1445[(2)]);
var state_1445__$1 = state_1445;
var statearr_1459_1478 = state_1445__$1;
(statearr_1459_1478[(2)] = inst_1441);

(statearr_1459_1478[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1446 === (11))){
var inst_1436 = cljs.core.async.close_BANG_.call(null,ch);
var state_1445__$1 = state_1445;
var statearr_1460_1479 = state_1445__$1;
(statearr_1460_1479[(2)] = inst_1436);

(statearr_1460_1479[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1446 === (12))){
var state_1445__$1 = state_1445;
var statearr_1461_1480 = state_1445__$1;
(statearr_1461_1480[(2)] = null);

(statearr_1461_1480[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1446 === (13))){
var inst_1439 = (state_1445[(2)]);
var state_1445__$1 = state_1445;
var statearr_1462_1481 = state_1445__$1;
(statearr_1462_1481[(2)] = inst_1439);

(statearr_1462_1481[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
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
});})(c__8__auto__))
;
return ((function (switch__3__auto__,c__8__auto__){
return (function() {
var cljs$core$async$state_machine__4__auto__ = null;
var cljs$core$async$state_machine__4__auto____0 = (function (){
var statearr_1463 = [null,null,null,null,null,null,null,null];
(statearr_1463[(0)] = cljs$core$async$state_machine__4__auto__);

(statearr_1463[(1)] = (1));

return statearr_1463;
});
var cljs$core$async$state_machine__4__auto____1 = (function (state_1445){
while(true){
var ret_value__5__auto__ = (function (){try{while(true){
var result__6__auto__ = switch__3__auto__.call(null,state_1445);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
continue;
} else {
return result__6__auto__;
}
break;
}
}catch (e1464){if((e1464 instanceof Object)){
var ex__7__auto__ = e1464;
var statearr_1465_1482 = state_1445;
(statearr_1465_1482[(5)] = ex__7__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_1445);

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
throw e1464;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
var G__1483 = state_1445;
state_1445 = G__1483;
continue;
} else {
return ret_value__5__auto__;
}
break;
}
});
cljs$core$async$state_machine__4__auto__ = function(state_1445){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__4__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__4__auto____1.call(this,state_1445);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__4__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__4__auto____0;
cljs$core$async$state_machine__4__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__4__auto____1;
return cljs$core$async$state_machine__4__auto__;
})()
;})(switch__3__auto__,c__8__auto__))
})();
var state__10__auto__ = (function (){var statearr_1466 = f__9__auto__.call(null);
(statearr_1466[(6)] = c__8__auto__);

return statearr_1466;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10__auto__);
});})(c__8__auto__))
);

return c__8__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = (3);

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
var x__22676__auto__ = (((_ == null))?null:_);
var m__22677__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__22676__auto__)]);
if(!((m__22677__auto__ == null))){
return m__22677__auto__.call(null,_);
} else {
var m__22677__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__22677__auto____$1 == null))){
return m__22677__auto____$1.call(null,_);
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
var x__22676__auto__ = (((m == null))?null:m);
var m__22677__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__22676__auto__)]);
if(!((m__22677__auto__ == null))){
return m__22677__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__22677__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__22677__auto____$1 == null))){
return m__22677__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__22676__auto__ = (((m == null))?null:m);
var m__22677__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__22676__auto__)]);
if(!((m__22677__auto__ == null))){
return m__22677__auto__.call(null,m,ch);
} else {
var m__22677__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__22677__auto____$1 == null))){
return m__22677__auto____$1.call(null,m,ch);
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
var x__22676__auto__ = (((m == null))?null:m);
var m__22677__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__22676__auto__)]);
if(!((m__22677__auto__ == null))){
return m__22677__auto__.call(null,m);
} else {
var m__22677__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__22677__auto____$1 == null))){
return m__22677__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async1484 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.async.Mult}
*/
cljs.core.async.t_cljs$core$async1484 = (function (ch,cs,meta1485){
this.ch = ch;
this.cs = cs;
this.meta1485 = meta1485;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async1484.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_1486,meta1485__$1){
var self__ = this;
var _1486__$1 = this;
return (new cljs.core.async.t_cljs$core$async1484(self__.ch,self__.cs,meta1485__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async1484.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_1486){
var self__ = this;
var _1486__$1 = this;
return self__.meta1485;
});})(cs))
;

cljs.core.async.t_cljs$core$async1484.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async1484.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async1484.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async1484.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async1484.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async1484.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async1484.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",(1085813622),null),new cljs.core.Symbol(null,"cs","cs",(-117024463),null),new cljs.core.Symbol(null,"meta1485","meta1485",(-153969740),null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async1484.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async1484.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async1484";

cljs.core.async.t_cljs$core$async1484.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__22617__auto__,writer__22618__auto__,opt__22619__auto__){
return cljs.core._write.call(null,writer__22618__auto__,"cljs.core.async/t_cljs$core$async1484");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async1484 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async1484(ch__$1,cs__$1,meta1485){
return (new cljs.core.async.t_cljs$core$async1484(ch__$1,cs__$1,meta1485));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async1484(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__8__auto___1706 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8__auto___1706,cs,m,dchan,dctr,done){
return (function (){
var f__9__auto__ = (function (){var switch__3__auto__ = ((function (c__8__auto___1706,cs,m,dchan,dctr,done){
return (function (state_1621){
var state_val_1622 = (state_1621[(1)]);
if((state_val_1622 === (32))){
var inst_1564 = (state_1621[(7)]);
var inst_1561 = (state_1621[(8)]);
var inst_1562 = (state_1621[(9)]);
var inst_1563 = (state_1621[(10)]);
var inst_1576 = (state_1621[(2)]);
var inst_1577 = (inst_1564 + (1));
var tmp1623 = inst_1561;
var tmp1624 = inst_1562;
var tmp1625 = inst_1563;
var inst_1561__$1 = tmp1623;
var inst_1562__$1 = tmp1624;
var inst_1563__$1 = tmp1625;
var inst_1564__$1 = inst_1577;
var state_1621__$1 = (function (){var statearr_1626 = state_1621;
(statearr_1626[(11)] = inst_1576);

(statearr_1626[(8)] = inst_1561__$1);

(statearr_1626[(9)] = inst_1562__$1);

(statearr_1626[(10)] = inst_1563__$1);

(statearr_1626[(7)] = inst_1564__$1);

return statearr_1626;
})();
var statearr_1627_1707 = state_1621__$1;
(statearr_1627_1707[(2)] = null);

(statearr_1627_1707[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1622 === (1))){
var state_1621__$1 = state_1621;
var statearr_1628_1708 = state_1621__$1;
(statearr_1628_1708[(2)] = null);

(statearr_1628_1708[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1622 === (33))){
var inst_1580 = (state_1621[(12)]);
var inst_1582 = cljs.core.chunked_seq_QMARK_.call(null,inst_1580);
var state_1621__$1 = state_1621;
if(inst_1582){
var statearr_1629_1709 = state_1621__$1;
(statearr_1629_1709[(1)] = (36));

} else {
var statearr_1630_1710 = state_1621__$1;
(statearr_1630_1710[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1622 === (2))){
var state_1621__$1 = state_1621;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_1621__$1,(4),ch);
} else {
if((state_val_1622 === (34))){
var state_1621__$1 = state_1621;
var statearr_1631_1711 = state_1621__$1;
(statearr_1631_1711[(2)] = null);

(statearr_1631_1711[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1622 === (3))){
var inst_1619 = (state_1621[(2)]);
var state_1621__$1 = state_1621;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_1621__$1,inst_1619);
} else {
if((state_val_1622 === (35))){
var inst_1603 = (state_1621[(2)]);
var state_1621__$1 = state_1621;
var statearr_1632_1712 = state_1621__$1;
(statearr_1632_1712[(2)] = inst_1603);

(statearr_1632_1712[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1622 === (4))){
var inst_1489 = (state_1621[(13)]);
var inst_1489__$1 = (state_1621[(2)]);
var inst_1490 = (inst_1489__$1 == null);
var state_1621__$1 = (function (){var statearr_1633 = state_1621;
(statearr_1633[(13)] = inst_1489__$1);

return statearr_1633;
})();
if(cljs.core.truth_(inst_1490)){
var statearr_1634_1713 = state_1621__$1;
(statearr_1634_1713[(1)] = (5));

} else {
var statearr_1635_1714 = state_1621__$1;
(statearr_1635_1714[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1622 === (36))){
var inst_1580 = (state_1621[(12)]);
var inst_1584 = cljs.core.chunk_first.call(null,inst_1580);
var inst_1585 = cljs.core.chunk_rest.call(null,inst_1580);
var inst_1586 = cljs.core.count.call(null,inst_1584);
var inst_1561 = inst_1585;
var inst_1562 = inst_1584;
var inst_1563 = inst_1586;
var inst_1564 = (0);
var state_1621__$1 = (function (){var statearr_1636 = state_1621;
(statearr_1636[(8)] = inst_1561);

(statearr_1636[(9)] = inst_1562);

(statearr_1636[(10)] = inst_1563);

(statearr_1636[(7)] = inst_1564);

return statearr_1636;
})();
var statearr_1637_1715 = state_1621__$1;
(statearr_1637_1715[(2)] = null);

(statearr_1637_1715[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1622 === (5))){
var inst_1496 = cljs.core.deref.call(null,cs);
var inst_1497 = cljs.core.seq.call(null,inst_1496);
var inst_1498 = inst_1497;
var inst_1499 = null;
var inst_1500 = (0);
var inst_1501 = (0);
var state_1621__$1 = (function (){var statearr_1638 = state_1621;
(statearr_1638[(14)] = inst_1498);

(statearr_1638[(17)] = inst_1499);

(statearr_1638[(18)] = inst_1500);

(statearr_1638[(19)] = inst_1501);

return statearr_1638;
})();
var statearr_1639_1716 = state_1621__$1;
(statearr_1639_1716[(2)] = null);

(statearr_1639_1716[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1622 === (37))){
var inst_1580 = (state_1621[(12)]);
var inst_1589 = (state_1621[(15)]);
var inst_1489 = (state_1621[(13)]);
var inst_1589__$1 = cljs.core.first.call(null,inst_1580);
var inst_1590 = cljs.core.async.put_BANG_.call(null,inst_1589__$1,inst_1489,done);
var state_1621__$1 = (function (){var statearr_1640 = state_1621;
(statearr_1640[(15)] = inst_1589__$1);

return statearr_1640;
})();
if(cljs.core.truth_(inst_1590)){
var statearr_1641_1717 = state_1621__$1;
(statearr_1641_1717[(1)] = (39));

} else {
var statearr_1642_1718 = state_1621__$1;
(statearr_1642_1718[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1622 === (6))){
var inst_1553 = (state_1621[(16)]);
var inst_1552 = cljs.core.deref.call(null,cs);
var inst_1553__$1 = cljs.core.keys.call(null,inst_1552);
var inst_1554 = cljs.core.count.call(null,inst_1553__$1);
var inst_1555 = cljs.core.reset_BANG_.call(null,dctr,inst_1554);
var inst_1560 = cljs.core.seq.call(null,inst_1553__$1);
var inst_1561 = inst_1560;
var inst_1562 = null;
var inst_1563 = (0);
var inst_1564 = (0);
var state_1621__$1 = (function (){var statearr_1643 = state_1621;
(statearr_1643[(16)] = inst_1553__$1);

(statearr_1643[(20)] = inst_1555);

(statearr_1643[(8)] = inst_1561);

(statearr_1643[(9)] = inst_1562);

(statearr_1643[(10)] = inst_1563);

(statearr_1643[(7)] = inst_1564);

return statearr_1643;
})();
var statearr_1644_1719 = state_1621__$1;
(statearr_1644_1719[(2)] = null);

(statearr_1644_1719[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1622 === (38))){
var inst_1600 = (state_1621[(2)]);
var state_1621__$1 = state_1621;
var statearr_1645_1720 = state_1621__$1;
(statearr_1645_1720[(2)] = inst_1600);

(statearr_1645_1720[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1622 === (7))){
var inst_1617 = (state_1621[(2)]);
var state_1621__$1 = state_1621;
var statearr_1646_1721 = state_1621__$1;
(statearr_1646_1721[(2)] = inst_1617);

(statearr_1646_1721[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1622 === (39))){
var state_1621__$1 = state_1621;
var statearr_1647_1722 = state_1621__$1;
(statearr_1647_1722[(2)] = null);

(statearr_1647_1722[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1622 === (8))){
var inst_1501 = (state_1621[(19)]);
var inst_1500 = (state_1621[(18)]);
var inst_1503 = (inst_1501 < inst_1500);
var inst_1504 = inst_1503;
var state_1621__$1 = state_1621;
if(cljs.core.truth_(inst_1504)){
var statearr_1648_1723 = state_1621__$1;
(statearr_1648_1723[(1)] = (10));

} else {
var statearr_1649_1724 = state_1621__$1;
(statearr_1649_1724[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1622 === (40))){
var inst_1589 = (state_1621[(15)]);
var inst_1593 = done.call(null,null);
var inst_1594 = cljs.core.async.untap_STAR_.call(null,m,inst_1589);
var state_1621__$1 = (function (){var statearr_1650 = state_1621;
(statearr_1650[(21)] = inst_1593);

return statearr_1650;
})();
var statearr_1651_1725 = state_1621__$1;
(statearr_1651_1725[(2)] = inst_1594);

(statearr_1651_1725[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1622 === (9))){
var inst_1550 = (state_1621[(2)]);
var state_1621__$1 = state_1621;
var statearr_1652_1726 = state_1621__$1;
(statearr_1652_1726[(2)] = inst_1550);

(statearr_1652_1726[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1622 === (41))){
var inst_1580 = (state_1621[(12)]);
var inst_1596 = (state_1621[(2)]);
var inst_1597 = cljs.core.next.call(null,inst_1580);
var inst_1561 = inst_1597;
var inst_1562 = null;
var inst_1563 = (0);
var inst_1564 = (0);
var state_1621__$1 = (function (){var statearr_1653 = state_1621;
(statearr_1653[(22)] = inst_1596);

(statearr_1653[(8)] = inst_1561);

(statearr_1653[(9)] = inst_1562);

(statearr_1653[(10)] = inst_1563);

(statearr_1653[(7)] = inst_1564);

return statearr_1653;
})();
var statearr_1654_1727 = state_1621__$1;
(statearr_1654_1727[(2)] = null);

(statearr_1654_1727[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1622 === (10))){
var inst_1499 = (state_1621[(17)]);
var inst_1501 = (state_1621[(19)]);
var inst_1509 = cljs.core._nth.call(null,inst_1499,inst_1501);
var inst_1510 = cljs.core.nth.call(null,inst_1509,(0),null);
var inst_1511 = cljs.core.nth.call(null,inst_1509,(1),null);
var state_1621__$1 = (function (){var statearr_1655 = state_1621;
(statearr_1655[(23)] = inst_1510);

return statearr_1655;
})();
if(cljs.core.truth_(inst_1511)){
var statearr_1656_1728 = state_1621__$1;
(statearr_1656_1728[(1)] = (13));

} else {
var statearr_1657_1729 = state_1621__$1;
(statearr_1657_1729[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1622 === (42))){
var state_1621__$1 = state_1621;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_1621__$1,(45),dchan);
} else {
if((state_val_1622 === (11))){
var inst_1498 = (state_1621[(14)]);
var inst_1520 = (state_1621[(24)]);
var inst_1520__$1 = cljs.core.seq.call(null,inst_1498);
var state_1621__$1 = (function (){var statearr_1658 = state_1621;
(statearr_1658[(24)] = inst_1520__$1);

return statearr_1658;
})();
if(inst_1520__$1){
var statearr_1659_1730 = state_1621__$1;
(statearr_1659_1730[(1)] = (16));

} else {
var statearr_1660_1731 = state_1621__$1;
(statearr_1660_1731[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1622 === (43))){
var state_1621__$1 = state_1621;
var statearr_1661_1732 = state_1621__$1;
(statearr_1661_1732[(2)] = null);

(statearr_1661_1732[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1622 === (12))){
var inst_1548 = (state_1621[(2)]);
var state_1621__$1 = state_1621;
var statearr_1662_1733 = state_1621__$1;
(statearr_1662_1733[(2)] = inst_1548);

(statearr_1662_1733[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1622 === (44))){
var inst_1614 = (state_1621[(2)]);
var state_1621__$1 = (function (){var statearr_1663 = state_1621;
(statearr_1663[(25)] = inst_1614);

return statearr_1663;
})();
var statearr_1664_1734 = state_1621__$1;
(statearr_1664_1734[(2)] = null);

(statearr_1664_1734[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1622 === (13))){
var inst_1510 = (state_1621[(23)]);
var inst_1513 = cljs.core.async.close_BANG_.call(null,inst_1510);
var state_1621__$1 = state_1621;
var statearr_1665_1735 = state_1621__$1;
(statearr_1665_1735[(2)] = inst_1513);

(statearr_1665_1735[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1622 === (45))){
var inst_1611 = (state_1621[(2)]);
var state_1621__$1 = state_1621;
var statearr_1669_1736 = state_1621__$1;
(statearr_1669_1736[(2)] = inst_1611);

(statearr_1669_1736[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1622 === (14))){
var state_1621__$1 = state_1621;
var statearr_1670_1737 = state_1621__$1;
(statearr_1670_1737[(2)] = null);

(statearr_1670_1737[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1622 === (15))){
var inst_1501 = (state_1621[(19)]);
var inst_1498 = (state_1621[(14)]);
var inst_1499 = (state_1621[(17)]);
var inst_1500 = (state_1621[(18)]);
var inst_1516 = (state_1621[(2)]);
var inst_1517 = (inst_1501 + (1));
var tmp1666 = inst_1498;
var tmp1667 = inst_1499;
var tmp1668 = inst_1500;
var inst_1498__$1 = tmp1666;
var inst_1499__$1 = tmp1667;
var inst_1500__$1 = tmp1668;
var inst_1501__$1 = inst_1517;
var state_1621__$1 = (function (){var statearr_1671 = state_1621;
(statearr_1671[(26)] = inst_1516);

(statearr_1671[(14)] = inst_1498__$1);

(statearr_1671[(17)] = inst_1499__$1);

(statearr_1671[(18)] = inst_1500__$1);

(statearr_1671[(19)] = inst_1501__$1);

return statearr_1671;
})();
var statearr_1672_1738 = state_1621__$1;
(statearr_1672_1738[(2)] = null);

(statearr_1672_1738[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1622 === (16))){
var inst_1520 = (state_1621[(24)]);
var inst_1522 = cljs.core.chunked_seq_QMARK_.call(null,inst_1520);
var state_1621__$1 = state_1621;
if(inst_1522){
var statearr_1673_1739 = state_1621__$1;
(statearr_1673_1739[(1)] = (19));

} else {
var statearr_1674_1740 = state_1621__$1;
(statearr_1674_1740[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1622 === (17))){
var state_1621__$1 = state_1621;
var statearr_1675_1741 = state_1621__$1;
(statearr_1675_1741[(2)] = null);

(statearr_1675_1741[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1622 === (18))){
var inst_1546 = (state_1621[(2)]);
var state_1621__$1 = state_1621;
var statearr_1676_1742 = state_1621__$1;
(statearr_1676_1742[(2)] = inst_1546);

(statearr_1676_1742[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1622 === (19))){
var inst_1520 = (state_1621[(24)]);
var inst_1524 = cljs.core.chunk_first.call(null,inst_1520);
var inst_1525 = cljs.core.chunk_rest.call(null,inst_1520);
var inst_1526 = cljs.core.count.call(null,inst_1524);
var inst_1498 = inst_1525;
var inst_1499 = inst_1524;
var inst_1500 = inst_1526;
var inst_1501 = (0);
var state_1621__$1 = (function (){var statearr_1677 = state_1621;
(statearr_1677[(14)] = inst_1498);

(statearr_1677[(17)] = inst_1499);

(statearr_1677[(18)] = inst_1500);

(statearr_1677[(19)] = inst_1501);

return statearr_1677;
})();
var statearr_1678_1743 = state_1621__$1;
(statearr_1678_1743[(2)] = null);

(statearr_1678_1743[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1622 === (20))){
var inst_1520 = (state_1621[(24)]);
var inst_1532 = cljs.core.first.call(null,inst_1520);
var inst_1533 = cljs.core.nth.call(null,inst_1532,(0),null);
var inst_1534 = cljs.core.nth.call(null,inst_1532,(1),null);
var state_1621__$1 = (function (){var statearr_1679 = state_1621;
(statearr_1679[(27)] = inst_1533);

return statearr_1679;
})();
if(cljs.core.truth_(inst_1534)){
var statearr_1680_1744 = state_1621__$1;
(statearr_1680_1744[(1)] = (22));

} else {
var statearr_1681_1745 = state_1621__$1;
(statearr_1681_1745[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1622 === (21))){
var inst_1543 = (state_1621[(2)]);
var state_1621__$1 = state_1621;
var statearr_1682_1746 = state_1621__$1;
(statearr_1682_1746[(2)] = inst_1543);

(statearr_1682_1746[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1622 === (22))){
var inst_1533 = (state_1621[(27)]);
var inst_1536 = cljs.core.async.close_BANG_.call(null,inst_1533);
var state_1621__$1 = state_1621;
var statearr_1683_1747 = state_1621__$1;
(statearr_1683_1747[(2)] = inst_1536);

(statearr_1683_1747[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1622 === (23))){
var state_1621__$1 = state_1621;
var statearr_1684_1748 = state_1621__$1;
(statearr_1684_1748[(2)] = null);

(statearr_1684_1748[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1622 === (24))){
var inst_1520 = (state_1621[(24)]);
var inst_1539 = (state_1621[(2)]);
var inst_1540 = cljs.core.next.call(null,inst_1520);
var inst_1498 = inst_1540;
var inst_1499 = null;
var inst_1500 = (0);
var inst_1501 = (0);
var state_1621__$1 = (function (){var statearr_1685 = state_1621;
(statearr_1685[(28)] = inst_1539);

(statearr_1685[(14)] = inst_1498);

(statearr_1685[(17)] = inst_1499);

(statearr_1685[(18)] = inst_1500);

(statearr_1685[(19)] = inst_1501);

return statearr_1685;
})();
var statearr_1686_1749 = state_1621__$1;
(statearr_1686_1749[(2)] = null);

(statearr_1686_1749[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1622 === (25))){
var inst_1564 = (state_1621[(7)]);
var inst_1563 = (state_1621[(10)]);
var inst_1566 = (inst_1564 < inst_1563);
var inst_1567 = inst_1566;
var state_1621__$1 = state_1621;
if(cljs.core.truth_(inst_1567)){
var statearr_1687_1750 = state_1621__$1;
(statearr_1687_1750[(1)] = (27));

} else {
var statearr_1688_1751 = state_1621__$1;
(statearr_1688_1751[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1622 === (26))){
var inst_1553 = (state_1621[(16)]);
var inst_1607 = (state_1621[(2)]);
var inst_1608 = cljs.core.seq.call(null,inst_1553);
var state_1621__$1 = (function (){var statearr_1689 = state_1621;
(statearr_1689[(29)] = inst_1607);

return statearr_1689;
})();
if(inst_1608){
var statearr_1690_1752 = state_1621__$1;
(statearr_1690_1752[(1)] = (42));

} else {
var statearr_1691_1753 = state_1621__$1;
(statearr_1691_1753[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1622 === (27))){
var inst_1562 = (state_1621[(9)]);
var inst_1564 = (state_1621[(7)]);
var inst_1569 = (state_1621[(30)]);
var inst_1489 = (state_1621[(13)]);
var inst_1569__$1 = cljs.core._nth.call(null,inst_1562,inst_1564);
var inst_1570 = cljs.core.async.put_BANG_.call(null,inst_1569__$1,inst_1489,done);
var state_1621__$1 = (function (){var statearr_1692 = state_1621;
(statearr_1692[(30)] = inst_1569__$1);

return statearr_1692;
})();
if(cljs.core.truth_(inst_1570)){
var statearr_1693_1754 = state_1621__$1;
(statearr_1693_1754[(1)] = (30));

} else {
var statearr_1694_1755 = state_1621__$1;
(statearr_1694_1755[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1622 === (28))){
var inst_1561 = (state_1621[(8)]);
var inst_1580 = (state_1621[(12)]);
var inst_1580__$1 = cljs.core.seq.call(null,inst_1561);
var state_1621__$1 = (function (){var statearr_1695 = state_1621;
(statearr_1695[(12)] = inst_1580__$1);

return statearr_1695;
})();
if(inst_1580__$1){
var statearr_1696_1756 = state_1621__$1;
(statearr_1696_1756[(1)] = (33));

} else {
var statearr_1697_1757 = state_1621__$1;
(statearr_1697_1757[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1622 === (29))){
var inst_1605 = (state_1621[(2)]);
var state_1621__$1 = state_1621;
var statearr_1698_1758 = state_1621__$1;
(statearr_1698_1758[(2)] = inst_1605);

(statearr_1698_1758[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1622 === (30))){
var state_1621__$1 = state_1621;
var statearr_1699_1759 = state_1621__$1;
(statearr_1699_1759[(2)] = null);

(statearr_1699_1759[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1622 === (31))){
var inst_1569 = (state_1621[(30)]);
var inst_1573 = done.call(null,null);
var inst_1574 = cljs.core.async.untap_STAR_.call(null,m,inst_1569);
var state_1621__$1 = (function (){var statearr_1700 = state_1621;
(statearr_1700[(31)] = inst_1573);

return statearr_1700;
})();
var statearr_1701_1760 = state_1621__$1;
(statearr_1701_1760[(2)] = inst_1574);

(statearr_1701_1760[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
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
});})(c__8__auto___1706,cs,m,dchan,dctr,done))
;
return ((function (switch__3__auto__,c__8__auto___1706,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__4__auto__ = null;
var cljs$core$async$mult_$_state_machine__4__auto____0 = (function (){
var statearr_1702 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_1702[(0)] = cljs$core$async$mult_$_state_machine__4__auto__);

(statearr_1702[(1)] = (1));

return statearr_1702;
});
var cljs$core$async$mult_$_state_machine__4__auto____1 = (function (state_1621){
while(true){
var ret_value__5__auto__ = (function (){try{while(true){
var result__6__auto__ = switch__3__auto__.call(null,state_1621);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
continue;
} else {
return result__6__auto__;
}
break;
}
}catch (e1703){if((e1703 instanceof Object)){
var ex__7__auto__ = e1703;
var statearr_1704_1761 = state_1621;
(statearr_1704_1761[(5)] = ex__7__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_1621);

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
throw e1703;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
var G__1762 = state_1621;
state_1621 = G__1762;
continue;
} else {
return ret_value__5__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__4__auto__ = function(state_1621){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__4__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__4__auto____1.call(this,state_1621);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__4__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__4__auto____0;
cljs$core$async$mult_$_state_machine__4__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__4__auto____1;
return cljs$core$async$mult_$_state_machine__4__auto__;
})()
;})(switch__3__auto__,c__8__auto___1706,cs,m,dchan,dctr,done))
})();
var state__10__auto__ = (function (){var statearr_1705 = f__9__auto__.call(null);
(statearr_1705[(6)] = c__8__auto___1706);

return statearr_1705;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10__auto__);
});})(c__8__auto___1706,cs,m,dchan,dctr,done))
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
var G__1764 = arguments.length;
switch (G__1764) {
case (2):
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case (3):
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = (3);

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
var x__22676__auto__ = (((m == null))?null:m);
var m__22677__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__22676__auto__)]);
if(!((m__22677__auto__ == null))){
return m__22677__auto__.call(null,m,ch);
} else {
var m__22677__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__22677__auto____$1 == null))){
return m__22677__auto____$1.call(null,m,ch);
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
var x__22676__auto__ = (((m == null))?null:m);
var m__22677__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__22676__auto__)]);
if(!((m__22677__auto__ == null))){
return m__22677__auto__.call(null,m,ch);
} else {
var m__22677__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__22677__auto____$1 == null))){
return m__22677__auto____$1.call(null,m,ch);
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
var x__22676__auto__ = (((m == null))?null:m);
var m__22677__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__22676__auto__)]);
if(!((m__22677__auto__ == null))){
return m__22677__auto__.call(null,m);
} else {
var m__22677__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__22677__auto____$1 == null))){
return m__22677__auto____$1.call(null,m);
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
var x__22676__auto__ = (((m == null))?null:m);
var m__22677__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__22676__auto__)]);
if(!((m__22677__auto__ == null))){
return m__22677__auto__.call(null,m,state_map);
} else {
var m__22677__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__22677__auto____$1 == null))){
return m__22677__auto____$1.call(null,m,state_map);
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
var x__22676__auto__ = (((m == null))?null:m);
var m__22677__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__22676__auto__)]);
if(!((m__22677__auto__ == null))){
return m__22677__auto__.call(null,m,mode);
} else {
var m__22677__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__22677__auto____$1 == null))){
return m__22677__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__23177__auto__ = [];
var len__23174__auto___1776 = arguments.length;
var i__23175__auto___1777 = (0);
while(true){
if((i__23175__auto___1777 < len__23174__auto___1776)){
args__23177__auto__.push((arguments[i__23175__auto___1777]));

var G__1778 = (i__23175__auto___1777 + (1));
i__23175__auto___1777 = G__1778;
continue;
} else {
}
break;
}

var argseq__23178__auto__ = ((((3) < args__23177__auto__.length))?(new cljs.core.IndexedSeq(args__23177__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__23178__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__1770){
var map__1771 = p__1770;
var map__1771__$1 = ((((!((map__1771 == null)))?((((map__1771.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1771.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1771):map__1771);
var opts = map__1771__$1;
var statearr_1773_1779 = state;
(statearr_1773_1779[(1)] = cont_block);


var temp__20428__auto__ = cljs.core.async.do_alts.call(null,((function (map__1771,map__1771__$1,opts){
return (function (val){
var statearr_1774_1780 = state;
(statearr_1774_1780[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__1771,map__1771__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__20428__auto__)){
var cb = temp__20428__auto__;
var statearr_1775_1781 = state;
(statearr_1775_1781[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq1766){
var G__1767 = cljs.core.first.call(null,seq1766);
var seq1766__$1 = cljs.core.next.call(null,seq1766);
var G__1768 = cljs.core.first.call(null,seq1766__$1);
var seq1766__$2 = cljs.core.next.call(null,seq1766__$1);
var G__1769 = cljs.core.first.call(null,seq1766__$2);
var seq1766__$3 = cljs.core.next.call(null,seq1766__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__1767,G__1768,G__1769,seq1766__$3);
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
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mute","mute",(1151223646)),null,new cljs.core.Keyword(null,"pause","pause",(-2095325672)),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",(-316350075)));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",(1151223646)));
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
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",(-316350075)),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",(-2095325672)),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",(1441458643)),solos,new cljs.core.Keyword(null,"mutes","mutes",(1068806309)),pick.call(null,new cljs.core.Keyword(null,"mute","mute",(1151223646)),chs),new cljs.core.Keyword(null,"reads","reads",(-1215067361)),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",(-2095325672)))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async1782 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.async.Mix}
*/
cljs.core.async.t_cljs$core$async1782 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta1783){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta1783 = meta1783;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async1782.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_1784,meta1783__$1){
var self__ = this;
var _1784__$1 = this;
return (new cljs.core.async.t_cljs$core$async1782(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta1783__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async1782.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_1784){
var self__ = this;
var _1784__$1 = this;
return self__.meta1783;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async1782.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async1782.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async1782.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async1782.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async1782.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async1782.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async1782.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async1782.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async1782.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",(477485025),null),new cljs.core.Symbol(null,"solo-mode","solo-mode",(2031788074),null),new cljs.core.Symbol(null,"pick","pick",(1300068175),null),new cljs.core.Symbol(null,"cs","cs",(-117024463),null),new cljs.core.Symbol(null,"calc-state","calc-state",(-349968968),null),new cljs.core.Symbol(null,"out","out",(729986010),null),new cljs.core.Symbol(null,"changed","changed",(-2083710852),null),new cljs.core.Symbol(null,"solo-modes","solo-modes",(882180540),null),new cljs.core.Symbol(null,"attrs","attrs",(-450137186),null),new cljs.core.Symbol(null,"meta1783","meta1783",(-1291964847),null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async1782.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async1782.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async1782";

cljs.core.async.t_cljs$core$async1782.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__22617__auto__,writer__22618__auto__,opt__22619__auto__){
return cljs.core._write.call(null,writer__22618__auto__,"cljs.core.async/t_cljs$core$async1782");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async1782 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async1782(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta1783){
return (new cljs.core.async.t_cljs$core$async1782(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta1783));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async1782(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__8__auto___1946 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8__auto___1946,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__9__auto__ = (function (){var switch__3__auto__ = ((function (c__8__auto___1946,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_1886){
var state_val_1887 = (state_1886[(1)]);
if((state_val_1887 === (32))){
var inst_1845 = (state_1886[(7)]);
var state_1886__$1 = state_1886;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_1886__$1,(35),out,inst_1845);
} else {
if((state_val_1887 === (1))){
var inst_1788 = (state_1886[(8)]);
var inst_1788__$1 = calc_state.call(null);
var inst_1790 = (inst_1788__$1 == null);
var inst_1791 = cljs.core.not.call(null,inst_1790);
var state_1886__$1 = (function (){var statearr_1888 = state_1886;
(statearr_1888[(8)] = inst_1788__$1);

return statearr_1888;
})();
if(inst_1791){
var statearr_1889_1947 = state_1886__$1;
(statearr_1889_1947[(1)] = (2));

} else {
var statearr_1890_1948 = state_1886__$1;
(statearr_1890_1948[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1887 === (33))){
var inst_1836 = (state_1886[(9)]);
var inst_1813 = inst_1836;
var state_1886__$1 = (function (){var statearr_1891 = state_1886;
(statearr_1891[(10)] = inst_1813);

return statearr_1891;
})();
var statearr_1892_1949 = state_1886__$1;
(statearr_1892_1949[(2)] = null);

(statearr_1892_1949[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1887 === (2))){
var inst_1788 = (state_1886[(8)]);
var inst_1793 = inst_1788.cljs$lang$protocol_mask$partition0$;
var inst_1794 = (inst_1793 & (64));
var inst_1795 = inst_1788.cljs$core$ISeq$;
var inst_1796 = (cljs.core.PROTOCOL_SENTINEL === inst_1795);
var inst_1797 = (inst_1794) || (inst_1796);
var state_1886__$1 = state_1886;
if(cljs.core.truth_(inst_1797)){
var statearr_1893_1950 = state_1886__$1;
(statearr_1893_1950[(1)] = (5));

} else {
var statearr_1894_1951 = state_1886__$1;
(statearr_1894_1951[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1887 === (34))){
var inst_1880 = (state_1886[(2)]);
var state_1886__$1 = state_1886;
var statearr_1895_1952 = state_1886__$1;
(statearr_1895_1952[(2)] = inst_1880);

(statearr_1895_1952[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1887 === (3))){
var state_1886__$1 = state_1886;
var statearr_1896_1953 = state_1886__$1;
(statearr_1896_1953[(2)] = false);

(statearr_1896_1953[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1887 === (35))){
var inst_1871 = (state_1886[(2)]);
var state_1886__$1 = state_1886;
if(cljs.core.truth_(inst_1871)){
var statearr_1897_1954 = state_1886__$1;
(statearr_1897_1954[(1)] = (36));

} else {
var statearr_1898_1955 = state_1886__$1;
(statearr_1898_1955[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1887 === (4))){
var inst_1804 = (state_1886[(2)]);
var state_1886__$1 = state_1886;
if(cljs.core.truth_(inst_1804)){
var statearr_1899_1956 = state_1886__$1;
(statearr_1899_1956[(1)] = (8));

} else {
var statearr_1900_1957 = state_1886__$1;
(statearr_1900_1957[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1887 === (36))){
var inst_1836 = (state_1886[(9)]);
var inst_1813 = inst_1836;
var state_1886__$1 = (function (){var statearr_1901 = state_1886;
(statearr_1901[(10)] = inst_1813);

return statearr_1901;
})();
var statearr_1902_1958 = state_1886__$1;
(statearr_1902_1958[(2)] = null);

(statearr_1902_1958[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1887 === (5))){
var state_1886__$1 = state_1886;
var statearr_1903_1959 = state_1886__$1;
(statearr_1903_1959[(2)] = true);

(statearr_1903_1959[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1887 === (37))){
var state_1886__$1 = state_1886;
var statearr_1904_1960 = state_1886__$1;
(statearr_1904_1960[(2)] = null);

(statearr_1904_1960[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1887 === (6))){
var state_1886__$1 = state_1886;
var statearr_1905_1961 = state_1886__$1;
(statearr_1905_1961[(2)] = false);

(statearr_1905_1961[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1887 === (38))){
var inst_1876 = (state_1886[(2)]);
var state_1886__$1 = state_1886;
var statearr_1906_1962 = state_1886__$1;
(statearr_1906_1962[(2)] = inst_1876);

(statearr_1906_1962[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1887 === (7))){
var inst_1801 = (state_1886[(2)]);
var state_1886__$1 = state_1886;
var statearr_1907_1963 = state_1886__$1;
(statearr_1907_1963[(2)] = inst_1801);

(statearr_1907_1963[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1887 === (8))){
var inst_1788 = (state_1886[(8)]);
var inst_1806 = cljs.core.apply.call(null,cljs.core.hash_map,inst_1788);
var state_1886__$1 = state_1886;
var statearr_1908_1964 = state_1886__$1;
(statearr_1908_1964[(2)] = inst_1806);

(statearr_1908_1964[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1887 === (9))){
var inst_1788 = (state_1886[(8)]);
var state_1886__$1 = state_1886;
var statearr_1909_1965 = state_1886__$1;
(statearr_1909_1965[(2)] = inst_1788);

(statearr_1909_1965[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1887 === (10))){
var inst_1788 = (state_1886[(8)]);
var inst_1809 = (state_1886[(2)]);
var inst_1810 = cljs.core.get.call(null,inst_1809,new cljs.core.Keyword(null,"solos","solos",(1441458643)));
var inst_1811 = cljs.core.get.call(null,inst_1809,new cljs.core.Keyword(null,"mutes","mutes",(1068806309)));
var inst_1812 = cljs.core.get.call(null,inst_1809,new cljs.core.Keyword(null,"reads","reads",(-1215067361)));
var inst_1813 = inst_1788;
var state_1886__$1 = (function (){var statearr_1910 = state_1886;
(statearr_1910[(11)] = inst_1810);

(statearr_1910[(12)] = inst_1811);

(statearr_1910[(13)] = inst_1812);

(statearr_1910[(10)] = inst_1813);

return statearr_1910;
})();
var statearr_1911_1966 = state_1886__$1;
(statearr_1911_1966[(2)] = null);

(statearr_1911_1966[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1887 === (11))){
var inst_1813 = (state_1886[(10)]);
var inst_1817 = (inst_1813 == null);
var inst_1818 = cljs.core.not.call(null,inst_1817);
var state_1886__$1 = state_1886;
if(inst_1818){
var statearr_1912_1967 = state_1886__$1;
(statearr_1912_1967[(1)] = (13));

} else {
var statearr_1913_1968 = state_1886__$1;
(statearr_1913_1968[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1887 === (12))){
var inst_1884 = (state_1886[(2)]);
var state_1886__$1 = state_1886;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_1886__$1,inst_1884);
} else {
if((state_val_1887 === (13))){
var inst_1813 = (state_1886[(10)]);
var inst_1820 = inst_1813.cljs$lang$protocol_mask$partition0$;
var inst_1821 = (inst_1820 & (64));
var inst_1822 = inst_1813.cljs$core$ISeq$;
var inst_1823 = (cljs.core.PROTOCOL_SENTINEL === inst_1822);
var inst_1824 = (inst_1821) || (inst_1823);
var state_1886__$1 = state_1886;
if(cljs.core.truth_(inst_1824)){
var statearr_1914_1969 = state_1886__$1;
(statearr_1914_1969[(1)] = (16));

} else {
var statearr_1915_1970 = state_1886__$1;
(statearr_1915_1970[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1887 === (14))){
var state_1886__$1 = state_1886;
var statearr_1916_1971 = state_1886__$1;
(statearr_1916_1971[(2)] = false);

(statearr_1916_1971[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1887 === (15))){
var inst_1831 = (state_1886[(2)]);
var state_1886__$1 = state_1886;
if(cljs.core.truth_(inst_1831)){
var statearr_1917_1972 = state_1886__$1;
(statearr_1917_1972[(1)] = (19));

} else {
var statearr_1918_1973 = state_1886__$1;
(statearr_1918_1973[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1887 === (16))){
var state_1886__$1 = state_1886;
var statearr_1919_1974 = state_1886__$1;
(statearr_1919_1974[(2)] = true);

(statearr_1919_1974[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1887 === (17))){
var state_1886__$1 = state_1886;
var statearr_1920_1975 = state_1886__$1;
(statearr_1920_1975[(2)] = false);

(statearr_1920_1975[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1887 === (18))){
var inst_1828 = (state_1886[(2)]);
var state_1886__$1 = state_1886;
var statearr_1921_1976 = state_1886__$1;
(statearr_1921_1976[(2)] = inst_1828);

(statearr_1921_1976[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1887 === (19))){
var inst_1813 = (state_1886[(10)]);
var inst_1833 = cljs.core.apply.call(null,cljs.core.hash_map,inst_1813);
var state_1886__$1 = state_1886;
var statearr_1922_1977 = state_1886__$1;
(statearr_1922_1977[(2)] = inst_1833);

(statearr_1922_1977[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1887 === (20))){
var inst_1813 = (state_1886[(10)]);
var state_1886__$1 = state_1886;
var statearr_1923_1978 = state_1886__$1;
(statearr_1923_1978[(2)] = inst_1813);

(statearr_1923_1978[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1887 === (21))){
var inst_1836 = (state_1886[(9)]);
var inst_1836__$1 = (state_1886[(2)]);
var inst_1837 = cljs.core.get.call(null,inst_1836__$1,new cljs.core.Keyword(null,"solos","solos",(1441458643)));
var inst_1838 = cljs.core.get.call(null,inst_1836__$1,new cljs.core.Keyword(null,"mutes","mutes",(1068806309)));
var inst_1839 = cljs.core.get.call(null,inst_1836__$1,new cljs.core.Keyword(null,"reads","reads",(-1215067361)));
var state_1886__$1 = (function (){var statearr_1924 = state_1886;
(statearr_1924[(9)] = inst_1836__$1);

(statearr_1924[(15)] = inst_1837);

(statearr_1924[(16)] = inst_1838);

return statearr_1924;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_1886__$1,(22),inst_1839);
} else {
if((state_val_1887 === (22))){
var inst_1845 = (state_1886[(7)]);
var inst_1846 = (state_1886[(14)]);
var inst_1844 = (state_1886[(2)]);
var inst_1845__$1 = cljs.core.nth.call(null,inst_1844,(0),null);
var inst_1846__$1 = cljs.core.nth.call(null,inst_1844,(1),null);
var inst_1847 = (inst_1845__$1 == null);
var inst_1848 = cljs.core._EQ_.call(null,inst_1846__$1,change);
var inst_1849 = (inst_1847) || (inst_1848);
var state_1886__$1 = (function (){var statearr_1925 = state_1886;
(statearr_1925[(7)] = inst_1845__$1);

(statearr_1925[(14)] = inst_1846__$1);

return statearr_1925;
})();
if(cljs.core.truth_(inst_1849)){
var statearr_1926_1979 = state_1886__$1;
(statearr_1926_1979[(1)] = (23));

} else {
var statearr_1927_1980 = state_1886__$1;
(statearr_1927_1980[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1887 === (23))){
var inst_1845 = (state_1886[(7)]);
var inst_1851 = (inst_1845 == null);
var state_1886__$1 = state_1886;
if(cljs.core.truth_(inst_1851)){
var statearr_1928_1981 = state_1886__$1;
(statearr_1928_1981[(1)] = (26));

} else {
var statearr_1929_1982 = state_1886__$1;
(statearr_1929_1982[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1887 === (24))){
var inst_1837 = (state_1886[(15)]);
var inst_1846 = (state_1886[(14)]);
var inst_1860 = (state_1886[(17)]);
var inst_1860__$1 = inst_1837.call(null,inst_1846);
var state_1886__$1 = (function (){var statearr_1930 = state_1886;
(statearr_1930[(17)] = inst_1860__$1);

return statearr_1930;
})();
if(cljs.core.truth_(inst_1860__$1)){
var statearr_1931_1983 = state_1886__$1;
(statearr_1931_1983[(1)] = (29));

} else {
var statearr_1932_1984 = state_1886__$1;
(statearr_1932_1984[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1887 === (25))){
var inst_1882 = (state_1886[(2)]);
var state_1886__$1 = state_1886;
var statearr_1933_1985 = state_1886__$1;
(statearr_1933_1985[(2)] = inst_1882);

(statearr_1933_1985[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1887 === (26))){
var inst_1846 = (state_1886[(14)]);
var inst_1853 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_1846);
var state_1886__$1 = state_1886;
var statearr_1934_1986 = state_1886__$1;
(statearr_1934_1986[(2)] = inst_1853);

(statearr_1934_1986[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1887 === (27))){
var state_1886__$1 = state_1886;
var statearr_1935_1987 = state_1886__$1;
(statearr_1935_1987[(2)] = null);

(statearr_1935_1987[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1887 === (28))){
var inst_1856 = (state_1886[(2)]);
var inst_1857 = calc_state.call(null);
var inst_1813 = inst_1857;
var state_1886__$1 = (function (){var statearr_1936 = state_1886;
(statearr_1936[(18)] = inst_1856);

(statearr_1936[(10)] = inst_1813);

return statearr_1936;
})();
var statearr_1937_1988 = state_1886__$1;
(statearr_1937_1988[(2)] = null);

(statearr_1937_1988[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1887 === (29))){
var inst_1860 = (state_1886[(17)]);
var state_1886__$1 = state_1886;
var statearr_1938_1989 = state_1886__$1;
(statearr_1938_1989[(2)] = inst_1860);

(statearr_1938_1989[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1887 === (30))){
var inst_1837 = (state_1886[(15)]);
var inst_1838 = (state_1886[(16)]);
var inst_1846 = (state_1886[(14)]);
var inst_1863 = cljs.core.empty_QMARK_.call(null,inst_1837);
var inst_1864 = inst_1838.call(null,inst_1846);
var inst_1865 = cljs.core.not.call(null,inst_1864);
var inst_1866 = (inst_1863) && (inst_1865);
var state_1886__$1 = state_1886;
var statearr_1939_1990 = state_1886__$1;
(statearr_1939_1990[(2)] = inst_1866);

(statearr_1939_1990[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1887 === (31))){
var inst_1868 = (state_1886[(2)]);
var state_1886__$1 = state_1886;
if(cljs.core.truth_(inst_1868)){
var statearr_1940_1991 = state_1886__$1;
(statearr_1940_1991[(1)] = (32));

} else {
var statearr_1941_1992 = state_1886__$1;
(statearr_1941_1992[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
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
});})(c__8__auto___1946,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__3__auto__,c__8__auto___1946,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__4__auto__ = null;
var cljs$core$async$mix_$_state_machine__4__auto____0 = (function (){
var statearr_1942 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_1942[(0)] = cljs$core$async$mix_$_state_machine__4__auto__);

(statearr_1942[(1)] = (1));

return statearr_1942;
});
var cljs$core$async$mix_$_state_machine__4__auto____1 = (function (state_1886){
while(true){
var ret_value__5__auto__ = (function (){try{while(true){
var result__6__auto__ = switch__3__auto__.call(null,state_1886);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
continue;
} else {
return result__6__auto__;
}
break;
}
}catch (e1943){if((e1943 instanceof Object)){
var ex__7__auto__ = e1943;
var statearr_1944_1993 = state_1886;
(statearr_1944_1993[(5)] = ex__7__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_1886);

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
throw e1943;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
var G__1994 = state_1886;
state_1886 = G__1994;
continue;
} else {
return ret_value__5__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__4__auto__ = function(state_1886){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__4__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__4__auto____1.call(this,state_1886);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__4__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__4__auto____0;
cljs$core$async$mix_$_state_machine__4__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__4__auto____1;
return cljs$core$async$mix_$_state_machine__4__auto__;
})()
;})(switch__3__auto__,c__8__auto___1946,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__10__auto__ = (function (){var statearr_1945 = f__9__auto__.call(null);
(statearr_1945[(6)] = c__8__auto___1946);

return statearr_1945;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10__auto__);
});})(c__8__auto___1946,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__22676__auto__ = (((p == null))?null:p);
var m__22677__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__22676__auto__)]);
if(!((m__22677__auto__ == null))){
return m__22677__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__22677__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__22677__auto____$1 == null))){
return m__22677__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__22676__auto__ = (((p == null))?null:p);
var m__22677__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__22676__auto__)]);
if(!((m__22677__auto__ == null))){
return m__22677__auto__.call(null,p,v,ch);
} else {
var m__22677__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__22677__auto____$1 == null))){
return m__22677__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__1996 = arguments.length;
switch (G__1996) {
case (1):
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case (2):
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__22676__auto__ = (((p == null))?null:p);
var m__22677__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__22676__auto__)]);
if(!((m__22677__auto__ == null))){
return m__22677__auto__.call(null,p);
} else {
var m__22677__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__22677__auto____$1 == null))){
return m__22677__auto____$1.call(null,p);
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
var x__22676__auto__ = (((p == null))?null:p);
var m__22677__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__22676__auto__)]);
if(!((m__22677__auto__ == null))){
return m__22677__auto__.call(null,p,v);
} else {
var m__22677__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__22677__auto____$1 == null))){
return m__22677__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = (2);


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
var G__1999 = arguments.length;
switch (G__1999) {
case (2):
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case (3):
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__20917__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__20917__auto__)){
return or__20917__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__20917__auto__,mults){
return (function (p1__15_SHARP_){
if(cljs.core.truth_(p1__15_SHARP_.call(null,topic))){
return p1__15_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__15_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__20917__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async2000 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.async.Pub}
*/
cljs.core.async.t_cljs$core$async2000 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta2001){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta2001 = meta2001;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async2000.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_2002,meta2001__$1){
var self__ = this;
var _2002__$1 = this;
return (new cljs.core.async.t_cljs$core$async2000(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta2001__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async2000.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_2002){
var self__ = this;
var _2002__$1 = this;
return self__.meta2001;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async2000.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async2000.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async2000.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async2000.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async2000.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__20428__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__20428__auto__)){
var m = temp__20428__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async2000.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async2000.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async2000.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",(1085813622),null),new cljs.core.Symbol(null,"topic-fn","topic-fn",(-862449736),null),new cljs.core.Symbol(null,"buf-fn","buf-fn",(-1200281591),null),new cljs.core.Symbol(null,"mults","mults",(-461114485),null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",(1796584816),null),new cljs.core.Symbol(null,"meta2001","meta2001",(342890519),null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async2000.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async2000.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async2000";

cljs.core.async.t_cljs$core$async2000.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__22617__auto__,writer__22618__auto__,opt__22619__auto__){
return cljs.core._write.call(null,writer__22618__auto__,"cljs.core.async/t_cljs$core$async2000");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async2000 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async2000(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta2001){
return (new cljs.core.async.t_cljs$core$async2000(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta2001));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async2000(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__8__auto___2120 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8__auto___2120,mults,ensure_mult,p){
return (function (){
var f__9__auto__ = (function (){var switch__3__auto__ = ((function (c__8__auto___2120,mults,ensure_mult,p){
return (function (state_2074){
var state_val_2075 = (state_2074[(1)]);
if((state_val_2075 === (1))){
var state_2074__$1 = state_2074;
var statearr_2076_2121 = state_2074__$1;
(statearr_2076_2121[(2)] = null);

(statearr_2076_2121[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2075 === (2))){
var state_2074__$1 = state_2074;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_2074__$1,(4),ch);
} else {
if((state_val_2075 === (3))){
var inst_2072 = (state_2074[(2)]);
var state_2074__$1 = state_2074;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_2074__$1,inst_2072);
} else {
if((state_val_2075 === (4))){
var inst_2005 = (state_2074[(7)]);
var inst_2005__$1 = (state_2074[(2)]);
var inst_2006 = (inst_2005__$1 == null);
var state_2074__$1 = (function (){var statearr_2077 = state_2074;
(statearr_2077[(7)] = inst_2005__$1);

return statearr_2077;
})();
if(cljs.core.truth_(inst_2006)){
var statearr_2078_2122 = state_2074__$1;
(statearr_2078_2122[(1)] = (5));

} else {
var statearr_2079_2123 = state_2074__$1;
(statearr_2079_2123[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2075 === (5))){
var inst_2012 = cljs.core.deref.call(null,mults);
var inst_2013 = cljs.core.vals.call(null,inst_2012);
var inst_2014 = cljs.core.seq.call(null,inst_2013);
var inst_2015 = inst_2014;
var inst_2016 = null;
var inst_2017 = (0);
var inst_2018 = (0);
var state_2074__$1 = (function (){var statearr_2080 = state_2074;
(statearr_2080[(8)] = inst_2015);

(statearr_2080[(11)] = inst_2016);

(statearr_2080[(12)] = inst_2017);

(statearr_2080[(13)] = inst_2018);

return statearr_2080;
})();
var statearr_2081_2124 = state_2074__$1;
(statearr_2081_2124[(2)] = null);

(statearr_2081_2124[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2075 === (6))){
var inst_2005 = (state_2074[(7)]);
var inst_2053 = (state_2074[(9)]);
var inst_2055 = (state_2074[(10)]);
var inst_2053__$1 = topic_fn.call(null,inst_2005);
var inst_2054 = cljs.core.deref.call(null,mults);
var inst_2055__$1 = cljs.core.get.call(null,inst_2054,inst_2053__$1);
var state_2074__$1 = (function (){var statearr_2082 = state_2074;
(statearr_2082[(9)] = inst_2053__$1);

(statearr_2082[(10)] = inst_2055__$1);

return statearr_2082;
})();
if(cljs.core.truth_(inst_2055__$1)){
var statearr_2083_2125 = state_2074__$1;
(statearr_2083_2125[(1)] = (19));

} else {
var statearr_2084_2126 = state_2074__$1;
(statearr_2084_2126[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2075 === (7))){
var inst_2070 = (state_2074[(2)]);
var state_2074__$1 = state_2074;
var statearr_2085_2127 = state_2074__$1;
(statearr_2085_2127[(2)] = inst_2070);

(statearr_2085_2127[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2075 === (8))){
var inst_2018 = (state_2074[(13)]);
var inst_2017 = (state_2074[(12)]);
var inst_2020 = (inst_2018 < inst_2017);
var inst_2021 = inst_2020;
var state_2074__$1 = state_2074;
if(cljs.core.truth_(inst_2021)){
var statearr_2089_2128 = state_2074__$1;
(statearr_2089_2128[(1)] = (10));

} else {
var statearr_2090_2129 = state_2074__$1;
(statearr_2090_2129[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2075 === (9))){
var inst_2051 = (state_2074[(2)]);
var state_2074__$1 = state_2074;
var statearr_2091_2130 = state_2074__$1;
(statearr_2091_2130[(2)] = inst_2051);

(statearr_2091_2130[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2075 === (10))){
var inst_2016 = (state_2074[(11)]);
var inst_2018 = (state_2074[(13)]);
var inst_2015 = (state_2074[(8)]);
var inst_2017 = (state_2074[(12)]);
var inst_2023 = cljs.core._nth.call(null,inst_2016,inst_2018);
var inst_2024 = cljs.core.async.muxch_STAR_.call(null,inst_2023);
var inst_2025 = cljs.core.async.close_BANG_.call(null,inst_2024);
var inst_2026 = (inst_2018 + (1));
var tmp2086 = inst_2015;
var tmp2087 = inst_2016;
var tmp2088 = inst_2017;
var inst_2015__$1 = tmp2086;
var inst_2016__$1 = tmp2087;
var inst_2017__$1 = tmp2088;
var inst_2018__$1 = inst_2026;
var state_2074__$1 = (function (){var statearr_2092 = state_2074;
(statearr_2092[(14)] = inst_2025);

(statearr_2092[(8)] = inst_2015__$1);

(statearr_2092[(11)] = inst_2016__$1);

(statearr_2092[(12)] = inst_2017__$1);

(statearr_2092[(13)] = inst_2018__$1);

return statearr_2092;
})();
var statearr_2093_2131 = state_2074__$1;
(statearr_2093_2131[(2)] = null);

(statearr_2093_2131[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2075 === (11))){
var inst_2015 = (state_2074[(8)]);
var inst_2029 = (state_2074[(15)]);
var inst_2029__$1 = cljs.core.seq.call(null,inst_2015);
var state_2074__$1 = (function (){var statearr_2094 = state_2074;
(statearr_2094[(15)] = inst_2029__$1);

return statearr_2094;
})();
if(inst_2029__$1){
var statearr_2095_2132 = state_2074__$1;
(statearr_2095_2132[(1)] = (13));

} else {
var statearr_2096_2133 = state_2074__$1;
(statearr_2096_2133[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2075 === (12))){
var inst_2049 = (state_2074[(2)]);
var state_2074__$1 = state_2074;
var statearr_2097_2134 = state_2074__$1;
(statearr_2097_2134[(2)] = inst_2049);

(statearr_2097_2134[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2075 === (13))){
var inst_2029 = (state_2074[(15)]);
var inst_2031 = cljs.core.chunked_seq_QMARK_.call(null,inst_2029);
var state_2074__$1 = state_2074;
if(inst_2031){
var statearr_2098_2135 = state_2074__$1;
(statearr_2098_2135[(1)] = (16));

} else {
var statearr_2099_2136 = state_2074__$1;
(statearr_2099_2136[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2075 === (14))){
var state_2074__$1 = state_2074;
var statearr_2100_2137 = state_2074__$1;
(statearr_2100_2137[(2)] = null);

(statearr_2100_2137[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2075 === (15))){
var inst_2047 = (state_2074[(2)]);
var state_2074__$1 = state_2074;
var statearr_2101_2138 = state_2074__$1;
(statearr_2101_2138[(2)] = inst_2047);

(statearr_2101_2138[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2075 === (16))){
var inst_2029 = (state_2074[(15)]);
var inst_2033 = cljs.core.chunk_first.call(null,inst_2029);
var inst_2034 = cljs.core.chunk_rest.call(null,inst_2029);
var inst_2035 = cljs.core.count.call(null,inst_2033);
var inst_2015 = inst_2034;
var inst_2016 = inst_2033;
var inst_2017 = inst_2035;
var inst_2018 = (0);
var state_2074__$1 = (function (){var statearr_2102 = state_2074;
(statearr_2102[(8)] = inst_2015);

(statearr_2102[(11)] = inst_2016);

(statearr_2102[(12)] = inst_2017);

(statearr_2102[(13)] = inst_2018);

return statearr_2102;
})();
var statearr_2103_2139 = state_2074__$1;
(statearr_2103_2139[(2)] = null);

(statearr_2103_2139[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2075 === (17))){
var inst_2029 = (state_2074[(15)]);
var inst_2038 = cljs.core.first.call(null,inst_2029);
var inst_2039 = cljs.core.async.muxch_STAR_.call(null,inst_2038);
var inst_2040 = cljs.core.async.close_BANG_.call(null,inst_2039);
var inst_2041 = cljs.core.next.call(null,inst_2029);
var inst_2015 = inst_2041;
var inst_2016 = null;
var inst_2017 = (0);
var inst_2018 = (0);
var state_2074__$1 = (function (){var statearr_2104 = state_2074;
(statearr_2104[(16)] = inst_2040);

(statearr_2104[(8)] = inst_2015);

(statearr_2104[(11)] = inst_2016);

(statearr_2104[(12)] = inst_2017);

(statearr_2104[(13)] = inst_2018);

return statearr_2104;
})();
var statearr_2105_2140 = state_2074__$1;
(statearr_2105_2140[(2)] = null);

(statearr_2105_2140[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2075 === (18))){
var inst_2044 = (state_2074[(2)]);
var state_2074__$1 = state_2074;
var statearr_2106_2141 = state_2074__$1;
(statearr_2106_2141[(2)] = inst_2044);

(statearr_2106_2141[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2075 === (19))){
var inst_2055 = (state_2074[(10)]);
var inst_2005 = (state_2074[(7)]);
var inst_2057 = cljs.core.async.muxch_STAR_.call(null,inst_2055);
var state_2074__$1 = state_2074;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_2074__$1,(22),inst_2057,inst_2005);
} else {
if((state_val_2075 === (20))){
var state_2074__$1 = state_2074;
var statearr_2107_2142 = state_2074__$1;
(statearr_2107_2142[(2)] = null);

(statearr_2107_2142[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2075 === (21))){
var inst_2067 = (state_2074[(2)]);
var state_2074__$1 = (function (){var statearr_2108 = state_2074;
(statearr_2108[(17)] = inst_2067);

return statearr_2108;
})();
var statearr_2109_2143 = state_2074__$1;
(statearr_2109_2143[(2)] = null);

(statearr_2109_2143[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2075 === (22))){
var inst_2059 = (state_2074[(2)]);
var state_2074__$1 = state_2074;
if(cljs.core.truth_(inst_2059)){
var statearr_2110_2144 = state_2074__$1;
(statearr_2110_2144[(1)] = (23));

} else {
var statearr_2111_2145 = state_2074__$1;
(statearr_2111_2145[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2075 === (23))){
var state_2074__$1 = state_2074;
var statearr_2112_2146 = state_2074__$1;
(statearr_2112_2146[(2)] = null);

(statearr_2112_2146[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2075 === (24))){
var inst_2053 = (state_2074[(9)]);
var inst_2062 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_2053);
var state_2074__$1 = state_2074;
var statearr_2113_2147 = state_2074__$1;
(statearr_2113_2147[(2)] = inst_2062);

(statearr_2113_2147[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2075 === (25))){
var inst_2064 = (state_2074[(2)]);
var state_2074__$1 = state_2074;
var statearr_2114_2148 = state_2074__$1;
(statearr_2114_2148[(2)] = inst_2064);

(statearr_2114_2148[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
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
});})(c__8__auto___2120,mults,ensure_mult,p))
;
return ((function (switch__3__auto__,c__8__auto___2120,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__4__auto__ = null;
var cljs$core$async$state_machine__4__auto____0 = (function (){
var statearr_2115 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_2115[(0)] = cljs$core$async$state_machine__4__auto__);

(statearr_2115[(1)] = (1));

return statearr_2115;
});
var cljs$core$async$state_machine__4__auto____1 = (function (state_2074){
while(true){
var ret_value__5__auto__ = (function (){try{while(true){
var result__6__auto__ = switch__3__auto__.call(null,state_2074);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
continue;
} else {
return result__6__auto__;
}
break;
}
}catch (e2116){if((e2116 instanceof Object)){
var ex__7__auto__ = e2116;
var statearr_2117_2149 = state_2074;
(statearr_2117_2149[(5)] = ex__7__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_2074);

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
throw e2116;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
var G__2150 = state_2074;
state_2074 = G__2150;
continue;
} else {
return ret_value__5__auto__;
}
break;
}
});
cljs$core$async$state_machine__4__auto__ = function(state_2074){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__4__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__4__auto____1.call(this,state_2074);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__4__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__4__auto____0;
cljs$core$async$state_machine__4__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__4__auto____1;
return cljs$core$async$state_machine__4__auto__;
})()
;})(switch__3__auto__,c__8__auto___2120,mults,ensure_mult,p))
})();
var state__10__auto__ = (function (){var statearr_2118 = f__9__auto__.call(null);
(statearr_2118[(6)] = c__8__auto___2120);

return statearr_2118;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10__auto__);
});})(c__8__auto___2120,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = (3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__2152 = arguments.length;
switch (G__2152) {
case (3):
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case (4):
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = (4);

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
var G__2155 = arguments.length;
switch (G__2155) {
case (1):
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case (2):
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = (2);

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
var G__2158 = arguments.length;
switch (G__2158) {
case (2):
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case (3):
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var c__8__auto___2225 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8__auto___2225,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__9__auto__ = (function (){var switch__3__auto__ = ((function (c__8__auto___2225,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_2197){
var state_val_2198 = (state_2197[(1)]);
if((state_val_2198 === (1))){
var state_2197__$1 = state_2197;
var statearr_2199_2226 = state_2197__$1;
(statearr_2199_2226[(2)] = null);

(statearr_2199_2226[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2198 === (2))){
var inst_2160 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_2161 = (0);
var state_2197__$1 = (function (){var statearr_2200 = state_2197;
(statearr_2200[(7)] = inst_2160);

(statearr_2200[(8)] = inst_2161);

return statearr_2200;
})();
var statearr_2201_2227 = state_2197__$1;
(statearr_2201_2227[(2)] = null);

(statearr_2201_2227[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2198 === (3))){
var inst_2195 = (state_2197[(2)]);
var state_2197__$1 = state_2197;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_2197__$1,inst_2195);
} else {
if((state_val_2198 === (4))){
var inst_2161 = (state_2197[(8)]);
var inst_2163 = (inst_2161 < cnt);
var state_2197__$1 = state_2197;
if(cljs.core.truth_(inst_2163)){
var statearr_2202_2228 = state_2197__$1;
(statearr_2202_2228[(1)] = (6));

} else {
var statearr_2203_2229 = state_2197__$1;
(statearr_2203_2229[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2198 === (5))){
var inst_2181 = (state_2197[(2)]);
var state_2197__$1 = (function (){var statearr_2204 = state_2197;
(statearr_2204[(9)] = inst_2181);

return statearr_2204;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_2197__$1,(12),dchan);
} else {
if((state_val_2198 === (6))){
var state_2197__$1 = state_2197;
var statearr_2205_2230 = state_2197__$1;
(statearr_2205_2230[(2)] = null);

(statearr_2205_2230[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2198 === (7))){
var state_2197__$1 = state_2197;
var statearr_2206_2231 = state_2197__$1;
(statearr_2206_2231[(2)] = null);

(statearr_2206_2231[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2198 === (8))){
var inst_2179 = (state_2197[(2)]);
var state_2197__$1 = state_2197;
var statearr_2207_2232 = state_2197__$1;
(statearr_2207_2232[(2)] = inst_2179);

(statearr_2207_2232[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2198 === (9))){
var inst_2161 = (state_2197[(8)]);
var inst_2174 = (state_2197[(2)]);
var inst_2175 = (inst_2161 + (1));
var inst_2161__$1 = inst_2175;
var state_2197__$1 = (function (){var statearr_2208 = state_2197;
(statearr_2208[(10)] = inst_2174);

(statearr_2208[(8)] = inst_2161__$1);

return statearr_2208;
})();
var statearr_2209_2233 = state_2197__$1;
(statearr_2209_2233[(2)] = null);

(statearr_2209_2233[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2198 === (10))){
var inst_2165 = (state_2197[(2)]);
var inst_2166 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_2197__$1 = (function (){var statearr_2210 = state_2197;
(statearr_2210[(11)] = inst_2165);

return statearr_2210;
})();
var statearr_2211_2234 = state_2197__$1;
(statearr_2211_2234[(2)] = inst_2166);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_2197__$1);

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2198 === (11))){
var inst_2161 = (state_2197[(8)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_2197,(10),Object,null,(9));
var inst_2170 = chs__$1.call(null,inst_2161);
var inst_2171 = done.call(null,inst_2161);
var inst_2172 = cljs.core.async.take_BANG_.call(null,inst_2170,inst_2171);
var state_2197__$1 = state_2197;
var statearr_2212_2235 = state_2197__$1;
(statearr_2212_2235[(2)] = inst_2172);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_2197__$1);

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2198 === (12))){
var inst_2183 = (state_2197[(12)]);
var inst_2183__$1 = (state_2197[(2)]);
var inst_2184 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_2183__$1);
var state_2197__$1 = (function (){var statearr_2213 = state_2197;
(statearr_2213[(12)] = inst_2183__$1);

return statearr_2213;
})();
if(cljs.core.truth_(inst_2184)){
var statearr_2214_2236 = state_2197__$1;
(statearr_2214_2236[(1)] = (13));

} else {
var statearr_2215_2237 = state_2197__$1;
(statearr_2215_2237[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2198 === (13))){
var inst_2186 = cljs.core.async.close_BANG_.call(null,out);
var state_2197__$1 = state_2197;
var statearr_2216_2238 = state_2197__$1;
(statearr_2216_2238[(2)] = inst_2186);

(statearr_2216_2238[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2198 === (14))){
var inst_2183 = (state_2197[(12)]);
var inst_2188 = cljs.core.apply.call(null,f,inst_2183);
var state_2197__$1 = state_2197;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_2197__$1,(16),out,inst_2188);
} else {
if((state_val_2198 === (15))){
var inst_2193 = (state_2197[(2)]);
var state_2197__$1 = state_2197;
var statearr_2217_2239 = state_2197__$1;
(statearr_2217_2239[(2)] = inst_2193);

(statearr_2217_2239[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2198 === (16))){
var inst_2190 = (state_2197[(2)]);
var state_2197__$1 = (function (){var statearr_2218 = state_2197;
(statearr_2218[(13)] = inst_2190);

return statearr_2218;
})();
var statearr_2219_2240 = state_2197__$1;
(statearr_2219_2240[(2)] = null);

(statearr_2219_2240[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
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
});})(c__8__auto___2225,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__3__auto__,c__8__auto___2225,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__4__auto__ = null;
var cljs$core$async$state_machine__4__auto____0 = (function (){
var statearr_2220 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_2220[(0)] = cljs$core$async$state_machine__4__auto__);

(statearr_2220[(1)] = (1));

return statearr_2220;
});
var cljs$core$async$state_machine__4__auto____1 = (function (state_2197){
while(true){
var ret_value__5__auto__ = (function (){try{while(true){
var result__6__auto__ = switch__3__auto__.call(null,state_2197);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
continue;
} else {
return result__6__auto__;
}
break;
}
}catch (e2221){if((e2221 instanceof Object)){
var ex__7__auto__ = e2221;
var statearr_2222_2241 = state_2197;
(statearr_2222_2241[(5)] = ex__7__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_2197);

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
throw e2221;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
var G__2242 = state_2197;
state_2197 = G__2242;
continue;
} else {
return ret_value__5__auto__;
}
break;
}
});
cljs$core$async$state_machine__4__auto__ = function(state_2197){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__4__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__4__auto____1.call(this,state_2197);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__4__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__4__auto____0;
cljs$core$async$state_machine__4__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__4__auto____1;
return cljs$core$async$state_machine__4__auto__;
})()
;})(switch__3__auto__,c__8__auto___2225,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__10__auto__ = (function (){var statearr_2223 = f__9__auto__.call(null);
(statearr_2223[(6)] = c__8__auto___2225);

return statearr_2223;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10__auto__);
});})(c__8__auto___2225,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = (3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__2244 = arguments.length;
switch (G__2244) {
case (1):
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case (2):
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__8__auto___2298 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8__auto___2298,out){
return (function (){
var f__9__auto__ = (function (){var switch__3__auto__ = ((function (c__8__auto___2298,out){
return (function (state_2276){
var state_val_2277 = (state_2276[(1)]);
if((state_val_2277 === (1))){
var inst_2245 = cljs.core.vec.call(null,chs);
var inst_2246 = inst_2245;
var state_2276__$1 = (function (){var statearr_2278 = state_2276;
(statearr_2278[(7)] = inst_2246);

return statearr_2278;
})();
var statearr_2279_2299 = state_2276__$1;
(statearr_2279_2299[(2)] = null);

(statearr_2279_2299[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2277 === (2))){
var inst_2246 = (state_2276[(7)]);
var inst_2248 = cljs.core.count.call(null,inst_2246);
var inst_2249 = (inst_2248 > (0));
var state_2276__$1 = state_2276;
if(cljs.core.truth_(inst_2249)){
var statearr_2280_2300 = state_2276__$1;
(statearr_2280_2300[(1)] = (4));

} else {
var statearr_2281_2301 = state_2276__$1;
(statearr_2281_2301[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2277 === (3))){
var inst_2274 = (state_2276[(2)]);
var state_2276__$1 = state_2276;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_2276__$1,inst_2274);
} else {
if((state_val_2277 === (4))){
var inst_2246 = (state_2276[(7)]);
var state_2276__$1 = state_2276;
return cljs.core.async.ioc_alts_BANG_.call(null,state_2276__$1,(7),inst_2246);
} else {
if((state_val_2277 === (5))){
var inst_2270 = cljs.core.async.close_BANG_.call(null,out);
var state_2276__$1 = state_2276;
var statearr_2282_2302 = state_2276__$1;
(statearr_2282_2302[(2)] = inst_2270);

(statearr_2282_2302[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2277 === (6))){
var inst_2272 = (state_2276[(2)]);
var state_2276__$1 = state_2276;
var statearr_2283_2303 = state_2276__$1;
(statearr_2283_2303[(2)] = inst_2272);

(statearr_2283_2303[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2277 === (7))){
var inst_2255 = (state_2276[(8)]);
var inst_2256 = (state_2276[(9)]);
var inst_2255__$1 = (state_2276[(2)]);
var inst_2256__$1 = cljs.core.nth.call(null,inst_2255__$1,(0),null);
var inst_2257 = cljs.core.nth.call(null,inst_2255__$1,(1),null);
var inst_2258 = (inst_2256__$1 == null);
var state_2276__$1 = (function (){var statearr_2284 = state_2276;
(statearr_2284[(8)] = inst_2255__$1);

(statearr_2284[(9)] = inst_2256__$1);

(statearr_2284[(10)] = inst_2257);

return statearr_2284;
})();
if(cljs.core.truth_(inst_2258)){
var statearr_2285_2304 = state_2276__$1;
(statearr_2285_2304[(1)] = (8));

} else {
var statearr_2286_2305 = state_2276__$1;
(statearr_2286_2305[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2277 === (8))){
var inst_2246 = (state_2276[(7)]);
var inst_2255 = (state_2276[(8)]);
var inst_2256 = (state_2276[(9)]);
var inst_2257 = (state_2276[(10)]);
var inst_2260 = (function (){var cs = inst_2246;
var vec__2251 = inst_2255;
var v = inst_2256;
var c = inst_2257;
return ((function (cs,vec__2251,v,c,inst_2246,inst_2255,inst_2256,inst_2257,state_val_2277,c__8__auto___2298,out){
return (function (p1__16_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__16_SHARP_);
});
;})(cs,vec__2251,v,c,inst_2246,inst_2255,inst_2256,inst_2257,state_val_2277,c__8__auto___2298,out))
})();
var inst_2261 = cljs.core.filterv.call(null,inst_2260,inst_2246);
var inst_2246__$1 = inst_2261;
var state_2276__$1 = (function (){var statearr_2287 = state_2276;
(statearr_2287[(7)] = inst_2246__$1);

return statearr_2287;
})();
var statearr_2288_2306 = state_2276__$1;
(statearr_2288_2306[(2)] = null);

(statearr_2288_2306[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2277 === (9))){
var inst_2256 = (state_2276[(9)]);
var state_2276__$1 = state_2276;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_2276__$1,(11),out,inst_2256);
} else {
if((state_val_2277 === (10))){
var inst_2268 = (state_2276[(2)]);
var state_2276__$1 = state_2276;
var statearr_2290_2307 = state_2276__$1;
(statearr_2290_2307[(2)] = inst_2268);

(statearr_2290_2307[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2277 === (11))){
var inst_2246 = (state_2276[(7)]);
var inst_2265 = (state_2276[(2)]);
var tmp2289 = inst_2246;
var inst_2246__$1 = tmp2289;
var state_2276__$1 = (function (){var statearr_2291 = state_2276;
(statearr_2291[(11)] = inst_2265);

(statearr_2291[(7)] = inst_2246__$1);

return statearr_2291;
})();
var statearr_2292_2308 = state_2276__$1;
(statearr_2292_2308[(2)] = null);

(statearr_2292_2308[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
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
});})(c__8__auto___2298,out))
;
return ((function (switch__3__auto__,c__8__auto___2298,out){
return (function() {
var cljs$core$async$state_machine__4__auto__ = null;
var cljs$core$async$state_machine__4__auto____0 = (function (){
var statearr_2293 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_2293[(0)] = cljs$core$async$state_machine__4__auto__);

(statearr_2293[(1)] = (1));

return statearr_2293;
});
var cljs$core$async$state_machine__4__auto____1 = (function (state_2276){
while(true){
var ret_value__5__auto__ = (function (){try{while(true){
var result__6__auto__ = switch__3__auto__.call(null,state_2276);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
continue;
} else {
return result__6__auto__;
}
break;
}
}catch (e2294){if((e2294 instanceof Object)){
var ex__7__auto__ = e2294;
var statearr_2295_2309 = state_2276;
(statearr_2295_2309[(5)] = ex__7__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_2276);

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
throw e2294;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
var G__2310 = state_2276;
state_2276 = G__2310;
continue;
} else {
return ret_value__5__auto__;
}
break;
}
});
cljs$core$async$state_machine__4__auto__ = function(state_2276){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__4__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__4__auto____1.call(this,state_2276);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__4__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__4__auto____0;
cljs$core$async$state_machine__4__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__4__auto____1;
return cljs$core$async$state_machine__4__auto__;
})()
;})(switch__3__auto__,c__8__auto___2298,out))
})();
var state__10__auto__ = (function (){var statearr_2296 = f__9__auto__.call(null);
(statearr_2296[(6)] = c__8__auto___2298);

return statearr_2296;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10__auto__);
});})(c__8__auto___2298,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = (2);

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
var G__2312 = arguments.length;
switch (G__2312) {
case (2):
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case (3):
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__8__auto___2357 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8__auto___2357,out){
return (function (){
var f__9__auto__ = (function (){var switch__3__auto__ = ((function (c__8__auto___2357,out){
return (function (state_2336){
var state_val_2337 = (state_2336[(1)]);
if((state_val_2337 === (1))){
var inst_2313 = (0);
var state_2336__$1 = (function (){var statearr_2338 = state_2336;
(statearr_2338[(7)] = inst_2313);

return statearr_2338;
})();
var statearr_2339_2358 = state_2336__$1;
(statearr_2339_2358[(2)] = null);

(statearr_2339_2358[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2337 === (2))){
var inst_2313 = (state_2336[(7)]);
var inst_2315 = (inst_2313 < n);
var state_2336__$1 = state_2336;
if(cljs.core.truth_(inst_2315)){
var statearr_2340_2359 = state_2336__$1;
(statearr_2340_2359[(1)] = (4));

} else {
var statearr_2341_2360 = state_2336__$1;
(statearr_2341_2360[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2337 === (3))){
var inst_2333 = (state_2336[(2)]);
var inst_2334 = cljs.core.async.close_BANG_.call(null,out);
var state_2336__$1 = (function (){var statearr_2342 = state_2336;
(statearr_2342[(8)] = inst_2333);

return statearr_2342;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_2336__$1,inst_2334);
} else {
if((state_val_2337 === (4))){
var state_2336__$1 = state_2336;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_2336__$1,(7),ch);
} else {
if((state_val_2337 === (5))){
var state_2336__$1 = state_2336;
var statearr_2343_2361 = state_2336__$1;
(statearr_2343_2361[(2)] = null);

(statearr_2343_2361[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2337 === (6))){
var inst_2331 = (state_2336[(2)]);
var state_2336__$1 = state_2336;
var statearr_2344_2362 = state_2336__$1;
(statearr_2344_2362[(2)] = inst_2331);

(statearr_2344_2362[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2337 === (7))){
var inst_2318 = (state_2336[(9)]);
var inst_2318__$1 = (state_2336[(2)]);
var inst_2319 = (inst_2318__$1 == null);
var inst_2320 = cljs.core.not.call(null,inst_2319);
var state_2336__$1 = (function (){var statearr_2345 = state_2336;
(statearr_2345[(9)] = inst_2318__$1);

return statearr_2345;
})();
if(inst_2320){
var statearr_2346_2363 = state_2336__$1;
(statearr_2346_2363[(1)] = (8));

} else {
var statearr_2347_2364 = state_2336__$1;
(statearr_2347_2364[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2337 === (8))){
var inst_2318 = (state_2336[(9)]);
var state_2336__$1 = state_2336;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_2336__$1,(11),out,inst_2318);
} else {
if((state_val_2337 === (9))){
var state_2336__$1 = state_2336;
var statearr_2348_2365 = state_2336__$1;
(statearr_2348_2365[(2)] = null);

(statearr_2348_2365[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2337 === (10))){
var inst_2328 = (state_2336[(2)]);
var state_2336__$1 = state_2336;
var statearr_2349_2366 = state_2336__$1;
(statearr_2349_2366[(2)] = inst_2328);

(statearr_2349_2366[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2337 === (11))){
var inst_2313 = (state_2336[(7)]);
var inst_2323 = (state_2336[(2)]);
var inst_2324 = (inst_2313 + (1));
var inst_2313__$1 = inst_2324;
var state_2336__$1 = (function (){var statearr_2350 = state_2336;
(statearr_2350[(10)] = inst_2323);

(statearr_2350[(7)] = inst_2313__$1);

return statearr_2350;
})();
var statearr_2351_2367 = state_2336__$1;
(statearr_2351_2367[(2)] = null);

(statearr_2351_2367[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
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
});})(c__8__auto___2357,out))
;
return ((function (switch__3__auto__,c__8__auto___2357,out){
return (function() {
var cljs$core$async$state_machine__4__auto__ = null;
var cljs$core$async$state_machine__4__auto____0 = (function (){
var statearr_2352 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_2352[(0)] = cljs$core$async$state_machine__4__auto__);

(statearr_2352[(1)] = (1));

return statearr_2352;
});
var cljs$core$async$state_machine__4__auto____1 = (function (state_2336){
while(true){
var ret_value__5__auto__ = (function (){try{while(true){
var result__6__auto__ = switch__3__auto__.call(null,state_2336);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
continue;
} else {
return result__6__auto__;
}
break;
}
}catch (e2353){if((e2353 instanceof Object)){
var ex__7__auto__ = e2353;
var statearr_2354_2368 = state_2336;
(statearr_2354_2368[(5)] = ex__7__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_2336);

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
throw e2353;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
var G__2369 = state_2336;
state_2336 = G__2369;
continue;
} else {
return ret_value__5__auto__;
}
break;
}
});
cljs$core$async$state_machine__4__auto__ = function(state_2336){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__4__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__4__auto____1.call(this,state_2336);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__4__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__4__auto____0;
cljs$core$async$state_machine__4__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__4__auto____1;
return cljs$core$async$state_machine__4__auto__;
})()
;})(switch__3__auto__,c__8__auto___2357,out))
})();
var state__10__auto__ = (function (){var statearr_2355 = f__9__auto__.call(null);
(statearr_2355[(6)] = c__8__auto___2357);

return statearr_2355;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10__auto__);
});})(c__8__auto___2357,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = (3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async2370 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.async.impl.protocols.WritePort}
*/
cljs.core.async.t_cljs$core$async2370 = (function (f,ch,meta2371){
this.f = f;
this.ch = ch;
this.meta2371 = meta2371;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async2370.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_2372,meta2371__$1){
var self__ = this;
var _2372__$1 = this;
return (new cljs.core.async.t_cljs$core$async2370(self__.f,self__.ch,meta2371__$1));
});

cljs.core.async.t_cljs$core$async2370.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_2372){
var self__ = this;
var _2372__$1 = this;
return self__.meta2371;
});

cljs.core.async.t_cljs$core$async2370.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async2370.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async2370.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async2370.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async2370.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async2373 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.impl.protocols.Handler}
*/
cljs.core.async.t_cljs$core$async2373 = (function (f,ch,meta2371,_,fn1,meta2374){
this.f = f;
this.ch = ch;
this.meta2371 = meta2371;
this._ = _;
this.fn1 = fn1;
this.meta2374 = meta2374;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async2373.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_2375,meta2374__$1){
var self__ = this;
var _2375__$1 = this;
return (new cljs.core.async.t_cljs$core$async2373(self__.f,self__.ch,self__.meta2371,self__._,self__.fn1,meta2374__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async2373.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_2375){
var self__ = this;
var _2375__$1 = this;
return self__.meta2374;
});})(___$1))
;

cljs.core.async.t_cljs$core$async2373.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async2373.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async2373.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async2373.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__17_SHARP_){
return f1.call(null,(((p1__17_SHARP_ == null))?null:self__.f.call(null,p1__17_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async2373.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"ch","ch",(1085813622),null),new cljs.core.Symbol(null,"meta2371","meta2371",(754386903),null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",(-1201019570),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async2370","cljs.core.async/t_cljs$core$async2370",(1902188996),null)], null)),new cljs.core.Symbol(null,"fn1","fn1",(895834444),null),new cljs.core.Symbol(null,"meta2374","meta2374",(-451772303),null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async2373.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async2373.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async2373";

cljs.core.async.t_cljs$core$async2373.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__22617__auto__,writer__22618__auto__,opt__22619__auto__){
return cljs.core._write.call(null,writer__22618__auto__,"cljs.core.async/t_cljs$core$async2373");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async2373 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async2373(f__$1,ch__$1,meta2371__$1,___$2,fn1__$1,meta2374){
return (new cljs.core.async.t_cljs$core$async2373(f__$1,ch__$1,meta2371__$1,___$2,fn1__$1,meta2374));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async2373(self__.f,self__.ch,self__.meta2371,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__20896__auto__ = ret;
if(cljs.core.truth_(and__20896__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__20896__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async2370.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async2370.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async2370.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"ch","ch",(1085813622),null),new cljs.core.Symbol(null,"meta2371","meta2371",(754386903),null)], null);
});

cljs.core.async.t_cljs$core$async2370.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async2370.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async2370";

cljs.core.async.t_cljs$core$async2370.cljs$lang$ctorPrWriter = (function (this__22617__auto__,writer__22618__auto__,opt__22619__auto__){
return cljs.core._write.call(null,writer__22618__auto__,"cljs.core.async/t_cljs$core$async2370");
});

cljs.core.async.__GT_t_cljs$core$async2370 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async2370(f__$1,ch__$1,meta2371){
return (new cljs.core.async.t_cljs$core$async2370(f__$1,ch__$1,meta2371));
});

}

return (new cljs.core.async.t_cljs$core$async2370(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async2376 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.async.impl.protocols.WritePort}
*/
cljs.core.async.t_cljs$core$async2376 = (function (f,ch,meta2377){
this.f = f;
this.ch = ch;
this.meta2377 = meta2377;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async2376.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_2378,meta2377__$1){
var self__ = this;
var _2378__$1 = this;
return (new cljs.core.async.t_cljs$core$async2376(self__.f,self__.ch,meta2377__$1));
});

cljs.core.async.t_cljs$core$async2376.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_2378){
var self__ = this;
var _2378__$1 = this;
return self__.meta2377;
});

cljs.core.async.t_cljs$core$async2376.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async2376.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async2376.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async2376.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async2376.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async2376.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async2376.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"ch","ch",(1085813622),null),new cljs.core.Symbol(null,"meta2377","meta2377",(152464570),null)], null);
});

cljs.core.async.t_cljs$core$async2376.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async2376.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async2376";

cljs.core.async.t_cljs$core$async2376.cljs$lang$ctorPrWriter = (function (this__22617__auto__,writer__22618__auto__,opt__22619__auto__){
return cljs.core._write.call(null,writer__22618__auto__,"cljs.core.async/t_cljs$core$async2376");
});

cljs.core.async.__GT_t_cljs$core$async2376 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async2376(f__$1,ch__$1,meta2377){
return (new cljs.core.async.t_cljs$core$async2376(f__$1,ch__$1,meta2377));
});

}

return (new cljs.core.async.t_cljs$core$async2376(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async2379 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.async.impl.protocols.WritePort}
*/
cljs.core.async.t_cljs$core$async2379 = (function (p,ch,meta2380){
this.p = p;
this.ch = ch;
this.meta2380 = meta2380;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async2379.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_2381,meta2380__$1){
var self__ = this;
var _2381__$1 = this;
return (new cljs.core.async.t_cljs$core$async2379(self__.p,self__.ch,meta2380__$1));
});

cljs.core.async.t_cljs$core$async2379.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_2381){
var self__ = this;
var _2381__$1 = this;
return self__.meta2380;
});

cljs.core.async.t_cljs$core$async2379.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async2379.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async2379.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async2379.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async2379.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async2379.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async2379.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async2379.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",(1791580836),null),new cljs.core.Symbol(null,"ch","ch",(1085813622),null),new cljs.core.Symbol(null,"meta2380","meta2380",(2127985475),null)], null);
});

cljs.core.async.t_cljs$core$async2379.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async2379.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async2379";

cljs.core.async.t_cljs$core$async2379.cljs$lang$ctorPrWriter = (function (this__22617__auto__,writer__22618__auto__,opt__22619__auto__){
return cljs.core._write.call(null,writer__22618__auto__,"cljs.core.async/t_cljs$core$async2379");
});

cljs.core.async.__GT_t_cljs$core$async2379 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async2379(p__$1,ch__$1,meta2380){
return (new cljs.core.async.t_cljs$core$async2379(p__$1,ch__$1,meta2380));
});

}

return (new cljs.core.async.t_cljs$core$async2379(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__2383 = arguments.length;
switch (G__2383) {
case (2):
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case (3):
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__8__auto___2423 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8__auto___2423,out){
return (function (){
var f__9__auto__ = (function (){var switch__3__auto__ = ((function (c__8__auto___2423,out){
return (function (state_2404){
var state_val_2405 = (state_2404[(1)]);
if((state_val_2405 === (1))){
var state_2404__$1 = state_2404;
var statearr_2406_2424 = state_2404__$1;
(statearr_2406_2424[(2)] = null);

(statearr_2406_2424[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2405 === (2))){
var state_2404__$1 = state_2404;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_2404__$1,(4),ch);
} else {
if((state_val_2405 === (3))){
var inst_2402 = (state_2404[(2)]);
var state_2404__$1 = state_2404;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_2404__$1,inst_2402);
} else {
if((state_val_2405 === (4))){
var inst_2386 = (state_2404[(7)]);
var inst_2386__$1 = (state_2404[(2)]);
var inst_2387 = (inst_2386__$1 == null);
var state_2404__$1 = (function (){var statearr_2407 = state_2404;
(statearr_2407[(7)] = inst_2386__$1);

return statearr_2407;
})();
if(cljs.core.truth_(inst_2387)){
var statearr_2408_2425 = state_2404__$1;
(statearr_2408_2425[(1)] = (5));

} else {
var statearr_2409_2426 = state_2404__$1;
(statearr_2409_2426[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2405 === (5))){
var inst_2389 = cljs.core.async.close_BANG_.call(null,out);
var state_2404__$1 = state_2404;
var statearr_2410_2427 = state_2404__$1;
(statearr_2410_2427[(2)] = inst_2389);

(statearr_2410_2427[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2405 === (6))){
var inst_2386 = (state_2404[(7)]);
var inst_2391 = p.call(null,inst_2386);
var state_2404__$1 = state_2404;
if(cljs.core.truth_(inst_2391)){
var statearr_2411_2428 = state_2404__$1;
(statearr_2411_2428[(1)] = (8));

} else {
var statearr_2412_2429 = state_2404__$1;
(statearr_2412_2429[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2405 === (7))){
var inst_2400 = (state_2404[(2)]);
var state_2404__$1 = state_2404;
var statearr_2413_2430 = state_2404__$1;
(statearr_2413_2430[(2)] = inst_2400);

(statearr_2413_2430[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2405 === (8))){
var inst_2386 = (state_2404[(7)]);
var state_2404__$1 = state_2404;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_2404__$1,(11),out,inst_2386);
} else {
if((state_val_2405 === (9))){
var state_2404__$1 = state_2404;
var statearr_2414_2431 = state_2404__$1;
(statearr_2414_2431[(2)] = null);

(statearr_2414_2431[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2405 === (10))){
var inst_2397 = (state_2404[(2)]);
var state_2404__$1 = (function (){var statearr_2415 = state_2404;
(statearr_2415[(8)] = inst_2397);

return statearr_2415;
})();
var statearr_2416_2432 = state_2404__$1;
(statearr_2416_2432[(2)] = null);

(statearr_2416_2432[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2405 === (11))){
var inst_2394 = (state_2404[(2)]);
var state_2404__$1 = state_2404;
var statearr_2417_2433 = state_2404__$1;
(statearr_2417_2433[(2)] = inst_2394);

(statearr_2417_2433[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
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
});})(c__8__auto___2423,out))
;
return ((function (switch__3__auto__,c__8__auto___2423,out){
return (function() {
var cljs$core$async$state_machine__4__auto__ = null;
var cljs$core$async$state_machine__4__auto____0 = (function (){
var statearr_2418 = [null,null,null,null,null,null,null,null,null];
(statearr_2418[(0)] = cljs$core$async$state_machine__4__auto__);

(statearr_2418[(1)] = (1));

return statearr_2418;
});
var cljs$core$async$state_machine__4__auto____1 = (function (state_2404){
while(true){
var ret_value__5__auto__ = (function (){try{while(true){
var result__6__auto__ = switch__3__auto__.call(null,state_2404);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
continue;
} else {
return result__6__auto__;
}
break;
}
}catch (e2419){if((e2419 instanceof Object)){
var ex__7__auto__ = e2419;
var statearr_2420_2434 = state_2404;
(statearr_2420_2434[(5)] = ex__7__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_2404);

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
throw e2419;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
var G__2435 = state_2404;
state_2404 = G__2435;
continue;
} else {
return ret_value__5__auto__;
}
break;
}
});
cljs$core$async$state_machine__4__auto__ = function(state_2404){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__4__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__4__auto____1.call(this,state_2404);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__4__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__4__auto____0;
cljs$core$async$state_machine__4__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__4__auto____1;
return cljs$core$async$state_machine__4__auto__;
})()
;})(switch__3__auto__,c__8__auto___2423,out))
})();
var state__10__auto__ = (function (){var statearr_2421 = f__9__auto__.call(null);
(statearr_2421[(6)] = c__8__auto___2423);

return statearr_2421;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10__auto__);
});})(c__8__auto___2423,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = (3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__2437 = arguments.length;
switch (G__2437) {
case (2):
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case (3):
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = (3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__8__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8__auto__){
return (function (){
var f__9__auto__ = (function (){var switch__3__auto__ = ((function (c__8__auto__){
return (function (state_2500){
var state_val_2501 = (state_2500[(1)]);
if((state_val_2501 === (1))){
var state_2500__$1 = state_2500;
var statearr_2502_2540 = state_2500__$1;
(statearr_2502_2540[(2)] = null);

(statearr_2502_2540[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2501 === (2))){
var state_2500__$1 = state_2500;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_2500__$1,(4),in$);
} else {
if((state_val_2501 === (3))){
var inst_2498 = (state_2500[(2)]);
var state_2500__$1 = state_2500;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_2500__$1,inst_2498);
} else {
if((state_val_2501 === (4))){
var inst_2441 = (state_2500[(7)]);
var inst_2441__$1 = (state_2500[(2)]);
var inst_2442 = (inst_2441__$1 == null);
var state_2500__$1 = (function (){var statearr_2503 = state_2500;
(statearr_2503[(7)] = inst_2441__$1);

return statearr_2503;
})();
if(cljs.core.truth_(inst_2442)){
var statearr_2504_2541 = state_2500__$1;
(statearr_2504_2541[(1)] = (5));

} else {
var statearr_2505_2542 = state_2500__$1;
(statearr_2505_2542[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2501 === (5))){
var inst_2444 = cljs.core.async.close_BANG_.call(null,out);
var state_2500__$1 = state_2500;
var statearr_2506_2543 = state_2500__$1;
(statearr_2506_2543[(2)] = inst_2444);

(statearr_2506_2543[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2501 === (6))){
var inst_2441 = (state_2500[(7)]);
var inst_2450 = f.call(null,inst_2441);
var inst_2451 = cljs.core.seq.call(null,inst_2450);
var inst_2452 = inst_2451;
var inst_2453 = null;
var inst_2454 = (0);
var inst_2455 = (0);
var state_2500__$1 = (function (){var statearr_2507 = state_2500;
(statearr_2507[(8)] = inst_2452);

(statearr_2507[(11)] = inst_2453);

(statearr_2507[(10)] = inst_2454);

(statearr_2507[(9)] = inst_2455);

return statearr_2507;
})();
var statearr_2508_2544 = state_2500__$1;
(statearr_2508_2544[(2)] = null);

(statearr_2508_2544[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2501 === (7))){
var inst_2496 = (state_2500[(2)]);
var state_2500__$1 = state_2500;
var statearr_2509_2545 = state_2500__$1;
(statearr_2509_2545[(2)] = inst_2496);

(statearr_2509_2545[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2501 === (8))){
var inst_2455 = (state_2500[(9)]);
var inst_2454 = (state_2500[(10)]);
var inst_2457 = (inst_2455 < inst_2454);
var inst_2458 = inst_2457;
var state_2500__$1 = state_2500;
if(cljs.core.truth_(inst_2458)){
var statearr_2510_2546 = state_2500__$1;
(statearr_2510_2546[(1)] = (10));

} else {
var statearr_2511_2547 = state_2500__$1;
(statearr_2511_2547[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2501 === (9))){
var inst_2488 = (state_2500[(2)]);
var inst_2489 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_2500__$1 = (function (){var statearr_2512 = state_2500;
(statearr_2512[(12)] = inst_2488);

return statearr_2512;
})();
if(cljs.core.truth_(inst_2489)){
var statearr_2513_2548 = state_2500__$1;
(statearr_2513_2548[(1)] = (21));

} else {
var statearr_2514_2549 = state_2500__$1;
(statearr_2514_2549[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2501 === (10))){
var inst_2453 = (state_2500[(11)]);
var inst_2455 = (state_2500[(9)]);
var inst_2460 = cljs.core._nth.call(null,inst_2453,inst_2455);
var state_2500__$1 = state_2500;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_2500__$1,(13),out,inst_2460);
} else {
if((state_val_2501 === (11))){
var inst_2452 = (state_2500[(8)]);
var inst_2466 = (state_2500[(13)]);
var inst_2466__$1 = cljs.core.seq.call(null,inst_2452);
var state_2500__$1 = (function (){var statearr_2518 = state_2500;
(statearr_2518[(13)] = inst_2466__$1);

return statearr_2518;
})();
if(inst_2466__$1){
var statearr_2519_2550 = state_2500__$1;
(statearr_2519_2550[(1)] = (14));

} else {
var statearr_2520_2551 = state_2500__$1;
(statearr_2520_2551[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2501 === (12))){
var inst_2486 = (state_2500[(2)]);
var state_2500__$1 = state_2500;
var statearr_2521_2552 = state_2500__$1;
(statearr_2521_2552[(2)] = inst_2486);

(statearr_2521_2552[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2501 === (13))){
var inst_2455 = (state_2500[(9)]);
var inst_2452 = (state_2500[(8)]);
var inst_2453 = (state_2500[(11)]);
var inst_2454 = (state_2500[(10)]);
var inst_2462 = (state_2500[(2)]);
var inst_2463 = (inst_2455 + (1));
var tmp2515 = inst_2452;
var tmp2516 = inst_2453;
var tmp2517 = inst_2454;
var inst_2452__$1 = tmp2515;
var inst_2453__$1 = tmp2516;
var inst_2454__$1 = tmp2517;
var inst_2455__$1 = inst_2463;
var state_2500__$1 = (function (){var statearr_2522 = state_2500;
(statearr_2522[(14)] = inst_2462);

(statearr_2522[(8)] = inst_2452__$1);

(statearr_2522[(11)] = inst_2453__$1);

(statearr_2522[(10)] = inst_2454__$1);

(statearr_2522[(9)] = inst_2455__$1);

return statearr_2522;
})();
var statearr_2523_2553 = state_2500__$1;
(statearr_2523_2553[(2)] = null);

(statearr_2523_2553[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2501 === (14))){
var inst_2466 = (state_2500[(13)]);
var inst_2468 = cljs.core.chunked_seq_QMARK_.call(null,inst_2466);
var state_2500__$1 = state_2500;
if(inst_2468){
var statearr_2524_2554 = state_2500__$1;
(statearr_2524_2554[(1)] = (17));

} else {
var statearr_2525_2555 = state_2500__$1;
(statearr_2525_2555[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2501 === (15))){
var state_2500__$1 = state_2500;
var statearr_2526_2556 = state_2500__$1;
(statearr_2526_2556[(2)] = null);

(statearr_2526_2556[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2501 === (16))){
var inst_2484 = (state_2500[(2)]);
var state_2500__$1 = state_2500;
var statearr_2527_2557 = state_2500__$1;
(statearr_2527_2557[(2)] = inst_2484);

(statearr_2527_2557[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2501 === (17))){
var inst_2466 = (state_2500[(13)]);
var inst_2470 = cljs.core.chunk_first.call(null,inst_2466);
var inst_2471 = cljs.core.chunk_rest.call(null,inst_2466);
var inst_2472 = cljs.core.count.call(null,inst_2470);
var inst_2452 = inst_2471;
var inst_2453 = inst_2470;
var inst_2454 = inst_2472;
var inst_2455 = (0);
var state_2500__$1 = (function (){var statearr_2528 = state_2500;
(statearr_2528[(8)] = inst_2452);

(statearr_2528[(11)] = inst_2453);

(statearr_2528[(10)] = inst_2454);

(statearr_2528[(9)] = inst_2455);

return statearr_2528;
})();
var statearr_2529_2558 = state_2500__$1;
(statearr_2529_2558[(2)] = null);

(statearr_2529_2558[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2501 === (18))){
var inst_2466 = (state_2500[(13)]);
var inst_2475 = cljs.core.first.call(null,inst_2466);
var state_2500__$1 = state_2500;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_2500__$1,(20),out,inst_2475);
} else {
if((state_val_2501 === (19))){
var inst_2481 = (state_2500[(2)]);
var state_2500__$1 = state_2500;
var statearr_2530_2559 = state_2500__$1;
(statearr_2530_2559[(2)] = inst_2481);

(statearr_2530_2559[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2501 === (20))){
var inst_2466 = (state_2500[(13)]);
var inst_2477 = (state_2500[(2)]);
var inst_2478 = cljs.core.next.call(null,inst_2466);
var inst_2452 = inst_2478;
var inst_2453 = null;
var inst_2454 = (0);
var inst_2455 = (0);
var state_2500__$1 = (function (){var statearr_2531 = state_2500;
(statearr_2531[(15)] = inst_2477);

(statearr_2531[(8)] = inst_2452);

(statearr_2531[(11)] = inst_2453);

(statearr_2531[(10)] = inst_2454);

(statearr_2531[(9)] = inst_2455);

return statearr_2531;
})();
var statearr_2532_2560 = state_2500__$1;
(statearr_2532_2560[(2)] = null);

(statearr_2532_2560[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2501 === (21))){
var state_2500__$1 = state_2500;
var statearr_2533_2561 = state_2500__$1;
(statearr_2533_2561[(2)] = null);

(statearr_2533_2561[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2501 === (22))){
var state_2500__$1 = state_2500;
var statearr_2534_2562 = state_2500__$1;
(statearr_2534_2562[(2)] = null);

(statearr_2534_2562[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2501 === (23))){
var inst_2494 = (state_2500[(2)]);
var state_2500__$1 = state_2500;
var statearr_2535_2563 = state_2500__$1;
(statearr_2535_2563[(2)] = inst_2494);

(statearr_2535_2563[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
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
});})(c__8__auto__))
;
return ((function (switch__3__auto__,c__8__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__4__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__4__auto____0 = (function (){
var statearr_2536 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_2536[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__4__auto__);

(statearr_2536[(1)] = (1));

return statearr_2536;
});
var cljs$core$async$mapcat_STAR__$_state_machine__4__auto____1 = (function (state_2500){
while(true){
var ret_value__5__auto__ = (function (){try{while(true){
var result__6__auto__ = switch__3__auto__.call(null,state_2500);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
continue;
} else {
return result__6__auto__;
}
break;
}
}catch (e2537){if((e2537 instanceof Object)){
var ex__7__auto__ = e2537;
var statearr_2538_2564 = state_2500;
(statearr_2538_2564[(5)] = ex__7__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_2500);

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
throw e2537;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
var G__2565 = state_2500;
state_2500 = G__2565;
continue;
} else {
return ret_value__5__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__4__auto__ = function(state_2500){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__4__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__4__auto____1.call(this,state_2500);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__4__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__4__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__4__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__4__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__4__auto__;
})()
;})(switch__3__auto__,c__8__auto__))
})();
var state__10__auto__ = (function (){var statearr_2539 = f__9__auto__.call(null);
(statearr_2539[(6)] = c__8__auto__);

return statearr_2539;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10__auto__);
});})(c__8__auto__))
);

return c__8__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__2567 = arguments.length;
switch (G__2567) {
case (2):
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case (3):
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = (3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__2570 = arguments.length;
switch (G__2570) {
case (2):
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case (3):
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = (3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__2573 = arguments.length;
switch (G__2573) {
case (1):
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case (2):
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__8__auto___2620 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8__auto___2620,out){
return (function (){
var f__9__auto__ = (function (){var switch__3__auto__ = ((function (c__8__auto___2620,out){
return (function (state_2597){
var state_val_2598 = (state_2597[(1)]);
if((state_val_2598 === (1))){
var inst_2574 = null;
var state_2597__$1 = (function (){var statearr_2599 = state_2597;
(statearr_2599[(7)] = inst_2574);

return statearr_2599;
})();
var statearr_2600_2621 = state_2597__$1;
(statearr_2600_2621[(2)] = null);

(statearr_2600_2621[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2598 === (2))){
var state_2597__$1 = state_2597;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_2597__$1,(4),ch);
} else {
if((state_val_2598 === (3))){
var inst_2594 = (state_2597[(2)]);
var inst_2595 = cljs.core.async.close_BANG_.call(null,out);
var state_2597__$1 = (function (){var statearr_2601 = state_2597;
(statearr_2601[(8)] = inst_2594);

return statearr_2601;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_2597__$1,inst_2595);
} else {
if((state_val_2598 === (4))){
var inst_2577 = (state_2597[(9)]);
var inst_2577__$1 = (state_2597[(2)]);
var inst_2578 = (inst_2577__$1 == null);
var inst_2579 = cljs.core.not.call(null,inst_2578);
var state_2597__$1 = (function (){var statearr_2602 = state_2597;
(statearr_2602[(9)] = inst_2577__$1);

return statearr_2602;
})();
if(inst_2579){
var statearr_2603_2622 = state_2597__$1;
(statearr_2603_2622[(1)] = (5));

} else {
var statearr_2604_2623 = state_2597__$1;
(statearr_2604_2623[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2598 === (5))){
var inst_2577 = (state_2597[(9)]);
var inst_2574 = (state_2597[(7)]);
var inst_2581 = cljs.core._EQ_.call(null,inst_2577,inst_2574);
var state_2597__$1 = state_2597;
if(inst_2581){
var statearr_2605_2624 = state_2597__$1;
(statearr_2605_2624[(1)] = (8));

} else {
var statearr_2606_2625 = state_2597__$1;
(statearr_2606_2625[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2598 === (6))){
var state_2597__$1 = state_2597;
var statearr_2608_2626 = state_2597__$1;
(statearr_2608_2626[(2)] = null);

(statearr_2608_2626[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2598 === (7))){
var inst_2592 = (state_2597[(2)]);
var state_2597__$1 = state_2597;
var statearr_2609_2627 = state_2597__$1;
(statearr_2609_2627[(2)] = inst_2592);

(statearr_2609_2627[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2598 === (8))){
var inst_2574 = (state_2597[(7)]);
var tmp2607 = inst_2574;
var inst_2574__$1 = tmp2607;
var state_2597__$1 = (function (){var statearr_2610 = state_2597;
(statearr_2610[(7)] = inst_2574__$1);

return statearr_2610;
})();
var statearr_2611_2628 = state_2597__$1;
(statearr_2611_2628[(2)] = null);

(statearr_2611_2628[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2598 === (9))){
var inst_2577 = (state_2597[(9)]);
var state_2597__$1 = state_2597;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_2597__$1,(11),out,inst_2577);
} else {
if((state_val_2598 === (10))){
var inst_2589 = (state_2597[(2)]);
var state_2597__$1 = state_2597;
var statearr_2612_2629 = state_2597__$1;
(statearr_2612_2629[(2)] = inst_2589);

(statearr_2612_2629[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2598 === (11))){
var inst_2577 = (state_2597[(9)]);
var inst_2586 = (state_2597[(2)]);
var inst_2574 = inst_2577;
var state_2597__$1 = (function (){var statearr_2613 = state_2597;
(statearr_2613[(10)] = inst_2586);

(statearr_2613[(7)] = inst_2574);

return statearr_2613;
})();
var statearr_2614_2630 = state_2597__$1;
(statearr_2614_2630[(2)] = null);

(statearr_2614_2630[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
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
});})(c__8__auto___2620,out))
;
return ((function (switch__3__auto__,c__8__auto___2620,out){
return (function() {
var cljs$core$async$state_machine__4__auto__ = null;
var cljs$core$async$state_machine__4__auto____0 = (function (){
var statearr_2615 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_2615[(0)] = cljs$core$async$state_machine__4__auto__);

(statearr_2615[(1)] = (1));

return statearr_2615;
});
var cljs$core$async$state_machine__4__auto____1 = (function (state_2597){
while(true){
var ret_value__5__auto__ = (function (){try{while(true){
var result__6__auto__ = switch__3__auto__.call(null,state_2597);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
continue;
} else {
return result__6__auto__;
}
break;
}
}catch (e2616){if((e2616 instanceof Object)){
var ex__7__auto__ = e2616;
var statearr_2617_2631 = state_2597;
(statearr_2617_2631[(5)] = ex__7__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_2597);

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
throw e2616;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
var G__2632 = state_2597;
state_2597 = G__2632;
continue;
} else {
return ret_value__5__auto__;
}
break;
}
});
cljs$core$async$state_machine__4__auto__ = function(state_2597){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__4__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__4__auto____1.call(this,state_2597);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__4__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__4__auto____0;
cljs$core$async$state_machine__4__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__4__auto____1;
return cljs$core$async$state_machine__4__auto__;
})()
;})(switch__3__auto__,c__8__auto___2620,out))
})();
var state__10__auto__ = (function (){var statearr_2618 = f__9__auto__.call(null);
(statearr_2618[(6)] = c__8__auto___2620);

return statearr_2618;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10__auto__);
});})(c__8__auto___2620,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = (2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__2634 = arguments.length;
switch (G__2634) {
case (2):
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case (3):
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__8__auto___2700 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8__auto___2700,out){
return (function (){
var f__9__auto__ = (function (){var switch__3__auto__ = ((function (c__8__auto___2700,out){
return (function (state_2672){
var state_val_2673 = (state_2672[(1)]);
if((state_val_2673 === (1))){
var inst_2635 = (new Array(n));
var inst_2636 = inst_2635;
var inst_2637 = (0);
var state_2672__$1 = (function (){var statearr_2674 = state_2672;
(statearr_2674[(7)] = inst_2636);

(statearr_2674[(9)] = inst_2637);

return statearr_2674;
})();
var statearr_2675_2701 = state_2672__$1;
(statearr_2675_2701[(2)] = null);

(statearr_2675_2701[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2673 === (2))){
var state_2672__$1 = state_2672;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_2672__$1,(4),ch);
} else {
if((state_val_2673 === (3))){
var inst_2670 = (state_2672[(2)]);
var state_2672__$1 = state_2672;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_2672__$1,inst_2670);
} else {
if((state_val_2673 === (4))){
var inst_2640 = (state_2672[(8)]);
var inst_2640__$1 = (state_2672[(2)]);
var inst_2641 = (inst_2640__$1 == null);
var inst_2642 = cljs.core.not.call(null,inst_2641);
var state_2672__$1 = (function (){var statearr_2676 = state_2672;
(statearr_2676[(8)] = inst_2640__$1);

return statearr_2676;
})();
if(inst_2642){
var statearr_2677_2702 = state_2672__$1;
(statearr_2677_2702[(1)] = (5));

} else {
var statearr_2678_2703 = state_2672__$1;
(statearr_2678_2703[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2673 === (5))){
var inst_2636 = (state_2672[(7)]);
var inst_2637 = (state_2672[(9)]);
var inst_2640 = (state_2672[(8)]);
var inst_2645 = (state_2672[(10)]);
var inst_2644 = (inst_2636[inst_2637] = inst_2640);
var inst_2645__$1 = (inst_2637 + (1));
var inst_2646 = (inst_2645__$1 < n);
var state_2672__$1 = (function (){var statearr_2679 = state_2672;
(statearr_2679[(11)] = inst_2644);

(statearr_2679[(10)] = inst_2645__$1);

return statearr_2679;
})();
if(cljs.core.truth_(inst_2646)){
var statearr_2680_2704 = state_2672__$1;
(statearr_2680_2704[(1)] = (8));

} else {
var statearr_2681_2705 = state_2672__$1;
(statearr_2681_2705[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2673 === (6))){
var inst_2637 = (state_2672[(9)]);
var inst_2658 = (inst_2637 > (0));
var state_2672__$1 = state_2672;
if(cljs.core.truth_(inst_2658)){
var statearr_2683_2706 = state_2672__$1;
(statearr_2683_2706[(1)] = (12));

} else {
var statearr_2684_2707 = state_2672__$1;
(statearr_2684_2707[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2673 === (7))){
var inst_2668 = (state_2672[(2)]);
var state_2672__$1 = state_2672;
var statearr_2685_2708 = state_2672__$1;
(statearr_2685_2708[(2)] = inst_2668);

(statearr_2685_2708[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2673 === (8))){
var inst_2636 = (state_2672[(7)]);
var inst_2645 = (state_2672[(10)]);
var tmp2682 = inst_2636;
var inst_2636__$1 = tmp2682;
var inst_2637 = inst_2645;
var state_2672__$1 = (function (){var statearr_2686 = state_2672;
(statearr_2686[(7)] = inst_2636__$1);

(statearr_2686[(9)] = inst_2637);

return statearr_2686;
})();
var statearr_2687_2709 = state_2672__$1;
(statearr_2687_2709[(2)] = null);

(statearr_2687_2709[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2673 === (9))){
var inst_2636 = (state_2672[(7)]);
var inst_2650 = cljs.core.vec.call(null,inst_2636);
var state_2672__$1 = state_2672;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_2672__$1,(11),out,inst_2650);
} else {
if((state_val_2673 === (10))){
var inst_2656 = (state_2672[(2)]);
var state_2672__$1 = state_2672;
var statearr_2688_2710 = state_2672__$1;
(statearr_2688_2710[(2)] = inst_2656);

(statearr_2688_2710[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2673 === (11))){
var inst_2652 = (state_2672[(2)]);
var inst_2653 = (new Array(n));
var inst_2636 = inst_2653;
var inst_2637 = (0);
var state_2672__$1 = (function (){var statearr_2689 = state_2672;
(statearr_2689[(12)] = inst_2652);

(statearr_2689[(7)] = inst_2636);

(statearr_2689[(9)] = inst_2637);

return statearr_2689;
})();
var statearr_2690_2711 = state_2672__$1;
(statearr_2690_2711[(2)] = null);

(statearr_2690_2711[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2673 === (12))){
var inst_2636 = (state_2672[(7)]);
var inst_2660 = cljs.core.vec.call(null,inst_2636);
var state_2672__$1 = state_2672;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_2672__$1,(15),out,inst_2660);
} else {
if((state_val_2673 === (13))){
var state_2672__$1 = state_2672;
var statearr_2691_2712 = state_2672__$1;
(statearr_2691_2712[(2)] = null);

(statearr_2691_2712[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2673 === (14))){
var inst_2665 = (state_2672[(2)]);
var inst_2666 = cljs.core.async.close_BANG_.call(null,out);
var state_2672__$1 = (function (){var statearr_2692 = state_2672;
(statearr_2692[(13)] = inst_2665);

return statearr_2692;
})();
var statearr_2693_2713 = state_2672__$1;
(statearr_2693_2713[(2)] = inst_2666);

(statearr_2693_2713[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2673 === (15))){
var inst_2662 = (state_2672[(2)]);
var state_2672__$1 = state_2672;
var statearr_2694_2714 = state_2672__$1;
(statearr_2694_2714[(2)] = inst_2662);

(statearr_2694_2714[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
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
});})(c__8__auto___2700,out))
;
return ((function (switch__3__auto__,c__8__auto___2700,out){
return (function() {
var cljs$core$async$state_machine__4__auto__ = null;
var cljs$core$async$state_machine__4__auto____0 = (function (){
var statearr_2695 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_2695[(0)] = cljs$core$async$state_machine__4__auto__);

(statearr_2695[(1)] = (1));

return statearr_2695;
});
var cljs$core$async$state_machine__4__auto____1 = (function (state_2672){
while(true){
var ret_value__5__auto__ = (function (){try{while(true){
var result__6__auto__ = switch__3__auto__.call(null,state_2672);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
continue;
} else {
return result__6__auto__;
}
break;
}
}catch (e2696){if((e2696 instanceof Object)){
var ex__7__auto__ = e2696;
var statearr_2697_2715 = state_2672;
(statearr_2697_2715[(5)] = ex__7__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_2672);

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
throw e2696;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
var G__2716 = state_2672;
state_2672 = G__2716;
continue;
} else {
return ret_value__5__auto__;
}
break;
}
});
cljs$core$async$state_machine__4__auto__ = function(state_2672){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__4__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__4__auto____1.call(this,state_2672);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__4__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__4__auto____0;
cljs$core$async$state_machine__4__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__4__auto____1;
return cljs$core$async$state_machine__4__auto__;
})()
;})(switch__3__auto__,c__8__auto___2700,out))
})();
var state__10__auto__ = (function (){var statearr_2698 = f__9__auto__.call(null);
(statearr_2698[(6)] = c__8__auto___2700);

return statearr_2698;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10__auto__);
});})(c__8__auto___2700,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = (3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__2718 = arguments.length;
switch (G__2718) {
case (2):
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case (3):
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__8__auto___2788 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8__auto___2788,out){
return (function (){
var f__9__auto__ = (function (){var switch__3__auto__ = ((function (c__8__auto___2788,out){
return (function (state_2760){
var state_val_2761 = (state_2760[(1)]);
if((state_val_2761 === (1))){
var inst_2719 = [];
var inst_2720 = inst_2719;
var inst_2721 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",(-69252123));
var state_2760__$1 = (function (){var statearr_2762 = state_2760;
(statearr_2762[(7)] = inst_2720);

(statearr_2762[(9)] = inst_2721);

return statearr_2762;
})();
var statearr_2763_2789 = state_2760__$1;
(statearr_2763_2789[(2)] = null);

(statearr_2763_2789[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2761 === (2))){
var state_2760__$1 = state_2760;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_2760__$1,(4),ch);
} else {
if((state_val_2761 === (3))){
var inst_2758 = (state_2760[(2)]);
var state_2760__$1 = state_2760;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_2760__$1,inst_2758);
} else {
if((state_val_2761 === (4))){
var inst_2724 = (state_2760[(8)]);
var inst_2724__$1 = (state_2760[(2)]);
var inst_2725 = (inst_2724__$1 == null);
var inst_2726 = cljs.core.not.call(null,inst_2725);
var state_2760__$1 = (function (){var statearr_2764 = state_2760;
(statearr_2764[(8)] = inst_2724__$1);

return statearr_2764;
})();
if(inst_2726){
var statearr_2765_2790 = state_2760__$1;
(statearr_2765_2790[(1)] = (5));

} else {
var statearr_2766_2791 = state_2760__$1;
(statearr_2766_2791[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2761 === (5))){
var inst_2724 = (state_2760[(8)]);
var inst_2728 = (state_2760[(10)]);
var inst_2721 = (state_2760[(9)]);
var inst_2728__$1 = f.call(null,inst_2724);
var inst_2729 = cljs.core._EQ_.call(null,inst_2728__$1,inst_2721);
var inst_2730 = cljs.core.keyword_identical_QMARK_.call(null,inst_2721,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",(-69252123)));
var inst_2731 = (inst_2729) || (inst_2730);
var state_2760__$1 = (function (){var statearr_2767 = state_2760;
(statearr_2767[(10)] = inst_2728__$1);

return statearr_2767;
})();
if(cljs.core.truth_(inst_2731)){
var statearr_2768_2792 = state_2760__$1;
(statearr_2768_2792[(1)] = (8));

} else {
var statearr_2769_2793 = state_2760__$1;
(statearr_2769_2793[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2761 === (6))){
var inst_2720 = (state_2760[(7)]);
var inst_2745 = inst_2720.length;
var inst_2746 = (inst_2745 > (0));
var state_2760__$1 = state_2760;
if(cljs.core.truth_(inst_2746)){
var statearr_2771_2794 = state_2760__$1;
(statearr_2771_2794[(1)] = (12));

} else {
var statearr_2772_2795 = state_2760__$1;
(statearr_2772_2795[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2761 === (7))){
var inst_2756 = (state_2760[(2)]);
var state_2760__$1 = state_2760;
var statearr_2773_2796 = state_2760__$1;
(statearr_2773_2796[(2)] = inst_2756);

(statearr_2773_2796[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2761 === (8))){
var inst_2720 = (state_2760[(7)]);
var inst_2724 = (state_2760[(8)]);
var inst_2728 = (state_2760[(10)]);
var inst_2733 = inst_2720.push(inst_2724);
var tmp2770 = inst_2720;
var inst_2720__$1 = tmp2770;
var inst_2721 = inst_2728;
var state_2760__$1 = (function (){var statearr_2774 = state_2760;
(statearr_2774[(11)] = inst_2733);

(statearr_2774[(7)] = inst_2720__$1);

(statearr_2774[(9)] = inst_2721);

return statearr_2774;
})();
var statearr_2775_2797 = state_2760__$1;
(statearr_2775_2797[(2)] = null);

(statearr_2775_2797[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2761 === (9))){
var inst_2720 = (state_2760[(7)]);
var inst_2736 = cljs.core.vec.call(null,inst_2720);
var state_2760__$1 = state_2760;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_2760__$1,(11),out,inst_2736);
} else {
if((state_val_2761 === (10))){
var inst_2743 = (state_2760[(2)]);
var state_2760__$1 = state_2760;
var statearr_2776_2798 = state_2760__$1;
(statearr_2776_2798[(2)] = inst_2743);

(statearr_2776_2798[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2761 === (11))){
var inst_2724 = (state_2760[(8)]);
var inst_2728 = (state_2760[(10)]);
var inst_2738 = (state_2760[(2)]);
var inst_2739 = [];
var inst_2740 = inst_2739.push(inst_2724);
var inst_2720 = inst_2739;
var inst_2721 = inst_2728;
var state_2760__$1 = (function (){var statearr_2777 = state_2760;
(statearr_2777[(12)] = inst_2738);

(statearr_2777[(13)] = inst_2740);

(statearr_2777[(7)] = inst_2720);

(statearr_2777[(9)] = inst_2721);

return statearr_2777;
})();
var statearr_2778_2799 = state_2760__$1;
(statearr_2778_2799[(2)] = null);

(statearr_2778_2799[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2761 === (12))){
var inst_2720 = (state_2760[(7)]);
var inst_2748 = cljs.core.vec.call(null,inst_2720);
var state_2760__$1 = state_2760;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_2760__$1,(15),out,inst_2748);
} else {
if((state_val_2761 === (13))){
var state_2760__$1 = state_2760;
var statearr_2779_2800 = state_2760__$1;
(statearr_2779_2800[(2)] = null);

(statearr_2779_2800[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2761 === (14))){
var inst_2753 = (state_2760[(2)]);
var inst_2754 = cljs.core.async.close_BANG_.call(null,out);
var state_2760__$1 = (function (){var statearr_2780 = state_2760;
(statearr_2780[(14)] = inst_2753);

return statearr_2780;
})();
var statearr_2781_2801 = state_2760__$1;
(statearr_2781_2801[(2)] = inst_2754);

(statearr_2781_2801[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2761 === (15))){
var inst_2750 = (state_2760[(2)]);
var state_2760__$1 = state_2760;
var statearr_2782_2802 = state_2760__$1;
(statearr_2782_2802[(2)] = inst_2750);

(statearr_2782_2802[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
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
});})(c__8__auto___2788,out))
;
return ((function (switch__3__auto__,c__8__auto___2788,out){
return (function() {
var cljs$core$async$state_machine__4__auto__ = null;
var cljs$core$async$state_machine__4__auto____0 = (function (){
var statearr_2783 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_2783[(0)] = cljs$core$async$state_machine__4__auto__);

(statearr_2783[(1)] = (1));

return statearr_2783;
});
var cljs$core$async$state_machine__4__auto____1 = (function (state_2760){
while(true){
var ret_value__5__auto__ = (function (){try{while(true){
var result__6__auto__ = switch__3__auto__.call(null,state_2760);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
continue;
} else {
return result__6__auto__;
}
break;
}
}catch (e2784){if((e2784 instanceof Object)){
var ex__7__auto__ = e2784;
var statearr_2785_2803 = state_2760;
(statearr_2785_2803[(5)] = ex__7__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_2760);

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
throw e2784;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
var G__2804 = state_2760;
state_2760 = G__2804;
continue;
} else {
return ret_value__5__auto__;
}
break;
}
});
cljs$core$async$state_machine__4__auto__ = function(state_2760){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__4__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__4__auto____1.call(this,state_2760);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__4__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__4__auto____0;
cljs$core$async$state_machine__4__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__4__auto____1;
return cljs$core$async$state_machine__4__auto__;
})()
;})(switch__3__auto__,c__8__auto___2788,out))
})();
var state__10__auto__ = (function (){var statearr_2786 = f__9__auto__.call(null);
(statearr_2786[(6)] = c__8__auto___2788);

return statearr_2786;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10__auto__);
});})(c__8__auto___2788,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = (3);

