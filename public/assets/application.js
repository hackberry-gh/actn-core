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

			//if ('onpropertychange' in ta) {
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
        //} else {
				// Modern Browsers
				//$ta.on('input.autosize', adjust);
        //}

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
!function(){function n(n){return null!=n&&!isNaN(n)}function t(n){return n.length}function e(n){for(var t=1;n*t%1;)t*=10;return t}function r(n,t){try{for(var e in t)Object.defineProperty(n.prototype,e,{value:t[e],enumerable:!1})}catch(r){n.prototype=t}}function u(){}function i(n){return aa+n in this}function o(n){return n=aa+n,n in this&&delete this[n]}function a(){var n=[];return this.forEach(function(t){n.push(t)}),n}function c(){var n=0;for(var t in this)t.charCodeAt(0)===ca&&++n;return n}function s(){for(var n in this)if(n.charCodeAt(0)===ca)return!1;return!0}function l(){}function f(n,t,e){return function(){var r=e.apply(t,arguments);return r===t?n:r}}function h(n,t){if(t in n)return t;t=t.charAt(0).toUpperCase()+t.substring(1);for(var e=0,r=sa.length;r>e;++e){var u=sa[e]+t;if(u in n)return u}}function g(){}function p(){}function v(n){function t(){for(var t,r=e,u=-1,i=r.length;++u<i;)(t=r[u].on)&&t.apply(this,arguments);return n}var e=[],r=new u;return t.on=function(t,u){var i,o=r.get(t);return arguments.length<2?o&&o.on:(o&&(o.on=null,e=e.slice(0,i=e.indexOf(o)).concat(e.slice(i+1)),r.remove(t)),u&&e.push(r.set(t,{on:u})),n)},t}function d(){Xo.event.preventDefault()}function m(){for(var n,t=Xo.event;n=t.sourceEvent;)t=n;return t}function y(n){for(var t=new p,e=0,r=arguments.length;++e<r;)t[arguments[e]]=v(t);return t.of=function(e,r){return function(u){try{var i=u.sourceEvent=Xo.event;u.target=n,Xo.event=u,t[u.type].apply(e,r)}finally{Xo.event=i}}},t}function x(n){return fa(n,da),n}function M(n){return"function"==typeof n?n:function(){return ha(n,this)}}function _(n){return"function"==typeof n?n:function(){return ga(n,this)}}function b(n,t){function e(){this.removeAttribute(n)}function r(){this.removeAttributeNS(n.space,n.local)}function u(){this.setAttribute(n,t)}function i(){this.setAttributeNS(n.space,n.local,t)}function o(){var e=t.apply(this,arguments);null==e?this.removeAttribute(n):this.setAttribute(n,e)}function a(){var e=t.apply(this,arguments);null==e?this.removeAttributeNS(n.space,n.local):this.setAttributeNS(n.space,n.local,e)}return n=Xo.ns.qualify(n),null==t?n.local?r:e:"function"==typeof t?n.local?a:o:n.local?i:u}function w(n){return n.trim().replace(/\s+/g," ")}function S(n){return new RegExp("(?:^|\\s+)"+Xo.requote(n)+"(?:\\s+|$)","g")}function k(n){return n.trim().split(/^|\s+/)}function E(n,t){function e(){for(var e=-1;++e<u;)n[e](this,t)}function r(){for(var e=-1,r=t.apply(this,arguments);++e<u;)n[e](this,r)}n=k(n).map(A);var u=n.length;return"function"==typeof t?r:e}function A(n){var t=S(n);return function(e,r){if(u=e.classList)return r?u.add(n):u.remove(n);var u=e.getAttribute("class")||"";r?(t.lastIndex=0,t.test(u)||e.setAttribute("class",w(u+" "+n))):e.setAttribute("class",w(u.replace(t," ")))}}function C(n,t,e){function r(){this.style.removeProperty(n)}function u(){this.style.setProperty(n,t,e)}function i(){var r=t.apply(this,arguments);null==r?this.style.removeProperty(n):this.style.setProperty(n,r,e)}return null==t?r:"function"==typeof t?i:u}function N(n,t){function e(){delete this[n]}function r(){this[n]=t}function u(){var e=t.apply(this,arguments);null==e?delete this[n]:this[n]=e}return null==t?e:"function"==typeof t?u:r}function L(n){return"function"==typeof n?n:(n=Xo.ns.qualify(n)).local?function(){return this.ownerDocument.createElementNS(n.space,n.local)}:function(){return this.ownerDocument.createElementNS(this.namespaceURI,n)}}function z(n){return{__data__:n}}function q(n){return function(){return va(this,n)}}function T(n){return arguments.length||(n=Xo.ascending),function(t,e){return t&&e?n(t.__data__,e.__data__):!t-!e}}function R(n,t){for(var e=0,r=n.length;r>e;e++)for(var u,i=n[e],o=0,a=i.length;a>o;o++)(u=i[o])&&t(u,o,e);return n}function D(n){return fa(n,ya),n}function P(n){var t,e;return function(r,u,i){var o,a=n[i].update,c=a.length;for(i!=e&&(e=i,t=0),u>=t&&(t=u+1);!(o=a[t])&&++t<c;);return o}}function U(){var n=this.__transition__;n&&++n.active}function j(n,t,e){function r(){var t=this[o];t&&(this.removeEventListener(n,t,t.$),delete this[o])}function u(){var u=c(t,Bo(arguments));r.call(this),this.addEventListener(n,this[o]=u,u.$=e),u._=t}function i(){var t,e=new RegExp("^__on([^.]+)"+Xo.requote(n)+"$");for(var r in this)if(t=r.match(e)){var u=this[r];this.removeEventListener(t[1],u,u.$),delete this[r]}}var o="__on"+n,a=n.indexOf("."),c=H;a>0&&(n=n.substring(0,a));var s=Ma.get(n);return s&&(n=s,c=F),a?t?u:r:t?g:i}function H(n,t){return function(e){var r=Xo.event;Xo.event=e,t[0]=this.__data__;try{n.apply(this,t)}finally{Xo.event=r}}}function F(n,t){var e=H(n,t);return function(n){var t=this,r=n.relatedTarget;r&&(r===t||8&r.compareDocumentPosition(t))||e.call(t,n)}}function O(){var n=".dragsuppress-"+ ++ba,t="click"+n,e=Xo.select(Go).on("touchmove"+n,d).on("dragstart"+n,d).on("selectstart"+n,d);if(_a){var r=Jo.style,u=r[_a];r[_a]="none"}return function(i){function o(){e.on(t,null)}e.on(n,null),_a&&(r[_a]=u),i&&(e.on(t,function(){d(),o()},!0),setTimeout(o,0))}}function Y(n,t){t.changedTouches&&(t=t.changedTouches[0]);var e=n.ownerSVGElement||n;if(e.createSVGPoint){var r=e.createSVGPoint();if(0>wa&&(Go.scrollX||Go.scrollY)){e=Xo.select("body").append("svg").style({position:"absolute",top:0,left:0,margin:0,padding:0,border:"none"},"important");var u=e[0][0].getScreenCTM();wa=!(u.f||u.e),e.remove()}return wa?(r.x=t.pageX,r.y=t.pageY):(r.x=t.clientX,r.y=t.clientY),r=r.matrixTransform(n.getScreenCTM().inverse()),[r.x,r.y]}var i=n.getBoundingClientRect();return[t.clientX-i.left-n.clientLeft,t.clientY-i.top-n.clientTop]}function I(n){return n>0?1:0>n?-1:0}function Z(n,t,e){return(t[0]-n[0])*(e[1]-n[1])-(t[1]-n[1])*(e[0]-n[0])}function V(n){return n>1?0:-1>n?Sa:Math.acos(n)}function X(n){return n>1?Ea:-1>n?-Ea:Math.asin(n)}function $(n){return((n=Math.exp(n))-1/n)/2}function B(n){return((n=Math.exp(n))+1/n)/2}function W(n){return((n=Math.exp(2*n))-1)/(n+1)}function J(n){return(n=Math.sin(n/2))*n}function G(){}function K(n,t,e){return new Q(n,t,e)}function Q(n,t,e){this.h=n,this.s=t,this.l=e}function nt(n,t,e){function r(n){return n>360?n-=360:0>n&&(n+=360),60>n?i+(o-i)*n/60:180>n?o:240>n?i+(o-i)*(240-n)/60:i}function u(n){return Math.round(255*r(n))}var i,o;return n=isNaN(n)?0:(n%=360)<0?n+360:n,t=isNaN(t)?0:0>t?0:t>1?1:t,e=0>e?0:e>1?1:e,o=.5>=e?e*(1+t):e+t-e*t,i=2*e-o,gt(u(n+120),u(n),u(n-120))}function tt(n,t,e){return new et(n,t,e)}function et(n,t,e){this.h=n,this.c=t,this.l=e}function rt(n,t,e){return isNaN(n)&&(n=0),isNaN(t)&&(t=0),ut(e,Math.cos(n*=Na)*t,Math.sin(n)*t)}function ut(n,t,e){return new it(n,t,e)}function it(n,t,e){this.l=n,this.a=t,this.b=e}function ot(n,t,e){var r=(n+16)/116,u=r+t/500,i=r-e/200;return u=ct(u)*Fa,r=ct(r)*Oa,i=ct(i)*Ya,gt(lt(3.2404542*u-1.5371385*r-.4985314*i),lt(-.969266*u+1.8760108*r+.041556*i),lt(.0556434*u-.2040259*r+1.0572252*i))}function at(n,t,e){return n>0?tt(Math.atan2(e,t)*La,Math.sqrt(t*t+e*e),n):tt(0/0,0/0,n)}function ct(n){return n>.206893034?n*n*n:(n-4/29)/7.787037}function st(n){return n>.008856?Math.pow(n,1/3):7.787037*n+4/29}function lt(n){return Math.round(255*(.00304>=n?12.92*n:1.055*Math.pow(n,1/2.4)-.055))}function ft(n){return gt(n>>16,255&n>>8,255&n)}function ht(n){return ft(n)+""}function gt(n,t,e){return new pt(n,t,e)}function pt(n,t,e){this.r=n,this.g=t,this.b=e}function vt(n){return 16>n?"0"+Math.max(0,n).toString(16):Math.min(255,n).toString(16)}function dt(n,t,e){var r,u,i,o=0,a=0,c=0;if(r=/([a-z]+)\((.*)\)/i.exec(n))switch(u=r[2].split(","),r[1]){case"hsl":return e(parseFloat(u[0]),parseFloat(u[1])/100,parseFloat(u[2])/100);case"rgb":return t(Mt(u[0]),Mt(u[1]),Mt(u[2]))}return(i=Va.get(n))?t(i.r,i.g,i.b):(null!=n&&"#"===n.charAt(0)&&(4===n.length?(o=n.charAt(1),o+=o,a=n.charAt(2),a+=a,c=n.charAt(3),c+=c):7===n.length&&(o=n.substring(1,3),a=n.substring(3,5),c=n.substring(5,7)),o=parseInt(o,16),a=parseInt(a,16),c=parseInt(c,16)),t(o,a,c))}function mt(n,t,e){var r,u,i=Math.min(n/=255,t/=255,e/=255),o=Math.max(n,t,e),a=o-i,c=(o+i)/2;return a?(u=.5>c?a/(o+i):a/(2-o-i),r=n==o?(t-e)/a+(e>t?6:0):t==o?(e-n)/a+2:(n-t)/a+4,r*=60):(r=0/0,u=c>0&&1>c?0:r),K(r,u,c)}function yt(n,t,e){n=xt(n),t=xt(t),e=xt(e);var r=st((.4124564*n+.3575761*t+.1804375*e)/Fa),u=st((.2126729*n+.7151522*t+.072175*e)/Oa),i=st((.0193339*n+.119192*t+.9503041*e)/Ya);return ut(116*u-16,500*(r-u),200*(u-i))}function xt(n){return(n/=255)<=.04045?n/12.92:Math.pow((n+.055)/1.055,2.4)}function Mt(n){var t=parseFloat(n);return"%"===n.charAt(n.length-1)?Math.round(2.55*t):t}function _t(n){return"function"==typeof n?n:function(){return n}}function bt(n){return n}function wt(n){return function(t,e,r){return 2===arguments.length&&"function"==typeof e&&(r=e,e=null),St(t,e,n,r)}}function St(n,t,e,r){function u(){var n,t=c.status;if(!t&&c.responseText||t>=200&&300>t||304===t){try{n=e.call(i,c)}catch(r){return o.error.call(i,r),void 0}o.load.call(i,n)}else o.error.call(i,c)}var i={},o=Xo.dispatch("beforesend","progress","load","error"),a={},c=new XMLHttpRequest,s=null;return!Go.XDomainRequest||"withCredentials"in c||!/^(http(s)?:)?\/\//.test(n)||(c=new XDomainRequest),"onload"in c?c.onload=c.onerror=u:c.onreadystatechange=function(){c.readyState>3&&u()},c.onprogress=function(n){var t=Xo.event;Xo.event=n;try{o.progress.call(i,c)}finally{Xo.event=t}},i.header=function(n,t){return n=(n+"").toLowerCase(),arguments.length<2?a[n]:(null==t?delete a[n]:a[n]=t+"",i)},i.mimeType=function(n){return arguments.length?(t=null==n?null:n+"",i):t},i.responseType=function(n){return arguments.length?(s=n,i):s},i.response=function(n){return e=n,i},["get","post"].forEach(function(n){i[n]=function(){return i.send.apply(i,[n].concat(Bo(arguments)))}}),i.send=function(e,r,u){if(2===arguments.length&&"function"==typeof r&&(u=r,r=null),c.open(e,n,!0),null==t||"accept"in a||(a.accept=t+",*/*"),c.setRequestHeader)for(var l in a)c.setRequestHeader(l,a[l]);return null!=t&&c.overrideMimeType&&c.overrideMimeType(t),null!=s&&(c.responseType=s),null!=u&&i.on("error",u).on("load",function(n){u(null,n)}),o.beforesend.call(i,c),c.send(null==r?null:r),i},i.abort=function(){return c.abort(),i},Xo.rebind(i,o,"on"),null==r?i:i.get(kt(r))}function kt(n){return 1===n.length?function(t,e){n(null==t?e:null)}:n}function Et(){var n=At(),t=Ct()-n;t>24?(isFinite(t)&&(clearTimeout(Wa),Wa=setTimeout(Et,t)),Ba=0):(Ba=1,Ga(Et))}function At(){var n=Date.now();for(Ja=Xa;Ja;)n>=Ja.t&&(Ja.f=Ja.c(n-Ja.t)),Ja=Ja.n;return n}function Ct(){for(var n,t=Xa,e=1/0;t;)t.f?t=n?n.n=t.n:Xa=t.n:(t.t<e&&(e=t.t),t=(n=t).n);return $a=n,e}function Nt(n,t){return t-(n?Math.ceil(Math.log(n)/Math.LN10):1)}function Lt(n,t){var e=Math.pow(10,3*oa(8-t));return{scale:t>8?function(n){return n/e}:function(n){return n*e},symbol:n}}function zt(n){var t=n.decimal,e=n.thousands,r=n.grouping,u=n.currency,i=r?function(n){for(var t=n.length,u=[],i=0,o=r[0];t>0&&o>0;)u.push(n.substring(t-=o,t+o)),o=r[i=(i+1)%r.length];return u.reverse().join(e)}:bt;return function(n){var e=Qa.exec(n),r=e[1]||" ",o=e[2]||">",a=e[3]||"",c=e[4]||"",s=e[5],l=+e[6],f=e[7],h=e[8],g=e[9],p=1,v="",d="",m=!1;switch(h&&(h=+h.substring(1)),(s||"0"===r&&"="===o)&&(s=r="0",o="=",f&&(l-=Math.floor((l-1)/4))),g){case"n":f=!0,g="g";break;case"%":p=100,d="%",g="f";break;case"p":p=100,d="%",g="r";break;case"b":case"o":case"x":case"X":"#"===c&&(v="0"+g.toLowerCase());case"c":case"d":m=!0,h=0;break;case"s":p=-1,g="r"}"$"===c&&(v=u[0],d=u[1]),"r"!=g||h||(g="g"),null!=h&&("g"==g?h=Math.max(1,Math.min(21,h)):("e"==g||"f"==g)&&(h=Math.max(0,Math.min(20,h)))),g=nc.get(g)||qt;var y=s&&f;return function(n){var e=d;if(m&&n%1)return"";var u=0>n||0===n&&0>1/n?(n=-n,"-"):a;if(0>p){var c=Xo.formatPrefix(n,h);n=c.scale(n),e=c.symbol+d}else n*=p;n=g(n,h);var x=n.lastIndexOf("."),M=0>x?n:n.substring(0,x),_=0>x?"":t+n.substring(x+1);!s&&f&&(M=i(M));var b=v.length+M.length+_.length+(y?0:u.length),w=l>b?new Array(b=l-b+1).join(r):"";return y&&(M=i(w+M)),u+=v,n=M+_,("<"===o?u+n+w:">"===o?w+u+n:"^"===o?w.substring(0,b>>=1)+u+n+w.substring(b):u+(y?n:w+n))+e}}}function qt(n){return n+""}function Tt(){this._=new Date(arguments.length>1?Date.UTC.apply(this,arguments):arguments[0])}function Rt(n,t,e){function r(t){var e=n(t),r=i(e,1);return r-t>t-e?e:r}function u(e){return t(e=n(new ec(e-1)),1),e}function i(n,e){return t(n=new ec(+n),e),n}function o(n,r,i){var o=u(n),a=[];if(i>1)for(;r>o;)e(o)%i||a.push(new Date(+o)),t(o,1);else for(;r>o;)a.push(new Date(+o)),t(o,1);return a}function a(n,t,e){try{ec=Tt;var r=new Tt;return r._=n,o(r,t,e)}finally{ec=Date}}n.floor=n,n.round=r,n.ceil=u,n.offset=i,n.range=o;var c=n.utc=Dt(n);return c.floor=c,c.round=Dt(r),c.ceil=Dt(u),c.offset=Dt(i),c.range=a,n}function Dt(n){return function(t,e){try{ec=Tt;var r=new Tt;return r._=t,n(r,e)._}finally{ec=Date}}}function Pt(n){function t(n){function t(t){for(var e,u,i,o=[],a=-1,c=0;++a<r;)37===n.charCodeAt(a)&&(o.push(n.substring(c,a)),null!=(u=uc[e=n.charAt(++a)])&&(e=n.charAt(++a)),(i=C[e])&&(e=i(t,null==u?"e"===e?" ":"0":u)),o.push(e),c=a+1);return o.push(n.substring(c,a)),o.join("")}var r=n.length;return t.parse=function(t){var r={y:1900,m:0,d:1,H:0,M:0,S:0,L:0,Z:null},u=e(r,n,t,0);if(u!=t.length)return null;"p"in r&&(r.H=r.H%12+12*r.p);var i=null!=r.Z&&ec!==Tt,o=new(i?Tt:ec);return"j"in r?o.setFullYear(r.y,0,r.j):"w"in r&&("W"in r||"U"in r)?(o.setFullYear(r.y,0,1),o.setFullYear(r.y,0,"W"in r?(r.w+6)%7+7*r.W-(o.getDay()+5)%7:r.w+7*r.U-(o.getDay()+6)%7)):o.setFullYear(r.y,r.m,r.d),o.setHours(r.H+Math.floor(r.Z/100),r.M+r.Z%100,r.S,r.L),i?o._:o},t.toString=function(){return n},t}function e(n,t,e,r){for(var u,i,o,a=0,c=t.length,s=e.length;c>a;){if(r>=s)return-1;if(u=t.charCodeAt(a++),37===u){if(o=t.charAt(a++),i=N[o in uc?t.charAt(a++):o],!i||(r=i(n,e,r))<0)return-1}else if(u!=e.charCodeAt(r++))return-1}return r}function r(n,t,e){b.lastIndex=0;var r=b.exec(t.substring(e));return r?(n.w=w.get(r[0].toLowerCase()),e+r[0].length):-1}function u(n,t,e){M.lastIndex=0;var r=M.exec(t.substring(e));return r?(n.w=_.get(r[0].toLowerCase()),e+r[0].length):-1}function i(n,t,e){E.lastIndex=0;var r=E.exec(t.substring(e));return r?(n.m=A.get(r[0].toLowerCase()),e+r[0].length):-1}function o(n,t,e){S.lastIndex=0;var r=S.exec(t.substring(e));return r?(n.m=k.get(r[0].toLowerCase()),e+r[0].length):-1}function a(n,t,r){return e(n,C.c.toString(),t,r)}function c(n,t,r){return e(n,C.x.toString(),t,r)}function s(n,t,r){return e(n,C.X.toString(),t,r)}function l(n,t,e){var r=x.get(t.substring(e,e+=2).toLowerCase());return null==r?-1:(n.p=r,e)}var f=n.dateTime,h=n.date,g=n.time,p=n.periods,v=n.days,d=n.shortDays,m=n.months,y=n.shortMonths;t.utc=function(n){function e(n){try{ec=Tt;var t=new ec;return t._=n,r(t)}finally{ec=Date}}var r=t(n);return e.parse=function(n){try{ec=Tt;var t=r.parse(n);return t&&t._}finally{ec=Date}},e.toString=r.toString,e},t.multi=t.utc.multi=ee;var x=Xo.map(),M=jt(v),_=Ht(v),b=jt(d),w=Ht(d),S=jt(m),k=Ht(m),E=jt(y),A=Ht(y);p.forEach(function(n,t){x.set(n.toLowerCase(),t)});var C={a:function(n){return d[n.getDay()]},A:function(n){return v[n.getDay()]},b:function(n){return y[n.getMonth()]},B:function(n){return m[n.getMonth()]},c:t(f),d:function(n,t){return Ut(n.getDate(),t,2)},e:function(n,t){return Ut(n.getDate(),t,2)},H:function(n,t){return Ut(n.getHours(),t,2)},I:function(n,t){return Ut(n.getHours()%12||12,t,2)},j:function(n,t){return Ut(1+tc.dayOfYear(n),t,3)},L:function(n,t){return Ut(n.getMilliseconds(),t,3)},m:function(n,t){return Ut(n.getMonth()+1,t,2)},M:function(n,t){return Ut(n.getMinutes(),t,2)},p:function(n){return p[+(n.getHours()>=12)]},S:function(n,t){return Ut(n.getSeconds(),t,2)},U:function(n,t){return Ut(tc.sundayOfYear(n),t,2)},w:function(n){return n.getDay()},W:function(n,t){return Ut(tc.mondayOfYear(n),t,2)},x:t(h),X:t(g),y:function(n,t){return Ut(n.getFullYear()%100,t,2)},Y:function(n,t){return Ut(n.getFullYear()%1e4,t,4)},Z:ne,"%":function(){return"%"}},N={a:r,A:u,b:i,B:o,c:a,d:Bt,e:Bt,H:Jt,I:Jt,j:Wt,L:Qt,m:$t,M:Gt,p:l,S:Kt,U:Ot,w:Ft,W:Yt,x:c,X:s,y:Zt,Y:It,Z:Vt,"%":te};return t}function Ut(n,t,e){var r=0>n?"-":"",u=(r?-n:n)+"",i=u.length;return r+(e>i?new Array(e-i+1).join(t)+u:u)}function jt(n){return new RegExp("^(?:"+n.map(Xo.requote).join("|")+")","i")}function Ht(n){for(var t=new u,e=-1,r=n.length;++e<r;)t.set(n[e].toLowerCase(),e);return t}function Ft(n,t,e){ic.lastIndex=0;var r=ic.exec(t.substring(e,e+1));return r?(n.w=+r[0],e+r[0].length):-1}function Ot(n,t,e){ic.lastIndex=0;var r=ic.exec(t.substring(e));return r?(n.U=+r[0],e+r[0].length):-1}function Yt(n,t,e){ic.lastIndex=0;var r=ic.exec(t.substring(e));return r?(n.W=+r[0],e+r[0].length):-1}function It(n,t,e){ic.lastIndex=0;var r=ic.exec(t.substring(e,e+4));return r?(n.y=+r[0],e+r[0].length):-1}function Zt(n,t,e){ic.lastIndex=0;var r=ic.exec(t.substring(e,e+2));return r?(n.y=Xt(+r[0]),e+r[0].length):-1}function Vt(n,t,e){return/^[+-]\d{4}$/.test(t=t.substring(e,e+5))?(n.Z=+t,e+5):-1}function Xt(n){return n+(n>68?1900:2e3)}function $t(n,t,e){ic.lastIndex=0;var r=ic.exec(t.substring(e,e+2));return r?(n.m=r[0]-1,e+r[0].length):-1}function Bt(n,t,e){ic.lastIndex=0;var r=ic.exec(t.substring(e,e+2));return r?(n.d=+r[0],e+r[0].length):-1}function Wt(n,t,e){ic.lastIndex=0;var r=ic.exec(t.substring(e,e+3));return r?(n.j=+r[0],e+r[0].length):-1}function Jt(n,t,e){ic.lastIndex=0;var r=ic.exec(t.substring(e,e+2));return r?(n.H=+r[0],e+r[0].length):-1}function Gt(n,t,e){ic.lastIndex=0;var r=ic.exec(t.substring(e,e+2));return r?(n.M=+r[0],e+r[0].length):-1}function Kt(n,t,e){ic.lastIndex=0;var r=ic.exec(t.substring(e,e+2));return r?(n.S=+r[0],e+r[0].length):-1}function Qt(n,t,e){ic.lastIndex=0;var r=ic.exec(t.substring(e,e+3));return r?(n.L=+r[0],e+r[0].length):-1}function ne(n){var t=n.getTimezoneOffset(),e=t>0?"-":"+",r=~~(oa(t)/60),u=oa(t)%60;return e+Ut(r,"0",2)+Ut(u,"0",2)}function te(n,t,e){oc.lastIndex=0;var r=oc.exec(t.substring(e,e+1));return r?e+r[0].length:-1}function ee(n){for(var t=n.length,e=-1;++e<t;)n[e][0]=this(n[e][0]);return function(t){for(var e=0,r=n[e];!r[1](t);)r=n[++e];return r[0](t)}}function re(){}function ue(n,t,e){var r=e.s=n+t,u=r-n,i=r-u;e.t=n-i+(t-u)}function ie(n,t){n&&lc.hasOwnProperty(n.type)&&lc[n.type](n,t)}function oe(n,t,e){var r,u=-1,i=n.length-e;for(t.lineStart();++u<i;)r=n[u],t.point(r[0],r[1],r[2]);t.lineEnd()}function ae(n,t){var e=-1,r=n.length;for(t.polygonStart();++e<r;)oe(n[e],t,1);t.polygonEnd()}function ce(){function n(n,t){n*=Na,t=t*Na/2+Sa/4;var e=n-r,o=e>=0?1:-1,a=o*e,c=Math.cos(t),s=Math.sin(t),l=i*s,f=u*c+l*Math.cos(a),h=l*o*Math.sin(a);hc.add(Math.atan2(h,f)),r=n,u=c,i=s}var t,e,r,u,i;gc.point=function(o,a){gc.point=n,r=(t=o)*Na,u=Math.cos(a=(e=a)*Na/2+Sa/4),i=Math.sin(a)},gc.lineEnd=function(){n(t,e)}}function se(n){var t=n[0],e=n[1],r=Math.cos(e);return[r*Math.cos(t),r*Math.sin(t),Math.sin(e)]}function le(n,t){return n[0]*t[0]+n[1]*t[1]+n[2]*t[2]}function fe(n,t){return[n[1]*t[2]-n[2]*t[1],n[2]*t[0]-n[0]*t[2],n[0]*t[1]-n[1]*t[0]]}function he(n,t){n[0]+=t[0],n[1]+=t[1],n[2]+=t[2]}function ge(n,t){return[n[0]*t,n[1]*t,n[2]*t]}function pe(n){var t=Math.sqrt(n[0]*n[0]+n[1]*n[1]+n[2]*n[2]);n[0]/=t,n[1]/=t,n[2]/=t}function ve(n){return[Math.atan2(n[1],n[0]),X(n[2])]}function de(n,t){return oa(n[0]-t[0])<Aa&&oa(n[1]-t[1])<Aa}function me(n,t){n*=Na;var e=Math.cos(t*=Na);ye(e*Math.cos(n),e*Math.sin(n),Math.sin(t))}function ye(n,t,e){++pc,dc+=(n-dc)/pc,mc+=(t-mc)/pc,yc+=(e-yc)/pc}function xe(){function n(n,u){n*=Na;var i=Math.cos(u*=Na),o=i*Math.cos(n),a=i*Math.sin(n),c=Math.sin(u),s=Math.atan2(Math.sqrt((s=e*c-r*a)*s+(s=r*o-t*c)*s+(s=t*a-e*o)*s),t*o+e*a+r*c);vc+=s,xc+=s*(t+(t=o)),Mc+=s*(e+(e=a)),_c+=s*(r+(r=c)),ye(t,e,r)}var t,e,r;kc.point=function(u,i){u*=Na;var o=Math.cos(i*=Na);t=o*Math.cos(u),e=o*Math.sin(u),r=Math.sin(i),kc.point=n,ye(t,e,r)}}function Me(){kc.point=me}function _e(){function n(n,t){n*=Na;var e=Math.cos(t*=Na),o=e*Math.cos(n),a=e*Math.sin(n),c=Math.sin(t),s=u*c-i*a,l=i*o-r*c,f=r*a-u*o,h=Math.sqrt(s*s+l*l+f*f),g=r*o+u*a+i*c,p=h&&-V(g)/h,v=Math.atan2(h,g);bc+=p*s,wc+=p*l,Sc+=p*f,vc+=v,xc+=v*(r+(r=o)),Mc+=v*(u+(u=a)),_c+=v*(i+(i=c)),ye(r,u,i)}var t,e,r,u,i;kc.point=function(o,a){t=o,e=a,kc.point=n,o*=Na;var c=Math.cos(a*=Na);r=c*Math.cos(o),u=c*Math.sin(o),i=Math.sin(a),ye(r,u,i)},kc.lineEnd=function(){n(t,e),kc.lineEnd=Me,kc.point=me}}function be(){return!0}function we(n,t,e,r,u){var i=[],o=[];if(n.forEach(function(n){if(!((t=n.length-1)<=0)){var t,e=n[0],r=n[t];if(de(e,r)){u.lineStart();for(var a=0;t>a;++a)u.point((e=n[a])[0],e[1]);return u.lineEnd(),void 0}var c=new ke(e,n,null,!0),s=new ke(e,null,c,!1);c.o=s,i.push(c),o.push(s),c=new ke(r,n,null,!1),s=new ke(r,null,c,!0),c.o=s,i.push(c),o.push(s)}}),o.sort(t),Se(i),Se(o),i.length){for(var a=0,c=e,s=o.length;s>a;++a)o[a].e=c=!c;for(var l,f,h=i[0];;){for(var g=h,p=!0;g.v;)if((g=g.n)===h)return;l=g.z,u.lineStart();do{if(g.v=g.o.v=!0,g.e){if(p)for(var a=0,s=l.length;s>a;++a)u.point((f=l[a])[0],f[1]);else r(g.x,g.n.x,1,u);g=g.n}else{if(p){l=g.p.z;for(var a=l.length-1;a>=0;--a)u.point((f=l[a])[0],f[1])}else r(g.x,g.p.x,-1,u);g=g.p}g=g.o,l=g.z,p=!p}while(!g.v);u.lineEnd()}}}function Se(n){if(t=n.length){for(var t,e,r=0,u=n[0];++r<t;)u.n=e=n[r],e.p=u,u=e;u.n=e=n[0],e.p=u}}function ke(n,t,e,r){this.x=n,this.z=t,this.o=e,this.e=r,this.v=!1,this.n=this.p=null}function Ee(n,t,e,r){return function(u,i){function o(t,e){var r=u(t,e);n(t=r[0],e=r[1])&&i.point(t,e)}function a(n,t){var e=u(n,t);d.point(e[0],e[1])}function c(){y.point=a,d.lineStart()}function s(){y.point=o,d.lineEnd()}function l(n,t){v.push([n,t]);var e=u(n,t);M.point(e[0],e[1])}function f(){M.lineStart(),v=[]}function h(){l(v[0][0],v[0][1]),M.lineEnd();var n,t=M.clean(),e=x.buffer(),r=e.length;if(v.pop(),p.push(v),v=null,r){if(1&t){n=e[0];var u,r=n.length-1,o=-1;for(i.lineStart();++o<r;)i.point((u=n[o])[0],u[1]);return i.lineEnd(),void 0}r>1&&2&t&&e.push(e.pop().concat(e.shift())),g.push(e.filter(Ae))}}var g,p,v,d=t(i),m=u.invert(r[0],r[1]),y={point:o,lineStart:c,lineEnd:s,polygonStart:function(){y.point=l,y.lineStart=f,y.lineEnd=h,g=[],p=[],i.polygonStart()},polygonEnd:function(){y.point=o,y.lineStart=c,y.lineEnd=s,g=Xo.merge(g);var n=Le(m,p);g.length?we(g,Ne,n,e,i):n&&(i.lineStart(),e(null,null,1,i),i.lineEnd()),i.polygonEnd(),g=p=null},sphere:function(){i.polygonStart(),i.lineStart(),e(null,null,1,i),i.lineEnd(),i.polygonEnd()}},x=Ce(),M=t(x);return y}}function Ae(n){return n.length>1}function Ce(){var n,t=[];return{lineStart:function(){t.push(n=[])},point:function(t,e){n.push([t,e])},lineEnd:g,buffer:function(){var e=t;return t=[],n=null,e},rejoin:function(){t.length>1&&t.push(t.pop().concat(t.shift()))}}}function Ne(n,t){return((n=n.x)[0]<0?n[1]-Ea-Aa:Ea-n[1])-((t=t.x)[0]<0?t[1]-Ea-Aa:Ea-t[1])}function Le(n,t){var e=n[0],r=n[1],u=[Math.sin(e),-Math.cos(e),0],i=0,o=0;hc.reset();for(var a=0,c=t.length;c>a;++a){var s=t[a],l=s.length;if(l)for(var f=s[0],h=f[0],g=f[1]/2+Sa/4,p=Math.sin(g),v=Math.cos(g),d=1;;){d===l&&(d=0),n=s[d];var m=n[0],y=n[1]/2+Sa/4,x=Math.sin(y),M=Math.cos(y),_=m-h,b=_>=0?1:-1,w=b*_,S=w>Sa,k=p*x;if(hc.add(Math.atan2(k*b*Math.sin(w),v*M+k*Math.cos(w))),i+=S?_+b*ka:_,S^h>=e^m>=e){var E=fe(se(f),se(n));pe(E);var A=fe(u,E);pe(A);var C=(S^_>=0?-1:1)*X(A[2]);(r>C||r===C&&(E[0]||E[1]))&&(o+=S^_>=0?1:-1)}if(!d++)break;h=m,p=x,v=M,f=n}}return(-Aa>i||Aa>i&&0>hc)^1&o}function ze(n){var t,e=0/0,r=0/0,u=0/0;return{lineStart:function(){n.lineStart(),t=1},point:function(i,o){var a=i>0?Sa:-Sa,c=oa(i-e);oa(c-Sa)<Aa?(n.point(e,r=(r+o)/2>0?Ea:-Ea),n.point(u,r),n.lineEnd(),n.lineStart(),n.point(a,r),n.point(i,r),t=0):u!==a&&c>=Sa&&(oa(e-u)<Aa&&(e-=u*Aa),oa(i-a)<Aa&&(i-=a*Aa),r=qe(e,r,i,o),n.point(u,r),n.lineEnd(),n.lineStart(),n.point(a,r),t=0),n.point(e=i,r=o),u=a},lineEnd:function(){n.lineEnd(),e=r=0/0},clean:function(){return 2-t}}}function qe(n,t,e,r){var u,i,o=Math.sin(n-e);return oa(o)>Aa?Math.atan((Math.sin(t)*(i=Math.cos(r))*Math.sin(e)-Math.sin(r)*(u=Math.cos(t))*Math.sin(n))/(u*i*o)):(t+r)/2}function Te(n,t,e,r){var u;if(null==n)u=e*Ea,r.point(-Sa,u),r.point(0,u),r.point(Sa,u),r.point(Sa,0),r.point(Sa,-u),r.point(0,-u),r.point(-Sa,-u),r.point(-Sa,0),r.point(-Sa,u);else if(oa(n[0]-t[0])>Aa){var i=n[0]<t[0]?Sa:-Sa;u=e*i/2,r.point(-i,u),r.point(0,u),r.point(i,u)}else r.point(t[0],t[1])}function Re(n){function t(n,t){return Math.cos(n)*Math.cos(t)>i}function e(n){var e,i,c,s,l;return{lineStart:function(){s=c=!1,l=1},point:function(f,h){var g,p=[f,h],v=t(f,h),d=o?v?0:u(f,h):v?u(f+(0>f?Sa:-Sa),h):0;if(!e&&(s=c=v)&&n.lineStart(),v!==c&&(g=r(e,p),(de(e,g)||de(p,g))&&(p[0]+=Aa,p[1]+=Aa,v=t(p[0],p[1]))),v!==c)l=0,v?(n.lineStart(),g=r(p,e),n.point(g[0],g[1])):(g=r(e,p),n.point(g[0],g[1]),n.lineEnd()),e=g;else if(a&&e&&o^v){var m;d&i||!(m=r(p,e,!0))||(l=0,o?(n.lineStart(),n.point(m[0][0],m[0][1]),n.point(m[1][0],m[1][1]),n.lineEnd()):(n.point(m[1][0],m[1][1]),n.lineEnd(),n.lineStart(),n.point(m[0][0],m[0][1])))}!v||e&&de(e,p)||n.point(p[0],p[1]),e=p,c=v,i=d},lineEnd:function(){c&&n.lineEnd(),e=null},clean:function(){return l|(s&&c)<<1}}}function r(n,t,e){var r=se(n),u=se(t),o=[1,0,0],a=fe(r,u),c=le(a,a),s=a[0],l=c-s*s;if(!l)return!e&&n;var f=i*c/l,h=-i*s/l,g=fe(o,a),p=ge(o,f),v=ge(a,h);he(p,v);var d=g,m=le(p,d),y=le(d,d),x=m*m-y*(le(p,p)-1);if(!(0>x)){var M=Math.sqrt(x),_=ge(d,(-m-M)/y);if(he(_,p),_=ve(_),!e)return _;var b,w=n[0],S=t[0],k=n[1],E=t[1];w>S&&(b=w,w=S,S=b);var A=S-w,C=oa(A-Sa)<Aa,N=C||Aa>A;if(!C&&k>E&&(b=k,k=E,E=b),N?C?k+E>0^_[1]<(oa(_[0]-w)<Aa?k:E):k<=_[1]&&_[1]<=E:A>Sa^(w<=_[0]&&_[0]<=S)){var L=ge(d,(-m+M)/y);return he(L,p),[_,ve(L)]}}}function u(t,e){var r=o?n:Sa-n,u=0;return-r>t?u|=1:t>r&&(u|=2),-r>e?u|=4:e>r&&(u|=8),u}var i=Math.cos(n),o=i>0,a=oa(i)>Aa,c=cr(n,6*Na);return Ee(t,e,c,o?[0,-n]:[-Sa,n-Sa])}function De(n,t,e,r){return function(u){var i,o=u.a,a=u.b,c=o.x,s=o.y,l=a.x,f=a.y,h=0,g=1,p=l-c,v=f-s;if(i=n-c,p||!(i>0)){if(i/=p,0>p){if(h>i)return;g>i&&(g=i)}else if(p>0){if(i>g)return;i>h&&(h=i)}if(i=e-c,p||!(0>i)){if(i/=p,0>p){if(i>g)return;i>h&&(h=i)}else if(p>0){if(h>i)return;g>i&&(g=i)}if(i=t-s,v||!(i>0)){if(i/=v,0>v){if(h>i)return;g>i&&(g=i)}else if(v>0){if(i>g)return;i>h&&(h=i)}if(i=r-s,v||!(0>i)){if(i/=v,0>v){if(i>g)return;i>h&&(h=i)}else if(v>0){if(h>i)return;g>i&&(g=i)}return h>0&&(u.a={x:c+h*p,y:s+h*v}),1>g&&(u.b={x:c+g*p,y:s+g*v}),u}}}}}}function Pe(n,t,e,r){function u(r,u){return oa(r[0]-n)<Aa?u>0?0:3:oa(r[0]-e)<Aa?u>0?2:1:oa(r[1]-t)<Aa?u>0?1:0:u>0?3:2}function i(n,t){return o(n.x,t.x)}function o(n,t){var e=u(n,1),r=u(t,1);return e!==r?e-r:0===e?t[1]-n[1]:1===e?n[0]-t[0]:2===e?n[1]-t[1]:t[0]-n[0]}return function(a){function c(n){for(var t=0,e=d.length,r=n[1],u=0;e>u;++u)for(var i,o=1,a=d[u],c=a.length,s=a[0];c>o;++o)i=a[o],s[1]<=r?i[1]>r&&Z(s,i,n)>0&&++t:i[1]<=r&&Z(s,i,n)<0&&--t,s=i;return 0!==t}function s(i,a,c,s){var l=0,f=0;if(null==i||(l=u(i,c))!==(f=u(a,c))||o(i,a)<0^c>0){do s.point(0===l||3===l?n:e,l>1?r:t);while((l=(l+c+4)%4)!==f)}else s.point(a[0],a[1])}function l(u,i){return u>=n&&e>=u&&i>=t&&r>=i}function f(n,t){l(n,t)&&a.point(n,t)}function h(){N.point=p,d&&d.push(m=[]),S=!0,w=!1,_=b=0/0}function g(){v&&(p(y,x),M&&w&&A.rejoin(),v.push(A.buffer())),N.point=f,w&&a.lineEnd()}function p(n,t){n=Math.max(-Ac,Math.min(Ac,n)),t=Math.max(-Ac,Math.min(Ac,t));var e=l(n,t);if(d&&m.push([n,t]),S)y=n,x=t,M=e,S=!1,e&&(a.lineStart(),a.point(n,t));else if(e&&w)a.point(n,t);else{var r={a:{x:_,y:b},b:{x:n,y:t}};C(r)?(w||(a.lineStart(),a.point(r.a.x,r.a.y)),a.point(r.b.x,r.b.y),e||a.lineEnd(),k=!1):e&&(a.lineStart(),a.point(n,t),k=!1)}_=n,b=t,w=e}var v,d,m,y,x,M,_,b,w,S,k,E=a,A=Ce(),C=De(n,t,e,r),N={point:f,lineStart:h,lineEnd:g,polygonStart:function(){a=A,v=[],d=[],k=!0},polygonEnd:function(){a=E,v=Xo.merge(v);var t=c([n,r]),e=k&&t,u=v.length;(e||u)&&(a.polygonStart(),e&&(a.lineStart(),s(null,null,1,a),a.lineEnd()),u&&we(v,i,t,s,a),a.polygonEnd()),v=d=m=null}};return N}}function Ue(n,t){function e(e,r){return e=n(e,r),t(e[0],e[1])}return n.invert&&t.invert&&(e.invert=function(e,r){return e=t.invert(e,r),e&&n.invert(e[0],e[1])}),e}function je(n){var t=0,e=Sa/3,r=nr(n),u=r(t,e);return u.parallels=function(n){return arguments.length?r(t=n[0]*Sa/180,e=n[1]*Sa/180):[180*(t/Sa),180*(e/Sa)]},u}function He(n,t){function e(n,t){var e=Math.sqrt(i-2*u*Math.sin(t))/u;return[e*Math.sin(n*=u),o-e*Math.cos(n)]}var r=Math.sin(n),u=(r+Math.sin(t))/2,i=1+r*(2*u-r),o=Math.sqrt(i)/u;return e.invert=function(n,t){var e=o-t;return[Math.atan2(n,e)/u,X((i-(n*n+e*e)*u*u)/(2*u))]},e}function Fe(){function n(n,t){Nc+=u*n-r*t,r=n,u=t}var t,e,r,u;Rc.point=function(i,o){Rc.point=n,t=r=i,e=u=o},Rc.lineEnd=function(){n(t,e)}}function Oe(n,t){Lc>n&&(Lc=n),n>qc&&(qc=n),zc>t&&(zc=t),t>Tc&&(Tc=t)}function Ye(){function n(n,t){o.push("M",n,",",t,i)}function t(n,t){o.push("M",n,",",t),a.point=e}function e(n,t){o.push("L",n,",",t)}function r(){a.point=n}function u(){o.push("Z")}var i=Ie(4.5),o=[],a={point:n,lineStart:function(){a.point=t},lineEnd:r,polygonStart:function(){a.lineEnd=u},polygonEnd:function(){a.lineEnd=r,a.point=n},pointRadius:function(n){return i=Ie(n),a},result:function(){if(o.length){var n=o.join("");return o=[],n}}};return a}function Ie(n){return"m0,"+n+"a"+n+","+n+" 0 1,1 0,"+-2*n+"a"+n+","+n+" 0 1,1 0,"+2*n+"z"}function Ze(n,t){dc+=n,mc+=t,++yc}function Ve(){function n(n,r){var u=n-t,i=r-e,o=Math.sqrt(u*u+i*i);xc+=o*(t+n)/2,Mc+=o*(e+r)/2,_c+=o,Ze(t=n,e=r)}var t,e;Pc.point=function(r,u){Pc.point=n,Ze(t=r,e=u)}}function Xe(){Pc.point=Ze}function $e(){function n(n,t){var e=n-r,i=t-u,o=Math.sqrt(e*e+i*i);xc+=o*(r+n)/2,Mc+=o*(u+t)/2,_c+=o,o=u*n-r*t,bc+=o*(r+n),wc+=o*(u+t),Sc+=3*o,Ze(r=n,u=t)}var t,e,r,u;Pc.point=function(i,o){Pc.point=n,Ze(t=r=i,e=u=o)},Pc.lineEnd=function(){n(t,e)}}function Be(n){function t(t,e){n.moveTo(t,e),n.arc(t,e,o,0,ka)}function e(t,e){n.moveTo(t,e),a.point=r}function r(t,e){n.lineTo(t,e)}function u(){a.point=t}function i(){n.closePath()}var o=4.5,a={point:t,lineStart:function(){a.point=e},lineEnd:u,polygonStart:function(){a.lineEnd=i},polygonEnd:function(){a.lineEnd=u,a.point=t},pointRadius:function(n){return o=n,a},result:g};return a}function We(n){function t(n){return(a?r:e)(n)}function e(t){return Ke(t,function(e,r){e=n(e,r),t.point(e[0],e[1])})}function r(t){function e(e,r){e=n(e,r),t.point(e[0],e[1])}function r(){x=0/0,S.point=i,t.lineStart()}function i(e,r){var i=se([e,r]),o=n(e,r);u(x,M,y,_,b,w,x=o[0],M=o[1],y=e,_=i[0],b=i[1],w=i[2],a,t),t.point(x,M)}function o(){S.point=e,t.lineEnd()}function c(){r(),S.point=s,S.lineEnd=l}function s(n,t){i(f=n,h=t),g=x,p=M,v=_,d=b,m=w,S.point=i}function l(){u(x,M,y,_,b,w,g,p,f,v,d,m,a,t),S.lineEnd=o,o()}var f,h,g,p,v,d,m,y,x,M,_,b,w,S={point:e,lineStart:r,lineEnd:o,polygonStart:function(){t.polygonStart(),S.lineStart=c},polygonEnd:function(){t.polygonEnd(),S.lineStart=r}};return S}function u(t,e,r,a,c,s,l,f,h,g,p,v,d,m){var y=l-t,x=f-e,M=y*y+x*x;if(M>4*i&&d--){var _=a+g,b=c+p,w=s+v,S=Math.sqrt(_*_+b*b+w*w),k=Math.asin(w/=S),E=oa(oa(w)-1)<Aa||oa(r-h)<Aa?(r+h)/2:Math.atan2(b,_),A=n(E,k),C=A[0],N=A[1],L=C-t,z=N-e,q=x*L-y*z;(q*q/M>i||oa((y*L+x*z)/M-.5)>.3||o>a*g+c*p+s*v)&&(u(t,e,r,a,c,s,C,N,E,_/=S,b/=S,w,d,m),m.point(C,N),u(C,N,E,_,b,w,l,f,h,g,p,v,d,m))}}var i=.5,o=Math.cos(30*Na),a=16;return t.precision=function(n){return arguments.length?(a=(i=n*n)>0&&16,t):Math.sqrt(i)},t}function Je(n){var t=We(function(t,e){return n([t*La,e*La])});return function(n){return tr(t(n))}}function Ge(n){this.stream=n}function Ke(n,t){return{point:t,sphere:function(){n.sphere()},lineStart:function(){n.lineStart()},lineEnd:function(){n.lineEnd()},polygonStart:function(){n.polygonStart()},polygonEnd:function(){n.polygonEnd()}}}function Qe(n){return nr(function(){return n})()}function nr(n){function t(n){return n=a(n[0]*Na,n[1]*Na),[n[0]*h+c,s-n[1]*h]}function e(n){return n=a.invert((n[0]-c)/h,(s-n[1])/h),n&&[n[0]*La,n[1]*La]}function r(){a=Ue(o=ur(m,y,x),i);var n=i(v,d);return c=g-n[0]*h,s=p+n[1]*h,u()}function u(){return l&&(l.valid=!1,l=null),t}var i,o,a,c,s,l,f=We(function(n,t){return n=i(n,t),[n[0]*h+c,s-n[1]*h]}),h=150,g=480,p=250,v=0,d=0,m=0,y=0,x=0,M=Ec,_=bt,b=null,w=null;return t.stream=function(n){return l&&(l.valid=!1),l=tr(M(o,f(_(n)))),l.valid=!0,l
},t.clipAngle=function(n){return arguments.length?(M=null==n?(b=n,Ec):Re((b=+n)*Na),u()):b},t.clipExtent=function(n){return arguments.length?(w=n,_=n?Pe(n[0][0],n[0][1],n[1][0],n[1][1]):bt,u()):w},t.scale=function(n){return arguments.length?(h=+n,r()):h},t.translate=function(n){return arguments.length?(g=+n[0],p=+n[1],r()):[g,p]},t.center=function(n){return arguments.length?(v=n[0]%360*Na,d=n[1]%360*Na,r()):[v*La,d*La]},t.rotate=function(n){return arguments.length?(m=n[0]%360*Na,y=n[1]%360*Na,x=n.length>2?n[2]%360*Na:0,r()):[m*La,y*La,x*La]},Xo.rebind(t,f,"precision"),function(){return i=n.apply(this,arguments),t.invert=i.invert&&e,r()}}function tr(n){return Ke(n,function(t,e){n.point(t*Na,e*Na)})}function er(n,t){return[n,t]}function rr(n,t){return[n>Sa?n-ka:-Sa>n?n+ka:n,t]}function ur(n,t,e){return n?t||e?Ue(or(n),ar(t,e)):or(n):t||e?ar(t,e):rr}function ir(n){return function(t,e){return t+=n,[t>Sa?t-ka:-Sa>t?t+ka:t,e]}}function or(n){var t=ir(n);return t.invert=ir(-n),t}function ar(n,t){function e(n,t){var e=Math.cos(t),a=Math.cos(n)*e,c=Math.sin(n)*e,s=Math.sin(t),l=s*r+a*u;return[Math.atan2(c*i-l*o,a*r-s*u),X(l*i+c*o)]}var r=Math.cos(n),u=Math.sin(n),i=Math.cos(t),o=Math.sin(t);return e.invert=function(n,t){var e=Math.cos(t),a=Math.cos(n)*e,c=Math.sin(n)*e,s=Math.sin(t),l=s*i-c*o;return[Math.atan2(c*i+s*o,a*r+l*u),X(l*r-a*u)]},e}function cr(n,t){var e=Math.cos(n),r=Math.sin(n);return function(u,i,o,a){var c=o*t;null!=u?(u=sr(e,u),i=sr(e,i),(o>0?i>u:u>i)&&(u+=o*ka)):(u=n+o*ka,i=n-.5*c);for(var s,l=u;o>0?l>i:i>l;l-=c)a.point((s=ve([e,-r*Math.cos(l),-r*Math.sin(l)]))[0],s[1])}}function sr(n,t){var e=se(t);e[0]-=n,pe(e);var r=V(-e[1]);return((-e[2]<0?-r:r)+2*Math.PI-Aa)%(2*Math.PI)}function lr(n,t,e){var r=Xo.range(n,t-Aa,e).concat(t);return function(n){return r.map(function(t){return[n,t]})}}function fr(n,t,e){var r=Xo.range(n,t-Aa,e).concat(t);return function(n){return r.map(function(t){return[t,n]})}}function hr(n){return n.source}function gr(n){return n.target}function pr(n,t,e,r){var u=Math.cos(t),i=Math.sin(t),o=Math.cos(r),a=Math.sin(r),c=u*Math.cos(n),s=u*Math.sin(n),l=o*Math.cos(e),f=o*Math.sin(e),h=2*Math.asin(Math.sqrt(J(r-t)+u*o*J(e-n))),g=1/Math.sin(h),p=h?function(n){var t=Math.sin(n*=h)*g,e=Math.sin(h-n)*g,r=e*c+t*l,u=e*s+t*f,o=e*i+t*a;return[Math.atan2(u,r)*La,Math.atan2(o,Math.sqrt(r*r+u*u))*La]}:function(){return[n*La,t*La]};return p.distance=h,p}function vr(){function n(n,u){var i=Math.sin(u*=Na),o=Math.cos(u),a=oa((n*=Na)-t),c=Math.cos(a);Uc+=Math.atan2(Math.sqrt((a=o*Math.sin(a))*a+(a=r*i-e*o*c)*a),e*i+r*o*c),t=n,e=i,r=o}var t,e,r;jc.point=function(u,i){t=u*Na,e=Math.sin(i*=Na),r=Math.cos(i),jc.point=n},jc.lineEnd=function(){jc.point=jc.lineEnd=g}}function dr(n,t){function e(t,e){var r=Math.cos(t),u=Math.cos(e),i=n(r*u);return[i*u*Math.sin(t),i*Math.sin(e)]}return e.invert=function(n,e){var r=Math.sqrt(n*n+e*e),u=t(r),i=Math.sin(u),o=Math.cos(u);return[Math.atan2(n*i,r*o),Math.asin(r&&e*i/r)]},e}function mr(n,t){function e(n,t){var e=oa(oa(t)-Ea)<Aa?0:o/Math.pow(u(t),i);return[e*Math.sin(i*n),o-e*Math.cos(i*n)]}var r=Math.cos(n),u=function(n){return Math.tan(Sa/4+n/2)},i=n===t?Math.sin(n):Math.log(r/Math.cos(t))/Math.log(u(t)/u(n)),o=r*Math.pow(u(n),i)/i;return i?(e.invert=function(n,t){var e=o-t,r=I(i)*Math.sqrt(n*n+e*e);return[Math.atan2(n,e)/i,2*Math.atan(Math.pow(o/r,1/i))-Ea]},e):xr}function yr(n,t){function e(n,t){var e=i-t;return[e*Math.sin(u*n),i-e*Math.cos(u*n)]}var r=Math.cos(n),u=n===t?Math.sin(n):(r-Math.cos(t))/(t-n),i=r/u+n;return oa(u)<Aa?er:(e.invert=function(n,t){var e=i-t;return[Math.atan2(n,e)/u,i-I(u)*Math.sqrt(n*n+e*e)]},e)}function xr(n,t){return[n,Math.log(Math.tan(Sa/4+t/2))]}function Mr(n){var t,e=Qe(n),r=e.scale,u=e.translate,i=e.clipExtent;return e.scale=function(){var n=r.apply(e,arguments);return n===e?t?e.clipExtent(null):e:n},e.translate=function(){var n=u.apply(e,arguments);return n===e?t?e.clipExtent(null):e:n},e.clipExtent=function(n){var o=i.apply(e,arguments);if(o===e){if(t=null==n){var a=Sa*r(),c=u();i([[c[0]-a,c[1]-a],[c[0]+a,c[1]+a]])}}else t&&(o=null);return o},e.clipExtent(null)}function _r(n,t){return[Math.log(Math.tan(Sa/4+t/2)),-n]}function br(n){return n[0]}function wr(n){return n[1]}function Sr(n){for(var t=n.length,e=[0,1],r=2,u=2;t>u;u++){for(;r>1&&Z(n[e[r-2]],n[e[r-1]],n[u])<=0;)--r;e[r++]=u}return e.slice(0,r)}function kr(n,t){return n[0]-t[0]||n[1]-t[1]}function Er(n,t,e){return(e[0]-t[0])*(n[1]-t[1])<(e[1]-t[1])*(n[0]-t[0])}function Ar(n,t,e,r){var u=n[0],i=e[0],o=t[0]-u,a=r[0]-i,c=n[1],s=e[1],l=t[1]-c,f=r[1]-s,h=(a*(c-s)-f*(u-i))/(f*o-a*l);return[u+h*o,c+h*l]}function Cr(n){var t=n[0],e=n[n.length-1];return!(t[0]-e[0]||t[1]-e[1])}function Nr(){Jr(this),this.edge=this.site=this.circle=null}function Lr(n){var t=Jc.pop()||new Nr;return t.site=n,t}function zr(n){Or(n),$c.remove(n),Jc.push(n),Jr(n)}function qr(n){var t=n.circle,e=t.x,r=t.cy,u={x:e,y:r},i=n.P,o=n.N,a=[n];zr(n);for(var c=i;c.circle&&oa(e-c.circle.x)<Aa&&oa(r-c.circle.cy)<Aa;)i=c.P,a.unshift(c),zr(c),c=i;a.unshift(c),Or(c);for(var s=o;s.circle&&oa(e-s.circle.x)<Aa&&oa(r-s.circle.cy)<Aa;)o=s.N,a.push(s),zr(s),s=o;a.push(s),Or(s);var l,f=a.length;for(l=1;f>l;++l)s=a[l],c=a[l-1],$r(s.edge,c.site,s.site,u);c=a[0],s=a[f-1],s.edge=Vr(c.site,s.site,null,u),Fr(c),Fr(s)}function Tr(n){for(var t,e,r,u,i=n.x,o=n.y,a=$c._;a;)if(r=Rr(a,o)-i,r>Aa)a=a.L;else{if(u=i-Dr(a,o),!(u>Aa)){r>-Aa?(t=a.P,e=a):u>-Aa?(t=a,e=a.N):t=e=a;break}if(!a.R){t=a;break}a=a.R}var c=Lr(n);if($c.insert(t,c),t||e){if(t===e)return Or(t),e=Lr(t.site),$c.insert(c,e),c.edge=e.edge=Vr(t.site,c.site),Fr(t),Fr(e),void 0;if(!e)return c.edge=Vr(t.site,c.site),void 0;Or(t),Or(e);var s=t.site,l=s.x,f=s.y,h=n.x-l,g=n.y-f,p=e.site,v=p.x-l,d=p.y-f,m=2*(h*d-g*v),y=h*h+g*g,x=v*v+d*d,M={x:(d*y-g*x)/m+l,y:(h*x-v*y)/m+f};$r(e.edge,s,p,M),c.edge=Vr(s,n,null,M),e.edge=Vr(n,p,null,M),Fr(t),Fr(e)}}function Rr(n,t){var e=n.site,r=e.x,u=e.y,i=u-t;if(!i)return r;var o=n.P;if(!o)return-1/0;e=o.site;var a=e.x,c=e.y,s=c-t;if(!s)return a;var l=a-r,f=1/i-1/s,h=l/s;return f?(-h+Math.sqrt(h*h-2*f*(l*l/(-2*s)-c+s/2+u-i/2)))/f+r:(r+a)/2}function Dr(n,t){var e=n.N;if(e)return Rr(e,t);var r=n.site;return r.y===t?r.x:1/0}function Pr(n){this.site=n,this.edges=[]}function Ur(n){for(var t,e,r,u,i,o,a,c,s,l,f=n[0][0],h=n[1][0],g=n[0][1],p=n[1][1],v=Xc,d=v.length;d--;)if(i=v[d],i&&i.prepare())for(a=i.edges,c=a.length,o=0;c>o;)l=a[o].end(),r=l.x,u=l.y,s=a[++o%c].start(),t=s.x,e=s.y,(oa(r-t)>Aa||oa(u-e)>Aa)&&(a.splice(o,0,new Br(Xr(i.site,l,oa(r-f)<Aa&&p-u>Aa?{x:f,y:oa(t-f)<Aa?e:p}:oa(u-p)<Aa&&h-r>Aa?{x:oa(e-p)<Aa?t:h,y:p}:oa(r-h)<Aa&&u-g>Aa?{x:h,y:oa(t-h)<Aa?e:g}:oa(u-g)<Aa&&r-f>Aa?{x:oa(e-g)<Aa?t:f,y:g}:null),i.site,null)),++c)}function jr(n,t){return t.angle-n.angle}function Hr(){Jr(this),this.x=this.y=this.arc=this.site=this.cy=null}function Fr(n){var t=n.P,e=n.N;if(t&&e){var r=t.site,u=n.site,i=e.site;if(r!==i){var o=u.x,a=u.y,c=r.x-o,s=r.y-a,l=i.x-o,f=i.y-a,h=2*(c*f-s*l);if(!(h>=-Ca)){var g=c*c+s*s,p=l*l+f*f,v=(f*g-s*p)/h,d=(c*p-l*g)/h,f=d+a,m=Gc.pop()||new Hr;m.arc=n,m.site=u,m.x=v+o,m.y=f+Math.sqrt(v*v+d*d),m.cy=f,n.circle=m;for(var y=null,x=Wc._;x;)if(m.y<x.y||m.y===x.y&&m.x<=x.x){if(!x.L){y=x.P;break}x=x.L}else{if(!x.R){y=x;break}x=x.R}Wc.insert(y,m),y||(Bc=m)}}}}function Or(n){var t=n.circle;t&&(t.P||(Bc=t.N),Wc.remove(t),Gc.push(t),Jr(t),n.circle=null)}function Yr(n){for(var t,e=Vc,r=De(n[0][0],n[0][1],n[1][0],n[1][1]),u=e.length;u--;)t=e[u],(!Ir(t,n)||!r(t)||oa(t.a.x-t.b.x)<Aa&&oa(t.a.y-t.b.y)<Aa)&&(t.a=t.b=null,e.splice(u,1))}function Ir(n,t){var e=n.b;if(e)return!0;var r,u,i=n.a,o=t[0][0],a=t[1][0],c=t[0][1],s=t[1][1],l=n.l,f=n.r,h=l.x,g=l.y,p=f.x,v=f.y,d=(h+p)/2,m=(g+v)/2;if(v===g){if(o>d||d>=a)return;if(h>p){if(i){if(i.y>=s)return}else i={x:d,y:c};e={x:d,y:s}}else{if(i){if(i.y<c)return}else i={x:d,y:s};e={x:d,y:c}}}else if(r=(h-p)/(v-g),u=m-r*d,-1>r||r>1)if(h>p){if(i){if(i.y>=s)return}else i={x:(c-u)/r,y:c};e={x:(s-u)/r,y:s}}else{if(i){if(i.y<c)return}else i={x:(s-u)/r,y:s};e={x:(c-u)/r,y:c}}else if(v>g){if(i){if(i.x>=a)return}else i={x:o,y:r*o+u};e={x:a,y:r*a+u}}else{if(i){if(i.x<o)return}else i={x:a,y:r*a+u};e={x:o,y:r*o+u}}return n.a=i,n.b=e,!0}function Zr(n,t){this.l=n,this.r=t,this.a=this.b=null}function Vr(n,t,e,r){var u=new Zr(n,t);return Vc.push(u),e&&$r(u,n,t,e),r&&$r(u,t,n,r),Xc[n.i].edges.push(new Br(u,n,t)),Xc[t.i].edges.push(new Br(u,t,n)),u}function Xr(n,t,e){var r=new Zr(n,null);return r.a=t,r.b=e,Vc.push(r),r}function $r(n,t,e,r){n.a||n.b?n.l===e?n.b=r:n.a=r:(n.a=r,n.l=t,n.r=e)}function Br(n,t,e){var r=n.a,u=n.b;this.edge=n,this.site=t,this.angle=e?Math.atan2(e.y-t.y,e.x-t.x):n.l===t?Math.atan2(u.x-r.x,r.y-u.y):Math.atan2(r.x-u.x,u.y-r.y)}function Wr(){this._=null}function Jr(n){n.U=n.C=n.L=n.R=n.P=n.N=null}function Gr(n,t){var e=t,r=t.R,u=e.U;u?u.L===e?u.L=r:u.R=r:n._=r,r.U=u,e.U=r,e.R=r.L,e.R&&(e.R.U=e),r.L=e}function Kr(n,t){var e=t,r=t.L,u=e.U;u?u.L===e?u.L=r:u.R=r:n._=r,r.U=u,e.U=r,e.L=r.R,e.L&&(e.L.U=e),r.R=e}function Qr(n){for(;n.L;)n=n.L;return n}function nu(n,t){var e,r,u,i=n.sort(tu).pop();for(Vc=[],Xc=new Array(n.length),$c=new Wr,Wc=new Wr;;)if(u=Bc,i&&(!u||i.y<u.y||i.y===u.y&&i.x<u.x))(i.x!==e||i.y!==r)&&(Xc[i.i]=new Pr(i),Tr(i),e=i.x,r=i.y),i=n.pop();else{if(!u)break;qr(u.arc)}t&&(Yr(t),Ur(t));var o={cells:Xc,edges:Vc};return $c=Wc=Vc=Xc=null,o}function tu(n,t){return t.y-n.y||t.x-n.x}function eu(n,t,e){return(n.x-e.x)*(t.y-n.y)-(n.x-t.x)*(e.y-n.y)}function ru(n){return n.x}function uu(n){return n.y}function iu(){return{leaf:!0,nodes:[],point:null,x:null,y:null}}function ou(n,t,e,r,u,i){if(!n(t,e,r,u,i)){var o=.5*(e+u),a=.5*(r+i),c=t.nodes;c[0]&&ou(n,c[0],e,r,o,a),c[1]&&ou(n,c[1],o,r,u,a),c[2]&&ou(n,c[2],e,a,o,i),c[3]&&ou(n,c[3],o,a,u,i)}}function au(n,t){n=Xo.rgb(n),t=Xo.rgb(t);var e=n.r,r=n.g,u=n.b,i=t.r-e,o=t.g-r,a=t.b-u;return function(n){return"#"+vt(Math.round(e+i*n))+vt(Math.round(r+o*n))+vt(Math.round(u+a*n))}}function cu(n,t){var e,r={},u={};for(e in n)e in t?r[e]=fu(n[e],t[e]):u[e]=n[e];for(e in t)e in n||(u[e]=t[e]);return function(n){for(e in r)u[e]=r[e](n);return u}}function su(n,t){return t-=n=+n,function(e){return n+t*e}}function lu(n,t){var e,r,u,i,o,a=0,c=0,s=[],l=[];for(n+="",t+="",Qc.lastIndex=0,r=0;e=Qc.exec(t);++r)e.index&&s.push(t.substring(a,c=e.index)),l.push({i:s.length,x:e[0]}),s.push(null),a=Qc.lastIndex;for(a<t.length&&s.push(t.substring(a)),r=0,i=l.length;(e=Qc.exec(n))&&i>r;++r)if(o=l[r],o.x==e[0]){if(o.i)if(null==s[o.i+1])for(s[o.i-1]+=o.x,s.splice(o.i,1),u=r+1;i>u;++u)l[u].i--;else for(s[o.i-1]+=o.x+s[o.i+1],s.splice(o.i,2),u=r+1;i>u;++u)l[u].i-=2;else if(null==s[o.i+1])s[o.i]=o.x;else for(s[o.i]=o.x+s[o.i+1],s.splice(o.i+1,1),u=r+1;i>u;++u)l[u].i--;l.splice(r,1),i--,r--}else o.x=su(parseFloat(e[0]),parseFloat(o.x));for(;i>r;)o=l.pop(),null==s[o.i+1]?s[o.i]=o.x:(s[o.i]=o.x+s[o.i+1],s.splice(o.i+1,1)),i--;return 1===s.length?null==s[0]?(o=l[0].x,function(n){return o(n)+""}):function(){return t}:function(n){for(r=0;i>r;++r)s[(o=l[r]).i]=o.x(n);return s.join("")}}function fu(n,t){for(var e,r=Xo.interpolators.length;--r>=0&&!(e=Xo.interpolators[r](n,t)););return e}function hu(n,t){var e,r=[],u=[],i=n.length,o=t.length,a=Math.min(n.length,t.length);for(e=0;a>e;++e)r.push(fu(n[e],t[e]));for(;i>e;++e)u[e]=n[e];for(;o>e;++e)u[e]=t[e];return function(n){for(e=0;a>e;++e)u[e]=r[e](n);return u}}function gu(n){return function(t){return 0>=t?0:t>=1?1:n(t)}}function pu(n){return function(t){return 1-n(1-t)}}function vu(n){return function(t){return.5*(.5>t?n(2*t):2-n(2-2*t))}}function du(n){return n*n}function mu(n){return n*n*n}function yu(n){if(0>=n)return 0;if(n>=1)return 1;var t=n*n,e=t*n;return 4*(.5>n?e:3*(n-t)+e-.75)}function xu(n){return function(t){return Math.pow(t,n)}}function Mu(n){return 1-Math.cos(n*Ea)}function _u(n){return Math.pow(2,10*(n-1))}function bu(n){return 1-Math.sqrt(1-n*n)}function wu(n,t){var e;return arguments.length<2&&(t=.45),arguments.length?e=t/ka*Math.asin(1/n):(n=1,e=t/4),function(r){return 1+n*Math.pow(2,-10*r)*Math.sin((r-e)*ka/t)}}function Su(n){return n||(n=1.70158),function(t){return t*t*((n+1)*t-n)}}function ku(n){return 1/2.75>n?7.5625*n*n:2/2.75>n?7.5625*(n-=1.5/2.75)*n+.75:2.5/2.75>n?7.5625*(n-=2.25/2.75)*n+.9375:7.5625*(n-=2.625/2.75)*n+.984375}function Eu(n,t){n=Xo.hcl(n),t=Xo.hcl(t);var e=n.h,r=n.c,u=n.l,i=t.h-e,o=t.c-r,a=t.l-u;return isNaN(o)&&(o=0,r=isNaN(r)?t.c:r),isNaN(i)?(i=0,e=isNaN(e)?t.h:e):i>180?i-=360:-180>i&&(i+=360),function(n){return rt(e+i*n,r+o*n,u+a*n)+""}}function Au(n,t){n=Xo.hsl(n),t=Xo.hsl(t);var e=n.h,r=n.s,u=n.l,i=t.h-e,o=t.s-r,a=t.l-u;return isNaN(o)&&(o=0,r=isNaN(r)?t.s:r),isNaN(i)?(i=0,e=isNaN(e)?t.h:e):i>180?i-=360:-180>i&&(i+=360),function(n){return nt(e+i*n,r+o*n,u+a*n)+""}}function Cu(n,t){n=Xo.lab(n),t=Xo.lab(t);var e=n.l,r=n.a,u=n.b,i=t.l-e,o=t.a-r,a=t.b-u;return function(n){return ot(e+i*n,r+o*n,u+a*n)+""}}function Nu(n,t){return t-=n,function(e){return Math.round(n+t*e)}}function Lu(n){var t=[n.a,n.b],e=[n.c,n.d],r=qu(t),u=zu(t,e),i=qu(Tu(e,t,-u))||0;t[0]*e[1]<e[0]*t[1]&&(t[0]*=-1,t[1]*=-1,r*=-1,u*=-1),this.rotate=(r?Math.atan2(t[1],t[0]):Math.atan2(-e[0],e[1]))*La,this.translate=[n.e,n.f],this.scale=[r,i],this.skew=i?Math.atan2(u,i)*La:0}function zu(n,t){return n[0]*t[0]+n[1]*t[1]}function qu(n){var t=Math.sqrt(zu(n,n));return t&&(n[0]/=t,n[1]/=t),t}function Tu(n,t,e){return n[0]+=e*t[0],n[1]+=e*t[1],n}function Ru(n,t){var e,r=[],u=[],i=Xo.transform(n),o=Xo.transform(t),a=i.translate,c=o.translate,s=i.rotate,l=o.rotate,f=i.skew,h=o.skew,g=i.scale,p=o.scale;return a[0]!=c[0]||a[1]!=c[1]?(r.push("translate(",null,",",null,")"),u.push({i:1,x:su(a[0],c[0])},{i:3,x:su(a[1],c[1])})):c[0]||c[1]?r.push("translate("+c+")"):r.push(""),s!=l?(s-l>180?l+=360:l-s>180&&(s+=360),u.push({i:r.push(r.pop()+"rotate(",null,")")-2,x:su(s,l)})):l&&r.push(r.pop()+"rotate("+l+")"),f!=h?u.push({i:r.push(r.pop()+"skewX(",null,")")-2,x:su(f,h)}):h&&r.push(r.pop()+"skewX("+h+")"),g[0]!=p[0]||g[1]!=p[1]?(e=r.push(r.pop()+"scale(",null,",",null,")"),u.push({i:e-4,x:su(g[0],p[0])},{i:e-2,x:su(g[1],p[1])})):(1!=p[0]||1!=p[1])&&r.push(r.pop()+"scale("+p+")"),e=u.length,function(n){for(var t,i=-1;++i<e;)r[(t=u[i]).i]=t.x(n);return r.join("")}}function Du(n,t){return t=t-(n=+n)?1/(t-n):0,function(e){return(e-n)*t}}function Pu(n,t){return t=t-(n=+n)?1/(t-n):0,function(e){return Math.max(0,Math.min(1,(e-n)*t))}}function Uu(n){for(var t=n.source,e=n.target,r=Hu(t,e),u=[t];t!==r;)t=t.parent,u.push(t);for(var i=u.length;e!==r;)u.splice(i,0,e),e=e.parent;return u}function ju(n){for(var t=[],e=n.parent;null!=e;)t.push(n),n=e,e=e.parent;return t.push(n),t}function Hu(n,t){if(n===t)return n;for(var e=ju(n),r=ju(t),u=e.pop(),i=r.pop(),o=null;u===i;)o=u,u=e.pop(),i=r.pop();return o}function Fu(n){n.fixed|=2}function Ou(n){n.fixed&=-7}function Yu(n){n.fixed|=4,n.px=n.x,n.py=n.y}function Iu(n){n.fixed&=-5}function Zu(n,t,e){var r=0,u=0;if(n.charge=0,!n.leaf)for(var i,o=n.nodes,a=o.length,c=-1;++c<a;)i=o[c],null!=i&&(Zu(i,t,e),n.charge+=i.charge,r+=i.charge*i.cx,u+=i.charge*i.cy);if(n.point){n.leaf||(n.point.x+=Math.random()-.5,n.point.y+=Math.random()-.5);var s=t*e[n.point.index];n.charge+=n.pointCharge=s,r+=s*n.point.x,u+=s*n.point.y}n.cx=r/n.charge,n.cy=u/n.charge}function Vu(n,t){return Xo.rebind(n,t,"sort","children","value"),n.nodes=n,n.links=Wu,n}function Xu(n){return n.children}function $u(n){return n.value}function Bu(n,t){return t.value-n.value}function Wu(n){return Xo.merge(n.map(function(n){return(n.children||[]).map(function(t){return{source:n,target:t}})}))}function Ju(n){return n.x}function Gu(n){return n.y}function Ku(n,t,e){n.y0=t,n.y=e}function Qu(n){return Xo.range(n.length)}function ni(n){for(var t=-1,e=n[0].length,r=[];++t<e;)r[t]=0;return r}function ti(n){for(var t,e=1,r=0,u=n[0][1],i=n.length;i>e;++e)(t=n[e][1])>u&&(r=e,u=t);return r}function ei(n){return n.reduce(ri,0)}function ri(n,t){return n+t[1]}function ui(n,t){return ii(n,Math.ceil(Math.log(t.length)/Math.LN2+1))}function ii(n,t){for(var e=-1,r=+n[0],u=(n[1]-r)/t,i=[];++e<=t;)i[e]=u*e+r;return i}function oi(n){return[Xo.min(n),Xo.max(n)]}function ai(n,t){return n.parent==t.parent?1:2}function ci(n){var t=n.children;return t&&t.length?t[0]:n._tree.thread}function si(n){var t,e=n.children;return e&&(t=e.length)?e[t-1]:n._tree.thread}function li(n,t){var e=n.children;if(e&&(u=e.length))for(var r,u,i=-1;++i<u;)t(r=li(e[i],t),n)>0&&(n=r);return n}function fi(n,t){return n.x-t.x}function hi(n,t){return t.x-n.x}function gi(n,t){return n.depth-t.depth}function pi(n,t){function e(n,r){var u=n.children;if(u&&(o=u.length))for(var i,o,a=null,c=-1;++c<o;)i=u[c],e(i,a),a=i;t(n,r)}e(n,null)}function vi(n){for(var t,e=0,r=0,u=n.children,i=u.length;--i>=0;)t=u[i]._tree,t.prelim+=e,t.mod+=e,e+=t.shift+(r+=t.change)}function di(n,t,e){n=n._tree,t=t._tree;var r=e/(t.number-n.number);n.change+=r,t.change-=r,t.shift+=e,t.prelim+=e,t.mod+=e}function mi(n,t,e){return n._tree.ancestor.parent==t.parent?n._tree.ancestor:e}function yi(n,t){return n.value-t.value}function xi(n,t){var e=n._pack_next;n._pack_next=t,t._pack_prev=n,t._pack_next=e,e._pack_prev=t}function Mi(n,t){n._pack_next=t,t._pack_prev=n}function _i(n,t){var e=t.x-n.x,r=t.y-n.y,u=n.r+t.r;return.999*u*u>e*e+r*r}function bi(n){function t(n){l=Math.min(n.x-n.r,l),f=Math.max(n.x+n.r,f),h=Math.min(n.y-n.r,h),g=Math.max(n.y+n.r,g)}if((e=n.children)&&(s=e.length)){var e,r,u,i,o,a,c,s,l=1/0,f=-1/0,h=1/0,g=-1/0;if(e.forEach(wi),r=e[0],r.x=-r.r,r.y=0,t(r),s>1&&(u=e[1],u.x=u.r,u.y=0,t(u),s>2))for(i=e[2],Ei(r,u,i),t(i),xi(r,i),r._pack_prev=i,xi(i,u),u=r._pack_next,o=3;s>o;o++){Ei(r,u,i=e[o]);var p=0,v=1,d=1;for(a=u._pack_next;a!==u;a=a._pack_next,v++)if(_i(a,i)){p=1;break}if(1==p)for(c=r._pack_prev;c!==a._pack_prev&&!_i(c,i);c=c._pack_prev,d++);p?(d>v||v==d&&u.r<r.r?Mi(r,u=a):Mi(r=c,u),o--):(xi(r,i),u=i,t(i))}var m=(l+f)/2,y=(h+g)/2,x=0;for(o=0;s>o;o++)i=e[o],i.x-=m,i.y-=y,x=Math.max(x,i.r+Math.sqrt(i.x*i.x+i.y*i.y));n.r=x,e.forEach(Si)}}function wi(n){n._pack_next=n._pack_prev=n}function Si(n){delete n._pack_next,delete n._pack_prev}function ki(n,t,e,r){var u=n.children;if(n.x=t+=r*n.x,n.y=e+=r*n.y,n.r*=r,u)for(var i=-1,o=u.length;++i<o;)ki(u[i],t,e,r)}function Ei(n,t,e){var r=n.r+e.r,u=t.x-n.x,i=t.y-n.y;if(r&&(u||i)){var o=t.r+e.r,a=u*u+i*i;o*=o,r*=r;var c=.5+(r-o)/(2*a),s=Math.sqrt(Math.max(0,2*o*(r+a)-(r-=a)*r-o*o))/(2*a);e.x=n.x+c*u+s*i,e.y=n.y+c*i-s*u}else e.x=n.x+r,e.y=n.y}function Ai(n){return 1+Xo.max(n,function(n){return n.y})}function Ci(n){return n.reduce(function(n,t){return n+t.x},0)/n.length}function Ni(n){var t=n.children;return t&&t.length?Ni(t[0]):n}function Li(n){var t,e=n.children;return e&&(t=e.length)?Li(e[t-1]):n}function zi(n){return{x:n.x,y:n.y,dx:n.dx,dy:n.dy}}function qi(n,t){var e=n.x+t[3],r=n.y+t[0],u=n.dx-t[1]-t[3],i=n.dy-t[0]-t[2];return 0>u&&(e+=u/2,u=0),0>i&&(r+=i/2,i=0),{x:e,y:r,dx:u,dy:i}}function Ti(n){var t=n[0],e=n[n.length-1];return e>t?[t,e]:[e,t]}function Ri(n){return n.rangeExtent?n.rangeExtent():Ti(n.range())}function Di(n,t,e,r){var u=e(n[0],n[1]),i=r(t[0],t[1]);return function(n){return i(u(n))}}function Pi(n,t){var e,r=0,u=n.length-1,i=n[r],o=n[u];return i>o&&(e=r,r=u,u=e,e=i,i=o,o=e),n[r]=t.floor(i),n[u]=t.ceil(o),n}function Ui(n){return n?{floor:function(t){return Math.floor(t/n)*n},ceil:function(t){return Math.ceil(t/n)*n}}:ls}function ji(n,t,e,r){var u=[],i=[],o=0,a=Math.min(n.length,t.length)-1;for(n[a]<n[0]&&(n=n.slice().reverse(),t=t.slice().reverse());++o<=a;)u.push(e(n[o-1],n[o])),i.push(r(t[o-1],t[o]));return function(t){var e=Xo.bisect(n,t,1,a)-1;return i[e](u[e](t))}}function Hi(n,t,e,r){function u(){var u=Math.min(n.length,t.length)>2?ji:Di,c=r?Pu:Du;return o=u(n,t,c,e),a=u(t,n,c,fu),i}function i(n){return o(n)}var o,a;return i.invert=function(n){return a(n)},i.domain=function(t){return arguments.length?(n=t.map(Number),u()):n},i.range=function(n){return arguments.length?(t=n,u()):t},i.rangeRound=function(n){return i.range(n).interpolate(Nu)},i.clamp=function(n){return arguments.length?(r=n,u()):r},i.interpolate=function(n){return arguments.length?(e=n,u()):e},i.ticks=function(t){return Ii(n,t)},i.tickFormat=function(t,e){return Zi(n,t,e)},i.nice=function(t){return Oi(n,t),u()},i.copy=function(){return Hi(n,t,e,r)},u()}function Fi(n,t){return Xo.rebind(n,t,"range","rangeRound","interpolate","clamp")}function Oi(n,t){return Pi(n,Ui(Yi(n,t)[2]))}function Yi(n,t){null==t&&(t=10);var e=Ti(n),r=e[1]-e[0],u=Math.pow(10,Math.floor(Math.log(r/t)/Math.LN10)),i=t/r*u;return.15>=i?u*=10:.35>=i?u*=5:.75>=i&&(u*=2),e[0]=Math.ceil(e[0]/u)*u,e[1]=Math.floor(e[1]/u)*u+.5*u,e[2]=u,e}function Ii(n,t){return Xo.range.apply(Xo,Yi(n,t))}function Zi(n,t,e){var r=Yi(n,t);return Xo.format(e?e.replace(Qa,function(n,t,e,u,i,o,a,c,s,l){return[t,e,u,i,o,a,c,s||"."+Xi(l,r),l].join("")}):",."+Vi(r[2])+"f")}function Vi(n){return-Math.floor(Math.log(n)/Math.LN10+.01)}function Xi(n,t){var e=Vi(t[2]);return n in fs?Math.abs(e-Vi(Math.max(Math.abs(t[0]),Math.abs(t[1]))))+ +("e"!==n):e-2*("%"===n)}function $i(n,t,e,r){function u(n){return(e?Math.log(0>n?0:n):-Math.log(n>0?0:-n))/Math.log(t)}function i(n){return e?Math.pow(t,n):-Math.pow(t,-n)}function o(t){return n(u(t))}return o.invert=function(t){return i(n.invert(t))},o.domain=function(t){return arguments.length?(e=t[0]>=0,n.domain((r=t.map(Number)).map(u)),o):r},o.base=function(e){return arguments.length?(t=+e,n.domain(r.map(u)),o):t},o.nice=function(){var t=Pi(r.map(u),e?Math:gs);return n.domain(t),r=t.map(i),o},o.ticks=function(){var n=Ti(r),o=[],a=n[0],c=n[1],s=Math.floor(u(a)),l=Math.ceil(u(c)),f=t%1?2:t;if(isFinite(l-s)){if(e){for(;l>s;s++)for(var h=1;f>h;h++)o.push(i(s)*h);o.push(i(s))}else for(o.push(i(s));s++<l;)for(var h=f-1;h>0;h--)o.push(i(s)*h);for(s=0;o[s]<a;s++);for(l=o.length;o[l-1]>c;l--);o=o.slice(s,l)}return o},o.tickFormat=function(n,t){if(!arguments.length)return hs;arguments.length<2?t=hs:"function"!=typeof t&&(t=Xo.format(t));var r,a=Math.max(.1,n/o.ticks().length),c=e?(r=1e-12,Math.ceil):(r=-1e-12,Math.floor);return function(n){return n/i(c(u(n)+r))<=a?t(n):""}},o.copy=function(){return $i(n.copy(),t,e,r)},Fi(o,n)}function Bi(n,t,e){function r(t){return n(u(t))}var u=Wi(t),i=Wi(1/t);return r.invert=function(t){return i(n.invert(t))},r.domain=function(t){return arguments.length?(n.domain((e=t.map(Number)).map(u)),r):e},r.ticks=function(n){return Ii(e,n)},r.tickFormat=function(n,t){return Zi(e,n,t)},r.nice=function(n){return r.domain(Oi(e,n))},r.exponent=function(o){return arguments.length?(u=Wi(t=o),i=Wi(1/t),n.domain(e.map(u)),r):t},r.copy=function(){return Bi(n.copy(),t,e)},Fi(r,n)}function Wi(n){return function(t){return 0>t?-Math.pow(-t,n):Math.pow(t,n)}}function Ji(n,t){function e(e){return o[((i.get(e)||"range"===t.t&&i.set(e,n.push(e)))-1)%o.length]}function r(t,e){return Xo.range(n.length).map(function(n){return t+e*n})}var i,o,a;return e.domain=function(r){if(!arguments.length)return n;n=[],i=new u;for(var o,a=-1,c=r.length;++a<c;)i.has(o=r[a])||i.set(o,n.push(o));return e[t.t].apply(e,t.a)},e.range=function(n){return arguments.length?(o=n,a=0,t={t:"range",a:arguments},e):o},e.rangePoints=function(u,i){arguments.length<2&&(i=0);var c=u[0],s=u[1],l=(s-c)/(Math.max(1,n.length-1)+i);return o=r(n.length<2?(c+s)/2:c+l*i/2,l),a=0,t={t:"rangePoints",a:arguments},e},e.rangeBands=function(u,i,c){arguments.length<2&&(i=0),arguments.length<3&&(c=i);var s=u[1]<u[0],l=u[s-0],f=u[1-s],h=(f-l)/(n.length-i+2*c);return o=r(l+h*c,h),s&&o.reverse(),a=h*(1-i),t={t:"rangeBands",a:arguments},e},e.rangeRoundBands=function(u,i,c){arguments.length<2&&(i=0),arguments.length<3&&(c=i);var s=u[1]<u[0],l=u[s-0],f=u[1-s],h=Math.floor((f-l)/(n.length-i+2*c)),g=f-l-(n.length-i)*h;return o=r(l+Math.round(g/2),h),s&&o.reverse(),a=Math.round(h*(1-i)),t={t:"rangeRoundBands",a:arguments},e},e.rangeBand=function(){return a},e.rangeExtent=function(){return Ti(t.a[0])},e.copy=function(){return Ji(n,t)},e.domain(n)}function Gi(n,t){function e(){var e=0,i=t.length;for(u=[];++e<i;)u[e-1]=Xo.quantile(n,e/i);return r}function r(n){return isNaN(n=+n)?void 0:t[Xo.bisect(u,n)]}var u;return r.domain=function(t){return arguments.length?(n=t.filter(function(n){return!isNaN(n)}).sort(Xo.ascending),e()):n},r.range=function(n){return arguments.length?(t=n,e()):t},r.quantiles=function(){return u},r.invertExtent=function(e){return e=t.indexOf(e),0>e?[0/0,0/0]:[e>0?u[e-1]:n[0],e<u.length?u[e]:n[n.length-1]]},r.copy=function(){return Gi(n,t)},e()}function Ki(n,t,e){function r(t){return e[Math.max(0,Math.min(o,Math.floor(i*(t-n))))]}function u(){return i=e.length/(t-n),o=e.length-1,r}var i,o;return r.domain=function(e){return arguments.length?(n=+e[0],t=+e[e.length-1],u()):[n,t]},r.range=function(n){return arguments.length?(e=n,u()):e},r.invertExtent=function(t){return t=e.indexOf(t),t=0>t?0/0:t/i+n,[t,t+1/i]},r.copy=function(){return Ki(n,t,e)},u()}function Qi(n,t){function e(e){return e>=e?t[Xo.bisect(n,e)]:void 0}return e.domain=function(t){return arguments.length?(n=t,e):n},e.range=function(n){return arguments.length?(t=n,e):t},e.invertExtent=function(e){return e=t.indexOf(e),[n[e-1],n[e]]},e.copy=function(){return Qi(n,t)},e}function no(n){function t(n){return+n}return t.invert=t,t.domain=t.range=function(e){return arguments.length?(n=e.map(t),t):n},t.ticks=function(t){return Ii(n,t)},t.tickFormat=function(t,e){return Zi(n,t,e)},t.copy=function(){return no(n)},t}function to(n){return n.innerRadius}function eo(n){return n.outerRadius}function ro(n){return n.startAngle}function uo(n){return n.endAngle}function io(n){function t(t){function o(){s.push("M",i(n(l),a))}for(var c,s=[],l=[],f=-1,h=t.length,g=_t(e),p=_t(r);++f<h;)u.call(this,c=t[f],f)?l.push([+g.call(this,c,f),+p.call(this,c,f)]):l.length&&(o(),l=[]);return l.length&&o(),s.length?s.join(""):null}var e=br,r=wr,u=be,i=oo,o=i.key,a=.7;return t.x=function(n){return arguments.length?(e=n,t):e},t.y=function(n){return arguments.length?(r=n,t):r},t.defined=function(n){return arguments.length?(u=n,t):u},t.interpolate=function(n){return arguments.length?(o="function"==typeof n?i=n:(i=Ms.get(n)||oo).key,t):o},t.tension=function(n){return arguments.length?(a=n,t):a},t}function oo(n){return n.join("L")}function ao(n){return oo(n)+"Z"}function co(n){for(var t=0,e=n.length,r=n[0],u=[r[0],",",r[1]];++t<e;)u.push("H",(r[0]+(r=n[t])[0])/2,"V",r[1]);return e>1&&u.push("H",r[0]),u.join("")}function so(n){for(var t=0,e=n.length,r=n[0],u=[r[0],",",r[1]];++t<e;)u.push("V",(r=n[t])[1],"H",r[0]);return u.join("")}function lo(n){for(var t=0,e=n.length,r=n[0],u=[r[0],",",r[1]];++t<e;)u.push("H",(r=n[t])[0],"V",r[1]);return u.join("")}function fo(n,t){return n.length<4?oo(n):n[1]+po(n.slice(1,n.length-1),vo(n,t))}function ho(n,t){return n.length<3?oo(n):n[0]+po((n.push(n[0]),n),vo([n[n.length-2]].concat(n,[n[1]]),t))}function go(n,t){return n.length<3?oo(n):n[0]+po(n,vo(n,t))}function po(n,t){if(t.length<1||n.length!=t.length&&n.length!=t.length+2)return oo(n);var e=n.length!=t.length,r="",u=n[0],i=n[1],o=t[0],a=o,c=1;if(e&&(r+="Q"+(i[0]-2*o[0]/3)+","+(i[1]-2*o[1]/3)+","+i[0]+","+i[1],u=n[1],c=2),t.length>1){a=t[1],i=n[c],c++,r+="C"+(u[0]+o[0])+","+(u[1]+o[1])+","+(i[0]-a[0])+","+(i[1]-a[1])+","+i[0]+","+i[1];for(var s=2;s<t.length;s++,c++)i=n[c],a=t[s],r+="S"+(i[0]-a[0])+","+(i[1]-a[1])+","+i[0]+","+i[1]}if(e){var l=n[c];r+="Q"+(i[0]+2*a[0]/3)+","+(i[1]+2*a[1]/3)+","+l[0]+","+l[1]}return r}function vo(n,t){for(var e,r=[],u=(1-t)/2,i=n[0],o=n[1],a=1,c=n.length;++a<c;)e=i,i=o,o=n[a],r.push([u*(o[0]-e[0]),u*(o[1]-e[1])]);return r}function mo(n){if(n.length<3)return oo(n);var t=1,e=n.length,r=n[0],u=r[0],i=r[1],o=[u,u,u,(r=n[1])[0]],a=[i,i,i,r[1]],c=[u,",",i,"L",_o(ws,o),",",_o(ws,a)];for(n.push(n[e-1]);++t<=e;)r=n[t],o.shift(),o.push(r[0]),a.shift(),a.push(r[1]),bo(c,o,a);return n.pop(),c.push("L",r),c.join("")}function yo(n){if(n.length<4)return oo(n);for(var t,e=[],r=-1,u=n.length,i=[0],o=[0];++r<3;)t=n[r],i.push(t[0]),o.push(t[1]);for(e.push(_o(ws,i)+","+_o(ws,o)),--r;++r<u;)t=n[r],i.shift(),i.push(t[0]),o.shift(),o.push(t[1]),bo(e,i,o);return e.join("")}function xo(n){for(var t,e,r=-1,u=n.length,i=u+4,o=[],a=[];++r<4;)e=n[r%u],o.push(e[0]),a.push(e[1]);for(t=[_o(ws,o),",",_o(ws,a)],--r;++r<i;)e=n[r%u],o.shift(),o.push(e[0]),a.shift(),a.push(e[1]),bo(t,o,a);return t.join("")}function Mo(n,t){var e=n.length-1;if(e)for(var r,u,i=n[0][0],o=n[0][1],a=n[e][0]-i,c=n[e][1]-o,s=-1;++s<=e;)r=n[s],u=s/e,r[0]=t*r[0]+(1-t)*(i+u*a),r[1]=t*r[1]+(1-t)*(o+u*c);return mo(n)}function _o(n,t){return n[0]*t[0]+n[1]*t[1]+n[2]*t[2]+n[3]*t[3]}function bo(n,t,e){n.push("C",_o(_s,t),",",_o(_s,e),",",_o(bs,t),",",_o(bs,e),",",_o(ws,t),",",_o(ws,e))}function wo(n,t){return(t[1]-n[1])/(t[0]-n[0])}function So(n){for(var t=0,e=n.length-1,r=[],u=n[0],i=n[1],o=r[0]=wo(u,i);++t<e;)r[t]=(o+(o=wo(u=i,i=n[t+1])))/2;return r[t]=o,r}function ko(n){for(var t,e,r,u,i=[],o=So(n),a=-1,c=n.length-1;++a<c;)t=wo(n[a],n[a+1]),oa(t)<Aa?o[a]=o[a+1]=0:(e=o[a]/t,r=o[a+1]/t,u=e*e+r*r,u>9&&(u=3*t/Math.sqrt(u),o[a]=u*e,o[a+1]=u*r));for(a=-1;++a<=c;)u=(n[Math.min(c,a+1)][0]-n[Math.max(0,a-1)][0])/(6*(1+o[a]*o[a])),i.push([u||0,o[a]*u||0]);return i}function Eo(n){return n.length<3?oo(n):n[0]+po(n,ko(n))}function Ao(n){for(var t,e,r,u=-1,i=n.length;++u<i;)t=n[u],e=t[0],r=t[1]+ys,t[0]=e*Math.cos(r),t[1]=e*Math.sin(r);return n}function Co(n){function t(t){function c(){v.push("M",a(n(m),f),l,s(n(d.reverse()),f),"Z")}for(var h,g,p,v=[],d=[],m=[],y=-1,x=t.length,M=_t(e),_=_t(u),b=e===r?function(){return g}:_t(r),w=u===i?function(){return p}:_t(i);++y<x;)o.call(this,h=t[y],y)?(d.push([g=+M.call(this,h,y),p=+_.call(this,h,y)]),m.push([+b.call(this,h,y),+w.call(this,h,y)])):d.length&&(c(),d=[],m=[]);return d.length&&c(),v.length?v.join(""):null}var e=br,r=br,u=0,i=wr,o=be,a=oo,c=a.key,s=a,l="L",f=.7;return t.x=function(n){return arguments.length?(e=r=n,t):r},t.x0=function(n){return arguments.length?(e=n,t):e},t.x1=function(n){return arguments.length?(r=n,t):r},t.y=function(n){return arguments.length?(u=i=n,t):i},t.y0=function(n){return arguments.length?(u=n,t):u},t.y1=function(n){return arguments.length?(i=n,t):i},t.defined=function(n){return arguments.length?(o=n,t):o},t.interpolate=function(n){return arguments.length?(c="function"==typeof n?a=n:(a=Ms.get(n)||oo).key,s=a.reverse||a,l=a.closed?"M":"L",t):c},t.tension=function(n){return arguments.length?(f=n,t):f},t}function No(n){return n.radius}function Lo(n){return[n.x,n.y]}function zo(n){return function(){var t=n.apply(this,arguments),e=t[0],r=t[1]+ys;return[e*Math.cos(r),e*Math.sin(r)]}}function qo(){return 64}function To(){return"circle"}function Ro(n){var t=Math.sqrt(n/Sa);return"M0,"+t+"A"+t+","+t+" 0 1,1 0,"+-t+"A"+t+","+t+" 0 1,1 0,"+t+"Z"}function Do(n,t){return fa(n,Ns),n.id=t,n}function Po(n,t,e,r){var u=n.id;return R(n,"function"==typeof e?function(n,i,o){n.__transition__[u].tween.set(t,r(e.call(n,n.__data__,i,o)))}:(e=r(e),function(n){n.__transition__[u].tween.set(t,e)}))}function Uo(n){return null==n&&(n=""),function(){this.textContent=n}}function jo(n,t,e,r){var i=n.__transition__||(n.__transition__={active:0,count:0}),o=i[e];if(!o){var a=r.time;o=i[e]={tween:new u,time:a,ease:r.ease,delay:r.delay,duration:r.duration},++i.count,Xo.timer(function(r){function u(r){return i.active>e?s():(i.active=e,o.event&&o.event.start.call(n,l,t),o.tween.forEach(function(e,r){(r=r.call(n,l,t))&&v.push(r)}),Xo.timer(function(){return p.c=c(r||1)?be:c,1},0,a),void 0)}function c(r){if(i.active!==e)return s();for(var u=r/g,a=f(u),c=v.length;c>0;)v[--c].call(n,a);return u>=1?(o.event&&o.event.end.call(n,l,t),s()):void 0}function s(){return--i.count?delete i[e]:delete n.__transition__,1}var l=n.__data__,f=o.ease,h=o.delay,g=o.duration,p=Ja,v=[];return p.t=h+a,r>=h?u(r-h):(p.c=u,void 0)},0,a)}}function Ho(n,t){n.attr("transform",function(n){return"translate("+t(n)+",0)"})}function Fo(n,t){n.attr("transform",function(n){return"translate(0,"+t(n)+")"})}function Oo(n){return n.toISOString()}function Yo(n,t,e){function r(t){return n(t)}function u(n,e){var r=n[1]-n[0],u=r/e,i=Xo.bisect(js,u);
return i==js.length?[t.year,Yi(n.map(function(n){return n/31536e6}),e)[2]]:i?t[u/js[i-1]<js[i]/u?i-1:i]:[Os,Yi(n,e)[2]]}return r.invert=function(t){return Io(n.invert(t))},r.domain=function(t){return arguments.length?(n.domain(t),r):n.domain().map(Io)},r.nice=function(n,t){function e(e){return!isNaN(e)&&!n.range(e,Io(+e+1),t).length}var i=r.domain(),o=Ti(i),a=null==n?u(o,10):"number"==typeof n&&u(o,n);return a&&(n=a[0],t=a[1]),r.domain(Pi(i,t>1?{floor:function(t){for(;e(t=n.floor(t));)t=Io(t-1);return t},ceil:function(t){for(;e(t=n.ceil(t));)t=Io(+t+1);return t}}:n))},r.ticks=function(n,t){var e=Ti(r.domain()),i=null==n?u(e,10):"number"==typeof n?u(e,n):!n.range&&[{range:n},t];return i&&(n=i[0],t=i[1]),n.range(e[0],Io(+e[1]+1),1>t?1:t)},r.tickFormat=function(){return e},r.copy=function(){return Yo(n.copy(),t,e)},Fi(r,n)}function Io(n){return new Date(n)}function Zo(n){return JSON.parse(n.responseText)}function Vo(n){var t=Wo.createRange();return t.selectNode(Wo.body),t.createContextualFragment(n.responseText)}var Xo={version:"3.4.3"};Date.now||(Date.now=function(){return+new Date});var $o=[].slice,Bo=function(n){return $o.call(n)},Wo=document,Jo=Wo.documentElement,Go=window;try{Bo(Jo.childNodes)[0].nodeType}catch(Ko){Bo=function(n){for(var t=n.length,e=new Array(t);t--;)e[t]=n[t];return e}}try{Wo.createElement("div").style.setProperty("opacity",0,"")}catch(Qo){var na=Go.Element.prototype,ta=na.setAttribute,ea=na.setAttributeNS,ra=Go.CSSStyleDeclaration.prototype,ua=ra.setProperty;na.setAttribute=function(n,t){ta.call(this,n,t+"")},na.setAttributeNS=function(n,t,e){ea.call(this,n,t,e+"")},ra.setProperty=function(n,t,e){ua.call(this,n,t+"",e)}}Xo.ascending=function(n,t){return t>n?-1:n>t?1:n>=t?0:0/0},Xo.descending=function(n,t){return n>t?-1:t>n?1:t>=n?0:0/0},Xo.min=function(n,t){var e,r,u=-1,i=n.length;if(1===arguments.length){for(;++u<i&&!(null!=(e=n[u])&&e>=e);)e=void 0;for(;++u<i;)null!=(r=n[u])&&e>r&&(e=r)}else{for(;++u<i&&!(null!=(e=t.call(n,n[u],u))&&e>=e);)e=void 0;for(;++u<i;)null!=(r=t.call(n,n[u],u))&&e>r&&(e=r)}return e},Xo.max=function(n,t){var e,r,u=-1,i=n.length;if(1===arguments.length){for(;++u<i&&!(null!=(e=n[u])&&e>=e);)e=void 0;for(;++u<i;)null!=(r=n[u])&&r>e&&(e=r)}else{for(;++u<i&&!(null!=(e=t.call(n,n[u],u))&&e>=e);)e=void 0;for(;++u<i;)null!=(r=t.call(n,n[u],u))&&r>e&&(e=r)}return e},Xo.extent=function(n,t){var e,r,u,i=-1,o=n.length;if(1===arguments.length){for(;++i<o&&!(null!=(e=u=n[i])&&e>=e);)e=u=void 0;for(;++i<o;)null!=(r=n[i])&&(e>r&&(e=r),r>u&&(u=r))}else{for(;++i<o&&!(null!=(e=u=t.call(n,n[i],i))&&e>=e);)e=void 0;for(;++i<o;)null!=(r=t.call(n,n[i],i))&&(e>r&&(e=r),r>u&&(u=r))}return[e,u]},Xo.sum=function(n,t){var e,r=0,u=n.length,i=-1;if(1===arguments.length)for(;++i<u;)isNaN(e=+n[i])||(r+=e);else for(;++i<u;)isNaN(e=+t.call(n,n[i],i))||(r+=e);return r},Xo.mean=function(t,e){var r,u=t.length,i=0,o=-1,a=0;if(1===arguments.length)for(;++o<u;)n(r=t[o])&&(i+=(r-i)/++a);else for(;++o<u;)n(r=e.call(t,t[o],o))&&(i+=(r-i)/++a);return a?i:void 0},Xo.quantile=function(n,t){var e=(n.length-1)*t+1,r=Math.floor(e),u=+n[r-1],i=e-r;return i?u+i*(n[r]-u):u},Xo.median=function(t,e){return arguments.length>1&&(t=t.map(e)),t=t.filter(n),t.length?Xo.quantile(t.sort(Xo.ascending),.5):void 0},Xo.bisector=function(n){return{left:function(t,e,r,u){for(arguments.length<3&&(r=0),arguments.length<4&&(u=t.length);u>r;){var i=r+u>>>1;n.call(t,t[i],i)<e?r=i+1:u=i}return r},right:function(t,e,r,u){for(arguments.length<3&&(r=0),arguments.length<4&&(u=t.length);u>r;){var i=r+u>>>1;e<n.call(t,t[i],i)?u=i:r=i+1}return r}}};var ia=Xo.bisector(function(n){return n});Xo.bisectLeft=ia.left,Xo.bisect=Xo.bisectRight=ia.right,Xo.shuffle=function(n){for(var t,e,r=n.length;r;)e=0|Math.random()*r--,t=n[r],n[r]=n[e],n[e]=t;return n},Xo.permute=function(n,t){for(var e=t.length,r=new Array(e);e--;)r[e]=n[t[e]];return r},Xo.pairs=function(n){for(var t,e=0,r=n.length-1,u=n[0],i=new Array(0>r?0:r);r>e;)i[e]=[t=u,u=n[++e]];return i},Xo.zip=function(){if(!(u=arguments.length))return[];for(var n=-1,e=Xo.min(arguments,t),r=new Array(e);++n<e;)for(var u,i=-1,o=r[n]=new Array(u);++i<u;)o[i]=arguments[i][n];return r},Xo.transpose=function(n){return Xo.zip.apply(Xo,n)},Xo.keys=function(n){var t=[];for(var e in n)t.push(e);return t},Xo.values=function(n){var t=[];for(var e in n)t.push(n[e]);return t},Xo.entries=function(n){var t=[];for(var e in n)t.push({key:e,value:n[e]});return t},Xo.merge=function(n){for(var t,e,r,u=n.length,i=-1,o=0;++i<u;)o+=n[i].length;for(e=new Array(o);--u>=0;)for(r=n[u],t=r.length;--t>=0;)e[--o]=r[t];return e};var oa=Math.abs;Xo.range=function(n,t,r){if(arguments.length<3&&(r=1,arguments.length<2&&(t=n,n=0)),1/0===(t-n)/r)throw new Error("infinite range");var u,i=[],o=e(oa(r)),a=-1;if(n*=o,t*=o,r*=o,0>r)for(;(u=n+r*++a)>t;)i.push(u/o);else for(;(u=n+r*++a)<t;)i.push(u/o);return i},Xo.map=function(n){var t=new u;if(n instanceof u)n.forEach(function(n,e){t.set(n,e)});else for(var e in n)t.set(e,n[e]);return t},r(u,{has:i,get:function(n){return this[aa+n]},set:function(n,t){return this[aa+n]=t},remove:o,keys:a,values:function(){var n=[];return this.forEach(function(t,e){n.push(e)}),n},entries:function(){var n=[];return this.forEach(function(t,e){n.push({key:t,value:e})}),n},size:c,empty:s,forEach:function(n){for(var t in this)t.charCodeAt(0)===ca&&n.call(this,t.substring(1),this[t])}});var aa="\x00",ca=aa.charCodeAt(0);Xo.nest=function(){function n(t,a,c){if(c>=o.length)return r?r.call(i,a):e?a.sort(e):a;for(var s,l,f,h,g=-1,p=a.length,v=o[c++],d=new u;++g<p;)(h=d.get(s=v(l=a[g])))?h.push(l):d.set(s,[l]);return t?(l=t(),f=function(e,r){l.set(e,n(t,r,c))}):(l={},f=function(e,r){l[e]=n(t,r,c)}),d.forEach(f),l}function t(n,e){if(e>=o.length)return n;var r=[],u=a[e++];return n.forEach(function(n,u){r.push({key:n,values:t(u,e)})}),u?r.sort(function(n,t){return u(n.key,t.key)}):r}var e,r,i={},o=[],a=[];return i.map=function(t,e){return n(e,t,0)},i.entries=function(e){return t(n(Xo.map,e,0),0)},i.key=function(n){return o.push(n),i},i.sortKeys=function(n){return a[o.length-1]=n,i},i.sortValues=function(n){return e=n,i},i.rollup=function(n){return r=n,i},i},Xo.set=function(n){var t=new l;if(n)for(var e=0,r=n.length;r>e;++e)t.add(n[e]);return t},r(l,{has:i,add:function(n){return this[aa+n]=!0,n},remove:function(n){return n=aa+n,n in this&&delete this[n]},values:a,size:c,empty:s,forEach:function(n){for(var t in this)t.charCodeAt(0)===ca&&n.call(this,t.substring(1))}}),Xo.behavior={},Xo.rebind=function(n,t){for(var e,r=1,u=arguments.length;++r<u;)n[e=arguments[r]]=f(n,t,t[e]);return n};var sa=["webkit","ms","moz","Moz","o","O"];Xo.dispatch=function(){for(var n=new p,t=-1,e=arguments.length;++t<e;)n[arguments[t]]=v(n);return n},p.prototype.on=function(n,t){var e=n.indexOf("."),r="";if(e>=0&&(r=n.substring(e+1),n=n.substring(0,e)),n)return arguments.length<2?this[n].on(r):this[n].on(r,t);if(2===arguments.length){if(null==t)for(n in this)this.hasOwnProperty(n)&&this[n].on(r,null);return this}},Xo.event=null,Xo.requote=function(n){return n.replace(la,"\\$&")};var la=/[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g,fa={}.__proto__?function(n,t){n.__proto__=t}:function(n,t){for(var e in t)n[e]=t[e]},ha=function(n,t){return t.querySelector(n)},ga=function(n,t){return t.querySelectorAll(n)},pa=Jo[h(Jo,"matchesSelector")],va=function(n,t){return pa.call(n,t)};"function"==typeof Sizzle&&(ha=function(n,t){return Sizzle(n,t)[0]||null},ga=function(n,t){return Sizzle.uniqueSort(Sizzle(n,t))},va=Sizzle.matchesSelector),Xo.selection=function(){return xa};var da=Xo.selection.prototype=[];da.select=function(n){var t,e,r,u,i=[];n=M(n);for(var o=-1,a=this.length;++o<a;){i.push(t=[]),t.parentNode=(r=this[o]).parentNode;for(var c=-1,s=r.length;++c<s;)(u=r[c])?(t.push(e=n.call(u,u.__data__,c,o)),e&&"__data__"in u&&(e.__data__=u.__data__)):t.push(null)}return x(i)},da.selectAll=function(n){var t,e,r=[];n=_(n);for(var u=-1,i=this.length;++u<i;)for(var o=this[u],a=-1,c=o.length;++a<c;)(e=o[a])&&(r.push(t=Bo(n.call(e,e.__data__,a,u))),t.parentNode=e);return x(r)};var ma={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};Xo.ns={prefix:ma,qualify:function(n){var t=n.indexOf(":"),e=n;return t>=0&&(e=n.substring(0,t),n=n.substring(t+1)),ma.hasOwnProperty(e)?{space:ma[e],local:n}:n}},da.attr=function(n,t){if(arguments.length<2){if("string"==typeof n){var e=this.node();return n=Xo.ns.qualify(n),n.local?e.getAttributeNS(n.space,n.local):e.getAttribute(n)}for(t in n)this.each(b(t,n[t]));return this}return this.each(b(n,t))},da.classed=function(n,t){if(arguments.length<2){if("string"==typeof n){var e=this.node(),r=(n=k(n)).length,u=-1;if(t=e.classList){for(;++u<r;)if(!t.contains(n[u]))return!1}else for(t=e.getAttribute("class");++u<r;)if(!S(n[u]).test(t))return!1;return!0}for(t in n)this.each(E(t,n[t]));return this}return this.each(E(n,t))},da.style=function(n,t,e){var r=arguments.length;if(3>r){if("string"!=typeof n){2>r&&(t="");for(e in n)this.each(C(e,n[e],t));return this}if(2>r)return Go.getComputedStyle(this.node(),null).getPropertyValue(n);e=""}return this.each(C(n,t,e))},da.property=function(n,t){if(arguments.length<2){if("string"==typeof n)return this.node()[n];for(t in n)this.each(N(t,n[t]));return this}return this.each(N(n,t))},da.text=function(n){return arguments.length?this.each("function"==typeof n?function(){var t=n.apply(this,arguments);this.textContent=null==t?"":t}:null==n?function(){this.textContent=""}:function(){this.textContent=n}):this.node().textContent},da.html=function(n){return arguments.length?this.each("function"==typeof n?function(){var t=n.apply(this,arguments);this.innerHTML=null==t?"":t}:null==n?function(){this.innerHTML=""}:function(){this.innerHTML=n}):this.node().innerHTML},da.append=function(n){return n=L(n),this.select(function(){return this.appendChild(n.apply(this,arguments))})},da.insert=function(n,t){return n=L(n),t=M(t),this.select(function(){return this.insertBefore(n.apply(this,arguments),t.apply(this,arguments)||null)})},da.remove=function(){return this.each(function(){var n=this.parentNode;n&&n.removeChild(this)})},da.data=function(n,t){function e(n,e){var r,i,o,a=n.length,f=e.length,h=Math.min(a,f),g=new Array(f),p=new Array(f),v=new Array(a);if(t){var d,m=new u,y=new u,x=[];for(r=-1;++r<a;)d=t.call(i=n[r],i.__data__,r),m.has(d)?v[r]=i:m.set(d,i),x.push(d);for(r=-1;++r<f;)d=t.call(e,o=e[r],r),(i=m.get(d))?(g[r]=i,i.__data__=o):y.has(d)||(p[r]=z(o)),y.set(d,o),m.remove(d);for(r=-1;++r<a;)m.has(x[r])&&(v[r]=n[r])}else{for(r=-1;++r<h;)i=n[r],o=e[r],i?(i.__data__=o,g[r]=i):p[r]=z(o);for(;f>r;++r)p[r]=z(e[r]);for(;a>r;++r)v[r]=n[r]}p.update=g,p.parentNode=g.parentNode=v.parentNode=n.parentNode,c.push(p),s.push(g),l.push(v)}var r,i,o=-1,a=this.length;if(!arguments.length){for(n=new Array(a=(r=this[0]).length);++o<a;)(i=r[o])&&(n[o]=i.__data__);return n}var c=D([]),s=x([]),l=x([]);if("function"==typeof n)for(;++o<a;)e(r=this[o],n.call(r,r.parentNode.__data__,o));else for(;++o<a;)e(r=this[o],n);return s.enter=function(){return c},s.exit=function(){return l},s},da.datum=function(n){return arguments.length?this.property("__data__",n):this.property("__data__")},da.filter=function(n){var t,e,r,u=[];"function"!=typeof n&&(n=q(n));for(var i=0,o=this.length;o>i;i++){u.push(t=[]),t.parentNode=(e=this[i]).parentNode;for(var a=0,c=e.length;c>a;a++)(r=e[a])&&n.call(r,r.__data__,a,i)&&t.push(r)}return x(u)},da.order=function(){for(var n=-1,t=this.length;++n<t;)for(var e,r=this[n],u=r.length-1,i=r[u];--u>=0;)(e=r[u])&&(i&&i!==e.nextSibling&&i.parentNode.insertBefore(e,i),i=e);return this},da.sort=function(n){n=T.apply(this,arguments);for(var t=-1,e=this.length;++t<e;)this[t].sort(n);return this.order()},da.each=function(n){return R(this,function(t,e,r){n.call(t,t.__data__,e,r)})},da.call=function(n){var t=Bo(arguments);return n.apply(t[0]=this,t),this},da.empty=function(){return!this.node()},da.node=function(){for(var n=0,t=this.length;t>n;n++)for(var e=this[n],r=0,u=e.length;u>r;r++){var i=e[r];if(i)return i}return null},da.size=function(){var n=0;return this.each(function(){++n}),n};var ya=[];Xo.selection.enter=D,Xo.selection.enter.prototype=ya,ya.append=da.append,ya.empty=da.empty,ya.node=da.node,ya.call=da.call,ya.size=da.size,ya.select=function(n){for(var t,e,r,u,i,o=[],a=-1,c=this.length;++a<c;){r=(u=this[a]).update,o.push(t=[]),t.parentNode=u.parentNode;for(var s=-1,l=u.length;++s<l;)(i=u[s])?(t.push(r[s]=e=n.call(u.parentNode,i.__data__,s,a)),e.__data__=i.__data__):t.push(null)}return x(o)},ya.insert=function(n,t){return arguments.length<2&&(t=P(this)),da.insert.call(this,n,t)},da.transition=function(){for(var n,t,e=ks||++Ls,r=[],u=Es||{time:Date.now(),ease:yu,delay:0,duration:250},i=-1,o=this.length;++i<o;){r.push(n=[]);for(var a=this[i],c=-1,s=a.length;++c<s;)(t=a[c])&&jo(t,c,e,u),n.push(t)}return Do(r,e)},da.interrupt=function(){return this.each(U)},Xo.select=function(n){var t=["string"==typeof n?ha(n,Wo):n];return t.parentNode=Jo,x([t])},Xo.selectAll=function(n){var t=Bo("string"==typeof n?ga(n,Wo):n);return t.parentNode=Jo,x([t])};var xa=Xo.select(Jo);da.on=function(n,t,e){var r=arguments.length;if(3>r){if("string"!=typeof n){2>r&&(t=!1);for(e in n)this.each(j(e,n[e],t));return this}if(2>r)return(r=this.node()["__on"+n])&&r._;e=!1}return this.each(j(n,t,e))};var Ma=Xo.map({mouseenter:"mouseover",mouseleave:"mouseout"});Ma.forEach(function(n){"on"+n in Wo&&Ma.remove(n)});var _a="onselectstart"in Wo?null:h(Jo.style,"userSelect"),ba=0;Xo.mouse=function(n){return Y(n,m())};var wa=/WebKit/.test(Go.navigator.userAgent)?-1:0;Xo.touches=function(n,t){return arguments.length<2&&(t=m().touches),t?Bo(t).map(function(t){var e=Y(n,t);return e.identifier=t.identifier,e}):[]},Xo.behavior.drag=function(){function n(){this.on("mousedown.drag",o).on("touchstart.drag",a)}function t(){return Xo.event.changedTouches[0].identifier}function e(n,t){return Xo.touches(n).filter(function(n){return n.identifier===t})[0]}function r(n,t,e,r){return function(){function o(){var n=t(l,g),e=n[0]-v[0],r=n[1]-v[1];d|=e|r,v=n,f({type:"drag",x:n[0]+c[0],y:n[1]+c[1],dx:e,dy:r})}function a(){m.on(e+"."+p,null).on(r+"."+p,null),y(d&&Xo.event.target===h),f({type:"dragend"})}var c,s=this,l=s.parentNode,f=u.of(s,arguments),h=Xo.event.target,g=n(),p=null==g?"drag":"drag-"+g,v=t(l,g),d=0,m=Xo.select(Go).on(e+"."+p,o).on(r+"."+p,a),y=O();i?(c=i.apply(s,arguments),c=[c.x-v[0],c.y-v[1]]):c=[0,0],f({type:"dragstart"})}}var u=y(n,"drag","dragstart","dragend"),i=null,o=r(g,Xo.mouse,"mousemove","mouseup"),a=r(t,e,"touchmove","touchend");return n.origin=function(t){return arguments.length?(i=t,n):i},Xo.rebind(n,u,"on")};var Sa=Math.PI,ka=2*Sa,Ea=Sa/2,Aa=1e-6,Ca=Aa*Aa,Na=Sa/180,La=180/Sa,za=Math.SQRT2,qa=2,Ta=4;Xo.interpolateZoom=function(n,t){function e(n){var t=n*y;if(m){var e=B(v),o=i/(qa*h)*(e*W(za*t+v)-$(v));return[r+o*s,u+o*l,i*e/B(za*t+v)]}return[r+n*s,u+n*l,i*Math.exp(za*t)]}var r=n[0],u=n[1],i=n[2],o=t[0],a=t[1],c=t[2],s=o-r,l=a-u,f=s*s+l*l,h=Math.sqrt(f),g=(c*c-i*i+Ta*f)/(2*i*qa*h),p=(c*c-i*i-Ta*f)/(2*c*qa*h),v=Math.log(Math.sqrt(g*g+1)-g),d=Math.log(Math.sqrt(p*p+1)-p),m=d-v,y=(m||Math.log(c/i))/za;return e.duration=1e3*y,e},Xo.behavior.zoom=function(){function n(n){n.on(A,s).on(Pa+".zoom",f).on(C,h).on("dblclick.zoom",g).on(L,l)}function t(n){return[(n[0]-S.x)/S.k,(n[1]-S.y)/S.k]}function e(n){return[n[0]*S.k+S.x,n[1]*S.k+S.y]}function r(n){S.k=Math.max(E[0],Math.min(E[1],n))}function u(n,t){t=e(t),S.x+=n[0]-t[0],S.y+=n[1]-t[1]}function i(){_&&_.domain(M.range().map(function(n){return(n-S.x)/S.k}).map(M.invert)),w&&w.domain(b.range().map(function(n){return(n-S.y)/S.k}).map(b.invert))}function o(n){n({type:"zoomstart"})}function a(n){i(),n({type:"zoom",scale:S.k,translate:[S.x,S.y]})}function c(n){n({type:"zoomend"})}function s(){function n(){l=1,u(Xo.mouse(r),g),a(i)}function e(){f.on(C,Go===r?h:null).on(N,null),p(l&&Xo.event.target===s),c(i)}var r=this,i=z.of(r,arguments),s=Xo.event.target,l=0,f=Xo.select(Go).on(C,n).on(N,e),g=t(Xo.mouse(r)),p=O();U.call(r),o(i)}function l(){function n(){var n=Xo.touches(g);return h=S.k,n.forEach(function(n){n.identifier in v&&(v[n.identifier]=t(n))}),n}function e(){for(var t=Xo.event.changedTouches,e=0,i=t.length;i>e;++e)v[t[e].identifier]=null;var o=n(),c=Date.now();if(1===o.length){if(500>c-x){var s=o[0],l=v[s.identifier];r(2*S.k),u(s,l),d(),a(p)}x=c}else if(o.length>1){var s=o[0],f=o[1],h=s[0]-f[0],g=s[1]-f[1];m=h*h+g*g}}function i(){for(var n,t,e,i,o=Xo.touches(g),c=0,s=o.length;s>c;++c,i=null)if(e=o[c],i=v[e.identifier]){if(t)break;n=e,t=i}if(i){var l=(l=e[0]-n[0])*l+(l=e[1]-n[1])*l,f=m&&Math.sqrt(l/m);n=[(n[0]+e[0])/2,(n[1]+e[1])/2],t=[(t[0]+i[0])/2,(t[1]+i[1])/2],r(f*h)}x=null,u(n,t),a(p)}function f(){if(Xo.event.touches.length){for(var t=Xo.event.changedTouches,e=0,r=t.length;r>e;++e)delete v[t[e].identifier];for(var u in v)return void n()}b.on(M,null).on(_,null),w.on(A,s).on(L,l),k(),c(p)}var h,g=this,p=z.of(g,arguments),v={},m=0,y=Xo.event.changedTouches[0].identifier,M="touchmove.zoom-"+y,_="touchend.zoom-"+y,b=Xo.select(Go).on(M,i).on(_,f),w=Xo.select(g).on(A,null).on(L,e),k=O();U.call(g),e(),o(p)}function f(){var n=z.of(this,arguments);m?clearTimeout(m):(U.call(this),o(n)),m=setTimeout(function(){m=null,c(n)},50),d();var e=v||Xo.mouse(this);p||(p=t(e)),r(Math.pow(2,.002*Ra())*S.k),u(e,p),a(n)}function h(){p=null}function g(){var n=z.of(this,arguments),e=Xo.mouse(this),i=t(e),s=Math.log(S.k)/Math.LN2;o(n),r(Math.pow(2,Xo.event.shiftKey?Math.ceil(s)-1:Math.floor(s)+1)),u(e,i),a(n),c(n)}var p,v,m,x,M,_,b,w,S={x:0,y:0,k:1},k=[960,500],E=Da,A="mousedown.zoom",C="mousemove.zoom",N="mouseup.zoom",L="touchstart.zoom",z=y(n,"zoomstart","zoom","zoomend");return n.event=function(n){n.each(function(){var n=z.of(this,arguments),t=S;ks?Xo.select(this).transition().each("start.zoom",function(){S=this.__chart__||{x:0,y:0,k:1},o(n)}).tween("zoom:zoom",function(){var e=k[0],r=k[1],u=e/2,i=r/2,o=Xo.interpolateZoom([(u-S.x)/S.k,(i-S.y)/S.k,e/S.k],[(u-t.x)/t.k,(i-t.y)/t.k,e/t.k]);return function(t){var r=o(t),c=e/r[2];this.__chart__=S={x:u-r[0]*c,y:i-r[1]*c,k:c},a(n)}}).each("end.zoom",function(){c(n)}):(this.__chart__=S,o(n),a(n),c(n))})},n.translate=function(t){return arguments.length?(S={x:+t[0],y:+t[1],k:S.k},i(),n):[S.x,S.y]},n.scale=function(t){return arguments.length?(S={x:S.x,y:S.y,k:+t},i(),n):S.k},n.scaleExtent=function(t){return arguments.length?(E=null==t?Da:[+t[0],+t[1]],n):E},n.center=function(t){return arguments.length?(v=t&&[+t[0],+t[1]],n):v},n.size=function(t){return arguments.length?(k=t&&[+t[0],+t[1]],n):k},n.x=function(t){return arguments.length?(_=t,M=t.copy(),S={x:0,y:0,k:1},n):_},n.y=function(t){return arguments.length?(w=t,b=t.copy(),S={x:0,y:0,k:1},n):w},Xo.rebind(n,z,"on")};var Ra,Da=[0,1/0],Pa="onwheel"in Wo?(Ra=function(){return-Xo.event.deltaY*(Xo.event.deltaMode?120:1)},"wheel"):"onmousewheel"in Wo?(Ra=function(){return Xo.event.wheelDelta},"mousewheel"):(Ra=function(){return-Xo.event.detail},"MozMousePixelScroll");G.prototype.toString=function(){return this.rgb()+""},Xo.hsl=function(n,t,e){return 1===arguments.length?n instanceof Q?K(n.h,n.s,n.l):dt(""+n,mt,K):K(+n,+t,+e)};var Ua=Q.prototype=new G;Ua.brighter=function(n){return n=Math.pow(.7,arguments.length?n:1),K(this.h,this.s,this.l/n)},Ua.darker=function(n){return n=Math.pow(.7,arguments.length?n:1),K(this.h,this.s,n*this.l)},Ua.rgb=function(){return nt(this.h,this.s,this.l)},Xo.hcl=function(n,t,e){return 1===arguments.length?n instanceof et?tt(n.h,n.c,n.l):n instanceof it?at(n.l,n.a,n.b):at((n=yt((n=Xo.rgb(n)).r,n.g,n.b)).l,n.a,n.b):tt(+n,+t,+e)};var ja=et.prototype=new G;ja.brighter=function(n){return tt(this.h,this.c,Math.min(100,this.l+Ha*(arguments.length?n:1)))},ja.darker=function(n){return tt(this.h,this.c,Math.max(0,this.l-Ha*(arguments.length?n:1)))},ja.rgb=function(){return rt(this.h,this.c,this.l).rgb()},Xo.lab=function(n,t,e){return 1===arguments.length?n instanceof it?ut(n.l,n.a,n.b):n instanceof et?rt(n.l,n.c,n.h):yt((n=Xo.rgb(n)).r,n.g,n.b):ut(+n,+t,+e)};var Ha=18,Fa=.95047,Oa=1,Ya=1.08883,Ia=it.prototype=new G;Ia.brighter=function(n){return ut(Math.min(100,this.l+Ha*(arguments.length?n:1)),this.a,this.b)},Ia.darker=function(n){return ut(Math.max(0,this.l-Ha*(arguments.length?n:1)),this.a,this.b)},Ia.rgb=function(){return ot(this.l,this.a,this.b)},Xo.rgb=function(n,t,e){return 1===arguments.length?n instanceof pt?gt(n.r,n.g,n.b):dt(""+n,gt,nt):gt(~~n,~~t,~~e)};var Za=pt.prototype=new G;Za.brighter=function(n){n=Math.pow(.7,arguments.length?n:1);var t=this.r,e=this.g,r=this.b,u=30;return t||e||r?(t&&u>t&&(t=u),e&&u>e&&(e=u),r&&u>r&&(r=u),gt(Math.min(255,~~(t/n)),Math.min(255,~~(e/n)),Math.min(255,~~(r/n)))):gt(u,u,u)},Za.darker=function(n){return n=Math.pow(.7,arguments.length?n:1),gt(~~(n*this.r),~~(n*this.g),~~(n*this.b))},Za.hsl=function(){return mt(this.r,this.g,this.b)},Za.toString=function(){return"#"+vt(this.r)+vt(this.g)+vt(this.b)};var Va=Xo.map({aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074});Va.forEach(function(n,t){Va.set(n,ft(t))}),Xo.functor=_t,Xo.xhr=wt(bt),Xo.dsv=function(n,t){function e(n,e,i){arguments.length<3&&(i=e,e=null);var o=St(n,t,null==e?r:u(e),i);return o.row=function(n){return arguments.length?o.response(null==(e=n)?r:u(n)):e},o}function r(n){return e.parse(n.responseText)}function u(n){return function(t){return e.parse(t.responseText,n)}}function i(t){return t.map(o).join(n)}function o(n){return a.test(n)?'"'+n.replace(/\"/g,'""')+'"':n}var a=new RegExp('["'+n+"\n]"),c=n.charCodeAt(0);return e.parse=function(n,t){var r;return e.parseRows(n,function(n,e){if(r)return r(n,e-1);var u=new Function("d","return {"+n.map(function(n,t){return JSON.stringify(n)+": d["+t+"]"}).join(",")+"}");r=t?function(n,e){return t(u(n),e)}:u})},e.parseRows=function(n,t){function e(){if(l>=s)return o;if(u)return u=!1,i;var t=l;if(34===n.charCodeAt(t)){for(var e=t;e++<s;)if(34===n.charCodeAt(e)){if(34!==n.charCodeAt(e+1))break;++e}l=e+2;var r=n.charCodeAt(e+1);return 13===r?(u=!0,10===n.charCodeAt(e+2)&&++l):10===r&&(u=!0),n.substring(t+1,e).replace(/""/g,'"')}for(;s>l;){var r=n.charCodeAt(l++),a=1;if(10===r)u=!0;else if(13===r)u=!0,10===n.charCodeAt(l)&&(++l,++a);else if(r!==c)continue;return n.substring(t,l-a)}return n.substring(t)}for(var r,u,i={},o={},a=[],s=n.length,l=0,f=0;(r=e())!==o;){for(var h=[];r!==i&&r!==o;)h.push(r),r=e();(!t||(h=t(h,f++)))&&a.push(h)}return a},e.format=function(t){if(Array.isArray(t[0]))return e.formatRows(t);var r=new l,u=[];return t.forEach(function(n){for(var t in n)r.has(t)||u.push(r.add(t))}),[u.map(o).join(n)].concat(t.map(function(t){return u.map(function(n){return o(t[n])}).join(n)})).join("\n")},e.formatRows=function(n){return n.map(i).join("\n")},e},Xo.csv=Xo.dsv(",","text/csv"),Xo.tsv=Xo.dsv("	","text/tab-separated-values");var Xa,$a,Ba,Wa,Ja,Ga=Go[h(Go,"requestAnimationFrame")]||function(n){setTimeout(n,17)};Xo.timer=function(n,t,e){var r=arguments.length;2>r&&(t=0),3>r&&(e=Date.now());var u=e+t,i={c:n,t:u,f:!1,n:null};$a?$a.n=i:Xa=i,$a=i,Ba||(Wa=clearTimeout(Wa),Ba=1,Ga(Et))},Xo.timer.flush=function(){At(),Ct()},Xo.round=function(n,t){return t?Math.round(n*(t=Math.pow(10,t)))/t:Math.round(n)};var Ka=["y","z","a","f","p","n","\xb5","m","","k","M","G","T","P","E","Z","Y"].map(Lt);Xo.formatPrefix=function(n,t){var e=0;return n&&(0>n&&(n*=-1),t&&(n=Xo.round(n,Nt(n,t))),e=1+Math.floor(1e-12+Math.log(n)/Math.LN10),e=Math.max(-24,Math.min(24,3*Math.floor((0>=e?e+1:e-1)/3)))),Ka[8+e/3]};var Qa=/(?:([^{])?([<>=^]))?([+\- ])?([$#])?(0)?(\d+)?(,)?(\.-?\d+)?([a-z%])?/i,nc=Xo.map({b:function(n){return n.toString(2)},c:function(n){return String.fromCharCode(n)},o:function(n){return n.toString(8)},x:function(n){return n.toString(16)},X:function(n){return n.toString(16).toUpperCase()},g:function(n,t){return n.toPrecision(t)},e:function(n,t){return n.toExponential(t)},f:function(n,t){return n.toFixed(t)},r:function(n,t){return(n=Xo.round(n,Nt(n,t))).toFixed(Math.max(0,Math.min(20,Nt(n*(1+1e-15),t))))}}),tc=Xo.time={},ec=Date;Tt.prototype={getDate:function(){return this._.getUTCDate()},getDay:function(){return this._.getUTCDay()},getFullYear:function(){return this._.getUTCFullYear()},getHours:function(){return this._.getUTCHours()},getMilliseconds:function(){return this._.getUTCMilliseconds()},getMinutes:function(){return this._.getUTCMinutes()},getMonth:function(){return this._.getUTCMonth()},getSeconds:function(){return this._.getUTCSeconds()},getTime:function(){return this._.getTime()},getTimezoneOffset:function(){return 0},valueOf:function(){return this._.valueOf()},setDate:function(){rc.setUTCDate.apply(this._,arguments)},setDay:function(){rc.setUTCDay.apply(this._,arguments)},setFullYear:function(){rc.setUTCFullYear.apply(this._,arguments)},setHours:function(){rc.setUTCHours.apply(this._,arguments)},setMilliseconds:function(){rc.setUTCMilliseconds.apply(this._,arguments)},setMinutes:function(){rc.setUTCMinutes.apply(this._,arguments)},setMonth:function(){rc.setUTCMonth.apply(this._,arguments)},setSeconds:function(){rc.setUTCSeconds.apply(this._,arguments)},setTime:function(){rc.setTime.apply(this._,arguments)}};var rc=Date.prototype;tc.year=Rt(function(n){return n=tc.day(n),n.setMonth(0,1),n},function(n,t){n.setFullYear(n.getFullYear()+t)},function(n){return n.getFullYear()}),tc.years=tc.year.range,tc.years.utc=tc.year.utc.range,tc.day=Rt(function(n){var t=new ec(2e3,0);return t.setFullYear(n.getFullYear(),n.getMonth(),n.getDate()),t},function(n,t){n.setDate(n.getDate()+t)},function(n){return n.getDate()-1}),tc.days=tc.day.range,tc.days.utc=tc.day.utc.range,tc.dayOfYear=function(n){var t=tc.year(n);return Math.floor((n-t-6e4*(n.getTimezoneOffset()-t.getTimezoneOffset()))/864e5)},["sunday","monday","tuesday","wednesday","thursday","friday","saturday"].forEach(function(n,t){t=7-t;var e=tc[n]=Rt(function(n){return(n=tc.day(n)).setDate(n.getDate()-(n.getDay()+t)%7),n},function(n,t){n.setDate(n.getDate()+7*Math.floor(t))},function(n){var e=tc.year(n).getDay();return Math.floor((tc.dayOfYear(n)+(e+t)%7)/7)-(e!==t)});tc[n+"s"]=e.range,tc[n+"s"].utc=e.utc.range,tc[n+"OfYear"]=function(n){var e=tc.year(n).getDay();return Math.floor((tc.dayOfYear(n)+(e+t)%7)/7)}}),tc.week=tc.sunday,tc.weeks=tc.sunday.range,tc.weeks.utc=tc.sunday.utc.range,tc.weekOfYear=tc.sundayOfYear;var uc={"-":"",_:" ",0:"0"},ic=/^\s*\d+/,oc=/^%/;Xo.locale=function(n){return{numberFormat:zt(n),timeFormat:Pt(n)}};var ac=Xo.locale({decimal:".",thousands:",",grouping:[3],currency:["$",""],dateTime:"%a %b %e %X %Y",date:"%m/%d/%Y",time:"%H:%M:%S",periods:["AM","PM"],days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],shortDays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],shortMonths:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]});Xo.format=ac.numberFormat,Xo.geo={},re.prototype={s:0,t:0,add:function(n){ue(n,this.t,cc),ue(cc.s,this.s,this),this.s?this.t+=cc.t:this.s=cc.t},reset:function(){this.s=this.t=0},valueOf:function(){return this.s}};var cc=new re;Xo.geo.stream=function(n,t){n&&sc.hasOwnProperty(n.type)?sc[n.type](n,t):ie(n,t)};var sc={Feature:function(n,t){ie(n.geometry,t)},FeatureCollection:function(n,t){for(var e=n.features,r=-1,u=e.length;++r<u;)ie(e[r].geometry,t)}},lc={Sphere:function(n,t){t.sphere()},Point:function(n,t){n=n.coordinates,t.point(n[0],n[1],n[2])},MultiPoint:function(n,t){for(var e=n.coordinates,r=-1,u=e.length;++r<u;)n=e[r],t.point(n[0],n[1],n[2])},LineString:function(n,t){oe(n.coordinates,t,0)},MultiLineString:function(n,t){for(var e=n.coordinates,r=-1,u=e.length;++r<u;)oe(e[r],t,0)},Polygon:function(n,t){ae(n.coordinates,t)},MultiPolygon:function(n,t){for(var e=n.coordinates,r=-1,u=e.length;++r<u;)ae(e[r],t)},GeometryCollection:function(n,t){for(var e=n.geometries,r=-1,u=e.length;++r<u;)ie(e[r],t)}};Xo.geo.area=function(n){return fc=0,Xo.geo.stream(n,gc),fc};var fc,hc=new re,gc={sphere:function(){fc+=4*Sa},point:g,lineStart:g,lineEnd:g,polygonStart:function(){hc.reset(),gc.lineStart=ce},polygonEnd:function(){var n=2*hc;fc+=0>n?4*Sa+n:n,gc.lineStart=gc.lineEnd=gc.point=g}};Xo.geo.bounds=function(){function n(n,t){x.push(M=[l=n,h=n]),f>t&&(f=t),t>g&&(g=t)}function t(t,e){var r=se([t*Na,e*Na]);if(m){var u=fe(m,r),i=[u[1],-u[0],0],o=fe(i,u);pe(o),o=ve(o);var c=t-p,s=c>0?1:-1,v=o[0]*La*s,d=oa(c)>180;if(d^(v>s*p&&s*t>v)){var y=o[1]*La;y>g&&(g=y)}else if(v=(v+360)%360-180,d^(v>s*p&&s*t>v)){var y=-o[1]*La;f>y&&(f=y)}else f>e&&(f=e),e>g&&(g=e);d?p>t?a(l,t)>a(l,h)&&(h=t):a(t,h)>a(l,h)&&(l=t):h>=l?(l>t&&(l=t),t>h&&(h=t)):t>p?a(l,t)>a(l,h)&&(h=t):a(t,h)>a(l,h)&&(l=t)}else n(t,e);m=r,p=t}function e(){_.point=t}function r(){M[0]=l,M[1]=h,_.point=n,m=null}function u(n,e){if(m){var r=n-p;y+=oa(r)>180?r+(r>0?360:-360):r}else v=n,d=e;gc.point(n,e),t(n,e)}function i(){gc.lineStart()}function o(){u(v,d),gc.lineEnd(),oa(y)>Aa&&(l=-(h=180)),M[0]=l,M[1]=h,m=null}function a(n,t){return(t-=n)<0?t+360:t}function c(n,t){return n[0]-t[0]}function s(n,t){return t[0]<=t[1]?t[0]<=n&&n<=t[1]:n<t[0]||t[1]<n}var l,f,h,g,p,v,d,m,y,x,M,_={point:n,lineStart:e,lineEnd:r,polygonStart:function(){_.point=u,_.lineStart=i,_.lineEnd=o,y=0,gc.polygonStart()},polygonEnd:function(){gc.polygonEnd(),_.point=n,_.lineStart=e,_.lineEnd=r,0>hc?(l=-(h=180),f=-(g=90)):y>Aa?g=90:-Aa>y&&(f=-90),M[0]=l,M[1]=h
}};return function(n){g=h=-(l=f=1/0),x=[],Xo.geo.stream(n,_);var t=x.length;if(t){x.sort(c);for(var e,r=1,u=x[0],i=[u];t>r;++r)e=x[r],s(e[0],u)||s(e[1],u)?(a(u[0],e[1])>a(u[0],u[1])&&(u[1]=e[1]),a(e[0],u[1])>a(u[0],u[1])&&(u[0]=e[0])):i.push(u=e);for(var o,e,p=-1/0,t=i.length-1,r=0,u=i[t];t>=r;u=e,++r)e=i[r],(o=a(u[1],e[0]))>p&&(p=o,l=e[0],h=u[1])}return x=M=null,1/0===l||1/0===f?[[0/0,0/0],[0/0,0/0]]:[[l,f],[h,g]]}}(),Xo.geo.centroid=function(n){pc=vc=dc=mc=yc=xc=Mc=_c=bc=wc=Sc=0,Xo.geo.stream(n,kc);var t=bc,e=wc,r=Sc,u=t*t+e*e+r*r;return Ca>u&&(t=xc,e=Mc,r=_c,Aa>vc&&(t=dc,e=mc,r=yc),u=t*t+e*e+r*r,Ca>u)?[0/0,0/0]:[Math.atan2(e,t)*La,X(r/Math.sqrt(u))*La]};var pc,vc,dc,mc,yc,xc,Mc,_c,bc,wc,Sc,kc={sphere:g,point:me,lineStart:xe,lineEnd:Me,polygonStart:function(){kc.lineStart=_e},polygonEnd:function(){kc.lineStart=xe}},Ec=Ee(be,ze,Te,[-Sa,-Sa/2]),Ac=1e9;Xo.geo.clipExtent=function(){var n,t,e,r,u,i,o={stream:function(n){return u&&(u.valid=!1),u=i(n),u.valid=!0,u},extent:function(a){return arguments.length?(i=Pe(n=+a[0][0],t=+a[0][1],e=+a[1][0],r=+a[1][1]),u&&(u.valid=!1,u=null),o):[[n,t],[e,r]]}};return o.extent([[0,0],[960,500]])},(Xo.geo.conicEqualArea=function(){return je(He)}).raw=He,Xo.geo.albers=function(){return Xo.geo.conicEqualArea().rotate([96,0]).center([-.6,38.7]).parallels([29.5,45.5]).scale(1070)},Xo.geo.albersUsa=function(){function n(n){var i=n[0],o=n[1];return t=null,e(i,o),t||(r(i,o),t)||u(i,o),t}var t,e,r,u,i=Xo.geo.albers(),o=Xo.geo.conicEqualArea().rotate([154,0]).center([-2,58.5]).parallels([55,65]),a=Xo.geo.conicEqualArea().rotate([157,0]).center([-3,19.9]).parallels([8,18]),c={point:function(n,e){t=[n,e]}};return n.invert=function(n){var t=i.scale(),e=i.translate(),r=(n[0]-e[0])/t,u=(n[1]-e[1])/t;return(u>=.12&&.234>u&&r>=-.425&&-.214>r?o:u>=.166&&.234>u&&r>=-.214&&-.115>r?a:i).invert(n)},n.stream=function(n){var t=i.stream(n),e=o.stream(n),r=a.stream(n);return{point:function(n,u){t.point(n,u),e.point(n,u),r.point(n,u)},sphere:function(){t.sphere(),e.sphere(),r.sphere()},lineStart:function(){t.lineStart(),e.lineStart(),r.lineStart()},lineEnd:function(){t.lineEnd(),e.lineEnd(),r.lineEnd()},polygonStart:function(){t.polygonStart(),e.polygonStart(),r.polygonStart()},polygonEnd:function(){t.polygonEnd(),e.polygonEnd(),r.polygonEnd()}}},n.precision=function(t){return arguments.length?(i.precision(t),o.precision(t),a.precision(t),n):i.precision()},n.scale=function(t){return arguments.length?(i.scale(t),o.scale(.35*t),a.scale(t),n.translate(i.translate())):i.scale()},n.translate=function(t){if(!arguments.length)return i.translate();var s=i.scale(),l=+t[0],f=+t[1];return e=i.translate(t).clipExtent([[l-.455*s,f-.238*s],[l+.455*s,f+.238*s]]).stream(c).point,r=o.translate([l-.307*s,f+.201*s]).clipExtent([[l-.425*s+Aa,f+.12*s+Aa],[l-.214*s-Aa,f+.234*s-Aa]]).stream(c).point,u=a.translate([l-.205*s,f+.212*s]).clipExtent([[l-.214*s+Aa,f+.166*s+Aa],[l-.115*s-Aa,f+.234*s-Aa]]).stream(c).point,n},n.scale(1070)};var Cc,Nc,Lc,zc,qc,Tc,Rc={point:g,lineStart:g,lineEnd:g,polygonStart:function(){Nc=0,Rc.lineStart=Fe},polygonEnd:function(){Rc.lineStart=Rc.lineEnd=Rc.point=g,Cc+=oa(Nc/2)}},Dc={point:Oe,lineStart:g,lineEnd:g,polygonStart:g,polygonEnd:g},Pc={point:Ze,lineStart:Ve,lineEnd:Xe,polygonStart:function(){Pc.lineStart=$e},polygonEnd:function(){Pc.point=Ze,Pc.lineStart=Ve,Pc.lineEnd=Xe}};Xo.geo.path=function(){function n(n){return n&&("function"==typeof a&&i.pointRadius(+a.apply(this,arguments)),o&&o.valid||(o=u(i)),Xo.geo.stream(n,o)),i.result()}function t(){return o=null,n}var e,r,u,i,o,a=4.5;return n.area=function(n){return Cc=0,Xo.geo.stream(n,u(Rc)),Cc},n.centroid=function(n){return dc=mc=yc=xc=Mc=_c=bc=wc=Sc=0,Xo.geo.stream(n,u(Pc)),Sc?[bc/Sc,wc/Sc]:_c?[xc/_c,Mc/_c]:yc?[dc/yc,mc/yc]:[0/0,0/0]},n.bounds=function(n){return qc=Tc=-(Lc=zc=1/0),Xo.geo.stream(n,u(Dc)),[[Lc,zc],[qc,Tc]]},n.projection=function(n){return arguments.length?(u=(e=n)?n.stream||Je(n):bt,t()):e},n.context=function(n){return arguments.length?(i=null==(r=n)?new Ye:new Be(n),"function"!=typeof a&&i.pointRadius(a),t()):r},n.pointRadius=function(t){return arguments.length?(a="function"==typeof t?t:(i.pointRadius(+t),+t),n):a},n.projection(Xo.geo.albersUsa()).context(null)},Xo.geo.transform=function(n){return{stream:function(t){var e=new Ge(t);for(var r in n)e[r]=n[r];return e}}},Ge.prototype={point:function(n,t){this.stream.point(n,t)},sphere:function(){this.stream.sphere()},lineStart:function(){this.stream.lineStart()},lineEnd:function(){this.stream.lineEnd()},polygonStart:function(){this.stream.polygonStart()},polygonEnd:function(){this.stream.polygonEnd()}},Xo.geo.projection=Qe,Xo.geo.projectionMutator=nr,(Xo.geo.equirectangular=function(){return Qe(er)}).raw=er.invert=er,Xo.geo.rotation=function(n){function t(t){return t=n(t[0]*Na,t[1]*Na),t[0]*=La,t[1]*=La,t}return n=ur(n[0]%360*Na,n[1]*Na,n.length>2?n[2]*Na:0),t.invert=function(t){return t=n.invert(t[0]*Na,t[1]*Na),t[0]*=La,t[1]*=La,t},t},rr.invert=er,Xo.geo.circle=function(){function n(){var n="function"==typeof r?r.apply(this,arguments):r,t=ur(-n[0]*Na,-n[1]*Na,0).invert,u=[];return e(null,null,1,{point:function(n,e){u.push(n=t(n,e)),n[0]*=La,n[1]*=La}}),{type:"Polygon",coordinates:[u]}}var t,e,r=[0,0],u=6;return n.origin=function(t){return arguments.length?(r=t,n):r},n.angle=function(r){return arguments.length?(e=cr((t=+r)*Na,u*Na),n):t},n.precision=function(r){return arguments.length?(e=cr(t*Na,(u=+r)*Na),n):u},n.angle(90)},Xo.geo.distance=function(n,t){var e,r=(t[0]-n[0])*Na,u=n[1]*Na,i=t[1]*Na,o=Math.sin(r),a=Math.cos(r),c=Math.sin(u),s=Math.cos(u),l=Math.sin(i),f=Math.cos(i);return Math.atan2(Math.sqrt((e=f*o)*e+(e=s*l-c*f*a)*e),c*l+s*f*a)},Xo.geo.graticule=function(){function n(){return{type:"MultiLineString",coordinates:t()}}function t(){return Xo.range(Math.ceil(i/d)*d,u,d).map(h).concat(Xo.range(Math.ceil(s/m)*m,c,m).map(g)).concat(Xo.range(Math.ceil(r/p)*p,e,p).filter(function(n){return oa(n%d)>Aa}).map(l)).concat(Xo.range(Math.ceil(a/v)*v,o,v).filter(function(n){return oa(n%m)>Aa}).map(f))}var e,r,u,i,o,a,c,s,l,f,h,g,p=10,v=p,d=90,m=360,y=2.5;return n.lines=function(){return t().map(function(n){return{type:"LineString",coordinates:n}})},n.outline=function(){return{type:"Polygon",coordinates:[h(i).concat(g(c).slice(1),h(u).reverse().slice(1),g(s).reverse().slice(1))]}},n.extent=function(t){return arguments.length?n.majorExtent(t).minorExtent(t):n.minorExtent()},n.majorExtent=function(t){return arguments.length?(i=+t[0][0],u=+t[1][0],s=+t[0][1],c=+t[1][1],i>u&&(t=i,i=u,u=t),s>c&&(t=s,s=c,c=t),n.precision(y)):[[i,s],[u,c]]},n.minorExtent=function(t){return arguments.length?(r=+t[0][0],e=+t[1][0],a=+t[0][1],o=+t[1][1],r>e&&(t=r,r=e,e=t),a>o&&(t=a,a=o,o=t),n.precision(y)):[[r,a],[e,o]]},n.step=function(t){return arguments.length?n.majorStep(t).minorStep(t):n.minorStep()},n.majorStep=function(t){return arguments.length?(d=+t[0],m=+t[1],n):[d,m]},n.minorStep=function(t){return arguments.length?(p=+t[0],v=+t[1],n):[p,v]},n.precision=function(t){return arguments.length?(y=+t,l=lr(a,o,90),f=fr(r,e,y),h=lr(s,c,90),g=fr(i,u,y),n):y},n.majorExtent([[-180,-90+Aa],[180,90-Aa]]).minorExtent([[-180,-80-Aa],[180,80+Aa]])},Xo.geo.greatArc=function(){function n(){return{type:"LineString",coordinates:[t||r.apply(this,arguments),e||u.apply(this,arguments)]}}var t,e,r=hr,u=gr;return n.distance=function(){return Xo.geo.distance(t||r.apply(this,arguments),e||u.apply(this,arguments))},n.source=function(e){return arguments.length?(r=e,t="function"==typeof e?null:e,n):r},n.target=function(t){return arguments.length?(u=t,e="function"==typeof t?null:t,n):u},n.precision=function(){return arguments.length?n:0},n},Xo.geo.interpolate=function(n,t){return pr(n[0]*Na,n[1]*Na,t[0]*Na,t[1]*Na)},Xo.geo.length=function(n){return Uc=0,Xo.geo.stream(n,jc),Uc};var Uc,jc={sphere:g,point:g,lineStart:vr,lineEnd:g,polygonStart:g,polygonEnd:g},Hc=dr(function(n){return Math.sqrt(2/(1+n))},function(n){return 2*Math.asin(n/2)});(Xo.geo.azimuthalEqualArea=function(){return Qe(Hc)}).raw=Hc;var Fc=dr(function(n){var t=Math.acos(n);return t&&t/Math.sin(t)},bt);(Xo.geo.azimuthalEquidistant=function(){return Qe(Fc)}).raw=Fc,(Xo.geo.conicConformal=function(){return je(mr)}).raw=mr,(Xo.geo.conicEquidistant=function(){return je(yr)}).raw=yr;var Oc=dr(function(n){return 1/n},Math.atan);(Xo.geo.gnomonic=function(){return Qe(Oc)}).raw=Oc,xr.invert=function(n,t){return[n,2*Math.atan(Math.exp(t))-Ea]},(Xo.geo.mercator=function(){return Mr(xr)}).raw=xr;var Yc=dr(function(){return 1},Math.asin);(Xo.geo.orthographic=function(){return Qe(Yc)}).raw=Yc;var Ic=dr(function(n){return 1/(1+n)},function(n){return 2*Math.atan(n)});(Xo.geo.stereographic=function(){return Qe(Ic)}).raw=Ic,_r.invert=function(n,t){return[-t,2*Math.atan(Math.exp(n))-Ea]},(Xo.geo.transverseMercator=function(){var n=Mr(_r),t=n.center,e=n.rotate;return n.center=function(n){return n?t([-n[1],n[0]]):(n=t(),[-n[1],n[0]])},n.rotate=function(n){return n?e([n[0],n[1],n.length>2?n[2]+90:90]):(n=e(),[n[0],n[1],n[2]-90])},n.rotate([0,0])}).raw=_r,Xo.geom={},Xo.geom.hull=function(n){function t(n){if(n.length<3)return[];var t,u=_t(e),i=_t(r),o=n.length,a=[],c=[];for(t=0;o>t;t++)a.push([+u.call(this,n[t],t),+i.call(this,n[t],t),t]);for(a.sort(kr),t=0;o>t;t++)c.push([a[t][0],-a[t][1]]);var s=Sr(a),l=Sr(c),f=l[0]===s[0],h=l[l.length-1]===s[s.length-1],g=[];for(t=s.length-1;t>=0;--t)g.push(n[a[s[t]][2]]);for(t=+f;t<l.length-h;++t)g.push(n[a[l[t]][2]]);return g}var e=br,r=wr;return arguments.length?t(n):(t.x=function(n){return arguments.length?(e=n,t):e},t.y=function(n){return arguments.length?(r=n,t):r},t)},Xo.geom.polygon=function(n){return fa(n,Zc),n};var Zc=Xo.geom.polygon.prototype=[];Zc.area=function(){for(var n,t=-1,e=this.length,r=this[e-1],u=0;++t<e;)n=r,r=this[t],u+=n[1]*r[0]-n[0]*r[1];return.5*u},Zc.centroid=function(n){var t,e,r=-1,u=this.length,i=0,o=0,a=this[u-1];for(arguments.length||(n=-1/(6*this.area()));++r<u;)t=a,a=this[r],e=t[0]*a[1]-a[0]*t[1],i+=(t[0]+a[0])*e,o+=(t[1]+a[1])*e;return[i*n,o*n]},Zc.clip=function(n){for(var t,e,r,u,i,o,a=Cr(n),c=-1,s=this.length-Cr(this),l=this[s-1];++c<s;){for(t=n.slice(),n.length=0,u=this[c],i=t[(r=t.length-a)-1],e=-1;++e<r;)o=t[e],Er(o,l,u)?(Er(i,l,u)||n.push(Ar(i,o,l,u)),n.push(o)):Er(i,l,u)&&n.push(Ar(i,o,l,u)),i=o;a&&n.push(n[0]),l=u}return n};var Vc,Xc,$c,Bc,Wc,Jc=[],Gc=[];Pr.prototype.prepare=function(){for(var n,t=this.edges,e=t.length;e--;)n=t[e].edge,n.b&&n.a||t.splice(e,1);return t.sort(jr),t.length},Br.prototype={start:function(){return this.edge.l===this.site?this.edge.a:this.edge.b},end:function(){return this.edge.l===this.site?this.edge.b:this.edge.a}},Wr.prototype={insert:function(n,t){var e,r,u;if(n){if(t.P=n,t.N=n.N,n.N&&(n.N.P=t),n.N=t,n.R){for(n=n.R;n.L;)n=n.L;n.L=t}else n.R=t;e=n}else this._?(n=Qr(this._),t.P=null,t.N=n,n.P=n.L=t,e=n):(t.P=t.N=null,this._=t,e=null);for(t.L=t.R=null,t.U=e,t.C=!0,n=t;e&&e.C;)r=e.U,e===r.L?(u=r.R,u&&u.C?(e.C=u.C=!1,r.C=!0,n=r):(n===e.R&&(Gr(this,e),n=e,e=n.U),e.C=!1,r.C=!0,Kr(this,r))):(u=r.L,u&&u.C?(e.C=u.C=!1,r.C=!0,n=r):(n===e.L&&(Kr(this,e),n=e,e=n.U),e.C=!1,r.C=!0,Gr(this,r))),e=n.U;this._.C=!1},remove:function(n){n.N&&(n.N.P=n.P),n.P&&(n.P.N=n.N),n.N=n.P=null;var t,e,r,u=n.U,i=n.L,o=n.R;if(e=i?o?Qr(o):i:o,u?u.L===n?u.L=e:u.R=e:this._=e,i&&o?(r=e.C,e.C=n.C,e.L=i,i.U=e,e!==o?(u=e.U,e.U=n.U,n=e.R,u.L=n,e.R=o,o.U=e):(e.U=u,u=e,n=e.R)):(r=n.C,n=e),n&&(n.U=u),!r){if(n&&n.C)return n.C=!1,void 0;do{if(n===this._)break;if(n===u.L){if(t=u.R,t.C&&(t.C=!1,u.C=!0,Gr(this,u),t=u.R),t.L&&t.L.C||t.R&&t.R.C){t.R&&t.R.C||(t.L.C=!1,t.C=!0,Kr(this,t),t=u.R),t.C=u.C,u.C=t.R.C=!1,Gr(this,u),n=this._;break}}else if(t=u.L,t.C&&(t.C=!1,u.C=!0,Kr(this,u),t=u.L),t.L&&t.L.C||t.R&&t.R.C){t.L&&t.L.C||(t.R.C=!1,t.C=!0,Gr(this,t),t=u.L),t.C=u.C,u.C=t.L.C=!1,Kr(this,u),n=this._;break}t.C=!0,n=u,u=u.U}while(!n.C);n&&(n.C=!1)}}},Xo.geom.voronoi=function(n){function t(n){var t=new Array(n.length),r=a[0][0],u=a[0][1],i=a[1][0],o=a[1][1];return nu(e(n),a).cells.forEach(function(e,a){var c=e.edges,s=e.site,l=t[a]=c.length?c.map(function(n){var t=n.start();return[t.x,t.y]}):s.x>=r&&s.x<=i&&s.y>=u&&s.y<=o?[[r,o],[i,o],[i,u],[r,u]]:[];l.point=n[a]}),t}function e(n){return n.map(function(n,t){return{x:Math.round(i(n,t)/Aa)*Aa,y:Math.round(o(n,t)/Aa)*Aa,i:t}})}var r=br,u=wr,i=r,o=u,a=Kc;return n?t(n):(t.links=function(n){return nu(e(n)).edges.filter(function(n){return n.l&&n.r}).map(function(t){return{source:n[t.l.i],target:n[t.r.i]}})},t.triangles=function(n){var t=[];return nu(e(n)).cells.forEach(function(e,r){for(var u,i,o=e.site,a=e.edges.sort(jr),c=-1,s=a.length,l=a[s-1].edge,f=l.l===o?l.r:l.l;++c<s;)u=l,i=f,l=a[c].edge,f=l.l===o?l.r:l.l,r<i.i&&r<f.i&&eu(o,i,f)<0&&t.push([n[r],n[i.i],n[f.i]])}),t},t.x=function(n){return arguments.length?(i=_t(r=n),t):r},t.y=function(n){return arguments.length?(o=_t(u=n),t):u},t.clipExtent=function(n){return arguments.length?(a=null==n?Kc:n,t):a===Kc?null:a},t.size=function(n){return arguments.length?t.clipExtent(n&&[[0,0],n]):a===Kc?null:a&&a[1]},t)};var Kc=[[-1e6,-1e6],[1e6,1e6]];Xo.geom.delaunay=function(n){return Xo.geom.voronoi().triangles(n)},Xo.geom.quadtree=function(n,t,e,r,u){function i(n){function i(n,t,e,r,u,i,o,a){if(!isNaN(e)&&!isNaN(r))if(n.leaf){var c=n.x,l=n.y;if(null!=c)if(oa(c-e)+oa(l-r)<.01)s(n,t,e,r,u,i,o,a);else{var f=n.point;n.x=n.y=n.point=null,s(n,f,c,l,u,i,o,a),s(n,t,e,r,u,i,o,a)}else n.x=e,n.y=r,n.point=t}else s(n,t,e,r,u,i,o,a)}function s(n,t,e,r,u,o,a,c){var s=.5*(u+a),l=.5*(o+c),f=e>=s,h=r>=l,g=(h<<1)+f;n.leaf=!1,n=n.nodes[g]||(n.nodes[g]=iu()),f?u=s:a=s,h?o=l:c=l,i(n,t,e,r,u,o,a,c)}var l,f,h,g,p,v,d,m,y,x=_t(a),M=_t(c);if(null!=t)v=t,d=e,m=r,y=u;else if(m=y=-(v=d=1/0),f=[],h=[],p=n.length,o)for(g=0;p>g;++g)l=n[g],l.x<v&&(v=l.x),l.y<d&&(d=l.y),l.x>m&&(m=l.x),l.y>y&&(y=l.y),f.push(l.x),h.push(l.y);else for(g=0;p>g;++g){var _=+x(l=n[g],g),b=+M(l,g);v>_&&(v=_),d>b&&(d=b),_>m&&(m=_),b>y&&(y=b),f.push(_),h.push(b)}var w=m-v,S=y-d;w>S?y=d+w:m=v+S;var k=iu();if(k.add=function(n){i(k,n,+x(n,++g),+M(n,g),v,d,m,y)},k.visit=function(n){ou(n,k,v,d,m,y)},g=-1,null==t){for(;++g<p;)i(k,n[g],f[g],h[g],v,d,m,y);--g}else n.forEach(k.add);return f=h=n=l=null,k}var o,a=br,c=wr;return(o=arguments.length)?(a=ru,c=uu,3===o&&(u=e,r=t,e=t=0),i(n)):(i.x=function(n){return arguments.length?(a=n,i):a},i.y=function(n){return arguments.length?(c=n,i):c},i.extent=function(n){return arguments.length?(null==n?t=e=r=u=null:(t=+n[0][0],e=+n[0][1],r=+n[1][0],u=+n[1][1]),i):null==t?null:[[t,e],[r,u]]},i.size=function(n){return arguments.length?(null==n?t=e=r=u=null:(t=e=0,r=+n[0],u=+n[1]),i):null==t?null:[r-t,u-e]},i)},Xo.interpolateRgb=au,Xo.interpolateObject=cu,Xo.interpolateNumber=su,Xo.interpolateString=lu;var Qc=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g;Xo.interpolate=fu,Xo.interpolators=[function(n,t){var e=typeof t;return("string"===e?Va.has(t)||/^(#|rgb\(|hsl\()/.test(t)?au:lu:t instanceof G?au:"object"===e?Array.isArray(t)?hu:cu:su)(n,t)}],Xo.interpolateArray=hu;var ns=function(){return bt},ts=Xo.map({linear:ns,poly:xu,quad:function(){return du},cubic:function(){return mu},sin:function(){return Mu},exp:function(){return _u},circle:function(){return bu},elastic:wu,back:Su,bounce:function(){return ku}}),es=Xo.map({"in":bt,out:pu,"in-out":vu,"out-in":function(n){return vu(pu(n))}});Xo.ease=function(n){var t=n.indexOf("-"),e=t>=0?n.substring(0,t):n,r=t>=0?n.substring(t+1):"in";return e=ts.get(e)||ns,r=es.get(r)||bt,gu(r(e.apply(null,$o.call(arguments,1))))},Xo.interpolateHcl=Eu,Xo.interpolateHsl=Au,Xo.interpolateLab=Cu,Xo.interpolateRound=Nu,Xo.transform=function(n){var t=Wo.createElementNS(Xo.ns.prefix.svg,"g");return(Xo.transform=function(n){if(null!=n){t.setAttribute("transform",n);var e=t.transform.baseVal.consolidate()}return new Lu(e?e.matrix:rs)})(n)},Lu.prototype.toString=function(){return"translate("+this.translate+")rotate("+this.rotate+")skewX("+this.skew+")scale("+this.scale+")"};var rs={a:1,b:0,c:0,d:1,e:0,f:0};Xo.interpolateTransform=Ru,Xo.layout={},Xo.layout.bundle=function(){return function(n){for(var t=[],e=-1,r=n.length;++e<r;)t.push(Uu(n[e]));return t}},Xo.layout.chord=function(){function n(){var n,s,f,h,g,p={},v=[],d=Xo.range(i),m=[];for(e=[],r=[],n=0,h=-1;++h<i;){for(s=0,g=-1;++g<i;)s+=u[h][g];v.push(s),m.push(Xo.range(i)),n+=s}for(o&&d.sort(function(n,t){return o(v[n],v[t])}),a&&m.forEach(function(n,t){n.sort(function(n,e){return a(u[t][n],u[t][e])})}),n=(ka-l*i)/n,s=0,h=-1;++h<i;){for(f=s,g=-1;++g<i;){var y=d[h],x=m[y][g],M=u[y][x],_=s,b=s+=M*n;p[y+"-"+x]={index:y,subindex:x,startAngle:_,endAngle:b,value:M}}r[y]={index:y,startAngle:f,endAngle:s,value:(s-f)/n},s+=l}for(h=-1;++h<i;)for(g=h-1;++g<i;){var w=p[h+"-"+g],S=p[g+"-"+h];(w.value||S.value)&&e.push(w.value<S.value?{source:S,target:w}:{source:w,target:S})}c&&t()}function t(){e.sort(function(n,t){return c((n.source.value+n.target.value)/2,(t.source.value+t.target.value)/2)})}var e,r,u,i,o,a,c,s={},l=0;return s.matrix=function(n){return arguments.length?(i=(u=n)&&u.length,e=r=null,s):u},s.padding=function(n){return arguments.length?(l=n,e=r=null,s):l},s.sortGroups=function(n){return arguments.length?(o=n,e=r=null,s):o},s.sortSubgroups=function(n){return arguments.length?(a=n,e=null,s):a},s.sortChords=function(n){return arguments.length?(c=n,e&&t(),s):c},s.chords=function(){return e||n(),e},s.groups=function(){return r||n(),r},s},Xo.layout.force=function(){function n(n){return function(t,e,r,u){if(t.point!==n){var i=t.cx-n.x,o=t.cy-n.y,a=u-e,c=i*i+o*o;if(c>a*a/d){if(p>c){var s=t.charge/c;n.px-=i*s,n.py-=o*s}return!0}if(t.point&&c&&p>c){var s=t.pointCharge/c;n.px-=i*s,n.py-=o*s}}return!t.charge}}function t(n){n.px=Xo.event.x,n.py=Xo.event.y,a.resume()}var e,r,u,i,o,a={},c=Xo.dispatch("start","tick","end"),s=[1,1],l=.9,f=us,h=is,g=-30,p=os,v=.1,d=.64,m=[],y=[];return a.tick=function(){if((r*=.99)<.005)return c.end({type:"end",alpha:r=0}),!0;var t,e,a,f,h,p,d,x,M,_=m.length,b=y.length;for(e=0;b>e;++e)a=y[e],f=a.source,h=a.target,x=h.x-f.x,M=h.y-f.y,(p=x*x+M*M)&&(p=r*i[e]*((p=Math.sqrt(p))-u[e])/p,x*=p,M*=p,h.x-=x*(d=f.weight/(h.weight+f.weight)),h.y-=M*d,f.x+=x*(d=1-d),f.y+=M*d);if((d=r*v)&&(x=s[0]/2,M=s[1]/2,e=-1,d))for(;++e<_;)a=m[e],a.x+=(x-a.x)*d,a.y+=(M-a.y)*d;if(g)for(Zu(t=Xo.geom.quadtree(m),r,o),e=-1;++e<_;)(a=m[e]).fixed||t.visit(n(a));for(e=-1;++e<_;)a=m[e],a.fixed?(a.x=a.px,a.y=a.py):(a.x-=(a.px-(a.px=a.x))*l,a.y-=(a.py-(a.py=a.y))*l);c.tick({type:"tick",alpha:r})},a.nodes=function(n){return arguments.length?(m=n,a):m},a.links=function(n){return arguments.length?(y=n,a):y},a.size=function(n){return arguments.length?(s=n,a):s},a.linkDistance=function(n){return arguments.length?(f="function"==typeof n?n:+n,a):f},a.distance=a.linkDistance,a.linkStrength=function(n){return arguments.length?(h="function"==typeof n?n:+n,a):h},a.friction=function(n){return arguments.length?(l=+n,a):l},a.charge=function(n){return arguments.length?(g="function"==typeof n?n:+n,a):g},a.chargeDistance=function(n){return arguments.length?(p=n*n,a):Math.sqrt(p)},a.gravity=function(n){return arguments.length?(v=+n,a):v},a.theta=function(n){return arguments.length?(d=n*n,a):Math.sqrt(d)},a.alpha=function(n){return arguments.length?(n=+n,r?r=n>0?n:0:n>0&&(c.start({type:"start",alpha:r=n}),Xo.timer(a.tick)),a):r},a.start=function(){function n(n,r){if(!e){for(e=new Array(c),a=0;c>a;++a)e[a]=[];for(a=0;s>a;++a){var u=y[a];e[u.source.index].push(u.target),e[u.target.index].push(u.source)}}for(var i,o=e[t],a=-1,s=o.length;++a<s;)if(!isNaN(i=o[a][n]))return i;return Math.random()*r}var t,e,r,c=m.length,l=y.length,p=s[0],v=s[1];for(t=0;c>t;++t)(r=m[t]).index=t,r.weight=0;for(t=0;l>t;++t)r=y[t],"number"==typeof r.source&&(r.source=m[r.source]),"number"==typeof r.target&&(r.target=m[r.target]),++r.source.weight,++r.target.weight;for(t=0;c>t;++t)r=m[t],isNaN(r.x)&&(r.x=n("x",p)),isNaN(r.y)&&(r.y=n("y",v)),isNaN(r.px)&&(r.px=r.x),isNaN(r.py)&&(r.py=r.y);if(u=[],"function"==typeof f)for(t=0;l>t;++t)u[t]=+f.call(this,y[t],t);else for(t=0;l>t;++t)u[t]=f;if(i=[],"function"==typeof h)for(t=0;l>t;++t)i[t]=+h.call(this,y[t],t);else for(t=0;l>t;++t)i[t]=h;if(o=[],"function"==typeof g)for(t=0;c>t;++t)o[t]=+g.call(this,m[t],t);else for(t=0;c>t;++t)o[t]=g;return a.resume()},a.resume=function(){return a.alpha(.1)},a.stop=function(){return a.alpha(0)},a.drag=function(){return e||(e=Xo.behavior.drag().origin(bt).on("dragstart.force",Fu).on("drag.force",t).on("dragend.force",Ou)),arguments.length?(this.on("mouseover.force",Yu).on("mouseout.force",Iu).call(e),void 0):e},Xo.rebind(a,c,"on")};var us=20,is=1,os=1/0;Xo.layout.hierarchy=function(){function n(t,o,a){var c=u.call(e,t,o);if(t.depth=o,a.push(t),c&&(s=c.length)){for(var s,l,f=-1,h=t.children=new Array(s),g=0,p=o+1;++f<s;)l=h[f]=n(c[f],p,a),l.parent=t,g+=l.value;r&&h.sort(r),i&&(t.value=g)}else delete t.children,i&&(t.value=+i.call(e,t,o)||0);return t}function t(n,r){var u=n.children,o=0;if(u&&(a=u.length))for(var a,c=-1,s=r+1;++c<a;)o+=t(u[c],s);else i&&(o=+i.call(e,n,r)||0);return i&&(n.value=o),o}function e(t){var e=[];return n(t,0,e),e}var r=Bu,u=Xu,i=$u;return e.sort=function(n){return arguments.length?(r=n,e):r},e.children=function(n){return arguments.length?(u=n,e):u},e.value=function(n){return arguments.length?(i=n,e):i},e.revalue=function(n){return t(n,0),n},e},Xo.layout.partition=function(){function n(t,e,r,u){var i=t.children;if(t.x=e,t.y=t.depth*u,t.dx=r,t.dy=u,i&&(o=i.length)){var o,a,c,s=-1;for(r=t.value?r/t.value:0;++s<o;)n(a=i[s],e,c=a.value*r,u),e+=c}}function t(n){var e=n.children,r=0;if(e&&(u=e.length))for(var u,i=-1;++i<u;)r=Math.max(r,t(e[i]));return 1+r}function e(e,i){var o=r.call(this,e,i);return n(o[0],0,u[0],u[1]/t(o[0])),o}var r=Xo.layout.hierarchy(),u=[1,1];return e.size=function(n){return arguments.length?(u=n,e):u},Vu(e,r)},Xo.layout.pie=function(){function n(i){var o=i.map(function(e,r){return+t.call(n,e,r)}),a=+("function"==typeof r?r.apply(this,arguments):r),c=(("function"==typeof u?u.apply(this,arguments):u)-a)/Xo.sum(o),s=Xo.range(i.length);null!=e&&s.sort(e===as?function(n,t){return o[t]-o[n]}:function(n,t){return e(i[n],i[t])});var l=[];return s.forEach(function(n){var t;l[n]={data:i[n],value:t=o[n],startAngle:a,endAngle:a+=t*c}}),l}var t=Number,e=as,r=0,u=ka;return n.value=function(e){return arguments.length?(t=e,n):t},n.sort=function(t){return arguments.length?(e=t,n):e},n.startAngle=function(t){return arguments.length?(r=t,n):r},n.endAngle=function(t){return arguments.length?(u=t,n):u},n};var as={};Xo.layout.stack=function(){function n(a,c){var s=a.map(function(e,r){return t.call(n,e,r)}),l=s.map(function(t){return t.map(function(t,e){return[i.call(n,t,e),o.call(n,t,e)]})}),f=e.call(n,l,c);s=Xo.permute(s,f),l=Xo.permute(l,f);var h,g,p,v=r.call(n,l,c),d=s.length,m=s[0].length;for(g=0;m>g;++g)for(u.call(n,s[0][g],p=v[g],l[0][g][1]),h=1;d>h;++h)u.call(n,s[h][g],p+=l[h-1][g][1],l[h][g][1]);return a}var t=bt,e=Qu,r=ni,u=Ku,i=Ju,o=Gu;return n.values=function(e){return arguments.length?(t=e,n):t},n.order=function(t){return arguments.length?(e="function"==typeof t?t:cs.get(t)||Qu,n):e},n.offset=function(t){return arguments.length?(r="function"==typeof t?t:ss.get(t)||ni,n):r},n.x=function(t){return arguments.length?(i=t,n):i},n.y=function(t){return arguments.length?(o=t,n):o},n.out=function(t){return arguments.length?(u=t,n):u},n};var cs=Xo.map({"inside-out":function(n){var t,e,r=n.length,u=n.map(ti),i=n.map(ei),o=Xo.range(r).sort(function(n,t){return u[n]-u[t]}),a=0,c=0,s=[],l=[];for(t=0;r>t;++t)e=o[t],c>a?(a+=i[e],s.push(e)):(c+=i[e],l.push(e));return l.reverse().concat(s)},reverse:function(n){return Xo.range(n.length).reverse()},"default":Qu}),ss=Xo.map({silhouette:function(n){var t,e,r,u=n.length,i=n[0].length,o=[],a=0,c=[];for(e=0;i>e;++e){for(t=0,r=0;u>t;t++)r+=n[t][e][1];r>a&&(a=r),o.push(r)}for(e=0;i>e;++e)c[e]=(a-o[e])/2;return c},wiggle:function(n){var t,e,r,u,i,o,a,c,s,l=n.length,f=n[0],h=f.length,g=[];for(g[0]=c=s=0,e=1;h>e;++e){for(t=0,u=0;l>t;++t)u+=n[t][e][1];for(t=0,i=0,a=f[e][0]-f[e-1][0];l>t;++t){for(r=0,o=(n[t][e][1]-n[t][e-1][1])/(2*a);t>r;++r)o+=(n[r][e][1]-n[r][e-1][1])/a;i+=o*n[t][e][1]}g[e]=c-=u?i/u*a:0,s>c&&(s=c)}for(e=0;h>e;++e)g[e]-=s;return g},expand:function(n){var t,e,r,u=n.length,i=n[0].length,o=1/u,a=[];for(e=0;i>e;++e){for(t=0,r=0;u>t;t++)r+=n[t][e][1];if(r)for(t=0;u>t;t++)n[t][e][1]/=r;else for(t=0;u>t;t++)n[t][e][1]=o}for(e=0;i>e;++e)a[e]=0;return a},zero:ni});Xo.layout.histogram=function(){function n(n,i){for(var o,a,c=[],s=n.map(e,this),l=r.call(this,s,i),f=u.call(this,l,s,i),i=-1,h=s.length,g=f.length-1,p=t?1:1/h;++i<g;)o=c[i]=[],o.dx=f[i+1]-(o.x=f[i]),o.y=0;if(g>0)for(i=-1;++i<h;)a=s[i],a>=l[0]&&a<=l[1]&&(o=c[Xo.bisect(f,a,1,g)-1],o.y+=p,o.push(n[i]));return c}var t=!0,e=Number,r=oi,u=ui;return n.value=function(t){return arguments.length?(e=t,n):e},n.range=function(t){return arguments.length?(r=_t(t),n):r},n.bins=function(t){return arguments.length?(u="number"==typeof t?function(n){return ii(n,t)}:_t(t),n):u},n.frequency=function(e){return arguments.length?(t=!!e,n):t},n},Xo.layout.tree=function(){function n(n,i){function o(n,t){var r=n.children,u=n._tree;if(r&&(i=r.length)){for(var i,a,s,l=r[0],f=l,h=-1;++h<i;)s=r[h],o(s,a),f=c(s,a,f),a=s;vi(n);var g=.5*(l._tree.prelim+s._tree.prelim);t?(u.prelim=t._tree.prelim+e(n,t),u.mod=u.prelim-g):u.prelim=g}else t&&(u.prelim=t._tree.prelim+e(n,t))}function a(n,t){n.x=n._tree.prelim+t;var e=n.children;if(e&&(r=e.length)){var r,u=-1;for(t+=n._tree.mod;++u<r;)a(e[u],t)}}function c(n,t,r){if(t){for(var u,i=n,o=n,a=t,c=n.parent.children[0],s=i._tree.mod,l=o._tree.mod,f=a._tree.mod,h=c._tree.mod;a=si(a),i=ci(i),a&&i;)c=ci(c),o=si(o),o._tree.ancestor=n,u=a._tree.prelim+f-i._tree.prelim-s+e(a,i),u>0&&(di(mi(a,n,r),n,u),s+=u,l+=u),f+=a._tree.mod,s+=i._tree.mod,h+=c._tree.mod,l+=o._tree.mod;a&&!si(o)&&(o._tree.thread=a,o._tree.mod+=f-l),i&&!ci(c)&&(c._tree.thread=i,c._tree.mod+=s-h,r=n)}return r}var s=t.call(this,n,i),l=s[0];pi(l,function(n,t){n._tree={ancestor:n,prelim:0,mod:0,change:0,shift:0,number:t?t._tree.number+1:0}}),o(l),a(l,-l._tree.prelim);var f=li(l,hi),h=li(l,fi),g=li(l,gi),p=f.x-e(f,h)/2,v=h.x+e(h,f)/2,d=g.depth||1;return pi(l,u?function(n){n.x*=r[0],n.y=n.depth*r[1],delete n._tree}:function(n){n.x=(n.x-p)/(v-p)*r[0],n.y=n.depth/d*r[1],delete n._tree}),s}var t=Xo.layout.hierarchy().sort(null).value(null),e=ai,r=[1,1],u=!1;return n.separation=function(t){return arguments.length?(e=t,n):e},n.size=function(t){return arguments.length?(u=null==(r=t),n):u?null:r},n.nodeSize=function(t){return arguments.length?(u=null!=(r=t),n):u?r:null},Vu(n,t)},Xo.layout.pack=function(){function n(n,i){var o=e.call(this,n,i),a=o[0],c=u[0],s=u[1],l=null==t?Math.sqrt:"function"==typeof t?t:function(){return t};if(a.x=a.y=0,pi(a,function(n){n.r=+l(n.value)}),pi(a,bi),r){var f=r*(t?1:Math.max(2*a.r/c,2*a.r/s))/2;pi(a,function(n){n.r+=f}),pi(a,bi),pi(a,function(n){n.r-=f})}return ki(a,c/2,s/2,t?1:1/Math.max(2*a.r/c,2*a.r/s)),o}var t,e=Xo.layout.hierarchy().sort(yi),r=0,u=[1,1];return n.size=function(t){return arguments.length?(u=t,n):u},n.radius=function(e){return arguments.length?(t=null==e||"function"==typeof e?e:+e,n):t},n.padding=function(t){return arguments.length?(r=+t,n):r},Vu(n,e)},Xo.layout.cluster=function(){function n(n,i){var o,a=t.call(this,n,i),c=a[0],s=0;pi(c,function(n){var t=n.children;t&&t.length?(n.x=Ci(t),n.y=Ai(t)):(n.x=o?s+=e(n,o):0,n.y=0,o=n)});var l=Ni(c),f=Li(c),h=l.x-e(l,f)/2,g=f.x+e(f,l)/2;return pi(c,u?function(n){n.x=(n.x-c.x)*r[0],n.y=(c.y-n.y)*r[1]}:function(n){n.x=(n.x-h)/(g-h)*r[0],n.y=(1-(c.y?n.y/c.y:1))*r[1]}),a}var t=Xo.layout.hierarchy().sort(null).value(null),e=ai,r=[1,1],u=!1;return n.separation=function(t){return arguments.length?(e=t,n):e},n.size=function(t){return arguments.length?(u=null==(r=t),n):u?null:r},n.nodeSize=function(t){return arguments.length?(u=null!=(r=t),n):u?r:null},Vu(n,t)},Xo.layout.treemap=function(){function n(n,t){for(var e,r,u=-1,i=n.length;++u<i;)r=(e=n[u]).value*(0>t?0:t),e.area=isNaN(r)||0>=r?0:r}function t(e){var i=e.children;if(i&&i.length){var o,a,c,s=f(e),l=[],h=i.slice(),p=1/0,v="slice"===g?s.dx:"dice"===g?s.dy:"slice-dice"===g?1&e.depth?s.dy:s.dx:Math.min(s.dx,s.dy);for(n(h,s.dx*s.dy/e.value),l.area=0;(c=h.length)>0;)l.push(o=h[c-1]),l.area+=o.area,"squarify"!==g||(a=r(l,v))<=p?(h.pop(),p=a):(l.area-=l.pop().area,u(l,v,s,!1),v=Math.min(s.dx,s.dy),l.length=l.area=0,p=1/0);l.length&&(u(l,v,s,!0),l.length=l.area=0),i.forEach(t)}}function e(t){var r=t.children;if(r&&r.length){var i,o=f(t),a=r.slice(),c=[];for(n(a,o.dx*o.dy/t.value),c.area=0;i=a.pop();)c.push(i),c.area+=i.area,null!=i.z&&(u(c,i.z?o.dx:o.dy,o,!a.length),c.length=c.area=0);r.forEach(e)}}function r(n,t){for(var e,r=n.area,u=0,i=1/0,o=-1,a=n.length;++o<a;)(e=n[o].area)&&(i>e&&(i=e),e>u&&(u=e));return r*=r,t*=t,r?Math.max(t*u*p/r,r/(t*i*p)):1/0}function u(n,t,e,r){var u,i=-1,o=n.length,a=e.x,s=e.y,l=t?c(n.area/t):0;if(t==e.dx){for((r||l>e.dy)&&(l=e.dy);++i<o;)u=n[i],u.x=a,u.y=s,u.dy=l,a+=u.dx=Math.min(e.x+e.dx-a,l?c(u.area/l):0);u.z=!0,u.dx+=e.x+e.dx-a,e.y+=l,e.dy-=l}else{for((r||l>e.dx)&&(l=e.dx);++i<o;)u=n[i],u.x=a,u.y=s,u.dx=l,s+=u.dy=Math.min(e.y+e.dy-s,l?c(u.area/l):0);u.z=!1,u.dy+=e.y+e.dy-s,e.x+=l,e.dx-=l}}function i(r){var u=o||a(r),i=u[0];return i.x=0,i.y=0,i.dx=s[0],i.dy=s[1],o&&a.revalue(i),n([i],i.dx*i.dy/i.value),(o?e:t)(i),h&&(o=u),u}var o,a=Xo.layout.hierarchy(),c=Math.round,s=[1,1],l=null,f=zi,h=!1,g="squarify",p=.5*(1+Math.sqrt(5));return i.size=function(n){return arguments.length?(s=n,i):s},i.padding=function(n){function t(t){var e=n.call(i,t,t.depth);return null==e?zi(t):qi(t,"number"==typeof e?[e,e,e,e]:e)}function e(t){return qi(t,n)}if(!arguments.length)return l;var r;return f=null==(l=n)?zi:"function"==(r=typeof n)?t:"number"===r?(n=[n,n,n,n],e):e,i},i.round=function(n){return arguments.length?(c=n?Math.round:Number,i):c!=Number},i.sticky=function(n){return arguments.length?(h=n,o=null,i):h},i.ratio=function(n){return arguments.length?(p=n,i):p},i.mode=function(n){return arguments.length?(g=n+"",i):g},Vu(i,a)},Xo.random={normal:function(n,t){var e=arguments.length;return 2>e&&(t=1),1>e&&(n=0),function(){var e,r,u;do e=2*Math.random()-1,r=2*Math.random()-1,u=e*e+r*r;while(!u||u>1);return n+t*e*Math.sqrt(-2*Math.log(u)/u)}},logNormal:function(){var n=Xo.random.normal.apply(Xo,arguments);return function(){return Math.exp(n())}},bates:function(n){var t=Xo.random.irwinHall(n);return function(){return t()/n}},irwinHall:function(n){return function(){for(var t=0,e=0;n>e;e++)t+=Math.random();return t}}},Xo.scale={};var ls={floor:bt,ceil:bt};Xo.scale.linear=function(){return Hi([0,1],[0,1],fu,!1)};var fs={s:1,g:1,p:1,r:1,e:1};Xo.scale.log=function(){return $i(Xo.scale.linear().domain([0,1]),10,!0,[1,10])};var hs=Xo.format(".0e"),gs={floor:function(n){return-Math.ceil(-n)},ceil:function(n){return-Math.floor(-n)}};Xo.scale.pow=function(){return Bi(Xo.scale.linear(),1,[0,1])},Xo.scale.sqrt=function(){return Xo.scale.pow().exponent(.5)},Xo.scale.ordinal=function(){return Ji([],{t:"range",a:[[]]})},Xo.scale.category10=function(){return Xo.scale.ordinal().range(ps)},Xo.scale.category20=function(){return Xo.scale.ordinal().range(vs)},Xo.scale.category20b=function(){return Xo.scale.ordinal().range(ds)},Xo.scale.category20c=function(){return Xo.scale.ordinal().range(ms)};var ps=[2062260,16744206,2924588,14034728,9725885,9197131,14907330,8355711,12369186,1556175].map(ht),vs=[2062260,11454440,16744206,16759672,2924588,10018698,14034728,16750742,9725885,12955861,9197131,12885140,14907330,16234194,8355711,13092807,12369186,14408589,1556175,10410725].map(ht),ds=[3750777,5395619,7040719,10264286,6519097,9216594,11915115,13556636,9202993,12426809,15186514,15190932,8666169,11356490,14049643,15177372,8077683,10834324,13528509,14589654].map(ht),ms=[3244733,7057110,10406625,13032431,15095053,16616764,16625259,16634018,3253076,7652470,10607003,13101504,7695281,10394312,12369372,14342891,6513507,9868950,12434877,14277081].map(ht);Xo.scale.quantile=function(){return Gi([],[])
},Xo.scale.quantize=function(){return Ki(0,1,[0,1])},Xo.scale.threshold=function(){return Qi([.5],[0,1])},Xo.scale.identity=function(){return no([0,1])},Xo.svg={},Xo.svg.arc=function(){function n(){var n=t.apply(this,arguments),i=e.apply(this,arguments),o=r.apply(this,arguments)+ys,a=u.apply(this,arguments)+ys,c=(o>a&&(c=o,o=a,a=c),a-o),s=Sa>c?"0":"1",l=Math.cos(o),f=Math.sin(o),h=Math.cos(a),g=Math.sin(a);return c>=xs?n?"M0,"+i+"A"+i+","+i+" 0 1,1 0,"+-i+"A"+i+","+i+" 0 1,1 0,"+i+"M0,"+n+"A"+n+","+n+" 0 1,0 0,"+-n+"A"+n+","+n+" 0 1,0 0,"+n+"Z":"M0,"+i+"A"+i+","+i+" 0 1,1 0,"+-i+"A"+i+","+i+" 0 1,1 0,"+i+"Z":n?"M"+i*l+","+i*f+"A"+i+","+i+" 0 "+s+",1 "+i*h+","+i*g+"L"+n*h+","+n*g+"A"+n+","+n+" 0 "+s+",0 "+n*l+","+n*f+"Z":"M"+i*l+","+i*f+"A"+i+","+i+" 0 "+s+",1 "+i*h+","+i*g+"L0,0"+"Z"}var t=to,e=eo,r=ro,u=uo;return n.innerRadius=function(e){return arguments.length?(t=_t(e),n):t},n.outerRadius=function(t){return arguments.length?(e=_t(t),n):e},n.startAngle=function(t){return arguments.length?(r=_t(t),n):r},n.endAngle=function(t){return arguments.length?(u=_t(t),n):u},n.centroid=function(){var n=(t.apply(this,arguments)+e.apply(this,arguments))/2,i=(r.apply(this,arguments)+u.apply(this,arguments))/2+ys;return[Math.cos(i)*n,Math.sin(i)*n]},n};var ys=-Ea,xs=ka-Aa;Xo.svg.line=function(){return io(bt)};var Ms=Xo.map({linear:oo,"linear-closed":ao,step:co,"step-before":so,"step-after":lo,basis:mo,"basis-open":yo,"basis-closed":xo,bundle:Mo,cardinal:go,"cardinal-open":fo,"cardinal-closed":ho,monotone:Eo});Ms.forEach(function(n,t){t.key=n,t.closed=/-closed$/.test(n)});var _s=[0,2/3,1/3,0],bs=[0,1/3,2/3,0],ws=[0,1/6,2/3,1/6];Xo.svg.line.radial=function(){var n=io(Ao);return n.radius=n.x,delete n.x,n.angle=n.y,delete n.y,n},so.reverse=lo,lo.reverse=so,Xo.svg.area=function(){return Co(bt)},Xo.svg.area.radial=function(){var n=Co(Ao);return n.radius=n.x,delete n.x,n.innerRadius=n.x0,delete n.x0,n.outerRadius=n.x1,delete n.x1,n.angle=n.y,delete n.y,n.startAngle=n.y0,delete n.y0,n.endAngle=n.y1,delete n.y1,n},Xo.svg.chord=function(){function n(n,a){var c=t(this,i,n,a),s=t(this,o,n,a);return"M"+c.p0+r(c.r,c.p1,c.a1-c.a0)+(e(c,s)?u(c.r,c.p1,c.r,c.p0):u(c.r,c.p1,s.r,s.p0)+r(s.r,s.p1,s.a1-s.a0)+u(s.r,s.p1,c.r,c.p0))+"Z"}function t(n,t,e,r){var u=t.call(n,e,r),i=a.call(n,u,r),o=c.call(n,u,r)+ys,l=s.call(n,u,r)+ys;return{r:i,a0:o,a1:l,p0:[i*Math.cos(o),i*Math.sin(o)],p1:[i*Math.cos(l),i*Math.sin(l)]}}function e(n,t){return n.a0==t.a0&&n.a1==t.a1}function r(n,t,e){return"A"+n+","+n+" 0 "+ +(e>Sa)+",1 "+t}function u(n,t,e,r){return"Q 0,0 "+r}var i=hr,o=gr,a=No,c=ro,s=uo;return n.radius=function(t){return arguments.length?(a=_t(t),n):a},n.source=function(t){return arguments.length?(i=_t(t),n):i},n.target=function(t){return arguments.length?(o=_t(t),n):o},n.startAngle=function(t){return arguments.length?(c=_t(t),n):c},n.endAngle=function(t){return arguments.length?(s=_t(t),n):s},n},Xo.svg.diagonal=function(){function n(n,u){var i=t.call(this,n,u),o=e.call(this,n,u),a=(i.y+o.y)/2,c=[i,{x:i.x,y:a},{x:o.x,y:a},o];return c=c.map(r),"M"+c[0]+"C"+c[1]+" "+c[2]+" "+c[3]}var t=hr,e=gr,r=Lo;return n.source=function(e){return arguments.length?(t=_t(e),n):t},n.target=function(t){return arguments.length?(e=_t(t),n):e},n.projection=function(t){return arguments.length?(r=t,n):r},n},Xo.svg.diagonal.radial=function(){var n=Xo.svg.diagonal(),t=Lo,e=n.projection;return n.projection=function(n){return arguments.length?e(zo(t=n)):t},n},Xo.svg.symbol=function(){function n(n,r){return(Ss.get(t.call(this,n,r))||Ro)(e.call(this,n,r))}var t=To,e=qo;return n.type=function(e){return arguments.length?(t=_t(e),n):t},n.size=function(t){return arguments.length?(e=_t(t),n):e},n};var Ss=Xo.map({circle:Ro,cross:function(n){var t=Math.sqrt(n/5)/2;return"M"+-3*t+","+-t+"H"+-t+"V"+-3*t+"H"+t+"V"+-t+"H"+3*t+"V"+t+"H"+t+"V"+3*t+"H"+-t+"V"+t+"H"+-3*t+"Z"},diamond:function(n){var t=Math.sqrt(n/(2*Cs)),e=t*Cs;return"M0,"+-t+"L"+e+",0"+" 0,"+t+" "+-e+",0"+"Z"},square:function(n){var t=Math.sqrt(n)/2;return"M"+-t+","+-t+"L"+t+","+-t+" "+t+","+t+" "+-t+","+t+"Z"},"triangle-down":function(n){var t=Math.sqrt(n/As),e=t*As/2;return"M0,"+e+"L"+t+","+-e+" "+-t+","+-e+"Z"},"triangle-up":function(n){var t=Math.sqrt(n/As),e=t*As/2;return"M0,"+-e+"L"+t+","+e+" "+-t+","+e+"Z"}});Xo.svg.symbolTypes=Ss.keys();var ks,Es,As=Math.sqrt(3),Cs=Math.tan(30*Na),Ns=[],Ls=0;Ns.call=da.call,Ns.empty=da.empty,Ns.node=da.node,Ns.size=da.size,Xo.transition=function(n){return arguments.length?ks?n.transition():n:xa.transition()},Xo.transition.prototype=Ns,Ns.select=function(n){var t,e,r,u=this.id,i=[];n=M(n);for(var o=-1,a=this.length;++o<a;){i.push(t=[]);for(var c=this[o],s=-1,l=c.length;++s<l;)(r=c[s])&&(e=n.call(r,r.__data__,s,o))?("__data__"in r&&(e.__data__=r.__data__),jo(e,s,u,r.__transition__[u]),t.push(e)):t.push(null)}return Do(i,u)},Ns.selectAll=function(n){var t,e,r,u,i,o=this.id,a=[];n=_(n);for(var c=-1,s=this.length;++c<s;)for(var l=this[c],f=-1,h=l.length;++f<h;)if(r=l[f]){i=r.__transition__[o],e=n.call(r,r.__data__,f,c),a.push(t=[]);for(var g=-1,p=e.length;++g<p;)(u=e[g])&&jo(u,g,o,i),t.push(u)}return Do(a,o)},Ns.filter=function(n){var t,e,r,u=[];"function"!=typeof n&&(n=q(n));for(var i=0,o=this.length;o>i;i++){u.push(t=[]);for(var e=this[i],a=0,c=e.length;c>a;a++)(r=e[a])&&n.call(r,r.__data__,a,i)&&t.push(r)}return Do(u,this.id)},Ns.tween=function(n,t){var e=this.id;return arguments.length<2?this.node().__transition__[e].tween.get(n):R(this,null==t?function(t){t.__transition__[e].tween.remove(n)}:function(r){r.__transition__[e].tween.set(n,t)})},Ns.attr=function(n,t){function e(){this.removeAttribute(a)}function r(){this.removeAttributeNS(a.space,a.local)}function u(n){return null==n?e:(n+="",function(){var t,e=this.getAttribute(a);return e!==n&&(t=o(e,n),function(n){this.setAttribute(a,t(n))})})}function i(n){return null==n?r:(n+="",function(){var t,e=this.getAttributeNS(a.space,a.local);return e!==n&&(t=o(e,n),function(n){this.setAttributeNS(a.space,a.local,t(n))})})}if(arguments.length<2){for(t in n)this.attr(t,n[t]);return this}var o="transform"==n?Ru:fu,a=Xo.ns.qualify(n);return Po(this,"attr."+n,t,a.local?i:u)},Ns.attrTween=function(n,t){function e(n,e){var r=t.call(this,n,e,this.getAttribute(u));return r&&function(n){this.setAttribute(u,r(n))}}function r(n,e){var r=t.call(this,n,e,this.getAttributeNS(u.space,u.local));return r&&function(n){this.setAttributeNS(u.space,u.local,r(n))}}var u=Xo.ns.qualify(n);return this.tween("attr."+n,u.local?r:e)},Ns.style=function(n,t,e){function r(){this.style.removeProperty(n)}function u(t){return null==t?r:(t+="",function(){var r,u=Go.getComputedStyle(this,null).getPropertyValue(n);return u!==t&&(r=fu(u,t),function(t){this.style.setProperty(n,r(t),e)})})}var i=arguments.length;if(3>i){if("string"!=typeof n){2>i&&(t="");for(e in n)this.style(e,n[e],t);return this}e=""}return Po(this,"style."+n,t,u)},Ns.styleTween=function(n,t,e){function r(r,u){var i=t.call(this,r,u,Go.getComputedStyle(this,null).getPropertyValue(n));return i&&function(t){this.style.setProperty(n,i(t),e)}}return arguments.length<3&&(e=""),this.tween("style."+n,r)},Ns.text=function(n){return Po(this,"text",n,Uo)},Ns.remove=function(){return this.each("end.transition",function(){var n;this.__transition__.count<2&&(n=this.parentNode)&&n.removeChild(this)})},Ns.ease=function(n){var t=this.id;return arguments.length<1?this.node().__transition__[t].ease:("function"!=typeof n&&(n=Xo.ease.apply(Xo,arguments)),R(this,function(e){e.__transition__[t].ease=n}))},Ns.delay=function(n){var t=this.id;return R(this,"function"==typeof n?function(e,r,u){e.__transition__[t].delay=+n.call(e,e.__data__,r,u)}:(n=+n,function(e){e.__transition__[t].delay=n}))},Ns.duration=function(n){var t=this.id;return R(this,"function"==typeof n?function(e,r,u){e.__transition__[t].duration=Math.max(1,n.call(e,e.__data__,r,u))}:(n=Math.max(1,n),function(e){e.__transition__[t].duration=n}))},Ns.each=function(n,t){var e=this.id;if(arguments.length<2){var r=Es,u=ks;ks=e,R(this,function(t,r,u){Es=t.__transition__[e],n.call(t,t.__data__,r,u)}),Es=r,ks=u}else R(this,function(r){var u=r.__transition__[e];(u.event||(u.event=Xo.dispatch("start","end"))).on(n,t)});return this},Ns.transition=function(){for(var n,t,e,r,u=this.id,i=++Ls,o=[],a=0,c=this.length;c>a;a++){o.push(n=[]);for(var t=this[a],s=0,l=t.length;l>s;s++)(e=t[s])&&(r=Object.create(e.__transition__[u]),r.delay+=r.duration,jo(e,s,i,r)),n.push(e)}return Do(o,i)},Xo.svg.axis=function(){function n(n){n.each(function(){var n,s=Xo.select(this),l=this.__chart__||e,f=this.__chart__=e.copy(),h=null==c?f.ticks?f.ticks.apply(f,a):f.domain():c,g=null==t?f.tickFormat?f.tickFormat.apply(f,a):bt:t,p=s.selectAll(".tick").data(h,f),v=p.enter().insert("g",".domain").attr("class","tick").style("opacity",Aa),d=Xo.transition(p.exit()).style("opacity",Aa).remove(),m=Xo.transition(p).style("opacity",1),y=Ri(f),x=s.selectAll(".domain").data([0]),M=(x.enter().append("path").attr("class","domain"),Xo.transition(x));v.append("line"),v.append("text");var _=v.select("line"),b=m.select("line"),w=p.select("text").text(g),S=v.select("text"),k=m.select("text");switch(r){case"bottom":n=Ho,_.attr("y2",u),S.attr("y",Math.max(u,0)+o),b.attr("x2",0).attr("y2",u),k.attr("x",0).attr("y",Math.max(u,0)+o),w.attr("dy",".71em").style("text-anchor","middle"),M.attr("d","M"+y[0]+","+i+"V0H"+y[1]+"V"+i);break;case"top":n=Ho,_.attr("y2",-u),S.attr("y",-(Math.max(u,0)+o)),b.attr("x2",0).attr("y2",-u),k.attr("x",0).attr("y",-(Math.max(u,0)+o)),w.attr("dy","0em").style("text-anchor","middle"),M.attr("d","M"+y[0]+","+-i+"V0H"+y[1]+"V"+-i);break;case"left":n=Fo,_.attr("x2",-u),S.attr("x",-(Math.max(u,0)+o)),b.attr("x2",-u).attr("y2",0),k.attr("x",-(Math.max(u,0)+o)).attr("y",0),w.attr("dy",".32em").style("text-anchor","end"),M.attr("d","M"+-i+","+y[0]+"H0V"+y[1]+"H"+-i);break;case"right":n=Fo,_.attr("x2",u),S.attr("x",Math.max(u,0)+o),b.attr("x2",u).attr("y2",0),k.attr("x",Math.max(u,0)+o).attr("y",0),w.attr("dy",".32em").style("text-anchor","start"),M.attr("d","M"+i+","+y[0]+"H0V"+y[1]+"H"+i)}if(f.rangeBand){var E=f,A=E.rangeBand()/2;l=f=function(n){return E(n)+A}}else l.rangeBand?l=f:d.call(n,f);v.call(n,l),m.call(n,f)})}var t,e=Xo.scale.linear(),r=zs,u=6,i=6,o=3,a=[10],c=null;return n.scale=function(t){return arguments.length?(e=t,n):e},n.orient=function(t){return arguments.length?(r=t in qs?t+"":zs,n):r},n.ticks=function(){return arguments.length?(a=arguments,n):a},n.tickValues=function(t){return arguments.length?(c=t,n):c},n.tickFormat=function(e){return arguments.length?(t=e,n):t},n.tickSize=function(t){var e=arguments.length;return e?(u=+t,i=+arguments[e-1],n):u},n.innerTickSize=function(t){return arguments.length?(u=+t,n):u},n.outerTickSize=function(t){return arguments.length?(i=+t,n):i},n.tickPadding=function(t){return arguments.length?(o=+t,n):o},n.tickSubdivide=function(){return arguments.length&&n},n};var zs="bottom",qs={top:1,right:1,bottom:1,left:1};Xo.svg.brush=function(){function n(i){i.each(function(){var i=Xo.select(this).style("pointer-events","all").style("-webkit-tap-highlight-color","rgba(0,0,0,0)").on("mousedown.brush",u).on("touchstart.brush",u),o=i.selectAll(".background").data([0]);o.enter().append("rect").attr("class","background").style("visibility","hidden").style("cursor","crosshair"),i.selectAll(".extent").data([0]).enter().append("rect").attr("class","extent").style("cursor","move");var a=i.selectAll(".resize").data(p,bt);a.exit().remove(),a.enter().append("g").attr("class",function(n){return"resize "+n}).style("cursor",function(n){return Ts[n]}).append("rect").attr("x",function(n){return/[ew]$/.test(n)?-3:null}).attr("y",function(n){return/^[ns]/.test(n)?-3:null}).attr("width",6).attr("height",6).style("visibility","hidden"),a.style("display",n.empty()?"none":null);var l,f=Xo.transition(i),h=Xo.transition(o);c&&(l=Ri(c),h.attr("x",l[0]).attr("width",l[1]-l[0]),e(f)),s&&(l=Ri(s),h.attr("y",l[0]).attr("height",l[1]-l[0]),r(f)),t(f)})}function t(n){n.selectAll(".resize").attr("transform",function(n){return"translate("+l[+/e$/.test(n)]+","+f[+/^s/.test(n)]+")"})}function e(n){n.select(".extent").attr("x",l[0]),n.selectAll(".extent,.n>rect,.s>rect").attr("width",l[1]-l[0])}function r(n){n.select(".extent").attr("y",f[0]),n.selectAll(".extent,.e>rect,.w>rect").attr("height",f[1]-f[0])}function u(){function u(){32==Xo.event.keyCode&&(C||(x=null,L[0]-=l[1],L[1]-=f[1],C=2),d())}function p(){32==Xo.event.keyCode&&2==C&&(L[0]+=l[1],L[1]+=f[1],C=0,d())}function v(){var n=Xo.mouse(_),u=!1;M&&(n[0]+=M[0],n[1]+=M[1]),C||(Xo.event.altKey?(x||(x=[(l[0]+l[1])/2,(f[0]+f[1])/2]),L[0]=l[+(n[0]<x[0])],L[1]=f[+(n[1]<x[1])]):x=null),E&&m(n,c,0)&&(e(S),u=!0),A&&m(n,s,1)&&(r(S),u=!0),u&&(t(S),w({type:"brush",mode:C?"move":"resize"}))}function m(n,t,e){var r,u,a=Ri(t),c=a[0],s=a[1],p=L[e],v=e?f:l,d=v[1]-v[0];return C&&(c-=p,s-=d+p),r=(e?g:h)?Math.max(c,Math.min(s,n[e])):n[e],C?u=(r+=p)+d:(x&&(p=Math.max(c,Math.min(s,2*x[e]-r))),r>p?(u=r,r=p):u=p),v[0]!=r||v[1]!=u?(e?o=null:i=null,v[0]=r,v[1]=u,!0):void 0}function y(){v(),S.style("pointer-events","all").selectAll(".resize").style("display",n.empty()?"none":null),Xo.select("body").style("cursor",null),z.on("mousemove.brush",null).on("mouseup.brush",null).on("touchmove.brush",null).on("touchend.brush",null).on("keydown.brush",null).on("keyup.brush",null),N(),w({type:"brushend"})}var x,M,_=this,b=Xo.select(Xo.event.target),w=a.of(_,arguments),S=Xo.select(_),k=b.datum(),E=!/^(n|s)$/.test(k)&&c,A=!/^(e|w)$/.test(k)&&s,C=b.classed("extent"),N=O(),L=Xo.mouse(_),z=Xo.select(Go).on("keydown.brush",u).on("keyup.brush",p);if(Xo.event.changedTouches?z.on("touchmove.brush",v).on("touchend.brush",y):z.on("mousemove.brush",v).on("mouseup.brush",y),S.interrupt().selectAll("*").interrupt(),C)L[0]=l[0]-L[0],L[1]=f[0]-L[1];else if(k){var q=+/w$/.test(k),T=+/^n/.test(k);M=[l[1-q]-L[0],f[1-T]-L[1]],L[0]=l[q],L[1]=f[T]}else Xo.event.altKey&&(x=L.slice());S.style("pointer-events","none").selectAll(".resize").style("display",null),Xo.select("body").style("cursor",b.style("cursor")),w({type:"brushstart"}),v()}var i,o,a=y(n,"brushstart","brush","brushend"),c=null,s=null,l=[0,0],f=[0,0],h=!0,g=!0,p=Rs[0];return n.event=function(n){n.each(function(){var n=a.of(this,arguments),t={x:l,y:f,i:i,j:o},e=this.__chart__||t;this.__chart__=t,ks?Xo.select(this).transition().each("start.brush",function(){i=e.i,o=e.j,l=e.x,f=e.y,n({type:"brushstart"})}).tween("brush:brush",function(){var e=hu(l,t.x),r=hu(f,t.y);return i=o=null,function(u){l=t.x=e(u),f=t.y=r(u),n({type:"brush",mode:"resize"})}}).each("end.brush",function(){i=t.i,o=t.j,n({type:"brush",mode:"resize"}),n({type:"brushend"})}):(n({type:"brushstart"}),n({type:"brush",mode:"resize"}),n({type:"brushend"}))})},n.x=function(t){return arguments.length?(c=t,p=Rs[!c<<1|!s],n):c},n.y=function(t){return arguments.length?(s=t,p=Rs[!c<<1|!s],n):s},n.clamp=function(t){return arguments.length?(c&&s?(h=!!t[0],g=!!t[1]):c?h=!!t:s&&(g=!!t),n):c&&s?[h,g]:c?h:s?g:null},n.extent=function(t){var e,r,u,a,h;return arguments.length?(c&&(e=t[0],r=t[1],s&&(e=e[0],r=r[0]),i=[e,r],c.invert&&(e=c(e),r=c(r)),e>r&&(h=e,e=r,r=h),(e!=l[0]||r!=l[1])&&(l=[e,r])),s&&(u=t[0],a=t[1],c&&(u=u[1],a=a[1]),o=[u,a],s.invert&&(u=s(u),a=s(a)),u>a&&(h=u,u=a,a=h),(u!=f[0]||a!=f[1])&&(f=[u,a])),n):(c&&(i?(e=i[0],r=i[1]):(e=l[0],r=l[1],c.invert&&(e=c.invert(e),r=c.invert(r)),e>r&&(h=e,e=r,r=h))),s&&(o?(u=o[0],a=o[1]):(u=f[0],a=f[1],s.invert&&(u=s.invert(u),a=s.invert(a)),u>a&&(h=u,u=a,a=h))),c&&s?[[e,u],[r,a]]:c?[e,r]:s&&[u,a])},n.clear=function(){return n.empty()||(l=[0,0],f=[0,0],i=o=null),n},n.empty=function(){return!!c&&l[0]==l[1]||!!s&&f[0]==f[1]},Xo.rebind(n,a,"on")};var Ts={n:"ns-resize",e:"ew-resize",s:"ns-resize",w:"ew-resize",nw:"nwse-resize",ne:"nesw-resize",se:"nwse-resize",sw:"nesw-resize"},Rs=[["n","e","s","w","nw","ne","se","sw"],["e","w"],["n","s"],[]],Ds=tc.format=ac.timeFormat,Ps=Ds.utc,Us=Ps("%Y-%m-%dT%H:%M:%S.%LZ");Ds.iso=Date.prototype.toISOString&&+new Date("2000-01-01T00:00:00.000Z")?Oo:Us,Oo.parse=function(n){var t=new Date(n);return isNaN(t)?null:t},Oo.toString=Us.toString,tc.second=Rt(function(n){return new ec(1e3*Math.floor(n/1e3))},function(n,t){n.setTime(n.getTime()+1e3*Math.floor(t))},function(n){return n.getSeconds()}),tc.seconds=tc.second.range,tc.seconds.utc=tc.second.utc.range,tc.minute=Rt(function(n){return new ec(6e4*Math.floor(n/6e4))},function(n,t){n.setTime(n.getTime()+6e4*Math.floor(t))},function(n){return n.getMinutes()}),tc.minutes=tc.minute.range,tc.minutes.utc=tc.minute.utc.range,tc.hour=Rt(function(n){var t=n.getTimezoneOffset()/60;return new ec(36e5*(Math.floor(n/36e5-t)+t))},function(n,t){n.setTime(n.getTime()+36e5*Math.floor(t))},function(n){return n.getHours()}),tc.hours=tc.hour.range,tc.hours.utc=tc.hour.utc.range,tc.month=Rt(function(n){return n=tc.day(n),n.setDate(1),n},function(n,t){n.setMonth(n.getMonth()+t)},function(n){return n.getMonth()}),tc.months=tc.month.range,tc.months.utc=tc.month.utc.range;var js=[1e3,5e3,15e3,3e4,6e4,3e5,9e5,18e5,36e5,108e5,216e5,432e5,864e5,1728e5,6048e5,2592e6,7776e6,31536e6],Hs=[[tc.second,1],[tc.second,5],[tc.second,15],[tc.second,30],[tc.minute,1],[tc.minute,5],[tc.minute,15],[tc.minute,30],[tc.hour,1],[tc.hour,3],[tc.hour,6],[tc.hour,12],[tc.day,1],[tc.day,2],[tc.week,1],[tc.month,1],[tc.month,3],[tc.year,1]],Fs=Ds.multi([[".%L",function(n){return n.getMilliseconds()}],[":%S",function(n){return n.getSeconds()}],["%I:%M",function(n){return n.getMinutes()}],["%I %p",function(n){return n.getHours()}],["%a %d",function(n){return n.getDay()&&1!=n.getDate()}],["%b %d",function(n){return 1!=n.getDate()}],["%B",function(n){return n.getMonth()}],["%Y",be]]),Os={range:function(n,t,e){return Xo.range(+n,+t,e).map(Io)},floor:bt,ceil:bt};Hs.year=tc.year,tc.scale=function(){return Yo(Xo.scale.linear(),Hs,Fs)};var Ys=Hs.map(function(n){return[n[0].utc,n[1]]}),Is=Ps.multi([[".%L",function(n){return n.getUTCMilliseconds()}],[":%S",function(n){return n.getUTCSeconds()}],["%I:%M",function(n){return n.getUTCMinutes()}],["%I %p",function(n){return n.getUTCHours()}],["%a %d",function(n){return n.getUTCDay()&&1!=n.getUTCDate()}],["%b %d",function(n){return 1!=n.getUTCDate()}],["%B",function(n){return n.getUTCMonth()}],["%Y",be]]);Ys.year=tc.year.utc,tc.scale.utc=function(){return Yo(Xo.scale.linear(),Ys,Is)},Xo.text=wt(function(n){return n.responseText}),Xo.json=function(n,t){return St(n,"application/json",Zo,t)},Xo.html=function(n,t){return St(n,"text/html",Vo,t)},Xo.xml=wt(function(n){return n.responseXML}),"function"==typeof define&&define.amd?define(Xo):"object"==typeof module&&module.exports?module.exports=Xo:this.d3=Xo}();
(function (window) {
    'use strict';

    /*global define, module, exports, require */

    var c3 = { version: "0.3.0" };

    var c3_chart_fn, c3_chart_internal_fn;

    function Chart(config) {
        var $$ = this.internal = new ChartInternal(this);
        $$.loadConfig(config);
        $$.init();

        // bind "this" to nested API
        (function bindThis(fn, target, argThis) {
            for (var key in fn) {
                target[key] = fn[key].bind(argThis);
                if (Object.keys(fn[key]).length > 0) {
                    bindThis(fn[key], target[key], argThis);
                }
            }
        })(c3_chart_fn, this, this);
    }

    function ChartInternal(api) {
        var $$ = this;
        $$.d3 = window.d3 ? window.d3 : typeof require !== 'undefined' ? require("d3") : undefined;
        $$.api = api;
        $$.config = $$.getDefaultConfig();
        $$.data = {};
        $$.cache = {};
        $$.axes = {};
    }

    c3.generate = function (config) {
        return new Chart(config);
    };

    c3.chart = {
        fn: Chart.prototype,
        internal: {
            fn: ChartInternal.prototype
        }
    };
    c3_chart_fn = c3.chart.fn;
    c3_chart_internal_fn = c3.chart.internal.fn;


    c3_chart_internal_fn.init = function () {
        var $$ = this, config = $$.config;

        $$.initParams();

        if (config.data_url) {
            $$.convertUrlToData(config.data_url, config.data_mimeType, config.data_keys, $$.initWithData);
        }
        else if (config.data_json) {
            $$.initWithData($$.convertJsonToData(config.data_json, config.data_keys));
        }
        else if (config.data_rows) {
            $$.initWithData($$.convertRowsToData(config.data_rows));
        }
        else if (config.data_columns) {
            $$.initWithData($$.convertColumnsToData(config.data_columns));
        }
        else {
            throw Error('url or json or rows or columns is required.');
        }
    };

    c3_chart_internal_fn.initParams = function () {
        var $$ = this, d3 = $$.d3, config = $$.config;

        // MEMO: clipId needs to be unique because it conflicts when multiple charts exist
        $$.clipId = "c3-" + (+new Date()) + '-clip',
        $$.clipIdForXAxis = $$.clipId + '-xaxis',
        $$.clipIdForYAxis = $$.clipId + '-yaxis',
        $$.clipIdForGrid = $$.clipId + '-grid',
        $$.clipIdForSubchart = $$.clipId + '-subchart',
        $$.clipPath = $$.getClipPath($$.clipId),
        $$.clipPathForXAxis = $$.getClipPath($$.clipIdForXAxis),
        $$.clipPathForYAxis = $$.getClipPath($$.clipIdForYAxis);
        $$.clipPathForGrid = $$.getClipPath($$.clipIdForGrid),
        $$.clipPathForSubchart = $$.getClipPath($$.clipIdForSubchart),

        $$.dragStart = null;
        $$.dragging = false;
        $$.flowing = false;
        $$.cancelClick = false;
        $$.mouseover = false;
        $$.transiting = false;

        $$.color = $$.generateColor();
        $$.levelColor = $$.generateLevelColor();

        $$.dataTimeFormat = config.data_xLocaltime ? d3.time.format : d3.time.format.utc;
        $$.axisTimeFormat = config.axis_x_localtime ? d3.time.format : d3.time.format.utc;
        $$.defaultAxisTimeFormat = $$.axisTimeFormat.multi([
            [".%L", function (d) { return d.getMilliseconds(); }],
            [":%S", function (d) { return d.getSeconds(); }],
            ["%I:%M", function (d) { return d.getMinutes(); }],
            ["%I %p", function (d) { return d.getHours(); }],
            ["%-m/%-d", function (d) { return d.getDay() && d.getDate() !== 1; }],
            ["%-m/%-d", function (d) { return d.getDate() !== 1; }],
            ["%-m/%-d", function (d) { return d.getMonth(); }],
            ["%Y/%-m/%-d", function () { return true; }]
        ]);

        $$.hiddenTargetIds = [];
        $$.hiddenLegendIds = [];
        $$.focusedTargetIds = [];
        $$.defocusedTargetIds = [];

        $$.xOrient = config.axis_rotated ? "left" : "bottom";
        $$.yOrient = config.axis_rotated ? "bottom" : "left";
        $$.y2Orient = config.axis_rotated ? "top" : "right";
        $$.subXOrient = config.axis_rotated ? "left" : "bottom";

        $$.isLegendRight = config.legend_position === 'right';
        $$.isLegendInset = config.legend_position === 'inset';
        $$.isLegendTop = config.legend_inset_anchor === 'top-left' || config.legend_inset_anchor === 'top-right';
        $$.isLegendLeft = config.legend_inset_anchor === 'top-left' || config.legend_inset_anchor === 'bottom-left';
        $$.legendStep = 0;
        $$.legendItemWidth = 0;
        $$.legendItemHeight = 0;
        $$.legendOpacityForHidden = 0.15;

        $$.currentMaxTickWidths = {
            x: 0,
            y: 0,
            y2: 0
        };

        $$.rotated_padding_left = 30;
        $$.rotated_padding_right = config.axis_rotated && !config.axis_x_show ? 0 : 30;
        $$.rotated_padding_top = 5;

        $$.withoutFadeIn = {};

        $$.axes.subx = d3.selectAll([]); // needs when excluding subchart.js
    };

    c3_chart_internal_fn.initWithData = function (data) {
        var $$ = this, d3 = $$.d3, config = $$.config;
        var defs, main, binding = true;

        if ($$.initPie) { $$.initPie(); }
        if ($$.initBrush) { $$.initBrush(); }
        if ($$.initZoom) { $$.initZoom(); }

        $$.selectChart = d3.select(config.bindto);
        if ($$.selectChart.empty()) {
            $$.selectChart = d3.select(document.createElement('div')).style('opacity', 0);
            $$.observeInserted($$.selectChart);
            binding = false;
        }
        $$.selectChart.html("").classed("c3", true);

        // Init data as targets
        $$.data.xs = {};
        $$.data.targets = $$.convertDataToTargets(data);

        if (config.data_filter) {
            $$.data.targets = $$.data.targets.filter(config.data_filter);
        }

        // Set targets to hide if needed
        if (config.data_hide) {
            $$.addHiddenTargetIds(config.data_hide === true ? $$.mapToIds($$.data.targets) : config.data_hide);
        }

        // when gauge, hide legend // TODO: fix
        if ($$.hasType('gauge')) {
            config.legend_show = false;
        }

        // Init sizes and scales
        $$.updateSizes();
        $$.updateScales();

        // Set domains for each scale
        $$.x.domain(d3.extent($$.getXDomain($$.data.targets)));
        $$.y.domain($$.getYDomain($$.data.targets, 'y'));
        $$.y2.domain($$.getYDomain($$.data.targets, 'y2'));
        $$.subX.domain($$.x.domain());
        $$.subY.domain($$.y.domain());
        $$.subY2.domain($$.y2.domain());

        // Save original x domain for zoom update
        $$.orgXDomain = $$.x.domain();

        // Set initialized scales to brush and zoom
        if ($$.brush) { $$.brush.scale($$.subX); }
        if (config.zoom_enabled) { $$.zoom.scale($$.x); }

        /*-- Basic Elements --*/

        // Define svgs
        $$.svg = $$.selectChart.append("svg")
            .style("overflow", "hidden")
            .on('mouseenter', function () { return config.onmouseover.call($$); })
            .on('mouseleave', function () { return config.onmouseout.call($$); });

        // Define defs
        defs = $$.svg.append("defs");
        $$.clipChart = $$.appendClip(defs, $$.clipId);
        $$.clipXAxis = $$.appendClip(defs, $$.clipIdForXAxis);
        $$.clipYAxis = $$.appendClip(defs, $$.clipIdForYAxis);
        $$.clipGrid = $$.appendClip(defs, $$.clipIdForGrid);
        $$.clipSubchart = $$.appendClip(defs, $$.clipIdForSubchart);
        $$.updateSvgSize();

        // Define regions
        main = $$.main = $$.svg.append("g").attr("transform", $$.getTranslate('main'));

        if ($$.initSubchart) { $$.initSubchart(); }
        if ($$.initTooltip) { $$.initTooltip(); }
        if ($$.initLegend) { $$.initLegend(); }

        /*-- Main Region --*/

        // text when empty
        main.append("text")
            .attr("class", CLASS.text + ' ' + CLASS.empty)
            .attr("text-anchor", "middle") // horizontal centering of text at x position in all browsers.
            .attr("dominant-baseline", "middle"); // vertical centering of text at y position in all browsers, except IE.

        // Regions
        $$.initRegion();

        // Grids
        $$.initGrid();

        // Define g for chart area
        main.append('g')
            .attr("clip-path", $$.clipPath)
            .attr('class', CLASS.chart);

        // Grid lines
        if (config.grid_lines_front) { $$.initGridLines(); }

        // Cover whole with rects for events
        $$.initEventRect();

        // Define g for bar chart area
        if ($$.initBar) { $$.initBar(); }

        // Define g for line chart area
        if ($$.initLine) { $$.initLine(); }

        // Define g for arc chart area
        if ($$.initArc) { $$.initArc(); }
        if ($$.initGauge) { $$.initGauge(); }

        // Define g for text area
        if ($$.initText) { $$.initText(); }

        // if zoom privileged, insert rect to forefront
        // TODO: is this needed?
        main.insert('rect', config.zoom_privileged ? null : 'g.' + CLASS.regions)
            .attr('class', CLASS.zoomRect)
            .attr('width', $$.width)
            .attr('height', $$.height)
            .style('opacity', 0)
            .on("dblclick.zoom", null);

        // Set default extent if defined
        if (config.axis_x_extent) { $$.brush.extent($$.getDefaultExtent()); }

        // Add Axis
        $$.initAxis();

        // Set targets
        $$.updateTargets($$.data.targets);

        // Draw with targets
        if (binding) {
            $$.updateDimension();
            $$.config.oninit.call($$);
            $$.redraw({
                withTransform: true,
                withUpdateXDomain: true,
                withUpdateOrgXDomain: true,
                withTransitionForAxis: false
            });
        }

        // Bind resize event
        if (window.onresize == null) {
            window.onresize = $$.generateResize();
        }
        if (window.onresize.add) {
            window.onresize.add(function () {
                config.onresize.call($$);
            });
            window.onresize.add(function () {
                $$.api.flush();
            });
            window.onresize.add(function () {
                config.onresized.call($$);
            });
        }

        // export element of the chart
        $$.api.element = $$.selectChart.node();
    };

    c3_chart_internal_fn.smoothLines = function (el, type) {
        var $$ = this;
        if (type === 'grid') {
            el.each(function () {
                var g = $$.d3.select(this),
                    x1 = g.attr('x1'),
                    x2 = g.attr('x2'),
                    y1 = g.attr('y1'),
                    y2 = g.attr('y2');
                g.attr({
                    'x1': Math.ceil(x1),
                    'x2': Math.ceil(x2),
                    'y1': Math.ceil(y1),
                    'y2': Math.ceil(y2)
                });
            });
        }
    };


    c3_chart_internal_fn.updateSizes = function () {
        var $$ = this, config = $$.config;
        var legendHeight = $$.legend ? $$.getLegendHeight() : 0,
            legendWidth = $$.legend ? $$.getLegendWidth() : 0,
            legendHeightForBottom = $$.isLegendRight || $$.isLegendInset ? 0 : legendHeight,
            hasArc = $$.hasArcType(),
            xAxisHeight = config.axis_rotated || hasArc ? 0 : $$.getHorizontalAxisHeight('x'),
            subchartHeight = config.subchart_show && !hasArc ? (config.subchart_size_height + xAxisHeight) : 0;

        $$.currentWidth = $$.getCurrentWidth();
        $$.currentHeight = $$.getCurrentHeight();

        // for main
        $$.margin = config.axis_rotated ? {
            top: $$.getHorizontalAxisHeight('y2') + $$.getCurrentPaddingTop(),
            right: hasArc ? 0 : $$.getCurrentPaddingRight(),
            bottom: $$.getHorizontalAxisHeight('y') + legendHeightForBottom + $$.getCurrentPaddingBottom(),
            left: subchartHeight + (hasArc ? 0 : $$.getCurrentPaddingLeft())
        } : {
            top: 4 + $$.getCurrentPaddingTop(), // for top tick text
            right: hasArc ? 0 : $$.getCurrentPaddingRight(),
            bottom: xAxisHeight + subchartHeight + legendHeightForBottom + $$.getCurrentPaddingBottom(),
            left: hasArc ? 0 : $$.getCurrentPaddingLeft()
        };

        // for subchart
        $$.margin2 = config.axis_rotated ? {
            top: $$.margin.top,
            right: NaN,
            bottom: 20 + legendHeightForBottom,
            left: $$.rotated_padding_left
        } : {
            top: $$.currentHeight - subchartHeight - legendHeightForBottom,
            right: NaN,
            bottom: xAxisHeight + legendHeightForBottom,
            left: $$.margin.left
        };

        // for legend
        $$.margin3 = {
            top: 0,
            right: NaN,
            bottom: 0,
            left: 0
        };
        if ($$.updateSizeForLegend) { $$.updateSizeForLegend(legendHeight, legendWidth); }

        $$.width = $$.currentWidth - $$.margin.left - $$.margin.right;
        $$.height = $$.currentHeight - $$.margin.top - $$.margin.bottom;
        if ($$.width < 0) { $$.width = 0; }
        if ($$.height < 0) { $$.height = 0; }

        $$.width2 = config.axis_rotated ? $$.margin.left - $$.rotated_padding_left - $$.rotated_padding_right : $$.width;
        $$.height2 = config.axis_rotated ? $$.height : $$.currentHeight - $$.margin2.top - $$.margin2.bottom;
        if ($$.width2 < 0) { $$.width2 = 0; }
        if ($$.height2 < 0) { $$.height2 = 0; }

        // for arc
        $$.arcWidth = $$.width - ($$.isLegendRight ? legendWidth + 10 : 0);
        $$.arcHeight = $$.height - ($$.isLegendRight ? 0 : 10);
        if ($$.hasType('gauge')) {
            $$.arcHeight += $$.height - $$.getGaugeLabelHeight();
        }
        if ($$.updateRadius) { $$.updateRadius(); }

        if ($$.isLegendRight && hasArc) {
            $$.margin3.left = $$.arcWidth / 2 + $$.radiusExpanded * 1.1;
        }
    };

    c3_chart_internal_fn.updateTargets = function (targets) {
        var $$ = this, config = $$.config;

        /*-- Main --*/

        //-- Text --//
        $$.updateTargetsForText(targets);

        //-- Bar --//
        $$.updateTargetsForBar(targets);

        //-- Line --//
        $$.updateTargetsForLine(targets);

        //-- Arc --//
        if ($$.updateTargetsForArc) { $$.updateTargetsForArc(targets); }
        if ($$.updateTargetsForSubchart) { $$.updateTargetsForSubchart(targets); }

        /*-- Show --*/

        // Fade-in each chart
        $$.svg.selectAll('.' + CLASS.target).filter(function (d) { return $$.isTargetToShow(d.id); })
          .transition().duration(config.transition_duration)
            .style("opacity", 1);
    };

    c3_chart_internal_fn.redraw = function (options, transitions) {
        var $$ = this, main = $$.main, d3 = $$.d3, config = $$.config;
        var areaIndices = $$.getShapeIndices($$.isAreaType), barIndices = $$.getShapeIndices($$.isBarType), lineIndices = $$.getShapeIndices($$.isLineType);
        var withY, withSubchart, withTransition, withTransitionForExit, withTransitionForAxis, withTransform, withUpdateXDomain, withUpdateOrgXDomain, withTrimXDomain, withLegend, withEventRect;
        var hideAxis = $$.hasArcType();
        var drawArea, drawBar, drawLine, xForText, yForText;
        var duration, durationForExit, durationForAxis;
        var waitForDraw, flow;
        var targetsToShow = $$.filterTargetsToShow($$.data.targets), tickValues, i, intervalForCulling, xDomainForZoom;
        var xv = $$.xv.bind($$),
            cx = ($$.config.axis_rotated ? $$.circleY : $$.circleX).bind($$),
            cy = ($$.config.axis_rotated ? $$.circleX : $$.circleY).bind($$);

        options = options || {};
        withY = getOption(options, "withY", true);
        withSubchart = getOption(options, "withSubchart", true);
        withTransition = getOption(options, "withTransition", true);
        withTransform = getOption(options, "withTransform", false);
        withUpdateXDomain = getOption(options, "withUpdateXDomain", false);
        withUpdateOrgXDomain = getOption(options, "withUpdateOrgXDomain", false);
        withTrimXDomain = getOption(options, "withTrimXDomain", true);
        withLegend = getOption(options, "withLegend", false);
        withEventRect = getOption(options, "withEventRect", true);
        withTransitionForExit = getOption(options, "withTransitionForExit", withTransition);
        withTransitionForAxis = getOption(options, "withTransitionForAxis", withTransition);

        duration = withTransition ? config.transition_duration : 0;
        durationForExit = withTransitionForExit ? duration : 0;
        durationForAxis = withTransitionForAxis ? duration : 0;

        transitions = transitions || $$.generateAxisTransitions(durationForAxis);

        // update legend and transform each g
        if (withLegend && config.legend_show) {
            $$.updateLegend($$.mapToIds($$.data.targets), options, transitions);
        }

        // MEMO: needed for grids calculation
        if ($$.isCategorized() && targetsToShow.length === 0) {
            $$.x.domain([0, $$.axes.x.selectAll('.tick').size()]);
        }

        if (targetsToShow.length) {
            $$.updateXDomain(targetsToShow, withUpdateXDomain, withUpdateOrgXDomain, withTrimXDomain);
            if (!config.axis_x_tick_values) {
                if (config.axis_x_tick_fit || config.axis_x_tick_count) {
                    tickValues = $$.generateTickValues($$.mapTargetsToUniqueXs(targetsToShow), config.axis_x_tick_count, $$.isTimeSeries());
                } else {
                    tickValues = undefined;
                }
                $$.xAxis.tickValues(tickValues);
                $$.subXAxis.tickValues(tickValues);
            }
        } else {
            $$.xAxis.tickValues([]);
            $$.subXAxis.tickValues([]);
        }

        if (withY) {
            xDomainForZoom = $$.x.orgDomain();
        }

        $$.y.domain($$.getYDomain(targetsToShow, 'y', xDomainForZoom));
        $$.y2.domain($$.getYDomain(targetsToShow, 'y2', xDomainForZoom));

        if (!config.axis_y_tick_values && config.axis_y_tick_count) {
            tickValues = $$.generateTickValues($$.y.domain(), config.axis_y_tick_count);
            $$.yAxis.tickValues(tickValues);
        }
        if (!config.axis_y2_tick_values && config.axis_y2_tick_count) {
            tickValues = $$.generateTickValues($$.y2.domain(), config.axis_y2_tick_count);
            $$.y2Axis.tickValues(tickValues);
        }

        // axes
        $$.redrawAxis(transitions, hideAxis);

        // Update axis label
        $$.updateAxisLabels(withTransition);

        // show/hide if manual culling needed
        if (withUpdateXDomain && targetsToShow.length) {
            if (config.axis_x_tick_culling && tickValues) {
                for (i = 1; i < tickValues.length; i++) {
                    if (tickValues.length / i < config.axis_x_tick_culling_max) {
                        intervalForCulling = i;
                        break;
                    }
                }
                $$.svg.selectAll('.' + CLASS.axisX + ' .tick text').each(function (e) {
                    var index = tickValues.indexOf(e);
                    if (index >= 0) {
                        d3.select(this).style('display', index % intervalForCulling ? 'none' : 'block');
                    }
                });
            } else {
                $$.svg.selectAll('.' + CLASS.axisX + ' .tick text').style('display', 'block');
            }
        }

        // setup drawer - MEMO: these must be called after axis updated
        drawArea = $$.generateDrawArea ? $$.generateDrawArea(areaIndices, false) : undefined;
        drawBar = $$.generateDrawBar ? $$.generateDrawBar(barIndices) : undefined;
        drawLine = $$.generateDrawLine ? $$.generateDrawLine(lineIndices, false) : undefined;
        xForText = $$.generateXYForText(areaIndices, barIndices, lineIndices, true);
        yForText = $$.generateXYForText(areaIndices, barIndices, lineIndices, false);

        // Update sub domain
        $$.subY.domain($$.y.domain());
        $$.subY2.domain($$.y2.domain());

        // tooltip
        $$.tooltip.style("display", "none");

        // xgrid focus
        $$.updateXgridFocus();

        // Data empty label positioning and text.
        main.select("text." + CLASS.text + '.' + CLASS.empty)
            .attr("x", $$.width / 2)
            .attr("y", $$.height / 2)
            .text(config.data_empty_label_text)
          .transition()
            .style('opacity', targetsToShow.length ? 0 : 1);

        // grid
        $$.redrawGrid(duration, withY);

        // rect for regions
        $$.redrawRegion(duration);

        // bars
        $$.redrawBar(durationForExit);

        // lines, areas and cricles
        $$.redrawLine(durationForExit);
        $$.redrawArea(durationForExit);
        $$.redrawCircle();

        // text
        if ($$.hasDataLabel()) {
            $$.redrawText(durationForExit);
        }

        // arc
        if ($$.redrawArc) { $$.redrawArc(duration, durationForExit, withTransform); }

        // subchart
        if ($$.redrawSubchart) {
            $$.redrawSubchart(withSubchart, transitions, duration, durationForExit, areaIndices, barIndices, lineIndices);
        }

        // circles for select
        main.selectAll('.' + CLASS.selectedCircles)
            .filter($$.isBarType.bind($$))
            .selectAll('circle')
            .remove();

        // event rects will redrawn when flow called
        if (config.interaction_enabled && !options.flow && withEventRect) {
            $$.redrawEventRect();
            if ($$.updateZoom) { $$.updateZoom(); }
        }

        // transition should be derived from one transition
        d3.transition().duration(duration).each(function () {
            var transitions = [];

            $$.addTransitionForBar(transitions, drawBar);
            $$.addTransitionForLine(transitions, drawLine);
            $$.addTransitionForArea(transitions, drawArea);
            $$.addTransitionForCircle(transitions, cx, cy);
            $$.addTransitionForText(transitions, xForText, yForText, options.flow);
            $$.addTransitionForRegion(transitions);
            $$.addTransitionForGrid(transitions);

            // Wait for end of transitions if called from flow API
            if (options.flow) {
                waitForDraw = $$.generateWait();
                transitions.forEach(function (t) {
                    waitForDraw.add(t);
                });
                flow = $$.generateFlow({
                    targets: targetsToShow,
                    flow: options.flow,
                    duration: duration,
                    drawBar: drawBar,
                    drawLine: drawLine,
                    drawArea: drawArea,
                    cx: cx,
                    cy: cy,
                    xv: xv,
                    xForText: xForText,
                    yForText: yForText
                });
            }
        })
        .call(waitForDraw || function () {}, flow || function () {});

        // update fadein condition
        $$.mapToIds($$.data.targets).forEach(function (id) {
            $$.withoutFadeIn[id] = true;
        });
    };

    c3_chart_internal_fn.updateAndRedraw = function (options) {
        var $$ = this, config = $$.config, transitions;
        options = options || {};
        // same with redraw
        options.withTransition = getOption(options, "withTransition", true);
        options.withTransform = getOption(options, "withTransform", false);
        options.withLegend = getOption(options, "withLegend", false);
        // NOT same with redraw
        options.withUpdateXDomain = true;
        options.withUpdateOrgXDomain = true;
        options.withTransitionForExit = false;
        options.withTransitionForTransform = getOption(options, "withTransitionForTransform", options.withTransition);
        // MEMO: this needs to be called before updateLegend and it means this ALWAYS needs to be called)
        $$.updateSizes();
        // MEMO: called in updateLegend in redraw if withLegend
        if (!(options.withLegend && config.legend_show)) {
            transitions = $$.generateAxisTransitions(options.withTransitionForAxis ? config.transition_duration : 0);
            // Update scales
            $$.updateScales();
            $$.updateSvgSize();
            // Update g positions
            $$.transformAll(options.withTransitionForTransform, transitions);
        }
        // Draw with new sizes & scales
        $$.redraw(options, transitions);
    };

    c3_chart_internal_fn.isTimeSeries = function () {
        return this.config.axis_x_type === 'timeseries';
    };
    c3_chart_internal_fn.isCategorized = function () {
        return this.config.axis_x_type.indexOf('categor') >= 0;
    };
    c3_chart_internal_fn.isCustomX = function () {
        var $$ = this, config = $$.config;
        return !$$.isTimeSeries() && (config.data_x || notEmpty(config.data_xs));
    };

    c3_chart_internal_fn.getTranslate = function (target) {
        var $$ = this, config = $$.config, x, y;
        if (target === 'main') {
            x = asHalfPixel($$.margin.left);
            y = asHalfPixel($$.margin.top);
        } else if (target === 'context') {
            x = asHalfPixel($$.margin2.left);
            y = asHalfPixel($$.margin2.top);
        } else if (target === 'legend') {
            x = $$.margin3.left;
            y = $$.margin3.top;
        } else if (target === 'x') {
            x = 0;
            y = config.axis_rotated ? 0 : $$.height;
        } else if (target === 'y') {
            x = 0;
            y = config.axis_rotated ? $$.height : 0;
        } else if (target === 'y2') {
            x = config.axis_rotated ? 0 : $$.width;
            y = config.axis_rotated ? 1 : 0;
        } else if (target === 'subx') {
            x = 0;
            y = config.axis_rotated ? 0 : $$.height2;
        } else if (target === 'arc') {
            x = $$.arcWidth / 2;
            y = $$.arcHeight / 2;
        }
        return "translate(" + x + "," + y + ")";
    };
    c3_chart_internal_fn.initialOpacity = function (d) {
        return d.value !== null && this.withoutFadeIn[d.id] ? 1 : 0;
    };
    c3_chart_internal_fn.opacityForCircle = function (d) {
        return isValue(d.value) && this.config.point_show ? (this.isScatterType(d) ? 0.5 : 1) : 0;
    };
    c3_chart_internal_fn.opacityForText = function () {
        return this.hasDataLabel() ? 1 : 0;
    };
    c3_chart_internal_fn.xx = function (d) {
        return d ? this.x(d.x) : null;
    };
    c3_chart_internal_fn.xv = function (d) {
        var $$ = this;
        return Math.ceil($$.x($$.isTimeSeries() ? $$.parseDate(d.value) : d.value));
    };
    c3_chart_internal_fn.yv = function (d) {
        var $$ = this,
            yScale = d.axis && d.axis === 'y2' ? $$.y2 : $$.y;
        return Math.ceil(yScale(d.value));
    };
    c3_chart_internal_fn.subxx = function (d) {
        return d ? this.subX(d.x) : null;
    };

    c3_chart_internal_fn.transformMain = function (withTransition, transitions) {
        var $$ = this,
            xAxis, yAxis, y2Axis;
        if (transitions && transitions.axisX) {
            xAxis = transitions.axisX;
        } else {
            xAxis  = $$.main.select('.' + CLASS.axisX);
            if (withTransition) { xAxis = xAxis.transition(); }
        }
        if (transitions && transitions.axisY) {
            yAxis = transitions.axisY;
        } else {
            yAxis = $$.main.select('.' + CLASS.axisY);
            if (withTransition) { yAxis = yAxis.transition(); }
        }
        if (transitions && transitions.axisY2) {
            y2Axis = transitions.axisY2;
        } else {
            y2Axis = $$.main.select('.' + CLASS.axisY2);
            if (withTransition) { y2Axis = y2Axis.transition(); }
        }
        (withTransition ? $$.main.transition() : $$.main).attr("transform", $$.getTranslate('main'));
        xAxis.attr("transform", $$.getTranslate('x'));
        yAxis.attr("transform", $$.getTranslate('y'));
        y2Axis.attr("transform", $$.getTranslate('y2'));
        $$.main.select('.' + CLASS.chartArcs).attr("transform", $$.getTranslate('arc'));
    };
    c3_chart_internal_fn.transformAll = function (withTransition, transitions) {
        var $$ = this;
        $$.transformMain(withTransition, transitions);
        if ($$.config.subchart_show) { $$.transformContext(withTransition, transitions); }
        if ($$.legend) { $$.transformLegend(withTransition); }
    };

    c3_chart_internal_fn.updateSvgSize = function () {
        var $$ = this,
            brush = $$.svg.select(".c3-brush .background");
        $$.svg.attr('width', $$.currentWidth).attr('height', $$.currentHeight);
        $$.svg.selectAll(['#' + $$.clipId, '#' + $$.clipIdForGrid]).select('rect')
            .attr('width', $$.width)
            .attr('height', $$.height);
        $$.svg.select('#' + $$.clipIdForXAxis).select('rect')
            .attr('x', $$.getXAxisClipX.bind($$))
            .attr('y', $$.getXAxisClipY.bind($$))
            .attr('width', $$.getXAxisClipWidth.bind($$))
            .attr('height', $$.getXAxisClipHeight.bind($$));
        $$.svg.select('#' + $$.clipIdForYAxis).select('rect')
            .attr('x', $$.getYAxisClipX.bind($$))
            .attr('y', $$.getYAxisClipY.bind($$))
            .attr('width', $$.getYAxisClipWidth.bind($$))
            .attr('height', $$.getYAxisClipHeight.bind($$));
        $$.svg.select('#' + $$.clipIdForSubchart).select('rect')
            .attr('width', $$.width)
            .attr('height', brush.size() ? brush.attr('height') : 0);
        $$.svg.select('.' + CLASS.zoomRect)
            .attr('width', $$.width)
            .attr('height', $$.height);
        // MEMO: parent div's height will be bigger than svg when <!DOCTYPE html>
        $$.selectChart.style('max-height', $$.currentHeight + "px");
    };


    c3_chart_internal_fn.updateDimension = function () {
        var $$ = this;
        if ($$.config.axis_rotated) {
            $$.axes.x.call($$.xAxis);
            $$.axes.subx.call($$.subXAxis);
        } else {
            $$.axes.y.call($$.yAxis);
            $$.axes.y2.call($$.y2Axis);
        }
        $$.updateSizes();
        $$.updateScales();
        $$.updateSvgSize();
        $$.transformAll(false);
    };

    c3_chart_internal_fn.observeInserted = function (selection) {
        var $$ = this, observer = new MutationObserver(function (mutations) {
            mutations.forEach(function (mutation) {
                if (mutation.type === 'childList' && mutation.previousSibling) {
                    observer.disconnect();
                    // need to wait for completion of load because size calculation requires the actual sizes determined after that completion
                    var interval = window.setInterval(function () {
                        // parentNode will NOT be null when completed
                        if (selection.node().parentNode) {
                            window.clearInterval(interval);
                            $$.updateDimension();
                            $$.config.oninit.call($$);
                            $$.redraw({
                                withTransform: true,
                                withUpdateXDomain: true,
                                withUpdateOrgXDomain: true,
                                withTransition: false,
                                withTransitionForTransform: false,
                                withLegend: true
                            });
                            selection.transition().style('opacity', 1);
                        }
                    }, 10);
                }
            });
        });
        observer.observe(selection.node(), {attributes: true, childList: true, characterData: true});
    };


    c3_chart_internal_fn.generateResize = function () {
        var resizeFunctions = [];
        function callResizeFunctions() {
            resizeFunctions.forEach(function (f) {
                f();
            });
        }
        callResizeFunctions.add = function (f) {
            resizeFunctions.push(f);
        };
        return callResizeFunctions;
    };

    c3_chart_internal_fn.endall = function (transition, callback) {
        var n = 0;
        transition
            .each(function () { ++n; })
            .each("end", function () {
                if (!--n) { callback.apply(this, arguments); }
            });
    };
    c3_chart_internal_fn.generateWait = function () {
        var transitionsToWait = [],
            f = function (transition, callback) {
                var timer = setInterval(function () {
                    var done = 0;
                    transitionsToWait.forEach(function (t) {
                        if (t.empty()) {
                            done += 1;
                            return;
                        }
                        try {
                            t.transition();
                        } catch (e) {
                            done += 1;
                        }
                    });
                    if (done === transitionsToWait.length) {
                        clearInterval(timer);
                        if (callback) { callback(); }
                    }
                }, 10);
            };
        f.add = function (transition) {
            transitionsToWait.push(transition);
        };
        return f;
    };

    c3_chart_internal_fn.parseDate = function (date) {
        var $$ = this, parsedDate;
        if (date instanceof Date) {
            parsedDate = date;
        } else if (typeof date === 'number') {
            parsedDate = new Date(date);
        } else {
            parsedDate = $$.dataTimeFormat($$.config.data_xFormat).parse(date);
        }
        if (!parsedDate || isNaN(+parsedDate)) {
            window.console.error("Failed to parse x '" + date + "' to Date object");
        }
        return parsedDate;
    };

    c3_chart_internal_fn.getDefaultConfig = function () {
        var config = {
            bindto: '#chart',
            size_width: undefined,
            size_height: undefined,
            padding_left: undefined,
            padding_right: undefined,
            padding_top: undefined,
            padding_bottom: undefined,
            zoom_enabled: false,
            zoom_extent: undefined,
            zoom_privileged: false,
            zoom_rescale: false,
            zoom_onzoom: function () {},
            zoom_onzoomstart: function () {},
            zoom_onzoomend: function () {},
            interaction_enabled: true,
            onmouseover: function () {},
            onmouseout: function () {},
            onresize: function () {},
            onresized: function () {},
            oninit: function () {},
            transition_duration: 350,
            data_x: undefined,
            data_xs: {},
            data_xFormat: '%Y-%m-%d',
            data_xLocaltime: true,
            data_xSort: true,
            data_idConverter: function (id) { return id; },
            data_names: {},
            data_classes: {},
            data_groups: [],
            data_axes: {},
            data_type: undefined,
            data_types: {},
            data_labels: {},
            data_order: 'desc',
            data_regions: {},
            data_color: undefined,
            data_colors: {},
            data_hide: false,
            data_filter: undefined,
            data_selection_enabled: false,
            data_selection_grouped: false,
            data_selection_isselectable: function () { return true; },
            data_selection_multiple: true,
            data_onclick: function () {},
            data_onmouseover: function () {},
            data_onmouseout: function () {},
            data_onselected: function () {},
            data_onunselected: function () {},
            data_ondragstart: function () {},
            data_ondragend: function () {},
            data_url: undefined,
            data_json: undefined,
            data_rows: undefined,
            data_columns: undefined,
            data_mimeType: undefined,
            data_keys: undefined,
            // configuration for no plot-able data supplied.
            data_empty_label_text: "",
            // subchart
            subchart_show: false,
            subchart_size_height: 60,
            subchart_onbrush: function () {},
            // color
            color_pattern: [],
            color_threshold: {},
            // legend
            legend_show: true,
            legend_position: 'bottom',
            legend_inset_anchor: 'top-left',
            legend_inset_x: 10,
            legend_inset_y: 0,
            legend_inset_step: undefined,
            legend_item_onclick: undefined,
            legend_item_onmouseover: undefined,
            legend_item_onmouseout: undefined,
            legend_equally: false,
            // axis
            axis_rotated: false,
            axis_x_show: true,
            axis_x_type: 'indexed',
            axis_x_localtime: true,
            axis_x_categories: [],
            axis_x_tick_centered: false,
            axis_x_tick_format: undefined,
            axis_x_tick_culling: {},
            axis_x_tick_culling_max: 10,
            axis_x_tick_count: undefined,
            axis_x_tick_fit: true,
            axis_x_tick_values: null,
            axis_x_tick_rotate: undefined,
            axis_x_tick_outer: true,
            axis_x_tick_width: 80,
            axis_x_max: undefined,
            axis_x_min: undefined,
            axis_x_padding: {},
            axis_x_height: undefined,
            axis_x_extent: undefined,
            axis_x_label: {},
            axis_y_show: true,
            axis_y_max: undefined,
            axis_y_min: undefined,
            axis_y_center: undefined,
            axis_y_label: {},
            axis_y_tick_format: undefined,
            axis_y_tick_outer: true,
            axis_y_tick_values: null,
            axis_y_tick_count: undefined,
            axis_y_padding: {},
            axis_y_default: undefined,
            axis_y2_show: false,
            axis_y2_max: undefined,
            axis_y2_min: undefined,
            axis_y2_center: undefined,
            axis_y2_label: {},
            axis_y2_tick_format: undefined,
            axis_y2_tick_outer: true,
            axis_y2_tick_values: null,
            axis_y2_tick_count: undefined,
            axis_y2_padding: {},
            axis_y2_default: undefined,
            // grid
            grid_x_show: false,
            grid_x_type: 'tick',
            grid_x_lines: [],
            grid_y_show: false,
            // not used
            // grid_y_type: 'tick',
            grid_y_lines: [],
            grid_y_ticks: 10,
            grid_focus_show: true,
            grid_lines_front: true,
            // point - point of each data
            point_show: true,
            point_r: 2.5,
            point_focus_expand_enabled: true,
            point_focus_expand_r: undefined,
            point_select_r: undefined,
            // line
            line_connectNull: false,
            line_step_type: 'step',
            // bar
            bar_width: undefined,
            bar_width_ratio: 0.6,
            bar_width_max: undefined,
            bar_zerobased: true,
            // area
            area_zerobased: true,
            // pie
            pie_label_show: true,
            pie_label_format: undefined,
            pie_label_threshold: 0.05,
            pie_expand: true,
            // gauge
            gauge_label_show: true,
            gauge_label_format: undefined,
            gauge_expand: true,
            gauge_min: 0,
            gauge_max: 100,
            gauge_units: undefined,
            gauge_width: undefined,
            // donut
            donut_label_show: true,
            donut_label_format: undefined,
            donut_label_threshold: 0.05,
            donut_width: undefined,
            donut_expand: true,
            donut_title: "",
            // region - region to change style
            regions: [],
            // tooltip - show when mouseover on each data
            tooltip_show: true,
            tooltip_grouped: true,
            tooltip_format_title: undefined,
            tooltip_format_name: undefined,
            tooltip_format_value: undefined,
            tooltip_contents: function (d, defaultTitleFormat, defaultValueFormat, color) {
                return this.getTooltipContent ? this.getTooltipContent(d, defaultTitleFormat, defaultValueFormat, color) : '';
            },
            tooltip_init_show: false,
            tooltip_init_x: 0,
            tooltip_init_position: {top: '0px', left: '50px'}
        };

        Object.keys(this.additionalConfig).forEach(function (key) {
            config[key] = this.additionalConfig[key];
        }, this);

        return config;
    };
    c3_chart_internal_fn.additionalConfig = {};

    c3_chart_internal_fn.loadConfig = function (config) {
        var this_config = this.config, target, keys, read;
        function find() {
            var key = keys.shift();
    //        console.log("key =>", key, ", target =>", target);
            if (key && target && typeof target === 'object' && key in target) {
                target = target[key];
                return find();
            }
            else if (!key) {
                return target;
            }
            else {
                return undefined;
            }
        }
        Object.keys(this_config).forEach(function (key) {
            target = config;
            keys = key.split('_');
            read = find();
    //        console.log("CONFIG : ", key, read);
            if (isDefined(read)) {
                this_config[key] = read;
            }
        });
    };

    c3_chart_internal_fn.getScale = function (min, max, forTimeseries) {
        return (forTimeseries ? this.d3.time.scale() : this.d3.scale.linear()).range([min, max]);
    };
    c3_chart_internal_fn.getX = function (min, max, domain, offset) {
        var $$ = this,
            scale = $$.getScale(min, max, $$.isTimeSeries()),
            _scale = domain ? scale.domain(domain) : scale, key;
        // Define customized scale if categorized axis
        if ($$.isCategorized()) {
            offset = offset || function () { return 0; };
            scale = function (d, raw) {
                var v = _scale(d) + offset(d);
                return raw ? v : Math.ceil(v);
            };
        } else {
            scale = function (d, raw) {
                var v = _scale(d);
                return raw ? v : Math.ceil(v);
            };
        }
        // define functions
        for (key in _scale) {
            scale[key] = _scale[key];
        }
        scale.orgDomain = function () {
            return _scale.domain();
        };
        // define custom domain() for categorized axis
        if ($$.isCategorized()) {
            scale.domain = function (domain) {
                if (!arguments.length) {
                    domain = this.orgDomain();
                    return [domain[0], domain[1] + 1];
                }
                _scale.domain(domain);
                return scale;
            };
        }
        return scale;
    };
    c3_chart_internal_fn.getY = function (min, max, domain) {
        var scale = this.getScale(min, max);
        if (domain) { scale.domain(domain); }
        return scale;
    };
    c3_chart_internal_fn.getYScale = function (id) {
        return this.getAxisId(id) === 'y2' ? this.y2 : this.y;
    };
    c3_chart_internal_fn.getSubYScale = function (id) {
        return this.getAxisId(id) === 'y2' ? this.subY2 : this.subY;
    };
    c3_chart_internal_fn.updateScales = function () {
        var $$ = this, config = $$.config,
            forInit = !$$.x;
        // update edges
        $$.xMin = config.axis_rotated ? 1 : 0;
        $$.xMax = config.axis_rotated ? $$.height : $$.width;
        $$.yMin = config.axis_rotated ? 0 : $$.height;
        $$.yMax = config.axis_rotated ? $$.width : 1;
        $$.subXMin = $$.xMin;
        $$.subXMax = $$.xMax;
        $$.subYMin = config.axis_rotated ? 0 : $$.height2;
        $$.subYMax = config.axis_rotated ? $$.width2 : 1;
        // update scales
        $$.x = $$.getX($$.xMin, $$.xMax, forInit ? undefined : $$.x.orgDomain(), function () { return $$.xAxis.tickOffset(); });
        $$.y = $$.getY($$.yMin, $$.yMax, forInit ? config.axis_y_default : $$.y.domain());
        $$.y2 = $$.getY($$.yMin, $$.yMax, forInit ? config.axis_y2_default : $$.y2.domain());
        $$.subX = $$.getX($$.xMin, $$.xMax, $$.orgXDomain, function (d) { return d % 1 ? 0 : $$.subXAxis.tickOffset(); });
        $$.subY = $$.getY($$.subYMin, $$.subYMax, forInit ? config.axis_y_default : $$.subY.domain());
        $$.subY2 = $$.getY($$.subYMin, $$.subYMax, forInit ? config.axis_y2_default : $$.subY2.domain());
        // update axes
        $$.xAxisTickFormat = $$.getXAxisTickFormat();
        $$.xAxisTickValues = $$.getXAxisTickValues();
        $$.yAxisTickValues = $$.getYAxisTickValues();
        $$.y2AxisTickValues = $$.getY2AxisTickValues();

        $$.xAxis = $$.getXAxis($$.x, $$.xOrient, $$.xAxisTickFormat, $$.xAxisTickValues, config.axis_x_tick_outer);
        $$.subXAxis = $$.getXAxis($$.subX, $$.subXOrient, $$.xAxisTickFormat, $$.xAxisTickValues, config.axis_x_tick_outer);
        $$.yAxis = $$.getYAxis($$.y, $$.yOrient, config.axis_y_tick_format, $$.yAxisTickValues, config.axis_y_tick_outer);
        $$.y2Axis = $$.getYAxis($$.y2, $$.y2Orient, config.axis_y2_tick_format, $$.y2AxisTickValues, config.axis_y2_tick_outer);

        // Set initialized scales to brush and zoom
        if (!forInit) {
            if ($$.brush) { $$.brush.scale($$.subX); }
            if (config.zoom_enabled) { $$.zoom.scale($$.x); }
        }
        // update for arc
        if ($$.updateArc) { $$.updateArc(); }
    };

    c3_chart_internal_fn.getYDomainMin = function (targets) {
        var $$ = this, config = $$.config,
            ids = $$.mapToIds(targets), ys = $$.getValuesAsIdKeyed(targets),
            j, k, baseId, idsInGroup, id, hasNegativeValue;
        if (config.data_groups.length > 0) {
            hasNegativeValue = $$.hasNegativeValueInTargets(targets);
            for (j = 0; j < config.data_groups.length; j++) {
                // Determine baseId
                idsInGroup = config.data_groups[j].filter(function (id) { return ids.indexOf(id) >= 0; });
                if (idsInGroup.length === 0) { continue; }
                baseId = idsInGroup[0];
                // Consider negative values
                if (hasNegativeValue && ys[baseId]) {
                    ys[baseId].forEach(function (v, i) {
                        ys[baseId][i] = v < 0 ? v : 0;
                    });
                }
                // Compute min
                for (k = 1; k < idsInGroup.length; k++) {
                    id = idsInGroup[k];
                    if (! ys[id]) { continue; }
                    ys[id].forEach(function (v, i) {
                        if ($$.getAxisId(id) === $$.getAxisId(baseId) && ys[baseId] && !(hasNegativeValue && +v > 0)) {
                            ys[baseId][i] += +v;
                        }
                    });
                }
            }
        }
        return $$.d3.min(Object.keys(ys).map(function (key) { return $$.d3.min(ys[key]); }));
    };
    c3_chart_internal_fn.getYDomainMax = function (targets) {
        var $$ = this, config = $$.config,
            ids = $$.mapToIds(targets), ys = $$.getValuesAsIdKeyed(targets),
            j, k, baseId, idsInGroup, id, hasPositiveValue;
        if (config.data_groups.length > 0) {
            hasPositiveValue = $$.hasPositiveValueInTargets(targets);
            for (j = 0; j < config.data_groups.length; j++) {
                // Determine baseId
                idsInGroup = config.data_groups[j].filter(function (id) { return ids.indexOf(id) >= 0; });
                if (idsInGroup.length === 0) { continue; }
                baseId = idsInGroup[0];
                // Consider positive values
                if (hasPositiveValue && ys[baseId]) {
                    ys[baseId].forEach(function (v, i) {
                        ys[baseId][i] = v > 0 ? v : 0;
                    });
                }
                // Compute max
                for (k = 1; k < idsInGroup.length; k++) {
                    id = idsInGroup[k];
                    if (! ys[id]) { continue; }
                    ys[id].forEach(function (v, i) {
                        if ($$.getAxisId(id) === $$.getAxisId(baseId) && ys[baseId] && !(hasPositiveValue && +v < 0)) {
                            ys[baseId][i] += +v;
                        }
                    });
                }
            }
        }
        return $$.d3.max(Object.keys(ys).map(function (key) { return $$.d3.max(ys[key]); }));
    };
    c3_chart_internal_fn.getYDomain = function (targets, axisId, xDomain) {
        var $$ = this, config = $$.config,
            targetsByAxisId = targets.filter(function (t) { return $$.getAxisId(t.id) === axisId; }),
            yTargets = xDomain ? $$.filterByXDomain(targetsByAxisId, xDomain) : targetsByAxisId,
            yMin = axisId === 'y2' ? config.axis_y2_min : config.axis_y_min,
            yMax = axisId === 'y2' ? config.axis_y2_max : config.axis_y_max,
            yDomainMin = isValue(yMin) ? yMin : $$.getYDomainMin(yTargets),
            yDomainMax = isValue(yMax) ? yMax : $$.getYDomainMax(yTargets),
            domainLength, padding, padding_top, padding_bottom,
            center = axisId === 'y2' ? config.axis_y2_center : config.axis_y_center,
            yDomainAbs, lengths, diff, ratio, isAllPositive, isAllNegative,
            isZeroBased = ($$.hasType('bar', yTargets) && config.bar_zerobased) || ($$.hasType('area', yTargets) && config.area_zerobased),
            showHorizontalDataLabel = $$.hasDataLabel() && config.axis_rotated,
            showVerticalDataLabel = $$.hasDataLabel() && !config.axis_rotated;

        if (yDomainMax < yDomainMin) {
            if (isValue(yMin)) {
                yDomainMax = yDomainMin + 10; // TODO: introduce axis.y.maxMin
            } else {
                yDomainMin = yDomainMax - 10; // TODO: introduce axis.y.minMax
            }
        }

        if (yTargets.length === 0) { // use current domain if target of axisId is none
            return axisId === 'y2' ? $$.y2.domain() : $$.y.domain();
        }
        if (isNaN(yDomainMin)) { // set minimum to zero when not number
            yDomainMin = 0;
        }
        if (isNaN(yDomainMax)) { // set maximum to have same value as yDomainMin
            yDomainMax = yDomainMin;
        }
        if (yDomainMin === yDomainMax) {
            yDomainMin < 0 ? yDomainMax = 0 : yDomainMin = 0;
        }
        isAllPositive = yDomainMin >= 0 && yDomainMax >= 0;
        isAllNegative = yDomainMin <= 0 && yDomainMax <= 0;

        // Cancel zerobased if axis_*_min / axis_*_max specified
        if ((isValue(yMin) && isAllPositive) || (isValue(yMax) && isAllNegative)) {
            isZeroBased = false;
        }

        // Bar/Area chart should be 0-based if all positive|negative
        if (isZeroBased) {
            if (isAllPositive) { yDomainMin = 0; }
            if (isAllNegative) { yDomainMax = 0; }
        }

        domainLength = Math.abs(yDomainMax - yDomainMin);
        padding = padding_top = padding_bottom = domainLength * 0.1;

        if (center) {
            yDomainAbs = Math.max(Math.abs(yDomainMin), Math.abs(yDomainMax));
            yDomainMax = yDomainAbs - center;
            yDomainMin = center - yDomainAbs;
        }
        // add padding for data label
        if (showHorizontalDataLabel) {
            lengths = $$.getDataLabelLength(yDomainMin, yDomainMax, axisId, 'width');
            diff = diffDomain($$.y.range());
            ratio = [lengths[0] / diff, lengths[1] / diff];
            padding_top += domainLength * (ratio[1] / (1 - ratio[0] - ratio[1]));
            padding_bottom += domainLength * (ratio[0] / (1 - ratio[0] - ratio[1]));
        } else if (showVerticalDataLabel) {
            lengths = $$.getDataLabelLength(yDomainMin, yDomainMax, axisId, 'height');
            padding_top += lengths[1];
            padding_bottom += lengths[0];
        }
        if (axisId === 'y' && notEmpty(config.axis_y_padding)) {
            padding_top = $$.getAxisPadding(config.axis_y_padding, 'top', padding, domainLength);
            padding_bottom = $$.getAxisPadding(config.axis_y_padding, 'bottom', padding, domainLength);
        }
        if (axisId === 'y2' && notEmpty(config.axis_y2_padding)) {
            padding_top = $$.getAxisPadding(config.axis_y2_padding, 'top', padding, domainLength);
            padding_bottom = $$.getAxisPadding(config.axis_y2_padding, 'bottom', padding, domainLength);
        }
        // Bar/Area chart should be 0-based if all positive|negative
        if (isZeroBased) {
            if (isAllPositive) { padding_bottom = yDomainMin; }
            if (isAllNegative) { padding_top = -yDomainMax; }
        }
        return [yDomainMin - padding_bottom, yDomainMax + padding_top];
    };
    c3_chart_internal_fn.getXDomainMin = function (targets) {
        var $$ = this, config = $$.config;
        return isDefined(config.axis_x_min) ?
            ($$.isTimeSeries() ? this.parseDate(config.axis_x_min) : config.axis_x_min) :
        $$.d3.min(targets, function (t) { return $$.d3.min(t.values, function (v) { return v.x; }); });
    };
    c3_chart_internal_fn.getXDomainMax = function (targets) {
        var $$ = this, config = $$.config;
        return isDefined(config.axis_x_max) ?
            ($$.isTimeSeries() ? this.parseDate(config.axis_x_max) : config.axis_x_max) :
        $$.d3.max(targets, function (t) { return $$.d3.max(t.values, function (v) { return v.x; }); });
    };
    c3_chart_internal_fn.getXDomainPadding = function (domain) {
        var $$ = this, config = $$.config,
            diff = domain[1] - domain[0],
            maxDataCount, padding, paddingLeft, paddingRight;
        if ($$.isCategorized()) {
            padding = 0;
        } else if ($$.hasType('bar')) {
            maxDataCount = $$.getMaxDataCount();
            padding = maxDataCount > 1 ? (diff / (maxDataCount - 1)) / 2 : 0.5;
        } else {
            padding = diff * 0.01;
        }
        if (typeof config.axis_x_padding === 'object' && notEmpty(config.axis_x_padding)) {
            paddingLeft = isValue(config.axis_x_padding.left) ? config.axis_x_padding.left : padding;
            paddingRight = isValue(config.axis_x_padding.right) ? config.axis_x_padding.right : padding;
        } else if (typeof config.axis_x_padding === 'number') {
            paddingLeft = paddingRight = config.axis_x_padding;
        } else {
            paddingLeft = paddingRight = padding;
        }
        return {left: paddingLeft, right: paddingRight};
    };
    c3_chart_internal_fn.getXDomain = function (targets) {
        var $$ = this,
            xDomain = [$$.getXDomainMin(targets), $$.getXDomainMax(targets)],
            firstX = xDomain[0], lastX = xDomain[1],
            padding = $$.getXDomainPadding(xDomain),
            min = 0, max = 0;
        // show center of x domain if min and max are the same
        if ((firstX - lastX) === 0 && !$$.isCategorized()) {
            if ($$.isTimeSeries()) {
                firstX = new Date(firstX.getTime() * 0.5);
                lastX = new Date(lastX.getTime() * 1.5);
            } else {
                firstX = firstX === 0 ? 1 : (firstX * 0.5);
                lastX = lastX === 0 ? -1 : (lastX * 1.5);
            }
        }
        if (firstX || firstX === 0) {
            min = $$.isTimeSeries() ? new Date(firstX.getTime() - padding.left) : firstX - padding.left;
        }
        if (lastX || lastX === 0) {
            max = $$.isTimeSeries() ? new Date(lastX.getTime() + padding.right) : lastX + padding.right;
        }
        return [min, max];
    };
    c3_chart_internal_fn.updateXDomain = function (targets, withUpdateXDomain, withUpdateOrgXDomain, withTrim, domain) {
        var $$ = this, config = $$.config;

        if (withUpdateOrgXDomain) {
            $$.x.domain(domain ? domain : $$.d3.extent($$.getXDomain(targets)));
            $$.orgXDomain = $$.x.domain();
            if (config.zoom_enabled) { $$.zoom.scale($$.x).updateScaleExtent(); }
            $$.subX.domain($$.x.domain());
            if ($$.brush) { $$.brush.scale($$.subX); }
        }
        if (withUpdateXDomain) {
            $$.x.domain(domain ? domain : (!$$.brush || $$.brush.empty()) ? $$.orgXDomain : $$.brush.extent());
            if (config.zoom_enabled) { $$.zoom.scale($$.x).updateScaleExtent(); }
        }

        // Trim domain when too big by zoom mousemove event
        if (withTrim) { $$.x.domain($$.trimXDomain($$.x.orgDomain())); }

        return $$.x.domain();
    };
    c3_chart_internal_fn.trimXDomain = function (domain) {
        var $$ = this;
        if (domain[0] <= $$.orgXDomain[0]) {
            domain[1] = +domain[1] + ($$.orgXDomain[0] - domain[0]);
            domain[0] = $$.orgXDomain[0];
        }
        if ($$.orgXDomain[1] <= domain[1]) {
            domain[0] = +domain[0] - (domain[1] - $$.orgXDomain[1]);
            domain[1] = $$.orgXDomain[1];
        }
        return domain;
    };

    c3_chart_internal_fn.isX = function (key) {
        var $$ = this, config = $$.config;
        return (config.data_x && key === config.data_x) || (notEmpty(config.data_xs) && hasValue(config.data_xs, key));
    };
    c3_chart_internal_fn.isNotX = function (key) {
        return !this.isX(key);
    };
    c3_chart_internal_fn.getXKey = function (id) {
        var $$ = this, config = $$.config;
        return config.data_x ? config.data_x : notEmpty(config.data_xs) ? config.data_xs[id] : null;
    };
    c3_chart_internal_fn.getXValuesOfXKey = function (key, targets) {
        var $$ = this,
            xValues, ids = targets && notEmpty(targets) ? $$.mapToIds(targets) : [];
        ids.forEach(function (id) {
            if ($$.getXKey(id) === key) {
                xValues = $$.data.xs[id];
            }
        });
        return xValues;
    };
    c3_chart_internal_fn.getIndexByX = function (x) {
        var $$ = this,
            data = $$.filterByX($$.data.targets, x);
        return data.length ? data[0].index : null;
    };
    c3_chart_internal_fn.getXValue = function (id, i) {
        var $$ = this;
        return id in $$.data.xs && $$.data.xs[id] && isValue($$.data.xs[id][i]) ? $$.data.xs[id][i] : i;
    };
    c3_chart_internal_fn.getOtherTargetXs = function () {
        var $$ = this,
            idsForX = Object.keys($$.data.xs);
        return idsForX.length ? $$.data.xs[idsForX[0]] : null;
    };
    c3_chart_internal_fn.getOtherTargetX = function (index) {
        var xs = this.getOtherTargetXs();
        return xs && index < xs.length ? xs[index] : null;
    };
    c3_chart_internal_fn.addXs = function (xs) {
        var $$ = this;
        Object.keys(xs).forEach(function (id) {
            $$.config.data_xs[id] = xs[id];
        });
    };
    c3_chart_internal_fn.hasMultipleX = function (xs) {
        return this.d3.set(Object.keys(xs).map(function (id) { return xs[id]; })).size() > 1;
    };
    c3_chart_internal_fn.isMultipleX = function () {
        return notEmpty(this.config.data_xs) || !this.config.data_xSort || this.hasType('scatter');
    };
    c3_chart_internal_fn.addName = function (data) {
        var $$ = this, name;
        if (data) {
            name = $$.config.data_names[data.id];
            data.name = name ? name : data.id;
        }
        return data;
    };
    c3_chart_internal_fn.getValueOnIndex = function (values, index) {
        var valueOnIndex = values.filter(function (v) { return v.index === index; });
        return valueOnIndex.length ? valueOnIndex[0] : null;
    };
    c3_chart_internal_fn.updateTargetX = function (targets, x) {
        var $$ = this;
        targets.forEach(function (t) {
            t.values.forEach(function (v, i) {
                v.x = $$.generateTargetX(x[i], t.id, i);
            });
            $$.data.xs[t.id] = x;
        });
    };
    c3_chart_internal_fn.updateTargetXs = function (targets, xs) {
        var $$ = this;
        targets.forEach(function (t) {
            if (xs[t.id]) {
                $$.updateTargetX([t], xs[t.id]);
            }
        });
    };
    c3_chart_internal_fn.generateTargetX = function (rawX, id, index) {
        var $$ = this, x;
        if ($$.isTimeSeries()) {
            x = rawX ? $$.parseDate(rawX) : $$.parseDate($$.getXValue(id, index));
        }
        else if ($$.isCustomX() && !$$.isCategorized()) {
            x = isValue(rawX) ? +rawX : $$.getXValue(id, index);
        }
        else {
            x = index;
        }
        return x;
    };
    c3_chart_internal_fn.cloneTarget = function (target) {
        return {
            id : target.id,
            id_org : target.id_org,
            values : target.values.map(function (d) {
                return {x: d.x, value: d.value, id: d.id};
            })
        };
    };
    c3_chart_internal_fn.getPrevX = function (i) {
        var $$ = this, value = $$.getValueOnIndex($$.data.targets[0].values, i - 1);
        return value ? value.x : null;
    };
    c3_chart_internal_fn.getNextX = function (i) {
        var $$ = this, value = $$.getValueOnIndex($$.data.targets[0].values, i + 1);
        return value ? value.x : null;
    };
    c3_chart_internal_fn.getMaxDataCount = function () {
        var $$ = this;
        return $$.d3.max($$.data.targets, function (t) { return t.values.length; });
    };
    c3_chart_internal_fn.getMaxDataCountTarget = function (targets) {
        var length = targets.length, max = 0, maxTarget;
        if (length > 1) {
            targets.forEach(function (t) {
                if (t.values.length > max) {
                    maxTarget = t;
                    max = t.values.length;
                }
            });
        } else {
            maxTarget = length ? targets[0] : null;
        }
        return maxTarget;
    };
    c3_chart_internal_fn.getEdgeX = function (targets) {
        var $$ = this;
        return !targets.length ? [0, 0] : [
            $$.d3.min(targets, function (t) { return t.values[0].x; }),
            $$.d3.max(targets, function (t) { return t.values[t.values.length - 1].x; })
        ];
    };
    c3_chart_internal_fn.mapToIds = function (targets) {
        return targets.map(function (d) { return d.id; });
    };
    c3_chart_internal_fn.mapToTargetIds = function (ids) {
        var $$ = this;
        return ids ? (isString(ids) ? [ids] : ids) : $$.mapToIds($$.data.targets);
    };
    c3_chart_internal_fn.hasTarget = function (targets, id) {
        var ids = this.mapToIds(targets), i;
        for (i = 0; i < ids.length; i++) {
            if (ids[i] === id) {
                return true;
            }
        }
        return false;
    };
    c3_chart_internal_fn.isTargetToShow = function (targetId) {
        return this.hiddenTargetIds.indexOf(targetId) < 0;
    };
    c3_chart_internal_fn.isLegendToShow = function (targetId) {
        return this.hiddenLegendIds.indexOf(targetId) < 0;
    };
    c3_chart_internal_fn.filterTargetsToShow = function (targets) {
        var $$ = this;
        return targets.filter(function (t) { return $$.isTargetToShow(t.id); });
    };
    c3_chart_internal_fn.mapTargetsToUniqueXs = function (targets) {
        var $$ = this;
        var xs = $$.d3.set($$.d3.merge(targets.map(function (t) { return t.values.map(function (v) { return +v.x; }); }))).values();
        return $$.isTimeSeries() ? xs.map(function (x) { return new Date(+x); }) : xs.map(function (x) { return +x; });
    };
    c3_chart_internal_fn.addHiddenTargetIds = function (targetIds) {
        this.hiddenTargetIds = this.hiddenTargetIds.concat(targetIds);
    };
    c3_chart_internal_fn.removeHiddenTargetIds = function (targetIds) {
        this.hiddenTargetIds = this.hiddenTargetIds.filter(function (id) { return targetIds.indexOf(id) < 0; });
    };
    c3_chart_internal_fn.addHiddenLegendIds = function (targetIds) {
        this.hiddenLegendIds = this.hiddenLegendIds.concat(targetIds);
    };
    c3_chart_internal_fn.removeHiddenLegendIds = function (targetIds) {
        this.hiddenLegendIds = this.hiddenLegendIds.filter(function (id) { return targetIds.indexOf(id) < 0; });
    };
    c3_chart_internal_fn.getValuesAsIdKeyed = function (targets) {
        var ys = {};
        targets.forEach(function (t) {
            ys[t.id] = [];
            t.values.forEach(function (v) {
                ys[t.id].push(v.value);
            });
        });
        return ys;
    };
    c3_chart_internal_fn.checkValueInTargets = function (targets, checker) {
        var ids = Object.keys(targets), i, j, values;
        for (i = 0; i < ids.length; i++) {
            values = targets[ids[i]].values;
            for (j = 0; j < values.length; j++) {
                if (checker(values[j].value)) {
                    return true;
                }
            }
        }
        return false;
    };
    c3_chart_internal_fn.hasNegativeValueInTargets = function (targets) {
        return this.checkValueInTargets(targets, function (v) { return v < 0; });
    };
    c3_chart_internal_fn.hasPositiveValueInTargets = function (targets) {
        return this.checkValueInTargets(targets, function (v) { return v > 0; });
    };
    c3_chart_internal_fn.isOrderDesc = function () {
        var config = this.config;
        return typeof(config.data_order) === 'string' && config.data_order.toLowerCase() === 'desc';
    };
    c3_chart_internal_fn.isOrderAsc = function () {
        var config = this.config;
        return typeof(config.data_order) === 'string' && config.data_order.toLowerCase() === 'asc';
    };
    c3_chart_internal_fn.orderTargets = function (targets) {
        var $$ = this, config = $$.config, orderAsc = $$.isOrderAsc(), orderDesc = $$.isOrderDesc();
        if (orderAsc || orderDesc) {
            targets.sort(function (t1, t2) {
                var reducer = function (p, c) { return p + Math.abs(c.value); };
                var t1Sum = t1.values.reduce(reducer, 0),
                    t2Sum = t2.values.reduce(reducer, 0);
                return orderAsc ? t2Sum - t1Sum : t1Sum - t2Sum;
            });
        } else if (isFunction(config.data_order)) {
            targets.sort(config.data_order);
        } // TODO: accept name array for order
        return targets;
    };
    c3_chart_internal_fn.filterByX = function (targets, x) {
        return this.d3.merge(targets.map(function (t) { return t.values; })).filter(function (v) { return v.x - x === 0; });
    };
    c3_chart_internal_fn.filterRemoveNull = function (data) {
        return data.filter(function (d) { return isValue(d.value); });
    };
    c3_chart_internal_fn.filterByXDomain = function (targets, xDomain) {
        return targets.map(function (t) {
            return {
                id: t.id,
                id_org: t.id_org,
                values: t.values.filter(function (v) {
                    return xDomain[0] <= v.x && v.x <= xDomain[1];
                })
            };
        });
    };
    c3_chart_internal_fn.hasDataLabel = function () {
        var config = this.config;
        if (typeof config.data_labels === 'boolean' && config.data_labels) {
            return true;
        } else if (typeof config.data_labels === 'object' && notEmpty(config.data_labels)) {
            return true;
        }
        return false;
    };
    c3_chart_internal_fn.getDataLabelLength = function (min, max, axisId, key) {
        var $$ = this,
            lengths = [0, 0], paddingCoef = 1.3;
        $$.selectChart.select('svg').selectAll('.dummy')
            .data([min, max])
            .enter().append('text')
            .text(function (d) { return $$.formatByAxisId(axisId)(d); })
            .each(function (d, i) {
                lengths[i] = this.getBoundingClientRect()[key] * paddingCoef;
            })
            .remove();
        return lengths;
    };
    c3_chart_internal_fn.isNoneArc = function (d) {
        return this.hasTarget(this.data.targets, d.id);
    },
    c3_chart_internal_fn.isArc = function (d) {
        return 'data' in d && this.hasTarget(this.data.targets, d.data.id);
    };
    c3_chart_internal_fn.findSameXOfValues = function (values, index) {
        var i, targetX = values[index].x, sames = [];
        for (i = index - 1; i >= 0; i--) {
            if (targetX !== values[i].x) { break; }
            sames.push(values[i]);
        }
        for (i = index; i < values.length; i++) {
            if (targetX !== values[i].x) { break; }
            sames.push(values[i]);
        }
        return sames;
    };

    c3_chart_internal_fn.findClosestFromTargets = function (targets, pos) {
        var $$ = this, candidates;

        // map to array of closest points of each target
        candidates = targets.map(function (target) {
            return $$.findClosest(target.values, pos);
        });

        // decide closest point and return
        return $$.findClosest(candidates, pos);
    };
    c3_chart_internal_fn.findClosest = function (values, pos) {
        var $$ = this, minDist, closest;
        values.forEach(function (v) {
            var d = $$.dist(v, pos);
            if (d < minDist || ! minDist) {
                minDist = d;
                closest = v;
            }
        });
        return closest;
    };
    c3_chart_internal_fn.dist = function (data, pos) {
        var $$ = this, config = $$.config,
            yScale = $$.getAxisId(data.id) === 'y' ? $$.y : $$.y2,
            xIndex = config.axis_rotated ? 1 : 0,
            yIndex = config.axis_rotated ? 0 : 1;
        return Math.pow($$.x(data.x) - pos[xIndex], 2) + Math.pow(yScale(data.value) - pos[yIndex], 2);
    };
    c3_chart_internal_fn.convertValuesToStep = function (values) {
        var converted = [].concat(values), i;

        if (!this.isCategorized()) {
            return values;
        }

        for (i = values.length + 1; 0 < i; i--) {
            converted[i] = converted[i - 1];
        }

        converted[0] = {
            x: converted[0].x - 1,
            value: converted[0].value,
            id: converted[0].id
        };
        converted[values.length + 1] = {
            x: converted[values.length].x + 1,
            value: converted[values.length].value,
            id: converted[values.length].id
        };

        return converted;
    };
    c3_chart_internal_fn.updateDataAttributes = function (name, attrs) {
        var $$ = this, config = $$.config, current = config['data_' + name];
        if (typeof attrs === 'undefined') { return current; }
        Object.keys(attrs).forEach(function (id) {
            current[id] = attrs[id];
        });
        $$.redraw({withLegend: true});
        return current;
    };

    c3_chart_internal_fn.convertUrlToData = function (url, mimeType, keys, done) {
        var $$ = this, type = mimeType ? mimeType : 'csv';
        $$.d3.xhr(url, function (error, data) {
            var d;
            if (type === 'json') {
                d = $$.convertJsonToData(JSON.parse(data.response), keys);
            } else if (type === 'tsv') {
                d = $$.convertTsvToData(data.response);
            } else {
                d = $$.convertCsvToData(data.response);
            }
            done.call($$, d);
        });
    };
    c3_chart_internal_fn.convertXsvToData = function (xsv, parser) {
        var rows = parser.parseRows(xsv), d;
        if (rows.length === 1) {
            d = [{}];
            rows[0].forEach(function (id) {
                d[0][id] = null;
            });
        } else {
            d = parser.parse(xsv);
        }
        return d;
    };
    c3_chart_internal_fn.convertCsvToData = function (csv) {
        return this.convertXsvToData(csv, this.d3.csv);
    };
    c3_chart_internal_fn.convertTsvToData = function (tsv) {
        return this.convertXsvToData(tsv, this.d3.tsv);
    };
    c3_chart_internal_fn.convertJsonToData = function (json, keys) {
        var $$ = this,
            new_rows = [], targetKeys, data;
        if (keys) { // when keys specified, json would be an array that includes objects
            targetKeys = keys.value;
            if (keys.x) {
                targetKeys.push(keys.x);
                $$.config.data_x = keys.x;
            }
            new_rows.push(targetKeys);
            json.forEach(function (o) {
                var new_row = [];
                targetKeys.forEach(function (key) {
                    // convert undefined to null because undefined data will be removed in convertDataToTargets()
                    var v = isUndefined(o[key]) ? null : o[key];
                    new_row.push(v);
                });
                new_rows.push(new_row);
            });
            data = $$.convertRowsToData(new_rows);
        } else {
            Object.keys(json).forEach(function (key) {
                new_rows.push([key].concat(json[key]));
            });
            data = $$.convertColumnsToData(new_rows);
        }
        return data;
    };
    c3_chart_internal_fn.convertRowsToData = function (rows) {
        var keys = rows[0], new_row = {}, new_rows = [], i, j;
        for (i = 1; i < rows.length; i++) {
            new_row = {};
            for (j = 0; j < rows[i].length; j++) {
                if (isUndefined(rows[i][j])) {
                    throw new Error("Source data is missing a component at (" + i + "," + j + ")!");
                }
                new_row[keys[j]] = rows[i][j];
            }
            new_rows.push(new_row);
        }
        return new_rows;
    };
    c3_chart_internal_fn.convertColumnsToData = function (columns) {
        var new_rows = [], i, j, key;
        for (i = 0; i < columns.length; i++) {
            key = columns[i][0];
            for (j = 1; j < columns[i].length; j++) {
                if (isUndefined(new_rows[j - 1])) {
                    new_rows[j - 1] = {};
                }
                if (isUndefined(columns[i][j])) {
                    throw new Error("Source data is missing a component at (" + i + "," + j + ")!");
                }
                new_rows[j - 1][key] = columns[i][j];
            }
        }
        return new_rows;
    };
    c3_chart_internal_fn.convertDataToTargets = function (data, appendXs) {
        var $$ = this, config = $$.config,
            ids = $$.d3.keys(data[0]).filter($$.isNotX, $$),
            xs = $$.d3.keys(data[0]).filter($$.isX, $$),
            targets;

        // save x for update data by load when custom x and c3.x API
        ids.forEach(function (id) {
            var xKey = $$.getXKey(id);

            if ($$.isCustomX() || $$.isTimeSeries()) {
                // if included in input data
                if (xs.indexOf(xKey) >= 0) {
                    $$.data.xs[id] = (appendXs && $$.data.xs[id] ? $$.data.xs[id] : []).concat(
                        data.map(function (d) { return d[xKey]; })
                            .filter(isValue)
                            .map(function (rawX, i) { return $$.generateTargetX(rawX, id, i); })
                    );
                }
                // if not included in input data, find from preloaded data of other id's x
                else if (config.data_x) {
                    $$.data.xs[id] = $$.getOtherTargetXs();
                }
                // if not included in input data, find from preloaded data
                else if (notEmpty(config.data_xs)) {
                    $$.data.xs[id] = $$.getXValuesOfXKey(xKey, $$.data.targets);
                }
                // MEMO: if no x included, use same x of current will be used
            } else {
                $$.data.xs[id] = data.map(function (d, i) { return i; });
            }
        });


        // check x is defined
        ids.forEach(function (id) {
            if (!$$.data.xs[id]) {
                throw new Error('x is not defined for id = "' + id + '".');
            }
        });

        // convert to target
        targets = ids.map(function (id, index) {
            var convertedId = config.data_idConverter(id);
            return {
                id: convertedId,
                id_org: id,
                values: data.map(function (d, i) {
                    var xKey = $$.getXKey(id), rawX = d[xKey], x = $$.generateTargetX(rawX, id, i);
                    // use x as categories if custom x and categorized
                    if ($$.isCustomX() && $$.isCategorized() && index === 0 && rawX) {
                        if (i === 0) { config.axis_x_categories = []; }
                        config.axis_x_categories.push(rawX);
                    }
                    // mark as x = undefined if value is undefined and filter to remove after mapped
                    if (isUndefined(d[id]) || $$.data.xs[id].length <= i) {
                        x = undefined;
                    }
                    return {x: x, value: d[id] !== null && !isNaN(d[id]) ? +d[id] : null, id: convertedId};
                }).filter(function (v) { return isDefined(v.x); })
            };
        });

        // finish targets
        targets.forEach(function (t) {
            var i;
            // sort values by its x
            if (config.data_xSort) {
                t.values = t.values.sort(function (v1, v2) {
                    var x1 = v1.x || v1.x === 0 ? v1.x : Infinity,
                        x2 = v2.x || v2.x === 0 ? v2.x : Infinity;
                    return x1 - x2;
                });
            }
            // indexing each value
            i = 0;
            t.values.forEach(function (v) {
                v.index = i++;
            });
            // this needs to be sorted because its index and value.index is identical
            $$.data.xs[t.id].sort(function (v1, v2) {
                return v1 - v2;
            });
        });

        // set target types
        if (config.data_type) {
            $$.setTargetType($$.mapToIds(targets).filter(function (id) { return ! (id in config.data_types); }), config.data_type);
        }

        // cache as original id keyed
        targets.forEach(function (d) {
            $$.addCache(d.id_org, d);
        });

        return targets;
    };

    c3_chart_internal_fn.load = function (targets, args) {
        var $$ = this;
        if (targets) {
            // filter loading targets if needed
            if (args.filter) {
                targets = targets.filter(args.filter);
            }
            // set type if args.types || args.type specified
            if (args.type || args.types) {
                targets.forEach(function (t) {
                    $$.setTargetType(t.id, args.types ? args.types[t.id] : args.type);
                });
            }
            // Update/Add data
            $$.data.targets.forEach(function (d) {
                for (var i = 0; i < targets.length; i++) {
                    if (d.id === targets[i].id) {
                        d.values = targets[i].values;
                        targets.splice(i, 1);
                        break;
                    }
                }
            });
            $$.data.targets = $$.data.targets.concat(targets); // add remained
        }

        // Set targets
        $$.updateTargets($$.data.targets);

        // Redraw with new targets
        $$.redraw({withUpdateOrgXDomain: true, withUpdateXDomain: true, withLegend: true});

        if (args.done) { args.done(); }
    };
    c3_chart_internal_fn.loadFromArgs = function (args) {
        var $$ = this;
        if (args.data) {
            $$.load($$.convertDataToTargets(args.data), args);
        }
        else if (args.url) {
            $$.convertUrlToData(args.url, args.mimeType, args.keys, function (data) {
                $$.load($$.convertDataToTargets(data), args);
            });
        }
        else if (args.json) {
            $$.load($$.convertDataToTargets($$.convertJsonToData(args.json, args.keys)), args);
        }
        else if (args.rows) {
            $$.load($$.convertDataToTargets($$.convertRowsToData(args.rows)), args);
        }
        else if (args.columns) {
            $$.load($$.convertDataToTargets($$.convertColumnsToData(args.columns)), args);
        }
        else {
            $$.load(null, args);
        }
    };
    c3_chart_internal_fn.unload = function (targetIds, done) {
        var $$ = this;
        if (!done) {
            done = function () {};
        }
        // filter existing target
        targetIds = targetIds.filter(function (id) { return $$.hasTarget($$.data.targets, id); });
        // If no target, call done and return
        if (!targetIds || targetIds.length === 0) {
            done();
            return;
        }
        $$.svg.selectAll(targetIds.map(function (id) { return $$.selectorTarget(id); }))
            .transition()
            .style('opacity', 0)
            .remove()
            .call($$.endall, done);
        targetIds.forEach(function (id) {
            // Reset fadein for future load
            $$.withoutFadeIn[id] = false;
            // Remove target's elements
            if ($$.legend) {
                $$.legend.selectAll('.' + CLASS.legendItem + $$.getTargetSelectorSuffix(id)).remove();
            }
            // Remove target
            $$.data.targets = $$.data.targets.filter(function (t) {
                return t.id !== id;
            });
        });
    };

    c3_chart_internal_fn.categoryName = function (i) {
        var config = this.config;
        return i < config.axis_x_categories.length ? config.axis_x_categories[i] : i;
    };

    c3_chart_internal_fn.initEventRect = function () {
        var $$ = this;
        $$.main.select('.' + CLASS.chart).append("g")
            .attr("class", CLASS.eventRects)
            .style('fill-opacity', 0);
    };
    c3_chart_internal_fn.redrawEventRect = function () {
        var $$ = this, config = $$.config,
            eventRectUpdate, maxDataCountTarget,
            isMultipleX = $$.isMultipleX();

        // rects for mouseover
        var eventRects = $$.main.select('.' + CLASS.eventRects)
                .style('cursor', config.zoom_enabled ? config.axis_rotated ? 'ns-resize' : 'ew-resize' : null)
                .classed(CLASS.eventRectsMultiple, isMultipleX)
                .classed(CLASS.eventRectsSingle, !isMultipleX);

        // clear old rects
        eventRects.selectAll('.' + CLASS.eventRect).remove();

        // open as public variable
        $$.eventRect = eventRects.selectAll('.' + CLASS.eventRect);

        if (isMultipleX) {
            eventRectUpdate = $$.eventRect.data([0]);
            // enter : only one rect will be added
            $$.generateEventRectsForMultipleXs(eventRectUpdate.enter());
            // update
            $$.updateEventRect(eventRectUpdate);
            // exit : not needed because always only one rect exists
        }
        else {
            // Set data and update $$.eventRect
            maxDataCountTarget = $$.getMaxDataCountTarget($$.data.targets);
            eventRects.datum(maxDataCountTarget ? maxDataCountTarget.values : []);
            $$.eventRect = eventRects.selectAll('.' + CLASS.eventRect);
            eventRectUpdate = $$.eventRect.data(function (d) { return d; });
            // enter
            $$.generateEventRectsForSingleX(eventRectUpdate.enter());
            // update
            $$.updateEventRect(eventRectUpdate);
            // exit
            eventRectUpdate.exit().remove();
        }
    };
    c3_chart_internal_fn.updateEventRect = function (eventRectUpdate) {
        var $$ = this, config = $$.config,
            x, y, w, h, rectW, rectX;

        // set update selection if null
        eventRectUpdate = eventRectUpdate || $$.eventRect.data(function (d) { return d; });

        if ($$.isMultipleX()) {
            // TODO: rotated not supported yet
            x = 0;
            y = 0;
            w = $$.width;
            h = $$.height;
        }
        else {
            if (($$.isCustomX() || $$.isTimeSeries()) && !$$.isCategorized()) {
                rectW = function (d) {
                    var prevX = $$.getPrevX(d.index), nextX = $$.getNextX(d.index);

                    // if there this is a single data point make the eventRect full width (or height)
                    if (prevX === null && nextX === null) {
                        return config.axis_rotated ? $$.height : $$.width;
                    }

                    if (prevX === null) { prevX = $$.x.domain()[0]; }
                    if (nextX === null) { nextX = $$.x.domain()[1]; }

                    return Math.max(0, ($$.x(nextX) - $$.x(prevX)) / 2);
                };
                rectX = function (d) {
                    var prevX = $$.getPrevX(d.index), nextX = $$.getNextX(d.index),
                        thisX = $$.data.xs[d.id][d.index];

                    // if there this is a single data point position the eventRect at 0
                    if (prevX === null && nextX === null) {
                        return 0;
                    }

                    if (prevX === null) { prevX = $$.x.domain()[0]; }

                    return ($$.x(thisX) + $$.x(prevX)) / 2;
                };
            } else {
                rectW = $$.getEventRectWidth();
                rectX = function (d) {
                    return $$.x(d.x) - (rectW / 2);
                };
            }
            x = config.axis_rotated ? 0 : rectX;
            y = config.axis_rotated ? rectX : 0;
            w = config.axis_rotated ? $$.width : rectW;
            h = config.axis_rotated ? rectW : $$.height;
        }

        eventRectUpdate
            .attr('class', $$.classEvent.bind($$))
            .attr("x", x)
            .attr("y", y)
            .attr("width", w)
            .attr("height", h);
    };
    c3_chart_internal_fn.generateEventRectsForSingleX = function (eventRectEnter) {
        var $$ = this, d3 = $$.d3, config = $$.config;
        eventRectEnter.append("rect")
            .attr("class", $$.classEvent.bind($$))
            .style("cursor", config.data_selection_enabled && config.data_selection_grouped ? "pointer" : null)
            .on('mouseover', function (d) {
                var index = d.index, selectedData, newData;

                if ($$.dragging || $$.flowing) { return; } // do nothing while dragging/flowing
                if ($$.hasArcType()) { return; }

                selectedData = $$.data.targets.map(function (t) {
                    return $$.addName($$.getValueOnIndex(t.values, index));
                });

                // Sort selectedData as names order
                newData = [];
                Object.keys(config.data_names).forEach(function (id) {
                    for (var j = 0; j < selectedData.length; j++) {
                        if (selectedData[j] && selectedData[j].id === id) {
                            newData.push(selectedData[j]);
                            selectedData.shift(j);
                            break;
                        }
                    }
                });
                selectedData = newData.concat(selectedData); // Add remained

                // Expand shapes for selection
                if (config.point_focus_expand_enabled) { $$.expandCircles(index, null, true); }
                $$.expandBars(index, null, true);

                // Call event handler
                $$.main.selectAll('.' + CLASS.shape + '-' + index).each(function (d) {
                    config.data_onmouseover.call($$, d);
                });
            })
            .on('mouseout', function (d) {
                var index = d.index;
                if ($$.hasArcType()) { return; }
                $$.hideXGridFocus();
                $$.hideTooltip();
                // Undo expanded shapes
                $$.unexpandCircles();
                $$.unexpandBars();
                // Call event handler
                $$.main.selectAll('.' + CLASS.shape + '-' + index).each(function (d) {
                    config.data_onmouseout.call($$, d);
                });
            })
            .on('mousemove', function (d) {
                var selectedData, index = d.index,
                    eventRect = $$.svg.select('.' + CLASS.eventRect + '-' + index);

                if ($$.dragging || $$.flowing) { return; } // do nothing while dragging/flowing
                if ($$.hasArcType()) { return; }

                if ($$.isStepType(d) && $$.config.line_step_type === 'step-after' && d3.mouse(this)[0] < $$.x($$.getXValue(d.id, index))) {
                    index -= 1;
                }

                // Show tooltip
                selectedData = $$.filterTargetsToShow($$.data.targets).map(function (t) {
                    return $$.addName($$.getValueOnIndex(t.values, index));
                });

                if (config.tooltip_grouped) {
                    $$.showTooltip(selectedData, d3.mouse(this));
                    $$.showXGridFocus(selectedData);
                }

                if (config.tooltip_grouped && (!config.data_selection_enabled || config.data_selection_grouped)) {
                    return;
                }

                $$.main.selectAll('.' + CLASS.shape + '-' + index)
                    .each(function () {
                        d3.select(this).classed(CLASS.EXPANDED, true);
                        if (config.data_selection_enabled) {
                            eventRect.style('cursor', config.data_selection_grouped ? 'pointer' : null);
                        }
                        if (!config.tooltip_grouped) {
                            $$.hideXGridFocus();
                            $$.hideTooltip();
                            if (!config.data_selection_grouped) {
                                $$.unexpandCircles(index);
                                $$.unexpandBars(index);
                            }
                        }
                    })
                    .filter(function (d) {
                        return $$.isWithinShape(this, d);
                    })
                    .each(function (d) {
                        if (config.data_selection_enabled && (config.data_selection_grouped || config.data_selection_isselectable(d))) {
                            eventRect.style('cursor', 'pointer');
                        }
                        if (!config.tooltip_grouped) {
                            $$.showTooltip([d], d3.mouse(this));
                            $$.showXGridFocus([d]);
                            if (config.point_focus_expand_enabled) { $$.expandCircles(index, d.id, true); }
                            $$.expandBars(index, d.id, true);
                        }
                    });
            })
            .on('click', function (d) {
                var index = d.index;
                if ($$.hasArcType() || !$$.toggleShape) { return; }
                if ($$.cancelClick) {
                    $$.cancelClick = false;
                    return;
                }
                if ($$.isStepType(d) && config.line_step_type === 'step-after' && d3.mouse(this)[0] < $$.x($$.getXValue(d.id, index))) {
                    index -= 1;
                }
                $$.main.selectAll('.' + CLASS.shape + '-' + index).each(function (d) {
                    if (config.data_selection_grouped || $$.isWithinShape(this, d)) {
                        $$.toggleShape(this, d, index);
                        $$.config.data_onclick.call($$.api, d, this);
                    }
                });
            })
            .call(
                d3.behavior.drag().origin(Object)
                    .on('drag', function () { $$.drag(d3.mouse(this)); })
                    .on('dragstart', function () { $$.dragstart(d3.mouse(this)); })
                    .on('dragend', function () { $$.dragend(); })
            );
    };

    c3_chart_internal_fn.generateEventRectsForMultipleXs = function (eventRectEnter) {
        var $$ = this, d3 = $$.d3, config = $$.config;
        eventRectEnter.append('rect')
            .attr('x', 0)
            .attr('y', 0)
            .attr('width', $$.width)
            .attr('height', $$.height)
            .attr('class', CLASS.eventRect)
            .on('mouseout', function () {
                if ($$.hasArcType()) { return; }
                $$.hideXGridFocus();
                $$.hideTooltip();
                $$.unexpandCircles();
            })
            .on('mousemove', function () {
                var targetsToShow = $$.filterTargetsToShow($$.data.targets);
                var mouse, closest, sameXData, selectedData;

                if ($$.dragging) { return; } // do nothing when dragging
                if ($$.hasArcType(targetsToShow)) { return; }

                mouse = d3.mouse(this);
                closest = $$.findClosestFromTargets(targetsToShow, mouse);

                if (! closest) { return; }

                if ($$.isScatterType(closest) || !config.tooltip_grouped) {
                    sameXData = [closest];
                } else {
                    sameXData = $$.filterByX(targetsToShow, closest.x);
                }

                // show tooltip when cursor is close to some point
                selectedData = sameXData.map(function (d) {
                    return $$.addName(d);
                });
                $$.showTooltip(selectedData, mouse);

                // expand points
                if (config.point_focus_expand_enabled) {
                    $$.expandCircles(closest.index, closest.id, true);
                }

                // Show xgrid focus line
                $$.showXGridFocus(selectedData);

                // Show cursor as pointer if point is close to mouse position
                if ($$.dist(closest, mouse) < 100) {
                    $$.svg.select('.' + CLASS.eventRect).style('cursor', 'pointer');
                    if (!$$.mouseover) {
                        config.data_onmouseover.call($$, closest);
                        $$.mouseover = true;
                    }
                } else if ($$.mouseover) {
                    $$.svg.select('.' + CLASS.eventRect).style('cursor', null);
                    config.data_onmouseout.call($$, closest);
                    $$.mouseover = false;
                }
            })
            .on('click', function () {
                var targetsToShow = $$.filterTargetsToShow($$.data.targets);
                var mouse, closest;

                if ($$.hasArcType(targetsToShow)) { return; }

                mouse = d3.mouse(this);
                closest = $$.findClosestFromTargets(targetsToShow, mouse);

                if (! closest) { return; }

                // select if selection enabled
                if ($$.dist(closest, mouse) < 100 && $$.toggleShape) {
                    $$.main.select('.' + CLASS.circles + $$.getTargetSelectorSuffix(closest.id)).select('.' + CLASS.circle + '-' + closest.index).each(function () {
                        if (config.data_selection_grouped || $$.isWithinShape(this, closest)) {
                            $$.toggleShape(this, closest, closest.index);
                            $$.config.data_onclick.call($$.api, closest, this);
                        }
                    });
                }
            })
            .call(
                d3.behavior.drag().origin(Object)
                    .on('drag', function () { $$.drag(d3.mouse(this)); })
                    .on('dragstart', function () { $$.dragstart(d3.mouse(this)); })
                    .on('dragend', function () { $$.dragend(); })
            );
    };
    c3_chart_internal_fn.dispatchEvent = function (type, index, mouse) {
        var $$ = this,
            selector = '.' + CLASS.eventRect + (!$$.isMultipleX() ? '-' + index : ''),
            eventRect = $$.main.select(selector).node(),
            box = eventRect.getBoundingClientRect(),
            x = box.left + (mouse ? mouse[0] : 0),
            y = box.top + (mouse ? mouse[1] : 0),
            event = document.createEvent("MouseEvents");

        event.initMouseEvent(type, true, true, window, 0, x, y, x, y,
                             false, false, false, false, 0, null);
        eventRect.dispatchEvent(event);
    };

    c3_chart_internal_fn.getCurrentWidth = function () {
        var $$ = this, config = $$.config;
        return config.size_width ? config.size_width : $$.getParentWidth();
    };
    c3_chart_internal_fn.getCurrentHeight = function () {
        var $$ = this, config = $$.config,
            h = config.size_height ? config.size_height : $$.getParentHeight();
        return h > 0 ? h : 320 / ($$.hasType('gauge') ? 2 : 1);
    };
    c3_chart_internal_fn.getCurrentPaddingTop = function () {
        var config = this.config;
        return isValue(config.padding_top) ? config.padding_top : 0;
    };
    c3_chart_internal_fn.getCurrentPaddingBottom = function () {
        var config = this.config;
        return isValue(config.padding_bottom) ? config.padding_bottom : 0;
    };
    c3_chart_internal_fn.getCurrentPaddingLeft = function (withoutRecompute) {
        var $$ = this, config = $$.config;
        if (isValue(config.padding_left)) {
            return config.padding_left;
        } else if (config.axis_rotated) {
            return !config.axis_x_show ? 1 : Math.max(ceil10($$.getAxisWidthByAxisId('x', withoutRecompute)), 40);
        } else {
            return !config.axis_y_show ? 1 : ceil10($$.getAxisWidthByAxisId('y', withoutRecompute));
        }
    };
    c3_chart_internal_fn.getCurrentPaddingRight = function () {
        var $$ = this, config = $$.config,
            defaultPadding = 10, legendWidthOnRight = $$.isLegendRight ? $$.getLegendWidth() + 20 : 0;
        if (isValue(config.padding_right)) {
            return config.padding_right + 1; // 1 is needed not to hide tick line
        } else if (config.axis_rotated) {
            return defaultPadding + legendWidthOnRight;
        } else {
            return (!config.axis_y2_show ? defaultPadding : ceil10($$.getAxisWidthByAxisId('y2'))) + legendWidthOnRight;
        }
    };

    c3_chart_internal_fn.getParentRectValue = function (key) {
        var parent = this.selectChart.node(), v;
        while (parent && parent.tagName !== 'BODY') {
            v = parent.getBoundingClientRect()[key];
            if (v) {
                break;
            }
            parent = parent.parentNode;
        }
        return v;
    };
    c3_chart_internal_fn.getParentWidth = function () {
        return this.getParentRectValue('width');
    };
    c3_chart_internal_fn.getParentHeight = function () {
        var h = this.selectChart.style('height');
        return h.indexOf('px') > 0 ? +h.replace('px', '') : 0;
    };


    c3_chart_internal_fn.getSvgLeft = function (withoutRecompute) {
        var $$ = this, config = $$.config,
            leftAxisClass = config.axis_rotated ? CLASS.axisX : CLASS.axisY,
            leftAxis = $$.main.select('.' + leftAxisClass).node(),
            svgRect = leftAxis ? leftAxis.getBoundingClientRect() : {right: 0},
            chartRect = $$.selectChart.node().getBoundingClientRect(),
            hasArc = $$.hasArcType(),
            svgLeft = svgRect.right - chartRect.left - (hasArc ? 0 : $$.getCurrentPaddingLeft(withoutRecompute));
        return svgLeft > 0 ? svgLeft : 0;
    };


    c3_chart_internal_fn.getAxisWidthByAxisId = function (id, withoutRecompute) {
        var $$ = this, position = $$.getAxisLabelPositionById(id);
        if (withoutRecompute) {
            var box = $$.d3.select('.c3-axis-y').node().getBoundingClientRect();
            return Math.floor(box.left + box.width);
        }
        return $$.getMaxTickWidth(id) + (position.isInner ? 20 : 40);
    };
    c3_chart_internal_fn.getHorizontalAxisHeight = function (axisId) {
        var $$ = this, config = $$.config, h = 30;
        if (axisId === 'x' && !config.axis_x_show) { return 8; }
        if (axisId === 'x' && config.axis_x_height) { return config.axis_x_height; }
        if (axisId === 'y' && !config.axis_y_show) { return config.legend_show && !$$.isLegendRight && !$$.isLegendInset ? 10 : 1; }
        if (axisId === 'y2' && !config.axis_y2_show) { return $$.rotated_padding_top; }
        // Calculate x axis height when tick rotated
        if (axisId === 'x' && !config.axis_rotated && config.axis_x_tick_rotate) {
            h = $$.getMaxTickWidth(axisId) * Math.cos(Math.PI * (90 - config.axis_x_tick_rotate) / 180);
        }
        return h + ($$.getAxisLabelPositionById(axisId).isInner ? 0 : 10) + (axisId === 'y2' ? -10 : 0);
    };

    c3_chart_internal_fn.getEventRectWidth = function () {
        var $$ = this;
        var target = $$.getMaxDataCountTarget($$.data.targets),
            firstData, lastData, base, maxDataCount, ratio, w;
        if (!target) {
            return 0;
        }
        firstData = target.values[0], lastData = target.values[target.values.length - 1];
        base = $$.x(lastData.x) - $$.x(firstData.x);
        if (base === 0) {
            return $$.config.axis_rotated ? $$.height : $$.width;
        }
        maxDataCount = $$.getMaxDataCount();
        ratio = ($$.hasType('bar') ? (maxDataCount - ($$.isCategorized() ? 0.25 : 1)) / maxDataCount : 1);
        w = maxDataCount > 1 ? (base * ratio) / (maxDataCount - 1) : base;
        return w < 1 ? 1 : w;
    };

    c3_chart_internal_fn.getShapeIndices = function (typeFilter) {
        var $$ = this, config = $$.config,
            indices = {}, i = 0, j, k;
        $$.filterTargetsToShow($$.data.targets.filter(typeFilter, $$)).forEach(function (d) {
            for (j = 0; j < config.data_groups.length; j++) {
                if (config.data_groups[j].indexOf(d.id) < 0) { continue; }
                for (k = 0; k < config.data_groups[j].length; k++) {
                    if (config.data_groups[j][k] in indices) {
                        indices[d.id] = indices[config.data_groups[j][k]];
                        break;
                    }
                }
            }
            if (isUndefined(indices[d.id])) { indices[d.id] = i++; }
        });
        indices.__max__ = i - 1;
        return indices;
    };
    c3_chart_internal_fn.getShapeX = function (offset, targetsNum, indices, isSub) {
        var $$ = this, scale = isSub ? $$.subX : $$.x;
        return function (d) {
            var index = d.id in indices ? indices[d.id] : 0;
            return d.x || d.x === 0 ? scale(d.x) - offset * (targetsNum / 2 - index) : 0;
        };
    };
    c3_chart_internal_fn.getShapeY = function (isSub) {
        var $$ = this;
        return function (d) {
            var scale = isSub ? $$.getSubYScale(d.id) : $$.getYScale(d.id);
            return scale(d.value);
        };
    };
    c3_chart_internal_fn.getShapeOffset = function (typeFilter, indices, isSub) {
        var $$ = this,
            targets = $$.orderTargets($$.filterTargetsToShow($$.data.targets.filter(typeFilter, $$))),
            targetIds = targets.map(function (t) { return t.id; });
        return function (d, i) {
            var scale = isSub ? $$.getSubYScale(d.id) : $$.getYScale(d.id),
                y0 = scale(0), offset = y0;
            targets.forEach(function (t) {
                var values = $$.isStepType(d) ? $$.convertValuesToStep(t.values) : t.values;
                if (t.id === d.id || indices[t.id] !== indices[d.id]) { return; }
                if (targetIds.indexOf(t.id) < targetIds.indexOf(d.id)) {
                    if (values[i].value * d.value >= 0) {
                        offset += scale(values[i].value) - y0;
                    }
                }
            });
            return offset;
        };
    };
    c3_chart_internal_fn.isWithinShape = function (that, d) {
        var $$ = this,
            shape = $$.d3.select(that), isWithin;
        if (!$$.isTargetToShow(d.id)) {
            isWithin = false;
        }
        else if (that.nodeName === 'circle') {
            isWithin = $$.isStepType(d) ? $$.isWithinStep(that, $$.getYScale(d.id)(d.value)) : $$.isWithinCircle(that, $$.pointSelectR(d) * 1.5);
        }
        else if (that.nodeName === 'path') {
            isWithin = shape.classed(CLASS.bar) ? $$.isWithinBar(that) : true;
        }
        return isWithin;
    };


    c3_chart_internal_fn.getInterpolate = function (d) {
        var $$ = this;
        return $$.isSplineType(d) ? "cardinal" : $$.isStepType(d) ? $$.config.line_step_type : "linear";
    };

    c3_chart_internal_fn.initLine = function () {
        var $$ = this;
        $$.main.select('.' + CLASS.chart).append("g")
            .attr("class", CLASS.chartLines);
    };
    c3_chart_internal_fn.updateTargetsForLine = function (targets) {
        var $$ = this, config = $$.config,
            mainLineUpdate, mainLineEnter,
            classChartLine = $$.classChartLine.bind($$),
            classLines = $$.classLines.bind($$),
            classAreas = $$.classAreas.bind($$),
            classCircles = $$.classCircles.bind($$),
            classFocus = $$.classFocus.bind($$);
        mainLineUpdate = $$.main.select('.' + CLASS.chartLines).selectAll('.' + CLASS.chartLine)
            .data(targets)
            .attr('class', function (d) { return classChartLine(d) + classFocus(d); });
        mainLineEnter = mainLineUpdate.enter().append('g')
            .attr('class', classChartLine)
            .style('opacity', 0)
            .style("pointer-events", "none");
        // Lines for each data
        mainLineEnter.append('g')
            .attr("class", classLines);
        // Areas
        mainLineEnter.append('g')
            .attr('class', classAreas);
        // Circles for each data point on lines
        mainLineEnter.append('g')
            .attr("class", function (d) { return $$.generateClass(CLASS.selectedCircles, d.id); });
        mainLineEnter.append('g')
            .attr("class", classCircles)
            .style("cursor", function (d) { return config.data_selection_isselectable(d) ? "pointer" : null; });
        // Update date for selected circles
        targets.forEach(function (t) {
            $$.main.selectAll('.' + CLASS.selectedCircles + $$.getTargetSelectorSuffix(t.id)).selectAll('.' + CLASS.selectedCircle).each(function (d) {
                d.value = t.values[d.index].value;
            });
        });
        // MEMO: can not keep same color...
        //mainLineUpdate.exit().remove();
    };
    c3_chart_internal_fn.redrawLine = function (durationForExit) {
        var $$ = this;
        $$.mainLine = $$.main.selectAll('.' + CLASS.lines).selectAll('.' + CLASS.line)
            .data($$.lineData.bind($$));
        $$.mainLine.enter().append('path')
            .attr('class', $$.classLine.bind($$))
            .style("stroke", $$.color);
        $$.mainLine
            .style("opacity", $$.initialOpacity.bind($$))
            .style('shape-rendering', function (d) { return $$.isStepType(d) ? 'crispEdges' : ''; })
            .attr('transform', null);
        $$.mainLine.exit().transition().duration(durationForExit)
            .style('opacity', 0)
            .remove();
    };
    c3_chart_internal_fn.addTransitionForLine = function (transitions, drawLine) {
        var $$ = this;
        transitions.push($$.mainLine.transition()
                         .attr("d", drawLine)
                         .style("stroke", $$.color)
                         .style("opacity", 1));
    };
    c3_chart_internal_fn.generateDrawLine = function (lineIndices, isSub) {
        var $$ = this, config = $$.config,
            line = $$.d3.svg.line(),
            getPoints = $$.generateGetLinePoints(lineIndices, isSub),
            yScaleGetter = isSub ? $$.getSubYScale : $$.getYScale,
            xValue = function (d) { return (isSub ? $$.subxx : $$.xx).call($$, d); },
            yValue = function (d, i) {
                return config.data_groups.length > 0 ? getPoints(d, i)[0][1] : yScaleGetter.call($$, d.id)(d.value);
            };

        line = config.axis_rotated ? line.x(yValue).y(xValue) : line.x(xValue).y(yValue);
        if (!config.line_connectNull) { line = line.defined(function (d) { return d.value != null; }); }
        return function (d) {
            var values = config.line_connectNull ? $$.filterRemoveNull(d.values) : d.values,
                x = isSub ? $$.x : $$.subX, y = yScaleGetter.call($$, d.id), x0 = 0, y0 = 0, path;
            if ($$.isLineType(d)) {
                if (config.data_regions[d.id]) {
                    path = $$.lineWithRegions(values, x, y, config.data_regions[d.id]);
                } else {
                    if ($$.isStepType(d)) { values = $$.convertValuesToStep(values); }
                    path = line.interpolate($$.getInterpolate(d))(values);
                }
            } else {
                if (values[0]) {
                    x0 = x(values[0].x);
                    y0 = y(values[0].value);
                }
                path = config.axis_rotated ? "M " + y0 + " " + x0 : "M " + x0 + " " + y0;
            }
            return path ? path : "M 0 0";
        };
    };
    c3_chart_internal_fn.generateGetLinePoints = function (lineIndices, isSub) { // partial duplication of generateGetBarPoints
        var $$ = this, config = $$.config,
            lineTargetsNum = lineIndices.__max__ + 1,
            x = $$.getShapeX(0, lineTargetsNum, lineIndices, !!isSub),
            y = $$.getShapeY(!!isSub),
            lineOffset = $$.getShapeOffset($$.isLineType, lineIndices, !!isSub),
            yScale = isSub ? $$.getSubYScale : $$.getYScale;
        return function (d, i) {
            var y0 = yScale.call($$, d.id)(0),
                offset = lineOffset(d, i) || y0, // offset is for stacked area chart
                posX = x(d), posY = y(d);
            // fix posY not to overflow opposite quadrant
            if (config.axis_rotated) {
                if ((0 < d.value && posY < y0) || (d.value < 0 && y0 < posY)) { posY = y0; }
            }
            // 1 point that marks the line position
            return [
                [posX, posY - (y0 - offset)],
                [posX, posY - (y0 - offset)], // needed for compatibility
                [posX, posY - (y0 - offset)], // needed for compatibility
                [posX, posY - (y0 - offset)]  // needed for compatibility
            ];
        };
    };


    c3_chart_internal_fn.lineWithRegions = function (d, x, y, _regions) {
        var $$ = this, config = $$.config,
            prev = -1, i, j,
            s = "M", sWithRegion,
            xp, yp, dx, dy, dd, diff, diffx2,
            xValue, yValue,
            regions = [];

        function isWithinRegions(x, regions) {
            var i;
            for (i = 0; i < regions.length; i++) {
                if (regions[i].start < x && x <= regions[i].end) { return true; }
            }
            return false;
        }

        // Check start/end of regions
        if (isDefined(_regions)) {
            for (i = 0; i < _regions.length; i++) {
                regions[i] = {};
                if (isUndefined(_regions[i].start)) {
                    regions[i].start = d[0].x;
                } else {
                    regions[i].start = $$.isTimeSeries() ? $$.parseDate(_regions[i].start) : _regions[i].start;
                }
                if (isUndefined(_regions[i].end)) {
                    regions[i].end = d[d.length - 1].x;
                } else {
                    regions[i].end = $$.isTimeSeries() ? $$.parseDate(_regions[i].end) : _regions[i].end;
                }
            }
        }

        // Set scales
        xValue = config.axis_rotated ? function (d) { return y(d.value); } : function (d) { return x(d.x); };
        yValue = config.axis_rotated ? function (d) { return x(d.x); } : function (d) { return y(d.value); };

        // Define svg generator function for region
        if ($$.isTimeSeries()) {
            sWithRegion = function (d0, d1, j, diff) {
                var x0 = d0.x.getTime(), x_diff = d1.x - d0.x,
                    xv0 = new Date(x0 + x_diff * j),
                    xv1 = new Date(x0 + x_diff * (j + diff));
                return "M" + x(xv0) + " " + y(yp(j)) + " " + x(xv1) + " " + y(yp(j + diff));
            };
        } else {
            sWithRegion = function (d0, d1, j, diff) {
                return "M" + x(xp(j), true) + " " + y(yp(j)) + " " + x(xp(j + diff), true) + " " + y(yp(j + diff));
            };
        }

        // Generate
        for (i = 0; i < d.length; i++) {

            // Draw as normal
            if (isUndefined(regions) || ! isWithinRegions(d[i].x, regions)) {
                s += " " + xValue(d[i]) + " " + yValue(d[i]);
            }
            // Draw with region // TODO: Fix for horizotal charts
            else {
                xp = $$.getScale(d[i - 1].x, d[i].x, $$.isTimeSeries());
                yp = $$.getScale(d[i - 1].value, d[i].value);

                dx = x(d[i].x) - x(d[i - 1].x);
                dy = y(d[i].value) - y(d[i - 1].value);
                dd = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
                diff = 2 / dd;
                diffx2 = diff * 2;

                for (j = diff; j <= 1; j += diffx2) {
                    s += sWithRegion(d[i - 1], d[i], j, diff);
                }
            }
            prev = d[i].x;
        }

        return s;
    };


    c3_chart_internal_fn.redrawArea = function (durationForExit) {
        var $$ = this, d3 = $$.d3;
        $$.mainArea = $$.main.selectAll('.' + CLASS.areas).selectAll('.' + CLASS.area)
            .data($$.lineData.bind($$));
        $$.mainArea.enter().append('path')
            .attr("class", $$.classArea.bind($$))
            .style("fill", $$.color)
            .style("opacity", function () { $$.orgAreaOpacity = +d3.select(this).style('opacity'); return 0; });
        $$.mainArea
            .style("opacity", $$.orgAreaOpacity);
        $$.mainArea.exit().transition().duration(durationForExit)
            .style('opacity', 0)
            .remove();
    };
    c3_chart_internal_fn.addTransitionForArea = function (transitions, drawArea) {
        var $$ = this;
        transitions.push($$.mainArea.transition()
                         .attr("d", drawArea)
                         .style("fill", $$.color)
                         .style("opacity", $$.orgAreaOpacity));
    };
    c3_chart_internal_fn.generateDrawArea = function (areaIndices, isSub) {
        var $$ = this, config = $$.config, area = $$.d3.svg.area(),
            getPoints = $$.generateGetAreaPoints(areaIndices, isSub),
            yScaleGetter = isSub ? $$.getSubYScale : $$.getYScale,
            xValue = function (d) { return (isSub ? $$.subxx : $$.xx).call($$, d); },
            value0 = function (d, i) {
                return config.data_groups.length > 0 ? getPoints(d, i)[0][1] : yScaleGetter.call($$, d.id)(0);
            },
            value1 = function (d, i) {
                return config.data_groups.length > 0 ? getPoints(d, i)[1][1] : yScaleGetter.call($$, d.id)(d.value);
            };

        area = config.axis_rotated ? area.x0(value0).x1(value1).y(xValue) : area.x(xValue).y0(value0).y1(value1);
        if (!config.line_connectNull) {
            area = area.defined(function (d) { return d.value !== null; });
        }

        return function (d) {
            var values = config.line_connectNull ? $$.filterRemoveNull(d.values) : d.values,
                x0 = 0, y0 = 0, path;
            if ($$.isAreaType(d)) {
                if ($$.isStepType(d)) { values = $$.convertValuesToStep(values); }
                path = area.interpolate($$.getInterpolate(d))(values);
            } else {
                if (values[0]) {
                    x0 = $$.x(values[0].x);
                    y0 = $$.getYScale(d.id)(values[0].value);
                }
                path = config.axis_rotated ? "M " + y0 + " " + x0 : "M " + x0 + " " + y0;
            }
            return path ? path : "M 0 0";
        };
    };

    c3_chart_internal_fn.generateGetAreaPoints = function (areaIndices, isSub) { // partial duplication of generateGetBarPoints
        var $$ = this, config = $$.config,
            areaTargetsNum = areaIndices.__max__ + 1,
            x = $$.getShapeX(0, areaTargetsNum, areaIndices, !!isSub),
            y = $$.getShapeY(!!isSub),
            areaOffset = $$.getShapeOffset($$.isAreaType, areaIndices, !!isSub),
            yScale = isSub ? $$.getSubYScale : $$.getYScale;
        return function (d, i) {
            var y0 = yScale.call($$, d.id)(0),
                offset = areaOffset(d, i) || y0, // offset is for stacked area chart
                posX = x(d), posY = y(d);
            // fix posY not to overflow opposite quadrant
            if (config.axis_rotated) {
                if ((0 < d.value && posY < y0) || (d.value < 0 && y0 < posY)) { posY = y0; }
            }
            // 1 point that marks the area position
            return [
                [posX, offset],
                [posX, posY - (y0 - offset)],
                [posX, posY - (y0 - offset)], // needed for compatibility
                [posX, offset] // needed for compatibility
            ];
        };
    };


    c3_chart_internal_fn.redrawCircle = function () {
        var $$ = this;
        $$.mainCircle = $$.main.selectAll('.' + CLASS.circles).selectAll('.' + CLASS.circle)
            .data($$.lineOrScatterData.bind($$));
        $$.mainCircle.enter().append("circle")
            .attr("class", $$.classCircle.bind($$))
            .attr("r", $$.pointR.bind($$))
            .style("fill", $$.color);
        $$.mainCircle
            .style("opacity", $$.initialOpacity.bind($$));
        $$.mainCircle.exit().remove();
    };
    c3_chart_internal_fn.addTransitionForCircle = function (transitions, cx, cy) {
        var $$ = this;
        transitions.push($$.mainCircle.transition()
                         .style('opacity', $$.opacityForCircle.bind($$))
                         .style("fill", $$.color)
                         .attr("cx", cx)
                         .attr("cy", cy));
        transitions.push($$.main.selectAll('.' + CLASS.selectedCircle).transition()
                         .attr("cx", cx)
                         .attr("cy", cy));
    };
    c3_chart_internal_fn.circleX = function (d) {
        return d.x || d.x === 0 ? this.x(d.x) : null;
    };
    c3_chart_internal_fn.circleY = function (d, i) {
        var $$ = this,
            lineIndices = $$.getShapeIndices($$.isLineType), getPoints = $$.generateGetLinePoints(lineIndices);
        return $$.config.data_groups.length > 0 ? getPoints(d, i)[0][1] : $$.getYScale(d.id)(d.value);
    };
    c3_chart_internal_fn.getCircles = function (i, id) {
        var $$ = this;
        return (id ? $$.main.selectAll('.' + CLASS.circles + $$.getTargetSelectorSuffix(id)) : $$.main).selectAll('.' + CLASS.circle + (isValue(i) ? '-' + i : ''));
    };
    c3_chart_internal_fn.expandCircles = function (i, id, reset) {
        var $$ = this,
            r = $$.pointExpandedR.bind($$);
        if (reset) { $$.unexpandCircles(); }
        $$.getCircles(i, id)
            .classed(CLASS.EXPANDED, true)
            .attr('r', r);
    };
    c3_chart_internal_fn.unexpandCircles = function (i) {
        var $$ = this,
            r = $$.pointR.bind($$);
        $$.getCircles(i)
            .filter(function () { return $$.d3.select(this).classed(CLASS.EXPANDED); })
            .classed(CLASS.EXPANDED, false)
            .attr('r', r);
    };
    c3_chart_internal_fn.pointR = function (d) {
        var $$ = this, config = $$.config;
        return $$.isStepType(d) ? 0 : (isFunction(config.point_r) ? config.point_r(d) : config.point_r);
    };
    c3_chart_internal_fn.pointExpandedR = function (d) {
        var $$ = this, config = $$.config;
        return config.point_focus_expand_enabled ? (config.point_focus_expand_r ? config.point_focus_expand_r : $$.pointR(d) * 1.75) : $$.pointR(d);
    };
    c3_chart_internal_fn.pointSelectR = function (d) {
        var $$ = this, config = $$.config;
        return config.point_select_r ? config.point_select_r : $$.pointR(d) * 4;
    };
    c3_chart_internal_fn.isWithinCircle = function (that, r) {
        var d3 = this.d3,
            mouse = d3.mouse(that), d3_this = d3.select(that),
            cx = +d3_this.attr("cx"), cy = +d3_this.attr("cy");
        return Math.sqrt(Math.pow(cx - mouse[0], 2) + Math.pow(cy - mouse[1], 2)) < r;
    };
    c3_chart_internal_fn.isWithinStep = function (that, y) {
        return Math.abs(y - this.d3.mouse(that)[1]) < 30;
    };

    c3_chart_internal_fn.initBar = function () {
        var $$ = this;
        $$.main.select('.' + CLASS.chart).append("g")
            .attr("class", CLASS.chartBars);
    };
    c3_chart_internal_fn.updateTargetsForBar = function (targets) {
        var $$ = this, config = $$.config,
            mainBarUpdate, mainBarEnter,
            classChartBar = $$.classChartBar.bind($$),
            classBars = $$.classBars.bind($$),
            classFocus = $$.classFocus.bind($$);
        mainBarUpdate = $$.main.select('.' + CLASS.chartBars).selectAll('.' + CLASS.chartBar)
            .data(targets)
            .attr('class', function (d) { return classChartBar(d) + classFocus(d); });
        mainBarEnter = mainBarUpdate.enter().append('g')
            .attr('class', classChartBar)
            .style('opacity', 0)
            .style("pointer-events", "none");
        // Bars for each data
        mainBarEnter.append('g')
            .attr("class", classBars)
            .style("cursor", function (d) { return config.data_selection_isselectable(d) ? "pointer" : null; });

    };
    c3_chart_internal_fn.redrawBar = function (durationForExit) {
        var $$ = this,
            barData = $$.barData.bind($$),
            classBar = $$.classBar.bind($$),
            initialOpacity = $$.initialOpacity.bind($$),
            color = function (d) { return $$.color(d.id); };
        $$.mainBar = $$.main.selectAll('.' + CLASS.bars).selectAll('.' + CLASS.bar)
            .data(barData);
        $$.mainBar.enter().append('path')
            .attr("class", classBar)
            .style("stroke", color)
            .style("fill", color);
        $$.mainBar
            .style("opacity", initialOpacity);
        $$.mainBar.exit().transition().duration(durationForExit)
            .style('opacity', 0)
            .remove();
    };
    c3_chart_internal_fn.addTransitionForBar = function (transitions, drawBar) {
        var $$ = this;
        transitions.push($$.mainBar.transition()
                         .attr('d', drawBar)
                         .style("fill", $$.color)
                         .style("opacity", 1));
    };
    c3_chart_internal_fn.getBarW = function (axis, barTargetsNum) {
        var $$ = this, config = $$.config,
            w = typeof config.bar_width === 'number' ? config.bar_width : barTargetsNum ? (axis.tickOffset() * 2 * config.bar_width_ratio) / barTargetsNum : 0;
        return config.bar_width_max && w > config.bar_width_max ? config.bar_width_max : w;
    };
    c3_chart_internal_fn.getBars = function (i) {
        var $$ = this;
        return $$.main.selectAll('.' + CLASS.bar + (isValue(i) ? '-' + i : ''));
    };
    c3_chart_internal_fn.expandBars = function (i, id, reset) {
        var $$ = this;
        if (reset) { $$.unexpandBars(); }
        $$.getBars(i).classed(CLASS.EXPANDED, true);
    };
    c3_chart_internal_fn.unexpandBars = function (i) {
        var $$ = this;
        $$.getBars(i).classed(CLASS.EXPANDED, false);
    };
    c3_chart_internal_fn.generateDrawBar = function (barIndices, isSub) {
        var $$ = this, config = $$.config,
            getPoints = $$.generateGetBarPoints(barIndices, isSub);
        return function (d, i) {
            // 4 points that make a bar
            var points = getPoints(d, i);

            // switch points if axis is rotated, not applicable for sub chart
            var indexX = config.axis_rotated ? 1 : 0;
            var indexY = config.axis_rotated ? 0 : 1;

            var path = 'M ' + points[0][indexX] + ',' + points[0][indexY] + ' ' +
                    'L' + points[1][indexX] + ',' + points[1][indexY] + ' ' +
                    'L' + points[2][indexX] + ',' + points[2][indexY] + ' ' +
                    'L' + points[3][indexX] + ',' + points[3][indexY] + ' ' +
                    'z';

            return path;
        };
    };
    c3_chart_internal_fn.generateGetBarPoints = function (barIndices, isSub) {
        var $$ = this,
            axis = isSub ? $$.subXAxis : $$.xAxis,
            barTargetsNum = barIndices.__max__ + 1,
            barW = $$.getBarW(axis, barTargetsNum),
            barX = $$.getShapeX(barW, barTargetsNum, barIndices, !!isSub),
            barY = $$.getShapeY(!!isSub),
            barOffset = $$.getShapeOffset($$.isBarType, barIndices, !!isSub),
            yScale = isSub ? $$.getSubYScale : $$.getYScale;
        return function (d, i) {
            var y0 = yScale.call($$, d.id)(0),
                offset = barOffset(d, i) || y0, // offset is for stacked bar chart
                posX = barX(d), posY = barY(d);
            // fix posY not to overflow opposite quadrant
            if ($$.config.axis_rotated) {
                if ((0 < d.value && posY < y0) || (d.value < 0 && y0 < posY)) { posY = y0; }
            }
            // 4 points that make a bar
            return [
                [posX, offset],
                [posX, posY - (y0 - offset)],
                [posX + barW, posY - (y0 - offset)],
                [posX + barW, offset]
            ];
        };
    };
    c3_chart_internal_fn.isWithinBar = function (that) {
        var d3 = this.d3,
            mouse = d3.mouse(that), box = that.getBoundingClientRect(),
            seg0 = that.pathSegList.getItem(0), seg1 = that.pathSegList.getItem(1),
            x = Math.min(seg0.x, seg1.x), y = Math.min(seg0.y, seg1.y),
            w = box.width, h = box.height, offset = 2,
            sx = x - offset, ex = x + w + offset, sy = y + h + offset, ey = y - offset;
        return sx < mouse[0] && mouse[0] < ex && ey < mouse[1] && mouse[1] < sy;
    };

    c3_chart_internal_fn.initText = function () {
        var $$ = this;
        $$.main.select('.' + CLASS.chart).append("g")
            .attr("class", CLASS.chartTexts);
        $$.mainText = $$.d3.selectAll([]);
    };
    c3_chart_internal_fn.updateTargetsForText = function (targets) {
        var $$ = this, mainTextUpdate, mainTextEnter,
            classChartText = $$.classChartText.bind($$),
            classTexts = $$.classTexts.bind($$),
            classFocus = $$.classFocus.bind($$);
        mainTextUpdate = $$.main.select('.' + CLASS.chartTexts).selectAll('.' + CLASS.chartText)
            .data(targets)
            .attr('class', function (d) { return classChartText(d) + classFocus(d); });
        mainTextEnter = mainTextUpdate.enter().append('g')
            .attr('class', classChartText)
            .style('opacity', 0)
            .style("pointer-events", "none");
        mainTextEnter.append('g')
            .attr('class', classTexts);
    };
    c3_chart_internal_fn.redrawText = function (durationForExit) {
        var $$ = this, config = $$.config,
            barOrLineData = $$.barOrLineData.bind($$),
            classText = $$.classText.bind($$);
        $$.mainText = $$.main.selectAll('.' + CLASS.texts).selectAll('.' + CLASS.text)
            .data(barOrLineData);
        $$.mainText.enter().append('text')
            .attr("class", classText)
            .attr('text-anchor', function (d) { return config.axis_rotated ? (d.value < 0 ? 'end' : 'start') : 'middle'; })
            .style("stroke", 'none')
            .style("fill", function (d) { return $$.color(d); })
            .style("fill-opacity", 0);
        $$.mainText
            .text(function (d) { return $$.formatByAxisId($$.getAxisId(d.id))(d.value, d.id); });
        $$.mainText.exit()
            .transition().duration(durationForExit)
            .style('fill-opacity', 0)
            .remove();
    };
    c3_chart_internal_fn.addTransitionForText = function (transitions, xForText, yForText, forFlow) {
        var $$ = this,
            opacityForText = forFlow ? 0 : $$.opacityForText.bind($$);
        transitions.push($$.mainText.transition()
                         .attr('x', xForText)
                         .attr('y', yForText)
                         .style("fill", $$.color)
                         .style("fill-opacity", opacityForText));
    };
    c3_chart_internal_fn.getTextRect = function (text, cls) {
        var body = this.d3.select('body').classed('c3', true),
            svg = body.append("svg").style('visibility', 'hidden'), rect;
        svg.selectAll('.dummy')
            .data([text])
          .enter().append('text')
            .classed(cls ? cls : "", true)
            .text(text)
          .each(function () { rect = this.getBoundingClientRect(); });
        svg.remove();
        body.classed('c3', false);
        return rect;
    };
    c3_chart_internal_fn.generateXYForText = function (areaIndices, barIndices, lineIndices, forX) {
        var $$ = this,
            getAreaPoints = $$.generateGetAreaPoints(barIndices, false),
            getBarPoints = $$.generateGetBarPoints(barIndices, false),
            getLinePoints = $$.generateGetLinePoints(lineIndices, false),
            getter = forX ? $$.getXForText : $$.getYForText;
        return function (d, i) {
            var getPoints = $$.isAreaType(d) ? getAreaPoints : $$.isBarType(d) ? getBarPoints : getLinePoints;
            return getter.call($$, getPoints(d, i), d, this);
        };
    };
    c3_chart_internal_fn.getXForText = function (points, d, textElement) {
        var $$ = this,
            box = textElement.getBoundingClientRect(), xPos, padding;
        if ($$.config.axis_rotated) {
            padding = $$.isBarType(d) ? 4 : 6;
            xPos = points[2][1] + padding * (d.value < 0 ? -1 : 1);
        } else {
            xPos = $$.hasType('bar') ? (points[2][0] + points[0][0]) / 2 : points[0][0];
        }
        return d.value !== null ? xPos : xPos > $$.width ? $$.width - box.width : xPos;
    };
    c3_chart_internal_fn.getYForText = function (points, d, textElement) {
        var $$ = this,
            box = textElement.getBoundingClientRect(), yPos;
        if ($$.config.axis_rotated) {
            yPos = (points[0][0] + points[2][0] + box.height * 0.6) / 2;
        } else {
            yPos = points[2][1] + (d.value < 0 ? box.height : $$.isBarType(d) ? -3 : -6);
        }
        return d.value !== null ? yPos : yPos < box.height ? box.height : yPos;
    };

    c3_chart_internal_fn.setTargetType = function (targetIds, type) {
        var $$ = this, config = $$.config;
        $$.mapToTargetIds(targetIds).forEach(function (id) {
            $$.withoutFadeIn[id] = (type === config.data_types[id]);
            config.data_types[id] = type;
        });
        if (!targetIds) {
            config.data_type = type;
        }
    };
    c3_chart_internal_fn.hasType = function (type, targets) {
        var $$ = this, types = $$.config.data_types, has = false;
        targets = targets || $$.data.targets;
        if (targets && targets.length) {
            targets.forEach(function (target) {
                var t = types[target.id];
                if ((t && t.indexOf(type) >= 0) || (!t && type === 'line')) {
                    has = true;
                }
            });
        } else {
            Object.keys(types).forEach(function (id) {
                if (types[id] === type) { has = true; }
            });
        }
        return has;
    };
    c3_chart_internal_fn.hasArcType = function (targets) {
        return this.hasType('pie', targets) || this.hasType('donut', targets) || this.hasType('gauge', targets);
    };
    c3_chart_internal_fn.isLineType = function (d) {
        var config = this.config, id = isString(d) ? d : d.id;
        return !config.data_types[id] || ['line', 'spline', 'area', 'area-spline', 'step', 'area-step'].indexOf(config.data_types[id]) >= 0;
    };
    c3_chart_internal_fn.isStepType = function (d) {
        var id = isString(d) ? d : d.id;
        return ['step', 'area-step'].indexOf(this.config.data_types[id]) >= 0;
    };
    c3_chart_internal_fn.isSplineType = function (d) {
        var id = isString(d) ? d : d.id;
        return ['spline', 'area-spline'].indexOf(this.config.data_types[id]) >= 0;
    };
    c3_chart_internal_fn.isAreaType = function (d) {
        var id = isString(d) ? d : d.id;
        return ['area', 'area-spline', 'area-step'].indexOf(this.config.data_types[id]) >= 0;
    };
    c3_chart_internal_fn.isBarType = function (d) {
        var id = isString(d) ? d : d.id;
        return this.config.data_types[id] === 'bar';
    };
    c3_chart_internal_fn.isScatterType = function (d) {
        var id = isString(d) ? d : d.id;
        return this.config.data_types[id] === 'scatter';
    };
    c3_chart_internal_fn.isPieType = function (d) {
        var id = isString(d) ? d : d.id;
        return this.config.data_types[id] === 'pie';
    };
    c3_chart_internal_fn.isGaugeType = function (d) {
        var id = isString(d) ? d : d.id;
        return this.config.data_types[id] === 'gauge';
    };
    c3_chart_internal_fn.isDonutType = function (d) {
        var id = isString(d) ? d : d.id;
        return this.config.data_types[id] === 'donut';
    };
    c3_chart_internal_fn.isArcType = function (d) {
        return this.isPieType(d) || this.isDonutType(d) || this.isGaugeType(d);
    };
    c3_chart_internal_fn.lineData = function (d) {
        return this.isLineType(d) ? [d] : [];
    };
    c3_chart_internal_fn.arcData = function (d) {
        return this.isArcType(d.data) ? [d] : [];
    };
    /* not used
     function scatterData(d) {
     return isScatterType(d) ? d.values : [];
     }
     */
    c3_chart_internal_fn.barData = function (d) {
        return this.isBarType(d) ? d.values : [];
    };
    c3_chart_internal_fn.lineOrScatterData = function (d) {
        return this.isLineType(d) || this.isScatterType(d) ? d.values : [];
    };
    c3_chart_internal_fn.barOrLineData = function (d) {
        return this.isBarType(d) || this.isLineType(d) ? d.values : [];
    };

    c3_chart_internal_fn.initGrid = function () {
        var $$ = this, config = $$.config, d3 = $$.d3;
        $$.grid = $$.main.append('g')
            .attr("clip-path", $$.clipPathForGrid)
            .attr('class', CLASS.grid);
        if (config.grid_x_show) {
            $$.grid.append("g").attr("class", CLASS.xgrids);
        }
        if (config.grid_y_show) {
            $$.grid.append('g').attr('class', CLASS.ygrids);
        }
        if (config.grid_focus_show) {
            $$.grid.append('g')
                .attr("class", CLASS.xgridFocus)
                .append('line')
                .attr('class', CLASS.xgridFocus);
        }
        $$.xgrid = d3.selectAll([]);
        if (!config.grid_lines_front) { $$.initGridLines(); }
    };
    c3_chart_internal_fn.initGridLines = function () {
        var $$ = this, d3 = $$.d3;
        $$.gridLines = $$.main.append('g')
            .attr("clip-path", $$.clipPathForGrid)
            .attr('class', CLASS.grid + ' ' + CLASS.gridLines);
        $$.gridLines.append('g').attr("class", CLASS.xgridLines);
        $$.gridLines.append('g').attr('class', CLASS.ygridLines);
        $$.xgridLines = d3.selectAll([]);
    };
    c3_chart_internal_fn.updateXGrid = function (withoutUpdate) {
        var $$ = this, config = $$.config, d3 = $$.d3,
            xgridData = $$.generateGridData(config.grid_x_type, $$.x),
            tickOffset = $$.isCategorized() ? $$.xAxis.tickOffset() : 0;

        $$.xgridAttr = config.axis_rotated ? {
            'x1': 0,
            'x2': $$.width,
            'y1': function (d) { return $$.x(d) - tickOffset; },
            'y2': function (d) { return $$.x(d) - tickOffset; }
        } : {
            'x1': function (d) { return $$.x(d) + tickOffset; },
            'x2': function (d) { return $$.x(d) + tickOffset; },
            'y1': 0,
            'y2': $$.height
        };

        $$.xgrid = $$.main.select('.' + CLASS.xgrids).selectAll('.' + CLASS.xgrid)
            .data(xgridData);
        $$.xgrid.enter().append('line').attr("class", CLASS.xgrid);
        if (!withoutUpdate) {
            $$.xgrid.attr($$.xgridAttr)
                .style("opacity", function () { return +d3.select(this).attr(config.axis_rotated ? 'y1' : 'x1') === (config.axis_rotated ? $$.height : 0) ? 0 : 1; });
        }
        $$.xgrid.exit().remove();
    };

    c3_chart_internal_fn.updateYGrid = function () {
        var $$ = this, config = $$.config;
        $$.ygrid = $$.main.select('.' + CLASS.ygrids).selectAll('.' + CLASS.ygrid)
            .data($$.y.ticks(config.grid_y_ticks));
        $$.ygrid.enter().append('line')
            .attr('class', CLASS.ygrid);
        $$.ygrid.attr("x1", config.axis_rotated ? $$.y : 0)
            .attr("x2", config.axis_rotated ? $$.y : $$.width)
            .attr("y1", config.axis_rotated ? 0 : $$.y)
            .attr("y2", config.axis_rotated ? $$.height : $$.y);
        $$.ygrid.exit().remove();
        $$.smoothLines($$.ygrid, 'grid');
    };


    c3_chart_internal_fn.redrawGrid = function (duration, withY) {
        var $$ = this, main = $$.main, config = $$.config,
            xgridLine, ygridLine, yv;

        // hide if arc type
        $$.grid.style('visibility', $$.hasArcType() ? 'hidden' : 'visible');

        main.select('line.' + CLASS.xgridFocus).style("visibility", "hidden");
        if (config.grid_x_show) {
            $$.updateXGrid();
        }
        $$.xgridLines = main.select('.' + CLASS.xgridLines).selectAll('.' + CLASS.xgridLine)
            .data(config.grid_x_lines);
        // enter
        xgridLine = $$.xgridLines.enter().append('g')
            .attr("class", function (d) { return CLASS.xgridLine + (d['class'] ? ' ' + d['class'] : ''); });
        xgridLine.append('line')
            .style("opacity", 0);
        xgridLine.append('text')
            .attr("text-anchor", "end")
            .attr("transform", config.axis_rotated ? "" : "rotate(-90)")
            .attr('dx', config.axis_rotated ? 0 : -$$.margin.top)
            .attr('dy', -5)
            .style("opacity", 0);
        // udpate
        // done in d3.transition() of the end of this function
        // exit
        $$.xgridLines.exit().transition().duration(duration)
            .style("opacity", 0)
            .remove();

        // Y-Grid
        if (withY && config.grid_y_show) {
            $$.updateYGrid();
        }
        if (withY) {
            $$.ygridLines = main.select('.' + CLASS.ygridLines).selectAll('.' + CLASS.ygridLine)
                .data(config.grid_y_lines);
            // enter
            ygridLine = $$.ygridLines.enter().append('g')
                .attr("class", function (d) { return CLASS.ygridLine + (d['class'] ? ' ' + d['class'] : ''); });
            ygridLine.append('line')
                .style("opacity", 0);
            ygridLine.append('text')
                .attr("text-anchor", "end")
                .attr("transform", config.axis_rotated ? "rotate(-90)" : "")
                .attr('dx', config.axis_rotated ? 0 : -$$.margin.top)
                .attr('dy', -5)
                .style("opacity", 0);
            // update
            yv = $$.yv.bind($$);
            $$.ygridLines.select('line')
              .transition().duration(duration)
                .attr("x1", config.axis_rotated ? yv : 0)
                .attr("x2", config.axis_rotated ? yv : $$.width)
                .attr("y1", config.axis_rotated ? 0 : yv)
                .attr("y2", config.axis_rotated ? $$.height : yv)
                .style("opacity", 1);
            $$.ygridLines.select('text')
              .transition().duration(duration)
                .attr("x", config.axis_rotated ? 0 : $$.width)
                .attr("y", yv)
                .text(function (d) { return d.text; })
                .style("opacity", 1);
            // exit
            $$.ygridLines.exit().transition().duration(duration)
                .style("opacity", 0)
                .remove();
        }
    };
    c3_chart_internal_fn.addTransitionForGrid = function (transitions) {
        var $$ = this, config = $$.config, xv = $$.xv.bind($$);
        transitions.push($$.xgridLines.select('line').transition()
                         .attr("x1", config.axis_rotated ? 0 : xv)
                         .attr("x2", config.axis_rotated ? $$.width : xv)
                         .attr("y1", config.axis_rotated ? xv : $$.margin.top)
                         .attr("y2", config.axis_rotated ? xv : $$.height)
                         .style("opacity", 1));
        transitions.push($$.xgridLines.select('text').transition()
                         .attr("x", config.axis_rotated ? $$.width : 0)
                         .attr("y", xv)
                         .text(function (d) { return d.text; })
                         .style("opacity", 1));
    };
    c3_chart_internal_fn.showXGridFocus = function (selectedData) {
        var $$ = this, config = $$.config,
            dataToShow = selectedData.filter(function (d) { return d && isValue(d.value); }),
            focusEl = $$.main.selectAll('line.' + CLASS.xgridFocus),
            xx = $$.xx.bind($$);
        if (! config.tooltip_show) { return; }
        // Hide when scatter plot exists
        if ($$.hasType('scatter') || $$.hasArcType()) { return; }
        focusEl
            .style("visibility", "visible")
            .data([dataToShow[0]])
            .attr(config.axis_rotated ? 'y1' : 'x1', xx)
            .attr(config.axis_rotated ? 'y2' : 'x2', xx);
        $$.smoothLines(focusEl, 'grid');
    };
    c3_chart_internal_fn.hideXGridFocus = function () {
        this.main.select('line.' + CLASS.xgridFocus).style("visibility", "hidden");
    };
    c3_chart_internal_fn.updateXgridFocus = function () {
        var $$ = this, config = $$.config;
        $$.main.select('line.' + CLASS.xgridFocus)
            .attr("x1", config.axis_rotated ? 0 : -10)
            .attr("x2", config.axis_rotated ? $$.width : -10)
            .attr("y1", config.axis_rotated ? -10 : 0)
            .attr("y2", config.axis_rotated ? -10 : $$.height);
    };
    c3_chart_internal_fn.generateGridData = function (type, scale) {
        var $$ = this,
            gridData = [], xDomain, firstYear, lastYear, i,
            tickNum = $$.main.select("." + CLASS.axisX).selectAll('.tick').size();
        if (type === 'year') {
            xDomain = $$.getXDomain();
            firstYear = xDomain[0].getFullYear();
            lastYear = xDomain[1].getFullYear();
            for (i = firstYear; i <= lastYear; i++) {
                gridData.push(new Date(i + '-01-01 00:00:00'));
            }
        } else {
            gridData = scale.ticks(10);
            if (gridData.length > tickNum) { // use only int
                gridData = gridData.filter(function (d) { return ("" + d).indexOf('.') < 0; });
            }
        }
        return gridData;
    };
    c3_chart_internal_fn.getGridFilterToRemove = function (params) {
        return params ? function (line) {
            var found = false;
            [].concat(params).forEach(function (param) {
                if ((('value' in param && line.value === params.value) || ('class' in param && line['class'] === params['class']))) {
                    found = true;
                }
            });
            return found;
        } : function () { return true; };
    };
    c3_chart_internal_fn.removeGridLines = function (params, forX) {
        var $$ = this, config = $$.config,
            toRemove = $$.getGridFilterToRemove(params),
            toShow = function (line) { return !toRemove(line); },
            classLines = forX ? CLASS.xgridLines : CLASS.ygridLines,
            classLine = forX ? CLASS.xgridLine : CLASS.ygridLine;
        $$.main.select('.' + classLines).selectAll('.' + classLine).filter(toRemove)
            .transition().duration(config.transition_duration)
            .style('opacity', 0).remove();
        if (forX) {
            config.grid_x_lines = config.grid_x_lines.filter(toShow);
        } else {
            config.grid_y_lines = config.grid_y_lines.filter(toShow);
        }
    };

    c3_chart_internal_fn.initTooltip = function () {
        var $$ = this, config = $$.config, i;
        $$.tooltip = $$.selectChart
            .style("position", "relative")
          .append("div")
            .attr('class', CLASS.tooltipContainer)
            .style("position", "absolute")
            .style("pointer-events", "none")
            .style("display", "none");
        // Show tooltip if needed
        if (config.tooltip_init_show) {
            if ($$.isTimeSeries() && isString(config.tooltip_init_x)) {
                config.tooltip_init_x = $$.parseDate(config.tooltip_init_x);
                for (i = 0; i < $$.data.targets[0].values.length; i++) {
                    if (($$.data.targets[0].values[i].x - config.tooltip_init_x) === 0) { break; }
                }
                config.tooltip_init_x = i;
            }
            $$.tooltip.html(config.tooltip_contents.call($$, $$.data.targets.map(function (d) {
                return $$.addName(d.values[config.tooltip_init_x]);
            }), $$.getXAxisTickFormat(), $$.getYFormat($$.hasArcType()), $$.color));
            $$.tooltip.style("top", config.tooltip_init_position.top)
                .style("left", config.tooltip_init_position.left)
                .style("display", "block");
        }
    };
    c3_chart_internal_fn.getTooltipContent = function (d, defaultTitleFormat, defaultValueFormat, color) {
        var $$ = this, config = $$.config,
            titleFormat = config.tooltip_format_title || defaultTitleFormat,
            nameFormat = config.tooltip_format_name || function (name) { return name; },
            valueFormat = config.tooltip_format_value || defaultValueFormat,
            text, i, title, value, name, bgcolor;
        for (i = 0; i < d.length; i++) {
            if (! (d[i] && (d[i].value || d[i].value === 0))) { continue; }

            if (! text) {
                title = titleFormat ? titleFormat(d[i].x) : d[i].x;
                text = "<table class='" + CLASS.tooltip + "'>" + (title || title === 0 ? "<tr><th colspan='2'>" + title + "</th></tr>" : "");
            }

            name = nameFormat(d[i].name, d[i].ratio, d[i].id, d[i].index);
            value = valueFormat(d[i].value, d[i].ratio, d[i].id, d[i].index);
            bgcolor = $$.levelColor ? $$.levelColor(d[i].value) : color(d[i].id);

            text += "<tr class='" + CLASS.tooltipName + "-" + d[i].id + "'>";
            text += "<td class='name'><span style='background-color:" + bgcolor + "'></span>" + name + "</td>";
            text += "<td class='value'>" + value + "</td>";
            text += "</tr>";
        }
        return text + "</table>";
    };
    c3_chart_internal_fn.showTooltip = function (selectedData, mouse) {
        var $$ = this, config = $$.config;
        var tWidth, tHeight, svgLeft, tooltipLeft, tooltipRight, tooltipTop, chartRight;
        var forArc = $$.hasArcType(),
            dataToShow = selectedData.filter(function (d) { return d && isValue(d.value); });
        if (dataToShow.length === 0 || !config.tooltip_show) {
            return;
        }
        $$.tooltip.html(config.tooltip_contents.call($$, selectedData, $$.getXAxisTickFormat(), $$.getYFormat(forArc), $$.color)).style("display", "block");

        // Get tooltip dimensions
        tWidth = $$.tooltip.property('offsetWidth');
        tHeight = $$.tooltip.property('offsetHeight');
        // Determin tooltip position
        if (forArc) {
            tooltipLeft = ($$.width / 2) + mouse[0];
            tooltipTop = ($$.height / 2) + mouse[1] + 20;
        } else {
            svgLeft = $$.getSvgLeft(false);
            if (config.axis_rotated) {
                tooltipLeft = svgLeft + mouse[0] + 100;
                tooltipRight = tooltipLeft + tWidth;
                chartRight = $$.getCurrentWidth() - $$.getCurrentPaddingRight();
                tooltipTop = $$.x(dataToShow[0].x) + 20;
            } else {
                tooltipLeft = svgLeft + $$.getCurrentPaddingLeft(false) + $$.x(dataToShow[0].x) + 20;
                tooltipRight = tooltipLeft + tWidth;
                chartRight = svgLeft + $$.getCurrentWidth() - $$.getCurrentPaddingRight();
                tooltipTop = mouse[1] + 15;
            }

            if (tooltipRight > chartRight) {
                tooltipLeft -= tooltipRight - chartRight;
            }
            if (tooltipTop + tHeight > $$.getCurrentHeight() && tooltipTop > tHeight + 30) {
                tooltipTop -= tHeight + 30;
            }
        }
        // Set tooltip
        $$.tooltip
            .style("top", tooltipTop + "px")
            .style("left", tooltipLeft + 'px');
    };
    c3_chart_internal_fn.hideTooltip = function () {
        this.tooltip.style("display", "none");
    };

    c3_chart_internal_fn.initLegend = function () {
        var $$ = this;
        $$.legend = $$.svg.append("g").attr("transform", $$.getTranslate('legend'));
        if (!$$.config.legend_show) {
            $$.legend.style('visibility', 'hidden');
            $$.hiddenLegendIds = $$.mapToIds($$.data.targets);
        }
        // MEMO: call here to update legend box and tranlate for all
        // MEMO: translate will be upated by this, so transform not needed in updateLegend()
        $$.updateLegend($$.mapToIds($$.data.targets), {withTransform: false, withTransitionForTransform: false, withTransition: false});
    };
    c3_chart_internal_fn.updateSizeForLegend = function (legendHeight, legendWidth) {
        var $$ = this, config = $$.config, insetLegendPosition = {
            top: $$.isLegendTop ? $$.getCurrentPaddingTop() + config.legend_inset_y + 5.5 : $$.currentHeight - legendHeight - $$.getCurrentPaddingBottom() - config.legend_inset_y,
            left: $$.isLegendLeft ? $$.getCurrentPaddingLeft() + config.legend_inset_x + 0.5 : $$.currentWidth - legendWidth - $$.getCurrentPaddingRight() - config.legend_inset_x + 0.5
        };

        $$.margin3 = {
            top: $$.isLegendRight ? 0 : $$.isLegendInset ? insetLegendPosition.top : $$.currentHeight - legendHeight,
            right: NaN,
            bottom: 0,
            left: $$.isLegendRight ? $$.currentWidth - legendWidth : $$.isLegendInset ? insetLegendPosition.left : 0
        };
    };
    c3_chart_internal_fn.transformLegend = function (withTransition) {
        var $$ = this;
        (withTransition ? $$.legend.transition() : $$.legend).attr("transform", $$.getTranslate('legend'));
    };
    c3_chart_internal_fn.updateLegendStep = function (step) {
        this.legendStep = step;
    };
    c3_chart_internal_fn.updateLegendItemWidth = function (w) {
        this.legendItemWidth = w;
    };
    c3_chart_internal_fn.updateLegendItemHeight = function (h) {
        this.legendItemHeight = h;
    };
    c3_chart_internal_fn.getLegendWidth = function () {
        var $$ = this;
        return $$.config.legend_show ? $$.isLegendRight || $$.isLegendInset ? $$.legendItemWidth * ($$.legendStep + 1) : $$.currentWidth : 0;
    };
    c3_chart_internal_fn.getLegendHeight = function () {
        var $$ = this, h = 0;
        if ($$.config.legend_show) {
            if ($$.isLegendRight) {
                h = $$.currentHeight;
            } else {
                h = Math.max(20, $$.legendItemHeight) * ($$.legendStep + 1);
            }
        }
        return h;
    };
    c3_chart_internal_fn.opacityForLegend = function (legendItem) {
        var $$ = this;
        return legendItem.classed(CLASS.legendItemHidden) ? $$.legendOpacityForHidden : 1;
    };
    c3_chart_internal_fn.opacityForUnfocusedLegend = function (legendItem) {
        var $$ = this;
        return legendItem.classed(CLASS.legendItemHidden) ? $$.legendOpacityForHidden : 0.3;
    };
    c3_chart_internal_fn.toggleFocusLegend = function (targetIds, focus) {
        var $$ = this;
        targetIds = $$.mapToTargetIds(targetIds);
        $$.legend.selectAll('.' + CLASS.legendItem)
            .classed(CLASS.legendItemFocused, function (id) {
                return targetIds.indexOf(id) >= 0 && focus;
            })
            .transition().duration(100)
            .style('opacity', function (id) {
                var opacity = targetIds.indexOf(id) >= 0 && focus ? $$.opacityForLegend : $$.opacityForUnfocusedLegend;
                return opacity.call($$, $$.d3.select(this));
            });
    };
    c3_chart_internal_fn.revertLegend = function () {
        var $$ = this, d3 = $$.d3;
        $$.legend.selectAll('.' + CLASS.legendItem)
            .transition().duration(100)
            .style('opacity', function () { return $$.opacityForLegend(d3.select(this)); });
    };
    c3_chart_internal_fn.showLegend = function (targetIds) {
        var $$ = this, config = $$.config;
        if (!config.legend_show) {
            config.legend_show = true;
            $$.legend.style('visibility', 'visible');
        }
        $$.removeHiddenLegendIds(targetIds);
        $$.legend.selectAll($$.selectorLegends(targetIds))
            .style('visibility', 'visible')
            .transition()
            .style('opacity', function () { return $$.opacityForLegend($$.d3.select(this)); });
    };
    c3_chart_internal_fn.hideLegend = function (targetIds) {
        var $$ = this, config = $$.config;
        if (config.legend_show && isEmpty(targetIds)) {
            config.legend_show = false;
            $$.legend.style('visibility', 'hidden');
        }
        $$.addHiddenLegendIds(targetIds);
        $$.legend.selectAll($$.selectorLegends(targetIds))
            .style('opacity', 0)
            .style('visibility', 'hidden');
    };
    c3_chart_internal_fn.updateLegend = function (targetIds, options, transitions) {
        var $$ = this, config = $$.config;
        var xForLegend, xForLegendText, xForLegendRect, yForLegend, yForLegendText, yForLegendRect;
        var paddingTop = 4, paddingRight = 10, maxWidth = 0, maxHeight = 0, posMin = 10, tileWidth = 15;
        var l, totalLength = 0, offsets = {}, widths = {}, heights = {}, margins = [0], steps = {}, step = 0;
        var withTransition, withTransitionForTransform;
        var hasFocused = $$.legend.selectAll('.' + CLASS.legendItemFocused).size();
        var texts, rects, tiles;

        options = options || {};
        withTransition = getOption(options, "withTransition", true);
        withTransitionForTransform = getOption(options, "withTransitionForTransform", true);

        function updatePositions(textElement, id, index) {
            var reset = index === 0, isLast = index === targetIds.length - 1,
                box = $$.getTextRect(textElement.textContent, CLASS.legendItem),
                itemWidth = box.width + tileWidth + (isLast && !$$.isLegendRight ? 0 : paddingRight),
                itemHeight = box.height + paddingTop,
                itemLength = $$.isLegendRight || $$.isLegendInset ? itemHeight : itemWidth,
                areaLength = $$.isLegendRight || $$.isLegendInset ? $$.getLegendHeight() : $$.getLegendWidth(),
                margin, maxLength;

            // MEMO: care about condifion of step, totalLength
            function updateValues(id, withoutStep) {
                if (!withoutStep) {
                    margin = (areaLength - totalLength - itemLength) / 2;
                    if (margin < posMin) {
                        margin = (areaLength - itemLength) / 2;
                        totalLength = 0;
                        step++;
                    }
                }
                steps[id] = step;
                margins[step] = $$.isLegendInset ? 10 : margin;
                offsets[id] = totalLength;
                totalLength += itemLength;
            }

            if (reset) {
                totalLength = 0;
                step = 0;
                maxWidth = 0;
                maxHeight = 0;
            }

            if (config.legend_show && !$$.isLegendToShow(id)) {
                widths[id] = heights[id] = steps[id] = offsets[id] = 0;
                return;
            }

            widths[id] = itemWidth;
            heights[id] = itemHeight;

            if (!maxWidth || itemWidth >= maxWidth) { maxWidth = itemWidth; }
            if (!maxHeight || itemHeight >= maxHeight) { maxHeight = itemHeight; }
            maxLength = $$.isLegendRight || $$.isLegendInset ? maxHeight : maxWidth;

            if (config.legend_equally) {
                Object.keys(widths).forEach(function (id) { widths[id] = maxWidth; });
                Object.keys(heights).forEach(function (id) { heights[id] = maxHeight; });
                margin = (areaLength - maxLength * targetIds.length) / 2;
                if (margin < posMin) {
                    totalLength = 0;
                    step = 0;
                    targetIds.forEach(function (id) { updateValues(id); });
                }
                else {
                    updateValues(id, true);
                }
            } else {
                updateValues(id);
            }
        }

        if ($$.isLegendInset) {
            step = config.legend_inset_step ? config.legend_inset_step : targetIds.length;
            $$.updateLegendStep(step);
        }

        if ($$.isLegendRight) {
            xForLegend = function (id) { return maxWidth * steps[id]; };
            yForLegend = function (id) { return margins[steps[id]] + offsets[id]; };
        } else if ($$.isLegendInset) {
            xForLegend = function (id) { return maxWidth * steps[id] + 10; };
            yForLegend = function (id) { return margins[steps[id]] + offsets[id]; };
        } else {
            xForLegend = function (id) { return margins[steps[id]] + offsets[id]; };
            yForLegend = function (id) { return maxHeight * steps[id]; };
        }
        xForLegendText = function (id, i) { return xForLegend(id, i) + 14; };
        yForLegendText = function (id, i) { return yForLegend(id, i) + 9; };
        xForLegendRect = function (id, i) { return xForLegend(id, i); };
        yForLegendRect = function (id, i) { return yForLegend(id, i) - 5; };

        // Define g for legend area
        l = $$.legend.selectAll('.' + CLASS.legendItem)
            .data(targetIds)
            .enter().append('g')
            .attr('class', function (id) { return $$.generateClass(CLASS.legendItem, id); })
            .style('visibility', function (id) { return $$.isLegendToShow(id) ? 'visible' : 'hidden'; })
            .style('cursor', 'pointer')
            .on('click', function (id) {
                if (config.legend_item_onclick) {
                    config.legend_item_onclick.call($$, id);
                } else {
                    if ($$.d3.event.altKey) {
                        $$.api.hide();
                        $$.api.show(id);
                    } else {
                        $$.api.toggle(id);
                        $$.isTargetToShow(id) ? $$.api.focus(id) : $$.api.revert();
                    }
                }
            })
            .on('mouseover', function (id) {
                $$.d3.select(this).classed(CLASS.legendItemFocused, true);
                if (!$$.transiting && $$.isTargetToShow(id)) {
                    $$.api.focus(id);
                }
                if (config.legend_item_onmouseover) {
                    config.legend_item_onmouseover.call($$, id);
                }
            })
            .on('mouseout', function (id) {
                $$.d3.select(this).classed(CLASS.legendItemFocused, false);
                $$.api.revert();
                if (config.legend_item_onmouseout) {
                    config.legend_item_onmouseout.call($$, id);
                }
            });
        l.append('text')
            .text(function (id) { return isDefined(config.data_names[id]) ? config.data_names[id] : id; })
            .each(function (id, i) { updatePositions(this, id, i); })
            .style("pointer-events", "none")
            .attr('x', $$.isLegendRight || $$.isLegendInset ? xForLegendText : -200)
            .attr('y', $$.isLegendRight || $$.isLegendInset ? -200 : yForLegendText);
        l.append('rect')
            .attr("class", CLASS.legendItemEvent)
            .style('fill-opacity', 0)
            .attr('x', $$.isLegendRight || $$.isLegendInset ? xForLegendRect : -200)
            .attr('y', $$.isLegendRight || $$.isLegendInset ? -200 : yForLegendRect);
        l.append('rect')
            .attr("class", CLASS.legendItemTile)
            .style("pointer-events", "none")
            .style('fill', $$.color)
            .attr('x', $$.isLegendRight || $$.isLegendInset ? xForLegendText : -200)
            .attr('y', $$.isLegendRight || $$.isLegendInset ? -200 : yForLegend)
            .attr('width', 10)
            .attr('height', 10);
        // Set background for inset legend
        if ($$.isLegendInset && maxWidth !== 0) {
            $$.legend.insert('g', '.' + CLASS.legendItem)
                .attr("class", CLASS.legendBackground)
                .append('rect')
                .attr('height', $$.getLegendHeight() - 12)
                .attr('width', maxWidth * (step + 1) + 10);
        }

        texts = $$.legend.selectAll('text')
            .data(targetIds)
            .text(function (id) { return isDefined(config.data_names[id]) ? config.data_names[id] : id; }) // MEMO: needed for update
            .each(function (id, i) { updatePositions(this, id, i); });
        (withTransition ? texts.transition() : texts)
            .attr('x', xForLegendText)
            .attr('y', yForLegendText);

        rects = $$.legend.selectAll('rect.' + CLASS.legendItemEvent)
            .data(targetIds);
        (withTransition ? rects.transition() : rects)
            .attr('width', function (id) { return widths[id]; })
            .attr('height', function (id) { return heights[id]; })
            .attr('x', xForLegendRect)
            .attr('y', yForLegendRect);

        tiles = $$.legend.selectAll('rect.' + CLASS.legendItemTile)
            .data(targetIds);
        (withTransition ? tiles.transition() : tiles)
            .style('fill', $$.color)
            .attr('x', xForLegend)
            .attr('y', yForLegend);

        // toggle legend state
        $$.legend.selectAll('.' + CLASS.legendItem)
            .classed(CLASS.legendItemHidden, function (id) { return !$$.isTargetToShow(id); })
            .transition()
            .style('opacity', function (id) {
                var This = $$.d3.select(this);
                if ($$.isTargetToShow(id)) {
                    return !hasFocused || This.classed(CLASS.legendItemFocused) ? $$.opacityForLegend(This) : $$.opacityForUnfocusedLegend(This);
                } else {
                    return $$.legendOpacityForHidden;
                }
            });

        // Update all to reflect change of legend
        $$.updateLegendItemWidth(maxWidth);
        $$.updateLegendItemHeight(maxHeight);
        $$.updateLegendStep(step);
        // Update size and scale
        $$.updateSizes();
        $$.updateScales();
        $$.updateSvgSize();
        // Update g positions
        $$.transformAll(withTransitionForTransform, transitions);
    };

    c3_chart_internal_fn.initAxis = function () {
        var $$ = this, config = $$.config, main = $$.main;
        $$.axes.x = main.append("g")
            .attr("class", CLASS.axis + ' ' + CLASS.axisX)
            .attr("clip-path", $$.clipPathForXAxis)
            .attr("transform", $$.getTranslate('x'))
            .style("visibility", config.axis_x_show ? 'visible' : 'hidden');
        $$.axes.x.append("text")
            .attr("class", CLASS.axisXLabel)
            .attr("transform", config.axis_rotated ? "rotate(-90)" : "")
            .style("text-anchor", $$.textAnchorForXAxisLabel.bind($$));

        $$.axes.y = main.append("g")
            .attr("class", CLASS.axis + ' ' + CLASS.axisY)
            .attr("clip-path", $$.clipPathForYAxis)
            .attr("transform", $$.getTranslate('y'))
            .style("visibility", config.axis_y_show ? 'visible' : 'hidden');
        $$.axes.y.append("text")
            .attr("class", CLASS.axisYLabel)
            .attr("transform", config.axis_rotated ? "" : "rotate(-90)")
            .style("text-anchor", $$.textAnchorForYAxisLabel.bind($$));

        $$.axes.y2 = main.append("g")
            .attr("class", CLASS.axis + ' ' + CLASS.axisY2)
            // clip-path?
            .attr("transform", $$.getTranslate('y2'))
            .style("visibility", config.axis_y2_show ? 'visible' : 'hidden');
        $$.axes.y2.append("text")
            .attr("class", CLASS.axisY2Label)
            .attr("transform", config.axis_rotated ? "" : "rotate(-90)")
            .style("text-anchor", $$.textAnchorForY2AxisLabel.bind($$));
    };
    c3_chart_internal_fn.getXAxis = function (scale, orient, tickFormat, tickValues, withOuterTick) {
        var $$ = this, config = $$.config,
            axisParams = {
                isCategory: $$.isCategorized(),
                withOuterTick: withOuterTick,
                tickWidth: $$.isCategorized() ? config.axis_x_tick_width : undefined
            },
            axis = c3_axis($$.d3, axisParams).scale(scale).orient(orient);

        if ($$.isTimeSeries() && tickValues) {
            tickValues = tickValues.map(function (v) { return $$.parseDate(v); });
        }

        // Set tick
        axis.tickFormat(tickFormat).tickValues(tickValues);
        if ($$.isCategorized()) {
            axis.tickCentered(config.axis_x_tick_centered);
            if (isEmpty(config.axis_x_tick_culling)) {
                config.axis_x_tick_culling = false;
            }
        } else {
            // TODO: move this to c3_axis
            axis.tickOffset = function () {
                var scale = this.scale(),
                    edgeX = $$.getEdgeX($$.data.targets), diff = scale(edgeX[1]) - scale(edgeX[0]),
                    base = diff ? diff : (config.axis_rotated ? $$.height : $$.width);
                return (base / $$.getMaxDataCount()) / 2;
            };
        }

        return axis;
    };
    c3_chart_internal_fn.getYAxis = function (scale, orient, tickFormat, tickValues, withOuterTick) {
        var axisParams = {withOuterTick: withOuterTick};
        return c3_axis(this.d3, axisParams).scale(scale).orient(orient).tickFormat(tickFormat).tickValues(tickValues);
    };
    c3_chart_internal_fn.getAxisId = function (id) {
        var config = this.config;
        return id in config.data_axes ? config.data_axes[id] : 'y';
    };
    c3_chart_internal_fn.getXAxisTickFormat = function () {
        var $$ = this, config = $$.config,
            format = $$.isTimeSeries() ? $$.defaultAxisTimeFormat : $$.isCategorized() ? $$.categoryName : function (v) { return v < 0 ? v.toFixed(0) : v; };
        if (config.axis_x_tick_format) {
            if (isFunction(config.axis_x_tick_format)) {
                format = config.axis_x_tick_format;
            } else if ($$.isTimeSeries()) {
                format = function (date) {
                    return date ? $$.axisTimeFormat(config.axis_x_tick_format)(date) : "";
                };
            }
        }
        return isFunction(format) ? function (v) { return format.call($$, v); } : format;
    };
    c3_chart_internal_fn.getAxisTickValues = function (tickValues, axis) {
        return tickValues ? tickValues : axis ? axis.tickValues() : undefined;
    };
    c3_chart_internal_fn.getXAxisTickValues = function () {
        return this.getAxisTickValues(this.config.axis_x_tick_values, this.xAxis);
    };
    c3_chart_internal_fn.getYAxisTickValues = function () {
        return this.getAxisTickValues(this.config.axis_y_tick_values, this.yAxis);
    };
    c3_chart_internal_fn.getY2AxisTickValues = function () {
        return this.getAxisTickValues(this.config.axis_y2_tick_values, this.y2Axis);
    };
    c3_chart_internal_fn.getAxisLabelOptionByAxisId = function (axisId) {
        var $$ = this, config = $$.config, option;
        if (axisId === 'y') {
            option = config.axis_y_label;
        } else if (axisId === 'y2') {
            option = config.axis_y2_label;
        } else if (axisId === 'x') {
            option = config.axis_x_label;
        }
        return option;
    };
    c3_chart_internal_fn.getAxisLabelText = function (axisId) {
        var option = this.getAxisLabelOptionByAxisId(axisId);
        return isString(option) ? option : option ? option.text : null;
    };
    c3_chart_internal_fn.setAxisLabelText = function (axisId, text) {
        var $$ = this, config = $$.config,
            option = $$.getAxisLabelOptionByAxisId(axisId);
        if (isString(option)) {
            if (axisId === 'y') {
                config.axis_y_label = text;
            } else if (axisId === 'y2') {
                config.axis_y2_label = text;
            } else if (axisId === 'x') {
                config.axis_x_label = text;
            }
        } else if (option) {
            option.text = text;
        }
    };
    c3_chart_internal_fn.getAxisLabelPosition = function (axisId, defaultPosition) {
        var option = this.getAxisLabelOptionByAxisId(axisId),
            position = (option && typeof option === 'object' && option.position) ? option.position : defaultPosition;
        return {
            isInner: position.indexOf('inner') >= 0,
            isOuter: position.indexOf('outer') >= 0,
            isLeft: position.indexOf('left') >= 0,
            isCenter: position.indexOf('center') >= 0,
            isRight: position.indexOf('right') >= 0,
            isTop: position.indexOf('top') >= 0,
            isMiddle: position.indexOf('middle') >= 0,
            isBottom: position.indexOf('bottom') >= 0
        };
    };
    c3_chart_internal_fn.getXAxisLabelPosition = function () {
        return this.getAxisLabelPosition('x', this.config.axis_rotated ? 'inner-top' : 'inner-right');
    };
    c3_chart_internal_fn.getYAxisLabelPosition = function () {
        return this.getAxisLabelPosition('y', this.config.axis_rotated ? 'inner-right' : 'inner-top');
    };
    c3_chart_internal_fn.getY2AxisLabelPosition = function () {
        return this.getAxisLabelPosition('y2', this.config.axis_rotated ? 'inner-right' : 'inner-top');
    };
    c3_chart_internal_fn.getAxisLabelPositionById = function (id) {
        return id === 'y2' ? this.getY2AxisLabelPosition() : id === 'y' ? this.getYAxisLabelPosition() : this.getXAxisLabelPosition();
    };
    c3_chart_internal_fn.textForXAxisLabel = function () {
        return this.getAxisLabelText('x');
    };
    c3_chart_internal_fn.textForYAxisLabel = function () {
        return this.getAxisLabelText('y');
    };
    c3_chart_internal_fn.textForY2AxisLabel = function () {
        return this.getAxisLabelText('y2');
    };
    c3_chart_internal_fn.xForAxisLabel = function (forHorizontal, position) {
        var $$ = this;
        if (forHorizontal) {
            return position.isLeft ? 0 : position.isCenter ? $$.width / 2 : $$.width;
        } else {
            return position.isBottom ? -$$.height : position.isMiddle ? -$$.height / 2 : 0;
        }
    };
    c3_chart_internal_fn.dxForAxisLabel = function (forHorizontal, position) {
        if (forHorizontal) {
            return position.isLeft ? "0.5em" : position.isRight ? "-0.5em" : "0";
        } else {
            return position.isTop ? "-0.5em" : position.isBottom ? "0.5em" : "0";
        }
    };
    c3_chart_internal_fn.textAnchorForAxisLabel = function (forHorizontal, position) {
        if (forHorizontal) {
            return position.isLeft ? 'start' : position.isCenter ? 'middle' : 'end';
        } else {
            return position.isBottom ? 'start' : position.isMiddle ? 'middle' : 'end';
        }
    };
    c3_chart_internal_fn.xForXAxisLabel = function () {
        return this.xForAxisLabel(!this.config.axis_rotated, this.getXAxisLabelPosition());
    };
    c3_chart_internal_fn.xForYAxisLabel = function () {
        return this.xForAxisLabel(this.config.axis_rotated, this.getYAxisLabelPosition());
    };
    c3_chart_internal_fn.xForY2AxisLabel = function () {
        return this.xForAxisLabel(this.config.axis_rotated, this.getY2AxisLabelPosition());
    };
    c3_chart_internal_fn.dxForXAxisLabel = function () {
        return this.dxForAxisLabel(!this.config.axis_rotated, this.getXAxisLabelPosition());
    };
    c3_chart_internal_fn.dxForYAxisLabel = function () {
        return this.dxForAxisLabel(this.config.axis_rotated, this.getYAxisLabelPosition());
    };
    c3_chart_internal_fn.dxForY2AxisLabel = function () {
        return this.dxForAxisLabel(this.config.axis_rotated, this.getY2AxisLabelPosition());
    };
    c3_chart_internal_fn.dyForXAxisLabel = function () {
        var $$ = this, config = $$.config,
            position = $$.getXAxisLabelPosition();
        if (config.axis_rotated) {
            return position.isInner ? "1.2em" : -25 - $$.getMaxTickWidth('x');
        } else {
            return position.isInner ? "-0.5em" : config.axis_x_height ? config.axis_x_height - 10 : "3em";
        }
    };
    c3_chart_internal_fn.dyForYAxisLabel = function () {
        var $$ = this,
            position = $$.getYAxisLabelPosition();
        if ($$.config.axis_rotated) {
            return position.isInner ? "-0.5em" : "3em";
        } else {
            return position.isInner ? "1.2em" : -20 - $$.getMaxTickWidth('y');
        }
    };
    c3_chart_internal_fn.dyForY2AxisLabel = function () {
        var $$ = this,
            position = $$.getY2AxisLabelPosition();
        if ($$.config.axis_rotated) {
            return position.isInner ? "1.2em" : "-2.2em";
        } else {
            return position.isInner ? "-0.5em" : 30 + this.getMaxTickWidth('y2');
        }
    };
    c3_chart_internal_fn.textAnchorForXAxisLabel = function () {
        var $$ = this;
        return $$.textAnchorForAxisLabel(!$$.config.axis_rotated, $$.getXAxisLabelPosition());
    };
    c3_chart_internal_fn.textAnchorForYAxisLabel = function () {
        var $$ = this;
        return $$.textAnchorForAxisLabel($$.config.axis_rotated, $$.getYAxisLabelPosition());
    };
    c3_chart_internal_fn.textAnchorForY2AxisLabel = function () {
        var $$ = this;
        return $$.textAnchorForAxisLabel($$.config.axis_rotated, $$.getY2AxisLabelPosition());
    };

    c3_chart_internal_fn.xForRotatedTickText = function (r) {
        return 8 * Math.sin(Math.PI * (r / 180));
    };
    c3_chart_internal_fn.yForRotatedTickText = function (r) {
        return 11.5 - 2.5 * (r / 15) * (r > 0 ? 1 : -1);
    };
    c3_chart_internal_fn.rotateTickText = function (axis, transition, rotate) {
        axis.selectAll('.tick text')
            .style("text-anchor", rotate > 0 ? "start" : "end");
        transition.selectAll('.tick text')
            .attr("y", this.yForRotatedTickText(rotate))
            .attr("transform", "rotate(" + rotate + ")")
          .selectAll('tspan')
            .attr('dx', this.xForRotatedTickText(rotate));
    };

    c3_chart_internal_fn.getMaxTickWidth = function (id) {
        var $$ = this, config = $$.config,
            maxWidth = 0, targetsToShow, scale, axis;
        if ($$.svg) {
            targetsToShow = $$.filterTargetsToShow($$.data.targets);
            if (id === 'y') {
                scale = $$.y.copy().domain($$.getYDomain(targetsToShow, 'y'));
                axis = $$.getYAxis(scale, $$.yOrient, config.axis_y_tick_format, $$.getYAxisTickValues());
            } else if (id === 'y2') {
                scale = $$.y2.copy().domain($$.getYDomain(targetsToShow, 'y2'));
                axis = $$.getYAxis(scale, $$.y2Orient, config.axis_y2_tick_format, $$.getY2AxisTickValues());
            } else {
                scale = $$.x.copy().domain($$.getXDomain(targetsToShow));
                axis = $$.getXAxis(scale, $$.xOrient, $$.getXAxisTickFormat(), $$.getXAxisTickValues());
            }
            $$.d3.select('body').append("g").style('visibility', 'hidden').call(axis).each(function () {
                $$.d3.select(this).selectAll('text tspan').each(function () {
                    var box = this.getBoundingClientRect();
                    if (box.left > 0 && maxWidth < box.width) { maxWidth = box.width; }
                });
            }).remove();
        }
        $$.currentMaxTickWidths[id] = maxWidth <= 0 ? $$.currentMaxTickWidths[id] : maxWidth;
        return $$.currentMaxTickWidths[id];
    };

    c3_chart_internal_fn.updateAxisLabels = function (withTransition) {
        var $$ = this;
        var axisXLabel = $$.main.select('.' + CLASS.axisX + ' .' + CLASS.axisXLabel),
            axisYLabel = $$.main.select('.' + CLASS.axisY + ' .' + CLASS.axisYLabel),
            axisY2Label = $$.main.select('.' + CLASS.axisY2 + ' .' + CLASS.axisY2Label);
        (withTransition ? axisXLabel.transition() : axisXLabel)
            .attr("x", $$.xForXAxisLabel.bind($$))
            .attr("dx", $$.dxForXAxisLabel.bind($$))
            .attr("dy", $$.dyForXAxisLabel.bind($$))
            .text($$.textForXAxisLabel.bind($$));
        (withTransition ? axisYLabel.transition() : axisYLabel)
            .attr("x", $$.xForYAxisLabel.bind($$))
            .attr("dx", $$.dxForYAxisLabel.bind($$))
            .attr("dy", $$.dyForYAxisLabel.bind($$))
            .text($$.textForYAxisLabel.bind($$));
        (withTransition ? axisY2Label.transition() : axisY2Label)
            .attr("x", $$.xForY2AxisLabel.bind($$))
            .attr("dx", $$.dxForY2AxisLabel.bind($$))
            .attr("dy", $$.dyForY2AxisLabel.bind($$))
            .text($$.textForY2AxisLabel.bind($$));
    };

    c3_chart_internal_fn.getAxisPadding = function (padding, key, defaultValue, all) {
        var ratio = padding.unit === 'ratio' ? all : 1;
        return isValue(padding[key]) ? padding[key] * ratio : defaultValue;
    };

    c3_chart_internal_fn.generateTickValues = function (values, tickCount, forTimeSeries) {
        var tickValues = values, targetCount, start, end, count, interval, i, tickValue;
        if (tickCount) {
            targetCount = isFunction(tickCount) ? tickCount() : tickCount;
            // compute ticks according to tickCount
            if (targetCount === 1) {
                tickValues = [values[0]];
            } else if (targetCount === 2) {
                tickValues = [values[0], values[values.length - 1]];
            } else if (targetCount > 2) {
                count = targetCount - 2;
                start = values[0];
                end = values[values.length - 1];
                interval = (end - start) / (count + 1);
                // re-construct unique values
                tickValues = [start];
                for (i = 0; i < count; i++) {
                    tickValue = +start + interval * (i + 1);
                    tickValues.push(forTimeSeries ? new Date(tickValue) : tickValue);
                }
                tickValues.push(end);
            }
        }
        if (!forTimeSeries) { tickValues = tickValues.sort(function (a, b) { return a - b; }); }
        return tickValues;
    };
    c3_chart_internal_fn.generateAxisTransitions = function (duration) {
        var $$ = this, axes = $$.axes;
        return {
            axisX: duration ? axes.x.transition().duration(duration) : axes.x,
            axisY: duration ? axes.y.transition().duration(duration) : axes.y,
            axisY2: duration ? axes.y2.transition().duration(duration) : axes.y2,
            axisSubX: duration ? axes.subx.transition().duration(duration) : axes.subx
        };
    };
    c3_chart_internal_fn.redrawAxis = function (transitions, isHidden) {
        var $$ = this, config = $$.config;
        $$.axes.x.style("opacity", isHidden ? 0 : 1);
        $$.axes.y.style("opacity", isHidden ? 0 : 1);
        $$.axes.y2.style("opacity", isHidden ? 0 : 1);
        $$.axes.subx.style("opacity", isHidden ? 0 : 1);
        transitions.axisX.call($$.xAxis);
        transitions.axisY.call($$.yAxis);
        transitions.axisY2.call($$.y2Axis);
        transitions.axisSubX.call($$.subXAxis);
        // rotate tick text if needed
        if (!config.axis_rotated && config.axis_x_tick_rotate) {
            $$.rotateTickText($$.axes.x, transitions.axisX, config.axis_x_tick_rotate);
        }
    };

    c3_chart_internal_fn.getClipPath = function (id) {
        var isIE9 = window.navigator.appVersion.toLowerCase().indexOf("msie 9.") >= 0;
        return "url(" + (isIE9 ? "" : document.URL.split('#')[0]) + "#" + id + ")";
    };
    c3_chart_internal_fn.appendClip = function (parent, id) {
        return parent.append("clipPath").attr("id", id).append("rect");
    };
    c3_chart_internal_fn.getAxisClipX = function (forHorizontal) {
        // axis line width + padding for left
        var left = Math.max(30, this.margin.left);
        return forHorizontal ? -(1 + left) : -(left - 1);
    };
    c3_chart_internal_fn.getAxisClipY = function (forHorizontal) {
        return forHorizontal ? -20 : -4;
    };
    c3_chart_internal_fn.getXAxisClipX = function () {
        var $$ = this;
        return $$.getAxisClipX(!$$.config.axis_rotated);
    };
    c3_chart_internal_fn.getXAxisClipY = function () {
        var $$ = this;
        return $$.getAxisClipY(!$$.config.axis_rotated);
    };
    c3_chart_internal_fn.getYAxisClipX = function () {
        var $$ = this;
        return $$.getAxisClipX($$.config.axis_rotated);
    };
    c3_chart_internal_fn.getYAxisClipY = function () {
        var $$ = this;
        return $$.getAxisClipY($$.config.axis_rotated);
    };
    c3_chart_internal_fn.getAxisClipWidth = function (forHorizontal) {
        var $$ = this,
            left = Math.max(30, $$.margin.left),
            right = Math.max(30, $$.margin.right);
        // width + axis line width + padding for left/right
        return forHorizontal ? $$.width + 2 + left + right : $$.margin.left + 20;
    };
    c3_chart_internal_fn.getAxisClipHeight = function (forHorizontal) {
        return forHorizontal ? this.margin.bottom : this.height + 8;
    };
    c3_chart_internal_fn.getXAxisClipWidth = function () {
        var $$ = this;
        return $$.getAxisClipWidth(!$$.config.axis_rotated);
    };
    c3_chart_internal_fn.getXAxisClipHeight = function () {
        var $$ = this;
        return $$.getAxisClipHeight(!$$.config.axis_rotated);
    };
    c3_chart_internal_fn.getYAxisClipWidth = function () {
        var $$ = this;
        return $$.getAxisClipWidth($$.config.axis_rotated);
    };
    c3_chart_internal_fn.getYAxisClipHeight = function () {
        var $$ = this;
        return $$.getAxisClipHeight($$.config.axis_rotated);
    };

    c3_chart_internal_fn.initPie = function () {
        var $$ = this, d3 = $$.d3, config = $$.config;
        $$.pie = d3.layout.pie().value(function (d) {
            return d.values.reduce(function (a, b) { return a + b.value; }, 0);
        });
        if (!config.data_order) {
            $$.pie.sort(null);
        }
    };

    c3_chart_internal_fn.updateRadius = function () {
        var $$ = this, config = $$.config,
            w = config.gauge_width || config.donut_width;
        $$.radiusExpanded = Math.min($$.arcWidth, $$.arcHeight) / 2;
        $$.radius = $$.radiusExpanded * 0.95;
        $$.innerRadiusRatio = w ? ($$.radius - w) / $$.radius : 0.6;
        $$.innerRadius = $$.hasType('donut') || $$.hasType('gauge') ? $$.radius * $$.innerRadiusRatio : 0;
    };

    c3_chart_internal_fn.updateArc = function () {
        var $$ = this;
        $$.svgArc = $$.getSvgArc();
        $$.svgArcExpanded = $$.getSvgArcExpanded();
        $$.svgArcExpandedSub = $$.getSvgArcExpanded(0.98);
    };

    c3_chart_internal_fn.updateAngle = function (d) {
        var $$ = this, config = $$.config,
            found = false, index = 0,
            gMin = config.gauge_min, gMax = config.gauge_max, gTic, gValue;
        $$.pie($$.filterTargetsToShow($$.data.targets)).forEach(function (t) {
            if (! found && t.data.id === d.data.id) {
                found = true;
                d = t;
                d.index = index;
            }
            index++;
        });
        if (isNaN(d.endAngle)) {
            d.endAngle = d.startAngle;
        }
        if ($$.isGaugeType(d.data)) {
            gTic = (Math.PI) / (gMax - gMin);
            gValue = d.value < gMin ? 0 : d.value < gMax ? d.value - gMin : (gMax - gMin);
            d.startAngle = -1 * (Math.PI / 2);
            d.endAngle = d.startAngle + gTic * gValue;
        }
        return found ? d : null;
    };

    c3_chart_internal_fn.getSvgArc = function () {
        var $$ = this,
            arc = $$.d3.svg.arc().outerRadius($$.radius).innerRadius($$.innerRadius),
            newArc = function (d, withoutUpdate) {
                var updated;
                if (withoutUpdate) { return arc(d); } // for interpolate
                updated = $$.updateAngle(d);
                return updated ? arc(updated) : "M 0 0";
            };
        // TODO: extends all function
        newArc.centroid = arc.centroid;
        return newArc;
    };

    c3_chart_internal_fn.getSvgArcExpanded = function (rate) {
        var $$ = this,
            arc = $$.d3.svg.arc().outerRadius($$.radiusExpanded * (rate ? rate : 1)).innerRadius($$.innerRadius);
        return function (d) {
            var updated = $$.updateAngle(d);
            return updated ? arc(updated) : "M 0 0";
        };
    };

    c3_chart_internal_fn.getArc = function (d, withoutUpdate, force) {
        return force || this.isArcType(d.data) ? this.svgArc(d, withoutUpdate) : "M 0 0";
    };


    c3_chart_internal_fn.transformForArcLabel = function (d) {
        var $$ = this,
            updated = $$.updateAngle(d), c, x, y, h, ratio, translate = "";
        if (updated && !$$.hasType('gauge')) {
            c = this.svgArc.centroid(updated);
            x = isNaN(c[0]) ? 0 : c[0];
            y = isNaN(c[1]) ? 0 : c[1];
            h = Math.sqrt(x * x + y * y);
            // TODO: ratio should be an option?
            ratio = $$.radius && h ? (36 / $$.radius > 0.375 ? 1.175 - 36 / $$.radius : 0.8) * $$.radius / h : 0;
            translate = "translate(" + (x * ratio) +  ',' + (y * ratio) +  ")";
        }
        return translate;
    };

    c3_chart_internal_fn.getArcRatio = function (d) {
        var $$ = this,
            whole = $$.hasType('gauge') ? Math.PI : (Math.PI * 2);
        return d ? (d.endAngle - d.startAngle) / whole : null;
    };

    c3_chart_internal_fn.convertToArcData = function (d) {
        return this.addName({
            id: d.data.id,
            value: d.value,
            ratio: this.getArcRatio(d),
            index: d.index
        });
    };

    c3_chart_internal_fn.textForArcLabel = function (d) {
        var $$ = this,
            updated, value, ratio, id, format;
        if (! $$.shouldShowArcLabel()) { return ""; }
        updated = $$.updateAngle(d);
        value = updated ? updated.value : null;
        ratio = $$.getArcRatio(updated);
        id = d.data.id;
        if (! $$.hasType('gauge') && ! $$.meetsArcLabelThreshold(ratio)) { return ""; }
        format = $$.getArcLabelFormat();
        return format ? format(value, ratio, id) : $$.defaultArcValueFormat(value, ratio);
    };

    c3_chart_internal_fn.expandArc = function (targetIds) {
        var $$ = this, interval;

        // MEMO: avoid to cancel transition
        if ($$.transiting) {
            interval = window.setInterval(function () {
                if (!$$.transiting) {
                    window.clearInterval(interval);
                    if ($$.legend.selectAll('.c3-legend-item-focused').size() > 0) {
                        $$.expandArc(targetIds);
                    }
                }
            }, 10);
            return;
        }

        targetIds = $$.mapToTargetIds(targetIds);

        $$.svg.selectAll($$.selectorTargets(targetIds, '.' + CLASS.chartArc)).each(function (d) {
            if (! $$.shouldExpand(d.data.id)) { return; }
            $$.d3.select(this).selectAll('path')
                .transition().duration(50)
                .attr("d", $$.svgArcExpanded)
                .transition().duration(100)
                .attr("d", $$.svgArcExpandedSub)
                .each(function (d) {
                    if ($$.isDonutType(d.data)) {
                        // callback here
                    }
                });
        });
    };

    c3_chart_internal_fn.unexpandArc = function (targetIds) {
        var $$ = this;

        if ($$.transiting) { return; }

        targetIds = $$.mapToTargetIds(targetIds);

        $$.svg.selectAll($$.selectorTargets(targetIds, '.' + CLASS.chartArc)).selectAll('path')
            .transition().duration(50)
            .attr("d", $$.svgArc);
        $$.svg.selectAll('.' + CLASS.arc)
            .style("opacity", 1);
    };

    c3_chart_internal_fn.shouldExpand = function (id) {
        var $$ = this, config = $$.config;
        return ($$.isDonutType(id) && config.donut_expand) || ($$.isGaugeType(id) && config.gauge_expand) || ($$.isPieType(id) && config.pie_expand);
    };

    c3_chart_internal_fn.shouldShowArcLabel = function () {
        var $$ = this, config = $$.config, shouldShow = true;
        if ($$.hasType('donut')) {
            shouldShow = config.donut_label_show;
        } else if ($$.hasType('pie')) {
            shouldShow = config.pie_label_show;
        }
        // when gauge, always true
        return shouldShow;
    };

    c3_chart_internal_fn.meetsArcLabelThreshold = function (ratio) {
        var $$ = this, config = $$.config,
            threshold = $$.hasType('donut') ? config.donut_label_threshold : config.pie_label_threshold;
        return ratio >= threshold;
    };

    c3_chart_internal_fn.getArcLabelFormat = function () {
        var $$ = this, config = $$.config,
            format = config.pie_label_format;
        if ($$.hasType('gauge')) {
            format = config.gauge_label_format;
        } else if ($$.hasType('donut')) {
            format = config.donut_label_format;
        }
        return format;
    };

    c3_chart_internal_fn.getArcTitle = function () {
        var $$ = this;
        return $$.hasType('donut') ? $$.config.donut_title : "";
    };

    c3_chart_internal_fn.updateTargetsForArc = function (targets) {
        var $$ = this, main = $$.main,
            mainPieUpdate, mainPieEnter,
            classChartArc = $$.classChartArc.bind($$),
            classArcs = $$.classArcs.bind($$),
            classFocus = $$.classFocus.bind($$);
        mainPieUpdate = main.select('.' + CLASS.chartArcs).selectAll('.' + CLASS.chartArc)
            .data($$.pie(targets))
            .attr("class", function (d) { return classChartArc(d) + classFocus(d.data); });
        mainPieEnter = mainPieUpdate.enter().append("g")
            .attr("class", classChartArc);
        mainPieEnter.append('g')
            .attr('class', classArcs);
        mainPieEnter.append("text")
            .attr("dy", $$.hasType('gauge') ? "-0.35em" : ".35em")
            .style("opacity", 0)
            .style("text-anchor", "middle")
            .style("pointer-events", "none");
        // MEMO: can not keep same color..., but not bad to update color in redraw
        //mainPieUpdate.exit().remove();
    };

    c3_chart_internal_fn.initArc = function () {
        var $$ = this;
        $$.arcs = $$.main.select('.' + CLASS.chart).append("g")
            .attr("class", CLASS.chartArcs)
            .attr("transform", $$.getTranslate('arc'));
        $$.arcs.append('text')
            .attr('class', CLASS.chartArcsTitle)
            .style("text-anchor", "middle")
            .text($$.getArcTitle());
    };

    c3_chart_internal_fn.redrawArc = function (duration, durationForExit, withTransform) {
        var $$ = this, d3 = $$.d3, config = $$.config, main = $$.main,
            mainArc;
        mainArc = main.selectAll('.' + CLASS.arcs).selectAll('.' + CLASS.arc)
            .data($$.arcData.bind($$));
        mainArc.enter().append('path')
            .attr("class", $$.classArc.bind($$))
            .style("fill", function (d) { return $$.color(d.data); })
            .style("cursor", function (d) { return config.data_selection_isselectable(d) ? "pointer" : null; })
            .style("opacity", 0)
            .each(function (d) {
                if ($$.isGaugeType(d.data)) {
                    d.startAngle = d.endAngle = -1 * (Math.PI / 2);
                }
                this._current = d;
            })
            .on('mouseover', function (d) {
                var updated, arcData;
                if ($$.transiting) { // skip while transiting
                    return;
                }
                updated = $$.updateAngle(d);
                arcData = $$.convertToArcData(updated);
                // transitions
                $$.expandArc(updated.data.id);
                $$.api.focus(updated.data.id);
                $$.toggleFocusLegend(updated.data.id, true);
                $$.config.data_onmouseover(arcData, this);
            })
            .on('mousemove', function (d) {
                var updated = $$.updateAngle(d),
                    arcData = $$.convertToArcData(updated),
                    selectedData = [arcData];
                $$.showTooltip(selectedData, d3.mouse(this));
            })
            .on('mouseout', function (d) {
                var updated, arcData;
                if ($$.transiting) { // skip while transiting
                    return;
                }
                updated = $$.updateAngle(d);
                arcData = $$.convertToArcData(updated);
                // transitions
                $$.unexpandArc(updated.data.id);
                $$.api.revert();
                $$.revertLegend();
                $$.hideTooltip();
                $$.config.data_onmouseout(arcData, this);
            })
            .on('click', function (d, i) {
                var updated = $$.updateAngle(d),
                    arcData = $$.convertToArcData(updated);
                if ($$.toggleShape) { $$.toggleShape(this, arcData, i); }
                $$.config.data_onclick.call($$.api, arcData, this);
            });
        mainArc
            .attr("transform", function (d) { return !$$.isGaugeType(d.data) && withTransform ? "scale(0)" : ""; })
            .style("opacity", function (d) { return d === this._current ? 0 : 1; })
            .each(function () { $$.transiting = true; })
            .transition().duration(duration)
            .attrTween("d", function (d) {
                var updated = $$.updateAngle(d), interpolate;
                if (! updated) {
                    return function () { return "M 0 0"; };
                }
                //                if (this._current === d) {
                //                    this._current = {
                //                        startAngle: Math.PI*2,
                //                        endAngle: Math.PI*2,
                //                    };
                //                }
                if (isNaN(this._current.endAngle)) {
                    this._current.endAngle = this._current.startAngle;
                }
                interpolate = d3.interpolate(this._current, updated);
                this._current = interpolate(0);
                return function (t) {
                    var interpolated = interpolate(t);
                    interpolated.data = d.data; // data.id will be updated by interporator
                    return $$.getArc(interpolated, true);
                };
            })
            .attr("transform", withTransform ? "scale(1)" : "")
            .style("fill", function (d) {
                return $$.levelColor ? $$.levelColor(d.data.values[0].value) : $$.color(d.data.id);
            }) // Where gauge reading color would receive customization.
            .style("opacity", 1)
            .call($$.endall, function () {
                $$.transiting = false;
            });
        mainArc.exit().transition().duration(durationForExit)
            .style('opacity', 0)
            .remove();
        main.selectAll('.' + CLASS.chartArc).select('text')
            .style("opacity", 0)
            .attr('class', function (d) { return $$.isGaugeType(d.data) ? CLASS.gaugeValue : ''; })
            .text($$.textForArcLabel.bind($$))
            .attr("transform", $$.transformForArcLabel.bind($$))
            .transition().duration(duration)
            .style("opacity", function (d) { return $$.isTargetToShow(d.data.id) && $$.isArcType(d.data) ? 1 : 0; });
        main.select('.' + CLASS.chartArcsTitle)
            .style("opacity", $$.hasType('donut') || $$.hasType('gauge') ? 1 : 0);

        if ($$.hasType('gauge')) {
            $$.arcs.select('.' + CLASS.chartArcsBackground)
                .attr("d", function () {
                    var d = {
                        data: [{value: config.gauge_max}],
                        startAngle: -1 * (Math.PI / 2),
                        endAngle: Math.PI / 2
                    };
                    return $$.getArc(d, true, true);
                });
            $$.arcs.select('.' + CLASS.chartArcsGaugeUnit)
                .attr("dy", ".75em")
                .text(config.gauge_label_show ? config.gauge_units : '');
            $$.arcs.select('.' + CLASS.chartArcsGaugeMin)
                .attr("dx", -1 * ($$.innerRadius + (($$.radius - $$.innerRadius) / 2)) + "px")
                .attr("dy", "1.2em")
                .text(config.gauge_label_show ? config.gauge_min : '');
            $$.arcs.select('.' + CLASS.chartArcsGaugeMax)
                .attr("dx", $$.innerRadius + (($$.radius - $$.innerRadius) / 2) + "px")
                .attr("dy", "1.2em")
                .text(config.gauge_label_show ? config.gauge_max : '');
        }
    };
    c3_chart_internal_fn.initGauge = function () {
        var arcs = this.arcs;
        if (this.hasType('gauge')) {
            arcs.append('path')
                .attr("class", CLASS.chartArcsBackground);
            arcs.append("text")
                .attr("class", CLASS.chartArcsGaugeUnit)
                .style("text-anchor", "middle")
                .style("pointer-events", "none");
            arcs.append("text")
                .attr("class", CLASS.chartArcsGaugeMin)
                .style("text-anchor", "middle")
                .style("pointer-events", "none");
            arcs.append("text")
                .attr("class", CLASS.chartArcsGaugeMax)
                .style("text-anchor", "middle")
                .style("pointer-events", "none");
        }
    };
    c3_chart_internal_fn.getGaugeLabelHeight = function () {
        return this.config.gauge_label_show ? 20 : 0;
    };

    c3_chart_internal_fn.initRegion = function () {
        var $$ = this;
        $$.region = $$.main.append('g')
            .attr("clip-path", $$.clipPath)
            .attr("class", CLASS.regions);
    };
    c3_chart_internal_fn.redrawRegion = function (duration) {
        var $$ = this, config = $$.config;

        // hide if arc type
        $$.region.style('visibility', $$.hasArcType() ? 'hidden' : 'visible');

        $$.mainRegion = $$.main.select('.' + CLASS.regions).selectAll('.' + CLASS.region)
            .data(config.regions);
        $$.mainRegion.enter().append('g')
            .attr('class', $$.classRegion.bind($$))
          .append('rect')
            .style("fill-opacity", 0);
        $$.mainRegion.exit().transition().duration(duration)
            .style("opacity", 0)
            .remove();
    };
    c3_chart_internal_fn.addTransitionForRegion = function (transitions) {
        var $$ = this,
            x = $$.regionX.bind($$),
            y = $$.regionY.bind($$),
            w = $$.regionWidth.bind($$),
            h = $$.regionHeight.bind($$);
        transitions.push($$.mainRegion.selectAll('rect').transition()
                         .attr("x", x)
                         .attr("y", y)
                         .attr("width", w)
                         .attr("height", h)
                         .style("fill-opacity", function (d) { return isValue(d.opacity) ? d.opacity : 0.1; }));
    };
    c3_chart_internal_fn.regionX = function (d) {
        var $$ = this, config = $$.config,
            xPos, yScale = d.axis === 'y' ? $$.y : $$.y2;
        if (d.axis === 'y' || d.axis === 'y2') {
            xPos = config.axis_rotated ? ('start' in d ? yScale(d.start) : 0) : 0;
        } else {
            xPos = config.axis_rotated ? 0 : ('start' in d ? $$.x($$.isTimeSeries() ? $$.parseDate(d.start) : d.start) : 0);
        }
        return xPos;
    };
    c3_chart_internal_fn.regionY = function (d) {
        var $$ = this, config = $$.config,
            yPos, yScale = d.axis === 'y' ? $$.y : $$.y2;
        if (d.axis === 'y' || d.axis === 'y2') {
            yPos = config.axis_rotated ? 0 : ('end' in d ? yScale(d.end) : 0);
        } else {
            yPos = config.axis_rotated ? ('start' in d ? $$.x($$.isTimeSeries() ? $$.parseDate(d.start) : d.start) : 0) : 0;
        }
        return yPos;
    };
    c3_chart_internal_fn.regionWidth = function (d) {
        var $$ = this, config = $$.config,
            start = $$.regionX(d), end, yScale = d.axis === 'y' ? $$.y : $$.y2;
        if (d.axis === 'y' || d.axis === 'y2') {
            end = config.axis_rotated ? ('end' in d ? yScale(d.end) : $$.width) : $$.width;
        } else {
            end = config.axis_rotated ? $$.width : ('end' in d ? $$.x($$.isTimeSeries() ? $$.parseDate(d.end) : d.end) : $$.width);
        }
        return end < start ? 0 : end - start;
    };
    c3_chart_internal_fn.regionHeight = function (d) {
        var $$ = this, config = $$.config,
            start = this.regionY(d), end, yScale = d.axis === 'y' ? $$.y : $$.y2;
        if (d.axis === 'y' || d.axis === 'y2') {
            end = config.axis_rotated ? $$.height : ('start' in d ? yScale(d.start) : $$.height);
        } else {
            end = config.axis_rotated ? ('end' in d ? $$.x($$.isTimeSeries() ? $$.parseDate(d.end) : d.end) : $$.height) : $$.height;
        }
        return end < start ? 0 : end - start;
    };
    c3_chart_internal_fn.isRegionOnX = function (d) {
        return !d.axis || d.axis === 'x';
    };

    c3_chart_internal_fn.drag = function (mouse) {
        var $$ = this, config = $$.config, main = $$.main, d3 = $$.d3;
        var sx, sy, mx, my, minX, maxX, minY, maxY;

        if ($$.hasArcType()) { return; }
        if (! config.data_selection_enabled) { return; } // do nothing if not selectable
        if (config.zoom_enabled && ! $$.zoom.altDomain) { return; } // skip if zoomable because of conflict drag dehavior
        if (!config.data_selection_multiple) { return; } // skip when single selection because drag is used for multiple selection

        sx = $$.dragStart[0];
        sy = $$.dragStart[1];
        mx = mouse[0];
        my = mouse[1];
        minX = Math.min(sx, mx);
        maxX = Math.max(sx, mx);
        minY = (config.data_selection_grouped) ? $$.margin.top : Math.min(sy, my);
        maxY = (config.data_selection_grouped) ? $$.height : Math.max(sy, my);

        main.select('.' + CLASS.dragarea)
            .attr('x', minX)
            .attr('y', minY)
            .attr('width', maxX - minX)
            .attr('height', maxY - minY);
        // TODO: binary search when multiple xs
        main.selectAll('.' + CLASS.shapes).selectAll('.' + CLASS.shape)
            .filter(function (d) { return config.data_selection_isselectable(d); })
            .each(function (d, i) {
                var shape = d3.select(this),
                    isSelected = shape.classed(CLASS.SELECTED),
                    isIncluded = shape.classed(CLASS.INCLUDED),
                    _x, _y, _w, _h, toggle, isWithin = false, box;
                if (shape.classed(CLASS.circle)) {
                    _x = shape.attr("cx") * 1;
                    _y = shape.attr("cy") * 1;
                    toggle = $$.togglePoint;
                    isWithin = minX < _x && _x < maxX && minY < _y && _y < maxY;
                }
                else if (shape.classed(CLASS.bar)) {
                    box = getPathBox(this);
                    _x = box.x;
                    _y = box.y;
                    _w = box.width;
                    _h = box.height;
                    toggle = $$.togglePath;
                    isWithin = !(maxX < _x || _x + _w < minX) && !(maxY < _y || _y + _h < minY);
                } else {
                    // line/area selection not supported yet
                    return;
                }
                if (isWithin ^ isIncluded) {
                    shape.classed(CLASS.INCLUDED, !isIncluded);
                    // TODO: included/unincluded callback here
                    shape.classed(CLASS.SELECTED, !isSelected);
                    toggle.call($$, !isSelected, shape, d, i);
                }
            });
    };

    c3_chart_internal_fn.dragstart = function (mouse) {
        var $$ = this, config = $$.config;
        if ($$.hasArcType()) { return; }
        if (! config.data_selection_enabled) { return; } // do nothing if not selectable
        $$.dragStart = mouse;
        $$.main.select('.' + CLASS.chart).append('rect')
            .attr('class', CLASS.dragarea)
            .style('opacity', 0.1);
        $$.dragging = true;
        $$.config.data_ondragstart();
    };

    c3_chart_internal_fn.dragend = function () {
        var $$ = this, config = $$.config;
        if ($$.hasArcType()) { return; }
        if (! config.data_selection_enabled) { return; } // do nothing if not selectable
        $$.main.select('.' + CLASS.dragarea)
            .transition().duration(100)
            .style('opacity', 0)
            .remove();
        $$.main.selectAll('.' + CLASS.shape)
            .classed(CLASS.INCLUDED, false);
        $$.dragging = false;
        $$.config.data_ondragend();
    };


    c3_chart_internal_fn.selectPoint = function (target, d, i) {
        var $$ = this, config = $$.config,
            cx = (config.axis_rotated ? $$.circleY : $$.circleX).bind($$),
            cy = (config.axis_rotated ? $$.circleX : $$.circleY).bind($$),
            r = $$.pointSelectR.bind($$);
        config.data_onselected.call($$.api, d, target.node());
        // add selected-circle on low layer g
        $$.main.select('.' + CLASS.selectedCircles + $$.getTargetSelectorSuffix(d.id)).selectAll('.' + CLASS.selectedCircle + '-' + i)
            .data([d])
            .enter().append('circle')
            .attr("class", function () { return $$.generateClass(CLASS.selectedCircle, i); })
            .attr("cx", cx)
            .attr("cy", cy)
            .attr("stroke", function () { return $$.color(d); })
            .attr("r", function (d) { return $$.pointSelectR(d) * 1.4; })
            .transition().duration(100)
            .attr("r", r);
    };
    c3_chart_internal_fn.unselectPoint = function (target, d, i) {
        var $$ = this;
        $$.config.data_onunselected(d, target.node());
        // remove selected-circle from low layer g
        $$.main.select('.' + CLASS.selectedCircles + $$.getTargetSelectorSuffix(d.id)).selectAll('.' + CLASS.selectedCircle + '-' + i)
            .transition().duration(100).attr('r', 0)
            .remove();
    };
    c3_chart_internal_fn.togglePoint = function (selected, target, d, i) {
        selected ? this.selectPoint(target, d, i) : this.unselectPoint(target, d, i);
    };
    c3_chart_internal_fn.selectPath = function (target, d) {
        var $$ = this;
        $$.config.data_onselected.call($$, d, target.node());
        target.transition().duration(100)
            .style("fill", function () { return $$.d3.rgb($$.color(d)).brighter(0.75); });
    };
    c3_chart_internal_fn.unselectPath = function (target, d) {
        var $$ = this;
        $$.config.data_onunselected.call($$, d, target.node());
        target.transition().duration(100)
            .style("fill", function () { return $$.color(d); });
    };
    c3_chart_internal_fn.togglePath = function (selected, target, d, i) {
        selected ? this.selectPath(target, d, i) : this.unselectPath(target, d, i);
    };
    c3_chart_internal_fn.getToggle = function (that, d) {
        var $$ = this, toggle;
        if (that.nodeName === 'circle') {
            if ($$.isStepType(d)) {
                // circle is hidden in step chart, so treat as within the click area
                toggle = function () {}; // TODO: how to select step chart?
            } else {
                toggle = $$.togglePoint;
            }
        }
        else if (that.nodeName === 'path') {
            toggle = $$.togglePath;
        }
        return toggle;
    };
    c3_chart_internal_fn.toggleShape = function (that, d, i) {
        var $$ = this, d3 = $$.d3, config = $$.config,
            shape = d3.select(that), isSelected = shape.classed(CLASS.SELECTED),
            toggle = $$.getToggle(that, d).bind($$);

        if (config.data_selection_enabled && config.data_selection_isselectable(d)) {
            if (!config.data_selection_multiple) {
                $$.main.selectAll('.' + CLASS.shapes + (config.data_selection_grouped ? $$.getTargetSelectorSuffix(d.id) : "")).selectAll('.' + CLASS.shape).each(function (d, i) {
                    var shape = d3.select(this);
                    if (shape.classed(CLASS.SELECTED)) { toggle(false, shape.classed(CLASS.SELECTED, false), d, i); }
                });
            }
            shape.classed(CLASS.SELECTED, !isSelected);
            toggle(!isSelected, shape, d, i);
        }
    };

    c3_chart_internal_fn.initBrush = function () {
        var $$ = this, d3 = $$.d3;
        $$.brush = d3.svg.brush().on("brush", function () { $$.redrawForBrush(); });
        $$.brush.update = function () {
            if ($$.context) { $$.context.select('.' + CLASS.brush).call(this); }
            return this;
        };
        $$.brush.scale = function (scale) {
            return $$.config.axis_rotated ? this.y(scale) : this.x(scale);
        };
    };
    c3_chart_internal_fn.initSubchart = function () {
        var $$ = this, config = $$.config,
            context = $$.context = $$.svg.append("g").attr("transform", $$.getTranslate('context'));

        if (!config.subchart_show) {
            context.style('visibility', 'hidden');
        }

        // Define g for chart area
        context.append('g')
            .attr("clip-path", $$.clipPathForSubchart)
            .attr('class', CLASS.chart);

        // Define g for bar chart area
        context.select('.' + CLASS.chart).append("g")
            .attr("class", CLASS.chartBars);

        // Define g for line chart area
        context.select('.' + CLASS.chart).append("g")
            .attr("class", CLASS.chartLines);

        // Add extent rect for Brush
        context.append("g")
            .attr("clip-path", $$.clipPath)
            .attr("class", CLASS.brush)
            .call($$.brush)
            .selectAll("rect")
            .attr(config.axis_rotated ? "width" : "height", config.axis_rotated ? $$.width2 : $$.height2);

        // ATTENTION: This must be called AFTER chart added
        // Add Axis
        $$.axes.subx = context.append("g")
            .attr("class", CLASS.axisX)
            .attr("transform", $$.getTranslate('subx'))
            .attr("clip-path", config.axis_rotated ? "" : $$.clipPathForXAxis);
    };
    c3_chart_internal_fn.updateTargetsForSubchart = function (targets) {
        var $$ = this, context = $$.context, config = $$.config,
            contextLineEnter, contextLineUpdate, contextBarEnter, contextBarUpdate,
            classChartBar = $$.classChartBar.bind($$),
            classBars = $$.classBars.bind($$),
            classChartLine = $$.classChartLine.bind($$),
            classLines = $$.classLines.bind($$),
            classAreas = $$.classAreas.bind($$);

        if (config.subchart_show) {
            contextBarUpdate = context.select('.' + CLASS.chartBars).selectAll('.' + CLASS.chartBar)
                .data(targets)
                .attr('class', classChartBar);
            contextBarEnter = contextBarUpdate.enter().append('g')
                .style('opacity', 0)
                .attr('class', classChartBar);
            // Bars for each data
            contextBarEnter.append('g')
                .attr("class", classBars);

            //-- Line --//
            contextLineUpdate = context.select('.' + CLASS.chartLines).selectAll('.' + CLASS.chartLine)
                .data(targets)
                .attr('class', classChartLine);
            contextLineEnter = contextLineUpdate.enter().append('g')
                .style('opacity', 0)
                .attr('class', classChartLine);
            // Lines for each data
            contextLineEnter.append("g")
                .attr("class", classLines);
            // Area
            contextLineEnter.append("g")
                .attr("class", classAreas);
        }
    };
    c3_chart_internal_fn.redrawSubchart = function (withSubchart, transitions, duration, durationForExit, areaIndices, barIndices, lineIndices) {
        var $$ = this, d3 = $$.d3, context = $$.context, config = $$.config,
            contextLine,  contextArea, contextBar, drawAreaOnSub, drawBarOnSub, drawLineOnSub,
            barData = $$.barData.bind($$),
            lineData = $$.lineData.bind($$),
            classBar = $$.classBar.bind($$),
            classLine = $$.classLine.bind($$),
            classArea = $$.classArea.bind($$),
            initialOpacity = $$.initialOpacity.bind($$);

        // subchart
        if (config.subchart_show) {
            // reflect main chart to extent on subchart if zoomed
            if (d3.event && d3.event.type === 'zoom') {
                $$.brush.extent($$.x.orgDomain()).update();
            }
            // update subchart elements if needed
            if (withSubchart) {

                // rotate tick text if needed
                if (!config.axis_rotated && config.axis_x_tick_rotate) {
                    $$.rotateTickText($$.axes.subx, transitions.axisSubX, config.axis_x_tick_rotate);
                }

                // extent rect
                if (!$$.brush.empty()) {
                    $$.brush.extent($$.x.orgDomain()).update();
                }
                // setup drawer - MEMO: this must be called after axis updated
                drawAreaOnSub = $$.generateDrawArea(areaIndices, true);
                drawBarOnSub = $$.generateDrawBar(barIndices, true);
                drawLineOnSub = $$.generateDrawLine(lineIndices, true);
                // bars
                contextBar = context.selectAll('.' + CLASS.bars).selectAll('.' + CLASS.bar)
                    .data(barData);
                contextBar.enter().append('path')
                    .attr("class", classBar)
                    .style("stroke", 'none')
                    .style("fill", $$.color);
                contextBar
                    .style("opacity", initialOpacity)
                    .transition().duration(duration)
                    .attr('d', drawBarOnSub)
                    .style('opacity', 1);
                contextBar.exit().transition().duration(duration)
                    .style('opacity', 0)
                    .remove();
                // lines
                contextLine = context.selectAll('.' + CLASS.lines).selectAll('.' + CLASS.line)
                    .data(lineData);
                contextLine.enter().append('path')
                    .attr('class', classLine)
                    .style('stroke', $$.color);
                contextLine
                    .style("opacity", initialOpacity)
                    .transition().duration(duration)
                    .attr("d", drawLineOnSub)
                    .style('opacity', 1);
                contextLine.exit().transition().duration(duration)
                    .style('opacity', 0)
                    .remove();
                // area
                contextArea = context.selectAll('.' + CLASS.areas).selectAll('.' + CLASS.area)
                    .data(lineData);
                contextArea.enter().append('path')
                    .attr("class", classArea)
                    .style("fill", $$.color)
                    .style("opacity", function () { $$.orgAreaOpacity = +d3.select(this).style('opacity'); return 0; });
                contextArea
                    .style("opacity", 0)
                    .transition().duration(duration)
                    .attr("d", drawAreaOnSub)
                    .style("fill", $$.color)
                    .style("opacity", $$.orgAreaOpacity);
                contextArea.exit().transition().duration(durationForExit)
                    .style('opacity', 0)
                    .remove();
            }
        }
    };
    c3_chart_internal_fn.redrawForBrush = function () {
        var $$ = this, x = $$.x;
        $$.redraw({
            withTransition: false,
            withY: $$.config.zoom_rescale,
            withSubchart: false,
            withUpdateXDomain: true
        });
        $$.config.subchart_onbrush.call($$.api, x.orgDomain());
    };
    c3_chart_internal_fn.transformContext = function (withTransition, transitions) {
        var $$ = this, subXAxis;
        if (transitions && transitions.axisSubX) {
            subXAxis = transitions.axisSubX;
        } else {
            subXAxis = $$.context.select('.' + CLASS.axisX);
            if (withTransition) { subXAxis = subXAxis.transition(); }
        }
        $$.context.attr("transform", $$.getTranslate('context'));
        subXAxis.attr("transform", $$.getTranslate('subx'));
    };
    c3_chart_internal_fn.getDefaultExtent = function () {
        var $$ = this, config = $$.config,
            extent = isFunction(config.axis_x_extent) ? config.axis_x_extent($$.getXDomain($$.data.targets)) : config.axis_x_extent;
        if ($$.isTimeSeries()) {
            extent = [$$.parseDate(extent[0]), $$.parseDate(extent[1])];
        }
        return extent;
    };

    c3_chart_internal_fn.initZoom = function () {
        var $$ = this, d3 = $$.d3, config = $$.config, startEvent;

        $$.zoom = d3.behavior.zoom()
            .on("zoomstart", function () {
                startEvent = d3.event.sourceEvent;
                $$.zoom.altDomain = d3.event.sourceEvent.altKey ? $$.x.orgDomain() : null;
                config.zoom_onzoomstart.call($$.api, d3.event.sourceEvent);
            })
            .on("zoom", function () {
                $$.redrawForZoom.call($$);
            })
            .on('zoomend', function () {
                var event = d3.event.sourceEvent;
                // if click, do nothing. otherwise, click interaction will be canceled.
                if (event && startEvent.x === event.x && startEvent.y === event.y) {
                    return;
                }
                $$.redrawEventRect();
                $$.updateZoom();
                config.zoom_onzoomend.call($$.api, $$.x.orgDomain());
            });
        $$.zoom.scale = function (scale) {
            return config.axis_rotated ? this.y(scale) : this.x(scale);
        };
        $$.zoom.orgScaleExtent = function () {
            var extent = config.zoom_extent ? config.zoom_extent : [1, 10];
            return [extent[0], Math.max($$.getMaxDataCount() / extent[1], extent[1])];
        };
        $$.zoom.updateScaleExtent = function () {
            var ratio = diffDomain($$.x.orgDomain()) / diffDomain($$.orgXDomain),
                extent = this.orgScaleExtent();
            this.scaleExtent([extent[0] * ratio, extent[1] * ratio]);
            return this;
        };
    };
    c3_chart_internal_fn.updateZoom = function () {
        var $$ = this, z = $$.config.zoom_enabled ? $$.zoom : function () {};
        $$.main.select('.' + CLASS.zoomRect).call(z).on("dblclick.zoom", null);
        $$.main.selectAll('.' + CLASS.eventRect).call(z).on("dblclick.zoom", null);
    };
    c3_chart_internal_fn.redrawForZoom = function () {
        var $$ = this, d3 = $$.d3, config = $$.config, zoom = $$.zoom, x = $$.x;
        if (!config.zoom_enabled) {
            return;
        }
        if ($$.filterTargetsToShow($$.data.targets).length === 0) {
            return;
        }
        if (d3.event.sourceEvent.type === 'mousemove' && zoom.altDomain) {
            x.domain(zoom.altDomain);
            zoom.scale(x).updateScaleExtent();
            return;
        }
        if ($$.isCategorized() && x.orgDomain()[0] === $$.orgXDomain[0]) {
            x.domain([$$.orgXDomain[0] - 1e-10, x.orgDomain()[1]]);
        }
        $$.redraw({
            withTransition: false,
            withY: config.zoom_rescale,
            withSubchart: false,
            withEventRect: false
        });
        if (d3.event.sourceEvent.type === 'mousemove') {
            $$.cancelClick = true;
        }
        config.zoom_onzoom.call($$.api, x.orgDomain());
    };

    c3_chart_internal_fn.generateColor = function () {
        var $$ = this, config = $$.config, d3 = $$.d3,
            colors = config.data_colors,
            pattern = notEmpty(config.color_pattern) ? config.color_pattern : d3.scale.category10().range(),
            callback = config.data_color,
            ids = [];

        return function (d) {
            var id = d.id || d, color;

            // if callback function is provided
            if (colors[id] instanceof Function) {
                color = colors[id](d);
            }
            // if specified, choose that color
            else if (colors[id]) {
                color = colors[id];
            }
            // if not specified, choose from pattern
            else {
                if (ids.indexOf(id) < 0) { ids.push(id); }
                color = pattern[ids.indexOf(id) % pattern.length];
                colors[id] = color;
            }
            return callback instanceof Function ? callback(color, d) : color;
        };
    };
    c3_chart_internal_fn.generateLevelColor = function () {
        var $$ = this, config = $$.config,
            colors = config.color_pattern,
            threshold = config.color_threshold,
            asValue = threshold.unit === 'value',
            values = threshold.values && threshold.values.length ? threshold.values : [],
            max = threshold.max || 100;
        return notEmpty(config.color_threshold) ? function (value) {
            var i, v, color = colors[colors.length - 1];
            for (i = 0; i < values.length; i++) {
                v = asValue ? value : (value * 100 / max);
                if (v < values[i]) {
                    color = colors[i];
                    break;
                }
            }
            return color;
        } : null;
    };

    c3_chart_internal_fn.getYFormat = function (forArc) {
        var $$ = this,
            formatForY = forArc && !$$.hasType('gauge') ? $$.defaultArcValueFormat : $$.yFormat,
            formatForY2 = forArc && !$$.hasType('gauge') ? $$.defaultArcValueFormat : $$.y2Format;
        return function (v, ratio, id) {
            var format = $$.getAxisId(id) === 'y2' ? formatForY2 : formatForY;
            return format.call($$, v, ratio);
        };
    };
    c3_chart_internal_fn.yFormat = function (v) {
        var $$ = this, config = $$.config,
            format = config.axis_y_tick_format ? config.axis_y_tick_format : $$.defaultValueFormat;
        return format(v);
    };
    c3_chart_internal_fn.y2Format = function (v) {
        var $$ = this, config = $$.config,
            format = config.axis_y2_tick_format ? config.axis_y2_tick_format : $$.defaultValueFormat;
        return format(v);
    };
    c3_chart_internal_fn.defaultValueFormat = function (v) {
        return isValue(v) ? +v : "";
    };
    c3_chart_internal_fn.defaultArcValueFormat = function (v, ratio) {
        return (ratio * 100).toFixed(1) + '%';
    };
    c3_chart_internal_fn.formatByAxisId = function (axisId) {
        var $$ = this, data_labels = $$.config.data_labels,
            format = function (v) { return isValue(v) ? +v : ""; };
        // find format according to axis id
        if (typeof data_labels.format === 'function') {
            format = data_labels.format;
        } else if (typeof data_labels.format === 'object') {
            if (data_labels.format[axisId]) {
                format = data_labels.format[axisId];
            }
        }
        return format;
    };

    c3_chart_internal_fn.hasCaches = function (ids) {
        for (var i = 0; i < ids.length; i++) {
            if (! (ids[i] in this.cache)) { return false; }
        }
        return true;
    };
    c3_chart_internal_fn.addCache = function (id, target) {
        this.cache[id] = this.cloneTarget(target);
    };
    c3_chart_internal_fn.getCaches = function (ids) {
        var targets = [], i;
        for (i = 0; i < ids.length; i++) {
            if (ids[i] in this.cache) { targets.push(this.cloneTarget(this.cache[ids[i]])); }
        }
        return targets;
    };

    var CLASS = c3_chart_internal_fn.CLASS = {
        target: 'c3-target',
        chart: 'c3-chart',
        chartLine: 'c3-chart-line',
        chartLines: 'c3-chart-lines',
        chartBar: 'c3-chart-bar',
        chartBars: 'c3-chart-bars',
        chartText: 'c3-chart-text',
        chartTexts: 'c3-chart-texts',
        chartArc: 'c3-chart-arc',
        chartArcs: 'c3-chart-arcs',
        chartArcsTitle: 'c3-chart-arcs-title',
        chartArcsBackground: 'c3-chart-arcs-background',
        chartArcsGaugeUnit: 'c3-chart-arcs-gauge-unit',
        chartArcsGaugeMax: 'c3-chart-arcs-gauge-max',
        chartArcsGaugeMin: 'c3-chart-arcs-gauge-min',
        selectedCircle: 'c3-selected-circle',
        selectedCircles: 'c3-selected-circles',
        eventRect: 'c3-event-rect',
        eventRects: 'c3-event-rects',
        eventRectsSingle: 'c3-event-rects-single',
        eventRectsMultiple: 'c3-event-rects-multiple',
        zoomRect: 'c3-zoom-rect',
        brush: 'c3-brush',
        focused: 'c3-focused',
        defocused: 'c3-defocused',
        region: 'c3-region',
        regions: 'c3-regions',
        tooltipContainer: 'c3-tooltip-container',
        tooltip: 'c3-tooltip',
        tooltipName: 'c3-tooltip-name',
        shape: 'c3-shape',
        shapes: 'c3-shapes',
        line: 'c3-line',
        lines: 'c3-lines',
        bar: 'c3-bar',
        bars: 'c3-bars',
        circle: 'c3-circle',
        circles: 'c3-circles',
        arc: 'c3-arc',
        arcs: 'c3-arcs',
        area: 'c3-area',
        areas: 'c3-areas',
        empty: 'c3-empty',
        text: 'c3-text',
        texts: 'c3-texts',
        gaugeValue: 'c3-gauge-value',
        grid: 'c3-grid',
        gridLines: 'c3-grid-lines',
        xgrid: 'c3-xgrid',
        xgrids: 'c3-xgrids',
        xgridLine: 'c3-xgrid-line',
        xgridLines: 'c3-xgrid-lines',
        xgridFocus: 'c3-xgrid-focus',
        ygrid: 'c3-ygrid',
        ygrids: 'c3-ygrids',
        ygridLine: 'c3-ygrid-line',
        ygridLines: 'c3-ygrid-lines',
        axis: 'c3-axis',
        axisX: 'c3-axis-x',
        axisXLabel: 'c3-axis-x-label',
        axisY: 'c3-axis-y',
        axisYLabel: 'c3-axis-y-label',
        axisY2: 'c3-axis-y2',
        axisY2Label: 'c3-axis-y2-label',
        legendBackground: 'c3-legend-background',
        legendItem: 'c3-legend-item',
        legendItemEvent: 'c3-legend-item-event',
        legendItemTile: 'c3-legend-item-tile',
        legendItemHidden: 'c3-legend-item-hidden',
        legendItemFocused: 'c3-legend-item-focused',
        dragarea: 'c3-dragarea',
        EXPANDED: '_expanded_',
        SELECTED: '_selected_',
        INCLUDED: '_included_'
    };
    c3_chart_internal_fn.generateClass = function (prefix, targetId) {
        return " " + prefix + " " + prefix + this.getTargetSelectorSuffix(targetId);
    };
    c3_chart_internal_fn.classText = function (d) {
        return this.generateClass(CLASS.text, d.index);
    };
    c3_chart_internal_fn.classTexts = function (d) {
        return this.generateClass(CLASS.texts, d.id);
    };
    c3_chart_internal_fn.classShape = function (d) {
        return this.generateClass(CLASS.shape, d.index);
    };
    c3_chart_internal_fn.classShapes = function (d) {
        return this.generateClass(CLASS.shapes, d.id);
    };
    c3_chart_internal_fn.classLine = function (d) {
        return this.classShape(d) + this.generateClass(CLASS.line, d.id);
    };
    c3_chart_internal_fn.classLines = function (d) {
        return this.classShapes(d) + this.generateClass(CLASS.lines, d.id);
    };
    c3_chart_internal_fn.classCircle = function (d) {
        return this.classShape(d) + this.generateClass(CLASS.circle, d.index);
    };
    c3_chart_internal_fn.classCircles = function (d) {
        return this.classShapes(d) + this.generateClass(CLASS.circles, d.id);
    };
    c3_chart_internal_fn.classBar = function (d) {
        return this.classShape(d) + this.generateClass(CLASS.bar, d.index);
    };
    c3_chart_internal_fn.classBars = function (d) {
        return this.classShapes(d) + this.generateClass(CLASS.bars, d.id);
    };
    c3_chart_internal_fn.classArc = function (d) {
        return this.classShape(d.data) + this.generateClass(CLASS.arc, d.data.id);
    };
    c3_chart_internal_fn.classArcs = function (d) {
        return this.classShapes(d.data) + this.generateClass(CLASS.arcs, d.data.id);
    };
    c3_chart_internal_fn.classArea = function (d) {
        return this.classShape(d) + this.generateClass(CLASS.area, d.id);
    };
    c3_chart_internal_fn.classAreas = function (d) {
        return this.classShapes(d) + this.generateClass(CLASS.areas, d.id);
    };
    c3_chart_internal_fn.classRegion = function (d, i) {
        return this.generateClass(CLASS.region, i) + ' ' + ('class' in d ? d['class'] : '');
    };
    c3_chart_internal_fn.classEvent = function (d) {
        return this.generateClass(CLASS.eventRect, d.index);
    };
    c3_chart_internal_fn.classTarget = function (id) {
        var $$ = this;
        var additionalClassSuffix = $$.config.data_classes[id], additionalClass = '';
        if (additionalClassSuffix) {
            additionalClass = ' ' + CLASS.target + '-' + additionalClassSuffix;
        }
        return $$.generateClass(CLASS.target, id) + additionalClass;
    };
    c3_chart_internal_fn.classFocus = function (d) {
        return this.classFocused(d) + this.classDefocused(d);
    };
    c3_chart_internal_fn.classFocused = function (d) {
        return ' ' + (this.focusedTargetIds.indexOf(d.id) >= 0 ? CLASS.focused : '');
    };
    c3_chart_internal_fn.classDefocused = function (d) {
        return ' ' + (this.defocusedTargetIds.indexOf(d.id) >= 0 ? CLASS.defocused : '');
    };
    c3_chart_internal_fn.classChartText = function (d) {
        return CLASS.chartText + this.classTarget(d.id);
    };
    c3_chart_internal_fn.classChartLine = function (d) {
        return CLASS.chartLine + this.classTarget(d.id);
    };
    c3_chart_internal_fn.classChartBar = function (d) {
        return CLASS.chartBar + this.classTarget(d.id);
    };
    c3_chart_internal_fn.classChartArc = function (d) {
        return CLASS.chartArc + this.classTarget(d.data.id);
    };
    c3_chart_internal_fn.getTargetSelectorSuffix = function (targetId) {
        return targetId || targetId === 0 ? '-' + (targetId.replace ? targetId.replace(/([^a-zA-Z0-9-_])/g, '-') : targetId) : '';
    };
    c3_chart_internal_fn.selectorTarget = function (id, prefix) {
        return (prefix || '') + '.' + CLASS.target + this.getTargetSelectorSuffix(id);
    };
    c3_chart_internal_fn.selectorTargets = function (ids, prefix) {
        var $$ = this;
        ids = ids || [];
        return ids.length ? ids.map(function (id) { return $$.selectorTarget(id, prefix); }) : null;
    };
    c3_chart_internal_fn.selectorLegend = function (id) {
        return '.' + CLASS.legendItem + this.getTargetSelectorSuffix(id);
    };
    c3_chart_internal_fn.selectorLegends = function (ids) {
        var $$ = this;
        return ids.length ? ids.map(function (id) { return $$.selectorLegend(id); }) : null;
    };

    var isValue = c3_chart_internal_fn.isValue = function (v) {
        return v || v === 0;
    },
        isFunction = c3_chart_internal_fn.isFunction = function (o) {
            return typeof o === 'function';
        },
        isString = c3_chart_internal_fn.isString = function (o) {
            return typeof o === 'string';
        },
        isUndefined = c3_chart_internal_fn.isUndefined = function (v) {
            return typeof v === 'undefined';
        },
        isDefined = c3_chart_internal_fn.isDefined = function (v) {
            return typeof v !== 'undefined';
        },
        ceil10 = c3_chart_internal_fn.ceil10 = function (v) {
            return Math.ceil(v / 10) * 10;
        },
        asHalfPixel = c3_chart_internal_fn.asHalfPixel = function (n) {
            return Math.ceil(n) + 0.5;
        },
        diffDomain = c3_chart_internal_fn.diffDomain = function (d) {
            return d[1] - d[0];
        },
        isEmpty = c3_chart_internal_fn.isEmpty = function (o) {
            return !o || (isString(o) && o.length === 0) || (typeof o === 'object' && Object.keys(o).length === 0);
        },
        notEmpty = c3_chart_internal_fn.notEmpty = function (o) {
            return Object.keys(o).length > 0;
        },
        getOption = c3_chart_internal_fn.getOption = function (options, key, defaultValue) {
            return isDefined(options[key]) ? options[key] : defaultValue;
        },
        hasValue = c3_chart_internal_fn.hasValue = function (dict, value) {
            var found = false;
            Object.keys(dict).forEach(function (key) {
                if (dict[key] === value) { found = true; }
            });
            return found;
        },
        getPathBox = c3_chart_internal_fn.getPathBox = function (path) {
            var box = path.getBoundingClientRect(),
                items = [path.pathSegList.getItem(0), path.pathSegList.getItem(1)],
                minX = items[0].x, minY = Math.min(items[0].y, items[1].y);
            return {x: minX, y: minY, width: box.width, height: box.height};
        };

    c3_chart_fn.focus = function (targetIds) {
        var $$ = this.internal, candidates;

        targetIds = $$.mapToTargetIds(targetIds);
        candidates = $$.svg.selectAll($$.selectorTargets(targetIds.filter($$.isTargetToShow, $$))),

        this.revert();
        this.defocus();
        candidates.classed(CLASS.focused, true).classed(CLASS.defocused, false);
        if ($$.hasArcType()) {
            $$.expandArc(targetIds);
        }
        $$.toggleFocusLegend(targetIds, true);

        $$.focusedTargetIds = targetIds;
        $$.defocusedTargetIds = $$.defocusedTargetIds.filter(function (id) {
            return targetIds.indexOf(id) < 0;
        });
    };

    c3_chart_fn.defocus = function (targetIds) {
        var $$ = this.internal, candidates;

        targetIds = $$.mapToTargetIds(targetIds);
        candidates = $$.svg.selectAll($$.selectorTargets(targetIds.filter($$.isTargetToShow, $$))),

        this.revert();
        candidates.classed(CLASS.focused, false).classed(CLASS.defocused, true);
        if ($$.hasArcType()) {
            $$.unexpandArc(targetIds);
        }
        $$.toggleFocusLegend(targetIds, false);

        $$.focusedTargetIds = $$.focusedTargetIds.filter(function (id) {
            return targetIds.indexOf(id) < 0;
        });
        $$.defocusedTargetIds = targetIds;
    };

    c3_chart_fn.revert = function (targetIds) {
        var $$ = this.internal, candidates;

        targetIds = $$.mapToTargetIds(targetIds);
        candidates = $$.svg.selectAll($$.selectorTargets(targetIds)); // should be for all targets

        candidates.classed(CLASS.focused, false).classed(CLASS.defocused, false);
        if ($$.hasArcType()) {
            $$.unexpandArc(targetIds);
        }
        $$.revertLegend();

        $$.focusedTargetIds = [];
        $$.defocusedTargetIds = [];
    };

    c3_chart_fn.show = function (targetIds, options) {
        var $$ = this.internal, targets;

        targetIds = $$.mapToTargetIds(targetIds);
        options = options || {};

        $$.removeHiddenTargetIds(targetIds);
        targets = $$.svg.selectAll($$.selectorTargets(targetIds));

        targets.transition()
            .style('opacity', 1, 'important')
            .call($$.endall, function () {
                targets.style('opacity', null).style('opacity', 1);
            });

        if (options.withLegend) {
            $$.showLegend(targetIds);
        }

        $$.redraw({withUpdateOrgXDomain: true, withUpdateXDomain: true, withLegend: true});
    };

    c3_chart_fn.hide = function (targetIds, options) {
        var $$ = this.internal, targets;

        targetIds = $$.mapToTargetIds(targetIds);
        options = options || {};

        $$.addHiddenTargetIds(targetIds);
        targets = $$.svg.selectAll($$.selectorTargets(targetIds));

        targets.transition()
            .style('opacity', 0, 'important')
            .call($$.endall, function () {
                targets.style('opacity', null).style('opacity', 0);
            });

        if (options.withLegend) {
            $$.hideLegend(targetIds);
        }

        $$.redraw({withUpdateOrgXDomain: true, withUpdateXDomain: true, withLegend: true});
    };

    c3_chart_fn.toggle = function (targetId) {
        var $$ = this.internal;
        $$.isTargetToShow(targetId) ? this.hide(targetId) : this.show(targetId);
    };

    c3_chart_fn.zoom = function (domain) {
        var $$ = this.internal;
        if (domain) {
            if ($$.isTimeSeries()) {
                domain = domain.map(function (x) { return $$.parseDate(x); });
            }
            $$.brush.extent(domain);
            $$.redraw({withUpdateXDomain: true});
        }
        return $$.brush.extent();
    };
    c3_chart_fn.zoom.enable = function (enabled) {
        var $$ = this.internal;
        $$.config.zoom_enabled = enabled;
        $$.updateAndRedraw();
    };
    c3_chart_fn.unzoom = function () {
        var $$ = this.internal;
        $$.brush.clear().update();
        $$.redraw({withUpdateXDomain: true});
    };

    c3_chart_fn.load = function (args) {
        var $$ = this.internal, config = $$.config;
        // update xs if specified
        if (args.xs) {
            $$.addXs(args.xs);
        }
        // update classes if exists
        if ('classes' in args) {
            Object.keys(args.classes).forEach(function (id) {
                config.data_classes[id] = args.classes[id];
            });
        }
        // update categories if exists
        if ('categories' in args && $$.isCategorized()) {
            config.axis_x_categories = args.categories;
        }
        // update axes if exists
        if ('axes' in args) {
            Object.keys(args.axes).forEach(function (id) {
                config.data_axes[id] = args.axes[id];
            });
        }
        // use cache if exists
        if ('cacheIds' in args && $$.hasCaches(args.cacheIds)) {
            $$.load($$.getCaches(args.cacheIds), args.done);
            return;
        }
        // unload if needed
        if ('unload' in args) {
            // TODO: do not unload if target will load (included in url/rows/columns)
            $$.unload($$.mapToTargetIds((typeof args.unload === 'boolean' && args.unload) ? null : args.unload), function () {
                $$.loadFromArgs(args);
            });
        } else {
            $$.loadFromArgs(args);
        }
    };

    c3_chart_fn.unload = function (args) {
        var $$ = this.internal;
        args = args || {};
        if (args instanceof Array) {
            args = {ids: args};
        } else if (typeof args === 'string') {
            args = {ids: [args]};
        }
        $$.unload($$.mapToTargetIds(args.ids), function () {
            $$.redraw({withUpdateOrgXDomain: true, withUpdateXDomain: true, withLegend: true});
            if (args.done) { args.done(); }
        });
    };

    c3_chart_fn.flow = function (args) {
        var $$ = this.internal,
            targets, data, notfoundIds = [], orgDataCount = $$.getMaxDataCount(),
            dataCount, domain, baseTarget, baseValue, length = 0, tail = 0, diff, to;

        if (args.json) {
            data = $$.convertJsonToData(args.json, args.keys);
        }
        else if (args.rows) {
            data = $$.convertRowsToData(args.rows);
        }
        else if (args.columns) {
            data = $$.convertColumnsToData(args.columns);
        }
        else {
            return;
        }
        targets = $$.convertDataToTargets(data, true);

        // Update/Add data
        $$.data.targets.forEach(function (t) {
            var found = false, i, j;
            for (i = 0; i < targets.length; i++) {
                if (t.id === targets[i].id) {
                    found = true;

                    if (t.values[t.values.length - 1]) {
                        tail = t.values[t.values.length - 1].index + 1;
                    }
                    length = targets[i].values.length;

                    for (j = 0; j < length; j++) {
                        targets[i].values[j].index = tail + j;
                        if (!$$.isTimeSeries()) {
                            targets[i].values[j].x = tail + j;
                        }
                    }
                    t.values = t.values.concat(targets[i].values);

                    targets.splice(i, 1);
                    break;
                }
            }
            if (!found) { notfoundIds.push(t.id); }
        });

        // Append null for not found targets
        $$.data.targets.forEach(function (t) {
            var i, j;
            for (i = 0; i < notfoundIds.length; i++) {
                if (t.id === notfoundIds[i]) {
                    tail = t.values[t.values.length - 1].index + 1;
                    for (j = 0; j < length; j++) {
                        t.values.push({
                            id: t.id,
                            index: tail + j,
                            x: $$.isTimeSeries() ? $$.getOtherTargetX(tail + j) : tail + j,
                            value: null
                        });
                    }
                }
            }
        });

        // Generate null values for new target
        if ($$.data.targets.length) {
            targets.forEach(function (t) {
                var i, missing = [];
                for (i = $$.data.targets[0].values[0].index; i < tail; i++) {
                    missing.push({
                        id: t.id,
                        index: i,
                        x: $$.isTimeSeries() ? $$.getOtherTargetX(i) : i,
                        value: null
                    });
                }
                t.values.forEach(function (v) {
                    v.index += tail;
                    if (!$$.isTimeSeries()) {
                        v.x += tail;
                    }
                });
                t.values = missing.concat(t.values);
            });
        }
        $$.data.targets = $$.data.targets.concat(targets); // add remained

        // check data count because behavior needs to change when it's only one
        dataCount = $$.getMaxDataCount();
        baseTarget = $$.data.targets[0];
        baseValue = baseTarget.values[0];

        // Update length to flow if needed
        if (isDefined(args.to)) {
            length = 0;
            to = $$.isTimeSeries() ? $$.parseDate(args.to) : args.to;
            baseTarget.values.forEach(function (v) {
                if (v.x < to) { length++; }
            });
        } else if (isDefined(args.length)) {
            length = args.length;
        }

        // If only one data, update the domain to flow from left edge of the chart
        if (!orgDataCount) {
            if ($$.isTimeSeries()) {
                if (baseTarget.values.length > 1) {
                    diff = baseTarget.values[baseTarget.values.length - 1].x - baseValue.x;
                } else {
                    diff = baseValue.x - $$.getXDomain($$.data.targets)[0];
                }
            } else {
                diff = 1;
            }
            domain = [baseValue.x - diff, baseValue.x];
            $$.updateXDomain(null, true, true, false, domain);
        } else if (orgDataCount === 1) {
            if ($$.isTimeSeries()) {
                diff = (baseTarget.values[baseTarget.values.length - 1].x - baseValue.x) / 2;
                domain = [new Date(+baseValue.x - diff), new Date(+baseValue.x + diff)];
                $$.updateXDomain(null, true, true, false, domain);
            }
        }

        // Set targets
        $$.updateTargets($$.data.targets);

        // Redraw with new targets
        $$.redraw({
            flow: {
                index: baseValue.index,
                length: length,
                duration: isValue(args.duration) ? args.duration : $$.config.transition_duration,
                done: args.done,
                orgDataCount: orgDataCount,
            },
            withLegend: true,
            withTransition: orgDataCount > 1,
            withTrimXDomain: false
        });
    };

    c3_chart_internal_fn.generateFlow = function (args) {
        var $$ = this, config = $$.config, d3 = $$.d3;

        return function () {
            var targets = args.targets,
                flow = args.flow,
                drawBar = args.drawBar,
                drawLine = args.drawLine,
                drawArea = args.drawArea,
                cx = args.cx,
                cy = args.cy,
                xv = args.xv,
                xForText = args.xForText,
                yForText = args.yForText,
                duration = args.duration;

            var translateX, scaleX = 1, transform,
                flowIndex = flow.index,
                flowLength = flow.length,
                flowStart = $$.getValueOnIndex($$.data.targets[0].values, flowIndex),
                flowEnd = $$.getValueOnIndex($$.data.targets[0].values, flowIndex + flowLength),
                orgDomain = $$.x.domain(), domain,
                durationForFlow = flow.duration || duration,
                done = flow.done || function () {},
                wait = $$.generateWait();

            var xgrid = $$.xgrid || d3.selectAll([]),
                xgridLines = $$.xgridLines || d3.selectAll([]),
                mainRegion = $$.mainRegion || d3.selectAll([]),
                mainText = $$.mainText || d3.selectAll([]),
                mainBar = $$.mainBar || d3.selectAll([]),
                mainLine = $$.mainLine || d3.selectAll([]),
                mainArea = $$.mainArea || d3.selectAll([]),
                mainCircle = $$.mainCircle || d3.selectAll([]);

            // set flag
            $$.flowing = true;

            // remove head data after rendered
            $$.data.targets.forEach(function (d) {
                d.values.splice(0, flowLength);
            });

            // update x domain to generate axis elements for flow
            domain = $$.updateXDomain(targets, true, true);
            // update elements related to x scale
            if ($$.updateXGrid) { $$.updateXGrid(true); }

            // generate transform to flow
            if (!flow.orgDataCount) { // if empty
                if ($$.data.targets[0].values.length !== 1) {
                    translateX = $$.x(orgDomain[0]) - $$.x(domain[0]);
                } else {
                    if ($$.isTimeSeries()) {
                        flowStart = $$.getValueOnIndex($$.data.targets[0].values, 0);
                        flowEnd = $$.getValueOnIndex($$.data.targets[0].values, $$.data.targets[0].values.length - 1);
                        translateX = $$.x(flowStart.x) - $$.x(flowEnd.x);
                    } else {
                        translateX = diffDomain(domain) / 2;
                    }
                }
            } else if (flow.orgDataCount === 1 || flowStart.x === flowEnd.x) {
                translateX = $$.x(orgDomain[0]) - $$.x(domain[0]);
            } else {
                if ($$.isTimeSeries()) {
                    translateX = ($$.x(orgDomain[0]) - $$.x(domain[0]));
                } else {
                    translateX = ($$.x(flowStart.x) - $$.x(flowEnd.x));
                }
            }
            scaleX = (diffDomain(orgDomain) / diffDomain(domain));
            transform = 'translate(' + translateX + ',0) scale(' + scaleX + ',1)';

            // hide tooltip
            $$.hideXGridFocus();
            $$.hideTooltip();

            d3.transition().ease('linear').duration(durationForFlow).each(function () {
                wait.add($$.axes.x.transition().call($$.xAxis));
                wait.add(mainBar.transition().attr('transform', transform));
                wait.add(mainLine.transition().attr('transform', transform));
                wait.add(mainArea.transition().attr('transform', transform));
                wait.add(mainCircle.transition().attr('transform', transform));
                wait.add(mainText.transition().attr('transform', transform));
                wait.add(mainRegion.filter($$.isRegionOnX).transition().attr('transform', transform));
                wait.add(xgrid.transition().attr('transform', transform));
                wait.add(xgridLines.transition().attr('transform', transform));
            })
            .call(wait, function () {
                var i, shapes = [], texts = [], eventRects = [];

                // remove flowed elements
                if (flowLength) {
                    for (i = 0; i < flowLength; i++) {
                        shapes.push('.' + CLASS.shape + '-' + (flowIndex + i));
                        texts.push('.' + CLASS.text + '-' + (flowIndex + i));
                        eventRects.push('.' + CLASS.eventRect + '-' + (flowIndex + i));
                    }
                    $$.svg.selectAll('.' + CLASS.shapes).selectAll(shapes).remove();
                    $$.svg.selectAll('.' + CLASS.texts).selectAll(texts).remove();
                    $$.svg.selectAll('.' + CLASS.eventRects).selectAll(eventRects).remove();
                    $$.svg.select('.' + CLASS.xgrid).remove();
                }

                // draw again for removing flowed elements and reverting attr
                xgrid
                    .attr('transform', null)
                    .attr($$.xgridAttr);
                xgridLines
                    .attr('transform', null);
                xgridLines.select('line')
                    .attr("x1", config.axis_rotated ? 0 : xv)
                    .attr("x2", config.axis_rotated ? $$.width : xv);
                xgridLines.select('text')
                    .attr("x", config.axis_rotated ? $$.width : 0)
                    .attr("y", xv);
                mainBar
                    .attr('transform', null)
                    .attr("d", drawBar);
                mainLine
                    .attr('transform', null)
                    .attr("d", drawLine);
                mainArea
                    .attr('transform', null)
                    .attr("d", drawArea);
                mainCircle
                    .attr('transform', null)
                    .attr("cx", cx)
                    .attr("cy", cy);
                mainText
                    .attr('transform', null)
                    .attr('x', xForText)
                    .attr('y', yForText)
                    .style('fill-opacity', $$.opacityForText.bind($$));
                mainRegion
                    .attr('transform', null);
                mainRegion.select('rect').filter($$.isRegionOnX)
                    .attr("x", $$.regionX.bind($$))
                    .attr("width", $$.regionWidth.bind($$));

                if (config.interaction_enabled) {
                    $$.redrawEventRect();
                }

                // callback for end of flow
                done();

                $$.flowing = false;
            });
        };
    };

    c3_chart_fn.selected = function (targetId) {
        var $$ = this.internal, d3 = $$.d3;
        return d3.merge(
            $$.main.selectAll('.' + CLASS.shapes + $$.getTargetSelectorSuffix(targetId)).selectAll('.' + CLASS.shape)
                .filter(function () { return d3.select(this).classed(CLASS.SELECTED); })
                .map(function (d) { return d.map(function (d) { var data = d.__data__; return data.data ? data.data : data; }); })
        );
    };
    c3_chart_fn.select = function (ids, indices, resetOther) {
        var $$ = this.internal, d3 = $$.d3, config = $$.config;
        if (! config.data_selection_enabled) { return; }
        $$.main.selectAll('.' + CLASS.shapes).selectAll('.' + CLASS.shape).each(function (d, i) {
            var shape = d3.select(this), id = d.data ? d.data.id : d.id,
                toggle = $$.getToggle(this, d).bind($$),
                isTargetId = config.data_selection_grouped || !ids || ids.indexOf(id) >= 0,
                isTargetIndex = !indices || indices.indexOf(i) >= 0,
                isSelected = shape.classed(CLASS.SELECTED);
            // line/area selection not supported yet
            if (shape.classed(CLASS.line) || shape.classed(CLASS.area)) {
                return;
            }
            if (isTargetId && isTargetIndex) {
                if (config.data_selection_isselectable(d) && !isSelected) {
                    toggle(true, shape.classed(CLASS.SELECTED, true), d, i);
                }
            } else if (isDefined(resetOther) && resetOther) {
                if (isSelected) {
                    toggle(false, shape.classed(CLASS.SELECTED, false), d, i);
                }
            }
        });
    };
    c3_chart_fn.unselect = function (ids, indices) {
        var $$ = this.internal, d3 = $$.d3, config = $$.config;
        if (! config.data_selection_enabled) { return; }
        $$.main.selectAll('.' + CLASS.shapes).selectAll('.' + CLASS.shape).each(function (d, i) {
            var shape = d3.select(this), id = d.data ? d.data.id : d.id,
                toggle = $$.getToggle(this, d).bind($$),
                isTargetId = config.data_selection_grouped || !ids || ids.indexOf(id) >= 0,
                isTargetIndex = !indices || indices.indexOf(i) >= 0,
                isSelected = shape.classed(CLASS.SELECTED);
            // line/area selection not supported yet
            if (shape.classed(CLASS.line) || shape.classed(CLASS.area)) {
                return;
            }
            if (isTargetId && isTargetIndex) {
                if (config.data_selection_isselectable(d)) {
                    if (isSelected) {
                        toggle(false, shape.classed(CLASS.SELECTED, false), d, i);
                    }
                }
            }
        });
    };

    c3_chart_fn.transform = function (type, targetIds) {
        var $$ = this.internal,
            options = ['pie', 'donut'].indexOf(type) >= 0 ? {withTransform: true} : null;
        $$.transformTo(targetIds, type, options);
    };

    c3_chart_internal_fn.transformTo = function (targetIds, type, optionsForRedraw) {
        var $$ = this,
            withTransitionForAxis = !$$.hasArcType(),
            options = optionsForRedraw || {withTransitionForAxis: withTransitionForAxis};
        options.withTransitionForTransform = false;
        $$.transiting = false;
        $$.setTargetType(targetIds, type);
        $$.updateAndRedraw(options);
    };

    c3_chart_fn.groups = function (groups) {
        var $$ = this.internal, config = $$.config;
        if (isUndefined(groups)) { return config.data_groups; }
        config.data_groups = groups;
        $$.redraw();
        return config.data_groups;
    };

    c3_chart_fn.xgrids = function (grids) {
        var $$ = this.internal, config = $$.config;
        if (! grids) { return config.grid_x_lines; }
        config.grid_x_lines = grids;
        $$.redraw();
        return config.grid_x_lines;
    };
    c3_chart_fn.xgrids.add = function (grids) {
        var $$ = this.internal;
        return this.xgrids($$.config.grid_x_lines.concat(grids ? grids : []));
    };
    c3_chart_fn.xgrids.remove = function (params) { // TODO: multiple
        var $$ = this.internal;
        $$.removeGridLines(params, true);
    };

    c3_chart_fn.ygrids = function (grids) {
        var $$ = this.internal, config = $$.config;
        if (! grids) { return config.grid_y_lines; }
        config.grid_y_lines = grids;
        $$.redraw();
        return config.grid_y_lines;
    };
    c3_chart_fn.ygrids.add = function (grids) {
        var $$ = this.internal;
        return this.ygrids($$.config.grid_y_lines.concat(grids ? grids : []));
    };
    c3_chart_fn.ygrids.remove = function (params) { // TODO: multiple
        var $$ = this.internal;
        $$.removeGridLines(params, false);
    };

    c3_chart_fn.regions = function (regions) {
        var $$ = this.internal, config = $$.config;
        if (!regions) { return config.regions; }
        config.regions = regions;
        $$.redraw();
        return config.regions;
    };
    c3_chart_fn.regions.add = function (regions) {
        var $$ = this.internal, config = $$.config;
        if (!regions) { return config.regions; }
        config.regions = config.regions.concat(regions);
        $$.redraw();
        return config.regions;
    };
    c3_chart_fn.regions.remove = function (options) {
        var $$ = this.internal, config = $$.config,
            duration, classes, regions;

        options = options || {};
        duration = $$.getOption(options, "duration", config.transition_duration);
        classes = $$.getOption(options, "classes", [CLASS.region]);

        regions = $$.main.select('.' + CLASS.regions).selectAll(classes.map(function (c) { return '.' + c; }));
        (duration ? regions.transition().duration(duration) : regions)
            .style('opacity', 0)
            .remove();

        config.regions = config.regions.filter(function (region) {
            var found = false;
            if (!region['class']) {
                return true;
            }
            region['class'].split(' ').forEach(function (c) {
                if (classes.indexOf(c) >= 0) { found = true; }
            });
            return !found;
        });

        return config.regions;
    };

    c3_chart_fn.data = function (targetIds) {
        var targets = this.internal.data.targets;
        return typeof targetIds === 'undefined' ? targets : targets.filter(function (t) {
            return [].concat(targetIds).indexOf(t.id) >= 0;
        });
    };
    c3_chart_fn.data.shown = function (targetId) {
        return this.internal.filterTargetsToShow(this.data(targetId));
    };
    c3_chart_fn.data.values = function (targetId) {
        var target = this.data(targetId);
        return target ? target.values.map(function (d) { return d.value; }) : null;
    };
    c3_chart_fn.data.names = function (names) {
        return this.internal.updateDataAttributes('names', names);
    };
    c3_chart_fn.data.colors = function (colors) {
        return this.internal.updateDataAttributes('colors', colors);
    };
    c3_chart_fn.data.axes = function (axes) {
        return this.internal.updateDataAttributes('axes', axes);
    };

    c3_chart_fn.category = function (i, category) {
        var $$ = this.internal, config = $$.config;
        if (arguments.length > 1) {
            config.axis_x_categories[i] = category;
            $$.redraw();
        }
        return config.axis_x_categories[i];
    };
    c3_chart_fn.categories = function (categories) {
        var $$ = this.internal, config = $$.config;
        if (!arguments.length) { return config.axis_x_categories; }
        config.axis_x_categories = categories;
        $$.redraw();
        return config.axis_x_categories;
    };

    // TODO: fix
    c3_chart_fn.color = function (id) {
        var $$ = this.internal;
        return $$.color(id); // more patterns
    };

    c3_chart_fn.x = function (x) {
        var $$ = this.internal;
        if (arguments.length) {
            $$.updateTargetX($$.data.targets, x);
            $$.redraw({withUpdateOrgXDomain: true, withUpdateXDomain: true});
        }
        return $$.data.xs;
    };
    c3_chart_fn.xs = function (xs) {
        var $$ = this.internal;
        if (arguments.length) {
            $$.updateTargetXs($$.data.targets, xs);
            $$.redraw({withUpdateOrgXDomain: true, withUpdateXDomain: true});
        }
        return $$.data.xs;
    };

    c3_chart_fn.axis = function () {};
    c3_chart_fn.axis.labels = function (labels) {
        var $$ = this.internal;
        if (arguments.length) {
            Object.keys(labels).forEach(function (axisId) {
                $$.setAxisLabelText(axisId, labels[axisId]);
            });
            $$.updateAxisLabels();
        }
        // TODO: return some values?
    };
    c3_chart_fn.axis.max = function (max) {
        var $$ = this.internal, config = $$.config;
        if (arguments.length) {
            if (typeof max === 'object') {
                if (isValue(max.x)) { config.axis_x_max = max.x; }
                if (isValue(max.y)) { config.axis_y_max = max.y; }
                if (isValue(max.y2)) { config.axis_y2_max = max.y2; }
            } else {
                config.axis_y_max = config.axis_y2_max = max;
            }
            $$.redraw({withUpdateOrgXDomain: true, withUpdateXDomain: true});
        } else {
            return {
                x: config.axis_x_max,
                y: config.axis_y_max,
                y2: config.axis_y2_max
            };
        }
    };
    c3_chart_fn.axis.min = function (min) {
        var $$ = this.internal, config = $$.config;
        if (arguments.length) {
            if (typeof min === 'object') {
                if (isValue(min.x)) { config.axis_x_min = min.x; }
                if (isValue(min.y)) { config.axis_y_min = min.y; }
                if (isValue(min.y2)) { config.axis_y2_min = min.y2; }
            } else {
                config.axis_y_min = config.axis_y2_min = min;
            }
            $$.redraw({withUpdateOrgXDomain: true, withUpdateXDomain: true});
        } else {
            return {
                x: config.axis_x_min,
                y: config.axis_y_min,
                y2: config.axis_y2_min
            };
        }
    };
    c3_chart_fn.axis.range = function (range) {
        if (arguments.length) {
            if (isDefined(range.max)) { this.axis.max(range.max); }
            if (isDefined(range.min)) { this.axis.min(range.min); }
        } else {
            return {
                max: this.axis.max(),
                min: this.axis.min()
            };
        }
    };

    c3_chart_fn.legend = function () {};
    c3_chart_fn.legend.show = function (targetIds) {
        var $$ = this.internal;
        $$.showLegend($$.mapToTargetIds(targetIds));
        $$.updateAndRedraw({withLegend: true});
    };
    c3_chart_fn.legend.hide = function (targetIds) {
        var $$ = this.internal;
        $$.hideLegend($$.mapToTargetIds(targetIds));
        $$.updateAndRedraw({withLegend: true});
    };

    c3_chart_fn.resize = function (size) {
        var $$ = this.internal, config = $$.config;
        config.size_width = size ? size.width : null;
        config.size_height = size ? size.height : null;
        this.flush();
    };

    c3_chart_fn.flush = function () {
        var $$ = this.internal;
        $$.updateAndRedraw({withLegend: true, withTransition: false, withTransitionForTransform: false});
    };

    c3_chart_fn.destroy = function () {
        var $$ = this.internal;
        $$.data.targets = undefined;
        $$.data.xs = {};
        $$.selectChart.classed('c3', false).html("");
        window.onresize = null;
    };

    c3_chart_fn.tooltip = function () {};
    c3_chart_fn.tooltip.show = function (args) {
        var $$ = this.internal, index, mouse;

        // determine mouse position on the chart
        if (args.mouse) {
            mouse = args.mouse;
        }

        // determine focus data
        if (args.data) {
            if ($$.isMultipleX()) {
                // if multiple xs, target point will be determined by mouse
                mouse = [$$.x(args.data.x), $$.getYScale(args.data.id)(args.data.value)];
                index = null;
            } else {
                // TODO: when tooltip_grouped = false
                index = isValue(args.data.index) ? args.data.index : $$.getIndexByX(args.data.x);
            }
        }
        else if (typeof args.x !== 'undefined') {
            index = $$.getIndexByX(args.x);
        }
        else if (typeof args.index !== 'undefined') {
            index = args.index;
        }

        // emulate mouse events to show
        $$.dispatchEvent('mouseover', index, mouse);
        $$.dispatchEvent('mousemove', index, mouse);
    };
    c3_chart_fn.tooltip.hide = function () {
        // TODO: get target data by checking the state of focus
        this.internal.dispatchEvent('mouseout', 0);
    };

    // Features:
    // 1. category axis
    // 2. ceil values of translate/x/y to int for half pixel antialiasing
    function c3_axis(d3, params) {
        var scale = d3.scale.linear(), orient = "bottom", innerTickSize = 6, outerTickSize, tickPadding = 3, tickValues = null, tickFormat, tickArguments;

        var tickOffset = 0, tickCulling = true, tickCentered;

        params = params || {};
        outerTickSize = params.withOuterTick ? 6 : 0;

        function axisX(selection, x) {
            selection.attr("transform", function (d) {
                return "translate(" + Math.ceil(x(d) + tickOffset) + ", 0)";
            });
        }
        function axisY(selection, y) {
            selection.attr("transform", function (d) {
                return "translate(0," + Math.ceil(y(d)) + ")";
            });
        }
        function scaleExtent(domain) {
            var start = domain[0], stop = domain[domain.length - 1];
            return start < stop ? [ start, stop ] : [ stop, start ];
        }
        function generateTicks(scale) {
            var i, domain, ticks = [];
            if (scale.ticks) {
                return scale.ticks.apply(scale, tickArguments);
            }
            domain = scale.domain();
            for (i = Math.ceil(domain[0]); i < domain[1]; i++) {
                ticks.push(i);
            }
            if (ticks.length > 0 && ticks[0] > 0) {
                ticks.unshift(ticks[0] - (ticks[1] - ticks[0]));
            }
            return ticks;
        }
        function copyScale() {
            var newScale = scale.copy(), domain;
            if (params.isCategory) {
                domain = scale.domain();
                newScale.domain([domain[0], domain[1] - 1]);
            }
            return newScale;
        }
        function textFormatted(v) {
            return tickFormat ? tickFormat(v) : v;
        }
        function getSizeFor1Char(tick) {
            var size = {
                h: 11.5,
                w: 5.5
            };
            tick.select('text').text(textFormatted).each(function (d) {
                var box = this.getBoundingClientRect(),
                    text = textFormatted(d),
                    h = box.height,
                    w = text ? (box.width / text.length) : undefined;
                if (h && w) {
                    size.h = h;
                    size.w = w;
                }
            }).text('');
            return size;
        }
        function axis(g) {
            g.each(function () {
                var g = d3.select(this);
                var scale0 = this.__chart__ || scale, scale1 = this.__chart__ = copyScale();

                var ticks = tickValues ? tickValues : generateTicks(scale1),
                    tick = g.selectAll(".tick").data(ticks, scale1),
                    tickEnter = tick.enter().insert("g", ".domain").attr("class", "tick").style("opacity", 1e-6),
                    // MEMO: No exit transition. The reason is this transition affects max tick width calculation because old tick will be included in the ticks.
                    tickExit = tick.exit().remove(),
                    tickUpdate = d3.transition(tick).style("opacity", 1),
                    tickTransform, tickX, tickY;

                var range = scale.rangeExtent ? scale.rangeExtent() : scaleExtent(scale.range()),
                    path = g.selectAll(".domain").data([ 0 ]),
                    pathUpdate = (path.enter().append("path").attr("class", "domain"), d3.transition(path));
                tickEnter.append("line");
                tickEnter.append("text");

                var lineEnter = tickEnter.select("line"),
                    lineUpdate = tickUpdate.select("line"),
                    textEnter = tickEnter.select("text"),
                    textUpdate = tickUpdate.select("text");

                if (params.isCategory) {
                    tickOffset = Math.ceil((scale1(1) - scale1(0)) / 2);
                    tickX = tickCentered ? 0 : tickOffset;
                    tickY = tickCentered ? tickOffset : 0;
                } else {
                    tickOffset = tickX = 0;
                }

                var text, tspan, sizeFor1Char = getSizeFor1Char(tick), counts = [];
                var tickLength = Math.max(innerTickSize, 0) + tickPadding,
                    isVertical = orient === 'left' || orient === 'right';

                // this should be called only when category axis
                function splitTickText(d) {
                    var tickText = textFormatted(d) + "",
                        maxWidth = isVertical ? params.tickWidth : tickOffset * 2 - 10,
                        subtext, spaceIndex, textWidth, splitted = [];

                    function split(splitted, text) {
                        spaceIndex = undefined;
                        for (var i = 0; i < text.length; i++) {
                            if (text.charAt(i) === ' ') {
                                spaceIndex = i;
                            }
                            subtext = text.substr(0, i + 1);
                            textWidth = sizeFor1Char.w * subtext.length;
                            // if text width gets over tick width, split by space index or crrent index
                            if (maxWidth < textWidth) {
                                return split(
                                    splitted.concat(text.substr(0, spaceIndex ? spaceIndex : i)),
                                    text.slice(spaceIndex ? spaceIndex + 1 : i)
                                );
                            }
                        }
                        return splitted.concat(text);
                    }

                    return split(splitted, tickText);
                }

                function tspanDy(d, i) {
                    var dy = sizeFor1Char.h;
                    if (i === 0) {
                        if (orient === 'left' || orient === 'right') {
                            dy = -((counts[d.index] - 1) * (sizeFor1Char.h / 2) - (params.isCategory ? 2 : 3));
                        } else {
                            dy = params.isCategory ? ".40em" : ".71em";
                        }
                    }
                    return dy;
                }

                function tickSize(d) {
                    var tickPosition = scale(d) + tickOffset;
                    return range[0] < tickPosition && tickPosition < range[1] ? innerTickSize : 0;
                }

                text = tick.select("text");
                tspan = text.selectAll('tspan')
                    .data(function (d, i) {
                        var splitted = params.tickWidth ? splitTickText(d) : [textFormatted(d)];
                        counts[i] = splitted.length;
                        return splitted.map(function (s) {
                            return { index: i, splitted: s };
                        });
                    })
                  .enter().append('tspan')
                    .text(function (d) { return d.splitted; });

                switch (orient) {
                case "bottom":
                    {
                        tickTransform = axisX;
                        lineEnter.attr("y2", innerTickSize);
                        textEnter.attr("y", tickLength);
                        lineUpdate.attr("x1", tickX).attr("x2", tickX).attr("y2", tickSize);
                        textUpdate.attr("x", 0).attr("y", tickLength);
                        text.style("text-anchor", "middle");
                        tspan.attr('x', 0).attr("dy", tspanDy);
                        pathUpdate.attr("d", "M" + range[0] + "," + outerTickSize + "V0H" + range[1] + "V" + outerTickSize);
                        break;
                    }
                case "top":
                    {
                        tickTransform = axisX;
                        lineEnter.attr("y2", -innerTickSize);
                        textEnter.attr("y", -tickLength);
                        lineUpdate.attr("x2", 0).attr("y2", -innerTickSize);
                        textUpdate.attr("x", 0).attr("y", -tickLength);
                        text.style("text-anchor", "middle");
                        tspan.attr('x', 0).attr("dy", "0em");
                        pathUpdate.attr("d", "M" + range[0] + "," + -outerTickSize + "V0H" + range[1] + "V" + -outerTickSize);
                        break;
                    }
                case "left":
                    {
                        tickTransform = axisY;
                        lineEnter.attr("x2", -innerTickSize);
                        textEnter.attr("x", -tickLength);
                        lineUpdate.attr("x2", -innerTickSize).attr("y1", tickY).attr("y2", tickY);
                        textUpdate.attr("x", -tickLength).attr("y", tickOffset);
                        text.style("text-anchor", "end");
                        tspan.attr('x', -tickLength).attr("dy", tspanDy);
                        pathUpdate.attr("d", "M" + -outerTickSize + "," + range[0] + "H0V" + range[1] + "H" + -outerTickSize);
                        break;
                    }
                case "right":
                    {
                        tickTransform = axisY;
                        lineEnter.attr("x2", innerTickSize);
                        textEnter.attr("x", tickLength);
                        lineUpdate.attr("x2", innerTickSize).attr("y2", 0);
                        textUpdate.attr("x", tickLength).attr("y", 0);
                        text.style("text-anchor", "start");
                        tspan.attr('x', tickLength).attr("dy", tspanDy);
                        pathUpdate.attr("d", "M" + outerTickSize + "," + range[0] + "H0V" + range[1] + "H" + outerTickSize);
                        break;
                    }
                }
                if (scale1.rangeBand) {
                    var x = scale1, dx = x.rangeBand() / 2;
                    scale0 = scale1 = function (d) {
                        return x(d) + dx;
                    };
                } else if (scale0.rangeBand) {
                    scale0 = scale1;
                } else {
                    tickExit.call(tickTransform, scale1);
                }
                tickEnter.call(tickTransform, scale0);
                tickUpdate.call(tickTransform, scale1);
            });
        }
        axis.scale = function (x) {
            if (!arguments.length) { return scale; }
            scale = x;
            return axis;
        };
        axis.orient = function (x) {
            if (!arguments.length) { return orient; }
            orient = x in {top: 1, right: 1, bottom: 1, left: 1} ? x + "" : "bottom";
            return axis;
        };
        axis.tickFormat = function (format) {
            if (!arguments.length) { return tickFormat; }
            tickFormat = format;
            return axis;
        };
        axis.tickCentered = function (isCentered) {
            if (!arguments.length) { return tickCentered; }
            tickCentered = isCentered;
            return axis;
        };
        axis.tickOffset = function () { // This will be overwritten when normal x axis
            return tickOffset;
        };
        axis.ticks = function () {
            if (!arguments.length) { return tickArguments; }
            tickArguments = arguments;
            return axis;
        };
        axis.tickCulling = function (culling) {
            if (!arguments.length) { return tickCulling; }
            tickCulling = culling;
            return axis;
        };
        axis.tickValues = function (x) {
            if (typeof x === 'function') {
                tickValues = function () {
                    return x(scale.domain());
                };
            }
            else {
                if (!arguments.length) { return tickValues; }
                tickValues = x;
            }
            return axis;
        };
        return axis;
    }

    if (typeof define === 'function' && define.amd) {
        define("c3", ["d3"], c3);
    } else if ('undefined' !== typeof exports && 'undefined' !== typeof module) {
        module.exports = c3;
    } else {
        window.c3 = c3;
    }

})(window);
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
      if (classNames.indexOf("bg-") === -1) {
        classNames = "bg-white " + classNames;
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
      messages = [];
      switch (xhr.status) {
        case 406:
          errors = JSON.parse(xhr.responseText).data;
          for (field in errors) {
            messages.push("" + field + " " + (errors[field].join(',')));
          }
          break;
        case 401:
        case 403:
          messages.push("You need to <a href=\"/signin\">singin</a> before");
          break;
        default:
          messages.push(app.constructor.STANDARD_ERR);
      }
      return app.flash(messages.join('<br/>'), "red");
    };

    App.prototype.showInlineErrors = function($form, xhr) {
      var $errEl, $error, errors, field, _results;
      $errEl = $('<small class="error-msg block red mb2"/>');
      $form.find(".error-msg").remove();
      $form.find(".is-error").removeClass(".is-error");
      switch (xhr.status) {
        case 406:
          errors = JSON.parse(xhr.responseText).data;
          _results = [];
          for (field in errors) {
            $error = $errEl.clone().text(errors[field].join(","));
            _results.push($error.insertAfter($form.find("." + field).addClass("is-error")));
          }
          return _results;
          break;
        case 401:
        case 403:
          $error = $errEl.clone().html("Please check your email and password.");
          return $error.insertAfter($form.find("input[type=email]").addClass("is-error"));
        default:
          return app.flash(app.constructor.STANDARD_ERR, "bg-red white");
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

    Client.prototype.urlRoot = "/api/core/clients";

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

    Client.prototype.meta = function() {
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

    Clients.prototype.url = "/api/core/clients";

    Clients.prototype.query = {
      select: ["uuid,domain"]
    };

    Clients.prototype.comparator = "domain";

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

    Model.prototype.urlRoot = "/api/core/models";

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

    Model.prototype.meta = function() {
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

    Models.prototype.url = "/api/core/models";

    Models.prototype.query = {
      select: ["uuid,name"],
      where: {
        table_schema: "public"
      }
    };

    Models.prototype.comparator = "name";

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

    Template.prototype.urlRoot = "/api/core/templates";

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
        return JSON.stringify(this.pick('filename', 'layout', 'body', 'data_bind'), null, 2);
      } else {
        return JSON.stringify(_.omit(Template != null ? (_ref = Template.schema) != null ? _ref.properties : void 0 : void 0, 'uuid'), null, 2);
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

    Templates.prototype.url = "/api/core/templates";

    Templates.prototype.query = {
      select: ["uuid,filename"]
    };

    Templates.prototype.comparator = "filename";

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
    var _ref, _ref1, _ref2, _ref3;
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
    return app.view.list.form = render("Form", {
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
  var C3,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  C3 = (function(_super) {
    __extends(C3, _super);

    function C3() {
      this.resize = __bind(this.resize, this);
      return C3.__super__.constructor.apply(this, arguments);
    }

    C3.prototype.className = "flex-20 chart-container overflow-hidden padding1";

    C3.prototype.container = ".chart-container";

    C3.prototype.initialize = function(options) {
      this.options = options != null ? options : null;
      C3.__super__.initialize.apply(this, arguments);
      this.data = _.map(this.options.data, function(d) {
        return d.data;
      });
      this.columns = [];
      this.chart = null;
      this.length = 0;
      this.columnSelector = new app.views.C3ColumnSelector({
        chartView: this
      });
      this.render();
      return $(window).on("resize", this.resize);
    };

    C3.prototype.render = function() {
      this.columnSelector.render();
      app.postRender();
      return this;
    };

    C3.prototype.remove = function() {
      $(window).off("resize", this.resize);
      this.columnSelector.remove();
      return C3.__super__.remove.apply(this, arguments);
    };

    C3.prototype.generate = function(data) {
      this.chart = c3.generate({
        bindto: this.container,
        type: this.type,
        data: data,
        zoom: {
          enabled: true
        },
        padding: {
          top: 24,
          bottom: 24,
          left: 48,
          right: 48
        },
        grid: {
          x: {
            show: true
          },
          y: {
            show: true
          }
        }
      });
      return this.resize();
    };

    C3.prototype.flow = function(columns) {
      if (!this.chart) {
        return;
      }
      this.chart.flow({
        columns: columns,
        length: this.length
      });
      if (_.flatten(_.values(this.chart.x())).length % 20 === 0) {
        this.length = this.length === 1 ? 0 : 1;
      }
      return this;
    };

    C3.prototype.width = function() {
      return $(window).innerWidth() - $(".fix-96").width();
    };

    C3.prototype.height = function() {
      return $(window).innerHeight() - $(".search-header").height();
    };

    C3.prototype.resize = function() {
      var height, _ref;
      height = this.height();
      this.$el.css({
        "height": height,
        "max-height": height
      });
      return (_ref = this.chart) != null ? _ref.resize() : void 0;
    };

    return C3;

  })(Backbone.View);

  app.views.C3 = C3;

}).call(this);
(function() {
  var Line,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Line = (function(_super) {
    __extends(Line, _super);

    function Line() {
      return Line.__super__.constructor.apply(this, arguments);
    }

    Line.prototype.render = function() {
      Line.__super__.render.apply(this, arguments);
      app.flash("Select columns for X Axis, Labels and Values", null, 2);
      return this;
    };

    Line.prototype.draw = function() {
      var colLabels, colTime, colValues, columns, data, groups, keys, timeValues;
      keys = this.columns;
      data = this.data;
      if (this.columnSelector.mapEnabled()) {
        colTime = keys[0], colLabels = keys[1], colValues = keys[2];
        groups = _.groupBy(data, function(d) {
          return d[colLabels];
        });
        timeValues = _.map(data, function(d) {
          return d[colTime];
        });
        columns = [_.flatten([colTime, timeValues])];
        _.forEach(groups, function(values, label) {
          var buffer;
          buffer = _.flatten([
            label, _.map(timeValues, function(t) {
              return 0;
            })
          ]);
          _.forEach(values, function(v) {
            return buffer[columns[0].indexOf(v[colTime])] = v[colValues];
          });
          return columns.push(buffer);
        });
      } else {
        columns = _.map(keys, function(k) {
          return _.flatten([k, _.pluck(data, k)]);
        });
      }
      this.generate({
        x: keys[0],
        columns: columns
      });
      return this.columnSelector.remove();
    };

    return Line;

  })(app.views.C3);

  app.views.C3.Line = Line;

}).call(this);
(function() {
  var LineLive,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  LineLive = (function(_super) {
    __extends(LineLive, _super);

    function LineLive() {
      return LineLive.__super__.constructor.apply(this, arguments);
    }

    LineLive.prototype.render = function() {
      app.postRender();
      return this;
    };

    LineLive.prototype.remove = function() {
      $(window).off("resize", this.resize);
      this.$el.remove();
      this.stopListening();
      return this;
    };

    LineLive.prototype.draw = function() {
      this.generate({
        x: 'x',
        columns: [['x', new Date()]]
      });
      return this;
    };

    LineLive.prototype.generate = function(data) {
      this.chart = c3.generate({
        bindto: this.container,
        data: data,
        axis: {
          x: {
            type: 'timeseries',
            tick: {
              format: '%H:%M:%S'
            }
          }
        },
        padding: {
          top: 24,
          bottom: 24,
          left: 48,
          right: 48
        },
        grid: {
          x: {
            show: true
          },
          y: {
            show: true
          }
        }
      });
      return this.resize();
    };

    LineLive.prototype.height = function() {
      return LineLive.__super__.height.apply(this, arguments) - 104;
    };

    return LineLive;

  })(app.views.C3);

  app.views.C3.LineLive = LineLive;

}).call(this);
(function() {
  var Pie,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Pie = (function(_super) {
    __extends(Pie, _super);

    function Pie() {
      return Pie.__super__.constructor.apply(this, arguments);
    }

    Pie.prototype.render = function() {
      Pie.__super__.render.apply(this, arguments);
      app.flash("Select columns for Labels and Values", null, 1.5);
      return this;
    };

    Pie.prototype.draw = function() {
      var columns, data, keys;
      keys = this.columns;
      data = this.data;
      if (this.columnSelector.mapEnabled()) {
        columns = _.map(data, function(d) {
          return _.map(keys, function(k) {
            return d[k];
          });
        });
      } else {
        columns = _.map(keys, function(k) {
          return _.flatten([k, _.pluck(data, k)]);
        });
      }
      console.log(columns);
      this.generate({
        type: "pie",
        columns: columns
      });
      return this.columnSelector.remove();
    };

    return Pie;

  })(app.views.C3);

  app.views.C3.Pie = Pie;

}).call(this);
(function() {
  var C3ColumnSelector,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  C3ColumnSelector = (function(_super) {
    __extends(C3ColumnSelector, _super);

    function C3ColumnSelector() {
      this.setColumn = __bind(this.setColumn, this);
      return C3ColumnSelector.__super__.constructor.apply(this, arguments);
    }

    C3ColumnSelector.prototype.el = ".filters";

    C3ColumnSelector.prototype.events = {
      "click .draw": "draw",
      "click .cancel": "cancel"
    };

    C3ColumnSelector.prototype.initialize = function(options) {
      this.options = options;
      this.chartView = this.options.chartView;
      this.$background = $("<div class=\"c3-column-selector-bg shrink bg-darken-4 absolute top-0\">");
      this.$tableNameFilterBtn = this.$el.find(".filter:first-child");
      return this.$activeFiltersStash = this.$el.find(".filter.active");
    };

    C3ColumnSelector.prototype.template = function() {
      return app.getTemplate('c3_column_selector')();
    };

    C3ColumnSelector.prototype.render = function() {
      this.$tableNameFilterBtn.addClass("hidden");
      this.$el.find(".filter.active").removeClass("active").removeClass("bg-red").addClass("bg-mid-gray");
      this.$background.insertBefore(this.$el);
      this.$el.append(this.template());
      this.$el.find(".filter").not(".draw").not(".cancel").on("click", this.setColumn);
      return this;
    };

    C3ColumnSelector.prototype.remove = function() {
      this.$el.find(".filter").not(".draw").not(".cancel").off("click", this.setColumn);
      this.$background.remove();
      this.$el.find("input.map").parent().remove();
      this.$el.find("a.cancel").remove();
      this.$el.find("a.draw").remove();
      this.$tableNameFilterBtn.removeClass("hidden");
      this.$activeFiltersStash.addClass("active").addClass("bg-red").removeClass("bg-mid-gray");
      this.stopListening();
      return this;
    };

    C3ColumnSelector.prototype.setColumn = function(e) {
      var $a, name;
      e.preventDefault();
      e.stopPropagation();
      name = e.currentTarget.text;
      $a = $(e.currentTarget);
      $a.toggleClass("active").toggleClass("bg-red").toggleClass("bg-mid-gray");
      if ($a.hasClass("active")) {
        return this.chartView.columns.push(name);
      } else {
        return this.chartView.columns = _.without(this.chartView.columns, name);
      }
    };

    C3ColumnSelector.prototype.cancel = function(e) {
      e.preventDefault();
      e.stopPropagation();
      return app.view.openTable();
    };

    C3ColumnSelector.prototype.draw = function(e) {
      e.preventDefault();
      e.stopPropagation();
      return this.chartView.draw();
    };

    C3ColumnSelector.prototype.mapEnabled = function() {
      return this.$el.find("input.map").is(":checked");
    };

    return C3ColumnSelector;

  })(Backbone.View);

  app.views.C3ColumnSelector = C3ColumnSelector;

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
      this.$el.css({
        "z-index": 4 + $(".flash").length
      });
      return app.postRender();
    };

    return Flash;

  })(Backbone.View);

  app.views.Flash = Flash;

}).call(this);
(function() {
  var JsonForm,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  JsonForm = (function(_super) {
    __extends(JsonForm, _super);

    function JsonForm() {
      this.renderAttribute = __bind(this.renderAttribute, this);
      this.toggleSource = __bind(this.toggleSource, this);
      this.onDblClick = __bind(this.onDblClick, this);
      this.value = __bind(this.value, this);
      return JsonForm.__super__.constructor.apply(this, arguments);
    }

    JsonForm.prototype.tagName = "form";

    JsonForm.prototype.className = "form-container";

    JsonForm.prototype.tabTmpl = function(data) {
      return Mustache.template("<a href=\"#!\" class=\"left button button-nav-tab button-nav-dark is-active\" ref=\"{{name}}\">{{name}}</a>")(data);
    };

    JsonForm.prototype.textareaTmpl = function(data) {
      return Mustache.template("<textarea disabled name=\"{{name}}\" class=\"p2 field-dark table-cell full-width code hidden\" spellcheck=\"false\">{{value}}</textarea>")(data);
    };

    JsonForm.prototype.events = {
      "keydown textarea": "onKeyDown",
      "dblclick textarea[name=meta]": "onDblClick",
      "click .tabs a": "toggleSource"
    };

    JsonForm.prototype.template = function(data, partials) {
      if (data == null) {
        data = {};
      }
      if (partials == null) {
        partials = {};
      }
      return app.getTemplate("json_form")(data, partials);
    };

    JsonForm.prototype.render = function() {
      var data;
      this.$el.html(this.template(this.model));
      data = {
        name: "meta"
      };
      if (typeof this.model.meta === "function") {
        data.value = this.model.meta();
      } else {
        data.value = JSON.stringify(_.omit(this.model.toJSON(), "uuid", "created_at", "updated_at"), null, 2);
      }
      this.renderAttribute(data);
      return this;
    };

    JsonForm.prototype.save = function(data) {
      return console.log(data);
    };

    JsonForm.prototype.value = function() {
      var error, hasError, json;
      hasError = false;
      try {
        json = JSON.parse(this.$el.find("textarea[name=meta]").val());
      } catch (_error) {
        error = _error;
        hasError = true;
        app.flash("Malformed JSON: " + error, "bg-red white");
      }
      if (typeof json === "string") {
        app.flash("Malformed JSON", "bg-red white");
        hasError = true;
      }
      _.forEach(this.$el.find("textarea").not("[name=meta]"), (function(_this) {
        return function(tEl) {
          var $tEl, name, value;
          $tEl = $(tEl);
          name = $tEl.attr("name");
          try {
            value = JSON.parse($tEl.val());
          } catch (_error) {
            error = _error;
            if (_.isString(_this.model.get(name))) {
              value = $tEl.val();
            } else {
              value = null;
              hasError = true;
              app.flash("Malformed JSON: " + error, "bg-red white");
            }
          }
          return json[name] = value;
        };
      })(this));
      if (hasError) {
        return false;
      } else {
        return json;
      }
    };

    JsonForm.prototype.onKeyDown = function(e) {
      if ((e.ctrlKey || e.metaKey) && e.keyCode === 83) {
        e.preventDefault();
        this.save(this.value());
      }
      return this;
    };

    JsonForm.prototype.onDblClick = function(e) {
      var $textarea, attribute, data, endPos, startPos, value;
      $textarea = $(e.currentTarget);
      startPos = e.currentTarget.selectionStart;
      endPos = e.currentTarget.selectionEnd;
      attribute = e.currentTarget.value.substring(startPos, endPos);
      if ((this.model.get(attribute) != null) && $(".tabs a[ref=" + attribute + "]").length === 0) {
        value = _.isString(this.model.get(attribute)) ? this.model.get(attribute) : JSON.stringify(this.model.get(attribute), null, 2);
        data = {
          name: attribute,
          value: value
        };
        return this.renderAttribute(data);
      }
    };

    JsonForm.prototype.toggleSource = function(e) {
      var $a, current;
      e.preventDefault();
      $a = $(e.currentTarget);
      current = $a.attr("ref");
      this.$el.find('textarea').addClass('hidden');
      this.$el.find("textarea[name=" + current + "]").removeClass("hidden");
      this.$el.find(".tabs a").removeClass("is-active");
      return $a.addClass("is-active");
    };

    JsonForm.prototype.renderAttribute = function(data) {
      var $textarea;
      this.$el.find(".tabs").append($(this.tabTmpl(data)));
      this.$el.find(".textareas").append($(this.textareaTmpl(data)));
      $textarea = this.$el.find("textarea[name=" + data.name + "]");
      new Behave({
        textarea: $textarea[0],
        replaceTab: true,
        softTabs: true,
        tabSize: 2,
        autoOpen: true,
        overwrite: true,
        autoStrip: true,
        autoIndent: true,
        fence: true
      });
      this.delegateEvents();
      this.$el.find(".tabs a[ref=" + data.name + "]").click();
      if (this.$el.find("textarea").length > 1) {
        if (!this.$el.find("textarea")[0].hasAttribute("disabled")) {
          $textarea.removeAttr("disabled");
        }
      }
      return $textarea;
    };

    return JsonForm;

  })(Backbone.View);

  app.views.JsonForm = JsonForm;

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
      return app.api.get("/api/core/models", {
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
      this.jsonForm = new app.views.JsonForm({
        model: this.model
      });
      this.jsonForm.save = this.save;
      this.jsonForm.render().$el.insertAfter(this.$el.find("header"));
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

    Form.prototype.save = function(params) {
      if (params) {
        this.model.save(params, {
          wait: true,
          success: onSave,
          error: onError
        });
      }
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
      this.updateRecord = __bind(this.updateRecord, this);
      this.editRecord = __bind(this.editRecord, this);
      this.deleteRecord = __bind(this.deleteRecord, this);
      this.setBuffer = __bind(this.setBuffer, this);
      this.createLabels = __bind(this.createLabels, this);
      this.createTableHeader = __bind(this.createTableHeader, this);
      this.updateFields = __bind(this.updateFields, this);
      this.updateCountAndChart = __bind(this.updateCountAndChart, this);
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
      "click .td-content": "showContent",
      "click .delete": "deleteRecord",
      "click .edit": "editRecord",
      "click .d3": "openChart",
      "click .tbl": "openTable"
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
          after_add: this.updateCountAndChart
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

    Live.prototype.updateCountAndChart = function(msgs) {
      var update;
      this.$el.find(".record_count").text("" + (parseInt(this.$el.find(".record_count").text()) + msgs.length) + " records");
      if (app.views.chart != null) {
        update = _.map(_.groupBy(msgs, function(m) {
          return m.table_name;
        }), function(arr, table) {
          return [table, arr.length];
        });
        update.unshift(["x", new Date()]);
        return app.views.chart.flow(update);
      }
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
            return "<th class=\"" + fname + " sort\" data-sort=\"" + fname + ":asc:" + sort_type + "\">" + (fname.titleize()) + " <i class=\"fa fa-sort\"></i></th>";
          } else {
            return "<th class=\"" + fname + "\">" + (fname.titleize()) + "</th>";
          }
        };
      })(this)) + "<th class=\"actions\"></th>");
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

    Live.prototype.deleteRecord = function(e) {
      var $a;
      e.preventDefault();
      $a = $(e.currentTarget);
      if (window.confirm("Are you sure?")) {
        return app.api["delete"]("/api/public/" + ($a.data('table_name')) + "/" + ($a.data('uuid')), null, null, (function(data) {
          return $a.parents("tr").remove();
        }), app.showAlertErrors);
      }
    };

    Live.prototype.editRecord = function(e) {
      var $a, jsonForm;
      e.preventDefault();
      $a = $(e.currentTarget);
      if (this.updatingRecord = _.findWhere(this.st.data, function(r) {
        return r.table_name === $a.data('table_name') && r.data.uuid === $a.data('uuid');
      })) {
        jsonForm = new app.views.JsonForm({
          table_name: this.updatingRecord.table_name,
          model: new Backbone.Model(this.updatingRecord.data)
        });
        jsonForm.save = this.updateRecord;
        app.flash("<h4>Editing /" + ($a.data('table_name')) + "/" + ($a.data('uuid')) + "</h4>", "record-editor bg-dark-gray white");
        jsonForm.render().$el.insertAfter($(".record-editor h4"));
        return jsonForm.$el.find("textarea").removeAttr("disabled");
      }
    };

    Live.prototype.updateRecord = function(params) {
      if (params) {
        return app.api.put("/api/public/" + this.updatingRecord.table_name + "/" + this.updatingRecord.data.uuid, params, null, (function(data) {
          return $('.record-editor').find(".close").click();
        }), app.showAlertErrors);
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

    Live.prototype.openTable = function() {
      var _ref;
      if ((_ref = app.views.chart) != null) {
        _ref.remove();
      }
      return this.$el.find(".table, .st_pagination").removeClass("hidden");
    };

    Live.prototype.openChart = function(e) {
      var name, ns, _ref;
      e.preventDefault();
      ns = $(e.currentTarget).data('ns');
      name = $(e.currentTarget).data('name');
      if ((_ref = app.views.chart) != null) {
        _ref.remove();
      }
      app.views.chart = new app.views[ns][name]({
        data: []
      });
      this.$el.find(".table, .st_pagination").addClass("hidden");
      this.$el.find(".table-container").append(app.views.chart.$el);
      return app.views.chart.draw();
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
      "click .toggle-search": "toggleSearch",
      "click .delete": "deleteRecord",
      "click .edit": "editRecord"
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
          after_add: this.updateCountAndChart
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
      var error, query, schema, _base, _ref;
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
          schema = ((_ref = this.query) != null ? _ref.schema : void 0) || "public";
          if ((_base = this.query).query == null) {
            _base.query = {};
          }
          this.query.query.stream = "true";
          return app.api.getStream("/api/" + schema + "/" + this.query.table_name, this.query.query, null, this.onSearchResult, this.onError);
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
      var name, ns, _ref;
      e.preventDefault();
      if (_.isEmpty(this.st.data)) {
        return;
      }
      ns = $(e.currentTarget).data('ns');
      name = $(e.currentTarget).data('name');
      if ((_ref = app.views.chart) != null) {
        _ref.remove();
      }
      app.views.chart = new app.views[ns][name]({
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
