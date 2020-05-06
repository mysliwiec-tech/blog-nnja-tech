---
title: Share your first file over IPFS
description: Let's build a truly decentralized Internet from the ground up and share our first file with the world
author: Dariusz Myśliwiec
created_on: '2020-05-06'
updated_on: '2020-04-26'
cover_image: images/ipfs-world.jpg
cover_image_author: 'John Smith'
---
## What is IPFS?
It's a protocol that helps computers to exchange data between them without a need of centralized servers. That opens a lot of opportunities like:
- shared files can't be deleted (censor free)
- data could be distributed across multiple machines (no single point of failure)
- data can be downloaded faster (works similar to CDN, but decentralized; data can be downloaded from multiple computers simultaneously)

## How to get started?
Simply, go to https://ipfs.io/ and click the "Install" link in the navigator. There are multiple ways of getting started and it depends on how experienced you are (I'll go just through the basic options now):
- **Desktop App** - nice app with a GUI (Graphical User Interface), tray icon, integration with OS - probably the best choice if you want to install it with "one-click". It is the most convenient way to get started. Also comes with an addon of `npm-ipfs` - a nice addon which allows to fetch `npm` packages through IPFS. Nice-to-have for all Node.js developers and actually you will be using the benefits of IPFS every time you fetch any package :-)
- **Command Line** - probably the best option for tech-savvy users, gives you the access to all features of IPFS. We will cover this in later posts. It also comes preinstalled with the 'Desktop app'
- **Browser Extension** - as name says, provides you with a way of accessing IPFS network through a browser. A good helper if you would like to browse websites that reside on IPFS. The extension can check if a website is available on IPFS network when you enter the website's address and serve you it's content through IPFS. Implements an IPFS node in JS. Slower, but works!

Pick which option is best for you!

![IPFS has variety of clients available](images/ipfs-variety-of-clients.png)

Next, you are redirected to GitHub page or Chrome Extension Store. The installation from Store requires just to click the "Add to (browser_name)" button. In the latter go to the "Releases" on GitHub and select a suitable version for you.

![Click "Releases"](images/github-releases.png)
![Select the right version for your OS](images/github-ipfs-assets.png)

Once you have it installed, open the app from a try by clicking on the tray icon and then selecting "Status". You will be presented with an app interface.

Go to "Files" -> "Add +" -> "File". Select any file that you want to share :-) The file will appear bellow on the list together with an `IPFS Hash`. Copy it and try to access it by going to `https://ipfs.io/ipfs/<hash>`. It might take a while for it to be displayed, but the more active connections you have to other IPFS peers, the quicker it can be discovered by others.