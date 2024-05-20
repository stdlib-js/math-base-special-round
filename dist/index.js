"use strict";var u=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var t=u(function(q,i){
var n=require('@stdlib/math-base-assert-is-nan/dist'),a=require('@stdlib/math-base-special-floor/dist'),s=require('@stdlib/math-base-assert-is-negative-zero/dist');function o(r){return n(r)?NaN:s(r)||r>=-.5&&r<0?-0:r>0&&r<.5?0:a(r+.5)}i.exports=o
});var f=t();module.exports=f;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
