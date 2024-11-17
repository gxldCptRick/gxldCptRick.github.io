---
layout: page
title: Posts by Tag
permalink: /posts/
---
<h2>Table of Contents</h2>
<ul style="max-height: 12em; overflow: auto;">
  {% for tag in site.tags %}
    <li>
        <a href="#{{tag[0]}}">{{tag[0] | capitalize}} ({{ tag[1] | size }})</a>
    </li>
  {% endfor %}
</ul>

{% for tag in site.tags %}
  <h3 id="{{tag[0]}}">{{tag[0] | capitalize}} ({{ tag[1] | size }})</h3> 

  <ul class="post-list">
    {% for post in tag[1] %}
      <li>
        <span class="post-meta">{{ post.date | date: date_format }}</span>
        <h3>
          <a class="post-link" href="{{ post.url | relative_url }}">
            {{ post.title | escape }}
          </a>
        </h3>
        <p style="display: flex; justify-content: left; gap: 10px;"> 
            {%- for tag in post.tags -%}
            <a href="/posts/#{{tag}}">#{{ tag }}</a>
            {%- endfor -%}

        </p>
        {%- if site.show_excerpts -%}
          {{ post.excerpt }}
        {%- endif -%}
      </li>
    {% endfor %}
  </ul>
{% endfor %}