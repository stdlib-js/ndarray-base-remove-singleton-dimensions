// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r=/./,e="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=Object.defineProperty;function n(r){return"number"==typeof r}function o(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function i(r,e,t){var n=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+o(i):o(i)+r,n&&(r="-"+r)),r}var a=String.prototype.toLowerCase,u=String.prototype.toUpperCase;function c(r){var e,t,o;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,o=parseInt(t,10),!isFinite(o)){if(!n(t))throw new Error("invalid integer. Value: "+t);o=0}return o<0&&("u"===r.specifier||10!==e)&&(o=4294967295+o+1),o<0?(t=(-o).toString(e),r.precision&&(t=i(t,r.precision,r.padRight)),t="-"+t):(t=o.toString(e),o||r.precision?r.precision&&(t=i(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===u.call(r.specifier)?u.call(t):a.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function f(r){return"string"==typeof r}var l=Math.abs,s=String.prototype.toLowerCase,p=String.prototype.toUpperCase,g=String.prototype.replace,h=/e\+(\d)$/,y=/e-(\d)$/,d=/^(\d+)$/,b=/^(\d+)e/,v=/\.0$/,w=/\.0*e/,m=/(\..*[^0])0*e/;function j(r){var e,t,o=parseFloat(r.arg);if(!isFinite(o)){if(!n(r.arg))throw new Error("invalid floating-point number. Value: "+t);o=r.arg}switch(r.specifier){case"e":case"E":t=o.toExponential(r.precision);break;case"f":case"F":t=o.toFixed(r.precision);break;case"g":case"G":l(o)<1e-4?((e=r.precision)>0&&(e-=1),t=o.toExponential(e)):t=o.toPrecision(r.precision),r.alternate||(t=g.call(t,m,"$1e"),t=g.call(t,w,"e"),t=g.call(t,v,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=g.call(t,h,"e+0$1"),t=g.call(t,y,"e-0$1"),r.alternate&&(t=g.call(t,d,"$1."),t=g.call(t,b,"$1.e")),o>=0&&r.sign&&(t=r.sign+t),t=r.specifier===p.call(r.specifier)?p.call(t):s.call(t)}function S(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function O(r,e,t){var n=e-r.length;return n<0?r:r=t?r+S(n):S(n)+r}var E=String.fromCharCode,_=isNaN,k=Array.isArray;function T(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function x(r){var e,t,n,o,a,u,l,s,p;if(!k(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(u="",l=1,s=0;s<r.length;s++)if(f(n=r[s]))u+=n;else{if(e=void 0!==n.precision,!(n=T(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(l=n.mapping),t=n.flags,p=0;p<t.length;p++)switch(o=t.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[l],10),l+=1,_(n.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[l],10),l+=1,_(n.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[l],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=c(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!_(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=_(a)?String(n.arg):E(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=j(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=O(n.arg,n.width,n.padRight)),u+=n.arg||"",l+=1}return u}var I=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function A(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function V(r){var e,t,n,o;for(t=[],o=0,n=I.exec(r);n;)(e=r.slice(o,I.lastIndex-n[0].length)).length&&t.push(e),t.push(A(n)),o=I.lastIndex,n=I.exec(r);return(e=r.slice(o)).length&&t.push(e),t}function P(r){return"string"==typeof r}function F(r){var e,t;if(!P(r))throw new TypeError(F("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[V(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return x.apply(null,e)}var N,L=Object.prototype,$=L.toString,C=L.__defineGetter__,B=L.__defineSetter__,R=L.__lookupGetter__,G=L.__lookupSetter__;N=function(){try{return e({},"x",{}),!0}catch(r){return!1}}()?t:function(r,e,t){var n,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===$.call(r))throw new TypeError(F("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===$.call(t))throw new TypeError(F("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((o="value"in t)&&(R.call(r,e)||G.call(r,e)?(n=r.__proto__,r.__proto__=L,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),i="get"in t,a="set"in t,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&C&&C.call(r,e,t.get),a&&B&&B.call(r,e,t.set),r};var M=N;function W(r,e,t){M(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function X(r){return"boolean"==typeof r}var Y="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function Z(){return Y&&"symbol"==typeof Symbol.toStringTag}var U=Object.prototype.toString;var D=Object.prototype.hasOwnProperty;function H(r,e){return null!=r&&D.call(r,e)}var z="function"==typeof Symbol?Symbol:void 0,q="function"==typeof z?z.toStringTag:"";var J=Z()?function(r){var e,t,n;if(null==r)return U.call(r);t=r[q],e=H(r,q);try{r[q]=void 0}catch(e){return U.call(r)}return n=U.call(r),e?r[q]=t:delete r[q],n}:function(r){return U.call(r)},K=Boolean,Q=Boolean.prototype.toString;var rr=Z();function er(r){return"object"==typeof r&&(r instanceof K||(rr?function(r){try{return Q.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===J(r)))}function tr(r){return X(r)||er(r)}function nr(){return new Function("return this;")()}W(tr,"isPrimitive",X),W(tr,"isObject",er);var or="object"==typeof self?self:null,ir="object"==typeof window?window:null,ar="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},ur="object"==typeof ar?ar:null,cr="object"==typeof globalThis?globalThis:null;var fr=function(r){if(arguments.length){if(!X(r))throw new TypeError(F("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return nr()}if(cr)return cr;if(or)return or;if(ir)return ir;if(ur)return ur;throw new Error("unexpected error. Unable to resolve global object.")}(),lr=fr.document&&fr.document.childNodes,sr=Int8Array;function pr(){return/^\s*function\s*([^(]*)/i}var gr,hr=/^\s*function\s*([^(]*)/i;W(pr,"REGEXP",hr),gr=Array.isArray?Array.isArray:function(r){return"[object Array]"===J(r)};var yr=gr;function dr(r){return null!==r&&"object"==typeof r}var br=function(r){if("function"!=typeof r)throw new TypeError(F("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!yr(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(dr);function vr(r){var e,t,n,o;if(("Object"===(t=J(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=hr.exec(n.toString()))return e[1]}return dr(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":t}W(dr,"isObjectLikeArray",br);var wr="function"==typeof r||"object"==typeof sr||"function"==typeof lr?function(r){return vr(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?vr(r).toLowerCase():e};var mr,jr=(mr=Object.assign,"function"===wr(mr)),Sr=Object.assign;function Or(r){return Object.keys(Object(r))}var Er=void 0!==Object.keys;function _r(r){return"[object Arguments]"===J(r)}var kr=function(){return _r(arguments)}();function Tr(r){return"string"==typeof r}var xr=String.prototype.valueOf;var Ir=Z();function Ar(r){return"object"==typeof r&&(r instanceof String||(Ir?function(r){try{return xr.call(r),!0}catch(r){return!1}}(r):"[object String]"===J(r)))}function Vr(r){return Tr(r)||Ar(r)}function Pr(r){return"number"==typeof r}W(Vr,"isPrimitive",Tr),W(Vr,"isObject",Ar);var Fr=Number,Nr=Fr.prototype.toString;var Lr=Z();function $r(r){return"object"==typeof r&&(r instanceof Fr||(Lr?function(r){try{return Nr.call(r),!0}catch(r){return!1}}(r):"[object Number]"===J(r)))}function Cr(r){return Pr(r)||$r(r)}function Br(r){return r!=r}function Rr(r){return Pr(r)&&Br(r)}function Gr(r){return $r(r)&&Br(r.valueOf())}function Mr(r){return Rr(r)||Gr(r)}W(Cr,"isPrimitive",Pr),W(Cr,"isObject",$r),W(Mr,"isPrimitive",Rr),W(Mr,"isObject",Gr);var Wr=Number.POSITIVE_INFINITY,Xr=Fr.NEGATIVE_INFINITY,Yr=Math.floor;function Zr(r){return Yr(r)===r}function Ur(r){return r<Wr&&r>Xr&&Zr(r)}function Dr(r){return Pr(r)&&Ur(r)}function Hr(r){return $r(r)&&Ur(r.valueOf())}function zr(r){return Dr(r)||Hr(r)}W(zr,"isPrimitive",Dr),W(zr,"isObject",Hr);var qr=Object.prototype.propertyIsEnumerable;var Jr=!qr.call("beep","0");function Kr(r,e){var t;return null!=r&&(!(t=qr.call(r,e))&&Jr&&Vr(r)?!Rr(e=+e)&&Dr(e)&&e>=0&&e<r.length:t)}var Qr;Qr=kr?_r:function(r){return null!==r&&"object"==typeof r&&!yr(r)&&"number"==typeof r.length&&Zr(r.length)&&r.length>=0&&r.length<=4294967295&&H(r,"callee")&&!Kr(r,"callee")};var re=Qr,ee=Array.prototype.slice;function te(r){return null!==r&&"object"==typeof r}var ne=function(r){if("function"!=typeof r)throw new TypeError(F("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!yr(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(te);W(te,"isObjectLikeArray",ne);var oe=Kr((function(){}),"prototype"),ie=!Kr({toString:null},"toString");function ae(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&Zr(r.length)&&r.length>=0&&r.length<=9007199254740991}function ue(r,e,t){var n,o;if(!ae(r)&&!Tr(r))throw new TypeError(F("invalid argument. First argument must be an array-like object. Value: `%s`.",r));if(0===(n=r.length))return-1;if(3===arguments.length){if(!Dr(t))throw new TypeError(F("invalid argument. Third argument must be an integer. Value: `%s`.",t));if(t>=0){if(t>=n)return-1;o=t}else(o=n+t)<0&&(o=0)}else o=0;if(Mr(e)){for(;o<n;o++)if(Mr(r[o]))return o}else for(;o<n;o++)if(r[o]===e)return o;return-1}function ce(r){return r.constructor&&r.constructor.prototype===r}var fe=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],le="undefined"==typeof window?void 0:window;var se=function(){var r;if("undefined"===wr(le))return!1;for(r in le)try{-1===ue(fe,r)&&H(le,r)&&null!==le[r]&&"object"===wr(le[r])&&ce(le[r])}catch(r){return!0}return!1}(),pe="undefined"!=typeof window;var ge,he=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];ge=Er?function(){return 2!==(Or(arguments)||"").length}(1,2)?function(r){return re(r)?Or(ee.call(r)):Or(r)}:Or:function(r){var e,t,n,o,i,a,u;if(o=[],re(r)){for(u=0;u<r.length;u++)o.push(u.toString());return o}if("string"==typeof r){if(r.length>0&&!H(r,"0"))for(u=0;u<r.length;u++)o.push(u.toString())}else{if(!1==(n="function"==typeof r)&&!te(r))return o;t=oe&&n}for(i in r)t&&"prototype"===i||!H(r,i)||o.push(String(i));if(ie)for(e=function(r){if(!1===pe&&!se)return ce(r);try{return ce(r)}catch(r){return!1}}(r),u=0;u<he.length;u++)a=he[u],e&&"constructor"===a||!H(r,a)||o.push(String(a));return o};var ye,de=ge,be=void 0!==Object.getOwnPropertySymbols,ve=Object,we=ve.getOwnPropertySymbols;ye=be?function(r){return we(ve(r))}:function(){return[]};var me,je=ye;function Se(r){var e,t,n;for(e=de(r),t=je(r),n=0;n<t.length;n++)Kr(r,t[n])&&e.push(t[n]);return e}me=jr?Sr:function(r){var e,t,n,o,i,a,u;if(null==r)throw new TypeError(F("invalid argument. First argument must be a non-null object. Value: `%s`.",r));for(i=ve(r),a=1;a<arguments.length;a++)if(null!=(e=arguments[a]))for(o=(t=Se(ve(e))).length,u=0;u<o;u++)i[n=t[u]]=e[n];return i};var Oe=me;function Ee(r,e){return function(r,e){var t=r.flags;return"object"!=typeof t||null===t?{}:e?Oe({},t):t}(r,!1)[e]}function _e(r){return r.dtype}function ke(r){var e,t,n;for(t=r.length,e=[],n=0;n<t;n++)e.push(r[n]);return e}function Te(r,e){return"column-major"===e?function(r){var e,t,n;for(e=[],t=1,n=0;n<r.length;n++)e.push(t),t*=r[n];return e}(r):function(r){var e,t,n,o;for(e=r.length,t=[],o=0;o<e;o++)t.push(0);for(n=1,o=e-1;o>=0;o--)t[o]=n,n*=r[o];return t}(r)}W(Te,"assign",(function(r,e,t){return"column-major"===e?function(r,e){var t,n;for(t=1,n=0;n<r.length;n++)e[n]=t,t*=r[n];return e}(r,t):function(r,e){var t,n;for(t=1,n=r.length-1;n>=0;n--)e[n]=t,t*=r[n];return e}(r,t)}));function xe(r){var e,t,n;return"number"==typeof(n=r.offset)?n:0===(t=r.shape).length||"object"!=typeof(e=r.strides)||null===e?0:function(r,e){var t,n,o;for(n=r.length,t=0,o=0;o<n;o++)e[o]<0&&(t-=e[o]*(r[o]-1));return t}(t,e)}function Ie(r){return Math.abs(r)}function Ae(r){var e,t;return"string"==typeof(t=r.order)?t:"object"!=typeof(e=r.strides)||null===e?"row-major":(t=function(r){var e,t,n,o,i,a;if(0===(t=r.length))return 0;for(e=!0,n=!0,o=Ie(r[0]),a=1;a<t;a++){if(i=Ie(r[a]),e&&i<o?e=!1:n&&i>o&&(n=!1),!n&&!e)return 0;o=i}return n&&e?3:n?1:2}(e),1===t||3===t?"row-major":2===t?"column-major":0===r.shape.length?"row-major":null)}function Ve(r){return r.data}function Pe(r){var e,t,n,o,i,a;for(n=function(r,e){var t=r.shape;return e?ke(t):t}(r,!1),o=function(r,e){var t,n,o;return"object"!=typeof(o=r.strides)||null===o?0===(n=r.shape).length?[0]:("string"!=typeof(t=r.order)&&(t="row-major"),Te(n,t)):e?ke(o):o}(r,!1),i=n.length,e=[],t=[],a=0;a<i;a++)1!==n[a]&&(t.push(n[a]),e.push(o[a]));return t.length===i?r:!0===Ee(r,"READONLY")?new r.constructor(_e(r),Ve(r),t,e,xe(r),Ae(r),{readonly:!0}):new r.constructor(_e(r),Ve(r),t,e,xe(r),Ae(r))}export{Pe as default};
//# sourceMappingURL=mod.js.map
