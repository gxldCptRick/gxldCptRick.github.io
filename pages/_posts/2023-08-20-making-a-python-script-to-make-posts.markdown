---
layout: post
title: "Making a Python Script to Make Posts"
date: 2023-08-20 06:27:20 +0000
author: Andres Hermilo Carrera Reynaga
categories: tutorial
tags: [jekyll,python,scripting]
---

Today I will be covering a script I made to help me build posts on jenkins without having to remember as much which will be nice. I am working with python a lot so today I decided to write a script that can generate at template for me to start bulding the post headers and what not based on when I wanted to create the page

``` python
from datetime import datetime
import re

import click


TEMPLATE = """---
layout: post
title: "{title}"
date: {timestamp}
author: {author}
categories: {categories}
---
"""

ILLEGAL_ITEMS_REGEX = re.compile('[\':/\\+\\[\\]"]+')
FILENAME_DATE_FORMAT = '%Y-%m-%d'
POSTNAME_DATETIME_FORMAT = '%Y-%m-%d %H:%M:%S +0000'


def clean_post_title(title: str) -> str: 
    partially_clean = title.lower().replace(' ', '-')
    return re.sub(ILLEGAL_ITEMS_REGEX, '', partially_clean)


def create_file_name(post_title: str, timestamp: datetime):
    return f'pages/_posts/{timestamp.strftime(FILENAME_DATE_FORMAT)}-{clean_post_title(post_title)}.markdown'


@click.command()
@click.option('--post-name', required=True)
@click.option('--author', default='Andres Hermilo Carrera Reynaga')
@click.option('--categories', required=True)
def main(post_name: str, author: str, categories: str):
    timestamp = datetime.utcnow()
    new_page_name = create_file_name(post_name, timestamp)
    with open(new_page_name, 'w') as fp:
        fp.write(TEMPLATE.format(
            author=author,
            title=post_name,
            categories=categories,
            timestamp=timestamp.strftime(POSTNAME_DATETIME_FORMAT)
        ))

if __name__ == '__main__':
    main()
```

This is what is on my github pages repo so you can check it out if I ever update it but lets break this script down into its component parts.

First we are pulling down a very crucial dependency called [`Click`](https://click.palletsprojects.com/en/8.1.x/). This library allows me to be able to quickly write up a command line tool with little to no knowledge about how to parse out command line parameters as well as create a beautiful cli interface for scripts that I write adhoc. If you haven't used it yet I would highly recommend checking it out when you have the time.

```python
@click.command()
@click.option('--post-name', required=True)
@click.option('--author', default='Andres Hermilo Carrera Reynaga')
@click.option('--categories', required=True)
def main(post_name: str, author: str, categories: str):
    # code omitted
    ...
```

As you can see we use the click library to decorate our main entrypoint. The order of decoration is crucial when making the script using click where you need to have `click.command` be the last one applied so it can properly read in your configuration for options to be passed into main. You then decorate using `click.option` to define the command line options you would like to take in and you can even define some primitive types to be able to auto parse the values into that for your main function. This allows me to be able to list out the different things I need to and not worry about the specifics of how I am going to get it.

There is also this idea of default values which allows you to set values that you know you will fallback to if you don't recieve an explicit one since it should just work. On top of that you can use the required field to specify whether or not to fail the script running no value is set. 

This means I didn't have to do any work on setting up a cli for me to be able to easily use my script from the command line.

```python
# ... constants defined above

def clean_post_title(title: str) -> str: 
    partially_clean = title.lower().replace(' ', '-')
    return re.sub(ILLEGAL_ITEMS_REGEX, '', partially_clean)


def create_file_name(post_title: str, timestamp: datetime):
    return f'pages/_posts/{timestamp.strftime(FILENAME_DATE_FORMAT)}-{clean_post_title(post_title)}.markdown'def clean_post_title(title: str) -> str: 
    partially_clean = title.lower().replace(' ', '-')
    return re.sub(ILLEGAL_ITEMS_REGEX, '', partially_clean)


def create_file_name(post_title: str, timestamp: datetime):
    return f'pages/_posts/{timestamp.strftime(FILENAME_DATE_FORMAT)}-{clean_post_title(post_title)}.markdown'
```

With these functions I am able to sanitize my input of what the blog post will titled which allows me to do what I would probably want to do in terms of creating a new post where I line up the filename with the title in the post.

```python
TEMPLATE = """---
layout: post
title: "{title}"
date: {timestamp}
author: {author}
categories: {categories}
---
"""
# ... function definitions used and other constants defined

def main(post_name: str, author: str, categories: str):
    timestamp = datetime.utcnow()
    new_page_name = create_file_name(post_name, timestamp)
    with open(new_page_name, 'w') as fp:
        fp.write(TEMPLATE.format(
            author=author,
            title=post_name,
            categories=categories,
            timestamp=timestamp.strftime(POSTNAME_DATETIME_FORMAT)
        ))
```

After using those functions then all we need to do is just use the template that was defined above as the content of the file so I don't have to do a lot of work and after that I have a great starting point to be able to then write the blog post that I was hoping to work on today!! 

Let me know if any of this was helpful but I wanted to write down what I did for all the people who would be interested in working a little easier with jekyll

