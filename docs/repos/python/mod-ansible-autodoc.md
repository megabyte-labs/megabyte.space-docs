---
title: Ansible Documentation
description: Generate documentation from comments in Ansible YML files
editUrl: https://gitlab.com/megabyte-labs/python/cli/mod-ansible-autodoc/blob/master/docs/GUIDE.md
editApiUrl: https://github.com/ionic-team/capacitor-plugins/blob/main/python/src/definitions.ts
sidebar_label: Ansible Documentation
githubUrl: 'https://github.com/megabyte-labs/mod-ansible-autodoc'
gitlabUrl: 'https://gitlab.com/megabyte-labs/python/cli/mod-ansible-autodoc'
ansibleGalaxyProjectId: false
packageGroup: 'python'
packageName: 'mod-ansible-autodoc'
packageSlug: 'mod-ansible-autodoc'
packageVersion: '1.0.0'
pyPiPackageName: 'mod-ansible-autodoc'
---

<div align="center">
  <center>
    <a href="https://github.com/megabyte-labs/mod-ansible-autodoc">
      <img width="148" height="148" alt="(Mod) Ansible Autodoc logo" src="https://gitlab.com/megabyte-labs/python/cli/mod-ansible-autodoc/-/raw/master/logo.png" />
    </a>
  </center>
</div>
<div align="center">
  <center><h1 align="center">Python CLI: (Mod) Ansible Autodoc<i></i></h1></center>
  <center><h4 style="color: #18c3d1;">A Python CLI created by <a href="https://megabyte.space" target="_blank">Megabyte Labs</a></h4><i></i></center>
</div>

<div align="center">
  <a href="https://megabyte.space" title="Megabyte Labs homepage" target="_blank">
    <img alt="Homepage" src="https://img.shields.io/website?down_color=%23FF4136&down_message=Down&label=Homepage&logo=home-assistant&logoColor=white&up_color=%232ECC40&up_message=Up&url=https%3A%2F%2Fmegabyte.space&style=for-the-badge" />
  </a>
  <a href="https://github.com/megabyte-labs/mod-ansible-autodoc/blob/master/docs/CONTRIBUTING.md" title="Learn about contributing" target="_blank">
    <img alt="Contributing" src="https://img.shields.io/badge/Contributing-Guide-0074D9?logo=github-sponsors&logoColor=white&style=for-the-badge" />
  </a>
  <a href="https://app.slack.com/client/T01ABCG4NK1/C01NN74H0LW/details/" title="Chat with us on Slack" target="_blank">
    <img alt="Slack" src="https://img.shields.io/badge/Slack-Chat-e01e5a?logo=slack&logoColor=white&style=for-the-badge" />
  </a>
  <a href="https://gitter.im/megabyte-labs/community" title="Chat with the community on Gitter" target="_blank">
    <img alt="Gitter" src="https://img.shields.io/gitter/room/megabyte-labs/community?logo=gitter&logoColor=white&style=for-the-badge" />
  </a>
  <a href="https://github.com/megabyte-labs/mod-ansible-autodoc" title="GitHub mirror" target="_blank">
    <img alt="GitHub" src="https://img.shields.io/badge/Mirror-GitHub-333333?logo=github&style=for-the-badge" />
  </a>
  <a href="https://gitlab.com/megabyte-labs/python/cli/mod-ansible-autodoc" title="GitLab repository" target="_blank">
    <img alt="GitLab" src="https://img.shields.io/badge/Repo-GitLab-fc6d26?logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgAQMAAABJtOi3AAAABlBMVEUAAAD///+l2Z/dAAAAAXRSTlMAQObYZgAAAHJJREFUCNdNxKENwzAQQNEfWU1ZPUF1cxR5lYxQqQMkLEsUdIxCM7PMkMgLGB6wopxkYvAeI0xdHkqXgCLL0Beiqy2CmUIdeYs+WioqVF9C6/RlZvblRNZD8etRuKe843KKkBPw2azX13r+rdvPctEaFi4NVzAN2FhJMQAAAABJRU5ErkJggg==&style=for-the-badge" />
  </a>
