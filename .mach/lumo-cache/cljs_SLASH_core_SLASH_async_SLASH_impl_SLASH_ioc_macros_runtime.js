goog.provide("cljs.core.async.impl.ioc_macros_runtime");
cljs.core.async.impl.ioc_macros_runtime.FN_IDX = (0);
cljs.core.async.impl.ioc_macros_runtime.STATE_IDX = (1);
cljs.core.async.impl.ioc_macros_runtime.VALUE_IDX = (2);
cljs.core.async.impl.ioc_macros_runtime.BINDINGS_IDX = (3);
cljs.core.async.impl.ioc_macros_runtime.EXCEPTION_FRAMES = (4);
cljs.core.async.impl.ioc_macros_runtime.CURRENT_EXCEPTION = (5);
cljs.core.async.impl.ioc_macros_runtime.USER_START_IDX = (6);
/**
 * Returns the final [id state] from a plan. 
 */
cljs.core.async.impl.ioc_macros_runtime.get_plan = (function cljs$core$async$impl$ioc_macros_runtime$get_plan(f){
return f.call(null,cljs.core.PersistentArrayMap.EMPTY);
});
/**
 * Sets the binding 'key' to value. This operation can be undone via pop-bindings.
 * Bindings are stored in the state hashmap.
 */
cljs.core.async.impl.ioc_macros_runtime.push_binding = (function cljs$core$async$impl$ioc_macros_runtime$push_binding(key,value){
return (function (plan){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.update_in.call(null,plan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bindings","bindings",(1271397192)),key], null),cljs.core.conj,value)], null);
});
});
/**
 * Pushes the result of (apply f old-value args) as current value of binding key
 */
cljs.core.async.impl.ioc_macros_runtime.push_alter_binding = (function cljs$core$async$impl$ioc_macros_runtime$push_alter_binding(var_args){
var args__23177__auto__ = [];
var len__23174__auto___186 = arguments.length;
var i__23175__auto___187 = (0);
while(true){
if((i__23175__auto___187 < len__23174__auto___186)){
args__23177__auto__.push((arguments[i__23175__auto___187]));

var G__188 = (i__23175__auto___187 + (1));
i__23175__auto___187 = G__188;
continue;
} else {
}
break;
}

var argseq__23178__auto__ = ((((2) < args__23177__auto__.length))?(new cljs.core.IndexedSeq(args__23177__auto__.slice((2)),(0),null)):null);
return cljs.core.async.impl.ioc_macros_runtime.push_alter_binding.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__23178__auto__);
});

cljs.core.async.impl.ioc_macros_runtime.push_alter_binding.cljs$core$IFn$_invoke$arity$variadic = (function (key,f,args){
return (function (plan){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.update_in.call(null,plan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bindings","bindings",(1271397192)),key], null),(function (p1__1_SHARP_){
return cljs.core.conj.call(null,p1__1_SHARP_,cljs.core.apply.call(null,f,cljs.core.first.call(null,p1__1_SHARP_),args));
}))], null);
});
});

cljs.core.async.impl.ioc_macros_runtime.push_alter_binding.cljs$lang$maxFixedArity = (2);

cljs.core.async.impl.ioc_macros_runtime.push_alter_binding.cljs$lang$applyTo = (function (seq183){
var G__184 = cljs.core.first.call(null,seq183);
var seq183__$1 = cljs.core.next.call(null,seq183);
var G__185 = cljs.core.first.call(null,seq183__$1);
var seq183__$2 = cljs.core.next.call(null,seq183__$1);
return cljs.core.async.impl.ioc_macros_runtime.push_alter_binding.cljs$core$IFn$_invoke$arity$variadic(G__184,G__185,seq183__$2);
});

/**
 * Gets the value of the current binding for key
 */
cljs.core.async.impl.ioc_macros_runtime.get_binding = (function cljs$core$async$impl$ioc_macros_runtime$get_binding(key){
return (function (plan){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,cljs.core.get_in.call(null,plan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bindings","bindings",(1271397192)),key], null))),plan], null);
});
});
/**
 * Removes the most recent binding for key
 */
cljs.core.async.impl.ioc_macros_runtime.pop_binding = (function cljs$core$async$impl$ioc_macros_runtime$pop_binding(key){
return (function (plan){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,cljs.core.get_in.call(null,plan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bindings","bindings",(1271397192)),key], null))),cljs.core.update_in.call(null,plan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bindings","bindings",(1271397192)),key], null),cljs.core.pop)], null);
});
});
/**
 * This function can be used inside a gen-plan when no operation is to be performed
 */
cljs.core.async.impl.ioc_macros_runtime.no_op = (function cljs$core$async$impl$ioc_macros_runtime$no_op(){
return (function (plan){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,plan], null);
});
});
/**
 * Assumes that itms is a list of state monad function results, threads the state map
 *   through all of them. Returns a vector of all the results.
 */
cljs.core.async.impl.ioc_macros_runtime.all = (function cljs$core$async$impl$ioc_macros_runtime$all(itms){
return (function (plan){
return cljs.core.reduce.call(null,(function (p__189,f){
var vec__190 = p__189;
var ids = cljs.core.nth.call(null,vec__190,(0),null);
var plan__$1 = cljs.core.nth.call(null,vec__190,(1),null);
var vec__193 = f.call(null,plan__$1);
var id = cljs.core.nth.call(null,vec__193,(0),null);
var plan__$2 = cljs.core.nth.call(null,vec__193,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,ids,id),plan__$2], null);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,plan], null),itms);
});
});
/**
 * Same as assoc-in, but for state hash map
 */
cljs.core.async.impl.ioc_macros_runtime.assoc_in_plan = (function cljs$core$async$impl$ioc_macros_runtime$assoc_in_plan(path,val){
return (function (plan){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [val,cljs.core.assoc_in.call(null,plan,path,val)], null);
});
});
/**
 * Same as update-in, but for a state hash map
 */
cljs.core.async.impl.ioc_macros_runtime.update_in_plan = (function cljs$core$async$impl$ioc_macros_runtime$update_in_plan(var_args){
var args__23177__auto__ = [];
var len__23174__auto___199 = arguments.length;
var i__23175__auto___200 = (0);
while(true){
if((i__23175__auto___200 < len__23174__auto___199)){
args__23177__auto__.push((arguments[i__23175__auto___200]));

var G__201 = (i__23175__auto___200 + (1));
i__23175__auto___200 = G__201;
continue;
} else {
}
break;
}

var argseq__23178__auto__ = ((((2) < args__23177__auto__.length))?(new cljs.core.IndexedSeq(args__23177__auto__.slice((2)),(0),null)):null);
return cljs.core.async.impl.ioc_macros_runtime.update_in_plan.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__23178__auto__);
});

cljs.core.async.impl.ioc_macros_runtime.update_in_plan.cljs$core$IFn$_invoke$arity$variadic = (function (path,f,args){
return (function (plan){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.apply.call(null,cljs.core.update_in,plan,path,f,args)], null);
});
});

cljs.core.async.impl.ioc_macros_runtime.update_in_plan.cljs$lang$maxFixedArity = (2);

cljs.core.async.impl.ioc_macros_runtime.update_in_plan.cljs$lang$applyTo = (function (seq196){
var G__197 = cljs.core.first.call(null,seq196);
var seq196__$1 = cljs.core.next.call(null,seq196);
var G__198 = cljs.core.first.call(null,seq196__$1);
var seq196__$2 = cljs.core.next.call(null,seq196__$1);
return cljs.core.async.impl.ioc_macros_runtime.update_in_plan.cljs$core$IFn$_invoke$arity$variadic(G__197,G__198,seq196__$2);
});

/**
 * Same as get-in, but for a state hash map
 */
cljs.core.async.impl.ioc_macros_runtime.get_in_plan = (function cljs$core$async$impl$ioc_macros_runtime$get_in_plan(path){
return (function (plan){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get_in.call(null,plan,path),plan], null);
});
});
/**
 * Sets the current block being written to by the functions. The next add-instruction call will append to this block
 */
cljs.core.async.impl.ioc_macros_runtime.set_block = (function cljs$core$async$impl$ioc_macros_runtime$set_block(block_id){
return (function (plan){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [block_id,cljs.core.assoc.call(null,plan,new cljs.core.Keyword(null,"current-block","current-block",(1027687970)),block_id)], null);
});
});
/**
 * Gets the current block
 */
cljs.core.async.impl.ioc_macros_runtime.get_block = (function cljs$core$async$impl$ioc_macros_runtime$get_block(){
return (function (plan){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-block","current-block",(1027687970)).cljs$core$IFn$_invoke$arity$1(plan),plan], null);
});
});
/**
 * Adds a new block, returns its id, but does not change the current block (does not call set-block).
 */
cljs.core.async.impl.ioc_macros_runtime.add_block = (function cljs$core$async$impl$ioc_macros_runtime$add_block(){
return (function (plan_202){
var vec__203 = cljs.core.async.impl.ioc_macros_runtime.update_in_plan.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block-id","block-id",(-70582834))], null),cljs.core.fnil.call(null,cljs.core.inc,(0))).call(null,plan_202);
var _ = cljs.core.nth.call(null,vec__203,(0),null);
var plan_202__$1 = cljs.core.nth.call(null,vec__203,(1),null);
var vec__206 = cljs.core.async.impl.ioc_macros_runtime.get_in_plan.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block-id","block-id",(-70582834))], null)).call(null,plan_202__$1);
var blk_id = cljs.core.nth.call(null,vec__206,(0),null);
var plan_202__$2 = cljs.core.nth.call(null,vec__206,(1),null);
var vec__209 = cljs.core.async.impl.ioc_macros_runtime.get_block.call(null).call(null,plan_202__$2);
var cur_blk = cljs.core.nth.call(null,vec__209,(0),null);
var plan_202__$3 = cljs.core.nth.call(null,vec__209,(1),null);
var vec__212 = cljs.core.async.impl.ioc_macros_runtime.assoc_in_plan.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"blocks","blocks",(-610462153)),blk_id], null),cljs.core.PersistentVector.EMPTY).call(null,plan_202__$3);
var ___$1 = cljs.core.nth.call(null,vec__212,(0),null);
var plan_202__$4 = cljs.core.nth.call(null,vec__212,(1),null);
var vec__215 = cljs.core.async.impl.ioc_macros_runtime.get_binding.call(null,new cljs.core.Keyword(null,"catch","catch",(1038065524))).call(null,plan_202__$4);
var catches = cljs.core.nth.call(null,vec__215,(0),null);
var plan_202__$5 = cljs.core.nth.call(null,vec__215,(1),null);
var vec__218 = cljs.core.async.impl.ioc_macros_runtime.assoc_in_plan.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block-catches","block-catches",(-193801771)),blk_id], null),catches).call(null,plan_202__$5);
var ___$2 = cljs.core.nth.call(null,vec__218,(0),null);
var plan_202__$6 = cljs.core.nth.call(null,vec__218,(1),null);
var vec__221 = ((cljs.core.not.call(null,cur_blk))?cljs.core.async.impl.ioc_macros_runtime.assoc_in_plan.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"start-block","start-block",(885980136))], null),blk_id):cljs.core.async.impl.ioc_macros_runtime.no_op.call(null)).call(null,plan_202__$6);
var ___$3 = cljs.core.nth.call(null,vec__221,(0),null);
var plan_202__$7 = cljs.core.nth.call(null,vec__221,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [blk_id,plan_202__$7], null);
});
});
cljs.core.async.impl.ioc_macros_runtime.instruction_QMARK_ = (function cljs$core$async$impl$ioc_macros_runtime$instruction_QMARK_(x){
return new cljs.core.Keyword("cljs.core.async.impl.ioc-macros-runtime","instruction","cljs.core.async.impl.ioc-macros-runtime/instruction",(-2068204214)).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,x));
});
/**
 * Appends an instruction to the current block. 
 */
cljs.core.async.impl.ioc_macros_runtime.add_instruction = (function cljs$core$async$impl$ioc_macros_runtime$add_instruction(inst){
var inst_id = cljs.core.with_meta.call(null,cljs.core.gensym.call(null,"inst_"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.core.async.impl.ioc-macros-runtime","instruction","cljs.core.async.impl.ioc-macros-runtime/instruction",(-2068204214)),true], null));
var inst__$1 = cljs.core.assoc.call(null,inst,new cljs.core.Keyword(null,"id","id",(-1388402092)),inst_id);
return ((function (inst_id,inst__$1){
return (function (plan_224){
var vec__225 = cljs.core.async.impl.ioc_macros_runtime.get_block.call(null).call(null,plan_224);
var blk_id = cljs.core.nth.call(null,vec__225,(0),null);
var plan_224__$1 = cljs.core.nth.call(null,vec__225,(1),null);
var vec__228 = cljs.core.async.impl.ioc_macros_runtime.update_in_plan.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"blocks","blocks",(-610462153)),blk_id], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),inst__$1).call(null,plan_224__$1);
var _ = cljs.core.nth.call(null,vec__228,(0),null);
var plan_224__$2 = cljs.core.nth.call(null,vec__228,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [inst_id,plan_224__$2], null);
});
;})(inst_id,inst__$1))
});

/**
 * @interface
 */
cljs.core.async.impl.ioc_macros_runtime.IInstruction = function(){};

/**
 * Returns a list of instructions this instruction reads from
 */
cljs.core.async.impl.ioc_macros_runtime.reads_from = (function cljs$core$async$impl$ioc_macros_runtime$reads_from(this$){
if((!((this$ == null))) && (!((this$.cljs$core$async$impl$ioc_macros_runtime$IInstruction$reads_from$arity$1 == null)))){
return this$.cljs$core$async$impl$ioc_macros_runtime$IInstruction$reads_from$arity$1(this$);
} else {
var x__22676__auto__ = (((this$ == null))?null:this$);
var m__22677__auto__ = (cljs.core.async.impl.ioc_macros_runtime.reads_from[goog.typeOf(x__22676__auto__)]);
if(!((m__22677__auto__ == null))){
return m__22677__auto__.call(null,this$);
} else {
var m__22677__auto____$1 = (cljs.core.async.impl.ioc_macros_runtime.reads_from["_"]);
if(!((m__22677__auto____$1 == null))){
return m__22677__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IInstruction.reads-from",this$);
}
}
}
});

/**
 * Returns a list of instructions this instruction writes to
 */
cljs.core.async.impl.ioc_macros_runtime.writes_to = (function cljs$core$async$impl$ioc_macros_runtime$writes_to(this$){
if((!((this$ == null))) && (!((this$.cljs$core$async$impl$ioc_macros_runtime$IInstruction$writes_to$arity$1 == null)))){
return this$.cljs$core$async$impl$ioc_macros_runtime$IInstruction$writes_to$arity$1(this$);
} else {
var x__22676__auto__ = (((this$ == null))?null:this$);
var m__22677__auto__ = (cljs.core.async.impl.ioc_macros_runtime.writes_to[goog.typeOf(x__22676__auto__)]);
if(!((m__22677__auto__ == null))){
return m__22677__auto__.call(null,this$);
} else {
var m__22677__auto____$1 = (cljs.core.async.impl.ioc_macros_runtime.writes_to["_"]);
if(!((m__22677__auto____$1 == null))){
return m__22677__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IInstruction.writes-to",this$);
}
}
}
});

/**
 * Returns all the blocks this instruction references
 */
cljs.core.async.impl.ioc_macros_runtime.block_references = (function cljs$core$async$impl$ioc_macros_runtime$block_references(this$){
if((!((this$ == null))) && (!((this$.cljs$core$async$impl$ioc_macros_runtime$IInstruction$block_references$arity$1 == null)))){
return this$.cljs$core$async$impl$ioc_macros_runtime$IInstruction$block_references$arity$1(this$);
} else {
var x__22676__auto__ = (((this$ == null))?null:this$);
var m__22677__auto__ = (cljs.core.async.impl.ioc_macros_runtime.block_references[goog.typeOf(x__22676__auto__)]);
if(!((m__22677__auto__ == null))){
return m__22677__auto__.call(null,this$);
} else {
var m__22677__auto____$1 = (cljs.core.async.impl.ioc_macros_runtime.block_references["_"]);
if(!((m__22677__auto____$1 == null))){
return m__22677__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IInstruction.block-references",this$);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.impl.ioc_macros_runtime.IEmittableInstruction = function(){};

/**
 * Returns the clojure code that this instruction represents
 */
cljs.core.async.impl.ioc_macros_runtime.emit_instruction = (function cljs$core$async$impl$ioc_macros_runtime$emit_instruction(this$,state_sym){
if((!((this$ == null))) && (!((this$.cljs$core$async$impl$ioc_macros_runtime$IEmittableInstruction$emit_instruction$arity$2 == null)))){
return this$.cljs$core$async$impl$ioc_macros_runtime$IEmittableInstruction$emit_instruction$arity$2(this$,state_sym);
} else {
var x__22676__auto__ = (((this$ == null))?null:this$);
var m__22677__auto__ = (cljs.core.async.impl.ioc_macros_runtime.emit_instruction[goog.typeOf(x__22676__auto__)]);
if(!((m__22677__auto__ == null))){
return m__22677__auto__.call(null,this$,state_sym);
} else {
var m__22677__auto____$1 = (cljs.core.async.impl.ioc_macros_runtime.emit_instruction["_"]);
if(!((m__22677__auto____$1 == null))){
return m__22677__auto____$1.call(null,this$,state_sym);
} else {
throw cljs.core.missing_protocol.call(null,"IEmittableInstruction.emit-instruction",this$);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.impl.ioc_macros_runtime.ITerminator = function(){};

/**
 * Returns a unique symbol for this instruction
 */
cljs.core.async.impl.ioc_macros_runtime.terminator_code = (function cljs$core$async$impl$ioc_macros_runtime$terminator_code(this$){
if((!((this$ == null))) && (!((this$.cljs$core$async$impl$ioc_macros_runtime$ITerminator$terminator_code$arity$1 == null)))){
return this$.cljs$core$async$impl$ioc_macros_runtime$ITerminator$terminator_code$arity$1(this$);
} else {
var x__22676__auto__ = (((this$ == null))?null:this$);
var m__22677__auto__ = (cljs.core.async.impl.ioc_macros_runtime.terminator_code[goog.typeOf(x__22676__auto__)]);
if(!((m__22677__auto__ == null))){
return m__22677__auto__.call(null,this$);
} else {
var m__22677__auto____$1 = (cljs.core.async.impl.ioc_macros_runtime.terminator_code["_"]);
if(!((m__22677__auto____$1 == null))){
return m__22677__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"ITerminator.terminator-code",this$);
}
}
}
});

/**
 * Emites the code to terminate a given block
 */
cljs.core.async.impl.ioc_macros_runtime.terminate_block = (function cljs$core$async$impl$ioc_macros_runtime$terminate_block(this$,state_sym,custom_terminators){
if((!((this$ == null))) && (!((this$.cljs$core$async$impl$ioc_macros_runtime$ITerminator$terminate_block$arity$3 == null)))){
return this$.cljs$core$async$impl$ioc_macros_runtime$ITerminator$terminate_block$arity$3(this$,state_sym,custom_terminators);
} else {
var x__22676__auto__ = (((this$ == null))?null:this$);
var m__22677__auto__ = (cljs.core.async.impl.ioc_macros_runtime.terminate_block[goog.typeOf(x__22676__auto__)]);
if(!((m__22677__auto__ == null))){
return m__22677__auto__.call(null,this$,state_sym,custom_terminators);
} else {
var m__22677__auto____$1 = (cljs.core.async.impl.ioc_macros_runtime.terminate_block["_"]);
if(!((m__22677__auto____$1 == null))){
return m__22677__auto____$1.call(null,this$,state_sym,custom_terminators);
} else {
throw cljs.core.missing_protocol.call(null,"ITerminator.terminate-block",this$);
}
}
}
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.async.impl.ioc_macros_runtime.IEmittableInstruction}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.async.impl.ioc_macros_runtime.IInstruction}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.core.async.impl.ioc_macros_runtime.Const = (function (value,__meta,__extmap,__hash){
this.value = value;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = -2065299702;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.core.async.impl.ioc_macros_runtime.Const.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__22643__auto__,k__22644__auto__){
var self__ = this;
var this__22643__auto____$1 = this;
return this__22643__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__22644__auto__,null);
});

cljs.core.async.impl.ioc_macros_runtime.Const.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__22645__auto__,k232,else__22646__auto__){
var self__ = this;
var this__22645__auto____$1 = this;
var G__236 = k232;
var G__236__$1 = (((G__236 instanceof cljs.core.Keyword))?G__236.fqn:null);
switch (G__236__$1) {
case "value":
return self__.value;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k232,else__22646__auto__);

}
});

cljs.core.async.impl.ioc_macros_runtime.Const.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__22657__auto__,writer__22658__auto__,opts__22659__auto__){
var self__ = this;
var this__22657__auto____$1 = this;
var pr_pair__22660__auto__ = ((function (this__22657__auto____$1){
return (function (keyval__22661__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__22658__auto__,cljs.core.pr_writer,""," ","",opts__22659__auto__,keyval__22661__auto__);
});})(this__22657__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__22658__auto__,pr_pair__22660__auto__,"#cljs.core.async.impl.ioc-macros-runtime.Const{",", ","}",opts__22659__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",(305978217)),self__.value],null))], null),self__.__extmap));
});

cljs.core.async.impl.ioc_macros_runtime.Const.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__231){
var self__ = this;
var G__231__$1 = this;
return (new cljs.core.RecordIter((0),G__231__$1,(1),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",(305978217))], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

cljs.core.async.impl.ioc_macros_runtime.Const.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__22641__auto__){
var self__ = this;
var this__22641__auto____$1 = this;
return self__.__meta;
});

cljs.core.async.impl.ioc_macros_runtime.Const.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__22638__auto__){
var self__ = this;
var this__22638__auto____$1 = this;
return (new cljs.core.async.impl.ioc_macros_runtime.Const(self__.value,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.core.async.impl.ioc_macros_runtime.Const.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__22647__auto__){
var self__ = this;
var this__22647__auto____$1 = this;
return ((1) + cljs.core.count.call(null,self__.__extmap));
});

cljs.core.async.impl.ioc_macros_runtime.Const.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__22639__auto__){
var self__ = this;
var this__22639__auto____$1 = this;
var h__22078__auto__ = self__.__hash;
if(!((h__22078__auto__ == null))){
return h__22078__auto__;
} else {
var h__22078__auto____$1 = ((function (h__22078__auto__,this__22639__auto____$1){
return (function (coll__22640__auto__){
return ((601104274) ^ cljs.core.hash_unordered_coll.call(null,coll__22640__auto__));
});})(h__22078__auto__,this__22639__auto____$1))
.call(null,this__22639__auto____$1);
self__.__hash = h__22078__auto____$1;

return h__22078__auto____$1;
}
});

cljs.core.async.impl.ioc_macros_runtime.Const.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this233,other234){
var self__ = this;
var this233__$1 = this;
return (!((other234 == null))) && ((this233__$1.constructor === other234.constructor)) && (cljs.core._EQ_.call(null,this233__$1.value,other234.value)) && (cljs.core._EQ_.call(null,this233__$1.__extmap,other234.__extmap));
});

cljs.core.async.impl.ioc_macros_runtime.Const.prototype.cljs$core$async$impl$ioc_macros_runtime$IEmittableInstruction$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.impl.ioc_macros_runtime.Const.prototype.cljs$core$async$impl$ioc_macros_runtime$IEmittableInstruction$emit_instruction$arity$2 = (function (this$,state_sym){
var self__ = this;
var this$__$1 = this;
if(cljs.core._EQ_.call(null,self__.value,new cljs.core.Keyword("cljs.core.async.impl.ioc-macros-runtime","value","cljs.core.async.impl.ioc-macros-runtime/value",(1763202694)))){
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(function (){var x__22880__auto__ = new cljs.core.Keyword(null,"id","id",(-1388402092)).cljs$core$IFn$_invoke$arity$1(this$__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22880__auto__);
})(),(function (){var x__22880__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","aget","cljs.core/aget",(6345791),null)),(function (){var x__22880__auto__ = state_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22880__auto__);
})(),(function (){var x__22880__auto__ = (2);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22880__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22880__auto__);
})())));
} else {
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(function (){var x__22880__auto__ = new cljs.core.Keyword(null,"id","id",(-1388402092)).cljs$core$IFn$_invoke$arity$1(this$__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22880__auto__);
})(),(function (){var x__22880__auto__ = self__.value;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22880__auto__);
})())));
}
});

cljs.core.async.impl.ioc_macros_runtime.Const.prototype.cljs$core$async$impl$ioc_macros_runtime$IInstruction$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.impl.ioc_macros_runtime.Const.prototype.cljs$core$async$impl$ioc_macros_runtime$IInstruction$reads_from$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.value], null);
});

cljs.core.async.impl.ioc_macros_runtime.Const.prototype.cljs$core$async$impl$ioc_macros_runtime$IInstruction$writes_to$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",(-1388402092)).cljs$core$IFn$_invoke$arity$1(this$__$1)], null);
});

cljs.core.async.impl.ioc_macros_runtime.Const.prototype.cljs$core$async$impl$ioc_macros_runtime$IInstruction$block_references$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.PersistentVector.EMPTY;
});

cljs.core.async.impl.ioc_macros_runtime.Const.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__22652__auto__,k__22653__auto__){
var self__ = this;
var this__22652__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",(305978217)),null], null), null),k__22653__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__22652__auto____$1),self__.__meta),k__22653__auto__);
} else {
return (new cljs.core.async.impl.ioc_macros_runtime.Const(self__.value,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__22653__auto__)),null));
}
});

cljs.core.async.impl.ioc_macros_runtime.Const.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__22650__auto__,k__22651__auto__,G__231){
var self__ = this;
var this__22650__auto____$1 = this;
var pred__237 = cljs.core.keyword_identical_QMARK_;
var expr__238 = k__22651__auto__;
if(cljs.core.truth_(pred__237.call(null,new cljs.core.Keyword(null,"value","value",(305978217)),expr__238))){
return (new cljs.core.async.impl.ioc_macros_runtime.Const(G__231,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.core.async.impl.ioc_macros_runtime.Const(self__.value,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__22651__auto__,G__231),null));
}
});

cljs.core.async.impl.ioc_macros_runtime.Const.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__22655__auto__){
var self__ = this;
var this__22655__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",(305978217)),self__.value],null))], null),self__.__extmap));
});

cljs.core.async.impl.ioc_macros_runtime.Const.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__22642__auto__,G__231){
var self__ = this;
var this__22642__auto____$1 = this;
return (new cljs.core.async.impl.ioc_macros_runtime.Const(self__.value,G__231,self__.__extmap,self__.__hash));
});

cljs.core.async.impl.ioc_macros_runtime.Const.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__22648__auto__,entry__22649__auto__){
var self__ = this;
var this__22648__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__22649__auto__)){
return this__22648__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__22649__auto__,(0)),cljs.core._nth.call(null,entry__22649__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__22648__auto____$1,entry__22649__auto__);
}
});

cljs.core.async.impl.ioc_macros_runtime.Const.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",(1946509744),null)], null);
});

cljs.core.async.impl.ioc_macros_runtime.Const.cljs$lang$type = true;

cljs.core.async.impl.ioc_macros_runtime.Const.cljs$lang$ctorPrSeq = (function (this__22665__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"cljs.core.async.impl.ioc-macros-runtime/Const");
});

cljs.core.async.impl.ioc_macros_runtime.Const.cljs$lang$ctorPrWriter = (function (this__22665__auto__,writer__22666__auto__){
return cljs.core._write.call(null,writer__22666__auto__,"cljs.core.async.impl.ioc-macros-runtime/Const");
});

cljs.core.async.impl.ioc_macros_runtime.__GT_Const = (function cljs$core$async$impl$ioc_macros_runtime$__GT_Const(value){
return (new cljs.core.async.impl.ioc_macros_runtime.Const(value,null,null,null));
});

cljs.core.async.impl.ioc_macros_runtime.map__GT_Const = (function cljs$core$async$impl$ioc_macros_runtime$map__GT_Const(G__235){
return (new cljs.core.async.impl.ioc_macros_runtime.Const(new cljs.core.Keyword(null,"value","value",(305978217)).cljs$core$IFn$_invoke$arity$1(G__235),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__235,new cljs.core.Keyword(null,"value","value",(305978217)))),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.async.impl.ioc_macros_runtime.ITerminator}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.async.impl.ioc_macros_runtime.IInstruction}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.core.async.impl.ioc_macros_runtime.CustomTerminator = (function (f,blk,values,__meta,__extmap,__hash){
this.f = f;
this.blk = blk;
this.values = values;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = -2065299702;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.core.async.impl.ioc_macros_runtime.CustomTerminator.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__22643__auto__,k__22644__auto__){
var self__ = this;
var this__22643__auto____$1 = this;
return this__22643__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__22644__auto__,null);
});

cljs.core.async.impl.ioc_macros_runtime.CustomTerminator.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__22645__auto__,k242,else__22646__auto__){
var self__ = this;
var this__22645__auto____$1 = this;
var G__246 = k242;
var G__246__$1 = (((G__246 instanceof cljs.core.Keyword))?G__246.fqn:null);
switch (G__246__$1) {
case "f":
return self__.f;

break;
case "blk":
return self__.blk;

break;
case "values":
return self__.values;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k242,else__22646__auto__);

}
});

cljs.core.async.impl.ioc_macros_runtime.CustomTerminator.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__22657__auto__,writer__22658__auto__,opts__22659__auto__){
var self__ = this;
var this__22657__auto____$1 = this;
var pr_pair__22660__auto__ = ((function (this__22657__auto____$1){
return (function (keyval__22661__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__22658__auto__,cljs.core.pr_writer,""," ","",opts__22659__auto__,keyval__22661__auto__);
});})(this__22657__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__22658__auto__,pr_pair__22660__auto__,"#cljs.core.async.impl.ioc-macros-runtime.CustomTerminator{",", ","}",opts__22659__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"f","f",(-1597136552)),self__.f],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"blk","blk",(307667994)),self__.blk],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"values","values",(372645556)),self__.values],null))], null),self__.__extmap));
});

cljs.core.async.impl.ioc_macros_runtime.CustomTerminator.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__241){
var self__ = this;
var G__241__$1 = this;
return (new cljs.core.RecordIter((0),G__241__$1,(3),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"f","f",(-1597136552)),new cljs.core.Keyword(null,"blk","blk",(307667994)),new cljs.core.Keyword(null,"values","values",(372645556))], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

cljs.core.async.impl.ioc_macros_runtime.CustomTerminator.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__22641__auto__){
var self__ = this;
var this__22641__auto____$1 = this;
return self__.__meta;
});

cljs.core.async.impl.ioc_macros_runtime.CustomTerminator.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__22638__auto__){
var self__ = this;
var this__22638__auto____$1 = this;
return (new cljs.core.async.impl.ioc_macros_runtime.CustomTerminator(self__.f,self__.blk,self__.values,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.core.async.impl.ioc_macros_runtime.CustomTerminator.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__22647__auto__){
var self__ = this;
var this__22647__auto____$1 = this;
return ((3) + cljs.core.count.call(null,self__.__extmap));
});

cljs.core.async.impl.ioc_macros_runtime.CustomTerminator.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__22639__auto__){
var self__ = this;
var this__22639__auto____$1 = this;
var h__22078__auto__ = self__.__hash;
if(!((h__22078__auto__ == null))){
return h__22078__auto__;
} else {
var h__22078__auto____$1 = ((function (h__22078__auto__,this__22639__auto____$1){
return (function (coll__22640__auto__){
return ((-32571799) ^ cljs.core.hash_unordered_coll.call(null,coll__22640__auto__));
});})(h__22078__auto__,this__22639__auto____$1))
.call(null,this__22639__auto____$1);
self__.__hash = h__22078__auto____$1;

return h__22078__auto____$1;
}
});

