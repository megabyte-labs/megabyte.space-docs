***

title: Docker Compose
description: Starting point / instructions for creating a Docker Compose / Stack repository
editUrl: <https://gitlab.com/megabyte-labs/templates/docker-compose/blob/master/docs/GUIDE.md>
editApiUrl: <https://github.com/ionic-team/capacitor-plugins/blob/main/templates/src/definitions.ts>
sidebar\_label: Docker Compose
githubUrl: 'https://github.com/megabyte-labs/template-docker-compose'
gitlabUrl: 'https://gitlab.com/megabyte-labs/templates/docker-compose'
ansibleGalaxyProjectId: false
packageGroup: 'docker'
packageName: '@megabytelabs/template-docker-compose'
packageSlug: 'template-docker-compose'
packageVersion: '8.11.0'
pyPiPackageName: 'template-docker-compose'
------------------------------------------

{{ load:.config/docs/readme/header.md }}

<div align="center">
  <a href="https://megabyte.space" title="Megabyte Labs homepage" target="_blank">
    <img alt="Homepage" src="https://img.shields.io/website?down_color=%23FF4136&down_message=Down&label=Homepage&logo=home-assistant&logoColor=white&up_color=%232ECC40&up_message=Up&url=https%3A%2F%2Fmegabyte.space&style=for-the-badge" />
  </a>
  <a href="https://github.com/megabyte-labs/template-docker-compose/blob/master/docs/CONTRIBUTING.md" title="Learn about contributing" target="_blank">
    <img alt="Contributing" src="https://img.shields.io/badge/Contributing-Guide-0074D9?logo=github-sponsors&logoColor=white&style=for-the-badge" />
  </a>
  <a href="https://app.slack.com/client/T01ABCG4NK1/C01NN74H0LW/details/" title="Chat with us on Slack" target="_blank">
    <img alt="Slack" src="https://img.shields.io/badge/Slack-Chat-e01e5a?logo=slack&logoColor=white&style=for-the-badge" />
  </a>
  <a href="https://gitter.im/megabyte-labs/community" title="Chat with the community on Gitter" target="_blank">
    <img alt="Gitter" src="https://img.shields.io/gitter/room/megabyte-labs/community?logo=gitter&logoColor=white&style=for-the-badge" />
  </a>
  <a href="https://github.com/megabyte-labs/template-docker-compose" title="GitHub mirror" target="_blank">
    <img alt="GitHub" src="https://img.shields.io/badge/Mirror-GitHub-333333?logo=github&style=for-the-badge" />
  </a>
  <a href="https://gitlab.com/megabyte-labs/templates/docker-compose" title="GitLab repository" target="_blank">
    <img alt="GitLab" src="https://img.shields.io/badge/Repo-GitLab-fc6d26?logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgAQMAAABJtOi3AAAABlBMVEUAAAD///+l2Z/dAAAAAXRSTlMAQObYZgAAAHJJREFUCNdNxKENwzAQQNEfWU1ZPUF1cxR5lYxQqQMkLEsUdIxCM7PMkMgLGB6wopxkYvAeI0xdHkqXgCLL0Beiqy2CmUIdeYs+WioqVF9C6/RlZvblRNZD8etRuKe843KKkBPw2azX13r+rdvPctEaFi4NVzAN2FhJMQAAAABJRU5ErkJggg==&style=for-the-badge" />
  </a>
