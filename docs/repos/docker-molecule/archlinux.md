***

title: Archlinux
description: An Archlinux image with Python 3, systemd, and a non-root sudo user (user and password are both *ansible*) intended to be used by Ansible Molecule tests
editUrl: <https://gitlab.com/megabyte-labs/docker/ansible-molecule/archlinux/blob/master/docs/GUIDE.md>
editApiUrl: <https://github.com/ionic-team/capacitor-plugins/blob/main/docker-molecule/src/definitions.ts>
sidebar\_label: Archlinux
githubUrl: false
gitlabUrl: false
ansibleGalaxyProjectId: false
packageGroup: false
packageName: '@megabytelabs/docker-ansible-molecule-archlinux'
packageSlug: false
packageVersion: '0.0.4'
pyPiPackageName: false
----------------------

<div align="center">
  <center>
    <a href="https://gitlab.com/megabyte-labs/dockerfile/ansible-molecule/archlinux">
      <img width="140" height="140" alt="Archlinux logo" src="https://gitlab.com/megabyte-labs/dockerfile/ansible-molecule/archlinux/-/raw/master/logo.png" />
    </a>
  </center>
</div>
<div align="center">
  <center><h1>Archlinux for Ansible Molecule</h1></center>
  <center><h4 style="color: #18c3d1;">A <a href="https://megabyte.space">Megabyte Labs</a> Dockerfile project / Latest build includes Archlinux v0.0.4</h4></center>
</div>

<div align="center">
  <h4 align="center">
    <a href="https://megabyte.space" title="Megabyte Labs homepage" target="_blank">
      <img src="https://gitlab.com/megabyte-labs/assets/-/raw/master/svg/home-solid.svg" />
    </a>
    <a href="https://hub.docker.com/u/megabytelabs" title="Megabyte Labs profile on DockerHub" target="_blank">
      <img src="https://gitlab.com/megabyte-labs/assets/-/raw/master/svg/dockerhub-profile-solid.svg" />
    </a>
    <a href="https://hub.docker.com/r/megabytelabs/archlinux" title="DockerHub page for this project" target="_blank">
      <img src="https://gitlab.com/megabyte-labs/assets/-/raw/master/svg/dockerhub-image-solid.svg" />
    </a>
    <a href="https://gitlab.com/megabyte-labs/dockerfile/ansible-molecule/archlinux/-/blob/master/CONTRIBUTING.md" title="Learn about contributing" target="_blank">
      <img src="https://gitlab.com/megabyte-labs/assets/-/raw/master/svg/contributing-solid.svg" />
    </a>
    <a href="https://www.patreon.com/ProfessorManhattan" title="Support us on Patreon" target="_blank">
      <img src="https://gitlab.com/megabyte-labs/assets/-/raw/master/svg/support-solid.svg" />
    </a>
    <a href="https://app.slack.com/client/T01ABCG4NK1/C01NN74H0LW/details/" title="Slack chat room" target="_blank">
      <img src="https://gitlab.com/megabyte-labs/assets/-/raw/master/svg/chat-solid.svg" />
    </a>
    <a href="https://github.com/ProfessorManhattan/docker-ansible-molecule-archlinux" title="GitHub mirror" target="_blank">
      <img src="https://gitlab.com/megabyte-labs/assets/-/raw/master/svg/github-solid.svg" />
    </a>
    <a href="https://gitlab.com/megabyte-labs/dockerfile/ansible-molecule/archlinux" title="GitLab repository" target="_blank">
      <img src="https://gitlab.com/megabyte-labs/assets/-/raw/master/svg/gitlab-solid.svg" />
    </a>
  </h4>
  <p align="center">
    <a href="https://hub.docker.com/repository/docker/megabytelabs/ansible-molecule-archlinux" target="_blank">
      <img alt="Version" src="https://img.shields.io/docker/v/megabytelabs/ansible-molecule-archlinux?logo=docker&logoColor=white&sort=date&style=flat" />
    </a>
    <a href="https://hub.docker.com/repository/docker/megabytelabs/ansible-molecule-archlinux" target="_blank">
      <img alt="DockerHub image size: Archlinux" src="https://img.shields.io/docker/image-size/megabytelabs/ansible-molecule-archlinux?logo=docker&sort=date&logoColor=white&style=flat">
    </a>
    <a href="https://hub.docker.com/repository/docker/megabytelabs/ansible-molecule-archlinux" target="_blank">
      <img alt="DockerHub pulls: Archlinux" src="https://img.shields.io/docker/pulls/megabytelabs/ansible-molecule-archlinux?logo=docker&logoColor=white&style=flat" />
    </a>
    <a href="https://hub.docker.com/repository/docker/megabytelabs/ansible-molecule-archlinux" target="_blank">
      <img alt="DockerHub stars: Archlinux" src="https://img.shields.io/docker/stars/megabytelabs/ansible-molecule-archlinux?logo=docker&logoColor=white&style=flat" />
    </a>
    <a href="https://gitlab.com/megabyte-labs/dockerfile/ansible-molecule/archlinux/-/commits/master" target="_blank">
      <img alt="GitLab pipeline status" src="https://gitlab.com/megabyte-labs/dockerfile/ansible-molecule/archlinux/badges/master/pipeline.svg?style=flat" />
    </a>
    <a href="https://gitlab.com/megabyte-labs/dockerfile/ansible-molecule/archlinux/-/raw/master/LICENSE" target="_blank">
      <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg?style=flat" />
    </a>
    <a href="profile.opencollective" title="Support us on Open Collective" target="_blank">
      <img alt="Open Collective sponsors" src="https://img.shields.io/opencollective/sponsors/megabytelabs?logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAAElBMVEUAAACvzfmFsft4pfD////w+P9tuc5RAAAABHRSTlMAFBERkdVu1AAAAFxJREFUKM9jgAAXIGBAABYXMHBA4yNEXGBAAU2BMz4FIIYTNhtFgRjZPkagFAuyAhGgHAuKAlQBCBtZB4gzQALoDsN0Oobn0L2PEUCoQYgZyOjRQFiJA67IRrEbAJImNwFBySjCAAAAAElFTkSuQmCC&label=Open%20Collective%20sponsors&logo=opencollective&style=flat" />
    </a>
    <a href="https://github.com/ProfessorManhattan" title="Support us on GitHub" target="_blank">
      <img alt="GitHub sponsors" src="https://img.shields.io/github/sponsors/ProfessorManhattan?label=GitHub%20sponsors&logo=github&style=flat" />
    </a>
    <a href="https://github.com/ProfessorManhattan" target="_blank">
      <img alt="GitHub: ProfessorManhattan" src="https://img.shields.io/github/followers/ProfessorManhattan?style=social" target="_blank" />
    </a>
    <a href="https://twitter.com/MegabyteLabs" target="_blank">
      <img alt="Twitter: MegabyteLabs" src="https://img.shields.io/twitter/url/https/twitter.com/MegabyteLabs.svg?style=social&label=Follow%20%40MegabyteLabs" />
    </a>
  </p>
