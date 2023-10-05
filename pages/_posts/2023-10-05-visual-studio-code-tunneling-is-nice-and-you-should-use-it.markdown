---
layout: post
title: "Visual Studio Code Tunneling is Nice and You Should Use it"
date: 2023-10-05 00:12:48 +0000
author: Andres Hermilo Carrera Reynaga
categories: tools
tags: [dev,tools,ssh,programming]
---
Visual Studio Code is a wonderful lightweight ide that you should always consider when you start a developement project. 
It is customizeable to a degree that you can use it as a single ide for everything but it excels at doing web development. 
That being said setting up a machine over and over again is super annoying and I keep finding myself trying to find tools to not have to do it.
VS Code luckily has recently released a feature called Code Tunnels. These Tunnels create a dev server that can enable the pc you are running it on to be accessible to you from anywhere.

Imagine if you will having a main dev machine where you do your work and you being on the road doing stuff in your day to day and you need to quickly work on something 
because an emergency came up and you need to access your machine. Normally that would require you to rush back home to work but with VS Code Tunnels you can just whip out your phone and start using that computer using vscode.dev.
This means that as long as you have internet access you can access your machine from anywhere and that enables you to also be able to use weaker machines that might not normally be able to support your app because of memory or cpu constraints.
This is awesome for me because that means I can setup my dev env once for a project and keep using that same machine for all the development no matter what I am doing. This is especially useful to me because I have multiple portable machines that I would love to use in order 