</div>
<br/>
<div align="center">
  <a title="Version: 8.11.0" href="https://github.com/megabyte-labs/template-docker-compose" target="_blank">
    <img alt="Version: 8.11.0" src="https://img.shields.io/badge/version-8.11.0-blue.svg?logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgAQMAAABJtOi3AAAABlBMVEUAAAD///+l2Z/dAAAAAXRSTlMAQObYZgAAACNJREFUCNdjIACY//+BEp9hhM3hAzYQwoBIAqEDYQrCZLwAAGlFKxU1nF9cAAAAAElFTkSuQmCC&cacheSeconds=2592000&style=flat-square" />
  </a>
  <a title="GitLab build status" href="https://gitlab.com/megabyte-labs/templates/docker-compose/-/commits/master" target="_blank">
    <img alt="Build status" src="https://img.shields.io/gitlab/pipeline-status/megabyte-labs/docker/docker-compose/template-docker-compose?branch=master&label=build&logo=gitlab&logoColor=white&style=flat-square" />
  </a>
  <a title="DockerHub image size" href="https://hub.docker.com/repository/docker/megabytelabs/template-docker-compose" target="_blank">
    <img alt="Image size" src="https://img.shields.io/docker/image-size/megabytelabs/template-docker-compose?logo=docker&sort=date&logoColor=white&style=flat-square" />
  </a>
  <a title="DockerHub pulls" href="https://hub.docker.com/repository/docker/megabytelabs/template-docker-compose" target="_blank">
    <img alt="Pulls" src="https://img.shields.io/docker/pulls/megabytelabs/template-docker-compose?logo=docker&logoColor=white&style=flat-square" />
  </a>
  <a title="DockerHub stars" href="https://hub.docker.com/repository/docker/megabytelabs/template-docker-compose" target="_blank">
    <img alt="Stars" src="https://img.shields.io/docker/stars/megabytelabs/template-docker-compose?logo=docker&logoColor=white&style=flat-square" />
  </a>
  <a title="Documentation" href="https://megabyte.space/docs/docker" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg?logo=readthedocs&logoColor=white&style=flat-square" />
  </a>
  <a title="License: MIT" href="https://github.com/megabyte-labs/template-docker-compose/blob/master/LICENSE" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/license-MIT-yellow.svg?logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgAQMAAABJtOi3AAAABlBMVEUAAAD///+l2Z/dAAAAAXRSTlMAQObYZgAAAHpJREFUCNdjYOD/wMDAUP+PgYHxhzwDA/MB5gMM7AwMDxj4GBgKGGQYGCyAEEgbMDDwAAWAwmk8958xpIOI5zKH2RmOyhxmZjguAiKmgIgtQOIYmFgCIp4AlaQ9OczGkJYCJEAGgI0CGwo2HmwR2Eqw5SBnNIAdBHYaAJb6KLM15W/CAAAAAElFTkSuQmCC&style=flat-square" />
  </a>
</div>

> <br/><h4 align="center">**Starting point / instructions for creating a Docker Compose / Stack repository**</h4><br/>

<a href="#table-of-contents" style="width:100%"><img style="width:100%" src="https://gitlab.com/megabyte-labs/assets/-/raw/master/png/aqua-divider.png" /></a>

## Table of Contents

