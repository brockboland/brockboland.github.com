---
layout: post
title: "Running Multiple Sites in MAMP"
date: 2009-12-21 14:52
comments: true
sharing: true
footer: true
permalink: /2009/12/running-multiple-sites-mamp
categories: [Web Development]
tags: [apache, mamp, webdev]
---
I've got a few development sites running on my laptop, and I generally want them to be at the document root to mimic the live site as much as possible (ie, at `http://localhost/` instead of `http://localhost/Clients/ClientA/`). Until today, I've been switching the Document Root in MAMP every time I switch projects, which is fine when you only switch projects once in a while. I just made some config changes to make this easier and a little more sensical, and I thought I'd write about it here in case anyone else is looking for ideas on the Googles.

First, open `/private/etc/hosts` and add hosts for each client you want to host, so your machine knows to look for the domain on your own computer. I use `local.clientname.com` because it's unlikely that most sites have a `local` subdomain, but you can use something different. My host file has these two lines at the bottom:

	127.0.0.1       local.clienta.com
	127.0.0.1       local.buffalostuff.net

Then run this in Terminal to flush your DNS cache:

	dscacheutil -flushcache

Now, you can navigate to those URLs (`http://local.clienta.com` and `http://local.buffalostuff.net` in my case) and MAMP will serve up whatever it has.

That's half the job. Now, you need to configure Virtual Hosts for the domains. In the MAMP Preferences, on the Apache tab, make sure the Document Root is set to your Sites directory (in my case, `/Users/bboland/Sites/`). Then, open `/Applications/MAMP/conf/apache/httpd.conf`, and add a virtual host at the bottom of the file for each domain:

	NameVirtualHost *

	<VirtualHost *>
	ServerName local.clienta.com
	DocumentRoot /Users/bboland/Sites/ClientA
	</VirtualHost>

	<VirtualHost *>
	ServerName local.buffalostuff.net
	DocumentRoot /Users/bboland/Sites/BuffaloStuff
	</VirtualHost>

Stop and re-start the servers in MAMP. Now you can navigate to those two sites and actually get the right content.

The biggest problem I see with this is maintenance: any time you take on a new project, you need to make sure you update the hosts file and Apache config.  But, since you only need to do it once, it's not that bad.