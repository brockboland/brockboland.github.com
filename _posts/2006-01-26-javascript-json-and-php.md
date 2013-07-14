---
layout: post
title: "JavaScript, JSON, and PHP"
date: 2006-01-26 21:24
comments: true
sharing: true
footer: true
permalink: /2006/01/javascript-json-and-php
categories: [Web Development]
tags: [ajax, javascript, json, php]
---
John first mentioned JSON <a href="http://ejohn.org/blog/json-and-rss/">about a month ago</a>, but at the time I had no inclination to look into it and find out if it was something I could use.  It came across my radar again today thanks to a <a href="http://particletree.com/features/preloading-data-with-ajax-and-json/">Particle Tree article</a> that I never finished reading, but that's not important.  The long and short of it is that JSON is really just a fancy name for `eval`-ing JavaScript objects - one of those "why didn't I think of that" kinds of things.

The few times I've tried using Ajax, I've spent most of my time fighting with XML parsing (or convincing IE that it was XML I was trying to parse), so the allure of native JavaScript objects was enticing.  I talked with one of the guys at work about writing a function in PHP that would take an array and generate the appropriate code, until I came across the (seemingly de facto) "official" <a href="http://www.crockford.com/JSON/">JSON page</a>.  He's got references there for pretty much every language you'd expect to do web development in (and a few you wouldn't) - including <a href="http://mike.teczno.com/json.html">JSON-PHP</a>, which does exactly what I was going to.  Couple that with <a href="http://prototype.conio.net/">Prototype</a>'s quick-and-dirty Ajax.Request, and you've got a Web 2.0 application quicker than you can say "What the hell is a Web 2.0 application?"

QuirksBlog has a <a href="http://www.quirksmode.org/blog/archives/2005/12/the_ajax_respon.html">pretty good post</a> comparing JSON, XML, and HTML snippets, if you'd like to further consider your Ajaxing options.
