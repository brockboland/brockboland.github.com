---
layout: post
title: "TextMate: Setting The Default Language"
date: 2008-05-20 17:06
comments: true
sharing: true
footer: true
permalink: /2008/05/textmate-setting-default-language
categories: [Geek Tips, Technology]
tags: [textmate]
---
It took me forever to figure out what the dropdown at the bottom of the TextMate window is called - you know, the one where you select the language you want to use.  As it turns out, "language" would have been a good starting point in the Google, but it took me a while to figure that out.  It's the one that says "Blog - Markdown" in this screenshot:

![TextMate Screenshot](/files/uploads/2008/05/textmate-screenshot.png)

Anyway, I wanted TextMate to default to Markdown instead of Plain Text, and once I figured out what to search for, [I found my answer pretty quickly](http://lists.macromates.com/pipermail/textmate/2006-February/008276.html).

To find the UUID for Markdown, I did this:

	% cd /Applications/TextMate.app/Contents/SharedSupport/Bundles/Markdown.tmbundle/Syntaxes/
	% plutil -convert xml1 Markdown.plist 
	% grep -A1 uuid Markdown.plist 
		<key>uuid</key>
		<string>0A1D9874-B448-11D9-BD50-000D93B6E43C</string>

And once you've got that, this line sets the default:

	% defaults write com.macromates.textmate OakDefaultLanguage 0A1D9874-B448-11D9-BD50-000D93B6E43C

<strike>**Disclaimer**: I don't know if the UUID is specific to Markdown, or to Markdown *on my machine*.  I would recommend running those first three commands first and double check the UUID before you try to do this.</strike>  The UUID is specific to Markdown, so you can just execute that last `defaults write` line (thanks Drew!)

Also, blogging from TextMate is pretty handy.  You may have noticed that the screenshot includes the beginning of this post, because I was writing it just then, right in TextMate.  Handy, I tells ya.