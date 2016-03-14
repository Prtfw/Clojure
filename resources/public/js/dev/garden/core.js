// Compiled by ClojureScript 1.7.228 {}
goog.provide('garden.core');
goog.require('cljs.core');
goog.require('garden.compiler');
/**
 * Convert a variable number of Clojure data structure to a string of
 *   CSS. The first argument may be a list of flags for the compiler.
 */
garden.core.css = (function garden$core$css(var_args){
var args__19356__auto__ = [];
var len__19349__auto___27489 = arguments.length;
var i__19350__auto___27490 = (0);
while(true){
if((i__19350__auto___27490 < len__19349__auto___27489)){
args__19356__auto__.push((arguments[i__19350__auto___27490]));

var G__27491 = (i__19350__auto___27490 + (1));
i__19350__auto___27490 = G__27491;
continue;
} else {
}
break;
}

var argseq__19357__auto__ = ((((0) < args__19356__auto__.length))?(new cljs.core.IndexedSeq(args__19356__auto__.slice((0)),(0))):null);
return garden.core.css.cljs$core$IFn$_invoke$arity$variadic(argseq__19357__auto__);
});

garden.core.css.cljs$core$IFn$_invoke$arity$variadic = (function (rules){
return cljs.core.apply.call(null,garden.compiler.compile_css,rules);
});

garden.core.css.cljs$lang$maxFixedArity = (0);

garden.core.css.cljs$lang$applyTo = (function (seq27488){
return garden.core.css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27488));
});
/**
 * Convert a variable number of maps into a string of CSS for use with
 *   the HTML `style` attribute.
 */
garden.core.style = (function garden$core$style(var_args){
var args__19356__auto__ = [];
var len__19349__auto___27493 = arguments.length;
var i__19350__auto___27494 = (0);
while(true){
if((i__19350__auto___27494 < len__19349__auto___27493)){
args__19356__auto__.push((arguments[i__19350__auto___27494]));

var G__27495 = (i__19350__auto___27494 + (1));
i__19350__auto___27494 = G__27495;
continue;
} else {
}
break;
}

var argseq__19357__auto__ = ((((0) < args__19356__auto__.length))?(new cljs.core.IndexedSeq(args__19356__auto__.slice((0)),(0))):null);
return garden.core.style.cljs$core$IFn$_invoke$arity$variadic(argseq__19357__auto__);
});

garden.core.style.cljs$core$IFn$_invoke$arity$variadic = (function (maps){
return garden.compiler.compile_style.call(null,maps);
});

garden.core.style.cljs$lang$maxFixedArity = (0);

garden.core.style.cljs$lang$applyTo = (function (seq27492){
return garden.core.style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27492));
});

//# sourceMappingURL=core.js.map