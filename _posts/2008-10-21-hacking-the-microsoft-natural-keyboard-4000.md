---
layout: post
title: "Hacking the Microsoft Natural Keyboard 4000"
date: 2008-10-21 23:17
comments: true
sharing: true
footer: true
permalink: /2008/10/hacking-microsoft-natural-keyboard-4000
categories: [Technology]
tags: [hack, keyboard, microsoft]
---
<a href="http://www.amazon.com/gp/product/B000A6PPOK?ie=UTF8&tag=brocklicom-20&linkCode=as2&camp=1789&creative=390957&creativeASIN=B000A6PPOK"><img src="/files/images/ergonomickeyboardslider.jpg" alt="" title="Microsoft Natural Ergonomic Keyboard 4000 - Zoom Slider" width="280" height="280" class="alignright size-full wp-image-820" /></a>

A couple weeks ago, I got a [new keyboard](http://www.amazon.com/gp/product/B000A6PPOK?ie=UTF8&tag=brocklicom-20&linkCode=as2&camp=1789&creative=390957&creativeASIN=B000A6PPOK) for my [carpal tunnel issues](/2008/10/my-busted-arm.php).  It's pretty comfortable to use, now that I've started to get the hang of the split style, but it's also got all these extra buttons: mail, home page, favorites, things like that.  I never understood why anyone would want all that extra crap until I started using them - they're not a waste of desk space after all!

But this particular keyboard includes at its center a much-touted zoom slider.  Who the hell needs a zoom slider?  Aside from the elderly or others with poor eyesight, I can't imagine this thing being useful, and I was pretty disappointed to find that the configuration doesn't allow you to use it for scrolling instead - something everybody could use.

Lucky for me, I found [Josh Highland’s post on the matter](http://joshhighland.com/blog/2006/09/14/hacking-the-microsoft-natural-keyboard-4000/).  He has a link to download a new version of `C:\Program Files\Microsoft IntelliType Pro\commands.xml`, but I don't recommend that.  I used [WinMerge](http://www.winmerge.org/) to diff it against my own, and found that some new stuff had been added since he posted that two years ago.

Thankfully, updating the file is a piece of cake.  

1. Go to the `C:\Program Files\Microsoft IntelliType Pro` folder.  Copy `commands.xml` to another location, just in case something goes wrong and you need to restore the original.
1. Open `C:\Program Files\Microsoft IntelliType Pro\commands.xml` in your editor of choice.
1. Replace every instance of `"ZoomOut"` with `"ScrollUp"`.
1. Replace every instance of `"ZoomIn"` with `"ScrollDown"`.
1. I did **not** replace `IllustratorZoomin` or `IllustratorZoomout`.  I don't know if these should be replaced with `ScrollUp` and `ScrollDown` or something else, but I don't use Illustrator anyway.  You can try replacing those if you'd like to.
1. Reboot the machine.
1. Make sure that the slider is enabled by opening Keyboard in the Control Panel and enabling the zoom slider (the name doesn't change there, but that's OK).  

And bingo bango, you've got something useful in the middle of your keyboard.  As always, I make no guarantees about this process, do it at your own risk, and try not to set anything on fire.