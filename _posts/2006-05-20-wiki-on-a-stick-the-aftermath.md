---
layout: post
title: "Wiki on a Stick: The Aftermath"
date: 2006-05-20 0:36
comments: true
sharing: true
footer: true
permalink: /2006/05/wiki-stick-aftermath
categories: [Technology]
tags: [dokuwiki, mediawiki, wiki]
---
I don't know why I didn't think to do more looking around before, but I've solved my <a href="/archives/2006/05/shared_mysql.php">wiki on a stick problem</a>.  Wikipedia has a <a href="http://en.wikipedia.org/wiki/Comparison_of_wiki_software">comparison of wiki software</a>, which includes a several that use flat-file databases.

As it turns out, <a href="http://wiki.splitbrain.org/wiki:dokuwiki">DokuWiki</a> works almost just like <a href="http://www.mediawiki.org/wiki/MediaWiki">MediaWiki</a>, in terms of formatting and revision history.  In one of the config files, you specify the data directory, and it just works.

Unfortunately, it's not a true <a href="http://meta.wikimedia.org/wiki/Wiki_on_a_stick">wiki on a stick</a>.  It will run on any Windows machine right from the thumb drive; the instructions there use <a href="http://sourceforge.net/projects/miniserver/">Uniform Server</a>, which runs Apache, MySQL, and PHP right from the thumb drive.  DokuWiki is installed in the www directory there, so I can run it anywhere I've got XP (or maybe 2000) and a USB port.

As I mentioned in my previous post, MAMP won't run anywhere but /Applications/MAMP.  Mark made the good point that I could create a symlink from the thumb drive to that directory (or vice versa? you know what I mean), but by that time I already had DokuWiki working and didn't feel like spending more time on it.  As such, MAMP runs on my iBook with a local install of DokuWiki that points to the data directory within the aforementioned www directory.  Voila, everyone uses the same data, and I am appeased.

It isn't as flexible as I was hoping, but I'm really only planning on using it in three places: my iBook, my home PC, and on rare occasions when I need to make a quick note, my work PC.  I can't run it on other Macs without installing and configuring MAMP and DokuWiki there, but for my purposes, this setup will serve me well.