* [Docker-Compose Project](#docker-compose-project)
* [Requirements](#requirements)
  * [Development Requirements](#development-requirements)
* [Docker Compose / Stack Project](#docker-compose--stack-project)
  * [Docker Containers](#docker-containers)
  * [Configuration Management](#configuration-management)
  * [Re-Building the Repository](#re-building-the-repository)
* [Contributing](#contributing)
  * [Affiliates](#affiliates)
* [License](#license)

<a href="#docker-compose-project" style="width:100%"><img style="width:100%" src="https://gitlab.com/megabyte-labs/assets/-/raw/master/png/aqua-divider.png" /></a>

## Docker-Compose Project

This is a Docker Compose / Swarm project.

<a href="#requirements" style="width:100%"><img style="width:100%" src="https://gitlab.com/megabyte-labs/assets/-/raw/master/png/aqua-divider.png" /></a>

## Requirements

* **[Docker](https://gitlab.com/megabyte-labs/ansible-roles/docker)**

### Development Requirements

* **[DockerSlim](repository.project.dockerslim)** - Used for generating compact, secure images
* **[jq](repository.project.jq)** - Used for interacting with JSON
* **[Node.js](repository.project.node)** (*>=14.18*) - Utilized to add development features like a pre-commit hook and maintenance tasks
* *Many more* requirements that are *dynamically installed* as they are needed by our `Taskfile.yml` via our custom [go-task/task](https://github.com/go-task/task) fork named **[Bodega](https://github.com/ProfessorManhattan/Bodega)**

If you choose to utilize the development tools provided by this project then at some point you will have to run `bash start.sh` (or `npm i` which calls `bash start.sh` after it is done). The `start.sh` script will attempt to automatically install any requirements (without sudo) that are not already present on your build system to the user's `~/.local/bin` folder. The `start.sh` script also takes care of other tasks such as generating the documentation by calling tasks defined in the `Taskfile.yml`. For more details on how the optional requirements are used and set up, check out the [CONTRIBUTING.md](https://gitlab.com/megabyte-labs/docker/docker-compose/template-docker-compose/-/blob/master/docs/CONTRIBUTING.md) guide.

When you are ready to start development, run `task --menu` to open an interactive dialog that will help you understand what build commands we have already engineered for you.

<a href="#docker-compose--stack-project" style="width:100%"><img style="width:100%" src="https://gitlab.com/megabyte-labs/assets/-/raw/master/png/aqua-divider.png" /></a>

## Docker Compose / Stack Project

We house most of our Docker Compose / Stack configurations in our [Ansible Docker Swarm role](https://github.com/megabyte-labs/ansible-swarm). However, when a stack is more complicated and might need to include other files (i.e. Terraform files, or special configuration files) then we dedicate a repository to the project.

Unlike our [Dockerfile](https://gitlab.com/megabyte-labs/templates/docker) repository projects, we do not have a strict repository style guide. There are, however, a few things to keep in mind.

Docker Compose / Stack configurations are supposed to be easy to use, one-liner ways of launching otherwise somewhat complicated networks. So if the repository is not launchable by just running `docker up -d docker-compose.yml` then a file called `launch.sh` should be included in the repository. The `launch.sh` file should make setting up the stack a one-liner process.

### Docker Containers

If the stack requires containers that are not from reputible sources or if the stack would benefit from having custom Dockerfile container builds then each Dockerfile should have its own repository in the appropriate sub-group in the [Docker group](https://gitlab.com/megabyte-labs/docker). Please also look over the [README of our Dockerfile boilerplate](https://gitlab.com/megabyte-labs/template/docker).

### Configuration Management

In order to make the experience truly simple and adhere to the one-liner principle, it may be required to incorporate some sort of configuration management strategy. This should be done by either using Ansible or Terraform. In cases where performance is vital, Saltstack can be used as well.

The configuration choices should be thorough and automatically apply the settings that would satisfy the needs of most users. The configurations should make a best-effort at integrating with the other software we include in [Gas Station](https://github.com/megabyte-labs/Gas-Station), [JumpUSB](https://jumpusb.com), and any platform/service that a typical GitHub power-user would have in their stack.

That all said, the most important part of the project is to understand and have an intuitive feel for the stack's requirements.

### Re-Building the Repository

You can begin the project using this repository as a boilerplate. It might also be helpful to check out some of the [other Docker Compose / Stack repositories](https://gitlab.com/megabyte-labs/docker/docker-compose). When you are done creating the stack, be sure to update the repository's metadata and documentation. You can do this by editting the fields in the `blueprint` section of the `package.json` file. After that, edit the documentation by adding your project-specific documentation written in markdown to the `docs/partials/guide.md` file. With the `blueprint` section and the documentation partial populated, you can re-compile the repository by running `bash start.sh && task update`. Be sure to add a custom transparent square `logo.png` to the root of this repository for good measure.

And that is all, you are ready to polish this Docker stack and open a pull request.

<a href="#contributing" style="width:100%"><img style="width:100%" src="https://gitlab.com/megabyte-labs/assets/-/raw/master/png/aqua-divider.png" /></a>

## Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/megabyte-labs/template-docker-compose/issues). If you would like to contribute, please take a look at the [contributing guide](https://github.com/megabyte-labs/template-docker-compose/blob/master/docs/CONTRIBUTING.md).

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

Copyright © 2020-2021 [Megabyte LLC](https://megabyte.space). This project is [MIT](https://gitlab.com/megabyte-labs/templates/docker-compose/-/blob/master/LICENSE) licensed.
