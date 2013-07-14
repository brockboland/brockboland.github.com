---
layout: post
title: "Geek Tip: Firefox Bookmark Keywords"
date: 2010-04-10 16:23
comments: true
sharing: true
footer: true
permalink: /2010/04/geek-tip-firefox-bookmark-keywords
categories: [Geek Tips]
tags: [bookmarks, drupal, firefox]
---
Here's another handy tip that doesn't seem to be common knowledge yet.

In Firefox, you can define a keyword for your bookmarks, and then use the keyword in the address bar instead of the full URL to visit the site. You can also define arguments for a keyword, making a shortcut for frequently searched or visited sites. Neither of these functions is immediately obvious when adding a bookmark, though the latter is available in a right-click menu.

Bookmarks
---------
First, let's look at adding a keyword for a regular bookmark. To add the keyword, you must already have a bookmark for the site. Once you have that, go to the Bookmarks menu and choose Organize Bookmarks. Find the bookmark you want to add a keyword for, and click the down arrow on the left side:

![Bookmark Expand](/files/uploads/2010/04/bookmark.jpg)

This will reveal Keyword and Description fields. In the keyword field, enter the shortcut you would like to use.

![Expanded Bookmark](/files/uploads/2010/04/expanded_bookmark.jpg)

As you can see in this screenshot, I use the letter 'g' as a shortcut for Gmail. When I want to check my Gmail, I just type 'g' in the address bar. Some other shortcuts I use:

* **boa**: Bank of America online banking login
* **cal**: Google Calendar
* **cl**: Craigslist for Washington, DC
* **fb**: Facebook home
* **r**: Google Reader
* **t**: Twitter
* **tum**: Tumblr dashboard
* **w**: Weather forecast

These are all sites I visit pretty regularly. I could put them all in my bookmark toolbar, but that would take up a lot of space, and I prefer keyboard shortcuts over clicking when possible.

Searches
--------
The second option is setting a keyword for a search. There are actually two ways to go about this: through a right-click menu, or the manual process. I use these two different ways.

First, for a regular site search, right-click on the search box and choose "Add a keyword for this search." If you want to add a keyword for searching IMDB, you would right-click on the search box and choose that option.

![IMDB Search Box](/files/uploads/2010/04/imdb_search_box.jpg)

In the pop-up window, specify a keyword for the search

![IMDB Bookmark](/files/uploads/2010/04/imdb_bookmark.jpg)

Now, you can enter a search directly in the address bar using the 'imdb' keyword. To search for "Iron Man," for example, you just type "imdb iron man" into the address bar, and you go straight to the search results page.

I use this functionality a little bit differently. If you go back to the Bookmarks menu and choose Organize Bookmarks, then open the bookmark for the keyword search you just added, you'll see that the Location for the bookmark is actually:

	http://www.imdb.com/find?s=all&q=%s

The `%s` in that string will be replace by whatever text follows "imdb" when you enter it in the location bar. In addition to using this for search terms, it can be used as a shortcut to known URLs.

I use this functionality to quickly get to documentation when I'm working with Drupal. For example, the module pages on Drupal have consistent URLs: `http://drupal.org/project/` followed by the name of the module. Since I frequently need to pull up the page for modules I'm working with, I created a bookmark with a keyword:

![Drupal Quicklink](/files/uploads/2010/04/drupal_quicklink.jpg)

Like I said, the `%s` will be replaced by anything you enter after the keyword. Now if I want to see the page for the Views module, I enter this in the address bar:

	dmod views

This will take me directly to `http://drupal.org/project/views`. Since I don't always know exactly what I'm looking for, I also have a bookmark with a keyword to the search - `dmods` instead of `dmod`:

![Drupal module search](/files/uploads/2010/04/drupal_module_search.jpg)

And then I've got another one for searching the Drupal API:

![Drupal API search](/files/uploads/2010/04/drupal_api_search.jpg)

The Drupal API search is flexible; if you search for an existing function, you go straight to that function page. Otherwise, you go to the search results. So, if I enter:

	dapi hook_nodeapi

…I go straight to the reference for `hook_nodeapi()`. If I enter a value that isn't a function ("hook_node" for example), it goes to the search results.