cljs.core.async.impl.ioc_macros_runtime.CustomTerminator.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this243,other244){
var self__ = this;
var this243__$1 = this;
return (!((other244 == null))) && ((this243__$1.constructor === other244.constructor)) && (cljs.core._EQ_.call(null,this243__$1.f,other244.f)) && (cljs.core._EQ_.call(null,this243__$1.blk,other244.blk)) && (cljs.core._EQ_.call(null,this243__$1.values,other244.values)) && (cljs.core._EQ_.call(null,this243__$1.__extmap,other244.__extmap));
});

cljs.core.async.impl.ioc_macros_runtime.CustomTerminator.prototype.cljs$core$async$impl$ioc_macros_runtime$ITerminator$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.impl.ioc_macros_runtime.CustomTerminator.prototype.cljs$core$async$impl$ioc_macros_runtime$ITerminator$terminate_block$arity$3 = (function (this$,state_sym,_){
var self__ = this;
var this$__$1 = this;
return cljs.core.sequence.call(null,cljs.core.concat.call(null,(function (){var x__22880__auto__ = self__.f;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22880__auto__);
})(),(function (){var x__22880__auto__ = state_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22880__auto__);
})(),(function (){var x__22880__auto__ = self__.blk;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22880__auto__);
})(),self__.values));
});

cljs.core.async.impl.ioc_macros_runtime.CustomTerminator.prototype.cljs$core$async$impl$ioc_macros_runtime$IInstruction$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.impl.ioc_macros_runtime.CustomTerminator.prototype.cljs$core$async$impl$ioc_macros_runtime$IInstruction$reads_from$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.values;
});

cljs.core.async.impl.ioc_macros_runtime.CustomTerminator.prototype.cljs$core$async$impl$ioc_macros_runtime$IInstruction$writes_to$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.PersistentVector.EMPTY;
});

cljs.core.async.impl.ioc_macros_runtime.CustomTerminator.prototype.cljs$core$async$impl$ioc_macros_runtime$IInstruction$block_references$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.PersistentVector.EMPTY;
});

cljs.core.async.impl.ioc_macros_runtime.CustomTerminator.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__22652__auto__,k__22653__auto__){
var self__ = this;
var this__22652__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"f","f",(-1597136552)),null,new cljs.core.Keyword(null,"blk","blk",(307667994)),null,new cljs.core.Keyword(null,"values","values",(372645556)),null], null), null),k__22653__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__22652__auto____$1),self__.__meta),k__22653__auto__);
} else {
return (new cljs.core.async.impl.ioc_macros_runtime.CustomTerminator(self__.f,self__.blk,self__.values,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__22653__auto__)),null));
}
});

cljs.core.async.impl.ioc_macros_runtime.CustomTerminator.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__22650__auto__,k__22651__auto__,G__241){
var self__ = this;
var this__22650__auto____$1 = this;
var pred__247 = cljs.core.keyword_identical_QMARK_;
var expr__248 = k__22651__auto__;
if(cljs.core.truth_(pred__247.call(null,new cljs.core.Keyword(null,"f","f",(-1597136552)),expr__248))){
return (new cljs.core.async.impl.ioc_macros_runtime.CustomTerminator(G__241,self__.blk,self__.values,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__247.call(null,new cljs.core.Keyword(null,"blk","blk",(307667994)),expr__248))){
return (new cljs.core.async.impl.ioc_macros_runtime.CustomTerminator(self__.f,G__241,self__.values,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__247.call(null,new cljs.core.Keyword(null,"values","values",(372645556)),expr__248))){
return (new cljs.core.async.impl.ioc_macros_runtime.CustomTerminator(self__.f,self__.blk,G__241,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.core.async.impl.ioc_macros_runtime.CustomTerminator(self__.f,self__.blk,self__.values,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__22651__auto__,G__241),null));
}
}
}
});

cljs.core.async.impl.ioc_macros_runtime.CustomTerminator.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__22655__auto__){
var self__ = this;
var this__22655__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"f","f",(-1597136552)),self__.f],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"blk","blk",(307667994)),self__.blk],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"values","values",(372645556)),self__.values],null))], null),self__.__extmap));
});

cljs.core.async.impl.ioc_macros_runtime.CustomTerminator.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__22642__auto__,G__241){
var self__ = this;
var this__22642__auto____$1 = this;
return (new cljs.core.async.impl.ioc_macros_runtime.CustomTerminator(self__.f,self__.blk,self__.values,G__241,self__.__extmap,self__.__hash));
});

cljs.core.async.impl.ioc_macros_runtime.CustomTerminator.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__22648__auto__,entry__22649__auto__){
var self__ = this;
var this__22648__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__22649__auto__)){
return this__22648__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__22649__auto__,(0)),cljs.core._nth.call(null,entry__22649__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__22648__auto____$1,entry__22649__auto__);
}
});

cljs.core.async.impl.ioc_macros_runtime.CustomTerminator.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"blk","blk",(1948199521),null),new cljs.core.Symbol(null,"values","values",(2013177083),null)], null);
});

cljs.core.async.impl.ioc_macros_runtime.CustomTerminator.cljs$lang$type = true;

cljs.core.async.impl.ioc_macros_runtime.CustomTerminator.cljs$lang$ctorPrSeq = (function (this__22665__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"cljs.core.async.impl.ioc-macros-runtime/CustomTerminator");
});

cljs.core.async.impl.ioc_macros_runtime.CustomTerminator.cljs$lang$ctorPrWriter = (function (this__22665__auto__,writer__22666__auto__){
return cljs.core._write.call(null,writer__22666__auto__,"cljs.core.async.impl.ioc-macros-runtime/CustomTerminator");
});

cljs.core.async.impl.ioc_macros_runtime.__GT_CustomTerminator = (function cljs$core$async$impl$ioc_macros_runtime$__GT_CustomTerminator(f,blk,values){
return (new cljs.core.async.impl.ioc_macros_runtime.CustomTerminator(f,blk,values,null,null,null));
});

cljs.core.async.impl.ioc_macros_runtime.map__GT_CustomTerminator = (function cljs$core$async$impl$ioc_macros_runtime$map__GT_CustomTerminator(G__245){
return (new cljs.core.async.impl.ioc_macros_runtime.CustomTerminator(new cljs.core.Keyword(null,"f","f",(-1597136552)).cljs$core$IFn$_invoke$arity$1(G__245),new cljs.core.Keyword(null,"blk","blk",(307667994)).cljs$core$IFn$_invoke$arity$1(G__245),new cljs.core.Keyword(null,"values","values",(372645556)).cljs$core$IFn$_invoke$arity$1(G__245),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__245,new cljs.core.Keyword(null,"f","f",(-1597136552)),new cljs.core.Keyword(null,"blk","blk",(307667994)),new cljs.core.Keyword(null,"values","values",(372645556)))),null));
});

cljs.core.async.impl.ioc_macros_runtime.emit_clashing_binds = (function cljs$core$async$impl$ioc_macros_runtime$emit_clashing_binds(recur_nodes,ids,clashes){
var temp_binds = cljs.core.reduce.call(null,(function (acc,i){
return cljs.core.assoc.call(null,acc,i,cljs.core.gensym.call(null,"tmp"));
}),cljs.core.PersistentArrayMap.EMPTY,clashes);
return cljs.core.concat.call(null,cljs.core.mapcat.call(null,((function (temp_binds){
return (function (i){
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(function (){var x__22880__auto__ = temp_binds.call(null,i);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22880__auto__);
})(),(function (){var x__22880__auto__ = i;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22880__auto__);
})())));
});})(temp_binds))
,clashes),cljs.core.mapcat.call(null,((function (temp_binds){
return (function (node,id){
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(function (){var x__22880__auto__ = node;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22880__auto__);
})(),(function (){var x__22880__auto__ = cljs.core.get.call(null,temp_binds,id,id);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22880__auto__);
})())));
});})(temp_binds))
,recur_nodes,ids));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.async.impl.ioc_macros_runtime.IEmittableInstruction}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.async.impl.ioc_macros_runtime.IInstruction}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.core.async.impl.ioc_macros_runtime.Recur = (function (recur_nodes,ids,__meta,__extmap,__hash){
this.recur_nodes = recur_nodes;
this.ids = ids;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = -2065299702;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.core.async.impl.ioc_macros_runtime.Recur.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__22643__auto__,k__22644__auto__){
var self__ = this;
var this__22643__auto____$1 = this;
return this__22643__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__22644__auto__,null);
});

cljs.core.async.impl.ioc_macros_runtime.Recur.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__22645__auto__,k252,else__22646__auto__){
var self__ = this;
var this__22645__auto____$1 = this;
var G__256 = k252;
var G__256__$1 = (((G__256 instanceof cljs.core.Keyword))?G__256.fqn:null);
switch (G__256__$1) {
case "recur-nodes":
return self__.recur_nodes;

break;
case "ids":
return self__.ids;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k252,else__22646__auto__);

}
});

cljs.core.async.impl.ioc_macros_runtime.Recur.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__22657__auto__,writer__22658__auto__,opts__22659__auto__){
var self__ = this;
var this__22657__auto____$1 = this;
var pr_pair__22660__auto__ = ((function (this__22657__auto____$1){
return (function (keyval__22661__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__22658__auto__,cljs.core.pr_writer,""," ","",opts__22659__auto__,keyval__22661__auto__);
});})(this__22657__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__22658__auto__,pr_pair__22660__auto__,"#cljs.core.async.impl.ioc-macros-runtime.Recur{",", ","}",opts__22659__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"recur-nodes","recur-nodes",(2077600963)),self__.recur_nodes],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ids","ids",(-998535796)),self__.ids],null))], null),self__.__extmap));
});

cljs.core.async.impl.ioc_macros_runtime.Recur.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__251){
var self__ = this;
var G__251__$1 = this;
return (new cljs.core.RecordIter((0),G__251__$1,(2),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"recur-nodes","recur-nodes",(2077600963)),new cljs.core.Keyword(null,"ids","ids",(-998535796))], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

cljs.core.async.impl.ioc_macros_runtime.Recur.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__22641__auto__){
var self__ = this;
var this__22641__auto____$1 = this;
return self__.__meta;
});

cljs.core.async.impl.ioc_macros_runtime.Recur.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__22638__auto__){
var self__ = this;
var this__22638__auto____$1 = this;
return (new cljs.core.async.impl.ioc_macros_runtime.Recur(self__.recur_nodes,self__.ids,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.core.async.impl.ioc_macros_runtime.Recur.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__22647__auto__){
var self__ = this;
var this__22647__auto____$1 = this;
return ((2) + cljs.core.count.call(null,self__.__extmap));
});

cljs.core.async.impl.ioc_macros_runtime.Recur.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__22639__auto__){
var self__ = this;
var this__22639__auto____$1 = this;
var h__22078__auto__ = self__.__hash;
if(!((h__22078__auto__ == null))){
return h__22078__auto__;
} else {
var h__22078__auto____$1 = ((function (h__22078__auto__,this__22639__auto____$1){
return (function (coll__22640__auto__){
return ((-212427540) ^ cljs.core.hash_unordered_coll.call(null,coll__22640__auto__));
});})(h__22078__auto__,this__22639__auto____$1))
.call(null,this__22639__auto____$1);
self__.__hash = h__22078__auto____$1;

return h__22078__auto____$1;
}
});

cljs.core.async.impl.ioc_macros_runtime.Recur.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this253,other254){
var self__ = this;
var this253__$1 = this;
return (!((other254 == null))) && ((this253__$1.constructor === other254.constructor)) && (cljs.core._EQ_.call(null,this253__$1.recur_nodes,other254.recur_nodes)) && (cljs.core._EQ_.call(null,this253__$1.ids,other254.ids)) && (cljs.core._EQ_.call(null,this253__$1.__extmap,other254.__extmap));
});

cljs.core.async.impl.ioc_macros_runtime.Recur.prototype.cljs$core$async$impl$ioc_macros_runtime$IEmittableInstruction$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.impl.ioc_macros_runtime.Recur.prototype.cljs$core$async$impl$ioc_macros_runtime$IEmittableInstruction$emit_instruction$arity$2 = (function (this$,state_sym){
var self__ = this;
var this$__$1 = this;
var temp__20271__auto__ = cljs.core.seq.call(null,clojure.set.intersection.call(null,cljs.core.set.call(null,self__.recur_nodes),cljs.core.set.call(null,self__.ids)));
if(temp__20271__auto__){
var overlap = temp__20271__auto__;
return cljs.core.async.impl.ioc_macros_runtime.emit_clashing_binds.call(null,self__.recur_nodes,self__.ids,overlap);
} else {
return cljs.core.mapcat.call(null,((function (temp__20271__auto__,this$__$1){
return (function (r,i){
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(function (){var x__22880__auto__ = r;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22880__auto__);
})(),(function (){var x__22880__auto__ = i;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22880__auto__);
})())));
});})(temp__20271__auto__,this$__$1))
,self__.recur_nodes,self__.ids);
}
});

cljs.core.async.impl.ioc_macros_runtime.Recur.prototype.cljs$core$async$impl$ioc_macros_runtime$IInstruction$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.impl.ioc_macros_runtime.Recur.prototype.cljs$core$async$impl$ioc_macros_runtime$IInstruction$reads_from$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.ids;
});

cljs.core.async.impl.ioc_macros_runtime.Recur.prototype.cljs$core$async$impl$ioc_macros_runtime$IInstruction$writes_to$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.recur_nodes;
});

cljs.core.async.impl.ioc_macros_runtime.Recur.prototype.cljs$core$async$impl$ioc_macros_runtime$IInstruction$block_references$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.PersistentVector.EMPTY;
});

cljs.core.async.impl.ioc_macros_runtime.Recur.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__22652__auto__,k__22653__auto__){
var self__ = this;
var this__22652__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"recur-nodes","recur-nodes",(2077600963)),null,new cljs.core.Keyword(null,"ids","ids",(-998535796)),null], null), null),k__22653__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__22652__auto____$1),self__.__meta),k__22653__auto__);
} else {
return (new cljs.core.async.impl.ioc_macros_runtime.Recur(self__.recur_nodes,self__.ids,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__22653__auto__)),null));
}
});

cljs.core.async.impl.ioc_macros_runtime.Recur.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__22650__auto__,k__22651__auto__,G__251){
var self__ = this;
var this__22650__auto____$1 = this;
var pred__257 = cljs.core.keyword_identical_QMARK_;
var expr__258 = k__22651__auto__;
if(cljs.core.truth_(pred__257.call(null,new cljs.core.Keyword(null,"recur-nodes","recur-nodes",(2077600963)),expr__258))){
return (new cljs.core.async.impl.ioc_macros_runtime.Recur(G__251,self__.ids,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__257.call(null,new cljs.core.Keyword(null,"ids","ids",(-998535796)),expr__258))){
return (new cljs.core.async.impl.ioc_macros_runtime.Recur(self__.recur_nodes,G__251,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.core.async.impl.ioc_macros_runtime.Recur(self__.recur_nodes,self__.ids,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__22651__auto__,G__251),null));
}
}
});

cljs.core.async.impl.ioc_macros_runtime.Recur.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__22655__auto__){
var self__ = this;
var this__22655__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"recur-nodes","recur-nodes",(2077600963)),self__.recur_nodes],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ids","ids",(-998535796)),self__.ids],null))], null),self__.__extmap));
});

cljs.core.async.impl.ioc_macros_runtime.Recur.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__22642__auto__,G__251){
var self__ = this;
var this__22642__auto____$1 = this;
return (new cljs.core.async.impl.ioc_macros_runtime.Recur(self__.recur_nodes,self__.ids,G__251,self__.__extmap,self__.__hash));
});

cljs.core.async.impl.ioc_macros_runtime.Recur.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__22648__auto__,entry__22649__auto__){
var self__ = this;
var this__22648__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__22649__auto__)){
return this__22648__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__22649__auto__,(0)),cljs.core._nth.call(null,entry__22649__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__22648__auto____$1,entry__22649__auto__);
}
});

cljs.core.async.impl.ioc_macros_runtime.Recur.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"recur-nodes","recur-nodes",(-576834806),null),new cljs.core.Symbol(null,"ids","ids",(641995731),null)], null);
});

cljs.core.async.impl.ioc_macros_runtime.Recur.cljs$lang$type = true;

cljs.core.async.impl.ioc_macros_runtime.Recur.cljs$lang$ctorPrSeq = (function (this__22665__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"cljs.core.async.impl.ioc-macros-runtime/Recur");
});

cljs.core.async.impl.ioc_macros_runtime.Recur.cljs$lang$ctorPrWriter = (function (this__22665__auto__,writer__22666__auto__){
return cljs.core._write.call(null,writer__22666__auto__,"cljs.core.async.impl.ioc-macros-runtime/Recur");
});

cljs.core.async.impl.ioc_macros_runtime.__GT_Recur = (function cljs$core$async$impl$ioc_macros_runtime$__GT_Recur(recur_nodes,ids){
return (new cljs.core.async.impl.ioc_macros_runtime.Recur(recur_nodes,ids,null,null,null));
});

cljs.core.async.impl.ioc_macros_runtime.map__GT_Recur = (function cljs$core$async$impl$ioc_macros_runtime$map__GT_Recur(G__255){
return (new cljs.core.async.impl.ioc_macros_runtime.Recur(new cljs.core.Keyword(null,"recur-nodes","recur-nodes",(2077600963)).cljs$core$IFn$_invoke$arity$1(G__255),new cljs.core.Keyword(null,"ids","ids",(-998535796)).cljs$core$IFn$_invoke$arity$1(G__255),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__255,new cljs.core.Keyword(null,"recur-nodes","recur-nodes",(2077600963)),new cljs.core.Keyword(null,"ids","ids",(-998535796)))),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.async.impl.ioc_macros_runtime.IEmittableInstruction}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.async.impl.ioc_macros_runtime.IInstruction}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.core.async.impl.ioc_macros_runtime.Call = (function (refs,__meta,__extmap,__hash){
this.refs = refs;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = -2065299702;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.core.async.impl.ioc_macros_runtime.Call.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__22643__auto__,k__22644__auto__){
var self__ = this;
var this__22643__auto____$1 = this;
return this__22643__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__22644__auto__,null);
});

cljs.core.async.impl.ioc_macros_runtime.Call.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__22645__auto__,k262,else__22646__auto__){
var self__ = this;
var this__22645__auto____$1 = this;
var G__266 = k262;
var G__266__$1 = (((G__266 instanceof cljs.core.Keyword))?G__266.fqn:null);
switch (G__266__$1) {
case "refs":
return self__.refs;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k262,else__22646__auto__);

}
});

cljs.core.async.impl.ioc_macros_runtime.Call.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__22657__auto__,writer__22658__auto__,opts__22659__auto__){
var self__ = this;
var this__22657__auto____$1 = this;
var pr_pair__22660__auto__ = ((function (this__22657__auto____$1){
return (function (keyval__22661__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__22658__auto__,cljs.core.pr_writer,""," ","",opts__22659__auto__,keyval__22661__auto__);
});})(this__22657__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__22658__auto__,pr_pair__22660__auto__,"#cljs.core.async.impl.ioc-macros-runtime.Call{",", ","}",opts__22659__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"refs","refs",(-1560051448)),self__.refs],null))], null),self__.__extmap));
});

cljs.core.async.impl.ioc_macros_runtime.Call.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__261){
var self__ = this;
var G__261__$1 = this;
return (new cljs.core.RecordIter((0),G__261__$1,(1),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"refs","refs",(-1560051448))], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

cljs.core.async.impl.ioc_macros_runtime.Call.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__22641__auto__){
var self__ = this;
var this__22641__auto____$1 = this;
return self__.__meta;
});

cljs.core.async.impl.ioc_macros_runtime.Call.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__22638__auto__){
var self__ = this;
var this__22638__auto____$1 = this;
return (new cljs.core.async.impl.ioc_macros_runtime.Call(self__.refs,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.core.async.impl.ioc_macros_runtime.Call.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__22647__auto__){
var self__ = this;
var this__22647__auto____$1 = this;
return ((1) + cljs.core.count.call(null,self__.__extmap));
});

cljs.core.async.impl.ioc_macros_runtime.Call.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__22639__auto__){
var self__ = this;
var this__22639__auto____$1 = this;
var h__22078__auto__ = self__.__hash;
if(!((h__22078__auto__ == null))){
return h__22078__auto__;
} else {
var h__22078__auto____$1 = ((function (h__22078__auto__,this__22639__auto____$1){
return (function (coll__22640__auto__){
return ((-230859129) ^ cljs.core.hash_unordered_coll.call(null,coll__22640__auto__));
});})(h__22078__auto__,this__22639__auto____$1))
.call(null,this__22639__auto____$1);
self__.__hash = h__22078__auto____$1;

return h__22078__auto____$1;
}
});

cljs.core.async.impl.ioc_macros_runtime.Call.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this263,other264){
var self__ = this;
var this263__$1 = this;
return (!((other264 == null))) && ((this263__$1.constructor === other264.constructor)) && (cljs.core._EQ_.call(null,this263__$1.refs,other264.refs)) && (cljs.core._EQ_.call(null,this263__$1.__extmap,other264.__extmap));
});

cljs.core.async.impl.ioc_macros_runtime.Call.prototype.cljs$core$async$impl$ioc_macros_runtime$IEmittableInstruction$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.impl.ioc_macros_runtime.Call.prototype.cljs$core$async$impl$ioc_macros_runtime$IEmittableInstruction$emit_instruction$arity$2 = (function (this$,state_sym){
var self__ = this;
var this$__$1 = this;
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(function (){var x__22880__auto__ = new cljs.core.Keyword(null,"id","id",(-1388402092)).cljs$core$IFn$_invoke$arity$1(this$__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22880__auto__);
})(),(function (){var x__22880__auto__ = cljs.core.seq.call(null,self__.refs);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22880__auto__);
})())));
});

cljs.core.async.impl.ioc_macros_runtime.Call.prototype.cljs$core$async$impl$ioc_macros_runtime$IInstruction$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.impl.ioc_macros_runtime.Call.prototype.cljs$core$async$impl$ioc_macros_runtime$IInstruction$reads_from$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.refs;
});

cljs.core.async.impl.ioc_macros_runtime.Call.prototype.cljs$core$async$impl$ioc_macros_runtime$IInstruction$writes_to$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",(-1388402092)).cljs$core$IFn$_invoke$arity$1(this$__$1)], null);
});

cljs.core.async.impl.ioc_macros_runtime.Call.prototype.cljs$core$async$impl$ioc_macros_runtime$IInstruction$block_references$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.PersistentVector.EMPTY;
});

cljs.core.async.impl.ioc_macros_runtime.Call.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__22652__auto__,k__22653__auto__){
var self__ = this;
var this__22652__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"refs","refs",(-1560051448)),null], null), null),k__22653__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__22652__auto____$1),self__.__meta),k__22653__auto__);
} else {
return (new cljs.core.async.impl.ioc_macros_runtime.Call(self__.refs,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__22653__auto__)),null));
}
});

cljs.core.async.impl.ioc_macros_runtime.Call.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__22650__auto__,k__22651__auto__,G__261){
var self__ = this;
var this__22650__auto____$1 = this;
var pred__267 = cljs.core.keyword_identical_QMARK_;
var expr__268 = k__22651__auto__;
if(cljs.core.truth_(pred__267.call(null,new cljs.core.Keyword(null,"refs","refs",(-1560051448)),expr__268))){
return (new cljs.core.async.impl.ioc_macros_runtime.Call(G__261,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.core.async.impl.ioc_macros_runtime.Call(self__.refs,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__22651__auto__,G__261),null));
}
});

cljs.core.async.impl.ioc_macros_runtime.Call.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__22655__auto__){
var self__ = this;
var this__22655__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"refs","refs",(-1560051448)),self__.refs],null))], null),self__.__extmap));
});

cljs.core.async.impl.ioc_macros_runtime.Call.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__22642__auto__,G__261){
var self__ = this;
var this__22642__auto____$1 = this;
return (new cljs.core.async.impl.ioc_macros_runtime.Call(self__.refs,G__261,self__.__extmap,self__.__hash));
});

cljs.core.async.impl.ioc_macros_runtime.Call.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__22648__auto__,entry__22649__auto__){
var self__ = this;
var this__22648__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__22649__auto__)){
return this__22648__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__22649__auto__,(0)),cljs.core._nth.call(null,entry__22649__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__22648__auto____$1,entry__22649__auto__);
}
});

cljs.core.async.impl.ioc_macros_runtime.Call.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"refs","refs",(80480079),null)], null);
});

cljs.core.async.impl.ioc_macros_runtime.Call.cljs$lang$type = true;

cljs.core.async.impl.ioc_macros_runtime.Call.cljs$lang$ctorPrSeq = (function (this__22665__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"cljs.core.async.impl.ioc-macros-runtime/Call");
});

cljs.core.async.impl.ioc_macros_runtime.Call.cljs$lang$ctorPrWriter = (function (this__22665__auto__,writer__22666__auto__){
return cljs.core._write.call(null,writer__22666__auto__,"cljs.core.async.impl.ioc-macros-runtime/Call");
});

cljs.core.async.impl.ioc_macros_runtime.__GT_Call = (function cljs$core$async$impl$ioc_macros_runtime$__GT_Call(refs){
return (new cljs.core.async.impl.ioc_macros_runtime.Call(refs,null,null,null));
});

cljs.core.async.impl.ioc_macros_runtime.map__GT_Call = (function cljs$core$async$impl$ioc_macros_runtime$map__GT_Call(G__265){
return (new cljs.core.async.impl.ioc_macros_runtime.Call(new cljs.core.Keyword(null,"refs","refs",(-1560051448)).cljs$core$IFn$_invoke$arity$1(G__265),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__265,new cljs.core.Keyword(null,"refs","refs",(-1560051448)))),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.async.impl.ioc_macros_runtime.ITerminator}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.async.impl.ioc_macros_runtime.IInstruction}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.core.async.impl.ioc_macros_runtime.Case = (function (val_id,test_vals,jmp_blocks,default_block,__meta,__extmap,__hash){
this.val_id = val_id;
this.test_vals = test_vals;
this.jmp_blocks = jmp_blocks;
this.default_block = default_block;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = -2065299702;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.core.async.impl.ioc_macros_runtime.Case.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__22643__auto__,k__22644__auto__){
var self__ = this;
var this__22643__auto____$1 = this;
return this__22643__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__22644__auto__,null);
});

cljs.core.async.impl.ioc_macros_runtime.Case.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__22645__auto__,k272,else__22646__auto__){
var self__ = this;
var this__22645__auto____$1 = this;
var G__276 = k272;
var G__276__$1 = (((G__276 instanceof cljs.core.Keyword))?G__276.fqn:null);
switch (G__276__$1) {
case "val-id":
return self__.val_id;

break;
case "test-vals":
return self__.test_vals;

break;
case "jmp-blocks":
return self__.jmp_blocks;

break;
case "default-block":
return self__.default_block;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k272,else__22646__auto__);

}
});

cljs.core.async.impl.ioc_macros_runtime.Case.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__22657__auto__,writer__22658__auto__,opts__22659__auto__){
var self__ = this;
var this__22657__auto____$1 = this;
var pr_pair__22660__auto__ = ((function (this__22657__auto____$1){
return (function (keyval__22661__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__22658__auto__,cljs.core.pr_writer,""," ","",opts__22659__auto__,keyval__22661__auto__);
});})(this__22657__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__22658__auto__,pr_pair__22660__auto__,"#cljs.core.async.impl.ioc-macros-runtime.Case{",", ","}",opts__22659__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"val-id","val-id",(-1846677573)),self__.val_id],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"test-vals","test-vals",(563777481)),self__.test_vals],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"jmp-blocks","jmp-blocks",(339606241)),self__.jmp_blocks],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"default-block","default-block",(841911023)),self__.default_block],null))], null),self__.__extmap));
});

cljs.core.async.impl.ioc_macros_runtime.Case.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__271){
var self__ = this;
var G__271__$1 = this;
return (new cljs.core.RecordIter((0),G__271__$1,(4),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"val-id","val-id",(-1846677573)),new cljs.core.Keyword(null,"test-vals","test-vals",(563777481)),new cljs.core.Keyword(null,"jmp-blocks","jmp-blocks",(339606241)),new cljs.core.Keyword(null,"default-block","default-block",(841911023))], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

cljs.core.async.impl.ioc_macros_runtime.Case.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__22641__auto__){
var self__ = this;
var this__22641__auto____$1 = this;
return self__.__meta;
});

cljs.core.async.impl.ioc_macros_runtime.Case.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__22638__auto__){
var self__ = this;
var this__22638__auto____$1 = this;
return (new cljs.core.async.impl.ioc_macros_runtime.Case(self__.val_id,self__.test_vals,self__.jmp_blocks,self__.default_block,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.core.async.impl.ioc_macros_runtime.Case.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__22647__auto__){
var self__ = this;
var this__22647__auto____$1 = this;
return ((4) + cljs.core.count.call(null,self__.__extmap));
});

cljs.core.async.impl.ioc_macros_runtime.Case.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__22639__auto__){
var self__ = this;
var this__22639__auto____$1 = this;
var h__22078__auto__ = self__.__hash;
if(!((h__22078__auto__ == null))){
return h__22078__auto__;
} else {
var h__22078__auto____$1 = ((function (h__22078__auto__,this__22639__auto____$1){
return (function (coll__22640__auto__){
return ((831588367) ^ cljs.core.hash_unordered_coll.call(null,coll__22640__auto__));
});})(h__22078__auto__,this__22639__auto____$1))
.call(null,this__22639__auto____$1);
self__.__hash = h__22078__auto____$1;

return h__22078__auto____$1;
}
});

cljs.core.async.impl.ioc_macros_runtime.Case.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this273,other274){
var self__ = this;
var this273__$1 = this;
return (!((other274 == null))) && ((this273__$1.constructor === other274.constructor)) && (cljs.core._EQ_.call(null,this273__$1.val_id,other274.val_id)) && (cljs.core._EQ_.call(null,this273__$1.test_vals,other274.test_vals)) && (cljs.core._EQ_.call(null,this273__$1.jmp_blocks,other274.jmp_blocks)) && (cljs.core._EQ_.call(null,this273__$1.default_block,other274.default_block)) && (cljs.core._EQ_.call(null,this273__$1.__extmap,other274.__extmap));
});

cljs.core.async.impl.ioc_macros_runtime.Case.prototype.cljs$core$async$impl$ioc_macros_runtime$ITerminator$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.impl.ioc_macros_runtime.Case.prototype.cljs$core$async$impl$ioc_macros_runtime$ITerminator$terminate_block$arity$3 = (function (this$,state_sym,_){
var self__ = this;
var this$__$1 = this;
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",(1686842252),null)),(function (){var x__22880__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","case","cljs.core/case",(-1674122212),null)),(function (){var x__22880__auto__ = self__.val_id;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22880__auto__);
})(),cljs.core.concat.call(null,cljs.core.mapcat.call(null,((function (this$__$1){
return (function (test,blk){
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(function (){var x__22880__auto__ = test;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22880__auto__);
})(),(function (){var x__22880__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core.async.impl.ioc-macros","aset-all!","cljs.core.async.impl.ioc-macros/aset-all!",(2072147987),null)),(function (){var x__22880__auto__ = state_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22880__auto__);
})(),(function (){var x__22880__auto__ = (1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22880__auto__);
})(),(function (){var x__22880__auto__ = blk;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22880__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22880__auto__);
})())));
});})(this$__$1))
,self__.test_vals,self__.jmp_blocks),(cljs.core.truth_(self__.default_block)?cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(function (){var x__22880__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",(1686842252),null)),(function (){var x__22880__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core.async.impl.ioc-macros","aset-all!","cljs.core.async.impl.ioc-macros/aset-all!",(2072147987),null)),(function (){var x__22880__auto__ = state_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22880__auto__);
})(),(function (){var x__22880__auto__ = (1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22880__auto__);
})(),(function (){var x__22880__auto__ = self__.default_block;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22880__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22880__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"recur","recur",(-437573268)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22880__auto__);
})()))):null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22880__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"recur","recur",(-437573268)))));
});

