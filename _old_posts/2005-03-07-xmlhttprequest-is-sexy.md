---
layout: post
title: "XMLHttpRequest is Sexy"
date: 2005-03-07 1:12
comments: true
sharing: true
footer: true
permalink: /2005/03/xmlhttprequest-sexy
categories: [Internet, Web Development]
tags: [javascript, php, tada, xmlhttprequest]
---
So, after <a href="/2005/03/xmlhttprequest">complaining a bit about XMLHttpRequest</a>, I did some looking around today to see how big of a pain in the ass it would be.

Turns out, not very.

I spent a couple hours fighting with a test page, until <a href="http://ejohn.org/">Resig</a> pointed out that I needed to specify text/xml as the content type for the XML document (thanks again, John).  From there, I just needed to touch up the JavaScript a bit to get it working the way I wanted it to.

I'm pretty psyched about the prospects of this whole <a href="http://www.adaptivepath.com/publications/essays/archives/000385.php">Ajax</a> business.  It's a lot easier to do than I expected it to be; the most difficult parts come in with DHTML, for the most part.  My JavaScript skills could use polishing anyway, so I'm planning to re-write the <a href="https://members.csh.rit.edu/new-webfault/">segfault editor</a> (members only, sorry) I did last year in PHP.  To begin with, I might clone <a href="http://www.tadalist.com/">Ta-da List</a>, just to get some practice before throwing myself at the bigger project.

I never liked the idea of relying on the client to provide processing.  PHP always seemed safer because it runs server-side, so you don't have to worry about the user disabling JavaScript or running an ancient browser that doesn't support it.  By now, most users have upgraded to at least IE 6 or (hopefully) Mozilla Firefox, so this is where the web is headed.  If some <a href="http://gmail.google.com/gmail">really</a> <a href="http://maps.google.com/">cool</a> <a href="http://rit.schedulemaker.org/">sites</a> hadn't already shown off the capabilities of the technology, I probably would have dismissed the idea entirely.  Thankfully, some talented people got to it before I did and convinced me it's worth tinkering with.
