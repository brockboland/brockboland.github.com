---
layout: post
title: "A Minor Milestone In My Obsessive Logging"
date: 2012-08-05 22:12
comments: true
sharing: true
footer: true
permalink: /2012/08/minor-milestone-my-obsessive-logging
categories: []
tags: []
---
I thought I had talked about this more at some point, but I can find [only one mention of it](/2011/11/i-want-track-everything): since February 2008, I've kept a daily log. It's sort of like a journal, but way shorter. I really just include the bigger outline of my day, so I can look back and get a sense of what I was doing at some particular time. A typicaly entry looks like this:

> 2012.07.04  Wed
> Fourth of July
> Didn't do much of anything: Erin was still sick, but feeling better by the end of the day
> Worked on some Drupal Ladder stuff

Now I've got a 6700-line text file with all of these minor details, but that was supposed to be a stop-gap measure until I found a better tool for the job. A few months ago, I bought [Day One](http://dayoneapp.com/) when everyone was talking about it, and tinkered with it a bit to see if it might be a good option. Data lock-in was my biggest concern—I don't want my log to be held hostage by some proprietary data format when the developer stops supporting the app. Day One stores entries in XML, with one file per entry, so it will be easy enough to reformat them for some other system in the future.

The search seems to work pretty well, which was another important aspect of this switch: in a text file, it was easy to search for a particular date or event, but this isn't always the case in journalling apps like Day One. I think the search might have been crappy (or even non-existent) in an early version of Day One, because I seem to remember being disappointed in it back when I first bought it. I'm not sure if it was fixed in an update or if I'm remembering it wrong, but either way, I'm happy with it now.

My accomplishment for the evening was finishing up [a Ruby script](https://github.com/brockboland/daily_file_parse) to parse the text file and import all of the logs into Day One. I doubt it will have any use for anyone else, but I enjoyed writing it.