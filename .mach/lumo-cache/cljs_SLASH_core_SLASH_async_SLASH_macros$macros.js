goog.provide("cljs.core.async.macros$macros");
var ret__23200__auto___900 = (function (){
/**
 * Asynchronously executes the body, returning immediately to the
 *   calling thread. Additionally, any visible calls to <!, >! and alt!/alts!
 *   channel operations within the body will block (if necessary) by
 *   'parking' the calling thread rather than tying up an OS thread (or
 *   the only JS thread when in ClojureScript). Upon completion of the
 *   operation, the body will be resumed.
 * 
 *   Returns a channel which will receive the result of the body when
 *   completed
 */
cljs.core.async.macros$macros.go = (function cljs$core$async$macros$macros$go(var_args){
var args__23177__auto__ = [];
var len__23174__auto___901 = arguments.length;
var i__23175__auto___902 = (0);
while(true){
if((i__23175__auto___902 < len__23174__auto___901)){
args__23177__auto__.push((arguments[i__23175__auto___902]));

var G__903 = (i__23175__auto___902 + (1));
i__23175__auto___902 = G__903;
continue;
} else {
}
break;
}

var argseq__23178__auto__ = ((((2) < args__23177__auto__.length))?(new cljs.core.IndexedSeq(args__23177__auto__.slice((2)),(0),null)):null);
return cljs.core.async.macros$macros.go.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__23178__auto__);
});

cljs.core.async.macros$macros.go.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null)),(function (){var x__22880__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__8__auto__","c__8__auto__",(-894046096),null)),(function (){var x__22880__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core.async","chan","cljs.core.async/chan",(589627473),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,(1))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22880__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22880__auto__);
})(),(function (){var x__22880__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core.async.impl.dispatch","run","cljs.core.async.impl.dispatch/run",(1404881359),null)),(function (){var x__22880__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",(-1065745098),null)),(function (){var x__22880__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22880__auto__);
})(),(function (){var x__22880__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null)),(function (){var x__22880__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"f__9__auto__","f__9__auto__",(-1190219440),null)),(function (){var x__22880__auto__ = cljs.core.async.impl.ioc_macros_runtime.state_machine.call(null,body,(1),_AMPERSAND_env,cljs.core.async.impl.ioc_macros_runtime.async_custom_terminators);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22880__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"state__10__auto__","state__10__auto__",(1689885247),null)),(function (){var x__22880__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","->","cljs.core/->",(1488366311),null)),(function (){var x__22880__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"f__9__auto__","f__9__auto__",(-1190219440),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22880__auto__);
})(),(function (){var x__22880__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core.async.impl.ioc-macros","aset-all!","cljs.core.async.impl.ioc-macros/aset-all!",(2072147987),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core.async.impl.ioc-helpers","USER-START-IDX","cljs.core.async.impl.ioc-helpers/USER-START-IDX",(1543304914),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__8__auto__","c__8__auto__",(-894046096),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22880__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22880__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22880__auto__);
})(),(function (){var x__22880__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core.async.impl.ioc-helpers","run-state-machine-wrapped","cljs.core.async.impl.ioc-helpers/run-state-machine-wrapped",(-1978728889),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"state__10__auto__","state__10__auto__",(1689885247),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22880__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22880__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22880__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22880__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__8__auto__","c__8__auto__",(-894046096),null))));
});

cljs.core.async.macros$macros.go.cljs$lang$maxFixedArity = (2);

cljs.core.async.macros$macros.go.cljs$lang$applyTo = (function (seq897){
var G__898 = cljs.core.first.call(null,seq897);
var seq897__$1 = cljs.core.next.call(null,seq897);
var G__899 = cljs.core.first.call(null,seq897__$1);
var seq897__$2 = cljs.core.next.call(null,seq897__$1);
return cljs.core.async.macros$macros.go.cljs$core$IFn$_invoke$arity$variadic(G__898,G__899,seq897__$2);
});

return null;
})()
;
cljs.core.async.macros$macros.go.cljs$lang$macro = true;

cljs.core.async.macros$macros.do_alt = (function cljs$core$async$macros$macros$do_alt(alts,clauses){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,clauses))){
} else {
throw (new Error(["Assert failed: ","unbalanced clauses","\n","(even? (count clauses))"].join('')));
}

