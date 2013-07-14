---
layout: post
title: "Posting to Drupal with the Blog API Module and TextMate"
date: 2010-06-13 15:58
comments: true
sharing: true
footer: true
permalink: /2010/06/posting-drupal-blog-api-module-and-textmate
categories: [Drupal]
tags: [drupal, textmate, blogapi]
---
It is imperfect, but I finally [found someone who figured out how to get TextMate to talk to Drupal using the Blog API](http://www.dhreutter.de/?q=blog/blogging-textmate-finally). In short, the blog setup needs to include the content type you are using for blog posts after a pound sign, such as: 

	Blog Name http://user@www.website.com/xmlrpc.php#blogpost

Unfortunately, it doesn't support taxonomies at all, so it's unlikely that I'll bother using it until I feel like putting more work into it.