cljs.core.async.impl.ioc_macros_runtime.Case.prototype.cljs$core$async$impl$ioc_macros_runtime$IInstruction$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.impl.ioc_macros_runtime.Case.prototype.cljs$core$async$impl$ioc_macros_runtime$IInstruction$reads_from$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.val_id], null);
});

cljs.core.async.impl.ioc_macros_runtime.Case.prototype.cljs$core$async$impl$ioc_macros_runtime$IInstruction$writes_to$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.PersistentVector.EMPTY;
});

cljs.core.async.impl.ioc_macros_runtime.Case.prototype.cljs$core$async$impl$ioc_macros_runtime$IInstruction$block_references$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.PersistentVector.EMPTY;
});

cljs.core.async.impl.ioc_macros_runtime.Case.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__22652__auto__,k__22653__auto__){
var self__ = this;
var this__22652__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"val-id","val-id",(-1846677573)),null,new cljs.core.Keyword(null,"test-vals","test-vals",(563777481)),null,new cljs.core.Keyword(null,"jmp-blocks","jmp-blocks",(339606241)),null,new cljs.core.Keyword(null,"default-block","default-block",(841911023)),null], null), null),k__22653__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__22652__auto____$1),self__.__meta),k__22653__auto__);
} else {
return (new cljs.core.async.impl.ioc_macros_runtime.Case(self__.val_id,self__.test_vals,self__.jmp_blocks,self__.default_block,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__22653__auto__)),null));
}
});

cljs.core.async.impl.ioc_macros_runtime.Case.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__22650__auto__,k__22651__auto__,G__271){
var self__ = this;
var this__22650__auto____$1 = this;
var pred__277 = cljs.core.keyword_identical_QMARK_;
var expr__278 = k__22651__auto__;
if(cljs.core.truth_(pred__277.call(null,new cljs.core.Keyword(null,"val-id","val-id",(-1846677573)),expr__278))){
return (new cljs.core.async.impl.ioc_macros_runtime.Case(G__271,self__.test_vals,self__.jmp_blocks,self__.default_block,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__277.call(null,new cljs.core.Keyword(null,"test-vals","test-vals",(563777481)),expr__278))){
return (new cljs.core.async.impl.ioc_macros_runtime.Case(self__.val_id,G__271,self__.jmp_blocks,self__.default_block,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__277.call(null,new cljs.core.Keyword(null,"jmp-blocks","jmp-blocks",(339606241)),expr__278))){
return (new cljs.core.async.impl.ioc_macros_runtime.Case(self__.val_id,self__.test_vals,G__271,self__.default_block,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__277.call(null,new cljs.core.Keyword(null,"default-block","default-block",(841911023)),expr__278))){
return (new cljs.core.async.impl.ioc_macros_runtime.Case(self__.val_id,self__.test_vals,self__.jmp_blocks,G__271,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.core.async.impl.ioc_macros_runtime.Case(self__.val_id,self__.test_vals,self__.jmp_blocks,self__.default_block,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__22651__auto__,G__271),null));
}
}
}
}
});

cljs.core.async.impl.ioc_macros_runtime.Case.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__22655__auto__){
var self__ = this;
var this__22655__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"val-id","val-id",(-1846677573)),self__.val_id],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"test-vals","test-vals",(563777481)),self__.test_vals],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"jmp-blocks","jmp-blocks",(339606241)),self__.jmp_blocks],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"default-block","default-block",(841911023)),self__.default_block],null))], null),self__.__extmap));
});

cljs.core.async.impl.ioc_macros_runtime.Case.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__22642__auto__,G__271){
var self__ = this;
var this__22642__auto____$1 = this;
return (new cljs.core.async.impl.ioc_macros_runtime.Case(self__.val_id,self__.test_vals,self__.jmp_blocks,self__.default_block,G__271,self__.__extmap,self__.__hash));
});

cljs.core.async.impl.ioc_macros_runtime.Case.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__22648__auto__,entry__22649__auto__){
var self__ = this;
var this__22648__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__22649__auto__)){
return this__22648__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__22649__auto__,(0)),cljs.core._nth.call(null,entry__22649__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__22648__auto____$1,entry__22649__auto__);
}
});

cljs.core.async.impl.ioc_macros_runtime.Case.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"val-id","val-id",(-206146046),null),new cljs.core.Symbol(null,"test-vals","test-vals",(-2090658288),null),new cljs.core.Symbol(null,"jmp-blocks","jmp-blocks",(1980137768),null),new cljs.core.Symbol(null,"default-block","default-block",(-1812524746),null)], null);
});

cljs.core.async.impl.ioc_macros_runtime.Case.cljs$lang$type = true;

cljs.core.async.impl.ioc_macros_runtime.Case.cljs$lang$ctorPrSeq = (function (this__22665__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"cljs.core.async.impl.ioc-macros-runtime/Case");
});

cljs.core.async.impl.ioc_macros_runtime.Case.cljs$lang$ctorPrWriter = (function (this__22665__auto__,writer__22666__auto__){
return cljs.core._write.call(null,writer__22666__auto__,"cljs.core.async.impl.ioc-macros-runtime/Case");
});

cljs.core.async.impl.ioc_macros_runtime.__GT_Case = (function cljs$core$async$impl$ioc_macros_runtime$__GT_Case(val_id,test_vals,jmp_blocks,default_block){
return (new cljs.core.async.impl.ioc_macros_runtime.Case(val_id,test_vals,jmp_blocks,default_block,null,null,null));
});

cljs.core.async.impl.ioc_macros_runtime.map__GT_Case = (function cljs$core$async$impl$ioc_macros_runtime$map__GT_Case(G__275){
return (new cljs.core.async.impl.ioc_macros_runtime.Case(new cljs.core.Keyword(null,"val-id","val-id",(-1846677573)).cljs$core$IFn$_invoke$arity$1(G__275),new cljs.core.Keyword(null,"test-vals","test-vals",(563777481)).cljs$core$IFn$_invoke$arity$1(G__275),new cljs.core.Keyword(null,"jmp-blocks","jmp-blocks",(339606241)).cljs$core$IFn$_invoke$arity$1(G__275),new cljs.core.Keyword(null,"default-block","default-block",(841911023)).cljs$core$IFn$_invoke$arity$1(G__275),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__275,new cljs.core.Keyword(null,"val-id","val-id",(-1846677573)),new cljs.core.Keyword(null,"test-vals","test-vals",(563777481)),new cljs.core.Keyword(null,"jmp-blocks","jmp-blocks",(339606241)),new cljs.core.Keyword(null,"default-block","default-block",(841911023)))),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.async.impl.ioc_macros_runtime.IEmittableInstruction}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.async.impl.ioc_macros_runtime.IInstruction}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.core.async.impl.ioc_macros_runtime.XFn = (function (fn_expr,local_names,local_refs,__meta,__extmap,__hash){
this.fn_expr = fn_expr;
this.local_names = local_names;
this.local_refs = local_refs;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = -2065299702;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.core.async.impl.ioc_macros_runtime.XFn.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__22643__auto__,k__22644__auto__){
var self__ = this;
var this__22643__auto____$1 = this;
return this__22643__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__22644__auto__,null);
});

cljs.core.async.impl.ioc_macros_runtime.XFn.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__22645__auto__,k282,else__22646__auto__){
var self__ = this;
var this__22645__auto____$1 = this;
var G__286 = k282;
var G__286__$1 = (((G__286 instanceof cljs.core.Keyword))?G__286.fqn:null);
switch (G__286__$1) {
case "fn-expr":
return self__.fn_expr;

break;
case "local-names":
return self__.local_names;

break;
case "local-refs":
return self__.local_refs;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k282,else__22646__auto__);

}
});

cljs.core.async.impl.ioc_macros_runtime.XFn.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__22657__auto__,writer__22658__auto__,opts__22659__auto__){
var self__ = this;
var this__22657__auto____$1 = this;
var pr_pair__22660__auto__ = ((function (this__22657__auto____$1){
return (function (keyval__22661__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__22658__auto__,cljs.core.pr_writer,""," ","",opts__22659__auto__,keyval__22661__auto__);
});})(this__22657__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__22658__auto__,pr_pair__22660__auto__,"#cljs.core.async.impl.ioc-macros-runtime.XFn{",", ","}",opts__22659__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn-expr","fn-expr",(-933027985)),self__.fn_expr],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"local-names","local-names",(-1002214200)),self__.local_names],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"local-refs","local-refs",(1693858072)),self__.local_refs],null))], null),self__.__extmap));
});

cljs.core.async.impl.ioc_macros_runtime.XFn.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__281){
var self__ = this;
var G__281__$1 = this;
return (new cljs.core.RecordIter((0),G__281__$1,(3),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn-expr","fn-expr",(-933027985)),new cljs.core.Keyword(null,"local-names","local-names",(-1002214200)),new cljs.core.Keyword(null,"local-refs","local-refs",(1693858072))], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

cljs.core.async.impl.ioc_macros_runtime.XFn.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__22641__auto__){
var self__ = this;
var this__22641__auto____$1 = this;
return self__.__meta;
});

cljs.core.async.impl.ioc_macros_runtime.XFn.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__22638__auto__){
var self__ = this;
var this__22638__auto____$1 = this;
return (new cljs.core.async.impl.ioc_macros_runtime.XFn(self__.fn_expr,self__.local_names,self__.local_refs,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.core.async.impl.ioc_macros_runtime.XFn.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__22647__auto__){
var self__ = this;
var this__22647__auto____$1 = this;
return ((3) + cljs.core.count.call(null,self__.__extmap));
});

cljs.core.async.impl.ioc_macros_runtime.XFn.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__22639__auto__){
var self__ = this;
var this__22639__auto____$1 = this;
var h__22078__auto__ = self__.__hash;
if(!((h__22078__auto__ == null))){
return h__22078__auto__;
} else {
var h__22078__auto____$1 = ((function (h__22078__auto__,this__22639__auto____$1){
return (function (coll__22640__auto__){
return ((742459717) ^ cljs.core.hash_unordered_coll.call(null,coll__22640__auto__));
});})(h__22078__auto__,this__22639__auto____$1))
.call(null,this__22639__auto____$1);
self__.__hash = h__22078__auto____$1;

return h__22078__auto____$1;
}
});

cljs.core.async.impl.ioc_macros_runtime.XFn.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this283,other284){
var self__ = this;
var this283__$1 = this;
return (!((other284 == null))) && ((this283__$1.constructor === other284.constructor)) && (cljs.core._EQ_.call(null,this283__$1.fn_expr,other284.fn_expr)) && (cljs.core._EQ_.call(null,this283__$1.local_names,other284.local_names)) && (cljs.core._EQ_.call(null,this283__$1.local_refs,other284.local_refs)) && (cljs.core._EQ_.call(null,this283__$1.__extmap,other284.__extmap));
});

cljs.core.async.impl.ioc_macros_runtime.XFn.prototype.cljs$core$async$impl$ioc_macros_runtime$IEmittableInstruction$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.impl.ioc_macros_runtime.XFn.prototype.cljs$core$async$impl$ioc_macros_runtime$IEmittableInstruction$emit_instruction$arity$2 = (function (this$,state_sym){
var self__ = this;
var this$__$1 = this;
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(function (){var x__22880__auto__ = new cljs.core.Keyword(null,"id","id",(-1388402092)).cljs$core$IFn$_invoke$arity$1(this$__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22880__auto__);
})(),(function (){var x__22880__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null)),(function (){var x__22880__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core.interleave.call(null,self__.local_names,self__.local_refs))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22880__auto__);
})(),self__.fn_expr));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22880__auto__);
})())));
});

cljs.core.async.impl.ioc_macros_runtime.XFn.prototype.cljs$core$async$impl$ioc_macros_runtime$IInstruction$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.impl.ioc_macros_runtime.XFn.prototype.cljs$core$async$impl$ioc_macros_runtime$IInstruction$reads_from$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.local_refs;
});

cljs.core.async.impl.ioc_macros_runtime.XFn.prototype.cljs$core$async$impl$ioc_macros_runtime$IInstruction$writes_to$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",(-1388402092)).cljs$core$IFn$_invoke$arity$1(this$__$1)], null);
});

cljs.core.async.impl.ioc_macros_runtime.XFn.prototype.cljs$core$async$impl$ioc_macros_runtime$IInstruction$block_references$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.PersistentVector.EMPTY;
});

cljs.core.async.impl.ioc_macros_runtime.XFn.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__22652__auto__,k__22653__auto__){
var self__ = this;
var this__22652__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fn-expr","fn-expr",(-933027985)),null,new cljs.core.Keyword(null,"local-names","local-names",(-1002214200)),null,new cljs.core.Keyword(null,"local-refs","local-refs",(1693858072)),null], null), null),k__22653__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__22652__auto____$1),self__.__meta),k__22653__auto__);
} else {
return (new cljs.core.async.impl.ioc_macros_runtime.XFn(self__.fn_expr,self__.local_names,self__.local_refs,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__22653__auto__)),null));
}
});

cljs.core.async.impl.ioc_macros_runtime.XFn.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__22650__auto__,k__22651__auto__,G__281){
var self__ = this;
var this__22650__auto____$1 = this;
var pred__287 = cljs.core.keyword_identical_QMARK_;
var expr__288 = k__22651__auto__;
if(cljs.core.truth_(pred__287.call(null,new cljs.core.Keyword(null,"fn-expr","fn-expr",(-933027985)),expr__288))){
return (new cljs.core.async.impl.ioc_macros_runtime.XFn(G__281,self__.local_names,self__.local_refs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__287.call(null,new cljs.core.Keyword(null,"local-names","local-names",(-1002214200)),expr__288))){
return (new cljs.core.async.impl.ioc_macros_runtime.XFn(self__.fn_expr,G__281,self__.local_refs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__287.call(null,new cljs.core.Keyword(null,"local-refs","local-refs",(1693858072)),expr__288))){
return (new cljs.core.async.impl.ioc_macros_runtime.XFn(self__.fn_expr,self__.local_names,G__281,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.core.async.impl.ioc_macros_runtime.XFn(self__.fn_expr,self__.local_names,self__.local_refs,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__22651__auto__,G__281),null));
}
}
}
});

cljs.core.async.impl.ioc_macros_runtime.XFn.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__22655__auto__){
var self__ = this;
var this__22655__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn-expr","fn-expr",(-933027985)),self__.fn_expr],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"local-names","local-names",(-1002214200)),self__.local_names],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"local-refs","local-refs",(1693858072)),self__.local_refs],null))], null),self__.__extmap));
});

cljs.core.async.impl.ioc_macros_runtime.XFn.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__22642__auto__,G__281){
var self__ = this;
var this__22642__auto____$1 = this;
return (new cljs.core.async.impl.ioc_macros_runtime.XFn(self__.fn_expr,self__.local_names,self__.local_refs,G__281,self__.__extmap,self__.__hash));
});

cljs.core.async.impl.ioc_macros_runtime.XFn.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__22648__auto__,entry__22649__auto__){
var self__ = this;
var this__22648__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__22649__auto__)){
return this__22648__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__22649__auto__,(0)),cljs.core._nth.call(null,entry__22649__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__22648__auto____$1,entry__22649__auto__);
}
});

cljs.core.async.impl.ioc_macros_runtime.XFn.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn-expr","fn-expr",(707503542),null),new cljs.core.Symbol(null,"local-names","local-names",(638317327),null),new cljs.core.Symbol(null,"local-refs","local-refs",(-960577697),null)], null);
});

cljs.core.async.impl.ioc_macros_runtime.XFn.cljs$lang$type = true;

cljs.core.async.impl.ioc_macros_runtime.XFn.cljs$lang$ctorPrSeq = (function (this__22665__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"cljs.core.async.impl.ioc-macros-runtime/XFn");
});

cljs.core.async.impl.ioc_macros_runtime.XFn.cljs$lang$ctorPrWriter = (function (this__22665__auto__,writer__22666__auto__){
return cljs.core._write.call(null,writer__22666__auto__,"cljs.core.async.impl.ioc-macros-runtime/XFn");
});

cljs.core.async.impl.ioc_macros_runtime.__GT_XFn = (function cljs$core$async$impl$ioc_macros_runtime$__GT_XFn(fn_expr,local_names,local_refs){
return (new cljs.core.async.impl.ioc_macros_runtime.XFn(fn_expr,local_names,local_refs,null,null,null));
});

cljs.core.async.impl.ioc_macros_runtime.map__GT_XFn = (function cljs$core$async$impl$ioc_macros_runtime$map__GT_XFn(G__285){
return (new cljs.core.async.impl.ioc_macros_runtime.XFn(new cljs.core.Keyword(null,"fn-expr","fn-expr",(-933027985)).cljs$core$IFn$_invoke$arity$1(G__285),new cljs.core.Keyword(null,"local-names","local-names",(-1002214200)).cljs$core$IFn$_invoke$arity$1(G__285),new cljs.core.Keyword(null,"local-refs","local-refs",(1693858072)).cljs$core$IFn$_invoke$arity$1(G__285),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__285,new cljs.core.Keyword(null,"fn-expr","fn-expr",(-933027985)),new cljs.core.Keyword(null,"local-names","local-names",(-1002214200)),new cljs.core.Keyword(null,"local-refs","local-refs",(1693858072)))),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.async.impl.ioc_macros_runtime.IEmittableInstruction}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.async.impl.ioc_macros_runtime.IInstruction}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.core.async.impl.ioc_macros_runtime.Dot = (function (target,method,args,__meta,__extmap,__hash){
this.target = target;
this.method = method;
this.args = args;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = -2065299702;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.core.async.impl.ioc_macros_runtime.Dot.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__22643__auto__,k__22644__auto__){
var self__ = this;
var this__22643__auto____$1 = this;
return this__22643__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__22644__auto__,null);
});

cljs.core.async.impl.ioc_macros_runtime.Dot.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__22645__auto__,k292,else__22646__auto__){
var self__ = this;
var this__22645__auto____$1 = this;
var G__296 = k292;
var G__296__$1 = (((G__296 instanceof cljs.core.Keyword))?G__296.fqn:null);
switch (G__296__$1) {
case "target":
return self__.target;

break;
case "method":
return self__.method;

break;
case "args":
return self__.args;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k292,else__22646__auto__);

}
});

cljs.core.async.impl.ioc_macros_runtime.Dot.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__22657__auto__,writer__22658__auto__,opts__22659__auto__){
var self__ = this;
var this__22657__auto____$1 = this;
var pr_pair__22660__auto__ = ((function (this__22657__auto____$1){
return (function (keyval__22661__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__22658__auto__,cljs.core.pr_writer,""," ","",opts__22659__auto__,keyval__22661__auto__);
});})(this__22657__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__22658__auto__,pr_pair__22660__auto__,"#cljs.core.async.impl.ioc-macros-runtime.Dot{",", ","}",opts__22659__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"target","target",(253001721)),self__.target],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"method","method",(55703592)),self__.method],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",(1315556576)),self__.args],null))], null),self__.__extmap));
});

cljs.core.async.impl.ioc_macros_runtime.Dot.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__291){
var self__ = this;
var G__291__$1 = this;
return (new cljs.core.RecordIter((0),G__291__$1,(3),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"target","target",(253001721)),new cljs.core.Keyword(null,"method","method",(55703592)),new cljs.core.Keyword(null,"args","args",(1315556576))], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

cljs.core.async.impl.ioc_macros_runtime.Dot.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__22641__auto__){
var self__ = this;
var this__22641__auto____$1 = this;
return self__.__meta;
});

cljs.core.async.impl.ioc_macros_runtime.Dot.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__22638__auto__){
var self__ = this;
var this__22638__auto____$1 = this;
return (new cljs.core.async.impl.ioc_macros_runtime.Dot(self__.target,self__.method,self__.args,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.core.async.impl.ioc_macros_runtime.Dot.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__22647__auto__){
var self__ = this;
var this__22647__auto____$1 = this;
return ((3) + cljs.core.count.call(null,self__.__extmap));
});

cljs.core.async.impl.ioc_macros_runtime.Dot.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__22639__auto__){
var self__ = this;
var this__22639__auto____$1 = this;
var h__22078__auto__ = self__.__hash;
if(!((h__22078__auto__ == null))){
return h__22078__auto__;
} else {
var h__22078__auto____$1 = ((function (h__22078__auto__,this__22639__auto____$1){
return (function (coll__22640__auto__){
return ((506871501) ^ cljs.core.hash_unordered_coll.call(null,coll__22640__auto__));
});})(h__22078__auto__,this__22639__auto____$1))
.call(null,this__22639__auto____$1);
self__.__hash = h__22078__auto____$1;

return h__22078__auto____$1;
}
});

cljs.core.async.impl.ioc_macros_runtime.Dot.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this293,other294){
var self__ = this;
var this293__$1 = this;
return (!((other294 == null))) && ((this293__$1.constructor === other294.constructor)) && (cljs.core._EQ_.call(null,this293__$1.target,other294.target)) && (cljs.core._EQ_.call(null,this293__$1.method,other294.method)) && (cljs.core._EQ_.call(null,this293__$1.args,other294.args)) && (cljs.core._EQ_.call(null,this293__$1.__extmap,other294.__extmap));
});

cljs.core.async.impl.ioc_macros_runtime.Dot.prototype.cljs$core$async$impl$ioc_macros_runtime$IEmittableInstruction$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.impl.ioc_macros_runtime.Dot.prototype.cljs$core$async$impl$ioc_macros_runtime$IEmittableInstruction$emit_instruction$arity$2 = (function (this$,state_sym){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(goog.string.startsWith(cljs.core.name.call(null,self__.method),"-"))){
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(function (){var x__22880__auto__ = new cljs.core.Keyword(null,"id","id",(-1388402092)).cljs$core$IFn$_invoke$arity$1(this$__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22880__auto__);
})(),(function (){var x__22880__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",(1975675962),null)),(function (){var x__22880__auto__ = self__.target;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22880__auto__);
})(),(function (){var x__22880__auto__ = self__.method;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22880__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22880__auto__);
})())));
} else {
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(function (){var x__22880__auto__ = new cljs.core.Keyword(null,"id","id",(-1388402092)).cljs$core$IFn$_invoke$arity$1(this$__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22880__auto__);
})(),(function (){var x__22880__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",(1975675962),null)),(function (){var x__22880__auto__ = self__.target;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22880__auto__);
})(),(function (){var x__22880__auto__ = cljs.core.cons.call(null,self__.method,self__.args);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22880__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22880__auto__);
})())));
}
});

cljs.core.async.impl.ioc_macros_runtime.Dot.prototype.cljs$core$async$impl$ioc_macros_runtime$IInstruction$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.impl.ioc_macros_runtime.Dot.prototype.cljs$core$async$impl$ioc_macros_runtime$IInstruction$reads_from$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(function (){var x__22880__auto__ = self__.target;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22880__auto__);
})(),(function (){var x__22880__auto__ = self__.method;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22880__auto__);
})(),self__.args)));
});

cljs.core.async.impl.ioc_macros_runtime.Dot.prototype.cljs$core$async$impl$ioc_macros_runtime$IInstruction$writes_to$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",(-1388402092)).cljs$core$IFn$_invoke$arity$1(this$__$1)], null);
});

cljs.core.async.impl.ioc_macros_runtime.Dot.prototype.cljs$core$async$impl$ioc_macros_runtime$IInstruction$block_references$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.PersistentVector.EMPTY;
});

cljs.core.async.impl.ioc_macros_runtime.Dot.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__22652__auto__,k__22653__auto__){
var self__ = this;
var this__22652__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",(253001721)),null,new cljs.core.Keyword(null,"method","method",(55703592)),null,new cljs.core.Keyword(null,"args","args",(1315556576)),null], null), null),k__22653__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__22652__auto____$1),self__.__meta),k__22653__auto__);
} else {
return (new cljs.core.async.impl.ioc_macros_runtime.Dot(self__.target,self__.method,self__.args,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__22653__auto__)),null));
}
});

cljs.core.async.impl.ioc_macros_runtime.Dot.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__22650__auto__,k__22651__auto__,G__291){
var self__ = this;
var this__22650__auto____$1 = this;
var pred__297 = cljs.core.keyword_identical_QMARK_;
var expr__298 = k__22651__auto__;
if(cljs.core.truth_(pred__297.call(null,new cljs.core.Keyword(null,"target","target",(253001721)),expr__298))){
return (new cljs.core.async.impl.ioc_macros_runtime.Dot(G__291,self__.method,self__.args,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__297.call(null,new cljs.core.Keyword(null,"method","method",(55703592)),expr__298))){
return (new cljs.core.async.impl.ioc_macros_runtime.Dot(self__.target,G__291,self__.args,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__297.call(null,new cljs.core.Keyword(null,"args","args",(1315556576)),expr__298))){
return (new cljs.core.async.impl.ioc_macros_runtime.Dot(self__.target,self__.method,G__291,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.core.async.impl.ioc_macros_runtime.Dot(self__.target,self__.method,self__.args,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__22651__auto__,G__291),null));
}
}
}
});

cljs.core.async.impl.ioc_macros_runtime.Dot.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__22655__auto__){
var self__ = this;
var this__22655__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"target","target",(253001721)),self__.target],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"method","method",(55703592)),self__.method],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",(1315556576)),self__.args],null))], null),self__.__extmap));
});

cljs.core.async.impl.ioc_macros_runtime.Dot.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__22642__auto__,G__291){
var self__ = this;
var this__22642__auto____$1 = this;
return (new cljs.core.async.impl.ioc_macros_runtime.Dot(self__.target,self__.method,self__.args,G__291,self__.__extmap,self__.__hash));
});

cljs.core.async.impl.ioc_macros_runtime.Dot.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__22648__auto__,entry__22649__auto__){
var self__ = this;
var this__22648__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__22649__auto__)){
return this__22648__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__22649__auto__,(0)),cljs.core._nth.call(null,entry__22649__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__22648__auto____$1,entry__22649__auto__);
}
});

cljs.core.async.impl.ioc_macros_runtime.Dot.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"target","target",(1893533248),null),new cljs.core.Symbol(null,"method","method",(1696235119),null),new cljs.core.Symbol(null,"args","args",(-1338879193),null)], null);
});

cljs.core.async.impl.ioc_macros_runtime.Dot.cljs$lang$type = true;

cljs.core.async.impl.ioc_macros_runtime.Dot.cljs$lang$ctorPrSeq = (function (this__22665__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"cljs.core.async.impl.ioc-macros-runtime/Dot");
});

cljs.core.async.impl.ioc_macros_runtime.Dot.cljs$lang$ctorPrWriter = (function (this__22665__auto__,writer__22666__auto__){
return cljs.core._write.call(null,writer__22666__auto__,"cljs.core.async.impl.ioc-macros-runtime/Dot");
});

cljs.core.async.impl.ioc_macros_runtime.__GT_Dot = (function cljs$core$async$impl$ioc_macros_runtime$__GT_Dot(target,method,args){
return (new cljs.core.async.impl.ioc_macros_runtime.Dot(target,method,args,null,null,null));
});

cljs.core.async.impl.ioc_macros_runtime.map__GT_Dot = (function cljs$core$async$impl$ioc_macros_runtime$map__GT_Dot(G__295){
return (new cljs.core.async.impl.ioc_macros_runtime.Dot(new cljs.core.Keyword(null,"target","target",(253001721)).cljs$core$IFn$_invoke$arity$1(G__295),new cljs.core.Keyword(null,"method","method",(55703592)).cljs$core$IFn$_invoke$arity$1(G__295),new cljs.core.Keyword(null,"args","args",(1315556576)).cljs$core$IFn$_invoke$arity$1(G__295),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__295,new cljs.core.Keyword(null,"target","target",(253001721)),new cljs.core.Keyword(null,"method","method",(55703592)),new cljs.core.Keyword(null,"args","args",(1315556576)))),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.async.impl.ioc_macros_runtime.ITerminator}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.async.impl.ioc_macros_runtime.IInstruction}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.core.async.impl.ioc_macros_runtime.Jmp = (function (value,block,__meta,__extmap,__hash){
this.value = value;
this.block = block;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = -2065299702;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.core.async.impl.ioc_macros_runtime.Jmp.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__22643__auto__,k__22644__auto__){
var self__ = this;
var this__22643__auto____$1 = this;
return this__22643__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__22644__auto__,null);
});

cljs.core.async.impl.ioc_macros_runtime.Jmp.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__22645__auto__,k302,else__22646__auto__){
var self__ = this;
var this__22645__auto____$1 = this;
var G__306 = k302;
var G__306__$1 = (((G__306 instanceof cljs.core.Keyword))?G__306.fqn:null);
switch (G__306__$1) {
case "value":
return self__.value;

break;
case "block":
return self__.block;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k302,else__22646__auto__);

}
});

cljs.core.async.impl.ioc_macros_runtime.Jmp.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__22657__auto__,writer__22658__auto__,opts__22659__auto__){
var self__ = this;
var this__22657__auto____$1 = this;
var pr_pair__22660__auto__ = ((function (this__22657__auto____$1){
return (function (keyval__22661__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__22658__auto__,cljs.core.pr_writer,""," ","",opts__22659__auto__,keyval__22661__auto__);
});})(this__22657__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__22658__auto__,pr_pair__22660__auto__,"#cljs.core.async.impl.ioc-macros-runtime.Jmp{",", ","}",opts__22659__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",(305978217)),self__.value],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"block","block",(664686210)),self__.block],null))], null),self__.__extmap));
});

cljs.core.async.impl.ioc_macros_runtime.Jmp.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__301){
var self__ = this;
var G__301__$1 = this;
return (new cljs.core.RecordIter((0),G__301__$1,(2),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",(305978217)),new cljs.core.Keyword(null,"block","block",(664686210))], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

cljs.core.async.impl.ioc_macros_runtime.Jmp.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__22641__auto__){
var self__ = this;
var this__22641__auto____$1 = this;
return self__.__meta;
});

cljs.core.async.impl.ioc_macros_runtime.Jmp.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__22638__auto__){
var self__ = this;
var this__22638__auto____$1 = this;
return (new cljs.core.async.impl.ioc_macros_runtime.Jmp(self__.value,self__.block,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.core.async.impl.ioc_macros_runtime.Jmp.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__22647__auto__){
var self__ = this;
var this__22647__auto____$1 = this;
return ((2) + cljs.core.count.call(null,self__.__extmap));
});

cljs.core.async.impl.ioc_macros_runtime.Jmp.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__22639__auto__){
var self__ = this;
var this__22639__auto____$1 = this;
var h__22078__auto__ = self__.__hash;
if(!((h__22078__auto__ == null))){
return h__22078__auto__;
} else {
var h__22078__auto____$1 = ((function (h__22078__auto__,this__22639__auto____$1){
return (function (coll__22640__auto__){
return ((-552576434) ^ cljs.core.hash_unordered_coll.call(null,coll__22640__auto__));
});})(h__22078__auto__,this__22639__auto____$1))
.call(null,this__22639__auto____$1);
self__.__hash = h__22078__auto____$1;

return h__22078__auto____$1;
}
});

