---
title: My Intro to Game Development
layout: post
date: 2025-06-13T21:14:00-0600
author:
  - Andres H. Carrera
categories:
  - development
  - game-dev
tags:
  - personal
  - game-dev
  - godot
  - platformer
  - 2d
  - 3d
  - rpgs
  - gdscript
  - github
  - ""
---
Hey All!! It's been a minute but I am working on building up my dev skillset. Lately I have been learning how to make software with Godot!! It is an open source game engine that I wanted to learn how to mess with things and ultimately create a new game that I want. This is going to be a quick rundown on how I went about starting this journey and how I have been doing stuff.

## 2D Platformer

![Image of 2d platformer](https://media.discordapp.net/attachments/601087335375044622/1383282133140897903/image.png?ex=684e3960&is=684ce7e0&hm=cb72b06239bd8e4bfe46ad4f657ebff5330a08df7dd1db76e64474a497d1ab09&=&format=webp&quality=lossless&width=350&height=200 "2D Platformer I created")

Lets first go over the 2d tech demo that made me feel like a game developer. This is a simple game inspired by platformers of old that you can check out at [here!!](https://blog.gxldcptrick.dev/2d-godot/). Creating this was honestly really simple I was following a course created by zenva academy and they gave me a sprite sheet that I could use as the base textures to render and then taught me how to create spritesheets and and setting up my model to use the physics of the engine itself and taught me what specific things I should use when calculating inputs i.e. whether to use the physics frames vs the render frames. This was cool because it taught me how I can make a real barebones ai for enemy movements by just placing a character in a specific point in space then determine the direction/magnitude of where I wanted to land in relation to that point and then configured my little monsters to head to that point!! It was super cool and let me appreciate the life that even fixed movement can give to games and helped me understand some of the core mechanics of the games I played in my youth.

After that long and fruitful journey learning all these different kinds of things in a 2d context I took the next course that was offered and went head first into 3d rendering with my next game!!

## 3D Platformer

![The 3d Platformer game I created](https://media.discordapp.net/attachments/601087335375044622/1383278411073716244/image.png?ex=684e35e9&is=684ce469&hm=4803d8c8377ee5c072e54481fa8969e42ef49edee48f1a5ad790ac87dedf968e&=&format=webp&quality=lossless&width=350&height=200 "3D Platformer I made")

This game is the 3d platformer I had created during my course in Zenva academy and you can find it hosted [here!!](https://blog.gxldcptrick.dev/3d-godot/). For this demo we went over the same concepts in the 2d demo but within the context of 3d models which includes the application of gravity which is a little more manual with 3d games since you define when you are going to apply the gravity physics but it is still pretty easy to modify the strength of it. This one let me understand even more the concepts the last game taught me and I found myself often jumping ahead of the instructor and building out mechanics ahead of them in a way that felt easier to me to manage using resources to make my components more dynamic by allowing me to define the attributes of common objects as a resource and use that to load them dynamically.

After this the course then took a turn and spent time building a project from a Unity Project and while I have not worked in Unity before I was able to work on this because I have worked and loved working on C# projects in the past. It was refreshing to see the different things I was able to translate into gdscript.

## Micro RPG

![Milo's Micro RPG](https://media.discordapp.net/attachments/601087335375044622/1383281394960044042/image.png?ex=684e38b0&is=684ce730&hm=6d298426adf7870c40a8e81f7d091a3336447a1187da988e95bce8c0d5a124dc&=&format=webp&quality=lossless&width=350&height=300 "Milo's Micro RPG")

This one is hosted on [here!!](http://blog.gxldcptrick.dev/milo-micro-rpg/) This was a wonderful learning experience as I mentioned before since I was able to learn better how to adapt the skills I had spent learning C# in GDScript more directly but not even just that but the ability to see different game developement patterns that made it so much smoother. This was a great project and I liked how it turned out if it ended up being the shortest game in the bunch haha. But still I hope you can find some time to try them and more importantly try and learn godot. It is an engine that is well crafted and designed to make your life easy when you get the engine but will make it super hard if you skip out on learning the core concepts. This is amazing.
