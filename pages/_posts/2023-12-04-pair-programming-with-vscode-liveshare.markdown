---
author:
- Andres Hermilo Carrera Reynaga
categories:
- dev
- tools
- programming
date: 2023-12-04 14:42:33 +0000
layout: post
tags:
- vscode
- programming
- tools
- pair programming
- collaboration
title: Pair Programming with VSCode Liveshare
---

Good Morning!! Today I wanted to talk about a wonderful tool I use to colloborate with my peers, VS Code Live Share. Live Share is a feature that allows you to expose your machine over the network using either github or microsoft to authenticate people logging in and joining you in a coding session. It is super nice for me because I work remote and so there are not a lot of options to be able to collab realtime with others. This gives me a nice way to virtually pass the keyboard to someone while I am on a video call so that they can help me out with tricky issues that would be exponentionally harder to just walk through with a screenshare while also allowing them to be able to increase the font size and poke around and explore.

VS Code is really simple to setup if you want to get started using it.
To setup follow this [article from the source](https://code.visualstudio.com/learn/collaboration/live-share#_get-started-with-live-share).

The simplified version is basically just install the extension through the extension manager on vscode and then sign in with either your github or microsoft account and you are good to share the url it generates with whomever you wanna collaborate with. You an also limit access to anonymous visitors with an option on startup but you can also just monitor your liveshare panel on the left hand side that was added to kick out and monitor who is using your session.

With VS Code Live Share installed you can now do things like expose the terminal on your machine to others or even just expose the web servers running on your localhost to them as well. I am even sure you could do something like expose a protected server in your network with the proper forwarding to your peer. This is super useful to me as a web dev because that means I can run the backend web app that I am building and expose it for my collaborator to be able to test out api calls as I am explaining sections of code so they can see it realtime.

There are also capabilities for joint debugging and guided walkthoughs. Because the session is using VS Code as the application you can even walkthrough a debugger together where only one persons machine has to be setup with whatever dev tools you need to run your app so sometimes it can be helpful if you are onboarding someone and you wanna show them everything they will be able to do once they get their machine setup and configured. The collab tool that is awesome is the one where you can essentially have them follow your cursor through vscode so as you go to specific code files and lines they are getting dragged along. This is uper useful when you are first onboarding someone so that you can show them all around the code base that you are having them work on and then you can even give them the handle so they can show you even if you are the host and they are a partcipant.

These tools are simple and yet so powerful when it comes to live active collaboration with people and are only as effective as you let them be. With this you move sessions of pair programming session to be from a screen share and then dictation to one where either person can take the lead when they need to. This means that you will need to practice handing off the keyboard to someone else as well accepting the keyboard from another. In reality to maximize the effectiveness of pair programming you should be doing a nice back and forth with your partner so that it isn't a single person driving an entire session. Even if that means you only pass the keyboard every hour or something trying to at least introduce points of swapping help so that no one person is driving the code that is written. You want to allow other people to add into the pot of ideas so that it can be an equal partnership instead of a one sided affair.

Thank you for reading and I hope you can use this tool and practice in your programming efforts.

Sincerely,
Milo