---
layout: post
title: "Testing with coverage using pytest-cov"
date: 2024-03-03 15:58:01 +0000
author: Andres Hermilo Carrera Reynaga
categories: python,testing
tags: [python,testing,pytest,coverage]
---
Today I want to share something I have been using for a while that I had discovered when I got my new job!! I didn't realize that you could instead of running coverage.py directly you could set it up so that pytest using a plugin could run coverage.py for you so that you can generate code coverage reports a little easier with a single command. This makes it quicker to add coverage reports to your build pipeline since all you need to do is install it into your pipeline and in a way that apparently is both faster and more detailed then what coverage.py could do out of the box!! Overall if you want to have coverage using plugins for your test runners will almost always be better then using a more generic service.

To get started using it all you need to do is install the pytest-cov package using your package mangement tool. 
For example using pip:
````bash
pip install pytest-cov 
````

Then all you need to do is add a few new flags to your pytest command to be able to specify both what files should be covered in the coverage report and what format to generate it as.

````bash
             # path to source code   # how to format report
pytest --cov=source_folder_path --cov-report term  <path_to_tests>
````

This runs pytest with coverage for whatever paths resolve to the `--cov` flag and will print it out to the terminal due to the report type being term.
You can also keep adding `--cov-report` to add more outputs for the .coverage file.

For Example:
````bash
pytest --cov=src --cov-report lcov --cov-report term  tests
````

This will then create a terminal report while also creating an lcov file that you can use to be able to render it in your ide to show you what coverage you got line by line.
However if you ever need to maybe change/control the name of the lcov report like in the case of using some extensions in vscode you can use `:` to be able to specify both the path and the name to save the report too.

For Example:

````bash
pytest --cov=src --cov-report lcov:lcov.info tests 
````

Since the extensions I use `Gcov/Lcov Coverage` looks for this file to render the coverage output I use this to be able to use the coverage report more usefully locally.

Overall if you want to explore all the different formats and uses for coverage reporting I would recommend looking at the [`Reporting documentation`](https://pytest-cov.readthedocs.io/en/latest/reporting.html)