</div>
<br/>
<div align="center">
  <a title="Version: 1.0.0" href="https://github.com/megabyte-labs/mod-ansible-autodoc" target="_blank">
    <img alt="Version: 1.0.0" src="https://img.shields.io/badge/version-1.0.0-blue.svg?logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgAQMAAABJtOi3AAAABlBMVEUAAAD///+l2Z/dAAAAAXRSTlMAQObYZgAAACNJREFUCNdjIACY//+BEp9hhM3hAzYQwoBIAqEDYQrCZLwAAGlFKxU1nF9cAAAAAElFTkSuQmCC&cacheSeconds=2592000&style=flat-square" />
  </a>
  <a title="Build status on GitLab" href="https://gitlab.com/megabyte-labs/python/cli/mod-ansible-autodoc/-/commits/master" target="_blank">
    <img alt="GitLab build status" src="https://img.shields.io/gitlab/pipeline-status/megabyte-labs/python/cli/mod-ansible-autodoc?branch=master&label=build&logo=gitlab&style=flat-square" />
  </a>
  <a title="Test coverage report" href="https://gitlab.com/megabyte-labs/python/cli/mod-ansible-autodoc/-/commits/master" target="_blank">
    <img alt="Coverage status" src="https://img.shields.io/gitlab/coverage/megabyte-labs/python/cli/mod-ansible-autodoc/master/?label=coverage&logo=pytest&style=flat-square" />
  </a>
  <a title="Documentation" href="https://megabyte.space/docs/python" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg?logo=readthedocs&style=flat-square" />
  </a>
  <a title="Supported Python versions" href="https://pypi.org/project/{{(if customPyPiPackageName customPyPiPackageName (append repository.prefix.github slug))}}/" target="_blank">
    <img alt="Python versions" src="https://img.shields.io/pypi/pyversions/{{(if customPyPiPackageName customPyPiPackageName (append repository.prefix.github slug))}}/?label=python&logo=python&style=flat-square" />
  </a>
  <a title="PyPi status" href="https://pypi.org/project/{{(if customPyPiPackageName customPyPiPackageName (append repository.prefix.github slug))}}/" target="_blank">
    <img alt="Status" src="https://img.shields.io/pypi/status/{{(if customPyPiPackageName customPyPiPackageName (append repository.prefix.github slug))}}/?label=status&logo=pypi&style=flat-square" />
  </a>
  <a title="License: MIT" href="https://github.com/megabyte-labs/mod-ansible-autodoc/blob/master/LICENSE" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/license-MIT-yellow.svg?logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgAQMAAABJtOi3AAAABlBMVEUAAAD///+l2Z/dAAAAAXRSTlMAQObYZgAAAHpJREFUCNdjYOD/wMDAUP+PgYHxhzwDA/MB5gMM7AwMDxj4GBgKGGQYGCyAEEgbMDDwAAWAwmk8958xpIOI5zKH2RmOyhxmZjguAiKmgIgtQOIYmFgCIp4AlaQ9OczGkJYCJEAGgI0CGwo2HmwR2Eqw5SBnNIAdBHYaAJb6KLM15W/CAAAAAElFTkSuQmCC&style=flat-square" />
  </a>
</div>

