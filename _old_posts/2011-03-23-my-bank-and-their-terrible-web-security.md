---
layout: post
title: "My Bank & Their Terrible Web Security"
date: 2011-03-23 19:25
comments: true
sharing: true
footer: true
permalink: /2011/03/my-bank-their-terrible-web-security
categories: [Web Development]
tags: []
---
The folks at Citibank don't know what they're doing.

I've been logging into their student loan website site once or twice a month for a couple years now, to make payments or check the balance on my loan. And every time I tried to login through the form in the homepage sidebar, it would fail. Like most sites, it takes you to a full login page with an error message when your login fails. I would enter the exact same username and password there, and it would let me in. I bookmarked the full login page, but usually forgot about it until I was typing my credentials into the homepage two weeks after the last time it happened.

Today, I finally found the problem when trying to figure out why the same account was failing to connect in <a href='http://www.mint.com'>Mint.com</a>:

The site only allows passwords up to eight characters.

The homepage login form allowed me to enter what I **thought** was my full 9-character password. The full login page has `maxlength="8"` on the password input, so when I re-typed it there, it got my **actual** 8-character password. The problem wasn't with the login form, or with Mint: my password has always been one character shorter than I thought, because it got cut off when I registered.

Unbelievable. I've heard some pretty awful stories about password policies (where they can't be longer than 6 or 8 characters, like this one, or can't include numbers or symbols), but typically they mention that on the signup page, and throw an error if you fall outside the requirements. I checked and found that the registration form does say, "Your password must be 6-8 characters in length and contain at least one number and one letter," but instead of warning me that I went over the limit, they silently "fixed" it for me and left my account less secure than I thought it was. Bang-up job, guys.