</div>

> </br><h3 align="center">**An Archlinux image with Python 3, systemd, and a non-root sudo user (user and password are both *ansible*) intended to be used by Ansible Molecule tests**</h3></br>

[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/aqua.png)](#table-of-contents)

## ➤ Table of Contents

* [➤ Overview](#-overview)
* [➤ Requirements](#-requirements)
  * [Optional Requirements](#optional-requirements)
* [➤ Example Usage](#-example-usage)
  * [Experimenting / Shelling Into Container](#experimenting--shelling-into-container)
  * [Building the Docker Container](#building-the-docker-container)
  * [Build Tools](#build-tools)
  * [Integrating with Ansible Molecule](#integrating-with-ansible-molecule)
    * [`molecule.yml` Example](#moleculeyml-example)
    * [`converge.yml` Example](#convergeyml-example)
    * [Additional Information on Ansible Molecule](#additional-information-on-ansible-molecule)
* [➤ Contributing](#-contributing)
* [➤ License](#-license)

[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/aqua.png)](#overview)

## ➤ Overview

This project houses a Dockerfile and build tools that are meant to create an [Ansible Molecule](https://molecule.readthedocs.io/en/latest/)-compatible image for testing against Archlinux. Ansible Molecule testing is an important part of creating Ansible roles. Nearly all of [our Ansible roles](https://gitlab.com/megabyte-labs/ansible-roles) support Archlinux, Debian, Fedora, CentOS, Ubuntu, Mac OS X, and Windows. On top of that, we have hundreds of roles to maintain. In order to alleviate the headache that comes with supporting so many operating systems and so many roles, we utilize several test methods which are all powered by Ansible Molecule. We use this project's image to test our Ansible scripts against Archlinux using Docker. Although you can use the image that this project creates on any CI platform, we choose to use GitLab CI because it is free. It allows us to spot bugs before the code is available publicly. Setting up GitLab CI with Ansible Molecule and Docker is a great first line of defense when it comes to preventing issues on Linux environments.

For an example of how to use the image that this project creates (and integrate it with GitLab CI), check out the `molecule/` folder and the `.gitlab-ci.yml` file in our [Ansible Studio role](https://gitlab.com/megabyte-labs/ansible-roles/androidstudio). If that interests you then you should check out the [Integrating with Ansible Molecule](#integrating-with-ansible-molecule) section below as well.

**Note: The username and password for this image are both ansible.**

[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/aqua.png)](#requirements)

## ➤ Requirements

* **[Docker](https://gitlab.com/megabyte-labs/ansible-roles/docker)**

### Optional Requirements

* [DockerSlim](https://gitlab.com/megabyte-labs/ansible-roles/dockerslim) - Used for generating compact, secure images
* [jq](https://gitlab.com/megabyte-labs/ansible-roles/jq) - Used by `.start.sh` to interact with JSON documents from the bash shell
* [Node.js](https://gitlab.com/megabyte-labs/ansible-roles/nodejs) (*Version >=10*) - Utilized to add development features like a pre-commit hook and maintenance tasks

If you choose to utilize the development tools provided by this project then at some point you will have to run `bash .start.sh` (or `npm i` which calls `bash .start.sh` after it is done). The `.start.sh` script will attempt to automatically install any requirements (without sudo) that are not already present on your build system to the user's `~/.local/bin` folder. The `.start.sh` script also takes care of other tasks such as generating the documentation. For more details on how the Optional Requirements are used and set up, check out the [CONTRIBUTING.md](https://gitlab.com/megabyte-labs/dockerfile/ansible-molecule/archlinux/-/blob/master/CONTRIBUTING.md) guide.

[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/aqua.png)](#example-usage)

## ➤ Example Usage

Without having to clone this repository, you can pull the latest Dockerfile to have the image cached locally by running:

```shell
docker pull megabytelabs/archlinux:latest
```

### Experimenting / Shelling Into Container

Although this image is intended to be used with Ansible Molecule (which is described below), you can start the container and shell into it for debugging or for curiousity's sake by running the following commands:

```shell
docker run megabytelabs/archlinux:latest
docker exec -it megabytelabs/archlinux:latest /bin/bash
```

Note that after you exit from the shell session, the container will still be running. After you are done experimenting with the container, you can destroy it by running:

```shell
docker ps -a # Copy the ID of the image you wish to delete
docker rm ID_FROM_ABOVE_COMMAND_HERE
```

Alternatively, you can shell into the container and have Docker automatically remove the container when you exit by running:

```shell
docker run -it --rm megabytelabs/archlinux:latest /bin/sh
```

### Building the Docker Container

You may have a use case that requires some modifications to our Docker image. After you make changes to the Dockerfile, you can upload your custom container to [Docker Hub](https://hub.docker.com/) using the following code:

```shell
export DOCKERHUB_USERNAME=Your_DockerHub_Username_Here
export DOCKERHUB_PASSWORD=Your_DockerHub_Password_Here
docker login -u "$DOCKERHUB_USERNAME" -p "$DOCKERHUB_PASSWORD" docker.io
docker build --pull -t "$DOCKERHUB_USERNAME/archlinux:latest" .
docker push "$DOCKERHUB_USERNAME/archlinux:latest"
```

After setting your DockerHub username and password, the commands above will build the Docker image and upload it to [Docker Hub](https://hub.docker.com/) where it will be publicly accessible. You can see this logic being implemented as a [GitLab CI task here](https://gitlab.com/megabyte-labs/ci/gitlab-ci-templates/-/blob/master/dockerhub.gitlab-ci.yml). This GitLab CI task works in conjunction with the `.gitlab-ci.yml` file in the root of this repository.

### Build Tools

You might notice that we have a lot of extra files considering that this repository basically boils down to a single Dockerfile. These extra files are meant to make team development easier, predictable, and enjoyable. If you have a recent version of [Node.js](https://gitlab.com/megabyte-labs/ansible-roles/nodejs) installed, you can get started using our build tools by running `npm i` (or by running `bash .start.sh` if you do not currently have Node.js installed) in the root of this repository. After that, you can run `npm run info` to see a list of the available development features. The command will output a chart that may look something like this:

```shell
❯ npm run info

> @megabytelabs/docker-ansible-molecule-ubuntu-21.04@0.0.1 info
> npm-scripts-info

build:
  Build the regular Docker image and then build the slim image (if the project supports it)
build:latest:
  Build the regular Docker image
commit:
  The preferred way of running git commit (instead of git commit, we prefer you run 'npm run commit' in the root of this repository)
fix:
  Automatically fix formatting errors
info:
  Logs descriptions of all the npm tasks
prepare-release:
  Updates the CHANGELOG with commits made using 'npm run commit' and updates the project to be ready for release
publish:
  Creates new release(s) and uploads the release(s) to DockerHub
scan:
  Scans images for vulnerabilities
shell:
  Run the Docker container and open a shell
sizes:
  List the sizes of the Docker images on the system
test:
  Validates the Dockerfile, tests the Docker image, and performs project linting
update:
  Runs .start.sh to automatically update meta files and documentation
version:
  Used by 'npm run prepare-release' to update the CHANGELOG and app version
start:
  Kickstart the application
```

For more details, check out the [CONTRIBUTING.md](https://gitlab.com/megabyte-labs/dockerfile/ansible-molecule/archlinux/-/blob/master/CONTRIBUTING.md) file.

### Integrating with Ansible Molecule

If you are using this image for testing [Ansible roles](https://gitlab.com/megabyte-labs/ansible-roles) using [Ansible Molecule](https://molecule.readthedocs.io/en/latest/), then you will have to incorporate the image into your `molecule.yml` file (as well as have the appropriate folder structure in your custom role). A great example is in the repository of our [Android Studio Ansible role](https://gitlab.com/megabyte-labs/ansible-roles/androidstudio). In that role's root directory, you will see a folder named `molecule/` alongside a properly structured Ansible role. In that folder, you will see a folder named `docker/`. This folder defines the "docker" Molecule scenario. In the `molecule/docker/` folder, you will see a file called `molecule.yml` which you can open to see a reference to this repository's Docker Hub slug (i.e. `megabytelabs/archlinux`). Once you have everything setup like it is in our Android Studio role, you can run `molecule test -s docker` to run the tests.

#### `molecule.yml` Example

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
    image: megabytelabs/ansible-molecule-archlinux:latest
    command: ''
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

#### `converge.yml` Example

The above configuration defines a custom `converge.yml` file. The `converge.yml` file is meant to contain the playbook or role logic; it is where you define what to install with your role. You can see a working format of `converge.yml` below or in the aforementioned [Android Studio role](https://gitlab.com/megabyte-labs/ansible-roles/androidstudio) repository.

```yaml
---
- name: Converge
  hosts: all
  vars:
    ansible_user: ansible
  roles:
    - role: androidstudio
```

#### Additional Information on Ansible Molecule

If you are getting started with Ansible or Molecule, then you might find the information in the Android Studio role's [README.md](https://gitlab.com/megabyte-labs/ansible-roles/androidstudio/-/blob/master/README.md) and [CONTRIBUTING.md](https://gitlab.com/megabyte-labs/ansible-roles/androidstudio/-/blob/master/CONTRIBUTING.md) helpful. Also, if you are interested in seeing our flagship Ansible product (which is an Ansible playbook intended to provision development-oriented desktops and production-quality servers), then please check out [Install Doctor](https://gitlab.com/ProfessorManhattan/Playbooks).

[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/aqua.png)](#contributing)

## ➤ Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://gitlab.com/megabyte-labs/dockerfile/ansible-molecule/archlinux/-/issues). If you would like to contribute, please take a look at the [contributing guide](https://gitlab.com/megabyte-labs/dockerfile/ansible-molecule/archlinux/-/blob/master/CONTRIBUTING.md).

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

Copyright © 2021 [Megabyte LLC](https://megabyte.space). This project is [MIT](https://gitlab.com/megabyte-labs/dockerfile/ansible-molecule/archlinux/-/raw/master/LICENSE) licensed.