cljs.core.async.impl.ioc_macros_runtime.Jmp.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this303,other304){
var self__ = this;
var this303__$1 = this;
return (!((other304 == null))) && ((this303__$1.constructor === other304.constructor)) && (cljs.core._EQ_.call(null,this303__$1.value,other304.value)) && (cljs.core._EQ_.call(null,this303__$1.block,other304.block)) && (cljs.core._EQ_.call(null,this303__$1.__extmap,other304.__extmap));
});

cljs.core.async.impl.ioc_macros_runtime.Jmp.prototype.cljs$core$async$impl$ioc_macros_runtime$ITerminator$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.impl.ioc_macros_runtime.Jmp.prototype.cljs$core$async$impl$ioc_macros_runtime$ITerminator$terminate_block$arity$3 = (function (this$,state_sym,_){
var self__ = this;
var this$__$1 = this;
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",(1686842252),null)),(function (){var x__22880__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core.async.impl.ioc-macros","aset-all!","cljs.core.async.impl.ioc-macros/aset-all!",(2072147987),null)),(function (){var x__22880__auto__ = state_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22880__auto__);
})(),(function (){var x__22880__auto__ = (2);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22880__auto__);
})(),(function (){var x__22880__auto__ = self__.value;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22880__auto__);
})(),(function (){var x__22880__auto__ = (1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22880__auto__);
})(),(function (){var x__22880__auto__ = self__.block;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22880__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22880__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"recur","recur",(-437573268)))));
});

cljs.core.async.impl.ioc_macros_runtime.Jmp.prototype.cljs$core$async$impl$ioc_macros_runtime$IInstruction$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.impl.ioc_macros_runtime.Jmp.prototype.cljs$core$async$impl$ioc_macros_runtime$IInstruction$reads_from$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.value], null);
});

cljs.core.async.impl.ioc_macros_runtime.Jmp.prototype.cljs$core$async$impl$ioc_macros_runtime$IInstruction$writes_to$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.PersistentVector.EMPTY;
});

cljs.core.async.impl.ioc_macros_runtime.Jmp.prototype.cljs$core$async$impl$ioc_macros_runtime$IInstruction$block_references$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.block], null);
});

cljs.core.async.impl.ioc_macros_runtime.Jmp.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__22652__auto__,k__22653__auto__){
var self__ = this;
var this__22652__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",(305978217)),null,new cljs.core.Keyword(null,"block","block",(664686210)),null], null), null),k__22653__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__22652__auto____$1),self__.__meta),k__22653__auto__);
} else {
return (new cljs.core.async.impl.ioc_macros_runtime.Jmp(self__.value,self__.block,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__22653__auto__)),null));
}
});

cljs.core.async.impl.ioc_macros_runtime.Jmp.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__22650__auto__,k__22651__auto__,G__301){
var self__ = this;
var this__22650__auto____$1 = this;
var pred__307 = cljs.core.keyword_identical_QMARK_;
var expr__308 = k__22651__auto__;
if(cljs.core.truth_(pred__307.call(null,new cljs.core.Keyword(null,"value","value",(305978217)),expr__308))){
return (new cljs.core.async.impl.ioc_macros_runtime.Jmp(G__301,self__.block,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__307.call(null,new cljs.core.Keyword(null,"block","block",(664686210)),expr__308))){
return (new cljs.core.async.impl.ioc_macros_runtime.Jmp(self__.value,G__301,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.core.async.impl.ioc_macros_runtime.Jmp(self__.value,self__.block,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__22651__auto__,G__301),null));
}
}
});

cljs.core.async.impl.ioc_macros_runtime.Jmp.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__22655__auto__){
var self__ = this;
var this__22655__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",(305978217)),self__.value],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"block","block",(664686210)),self__.block],null))], null),self__.__extmap));
});

cljs.core.async.impl.ioc_macros_runtime.Jmp.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__22642__auto__,G__301){
var self__ = this;
var this__22642__auto____$1 = this;
return (new cljs.core.async.impl.ioc_macros_runtime.Jmp(self__.value,self__.block,G__301,self__.__extmap,self__.__hash));
});

cljs.core.async.impl.ioc_macros_runtime.Jmp.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__22648__auto__,entry__22649__auto__){
var self__ = this;
var this__22648__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__22649__auto__)){
return this__22648__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__22649__auto__,(0)),cljs.core._nth.call(null,entry__22649__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__22648__auto____$1,entry__22649__auto__);
}
});

cljs.core.async.impl.ioc_macros_runtime.Jmp.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",(1946509744),null),new cljs.core.Symbol(null,"block","block",(-1989749559),null)], null);
});

cljs.core.async.impl.ioc_macros_runtime.Jmp.cljs$lang$type = true;

cljs.core.async.impl.ioc_macros_runtime.Jmp.cljs$lang$ctorPrSeq = (function (this__22665__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"cljs.core.async.impl.ioc-macros-runtime/Jmp");
});

cljs.core.async.impl.ioc_macros_runtime.Jmp.cljs$lang$ctorPrWriter = (function (this__22665__auto__,writer__22666__auto__){
return cljs.core._write.call(null,writer__22666__auto__,"cljs.core.async.impl.ioc-macros-runtime/Jmp");
});

cljs.core.async.impl.ioc_macros_runtime.__GT_Jmp = (function cljs$core$async$impl$ioc_macros_runtime$__GT_Jmp(value,block){
return (new cljs.core.async.impl.ioc_macros_runtime.Jmp(value,block,null,null,null));
});

cljs.core.async.impl.ioc_macros_runtime.map__GT_Jmp = (function cljs$core$async$impl$ioc_macros_runtime$map__GT_Jmp(G__305){
return (new cljs.core.async.impl.ioc_macros_runtime.Jmp(new cljs.core.Keyword(null,"value","value",(305978217)).cljs$core$IFn$_invoke$arity$1(G__305),new cljs.core.Keyword(null,"block","block",(664686210)).cljs$core$IFn$_invoke$arity$1(G__305),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__305,new cljs.core.Keyword(null,"value","value",(305978217)),new cljs.core.Keyword(null,"block","block",(664686210)))),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.async.impl.ioc_macros_runtime.ITerminator}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.async.impl.ioc_macros_runtime.IInstruction}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.core.async.impl.ioc_macros_runtime.Return = (function (value,__meta,__extmap,__hash){
this.value = value;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = -2065299702;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.core.async.impl.ioc_macros_runtime.Return.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__22643__auto__,k__22644__auto__){
var self__ = this;
var this__22643__auto____$1 = this;
return this__22643__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__22644__auto__,null);
});

cljs.core.async.impl.ioc_macros_runtime.Return.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__22645__auto__,k312,else__22646__auto__){
var self__ = this;
var this__22645__auto____$1 = this;
var G__316 = k312;
var G__316__$1 = (((G__316 instanceof cljs.core.Keyword))?G__316.fqn:null);
switch (G__316__$1) {
case "value":
return self__.value;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k312,else__22646__auto__);

}
});

cljs.core.async.impl.ioc_macros_runtime.Return.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__22657__auto__,writer__22658__auto__,opts__22659__auto__){
var self__ = this;
var this__22657__auto____$1 = this;
var pr_pair__22660__auto__ = ((function (this__22657__auto____$1){
return (function (keyval__22661__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__22658__auto__,cljs.core.pr_writer,""," ","",opts__22659__auto__,keyval__22661__auto__);
});})(this__22657__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__22658__auto__,pr_pair__22660__auto__,"#cljs.core.async.impl.ioc-macros-runtime.Return{",", ","}",opts__22659__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",(305978217)),self__.value],null))], null),self__.__extmap));
});

cljs.core.async.impl.ioc_macros_runtime.Return.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__311){
var self__ = this;
var G__311__$1 = this;
return (new cljs.core.RecordIter((0),G__311__$1,(1),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",(305978217))], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

cljs.core.async.impl.ioc_macros_runtime.Return.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__22641__auto__){
var self__ = this;
var this__22641__auto____$1 = this;
return self__.__meta;
});

cljs.core.async.impl.ioc_macros_runtime.Return.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__22638__auto__){
var self__ = this;
var this__22638__auto____$1 = this;
return (new cljs.core.async.impl.ioc_macros_runtime.Return(self__.value,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.core.async.impl.ioc_macros_runtime.Return.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__22647__auto__){
var self__ = this;
var this__22647__auto____$1 = this;
return ((1) + cljs.core.count.call(null,self__.__extmap));
});

cljs.core.async.impl.ioc_macros_runtime.Return.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__22639__auto__){
var self__ = this;
var this__22639__auto____$1 = this;
var h__22078__auto__ = self__.__hash;
if(!((h__22078__auto__ == null))){
return h__22078__auto__;
} else {
var h__22078__auto____$1 = ((function (h__22078__auto__,this__22639__auto____$1){
return (function (coll__22640__auto__){
return ((1160128874) ^ cljs.core.hash_unordered_coll.call(null,coll__22640__auto__));
});})(h__22078__auto__,this__22639__auto____$1))
.call(null,this__22639__auto____$1);
self__.__hash = h__22078__auto____$1;

return h__22078__auto____$1;
}
});

cljs.core.async.impl.ioc_macros_runtime.Return.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this313,other314){
var self__ = this;
var this313__$1 = this;
return (!((other314 == null))) && ((this313__$1.constructor === other314.constructor)) && (cljs.core._EQ_.call(null,this313__$1.value,other314.value)) && (cljs.core._EQ_.call(null,this313__$1.__extmap,other314.__extmap));
});

cljs.core.async.impl.ioc_macros_runtime.Return.prototype.cljs$core$async$impl$ioc_macros_runtime$ITerminator$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.impl.ioc_macros_runtime.Return.prototype.cljs$core$async$impl$ioc_macros_runtime$ITerminator$terminator_code$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.Keyword(null,"Return","Return",(-1300089037));
});

cljs.core.async.impl.ioc_macros_runtime.Return.prototype.cljs$core$async$impl$ioc_macros_runtime$ITerminator$terminate_block$arity$3 = (function (this$,state_sym,custom_terminators){
var self__ = this;
var this$__$1 = this;
var temp__20271__auto__ = cljs.core.get.call(null,custom_terminators,this$__$1.cljs$core$async$impl$ioc_macros_runtime$ITerminator$terminator_code$arity$1(null));
if(cljs.core.truth_(temp__20271__auto__)){
var f = temp__20271__auto__;
return cljs.core.sequence.call(null,cljs.core.concat.call(null,(function (){var x__22880__auto__ = f;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22880__auto__);
})(),(function (){var x__22880__auto__ = state_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22880__auto__);
})(),(function (){var x__22880__auto__ = self__.value;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22880__auto__);
})()));
} else {
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",(1686842252),null)),(function (){var x__22880__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core.async.impl.ioc-macros","aset-all!","cljs.core.async.impl.ioc-macros/aset-all!",(2072147987),null)),(function (){var x__22880__auto__ = state_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22880__auto__);
})(),(function (){var x__22880__auto__ = (2);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22880__auto__);
})(),(function (){var x__22880__auto__ = self__.value;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22880__auto__);
})(),(function (){var x__22880__auto__ = (1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22880__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"finished","finished",(-1018867731)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22880__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null)));
}
});

cljs.core.async.impl.ioc_macros_runtime.Return.prototype.cljs$core$async$impl$ioc_macros_runtime$IInstruction$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.impl.ioc_macros_runtime.Return.prototype.cljs$core$async$impl$ioc_macros_runtime$IInstruction$reads_from$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.value], null);
});

cljs.core.async.impl.ioc_macros_runtime.Return.prototype.cljs$core$async$impl$ioc_macros_runtime$IInstruction$writes_to$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.PersistentVector.EMPTY;
});

cljs.core.async.impl.ioc_macros_runtime.Return.prototype.cljs$core$async$impl$ioc_macros_runtime$IInstruction$block_references$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.PersistentVector.EMPTY;
});

cljs.core.async.impl.ioc_macros_runtime.Return.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__22652__auto__,k__22653__auto__){
var self__ = this;
var this__22652__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",(305978217)),null], null), null),k__22653__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__22652__auto____$1),self__.__meta),k__22653__auto__);
} else {
return (new cljs.core.async.impl.ioc_macros_runtime.Return(self__.value,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__22653__auto__)),null));
}
});

cljs.core.async.impl.ioc_macros_runtime.Return.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__22650__auto__,k__22651__auto__,G__311){
var self__ = this;
var this__22650__auto____$1 = this;
var pred__317 = cljs.core.keyword_identical_QMARK_;
var expr__318 = k__22651__auto__;
if(cljs.core.truth_(pred__317.call(null,new cljs.core.Keyword(null,"value","value",(305978217)),expr__318))){
return (new cljs.core.async.impl.ioc_macros_runtime.Return(G__311,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.core.async.impl.ioc_macros_runtime.Return(self__.value,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__22651__auto__,G__311),null));
}
});

cljs.core.async.impl.ioc_macros_runtime.Return.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__22655__auto__){
var self__ = this;
var this__22655__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",(305978217)),self__.value],null))], null),self__.__extmap));
});

cljs.core.async.impl.ioc_macros_runtime.Return.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__22642__auto__,G__311){
var self__ = this;
var this__22642__auto____$1 = this;
return (new cljs.core.async.impl.ioc_macros_runtime.Return(self__.value,G__311,self__.__extmap,self__.__hash));
});

cljs.core.async.impl.ioc_macros_runtime.Return.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__22648__auto__,entry__22649__auto__){
var self__ = this;
var this__22648__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__22649__auto__)){
return this__22648__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__22649__auto__,(0)),cljs.core._nth.call(null,entry__22649__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__22648__auto____$1,entry__22649__auto__);
}
});

cljs.core.async.impl.ioc_macros_runtime.Return.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",(1946509744),null)], null);
});

cljs.core.async.impl.ioc_macros_runtime.Return.cljs$lang$type = true;

cljs.core.async.impl.ioc_macros_runtime.Return.cljs$lang$ctorPrSeq = (function (this__22665__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"cljs.core.async.impl.ioc-macros-runtime/Return");
});

cljs.core.async.impl.ioc_macros_runtime.Return.cljs$lang$ctorPrWriter = (function (this__22665__auto__,writer__22666__auto__){
return cljs.core._write.call(null,writer__22666__auto__,"cljs.core.async.impl.ioc-macros-runtime/Return");
});

cljs.core.async.impl.ioc_macros_runtime.__GT_Return = (function cljs$core$async$impl$ioc_macros_runtime$__GT_Return(value){
return (new cljs.core.async.impl.ioc_macros_runtime.Return(value,null,null,null));
});

cljs.core.async.impl.ioc_macros_runtime.map__GT_Return = (function cljs$core$async$impl$ioc_macros_runtime$map__GT_Return(G__315){
return (new cljs.core.async.impl.ioc_macros_runtime.Return(new cljs.core.Keyword(null,"value","value",(305978217)).cljs$core$IFn$_invoke$arity$1(G__315),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__315,new cljs.core.Keyword(null,"value","value",(305978217)))),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.async.impl.ioc_macros_runtime.IEmittableInstruction}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.async.impl.ioc_macros_runtime.IInstruction}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.core.async.impl.ioc_macros_runtime.Set_BANG_ = (function (field,object,val,__meta,__extmap,__hash){
this.field = field;
this.object = object;
this.val = val;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = -2065299702;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.core.async.impl.ioc_macros_runtime.Set_BANG_.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__22643__auto__,k__22644__auto__){
var self__ = this;
var this__22643__auto____$1 = this;
return this__22643__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__22644__auto__,null);
});

cljs.core.async.impl.ioc_macros_runtime.Set_BANG_.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__22645__auto__,k322,else__22646__auto__){
var self__ = this;
var this__22645__auto____$1 = this;
var G__326 = k322;
var G__326__$1 = (((G__326 instanceof cljs.core.Keyword))?G__326.fqn:null);
switch (G__326__$1) {
case "field":
return self__.field;

break;
case "object":
return self__.object;

break;
case "val":
return self__.val;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k322,else__22646__auto__);

}
});

cljs.core.async.impl.ioc_macros_runtime.Set_BANG_.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__22657__auto__,writer__22658__auto__,opts__22659__auto__){
var self__ = this;
var this__22657__auto____$1 = this;
var pr_pair__22660__auto__ = ((function (this__22657__auto____$1){
return (function (keyval__22661__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__22658__auto__,cljs.core.pr_writer,""," ","",opts__22659__auto__,keyval__22661__auto__);
});})(this__22657__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__22658__auto__,pr_pair__22660__auto__,"#cljs.core.async.impl.ioc-macros-runtime.Set!{",", ","}",opts__22659__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"field","field",(-1302436500)),self__.field],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"object","object",(1474613949)),self__.object],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"val","val",(128701612)),self__.val],null))], null),self__.__extmap));
});

cljs.core.async.impl.ioc_macros_runtime.Set_BANG_.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__321){
var self__ = this;
var G__321__$1 = this;
return (new cljs.core.RecordIter((0),G__321__$1,(3),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"field","field",(-1302436500)),new cljs.core.Keyword(null,"object","object",(1474613949)),new cljs.core.Keyword(null,"val","val",(128701612))], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

cljs.core.async.impl.ioc_macros_runtime.Set_BANG_.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__22641__auto__){
var self__ = this;
var this__22641__auto____$1 = this;
return self__.__meta;
});

cljs.core.async.impl.ioc_macros_runtime.Set_BANG_.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__22638__auto__){
var self__ = this;
var this__22638__auto____$1 = this;
return (new cljs.core.async.impl.ioc_macros_runtime.Set_BANG_(self__.field,self__.object,self__.val,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.core.async.impl.ioc_macros_runtime.Set_BANG_.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__22647__auto__){
var self__ = this;
var this__22647__auto____$1 = this;
return ((3) + cljs.core.count.call(null,self__.__extmap));
});

cljs.core.async.impl.ioc_macros_runtime.Set_BANG_.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__22639__auto__){
var self__ = this;
var this__22639__auto____$1 = this;
var h__22078__auto__ = self__.__hash;
if(!((h__22078__auto__ == null))){
return h__22078__auto__;
} else {
var h__22078__auto____$1 = ((function (h__22078__auto__,this__22639__auto____$1){
return (function (coll__22640__auto__){
return ((262631953) ^ cljs.core.hash_unordered_coll.call(null,coll__22640__auto__));
});})(h__22078__auto__,this__22639__auto____$1))
.call(null,this__22639__auto____$1);
self__.__hash = h__22078__auto____$1;

return h__22078__auto____$1;
}
});

cljs.core.async.impl.ioc_macros_runtime.Set_BANG_.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this323,other324){
var self__ = this;
var this323__$1 = this;
return (!((other324 == null))) && ((this323__$1.constructor === other324.constructor)) && (cljs.core._EQ_.call(null,this323__$1.field,other324.field)) && (cljs.core._EQ_.call(null,this323__$1.object,other324.object)) && (cljs.core._EQ_.call(null,this323__$1.val,other324.val)) && (cljs.core._EQ_.call(null,this323__$1.__extmap,other324.__extmap));
});

cljs.core.async.impl.ioc_macros_runtime.Set_BANG_.prototype.cljs$core$async$impl$ioc_macros_runtime$IEmittableInstruction$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.impl.ioc_macros_runtime.Set_BANG_.prototype.cljs$core$async$impl$ioc_macros_runtime$IEmittableInstruction$emit_instruction$arity$2 = (function (this$,state_sym){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(self__.field)){
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(function (){var x__22880__auto__ = new cljs.core.Keyword(null,"id","id",(-1388402092)).cljs$core$IFn$_invoke$arity$1(this$__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22880__auto__);
})(),(function (){var x__22880__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",(250714521),null)),(function (){var x__22880__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,(function (){var x__22880__auto__ = self__.field;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22880__auto__);
})(),(function (){var x__22880__auto__ = self__.object;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22880__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22880__auto__);
})(),(function (){var x__22880__auto__ = self__.val;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22880__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22880__auto__);
})())));
} else {
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(function (){var x__22880__auto__ = new cljs.core.Keyword(null,"id","id",(-1388402092)).cljs$core$IFn$_invoke$arity$1(this$__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22880__auto__);
})(),(function (){var x__22880__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",(250714521),null)),(function (){var x__22880__auto__ = self__.object;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22880__auto__);
})(),(function (){var x__22880__auto__ = self__.val;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22880__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22880__auto__);
})())));
}
});

cljs.core.async.impl.ioc_macros_runtime.Set_BANG_.prototype.cljs$core$async$impl$ioc_macros_runtime$IInstruction$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.impl.ioc_macros_runtime.Set_BANG_.prototype.cljs$core$async$impl$ioc_macros_runtime$IInstruction$reads_from$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.object,self__.val], null);
});

cljs.core.async.impl.ioc_macros_runtime.Set_BANG_.prototype.cljs$core$async$impl$ioc_macros_runtime$IInstruction$writes_to$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",(-1388402092)).cljs$core$IFn$_invoke$arity$1(this$__$1)], null);
});

cljs.core.async.impl.ioc_macros_runtime.Set_BANG_.prototype.cljs$core$async$impl$ioc_macros_runtime$IInstruction$block_references$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.PersistentVector.EMPTY;
});

cljs.core.async.impl.ioc_macros_runtime.Set_BANG_.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__22652__auto__,k__22653__auto__){
var self__ = this;
var this__22652__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"field","field",(-1302436500)),null,new cljs.core.Keyword(null,"object","object",(1474613949)),null,new cljs.core.Keyword(null,"val","val",(128701612)),null], null), null),k__22653__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__22652__auto____$1),self__.__meta),k__22653__auto__);
} else {
return (new cljs.core.async.impl.ioc_macros_runtime.Set_BANG_(self__.field,self__.object,self__.val,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__22653__auto__)),null));
}
});

cljs.core.async.impl.ioc_macros_runtime.Set_BANG_.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__22650__auto__,k__22651__auto__,G__321){
var self__ = this;
var this__22650__auto____$1 = this;
var pred__327 = cljs.core.keyword_identical_QMARK_;
var expr__328 = k__22651__auto__;
if(cljs.core.truth_(pred__327.call(null,new cljs.core.Keyword(null,"field","field",(-1302436500)),expr__328))){
return (new cljs.core.async.impl.ioc_macros_runtime.Set_BANG_(G__321,self__.object,self__.val,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__327.call(null,new cljs.core.Keyword(null,"object","object",(1474613949)),expr__328))){
return (new cljs.core.async.impl.ioc_macros_runtime.Set_BANG_(self__.field,G__321,self__.val,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__327.call(null,new cljs.core.Keyword(null,"val","val",(128701612)),expr__328))){
return (new cljs.core.async.impl.ioc_macros_runtime.Set_BANG_(self__.field,self__.object,G__321,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.core.async.impl.ioc_macros_runtime.Set_BANG_(self__.field,self__.object,self__.val,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__22651__auto__,G__321),null));
}
}
}
});

cljs.core.async.impl.ioc_macros_runtime.Set_BANG_.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__22655__auto__){
var self__ = this;
var this__22655__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"field","field",(-1302436500)),self__.field],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"object","object",(1474613949)),self__.object],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"val","val",(128701612)),self__.val],null))], null),self__.__extmap));
});

cljs.core.async.impl.ioc_macros_runtime.Set_BANG_.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__22642__auto__,G__321){
var self__ = this;
var this__22642__auto____$1 = this;
return (new cljs.core.async.impl.ioc_macros_runtime.Set_BANG_(self__.field,self__.object,self__.val,G__321,self__.__extmap,self__.__hash));
});

cljs.core.async.impl.ioc_macros_runtime.Set_BANG_.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__22648__auto__,entry__22649__auto__){
var self__ = this;
var this__22648__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__22649__auto__)){
return this__22648__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__22649__auto__,(0)),cljs.core._nth.call(null,entry__22649__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__22648__auto____$1,entry__22649__auto__);
}
});

cljs.core.async.impl.ioc_macros_runtime.Set_BANG_.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"field","field",(338095027),null),new cljs.core.Symbol(null,"object","object",(-1179821820),null),new cljs.core.Symbol(null,"val","val",(1769233139),null)], null);
});

cljs.core.async.impl.ioc_macros_runtime.Set_BANG_.cljs$lang$type = true;

cljs.core.async.impl.ioc_macros_runtime.Set_BANG_.cljs$lang$ctorPrSeq = (function (this__22665__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"cljs.core.async.impl.ioc-macros-runtime/Set!");
});

cljs.core.async.impl.ioc_macros_runtime.Set_BANG_.cljs$lang$ctorPrWriter = (function (this__22665__auto__,writer__22666__auto__){
return cljs.core._write.call(null,writer__22666__auto__,"cljs.core.async.impl.ioc-macros-runtime/Set!");
});

cljs.core.async.impl.ioc_macros_runtime.__GT_Set_BANG_ = (function cljs$core$async$impl$ioc_macros_runtime$__GT_Set_BANG_(field,object,val){
return (new cljs.core.async.impl.ioc_macros_runtime.Set_BANG_(field,object,val,null,null,null));
});

cljs.core.async.impl.ioc_macros_runtime.map__GT_Set_BANG_ = (function cljs$core$async$impl$ioc_macros_runtime$map__GT_Set_BANG_(G__325){
return (new cljs.core.async.impl.ioc_macros_runtime.Set_BANG_(new cljs.core.Keyword(null,"field","field",(-1302436500)).cljs$core$IFn$_invoke$arity$1(G__325),new cljs.core.Keyword(null,"object","object",(1474613949)).cljs$core$IFn$_invoke$arity$1(G__325),new cljs.core.Keyword(null,"val","val",(128701612)).cljs$core$IFn$_invoke$arity$1(G__325),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__325,new cljs.core.Keyword(null,"field","field",(-1302436500)),new cljs.core.Keyword(null,"object","object",(1474613949)),new cljs.core.Keyword(null,"val","val",(128701612)))),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.async.impl.ioc_macros_runtime.ITerminator}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.async.impl.ioc_macros_runtime.IInstruction}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.core.async.impl.ioc_macros_runtime.CondBr = (function (test,then_block,else_block,__meta,__extmap,__hash){
this.test = test;
this.then_block = then_block;
this.else_block = else_block;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = -2065299702;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.core.async.impl.ioc_macros_runtime.CondBr.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__22643__auto__,k__22644__auto__){
var self__ = this;
var this__22643__auto____$1 = this;
return this__22643__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__22644__auto__,null);
});

cljs.core.async.impl.ioc_macros_runtime.CondBr.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__22645__auto__,k332,else__22646__auto__){
var self__ = this;
var this__22645__auto____$1 = this;
var G__336 = k332;
var G__336__$1 = (((G__336 instanceof cljs.core.Keyword))?G__336.fqn:null);
switch (G__336__$1) {
case "test":
return self__.test;

break;
case "then-block":
return self__.then_block;

break;
case "else-block":
return self__.else_block;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k332,else__22646__auto__);

}
});

cljs.core.async.impl.ioc_macros_runtime.CondBr.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__22657__auto__,writer__22658__auto__,opts__22659__auto__){
var self__ = this;
var this__22657__auto____$1 = this;
var pr_pair__22660__auto__ = ((function (this__22657__auto____$1){
return (function (keyval__22661__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__22658__auto__,cljs.core.pr_writer,""," ","",opts__22659__auto__,keyval__22661__auto__);
});})(this__22657__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__22658__auto__,pr_pair__22660__auto__,"#cljs.core.async.impl.ioc-macros-runtime.CondBr{",", ","}",opts__22659__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"test","test",(577538877)),self__.test],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"then-block","then-block",(1414126772)),self__.then_block],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"else-block","else-block",(620169757)),self__.else_block],null))], null),self__.__extmap));
});

cljs.core.async.impl.ioc_macros_runtime.CondBr.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__331){
var self__ = this;
var G__331__$1 = this;
return (new cljs.core.RecordIter((0),G__331__$1,(3),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"test","test",(577538877)),new cljs.core.Keyword(null,"then-block","then-block",(1414126772)),new cljs.core.Keyword(null,"else-block","else-block",(620169757))], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

cljs.core.async.impl.ioc_macros_runtime.CondBr.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__22641__auto__){
var self__ = this;
var this__22641__auto____$1 = this;
return self__.__meta;
});

cljs.core.async.impl.ioc_macros_runtime.CondBr.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__22638__auto__){
var self__ = this;
var this__22638__auto____$1 = this;
return (new cljs.core.async.impl.ioc_macros_runtime.CondBr(self__.test,self__.then_block,self__.else_block,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.core.async.impl.ioc_macros_runtime.CondBr.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__22647__auto__){
var self__ = this;
var this__22647__auto____$1 = this;
return ((3) + cljs.core.count.call(null,self__.__extmap));
});

cljs.core.async.impl.ioc_macros_runtime.CondBr.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__22639__auto__){
var self__ = this;
var this__22639__auto____$1 = this;
var h__22078__auto__ = self__.__hash;
if(!((h__22078__auto__ == null))){
return h__22078__auto__;
} else {
var h__22078__auto____$1 = ((function (h__22078__auto__,this__22639__auto____$1){
return (function (coll__22640__auto__){
return ((-1323457925) ^ cljs.core.hash_unordered_coll.call(null,coll__22640__auto__));
});})(h__22078__auto__,this__22639__auto____$1))
.call(null,this__22639__auto____$1);
self__.__hash = h__22078__auto____$1;

return h__22078__auto____$1;
}
});

cljs.core.async.impl.ioc_macros_runtime.CondBr.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this333,other334){
var self__ = this;
var this333__$1 = this;
return (!((other334 == null))) && ((this333__$1.constructor === other334.constructor)) && (cljs.core._EQ_.call(null,this333__$1.test,other334.test)) && (cljs.core._EQ_.call(null,this333__$1.then_block,other334.then_block)) && (cljs.core._EQ_.call(null,this333__$1.else_block,other334.else_block)) && (cljs.core._EQ_.call(null,this333__$1.__extmap,other334.__extmap));
});

cljs.core.async.impl.ioc_macros_runtime.CondBr.prototype.cljs$core$async$impl$ioc_macros_runtime$ITerminator$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.impl.ioc_macros_runtime.CondBr.prototype.cljs$core$async$impl$ioc_macros_runtime$ITerminator$terminate_block$arity$3 = (function (this$,state_sym,_){
var self__ = this;
var this$__$1 = this;
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",(1686842252),null)),(function (){var x__22880__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",(1181717262),null)),(function (){var x__22880__auto__ = self__.test;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22880__auto__);
})(),(function (){var x__22880__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core.async.impl.ioc-macros","aset-all!","cljs.core.async.impl.ioc-macros/aset-all!",(2072147987),null)),(function (){var x__22880__auto__ = state_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22880__auto__);
})(),(function (){var x__22880__auto__ = (1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22880__auto__);
})(),(function (){var x__22880__auto__ = self__.then_block;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22880__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22880__auto__);
})(),(function (){var x__22880__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core.async.impl.ioc-macros","aset-all!","cljs.core.async.impl.ioc-macros/aset-all!",(2072147987),null)),(function (){var x__22880__auto__ = state_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22880__auto__);
})(),(function (){var x__22880__auto__ = (1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22880__auto__);
})(),(function (){var x__22880__auto__ = self__.else_block;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22880__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22880__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22880__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"recur","recur",(-437573268)))));
});

cljs.core.async.impl.ioc_macros_runtime.CondBr.prototype.cljs$core$async$impl$ioc_macros_runtime$IInstruction$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.impl.ioc_macros_runtime.CondBr.prototype.cljs$core$async$impl$ioc_macros_runtime$IInstruction$reads_from$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.test], null);
});

