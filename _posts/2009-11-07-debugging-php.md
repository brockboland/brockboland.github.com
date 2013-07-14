---
layout: post
title: "Debugging PHP"
date: 2009-11-07 9:37
comments: true
sharing: true
footer: true
permalink: /2009/11/debugging-php
categories: [Web Development]
tags: [macgdbp, php, textmate, xdebug]
---
I was a fan of Zend Studio 5.5, but for whatever reason, <a href="http://shop.zend.com/en/zend-studio-for-eclipse.html">Zend Studio 7</a>, with all its Eclipse-iness, just doesn't do it for me.  I don't do much coding these days, so I've stuck with my beloved <a href="http://macromates.com/">TextMate</a>, even though I missed the full suite of functionality - especially debugging.

But now that I've finally gotten around to installing Xdebug and MacGDBp (following instructions on <a href="http://technosophos.com/content/debugging-your-php-code-xdebug-mamp-textmate-and-macgdbp-support">TechnoSophos</a>) I may uninstall Zend altogether.  It's lighter, it's quick, and it will be plenty for the little bit of debugging that I need to do.  

The only complaint I have thus far is that I can't seem to get the `xdebug.file\_link\_format` option to work:

`xdebug.file\_link\_format = "txmt://open?url=file://%f&line=%l"`

That `txmt://` link should be included in stack traces in the browser, so that clicking on the name of the offending file will open it in TextMate to the right line, but it's not using the specified format.  The <a href="http://xdebug.org/docs/all_settings#file_link_format">Xdebug documentation</a> claims that it wasn't introduced until Xdebug 2.1...but the latest version is only 2.0.5.  It's a minor thing, but it would be nice.

So I'm content.  It's not perfect, but it'll do.  And don't bother wasting your time to tell me I should be using vim - I loves me some TextMate.