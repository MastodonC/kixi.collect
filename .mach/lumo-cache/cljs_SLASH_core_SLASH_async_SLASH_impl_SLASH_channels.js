goog.provide("cljs.core.async.impl.channels");
cljs.core.async.impl.channels.box = (function cljs$core$async$impl$channels$box(val){
if(typeof cljs.core.async.impl.channels.t_cljs$core$async$impl$channels31 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
*/
cljs.core.async.impl.channels.t_cljs$core$async$impl$channels31 = (function (val,meta32){
this.val = val;
this.meta32 = meta32;
this.cljs$lang$protocol_mask$partition0$ = 425984;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.impl.channels.t_cljs$core$async$impl$channels31.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33,meta32__$1){
var self__ = this;
var _33__$1 = this;
return (new cljs.core.async.impl.channels.t_cljs$core$async$impl$channels31(self__.val,meta32__$1));
});

cljs.core.async.impl.channels.t_cljs$core$async$impl$channels31.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33){
var self__ = this;
var _33__$1 = this;
return self__.meta32;
});

cljs.core.async.impl.channels.t_cljs$core$async$impl$channels31.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.val;
});

cljs.core.async.impl.channels.t_cljs$core$async$impl$channels31.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"val","val",(1769233139),null),new cljs.core.Symbol(null,"meta32","meta32",(2073478690),null)], null);
});

cljs.core.async.impl.channels.t_cljs$core$async$impl$channels31.cljs$lang$type = true;

cljs.core.async.impl.channels.t_cljs$core$async$impl$channels31.cljs$lang$ctorStr = "cljs.core.async.impl.channels/t_cljs$core$async$impl$channels31";

cljs.core.async.impl.channels.t_cljs$core$async$impl$channels31.cljs$lang$ctorPrWriter = (function (this__22617__auto__,writer__22618__auto__,opt__22619__auto__){
return cljs.core._write.call(null,writer__22618__auto__,"cljs.core.async.impl.channels/t_cljs$core$async$impl$channels31");
});

cljs.core.async.impl.channels.__GT_t_cljs$core$async$impl$channels31 = (function cljs$core$async$impl$channels$box_$___GT_t_cljs$core$async$impl$channels31(val__$1,meta32){
return (new cljs.core.async.impl.channels.t_cljs$core$async$impl$channels31(val__$1,meta32));
});

}

return (new cljs.core.async.impl.channels.t_cljs$core$async$impl$channels31(val,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
*/
cljs.core.async.impl.channels.PutBox = (function (handler,val){
this.handler = handler;
this.val = val;
});

cljs.core.async.impl.channels.PutBox.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"handler","handler",(1444934915),null),new cljs.core.Symbol(null,"val","val",(1769233139),null)], null);
});

cljs.core.async.impl.channels.PutBox.cljs$lang$type = true;

cljs.core.async.impl.channels.PutBox.cljs$lang$ctorStr = "cljs.core.async.impl.channels/PutBox";

cljs.core.async.impl.channels.PutBox.cljs$lang$ctorPrWriter = (function (this__22617__auto__,writer__22618__auto__,opt__22619__auto__){
return cljs.core._write.call(null,writer__22618__auto__,"cljs.core.async.impl.channels/PutBox");
});

cljs.core.async.impl.channels.__GT_PutBox = (function cljs$core$async$impl$channels$__GT_PutBox(handler,val){
return (new cljs.core.async.impl.channels.PutBox(handler,val));
});

cljs.core.async.impl.channels.put_active_QMARK_ = (function cljs$core$async$impl$channels$put_active_QMARK_(box){
return cljs.core.async.impl.protocols.active_QMARK_.call(null,box.handler);
});
cljs.core.async.impl.channels.MAX_DIRTY = (64);

/**
 * @interface
 */
cljs.core.async.impl.channels.MMC = function(){};

