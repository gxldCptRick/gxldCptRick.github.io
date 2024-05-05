from datetime import datetime
import re

import click


TEMPLATE = """---
layout: project
title: "{title}"
permalink: /projects/{title_clean}
repo-name: "{repo_name}"
repo-link: "https://github.com/{owner}/{repo_name}"
---
## Overview

## Languages and Tools

## Project Story and Inspiration
"""

ILLEGAL_ITEMS_REGEX = re.compile("[':/\\+\\[\\]\"]+")


def clean_project_title(title: str) -> str:
    partially_clean = title.lower().replace(" ", "-")
    return ILLEGAL_ITEMS_REGEX.sub("", partially_clean)


def create_file_name(project_title: str):
    return f"pages/_projects/{clean_project_title(project_title)}.markdown"


def create_project(project_name: str, repo_name: str, owner: str):
    new_project_name = create_file_name(project_name)
    with open(new_project_name, "w") as fp:
        fp.write(
            TEMPLATE.format(
                title=project_name,
                repo_name=repo_name,
                owner=owner,
                title_clean=clean_project_title(project_name),
            )
        )


@click.command()
@click.option("--project-name", required=True)
@click.option("--repo-name", required=True)
@click.option("--owner", default="gxldcptrick")
def main(project_name: str, repo_name: str, owner: str):
    create_project(project_name, repo_name, owner=owner)


if __name__ == "__main__":
    main()
