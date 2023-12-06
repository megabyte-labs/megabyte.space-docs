---
title: Strict Lint
description: Read about Strict Lint, a project collection maintained by Megabyte Labs that contains well-crafted, sensible, yet strict linting and auto-fixer configurations that any project can utilize.
sidebar_label: Strict Lint
slug: /featured/strict-lint
top_banner: /docs/img/featured/strict-lint.png
---

[Strict Lint](https://strictlint.com) is a collection of batteries-included, shared automation tool configurations that you can leverage for linting / auto-fixing a growing list of languages. The collection is maintained by [Megabyte Labs](https://megabyte.space) (GitLab group repository located [here](https://gitlab.com/megabyte-labs)). These configurations are used as the default configurations in all Megabyte Labs projects as well as projects maintained by [GitSync](https://gitsync.org), another Megabyte Labs project. GitSync is a tool designed to help developers maintain a large number of repositories by synchronizing common project settings using templates.

## Purpose of Strict Lint

All the configurations in the Strict Lint collection are designed to:

- Ensure the rapid on-boardment of new developers onto projects
- Help developers learn about the best coding practices
- Create maintainable code bases that look as if one developer coded everything
- Leverage auto-fixing techniques to automatically apply performance and style improvements

## Modular Configuration Packages

Strict Lint encompasses expertly crafted configurations for a wide variety of linters, auto-fixers, and deployment tools. Each of the shared configurations are available as NPM packages with alternate project inclusion methods possible for some of them. The tools that Strict Lint currently offers shared configurations for are:

| Name                                                                     | Descripion                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| ------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [ESLint](https://eslint.org/)                                            | **[`eslint-config-strict-lint`](https://github.com/megabyte-labs/eslint-config-strict-lint)**: The de-facto standard and most powerful TypeScript, JavaScript, JSON, and YAML linting engine and auto-fixer.                                                                                                                                                                                                                                    |
| [Prettier](https://prettier.io/)                                         | **[`prettier-config-strict-lint`](https://github.com/megabyte-labs/prettier-config-strict-lint)**: A code formatting engine that supports formatting many different types of files such as TypeScript, JavaScript, JSON, YAML, Markdown, PHP, Pug, Ruby, XML, Go templates, Java, and many more. Our set of configurations work in union - the ESLint configuration imports the Prettier configuration so that there are no conflicting rules.  |
| [StyleLint](https://stylelint.io/)                                       | **[`stylelint-config-strict-lint`](https://github.com/megabyte-labs/stylelint-config-strict-lint)**: Linting and auto-fixing engine for StyleLint. It automatically formats and lints SCSS / CSS.                                                                                                                                                                                                                                               |
| [Flake8](https://flake8.pycqa.org/en/latest/)                            | **[`flake8-config-strict-lint`](https://github.com/megabyte-labs/flake8-config-strict-lint)**: All-in-one, powerful configuration for Flake8, the Python linter. The configuration is almost entirely based on the [`wemake-python-styleguide`](https://wemake-python-styleguide.readthedocs.io/en/latest/index.html), with a few more plugins enabled.                                                                                         |
| [golangci-lint](https://golangci-lint.run/)                              | **[`golangci-lint-strict-lint`](https://github.com/megabyte-labs/golangci-lint-strict-lint)**: Single file configuration that enables all the best Go-lang linting plugins that `golangci-lint` offers.                                                                                                                                                                                                                                         |
| [commitlint](https://commitlint.js.org/)                                 | **[`commitlint-strict-lint`](http://github.com/megabyte-labs/commitlint-strict-lint)**: A configuration for `commitlint` that is essentially a fork of [ `@commitlint/config-conventional`](https://www.npmjs.com/package/@commitlint/config-conventional) with support for our [`git-cz-emoji`](https://github.com/megabyte-labs/git-cz-emoji) library (for a `git commit` TUI experience that encourages all commits to start with an emoji). |
| [semantic-release](https://github.com/semantic-release/semantic-release) | **[`semantic-release-config`](https://github.com/megabyte-labs/semantic-release-config)**: Heavily customized `semantic-release` configuration that supports a wide variety of automated, versioned releases which are based on the project type. The release types include NPM packages, PyPi packages, Ansible roles, Docker containers, Go packages, and even full VM images via Vagrant.                                                    |

## Everything Enabled & No-Overlapping Rules

Most of the linting configuration packages are collections of plugins for a given linter with rules to enable as many rules as possible. At the same time, the configurations are configured to have no overlapping rules. The configurations make a best attempt at including as many rules as possible, without relying on packages that have not been well-received by the GitHub community (i.e. all the plugins have a significant amount of stars on GitHub).

## Intelligent Rule-Enablement Logic

Some of the configurations include advanced logic that attempts to adapt the configuration to a given project based on certain parameters. The ESLint configuration includes a decent amount of logic that disables and enables functional programming lint rules based on whether it detects an Angular project, for instance.

The collection of configurations do some interesting and unique things. The Prettier configuration, for instance, sorts the `package.json` file using our custom [`prettier-plugin-package-perfection`](https://github.com/megabyte-labs/prettier-plugin-package-perfection) Prettier plugin which integrates the superior [`prettier-package-json`](https://www.npmjs.com/package/prettier-package-json) CLI tool that sorts the `package.json` file not only alphabetically but with values like `version` and `name` appearing at the top of the config file.

## Fully Integrated Git TUI

We provide examples of how to integrate linters into your project workflow by combining several tools to **automatically lint and auto-fix code during the `git commit` process**. The process leverages [Husky](https://www.npmjs.com/package/husky) to install git hooks, [lint-staged](https://www.npmjs.com/package/lint-staged) to automatically lint and auto-fix _files that have been modified_, and a configuration that automatically enables rules based on the type of file that has been changed (which you can find in the `lint-staged` section of any project in the [Megabyte Labs eco-system](https://gitlab.com/megabyte-labs)).

To perfect the developer experience, our polished product includes several other tools as well. [git-cz](https://www.npmjs.com/package/git-cz) is integrated into the stack to display an easy-to-understand, guided `git commit` prompt system. The feature automatically triggers when you run the `git commit` command after Husky is leveraged to install git hooks. The feature integrates and verifies that commit messages are all well-formatted (and include emojis).

## CI/CD & Semantic Release

Although not technically a linter or auto-fixer, our `semantic-release-config` configuration ensures that a given project is capable of:

- Fully automated releases that run on GitLab CI or GitHub Actions, based on input added to commit via the TUI feature
- Enforce [Semantic Versioning] specification across a wide variety of release channels (not just NPM and GitHub Releases)
- Automatically generating release notes
- Applying advanced, unique, useful formatting to the notes on GitHub and GitLab release notes

## Full Configuration Example

If you wanted to include all of our configurations (which are configured to only run when necessary), then you would include the following in a `package.json` file in the root of your project:

```json
{
  "config": {
    "commitizen": {
      "path": "node_modules/commitlint-config-strict-lint"
    }
  },
  "devDependencies": {
    "commitlint-config-strict-lint": "latest",
    "eslint-config-strict-lint": "latest",
    "git-cz-emoji": "latest",
    "prettier-config-strict-lint": "latest",
    "semantic-release-config": "latest",
    "stylelint-config-strict-lint": "latest"
  },
  "changelog": {
    "displayTypes": ["feat", "fix", "perf", "refactor", "revert"],
    "showAuthor": true
  },
  "commitlint": {
    "extends": ["commitlint-strict-lint"],
    "helpUrl": "https://megabyte.space/docs/contributing/commits"
  },
  "eslintConfig": {
    "extends": "eslint-config-strict-lint"
  },
  "jscpd": {
    "absolute": true,
    "gitignore": true,
    "ignore": [
      "!**/.devcontainer/**/*",
      "!**/.config/**/*",
      "!**/.git/**/*",
      "!**/.github/**/*",
      "!**/.gitlab/**/*",
      "!**/.vscode/**/*",
      "!**/common/.config/taskfiles/**/*",
      "!**/docs/**/*",
      "!**/.editorconfig",
      "!**/.gitignore",
      "!**/.npmrc",
      "!**/.gitlab-ci.yml",
      "!**/README.md",
      "!**/LICENSE",
      "!**/Taskfile.yml",
      "!**/logo.png",
      "!**/package.json",
      "!**/start.sh",
      "!**/pnpm-lock.yaml",
      "!**/package-lock.json",
      "!**/poetry.lock",
      "!**/pyproject.toml",
      "!**/requirements.yml",
      "!**/yarn.lock",
      "!**/deprecated/**/*"
    ],
    "threshold": 14
  },
  "lint-staged": {
    "(Brewfile|composer.lock|Gemfile|Gopkg.lock|Pipfile.lock)": ["task fix:prettier --"],
    "**/!(logo).(jpg|png)": ["task image:compress --"],
    "**/*": ["task lint:any --"],
    "**/*!(template).(json|webapp|webmanifest)": ["task fix:json --"],
    "**/*.(bash|cfg|cgi|command|css|env|env.*|handlebars|hbs|html|less|fcgi|java|md|mdx|mjml|php|phtml|properties|reg|scss|tmpl|tmux|tool|tpl|zsh)": [
      "task fix:prettier --"
    ],
    "**/*.(cjs|js|jsx|mjs|ts|tsx)": ["task fix:js --", "task lint:js --"],
    "**/*.(yml|yaml)": ["task fix:yaml --", "task lint:yaml --"],
    "**/*.go": ["task fix:go --", "task lint:go --"],
    "**/*.md": ["task fix:markdown --", "task lint:spelling:markdown --"],
    "**/*.php": ["task fix:php --", "task lint:php --"],
    "**/*.py": ["task fix:python --", "task lint:python --"],
    "**/*.sh": ["task fix:prettier --", "task fix:shell --", "task lint:shell --"],
    "**/*.toml": ["task fix:toml --", "task fix:prettier --", "task lint:toml --"],
    "**/*.xml": ["task fix:xml --", "task lint:xml --"],
    "Dockerfile": ["task fix:prettier --", "task lint:docker --"],
    "Vagrantfile": ["task fix:prettier --", "task lint:vagrant"],
    "logo.(gif|jpg|jpeg|webp)": ["task image:convert:logo --"],
    "logo.png": ["task image:resize -- 200 200", "task image:compress --"]
  },
  "prettier": "prettier-config-strict-lint",
  "release": {
    "branches": [
      "main",
      "master",
      "next",
      {
        "name": "beta",
        "prerelease": true
      }
    ],
    "extends": "semantic-release-config"
  }
}
```

The example above includes examples of customizing the lint rules that are enabled for a given project. It also includes examples of customizing which auto-fixers and linters run on a given file before it is committed.

## Documentation

For more details on how to integrate the Strict Lint configurations into your project, as well as tips & tricks on how to customize the packages, check out the [Strict Lint documentation](https://strictlint.com/docs).