cljs.core.async.impl.ioc_macros_runtime.CondBr.prototype.cljs$core$async$impl$ioc_macros_runtime$IInstruction$writes_to$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.PersistentVector.EMPTY;
});

cljs.core.async.impl.ioc_macros_runtime.CondBr.prototype.cljs$core$async$impl$ioc_macros_runtime$IInstruction$block_references$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.then_block,self__.else_block], null);
});

cljs.core.async.impl.ioc_macros_runtime.CondBr.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__22652__auto__,k__22653__auto__){
var self__ = this;
var this__22652__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"test","test",(577538877)),null,new cljs.core.Keyword(null,"then-block","then-block",(1414126772)),null,new cljs.core.Keyword(null,"else-block","else-block",(620169757)),null], null), null),k__22653__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__22652__auto____$1),self__.__meta),k__22653__auto__);
} else {
return (new cljs.core.async.impl.ioc_macros_runtime.CondBr(self__.test,self__.then_block,self__.else_block,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__22653__auto__)),null));
}
});

cljs.core.async.impl.ioc_macros_runtime.CondBr.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__22650__auto__,k__22651__auto__,G__331){
var self__ = this;
var this__22650__auto____$1 = this;
var pred__337 = cljs.core.keyword_identical_QMARK_;
var expr__338 = k__22651__auto__;
if(cljs.core.truth_(pred__337.call(null,new cljs.core.Keyword(null,"test","test",(577538877)),expr__338))){
return (new cljs.core.async.impl.ioc_macros_runtime.CondBr(G__331,self__.then_block,self__.else_block,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__337.call(null,new cljs.core.Keyword(null,"then-block","then-block",(1414126772)),expr__338))){
return (new cljs.core.async.impl.ioc_macros_runtime.CondBr(self__.test,G__331,self__.else_block,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__337.call(null,new cljs.core.Keyword(null,"else-block","else-block",(620169757)),expr__338))){
return (new cljs.core.async.impl.ioc_macros_runtime.CondBr(self__.test,self__.then_block,G__331,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.core.async.impl.ioc_macros_runtime.CondBr(self__.test,self__.then_block,self__.else_block,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__22651__auto__,G__331),null));
}
}
}
});

cljs.core.async.impl.ioc_macros_runtime.CondBr.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__22655__auto__){
var self__ = this;
var this__22655__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"test","test",(577538877)),self__.test],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"then-block","then-block",(1414126772)),self__.then_block],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"else-block","else-block",(620169757)),self__.else_block],null))], null),self__.__extmap));
});

cljs.core.async.impl.ioc_macros_runtime.CondBr.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__22642__auto__,G__331){
var self__ = this;
var this__22642__auto____$1 = this;
return (new cljs.core.async.impl.ioc_macros_runtime.CondBr(self__.test,self__.then_block,self__.else_block,G__331,self__.__extmap,self__.__hash));
});

cljs.core.async.impl.ioc_macros_runtime.CondBr.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__22648__auto__,entry__22649__auto__){
var self__ = this;
var this__22648__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__22649__auto__)){
return this__22648__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__22649__auto__,(0)),cljs.core._nth.call(null,entry__22649__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__22648__auto____$1,entry__22649__auto__);
}
});

cljs.core.async.impl.ioc_macros_runtime.CondBr.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"test","test",(-2076896892),null),new cljs.core.Symbol(null,"then-block","then-block",(-1240308997),null),new cljs.core.Symbol(null,"else-block","else-block",(-2034266012),null)], null);
});

cljs.core.async.impl.ioc_macros_runtime.CondBr.cljs$lang$type = true;

cljs.core.async.impl.ioc_macros_runtime.CondBr.cljs$lang$ctorPrSeq = (function (this__22665__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"cljs.core.async.impl.ioc-macros-runtime/CondBr");
});

cljs.core.async.impl.ioc_macros_runtime.CondBr.cljs$lang$ctorPrWriter = (function (this__22665__auto__,writer__22666__auto__){
return cljs.core._write.call(null,writer__22666__auto__,"cljs.core.async.impl.ioc-macros-runtime/CondBr");
});

cljs.core.async.impl.ioc_macros_runtime.__GT_CondBr = (function cljs$core$async$impl$ioc_macros_runtime$__GT_CondBr(test,then_block,else_block){
return (new cljs.core.async.impl.ioc_macros_runtime.CondBr(test,then_block,else_block,null,null,null));
});

cljs.core.async.impl.ioc_macros_runtime.map__GT_CondBr = (function cljs$core$async$impl$ioc_macros_runtime$map__GT_CondBr(G__335){
return (new cljs.core.async.impl.ioc_macros_runtime.CondBr(new cljs.core.Keyword(null,"test","test",(577538877)).cljs$core$IFn$_invoke$arity$1(G__335),new cljs.core.Keyword(null,"then-block","then-block",(1414126772)).cljs$core$IFn$_invoke$arity$1(G__335),new cljs.core.Keyword(null,"else-block","else-block",(620169757)).cljs$core$IFn$_invoke$arity$1(G__335),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__335,new cljs.core.Keyword(null,"test","test",(577538877)),new cljs.core.Keyword(null,"then-block","then-block",(1414126772)),new cljs.core.Keyword(null,"else-block","else-block",(620169757)))),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.async.impl.ioc_macros_runtime.IEmittableInstruction}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.async.impl.ioc_macros_runtime.IInstruction}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.core.async.impl.ioc_macros_runtime.Try = (function (catch_block,catch_exception,finally_block,continue_block,__meta,__extmap,__hash){
this.catch_block = catch_block;
this.catch_exception = catch_exception;
this.finally_block = finally_block;
this.continue_block = continue_block;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = -2065299702;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.core.async.impl.ioc_macros_runtime.Try.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__22643__auto__,k__22644__auto__){
var self__ = this;
var this__22643__auto____$1 = this;
return this__22643__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__22644__auto__,null);
});

cljs.core.async.impl.ioc_macros_runtime.Try.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__22645__auto__,k342,else__22646__auto__){
var self__ = this;
var this__22645__auto____$1 = this;
var G__346 = k342;
var G__346__$1 = (((G__346 instanceof cljs.core.Keyword))?G__346.fqn:null);
switch (G__346__$1) {
case "catch-block":
return self__.catch_block;

break;
case "catch-exception":
return self__.catch_exception;

break;
case "finally-block":
return self__.finally_block;

break;
case "continue-block":
return self__.continue_block;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k342,else__22646__auto__);

}
});

cljs.core.async.impl.ioc_macros_runtime.Try.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__22657__auto__,writer__22658__auto__,opts__22659__auto__){
var self__ = this;
var this__22657__auto____$1 = this;
var pr_pair__22660__auto__ = ((function (this__22657__auto____$1){
return (function (keyval__22661__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__22658__auto__,cljs.core.pr_writer,""," ","",opts__22659__auto__,keyval__22661__auto__);
});})(this__22657__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__22658__auto__,pr_pair__22660__auto__,"#cljs.core.async.impl.ioc-macros-runtime.Try{",", ","}",opts__22659__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"catch-block","catch-block",(1175212748)),self__.catch_block],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"catch-exception","catch-exception",(-1997306795)),self__.catch_exception],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"finally-block","finally-block",(832982472)),self__.finally_block],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"continue-block","continue-block",(-1852047850)),self__.continue_block],null))], null),self__.__extmap));
});

cljs.core.async.impl.ioc_macros_runtime.Try.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__341){
var self__ = this;
var G__341__$1 = this;
return (new cljs.core.RecordIter((0),G__341__$1,(4),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"catch-block","catch-block",(1175212748)),new cljs.core.Keyword(null,"catch-exception","catch-exception",(-1997306795)),new cljs.core.Keyword(null,"finally-block","finally-block",(832982472)),new cljs.core.Keyword(null,"continue-block","continue-block",(-1852047850))], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

cljs.core.async.impl.ioc_macros_runtime.Try.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__22641__auto__){
var self__ = this;
var this__22641__auto____$1 = this;
return self__.__meta;
});

cljs.core.async.impl.ioc_macros_runtime.Try.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__22638__auto__){
var self__ = this;
var this__22638__auto____$1 = this;
return (new cljs.core.async.impl.ioc_macros_runtime.Try(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.core.async.impl.ioc_macros_runtime.Try.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__22647__auto__){
var self__ = this;
var this__22647__auto____$1 = this;
return ((4) + cljs.core.count.call(null,self__.__extmap));
});

cljs.core.async.impl.ioc_macros_runtime.Try.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__22639__auto__){
var self__ = this;
var this__22639__auto____$1 = this;
var h__22078__auto__ = self__.__hash;
if(!((h__22078__auto__ == null))){
return h__22078__auto__;
} else {
var h__22078__auto____$1 = ((function (h__22078__auto__,this__22639__auto____$1){
return (function (coll__22640__auto__){
return ((301412937) ^ cljs.core.hash_unordered_coll.call(null,coll__22640__auto__));
});})(h__22078__auto__,this__22639__auto____$1))
.call(null,this__22639__auto____$1);
self__.__hash = h__22078__auto____$1;

return h__22078__auto____$1;
}
});

cljs.core.async.impl.ioc_macros_runtime.Try.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this343,other344){
var self__ = this;
var this343__$1 = this;
return (!((other344 == null))) && ((this343__$1.constructor === other344.constructor)) && (cljs.core._EQ_.call(null,this343__$1.catch_block,other344.catch_block)) && (cljs.core._EQ_.call(null,this343__$1.catch_exception,other344.catch_exception)) && (cljs.core._EQ_.call(null,this343__$1.finally_block,other344.finally_block)) && (cljs.core._EQ_.call(null,this343__$1.continue_block,other344.continue_block)) && (cljs.core._EQ_.call(null,this343__$1.__extmap,other344.__extmap));
});

cljs.core.async.impl.ioc_macros_runtime.Try.prototype.cljs$core$async$impl$ioc_macros_runtime$IEmittableInstruction$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.impl.ioc_macros_runtime.Try.prototype.cljs$core$async$impl$ioc_macros_runtime$IEmittableInstruction$emit_instruction$arity$2 = (function (this$,state_sym){
var self__ = this;
var this$__$1 = this;
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"_","_",(-1201019570),null)),(function (){var x__22880__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core.async.impl.ioc-helpers","add-exception-frame","cljs.core.async.impl.ioc-helpers/add-exception-frame",(-1801634010),null)),(function (){var x__22880__auto__ = state_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22880__auto__);
})(),(function (){var x__22880__auto__ = self__.catch_block;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22880__auto__);
})(),(function (){var x__22880__auto__ = self__.catch_exception;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22880__auto__);
})(),(function (){var x__22880__auto__ = self__.finally_block;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22880__auto__);
})(),(function (){var x__22880__auto__ = self__.continue_block;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22880__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22880__auto__);
})())));
});

cljs.core.async.impl.ioc_macros_runtime.Try.prototype.cljs$core$async$impl$ioc_macros_runtime$IInstruction$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.impl.ioc_macros_runtime.Try.prototype.cljs$core$async$impl$ioc_macros_runtime$IInstruction$reads_from$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.PersistentVector.EMPTY;
});

cljs.core.async.impl.ioc_macros_runtime.Try.prototype.cljs$core$async$impl$ioc_macros_runtime$IInstruction$writes_to$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.PersistentVector.EMPTY;
});

cljs.core.async.impl.ioc_macros_runtime.Try.prototype.cljs$core$async$impl$ioc_macros_runtime$IInstruction$block_references$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.catch_block,self__.finally_block,self__.continue_block], null);
});

cljs.core.async.impl.ioc_macros_runtime.Try.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__22652__auto__,k__22653__auto__){
var self__ = this;
var this__22652__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"catch-block","catch-block",(1175212748)),null,new cljs.core.Keyword(null,"catch-exception","catch-exception",(-1997306795)),null,new cljs.core.Keyword(null,"finally-block","finally-block",(832982472)),null,new cljs.core.Keyword(null,"continue-block","continue-block",(-1852047850)),null], null), null),k__22653__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__22652__auto____$1),self__.__meta),k__22653__auto__);
} else {
return (new cljs.core.async.impl.ioc_macros_runtime.Try(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__22653__auto__)),null));
}
});

cljs.core.async.impl.ioc_macros_runtime.Try.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__22650__auto__,k__22651__auto__,G__341){
var self__ = this;
var this__22650__auto____$1 = this;
var pred__347 = cljs.core.keyword_identical_QMARK_;
var expr__348 = k__22651__auto__;
if(cljs.core.truth_(pred__347.call(null,new cljs.core.Keyword(null,"catch-block","catch-block",(1175212748)),expr__348))){
return (new cljs.core.async.impl.ioc_macros_runtime.Try(G__341,self__.catch_exception,self__.finally_block,self__.continue_block,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__347.call(null,new cljs.core.Keyword(null,"catch-exception","catch-exception",(-1997306795)),expr__348))){
return (new cljs.core.async.impl.ioc_macros_runtime.Try(self__.catch_block,G__341,self__.finally_block,self__.continue_block,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__347.call(null,new cljs.core.Keyword(null,"finally-block","finally-block",(832982472)),expr__348))){
return (new cljs.core.async.impl.ioc_macros_runtime.Try(self__.catch_block,self__.catch_exception,G__341,self__.continue_block,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__347.call(null,new cljs.core.Keyword(null,"continue-block","continue-block",(-1852047850)),expr__348))){
return (new cljs.core.async.impl.ioc_macros_runtime.Try(self__.catch_block,self__.catch_exception,self__.finally_block,G__341,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.core.async.impl.ioc_macros_runtime.Try(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__22651__auto__,G__341),null));
}
}
}
}
});

cljs.core.async.impl.ioc_macros_runtime.Try.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__22655__auto__){
var self__ = this;
var this__22655__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"catch-block","catch-block",(1175212748)),self__.catch_block],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"catch-exception","catch-exception",(-1997306795)),self__.catch_exception],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"finally-block","finally-block",(832982472)),self__.finally_block],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"continue-block","continue-block",(-1852047850)),self__.continue_block],null))], null),self__.__extmap));
});

cljs.core.async.impl.ioc_macros_runtime.Try.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__22642__auto__,G__341){
var self__ = this;
var this__22642__auto____$1 = this;
return (new cljs.core.async.impl.ioc_macros_runtime.Try(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,G__341,self__.__extmap,self__.__hash));
});

cljs.core.async.impl.ioc_macros_runtime.Try.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__22648__auto__,entry__22649__auto__){
var self__ = this;
var this__22648__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__22649__auto__)){
return this__22648__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__22649__auto__,(0)),cljs.core._nth.call(null,entry__22649__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__22648__auto____$1,entry__22649__auto__);
}
});

cljs.core.async.impl.ioc_macros_runtime.Try.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"catch-block","catch-block",(-1479223021),null),new cljs.core.Symbol(null,"catch-exception","catch-exception",(-356775268),null),new cljs.core.Symbol(null,"finally-block","finally-block",(-1821453297),null),new cljs.core.Symbol(null,"continue-block","continue-block",(-211516323),null)], null);
});

cljs.core.async.impl.ioc_macros_runtime.Try.cljs$lang$type = true;

cljs.core.async.impl.ioc_macros_runtime.Try.cljs$lang$ctorPrSeq = (function (this__22665__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"cljs.core.async.impl.ioc-macros-runtime/Try");
});

cljs.core.async.impl.ioc_macros_runtime.Try.cljs$lang$ctorPrWriter = (function (this__22665__auto__,writer__22666__auto__){
return cljs.core._write.call(null,writer__22666__auto__,"cljs.core.async.impl.ioc-macros-runtime/Try");
});

cljs.core.async.impl.ioc_macros_runtime.__GT_Try = (function cljs$core$async$impl$ioc_macros_runtime$__GT_Try(catch_block,catch_exception,finally_block,continue_block){
return (new cljs.core.async.impl.ioc_macros_runtime.Try(catch_block,catch_exception,finally_block,continue_block,null,null,null));
});

cljs.core.async.impl.ioc_macros_runtime.map__GT_Try = (function cljs$core$async$impl$ioc_macros_runtime$map__GT_Try(G__345){
return (new cljs.core.async.impl.ioc_macros_runtime.Try(new cljs.core.Keyword(null,"catch-block","catch-block",(1175212748)).cljs$core$IFn$_invoke$arity$1(G__345),new cljs.core.Keyword(null,"catch-exception","catch-exception",(-1997306795)).cljs$core$IFn$_invoke$arity$1(G__345),new cljs.core.Keyword(null,"finally-block","finally-block",(832982472)).cljs$core$IFn$_invoke$arity$1(G__345),new cljs.core.Keyword(null,"continue-block","continue-block",(-1852047850)).cljs$core$IFn$_invoke$arity$1(G__345),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__345,new cljs.core.Keyword(null,"catch-block","catch-block",(1175212748)),new cljs.core.Keyword(null,"catch-exception","catch-exception",(-1997306795)),new cljs.core.Keyword(null,"finally-block","finally-block",(832982472)),new cljs.core.Keyword(null,"continue-block","continue-block",(-1852047850)))),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.async.impl.ioc_macros_runtime.ITerminator}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.async.impl.ioc_macros_runtime.IInstruction}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.core.async.impl.ioc_macros_runtime.ProcessExceptionWithValue = (function (value,__meta,__extmap,__hash){
this.value = value;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = -2065299702;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.core.async.impl.ioc_macros_runtime.ProcessExceptionWithValue.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__22643__auto__,k__22644__auto__){
var self__ = this;
var this__22643__auto____$1 = this;
return this__22643__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__22644__auto__,null);
});

cljs.core.async.impl.ioc_macros_runtime.ProcessExceptionWithValue.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__22645__auto__,k352,else__22646__auto__){
var self__ = this;
var this__22645__auto____$1 = this;
var G__356 = k352;
var G__356__$1 = (((G__356 instanceof cljs.core.Keyword))?G__356.fqn:null);
switch (G__356__$1) {
case "value":
return self__.value;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k352,else__22646__auto__);

}
});

cljs.core.async.impl.ioc_macros_runtime.ProcessExceptionWithValue.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__22657__auto__,writer__22658__auto__,opts__22659__auto__){
var self__ = this;
var this__22657__auto____$1 = this;
var pr_pair__22660__auto__ = ((function (this__22657__auto____$1){
return (function (keyval__22661__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__22658__auto__,cljs.core.pr_writer,""," ","",opts__22659__auto__,keyval__22661__auto__);
});})(this__22657__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__22658__auto__,pr_pair__22660__auto__,"#cljs.core.async.impl.ioc-macros-runtime.ProcessExceptionWithValue{",", ","}",opts__22659__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",(305978217)),self__.value],null))], null),self__.__extmap));
});

cljs.core.async.impl.ioc_macros_runtime.ProcessExceptionWithValue.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__351){
var self__ = this;
var G__351__$1 = this;
return (new cljs.core.RecordIter((0),G__351__$1,(1),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",(305978217))], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

cljs.core.async.impl.ioc_macros_runtime.ProcessExceptionWithValue.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__22641__auto__){
var self__ = this;
var this__22641__auto____$1 = this;
return self__.__meta;
});

cljs.core.async.impl.ioc_macros_runtime.ProcessExceptionWithValue.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__22638__auto__){
var self__ = this;
var this__22638__auto____$1 = this;
return (new cljs.core.async.impl.ioc_macros_runtime.ProcessExceptionWithValue(self__.value,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.core.async.impl.ioc_macros_runtime.ProcessExceptionWithValue.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__22647__auto__){
var self__ = this;
var this__22647__auto____$1 = this;
return ((1) + cljs.core.count.call(null,self__.__extmap));
});

cljs.core.async.impl.ioc_macros_runtime.ProcessExceptionWithValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__22639__auto__){
var self__ = this;
var this__22639__auto____$1 = this;
var h__22078__auto__ = self__.__hash;
if(!((h__22078__auto__ == null))){
return h__22078__auto__;
} else {
var h__22078__auto____$1 = ((function (h__22078__auto__,this__22639__auto____$1){
return (function (coll__22640__auto__){
return ((-2053545349) ^ cljs.core.hash_unordered_coll.call(null,coll__22640__auto__));
});})(h__22078__auto__,this__22639__auto____$1))
.call(null,this__22639__auto____$1);
self__.__hash = h__22078__auto____$1;

return h__22078__auto____$1;
}
});

cljs.core.async.impl.ioc_macros_runtime.ProcessExceptionWithValue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this353,other354){
var self__ = this;
var this353__$1 = this;
return (!((other354 == null))) && ((this353__$1.constructor === other354.constructor)) && (cljs.core._EQ_.call(null,this353__$1.value,other354.value)) && (cljs.core._EQ_.call(null,this353__$1.__extmap,other354.__extmap));
});

cljs.core.async.impl.ioc_macros_runtime.ProcessExceptionWithValue.prototype.cljs$core$async$impl$ioc_macros_runtime$ITerminator$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.impl.ioc_macros_runtime.ProcessExceptionWithValue.prototype.cljs$core$async$impl$ioc_macros_runtime$ITerminator$terminate_block$arity$3 = (function (this$,state_sym,_){
var self__ = this;
var this$__$1 = this;
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",(1686842252),null)),(function (){var x__22880__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core.async.impl.ioc-macros","aset-all!","cljs.core.async.impl.ioc-macros/aset-all!",(2072147987),null)),(function (){var x__22880__auto__ = state_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22880__auto__);
})(),(function (){var x__22880__auto__ = (2);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22880__auto__);
})(),(function (){var x__22880__auto__ = self__.value;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22880__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22880__auto__);
})(),(function (){var x__22880__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core.async.impl.ioc-helpers","process-exception","cljs.core.async.impl.ioc-helpers/process-exception",(699265350),null)),(function (){var x__22880__auto__ = state_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22880__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22880__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"recur","recur",(-437573268)))));
});

cljs.core.async.impl.ioc_macros_runtime.ProcessExceptionWithValue.prototype.cljs$core$async$impl$ioc_macros_runtime$IInstruction$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.impl.ioc_macros_runtime.ProcessExceptionWithValue.prototype.cljs$core$async$impl$ioc_macros_runtime$IInstruction$reads_from$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.value], null);
});

cljs.core.async.impl.ioc_macros_runtime.ProcessExceptionWithValue.prototype.cljs$core$async$impl$ioc_macros_runtime$IInstruction$writes_to$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.PersistentVector.EMPTY;
});

cljs.core.async.impl.ioc_macros_runtime.ProcessExceptionWithValue.prototype.cljs$core$async$impl$ioc_macros_runtime$IInstruction$block_references$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.PersistentVector.EMPTY;
});

cljs.core.async.impl.ioc_macros_runtime.ProcessExceptionWithValue.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__22652__auto__,k__22653__auto__){
var self__ = this;
var this__22652__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",(305978217)),null], null), null),k__22653__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__22652__auto____$1),self__.__meta),k__22653__auto__);
} else {
return (new cljs.core.async.impl.ioc_macros_runtime.ProcessExceptionWithValue(self__.value,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__22653__auto__)),null));
}
});

cljs.core.async.impl.ioc_macros_runtime.ProcessExceptionWithValue.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__22650__auto__,k__22651__auto__,G__351){
var self__ = this;
var this__22650__auto____$1 = this;
var pred__357 = cljs.core.keyword_identical_QMARK_;
var expr__358 = k__22651__auto__;
if(cljs.core.truth_(pred__357.call(null,new cljs.core.Keyword(null,"value","value",(305978217)),expr__358))){
return (new cljs.core.async.impl.ioc_macros_runtime.ProcessExceptionWithValue(G__351,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.core.async.impl.ioc_macros_runtime.ProcessExceptionWithValue(self__.value,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__22651__auto__,G__351),null));
}
});

cljs.core.async.impl.ioc_macros_runtime.ProcessExceptionWithValue.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__22655__auto__){
var self__ = this;
var this__22655__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",(305978217)),self__.value],null))], null),self__.__extmap));
});

cljs.core.async.impl.ioc_macros_runtime.ProcessExceptionWithValue.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__22642__auto__,G__351){
var self__ = this;
var this__22642__auto____$1 = this;
return (new cljs.core.async.impl.ioc_macros_runtime.ProcessExceptionWithValue(self__.value,G__351,self__.__extmap,self__.__hash));
});

cljs.core.async.impl.ioc_macros_runtime.ProcessExceptionWithValue.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__22648__auto__,entry__22649__auto__){
var self__ = this;
var this__22648__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__22649__auto__)){
return this__22648__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__22649__auto__,(0)),cljs.core._nth.call(null,entry__22649__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__22648__auto____$1,entry__22649__auto__);
}
});

cljs.core.async.impl.ioc_macros_runtime.ProcessExceptionWithValue.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",(1946509744),null)], null);
});

cljs.core.async.impl.ioc_macros_runtime.ProcessExceptionWithValue.cljs$lang$type = true;

cljs.core.async.impl.ioc_macros_runtime.ProcessExceptionWithValue.cljs$lang$ctorPrSeq = (function (this__22665__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"cljs.core.async.impl.ioc-macros-runtime/ProcessExceptionWithValue");
});

cljs.core.async.impl.ioc_macros_runtime.ProcessExceptionWithValue.cljs$lang$ctorPrWriter = (function (this__22665__auto__,writer__22666__auto__){
return cljs.core._write.call(null,writer__22666__auto__,"cljs.core.async.impl.ioc-macros-runtime/ProcessExceptionWithValue");
});

cljs.core.async.impl.ioc_macros_runtime.__GT_ProcessExceptionWithValue = (function cljs$core$async$impl$ioc_macros_runtime$__GT_ProcessExceptionWithValue(value){
return (new cljs.core.async.impl.ioc_macros_runtime.ProcessExceptionWithValue(value,null,null,null));
});

cljs.core.async.impl.ioc_macros_runtime.map__GT_ProcessExceptionWithValue = (function cljs$core$async$impl$ioc_macros_runtime$map__GT_ProcessExceptionWithValue(G__355){
return (new cljs.core.async.impl.ioc_macros_runtime.ProcessExceptionWithValue(new cljs.core.Keyword(null,"value","value",(305978217)).cljs$core$IFn$_invoke$arity$1(G__355),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__355,new cljs.core.Keyword(null,"value","value",(305978217)))),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.async.impl.ioc_macros_runtime.ITerminator}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.async.impl.ioc_macros_runtime.IInstruction}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.core.async.impl.ioc_macros_runtime.EndCatchFinally = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = -2065299702;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.core.async.impl.ioc_macros_runtime.EndCatchFinally.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__22643__auto__,k__22644__auto__){
var self__ = this;
var this__22643__auto____$1 = this;
return this__22643__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__22644__auto__,null);
});

cljs.core.async.impl.ioc_macros_runtime.EndCatchFinally.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__22645__auto__,k362,else__22646__auto__){
var self__ = this;
var this__22645__auto____$1 = this;
var G__366 = k362;
switch (G__366) {
default:
return cljs.core.get.call(null,self__.__extmap,k362,else__22646__auto__);

}
});

cljs.core.async.impl.ioc_macros_runtime.EndCatchFinally.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__22657__auto__,writer__22658__auto__,opts__22659__auto__){
var self__ = this;
var this__22657__auto____$1 = this;
var pr_pair__22660__auto__ = ((function (this__22657__auto____$1){
return (function (keyval__22661__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__22658__auto__,cljs.core.pr_writer,""," ","",opts__22659__auto__,keyval__22661__auto__);
});})(this__22657__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__22658__auto__,pr_pair__22660__auto__,"#cljs.core.async.impl.ioc-macros-runtime.EndCatchFinally{",", ","}",opts__22659__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

cljs.core.async.impl.ioc_macros_runtime.EndCatchFinally.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__361){
var self__ = this;
var G__361__$1 = this;
return (new cljs.core.RecordIter((0),G__361__$1,(0),cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

cljs.core.async.impl.ioc_macros_runtime.EndCatchFinally.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__22641__auto__){
var self__ = this;
var this__22641__auto____$1 = this;
return self__.__meta;
});

cljs.core.async.impl.ioc_macros_runtime.EndCatchFinally.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__22638__auto__){
var self__ = this;
var this__22638__auto____$1 = this;
return (new cljs.core.async.impl.ioc_macros_runtime.EndCatchFinally(self__.__meta,self__.__extmap,self__.__hash));
});

cljs.core.async.impl.ioc_macros_runtime.EndCatchFinally.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__22647__auto__){
var self__ = this;
var this__22647__auto____$1 = this;
return ((0) + cljs.core.count.call(null,self__.__extmap));
});

cljs.core.async.impl.ioc_macros_runtime.EndCatchFinally.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__22639__auto__){
var self__ = this;
var this__22639__auto____$1 = this;
var h__22078__auto__ = self__.__hash;
if(!((h__22078__auto__ == null))){
return h__22078__auto__;
} else {
var h__22078__auto____$1 = ((function (h__22078__auto__,this__22639__auto____$1){
return (function (coll__22640__auto__){
return ((468900891) ^ cljs.core.hash_unordered_coll.call(null,coll__22640__auto__));
});})(h__22078__auto__,this__22639__auto____$1))
.call(null,this__22639__auto____$1);
self__.__hash = h__22078__auto____$1;

return h__22078__auto____$1;
}
});

cljs.core.async.impl.ioc_macros_runtime.EndCatchFinally.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this363,other364){
var self__ = this;
var this363__$1 = this;
return (!((other364 == null))) && ((this363__$1.constructor === other364.constructor)) && (cljs.core._EQ_.call(null,this363__$1.__extmap,other364.__extmap));
});

cljs.core.async.impl.ioc_macros_runtime.EndCatchFinally.prototype.cljs$core$async$impl$ioc_macros_runtime$ITerminator$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.impl.ioc_macros_runtime.EndCatchFinally.prototype.cljs$core$async$impl$ioc_macros_runtime$ITerminator$terminate_block$arity$3 = (function (this$,state_sym,_){
var self__ = this;
var this$__$1 = this;
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",(1686842252),null)),(function (){var x__22880__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core.async.impl.ioc-helpers","process-exception","cljs.core.async.impl.ioc-helpers/process-exception",(699265350),null)),(function (){var x__22880__auto__ = state_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22880__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22880__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"recur","recur",(-437573268)))));
});

cljs.core.async.impl.ioc_macros_runtime.EndCatchFinally.prototype.cljs$core$async$impl$ioc_macros_runtime$IInstruction$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.impl.ioc_macros_runtime.EndCatchFinally.prototype.cljs$core$async$impl$ioc_macros_runtime$IInstruction$reads_from$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.PersistentVector.EMPTY;
});

cljs.core.async.impl.ioc_macros_runtime.EndCatchFinally.prototype.cljs$core$async$impl$ioc_macros_runtime$IInstruction$writes_to$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.PersistentVector.EMPTY;
});

cljs.core.async.impl.ioc_macros_runtime.EndCatchFinally.prototype.cljs$core$async$impl$ioc_macros_runtime$IInstruction$block_references$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.PersistentVector.EMPTY;
});

cljs.core.async.impl.ioc_macros_runtime.EndCatchFinally.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__22652__auto__,k__22653__auto__){
var self__ = this;
var this__22652__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__22653__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__22652__auto____$1),self__.__meta),k__22653__auto__);
} else {
return (new cljs.core.async.impl.ioc_macros_runtime.EndCatchFinally(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__22653__auto__)),null));
}
});

cljs.core.async.impl.ioc_macros_runtime.EndCatchFinally.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__22650__auto__,k__22651__auto__,G__361){
var self__ = this;
var this__22650__auto____$1 = this;
var pred__367 = cljs.core.keyword_identical_QMARK_;
var expr__368 = k__22651__auto__;
return (new cljs.core.async.impl.ioc_macros_runtime.EndCatchFinally(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__22651__auto__,G__361),null));
});

