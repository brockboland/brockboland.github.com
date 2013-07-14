---
layout: post
title: "Desktop Configuration"
date: 2005-02-19 13:53
comments: true
sharing: true
footer: true
permalink: /2005/02/desktop-configuration
categories: [Technology]
tags: [tips, windows]
---
Until I co-oped at PPG two summers ago, I didn't know you could make My Documents point somewhere other than the default location, in c:\Documents and Settings\User\.

When I bought my current desktop last fall, I figured I'd take advantage of this.  Previously, I had a "stuff" folder in my C: drive where I kept most of my media - MP3s, videos, pictures, etc.  When I got the desktop, I partitioned it into two drives - 20GB for the OS and program files, and the other 60GB for media.

To redirect My Documents, right click on the icon on the desktop and select Properties.  Change the path in the Target box.  In my case, I pointed it at D:.  By default, this won't be in your PATH. To change that, right click on My Computer, select Properties, and go to the Advanced tab.  Click on Environment Variables, and add your new My Documents path to the value there (make sure you end it with a semicolon).

By default, Windows creates a variety of sub-folders in My Documents, such as My Pictures, My Music, and My Videos.  I renamed these to pics, music, and video respectively.  Since the directory is in my path, I can enter any of these three names at the Run command to open the folder quickly.  I also have a folder called new, where all my downloads go.

Most people that read this blog have probably found a setup that works for them, but if anyone is in the same boat I was two years ago, this might help.
