// Compiled by ClojureScript 1.7.228 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__25936 = cljs.core._EQ_;
var expr__25937 = (function (){var or__18291__auto__ = (function (){try{return localStorage.getItem("figwheel_autoload");
}catch (e25940){if((e25940 instanceof Error)){
var e = e25940;
return false;
} else {
throw e25940;

}
}})();
if(cljs.core.truth_(or__18291__auto__)){
return or__18291__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__25936.call(null,"true",expr__25937))){
return true;
} else {
if(cljs.core.truth_(pred__25936.call(null,"false",expr__25937))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__25937)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
try{localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
}catch (e25942){if((e25942 instanceof Error)){
var e = e25942;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e25942;

}
}} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.repl_print_fn = (function figwheel$client$repl_print_fn(var_args){
var args__19356__auto__ = [];
var len__19349__auto___25944 = arguments.length;
var i__19350__auto___25945 = (0);
while(true){
if((i__19350__auto___25945 < len__19349__auto___25944)){
args__19356__auto__.push((arguments[i__19350__auto___25945]));

var G__25946 = (i__19350__auto___25945 + (1));
i__19350__auto___25945 = G__25946;
continue;
} else {
}
break;
}

var argseq__19357__auto__ = ((((0) < args__19356__auto__.length))?(new cljs.core.IndexedSeq(args__19356__auto__.slice((0)),(0))):null);
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__19357__auto__);
});

figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));

return null;
});

