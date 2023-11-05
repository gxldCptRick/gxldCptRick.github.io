from datetime import datetime
import re
from typing import Any

import click

TEMPLATE_WITH_TAGS = """---
layout: post
title: "{title}"
date: {timestamp}
author: {author}
categories: {categories}
tags: [{tags}]
---
"""

TEMPLATE = """---
layout: post
title: "{title}"
date: {timestamp}
author: {author}
categories: {categories}
---
"""

ILLEGAL_ITEMS_REGEX = re.compile("[':/\\+\\[\\]\"]+")
FILENAME_DATE_FORMAT = "%Y-%m-%d"
POSTNAME_DATETIME_FORMAT = "%Y-%m-%d %H:%M:%S +0000"


def clean_post_title(title: str) -> str:
    partially_clean = title.lower().replace(" ", "-")
    return re.sub(ILLEGAL_ITEMS_REGEX, "", partially_clean)


def create_file_name(post_title: str, timestamp: datetime):
    return f"pages/_posts/{timestamp.strftime(FILENAME_DATE_FORMAT)}-{clean_post_title(post_title)}.markdown"


def format_categories(categories: str):
    return categories


def ensure_list(item: Any):
    if isinstance(item, list):
        return item
    else:
        
        try:
            iter(item)
            return list(item)
        except:
            return [item]


@click.command()
@click.option("--post-name", required=True)
@click.option("--author", default="Andres Hermilo Carrera Reynaga")
@click.option("--categories", required=True)
@click.option("--tags", multiple=True, required=True)
def main(post_name: str, author: str, categories: str, tags: list[str]):
    timestamp = datetime.utcnow()
    new_page_name = create_file_name(post_name, timestamp)
    with open(new_page_name, "w") as fp:
        out = TEMPLATE.format(
            author=author,
            title=post_name,
            categories=format_categories(categories),
            timestamp=timestamp.strftime(POSTNAME_DATETIME_FORMAT),
        )
        if tags:
            out = TEMPLATE_WITH_TAGS.format(
                author=author,
                title=post_name,
                categories=format_categories(categories),
                tags=",".join(ensure_list(tags)),
                timestamp=timestamp.strftime(POSTNAME_DATETIME_FORMAT),
            )

        fp.write(out)


if __name__ == "__main__":
    main()
