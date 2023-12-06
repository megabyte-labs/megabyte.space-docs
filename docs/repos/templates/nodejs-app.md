***

title: Node.js App
description: A boilerplate / instructions / tips for creating Node.js apps
editUrl: <https://gitlab.com/megabyte-labs/templates/nodejs-app/blob/master/docs/GUIDE.md>
editApiUrl: <https://github.com/ionic-team/capacitor-plugins/blob/main/templates/src/definitions.ts>
sidebar\_label: Node.js App
githubUrl: 'https://github.com/megabyte-labs/template-nodejs-app'
gitlabUrl: 'https://gitlab.com/megabyte-labs/templates/nodejs-app'
ansibleGalaxyProjectId: false
packageGroup: 'npm'
packageName: '@mblabs/app-nodejs-app'
packageSlug: 'nodejs-app'
packageVersion: '0.0.1'
pyPiPackageName: 'nodejs-app'
-----------------------------

<div align="center">
  <center>
    <a href="https://github.com/megabyte-labs/template-nodejs-app">
      <img width="148" height="148" alt="Node.js App logo" src="https://gitlab.com/megabyte-labs/templates/nodejs-app/-/raw/master/logo.png" />
    </a>
  </center>
</div>
<div align="center">
  <center><h1 align="center"><i></i>Node.js App Boilerplate and Instructions<i></i></h1></center>
  <center><h4 style="color: #18c3d1;">A cool app created by <a href="https://megabyte.space" target="_blank">Megabyte Labs</a></h4><i></i></center>
</div>

<div align="center">
  <a href="https://megabyte.space" title="Megabyte Labs homepage" target="_blank">
    <img alt="Homepage" src="https://img.shields.io/website?down_color=%23FF4136&down_message=Down&label=Homepage&logo=home-assistant&logoColor=white&up_color=%232ECC40&up_message=Up&url=https%3A%2F%2Fmegabyte.space&style=for-the-badge" />
  </a>
  <a href="https://github.com/megabyte-labs/template-nodejs-app/blob/master/docs/CONTRIBUTING.md" title="Learn about contributing" target="_blank">
    <img alt="Contributing" src="https://img.shields.io/badge/Contributing-Guide-0074D9?logo=github-sponsors&logoColor=white&style=for-the-badge" />
  </a>
  <a href="https://app.slack.com/client/T01ABCG4NK1/C01NN74H0LW/details/" title="Chat with us on Slack" target="_blank">
    <img alt="Slack" src="https://img.shields.io/badge/Slack-Chat-e01e5a?logo=slack&logoColor=white&style=for-the-badge" />
  </a>
  <a href="https://gitter.im/megabyte-labs/community" title="Chat with the community on Gitter" target="_blank">
    <img alt="Gitter" src="https://img.shields.io/gitter/room/megabyte-labs/community?logo=gitter&logoColor=white&style=for-the-badge" />
  </a>
  <a href="https://github.com/megabyte-labs/template-nodejs-app" title="GitHub mirror" target="_blank">
    <img alt="GitHub" src="https://img.shields.io/badge/Mirror-GitHub-333333?logo=github&style=for-the-badge" />
  </a>
  <a href="https://gitlab.com/megabyte-labs/templates/nodejs-app" title="GitLab repository" target="_blank">
    <img alt="GitLab" src="https://img.shields.io/badge/Repo-GitLab-fc6d26?logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgAQMAAABJtOi3AAAABlBMVEUAAAD///+l2Z/dAAAAAXRSTlMAQObYZgAAAHJJREFUCNdNxKENwzAQQNEfWU1ZPUF1cxR5lYxQqQMkLEsUdIxCM7PMkMgLGB6wopxkYvAeI0xdHkqXgCLL0Beiqy2CmUIdeYs+WioqVF9C6/RlZvblRNZD8etRuKe843KKkBPw2azX13r+rdvPctEaFi4NVzAN2FhJMQAAAABJRU5ErkJggg==&style=for-the-badge" />
  </a>
