"use strict";var d=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var u=d(function(h,o){
var f=require('@stdlib/ndarray-base-assert-is-read-only/dist');function v(r){var e,s,n,i,a,t;for(n=r.shape,i=r.strides,a=n.length,e=[],s=[],t=0;t<a;t++)n[t]!==1&&(s.push(n[t]),e.push(i[t]));return s.length===a?r:f(r)?new r.constructor(r.dtype,r.data,s,e,r.offset,r.order,{readonly:!0}):new r.constructor(r.dtype,r.data,s,e,r.offset,r.order)}o.exports=v
});var p=u();module.exports=p;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
