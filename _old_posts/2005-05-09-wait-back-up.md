---
layout: post
title: "Wait, Back Up"
date: 2005-05-09 19:12
comments: true
sharing: true
footer: true
permalink: /2005/05/wait-back
categories: [Blog]
tags: [bbq, catentries, mt, mtperlscript]
---
I don't why it didn't work <a href="/2005/04/fix-number-two">last time</a>, but a second attempt with <a href="http://www.sixapart.com/pronet/plugins/plugin/catentries.html">CatEntries</a> has turned out better than the first.  I got tired of entries in the Reading and Recently Viewed categories appearing on the main page, when really, I only wanted them in the side bar.

I went looking for a way to do category exclusion with <a href="http://www.bradchoate.com/weblog/2002/07/27/mtperlscript">MTPerlScript</a>, but <a href="http://www.google.com/search?q=mtperlscript+exclude+category&hl=en">when I'm the first hit</a>, you know it's not going to end well.  I don't know why I decided to try CatEntries again; I seem to remember reading that category exclusion wouldn't work right because of the way MT works under the hood or something like that, but it seems to be OK now, so I'm happy.  I can make posts in more than one category if I want them in the side bar and main page.  It was worth the 20 minutes to play with it and get it all figured (sometimes I don't mind waiting for Windows Update).

We're having another BBQ tonight.  I love spring.

<B>UPDATE</B>: So I was almost right.  This only seems to work using `lastn` and not with `days`, which explains why my feeds all updated when I posted this, but my home page didn't.  Normally the home page would show the last 7 days; now it shows the last 10 entries.  I don't know why it only works this way, I'm just happy it's working somehow.
