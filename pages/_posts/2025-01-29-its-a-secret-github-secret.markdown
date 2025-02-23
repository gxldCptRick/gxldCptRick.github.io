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
When you build applications and you are following good coding principles and guidelines you will eventually find the need to store secrets. Secrets are the key to allow you to build apps and deploy them and even run them in some cases and because of that we need to have ways to store them. Any CI/CD tool that is useful will provide you a platform to store and organize them so that your runners would be able to access them while denying access to other collaborators since they don't need them but still would want to be able to invoke the CI/CD.
