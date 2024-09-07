import logging
import click

from blog.post import create_post
from blog.project import create_project
from blog.repair import DocumentKind, repair


@click.group("blog")
def main():
    logging.basicConfig(level="INFO")


@main.command("project")
@click.option("--project-name", required=True)
@click.option("--repo-name", required=True)
@click.option("--owner", default="gxldcptrick")
@click.option("--technology", multiple=True, required=True)
def create_project_cli(
    project_name: str,
    repo_name: str,
    owner: str,
    technology: list[str],
):
    create_project(
        project_name=project_name,
        repo_name=repo_name,
        owner=owner,
        technology=technology,
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


@main.command("repair")
@click.option("--kind", "-k", required=True, type=click.Choice(DocumentKind))
def repair_cli(kind: DocumentKind):
    repair(kind)
