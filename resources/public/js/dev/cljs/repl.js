// Compiled by ClojureScript 1.7.228 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__25632_25646 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__25633_25647 = null;
var count__25634_25648 = (0);
var i__25635_25649 = (0);
while(true){
if((i__25635_25649 < count__25634_25648)){
var f_25650 = cljs.core._nth.call(null,chunk__25633_25647,i__25635_25649);
cljs.core.println.call(null,"  ",f_25650);

var G__25651 = seq__25632_25646;
var G__25652 = chunk__25633_25647;
var G__25653 = count__25634_25648;
var G__25654 = (i__25635_25649 + (1));
seq__25632_25646 = G__25651;
chunk__25633_25647 = G__25652;
count__25634_25648 = G__25653;
i__25635_25649 = G__25654;
continue;
} else {
var temp__4425__auto___25655 = cljs.core.seq.call(null,seq__25632_25646);
if(temp__4425__auto___25655){
var seq__25632_25656__$1 = temp__4425__auto___25655;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25632_25656__$1)){
var c__19094__auto___25657 = cljs.core.chunk_first.call(null,seq__25632_25656__$1);
var G__25658 = cljs.core.chunk_rest.call(null,seq__25632_25656__$1);
var G__25659 = c__19094__auto___25657;
var G__25660 = cljs.core.count.call(null,c__19094__auto___25657);
var G__25661 = (0);
seq__25632_25646 = G__25658;
chunk__25633_25647 = G__25659;
count__25634_25648 = G__25660;
i__25635_25649 = G__25661;
continue;
} else {
var f_25662 = cljs.core.first.call(null,seq__25632_25656__$1);
cljs.core.println.call(null,"  ",f_25662);

var G__25663 = cljs.core.next.call(null,seq__25632_25656__$1);
var G__25664 = null;
var G__25665 = (0);
var G__25666 = (0);
seq__25632_25646 = G__25663;
chunk__25633_25647 = G__25664;
count__25634_25648 = G__25665;
i__25635_25649 = G__25666;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_25667 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__18291__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__18291__auto__)){
return or__18291__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_25667);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_25667)))?cljs.core.second.call(null,arglists_25667):arglists_25667));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__25636 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__25637 = null;
var count__25638 = (0);
var i__25639 = (0);
while(true){
if((i__25639 < count__25638)){
var vec__25640 = cljs.core._nth.call(null,chunk__25637,i__25639);
var name = cljs.core.nth.call(null,vec__25640,(0),null);
var map__25641 = cljs.core.nth.call(null,vec__25640,(1),null);
var map__25641__$1 = ((((!((map__25641 == null)))?((((map__25641.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25641.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25641):map__25641);
var doc = cljs.core.get.call(null,map__25641__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__25641__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__25668 = seq__25636;
var G__25669 = chunk__25637;
var G__25670 = count__25638;
var G__25671 = (i__25639 + (1));
seq__25636 = G__25668;
chunk__25637 = G__25669;
count__25638 = G__25670;
i__25639 = G__25671;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__25636);
if(temp__4425__auto__){
var seq__25636__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25636__$1)){
var c__19094__auto__ = cljs.core.chunk_first.call(null,seq__25636__$1);
var G__25672 = cljs.core.chunk_rest.call(null,seq__25636__$1);
var G__25673 = c__19094__auto__;
var G__25674 = cljs.core.count.call(null,c__19094__auto__);
var G__25675 = (0);
seq__25636 = G__25672;
chunk__25637 = G__25673;
count__25638 = G__25674;
i__25639 = G__25675;
continue;
} else {
var vec__25643 = cljs.core.first.call(null,seq__25636__$1);
var name = cljs.core.nth.call(null,vec__25643,(0),null);
var map__25644 = cljs.core.nth.call(null,vec__25643,(1),null);
var map__25644__$1 = ((((!((map__25644 == null)))?((((map__25644.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25644.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25644):map__25644);
var doc = cljs.core.get.call(null,map__25644__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__25644__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__25676 = cljs.core.next.call(null,seq__25636__$1);
var G__25677 = null;
var G__25678 = (0);
var G__25679 = (0);
seq__25636 = G__25676;
chunk__25637 = G__25677;
count__25638 = G__25678;
i__25639 = G__25679;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map