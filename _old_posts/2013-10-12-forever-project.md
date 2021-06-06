---
layout: post
title: My Forever Project
tagline: It's taking forever
date: 2013-10-12 03:55 PM
comments: true
published: true
categories: [Projects]
---
### Introduction
LifeTracker is my [forever project](http://jwb.io/20130122-the-joys-of-having-a-forever-project.html).

The idea is simple: I just want an app where I can track everything about my life. This is why [Quantified Self](http://quantifiedself.com) appeals to me, but only partly: I'm not really interested in the "quantified" part. Numbers and figures and stats don't really appeal to me. I'm more interested in the obsessively documented self: I want to track what I was doing when, where I lived and worked at the time, who I was with and how I first met them, and see a photo of the thing right there alongside it all.

I've been making notes and plans about this project since least December 5, 2007 (that's the earliest note that I've found about it), but I've been talking about it much longer. I can remember explaining to [Heewa](http://heewa.net/) that I wanted something like this way back in 2004 or 2005.

I also realized halfway through writing this [that I had already written about it, about two years ago](/2011/11/i-want-track-everything). But that's OK, I still like talking about it, and things have evolved a bit since then.

### Who Cares?
No one, probably, but I feel I need to start collecting my thoughts on this if I'm ever going to get to work on a project of this scale. I'm not worried about exposing my ideas and plans. Ideas aren't worth shit: the value is in implementation. As I've said before about this, I would love for someone else to take the initiative and steal my idea. I want the tool more than I want to build it.

Plus, I'm pretty sure [Erin](http://ebdrummond.com/) is tired of hearing about it. If I start writing about it here instead of talking to her about it, it'll be easier for her to ignore me.

### Background
The origins of this project are fuzzy, but firmly planted in the fact that I have a crappy memory. I'm just not good at remembering things, plain and simple, so I try to write things down as often as I remember to do so. These efforts have been successful in some cases, garbage in others. For example, I've noted every movie I've seen since 2004 (and have record of a few years worth of theater visits before that thanks to a mug full of ticket stubs). Since February 2008, I've kept a brief log of what I've done every day. Back in August 2003, I decided to start writing down how I knew people, where I'd met them, stories about them from back in the day, that sort of thing; unfortunately, I only wrote one. I have a text file listing every real job I've ever had, back to my first full-time summer job when I was 15. There's an entry in Evernote listing every house, apartment, and dorm room I've ever lived in, with whom and when.

Because I forget. Because I'm not good at remembering. Because I like to reminisce, but it drives me up a wall when I can't remember details or timelines. Because I know that no one else is going to remember these things for me, and once I forget them, they're gone forever.

### Requirements
Most of these are from [the two year-old post I already made about this project](/2011/11/i-want-track-everything).

* **Open data formats.** I'm leaning toward JSON because it's flexible and easy enough to use.
* **Linked data.** Previously, I thought that different types of data would need to handle this differently. For example, Event records would need to be linkable to People and Story records. At this point, I think that every piece of data in the system can have an open-ended Related field that can point to any number of other pieces of data, of any kind.
* **Data Syncing.** Still important. I want to enter new data while at my main machine or on a mobile device.
* **Reasonably simple.** This is hard to do on any app, let alone something like this, but at the very least, the barrier to entry has to be nearly non-existent. Because:
* **Easy to quickly input information.** I have been able to keep up a daily log for nearly six years because it's quick and easy to write a few lines each day. The project to write about how I came to know people, or the stories from college, or anything like that: those have failed completely because they require longer periods of focused time and attention. It needs to be trivially easy to (e.g.) make a note on a Person record when I remember that time we went dumpster diving together in college.
* **Extensibility.** I need to be able to define different data types with different types of information: People have different details than Stories or Photos or Journal entries. As I noted in the previous post, maybe someone wants to track details about every Nethack game they play: that's going to require a different set of data fields than other data types, and entries of that type will display differently. My thinking around this is largely influenced by the way that the fields and display options can be configured on Drupal node types, because that's the system where I spend most of my time. I'm trying to distance my thinking from that so I don't inadvertently limit myself to doing things the Drupal way.
* **Security.** Privacy is still a big concern on this.

#### Nice-to-haves
These things seemed like requirements in the past, but at this point, I think I'm more interested in getting the core functionality than in getting everything I want. I can always add more later on.

* **Versioning.** This was listed as a requirement before, but this isn't a big one for me anymore. It would still be cool to find a way to store all data in a git repo or something, so that one can see the history and revert changes and the like, but it's not that important.
* **Pull in external data.** Again, this was a requirement before, but now I'm less concerned with pulling in tweets or Goodread data.

### Planning the App
This is a difficult app to try to plan for. Frankly, I have no idea what the UI should look like or how it should work. So, I'm starting with something more basic.

My plan at this point is to build a simple journaling app to replace [DayOne](http://dayoneapp.com/) for my daily logging. Not because I have any complains about DayOne, mind you, but this seems like a good place to start. It'll just be a simple app to note things that happen in a given day, and indicate their level of importance. For example, my wedding day was the most important one of 2009, so that would have year-level importance. Getting together with a friend I haven't spoken to in a decade might be a month-level highlight. There will be some way to zoom out and see, at the week level, the things that were deemed the most important in that week. Similarly, the month and year views will show the items that were most important at that level.

Looking at one day, you'll see everything that happened that day. At the week level, you'll see that you went apple-picking on Saturday. At the month level, you'll see the day you moved to a new apartment. At the year level, you'll see the birth of a child, the wedding day, or the college graduation.

Collecting and storing this data will be easy, but I'm still figuring out how to handle the display, both during input and when viewing those zoom levels.

![Sketches](/files/images/lifetrackernotes-2013-10.jpg)

### Names are Hard
Everybody knows that there are only two hard things in Computer Science: cache invalidation, naming things, and off-by-one errors. In this case, the only one I'm struggling with is naming.

I've kicked around a lot of ideas over the years, and for a while, had settled on Supplemental. As in, "[Captain's log, SUPPLEMENTAL!](http://youtu.be/fbOC0uoKYtU?t=2m20s)" For the initial daily logging version, though, I came up with an even better name: [Ensign's Log](https://github.com/brockboland/EnsignsLog). It's a captain's log, but for the rest of us.

Keep an eye on that repo. I'd love to make this a profitable project one day, but realistically, I don't see that happening. It's far more important to me that it gets built and out there than makes money. And, maybe I'll have more incentive to keep working on it if I know people can see when I'm slacking.