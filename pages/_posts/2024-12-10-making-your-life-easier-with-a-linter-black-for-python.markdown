---
title: Making your life easier with a linter, Black for Python
layout: post
date: 2024-12-09T22:59:00-0700
author:
  - Andres H. Carrera
categories:
  - programming
  - python
tags:
  - python
  - programming
  - black
  - formatting
  - linting
  - code
---
Today we will be covering how and why linting is something that is really freaking awesome and how it can help you save so much time with just making everything make sense. There is such a different feeling you get when you write code with a linter/formatter that I cannot explain to you in words. You feel like a super programmer because you don't even need to think that much about convention minus obvious things like naming where you won't find a tool out there to fix those but with stuff like spacing and where to place brackets it is game changing. Today we will talk about one of these tools I use called Black and why it is so freaking awesome.

Black is a formatting program that is used to apply PEP standards to your python code. It is used to be able to apply the various different rules of how python code should look that has been community voted and maintained. To install `black` you will just run `pip install black`

```bash
    > pip install black
    > black </path/to/python/code/dir> # i.e. src or . depending on your project
```

This will be all you need to start using black and see all the changes you would need and outputs all the files it changed with the amount of lines per file. This only works if your program is a valid python program so you will see that if you can't compile your code you won't be able to format your code. 

Because this changes things in place you might be hesitant to use it. That is okay because if you just simply pass in the `--check` flag you will see that instead of changing anything black will instead check if it would have changed your files in anyway to see how close you are to following pep standards.

Full command line command usage: 

```bash
    > black . --check
```

With this simple change you can actually leverage black to enforce these pep standards in your build pipeline all you will need to do is just install it during some pre-step or even the same step to just install and use black. This is super useful to help you improve the quality of your code because when you make your code consistent with community standards you will notice that there is less things in your head that you have to learn and understand the codebase. This leads to lower debugging times and even helps you understand and see issues with how long your code is because of how it wraps long text strings and code comments. 

When you work on any code you should consider finding some kind of formatter and or linter to help you maintain a consistent style and deal with it all at once so you don't need to keep thinking about it as the project evolves and then also not have to pay the price of having a massive pr that changes thousands of lines across hundreds of files in your codebase. Trying to get linting/formatting in early helps build trust in your codebase from other engineers because then they can trust that everyone will be writing code that is similar to one another.

If you would like to learn more about linting please consider reading [more here](https://black.readthedocs.io/en/stable/the_black_code_style/current_style.html)
That is a link to the black style guide and exactly what it means for your python with example outputs to give you a good idea of how things get wrapped and changed.

If you need more inspiration or reasoning you should check out this [Sonar article](https://www.sonarsource.com/learn/why-linter/)