cljs.core.async.impl.channels.abort = (function cljs$core$async$impl$channels$abort(this$){
if((!((this$ == null))) && (!((this$.cljs$core$async$impl$channels$MMC$abort$arity$1 == null)))){
return this$.cljs$core$async$impl$channels$MMC$abort$arity$1(this$);
} else {
var x__22676__auto__ = (((this$ == null))?null:this$);
var m__22677__auto__ = (cljs.core.async.impl.channels.abort[goog.typeOf(x__22676__auto__)]);
if(!((m__22677__auto__ == null))){
return m__22677__auto__.call(null,this$);
} else {
var m__22677__auto____$1 = (cljs.core.async.impl.channels.abort["_"]);
if(!((m__22677__auto____$1 == null))){
return m__22677__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"MMC.abort",this$);
}
}
}
});


/**
* @constructor
 * @implements {cljs.core.async.impl.channels.MMC}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.async.impl.protocols.Channel}
*/
cljs.core.async.impl.channels.ManyToManyChannel = (function (takes,dirty_takes,puts,dirty_puts,buf,closed,add_BANG_){
this.takes = takes;
this.dirty_takes = dirty_takes;
this.puts = puts;
this.dirty_puts = dirty_puts;
this.buf = buf;
this.closed = closed;
this.add_BANG_ = add_BANG_;
});
cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$channels$MMC$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$channels$MMC$abort$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
while(true){
var putter_45 = self__.puts.pop();
if((putter_45 == null)){
} else {
var put_handler_46 = putter_45.handler;
var val_47 = putter_45.val;
if(cljs.core.async.impl.protocols.active_QMARK_.call(null,put_handler_46)){
var put_cb_48 = cljs.core.async.impl.protocols.commit.call(null,put_handler_46);
cljs.core.async.impl.dispatch.run.call(null,((function (put_cb_48,put_handler_46,val_47,putter_45,this$__$1){
return (function (){
return put_cb_48.call(null,true);
});})(put_cb_48,put_handler_46,val_47,putter_45,this$__$1))
);
} else {
continue;
}
}
break;
}

self__.puts.cleanup(cljs.core.constantly.call(null,false));

