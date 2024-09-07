---
title: The stream that built a better website
layout: post
date: 2024-09-07T14:58:00-0600
author:
  - Andres H. Carrera
categories:
  - personal
tags:
  - jekyll
  - decap
  - python
  - devops
  - cloudflare
---
This is a small story about the livestream I did while building out the website to be useful with its own admin portal for online editing of blog posts. It all started when I got the notification on my phone I had set to remind me to do my monthly blog post.

It all started when I got my monthly notification to start writing the blog post. I knew then I didn't want to keep using my little python script and the vscode text editor to be able to type a whole bunch of things at once. So I wanted to see believing there must be a better way. I didn't know where to start but then I found this app called decap. Apparently it knows the formats that static site generators use and understands how to build apps for that. It is actually fucking crazy with the amount of options you can customize your templates for. You literally define where you put files down and it can not only format and save them for you but even allow you to edit existing ones!! This is great for me because I already have a years worth of posts that I have finished so this lets me enjoy the benefits of this editor on existing pages for making quick edits and doing some good stuff.

![Screenshot of Admin UI running on my server](/images/uploads/screenshot-2024-09-07-115509.png "Admin UI From Browser")

If you wanna watch how i made it please check out my stream [here](https://www.twitch.tv/videos/2244990211). It was a blast trying to figure stuff out live and being able to really flesh out stuff with an audience no matter how small haha. Overall the idea for this is you can pull in a spa app that is hosted on a cdn to be able to render and edit the files in your github repo but in order to power it you need to configure a lightweight tool that is using lambdas Cloudflare to be able to handle the oauth request for github where you can find [here](https://github.com/sterlingwes/decap-proxy). After some handshakes using a tool called wrangler to wrangle a Cloudflare worker deployment it is just setting some stuff by setting up an oauth application through github and adding those secrets to your deployed Cloudflare worker. But with that you just update a config.yml file in your repo which you can find here at [/admin/config.yml.](https://blog.gxldcptrick.dev/admin/config.yml) So after all that you can then just simply work on your posts and start using the text editor haha. 



Jk you still need to go through the manual process to define what your templates look like and what fields are required with default values that you would have for them. Then you can define a collection for each kind of post your site has so you can have the custom UI for each individual one. Honestly this is the hardest and most time consuming part because it requires you to slowly work on and add and remove things until it is just right and you can really love the final product. This was a fun project to work on and it made me want to work on more things for the website and really make my blog better. I hope you enjoy this short post and enjoy your day because I fell in love with development again through setting this up and working hard on it.
