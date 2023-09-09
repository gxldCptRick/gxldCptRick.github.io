---
layout: post
title: "Setting up custom domains using CloudFlare and Google Domains"
date: 2023-09-05 02:51:04 +0000
author: Andres Hermilo Carrera Reynaga
categories: updates
tags: [infra,cloudflare]
---
So I wanted to share my experience with setting up things with my new fancy domain name!! 
Currently I have setup cloudflare to hold power over my domain that I had recently bitten the bullet for using Google Domains.

I have always wanted to setup something like this where I am able to forward the emails from my custom domain to my personal email address.
The idea of owning my presence on the internet has always fascinated me. I finally found the courage to do it when I was working on the yugioh card puller app.
After talking with a buddy of mine, he had mentioned about how he setup something on his network using cloudflare to tunnel into his network using this agent 
that would accept the connections from cloudflares to proxy to your servers on your network. Long story short this powers you to be able to do things that normally
you would need to have network access to port forward using cloudflare as your edge. This means I will be able to build out something on my network to run the app and 
have the world access it through cloudflare!! 

However this all comes at the cost for me needing a domain name so that I can map the requests to cloudflare too. So then I decided to pull the trigger and finally
buy a domain for the gamertag I have been using for years, GXLD CPT RICK (or Gold Captain Rick). Because it was cheap I chose to buy one from the `.dev` name server 
and that allowed me to be able to now forward my github pages to `blog.gxldcptrick.dev` from the old `gxldcptrick.github.io`. I am so excited to be able to do more with
this and I had started my first steps by updating the email on this blog to use my new one of `me@gxldcptrick.dev`. Setting that up was pretty seemless using cloudflares
email section and specifically Email Routing subsection.

Email Routing is a feature that allows you to forward emails from an email on your domain to one that is off of it. So you can have your private email recieve messages from 
your domail like `username@domain.nameserver`. So after configuring that I had updated this site and then wanted to setup the neccessary steps to allow github to use the new host.

In order to have it work you first have to add the domain you want to use for your github pages with github by adding a record to dns to prove ownership. After you proved that you owned the domain you can then configure the github pages to serve from that domain instead of its default and reroute all the calls to the old `<username>.github.io` domain to your custom one. After that is setup you can then configure tls by enabling it on the cloudflare side to allow https all the way through so that you can make sure your clients are safe and secure. 

After doing all that work of updating DNS records to prove my domain ownership and setting up a CNAME record to point from the subdomain I wanted to the github pages default then it should all just kind of work. 

It is really amazing to think about how much stuff exists already in this internet age that can help you build out applications using best practices and in a way that can scale up really easily. I am really happy to finally pull the trigger even though it costs $12 a year. I hope to continue building out this domain and this blog to do more. I might even look into what I can do to manage the records in a more infrastructure as code kinda way and hopefully have something to talk about with yall.