import click


@click.group("blog")
def main():
    pass


@main.command("project")
@click.option("--project-name", required=True)
@click.option("--repo-name", required=True)
def create_project_cli(project_name, repo_name):
    pass


@main.command("post")
@click.option("--post-name", required=True)
@click.option("--author", default="Andres Hermilo Carrera Reynaga")
@click.option("--categories", required=True)
@click.option("--tags", multiple=True, required=True)
def create_post_cli(
    post_name: str,
    author: str,
    categories: str,
):
    pass