</div>
<br/>
<div align="center">
  <a href="https://www.npmjs.com/package/@mblabs/app-nodejs-app" title="Version 0.0.1" target="_blank">
    <img alt="Version: 0.0.1" src="https://img.shields.io/badge/version-0.0.1-blue.svg?cacheSeconds=2592000&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgAQMAAABJtOi3AAAABlBMVEUAAAD///+l2Z/dAAAAAXRSTlMAQObYZgAAACNJREFUCNdjIACY//+BEp9hhM3hAzYQwoBIAqEDYQrCZLwAAGlFKxU1nF9cAAAAAElFTkSuQmCC&style=flat-square" />
  </a>
  <a href="https://gitlab.com/megabyte-labs/templates/nodejs-app/-/commits/master" title="GitLab CI build status" target="_blank">
    <img alt="Build status" src="https://img.shields.io/gitlab/pipeline-status/megabyte-labs/npm/app/nodejs-app?branch=master&label=build&logo=gitlab&logoColor=white&style=flat-square" />
  </a>
  <a href="https://www.npmjs.com/package/@mblabs/app-nodejs-app" title="Dependency status reported by Depfu" target="_blank">
    <img alt="Dependency status reported by Depfu" src="https://img.shields.io/depfu/megabyte-labs/customPackageName?logo=codeforces&logoColor=white&style=flat-square&logo=npm" />
  </a>
  <a href="https://www.npmjs.com/package/@mblabs/app-nodejs-app" title="Zip file size" target="_blank">
    <img alt="Zip file size" src="https://img.shields.io/bundlephobia/minzip/@mblabs/app-nodejs-app?style=flat-square&logo=npm&logoColor=white" />
  </a>
  <a href="https://www.npmjs.com/package/@mblabs/app-nodejs-app" title="Total downloads of @mblabs/app-nodejs-app on npmjs.org" target="_blank">
    <img alt="Total downloads of @mblabs/app-nodejs-app on npmjs.org" src="https://img.shields.io/npm/dt/@mblabs/app-nodejs-app?style=flat-square&logo=npm&logoColor=white" />
  </a>
  <a href="https://snyk.io/advisor/npm-package/@mblabs/app-nodejs-app" title="Number of vulnerabilities from Snyk scan on @mblabs/app-nodejs-app" target="_blank">
    <img alt="Number of vulnerabilities from Snyk scan on @mblabs/app-nodejs-app" src="https://img.shields.io/snyk/vulnerabilities/npm/@mblabs/app-nodejs-app?style=flat-square&logo=snyk&logoColor=white" />
  </a>
  <a href="website.documentation/npm" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg?logo=readthedocs&logoColor=white&style=flat-square" />
  </a>
  <a href="https://github.com/megabyte-labs/template-nodejs-app/blob/master/LICENSE" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/license-MIT-yellow.svg?logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgAQMAAABJtOi3AAAABlBMVEUAAAD///+l2Z/dAAAAAXRSTlMAQObYZgAAAHpJREFUCNdjYOD/wMDAUP+PgYHxhzwDA/MB5gMM7AwMDxj4GBgKGGQYGCyAEEgbMDDwAAWAwmk8958xpIOI5zKH2RmOyhxmZjguAiKmgIgtQOIYmFgCIp4AlaQ9OczGkJYCJEAGgI0CGwo2HmwR2Eqw5SBnNIAdBHYaAJb6KLM15W/CAAAAAElFTkSuQmCC&style=flat-square" />
  </a>
</div>

> <br/><h4 align="center">**A boilerplate / instructions / tips for creating Node.js apps**</h4><br/>

<a href="#table-of-contents" style="width:100%"><img style="width:100%" src="https://gitlab.com/megabyte-labs/assets/-/raw/master/png/aqua-divider.png" /></a>

## Table of Contents

