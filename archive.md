---
layout: page
title: Archive
permalink: /archive.html
---

<div>

  {% for post in site.posts %}
    {% assign currentYear = post.date | date: "%Y" %}
    {% if currentYear != previousYear %}
      {% unless forloop.first %}</ul>{% endunless %}
      <h1 id="y{{post.date | date: "%Y"}}">{{ currentYear }}</h1>
      <ul>
      {% assign previousYear = currentYear %}
    {% endif %}

      <li><span>{{ post.date | date: "%b %-d, %Y" }}</span> » <a href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a></li>
    {% if forloop.last %}</ul>{% endif %}
  {% endfor %}

</div>
