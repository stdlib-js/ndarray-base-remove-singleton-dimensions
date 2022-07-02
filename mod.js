// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r=function(r){var t=r.flags;return t&&!0===t.READONLY};function t(t){var e,n,o,a,s,d;for(o=t.shape,a=t.strides,s=o.length,e=[],n=[],d=0;d<s;d++)1!==o[d]&&(n.push(o[d]),e.push(a[d]));return n.length===s?t:r(t)?new t.constructor(t.dtype,t.data,n,e,t.offset,t.order,{readonly:!0}):new t.constructor(t.dtype,t.data,n,e,t.offset,t.order)}export{t as default};
//# sourceMappingURL=mod.js.map
