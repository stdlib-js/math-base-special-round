# CHANGELOG

> Package changelog.

<section class="release" id="unreleased">

## Unreleased (2025-11-03)

<section class="reverts">

### Reverts

-   [`d8a4cfb`](https://github.com/stdlib-js/stdlib/commit/d8a4cfb578a949ed07c7a18749e48096f4f9b488) - chore: update to modern benchmark Makefile

</section>

<!-- /.reverts -->

<section class="commits">

### Commits

<details>

-   [`b3f545b`](https://github.com/stdlib-js/stdlib/commit/b3f545b23e9342a89be6cebd39b8215a9aec36a0) - **chore:** add structured package data for `math/base/special/round` [(#8354)](https://github.com/stdlib-js/stdlib/pull/8354) _(by Sachin Pangal, Athan Reines)_
-   [`580a43f`](https://github.com/stdlib-js/stdlib/commit/580a43fb5dcd86b4e2647cc0b9bdae271e889301) - **chore:** minor clean-up _(by Philipp Burckhardt)_
-   [`7cd0373`](https://github.com/stdlib-js/stdlib/commit/7cd03736a4c79cf5fff04bb84c97c458f987f4c6) - **bench:** fix function name and use `random_uniform` _(by Karan Anand)_
-   [`220f055`](https://github.com/stdlib-js/stdlib/commit/220f05572a13425bd7b49efbf6102eef8975d9c1) - **chore:** replace manual `for` loop in examples [(#6491)](https://github.com/stdlib-js/stdlib/pull/6491) _(by Harsh Yadav)_
-   [`a1e230f`](https://github.com/stdlib-js/stdlib/commit/a1e230f29297caa89880e9c194c615a0400fb7bc) - **chore:** clean up cppcheck-suppress comments _(by Karan Anand)_
-   [`b9af090`](https://github.com/stdlib-js/stdlib/commit/b9af09027170bf2731cdd50563be1a9d0f86b289) - **bench:** update random value generation [(#6400)](https://github.com/stdlib-js/stdlib/pull/6400) _(by Harsh Yadav)_
-   [`fd45831`](https://github.com/stdlib-js/stdlib/commit/fd45831e4ee27601c389c8f1b8b2779a95c8d7b4) - **bench:** refactor benchmarks and update test messages in `math/base/special/round` [(#4950)](https://github.com/stdlib-js/stdlib/pull/4950) _(by Gururaj Gurram, Athan Reines)_
-   [`2ea848b`](https://github.com/stdlib-js/stdlib/commit/2ea848b62b686e1e9d861f7df25ece23a7d80798) - **style:** update to use tabs for indentation _(by Philipp Burckhardt)_
-   [`ff25e13`](https://github.com/stdlib-js/stdlib/commit/ff25e1324e1507cc076078e82badce7fdf7915f6) - **docs:** remove excess whitespace _(by Philipp Burckhardt)_
-   [`b0e68c5`](https://github.com/stdlib-js/stdlib/commit/b0e68c5bc8ee985794eb2ea1791c9337cd15fbd0) - **chore:** update to modern benchmark Makefile _(by Philipp Burckhardt)_
-   [`d8a4cfb`](https://github.com/stdlib-js/stdlib/commit/d8a4cfb578a949ed07c7a18749e48096f4f9b488) - **revert:** chore: update to modern benchmark Makefile _(by Philipp Burckhardt)_
-   [`97a27cf`](https://github.com/stdlib-js/stdlib/commit/97a27cf2746042026c3e68416b7c5f9da2bb24d9) - **chore:** update to modern benchmark Makefile _(by Philipp Burckhardt)_
-   [`2ce25ea`](https://github.com/stdlib-js/stdlib/commit/2ce25ea8e857700287558847d93b108f3ca6b33d) - **build:** add WebAssembly configuration _(by Athan Reines)_
-   [`55ec8ed`](https://github.com/stdlib-js/stdlib/commit/55ec8edfeb7000bca7478af116e794f20560e922) - **docs:** remove comment _(by Athan Reines)_
-   [`2777e4b`](https://github.com/stdlib-js/stdlib/commit/2777e4be161869d09406e3b17947d24c64b47af2) - **bench:** resolve lint errors in benchmarks _(by Athan Reines)_

</details>

</section>

<!-- /.commits -->

<section class="contributors">

### Contributors

A total of 6 people contributed to this release. Thank you to the following contributors:

-   Athan Reines
-   Gururaj Gurram
-   Harsh Yadav
-   Karan Anand
-   Philipp Burckhardt
-   Sachin Pangal

</section>

<!-- /.contributors -->

</section>

<!-- /.release -->

<section class="release" id="v0.3.0">

## 0.3.0 (2024-07-27)

<section class="features">

### Features

-   [`0227bf0`](https://github.com/stdlib-js/stdlib/commit/0227bf0cbf95d5168bfa8efaf9f0286869f753fe) - add C implementation for `math/base/special/round`

</section>

<!-- /.features -->

<section class="bug-fixes">

### Bug Fixes

-   [`947e77f`](https://github.com/stdlib-js/stdlib/commit/947e77f645e36d13cacfd68b97c6311a5524195a) - handle large numbers correctly and revert to Math.round for JS

</section>

<!-- /.bug-fixes -->

<section class="commits">

### Commits

<details>

-   [`62e703a`](https://github.com/stdlib-js/stdlib/commit/62e703a5eb7df95a40b3592366da89c5ff42a1b1) - **docs:** add missing `@private` in `math/base/special/round/lib/native.js` [(#2536)](https://github.com/stdlib-js/stdlib/pull/2536) _(by Gunj Joshi)_
-   [`133dd8b`](https://github.com/stdlib-js/stdlib/commit/133dd8bdce3709d5aeda84906b79882f86d9989d) - **chore:** update package meta data [(#2251)](https://github.com/stdlib-js/stdlib/pull/2251) _(by stdlib-bot)_
-   [`c37109b`](https://github.com/stdlib-js/stdlib/commit/c37109b3c683878107df935c393a9301cb38d5a7) - **test:** fix missing argument _(by Athan Reines)_
-   [`947e77f`](https://github.com/stdlib-js/stdlib/commit/947e77f645e36d13cacfd68b97c6311a5524195a) - **fix:** handle large numbers correctly and revert to Math.round for JS _(by Philipp Burckhardt)_
-   [`0227bf0`](https://github.com/stdlib-js/stdlib/commit/0227bf0cbf95d5168bfa8efaf9f0286869f753fe) - **feat:** add C implementation for `math/base/special/round` _(by Pranav Goswami, Philipp Burckhardt)_

</details>

</section>

<!-- /.commits -->

<section class="contributors">

### Contributors

A total of 4 people contributed to this release. Thank you to the following contributors:

-   Athan Reines
-   Gunj Joshi
-   Philipp Burckhardt
-   Pranav Goswami

</section>

<!-- /.contributors -->

</section>

<!-- /.release -->

<section class="release" id="v0.2.1">

## 0.2.1 (2024-02-21)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.2.0">

## 0.2.0 (2024-02-14)

<section class="commits">

### Commits

<details>

-   [`215dfe6`](https://github.com/stdlib-js/stdlib/commit/215dfe690670731f044d09c92832081bc99372cc) - **docs:** update links _(by Athan Reines)_

</details>

</section>

<!-- /.commits -->

<section class="contributors">

### Contributors

A total of 1 person contributed to this release. Thank you to this contributor:

-   Athan Reines

</section>

<!-- /.contributors -->

</section>

<!-- /.release -->

<section class="release" id="v0.1.1">

## 0.1.1 (2023-10-03)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.1.0">

## 0.1.0 (2023-09-22)

<section class="features">

### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

<section class="commits">

### Commits

<details>

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - **feat:** update minimum TypeScript version _(by Philipp Burckhardt)_

</details>

</section>

<!-- /.commits -->

<section class="contributors">

### Contributors

A total of 1 person contributed to this release. Thank you to this contributor:

-   Philipp Burckhardt

</section>

<!-- /.contributors -->

</section>

<!-- /.release -->

<section class="release" id="v0.0.7">

## 0.0.7 (2022-02-16)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.6">

## 0.0.6 (2021-08-22)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.5">

## 0.0.5 (2021-07-06)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.4">

## 0.0.4 (2021-06-27)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.3">

## 0.0.3 (2021-06-16)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.2">

## 0.0.2 (2021-06-15)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.1">

## 0.0.1 (2021-06-14)

No changes reported for this release.

</section>

<!-- /.release -->

