---
layout: post
title: "Adding A Field Formatter to Display Suite"
date: 2010-08-01 13:08
comments: true
sharing: true
footer: true
permalink: /2010/08/adding-field-formatter-display-suite
categories: [Drupal]
tags: [display_suite]
---
On one of my current projects, I'm using [Display Suite](http://drupal.org/project/ds) to layout various node displays. This is only the second time I've used DS and I haven't needed to get too deep into it, but so far, I'm finding it to be a lot quicker than coding different versions of `node.tpl.php` - and it allows the site admins who will maintain the site to modify things without getting into the code, something I [talked about last week](/2010/07/coded-vs-configurable-and-too-many-options). [Panels](http://drupal.org/project/panels) is another very popular option for things like this, but the one time I used it, I wasn't too impressed; for whatever reason, it just didn't click for me.

But anyway: we're talking Display Suite, not Panels. Without getting into it too much, Display Suite gives admins a simple, drag-and-drop interface to place fields into different regions of the output. When I say "regions," I'm talking simple: header and footer, with the center section part broken into left, right, and middle. I've run into a few cases already where this limited set of regions hasn't been enough for me, but if there's a good way to define more regions without hacking the module, I haven't found it yet. Even so, this module has allowed me to quickly throw together some common layouts without having to write much CSS. It's been espeically helpful on my own site: I don't have any design I'm working toward, and Display Suite makes the layout look good enough for me. This isn't usualy the case on client sites, but it's still been helpful.

This week, I was working on the landing page for a client's site. The page shows a brief highlight of some of the latest blog posts: just the title, category, and post date, with a thumbnail image on the left. They wanted to show the category name followed by "Blog »", above the title of the post. I used the [Node Displays](http://drupal.org/project/nd) module to add a new build mode for blog posts on the landing page, and added the thumbnail image, blog category, title, and post date fields into the left and right regions. I did have to tweak the CSS just a little bit to make the left and right regions the correct width (and eliminate the middle region), but it was pretty simple. Here's an example of the final result:

<img src='/files/images/Heal_the_Bay-20100801-123808.jpg' alt="Screenshot" />

([Fish image source](http://www.flickr.com/photos/weesen/3255908138/))

In this case, the category is "Aquarium," so it says "Aquarium Blog »" above the post. This links to the taxonomy term page for the Aquarium term. The Node Displays module comes with several formatters for taxonomy terms - terms separated by space or comma, linked or not - but not for my specific need. Thankfully, Display Suite offers `hook_ds_fields_alter()`, which allows a module developer to modify the fields made available by other modules. In this case, I wanted to modify the taxonomy term fields made available by the Node Displays module. I had to use `dpm()` from the [Devel](http://drupal.org/project/devel) module (as always, a lifesaver) to figure out what values were available where, so I knew what to change and how.

Ultimately, I wrote three functions in my module:

* Implemented `hook_ds_fields_alter()` to add my formatter to the list of formatters available for the Blog Category taxonomy term field.
* Implemented `hook_theme()` to register the theme function that would modify the value of the taxonomy term for output.
* The theme function that actually modified the taxonomy term

```php
<?php
define('BLOG_CATEGORY_VOCAB_ID', 1);

/**
 * Implementation of hook_ds_fields_alter(), from the Display Suite module
 * Add another formatter to the Blog Category taxonomy term field
 */
function mymodule_ds_fields_alter(&$fields) {
  // For this site, I only wanted this formatter to be available for the Blog Category vocabulary (term_1, 
  // in this case). I could have made it available for all vocabularies by making this a look and adding 
  // the formatter for all of them
  $fields['terms_' . BLOG_CATEGORY_VOCAB_ID]['properties']['formatters']['mymodule_blog_category'] = 'Front Page category';
}


/**
 * Implementation of hook_theme().
 * Register the theme formatter as a theme function
 */
function mymodule_theme() {
  return array('mymodule_blog_category' => array('function' => 'mymodule_blog_category', 'arguments' => array('node' => null)));
}


/**
 * Format the given field. $field includes an 'object' index that contains the current node
 */
function mymodule_blog_category($field) {
  $content = '';

  // Only continue if the node has taxonomy terms applied
  if (isset($field['object']->taxonomy) && !empty($field['object']->taxonomy)) {
    // Determine the vocab ID for this field (not really necessary here, since this module 
    // is only intended to be used with BLOG_CATEGORY_VOCAB_ID)
	// $field['key'] will have a value like terms_1 or terms_4, so this pulls the number off the end
    $vid = end(explode('_', $field['key']));

    // Since terms are not grouped by vocabulary, we need to loop over all of them and find the one(s) 
    // for the vocab in question
    foreach ($field['object']->taxonomy as $tid => $term) {
      if ($term->vid == $vid) {
        // Add "Blog »" to the term, and link to the term page
        $content = l($term->name . ' Blog »', 'taxonomy/term/'. $term->tid);
        // There could conceivably be more than one term for this vocabulary, but there isn't under 
        // the current site config, and we only want to display a single term under this format anyway
        break;
      }
    }
  }
  return $content;
}
?>
```