***

title: ArchLinux Desktop
description: An automated ArchLinux Desktop (currently, version 2022.04.05) Packer project that builds boxes using the latest ArchLinux release on a regular basis
editUrl: <https://gitlab.com/megabyte-labs/packer/archlinux-desktop/blob/master/docs/GUIDE.md>
editApiUrl: <https://github.com/ionic-team/capacitor-plugins/blob/main/packer/src/definitions.ts>
sidebar\_label: ArchLinux Desktop
githubUrl: 'https://github.com/megabyte-labs/packer-archlinux-desktop'
gitlabUrl: 'https://gitlab.com/megabyte-labs/packer/archlinux-desktop'
ansibleGalaxyProjectId: false
packageGroup: 'packer'
packageName: '@mblabs/archlinux-desktop'
packageSlug: 'archlinux-desktop'
packageVersion: '1.5.0'
pyPiPackageName: 'archlinux-desktop'
------------------------------------

<div align="center">
  <center>
    <a href="https://github.com/megabyte-labs/packer-archlinux-desktop">
      <img width="148" height="148" alt="ArchLinux Desktop logo" src="https://gitlab.com/megabyte-labs/packer/archlinux-desktop/-/raw/master/logo.png" />
    </a>
  </center>
</div>
<div align="center">
  <center><h1 align="center"><i></i>ArchLinux Desktop Template for Packer<i></i></h1></center>
  <center><h4 style="color: #18c3d1;">Curated by <a href="https://megabyte.space" target="_blank">Megabyte Labs</a></h4><i></i></center>
</div>

<div align="center">
  <a href="https://megabyte.space" title="Megabyte Labs homepage" target="_blank">
    <img alt="Homepage" src="https://img.shields.io/website?down_color=%23FF4136&down_message=Down&label=Homepage&logo=home-assistant&logoColor=white&up_color=%232ECC40&up_message=Up&url=https%3A%2F%2Fmegabyte.space&style=for-the-badge" />
  </a>
  <a href="https://github.com/megabyte-labs/packer-archlinux-desktop/blob/master/docs/CONTRIBUTING.md" title="Learn about contributing" target="_blank">
    <img alt="Contributing" src="https://img.shields.io/badge/Contributing-Guide-0074D9?logo=github-sponsors&logoColor=white&style=for-the-badge" />
  </a>
  <a href="https://app.slack.com/client/T01ABCG4NK1/C01NN74H0LW/details/" title="Chat with us on Slack" target="_blank">
    <img alt="Slack" src="https://img.shields.io/badge/Slack-Chat-e01e5a?logo=slack&logoColor=white&style=for-the-badge" />
  </a>
  <a href="https://gitter.im/megabyte-labs/community" title="Chat with the community on Gitter" target="_blank">
    <img alt="Gitter" src="https://img.shields.io/gitter/room/megabyte-labs/community?logo=gitter&logoColor=white&style=for-the-badge" />
  </a>
  <a href="https://github.com/megabyte-labs/packer-archlinux-desktop" title="GitHub mirror" target="_blank">
    <img alt="GitHub" src="https://img.shields.io/badge/Mirror-GitHub-333333?logo=github&style=for-the-badge" />
  </a>
  <a href="https://gitlab.com/megabyte-labs/packer/archlinux-desktop" title="GitLab repository" target="_blank">
    <img alt="GitLab" src="https://img.shields.io/badge/Repo-GitLab-fc6d26?logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgAQMAAABJtOi3AAAABlBMVEUAAAD///+l2Z/dAAAAAXRSTlMAQObYZgAAAHJJREFUCNdNxKENwzAQQNEfWU1ZPUF1cxR5lYxQqQMkLEsUdIxCM7PMkMgLGB6wopxkYvAeI0xdHkqXgCLL0Beiqy2CmUIdeYs+WioqVF9C6/RlZvblRNZD8etRuKe843KKkBPw2azX13r+rdvPctEaFi4NVzAN2FhJMQAAAABJRU5ErkJggg==&style=for-the-badge" />
  </a>
