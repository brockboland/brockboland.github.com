---
layout: post
title: "Converting Videos for TakeTV with VisualHub"
date: 2008-01-11 21:05
comments: true
sharing: true
footer: true
permalink: /2008/01/converting-videos-taketv-visualhub
categories: [Technology]
tags: [leopard, mac, sansa, taketv, video, visualhub]
---
<p>This year, I got me a <a href="http://take.tv/" target="_blank">Sansa TakeTV</a> for Christmas.  The system requirements make no mention of OS X, so I did some looking around online before opening it up - I only have a Mac, you see, and I wanted to make sure I could use the damn thing.</p>

<p>The Internet says I can use the damn thing, and I can.  Unfortunately, it doesn't handle many formats, so I've been trying to figure out how to convert video files and DVDs to DivX without having to pay for any software, or put much effort into it.</p>

<p>I've already got <a href="http://www.techspansion.com/visualhub/" target="_blank">VisualHub</a>, so I was hoping I could use that.  I couldn't find any specifics online for VisualHub and TakeTV, so I spent a little time fiddling with it.  It took me a few tries, but I figured out how to do it.</p>

<ol>
<li>Select the AVI tab</li>
<li>Drag your video file(s) into the big box in the middle</li>
<li>Click on the Advanced button - you have to change one of those fields that they tell you not to change</li>
<li>The last field in the Video section is "Extra ffmpeg flags."  In that dropdown, select "Best Possible MPEG-4" (even though you're making an AVI).  This should be replaced with the following ffmpeg flags:</li>

<blockquote><p>-vcodec xvid -mbd 2 -me full -flags +4mv+trell -aic 2 -cmp 2 -subcmp 2</p></blockquote>

<li>Close that window</li>
<li>Pick a destination directory in the "Save To" box</li>
<li>Click the Start button</li>
<li>Give it about half an hour, and you'll have a video file to drop on your TakeTV flash drive</li>
</ol>

<p>I hope that makes life easier for someone, because I spent a while looking around with no luck at all.</p>