* [Overview](#overview)
* [Requirements](#requirements)
  * [Developer Requirements](#developer-requirements)
* [Node.js App Requirements](#nodejs-app-requirements)
  * [Test-Driven Development](#test-driven-development)
  * [Development Tools](#development-tools)
  * [Unit Tests vs. E2E Tests](#unit-tests-vs-e2e-tests)
  * [Serverless vs. Docker](#serverless-vs-docker)
  * [Smoke Testing](#smoke-testing)
* [Contributing](#contributing)
  * [Affiliates](#affiliates)
* [License](#license)

<a href="#overview" style="width:100%"><img style="width:100%" src="https://gitlab.com/megabyte-labs/assets/-/raw/master/png/aqua-divider.png" /></a>

## Overview

This repository houses a starting template / boilerplate with the format that all [Megabyte Labs](https://megabyte.space) Node.js apps should use. It bundles together NestJS, and a few other recommended dependencies. It also includes Jest for Test-Driven Development (TDD). Developers are expected to **read this README** before converting this starting template into the next awesome Node.js app.

<a href="#requirements" style="width:100%"><img style="width:100%" src="https://gitlab.com/megabyte-labs/assets/-/raw/master/png/aqua-divider.png" /></a>

## Requirements

If you are simply including this library in your project, all you need is a recent version of Node.js. **[Node.js >14.18.0](repository.project.node)** is sometimes required and is the only version range we actively support. Albeit, it is highly probable that lower versions will work as well depending on the requirements that this project imports.

### Developer Requirements

The following versions of Node.js and Python are required for development:

* **[Node.js >14.18.0](repository.project.node)**
* **[Python >3.10.0](repository.project.python)**

Other versions may work, but only the above versions are supported. Most development dependencies are installed automatically by our `Taskfile.yml` set-up (even Node.js and Python). Run `bash start.sh` to install **[Bodega](https://github.com/ProfessorManhattan/Bodega)** (an improved fork of [go-task](https://github.com/go-task/task)) and run the initialization sequence. The taskfiles will automatically install dependencies as they are needed, based on what development tasks you are running. For more information, check out the [CONTRIBUTING.md](https://github.com/megabyte-labs/template-nodejs-app/blob/main/docs/CONTRIBUTING.md) or simply run:

```shell
npm run help
```

`npm run help` will ensure Bodega is installed and then open an interactive dialog where you can explore and learn about various developer commands.

<a href="#nodejs-app-requirements" style="width:100%"><img style="width:100%" src="https://gitlab.com/megabyte-labs/assets/-/raw/master/png/aqua-divider.png" /></a>

## Node.js App Requirements

All of the Node.js apps in the [Megabyte Labs](https://megabyte.space) eco-system should use the same format and core dependencies. They should all be written in TypeScript. Because we use [Angular](https://angular.io/) as a first-class choice, [NestJS](https://nestjs.com/) was an easy choice for us to adopt because of the similarities. The fact that NestJS is wildly popular on GitHub does not hurt as well.

### Test-Driven Development

It is imperative that you utilize Test-Driven Development principles as you code. Code might be a no-brainer but in order to provide automatic dependency updates, sanity checks, and feel confident in our eco-system, everything has to have test cases associated with it. Instead of manually compiling the app each time you make a change to test the app, you can create [Jest](https://jestjs.io/) tests and then use [Nodemon](https://nodemon.io/) to automatically run the tests everytime a change is made to any file.

### Development Tools

You are probably already familiar with `npm run test` and `npm run build`. We take things a step further and provide a plethora of build tools that are housed in our `Taskfile.yml` and the accompanying files it includes. We encourage you to attempt to make use of `task npm:test:inspect` which will watch the files as you code, run the Jest tests whenever a change is made, and open a Chrome DevTools instance for advanced debugging via [ndb](https://github.com/GoogleChromeLabs/ndb).

To make sense of all the build tools we include in all of our projects, you can run `bash start.sh` (to make sure our task runner called [Bodega](https://github.com/megabyte-labs/Bodega) is installed) and then `task --menu` to show a sweet TUI that will help you navigate through the available commands. It integrates documentation right into the menu too!

### Unit Tests vs. E2E Tests

A Node.js app that is part of our eco-system should include two types of tests. Both of the tests should use Jest as the test runner. The unit tests should be kept in the `src/` directory alongside the actual code. Unit tests should be geared towards providing code coverage and testing specific functions.

Every app should include E2E tests that actually test whether or not the app is working or not. Ideally, if all of the E2E tests pass in CI/CD, then there should be no need to manually test the app before approving the application and merging to master.

### Serverless vs. Docker

Generally, when we deploy a Node.js application, it will either be hosted in a serverless environment or in a Docker container. Ideally, whenever possible [CloudFlare workers](https://workers.cloudflare.com/) should be used. They are faster than other serverless functions but do have some limitations. If CloudFlare workers cannot be utilized, [Firebase](https://firebase.google.com/docs/functions) is another option that we encourage.

Some applications will not be able to be run in serverless environments. In these cases, we prefer to package the Node.js applications in Docker containers which can then be run either on a machine or, preferrably, in a scalable environment like [Google Cloud Run](https://cloud.google.com/run).

Regardless of where we plan to run the code, you should verse yourself with the specifics of the intended environment. 95% of the plan, we intend to stick with CloudFlare workers, Firebase, or Google Cloud Run. All of these platforms are stellar services worth getting to know.

* CloudFlare workers are hosted on edge servers in serverless environments that have no cold-start time because they use the V8 engine (like a browser) instead of a full-fledged Node.js environment like traditional serverless solutions. This makes them incredibly fast. In fact, there is a 50ms CPU execution cap which just goes to show you how fast they are intended to be.
* Firebase Functions are also incredibly awesome because they integrate tightly with Firebase's other offerings like Firebase Firestore which is a hosted real-time database with tight integration with a whole suite of tools geared towards app development.
* Google Cloud Run is the newest offering. The service basically allows you to package any application into a Dockerfile and then automatically scale.

All of these solutions are the best because you only have to pay for what you use. And most of them offer a pretty high amount of free requests to work with. CloudFlare workers offers 100k free requests per day.

### Smoke Testing

Before opening any merge requests, the application should be tested in its projected final state. In other words, if the application is going to be hosted on Google Cloud Run, then it needs to be packaged up and tested ahead of time instead of strictly relying on unit / E2E tests.

<a href="#contributing" style="width:100%"><img style="width:100%" src="https://gitlab.com/megabyte-labs/assets/-/raw/master/png/aqua-divider.png" /></a>

## Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/megabyte-labs/template-nodejs-app/issues). If you would like to contribute, please take a look at the [contributing guide](https://github.com/megabyte-labs/template-nodejs-app/blob/master/docs/CONTRIBUTING.md).

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

Copyright © 2020-2021 [Megabyte LLC](https://megabyte.space). This project is [MIT](https://gitlab.com/megabyte-labs/templates/nodejs-app/-/blob/master/LICENSE) licensed.
