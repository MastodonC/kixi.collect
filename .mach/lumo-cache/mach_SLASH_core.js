goog.provide("mach.core");
if(typeof mach.core.st !== 'undefined'){
} else {
mach.core.st = cljs.js.empty_state.call(null);
}
mach.core.toposort = cljs.nodejs.require.call(null,"toposort");
mach.core.path = cljs.nodejs.require.call(null,"path");
mach.core.temp = cljs.nodejs.require.call(null,"tmp");
mach.core.yargs = cljs.nodejs.require.call(null,"yargs");
mach.core.process = cljs.nodejs.require.call(null,"process");
mach.core.target_order = (function mach$core$target_order(machfile,target_name){
return cljs.core.map.call(null,cljs.core.symbol,cljs.core.drop.call(null,(1),cljs.core.js__GT_clj.call(null,mach.core.toposort.call(null,cljs.core.clj__GT_js.call(null,cljs.core.tree_seq.call(null,(function (p__2805){
var vec__2806 = p__2805;
var _ = cljs.core.nth.call(null,vec__2806,(0),null);
var target_name__$1 = cljs.core.nth.call(null,vec__2806,(1),null);
return cljs.core.get.call(null,cljs.core.get.call(null,machfile,target_name__$1),new cljs.core.Symbol(null,"depends","depends",(423691110),null));
}),(function (p__2809){
var vec__2810 = p__2809;
var _ = cljs.core.nth.call(null,vec__2810,(0),null);
var target_name__$1 = cljs.core.nth.call(null,vec__2810,(1),null);
return cljs.core.map.call(null,cljs.core.vector,cljs.core.repeat.call(null,target_name__$1),cljs.core.get.call(null,cljs.core.get.call(null,machfile,target_name__$1),new cljs.core.Symbol(null,"depends","depends",(423691110),null)));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,target_name], null)))))));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
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
mach.core.Reference = (function (path,__meta,__extmap,__hash){
this.path = path;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = -2065299702;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
mach.core.Reference.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__22643__auto__,k__22644__auto__){
var self__ = this;
var this__22643__auto____$1 = this;
return this__22643__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__22644__auto__,null);
});

mach.core.Reference.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__22645__auto__,k2814,else__22646__auto__){
var self__ = this;
var this__22645__auto____$1 = this;
var G__2818 = k2814;
var G__2818__$1 = (((G__2818 instanceof cljs.core.Keyword))?G__2818.fqn:null);
switch (G__2818__$1) {
case "path":
return self__.path;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k2814,else__22646__auto__);

}
});

mach.core.Reference.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__22657__auto__,writer__22658__auto__,opts__22659__auto__){
var self__ = this;
var this__22657__auto____$1 = this;
var pr_pair__22660__auto__ = ((function (this__22657__auto____$1){
return (function (keyval__22661__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__22658__auto__,cljs.core.pr_writer,""," ","",opts__22659__auto__,keyval__22661__auto__);
});})(this__22657__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__22658__auto__,pr_pair__22660__auto__,"#mach.core.Reference{",", ","}",opts__22659__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"path","path",(-188191168)),self__.path],null))], null),self__.__extmap));
});

mach.core.Reference.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__2813){
var self__ = this;
var G__2813__$1 = this;
return (new cljs.core.RecordIter((0),G__2813__$1,(1),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",(-188191168))], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

mach.core.Reference.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__22641__auto__){
var self__ = this;
var this__22641__auto____$1 = this;
return self__.__meta;
});

mach.core.Reference.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__22638__auto__){
var self__ = this;
var this__22638__auto____$1 = this;
return (new mach.core.Reference(self__.path,self__.__meta,self__.__extmap,self__.__hash));
});

mach.core.Reference.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__22647__auto__){
var self__ = this;
var this__22647__auto____$1 = this;
return ((1) + cljs.core.count.call(null,self__.__extmap));
});

mach.core.Reference.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__22639__auto__){
var self__ = this;
var this__22639__auto____$1 = this;
var h__22078__auto__ = self__.__hash;
if(!((h__22078__auto__ == null))){
return h__22078__auto__;
} else {
var h__22078__auto____$1 = ((function (h__22078__auto__,this__22639__auto____$1){
return (function (coll__22640__auto__){
return ((-1257362266) ^ cljs.core.hash_unordered_coll.call(null,coll__22640__auto__));
});})(h__22078__auto__,this__22639__auto____$1))
.call(null,this__22639__auto____$1);
self__.__hash = h__22078__auto____$1;

return h__22078__auto____$1;
}
});

mach.core.Reference.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this2815,other2816){
var self__ = this;
var this2815__$1 = this;
return (!((other2816 == null))) && ((this2815__$1.constructor === other2816.constructor)) && (cljs.core._EQ_.call(null,this2815__$1.path,other2816.path)) && (cljs.core._EQ_.call(null,this2815__$1.__extmap,other2816.__extmap));
});

mach.core.Reference.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__22652__auto__,k__22653__auto__){
var self__ = this;
var this__22652__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",(-188191168)),null], null), null),k__22653__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__22652__auto____$1),self__.__meta),k__22653__auto__);
} else {
return (new mach.core.Reference(self__.path,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__22653__auto__)),null));
}
});

mach.core.Reference.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__22650__auto__,k__22651__auto__,G__2813){
var self__ = this;
var this__22650__auto____$1 = this;
var pred__2819 = cljs.core.keyword_identical_QMARK_;
var expr__2820 = k__22651__auto__;
if(cljs.core.truth_(pred__2819.call(null,new cljs.core.Keyword(null,"path","path",(-188191168)),expr__2820))){
return (new mach.core.Reference(G__2813,self__.__meta,self__.__extmap,null));
} else {
return (new mach.core.Reference(self__.path,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__22651__auto__,G__2813),null));
}
});

mach.core.Reference.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__22655__auto__){
var self__ = this;
var this__22655__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"path","path",(-188191168)),self__.path],null))], null),self__.__extmap));
});

mach.core.Reference.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__22642__auto__,G__2813){
var self__ = this;
var this__22642__auto____$1 = this;
return (new mach.core.Reference(self__.path,G__2813,self__.__extmap,self__.__hash));
});

mach.core.Reference.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__22648__auto__,entry__22649__auto__){
var self__ = this;
var this__22648__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__22649__auto__)){
return this__22648__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__22649__auto__,(0)),cljs.core._nth.call(null,entry__22649__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__22648__auto____$1,entry__22649__auto__);
}
});

mach.core.Reference.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",(1452340359),null)], null);
});

mach.core.Reference.cljs$lang$type = true;

mach.core.Reference.cljs$lang$ctorPrSeq = (function (this__22665__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"mach.core/Reference");
});

mach.core.Reference.cljs$lang$ctorPrWriter = (function (this__22665__auto__,writer__22666__auto__){
return cljs.core._write.call(null,writer__22666__auto__,"mach.core/Reference");
});

mach.core.__GT_Reference = (function mach$core$__GT_Reference(path){
return (new mach.core.Reference(path,null,null,null));
});

mach.core.map__GT_Reference = (function mach$core$map__GT_Reference(G__2817){
return (new mach.core.Reference(new cljs.core.Keyword(null,"path","path",(-188191168)).cljs$core$IFn$_invoke$arity$1(G__2817),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__2817,new cljs.core.Keyword(null,"path","path",(-188191168)))),null));
});

mach.core.read_reference = (function mach$core$read_reference(path){
return mach.core.__GT_Reference.call(null,path);
});
cljs.reader.register_tag_parser_BANG_.call(null,new cljs.core.Symbol(null,"ref","ref",(-1364538802),null),mach.core.read_reference);
mach.core.fs = cljs.nodejs.require.call(null,"fs");
mach.core.child_process = cljs.nodejs.require.call(null,"child_process");
mach.core.constants = cljs.nodejs.require.call(null,"constants");
mach.core.file_exists_QMARK_ = (function mach$core$file_exists_QMARK_(f){
return mach.core.fs.existsSync.call(null,f);
});
mach.core.last_modified = (function mach$core$last_modified(f){
if(cljs.core.truth_((function (){var and__20896__auto__ = f;
if(cljs.core.truth_(and__20896__auto__)){
return mach.core.file_exists_QMARK_.call(null,f);
} else {
return and__20896__auto__;
}
})())){
return mach.core.fs.statSync.call(null,f).mtime.getTime();
} else {
return (0);
}
});
mach.core.modified_since_QMARK_ = (function mach$core$modified_since_QMARK_(since,f){
return (since < mach.core.last_modified.call(null,f));
});
mach.core.mkdir = (function mach$core$mkdir(path){
return mach.core.fs.mkdirSync.call(null,path);
});
mach.core.dir_QMARK_ = (function mach$core$dir_QMARK_(f){
var and__20896__auto__ = mach.core.file_exists_QMARK_.call(null,f);
if(cljs.core.truth_(and__20896__auto__)){
return mach.core.fs.lstatSync(f).isDirectory();
} else {
return and__20896__auto__;
}
});
mach.core.file_QMARK_ = (function mach$core$file_QMARK_(f){
return mach.core.fs.lstatSync(f).isFile();
});
mach.core.files = (function mach$core$files(var_args){
var G__2824 = arguments.length;
switch (G__2824) {
case (1):
return mach.core.files.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case (0):
return mach.core.files.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

mach.core.files.cljs$core$IFn$_invoke$arity$1 = (function (dir){
if(cljs.core.truth_(mach.core.dir_QMARK_.call(null,dir))){
return cljs.core.seq.call(null,mach.core.fs.readdirSync.call(null,dir));
} else {
return null;
}
});

mach.core.files.cljs$core$IFn$_invoke$arity$0 = (function (){
return mach.core.files.call(null,".");
});

mach.core.files.cljs$lang$maxFixedArity = (1);

mach.core.has_suffix = (function mach$core$has_suffix(suffix){
return (function (p1__18_SHARP_){
return p1__18_SHARP_.endsWith(suffix);
});
});
mach.core.file_seq = (function mach$core$file_seq(dir){
if(cljs.core.truth_(mach.core.fs.existsSync.call(null,dir))){
return cljs.core.tree_seq.call(null,mach.core.dir_QMARK_,(function (d){
return cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.str,d,"/"),cljs.core.seq.call(null,mach.core.fs.readdirSync.call(null,d)));
}),dir);
} else {
return cljs.core.PersistentVector.EMPTY;
}
});
mach.core.ensure_mach_dir_exists = (function mach$core$ensure_mach_dir_exists(){
if(cljs.core.truth_(mach.core.fs.existsSync.call(null,".mach"))){
return null;
} else {
return mach.core.fs.mkdirSync.call(null,".mach",(484));
}
});
mach.core.ensure_mach_extensions_dir_exists = (function mach$core$ensure_mach_extensions_dir_exists(){
mach.core.ensure_mach_dir_exists.call(null);

if(cljs.core.truth_(mach.core.fs.existsSync.call(null,".mach/extensions"))){
return null;
} else {
return mach.core.fs.mkdirSync.call(null,".mach/extensions",(484));
}
});
mach.core.modified_since = (function mach$core$modified_since(anchor,source){
return cljs.core.filter.call(null,cljs.core.partial.call(null,mach.core.modified_since_QMARK_,cljs.core.apply.call(null,cljs.core.max,cljs.core.conj.call(null,cljs.core.map.call(null,mach.core.last_modified,cljs.core.filter.call(null,mach.core.file_QMARK_,mach.core.file_seq.call(null,anchor))),(0)))),cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,mach.core.dir_QMARK_),((cljs.core.coll_QMARK_.call(null,source))?cljs.core.mapcat.call(null,mach.core.file_seq,source):mach.core.file_seq.call(null,source))));
});
mach.core.sh = (function mach$core$sh(var_args){
var G__2827 = arguments.length;
switch (G__2827) {
case (1):
return mach.core.sh.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case (2):
return mach.core.sh.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

mach.core.sh.cljs$core$IFn$_invoke$arity$1 = (function (args){
return mach.core.sh.call(null,args,cljs.core.PersistentArrayMap.EMPTY);
});

mach.core.sh.cljs$core$IFn$_invoke$arity$2 = (function (args,p__2828){
var map__2829 = p__2828;
var map__2829__$1 = ((((!((map__2829 == null)))?((((map__2829.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2829.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__2829):map__2829);
var opts = map__2829__$1;
var quiet = cljs.core.get.call(null,map__2829__$1,new cljs.core.Keyword(null,"quiet","quiet",(-1217179100)));
var c__8__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8__auto__,map__2829,map__2829__$1,opts,quiet){
return (function (){
var f__9__auto__ = (function (){var switch__3__auto__ = ((function (c__8__auto__,map__2829,map__2829__$1,opts,quiet){
return (function (state_2851){
var state_val_2852 = (state_2851[(1)]);
if((state_val_2852 === (1))){
var inst_2831 = cljs.core.flatten.call(null,args);
var inst_2832 = cljs.core.apply.call(null,cljs.core.println,"$",inst_2831);
var inst_2833 = Buffer.alloc((0));
var inst_2834 = cljs.core.atom.call(null,inst_2833);
var inst_2835 = cljs.core.first.call(null,inst_2831);
var inst_2836 = cljs.core.rest.call(null,inst_2831);
var inst_2837 = cljs.core.clj__GT_js.call(null,inst_2836);
var inst_2838 = mach.core.child_process.spawn(inst_2835,inst_2837,({"shell": true}));
var inst_2839 = cljs.core.async.chan.call(null);
var inst_2840 = inst_2838.stdout;
var inst_2841 = (function (){var args__$1 = inst_2831;
var _ = inst_2832;
var b = inst_2834;
var cp = inst_2838;
var c = inst_2839;
return ((function (args__$1,_,b,cp,c,inst_2831,inst_2832,inst_2833,inst_2834,inst_2835,inst_2836,inst_2837,inst_2838,inst_2839,inst_2840,state_val_2852,c__8__auto__,map__2829,map__2829__$1,opts,quiet){
return (function (d){
if(cljs.core.truth_(quiet)){
} else {
mach.core.process.stdout.write(d);
}

return cljs.core.swap_BANG_.call(null,b,((function (args__$1,_,b,cp,c,inst_2831,inst_2832,inst_2833,inst_2834,inst_2835,inst_2836,inst_2837,inst_2838,inst_2839,inst_2840,state_val_2852,c__8__auto__,map__2829,map__2829__$1,opts,quiet){
return (function (p1__19_SHARP_){
return Buffer.concat(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__19_SHARP_,d], null)));
});})(args__$1,_,b,cp,c,inst_2831,inst_2832,inst_2833,inst_2834,inst_2835,inst_2836,inst_2837,inst_2838,inst_2839,inst_2840,state_val_2852,c__8__auto__,map__2829,map__2829__$1,opts,quiet))
);
});
;})(args__$1,_,b,cp,c,inst_2831,inst_2832,inst_2833,inst_2834,inst_2835,inst_2836,inst_2837,inst_2838,inst_2839,inst_2840,state_val_2852,c__8__auto__,map__2829,map__2829__$1,opts,quiet))
})();
var inst_2842 = inst_2840.on("data",inst_2841);
var inst_2843 = inst_2838.stderr;
var inst_2844 = (function (){var args__$1 = inst_2831;
var _ = inst_2832;
var b = inst_2834;
var cp = inst_2838;
var c = inst_2839;
return ((function (args__$1,_,b,cp,c,inst_2831,inst_2832,inst_2833,inst_2834,inst_2835,inst_2836,inst_2837,inst_2838,inst_2839,inst_2840,inst_2841,inst_2842,inst_2843,state_val_2852,c__8__auto__,map__2829,map__2829__$1,opts,quiet){
return (function (d){
return mach.core.process.stderr.write(d);
});
;})(args__$1,_,b,cp,c,inst_2831,inst_2832,inst_2833,inst_2834,inst_2835,inst_2836,inst_2837,inst_2838,inst_2839,inst_2840,inst_2841,inst_2842,inst_2843,state_val_2852,c__8__auto__,map__2829,map__2829__$1,opts,quiet))
})();
var inst_2845 = inst_2843.on("data",inst_2844);
var inst_2846 = (function (){var args__$1 = inst_2831;
var _ = inst_2832;
var b = inst_2834;
var cp = inst_2838;
var c = inst_2839;
return ((function (args__$1,_,b,cp,c,inst_2831,inst_2832,inst_2833,inst_2834,inst_2835,inst_2836,inst_2837,inst_2838,inst_2839,inst_2840,inst_2841,inst_2842,inst_2843,inst_2844,inst_2845,state_val_2852,c__8__auto__,map__2829,map__2829__$1,opts,quiet){
return (function (d){
var c__8__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8__auto____$1,args__$1,_,b,cp,c,inst_2831,inst_2832,inst_2833,inst_2834,inst_2835,inst_2836,inst_2837,inst_2838,inst_2839,inst_2840,inst_2841,inst_2842,inst_2843,inst_2844,inst_2845,state_val_2852,c__8__auto__,map__2829,map__2829__$1,opts,quiet){
return (function (){
var f__9__auto__ = (function (){var switch__3__auto__ = ((function (c__8__auto____$1,args__$1,_,b,cp,c,inst_2831,inst_2832,inst_2833,inst_2834,inst_2835,inst_2836,inst_2837,inst_2838,inst_2839,inst_2840,inst_2841,inst_2842,inst_2843,inst_2844,inst_2845,state_val_2852,c__8__auto__,map__2829,map__2829__$1,opts,quiet){
return (function (state_2859){
var state_val_2860 = (state_2859[(1)]);
if((state_val_2860 === (1))){
var inst_2853 = cljs.core.deref.call(null,b);
var inst_2854 = inst_2853.toString();
var inst_2855 = inst_2854.trim();
var state_2859__$1 = state_2859;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_2859__$1,(2),c,inst_2855);
} else {
if((state_val_2860 === (2))){
var inst_2857 = (state_2859[(2)]);
var state_2859__$1 = state_2859;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_2859__$1,inst_2857);
} else {
return null;
}
}
});})(c__8__auto____$1,args__$1,_,b,cp,c,inst_2831,inst_2832,inst_2833,inst_2834,inst_2835,inst_2836,inst_2837,inst_2838,inst_2839,inst_2840,inst_2841,inst_2842,inst_2843,inst_2844,inst_2845,state_val_2852,c__8__auto__,map__2829,map__2829__$1,opts,quiet))
;
return ((function (switch__3__auto__,c__8__auto____$1,args__$1,_,b,cp,c,inst_2831,inst_2832,inst_2833,inst_2834,inst_2835,inst_2836,inst_2837,inst_2838,inst_2839,inst_2840,inst_2841,inst_2842,inst_2843,inst_2844,inst_2845,state_val_2852,c__8__auto__,map__2829,map__2829__$1,opts,quiet){
return (function() {
var mach$core$state_machine__4__auto__ = null;
var mach$core$state_machine__4__auto____0 = (function (){
var statearr_2861 = [null,null,null,null,null,null,null];
(statearr_2861[(0)] = mach$core$state_machine__4__auto__);

(statearr_2861[(1)] = (1));

return statearr_2861;
});
var mach$core$state_machine__4__auto____1 = (function (state_2859){
while(true){
var ret_value__5__auto__ = (function (){try{while(true){
var result__6__auto__ = switch__3__auto__.call(null,state_2859);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
continue;
} else {
return result__6__auto__;
}
break;
}
}catch (e2862){if((e2862 instanceof Object)){
var ex__7__auto__ = e2862;
var statearr_2863_2871 = state_2859;
(statearr_2863_2871[(5)] = ex__7__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_2859);

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
throw e2862;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
var G__2872 = state_2859;
state_2859 = G__2872;
continue;
} else {
return ret_value__5__auto__;
}
break;
}
});
mach$core$state_machine__4__auto__ = function(state_2859){
switch(arguments.length){
case 0:
return mach$core$state_machine__4__auto____0.call(this);
case 1:
return mach$core$state_machine__4__auto____1.call(this,state_2859);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
mach$core$state_machine__4__auto__.cljs$core$IFn$_invoke$arity$0 = mach$core$state_machine__4__auto____0;
mach$core$state_machine__4__auto__.cljs$core$IFn$_invoke$arity$1 = mach$core$state_machine__4__auto____1;
return mach$core$state_machine__4__auto__;
})()
;})(switch__3__auto__,c__8__auto____$1,args__$1,_,b,cp,c,inst_2831,inst_2832,inst_2833,inst_2834,inst_2835,inst_2836,inst_2837,inst_2838,inst_2839,inst_2840,inst_2841,inst_2842,inst_2843,inst_2844,inst_2845,state_val_2852,c__8__auto__,map__2829,map__2829__$1,opts,quiet))
})();
var state__10__auto__ = (function (){var statearr_2864 = f__9__auto__.call(null);
(statearr_2864[(6)] = c__8__auto____$1);

return statearr_2864;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10__auto__);
});})(c__8__auto____$1,args__$1,_,b,cp,c,inst_2831,inst_2832,inst_2833,inst_2834,inst_2835,inst_2836,inst_2837,inst_2838,inst_2839,inst_2840,inst_2841,inst_2842,inst_2843,inst_2844,inst_2845,state_val_2852,c__8__auto__,map__2829,map__2829__$1,opts,quiet))
);

return c__8__auto____$1;
});
;})(args__$1,_,b,cp,c,inst_2831,inst_2832,inst_2833,inst_2834,inst_2835,inst_2836,inst_2837,inst_2838,inst_2839,inst_2840,inst_2841,inst_2842,inst_2843,inst_2844,inst_2845,state_val_2852,c__8__auto__,map__2829,map__2829__$1,opts,quiet))
})();
var inst_2847 = inst_2838.on("close",inst_2846);
var state_2851__$1 = (function (){var statearr_2865 = state_2851;
(statearr_2865[(7)] = inst_2842);

(statearr_2865[(8)] = inst_2845);

(statearr_2865[(9)] = inst_2847);

return statearr_2865;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_2851__$1,(2),inst_2839);
} else {
if((state_val_2852 === (2))){
var inst_2849 = (state_2851[(2)]);
var state_2851__$1 = state_2851;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_2851__$1,inst_2849);
} else {
return null;
}
}
});})(c__8__auto__,map__2829,map__2829__$1,opts,quiet))
;
return ((function (switch__3__auto__,c__8__auto__,map__2829,map__2829__$1,opts,quiet){
return (function() {
var mach$core$state_machine__4__auto__ = null;
var mach$core$state_machine__4__auto____0 = (function (){
var statearr_2866 = [null,null,null,null,null,null,null,null,null,null];
(statearr_2866[(0)] = mach$core$state_machine__4__auto__);

(statearr_2866[(1)] = (1));

return statearr_2866;
});
var mach$core$state_machine__4__auto____1 = (function (state_2851){
while(true){
var ret_value__5__auto__ = (function (){try{while(true){
var result__6__auto__ = switch__3__auto__.call(null,state_2851);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
continue;
} else {
return result__6__auto__;
}
break;
}
}catch (e2867){if((e2867 instanceof Object)){
var ex__7__auto__ = e2867;
var statearr_2868_2873 = state_2851;
(statearr_2868_2873[(5)] = ex__7__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_2851);

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
throw e2867;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
var G__2874 = state_2851;
state_2851 = G__2874;
continue;
} else {
return ret_value__5__auto__;
}
break;
}
});
mach$core$state_machine__4__auto__ = function(state_2851){
switch(arguments.length){
case 0:
return mach$core$state_machine__4__auto____0.call(this);
case 1:
return mach$core$state_machine__4__auto____1.call(this,state_2851);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
mach$core$state_machine__4__auto__.cljs$core$IFn$_invoke$arity$0 = mach$core$state_machine__4__auto____0;
mach$core$state_machine__4__auto__.cljs$core$IFn$_invoke$arity$1 = mach$core$state_machine__4__auto____1;
return mach$core$state_machine__4__auto__;
})()
;})(switch__3__auto__,c__8__auto__,map__2829,map__2829__$1,opts,quiet))
})();
var state__10__auto__ = (function (){var statearr_2869 = f__9__auto__.call(null);
(statearr_2869[(6)] = c__8__auto__);

return statearr_2869;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10__auto__);
});})(c__8__auto__,map__2829,map__2829__$1,opts,quiet))
);

return c__8__auto__;
});

mach.core.sh.cljs$lang$maxFixedArity = (2);

mach.core.read_shell = (function mach$core$read_shell(vals){
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core.async","<!","cljs.core.async/<!",(1278951036),null)),(function (){var x__22880__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("mach.core","sh","mach.core/sh",(-1868010756),null)),(function (){var x__22880__auto__ = vals;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22880__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22880__auto__);
})()));
});
cljs.reader.register_tag_parser_BANG_.call(null,new cljs.core.Symbol(null,"$","$",(-1580747756),null),mach.core.read_shell);
mach.core.read_shell_apply = (function mach$core$read_shell_apply(vals){
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","when","cljs.core/when",(120293186),null)),(function (){var x__22880__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not-empty","cljs.core/not-empty",(540057011),null)),(function (){var x__22880__auto__ = vals;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22880__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22880__auto__);
})(),(function (){var x__22880__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core.async","<!","cljs.core.async/<!",(1278951036),null)),(function (){var x__22880__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("mach.core","sh","mach.core/sh",(-1868010756),null)),(function (){var x__22880__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",(-1133584918),null)),(function (){var x__22880__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","drop-last","cljs.core/drop-last",(1430579411),null)),(function (){var x__22880__auto__ = vals;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22880__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22880__auto__);
})(),(function (){var x__22880__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","last","cljs.core/last",(1273893704),null)),(function (){var x__22880__auto__ = vals;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22880__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22880__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22880__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22880__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22880__auto__);
})()));
});
cljs.reader.register_tag_parser_BANG_.call(null,new cljs.core.Symbol(null,"$$","$$",(-1388085599),null),mach.core.read_shell_apply);
mach.core.add_classpath_path_to_sources = (function mach$core$add_classpath_path_to_sources(cp_file){
lumo.classpath.add_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cp_file], null));

return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null)));
});
cljs.reader.register_tag_parser_BANG_.call(null,new cljs.core.Symbol(null,"cp","cp",(962092215),null),mach.core.add_classpath_path_to_sources);
mach.core.add_classpath_path_file_to_sources = (function mach$core$add_classpath_path_file_to_sources(cp_file){
lumo.classpath.add_BANG_.call(null,clojure.string.split.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(mach.core.fs.readFileSync.call(null,cp_file))].join(''),":"));