return cljs.core.async.impl.protocols.close_BANG_.call(null,this$__$1);
});

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (this$,val,handler){
var self__ = this;
var this$__$1 = this;
if(!((val == null))){
} else {
throw (new Error(["Assert failed: ","Can't put nil in on a channel","\n","(not (nil? val))"].join('')));
}

var closed__$1 = self__.closed;
if((closed__$1) || (!(cljs.core.async.impl.protocols.active_QMARK_.call(null,handler)))){
return cljs.core.async.impl.channels.box.call(null,!(closed__$1));
} else {
if(cljs.core.truth_((function (){var and__20896__auto__ = self__.buf;
if(cljs.core.truth_(and__20896__auto__)){
return cljs.core.not.call(null,cljs.core.async.impl.protocols.full_QMARK_.call(null,self__.buf));
} else {
return and__20896__auto__;
}
})())){
cljs.core.async.impl.protocols.commit.call(null,handler);

var done_QMARK_ = cljs.core.reduced_QMARK_.call(null,self__.add_BANG_.call(null,self__.buf,val));
var take_cbs = (function (){var takers = cljs.core.PersistentVector.EMPTY;
while(true){
if(((self__.takes.length > (0))) && ((cljs.core.count.call(null,self__.buf) > (0)))){
var taker = self__.takes.pop();
if(cljs.core.async.impl.protocols.active_QMARK_.call(null,taker)){
var ret = cljs.core.async.impl.protocols.commit.call(null,taker);
var val__$1 = cljs.core.async.impl.protocols.remove_BANG_.call(null,self__.buf);
var G__49 = cljs.core.conj.call(null,takers,((function (takers,ret,val__$1,taker,done_QMARK_,closed__$1,this$__$1){
return (function (){
return ret.call(null,val__$1);
});})(takers,ret,val__$1,taker,done_QMARK_,closed__$1,this$__$1))
);
takers = G__49;
continue;
} else {
var G__50 = takers;
takers = G__50;
continue;
}
} else {
return takers;
}
break;
}
})();
if(done_QMARK_){
cljs.core.async.impl.channels.abort.call(null,this$__$1);
} else {
}

if(cljs.core.seq.call(null,take_cbs)){
var seq__34_51 = cljs.core.seq.call(null,take_cbs);
var chunk__35_52 = null;
var count__36_53 = (0);
var i__37_54 = (0);
while(true){
if((i__37_54 < count__36_53)){
var f_55 = cljs.core._nth.call(null,chunk__35_52,i__37_54);
cljs.core.async.impl.dispatch.run.call(null,f_55);

var G__56 = seq__34_51;
var G__57 = chunk__35_52;
var G__58 = count__36_53;
var G__59 = (i__37_54 + (1));
seq__34_51 = G__56;
chunk__35_52 = G__57;
count__36_53 = G__58;
i__37_54 = G__59;
continue;
} else {
var temp__20428__auto___60 = cljs.core.seq.call(null,seq__34_51);
if(temp__20428__auto___60){
var seq__34_61__$1 = temp__20428__auto___60;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34_61__$1)){
var c__22846__auto___62 = cljs.core.chunk_first.call(null,seq__34_61__$1);
var G__63 = cljs.core.chunk_rest.call(null,seq__34_61__$1);
var G__64 = c__22846__auto___62;
var G__65 = cljs.core.count.call(null,c__22846__auto___62);
var G__66 = (0);
seq__34_51 = G__63;
chunk__35_52 = G__64;
count__36_53 = G__65;
i__37_54 = G__66;
continue;
} else {
var f_67 = cljs.core.first.call(null,seq__34_61__$1);
cljs.core.async.impl.dispatch.run.call(null,f_67);

var G__68 = cljs.core.next.call(null,seq__34_61__$1);
var G__69 = null;
var G__70 = (0);
var G__71 = (0);
seq__34_51 = G__68;
chunk__35_52 = G__69;
count__36_53 = G__70;
i__37_54 = G__71;
continue;
}
} else {
}
}
break;
}
} else {
}

return cljs.core.async.impl.channels.box.call(null,true);
} else {
var taker = (function (){while(true){
var taker = self__.takes.pop();
if(cljs.core.truth_(taker)){
if(cljs.core.truth_(cljs.core.async.impl.protocols.active_QMARK_.call(null,taker))){
return taker;
} else {
continue;
}
} else {
return null;
}
break;
}
})();
if(cljs.core.truth_(taker)){
var take_cb = cljs.core.async.impl.protocols.commit.call(null,taker);
cljs.core.async.impl.protocols.commit.call(null,handler);

cljs.core.async.impl.dispatch.run.call(null,((function (take_cb,taker,closed__$1,this$__$1){
return (function (){
return take_cb.call(null,val);
});})(take_cb,taker,closed__$1,this$__$1))
);

return cljs.core.async.impl.channels.box.call(null,true);
} else {
if((self__.dirty_puts > (64))){
self__.dirty_puts = (0);

self__.puts.cleanup(cljs.core.async.impl.channels.put_active_QMARK_);
} else {
self__.dirty_puts = (self__.dirty_puts + (1));
}

if(cljs.core.truth_(cljs.core.async.impl.protocols.blockable_QMARK_.call(null,handler))){
if((self__.puts.length < (1024))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["No more than ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((1024))," pending puts are allowed on a single channel."," Consider using a windowed buffer."].join('')),"\n","(< (.-length puts) impl/MAX-QUEUE-SIZE)"].join('')));
}

self__.puts.unbounded_unshift((new cljs.core.async.impl.channels.PutBox(handler,val)));
} else {
}

return null;
}
}
}
});

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (this$,handler){
var self__ = this;
var this$__$1 = this;
if(!(cljs.core.async.impl.protocols.active_QMARK_.call(null,handler))){
return null;
} else {
if((!((self__.buf == null))) && ((cljs.core.count.call(null,self__.buf) > (0)))){
var temp__20271__auto__ = cljs.core.async.impl.protocols.commit.call(null,handler);
if(cljs.core.truth_(temp__20271__auto__)){
var take_cb = temp__20271__auto__;
var val = cljs.core.async.impl.protocols.remove_BANG_.call(null,self__.buf);
var vec__38 = (((self__.puts.length > (0)))?(function (){var cbs = cljs.core.PersistentVector.EMPTY;
while(true){
var putter = self__.puts.pop();
var put_handler = putter.handler;
var val__$1 = putter.val;
var cb = (function (){var and__20896__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,put_handler);
if(and__20896__auto__){
return cljs.core.async.impl.protocols.commit.call(null,put_handler);
} else {
return and__20896__auto__;
}
})();
var cbs__$1 = (cljs.core.truth_(cb)?cljs.core.conj.call(null,cbs,cb):cbs);
var done_QMARK_ = (cljs.core.truth_(cb)?cljs.core.reduced_QMARK_.call(null,self__.add_BANG_.call(null,self__.buf,val__$1)):null);
if((cljs.core.not.call(null,done_QMARK_)) && (cljs.core.not.call(null,cljs.core.async.impl.protocols.full_QMARK_.call(null,self__.buf))) && ((self__.puts.length > (0)))){
var G__72 = cbs__$1;
cbs = G__72;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [done_QMARK_,cbs__$1], null);
}
break;
}
})():null);
var done_QMARK_ = cljs.core.nth.call(null,vec__38,(0),null);
var cbs = cljs.core.nth.call(null,vec__38,(1),null);
if(cljs.core.truth_(done_QMARK_)){
cljs.core.async.impl.channels.abort.call(null,this$__$1);
} else {
}

var seq__41_73 = cljs.core.seq.call(null,cbs);
var chunk__42_74 = null;
var count__43_75 = (0);
var i__44_76 = (0);
while(true){
if((i__44_76 < count__43_75)){
var cb_77 = cljs.core._nth.call(null,chunk__42_74,i__44_76);
cljs.core.async.impl.dispatch.run.call(null,((function (seq__41_73,chunk__42_74,count__43_75,i__44_76,cb_77,val,vec__38,done_QMARK_,cbs,take_cb,temp__20271__auto__,this$__$1){
return (function (){
return cb_77.call(null,true);
});})(seq__41_73,chunk__42_74,count__43_75,i__44_76,cb_77,val,vec__38,done_QMARK_,cbs,take_cb,temp__20271__auto__,this$__$1))
);

var G__78 = seq__41_73;
var G__79 = chunk__42_74;
var G__80 = count__43_75;
var G__81 = (i__44_76 + (1));
seq__41_73 = G__78;
chunk__42_74 = G__79;
count__43_75 = G__80;
i__44_76 = G__81;
continue;
} else {
var temp__20428__auto___82 = cljs.core.seq.call(null,seq__41_73);
if(temp__20428__auto___82){
var seq__41_83__$1 = temp__20428__auto___82;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41_83__$1)){
var c__22846__auto___84 = cljs.core.chunk_first.call(null,seq__41_83__$1);
var G__85 = cljs.core.chunk_rest.call(null,seq__41_83__$1);
var G__86 = c__22846__auto___84;
var G__87 = cljs.core.count.call(null,c__22846__auto___84);
var G__88 = (0);
seq__41_73 = G__85;
chunk__42_74 = G__86;
count__43_75 = G__87;
i__44_76 = G__88;
continue;
} else {
var cb_89 = cljs.core.first.call(null,seq__41_83__$1);
cljs.core.async.impl.dispatch.run.call(null,((function (seq__41_73,chunk__42_74,count__43_75,i__44_76,cb_89,seq__41_83__$1,temp__20428__auto___82,val,vec__38,done_QMARK_,cbs,take_cb,temp__20271__auto__,this$__$1){
return (function (){
return cb_89.call(null,true);
});})(seq__41_73,chunk__42_74,count__43_75,i__44_76,cb_89,seq__41_83__$1,temp__20428__auto___82,val,vec__38,done_QMARK_,cbs,take_cb,temp__20271__auto__,this$__$1))
);

var G__90 = cljs.core.next.call(null,seq__41_83__$1);
var G__91 = null;
var G__92 = (0);
var G__93 = (0);
seq__41_73 = G__90;
chunk__42_74 = G__91;
count__43_75 = G__92;
i__44_76 = G__93;
continue;
}
} else {
}
}
break;
}

