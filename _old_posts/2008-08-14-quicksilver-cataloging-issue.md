---
layout: post
title: "Quicksilver: Cataloging Issue"
date: 2008-08-14 17:04
comments: true
sharing: true
footer: true
permalink: /2008/08/quicksilver-cataloging-issue
categories: [Technology]
tags: [mac, quicksilver]
---
[Quicksilver](http://docs.blacktree.com/quicksilver/quicksilver) is one of the most useful Mac apps available, hands down.  I don't even know how to find things on a Mac without it anymore - which makes it distressing when it doesn't work the way I expect it to.

I keep a list of project ideas and things like that at `Documents/GTD/Someday.txt` under my home directory.  Straightforward enough, but I can never remember where it is, and thanks to Quicksilver, I shouldn't need to.  But Quicksilver couldn't find it this afternoon, and a little digging proved that Quicksilver wasn't cataloging any subdirectories in Documents.  I'm pretty sure it used to - I've been using it for a few years and never noticed any problems like this before, so I imagine that this bug was introduced when I updated to ß54 a week or two ago, and I just hadn't noticed yet.

Now, I call it a bug, but it's entirely possible that the developers made the change on purpose.  Even so, here's what I did to fix it:

![Quicksilver Drawer](/files/uploads/2008/08/quicksilver-drawer.png)

1. Open the Quicksilver Catalog.
1. Click User in the list on the left.
1. Select Documents.
1. Click on the `i` icon at the bottom left.  This will open an information drawer.  Notice that the Depth slider in the drawer is set to 1, but it's disabled.
1. At the bottom of the drawer, click on the Attributes tab.
1. Click the Create A Copy button.
1. A copy will be created, and you are now editing that copy.  Click back to the Source Options tab in the drawer and change the Depth slider to infinite (or lower, if you want it to catalog faster).
1. Click on User in the list at the left again.  The checkbox next to Documents should have been automatically unchecked, since your new item overrides it.  Uncheck it if it wasn't done automatically.
1. If you want to update your catalog immediately, click the refresh button at the bottom right corner of the window.