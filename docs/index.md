---
title: Documentation Overview
description: Get an overview of Megabyte Labs, the open-source collective that publishes amazing, free developer tools.
slug: /
sidebar_label: Overview
top_banner: /docs/img/featured/megabyte-labs.png
top_banner_alt: Megabyte Labs Free Developer Tools banner
---

Welcome to the Megabyte Labs documentation portal. Megabyte Labs is an open-source company dedicated to providing useful, sleek, intuitive developer and consumer tools. If you are a first-time contributor to a Megabyte Labs project then you are in the right spot.

## Motivation

When developing anything in the Megabyte Labs eco-system, we do our best to adhere to modern software design patterns. We also try to leverage industry-leading technologies whenever they can improve the quality of our codebase, ease of code management, and efficiency of our developers. Part of this requires our developers to all adhere to the same basic rules and code strategies.

## Strategies

Some of the strategies we leverage are:

* **Automation** - Whenever possible, automate and abstract technical details away from the developer / end-user.
* **Style Guides** - Ensure you are adhereing to de-facto standard style guides for the type of code you are developing. *See the [Style Guide](/docs/philosophy/style-guides) page.*
* **Linting** - Leverage code linters to ensure popular recommendations are utilized so that code developed by different developers ends up looking similar. *See the [Linting](/docs/philosophy/linting) page.*
* **Git** - When committing code, ensure perfection by using properly formatted commit messages. When creating pull requests, ensure that the pull request message is formatted in such a way that it closes the issues it addreses. *See the [Contributing](/docs/contributing) section.*

## Repositories

The easiest way to browse through all our various projects is on [GitLab](https://gitlab.com/megabyte-labs) since it allows grouping repositories. When creating new repositories, please ensure that the repository is placed in the location that makes the most sense. You can browse through our project documentation by reading the README files in the GitLab organization or, perhaps faster, by browsing through the [Code documentation navigator](/docs/code) which is in this documentation portal (linked on the top navigation bar). The documentation navigator extracts the documentation from each of our projects by scanning the README files in each of our projects.

## Automation

As mentioned, we attempt to automate as much as possible. This includes tasks like:

* Setting up a GitLab / GitHub repository for all our projects via APIs (when appropriate API token environment variables are set)
* Auto-fixing files with ESLint and other auto-fixers
* Setting up git hooks to perform tasks like linting files that have been changed in a commit
* Automatically building README files by re-using documentation partials for sections that should be in every README file

### Documentation

In all of our projects, documentation partials are stored in the appropriate repository found in our [Documentation group](https://gitlab.com/megabyte-labs/documentation). These files are then combined with the project-specific documentation to create dazzling README and CONTRIBUTING files for each project.

The project specific documentation should be stored in `docs/partials/guide.md`. When running `bash start.sh`, the documentation will automatically rebuild and inject any updates added to `docs/partials/guide.md`.

### Project-Specific Variables

There are a handful of variables that need to be stored in each project in order to allow our automated system to work properly. These variables are generally all stored in the `package.json` file which is included in every project. More specifically, the variables should be added to the `blueprint` object inside of the `package.json` file. To get a better idea of how it all works, you should check out the `blueprint` section of the `package.json` in a few of our projects.

## CLI / Taskfiles

Nearly all of our code apart from project code (i.e. TypeScript, Python, Go, Rust, etc.) is hosted in Taskfiles that are shared globally across all projects. Taskfiles files are basically shell scripts stored in YAML, in a format that our task runner (go-task) can digest. It allows us to do things like reuse code snippets across multiple tasks, handle the installation of CLI dependencies, and include documentation alongside our scripts.

### Updating Tasks

If you need to make a change to a Taskfile, then you should commit your changes against the [Taskfile repository](https://gitlab.com/megabyte-labs/common/taskfiles). These files get bundled into a project after the user initializes it by running `bash start.sh`.

### Task Definitions

Since the Taskfile format includes support for inlining documentation alongside task definitions, we made it possible for you to browse through the task definitions in the [CLI navigator](/docs/cli) section of this documentation portal.