return cljs.core.async.impl.channels.box.call(null,val);
} else {
return null;
}
} else {
var putter = (function (){while(true){
var putter = self__.puts.pop();
if(cljs.core.truth_(putter)){
if(cljs.core.async.impl.protocols.active_QMARK_.call(null,putter.handler)){
return putter;
} else {
continue;
}
} else {
return null;
}
break;
}
})();
if(cljs.core.truth_(putter)){
var put_cb = cljs.core.async.impl.protocols.commit.call(null,putter.handler);
cljs.core.async.impl.protocols.commit.call(null,handler);

cljs.core.async.impl.dispatch.run.call(null,((function (put_cb,putter,this$__$1){
return (function (){
return put_cb.call(null,true);
});})(put_cb,putter,this$__$1))
);

return cljs.core.async.impl.channels.box.call(null,putter.val);
} else {
if(cljs.core.truth_(self__.closed)){
if(cljs.core.truth_(self__.buf)){
self__.add_BANG_.call(null,self__.buf);
} else {
}

if(cljs.core.truth_((function (){var and__20896__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,handler);
if(cljs.core.truth_(and__20896__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,handler);
} else {
return and__20896__auto__;
}
})())){
var has_val = (function (){var and__20896__auto__ = self__.buf;
if(cljs.core.truth_(and__20896__auto__)){
return (cljs.core.count.call(null,self__.buf) > (0));
} else {
return and__20896__auto__;
}
})();
var val = (cljs.core.truth_(has_val)?cljs.core.async.impl.protocols.remove_BANG_.call(null,self__.buf):null);
return cljs.core.async.impl.channels.box.call(null,val);
} else {
return null;
}
} else {
if((self__.dirty_takes > (64))){
self__.dirty_takes = (0);

self__.takes.cleanup(cljs.core.async.impl.protocols.active_QMARK_);
} else {
self__.dirty_takes = (self__.dirty_takes + (1));
}

if(cljs.core.truth_(cljs.core.async.impl.protocols.blockable_QMARK_.call(null,handler))){
if((self__.takes.length < (1024))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["No more than ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((1024))," pending takes are allowed on a single channel."].join('')),"\n","(< (.-length takes) impl/MAX-QUEUE-SIZE)"].join('')));
}

self__.takes.unbounded_unshift(handler);
} else {
}

return null;
}
}
}
}
});

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.closed;
});

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(self__.closed){
return null;
} else {
self__.closed = true;

if(cljs.core.truth_((function (){var and__20896__auto__ = self__.buf;
if(cljs.core.truth_(and__20896__auto__)){
return (self__.puts.length === (0));
} else {
return and__20896__auto__;
}
})())){
self__.add_BANG_.call(null,self__.buf);
} else {
}

while(true){
var taker_94 = self__.takes.pop();
if((taker_94 == null)){
} else {
if(cljs.core.async.impl.protocols.active_QMARK_.call(null,taker_94)){
var take_cb_95 = cljs.core.async.impl.protocols.commit.call(null,taker_94);
var val_96 = (cljs.core.truth_((function (){var and__20896__auto__ = self__.buf;
if(cljs.core.truth_(and__20896__auto__)){
return (cljs.core.count.call(null,self__.buf) > (0));
} else {
return and__20896__auto__;
}
})())?cljs.core.async.impl.protocols.remove_BANG_.call(null,self__.buf):null);
cljs.core.async.impl.dispatch.run.call(null,((function (take_cb_95,val_96,taker_94,this$__$1){
return (function (){
return take_cb_95.call(null,val_96);
});})(take_cb_95,val_96,taker_94,this$__$1))
);
} else {
}

continue;
}
break;
}

if(cljs.core.truth_(self__.buf)){
cljs.core.async.impl.protocols.close_buf_BANG_.call(null,self__.buf);
} else {
}

return null;
}
});

