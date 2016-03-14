// Compiled by ClojureScript 1.7.228 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__18291__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__18291__auto__){
return or__18291__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__18291__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__18291__auto__)){
return or__18291__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__24608_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__24608_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__24613 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__24614 = null;
var count__24615 = (0);
var i__24616 = (0);
while(true){
if((i__24616 < count__24615)){
var n = cljs.core._nth.call(null,chunk__24614,i__24616);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__24617 = seq__24613;
var G__24618 = chunk__24614;
var G__24619 = count__24615;
var G__24620 = (i__24616 + (1));
seq__24613 = G__24617;
chunk__24614 = G__24618;
count__24615 = G__24619;
i__24616 = G__24620;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__24613);
if(temp__4425__auto__){
var seq__24613__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24613__$1)){
var c__19094__auto__ = cljs.core.chunk_first.call(null,seq__24613__$1);
var G__24621 = cljs.core.chunk_rest.call(null,seq__24613__$1);
var G__24622 = c__19094__auto__;
var G__24623 = cljs.core.count.call(null,c__19094__auto__);
var G__24624 = (0);
seq__24613 = G__24621;
chunk__24614 = G__24622;
count__24615 = G__24623;
i__24616 = G__24624;
continue;
} else {
var n = cljs.core.first.call(null,seq__24613__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__24625 = cljs.core.next.call(null,seq__24613__$1);
var G__24626 = null;
var G__24627 = (0);
var G__24628 = (0);
seq__24613 = G__24625;
chunk__24614 = G__24626;
count__24615 = G__24627;
i__24616 = G__24628;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__24667_24674 = cljs.core.seq.call(null,deps);
var chunk__24668_24675 = null;
var count__24669_24676 = (0);
var i__24670_24677 = (0);
while(true){
if((i__24670_24677 < count__24669_24676)){
var dep_24678 = cljs.core._nth.call(null,chunk__24668_24675,i__24670_24677);
topo_sort_helper_STAR_.call(null,dep_24678,(depth + (1)),state);

var G__24679 = seq__24667_24674;
var G__24680 = chunk__24668_24675;
var G__24681 = count__24669_24676;
var G__24682 = (i__24670_24677 + (1));
seq__24667_24674 = G__24679;
chunk__24668_24675 = G__24680;
count__24669_24676 = G__24681;
i__24670_24677 = G__24682;
continue;
} else {
var temp__4425__auto___24683 = cljs.core.seq.call(null,seq__24667_24674);
if(temp__4425__auto___24683){
var seq__24667_24684__$1 = temp__4425__auto___24683;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24667_24684__$1)){
var c__19094__auto___24685 = cljs.core.chunk_first.call(null,seq__24667_24684__$1);
var G__24686 = cljs.core.chunk_rest.call(null,seq__24667_24684__$1);
var G__24687 = c__19094__auto___24685;
var G__24688 = cljs.core.count.call(null,c__19094__auto___24685);
var G__24689 = (0);
seq__24667_24674 = G__24686;
chunk__24668_24675 = G__24687;
count__24669_24676 = G__24688;
i__24670_24677 = G__24689;
continue;
} else {
var dep_24690 = cljs.core.first.call(null,seq__24667_24684__$1);
topo_sort_helper_STAR_.call(null,dep_24690,(depth + (1)),state);

var G__24691 = cljs.core.next.call(null,seq__24667_24684__$1);
var G__24692 = null;
var G__24693 = (0);
var G__24694 = (0);
seq__24667_24674 = G__24691;
chunk__24668_24675 = G__24692;
count__24669_24676 = G__24693;
i__24670_24677 = G__24694;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__24671){
var vec__24673 = p__24671;
var x = cljs.core.nth.call(null,vec__24673,(0),null);
var xs = cljs.core.nthnext.call(null,vec__24673,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__24673,x,xs,get_deps__$1){
return (function (p1__24629_SHARP_){
return clojure.set.difference.call(null,p1__24629_SHARP_,x);
});})(vec__24673,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__24707 = cljs.core.seq.call(null,provides);
var chunk__24708 = null;
var count__24709 = (0);
var i__24710 = (0);
while(true){
if((i__24710 < count__24709)){
var prov = cljs.core._nth.call(null,chunk__24708,i__24710);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__24711_24719 = cljs.core.seq.call(null,requires);
var chunk__24712_24720 = null;
var count__24713_24721 = (0);
var i__24714_24722 = (0);
while(true){
if((i__24714_24722 < count__24713_24721)){
var req_24723 = cljs.core._nth.call(null,chunk__24712_24720,i__24714_24722);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_24723,prov);

var G__24724 = seq__24711_24719;
var G__24725 = chunk__24712_24720;
var G__24726 = count__24713_24721;
var G__24727 = (i__24714_24722 + (1));
seq__24711_24719 = G__24724;
chunk__24712_24720 = G__24725;
count__24713_24721 = G__24726;
i__24714_24722 = G__24727;
continue;
} else {
var temp__4425__auto___24728 = cljs.core.seq.call(null,seq__24711_24719);
if(temp__4425__auto___24728){
var seq__24711_24729__$1 = temp__4425__auto___24728;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24711_24729__$1)){
var c__19094__auto___24730 = cljs.core.chunk_first.call(null,seq__24711_24729__$1);
var G__24731 = cljs.core.chunk_rest.call(null,seq__24711_24729__$1);
var G__24732 = c__19094__auto___24730;
var G__24733 = cljs.core.count.call(null,c__19094__auto___24730);
var G__24734 = (0);
seq__24711_24719 = G__24731;
chunk__24712_24720 = G__24732;
count__24713_24721 = G__24733;
i__24714_24722 = G__24734;
continue;
} else {
var req_24735 = cljs.core.first.call(null,seq__24711_24729__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_24735,prov);

var G__24736 = cljs.core.next.call(null,seq__24711_24729__$1);
var G__24737 = null;
var G__24738 = (0);
var G__24739 = (0);
seq__24711_24719 = G__24736;
chunk__24712_24720 = G__24737;
count__24713_24721 = G__24738;
i__24714_24722 = G__24739;
continue;
}
} else {
}
}
break;
}

var G__24740 = seq__24707;
var G__24741 = chunk__24708;
var G__24742 = count__24709;
var G__24743 = (i__24710 + (1));
seq__24707 = G__24740;
chunk__24708 = G__24741;
count__24709 = G__24742;
i__24710 = G__24743;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__24707);
if(temp__4425__auto__){
var seq__24707__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24707__$1)){
var c__19094__auto__ = cljs.core.chunk_first.call(null,seq__24707__$1);
var G__24744 = cljs.core.chunk_rest.call(null,seq__24707__$1);
var G__24745 = c__19094__auto__;
var G__24746 = cljs.core.count.call(null,c__19094__auto__);
var G__24747 = (0);
seq__24707 = G__24744;
chunk__24708 = G__24745;
count__24709 = G__24746;
i__24710 = G__24747;
continue;
} else {
var prov = cljs.core.first.call(null,seq__24707__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__24715_24748 = cljs.core.seq.call(null,requires);
var chunk__24716_24749 = null;
var count__24717_24750 = (0);
var i__24718_24751 = (0);
while(true){
if((i__24718_24751 < count__24717_24750)){
var req_24752 = cljs.core._nth.call(null,chunk__24716_24749,i__24718_24751);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_24752,prov);

var G__24753 = seq__24715_24748;
var G__24754 = chunk__24716_24749;
var G__24755 = count__24717_24750;
var G__24756 = (i__24718_24751 + (1));
seq__24715_24748 = G__24753;
chunk__24716_24749 = G__24754;
count__24717_24750 = G__24755;
i__24718_24751 = G__24756;
continue;
} else {
var temp__4425__auto___24757__$1 = cljs.core.seq.call(null,seq__24715_24748);
if(temp__4425__auto___24757__$1){
var seq__24715_24758__$1 = temp__4425__auto___24757__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24715_24758__$1)){
var c__19094__auto___24759 = cljs.core.chunk_first.call(null,seq__24715_24758__$1);
var G__24760 = cljs.core.chunk_rest.call(null,seq__24715_24758__$1);
var G__24761 = c__19094__auto___24759;
var G__24762 = cljs.core.count.call(null,c__19094__auto___24759);
var G__24763 = (0);
seq__24715_24748 = G__24760;
chunk__24716_24749 = G__24761;
count__24717_24750 = G__24762;
i__24718_24751 = G__24763;
continue;
} else {
var req_24764 = cljs.core.first.call(null,seq__24715_24758__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_24764,prov);

var G__24765 = cljs.core.next.call(null,seq__24715_24758__$1);
var G__24766 = null;
var G__24767 = (0);
var G__24768 = (0);
seq__24715_24748 = G__24765;
chunk__24716_24749 = G__24766;
count__24717_24750 = G__24767;
i__24718_24751 = G__24768;
continue;
}
} else {
}
}
break;
}

var G__24769 = cljs.core.next.call(null,seq__24707__$1);
var G__24770 = null;
var G__24771 = (0);
var G__24772 = (0);
seq__24707 = G__24769;
chunk__24708 = G__24770;
count__24709 = G__24771;
i__24710 = G__24772;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__24777_24781 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__24778_24782 = null;
var count__24779_24783 = (0);
var i__24780_24784 = (0);
while(true){
if((i__24780_24784 < count__24779_24783)){
var ns_24785 = cljs.core._nth.call(null,chunk__24778_24782,i__24780_24784);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_24785);

var G__24786 = seq__24777_24781;
var G__24787 = chunk__24778_24782;
var G__24788 = count__24779_24783;
var G__24789 = (i__24780_24784 + (1));
seq__24777_24781 = G__24786;
chunk__24778_24782 = G__24787;
count__24779_24783 = G__24788;
i__24780_24784 = G__24789;
continue;
} else {
var temp__4425__auto___24790 = cljs.core.seq.call(null,seq__24777_24781);
if(temp__4425__auto___24790){
var seq__24777_24791__$1 = temp__4425__auto___24790;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24777_24791__$1)){
var c__19094__auto___24792 = cljs.core.chunk_first.call(null,seq__24777_24791__$1);
var G__24793 = cljs.core.chunk_rest.call(null,seq__24777_24791__$1);
var G__24794 = c__19094__auto___24792;
var G__24795 = cljs.core.count.call(null,c__19094__auto___24792);
var G__24796 = (0);
seq__24777_24781 = G__24793;
chunk__24778_24782 = G__24794;
count__24779_24783 = G__24795;
i__24780_24784 = G__24796;
continue;
} else {
var ns_24797 = cljs.core.first.call(null,seq__24777_24791__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_24797);

var G__24798 = cljs.core.next.call(null,seq__24777_24791__$1);
var G__24799 = null;
var G__24800 = (0);
var G__24801 = (0);
seq__24777_24781 = G__24798;
chunk__24778_24782 = G__24799;
count__24779_24783 = G__24800;
i__24780_24784 = G__24801;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__18291__auto__ = goog.require__;
if(cljs.core.truth_(or__18291__auto__)){
return or__18291__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__24802__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__24802 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24803__i = 0, G__24803__a = new Array(arguments.length -  0);
while (G__24803__i < G__24803__a.length) {G__24803__a[G__24803__i] = arguments[G__24803__i + 0]; ++G__24803__i;}
  args = new cljs.core.IndexedSeq(G__24803__a,0);
} 
return G__24802__delegate.call(this,args);};
G__24802.cljs$lang$maxFixedArity = 0;
G__24802.cljs$lang$applyTo = (function (arglist__24804){
var args = cljs.core.seq(arglist__24804);
return G__24802__delegate(args);
});
G__24802.cljs$core$IFn$_invoke$arity$variadic = G__24802__delegate;
return G__24802;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__24806 = cljs.core._EQ_;
var expr__24807 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__24806.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__24807))){
var path_parts = ((function (pred__24806,expr__24807){
return (function (p1__24805_SHARP_){
return clojure.string.split.call(null,p1__24805_SHARP_,/[\/\\]/);
});})(pred__24806,expr__24807))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__24806,expr__24807){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e24809){if((e24809 instanceof Error)){
var e = e24809;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e24809;

}
}})());
});
;})(path_parts,sep,root,pred__24806,expr__24807))
} else {
if(cljs.core.truth_(pred__24806.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__24807))){
return ((function (pred__24806,expr__24807){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__24806,expr__24807){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__24806,expr__24807))
);

return deferred.addErrback(((function (deferred,pred__24806,expr__24807){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__24806,expr__24807))
);
});
;})(pred__24806,expr__24807))
} else {
return ((function (pred__24806,expr__24807){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__24806,expr__24807))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__24810,callback){
var map__24813 = p__24810;
var map__24813__$1 = ((((!((map__24813 == null)))?((((map__24813.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24813.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24813):map__24813);
var file_msg = map__24813__$1;
var request_url = cljs.core.get.call(null,map__24813__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__24813,map__24813__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__24813,map__24813__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__21739__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21739__auto__){
return (function (){
var f__21740__auto__ = (function (){var switch__21627__auto__ = ((function (c__21739__auto__){
return (function (state_24837){
var state_val_24838 = (state_24837[(1)]);
if((state_val_24838 === (7))){
var inst_24833 = (state_24837[(2)]);
var state_24837__$1 = state_24837;
var statearr_24839_24859 = state_24837__$1;
(statearr_24839_24859[(2)] = inst_24833);

(statearr_24839_24859[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24838 === (1))){
var state_24837__$1 = state_24837;
var statearr_24840_24860 = state_24837__$1;
(statearr_24840_24860[(2)] = null);

(statearr_24840_24860[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24838 === (4))){
var inst_24817 = (state_24837[(7)]);
var inst_24817__$1 = (state_24837[(2)]);
var state_24837__$1 = (function (){var statearr_24841 = state_24837;
(statearr_24841[(7)] = inst_24817__$1);

return statearr_24841;
})();
if(cljs.core.truth_(inst_24817__$1)){
var statearr_24842_24861 = state_24837__$1;
(statearr_24842_24861[(1)] = (5));

} else {
var statearr_24843_24862 = state_24837__$1;
(statearr_24843_24862[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24838 === (6))){
var state_24837__$1 = state_24837;
var statearr_24844_24863 = state_24837__$1;
(statearr_24844_24863[(2)] = null);

(statearr_24844_24863[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24838 === (3))){
var inst_24835 = (state_24837[(2)]);
var state_24837__$1 = state_24837;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24837__$1,inst_24835);
} else {
if((state_val_24838 === (2))){
var state_24837__$1 = state_24837;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24837__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_24838 === (11))){
var inst_24829 = (state_24837[(2)]);
var state_24837__$1 = (function (){var statearr_24845 = state_24837;
(statearr_24845[(8)] = inst_24829);

return statearr_24845;
})();
var statearr_24846_24864 = state_24837__$1;
(statearr_24846_24864[(2)] = null);

(statearr_24846_24864[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24838 === (9))){
var inst_24821 = (state_24837[(9)]);
var inst_24823 = (state_24837[(10)]);
var inst_24825 = inst_24823.call(null,inst_24821);
var state_24837__$1 = state_24837;
var statearr_24847_24865 = state_24837__$1;
(statearr_24847_24865[(2)] = inst_24825);

(statearr_24847_24865[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24838 === (5))){
var inst_24817 = (state_24837[(7)]);
var inst_24819 = figwheel.client.file_reloading.blocking_load.call(null,inst_24817);
var state_24837__$1 = state_24837;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24837__$1,(8),inst_24819);
} else {
if((state_val_24838 === (10))){
var inst_24821 = (state_24837[(9)]);
var inst_24827 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_24821);
var state_24837__$1 = state_24837;
var statearr_24848_24866 = state_24837__$1;
(statearr_24848_24866[(2)] = inst_24827);

(statearr_24848_24866[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24838 === (8))){
var inst_24817 = (state_24837[(7)]);
var inst_24823 = (state_24837[(10)]);
var inst_24821 = (state_24837[(2)]);
var inst_24822 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_24823__$1 = cljs.core.get.call(null,inst_24822,inst_24817);
var state_24837__$1 = (function (){var statearr_24849 = state_24837;
(statearr_24849[(9)] = inst_24821);

(statearr_24849[(10)] = inst_24823__$1);

return statearr_24849;
})();
if(cljs.core.truth_(inst_24823__$1)){
var statearr_24850_24867 = state_24837__$1;
(statearr_24850_24867[(1)] = (9));

} else {
var statearr_24851_24868 = state_24837__$1;
(statearr_24851_24868[(1)] = (10));

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
});})(c__21739__auto__))
;
return ((function (switch__21627__auto__,c__21739__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__21628__auto__ = null;
var figwheel$client$file_reloading$state_machine__21628__auto____0 = (function (){
var statearr_24855 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24855[(0)] = figwheel$client$file_reloading$state_machine__21628__auto__);

(statearr_24855[(1)] = (1));

return statearr_24855;
});
var figwheel$client$file_reloading$state_machine__21628__auto____1 = (function (state_24837){
while(true){
var ret_value__21629__auto__ = (function (){try{while(true){
var result__21630__auto__ = switch__21627__auto__.call(null,state_24837);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21630__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21630__auto__;
}
break;
}
}catch (e24856){if((e24856 instanceof Object)){
var ex__21631__auto__ = e24856;
var statearr_24857_24869 = state_24837;
(statearr_24857_24869[(5)] = ex__21631__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24837);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24856;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21629__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24870 = state_24837;
state_24837 = G__24870;
continue;
} else {
return ret_value__21629__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__21628__auto__ = function(state_24837){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__21628__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__21628__auto____1.call(this,state_24837);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__21628__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__21628__auto____0;
figwheel$client$file_reloading$state_machine__21628__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__21628__auto____1;
return figwheel$client$file_reloading$state_machine__21628__auto__;
})()
;})(switch__21627__auto__,c__21739__auto__))
})();
var state__21741__auto__ = (function (){var statearr_24858 = f__21740__auto__.call(null);
(statearr_24858[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21739__auto__);

return statearr_24858;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21741__auto__);
});})(c__21739__auto__))
);

return c__21739__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__24871,callback){
var map__24874 = p__24871;
var map__24874__$1 = ((((!((map__24874 == null)))?((((map__24874.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24874.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24874):map__24874);
var file_msg = map__24874__$1;
var namespace = cljs.core.get.call(null,map__24874__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__24874,map__24874__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__24874,map__24874__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__24876){
var map__24879 = p__24876;
var map__24879__$1 = ((((!((map__24879 == null)))?((((map__24879.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24879.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24879):map__24879);
var file_msg = map__24879__$1;
var namespace = cljs.core.get.call(null,map__24879__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__18279__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__18279__auto__){
var or__18291__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__18291__auto__)){
return or__18291__auto__;
} else {
var or__18291__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__18291__auto____$1)){
return or__18291__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__18279__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__24881,callback){
var map__24884 = p__24881;
var map__24884__$1 = ((((!((map__24884 == null)))?((((map__24884.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24884.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24884):map__24884);
var file_msg = map__24884__$1;
var request_url = cljs.core.get.call(null,map__24884__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__24884__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__21739__auto___24972 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21739__auto___24972,out){
return (function (){
var f__21740__auto__ = (function (){var switch__21627__auto__ = ((function (c__21739__auto___24972,out){
return (function (state_24954){
var state_val_24955 = (state_24954[(1)]);
if((state_val_24955 === (1))){
var inst_24932 = cljs.core.nth.call(null,files,(0),null);
var inst_24933 = cljs.core.nthnext.call(null,files,(1));
var inst_24934 = files;
var state_24954__$1 = (function (){var statearr_24956 = state_24954;
(statearr_24956[(7)] = inst_24934);

(statearr_24956[(8)] = inst_24933);

(statearr_24956[(9)] = inst_24932);

return statearr_24956;
})();
var statearr_24957_24973 = state_24954__$1;
(statearr_24957_24973[(2)] = null);

(statearr_24957_24973[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24955 === (2))){
var inst_24934 = (state_24954[(7)]);
var inst_24937 = (state_24954[(10)]);
var inst_24937__$1 = cljs.core.nth.call(null,inst_24934,(0),null);
var inst_24938 = cljs.core.nthnext.call(null,inst_24934,(1));
var inst_24939 = (inst_24937__$1 == null);
var inst_24940 = cljs.core.not.call(null,inst_24939);
var state_24954__$1 = (function (){var statearr_24958 = state_24954;
(statearr_24958[(11)] = inst_24938);

(statearr_24958[(10)] = inst_24937__$1);

return statearr_24958;
})();
if(inst_24940){
var statearr_24959_24974 = state_24954__$1;
(statearr_24959_24974[(1)] = (4));

} else {
var statearr_24960_24975 = state_24954__$1;
(statearr_24960_24975[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24955 === (3))){
var inst_24952 = (state_24954[(2)]);
var state_24954__$1 = state_24954;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24954__$1,inst_24952);
} else {
if((state_val_24955 === (4))){
var inst_24937 = (state_24954[(10)]);
var inst_24942 = figwheel.client.file_reloading.reload_js_file.call(null,inst_24937);
var state_24954__$1 = state_24954;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24954__$1,(7),inst_24942);
} else {
if((state_val_24955 === (5))){
var inst_24948 = cljs.core.async.close_BANG_.call(null,out);
var state_24954__$1 = state_24954;
var statearr_24961_24976 = state_24954__$1;
(statearr_24961_24976[(2)] = inst_24948);

(statearr_24961_24976[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24955 === (6))){
var inst_24950 = (state_24954[(2)]);
var state_24954__$1 = state_24954;
var statearr_24962_24977 = state_24954__$1;
(statearr_24962_24977[(2)] = inst_24950);

(statearr_24962_24977[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24955 === (7))){
var inst_24938 = (state_24954[(11)]);
var inst_24944 = (state_24954[(2)]);
var inst_24945 = cljs.core.async.put_BANG_.call(null,out,inst_24944);
var inst_24934 = inst_24938;
var state_24954__$1 = (function (){var statearr_24963 = state_24954;
(statearr_24963[(7)] = inst_24934);

(statearr_24963[(12)] = inst_24945);

return statearr_24963;
})();
var statearr_24964_24978 = state_24954__$1;
(statearr_24964_24978[(2)] = null);

(statearr_24964_24978[(1)] = (2));


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
});})(c__21739__auto___24972,out))
;
return ((function (switch__21627__auto__,c__21739__auto___24972,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21628__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21628__auto____0 = (function (){
var statearr_24968 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24968[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21628__auto__);

(statearr_24968[(1)] = (1));

return statearr_24968;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21628__auto____1 = (function (state_24954){
while(true){
var ret_value__21629__auto__ = (function (){try{while(true){
var result__21630__auto__ = switch__21627__auto__.call(null,state_24954);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21630__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21630__auto__;
}
break;
}
}catch (e24969){if((e24969 instanceof Object)){
var ex__21631__auto__ = e24969;
var statearr_24970_24979 = state_24954;
(statearr_24970_24979[(5)] = ex__21631__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24954);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24969;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21629__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24980 = state_24954;
state_24954 = G__24980;
continue;
} else {
return ret_value__21629__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21628__auto__ = function(state_24954){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21628__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21628__auto____1.call(this,state_24954);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21628__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21628__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21628__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21628__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21628__auto__;
})()
;})(switch__21627__auto__,c__21739__auto___24972,out))
})();
var state__21741__auto__ = (function (){var statearr_24971 = f__21740__auto__.call(null);
(statearr_24971[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21739__auto___24972);

return statearr_24971;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21741__auto__);
});})(c__21739__auto___24972,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__24981,opts){
var map__24985 = p__24981;
var map__24985__$1 = ((((!((map__24985 == null)))?((((map__24985.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24985.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24985):map__24985);
var eval_body__$1 = cljs.core.get.call(null,map__24985__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__24985__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__18279__auto__ = eval_body__$1;
if(cljs.core.truth_(and__18279__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__18279__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e24987){var e = e24987;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4423__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__24988_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__24988_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4423__auto__)){
var file_msg = temp__4423__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__24993){
var vec__24994 = p__24993;
var k = cljs.core.nth.call(null,vec__24994,(0),null);
var v = cljs.core.nth.call(null,vec__24994,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__24995){
var vec__24996 = p__24995;
var k = cljs.core.nth.call(null,vec__24996,(0),null);
var v = cljs.core.nth.call(null,vec__24996,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__25000,p__25001){
var map__25248 = p__25000;
var map__25248__$1 = ((((!((map__25248 == null)))?((((map__25248.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25248.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25248):map__25248);
var opts = map__25248__$1;
var before_jsload = cljs.core.get.call(null,map__25248__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__25248__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__25248__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__25249 = p__25001;
var map__25249__$1 = ((((!((map__25249 == null)))?((((map__25249.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25249.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25249):map__25249);
var msg = map__25249__$1;
var files = cljs.core.get.call(null,map__25249__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__25249__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__25249__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__21739__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21739__auto__,map__25248,map__25248__$1,opts,before_jsload,on_jsload,reload_dependents,map__25249,map__25249__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__21740__auto__ = (function (){var switch__21627__auto__ = ((function (c__21739__auto__,map__25248,map__25248__$1,opts,before_jsload,on_jsload,reload_dependents,map__25249,map__25249__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_25402){
var state_val_25403 = (state_25402[(1)]);
if((state_val_25403 === (7))){
var inst_25264 = (state_25402[(7)]);
var inst_25265 = (state_25402[(8)]);
var inst_25263 = (state_25402[(9)]);
var inst_25266 = (state_25402[(10)]);
var inst_25271 = cljs.core._nth.call(null,inst_25264,inst_25266);
var inst_25272 = figwheel.client.file_reloading.eval_body.call(null,inst_25271,opts);
var inst_25273 = (inst_25266 + (1));
var tmp25404 = inst_25264;
var tmp25405 = inst_25265;
var tmp25406 = inst_25263;
var inst_25263__$1 = tmp25406;
var inst_25264__$1 = tmp25404;
var inst_25265__$1 = tmp25405;
var inst_25266__$1 = inst_25273;
var state_25402__$1 = (function (){var statearr_25407 = state_25402;
(statearr_25407[(7)] = inst_25264__$1);

(statearr_25407[(11)] = inst_25272);

(statearr_25407[(8)] = inst_25265__$1);

(statearr_25407[(9)] = inst_25263__$1);

(statearr_25407[(10)] = inst_25266__$1);

return statearr_25407;
})();
var statearr_25408_25494 = state_25402__$1;
(statearr_25408_25494[(2)] = null);

(statearr_25408_25494[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25403 === (20))){
var inst_25306 = (state_25402[(12)]);
var inst_25314 = figwheel.client.file_reloading.sort_files.call(null,inst_25306);
var state_25402__$1 = state_25402;
var statearr_25409_25495 = state_25402__$1;
(statearr_25409_25495[(2)] = inst_25314);

(statearr_25409_25495[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25403 === (27))){
var state_25402__$1 = state_25402;
var statearr_25410_25496 = state_25402__$1;
(statearr_25410_25496[(2)] = null);

(statearr_25410_25496[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25403 === (1))){
var inst_25255 = (state_25402[(13)]);
var inst_25252 = before_jsload.call(null,files);
var inst_25253 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_25254 = (function (){return ((function (inst_25255,inst_25252,inst_25253,state_val_25403,c__21739__auto__,map__25248,map__25248__$1,opts,before_jsload,on_jsload,reload_dependents,map__25249,map__25249__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__24997_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__24997_SHARP_);
});
;})(inst_25255,inst_25252,inst_25253,state_val_25403,c__21739__auto__,map__25248,map__25248__$1,opts,before_jsload,on_jsload,reload_dependents,map__25249,map__25249__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25255__$1 = cljs.core.filter.call(null,inst_25254,files);
var inst_25256 = cljs.core.not_empty.call(null,inst_25255__$1);
var state_25402__$1 = (function (){var statearr_25411 = state_25402;
(statearr_25411[(13)] = inst_25255__$1);

(statearr_25411[(14)] = inst_25252);

(statearr_25411[(15)] = inst_25253);

return statearr_25411;
})();
if(cljs.core.truth_(inst_25256)){
var statearr_25412_25497 = state_25402__$1;
(statearr_25412_25497[(1)] = (2));

} else {
var statearr_25413_25498 = state_25402__$1;
(statearr_25413_25498[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25403 === (24))){
var state_25402__$1 = state_25402;
var statearr_25414_25499 = state_25402__$1;
(statearr_25414_25499[(2)] = null);

(statearr_25414_25499[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25403 === (39))){
var inst_25356 = (state_25402[(16)]);
var state_25402__$1 = state_25402;
var statearr_25415_25500 = state_25402__$1;
(statearr_25415_25500[(2)] = inst_25356);

(statearr_25415_25500[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25403 === (46))){
var inst_25397 = (state_25402[(2)]);
var state_25402__$1 = state_25402;
var statearr_25416_25501 = state_25402__$1;
(statearr_25416_25501[(2)] = inst_25397);

(statearr_25416_25501[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25403 === (4))){
var inst_25300 = (state_25402[(2)]);
var inst_25301 = cljs.core.List.EMPTY;
var inst_25302 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_25301);
var inst_25303 = (function (){return ((function (inst_25300,inst_25301,inst_25302,state_val_25403,c__21739__auto__,map__25248,map__25248__$1,opts,before_jsload,on_jsload,reload_dependents,map__25249,map__25249__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__24998_SHARP_){
var and__18279__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__24998_SHARP_);
if(cljs.core.truth_(and__18279__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__24998_SHARP_));
} else {
return and__18279__auto__;
}
});
;})(inst_25300,inst_25301,inst_25302,state_val_25403,c__21739__auto__,map__25248,map__25248__$1,opts,before_jsload,on_jsload,reload_dependents,map__25249,map__25249__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25304 = cljs.core.filter.call(null,inst_25303,files);
var inst_25305 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_25306 = cljs.core.concat.call(null,inst_25304,inst_25305);
var state_25402__$1 = (function (){var statearr_25417 = state_25402;
(statearr_25417[(17)] = inst_25300);

(statearr_25417[(18)] = inst_25302);

(statearr_25417[(12)] = inst_25306);

return statearr_25417;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_25418_25502 = state_25402__$1;
(statearr_25418_25502[(1)] = (16));

} else {
var statearr_25419_25503 = state_25402__$1;
(statearr_25419_25503[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25403 === (15))){
var inst_25290 = (state_25402[(2)]);
var state_25402__$1 = state_25402;
var statearr_25420_25504 = state_25402__$1;
(statearr_25420_25504[(2)] = inst_25290);

(statearr_25420_25504[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25403 === (21))){
var inst_25316 = (state_25402[(19)]);
var inst_25316__$1 = (state_25402[(2)]);
var inst_25317 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_25316__$1);
var state_25402__$1 = (function (){var statearr_25421 = state_25402;
(statearr_25421[(19)] = inst_25316__$1);

return statearr_25421;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25402__$1,(22),inst_25317);
} else {
if((state_val_25403 === (31))){
var inst_25400 = (state_25402[(2)]);
var state_25402__$1 = state_25402;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25402__$1,inst_25400);
} else {
if((state_val_25403 === (32))){
var inst_25356 = (state_25402[(16)]);
var inst_25361 = inst_25356.cljs$lang$protocol_mask$partition0$;
var inst_25362 = (inst_25361 & (64));
var inst_25363 = inst_25356.cljs$core$ISeq$;
var inst_25364 = (inst_25362) || (inst_25363);
var state_25402__$1 = state_25402;
if(cljs.core.truth_(inst_25364)){
var statearr_25422_25505 = state_25402__$1;
(statearr_25422_25505[(1)] = (35));

} else {
var statearr_25423_25506 = state_25402__$1;
(statearr_25423_25506[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25403 === (40))){
var inst_25377 = (state_25402[(20)]);
var inst_25376 = (state_25402[(2)]);
var inst_25377__$1 = cljs.core.get.call(null,inst_25376,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_25378 = cljs.core.get.call(null,inst_25376,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_25379 = cljs.core.not_empty.call(null,inst_25377__$1);
var state_25402__$1 = (function (){var statearr_25424 = state_25402;
(statearr_25424[(21)] = inst_25378);

(statearr_25424[(20)] = inst_25377__$1);

return statearr_25424;
})();
if(cljs.core.truth_(inst_25379)){
var statearr_25425_25507 = state_25402__$1;
(statearr_25425_25507[(1)] = (41));

} else {
var statearr_25426_25508 = state_25402__$1;
(statearr_25426_25508[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25403 === (33))){
var state_25402__$1 = state_25402;
var statearr_25427_25509 = state_25402__$1;
(statearr_25427_25509[(2)] = false);

(statearr_25427_25509[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25403 === (13))){
var inst_25276 = (state_25402[(22)]);
var inst_25280 = cljs.core.chunk_first.call(null,inst_25276);
var inst_25281 = cljs.core.chunk_rest.call(null,inst_25276);
var inst_25282 = cljs.core.count.call(null,inst_25280);
var inst_25263 = inst_25281;
var inst_25264 = inst_25280;
var inst_25265 = inst_25282;
var inst_25266 = (0);
var state_25402__$1 = (function (){var statearr_25428 = state_25402;
(statearr_25428[(7)] = inst_25264);

(statearr_25428[(8)] = inst_25265);

(statearr_25428[(9)] = inst_25263);

(statearr_25428[(10)] = inst_25266);

return statearr_25428;
})();
var statearr_25429_25510 = state_25402__$1;
(statearr_25429_25510[(2)] = null);

(statearr_25429_25510[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25403 === (22))){
var inst_25320 = (state_25402[(23)]);
var inst_25324 = (state_25402[(24)]);
var inst_25316 = (state_25402[(19)]);
var inst_25319 = (state_25402[(25)]);
var inst_25319__$1 = (state_25402[(2)]);
var inst_25320__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_25319__$1);
var inst_25321 = (function (){var all_files = inst_25316;
var res_SINGLEQUOTE_ = inst_25319__$1;
var res = inst_25320__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_25320,inst_25324,inst_25316,inst_25319,inst_25319__$1,inst_25320__$1,state_val_25403,c__21739__auto__,map__25248,map__25248__$1,opts,before_jsload,on_jsload,reload_dependents,map__25249,map__25249__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__24999_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__24999_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_25320,inst_25324,inst_25316,inst_25319,inst_25319__$1,inst_25320__$1,state_val_25403,c__21739__auto__,map__25248,map__25248__$1,opts,before_jsload,on_jsload,reload_dependents,map__25249,map__25249__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25322 = cljs.core.filter.call(null,inst_25321,inst_25319__$1);
var inst_25323 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_25324__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_25323);
var inst_25325 = cljs.core.not_empty.call(null,inst_25324__$1);
var state_25402__$1 = (function (){var statearr_25430 = state_25402;
(statearr_25430[(23)] = inst_25320__$1);

(statearr_25430[(24)] = inst_25324__$1);

(statearr_25430[(26)] = inst_25322);

(statearr_25430[(25)] = inst_25319__$1);

return statearr_25430;
})();
if(cljs.core.truth_(inst_25325)){
var statearr_25431_25511 = state_25402__$1;
(statearr_25431_25511[(1)] = (23));

} else {
var statearr_25432_25512 = state_25402__$1;
(statearr_25432_25512[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25403 === (36))){
var state_25402__$1 = state_25402;
var statearr_25433_25513 = state_25402__$1;
(statearr_25433_25513[(2)] = false);

(statearr_25433_25513[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25403 === (41))){
var inst_25377 = (state_25402[(20)]);
var inst_25381 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_25382 = cljs.core.map.call(null,inst_25381,inst_25377);
var inst_25383 = cljs.core.pr_str.call(null,inst_25382);
var inst_25384 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_25383)].join('');
var inst_25385 = figwheel.client.utils.log.call(null,inst_25384);
var state_25402__$1 = state_25402;
var statearr_25434_25514 = state_25402__$1;
(statearr_25434_25514[(2)] = inst_25385);

(statearr_25434_25514[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25403 === (43))){
var inst_25378 = (state_25402[(21)]);
var inst_25388 = (state_25402[(2)]);
var inst_25389 = cljs.core.not_empty.call(null,inst_25378);
var state_25402__$1 = (function (){var statearr_25435 = state_25402;
(statearr_25435[(27)] = inst_25388);

return statearr_25435;
})();
if(cljs.core.truth_(inst_25389)){
var statearr_25436_25515 = state_25402__$1;
(statearr_25436_25515[(1)] = (44));

} else {
var statearr_25437_25516 = state_25402__$1;
(statearr_25437_25516[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25403 === (29))){
var inst_25320 = (state_25402[(23)]);
var inst_25324 = (state_25402[(24)]);
var inst_25356 = (state_25402[(16)]);
var inst_25316 = (state_25402[(19)]);
var inst_25322 = (state_25402[(26)]);
var inst_25319 = (state_25402[(25)]);
var inst_25352 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_25355 = (function (){var all_files = inst_25316;
var res_SINGLEQUOTE_ = inst_25319;
var res = inst_25320;
var files_not_loaded = inst_25322;
var dependencies_that_loaded = inst_25324;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25320,inst_25324,inst_25356,inst_25316,inst_25322,inst_25319,inst_25352,state_val_25403,c__21739__auto__,map__25248,map__25248__$1,opts,before_jsload,on_jsload,reload_dependents,map__25249,map__25249__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__25354){
var map__25438 = p__25354;
var map__25438__$1 = ((((!((map__25438 == null)))?((((map__25438.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25438.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25438):map__25438);
var namespace = cljs.core.get.call(null,map__25438__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25320,inst_25324,inst_25356,inst_25316,inst_25322,inst_25319,inst_25352,state_val_25403,c__21739__auto__,map__25248,map__25248__$1,opts,before_jsload,on_jsload,reload_dependents,map__25249,map__25249__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25356__$1 = cljs.core.group_by.call(null,inst_25355,inst_25322);
var inst_25358 = (inst_25356__$1 == null);
var inst_25359 = cljs.core.not.call(null,inst_25358);
var state_25402__$1 = (function (){var statearr_25440 = state_25402;
(statearr_25440[(16)] = inst_25356__$1);

(statearr_25440[(28)] = inst_25352);

return statearr_25440;
})();
if(inst_25359){
var statearr_25441_25517 = state_25402__$1;
(statearr_25441_25517[(1)] = (32));

} else {
var statearr_25442_25518 = state_25402__$1;
(statearr_25442_25518[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25403 === (44))){
var inst_25378 = (state_25402[(21)]);
var inst_25391 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_25378);
var inst_25392 = cljs.core.pr_str.call(null,inst_25391);
var inst_25393 = [cljs.core.str("not required: "),cljs.core.str(inst_25392)].join('');
var inst_25394 = figwheel.client.utils.log.call(null,inst_25393);
var state_25402__$1 = state_25402;
var statearr_25443_25519 = state_25402__$1;
(statearr_25443_25519[(2)] = inst_25394);

(statearr_25443_25519[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25403 === (6))){
var inst_25297 = (state_25402[(2)]);
var state_25402__$1 = state_25402;
var statearr_25444_25520 = state_25402__$1;
(statearr_25444_25520[(2)] = inst_25297);

(statearr_25444_25520[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25403 === (28))){
var inst_25322 = (state_25402[(26)]);
var inst_25349 = (state_25402[(2)]);
var inst_25350 = cljs.core.not_empty.call(null,inst_25322);
var state_25402__$1 = (function (){var statearr_25445 = state_25402;
(statearr_25445[(29)] = inst_25349);

return statearr_25445;
})();
if(cljs.core.truth_(inst_25350)){
var statearr_25446_25521 = state_25402__$1;
(statearr_25446_25521[(1)] = (29));

} else {
var statearr_25447_25522 = state_25402__$1;
(statearr_25447_25522[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25403 === (25))){
var inst_25320 = (state_25402[(23)]);
var inst_25336 = (state_25402[(2)]);
var inst_25337 = cljs.core.not_empty.call(null,inst_25320);
var state_25402__$1 = (function (){var statearr_25448 = state_25402;
(statearr_25448[(30)] = inst_25336);

return statearr_25448;
})();
if(cljs.core.truth_(inst_25337)){
var statearr_25449_25523 = state_25402__$1;
(statearr_25449_25523[(1)] = (26));

} else {
var statearr_25450_25524 = state_25402__$1;
(statearr_25450_25524[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25403 === (34))){
var inst_25371 = (state_25402[(2)]);
var state_25402__$1 = state_25402;
if(cljs.core.truth_(inst_25371)){
var statearr_25451_25525 = state_25402__$1;
(statearr_25451_25525[(1)] = (38));

} else {
var statearr_25452_25526 = state_25402__$1;
(statearr_25452_25526[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25403 === (17))){
var state_25402__$1 = state_25402;
var statearr_25453_25527 = state_25402__$1;
(statearr_25453_25527[(2)] = recompile_dependents);

(statearr_25453_25527[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25403 === (3))){
var state_25402__$1 = state_25402;
var statearr_25454_25528 = state_25402__$1;
(statearr_25454_25528[(2)] = null);

(statearr_25454_25528[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25403 === (12))){
var inst_25293 = (state_25402[(2)]);
var state_25402__$1 = state_25402;
var statearr_25455_25529 = state_25402__$1;
(statearr_25455_25529[(2)] = inst_25293);

(statearr_25455_25529[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25403 === (2))){
var inst_25255 = (state_25402[(13)]);
var inst_25262 = cljs.core.seq.call(null,inst_25255);
var inst_25263 = inst_25262;
var inst_25264 = null;
var inst_25265 = (0);
var inst_25266 = (0);
var state_25402__$1 = (function (){var statearr_25456 = state_25402;
(statearr_25456[(7)] = inst_25264);

(statearr_25456[(8)] = inst_25265);

(statearr_25456[(9)] = inst_25263);

(statearr_25456[(10)] = inst_25266);

return statearr_25456;
})();
var statearr_25457_25530 = state_25402__$1;
(statearr_25457_25530[(2)] = null);

(statearr_25457_25530[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25403 === (23))){
var inst_25320 = (state_25402[(23)]);
var inst_25324 = (state_25402[(24)]);
var inst_25316 = (state_25402[(19)]);
var inst_25322 = (state_25402[(26)]);
var inst_25319 = (state_25402[(25)]);
var inst_25327 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_25329 = (function (){var all_files = inst_25316;
var res_SINGLEQUOTE_ = inst_25319;
var res = inst_25320;
var files_not_loaded = inst_25322;
var dependencies_that_loaded = inst_25324;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25320,inst_25324,inst_25316,inst_25322,inst_25319,inst_25327,state_val_25403,c__21739__auto__,map__25248,map__25248__$1,opts,before_jsload,on_jsload,reload_dependents,map__25249,map__25249__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__25328){
var map__25458 = p__25328;
var map__25458__$1 = ((((!((map__25458 == null)))?((((map__25458.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25458.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25458):map__25458);
var request_url = cljs.core.get.call(null,map__25458__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25320,inst_25324,inst_25316,inst_25322,inst_25319,inst_25327,state_val_25403,c__21739__auto__,map__25248,map__25248__$1,opts,before_jsload,on_jsload,reload_dependents,map__25249,map__25249__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25330 = cljs.core.reverse.call(null,inst_25324);
var inst_25331 = cljs.core.map.call(null,inst_25329,inst_25330);
var inst_25332 = cljs.core.pr_str.call(null,inst_25331);
var inst_25333 = figwheel.client.utils.log.call(null,inst_25332);
var state_25402__$1 = (function (){var statearr_25460 = state_25402;
(statearr_25460[(31)] = inst_25327);

return statearr_25460;
})();
var statearr_25461_25531 = state_25402__$1;
(statearr_25461_25531[(2)] = inst_25333);

(statearr_25461_25531[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25403 === (35))){
var state_25402__$1 = state_25402;
var statearr_25462_25532 = state_25402__$1;
(statearr_25462_25532[(2)] = true);

(statearr_25462_25532[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25403 === (19))){
var inst_25306 = (state_25402[(12)]);
var inst_25312 = figwheel.client.file_reloading.expand_files.call(null,inst_25306);
var state_25402__$1 = state_25402;
var statearr_25463_25533 = state_25402__$1;
(statearr_25463_25533[(2)] = inst_25312);

(statearr_25463_25533[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25403 === (11))){
var state_25402__$1 = state_25402;
var statearr_25464_25534 = state_25402__$1;
(statearr_25464_25534[(2)] = null);

(statearr_25464_25534[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25403 === (9))){
var inst_25295 = (state_25402[(2)]);
var state_25402__$1 = state_25402;
var statearr_25465_25535 = state_25402__$1;
(statearr_25465_25535[(2)] = inst_25295);

(statearr_25465_25535[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25403 === (5))){
var inst_25265 = (state_25402[(8)]);
var inst_25266 = (state_25402[(10)]);
var inst_25268 = (inst_25266 < inst_25265);
var inst_25269 = inst_25268;
var state_25402__$1 = state_25402;
if(cljs.core.truth_(inst_25269)){
var statearr_25466_25536 = state_25402__$1;
(statearr_25466_25536[(1)] = (7));

} else {
var statearr_25467_25537 = state_25402__$1;
(statearr_25467_25537[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25403 === (14))){
var inst_25276 = (state_25402[(22)]);
var inst_25285 = cljs.core.first.call(null,inst_25276);
var inst_25286 = figwheel.client.file_reloading.eval_body.call(null,inst_25285,opts);
var inst_25287 = cljs.core.next.call(null,inst_25276);
var inst_25263 = inst_25287;
var inst_25264 = null;
var inst_25265 = (0);
var inst_25266 = (0);
var state_25402__$1 = (function (){var statearr_25468 = state_25402;
(statearr_25468[(32)] = inst_25286);

(statearr_25468[(7)] = inst_25264);

(statearr_25468[(8)] = inst_25265);

(statearr_25468[(9)] = inst_25263);

(statearr_25468[(10)] = inst_25266);

return statearr_25468;
})();
var statearr_25469_25538 = state_25402__$1;
(statearr_25469_25538[(2)] = null);

(statearr_25469_25538[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25403 === (45))){
var state_25402__$1 = state_25402;
var statearr_25470_25539 = state_25402__$1;
(statearr_25470_25539[(2)] = null);

(statearr_25470_25539[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25403 === (26))){
var inst_25320 = (state_25402[(23)]);
var inst_25324 = (state_25402[(24)]);
var inst_25316 = (state_25402[(19)]);
var inst_25322 = (state_25402[(26)]);
var inst_25319 = (state_25402[(25)]);
var inst_25339 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_25341 = (function (){var all_files = inst_25316;
var res_SINGLEQUOTE_ = inst_25319;
var res = inst_25320;
var files_not_loaded = inst_25322;
var dependencies_that_loaded = inst_25324;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25320,inst_25324,inst_25316,inst_25322,inst_25319,inst_25339,state_val_25403,c__21739__auto__,map__25248,map__25248__$1,opts,before_jsload,on_jsload,reload_dependents,map__25249,map__25249__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__25340){
var map__25471 = p__25340;
var map__25471__$1 = ((((!((map__25471 == null)))?((((map__25471.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25471.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25471):map__25471);
var namespace = cljs.core.get.call(null,map__25471__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__25471__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25320,inst_25324,inst_25316,inst_25322,inst_25319,inst_25339,state_val_25403,c__21739__auto__,map__25248,map__25248__$1,opts,before_jsload,on_jsload,reload_dependents,map__25249,map__25249__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25342 = cljs.core.map.call(null,inst_25341,inst_25320);
var inst_25343 = cljs.core.pr_str.call(null,inst_25342);
var inst_25344 = figwheel.client.utils.log.call(null,inst_25343);
var inst_25345 = (function (){var all_files = inst_25316;
var res_SINGLEQUOTE_ = inst_25319;
var res = inst_25320;
var files_not_loaded = inst_25322;
var dependencies_that_loaded = inst_25324;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25320,inst_25324,inst_25316,inst_25322,inst_25319,inst_25339,inst_25341,inst_25342,inst_25343,inst_25344,state_val_25403,c__21739__auto__,map__25248,map__25248__$1,opts,before_jsload,on_jsload,reload_dependents,map__25249,map__25249__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25320,inst_25324,inst_25316,inst_25322,inst_25319,inst_25339,inst_25341,inst_25342,inst_25343,inst_25344,state_val_25403,c__21739__auto__,map__25248,map__25248__$1,opts,before_jsload,on_jsload,reload_dependents,map__25249,map__25249__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25346 = setTimeout(inst_25345,(10));
var state_25402__$1 = (function (){var statearr_25473 = state_25402;
(statearr_25473[(33)] = inst_25339);

(statearr_25473[(34)] = inst_25344);

return statearr_25473;
})();
var statearr_25474_25540 = state_25402__$1;
(statearr_25474_25540[(2)] = inst_25346);

(statearr_25474_25540[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25403 === (16))){
var state_25402__$1 = state_25402;
var statearr_25475_25541 = state_25402__$1;
(statearr_25475_25541[(2)] = reload_dependents);

(statearr_25475_25541[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25403 === (38))){
var inst_25356 = (state_25402[(16)]);
var inst_25373 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25356);
var state_25402__$1 = state_25402;
var statearr_25476_25542 = state_25402__$1;
(statearr_25476_25542[(2)] = inst_25373);

(statearr_25476_25542[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25403 === (30))){
var state_25402__$1 = state_25402;
var statearr_25477_25543 = state_25402__$1;
(statearr_25477_25543[(2)] = null);

(statearr_25477_25543[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25403 === (10))){
var inst_25276 = (state_25402[(22)]);
var inst_25278 = cljs.core.chunked_seq_QMARK_.call(null,inst_25276);
var state_25402__$1 = state_25402;
if(inst_25278){
var statearr_25478_25544 = state_25402__$1;
(statearr_25478_25544[(1)] = (13));

} else {
var statearr_25479_25545 = state_25402__$1;
(statearr_25479_25545[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25403 === (18))){
var inst_25310 = (state_25402[(2)]);
var state_25402__$1 = state_25402;
if(cljs.core.truth_(inst_25310)){
var statearr_25480_25546 = state_25402__$1;
(statearr_25480_25546[(1)] = (19));

} else {
var statearr_25481_25547 = state_25402__$1;
(statearr_25481_25547[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25403 === (42))){
var state_25402__$1 = state_25402;
var statearr_25482_25548 = state_25402__$1;
(statearr_25482_25548[(2)] = null);

(statearr_25482_25548[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25403 === (37))){
var inst_25368 = (state_25402[(2)]);
var state_25402__$1 = state_25402;
var statearr_25483_25549 = state_25402__$1;
(statearr_25483_25549[(2)] = inst_25368);

(statearr_25483_25549[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25403 === (8))){
var inst_25276 = (state_25402[(22)]);
var inst_25263 = (state_25402[(9)]);
var inst_25276__$1 = cljs.core.seq.call(null,inst_25263);
var state_25402__$1 = (function (){var statearr_25484 = state_25402;
(statearr_25484[(22)] = inst_25276__$1);

return statearr_25484;
})();
if(inst_25276__$1){
var statearr_25485_25550 = state_25402__$1;
(statearr_25485_25550[(1)] = (10));

} else {
var statearr_25486_25551 = state_25402__$1;
(statearr_25486_25551[(1)] = (11));

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
}
});})(c__21739__auto__,map__25248,map__25248__$1,opts,before_jsload,on_jsload,reload_dependents,map__25249,map__25249__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__21627__auto__,c__21739__auto__,map__25248,map__25248__$1,opts,before_jsload,on_jsload,reload_dependents,map__25249,map__25249__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21628__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21628__auto____0 = (function (){
var statearr_25490 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25490[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__21628__auto__);

(statearr_25490[(1)] = (1));

return statearr_25490;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21628__auto____1 = (function (state_25402){
while(true){
var ret_value__21629__auto__ = (function (){try{while(true){
var result__21630__auto__ = switch__21627__auto__.call(null,state_25402);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21630__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21630__auto__;
}
break;
}
}catch (e25491){if((e25491 instanceof Object)){
var ex__21631__auto__ = e25491;
var statearr_25492_25552 = state_25402;
(statearr_25492_25552[(5)] = ex__21631__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25402);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25491;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21629__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25553 = state_25402;
state_25402 = G__25553;
continue;
} else {
return ret_value__21629__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__21628__auto__ = function(state_25402){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21628__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21628__auto____1.call(this,state_25402);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__21628__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__21628__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__21628__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__21628__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21628__auto__;
})()
;})(switch__21627__auto__,c__21739__auto__,map__25248,map__25248__$1,opts,before_jsload,on_jsload,reload_dependents,map__25249,map__25249__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__21741__auto__ = (function (){var statearr_25493 = f__21740__auto__.call(null);
(statearr_25493[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21739__auto__);

return statearr_25493;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21741__auto__);
});})(c__21739__auto__,map__25248,map__25248__$1,opts,before_jsload,on_jsload,reload_dependents,map__25249,map__25249__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__21739__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__25556,link){
var map__25559 = p__25556;
var map__25559__$1 = ((((!((map__25559 == null)))?((((map__25559.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25559.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25559):map__25559);
var file = cljs.core.get.call(null,map__25559__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__25559,map__25559__$1,file){
return (function (p1__25554_SHARP_,p2__25555_SHARP_){
if(cljs.core._EQ_.call(null,p1__25554_SHARP_,p2__25555_SHARP_)){
return p1__25554_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__25559,map__25559__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__25565){
var map__25566 = p__25565;
var map__25566__$1 = ((((!((map__25566 == null)))?((((map__25566.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25566.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25566):map__25566);
var match_length = cljs.core.get.call(null,map__25566__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__25566__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__25561_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__25561_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4425__auto__)){
var res = temp__4425__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args25568 = [];
var len__19349__auto___25571 = arguments.length;
var i__19350__auto___25572 = (0);
while(true){
if((i__19350__auto___25572 < len__19349__auto___25571)){
args25568.push((arguments[i__19350__auto___25572]));

var G__25573 = (i__19350__auto___25572 + (1));
i__19350__auto___25572 = G__25573;
continue;
} else {
}
break;
}

var G__25570 = args25568.length;
switch (G__25570) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25568.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__25575_SHARP_,p2__25576_SHARP_){
return cljs.core.assoc.call(null,p1__25575_SHARP_,cljs.core.get.call(null,p2__25576_SHARP_,key),p2__25576_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__25577){
var map__25580 = p__25577;
var map__25580__$1 = ((((!((map__25580 == null)))?((((map__25580.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25580.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25580):map__25580);
var f_data = map__25580__$1;
var file = cljs.core.get.call(null,map__25580__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4425__auto__)){
var link = temp__4425__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__25582,files_msg){
var map__25589 = p__25582;
var map__25589__$1 = ((((!((map__25589 == null)))?((((map__25589.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25589.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25589):map__25589);
var opts = map__25589__$1;
var on_cssload = cljs.core.get.call(null,map__25589__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__25591_25595 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__25592_25596 = null;
var count__25593_25597 = (0);
var i__25594_25598 = (0);
while(true){
if((i__25594_25598 < count__25593_25597)){
var f_25599 = cljs.core._nth.call(null,chunk__25592_25596,i__25594_25598);
figwheel.client.file_reloading.reload_css_file.call(null,f_25599);

var G__25600 = seq__25591_25595;
var G__25601 = chunk__25592_25596;
var G__25602 = count__25593_25597;
var G__25603 = (i__25594_25598 + (1));
seq__25591_25595 = G__25600;
chunk__25592_25596 = G__25601;
count__25593_25597 = G__25602;
i__25594_25598 = G__25603;
continue;
} else {
var temp__4425__auto___25604 = cljs.core.seq.call(null,seq__25591_25595);
if(temp__4425__auto___25604){
var seq__25591_25605__$1 = temp__4425__auto___25604;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25591_25605__$1)){
var c__19094__auto___25606 = cljs.core.chunk_first.call(null,seq__25591_25605__$1);
var G__25607 = cljs.core.chunk_rest.call(null,seq__25591_25605__$1);
var G__25608 = c__19094__auto___25606;
var G__25609 = cljs.core.count.call(null,c__19094__auto___25606);
var G__25610 = (0);
seq__25591_25595 = G__25607;
chunk__25592_25596 = G__25608;
count__25593_25597 = G__25609;
i__25594_25598 = G__25610;
continue;
} else {
var f_25611 = cljs.core.first.call(null,seq__25591_25605__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_25611);

var G__25612 = cljs.core.next.call(null,seq__25591_25605__$1);
var G__25613 = null;
var G__25614 = (0);
var G__25615 = (0);
seq__25591_25595 = G__25612;
chunk__25592_25596 = G__25613;
count__25593_25597 = G__25614;
i__25594_25598 = G__25615;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__25589,map__25589__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__25589,map__25589__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map