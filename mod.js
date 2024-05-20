// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r=Math.floor,n=Number.NEGATIVE_INFINITY;function t(t){return function(r){return r!=r}(t)?NaN:function(r){return 0===r&&1/r===n}(t)||t>=-.5&&t<0?-0:t>0&&t<.5?0:r(t+.5)}export{t as default};
//# sourceMappingURL=mod.js.map
