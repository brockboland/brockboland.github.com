---
layout: post
title: "LiveJournal Comments: Problem Solved"
date: 2006-12-17 19:09
comments: true
sharing: true
footer: true
permalink: /2006/12/livejournal-comments-problem-solved
categories: [Blog]
tags: [Blog, comments, lj, mt]
---
Interested parties may remember my post about <a href="http://www.brockli.com/archives/2006/11/livejournal_comments.php">copying LiveJournal comments</a> from a syndicated account to a Movable Type blog.  Wes and Bob (I think?) recommended some LJ developer pages, but the closest I could get was retrieving comments from an LJ account for which I'm logged in.  Since I was looking to get comments from a syndicated account, there is (as far as I know) no way to do that.

So I spent a few hours this weekend hacking together this monstrosity of PHP to scrape the LJ pages and insert comments into the  MT database.  You can get the code on the <a href="http://www.brockli.com/projects/lj-comment-grabber/">project page</a>.  It's not that good and I wouldn't even really recommend using it, but you're welcome to it.  If you have any problems, bug fixes, or ideas, shoot me an e-mail or leave a comment here.
