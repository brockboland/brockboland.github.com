---
layout: post
title: Markdown Footnotes in Jekyll on GitHub Pages
tagline: 
date: 2013-10-23 11:59
comments: true
published: true
categories: [Geek Tips]
tags: [Jekyll, GitHub Pages]
permalink:
---
I switched to using [Jekyll](http://jekyllrb.com/) a few months ago, and then to [Jekyll Bootstrap](http://jekyllbootstrap.com/) just the other day. Plain Jekyll and Jekyll Bootstrap both work great on [GitHub Pages](http://pages.github.com/): just push the Jekyll directory, with your `_layout` and your `_posts` and whatnot, and GitHub Pages handles the parsing and generates your site.

My big complaint in switching was that my Markdown footnotes stopped working. If [you scroll to the bottom of this old post](/2011/11/i-want-track-everything/), you'll see a footnote there. Yesterday, that displayed as `[^1]` because the redcarpet Markdown parser that I had been using didn't parse footnotes.

Thanks [to someone named Brian Willis on StackOverflow](http://stackoverflow.com/a/19507591/2185), I now have working footnotes. I just had to switch my markdown processor to kramdown. In `_config.yml`, change the `markdown:` line:

    markdown: kramdown

If `markdown:` isn't in your `_config.yml` already, you can just add it on a new line.
