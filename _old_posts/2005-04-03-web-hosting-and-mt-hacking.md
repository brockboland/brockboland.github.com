---
layout: post
title: "Web Hosting & MT Hacking"
date: 2005-04-03 19:19
comments: true
sharing: true
footer: true
permalink: /2005/04/web-hosting-mt-hacking
categories: [Blog]
tags: [blogging, movabletype]
---
Live and learn, right?  Well, I've learned a few things about web hosting.

GoDaddy sucks, straight up.  I don't like their admin pages, the server was slow, and half the things I wanted in MT didn't work (TypeKey and e-mailing comments, for example).

I was only with them for a week and a half before I got fed up and switched to <a href="http://www.1and1.com">1&1</a>.  I signed up for 3 months at $10/month and got a free domain name, so I got <a href="http://www.rboland.com/">RBoland.com</a> too (it points to this site).  After playing with their admin panel for about an hour, I canceled my GoDaddy account and made the DNS changes to point BrockLi.com to their servers.  I had no trouble getting MT working perfectly, it's noticeably faster (even on static page loads), and the admin interface looks a lot better and is more intuitive.  I can't tell you how pleased I am with these guys right now.

Once I got everything up here, I set about importing my old entries.  MT exports one long file with all the entries in it, so I went through it and made a lot of changes at one time - updating URLs to the new domain, fixing the way I do images in posts, moving all pictures to Flickr, and adding keywords to all the posts.  Importing it went smoothly, so I'm pretty happy with MT.

I did a little tweaking to the design.  I still want to make it look a lot better, but I like it a little better now.  One thing I really like was a small script I found on <a href="http://www.johnsjottings.com/archives/2005/01/14/technorati_tags_in_movable_type.html">John's  Jottings</a> to make Technorati tag links out of entry keywords using Brad Choate's <a href="http://bradchoate.com/weblog/2002/07/27/mtperlscript">MTPerlScript</a> plugin.  I haven't found a good way to tag posts instead of categorizing them, but that can wait for now; for the time being, I've just removed the category list.

I also whipped up a blogroll real quick.  I want to make the sidebar more flexible without using PHP to include another file or pull info from MySQL.  I found out <a href="http://www.sixapart.com/movabletype/docs/mtmanual_programmatic.html#plugins">how to make custom template tags</a>, but I haven't got it to do what I want.  I'd like to be able to make a tag like &lt;MTSidebar&gt; that will cover everything in the sidebar.  Problem is, you can't use other template tags (like &lt;MTDate&gt;) within the custom tag definition.  After looking for half an hour, I finally found that the default MT tags are defined in MT::Template::Context.    It's not hard to figure out what functions there go with what template tags, but I'm not good enough with Perl to figure out what the arguments need to be.  If I could figure out what they need, I could do things like call `_hdlr_sys_date` where &lt;MTDate&gt; would normally appear.

For the time being, I'm walking away from it.  I may decided to play around with it some more later, but I'm pretty happy with how well everything has gone so far.
