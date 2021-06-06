---
layout: post
title: "Moving the Dock"
date: 2010-02-02 13:05
comments: true
sharing: true
footer: true
permalink: /2010/02/moving-dock
categories: [Technology]
tags: [dock, mac, osx]
---
So that I don't have to go looking for this again next time, you can move the dock to the left, center, or right (or top, middle, or bottom, if you have it on the left or right side of the screen) using one of the following Terminal commands:

>defaults write com.apple.dock pinning -string start

>defaults write com.apple.dock pinning -string end

>defaults write com.apple.dock pinning -string middle

Then restart the Dock for it to take effect:

>killall Dock

**Update**: Bryan's comment made me realize I wasn't really clear on what I was talking about here. In the Dock settings, you can choose to position it on the left, right, or bottom of the screen, but by default, it will be in the middle of that edge. These commands will pin it to one side. So for example, if you have your Dock on the left side like I do, and use the first command (with the *start* option), it will appear on the left side but right up against the menu bar. Or use *end* to get it up against the bottom - this is where mine is, see:

<img src="/files/images/screen_shot_2010_02_02_at_54216_pm.png" alt="Dock Position" width=600 />