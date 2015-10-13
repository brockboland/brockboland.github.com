---
layout: post
title: "CakePHP: First Impressions"
date: 2007-02-25 0:22
comments: true
sharing: true
footer: true
permalink: /2007/02/cakephp-first-impressions
categories: [Web Development]
tags: [cakephp, rubyonrails, svn, textmate]
---
About a month ago, I spent some time (more than I should have, really) getting Ruby on Rails running on my laptop so I could run through <a href="http://developer.apple.com/tools/rubyonrails.html">this tutorial</a> on Apple Developer Connection.  Ruby on Rails has been heralded as The Next Big Thing for about a year now, and I figured it was time to get on board.  After all, <a href="http://www.sitepoint.com/blogs/2006/10/09/php-developers-most-likely-to-switch-to-rails/">PHP developers are most likely to switch</a>, so I had to give it a shot.

I understood the concepts, but the fact that I've never even seen Ruby code (let alone written it) made it a little hard to follow.  Was I willing to learn a new language to use the framework?  If it would save me time in the long run, sure.  But, at this point, I don't really feel like I have a lot of time to be putting into new languages.  I wanted the ease of development without such a heavy time investment upfront.

Thus: <a href="http://www.cakephp.org/">CakePHP</a>.  I know PHP.  I'm reasonably comfortable with the MVC framework.  And, as it turns out, Cake is real easy to set up.  Their manual could use a little work - a lot of it was "Scaffolding makes things easy!" rather than "This is how you set up scaffolding."  Thankfully, the blog tutorial was more helpful than the rest of the manual (the parts I've read, anyway), and there's a fairly significant Cake community writing articles and how-to's all over the place.  I later found out that scaffolding DOES make things easy (if not pretty) - I created a `users` table, two files with under a dozen lines of code between them, and I've got a super-basic user management utility.  Obviously, I won't be using it in the real world, but for quick prototyping or a basic placeholder for more advanced functionality, it's great.

So that's good news.  I think I'll be using it for <a href="/2007/02/cakephp-anyone">that project</a> after all.  And, putzing around with it this afternoon taught me a few other new things.  I had been meaning to set up a Subversion repository somewhere for a while now.  In the past, I've used RCS for a few projects so I could roll back code if I screwed it up good, but it's a pretty crappy solution.  I spent about ten minutes trying to find SVN server software for the Mac before it occurred to me to just try `svnadmin create /svnroot`.  I also found the language association drop-down in <a href="http://macromates.com/">TextMate</a> - it's right there at the bottom of the window, by the way - so now it knows my `.thtml` Cake view files are actually PHP and colorizes appropriately.

I didn't get much code written today, but I'm in a better position to get more done from here on out - I've got a good framework, a code repository, and I'm becoming more comfortable with my editor.  Sometimes, you just need to take a day for all this extra crap, so that the coding part goes a little quicker and a little smoother.

And now, if you'll excuse me, I'm going to crash.  I slept about ten hours last night and took a three-hour nap this afternoon when I had a bad headache, and in spite of all that, I've had trouble keeping my eyes open for the past hour.  I really hope it's not my turn to get sick.
