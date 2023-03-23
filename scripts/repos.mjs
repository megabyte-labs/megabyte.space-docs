import path from 'path';
import fs from 'fs';
import fetch from 'node-fetch';

const REPOS_DIR = new URL('../docs/repos/', import.meta.url);
// https://gitlab.com/api/v4/groups/megabyte-labs/projects?include_subgroups=true
// replace with latest once it's relased
const tag = 'latest';

const repoUrls = [
  {
    "repoUrl": "https://gitlab.com/megabyte-labs/gas-station",
    "group": "featured"
  },
  {
    "repoUrl": "https://gitlab.com/megabyte-labs/install.doctor",
    "group": "featured"
  },
  {
    "repoUrl": "https://gitlab.com/megabyte-labs/jumpusb",
    "group": "featured"
  },
  {
    "group": "ansible",
    "groupId": "12261670"
  },
  {
    "group": "docker-molecule",
    "groupId": "11721830"
  },
  {
    "group": "docker",
    "repoUrl": "https://gitlab.com/megabyte-labs/docker/ci-pipeline/molecule"
  },
  {
    "group": "docker",
    "repoUrl": "https://gitlab.com/megabyte-labs/docker/software/devcontainer"
  },
  {
    "group": "docker",
    "repoUrl": "https://gitlab.com/megabyte-labs/docker/ci-pipeline/docker-test"
  },
  {
    "group": "docker",
    "repoUrl": "https://gitlab.com/megabyte-labs/docker/ci-pipeline/gitlab-ci-lint"
  },
  {
    "group": "docker",
    "repoUrl": "https://gitlab.com/megabyte-labs/docker/ci-pipeline/propagate"
  },
  {
    "group": "docker",
    "repoUrl": "https://gitlab.com/megabyte-labs/docker/ci-pipeline/vagrant-validate"
  },
  {
    "group": "codeclimate",
    "groupId": "14556970"
  },
  {
    "group": "misc",
    "repoUrl": "https://gitlab.com/megabyte-labs/misc/betelgeuse"
  },
  {
    "group": "misc",
    "repoUrl": "https://gitlab.com/megabyte-labs/misc/file-templates"
  },
  {
    "group": "go",
    "groupId": "14342540"
  },
  {
    "group": "misc",
    "groupId": "6973111"
  },
  {
    "group": "npm",
    "groupId": "12165875"
  },
  {
    "group": "packer",
    "groupId": "10839950"
  },
  {
    "group": "python",
    "groupId": "14289563"
  },
  {
    "group": "templates",
    "groupId": "11579735"
  }
];

async function buildRepoDocs(repoUrlEntry) {
  if (repoUrlEntry.groupId) {
    const repoDatas = await acquireRepoTitlesAndUrls(repoUrlEntry.group, repoUrlEntry.groupId)
    return await Promise.all(repoDatas.map(buildRepoDocs));
  }

  const [readme, pkgJson] = await Promise.all([getReadme(repoUrlEntry), getPkgJsonData(repoUrlEntry)]);

  const apiContent = createApiPage(repoUrlEntry, readme, pkgJson);
  const fileName = `${repoUrlEntry.group}-${repoUrlEntry.repoUrl.substring(repoUrlEntry.repoUrl.lastIndexOf('/') + 1)}.md`;
  const filePath = new URL(fileName, REPOS_DIR);
  fs.writeFileSync(filePath, apiContent);
}

async function acquireRepoTitlesAndUrls(group, groupId) {
  const groupProjects = await fetch(`https://gitlab.com/api/v4/groups/${groupId}/projects`)
  const jsonData = await groupProjects.json()
  return jsonData.map(x => {
    return {
      group,
      title: x.name,
      repoUrl: x.web_url
    }
  })
}

function createApiPage(repoData, readme, pkgJson) {
  const title = `${repoData.title}`;
  const desc = pkgJson.description ? pkgJson.description.replace(/\n/g, ' ') : repoData.title;
  // https://gitlab.com/megabyte-labs/ansible-roles/androidstudio/-/blob/master/README.md
  const editUrl = `${repoData.repoUrl}/blob/master/docs/GUIDE.md`;
  const editApiUrl = `https://github.com/ionic-team/capacitor-plugins/blob/main/${repoData.group}/src/definitions.ts`;
  const sidebarLabel = `${repoData.title}`;

  // removes JSDoc HTML comments as they break docusauurs
  readme = readme.replaceAll(/<!--.*-->/g, '');

  return `
---
title: ${title}
description: ${desc}
editUrl: ${editUrl}
editApiUrl: ${editApiUrl}
sidebar_label: ${sidebarLabel}
---

${readme}`.trim();
}

async function getReadme(repoData) {
  const url = `${repoData.repoUrl}/-/raw/master/README.md`
  console.log(`Fetching ${url}`)
  const rsp = await fetch(url);
  return rsp.text();
}

async function getPkgJsonData(repoData) {
  const url = `${repoData.repoUrl}/-/raw/master/package.json`
  console.log(`Fetching ${url}`);
  const rsp = await fetch(url);
  return rsp.json();
}

async function main() {
  await Promise.all(repoUrls.map(buildRepoDocs));
  console.log(`Repo document files updated 🎸`);
}

function toTitleCase(str) {
  return str.replace(/(^\w|-\w)/g, (s) => {
    return s.replace(/-/, ' ').toUpperCase();
  });
}

main();
