// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r=function(r){var t=r.flags;return t&&!0===t.READONLY};var t=function(t){var e,a,n,o,s,d;for(n=t.shape,o=t.strides,s=n.length,e=[],a=[],d=0;d<s;d++)1!==n[d]&&(a.push(n[d]),e.push(o[d]));return a.length===s?t:r(t)?new t.constructor(t.dtype,t.data,a,e,t.offset,t.order,{readonly:!0}):new t.constructor(t.dtype,t.data,a,e,t.offset,t.order)};export{t as default};
//# sourceMappingURL=mod.js.map
