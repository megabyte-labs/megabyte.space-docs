---
title: macOS
description: A Dockerfile project that builds a macOS container intended for use with Ansible Molecule tests
editUrl: https://gitlab.com/megabyte-labs/docker/ansible-molecule/macos/blob/master/docs/GUIDE.md
editApiUrl: https://github.com/ionic-team/capacitor-plugins/blob/main/docker-molecule/src/definitions.ts
sidebar_label: macOS
githubUrl: false
gitlabUrl: false
ansibleGalaxyProjectId: false
packageGroup: false
packageName: 'ansible-molecule-macos'
packageSlug: false
packageVersion: '0.0.1'
pyPiPackageName: false
---

<h1>Dockerfile: macOS for Ansible Molecule</h1>

<h4>
  <a href="https://hub.docker.com/u/megabytelabs">DockerHub Profile</a>
  <span> | </span>
  <a href="https://hub.docker.com/r/megabytelabs/ansible-molecule-macos">DockerHub Image</a>
  <span> | </span>
  <a href="https://gitlab.com/megabyte-labs/dockerfile/ansible-molecule/macos/-/blob/master/CONTRIBUTING.md">Contributing</a>
  <span> | </span>
  <a href="https://app.slack.com/client/T01ABCG4NK1/C01NN74H0LW/details/">Chat</a>
  <span> | </span>
  <a href="https://megabyte.space">Homepage</a>
  <span> | </span>
  <a href="https://github.com/MegabyteLabs/docker-ansible-molecule-macos">GitHub Mirror</a>
</h4>
<p>
  <a href="https://gitlab.com/megabyte-labs/dockerfile/ansible-molecule/macos">
    <img alt="Version" src="https://img.shields.io/badge/version-0.0.1-blue.svg?cacheSeconds=2592000" />
  </a>
  <a href="https://megabyte.space/docs/docker" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://gitlab.com/megabyte-labs/dockerfile/ansible-molecule/macos/-/raw/master/LICENSE" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
  <a href="https://twitter.com/PrfssrManhattan" target="_blank">
    <img alt="Twitter: PrfssrManhattan" src="https://img.shields.io/twitter/follow/PrfssrManhattan.svg?style=social" />
  </a>
</p>

> <br/>**A Dockerfile project that builds a macOS container intended for use with Ansible Molecule tests**<br/><br/>