figwheel.client.repl_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_print_fn.cljs$lang$applyTo = (function (seq25943){
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25943));
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__25947){
var map__25950 = p__25947;
var map__25950__$1 = ((((!((map__25950 == null)))?((((map__25950.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25950.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25950):map__25950);
var message = cljs.core.get.call(null,map__25950__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__25950__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__18291__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__18291__auto__)){
return or__18291__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__18279__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__18279__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__18279__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__21739__auto___26112 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21739__auto___26112,ch){
return (function (){
var f__21740__auto__ = (function (){var switch__21627__auto__ = ((function (c__21739__auto___26112,ch){
return (function (state_26081){
var state_val_26082 = (state_26081[(1)]);
if((state_val_26082 === (7))){
var inst_26077 = (state_26081[(2)]);
var state_26081__$1 = state_26081;
var statearr_26083_26113 = state_26081__$1;
(statearr_26083_26113[(2)] = inst_26077);

(statearr_26083_26113[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26082 === (1))){
var state_26081__$1 = state_26081;
var statearr_26084_26114 = state_26081__$1;
(statearr_26084_26114[(2)] = null);

(statearr_26084_26114[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26082 === (4))){
var inst_26034 = (state_26081[(7)]);
var inst_26034__$1 = (state_26081[(2)]);
var state_26081__$1 = (function (){var statearr_26085 = state_26081;
(statearr_26085[(7)] = inst_26034__$1);

return statearr_26085;
})();
if(cljs.core.truth_(inst_26034__$1)){
var statearr_26086_26115 = state_26081__$1;
(statearr_26086_26115[(1)] = (5));

} else {
var statearr_26087_26116 = state_26081__$1;
(statearr_26087_26116[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26082 === (15))){
var inst_26041 = (state_26081[(8)]);
var inst_26056 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_26041);
var inst_26057 = cljs.core.first.call(null,inst_26056);
var inst_26058 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_26057);
var inst_26059 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_26058)].join('');
var inst_26060 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_26059);
var state_26081__$1 = state_26081;
var statearr_26088_26117 = state_26081__$1;
(statearr_26088_26117[(2)] = inst_26060);

(statearr_26088_26117[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26082 === (13))){
var inst_26065 = (state_26081[(2)]);
var state_26081__$1 = state_26081;
var statearr_26089_26118 = state_26081__$1;
(statearr_26089_26118[(2)] = inst_26065);

(statearr_26089_26118[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26082 === (6))){
var state_26081__$1 = state_26081;
var statearr_26090_26119 = state_26081__$1;
(statearr_26090_26119[(2)] = null);

(statearr_26090_26119[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26082 === (17))){
var inst_26063 = (state_26081[(2)]);
var state_26081__$1 = state_26081;
var statearr_26091_26120 = state_26081__$1;
(statearr_26091_26120[(2)] = inst_26063);

(statearr_26091_26120[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26082 === (3))){
var inst_26079 = (state_26081[(2)]);
var state_26081__$1 = state_26081;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26081__$1,inst_26079);
} else {
if((state_val_26082 === (12))){
var inst_26040 = (state_26081[(9)]);
var inst_26054 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_26040,opts);
var state_26081__$1 = state_26081;
if(cljs.core.truth_(inst_26054)){
var statearr_26092_26121 = state_26081__$1;
(statearr_26092_26121[(1)] = (15));

} else {
var statearr_26093_26122 = state_26081__$1;
(statearr_26093_26122[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26082 === (2))){
var state_26081__$1 = state_26081;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26081__$1,(4),ch);
} else {
if((state_val_26082 === (11))){
var inst_26041 = (state_26081[(8)]);
var inst_26046 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26047 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_26041);
var inst_26048 = cljs.core.async.timeout.call(null,(1000));
var inst_26049 = [inst_26047,inst_26048];
var inst_26050 = (new cljs.core.PersistentVector(null,2,(5),inst_26046,inst_26049,null));
var state_26081__$1 = state_26081;
return cljs.core.async.ioc_alts_BANG_.call(null,state_26081__$1,(14),inst_26050);
} else {
if((state_val_26082 === (9))){
var inst_26041 = (state_26081[(8)]);
var inst_26067 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_26068 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_26041);
var inst_26069 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_26068);
var inst_26070 = [cljs.core.str("Not loading: "),cljs.core.str(inst_26069)].join('');
var inst_26071 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_26070);
var state_26081__$1 = (function (){var statearr_26094 = state_26081;
(statearr_26094[(10)] = inst_26067);

return statearr_26094;
})();
var statearr_26095_26123 = state_26081__$1;
(statearr_26095_26123[(2)] = inst_26071);

(statearr_26095_26123[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26082 === (5))){
var inst_26034 = (state_26081[(7)]);
var inst_26036 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_26037 = (new cljs.core.PersistentArrayMap(null,2,inst_26036,null));
var inst_26038 = (new cljs.core.PersistentHashSet(null,inst_26037,null));
var inst_26039 = figwheel.client.focus_msgs.call(null,inst_26038,inst_26034);
var inst_26040 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_26039);
var inst_26041 = cljs.core.first.call(null,inst_26039);
var inst_26042 = figwheel.client.autoload_QMARK_.call(null);
var state_26081__$1 = (function (){var statearr_26096 = state_26081;
(statearr_26096[(9)] = inst_26040);

(statearr_26096[(8)] = inst_26041);

return statearr_26096;
})();
if(cljs.core.truth_(inst_26042)){
var statearr_26097_26124 = state_26081__$1;
(statearr_26097_26124[(1)] = (8));

} else {
var statearr_26098_26125 = state_26081__$1;
(statearr_26098_26125[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26082 === (14))){
var inst_26052 = (state_26081[(2)]);
var state_26081__$1 = state_26081;
var statearr_26099_26126 = state_26081__$1;
(statearr_26099_26126[(2)] = inst_26052);

(statearr_26099_26126[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26082 === (16))){
var state_26081__$1 = state_26081;
var statearr_26100_26127 = state_26081__$1;
(statearr_26100_26127[(2)] = null);

(statearr_26100_26127[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26082 === (10))){
var inst_26073 = (state_26081[(2)]);
var state_26081__$1 = (function (){var statearr_26101 = state_26081;
(statearr_26101[(11)] = inst_26073);

return statearr_26101;
})();
var statearr_26102_26128 = state_26081__$1;
(statearr_26102_26128[(2)] = null);

(statearr_26102_26128[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26082 === (8))){
var inst_26040 = (state_26081[(9)]);
var inst_26044 = figwheel.client.reload_file_state_QMARK_.call(null,inst_26040,opts);
var state_26081__$1 = state_26081;
if(cljs.core.truth_(inst_26044)){
var statearr_26103_26129 = state_26081__$1;
(statearr_26103_26129[(1)] = (11));

} else {
var statearr_26104_26130 = state_26081__$1;
(statearr_26104_26130[(1)] = (12));

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
});})(c__21739__auto___26112,ch))
;
return ((function (switch__21627__auto__,c__21739__auto___26112,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__21628__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__21628__auto____0 = (function (){
var statearr_26108 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26108[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__21628__auto__);

(statearr_26108[(1)] = (1));

return statearr_26108;
});
var figwheel$client$file_reloader_plugin_$_state_machine__21628__auto____1 = (function (state_26081){
while(true){
var ret_value__21629__auto__ = (function (){try{while(true){
var result__21630__auto__ = switch__21627__auto__.call(null,state_26081);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21630__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21630__auto__;
}
break;
}
}catch (e26109){if((e26109 instanceof Object)){
var ex__21631__auto__ = e26109;
var statearr_26110_26131 = state_26081;
(statearr_26110_26131[(5)] = ex__21631__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26081);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26109;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21629__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26132 = state_26081;
state_26081 = G__26132;
continue;
} else {
return ret_value__21629__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__21628__auto__ = function(state_26081){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__21628__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__21628__auto____1.call(this,state_26081);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__21628__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__21628__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__21628__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__21628__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__21628__auto__;
})()
;})(switch__21627__auto__,c__21739__auto___26112,ch))
})();
var state__21741__auto__ = (function (){var statearr_26111 = f__21740__auto__.call(null);
(statearr_26111[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21739__auto___26112);

return statearr_26111;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21741__auto__);
});})(c__21739__auto___26112,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__26133_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__26133_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_26140 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_26140){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_26138 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_26139 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),figwheel.client.utils.eval_helper.call(null,code,opts)], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_26139;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_26138;
}}catch (e26137){if((e26137 instanceof Error)){
var e = e26137;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_26140], null));
} else {
var e = e26137;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_26140))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__26141){
var map__26148 = p__26141;
var map__26148__$1 = ((((!((map__26148 == null)))?((((map__26148.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26148.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26148):map__26148);
var opts = map__26148__$1;
var build_id = cljs.core.get.call(null,map__26148__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__26148,map__26148__$1,opts,build_id){
return (function (p__26150){
var vec__26151 = p__26150;
var map__26152 = cljs.core.nth.call(null,vec__26151,(0),null);
var map__26152__$1 = ((((!((map__26152 == null)))?((((map__26152.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26152.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26152):map__26152);
var msg = map__26152__$1;
var msg_name = cljs.core.get.call(null,map__26152__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__26151,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__26151,map__26152,map__26152__$1,msg,msg_name,_,map__26148,map__26148__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__26151,map__26152,map__26152__$1,msg,msg_name,_,map__26148,map__26148__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__26148,map__26148__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__26158){
var vec__26159 = p__26158;
var map__26160 = cljs.core.nth.call(null,vec__26159,(0),null);
var map__26160__$1 = ((((!((map__26160 == null)))?((((map__26160.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26160.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26160):map__26160);
var msg = map__26160__$1;
var msg_name = cljs.core.get.call(null,map__26160__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__26159,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__26162){
var map__26172 = p__26162;
var map__26172__$1 = ((((!((map__26172 == null)))?((((map__26172.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26172.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26172):map__26172);
var on_compile_warning = cljs.core.get.call(null,map__26172__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__26172__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__26172,map__26172__$1,on_compile_warning,on_compile_fail){
return (function (p__26174){
var vec__26175 = p__26174;
var map__26176 = cljs.core.nth.call(null,vec__26175,(0),null);
var map__26176__$1 = ((((!((map__26176 == null)))?((((map__26176.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26176.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26176):map__26176);
var msg = map__26176__$1;
var msg_name = cljs.core.get.call(null,map__26176__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__26175,(1));
var pred__26178 = cljs.core._EQ_;
var expr__26179 = msg_name;
if(cljs.core.truth_(pred__26178.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__26179))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__26178.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__26179))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__26172,map__26172__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__21739__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21739__auto__,msg_hist,msg_names,msg){
return (function (){
var f__21740__auto__ = (function (){var switch__21627__auto__ = ((function (c__21739__auto__,msg_hist,msg_names,msg){
return (function (state_26395){
var state_val_26396 = (state_26395[(1)]);
if((state_val_26396 === (7))){
var inst_26319 = (state_26395[(2)]);
var state_26395__$1 = state_26395;
if(cljs.core.truth_(inst_26319)){
var statearr_26397_26443 = state_26395__$1;
(statearr_26397_26443[(1)] = (8));

} else {
var statearr_26398_26444 = state_26395__$1;
(statearr_26398_26444[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26396 === (20))){
var inst_26389 = (state_26395[(2)]);
var state_26395__$1 = state_26395;
var statearr_26399_26445 = state_26395__$1;
(statearr_26399_26445[(2)] = inst_26389);

(statearr_26399_26445[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26396 === (27))){
var inst_26385 = (state_26395[(2)]);
var state_26395__$1 = state_26395;
var statearr_26400_26446 = state_26395__$1;
(statearr_26400_26446[(2)] = inst_26385);

(statearr_26400_26446[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26396 === (1))){
var inst_26312 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_26395__$1 = state_26395;
if(cljs.core.truth_(inst_26312)){
var statearr_26401_26447 = state_26395__$1;
(statearr_26401_26447[(1)] = (2));

} else {
var statearr_26402_26448 = state_26395__$1;
(statearr_26402_26448[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26396 === (24))){
var inst_26387 = (state_26395[(2)]);
var state_26395__$1 = state_26395;
var statearr_26403_26449 = state_26395__$1;
(statearr_26403_26449[(2)] = inst_26387);

(statearr_26403_26449[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26396 === (4))){
var inst_26393 = (state_26395[(2)]);
var state_26395__$1 = state_26395;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26395__$1,inst_26393);
} else {
if((state_val_26396 === (15))){
var inst_26391 = (state_26395[(2)]);
var state_26395__$1 = state_26395;
var statearr_26404_26450 = state_26395__$1;
(statearr_26404_26450[(2)] = inst_26391);

(statearr_26404_26450[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26396 === (21))){
var inst_26350 = (state_26395[(2)]);
var state_26395__$1 = state_26395;
var statearr_26405_26451 = state_26395__$1;
(statearr_26405_26451[(2)] = inst_26350);

(statearr_26405_26451[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26396 === (31))){
var inst_26374 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_26395__$1 = state_26395;
if(cljs.core.truth_(inst_26374)){
var statearr_26406_26452 = state_26395__$1;
(statearr_26406_26452[(1)] = (34));

} else {
var statearr_26407_26453 = state_26395__$1;
(statearr_26407_26453[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26396 === (32))){
var inst_26383 = (state_26395[(2)]);
var state_26395__$1 = state_26395;
var statearr_26408_26454 = state_26395__$1;
(statearr_26408_26454[(2)] = inst_26383);

(statearr_26408_26454[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26396 === (33))){
var inst_26372 = (state_26395[(2)]);
var state_26395__$1 = state_26395;
var statearr_26409_26455 = state_26395__$1;
(statearr_26409_26455[(2)] = inst_26372);

(statearr_26409_26455[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26396 === (13))){
var inst_26333 = figwheel.client.heads_up.clear.call(null);
var state_26395__$1 = state_26395;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26395__$1,(16),inst_26333);
} else {
if((state_val_26396 === (22))){
var inst_26354 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26355 = figwheel.client.heads_up.append_message.call(null,inst_26354);
var state_26395__$1 = state_26395;
var statearr_26410_26456 = state_26395__$1;
(statearr_26410_26456[(2)] = inst_26355);

(statearr_26410_26456[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26396 === (36))){
var inst_26381 = (state_26395[(2)]);
var state_26395__$1 = state_26395;
var statearr_26411_26457 = state_26395__$1;
(statearr_26411_26457[(2)] = inst_26381);

(statearr_26411_26457[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26396 === (29))){
var inst_26365 = (state_26395[(2)]);
var state_26395__$1 = state_26395;
var statearr_26412_26458 = state_26395__$1;
(statearr_26412_26458[(2)] = inst_26365);

(statearr_26412_26458[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26396 === (6))){
var inst_26314 = (state_26395[(7)]);
var state_26395__$1 = state_26395;
var statearr_26413_26459 = state_26395__$1;
(statearr_26413_26459[(2)] = inst_26314);

(statearr_26413_26459[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26396 === (28))){
var inst_26361 = (state_26395[(2)]);
var inst_26362 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26363 = figwheel.client.heads_up.display_warning.call(null,inst_26362);
var state_26395__$1 = (function (){var statearr_26414 = state_26395;
(statearr_26414[(8)] = inst_26361);

return statearr_26414;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26395__$1,(29),inst_26363);
} else {
if((state_val_26396 === (25))){
var inst_26359 = figwheel.client.heads_up.clear.call(null);
var state_26395__$1 = state_26395;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26395__$1,(28),inst_26359);
} else {
if((state_val_26396 === (34))){
var inst_26376 = figwheel.client.heads_up.flash_loaded.call(null);
var state_26395__$1 = state_26395;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26395__$1,(37),inst_26376);
} else {
if((state_val_26396 === (17))){
var inst_26341 = (state_26395[(2)]);
var state_26395__$1 = state_26395;
var statearr_26415_26460 = state_26395__$1;
(statearr_26415_26460[(2)] = inst_26341);

(statearr_26415_26460[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26396 === (3))){
var inst_26331 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_26395__$1 = state_26395;
if(cljs.core.truth_(inst_26331)){
var statearr_26416_26461 = state_26395__$1;
(statearr_26416_26461[(1)] = (13));

} else {
var statearr_26417_26462 = state_26395__$1;
(statearr_26417_26462[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26396 === (12))){
var inst_26327 = (state_26395[(2)]);
var state_26395__$1 = state_26395;
var statearr_26418_26463 = state_26395__$1;
(statearr_26418_26463[(2)] = inst_26327);

(statearr_26418_26463[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26396 === (2))){
var inst_26314 = (state_26395[(7)]);
var inst_26314__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_26395__$1 = (function (){var statearr_26419 = state_26395;
(statearr_26419[(7)] = inst_26314__$1);

return statearr_26419;
})();
if(cljs.core.truth_(inst_26314__$1)){
var statearr_26420_26464 = state_26395__$1;
(statearr_26420_26464[(1)] = (5));

} else {
var statearr_26421_26465 = state_26395__$1;
(statearr_26421_26465[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26396 === (23))){
var inst_26357 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_26395__$1 = state_26395;
if(cljs.core.truth_(inst_26357)){
var statearr_26422_26466 = state_26395__$1;
(statearr_26422_26466[(1)] = (25));

} else {
var statearr_26423_26467 = state_26395__$1;
(statearr_26423_26467[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26396 === (35))){
var state_26395__$1 = state_26395;
var statearr_26424_26468 = state_26395__$1;
(statearr_26424_26468[(2)] = null);

(statearr_26424_26468[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26396 === (19))){
var inst_26352 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_26395__$1 = state_26395;
if(cljs.core.truth_(inst_26352)){
var statearr_26425_26469 = state_26395__$1;
(statearr_26425_26469[(1)] = (22));

} else {
var statearr_26426_26470 = state_26395__$1;
(statearr_26426_26470[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26396 === (11))){
var inst_26323 = (state_26395[(2)]);
var state_26395__$1 = state_26395;
var statearr_26427_26471 = state_26395__$1;
(statearr_26427_26471[(2)] = inst_26323);

(statearr_26427_26471[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26396 === (9))){
var inst_26325 = figwheel.client.heads_up.clear.call(null);
var state_26395__$1 = state_26395;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26395__$1,(12),inst_26325);
} else {
if((state_val_26396 === (5))){
var inst_26316 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_26395__$1 = state_26395;
var statearr_26428_26472 = state_26395__$1;
(statearr_26428_26472[(2)] = inst_26316);

(statearr_26428_26472[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26396 === (14))){
var inst_26343 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_26395__$1 = state_26395;
if(cljs.core.truth_(inst_26343)){
var statearr_26429_26473 = state_26395__$1;
(statearr_26429_26473[(1)] = (18));

} else {
var statearr_26430_26474 = state_26395__$1;
(statearr_26430_26474[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26396 === (26))){
var inst_26367 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_26395__$1 = state_26395;
if(cljs.core.truth_(inst_26367)){
var statearr_26431_26475 = state_26395__$1;
(statearr_26431_26475[(1)] = (30));

} else {
var statearr_26432_26476 = state_26395__$1;
(statearr_26432_26476[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26396 === (16))){
var inst_26335 = (state_26395[(2)]);
var inst_26336 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26337 = figwheel.client.format_messages.call(null,inst_26336);
var inst_26338 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26339 = figwheel.client.heads_up.display_error.call(null,inst_26337,inst_26338);
var state_26395__$1 = (function (){var statearr_26433 = state_26395;
(statearr_26433[(9)] = inst_26335);

return statearr_26433;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26395__$1,(17),inst_26339);
} else {
if((state_val_26396 === (30))){
var inst_26369 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26370 = figwheel.client.heads_up.display_warning.call(null,inst_26369);
var state_26395__$1 = state_26395;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26395__$1,(33),inst_26370);
} else {
if((state_val_26396 === (10))){
var inst_26329 = (state_26395[(2)]);
var state_26395__$1 = state_26395;
var statearr_26434_26477 = state_26395__$1;
(statearr_26434_26477[(2)] = inst_26329);

(statearr_26434_26477[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26396 === (18))){
var inst_26345 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26346 = figwheel.client.format_messages.call(null,inst_26345);
var inst_26347 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26348 = figwheel.client.heads_up.display_error.call(null,inst_26346,inst_26347);
var state_26395__$1 = state_26395;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26395__$1,(21),inst_26348);
} else {
if((state_val_26396 === (37))){
var inst_26378 = (state_26395[(2)]);
var state_26395__$1 = state_26395;
var statearr_26435_26478 = state_26395__$1;
(statearr_26435_26478[(2)] = inst_26378);

(statearr_26435_26478[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26396 === (8))){
var inst_26321 = figwheel.client.heads_up.flash_loaded.call(null);
var state_26395__$1 = state_26395;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26395__$1,(11),inst_26321);
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
});})(c__21739__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__21627__auto__,c__21739__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21628__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21628__auto____0 = (function (){
var statearr_26439 = [null,null,null,null,null,null,null,null,null,null];
(statearr_26439[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21628__auto__);

(statearr_26439[(1)] = (1));

return statearr_26439;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21628__auto____1 = (function (state_26395){
while(true){
var ret_value__21629__auto__ = (function (){try{while(true){
var result__21630__auto__ = switch__21627__auto__.call(null,state_26395);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21630__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21630__auto__;
}
break;
}
}catch (e26440){if((e26440 instanceof Object)){
var ex__21631__auto__ = e26440;
var statearr_26441_26479 = state_26395;
(statearr_26441_26479[(5)] = ex__21631__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26395);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26440;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21629__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26480 = state_26395;
state_26395 = G__26480;
continue;
} else {
return ret_value__21629__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21628__auto__ = function(state_26395){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21628__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21628__auto____1.call(this,state_26395);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21628__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21628__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21628__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21628__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21628__auto__;
})()
;})(switch__21627__auto__,c__21739__auto__,msg_hist,msg_names,msg))
})();
var state__21741__auto__ = (function (){var statearr_26442 = f__21740__auto__.call(null);
(statearr_26442[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21739__auto__);

return statearr_26442;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21741__auto__);
});})(c__21739__auto__,msg_hist,msg_names,msg))
);

return c__21739__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__21739__auto___26543 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21739__auto___26543,ch){
return (function (){
var f__21740__auto__ = (function (){var switch__21627__auto__ = ((function (c__21739__auto___26543,ch){
return (function (state_26526){
var state_val_26527 = (state_26526[(1)]);
if((state_val_26527 === (1))){
var state_26526__$1 = state_26526;
var statearr_26528_26544 = state_26526__$1;
(statearr_26528_26544[(2)] = null);

(statearr_26528_26544[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26527 === (2))){
var state_26526__$1 = state_26526;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26526__$1,(4),ch);
} else {
if((state_val_26527 === (3))){
var inst_26524 = (state_26526[(2)]);
var state_26526__$1 = state_26526;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26526__$1,inst_26524);
} else {
if((state_val_26527 === (4))){
var inst_26514 = (state_26526[(7)]);
var inst_26514__$1 = (state_26526[(2)]);
var state_26526__$1 = (function (){var statearr_26529 = state_26526;
(statearr_26529[(7)] = inst_26514__$1);

return statearr_26529;
})();
if(cljs.core.truth_(inst_26514__$1)){
var statearr_26530_26545 = state_26526__$1;
(statearr_26530_26545[(1)] = (5));

} else {
var statearr_26531_26546 = state_26526__$1;
(statearr_26531_26546[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26527 === (5))){
var inst_26514 = (state_26526[(7)]);
var inst_26516 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_26514);
var state_26526__$1 = state_26526;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26526__$1,(8),inst_26516);
} else {
if((state_val_26527 === (6))){
var state_26526__$1 = state_26526;
var statearr_26532_26547 = state_26526__$1;
(statearr_26532_26547[(2)] = null);

(statearr_26532_26547[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26527 === (7))){
var inst_26522 = (state_26526[(2)]);
var state_26526__$1 = state_26526;
var statearr_26533_26548 = state_26526__$1;
(statearr_26533_26548[(2)] = inst_26522);

(statearr_26533_26548[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26527 === (8))){
var inst_26518 = (state_26526[(2)]);
var state_26526__$1 = (function (){var statearr_26534 = state_26526;
(statearr_26534[(8)] = inst_26518);

return statearr_26534;
})();
var statearr_26535_26549 = state_26526__$1;
(statearr_26535_26549[(2)] = null);

(statearr_26535_26549[(1)] = (2));


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
});})(c__21739__auto___26543,ch))
;
return ((function (switch__21627__auto__,c__21739__auto___26543,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__21628__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__21628__auto____0 = (function (){
var statearr_26539 = [null,null,null,null,null,null,null,null,null];
(statearr_26539[(0)] = figwheel$client$heads_up_plugin_$_state_machine__21628__auto__);

(statearr_26539[(1)] = (1));

return statearr_26539;
});
var figwheel$client$heads_up_plugin_$_state_machine__21628__auto____1 = (function (state_26526){
while(true){
var ret_value__21629__auto__ = (function (){try{while(true){
var result__21630__auto__ = switch__21627__auto__.call(null,state_26526);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21630__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21630__auto__;
}
break;
}
}catch (e26540){if((e26540 instanceof Object)){
var ex__21631__auto__ = e26540;
var statearr_26541_26550 = state_26526;
(statearr_26541_26550[(5)] = ex__21631__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26526);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26540;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21629__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26551 = state_26526;
state_26526 = G__26551;
continue;
} else {
return ret_value__21629__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__21628__auto__ = function(state_26526){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__21628__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__21628__auto____1.call(this,state_26526);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__21628__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__21628__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__21628__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__21628__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__21628__auto__;
})()
;})(switch__21627__auto__,c__21739__auto___26543,ch))
})();
var state__21741__auto__ = (function (){var statearr_26542 = f__21740__auto__.call(null);
(statearr_26542[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21739__auto___26543);

return statearr_26542;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21741__auto__);
});})(c__21739__auto___26543,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__21739__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21739__auto__){
return (function (){
var f__21740__auto__ = (function (){var switch__21627__auto__ = ((function (c__21739__auto__){
return (function (state_26572){
var state_val_26573 = (state_26572[(1)]);
if((state_val_26573 === (1))){
var inst_26567 = cljs.core.async.timeout.call(null,(3000));
var state_26572__$1 = state_26572;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26572__$1,(2),inst_26567);
} else {
if((state_val_26573 === (2))){
var inst_26569 = (state_26572[(2)]);
var inst_26570 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_26572__$1 = (function (){var statearr_26574 = state_26572;
(statearr_26574[(7)] = inst_26569);

return statearr_26574;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26572__$1,inst_26570);
} else {
return null;
}
}
});})(c__21739__auto__))
;
return ((function (switch__21627__auto__,c__21739__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__21628__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__21628__auto____0 = (function (){
var statearr_26578 = [null,null,null,null,null,null,null,null];
(statearr_26578[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__21628__auto__);

(statearr_26578[(1)] = (1));

return statearr_26578;
});
var figwheel$client$enforce_project_plugin_$_state_machine__21628__auto____1 = (function (state_26572){
while(true){
var ret_value__21629__auto__ = (function (){try{while(true){
var result__21630__auto__ = switch__21627__auto__.call(null,state_26572);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21630__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21630__auto__;
}
break;
}
}catch (e26579){if((e26579 instanceof Object)){
var ex__21631__auto__ = e26579;
var statearr_26580_26582 = state_26572;
(statearr_26580_26582[(5)] = ex__21631__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26572);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26579;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21629__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26583 = state_26572;
state_26572 = G__26583;
continue;
} else {
return ret_value__21629__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__21628__auto__ = function(state_26572){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__21628__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__21628__auto____1.call(this,state_26572);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__21628__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__21628__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__21628__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__21628__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__21628__auto__;
})()
;})(switch__21627__auto__,c__21739__auto__))
})();
var state__21741__auto__ = (function (){var statearr_26581 = f__21740__auto__.call(null);
(statearr_26581[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21739__auto__);

return statearr_26581;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21741__auto__);
});})(c__21739__auto__))
);

return c__21739__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__26584){
var map__26591 = p__26584;
var map__26591__$1 = ((((!((map__26591 == null)))?((((map__26591.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26591.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26591):map__26591);
var ed = map__26591__$1;
var formatted_exception = cljs.core.get.call(null,map__26591__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__26591__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__26591__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__26593_26597 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__26594_26598 = null;
var count__26595_26599 = (0);
var i__26596_26600 = (0);
while(true){
if((i__26596_26600 < count__26595_26599)){
var msg_26601 = cljs.core._nth.call(null,chunk__26594_26598,i__26596_26600);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_26601);

var G__26602 = seq__26593_26597;
var G__26603 = chunk__26594_26598;
var G__26604 = count__26595_26599;
var G__26605 = (i__26596_26600 + (1));
seq__26593_26597 = G__26602;
chunk__26594_26598 = G__26603;
count__26595_26599 = G__26604;
i__26596_26600 = G__26605;
continue;
} else {
var temp__4425__auto___26606 = cljs.core.seq.call(null,seq__26593_26597);
if(temp__4425__auto___26606){
var seq__26593_26607__$1 = temp__4425__auto___26606;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26593_26607__$1)){
var c__19094__auto___26608 = cljs.core.chunk_first.call(null,seq__26593_26607__$1);
var G__26609 = cljs.core.chunk_rest.call(null,seq__26593_26607__$1);
var G__26610 = c__19094__auto___26608;
var G__26611 = cljs.core.count.call(null,c__19094__auto___26608);
var G__26612 = (0);
seq__26593_26597 = G__26609;
chunk__26594_26598 = G__26610;
count__26595_26599 = G__26611;
i__26596_26600 = G__26612;
continue;
} else {
var msg_26613 = cljs.core.first.call(null,seq__26593_26607__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_26613);

var G__26614 = cljs.core.next.call(null,seq__26593_26607__$1);
var G__26615 = null;
var G__26616 = (0);
var G__26617 = (0);
seq__26593_26597 = G__26614;
chunk__26594_26598 = G__26615;
count__26595_26599 = G__26616;
i__26596_26600 = G__26617;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__26618){
var map__26621 = p__26618;
var map__26621__$1 = ((((!((map__26621 == null)))?((((map__26621.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26621.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26621):map__26621);
var w = map__26621__$1;
var message = cljs.core.get.call(null,map__26621__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,true,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__18279__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__18279__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__18279__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__26629 = cljs.core.seq.call(null,plugins);
var chunk__26630 = null;
var count__26631 = (0);
var i__26632 = (0);
while(true){
if((i__26632 < count__26631)){
var vec__26633 = cljs.core._nth.call(null,chunk__26630,i__26632);
var k = cljs.core.nth.call(null,vec__26633,(0),null);
var plugin = cljs.core.nth.call(null,vec__26633,(1),null);
if(cljs.core.truth_(plugin)){
var pl_26635 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__26629,chunk__26630,count__26631,i__26632,pl_26635,vec__26633,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_26635.call(null,msg_hist);
});})(seq__26629,chunk__26630,count__26631,i__26632,pl_26635,vec__26633,k,plugin))
);
} else {
}

var G__26636 = seq__26629;
var G__26637 = chunk__26630;
var G__26638 = count__26631;
var G__26639 = (i__26632 + (1));
seq__26629 = G__26636;
chunk__26630 = G__26637;
count__26631 = G__26638;
i__26632 = G__26639;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__26629);
if(temp__4425__auto__){
var seq__26629__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26629__$1)){
var c__19094__auto__ = cljs.core.chunk_first.call(null,seq__26629__$1);
var G__26640 = cljs.core.chunk_rest.call(null,seq__26629__$1);
var G__26641 = c__19094__auto__;
var G__26642 = cljs.core.count.call(null,c__19094__auto__);
var G__26643 = (0);
seq__26629 = G__26640;
chunk__26630 = G__26641;
count__26631 = G__26642;
i__26632 = G__26643;
continue;
} else {
var vec__26634 = cljs.core.first.call(null,seq__26629__$1);
var k = cljs.core.nth.call(null,vec__26634,(0),null);
var plugin = cljs.core.nth.call(null,vec__26634,(1),null);
if(cljs.core.truth_(plugin)){
var pl_26644 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__26629,chunk__26630,count__26631,i__26632,pl_26644,vec__26634,k,plugin,seq__26629__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_26644.call(null,msg_hist);
});})(seq__26629,chunk__26630,count__26631,i__26632,pl_26644,vec__26634,k,plugin,seq__26629__$1,temp__4425__auto__))
);
} else {
}

var G__26645 = cljs.core.next.call(null,seq__26629__$1);
var G__26646 = null;
var G__26647 = (0);
var G__26648 = (0);
seq__26629 = G__26645;
chunk__26630 = G__26646;
count__26631 = G__26647;
i__26632 = G__26648;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args26649 = [];
var len__19349__auto___26652 = arguments.length;
var i__19350__auto___26653 = (0);
while(true){
if((i__19350__auto___26653 < len__19349__auto___26652)){
args26649.push((arguments[i__19350__auto___26653]));

var G__26654 = (i__19350__auto___26653 + (1));
i__19350__auto___26653 = G__26654;
continue;
} else {
}
break;
}

var G__26651 = args26649.length;
switch (G__26651) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26649.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__19356__auto__ = [];
var len__19349__auto___26660 = arguments.length;
var i__19350__auto___26661 = (0);
while(true){
if((i__19350__auto___26661 < len__19349__auto___26660)){
args__19356__auto__.push((arguments[i__19350__auto___26661]));

var G__26662 = (i__19350__auto___26661 + (1));
i__19350__auto___26661 = G__26662;
continue;
} else {
}
break;
}

var argseq__19357__auto__ = ((((0) < args__19356__auto__.length))?(new cljs.core.IndexedSeq(args__19356__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__19357__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__26657){
var map__26658 = p__26657;
var map__26658__$1 = ((((!((map__26658 == null)))?((((map__26658.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26658.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26658):map__26658);
var opts = map__26658__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq26656){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26656));
});

//# sourceMappingURL=client.js.map