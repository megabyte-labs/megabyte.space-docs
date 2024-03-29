***

title: Styled Logger
description: A CLI logger that outputs emojified log messages and also acts as a CLI for Glamour (gorgeous terminal markdown rendering library)
editUrl: <https://gitlab.com/megabyte-labs/go/cli/stylog/blob/master/docs/GUIDE.md>
editApiUrl: <https://github.com/ionic-team/capacitor-plugins/blob/main/go/src/definitions.ts>
sidebar\_label: Styled Logger
githubUrl: 'https://github.com/megabyte-labs/styled-logger'
gitlabUrl: 'https://gitlab.com/megabyte-labs/go/cli/stylog'
ansibleGalaxyProjectId: false
packageGroup: 'go'
packageName: 'go-styled-logger'
packageSlug: 'styled-logger'
packageVersion: '0.0.1'
pyPiPackageName: 'styled-logger'

***

<div align="center">
  <center>
    <a href="https://github.com/megabyte-labs/styled-logger">
      <img width="148" height="148" alt="Styled Logger logo" src="https://gitlab.com/megabyte-labs/go/cli/stylog/-/raw/master/logo.png" />
    </a>
  </center>
</div>
<div align="center">
  <center><h1 align="center"><i></i>Styled Logger - A CLI for Logging Pretty Messages<i></i></h1></center>
  <center><h4 style="color: #18c3d1;"><i></i><a href="https://megabyte.space" target="_blank">Megabyte Labs</a></h4><i></i></center>
</div>

<div align="center">
  <a href="https://megabyte.space" title="Megabyte Labs homepage" target="_blank">
    <img alt="Homepage" src="https://img.shields.io/website?down_color=%23FF4136&down_message=Down&label=Homepage&logo=home-assistant&logoColor=white&up_color=%232ECC40&up_message=Up&url=https%3A%2F%2Fmegabyte.space&style=for-the-badge" />
  </a>
  <a href="https://github.com/megabyte-labs/styled-logger/blob/master/docs/CONTRIBUTING.md" title="Learn about contributing" target="_blank">
    <img alt="Contributing" src="https://img.shields.io/badge/Contributing-Guide-0074D9?logo=github-sponsors&logoColor=white&style=for-the-badge" />
  </a>
  <a href="https://app.slack.com/client/T01ABCG4NK1/C01NN74H0LW/details/" title="Chat with us on Slack" target="_blank">
    <img alt="Slack" src="https://img.shields.io/badge/Slack-Chat-e01e5a?logo=slack&logoColor=white&style=for-the-badge" />
  </a>
  <a href="link.gitter" title="Chat with the community on Gitter" target="_blank">
    <img alt="Gitter" src="https://img.shields.io/gitter/room/megabyte-labs/community?logo=gitter&logoColor=white&style=for-the-badge" />
  </a>
  <a href="https://github.com/megabyte-labs/styled-logger" title="GitHub mirror" target="_blank">
    <img alt="GitHub" src="https://img.shields.io/badge/Mirror-GitHub-333333?logo=github&style=for-the-badge" />
  </a>
  <a href="https://gitlab.com/megabyte-labs/go/cli/stylog" title="GitLab repository" target="_blank">
    <img alt="GitLab" src="https://img.shields.io/badge/Repo-GitLab-fc6d26?logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgAQMAAABJtOi3AAAABlBMVEUAAAD///+l2Z/dAAAAAXRSTlMAQObYZgAAAHJJREFUCNdNxKENwzAQQNEfWU1ZPUF1cxR5lYxQqQMkLEsUdIxCM7PMkMgLGB6wopxkYvAeI0xdHkqXgCLL0Beiqy2CmUIdeYs+WioqVF9C6/RlZvblRNZD8etRuKe843KKkBPw2azX13r+rdvPctEaFi4NVzAN2FhJMQAAAABJRU5ErkJggg==&style=for-the-badge" />
  </a>
</div>
<br/>
<div align="center">
  <a title="Version: 0.0.1" href="https://github.com/megabyte-labs/styled-logger" target="_blank">
    <img alt="Version: 0.0.1" src="https://img.shields.io/badge/version-0.0.1-blue.svg?logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgAQMAAABJtOi3AAAABlBMVEUAAAD///+l2Z/dAAAAAXRSTlMAQObYZgAAACNJREFUCNdjIACY//+BEp9hhM3hAzYQwoBIAqEDYQrCZLwAAGlFKxU1nF9cAAAAAElFTkSuQmCC&cacheSeconds=2592000&style=flat-square" />
  </a>
  <a title="Go version: goVersion" href="https://github.com/megabyte-labs/styled-logger/blob/master/go.mod" target="_blank">
    <img alt="Go version: goVersion" src="https://img.shields.io/github/go-mod/go-version/profile.github}}/{{slug?logo=go&logoColor=white&style=flat-square" />
  </a>
  <a title="GitLab build status" href="https://gitlab.com/megabyte-labs/go/cli/stylog/-/commits/master" target="_blank">
    <img alt="Build status" src="https://img.shields.io/gitlab/pipeline-status/megabyte-labs/ansible-roles/galaxy_info.role_name?branch=master&label=build&logo=gitlab&style=flat-square" />
  </a>
  <a title="Documentation" href="https://megabyte.space/docs/go" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg?logo=readthedocs&style=flat-square" />
  </a>
  <a title="License: MIT" href="https://github.com/megabyte-labs/styled-logger/blob/master/LICENSE" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/license-MIT-yellow.svg?logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgAQMAAABJtOi3AAAABlBMVEUAAAD///+l2Z/dAAAAAXRSTlMAQObYZgAAAHpJREFUCNdjYOD/wMDAUP+PgYHxhzwDA/MB5gMM7AwMDxj4GBgKGGQYGCyAEEgbMDDwAAWAwmk8958xpIOI5zKH2RmOyhxmZjguAiKmgIgtQOIYmFgCIp4AlaQ9OczGkJYCJEAGgI0CGwo2HmwR2Eqw5SBnNIAdBHYaAJb6KLM15W/CAAAAAElFTkSuQmCC&style=flat-square" />
  </a>