[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/aqua.png)](#table-of-contents)

## ➤ Table of Contents

* [➤ Overview](#-overview)
* [➤ Requirements](#-requirements)
	* [Optional Requirements](#optional-requirements)
* [➤ Example Usage](#-example-usage)
	* [Building the Docker Container](#building-the-docker-container)
	* [Build Tools](#build-tools)
	* [Integrating with Ansible Molecule](#integrating-with-ansible-molecule)
* [➤ Contributing](#-contributing)
* [➤ License](#-license)

[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/aqua.png)](#overview)

## ➤ Overview

[Ansible Molecule](https://molecule.readthedocs.io/en/latest/) testing is a critical part of creating Ansible roles that are meant for public consumption. Nearly all of [our Ansible roles](https://gitlab.com/megabyte-labs/ansible-roles) support Archlinux, Debian, Fedora, CentOS, Ubuntu, Mac OS X, and Windows. On top of that, we have hundreds of roles to maintain. In order to alleviate the headache that comes with supporting so many operating systems and so many roles, we utilize several test methods which are all powered by Ansible Molecule. In particular, we use this image to test macOS using GitLab CI and Docker. GitLab CI and Docker are free so it was a no-brainer for us. It allows us to spot some bugs before the code is available publicly. Granted, we do use other tests that are compatible with Mac OS X/Windows and better simulate potential install environments. Still, this repository is a great first line of defense when it comes to preventing regressions on supported Linux environments.


[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/aqua.png)](#requirements)

## ➤ Requirements

* **[Docker](https://gitlab.com/megabyte-labs/ansible-roles/docker)**

### Optional Requirements

* [DockerSlim](https://gitlab.com/megabyte-labs/ansible-roles/dockerslim) - Used for generating compact, secure images
* [Node.js](https://gitlab.com/megabyte-labs/ansible-roles/nodejs) (*Version >=10*) - Utilized to add development features like a pre-commit hook and other automations

For more details on how the Optional Requirements are used, check out the [CONTRIBUTING.md](https://gitlab.com/megabyte-labs/dockerfile/ansible-molecule/macos/-/blob/master/CONTRIBUTING.md) guide.


[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/aqua.png)](#example-usage)

## ➤ Example Usage

Without having to clone this repository, you can pull the latest Dockerfile to have the image cached locally by running:

```
docker pull megabytelabs/ansible-molecule-macos:latest
```

### Building the Docker Container

You can modify this Dockerfile to suit your purposes. After you make changes to the Dockerfile, you can upload your custom container to [Docker Hub](https://hub.docker.com/) using the following code:

```
docker login -u "DOCKERHUB_USERNAME" -p "DOCKERHUB_PASSWORD" docker.io
docker build --pull -t "DOCKERHUB_USERNAME/ansible-molecule-macos:latest" .
docker push "DOCKERHUB_USERNAME/ansible-molecule-macos:latest"
```

Replace DOCKERHUB_USERNAME and DOCKERHUB_PASSWORD in the snippet above with your Docker Hub username and password. The commands will build the Docker image and upload it to Docker Hub. You can see this logic being implemented as a [GitLab CI task here](https://gitlab.com/megabyte-labs/ci/gitlab-ci-templates/-/blob/master/dockerhub.gitlab-ci.yml). This GitLab CI task works in conjunction with the `.gitlab-ci.yml` file in the root of this repository.

### Build Tools

You might notice that we have a lot of extra files considering that this repository basically boils down to a single Dockerfile. These extra files are meant to make team development easier, predictable, and enjoyable. If you have a recent version of [Node.js](https://gitlab.com/megabyte-labs/ansible-roles/nodejs) installed, you can get started using our build tools by running `npm i` in the root of this repository. After that, you can run `npm run info` to see a list of the available development features. For more details, check out the [CONTRIBUTING.md](https://gitlab.com/megabyte-labs/dockerfile/ansible-molecule/macos/-/blob/master/CONTRIBUTING.md) file.

### Integrating with Ansible Molecule

If you are using this image for testing [Ansible roles](https://gitlab.com/megabyte-labs/ansible-roles) using [Ansible Molecule](https://molecule.readthedocs.io/en/latest/), then you will have to incorporate the image into your `molecule.yml` file (as well as have the appropriate folder structure in your custom role). A great example is in the repository of our [Android Studio Ansible role](https://gitlab.com/megabyte-labs/ansible-roles/androidstudio). In that role's root directory, you will see a folder named `molecule` alongside a properly structured Ansible role. In that folder, you will see a folder named `docker`. This folder defines the `docker` Molecule scenario. In the `molecule/docker` folder, you will see a file called `molecule.yml` which is where you will see a reference to this repository's Docker Hub slug (i.e. `megabytelabs/ansible-molecule-macos`). Once you have everything setup like it is in our Android Studio role, you can run `molecule test -s docker` to run the tests.

At the minimum, your `molecule/docker/molecule.yml` should look something like this:

```yaml
---
dependency:
  name: galaxy
  options:
    role-file: requirements.yml
    requirements-file: requirements.yml
driver:
  name: docker
platforms:
  - name: MyMoleculePlatform
    image: megabytelabs/ansible-molecule-macos:latest
    command: ""
    tmpfs:
      - /run
      - /tmp
    volumes:
      - /sys/fs/cgroup:/sys/fs/cgroup:ro
    privileged: true
    pre_build_image: true
provisioner:
  name: ansible
  connection_options:
    ansible_connection: docker
    ansible_password: ansible
    ansible_ssh_user: ansible
  playbooks:
    converge: converge.yml
verifier:
  name: ansible
scenario:
  test_sequence:
    - lint
    - dependency
    - cleanup
    - destroy
    - syntax
    - create
    - prepare
    - converge
    - idempotence
    - side_effect
    - verify
    - cleanup
    - destroy
```

If you are getting started with Ansible or Molecule, then you might find the information in the Android Studio role's [README.md](https://gitlab.com/megabyte-labs/ansible-roles/androidstudio/-/blob/master/README.md) and [CONTRIBUTING.md](https://gitlab.com/megabyte-labs/ansible-roles/androidstudio/-/blob/master/CONTRIBUTING.md) helpful. Also, if you are interested in seeing our flagship Ansible product (which is an Ansible playbook intended to provision development-oriented desktops and production-quality servers), then please check out [ProfessorManhattan's Playbooks](https://gitlab.com/ProfessorManhattan/Playbooks).


[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/aqua.png)](#contributing)

## ➤ Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://gitlab.com/megabyte-labs/dockerfile/ansible-molecule/macos/-/issues). If you would like to contribute, please take a look at the [contributing guide](https://gitlab.com/megabyte-labs/dockerfile/ansible-molecule/macos/-/blob/master/CONTRIBUTING.md).

<details>
<summary>Sponsorship</summary>
<br/>
<blockquote>
<br/>
I create open source projects out of love. Although I have a job, shelter, and as much fast food as I can handle, it would still be pretty cool to be appreciated by the community for something I have spent a lot of time and money on. Please consider sponsoring me! Who knows? Maybe I will be able to quit my job and publish open source full time.
<br/><br/>Sincerely,<br/><br/>

***Brian Zalewski***<br/><br/>
</blockquote>

<a href="https://www.patreon.com/ProfessorManhattan">
  <img src="https://c5.patreon.com/external/logo/become_a_patron_button@2x.png" width="160">
</a>

</details>


[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/aqua.png)](#license)

## ➤ License

Copyright © 2021 [Megabyte LLC](https://megabyte.space). This project is [MIT](https://gitlab.com/megabyte-labs/dockerfile/ansible-molecule/macos/-/raw/master/LICENSE) licensed.