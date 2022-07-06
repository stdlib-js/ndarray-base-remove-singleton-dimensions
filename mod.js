// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function t(t){var e,r,o,s,a,n,d;for(o=t.shape,s=t.strides,a=o.length,e=[],r=[],n=0;n<a;n++)1!==o[n]&&(r.push(o[n]),e.push(s[n]));return r.length===a?t:(d=t.flags)&&!0===d.READONLY?new t.constructor(t.dtype,t.data,r,e,t.offset,t.order,{readonly:!0}):new t.constructor(t.dtype,t.data,r,e,t.offset,t.order)}export{t as default};
//# sourceMappingURL=mod.js.map
