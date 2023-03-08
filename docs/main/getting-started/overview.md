---
title: Getting Started
description: Find out how to get started customizing and contributing to projects within the Megabyte Labs eco-system.
sidebar_label: Getting Started
slug: /getting-started
---

Getting started with Megabyte Labs projects is super easy! While you are skimming through the documentation available in this portal, run `bash start.sh` in any of our projects (on a Linux / macOS machine).

## Start Script

Running `bash start.sh` in a Megabyte Labs project will do a few different things:

* **Templated files** - Ensure templated files are up-to-date with their upstream sources. This means any dependencies in the `package.json` that are defined globally for all projects will be updated and the README will be updated with the latest documentation partials. Depending on the project type, other templated files may be updated too.
* **System dependencies** - Automatically install system dependencies like Homebrew packages.
* **Local dependencies** - Install local dependencies such as `node_modules/`, Python dependencies, and other language-specific local dependencies.
* **Auto-fixing** - Run code auto-fixers such as ESLint to ensure anything that can be automatically fixed is fixed.
* **Commit** - Commit any changes to the current branch.
* **Repository Updates** - If `GITHUB_TOKEN` or `GITLAB_TOKEN` is defined, the start script will attempt to create / update the GitHub and GitLab mirrors with preferred settings.

## Build Settings

After the `bash start.sh` finishes setting everything up, you will be ready to start making modifications. All of the basic developer commands will be available in the `package.json` scripts section. These scripts will include commands like `npm run build` or `npm run start`.

### Taskfiles

You might notice that some of (if not all of) the `package.json` scripts reference task file definitions. Whenever possible, the core logic should be added to the Taskfiles instead of being kept in the `package.json` file. If you have not already read about the Taskfile system, then please refer to the [Getting Started Overview](/docs/#cli--taskfiles).

For example, in an TypeScript project, we should define the build script as:

```
{
    "scripts": {
        "build": "bash start.sh && task npm:build:tsconfig"
    }
}
```

Since we share the task definitions across all of our projects, defining the build script like this allows us to make global updates. If you need to modify the task definition, please open a pull request against the [Taskfile repository](https://gitlab.com/megabyte-labs/common/taskfiles).

You can see the definitions defined in the `Taskfile.yml` file in the root of every project. Similarly, you can run `task --list` to see a summary of all the important task definitions.

### Repository Structure

The file and folder structure will vary depending on what type of project you are working on but in general, there a few key files of interest that will not be automatically generated that you need to pay attention to.

* `local/` - The local folder should be used to store any auxilary files that are unique to the repository such as helper scripts.
* `package.json` - The `package.json` file stores all the variables required for the automation system. This includes variables like `description` which is a short description of the project that ends up being featured in the `package.json`, on the GitHub summary, on the GitLab summary, and more depending on the project type. There are a handful of other variables that need to be populated in new repositories. Make sure you check out similar projects in the [Megabyte Labs eco-system](https://gitlab.com/megabyte-labs) to get a feel for which variables need to be populated.
* `logo.png` - The `logo.png` is used in the README and is also used for repository page styling and should include a 200x200 pixel transparent background logo for the project. Optionally, a larger sized logo should be stored at `local/images/logo-1024x1024.png`. If an `.svg` variant exists, it should be stored as `local/images/logo.svg`.
* `docs/img/logo-full.png` - If the README would be better served with a non-square logo, then you can store the full, wide logo at `docs/img/logo-full.png`.
* `docs/partials/guide.md` - The README, CONTRIBUTING, and several other documents are automatically generated with fancy formatting and useful features. However, every project should contain a project-specific guide that covers instructions and examples. This markdown formatted guide should be stored at `docs/partials/guide.md`. If there is documentation that would be better served in a seperate markdown file, then that markdown file should be stored in the `docs/` folder and linked to from `docs/partials/guide.md`. *Note: When creating documentation with `docs/partials/guide.md`, you should not use the # header title and instead start with the ## header title. You should also never skip header title sizes. So if you wanted to use a #### header title, you would need to have it in a section that includes a ## header title and then a ### header title.*

Many of the other files including the files included in the project including the files in `.config/`, `.devcontainer/`, `.github/`, `.gitlab/`, and several others are automatically generated and included to provide IDE / service integrations. To ensure any changes you make to the project will stick, it is recommended that you stash your work with git and run `bash start.sh` after making changes that are outside of the standard `src/` folders (or whatever folder is standard for the type of project).

## DevContainers

All of our projects include the necessary settings to utilize DevContainers. One place you can do this is on GitHub but there may be more online services that allow you to leverage DevContainers. Our DevContainer includes all the project dependencies pre-installed inside of a Docker container. With a DevContainer, you can spin up an online instance of Visual Studio Code alongside the pre-configured Docker container. This might be useful if you want to keep your workstation free of the many CLIs that our projects rely on.
