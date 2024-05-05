import click

from blog.post import create_post
from blog.project import create_project


@click.group("blog")
def main():
    pass


@main.command("project")
@click.option("--project-name", required=True)
@click.option("--repo-name", required=True)
@click.option("--owner", default="gxldcptrick")
def create_project_cli(
    project_name: str,
    repo_name: str,
    owner: str,
):
    create_project(
        project_name=project_name,
        repo_name=repo_name,
        owner=owner,
    )


@main.command("post")
@click.option("--post-name", required=True)
@click.option("--author", default="Andres Hermilo Carrera Reynaga")
@click.option("--categories", required=True)
@click.option("--tags", multiple=True, required=True)
def create_post_cli(
    post_name: str,
    author: str,
    categories: str,
    tags: list[str],
):
    create_post(
        post_name=post_name,
        author=author,
        categories=categories,
        tags=tags,
    )
