---
layout: post
title: "Movable Type QuickPost"
date: 2008-01-18 22:15
comments: true
sharing: true
footer: true
permalink: /2008/01/movable-type-quickpost
categories: [Blog, Technology]
tags: [blogging, movabletype, mt]
---
<p>I still haven't finished putting the site back together after <a href="/2008/01/upgrading_movable_type.php">upgrading Movable Type</a>, but I really like the new version.  The admin interface is a lot cleaner and easier to use, and everything feels...sturdier, I guess.</p>

<p>I'm not sure if QuickPost was a feature in 3.2, but I didn't know about it if it was.  And really, calling it a "feature" is an overstatement.  It's just a bookmarklet that you drop in the bookmarks toolbar of your browser, and it allows you to quickly start a post about the web page you're looking at.  For those of you who ARE using Movable Type (and this post won't be of much interest to anyone else), there's a QuickPost link in the Write Entry page, down below the Save and Cancel buttons.</p>

<p>It's a handy little bookmarklet, but by default, it doesn't work the way I would like.  It pops up a new window with a new blog post that contains the URL of the page you were looking at, two `&lt;br&gt;`'s, and then any text you had selected on the page.</p>

<p>That's a good start, but clunkier than I would like, so I changed mine a fair bit.  Here's what I'm using - it's one long line that won't fit in your browser, so copying it might be a pain.</p>

`javascript:d=document;w=window;t='';if(d.selection)t=d.selection.createRange().text;else{if(d.getSelection)t=d.getSelection();else{if(w.getSelection)t=w.getSelection()}}entryTitle=encodeURIComponent(d.title);if(t=='')entryBody='';else entryBody=encodeURIComponent('<blockquote>') + encodeURIComponent(t) + encodeURIComponent('</blockquote>\n\n');entryBody+=encodeURIComponent('<a href=&quot;') + encodeURIComponent(d.location.href) + encodeURIComponent('&quot;>Link</a>');url='http://site.com/cgi-bin/mt.cgi?__mode=view&qp=1&_type=entry&blog_id=1&title=' + entryTitle + '&text=' + entryBody;void(w.open(url))`

<p>And here's a more verbose version, so it's easier to see what's going on:</p>

```javascript
d = document;
w = window;
t = '';
if(d.selection) {
t = d.selection.createRange().text;
}
else {
if(d.getSelection) {
t = d.getSelection();
}
else {
if(w.getSelection) {
t = w.getSelection();
}
}
}
entryTitle = encodeURIComponent(d.title);
if(t == '') {
entryBody = '';
}
else {
entryBody = encodeURIComponent('<blockquote>') + encodeURIComponent(t) + encodeURIComponent('</blockquote>\n\n');
}
entryBody += encodeURIComponent('<a href=&quot;') + encodeURIComponent(d.location.href) + encodeURIComponent('&quot;>Link</a>');
url = 'http://site.com/cgi-bin/mt.cgi?__mode=view&qp=1&_type=entry&blog_id=1&title=';
url += entryTitle + '&text=' + entryBody;
void(w.open(url));
```

<p>I changed a few things.  For one, "_blank" is no longer included in the window open.  Under my Firefox configuration, this means that it comes up in a new tab instead of a new window.  I also changed the entry body; now, it turns the URL of the page into a link (with the text "Link"), and any selected text goes above that in a `&lt;blockquote&gt;`.  Basically, you get a new post that's in the format <a href="http://www.boingboing.net/">Boing Boing</a> typically uses.</p>

<p>If you want to try it out, do the following:</p>

<ol>
<li>Drag the QuickPost link from the Write Entry screen into your bookmarks toolbar.</li>
<li>Open your favorite text editor - Notepad will do - and copy that first block of code above into it.</li>
<li>Right-click on the bookmark and select Properties. Copy the Location field into your text editor too.</li>
<li>You need to pull the URL out of your QuickPost code and put it into mine.  Obviously, the domain part won't be site.com, and the blog_id might be different if you're running more than one blog in your MT installation.</li>
<li>Copy the new code with the correct URL into the Location field for the bookmarklet.  Make sure there aren't any line breaks in it.</li>
<li>That's it.  Test it out by going to any web page, select some text, and click the QuickPost bookmark.  You should get a new post that contains the text you had selected.</li>
</ol>

<p><a href="mailto:brock@brockli.com">Drop me a note</a> if you've got any questions or suggestions for improvements, or just post a comment here.</p>
