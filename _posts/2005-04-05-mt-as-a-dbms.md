---
layout: post
title: "MT As a DBMS"
date: 2005-04-05 19:25
comments: true
sharing: true
footer: true
permalink: /2005/04/mt-dbms
categories: [Blog]
tags: [blogging, dbms, hack, movabletype]
---
I don't know <a href="/archives/2005/04/dynamic_mt_side.php">what the hell I was thinking</a> - that totally works.  For some reason, I kept thinking that MT template tags wouldn't work in a PHP file because they wouldn't get updated.  I created two categories just for the side bar: <a href="/archives/movies/recently_viewed/index.php">Recently Viewed</a> and <a href="/archives/books/reading/index.php">Reading</a>.  Then I made a new index template that contains everything in the side bar - since index templates are rebuilt when a new post is made (as far as I know, anyway), my side bar file is updated.  The <a href="http://www.sixapart.com/pronet/plugins/plugin/catentries.html">CatEntries</a> plugin allows me to filter what categories are displayed.  In the side bar, the last 5 posts from <a href="/archives/movies/recently_viewed/index.php">Recently Viewed</a> are shown, and the most recent post from <a href="/archives/books/reading/index.php">Reading</a>.  The index page excludes these two categories, but they still appear in monthly, daily, and category archives.  It's a neat way to use MT as a database management system.

Originally, I wanted to avoid a PHP include; I was so hell-bent on performance that I wanted to eliminate any PHP and make all pages static (because, you know, thousands of people are checking to see what I write EACH AND EVERY DAY).  Realistically, a single file include isn't going to affect performance in the slightest.  I may add a couple while(1) loops just to be sure, though.
