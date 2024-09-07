from enum import Enum
from logging import getLogger
import os.path
import frontmatter

logger = getLogger(__name__)


class DocumentKind(str, Enum):
    post = "post"
    project = "project"


def repair(kind: DocumentKind):
    full_path = os.path.join("pages", f"_{kind}s")
    logger.info(f"Fixing files in the: {full_path}")
    for base, _, files in os.walk(full_path):
        for file in files:
            file_path = os.path.join(base, file)
            fix_file(file_path, kind)


def fix_file(file_path: str, kind: DocumentKind):
    if kind == DocumentKind.post:
        fix_post(file_path)


def fix_post(file_path):
    with open(file_path, "r", encoding="utf-8") as fp:
        post = frontmatter.load(fp)
    author = post.metadata.get("author", [])
    if not isinstance(author, list):
        author = [author]
    if len(author) == 0:
        author.append("Andres Hermilo Carrera Reynaga")
    post.metadata["author"] = author

    categories = post.metadata.get("categories", ["unknown"])
    if not isinstance(categories, list):
        categories = categories.split(",")
    post.metadata["categories"] = categories
    logger.info("Fixed posts", extra=post.metadata)
    with open(file_path, "wb") as fp:
        frontmatter.dump(post, fp)
