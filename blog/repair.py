from enum import Enum
import os.path
import frontmatter


class DocumentKind(str, Enum):
    post = "post"
    project = "project"


def repair(kind: DocumentKind):
    full_path = os.path.join("/pages", f"_{kind}s")
    for base, _, files in os.walk(full_path):
        for file in files:
            file_path = os.path.join(base, file)
            fix_file(file_path, kind)


def fix_file(file_path: str, kind: DocumentKind):
    if kind == DocumentKind.post:
        fix_post(file_path)


def fix_post(file_path):
    with open(file_path, "r") as fp:
        post = frontmatter.load(fp)
    author = post.metadata.get("author", [])
    if not isinstance(author, list):
        author = [author]
    if len(author) == 0:
        author.append("Andres Hermilo Carrera Reynaga")
    post.metadata["author"] = author
    with open(file_path, "w") as fp:
        frontmatter.dump(fp, post)
