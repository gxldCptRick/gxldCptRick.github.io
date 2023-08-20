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