</div>
<br/>
<div align="center">
  <a title="Version: 1.5.0" href="https://github.com/megabyte-labs/packer-archlinux-desktop" target="_blank">
    <img alt="Version: 1.5.0" src="https://img.shields.io/badge/version-1.5.0-blue.svg?logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgAQMAAABJtOi3AAAABlBMVEUAAAD///+l2Z/dAAAAAXRSTlMAQObYZgAAACNJREFUCNdjIACY//+BEp9hhM3hAzYQwoBIAqEDYQrCZLwAAGlFKxU1nF9cAAAAAElFTkSuQmCC&cacheSeconds=2592000&style=flat-square" />
  </a>
  <a title="Pipeline status" href="https://gitlab.com/megabyte-labs/packer/archlinux-desktop/-/commits/master" target="_blank">
    <img alt="Pipeline status" src="https://img.shields.io/gitlab/pipeline-status/megabyte-labs/packer/archlinux-desktop?branch=master&label=build&logo=gitlab&style=flat-square" />
  </a>
  <a title="Hyper-V build status" href="https://gitlab.com/megabyte-labs/packer/archlinux-desktop/-/commits/master" target="_blank">
    <img alt="Hyper-V build status" src="https://img.shields.io/gitlab/pipeline-status/megabyte-labs/packer/archlinux-desktop?branch=hyperv&label=build&logo=hyper&style=flat-square" />
  </a>
  <a title="KVM/QEMU build status" href="https://gitlab.com/megabyte-labs/packer/archlinux-desktop/-/commits/master" target="_blank">
    <img alt="KVM/QEMU build status" src="https://img.shields.io/gitlab/pipeline-status/megabyte-labs/packer/archlinux-desktop?branch=qemu&label=build&logo=qemu&style=flat-square" />
  </a>
  <a title="Parallels build status" href="https://gitlab.com/megabyte-labs/packer/archlinux-desktop/-/commits/master" target="_blank">
    <img alt="Parallels build status" src="https://img.shields.io/gitlab/pipeline-status/megabyte-labs/packer/archlinux-desktop?branch=parallels&label=build&logo=macos&style=flat-square" />
  </a>
  <a title="VirtualBox build status" href="https://gitlab.com/megabyte-labs/packer/archlinux-desktop/-/commits/master" target="_blank">
    <img alt="VirtualBox build status" src="https://img.shields.io/gitlab/pipeline-status/megabyte-labs/packer/archlinux-desktop?branch=virtualbox&label=build&logo=virtualbox&style=flat-square" />
  </a>
  <a title="VMWare build status" href="https://gitlab.com/megabyte-labs/packer/archlinux-desktop/-/commits/master" target="_blank">
    <img alt="VMWare build status" src="https://img.shields.io/gitlab/pipeline-status/megabyte-labs/packer/archlinux-desktop?branch=vmware&label=build&logo=vmware&style=flat-square" />
  </a>
  <a title="Documentation" href="https://megabyte.space/docs/packer" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg?logo=readthedocs&style=flat-square" />
  </a>
  <a title="License: MIT" href="https://github.com/megabyte-labs/packer-archlinux-desktop/blob/master/LICENSE" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/license-MIT-yellow.svg?logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgAQMAAABJtOi3AAAABlBMVEUAAAD///+l2Z/dAAAAAXRSTlMAQObYZgAAAHpJREFUCNdjYOD/wMDAUP+PgYHxhzwDA/MB5gMM7AwMDxj4GBgKGGQYGCyAEEgbMDDwAAWAwmk8958xpIOI5zKH2RmOyhxmZjguAiKmgIgtQOIYmFgCIp4AlaQ9OczGkJYCJEAGgI0CGwo2HmwR2Eqw5SBnNIAdBHYaAJb6KLM15W/CAAAAAElFTkSuQmCC&style=flat-square" />
  </a>
</div>

> <br/><h4 align="center">**An automated ArchLinux Desktop (currently, version 2022.04.05) Packer project that builds boxes using the latest ArchLinux release on a regular basis**</h4><br/>

<a href="#table-of-contents" style="width:100%"><img style="width:100%" src="https://gitlab.com/megabyte-labs/assets/-/raw/master/png/aqua-divider.png" /></a>

## Table of Contents

