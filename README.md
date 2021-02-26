# 📦🏷bumpup
**fully automated and extensible software versioning**

[![bumpup](https://img.shields.io/badge/%F0%9F%93%A6-bumpup-informational)](https:/github.com/danielr1996/bumpup)
[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)
[![Open Source Love png1](https://badges.frapsoft.com/os/v1/open-source.png?v=103)](https://github.com/ellerbrock/open-source-badges/)
[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/dwyl/esta/issues)
[![Awesome Badges](https://img.shields.io/badge/badges-awesome-green.svg)](https://github.com/Naereen/badges)

![Build](https://github.com/danielr1996/bumpup-deno/workflows/Build/badge.svg)
[![codecov](https://codecov.io/gh/danielr1996/bumpup/branch/master/graph/badge.svg)](https://codecov.io/gh/danielr1996/bumpup)
[![HitCount](http://hits.dwyl.com/danielr1996/bumpup.svg)](http://hits.dwyl.com/danielr1996/bumpup)

> 📦 If you just want to see how to use `bumpup` head straight to [@bumpup/cli](packages/cli/README.md)

Like
[standard-version](https://github.com/conventional-changelog/standard-version#readme),
[release-it](https://github.com/release-it/release-it#readme) or
[semantic-release](https://github.com/semantic-release/semantic-release)
but more configurable.

## Highlights
- configurable
- extensible through plugins
- automated
- monorepo compatible

## Key Concepts
`bumpup` focuses on automating the typical steps involved in software versioning, which for a simple npm project might be:
- reading the current version from `package.json`
- determining the next version according to `semver`
- writing the version to `package.json`
- generating a `CHANGELOG.md`
- push the changes back to the repository
- publish the new package to npm

While these steps work for most projects there are cases where one step differs slightly from the default.
That's were the plugins come into play: Where other tools promote an *opinionated* style of how each step should look `bumpup`
allows you to easily swap out plugins or even write your own if your use cases is not supported.


