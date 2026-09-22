"use strict";var g=function(r,e){return function(){try{return e||r((e={exports:{}}).exports,e),e.exports}catch(a){throw (e=0, a)}};};var o=g(function(S,n){
var f=require('@stdlib/ndarray-base-dtype/dist'),p=require('@stdlib/ndarray-base-shape/dist'),q=require('@stdlib/ndarray-base-strides/dist'),h=require('@stdlib/ndarray-base-offset/dist'),c=require('@stdlib/ndarray-base-order/dist'),l=require('@stdlib/ndarray-base-data-buffer/dist');function d(r,e){var a,i,s,u,v,t;for(s=p(r,!1),u=q(r,!1),v=s.length,a=[],i=[],t=0;t<v;t++)s[t]!==1&&(i.push(s[t]),a.push(u[t]));return new r.constructor(f(r),l(r),i,a,h(r),c(r),{readonly:!e})}n.exports=d
});var m=o();module.exports=m;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
