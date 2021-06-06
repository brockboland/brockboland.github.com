---
layout: post
title: "I Want To Track Everything"
date: 2011-11-29 23:34
comments: true
sharing: true
footer: true
permalink: /2011/11/i-want-track-everything
categories: [Other]
tags: []
---
I have a data problem.

I should start by saying that this is mostly bananas. I've tried explaining it to some people before, and generally get the slight nod and raised eyebrow of one who suddenly wonders if the person they're speaking with has been secretely collecting cat hair in their socks, or something bizarre like that.

The main thing that I'm OCD about is tracking data: what I do each day, places I've lived, road trips I've taken, books I've read, concerts I attend, movies I see, songs I listen to—pretty much anything that can be listed and quantified, I want to track. The problem is finding a good way to store all this information.

In the past, I've tried using a wiki. Several years ago, I toyed with using [MediaWiki](http://www.mediawiki.org/wiki/MediaWiki), and then spent a year or so using a [dokuwiki](http://www.dokuwiki.org/) instance on a thumb drive with some mini webserver, so that I could add to it from my work or home machine.

[Evernote](http://www.evernote.com/) seemed like the perfect solution: it syncs, it's available on all platforms and devices, it scans images for text so that you can search text in photos. But, I can't help but be a bit distrustful: can I trust this critical-to-me data to a third party and closed format?

That led me to plain text files, using [nvALT](http://brettterpstra.com/project/nvalt/) on my Mac, syncing over [Dropbox](https://www.dropbox.com/), and [WriteRoom](http://www.hogbaysoftware.com/products/writeroom) on iOS devices. I don't worry about being unable to access the data at some future date, the files are small, and the syncing is reliable.

But, plain text files don't convey all the extra meta data I want to track, nor do they allow inter-linking of data. This was a big selling point for the wikis: they allow me to organize and link information together in a way that makes sense to me. It doesn't need to be a wiki, really: the web pretty much works this way, but MediaWiki has functionality for categories and templates and other similar things that would just make it easier than working with a regular CMS.

But, a wiki needs to be on a server somewhere, and I want to be able to access and update the data when I don't have an internet connection, and potentially from my iPhone—and again, don't want to trust that data to a third-party hosting service. I want it to live locally on my machine, and sync (or at least partially sync) to my iOS devices. I played with [VoodooPad](http://www.voodoopad.com/voodoopad/) a little bit, but what I'm really looking for is the functionality of MediaWiki in a native app…plus a bunch of other things.

Which is how, like any good nerd, I came to the conclusion that I was just going to have to build something myself. And, since I'm doing it myself, I can compile the full list of functionality I want to build into it. Since I'm just now getting around to learning Objective-C, and because I've been mulling over this idea for the better part of a decade, the requirements wishlist has been growing a lot more quickly than my ability to build any of it.

* **Open data formats.** This is critical. Even if I stop maintaining the app, I want to make sure that I (and anyone else who winds up using it) can still access and work with the data using text editors, Perl scripts, and whatever hacks necessary to get it into a new system.
* **Context and linking.** Photos, events, and people should be handled differently, and should be interlinking. For example, if I have a photo of a few people rafting down a river, it will link to an event record detailing when and where it happened, to records for the people in the photo, to a map showing the location it was taken, and to my daily log record detailing what I did on the day it was taken. Anything can be linked to anything else, and each type of data will have particular types of information about it. In the given example, the photo and event records will have some date associated with them, while the person record might have contact information, family tree details, and other information that's specific to people. Different kinds of data have different kinds of details and functionality.
* **Data syncing.** I want to be able to add and access (but mostly add) data from any of my machines and devices. This is why I qualified the syncing earlier with a "or at least partially sync." Ultimately, the iPhone version absolutely needs to be able to add data to the system, but I can live without the ability to pull up existing data.
* **Privacy.** It goes without saying that the security of this data is paramount, which is a large part of the reason that I'm imagining this as a native app rather than a web service. I doubt that there are many other people out there who are interested in tracking information the way that I want to, but I'll bet those people are equally wary of entrusting this information with some third-party service. Keep it on your own machine, and secure it as you see fit.
* **Extensibility.** I'm imagining some kind of plugin system so that additional types of data can be added (like the photo, event, and people records mentioned earlier). Maybe some people want to track every [Nethack](http://www.nethack.org/) game they play, with some particular information for each game [^1]. Some of the core functionality would probably make use of the external API for these plugins. For example, there might be some kind of photo module that adds the ability to handle photos, tag people in them (like in Facebook), identify the location where it was taken, pull Exif data from JPGs, and so on.
* **Import external data.** This might fall under the **Extensibility** category, because it could be an add-on rather than core functionality, but I'd like to be able to pull in things that happen elsewhere: Facebook posts, Tweets, reviews on [Goodreads](http://www.goodreads.com/), etc. I want to be able to store all the information that I generate and things that I do, and these online activities are part of that.
* **Versioning.** Like a wiki, I'd like to be able to see the history of changes made to data.

I know I'm not talking about anything revolutionary, and I keep looking for an existing app that comes close to what I want. I'd be happy to use an existing tool rather than build my own, but I just haven't found it. I have piles of notes, scattered across Evernote, the text files in nvALT, and old-fashioned notebooks, that list everything I've ever thought to cram into this thing eventually, which probably doesn't help damper my expectations for an app that might already exist.

Even now, as I skim some notes to see what else I might want to include there, I'm seeing things I totally forgot about. Like tracking songs. I tend to associate songs very strongly with a particular point in time (usually when I first hear it, and then listen to it a lot), and I want to link that to things that were going on around that time. At one point, I wanted the ability to zoom on a timeline, so that you could pull out to see major things that happened in a given week, or in each month, or in each year: at the year level is your wedding, the month level is new jobs or apartment, the week level is get-togethers with friends from out of town, with increasing granularity as you zoom into smaller timeframes. I have no idea if this even makes sense or could be implemented or if I even want it anymore, but this is the kind of thing that's wound up in my idea lists over the years.

So that's what is often floating through the back of my mind when I'm staring off into the distance. I have a strange obsession with keeping track of all the information I can, and a fear that I'll forget it all if I don't write it down.

Ironically, because I lack a solid system for tracking these things, I hesitate to—and then fail to—actually write up the details that I intend to eventually put in there. This makes it all the more important, to me, that I get cracking and build this metaphorical bank vault, so that I have a safe place to put my valuables.

[^1]: Not the kind of thing I'd want to do, but considering the kind of weird things that I **do** want to track, this isn't so far-fetched.