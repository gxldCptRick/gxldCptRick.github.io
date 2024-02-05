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

Setting up an existing project with pdoc is super simple. That being said.