var clauses__$1 = cljs.core.partition.call(null,(2),clauses);
var opt_QMARK_ = ((function (clauses__$1){
return (function (p1__11_SHARP_){
return (cljs.core.first.call(null,p1__11_SHARP_) instanceof cljs.core.Keyword);
});})(clauses__$1))
;
var opts = cljs.core.filter.call(null,opt_QMARK_,clauses__$1);
var clauses__$2 = cljs.core.remove.call(null,opt_QMARK_,clauses__$1);
var vec__904 = cljs.core.reduce.call(null,((function (clauses__$1,opt_QMARK_,opts,clauses__$2){
return (function (p__907,p__908){
var vec__909 = p__907;
var clauses__$3 = cljs.core.nth.call(null,vec__909,(0),null);
var bindings = cljs.core.nth.call(null,vec__909,(1),null);
var vec__912 = p__908;
var ports = cljs.core.nth.call(null,vec__912,(0),null);
var expr = cljs.core.nth.call(null,vec__912,(1),null);
var ports__$1 = ((cljs.core.vector_QMARK_.call(null,ports))?ports:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ports], null));
var vec__915 = cljs.core.reduce.call(null,((function (ports__$1,vec__909,clauses__$3,bindings,vec__912,ports,expr,clauses__$1,opt_QMARK_,opts,clauses__$2){
return (function (p__918,port){
var vec__919 = p__918;
var ports__$2 = cljs.core.nth.call(null,vec__919,(0),null);
var bindings__$1 = cljs.core.nth.call(null,vec__919,(1),null);
if(cljs.core.vector_QMARK_.call(null,port)){
var vec__922 = port;
var port__$1 = cljs.core.nth.call(null,vec__922,(0),null);
var val = cljs.core.nth.call(null,vec__922,(1),null);
var gp = cljs.core.gensym.call(null);
var gv = cljs.core.gensym.call(null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,ports__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gp,gv], null)),cljs.core.conj.call(null,bindings__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gp,port__$1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gv,val], null))], null);
} else {
var gp = cljs.core.gensym.call(null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,ports__$2,gp),cljs.core.conj.call(null,bindings__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gp,port], null))], null);
}
});})(ports__$1,vec__909,clauses__$3,bindings,vec__912,ports,expr,clauses__$1,opt_QMARK_,opts,clauses__$2))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,bindings], null),ports__$1);
var ports__$2 = cljs.core.nth.call(null,vec__915,(0),null);
var bindings__$1 = cljs.core.nth.call(null,vec__915,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,clauses__$3,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ports__$2,expr], null)),bindings__$1], null);
});})(clauses__$1,opt_QMARK_,opts,clauses__$2))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY], null),clauses__$2);
var clauses__$3 = cljs.core.nth.call(null,vec__904,(0),null);
var bindings = cljs.core.nth.call(null,vec__904,(1),null);
var gch = cljs.core.gensym.call(null,"ch");
var gret = cljs.core.gensym.call(null,"ret");
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null)),(function (){var x__22880__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core.mapcat.call(null,cljs.core.identity,bindings),(function (){var x__22880__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"val__12__auto__","val__12__auto__",(-1600171820),null)),(function (){var x__22880__auto__ = gch;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22880__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"as","as",(1148689641))),(function (){var x__22880__auto__ = gret;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22880__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22880__auto__);
})(),(function (){var x__22880__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,(function (){var x__22880__auto__ = alts;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22880__auto__);
})(),(function (){var x__22880__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core.apply.call(null,cljs.core.concat,cljs.core.map.call(null,cljs.core.first,clauses__$3)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22880__auto__);
})(),cljs.core.apply.call(null,cljs.core.concat,opts)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22880__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22880__auto__);
})(),(function (){var x__22880__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","cond","cljs.core/cond",(2005388338),null)),cljs.core.mapcat.call(null,((function (clauses__$1,opt_QMARK_,opts,clauses__$2,vec__904,clauses__$3,bindings,gch,gret){
return (function (p__929){
var vec__930 = p__929;
var ports = cljs.core.nth.call(null,vec__930,(0),null);
var expr = cljs.core.nth.call(null,vec__930,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","or","cljs.core/or",(1201033885),null)),cljs.core.map.call(null,((function (vec__930,ports,expr,clauses__$1,opt_QMARK_,opts,clauses__$2,vec__904,clauses__$3,bindings,gch,gret){
return (function (port){
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","=","cljs.core/=",(-1891498332),null)),(function (){var x__22880__auto__ = gch;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22880__auto__);
})(),(function (){var x__22880__auto__ = ((cljs.core.vector_QMARK_.call(null,port))?cljs.core.first.call(null,port):port);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22880__auto__);
})()));
});})(vec__930,ports,expr,clauses__$1,opt_QMARK_,opts,clauses__$2,vec__904,clauses__$3,bindings,gch,gret))
,ports))),(((cljs.core.seq_QMARK_.call(null,expr)) && (cljs.core.vector_QMARK_.call(null,cljs.core.first.call(null,expr))))?cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null)),(function (){var x__22880__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(function (){var x__22880__auto__ = cljs.core.first.call(null,expr);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22880__auto__);
})(),(function (){var x__22880__auto__ = gret;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22880__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22880__auto__);
})(),cljs.core.rest.call(null,expr))):expr)], null);
});})(clauses__$1,opt_QMARK_,opts,clauses__$2,vec__904,clauses__$3,bindings,gch,gret))
,clauses__$3),(function (){var x__22880__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","=","cljs.core/=",(-1891498332),null)),(function (){var x__22880__auto__ = gch;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22880__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"default","default",(-1987822328)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22880__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"val__12__auto__","val__12__auto__",(-1600171820),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22880__auto__);
})()));
});
var ret__23200__auto___936 = (function (){
/**
 * Makes a single choice between one of several channel operations,
 *   as if by alts!, returning the value of the result expr corresponding
 *   to the operation completed. Must be called inside a (go ...) block.
 * 
 *   Each clause takes the form of:
 * 
 *   channel-op[s] result-expr
 * 
 *   where channel-ops is one of:
 * 
 *   take-port - a single port to take
 *   [take-port | [put-port put-val] ...] - a vector of ports as per alts!
 *   :default | :priority - an option for alts!
 * 
 *   and result-expr is either a list beginning with a vector, whereupon that
 *   vector will be treated as a binding for the [val port] return of the
 *   operation, else any other expression.
 * 
 *   (alt!
 *  [c t] ([val ch] (foo ch val))
 *  x ([v] v)
 *  [[out val]] :wrote
 *  :default 42)
 * 
 *   Each option may appear at most once. The choice and parking
 *   characteristics are those of alts!.
 */
cljs.core.async.macros$macros.alt_BANG_ = (function cljs$core$async$macros$macros$alt_BANG_(var_args){
var args__23177__auto__ = [];
var len__23174__auto___937 = arguments.length;
var i__23175__auto___938 = (0);
while(true){
if((i__23175__auto___938 < len__23174__auto___937)){
args__23177__auto__.push((arguments[i__23175__auto___938]));

var G__939 = (i__23175__auto___938 + (1));
i__23175__auto___938 = G__939;
continue;
} else {
}
break;
}

var argseq__23178__auto__ = ((((2) < args__23177__auto__.length))?(new cljs.core.IndexedSeq(args__23177__auto__.slice((2)),(0),null)):null);
return cljs.core.async.macros$macros.alt_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__23178__auto__);
});

cljs.core.async.macros$macros.alt_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,clauses){
return cljs.core.async.macros$macros.do_alt.call(null,new cljs.core.Symbol(null,"alts!","alts!",(104119866),null),clauses);
});