cljs.core.async.impl.channels.ManyToManyChannel.getBasis = (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"takes","takes",(298247964),null),cljs.core.with_meta(new cljs.core.Symbol(null,"dirty-takes","dirty-takes",(575642138),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",(875778266)),true], null)),new cljs.core.Symbol(null,"puts","puts",(-1883877054),null),cljs.core.with_meta(new cljs.core.Symbol(null,"dirty-puts","dirty-puts",(57041148),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",(875778266)),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"buf","buf",(1426618187),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Symbol(null,"not-native","not-native",(-236392494),null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"closed","closed",(720856168),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",(875778266)),true], null)),new cljs.core.Symbol(null,"add!","add!",(2046056845),null)], null);
});

cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$type = true;

cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$ctorStr = "cljs.core.async.impl.channels/ManyToManyChannel";

cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$ctorPrWriter = (function (this__22617__auto__,writer__22618__auto__,opt__22619__auto__){
return cljs.core._write.call(null,writer__22618__auto__,"cljs.core.async.impl.channels/ManyToManyChannel");
});

cljs.core.async.impl.channels.__GT_ManyToManyChannel = (function cljs$core$async$impl$channels$__GT_ManyToManyChannel(takes,dirty_takes,puts,dirty_puts,buf,closed,add_BANG_){
return (new cljs.core.async.impl.channels.ManyToManyChannel(takes,dirty_takes,puts,dirty_puts,buf,closed,add_BANG_));
});

