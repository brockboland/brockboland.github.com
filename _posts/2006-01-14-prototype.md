---
layout: post
title: "Prototype"
date: 2006-01-14 13:39
comments: true
sharing: true
footer: true
permalink: /2006/01/prototype
categories: [Web Development]
tags: [javascript, prototype]
---
Anyone who does any JavaScript development should give the <a href="http://prototype.conio.net/">Prototype framework</a> a try.  It  provides a lot of helper functions that replace a lot of code.  For example, there's a `$()` that effectively calls `document.getElementById()`, but allows for several arguments and will return an array of elements matching those IDs.  A few functions handle form access and processing, and there are a handful of AJAX functions I haven't tried yet.  It's nothing that I couldn't do on my own, but it makes things much easier.  I just started playing with it at work yesterday, so I haven't found out what it can really do, but I think I'll be using it for other projects.

Unfortunately, the official site has next to no documentation.  The code is simple and clean enought that reading it is enough in many cases, but it's not all too clear.  Thankfully, plenty of people have come before me, so there's some decent information out there.  The two I found most useful were Particletree's <a href="http://particletree.com/features/quick-guide-to-prototype/">introduction</a> and Sergio Pereira's <a href="http://www.sergiopereira.com/articles/prototype.js.html">guide</a>.