cljs.core.async.impl.ioc_macros_runtime.EndCatchFinally.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__22655__auto__){
var self__ = this;
var this__22655__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

cljs.core.async.impl.ioc_macros_runtime.EndCatchFinally.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__22642__auto__,G__361){
var self__ = this;
var this__22642__auto____$1 = this;
return (new cljs.core.async.impl.ioc_macros_runtime.EndCatchFinally(G__361,self__.__extmap,self__.__hash));
});

cljs.core.async.impl.ioc_macros_runtime.EndCatchFinally.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__22648__auto__,entry__22649__auto__){
var self__ = this;
var this__22648__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__22649__auto__)){
return this__22648__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__22649__auto__,(0)),cljs.core._nth.call(null,entry__22649__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__22648__auto____$1,entry__22649__auto__);
}
});

cljs.core.async.impl.ioc_macros_runtime.EndCatchFinally.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cljs.core.async.impl.ioc_macros_runtime.EndCatchFinally.cljs$lang$type = true;

cljs.core.async.impl.ioc_macros_runtime.EndCatchFinally.cljs$lang$ctorPrSeq = (function (this__22665__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"cljs.core.async.impl.ioc-macros-runtime/EndCatchFinally");
});

cljs.core.async.impl.ioc_macros_runtime.EndCatchFinally.cljs$lang$ctorPrWriter = (function (this__22665__auto__,writer__22666__auto__){
return cljs.core._write.call(null,writer__22666__auto__,"cljs.core.async.impl.ioc-macros-runtime/EndCatchFinally");
});

cljs.core.async.impl.ioc_macros_runtime.__GT_EndCatchFinally = (function cljs$core$async$impl$ioc_macros_runtime$__GT_EndCatchFinally(){
return (new cljs.core.async.impl.ioc_macros_runtime.EndCatchFinally(null,null,null));
});

cljs.core.async.impl.ioc_macros_runtime.map__GT_EndCatchFinally = (function cljs$core$async$impl$ioc_macros_runtime$map__GT_EndCatchFinally(G__365){
return (new cljs.core.async.impl.ioc_macros_runtime.EndCatchFinally(null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__365)),null));
});

