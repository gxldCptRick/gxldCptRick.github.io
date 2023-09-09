---
layout: post
title: "Adding Projects to My Blogsite"
date: 2023-08-21 03:42:00 +0000
author: Andres Hermilo Carrera Reynaga
categories: updates
tags: [jekyll,python,project-update]
---
I was wondering how I could add projects to this site without having to add each and every entry into the navbar above and that is when I was able to push Jekyll to its fullest form. 

I found out that with Jekyll you can create your own objects called collections that you can then define html for and use throughout your site after adding it to you config.

Allow me to walk you through how I used that to be able to generate a Projects page that would then allow me to post my different projects in github while I also created a script to generate the markdown files that I am going to use for the project details pages.

```yaml
# _config.yml jekyll file
collections:
  projects:
    output: true
```

So in order to begin the process of adding a collection that can get picked up and auto rendered by jekyll using a template of my own design. You must add a `collections` property to your jekyll config then add the name of the collection you wanna add. Jekyll will auto detect any files under the name `_{collection-name}` so if for example you wanted to make a collection of pokemon you would add the 
```yaml
    collections:
        projects:
```
And that is all that is needed however if you wanted to not just use the data defined in those files and instead make them their own full pages you can do add the property of `output` setting it to `true` to tell jekyll this is something I want you to fully flesh out and render for me.


After you have that setup you can then go into the page file you want to extend or add your collection information too like so
```markdown
---
layout: page
title: Projects
permalink: /projects/
---
<ul>
{% raw %}
{% for project in site.projects %}
<li>
    <a href="{{project.permalink}}">{{project.title}} </a>
</li>
{% endfor %}
{% endraw %}
</ul>
```

And with that you have now defined a page that will literally just list your projects that you define within the `_projects` directory for you automagically.

Since I have project files I wanted to add some default layout for them to be able to reference and because of that you will need to add a `_layouts` directory on the root of your jekyll project or find it so you can add the html template you want to render with jekyll for your new collection objects.

```markdown
---
layout: default
---
<article class="post">
    {% raw %}
    <header class="post-header">
        <h1 class="post-title"><a target="_blank" href="https://github.com/{{page.repo-name}}">{{ page.title | escape  }}</a></h1>
    </header>
    <div class="post-content">
        {{ content }}
    </div>
    {% endraw %}
</article>
```

My template for projects looks like this. This allows my projects to basically copy the same layout that my theme, minima, uses for full pages without having the pages be added to the navbar.

After all that I just need to write my first project file where I made it like this. 

```markdown
---
    layout: project
    title: "Linear Algebra Library"
    permalink: /projects/linear-algebra-library
    repo-name: "gxldCptRick/LinearAlgebra"
---
content
```


So now all I need to do is define a project file that uses my `project` layout and provides a `repo-name` parameter so I can link back to the repo on github proper.

Now that I have a new file type I will probably be making frequently I can then create a template for it so I essentially copied the script for making posts and modified it so it can create projects instead. It is awesome and still follows the same simple idea where we have something figure out the path on disk and then write out a template of how I want my future project pages to look like so i can start with something instead of nothing. You should totally checkout the pages repo that powers this site when you get a chance so you can see the simple stuff I made to help me out with this. 

Otherwise it that is all for today but I am happy to have learned more about blogging and building a site using jekyll. 
