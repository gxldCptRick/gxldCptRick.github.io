---
layout: post
title: "Github Pages and Website Hosting through Github"
date: 2024-05-05 20:16:12 +0000
author: Andres Hermilo Carrera Reynaga
categories: Tutorial,Github
tags: [Web Dev,Github,Web Hosting,Jekyll]
---
Hosting static sites should be easy. It is just finding a  place to put down some html css and maybe some javascript to make it interesting. It shouldn't be a problem and yet it is. Most places charge a not insignificant amount of money to be able to host your site no matter how simple. This is where github comes in handy yet again. In this post we will be exploring using github pages to host static content that we want to serve for our projects maybe for docs or maybe for a personal blog like this one. It is a very quick and easy thing to do and hopefully this helps you in making your presence online that much better.

More details on [github pages can be found here](https://pages.github.com/). To give a quick synopsis, github pages is a service that github provides to allow repos to serve static content. The cool thing is that they also allow end users to define a special repo with its own dedicated url for users of github to be able to host their own site to either describe them or even whatever you want really so long as you don't need any backend services running.

This is cool for many reasons primary of which is it allows me to build a blog website without having to rely on something like squarespace or wix or any of the grand multitude of websites that are built using website builders. If you want to be able to flex your html skills and or usage of frontend libraries you should consider creating your own apps powered by github pages. Since this only focuses on serving static content your app will only be able to use publically accessible apis but it can use whatever frontend technoglogies that render on the users browsers. This opens up apps to be using something like React or Angular to make it way cooler and more interactive without having to do your own jquery mutations.

When looking at how github pages work it has two sections to it. A github pages for a specific repo you are working on and want to expose docs for or the special repo that serves as the base for your premade github pages url.

## Github Pages Root

Lets get started with the special repo. All github pages are served from a github specific subdomain as long as you haven't manually updated it with your own hostname. By default the root pages will be served from `<github-username>.github.io`. This will be the main host that most people who don't care too much about hostname stuff will be using. So the special repo on github actually uses that hostname as the repo-name so if you want to create a repo that will be served at the root of the github url it must be named `<github-username>.github.io`.
Once you create the repo make sure to follow the general directions to setup a github repo further bellow.

## Github Pages Other Repos

Github pages can also allow you to render different pages based on the repo you are working in. Although github pages root site is configured with the special repo all other repos have a dedicated url to be able to render it under the same hostname. `<github-username>.github.io/<repo-name>` This allows you to be able to change what technologies you use for each repo so you don't have to always have the same kind of tool to build the docs you care about.

## Setting up Github Pages on Repo

Github pages can be found in your repository settings under its own section on the left vertical tabs. It will be calle pages and there you can configure how you want to serve the raw static files to serve for the site. What is important is that you can either have the static files already in your repo or you can use something to build the static assets and then upload them to github using the github action runners. Github actions is a bigger topic that I will not be covering in this tutorial but will mention in passing when talking about how this site is built. If you want to learn more please look at [setting up github pages with jekyll](https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll).
