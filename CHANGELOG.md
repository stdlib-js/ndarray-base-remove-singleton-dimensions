# CHANGELOG

> Package changelog.

<section class="release" id="unreleased">

## Unreleased (2026-04-01)

<section class="features">

### Features

-   [`e947540`](https://github.com/stdlib-js/stdlib/commit/e947540a4e87841d7bf140094e20b2768250de11) - add writable parameter to `ndarray/base/remove-singleton-dimensions` [(#9667)](https://github.com/stdlib-js/stdlib/pull/9667)

</section>

<!-- /.features -->

<section class="breaking-changes">

### BREAKING CHANGES

-   [`e947540`](https://github.com/stdlib-js/stdlib/commit/e947540a4e87841d7bf140094e20b2768250de11): add writable parameter and always return a new view

    -   To migrate, in order to preserve prior writable behavior, users should set the final parameter equal to a boolean indicating whether the input ndarray is writable. If not, pass `false`; if yes, pass `true`.
        To preserve prior behavior in which the input ndarray is returned if it does not have singleton dimensions, use `ndarray/base/maybe-remove-singleton-dimensions`.

</section>

<!-- /.breaking-changes -->

<section class="commits">

### Commits

<details>

-   [`3c6b016`](https://github.com/stdlib-js/stdlib/commit/3c6b01628169badc19aed4201cb66a5265c5d378) - **refactor:** improve type specificity _(by Athan Reines)_
-   [`e947540`](https://github.com/stdlib-js/stdlib/commit/e947540a4e87841d7bf140094e20b2768250de11) - **feat:** add writable parameter to `ndarray/base/remove-singleton-dimensions` [(#9667)](https://github.com/stdlib-js/stdlib/pull/9667) _(by Muhammad Haris, Athan Reines)_

</details>

</section>

<!-- /.commits -->

<section class="contributors">

### Contributors

A total of 2 people contributed to this release. Thank you to the following contributors:

-   Athan Reines
-   Muhammad Haris

</section>

<!-- /.contributors -->

</section>

<!-- /.release -->

<section class="release" id="v0.2.3">

## 0.2.3 (2026-02-08)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.2.2">

## 0.2.2 (2024-07-29)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.2.1">

## 0.2.1 (2024-02-25)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.2.0">

## 0.2.0 (2024-02-14)

<section class="bug-fixes">

### Bug Fixes

-   [`9741d55`](https://github.com/stdlib-js/stdlib/commit/9741d5527de099260554aa7f4e2e4ca4c3e2cd2a) - add missing argument

</section>

<!-- /.bug-fixes -->

<section class="commits">

### Commits

<details>

-   [`dea49e0`](https://github.com/stdlib-js/stdlib/commit/dea49e03ab5571233e3da26835a6a6d3256d5737) - **docs:** use single quotes in require calls instead of backticks _(by Philipp Burckhardt)_
-   [`9741d55`](https://github.com/stdlib-js/stdlib/commit/9741d5527de099260554aa7f4e2e4ca4c3e2cd2a) - **fix:** add missing argument _(by Athan Reines)_
-   [`725cf2d`](https://github.com/stdlib-js/stdlib/commit/725cf2d5e22b6d745c5c0565dee497b06594d730) - **refactor:** use accessor utilities _(by Athan Reines)_

</details>

</section>

<!-- /.commits -->

<section class="contributors">

### Contributors

A total of 2 people contributed to this release. Thank you to the following contributors:

-   Athan Reines
-   Philipp Burckhardt

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

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

### BREAKING CHANGES

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

<section class="commits">

### Commits

<details>

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0) - **feat:** update minimum TypeScript version _(by Philipp Burckhardt)_

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

<section class="release" id="v0.0.1">

## 0.0.1 (2022-02-16)

No changes reported for this release.

</section>

<!-- /.release -->

