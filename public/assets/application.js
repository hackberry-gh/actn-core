/*!
 * jQuery JavaScript Library v2.1.1
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2005, 2014 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2014-05-01T17:11Z
 */

!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){function c(a){var b=a.length,c=_.type(a);return"function"===c||_.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}function d(a,b,c){if(_.isFunction(b))return _.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return _.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(hb.test(b))return _.filter(b,a,c);b=_.filter(b,a)}return _.grep(a,function(a){return U.call(b,a)>=0!==c})}function e(a,b){for(;(a=a[b])&&1!==a.nodeType;);return a}function f(a){var b=ob[a]={};return _.each(a.match(nb)||[],function(a,c){b[c]=!0}),b}function g(){Z.removeEventListener("DOMContentLoaded",g,!1),a.removeEventListener("load",g,!1),_.ready()}function h(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=_.expando+Math.random()}function i(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(ub,"-$1").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:tb.test(c)?_.parseJSON(c):c}catch(e){}sb.set(a,b,c)}else c=void 0;return c}function j(){return!0}function k(){return!1}function l(){try{return Z.activeElement}catch(a){}}function m(a,b){return _.nodeName(a,"table")&&_.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function n(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function o(a){var b=Kb.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function p(a,b){for(var c=0,d=a.length;d>c;c++)rb.set(a[c],"globalEval",!b||rb.get(b[c],"globalEval"))}function q(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(rb.hasData(a)&&(f=rb.access(a),g=rb.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)_.event.add(b,e,j[e][c])}sb.hasData(a)&&(h=sb.access(a),i=_.extend({},h),sb.set(b,i))}}function r(a,b){var c=a.getElementsByTagName?a.getElementsByTagName(b||"*"):a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&_.nodeName(a,b)?_.merge([a],c):c}function s(a,b){var c=b.nodeName.toLowerCase();"input"===c&&yb.test(a.type)?b.checked=a.checked:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}function t(b,c){var d,e=_(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:_.css(e[0],"display");return e.detach(),f}function u(a){var b=Z,c=Ob[a];return c||(c=t(a,b),"none"!==c&&c||(Nb=(Nb||_("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=Nb[0].contentDocument,b.write(),b.close(),c=t(a,b),Nb.detach()),Ob[a]=c),c}function v(a,b,c){var d,e,f,g,h=a.style;return c=c||Rb(a),c&&(g=c.getPropertyValue(b)||c[b]),c&&(""!==g||_.contains(a.ownerDocument,a)||(g=_.style(a,b)),Qb.test(g)&&Pb.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function w(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}function x(a,b){if(b in a)return b;for(var c=b[0].toUpperCase()+b.slice(1),d=b,e=Xb.length;e--;)if(b=Xb[e]+c,b in a)return b;return d}function y(a,b,c){var d=Tb.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function z(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=_.css(a,c+wb[f],!0,e)),d?("content"===c&&(g-=_.css(a,"padding"+wb[f],!0,e)),"margin"!==c&&(g-=_.css(a,"border"+wb[f]+"Width",!0,e))):(g+=_.css(a,"padding"+wb[f],!0,e),"padding"!==c&&(g+=_.css(a,"border"+wb[f]+"Width",!0,e)));return g}function A(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Rb(a),g="border-box"===_.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=v(a,b,f),(0>e||null==e)&&(e=a.style[b]),Qb.test(e))return e;d=g&&(Y.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+z(a,b,c||(g?"border":"content"),d,f)+"px"}function B(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=rb.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&xb(d)&&(f[g]=rb.access(d,"olddisplay",u(d.nodeName)))):(e=xb(d),"none"===c&&e||rb.set(d,"olddisplay",e?c:_.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}function C(a,b,c,d,e){return new C.prototype.init(a,b,c,d,e)}function D(){return setTimeout(function(){Yb=void 0}),Yb=_.now()}function E(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=wb[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function F(a,b,c){for(var d,e=(cc[b]||[]).concat(cc["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function G(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},n=a.style,o=a.nodeType&&xb(a),p=rb.get(a,"fxshow");c.queue||(h=_._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,_.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[n.overflow,n.overflowX,n.overflowY],j=_.css(a,"display"),k="none"===j?rb.get(a,"olddisplay")||u(a.nodeName):j,"inline"===k&&"none"===_.css(a,"float")&&(n.display="inline-block")),c.overflow&&(n.overflow="hidden",l.always(function(){n.overflow=c.overflow[0],n.overflowX=c.overflow[1],n.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],$b.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(o?"hide":"show")){if("show"!==e||!p||void 0===p[d])continue;o=!0}m[d]=p&&p[d]||_.style(a,d)}else j=void 0;if(_.isEmptyObject(m))"inline"===("none"===j?u(a.nodeName):j)&&(n.display=j);else{p?"hidden"in p&&(o=p.hidden):p=rb.access(a,"fxshow",{}),f&&(p.hidden=!o),o?_(a).show():l.done(function(){_(a).hide()}),l.done(function(){var b;rb.remove(a,"fxshow");for(b in m)_.style(a,b,m[b])});for(d in m)g=F(o?p[d]:0,d,l),d in p||(p[d]=g.start,o&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function H(a,b){var c,d,e,f,g;for(c in a)if(d=_.camelCase(c),e=b[d],f=a[c],_.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=_.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function I(a,b,c){var d,e,f=0,g=bc.length,h=_.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=Yb||D(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:_.extend({},b),opts:_.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:Yb||D(),duration:c.duration,tweens:[],createTween:function(b,c){var d=_.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(H(k,j.opts.specialEasing);g>f;f++)if(d=bc[f].call(j,a,k,j.opts))return d;return _.map(k,F,j),_.isFunction(j.opts.start)&&j.opts.start.call(a,j),_.fx.timer(_.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}function J(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(nb)||[];if(_.isFunction(c))for(;d=f[e++];)"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function K(a,b,c,d){function e(h){var i;return f[h]=!0,_.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||g||f[j]?g?!(i=j):void 0:(b.dataTypes.unshift(j),e(j),!1)}),i}var f={},g=a===vc;return e(b.dataTypes[0])||!f["*"]&&e("*")}function L(a,b){var c,d,e=_.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&_.extend(!0,a,d),a}function M(a,b,c){for(var d,e,f,g,h=a.contents,i=a.dataTypes;"*"===i[0];)i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function N(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];for(f=k.shift();f;)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}function O(a,b,c,d){var e;if(_.isArray(b))_.each(b,function(b,e){c||zc.test(a)?d(a,e):O(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==_.type(b))d(a,b);else for(e in b)O(a+"["+e+"]",b[e],c,d)}function P(a){return _.isWindow(a)?a:9===a.nodeType&&a.defaultView}var Q=[],R=Q.slice,S=Q.concat,T=Q.push,U=Q.indexOf,V={},W=V.toString,X=V.hasOwnProperty,Y={},Z=a.document,$="2.1.1",_=function(a,b){return new _.fn.init(a,b)},ab=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,bb=/^-ms-/,cb=/-([\da-z])/gi,db=function(a,b){return b.toUpperCase()};_.fn=_.prototype={jquery:$,constructor:_,selector:"",length:0,toArray:function(){return R.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:R.call(this)},pushStack:function(a){var b=_.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return _.each(this,a,b)},map:function(a){return this.pushStack(_.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(R.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:T,sort:Q.sort,splice:Q.splice},_.extend=_.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||_.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(_.isPlainObject(d)||(e=_.isArray(d)))?(e?(e=!1,f=c&&_.isArray(c)?c:[]):f=c&&_.isPlainObject(c)?c:{},g[b]=_.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},_.extend({expando:"jQuery"+($+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===_.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){return!_.isArray(a)&&a-parseFloat(a)>=0},isPlainObject:function(a){return"object"!==_.type(a)||a.nodeType||_.isWindow(a)?!1:a.constructor&&!X.call(a.constructor.prototype,"isPrototypeOf")?!1:!0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?V[W.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=_.trim(a),a&&(1===a.indexOf("use strict")?(b=Z.createElement("script"),b.text=a,Z.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(bb,"ms-").replace(cb,db)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,d){var e,f=0,g=a.length,h=c(a);if(d){if(h)for(;g>f&&(e=b.apply(a[f],d),e!==!1);f++);else for(f in a)if(e=b.apply(a[f],d),e===!1)break}else if(h)for(;g>f&&(e=b.call(a[f],f,a[f]),e!==!1);f++);else for(f in a)if(e=b.call(a[f],f,a[f]),e===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(ab,"")},makeArray:function(a,b){var d=b||[];return null!=a&&(c(Object(a))?_.merge(d,"string"==typeof a?[a]:a):T.call(d,a)),d},inArray:function(a,b,c){return null==b?-1:U.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,d){var e,f=0,g=a.length,h=c(a),i=[];if(h)for(;g>f;f++)e=b(a[f],f,d),null!=e&&i.push(e);else for(f in a)e=b(a[f],f,d),null!=e&&i.push(e);return S.apply([],i)},guid:1,proxy:function(a,b){var c,d,e;return"string"==typeof b&&(c=a[b],b=a,a=c),_.isFunction(a)?(d=R.call(arguments,2),e=function(){return a.apply(b||this,d.concat(R.call(arguments)))},e.guid=a.guid=a.guid||_.guid++,e):void 0},now:Date.now,support:Y}),_.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){V["[object "+b+"]"]=b.toLowerCase()});var eb=/*!
 * Sizzle CSS Selector Engine v1.10.19
 * http://sizzlejs.com/
 *
 * Copyright 2013 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2014-04-18
 */
function(a){function b(a,b,c,d){var e,f,g,h,i,j,l,n,o,p;if((b?b.ownerDocument||b:O)!==G&&F(b),b=b||G,c=c||[],!a||"string"!=typeof a)return c;if(1!==(h=b.nodeType)&&9!==h)return[];if(I&&!d){if(e=sb.exec(a))if(g=e[1]){if(9===h){if(f=b.getElementById(g),!f||!f.parentNode)return c;if(f.id===g)return c.push(f),c}else if(b.ownerDocument&&(f=b.ownerDocument.getElementById(g))&&M(b,f)&&f.id===g)return c.push(f),c}else{if(e[2])return _.apply(c,b.getElementsByTagName(a)),c;if((g=e[3])&&v.getElementsByClassName&&b.getElementsByClassName)return _.apply(c,b.getElementsByClassName(g)),c}if(v.qsa&&(!J||!J.test(a))){if(n=l=N,o=b,p=9===h&&a,1===h&&"object"!==b.nodeName.toLowerCase()){for(j=z(a),(l=b.getAttribute("id"))?n=l.replace(ub,"\\$&"):b.setAttribute("id",n),n="[id='"+n+"'] ",i=j.length;i--;)j[i]=n+m(j[i]);o=tb.test(a)&&k(b.parentNode)||b,p=j.join(",")}if(p)try{return _.apply(c,o.querySelectorAll(p)),c}catch(q){}finally{l||b.removeAttribute("id")}}}return B(a.replace(ib,"$1"),b,c,d)}function c(){function a(c,d){return b.push(c+" ")>w.cacheLength&&delete a[b.shift()],a[c+" "]=d}var b=[];return a}function d(a){return a[N]=!0,a}function e(a){var b=G.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function f(a,b){for(var c=a.split("|"),d=a.length;d--;)w.attrHandle[c[d]]=b}function g(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||W)-(~a.sourceIndex||W);if(d)return d;if(c)for(;c=c.nextSibling;)if(c===b)return-1;return a?1:-1}function h(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function i(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function j(a){return d(function(b){return b=+b,d(function(c,d){for(var e,f=a([],c.length,b),g=f.length;g--;)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function k(a){return a&&typeof a.getElementsByTagName!==V&&a}function l(){}function m(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function n(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=Q++;return b.first?function(b,c,f){for(;b=b[d];)if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[P,f];if(g){for(;b=b[d];)if((1===b.nodeType||e)&&a(b,c,g))return!0}else for(;b=b[d];)if(1===b.nodeType||e){if(i=b[N]||(b[N]={}),(h=i[d])&&h[0]===P&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function o(a){return a.length>1?function(b,c,d){for(var e=a.length;e--;)if(!a[e](b,c,d))return!1;return!0}:a[0]}function p(a,c,d){for(var e=0,f=c.length;f>e;e++)b(a,c[e],d);return d}function q(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function r(a,b,c,e,f,g){return e&&!e[N]&&(e=r(e)),f&&!f[N]&&(f=r(f,g)),d(function(d,g,h,i){var j,k,l,m=[],n=[],o=g.length,r=d||p(b||"*",h.nodeType?[h]:h,[]),s=!a||!d&&b?r:q(r,m,a,h,i),t=c?f||(d?a:o||e)?[]:g:s;if(c&&c(s,t,h,i),e)for(j=q(t,n),e(j,[],h,i),k=j.length;k--;)(l=j[k])&&(t[n[k]]=!(s[n[k]]=l));if(d){if(f||a){if(f){for(j=[],k=t.length;k--;)(l=t[k])&&j.push(s[k]=l);f(null,t=[],j,i)}for(k=t.length;k--;)(l=t[k])&&(j=f?bb.call(d,l):m[k])>-1&&(d[j]=!(g[j]=l))}}else t=q(t===g?t.splice(o,t.length):t),f?f(null,g,t,i):_.apply(g,t)})}function s(a){for(var b,c,d,e=a.length,f=w.relative[a[0].type],g=f||w.relative[" "],h=f?1:0,i=n(function(a){return a===b},g,!0),j=n(function(a){return bb.call(b,a)>-1},g,!0),k=[function(a,c,d){return!f&&(d||c!==C)||((b=c).nodeType?i(a,c,d):j(a,c,d))}];e>h;h++)if(c=w.relative[a[h].type])k=[n(o(k),c)];else{if(c=w.filter[a[h].type].apply(null,a[h].matches),c[N]){for(d=++h;e>d&&!w.relative[a[d].type];d++);return r(h>1&&o(k),h>1&&m(a.slice(0,h-1).concat({value:" "===a[h-2].type?"*":""})).replace(ib,"$1"),c,d>h&&s(a.slice(h,d)),e>d&&s(a=a.slice(d)),e>d&&m(a))}k.push(c)}return o(k)}function t(a,c){var e=c.length>0,f=a.length>0,g=function(d,g,h,i,j){var k,l,m,n=0,o="0",p=d&&[],r=[],s=C,t=d||f&&w.find.TAG("*",j),u=P+=null==s?1:Math.random()||.1,v=t.length;for(j&&(C=g!==G&&g);o!==v&&null!=(k=t[o]);o++){if(f&&k){for(l=0;m=a[l++];)if(m(k,g,h)){i.push(k);break}j&&(P=u)}e&&((k=!m&&k)&&n--,d&&p.push(k))}if(n+=o,e&&o!==n){for(l=0;m=c[l++];)m(p,r,g,h);if(d){if(n>0)for(;o--;)p[o]||r[o]||(r[o]=Z.call(i));r=q(r)}_.apply(i,r),j&&!d&&r.length>0&&n+c.length>1&&b.uniqueSort(i)}return j&&(P=u,C=s),p};return e?d(g):g}var u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N="sizzle"+-new Date,O=a.document,P=0,Q=0,R=c(),S=c(),T=c(),U=function(a,b){return a===b&&(E=!0),0},V="undefined",W=1<<31,X={}.hasOwnProperty,Y=[],Z=Y.pop,$=Y.push,_=Y.push,ab=Y.slice,bb=Y.indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(this[b]===a)return b;return-1},cb="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",db="[\\x20\\t\\r\\n\\f]",eb="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",fb=eb.replace("w","w#"),gb="\\["+db+"*("+eb+")(?:"+db+"*([*^$|!~]?=)"+db+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+fb+"))|)"+db+"*\\]",hb=":("+eb+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+gb+")*)|.*)\\)|)",ib=new RegExp("^"+db+"+|((?:^|[^\\\\])(?:\\\\.)*)"+db+"+$","g"),jb=new RegExp("^"+db+"*,"+db+"*"),kb=new RegExp("^"+db+"*([>+~]|"+db+")"+db+"*"),lb=new RegExp("="+db+"*([^\\]'\"]*?)"+db+"*\\]","g"),mb=new RegExp(hb),nb=new RegExp("^"+fb+"$"),ob={ID:new RegExp("^#("+eb+")"),CLASS:new RegExp("^\\.("+eb+")"),TAG:new RegExp("^("+eb.replace("w","w*")+")"),ATTR:new RegExp("^"+gb),PSEUDO:new RegExp("^"+hb),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+db+"*(even|odd|(([+-]|)(\\d*)n|)"+db+"*(?:([+-]|)"+db+"*(\\d+)|))"+db+"*\\)|)","i"),bool:new RegExp("^(?:"+cb+")$","i"),needsContext:new RegExp("^"+db+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+db+"*((?:-\\d)?\\d*)"+db+"*\\)|)(?=[^-]|$)","i")},pb=/^(?:input|select|textarea|button)$/i,qb=/^h\d$/i,rb=/^[^{]+\{\s*\[native \w/,sb=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,tb=/[+~]/,ub=/'|\\/g,vb=new RegExp("\\\\([\\da-f]{1,6}"+db+"?|("+db+")|.)","ig"),wb=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)};try{_.apply(Y=ab.call(O.childNodes),O.childNodes),Y[O.childNodes.length].nodeType}catch(xb){_={apply:Y.length?function(a,b){$.apply(a,ab.call(b))}:function(a,b){for(var c=a.length,d=0;a[c++]=b[d++];);a.length=c-1}}}v=b.support={},y=b.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},F=b.setDocument=function(a){var b,c=a?a.ownerDocument||a:O,d=c.defaultView;return c!==G&&9===c.nodeType&&c.documentElement?(G=c,H=c.documentElement,I=!y(c),d&&d!==d.top&&(d.addEventListener?d.addEventListener("unload",function(){F()},!1):d.attachEvent&&d.attachEvent("onunload",function(){F()})),v.attributes=e(function(a){return a.className="i",!a.getAttribute("className")}),v.getElementsByTagName=e(function(a){return a.appendChild(c.createComment("")),!a.getElementsByTagName("*").length}),v.getElementsByClassName=rb.test(c.getElementsByClassName)&&e(function(a){return a.innerHTML="<div class='a'></div><div class='a i'></div>",a.firstChild.className="i",2===a.getElementsByClassName("i").length}),v.getById=e(function(a){return H.appendChild(a).id=N,!c.getElementsByName||!c.getElementsByName(N).length}),v.getById?(w.find.ID=function(a,b){if(typeof b.getElementById!==V&&I){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},w.filter.ID=function(a){var b=a.replace(vb,wb);return function(a){return a.getAttribute("id")===b}}):(delete w.find.ID,w.filter.ID=function(a){var b=a.replace(vb,wb);return function(a){var c=typeof a.getAttributeNode!==V&&a.getAttributeNode("id");return c&&c.value===b}}),w.find.TAG=v.getElementsByTagName?function(a,b){return typeof b.getElementsByTagName!==V?b.getElementsByTagName(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){for(;c=f[e++];)1===c.nodeType&&d.push(c);return d}return f},w.find.CLASS=v.getElementsByClassName&&function(a,b){return typeof b.getElementsByClassName!==V&&I?b.getElementsByClassName(a):void 0},K=[],J=[],(v.qsa=rb.test(c.querySelectorAll))&&(e(function(a){a.innerHTML="<select msallowclip=''><option selected=''></option></select>",a.querySelectorAll("[msallowclip^='']").length&&J.push("[*^$]="+db+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||J.push("\\["+db+"*(?:value|"+cb+")"),a.querySelectorAll(":checked").length||J.push(":checked")}),e(function(a){var b=c.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&J.push("name"+db+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||J.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),J.push(",.*:")})),(v.matchesSelector=rb.test(L=H.matches||H.webkitMatchesSelector||H.mozMatchesSelector||H.oMatchesSelector||H.msMatchesSelector))&&e(function(a){v.disconnectedMatch=L.call(a,"div"),L.call(a,"[s!='']:x"),K.push("!=",hb)}),J=J.length&&new RegExp(J.join("|")),K=K.length&&new RegExp(K.join("|")),b=rb.test(H.compareDocumentPosition),M=b||rb.test(H.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)for(;b=b.parentNode;)if(b===a)return!0;return!1},U=b?function(a,b){if(a===b)return E=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!v.sortDetached&&b.compareDocumentPosition(a)===d?a===c||a.ownerDocument===O&&M(O,a)?-1:b===c||b.ownerDocument===O&&M(O,b)?1:D?bb.call(D,a)-bb.call(D,b):0:4&d?-1:1)}:function(a,b){if(a===b)return E=!0,0;var d,e=0,f=a.parentNode,h=b.parentNode,i=[a],j=[b];if(!f||!h)return a===c?-1:b===c?1:f?-1:h?1:D?bb.call(D,a)-bb.call(D,b):0;if(f===h)return g(a,b);for(d=a;d=d.parentNode;)i.unshift(d);for(d=b;d=d.parentNode;)j.unshift(d);for(;i[e]===j[e];)e++;return e?g(i[e],j[e]):i[e]===O?-1:j[e]===O?1:0},c):G},b.matches=function(a,c){return b(a,null,null,c)},b.matchesSelector=function(a,c){if((a.ownerDocument||a)!==G&&F(a),c=c.replace(lb,"='$1']"),!(!v.matchesSelector||!I||K&&K.test(c)||J&&J.test(c)))try{var d=L.call(a,c);if(d||v.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return b(c,G,null,[a]).length>0},b.contains=function(a,b){return(a.ownerDocument||a)!==G&&F(a),M(a,b)},b.attr=function(a,b){(a.ownerDocument||a)!==G&&F(a);var c=w.attrHandle[b.toLowerCase()],d=c&&X.call(w.attrHandle,b.toLowerCase())?c(a,b,!I):void 0;return void 0!==d?d:v.attributes||!I?a.getAttribute(b):(d=a.getAttributeNode(b))&&d.specified?d.value:null},b.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},b.uniqueSort=function(a){var b,c=[],d=0,e=0;if(E=!v.detectDuplicates,D=!v.sortStable&&a.slice(0),a.sort(U),E){for(;b=a[e++];)b===a[e]&&(d=c.push(e));for(;d--;)a.splice(c[d],1)}return D=null,a},x=b.getText=function(a){var b,c="",d=0,e=a.nodeType;if(e){if(1===e||9===e||11===e){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=x(a)}else if(3===e||4===e)return a.nodeValue}else for(;b=a[d++];)c+=x(b);return c},w=b.selectors={cacheLength:50,createPseudo:d,match:ob,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(vb,wb),a[3]=(a[3]||a[4]||a[5]||"").replace(vb,wb),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||b.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&b.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return ob.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&mb.test(c)&&(b=z(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(vb,wb).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=R[a+" "];return b||(b=new RegExp("(^|"+db+")"+a+"("+db+"|$)"))&&R(a,function(a){return b.test("string"==typeof a.className&&a.className||typeof a.getAttribute!==V&&a.getAttribute("class")||"")})},ATTR:function(a,c,d){return function(e){var f=b.attr(e,a);return null==f?"!="===c:c?(f+="","="===c?f===d:"!="===c?f!==d:"^="===c?d&&0===f.indexOf(d):"*="===c?d&&f.indexOf(d)>-1:"$="===c?d&&f.slice(-d.length)===d:"~="===c?(" "+f+" ").indexOf(d)>-1:"|="===c?f===d||f.slice(0,d.length+1)===d+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){for(;p;){for(l=b;l=l[p];)if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){for(k=q[N]||(q[N]={}),j=k[a]||[],n=j[0]===P&&j[1],m=j[0]===P&&j[2],l=n&&q.childNodes[n];l=++n&&l&&l[p]||(m=n=0)||o.pop();)if(1===l.nodeType&&++m&&l===b){k[a]=[P,n,m];break}}else if(s&&(j=(b[N]||(b[N]={}))[a])&&j[0]===P)m=j[1];else for(;(l=++n&&l&&l[p]||(m=n=0)||o.pop())&&((h?l.nodeName.toLowerCase()!==r:1!==l.nodeType)||!++m||(s&&((l[N]||(l[N]={}))[a]=[P,m]),l!==b)););return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,c){var e,f=w.pseudos[a]||w.setFilters[a.toLowerCase()]||b.error("unsupported pseudo: "+a);return f[N]?f(c):f.length>1?(e=[a,a,"",c],w.setFilters.hasOwnProperty(a.toLowerCase())?d(function(a,b){for(var d,e=f(a,c),g=e.length;g--;)d=bb.call(a,e[g]),a[d]=!(b[d]=e[g])}):function(a){return f(a,0,e)}):f}},pseudos:{not:d(function(a){var b=[],c=[],e=A(a.replace(ib,"$1"));return e[N]?d(function(a,b,c,d){for(var f,g=e(a,null,d,[]),h=a.length;h--;)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,d,f){return b[0]=a,e(b,null,f,c),!c.pop()}}),has:d(function(a){return function(c){return b(a,c).length>0}}),contains:d(function(a){return function(b){return(b.textContent||b.innerText||x(b)).indexOf(a)>-1}}),lang:d(function(a){return nb.test(a||"")||b.error("unsupported lang: "+a),a=a.replace(vb,wb).toLowerCase(),function(b){var c;do if(c=I?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===H},focus:function(a){return a===G.activeElement&&(!G.hasFocus||G.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!w.pseudos.empty(a)},header:function(a){return qb.test(a.nodeName)},input:function(a){return pb.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:j(function(){return[0]}),last:j(function(a,b){return[b-1]}),eq:j(function(a,b,c){return[0>c?c+b:c]}),even:j(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:j(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:j(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:j(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},w.pseudos.nth=w.pseudos.eq;for(u in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})w.pseudos[u]=h(u);for(u in{submit:!0,reset:!0})w.pseudos[u]=i(u);return l.prototype=w.filters=w.pseudos,w.setFilters=new l,z=b.tokenize=function(a,c){var d,e,f,g,h,i,j,k=S[a+" "];if(k)return c?0:k.slice(0);for(h=a,i=[],j=w.preFilter;h;){(!d||(e=jb.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),d=!1,(e=kb.exec(h))&&(d=e.shift(),f.push({value:d,type:e[0].replace(ib," ")}),h=h.slice(d.length));for(g in w.filter)!(e=ob[g].exec(h))||j[g]&&!(e=j[g](e))||(d=e.shift(),f.push({value:d,type:g,matches:e}),h=h.slice(d.length));if(!d)break}return c?h.length:h?b.error(a):S(a,i).slice(0)},A=b.compile=function(a,b){var c,d=[],e=[],f=T[a+" "];if(!f){for(b||(b=z(a)),c=b.length;c--;)f=s(b[c]),f[N]?d.push(f):e.push(f);f=T(a,t(e,d)),f.selector=a}return f},B=b.select=function(a,b,c,d){var e,f,g,h,i,j="function"==typeof a&&a,l=!d&&z(a=j.selector||a);if(c=c||[],1===l.length){if(f=l[0]=l[0].slice(0),f.length>2&&"ID"===(g=f[0]).type&&v.getById&&9===b.nodeType&&I&&w.relative[f[1].type]){if(b=(w.find.ID(g.matches[0].replace(vb,wb),b)||[])[0],!b)return c;j&&(b=b.parentNode),a=a.slice(f.shift().value.length)}for(e=ob.needsContext.test(a)?0:f.length;e--&&(g=f[e],!w.relative[h=g.type]);)if((i=w.find[h])&&(d=i(g.matches[0].replace(vb,wb),tb.test(f[0].type)&&k(b.parentNode)||b))){if(f.splice(e,1),a=d.length&&m(f),!a)return _.apply(c,d),c;break}}return(j||A(a,l))(d,b,!I,c,tb.test(a)&&k(b.parentNode)||b),c},v.sortStable=N.split("").sort(U).join("")===N,v.detectDuplicates=!!E,F(),v.sortDetached=e(function(a){return 1&a.compareDocumentPosition(G.createElement("div"))}),e(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||f("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),v.attributes&&e(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||f("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),e(function(a){return null==a.getAttribute("disabled")})||f(cb,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),b}(a);_.find=eb,_.expr=eb.selectors,_.expr[":"]=_.expr.pseudos,_.unique=eb.uniqueSort,_.text=eb.getText,_.isXMLDoc=eb.isXML,_.contains=eb.contains;var fb=_.expr.match.needsContext,gb=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,hb=/^.[^:#\[\.,]*$/;_.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?_.find.matchesSelector(d,a)?[d]:[]:_.find.matches(a,_.grep(b,function(a){return 1===a.nodeType}))},_.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(_(a).filter(function(){for(b=0;c>b;b++)if(_.contains(e[b],this))return!0}));for(b=0;c>b;b++)_.find(a,e[b],d);return d=this.pushStack(c>1?_.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(d(this,a||[],!1))},not:function(a){return this.pushStack(d(this,a||[],!0))},is:function(a){return!!d(this,"string"==typeof a&&fb.test(a)?_(a):a||[],!1).length}});var ib,jb=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,kb=_.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:jb.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||ib).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof _?b[0]:b,_.merge(this,_.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:Z,!0)),gb.test(c[1])&&_.isPlainObject(b))for(c in b)_.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}return d=Z.getElementById(c[2]),d&&d.parentNode&&(this.length=1,this[0]=d),this.context=Z,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):_.isFunction(a)?"undefined"!=typeof ib.ready?ib.ready(a):a(_):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),_.makeArray(a,this))};kb.prototype=_.fn,ib=_(Z);var lb=/^(?:parents|prev(?:Until|All))/,mb={children:!0,contents:!0,next:!0,prev:!0};_.extend({dir:function(a,b,c){for(var d=[],e=void 0!==c;(a=a[b])&&9!==a.nodeType;)if(1===a.nodeType){if(e&&_(a).is(c))break;d.push(a)}return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),_.fn.extend({has:function(a){var b=_(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(_.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=fb.test(a)||"string"!=typeof a?_(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&_.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?_.unique(f):f)},index:function(a){return a?"string"==typeof a?U.call(_(a),this[0]):U.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(_.unique(_.merge(this.get(),_(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}}),_.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return _.dir(a,"parentNode")},parentsUntil:function(a,b,c){return _.dir(a,"parentNode",c)},next:function(a){return e(a,"nextSibling")},prev:function(a){return e(a,"previousSibling")},nextAll:function(a){return _.dir(a,"nextSibling")},prevAll:function(a){return _.dir(a,"previousSibling")},nextUntil:function(a,b,c){return _.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return _.dir(a,"previousSibling",c)},siblings:function(a){return _.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return _.sibling(a.firstChild)},contents:function(a){return a.contentDocument||_.merge([],a.childNodes)}},function(a,b){_.fn[a]=function(c,d){var e=_.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=_.filter(d,e)),this.length>1&&(mb[a]||_.unique(e),lb.test(a)&&e.reverse()),this.pushStack(e)}});var nb=/\S+/g,ob={};_.Callbacks=function(a){a="string"==typeof a?ob[a]||f(a):_.extend({},a);var b,c,d,e,g,h,i=[],j=!a.once&&[],k=function(f){for(b=a.memory&&f,c=!0,h=e||0,e=0,g=i.length,d=!0;i&&g>h;h++)if(i[h].apply(f[0],f[1])===!1&&a.stopOnFalse){b=!1;break}d=!1,i&&(j?j.length&&k(j.shift()):b?i=[]:l.disable())},l={add:function(){if(i){var c=i.length;!function f(b){_.each(b,function(b,c){var d=_.type(c);"function"===d?a.unique&&l.has(c)||i.push(c):c&&c.length&&"string"!==d&&f(c)})}(arguments),d?g=i.length:b&&(e=c,k(b))}return this},remove:function(){return i&&_.each(arguments,function(a,b){for(var c;(c=_.inArray(b,i,c))>-1;)i.splice(c,1),d&&(g>=c&&g--,h>=c&&h--)}),this},has:function(a){return a?_.inArray(a,i)>-1:!(!i||!i.length)},empty:function(){return i=[],g=0,this},disable:function(){return i=j=b=void 0,this},disabled:function(){return!i},lock:function(){return j=void 0,b||l.disable(),this},locked:function(){return!j},fireWith:function(a,b){return!i||c&&!j||(b=b||[],b=[a,b.slice?b.slice():b],d?j.push(b):k(b)),this},fire:function(){return l.fireWith(this,arguments),this},fired:function(){return!!c}};return l},_.extend({Deferred:function(a){var b=[["resolve","done",_.Callbacks("once memory"),"resolved"],["reject","fail",_.Callbacks("once memory"),"rejected"],["notify","progress",_.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return _.Deferred(function(c){_.each(b,function(b,f){var g=_.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&_.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?_.extend(a,d):d}},e={};return d.pipe=d.then,_.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b,c,d,e=0,f=R.call(arguments),g=f.length,h=1!==g||a&&_.isFunction(a.promise)?g:0,i=1===h?a:_.Deferred(),j=function(a,c,d){return function(e){c[a]=this,d[a]=arguments.length>1?R.call(arguments):e,d===b?i.notifyWith(c,d):--h||i.resolveWith(c,d)}};if(g>1)for(b=new Array(g),c=new Array(g),d=new Array(g);g>e;e++)f[e]&&_.isFunction(f[e].promise)?f[e].promise().done(j(e,d,f)).fail(i.reject).progress(j(e,c,b)):--h;return h||i.resolveWith(d,f),i.promise()}});var pb;_.fn.ready=function(a){return _.ready.promise().done(a),this},_.extend({isReady:!1,readyWait:1,holdReady:function(a){a?_.readyWait++:_.ready(!0)},ready:function(a){(a===!0?--_.readyWait:_.isReady)||(_.isReady=!0,a!==!0&&--_.readyWait>0||(pb.resolveWith(Z,[_]),_.fn.triggerHandler&&(_(Z).triggerHandler("ready"),_(Z).off("ready"))))}}),_.ready.promise=function(b){return pb||(pb=_.Deferred(),"complete"===Z.readyState?setTimeout(_.ready):(Z.addEventListener("DOMContentLoaded",g,!1),a.addEventListener("load",g,!1))),pb.promise(b)},_.ready.promise();var qb=_.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===_.type(c)){e=!0;for(h in c)_.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,_.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(_(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f};_.acceptData=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType},h.uid=1,h.accepts=_.acceptData,h.prototype={key:function(a){if(!h.accepts(a))return 0;var b={},c=a[this.expando];if(!c){c=h.uid++;try{b[this.expando]={value:c},Object.defineProperties(a,b)}catch(d){b[this.expando]=c,_.extend(a,b)}}return this.cache[c]||(this.cache[c]={}),c},set:function(a,b,c){var d,e=this.key(a),f=this.cache[e];if("string"==typeof b)f[b]=c;else if(_.isEmptyObject(f))_.extend(this.cache[e],b);else for(d in b)f[d]=b[d];return f},get:function(a,b){var c=this.cache[this.key(a)];return void 0===b?c:c[b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,_.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=this.key(a),g=this.cache[f];if(void 0===b)this.cache[f]={};else{_.isArray(b)?d=b.concat(b.map(_.camelCase)):(e=_.camelCase(b),b in g?d=[b,e]:(d=e,d=d in g?[d]:d.match(nb)||[])),c=d.length;for(;c--;)delete g[d[c]]}},hasData:function(a){return!_.isEmptyObject(this.cache[a[this.expando]]||{})},discard:function(a){a[this.expando]&&delete this.cache[a[this.expando]]}};var rb=new h,sb=new h,tb=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,ub=/([A-Z])/g;_.extend({hasData:function(a){return sb.hasData(a)||rb.hasData(a)},data:function(a,b,c){return sb.access(a,b,c)},removeData:function(a,b){sb.remove(a,b)},_data:function(a,b,c){return rb.access(a,b,c)},_removeData:function(a,b){rb.remove(a,b)}}),_.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=sb.get(f),1===f.nodeType&&!rb.get(f,"hasDataAttrs"))){for(c=g.length;c--;)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=_.camelCase(d.slice(5)),i(f,d,e[d])));rb.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){sb.set(this,a)}):qb(this,function(b){var c,d=_.camelCase(a);if(f&&void 0===b){if(c=sb.get(f,a),void 0!==c)return c;if(c=sb.get(f,d),void 0!==c)return c;if(c=i(f,d,void 0),void 0!==c)return c}else this.each(function(){var c=sb.get(this,d);sb.set(this,d,b),-1!==a.indexOf("-")&&void 0!==c&&sb.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){sb.remove(this,a)})}}),_.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=rb.get(a,b),c&&(!d||_.isArray(c)?d=rb.access(a,b,_.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=_.queue(a,b),d=c.length,e=c.shift(),f=_._queueHooks(a,b),g=function(){_.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return rb.get(a,c)||rb.access(a,c,{empty:_.Callbacks("once memory").add(function(){rb.remove(a,[b+"queue",c])})})}}),_.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?_.queue(this[0],a):void 0===b?this:this.each(function(){var c=_.queue(this,a,b);_._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&_.dequeue(this,a)})},dequeue:function(a){return this.each(function(){_.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=_.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};for("string"!=typeof a&&(b=a,a=void 0),a=a||"fx";g--;)c=rb.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var vb=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,wb=["Top","Right","Bottom","Left"],xb=function(a,b){return a=b||a,"none"===_.css(a,"display")||!_.contains(a.ownerDocument,a)},yb=/^(?:checkbox|radio)$/i;!function(){var a=Z.createDocumentFragment(),b=a.appendChild(Z.createElement("div")),c=Z.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),Y.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",Y.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var zb="undefined";Y.focusinBubbles="onfocusin"in a;var Ab=/^key/,Bb=/^(?:mouse|pointer|contextmenu)|click/,Cb=/^(?:focusinfocus|focusoutblur)$/,Db=/^([^.]*)(?:\.(.+)|)$/;_.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=rb.get(a);if(q)for(c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=_.guid++),(i=q.events)||(i=q.events={}),(g=q.handle)||(g=q.handle=function(b){return typeof _!==zb&&_.event.triggered!==b.type?_.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(nb)||[""],j=b.length;j--;)h=Db.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n&&(l=_.event.special[n]||{},n=(e?l.delegateType:l.bindType)||n,l=_.event.special[n]||{},k=_.extend({type:n,origType:p,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&_.expr.match.needsContext.test(e),namespace:o.join(".")},f),(m=i[n])||(m=i[n]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,o,g)!==!1||a.addEventListener&&a.addEventListener(n,g,!1)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),_.event.global[n]=!0)},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=rb.hasData(a)&&rb.get(a);if(q&&(i=q.events)){for(b=(b||"").match(nb)||[""],j=b.length;j--;)if(h=Db.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n){for(l=_.event.special[n]||{},n=(d?l.delegateType:l.bindType)||n,m=i[n]||[],h=h[2]&&new RegExp("(^|\\.)"+o.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;f--;)k=m[f],!e&&p!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,o,q.handle)!==!1||_.removeEvent(a,n,q.handle),delete i[n])}else for(n in i)_.event.remove(a,n+b[j],c,d,!0);_.isEmptyObject(i)&&(delete q.handle,rb.remove(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,j,k,l,m=[d||Z],n=X.call(b,"type")?b.type:b,o=X.call(b,"namespace")?b.namespace.split("."):[];if(g=h=d=d||Z,3!==d.nodeType&&8!==d.nodeType&&!Cb.test(n+_.event.triggered)&&(n.indexOf(".")>=0&&(o=n.split("."),n=o.shift(),o.sort()),j=n.indexOf(":")<0&&"on"+n,b=b[_.expando]?b:new _.Event(n,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=o.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+o.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:_.makeArray(c,[b]),l=_.event.special[n]||{},e||!l.trigger||l.trigger.apply(d,c)!==!1)){if(!e&&!l.noBubble&&!_.isWindow(d)){for(i=l.delegateType||n,Cb.test(i+n)||(g=g.parentNode);g;g=g.parentNode)m.push(g),h=g;
h===(d.ownerDocument||Z)&&m.push(h.defaultView||h.parentWindow||a)}for(f=0;(g=m[f++])&&!b.isPropagationStopped();)b.type=f>1?i:l.bindType||n,k=(rb.get(g,"events")||{})[b.type]&&rb.get(g,"handle"),k&&k.apply(g,c),k=j&&g[j],k&&k.apply&&_.acceptData(g)&&(b.result=k.apply(g,c),b.result===!1&&b.preventDefault());return b.type=n,e||b.isDefaultPrevented()||l._default&&l._default.apply(m.pop(),c)!==!1||!_.acceptData(d)||j&&_.isFunction(d[n])&&!_.isWindow(d)&&(h=d[j],h&&(d[j]=null),_.event.triggered=n,d[n](),_.event.triggered=void 0,h&&(d[j]=h)),b.result}},dispatch:function(a){a=_.event.fix(a);var b,c,d,e,f,g=[],h=R.call(arguments),i=(rb.get(this,"events")||{})[a.type]||[],j=_.event.special[a.type]||{};if(h[0]=a,a.delegateTarget=this,!j.preDispatch||j.preDispatch.call(this,a)!==!1){for(g=_.event.handlers.call(this,a,i),b=0;(e=g[b++])&&!a.isPropagationStopped();)for(a.currentTarget=e.elem,c=0;(f=e.handlers[c++])&&!a.isImmediatePropagationStopped();)(!a.namespace_re||a.namespace_re.test(f.namespace))&&(a.handleObj=f,a.data=f.data,d=((_.event.special[f.origType]||{}).handle||f.handler).apply(e.elem,h),void 0!==d&&(a.result=d)===!1&&(a.preventDefault(),a.stopPropagation()));return j.postDispatch&&j.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!==this;i=i.parentNode||this)if(i.disabled!==!0||"click"!==a.type){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?_(e,this).index(i)>=0:_.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||Z,d=c.documentElement,e=c.body,a.pageX=b.clientX+(d&&d.scrollLeft||e&&e.scrollLeft||0)-(d&&d.clientLeft||e&&e.clientLeft||0),a.pageY=b.clientY+(d&&d.scrollTop||e&&e.scrollTop||0)-(d&&d.clientTop||e&&e.clientTop||0)),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},fix:function(a){if(a[_.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];for(g||(this.fixHooks[e]=g=Bb.test(e)?this.mouseHooks:Ab.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new _.Event(f),b=d.length;b--;)c=d[b],a[c]=f[c];return a.target||(a.target=Z),3===a.target.nodeType&&(a.target=a.target.parentNode),g.filter?g.filter(a,f):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==l()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===l()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&_.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return _.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=_.extend(new _.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?_.event.trigger(e,null,b):_.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},_.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)},_.Event=function(a,b){return this instanceof _.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?j:k):this.type=a,b&&_.extend(this,b),this.timeStamp=a&&a.timeStamp||_.now(),void(this[_.expando]=!0)):new _.Event(a,b)},_.Event.prototype={isDefaultPrevented:k,isPropagationStopped:k,isImmediatePropagationStopped:k,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=j,a&&a.preventDefault&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=j,a&&a.stopPropagation&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=j,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},_.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){_.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!_.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),Y.focusinBubbles||_.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){_.event.simulate(b,a.target,_.event.fix(a),!0)};_.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=rb.access(d,b);e||d.addEventListener(a,c,!0),rb.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=rb.access(d,b)-1;e?rb.access(d,b,e):(d.removeEventListener(a,c,!0),rb.remove(d,b))}}}),_.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(g in a)this.on(g,b,c,a[g],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=k;else if(!d)return this;return 1===e&&(f=d,d=function(a){return _().off(a),f.apply(this,arguments)},d.guid=f.guid||(f.guid=_.guid++)),this.each(function(){_.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,_(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=k),this.each(function(){_.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){_.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?_.event.trigger(a,b,c,!0):void 0}});var Eb=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,Fb=/<([\w:]+)/,Gb=/<|&#?\w+;/,Hb=/<(?:script|style|link)/i,Ib=/checked\s*(?:[^=]|=\s*.checked.)/i,Jb=/^$|\/(?:java|ecma)script/i,Kb=/^true\/(.*)/,Lb=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,Mb={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};Mb.optgroup=Mb.option,Mb.tbody=Mb.tfoot=Mb.colgroup=Mb.caption=Mb.thead,Mb.th=Mb.td,_.extend({clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=_.contains(a.ownerDocument,a);if(!(Y.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||_.isXMLDoc(a)))for(g=r(h),f=r(a),d=0,e=f.length;e>d;d++)s(f[d],g[d]);if(b)if(c)for(f=f||r(a),g=g||r(h),d=0,e=f.length;e>d;d++)q(f[d],g[d]);else q(a,h);return g=r(h,"script"),g.length>0&&p(g,!i&&r(a,"script")),h},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k=b.createDocumentFragment(),l=[],m=0,n=a.length;n>m;m++)if(e=a[m],e||0===e)if("object"===_.type(e))_.merge(l,e.nodeType?[e]:e);else if(Gb.test(e)){for(f=f||k.appendChild(b.createElement("div")),g=(Fb.exec(e)||["",""])[1].toLowerCase(),h=Mb[g]||Mb._default,f.innerHTML=h[1]+e.replace(Eb,"<$1></$2>")+h[2],j=h[0];j--;)f=f.lastChild;_.merge(l,f.childNodes),f=k.firstChild,f.textContent=""}else l.push(b.createTextNode(e));for(k.textContent="",m=0;e=l[m++];)if((!d||-1===_.inArray(e,d))&&(i=_.contains(e.ownerDocument,e),f=r(k.appendChild(e),"script"),i&&p(f),c))for(j=0;e=f[j++];)Jb.test(e.type||"")&&c.push(e);return k},cleanData:function(a){for(var b,c,d,e,f=_.event.special,g=0;void 0!==(c=a[g]);g++){if(_.acceptData(c)&&(e=c[rb.expando],e&&(b=rb.cache[e]))){if(b.events)for(d in b.events)f[d]?_.event.remove(c,d):_.removeEvent(c,d,b.handle);rb.cache[e]&&delete rb.cache[e]}delete sb.cache[c[sb.expando]]}}}),_.fn.extend({text:function(a){return qb(this,function(a){return void 0===a?_.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=a)})},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=m(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=m(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?_.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||_.cleanData(r(c)),c.parentNode&&(b&&_.contains(c.ownerDocument,c)&&p(r(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(_.cleanData(r(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return _.clone(this,a,b)})},html:function(a){return qb(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!Hb.test(a)&&!Mb[(Fb.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(Eb,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(_.cleanData(r(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,_.cleanData(r(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=S.apply([],a);var c,d,e,f,g,h,i=0,j=this.length,k=this,l=j-1,m=a[0],p=_.isFunction(m);if(p||j>1&&"string"==typeof m&&!Y.checkClone&&Ib.test(m))return this.each(function(c){var d=k.eq(c);p&&(a[0]=m.call(this,c,d.html())),d.domManip(a,b)});if(j&&(c=_.buildFragment(a,this[0].ownerDocument,!1,this),d=c.firstChild,1===c.childNodes.length&&(c=d),d)){for(e=_.map(r(c,"script"),n),f=e.length;j>i;i++)g=c,i!==l&&(g=_.clone(g,!0,!0),f&&_.merge(e,r(g,"script"))),b.call(this[i],g,i);if(f)for(h=e[e.length-1].ownerDocument,_.map(e,o),i=0;f>i;i++)g=e[i],Jb.test(g.type||"")&&!rb.access(g,"globalEval")&&_.contains(h,g)&&(g.src?_._evalUrl&&_._evalUrl(g.src):_.globalEval(g.textContent.replace(Lb,"")))}return this}}),_.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){_.fn[a]=function(a){for(var c,d=[],e=_(a),f=e.length-1,g=0;f>=g;g++)c=g===f?this:this.clone(!0),_(e[g])[b](c),T.apply(d,c.get());return this.pushStack(d)}});var Nb,Ob={},Pb=/^margin/,Qb=new RegExp("^("+vb+")(?!px)[a-z%]+$","i"),Rb=function(a){return a.ownerDocument.defaultView.getComputedStyle(a,null)};!function(){function b(){g.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",g.innerHTML="",e.appendChild(f);var b=a.getComputedStyle(g,null);c="1%"!==b.top,d="4px"===b.width,e.removeChild(f)}var c,d,e=Z.documentElement,f=Z.createElement("div"),g=Z.createElement("div");g.style&&(g.style.backgroundClip="content-box",g.cloneNode(!0).style.backgroundClip="",Y.clearCloneStyle="content-box"===g.style.backgroundClip,f.style.cssText="border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute",f.appendChild(g),a.getComputedStyle&&_.extend(Y,{pixelPosition:function(){return b(),c},boxSizingReliable:function(){return null==d&&b(),d},reliableMarginRight:function(){var b,c=g.appendChild(Z.createElement("div"));return c.style.cssText=g.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",g.style.width="1px",e.appendChild(f),b=!parseFloat(a.getComputedStyle(c,null).marginRight),e.removeChild(f),b}}))}(),_.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var Sb=/^(none|table(?!-c[ea]).+)/,Tb=new RegExp("^("+vb+")(.*)$","i"),Ub=new RegExp("^([+-])=("+vb+")","i"),Vb={position:"absolute",visibility:"hidden",display:"block"},Wb={letterSpacing:"0",fontWeight:"400"},Xb=["Webkit","O","Moz","ms"];_.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=v(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=_.camelCase(b),i=a.style;return b=_.cssProps[h]||(_.cssProps[h]=x(i,h)),g=_.cssHooks[b]||_.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=Ub.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(_.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||_.cssNumber[h]||(c+="px"),Y.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=_.camelCase(b);return b=_.cssProps[h]||(_.cssProps[h]=x(a.style,h)),g=_.cssHooks[b]||_.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=v(a,b,d)),"normal"===e&&b in Wb&&(e=Wb[b]),""===c||c?(f=parseFloat(e),c===!0||_.isNumeric(f)?f||0:e):e}}),_.each(["height","width"],function(a,b){_.cssHooks[b]={get:function(a,c,d){return c?Sb.test(_.css(a,"display"))&&0===a.offsetWidth?_.swap(a,Vb,function(){return A(a,b,d)}):A(a,b,d):void 0},set:function(a,c,d){var e=d&&Rb(a);return y(a,c,d?z(a,b,d,"border-box"===_.css(a,"boxSizing",!1,e),e):0)}}}),_.cssHooks.marginRight=w(Y.reliableMarginRight,function(a,b){return b?_.swap(a,{display:"inline-block"},v,[a,"marginRight"]):void 0}),_.each({margin:"",padding:"",border:"Width"},function(a,b){_.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+wb[d]+b]=f[d]||f[d-2]||f[0];return e}},Pb.test(a)||(_.cssHooks[a+b].set=y)}),_.fn.extend({css:function(a,b){return qb(this,function(a,b,c){var d,e,f={},g=0;if(_.isArray(b)){for(d=Rb(a),e=b.length;e>g;g++)f[b[g]]=_.css(a,b[g],!1,d);return f}return void 0!==c?_.style(a,b,c):_.css(a,b)},a,b,arguments.length>1)},show:function(){return B(this,!0)},hide:function(){return B(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){xb(this)?_(this).show():_(this).hide()})}}),_.Tween=C,C.prototype={constructor:C,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(_.cssNumber[c]?"":"px")},cur:function(){var a=C.propHooks[this.prop];return a&&a.get?a.get(this):C.propHooks._default.get(this)},run:function(a){var b,c=C.propHooks[this.prop];return this.pos=b=this.options.duration?_.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):C.propHooks._default.set(this),this}},C.prototype.init.prototype=C.prototype,C.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=_.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){_.fx.step[a.prop]?_.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[_.cssProps[a.prop]]||_.cssHooks[a.prop])?_.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},C.propHooks.scrollTop=C.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},_.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},_.fx=C.prototype.init,_.fx.step={};var Yb,Zb,$b=/^(?:toggle|show|hide)$/,_b=new RegExp("^(?:([+-])=|)("+vb+")([a-z%]*)$","i"),ac=/queueHooks$/,bc=[G],cc={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=_b.exec(b),f=e&&e[3]||(_.cssNumber[a]?"":"px"),g=(_.cssNumber[a]||"px"!==f&&+d)&&_b.exec(_.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,_.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};_.Animation=_.extend(I,{tweener:function(a,b){_.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],cc[c]=cc[c]||[],cc[c].unshift(b)},prefilter:function(a,b){b?bc.unshift(a):bc.push(a)}}),_.speed=function(a,b,c){var d=a&&"object"==typeof a?_.extend({},a):{complete:c||!c&&b||_.isFunction(a)&&a,duration:a,easing:c&&b||b&&!_.isFunction(b)&&b};return d.duration=_.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in _.fx.speeds?_.fx.speeds[d.duration]:_.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){_.isFunction(d.old)&&d.old.call(this),d.queue&&_.dequeue(this,d.queue)},d},_.fn.extend({fadeTo:function(a,b,c,d){return this.filter(xb).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=_.isEmptyObject(a),f=_.speed(b,c,d),g=function(){var b=I(this,_.extend({},a),f);(e||rb.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=_.timers,g=rb.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&ac.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&_.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=rb.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=_.timers,g=d?d.length:0;for(c.finish=!0,_.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),_.each(["toggle","show","hide"],function(a,b){var c=_.fn[b];_.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(E(b,!0),a,d,e)}}),_.each({slideDown:E("show"),slideUp:E("hide"),slideToggle:E("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){_.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),_.timers=[],_.fx.tick=function(){var a,b=0,c=_.timers;for(Yb=_.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||_.fx.stop(),Yb=void 0},_.fx.timer=function(a){_.timers.push(a),a()?_.fx.start():_.timers.pop()},_.fx.interval=13,_.fx.start=function(){Zb||(Zb=setInterval(_.fx.tick,_.fx.interval))},_.fx.stop=function(){clearInterval(Zb),Zb=null},_.fx.speeds={slow:600,fast:200,_default:400},_.fn.delay=function(a,b){return a=_.fx?_.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a=Z.createElement("input"),b=Z.createElement("select"),c=b.appendChild(Z.createElement("option"));a.type="checkbox",Y.checkOn=""!==a.value,Y.optSelected=c.selected,b.disabled=!0,Y.optDisabled=!c.disabled,a=Z.createElement("input"),a.value="t",a.type="radio",Y.radioValue="t"===a.value}();var dc,ec,fc=_.expr.attrHandle;_.fn.extend({attr:function(a,b){return qb(this,_.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){_.removeAttr(this,a)})}}),_.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===zb?_.prop(a,b,c):(1===f&&_.isXMLDoc(a)||(b=b.toLowerCase(),d=_.attrHooks[b]||(_.expr.match.bool.test(b)?ec:dc)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=_.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void _.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(nb);if(f&&1===a.nodeType)for(;c=f[e++];)d=_.propFix[c]||c,_.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)},attrHooks:{type:{set:function(a,b){if(!Y.radioValue&&"radio"===b&&_.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),ec={set:function(a,b,c){return b===!1?_.removeAttr(a,c):a.setAttribute(c,c),c}},_.each(_.expr.match.bool.source.match(/\w+/g),function(a,b){var c=fc[b]||_.find.attr;fc[b]=function(a,b,d){var e,f;return d||(f=fc[b],fc[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,fc[b]=f),e}});var gc=/^(?:input|select|textarea|button)$/i;_.fn.extend({prop:function(a,b){return qb(this,_.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[_.propFix[a]||a]})}}),_.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!_.isXMLDoc(a),f&&(b=_.propFix[b]||b,e=_.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){return a.hasAttribute("tabindex")||gc.test(a.nodeName)||a.href?a.tabIndex:-1}}}}),Y.optSelected||(_.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null}}),_.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){_.propFix[this.toLowerCase()]=this});var hc=/[\t\r\n\f]/g;_.fn.extend({addClass:function(a){var b,c,d,e,f,g,h="string"==typeof a&&a,i=0,j=this.length;if(_.isFunction(a))return this.each(function(b){_(this).addClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(nb)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(hc," "):" ")){for(f=0;e=b[f++];)d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=_.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0===arguments.length||"string"==typeof a&&a,i=0,j=this.length;if(_.isFunction(a))return this.each(function(b){_(this).removeClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(nb)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(hc," "):"")){for(f=0;e=b[f++];)for(;d.indexOf(" "+e+" ")>=0;)d=d.replace(" "+e+" "," ");g=a?_.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(_.isFunction(a)?function(c){_(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c)for(var b,d=0,e=_(this),f=a.match(nb)||[];b=f[d++];)e.hasClass(b)?e.removeClass(b):e.addClass(b);else(c===zb||"boolean"===c)&&(this.className&&rb.set(this,"__className__",this.className),this.className=this.className||a===!1?"":rb.get(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(hc," ").indexOf(b)>=0)return!0;return!1}});var ic=/\r/g;_.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=_.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,_(this).val()):a,null==e?e="":"number"==typeof e?e+="":_.isArray(e)&&(e=_.map(e,function(a){return null==a?"":a+""})),b=_.valHooks[this.type]||_.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=_.valHooks[e.type]||_.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(ic,""):null==c?"":c)}}}),_.extend({valHooks:{option:{get:function(a){var b=_.find.attr(a,"value");return null!=b?b:_.trim(_.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(Y.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&_.nodeName(c.parentNode,"optgroup"))){if(b=_(c).val(),f)return b;g.push(b)}return g},set:function(a,b){for(var c,d,e=a.options,f=_.makeArray(b),g=e.length;g--;)d=e[g],(d.selected=_.inArray(d.value,f)>=0)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),_.each(["radio","checkbox"],function(){_.valHooks[this]={set:function(a,b){return _.isArray(b)?a.checked=_.inArray(_(a).val(),b)>=0:void 0}},Y.checkOn||(_.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})}),_.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){_.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),_.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var jc=_.now(),kc=/\?/;_.parseJSON=function(a){return JSON.parse(a+"")},_.parseXML=function(a){var b,c;if(!a||"string"!=typeof a)return null;try{c=new DOMParser,b=c.parseFromString(a,"text/xml")}catch(d){b=void 0}return(!b||b.getElementsByTagName("parsererror").length)&&_.error("Invalid XML: "+a),b};var lc,mc,nc=/#.*$/,oc=/([?&])_=[^&]*/,pc=/^(.*?):[ \t]*([^\r\n]*)$/gm,qc=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,rc=/^(?:GET|HEAD)$/,sc=/^\/\//,tc=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,uc={},vc={},wc="*/".concat("*");try{mc=location.href}catch(xc){mc=Z.createElement("a"),mc.href="",mc=mc.href}lc=tc.exec(mc.toLowerCase())||[],_.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:mc,type:"GET",isLocal:qc.test(lc[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":wc,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":_.parseJSON,"text xml":_.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?L(L(a,_.ajaxSettings),b):L(_.ajaxSettings,a)},ajaxPrefilter:J(uc),ajaxTransport:J(vc),ajax:function(a,b){function c(a,b,c,g){var i,k,r,s,u,w=b;2!==t&&(t=2,h&&clearTimeout(h),d=void 0,f=g||"",v.readyState=a>0?4:0,i=a>=200&&300>a||304===a,c&&(s=M(l,v,c)),s=N(l,s,v,i),i?(l.ifModified&&(u=v.getResponseHeader("Last-Modified"),u&&(_.lastModified[e]=u),u=v.getResponseHeader("etag"),u&&(_.etag[e]=u)),204===a||"HEAD"===l.type?w="nocontent":304===a?w="notmodified":(w=s.state,k=s.data,r=s.error,i=!r)):(r=w,(a||!w)&&(w="error",0>a&&(a=0))),v.status=a,v.statusText=(b||w)+"",i?o.resolveWith(m,[k,w,v]):o.rejectWith(m,[v,w,r]),v.statusCode(q),q=void 0,j&&n.trigger(i?"ajaxSuccess":"ajaxError",[v,l,i?k:r]),p.fireWith(m,[v,w]),j&&(n.trigger("ajaxComplete",[v,l]),--_.active||_.event.trigger("ajaxStop")))}"object"==typeof a&&(b=a,a=void 0),b=b||{};var d,e,f,g,h,i,j,k,l=_.ajaxSetup({},b),m=l.context||l,n=l.context&&(m.nodeType||m.jquery)?_(m):_.event,o=_.Deferred(),p=_.Callbacks("once memory"),q=l.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!g)for(g={};b=pc.exec(f);)g[b[1].toLowerCase()]=b[2];b=g[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?f:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(l.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return d&&d.abort(b),c(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,l.url=((a||l.url||mc)+"").replace(nc,"").replace(sc,lc[1]+"//"),l.type=b.method||b.type||l.method||l.type,l.dataTypes=_.trim(l.dataType||"*").toLowerCase().match(nb)||[""],null==l.crossDomain&&(i=tc.exec(l.url.toLowerCase()),l.crossDomain=!(!i||i[1]===lc[1]&&i[2]===lc[2]&&(i[3]||("http:"===i[1]?"80":"443"))===(lc[3]||("http:"===lc[1]?"80":"443")))),l.data&&l.processData&&"string"!=typeof l.data&&(l.data=_.param(l.data,l.traditional)),K(uc,l,b,v),2===t)return v;j=l.global,j&&0===_.active++&&_.event.trigger("ajaxStart"),l.type=l.type.toUpperCase(),l.hasContent=!rc.test(l.type),e=l.url,l.hasContent||(l.data&&(e=l.url+=(kc.test(e)?"&":"?")+l.data,delete l.data),l.cache===!1&&(l.url=oc.test(e)?e.replace(oc,"$1_="+jc++):e+(kc.test(e)?"&":"?")+"_="+jc++)),l.ifModified&&(_.lastModified[e]&&v.setRequestHeader("If-Modified-Since",_.lastModified[e]),_.etag[e]&&v.setRequestHeader("If-None-Match",_.etag[e])),(l.data&&l.hasContent&&l.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",l.contentType),v.setRequestHeader("Accept",l.dataTypes[0]&&l.accepts[l.dataTypes[0]]?l.accepts[l.dataTypes[0]]+("*"!==l.dataTypes[0]?", "+wc+"; q=0.01":""):l.accepts["*"]);for(k in l.headers)v.setRequestHeader(k,l.headers[k]);if(l.beforeSend&&(l.beforeSend.call(m,v,l)===!1||2===t))return v.abort();u="abort";for(k in{success:1,error:1,complete:1})v[k](l[k]);if(d=K(vc,l,b,v)){v.readyState=1,j&&n.trigger("ajaxSend",[v,l]),l.async&&l.timeout>0&&(h=setTimeout(function(){v.abort("timeout")},l.timeout));try{t=1,d.send(r,c)}catch(w){if(!(2>t))throw w;c(-1,w)}}else c(-1,"No Transport");return v},getJSON:function(a,b,c){return _.get(a,b,c,"json")},getScript:function(a,b){return _.get(a,void 0,b,"script")}}),_.each(["get","post"],function(a,b){_[b]=function(a,c,d,e){return _.isFunction(c)&&(e=e||d,d=c,c=void 0),_.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),_.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){_.fn[b]=function(a){return this.on(b,a)}}),_._evalUrl=function(a){return _.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},_.fn.extend({wrapAll:function(a){var b;return _.isFunction(a)?this.each(function(b){_(this).wrapAll(a.call(this,b))}):(this[0]&&(b=_(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){for(var a=this;a.firstElementChild;)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return this.each(_.isFunction(a)?function(b){_(this).wrapInner(a.call(this,b))}:function(){var b=_(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=_.isFunction(a);return this.each(function(c){_(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){_.nodeName(this,"body")||_(this).replaceWith(this.childNodes)}).end()}}),_.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0},_.expr.filters.visible=function(a){return!_.expr.filters.hidden(a)};var yc=/%20/g,zc=/\[\]$/,Ac=/\r?\n/g,Bc=/^(?:submit|button|image|reset|file)$/i,Cc=/^(?:input|select|textarea|keygen)/i;_.param=function(a,b){var c,d=[],e=function(a,b){b=_.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=_.ajaxSettings&&_.ajaxSettings.traditional),_.isArray(a)||a.jquery&&!_.isPlainObject(a))_.each(a,function(){e(this.name,this.value)
});else for(c in a)O(c,a[c],b,e);return d.join("&").replace(yc,"+")},_.fn.extend({serialize:function(){return _.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=_.prop(this,"elements");return a?_.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!_(this).is(":disabled")&&Cc.test(this.nodeName)&&!Bc.test(a)&&(this.checked||!yb.test(a))}).map(function(a,b){var c=_(this).val();return null==c?null:_.isArray(c)?_.map(c,function(a){return{name:b.name,value:a.replace(Ac,"\r\n")}}):{name:b.name,value:c.replace(Ac,"\r\n")}}).get()}}),_.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(a){}};var Dc=0,Ec={},Fc={0:200,1223:204},Gc=_.ajaxSettings.xhr();a.ActiveXObject&&_(a).on("unload",function(){for(var a in Ec)Ec[a]()}),Y.cors=!!Gc&&"withCredentials"in Gc,Y.ajax=Gc=!!Gc,_.ajaxTransport(function(a){var b;return Y.cors||Gc&&!a.crossDomain?{send:function(c,d){var e,f=a.xhr(),g=++Dc;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)f.setRequestHeader(e,c[e]);b=function(a){return function(){b&&(delete Ec[g],b=f.onload=f.onerror=null,"abort"===a?f.abort():"error"===a?d(f.status,f.statusText):d(Fc[f.status]||f.status,f.statusText,"string"==typeof f.responseText?{text:f.responseText}:void 0,f.getAllResponseHeaders()))}},f.onload=b(),f.onerror=b("error"),b=Ec[g]=b("abort");try{f.send(a.hasContent&&a.data||null)}catch(h){if(b)throw h}},abort:function(){b&&b()}}:void 0}),_.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return _.globalEval(a),a}}}),_.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),_.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(d,e){b=_("<script>").prop({async:!0,charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&e("error"===a.type?404:200,a.type)}),Z.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Hc=[],Ic=/(=)\?(?=&|$)|\?\?/;_.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Hc.pop()||_.expando+"_"+jc++;return this[a]=!0,a}}),_.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Ic.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Ic.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=_.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Ic,"$1"+e):b.jsonp!==!1&&(b.url+=(kc.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||_.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Hc.push(e)),g&&_.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),_.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||Z;var d=gb.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=_.buildFragment([a],b,e),e&&e.length&&_(e).remove(),_.merge([],d.childNodes))};var Jc=_.fn.load;_.fn.load=function(a,b,c){if("string"!=typeof a&&Jc)return Jc.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=_.trim(a.slice(h)),a=a.slice(0,h)),_.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&_.ajax({url:a,type:e,dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?_("<div>").append(_.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,f||[a.responseText,b,a])}),this},_.expr.filters.animated=function(a){return _.grep(_.timers,function(b){return a===b.elem}).length};var Kc=a.document.documentElement;_.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=_.css(a,"position"),l=_(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=_.css(a,"top"),i=_.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),_.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},_.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){_.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,_.contains(b,d)?(typeof d.getBoundingClientRect!==zb&&(e=d.getBoundingClientRect()),c=P(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===_.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),_.nodeName(a[0],"html")||(d=a.offset()),d.top+=_.css(a[0],"borderTopWidth",!0),d.left+=_.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-_.css(c,"marginTop",!0),left:b.left-d.left-_.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var a=this.offsetParent||Kc;a&&!_.nodeName(a,"html")&&"static"===_.css(a,"position");)a=a.offsetParent;return a||Kc})}}),_.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(b,c){var d="pageYOffset"===c;_.fn[b]=function(e){return qb(this,function(b,e,f){var g=P(b);return void 0===f?g?g[c]:b[e]:void(g?g.scrollTo(d?a.pageXOffset:f,d?f:a.pageYOffset):b[e]=f)},b,e,arguments.length,null)}}),_.each(["top","left"],function(a,b){_.cssHooks[b]=w(Y.pixelPosition,function(a,c){return c?(c=v(a,b),Qb.test(c)?_(a).position()[b]+"px":c):void 0})}),_.each({Height:"height",Width:"width"},function(a,b){_.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){_.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return qb(this,function(b,c,d){var e;return _.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?_.css(b,c,g):_.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),_.fn.size=function(){return this.length},_.fn.andSelf=_.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return _});var Lc=a.jQuery,Mc=a.$;return _.noConflict=function(b){return a.$===_&&(a.$=Mc),b&&a.jQuery===_&&(a.jQuery=Lc),_},typeof b===zb&&(a.jQuery=a.$=_),_});
/*!
  SerializeJSON jQuery plugin.
  https://github.com/marioizquierdo/jquery.serializeJSON
  version 1.0.1 (Aug 20, 2012)

  Copyright (c) 2012 Mario Izquierdo
  Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
  and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
*/

(function(b){b.fn.serializeJSON=function(){var d,c;d={};c=this.serializeArray();b.each(c,function(g,e){var f,j,h;f=e.name;j=e.value;h=b.map(f.split("["),function(i){var k;k=i[i.length-1];return k==="]"?i.substring(0,i.length-1):i});if(h[0]===""){h.shift()}b.deepSet(d,h,j)});return d};var a=function(c){return c===Object(c)};b.deepSet=function(c,k,g){if(!k||k.length===0){throw new Error("ArgumentError: keys param expected to be an array with least one key")}var i,d,f,h,j,e;i=k[0];d=k[1];if(d!==undefined&&d!==null){f=k.slice(1);if(i===""){j=c.length-1;e=c[c.length-1];if(a(e)&&!e[d]){i=j}else{c.push({});i=j+1}}if(c[i]===undefined){h=(d===""||!isNaN(parseInt(d,10)))?[]:{};c[i]=h}b.deepSet(c[i],f,g)}else{if(i===""){c.push(g)}else{c[i]=g}}}}(jQuery));
/*
Shameless port of a shameless port
@defunkt => @janl => @aq
 
See http://github.com/defunkt/mustache for more info.
*/

 
(function($) {

/*!
 * mustache.js - Logic-less {{mustache}} templates with JavaScript
 * http://github.com/janl/mustache.js
 */

/*global define: false*/

(function (global, factory) {
  if (typeof exports === "object" && exports) {
    factory(exports); // CommonJS
  } else if (typeof define === "function" && define.amd) {
    define(['exports'], factory); // AMD
  } else {
    factory(global.Mustache = {}); // <script>
  }
}(this, function (mustache) {

  var Object_toString = Object.prototype.toString;
  var isArray = Array.isArray || function (object) {
    return Object_toString.call(object) === '[object Array]';
  };

  function isFunction(object) {
    return typeof object === 'function';
  }

  function escapeRegExp(string) {
    return string.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
  }

  // Workaround for https://issues.apache.org/jira/browse/COUCHDB-577
  // See https://github.com/janl/mustache.js/issues/189
  var RegExp_test = RegExp.prototype.test;
  function testRegExp(re, string) {
    return RegExp_test.call(re, string);
  }

  var nonSpaceRe = /\S/;
  function isWhitespace(string) {
    return !testRegExp(nonSpaceRe, string);
  }

  var entityMap = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': '&quot;',
    "'": '&#39;',
    "/": '&#x2F;'
  };

  function escapeHtml(string) {
    return String(string).replace(/[&<>"'\/]/g, function (s) {
      return entityMap[s];
    });
  }

  var whiteRe = /\s*/;
  var spaceRe = /\s+/;
  var equalsRe = /\s*=/;
  var curlyRe = /\s*\}/;
  var tagRe = /#|\^|\/|>|\{|&|=|!/;

  /**
   * Breaks up the given `template` string into a tree of tokens. If the `tags`
   * argument is given here it must be an array with two string values: the
   * opening and closing tags used in the template (e.g. [ "<%", "%>" ]). Of
   * course, the default is to use mustaches (i.e. mustache.tags).
   *
   * A token is an array with at least 4 elements. The first element is the
   * mustache symbol that was used inside the tag, e.g. "#" or "&". If the tag
   * did not contain a symbol (i.e. {{myValue}}) this element is "name". For
   * all text that appears outside a symbol this element is "text".
   *
   * The second element of a token is its "value". For mustache tags this is
   * whatever else was inside the tag besides the opening symbol. For text tokens
   * this is the text itself.
   *
   * The third and fourth elements of the token are the start and end indices,
   * respectively, of the token in the original template.
   *
   * Tokens that are the root node of a subtree contain two more elements: 1) an
   * array of tokens in the subtree and 2) the index in the original template at
   * which the closing tag for that section begins.
   */
  function parseTemplate(template, tags) {
    if (!template)
      return [];

    var sections = [];     // Stack to hold section tokens
    var tokens = [];       // Buffer to hold the tokens
    var spaces = [];       // Indices of whitespace tokens on the current line
    var hasTag = false;    // Is there a {{tag}} on the current line?
    var nonSpace = false;  // Is there a non-space char on the current line?

    // Strips all whitespace tokens array for the current line
    // if there was a {{#tag}} on it and otherwise only space.
    function stripSpace() {
      if (hasTag && !nonSpace) {
        while (spaces.length)
          delete tokens[spaces.pop()];
      } else {
        spaces = [];
      }

      hasTag = false;
      nonSpace = false;
    }

    var openingTagRe, closingTagRe, closingCurlyRe;
    function compileTags(tags) {
      if (typeof tags === 'string')
        tags = tags.split(spaceRe, 2);

      if (!isArray(tags) || tags.length !== 2)
        throw new Error('Invalid tags: ' + tags);

      openingTagRe = new RegExp(escapeRegExp(tags[0]) + '\\s*');
      closingTagRe = new RegExp('\\s*' + escapeRegExp(tags[1]));
      closingCurlyRe = new RegExp('\\s*' + escapeRegExp('}' + tags[1]));
    }

    compileTags(tags || mustache.tags);

    var scanner = new Scanner(template);

    var start, type, value, chr, token, openSection;
    while (!scanner.eos()) {
      start = scanner.pos;

      // Match any text between tags.
      value = scanner.scanUntil(openingTagRe);

      if (value) {
        for (var i = 0, valueLength = value.length; i < valueLength; ++i) {
          chr = value.charAt(i);

          if (isWhitespace(chr)) {
            spaces.push(tokens.length);
          } else {
            nonSpace = true;
          }

          tokens.push([ 'text', chr, start, start + 1 ]);
          start += 1;

          // Check for whitespace on the current line.
          if (chr === '\n')
            stripSpace();
        }
      }

      // Match the opening tag.
      if (!scanner.scan(openingTagRe))
        break;

      hasTag = true;

      // Get the tag type.
      type = scanner.scan(tagRe) || 'name';
      scanner.scan(whiteRe);

      // Get the tag value.
      if (type === '=') {
        value = scanner.scanUntil(equalsRe);
        scanner.scan(equalsRe);
        scanner.scanUntil(closingTagRe);
      } else if (type === '{') {
        value = scanner.scanUntil(closingCurlyRe);
        scanner.scan(curlyRe);
        scanner.scanUntil(closingTagRe);
        type = '&';
      } else {
        value = scanner.scanUntil(closingTagRe);
      }

      // Match the closing tag.
      if (!scanner.scan(closingTagRe))
        throw new Error('Unclosed tag at ' + scanner.pos);

      token = [ type, value, start, scanner.pos ];
      tokens.push(token);

      if (type === '#' || type === '^') {
        sections.push(token);
      } else if (type === '/') {
        // Check section nesting.
        openSection = sections.pop();

        if (!openSection)
          throw new Error('Unopened section "' + value + '" at ' + start);

        if (openSection[1] !== value)
          throw new Error('Unclosed section "' + openSection[1] + '" at ' + start);
      } else if (type === 'name' || type === '{' || type === '&') {
        nonSpace = true;
      } else if (type === '=') {
        // Set the tags for the next time around.
        compileTags(value);
      }
    }

    // Make sure there are no open sections when we're done.
    openSection = sections.pop();

    if (openSection)
      throw new Error('Unclosed section "' + openSection[1] + '" at ' + scanner.pos);

    return nestTokens(squashTokens(tokens));
  }

  /**
   * Combines the values of consecutive text tokens in the given `tokens` array
   * to a single token.
   */
  function squashTokens(tokens) {
    var squashedTokens = [];

    var token, lastToken;
    for (var i = 0, numTokens = tokens.length; i < numTokens; ++i) {
      token = tokens[i];

      if (token) {
        if (token[0] === 'text' && lastToken && lastToken[0] === 'text') {
          lastToken[1] += token[1];
          lastToken[3] = token[3];
        } else {
          squashedTokens.push(token);
          lastToken = token;
        }
      }
    }

    return squashedTokens;
  }

  /**
   * Forms the given array of `tokens` into a nested tree structure where
   * tokens that represent a section have two additional items: 1) an array of
   * all tokens that appear in that section and 2) the index in the original
   * template that represents the end of that section.
   */
  function nestTokens(tokens) {
    var nestedTokens = [];
    var collector = nestedTokens;
    var sections = [];

    var token, section;
    for (var i = 0, numTokens = tokens.length; i < numTokens; ++i) {
      token = tokens[i];

      switch (token[0]) {
      case '#':
      case '^':
        collector.push(token);
        sections.push(token);
        collector = token[4] = [];
        break;
      case '/':
        section = sections.pop();
        section[5] = token[2];
        collector = sections.length > 0 ? sections[sections.length - 1][4] : nestedTokens;
        break;
      default:
        collector.push(token);
      }
    }

    return nestedTokens;
  }

  /**
   * A simple string scanner that is used by the template parser to find
   * tokens in template strings.
   */
  function Scanner(string) {
    this.string = string;
    this.tail = string;
    this.pos = 0;
  }

  /**
   * Returns `true` if the tail is empty (end of string).
   */
  Scanner.prototype.eos = function () {
    return this.tail === "";
  };

  /**
   * Tries to match the given regular expression at the current position.
   * Returns the matched text if it can match, the empty string otherwise.
   */
  Scanner.prototype.scan = function (re) {
    var match = this.tail.match(re);

    if (!match || match.index !== 0)
      return '';

    var string = match[0];

    this.tail = this.tail.substring(string.length);
    this.pos += string.length;

    return string;
  };

  /**
   * Skips all text until the given regular expression can be matched. Returns
   * the skipped string, which is the entire tail if no match can be made.
   */
  Scanner.prototype.scanUntil = function (re) {
    var index = this.tail.search(re), match;

    switch (index) {
    case -1:
      match = this.tail;
      this.tail = "";
      break;
    case 0:
      match = "";
      break;
    default:
      match = this.tail.substring(0, index);
      this.tail = this.tail.substring(index);
    }

    this.pos += match.length;

    return match;
  };

  /**
   * Represents a rendering context by wrapping a view object and
   * maintaining a reference to the parent context.
   */
  function Context(view, parentContext) {
    this.view = view == null ? {} : view;
    this.cache = { '.': this.view };
    this.parent = parentContext;
  }

  /**
   * Creates a new context using the given view with this context
   * as the parent.
   */
  Context.prototype.push = function (view) {
    return new Context(view, this);
  };

  /**
   * Returns the value of the given name in this context, traversing
   * up the context hierarchy if the value is absent in this context's view.
   */
  Context.prototype.lookup = function (name) {
    var cache = this.cache;

    var value;
    if (name in cache) {
      value = cache[name];
    } else {
      var context = this, names, index;

      while (context) {
        if (name.indexOf('.') > 0) {
          value = context.view;
          names = name.split('.');
          index = 0;

          while (value != null && index < names.length)
            value = value[names[index++]];
        } else {
          value = context.view[name];
        }

        if (value != null)
          break;

        context = context.parent;
      }

      cache[name] = value;
    }

    if (isFunction(value))
      value = value.call(this.view);

    return value;
  };

  /**
   * A Writer knows how to take a stream of tokens and render them to a
   * string, given a context. It also maintains a cache of templates to
   * avoid the need to parse the same template twice.
   */
  function Writer() {
    this.cache = {};
  }

  /**
   * Clears all cached templates in this writer.
   */
  Writer.prototype.clearCache = function () {
    this.cache = {};
  };

  /**
   * Parses and caches the given `template` and returns the array of tokens
   * that is generated from the parse.
   */
  Writer.prototype.parse = function (template, tags) {
    var cache = this.cache;
    var tokens = cache[template];

    if (tokens == null)
      tokens = cache[template] = parseTemplate(template, tags);

    return tokens;
  };

  /**
   * High-level method that is used to render the given `template` with
   * the given `view`.
   *
   * The optional `partials` argument may be an object that contains the
   * names and templates of partials that are used in the template. It may
   * also be a function that is used to load partial templates on the fly
   * that takes a single argument: the name of the partial.
   */
  Writer.prototype.render = function (template, view, partials) {
    var tokens = this.parse(template);
    var context = (view instanceof Context) ? view : new Context(view);
    return this.renderTokens(tokens, context, partials, template);
  };

  /**
   * Low-level method that renders the given array of `tokens` using
   * the given `context` and `partials`.
   *
   * Note: The `originalTemplate` is only ever used to extract the portion
   * of the original template that was contained in a higher-order section.
   * If the template doesn't use higher-order sections, this argument may
   * be omitted.
   */
  Writer.prototype.renderTokens = function (tokens, context, partials, originalTemplate) {
    var buffer = '';

    // This function is used to render an arbitrary template
    // in the current context by higher-order sections.
    var self = this;
    function subRender(template) {
      return self.render(template, context, partials);
    }

    var token, value;
    for (var i = 0, numTokens = tokens.length; i < numTokens; ++i) {
      token = tokens[i];

      switch (token[0]) {
      case '#':
        value = context.lookup(token[1]);

        if (!value)
          continue;

        if (isArray(value)) {
          for (var j = 0, valueLength = value.length; j < valueLength; ++j) {
            buffer += this.renderTokens(token[4], context.push(value[j]), partials, originalTemplate);
          }
        } else if (typeof value === 'object' || typeof value === 'string') {
          buffer += this.renderTokens(token[4], context.push(value), partials, originalTemplate);
        } else if (isFunction(value)) {
          if (typeof originalTemplate !== 'string')
            throw new Error('Cannot use higher-order sections without the original template');

          // Extract the portion of the original template that the section contains.
          value = value.call(context.view, originalTemplate.slice(token[3], token[5]), subRender);

          if (value != null)
            buffer += value;
        } else {
          buffer += this.renderTokens(token[4], context, partials, originalTemplate);
        }

        break;
      case '^':
        value = context.lookup(token[1]);

        // Use JavaScript's definition of falsy. Include empty arrays.
        // See https://github.com/janl/mustache.js/issues/186
        if (!value || (isArray(value) && value.length === 0))
          buffer += this.renderTokens(token[4], context, partials, originalTemplate);

        break;
      case '>':
        if (!partials)
          continue;

        value = isFunction(partials) ? partials(token[1]) : partials[token[1]];

        if (value != null)
          buffer += this.renderTokens(this.parse(value), context, partials, value);

        break;
      case '&':
        value = context.lookup(token[1]);

        if (value != null)
          buffer += value;

        break;
      case 'name':
        value = context.lookup(token[1]);

        if (value != null)
          buffer += mustache.escape(value);

        break;
      case 'text':
        buffer += token[1];
        break;
      }
    }

    return buffer;
  };

  mustache.name = "mustache.js";
  mustache.version = "0.8.1";
  mustache.tags = [ "{{", "}}" ];

  // All high-level mustache.* functions use this writer.
  var defaultWriter = new Writer();

  /**
   * Clears all cached templates in the default writer.
   */
  mustache.clearCache = function () {
    return defaultWriter.clearCache();
  };

  /**
   * Parses and caches the given template in the default writer and returns the
   * array of tokens it contains. Doing this ahead of time avoids the need to
   * parse templates on the fly as they are rendered.
   */
  mustache.parse = function (template, tags) {
    return defaultWriter.parse(template, tags);
  };

  /**
   * Renders the `template` with the given `view` and `partials` using the
   * default writer.
   */
  mustache.render = function (template, view, partials) {
    return defaultWriter.render(template, view, partials);
  };

  // This is here for backwards compatibility with 0.4.x.
  mustache.to_html = function (template, view, partials, send) {
    var result = mustache.render(template, view, partials);

    if (isFunction(send)) {
      send(result);
    } else {
      return result;
    }
  };
  
  // Backbone predefined template addition
  // Added by onur uyar, http://github.com/lemmycaution
  
  mustache.template = function(templateString) {
    return function() { 
      if (arguments.length < 1) {
        return templateString;
      } else {
        Mustache.parse(templateString);
        return Mustache.render(templateString, arguments[0], arguments[1]); 
      }
    };
  };

  // Export the escaping function so that the user may override it.
  // See https://github.com/janl/mustache.js/issues/244
  mustache.escape = escapeHtml;

  // Export these mainly for testing, but also for advanced usage.
  mustache.Scanner = Scanner;
  mustache.Context = Context;
  mustache.Writer = Writer;

}));
  $.mustache = function (template, view, partials) {
    return Mustache.render(template, view, partials);
  };

  $.fn.mustache = function (view, partials) {
    return $(this).map(function (i, elm) {
      var template = $.trim($(elm).html());
      var output = $.mustache(template, view, partials);
      return $(output).get();
    });
  };

})(jQuery);
/*!
	Autosize 1.18.13
	license: MIT
	http://www.jacklmoore.com/autosize
*/

(function ($) {
	var
	defaults = {
		className: 'autosizejs',
		id: 'autosizejs',
		append: '\n',
		callback: false,
		resizeDelay: 10,
		placeholder: true
	},

	// border:0 is unnecessary, but avoids a bug in Firefox on OSX
	copy = '<textarea tabindex="-1" style="position:absolute; top:-999px; left:0; right:auto; bottom:auto; border:0; padding: 0; -moz-box-sizing:content-box; -webkit-box-sizing:content-box; box-sizing:content-box; word-wrap:break-word; height:0 !important; min-height:0 !important; overflow:hidden; transition:none; -webkit-transition:none; -moz-transition:none;"/>',

	// line-height is conditionally included because IE7/IE8/old Opera do not return the correct value.
	typographyStyles = [
		'fontFamily',
		'fontSize',
		'fontWeight',
		'fontStyle',
		'letterSpacing',
		'textTransform',
		'wordSpacing',
		'textIndent',
		'whiteSpace'
	],

	// to keep track which textarea is being mirrored when adjust() is called.
	mirrored,

	// the mirror element, which is used to calculate what size the mirrored element should be.
	mirror = $(copy).data('autosize', true)[0];

	// test that line-height can be accurately copied.
	mirror.style.lineHeight = '99px';
	if ($(mirror).css('lineHeight') === '99px') {
		typographyStyles.push('lineHeight');
	}
	mirror.style.lineHeight = '';

	$.fn.autosize = function (options) {
		if (!this.length) {
			return this;
		}

		options = $.extend({}, defaults, options || {});

		if (mirror.parentNode !== document.body) {
			$(document.body).append(mirror);
		}

		return this.each(function () {
			var
			ta = this,
			$ta = $(ta),
			maxHeight,
			minHeight,
			boxOffset = 0,
			callback = $.isFunction(options.callback),
			originalStyles = {
				height: ta.style.height,
				overflow: ta.style.overflow,
				overflowY: ta.style.overflowY,
				wordWrap: ta.style.wordWrap,
				resize: ta.style.resize
			},
			timeout,
			width = $ta.width(),
			taResize = $ta.css('resize');

			if ($ta.data('autosize')) {
				// exit if autosize has already been applied, or if the textarea is the mirror element.
				return;
			}
			$ta.data('autosize', true);

			if ($ta.css('box-sizing') === 'border-box' || $ta.css('-moz-box-sizing') === 'border-box' || $ta.css('-webkit-box-sizing') === 'border-box'){
				boxOffset = $ta.outerHeight() - $ta.height();
			}

			// IE8 and lower return 'auto', which parses to NaN, if no min-height is set.
			minHeight = Math.max(parseInt($ta.css('minHeight'), 10) - boxOffset || 0, $ta.height());

			$ta.css({
				overflow: 'hidden',
				overflowY: 'hidden',
				wordWrap: 'break-word' // horizontal overflow is hidden, so break-word is necessary for handling words longer than the textarea width
			});

			if (taResize === 'vertical') {
				$ta.css('resize','none');
			} else if (taResize === 'both') {
				$ta.css('resize', 'horizontal');
			}

			// The mirror width must exactly match the textarea width, so using getBoundingClientRect because it doesn't round the sub-pixel value.
			// window.getComputedStyle, getBoundingClientRect returning a width are unsupported, but also unneeded in IE8 and lower.
			function setWidth() {
				var width;
				var style = window.getComputedStyle ? window.getComputedStyle(ta, null) : false;
				
				if (style) {

					width = ta.getBoundingClientRect().width;

					if (width === 0 || typeof width !== 'number') {
						width = parseInt(style.width,10);
					}

					$.each(['paddingLeft', 'paddingRight', 'borderLeftWidth', 'borderRightWidth'], function(i,val){
						width -= parseInt(style[val],10);
					});
				} else {
					width = $ta.width();
				}

				mirror.style.width = Math.max(width,0) + 'px';
			}

			function initMirror() {
				var styles = {};

				mirrored = ta;
				mirror.className = options.className;
				mirror.id = options.id;
				maxHeight = parseInt($ta.css('maxHeight'), 10);

				// mirror is a duplicate textarea located off-screen that
				// is automatically updated to contain the same text as the
				// original textarea.  mirror always has a height of 0.
				// This gives a cross-browser supported way getting the actual
				// height of the text, through the scrollTop property.
				$.each(typographyStyles, function(i,val){
					styles[val] = $ta.css(val);
				});
				
				$(mirror).css(styles).attr('wrap', $ta.attr('wrap'));

				setWidth();

				// Chrome-specific fix:
				// When the textarea y-overflow is hidden, Chrome doesn't reflow the text to account for the space
				// made available by removing the scrollbar. This workaround triggers the reflow for Chrome.
				if (window.chrome) {
					var width = ta.style.width;
					ta.style.width = '0px';
					var ignore = ta.offsetWidth;
					ta.style.width = width;
				}
			}

			// Using mainly bare JS in this function because it is going
			// to fire very often while typing, and needs to very efficient.
			function adjust() {
				var height, original;

				if (mirrored !== ta) {
					initMirror();
				} else {
					setWidth();
				}

				if (!ta.value && options.placeholder) {
					// If the textarea is empty, copy the placeholder text into 
					// the mirror control and use that for sizing so that we 
					// don't end up with placeholder getting trimmed.
					mirror.value = ($ta.attr("placeholder") || '');
				} else {
					mirror.value = ta.value;
				}

				mirror.value += options.append || '';
				mirror.style.overflowY = ta.style.overflowY;
				original = parseInt(ta.style.height,10);

				// Setting scrollTop to zero is needed in IE8 and lower for the next step to be accurately applied
				mirror.scrollTop = 0;

				mirror.scrollTop = 9e4;

				// Using scrollTop rather than scrollHeight because scrollHeight is non-standard and includes padding.
				height = mirror.scrollTop;

				if (maxHeight && height > maxHeight) {
					ta.style.overflowY = 'scroll';
					height = maxHeight;
				} else {
					ta.style.overflowY = 'hidden';
					if (height < minHeight) {
						height = minHeight;
					}
				}

				height += boxOffset;

				if (original !== height) {
					ta.style.height = height + 'px';
					if (callback) {
						options.callback.call(ta,ta);
					}
					$ta.trigger('autosize.resized');
				}
			}

			function resize () {
				clearTimeout(timeout);
				timeout = setTimeout(function(){
					var newWidth = $ta.width();

					if (newWidth !== width) {
						width = newWidth;
						adjust();
					}
				}, parseInt(options.resizeDelay,10));
			}

			if ('onpropertychange' in ta) {
				if ('oninput' in ta) {
					// Detects IE9.  IE9 does not fire onpropertychange or oninput for deletions,
					// so binding to onkeyup to catch most of those occasions.  There is no way that I
					// know of to detect something like 'cut' in IE9.
					$ta.on('input.autosize keyup.autosize', adjust);
				} else {
					// IE7 / IE8
					$ta.on('propertychange.autosize', function(){
						if(event.propertyName === 'value'){
							adjust();
						}
					});
				}
			} else {
				// Modern Browsers
				$ta.on('input.autosize', adjust);
			}

			// Set options.resizeDelay to false if using fixed-width textarea elements.
			// Uses a timeout and width check to reduce the amount of times adjust needs to be called after window resize.

			if (options.resizeDelay !== false) {
				$(window).on('resize.autosize', resize);
			}

			// Event for manual triggering if needed.
			// Should only be needed when the value of the textarea is changed through JavaScript rather than user input.
			$ta.on('autosize.resize', adjust);

			// Event for manual triggering that also forces the styles to update as well.
			// Should only be needed if one of typography styles of the textarea change, and the textarea is already the target of the adjust method.
			$ta.on('autosize.resizeIncludeStyle', function() {
				mirrored = null;
				adjust();
			});

			$ta.on('autosize.destroy', function(){
				mirrored = null;
				clearTimeout(timeout);
				$(window).off('resize', resize);
				$ta
					.off('autosize')
					.off('.autosize')
					.css(originalStyles)
					.removeData('autosize');
			});

			// Call adjust in case the textarea already contains text.
			adjust();
		});
	};
}(jQuery || $)); // jQuery or jQuery-like library, such as Zepto
;
//     Underscore.js 1.7.0
//     http://underscorejs.org
//     (c) 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.

(function() {

  // Baseline setup
  // --------------

  // Establish the root object, `window` in the browser, or `exports` on the server.
  var root = this;

  // Save the previous value of the `_` variable.
  var previousUnderscore = root._;

  // Save bytes in the minified (but not gzipped) version:
  var ArrayProto = Array.prototype, ObjProto = Object.prototype, FuncProto = Function.prototype;

  // Create quick reference variables for speed access to core prototypes.
  var
    push             = ArrayProto.push,
    slice            = ArrayProto.slice,
    concat           = ArrayProto.concat,
    toString         = ObjProto.toString,
    hasOwnProperty   = ObjProto.hasOwnProperty;

  // All **ECMAScript 5** native function implementations that we hope to use
  // are declared here.
  var
    nativeIsArray      = Array.isArray,
    nativeKeys         = Object.keys,
    nativeBind         = FuncProto.bind;

  // Create a safe reference to the Underscore object for use below.
  var _ = function(obj) {
    if (obj instanceof _) return obj;
    if (!(this instanceof _)) return new _(obj);
    this._wrapped = obj;
  };

  // Export the Underscore object for **Node.js**, with
  // backwards-compatibility for the old `require()` API. If we're in
  // the browser, add `_` as a global object.
  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = _;
    }
    exports._ = _;
  } else {
    root._ = _;
  }

  // Current version.
  _.VERSION = '1.7.0';

  // Internal function that returns an efficient (for current engines) version
  // of the passed-in callback, to be repeatedly applied in other Underscore
  // functions.
  var createCallback = function(func, context, argCount) {
    if (context === void 0) return func;
    switch (argCount == null ? 3 : argCount) {
      case 1: return function(value) {
        return func.call(context, value);
      };
      case 2: return function(value, other) {
        return func.call(context, value, other);
      };
      case 3: return function(value, index, collection) {
        return func.call(context, value, index, collection);
      };
      case 4: return function(accumulator, value, index, collection) {
        return func.call(context, accumulator, value, index, collection);
      };
    }
    return function() {
      return func.apply(context, arguments);
    };
  };

  // A mostly-internal function to generate callbacks that can be applied
  // to each element in a collection, returning the desired result — either
  // identity, an arbitrary callback, a property matcher, or a property accessor.
  _.iteratee = function(value, context, argCount) {
    if (value == null) return _.identity;
    if (_.isFunction(value)) return createCallback(value, context, argCount);
    if (_.isObject(value)) return _.matches(value);
    return _.property(value);
  };

  // Collection Functions
  // --------------------

  // The cornerstone, an `each` implementation, aka `forEach`.
  // Handles raw objects in addition to array-likes. Treats all
  // sparse array-likes as if they were dense.
  _.each = _.forEach = function(obj, iteratee, context) {
    if (obj == null) return obj;
    iteratee = createCallback(iteratee, context);
    var i, length = obj.length;
    if (length === +length) {
      for (i = 0; i < length; i++) {
        iteratee(obj[i], i, obj);
      }
    } else {
      var keys = _.keys(obj);
      for (i = 0, length = keys.length; i < length; i++) {
        iteratee(obj[keys[i]], keys[i], obj);
      }
    }
    return obj;
  };

  // Return the results of applying the iteratee to each element.
  _.map = _.collect = function(obj, iteratee, context) {
    if (obj == null) return [];
    iteratee = _.iteratee(iteratee, context);
    var keys = obj.length !== +obj.length && _.keys(obj),
        length = (keys || obj).length,
        results = Array(length),
        currentKey;
    for (var index = 0; index < length; index++) {
      currentKey = keys ? keys[index] : index;
      results[index] = iteratee(obj[currentKey], currentKey, obj);
    }
    return results;
  };

  var reduceError = 'Reduce of empty array with no initial value';

  // **Reduce** builds up a single result from a list of values, aka `inject`,
  // or `foldl`.
  _.reduce = _.foldl = _.inject = function(obj, iteratee, memo, context) {
    if (obj == null) obj = [];
    iteratee = createCallback(iteratee, context, 4);
    var keys = obj.length !== +obj.length && _.keys(obj),
        length = (keys || obj).length,
        index = 0, currentKey;
    if (arguments.length < 3) {
      if (!length) throw new TypeError(reduceError);
      memo = obj[keys ? keys[index++] : index++];
    }
    for (; index < length; index++) {
      currentKey = keys ? keys[index] : index;
      memo = iteratee(memo, obj[currentKey], currentKey, obj);
    }
    return memo;
  };

  // The right-associative version of reduce, also known as `foldr`.
  _.reduceRight = _.foldr = function(obj, iteratee, memo, context) {
    if (obj == null) obj = [];
    iteratee = createCallback(iteratee, context, 4);
    var keys = obj.length !== + obj.length && _.keys(obj),
        index = (keys || obj).length,
        currentKey;
    if (arguments.length < 3) {
      if (!index) throw new TypeError(reduceError);
      memo = obj[keys ? keys[--index] : --index];
    }
    while (index--) {
      currentKey = keys ? keys[index] : index;
      memo = iteratee(memo, obj[currentKey], currentKey, obj);
    }
    return memo;
  };

  // Return the first value which passes a truth test. Aliased as `detect`.
  _.find = _.detect = function(obj, predicate, context) {
    var result;
    predicate = _.iteratee(predicate, context);
    _.some(obj, function(value, index, list) {
      if (predicate(value, index, list)) {
        result = value;
        return true;
      }
    });
    return result;
  };

  // Return all the elements that pass a truth test.
  // Aliased as `select`.
  _.filter = _.select = function(obj, predicate, context) {
    var results = [];
    if (obj == null) return results;
    predicate = _.iteratee(predicate, context);
    _.each(obj, function(value, index, list) {
      if (predicate(value, index, list)) results.push(value);
    });
    return results;
  };

  // Return all the elements for which a truth test fails.
  _.reject = function(obj, predicate, context) {
    return _.filter(obj, _.negate(_.iteratee(predicate)), context);
  };

  // Determine whether all of the elements match a truth test.
  // Aliased as `all`.
  _.every = _.all = function(obj, predicate, context) {
    if (obj == null) return true;
    predicate = _.iteratee(predicate, context);
    var keys = obj.length !== +obj.length && _.keys(obj),
        length = (keys || obj).length,
        index, currentKey;
    for (index = 0; index < length; index++) {
      currentKey = keys ? keys[index] : index;
      if (!predicate(obj[currentKey], currentKey, obj)) return false;
    }
    return true;
  };

  // Determine if at least one element in the object matches a truth test.
  // Aliased as `any`.
  _.some = _.any = function(obj, predicate, context) {
    if (obj == null) return false;
    predicate = _.iteratee(predicate, context);
    var keys = obj.length !== +obj.length && _.keys(obj),
        length = (keys || obj).length,
        index, currentKey;
    for (index = 0; index < length; index++) {
      currentKey = keys ? keys[index] : index;
      if (predicate(obj[currentKey], currentKey, obj)) return true;
    }
    return false;
  };

  // Determine if the array or object contains a given value (using `===`).
  // Aliased as `include`.
  _.contains = _.include = function(obj, target) {
    if (obj == null) return false;
    if (obj.length !== +obj.length) obj = _.values(obj);
    return _.indexOf(obj, target) >= 0;
  };

  // Invoke a method (with arguments) on every item in a collection.
  _.invoke = function(obj, method) {
    var args = slice.call(arguments, 2);
    var isFunc = _.isFunction(method);
    return _.map(obj, function(value) {
      return (isFunc ? method : value[method]).apply(value, args);
    });
  };

  // Convenience version of a common use case of `map`: fetching a property.
  _.pluck = function(obj, key) {
    return _.map(obj, _.property(key));
  };

  // Convenience version of a common use case of `filter`: selecting only objects
  // containing specific `key:value` pairs.
  _.where = function(obj, attrs) {
    return _.filter(obj, _.matches(attrs));
  };

  // Convenience version of a common use case of `find`: getting the first object
  // containing specific `key:value` pairs.
  _.findWhere = function(obj, attrs) {
    return _.find(obj, _.matches(attrs));
  };

  // Return the maximum element (or element-based computation).
  _.max = function(obj, iteratee, context) {
    var result = -Infinity, lastComputed = -Infinity,
        value, computed;
    if (iteratee == null && obj != null) {
      obj = obj.length === +obj.length ? obj : _.values(obj);
      for (var i = 0, length = obj.length; i < length; i++) {
        value = obj[i];
        if (value > result) {
          result = value;
        }
      }
    } else {
      iteratee = _.iteratee(iteratee, context);
      _.each(obj, function(value, index, list) {
        computed = iteratee(value, index, list);
        if (computed > lastComputed || computed === -Infinity && result === -Infinity) {
          result = value;
          lastComputed = computed;
        }
      });
    }
    return result;
  };

  // Return the minimum element (or element-based computation).
  _.min = function(obj, iteratee, context) {
    var result = Infinity, lastComputed = Infinity,
        value, computed;
    if (iteratee == null && obj != null) {
      obj = obj.length === +obj.length ? obj : _.values(obj);
      for (var i = 0, length = obj.length; i < length; i++) {
        value = obj[i];
        if (value < result) {
          result = value;
        }
      }
    } else {
      iteratee = _.iteratee(iteratee, context);
      _.each(obj, function(value, index, list) {
        computed = iteratee(value, index, list);
        if (computed < lastComputed || computed === Infinity && result === Infinity) {
          result = value;
          lastComputed = computed;
        }
      });
    }
    return result;
  };

  // Shuffle a collection, using the modern version of the
  // [Fisher-Yates shuffle](http://en.wikipedia.org/wiki/Fisher–Yates_shuffle).
  _.shuffle = function(obj) {
    var set = obj && obj.length === +obj.length ? obj : _.values(obj);
    var length = set.length;
    var shuffled = Array(length);
    for (var index = 0, rand; index < length; index++) {
      rand = _.random(0, index);
      if (rand !== index) shuffled[index] = shuffled[rand];
      shuffled[rand] = set[index];
    }
    return shuffled;
  };

  // Sample **n** random values from a collection.
  // If **n** is not specified, returns a single random element.
  // The internal `guard` argument allows it to work with `map`.
  _.sample = function(obj, n, guard) {
    if (n == null || guard) {
      if (obj.length !== +obj.length) obj = _.values(obj);
      return obj[_.random(obj.length - 1)];
    }
    return _.shuffle(obj).slice(0, Math.max(0, n));
  };

  // Sort the object's values by a criterion produced by an iteratee.
  _.sortBy = function(obj, iteratee, context) {
    iteratee = _.iteratee(iteratee, context);
    return _.pluck(_.map(obj, function(value, index, list) {
      return {
        value: value,
        index: index,
        criteria: iteratee(value, index, list)
      };
    }).sort(function(left, right) {
      var a = left.criteria;
      var b = right.criteria;
      if (a !== b) {
        if (a > b || a === void 0) return 1;
        if (a < b || b === void 0) return -1;
      }
      return left.index - right.index;
    }), 'value');
  };

  // An internal function used for aggregate "group by" operations.
  var group = function(behavior) {
    return function(obj, iteratee, context) {
      var result = {};
      iteratee = _.iteratee(iteratee, context);
      _.each(obj, function(value, index) {
        var key = iteratee(value, index, obj);
        behavior(result, value, key);
      });
      return result;
    };
  };

  // Groups the object's values by a criterion. Pass either a string attribute
  // to group by, or a function that returns the criterion.
  _.groupBy = group(function(result, value, key) {
    if (_.has(result, key)) result[key].push(value); else result[key] = [value];
  });

  // Indexes the object's values by a criterion, similar to `groupBy`, but for
  // when you know that your index values will be unique.
  _.indexBy = group(function(result, value, key) {
    result[key] = value;
  });

  // Counts instances of an object that group by a certain criterion. Pass
  // either a string attribute to count by, or a function that returns the
  // criterion.
  _.countBy = group(function(result, value, key) {
    if (_.has(result, key)) result[key]++; else result[key] = 1;
  });

  // Use a comparator function to figure out the smallest index at which
  // an object should be inserted so as to maintain order. Uses binary search.
  _.sortedIndex = function(array, obj, iteratee, context) {
    iteratee = _.iteratee(iteratee, context, 1);
    var value = iteratee(obj);
    var low = 0, high = array.length;
    while (low < high) {
      var mid = low + high >>> 1;
      if (iteratee(array[mid]) < value) low = mid + 1; else high = mid;
    }
    return low;
  };

  // Safely create a real, live array from anything iterable.
  _.toArray = function(obj) {
    if (!obj) return [];
    if (_.isArray(obj)) return slice.call(obj);
    if (obj.length === +obj.length) return _.map(obj, _.identity);
    return _.values(obj);
  };

  // Return the number of elements in an object.
  _.size = function(obj) {
    if (obj == null) return 0;
    return obj.length === +obj.length ? obj.length : _.keys(obj).length;
  };

  // Split a collection into two arrays: one whose elements all satisfy the given
  // predicate, and one whose elements all do not satisfy the predicate.
  _.partition = function(obj, predicate, context) {
    predicate = _.iteratee(predicate, context);
    var pass = [], fail = [];
    _.each(obj, function(value, key, obj) {
      (predicate(value, key, obj) ? pass : fail).push(value);
    });
    return [pass, fail];
  };

  // Array Functions
  // ---------------

  // Get the first element of an array. Passing **n** will return the first N
  // values in the array. Aliased as `head` and `take`. The **guard** check
  // allows it to work with `_.map`.
  _.first = _.head = _.take = function(array, n, guard) {
    if (array == null) return void 0;
    if (n == null || guard) return array[0];
    if (n < 0) return [];
    return slice.call(array, 0, n);
  };

  // Returns everything but the last entry of the array. Especially useful on
  // the arguments object. Passing **n** will return all the values in
  // the array, excluding the last N. The **guard** check allows it to work with
  // `_.map`.
  _.initial = function(array, n, guard) {
    return slice.call(array, 0, Math.max(0, array.length - (n == null || guard ? 1 : n)));
  };

  // Get the last element of an array. Passing **n** will return the last N
  // values in the array. The **guard** check allows it to work with `_.map`.
  _.last = function(array, n, guard) {
    if (array == null) return void 0;
    if (n == null || guard) return array[array.length - 1];
    return slice.call(array, Math.max(array.length - n, 0));
  };

  // Returns everything but the first entry of the array. Aliased as `tail` and `drop`.
  // Especially useful on the arguments object. Passing an **n** will return
  // the rest N values in the array. The **guard**
  // check allows it to work with `_.map`.
  _.rest = _.tail = _.drop = function(array, n, guard) {
    return slice.call(array, n == null || guard ? 1 : n);
  };

  // Trim out all falsy values from an array.
  _.compact = function(array) {
    return _.filter(array, _.identity);
  };

  // Internal implementation of a recursive `flatten` function.
  var flatten = function(input, shallow, strict, output) {
    if (shallow && _.every(input, _.isArray)) {
      return concat.apply(output, input);
    }
    for (var i = 0, length = input.length; i < length; i++) {
      var value = input[i];
      if (!_.isArray(value) && !_.isArguments(value)) {
        if (!strict) output.push(value);
      } else if (shallow) {
        push.apply(output, value);
      } else {
        flatten(value, shallow, strict, output);
      }
    }
    return output;
  };

  // Flatten out an array, either recursively (by default), or just one level.
  _.flatten = function(array, shallow) {
    return flatten(array, shallow, false, []);
  };

  // Return a version of the array that does not contain the specified value(s).
  _.without = function(array) {
    return _.difference(array, slice.call(arguments, 1));
  };

  // Produce a duplicate-free version of the array. If the array has already
  // been sorted, you have the option of using a faster algorithm.
  // Aliased as `unique`.
  _.uniq = _.unique = function(array, isSorted, iteratee, context) {
    if (array == null) return [];
    if (!_.isBoolean(isSorted)) {
      context = iteratee;
      iteratee = isSorted;
      isSorted = false;
    }
    if (iteratee != null) iteratee = _.iteratee(iteratee, context);
    var result = [];
    var seen = [];
    for (var i = 0, length = array.length; i < length; i++) {
      var value = array[i];
      if (isSorted) {
        if (!i || seen !== value) result.push(value);
        seen = value;
      } else if (iteratee) {
        var computed = iteratee(value, i, array);
        if (_.indexOf(seen, computed) < 0) {
          seen.push(computed);
          result.push(value);
        }
      } else if (_.indexOf(result, value) < 0) {
        result.push(value);
      }
    }
    return result;
  };

  // Produce an array that contains the union: each distinct element from all of
  // the passed-in arrays.
  _.union = function() {
    return _.uniq(flatten(arguments, true, true, []));
  };

  // Produce an array that contains every item shared between all the
  // passed-in arrays.
  _.intersection = function(array) {
    if (array == null) return [];
    var result = [];
    var argsLength = arguments.length;
    for (var i = 0, length = array.length; i < length; i++) {
      var item = array[i];
      if (_.contains(result, item)) continue;
      for (var j = 1; j < argsLength; j++) {
        if (!_.contains(arguments[j], item)) break;
      }
      if (j === argsLength) result.push(item);
    }
    return result;
  };

  // Take the difference between one array and a number of other arrays.
  // Only the elements present in just the first array will remain.
  _.difference = function(array) {
    var rest = flatten(slice.call(arguments, 1), true, true, []);
    return _.filter(array, function(value){
      return !_.contains(rest, value);
    });
  };

  // Zip together multiple lists into a single array -- elements that share
  // an index go together.
  _.zip = function(array) {
    if (array == null) return [];
    var length = _.max(arguments, 'length').length;
    var results = Array(length);
    for (var i = 0; i < length; i++) {
      results[i] = _.pluck(arguments, i);
    }
    return results;
  };

  // Converts lists into objects. Pass either a single array of `[key, value]`
  // pairs, or two parallel arrays of the same length -- one of keys, and one of
  // the corresponding values.
  _.object = function(list, values) {
    if (list == null) return {};
    var result = {};
    for (var i = 0, length = list.length; i < length; i++) {
      if (values) {
        result[list[i]] = values[i];
      } else {
        result[list[i][0]] = list[i][1];
      }
    }
    return result;
  };

  // Return the position of the first occurrence of an item in an array,
  // or -1 if the item is not included in the array.
  // If the array is large and already in sort order, pass `true`
  // for **isSorted** to use binary search.
  _.indexOf = function(array, item, isSorted) {
    if (array == null) return -1;
    var i = 0, length = array.length;
    if (isSorted) {
      if (typeof isSorted == 'number') {
        i = isSorted < 0 ? Math.max(0, length + isSorted) : isSorted;
      } else {
        i = _.sortedIndex(array, item);
        return array[i] === item ? i : -1;
      }
    }
    for (; i < length; i++) if (array[i] === item) return i;
    return -1;
  };

  _.lastIndexOf = function(array, item, from) {
    if (array == null) return -1;
    var idx = array.length;
    if (typeof from == 'number') {
      idx = from < 0 ? idx + from + 1 : Math.min(idx, from + 1);
    }
    while (--idx >= 0) if (array[idx] === item) return idx;
    return -1;
  };

  // Generate an integer Array containing an arithmetic progression. A port of
  // the native Python `range()` function. See
  // [the Python documentation](http://docs.python.org/library/functions.html#range).
  _.range = function(start, stop, step) {
    if (arguments.length <= 1) {
      stop = start || 0;
      start = 0;
    }
    step = step || 1;

    var length = Math.max(Math.ceil((stop - start) / step), 0);
    var range = Array(length);

    for (var idx = 0; idx < length; idx++, start += step) {
      range[idx] = start;
    }

    return range;
  };

  // Function (ahem) Functions
  // ------------------

  // Reusable constructor function for prototype setting.
  var Ctor = function(){};

  // Create a function bound to a given object (assigning `this`, and arguments,
  // optionally). Delegates to **ECMAScript 5**'s native `Function.bind` if
  // available.
  _.bind = function(func, context) {
    var args, bound;
    if (nativeBind && func.bind === nativeBind) return nativeBind.apply(func, slice.call(arguments, 1));
    if (!_.isFunction(func)) throw new TypeError('Bind must be called on a function');
    args = slice.call(arguments, 2);
    bound = function() {
      if (!(this instanceof bound)) return func.apply(context, args.concat(slice.call(arguments)));
      Ctor.prototype = func.prototype;
      var self = new Ctor;
      Ctor.prototype = null;
      var result = func.apply(self, args.concat(slice.call(arguments)));
      if (_.isObject(result)) return result;
      return self;
    };
    return bound;
  };

  // Partially apply a function by creating a version that has had some of its
  // arguments pre-filled, without changing its dynamic `this` context. _ acts
  // as a placeholder, allowing any combination of arguments to be pre-filled.
  _.partial = function(func) {
    var boundArgs = slice.call(arguments, 1);
    return function() {
      var position = 0;
      var args = boundArgs.slice();
      for (var i = 0, length = args.length; i < length; i++) {
        if (args[i] === _) args[i] = arguments[position++];
      }
      while (position < arguments.length) args.push(arguments[position++]);
      return func.apply(this, args);
    };
  };

  // Bind a number of an object's methods to that object. Remaining arguments
  // are the method names to be bound. Useful for ensuring that all callbacks
  // defined on an object belong to it.
  _.bindAll = function(obj) {
    var i, length = arguments.length, key;
    if (length <= 1) throw new Error('bindAll must be passed function names');
    for (i = 1; i < length; i++) {
      key = arguments[i];
      obj[key] = _.bind(obj[key], obj);
    }
    return obj;
  };

  // Memoize an expensive function by storing its results.
  _.memoize = function(func, hasher) {
    var memoize = function(key) {
      var cache = memoize.cache;
      var address = hasher ? hasher.apply(this, arguments) : key;
      if (!_.has(cache, address)) cache[address] = func.apply(this, arguments);
      return cache[address];
    };
    memoize.cache = {};
    return memoize;
  };

  // Delays a function for the given number of milliseconds, and then calls
  // it with the arguments supplied.
  _.delay = function(func, wait) {
    var args = slice.call(arguments, 2);
    return setTimeout(function(){
      return func.apply(null, args);
    }, wait);
  };

  // Defers a function, scheduling it to run after the current call stack has
  // cleared.
  _.defer = function(func) {
    return _.delay.apply(_, [func, 1].concat(slice.call(arguments, 1)));
  };

  // Returns a function, that, when invoked, will only be triggered at most once
  // during a given window of time. Normally, the throttled function will run
  // as much as it can, without ever going more than once per `wait` duration;
  // but if you'd like to disable the execution on the leading edge, pass
  // `{leading: false}`. To disable execution on the trailing edge, ditto.
  _.throttle = function(func, wait, options) {
    var context, args, result;
    var timeout = null;
    var previous = 0;
    if (!options) options = {};
    var later = function() {
      previous = options.leading === false ? 0 : _.now();
      timeout = null;
      result = func.apply(context, args);
      if (!timeout) context = args = null;
    };
    return function() {
      var now = _.now();
      if (!previous && options.leading === false) previous = now;
      var remaining = wait - (now - previous);
      context = this;
      args = arguments;
      if (remaining <= 0 || remaining > wait) {
        clearTimeout(timeout);
        timeout = null;
        previous = now;
        result = func.apply(context, args);
        if (!timeout) context = args = null;
      } else if (!timeout && options.trailing !== false) {
        timeout = setTimeout(later, remaining);
      }
      return result;
    };
  };

  // Returns a function, that, as long as it continues to be invoked, will not
  // be triggered. The function will be called after it stops being called for
  // N milliseconds. If `immediate` is passed, trigger the function on the
  // leading edge, instead of the trailing.
  _.debounce = function(func, wait, immediate) {
    var timeout, args, context, timestamp, result;

    var later = function() {
      var last = _.now() - timestamp;

      if (last < wait && last > 0) {
        timeout = setTimeout(later, wait - last);
      } else {
        timeout = null;
        if (!immediate) {
          result = func.apply(context, args);
          if (!timeout) context = args = null;
        }
      }
    };

    return function() {
      context = this;
      args = arguments;
      timestamp = _.now();
      var callNow = immediate && !timeout;
      if (!timeout) timeout = setTimeout(later, wait);
      if (callNow) {
        result = func.apply(context, args);
        context = args = null;
      }

      return result;
    };
  };

  // Returns the first function passed as an argument to the second,
  // allowing you to adjust arguments, run code before and after, and
  // conditionally execute the original function.
  _.wrap = function(func, wrapper) {
    return _.partial(wrapper, func);
  };

  // Returns a negated version of the passed-in predicate.
  _.negate = function(predicate) {
    return function() {
      return !predicate.apply(this, arguments);
    };
  };

  // Returns a function that is the composition of a list of functions, each
  // consuming the return value of the function that follows.
  _.compose = function() {
    var args = arguments;
    var start = args.length - 1;
    return function() {
      var i = start;
      var result = args[start].apply(this, arguments);
      while (i--) result = args[i].call(this, result);
      return result;
    };
  };

  // Returns a function that will only be executed after being called N times.
  _.after = function(times, func) {
    return function() {
      if (--times < 1) {
        return func.apply(this, arguments);
      }
    };
  };

  // Returns a function that will only be executed before being called N times.
  _.before = function(times, func) {
    var memo;
    return function() {
      if (--times > 0) {
        memo = func.apply(this, arguments);
      } else {
        func = null;
      }
      return memo;
    };
  };

  // Returns a function that will be executed at most one time, no matter how
  // often you call it. Useful for lazy initialization.
  _.once = _.partial(_.before, 2);

  // Object Functions
  // ----------------

  // Retrieve the names of an object's properties.
  // Delegates to **ECMAScript 5**'s native `Object.keys`
  _.keys = function(obj) {
    if (!_.isObject(obj)) return [];
    if (nativeKeys) return nativeKeys(obj);
    var keys = [];
    for (var key in obj) if (_.has(obj, key)) keys.push(key);
    return keys;
  };

  // Retrieve the values of an object's properties.
  _.values = function(obj) {
    var keys = _.keys(obj);
    var length = keys.length;
    var values = Array(length);
    for (var i = 0; i < length; i++) {
      values[i] = obj[keys[i]];
    }
    return values;
  };

  // Convert an object into a list of `[key, value]` pairs.
  _.pairs = function(obj) {
    var keys = _.keys(obj);
    var length = keys.length;
    var pairs = Array(length);
    for (var i = 0; i < length; i++) {
      pairs[i] = [keys[i], obj[keys[i]]];
    }
    return pairs;
  };

  // Invert the keys and values of an object. The values must be serializable.
  _.invert = function(obj) {
    var result = {};
    var keys = _.keys(obj);
    for (var i = 0, length = keys.length; i < length; i++) {
      result[obj[keys[i]]] = keys[i];
    }
    return result;
  };

  // Return a sorted list of the function names available on the object.
  // Aliased as `methods`
  _.functions = _.methods = function(obj) {
    var names = [];
    for (var key in obj) {
      if (_.isFunction(obj[key])) names.push(key);
    }
    return names.sort();
  };

  // Extend a given object with all the properties in passed-in object(s).
  _.extend = function(obj) {
    if (!_.isObject(obj)) return obj;
    var source, prop;
    for (var i = 1, length = arguments.length; i < length; i++) {
      source = arguments[i];
      for (prop in source) {
        if (hasOwnProperty.call(source, prop)) {
            obj[prop] = source[prop];
        }
      }
    }
    return obj;
  };

  // Return a copy of the object only containing the whitelisted properties.
  _.pick = function(obj, iteratee, context) {
    var result = {}, key;
    if (obj == null) return result;
    if (_.isFunction(iteratee)) {
      iteratee = createCallback(iteratee, context);
      for (key in obj) {
        var value = obj[key];
        if (iteratee(value, key, obj)) result[key] = value;
      }
    } else {
      var keys = concat.apply([], slice.call(arguments, 1));
      obj = new Object(obj);
      for (var i = 0, length = keys.length; i < length; i++) {
        key = keys[i];
        if (key in obj) result[key] = obj[key];
      }
    }
    return result;
  };

   // Return a copy of the object without the blacklisted properties.
  _.omit = function(obj, iteratee, context) {
    if (_.isFunction(iteratee)) {
      iteratee = _.negate(iteratee);
    } else {
      var keys = _.map(concat.apply([], slice.call(arguments, 1)), String);
      iteratee = function(value, key) {
        return !_.contains(keys, key);
      };
    }
    return _.pick(obj, iteratee, context);
  };

  // Fill in a given object with default properties.
  _.defaults = function(obj) {
    if (!_.isObject(obj)) return obj;
    for (var i = 1, length = arguments.length; i < length; i++) {
      var source = arguments[i];
      for (var prop in source) {
        if (obj[prop] === void 0) obj[prop] = source[prop];
      }
    }
    return obj;
  };

  // Create a (shallow-cloned) duplicate of an object.
  _.clone = function(obj) {
    if (!_.isObject(obj)) return obj;
    return _.isArray(obj) ? obj.slice() : _.extend({}, obj);
  };

  // Invokes interceptor with the obj, and then returns obj.
  // The primary purpose of this method is to "tap into" a method chain, in
  // order to perform operations on intermediate results within the chain.
  _.tap = function(obj, interceptor) {
    interceptor(obj);
    return obj;
  };

  // Internal recursive comparison function for `isEqual`.
  var eq = function(a, b, aStack, bStack) {
    // Identical objects are equal. `0 === -0`, but they aren't identical.
    // See the [Harmony `egal` proposal](http://wiki.ecmascript.org/doku.php?id=harmony:egal).
    if (a === b) return a !== 0 || 1 / a === 1 / b;
    // A strict comparison is necessary because `null == undefined`.
    if (a == null || b == null) return a === b;
    // Unwrap any wrapped objects.
    if (a instanceof _) a = a._wrapped;
    if (b instanceof _) b = b._wrapped;
    // Compare `[[Class]]` names.
    var className = toString.call(a);
    if (className !== toString.call(b)) return false;
    switch (className) {
      // Strings, numbers, regular expressions, dates, and booleans are compared by value.
      case '[object RegExp]':
      // RegExps are coerced to strings for comparison (Note: '' + /a/i === '/a/i')
      case '[object String]':
        // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
        // equivalent to `new String("5")`.
        return '' + a === '' + b;
      case '[object Number]':
        // `NaN`s are equivalent, but non-reflexive.
        // Object(NaN) is equivalent to NaN
        if (+a !== +a) return +b !== +b;
        // An `egal` comparison is performed for other numeric values.
        return +a === 0 ? 1 / +a === 1 / b : +a === +b;
      case '[object Date]':
      case '[object Boolean]':
        // Coerce dates and booleans to numeric primitive values. Dates are compared by their
        // millisecond representations. Note that invalid dates with millisecond representations
        // of `NaN` are not equivalent.
        return +a === +b;
    }
    if (typeof a != 'object' || typeof b != 'object') return false;
    // Assume equality for cyclic structures. The algorithm for detecting cyclic
    // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.
    var length = aStack.length;
    while (length--) {
      // Linear search. Performance is inversely proportional to the number of
      // unique nested structures.
      if (aStack[length] === a) return bStack[length] === b;
    }
    // Objects with different constructors are not equivalent, but `Object`s
    // from different frames are.
    var aCtor = a.constructor, bCtor = b.constructor;
    if (
      aCtor !== bCtor &&
      // Handle Object.create(x) cases
      'constructor' in a && 'constructor' in b &&
      !(_.isFunction(aCtor) && aCtor instanceof aCtor &&
        _.isFunction(bCtor) && bCtor instanceof bCtor)
    ) {
      return false;
    }
    // Add the first object to the stack of traversed objects.
    aStack.push(a);
    bStack.push(b);
    var size, result;
    // Recursively compare objects and arrays.
    if (className === '[object Array]') {
      // Compare array lengths to determine if a deep comparison is necessary.
      size = a.length;
      result = size === b.length;
      if (result) {
        // Deep compare the contents, ignoring non-numeric properties.
        while (size--) {
          if (!(result = eq(a[size], b[size], aStack, bStack))) break;
        }
      }
    } else {
      // Deep compare objects.
      var keys = _.keys(a), key;
      size = keys.length;
      // Ensure that both objects contain the same number of properties before comparing deep equality.
      result = _.keys(b).length === size;
      if (result) {
        while (size--) {
          // Deep compare each member
          key = keys[size];
          if (!(result = _.has(b, key) && eq(a[key], b[key], aStack, bStack))) break;
        }
      }
    }
    // Remove the first object from the stack of traversed objects.
    aStack.pop();
    bStack.pop();
    return result;
  };

  // Perform a deep comparison to check if two objects are equal.
  _.isEqual = function(a, b) {
    return eq(a, b, [], []);
  };

  // Is a given array, string, or object empty?
  // An "empty" object has no enumerable own-properties.
  _.isEmpty = function(obj) {
    if (obj == null) return true;
    if (_.isArray(obj) || _.isString(obj) || _.isArguments(obj)) return obj.length === 0;
    for (var key in obj) if (_.has(obj, key)) return false;
    return true;
  };

  // Is a given value a DOM element?
  _.isElement = function(obj) {
    return !!(obj && obj.nodeType === 1);
  };

  // Is a given value an array?
  // Delegates to ECMA5's native Array.isArray
  _.isArray = nativeIsArray || function(obj) {
    return toString.call(obj) === '[object Array]';
  };

  // Is a given variable an object?
  _.isObject = function(obj) {
    var type = typeof obj;
    return type === 'function' || type === 'object' && !!obj;
  };

  // Add some isType methods: isArguments, isFunction, isString, isNumber, isDate, isRegExp.
  _.each(['Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp'], function(name) {
    _['is' + name] = function(obj) {
      return toString.call(obj) === '[object ' + name + ']';
    };
  });

  // Define a fallback version of the method in browsers (ahem, IE), where
  // there isn't any inspectable "Arguments" type.
  if (!_.isArguments(arguments)) {
    _.isArguments = function(obj) {
      return _.has(obj, 'callee');
    };
  }

  // Optimize `isFunction` if appropriate. Work around an IE 11 bug.
  if (typeof /./ !== 'function') {
    _.isFunction = function(obj) {
      return typeof obj == 'function' || false;
    };
  }

  // Is a given object a finite number?
  _.isFinite = function(obj) {
    return isFinite(obj) && !isNaN(parseFloat(obj));
  };

  // Is the given value `NaN`? (NaN is the only number which does not equal itself).
  _.isNaN = function(obj) {
    return _.isNumber(obj) && obj !== +obj;
  };

  // Is a given value a boolean?
  _.isBoolean = function(obj) {
    return obj === true || obj === false || toString.call(obj) === '[object Boolean]';
  };

  // Is a given value equal to null?
  _.isNull = function(obj) {
    return obj === null;
  };

  // Is a given variable undefined?
  _.isUndefined = function(obj) {
    return obj === void 0;
  };

  // Shortcut function for checking if an object has a given property directly
  // on itself (in other words, not on a prototype).
  _.has = function(obj, key) {
    return obj != null && hasOwnProperty.call(obj, key);
  };

  // Utility Functions
  // -----------------

  // Run Underscore.js in *noConflict* mode, returning the `_` variable to its
  // previous owner. Returns a reference to the Underscore object.
  _.noConflict = function() {
    root._ = previousUnderscore;
    return this;
  };

  // Keep the identity function around for default iteratees.
  _.identity = function(value) {
    return value;
  };

  // Predicate-generating functions. Often useful outside of Underscore.
  _.constant = function(value) {
    return function() {
      return value;
    };
  };

  _.noop = function(){};

  _.property = function(key) {
    return function(obj) {
      return obj[key];
    };
  };

  // Returns a predicate for checking whether an object has a given set of `key:value` pairs.
  _.matches = function(attrs) {
    var pairs = _.pairs(attrs), length = pairs.length;
    return function(obj) {
      if (obj == null) return !length;
      obj = new Object(obj);
      for (var i = 0; i < length; i++) {
        var pair = pairs[i], key = pair[0];
        if (pair[1] !== obj[key] || !(key in obj)) return false;
      }
      return true;
    };
  };

  // Run a function **n** times.
  _.times = function(n, iteratee, context) {
    var accum = Array(Math.max(0, n));
    iteratee = createCallback(iteratee, context, 1);
    for (var i = 0; i < n; i++) accum[i] = iteratee(i);
    return accum;
  };

  // Return a random integer between min and max (inclusive).
  _.random = function(min, max) {
    if (max == null) {
      max = min;
      min = 0;
    }
    return min + Math.floor(Math.random() * (max - min + 1));
  };

  // A (possibly faster) way to get the current timestamp as an integer.
  _.now = Date.now || function() {
    return new Date().getTime();
  };

   // List of HTML entities for escaping.
  var escapeMap = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#x27;',
    '`': '&#x60;'
  };
  var unescapeMap = _.invert(escapeMap);

  // Functions for escaping and unescaping strings to/from HTML interpolation.
  var createEscaper = function(map) {
    var escaper = function(match) {
      return map[match];
    };
    // Regexes for identifying a key that needs to be escaped
    var source = '(?:' + _.keys(map).join('|') + ')';
    var testRegexp = RegExp(source);
    var replaceRegexp = RegExp(source, 'g');
    return function(string) {
      string = string == null ? '' : '' + string;
      return testRegexp.test(string) ? string.replace(replaceRegexp, escaper) : string;
    };
  };
  _.escape = createEscaper(escapeMap);
  _.unescape = createEscaper(unescapeMap);

  // If the value of the named `property` is a function then invoke it with the
  // `object` as context; otherwise, return it.
  _.result = function(object, property) {
    if (object == null) return void 0;
    var value = object[property];
    return _.isFunction(value) ? object[property]() : value;
  };

  // Generate a unique integer id (unique within the entire client session).
  // Useful for temporary DOM ids.
  var idCounter = 0;
  _.uniqueId = function(prefix) {
    var id = ++idCounter + '';
    return prefix ? prefix + id : id;
  };

  // By default, Underscore uses ERB-style template delimiters, change the
  // following template settings to use alternative delimiters.
  _.templateSettings = {
    evaluate    : /<%([\s\S]+?)%>/g,
    interpolate : /<%=([\s\S]+?)%>/g,
    escape      : /<%-([\s\S]+?)%>/g
  };

  // When customizing `templateSettings`, if you don't want to define an
  // interpolation, evaluation or escaping regex, we need one that is
  // guaranteed not to match.
  var noMatch = /(.)^/;

  // Certain characters need to be escaped so that they can be put into a
  // string literal.
  var escapes = {
    "'":      "'",
    '\\':     '\\',
    '\r':     'r',
    '\n':     'n',
    '\u2028': 'u2028',
    '\u2029': 'u2029'
  };

  var escaper = /\\|'|\r|\n|\u2028|\u2029/g;

  var escapeChar = function(match) {
    return '\\' + escapes[match];
  };

  // JavaScript micro-templating, similar to John Resig's implementation.
  // Underscore templating handles arbitrary delimiters, preserves whitespace,
  // and correctly escapes quotes within interpolated code.
  // NB: `oldSettings` only exists for backwards compatibility.
  _.template = function(text, settings, oldSettings) {
    if (!settings && oldSettings) settings = oldSettings;
    settings = _.defaults({}, settings, _.templateSettings);

    // Combine delimiters into one regular expression via alternation.
    var matcher = RegExp([
      (settings.escape || noMatch).source,
      (settings.interpolate || noMatch).source,
      (settings.evaluate || noMatch).source
    ].join('|') + '|$', 'g');

    // Compile the template source, escaping string literals appropriately.
    var index = 0;
    var source = "__p+='";
    text.replace(matcher, function(match, escape, interpolate, evaluate, offset) {
      source += text.slice(index, offset).replace(escaper, escapeChar);
      index = offset + match.length;

      if (escape) {
        source += "'+\n((__t=(" + escape + "))==null?'':_.escape(__t))+\n'";
      } else if (interpolate) {
        source += "'+\n((__t=(" + interpolate + "))==null?'':__t)+\n'";
      } else if (evaluate) {
        source += "';\n" + evaluate + "\n__p+='";
      }

      // Adobe VMs need the match returned to produce the correct offest.
      return match;
    });
    source += "';\n";

    // If a variable is not specified, place data values in local scope.
    if (!settings.variable) source = 'with(obj||{}){\n' + source + '}\n';

    source = "var __t,__p='',__j=Array.prototype.join," +
      "print=function(){__p+=__j.call(arguments,'');};\n" +
      source + 'return __p;\n';

    try {
      var render = new Function(settings.variable || 'obj', '_', source);
    } catch (e) {
      e.source = source;
      throw e;
    }

    var template = function(data) {
      return render.call(this, data, _);
    };

    // Provide the compiled source as a convenience for precompilation.
    var argument = settings.variable || 'obj';
    template.source = 'function(' + argument + '){\n' + source + '}';

    return template;
  };

  // Add a "chain" function. Start chaining a wrapped Underscore object.
  _.chain = function(obj) {
    var instance = _(obj);
    instance._chain = true;
    return instance;
  };

  // OOP
  // ---------------
  // If Underscore is called as a function, it returns a wrapped object that
  // can be used OO-style. This wrapper holds altered versions of all the
  // underscore functions. Wrapped objects may be chained.

  // Helper function to continue chaining intermediate results.
  var result = function(obj) {
    return this._chain ? _(obj).chain() : obj;
  };

  // Add your own custom functions to the Underscore object.
  _.mixin = function(obj) {
    _.each(_.functions(obj), function(name) {
      var func = _[name] = obj[name];
      _.prototype[name] = function() {
        var args = [this._wrapped];
        push.apply(args, arguments);
        return result.call(this, func.apply(_, args));
      };
    });
  };

  // Add all of the Underscore functions to the wrapper object.
  _.mixin(_);

  // Add all mutator Array functions to the wrapper.
  _.each(['pop', 'push', 'reverse', 'shift', 'sort', 'splice', 'unshift'], function(name) {
    var method = ArrayProto[name];
    _.prototype[name] = function() {
      var obj = this._wrapped;
      method.apply(obj, arguments);
      if ((name === 'shift' || name === 'splice') && obj.length === 0) delete obj[0];
      return result.call(this, obj);
    };
  });

  // Add all accessor Array functions to the wrapper.
  _.each(['concat', 'join', 'slice'], function(name) {
    var method = ArrayProto[name];
    _.prototype[name] = function() {
      return result.call(this, method.apply(this._wrapped, arguments));
    };
  });

  // Extracts the result from a wrapped and chained object.
  _.prototype.value = function() {
    return this._wrapped;
  };

  // AMD registration happens at the end for compatibility with AMD loaders
  // that may not enforce next-turn semantics on modules. Even though general
  // practice for AMD registration is to be anonymous, underscore registers
  // as a named module because, like jQuery, it is a base library that is
  // popular enough to be bundled in a third party lib, but not be part of
  // an AMD load request. Those cases could generate an error when an
  // anonymous define() is called outside of a loader request.
  if (typeof define === 'function' && define.amd) {
    define('underscore', [], function() {
      return _;
    });
  }
}.call(this));
//     Backbone.js 1.1.2

//     (c) 2010-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Backbone may be freely distributed under the MIT license.
//     For all details and documentation:
//     http://backbonejs.org

(function(root, factory) {

  // Set up Backbone appropriately for the environment. Start with AMD.
  if (typeof define === 'function' && define.amd) {
    define(['underscore', 'jquery', 'exports'], function(_, $, exports) {
      // Export global even in AMD case in case this script is loaded with
      // others that may still expect a global Backbone.
      root.Backbone = factory(root, exports, _, $);
    });

  // Next for Node.js or CommonJS. jQuery may not be needed as a module.
  } else if (typeof exports !== 'undefined') {
    var _ = require('underscore');
    factory(root, exports, _);

  // Finally, as a browser global.
  } else {
    root.Backbone = factory(root, {}, root._, (root.jQuery || root.Zepto || root.ender || root.$));
  }

}(this, function(root, Backbone, _, $) {

  // Initial Setup
  // -------------

  // Save the previous value of the `Backbone` variable, so that it can be
  // restored later on, if `noConflict` is used.
  var previousBackbone = root.Backbone;

  // Create local references to array methods we'll want to use later.
  var array = [];
  var push = array.push;
  var slice = array.slice;
  var splice = array.splice;

  // Current version of the library. Keep in sync with `package.json`.
  Backbone.VERSION = '1.1.2';

  // For Backbone's purposes, jQuery, Zepto, Ender, or My Library (kidding) owns
  // the `$` variable.
  Backbone.$ = $;

  // Runs Backbone.js in *noConflict* mode, returning the `Backbone` variable
  // to its previous owner. Returns a reference to this Backbone object.
  Backbone.noConflict = function() {
    root.Backbone = previousBackbone;
    return this;
  };

  // Turn on `emulateHTTP` to support legacy HTTP servers. Setting this option
  // will fake `"PATCH"`, `"PUT"` and `"DELETE"` requests via the `_method` parameter and
  // set a `X-Http-Method-Override` header.
  Backbone.emulateHTTP = false;

  // Turn on `emulateJSON` to support legacy servers that can't deal with direct
  // `application/json` requests ... will encode the body as
  // `application/x-www-form-urlencoded` instead and will send the model in a
  // form param named `model`.
  Backbone.emulateJSON = false;

  // Backbone.Events
  // ---------------

  // A module that can be mixed in to *any object* in order to provide it with
  // custom events. You may bind with `on` or remove with `off` callback
  // functions to an event; `trigger`-ing an event fires all callbacks in
  // succession.
  //
  //     var object = {};
  //     _.extend(object, Backbone.Events);
  //     object.on('expand', function(){ alert('expanded'); });
  //     object.trigger('expand');
  //
  var Events = Backbone.Events = {

    // Bind an event to a `callback` function. Passing `"all"` will bind
    // the callback to all events fired.
    on: function(name, callback, context) {
      if (!eventsApi(this, 'on', name, [callback, context]) || !callback) return this;
      this._events || (this._events = {});
      var events = this._events[name] || (this._events[name] = []);
      events.push({callback: callback, context: context, ctx: context || this});
      return this;
    },

    // Bind an event to only be triggered a single time. After the first time
    // the callback is invoked, it will be removed.
    once: function(name, callback, context) {
      if (!eventsApi(this, 'once', name, [callback, context]) || !callback) return this;
      var self = this;
      var once = _.once(function() {
        self.off(name, once);
        callback.apply(this, arguments);
      });
      once._callback = callback;
      return this.on(name, once, context);
    },

    // Remove one or many callbacks. If `context` is null, removes all
    // callbacks with that function. If `callback` is null, removes all
    // callbacks for the event. If `name` is null, removes all bound
    // callbacks for all events.
    off: function(name, callback, context) {
      var retain, ev, events, names, i, l, j, k;
      if (!this._events || !eventsApi(this, 'off', name, [callback, context])) return this;
      if (!name && !callback && !context) {
        this._events = void 0;
        return this;
      }
      names = name ? [name] : _.keys(this._events);
      for (i = 0, l = names.length; i < l; i++) {
        name = names[i];
        if (events = this._events[name]) {
          this._events[name] = retain = [];
          if (callback || context) {
            for (j = 0, k = events.length; j < k; j++) {
              ev = events[j];
              if ((callback && callback !== ev.callback && callback !== ev.callback._callback) ||
                  (context && context !== ev.context)) {
                retain.push(ev);
              }
            }
          }
          if (!retain.length) delete this._events[name];
        }
      }

      return this;
    },

    // Trigger one or many events, firing all bound callbacks. Callbacks are
    // passed the same arguments as `trigger` is, apart from the event name
    // (unless you're listening on `"all"`, which will cause your callback to
    // receive the true name of the event as the first argument).
    trigger: function(name) {
      if (!this._events) return this;
      var args = slice.call(arguments, 1);
      if (!eventsApi(this, 'trigger', name, args)) return this;
      var events = this._events[name];
      var allEvents = this._events.all;
      if (events) triggerEvents(events, args);
      if (allEvents) triggerEvents(allEvents, arguments);
      return this;
    },

    // Tell this object to stop listening to either specific events ... or
    // to every object it's currently listening to.
    stopListening: function(obj, name, callback) {
      var listeningTo = this._listeningTo;
      if (!listeningTo) return this;
      var remove = !name && !callback;
      if (!callback && typeof name === 'object') callback = this;
      if (obj) (listeningTo = {})[obj._listenId] = obj;
      for (var id in listeningTo) {
        obj = listeningTo[id];
        obj.off(name, callback, this);
        if (remove || _.isEmpty(obj._events)) delete this._listeningTo[id];
      }
      return this;
    }

  };

  // Regular expression used to split event strings.
  var eventSplitter = /\s+/;

  // Implement fancy features of the Events API such as multiple event
  // names `"change blur"` and jQuery-style event maps `{change: action}`
  // in terms of the existing API.
  var eventsApi = function(obj, action, name, rest) {
    if (!name) return true;

    // Handle event maps.
    if (typeof name === 'object') {
      for (var key in name) {
        obj[action].apply(obj, [key, name[key]].concat(rest));
      }
      return false;
    }

    // Handle space separated event names.
    if (eventSplitter.test(name)) {
      var names = name.split(eventSplitter);
      for (var i = 0, l = names.length; i < l; i++) {
        obj[action].apply(obj, [names[i]].concat(rest));
      }
      return false;
    }

    return true;
  };

  // A difficult-to-believe, but optimized internal dispatch function for
  // triggering events. Tries to keep the usual cases speedy (most internal
  // Backbone events have 3 arguments).
  var triggerEvents = function(events, args) {
    var ev, i = -1, l = events.length, a1 = args[0], a2 = args[1], a3 = args[2];
    switch (args.length) {
      case 0: while (++i < l) (ev = events[i]).callback.call(ev.ctx); return;
      case 1: while (++i < l) (ev = events[i]).callback.call(ev.ctx, a1); return;
      case 2: while (++i < l) (ev = events[i]).callback.call(ev.ctx, a1, a2); return;
      case 3: while (++i < l) (ev = events[i]).callback.call(ev.ctx, a1, a2, a3); return;
      default: while (++i < l) (ev = events[i]).callback.apply(ev.ctx, args); return;
    }
  };

  var listenMethods = {listenTo: 'on', listenToOnce: 'once'};

  // Inversion-of-control versions of `on` and `once`. Tell *this* object to
  // listen to an event in another object ... keeping track of what it's
  // listening to.
  _.each(listenMethods, function(implementation, method) {
    Events[method] = function(obj, name, callback) {
      var listeningTo = this._listeningTo || (this._listeningTo = {});
      var id = obj._listenId || (obj._listenId = _.uniqueId('l'));
      listeningTo[id] = obj;
      if (!callback && typeof name === 'object') callback = this;
      obj[implementation](name, callback, this);
      return this;
    };
  });

  // Aliases for backwards compatibility.
  Events.bind   = Events.on;
  Events.unbind = Events.off;

  // Allow the `Backbone` object to serve as a global event bus, for folks who
  // want global "pubsub" in a convenient place.
  _.extend(Backbone, Events);

  // Backbone.Model
  // --------------

  // Backbone **Models** are the basic data object in the framework --
  // frequently representing a row in a table in a database on your server.
  // A discrete chunk of data and a bunch of useful, related methods for
  // performing computations and transformations on that data.

  // Create a new model with the specified attributes. A client id (`cid`)
  // is automatically generated and assigned for you.
  var Model = Backbone.Model = function(attributes, options) {
    var attrs = attributes || {};
    options || (options = {});
    this.cid = _.uniqueId('c');
    this.attributes = {};
    if (options.collection) this.collection = options.collection;
    if (options.parse) attrs = this.parse(attrs, options) || {};
    attrs = _.defaults({}, attrs, _.result(this, 'defaults'));
    this.set(attrs, options);
    this.changed = {};
    this.initialize.apply(this, arguments);
  };

  // Attach all inheritable methods to the Model prototype.
  _.extend(Model.prototype, Events, {

    // A hash of attributes whose current and previous value differ.
    changed: null,

    // The value returned during the last failed validation.
    validationError: null,

    // The default name for the JSON `id` attribute is `"id"`. MongoDB and
    // CouchDB users may want to set this to `"_id"`.
    idAttribute: 'id',

    // Initialize is an empty function by default. Override it with your own
    // initialization logic.
    initialize: function(){},

    // Return a copy of the model's `attributes` object.
    toJSON: function(options) {
      return _.clone(this.attributes);
    },

    // Proxy `Backbone.sync` by default -- but override this if you need
    // custom syncing semantics for *this* particular model.
    sync: function() {
      return Backbone.sync.apply(this, arguments);
    },

    // Get the value of an attribute.
    get: function(attr) {
      return this.attributes[attr];
    },

    // Get the HTML-escaped value of an attribute.
    escape: function(attr) {
      return _.escape(this.get(attr));
    },

    // Returns `true` if the attribute contains a value that is not null
    // or undefined.
    has: function(attr) {
      return this.get(attr) != null;
    },

    // Set a hash of model attributes on the object, firing `"change"`. This is
    // the core primitive operation of a model, updating the data and notifying
    // anyone who needs to know about the change in state. The heart of the beast.
    set: function(key, val, options) {
      var attr, attrs, unset, changes, silent, changing, prev, current;
      if (key == null) return this;

      // Handle both `"key", value` and `{key: value}` -style arguments.
      if (typeof key === 'object') {
        attrs = key;
        options = val;
      } else {
        (attrs = {})[key] = val;
      }

      options || (options = {});

      // Run validation.
      if (!this._validate(attrs, options)) return false;

      // Extract attributes and options.
      unset           = options.unset;
      silent          = options.silent;
      changes         = [];
      changing        = this._changing;
      this._changing  = true;

      if (!changing) {
        this._previousAttributes = _.clone(this.attributes);
        this.changed = {};
      }
      current = this.attributes, prev = this._previousAttributes;

      // Check for changes of `id`.
      if (this.idAttribute in attrs) this.id = attrs[this.idAttribute];

      // For each `set` attribute, update or delete the current value.
      for (attr in attrs) {
        val = attrs[attr];
        if (!_.isEqual(current[attr], val)) changes.push(attr);
        if (!_.isEqual(prev[attr], val)) {
          this.changed[attr] = val;
        } else {
          delete this.changed[attr];
        }
        unset ? delete current[attr] : current[attr] = val;
      }

      // Trigger all relevant attribute changes.
      if (!silent) {
        if (changes.length) this._pending = options;
        for (var i = 0, l = changes.length; i < l; i++) {
          this.trigger('change:' + changes[i], this, current[changes[i]], options);
        }
      }

      // You might be wondering why there's a `while` loop here. Changes can
      // be recursively nested within `"change"` events.
      if (changing) return this;
      if (!silent) {
        while (this._pending) {
          options = this._pending;
          this._pending = false;
          this.trigger('change', this, options);
        }
      }
      this._pending = false;
      this._changing = false;
      return this;
    },

    // Remove an attribute from the model, firing `"change"`. `unset` is a noop
    // if the attribute doesn't exist.
    unset: function(attr, options) {
      return this.set(attr, void 0, _.extend({}, options, {unset: true}));
    },

    // Clear all attributes on the model, firing `"change"`.
    clear: function(options) {
      var attrs = {};
      for (var key in this.attributes) attrs[key] = void 0;
      return this.set(attrs, _.extend({}, options, {unset: true}));
    },

    // Determine if the model has changed since the last `"change"` event.
    // If you specify an attribute name, determine if that attribute has changed.
    hasChanged: function(attr) {
      if (attr == null) return !_.isEmpty(this.changed);
      return _.has(this.changed, attr);
    },

    // Return an object containing all the attributes that have changed, or
    // false if there are no changed attributes. Useful for determining what
    // parts of a view need to be updated and/or what attributes need to be
    // persisted to the server. Unset attributes will be set to undefined.
    // You can also pass an attributes object to diff against the model,
    // determining if there *would be* a change.
    changedAttributes: function(diff) {
      if (!diff) return this.hasChanged() ? _.clone(this.changed) : false;
      var val, changed = false;
      var old = this._changing ? this._previousAttributes : this.attributes;
      for (var attr in diff) {
        if (_.isEqual(old[attr], (val = diff[attr]))) continue;
        (changed || (changed = {}))[attr] = val;
      }
      return changed;
    },

    // Get the previous value of an attribute, recorded at the time the last
    // `"change"` event was fired.
    previous: function(attr) {
      if (attr == null || !this._previousAttributes) return null;
      return this._previousAttributes[attr];
    },

    // Get all of the attributes of the model at the time of the previous
    // `"change"` event.
    previousAttributes: function() {
      return _.clone(this._previousAttributes);
    },

    // Fetch the model from the server. If the server's representation of the
    // model differs from its current attributes, they will be overridden,
    // triggering a `"change"` event.
    fetch: function(options) {
      options = options ? _.clone(options) : {};
      if (options.parse === void 0) options.parse = true;
      var model = this;
      var success = options.success;
      options.success = function(resp) {
        if (!model.set(model.parse(resp, options), options)) return false;
        if (success) success(model, resp, options);
        model.trigger('sync', model, resp, options);
      };
      wrapError(this, options);
      return this.sync('read', this, options);
    },

    // Set a hash of model attributes, and sync the model to the server.
    // If the server returns an attributes hash that differs, the model's
    // state will be `set` again.
    save: function(key, val, options) {
      var attrs, method, xhr, attributes = this.attributes;

      // Handle both `"key", value` and `{key: value}` -style arguments.
      if (key == null || typeof key === 'object') {
        attrs = key;
        options = val;
      } else {
        (attrs = {})[key] = val;
      }

      options = _.extend({validate: true}, options);

      // If we're not waiting and attributes exist, save acts as
      // `set(attr).save(null, opts)` with validation. Otherwise, check if
      // the model will be valid when the attributes, if any, are set.
      if (attrs && !options.wait) {
        if (!this.set(attrs, options)) return false;
      } else {
        if (!this._validate(attrs, options)) return false;
      }

      // Set temporary attributes if `{wait: true}`.
      if (attrs && options.wait) {
        this.attributes = _.extend({}, attributes, attrs);
      }

      // After a successful server-side save, the client is (optionally)
      // updated with the server-side state.
      if (options.parse === void 0) options.parse = true;
      var model = this;
      var success = options.success;
      options.success = function(resp) {
        // Ensure attributes are restored during synchronous saves.
        model.attributes = attributes;
        var serverAttrs = model.parse(resp, options);
        if (options.wait) serverAttrs = _.extend(attrs || {}, serverAttrs);
        if (_.isObject(serverAttrs) && !model.set(serverAttrs, options)) {
          return false;
        }
        if (success) success(model, resp, options);
        model.trigger('sync', model, resp, options);
      };
      wrapError(this, options);

      method = this.isNew() ? 'create' : (options.patch ? 'patch' : 'update');
      if (method === 'patch') options.attrs = attrs;
      xhr = this.sync(method, this, options);

      // Restore attributes.
      if (attrs && options.wait) this.attributes = attributes;

      return xhr;
    },

    // Destroy this model on the server if it was already persisted.
    // Optimistically removes the model from its collection, if it has one.
    // If `wait: true` is passed, waits for the server to respond before removal.
    destroy: function(options) {
      options = options ? _.clone(options) : {};
      var model = this;
      var success = options.success;

      var destroy = function() {
        model.trigger('destroy', model, model.collection, options);
      };

      options.success = function(resp) {
        if (options.wait || model.isNew()) destroy();
        if (success) success(model, resp, options);
        if (!model.isNew()) model.trigger('sync', model, resp, options);
      };

      if (this.isNew()) {
        options.success();
        return false;
      }
      wrapError(this, options);

      var xhr = this.sync('delete', this, options);
      if (!options.wait) destroy();
      return xhr;
    },

    // Default URL for the model's representation on the server -- if you're
    // using Backbone's restful methods, override this to change the endpoint
    // that will be called.
    url: function() {
      var base =
        _.result(this, 'urlRoot') ||
        _.result(this.collection, 'url') ||
        urlError();
      if (this.isNew()) return base;
      return base.replace(/([^\/])$/, '$1/') + encodeURIComponent(this.id);
    },

    // **parse** converts a response into the hash of attributes to be `set` on
    // the model. The default implementation is just to pass the response along.
    parse: function(resp, options) {
      return resp;
    },

    // Create a new model with identical attributes to this one.
    clone: function() {
      return new this.constructor(this.attributes);
    },

    // A model is new if it has never been saved to the server, and lacks an id.
    isNew: function() {
      return !this.has(this.idAttribute);
    },

    // Check if the model is currently in a valid state.
    isValid: function(options) {
      return this._validate({}, _.extend(options || {}, { validate: true }));
    },

    // Run validation against the next complete set of model attributes,
    // returning `true` if all is well. Otherwise, fire an `"invalid"` event.
    _validate: function(attrs, options) {
      if (!options.validate || !this.validate) return true;
      attrs = _.extend({}, this.attributes, attrs);
      var error = this.validationError = this.validate(attrs, options) || null;
      if (!error) return true;
      this.trigger('invalid', this, error, _.extend(options, {validationError: error}));
      return false;
    }

  });

  // Underscore methods that we want to implement on the Model.
  var modelMethods = ['keys', 'values', 'pairs', 'invert', 'pick', 'omit'];

  // Mix in each Underscore method as a proxy to `Model#attributes`.
  _.each(modelMethods, function(method) {
    Model.prototype[method] = function() {
      var args = slice.call(arguments);
      args.unshift(this.attributes);
      return _[method].apply(_, args);
    };
  });

  // Backbone.Collection
  // -------------------

  // If models tend to represent a single row of data, a Backbone Collection is
  // more analagous to a table full of data ... or a small slice or page of that
  // table, or a collection of rows that belong together for a particular reason
  // -- all of the messages in this particular folder, all of the documents
  // belonging to this particular author, and so on. Collections maintain
  // indexes of their models, both in order, and for lookup by `id`.

  // Create a new **Collection**, perhaps to contain a specific type of `model`.
  // If a `comparator` is specified, the Collection will maintain
  // its models in sort order, as they're added and removed.
  var Collection = Backbone.Collection = function(models, options) {
    options || (options = {});
    if (options.model) this.model = options.model;
    if (options.comparator !== void 0) this.comparator = options.comparator;
    this._reset();
    this.initialize.apply(this, arguments);
    if (models) this.reset(models, _.extend({silent: true}, options));
  };

  // Default options for `Collection#set`.
  var setOptions = {add: true, remove: true, merge: true};
  var addOptions = {add: true, remove: false};

  // Define the Collection's inheritable methods.
  _.extend(Collection.prototype, Events, {

    // The default model for a collection is just a **Backbone.Model**.
    // This should be overridden in most cases.
    model: Model,

    // Initialize is an empty function by default. Override it with your own
    // initialization logic.
    initialize: function(){},

    // The JSON representation of a Collection is an array of the
    // models' attributes.
    toJSON: function(options) {
      return this.map(function(model){ return model.toJSON(options); });
    },

    // Proxy `Backbone.sync` by default.
    sync: function() {
      return Backbone.sync.apply(this, arguments);
    },

    // Add a model, or list of models to the set.
    add: function(models, options) {
      return this.set(models, _.extend({merge: false}, options, addOptions));
    },

    // Remove a model, or a list of models from the set.
    remove: function(models, options) {
      var singular = !_.isArray(models);
      models = singular ? [models] : _.clone(models);
      options || (options = {});
      var i, l, index, model;
      for (i = 0, l = models.length; i < l; i++) {
        model = models[i] = this.get(models[i]);
        if (!model) continue;
        delete this._byId[model.id];
        delete this._byId[model.cid];
        index = this.indexOf(model);
        this.models.splice(index, 1);
        this.length--;
        if (!options.silent) {
          options.index = index;
          model.trigger('remove', model, this, options);
        }
        this._removeReference(model, options);
      }
      return singular ? models[0] : models;
    },

    // Update a collection by `set`-ing a new list of models, adding new ones,
    // removing models that are no longer present, and merging models that
    // already exist in the collection, as necessary. Similar to **Model#set**,
    // the core operation for updating the data contained by the collection.
    set: function(models, options) {
      options = _.defaults({}, options, setOptions);
      if (options.parse) models = this.parse(models, options);
      var singular = !_.isArray(models);
      models = singular ? (models ? [models] : []) : _.clone(models);
      var i, l, id, model, attrs, existing, sort;
      var at = options.at;
      var targetModel = this.model;
      var sortable = this.comparator && (at == null) && options.sort !== false;
      var sortAttr = _.isString(this.comparator) ? this.comparator : null;
      var toAdd = [], toRemove = [], modelMap = {};
      var add = options.add, merge = options.merge, remove = options.remove;
      var order = !sortable && add && remove ? [] : false;

      // Turn bare objects into model references, and prevent invalid models
      // from being added.
      for (i = 0, l = models.length; i < l; i++) {
        attrs = models[i] || {};
        if (attrs instanceof Model) {
          id = model = attrs;
        } else {
          id = attrs[targetModel.prototype.idAttribute || 'id'];
        }

        // If a duplicate is found, prevent it from being added and
        // optionally merge it into the existing model.
        if (existing = this.get(id)) {
          if (remove) modelMap[existing.cid] = true;
          if (merge) {
            attrs = attrs === model ? model.attributes : attrs;
            if (options.parse) attrs = existing.parse(attrs, options);
            existing.set(attrs, options);
            if (sortable && !sort && existing.hasChanged(sortAttr)) sort = true;
          }
          models[i] = existing;

        // If this is a new, valid model, push it to the `toAdd` list.
        } else if (add) {
          model = models[i] = this._prepareModel(attrs, options);
          if (!model) continue;
          toAdd.push(model);
          this._addReference(model, options);
        }

        // Do not add multiple models with the same `id`.
        model = existing || model;
        if (order && (model.isNew() || !modelMap[model.id])) order.push(model);
        modelMap[model.id] = true;
      }

      // Remove nonexistent models if appropriate.
      if (remove) {
        for (i = 0, l = this.length; i < l; ++i) {
          if (!modelMap[(model = this.models[i]).cid]) toRemove.push(model);
        }
        if (toRemove.length) this.remove(toRemove, options);
      }

      // See if sorting is needed, update `length` and splice in new models.
      if (toAdd.length || (order && order.length)) {
        if (sortable) sort = true;
        this.length += toAdd.length;
        if (at != null) {
          for (i = 0, l = toAdd.length; i < l; i++) {
            this.models.splice(at + i, 0, toAdd[i]);
          }
        } else {
          if (order) this.models.length = 0;
          var orderedModels = order || toAdd;
          for (i = 0, l = orderedModels.length; i < l; i++) {
            this.models.push(orderedModels[i]);
          }
        }
      }

      // Silently sort the collection if appropriate.
      if (sort) this.sort({silent: true});

      // Unless silenced, it's time to fire all appropriate add/sort events.
      if (!options.silent) {
        for (i = 0, l = toAdd.length; i < l; i++) {
          (model = toAdd[i]).trigger('add', model, this, options);
        }
        if (sort || (order && order.length)) this.trigger('sort', this, options);
      }

      // Return the added (or merged) model (or models).
      return singular ? models[0] : models;
    },

    // When you have more items than you want to add or remove individually,
    // you can reset the entire set with a new list of models, without firing
    // any granular `add` or `remove` events. Fires `reset` when finished.
    // Useful for bulk operations and optimizations.
    reset: function(models, options) {
      options || (options = {});
      for (var i = 0, l = this.models.length; i < l; i++) {
        this._removeReference(this.models[i], options);
      }
      options.previousModels = this.models;
      this._reset();
      models = this.add(models, _.extend({silent: true}, options));
      if (!options.silent) this.trigger('reset', this, options);
      return models;
    },

    // Add a model to the end of the collection.
    push: function(model, options) {
      return this.add(model, _.extend({at: this.length}, options));
    },

    // Remove a model from the end of the collection.
    pop: function(options) {
      var model = this.at(this.length - 1);
      this.remove(model, options);
      return model;
    },

    // Add a model to the beginning of the collection.
    unshift: function(model, options) {
      return this.add(model, _.extend({at: 0}, options));
    },

    // Remove a model from the beginning of the collection.
    shift: function(options) {
      var model = this.at(0);
      this.remove(model, options);
      return model;
    },

    // Slice out a sub-array of models from the collection.
    slice: function() {
      return slice.apply(this.models, arguments);
    },

    // Get a model from the set by id.
    get: function(obj) {
      if (obj == null) return void 0;
      return this._byId[obj] || this._byId[obj.id] || this._byId[obj.cid];
    },

    // Get the model at the given index.
    at: function(index) {
      return this.models[index];
    },

    // Return models with matching attributes. Useful for simple cases of
    // `filter`.
    where: function(attrs, first) {
      if (_.isEmpty(attrs)) return first ? void 0 : [];
      return this[first ? 'find' : 'filter'](function(model) {
        for (var key in attrs) {
          if (attrs[key] !== model.get(key)) return false;
        }
        return true;
      });
    },

    // Return the first model with matching attributes. Useful for simple cases
    // of `find`.
    findWhere: function(attrs) {
      return this.where(attrs, true);
    },

    // Force the collection to re-sort itself. You don't need to call this under
    // normal circumstances, as the set will maintain sort order as each item
    // is added.
    sort: function(options) {
      if (!this.comparator) throw new Error('Cannot sort a set without a comparator');
      options || (options = {});

      // Run sort based on type of `comparator`.
      if (_.isString(this.comparator) || this.comparator.length === 1) {
        this.models = this.sortBy(this.comparator, this);
      } else {
        this.models.sort(_.bind(this.comparator, this));
      }

      if (!options.silent) this.trigger('sort', this, options);
      return this;
    },

    // Pluck an attribute from each model in the collection.
    pluck: function(attr) {
      return _.invoke(this.models, 'get', attr);
    },

    // Fetch the default set of models for this collection, resetting the
    // collection when they arrive. If `reset: true` is passed, the response
    // data will be passed through the `reset` method instead of `set`.
    fetch: function(options) {
      options = options ? _.clone(options) : {};
      if (options.parse === void 0) options.parse = true;
      var success = options.success;
      var collection = this;
      options.success = function(resp) {
        var method = options.reset ? 'reset' : 'set';
        collection[method](resp, options);
        if (success) success(collection, resp, options);
        collection.trigger('sync', collection, resp, options);
      };
      wrapError(this, options);
      return this.sync('read', this, options);
    },

    // Create a new instance of a model in this collection. Add the model to the
    // collection immediately, unless `wait: true` is passed, in which case we
    // wait for the server to agree.
    create: function(model, options) {
      options = options ? _.clone(options) : {};
      if (!(model = this._prepareModel(model, options))) return false;
      if (!options.wait) this.add(model, options);
      var collection = this;
      var success = options.success;
      options.success = function(model, resp) {
        if (options.wait) collection.add(model, options);
        if (success) success(model, resp, options);
      };
      model.save(null, options);
      return model;
    },

    // **parse** converts a response into a list of models to be added to the
    // collection. The default implementation is just to pass it through.
    parse: function(resp, options) {
      return resp;
    },

    // Create a new collection with an identical list of models as this one.
    clone: function() {
      return new this.constructor(this.models);
    },

    // Private method to reset all internal state. Called when the collection
    // is first initialized or reset.
    _reset: function() {
      this.length = 0;
      this.models = [];
      this._byId  = {};
    },

    // Prepare a hash of attributes (or other model) to be added to this
    // collection.
    _prepareModel: function(attrs, options) {
      if (attrs instanceof Model) return attrs;
      options = options ? _.clone(options) : {};
      options.collection = this;
      var model = new this.model(attrs, options);
      if (!model.validationError) return model;
      this.trigger('invalid', this, model.validationError, options);
      return false;
    },

    // Internal method to create a model's ties to a collection.
    _addReference: function(model, options) {
      this._byId[model.cid] = model;
      if (model.id != null) this._byId[model.id] = model;
      if (!model.collection) model.collection = this;
      model.on('all', this._onModelEvent, this);
    },

    // Internal method to sever a model's ties to a collection.
    _removeReference: function(model, options) {
      if (this === model.collection) delete model.collection;
      model.off('all', this._onModelEvent, this);
    },

    // Internal method called every time a model in the set fires an event.
    // Sets need to update their indexes when models change ids. All other
    // events simply proxy through. "add" and "remove" events that originate
    // in other collections are ignored.
    _onModelEvent: function(event, model, collection, options) {
      if ((event === 'add' || event === 'remove') && collection !== this) return;
      if (event === 'destroy') this.remove(model, options);
      if (model && event === 'change:' + model.idAttribute) {
        delete this._byId[model.previous(model.idAttribute)];
        if (model.id != null) this._byId[model.id] = model;
      }
      this.trigger.apply(this, arguments);
    }

  });

  // Underscore methods that we want to implement on the Collection.
  // 90% of the core usefulness of Backbone Collections is actually implemented
  // right here:
  var methods = ['forEach', 'each', 'map', 'collect', 'reduce', 'foldl',
    'inject', 'reduceRight', 'foldr', 'find', 'detect', 'filter', 'select',
    'reject', 'every', 'all', 'some', 'any', 'include', 'contains', 'invoke',
    'max', 'min', 'toArray', 'size', 'first', 'head', 'take', 'initial', 'rest',
    'tail', 'drop', 'last', 'without', 'difference', 'indexOf', 'shuffle',
    'lastIndexOf', 'isEmpty', 'chain', 'sample'];

  // Mix in each Underscore method as a proxy to `Collection#models`.
  _.each(methods, function(method) {
    Collection.prototype[method] = function() {
      var args = slice.call(arguments);
      args.unshift(this.models);
      return _[method].apply(_, args);
    };
  });

  // Underscore methods that take a property name as an argument.
  var attributeMethods = ['groupBy', 'countBy', 'sortBy', 'indexBy'];

  // Use attributes instead of properties.
  _.each(attributeMethods, function(method) {
    Collection.prototype[method] = function(value, context) {
      var iterator = _.isFunction(value) ? value : function(model) {
        return model.get(value);
      };
      return _[method](this.models, iterator, context);
    };
  });

  // Backbone.View
  // -------------

  // Backbone Views are almost more convention than they are actual code. A View
  // is simply a JavaScript object that represents a logical chunk of UI in the
  // DOM. This might be a single item, an entire list, a sidebar or panel, or
  // even the surrounding frame which wraps your whole app. Defining a chunk of
  // UI as a **View** allows you to define your DOM events declaratively, without
  // having to worry about render order ... and makes it easy for the view to
  // react to specific changes in the state of your models.

  // Creating a Backbone.View creates its initial element outside of the DOM,
  // if an existing element is not provided...
  var View = Backbone.View = function(options) {
    this.cid = _.uniqueId('view');
    options || (options = {});
    _.extend(this, _.pick(options, viewOptions));
    this._ensureElement();
    this.initialize.apply(this, arguments);
    this.delegateEvents();
  };

  // Cached regex to split keys for `delegate`.
  var delegateEventSplitter = /^(\S+)\s*(.*)$/;

  // List of view options to be merged as properties.
  var viewOptions = ['model', 'collection', 'el', 'id', 'attributes', 'className', 'tagName', 'events'];

  // Set up all inheritable **Backbone.View** properties and methods.
  _.extend(View.prototype, Events, {

    // The default `tagName` of a View's element is `"div"`.
    tagName: 'div',

    // jQuery delegate for element lookup, scoped to DOM elements within the
    // current view. This should be preferred to global lookups where possible.
    $: function(selector) {
      return this.$el.find(selector);
    },

    // Initialize is an empty function by default. Override it with your own
    // initialization logic.
    initialize: function(){},

    // **render** is the core function that your view should override, in order
    // to populate its element (`this.el`), with the appropriate HTML. The
    // convention is for **render** to always return `this`.
    render: function() {
      return this;
    },

    // Remove this view by taking the element out of the DOM, and removing any
    // applicable Backbone.Events listeners.
    remove: function() {
      this.$el.remove();
      this.stopListening();
      return this;
    },

    // Change the view's element (`this.el` property), including event
    // re-delegation.
    setElement: function(element, delegate) {
      if (this.$el) this.undelegateEvents();
      this.$el = element instanceof Backbone.$ ? element : Backbone.$(element);
      this.el = this.$el[0];
      if (delegate !== false) this.delegateEvents();
      return this;
    },

    // Set callbacks, where `this.events` is a hash of
    //
    // *{"event selector": "callback"}*
    //
    //     {
    //       'mousedown .title':  'edit',
    //       'click .button':     'save',
    //       'click .open':       function(e) { ... }
    //     }
    //
    // pairs. Callbacks will be bound to the view, with `this` set properly.
    // Uses event delegation for efficiency.
    // Omitting the selector binds the event to `this.el`.
    // This only works for delegate-able events: not `focus`, `blur`, and
    // not `change`, `submit`, and `reset` in Internet Explorer.
    delegateEvents: function(events) {
      if (!(events || (events = _.result(this, 'events')))) return this;
      this.undelegateEvents();
      for (var key in events) {
        var method = events[key];
        if (!_.isFunction(method)) method = this[events[key]];
        if (!method) continue;

        var match = key.match(delegateEventSplitter);
        var eventName = match[1], selector = match[2];
        method = _.bind(method, this);
        eventName += '.delegateEvents' + this.cid;
        if (selector === '') {
          this.$el.on(eventName, method);
        } else {
          this.$el.on(eventName, selector, method);
        }
      }
      return this;
    },

    // Clears all callbacks previously bound to the view with `delegateEvents`.
    // You usually don't need to use this, but may wish to if you have multiple
    // Backbone views attached to the same DOM element.
    undelegateEvents: function() {
      this.$el.off('.delegateEvents' + this.cid);
      return this;
    },

    // Ensure that the View has a DOM element to render into.
    // If `this.el` is a string, pass it through `$()`, take the first
    // matching element, and re-assign it to `el`. Otherwise, create
    // an element from the `id`, `className` and `tagName` properties.
    _ensureElement: function() {
      if (!this.el) {
        var attrs = _.extend({}, _.result(this, 'attributes'));
        if (this.id) attrs.id = _.result(this, 'id');
        if (this.className) attrs['class'] = _.result(this, 'className');
        var $el = Backbone.$('<' + _.result(this, 'tagName') + '>').attr(attrs);
        this.setElement($el, false);
      } else {
        this.setElement(_.result(this, 'el'), false);
      }
    }

  });

  // Backbone.sync
  // -------------

  // Override this function to change the manner in which Backbone persists
  // models to the server. You will be passed the type of request, and the
  // model in question. By default, makes a RESTful Ajax request
  // to the model's `url()`. Some possible customizations could be:
  //
  // * Use `setTimeout` to batch rapid-fire updates into a single request.
  // * Send up the models as XML instead of JSON.
  // * Persist models via WebSockets instead of Ajax.
  //
  // Turn on `Backbone.emulateHTTP` in order to send `PUT` and `DELETE` requests
  // as `POST`, with a `_method` parameter containing the true HTTP method,
  // as well as all requests with the body as `application/x-www-form-urlencoded`
  // instead of `application/json` with the model in a param named `model`.
  // Useful when interfacing with server-side languages like **PHP** that make
  // it difficult to read the body of `PUT` requests.
  Backbone.sync = function(method, model, options) {
    var type = methodMap[method];

    // Default options, unless specified.
    _.defaults(options || (options = {}), {
      emulateHTTP: Backbone.emulateHTTP,
      emulateJSON: Backbone.emulateJSON
    });

    // Default JSON-request options.
    var params = {type: type, dataType: 'json'};

    // Ensure that we have a URL.
    if (!options.url) {
      params.url = _.result(model, 'url') || urlError();
    }

    // Ensure that we have the appropriate request data.
    if (options.data == null && model && (method === 'create' || method === 'update' || method === 'patch')) {
      params.contentType = 'application/json';
      params.data = JSON.stringify(options.attrs || model.toJSON(options));
    }

    // For older servers, emulate JSON by encoding the request into an HTML-form.
    if (options.emulateJSON) {
      params.contentType = 'application/x-www-form-urlencoded';
      params.data = params.data ? {model: params.data} : {};
    }

    // For older servers, emulate HTTP by mimicking the HTTP method with `_method`
    // And an `X-HTTP-Method-Override` header.
    if (options.emulateHTTP && (type === 'PUT' || type === 'DELETE' || type === 'PATCH')) {
      params.type = 'POST';
      if (options.emulateJSON) params.data._method = type;
      var beforeSend = options.beforeSend;
      options.beforeSend = function(xhr) {
        xhr.setRequestHeader('X-HTTP-Method-Override', type);
        if (beforeSend) return beforeSend.apply(this, arguments);
      };
    }

    // Don't process data on a non-GET request.
    if (params.type !== 'GET' && !options.emulateJSON) {
      params.processData = false;
    }

    // If we're sending a `PATCH` request, and we're in an old Internet Explorer
    // that still has ActiveX enabled by default, override jQuery to use that
    // for XHR instead. Remove this line when jQuery supports `PATCH` on IE8.
    if (params.type === 'PATCH' && noXhrPatch) {
      params.xhr = function() {
        return new ActiveXObject("Microsoft.XMLHTTP");
      };
    }

    // Make the request, allowing the user to override any Ajax options.
    var xhr = options.xhr = Backbone.ajax(_.extend(params, options));
    model.trigger('request', model, xhr, options);
    return xhr;
  };

  var noXhrPatch =
    typeof window !== 'undefined' && !!window.ActiveXObject &&
      !(window.XMLHttpRequest && (new XMLHttpRequest).dispatchEvent);

  // Map from CRUD to HTTP for our default `Backbone.sync` implementation.
  var methodMap = {
    'create': 'POST',
    'update': 'PUT',
    'patch':  'PATCH',
    'delete': 'DELETE',
    'read':   'GET'
  };

  // Set the default implementation of `Backbone.ajax` to proxy through to `$`.
  // Override this if you'd like to use a different library.
  Backbone.ajax = function() {
    return Backbone.$.ajax.apply(Backbone.$, arguments);
  };

  // Backbone.Router
  // ---------------

  // Routers map faux-URLs to actions, and fire events when routes are
  // matched. Creating a new one sets its `routes` hash, if not set statically.
  var Router = Backbone.Router = function(options) {
    options || (options = {});
    if (options.routes) this.routes = options.routes;
    this._bindRoutes();
    this.initialize.apply(this, arguments);
  };

  // Cached regular expressions for matching named param parts and splatted
  // parts of route strings.
  var optionalParam = /\((.*?)\)/g;
  var namedParam    = /(\(\?)?:\w+/g;
  var splatParam    = /\*\w+/g;
  var escapeRegExp  = /[\-{}\[\]+?.,\\\^$|#\s]/g;

  // Set up all inheritable **Backbone.Router** properties and methods.
  _.extend(Router.prototype, Events, {

    // Initialize is an empty function by default. Override it with your own
    // initialization logic.
    initialize: function(){},

    // Manually bind a single named route to a callback. For example:
    //
    //     this.route('search/:query/p:num', 'search', function(query, num) {
    //       ...
    //     });
    //
    route: function(route, name, callback) {
      if (!_.isRegExp(route)) route = this._routeToRegExp(route);
      if (_.isFunction(name)) {
        callback = name;
        name = '';
      }
      if (!callback) callback = this[name];
      var router = this;
      Backbone.history.route(route, function(fragment) {
        var args = router._extractParameters(route, fragment);
        router.execute(callback, args);
        router.trigger.apply(router, ['route:' + name].concat(args));
        router.trigger('route', name, args);
        Backbone.history.trigger('route', router, name, args);
      });
      return this;
    },

    // Execute a route handler with the provided parameters.  This is an
    // excellent place to do pre-route setup or post-route cleanup.
    execute: function(callback, args) {
      if (callback) callback.apply(this, args);
    },

    // Simple proxy to `Backbone.history` to save a fragment into the history.
    navigate: function(fragment, options) {
      Backbone.history.navigate(fragment, options);
      return this;
    },

    // Bind all defined routes to `Backbone.history`. We have to reverse the
    // order of the routes here to support behavior where the most general
    // routes can be defined at the bottom of the route map.
    _bindRoutes: function() {
      if (!this.routes) return;
      this.routes = _.result(this, 'routes');
      var route, routes = _.keys(this.routes);
      while ((route = routes.pop()) != null) {
        this.route(route, this.routes[route]);
      }
    },

    // Convert a route string into a regular expression, suitable for matching
    // against the current location hash.
    _routeToRegExp: function(route) {
      route = route.replace(escapeRegExp, '\\$&')
                   .replace(optionalParam, '(?:$1)?')
                   .replace(namedParam, function(match, optional) {
                     return optional ? match : '([^/?]+)';
                   })
                   .replace(splatParam, '([^?]*?)');
      return new RegExp('^' + route + '(?:\\?([\\s\\S]*))?$');
    },

    // Given a route, and a URL fragment that it matches, return the array of
    // extracted decoded parameters. Empty or unmatched parameters will be
    // treated as `null` to normalize cross-browser behavior.
    _extractParameters: function(route, fragment) {
      var params = route.exec(fragment).slice(1);
      return _.map(params, function(param, i) {
        // Don't decode the search params.
        if (i === params.length - 1) return param || null;
        return param ? decodeURIComponent(param) : null;
      });
    }

  });

  // Backbone.History
  // ----------------

  // Handles cross-browser history management, based on either
  // [pushState](http://diveintohtml5.info/history.html) and real URLs, or
  // [onhashchange](https://developer.mozilla.org/en-US/docs/DOM/window.onhashchange)
  // and URL fragments. If the browser supports neither (old IE, natch),
  // falls back to polling.
  var History = Backbone.History = function() {
    this.handlers = [];
    _.bindAll(this, 'checkUrl');

    // Ensure that `History` can be used outside of the browser.
    if (typeof window !== 'undefined') {
      this.location = window.location;
      this.history = window.history;
    }
  };

  // Cached regex for stripping a leading hash/slash and trailing space.
  var routeStripper = /^[#\/]|\s+$/g;

  // Cached regex for stripping leading and trailing slashes.
  var rootStripper = /^\/+|\/+$/g;

  // Cached regex for detecting MSIE.
  var isExplorer = /msie [\w.]+/;

  // Cached regex for removing a trailing slash.
  var trailingSlash = /\/$/;

  // Cached regex for stripping urls of hash.
  var pathStripper = /#.*$/;

  // Has the history handling already been started?
  History.started = false;

  // Set up all inheritable **Backbone.History** properties and methods.
  _.extend(History.prototype, Events, {

    // The default interval to poll for hash changes, if necessary, is
    // twenty times a second.
    interval: 50,

    // Are we at the app root?
    atRoot: function() {
      return this.location.pathname.replace(/[^\/]$/, '$&/') === this.root;
    },

    // Gets the true hash value. Cannot use location.hash directly due to bug
    // in Firefox where location.hash will always be decoded.
    getHash: function(window) {
      var match = (window || this).location.href.match(/#(.*)$/);
      return match ? match[1] : '';
    },

    // Get the cross-browser normalized URL fragment, either from the URL,
    // the hash, or the override.
    getFragment: function(fragment, forcePushState) {
      if (fragment == null) {
        if (this._hasPushState || !this._wantsHashChange || forcePushState) {
          fragment = decodeURI(this.location.pathname + this.location.search);
          var root = this.root.replace(trailingSlash, '');
          if (!fragment.indexOf(root)) fragment = fragment.slice(root.length);
        } else {
          fragment = this.getHash();
        }
      }
      return fragment.replace(routeStripper, '');
    },

    // Start the hash change handling, returning `true` if the current URL matches
    // an existing route, and `false` otherwise.
    start: function(options) {
      if (History.started) throw new Error("Backbone.history has already been started");
      History.started = true;

      // Figure out the initial configuration. Do we need an iframe?
      // Is pushState desired ... is it available?
      this.options          = _.extend({root: '/'}, this.options, options);
      this.root             = this.options.root;
      this._wantsHashChange = this.options.hashChange !== false;
      this._wantsPushState  = !!this.options.pushState;
      this._hasPushState    = !!(this.options.pushState && this.history && this.history.pushState);
      var fragment          = this.getFragment();
      var docMode           = document.documentMode;
      var oldIE             = (isExplorer.exec(navigator.userAgent.toLowerCase()) && (!docMode || docMode <= 7));

      // Normalize root to always include a leading and trailing slash.
      this.root = ('/' + this.root + '/').replace(rootStripper, '/');

      if (oldIE && this._wantsHashChange) {
        var frame = Backbone.$('<iframe src="javascript:0" tabindex="-1">');
        this.iframe = frame.hide().appendTo('body')[0].contentWindow;
        this.navigate(fragment);
      }

      // Depending on whether we're using pushState or hashes, and whether
      // 'onhashchange' is supported, determine how we check the URL state.
      if (this._hasPushState) {
        Backbone.$(window).on('popstate', this.checkUrl);
      } else if (this._wantsHashChange && ('onhashchange' in window) && !oldIE) {
        Backbone.$(window).on('hashchange', this.checkUrl);
      } else if (this._wantsHashChange) {
        this._checkUrlInterval = setInterval(this.checkUrl, this.interval);
      }

      // Determine if we need to change the base url, for a pushState link
      // opened by a non-pushState browser.
      this.fragment = fragment;
      var loc = this.location;

      // Transition from hashChange to pushState or vice versa if both are
      // requested.
      if (this._wantsHashChange && this._wantsPushState) {

        // If we've started off with a route from a `pushState`-enabled
        // browser, but we're currently in a browser that doesn't support it...
        if (!this._hasPushState && !this.atRoot()) {
          this.fragment = this.getFragment(null, true);
          this.location.replace(this.root + '#' + this.fragment);
          // Return immediately as browser will do redirect to new url
          return true;

        // Or if we've started out with a hash-based route, but we're currently
        // in a browser where it could be `pushState`-based instead...
        } else if (this._hasPushState && this.atRoot() && loc.hash) {
          this.fragment = this.getHash().replace(routeStripper, '');
          this.history.replaceState({}, document.title, this.root + this.fragment);
        }

      }

      if (!this.options.silent) return this.loadUrl();
    },

    // Disable Backbone.history, perhaps temporarily. Not useful in a real app,
    // but possibly useful for unit testing Routers.
    stop: function() {
      Backbone.$(window).off('popstate', this.checkUrl).off('hashchange', this.checkUrl);
      if (this._checkUrlInterval) clearInterval(this._checkUrlInterval);
      History.started = false;
    },

    // Add a route to be tested when the fragment changes. Routes added later
    // may override previous routes.
    route: function(route, callback) {
      this.handlers.unshift({route: route, callback: callback});
    },

    // Checks the current URL to see if it has changed, and if it has,
    // calls `loadUrl`, normalizing across the hidden iframe.
    checkUrl: function(e) {
      var current = this.getFragment();
      if (current === this.fragment && this.iframe) {
        current = this.getFragment(this.getHash(this.iframe));
      }
      if (current === this.fragment) return false;
      if (this.iframe) this.navigate(current);
      this.loadUrl();
    },

    // Attempt to load the current URL fragment. If a route succeeds with a
    // match, returns `true`. If no defined routes matches the fragment,
    // returns `false`.
    loadUrl: function(fragment) {
      fragment = this.fragment = this.getFragment(fragment);
      return _.any(this.handlers, function(handler) {
        if (handler.route.test(fragment)) {
          handler.callback(fragment);
          return true;
        }
      });
    },

    // Save a fragment into the hash history, or replace the URL state if the
    // 'replace' option is passed. You are responsible for properly URL-encoding
    // the fragment in advance.
    //
    // The options object can contain `trigger: true` if you wish to have the
    // route callback be fired (not usually desirable), or `replace: true`, if
    // you wish to modify the current URL without adding an entry to the history.
    navigate: function(fragment, options) {
      if (!History.started) return false;
      if (!options || options === true) options = {trigger: !!options};

      var url = this.root + (fragment = this.getFragment(fragment || ''));

      // Strip the hash for matching.
      fragment = fragment.replace(pathStripper, '');

      if (this.fragment === fragment) return;
      this.fragment = fragment;

      // Don't include a trailing slash on the root.
      if (fragment === '' && url !== '/') url = url.slice(0, -1);

      // If pushState is available, we use it to set the fragment as a real URL.
      if (this._hasPushState) {
        this.history[options.replace ? 'replaceState' : 'pushState']({}, document.title, url);

      // If hash changes haven't been explicitly disabled, update the hash
      // fragment to store history.
      } else if (this._wantsHashChange) {
        this._updateHash(this.location, fragment, options.replace);
        if (this.iframe && (fragment !== this.getFragment(this.getHash(this.iframe)))) {
          // Opening and closing the iframe tricks IE7 and earlier to push a
          // history entry on hash-tag change.  When replace is true, we don't
          // want this.
          if(!options.replace) this.iframe.document.open().close();
          this._updateHash(this.iframe.location, fragment, options.replace);
        }

      // If you've told us that you explicitly don't want fallback hashchange-
      // based history, then `navigate` becomes a page refresh.
      } else {
        return this.location.assign(url);
      }
      if (options.trigger) return this.loadUrl(fragment);
    },

    // Update the hash location, either replacing the current entry, or adding
    // a new one to the browser history.
    _updateHash: function(location, fragment, replace) {
      if (replace) {
        var href = location.href.replace(/(javascript:|#).*$/, '');
        location.replace(href + '#' + fragment);
      } else {
        // Some browsers require that `hash` contains a leading #.
        location.hash = '#' + fragment;
      }
    }

  });

  // Create the default Backbone.history.
  Backbone.history = new History;

  // Helpers
  // -------

  // Helper function to correctly set up the prototype chain, for subclasses.
  // Similar to `goog.inherits`, but uses a hash of prototype properties and
  // class properties to be extended.
  var extend = function(protoProps, staticProps) {
    var parent = this;
    var child;

    // The constructor function for the new subclass is either defined by you
    // (the "constructor" property in your `extend` definition), or defaulted
    // by us to simply call the parent's constructor.
    if (protoProps && _.has(protoProps, 'constructor')) {
      child = protoProps.constructor;
    } else {
      child = function(){ return parent.apply(this, arguments); };
    }

    // Add static properties to the constructor function, if supplied.
    _.extend(child, parent, staticProps);

    // Set the prototype chain to inherit from `parent`, without calling
    // `parent`'s constructor function.
    var Surrogate = function(){ this.constructor = child; };
    Surrogate.prototype = parent.prototype;
    child.prototype = new Surrogate;

    // Add prototype properties (instance properties) to the subclass,
    // if supplied.
    if (protoProps) _.extend(child.prototype, protoProps);

    // Set a convenience property in case the parent's prototype is needed
    // later.
    child.__super__ = parent.prototype;

    return child;
  };

  // Set up inheritance for the model, collection, router, view and history.
  Model.extend = Collection.extend = Router.extend = View.extend = History.extend = extend;

  // Throw an error when a URL is needed, and none is supplied.
  var urlError = function() {
    throw new Error('A "url" property or function must be specified');
  };

  // Wrap an optional error callback with a fallback error event.
  var wrapError = function(model, options) {
    var error = options.error;
    options.error = function(resp) {
      if (error) error(model, resp, options);
      model.trigger('error', model, resp, options);
    };
  };

  return Backbone;

}));
/*
 * Behave.js
 *
 * Copyright 2013, Jacob Kelley - http://jakiestfu.com/
 * Released under the MIT Licence
 * http://opensource.org/licenses/MIT
 *
 * Github:  http://github.com/jakiestfu/Behave.js/
 * Version: 1.5
 */



(function(undefined){

    'use strict';
    
    var BehaveHooks = BehaveHooks || (function(){
		var hooks = {};
		
		return {
		    add: function(hookName, fn){
			    if(typeof hookName == "object"){
			    	var i;
			    	for(i=0; i<hookName.length; i++){
				    	var theHook = hookName[i];
				    	if(!hooks[theHook]){
					    	hooks[theHook] = [];
				    	}
				    	hooks[theHook].push(fn);
			    	}
			    } else {
				    if(!hooks[hookName]){
				    	hooks[hookName] = [];
			    	}
			    	hooks[hookName].push(fn);
			    }
		    },
		    get: function(hookName){
			    if(hooks[hookName]){
			    	return hooks[hookName];
		    	}
		    }
	    };
	    
	})(),
	Behave = Behave || function (userOpts) {

        if (typeof String.prototype.repeat !== 'function') {
            String.prototype.repeat = function(times) {
                if(times < 1){
                    return '';
                }
                if(times % 2){
                    return this.repeat(times - 1) + this;
                }
                var half = this.repeat(times / 2);
                return half + half;
            };
        }

        if (typeof Array.prototype.filter !== 'function') {
            Array.prototype.filter = function(func /*, thisp */) {
                if (this === null) {
                    throw new TypeError();
                }

                var t = Object(this),
                    len = t.length >>> 0;
                if (typeof func != "function"){
                    throw new TypeError();
                }
                var res = [],
                    thisp = arguments[1];
                for (var i = 0; i < len; i++) {
                    if (i in t) {
                        var val = t[i];
                        if (func.call(thisp, val, i, t)) {
                            res.push(val);
                        }
                    }
                }
                return res;
            };
        }

        var defaults = {
            textarea: null,
            replaceTab: true,
            softTabs: true,
            tabSize: 4,
            autoOpen: true,
            overwrite: true,
            autoStrip: true,
            autoIndent: true,
            fence: false
        },
        tab,
        newLine,
        charSettings = {

            keyMap: [
                { open: "\"", close: "\"", canBreak: false },
                { open: "'", close: "'", canBreak: false },
                { open: "(", close: ")", canBreak: false },
                { open: "[", close: "]", canBreak: true },
                { open: "{", close: "}", canBreak: true }
            ]

        },
        utils = {
        	
        	_callHook: function(hookName, passData){
    			var hooks = BehaveHooks.get(hookName);
	    		passData = typeof passData=="boolean" && passData === false ? false : true;
	    		
	    		if(hooks){
			    	if(passData){
				    	var theEditor = defaults.textarea,
				    		textVal = theEditor.value,
				    		caretPos = utils.cursor.get(),
				    		i;
				    	
				    	for(i=0; i<hooks.length; i++){
					    	hooks[i].call(undefined, {
					    		editor: {
						    		element: theEditor,
						    		text: textVal,
						    		levelsDeep: utils.levelsDeep()
					    		},
						    	caret: {
							    	pos: caretPos
						    	},
						    	lines: {
							    	current: utils.cursor.getLine(textVal, caretPos),
							    	total: utils.editor.getLines(textVal)
						    	}
					    	});
				    	}
			    	} else {
				    	for(i=0; i<hooks.length; i++){
				    		hooks[i].call(undefined);
				    	}
			    	}
		    	}
	    	},
        	
            defineNewLine: function(){
                var ta = document.createElement('textarea');
                ta.value = "\n";
                
                if(ta.value.length==2){
                    newLine = "\r\n";
                } else {
                    newLine = "\n";
                }
            },
            defineTabSize: function(tabSize){
                if(typeof defaults.textarea.style.OTabSize != "undefined"){ 
                    defaults.textarea.style.OTabSize = tabSize; return;
                }
                if(typeof defaults.textarea.style.MozTabSize != "undefined"){ 
                    defaults.textarea.style.MozTabSize = tabSize; return;
                }
                if(typeof defaults.textarea.style.tabSize != "undefined"){ 
                    defaults.textarea.style.tabSize = tabSize; return;
                }
            },
            cursor: {
	            getLine: function(textVal, pos){
		        	return ((textVal.substring(0,pos)).split("\n")).length;
	        	},
	            get: function() {

                    if (typeof document.createElement('textarea').selectionStart==="number") {
                        return defaults.textarea.selectionStart;
                    } else if (document.selection) {
                        var caretPos = 0,
                            range = defaults.textarea.createTextRange(),
                            rangeDupe = document.selection.createRange().duplicate(),
                            rangeDupeBookmark = rangeDupe.getBookmark();
                        range.moveToBookmark(rangeDupeBookmark);

                        while (range.moveStart('character' , -1) !== 0) {
                            caretPos++;
                        }
                        return caretPos;
                    }
                },
                set: function (start, end) {
                    if(!end){
                        end = start;
                    }
                    if (defaults.textarea.setSelectionRange) {
                        defaults.textarea.focus();
                        defaults.textarea.setSelectionRange(start, end);
                    } else if (defaults.textarea.createTextRange) {
                        var range = defaults.textarea.createTextRange();
                        range.collapse(true);
                        range.moveEnd('character', end);
                        range.moveStart('character', start);
                        range.select();
                    }
                },
                selection: function(){
                    var textAreaElement = defaults.textarea,
                        start = 0, 
                        end = 0, 
                        normalizedValue, 
                        range,
                        textInputRange, 
                        len, 
                        endRange;

                    if (typeof textAreaElement.selectionStart == "number" && typeof textAreaElement.selectionEnd == "number") {
                        start = textAreaElement.selectionStart;
                        end = textAreaElement.selectionEnd;
                    } else {
                        range = document.selection.createRange();

                        if (range && range.parentElement() == textAreaElement) {
                            
                            normalizedValue = utils.editor.get();
                            len = normalizedValue.length;
                            
                            textInputRange = textAreaElement.createTextRange();
                            textInputRange.moveToBookmark(range.getBookmark());

                            endRange = textAreaElement.createTextRange();
                            endRange.collapse(false);

                            if (textInputRange.compareEndPoints("StartToEnd", endRange) > -1) {
                                start = end = len;
                            } else {
                                start = -textInputRange.moveStart("character", -len);
                                start += normalizedValue.slice(0, start).split(newLine).length - 1;

                                if (textInputRange.compareEndPoints("EndToEnd", endRange) > -1) {
                                    end = len;
                                } else {
                                    end = -textInputRange.moveEnd("character", -len);
                                    end += normalizedValue.slice(0, end).split(newLine).length - 1;
                                }
                            }
                        }
                    }

                    return start==end ? false : {
                        start: start,
                        end: end
                    };
                }
            },
            editor: {
                getLines: function(textVal){
		        	return (textVal).split("\n").length;
	        	},
	            get: function(){
                    return defaults.textarea.value.replace(/\r/g,'');
                },
                set: function(data){
                    defaults.textarea.value = data;
                }
            },
            fenceRange: function(){
                if(typeof defaults.fence == "string"){

                    var data = utils.editor.get(),
                        pos = utils.cursor.get(),
                        hacked = 0,
                        matchedFence = data.indexOf(defaults.fence),
                        matchCase = 0;

                    while(matchedFence>=0){
                        matchCase++;
                        if( pos < (matchedFence+hacked) ){
                            break;
                        }

                        hacked += matchedFence+defaults.fence.length;
                        data = data.substring(matchedFence+defaults.fence.length);
                        matchedFence = data.indexOf(defaults.fence);

                    }

                    if( (hacked) < pos && ( (matchedFence+hacked) > pos ) && matchCase%2===0){
                        return true;
                    }
                    return false;
                } else {
                    return true;
                }
            },
            isEven: function(_this,i){
                return i%2;
            },
            levelsDeep: function(){
                var pos = utils.cursor.get(),
                    val = utils.editor.get();

                var left = val.substring(0, pos),
                    levels = 0,
                    i, j;

                for(i=0; i<left.length; i++){
                    for (j=0; j<charSettings.keyMap.length; j++) {
                        if(charSettings.keyMap[j].canBreak){
                            if(charSettings.keyMap[j].open == left.charAt(i)){
                                levels++;
                            }

                            if(charSettings.keyMap[j].close == left.charAt(i)){
                                levels--;
                            }
                        }
                    }
                }

                var toDecrement = 0,
                    quoteMap = ["'", "\""];
                for(i=0; i<charSettings.keyMap.length; i++) {
                    if(charSettings.keyMap[i].canBreak){
                        for(j in quoteMap){
                            toDecrement += left.split(quoteMap[j]).filter(utils.isEven).join('').split(charSettings.keyMap[i].open).length - 1;
                        }
                    }
                }

                var finalLevels = levels - toDecrement;
                
                return finalLevels >=0 ? finalLevels : 0;
            },
            deepExtend: function(destination, source) {
                for (var property in source) {
                    if (source[property] && source[property].constructor &&
                        source[property].constructor === Object) {
                        destination[property] = destination[property] || {};
                        utils.deepExtend(destination[property], source[property]);
                    } else {
                        destination[property] = source[property];
                    }
                }
                return destination;
            },
            addEvent: function addEvent(element, eventName, func) {
                if (element.addEventListener){
                    element.addEventListener(eventName,func,false);
                } else if (element.attachEvent) {
                    element.attachEvent("on"+eventName, func);
                }
            },
            removeEvent: function addEvent(element, eventName, func){
	            if (element.addEventListener){
	                element.removeEventListener(eventName,func,false);
	            } else if (element.attachEvent) {
	                element.detachEvent("on"+eventName, func);
	            }
	        },
	        
            preventDefaultEvent: function(e){
                if(e.preventDefault){
                    e.preventDefault();
                } else {
                    e.returnValue = false;
                }
            }
        },
        intercept = {
            tabKey: function (e) {

                if(!utils.fenceRange()){ return; }

                if (e.keyCode == 9) {
                    utils.preventDefaultEvent(e);
                    
                    var toReturn = true;
                    utils._callHook('tab:before');
                    
                    var selection = utils.cursor.selection(),
                        pos = utils.cursor.get(),
                        val = utils.editor.get();

                    if(selection){
                        
                        var tempStart = selection.start;
                        while(tempStart--){
                            if(val.charAt(tempStart)=="\n"){
                                selection.start = tempStart + 1;
                                break;
                            }
                        }

                        var toIndent = val.substring(selection.start, selection.end),
                            lines = toIndent.split("\n"),
                            i;

                        if(e.shiftKey){
                            for(i = 0; i<lines.length; i++){
                                if(lines[i].substring(0,tab.length) == tab){
                                    lines[i] = lines[i].substring(tab.length);
                                }
                            }
                            toIndent = lines.join("\n");
                            
                            utils.editor.set( val.substring(0,selection.start) + toIndent + val.substring(selection.end) );
                            utils.cursor.set(selection.start, selection.start+toIndent.length);

                        } else {
                            for(i in lines){
                                lines[i] = tab + lines[i];
                            }
                            toIndent = lines.join("\n");

                            utils.editor.set( val.substring(0,selection.start) + toIndent + val.substring(selection.end) );
                            utils.cursor.set(selection.start, selection.start+toIndent.length);
                        }
                    } else {
                        var left = val.substring(0, pos),
                            right = val.substring(pos),
                            edited = left + tab + right;

                        if(e.shiftKey){
                            if(val.substring(pos-tab.length, pos) == tab){
                                edited = val.substring(0, pos-tab.length) + right;
                                utils.editor.set(edited);
                                utils.cursor.set(pos-tab.length);
                            }
                        } else {
                            utils.editor.set(edited);
                            utils.cursor.set(pos + tab.length);
                            toReturn = false;
                        }
                    }
                    utils._callHook('tab:after');
                }
                return toReturn;
            },
            enterKey: function (e) {

                if(!utils.fenceRange()){ return; }

                if (e.keyCode == 13) {

                    utils.preventDefaultEvent(e);
                    utils._callHook('enter:before');
                    
                    var pos = utils.cursor.get(),
                        val = utils.editor.get(),
                        left = val.substring(0, pos),
                        right = val.substring(pos),
                        leftChar = left.charAt(left.length - 1),
                        rightChar = right.charAt(0),
                        numTabs = utils.levelsDeep(),
                        ourIndent = "",
                        closingBreak = "",
                        finalCursorPos,
                        i;
                    if(!numTabs){
                        finalCursorPos = 1;
                    } else {
                        while(numTabs--){
                            ourIndent+=tab;
                        }
                        ourIndent = ourIndent;
                        finalCursorPos = ourIndent.length + 1;

                        for(i=0; i<charSettings.keyMap.length; i++) {
                            if (charSettings.keyMap[i].open == leftChar && charSettings.keyMap[i].close == rightChar){
                                closingBreak = newLine;
                            }
                        }
                        
                    }

                    var edited = left + newLine + ourIndent + closingBreak + (ourIndent.substring(0, ourIndent.length-tab.length) ) + right;
                    utils.editor.set(edited);
                    utils.cursor.set(pos + finalCursorPos);
                    utils._callHook('enter:after');
                }
            },
            deleteKey: function (e) {

	            if(!utils.fenceRange()){ return; }
	
	            if(e.keyCode == 8){
	            	utils.preventDefaultEvent(e);
	                            
	            	utils._callHook('delete:before');
	            	
	            	var pos = utils.cursor.get(),
	                    val = utils.editor.get(),
	                    left = val.substring(0, pos),
	                    right = val.substring(pos),
	                    leftChar = left.charAt(left.length - 1),
	                    rightChar = right.charAt(0),
	                    i;
	            	
	                if( utils.cursor.selection() === false ){
	                    for(i=0; i<charSettings.keyMap.length; i++) {
	                        if (charSettings.keyMap[i].open == leftChar && charSettings.keyMap[i].close == rightChar) {
	                            var edited = val.substring(0,pos-1) + val.substring(pos+1);
	                            utils.editor.set(edited);
	                            utils.cursor.set(pos - 1);
	                            return;
	                        }
	                    }
	                    var edited = val.substring(0,pos-1) + val.substring(pos);
	                    utils.editor.set(edited);
	                    utils.cursor.set(pos - 1);
	                } else {
	                	var sel = utils.cursor.selection(),
	                		edited = val.substring(0,sel.start) + val.substring(sel.end);
	                    utils.editor.set(edited);
	                    utils.cursor.set(pos);
	                }
	                
	                utils._callHook('delete:after');
	                
	            }
	        }
        },
        charFuncs = {
            openedChar: function (_char, e) {
                utils.preventDefaultEvent(e);
                utils._callHook('openChar:before');
                var pos = utils.cursor.get(),
                    val = utils.editor.get(),
                    left = val.substring(0, pos),
                    right = val.substring(pos),
                    edited = left + _char.open + _char.close + right;

                defaults.textarea.value = edited;
                utils.cursor.set(pos + 1);
                utils._callHook('openChar:after');
            },
            closedChar: function (_char, e) {
                var pos = utils.cursor.get(),
                    val = utils.editor.get(),
                    toOverwrite = val.substring(pos, pos + 1);
                if (toOverwrite == _char.close) {
                    utils.preventDefaultEvent(e);
                    utils._callHook('closeChar:before');
                    utils.cursor.set(utils.cursor.get() + 1);
                    utils._callHook('closeChar:after');
                    return true;
                }
                return false;
            }
        },
        action = {
            filter: function (e) {

                if(!utils.fenceRange()){ return; }

                var theCode = e.which || e.keyCode;
                
                if(theCode == 39 || theCode == 40 && e.which===0){ return; }

                var _char = String.fromCharCode(theCode),
                    i;

                for(i=0; i<charSettings.keyMap.length; i++) {

                    if (charSettings.keyMap[i].close == _char) {
                        var didClose = defaults.overwrite && charFuncs.closedChar(charSettings.keyMap[i], e);

                        if (!didClose && charSettings.keyMap[i].open == _char && defaults.autoOpen) {
                            charFuncs.openedChar(charSettings.keyMap[i], e);
                        }
                    } else if (charSettings.keyMap[i].open == _char && defaults.autoOpen) {
                        charFuncs.openedChar(charSettings.keyMap[i], e);
                    }
                }
            },
            listen: function () {

                if(defaults.replaceTab){ utils.addEvent(defaults.textarea, 'keydown', intercept.tabKey); }
                if(defaults.autoIndent){ utils.addEvent(defaults.textarea, 'keydown', intercept.enterKey); }
                if(defaults.autoStrip){ utils.addEvent(defaults.textarea, 'keydown', intercept.deleteKey); }

                utils.addEvent(defaults.textarea, 'keypress', action.filter);
                
                utils.addEvent(defaults.textarea, 'keydown', function(){ utils._callHook('keydown'); });
                utils.addEvent(defaults.textarea, 'keyup', function(){ utils._callHook('keyup'); });
            }
        },
        init = function (opts) {

            if(opts.textarea){
            	utils._callHook('init:before', false);
                utils.deepExtend(defaults, opts);
                utils.defineNewLine();

                if (defaults.softTabs) {
                    tab = " ".repeat(defaults.tabSize);
                } else {
                    tab = "\t";

                    utils.defineTabSize(defaults.tabSize);
                }

                action.listen();
                utils._callHook('init:after', false);
            }

        };

        this.destroy = function(){
            utils.removeEvent(defaults.textarea, 'keydown', intercept.tabKey);
	        utils.removeEvent(defaults.textarea, 'keydown', intercept.enterKey);
	        utils.removeEvent(defaults.textarea, 'keydown', intercept.deleteKey);
	        utils.removeEvent(defaults.textarea, 'keypress', action.filter);
        };

        init(userOpts);

    };

    if (typeof module !== 'undefined' && module.exports) {
        module.exports = Behave;
    }

    if (typeof ender === 'undefined') {
        this.Behave = Behave;
        this.BehaveHooks = BehaveHooks;
    }

    if (typeof define === "function" && define.amd) {
        define("behave", [], function () { 
            return Behave; 
        });
    }

}).call(this);
/*
Copyright (c) 2010 Ryan Schuft (ryan.schuft@gmail.com)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/

/*
This code is based in part on the work done in Ruby to support
infection as part of Ruby on Rails in the ActiveSupport's Inflector
and Inflections classes.  It was initally ported to Javascript by
Ryan Schuft (ryan.schuft@gmail.com) in 2007.

The code is available at http://code.google.com/p/inflection-js/

The basic usage is:
1. Include this script on your web page.
2. Call functions on any String object in Javascript

Currently implemented functions:

String.pluralize(plural) == String
renders a singular English language noun into its plural form
normal results can be overridden by passing in an alternative

String.singularize(singular) == String
renders a plural English language noun into its singular form
normal results can be overridden by passing in an alterative

String.camelize(lowFirstLetter) == String
renders a lower case underscored word into camel case
the first letter of the result will be upper case unless you pass true
also translates "/" into "::" (underscore does the opposite)

String.underscore() == String
renders a camel cased word into words seperated by underscores
also translates "::" back into "/" (camelize does the opposite)

String.humanize(lowFirstLetter) == String
renders a lower case and underscored word into human readable form
defaults to making the first letter capitalized unless you pass true

String.capitalize() == String
renders all characters to lower case and then makes the first upper

String.dasherize() == String
renders all underbars and spaces as dashes

String.titleize() == String
renders words into title casing (as for book titles)

String.demodulize() == String
renders class names that are prepended by modules into just the class

String.tableize() == String
renders camel cased singular words into their underscored plural form

String.classify() == String
renders an underscored plural word into its camel cased singular form

String.foreign_key(dropIdUbar) == String
renders a class name (camel cased singular noun) into a foreign key
defaults to seperating the class from the id with an underbar unless
you pass true

String.ordinalize() == String
renders all numbers found in the string into their sequence like "22nd"
*/

/*
This sets up a container for some constants in its own namespace
We use the window (if available) to enable dynamic loading of this script
Window won't necessarily exist for non-browsers.
*/


/*
This sets up some constants for later use
This should use the window namespace variable if available
*/

InflectionJS =
{
  /*
    This is a list of nouns that use the same form for both singular and plural.
    This list should remain entirely in lower case to correctly match Strings.
    */
    uncountable_words: [
      'equipment', 'information', 'rice', 'money', 'species', 'series',
        'fish', 'sheep', 'moose', 'deer', 'news'
          ],

            /*
              These rules translate from the singular form of a noun to its plural form.
              */
              plural_rules: [
                [new RegExp('(m)an$', 'gi'),                 '$1en'],
                  [new RegExp('(pe)rson$', 'gi'),              '$1ople'],
                    [new RegExp('(child)$', 'gi'),               '$1ren'],
                      [new RegExp('^(ox)$', 'gi'),                 '$1en'],
                        [new RegExp('(ax|test)is$', 'gi'),           '$1es'],
                          [new RegExp('(octop|vir)us$', 'gi'),         '$1i'],
                            [new RegExp('(alias|status)$', 'gi'),        '$1es'],
                              [new RegExp('(bu)s$', 'gi'),                 '$1ses'],
                                [new RegExp('(buffal|tomat|potat)o$', 'gi'), '$1oes'],
                                  [new RegExp('([ti])um$', 'gi'),              '$1a'],
                                    [new RegExp('sis$', 'gi'),                   'ses'],
                                      [new RegExp('(?:([^f])fe|([lr])f)$', 'gi'),  '$1$2ves'],
                                        [new RegExp('(hive)$', 'gi'),                '$1s'],
                                          [new RegExp('([^aeiouy]|qu)y$', 'gi'),       '$1ies'],
                                            [new RegExp('(x|ch|ss|sh)$', 'gi'),          '$1es'],
                                              [new RegExp('(matr|vert|ind)ix|ex$', 'gi'),  '$1ices'],
                                                [new RegExp('([m|l])ouse$', 'gi'),           '$1ice'],
                                                  [new RegExp('(quiz)$', 'gi'),                '$1zes'],
                                                    [new RegExp('s$', 'gi'),                     's'],
                                                      [new RegExp('$', 'gi'),                      's']
                                                        ],

                                                          /*
                                                            These rules translate from the plural form of a noun to its singular form.
                                                            */
                                                            singular_rules: [
                                                              [new RegExp('(m)en$', 'gi'),                                                       '$1an'],
                                                                [new RegExp('(pe)ople$', 'gi'),                                                    '$1rson'],
                                                                  [new RegExp('(child)ren$', 'gi'),                                                  '$1'],
                                                                    [new RegExp('([ti])a$', 'gi'),                                                     '$1um'],
                                                                      [new RegExp('((a)naly|(b)a|(d)iagno|(p)arenthe|(p)rogno|(s)ynop|(t)he)ses$','gi'), '$1$2sis'],
                                                                        [new RegExp('(hive)s$', 'gi'),                                                     '$1'],
                                                                          [new RegExp('(tive)s$', 'gi'),                                                     '$1'],
                                                                            [new RegExp('(curve)s$', 'gi'),                                                    '$1'],
                                                                              [new RegExp('([lr])ves$', 'gi'),                                                   '$1f'],
                                                                                [new RegExp('([^fo])ves$', 'gi'),                                                  '$1fe'],
                                                                                  [new RegExp('([^aeiouy]|qu)ies$', 'gi'),                                           '$1y'],
                                                                                    [new RegExp('(s)eries$', 'gi'),                                                    '$1eries'],
                                                                                      [new RegExp('(m)ovies$', 'gi'),                                                    '$1ovie'],
                                                                                        [new RegExp('(x|ch|ss|sh)es$', 'gi'),                                              '$1'],
                                                                                          [new RegExp('([m|l])ice$', 'gi'),                                                  '$1ouse'],
                                                                                            [new RegExp('(bus)es$', 'gi'),                                                     '$1'],
                                                                                              [new RegExp('(o)es$', 'gi'),                                                       '$1'],
                                                                                                [new RegExp('(shoe)s$', 'gi'),                                                     '$1'],
                                                                                                  [new RegExp('(cris|ax|test)es$', 'gi'),                                            '$1is'],
                                                                                                    [new RegExp('(octop|vir)i$', 'gi'),                                                '$1us'],
                                                                                                      [new RegExp('(alias|status)es$', 'gi'),                                            '$1'],
                                                                                                        [new RegExp('^(ox)en', 'gi'),                                                      '$1'],
                                                                                                          [new RegExp('(vert|ind)ices$', 'gi'),                                              '$1ex'],
                                                                                                            [new RegExp('(matr)ices$', 'gi'),                                                  '$1ix'],
                                                                                                              [new RegExp('(quiz)zes$', 'gi'),                                                   '$1'],
                                                                                                                [new RegExp('s$', 'gi'),                                                           '']
                                                                                                                  ],

                                                                                                                    /*
                                                                                                                      This is a list of words that should not be capitalized for title case
                                                                                                                      */
                                                                                                                      non_titlecased_words: [
                                                                                                                        'and', 'or', 'nor', 'a', 'an', 'the', 'so', 'but', 'to', 'of', 'at',
                                                                                                                          'by', 'from', 'into', 'on', 'onto', 'off', 'out', 'in', 'over',
                                                                                                                            'with', 'for'
                                                                                                                              ],

                                                                                                                                /*
                                                                                                                                  These are regular expressions used for converting between String formats
                                                                                                                                  */
                                                                                                                                  id_suffix: new RegExp('(_ids|_id)$', 'g'),
                                                                                                                                    underbar: new RegExp('_', 'g'),
                                                                                                                                      space_or_underbar: new RegExp('[\ _]', 'g'),
                                                                                                                                        uppercase: new RegExp('([A-Z])', 'g'),
                                                                                                                                          underbar_prefix: new RegExp('^_'),
    
                                                                                                                                            /*
                                                                                                                                              This is a helper method that applies rules based replacement to a String
                                                                                                                                              Signature:
                                                                                                                                              InflectionJS.apply_rules(str, rules, skip, override) == String
                                                                                                                                              Arguments:
                                                                                                                                              str - String - String to modify and return based on the passed rules
                                                                                                                                              rules - Array: [RegExp, String] - Regexp to match paired with String to use for replacement
                                                                                                                                              skip - Array: [String] - Strings to skip if they match
                                                                                                                                              override - String (optional) - String to return as though this method succeeded (used to conform to APIs)
                                                                                                                                              Returns:
                                                                                                                                              String - passed String modified by passed rules
                                                                                                                                              Examples:
                                                                                                                                              InflectionJS.apply_rules("cows", InflectionJs.singular_rules) === 'cow'
                                                                                                                                              */
                                                                                                                                              apply_rules: function(str, rules, skip, override)
  {
    if (override)
    {
      str = override;
    }
    else
    {
      var ignore = (skip.indexOf(str.toLowerCase()) > -1);
      if (!ignore)
      {
        for (var x = 0; x < rules.length; x++)
        {
          if (str.match(rules[x][0]))
          {
            str = str.replace(rules[x][0], rules[x][1]);
            break;
          }
        }
      }
    }
    return str;
  }
};

/*
This lets us detect if an Array contains a given element
Signature:
Array.indexOf(item, fromIndex, compareFunc) == Integer
Arguments:
item - Object - object to locate in the Array
fromIndex - Integer (optional) - starts checking from this position in the Array
compareFunc - Function (optional) - function used to compare Array item vs passed item
Returns:
Integer - index position in the Array of the passed item
Examples:
['hi','there'].indexOf("guys") === -1
['hi','there'].indexOf("hi") === 0
*/
if (!Array.prototype.indexOf)
{
  Array.prototype.indexOf = function(item, fromIndex, compareFunc)
  {
    if (!fromIndex)
    {
      fromIndex = -1;
    }
    var index = -1;
    for (var i = fromIndex; i < this.length; i++)
    {
      if (this[i] === item || compareFunc && compareFunc(this[i], item))
      {
        index = i;
        break;
      }
    }
    return index;
  };
}

/*
You can override this list for all Strings or just one depending on if you
set the new values on prototype or on a given String instance.
*/

String.prototype._uncountable_words = InflectionJS.uncountable_words;


/*
You can override this list for all Strings or just one depending on if you
set the new values on prototype or on a given String instance.
*/

String.prototype._plural_rules = InflectionJS.plural_rules;


/*
You can override this list for all Strings or just one depending on if you
set the new values on prototype or on a given String instance.
*/

String.prototype._singular_rules = InflectionJS.singular_rules;


/*
You can override this list for all Strings or just one depending on if you
set the new values on prototype or on a given String instance.
*/

String.prototype._non_titlecased_words = InflectionJS.non_titlecased_words;


/*
This function adds plurilization support to every String object
Signature:
String.pluralize(plural) == String
Arguments:
plural - String (optional) - overrides normal output with said String
Returns:
String - singular English language nouns are returned in plural form
Examples:
"person".pluralize() == "people"
"octopus".pluralize() == "octopi"
"Hat".pluralize() == "Hats"
"person".pluralize("guys") == "guys"
*/

String.prototype.pluralize = function(plural)
{
  return InflectionJS.apply_rules(
    this,
      this._plural_rules,
        this._uncountable_words,
          plural
            );
};


/*
This function adds singularization support to every String object
Signature:
String.singularize(singular) == String
Arguments:
singular - String (optional) - overrides normal output with said String
Returns:
String - plural English language nouns are returned in singular form
Examples:
"people".singularize() == "person"
"octopi".singularize() == "octopus"
"Hats".singularize() == "Hat"
"guys".singularize("person") == "person"
*/

String.prototype.singularize = function(singular)
{
  return InflectionJS.apply_rules(
    this,
      this._singular_rules,
        this._uncountable_words,
          singular
            );
};


/*
This function adds camelization support to every String object
Signature:
String.camelize(lowFirstLetter) == String
Arguments:
lowFirstLetter - boolean (optional) - default is to capitalize the first
letter of the results... passing true will lowercase it
Returns:
String - lower case underscored words will be returned in camel case
additionally '/' is translated to '::'
Examples:
"message_properties".camelize() == "MessageProperties"
"message_properties".camelize(true) == "messageProperties"
*/

String.prototype.camelize = function(lowFirstLetter)
{
  var str = this.underscore().toLowerCase();
  var str_path = str.split('/');
  for (var i = 0; i < str_path.length; i++)
  {
    var str_arr = str_path[i].split('_');
    var initX = ((lowFirstLetter && i + 1 === str_path.length) ? (1) : (0));
    for (var x = initX; x < str_arr.length; x++)
    {
      str_arr[x] = str_arr[x].charAt(0).toUpperCase() + str_arr[x].substring(1);
    }
    str_path[i] = str_arr.join('');
  }
  str = str_path.join('::').replace(/\s/ig,"");
  return str;
};


/*
This function adds underscore support to every String object
Signature:
String.underscore() == String
Arguments:
N/A
Returns:
String - camel cased words are returned as lower cased and underscored
additionally '::' is translated to '/'
Examples:
"MessageProperties".camelize() == "message_properties"
"messageProperties".underscore() == "message_properties"
*/

String.prototype.underscore = function()
{
  var str = this;
  var str_path = str.split('::');
  for (var i = 0; i < str_path.length; i++)
  {
    str_path[i] = str_path[i].replace(InflectionJS.uppercase, '_$1');
    str_path[i] = str_path[i].replace(InflectionJS.underbar_prefix, '');
  }
  str = str_path.join('/').toLowerCase();
  str = str.replace(/\s/gi,"_");
  return str;
};


/*
This function adds humanize support to every String object
Signature:
String.humanize(lowFirstLetter) == String
Arguments:
lowFirstLetter - boolean (optional) - default is to capitalize the first
letter of the results... passing true will lowercase it
Returns:
String - lower case underscored words will be returned in humanized form
Examples:
"message_properties".humanize() == "Message properties"
"message_properties".humanize(true) == "message properties"
*/

String.prototype.humanize = function(lowFirstLetter)
{
  var str = this.toLowerCase();
  str = str.replace(InflectionJS.id_suffix, '');
  str = str.replace(InflectionJS.underbar, ' ');
  if (!lowFirstLetter)
  {
    str = str.replace(/_/ig," ").capitalize();
  }
  return str;
};


/*
This function adds capitalization support to every String object
Signature:
String.capitalize() == String
Arguments:
N/A
Returns:
String - all characters will be lower case and the first will be upper
Examples:
"message_properties".capitalize() == "Message_properties"
"message properties".capitalize() == "Message properties"
*/

String.prototype.capitalize = function()
{
  var str = this.toLowerCase();
  str = str.substring(0, 1).toUpperCase() + str.substring(1);
  return str;
};


/*
This function adds dasherization support to every String object
Signature:
String.dasherize() == String
Arguments:
N/A
Returns:
String - replaces all spaces or underbars with dashes
Examples:
"message_properties".capitalize() == "message-properties"
"Message Properties".capitalize() == "Message-Properties"
*/

String.prototype.dasherize = function()
{
  var str = this;
  str = str.replace(InflectionJS.space_or_underbar, '-');
  return str;
};


/*
This function adds titleize support to every String object
Signature:
String.titleize() == String
Arguments:
N/A
Returns:
String - capitalizes words as you would for a book title
Examples:
"message_properties".titleize() == "Message Properties"
"message properties to keep".titleize() == "Message Properties to Keep"
*/

String.prototype.titleize = function()
{
  var str = this.toLowerCase();
  str = str.replace(InflectionJS.underbar, ' ');
  var str_arr = str.split(' ');
  for (var x = 0; x < str_arr.length; x++)
  {
    var d = str_arr[x].split('-');
    for (var i = 0; i < d.length; i++)
    {
      if (this._non_titlecased_words.indexOf(d[i].toLowerCase()) < 0)
      {
        d[i] = d[i].capitalize();
      }
    }
    str_arr[x] = d.join('-');
  }
  str = str_arr.join(' ');
  str = str.substring(0, 1).toUpperCase() + str.substring(1);
  return str;
};


/*
This function adds demodulize support to every String object
Signature:
String.demodulize() == String
Arguments:
N/A
Returns:
String - removes module names leaving only class names (Ruby style)
Examples:
"Message::Bus::Properties".demodulize() == "Properties"
*/

String.prototype.demodulize = function()
{
  var str = this;
  var str_arr = str.split('::');
  str = str_arr[str_arr.length - 1];
  return str;
};

/*
This function adds tableize support to every String object
Signature:
String.tableize() == String
Arguments:
N/A
Returns:
String - renders camel cased words into their underscored plural form
Examples:
"MessageBusProperty".tableize() == "message_bus_properties"
*/

String.prototype.tableize = function()
{
  var str = this;
  str = str.underscore().pluralize();
  return str;
};


/*
This function adds classification support to every String object
Signature:
String.classify() == String
Arguments:
N/A
Returns:
String - underscored plural nouns become the camel cased singular form
Examples:
"message_bus_properties".classify() == "MessageBusProperty"
*/

String.prototype.classify = function()
{
  var str = this;
  str = str.camelize().singularize();
  return str;
};

/*
This function adds foreign key support to every String object
Signature:
String.foreign_key(dropIdUbar) == String
Arguments:
dropIdUbar - boolean (optional) - default is to seperate id with an
underbar at the end of the class name, you can pass true to skip it
Returns:
String - camel cased singular class names become underscored with id
Examples:
"MessageBusProperty".foreign_key() == "message_bus_property_id"
"MessageBusProperty".foreign_key(true) == "message_bus_propertyid"
*/

String.prototype.foreign_key = function(dropIdUbar)
{
  var str = this;
  str = str.demodulize().underscore() + ((dropIdUbar) ? ('') : ('_')) + 'id';
  return str;
};


/*
This function adds ordinalize support to every String object
Signature:
String.ordinalize() == String
Arguments:
N/A
Returns:
String - renders all found numbers their sequence like "22nd"
Examples:
"the 1 pitch".ordinalize() == "the 1st pitch"
*/

String.prototype.ordinalize = function()
{
  var str = this;
  var str_arr = str.split(' ');
  for (var x = 0; x < str_arr.length; x++)
  {
    var i = parseInt(str_arr[x]);
    if (i === NaN)
    {
      var ltd = str_arr[x].substring(str_arr[x].length - 2);
      var ld = str_arr[x].substring(str_arr[x].length - 1);
      var suf = "th";
      if (ltd != "11" && ltd != "12" && ltd != "13")
      {
        if (ld === "1")
        {
          suf = "st";
        }
        else if (ld === "2")
        {
          suf = "nd";
        }
        else if (ld === "3")
        {
          suf = "rd";
        }
      }
      str_arr[x] += suf;
    }
  }
  str = str_arr.join(' ');
  return str;
};
/* jshint proto: true */

/**
 * jjv.js -- A javascript library to validate json input through a json-schema.
 *
 * Copyright (c) 2013 Alex Cornejo.
 *
 * Redistributable under a MIT-style open source license.
 */


(function () {
  var clone = function (obj) {
      // Handle the 3 simple types (string, number, function), and null or undefined
      if (obj === null || typeof obj !== 'object') return obj;
      var copy;

      // Handle Date
      if (obj instanceof Date) {
          copy = new Date();
          copy.setTime(obj.getTime());
          return copy;
      }

      // handle RegExp
      if (obj instanceof RegExp) {
        copy = new RegExp(obj);
        return copy;
      }

      // Handle Array
      if (obj instanceof Array) {
          copy = [];
          for (var i = 0, len = obj.length; i < len; i++)
              copy[i] = clone(obj[i]);
          return copy;
      }

      // Handle Object
      if (obj instanceof Object) {
          copy = {};
//           copy = Object.create(Object.getPrototypeOf(obj));
          for (var attr in obj) {
              if (obj.hasOwnProperty(attr))
                copy[attr] = clone(obj[attr]);
          }
          return copy;
      }

      throw new Error("Unable to clone object!");
  };

  var clone_stack = function (stack) {
    var new_stack = [ clone(stack[0]) ], key = new_stack[0].key, obj = new_stack[0].object;
    for (var i = 1, len = stack.length; i< len; i++) {
      obj = obj[key];
      key = stack[i].key;
      new_stack.push({ object: obj, key: key });
    }
    return new_stack;
  };

  var copy_stack = function (new_stack, old_stack) {
    var stack_last = new_stack.length-1, key = new_stack[stack_last].key;
    old_stack[stack_last].object[key] = new_stack[stack_last].object[key];
  };

  var handled = {
    'type': true,
    'not': true,
    'anyOf': true,
    'allOf': true,
    'oneOf': true,
    '$ref': true,
    '$schema': true,
    'id': true,
    'exclusiveMaximum': true,
    'exclusiveMininum': true,
    'properties': true,
    'patternProperties': true,
    'additionalProperties': true,
    'items': true,
    'additionalItems': true,
    'required': true,
    'default': true,
    'title': true,
    'description': true,
    'definitions': true,
    'dependencies': true
  };

  var fieldType = {
    'null': function (x) {
      return x === null;
    },
    'string': function (x) {
      return typeof x === 'string';
    },
    'boolean': function (x) {
      return typeof x === 'boolean';
    },
    'number': function (x) {
      // Use x === x instead of !isNaN(x) for speed
      return typeof x === 'number' && x === x;
    },
    'integer': function (x) {
      return typeof x === 'number' && x%1 === 0;
    },
    'object': function (x) {
      return x && typeof x === 'object' && !Array.isArray(x);
    },
    'array': function (x) {
      return Array.isArray(x);
    },
    'date': function (x) {
      return x instanceof Date;
    }
  };

  // missing: uri, date-time, ipv4, ipv6
  var fieldFormat = {
    'alpha': function (v) {
      return (/^[a-zA-Z]+$/).test(v);
    },
    'alphanumeric': function (v) {
      return (/^[a-zA-Z0-9]+$/).test(v);
    },
    'identifier': function (v) {
      return (/^[-_a-zA-Z0-9]+$/).test(v);
    },
    'hexadecimal': function (v) {
      return (/^[a-fA-F0-9]+$/).test(v);
    },
    'numeric': function (v) {
      return (/^[0-9]+$/).test(v);
    },
    'date-time': function (v) {
      return !isNaN(Date.parse(v)) && v.indexOf('/') === -1;
    },
    'uppercase': function (v) {
      return v === v.toUpperCase();
    },
    'lowercase': function (v) {
      return v === v.toLowerCase();
    },
    'hostname': function (v) {
      return v.length < 256 && (/^([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])(\.([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9\-]{0,61}[a-zA-Z0-9]))*$/).test(v);
    },
    'uri': function (v) {
      return (/[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/).test(v);
    },
    'email': function (v) { // email, ipv4 and ipv6 adapted from node-validator
      return (/^(?:[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+\.)*[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+@(?:(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!\.)){0,61}[a-zA-Z0-9]?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!$)){0,61}[a-zA-Z0-9]?)|(?:\[(?:(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\.){3}(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\]))$/).test(v);
    },
    'ipv4': function (v) {
      if ((/^(\d?\d?\d)\.(\d?\d?\d)\.(\d?\d?\d)\.(\d?\d?\d)$/).test(v)) {
        var parts = v.split('.').sort();
        if (parts[3] <= 255)
          return true;
      }
      return false;
    },
    'ipv6': function(v) {
      return (/^((?=.*::)(?!.*::.+::)(::)?([\dA-F]{1,4}:(:|\b)|){5}|([\dA-F]{1,4}:){6})((([\dA-F]{1,4}((?!\3)::|:\b|$))|(?!\2\3)){2}|(((2[0-4]|1\d|[1-9])?\d|25[0-5])\.?\b){4})$/).test(v);
     /*  return (/^::|^::1|^([a-fA-F0-9]{1,4}::?){1,7}([a-fA-F0-9]{1,4})$/).test(v); */
    }
  };

  var fieldValidate = {
    'readOnly': function (v, p) {
      return false;
    },
    // ****** numeric validation ********
    'minimum': function (v, p, schema) {
      return !(v < p || schema.exclusiveMinimum && v <= p);
    },
    'maximum': function (v, p, schema) {
      return !(v > p || schema.exclusiveMaximum && v >= p);
    },
    'multipleOf': function (v, p) {
      return (v/p)%1 === 0 || typeof v !== 'number';
    },
    // ****** string validation ******
    'pattern': function (v, p) {
      if (typeof v !== 'string')
        return true;
      var pattern, modifiers;
      if (typeof p === 'string')
        pattern=p;
      else {
        pattern=p[0];
        modifiers=p[1];
      }
      var regex = new RegExp(pattern, modifiers);
      return regex.test(v);
    },
    'minLength': function (v, p) {
      return v.length >= p || typeof v !== 'string';
    },
    'maxLength': function (v, p) {
      return v.length <= p || typeof v !== 'string';
    },
    // ***** array validation *****
    'minItems': function (v, p) {
      return v.length >= p || !Array.isArray(v);
    },
    'maxItems': function (v, p) {
      return v.length <= p || !Array.isArray(v);
    },
    'uniqueItems': function (v, p) {
      var hash = {}, key;
      for (var i = 0, len = v.length; i < len; i++) {
        key = JSON.stringify(v[i]);
        if (hash.hasOwnProperty(key))
          return false;
        else
          hash[key] = true;
      }
      return true;
    },
    // ***** object validation ****
    'minProperties': function (v, p) {
      if (typeof v !== 'object')
        return true;
      var count = 0;
      for (var attr in v) if (v.hasOwnProperty(attr)) count = count + 1;
      return count >= p;
    },
    'maxProperties': function (v, p) {
      if (typeof v !== 'object')
        return true;
      var count = 0;
      for (var attr in v) if (v.hasOwnProperty(attr)) count = count + 1;
      return count <= p;
    },
    // ****** all *****
    'constant': function (v, p) {
      return JSON.stringify(v) == JSON.stringify(p);
    },
    'enum': function (v, p) {
      var i, len, vs;
      if (typeof v === 'object') {
        vs = JSON.stringify(v);
        for (i = 0, len = p.length; i < len; i++)
          if (vs === JSON.stringify(p[i]))
            return true;
      } else {
        for (i = 0, len = p.length; i < len; i++)
          if (v === p[i])
            return true;
      }
      return false;
    }
  };

  var normalizeID = function (id) {
    return id.indexOf("://") === -1 ? id : id.split("#")[0];
  };

  var resolveURI = function (env, schema_stack, uri) {
    var curschema, components, hash_idx, name;

    hash_idx = uri.indexOf('#');

    if (hash_idx === -1) {
      if (!env.schema.hasOwnProperty(uri))
        return null;
      return [env.schema[uri]];
    }

    if (hash_idx > 0) {
      name = uri.substr(0, hash_idx);
      uri = uri.substr(hash_idx+1);
      if (!env.schema.hasOwnProperty(name)) {
        if (schema_stack && schema_stack[0].id === name)
          schema_stack = [schema_stack[0]];
        else
          return null;
      } else
        schema_stack = [env.schema[name]];
    } else {
      if (!schema_stack)
        return null;
      uri = uri.substr(1);
    }

    if (uri === '')
      return [schema_stack[0]];

    if (uri.charAt(0) === '/') {
      uri = uri.substr(1);
      curschema = schema_stack[0];
      components = uri.split('/');
      while (components.length > 0) {
        if (!curschema.hasOwnProperty(components[0]))
          return null;
        curschema = curschema[components[0]];
        schema_stack.push(curschema);
        components.shift();
      }
      return schema_stack;
    } else // FIX: should look for subschemas whose id matches uri
      return null;
  };

  var resolveObjectRef = function (object_stack, uri) {
    var components, object, last_frame = object_stack.length-1, skip_frames, frame, m = /^(\d+)/.exec(uri);

    if (m) {
      uri = uri.substr(m[0].length);
      skip_frames = parseInt(m[1], 10);
      if (skip_frames < 0 || skip_frames > last_frame)
        return;
      frame = object_stack[last_frame-skip_frames];
      if (uri === '#')
        return frame.key;
    } else
      frame = object_stack[0];

    object = frame.object[frame.key];

    if (uri === '')
      return object;

    if (uri.charAt(0) === '/') {
      uri = uri.substr(1);
      components = uri.split('/');
      while (components.length > 0) {
        components[0] = components[0].replace(/~1/g, '/').replace(/~0/g, '~');
        if (!object.hasOwnProperty(components[0]))
          return;
        object = object[components[0]];
        components.shift();
      }
      return object;
    } else
      return;
  };

  var checkValidity = function (env, schema_stack, object_stack, options) {
    var i, len, count, hasProp, hasPattern;
    var p, v, malformed = false, objerrs = {}, objerr, props, matched;
    var sl = schema_stack.length-1, schema = schema_stack[sl], new_stack;
    var ol = object_stack.length-1, object = object_stack[ol].object, name = object_stack[ol].key, prop = object[name];
    var errCount, minErrCount;

    if (schema.hasOwnProperty('$ref')) {
      schema_stack= resolveURI(env, schema_stack, schema.$ref);
      if (!schema_stack)
        return {'$ref': schema.$ref};
      else
        return checkValidity(env, schema_stack, object_stack, options);
    }

    if (schema.hasOwnProperty('type')) {
      if (typeof schema.type === 'string') {
        if (options.useCoerce && env.coerceType.hasOwnProperty(schema.type))
          prop = object[name] = env.coerceType[schema.type](prop);
        if (!env.fieldType[schema.type](prop))
          return {'type': schema.type};
      } else {
        malformed = true;
        for (i = 0, len = schema.type.length; i < len && malformed; i++)
          if (env.fieldType[schema.type[i]](prop))
            malformed = false;
        if (malformed)
          return {'type': schema.type};
      }
    }

    if (schema.hasOwnProperty('allOf')) {
      for (i = 0, len = schema.allOf.length; i < len; i++) {
        objerr = checkValidity(env, schema_stack.concat(schema.allOf[i]), object_stack, options);
        if (objerr)
          return objerr;
      }
    }

    if (!options.useCoerce && !options.useDefault && !options.removeAdditional) {
      if (schema.hasOwnProperty('oneOf')) {
        minErrCount = Infinity;
        for (i = 0, len = schema.oneOf.length, count = 0; i < len; i++) {
          objerr = checkValidity(env, schema_stack.concat(schema.oneOf[i]), object_stack, options);
          if (!objerr) {
            count = count + 1;
            if (count > 1)
              break;
          } else {
            errCount = objerr.schema ? Object.keys(objerr.schema).length : 1;
            if (errCount < minErrCount) {
                minErrCount = errCount;
                objerrs = objerr;
            }
          }
        }
        if (count > 1)
          return {'oneOf': true};
        else if (count < 1)
          return objerrs;
        objerrs = {};
      }

      if (schema.hasOwnProperty('anyOf')) {
        objerrs = null;
        minErrCount = Infinity;
        for (i = 0, len = schema.anyOf.length; i < len; i++) {
          objerr = checkValidity(env, schema_stack.concat(schema.anyOf[i]), object_stack, options);
          if (!objerr) {
            objerrs = null;
            break;
          }
          else {
            errCount = objerr.schema ? Object.keys(objerr.schema).length : 1;
            if (errCount < minErrCount) {
                minErrCount = errCount;
                objerrs = objerr;
            }
          }
        }
        if (objerrs)
          return objerrs;
      }

      if (schema.hasOwnProperty('not')) {
        objerr = checkValidity(env, schema_stack.concat(schema.not), object_stack, options);
        if (!objerr)
          return {'not': true};
      }
    } else {
      if (schema.hasOwnProperty('oneOf')) {
        minErrCount = Infinity;
        for (i = 0, len = schema.oneOf.length, count = 0; i < len; i++) {
          new_stack = clone_stack(object_stack);
          objerr = checkValidity(env, schema_stack.concat(schema.oneOf[i]), new_stack, options);
          if (!objerr) {
            count = count + 1;
            if (count > 1)
              break;
            else
              copy_stack(new_stack, object_stack);
          } else {
            errCount = objerr.schema ? Object.keys(objerr.schema).length : 1;
            if (errCount < minErrCount) {
                minErrCount = errCount;
                objerrs = objerr;
            }
          }
        }
        if (count > 1)
          return {'oneOf': true};
        else if (count < 1)
          return objerrs;
        objerrs = {};
      }

      if (schema.hasOwnProperty('anyOf')) {
        objerrs = null;
        minErrCount = Infinity;
        for (i = 0, len = schema.anyOf.length; i < len; i++) {
          new_stack = clone_stack(object_stack);
          objerr = checkValidity(env, schema_stack.concat(schema.anyOf[i]), new_stack, options);
          if (!objerr) {
            copy_stack(new_stack, object_stack);
            objerrs = null;
            break;
          }
          else {
            errCount = objerr.schema ? Object.keys(objerr.schema).length : 1;
            if (errCount < minErrCount) {
                minErrCount = errCount;
                objerrs = objerr;
            }
          }
        }
        if (objerrs)
          return objerrs;
      }

      if (schema.hasOwnProperty('not')) {
        new_stack = clone_stack(object_stack);
        objerr = checkValidity(env, schema_stack.concat(schema.not), new_stack, options);
        if (!objerr)
          return {'not': true};
      }
    }

    if (schema.hasOwnProperty('dependencies')) {
      for (p in schema.dependencies)
        if (schema.dependencies.hasOwnProperty(p) && prop.hasOwnProperty(p)) {
          if (Array.isArray(schema.dependencies[p])) {
            for (i = 0, len = schema.dependencies[p].length; i < len; i++)
              if (!prop.hasOwnProperty(schema.dependencies[p][i])) {
                return {'dependencies': true};
              }
          } else {
            objerr = checkValidity(env, schema_stack.concat(schema.dependencies[p]), object_stack, options);
            if (objerr)
              return objerr;
          }
        }
    }

    if (!Array.isArray(prop)) {
      props = [];
      objerrs = {};
      for (p in prop)
        if (prop.hasOwnProperty(p))
          props.push(p);

      if (options.checkRequired && schema.required) {
        for (i = 0, len = schema.required.length; i < len; i++)
          if (!prop.hasOwnProperty(schema.required[i])) {
            objerrs[schema.required[i]] = {'required': true};
            malformed = true;
          }
      }

      hasProp = schema.hasOwnProperty('properties');
      hasPattern = schema.hasOwnProperty('patternProperties');
      if (hasProp || hasPattern) {
        i = props.length;
        while (i--) {
          matched = false;
          if (hasProp && schema.properties.hasOwnProperty(props[i])) {
            matched = true;
            objerr = checkValidity(env, schema_stack.concat(schema.properties[props[i]]), object_stack.concat({object: prop, key: props[i]}), options);
            if (objerr !== null) {
              objerrs[props[i]] = objerr;
              malformed = true;
            }
          }
          if (hasPattern) {
            for (p in schema.patternProperties)
              if (schema.patternProperties.hasOwnProperty(p) && props[i].match(p)) {
                matched = true;
                objerr = checkValidity(env, schema_stack.concat(schema.patternProperties[p]), object_stack.concat({object: prop, key: props[i]}), options);
                if (objerr !== null) {
                  objerrs[props[i]] = objerr;
                  malformed = true;
                }
              }
          }
          if (matched)
            props.splice(i, 1);
        }
      }

      if (options.useDefault && hasProp && !malformed) {
        for (p in schema.properties)
          if (schema.properties.hasOwnProperty(p) && !prop.hasOwnProperty(p) && schema.properties[p].hasOwnProperty('default'))
            prop[p] = schema.properties[p]['default'];
      }

      if (options.removeAdditional && hasProp && schema.additionalProperties !== true && typeof schema.additionalProperties !== 'object') {
        for (i = 0, len = props.length; i < len; i++)
          delete prop[props[i]];
      } else {
        if (schema.hasOwnProperty('additionalProperties')) {
          if (typeof schema.additionalProperties === 'boolean') {
            if (!schema.additionalProperties) {
              for (i = 0, len = props.length; i < len; i++) {
                objerrs[props[i]] = {'additional': true};
                malformed = true;
              }
            }
          } else {
            for (i = 0, len = props.length; i < len; i++) {
              objerr = checkValidity(env, schema_stack.concat(schema.additionalProperties), object_stack.concat({object: prop, key: props[i]}), options);
              if (objerr !== null) {
                objerrs[props[i]] = objerr;
                malformed = true;
              }
            }
          }
        }
      }
      if (malformed)
        return {'schema': objerrs};
    } else {
      if (schema.hasOwnProperty('items')) {
        if (Array.isArray(schema.items)) {
          for (i = 0, len = schema.items.length; i < len; i++) {
            objerr = checkValidity(env, schema_stack.concat(schema.items[i]), object_stack.concat({object: prop, key: i}), options);
            if (objerr !== null) {
              objerrs[i] = objerr;
              malformed = true;
            }
          }
          if (prop.length > len && schema.hasOwnProperty('additionalItems')) {
            if (typeof schema.additionalItems === 'boolean') {
              if (!schema.additionalItems)
                return {'additionalItems': true};
            } else {
              for (i = len, len = prop.length; i < len; i++) {
                objerr = checkValidity(env, schema_stack.concat(schema.additionalItems), object_stack.concat({object: prop, key: i}), options);
                if (objerr !== null) {
                  objerrs[i] = objerr;
                  malformed = true;
                }
              }
            }
          }
        } else {
          for (i = 0, len = prop.length; i < len; i++) {
            objerr = checkValidity(env, schema_stack.concat(schema.items), object_stack.concat({object: prop, key: i}), options);
            if (objerr !== null) {
              objerrs[i] = objerr;
              malformed = true;
            }
          }
        }
      } else if (schema.hasOwnProperty('additionalItems')) {
        if (typeof schema.additionalItems !== 'boolean') {
          for (i = 0, len = prop.length; i < len; i++) {
            objerr = checkValidity(env, schema_stack.concat(schema.additionalItems), object_stack.concat({object: prop, key: i}), options);
            if (objerr !== null) {
              objerrs[i] = objerr;
              malformed = true;
            }
          }
        }
      }
      if (malformed)
        return {'schema': objerrs};
    }

    for (v in schema) {
      if (schema.hasOwnProperty(v) && !handled.hasOwnProperty(v)) {
        if (v === 'format') {
          if (env.fieldFormat.hasOwnProperty(schema[v]) && !env.fieldFormat[schema[v]](prop, schema, object_stack, options)) {
            objerrs[v] = true;
            malformed = true;
          }
        } else {
          if (env.fieldValidate.hasOwnProperty(v) && !env.fieldValidate[v](prop, schema[v].hasOwnProperty('$data') ? resolveObjectRef(object_stack, schema[v].$data) : schema[v], schema, object_stack, options)) {
            objerrs[v] = true;
            malformed = true;
          }
        }
      }
    }

    if (malformed)
      return objerrs;
    else
      return null;
  };

  var defaultOptions = {
    useDefault: false,
    useCoerce: false,
    checkRequired: true,
    removeAdditional: false
  };

  function Environment() {
    if (!(this instanceof Environment))
      return new Environment();

    this.coerceType = {};
    this.fieldType = clone(fieldType);
    this.fieldValidate = clone(fieldValidate);
    this.fieldFormat = clone(fieldFormat);
    this.defaultOptions = clone(defaultOptions);
    this.schema = {};
  }

  Environment.prototype = {
    validate: function (name, object, options) {
      var schema_stack = [name], errors = null, object_stack = [{object: {'__root__': object}, key: '__root__'}];

      if (typeof name === 'string') {
        schema_stack = resolveURI(this, null, name);
        if (!schema_stack)
          throw new Error('jjv: could not find schema \'' + name + '\'.');
      }

      if (!options) {
        options = this.defaultOptions;
      } else {
        for (var p in this.defaultOptions)
          if (this.defaultOptions.hasOwnProperty(p) && !options.hasOwnProperty(p))
            options[p] = this.defaultOptions[p];
      }

      errors = checkValidity(this, schema_stack, object_stack, options);

      if (errors)
        return {validation: errors.hasOwnProperty('schema') ? errors.schema : errors};
      else
        return null;
    },

    resolveRef: function (schema_stack, $ref) {
      return resolveURI(this, schema_stack, $ref);
    },

    addType: function (name, func) {
      this.fieldType[name] = func;
    },

    addTypeCoercion: function (type, func) {
      this.coerceType[type] = func;
    },

    addCheck: function (name, func) {
      this.fieldValidate[name] = func;
    },

    addFormat: function (name, func) {
      this.fieldFormat[name] = func;
    },

    addSchema: function (name, schema) {
      if (!schema && name) {
        schema = name;
        name = undefined;
      }
      if (schema.hasOwnProperty('id') && typeof schema.id === 'string' && schema.id !== name) {
        if (schema.id.charAt(0) === '/')
          throw new Error('jjv: schema id\'s starting with / are invalid.');
        this.schema[normalizeID(schema.id)] = schema;
      } else if (!name) {
        throw new Error('jjv: schema needs either a name or id attribute.');
      }
      if (name)
        this.schema[normalizeID(name)] = schema;
    }
  };

  // Export for use in server and client.
  if (typeof module !== 'undefined' && typeof module.exports !== 'undefined')
    module.exports = Environment;
  else if (typeof define === 'function' && define.amd)
    define(function () {return Environment;});
  else
    this.jjv = Environment;
  
}).call(this);
(function() {
  var App;

  Mustache.template = function(temp) {
    return function() {
      if (arguments.length < 1) {
        return temp;
      }
      Mustache.parse(temp);
      return Mustache.render(temp, arguments[0], arguments[1]);
    };
  };

  App = (function() {
    var activeMeniItems, delegateEventHandlers, setMenuItemActive;

    function App() {}

    App.YAML_INL = 124;

    App.YAML_IND = 2;

    App.prototype.$body = $("body");

    App.STANDARD_ERR = "Ops!, sorry something went wrong!";

    App.prototype.views = {};

    App.prototype.collections = {};

    App.prototype.models = {};

    App.prototype.templates = {};

    App.prototype.jjv = new jjv();

    App.prototype.getTemplate = function(id) {
      return Mustache.template($("#mst_" + id).html());
    };

    App.prototype.start = function() {
      delegateEventHandlers();
      return Backbone.history.start({
        pushState: true
      });
    };

    App.prototype.postRender = function() {
      setMenuItemActive();
      return delegateEventHandlers();
    };

    activeMeniItems = [];

    setMenuItemActive = function() {
      var className, i, n, _results;
      _results = [];
      for (i in app.activeMeniItems) {
        if (className = app.activeMeniItems[i]) {
          n = parseInt(i) + 1;
          $(".flex-" + n + " .sidebar-nav a.is-active").removeClass("is-active");
          _results.push($(".flex-" + n + " .sidebar-nav a." + className).addClass("is-active"));
        } else {
          _results.push(void 0);
        }
      }
      return _results;
    };

    App.prototype.flash = function(content, classNames, timeout) {
      if (classNames == null) {
        classNames = "";
      }
      if (timeout == null) {
        timeout = null;
      }
      return new app.views.Flash({
        data: {
          content: content,
          classNames: classNames
        },
        timeout: timeout
      });
    };

    App.prototype.showAlertErrors = function(xhr) {
      var errors, field, messages;
      errors = JSON.parse(xhr.responseText).data;
      messages = [];
      switch (xhr.status) {
        case 406:
          for (field in errors) {
            messages.push("" + field + " " + (errors[field].join(',')));
          }
          break;
        case 401:
          messages.push("You need to <a href=\"/signin\">singin</a> before");
          break;
        default:
          elems.push(app.constructor.STANDARD_ERR);
          console.log(errors);
      }
      return this.flash(elems.join('<br/>'), "red");
    };

    App.prototype.showInlineErrors = function($form, xhr) {
      var $errEl, $error, errors, field, _results;
      errors = JSON.parse(xhr.responseText).data;
      $errEl = $('<small class="error-msg block red mb2"/>');
      $form.find(".error-msg").remove();
      $form.find(".is-error").removeClass(".is-error");
      switch (xhr.status) {
        case 406:
          _results = [];
          for (field in errors) {
            $error = $errEl.clone().text(errors[field].join(","));
            _results.push($error.insertAfter($form.find("." + field).addClass("is-error")));
          }
          return _results;
          break;
        case 401:
          $error = $errEl.clone().html("Please check your email and password.");
          return $error.insertAfter($form.find("input[type=email]").addClass("is-error"));
        default:
          app.flash(app.constructor.STANDARD_ERR, "bg-red white");
          return console.log(errors);
      }
    };

    delegateEventHandlers = function() {
      $("[data-disclosure]").click(function(e) {
        e.stopPropagation();
        return $(e.currentTarget).toggleClass("is-active");
      });
      $("a[data-method]").click(function(e) {
        var $a;
        e.preventDefault();
        e.stopImmediatePropagation();
        $a = $(this);
        return app.api.request({
          method: $a.data("method"),
          path: $a.attr("href")
        });
      });
      $("a[href^=\"/\"]").click(function(e) {
        e.preventDefault();
        return app.router.navigate($(this).attr("href"), {
          trigger: true
        });
      });
      return $("form[data-remote]").submit(function(e) {
        var $form;
        e.preventDefault();
        $form = $(this);
        return app.api.request({
          method: $form.attr("method"),
          path: $form.attr("action"),
          data: ($form.data("data") ? $form.data("data") : $form.serializeJSON()),
          before: function(xhr) {
            return $form.find(".submit").addClass("disabled");
          },
          error: function(xhr) {
            if ($form.data("error") === "alert") {
              return app.showAlertErrors(xhr);
            } else {
              return app.showInlineErrors($form, xhr);
            }
          },
          after: function(xhr) {
            return $form.find(".submit").removeClass("disabled");
          }
        });
      });
    };

    return App;

  })();

  window.app = new App;

}).call(this);
(function() {
  var Api,
    __slice = [].slice;

  Api = (function() {
    var isFunc, params, setCsrf;

    function Api() {
      $.ajaxSetup({
        beforeSend: setCsrf,
        xhrFields: {
          withCredentials: true
        }
      });
    }

    Api.prototype.getStream = function() {
      var args;
      args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      return this.stream(params.apply(null, ["GET"].concat(__slice.call(args))));
    };

    Api.prototype.get = function() {
      var args;
      args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      return this.request(params.apply(null, ["GET"].concat(__slice.call(args))));
    };

    Api.prototype.post = function() {
      var args;
      args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      return this.request(params.apply(null, ["POST"].concat(__slice.call(args))));
    };

    Api.prototype.put = function() {
      var args;
      args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      return this.request(params.apply(null, ["PUT"].concat(__slice.call(args))));
    };

    Api.prototype["delete"] = function() {
      var args;
      args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      return this.request(params.apply(null, ["DELETE"].concat(__slice.call(args))));
    };

    Api.prototype.stream = function(params) {
      return $.ajax({
        url: params.path,
        type: params.method,
        data: params.data,
        dataType: "json",
        xhr: function() {
          var xhr;
          xhr = $.ajaxSettings.xhr();
          xhr.addEventListener("progress", ((function(_this) {
            return function(e) {
              var chunks;
              chunks = e.currentTarget.responseText.split("\n");
              e.chunks = Api.parseStream(chunks, _this.chunks).reverse();
              _this.chunks = chunks;
              if (e.chunks.error) {
                if (isFunc(params.error)) {
                  params.error(e.chunks.error);
                }
              } else {
                if (isFunc(params.success)) {
                  params.success(e.chunks);
                }
              }
              return _this.progress;
            };
          })(this)), false);
          return xhr;
        },
        beforeSend: function(xhr) {
          setCsrf(xhr);
          if (isFunc(params.before)) {
            return params.before(xhr);
          }
        },
        success: function(data) {
          if (data.error) {
            if (isFunc(params.error)) {
              params.error(data.error);
            }
          } else {
            if (isFunc(params.success)) {
              params.success(data);
            }
          }
          if ((data != null ? data.location : void 0) != null) {
            return window.location.href = data.location;
          }
        },
        complete: function(xhr) {
          if (isFunc(params.after)) {
            return params.after(xhr);
          }
        }
      });
    };

    Api.prototype.request = function(params) {
      return $.ajax({
        url: params.path,
        type: params.method,
        data: params.data,
        dataType: "json",
        beforeSend: function(xhr) {
          setCsrf(xhr);
          if (isFunc(params.before)) {
            return params.before(xhr);
          }
        },
        success: function(data) {
          if (isFunc(params.success)) {
            params.success(data);
          }
          if ((data != null ? data.location : void 0) != null) {
            return window.location.href = data.location;
          }
        },
        error: function(xhr) {
          if (isFunc(params.error)) {
            return params.error(xhr);
          }
        },
        complete: function(xhr) {
          if (isFunc(params.after)) {
            return params.after(xhr);
          }
        }
      });
    };

    setCsrf = function(xhr) {
      return xhr.setRequestHeader("X_CSRF_TOKEN", $("meta[name=\"_csrf\"]").attr("content"));
    };

    isFunc = function(obj) {
      return typeof obj === "function";
    };

    params = function() {
      return {
        method: arguments[0],
        path: arguments[1],
        data: arguments[2] || {},
        before: arguments[3],
        success: arguments[4],
        error: arguments[5],
        after: arguments[6]
      };
    };

    Api.parseStream = function(chunks, stream) {
      if (stream == null) {
        stream = [];
      }
      return _.compact(_.map(_.difference(chunks, stream), (function(s) {
        var c, error;
        try {
          return c = JSON.parse(s);
        } catch (_error) {
          error = _error;
          return null;
        } finally {
          if (_.isObject(c) && !_.isEmpty(c)) {
            return c;
          } else {
            return null;
          }
        }
      })));
    };

    return Api;

  })();

  app.api = new Api;

}).call(this);
(function() {
  var Client,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Client = (function(_super) {
    __extends(Client, _super);

    function Client() {
      return Client.__super__.constructor.apply(this, arguments);
    }

    Client.prototype.name = "client";

    Client.prototype.urlRoot = "/api/clients";

    Client.prototype.idAttribute = "uuid";

    Client.prototype.parse = function() {
      var json;
      json = Client.__super__.parse.apply(this, arguments);
      json.name = json.domain;
      return json;
    };

    Client.prototype.validate = function(attrs, options) {
      var errors;
      errors = app.jjv.validate(Client.schema, attrs);
      if (errors) {
        delete errors.validation.apikey;
        delete errors.validation.secret_hash;
        if (_.isEmpty(errors.validation)) {
          return;
        }
      }
      return errors;
    };

    Client.prototype.code = function() {
      if (this.get("uuid")) {
        return JSON.stringify(this.pick('domain', 'acl', 'apikey', 'credentials'), null, 2);
      } else {
        return JSON.stringify(_.omit(Client.schema.properties, 'uuid', 'apikey', 'secret_hash', 'sessions'), null, 2);
      }
    };

    Client.prototype.toJSON = function(options) {
      var json;
      json = Client.__super__.toJSON.apply(this, arguments);
      return _.pick(json, 'uuid', 'domain', 'acl');
    };

    return Client;

  })(Backbone.Model);

  app.models.Client = Client;

}).call(this);
(function() {
  var Clients,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Clients = (function(_super) {
    __extends(Clients, _super);

    function Clients() {
      return Clients.__super__.constructor.apply(this, arguments);
    }

    Clients.prototype.name = "clients";

    Clients.prototype.model = app.models.Client;

    Clients.prototype.url = "/api/clients";

    Clients.prototype.query = {
      select: ["uuid,domain"]
    };

    return Clients;

  })(Backbone.Collection);

  app.collections.Clients = Clients;

}).call(this);
(function() {
  var Model,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Model = (function(_super) {
    __extends(Model, _super);

    function Model() {
      return Model.__super__.constructor.apply(this, arguments);
    }

    Model.prototype.name = "model";

    Model.prototype.urlRoot = "/api/models";

    Model.prototype.idAttribute = "uuid";

    Model.prototype.validate = function(attrs, options) {
      var errors;
      errors = app.jjv.validate(Model.schema, attrs);
      if (errors) {
        delete errors.validation.table_schema;
        if (_.isEmpty(errors.validation)) {
          return;
        }
      }
      return errors;
    };

    Model.prototype.code = function() {
      var _ref;
      if (this.get("uuid")) {
        return JSON.stringify(this.pick('name', 'schema', 'indexes', 'hooks'), null, 2);
      } else {
        return JSON.stringify(_.omit(Model != null ? (_ref = Model.schema) != null ? _ref.properties : void 0 : void 0, 'uuid'), null, 2);
      }
    };

    Model.prototype.toJSON = function(options) {
      var json;
      json = Model.__super__.toJSON.apply(this, arguments);
      json = _.pick(json, 'uuid', 'name', 'schema', 'indexes', 'hooks');
      json['table_schema'] = "public";
      return json;
    };

    return Model;

  })(Backbone.Model);

  app.models.Model = Model;

}).call(this);
(function() {
  var Models,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Models = (function(_super) {
    __extends(Models, _super);

    function Models() {
      return Models.__super__.constructor.apply(this, arguments);
    }

    Models.prototype.name = "models";

    Models.prototype.model = app.models.Model;

    Models.prototype.url = "/api/models";

    Models.prototype.query = {
      select: ["uuid,name"],
      where: {
        table_schema: "public"
      }
    };

    return Models;

  })(Backbone.Collection);

  app.collections.Models = Models;

}).call(this);
(function() {
  var Template,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Template = (function(_super) {
    __extends(Template, _super);

    function Template() {
      return Template.__super__.constructor.apply(this, arguments);
    }

    Template.prototype.name = "model";

    Template.prototype.urlRoot = "/api/templates";

    Template.prototype.idAttribute = "uuid";

    Template.prototype.parse = function() {
      var json;
      json = Template.__super__.parse.apply(this, arguments);
      json.name = json.filename;
      return json;
    };

    Template.prototype.validate = function(attrs, options) {
      return app.jjv.validate(Template.schema, attrs);
    };

    Template.prototype.meta = function() {
      var _ref;
      if (this.get("uuid")) {
        return JSON.stringify(this.pick('filename', 'layout', 'data_bind'), null, 2);
      } else {
        return JSON.stringify(_.omit(Template != null ? (_ref = Template.schema) != null ? _ref.properties : void 0 : void 0, 'uuid', 'body'), null, 2);
      }
    };

    Template.prototype.toJSON = function(options) {
      var json;
      json = Template.__super__.toJSON.apply(this, arguments);
      return _.pick(json, 'uuid', 'filename', 'body', 'layout', 'data_bind');
    };

    return Template;

  })(Backbone.Model);

  app.models.Template = Template;

}).call(this);
(function() {
  var Templates,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Templates = (function(_super) {
    __extends(Templates, _super);

    function Templates() {
      return Templates.__super__.constructor.apply(this, arguments);
    }

    Templates.prototype.name = "templates";

    Templates.prototype.model = app.models.Template;

    Templates.prototype.url = "/api/templates";

    Templates.prototype.query = {
      select: ["uuid,filename"]
    };

    return Templates;

  })(Backbone.Collection);

  app.collections.Templates = Templates;

}).call(this);
(function() {
  var Router, render, renderForm, renderHome, renderList;

  Router = Backbone.Router.extend({
    routes: {
      "": "home",
      "signin": "signin",
      "signout": "signout",
      "live": "live",
      "search": "search",
      ":collection": "index",
      ":collection/new": "new",
      ":collection/:uuid/edit": "edit"
    },
    signin: function() {
      var _ref;
      if ((_ref = app.view) != null) {
        _ref.remove();
      }
      return app.view = render("Page", {
        id: "signin"
      });
    },
    signout: function() {
      return app.api["delete"]("/signout");
    },
    home: function() {
      return renderHome();
    },
    live: function() {
      var _ref;
      app.activeMeniItems = ["live", null];
      if ((_ref = app.view) != null) {
        _ref.remove();
      }
      return app.view = render("Live", {
        id: "live",
        partials: ["nav", "table"]
      });
    },
    search: function() {
      var _ref;
      app.activeMeniItems = ["search", null];
      if ((_ref = app.view) != null) {
        _ref.remove();
      }
      return app.view = render("Search", {
        id: "search",
        partials: ["nav", "table"]
      });
    },
    index: function(cid) {
      return renderList(cid);
    },
    'new': function(cid) {
      return renderForm(cid);
    },
    edit: function(cid, uuid) {
      return renderForm(cid, uuid);
    }
  }, renderHome = function() {
    var _ref;
    if ((_ref = app.view) != null) {
      _ref.remove();
    }
    return app.view = render("Page", {
      id: "home",
      partials: ["nav"]
    });
  }, renderList = function(cid) {
    var _base, _ref, _ref1, _ref2;
    if (((_ref = app.view) != null ? _ref.id : void 0) !== "home") {
      renderHome();
    }
    if ((_ref1 = app.view) != null) {
      if ((_ref2 = _ref1.list) != null) {
        _ref2.remove();
      }
    }
    app.activeMeniItems = [cid, null];
    (_base = app.collections)[cid] || (_base[cid] = new app.collections[cid.titleize()]());
    return app.view.list = render("List", {
      collection: app.collections[cid]
    });
  }, renderForm = function(cid, uuid) {
    var formOrEditor, _ref, _ref1, _ref2, _ref3;
    if ((_ref = app.view) != null) {
      if ((_ref1 = _ref.list) != null) {
        if ((_ref2 = _ref1.form) != null) {
          _ref2.remove();
        }
      }
    }
    if (((_ref3 = app.view) != null ? _ref3.list : void 0) == null) {
      renderList(cid);
    }
    app.activeMeniItems = [cid, uuid || "new"];
    formOrEditor = cid === "templates" ? "Editor" : "Form";
    return app.view.list.form = render(formOrEditor, {
      collection: app.collections[cid],
      model: new app.models[cid.classify().toString()]({
        uuid: uuid
      })
    });
  }, render = function(view, options) {
    return view = new app.views[view](options);
  });

  app.router = new Router;

}).call(this);
(function() {
  var D3,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  D3 = (function(_super) {
    __extends(D3, _super);

    function D3() {
      return D3.__super__.constructor.apply(this, arguments);
    }

    D3.prototype.className = "flex-20 d3-container";

    D3.prototype.d3select = ".d3-container";

    D3.prototype.initialize = function(options) {
      this.options = options != null ? options : null;
      return this.render();
    };

    D3.prototype.render = function() {
      this.draw();
      app.postRender();
      return this;
    };

    D3.prototype.draw = function() {};

    D3.prototype.resize = function() {};

    D3.prototype.width = function() {
      return $(window).innerWidth() - $(".fix-96").width();
    };

    D3.prototype.height = function() {
      return $(window).innerHeight() - $(".search-header").height();
    };

    return D3;

  })(Backbone.View);

  app.views.D3 = D3;

}).call(this);
(function() {
  var Bar,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Bar = (function(_super) {
    __extends(Bar, _super);

    function Bar() {
      return Bar.__super__.constructor.apply(this, arguments);
    }

    Bar.prototype.draw = function() {
      var barPadding, dataset, h, svg, textHeight, w, yScale;
      dataset = this.dataset;
      barPadding = 1;
      textHeight = 24;
      w = this.width();
      h = this.height();
      svg = d3.select(".d3-container").append("svg").attr("width", w).attr("height", h);
      yScale = d3.scale.linear().domain([
        0, d3.max(dataset, function(d) {
          return d[1];
        })
      ]).range([0, h - textHeight]);
      svg.selectAll("rect").data(this.dataset).enter().append("rect").attr("x", function(d, i) {
        return i * (w / dataset.length);
      }).attr("y", function(d, i) {
        return h - yScale(d[1]);
      }).attr("width", function(d, i) {
        return w / dataset.length - barPadding;
      }).attr("height", function(d, i) {
        return yScale(d[1]);
      }).attr("fill", function(d) {
        return "rgba(0,118,223," + (0.1 + yScale(d[1]) / h) + ")";
      });
      return svg.selectAll("text").data(dataset).enter().append("text").text(function(d) {
        return "" + d[0] + ": " + d[1];
      }).attr("x", function(d, i) {
        return i * (w / dataset.length) + (w / dataset.length - barPadding) / 2;
      }).attr("y", function(d, i) {
        return h - yScale(d[1]) - 2;
      }).attr("text-anchor", "middle").attr("font-family", "sans-serif").attr("font-size", "10px");
    };

    return Bar;

  })(app.views.D3);

  app.views.Bar = Bar;

}).call(this);
(function() {
  var Buble,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Buble = (function(_super) {
    var collide;

    __extends(Buble, _super);

    function Buble() {
      this.hide_details = __bind(this.hide_details, this);
      this.show_details = __bind(this.show_details, this);
      this.move_towards_center = __bind(this.move_towards_center, this);
      this.tick = __bind(this.tick, this);
      this.start = __bind(this.start, this);
      this.setColumn = __bind(this.setColumn, this);
      return Buble.__super__.constructor.apply(this, arguments);
    }

    Buble.prototype.initialize = function(options) {
      this.options = options != null ? options : null;
      this.data = _.map(this.options.data, function(d) {
        return d.data;
      });
      this.columns = [];
      app.view.$el.find(".filters .filter.active").removeClass(".active");
      return app.view.$el.find(".filters .filter").on("click", this.setColumn);
    };

    Buble.prototype.setColumn = function(e) {
      var name;
      e.preventDefault();
      e.stopPropagation();
      name = e.currentTarget.text;
      this.columns.push(name);
      if (this.columns.length === 2) {
        app.view.$el.find(".filters .filter").off("click", this.setColumn);
        return this.render();
      }
    };

    Buble.prototype.draw = function() {
      var columns, height, max_amount, radius_scale, that, width;
      columns = this.columns;
      width = this.width();
      height = this.height();
      this.nodes = _.map(this.data, function(d) {
        return {
          label: d[columns[0]],
          value: d[columns[1]],
          x: Math.random() * 900,
          y: Math.random() * 800
        };
      });
      this.center = {
        x: width / 2,
        y: height / 2
      };
      this.layout_gravity = -0.01;
      this.damper = 0.1;
      this.vis = null;
      this.circles = null;
      this.force = null;
      this.fill_color = d3.scale.ordinal().domain(["low", "medium", "high"]).range(["#d84b2a", "#beccae", "#7aa25c"]);
      max_amount = d3.max(this.nodes, function(d) {
        return d.value;
      });
      radius_scale = d3.scale.pow().exponent(0.5).domain([0, max_amount]).range([2, height / 4]);
      this.nodes = _.map(this.nodes, function(n) {
        n.radius = radius_scale(n.value);
        n.tx = radius_scale(max_amount) + Math.random() * (width - radius_scale(max_amount));
        n.ty = radius_scale(max_amount) + Math.random() * (height - radius_scale(max_amount));
        return n;
      });
      this.nodes.sort(function(a, b) {
        return b.value - a.value;
      });
      this.vis = d3.select(this.d3select).append("svg").attr("width", width).attr("height", height).attr("id", "svg_vis").attr("class", "shrink");
      this.circles = this.vis.selectAll("circle").data(this.nodes, function(d) {
        return d.label;
      });
      that = this;
      this.circles.enter().append("circle").attr("r", 0).attr("fill", (function(_this) {
        return function(d) {
          return _this.fill_color(d.label);
        };
      })(this)).attr("stroke-width", 2).attr("stroke", (function(_this) {
        return function(d) {
          return d3.rgb(_this.fill_color(d.label)).darker();
        };
      })(this)).on("mouseover", function(d, i) {
        return that.show_details(d, i, this);
      }).on("mouseout", function(d, i) {
        return that.hide_details(d, i, this);
      });
      this.circles.transition().duration(2000).attr("r", function(d) {
        return d.radius;
      });
      return this.start();
    };

    Buble.prototype.charge = function(d) {
      return -Math.pow(d.radius, 2.0) / 8;
    };

    Buble.prototype.start = function() {
      return this.force = d3.layout.force().nodes(this.nodes).size([this.width(), this.height()]).gravity(this.layout_gravity).charge(this.charge).friction(0.9).on("tick", this.tick).start();
    };

    Buble.prototype.tick = function(e) {
      var i, n, q;
      this.circles.each(this.move_towards_center(e.alpha)).attr("cx", (function(_this) {
        return function(d) {
          return Math.max(d.radius, Math.min(_this.width() - d.radius, d.x));
        };
      })(this)).attr("cy", (function(_this) {
        return function(d) {
          return Math.max(d.radius, Math.min(_this.height() - d.radius, d.y));
        };
      })(this));
      q = d3.geom.quadtree(this.circles);
      i = 0;
      n = this.circles.length;
      while (++i < n) {
        q.visit(collide(this.circles[i]));
      }
      return this.circles.attr("cx", function(d) {
        return d.x;
      }).attr("cy", function(d) {
        return d.y;
      });
    };

    Buble.prototype.move_towards_center = function(alpha) {
      return (function(_this) {
        return function(d) {
          d.x = d.x + (_this.center.x - d.x) * (_this.damper + 0.02) * alpha;
          return d.y = d.y + (_this.center.y - d.y) * (_this.damper + 0.02) * alpha;
        };
      })(this);
    };

    Buble.prototype.show_details = function(data, i, element) {
      return d3.select(element).attr("stroke", "black");
    };

    Buble.prototype.hide_details = function(data, i, element) {
      return d3.select(element).attr("stroke", (function(_this) {
        return function(d) {
          return d3.rgb(_this.fill_color(d.label)).darker();
        };
      })(this));
    };

    collide = function(node) {
      var nx1, nx2, ny1, ny2, r;
      r = node.radius;
      nx1 = node.x - r;
      nx2 = node.x + r;
      ny1 = node.y - r;
      ny2 = node.y + r;
      return function(quad, x1, y1, x2, y2) {
        var l, x, y;
        if (quad.point && (quad.point !== node)) {
          x = node.x - quad.point.x;
          y = node.y - quad.point.y;
          l = Math.sqrt(x * x + y * y);
          r = node.radius + quad.point.radius;
          if (l < r) {
            l = (l - r) / l * .5;
            node.x -= x *= l;
            node.y -= y *= l;
            quad.point.x += x;
            quad.point.y += y;
          }
        }
        return x1 > nx2 || x2 < nx1 || y1 > ny2 || y2 < ny1;
      };
    };

    return Buble;

  })(app.views.D3);

  app.views.Buble = Buble;

}).call(this);
(function() {
  var Histogram,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Histogram = (function(_super) {
    __extends(Histogram, _super);

    function Histogram() {
      this.setColumn = __bind(this.setColumn, this);
      return Histogram.__super__.constructor.apply(this, arguments);
    }

    Histogram.prototype.className = "fixed flex-container flex-center z4 flash-container bg-darken-4";

    Histogram.prototype.events = {
      "click .close": "remove"
    };

    Histogram.prototype.initialize = function(options) {
      this.options = options != null ? options : null;
      this.data = _.map(this.options.data, function(d) {
        return d.data;
      });
      this.columns = [];
      app.view.$el.find(".filters .filter.active").removeClass(".active");
      app.flash("Select a data column for X Axis");
      return app.view.$el.find(".filters .filter").on("click", this.setColumn);
    };

    Histogram.prototype.setColumn = function(e) {
      var name;
      name = e.currentTarget.text;
      if (!_.isNumber(this.data[0][name])) {
        app.flash("Please select a numerical data");
        return false;
      }
      this.columns.push(name);
      if (this.columns.length === 1) {
        return app.flash("Now please select a data column for Y Axis");
      } else if (this.columns.length === 2) {
        app.view.$el.find(".filters .filter").off("click", this.setColumn);
        return this.render();
      }
    };

    Histogram.prototype.draw = function() {
      var bar, data, formatCount, height, margin, svg, values, width, x, xAxis, y;
      this.columns[0] = _.pluck(this.data, this.columns[0]);
      this.columns[1] = _.pluck(this.data, this.columns[1]);
      values = this.columns[1];
      formatCount = d3.format(",.0f");
      margin = {
        top: 10,
        right: 30,
        bottom: 30,
        left: 30
      };
      width = this.width() - margin.left - margin.right;
      height = this.height() - margin.top - margin.bottom;
      x = d3.scale.linear().domain([0, _.max(this.columns[0])]).range([0, width]);
      data = d3.layout.histogram().bins(x.ticks(20))(values);
      y = d3.scale.linear().domain([
        0, d3.max(data, function(d) {
          return d.y;
        })
      ]).range([height, 0]);
      xAxis = d3.svg.axis().scale(x).orient("bottom");
      svg = d3.select(this.d3select).append("svg").attr("width", width + margin.left + margin.right).attr("height", height + margin.top + margin.bottom).append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");
      bar = svg.selectAll(".bar").data(data).enter().append("g").attr("class", "bar").attr("transform", function(d) {
        return "translate(" + x(d.x) + "," + y(d.y) + ")";
      });
      bar.append("rect").attr("x", 1).attr("width", x(data[0].dx) - 1).attr("height", function(d) {
        return height - y(d.y);
      });
      bar.append("text").attr("dy", ".75em").attr("y", 6).attr("x", x(data[0].dx) / 2).attr("text-anchor", "middle").text(function(d) {
        return formatCount(d.y);
      });
      return svg.append("g").attr("class", "x axis").attr("transform", "translate(0," + height + ")").call(xAxis);
    };

    return Histogram;

  })(app.views.D3);

  app.views.Histogram = Histogram;

}).call(this);
(function() {
  var Pie,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Pie = (function(_super) {
    var brightness, stash;

    __extends(Pie, _super);

    function Pie() {
      this.arcTween = __bind(this.arcTween, this);
      this.renderText = __bind(this.renderText, this);
      this.draw = __bind(this.draw, this);
      this.resize = __bind(this.resize, this);
      this.setColumn = __bind(this.setColumn, this);
      return Pie.__super__.constructor.apply(this, arguments);
    }

    Pie.prototype.initialize = function(options) {
      var $bg;
      this.options = options != null ? options : null;
      this.data = _.map(this.options.data, function(d) {
        return d.data;
      });
      this.columns = [];
      this.zX = d3.scale.linear().range([0, this.radius]);
      this.zY = d3.scale.linear().range([0, this.radius]);
      this.node = null;
      this.$tableNameFilterBtn = app.view.$el.find(".filters .filter:first-child");
      this.$tableNameFilterBtn.addClass("hidden");
      this.$activeFiltersStash = app.view.$el.find(".filters .filter.active");
      app.view.$el.find(".filters .filter.active").removeClass("active").removeClass("bg-red").addClass("bg-mid-gray");
      $bg = $("<div class=\"filterbg shrink bg-darken-4 absolute top-0\">").insertBefore(app.view.$el.find(".filters"));
      app.flash("Please select a label column then a value column", null, 2);
      app.view.$el.find(".filters .filter").on("click", this.setColumn);
      return $(window).on("resize", this.resize);
    };

    Pie.prototype.remove = function() {
      $(window).off("resize", this.resize);
      this.$tableNameFilterBtn.removeClass("hidden");
      this.$activeFiltersStash.addClass("active").addClass("bg-red").removeClass("bg-mid-gray");
      return Pie.__super__.remove.apply(this, arguments);
    };

    Pie.prototype.setColumn = function(e) {
      var name;
      e.preventDefault();
      e.stopPropagation();
      name = e.currentTarget.text;
      $(e.currentTarget).addClass("active").addClass("bg-red").removeClass("bg-mid-gray");
      this.columns.push(name);
      if (this.columns.length === 2) {
        $(".filterbg").remove();
        app.view.$el.find(".filters .filter").off("click", this.setColumn);
        return this.render();
      }
    };

    Pie.prototype.resize = function() {
      var height, width;
      if (this.svg) {
        width = this.width();
        height = this.height();
        this.radius = Math.min(width, height) / 2.2;
        this.$el.css({
          "height": height
        });
        d3.select("svg").attr("height", height);
        this.svg.attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
        this.partition.size([2 * Math.PI, this.radius * this.radius]);
        this.path.data(this.partition.value(function(d) {
          return d.value;
        }).nodes).transition().duration(0).attrTween("d", this.arcTween);
        return this.renderText(true);
      }
    };

    Pie.prototype.draw = function() {
      var color, columns, data, height, root, textEnter, width;
      columns = this.columns;
      width = this.width();
      height = this.height();
      this.radius = Math.min(width, height) / 2.2;
      color = d3.scale.category20c();
      data = _.map(this.data, function(d) {
        return {
          name: d[columns[0]],
          value: d[columns[1]]
        };
      });
      root = {
        name: "root",
        children: data
      };
      this.svg = d3.select(this.d3select).append("svg").attr("width", "100%").attr("height", height).append("g").attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
      this.partition = d3.layout.partition().sort(null).size([2 * Math.PI, this.radius * this.radius]).value(function(d) {
        return d.value;
      });
      this.arc = d3.svg.arc().startAngle(function(d) {
        return d.x;
      }).endAngle(function(d) {
        return d.x + d.dx;
      }).innerRadius(function(d) {
        return Math.sqrt(d.y);
      }).outerRadius(function(d) {
        return Math.sqrt(d.y + d.dy);
      });
      this.path = this.svg.datum(root).selectAll("path").data(this.partition.nodes).enter().append("path", function(d, i) {
        return "svg:text#t" + i;
      }).attr("display", function(d) {
        if (d.depth) {
          return null;
        } else {
          return "none";
        }
      }).attr("d", this.arc).attr("id", function(d, i) {
        return "" + i;
      }).style("stroke", "#fff").style("fill", function(d) {
        return color(d.name);
      }).style("fill-rule", "evenodd").on("mouseover", this.rollOver).on("mouseout", this.rollOut).each(stash);
      textEnter = this.renderText();
      return textEnter.append("tspan").attr("id", function(d, i) {
        return "tsp-" + i;
      }).attr("class", "pie-span").attr("fill-opacity", 0).attr("x", 0).style("fill", function(d) {
        return color(d.name);
      }).text(function(d) {
        if (d.depth) {
          return "" + d.name + " " + d.value;
        } else {
          return "";
        }
      });
    };

    Pie.prototype.renderText = function(resize) {
      var padding, text, textEnter, x, y;
      if (resize == null) {
        resize = false;
      }
      padding = 16;
      x = d3.scale.linear().domain([0, 2 * Math.PI]).range([0, 2 * Math.PI]);
      y = d3.scale.linear().domain([0, this.radius * this.radius]).range([0, this.radius]);
      text = this.svg.selectAll("text").data(this.partition.nodes);
      textEnter = resize ? text.selectAll("text") : text.enter().append("text");
      return textEnter.attr("text-anchor", function(d) {
        if (x(d.x + d.dx / 2) > Math.PI) {
          return "start";
        } else {
          return "end";
        }
      }).attr("class", function(d) {
        if (x(d.x + d.dx / 2) > Math.PI) {
          return "";
        } else {
          return "tright";
        }
      }).attr("dy", ".2em").attr("transform", function(d) {
        var angle;
        angle = x(d.x + d.dx / 2) * 180 / Math.PI - 90;
        return "rotate(" + angle + ")translate(" + (y(d.y) + padding) + ")rotate(" + (angle > 90 ? -180 : 0) + ")";
      });
    };

    brightness = function(rgb) {
      return rgb.r * .299 + rgb.g * .587 + rgb.b * .114;
    };

    stash = function(d) {
      d.x0 = d.x;
      d.dx0 = d.dx;
    };

    Pie.prototype.rollOver = function() {
      return d3.select("tspan#tsp-" + this.id).transition().ease("in").duration(100).attr("fill-opacity", 1);
    };

    Pie.prototype.rollOut = function() {
      return d3.select("tspan#tsp-" + this.id).transition().ease("out").duration(100).attr("fill-opacity", 0);
    };

    Pie.prototype.arcTween = function(a) {
      var i;
      i = d3.interpolate({
        x: a.x0,
        dx: a.dx0
      }, a);
      return (function(_this) {
        return function(t) {
          var b;
          b = i(t);
          a.x0 = b.x;
          a.dx0 = b.dx;
          return _this.arc(b);
        };
      })(this);
    };

    return Pie;

  })(app.views.D3);

  app.views.Pie = Pie;

}).call(this);
(function() {
  var Form,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Form = (function(_super) {
    var onError, onSave;

    __extends(Form, _super);

    function Form() {
      return Form.__super__.constructor.apply(this, arguments);
    }

    Form.prototype.className = "flex flex-5";

    Form.prototype.initialize = function(options) {
      this.options = options != null ? options : null;
      Form.__super__.initialize.apply(this, arguments);
      this.listenTo(this.model, 'change', this.render);
      this.listenTo(this.model, 'destroy', this.close);
      this.listenTo(this.model, 'invalid', this.showValidationErrors);
      return app.api.get("/api/models", {
        select: ["schema"],
        where: {
          name: this.model.constructor.name
        },
        limit: 1
      }, null, (function(_this) {
        return function(data) {
          _this.model.constructor.schema = data[0].schema;
          if (_this.model.get("uuid") != null) {
            return _this.model.fetch();
          } else {
            _this.render();
            return _this.edit();
          }
        };
      })(this));
    };

    Form.prototype.events = {
      "click .close": "close",
      "click .edit": "edit",
      "click .save": "save",
      "click .destroy": "destroy",
      "click .error-close": "closeError",
      "keydown textarea": "onKeyDown"
    };

    Form.prototype.template = function(data, partials) {
      if (partials == null) {
        partials = {};
      }
      return app.getTemplate("form")(data, partials);
    };

    Form.prototype.render = function() {
      this.$el.html(this.template(this.model));
      if (this.$container == null) {
        this.$container = app.view.$el.find(".flex-container");
      }
      this.$container.remove(this.className);
      this.$container.append(this.$el);
      this.editor = new Behave({
        textarea: this.$el.find(".code")[0],
        replaceTab: true,
        softTabs: true,
        tabSize: 2,
        autoOpen: true,
        overwrite: true,
        autoStrip: true,
        autoIndent: true,
        fence: true
      });
      app.postRender();
      this.delegateEvents();
      return this;
    };

    Form.prototype.close = function() {
      this.remove();
      app.router.navigate(this.collection.name, {
        silent: true
      });
      return this;
    };

    Form.prototype.edit = function() {
      this.$el.find(".save").toggleClass('hidden');
      this.$el.find(".edit").toggleClass('hidden');
      this.$el.find("form").toggleClass("bg-dark-gray");
      this.$el.find("textarea").removeAttr("disabled");
      return this;
    };

    Form.prototype.showValidationErrors = function(model, errors) {
      var error, error_list, field, _ref;
      error_list = [];
      _ref = errors.validation;
      for (field in _ref) {
        error = _ref[field];
        error_list.push("" + field + " " + (JSON.stringify(error, null, 2)));
      }
      app.flash("<pre class=\"bg-red white\">" + (error_list.join("\n")) + "</pre>", "bg-red white");
      return this;
    };

    Form.prototype.save = function() {
      var error, params;
      try {
        params = JSON.parse(this.$el.find("textarea").val());
      } catch (_error) {
        error = _error;
        return app.flash("Malformed JSON: " + error, "bg-red white");
      }
      if (typeof params === "string") {
        return app.flash("Malformed JSON", "bg-red white");
      }
      this.model.save(params, {
        wait: true,
        success: onSave,
        error: onError
      });
      return this;
    };

    Form.prototype.destroy = function() {
      if (confirm("Are you sure to destroy")) {
        this.model.destroy();
        this.collection.remove(this.model);
      }
      return this;
    };

    Form.prototype.closeError = function() {
      this.$el.find(".errors").addClass("hidden");
      return this;
    };

    Form.prototype.onKeyDown = function(e) {
      if ((e.ctrlKey || e.metaKey) && e.keyCode === 83) {
        e.preventDefault();
        this.save();
      }
      return this;
    };

    onSave = function(model) {
      app.router.navigate("" + app.view.list.collection.name + "/" + (model.get('uuid')) + "/edit", {
        silent: true
      });
      app.view.list.collection.add(model, {
        merge: true
      });
      return app.flash("Saved!", "bg-green white", 2);
    };

    onError = function(model, response, options) {
      var errors, field, messages;
      errors = response.responseJSON;
      messages = [];
      for (field in errors) {
        messages.push("" + field + " " + (JSON.stringify(errors[field], null, 2)));
      }
      return app.flash("<pre class=\"bg-red white\">" + (messages.join("\n")) + "</pre>", "bg-red white");
    };

    return Form;

  })(Backbone.View);

  app.views.Form = Form;

}).call(this);
(function() {
  var Editor,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Editor = (function(_super) {
    var onError, onSave;

    __extends(Editor, _super);

    function Editor() {
      return Editor.__super__.constructor.apply(this, arguments);
    }

    Editor.prototype.className = "flex flex-5";

    Editor.prototype.events = {
      "click .close": "close",
      "click .edit": "edit",
      "click .save": "save",
      "click .destroy": "destroy",
      "click .error-close": "closeError",
      "keydown textarea": "onKeyDown",
      "click .tabs a": "toggleSource"
    };

    Editor.prototype.template = function(data, partials) {
      if (partials == null) {
        partials = {};
      }
      return app.getTemplate("editor")(data, partials);
    };

    Editor.prototype.render = function() {
      this.$el.html(this.template(this.model));
      if (this.$container == null) {
        this.$container = app.view.$el.find(".flex-container");
      }
      this.$container.remove(this.className);
      this.$container.append(this.$el);
      this.editorCode = new Behave({
        textarea: this.$el.find("textarea[name=meta]")[0],
        replaceTab: true,
        softTabs: true,
        tabSize: 2,
        autoOpen: true,
        overwrite: true,
        autoStrip: true,
        autoIndent: true,
        fence: true
      });
      this.editorBody = new Behave({
        textarea: this.$el.find("textarea[name=body]")[0],
        replaceTab: true,
        softTabs: true,
        tabSize: 2,
        autoOpen: true,
        overwrite: true,
        autoStrip: true,
        autoIndent: true,
        fence: true
      });
      app.postRender();
      this.delegateEvents();
      return this;
    };

    Editor.prototype.save = function() {
      var error, params;
      try {
        params = JSON.parse(this.$el.find("textarea[name=meta]").val());
        params.body = this.$el.find("textarea[name=body]").val();
      } catch (_error) {
        error = _error;
        return app.flash("Malformed JSON: " + error, "bg-red white");
      }
      if (typeof params === "string") {
        return app.flash("Malformed JSON", "bg-red white");
      }
      console.log(params);
      this.model.save(params, {
        wait: true,
        success: onSave,
        error: onError
      });
      return this;
    };

    Editor.prototype.toggleSource = function(e) {
      var $a, current;
      e.preventDefault();
      $a = $(e.currentTarget);
      current = $a.attr("ref");
      this.$el.find('textarea').addClass('hidden');
      this.$el.find("textarea[name=" + current + "]").removeClass("hidden");
      this.$el.find(".tabs a").removeClass("is-active");
      $a.addClass("is-active");
      return this.$el.find("textarea.code").trigger('autosize.resize');
    };

    onSave = function(model) {
      app.router.navigate("" + app.view.list.collection.name + "/" + (model.get('uuid')) + "/edit", {
        silent: true
      });
      app.view.list.collection.add(model, {
        merge: true
      });
      return app.flash("Saved!", "bg-green white", 2);
    };

    onError = function(model, response, options) {
      var errors, field, messages;
      errors = response.responseJSON;
      messages = [];
      for (field in errors) {
        messages.push("" + field + " " + (JSON.stringify(errors[field], null, 2)));
      }
      return app.flash("<pre class=\"bg-red white\">" + (messages.join("\n")) + "</pre>", "bg-red white");
    };

    return Editor;

  })(app.views.Form);

  app.views.Editor = Editor;

}).call(this);
(function() {
  var Flash,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Flash = (function(_super) {
    __extends(Flash, _super);

    function Flash() {
      this._remove = __bind(this._remove, this);
      return Flash.__super__.constructor.apply(this, arguments);
    }

    Flash.prototype.className = "fixed flex-container flex-center z4 flash-container bg-darken-4";

    Flash.prototype.events = {
      "click .close": "remove"
    };

    Flash.prototype.initialize = function(options) {
      this.options = options != null ? options : null;
      Flash.__super__.initialize.apply(this, arguments);
      this.render();
      if (this.options.timeout != null) {
        return setTimeout(this._remove, this.options.timeout * 1000);
      }
    };

    Flash.prototype._remove = function() {
      return this.remove();
    };

    Flash.prototype.template = function(data, partials) {
      if (data == null) {
        data = {};
      }
      if (partials == null) {
        partials = [];
      }
      partials = _.object(partials, _.map(partials, function(id) {
        return app.getTemplate(id)(data);
      }));
      return app.getTemplate('flash')(data, partials);
    };

    Flash.prototype.render = function() {
      var _ref, _ref1;
      this.$el.html(this.template((_ref = this.options) != null ? _ref.data : void 0, (_ref1 = this.options) != null ? _ref1.partials : void 0));
      app.$body.prepend(this.$el);
      return app.postRender();
    };

    return Flash;

  })(Backbone.View);

  app.views.Flash = Flash;

}).call(this);
(function() {
  var List,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  List = (function(_super) {
    __extends(List, _super);

    function List() {
      return List.__super__.constructor.apply(this, arguments);
    }

    List.prototype.className = "flex flex-2 overflow-auto border-right max-288";

    List.prototype.initialize = function(options) {
      this.options = options != null ? options : null;
      List.__super__.initialize.call(this);
      this.listenTo(this.collection, 'reset', this.render);
      this.listenTo(this.collection, 'remove', this.render);
      this.listenTo(this.collection, 'add', this.render);
      this.listenTo(this.collection, 'change', this.render);
      return this.collection.fetch({
        data: this.collection.query,
        reset: true
      });
    };

    List.prototype.template = function(data, partials) {
      if (data == null) {
        data = {};
      }
      if (partials == null) {
        partials = [];
      }
      return app.getTemplate("list")(data, partials);
    };

    List.prototype.render = function() {
      this.$el.html(this.template(this.collection));
      this.$el.insertAfter(app.view.$el.find(".flex-1"));
      app.postRender();
      return this;
    };

    List.prototype.remove = function() {
      var _ref;
      if ((_ref = this.form) != null) {
        _ref.remove();
      }
      return List.__super__.remove.call(this);
    };

    return List;

  })(Backbone.View);

  app.views.List = List;

}).call(this);
/*
 * StreamTable.js
 * version: 1.1.1 (17/12/2013)
 *
 * Licensed under the MIT:
 *   http://www.opensource.org/licenses/mit-license.php
 *
 * Copyright 2013 Jiren Patel[ jiren@joshsoftware.com ]
 *
 * Dependency:
 *  jQuery(v1.8 >=)
 */


(function(window, $) {

  'use strict';

  var StreamTable = function(container, opts, data) {
    return new _StreamTable(container, opts, data);
  };

  StreamTable.VERSION = '1.1.0';

  $.fn.stream_table = function (opts, data) {
    var $this = $(this);
    if ($this.data('st')) return;
    $this.data('st', new _StreamTable($this.selector, opts, data));
  };

  window.StreamTable = StreamTable;

  var _StreamTable = function(container, opts, data) {
    this.data = [];
    this.main_container = container;
    this.$container = $(container);
    this.opts = opts;
    this.view = this.opts.view;
    this.text_index = [];
    this.last_search_result = [];
    this.last_search_text = '';
    this.current_page = 0;
    this.textFunc = null;
    this.stream_after = (this.opts.stream_after || 2)*1000;
    this.timer = null;
    this.opts.callbacks = this.opts.callbacks || {};

    if (!this.view) $.error('Add view function in options.');

    if (this.$container.get(0).tagName == 'TABLE') this.$container = this.$container.find('tbody');

    this.initPagination(this.opts.pagination || {});
    this.addSearchBox();
    this.addPerPage();
    this.has_sorting =  $(this.main_container + ' [data-sort]').length > 0 ? true : false;

    if (this.has_sorting) {
      this.sorting_opts = {};
      this.records_index = [];
      this.last_search_record_index = [];
    }

    if (data) {
      data = this.addData(data);
      this.render(0);
    }

    this.bindEvents();
    this.bindSortingEvents();
    this.streamData(this.stream_after);
  }

  var _F = _StreamTable.prototype;

  _F.getIndex = function(){
    return this.last_search_text.length > 0 ? this.last_search_record_index : this.records_index
  };

  _F.getData = function(){
    return this.last_search_text.length > 0 ? this.last_search_result : this.data;
  };

  _F.dataLength = function(){
    return this.has_sorting ? this.getIndex().length : this.getData().length;
  }

  _F.initPagination = function(opts){
    this.paging_opts = $.extend({
      span: 5,
      prev_text: '&laquo;',
      next_text: '&laquo;',
      per_page_select: true,
      per_page_opts: [10,25,50]
    }, opts);

    var p_classes = ['st_pagination'];

    if (opts.container_class){
      p_classes = [].concat.apply(p_classes, [opts.container_class])
    }

    this.paging_opts.per_page = this.paging_opts.per_page_opts[0] || 10;
    this.paging_opts.container_class = p_classes.join(' ');
    this.paging_opts.ul_class = ['pagination', opts.ul_class].join(' ');
    this.paging_opts.per_page_class = ['st_per_page', opts.per_page_class].join(' ');
    this.opts.pagination = this.paging_opts;

    var html = '<div class="'+ this.paging_opts.container_class  +'"></div>';

    if(this.paging_opts.container){
      $(this.paging_opts.container).html(html);
    }else{
      $(this.main_container).after(html);
    }

    this.$pagination = $('.' + p_classes.join('.'));
  };

  _F.bindEvents = function(){
    var _self = this,
        search_box = this.opts.search_box;

    $(search_box).on('keyup', function(e){
      _self.search($(this).val());
    });

    $(search_box).on('keypress', function(e){
      if ( e.keyCode == 13 ) return false;
    });

    if (_self.paging_opts.per_page_select){
      $(_self.paging_opts.per_page_select).on('change', function(){
        _self.renderByPerPage($(this).val());
      });
    }

    _self.$pagination.on('click', 'a', function(e){
      var $this = $(this), page = parseInt($this.text()), current_page;

      if (page.toString() == 'NaN'){
        if ($this.hasClass('prev')) page = 'prev';
        else if ($this.hasClass('next')) page = 'next';
        else if ($this.hasClass('first')) page = 1;
        else if ($this.hasClass('last')) page = _self.pageCount();
      }

      current_page = _self.paginate(page);
      if (current_page >= 0) {
        $('.st_pagination .active').removeClass('active');
        $('.st_pagination li[data-page='+ current_page +']').addClass('active');
      }

      return false;
    });

  };

  _F.addSearchBox = function(){
    if (this.opts.search_box) return;
    $(this.main_container).before('<input name="search" type="text" id="st_search" class="st_search" placeholder="Search here...">');
    this.opts.search_box = '#st_search';
  };

  _F._makeTextFunc = function(record){
    var fields = this.opts.fields, cond_str = [], textFunc, is_array = false;

    if(typeof fields == 'function'){
       textFunc = fields;
    } else if (record.constructor == Object){
      fields = fields || Object.keys(record)

      for (var i = 0, l = fields.length; i < l; i++){
        cond_str.push("d."+ fields[i]);
      }
      eval("textFunc = function(d) { return (" + cond_str.join(" + ' ' + ") + "); }");
    }else{
      if (fields){
        for(var i = 0, l = fields.length; i < l ; i++){
          cond_str.push("d["+ fields[i] + "]");
        }
        eval("textFunc = function(d) { return (" + cond_str.join(" + ' ' + ") + "); }");
      }else{
        textFunc = function(d) {
          return d.join(' ');
        }
      }
    }

    return textFunc;
  };

  _F.buildTextIndex = function(data){
    var i = 0, l = data.length;

    if (!this.textFunc) {
      this.textFunc = this._makeTextFunc(data[0]);
    }

    for(i; i < l; i++){
      this.text_index.push(this.textFunc(data[i]).toUpperCase());
    }
  };

  _F.render = function(page){
    var i = (page * this.paging_opts.per_page),
        l = (i + this.paging_opts.per_page),
        eles = [],
        index,
        d = this.has_sorting ? this.getIndex() : this.getData();

    if (d.length < l) l = d.length;

    if (this.has_sorting){
      for (i; i < l; i++){
        eles.push(this.view(this.data[d[i]], (i+1)));
      }
    }else{
      for (i; i < l; i++){
        eles.push(this.view(d[i], (i+1)));
      }
    }

    this.$container.html(eles);
  };

  _F.clearAndBuildTextIndex = function(data){
    this.text_index = []
    this.buildTextIndex(data)
  };

  _F.search = function(text){
    var q = $.trim(text), count = 0;

    if (q == this.last_search_text) return;

    this.last_search_text = q;

    if(q.length == 0 ){
      this.render(0);
    }else{
      this.searchInData(q);
      this.render(0);
    }

    this.current_page = 0;
    this.renderPagination(this.pageCount(), this.current_page);
    this.execCallbacks('pagination');
  };

  _F.searchInData = function(text){
    var result = [],
        i = 0,
        l = this.text_index.length,
        t = text.toUpperCase(),
        d = this.has_sorting ? this.records_index : this.data;

    if(this.has_sorting){
      for (i; i < l; i++){
        if (this.text_index[i].indexOf(t) != -1) result.push(i);
      }
      this.last_search_record_index = result
    }else{
      for (i; i < l; i++){
        if (this.text_index[i].indexOf(t) != -1) result.push(this.data[i]);
      }
      this.last_search_result = result
    }

  };

  _F.addData = function(data){
    data = this.execCallbacks('before_add', data) || data;

    if (data.length){
      var i = this.data.length, l = data.length + i;

      this.buildTextIndex(data);
      this.data = this.data.concat(data);

      if(this.has_sorting){
        for(i; i < l; i++){
          this.records_index.push(i);
        }
      }

      if (this.last_search_text.length > 0){
        this.searchInData(this.last_search_text);
      }

      if (this.opts.auto_sorting && this.current_sorting){
        this.sort(this.current_sorting);
      }

      this.render(this.current_page);
      this.renderPagination(this.pageCount(), this.current_page);
      this.execCallbacks('after_add', data);
      this.execCallbacks('pagination');
    }

    return data;
  };

  _F.fetchData = function(){
    var _self = this, params = {q: this.last_search_text}

    if (this.opts.fetch_data_limit) {
      params['limit'] = this.opts.fetch_data_limit;
      params['offset'] = this.data.length;
    }

    $.getJSON(this.opts.data_url, params).done(function(data){
      data = _self.addData(data);

      if (params.limit != null && (!data || !data.length ) ) {
        _self.stopStreaming();
      }else{
        _self.setStreamInterval();
      }

    }).fail(function(e){
      _self.stopStreaming();
    });
  };

  _F.setStreamInterval = function(){
    var _self = this;
    if(_self.opts.stop_streaming == true) return;

    _self.timer = setTimeout(function(){
      _self.fetchData();
    }, _self.stream_after);
  };

  _F.stopStreaming = function(){
    this.opts.stop_streaming = true;
    if (this.timer) clearTimeout(this.timer);
  };

  _F.streamData = function(time){
    if (!this.opts.data_url) return;
    var _self = this, timer;

    _self.setStreamInterval();

    if(!_self.opts.fetch_data_limit) _self.stopStreaming();
  };

  _F.pageCount = function(){
    return Math.ceil(this.dataLength()/this.paging_opts.per_page);
  };

  //Render table rows for given page
  _F.paginate = function(page){
    var page_count = this.pageCount();

    if(page == 'prev'){
      page = this.current_page - 1;
    }else if (page == 'next'){
      page = this.current_page + 1;
    }else {
      page = page - 1;
    }

    if (page == this.current_page || page < 0 || page >= page_count) return;

    this.render(page);
    this.current_page = page;

    if (this.paging_opts.span <= page_count) this.renderPagination(page_count, this.current_page);

    this.execCallbacks('pagination');

    return this.current_page;
  };

  // Render Pagination call after new data added or search
  _F.renderPagination = function(page_count, current_page){
    var i = 0,
        l = page_count,
        links = [ '<ul class="'+ this.paging_opts.ul_class +'">'],
        span = this.paging_opts.span,
        center = Math.ceil(span/2);

    if (page_count > span){
      links.push('<li><a href="#" class="first">First</a></li>');
      if (current_page > (center - 1) ) i = current_page - center;
      if (current_page < (page_count - center - 1) ) l = i + span;
    }

    links.push('<li><a href="#" class="prev">'+ this.paging_opts.prev_text +'</a></li>');

    for(i; i < l; i++){
      if(current_page == i){
        links.push('<li class="active" data-page="'+ i +'"><a href="#" class="active" >'+ (i + 1) +'</a></li>');
      }else{
        links.push('<li  data-page="'+ i +'"><a href="#">'+ (i + 1) +'</a></li>');
      }
    }

    links.push('<li><a href="#" class="next">'+ this.paging_opts.next_text + '</a></li>');

    if (page_count > this.paging_opts.span) links.push('<li><a href="#" class="last">Last</a></li>');

    links.push('</ul>');
    this.$pagination.html(links.join(''));
  };

  _F.addPerPage = function(){
    var per_page_select = this.paging_opts.per_page_select, html, arr;

    if (per_page_select === false || typeof per_page_select == 'string') return;
    this.paging_opts.per_page_select = '.st_per_page';

    html = ['<select size="1" name="per_page" class="'+ this.paging_opts.per_page_class +'">'];
    arr = this.paging_opts.per_page_opts;

    for(var i = 0, l = arr.length; i < l; i ++)
        html.push('<option value="'+ arr[i] + '">'+ arr[i] +'</option>');

    html.push('</select>');
    $(this.main_container).before(html.join(''));
  };

  _F.renderByPerPage = function(per_page){
    if (this.paging_opts.per_page == per_page) return;

    this.paging_opts.per_page = parseInt(per_page);
    this.current_page = 0;
    this.render(0)
    this.renderPagination(this.pageCount(), 0);
    this.execCallbacks('pagination');
  };

  _F.execCallbacks = function(type, args){
    var callback = this.opts.callbacks[type];

    if (!callback) return;

    if (type == 'pagination'){
      var f = this.paging_opts.per_page * this.current_page;
      args = {
        from:  (f + 1),
        to:    (this.paging_opts.per_page + f),
        total: this.dataLength(),
        page:  this.current_page
      }

      if (args['total'] == 0) args['from'] = 0;
      if (args['to'] > args['total']) args['to'] = args['total'];
    }

    return callback.call(this, args);
  };

  _F.bindSortingEvents = function(){
    var _self = this;

    $(this.main_container + ' [data-sort]').each(function(i){
      var $el = $(this)
          ,arr = $el.data('sort').split(':')
          ,data = { dir: arr[1] || 'asc',
                    type: arr[2] || 'string',
                    field: arr[0] };

      _self.sorting_opts[data.field] = {dir: data.dir, type: data.type, field: data.field }

      $el.on('click', data, function(e){
        var $this = $(this);

        $this.addClass(e.data.dir);
        _self.current_sorting = {dir: e.data.dir, type: e.data.type, field: e.data.field};
        _self.sort(e.data);
        _self.render(_self.current_page);

        e.data.dir = e.data.dir == 'asc' ? 'desc' : 'asc';
        $(this).removeClass(e.data.dir);

        if(_self.opts.callbacks['after_sort'])
          _self.execCallbacks('after_sort');
      });

      //Start sorting initialy.
      if(i == 0 && _self.opts.auto_sorting) {
        $el.trigger('click');
      }
    });
  };

  _F.sort = function(options){
    options.order = options.dir == 'asc' ? 1 : -1;
    return this.getIndex().sort(this._sortingFunc(_.map(this.data,function(d){return d.data}), options));
    // return this.getIndex().sort(this._sortingFunc(this.data, options));
  };

  _F._sortingFunc = function(data, options){
    var field = options.field, order = options.order, type = options.type;

    //return this.sortingFuntions[type];

    if (type ==  'number'){
      return function(i, j){
       return (data[i][field] - data[j][field]) * order;
      }
    }

    return function(i, j){
      var t1 = data[i][field].toLowerCase()
        ,t2 = data[j][field].toLowerCase();

      if (t1 < t2) return (-1 * order);
      if (t1 > t2) return (1 * order);
      return 0;
    }
  };

  _F.clear = function(){
    if (this.opts.search_box) { $(this.opts.search_box).html('')};
    $(this.main_container).html('');
  };

  StreamTable.extend = function (name, f ) {
    _StreamTable.prototype[name] = function () {
      return f.apply( this, arguments );
    };
  };

})(this, window.jQuery)

//In IE indexOf method not define.
if (!Array.prototype.indexOf) {
  Array.prototype.indexOf = function(obj, start) {
    for (var i = (start || 0), j = this.length; i < j; i++) {
      if (this[i] === obj) { return i; }
    }
    return -1;
  }
}

if (!Object.keys) {
  Object.keys = function(obj){
    var f, fields = [];
    for(f in obj) fields.push(f);
    return fields;
  }
}
;
(function() {
  var Page,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Page = (function(_super) {
    __extends(Page, _super);

    function Page() {
      return Page.__super__.constructor.apply(this, arguments);
    }

    Page.prototype.className = "page";

    Page.prototype.initialize = function(options) {
      this.options = options != null ? options : null;
      Page.__super__.initialize.apply(this, arguments);
      return this.render();
    };

    Page.prototype.template = function(data, partials) {
      if (data == null) {
        data = {};
      }
      if (partials == null) {
        partials = [];
      }
      partials = _.object(partials, _.map(partials, function(id) {
        return app.getTemplate(id)(data);
      }));
      return app.getTemplate(this.id)(data, partials);
    };

    Page.prototype.render = function() {
      var _ref, _ref1;
      this.$el.html(this.template((_ref = this.options) != null ? _ref.data : void 0, (_ref1 = this.options) != null ? _ref1.partials : void 0));
      $("#main").html(this.$el);
      return app.postRender();
    };

    Page.prototype.remove = function() {
      var _ref;
      if ((_ref = this.list) != null) {
        _ref.remove();
      }
      return Page.__super__.remove.call(this);
    };

    return Page;

  })(Backbone.View);

  app.views.Page = Page;

}).call(this);
(function() {
  var Live,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Live = (function(_super) {
    __extends(Live, _super);

    function Live() {
      this.process = __bind(this.process, this);
      this.setBuffer = __bind(this.setBuffer, this);
      this.createLabels = __bind(this.createLabels, this);
      this.createTableHeader = __bind(this.createTableHeader, this);
      this.updateFields = __bind(this.updateFields, this);
      this.updateCount = __bind(this.updateCount, this);
      this.rowTemplate = __bind(this.rowTemplate, this);
      return Live.__super__.constructor.apply(this, arguments);
    }

    Live.prototype.initialize = function(options) {
      this.options = options != null ? options : null;
      Live.__super__.initialize.apply(this, arguments);
      if ("WebSocket" in window) {
        return this.start();
      }
    };

    Live.prototype.events = {
      "click .filter": "filter",
      "click .td-content": "showContent"
    };

    Live.prototype.rowTemplate = function(msg, index) {
      var field, values, _base, _i, _key, _len, _ref;
      _ref = this.st.opts.fields;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        field = _ref[_i];
        if (field.indexOf("data") > -1) {
          _key = field.replace("data.", "");
          if (!msg.data[_key]) {
            if ((_base = msg.data)[_key] == null) {
              _base[_key] = "";
            }
          }
        }
      }
      values = _.map(_.keys(msg.data).sort(), function(k) {
        return msg.data[k];
      });
      return app.getTemplate("row")({
        index: index,
        msg: msg,
        values: values
      });
    };

    Live.prototype.start = function() {
      var options, ws;
      ws = new WebSocket("ws://" + window.location.host);
      ws.onmessage = this.process;
      ws.onclose = function() {
        return console.log("socket closed");
      };
      ws.onopen = function() {
        return console.log("connected...");
      };
      this.buffer = [];
      this.table_names = [];
      this.bufferTimer = setInterval(this.setBuffer, 2000);
      options = {
        view: this.rowTemplate,
        search_box: "#searchbox",
        fields: ["table_name"],
        pagination: {
          span: 5,
          next_text: 'Next &rarr;',
          prev_text: '&larr; Previous',
          per_page_select: true,
          per_page_opts: [10, 25, 50],
          per_page: 10
        },
        callbacks: {
          before_add: this.updateFields,
          after_add: this.updateCount
        }
      };
      this.$el.find('.table').stream_table(options, []);
      this.st = this.$el.find('.table').data('st');
      this.st.has_sorting = true;
      this.st.records_index = [];
      this.st.sorting_opts = {};
      this.$el.find(".st_per_page").insertAfter(this.$el.find("#searchbox"));
      this.createLabels();
      return this;
    };

    Live.prototype.remove = function() {
      clearInterval(this.bufferTimer);
      Live.__super__.remove.call(this);
      return this;
    };

    Live.prototype.filter = function(e) {
      var col, css, field;
      e.preventDefault();
      $(e.currentTarget).toggleClass("active").toggleClass("bg-mid-gray").toggleClass("bg-red");
      field = e.currentTarget.text;
      col = this.$el.find(".table thead tr ." + field).index() + 1;
      css = ".table thead tr th." + field + ", .table tbody td:nth-child(" + col + ") { display:none }";
      if ($("style#" + field).length > 0) {
        return $("style#" + field).remove();
      } else {
        return $('html > head').append($("<style id=\"" + field + "\" type=\"text/css\">" + css + "</style>"));
      }
    };

    Live.prototype.showContent = function(e) {
      return app.flash(e.currentTarget.innerText, "bg-lighter-gray");
    };

    Live.prototype.updateCount = function(msgs) {
      return this.$el.find(".record_count").text("" + (parseInt(this.$el.find(".record_count").text()) + msgs.length) + " records");
    };

    Live.prototype.updateFields = function(msgs) {
      var fields, unifields;
      if (!_.isEmpty(msgs)) {
        fields = _.uniq(_.flatten(_.map(_.pluck(msgs, "data"), (function(d) {
          return _.map(_.keys(d), function(k) {
            return "data." + k;
          });
        }))));
        unifields = _.union(this.fields, fields);
        this.st.opts.fields = unifields;
        this.createLabels();
        this.createTableHeader();
      }
      return msgs;
    };

    Live.prototype.createTableHeader = function() {
      var fields;
      fields = this.st.opts.fields.sort();
      fields.unshift("index", "table_name");
      this.$el.find('.table thead tr').html(_.map(fields, (function(_this) {
        return function(f) {
          var fname, sort_type;
          fname = f.replace("data.", "");
          if (f.indexOf("data") > -1) {
            sort_type = _.isNumber(_this.buffer[0]['data'][fname]) ? "number" : "string";
            return "<th class=\"" + fname + " pointer\" data-sort=\"" + fname + ":asc:" + sort_type + "\">" + (fname.titleize()) + " <i class=\"fa fa-sort\"></i></th>";
          } else {
            return "<th class=\"" + fname + "\">" + (fname.titleize()) + "</th>";
          }
        };
      })(this)));
      return this.st.bindSortingEvents();
    };

    Live.prototype.createLabels = function() {
      var filterBtns, filters;
      filterBtns = this.$el.find(".filters a");
      if (filterBtns.length > 0) {
        filters = _.omit(_.map(filterBtns, function(a) {
          return $(a).text();
        }), "table_name");
        filters = _.difference(this.st.opts.fields, _.map(filters, function(f) {
          return "data." + f;
        }));
      } else {
        filters = this.st.opts.fields;
      }
      return this.$el.find('.filters').append(_.map(filters.sort(), function(f) {
        return "<a class=\"filter h5 inline-block button button-small white bg-red rounded active ml1\">" + (f.replace("data.", "")) + "</a>";
      }));
    };

    Live.prototype.setBuffer = function() {
      if (!_.isEmpty(this.buffer)) {
        this.st.addData(this.buffer);
        return this.buffer = [];
      }
    };

    Live.prototype.process = function(evt) {
      var k, msg, v, _ref;
      msg = _.isString(evt.data) ? JSON.parse(evt.data) : evt.data;
      if (msg.table_name == null) {
        return;
      }
      if (msg.op === "INSERT") {
        _ref = msg.data;
        for (k in _ref) {
          v = _ref[k];
          if (_.isObject(v)) {
            msg.data[k] = JSON.stringify(v);
          }
        }
        return this.buffer.push(msg);
      } else {
        return $("tr." + msg.data.uuid).remove();
      }
    };

    return Live;

  })(app.views.Page);

  app.views.Live = Live;

}).call(this);
(function() {
  var Search,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Search = (function(_super) {
    __extends(Search, _super);

    function Search() {
      this.onSearchResult = __bind(this.onSearchResult, this);
      return Search.__super__.constructor.apply(this, arguments);
    }

    Search.prototype.events = {
      "click .filter": "filter",
      "click .td-content": "showContent",
      "keydown #searcharea textarea": "onSearchAreaKeydown",
      "click .help": "toggleHelp",
      "click .d3": "openChart",
      "click .tbl": "openTable",
      "click .toggle-search": "toggleSearch"
    };

    Search.prototype.initialize = function(options) {
      this.options = options != null ? options : null;
      Search.__super__.initialize.apply(this, arguments);
      if (!("WebSocket" in window)) {
        return this.start();
      }
    };

    Search.prototype.start = function() {
      var options, searchareaEl;
      this.buffer = [];
      this.table_names = [];
      this.bufferTimer = setInterval(this.setBuffer, 2000);
      options = {
        view: this.rowTemplate,
        search_box: "#searchbox",
        fields: ["table_name"],
        pagination: {
          span: 5,
          next_text: 'Next &rarr;',
          prev_text: '&larr; Previous',
          per_page_select: true,
          per_page_opts: [10, 25, 50],
          per_page: 10
        },
        callbacks: {
          before_add: this.updateFields,
          after_add: this.updateCount
        }
      };
      this.$el.find('.table').stream_table(options, []);
      this.$el.find('#searchbox').attr('placeholder', 'Filter');
      searchareaEl = this.$el.find("#searcharea textarea");
      this.editor = new Behave({
        textarea: searchareaEl[0],
        replaceTab: true,
        softTabs: true,
        tabSize: 2,
        autoOpen: true,
        overwrite: true,
        autoStrip: true,
        autoIndent: true,
        fence: true
      });
      searchareaEl.autosize();
      this.st = this.$el.find('.table').data('st');
      this.st.has_sorting = true;
      this.st.records_index = [];
      this.st.sorting_opts = {};
      this.$el.find(".st_per_page").insertAfter(this.$el.find("#searchbox"));
      this.createLabels();
      return this;
    };

    Search.prototype.onSearchAreaKeydown = function(e) {
      if ((e.ctrlKey || e.metaKey) && e.keyCode === 83) {
        e.preventDefault();
        this.search(!e.shiftKey);
      }
      return this;
    };

    Search.prototype.search = function(reset) {
      var error, query, _base, _base1;
      if (reset == null) {
        reset = false;
      }
      if (query = this.$el.find("#searcharea textarea").val()) {
        if (reset) {
          this.$el.find(".filters").html($("<a class=\"filter h5 inline-block button button-small white bg-red rounded active ml1\">table_name</a>"));
          this.$el.find('.table tbody').empty();
          this.$el.find('.table thead').html("<tr>");
          this.$el.find(".record_count").text("0 records");
          this.st.data = [];
          this.st.current_page = 0;
          this.st.last_search_result = [];
          this.st.last_search_text = "";
          this.st.text_index = [];
          this.st.records_index = [];
          this.st.sorting_options = {};
          this.st.opts.fields = ['table_name'];
          this.st.renderPagination();
        }
        try {
          this.query = JSON.parse(query);
          if ((_base = this.query).query == null) {
            _base.query = {};
          }
          if ((_base1 = this.query.query).table_schema == null) {
            _base1.table_schema = "public";
          }
          this.query.query.stream = "true";
          return app.api.getStream("/api/" + this.query.table_name, this.query.query, null, this.onSearchResult, this.onError);
        } catch (_error) {
          error = _error;
          return app.flash(error, "red");
        }
      }
    };

    Search.prototype.onSearchResult = function(data) {
      var k, msg, v, _i, _len, _ref, _results;
      if (_.isEmpty(data)) {
        return;
      }
      data = _.map(_.flatten(data), (function(_this) {
        return function(row) {
          return {
            table_name: _this.query.table_name,
            data: row,
            op: "INSERT"
          };
        };
      })(this));
      _results = [];
      for (_i = 0, _len = data.length; _i < _len; _i++) {
        msg = data[_i];
        _ref = msg.data;
        for (k in _ref) {
          v = _ref[k];
          if (_.isObject(v)) {
            msg.data[k] = JSON.stringify(v);
          }
        }
        _results.push(this.buffer.push(msg));
      }
      return _results;
    };

    Search.prototype.onError = function(err) {
      return app.flash(err, "red");
    };

    Search.prototype.toggleHelp = function() {
      return app.flash(app.getTemplate('help')({}, []));
    };

    Search.prototype.toggleSearch = function(e) {
      var _ref;
      this.$el.find("#searcharea").toggleClass("mt1").find("textarea").toggleClass("hidden");
      $(e.currentTarget).find(".fa").toggleClass("fa-flip-vertical");
      return (_ref = app.views.chart) != null ? _ref.resize() : void 0;
    };

    Search.prototype.openTable = function() {
      var _ref;
      if ((_ref = app.views.chart) != null) {
        _ref.remove();
      }
      return this.$el.find(".table, .st_pagination").removeClass("hidden");
    };

    Search.prototype.openChart = function(e) {
      var chart, _ref;
      e.preventDefault();
      if (_.isEmpty(this.st.data)) {
        return;
      }
      chart = $(e.currentTarget).data('chart');
      if ((_ref = app.views.chart) != null) {
        _ref.remove();
      }
      app.views.chart = new app.views[chart]({
        data: this.st.data
      });
      this.$el.find(".table, .st_pagination").addClass("hidden");
      return this.$el.find(".table-container").append(app.views.chart.$el);
    };

    return Search;

  })(app.views.Live);

  app.views.Search = Search;

}).call(this);
(function() {


}).call(this);
