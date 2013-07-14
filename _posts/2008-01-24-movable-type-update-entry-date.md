---
layout: post
title: "Movable Type: Update Entry Date"
date: 2008-01-24 20:05
comments: true
sharing: true
footer: true
permalink: /2008/01/movable-type-update-entry-date
categories: [Blog]
tags: [blogging, movabletype, mt, mt4, plugins]
---
My favorite plugin in MT3 was UpdateAuthoredOn.  It didn't do much: you got a button next to the entry date input, and clicking on it would update it to the current time and date.  Simple, but very handy - especially if you're the kind of person who writes an entry over the course of a couple days and want to post it with the current time.

The new version is called <a href="http://www.staggernation.com/mtplugins/UpdateEntryDate/">UpdateEntryDate</a>, but it's not working for me in MT4.  So, I ripped out the part I needed and changed the MT template.  If you want to try it out, you'll need to modify `tmpl/cms/edit_entry.tmpl` in your MT directory.  Go to line 1057 (give or take), or search for `entry-time` to find the date and time inputs.

First, the time input needs an ID.  You can replace the whole `entry-time` input with this:


`<input id="entry-time" class="entry-time" name="authored_on_time" tabindex="11" value="<$mt:var name="authored_on_time" escape="html"$>" />`


Then insert this two lines down, after the closing `span` tag:

```html
<input type="button" class="primary-button"
onclick="update_authored_on();" value="Update" />
<script type="text/javascript">
function zeropad(num) {
return (num < 10) ? '0' + num : num;
}
function update_authored_on() {
var now = new Date();
var y = now.getFullYear();
var m = zeropad(now.getMonth() + 1);
var d = zeropad(now.getDate());
var h = zeropad(now.getHours());
var min = zeropad(now.getMinutes());
var s = zeropad(now.getSeconds());
document.getElementById("created-on").value = y + '-' + m + '-' + d;
document.getElementById("entry-time").value = h + ':' + min + ':' + s;
}
</script>
```