"use strict";var c=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var q=c(function(D,g){
var h=require('@stdlib/ndarray-base-assert-is-read-only/dist'),n=require('@stdlib/ndarray-base-dtype/dist'),l=require('@stdlib/ndarray-base-shape/dist'),p=require('@stdlib/ndarray-base-strides/dist'),v=require('@stdlib/ndarray-base-offset/dist'),o=require('@stdlib/ndarray-base-order/dist'),f=require('@stdlib/ndarray-base-data-buffer/dist');function d(r){var e,a,i,u,s,t;for(i=l(r,!1),u=p(r,!1),s=i.length,e=[],a=[],t=0;t<s;t++)i[t]!==1&&(a.push(i[t]),e.push(u[t]));return a.length===s?r:h(r)?new r.constructor(n(r),f(r),a,e,v(r),o(r),{readonly:!0}):new r.constructor(n(r),f(r),a,e,v(r),o(r))}g.exports=d
});var m=q();module.exports=m;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
