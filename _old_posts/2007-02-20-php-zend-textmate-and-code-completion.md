---
layout: post
title: "PHP, Zend, TextMate, and Code Completion"
date: 2007-02-20 22:40
comments: true
sharing: true
footer: true
permalink: /2007/02/php-zend-textmate-and-code-completion
categories: [Web Development]
tags: [php, textmate, web_development, zend]
---
I spend most of my day coding PHP, so <a href="http://www.zend.com/products/zend_studio">Zend Studio</a> is like my Holy Grail.  I had never even heard of it until i started my current job; we got it shortly after I started, and I've used it daily since.

The wonderful thing about Zend is its code completion.  If I type `strp`, it will suggest `strpos` and `strptime`.  When I hit Enter or Tab to select `strpos`, it finishes the function name, adds parenthesis, and in a little box above the code, it tells me `strpos(string $haystack, mixed $needle [, int $offset])`.  And it's the greatest thing ever.

I know how to program, and obviously, I know how to program in PHP, or else I wouldn't be doing it for a living.  However, there are very few compelling reasons to know every built-in function and the arguments they take; it's far more important to know what that function does and what it will return.  I know what `strpos()` does, and I know that it will return a boolean `FALSE` if `$needle` isn't found in `$haystack`, and that it can also return 0 (which evaluates to `FALSE`) if `$haystack` begins with `$needle`.

Knowing these details is important, but I use `strpos` infrequently enough that I can never seem to remember whether `$needle` or `$haystack` is the first argument.  With Zend, I don't even need to think about it, so I can focus instead on what I'm doing, what variables I'm using, and what code needs to come next.

Of course, I don't even really need to remember what variables I'm using, since Zend knows those, too.  It also builds an index of all functions, classes, variables, and defines that I'VE written - not just the built-in ones - so I don't need to remember much of that, either.  Obviously, it's quicker if I'm familiar with them and don't have to rely on auto-complete for everything, but it sure as hell helps.  How often is the source of frustration a `$filename` where it should have been `$fileName`?  In Zend, I type `$filen`-tab, and it capitalizes the N and finishes the variable name for me.

Some programmers would argue that this isn't "real" programming, since I'm relying on the software to tell me what to do.  Some programmers would argue that the first group of programmers is a bunch of self-righteous Linux geeks and why don't they just move out of their mom's basement fer crissakes.  I, of course, am in the latter camp.

Zend has significantly improved my productivity by allowing me to keep programming without switching over to documentation very often.  Everyone has to RTFM every now and again, but the less I have to do it, the faster I can get things done.  Even with the code hints, I still need to check <a href="http://us2.php.net/manual/en/">php.net</a> a few times a day (for example: the arguments for `str_replace` are `$search`, `$replace`, and `$subject` - is `$search` the thing I'm looking for, or the thing I'm searching through?)

Now, Zend isn't all puppies and rainbows.  It's based on <a href="http://www.eclipse.org/">Eclipse</a>, which was built in Java, which I've never had much luck with.  On my PC at work, it's a memory hog, and on my iBook, it's barely usable.  My work machine is pretty beefy, so it's really not a problem there, but working from my Mac can be a real pain.  On top of the speed issue, the fonts occasionally get messed up: the cursor appears somewhere it isn't, so keystrokes affect some other area on-screen.  I haven't figured out what causes it, but I have to restart Zend whenever it happens (which leads me to another gripe: Zend takes forever to start).

Enter <a href="http://macromates.com/">TextMate</a>.  Mac-happy developers have been in a tizzy about it for a few months now, but I finally started playing with it a couple weeks ago.  It's fast.  It seems to be stable.  The open-file tabbing is much better than Zend on the Mac.  And, if you run it from Terminal with `mate dirName/`, it will load that directory (and any new files created in it while TextMate is open) into it's file browser thingy.  Zend has a similar file browser, but it's not file system-aware (is that a real phrase, or did I make it up?  Either way, you know what I mean).

However, it too has its downfalls.  It doesn't support open/save over FTP.  And, much more importantly, it doesn't do code completion.

I did find a <a href="http://aralbalkan.com/822">PHP code-completion bundle</a>, which has helped a bit.  I type `strp`, and when I hit Escape, it suggests `strpos` (another Escape, and I get `strptime`).  It's a start, but it doesn't know anything about arguments.  You can hit Shift+F1 to go to the PHP manual for a function, but who wants to keep going back and forth like that?  Furthermore, it's only good for built-in functions - no functions I define, and no variables.

My TextMate trial ran out today, so I coughed up the $50 for a license.  I'm hoping that I'll find a bundle (or something) to soothe my code-completion addiction, but even if I don't, it's a good editor.  In the meantime, I'll probably commit more argument details to memory and get used to visiting php.net.  I'm starting to do more development on my laptop (another big help: <a href="http://www.mamp.info/">MAMP</a>), so I think it's going to be worth it.

Plus, that's $50 I can write off come tax time next year.  Right?
