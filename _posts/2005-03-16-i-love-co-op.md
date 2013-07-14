---
layout: post
title: "I Love Co-op"
date: 2005-03-16 0:07
comments: true
sharing: true
footer: true
permalink: /2005/03/i-love-co-op
categories: [Technology]
tags: [javascript, sajax, tada, xmlhttprequest]
---
Being on co-op is totally sweet.  With nothing to do on Saturday, I reverted to my natural state - a lazy ass.  I spent the entire day sitting in bed, watching the Simpsons and reading blogs.  I was actually productive on Sunday, reading through a lot of stuff I had posted on <a href="http://del.icio.us/brock">del.icio.us</a> with every intention of reading later on.  I wanted to read up on XMLHttpRequest more so I would have a better understanding of what I was doing when I started working with it.  As it turns out, there wasn't much else to learn.  The one thing that would have come in handy before I made the crappy little test page is the <b>Content-type: text/xml</b> header that I forgot.  Aside from that, I didn't find anything new.

I also took a look at <a href="http://www.modernmethod.com/sajax/">SAJAX</a>, to see if it would be worth using.  I haven't played with it at all, but after looking at the code, I don't think I'll bother.  From what I've seen, it only passes a single variable at a time.  It looks really simple to use, but I'd rather be able to retrieve full XML documents from the server so I can get more info at once.

Last night, I started working on my <a href="http://www.tadalist.com/">Ta-da list</a> ripoff.  I spent about an hour trying to debug a transfer error only to find that when I copied the code from my original <a href="http://www.brockli.com/archives/2005/03/xmlhttprequest_1.html">XMLHttpRequest test page</a>, I neglected to change the URL for the requests to the server, so they were pulling the XML from the wrong PHP script.  I had a lot of incentive to find the problem quickly, though - Niraj posted a Flash cartoon last week over at <a href="http://www.tlgmedia.com/">TLG Media</a>.  It's been pretty popular and at least one copy is in his CSH web space, so the House web server has been getting blasted for the past couple of days.  I'm really hoping it dies out quick, because a static HTML page takes a good 5-10 seconds to load (waiting for the MT admin interface reminded me of the good old days on AOL).  Every time I made a change in the code, it would take a good 30 seconds to save it over SFTP and reload the page to test it again.

Tonight, I've been working locally.  My JavaScript skills - or, more specifically, my DOM skills - needed some brushing up.  I've spent the past hour or so just working on making the page functional and a little prettier.  I figure, I'll do all that stuff first and finish off the PHP and XMLHttpRequest side of it later on.  If I'm lucky, some new fad will hit the net and Niraj's thing will fade away so I can get some work done.  Or maybe it will finally give me the push I need to get Apache, MySQL, and PHP running on my desktop so I can run my site from my apartment.
