---
layout: page
title: Projects
permalink: /projects/
---
<ul class="post-list">
{% for project in site.projects %}
<li>
    <h3>
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