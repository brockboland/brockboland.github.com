---
layout: post
title: "Switching from Drupal to Octopress"
date: 2013-02-03 20:00
comments: true
categories: 
---
I've spent the past couple of evenings converting this blog from Drupal to Octopress, and while I'm still figuring out how best to work with it, I think this is a step in the right direction. If you subscribe to this blog in a feed reader, sorry about that: I'm sure you saw a bunch of posts show up again.

**So, why the switch away from Drupal?** Frankly, Drupal wasn't the appropriate solution for my low-traffic personal blog. I switched from WordPress when I started working with Drupal a few years ago, in part so that I would have a "real" site to play with and get more familiar with the CMS. I thought that I could make good use of some modules, and create different content types for the different things I would post.

It was overkill. I had aspirational content types: I wrote one actual movie review. I had a few portfolio items, but didn't keep my portfolio up to date. Instead, I was constantly getting notices from Dreamhost that my VPS had been restarted because Drupal pushed past the the memory limit I was willing to pay for. I mean, this blog gets 100 hits on a busy day: there's absolutely no reason for me to pay more than $20 a month to host it, and I don't like trying to do any more server setup than I have to so I didn't want to both with Varnish caching. I'd rather just generate HTML and host it for free. I can manually build portfolio pages if I ever decide it's really necessary.

So, BrockBoland.com is now on Github Pages, and GodlessInDC.com (the other site I had on that account) has been retired, since we never wrote there anyway. I didn't have any luck getting other Ruby-based migration scripts working (presumably because MySQL is running from MAMP), so I just wrote a quick [Drupal 7 module](https://github.com/brockboland/d7_jekyll_export) to dump blog posts in Jekyll format. I opted to go with Octopress instead of vanilla Jekyll, though to be honest, I don't have a good reason why, aside from the fact that I wanted a pre-built responsive theme to save me the trouble. I've been pretty happy with it so far: I went with the [Greyshade](http://shashankmehta.in/archive/2012/greyshade.html) theme and made some tweaks. I'm especially happy to have all my blog posts right in Markdown files. Plain text really is the best way to store and backup things like this.