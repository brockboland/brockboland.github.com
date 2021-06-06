---
layout: post
title: Default Markdown File Extension in TextMate 1
tagline:
date: 2013-10-20 17:40
comments: true
published: true
categories: [Geek Tips]
permalink:
---
I still use TextMate 1. It ain't broke, so I ain't fixed it.

Changing the default file type for TextMate is easy enough; [I posted the howto for that years ago](/2008/05/textmate-setting-default-language/). In short, just run this command from the command line to switch the default language to Markdown:

    defaults write com.macromates.textmate OakDefaultLanguage 0A1D9874-B448-11D9-BD50-000D93B6E43C

So that's great: TextMate now uses Markdown by default.

But, I'm picky, and by default, new Markdown files are saved with the "mdown" file extension (ugh). I prefer "md" because it's nice and tidy and nerds need these little things to fuss over.

Here's how you can change this default file extension:

1. Click on the Bundles menu, expand Bundle Editor, and click Show Bundle Editor.
2. In the list at left, find Markdown and expand it. Find the "Markdown" line preceded by a gray L icon.
3. The second line in the right panel lists the file extensions for which TextMate will use the Markdown bundle, and the first item in the list is used as the default extension when you create Markdown files in TextMate. Move "md" (or whatever you want) up to the front of the list.
4. Restart TextMate or select Reload Bundles under the Bundles > Bundle Editor menu.

![Markdown bundle config screenshot](/files/images/markdown-2013.10.20.png)

And that's that. Create a new file and initiate a save, and you'll see `untitled.md` where it had been `untitled.mdown`.

![Markdown file save screenshot](/files/images/markdown-save-2013.10.20.png)
