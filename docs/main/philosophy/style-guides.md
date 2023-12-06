---
title: Style Guides
description: Links to the best style guides for TypeScript, Go, CSS, HTML, Ansible, Rust, Bash, PowerShell, Python, and more.
sidebar_label: Style Guides
slug: /philosophy/style-guides
---

All of our repositories should follow similar code design patterns. This makes our code more digestible by both humans and machines. We accomplish this by using strict linting settings and asking all of our contributors to verse themselves on the de-facto standard style guides that apply to the type of project they are working with.

Below, you will find recommendations for style guides to abide by depending on the project type. Linting details are covered on the [Linting](/docs/philosophy/linting) page.

## General

In general, you should take note of the style guides published by industry giants like Google. Some of these style guides, which includes style guides for multiple languages, are:

1. [Google's Style Guides](https://github.com/google/styleguide)
2. [Awesome Guidelines](https://github.com/Kristories/awesome-guidelines)
3. [Thoughtbot's Guides](https://github.com/thoughtbot/guides)
4. [Khan Academy Coding Style Guides](https://github.com/Khan/style-guides)

These style guide catalogs link to style guides to a plethora of languages that we do not focus on as well as auxilary style guides that should be paid attention to like [Google's Markdown Style Guide](https://github.com/google/styleguide/blob/gh-pages/docguide/style.md).

## Ansible

There are no widely accepted style guides available for Ansible. Instead, we recommend you look at our [Android Studio role](hhttps://gitlab.com/megabyte-labs/ansible-roles/androidstudio) as an example. Take special note of the following:

- Comments in the task files are specially marked up
- Comments in the variable files are specially marked up
- The `main.yml` file references other files based on the operating system.

If you follow the format of the Android Studio role, our automated system will automatically generate documentation properly for the role. This leads to a better experience for internetizens who make use of the role.

## Bash / Shell

The following style guides are recommended:

1. [Google's Shell Style Guide](https://google.github.io/styleguide/shellguide.html)
2. [Bahamas10 Bash Style Guide](https://github.com/bahamas10/bash-style-guide)

Combine the advice given by the style guides along with the recommendations given by the `shellcheck` linter.

## CSS / SASS / HTML

There is no shortage of CSS / SASS / HTML style guides. All of the following guides / information portals are recommended:

1. [Airbnb CSS / SASS Style Guide](https://github.com/airbnb/css)
2. [Airbnb CSS in JavaScript Guide](https://github.com/airbnb/javascript/tree/master/css-in-javascript)
3. [Google HTML / CSS Style Guide](https://google.github.io/styleguide/htmlcssguide.html)
4. [BEM](https://getbem.com/)
5. [CSS Guidelines](https://cssguidelin.es/)
6. [SASS Guidelines](https://sass-guidelin.es/)
7. [Khan Academy CSS Style Guide](https://github.com/Khan/style-guides/blob/master/style/css.md)

## Go

The following style guides are recommended:

1. [Google Go Style Guide](https://google.github.io/styleguide/go/guide)
2. [Uber Go Style Guide](https://github.com/uber-go/guide/blob/master/style.md)
3. [Khan Academy Go Style Guide](https://github.com/Khan/style-guides/blob/master/style/go.md)

Our Go projects are configured to use `golangci-lint` with a handful of plugins. The configuration is stored in the `.config/` folder.

## PowerShell

The following PowerShell style guide is perhaps one of the more notable style guides available for PowerShell:

1. [PowerShell Practice and Style](https://poshcode.gitbook.io/powershell-practice-and-style/introduction/readme)

## Python

1. [Google Python Style Guide](https://google.github.io/styleguide/pyguide.html)
2. [Official PEP 8 Python Style Guide](https://peps.python.org/pep-0008/)
3. [Khan Academy Python Style Guide](https://github.com/Khan/style-guides/blob/master/style/python.md)

Additionally, the [Hitcherhiker's Guide to Python](https://docs.python-guide.org/) is a comprehensive documentation portal that could be invaluable to some.

Flake8, with a few plugins, is used in our Python projects. The configuration is stored in the `.config/` folder.

## Rust

1. [Official Rust Style Guide](https://github.com/rust-lang/style-team/blob/master/guide/guide.md)

## TypeScript / JavaScript

1. [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)
2. [Google TypeScript Style Guide](https://google.github.io/styleguide/tsguide.html)
3. [Google JavaScript Style Guide](https://google.github.io/styleguide/jsguide.html)
4. [Clean Code JavaScript](https://github.com/ryanmcdermott/clean-code-javascript)
5. [Khan Academy JavaScript Style Guide](https://github.com/Khan/style-guides/blob/master/style/javascript.md)

Additionally, [JavaScript, The Right Way](http://jstherightway.org/) is a valuable resource that links to many useful resources.

Our projects are configured to use ESLint with a custom NPM module named [`eslint-config-strict-mode`](https://gitlab.com/megabyte-labs/npm/configs/eslint) that defines the ESLint settings / plugins. If you would like to change the settings, you should either create a pull request against `eslint-config-strict-mode` or utilize the `package.json` file to define project-specific linting overrides.

### Angular

The official Angular website offers an official style guide:

1. [Official Angular Style Guide](https://angular.io/guide/styleguide)

### Node.js

1. [Microsoft's Node.js Guidelines](https://github.com/Microsoft/nodejs-guidelines)
2. [Felixge's Node.js Style Guide](https://github.com/felixge/node-style-guide)

### React

1. [Airbnb React/JSX Style Guide](https://github.com/airbnb/javascript/tree/master/react)
2. [Khan Academy React Style Guide](https://github.com/Khan/style-guides/blob/master/style/react.md)