</div>

> <br/><h4 align="center">**subheaderDescription**</h4><br/>

<a href="#table-of-contents" style="width:100%"><img style="width:100%" src="https://gitlab.com/megabyte-labs/assets/-/raw/master/png/aqua-divider.png" /></a>

## Table of Contents

* [Overview](#overview)
* [Installation](#installation)
  * [Quick Method](#quick-method)
  * [Compile Program with Go](#compile-program-with-go)
  * [NPM Install Method](#npm-install-method)
  * [Pre-Built Binary](#pre-built-binary)
* [Usage](#usage)
  * [Man Page](#man-page)
* [Contributing](#contributing)
* [License](#license)

<a href="#overview" style="width:100%"><img style="width:100%" src="https://gitlab.com/megabyte-labs/assets/-/raw/master/png/aqua-divider.png" /></a>

## Overview

This project was built to provide styled terminal log messages from within shell scripts (mainly housed in a [Task](https://github.com/go-task/task) project). It supports basic log message types that are prepended with an emoji and also provides the capability of logging markdown files styled by [Glamour](https://github.com/charmbracelet/glamour).

<a href="#installation" style="width:100%"><img style="width:100%" src="https://gitlab.com/megabyte-labs/assets/-/raw/master/png/aqua-divider.png" /></a>

## Installation

There are several ways you can install this CLI. You can:

1. Use our bash scripts which will handle everything automatically with as few dependencies as possible
2. Compile the program using Go and add it to your `PATH`
3. Install it via an NPM convienience wrapper
4. Download the pre-built binary from the GitLab or GitHub releases page and then place it in your `PATH`

### Quick Method

If you are looking to install the CLI as quickly as possible then you can run the following script which will install the binary to your `/usr/local/bin` folder on macOS or Linux:

    curl -sS https://install.doctor/stylog | bash

Or, if you are on Windows, you can install it by running:

    Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://install.doctor/stylog?os=win'))

### Compile Program with Go

You can install the CLI by compiling it from the source as long as you have a recent version of Go installed:

    git clone https://github.com/megabyte-labs/styled-logger.git
    cd {{#withLast (split repository.github "/")}}this/withLast
    go build -o dist/stylog app/log.go
    sudo mv ./dist/stylog /usr/local/bin

After you compile the program, you should then move the binary file to a location that is in your `PATH` (which is what the last line does in the snippet above).

### NPM Install Method

Every release is bundled into an NPM package that you can install by running the following command:

    npm install -g stylog

### Pre-Built Binary

If you trust us (and you should not.. trust.. anybody.. EVER), then you can also download the binary directly from the Styled Logger GitLab release page or the GitHub release page. After you download the release, you will have to either place the binary somewhere in your `PATH` or run the installer (in the case of the `.deb` or `.rpm` releases, for instance).

<a href="#usage" style="width:100%"><img style="width:100%" src="https://gitlab.com/megabyte-labs/assets/-/raw/master/png/aqua-divider.png" /></a>

## Usage

All of the usage instructions can be found by running `stylog --help`. After running the command, you should be greeted with the following output:

    Usage of ./dist/stylog:
      -md
         Prints formated *.md file

### Man Page

Alternatively, if you installed the package via NPM or an installer that set up the man page (e.g. `.deb` or `.rpm`), then you can find usage instructions by running `man stylog`.

<a href="#contributing" style="width:100%"><img style="width:100%" src="https://gitlab.com/megabyte-labs/assets/-/raw/master/png/aqua-divider.png" /></a>

## Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/megabyte-labs/styled-logger/issues). If you would like to contribute, please take a look at the [contributing guide](https://github.com/megabyte-labs/styled-logger/blob/master/docs/CONTRIBUTING.md).

<details>
<summary><b>Sponsorship</b></summary>
<br/>
<blockquote>
<br/>
Dear Awesome Person,<br/><br/>
I create open source projects out of love. Although I have a job, shelter, and as much fast food as I can handle, it would still be pretty cool to be appreciated by the community for something I have spent a lot of time and money on. Please consider sponsoring me! Who knows? Maybe I will be able to quit my job and publish open source full time.
<br/><br/>Sincerely,<br/><br/>

***Brian Zalewski***<br/><br/>

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

</details>

<a href="#license" style="width:100%"><img style="width:100%" src="https://gitlab.com/megabyte-labs/assets/-/raw/master/png/aqua-divider.png" /></a>

## License

Copyright © 2020-2021 [Megabyte LLC](https://megabyte.space). This project is [MIT](https://gitlab.com/megabyte-labs/go/cli/stylog/-/blob/master/LICENSE) licensed.
