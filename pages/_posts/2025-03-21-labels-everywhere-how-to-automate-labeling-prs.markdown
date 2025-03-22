---
title: Labels Everywhere, How to Automate Labeling PRs
layout: post
date: 2025-03-21T10:52:00-0700
author:
  - Andres H. Carrera
categories:
  - cicd
  - tutorial
tags:
  - cicd
  - github
  - labels
  - prs
  - code-review
---
Labeling PRs is a great way to go about making it easier to triage the importance of dealing with code reviews. In an ideal world we would be able to clear every PR from our repo but it is important to be able to quickly find and fix any issues that come up first over adding new features. That being said there is also great value in labelling PRs to be able to add extra context so that people who can help will be able to properly as well as helping building out changelogs and what not. Because these tags are so useful we would like to use them consistently and that means have a tool to figure out good tags to add to your PR for you automagically.

# Configuring the Labels

We will start like with most things I want to discuss looking at [docs](https://github.com/marketplace/actions/labeler). As you can see the main driver for this will be a file in your repo at `.github/labeler.yml` and it will look like the following:

```yml
'First Label':
  - base-branch: ['master', 'main', 'dev']
  - head-branch: ['release-*', 'draft-*', 'PROG*-*']
'Second Label':
# Rules to as to when to auto apply the label
  - changed-files:
    - any-glob-to-any-file: ['tests/**', 'docs/**']
    - any-glob-to-all-files: ['*.yaml', '*.env']
```

As you can see you will basically be listing out the tags you want to apply and then define what is known as a matcher object that the action will use to be able to match the changes in commits or the PR branch itself or base branches to apply these patterns too.

The great part about this is that it allows you the flexibility to define what changes mean what in your repo. For example when doing things related to ci/cd changes in your `.github` folder as automatically tagged as infrastructure changes. You could then even add tags specific to both unit-test and integration-tests so you can quickly see whether or not a pr is missing those changes and help you better enforce these changes. You can even think about areas of code depending on your projects structure and give even more insights into your PR's in the example of a Mono Repo (Repo that contains the code for running multiple applications in a single repo).

# Creating the Workflow Action

So after you have spent time defining what rules will apply what label then you can focus on configuring your labeler to run on your PR's. It is really easy since they even have an example workflow file that you can use from the .github actions section of each repo. The default workflow file they share uses `pull_request_target` which will make it so that only changes to the workflow definition will be run from main and not run in the pr that originally adds or modifies the file. Basically if you want to make changes to how the labeler works you will need to close the pr with the changes first and then it will run the new labeler behavior. This is only important to know if you are trying to try things out and you don't see the labeler doing anything so just be aware that you will need to merge it first before it will work for you which Does include the labeler.yaml changes as well.

Here is an example workflow file that you will make:
````yaml
name: "Pull Request Labeler"
on:
- pull_request_target

jobs:
  labeler:
    permissions:
      contents: read
      pull-requests: write
    runs-on: ubuntu-latest
    steps:
    - uses: actions/labeler@v5
````

And this is the minimum required workflow you will need to have the labeler to start working. By default it will try and find the file at `.github/labeler.yaml`. If you need to know what you can change on the action you can use [here](https://github.com/marketplace/actions/labeler#inputs). The main thing that I will say is that you can have the labeler fully in charge of labels by setting the `sync-label` parameter to `true` so that the Labeler will remove the labels that have been manually added if you want to use the labeler to enforce label rules and then make it so that any possible label must have a rule to be applied to a pr.


# Closing Thoughts

Labeling is a powerful tool to help you sort out a ton of PR's in your repo. This may not always be something you need but I will say this... There are tons of tools out there that use labels to build documentation or changelogs so being able to use an auto labeler can help you when the time comes to actually setup those tools. This also just helps you even with small repos make PR's feel more meaningful. I highly recommend you set this up even if it is only to make your PR's look prettier haha. 
