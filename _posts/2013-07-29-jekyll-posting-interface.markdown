---
layout: post
title: "Jekyll Posting Interface"
date: 2013-07-29 18:38
comments: true
published: true
categories: 
---
I made myself a simple web interface to create new [Jekyll](http://jekyllrb.com/) posts. This is actually the first post that I've written in it, so let's hope this works right. It's rare for me to be away from my primary machine, but I thought it would be nice to have a web interface to create a new post from my phone…and I kind of just wanted to see if it would work.

You can see the [new post form](http://brockboland.com/new.html) on my site, though you won't be able to submit the form—or at least, it won't do anything if you try to. I'm taking advantage of Github's new file interface, so one needs permissions on my [Github pages repo](https://github.com/brockboland/brockboland.github.com) to create a new post.

The code for the form is pretty simple and pretty ugly, and it to [is on in the Github pages repo](https://github.com/brockboland/brockboland.github.com/blob/master/new.html). It's just a title field, and a content textarea. A hidden filename field is set by Javascript on form submit. I'm not even using jQuery: the code is super-ugly, but it gets the job done, and that's all I wanted.

The actual form doesn't look half bad, because like any true developer, I threw [Bootstrap](http://getbootstrap.com/) at the problem to make it look at least a little bit OK.

If you want to try it yourself, grab `new.html` from that repo, and change the `action` attribute on the `form` element to point at your own repo address. You may also want to tweak the YAML front-matter that gets added at the end of the Javascript.