cljs.core.async.macros$macros.alt_BANG_.cljs$lang$maxFixedArity = (2);

cljs.core.async.macros$macros.alt_BANG_.cljs$lang$applyTo = (function (seq933){
var G__934 = cljs.core.first.call(null,seq933);
var seq933__$1 = cljs.core.next.call(null,seq933);
var G__935 = cljs.core.first.call(null,seq933__$1);
var seq933__$2 = cljs.core.next.call(null,seq933__$1);
return cljs.core.async.macros$macros.alt_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__934,G__935,seq933__$2);
});

return null;
})()
;
cljs.core.async.macros$macros.alt_BANG_.cljs$lang$macro = true;

var ret__23200__auto___944 = (function (){
/**
 * Like (go (loop ...))
 */
cljs.core.async.macros$macros.go_loop = (function cljs$core$async$macros$macros$go_loop(var_args){
var args__23177__auto__ = [];
var len__23174__auto___945 = arguments.length;
var i__23175__auto___946 = (0);
while(true){
if((i__23175__auto___946 < len__23174__auto___945)){
args__23177__auto__.push((arguments[i__23175__auto___946]));

var G__947 = (i__23175__auto___946 + (1));
i__23175__auto___946 = G__947;
continue;
} else {
}
break;
}

var argseq__23178__auto__ = ((((3) < args__23177__auto__.length))?(new cljs.core.IndexedSeq(args__23177__auto__.slice((3)),(0),null)):null);
return cljs.core.async.macros$macros.go_loop.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__23178__auto__);
});

cljs.core.async.macros$macros.go_loop.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core.async.macros","go","cljs.core.async.macros/go",(-1503108036),null)),(function (){var x__22880__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","loop","cljs.core/loop",(-1829423021),null)),(function (){var x__22880__auto__ = bindings;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22880__auto__);
})(),body));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22880__auto__);
})()));
});

cljs.core.async.macros$macros.go_loop.cljs$lang$maxFixedArity = (3);

cljs.core.async.macros$macros.go_loop.cljs$lang$applyTo = (function (seq940){
var G__941 = cljs.core.first.call(null,seq940);
var seq940__$1 = cljs.core.next.call(null,seq940);
var G__942 = cljs.core.first.call(null,seq940__$1);
var seq940__$2 = cljs.core.next.call(null,seq940__$1);
var G__943 = cljs.core.first.call(null,seq940__$2);
var seq940__$3 = cljs.core.next.call(null,seq940__$2);
return cljs.core.async.macros$macros.go_loop.cljs$core$IFn$_invoke$arity$variadic(G__941,G__942,G__943,seq940__$3);
});

return null;
})()
;
cljs.core.async.macros$macros.go_loop.cljs$lang$macro = true;

