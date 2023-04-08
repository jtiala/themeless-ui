# ⬜️ ThemelessUI

A React component library harnessing the power of CSS.

[![License](https://img.shields.io/npm/l/themeless-ui)](https://github.com/jtiala/themeless-ui/blob/main/LICENSE)
[![npm](https://img.shields.io/npm/v/themeless-ui)](https://www.npmjs.com/package/themeless-ui)
[![CI](https://github.com/jtiala/themeless-ui/actions/workflows/ci.yml/badge.svg)](https://github.com/jtiala/themeless-ui/actions/workflows/ci.yml)

ThemelessUI is a yet another React component library, currently in very early development. Check out [the documentation](https://jtiala.github.io/themeless-ui/) and [the example app](https://codesandbox.io/p/sandbox/themeless-ui-example-d6wt46)!

ThemelessUI's approach to styling is something unique (I think?). The main design principles of the library are:

- ⬜️ Comes with very **minimal base theme**
  - Basically just a CSS reset
  - Not quite _headless_ but almost _themeless_
- 🎨 Themeable with **CSS custom properties** (= CSS variables) and by targeting CSS classes (this is probably gonna void the warranty?)
  - Since the styling is done with CSS-not-in-JS, you can easily use any build tools for optimizing your CSS
- ♿️ Fully **accessible**
  - At least until you decide to use black text on dark gray background
