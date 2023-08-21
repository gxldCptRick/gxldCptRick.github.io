---
layout: page
title: Projects
permalink: /projects/
---
<ul>
{% for project in site.projects %}
<li>
    <a href="{{project.permalink}}">{{project.title}} </a>
</li>
{% endfor %}
</ul>