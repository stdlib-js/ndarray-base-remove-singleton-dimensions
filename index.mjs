// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-assert-is-read-only@esm/index.mjs";function t(t){var r,s,d,n,o,a;for(d=t.shape,n=t.strides,o=d.length,r=[],s=[],a=0;a<o;a++)1!==d[a]&&(s.push(d[a]),r.push(n[a]));return s.length===o?t:e(t)?new t.constructor(t.dtype,t.data,s,r,t.offset,t.order,{readonly:!0}):new t.constructor(t.dtype,t.data,s,r,t.offset,t.order)}export{t as default};
//# sourceMappingURL=index.mjs.map
