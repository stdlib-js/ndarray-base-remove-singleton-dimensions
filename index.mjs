// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-assert-is-read-only@esm/index.mjs";var e=r;var t=function(r){var t,s,a,d,n,o;for(a=r.shape,d=r.strides,n=a.length,t=[],s=[],o=0;o<n;o++)1!==a[o]&&(s.push(a[o]),t.push(d[o]));return s.length===n?r:e(r)?new r.constructor(r.dtype,r.data,s,t,r.offset,r.order,{readonly:!0}):new r.constructor(r.dtype,r.data,s,t,r.offset,r.order)};export{t as default};
//# sourceMappingURL=index.mjs.map
