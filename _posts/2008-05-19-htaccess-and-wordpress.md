---
layout: post
title: ".htaccess and WordPress"
date: 2008-05-19 12:14
comments: true
sharing: true
footer: true
permalink: /2008/05/htaccess-and-wordpress
categories: [Blog]
tags: [.htaccess, apache, wordpress]
---
Lesson learned: WordPress re-writes part of your .htacess file every now and again, namely, the part between the "BEGIN WordPress" and "END WordPress" comments.  So, you know, you shouldn't put your own rewrite rules in between them, or you'll wonder why they keep going missing.