cljs.core.async.impl.channels.ex_handler = (function cljs$core$async$impl$channels$ex_handler(ex){
console.log(ex);

return null;
});
cljs.core.async.impl.channels.handle = (function cljs$core$async$impl$channels$handle(buf,exh,t){
var else$ = (function (){var or__20917__auto__ = exh;
if(cljs.core.truth_(or__20917__auto__)){
return or__20917__auto__;
} else {
return cljs.core.async.impl.channels.ex_handler;
}
})().call(null,t);
if((else$ == null)){
return buf;
} else {
return cljs.core.async.impl.protocols.add_BANG_.call(null,buf,else$);
}
});
cljs.core.async.impl.channels.chan = (function cljs$core$async$impl$channels$chan(var_args){
var G__98 = arguments.length;
switch (G__98) {
case (1):
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case (2):
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case (3):
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf){
return cljs.core.async.impl.channels.chan.call(null,buf,null);
});

cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf,xform){
return cljs.core.async.impl.channels.chan.call(null,buf,xform,null);
});

cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf,xform,exh){
return (new cljs.core.async.impl.channels.ManyToManyChannel(cljs.core.async.impl.buffers.ring_buffer.call(null,(32)),(0),cljs.core.async.impl.buffers.ring_buffer.call(null,(32)),(0),buf,false,(function (){var add_BANG_ = (cljs.core.truth_(xform)?xform.call(null,cljs.core.async.impl.protocols.add_BANG_):cljs.core.async.impl.protocols.add_BANG_);
return ((function (add_BANG_){
return (function() {
var G__102 = null;
var G__102__1 = (function (buf__$1){
try{return add_BANG_.call(null,buf__$1);
}catch (e99){var t = e99;
return cljs.core.async.impl.channels.handle.call(null,buf__$1,exh,t);
}});
var G__102__2 = (function (buf__$1,val){
try{return add_BANG_.call(null,buf__$1,val);
}catch (e100){var t = e100;
return cljs.core.async.impl.channels.handle.call(null,buf__$1,exh,t);
}});
G__102 = function(buf__$1,val){
switch(arguments.length){
case 1:
return G__102__1.call(this,buf__$1);
case 2:
return G__102__2.call(this,buf__$1,val);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__102.cljs$core$IFn$_invoke$arity$1 = G__102__1;
G__102.cljs$core$IFn$_invoke$arity$2 = G__102__2;
return G__102;
})()
;})(add_BANG_))
})()));
});

cljs.core.async.impl.channels.chan.cljs$lang$maxFixedArity = (3);

