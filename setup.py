from setuptools import setup


def resolve_dependencies(requirements_file: str):
    items = []
    with open(requirements_file, "r") as fp:
        for line in fp:
            stripped = line.strip()
            if stripped.startswith("-r"):
                items.extend(
                    resolve_dependencies(stripped[2:])
                )  # file path always after
            items.append(stripped)
    return items


requirements = resolve_dependencies("requirements.txt")

setup(
    name="blog",
    version="1.0.0",
    description="A tool used to create different docs for my blog.",
    url="https://blog.gxldcptrick.dev",
    author="Milo",
    author_email="me@gxldcptrick.dev",
    license="Apache 2.0",
    packages=["blog"],
    install_requires=requirements,
    entry_points={
        "blog": [
            "blog = blog:main",
        ]
    },
)
