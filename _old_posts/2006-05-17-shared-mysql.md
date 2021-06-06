---
layout: post
title: "Shared MySQL"
date: 2006-05-17 21:19
comments: true
sharing: true
footer: true
permalink: /2006/05/shared-mysql
categories: [Technology]
tags: [javascript, mysql, thumb_drive, wiki]
---
<p>Dear <a href="http://www.lazyweb.org/">LazyWeb</a>:</p>

<p>I want to share a MySQL database between two installations of PHP and MySQL on two different machines running at different times.  Basically, I want a <a href="http://meta.wikimedia.org/wiki/Wiki_on_a_stick">Wiki on a stick</a> that I can run on Windows and my iBook.  This is easy on Windows - just follow the instructions on the page linked there.  Running a wiki on a Mac is unbelievably easy with <a href="http://www.mamp.info/">MAMP</a>.</p>

<p>The problem is pointing the both of them at the same MySQL data so I can update the info in either place.  I can change the datadir in the MySQL config in MAMP, but it does me no good - MAMP has to be installed in /Applications/MAMP, or it just doesn't work (it won't even copy into other directories).</p>

<p>So I need to find another solution on the Mac, or a way to point the MAMP install of MySQL at an arbitrary directory.  Anyone managed to do this?</p>

<p>Also, a couple notes:</p>
<ul>
<li>This isn't a real LazyWeb request, since I've spent about 8 hours dicking around with this over the past few weeks.  That's not too lazy....right?</li>
<li>I know about <a href="http://www.tiddlywiki.com/">Tiddlywiki</a>, but it's not going to scale the way I want it to.  This is going to be a big wiki and I don't want it relying on having lots and lots of JavaScript in memory (their homepage made Firefox complain about running too long).  I'd be open to other wiki systems (file based DB, maybe?) if they have the features of MediaWiki (revision history, mostly).</li>
<li>I know I could just run this on the PC desktop and connect to it like any other website, but I'd like to keep it on the thumb drive if I can.</li>
</ul>

<p>Any ideas are welcome.</p>