return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null)));
});
cljs.reader.register_tag_parser_BANG_.call(null,new cljs.core.Symbol(null,"cpfile","cpfile",(289711858),null),mach.core.add_classpath_path_file_to_sources);
mach.core.eval_cljs = (function mach$core$eval_cljs(cljs_file){
lumo.repl.execute.call(null,"file",cljs_file,true,true,null,(0));

return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null)));
});
cljs.reader.register_tag_parser_BANG_.call(null,new cljs.core.Symbol(null,"eval","eval",(536963622),null),mach.core.eval_cljs);
mach.core.extensions_cache = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
mach.core.load_fn = cljs.js._STAR_load_fn_STAR_;
mach.core.code_eval = (function mach$core$code_eval(code){
var _STAR_eval_fn_STAR_2875 = cljs.js._STAR_eval_fn_STAR_;
var _STAR_load_fn_STAR_2876 = cljs.js._STAR_load_fn_STAR_;
cljs.js._STAR_eval_fn_STAR_ = lumo.repl.caching_node_eval;

cljs.js._STAR_load_fn_STAR_ = mach.core.load_fn;

try{var map__2877 = cljs.js.eval.call(null,lumo.repl.st,code,cljs.core.identity);
var map__2877__$1 = ((((!((map__2877 == null)))?((((map__2877.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2877.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__2877):map__2877);
var res = map__2877__$1;
var value = cljs.core.get.call(null,map__2877__$1,new cljs.core.Keyword(null,"value","value",(305978217)));
var error = cljs.core.get.call(null,map__2877__$1,new cljs.core.Keyword(null,"error","error",(-978969032)));
if(cljs.core.truth_(error)){
throw (new Error(["Could not eval form ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(code),", got error: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(error)].join('')));
} else {
return value;
}
}finally {cljs.js._STAR_load_fn_STAR_ = _STAR_load_fn_STAR_2876;

cljs.js._STAR_eval_fn_STAR_ = _STAR_eval_fn_STAR_2875;
}});
/**
 * Look for the extensions file. If it's not found in the current directory we look recursively through parent directories.
 */
mach.core.find_extension_file = (function mach$core$find_extension_file(filename,dirs){
if((cljs.core.count.call(null,dirs) > (1))){
var or__20917__auto__ = (function (){var f = clojure.string.join.call(null,mach.core.path.sep,cljs.core.concat.call(null,dirs,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [filename], null)));
var and__20896__auto__ = mach.core.fs.existsSync.call(null,f);
if(cljs.core.truth_(and__20896__auto__)){
return f;
} else {
return and__20896__auto__;
}
})();
if(cljs.core.truth_(or__20917__auto__)){
return or__20917__auto__;
} else {
return mach.core.find_extension_file.call(null,filename,cljs.core.drop_last.call(null,dirs));
}
} else {
return null;
}
});
mach.core.read_extension_file = (function mach$core$read_extension_file(extension){
var temp__20428__auto__ = mach.core.find_extension_file.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(extension),".mach.edn"].join(''),clojure.string.split.call(null,mach.core.path.resolve.call(null,"."),mach.core.path.sep));
if(cljs.core.truth_(temp__20428__auto__)){
var extensions_file = temp__20428__auto__;
return cljs.reader.read_string.call(null,mach.core.fs.readFileSync.call(null,extensions_file,"utf-8"));
} else {
return null;
}
});
mach.core.fetch_extension_file = (function mach$core$fetch_extension_file(extension){
mach.core.ensure_mach_extensions_dir_exists.call(null);

var extensions_file = [".mach/extensions/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.hash.call(null,extension))].join('');
if(cljs.core.truth_(mach.core.fs.existsSync.call(null,extensions_file))){
} else {
var result_2879 = mach.core.child_process.spawnSync("curl",cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["-o",extensions_file,extension], null)),({"shell": true}));
if(cljs.core.truth_((function (){var and__20896__auto__ = cljs.core._EQ_.call(null,(0),result_2879.status);
if(and__20896__auto__){
return mach.core.fs.existsSync.call(null,extensions_file);
} else {
return and__20896__auto__;
}
})())){
} else {
cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(result_2879.stdout)].join(''));

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(result_2879.stderr)].join(''));

throw (new Error(["Could not fetch extension ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extensions_file)].join('')));
}
}

return cljs.reader.read_string.call(null,mach.core.fs.readFileSync.call(null,extensions_file,"utf-8"));
});
mach.core.load_extension_no_cache = (function mach$core$load_extension_no_cache(extension){
var c__8__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8__auto__){
return (function (){
var f__9__auto__ = (function (){var switch__3__auto__ = ((function (c__8__auto__){
return (function (state_2900){
var state_val_2901 = (state_2900[(1)]);
if((state_val_2901 === (1))){
var inst_2880 = (state_2900[(7)]);
var inst_2880__$1 = typeof extension === 'string';
var state_2900__$1 = (function (){var statearr_2902 = state_2900;
(statearr_2902[(7)] = inst_2880__$1);

return statearr_2902;
})();
if(cljs.core.truth_(inst_2880__$1)){
var statearr_2903_2919 = state_2900__$1;
(statearr_2903_2919[(1)] = (2));

} else {
var statearr_2904_2920 = state_2900__$1;
(statearr_2904_2920[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2901 === (2))){
var inst_2882 = cljs.core.re_find.call(null,/^https?:\/\/.*/,extension);
var state_2900__$1 = state_2900;
var statearr_2905_2921 = state_2900__$1;
(statearr_2905_2921[(2)] = inst_2882);

(statearr_2905_2921[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2901 === (3))){
var inst_2880 = (state_2900[(7)]);
var state_2900__$1 = state_2900;
var statearr_2906_2922 = state_2900__$1;
(statearr_2906_2922[(2)] = inst_2880);

(statearr_2906_2922[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2901 === (4))){
var inst_2885 = (state_2900[(2)]);
var state_2900__$1 = state_2900;
if(cljs.core.truth_(inst_2885)){
var statearr_2907_2923 = state_2900__$1;
(statearr_2907_2923[(1)] = (5));

} else {
var statearr_2908_2924 = state_2900__$1;
(statearr_2908_2924[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2901 === (5))){
var inst_2887 = mach.core.fetch_extension_file.call(null,extension);
var state_2900__$1 = state_2900;
var statearr_2909_2925 = state_2900__$1;
(statearr_2909_2925[(2)] = inst_2887);

(statearr_2909_2925[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2901 === (6))){
var state_2900__$1 = state_2900;
var statearr_2910_2926 = state_2900__$1;
(statearr_2910_2926[(1)] = (8));



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2901 === (7))){
var inst_2895 = (state_2900[(2)]);
var inst_2896 = mach.core.preprocess.call(null,inst_2895);
var state_2900__$1 = state_2900;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_2900__$1,(11),inst_2896);
} else {
if((state_val_2901 === (8))){
var inst_2890 = mach.core.read_extension_file.call(null,extension);
var state_2900__$1 = state_2900;
var statearr_2912_2927 = state_2900__$1;
(statearr_2912_2927[(2)] = inst_2890);

(statearr_2912_2927[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2901 === (9))){
var state_2900__$1 = state_2900;
var statearr_2913_2928 = state_2900__$1;
(statearr_2913_2928[(2)] = null);

(statearr_2913_2928[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2901 === (10))){
var inst_2893 = (state_2900[(2)]);
var state_2900__$1 = state_2900;
var statearr_2914_2929 = state_2900__$1;
(statearr_2914_2929[(2)] = inst_2893);

(statearr_2914_2929[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2901 === (11))){
var inst_2898 = (state_2900[(2)]);
var state_2900__$1 = state_2900;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_2900__$1,inst_2898);
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
});})(c__8__auto__))
;
return ((function (switch__3__auto__,c__8__auto__){
return (function() {
var mach$core$load_extension_no_cache_$_state_machine__4__auto__ = null;
var mach$core$load_extension_no_cache_$_state_machine__4__auto____0 = (function (){
var statearr_2915 = [null,null,null,null,null,null,null,null];
(statearr_2915[(0)] = mach$core$load_extension_no_cache_$_state_machine__4__auto__);

(statearr_2915[(1)] = (1));

return statearr_2915;
});
var mach$core$load_extension_no_cache_$_state_machine__4__auto____1 = (function (state_2900){
while(true){
var ret_value__5__auto__ = (function (){try{while(true){
var result__6__auto__ = switch__3__auto__.call(null,state_2900);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
continue;
} else {
return result__6__auto__;
}
break;
}
}catch (e2916){if((e2916 instanceof Object)){
var ex__7__auto__ = e2916;
var statearr_2917_2930 = state_2900;
(statearr_2917_2930[(5)] = ex__7__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_2900);

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
throw e2916;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
var G__2931 = state_2900;
state_2900 = G__2931;
continue;
} else {
return ret_value__5__auto__;
}
break;
}
});
mach$core$load_extension_no_cache_$_state_machine__4__auto__ = function(state_2900){
switch(arguments.length){
case 0:
return mach$core$load_extension_no_cache_$_state_machine__4__auto____0.call(this);
case 1:
return mach$core$load_extension_no_cache_$_state_machine__4__auto____1.call(this,state_2900);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
mach$core$load_extension_no_cache_$_state_machine__4__auto__.cljs$core$IFn$_invoke$arity$0 = mach$core$load_extension_no_cache_$_state_machine__4__auto____0;
mach$core$load_extension_no_cache_$_state_machine__4__auto__.cljs$core$IFn$_invoke$arity$1 = mach$core$load_extension_no_cache_$_state_machine__4__auto____1;
return mach$core$load_extension_no_cache_$_state_machine__4__auto__;
})()
;})(switch__3__auto__,c__8__auto__))
})();
var state__10__auto__ = (function (){var statearr_2918 = f__9__auto__.call(null);
(statearr_2918[(6)] = c__8__auto__);

return statearr_2918;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10__auto__);
});})(c__8__auto__))
);

return c__8__auto__;
});
mach.core.load_extension = (function mach$core$load_extension(extension){
var c__8__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8__auto__){
return (function (){
var f__9__auto__ = (function (){var switch__3__auto__ = ((function (c__8__auto__){
return (function (state_2951){
var state_val_2952 = (state_2951[(1)]);
if((state_val_2952 === (1))){
var inst_2933 = (state_2951[(7)]);
var inst_2932 = cljs.core.deref.call(null,mach.core.extensions_cache);
var inst_2933__$1 = cljs.core.get.call(null,inst_2932,extension);
var state_2951__$1 = (function (){var statearr_2953 = state_2951;
(statearr_2953[(7)] = inst_2933__$1);

return statearr_2953;
})();
if(cljs.core.truth_(inst_2933__$1)){
var statearr_2954_2967 = state_2951__$1;
(statearr_2954_2967[(1)] = (2));

} else {
var statearr_2955_2968 = state_2951__$1;
(statearr_2955_2968[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2952 === (2))){
var inst_2933 = (state_2951[(7)]);
var state_2951__$1 = state_2951;
var statearr_2956_2969 = state_2951__$1;
(statearr_2956_2969[(2)] = inst_2933);

(statearr_2956_2969[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2952 === (3))){
var inst_2936 = mach.core.load_extension_no_cache.call(null,extension);
var state_2951__$1 = state_2951;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_2951__$1,(5),inst_2936);
} else {
if((state_val_2952 === (4))){
var inst_2949 = (state_2951[(2)]);
var state_2951__$1 = state_2951;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_2951__$1,inst_2949);
} else {
if((state_val_2952 === (5))){
var inst_2940 = (state_2951[(8)]);
var inst_2938 = (state_2951[(2)]);
var inst_2939 = cljs.core.swap_BANG_.call(null,mach.core.extensions_cache,cljs.core.assoc,extension,inst_2938);
var inst_2940__$1 = cljs.core.get.call(null,inst_2939,extension);
var state_2951__$1 = (function (){var statearr_2957 = state_2951;
(statearr_2957[(8)] = inst_2940__$1);

return statearr_2957;
})();
if(cljs.core.truth_(inst_2940__$1)){
var statearr_2958_2970 = state_2951__$1;
(statearr_2958_2970[(1)] = (6));

} else {
var statearr_2959_2971 = state_2951__$1;
(statearr_2959_2971[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2952 === (6))){
var inst_2940 = (state_2951[(8)]);
var state_2951__$1 = state_2951;
var statearr_2960_2972 = state_2951__$1;
(statearr_2960_2972[(2)] = inst_2940);

(statearr_2960_2972[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2952 === (7))){
var inst_2943 = ["Could not find extensions file for extension ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extension)].join('');
var inst_2944 = (new Error(inst_2943));
var inst_2945 = (function(){throw inst_2944})();
var state_2951__$1 = state_2951;
var statearr_2961_2973 = state_2951__$1;
(statearr_2961_2973[(2)] = inst_2945);

(statearr_2961_2973[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2952 === (8))){
var inst_2947 = (state_2951[(2)]);
var state_2951__$1 = state_2951;
var statearr_2962_2974 = state_2951__$1;
(statearr_2962_2974[(2)] = inst_2947);

(statearr_2962_2974[(1)] = (4));


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
});})(c__8__auto__))
;
return ((function (switch__3__auto__,c__8__auto__){
return (function() {
var mach$core$load_extension_$_state_machine__4__auto__ = null;
var mach$core$load_extension_$_state_machine__4__auto____0 = (function (){
var statearr_2963 = [null,null,null,null,null,null,null,null,null];
(statearr_2963[(0)] = mach$core$load_extension_$_state_machine__4__auto__);

(statearr_2963[(1)] = (1));

return statearr_2963;
});
var mach$core$load_extension_$_state_machine__4__auto____1 = (function (state_2951){
while(true){
var ret_value__5__auto__ = (function (){try{while(true){
var result__6__auto__ = switch__3__auto__.call(null,state_2951);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
continue;
} else {
return result__6__auto__;
}
break;
}
}catch (e2964){if((e2964 instanceof Object)){
var ex__7__auto__ = e2964;
var statearr_2965_2975 = state_2951;
(statearr_2965_2975[(5)] = ex__7__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_2951);

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
throw e2964;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
var G__2976 = state_2951;
state_2951 = G__2976;
continue;
} else {
return ret_value__5__auto__;
}
break;
}
});
mach$core$load_extension_$_state_machine__4__auto__ = function(state_2951){
switch(arguments.length){
case 0:
return mach$core$load_extension_$_state_machine__4__auto____0.call(this);
case 1:
return mach$core$load_extension_$_state_machine__4__auto____1.call(this,state_2951);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
mach$core$load_extension_$_state_machine__4__auto__.cljs$core$IFn$_invoke$arity$0 = mach$core$load_extension_$_state_machine__4__auto____0;
mach$core$load_extension_$_state_machine__4__auto__.cljs$core$IFn$_invoke$arity$1 = mach$core$load_extension_$_state_machine__4__auto____1;
return mach$core$load_extension_$_state_machine__4__auto__;
})()
;})(switch__3__auto__,c__8__auto__))
})();
var state__10__auto__ = (function (){var statearr_2966 = f__9__auto__.call(null);
(statearr_2966[(6)] = c__8__auto__);

return statearr_2966;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10__auto__);
});})(c__8__auto__))
);

return c__8__auto__;
});
mach.core.map_props_onto_extension_target = (function mach$core$map_props_onto_extension_target(target,props){
return clojure.walk.postwalk.call(null,(function (v){
if((v instanceof cljs.core.Symbol)){
return cljs.core.get.call(null,props,v,v);
} else {
return v;
}
}),target);
});
if(typeof mach.core.apply_verb !== 'undefined'){
} else {
/**
 * Return boolean to indicate if work was done (true) or not (false)
 */
mach.core.apply_verb = (function (){var method_table__22980__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__22981__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__22982__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__22983__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__22984__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",(-1053470341)),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"mach.core","apply-verb"),((function (method_table__22980__auto__,prefer_table__22981__auto__,method_cache__22982__auto__,cached_hierarchy__22983__auto__,hierarchy__22984__auto__){
return (function (machfile,p__2977,verb){
var vec__2978 = p__2977;
var target_name = cljs.core.nth.call(null,vec__2978,(0),null);
var target = cljs.core.nth.call(null,vec__2978,(1),null);
return verb;
});})(method_table__22980__auto__,prefer_table__22981__auto__,method_cache__22982__auto__,cached_hierarchy__22983__auto__,hierarchy__22984__auto__))
,new cljs.core.Keyword(null,"default","default",(-1987822328)),hierarchy__22984__auto__,method_table__22980__auto__,prefer_table__22981__auto__,method_cache__22982__auto__,cached_hierarchy__22983__auto__));
})();
}
cljs.core._add_method.call(null,mach.core.apply_verb,new cljs.core.Keyword(null,"default","default",(-1987822328)),(function (_,___$1,verb){
throw cljs.core.ex_info.call(null,["Unknown verb: '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(verb),"'"].join(''),cljs.core.PersistentArrayMap.EMPTY);
}));
mach.core.with_prop_bindings = (function mach$core$with_prop_bindings(code,machfile){
var temp__20271__auto__ = cljs.core.not_empty.call(null,cljs.core.get.call(null,machfile,new cljs.core.Symbol("mach","props","mach/props",(2090336575),null)));
if(cljs.core.truth_(temp__20271__auto__)){
var props = temp__20271__auto__;
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null)),(function (){var x__22880__auto__ = props;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22880__auto__);
})(),(function (){var x__22880__auto__ = code;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22880__auto__);
})()));
} else {
return code;
}
});
/**
 * Postwalk and swap out symbols in the expression from supplied map.
 */
mach.core.resolve_symbols = (function mach$core$resolve_symbols(expr,target){
return clojure.walk.postwalk.call(null,(function (x){
var or__20917__auto__ = (function (){var and__20896__auto__ = (x instanceof cljs.core.Symbol);
if(and__20896__auto__){
return cljs.core.get.call(null,target,x);
} else {
return and__20896__auto__;
}
})();
if(cljs.core.truth_(or__20917__auto__)){
return or__20917__auto__;
} else {
return x;
}
}),expr);
});
mach.core.with_async_go = (function mach$core$with_async_go(code){
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","identity","cljs.core/identity",(725118887),null)),(function (){var x__22880__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core.async.macros","go","cljs.core.async.macros/go",(-1503108036),null)),(function (){var x__22880__auto__ = code;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22880__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22880__auto__);
})()));
});
/**
 * Evals Mach rule and returns the result if successful, throws an
 *   error if not.
 */
mach.core.eval_rule = (function mach$core$eval_rule(code,target,machfile){
return mach.core.code_eval.call(null,mach.core.with_async_go.call(null,mach.core.with_prop_bindings.call(null,mach.core.resolve_symbols.call(null,code,target),machfile)));
});
mach.core.spit_product = (function mach$core$spit_product(v,target){
var temp__20428__auto__ = (function (){var and__20896__auto__ = cljs.core.get.call(null,target,new cljs.core.Symbol(null,"produce","produce",(-2039201196),null));
if(cljs.core.truth_(and__20896__auto__)){
return cljs.core.get.call(null,target,new cljs.core.Symbol(null,"product","product",(-1290961512),null));
} else {
return and__20896__auto__;
}
})();
if(cljs.core.truth_(temp__20428__auto__)){
var product = temp__20428__auto__;
cljs.core.println.call(null,"Writing",product);

return mach.core.fs.writeFileSync.call(null,product,v);
} else {
return null;
}
});
mach.core.update_BANG_ = (function mach$core$update_BANG_(var_args){
var args__23177__auto__ = [];
var len__23174__auto___3014 = arguments.length;
var i__23175__auto___3015 = (0);
while(true){
if((i__23175__auto___3015 < len__23174__auto___3014)){
args__23177__auto__.push((arguments[i__23175__auto___3015]));

var G__3016 = (i__23175__auto___3015 + (1));
i__23175__auto___3015 = G__3016;
continue;
} else {
}
break;
}

var argseq__23178__auto__ = ((((2) < args__23177__auto__.length))?(new cljs.core.IndexedSeq(args__23177__auto__.slice((2)),(0),null)):null);
return mach.core.update_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__23178__auto__);
});

mach.core.update_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (machfile,target,p__2984){
var map__2985 = p__2984;
var map__2985__$1 = ((((!((map__2985 == null)))?((((map__2985.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2985.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__2985):map__2985);
var post_op = cljs.core.get.call(null,map__2985__$1,new cljs.core.Keyword(null,"post-op","post-op",(-375503851)),mach.core.spit_product);
var c__8__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8__auto__,map__2985,map__2985__$1,post_op){
return (function (){
var f__9__auto__ = (function (){var switch__3__auto__ = ((function (c__8__auto__,map__2985,map__2985__$1,post_op){
return (function (state_3003){
var state_val_3004 = (state_3003[(1)]);
if((state_val_3004 === (1))){
var inst_2987 = cljs.core.map_QMARK_.call(null,target);
var state_3003__$1 = state_3003;
if(inst_2987){
var statearr_3005_3017 = state_3003__$1;
(statearr_3005_3017[(1)] = (2));

} else {
var statearr_3006_3018 = state_3003__$1;
(statearr_3006_3018[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3004 === (2))){
var inst_2989 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_2990 = new cljs.core.Symbol(null,"produce","produce",(-2039201196),null);
var inst_2991 = new cljs.core.Symbol(null,"update!","update!",(187022941),null);
var inst_2992 = [inst_2990,inst_2991];
var inst_2993 = (new cljs.core.PersistentVector(null,(2),(5),inst_2989,inst_2992,null));
var inst_2994 = cljs.core.some.call(null,target,inst_2993);
var state_3003__$1 = state_3003;
var statearr_3007_3019 = state_3003__$1;
(statearr_3007_3019[(2)] = inst_2994);

(statearr_3007_3019[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3004 === (3))){
var state_3003__$1 = state_3003;
var statearr_3008_3020 = state_3003__$1;
(statearr_3008_3020[(2)] = target);

(statearr_3008_3020[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3004 === (4))){
var inst_2997 = (state_3003[(2)]);
var inst_2998 = mach.core.eval_rule.call(null,inst_2997,target,machfile);
var state_3003__$1 = state_3003;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3003__$1,(5),inst_2998);
} else {
if((state_val_3004 === (5))){
var inst_3000 = (state_3003[(2)]);
var inst_3001 = post_op.call(null,inst_3000,target);
var state_3003__$1 = (function (){var statearr_3009 = state_3003;
(statearr_3009[(7)] = inst_3001);

return statearr_3009;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3003__$1,true);
} else {
return null;
}
}
}
}
}
});})(c__8__auto__,map__2985,map__2985__$1,post_op))
;
return ((function (switch__3__auto__,c__8__auto__,map__2985,map__2985__$1,post_op){
return (function() {
var mach$core$state_machine__4__auto__ = null;
var mach$core$state_machine__4__auto____0 = (function (){
var statearr_3010 = [null,null,null,null,null,null,null,null];
(statearr_3010[(0)] = mach$core$state_machine__4__auto__);

(statearr_3010[(1)] = (1));

return statearr_3010;
});
var mach$core$state_machine__4__auto____1 = (function (state_3003){
while(true){
var ret_value__5__auto__ = (function (){try{while(true){
var result__6__auto__ = switch__3__auto__.call(null,state_3003);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
continue;
} else {
return result__6__auto__;
}
break;
}
}catch (e3011){if((e3011 instanceof Object)){
var ex__7__auto__ = e3011;
var statearr_3012_3021 = state_3003;
(statearr_3012_3021[(5)] = ex__7__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_3003);

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
throw e3011;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
var G__3022 = state_3003;
state_3003 = G__3022;
continue;
} else {
return ret_value__5__auto__;
}
break;
}
});
mach$core$state_machine__4__auto__ = function(state_3003){
switch(arguments.length){
case 0:
return mach$core$state_machine__4__auto____0.call(this);
case 1:
return mach$core$state_machine__4__auto____1.call(this,state_3003);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
mach$core$state_machine__4__auto__.cljs$core$IFn$_invoke$arity$0 = mach$core$state_machine__4__auto____0;
mach$core$state_machine__4__auto__.cljs$core$IFn$_invoke$arity$1 = mach$core$state_machine__4__auto____1;
return mach$core$state_machine__4__auto__;
})()
;})(switch__3__auto__,c__8__auto__,map__2985,map__2985__$1,post_op))
})();
var state__10__auto__ = (function (){var statearr_3013 = f__9__auto__.call(null);
(statearr_3013[(6)] = c__8__auto__);

return statearr_3013;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10__auto__);
});})(c__8__auto__,map__2985,map__2985__$1,post_op))
);

return c__8__auto__;
});

mach.core.update_BANG_.cljs$lang$maxFixedArity = (2);

mach.core.update_BANG_.cljs$lang$applyTo = (function (seq2981){
var G__2982 = cljs.core.first.call(null,seq2981);
var seq2981__$1 = cljs.core.next.call(null,seq2981);
var G__2983 = cljs.core.first.call(null,seq2981__$1);
var seq2981__$2 = cljs.core.next.call(null,seq2981__$1);
return mach.core.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__2982,G__2983,seq2981__$2);
});

cljs.core._add_method.call(null,mach.core.apply_verb,null,(function (machfile,p__3023,verb){
var vec__3024 = p__3023;
var target_name = cljs.core.nth.call(null,vec__3024,(0),null);
var target = cljs.core.nth.call(null,vec__3024,(1),null);
var c__8__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8__auto__,vec__3024,target_name,target){
return (function (){
var f__9__auto__ = (function (){var switch__3__auto__ = ((function (c__8__auto__,vec__3024,target_name,target){
return (function (state_3072){
var state_val_3073 = (state_3072[(1)]);
if((state_val_3073 === (1))){
var inst_3027 = (state_3072[(7)]);
var inst_3027__$1 = cljs.core.map_QMARK_.call(null,target);
var state_3072__$1 = (function (){var statearr_3074 = state_3072;
(statearr_3074[(7)] = inst_3027__$1);

return statearr_3074;
})();
if(inst_3027__$1){
var statearr_3075_3102 = state_3072__$1;
(statearr_3075_3102[(1)] = (2));

} else {
var statearr_3076_3103 = state_3072__$1;
(statearr_3076_3103[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3073 === (2))){
var inst_3029 = new cljs.core.Symbol(null,"novelty","novelty",(50285503),null);
var inst_3030 = cljs.core.get.call(null,target,inst_3029);
var state_3072__$1 = state_3072;
var statearr_3077_3104 = state_3072__$1;
(statearr_3077_3104[(2)] = inst_3030);

(statearr_3077_3104[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3073 === (3))){
var inst_3027 = (state_3072[(7)]);
var state_3072__$1 = state_3072;
var statearr_3078_3105 = state_3072__$1;
(statearr_3078_3105[(2)] = inst_3027);

(statearr_3078_3105[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3073 === (4))){
var inst_3033 = (state_3072[(8)]);
var inst_3033__$1 = (state_3072[(2)]);
var state_3072__$1 = (function (){var statearr_3079 = state_3072;
(statearr_3079[(8)] = inst_3033__$1);

return statearr_3079;
})();
if(cljs.core.truth_(inst_3033__$1)){
var statearr_3080_3106 = state_3072__$1;
(statearr_3080_3106[(1)] = (5));

} else {
var statearr_3081_3107 = state_3072__$1;
(statearr_3081_3107[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3073 === (5))){
var inst_3033 = (state_3072[(8)]);
var inst_3035 = mach.core.eval_rule.call(null,inst_3033,target,machfile);
var state_3072__$1 = state_3072;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3072__$1,(8),inst_3035);
} else {
if((state_val_3073 === (6))){
var inst_3066 = mach.core.update_BANG_.call(null,machfile,target);
var state_3072__$1 = state_3072;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3072__$1,(19),inst_3066);
} else {
if((state_val_3073 === (7))){
var inst_3070 = (state_3072[(2)]);
var state_3072__$1 = state_3072;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3072__$1,inst_3070);
} else {
if((state_val_3073 === (8))){
var inst_3037 = (state_3072[(9)]);
var inst_3038 = (state_3072[(10)]);
var inst_3037__$1 = (state_3072[(2)]);
var inst_3038__$1 = inst_3037__$1 === true;
var state_3072__$1 = (function (){var statearr_3082 = state_3072;
(statearr_3082[(9)] = inst_3037__$1);

(statearr_3082[(10)] = inst_3038__$1);

return statearr_3082;
})();
if(cljs.core.truth_(inst_3038__$1)){
var statearr_3083_3108 = state_3072__$1;
(statearr_3083_3108[(1)] = (9));

} else {
var statearr_3084_3109 = state_3072__$1;
(statearr_3084_3109[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3073 === (9))){
var inst_3038 = (state_3072[(10)]);
var state_3072__$1 = state_3072;
var statearr_3085_3110 = state_3072__$1;
(statearr_3085_3110[(2)] = inst_3038);

(statearr_3085_3110[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3073 === (10))){
var inst_3037 = (state_3072[(9)]);
var inst_3041 = (state_3072[(11)]);
var inst_3041__$1 = cljs.core.seq_QMARK_.call(null,inst_3037);
var state_3072__$1 = (function (){var statearr_3086 = state_3072;
(statearr_3086[(11)] = inst_3041__$1);

return statearr_3086;
})();
if(inst_3041__$1){
var statearr_3087_3111 = state_3072__$1;
(statearr_3087_3111[(1)] = (12));

} else {
var statearr_3088_3112 = state_3072__$1;
(statearr_3088_3112[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3073 === (11))){
var inst_3048 = (state_3072[(2)]);
var state_3072__$1 = state_3072;
if(cljs.core.truth_(inst_3048)){
var statearr_3089_3113 = state_3072__$1;
(statearr_3089_3113[(1)] = (15));

} else {
var statearr_3090_3114 = state_3072__$1;
(statearr_3090_3114[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3073 === (12))){
var inst_3037 = (state_3072[(9)]);
var inst_3043 = cljs.core.not_empty.call(null,inst_3037);
var state_3072__$1 = state_3072;
var statearr_3091_3115 = state_3072__$1;
(statearr_3091_3115[(2)] = inst_3043);

(statearr_3091_3115[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3073 === (13))){
var inst_3041 = (state_3072[(11)]);
var state_3072__$1 = state_3072;
var statearr_3092_3116 = state_3072__$1;
(statearr_3092_3116[(2)] = inst_3041);

(statearr_3092_3116[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3073 === (14))){
var inst_3046 = (state_3072[(2)]);
var state_3072__$1 = state_3072;
var statearr_3093_3117 = state_3072__$1;
(statearr_3093_3117[(2)] = inst_3046);

(statearr_3093_3117[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3073 === (15))){
var inst_3037 = (state_3072[(9)]);
var inst_3050 = new cljs.core.Symbol(null,"novelty","novelty",(50285503),null);
var inst_3051 = cljs.core.List.EMPTY;
var inst_3052 = new cljs.core.Symbol(null,"quote","quote",(1377916282),null);
var inst_3053 = cljs.core._conj.call(null,inst_3051,inst_3052);
var inst_3054 = cljs.core.List.EMPTY;
var inst_3055 = cljs.core._conj.call(null,inst_3054,inst_3037);
var inst_3056 = cljs.core.concat.call(null,inst_3053,inst_3055);
var inst_3057 = cljs.core.sequence.call(null,inst_3056);
var inst_3058 = cljs.core.assoc.call(null,target,inst_3050,inst_3057);
var inst_3059 = mach.core.update_BANG_.call(null,machfile,inst_3058);
var state_3072__$1 = state_3072;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3072__$1,(18),inst_3059);
} else {
if((state_val_3073 === (16))){
var state_3072__$1 = state_3072;
var statearr_3094_3118 = state_3072__$1;
(statearr_3094_3118[(2)] = null);

(statearr_3094_3118[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3073 === (17))){
var inst_3064 = (state_3072[(2)]);
var state_3072__$1 = state_3072;
var statearr_3095_3119 = state_3072__$1;
(statearr_3095_3119[(2)] = inst_3064);

(statearr_3095_3119[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3073 === (18))){
var inst_3061 = (state_3072[(2)]);
var state_3072__$1 = state_3072;
var statearr_3096_3120 = state_3072__$1;
(statearr_3096_3120[(2)] = inst_3061);

(statearr_3096_3120[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3073 === (19))){
var inst_3068 = (state_3072[(2)]);
var state_3072__$1 = state_3072;
var statearr_3097_3121 = state_3072__$1;
(statearr_3097_3121[(2)] = inst_3068);

(statearr_3097_3121[(1)] = (7));


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
});})(c__8__auto__,vec__3024,target_name,target))
;
return ((function (switch__3__auto__,c__8__auto__,vec__3024,target_name,target){
return (function() {
var mach$core$state_machine__4__auto__ = null;
var mach$core$state_machine__4__auto____0 = (function (){
var statearr_3098 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_3098[(0)] = mach$core$state_machine__4__auto__);

(statearr_3098[(1)] = (1));

return statearr_3098;
});
var mach$core$state_machine__4__auto____1 = (function (state_3072){
while(true){
var ret_value__5__auto__ = (function (){try{while(true){
var result__6__auto__ = switch__3__auto__.call(null,state_3072);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
continue;
} else {
return result__6__auto__;
}
break;
}
}catch (e3099){if((e3099 instanceof Object)){
var ex__7__auto__ = e3099;
var statearr_3100_3122 = state_3072;
(statearr_3100_3122[(5)] = ex__7__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_3072);

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
throw e3099;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
var G__3123 = state_3072;
state_3072 = G__3123;
continue;
} else {
return ret_value__5__auto__;
}
break;
}
});
mach$core$state_machine__4__auto__ = function(state_3072){
switch(arguments.length){
case 0:
return mach$core$state_machine__4__auto____0.call(this);
case 1:
return mach$core$state_machine__4__auto____1.call(this,state_3072);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
mach$core$state_machine__4__auto__.cljs$core$IFn$_invoke$arity$0 = mach$core$state_machine__4__auto____0;
mach$core$state_machine__4__auto__.cljs$core$IFn$_invoke$arity$1 = mach$core$state_machine__4__auto____1;
return mach$core$state_machine__4__auto__;
})()
;})(switch__3__auto__,c__8__auto__,vec__3024,target_name,target))
})();
var state__10__auto__ = (function (){var statearr_3101 = f__9__auto__.call(null);
(statearr_3101[(6)] = c__8__auto__);

return statearr_3101;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10__auto__);
});})(c__8__auto__,vec__3024,target_name,target))
);

return c__8__auto__;
}));
cljs.core._add_method.call(null,mach.core.apply_verb,new cljs.core.Symbol(null,"update","update",(-1608859373),null),(function (machfile,p__3124,verg){
var vec__3125 = p__3124;
var target_name = cljs.core.nth.call(null,vec__3125,(0),null);
var target = cljs.core.nth.call(null,vec__3125,(1),null);
var c__8__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8__auto__,vec__3125,target_name,target){
return (function (){
var f__9__auto__ = (function (){var switch__3__auto__ = ((function (c__8__auto__,vec__3125,target_name,target){
return (function (state_3132){
var state_val_3133 = (state_3132[(1)]);
if((state_val_3133 === (1))){
var inst_3128 = mach.core.update_BANG_.call(null,machfile,target);
var state_3132__$1 = state_3132;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3132__$1,(2),inst_3128);
} else {
if((state_val_3133 === (2))){
var inst_3130 = (state_3132[(2)]);
var state_3132__$1 = state_3132;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3132__$1,inst_3130);
} else {
return null;
}
}
});})(c__8__auto__,vec__3125,target_name,target))
;
return ((function (switch__3__auto__,c__8__auto__,vec__3125,target_name,target){
return (function() {
var mach$core$state_machine__4__auto__ = null;
var mach$core$state_machine__4__auto____0 = (function (){
var statearr_3134 = [null,null,null,null,null,null,null];
(statearr_3134[(0)] = mach$core$state_machine__4__auto__);

(statearr_3134[(1)] = (1));

return statearr_3134;
});
var mach$core$state_machine__4__auto____1 = (function (state_3132){
while(true){
var ret_value__5__auto__ = (function (){try{while(true){
var result__6__auto__ = switch__3__auto__.call(null,state_3132);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
continue;
} else {
return result__6__auto__;
}
break;
}
}catch (e3135){if((e3135 instanceof Object)){
var ex__7__auto__ = e3135;
var statearr_3136_3138 = state_3132;
(statearr_3136_3138[(5)] = ex__7__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_3132);

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
throw e3135;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
var G__3139 = state_3132;
state_3132 = G__3139;
continue;
} else {
return ret_value__5__auto__;
}
break;
}
});
mach$core$state_machine__4__auto__ = function(state_3132){
switch(arguments.length){
case 0:
return mach$core$state_machine__4__auto____0.call(this);
case 1:
return mach$core$state_machine__4__auto____1.call(this,state_3132);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
mach$core$state_machine__4__auto__.cljs$core$IFn$_invoke$arity$0 = mach$core$state_machine__4__auto____0;
mach$core$state_machine__4__auto__.cljs$core$IFn$_invoke$arity$1 = mach$core$state_machine__4__auto____1;
return mach$core$state_machine__4__auto__;
})()
;})(switch__3__auto__,c__8__auto__,vec__3125,target_name,target))
})();
var state__10__auto__ = (function (){var statearr_3137 = f__9__auto__.call(null);
(statearr_3137[(6)] = c__8__auto__);

return statearr_3137;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10__auto__);
});})(c__8__auto__,vec__3125,target_name,target))
);

return c__8__auto__;
}));
cljs.core._add_method.call(null,mach.core.apply_verb,new cljs.core.Symbol(null,"print","print",(-1354873355),null),(function (machfile,p__3140,verb){
var vec__3141 = p__3140;
var target_name = cljs.core.nth.call(null,vec__3141,(0),null);
var target = cljs.core.nth.call(null,vec__3141,(1),null);
var c__8__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8__auto__,vec__3141,target_name,target){
return (function (){
var f__9__auto__ = (function (){var switch__3__auto__ = ((function (c__8__auto__,vec__3141,target_name,target){
return (function (state_3147){
var state_val_3148 = (state_3147[(1)]);
if((state_val_3148 === (1))){
var inst_3144 = (function (){return ((function (state_val_3148,c__8__auto__,vec__3141,target_name,target){
return (function (v,_){
return cljs.core.println.call(null,v);
});
;})(state_val_3148,c__8__auto__,vec__3141,target_name,target))
})();
var inst_3145 = mach.core.update_BANG_.call(null,machfile,target,new cljs.core.Keyword(null,"post-op","post-op",(-375503851)),inst_3144);
var state_3147__$1 = state_3147;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3147__$1,inst_3145);
} else {
return null;
}
});})(c__8__auto__,vec__3141,target_name,target))
;
return ((function (switch__3__auto__,c__8__auto__,vec__3141,target_name,target){
return (function() {
var mach$core$state_machine__4__auto__ = null;
var mach$core$state_machine__4__auto____0 = (function (){
var statearr_3149 = [null,null,null,null,null,null,null];
(statearr_3149[(0)] = mach$core$state_machine__4__auto__);

(statearr_3149[(1)] = (1));

return statearr_3149;
});
var mach$core$state_machine__4__auto____1 = (function (state_3147){
while(true){
var ret_value__5__auto__ = (function (){try{while(true){
var result__6__auto__ = switch__3__auto__.call(null,state_3147);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
continue;
} else {
return result__6__auto__;
}
break;
}
}catch (e3150){if((e3150 instanceof Object)){
var ex__7__auto__ = e3150;
var statearr_3151_3153 = state_3147;
(statearr_3151_3153[(5)] = ex__7__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_3147);

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
throw e3150;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
var G__3154 = state_3147;
state_3147 = G__3154;
continue;
} else {
return ret_value__5__auto__;
}
break;
}
});
mach$core$state_machine__4__auto__ = function(state_3147){
switch(arguments.length){
case 0:
return mach$core$state_machine__4__auto____0.call(this);
case 1:
return mach$core$state_machine__4__auto____1.call(this,state_3147);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
mach$core$state_machine__4__auto__.cljs$core$IFn$_invoke$arity$0 = mach$core$state_machine__4__auto____0;
mach$core$state_machine__4__auto__.cljs$core$IFn$_invoke$arity$1 = mach$core$state_machine__4__auto____1;
return mach$core$state_machine__4__auto__;
})()
;})(switch__3__auto__,c__8__auto__,vec__3141,target_name,target))
})();
var state__10__auto__ = (function (){var statearr_3152 = f__9__auto__.call(null);
(statearr_3152[(6)] = c__8__auto__);

return statearr_3152;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10__auto__);
});})(c__8__auto__,vec__3141,target_name,target))
);

return c__8__auto__;
}));
cljs.core._add_method.call(null,mach.core.apply_verb,new cljs.core.Symbol(null,"clean","clean",(1682065606),null),(function (machfile,p__3155,verb){
var vec__3156 = p__3155;
var target_name = cljs.core.nth.call(null,vec__3156,(0),null);
var target = cljs.core.nth.call(null,vec__3156,(1),null);
var c__8__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8__auto__,vec__3156,target_name,target){
return (function (){
var f__9__auto__ = (function (){var switch__3__auto__ = ((function (c__8__auto__,vec__3156,target_name,target){
return (function (state_3212){
var state_val_3213 = (state_3212[(1)]);
if((state_val_3213 === (1))){
var inst_3160 = (state_3212[(7)]);
var inst_3159 = new cljs.core.Symbol(null,"clean!","clean!",(1762784233),null);
var inst_3160__$1 = cljs.core.get.call(null,target,inst_3159);
var state_3212__$1 = (function (){var statearr_3214 = state_3212;
(statearr_3214[(7)] = inst_3160__$1);

return statearr_3214;
})();
if(cljs.core.truth_(inst_3160__$1)){
var statearr_3215_3250 = state_3212__$1;
(statearr_3215_3250[(1)] = (2));

} else {
var statearr_3216_3251 = state_3212__$1;
(statearr_3216_3251[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3213 === (2))){
var inst_3160 = (state_3212[(7)]);
var inst_3162 = mach.core.eval_rule.call(null,inst_3160,target,machfile);
var state_3212__$1 = state_3212;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3212__$1,(5),inst_3162);
} else {
if((state_val_3213 === (3))){
var inst_3167 = (state_3212[(8)]);
var inst_3166 = new cljs.core.Symbol(null,"product","product",(-1290961512),null);
var inst_3167__$1 = cljs.core.get.call(null,target,inst_3166);
var state_3212__$1 = (function (){var statearr_3217 = state_3212;
(statearr_3217[(8)] = inst_3167__$1);

return statearr_3217;
})();
if(cljs.core.truth_(inst_3167__$1)){
var statearr_3218_3252 = state_3212__$1;
(statearr_3218_3252[(1)] = (6));

} else {
var statearr_3219_3253 = state_3212__$1;
(statearr_3219_3253[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3213 === (4))){
var inst_3210 = (state_3212[(2)]);
var state_3212__$1 = (function (){var statearr_3220 = state_3212;
(statearr_3220[(9)] = inst_3210);

return statearr_3220;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3212__$1,true);
} else {
if((state_val_3213 === (5))){
var inst_3164 = (state_3212[(2)]);
var state_3212__$1 = state_3212;
var statearr_3221_3254 = state_3212__$1;
(statearr_3221_3254[(2)] = inst_3164);

(statearr_3221_3254[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3213 === (6))){
var inst_3167 = (state_3212[(8)]);
var inst_3169 = cljs.core.coll_QMARK_.call(null,inst_3167);
var state_3212__$1 = state_3212;
if(inst_3169){
var statearr_3222_3255 = state_3212__$1;
(statearr_3222_3255[(1)] = (9));

} else {
var statearr_3223_3256 = state_3212__$1;
(statearr_3223_3256[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3213 === (7))){
var state_3212__$1 = state_3212;
var statearr_3224_3257 = state_3212__$1;
(statearr_3224_3257[(2)] = null);

(statearr_3224_3257[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3213 === (8))){
var inst_3208 = (state_3212[(2)]);
var state_3212__$1 = state_3212;
var statearr_3225_3258 = state_3212__$1;
(statearr_3225_3258[(2)] = inst_3208);

(statearr_3225_3258[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3213 === (9))){
var inst_3167 = (state_3212[(8)]);
var inst_3171 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_3172 = cljs.core.some.call(null,mach.core.dir_QMARK_,inst_3167);
var state_3212__$1 = (function (){var statearr_3226 = state_3212;
(statearr_3226[(10)] = inst_3171);

return statearr_3226;
})();
if(cljs.core.truth_(inst_3172)){
var statearr_3227_3259 = state_3212__$1;
(statearr_3227_3259[(1)] = (12));

} else {
var statearr_3228_3260 = state_3212__$1;
(statearr_3228_3260[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3213 === (10))){
var inst_3167 = (state_3212[(8)]);
var inst_3182 = mach.core.dir_QMARK_.call(null,inst_3167);
var state_3212__$1 = state_3212;
if(cljs.core.truth_(inst_3182)){
var statearr_3229_3261 = state_3212__$1;
(statearr_3229_3261[(1)] = (15));

} else {
var statearr_3230_3262 = state_3212__$1;
(statearr_3230_3262[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3213 === (11))){
var inst_3205 = (state_3212[(2)]);
var state_3212__$1 = state_3212;
var statearr_3231_3263 = state_3212__$1;
(statearr_3231_3263[(2)] = inst_3205);

(statearr_3231_3263[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3213 === (12))){
var state_3212__$1 = state_3212;
var statearr_3232_3264 = state_3212__$1;
(statearr_3232_3264[(2)] = "-rf");

(statearr_3232_3264[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3213 === (13))){
var state_3212__$1 = state_3212;
var statearr_3233_3265 = state_3212__$1;
(statearr_3233_3265[(2)] = "-f");

(statearr_3233_3265[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3213 === (14))){
var inst_3171 = (state_3212[(10)]);
var inst_3167 = (state_3212[(8)]);
var inst_3176 = (state_3212[(2)]);
var inst_3177 = ["rm",inst_3176];
var inst_3178 = (new cljs.core.PersistentVector(null,(2),(5),inst_3171,inst_3177,null));
var inst_3179 = cljs.core.concat.call(null,inst_3178,inst_3167);
var inst_3180 = mach.core.sh.call(null,inst_3179);
var state_3212__$1 = state_3212;
var statearr_3234_3266 = state_3212__$1;
(statearr_3234_3266[(2)] = inst_3180);

(statearr_3234_3266[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3213 === (15))){
var inst_3167 = (state_3212[(8)]);
var inst_3184 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_3185 = ["rm","-rf",inst_3167];
var inst_3186 = (new cljs.core.PersistentVector(null,(3),(5),inst_3184,inst_3185,null));
var inst_3187 = mach.core.sh.call(null,inst_3186);
var state_3212__$1 = state_3212;
var statearr_3235_3267 = state_3212__$1;
(statearr_3235_3267[(2)] = inst_3187);

(statearr_3235_3267[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3213 === (16))){
var inst_3167 = (state_3212[(8)]);
var inst_3189 = mach.core.file_exists_QMARK_.call(null,inst_3167);
var state_3212__$1 = state_3212;
if(cljs.core.truth_(inst_3189)){
var statearr_3236_3268 = state_3212__$1;
(statearr_3236_3268[(1)] = (18));

} else {
var statearr_3237_3269 = state_3212__$1;
(statearr_3237_3269[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3213 === (17))){
var inst_3203 = (state_3212[(2)]);
var state_3212__$1 = state_3212;
var statearr_3238_3270 = state_3212__$1;
(statearr_3238_3270[(2)] = inst_3203);

(statearr_3238_3270[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3213 === (18))){
var inst_3167 = (state_3212[(8)]);
var inst_3191 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_3192 = ["rm","-f",inst_3167];
var inst_3193 = (new cljs.core.PersistentVector(null,(3),(5),inst_3191,inst_3192,null));
var inst_3194 = mach.core.sh.call(null,inst_3193);
var state_3212__$1 = state_3212;
var statearr_3239_3271 = state_3212__$1;
(statearr_3239_3271[(2)] = inst_3194);

(statearr_3239_3271[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3213 === (19))){
var state_3212__$1 = state_3212;
var statearr_3240_3272 = state_3212__$1;
(statearr_3240_3272[(1)] = (21));



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3213 === (20))){
var inst_3201 = (state_3212[(2)]);
var state_3212__$1 = state_3212;
var statearr_3242_3273 = state_3212__$1;
(statearr_3242_3273[(2)] = inst_3201);

(statearr_3242_3273[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3213 === (21))){
var state_3212__$1 = state_3212;
var statearr_3243_3274 = state_3212__$1;
(statearr_3243_3274[(2)] = false);

(statearr_3243_3274[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3213 === (22))){
var state_3212__$1 = state_3212;
var statearr_3244_3275 = state_3212__$1;
(statearr_3244_3275[(2)] = null);

(statearr_3244_3275[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3213 === (23))){
var inst_3199 = (state_3212[(2)]);
var state_3212__$1 = state_3212;
var statearr_3245_3276 = state_3212__$1;
(statearr_3245_3276[(2)] = inst_3199);

(statearr_3245_3276[(1)] = (20));


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
});})(c__8__auto__,vec__3156,target_name,target))
;
return ((function (switch__3__auto__,c__8__auto__,vec__3156,target_name,target){
return (function() {
var mach$core$state_machine__4__auto__ = null;
var mach$core$state_machine__4__auto____0 = (function (){
var statearr_3246 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_3246[(0)] = mach$core$state_machine__4__auto__);

(statearr_3246[(1)] = (1));

return statearr_3246;
});
var mach$core$state_machine__4__auto____1 = (function (state_3212){
while(true){
var ret_value__5__auto__ = (function (){try{while(true){
var result__6__auto__ = switch__3__auto__.call(null,state_3212);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
continue;
} else {
return result__6__auto__;
}
break;
}
}catch (e3247){if((e3247 instanceof Object)){
var ex__7__auto__ = e3247;
var statearr_3248_3277 = state_3212;
(statearr_3248_3277[(5)] = ex__7__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_3212);

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
throw e3247;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
var G__3278 = state_3212;
state_3212 = G__3278;
continue;
} else {
return ret_value__5__auto__;
}
break;
}
});
mach$core$state_machine__4__auto__ = function(state_3212){
switch(arguments.length){
case 0:
return mach$core$state_machine__4__auto____0.call(this);
case 1:
return mach$core$state_machine__4__auto____1.call(this,state_3212);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
mach$core$state_machine__4__auto__.cljs$core$IFn$_invoke$arity$0 = mach$core$state_machine__4__auto____0;
mach$core$state_machine__4__auto__.cljs$core$IFn$_invoke$arity$1 = mach$core$state_machine__4__auto____1;
return mach$core$state_machine__4__auto__;
})()
;})(switch__3__auto__,c__8__auto__,vec__3156,target_name,target))
})();
var state__10__auto__ = (function (){var statearr_3249 = f__9__auto__.call(null);
(statearr_3249[(6)] = c__8__auto__);

return statearr_3249;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10__auto__);
});})(c__8__auto__,vec__3156,target_name,target))
);

return c__8__auto__;
}));
cljs.core._add_method.call(null,mach.core.apply_verb,new cljs.core.Symbol(null,"depends","depends",(423691110),null),(function (machfile,p__3279,verb){
var vec__3280 = p__3279;
var target_name = cljs.core.nth.call(null,vec__3280,(0),null);
var target = cljs.core.nth.call(null,vec__3280,(1),null);
var c__8__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8__auto__,vec__3280,target_name,target){
return (function (){
var f__9__auto__ = (function (){var switch__3__auto__ = ((function (c__8__auto__,vec__3280,target_name,target){
return (function (state_3286){
var state_val_3287 = (state_3286[(1)]);
if((state_val_3287 === (1))){
var inst_3283 = mach.core.target_order.call(null,machfile,target_name);
var inst_3284 = cljs.pprint.pprint.call(null,inst_3283);
var state_3286__$1 = (function (){var statearr_3288 = state_3286;
(statearr_3288[(7)] = inst_3284);

return statearr_3288;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3286__$1,true);
} else {
return null;
}
});})(c__8__auto__,vec__3280,target_name,target))
;
return ((function (switch__3__auto__,c__8__auto__,vec__3280,target_name,target){
return (function() {
var mach$core$state_machine__4__auto__ = null;
var mach$core$state_machine__4__auto____0 = (function (){
var statearr_3289 = [null,null,null,null,null,null,null,null];
(statearr_3289[(0)] = mach$core$state_machine__4__auto__);

(statearr_3289[(1)] = (1));

return statearr_3289;
});
var mach$core$state_machine__4__auto____1 = (function (state_3286){
while(true){
var ret_value__5__auto__ = (function (){try{while(true){
var result__6__auto__ = switch__3__auto__.call(null,state_3286);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
continue;
} else {
return result__6__auto__;
}
break;
}
}catch (e3290){if((e3290 instanceof Object)){
var ex__7__auto__ = e3290;
var statearr_3291_3293 = state_3286;
(statearr_3291_3293[(5)] = ex__7__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_3286);

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
throw e3290;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
var G__3294 = state_3286;
state_3286 = G__3294;
continue;
} else {
return ret_value__5__auto__;
}
break;
}
});
mach$core$state_machine__4__auto__ = function(state_3286){
switch(arguments.length){
case 0:
return mach$core$state_machine__4__auto____0.call(this);
case 1:
return mach$core$state_machine__4__auto____1.call(this,state_3286);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
mach$core$state_machine__4__auto__.cljs$core$IFn$_invoke$arity$0 = mach$core$state_machine__4__auto____0;
mach$core$state_machine__4__auto__.cljs$core$IFn$_invoke$arity$1 = mach$core$state_machine__4__auto____1;
return mach$core$state_machine__4__auto__;
})()
;})(switch__3__auto__,c__8__auto__,vec__3280,target_name,target))
})();
var state__10__auto__ = (function (){var statearr_3292 = f__9__auto__.call(null);
(statearr_3292[(6)] = c__8__auto__);

return statearr_3292;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10__auto__);
});})(c__8__auto__,vec__3280,target_name,target))
);

return c__8__auto__;
}));
cljs.core._add_method.call(null,mach.core.apply_verb,new cljs.core.Symbol(null,"novelty","novelty",(50285503),null),(function (machfile,p__3295,verb){
var vec__3296 = p__3295;
var target_name = cljs.core.nth.call(null,vec__3296,(0),null);
var target = cljs.core.nth.call(null,vec__3296,(1),null);
var c__8__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8__auto__,vec__3296,target_name,target){
return (function (){
var f__9__auto__ = (function (){var switch__3__auto__ = ((function (c__8__auto__,vec__3296,target_name,target){
return (function (state_3308){
var state_val_3309 = (state_3308[(1)]);
if((state_val_3309 === (1))){
var inst_3300 = (state_3308[(7)]);
var inst_3299 = new cljs.core.Symbol(null,"novelty","novelty",(50285503),null);
var inst_3300__$1 = cljs.core.get.call(null,target,inst_3299);
var state_3308__$1 = (function (){var statearr_3310 = state_3308;
(statearr_3310[(7)] = inst_3300__$1);

return statearr_3310;
})();
if(cljs.core.truth_(inst_3300__$1)){
var statearr_3311_3319 = state_3308__$1;
(statearr_3311_3319[(1)] = (2));

} else {
var statearr_3312_3320 = state_3308__$1;
(statearr_3312_3320[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3309 === (2))){
var inst_3300 = (state_3308[(7)]);
var inst_3302 = mach.core.eval_rule.call(null,inst_3300,target,machfile);
var state_3308__$1 = state_3308;
var statearr_3313_3321 = state_3308__$1;
(statearr_3313_3321[(2)] = inst_3302);

(statearr_3313_3321[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3309 === (3))){
var state_3308__$1 = state_3308;
var statearr_3314_3322 = state_3308__$1;
(statearr_3314_3322[(2)] = null);

(statearr_3314_3322[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3309 === (4))){
var inst_3305 = (state_3308[(2)]);
var inst_3306 = cljs.pprint.pprint.call(null,inst_3305);
var state_3308__$1 = state_3308;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3308__$1,inst_3306);
} else {
return null;
}
}
}
}
});})(c__8__auto__,vec__3296,target_name,target))
;
return ((function (switch__3__auto__,c__8__auto__,vec__3296,target_name,target){
return (function() {
var mach$core$state_machine__4__auto__ = null;
var mach$core$state_machine__4__auto____0 = (function (){
var statearr_3315 = [null,null,null,null,null,null,null,null];
(statearr_3315[(0)] = mach$core$state_machine__4__auto__);

(statearr_3315[(1)] = (1));

return statearr_3315;
});
var mach$core$state_machine__4__auto____1 = (function (state_3308){
while(true){
var ret_value__5__auto__ = (function (){try{while(true){
var result__6__auto__ = switch__3__auto__.call(null,state_3308);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
continue;
} else {
return result__6__auto__;
}
break;
}
}catch (e3316){if((e3316 instanceof Object)){
var ex__7__auto__ = e3316;
var statearr_3317_3323 = state_3308;
(statearr_3317_3323[(5)] = ex__7__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_3308);

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
throw e3316;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
var G__3324 = state_3308;
state_3308 = G__3324;
continue;
} else {
return ret_value__5__auto__;
}
break;
}
});
mach$core$state_machine__4__auto__ = function(state_3308){
switch(arguments.length){
case 0:
return mach$core$state_machine__4__auto____0.call(this);
case 1:
return mach$core$state_machine__4__auto____1.call(this,state_3308);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
mach$core$state_machine__4__auto__.cljs$core$IFn$_invoke$arity$0 = mach$core$state_machine__4__auto____0;
mach$core$state_machine__4__auto__.cljs$core$IFn$_invoke$arity$1 = mach$core$state_machine__4__auto____1;
return mach$core$state_machine__4__auto__;
})()
;})(switch__3__auto__,c__8__auto__,vec__3296,target_name,target))
})();
var state__10__auto__ = (function (){var statearr_3318 = f__9__auto__.call(null);
(statearr_3318[(6)] = c__8__auto__);

return statearr_3318;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10__auto__);
});})(c__8__auto__,vec__3296,target_name,target))
);

return c__8__auto__;
}));
/**
 * Resolve target key (symbol) matching given target (string) in machfile.
 * Once a target has been resolved, it is also validated.
 */
mach.core.resolve_target = (function mach$core$resolve_target(machfile,target_name){
var temp__20271__auto__ = (function (){var or__20917__auto__ = (function (){var and__20896__auto__ = cljs.core.contains_QMARK_.call(null,machfile,cljs.core.symbol.call(null,target_name));
if(and__20896__auto__){
return cljs.core.symbol.call(null,target_name);
} else {
return and__20896__auto__;
}
})();
if(cljs.core.truth_(or__20917__auto__)){
return or__20917__auto__;
} else {
return cljs.core.some.call(null,((function (or__20917__auto__){
return (function (p__3325){
var vec__3326 = p__3325;
var k = cljs.core.nth.call(null,vec__3326,(0),null);
var v = cljs.core.nth.call(null,vec__3326,(1),null);
if(cljs.core._EQ_.call(null,target_name,cljs.core.get.call(null,v,new cljs.core.Symbol(null,"product","product",(-1290961512),null)))){
return k;
} else {
return null;
}
});})(or__20917__auto__))
,machfile);
}
})();
if(cljs.core.truth_(temp__20271__auto__)){
var target_symbol = temp__20271__auto__;
var target = cljs.core.get.call(null,machfile,target_symbol);
if(cljs.core.truth_((function (){var and__20896__auto__ = cljs.core.get.call(null,target,new cljs.core.Symbol(null,"produce","produce",(-2039201196),null));
if(cljs.core.truth_(and__20896__auto__)){
return cljs.core.get.call(null,target,new cljs.core.Symbol(null,"update!","update!",(187022941),null));
} else {
return and__20896__auto__;
}
})())){
throw cljs.core.ex_info.call(null,"Invalid to have both update! and produce in the same target",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",(253001721)),target], null));
} else {
}

var seq__3329_3333 = cljs.core.seq.call(null,cljs.core.rest.call(null,mach.core.target_order.call(null,machfile,target_symbol)));
var chunk__3330_3334 = null;
var count__3331_3335 = (0);
var i__3332_3336 = (0);
while(true){
if((i__3332_3336 < count__3331_3335)){
var dep_target_3337 = cljs.core._nth.call(null,chunk__3330_3334,i__3332_3336);
if(cljs.core.truth_(cljs.core.get.call(null,machfile,dep_target_3337))){
} else {
throw cljs.core.ex_info.call(null,["Target dependency not found: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(dep_target_3337)].join(''),cljs.core.PersistentArrayMap.EMPTY);
}

var G__3338 = seq__3329_3333;
var G__3339 = chunk__3330_3334;
var G__3340 = count__3331_3335;
var G__3341 = (i__3332_3336 + (1));
seq__3329_3333 = G__3338;
chunk__3330_3334 = G__3339;
count__3331_3335 = G__3340;
i__3332_3336 = G__3341;
continue;
} else {
var temp__20428__auto___3342 = cljs.core.seq.call(null,seq__3329_3333);
if(temp__20428__auto___3342){
var seq__3329_3343__$1 = temp__20428__auto___3342;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__3329_3343__$1)){
var c__22846__auto___3344 = cljs.core.chunk_first.call(null,seq__3329_3343__$1);
var G__3345 = cljs.core.chunk_rest.call(null,seq__3329_3343__$1);
var G__3346 = c__22846__auto___3344;
var G__3347 = cljs.core.count.call(null,c__22846__auto___3344);
var G__3348 = (0);
seq__3329_3333 = G__3345;
chunk__3330_3334 = G__3346;
count__3331_3335 = G__3347;
i__3332_3336 = G__3348;
continue;
} else {
var dep_target_3349 = cljs.core.first.call(null,seq__3329_3343__$1);
if(cljs.core.truth_(cljs.core.get.call(null,machfile,dep_target_3349))){
} else {
throw cljs.core.ex_info.call(null,["Target dependency not found: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(dep_target_3349)].join(''),cljs.core.PersistentArrayMap.EMPTY);
}

var G__3350 = cljs.core.next.call(null,seq__3329_3343__$1);
var G__3351 = null;
var G__3352 = (0);
var G__3353 = (0);
seq__3329_3333 = G__3350;
chunk__3330_3334 = G__3351;
count__3331_3335 = G__3352;
i__3332_3336 = G__3353;
continue;
}
} else {
}
}
break;
}

return target_symbol;
} else {
throw cljs.core.ex_info.call(null,["Could not resolve target: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(target_name)].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
});
mach.core.build_plan = (function mach$core$build_plan(machfile,p__3354){
var vec__3355 = p__3354;
var target_symbol = cljs.core.nth.call(null,vec__3355,(0),null);
var verb = cljs.core.nth.call(null,vec__3355,(1),null);
var iter__22810__auto__ = ((function (vec__3355,target_symbol,verb){
return (function mach$core$build_plan_$_iter__3358(s__3359){
return (new cljs.core.LazySeq(null,((function (vec__3355,target_symbol,verb){
return (function (){
var s__3359__$1 = s__3359;
while(true){
var temp__20428__auto__ = cljs.core.seq.call(null,s__3359__$1);
if(temp__20428__auto__){
var s__3359__$2 = temp__20428__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__3359__$2)){
var c__22808__auto__ = cljs.core.chunk_first.call(null,s__3359__$2);
var size__22809__auto__ = cljs.core.count.call(null,c__22808__auto__);
var b__3361 = cljs.core.chunk_buffer.call(null,size__22809__auto__);
if((function (){var i__3360 = (0);
while(true){
if((i__3360 < size__22809__auto__)){
var dependency_target = cljs.core._nth.call(null,c__22808__auto__,i__3360);
cljs.core.chunk_append.call(null,b__3361,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dependency_target,verb], null));

var G__3363 = (i__3360 + (1));
i__3360 = G__3363;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__3361),mach$core$build_plan_$_iter__3358.call(null,cljs.core.chunk_rest.call(null,s__3359__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__3361),null);
}
} else {
var dependency_target = cljs.core.first.call(null,s__3359__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dependency_target,verb], null),mach$core$build_plan_$_iter__3358.call(null,cljs.core.rest.call(null,s__3359__$2)));
}
} else {
return null;
}
break;
}
});})(vec__3355,target_symbol,verb))
,null,null));
});})(vec__3355,target_symbol,verb))
;
return iter__22810__auto__.call(null,(function (){var G__3362 = verb;
if(cljs.core._EQ_.call(null,null,G__3362)){
return cljs.core.reverse.call(null,mach.core.target_order.call(null,machfile,target_symbol));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",(1377916282),null),G__3362)){
return mach.core.target_order.call(null,machfile,target_symbol);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"clean","clean",(1682065606),null),G__3362)){
return mach.core.target_order.call(null,machfile,target_symbol);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [target_symbol], null);

}
}
}
})());
});
mach.core.execute_plan = (function mach$core$execute_plan(machfile,build_plan){
var c__8__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8__auto__){
return (function (){
var f__9__auto__ = (function (){var switch__3__auto__ = ((function (c__8__auto__){
return (function (state_3408){
var state_val_3409 = (state_3408[(1)]);
if((state_val_3409 === (1))){
var inst_3371 = cljs.core.PersistentHashMap.EMPTY;
var inst_3372 = cljs.core.seq.call(null,build_plan);
var inst_3373 = cljs.core.first.call(null,inst_3372);
var inst_3374 = cljs.core.next.call(null,inst_3372);
var inst_3375 = inst_3371;
var inst_3376 = build_plan;
var state_3408__$1 = (function (){var statearr_3410 = state_3408;
(statearr_3410[(7)] = inst_3373);

(statearr_3410[(11)] = inst_3374);

(statearr_3410[(12)] = inst_3375);

(statearr_3410[(8)] = inst_3376);

return statearr_3410;
})();
var statearr_3411_3424 = state_3408__$1;
(statearr_3411_3424[(2)] = null);

(statearr_3411_3424[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3409 === (2))){
var inst_3376 = (state_3408[(8)]);
var inst_3382 = (state_3408[(9)]);
var inst_3381 = cljs.core.seq.call(null,inst_3376);
var inst_3382__$1 = cljs.core.first.call(null,inst_3381);
var inst_3383 = cljs.core.next.call(null,inst_3381);
var state_3408__$1 = (function (){var statearr_3412 = state_3408;
(statearr_3412[(9)] = inst_3382__$1);

(statearr_3412[(13)] = inst_3383);

return statearr_3412;
})();
if(cljs.core.truth_(inst_3382__$1)){
var statearr_3413_3425 = state_3408__$1;
(statearr_3413_3425[(1)] = (4));

} else {
var statearr_3414_3426 = state_3408__$1;
(statearr_3414_3426[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3409 === (3))){
var inst_3406 = (state_3408[(2)]);
var state_3408__$1 = state_3408;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3408__$1,inst_3406);
} else {
if((state_val_3409 === (4))){
var inst_3382 = (state_3408[(9)]);
var inst_3388 = cljs.core.nth.call(null,inst_3382,(0),null);
var inst_3389 = cljs.core.nth.call(null,inst_3382,(1),null);
var inst_3390 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_3391 = [inst_3388,inst_3389];
var inst_3392 = (new cljs.core.PersistentVector(null,(2),(5),inst_3390,inst_3391,null));
var inst_3393 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_3394 = cljs.core.get.call(null,machfile,inst_3388);
var inst_3395 = [inst_3388,inst_3394];
var inst_3396 = (new cljs.core.PersistentVector(null,(2),(5),inst_3393,inst_3395,null));
var inst_3397 = mach.core.apply_verb.call(null,machfile,inst_3396,inst_3389);
var state_3408__$1 = (function (){var statearr_3415 = state_3408;
(statearr_3415[(10)] = inst_3392);

return statearr_3415;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3408__$1,(7),inst_3397);
} else {
if((state_val_3409 === (5))){
var inst_3375 = (state_3408[(12)]);
var state_3408__$1 = state_3408;
var statearr_3416_3427 = state_3408__$1;
(statearr_3416_3427[(2)] = inst_3375);

(statearr_3416_3427[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3409 === (6))){
var inst_3404 = (state_3408[(2)]);
var state_3408__$1 = state_3408;
var statearr_3417_3428 = state_3408__$1;
(statearr_3417_3428[(2)] = inst_3404);

(statearr_3417_3428[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3409 === (7))){
var inst_3375 = (state_3408[(12)]);
var inst_3392 = (state_3408[(10)]);
var inst_3383 = (state_3408[(13)]);
var inst_3399 = (state_3408[(2)]);
var inst_3400 = cljs.core.assoc.call(null,inst_3375,inst_3392,inst_3399);
var inst_3375__$1 = inst_3400;
var inst_3376 = inst_3383;
var state_3408__$1 = (function (){var statearr_3418 = state_3408;
(statearr_3418[(12)] = inst_3375__$1);

(statearr_3418[(8)] = inst_3376);

return statearr_3418;
})();
var statearr_3419_3429 = state_3408__$1;
(statearr_3419_3429[(2)] = null);

(statearr_3419_3429[(1)] = (2));


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
});})(c__8__auto__))
;
return ((function (switch__3__auto__,c__8__auto__){
return (function() {
var mach$core$execute_plan_$_state_machine__4__auto__ = null;
var mach$core$execute_plan_$_state_machine__4__auto____0 = (function (){
var statearr_3420 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_3420[(0)] = mach$core$execute_plan_$_state_machine__4__auto__);

(statearr_3420[(1)] = (1));

return statearr_3420;
});
var mach$core$execute_plan_$_state_machine__4__auto____1 = (function (state_3408){
while(true){
var ret_value__5__auto__ = (function (){try{while(true){
var result__6__auto__ = switch__3__auto__.call(null,state_3408);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
continue;
} else {
return result__6__auto__;
}
break;
}
}catch (e3421){if((e3421 instanceof Object)){
var ex__7__auto__ = e3421;
var statearr_3422_3430 = state_3408;
(statearr_3422_3430[(5)] = ex__7__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_3408);

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
throw e3421;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
var G__3431 = state_3408;
state_3408 = G__3431;
continue;
} else {
return ret_value__5__auto__;
}
break;
}
});
mach$core$execute_plan_$_state_machine__4__auto__ = function(state_3408){
switch(arguments.length){
case 0:
return mach$core$execute_plan_$_state_machine__4__auto____0.call(this);
case 1:
return mach$core$execute_plan_$_state_machine__4__auto____1.call(this,state_3408);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
mach$core$execute_plan_$_state_machine__4__auto__.cljs$core$IFn$_invoke$arity$0 = mach$core$execute_plan_$_state_machine__4__auto____0;
mach$core$execute_plan_$_state_machine__4__auto__.cljs$core$IFn$_invoke$arity$1 = mach$core$execute_plan_$_state_machine__4__auto____1;
return mach$core$execute_plan_$_state_machine__4__auto__;
})()
;})(switch__3__auto__,c__8__auto__))
})();
var state__10__auto__ = (function (){var statearr_3423 = f__9__auto__.call(null);
(statearr_3423[(6)] = c__8__auto__);

return statearr_3423;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10__auto__);
});})(c__8__auto__))
);

return c__8__auto__;
});
mach.core.execute_plan_async = (function mach$core$execute_plan_async(machfile,target_verbs){
var execution_plans = cljs.core.async.chan.call(null);
var c__8__auto___3576 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8__auto___3576,execution_plans){
return (function (){
var f__9__auto__ = (function (){var switch__3__auto__ = ((function (c__8__auto___3576,execution_plans){
return (function (state_3484){
var state_val_3485 = (state_3484[(1)]);
if((state_val_3485 === (1))){
var inst_3436 = cljs.core.seq.call(null,target_verbs);
var inst_3437 = inst_3436;
var inst_3438 = null;
var inst_3439 = (0);
var inst_3440 = (0);
var state_3484__$1 = (function (){var statearr_3486 = state_3484;
(statearr_3486[(7)] = inst_3437);

(statearr_3486[(11)] = inst_3438);

(statearr_3486[(9)] = inst_3439);

(statearr_3486[(8)] = inst_3440);

return statearr_3486;
})();
var statearr_3487_3577 = state_3484__$1;
(statearr_3487_3577[(2)] = null);

(statearr_3487_3577[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3485 === (2))){
var inst_3440 = (state_3484[(8)]);
var inst_3439 = (state_3484[(9)]);
var inst_3442 = (inst_3440 < inst_3439);
var inst_3443 = inst_3442;
var state_3484__$1 = state_3484;
if(cljs.core.truth_(inst_3443)){
var statearr_3488_3578 = state_3484__$1;
(statearr_3488_3578[(1)] = (4));

} else {
var statearr_3489_3579 = state_3484__$1;
(statearr_3489_3579[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3485 === (3))){
var inst_3481 = (state_3484[(2)]);
var inst_3482 = cljs.core.async.close_BANG_.call(null,execution_plans);
var state_3484__$1 = (function (){var statearr_3490 = state_3484;
(statearr_3490[(10)] = inst_3481);

return statearr_3490;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3484__$1,inst_3482);
} else {
if((state_val_3485 === (4))){
var inst_3438 = (state_3484[(11)]);
var inst_3440 = (state_3484[(8)]);
var inst_3445 = cljs.core._nth.call(null,inst_3438,inst_3440);
var inst_3446 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_3447 = mach.core.build_plan.call(null,machfile,inst_3445);
var inst_3448 = [inst_3445,inst_3447];
var inst_3449 = (new cljs.core.PersistentVector(null,(2),(5),inst_3446,inst_3448,null));
var state_3484__$1 = state_3484;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_3484__$1,(7),execution_plans,inst_3449);
} else {
if((state_val_3485 === (5))){
var inst_3437 = (state_3484[(7)]);
var inst_3455 = (state_3484[(12)]);
var inst_3455__$1 = cljs.core.seq.call(null,inst_3437);
var state_3484__$1 = (function (){var statearr_3494 = state_3484;
(statearr_3494[(12)] = inst_3455__$1);

return statearr_3494;
})();
if(inst_3455__$1){
var statearr_3495_3580 = state_3484__$1;
(statearr_3495_3580[(1)] = (8));

} else {
var statearr_3496_3581 = state_3484__$1;
(statearr_3496_3581[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3485 === (6))){
var inst_3479 = (state_3484[(2)]);
var state_3484__$1 = state_3484;
var statearr_3497_3582 = state_3484__$1;
(statearr_3497_3582[(2)] = inst_3479);

(statearr_3497_3582[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3485 === (7))){
var inst_3440 = (state_3484[(8)]);
var inst_3437 = (state_3484[(7)]);
var inst_3438 = (state_3484[(11)]);
var inst_3439 = (state_3484[(9)]);
var inst_3451 = (state_3484[(2)]);
var inst_3452 = (inst_3440 + (1));
var tmp3491 = inst_3437;
var tmp3492 = inst_3438;
var tmp3493 = inst_3439;
var inst_3437__$1 = tmp3491;
var inst_3438__$1 = tmp3492;
var inst_3439__$1 = tmp3493;
var inst_3440__$1 = inst_3452;
var state_3484__$1 = (function (){var statearr_3498 = state_3484;
(statearr_3498[(13)] = inst_3451);

(statearr_3498[(7)] = inst_3437__$1);

(statearr_3498[(11)] = inst_3438__$1);

(statearr_3498[(9)] = inst_3439__$1);

(statearr_3498[(8)] = inst_3440__$1);

return statearr_3498;
})();
var statearr_3499_3583 = state_3484__$1;
(statearr_3499_3583[(2)] = null);

(statearr_3499_3583[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3485 === (8))){
var inst_3455 = (state_3484[(12)]);
var inst_3457 = cljs.core.chunked_seq_QMARK_.call(null,inst_3455);
var state_3484__$1 = state_3484;
if(inst_3457){
var statearr_3500_3584 = state_3484__$1;
(statearr_3500_3584[(1)] = (11));

} else {
var statearr_3501_3585 = state_3484__$1;
(statearr_3501_3585[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3485 === (9))){
var state_3484__$1 = state_3484;
var statearr_3502_3586 = state_3484__$1;
(statearr_3502_3586[(2)] = null);

(statearr_3502_3586[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3485 === (10))){
var inst_3477 = (state_3484[(2)]);
var state_3484__$1 = state_3484;
var statearr_3503_3587 = state_3484__$1;
(statearr_3503_3587[(2)] = inst_3477);

(statearr_3503_3587[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3485 === (11))){
var inst_3455 = (state_3484[(12)]);
var inst_3459 = cljs.core.chunk_first.call(null,inst_3455);
var inst_3460 = cljs.core.chunk_rest.call(null,inst_3455);
var inst_3461 = cljs.core.count.call(null,inst_3459);
var inst_3437 = inst_3460;
var inst_3438 = inst_3459;
var inst_3439 = inst_3461;
var inst_3440 = (0);
var state_3484__$1 = (function (){var statearr_3504 = state_3484;
(statearr_3504[(7)] = inst_3437);

(statearr_3504[(11)] = inst_3438);

(statearr_3504[(9)] = inst_3439);

(statearr_3504[(8)] = inst_3440);

return statearr_3504;
})();
var statearr_3505_3588 = state_3484__$1;
(statearr_3505_3588[(2)] = null);

(statearr_3505_3588[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3485 === (12))){
var inst_3455 = (state_3484[(12)]);
var inst_3464 = cljs.core.first.call(null,inst_3455);
var inst_3465 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_3466 = mach.core.build_plan.call(null,machfile,inst_3464);
var inst_3467 = [inst_3464,inst_3466];
var inst_3468 = (new cljs.core.PersistentVector(null,(2),(5),inst_3465,inst_3467,null));
var state_3484__$1 = state_3484;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_3484__$1,(14),execution_plans,inst_3468);
} else {
if((state_val_3485 === (13))){
var inst_3474 = (state_3484[(2)]);
var state_3484__$1 = state_3484;
var statearr_3506_3589 = state_3484__$1;
(statearr_3506_3589[(2)] = inst_3474);

(statearr_3506_3589[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3485 === (14))){
var inst_3455 = (state_3484[(12)]);
var inst_3470 = (state_3484[(2)]);
var inst_3471 = cljs.core.next.call(null,inst_3455);
var inst_3437 = inst_3471;
var inst_3438 = null;
var inst_3439 = (0);
var inst_3440 = (0);
var state_3484__$1 = (function (){var statearr_3507 = state_3484;
(statearr_3507[(14)] = inst_3470);

(statearr_3507[(7)] = inst_3437);

(statearr_3507[(11)] = inst_3438);

(statearr_3507[(9)] = inst_3439);

(statearr_3507[(8)] = inst_3440);

return statearr_3507;
})();
var statearr_3508_3590 = state_3484__$1;
(statearr_3508_3590[(2)] = null);

(statearr_3508_3590[(1)] = (2));


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
});})(c__8__auto___3576,execution_plans))
;
return ((function (switch__3__auto__,c__8__auto___3576,execution_plans){
return (function() {
var mach$core$execute_plan_async_$_state_machine__4__auto__ = null;
var mach$core$execute_plan_async_$_state_machine__4__auto____0 = (function (){
var statearr_3509 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_3509[(0)] = mach$core$execute_plan_async_$_state_machine__4__auto__);

(statearr_3509[(1)] = (1));

return statearr_3509;
});
var mach$core$execute_plan_async_$_state_machine__4__auto____1 = (function (state_3484){
while(true){
var ret_value__5__auto__ = (function (){try{while(true){
var result__6__auto__ = switch__3__auto__.call(null,state_3484);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
continue;
} else {
return result__6__auto__;
}
break;
}
}catch (e3510){if((e3510 instanceof Object)){
var ex__7__auto__ = e3510;
var statearr_3511_3591 = state_3484;
(statearr_3511_3591[(5)] = ex__7__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_3484);

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
throw e3510;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
var G__3592 = state_3484;
state_3484 = G__3592;
continue;
} else {
return ret_value__5__auto__;
}
break;
}
});
mach$core$execute_plan_async_$_state_machine__4__auto__ = function(state_3484){
switch(arguments.length){
case 0:
return mach$core$execute_plan_async_$_state_machine__4__auto____0.call(this);
case 1:
return mach$core$execute_plan_async_$_state_machine__4__auto____1.call(this,state_3484);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
mach$core$execute_plan_async_$_state_machine__4__auto__.cljs$core$IFn$_invoke$arity$0 = mach$core$execute_plan_async_$_state_machine__4__auto____0;
mach$core$execute_plan_async_$_state_machine__4__auto__.cljs$core$IFn$_invoke$arity$1 = mach$core$execute_plan_async_$_state_machine__4__auto____1;
return mach$core$execute_plan_async_$_state_machine__4__auto__;
})()
;})(switch__3__auto__,c__8__auto___3576,execution_plans))
})();
var state__10__auto__ = (function (){var statearr_3512 = f__9__auto__.call(null);
(statearr_3512[(6)] = c__8__auto___3576);

return statearr_3512;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10__auto__);
});})(c__8__auto___3576,execution_plans))
);


var c__8__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8__auto__,execution_plans){
return (function (){
var f__9__auto__ = (function (){var switch__3__auto__ = ((function (c__8__auto__,execution_plans){
return (function (state_3550){
var state_val_3551 = (state_3550[(1)]);
if((state_val_3551 === (1))){
var inst_3513 = cljs.core.PersistentHashMap.EMPTY;
var inst_3514 = inst_3513;
var state_3550__$1 = (function (){var statearr_3552 = state_3550;
(statearr_3552[(7)] = inst_3514);

return statearr_3552;
})();
var statearr_3553_3593 = state_3550__$1;
(statearr_3553_3593[(2)] = null);

(statearr_3553_3593[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3551 === (2))){
var state_3550__$1 = state_3550;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3550__$1,(4),execution_plans);
} else {
if((state_val_3551 === (3))){
var inst_3548 = (state_3550[(2)]);
var state_3550__$1 = state_3550;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3550__$1,inst_3548);
} else {
if((state_val_3551 === (4))){
var inst_3517 = (state_3550[(8)]);
var inst_3517__$1 = (state_3550[(2)]);
var state_3550__$1 = (function (){var statearr_3554 = state_3550;
(statearr_3554[(8)] = inst_3517__$1);

return statearr_3554;
})();
if(cljs.core.truth_(inst_3517__$1)){
var statearr_3555_3594 = state_3550__$1;
(statearr_3555_3594[(1)] = (5));

} else {
var statearr_3556_3595 = state_3550__$1;
(statearr_3556_3595[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3551 === (5))){
var inst_3517 = (state_3550[(8)]);
var inst_3514 = (state_3550[(7)]);
var inst_3522 = (state_3550[(9)]);
var inst_3522__$1 = cljs.core.nth.call(null,inst_3517,(0),null);
var inst_3523 = cljs.core.nth.call(null,inst_3517,(1),null);
var inst_3524 = cljs.core.contains_QMARK_.call(null,inst_3514,inst_3522__$1);
var state_3550__$1 = (function (){var statearr_3557 = state_3550;
(statearr_3557[(9)] = inst_3522__$1);

(statearr_3557[(11)] = inst_3523);

return statearr_3557;
})();
if(inst_3524){
var statearr_3558_3596 = state_3550__$1;
(statearr_3558_3596[(1)] = (8));

} else {
var statearr_3559_3597 = state_3550__$1;
(statearr_3559_3597[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3551 === (6))){
var state_3550__$1 = state_3550;
var statearr_3560_3598 = state_3550__$1;
(statearr_3560_3598[(2)] = null);

(statearr_3560_3598[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3551 === (7))){
var inst_3514 = (state_3550[(7)]);
var inst_3546 = (state_3550[(2)]);
var state_3550__$1 = (function (){var statearr_3561 = state_3550;
(statearr_3561[(10)] = inst_3546);

return statearr_3561;
})();
var statearr_3562_3599 = state_3550__$1;
(statearr_3562_3599[(2)] = inst_3514);

(statearr_3562_3599[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3551 === (8))){
var inst_3522 = (state_3550[(9)]);
var inst_3526 = (state_3550[(12)]);
var inst_3526__$1 = cljs.core.second.call(null,inst_3522);
var state_3550__$1 = (function (){var statearr_3563 = state_3550;
(statearr_3563[(12)] = inst_3526__$1);

return statearr_3563;
})();
if(cljs.core.truth_(inst_3526__$1)){
var statearr_3564_3600 = state_3550__$1;
(statearr_3564_3600[(1)] = (11));

} else {
var statearr_3565_3601 = state_3550__$1;
(statearr_3565_3601[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3551 === (9))){
var inst_3523 = (state_3550[(11)]);
var inst_3537 = mach.core.execute_plan.call(null,machfile,inst_3523);
var state_3550__$1 = state_3550;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3550__$1,(14),inst_3537);
} else {
if((state_val_3551 === (10))){
var inst_3543 = (state_3550[(2)]);
var state_3550__$1 = state_3550;
var statearr_3566_3602 = state_3550__$1;
(statearr_3566_3602[(2)] = inst_3543);

(statearr_3566_3602[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3551 === (11))){
var inst_3522 = (state_3550[(9)]);
var inst_3526 = (state_3550[(12)]);
var inst_3528 = cljs.core.first.call(null,inst_3522);
var inst_3529 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_3528),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_3526)].join('');
var state_3550__$1 = state_3550;
var statearr_3567_3603 = state_3550__$1;
(statearr_3567_3603[(2)] = inst_3529);

(statearr_3567_3603[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3551 === (12))){
var inst_3522 = (state_3550[(9)]);
var inst_3531 = cljs.core.first.call(null,inst_3522);
var state_3550__$1 = state_3550;
var statearr_3568_3604 = state_3550__$1;
(statearr_3568_3604[(2)] = inst_3531);

(statearr_3568_3604[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3551 === (13))){
var inst_3533 = (state_3550[(2)]);
var inst_3534 = ["mach: '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_3533),"' is up to date."].join('');
var inst_3535 = cljs.core.println.call(null,inst_3534);
var state_3550__$1 = state_3550;
var statearr_3569_3605 = state_3550__$1;
(statearr_3569_3605[(2)] = inst_3535);

(statearr_3569_3605[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3551 === (14))){
var inst_3514 = (state_3550[(7)]);
var inst_3539 = (state_3550[(2)]);
var inst_3540 = cljs.core.merge.call(null,inst_3514,inst_3539);
var inst_3514__$1 = inst_3540;
var state_3550__$1 = (function (){var statearr_3570 = state_3550;
(statearr_3570[(7)] = inst_3514__$1);

return statearr_3570;
})();
var statearr_3571_3606 = state_3550__$1;
(statearr_3571_3606[(2)] = null);

(statearr_3571_3606[(1)] = (2));


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
});})(c__8__auto__,execution_plans))
;
return ((function (switch__3__auto__,c__8__auto__,execution_plans){
return (function() {
var mach$core$execute_plan_async_$_state_machine__4__auto__ = null;
var mach$core$execute_plan_async_$_state_machine__4__auto____0 = (function (){
var statearr_3572 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_3572[(0)] = mach$core$execute_plan_async_$_state_machine__4__auto__);

(statearr_3572[(1)] = (1));

return statearr_3572;
});
var mach$core$execute_plan_async_$_state_machine__4__auto____1 = (function (state_3550){
while(true){
var ret_value__5__auto__ = (function (){try{while(true){
var result__6__auto__ = switch__3__auto__.call(null,state_3550);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
continue;
} else {
return result__6__auto__;
}
break;
}
}catch (e3573){if((e3573 instanceof Object)){
var ex__7__auto__ = e3573;
var statearr_3574_3607 = state_3550;
(statearr_3574_3607[(5)] = ex__7__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_3550);

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
throw e3573;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
var G__3608 = state_3550;
state_3550 = G__3608;
continue;
} else {
return ret_value__5__auto__;
}
break;
}
});
mach$core$execute_plan_async_$_state_machine__4__auto__ = function(state_3550){
switch(arguments.length){
case 0:
return mach$core$execute_plan_async_$_state_machine__4__auto____0.call(this);
case 1:
return mach$core$execute_plan_async_$_state_machine__4__auto____1.call(this,state_3550);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
mach$core$execute_plan_async_$_state_machine__4__auto__.cljs$core$IFn$_invoke$arity$0 = mach$core$execute_plan_async_$_state_machine__4__auto____0;
mach$core$execute_plan_async_$_state_machine__4__auto__.cljs$core$IFn$_invoke$arity$1 = mach$core$execute_plan_async_$_state_machine__4__auto____1;
return mach$core$execute_plan_async_$_state_machine__4__auto__;
})()
;})(switch__3__auto__,c__8__auto__,execution_plans))
})();
var state__10__auto__ = (function (){var statearr_3575 = f__9__auto__.call(null);
(statearr_3575[(6)] = c__8__auto__);

return statearr_3575;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10__auto__);
});})(c__8__auto__,execution_plans))
);

return c__8__auto__;
});
mach.core.expand_out_target_and_verbs = (function mach$core$expand_out_target_and_verbs(machfile,target_PLUS_verbs){
var vec__3609 = clojure.string.split.call(null,target_PLUS_verbs,":");
var seq__3610 = cljs.core.seq.call(null,vec__3609);
var first__3611 = cljs.core.first.call(null,seq__3610);
var seq__3610__$1 = cljs.core.next.call(null,seq__3610);
var target_name = first__3611;
var verbs = seq__3610__$1;
var target_symbol = mach.core.resolve_target.call(null,machfile,target_name);
var iter__22810__auto__ = ((function (vec__3609,seq__3610,first__3611,seq__3610__$1,target_name,verbs,target_symbol){
return (function mach$core$expand_out_target_and_verbs_$_iter__3612(s__3613){
return (new cljs.core.LazySeq(null,((function (vec__3609,seq__3610,first__3611,seq__3610__$1,target_name,verbs,target_symbol){
return (function (){
var s__3613__$1 = s__3613;
while(true){
var temp__20428__auto__ = cljs.core.seq.call(null,s__3613__$1);
if(temp__20428__auto__){
var s__3613__$2 = temp__20428__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__3613__$2)){
var c__22808__auto__ = cljs.core.chunk_first.call(null,s__3613__$2);
var size__22809__auto__ = cljs.core.count.call(null,c__22808__auto__);
var b__3615 = cljs.core.chunk_buffer.call(null,size__22809__auto__);
if((function (){var i__3614 = (0);
while(true){
if((i__3614 < size__22809__auto__)){
var verb = cljs.core._nth.call(null,c__22808__auto__,i__3614);
cljs.core.chunk_append.call(null,b__3615,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [target_symbol,verb], null));

var G__3616 = (i__3614 + (1));
i__3614 = G__3616;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__3615),mach$core$expand_out_target_and_verbs_$_iter__3612.call(null,cljs.core.chunk_rest.call(null,s__3613__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__3615),null);
}
} else {
var verb = cljs.core.first.call(null,s__3613__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [target_symbol,verb], null),mach$core$expand_out_target_and_verbs_$_iter__3612.call(null,cljs.core.rest.call(null,s__3613__$2)));
}
} else {
return null;
}
break;
}
});})(vec__3609,seq__3610,first__3611,seq__3610__$1,target_name,verbs,target_symbol))
,null,null));
});})(vec__3609,seq__3610,first__3611,seq__3610__$1,target_name,verbs,target_symbol))
;
return iter__22810__auto__.call(null,((verbs)?cljs.core.map.call(null,cljs.core.symbol,verbs):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null)));
});
mach.core.preprocess_init = (function mach$core$preprocess_init(machfile){
var c__8__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8__auto__){
return (function (){
var f__9__auto__ = (function (){var switch__3__auto__ = ((function (c__8__auto__){
return (function (state_3632){
var state_val_3633 = (state_3632[(1)]);
if((state_val_3633 === (1))){
var inst_3618 = (machfile == null);
var state_3632__$1 = state_3632;
if(cljs.core.truth_(inst_3618)){
var statearr_3634_3648 = state_3632__$1;
(statearr_3634_3648[(1)] = (2));

} else {
var statearr_3635_3649 = state_3632__$1;
(statearr_3635_3649[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3633 === (2))){
var state_3632__$1 = state_3632;
var statearr_3636_3650 = state_3632__$1;
(statearr_3636_3650[(2)] = null);

(statearr_3636_3650[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3633 === (3))){
var inst_3621 = new cljs.core.Symbol("mach","init","mach/init",(-243013142),null);
var inst_3622 = cljs.core.get.call(null,machfile,inst_3621);
var state_3632__$1 = state_3632;
var statearr_3637_3651 = state_3632__$1;
(statearr_3637_3651[(2)] = inst_3622);

(statearr_3637_3651[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3633 === (4))){
var inst_3624 = (state_3632[(7)]);
var inst_3624__$1 = (state_3632[(2)]);
var inst_3625 = (inst_3624__$1 == null);
var state_3632__$1 = (function (){var statearr_3638 = state_3632;
(statearr_3638[(7)] = inst_3624__$1);

return statearr_3638;
})();
if(cljs.core.truth_(inst_3625)){
var statearr_3639_3652 = state_3632__$1;
(statearr_3639_3652[(1)] = (5));

} else {
var statearr_3640_3653 = state_3632__$1;
(statearr_3640_3653[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3633 === (5))){
var state_3632__$1 = state_3632;
var statearr_3641_3654 = state_3632__$1;
(statearr_3641_3654[(2)] = null);

(statearr_3641_3654[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3633 === (6))){
var inst_3624 = (state_3632[(7)]);
var inst_3628 = mach.core.code_eval.call(null,inst_3624);
var state_3632__$1 = state_3632;
var statearr_3642_3655 = state_3632__$1;
(statearr_3642_3655[(2)] = inst_3628);

(statearr_3642_3655[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3633 === (7))){
var inst_3630 = (state_3632[(2)]);
var state_3632__$1 = (function (){var statearr_3643 = state_3632;
(statearr_3643[(8)] = inst_3630);

return statearr_3643;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3632__$1,machfile);
} else {
return null;
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
var mach$core$preprocess_init_$_state_machine__4__auto__ = null;
var mach$core$preprocess_init_$_state_machine__4__auto____0 = (function (){
var statearr_3644 = [null,null,null,null,null,null,null,null,null];
(statearr_3644[(0)] = mach$core$preprocess_init_$_state_machine__4__auto__);

(statearr_3644[(1)] = (1));

return statearr_3644;
});
var mach$core$preprocess_init_$_state_machine__4__auto____1 = (function (state_3632){
while(true){
var ret_value__5__auto__ = (function (){try{while(true){
var result__6__auto__ = switch__3__auto__.call(null,state_3632);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
continue;
} else {
return result__6__auto__;
}
break;
}
}catch (e3645){if((e3645 instanceof Object)){
var ex__7__auto__ = e3645;
var statearr_3646_3656 = state_3632;
(statearr_3646_3656[(5)] = ex__7__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_3632);

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
throw e3645;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
var G__3657 = state_3632;
state_3632 = G__3657;
continue;
} else {
return ret_value__5__auto__;
}
break;
}
});
mach$core$preprocess_init_$_state_machine__4__auto__ = function(state_3632){
switch(arguments.length){
case 0:
return mach$core$preprocess_init_$_state_machine__4__auto____0.call(this);
case 1:
return mach$core$preprocess_init_$_state_machine__4__auto____1.call(this,state_3632);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
mach$core$preprocess_init_$_state_machine__4__auto__.cljs$core$IFn$_invoke$arity$0 = mach$core$preprocess_init_$_state_machine__4__auto____0;
mach$core$preprocess_init_$_state_machine__4__auto__.cljs$core$IFn$_invoke$arity$1 = mach$core$preprocess_init_$_state_machine__4__auto____1;
return mach$core$preprocess_init_$_state_machine__4__auto__;
})()
;})(switch__3__auto__,c__8__auto__))
})();
var state__10__auto__ = (function (){var statearr_3647 = f__9__auto__.call(null);
(statearr_3647[(6)] = c__8__auto__);

return statearr_3647;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10__auto__);
});})(c__8__auto__))
);

return c__8__auto__;
});
mach.core.preprocess_import = (function mach$core$preprocess_import(machfile){
var c__8__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8__auto__){
return (function (){
var f__9__auto__ = (function (){var switch__3__auto__ = ((function (c__8__auto__){
return (function (state_3708){
var state_val_3709 = (state_3708[(1)]);
if((state_val_3709 === (1))){
var inst_3666 = (state_3708[(7)]);
var inst_3665 = new cljs.core.Symbol("mach","import","mach/import",(161533357),null);
var inst_3666__$1 = cljs.core.get.call(null,machfile,inst_3665);
var inst_3667 = cljs.core.seq.call(null,inst_3666__$1);
var inst_3668 = cljs.core.first.call(null,inst_3667);
var inst_3669 = cljs.core.next.call(null,inst_3667);
var inst_3670 = machfile;
var inst_3671 = inst_3666__$1;
var state_3708__$1 = (function (){var statearr_3710 = state_3708;
(statearr_3710[(7)] = inst_3666__$1);

(statearr_3710[(12)] = inst_3668);

(statearr_3710[(10)] = inst_3669);

(statearr_3710[(13)] = inst_3670);

(statearr_3710[(8)] = inst_3671);

return statearr_3710;
})();
var statearr_3711_3730 = state_3708__$1;
(statearr_3711_3730[(2)] = null);

(statearr_3711_3730[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3709 === (2))){
var inst_3671 = (state_3708[(8)]);
var inst_3677 = (state_3708[(9)]);
var inst_3676 = cljs.core.seq.call(null,inst_3671);
var inst_3677__$1 = cljs.core.first.call(null,inst_3676);
var inst_3678 = cljs.core.next.call(null,inst_3676);
var state_3708__$1 = (function (){var statearr_3712 = state_3708;
(statearr_3712[(9)] = inst_3677__$1);

(statearr_3712[(14)] = inst_3678);

return statearr_3712;
})();
if(cljs.core.truth_(inst_3677__$1)){
var statearr_3713_3731 = state_3708__$1;
(statearr_3713_3731[(1)] = (4));

} else {
var statearr_3714_3732 = state_3708__$1;
(statearr_3714_3732[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3709 === (3))){
var inst_3706 = (state_3708[(2)]);
var state_3708__$1 = state_3708;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3708__$1,inst_3706);
} else {
if((state_val_3709 === (4))){
var inst_3677 = (state_3708[(9)]);
var inst_3671 = (state_3708[(8)]);
var inst_3669 = (state_3708[(10)]);
var inst_3666 = (state_3708[(7)]);
var inst_3668 = (state_3708[(12)]);
var inst_3670 = (state_3708[(13)]);
var inst_3678 = (state_3708[(14)]);
var inst_3683 = cljs.core.seq.call(null,inst_3677);
var inst_3684 = cljs.core.first.call(null,inst_3683);
var inst_3685 = cljs.core.next.call(null,inst_3683);
var inst_3686 = cljs.core.first.call(null,inst_3685);
var inst_3687 = cljs.core.next.call(null,inst_3685);
var inst_3688 = cljs.core.apply.call(null,cljs.core.hash_map,inst_3687);
var inst_3689 = cljs.core.PersistentHashMap.EMPTY;
var inst_3694 = (function (){var import$ = inst_3677;
var G__3661 = inst_3671;
var seq__3663 = inst_3669;
var vec__3662 = inst_3666;
var props = inst_3686;
var first__3675 = inst_3677;
var vec__3673 = inst_3671;
var vec__3680 = inst_3677;
var temp__20271__auto__ = inst_3677;
var seq__3681 = inst_3687;
var first__3664 = inst_3668;
var machfile__$1 = inst_3670;
var imports = inst_3678;
var extension = inst_3684;
var seq__3674 = inst_3678;
var opts = inst_3688;
var first__3682 = inst_3686;
return ((function (import$,G__3661,seq__3663,vec__3662,props,first__3675,vec__3673,vec__3680,temp__20271__auto__,seq__3681,first__3664,machfile__$1,imports,extension,seq__3674,opts,first__3682,inst_3677,inst_3671,inst_3669,inst_3666,inst_3668,inst_3670,inst_3678,inst_3683,inst_3684,inst_3685,inst_3686,inst_3687,inst_3688,inst_3689,state_val_3709,c__8__auto__){
return (function mach$core$preprocess_import_$_iter__3690(s__3691){
return (new cljs.core.LazySeq(null,((function (import$,G__3661,seq__3663,vec__3662,props,first__3675,vec__3673,vec__3680,temp__20271__auto__,seq__3681,first__3664,machfile__$1,imports,extension,seq__3674,opts,first__3682,inst_3677,inst_3671,inst_3669,inst_3666,inst_3668,inst_3670,inst_3678,inst_3683,inst_3684,inst_3685,inst_3686,inst_3687,inst_3688,inst_3689,state_val_3709,c__8__auto__){
return (function (){
var s__3691__$1 = s__3691;
while(true){
var temp__20428__auto__ = cljs.core.seq.call(null,s__3691__$1);
if(temp__20428__auto__){
var s__3691__$2 = temp__20428__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__3691__$2)){
var c__22808__auto__ = cljs.core.chunk_first.call(null,s__3691__$2);
var size__22809__auto__ = cljs.core.count.call(null,c__22808__auto__);
var b__3693 = cljs.core.chunk_buffer.call(null,size__22809__auto__);
if((function (){var i__3692 = (0);
while(true){
if((i__3692 < size__22809__auto__)){
var vec__3715 = cljs.core._nth.call(null,c__22808__auto__,i__3692);
var k = cljs.core.nth.call(null,vec__3715,(0),null);
var target = cljs.core.nth.call(null,vec__3715,(1),null);
var k__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"as","as",(1148689641)).cljs$core$IFn$_invoke$arity$1(opts))?cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"as","as",(1148689641)).cljs$core$IFn$_invoke$arity$1(opts))].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join('')):(cljs.core.truth_(new cljs.core.Keyword(null,"rename","rename",(1508157613)).cljs$core$IFn$_invoke$arity$1(opts))?cljs.core.get.call(null,new cljs.core.Keyword(null,"rename","rename",(1508157613)).cljs$core$IFn$_invoke$arity$1(opts),k,k):k
));
cljs.core.chunk_append.call(null,b__3693,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k__$1,mach.core.map_props_onto_extension_target.call(null,target,props)], null));

var G__3733 = (i__3692 + (1));
i__3692 = G__3733;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__3693),mach$core$preprocess_import_$_iter__3690.call(null,cljs.core.chunk_rest.call(null,s__3691__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__3693),null);
}
} else {
var vec__3718 = cljs.core.first.call(null,s__3691__$2);
var k = cljs.core.nth.call(null,vec__3718,(0),null);
var target = cljs.core.nth.call(null,vec__3718,(1),null);
var k__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"as","as",(1148689641)).cljs$core$IFn$_invoke$arity$1(opts))?cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"as","as",(1148689641)).cljs$core$IFn$_invoke$arity$1(opts))].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join('')):(cljs.core.truth_(new cljs.core.Keyword(null,"rename","rename",(1508157613)).cljs$core$IFn$_invoke$arity$1(opts))?cljs.core.get.call(null,new cljs.core.Keyword(null,"rename","rename",(1508157613)).cljs$core$IFn$_invoke$arity$1(opts),k,k):k
));
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k__$1,mach.core.map_props_onto_extension_target.call(null,target,props)], null),mach$core$preprocess_import_$_iter__3690.call(null,cljs.core.rest.call(null,s__3691__$2)));
}
} else {
return null;
}
break;
}
});})(import$,G__3661,seq__3663,vec__3662,props,first__3675,vec__3673,vec__3680,temp__20271__auto__,seq__3681,first__3664,machfile__$1,imports,extension,seq__3674,opts,first__3682,inst_3677,inst_3671,inst_3669,inst_3666,inst_3668,inst_3670,inst_3678,inst_3683,inst_3684,inst_3685,inst_3686,inst_3687,inst_3688,inst_3689,state_val_3709,c__8__auto__))
,null,null));
});
;})(import$,G__3661,seq__3663,vec__3662,props,first__3675,vec__3673,vec__3680,temp__20271__auto__,seq__3681,first__3664,machfile__$1,imports,extension,seq__3674,opts,first__3682,inst_3677,inst_3671,inst_3669,inst_3666,inst_3668,inst_3670,inst_3678,inst_3683,inst_3684,inst_3685,inst_3686,inst_3687,inst_3688,inst_3689,state_val_3709,c__8__auto__))
})();
var inst_3695 = mach.core.load_extension.call(null,inst_3684);
var state_3708__$1 = (function (){var statearr_3721 = state_3708;
(statearr_3721[(11)] = inst_3689);

(statearr_3721[(15)] = inst_3694);

return statearr_3721;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3708__$1,(7),inst_3695);
} else {
if((state_val_3709 === (5))){
var inst_3670 = (state_3708[(13)]);
var state_3708__$1 = state_3708;
var statearr_3722_3734 = state_3708__$1;
(statearr_3722_3734[(2)] = inst_3670);

(statearr_3722_3734[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3709 === (6))){
var inst_3704 = (state_3708[(2)]);
var state_3708__$1 = state_3708;
var statearr_3723_3735 = state_3708__$1;
(statearr_3723_3735[(2)] = inst_3704);

(statearr_3723_3735[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3709 === (7))){
var inst_3694 = (state_3708[(15)]);
var inst_3689 = (state_3708[(11)]);
var inst_3670 = (state_3708[(13)]);
var inst_3678 = (state_3708[(14)]);
var inst_3697 = (state_3708[(2)]);
var inst_3698 = inst_3694.call(null,inst_3697);
var inst_3699 = cljs.core.into.call(null,inst_3689,inst_3698);
var inst_3700 = cljs.core.merge.call(null,inst_3670,inst_3699);
var inst_3670__$1 = inst_3700;
var inst_3671 = inst_3678;
var state_3708__$1 = (function (){var statearr_3724 = state_3708;
(statearr_3724[(13)] = inst_3670__$1);

(statearr_3724[(8)] = inst_3671);

return statearr_3724;
})();
var statearr_3725_3736 = state_3708__$1;
(statearr_3725_3736[(2)] = null);

(statearr_3725_3736[(1)] = (2));


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
});})(c__8__auto__))
;
return ((function (switch__3__auto__,c__8__auto__){
return (function() {
var mach$core$preprocess_import_$_state_machine__4__auto__ = null;
var mach$core$preprocess_import_$_state_machine__4__auto____0 = (function (){
var statearr_3726 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_3726[(0)] = mach$core$preprocess_import_$_state_machine__4__auto__);

(statearr_3726[(1)] = (1));

return statearr_3726;
});
var mach$core$preprocess_import_$_state_machine__4__auto____1 = (function (state_3708){
while(true){
var ret_value__5__auto__ = (function (){try{while(true){
var result__6__auto__ = switch__3__auto__.call(null,state_3708);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
continue;
} else {
return result__6__auto__;
}
break;
}
}catch (e3727){if((e3727 instanceof Object)){
var ex__7__auto__ = e3727;
var statearr_3728_3737 = state_3708;
(statearr_3728_3737[(5)] = ex__7__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_3708);

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
throw e3727;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
var G__3738 = state_3708;
state_3708 = G__3738;
continue;
} else {
return ret_value__5__auto__;
}
break;
}
});
mach$core$preprocess_import_$_state_machine__4__auto__ = function(state_3708){
switch(arguments.length){
case 0:
return mach$core$preprocess_import_$_state_machine__4__auto____0.call(this);
case 1:
return mach$core$preprocess_import_$_state_machine__4__auto____1.call(this,state_3708);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
mach$core$preprocess_import_$_state_machine__4__auto__.cljs$core$IFn$_invoke$arity$0 = mach$core$preprocess_import_$_state_machine__4__auto____0;
mach$core$preprocess_import_$_state_machine__4__auto__.cljs$core$IFn$_invoke$arity$1 = mach$core$preprocess_import_$_state_machine__4__auto____1;
return mach$core$preprocess_import_$_state_machine__4__auto__;
})()
;})(switch__3__auto__,c__8__auto__))
})();
var state__10__auto__ = (function (){var statearr_3729 = f__9__auto__.call(null);
(statearr_3729[(6)] = c__8__auto__);

return statearr_3729;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10__auto__);
});})(c__8__auto__))
);

return c__8__auto__;
});
mach.core.write_classpath = (function mach$core$write_classpath(cp_file,cp_hash_file,deps){
cljs.core.println.call(null,"Writing Mach classpath to",cp_file);

var result = mach.core.child_process.spawnSync("boot",cljs.core.clj__GT_js.call(null,cljs.core.concat.call(null,cljs.core.mapv.call(null,(function (p__3739){
var vec__3740 = p__3739;
var sym = cljs.core.nth.call(null,vec__3740,(0),null);
var v = cljs.core.nth.call(null,vec__3740,(1),null);
return ["-d ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__20917__auto__ = v;
if(cljs.core.truth_(or__20917__auto__)){
return or__20917__auto__;
} else {
return "RELEASE";
}
})())].join('');
}),deps),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["-B","with-cp","--write","--file",cp_file], null))),({"shell": true}));
if(!(cljs.core._EQ_.call(null,(0),result.status))){
cljs.core.println.call(null,result.stderr.toString("utf8"));

throw (new Error(["Error while resolving dependencies"].join('')));
} else {
return mach.core.fs.writeFileSync.call(null,cp_hash_file,cljs.core.hash.call(null,deps),({"flag": ((mach.core.constants.O_CREAT | mach.core.constants.O_SYNC) | mach.core.constants.O_RDWR)}));
}
});
mach.core.preprocess_dependencies = (function mach$core$preprocess_dependencies(machfile){
var c__8__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8__auto__){
return (function (){
var f__9__auto__ = (function (){var switch__3__auto__ = ((function (c__8__auto__){
return (function (state_3775){
var state_val_3776 = (state_3775[(1)]);
if((state_val_3776 === (1))){
var inst_3744 = (state_3775[(7)]);
var inst_3743 = new cljs.core.Symbol("mach","dependencies","mach/dependencies",(-1610140499),null);
var inst_3744__$1 = cljs.core.get.call(null,machfile,inst_3743);
var state_3775__$1 = (function (){var statearr_3777 = state_3775;
(statearr_3777[(7)] = inst_3744__$1);

return statearr_3777;
})();
if(cljs.core.truth_(inst_3744__$1)){
var statearr_3778_3802 = state_3775__$1;
(statearr_3778_3802[(1)] = (2));

} else {
var statearr_3779_3803 = state_3775__$1;
(statearr_3779_3803[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3776 === (2))){
var inst_3744 = (state_3775[(7)]);
var state_3775__$1 = state_3775;
var statearr_3780_3804 = state_3775__$1;
(statearr_3780_3804[(2)] = inst_3744);

(statearr_3780_3804[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3776 === (3))){
var inst_3747 = new cljs.core.Symbol("mach","m2","mach/m2",(1056484250),null);
var inst_3748 = cljs.core.get.call(null,machfile,inst_3747);
var state_3775__$1 = state_3775;
var statearr_3781_3805 = state_3775__$1;
(statearr_3781_3805[(2)] = inst_3748);

(statearr_3781_3805[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3776 === (4))){
var inst_3750 = (state_3775[(8)]);
var inst_3750__$1 = (state_3775[(2)]);
var state_3775__$1 = (function (){var statearr_3782 = state_3775;
(statearr_3782[(8)] = inst_3750__$1);

return statearr_3782;
})();
if(cljs.core.truth_(inst_3750__$1)){
var statearr_3783_3806 = state_3775__$1;
(statearr_3783_3806[(1)] = (5));

} else {
var statearr_3784_3807 = state_3775__$1;
(statearr_3784_3807[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3776 === (5))){
var inst_3753 = (state_3775[(9)]);
var inst_3752 = mach.core.ensure_mach_dir_exists.call(null);
var inst_3753__$1 = mach.core.fs.existsSync.call(null,".mach/cp-hash");
var state_3775__$1 = (function (){var statearr_3785 = state_3775;
(statearr_3785[(10)] = inst_3752);

(statearr_3785[(9)] = inst_3753__$1);

return statearr_3785;
})();
if(cljs.core.truth_(inst_3753__$1)){
var statearr_3786_3808 = state_3775__$1;
(statearr_3786_3808[(1)] = (8));

} else {
var statearr_3787_3809 = state_3775__$1;
(statearr_3787_3809[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3776 === (6))){
var state_3775__$1 = state_3775;
var statearr_3788_3810 = state_3775__$1;
(statearr_3788_3810[(2)] = null);

(statearr_3788_3810[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3776 === (7))){
var inst_3773 = (state_3775[(2)]);
var state_3775__$1 = (function (){var statearr_3789 = state_3775;
(statearr_3789[(11)] = inst_3773);

return statearr_3789;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3775__$1,machfile);
} else {
if((state_val_3776 === (8))){
var inst_3750 = (state_3775[(8)]);
var inst_3755 = cljs.core.hash.call(null,inst_3750);
var inst_3756 = mach.core.fs.readFileSync.call(null,".mach/cp-hash","utf-8");
var inst_3757 = cljs.reader.read_string.call(null,inst_3756);
var inst_3758 = cljs.core._EQ_.call(null,inst_3755,inst_3757);
var state_3775__$1 = state_3775;
var statearr_3790_3811 = state_3775__$1;
(statearr_3790_3811[(2)] = inst_3758);

(statearr_3790_3811[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3776 === (9))){
var inst_3753 = (state_3775[(9)]);
var state_3775__$1 = state_3775;
var statearr_3791_3812 = state_3775__$1;
(statearr_3791_3812[(2)] = inst_3753);

(statearr_3791_3812[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3776 === (10))){
var inst_3761 = (state_3775[(2)]);
var state_3775__$1 = state_3775;
if(cljs.core.truth_(inst_3761)){
var statearr_3792_3813 = state_3775__$1;
(statearr_3792_3813[(1)] = (11));

} else {
var statearr_3793_3814 = state_3775__$1;
(statearr_3793_3814[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3776 === (11))){
var state_3775__$1 = state_3775;
var statearr_3794_3815 = state_3775__$1;
(statearr_3794_3815[(2)] = null);

(statearr_3794_3815[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3776 === (12))){
var inst_3750 = (state_3775[(8)]);
var inst_3764 = mach.core.write_classpath.call(null,".mach/cp",".mach/cp-hash",inst_3750);
var state_3775__$1 = state_3775;
var statearr_3795_3816 = state_3775__$1;
(statearr_3795_3816[(2)] = inst_3764);

(statearr_3795_3816[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3776 === (13))){
var inst_3766 = (state_3775[(2)]);
var inst_3767 = mach.core.fs.readFileSync.call(null,".mach/cp");
var inst_3768 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_3767)].join('');
var inst_3769 = clojure.string.split.call(null,inst_3768,":");
var inst_3770 = lumo.classpath.add_BANG_.call(null,inst_3769);
var state_3775__$1 = (function (){var statearr_3796 = state_3775;
(statearr_3796[(12)] = inst_3766);

return statearr_3796;
})();
var statearr_3797_3817 = state_3775__$1;
(statearr_3797_3817[(2)] = inst_3770);

(statearr_3797_3817[(1)] = (7));


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
var mach$core$preprocess_dependencies_$_state_machine__4__auto__ = null;
var mach$core$preprocess_dependencies_$_state_machine__4__auto____0 = (function (){
var statearr_3798 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_3798[(0)] = mach$core$preprocess_dependencies_$_state_machine__4__auto__);

(statearr_3798[(1)] = (1));

return statearr_3798;
});
var mach$core$preprocess_dependencies_$_state_machine__4__auto____1 = (function (state_3775){
while(true){
var ret_value__5__auto__ = (function (){try{while(true){
var result__6__auto__ = switch__3__auto__.call(null,state_3775);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
continue;
} else {
return result__6__auto__;
}
break;
}
}catch (e3799){if((e3799 instanceof Object)){
var ex__7__auto__ = e3799;
var statearr_3800_3818 = state_3775;
(statearr_3800_3818[(5)] = ex__7__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_3775);

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
throw e3799;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
var G__3819 = state_3775;
state_3775 = G__3819;
continue;
} else {
return ret_value__5__auto__;
}
break;
}
});
mach$core$preprocess_dependencies_$_state_machine__4__auto__ = function(state_3775){
switch(arguments.length){
case 0:
return mach$core$preprocess_dependencies_$_state_machine__4__auto____0.call(this);
case 1:
return mach$core$preprocess_dependencies_$_state_machine__4__auto____1.call(this,state_3775);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
mach$core$preprocess_dependencies_$_state_machine__4__auto__.cljs$core$IFn$_invoke$arity$0 = mach$core$preprocess_dependencies_$_state_machine__4__auto____0;
mach$core$preprocess_dependencies_$_state_machine__4__auto__.cljs$core$IFn$_invoke$arity$1 = mach$core$preprocess_dependencies_$_state_machine__4__auto____1;
return mach$core$preprocess_dependencies_$_state_machine__4__auto__;
})()
;})(switch__3__auto__,c__8__auto__))
})();
var state__10__auto__ = (function (){var statearr_3801 = f__9__auto__.call(null);
(statearr_3801[(6)] = c__8__auto__);

return statearr_3801;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10__auto__);
});})(c__8__auto__))
);

return c__8__auto__;
});
mach.core.preprocess_npm = (function mach$core$preprocess_npm(machfile){
var c__8__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8__auto__){
return (function (){
var f__9__auto__ = (function (){var switch__3__auto__ = ((function (c__8__auto__){
return (function (state_3919){
var state_val_3920 = (state_3919[(1)]);
if((state_val_3920 === (1))){
var inst_3826 = new cljs.core.Symbol("mach","npm","mach/npm",(-1867781034),null);
var inst_3827 = cljs.core.get.call(null,machfile,inst_3826);
var inst_3828 = cljs.core.seq.call(null,inst_3827);
var inst_3829 = inst_3828;
var inst_3830 = null;
var inst_3831 = (0);
var inst_3832 = (0);
var state_3919__$1 = (function (){var statearr_3921 = state_3919;
(statearr_3921[(7)] = inst_3829);

(statearr_3921[(10)] = inst_3830);

(statearr_3921[(9)] = inst_3831);

(statearr_3921[(8)] = inst_3832);

return statearr_3921;
})();
var statearr_3922_3970 = state_3919__$1;
(statearr_3922_3970[(2)] = null);

(statearr_3922_3970[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3920 === (2))){
var inst_3832 = (state_3919[(8)]);
var inst_3831 = (state_3919[(9)]);
var inst_3834 = (inst_3832 < inst_3831);
var inst_3835 = inst_3834;
var state_3919__$1 = state_3919;
if(cljs.core.truth_(inst_3835)){
var statearr_3923_3971 = state_3919__$1;
(statearr_3923_3971[(1)] = (4));

} else {
var statearr_3924_3972 = state_3919__$1;
(statearr_3924_3972[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3920 === (3))){
var inst_3917 = (state_3919[(2)]);
var state_3919__$1 = state_3919;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3919__$1,inst_3917);
} else {
if((state_val_3920 === (4))){
var inst_3830 = (state_3919[(10)]);
var inst_3832 = (state_3919[(8)]);
var inst_3840 = cljs.core._nth.call(null,inst_3830,inst_3832);
var inst_3841 = cljs.core.nth.call(null,inst_3840,(0),null);
var inst_3842 = cljs.core.nth.call(null,inst_3840,(1),null);
var state_3919__$1 = (function (){var statearr_3925 = state_3919;
(statearr_3925[(11)] = inst_3841);

(statearr_3925[(13)] = inst_3842);

return statearr_3925;
})();
var statearr_3926_3973 = state_3919__$1;
(statearr_3926_3973[(2)] = null);

(statearr_3926_3973[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3920 === (5))){
var inst_3829 = (state_3919[(7)]);
var inst_3869 = (state_3919[(12)]);
var inst_3869__$1 = cljs.core.seq.call(null,inst_3829);
var state_3919__$1 = (function (){var statearr_3927 = state_3919;
(statearr_3927[(12)] = inst_3869__$1);

return statearr_3927;
})();
if(inst_3869__$1){
var statearr_3928_3974 = state_3919__$1;
(statearr_3928_3974[(1)] = (13));

} else {
var statearr_3929_3975 = state_3919__$1;
(statearr_3929_3975[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3920 === (6))){
var inst_3915 = (state_3919[(2)]);
var state_3919__$1 = state_3919;
var statearr_3930_3976 = state_3919__$1;
(statearr_3930_3976[(2)] = inst_3915);

(statearr_3930_3976[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3920 === (7))){
var inst_3842 = (state_3919[(13)]);
var inst_3851 = (state_3919[(2)]);
var inst_3852 = cljs.core._EQ_.call(null,inst_3842,inst_3851);
var inst_3853 = !(inst_3852);
var state_3919__$1 = state_3919;
if(inst_3853){
var statearr_3931_3977 = state_3919__$1;
(statearr_3931_3977[(1)] = (10));

} else {
var statearr_3932_3978 = state_3919__$1;
(statearr_3932_3978[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3920 === (8))){
var inst_3843 = (state_3919[(2)]);
var state_3919__$1 = (function (){var statearr_3936 = state_3919;
(statearr_3936[(14)] = inst_3843);

return statearr_3936;
})();
var statearr_3937_3979 = state_3919__$1;
(statearr_3937_3979[(2)] = null);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_3919__$1);

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3920 === (9))){
var inst_3841 = (state_3919[(11)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_3919,(8),new cljs.core.Keyword(null,"default","default",(-1987822328)),null,(7));
var inst_3847 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_3841),"/package.json"].join('');
var inst_3848 = cljs.nodejs.require.call(null,inst_3847);
var inst_3849 = inst_3848.version;
var state_3919__$1 = state_3919;
var statearr_3941_3980 = state_3919__$1;
(statearr_3941_3980[(2)] = inst_3849);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_3919__$1);

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3920 === (10))){
var inst_3841 = (state_3919[(11)]);
var inst_3842 = (state_3919[(13)]);
var inst_3832 = (state_3919[(8)]);
var inst_3829 = (state_3919[(7)]);
var inst_3830 = (state_3919[(10)]);
var inst_3831 = (state_3919[(9)]);
var inst_3855 = cljs.core.println.call(null,"npm installing",inst_3841,inst_3842);
var inst_3856 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_3857 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_3841),"@",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_3842)].join('');
var inst_3858 = ["install",inst_3857];
var inst_3859 = (new cljs.core.PersistentVector(null,(2),(5),inst_3856,inst_3858,null));
var inst_3860 = mach.core.child_process.spawnSync("npm",inst_3859,({"shell": true}));
var inst_3861 = (inst_3832 + (1));
var tmp3933 = inst_3829;
var tmp3934 = inst_3830;
var tmp3935 = inst_3831;
var inst_3829__$1 = tmp3933;
var inst_3830__$1 = tmp3934;
var inst_3831__$1 = tmp3935;
var inst_3832__$1 = inst_3861;
var state_3919__$1 = (function (){var statearr_3942 = state_3919;
(statearr_3942[(15)] = inst_3855);

(statearr_3942[(16)] = inst_3860);

(statearr_3942[(7)] = inst_3829__$1);

(statearr_3942[(10)] = inst_3830__$1);

(statearr_3942[(9)] = inst_3831__$1);

(statearr_3942[(8)] = inst_3832__$1);

return statearr_3942;
})();
var statearr_3943_3981 = state_3919__$1;
(statearr_3943_3981[(2)] = null);

(statearr_3943_3981[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3920 === (11))){
var inst_3832 = (state_3919[(8)]);
var inst_3829 = (state_3919[(7)]);
var inst_3830 = (state_3919[(10)]);
var inst_3831 = (state_3919[(9)]);
var inst_3864 = (inst_3832 + (1));
var tmp3938 = inst_3829;
var tmp3939 = inst_3830;
var tmp3940 = inst_3831;
var inst_3829__$1 = tmp3938;
var inst_3830__$1 = tmp3939;
var inst_3831__$1 = tmp3940;
var inst_3832__$1 = inst_3864;
var state_3919__$1 = (function (){var statearr_3944 = state_3919;
(statearr_3944[(7)] = inst_3829__$1);

(statearr_3944[(10)] = inst_3830__$1);

(statearr_3944[(9)] = inst_3831__$1);

(statearr_3944[(8)] = inst_3832__$1);

return statearr_3944;
})();
var statearr_3945_3982 = state_3919__$1;
(statearr_3945_3982[(2)] = null);

(statearr_3945_3982[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3920 === (12))){
var inst_3867 = (state_3919[(2)]);
var state_3919__$1 = state_3919;
var statearr_3946_3983 = state_3919__$1;
(statearr_3946_3983[(2)] = inst_3867);

(statearr_3946_3983[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3920 === (13))){
var inst_3869 = (state_3919[(12)]);
var inst_3871 = cljs.core.chunked_seq_QMARK_.call(null,inst_3869);
var state_3919__$1 = state_3919;
if(inst_3871){
var statearr_3947_3984 = state_3919__$1;
(statearr_3947_3984[(1)] = (16));

} else {
var statearr_3948_3985 = state_3919__$1;
(statearr_3948_3985[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3920 === (14))){
var state_3919__$1 = state_3919;
var statearr_3949_3986 = state_3919__$1;
(statearr_3949_3986[(2)] = null);

(statearr_3949_3986[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3920 === (15))){
var inst_3913 = (state_3919[(2)]);
var state_3919__$1 = state_3919;
var statearr_3950_3987 = state_3919__$1;
(statearr_3950_3987[(2)] = inst_3913);

(statearr_3950_3987[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3920 === (16))){
var inst_3869 = (state_3919[(12)]);
var inst_3873 = cljs.core.chunk_first.call(null,inst_3869);
var inst_3874 = cljs.core.chunk_rest.call(null,inst_3869);
var inst_3875 = cljs.core.count.call(null,inst_3873);
var inst_3829 = inst_3874;
var inst_3830 = inst_3873;
var inst_3831 = inst_3875;
var inst_3832 = (0);
var state_3919__$1 = (function (){var statearr_3951 = state_3919;
(statearr_3951[(7)] = inst_3829);

(statearr_3951[(10)] = inst_3830);

(statearr_3951[(9)] = inst_3831);

(statearr_3951[(8)] = inst_3832);

return statearr_3951;
})();
var statearr_3952_3988 = state_3919__$1;
(statearr_3952_3988[(2)] = null);

(statearr_3952_3988[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3920 === (17))){
var inst_3869 = (state_3919[(12)]);
var inst_3881 = cljs.core.first.call(null,inst_3869);
var inst_3882 = cljs.core.nth.call(null,inst_3881,(0),null);
var inst_3883 = cljs.core.nth.call(null,inst_3881,(1),null);
var state_3919__$1 = (function (){var statearr_3953 = state_3919;
(statearr_3953[(17)] = inst_3882);

(statearr_3953[(18)] = inst_3883);

return statearr_3953;
})();
var statearr_3954_3989 = state_3919__$1;
(statearr_3954_3989[(2)] = null);

(statearr_3954_3989[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3920 === (18))){
var inst_3910 = (state_3919[(2)]);
var state_3919__$1 = state_3919;
var statearr_3955_3990 = state_3919__$1;
(statearr_3955_3990[(2)] = inst_3910);

(statearr_3955_3990[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3920 === (19))){
var inst_3883 = (state_3919[(18)]);
var inst_3892 = (state_3919[(2)]);
var inst_3893 = cljs.core._EQ_.call(null,inst_3883,inst_3892);
var inst_3894 = !(inst_3893);
var state_3919__$1 = state_3919;
if(inst_3894){
var statearr_3956_3991 = state_3919__$1;
(statearr_3956_3991[(1)] = (22));

} else {
var statearr_3957_3992 = state_3919__$1;
(statearr_3957_3992[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3920 === (20))){
var inst_3884 = (state_3919[(2)]);
var state_3919__$1 = (function (){var statearr_3958 = state_3919;
(statearr_3958[(19)] = inst_3884);

return statearr_3958;
})();
var statearr_3959_3993 = state_3919__$1;
(statearr_3959_3993[(2)] = null);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_3919__$1);

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3920 === (21))){
var inst_3882 = (state_3919[(17)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_3919,(20),new cljs.core.Keyword(null,"default","default",(-1987822328)),null,(19));
var inst_3888 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_3882),"/package.json"].join('');
var inst_3889 = cljs.nodejs.require.call(null,inst_3888);
var inst_3890 = inst_3889.version;
var state_3919__$1 = state_3919;
var statearr_3960_3994 = state_3919__$1;
(statearr_3960_3994[(2)] = inst_3890);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_3919__$1);

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3920 === (22))){
var inst_3882 = (state_3919[(17)]);
var inst_3883 = (state_3919[(18)]);
var inst_3869 = (state_3919[(12)]);
var inst_3896 = cljs.core.println.call(null,"npm installing",inst_3882,inst_3883);
var inst_3897 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_3898 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_3882),"@",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_3883)].join('');
var inst_3899 = ["install",inst_3898];
var inst_3900 = (new cljs.core.PersistentVector(null,(2),(5),inst_3897,inst_3899,null));
var inst_3901 = mach.core.child_process.spawnSync("npm",inst_3900,({"shell": true}));
var inst_3902 = cljs.core.next.call(null,inst_3869);
var inst_3829 = inst_3902;
var inst_3830 = null;
var inst_3831 = (0);
var inst_3832 = (0);
var state_3919__$1 = (function (){var statearr_3961 = state_3919;
(statearr_3961[(20)] = inst_3896);

(statearr_3961[(21)] = inst_3901);

(statearr_3961[(7)] = inst_3829);

(statearr_3961[(10)] = inst_3830);

(statearr_3961[(9)] = inst_3831);

(statearr_3961[(8)] = inst_3832);

return statearr_3961;
})();
var statearr_3962_3995 = state_3919__$1;
(statearr_3962_3995[(2)] = null);

(statearr_3962_3995[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3920 === (23))){
var inst_3869 = (state_3919[(12)]);
var inst_3905 = cljs.core.next.call(null,inst_3869);
var inst_3829 = inst_3905;
var inst_3830 = null;
var inst_3831 = (0);
var inst_3832 = (0);
var state_3919__$1 = (function (){var statearr_3963 = state_3919;
(statearr_3963[(7)] = inst_3829);

(statearr_3963[(10)] = inst_3830);

(statearr_3963[(9)] = inst_3831);

(statearr_3963[(8)] = inst_3832);

return statearr_3963;
})();
var statearr_3964_3996 = state_3919__$1;
(statearr_3964_3996[(2)] = null);

(statearr_3964_3996[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3920 === (24))){
var inst_3908 = (state_3919[(2)]);
var state_3919__$1 = state_3919;
var statearr_3965_3997 = state_3919__$1;
(statearr_3965_3997[(2)] = inst_3908);

(statearr_3965_3997[(1)] = (18));


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
});})(c__8__auto__))
;
return ((function (switch__3__auto__,c__8__auto__){
return (function() {
var mach$core$preprocess_npm_$_state_machine__4__auto__ = null;
var mach$core$preprocess_npm_$_state_machine__4__auto____0 = (function (){
var statearr_3966 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_3966[(0)] = mach$core$preprocess_npm_$_state_machine__4__auto__);

(statearr_3966[(1)] = (1));

return statearr_3966;
});
var mach$core$preprocess_npm_$_state_machine__4__auto____1 = (function (state_3919){
while(true){
var ret_value__5__auto__ = (function (){try{while(true){
var result__6__auto__ = switch__3__auto__.call(null,state_3919);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
continue;
} else {
return result__6__auto__;
}
break;
}
}catch (e3967){if((e3967 instanceof Object)){
var ex__7__auto__ = e3967;
var statearr_3968_3998 = state_3919;
(statearr_3968_3998[(5)] = ex__7__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_3919);

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
throw e3967;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
var G__3999 = state_3919;
state_3919 = G__3999;
continue;
} else {
return ret_value__5__auto__;
}
break;
}
});
mach$core$preprocess_npm_$_state_machine__4__auto__ = function(state_3919){
switch(arguments.length){
case 0:
return mach$core$preprocess_npm_$_state_machine__4__auto____0.call(this);
case 1:
return mach$core$preprocess_npm_$_state_machine__4__auto____1.call(this,state_3919);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
mach$core$preprocess_npm_$_state_machine__4__auto__.cljs$core$IFn$_invoke$arity$0 = mach$core$preprocess_npm_$_state_machine__4__auto____0;
mach$core$preprocess_npm_$_state_machine__4__auto__.cljs$core$IFn$_invoke$arity$1 = mach$core$preprocess_npm_$_state_machine__4__auto____1;
return mach$core$preprocess_npm_$_state_machine__4__auto__;
})()
;})(switch__3__auto__,c__8__auto__))
})();
var state__10__auto__ = (function (){var statearr_3969 = f__9__auto__.call(null);
(statearr_3969[(6)] = c__8__auto__);

return statearr_3969;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10__auto__);
});})(c__8__auto__))
);

return c__8__auto__;
});
mach.core.preprocess_classpath = (function mach$core$preprocess_classpath(machfile){
var c__8__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8__auto__){
return (function (){
var f__9__auto__ = (function (){var switch__3__auto__ = ((function (c__8__auto__){
return (function (state_4008){
var state_val_4009 = (state_4008[(1)]);
if((state_val_4009 === (1))){
var inst_4001 = (state_4008[(7)]);
var inst_4000 = new cljs.core.Symbol("mach","classpath","mach/classpath",(1939334403),null);
var inst_4001__$1 = cljs.core.get.call(null,machfile,inst_4000);
var state_4008__$1 = (function (){var statearr_4010 = state_4008;
(statearr_4010[(7)] = inst_4001__$1);

return statearr_4010;
})();
if(cljs.core.truth_(inst_4001__$1)){
var statearr_4011_4019 = state_4008__$1;
(statearr_4011_4019[(1)] = (2));

} else {
var statearr_4012_4020 = state_4008__$1;
(statearr_4012_4020[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4009 === (2))){
var inst_4001 = (state_4008[(7)]);
var inst_4003 = lumo.classpath.add_BANG_.call(null,inst_4001);
var state_4008__$1 = state_4008;
var statearr_4013_4021 = state_4008__$1;
(statearr_4013_4021[(2)] = inst_4003);

(statearr_4013_4021[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4009 === (3))){
var state_4008__$1 = state_4008;
var statearr_4014_4022 = state_4008__$1;
(statearr_4014_4022[(2)] = null);

(statearr_4014_4022[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4009 === (4))){
var inst_4006 = (state_4008[(2)]);
var state_4008__$1 = state_4008;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4008__$1,inst_4006);
} else {
return null;
}
}
}
}
});})(c__8__auto__))
;
return ((function (switch__3__auto__,c__8__auto__){
return (function() {
var mach$core$preprocess_classpath_$_state_machine__4__auto__ = null;
var mach$core$preprocess_classpath_$_state_machine__4__auto____0 = (function (){
var statearr_4015 = [null,null,null,null,null,null,null,null];
(statearr_4015[(0)] = mach$core$preprocess_classpath_$_state_machine__4__auto__);

(statearr_4015[(1)] = (1));

return statearr_4015;
});
var mach$core$preprocess_classpath_$_state_machine__4__auto____1 = (function (state_4008){
while(true){
var ret_value__5__auto__ = (function (){try{while(true){
var result__6__auto__ = switch__3__auto__.call(null,state_4008);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
continue;
} else {
return result__6__auto__;
}
break;
}
}catch (e4016){if((e4016 instanceof Object)){
var ex__7__auto__ = e4016;
var statearr_4017_4023 = state_4008;
(statearr_4017_4023[(5)] = ex__7__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4008);

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
throw e4016;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
var G__4024 = state_4008;
state_4008 = G__4024;
continue;
} else {
return ret_value__5__auto__;
}
break;
}
});
mach$core$preprocess_classpath_$_state_machine__4__auto__ = function(state_4008){
switch(arguments.length){
case 0:
return mach$core$preprocess_classpath_$_state_machine__4__auto____0.call(this);
case 1:
return mach$core$preprocess_classpath_$_state_machine__4__auto____1.call(this,state_4008);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
mach$core$preprocess_classpath_$_state_machine__4__auto__.cljs$core$IFn$_invoke$arity$0 = mach$core$preprocess_classpath_$_state_machine__4__auto____0;
mach$core$preprocess_classpath_$_state_machine__4__auto__.cljs$core$IFn$_invoke$arity$1 = mach$core$preprocess_classpath_$_state_machine__4__auto____1;
return mach$core$preprocess_classpath_$_state_machine__4__auto__;
})()
;})(switch__3__auto__,c__8__auto__))
})();
var state__10__auto__ = (function (){var statearr_4018 = f__9__auto__.call(null);
(statearr_4018[(6)] = c__8__auto__);

return statearr_4018;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10__auto__);
});})(c__8__auto__))
);

return c__8__auto__;
});
mach.core.preprocess_props = (function mach$core$preprocess_props(machfile){
var c__8__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8__auto__){
return (function (){
var f__9__auto__ = (function (){var switch__3__auto__ = ((function (c__8__auto__){
return (function (state_4054){
var state_val_4055 = (state_4054[(1)]);
if((state_val_4055 === (1))){
var inst_4026 = (state_4054[(7)]);
var inst_4025 = new cljs.core.Symbol("mach","props","mach/props",(2090336575),null);
var inst_4026__$1 = cljs.core.get.call(null,machfile,inst_4025);
var state_4054__$1 = (function (){var statearr_4056 = state_4054;
(statearr_4056[(7)] = inst_4026__$1);

return statearr_4056;
})();
if(cljs.core.truth_(inst_4026__$1)){
var statearr_4057_4066 = state_4054__$1;
(statearr_4057_4066[(1)] = (2));

} else {
var statearr_4058_4067 = state_4054__$1;
(statearr_4058_4067[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4055 === (2))){
var inst_4026 = (state_4054[(7)]);
var inst_4029 = (state_4054[(8)]);
var inst_4028 = cljs.core.partition.call(null,(2),inst_4026);
var inst_4029__$1 = cljs.core.map.call(null,cljs.core.first,inst_4028);
var inst_4030 = cljs.core.List.EMPTY;
var inst_4031 = new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null);
var inst_4032 = cljs.core._conj.call(null,inst_4030,inst_4031);
var inst_4033 = cljs.core.List.EMPTY;
var inst_4034 = cljs.core._conj.call(null,inst_4033,inst_4026);
var inst_4035 = cljs.core.concat.call(null,inst_4029__$1);
var inst_4036 = cljs.core.sequence.call(null,inst_4035);
var inst_4037 = cljs.core.vec.call(null,inst_4036);
var inst_4038 = cljs.core.List.EMPTY;
var inst_4039 = cljs.core._conj.call(null,inst_4038,inst_4037);
var inst_4040 = cljs.core.concat.call(null,inst_4032,inst_4034,inst_4039);
var inst_4041 = cljs.core.sequence.call(null,inst_4040);
var inst_4042 = mach.core.with_async_go.call(null,inst_4041);
var inst_4043 = mach.core.code_eval.call(null,inst_4042);
var state_4054__$1 = (function (){var statearr_4059 = state_4054;
(statearr_4059[(8)] = inst_4029__$1);

return statearr_4059;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4054__$1,(5),inst_4043);
} else {
if((state_val_4055 === (3))){
var state_4054__$1 = state_4054;
var statearr_4060_4068 = state_4054__$1;
(statearr_4060_4068[(2)] = machfile);

(statearr_4060_4068[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4055 === (4))){
var inst_4052 = (state_4054[(2)]);
var state_4054__$1 = state_4054;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4054__$1,inst_4052);
} else {
if((state_val_4055 === (5))){
var inst_4029 = (state_4054[(8)]);
var inst_4045 = (state_4054[(2)]);
var inst_4046 = new cljs.core.Symbol("mach","props","mach/props",(2090336575),null);
var inst_4047 = cljs.core.mapcat.call(null,cljs.core.vector,inst_4029,inst_4045);
var inst_4048 = cljs.core.vec.call(null,inst_4047);
var inst_4049 = cljs.core.assoc.call(null,machfile,inst_4046,inst_4048);
var state_4054__$1 = state_4054;
var statearr_4061_4069 = state_4054__$1;
(statearr_4061_4069[(2)] = inst_4049);

(statearr_4061_4069[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
return null;
}
}
}
}
}
});})(c__8__auto__))
;
return ((function (switch__3__auto__,c__8__auto__){
return (function() {
var mach$core$preprocess_props_$_state_machine__4__auto__ = null;
var mach$core$preprocess_props_$_state_machine__4__auto____0 = (function (){
var statearr_4062 = [null,null,null,null,null,null,null,null,null];
(statearr_4062[(0)] = mach$core$preprocess_props_$_state_machine__4__auto__);

(statearr_4062[(1)] = (1));

return statearr_4062;
});
var mach$core$preprocess_props_$_state_machine__4__auto____1 = (function (state_4054){
while(true){
var ret_value__5__auto__ = (function (){try{while(true){
var result__6__auto__ = switch__3__auto__.call(null,state_4054);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
continue;
} else {
return result__6__auto__;
}
break;
}
}catch (e4063){if((e4063 instanceof Object)){
var ex__7__auto__ = e4063;
var statearr_4064_4070 = state_4054;
(statearr_4064_4070[(5)] = ex__7__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4054);

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
throw e4063;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
var G__4071 = state_4054;
state_4054 = G__4071;
continue;
} else {
return ret_value__5__auto__;
}
break;
}
});
mach$core$preprocess_props_$_state_machine__4__auto__ = function(state_4054){
switch(arguments.length){
case 0:
return mach$core$preprocess_props_$_state_machine__4__auto____0.call(this);
case 1:
return mach$core$preprocess_props_$_state_machine__4__auto____1.call(this,state_4054);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
mach$core$preprocess_props_$_state_machine__4__auto__.cljs$core$IFn$_invoke$arity$0 = mach$core$preprocess_props_$_state_machine__4__auto____0;
mach$core$preprocess_props_$_state_machine__4__auto__.cljs$core$IFn$_invoke$arity$1 = mach$core$preprocess_props_$_state_machine__4__auto____1;
return mach$core$preprocess_props_$_state_machine__4__auto__;
})()
;})(switch__3__auto__,c__8__auto__))
})();
var state__10__auto__ = (function (){var statearr_4065 = f__9__auto__.call(null);
(statearr_4065[(6)] = c__8__auto__);

return statearr_4065;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10__auto__);
});})(c__8__auto__))
);

return c__8__auto__;
});
/**
 * Ensure that the classpath has everything it needs, prior to targets being evaled
 */
mach.core.preprocess_requires = (function mach$core$preprocess_requires(machfile){
var c__8__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8__auto__){
return (function (){
var f__9__auto__ = (function (){var switch__3__auto__ = ((function (c__8__auto__){
return (function (state_4149){
var state_val_4150 = (state_4149[(1)]);
if((state_val_4150 === (1))){
var inst_4073 = (state_4149[(7)]);
var inst_4072 = new cljs.core.Symbol("mach","require","mach/require",(1143893803),null);
var inst_4073__$1 = cljs.core.get.call(null,machfile,inst_4072);
var state_4149__$1 = (function (){var statearr_4151 = state_4149;
(statearr_4151[(7)] = inst_4073__$1);

return statearr_4151;
})();
if(cljs.core.truth_(inst_4073__$1)){
var statearr_4152_4183 = state_4149__$1;
(statearr_4152_4183[(1)] = (2));

} else {
var statearr_4153_4184 = state_4149__$1;
(statearr_4153_4184[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4150 === (2))){
var inst_4073 = (state_4149[(7)]);
var inst_4079 = cljs.core.seq.call(null,inst_4073);
var inst_4080 = inst_4079;
var inst_4081 = null;
var inst_4082 = (0);
var inst_4083 = (0);
var state_4149__$1 = (function (){var statearr_4154 = state_4149;
(statearr_4154[(8)] = inst_4080);

(statearr_4154[(10)] = inst_4081);

(statearr_4154[(11)] = inst_4082);

(statearr_4154[(12)] = inst_4083);

return statearr_4154;
})();
var statearr_4155_4185 = state_4149__$1;
(statearr_4155_4185[(2)] = null);

(statearr_4155_4185[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4150 === (3))){
var state_4149__$1 = state_4149;
var statearr_4156_4186 = state_4149__$1;
(statearr_4156_4186[(2)] = null);

(statearr_4156_4186[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4150 === (4))){
var inst_4145 = (state_4149[(2)]);
var inst_4146 = (function (){return ((function (inst_4145,state_val_4150,c__8__auto__){
return (function (x){
if((cljs.core.list_QMARK_.call(null,x)) && (cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"require","require",(1172530194),null),cljs.core.first.call(null,x)))){
lumo.repl.execute.call(null,"text",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join(''),true,false,null,(0));

return null;
} else {
if(cljs.core.truth_((function (){var and__20896__auto__ = (x instanceof cljs.core.Symbol);
if(and__20896__auto__){
var and__20896__auto____$1 = cljs.core.namespace.call(null,x);
if(cljs.core.truth_(and__20896__auto____$1)){
return cljs.core.not_EQ_.call(null,"js",cljs.core.namespace.call(null,x));
} else {
return and__20896__auto____$1;
}
} else {
return and__20896__auto__;
}
})())){
var ns = cljs.core.symbol.call(null,cljs.core.namespace.call(null,x));
if(cljs.core.truth_(cljs.core.find_ns.call(null,ns))){
} else {
mach.core.code_eval.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","require","cljs.core/require",(2107770869),null)),(function (){var x__22880__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",(1377916282),null)),(function (){var x__22880__auto__ = ns;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22880__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22880__auto__);
})())));
}

return x;
} else {
return x;

}
}
});
;})(inst_4145,state_val_4150,c__8__auto__))
})();
var inst_4147 = clojure.walk.postwalk.call(null,inst_4146,machfile);
var state_4149__$1 = (function (){var statearr_4157 = state_4149;
(statearr_4157[(9)] = inst_4145);

return statearr_4157;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4149__$1,inst_4147);
} else {
if((state_val_4150 === (5))){
var inst_4083 = (state_4149[(12)]);
var inst_4082 = (state_4149[(11)]);
var inst_4085 = (inst_4083 < inst_4082);
var inst_4086 = inst_4085;
var state_4149__$1 = state_4149;
if(cljs.core.truth_(inst_4086)){
var statearr_4161_4187 = state_4149__$1;
(statearr_4161_4187[(1)] = (7));

} else {
var statearr_4162_4188 = state_4149__$1;
(statearr_4162_4188[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4150 === (6))){
var inst_4142 = (state_4149[(2)]);
var state_4149__$1 = state_4149;
var statearr_4163_4189 = state_4149__$1;
(statearr_4163_4189[(2)] = inst_4142);

(statearr_4163_4189[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4150 === (7))){
var inst_4081 = (state_4149[(10)]);
var inst_4083 = (state_4149[(12)]);
var inst_4080 = (state_4149[(8)]);
var inst_4082 = (state_4149[(11)]);
var inst_4088 = cljs.core._nth.call(null,inst_4081,inst_4083);
var inst_4089 = cljs.core.List.EMPTY;
var inst_4090 = new cljs.core.Symbol("cljs.core","require","cljs.core/require",(2107770869),null);
var inst_4091 = cljs.core._conj.call(null,inst_4089,inst_4090);
var inst_4092 = cljs.core.List.EMPTY;
var inst_4093 = new cljs.core.Symbol(null,"quote","quote",(1377916282),null);
var inst_4094 = cljs.core._conj.call(null,inst_4092,inst_4093);
var inst_4095 = cljs.core.List.EMPTY;
var inst_4096 = cljs.core._conj.call(null,inst_4095,inst_4088);
var inst_4097 = cljs.core.concat.call(null,inst_4094,inst_4096);
var inst_4098 = cljs.core.sequence.call(null,inst_4097);
var inst_4099 = cljs.core.List.EMPTY;
var inst_4100 = cljs.core._conj.call(null,inst_4099,inst_4098);
var inst_4101 = cljs.core.concat.call(null,inst_4091,inst_4100);
var inst_4102 = cljs.core.sequence.call(null,inst_4101);
var inst_4103 = mach.core.code_eval.call(null,inst_4102);
var inst_4104 = (inst_4083 + (1));
var tmp4158 = inst_4080;
var tmp4159 = inst_4081;
var tmp4160 = inst_4082;
var inst_4080__$1 = tmp4158;
var inst_4081__$1 = tmp4159;
var inst_4082__$1 = tmp4160;
var inst_4083__$1 = inst_4104;
var state_4149__$1 = (function (){var statearr_4164 = state_4149;
(statearr_4164[(13)] = inst_4103);

(statearr_4164[(8)] = inst_4080__$1);

(statearr_4164[(10)] = inst_4081__$1);

(statearr_4164[(11)] = inst_4082__$1);

(statearr_4164[(12)] = inst_4083__$1);

return statearr_4164;
})();
var statearr_4165_4190 = state_4149__$1;
(statearr_4165_4190[(2)] = null);

(statearr_4165_4190[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4150 === (8))){
var inst_4080 = (state_4149[(8)]);
var inst_4107 = (state_4149[(14)]);
var inst_4107__$1 = cljs.core.seq.call(null,inst_4080);
var state_4149__$1 = (function (){var statearr_4166 = state_4149;
(statearr_4166[(14)] = inst_4107__$1);

return statearr_4166;
})();
if(inst_4107__$1){
var statearr_4167_4191 = state_4149__$1;
(statearr_4167_4191[(1)] = (10));

} else {
var statearr_4168_4192 = state_4149__$1;
(statearr_4168_4192[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4150 === (9))){
var inst_4140 = (state_4149[(2)]);
var state_4149__$1 = state_4149;
var statearr_4169_4193 = state_4149__$1;
(statearr_4169_4193[(2)] = inst_4140);

(statearr_4169_4193[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4150 === (10))){
var inst_4107 = (state_4149[(14)]);
var inst_4109 = cljs.core.chunked_seq_QMARK_.call(null,inst_4107);
var state_4149__$1 = state_4149;
if(inst_4109){
var statearr_4170_4194 = state_4149__$1;
(statearr_4170_4194[(1)] = (13));

} else {
var statearr_4171_4195 = state_4149__$1;
(statearr_4171_4195[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4150 === (11))){
var state_4149__$1 = state_4149;
var statearr_4172_4196 = state_4149__$1;
(statearr_4172_4196[(2)] = null);

(statearr_4172_4196[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4150 === (12))){
var inst_4138 = (state_4149[(2)]);
var state_4149__$1 = state_4149;
var statearr_4173_4197 = state_4149__$1;
(statearr_4173_4197[(2)] = inst_4138);

(statearr_4173_4197[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4150 === (13))){
var inst_4107 = (state_4149[(14)]);
var inst_4111 = cljs.core.chunk_first.call(null,inst_4107);
var inst_4112 = cljs.core.chunk_rest.call(null,inst_4107);
var inst_4113 = cljs.core.count.call(null,inst_4111);
var inst_4080 = inst_4112;
var inst_4081 = inst_4111;
var inst_4082 = inst_4113;
var inst_4083 = (0);
var state_4149__$1 = (function (){var statearr_4174 = state_4149;
(statearr_4174[(8)] = inst_4080);

(statearr_4174[(10)] = inst_4081);

(statearr_4174[(11)] = inst_4082);

(statearr_4174[(12)] = inst_4083);

return statearr_4174;
})();
var statearr_4175_4198 = state_4149__$1;
(statearr_4175_4198[(2)] = null);

(statearr_4175_4198[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4150 === (14))){
var inst_4107 = (state_4149[(14)]);
var inst_4116 = cljs.core.first.call(null,inst_4107);
var inst_4117 = cljs.core.List.EMPTY;
var inst_4118 = new cljs.core.Symbol("cljs.core","require","cljs.core/require",(2107770869),null);
var inst_4119 = cljs.core._conj.call(null,inst_4117,inst_4118);
var inst_4120 = cljs.core.List.EMPTY;
var inst_4121 = new cljs.core.Symbol(null,"quote","quote",(1377916282),null);
var inst_4122 = cljs.core._conj.call(null,inst_4120,inst_4121);
var inst_4123 = cljs.core.List.EMPTY;
var inst_4124 = cljs.core._conj.call(null,inst_4123,inst_4116);
var inst_4125 = cljs.core.concat.call(null,inst_4122,inst_4124);
var inst_4126 = cljs.core.sequence.call(null,inst_4125);
var inst_4127 = cljs.core.List.EMPTY;
var inst_4128 = cljs.core._conj.call(null,inst_4127,inst_4126);
var inst_4129 = cljs.core.concat.call(null,inst_4119,inst_4128);
var inst_4130 = cljs.core.sequence.call(null,inst_4129);
var inst_4131 = mach.core.code_eval.call(null,inst_4130);
var inst_4132 = cljs.core.next.call(null,inst_4107);
var inst_4080 = inst_4132;
var inst_4081 = null;
var inst_4082 = (0);
var inst_4083 = (0);
var state_4149__$1 = (function (){var statearr_4176 = state_4149;
(statearr_4176[(15)] = inst_4131);

(statearr_4176[(8)] = inst_4080);

(statearr_4176[(10)] = inst_4081);

(statearr_4176[(11)] = inst_4082);

(statearr_4176[(12)] = inst_4083);

return statearr_4176;
})();
var statearr_4177_4199 = state_4149__$1;
(statearr_4177_4199[(2)] = null);

(statearr_4177_4199[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4150 === (15))){
var inst_4135 = (state_4149[(2)]);
var state_4149__$1 = state_4149;
var statearr_4178_4200 = state_4149__$1;
(statearr_4178_4200[(2)] = inst_4135);

(statearr_4178_4200[(1)] = (12));


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
});})(c__8__auto__))
;
return ((function (switch__3__auto__,c__8__auto__){
return (function() {
var mach$core$preprocess_requires_$_state_machine__4__auto__ = null;
var mach$core$preprocess_requires_$_state_machine__4__auto____0 = (function (){
var statearr_4179 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_4179[(0)] = mach$core$preprocess_requires_$_state_machine__4__auto__);

(statearr_4179[(1)] = (1));

return statearr_4179;
});
var mach$core$preprocess_requires_$_state_machine__4__auto____1 = (function (state_4149){
while(true){
var ret_value__5__auto__ = (function (){try{while(true){
var result__6__auto__ = switch__3__auto__.call(null,state_4149);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
continue;
} else {
return result__6__auto__;
}
break;
}
}catch (e4180){if((e4180 instanceof Object)){
var ex__7__auto__ = e4180;
var statearr_4181_4201 = state_4149;
(statearr_4181_4201[(5)] = ex__7__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4149);

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
throw e4180;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
var G__4202 = state_4149;
state_4149 = G__4202;
continue;
} else {
return ret_value__5__auto__;
}
break;
}
});
mach$core$preprocess_requires_$_state_machine__4__auto__ = function(state_4149){
switch(arguments.length){
case 0:
return mach$core$preprocess_requires_$_state_machine__4__auto____0.call(this);
case 1:
return mach$core$preprocess_requires_$_state_machine__4__auto____1.call(this,state_4149);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
mach$core$preprocess_requires_$_state_machine__4__auto__.cljs$core$IFn$_invoke$arity$0 = mach$core$preprocess_requires_$_state_machine__4__auto____0;
mach$core$preprocess_requires_$_state_machine__4__auto__.cljs$core$IFn$_invoke$arity$1 = mach$core$preprocess_requires_$_state_machine__4__auto____1;
return mach$core$preprocess_requires_$_state_machine__4__auto__;
})()
;})(switch__3__auto__,c__8__auto__))
})();
var state__10__auto__ = (function (){var statearr_4182 = f__9__auto__.call(null);
(statearr_4182[(6)] = c__8__auto__);

return statearr_4182;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10__auto__);
});})(c__8__auto__))
);

return c__8__auto__;
});
mach.core.preprocess_resolve_refs = (function mach$core$preprocess_resolve_refs(mach_config){
var c__8__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8__auto__){
return (function (){
var f__9__auto__ = (function (){var switch__3__auto__ = ((function (c__8__auto__){
return (function (state_4206){
var state_val_4207 = (state_4206[(1)]);
if((state_val_4207 === (1))){
var inst_4203 = (function (){return ((function (state_val_4207,c__8__auto__){
return (function (x){
if((x instanceof mach.core.Reference)){
return cljs.core.get_in.call(null,mach_config,new cljs.core.Keyword(null,"path","path",(-188191168)).cljs$core$IFn$_invoke$arity$1(x));
} else {
return x;
}
});
;})(state_val_4207,c__8__auto__))
})();
var inst_4204 = clojure.walk.postwalk.call(null,inst_4203,mach_config);
var state_4206__$1 = state_4206;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4206__$1,inst_4204);
} else {
return null;
}
});})(c__8__auto__))
;
return ((function (switch__3__auto__,c__8__auto__){
return (function() {
var mach$core$preprocess_resolve_refs_$_state_machine__4__auto__ = null;
var mach$core$preprocess_resolve_refs_$_state_machine__4__auto____0 = (function (){
var statearr_4208 = [null,null,null,null,null,null,null];
(statearr_4208[(0)] = mach$core$preprocess_resolve_refs_$_state_machine__4__auto__);

(statearr_4208[(1)] = (1));

return statearr_4208;
});
var mach$core$preprocess_resolve_refs_$_state_machine__4__auto____1 = (function (state_4206){
while(true){
var ret_value__5__auto__ = (function (){try{while(true){
var result__6__auto__ = switch__3__auto__.call(null,state_4206);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
continue;
} else {
return result__6__auto__;
}
break;
}
}catch (e4209){if((e4209 instanceof Object)){
var ex__7__auto__ = e4209;
var statearr_4210_4212 = state_4206;
(statearr_4210_4212[(5)] = ex__7__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4206);

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
throw e4209;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
var G__4213 = state_4206;
state_4206 = G__4213;
continue;
} else {
return ret_value__5__auto__;
}
break;
}
});
mach$core$preprocess_resolve_refs_$_state_machine__4__auto__ = function(state_4206){
switch(arguments.length){
case 0:
return mach$core$preprocess_resolve_refs_$_state_machine__4__auto____0.call(this);
case 1:
return mach$core$preprocess_resolve_refs_$_state_machine__4__auto____1.call(this,state_4206);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
mach$core$preprocess_resolve_refs_$_state_machine__4__auto__.cljs$core$IFn$_invoke$arity$0 = mach$core$preprocess_resolve_refs_$_state_machine__4__auto____0;
mach$core$preprocess_resolve_refs_$_state_machine__4__auto__.cljs$core$IFn$_invoke$arity$1 = mach$core$preprocess_resolve_refs_$_state_machine__4__auto____1;
return mach$core$preprocess_resolve_refs_$_state_machine__4__auto__;
})()
;})(switch__3__auto__,c__8__auto__))
})();
var state__10__auto__ = (function (){var statearr_4211 = f__9__auto__.call(null);
(statearr_4211[(6)] = c__8__auto__);

return statearr_4211;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10__auto__);
});})(c__8__auto__))
);

return c__8__auto__;
});
/**
 * product can be an expression, eval it.
 */
mach.core.preprocess_eval_product = (function mach$core$preprocess_eval_product(mach_config){
var c__8__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8__auto__){
return (function (){
var f__9__auto__ = (function (){var switch__3__auto__ = ((function (c__8__auto__){
return (function (state_4223){
var state_val_4224 = (state_4223[(1)]);
if((state_val_4224 === (1))){
var inst_4214 = cljs.core.PersistentHashMap.EMPTY;
var inst_4219 = (function (){return ((function (inst_4214,state_val_4224,c__8__auto__){
return (function mach$core$preprocess_eval_product_$_iter__4215(s__4216){
return (new cljs.core.LazySeq(null,((function (inst_4214,state_val_4224,c__8__auto__){
return (function (){
var s__4216__$1 = s__4216;
while(true){
var temp__20428__auto__ = cljs.core.seq.call(null,s__4216__$1);
if(temp__20428__auto__){
var s__4216__$2 = temp__20428__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__4216__$2)){
var c__22808__auto__ = cljs.core.chunk_first.call(null,s__4216__$2);
var size__22809__auto__ = cljs.core.count.call(null,c__22808__auto__);
var b__4218 = cljs.core.chunk_buffer.call(null,size__22809__auto__);
if((function (){var i__4217 = (0);
while(true){
if((i__4217 < size__22809__auto__)){
var vec__4225 = cljs.core._nth.call(null,c__22808__auto__,i__4217);
var k = cljs.core.nth.call(null,vec__4225,(0),null);
var m = cljs.core.nth.call(null,vec__4225,(1),null);
cljs.core.chunk_append.call(null,b__4218,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(function (){var temp__20271__auto__ = (function (){var and__20896__auto__ = cljs.core.map_QMARK_.call(null,m);
if(and__20896__auto__){
return cljs.core.get.call(null,m,new cljs.core.Symbol(null,"product","product",(-1290961512),null));
} else {
return and__20896__auto__;
}
})();
if(cljs.core.truth_(temp__20271__auto__)){
var product = temp__20271__auto__;
var code = mach.core.with_prop_bindings.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","identity","cljs.core/identity",(725118887),null)),(function (){var x__22880__auto__ = product;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22880__auto__);
})())),mach_config);
return cljs.core.assoc.call(null,m,new cljs.core.Symbol(null,"product","product",(-1290961512),null),mach.core.code_eval.call(null,code));
} else {
return m;
}
})()], null));

var G__4235 = (i__4217 + (1));
i__4217 = G__4235;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4218),mach$core$preprocess_eval_product_$_iter__4215.call(null,cljs.core.chunk_rest.call(null,s__4216__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4218),null);
}
} else {
var vec__4228 = cljs.core.first.call(null,s__4216__$2);
var k = cljs.core.nth.call(null,vec__4228,(0),null);
var m = cljs.core.nth.call(null,vec__4228,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(function (){var temp__20271__auto__ = (function (){var and__20896__auto__ = cljs.core.map_QMARK_.call(null,m);
if(and__20896__auto__){
return cljs.core.get.call(null,m,new cljs.core.Symbol(null,"product","product",(-1290961512),null));
} else {
return and__20896__auto__;
}
})();
if(cljs.core.truth_(temp__20271__auto__)){
var product = temp__20271__auto__;
var code = mach.core.with_prop_bindings.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","identity","cljs.core/identity",(725118887),null)),(function (){var x__22880__auto__ = product;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22880__auto__);
})())),mach_config);
return cljs.core.assoc.call(null,m,new cljs.core.Symbol(null,"product","product",(-1290961512),null),mach.core.code_eval.call(null,code));
} else {
return m;
}
})()], null),mach$core$preprocess_eval_product_$_iter__4215.call(null,cljs.core.rest.call(null,s__4216__$2)));
}
} else {
return null;
}
break;
}
});})(inst_4214,state_val_4224,c__8__auto__))
,null,null));
});
;})(inst_4214,state_val_4224,c__8__auto__))
})();
var inst_4220 = inst_4219.call(null,mach_config);
var inst_4221 = cljs.core.into.call(null,inst_4214,inst_4220);
var state_4223__$1 = state_4223;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4223__$1,inst_4221);
} else {
return null;
}
});})(c__8__auto__))
;
return ((function (switch__3__auto__,c__8__auto__){
return (function() {
var mach$core$preprocess_eval_product_$_state_machine__4__auto__ = null;
var mach$core$preprocess_eval_product_$_state_machine__4__auto____0 = (function (){
var statearr_4231 = [null,null,null,null,null,null,null];
(statearr_4231[(0)] = mach$core$preprocess_eval_product_$_state_machine__4__auto__);

(statearr_4231[(1)] = (1));

return statearr_4231;
});
var mach$core$preprocess_eval_product_$_state_machine__4__auto____1 = (function (state_4223){
while(true){
var ret_value__5__auto__ = (function (){try{while(true){
var result__6__auto__ = switch__3__auto__.call(null,state_4223);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
continue;
} else {
return result__6__auto__;
}
break;
}
}catch (e4232){if((e4232 instanceof Object)){
var ex__7__auto__ = e4232;
var statearr_4233_4236 = state_4223;
(statearr_4233_4236[(5)] = ex__7__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4223);

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
throw e4232;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
var G__4237 = state_4223;
state_4223 = G__4237;
continue;
} else {
return ret_value__5__auto__;
}
break;
}
});
mach$core$preprocess_eval_product_$_state_machine__4__auto__ = function(state_4223){
switch(arguments.length){
case 0:
return mach$core$preprocess_eval_product_$_state_machine__4__auto____0.call(this);
case 1:
return mach$core$preprocess_eval_product_$_state_machine__4__auto____1.call(this,state_4223);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
mach$core$preprocess_eval_product_$_state_machine__4__auto__.cljs$core$IFn$_invoke$arity$0 = mach$core$preprocess_eval_product_$_state_machine__4__auto____0;
mach$core$preprocess_eval_product_$_state_machine__4__auto__.cljs$core$IFn$_invoke$arity$1 = mach$core$preprocess_eval_product_$_state_machine__4__auto____1;
return mach$core$preprocess_eval_product_$_state_machine__4__auto__;
})()
;})(switch__3__auto__,c__8__auto__))
})();
var state__10__auto__ = (function (){var statearr_4234 = f__9__auto__.call(null);
(statearr_4234[(6)] = c__8__auto__);

return statearr_4234;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10__auto__);
});})(c__8__auto__))
);

return c__8__auto__;
});
mach.core.preprocess = (function mach$core$preprocess(machfile){
var c__8__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8__auto__){
return (function (){
var f__9__auto__ = (function (){var switch__3__auto__ = ((function (c__8__auto__){
return (function (state_4275){
var state_val_4276 = (state_4275[(1)]);
if((state_val_4276 === (1))){
var inst_4245 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_4246 = [mach.core.preprocess_dependencies,mach.core.preprocess_npm,mach.core.preprocess_classpath,mach.core.preprocess_requires,mach.core.preprocess_props,mach.core.preprocess_import,mach.core.preprocess_init,mach.core.preprocess_resolve_refs,mach.core.preprocess_eval_product];
var inst_4247 = (new cljs.core.PersistentVector(null,(9),(5),inst_4245,inst_4246,null));
var inst_4248 = cljs.core.seq.call(null,inst_4247);
var inst_4249 = cljs.core.first.call(null,inst_4248);
var inst_4250 = cljs.core.next.call(null,inst_4248);
var inst_4251 = machfile;
var inst_4252 = inst_4247;
var state_4275__$1 = (function (){var statearr_4277 = state_4275;
(statearr_4277[(7)] = inst_4249);

(statearr_4277[(11)] = inst_4250);

(statearr_4277[(10)] = inst_4251);

(statearr_4277[(8)] = inst_4252);

return statearr_4277;
})();
var statearr_4278_4295 = state_4275__$1;
(statearr_4278_4295[(2)] = null);

(statearr_4278_4295[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4276 === (2))){
var inst_4252 = (state_4275[(8)]);
var inst_4258 = (state_4275[(9)]);
var inst_4257 = cljs.core.seq.call(null,inst_4252);
var inst_4258__$1 = cljs.core.first.call(null,inst_4257);
var inst_4259 = cljs.core.next.call(null,inst_4257);
var state_4275__$1 = (function (){var statearr_4279 = state_4275;
(statearr_4279[(9)] = inst_4258__$1);

(statearr_4279[(12)] = inst_4259);

return statearr_4279;
})();
if(cljs.core.truth_(inst_4258__$1)){
var statearr_4280_4296 = state_4275__$1;
(statearr_4280_4296[(1)] = (4));

} else {
var statearr_4281_4297 = state_4275__$1;
(statearr_4281_4297[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4276 === (3))){
var inst_4273 = (state_4275[(2)]);
var state_4275__$1 = state_4275;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4275__$1,inst_4273);
} else {
if((state_val_4276 === (4))){
var inst_4258 = (state_4275[(9)]);
var inst_4251 = (state_4275[(10)]);
var inst_4261 = inst_4258.call(null,inst_4251);
var state_4275__$1 = state_4275;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4275__$1,(7),inst_4261);
} else {
if((state_val_4276 === (5))){
var inst_4251 = (state_4275[(10)]);
var state_4275__$1 = state_4275;
var statearr_4282_4298 = state_4275__$1;
(statearr_4282_4298[(2)] = inst_4251);

(statearr_4282_4298[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4276 === (6))){
var inst_4271 = (state_4275[(2)]);
var state_4275__$1 = state_4275;
var statearr_4283_4299 = state_4275__$1;
(statearr_4283_4299[(2)] = inst_4271);

(statearr_4283_4299[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4276 === (7))){
var inst_4263 = (state_4275[(13)]);
var inst_4263__$1 = (state_4275[(2)]);
var state_4275__$1 = (function (){var statearr_4284 = state_4275;
(statearr_4284[(13)] = inst_4263__$1);

return statearr_4284;
})();
if(cljs.core.truth_(inst_4263__$1)){
var statearr_4285_4300 = state_4275__$1;
(statearr_4285_4300[(1)] = (8));

} else {
var statearr_4286_4301 = state_4275__$1;
(statearr_4286_4301[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4276 === (8))){
var inst_4263 = (state_4275[(13)]);
var state_4275__$1 = state_4275;
var statearr_4287_4302 = state_4275__$1;
(statearr_4287_4302[(2)] = inst_4263);

(statearr_4287_4302[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4276 === (9))){
var inst_4251 = (state_4275[(10)]);
var state_4275__$1 = state_4275;
var statearr_4288_4303 = state_4275__$1;
(statearr_4288_4303[(2)] = inst_4251);

(statearr_4288_4303[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4276 === (10))){
var inst_4259 = (state_4275[(12)]);
var inst_4267 = (state_4275[(2)]);
var inst_4251 = inst_4267;
var inst_4252 = inst_4259;
var state_4275__$1 = (function (){var statearr_4289 = state_4275;
(statearr_4289[(10)] = inst_4251);

(statearr_4289[(8)] = inst_4252);

return statearr_4289;
})();
var statearr_4290_4304 = state_4275__$1;
(statearr_4290_4304[(2)] = null);

(statearr_4290_4304[(1)] = (2));


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
var mach$core$preprocess_$_state_machine__4__auto__ = null;
var mach$core$preprocess_$_state_machine__4__auto____0 = (function (){
var statearr_4291 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_4291[(0)] = mach$core$preprocess_$_state_machine__4__auto__);

(statearr_4291[(1)] = (1));

return statearr_4291;
});
var mach$core$preprocess_$_state_machine__4__auto____1 = (function (state_4275){
while(true){
var ret_value__5__auto__ = (function (){try{while(true){
var result__6__auto__ = switch__3__auto__.call(null,state_4275);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
continue;
} else {
return result__6__auto__;
}
break;
}
}catch (e4292){if((e4292 instanceof Object)){
var ex__7__auto__ = e4292;
var statearr_4293_4305 = state_4275;
(statearr_4293_4305[(5)] = ex__7__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4275);

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
throw e4292;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
var G__4306 = state_4275;
state_4275 = G__4306;
continue;
} else {
return ret_value__5__auto__;
}
break;
}
});
mach$core$preprocess_$_state_machine__4__auto__ = function(state_4275){
switch(arguments.length){
case 0:
return mach$core$preprocess_$_state_machine__4__auto____0.call(this);
case 1:
return mach$core$preprocess_$_state_machine__4__auto____1.call(this,state_4275);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
mach$core$preprocess_$_state_machine__4__auto__.cljs$core$IFn$_invoke$arity$0 = mach$core$preprocess_$_state_machine__4__auto____0;
mach$core$preprocess_$_state_machine__4__auto__.cljs$core$IFn$_invoke$arity$1 = mach$core$preprocess_$_state_machine__4__auto____1;
return mach$core$preprocess_$_state_machine__4__auto__;
})()
;})(switch__3__auto__,c__8__auto__))
})();
var state__10__auto__ = (function (){var statearr_4294 = f__9__auto__.call(null);
(statearr_4294[(6)] = c__8__auto__);

return statearr_4294;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10__auto__);
});})(c__8__auto__))
);

return c__8__auto__;
});
mach.core.mach = (function mach$core$mach(p__4307){
var map__4308 = p__4307;
var map__4308__$1 = ((((!((map__4308 == null)))?((((map__4308.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4308.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4308):map__4308);
var file = cljs.core.get.call(null,map__4308__$1,new cljs.core.Keyword(null,"file","file",(-1269645878)),"Machfile.edn");
var tasks = cljs.core.get.call(null,map__4308__$1,new cljs.core.Keyword(null,"tasks","tasks",(-1754368880)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"default","default",(-347290801),null)], null));
var constant = cljs.core.get.call(null,map__4308__$1,new cljs.core.Keyword(null,"constant","constant",(-379609303)),cljs.core.PersistentArrayMap.EMPTY);
var c__8__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8__auto__,map__4308,map__4308__$1,file,tasks,constant){
return (function (){
var f__9__auto__ = (function (){var switch__3__auto__ = ((function (c__8__auto__,map__4308,map__4308__$1,file,tasks,constant){
return (function (state_4343){
var state_val_4344 = (state_4343[(1)]);
if((state_val_4344 === (1))){
var inst_4310 = mach.core.fs.readFileSync.call(null,file,"utf-8");
var inst_4311 = cljs.reader.read_string.call(null,inst_4310);
var inst_4312 = new cljs.core.Symbol("mach","constant","mach/constant",(1265049721),null);
var inst_4313 = cljs.core.update.call(null,inst_4311,inst_4312,cljs.core.merge,constant);
var inst_4314 = mach.core.preprocess.call(null,inst_4313);
var state_4343__$1 = state_4343;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4343__$1,(2),inst_4314);
} else {
if((state_val_4344 === (2))){
var inst_4316 = (state_4343[(2)]);
var state_4343__$1 = (function (){var statearr_4345 = state_4343;
(statearr_4345[(7)] = inst_4316);

return statearr_4345;
})();
var statearr_4346_4362 = state_4343__$1;
(statearr_4346_4362[(2)] = null);

(statearr_4346_4362[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4344 === (3))){
var inst_4341 = (state_4343[(2)]);
var state_4343__$1 = state_4343;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4343__$1,inst_4341);
} else {
if((state_val_4344 === (4))){
var inst_4317 = (state_4343[(8)]);
var inst_4318 = (state_4343[(9)]);
var inst_4317__$1 = (state_4343[(2)]);
var inst_4318__$1 = inst_4317__$1.message;
var state_4343__$1 = (function (){var statearr_4347 = state_4343;
(statearr_4347[(8)] = inst_4317__$1);

(statearr_4347[(9)] = inst_4318__$1);

return statearr_4347;
})();
if(cljs.core.truth_(inst_4318__$1)){
var statearr_4348_4363 = state_4343__$1;
(statearr_4348_4363[(1)] = (5));

} else {
var statearr_4349_4364 = state_4343__$1;
(statearr_4349_4364[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4344 === (5))){
var inst_4318 = (state_4343[(9)]);
var inst_4320 = cljs.core.println.call(null,inst_4318);
var state_4343__$1 = state_4343;
var statearr_4350_4365 = state_4343__$1;
(statearr_4350_4365[(2)] = inst_4320);

(statearr_4350_4365[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4344 === (6))){
var inst_4317 = (state_4343[(8)]);
var inst_4322 = cljs.core.println.call(null,"Error:",inst_4317);
var state_4343__$1 = state_4343;
var statearr_4351_4366 = state_4343__$1;
(statearr_4351_4366[(2)] = inst_4322);

(statearr_4351_4366[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4344 === (7))){
var inst_4324 = (state_4343[(2)]);
var state_4343__$1 = state_4343;
var statearr_4352_4367 = state_4343__$1;
(statearr_4352_4367[(2)] = inst_4324);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4343__$1);

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4344 === (8))){
var inst_4316 = (state_4343[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_4343,(4),new cljs.core.Keyword(null,"default","default",(-1987822328)),null,(3));
var inst_4328 = cljs.core.partial.call(null,mach.core.expand_out_target_and_verbs,inst_4316);
var inst_4329 = cljs.core.mapcat.call(null,inst_4328,tasks);
var inst_4330 = mach.core.execute_plan_async.call(null,inst_4316,inst_4329);
var state_4343__$1 = state_4343;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4343__$1,(9),inst_4330);
} else {
if((state_val_4344 === (9))){
var inst_4332 = (state_4343[(2)]);
var inst_4333 = cljs.core.vals.call(null,inst_4332);
var inst_4334 = cljs.core.some.call(null,cljs.core.identity,inst_4333);
var state_4343__$1 = state_4343;
if(cljs.core.truth_(inst_4334)){
var statearr_4353_4368 = state_4343__$1;
(statearr_4353_4368[(1)] = (10));

} else {
var statearr_4354_4369 = state_4343__$1;
(statearr_4354_4369[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4344 === (10))){
var state_4343__$1 = state_4343;
var statearr_4355_4370 = state_4343__$1;
(statearr_4355_4370[(2)] = null);

(statearr_4355_4370[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4344 === (11))){
var inst_4337 = cljs.core.println.call(null,"Nothing to do!");
var state_4343__$1 = state_4343;
var statearr_4356_4371 = state_4343__$1;
(statearr_4356_4371[(2)] = inst_4337);

(statearr_4356_4371[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4344 === (12))){
var inst_4339 = (state_4343[(2)]);
var state_4343__$1 = state_4343;
var statearr_4357_4372 = state_4343__$1;
(statearr_4357_4372[(2)] = inst_4339);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4343__$1);

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
});})(c__8__auto__,map__4308,map__4308__$1,file,tasks,constant))
;
return ((function (switch__3__auto__,c__8__auto__,map__4308,map__4308__$1,file,tasks,constant){
return (function() {
var mach$core$mach_$_state_machine__4__auto__ = null;
var mach$core$mach_$_state_machine__4__auto____0 = (function (){
var statearr_4358 = [null,null,null,null,null,null,null,null,null,null];
(statearr_4358[(0)] = mach$core$mach_$_state_machine__4__auto__);

(statearr_4358[(1)] = (1));

return statearr_4358;
});
var mach$core$mach_$_state_machine__4__auto____1 = (function (state_4343){
while(true){
var ret_value__5__auto__ = (function (){try{while(true){
var result__6__auto__ = switch__3__auto__.call(null,state_4343);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
continue;
} else {
return result__6__auto__;
}
break;
}
}catch (e4359){if((e4359 instanceof Object)){
var ex__7__auto__ = e4359;
var statearr_4360_4373 = state_4343;
(statearr_4360_4373[(5)] = ex__7__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4343);

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
throw e4359;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
var G__4374 = state_4343;
state_4343 = G__4374;
continue;
} else {
return ret_value__5__auto__;
}
break;
}
});
mach$core$mach_$_state_machine__4__auto__ = function(state_4343){
switch(arguments.length){
case 0:
return mach$core$mach_$_state_machine__4__auto____0.call(this);
case 1:
return mach$core$mach_$_state_machine__4__auto____1.call(this,state_4343);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
mach$core$mach_$_state_machine__4__auto__.cljs$core$IFn$_invoke$arity$0 = mach$core$mach_$_state_machine__4__auto____0;
mach$core$mach_$_state_machine__4__auto__.cljs$core$IFn$_invoke$arity$1 = mach$core$mach_$_state_machine__4__auto____1;
return mach$core$mach_$_state_machine__4__auto__;
})()
;})(switch__3__auto__,c__8__auto__,map__4308,map__4308__$1,file,tasks,constant))
})();
var state__10__auto__ = (function (){var statearr_4361 = f__9__auto__.call(null);
(statearr_4361[(6)] = c__8__auto__);

return statearr_4361;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10__auto__);
});})(c__8__auto__,map__4308,map__4308__$1,file,tasks,constant))
);

return c__8__auto__;
});
/**
 * Remove keys if they are nil
 */
mach.core.dissoc_nil = (function mach$core$dissoc_nil(var_args){
var G__4379 = arguments.length;
switch (G__4379) {
case (2):
return mach.core.dissoc_nil.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__23188__auto__ = [];
var len__23174__auto___4381 = arguments.length;
var i__23175__auto___4382 = (0);
while(true){
if((i__23175__auto___4382 < len__23174__auto___4381)){
args_arr__23188__auto__.push((arguments[i__23175__auto___4382]));

var G__4383 = (i__23175__auto___4382 + (1));
i__23175__auto___4382 = G__4383;
continue;
} else {
}
break;
}

var argseq__23189__auto__ = (new cljs.core.IndexedSeq(args_arr__23188__auto__.slice((2)),(0),null));
return mach.core.dissoc_nil.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__23189__auto__);

}
});

mach.core.dissoc_nil.cljs$core$IFn$_invoke$arity$2 = (function (m,k){
if((cljs.core.get.call(null,m,k) == null)){
return cljs.core.dissoc.call(null,m,k);
} else {
return m;
}
});

mach.core.dissoc_nil.cljs$core$IFn$_invoke$arity$variadic = (function (m,k,ks){
while(true){
var ret = mach.core.dissoc_nil.call(null,m,k);
if(cljs.core.truth_(ks)){
var G__4384 = ret;
var G__4385 = cljs.core.first.call(null,ks);
var G__4386 = cljs.core.next.call(null,ks);
m = G__4384;
k = G__4385;
ks = G__4386;
continue;
} else {
return ret;
}
break;
}
});

mach.core.dissoc_nil.cljs$lang$applyTo = (function (seq4376){
var G__4377 = cljs.core.first.call(null,seq4376);
var seq4376__$1 = cljs.core.next.call(null,seq4376);
var G__4378 = cljs.core.first.call(null,seq4376__$1);
var seq4376__$2 = cljs.core.next.call(null,seq4376__$1);
return mach.core.dissoc_nil.cljs$core$IFn$_invoke$arity$variadic(G__4377,G__4378,seq4376__$2);
});

mach.core.dissoc_nil.cljs$lang$maxFixedArity = (2);

mach.core._main = (function mach$core$_main(var_args){
var args__23177__auto__ = [];
var len__23174__auto___4388 = arguments.length;
var i__23175__auto___4389 = (0);
while(true){
if((i__23175__auto___4389 < len__23174__auto___4388)){
args__23177__auto__.push((arguments[i__23175__auto___4389]));

var G__4390 = (i__23175__auto___4389 + (1));
i__23175__auto___4389 = G__4390;
continue;
} else {
}
break;
}

var argseq__23178__auto__ = ((((0) < args__23177__auto__.length))?(new cljs.core.IndexedSeq(args__23177__auto__.slice((0)),(0),null)):null);
return mach.core._main.cljs$core$IFn$_invoke$arity$variadic(argseq__23178__auto__);
});

mach.core._main.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return mach.core.mach.call(null,cljs.core.update.call(null,clojure.set.rename_keys.call(null,mach.core.dissoc_nil.call(null,cljs.core.js__GT_clj.call(null,mach.core.yargs.option("file",({"alias": "f", "describe": "Specify location of Machfile", "requiresArg": true, "string": true})).option("constant",({"describe": "Override the mach/constants section of your Machfile", "requiresArg": true, "string": true, "coerce": (function (constant){
return cljs.reader.read_string.call(null,constant);
})})).example("-f ~/myfile.edn","Specify myfile.edn as location for Machfile").example("--constant '{environment :prod}'","Override environment key in Machfile").epilog("Copyright \u00a9 2016-2017, JUXT LTD.").help().parse(cljs.core.clj__GT_js.call(null,cljs.core.sequence.call(null,args))),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",(1310784252)),true),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"f","f",(-1597136552)),new cljs.core.Keyword(null,"constant","constant",(-379609303))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"_","_",(1453416199)),new cljs.core.Keyword(null,"tasks","tasks",(-1754368880))], null)),new cljs.core.Keyword(null,"tasks","tasks",(-1754368880)),(function (p1__20_SHARP_){
if(cljs.core.seq.call(null,p1__20_SHARP_)){
return cljs.core.map.call(null,cljs.core.symbol,p1__20_SHARP_);
} else {
return null;
}
})));
});

mach.core._main.cljs$lang$maxFixedArity = (0);

mach.core._main.cljs$lang$applyTo = (function (seq4387){
return mach.core._main.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4387));
});

