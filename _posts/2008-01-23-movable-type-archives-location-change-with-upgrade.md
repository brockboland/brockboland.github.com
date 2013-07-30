---
layout: post
title: "Movable Type: Archives Location Change With Upgrade"
date: 2008-01-23 22:19
comments: true
sharing: true
footer: true
permalink: /2008/01/movable-type-archives-location-change-upgrade
categories: [Blog]
tags: [apache, mod_rewrite, movabletype, mt, mt4]
---
As I've <a href="/2008/01/upgrading_movable_type.php">mentioned here before</a>, I upgraded to Movable Type 4 not too long ago.  One of the changes that almost went unnoticed is the way archives are handled.  In MT3, I wasn't using the dynamic pages, so every post was generated into a file in the `archives` directory.  For example, a post about new music in July wound up at `/archives/2007/07/new_music.php`.

In MT4 - or at least, MT4 with dynamic pages - there is no `archives` directory.  Really, there aren't any directories, since it's all handled by `mod_rewrite`, but that's not really the point I'm making.  Under MT4, that post I mentioned above would be at `/2007/07/new_music.php`, with no `/archives` at the front.

Now, I <i>could</i> change the Archive Mapping on the Entry Archive Template in the admin, but I kind of like the shorter URLs.  I don't know much about `mod_rewrite`, but I found an answer a lot quicker than I expected to, thanks to <a href="http://www.askapache.com/htaccess/301-redirect-with-mod_rewrite-or-redirectmatch.html">askApache</a>.   I just added this to the `.htaccess` file in my site root, and now any requests to the non-existent `archives` directory are re-directed back into the root.

`RedirectMatch ^/archives/(.*)$ /$1`

If you want to use this for your site, you'll need to replace `brockli.com` with your own URL, but that should be it.
