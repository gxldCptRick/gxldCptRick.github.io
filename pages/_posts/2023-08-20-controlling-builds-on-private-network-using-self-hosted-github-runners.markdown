---
layout: post
title: "Controlling Builds on Private Networks using Self Hosted Github Runners"
date: 2023-08-20 22:26:45 +0000
author: Andres Hermilo Carrera Reynaga
categories: tutorial
tags: [ci-cd,github,github-actions]
---
Because I just learned about githubs self hosted runners option I wanted to show yall how to actually get jobs up and running for your CI/CD pipelines and run them on your own runners.

Quick Links
- [Github Actions Overview](#github-actions-overview)
- [Setting up Self Hosted Actions runner](#setting-up-self-hosted-actions-runner)
- [Configure Workflows to use Self Hosted Runner](#configure-workflows-to-use-self-hosted-runner)

[If you don't know about Github Actions I would suggest reading this first here.](https://docs.github.com/en/actions) In short github actions is githubs CI/CD solution that you can configure to run anything you want to when making things happen in your github repo. It can be configured to run either on a `workflow_dispatch` i.e. Go to github repo, click on actions, click on run. It can also be run on `pull_request`'s and `push`es so you can have something like a unit test suite run and you can have life feedback of any code changes you have committed to your repo. It is important that just because you setup a github actions to run your test suites, it doesn't write the tests for you and you should consider adding testing to your develpoment flows. 

## Github Actions Overview
In order to explain the usefulness of this I wanted to show you the workflow I have defined for my own project `Yugioh-Pack-Opener`

```yaml
# actions/test-backend/action.yaml
name: Test Backend
description: Validates the Backend codebase
runs:
  using: composite
  steps:
    - uses: actions/setup-python@v4
      with:
        python-version: "3.10"

    - name: Install Dependencies
      shell: bash
      working-directory: ./backend
      run: pip install -r requirements-dev.txt

    - name: Run All Tests
      shell: bash
      working-directory: ./backend
      run: pytest tests

# actions/test-web-frontend/action.yaml
name: Test Frontend
description: Validates the code for our web app
runs:
  using: composite
  steps:
    - uses: actions/setup-node@v3
      with:
        node-version: "16"

    - name: Install Dependencies
      shell: bash
      working-directory: ./frontend
      run: yarn install --frozen-lockfile

    - name: Run the test using npm-scripts
      shell: bash
      working-directory: ./frontend
      run: yarn test

# actions/test-mobile-frontend/action.yaml
name: Test Mobile Frontend
description: Validates the code for our mobile app
runs:
  using: composite
  steps:
    - name: Install Flutter
      uses: subosito/flutter-action@v2
      with:
        channel: "stable"

    - name: Install dependencies
      shell: bash
      run: flutter pub get
      working-directory: ./frontend/mobile/packopener

    - name: Test app
      shell: bash
      run: flutter test --coverage
      working-directory: ./frontend/mobile/packopener

# workflows/merges.yaml
name: Merge Workflow
on:
    push:
        branches:
            - main
jobs:
    test-backend:
        runs-on: ubuntu-latest
        steps:
            - uses: actions/checkout@v3
            - uses: ./.github/actions/test-backend
    test-web-frontend:
        runs-on: ubuntu-latest
        steps:
            - uses: actions/checkout@v3
            - uses: ./.github/actions/test-web-frontend
    test-mobile-frontend:
        runs-on: ubuntu-latest
        steps:
            - uses: actions/checkout@v3
            - uses: ./.github/actions/test-mobile-frontend
```

All of this is a lot at first glance but this is me making it easier for me to share my actions between workflows i.e. so I can seperate the workflow that runs on merges to main vs the one I have on pull_requests and the project is trying to support at least 3 seperate kinds of codebases with their own languages and ways to configure testing.

Lets break this down with the entrypoint file of `workflows/merges.yaml`:

```yaml
name: Merge Workflow
on:
    push:
        branches:
            - main
jobs:
    test-backend:
        runs-on: ubuntu-latest
        steps:
            - uses: actions/checkout@v3
            - uses: ./.github/actions/test-backend
    test-web-frontend:
        runs-on: ubuntu-latest
        steps:
            - uses: actions/checkout@v3
            - uses: ./.github/actions/test-web-frontend
    test-mobile-frontend:
        runs-on: ubuntu-latest
        steps:
            - uses: actions/checkout@v3
            - uses: ./.github/actions/test-mobile-frontend
```

This is the file that github reads to configure my workflow to run on pushes to my main branch. This is important because this also runs whenever I merge a branch into main since github then pushes to the repo after it has finished resolving my merge. 

The `jobs` section defines the different kinds of things your workflow will be doing. It is always a great idea to seperate your building of your app from the testing of your app but because I don't have something to save artifacts yet I only create 'jobs' for my testing and I also seperate all the different ones for testing the different libraries to make them all run in parallel. So in short you define jobs as things to do that can be done more or less independently of one another. You can also configure jobs to have to wait for others to finish so if I had some kind of deploy work I wanted to do as a job I could define a constraint to have to wait to only deploy if we finish the testing jobs without failing. 
```yaml
jobs:
    test-backend:
        runs-on: ubuntu-latest
        steps:
            - uses: actions/checkout@v3
            - uses: ./.github/actions/test-backend
    # ... job definitions
```

`jobs` require two properties to be defined in order to work: `runs-on`, and `steps`. 
```yaml
jobs:
    test-backend:
        runs-on: ubuntu-latest
        # ... omitted
```
`runs-on` defines what machine can actually run your github action workflow. I typically write mine to always use ubuntu-latest because of two reasons: they are cheap, and it is simple to use. Beyond that this should be specific to your needs so whatever value you set this to should be what your app needs not what I like haha. 

```yaml
jobs:
    test-backend:
        # ... omitted
        steps:
            - uses: actions/checkout@v3 # checkout my repo
            - uses: ./.github/actions/test-backend # run my custom action
```
`steps` are where you actually write out the steps of what your job is going to be doing. This is where I defer this to my actions definition where it has the hard steps on the machine that will be run each time to setup and run my tests. 

I won't go any further then this because this is getting long and I don't wanna take too much of your time.

## Setting up Self Hosted Actions Runner

Okay there are a few ways you can setup your self hosted runner. You can either run it bare metal or run it on a docker image. I went through both ways and honestly it felt cleaner to run it bare metal on my machine however I will probably use the docker one because I can define how many runners I want to run on my single machine using docker to keep making more.

The most important thing that you need to remember is that your runner must be able to access the public internet but it does not need to be publically accessible by the internet for your runner to connect to github. This means you can have a self hosted runner connected to your secure network and have it access your resources without having to do any extra work.

In order to create my runners using docker I followed this tutorial online to from [dev.to: Create a Docker based Self Hosted Github runner Linux container](https://dev.to/pwd9000/create-a-docker-based-self-hosted-github-runner-linux-container-48dh).

It was pretty quick and taught me a lot about what it takes to be able to setup a docker image with your own custom options to define and spin up your github runner. I essentially copied their Dockerfile and adjusted the start.sh script to apply labels to my runners to mark it as ubuntu-latest so my workflow jobs would try to schedule on it instead of the ones that github uses. This was to not have to change my workflow file to only run self hosted runners.

```bash
#!/bin/bash
# ... omitted

./config.sh --unattended --url https://github.com/${GH_OWNER}/${GH_REPOSITORY} --token ${REG_TOKEN} --name ${RUNNER_NAME} --labels 'ubuntu-latest,milo,custom'

# ... omitted 
```

After that all you need to do is follow their steps and build your docker image and then you can run your images using your parameters to define the github owner you wanted the repo you want the worker to connect to and then a Personal Access Token which you can generate by going to your github settings under developer options with limited scopes to reading your account but with full access to your repos so it can create the github runners for you automagically. 


## Configure Workflows to use Self Hosted Runner

To configure jobs to be run on your runners you will want to define the `runs-on` property to start with self-hosted and then whatever system information you want it to run on i.e. windows-latest ubuntu-latest macos etc..

```yaml
jobs:
    test-backend:
        runs-on:
            - self-hosted # only your runners
            - ubuntu-latest # whatever system you build on
        # ... omitted
```

After you have configured that you will be able to just either re-run a previous action that has these labels selected or start a new run and see it finally run on your runners!!