> <br/><h4 align="center">**Documentation generated from comments in Ansible YML files, tweaked for compatibility with [@appnest/readme](https://www.npmjs.com/package/@appnest/readme)**</h4><br/>

<!--TERMINALIZE![terminalizer_title](repository.group.python_cli/mod-ansible-autodoc* **github**: /raw/master/docs/demo.gif
* **gitlab**: /-/raw/master/docs/demo.gif)TERMINALIZE-->

<a href="#table-of-contents" style="width:100%"><img style="width:100%" src="https://gitlab.com/megabyte-labs/assets/-/raw/master/png/aqua-divider.png" /></a>

## Table of Contents

- [Overview](#overview)
- [Custom Titles](#custom-titles)
- [Variables' Title Prefix, Postfix and Example Comment Prefix](#variables-title-prefix-postfix-and-example-comment-prefix)
  - [`sdk_location` ](#sdk_location----variable_fix---)
- [Installation](#installation)
  - [PyPi](#pypi)
  - [Install Doctor](#install-doctor)
  - [Homebrew](#homebrew)
  - [Chocolatey](#chocolatey)
  - [Binary Releases](#binary-releases)
- [Requirements](#requirements)
- [Contributing](#contributing)
  - [Affiliates](#affiliates)
- [License](#license)

<a href="#overview" style="width:100%"><img style="width:100%" src="https://gitlab.com/megabyte-labs/assets/-/raw/master/png/aqua-divider.png" /></a>

## Overview

[ansible-autodoc](https://github.com/AndresBott/ansible-autodoc) is a documentation tool that generates documentation from comments in Ansible source files (i.e. YML files). **mod-ansible-autodoc** is a fork of ansible-autodoc that fixes a few issues. It also changes some of the data output formats to play nice with [@appnest/readme](https://www.npmjs.com/package/@appnest/readme).

<a href="#custom-titles" style="width:100%"><img style="width:100%" src="https://gitlab.com/megabyte-labs/assets/-/raw/master/png/aqua-divider.png" /></a>

## Custom Titles

There are 4 optional args for this, one per markdown file:

1. --todo-title
2. --actions-title
3. --tags-title
4. --variables-title

The value of an argument has to be wrapped around ''. Example:

```sh
mod-ansible-autodoc --todo-title '## IMPROVEMENTS FILE'
```

<a href="#variables-title-prefix-postfix-and-example-comment-prefix" style="width:100%"><img style="width:100%" src="https://gitlab.com/megabyte-labs/assets/-/raw/master/png/aqua-divider.png" /></a>

## Variables' Title Prefix, Postfix and Example Comment Prefix

It's possible to add a prefix and/or postfix to `ansible_variables.md`'s subheaders and a prefix to the example comment. Simply run:

```sh
mod-ansible-autodoc --variable-title-prefix '###' --variable-title-postfix ' ' --variable-example-comment-prefix '##PREFIX##'
```

Then, expect something like the following:

```
### `sdk_location` 

yaml
##PREFIX## Example implementation of the sdk_location variable
sdk_location: ~/Android/Sdk

```

<a href="#installation" style="width:100%"><img style="width:100%" src="https://gitlab.com/megabyte-labs/assets/-/raw/master/png/aqua-divider.png" /></a>

## Installation

To accomodate everyone, this CLI can be installed using a variety of methods.

### PyPi

If you already have Python 3 and pip3 installed, you can install the CLI by running:

```shell
pip3 install {{(if customPyPiPackageName customPyPiPackageName (append repository.prefix.github slug))}}
```

### Install Doctor

On **macOS or Linux**, you can run:

```shell
bash -sS https://install.doctor/py/{{(if customPyPiPackageName customPyPiPackageName (append repository.prefix.github slug))}}
```

And on **Windows**, you can run:

```powershell
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://install.doctor/py/{{(if customPyPiPackageName customPyPiPackageName (append repository.prefix.github slug))}}?os=win'))
```

### Homebrew

If you have [Homebrew](https://brew.sh/) installed, you can install the package by running:

```shell
brew install installdoc/py/{{(if customPyPiPackageName customPyPiPackageName (append repository.prefix.github slug))}}
```

Or if you prefer to keep Python off your system, and install a binary, you can run:

```shell
brew install installdoc/py/{{(if customPyPiPackageName customPyPiPackageName (append repository.prefix.github slug))}}-binary
```

### Chocolatey

If you are on Windows, you can install a binary version (without the Python dependency), using [Chocolatey](https://chocolatey.org/):

```powershell
choco install {{(if customPyPiPackageName customPyPiPackageName (append repository.prefix.github slug))}}
```

### Binary Releases

There are also binaries (in various formats) available for download on both [GitHub](https://github.com/megabyte-labs/mod-ansible-autodoc/releases) and [GitLab](https://gitlab.com/megabyte-labs/python/cli/mod-ansible-autodoc/-/releases).

<a href="#requirements" style="width:100%"><img style="width:100%" src="https://gitlab.com/megabyte-labs/assets/-/raw/master/png/aqua-divider.png" /></a>

## Requirements

To run this project, all you need is [Python 3](https://www.python.org/) and [pip3](https://pip.pypa.io/en/stable/). See the [Installation section](#installation) for instructions that include alternate installation methods that do not require Python to be installed.

If you are interested in contributing or would like to make some modifications, please see the [CONTRIBUTING](/docs/CONTRIBUTING.md) guide. There are a handful of build tools we incorporate into the development process. All of them are installed automatically via our Taskfile system. You can get started customizing this project by running:

```shell
bash .config/scripts/start.sh
task start
task --list
```

<a href="#contributing" style="width:100%"><img style="width:100%" src="https://gitlab.com/megabyte-labs/assets/-/raw/master/png/aqua-divider.png" /></a>

## Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/megabyte-labs/mod-ansible-autodoc/issues). If you would like to contribute, please take a look at the [contributing guide](https://github.com/megabyte-labs/mod-ansible-autodoc/blob/master/docs/CONTRIBUTING.md).

<details>
<summary><b>Sponsorship</b></summary>
<br/>
<blockquote>
<br/>
Dear Awesome Person,<br/><br/>
I create open source projects out of love. Although I have a job, shelter, and as much fast food as I can handle, it would still be pretty cool to be appreciated by the community for something I have spent a lot of time and money on. Please consider sponsoring me! Who knows? Maybe I will be able to quit my job and publish open source full time.
<br/><br/>Sincerely,<br/><br/>

**_Brian Zalewski_**<br/><br/>

</blockquote>

<a title="Support us on Open Collective" href="https://opencollective.com/megabytelabs" target="_blank">
  <img alt="Open Collective sponsors" src="https://img.shields.io/opencollective/sponsors/megabytelabs?logo=opencollective&label=OpenCollective&logoColor=white&style=for-the-badge" />
</a>
<a title="Support us on GitHub" href="https://github.com/ProfessorManhattan" target="_blank">
  <img alt="GitHub sponsors" src="https://img.shields.io/github/sponsors/ProfessorManhattan?label=GitHub%20sponsors&logo=github&style=for-the-badge" />
</a>
<a href="https://www.patreon.com/ProfessorManhattan" title="Support us on Patreon" target="_blank">
  <img alt="Patreon" src="https://img.shields.io/badge/Patreon-Support-052d49?logo=patreon&logoColor=white&style=for-the-badge" />
</a>

### Affiliates

Below you will find a list of services we leverage that offer special incentives for signing up for their services through our special links:

<a href="http://eepurl.com/h3aEdX" title="Sign up for $30 in MailChimp credits" target="_blank">
  <img alt="MailChimp" src="https://cdn-images.mailchimp.com/monkey_rewards/grow-business-banner-2.png" />
</a>
<a href="https://www.digitalocean.com/?refcode=751743d45e36&utm_campaign=Referral_Invite&utm_medium=Referral_Program&utm_source=badge">
  <img src="https://web-platforms.sfo2.digitaloceanspaces.com/WWW/Badge%203.svg" alt="DigitalOcean Referral Badge" />
</a>

</details>

<a href="#license" style="width:100%"><img style="width:100%" src="https://gitlab.com/megabyte-labs/assets/-/raw/master/png/aqua-divider.png" /></a>

## License

Copyright © 2020-2021 [Megabyte LLC](https://megabyte.space). This project is [MIT](https://gitlab.com/megabyte-labs/python/cli/mod-ansible-autodoc/-/blob/master/LICENSE) licensed.