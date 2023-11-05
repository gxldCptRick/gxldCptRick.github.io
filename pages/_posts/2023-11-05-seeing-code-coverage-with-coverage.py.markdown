---
layout: post
title: "Seeing Code Coverage with Coverage.py"
date: 2023-11-05 16:29:26 +0000
author: Andres Hermilo Carrera Reynaga
categories: python,testing
tags: [python,testing,coverage,code analysis]
---

Today I wanted to talk about Code Coverage. 
Specificallly what it means what you tools there are for python and why someone would want to even use them.

Code Coverage is the concept of how much of your applications codebase is currently being executed by the testing infrastructure you have setup.
This can be either... unit tests, integreation tests, end to end tests but primarly it is used with unit tests to assess the depth of coverage one has over their code base.
The larger the amount of total area covered the higher degree of confidence that one can have that if tests where to pass there should not be any regressions within your system.
In order to do anything with code coverage tools they need the data on the execution of your tests so you have to find a coverage tool to be able to run your tests within their execution context so they can record what lines of code are hit.
To this do this with tooling in python you can use a tool I always reach for called `coverage.py`.

This is how it would look like using `pytest` as your testing framework

```bash
# Launch the coverage tool telling it how to run what you want to analyize. 
coverage run -m pytest tests
```

As you can see we tell coverage to run the module for `pytest` and then pass in the parameters that will be forwarded to `pytest` in this case the tests directory so that it can run all the tests it can discover there with any configs it can load. 
What is important about this is that you are not limited to only running a testing framework module but really you can run any module and then you can build a code coverage report for it arbitrarily. That also means because we can configure pytest with the parameters passed into it through coverage we can also specify which tests we run which can help us only generate coverage on a specific testing module which may come in handy if you just want a quick report on a subsection of your code base.

What is great about this `coverage.py` is that you can also use it to generate an html report to view your coverage results as well as even turn it into the `.lcov` format which will allow you to use that coverage report with common ide's to highlight the lines in your source automagically. 
Depending on your IDE you may not even need to do anything special and you can sometimes even have preconfigured run configurations that already do these steps for you. 

This is a tool I reach for a lot when I am developing code in a new codebase because it helps me see what areas of code I may not have thought about covering but what is important is that you don't only rely on coverage to be able to give you confidence in your testing.
Coverage can give you a good quick gut check but it doesn't help with the semantic meaning behind what your code does. For that, you as a developer will need to really look at your tests and think about all the different cases that you would realistically see as well as stuff that should not have to face. 
Coverage is a tool that is great but if you only rely on code coverage to assess your test suite you are missing out on key things that might lead you to still have regressions that you would be able to test against if only you had spent more time analyzing your code. 
That being said without coverage you end up with tests that focus only on a single area or maybe even little to no coverage at all which just means that you are testing in prod which should be avoided at all costs for hopefully obvious reasons.

I hope you enjoyed the topic a little and that this could help you out. If you wanna look at more of what `coverage.py` can do I please [read up on the docs here.](https://coverage.readthedocs.io/en/7.3.2/#) That link is for 7.3.2 but please google again if it has been a signficantly long time since 2023 because updates happen and it adds more cool tools that we can use.
