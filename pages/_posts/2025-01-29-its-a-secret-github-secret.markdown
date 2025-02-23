---
title: It's a Secret, Github Secret
layout: post
date: 2025-01-29T11:17:00-0700
author:
  - Andres H. Carrera
categories:
  - cicd
  - tutorial
tags:
  - github
  - cicd
  - automation
  - security
---
When you build applications and you are following good coding principles and guidelines you will eventually find the need to store secrets. Secrets are the key to allow you to build apps and deploy them and even run them in some cases and because of that we need to have ways to store them. Any CI/CD tool that is useful will provide you a platform to store and organize them so that your runners would be able to access them while denying access to other collaborators since they don't need them but still would want to be able to invoke the CI/CD. This month I want to take a deep dive into github secrets and how we can use them in our CI/CD and the different levels of which you can define them.

## How it works

<https://docs.github.com/en/actions/security-for-github-actions/security-guides/using-secrets-in-github-actions>

Github Secrets are the mechanism that Github Provides to propagate secrets to your Github Action workers. They come in two flavors: Organization Level and Repo Level. The main difference between the two is 

## Setting Up Secrets

![Select Organizations on your right side panel.](/images/uploads/screenshot-2025-02-23-083246.png "Navigate to organization Page")

## Using them in Actions 
