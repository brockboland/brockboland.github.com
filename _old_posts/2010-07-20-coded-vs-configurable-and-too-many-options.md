---
layout: post
title: "Coded vs. Configurable, and Too Many Options "
date: 2010-07-20 18:45
comments: true
sharing: true
footer: true
permalink: /2010/07/coded-vs-configurable-and-too-many-options
categories: [Drupal]
tags: []
---
I have always felt that a site admin should have the option to disable or change functionality without having to hire a coder to do it for them. In my early days of web development, this meant I produced pages and pages of admin options. Instead of being highly customizable for the user, these apps were just highly confusing.

Now that I'm building sites in Drupal, I'm trying to find the balance again. I typically get some Photoshop files of a new site design with a description of the content types that are needed and any custom functionality that needs to be included. I build out the site, but someone else will take on the task of maintenance after that.  This means they will need to tweak things when changes are needed, so I try to make things available in the admin interface as much as I can. I avoid writing special cases into the theme's `template.php` file or in custom modules, and prefer to use other methods like [Node Displays](http://drupal.org/project/nd) or [Panels](http://drupal.org/project/panels) to implement the layout within a node (and [Context](http://drupal.org/project/context) for the bigger picture, of course). This is the blessing and the curse of Drupal: for any requirement, there are plenty of solutions that might be the best one.

In the project I was working on today, one content type has a group of CCK fields that the client would like to display above the node title when viewing the node in its own page. Now, even though I said I avoid doing things in code if I can, I also didn't want to install Node Display or Panels just to address this particular condition, since I didn't need them anywhere else on the site. 

My first instinct was to override `node.tpl.php` for the content type, but that template file doesn't print the title when viewing the node on its own page. I could remove the `if (!$page)` check in that template and let it print the title anyway, and code an exception into `page.tpl.php` so that it won't print the page title if the page is of that node type, but that's kind of hacky - and again, doesn't offer any flexibility to the admin who will be managing this site once I hand it over after the initial build-out.

Ultimately, I went with the admin-unfriendly solution. In the Display Fields tab for the content type, I set that group to Exclude on the Full Node display. This prevents the group of fields from displaying on the page, but they will still be rendered and included in the node object. Then, in `template.php`, I added a special condition to `template_preprocess_node()` to add the rendered HTML to the `content-top` region:

```php
<?php
if(is_object($vars['node'])) {
  if($vars['node']->type == 'news_item') {
    $vars['content_top'] .= $vars['node']->content['group_info_fields']['#children'];
  }
}
?>
```

If you asked five other Drupal developers how they would handle this, you'd probably get five different answers. It's nice to have the flexibility, but can also be a pain to figure out what's best for the situation. There's even a [group on gdo](http://groups.drupal.org/similar-module-review) for reviewing modules with similar functionality; for a great example of the too-many-options issue, see the post in that group about [modules that do tabs and slideshows](http://groups.drupal.org/node/20384).

This case today was a good reminder that experience can't be beat. I can spend as much time as I want reading reviews and how-tos, but I need to actually use these different modules and become familiar with them so that I have the experience to draw on when facing a similar situation down the road.