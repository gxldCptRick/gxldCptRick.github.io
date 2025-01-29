---
title: Github Repo Templates
layout: post
date: 2025-01-06T17:06:00-0700
author:
  - Andres H. Carrera
categories:
  - projects
  - cicd
tags:
  - github
  - cicd
  - repo
  - git
  - workflows
  - project
  - templating
---
Today I want to go over Github Repo Templates. They are a cool tool you can use when you want to bootstrap a new project by using an existing repo and then pull in all the files and even branches so you can kickstart a project into overdrive. This helps you when you already have a project that is already using patterns and tooling that you love and have worked hard on refining the CI/CD to be able to act and be the way you love it and you just want to use that again with a new codebase. You can leverage all that work you put into it and then be able to build up the next project, the next service, the next experience faster!! It is something that I hope I can inspire you to leverage and lets get into the details.

## What is Github Repo Templates

The long and short of it is that they are repositories that you mark specifically so that you can use them to build a new repo with default files that are the ones on the main branch of that repo. This means you copy over any workflows, any actions, any common .gitignore over from one repo to another automagically. This basically acts like those templates in visual studio where you are able to kickstart, for example an ASP.NET app, but this time with even more control then those baked in templates then ever before.

## How do you Create a Template Repo

Creating a template repo is really easy. As stated in the official repo template documentation on [github](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-template-repository). The core of it is you create a repo on github add whatever files you want then go into the repo settings and in the overview section there will be a make this into a template repository button and then it will ask you to confirm and then it will add a new Template Repo tag to the repo's header and then you can then create a new template straight from there. For more info on using the template please check it out [here](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template)

## How can I Find an Existing Template

From looking it up in [stackoverflow](https://stackoverflow.com/questions/64770650/is-there-a-way-to-easily-search-for-list-template-repositories-on-github) it does not seem like github has a great way to see and find templates. That being said you can see Public Template on git repos so you can try to do some google-fu to query for all of them but also just ask around I am sure you are able to find a cool template to use for your language and your kind of project since people are constantly thinking about these things. 

## Why use a Template Repository

The main reasons why is that you can kickstart projects with better patterns and practices from the get go while learning how to refine your projects overtime to fit your needs. This means that you can lower the difficulty to start and begin higher quality projects and honestly that is such a beautiful thing. It also helps you keep your ideas consistent so that they are easier to work back on because you never lose the core of how you did something merely just the specific nuisances of your app.


## Why should I not Use a Template Repository

Templates are not static and because of that there is a large amount of drift that can occur between projects as templates and even projects that use that template evolve. That means you have to figure out if what you just modified and changed for your current project is something that should be back propagated to the template so that you don't need to do that again for the next one. But this can also happen in the reverse where you update your template because you know a new technology or stack that you think would be better for that template then you would want to roll that out to the other repos that use your template which would be hard to update possibly depending on how big of the change. However this can easily be managed by making a whole new template repository and just making the changes there so that moving forward you use the new things without having to worry about existing projects. That being said just because you change your template does not mean you need to update your cloned repos but you should still consider them in the case that you manage them haha.

## Where to learn more

The following are some resources I pulled from to help me understand repo templates better and different reasons to understand why we should go about using them.

### Cool Blog Posts

- [Discover The Benefits You Get With Github Templates by Stefan Natter](https://blog.natterstefan.me/discover-the-benefits-you-get-with-github-templates)
- [Github Templates and Repository Sync by David Calvert](https://0xdc.me/blog/github-templates-and-repository-sync/)
- [Github Repository Structure Best Practices by Soulaiman Ghanem](https://medium.com/code-factory-berlin/github-repository-structure-best-practices-248e6effc405)

### Documentation From Github

- [Creating a Template Repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-template-repository)
- [Creating a Repository from a Template](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template)


### Great Videos on the Subject

- [Quickly start new projects with Github template repositories by  IO - Technology](https://www.youtube.com/watch?v=zCKwIApdNXw&ab_channel=iO-Technology)
- [#21 Template Repository on Github, Effortlessly Create Multiple Repositories in Single Click by Automation eLearn](https://www.youtube.com/watch?v=3nm-DgqKE6I&ab_channel=AutomationeLearn)
- [Use Github Project templates to share Projects practices amongst your teams by Github](https://www.youtube.com/watch?v=0bpk3iOM7CI&ab_channel=GitHub)
