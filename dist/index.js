"use strict";var g=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var o=g(function(S,n){
var f=require('@stdlib/ndarray-base-dtype/dist'),p=require('@stdlib/ndarray-base-shape/dist'),q=require('@stdlib/ndarray-base-strides/dist'),h=require('@stdlib/ndarray-base-offset/dist'),c=require('@stdlib/ndarray-base-order/dist'),l=require('@stdlib/ndarray-base-data-buffer/dist');function d(r,e){var s,i,a,u,v,t;for(a=p(r,!1),u=q(r,!1),v=a.length,s=[],i=[],t=0;t<v;t++)a[t]!==1&&(i.push(a[t]),s.push(u[t]));return new r.constructor(f(r),l(r),i,s,h(r),c(r),{readonly:!e})}n.exports=d
});var m=o();module.exports=m;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
