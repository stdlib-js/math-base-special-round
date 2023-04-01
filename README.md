<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# Round

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Round a numeric value to the nearest integer.

<section class="installation">

## Installation

```bash
npm install @stdlib/math-base-special-round
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm` branch][esm-url].
-   If you are using Deno, visit the [`deno` branch][deno-url].
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd` branch][umd-url].

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

</section>

<section class="usage">

## Usage

```javascript
var round = require( '@stdlib/math-base-special-round' );
```

#### round( x )

Rounds a `numeric` value to the nearest `integer`.

```javascript
var v = round( -4.2 );
// returns -4.0

v = round( -4.5 );
// returns -4.0

v = round( -4.6 );
// returns -5.0

v = round( 9.99999 );
// returns 10.0

v = round( 9.5 );
// returns 10.0

v = round( 9.2 );
// returns 9.0

v = round( 0.0 );
// returns 0.0

v = round( -0.0 );
// returns -0.0

v = round( Infinity );
// returns Infinity

v = round( -Infinity );
// returns -Infinity

v = round( NaN );
// returns NaN
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   Ties are rounded toward positive infinity.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random-base-randu' );
var round = require( '@stdlib/math-base-special-round' );

var x;
var i;

for ( i = 0; i < 100; i++ ) {
    x = (randu()*100.0) - 50.0;
    console.log( 'Value: %d. Rounded: %d.', x, round( x ) );
}
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/math-base/special/ceil`][@stdlib/math/base/special/ceil]</span><span class="delimiter">: </span><span class="description">round a double-precision floating-point number toward positive infinity.</span>
-   <span class="package-name">[`@stdlib/math-base/special/floor`][@stdlib/math/base/special/floor]</span><span class="delimiter">: </span><span class="description">round a double-precision floating-point number toward negative infinity.</span>
-   <span class="package-name">[`@stdlib/math-base/special/roundn`][@stdlib/math/base/special/roundn]</span><span class="delimiter">: </span><span class="description">round a numeric value to the nearest multiple of 10^n.</span>
-   <span class="package-name">[`@stdlib/math-base/special/trunc`][@stdlib/math/base/special/trunc]</span><span class="delimiter">: </span><span class="description">round a double-precision floating-point number toward zero.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-base-special-round.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-base-special-round

[test-image]: https://github.com/stdlib-js/math-base-special-round/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/math-base-special-round/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-base-special-round/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-base-special-round?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-base-special-round.svg
[dependencies-url]: https://david-dm.org/stdlib-js/math-base-special-round/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/math-base-special-round/tree/deno
[umd-url]: https://github.com/stdlib-js/math-base-special-round/tree/umd
[esm-url]: https://github.com/stdlib-js/math-base-special-round/tree/esm
[branches-url]: https://github.com/stdlib-js/math-base-special-round/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/math-base-special-round/main/LICENSE

<!-- <related-links> -->

[@stdlib/math/base/special/ceil]: https://github.com/stdlib-js/math-base-special-ceil

[@stdlib/math/base/special/floor]: https://github.com/stdlib-js/math-base-special-floor

[@stdlib/math/base/special/roundn]: https://github.com/stdlib-js/math-base-special-roundn

[@stdlib/math/base/special/trunc]: https://github.com/stdlib-js/math-base-special-trunc

<!-- </related-links> -->

</section>

<!-- /.links -->