if(typeof cljs.core.async.impl.ioc_macros_runtime._item_to_ssa !== 'undefined'){
} else {
cljs.core.async.impl.ioc_macros_runtime._item_to_ssa = (function (){var method_table__22980__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__22981__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__22982__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__22983__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__22984__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",(-1053470341)),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.core.async.impl.ioc-macros-runtime","-item-to-ssa"),((function (method_table__22980__auto__,prefer_table__22981__auto__,method_cache__22982__auto__,cached_hierarchy__22983__auto__,hierarchy__22984__auto__){
return (function (x){
if((x instanceof cljs.core.Symbol)){
return new cljs.core.Keyword(null,"symbol","symbol",(-1038572696));
} else {
if(cljs.core.seq_QMARK_.call(null,x)){
return new cljs.core.Keyword(null,"list","list",(765357683));
} else {
if(cljs.core.map_QMARK_.call(null,x)){
return new cljs.core.Keyword(null,"map","map",(1371690461));
} else {
if(cljs.core.set_QMARK_.call(null,x)){
return new cljs.core.Keyword(null,"set","set",(304602554));
} else {
if(cljs.core.vector_QMARK_.call(null,x)){
return new cljs.core.Keyword(null,"vector","vector",(1902966158));
} else {
return new cljs.core.Keyword(null,"default","default",(-1987822328));

}
}
}
}
}
});})(method_table__22980__auto__,prefer_table__22981__auto__,method_cache__22982__auto__,cached_hierarchy__22983__auto__,hierarchy__22984__auto__))
,new cljs.core.Keyword(null,"default","default",(-1987822328)),hierarchy__22984__auto__,method_table__22980__auto__,prefer_table__22981__auto__,method_cache__22982__auto__,cached_hierarchy__22983__auto__));
})();
}
cljs.core.async.impl.ioc_macros_runtime.item_to_ssa = (function cljs$core$async$impl$ioc_macros_runtime$item_to_ssa(x){
return cljs.core.async.impl.ioc_macros_runtime._item_to_ssa.call(null,x);
});
if(typeof cljs.core.async.impl.ioc_macros_runtime.sexpr_to_ssa !== 'undefined'){
} else {
cljs.core.async.impl.ioc_macros_runtime.sexpr_to_ssa = (function (){var method_table__22980__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__22981__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__22982__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__22983__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__22984__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",(-1053470341)),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.core.async.impl.ioc-macros-runtime","sexpr-to-ssa"),((function (method_table__22980__auto__,prefer_table__22981__auto__,method_cache__22982__auto__,cached_hierarchy__22983__auto__,hierarchy__22984__auto__){
return (function (p__371){
var vec__372 = p__371;
var seq__373 = cljs.core.seq.call(null,vec__372);
var first__374 = cljs.core.first.call(null,seq__373);
var seq__373__$1 = cljs.core.next.call(null,seq__373);
var x = first__374;
var _ = seq__373__$1;
return x;
});})(method_table__22980__auto__,prefer_table__22981__auto__,method_cache__22982__auto__,cached_hierarchy__22983__auto__,hierarchy__22984__auto__))
,new cljs.core.Keyword(null,"default","default",(-1987822328)),hierarchy__22984__auto__,method_table__22980__auto__,prefer_table__22981__auto__,method_cache__22982__auto__,cached_hierarchy__22983__auto__));
})();
}
cljs.core.async.impl.ioc_macros_runtime.is_special_QMARK_ = (function cljs$core$async$impl$ioc_macros_runtime$is_special_QMARK_(x){
var mfn = cljs.core.async.impl.ioc_macros_runtime.sexpr_to_ssa;
return cljs.core.get_method.call(null,mfn,x);
});
cljs.core.async.impl.ioc_macros_runtime.default_sexpr = (function cljs$core$async$impl$ioc_macros_runtime$default_sexpr(args){
return (function (plan_375){
var vec__376 = cljs.core.async.impl.ioc_macros_runtime.all.call(null,cljs.core.map.call(null,cljs.core.async.impl.ioc_macros_runtime.item_to_ssa,args)).call(null,plan_375);
var args_ids = cljs.core.nth.call(null,vec__376,(0),null);
var plan_375__$1 = cljs.core.nth.call(null,vec__376,(1),null);
var vec__379 = cljs.core.async.impl.ioc_macros_runtime.add_instruction.call(null,cljs.core.async.impl.ioc_macros_runtime.__GT_Call.call(null,args_ids)).call(null,plan_375__$1);
var inst_id = cljs.core.nth.call(null,vec__379,(0),null);
var plan_375__$2 = cljs.core.nth.call(null,vec__379,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [inst_id,plan_375__$2], null);
});
});
cljs.core.async.impl.ioc_macros_runtime.let_binding_to_ssa = (function cljs$core$async$impl$ioc_macros_runtime$let_binding_to_ssa(p__382){
var vec__383 = p__382;
var sym = cljs.core.nth.call(null,vec__383,(0),null);
var bind = cljs.core.nth.call(null,vec__383,(1),null);
return ((function (vec__383,sym,bind){
return (function (plan_386){
var vec__387 = cljs.core.async.impl.ioc_macros_runtime.item_to_ssa.call(null,bind).call(null,plan_386);
var bind_id = cljs.core.nth.call(null,vec__387,(0),null);
var plan_386__$1 = cljs.core.nth.call(null,vec__387,(1),null);
var vec__390 = cljs.core.async.impl.ioc_macros_runtime.push_alter_binding.call(null,new cljs.core.Keyword(null,"locals","locals",(535295783)),cljs.core.assoc,sym,bind_id).call(null,plan_386__$1);
var _ = cljs.core.nth.call(null,vec__390,(0),null);
var plan_386__$2 = cljs.core.nth.call(null,vec__390,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bind_id,plan_386__$2], null);
});
;})(vec__383,sym,bind))
});
cljs.core._add_method.call(null,cljs.core.async.impl.ioc_macros_runtime.sexpr_to_ssa,new cljs.core.Symbol(null,"let*","let*",(1920721458),null),(function (p__393){
var vec__394 = p__393;
var seq__395 = cljs.core.seq.call(null,vec__394);
var first__396 = cljs.core.first.call(null,seq__395);
var seq__395__$1 = cljs.core.next.call(null,seq__395);
var _ = first__396;
var first__396__$1 = cljs.core.first.call(null,seq__395__$1);
var seq__395__$2 = cljs.core.next.call(null,seq__395__$1);
var binds = first__396__$1;
var body = seq__395__$2;
var parted = cljs.core.partition.call(null,(2),binds);
return ((function (parted,vec__394,seq__395,first__396,seq__395__$1,_,first__396__$1,seq__395__$2,binds,body){
return (function (plan_397){
var vec__398 = cljs.core.async.impl.ioc_macros_runtime.all.call(null,cljs.core.map.call(null,cljs.core.async.impl.ioc_macros_runtime.let_binding_to_ssa,parted)).call(null,plan_397);
var let_ids = cljs.core.nth.call(null,vec__398,(0),null);
var plan_397__$1 = cljs.core.nth.call(null,vec__398,(1),null);
var vec__401 = cljs.core.async.impl.ioc_macros_runtime.all.call(null,cljs.core.map.call(null,cljs.core.async.impl.ioc_macros_runtime.item_to_ssa,body)).call(null,plan_397__$1);
var body_ids = cljs.core.nth.call(null,vec__401,(0),null);
var plan_397__$2 = cljs.core.nth.call(null,vec__401,(1),null);
var vec__404 = cljs.core.async.impl.ioc_macros_runtime.all.call(null,cljs.core.map.call(null,((function (vec__398,let_ids,plan_397__$1,vec__401,body_ids,plan_397__$2,parted,vec__394,seq__395,first__396,seq__395__$1,_,first__396__$1,seq__395__$2,binds,body){
return (function (x){
return cljs.core.async.impl.ioc_macros_runtime.pop_binding.call(null,new cljs.core.Keyword(null,"locals","locals",(535295783)));
});})(vec__398,let_ids,plan_397__$1,vec__401,body_ids,plan_397__$2,parted,vec__394,seq__395,first__396,seq__395__$1,_,first__396__$1,seq__395__$2,binds,body))
,cljs.core.range.call(null,cljs.core.count.call(null,parted)))).call(null,plan_397__$2);
var ___$1 = cljs.core.nth.call(null,vec__404,(0),null);
var plan_397__$3 = cljs.core.nth.call(null,vec__404,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.last.call(null,body_ids),plan_397__$3], null);
});
;})(parted,vec__394,seq__395,first__396,seq__395__$1,_,first__396__$1,seq__395__$2,binds,body))
}));
cljs.core._add_method.call(null,cljs.core.async.impl.ioc_macros_runtime.sexpr_to_ssa,new cljs.core.Symbol(null,"loop*","loop*",(615029416),null),(function (p__407){
var vec__408 = p__407;
var seq__409 = cljs.core.seq.call(null,vec__408);
var first__410 = cljs.core.first.call(null,seq__409);
var seq__409__$1 = cljs.core.next.call(null,seq__409);
var _ = first__410;
var first__410__$1 = cljs.core.first.call(null,seq__409__$1);
var seq__409__$2 = cljs.core.next.call(null,seq__409__$1);
var locals = first__410__$1;
var body = seq__409__$2;
var parted = cljs.core.partition.call(null,(2),locals);
var syms = cljs.core.map.call(null,cljs.core.first,parted);
var inits = cljs.core.map.call(null,cljs.core.second,parted);
return ((function (parted,syms,inits,vec__408,seq__409,first__410,seq__409__$1,_,first__410__$1,seq__409__$2,locals,body){
return (function (plan_411){
var vec__412 = cljs.core.async.impl.ioc_macros_runtime.all.call(null,cljs.core.map.call(null,((function (parted,syms,inits,vec__408,seq__409,first__410,seq__409__$1,_,first__410__$1,seq__409__$2,locals,body){
return (function (sym,init){
return ((function (parted,syms,inits,vec__408,seq__409,first__410,seq__409__$1,_,first__410__$1,seq__409__$2,locals,body){
return (function (plan_463){
var vec__464 = cljs.core.async.impl.ioc_macros_runtime.item_to_ssa.call(null,init).call(null,plan_463);
var itm_id = cljs.core.nth.call(null,vec__464,(0),null);
var plan_463__$1 = cljs.core.nth.call(null,vec__464,(1),null);
var vec__467 = cljs.core.async.impl.ioc_macros_runtime.push_alter_binding.call(null,new cljs.core.Keyword(null,"locals","locals",(535295783)),cljs.core.assoc,sym,itm_id).call(null,plan_463__$1);
var ___$1 = cljs.core.nth.call(null,vec__467,(0),null);
var plan_463__$2 = cljs.core.nth.call(null,vec__467,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [itm_id,plan_463__$2], null);
});
;})(parted,syms,inits,vec__408,seq__409,first__410,seq__409__$1,_,first__410__$1,seq__409__$2,locals,body))
});})(parted,syms,inits,vec__408,seq__409,first__410,seq__409__$1,_,first__410__$1,seq__409__$2,locals,body))
,syms,inits)).call(null,plan_411);
var local_val_ids = cljs.core.nth.call(null,vec__412,(0),null);
var plan_411__$1 = cljs.core.nth.call(null,vec__412,(1),null);
var vec__415 = cljs.core.async.impl.ioc_macros_runtime.all.call(null,(function (){var iter__22810__auto__ = ((function (vec__412,local_val_ids,plan_411__$1,parted,syms,inits,vec__408,seq__409,first__410,seq__409__$1,_,first__410__$1,seq__409__$2,locals,body){
return (function cljs$core$async$impl$ioc_macros_runtime$iter__470(s__471){
return (new cljs.core.LazySeq(null,((function (vec__412,local_val_ids,plan_411__$1,parted,syms,inits,vec__408,seq__409,first__410,seq__409__$1,_,first__410__$1,seq__409__$2,locals,body){
return (function (){
var s__471__$1 = s__471;
while(true){
var temp__20428__auto__ = cljs.core.seq.call(null,s__471__$1);
if(temp__20428__auto__){
var s__471__$2 = temp__20428__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__471__$2)){
var c__22808__auto__ = cljs.core.chunk_first.call(null,s__471__$2);
var size__22809__auto__ = cljs.core.count.call(null,c__22808__auto__);
var b__473 = cljs.core.chunk_buffer.call(null,size__22809__auto__);
if((function (){var i__472 = (0);
while(true){
if((i__472 < size__22809__auto__)){
var x = cljs.core._nth.call(null,c__22808__auto__,i__472);
cljs.core.chunk_append.call(null,b__473,cljs.core.async.impl.ioc_macros_runtime.pop_binding.call(null,new cljs.core.Keyword(null,"locals","locals",(535295783))));

var G__474 = (i__472 + (1));
i__472 = G__474;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__473),cljs$core$async$impl$ioc_macros_runtime$iter__470.call(null,cljs.core.chunk_rest.call(null,s__471__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__473),null);
}
} else {
var x = cljs.core.first.call(null,s__471__$2);
return cljs.core.cons.call(null,cljs.core.async.impl.ioc_macros_runtime.pop_binding.call(null,new cljs.core.Keyword(null,"locals","locals",(535295783))),cljs$core$async$impl$ioc_macros_runtime$iter__470.call(null,cljs.core.rest.call(null,s__471__$2)));
}
} else {
return null;
}
break;
}
});})(vec__412,local_val_ids,plan_411__$1,parted,syms,inits,vec__408,seq__409,first__410,seq__409__$1,_,first__410__$1,seq__409__$2,locals,body))
,null,null));
});})(vec__412,local_val_ids,plan_411__$1,parted,syms,inits,vec__408,seq__409,first__410,seq__409__$1,_,first__410__$1,seq__409__$2,locals,body))
;
return iter__22810__auto__.call(null,syms);
})()).call(null,plan_411__$1);
var ___$1 = cljs.core.nth.call(null,vec__415,(0),null);
var plan_411__$2 = cljs.core.nth.call(null,vec__415,(1),null);
var vec__418 = cljs.core.async.impl.ioc_macros_runtime.all.call(null,cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.async.impl.ioc_macros_runtime.add_instruction,cljs.core.async.impl.ioc_macros_runtime.__GT_Const),local_val_ids)).call(null,plan_411__$2);
var local_ids = cljs.core.nth.call(null,vec__418,(0),null);
var plan_411__$3 = cljs.core.nth.call(null,vec__418,(1),null);
var vec__421 = cljs.core.async.impl.ioc_macros_runtime.add_block.call(null).call(null,plan_411__$3);
var body_blk = cljs.core.nth.call(null,vec__421,(0),null);
var plan_411__$4 = cljs.core.nth.call(null,vec__421,(1),null);
var vec__424 = cljs.core.async.impl.ioc_macros_runtime.add_block.call(null).call(null,plan_411__$4);
var final_blk = cljs.core.nth.call(null,vec__424,(0),null);
var plan_411__$5 = cljs.core.nth.call(null,vec__424,(1),null);
var vec__427 = cljs.core.async.impl.ioc_macros_runtime.add_instruction.call(null,cljs.core.async.impl.ioc_macros_runtime.__GT_Jmp.call(null,null,body_blk)).call(null,plan_411__$5);
var ___$2 = cljs.core.nth.call(null,vec__427,(0),null);
var plan_411__$6 = cljs.core.nth.call(null,vec__427,(1),null);
var vec__430 = cljs.core.async.impl.ioc_macros_runtime.set_block.call(null,body_blk).call(null,plan_411__$6);
var ___$3 = cljs.core.nth.call(null,vec__430,(0),null);
var plan_411__$7 = cljs.core.nth.call(null,vec__430,(1),null);
var vec__433 = cljs.core.async.impl.ioc_macros_runtime.push_alter_binding.call(null,new cljs.core.Keyword(null,"locals","locals",(535295783)),cljs.core.merge,cljs.core.zipmap.call(null,syms,local_ids)).call(null,plan_411__$7);
var ___$4 = cljs.core.nth.call(null,vec__433,(0),null);
var plan_411__$8 = cljs.core.nth.call(null,vec__433,(1),null);
var vec__436 = cljs.core.async.impl.ioc_macros_runtime.push_binding.call(null,new cljs.core.Keyword(null,"recur-point","recur-point",(-355035890)),body_blk).call(null,plan_411__$8);
var ___$5 = cljs.core.nth.call(null,vec__436,(0),null);
var plan_411__$9 = cljs.core.nth.call(null,vec__436,(1),null);
var vec__439 = cljs.core.async.impl.ioc_macros_runtime.push_binding.call(null,new cljs.core.Keyword(null,"recur-nodes","recur-nodes",(2077600963)),local_ids).call(null,plan_411__$9);
var ___$6 = cljs.core.nth.call(null,vec__439,(0),null);
var plan_411__$10 = cljs.core.nth.call(null,vec__439,(1),null);
var vec__442 = cljs.core.async.impl.ioc_macros_runtime.all.call(null,cljs.core.map.call(null,cljs.core.async.impl.ioc_macros_runtime.item_to_ssa,body)).call(null,plan_411__$10);
var body_ids = cljs.core.nth.call(null,vec__442,(0),null);
var plan_411__$11 = cljs.core.nth.call(null,vec__442,(1),null);
var vec__445 = cljs.core.async.impl.ioc_macros_runtime.pop_binding.call(null,new cljs.core.Keyword(null,"recur-nodes","recur-nodes",(2077600963))).call(null,plan_411__$11);
var ___$7 = cljs.core.nth.call(null,vec__445,(0),null);
var plan_411__$12 = cljs.core.nth.call(null,vec__445,(1),null);
var vec__448 = cljs.core.async.impl.ioc_macros_runtime.pop_binding.call(null,new cljs.core.Keyword(null,"recur-point","recur-point",(-355035890))).call(null,plan_411__$12);
var ___$8 = cljs.core.nth.call(null,vec__448,(0),null);
var plan_411__$13 = cljs.core.nth.call(null,vec__448,(1),null);
var vec__451 = cljs.core.async.impl.ioc_macros_runtime.pop_binding.call(null,new cljs.core.Keyword(null,"locals","locals",(535295783))).call(null,plan_411__$13);
var ___$9 = cljs.core.nth.call(null,vec__451,(0),null);
var plan_411__$14 = cljs.core.nth.call(null,vec__451,(1),null);
var vec__454 = ((cljs.core.not_EQ_.call(null,cljs.core.last.call(null,body_ids),new cljs.core.Keyword("cljs.core.async.impl.ioc-macros-runtime","terminated","cljs.core.async.impl.ioc-macros-runtime/terminated",(-177180433))))?cljs.core.async.impl.ioc_macros_runtime.add_instruction.call(null,cljs.core.async.impl.ioc_macros_runtime.__GT_Jmp.call(null,cljs.core.last.call(null,body_ids),final_blk)):cljs.core.async.impl.ioc_macros_runtime.no_op.call(null)).call(null,plan_411__$14);
var ___$10 = cljs.core.nth.call(null,vec__454,(0),null);
var plan_411__$15 = cljs.core.nth.call(null,vec__454,(1),null);
var vec__457 = cljs.core.async.impl.ioc_macros_runtime.set_block.call(null,final_blk).call(null,plan_411__$15);
var ___$11 = cljs.core.nth.call(null,vec__457,(0),null);
var plan_411__$16 = cljs.core.nth.call(null,vec__457,(1),null);
var vec__460 = cljs.core.async.impl.ioc_macros_runtime.add_instruction.call(null,cljs.core.async.impl.ioc_macros_runtime.__GT_Const.call(null,new cljs.core.Keyword("cljs.core.async.impl.ioc-macros-runtime","value","cljs.core.async.impl.ioc-macros-runtime/value",(1763202694)))).call(null,plan_411__$16);
var ret_id = cljs.core.nth.call(null,vec__460,(0),null);
var plan_411__$17 = cljs.core.nth.call(null,vec__460,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ret_id,plan_411__$17], null);
});
;})(parted,syms,inits,vec__408,seq__409,first__410,seq__409__$1,_,first__410__$1,seq__409__$2,locals,body))
}));
cljs.core._add_method.call(null,cljs.core.async.impl.ioc_macros_runtime.sexpr_to_ssa,new cljs.core.Symbol(null,"set!","set!",(250714521),null),(function (p__475){
var vec__476 = p__475;
var _ = cljs.core.nth.call(null,vec__476,(0),null);
var assignee = cljs.core.nth.call(null,vec__476,(1),null);
var val = cljs.core.nth.call(null,vec__476,(2),null);
var target = (((assignee instanceof cljs.core.Symbol))?assignee:(((cljs.core.list_QMARK_.call(null,assignee)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,assignee),(2))))?cljs.core.second.call(null,assignee):null));
var field = ((cljs.core.list_QMARK_.call(null,assignee))?cljs.core.first.call(null,assignee):null);
return ((function (target,field,vec__476,_,assignee,val){
return (function (plan_479){
var vec__480 = cljs.core.async.impl.ioc_macros_runtime.get_binding.call(null,new cljs.core.Keyword(null,"locals","locals",(535295783))).call(null,plan_479);
var locals = cljs.core.nth.call(null,vec__480,(0),null);
var plan_479__$1 = cljs.core.nth.call(null,vec__480,(1),null);
var vec__483 = ((cljs.core.contains_QMARK_.call(null,locals,target))?((function (vec__480,locals,plan_479__$1,target,field,vec__476,_,assignee,val){
return (function (p){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get.call(null,locals,target),p], null);
});})(vec__480,locals,plan_479__$1,target,field,vec__476,_,assignee,val))
:cljs.core.async.impl.ioc_macros_runtime.item_to_ssa.call(null,target)).call(null,plan_479__$1);
var target_id = cljs.core.nth.call(null,vec__483,(0),null);
var plan_479__$2 = cljs.core.nth.call(null,vec__483,(1),null);
var vec__486 = cljs.core.async.impl.ioc_macros_runtime.item_to_ssa.call(null,val).call(null,plan_479__$2);
var val_id = cljs.core.nth.call(null,vec__486,(0),null);
var plan_479__$3 = cljs.core.nth.call(null,vec__486,(1),null);
var vec__489 = cljs.core.async.impl.ioc_macros_runtime.add_instruction.call(null,cljs.core.async.impl.ioc_macros_runtime.__GT_Set_BANG_.call(null,field,target_id,val_id)).call(null,plan_479__$3);
var ret_id = cljs.core.nth.call(null,vec__489,(0),null);
var plan_479__$4 = cljs.core.nth.call(null,vec__489,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ret_id,plan_479__$4], null);
});
;})(target,field,vec__476,_,assignee,val))
}));
cljs.core._add_method.call(null,cljs.core.async.impl.ioc_macros_runtime.sexpr_to_ssa,new cljs.core.Symbol(null,"do","do",(1686842252),null),(function (p__492){
var vec__493 = p__492;
var seq__494 = cljs.core.seq.call(null,vec__493);
var first__495 = cljs.core.first.call(null,seq__494);
var seq__494__$1 = cljs.core.next.call(null,seq__494);
var _ = first__495;
var body = seq__494__$1;
return ((function (vec__493,seq__494,first__495,seq__494__$1,_,body){
return (function (plan_496){
var vec__497 = cljs.core.async.impl.ioc_macros_runtime.all.call(null,cljs.core.map.call(null,cljs.core.async.impl.ioc_macros_runtime.item_to_ssa,body)).call(null,plan_496);
var ids = cljs.core.nth.call(null,vec__497,(0),null);
var plan_496__$1 = cljs.core.nth.call(null,vec__497,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.last.call(null,ids),plan_496__$1], null);
});
;})(vec__493,seq__494,first__495,seq__494__$1,_,body))
}));
cljs.core._add_method.call(null,cljs.core.async.impl.ioc_macros_runtime.sexpr_to_ssa,new cljs.core.Symbol(null,"case","case",(-1510733573),null),(function (p__500){
var vec__501 = p__500;
var seq__502 = cljs.core.seq.call(null,vec__501);
var first__503 = cljs.core.first.call(null,seq__502);
var seq__502__$1 = cljs.core.next.call(null,seq__502);
var _ = first__503;
var first__503__$1 = cljs.core.first.call(null,seq__502__$1);
var seq__502__$2 = cljs.core.next.call(null,seq__502__$1);
var val = first__503__$1;
var body = seq__502__$2;
var clauses = cljs.core.partition.call(null,(2),body);
var default$ = ((cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,body)))?cljs.core.last.call(null,body):null);
return ((function (clauses,default$,vec__501,seq__502,first__503,seq__502__$1,_,first__503__$1,seq__502__$2,val,body){
return (function (plan_504){
var vec__505 = cljs.core.async.impl.ioc_macros_runtime.add_block.call(null).call(null,plan_504);
var end_blk = cljs.core.nth.call(null,vec__505,(0),null);
var plan_504__$1 = cljs.core.nth.call(null,vec__505,(1),null);
var vec__508 = cljs.core.async.impl.ioc_macros_runtime.get_block.call(null).call(null,plan_504__$1);
var start_blk = cljs.core.nth.call(null,vec__508,(0),null);
var plan_504__$2 = cljs.core.nth.call(null,vec__508,(1),null);
var vec__511 = cljs.core.async.impl.ioc_macros_runtime.all.call(null,cljs.core.map.call(null,((function (vec__505,end_blk,plan_504__$1,vec__508,start_blk,plan_504__$2,clauses,default$,vec__501,seq__502,first__503,seq__502__$1,_,first__503__$1,seq__502__$2,val,body){
return (function (expr){
return ((function (vec__505,end_blk,plan_504__$1,vec__508,start_blk,plan_504__$2,clauses,default$,vec__501,seq__502,first__503,seq__502__$1,_,first__503__$1,seq__502__$2,val,body){
return (function (plan_532){
var vec__533 = cljs.core.async.impl.ioc_macros_runtime.add_block.call(null).call(null,plan_532);
var blk_id = cljs.core.nth.call(null,vec__533,(0),null);
var plan_532__$1 = cljs.core.nth.call(null,vec__533,(1),null);
var vec__536 = cljs.core.async.impl.ioc_macros_runtime.set_block.call(null,blk_id).call(null,plan_532__$1);
var ___$1 = cljs.core.nth.call(null,vec__536,(0),null);
var plan_532__$2 = cljs.core.nth.call(null,vec__536,(1),null);
var vec__539 = cljs.core.async.impl.ioc_macros_runtime.item_to_ssa.call(null,expr).call(null,plan_532__$2);
var expr_id = cljs.core.nth.call(null,vec__539,(0),null);
var plan_532__$3 = cljs.core.nth.call(null,vec__539,(1),null);
var vec__542 = ((cljs.core.not_EQ_.call(null,expr_id,new cljs.core.Keyword("cljs.core.async.impl.ioc-macros-runtime","terminated","cljs.core.async.impl.ioc-macros-runtime/terminated",(-177180433))))?cljs.core.async.impl.ioc_macros_runtime.add_instruction.call(null,cljs.core.async.impl.ioc_macros_runtime.__GT_Jmp.call(null,expr_id,end_blk)):cljs.core.async.impl.ioc_macros_runtime.no_op.call(null)).call(null,plan_532__$3);
var ___$2 = cljs.core.nth.call(null,vec__542,(0),null);
var plan_532__$4 = cljs.core.nth.call(null,vec__542,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [blk_id,plan_532__$4], null);
});
;})(vec__505,end_blk,plan_504__$1,vec__508,start_blk,plan_504__$2,clauses,default$,vec__501,seq__502,first__503,seq__502__$1,_,first__503__$1,seq__502__$2,val,body))
});})(vec__505,end_blk,plan_504__$1,vec__508,start_blk,plan_504__$2,clauses,default$,vec__501,seq__502,first__503,seq__502__$1,_,first__503__$1,seq__502__$2,val,body))
,cljs.core.map.call(null,cljs.core.second,clauses))).call(null,plan_504__$2);
var clause_blocks = cljs.core.nth.call(null,vec__511,(0),null);
var plan_504__$3 = cljs.core.nth.call(null,vec__511,(1),null);
var vec__514 = ((cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,body)))?((function (vec__505,end_blk,plan_504__$1,vec__508,start_blk,plan_504__$2,vec__511,clause_blocks,plan_504__$3,clauses,default$,vec__501,seq__502,first__503,seq__502__$1,_,first__503__$1,seq__502__$2,val,body){
return (function (plan_545){
var vec__546 = cljs.core.async.impl.ioc_macros_runtime.add_block.call(null).call(null,plan_545);
var blk_id = cljs.core.nth.call(null,vec__546,(0),null);
var plan_545__$1 = cljs.core.nth.call(null,vec__546,(1),null);
var vec__549 = cljs.core.async.impl.ioc_macros_runtime.set_block.call(null,blk_id).call(null,plan_545__$1);
var ___$1 = cljs.core.nth.call(null,vec__549,(0),null);
var plan_545__$2 = cljs.core.nth.call(null,vec__549,(1),null);
var vec__552 = cljs.core.async.impl.ioc_macros_runtime.item_to_ssa.call(null,default$).call(null,plan_545__$2);
var expr_id = cljs.core.nth.call(null,vec__552,(0),null);
var plan_545__$3 = cljs.core.nth.call(null,vec__552,(1),null);
var vec__555 = ((cljs.core.not_EQ_.call(null,expr_id,new cljs.core.Keyword("cljs.core.async.impl.ioc-macros-runtime","terminated","cljs.core.async.impl.ioc-macros-runtime/terminated",(-177180433))))?cljs.core.async.impl.ioc_macros_runtime.add_instruction.call(null,cljs.core.async.impl.ioc_macros_runtime.__GT_Jmp.call(null,expr_id,end_blk)):cljs.core.async.impl.ioc_macros_runtime.no_op.call(null)).call(null,plan_545__$3);
var ___$2 = cljs.core.nth.call(null,vec__555,(0),null);
var plan_545__$4 = cljs.core.nth.call(null,vec__555,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [blk_id,plan_545__$4], null);
});})(vec__505,end_blk,plan_504__$1,vec__508,start_blk,plan_504__$2,vec__511,clause_blocks,plan_504__$3,clauses,default$,vec__501,seq__502,first__503,seq__502__$1,_,first__503__$1,seq__502__$2,val,body))
:cljs.core.async.impl.ioc_macros_runtime.no_op.call(null)).call(null,plan_504__$3);
var default_block = cljs.core.nth.call(null,vec__514,(0),null);
var plan_504__$4 = cljs.core.nth.call(null,vec__514,(1),null);
var vec__517 = cljs.core.async.impl.ioc_macros_runtime.set_block.call(null,start_blk).call(null,plan_504__$4);
var ___$1 = cljs.core.nth.call(null,vec__517,(0),null);
var plan_504__$5 = cljs.core.nth.call(null,vec__517,(1),null);
var vec__520 = cljs.core.async.impl.ioc_macros_runtime.item_to_ssa.call(null,val).call(null,plan_504__$5);
var val_id = cljs.core.nth.call(null,vec__520,(0),null);
var plan_504__$6 = cljs.core.nth.call(null,vec__520,(1),null);
var vec__523 = cljs.core.async.impl.ioc_macros_runtime.add_instruction.call(null,cljs.core.async.impl.ioc_macros_runtime.__GT_Case.call(null,val_id,cljs.core.map.call(null,cljs.core.first,clauses),clause_blocks,default_block)).call(null,plan_504__$6);
var case_id = cljs.core.nth.call(null,vec__523,(0),null);
var plan_504__$7 = cljs.core.nth.call(null,vec__523,(1),null);
var vec__526 = cljs.core.async.impl.ioc_macros_runtime.set_block.call(null,end_blk).call(null,plan_504__$7);
var ___$2 = cljs.core.nth.call(null,vec__526,(0),null);
var plan_504__$8 = cljs.core.nth.call(null,vec__526,(1),null);
var vec__529 = cljs.core.async.impl.ioc_macros_runtime.add_instruction.call(null,cljs.core.async.impl.ioc_macros_runtime.__GT_Const.call(null,new cljs.core.Keyword("cljs.core.async.impl.ioc-macros-runtime","value","cljs.core.async.impl.ioc-macros-runtime/value",(1763202694)))).call(null,plan_504__$8);
var ret_id = cljs.core.nth.call(null,vec__529,(0),null);
var plan_504__$9 = cljs.core.nth.call(null,vec__529,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ret_id,plan_504__$9], null);
});
;})(clauses,default$,vec__501,seq__502,first__503,seq__502__$1,_,first__503__$1,seq__502__$2,val,body))
}));
cljs.core._add_method.call(null,cljs.core.async.impl.ioc_macros_runtime.sexpr_to_ssa,new cljs.core.Symbol(null,"quote","quote",(1377916282),null),(function (expr){
return (function (plan_558){
var vec__559 = cljs.core.async.impl.ioc_macros_runtime.add_instruction.call(null,cljs.core.async.impl.ioc_macros_runtime.__GT_Const.call(null,expr)).call(null,plan_558);
var ret_id = cljs.core.nth.call(null,vec__559,(0),null);
var plan_558__$1 = cljs.core.nth.call(null,vec__559,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ret_id,plan_558__$1], null);
});
}));
cljs.core._add_method.call(null,cljs.core.async.impl.ioc_macros_runtime.sexpr_to_ssa,new cljs.core.Symbol(null,".",".",(1975675962),null),(function (p__562){
var vec__563 = p__562;
var seq__564 = cljs.core.seq.call(null,vec__563);
var first__565 = cljs.core.first.call(null,seq__564);
var seq__564__$1 = cljs.core.next.call(null,seq__564);
var _ = first__565;
var first__565__$1 = cljs.core.first.call(null,seq__564__$1);
var seq__564__$2 = cljs.core.next.call(null,seq__564__$1);
var target = first__565__$1;
var first__565__$2 = cljs.core.first.call(null,seq__564__$2);
var seq__564__$3 = cljs.core.next.call(null,seq__564__$2);
var method = first__565__$2;
var args = seq__564__$3;
var args__$1 = ((cljs.core.seq_QMARK_.call(null,method))?cljs.core.next.call(null,method):args);
var method__$1 = ((cljs.core.seq_QMARK_.call(null,method))?cljs.core.first.call(null,method):method);
return ((function (args__$1,method__$1,vec__563,seq__564,first__565,seq__564__$1,_,first__565__$1,seq__564__$2,target,first__565__$2,seq__564__$3,method,args){
return (function (plan_566){
var vec__567 = cljs.core.async.impl.ioc_macros_runtime.item_to_ssa.call(null,target).call(null,plan_566);
var target_id = cljs.core.nth.call(null,vec__567,(0),null);
var plan_566__$1 = cljs.core.nth.call(null,vec__567,(1),null);
var vec__570 = cljs.core.async.impl.ioc_macros_runtime.all.call(null,cljs.core.map.call(null,cljs.core.async.impl.ioc_macros_runtime.item_to_ssa,args__$1)).call(null,plan_566__$1);
var args_ids = cljs.core.nth.call(null,vec__570,(0),null);
var plan_566__$2 = cljs.core.nth.call(null,vec__570,(1),null);
var vec__573 = cljs.core.async.impl.ioc_macros_runtime.add_instruction.call(null,cljs.core.async.impl.ioc_macros_runtime.__GT_Dot.call(null,target_id,method__$1,args_ids)).call(null,plan_566__$2);
var ret_id = cljs.core.nth.call(null,vec__573,(0),null);
var plan_566__$3 = cljs.core.nth.call(null,vec__573,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ret_id,plan_566__$3], null);
});
;})(args__$1,method__$1,vec__563,seq__564,first__565,seq__564__$1,_,first__565__$1,seq__564__$2,target,first__565__$2,seq__564__$3,method,args))
}));
cljs.core._add_method.call(null,cljs.core.async.impl.ioc_macros_runtime.sexpr_to_ssa,new cljs.core.Symbol(null,"try","try",(-1273693247),null),(function (p__576){
var vec__577 = p__576;
var seq__578 = cljs.core.seq.call(null,vec__577);
var first__579 = cljs.core.first.call(null,seq__578);
var seq__578__$1 = cljs.core.next.call(null,seq__578);
var _ = first__579;
var body = seq__578__$1;
var finally_fn = cljs.core.every_pred.call(null,cljs.core.seq_QMARK_,cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core._EQ_,new cljs.core.Symbol(null,"finally","finally",(-1065347064),null)),cljs.core.first));
var catch_fn = cljs.core.every_pred.call(null,cljs.core.seq_QMARK_,cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core._EQ_,new cljs.core.Symbol(null,"catch","catch",(-1616370245),null)),cljs.core.first));
var finally$ = cljs.core.next.call(null,cljs.core.first.call(null,cljs.core.filter.call(null,finally_fn,body)));
var body__$1 = cljs.core.remove.call(null,finally_fn,body);
var catch$ = cljs.core.next.call(null,cljs.core.first.call(null,cljs.core.filter.call(null,catch_fn,body__$1)));
var vec__580 = catch$;
var seq__581 = cljs.core.seq.call(null,vec__580);
var first__582 = cljs.core.first.call(null,seq__581);
var seq__581__$1 = cljs.core.next.call(null,seq__581);
var ex = first__582;
var first__582__$1 = cljs.core.first.call(null,seq__581__$1);
var seq__581__$2 = cljs.core.next.call(null,seq__581__$1);
var ex_bind = first__582__$1;
var catch_body = seq__581__$2;
var body__$2 = cljs.core.remove.call(null,catch_fn,body__$1);
return ((function (finally_fn,catch_fn,finally$,body__$1,catch$,vec__580,seq__581,first__582,seq__581__$1,ex,first__582__$1,seq__581__$2,ex_bind,catch_body,body__$2,vec__577,seq__578,first__579,seq__578__$1,_,body){
return (function (plan_583){
var vec__584 = cljs.core.async.impl.ioc_macros_runtime.add_block.call(null).call(null,plan_583);
var end_blk = cljs.core.nth.call(null,vec__584,(0),null);
var plan_583__$1 = cljs.core.nth.call(null,vec__584,(1),null);
var vec__587 = ((finally$)?((function (vec__584,end_blk,plan_583__$1,finally_fn,catch_fn,finally$,body__$1,catch$,vec__580,seq__581,first__582,seq__581__$1,ex,first__582__$1,seq__581__$2,ex_bind,catch_body,body__$2,vec__577,seq__578,first__579,seq__578__$1,_,body){
return (function (plan_620){
var vec__621 = cljs.core.async.impl.ioc_macros_runtime.get_block.call(null).call(null,plan_620);
var cur_blk = cljs.core.nth.call(null,vec__621,(0),null);
var plan_620__$1 = cljs.core.nth.call(null,vec__621,(1),null);
var vec__624 = cljs.core.async.impl.ioc_macros_runtime.add_block.call(null).call(null,plan_620__$1);
var blk = cljs.core.nth.call(null,vec__624,(0),null);
var plan_620__$2 = cljs.core.nth.call(null,vec__624,(1),null);
var vec__627 = cljs.core.async.impl.ioc_macros_runtime.set_block.call(null,blk).call(null,plan_620__$2);
var ___$1 = cljs.core.nth.call(null,vec__627,(0),null);
var plan_620__$3 = cljs.core.nth.call(null,vec__627,(1),null);
var vec__630 = cljs.core.async.impl.ioc_macros_runtime.add_instruction.call(null,cljs.core.async.impl.ioc_macros_runtime.__GT_Const.call(null,new cljs.core.Keyword("cljs.core.async.impl.ioc-macros-runtime","value","cljs.core.async.impl.ioc-macros-runtime/value",(1763202694)))).call(null,plan_620__$3);
var value_id = cljs.core.nth.call(null,vec__630,(0),null);
var plan_620__$4 = cljs.core.nth.call(null,vec__630,(1),null);
var vec__633 = cljs.core.async.impl.ioc_macros_runtime.all.call(null,cljs.core.map.call(null,cljs.core.async.impl.ioc_macros_runtime.item_to_ssa,finally$)).call(null,plan_620__$4);
var ___$2 = cljs.core.nth.call(null,vec__633,(0),null);
var plan_620__$5 = cljs.core.nth.call(null,vec__633,(1),null);
var vec__636 = cljs.core.async.impl.ioc_macros_runtime.add_instruction.call(null,cljs.core.async.impl.ioc_macros_runtime.__GT_EndCatchFinally.call(null)).call(null,plan_620__$5);
var ___$3 = cljs.core.nth.call(null,vec__636,(0),null);
var plan_620__$6 = cljs.core.nth.call(null,vec__636,(1),null);
var vec__639 = cljs.core.async.impl.ioc_macros_runtime.set_block.call(null,cur_blk).call(null,plan_620__$6);
var ___$4 = cljs.core.nth.call(null,vec__639,(0),null);
var plan_620__$7 = cljs.core.nth.call(null,vec__639,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [blk,plan_620__$7], null);
});})(vec__584,end_blk,plan_583__$1,finally_fn,catch_fn,finally$,body__$1,catch$,vec__580,seq__581,first__582,seq__581__$1,ex,first__582__$1,seq__581__$2,ex_bind,catch_body,body__$2,vec__577,seq__578,first__579,seq__578__$1,_,body))
:cljs.core.async.impl.ioc_macros_runtime.no_op.call(null)).call(null,plan_583__$1);
var finally_blk = cljs.core.nth.call(null,vec__587,(0),null);
var plan_583__$2 = cljs.core.nth.call(null,vec__587,(1),null);
var vec__590 = ((catch$)?((function (vec__584,end_blk,plan_583__$1,vec__587,finally_blk,plan_583__$2,finally_fn,catch_fn,finally$,body__$1,catch$,vec__580,seq__581,first__582,seq__581__$1,ex,first__582__$1,seq__581__$2,ex_bind,catch_body,body__$2,vec__577,seq__578,first__579,seq__578__$1,_,body){
return (function (plan_642){
var vec__643 = cljs.core.async.impl.ioc_macros_runtime.get_block.call(null).call(null,plan_642);
var cur_blk = cljs.core.nth.call(null,vec__643,(0),null);
var plan_642__$1 = cljs.core.nth.call(null,vec__643,(1),null);
var vec__646 = cljs.core.async.impl.ioc_macros_runtime.add_block.call(null).call(null,plan_642__$1);
var blk = cljs.core.nth.call(null,vec__646,(0),null);
var plan_642__$2 = cljs.core.nth.call(null,vec__646,(1),null);
var vec__649 = cljs.core.async.impl.ioc_macros_runtime.set_block.call(null,blk).call(null,plan_642__$2);
var ___$1 = cljs.core.nth.call(null,vec__649,(0),null);
var plan_642__$3 = cljs.core.nth.call(null,vec__649,(1),null);
var vec__652 = cljs.core.async.impl.ioc_macros_runtime.add_instruction.call(null,cljs.core.async.impl.ioc_macros_runtime.__GT_Const.call(null,new cljs.core.Keyword("cljs.core.async.impl.ioc-macros-runtime","value","cljs.core.async.impl.ioc-macros-runtime/value",(1763202694)))).call(null,plan_642__$3);
var ex_id = cljs.core.nth.call(null,vec__652,(0),null);
var plan_642__$4 = cljs.core.nth.call(null,vec__652,(1),null);
var vec__655 = cljs.core.async.impl.ioc_macros_runtime.push_alter_binding.call(null,new cljs.core.Keyword(null,"locals","locals",(535295783)),cljs.core.assoc,ex_bind,ex_id).call(null,plan_642__$4);
var ___$2 = cljs.core.nth.call(null,vec__655,(0),null);
var plan_642__$5 = cljs.core.nth.call(null,vec__655,(1),null);
var vec__658 = cljs.core.async.impl.ioc_macros_runtime.all.call(null,cljs.core.map.call(null,cljs.core.async.impl.ioc_macros_runtime.item_to_ssa,catch_body)).call(null,plan_642__$5);
var ids = cljs.core.nth.call(null,vec__658,(0),null);
var plan_642__$6 = cljs.core.nth.call(null,vec__658,(1),null);
var vec__661 = cljs.core.async.impl.ioc_macros_runtime.add_instruction.call(null,cljs.core.async.impl.ioc_macros_runtime.__GT_ProcessExceptionWithValue.call(null,cljs.core.last.call(null,ids))).call(null,plan_642__$6);
var ___$3 = cljs.core.nth.call(null,vec__661,(0),null);
var plan_642__$7 = cljs.core.nth.call(null,vec__661,(1),null);
var vec__664 = cljs.core.async.impl.ioc_macros_runtime.pop_binding.call(null,new cljs.core.Keyword(null,"locals","locals",(535295783))).call(null,plan_642__$7);
var ___$4 = cljs.core.nth.call(null,vec__664,(0),null);
var plan_642__$8 = cljs.core.nth.call(null,vec__664,(1),null);
var vec__667 = cljs.core.async.impl.ioc_macros_runtime.set_block.call(null,cur_blk).call(null,plan_642__$8);
var ___$5 = cljs.core.nth.call(null,vec__667,(0),null);
var plan_642__$9 = cljs.core.nth.call(null,vec__667,(1),null);
var vec__670 = cljs.core.async.impl.ioc_macros_runtime.push_alter_binding.call(null,new cljs.core.Keyword(null,"catch","catch",(1038065524)),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ex,blk], null)).call(null,plan_642__$9);
var ___$6 = cljs.core.nth.call(null,vec__670,(0),null);
var plan_642__$10 = cljs.core.nth.call(null,vec__670,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [blk,plan_642__$10], null);
});})(vec__584,end_blk,plan_583__$1,vec__587,finally_blk,plan_583__$2,finally_fn,catch_fn,finally$,body__$1,catch$,vec__580,seq__581,first__582,seq__581__$1,ex,first__582__$1,seq__581__$2,ex_bind,catch_body,body__$2,vec__577,seq__578,first__579,seq__578__$1,_,body))
:cljs.core.async.impl.ioc_macros_runtime.no_op.call(null)).call(null,plan_583__$2);
var catch_blk = cljs.core.nth.call(null,vec__590,(0),null);
var plan_583__$3 = cljs.core.nth.call(null,vec__590,(1),null);
var vec__593 = cljs.core.async.impl.ioc_macros_runtime.add_block.call(null).call(null,plan_583__$3);
var body_blk = cljs.core.nth.call(null,vec__593,(0),null);
var plan_583__$4 = cljs.core.nth.call(null,vec__593,(1),null);
var vec__596 = cljs.core.async.impl.ioc_macros_runtime.add_instruction.call(null,cljs.core.async.impl.ioc_macros_runtime.__GT_Jmp.call(null,null,body_blk)).call(null,plan_583__$4);
var ___$1 = cljs.core.nth.call(null,vec__596,(0),null);
var plan_583__$5 = cljs.core.nth.call(null,vec__596,(1),null);
var vec__599 = cljs.core.async.impl.ioc_macros_runtime.set_block.call(null,body_blk).call(null,plan_583__$5);
var ___$2 = cljs.core.nth.call(null,vec__599,(0),null);
var plan_583__$6 = cljs.core.nth.call(null,vec__599,(1),null);
var vec__602 = cljs.core.async.impl.ioc_macros_runtime.add_instruction.call(null,cljs.core.async.impl.ioc_macros_runtime.__GT_Try.call(null,catch_blk,ex,finally_blk,end_blk)).call(null,plan_583__$6);
var ___$3 = cljs.core.nth.call(null,vec__602,(0),null);
var plan_583__$7 = cljs.core.nth.call(null,vec__602,(1),null);
var vec__605 = cljs.core.async.impl.ioc_macros_runtime.all.call(null,cljs.core.map.call(null,cljs.core.async.impl.ioc_macros_runtime.item_to_ssa,body__$2)).call(null,plan_583__$7);
var ids = cljs.core.nth.call(null,vec__605,(0),null);
var plan_583__$8 = cljs.core.nth.call(null,vec__605,(1),null);
var vec__608 = ((catch$)?cljs.core.async.impl.ioc_macros_runtime.pop_binding.call(null,new cljs.core.Keyword(null,"catch","catch",(1038065524))):cljs.core.async.impl.ioc_macros_runtime.no_op.call(null)).call(null,plan_583__$8);
var ___$4 = cljs.core.nth.call(null,vec__608,(0),null);
var plan_583__$9 = cljs.core.nth.call(null,vec__608,(1),null);
var vec__611 = cljs.core.async.impl.ioc_macros_runtime.add_instruction.call(null,cljs.core.async.impl.ioc_macros_runtime.__GT_ProcessExceptionWithValue.call(null,cljs.core.last.call(null,ids))).call(null,plan_583__$9);
var ___$5 = cljs.core.nth.call(null,vec__611,(0),null);
var plan_583__$10 = cljs.core.nth.call(null,vec__611,(1),null);
var vec__614 = cljs.core.async.impl.ioc_macros_runtime.set_block.call(null,end_blk).call(null,plan_583__$10);
var ___$6 = cljs.core.nth.call(null,vec__614,(0),null);
var plan_583__$11 = cljs.core.nth.call(null,vec__614,(1),null);
var vec__617 = cljs.core.async.impl.ioc_macros_runtime.add_instruction.call(null,cljs.core.async.impl.ioc_macros_runtime.__GT_Const.call(null,new cljs.core.Keyword("cljs.core.async.impl.ioc-macros-runtime","value","cljs.core.async.impl.ioc-macros-runtime/value",(1763202694)))).call(null,plan_583__$11);
var ret = cljs.core.nth.call(null,vec__617,(0),null);
var plan_583__$12 = cljs.core.nth.call(null,vec__617,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ret,plan_583__$12], null);
});
;})(finally_fn,catch_fn,finally$,body__$1,catch$,vec__580,seq__581,first__582,seq__581__$1,ex,first__582__$1,seq__581__$2,ex_bind,catch_body,body__$2,vec__577,seq__578,first__579,seq__578__$1,_,body))
}));
cljs.core._add_method.call(null,cljs.core.async.impl.ioc_macros_runtime.sexpr_to_ssa,new cljs.core.Symbol(null,"recur","recur",(1202958259),null),(function (p__673){
var vec__674 = p__673;
var seq__675 = cljs.core.seq.call(null,vec__674);
var first__676 = cljs.core.first.call(null,seq__675);
var seq__675__$1 = cljs.core.next.call(null,seq__675);
var _ = first__676;
var vals = seq__675__$1;
return ((function (vec__674,seq__675,first__676,seq__675__$1,_,vals){
return (function (plan_677){
var vec__678 = cljs.core.async.impl.ioc_macros_runtime.all.call(null,cljs.core.map.call(null,cljs.core.async.impl.ioc_macros_runtime.item_to_ssa,vals)).call(null,plan_677);
var val_ids = cljs.core.nth.call(null,vec__678,(0),null);
var plan_677__$1 = cljs.core.nth.call(null,vec__678,(1),null);
var vec__681 = cljs.core.async.impl.ioc_macros_runtime.get_binding.call(null,new cljs.core.Keyword(null,"recur-nodes","recur-nodes",(2077600963))).call(null,plan_677__$1);
var recurs = cljs.core.nth.call(null,vec__681,(0),null);
var plan_677__$2 = cljs.core.nth.call(null,vec__681,(1),null);
var vec__684 = (function (){
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,val_ids),cljs.core.count.call(null,recurs))){
} else {
throw (new Error(["Assert failed: ","Wrong number of arguments to recur","\n","(= (count val-ids) (count recurs))"].join('')));
}

return cljs.core.async.impl.ioc_macros_runtime.no_op.call(null);
})()
.call(null,plan_677__$2);
var ___$1 = cljs.core.nth.call(null,vec__684,(0),null);
var plan_677__$3 = cljs.core.nth.call(null,vec__684,(1),null);
var vec__687 = cljs.core.async.impl.ioc_macros_runtime.add_instruction.call(null,cljs.core.async.impl.ioc_macros_runtime.__GT_Recur.call(null,recurs,val_ids)).call(null,plan_677__$3);
var ___$2 = cljs.core.nth.call(null,vec__687,(0),null);
var plan_677__$4 = cljs.core.nth.call(null,vec__687,(1),null);
var vec__690 = cljs.core.async.impl.ioc_macros_runtime.get_binding.call(null,new cljs.core.Keyword(null,"recur-point","recur-point",(-355035890))).call(null,plan_677__$4);
var recur_point = cljs.core.nth.call(null,vec__690,(0),null);
var plan_677__$5 = cljs.core.nth.call(null,vec__690,(1),null);
var vec__693 = cljs.core.async.impl.ioc_macros_runtime.add_instruction.call(null,cljs.core.async.impl.ioc_macros_runtime.__GT_Jmp.call(null,null,recur_point)).call(null,plan_677__$5);
var ___$3 = cljs.core.nth.call(null,vec__693,(0),null);
var plan_677__$6 = cljs.core.nth.call(null,vec__693,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.core.async.impl.ioc-macros-runtime","terminated","cljs.core.async.impl.ioc-macros-runtime/terminated",(-177180433)),plan_677__$6], null);
});
;})(vec__674,seq__675,first__676,seq__675__$1,_,vals))
}));
cljs.core._add_method.call(null,cljs.core.async.impl.ioc_macros_runtime.sexpr_to_ssa,new cljs.core.Symbol(null,"if","if",(1181717262),null),(function (p__696){
var vec__697 = p__696;
var _ = cljs.core.nth.call(null,vec__697,(0),null);
var test = cljs.core.nth.call(null,vec__697,(1),null);
var then = cljs.core.nth.call(null,vec__697,(2),null);
var else$ = cljs.core.nth.call(null,vec__697,(3),null);
return ((function (vec__697,_,test,then,else$){
return (function (plan_700){
var vec__701 = cljs.core.async.impl.ioc_macros_runtime.item_to_ssa.call(null,test).call(null,plan_700);
var test_id = cljs.core.nth.call(null,vec__701,(0),null);
var plan_700__$1 = cljs.core.nth.call(null,vec__701,(1),null);
var vec__704 = cljs.core.async.impl.ioc_macros_runtime.add_block.call(null).call(null,plan_700__$1);
var then_blk = cljs.core.nth.call(null,vec__704,(0),null);
var plan_700__$2 = cljs.core.nth.call(null,vec__704,(1),null);
var vec__707 = cljs.core.async.impl.ioc_macros_runtime.add_block.call(null).call(null,plan_700__$2);
var else_blk = cljs.core.nth.call(null,vec__707,(0),null);
var plan_700__$3 = cljs.core.nth.call(null,vec__707,(1),null);
var vec__710 = cljs.core.async.impl.ioc_macros_runtime.add_block.call(null).call(null,plan_700__$3);
var final_blk = cljs.core.nth.call(null,vec__710,(0),null);
var plan_700__$4 = cljs.core.nth.call(null,vec__710,(1),null);
var vec__713 = cljs.core.async.impl.ioc_macros_runtime.add_instruction.call(null,cljs.core.async.impl.ioc_macros_runtime.__GT_CondBr.call(null,test_id,then_blk,else_blk)).call(null,plan_700__$4);
var ___$1 = cljs.core.nth.call(null,vec__713,(0),null);
var plan_700__$5 = cljs.core.nth.call(null,vec__713,(1),null);
var vec__716 = cljs.core.async.impl.ioc_macros_runtime.set_block.call(null,then_blk).call(null,plan_700__$5);
var ___$2 = cljs.core.nth.call(null,vec__716,(0),null);
var plan_700__$6 = cljs.core.nth.call(null,vec__716,(1),null);
var vec__719 = cljs.core.async.impl.ioc_macros_runtime.item_to_ssa.call(null,then).call(null,plan_700__$6);
var then_id = cljs.core.nth.call(null,vec__719,(0),null);
var plan_700__$7 = cljs.core.nth.call(null,vec__719,(1),null);
var vec__722 = ((cljs.core.not_EQ_.call(null,then_id,new cljs.core.Keyword("cljs.core.async.impl.ioc-macros-runtime","terminated","cljs.core.async.impl.ioc-macros-runtime/terminated",(-177180433))))?((function (vec__701,test_id,plan_700__$1,vec__704,then_blk,plan_700__$2,vec__707,else_blk,plan_700__$3,vec__710,final_blk,plan_700__$4,vec__713,___$1,plan_700__$5,vec__716,___$2,plan_700__$6,vec__719,then_id,plan_700__$7,vec__697,_,test,then,else$){
return (function (plan_740){
var vec__741 = cljs.core.async.impl.ioc_macros_runtime.add_instruction.call(null,cljs.core.async.impl.ioc_macros_runtime.__GT_Jmp.call(null,then_id,final_blk)).call(null,plan_740);
var ___$3 = cljs.core.nth.call(null,vec__741,(0),null);
var plan_740__$1 = cljs.core.nth.call(null,vec__741,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [then_id,plan_740__$1], null);
});})(vec__701,test_id,plan_700__$1,vec__704,then_blk,plan_700__$2,vec__707,else_blk,plan_700__$3,vec__710,final_blk,plan_700__$4,vec__713,___$1,plan_700__$5,vec__716,___$2,plan_700__$6,vec__719,then_id,plan_700__$7,vec__697,_,test,then,else$))
:cljs.core.async.impl.ioc_macros_runtime.no_op.call(null)).call(null,plan_700__$7);
var ___$3 = cljs.core.nth.call(null,vec__722,(0),null);
var plan_700__$8 = cljs.core.nth.call(null,vec__722,(1),null);
var vec__725 = cljs.core.async.impl.ioc_macros_runtime.set_block.call(null,else_blk).call(null,plan_700__$8);
var ___$4 = cljs.core.nth.call(null,vec__725,(0),null);
var plan_700__$9 = cljs.core.nth.call(null,vec__725,(1),null);
var vec__728 = cljs.core.async.impl.ioc_macros_runtime.item_to_ssa.call(null,else$).call(null,plan_700__$9);
var else_id = cljs.core.nth.call(null,vec__728,(0),null);
var plan_700__$10 = cljs.core.nth.call(null,vec__728,(1),null);
var vec__731 = ((cljs.core.not_EQ_.call(null,else_id,new cljs.core.Keyword("cljs.core.async.impl.ioc-macros-runtime","terminated","cljs.core.async.impl.ioc-macros-runtime/terminated",(-177180433))))?((function (vec__701,test_id,plan_700__$1,vec__704,then_blk,plan_700__$2,vec__707,else_blk,plan_700__$3,vec__710,final_blk,plan_700__$4,vec__713,___$1,plan_700__$5,vec__716,___$2,plan_700__$6,vec__719,then_id,plan_700__$7,vec__722,___$3,plan_700__$8,vec__725,___$4,plan_700__$9,vec__728,else_id,plan_700__$10,vec__697,_,test,then,else$){
return (function (plan_744){
var vec__745 = cljs.core.async.impl.ioc_macros_runtime.add_instruction.call(null,cljs.core.async.impl.ioc_macros_runtime.__GT_Jmp.call(null,else_id,final_blk)).call(null,plan_744);
var ___$5 = cljs.core.nth.call(null,vec__745,(0),null);
var plan_744__$1 = cljs.core.nth.call(null,vec__745,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [then_id,plan_744__$1], null);
});})(vec__701,test_id,plan_700__$1,vec__704,then_blk,plan_700__$2,vec__707,else_blk,plan_700__$3,vec__710,final_blk,plan_700__$4,vec__713,___$1,plan_700__$5,vec__716,___$2,plan_700__$6,vec__719,then_id,plan_700__$7,vec__722,___$3,plan_700__$8,vec__725,___$4,plan_700__$9,vec__728,else_id,plan_700__$10,vec__697,_,test,then,else$))
:cljs.core.async.impl.ioc_macros_runtime.no_op.call(null)).call(null,plan_700__$10);
var ___$5 = cljs.core.nth.call(null,vec__731,(0),null);
var plan_700__$11 = cljs.core.nth.call(null,vec__731,(1),null);
var vec__734 = cljs.core.async.impl.ioc_macros_runtime.set_block.call(null,final_blk).call(null,plan_700__$11);
var ___$6 = cljs.core.nth.call(null,vec__734,(0),null);
var plan_700__$12 = cljs.core.nth.call(null,vec__734,(1),null);
var vec__737 = cljs.core.async.impl.ioc_macros_runtime.add_instruction.call(null,cljs.core.async.impl.ioc_macros_runtime.__GT_Const.call(null,new cljs.core.Keyword("cljs.core.async.impl.ioc-macros-runtime","value","cljs.core.async.impl.ioc-macros-runtime/value",(1763202694)))).call(null,plan_700__$12);
var val_id = cljs.core.nth.call(null,vec__737,(0),null);
var plan_700__$13 = cljs.core.nth.call(null,vec__737,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [val_id,plan_700__$13], null);
});
;})(vec__697,_,test,then,else$))
}));
cljs.core._add_method.call(null,cljs.core.async.impl.ioc_macros_runtime.sexpr_to_ssa,new cljs.core.Symbol(null,"fn*","fn*",(-752876845),null),(function() { 
var G__755__delegate = function (fn_expr){
return (function (plan_748){
var vec__749 = cljs.core.async.impl.ioc_macros_runtime.get_binding.call(null,new cljs.core.Keyword(null,"locals","locals",(535295783))).call(null,plan_748);
var locals = cljs.core.nth.call(null,vec__749,(0),null);
var plan_748__$1 = cljs.core.nth.call(null,vec__749,(1),null);
var vec__752 = cljs.core.async.impl.ioc_macros_runtime.add_instruction.call(null,cljs.core.async.impl.ioc_macros_runtime.__GT_XFn.call(null,fn_expr,cljs.core.keys.call(null,locals),cljs.core.vals.call(null,locals))).call(null,plan_748__$1);
var fn_id = cljs.core.nth.call(null,vec__752,(0),null);
var plan_748__$2 = cljs.core.nth.call(null,vec__752,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fn_id,plan_748__$2], null);
});
};
var G__755 = function (var_args){
var fn_expr = null;
if (arguments.length > 0) {
var G__756__i = 0, G__756__a = new Array(arguments.length -  0);
while (G__756__i < G__756__a.length) {G__756__a[G__756__i] = arguments[G__756__i + 0]; ++G__756__i;}
  fn_expr = new cljs.core.IndexedSeq(G__756__a,0,null);
} 
return G__755__delegate.call(this,fn_expr);};
G__755.cljs$lang$maxFixedArity = 0;
G__755.cljs$lang$applyTo = (function (arglist__757){
var fn_expr = cljs.core.seq(arglist__757);
return G__755__delegate(fn_expr);
});
G__755.cljs$core$IFn$_invoke$arity$variadic = G__755__delegate;
return G__755;
})()
);
cljs.core.async.impl.ioc_macros_runtime.special_override_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Symbol(null,"case","case",(-1510733573),null),null,new cljs.core.Symbol("clojure.core","case","clojure.core/case",(-1775709118),null),null,new cljs.core.Symbol(null,"try","try",(-1273693247),null),null,new cljs.core.Symbol("clojure.core","try","clojure.core/try",(-433037384),null),null], null), null);
cljs.core.async.impl.ioc_macros_runtime.expand = (function cljs$core$async$impl$ioc_macros_runtime$expand(locals,env,form){
var form__$1 = form;
while(true){
if(!(cljs.core.seq_QMARK_.call(null,form__$1))){
return form__$1;
} else {
var vec__758 = form__$1;
var seq__759 = cljs.core.seq.call(null,vec__758);
var first__760 = cljs.core.first.call(null,seq__759);
var seq__759__$1 = cljs.core.next.call(null,seq__759);
var s = first__760;
var r = seq__759__$1;
if((s instanceof cljs.core.Symbol)){
if(cljs.core.truth_((function (){var or__20917__auto__ = cljs.core.get.call(null,locals,s);
if(cljs.core.truth_(or__20917__auto__)){
return or__20917__auto__;
} else {
return cljs.core.async.impl.ioc_macros_runtime.special_override_QMARK_.call(null,s);
}
})())){
return form__$1;
} else {
var new_env = cljs.core.update_in.call(null,env,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"locals","locals",(535295783))], null),cljs.core.merge,locals);
var expanded = cljs.analyzer.macroexpand_1.call(null,new_env,form__$1);
if(cljs.core._EQ_.call(null,expanded,form__$1)){
return form__$1;
} else {
var G__761 = expanded;
form__$1 = G__761;
continue;
}
}
} else {
return form__$1;
}
}
break;
}
});
cljs.core.async.impl.ioc_macros_runtime.terminate_custom = (function cljs$core$async$impl$ioc_macros_runtime$terminate_custom(vals,term){
return (function (plan_762){
var vec__763 = cljs.core.async.impl.ioc_macros_runtime.add_block.call(null).call(null,plan_762);
var blk = cljs.core.nth.call(null,vec__763,(0),null);
var plan_762__$1 = cljs.core.nth.call(null,vec__763,(1),null);
var vec__766 = cljs.core.async.impl.ioc_macros_runtime.all.call(null,cljs.core.map.call(null,cljs.core.async.impl.ioc_macros_runtime.item_to_ssa,vals)).call(null,plan_762__$1);
var vals__$1 = cljs.core.nth.call(null,vec__766,(0),null);
var plan_762__$2 = cljs.core.nth.call(null,vec__766,(1),null);
var vec__769 = cljs.core.async.impl.ioc_macros_runtime.add_instruction.call(null,cljs.core.async.impl.ioc_macros_runtime.__GT_CustomTerminator.call(null,term,blk,vals__$1)).call(null,plan_762__$2);
var val = cljs.core.nth.call(null,vec__769,(0),null);
var plan_762__$3 = cljs.core.nth.call(null,vec__769,(1),null);
var vec__772 = cljs.core.async.impl.ioc_macros_runtime.set_block.call(null,blk).call(null,plan_762__$3);
var _ = cljs.core.nth.call(null,vec__772,(0),null);
var plan_762__$4 = cljs.core.nth.call(null,vec__772,(1),null);
var vec__775 = cljs.core.async.impl.ioc_macros_runtime.add_instruction.call(null,cljs.core.async.impl.ioc_macros_runtime.__GT_Const.call(null,new cljs.core.Keyword("cljs.core.async.impl.ioc-macros-runtime","value","cljs.core.async.impl.ioc-macros-runtime/value",(1763202694)))).call(null,plan_762__$4);
var res = cljs.core.nth.call(null,vec__775,(0),null);
var plan_762__$5 = cljs.core.nth.call(null,vec__775,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [res,plan_762__$5], null);
});
});
cljs.core.async.impl.ioc_macros_runtime.fixup_aliases = (function cljs$core$async$impl$ioc_macros_runtime$fixup_aliases(sym,env){
var aliases = cljs.core.PersistentVector.EMPTY;
if(cljs.core.not.call(null,cljs.core.namespace.call(null,sym))){
return sym;
} else {
var temp__20271__auto__ = (function (){var or__20917__auto__ = cljs.core.get_in.call(null,env,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"requires-macros","requires-macros",(-1690805109)),cljs.core.symbol.call(null,cljs.core.namespace.call(null,sym))], null));
if(cljs.core.truth_(or__20917__auto__)){
return or__20917__auto__;
} else {
return cljs.core.get_in.call(null,env,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"requires","requires",(-1201390927)),cljs.core.symbol.call(null,cljs.core.namespace.call(null,sym))], null));
}
})();
if(cljs.core.truth_(temp__20271__auto__)){
var ns = temp__20271__auto__;
return cljs.core.symbol.call(null,cljs.core.name.call(null,ns),cljs.core.name.call(null,sym));
} else {
return sym;
}
}
});
cljs.core._add_method.call(null,cljs.core.async.impl.ioc_macros_runtime._item_to_ssa,new cljs.core.Keyword(null,"list","list",(765357683)),(function (lst){
return (function (plan_778){
var vec__779 = cljs.core.async.impl.ioc_macros_runtime.get_binding.call(null,new cljs.core.Keyword(null,"env","env",(-1815813235))).call(null,plan_778);
var env = cljs.core.nth.call(null,vec__779,(0),null);
var plan_778__$1 = cljs.core.nth.call(null,vec__779,(1),null);
var vec__782 = cljs.core.async.impl.ioc_macros_runtime.get_binding.call(null,new cljs.core.Keyword(null,"locals","locals",(535295783))).call(null,plan_778__$1);
var locals = cljs.core.nth.call(null,vec__782,(0),null);
var plan_778__$2 = cljs.core.nth.call(null,vec__782,(1),null);
var vec__785 = cljs.core.async.impl.ioc_macros_runtime.get_binding.call(null,new cljs.core.Keyword(null,"terminators","terminators",(-1448255712))).call(null,plan_778__$2);
var terminators = cljs.core.nth.call(null,vec__785,(0),null);
var plan_778__$3 = cljs.core.nth.call(null,vec__785,(1),null);
var vec__788 = (function (){var exp = cljs.core.async.impl.ioc_macros_runtime.expand.call(null,locals,env,lst);
if(cljs.core.seq_QMARK_.call(null,exp)){
if((cljs.core.first.call(null,exp) instanceof cljs.core.Symbol)){
var f = cljs.core.async.impl.ioc_macros_runtime.fixup_aliases.call(null,cljs.core.first.call(null,exp),env);
if(cljs.core.truth_(cljs.core.async.impl.ioc_macros_runtime.is_special_QMARK_.call(null,f))){
return cljs.core.async.impl.ioc_macros_runtime.sexpr_to_ssa.call(null,exp);
} else {
if(cljs.core.truth_(cljs.core.get.call(null,locals,f))){
return cljs.core.async.impl.ioc_macros_runtime.default_sexpr.call(null,exp);
} else {
if(cljs.core.truth_(cljs.core.get.call(null,terminators,f))){
return cljs.core.async.impl.ioc_macros_runtime.terminate_custom.call(null,cljs.core.next.call(null,exp),cljs.core.get.call(null,terminators,f));
} else {
return cljs.core.async.impl.ioc_macros_runtime.default_sexpr.call(null,exp);

}
}
}
} else {
return cljs.core.async.impl.ioc_macros_runtime.default_sexpr.call(null,exp);
}
} else {
return cljs.core.async.impl.ioc_macros_runtime.item_to_ssa.call(null,exp);
}
})().call(null,plan_778__$3);
var val = cljs.core.nth.call(null,vec__788,(0),null);
var plan_778__$4 = cljs.core.nth.call(null,vec__788,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [val,plan_778__$4], null);
});
}));
cljs.core._add_method.call(null,cljs.core.async.impl.ioc_macros_runtime._item_to_ssa,new cljs.core.Keyword(null,"default","default",(-1987822328)),(function (x){
return (function (plan){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,plan], null);
});
}));
cljs.core._add_method.call(null,cljs.core.async.impl.ioc_macros_runtime._item_to_ssa,new cljs.core.Keyword(null,"symbol","symbol",(-1038572696)),(function (x){
return (function (plan_791){
var vec__792 = cljs.core.async.impl.ioc_macros_runtime.get_binding.call(null,new cljs.core.Keyword(null,"locals","locals",(535295783))).call(null,plan_791);
var locals = cljs.core.nth.call(null,vec__792,(0),null);
var plan_791__$1 = cljs.core.nth.call(null,vec__792,(1),null);
var vec__795 = ((cljs.core.contains_QMARK_.call(null,locals,x))?((function (vec__792,locals,plan_791__$1){
return (function (p){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [locals.call(null,x),p], null);
});})(vec__792,locals,plan_791__$1))
:((function (vec__792,locals,plan_791__$1){
return (function (p){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,p], null);
});})(vec__792,locals,plan_791__$1))
).call(null,plan_791__$1);
var inst_id = cljs.core.nth.call(null,vec__795,(0),null);
var plan_791__$2 = cljs.core.nth.call(null,vec__795,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [inst_id,plan_791__$2], null);
});
}));
cljs.core._add_method.call(null,cljs.core.async.impl.ioc_macros_runtime._item_to_ssa,new cljs.core.Keyword(null,"map","map",(1371690461)),(function (x){
return cljs.core.async.impl.ioc_macros_runtime._item_to_ssa.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","hash-map","cljs.core/hash-map",(303385767),null)),cljs.core.mapcat.call(null,cljs.core.identity,x))));
}));
cljs.core._add_method.call(null,cljs.core.async.impl.ioc_macros_runtime._item_to_ssa,new cljs.core.Keyword(null,"vector","vector",(1902966158)),(function (x){
return cljs.core.async.impl.ioc_macros_runtime._item_to_ssa.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","vector","cljs.core/vector",(720641726),null)),x)));
}));
cljs.core._add_method.call(null,cljs.core.async.impl.ioc_macros_runtime._item_to_ssa,new cljs.core.Keyword(null,"set","set",(304602554)),(function (x){
return cljs.core.async.impl.ioc_macros_runtime._item_to_ssa.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","hash-set","cljs.core/hash-set",(1130426749),null)),x)));
}));
/**
 * Takes an sexpr and returns a hashmap that describes the execution flow of the sexpr as
 * a series of SSA style blocks.
 */
