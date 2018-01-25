goog.provide("cljs.core.async.impl.ioc_macros$macros");
var ret__23200__auto___144 = (function (){
cljs.core.async.impl.ioc_macros$macros.aset_all_BANG_ = (function cljs$core$async$impl$ioc_macros$macros$aset_all_BANG_(var_args){
var args__23177__auto__ = [];
var len__23174__auto___145 = arguments.length;
var i__23175__auto___146 = (0);
while(true){
if((i__23175__auto___146 < len__23174__auto___145)){
args__23177__auto__.push((arguments[i__23175__auto___146]));

var G__147 = (i__23175__auto___146 + (1));
i__23175__auto___146 = G__147;
continue;
} else {
}
break;
}

var argseq__23178__auto__ = ((((3) < args__23177__auto__.length))?(new cljs.core.IndexedSeq(args__23177__auto__.slice((3)),(0),null)):null);
return cljs.core.async.impl.ioc_macros$macros.aset_all_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__23178__auto__);
});

cljs.core.async.impl.ioc_macros$macros.aset_all_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,arr,more){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,more))){
} else {
throw (new Error(["Assert failed: ","Must give an even number of args to aset-all!","\n","(even? (count more))"].join('')));
}

var bindings = cljs.core.partition.call(null,(2),more);
var arr_sym = cljs.core.gensym.call(null,"statearr-");
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null)),(function (){var x__22880__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(function (){var x__22880__auto__ = arr_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22880__auto__);
})(),(function (){var x__22880__auto__ = arr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22880__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22880__auto__);
})(),cljs.core.map.call(null,((function (bindings,arr_sym){
return (function (p__140){
var vec__141 = p__140;
var idx = cljs.core.nth.call(null,vec__141,(0),null);
var val = cljs.core.nth.call(null,vec__141,(1),null);
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","aset","cljs.core/aset",(-898215545),null)),(function (){var x__22880__auto__ = arr_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22880__auto__);
})(),(function (){var x__22880__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22880__auto__);
})(),(function (){var x__22880__auto__ = val;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22880__auto__);
})()));
});})(bindings,arr_sym))
,bindings),(function (){var x__22880__auto__ = arr_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22880__auto__);
})()));
});

cljs.core.async.impl.ioc_macros$macros.aset_all_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.impl.ioc_macros$macros.aset_all_BANG_.cljs$lang$applyTo = (function (seq136){
var G__137 = cljs.core.first.call(null,seq136);
var seq136__$1 = cljs.core.next.call(null,seq136);
var G__138 = cljs.core.first.call(null,seq136__$1);
var seq136__$2 = cljs.core.next.call(null,seq136__$1);
var G__139 = cljs.core.first.call(null,seq136__$2);
var seq136__$3 = cljs.core.next.call(null,seq136__$2);
return cljs.core.async.impl.ioc_macros$macros.aset_all_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__137,G__138,G__139,seq136__$3);
});

return null;
})()
;
cljs.core.async.impl.ioc_macros$macros.aset_all_BANG_.cljs$lang$macro = true;

var ret__23200__auto___152 = /**
 * Allows a user to define a state monad binding plan.
 * 
 *   (gen-plan
 *  [_ (assoc-in-plan [:foo :bar] 42)
 *   val (get-in-plan [:foo :bar])]
 *  val)
 */
cljs.core.async.impl.ioc_macros$macros.gen_plan = (function cljs$core$async$impl$ioc_macros$macros$gen_plan(_AMPERSAND_form,_AMPERSAND_env,binds,id_expr){
var binds__$1 = cljs.core.partition.call(null,(2),binds);
var psym = cljs.core.gensym.call(null,"plan_");
var forms = cljs.core.reduce.call(null,((function (binds__$1,psym){
return (function (acc,p__148){
var vec__149 = p__148;
var id = cljs.core.nth.call(null,vec__149,(0),null);
var expr = cljs.core.nth.call(null,vec__149,(1),null);
return cljs.core.concat.call(null,acc,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(function (){var x__22880__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(function (){var x__22880__auto__ = id;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22880__auto__);
})(),(function (){var x__22880__auto__ = psym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22880__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22880__auto__);
})(),(function (){var x__22880__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,(function (){var x__22880__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22880__auto__);
})(),(function (){var x__22880__auto__ = psym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22880__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22880__auto__);
})()))));
});})(binds__$1,psym))
,cljs.core.PersistentVector.EMPTY,binds__$1);
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",(-1065745098),null)),(function (){var x__22880__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(function (){var x__22880__auto__ = psym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22880__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22880__auto__);
})(),(function (){var x__22880__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null)),(function (){var x__22880__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,forms)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22880__auto__);
})(),(function (){var x__22880__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(function (){var x__22880__auto__ = id_expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22880__auto__);
})(),(function (){var x__22880__auto__ = psym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22880__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22880__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22880__auto__);
})()));
});
cljs.core.async.impl.ioc_macros$macros.gen_plan.cljs$lang$macro = true;

