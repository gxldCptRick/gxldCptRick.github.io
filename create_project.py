from datetime import datetime
import re

import click


TEMPLATE = """---
layout: project
title: "{title}"
permalink: /projects/{title_clean}
repo-name: "{repo_name}"

---
## Overview

## Languages and Tools
"""

ILLEGAL_ITEMS_REGEX = re.compile('[\':/\\+\\[\\]"]+')

def clean_project_title(title: str) -> str: 
    partially_clean = title.lower().replace(' ', '-')
    return re.sub(ILLEGAL_ITEMS_REGEX, '', partially_clean)


def create_file_name(project_title: str):
    return f'pages/_projects/{clean_project_title(project_title)}.markdown'


@click.command()
@click.option('--project-name', required=True)
@click.option('--repo-name', required=True)
def main(project_name: str, repo_name: str):
    new_project_name = create_file_name(project_name)
    with open(new_project_name, 'w') as fp:
        fp.write(TEMPLATE.format(
            title=project_name,
            repo_name=repo_name,
            title_clean=clean_project_title(project_name)
        ))

if __name__ == '__main__':
    main()