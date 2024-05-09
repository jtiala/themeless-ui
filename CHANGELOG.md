# Changelog

## [0.7.0](https://github.com/jtiala/themeless-ui/compare/themeless-ui-v0.6.0...themeless-ui-v0.7.0) (2024-05-09)


### ⚠ BREAKING CHANGES

* updating Vite to v5

### Features

* add Prose component ([535ebfb](https://github.com/jtiala/themeless-ui/commit/535ebfbcba38d54d1b2b4031434c4d57fad97c0c))
* add some null and empty check predicates to the utils package ([44ec671](https://github.com/jtiala/themeless-ui/commit/44ec671cff646daab3a702618e74ad03bc002540))
* add Storybook utils ([5f0dbf3](https://github.com/jtiala/themeless-ui/commit/5f0dbf37dc65af4ad668520a1058f20e70c9f070))
* add util function for generating css class name strings conditionally ([e94195d](https://github.com/jtiala/themeless-ui/commit/e94195d474718390be13f462e92f90f1b30c9f51))
* add web components example app ([486c508](https://github.com/jtiala/themeless-ui/commit/486c5080bb01152a9b23549f31e498d59602f8cf))
* create web component for each of the tui component that didn't have one already ([5a7592b](https://github.com/jtiala/themeless-ui/commit/5a7592b55cc864e1e4d355754f2c29ae08a52689))
* import css for web components from styles package ([0ac88fc](https://github.com/jtiala/themeless-ui/commit/0ac88fc7077740737e39a30990cc86293e2fd771))
* initial setup for web components ([4f18c6a](https://github.com/jtiala/themeless-ui/commit/4f18c6ab58e00c179ce48f8103b4668d3ad90d64))
* publish every component's css as it's own file as well as the whole bundle ([b002b25](https://github.com/jtiala/themeless-ui/commit/b002b25f3931296031d61b12ef4bd9618d0e659c))
* use cns util in stack class names ([b1eecbe](https://github.com/jtiala/themeless-ui/commit/b1eecbe4061db09d10b62820c14f65e56104c74b))


### Bug Fixes

* css selectors ([470e70c](https://github.com/jtiala/themeless-ui/commit/470e70ccbf0048c28d8126e6f4995f172960ce67))
* incorrect css rules ([140e1f7](https://github.com/jtiala/themeless-ui/commit/140e1f76d685c91535cc4caf3512118dbcb9d318))
* manually install vitest/except to fix linting error ([9078b54](https://github.com/jtiala/themeless-ui/commit/9078b5458da8a6c87ef87cc3e5c826dc754b04ac))
* use type stored in const ([39c8de0](https://github.com/jtiala/themeless-ui/commit/39c8de0c56b28ac5d0bc760bf39ba9bb1e98fced))


### Miscellaneous Chores

* update dependencies ([16cbe59](https://github.com/jtiala/themeless-ui/commit/16cbe5930d00029f4cb72e96e9755fa797ec77cf))

## [0.6.0](https://github.com/jtiala/themeless-ui/compare/themeless-ui-v0.5.0...themeless-ui-v0.6.0) (2023-09-23)


### Miscellaneous Chores

* release 0.6.0 ([c685908](https://github.com/jtiala/themeless-ui/commit/c6859081ea81ca09ab7b099dd3b18469b52e0f13))

## [0.5.0](https://github.com/jtiala/themeless-ui/compare/themeless-ui-v0.4.0...themeless-ui-v0.5.0) (2023-09-15)


### Features

* add grayscale palette ([1997d13](https://github.com/jtiala/themeless-ui/commit/1997d138414b0036792f30d2cc9a6791d038a6a7))
* add id property to for all components ([b7f51fd](https://github.com/jtiala/themeless-ui/commit/b7f51fde6796c3b78b86ac840bc34d2191d3d1e2))
* button component ([9a8f4f7](https://github.com/jtiala/themeless-ui/commit/9a8f4f7c4a8780d4bb0123812d6ce2b6d20ca28d))
* input component ([7ad4b1b](https://github.com/jtiala/themeless-ui/commit/7ad4b1b791ed8deb3193496d493dbfabf765dcd5))
* textarea component ([b5266b3](https://github.com/jtiala/themeless-ui/commit/b5266b38a557029f9352f62954d8f6d0fda0ffa7))


### Bug Fixes

* add missing imports ([b47baa5](https://github.com/jtiala/themeless-ui/commit/b47baa55bea7f43de1e7c0ec6fe9765b9c74d5f9))
* jest-dom usage with vitest ([686914a](https://github.com/jtiala/themeless-ui/commit/686914a0646fd54896498a54255623df8a6db08b))

## [0.4.0](https://github.com/jtiala/themeless-ui/compare/themeless-ui-v0.3.0...themeless-ui-v0.4.0) (2023-07-31)


### ⚠ BREAKING CHANGES

* stop exposing rest of the params to the created heading element

### Features

* add Anchor component ([4115edc](https://github.com/jtiala/themeless-ui/commit/4115edc0759bd2d17d3195a409dedc4536f283d4))
* add blockquote component ([ccc84dd](https://github.com/jtiala/themeless-ui/commit/ccc84dd536f1977298aea11935ac471894da97c1))
* add list component ([fdd3559](https://github.com/jtiala/themeless-ui/commit/fdd3559ab26a1e78d6f429fb2d09979b1b850a19))
* add nextjs example app ([61d782a](https://github.com/jtiala/themeless-ui/commit/61d782aaf31b90b6b8a38a548b1a80679839057b))
* add Stack component ([3e1439c](https://github.com/jtiala/themeless-ui/commit/3e1439c102a9ce23629356f38998439a95642ae3))


### Bug Fixes

* add some missing css font rules ([dd9c95e](https://github.com/jtiala/themeless-ui/commit/dd9c95edafd49ee6e75243720ee67cd0dc17c535))
* allow any children for List ([e0e3de4](https://github.com/jtiala/themeless-ui/commit/e0e3de44d6d651c679d7d4dc0ca687b4cb7a1b7b))
* stop exposing rest of the params to the created heading element ([68252b2](https://github.com/jtiala/themeless-ui/commit/68252b29e1b18a2f8a284695bf886b4590dee814))

## [0.3.0](https://github.com/jtiala/themeless-ui/compare/themeless-ui-v0.2.0...themeless-ui-v0.3.0) (2023-06-30)


### Features

* Add React example app ([54f4da1](https://github.com/jtiala/themeless-ui/commit/54f4da19c26f943c382fd22568c85cc8ef43c61e))

## [0.2.0](https://github.com/jtiala/themeless-ui/compare/themeless-ui-v0.1.0...themeless-ui-v0.2.0) (2023-06-30)


### Features

* Automate publising ([7c8b8b1](https://github.com/jtiala/themeless-ui/commit/7c8b8b15c2f07054e8b6e723e259ba6467858fd5))

## 0.1.0 (2023-06-30)


### ⚠ BREAKING CHANGES

* Monorepo setup

### Features

* Monorepo setup ([93dd1be](https://github.com/jtiala/themeless-ui/commit/93dd1be93af8ff892fbe773d9d3f8e3f64d256cd))
