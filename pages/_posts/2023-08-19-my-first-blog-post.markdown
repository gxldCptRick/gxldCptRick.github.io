---
layout: post
title:  "My First Blog Post"
date:   2023-08-19 21:46:06 +0000
categories: jekyll updates
---

Heyyo!! this is my first blog post where I am learning how jekyll works and what I want to do with this site. Please excuse the messyness of this and the bad grammar. I am still trying to understand both how to write and how to use [Jekyll](https://jekyllrb.com/) so I hope you stay along with this journey.

Currently I have discovered that it autogenerates the html based on the markdown file I had given it and it is pretty sweet in that regard because it knows how to style so much and in a format that I am really used to because of github.

Each post consists of a file in my _posts directory where the name has to follow the format `<year-month-day>-<post-title>.markdown` with a file that looks like this: 

``` markdown
---
layout: post
title: "Some title"
date: "year-month-day hour:minute:second +<timezone offset>"
categories: categories that your post is about
---
Actual Text that is rendered in the body of your blog post and you can use any valid form of [markdown](https://www.markdownguide.org/basic-syntax/)
```

With this basic set of tools you can build out blog posts without having to do the heavy lifting with html. It is super nice too because you can also configure different styles and what not to mess with the css of the pages by looking up different jekyll themes. I may change the theme I use in the future but for now I want to stick with this one because it seems like it is working.

If you want to get started using Jekyll with Github Pages like me Github has [a whole tutorial you can follow here](https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll).

Overall the tutorial will show you how to install ruby and then using the built in `bundle` cli you can setup by adding jekyll to your global ruby installation and bundle to control the dependencies for you pages repo. I have jekyll nested in a pages directory in my github.io pages repo and I had to just adjust the github actions template to go into my pages directory before it tries to run the build script to compile the markdown into the final html. It isn't too hard but I am still getting the hang of using the Jekyll markdown with ruby scripting to write more meaningful items that can use the dynamic nature of markdown to render what I want to the screen.

Overall this took me about a few hours to fully grokk and understand and hopefully tomomrrow I can focus on building a new post for setting up a github runner on your private network to allow you to run your github actions in a more secure environment and showcase how one could have a full ci/cd flow using one of the mobile apps I worked on so I can hopefully explain why one would want to do something like this.