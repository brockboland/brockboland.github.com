---
layout: post
title: "Geek Tip: SSH Config"
date: 2010-04-10 15:05
comments: true
sharing: true
footer: true
permalink: /2010/04/geek-tip-ssh-config
categories: [Geek Tips]
tags: [ssh]
---
I'm sure this is nothing new to people that spend all day working from the command line, but since I only learned it recently myself - and then showed it to a few co-workers - I'll bet it's new to other people too.

If you frequently connect to the same machine(s), you can save yourself a lot of time by setting up an alias for the machine in your SSH config file. Rather than connecting using the full string, like:

	ssh bboland@dev.mycompany.com

…you can use an alias to save yourself some typing:

	ssh dev

Aliases such as this one are set in your `~/.ssh/config` file. Use your editor of choice to open the file:

	vi ~/.ssh/config

For each server, enter a block like this, replacing the values with your own server info:

	Host dev
	User bboland
	HostName dev.mycompany.com
	ServerAliveInterval 240

* **Host** defines what the alias name will be. In this case, I'm using `dev`, so I will be able to run `ssh dev` in the future.
* **User** is the username you want to connect as. By default, SSH will try to connect with the username you are using locally, but this isn't always the one you want. For example, my local username is `brock`, but my account on the server might be `bboland`, and for some servers, I need to connect as `root`.
* **HostName** is the name or IP of the server.
* **ServerAliveInterval** sets the interval, in seconds, at which a keepalive signal should be sent. This will keep your connection from timing out - which makes it a potential security issue. I use this because I tend to keep a terminal open in the background for a while and I'm careful to log out before walking away from my machine.

You can include several of these blocks in your `config` file. It's rare that I only have to connect to a server one time, so I'll usually add any new server the first time I need to connect to it. My config file usually has a list of servers: `dev`, `staging`, `production`, `dreamhost`, and so on.

These aliases are also available to `scp`. This means you can use that same alias in place of the full server name:

	scp dev:~/db-backup.sql ~/Desktop

Of course, all of this is most effective if you've also got your public key on the servers you are connecting to. If you haven't got your keys configured, there are a million other tutorials online; [here's one on LinuxJournal](http://www.linuxjournal.com/article/8600).