* [Overview](#overview)
  * [Supported Virtualization Platforms](#supported-virtualization-platforms)
* [Requirements](#requirements)
* [Quick Start](#quick-start)
* [Creating Your Own Box](#creating-your-own-box)
* [Updating Your Box](#updating-your-box)
* [Contributing](#contributing)
  * [Affiliates](#affiliates)
* [License](#license)

<a href="#overview" style="width:100%"><img style="width:100%" src="https://gitlab.com/megabyte-labs/assets/-/raw/master/png/aqua-divider.png" /></a>

## Overview

[ArchLinux](https://archlinux.org/) is a Linux distribution that is focused on simplicity, modernity, pragmatism, user centrality, and versatility. In practice, this means the project attempts to have minimal distribution-specific changes, and therefore minimal breakage with updates, and be pragmatic over ideological design choices and focus on customizability rather than user-friendliness.

Pacman, a package manager written specifically for Arch Linux, is used to install, remove and update software packages. Arch Linux uses a rolling release model, meaning there are no "major releases" of completely new versions of the system; a regular system update is all that is needed to obtain the latest Arch software; the installation images released every month by the Arch team are simply up-to-date snapshots of the main system components.

Arch Linux has comprehensive documentation, which consists of a community wiki known as the [ArchWiki](https://wiki.archlinux.org/).

This project houses configurations that can be used to build performant [ArchLinux Desktop](https://archlinux.org/) images. It includes scripts that take care of optimizing the image for your system (i.e. setting up SSH with the Vagrant default public key, setting up GuestAdditions for VirtualBox, etc.). This project is intended to be used to create desktop images that you would launch from your main desktop using a GUI. If you are looking for headless images, you should either use [Bento's server images](https://app.vagrantup.com/bento). You might also have some luck browsing through our [Packer projects](https://gitlab.com/megabyte-labs/packer).

This project:

* Currently builds a minimal ArchLinux Desktop 2022.04.05 VM image by default
* May contain multiple templates which will all end in `template.json` and be present in the root of the project
* Automates the process of keeping our [ArchLinux Desktop 2022.04.05 VM images](https://app.vagrantup.com/Megabyte/boxes/Archlinux-Desktop) up-to-date with the latest upstream source by (1) using the `vagrant-cloud` post-processor to automatically upload the box after it is built and (2) running the build with a cronjob
* In some cases, [LatestOS](https://pypi.org/project/latestos/) is used to automatically update the link to the base image / checksums to the latest release

### Supported Virtualization Platforms

This project supports creating boxes for the following virtualization platforms:

* [KVM](https://gitlab.com/megabyte-labs/ansible-roles/kvm)
* [Parallels](https://gitlab.com/megabyte-labs/ansible-roles/parallels)
* [VirtualBox](https://gitlab.com/megabyte-labs/ansible-roles/virtualbox)
* [VMWare](https://gitlab.com/megabyte-labs/ansible-roles/vmware)

<a href="#requirements" style="width:100%"><img style="width:100%" src="https://gitlab.com/megabyte-labs/assets/-/raw/master/png/aqua-divider.png" /></a>

## Requirements

* At least one of the above virtualization platforms installed ([VirtualBox](https://github.com/megabyte-labs/ansible-virtualbox) is a good starting point if you do not already have one of the platforms installed)
* [Packer](https://github.com/megabyte-labs/ansible-packer)
* [Vagrant](https://github.com/megabyte-labs/ansible-vagrant)

<a href="#quick-start" style="width:100%"><img style="width:100%" src="https://gitlab.com/megabyte-labs/assets/-/raw/master/png/aqua-divider.png" /></a>

## Quick Start

If you have [VirtualBox](https://github.com/megabyte-labs/ansible-virtualbox) and [Vagrant](https://github.com/megabyte-labs/ansible-vagrant) installed, you can quickly spin up the finished product of this repository by running the following code in the root directory of this repository:

```shell
vagrant up
```

The default username and password are both *vagrant*.

<a href="#creating-your-own-box" style="width:100%"><img style="width:100%" src="https://gitlab.com/megabyte-labs/assets/-/raw/master/png/aqua-divider.png" /></a>

## Creating Your Own Box

You can quickly use this project to create your own minimal ArchLinux Desktop 2022.04.05 box by:

1. Creating a box on VagrantUp titled Archlinux-Desktop (Note: The VagrantUp box name should match the `"box_basename"` in the `template.json` file.)
2. Changing the `"vagrantup_user"` variable in `template.json` to your VagrantUp username
3. Acquiring a VagrantUp API token from the settings page
4. Running the following code

```shell
bash start.sh # Ensures Bodega is installed
export VAGRANT_CLOUD_TOKEN=YourTokenHere
task packer:build
```

*[What is Bodega?](https://github.com/ProfessorManhattan/Bodega)*

After running the code above, you will kick off a parallelized build for all the virtualization platforms that your computer currently has installed. If you want to install all of the virtualization platforms that your computer could potentially support then you can run `task packer:install:platforms`.

After building the VM images, the example above will upload your images to your VagrantUp box repository *(that you have to create before running the script that is above)*. If you want to build the box for another provider then look at the `template.json` in the `"builders"` section for the types of boxes you can create (e.g. `virtualbox-iso`, `vmware-iso`, `parallels-iso`, `qemu`).

If you do not want your box to be automatically uploaded to VagrantUp after you build it with Packer then you will need to remove the `"vagrant-cloud"` section under `"post-processors"`. The section is wrapped in a nested array. If you are removing the `vagrant-cloud` post-processor, then the section no longer has to be placed in a nested array.

<a href="#updating-your-box" style="width:100%"><img style="width:100%" src="https://gitlab.com/megabyte-labs/assets/-/raw/master/png/aqua-divider.png" /></a>

## Updating Your Box

If a new release of the ArchLinux Desktop 2022.04.05 system is available, you can update your VagrantUp box. You can do this by changing the `"iso_checksum_url"`, `"iso_url"`, and `"iso_version"` variables in the `template.json` file. After that, run `packer build -only=virtualbox-iso template.json` to build the image again.

<a href="#contributing" style="width:100%"><img style="width:100%" src="https://gitlab.com/megabyte-labs/assets/-/raw/master/png/aqua-divider.png" /></a>

## Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/megabyte-labs/packer-archlinux-desktop/issues). If you would like to contribute, please take a look at the [contributing guide](https://github.com/megabyte-labs/packer-archlinux-desktop/blob/master/docs/CONTRIBUTING.md).

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

Copyright © 2020-2021 [Megabyte LLC](https://megabyte.space). This project is [MIT](https://gitlab.com/megabyte-labs/packer/archlinux-desktop/-/blob/master/LICENSE) licensed.
