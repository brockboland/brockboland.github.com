---
layout: post
title: "Dynamic MT Sidebar"
date: 2005-04-04 19:05
comments: true
sharing: true
footer: true
permalink: /2005/04/dynamic-mt-sidebar
categories: [Blog]
tags: [blogging, movabletype]
---
While reading <a href="http://a.wholelottanothing.org/features/2003/07/beyond_the_blog">an old article about MT</a>, I thought of a way to maintain dynamic content in the sidebar without having to use PHP or service-side file includes.

Take the Recent Movies section, for example.  Right now, it's just a list in a PHP file that I update when I watch a movie - remove the oldest one, add the new.  Alternatively, I could create a "Recent Movies" category, and make a post to it each time I see a movie - maybe I use the movie name as the title, short synopsis as the body, and the IMDB link as the keyword, or something like that.  I could exclude this category from the main and archive pages (using the <a href="http://www.sixapart.com/pronet/plugins/plugin/catentries.html">CatEntries</a> plugin) so that they would never appear between actual posts.  Similarly, I could use the same plugin to show <b>only</b> the "Recent Movies" category in the sidebar, and just display the title of the last five posts.  It would be easy to use standard MT template tags to make it a list of links using &lt;MTEntryTitle&gt; and &lt;MTEntryKeywords&gt;.

The problem with this approach is rebuilding.  If every page in my site has the same sidebar, which includes those MT tags, they would all have to be rebuilt when I added a new movie.  Granted, it's WAY faster on the new host than it ever was before, but I've only got a few dozen posts right now; it will become an issue when I start getting into hundreds of pages that will need rebuilding.

It's too bad that an entire template can't be included in another one, but that would basically be a server-side include.  I haven't got it solved yet, but at least I've got some ideas.
