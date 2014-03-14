---
layout: post
title: CocoaConf Chicago 2014
tagline:
date: 2014-03-14 17:02
comments: true
published: true
categories: []
tags: []
permalink:
---
This past weekend was the latest [CocoaConf Chicago](http://cocoaconf.com/chicago-2014), and it was a blast. I guess I never wrote a blog post about it, but this was my second: I attended [CocoaConf Boston](http://cocoaconf.com/boston-2013) back in October, but definitely enjoyed this one more. CocoaConf has several speakers who go on the road with them and give the same talk a few times, so I attended a few of the sessions that went over my head the last time around. And, since this one was local, I already knew a bunch of attendees from meetups and [SecondConf](http://www.secondconf.com/2013/), and it's always nice to go into an event already knowing some people.

I had been fighting a cold all last week, so I just decided to get a room there at the hotel so I could sleep more instead of driving back and forth to the city. I later found out that this was a pretty popular strategy among the local attendees, and it meant that I got to hang out with people at the hotel bar on Friday night, since I was feeling a lot better by then.

I also got to show off my app [Shoot](http://shoot.sh/) during the We Made an App For That session Friday after lunch, which was pretty awesome. I got a lot of good feedback and ideas from other attendees throughout the weekend, and won the prize for best presentation, which was quite flattering.

It was a pretty fantastic weekend. [The Klein family](http://cocoaconf.com/family) puts on a great conference, and I'm sure I'll be there when they (hopefully) come back through Chicago next year.

This time around, I tried to jot down a couple takeaways for each session, and for a lot of them, I also had a few items to follow up on.

### [Makeover Your Table Views for iOS 7](http://cocoaconf.com/chicago-2014/sessions/table-views-ios7): James Dempsey

I'm not quite sure what I thought this talk was going to be, but it mostly focused on upgrading table views from iOS 6 to 7 and Dyanmic Type.

Takeaway: I need to review the settings on my table view controllers (since the app was updated from iOS 6 to 7), and use the pre-defined styles whenever it makes sense to, since they will resize to the user's font size setting.

### [NSIncrementalStore - Bet you didn't think Core Data could do *that*!](http://cocoaconf.com/chicago-2014/sessions/nsincrementalstore): Jonathan Penn

This was one of the talks I saw back in October, and it was a little out of my grasp then. This time, it made sense.

Takeaway: Using plist files for a persistent store isn't a great idea, but [I'm going to use it anyway on a utility app I'm working on](https://github.com/brockboland/DayOneTagger/issues/11). CoreData works weird: like, the managed object context asks the persistent store coordinator to fetch data, and then the PSC asks the MOC to fetch each object…from itself.

### [Taking Your Automated Testing to the Next Level](http://cocoaconf.com/chicago-2014/sessions/automated-testing): Brad Heintz

I was hoping this talk would be a little more practical hands-on type stuff, but it was interesting.

Takeaway: Write tests first. Red, green, refactor—and anything goes for making the tests pass. Xcode uses Xcunit, but there are other options; in particular, I need to look into KIF for testing the UI.

Followup:

* Read up on [KIF](https://github.com/kif-framework/KIF)
* [RayWenderlich.com tutorial](http://www.raywenderlich.com/61419/ios-ui-testing-with-kif)

### [Advanced Core Data - The Things You Thought You Could Ignore](http://cocoaconf.com/chicago-2014/sessions/douglas-core-data): Aaron Douglas

This talk was a nice complement to Jonathan Penn's talk, since it focused "above the line": Jonathan focused on the persistent store coordinator while this talk focused on everything above that.

Takeaway: CoreData can get messy. It's really hard to handle threading correctly, but incredibly important to do so.

### [Performance Optimization: Monitoring Metrics in Real Time](http://cocoaconf.com/chicago-2014/sessions/performance-optimization): Brittany Young

I was hoping this talk would be more about measuring performance, but it was more about identifying what needs to be improved.

Takeaway: High percentages of users will just drop the app if there's any delays or slowdowns. It's important to measure performance because there isn't much value in taking wild guesses about what's wrong.

### [Tips & Tricks of Effective iOS Developers](http://cocoaconf.com/chicago-2014/sessions/effective-tips-tricks): Ben Scheirman

This talk was a collection of good ideas and things for me to follow up on.

Takeaway: Keep an eye on file length and the complexity of class dependencies. Pick a couple new-to-you keyboard shortcuts and practice them until they become part of your workflow. Make snippets in Xcode to speed things up.

Followup:

* [Build phase script to warn on too-long files](http://matthewmorey.com/improved-xcode-build-phases/)
* [Dependency visualizer](http://paultaykalo.github.io/objc-dependency-visualizer/)

### [View Controller Transitions](http://cocoaconf.com/chicago-2014/sessions/view-controller-trans): Jonathan Blocksom

This was another talk I saw in October. It made a lot more sense this time, but the practicalities of transitions still seems more complicated than they need to be.

Takeaway: I need to look into interactive transitions more, because I want to allow users to drag one view aside to see the next one.

### [You Bought What?! Lessons From Acquiring And Running Glassboard](http://cocoaconf.com/chicago-2014/sessions/you-bought-what): Justin Williams

It was nice to see a more business-oriented session among all the tech talks.

Takeaway: Running a business is hard. People who aren't paying for the service aren't customers, but you still need to treat them well if you hope to convert them to paying customers.

### [Auto Layout is a unicorn, wild and free. Learn how — and why — to harness its power and magic](http://cocoaconf.com/chicago-2014/sessions/auto-layout-lachman): Ben Lachman

I think I'm getting the hang of autolayout.

Takeaway: Turn on Editor > Canvas > Show Involved Views for Selected Constraints. Don't modify `view.frame` directly.