cljs.core.async.impl.ioc_macros_runtime.parse_to_state_machine = (function cljs$core$async$impl$ioc_macros_runtime$parse_to_state_machine(body,env,terminators){
return cljs.core.async.impl.ioc_macros_runtime.get_plan.call(null,(function (plan_798){
var vec__799 = cljs.core.async.impl.ioc_macros_runtime.push_binding.call(null,new cljs.core.Keyword(null,"env","env",(-1815813235)),env).call(null,plan_798);
var _ = cljs.core.nth.call(null,vec__799,(0),null);
var plan_798__$1 = cljs.core.nth.call(null,vec__799,(1),null);
var vec__802 = cljs.core.async.impl.ioc_macros_runtime.push_binding.call(null,new cljs.core.Keyword(null,"locals","locals",(535295783)),cljs.core.zipmap.call(null,new cljs.core.Keyword(null,"locals","locals",(535295783)).cljs$core$IFn$_invoke$arity$1(cljs.core.keys.call(null,env)),new cljs.core.Keyword(null,"locals","locals",(535295783)).cljs$core$IFn$_invoke$arity$1(cljs.core.keys.call(null,env)))).call(null,plan_798__$1);
var ___$1 = cljs.core.nth.call(null,vec__802,(0),null);
var plan_798__$2 = cljs.core.nth.call(null,vec__802,(1),null);
var vec__805 = cljs.core.async.impl.ioc_macros_runtime.push_binding.call(null,new cljs.core.Keyword(null,"terminators","terminators",(-1448255712)),terminators).call(null,plan_798__$2);
var ___$2 = cljs.core.nth.call(null,vec__805,(0),null);
var plan_798__$3 = cljs.core.nth.call(null,vec__805,(1),null);
var vec__808 = cljs.core.async.impl.ioc_macros_runtime.add_block.call(null).call(null,plan_798__$3);
var blk = cljs.core.nth.call(null,vec__808,(0),null);
var plan_798__$4 = cljs.core.nth.call(null,vec__808,(1),null);
var vec__811 = cljs.core.async.impl.ioc_macros_runtime.set_block.call(null,blk).call(null,plan_798__$4);
var ___$3 = cljs.core.nth.call(null,vec__811,(0),null);
var plan_798__$5 = cljs.core.nth.call(null,vec__811,(1),null);
var vec__814 = cljs.core.async.impl.ioc_macros_runtime.all.call(null,cljs.core.map.call(null,cljs.core.async.impl.ioc_macros_runtime.item_to_ssa,body)).call(null,plan_798__$5);
var ids = cljs.core.nth.call(null,vec__814,(0),null);
var plan_798__$6 = cljs.core.nth.call(null,vec__814,(1),null);
var vec__817 = cljs.core.async.impl.ioc_macros_runtime.add_instruction.call(null,cljs.core.async.impl.ioc_macros_runtime.__GT_Return.call(null,cljs.core.last.call(null,ids))).call(null,plan_798__$6);
var term_id = cljs.core.nth.call(null,vec__817,(0),null);
var plan_798__$7 = cljs.core.nth.call(null,vec__817,(1),null);
var vec__820 = cljs.core.async.impl.ioc_macros_runtime.pop_binding.call(null,new cljs.core.Keyword(null,"terminators","terminators",(-1448255712))).call(null,plan_798__$7);
var ___$4 = cljs.core.nth.call(null,vec__820,(0),null);
var plan_798__$8 = cljs.core.nth.call(null,vec__820,(1),null);
var vec__823 = cljs.core.async.impl.ioc_macros_runtime.pop_binding.call(null,new cljs.core.Keyword(null,"locals","locals",(535295783))).call(null,plan_798__$8);
var ___$5 = cljs.core.nth.call(null,vec__823,(0),null);
var plan_798__$9 = cljs.core.nth.call(null,vec__823,(1),null);
var vec__826 = cljs.core.async.impl.ioc_macros_runtime.pop_binding.call(null,new cljs.core.Keyword(null,"env","env",(-1815813235))).call(null,plan_798__$9);
var ___$6 = cljs.core.nth.call(null,vec__826,(0),null);
var plan_798__$10 = cljs.core.nth.call(null,vec__826,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [term_id,plan_798__$10], null);
}));
});
cljs.core.async.impl.ioc_macros_runtime.index_instruction = (function cljs$core$async$impl$ioc_macros_runtime$index_instruction(blk_id,idx,inst){
var idx__$1 = cljs.core.reduce.call(null,(function (acc,id){
return cljs.core.update_in.call(null,acc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"read-in","read-in",(790964176))], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),blk_id);
}),idx,cljs.core.filter.call(null,cljs.core.async.impl.ioc_macros_runtime.instruction_QMARK_,cljs.core.async.impl.ioc_macros_runtime.reads_from.call(null,inst)));
var idx__$2 = cljs.core.reduce.call(null,((function (idx__$1){
return (function (acc,id){
return cljs.core.update_in.call(null,acc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"written-in","written-in",(1332732034))], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),blk_id);
});})(idx__$1))
,idx__$1,cljs.core.filter.call(null,cljs.core.async.impl.ioc_macros_runtime.instruction_QMARK_,cljs.core.async.impl.ioc_macros_runtime.writes_to.call(null,inst)));
return idx__$2;
});
cljs.core.async.impl.ioc_macros_runtime.index_block = (function cljs$core$async$impl$ioc_macros_runtime$index_block(idx,p__829){
var vec__830 = p__829;
var blk_id = cljs.core.nth.call(null,vec__830,(0),null);
var blk = cljs.core.nth.call(null,vec__830,(1),null);
return cljs.core.reduce.call(null,cljs.core.partial.call(null,cljs.core.async.impl.ioc_macros_runtime.index_instruction,blk_id),idx,blk);
});
cljs.core.async.impl.ioc_macros_runtime.index_state_machine = (function cljs$core$async$impl$ioc_macros_runtime$index_state_machine(machine){
return cljs.core.reduce.call(null,cljs.core.async.impl.ioc_macros_runtime.index_block,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"blocks","blocks",(-610462153)).cljs$core$IFn$_invoke$arity$1(machine));
});
cljs.core.async.impl.ioc_macros_runtime.id_for_inst = (function cljs$core$async$impl$ioc_macros_runtime$id_for_inst(m,sym){
var temp__20271__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,m),sym);
if(cljs.core.truth_(temp__20271__auto__)){
var i = temp__20271__auto__;
return i;
} else {
var next_idx = cljs.core.get.call(null,cljs.core.deref.call(null,m),new cljs.core.Keyword("cljs.core.async.impl.ioc-macros-runtime","next-idx","cljs.core.async.impl.ioc-macros-runtime/next-idx",(1413817431)));
cljs.core.swap_BANG_.call(null,m,cljs.core.assoc,sym,next_idx);

cljs.core.swap_BANG_.call(null,m,cljs.core.assoc,new cljs.core.Keyword("cljs.core.async.impl.ioc-macros-runtime","next-idx","cljs.core.async.impl.ioc-macros-runtime/next-idx",(1413817431)),(next_idx + (1)));

return next_idx;
}
});
/**
 * Returns true if this value should be saved in the state hash map
 */
cljs.core.async.impl.ioc_macros_runtime.persistent_value_QMARK_ = (function cljs$core$async$impl$ioc_macros_runtime$persistent_value_QMARK_(index,value){
return (cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"read-in","read-in",(790964176)).cljs$core$IFn$_invoke$arity$1(value.call(null,index)),new cljs.core.Keyword(null,"written-in","written-in",(1332732034)).cljs$core$IFn$_invoke$arity$1(value.call(null,index)))) || ((cljs.core.count.call(null,new cljs.core.Keyword(null,"read-in","read-in",(790964176)).cljs$core$IFn$_invoke$arity$1(value.call(null,index))) > (1)));
});
cljs.core.async.impl.ioc_macros_runtime.count_persistent_values = (function cljs$core$async$impl$ioc_macros_runtime$count_persistent_values(index){
return cljs.core.count.call(null,cljs.core.filter.call(null,cljs.core.partial.call(null,cljs.core.async.impl.ioc_macros_runtime.persistent_value_QMARK_,index),cljs.core.filter.call(null,cljs.core.async.impl.ioc_macros_runtime.instruction_QMARK_,cljs.core.keys.call(null,index))));
});
cljs.core.async.impl.ioc_macros_runtime.build_block_preamble = (function cljs$core$async$impl$ioc_macros_runtime$build_block_preamble(local_map,idx,state_sym,blk){
var args = cljs.core.vec.call(null,cljs.core.set.call(null,cljs.core.filter.call(null,cljs.core.partial.call(null,cljs.core.async.impl.ioc_macros_runtime.persistent_value_QMARK_,idx),cljs.core.filter.call(null,cljs.core.async.impl.ioc_macros_runtime.instruction_QMARK_,cljs.core.mapcat.call(null,cljs.core.async.impl.ioc_macros_runtime.reads_from,blk)))));
if(cljs.core.empty_QMARK_.call(null,args)){
return cljs.core.PersistentVector.EMPTY;
} else {
return cljs.core.mapcat.call(null,((function (args){
return (function (sym){
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(function (){var x__22880__auto__ = sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22880__auto__);
})(),(function (){var x__22880__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","aget","cljs.core/aget",(6345791),null)),(function (){var x__22880__auto__ = state_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22880__auto__);
})(),(function (){var x__22880__auto__ = cljs.core.async.impl.ioc_macros_runtime.id_for_inst.call(null,local_map,sym);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22880__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22880__auto__);
})())));
});})(args))
,args);
}
});
cljs.core.async.impl.ioc_macros_runtime.build_block_body = (function cljs$core$async$impl$ioc_macros_runtime$build_block_body(state_sym,blk){
return cljs.core.mapcat.call(null,(function (p1__2_SHARP_){
return cljs.core.async.impl.ioc_macros_runtime.emit_instruction.call(null,p1__2_SHARP_,state_sym);
}),cljs.core.butlast.call(null,blk));
});
cljs.core.async.impl.ioc_macros_runtime.build_new_state = (function cljs$core$async$impl$ioc_macros_runtime$build_new_state(local_map,idx,state_sym,blk){
var results = cljs.core.vec.call(null,cljs.core.set.call(null,cljs.core.filter.call(null,cljs.core.partial.call(null,cljs.core.async.impl.ioc_macros_runtime.persistent_value_QMARK_,idx),cljs.core.filter.call(null,cljs.core.async.impl.ioc_macros_runtime.instruction_QMARK_,cljs.core.mapcat.call(null,cljs.core.async.impl.ioc_macros_runtime.writes_to,blk)))));
var results__$1 = cljs.core.interleave.call(null,cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.async.impl.ioc_macros_runtime.id_for_inst,local_map),results),results);
if(!(cljs.core.empty_QMARK_.call(null,results__$1))){
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core.async.impl.ioc-macros","aset-all!","cljs.core.async.impl.ioc-macros/aset-all!",(2072147987),null)),(function (){var x__22880__auto__ = state_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22880__auto__);
})(),results__$1));
} else {
return state_sym;
}
});
cljs.core.async.impl.ioc_macros_runtime.emit_state_machine = (function cljs$core$async$impl$ioc_macros_runtime$emit_state_machine(machine,num_user_params,custom_terminators){
var index = cljs.core.async.impl.ioc_macros_runtime.index_state_machine.call(null,machine);
var state_sym = cljs.core.with_meta.call(null,cljs.core.gensym.call(null,"state_"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Symbol(null,"objects","objects",(-554722035),null)], null));
var local_start_idx = (num_user_params + (6));
var state_arr_size = (local_start_idx + cljs.core.async.impl.ioc_macros_runtime.count_persistent_values.call(null,index));
var local_map = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.core.async.impl.ioc-macros-runtime","next-idx","cljs.core.async.impl.ioc-macros-runtime/next-idx",(1413817431)),local_start_idx], null));
var block_catches = new cljs.core.Keyword(null,"block-catches","block-catches",(-193801771)).cljs$core$IFn$_invoke$arity$1(machine);
var state_val_sym = cljs.core.gensym.call(null,"state_val_");
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null)),(function (){var x__22880__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"switch__3__auto__","switch__3__auto__",(-1951648307),null)),(function (){var x__22880__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",(-1065745098),null)),(function (){var x__22880__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(function (){var x__22880__auto__ = state_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22880__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22880__auto__);
})(),(function (){var x__22880__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null)),(function (){var x__22880__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(function (){var x__22880__auto__ = state_val_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22880__auto__);
})(),(function (){var x__22880__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","aget","cljs.core/aget",(6345791),null)),(function (){var x__22880__auto__ = state_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22880__auto__);
})(),(function (){var x__22880__auto__ = (1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22880__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22880__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22880__auto__);
})(),(function (){var x__22880__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","cond","cljs.core/cond",(2005388338),null)),cljs.core.mapcat.call(null,((function (index,state_sym,local_start_idx,state_arr_size,local_map,block_catches,state_val_sym){
return (function (p__893){
var vec__894 = p__893;
var id = cljs.core.nth.call(null,vec__894,(0),null);
var blk = cljs.core.nth.call(null,vec__894,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","==","cljs.core/==",(-632471488),null)),(function (){var x__22880__auto__ = state_val_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22880__auto__);
})(),(function (){var x__22880__auto__ = id;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22880__auto__);
})())),cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null)),(function (){var x__22880__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core.concat.call(null,cljs.core.async.impl.ioc_macros_runtime.build_block_preamble.call(null,local_map,index,state_sym,blk),cljs.core.async.impl.ioc_macros_runtime.build_block_body.call(null,state_sym,blk)),(function (){var x__22880__auto__ = state_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22880__auto__);
})(),(function (){var x__22880__auto__ = cljs.core.async.impl.ioc_macros_runtime.build_new_state.call(null,local_map,index,state_sym,blk);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22880__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22880__auto__);
})(),(function (){var x__22880__auto__ = cljs.core.async.impl.ioc_macros_runtime.terminate_block.call(null,cljs.core.last.call(null,blk),state_sym,custom_terminators);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22880__auto__);
})()))], null);
});})(index,state_sym,local_start_idx,state_arr_size,local_map,block_catches,state_val_sym))
,new cljs.core.Keyword(null,"blocks","blocks",(-610462153)).cljs$core$IFn$_invoke$arity$1(machine))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22880__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22880__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22880__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22880__auto__);
})(),(function (){var x__22880__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",(-1065745098),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"state-machine__4__auto__","state-machine__4__auto__",(233416887),null)),(function (){var x__22880__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,(function (){var x__22880__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22880__auto__);
})(),(function (){var x__22880__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core.async.impl.ioc-macros","aset-all!","cljs.core.async.impl.ioc-macros/aset-all!",(2072147987),null)),(function (){var x__22880__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","make-array","cljs.core/make-array",(-1802166799),null)),(function (){var x__22880__auto__ = state_arr_size;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22880__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22880__auto__);
})(),(function (){var x__22880__auto__ = (0);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22880__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"state-machine__4__auto__","state-machine__4__auto__",(233416887),null)),(function (){var x__22880__auto__ = (1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22880__auto__);
})(),(function (){var x__22880__auto__ = new cljs.core.Keyword(null,"start-block","start-block",(885980136)).cljs$core$IFn$_invoke$arity$1(machine);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22880__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22880__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22880__auto__);
})(),(function (){var x__22880__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,(function (){var x__22880__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(function (){var x__22880__auto__ = state_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22880__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22880__auto__);
})(),(function (){var x__22880__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null)),(function (){var x__22880__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ret-value__5__auto__","ret-value__5__auto__",(-1350693277),null)),(function (){var x__22880__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"try","try",(-1273693247),null)),(function (){var x__22880__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","loop","cljs.core/loop",(-1829423021),null)),(function (){var x__22880__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22880__auto__);
})(),(function (){var x__22880__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null)),(function (){var x__22880__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"result__6__auto__","result__6__auto__",(1574102581),null)),(function (){var x__22880__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"switch__3__auto__","switch__3__auto__",(-1951648307),null)),(function (){var x__22880__auto__ = state_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22880__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22880__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22880__auto__);
})(),(function (){var x__22880__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",(1181717262),null)),(function (){var x__22880__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","keyword-identical?","cljs.core/keyword-identical?",(1598491177),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"result__6__auto__","result__6__auto__",(1574102581),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"recur","recur",(-437573268)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22880__auto__);
})(),(function (){var x__22880__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",(1202958259),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22880__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"result__6__auto__","result__6__auto__",(1574102581),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22880__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22880__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22880__auto__);
})(),(function (){var x__22880__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"catch","catch",(-1616370245),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Object","js/Object",(61215323),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ex__7__auto__","ex__7__auto__",(360544839),null)),(function (){var x__22880__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core.async.impl.ioc-macros","aset-all!","cljs.core.async.impl.ioc-macros/aset-all!",(2072147987),null)),(function (){var x__22880__auto__ = state_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22880__auto__);
})(),(function (){var x__22880__auto__ = (5);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22880__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ex__7__auto__","ex__7__auto__",(360544839),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22880__auto__);
})(),(function (){var x__22880__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core.async.impl.ioc-helpers","process-exception","cljs.core.async.impl.ioc-helpers/process-exception",(699265350),null)),(function (){var x__22880__auto__ = state_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22880__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22880__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"recur","recur",(-437573268)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22880__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22880__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22880__auto__);
})(),(function (){var x__22880__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",(1181717262),null)),(function (){var x__22880__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","keyword-identical?","cljs.core/keyword-identical?",(1598491177),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ret-value__5__auto__","ret-value__5__auto__",(-1350693277),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"recur","recur",(-437573268)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22880__auto__);
})(),(function (){var x__22880__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",(1202958259),null)),(function (){var x__22880__auto__ = state_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22880__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22880__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ret-value__5__auto__","ret-value__5__auto__",(-1350693277),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22880__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22880__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22880__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22880__auto__);
})()));
});
cljs.core.async.impl.ioc_macros_runtime.async_custom_terminators = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Symbol(null,"<!","<!",(-1961915773),null),new cljs.core.Symbol("cljs.core.async.impl.ioc-helpers","take!","cljs.core.async.impl.ioc-helpers/take!",(-1259008437),null),new cljs.core.Symbol("cljs.core.async","<!","cljs.core.async/<!",(1278951036),null),new cljs.core.Symbol("cljs.core.async.impl.ioc-helpers","take!","cljs.core.async.impl.ioc-helpers/take!",(-1259008437),null),new cljs.core.Symbol(null,">!",">!",(-1080922249),null),new cljs.core.Symbol("cljs.core.async.impl.ioc-helpers","put!","cljs.core.async.impl.ioc-helpers/put!",(1392345450),null),new cljs.core.Symbol("cljs.core.async",">!","cljs.core.async/>!",(-950205298),null),new cljs.core.Symbol("cljs.core.async.impl.ioc-helpers","put!","cljs.core.async.impl.ioc-helpers/put!",(1392345450),null),new cljs.core.Symbol(null,"alts!","alts!",(104119866),null),new cljs.core.Symbol("cljs.core.async","ioc-alts!","cljs.core.async/ioc-alts!",(-1272027642),null),new cljs.core.Symbol("cljs.core.async","alts!","cljs.core.async/alts!",(1340091011),null),new cljs.core.Symbol("cljs.core.async","ioc-alts!","cljs.core.async/ioc-alts!",(-1272027642),null),new cljs.core.Keyword(null,"Return","Return",(-1300089037)),new cljs.core.Symbol("cljs.core.async.impl.ioc-helpers","return-chan","cljs.core.async.impl.ioc-helpers/return-chan",(-67158632),null)], null);
cljs.core.async.impl.ioc_macros_runtime.state_machine = (function cljs$core$async$impl$ioc_macros_runtime$state_machine(body,num_user_params,env,user_transitions){
return cljs.core.async.impl.ioc_macros_runtime.emit_state_machine.call(null,cljs.core.second.call(null,cljs.core.async.impl.ioc_macros_runtime.parse_to_state_machine.call(null,body,env,user_transitions)),num_user_params,user_transitions);
});
