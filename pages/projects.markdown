---
layout: page
title: Projects
permalink: /projects/
---
<h2>Table of Contents</h2>
<ul style="max-height: 12em; overflow: auto;">
    {% for project in site.projects %}
      <li>
        <a href="#{{project.title | slugify}}">{{project.title}}</a>
      </li>
    {%- endfor -%}
</ul>

<ul class="post-list">
{% for project in site.projects %}
<li>
    <h3 id="{{project.title | slugify}}">
        <a href="{{project.permalink}}" class="post-link">{{project.title}} </a>
    </h3>
    <p style="display: flex; justify-content: left; gap: 10px;"> 
            {%- for technology in project.technology -%}
                <span>#{{ technology }}</span>
            {%- endfor -%}

    </p>
    {%- if site.show_excerpts -%}
          {{ project.excerpt }}
    {%- endif -%}
</li>
{% endfor %}
</ul>