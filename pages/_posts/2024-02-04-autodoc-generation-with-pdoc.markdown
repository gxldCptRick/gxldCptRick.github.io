---
layout: post
title: "Autodoc generation with PDoc"
date: 2024-02-04 23:16:59 +0000
author: Andres Hermilo Carrera Reynaga
categories: python,documentation
tags: [python,documentation,blog]
---
Documentation is really hard. With it you make your project infinitely more useful however if it is bad, it can lead you down a rabbit hole for hours to try and hope something exists when it doesn't and drive you mad. 
The biggest problem with documentation is that you have another place where you have to track for any changes made within the code base. There are tons of tools out there for trying to bring the two closer i.e. documentation in your code.
The tool I would use right now because it is one I discovered recently is pdoc. Pdoc allows you to use the doc strings that you may already be doing in your code and creates a rich documentation that can be viewed in your browser. The best part is you can even use markdown in your docstrings and it will be properly parsed into the html elements they refer too.

Setting up an existing project with pdoc is super simple. That being said even though it is as simple as running
```bash
pip install pdoc
pdoc src  # or whatever your code is maybe app idk??
```
It won't be useful until you add more docstrings to your code. The good part about it at least is that it gives you a full breakdown on all of what it could import from your module and then allows you to search for keywords in your repo in a way that is so much easier to work with then normal. Please try it out when you get a chance because it is some of the best quick documentation you can make. The great part of it is that this is generative meaning that when you make changes in your code they will be picked up by pdoc and it will generate the appropriate page with all the new classes and functions you added. This means that in order to maintain your documentation all you need to do is maintain your docstrings which means that it is so much less work then having to figure out how to write it down in your own blogging software. 
I have been using this library for most of my side projects and honestly it just adds so much to the development workflow that I find it hard to think about not using it in every project I am working on. 

If you would want to learn how to optimize it you should checkout [the docs here](https://pdoc.dev/docs/pdoc.html). The official docs can show you ways of customizing through the docstring using markdown to be able to make docs that look really freaking cool that also live with your codebase. It is actually pretty amazing the amount of features this tool supports!! I would also look into defining modules with the `__all__` field so you can define the objects you want to be exported otherwise pdoc will scan every module you import and use within your module. This can be useful but also really frustrating if you want to have a smaller more focused docs. Overall because of its ease of use and high amount of features I would highly reccomend using pdoc to at least help you get started on documenting your python code.

Sincerely yours,
    Milo