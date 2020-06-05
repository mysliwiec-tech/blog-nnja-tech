---
title: Put your first website on Textile Buckets
description: With a recent update to Textile you can do many things easier. In this post we will put our static website on dweb
author: Dariusz Myśliwiec
created_on: '2020-05-08'
updated_on: '2020-05-08'
cover_image: images/cover/bucket.jpg
cover_image_author: 'Photo by Jeff Kingma on Unsplash'
---
## Textile Bucket
With [a recent big release](https://blog.textile.io/announcing-the-textile-protocol-hub/) of Textile Hub and `tt` toolset, we can now start publishing dweb websites and apps with ease. Textile is a company that makes good efforts to build apps and technology that makes dWeb a place more private for a user as well as not much different to what the user got used to while using internet as he knows it.

About one year ago, they have released the [Textile Photo](https://github.com/textileio/photos), which tries to make Google Photos obsolete in terms of backing up your photo memories. The biggest adventage is that user can have his pictures backed up on his or oter nodes, but encrypted. It has been built on Textile Threads which is another technology to have a CRUD database served on IPFS and it works well! Thanks to the approach to make it MongoDB-like there is almost no learning curve while using it.

Last days, they have released the `tt` tool, which is a combination of IPFS pinning service together with Thread managing service. You just create a passwordless account and you can start pushing things to IPFS nodes while they are pinned on Textile nodes on your behalf.

![tt command help](images/post/textile/tt.png)

**Textile Bucket** is just a storage, which feels like S3 object-storage. You can add/modify/remove data like to buckets on Amazon, but on IPFS. As what is added to IPFS is immutuable, they use the IPNS to point to the right content and to track made changes they use underlaying Threads. Smart - isn't it?

## How to get started?
### Download and install
Once you got a `tt` [downloaded](https://github.com/textileio/textile/releases/latest) and [installed](https://docs.textile.io/hub/accounts/), type in `tt init` and provide your email address, select a nickname and confirm the email that will arrive to your mailbox. That will create you an account and let you access your resources from any place.

### Create a bucket
Next, it's important to create a directory inside which we will keep our data. So create a new one and execute `tt bucket init` from it. Even though the naming is optional, think of something short and descriptive. It will help to keep things organized later.

![tt bucket init](images/post/textile/tt_bucket_init.png)

### Copy and publish your website's files
IPFS is perfect to host static websites. For that reason I exported my blog, which is build on Next.js. Just two commands were needed: `next build` and `next export`. I copy over the `out` directory from the root folder of my Next.js project, which is the standard one for rendered static websites and place the content of it to the directory created in the previous step.

Now, you can just do `tt bucket push . .` (which stands for push to root of current bucket, all files and it's subdirectories). When all of the files will be deployed to Textile Hub, you will be able to access your decentalized website from any IPFS gateway, even your own.

![tt bucket push . .](images/post/textile/tt_bucket_push_._..png)

### View current website
To do so, execute `tt bucket links`. You will be displayed with a bunch of them. First one is pointing to the directory view of your files, second one is having immutualble pointer to your website. Third one is just a pointer to other gateway.

![tt bucket links](images/post/textile/tt_bucket_list.png)

To access it from any other gateway, you just need find one that understands `/ipns/..` links (most of them are capable of it and there are plenty of them [here](https://ipfs.github.io/public-gateway-checker/)). It's also good to remember that those without "Origin" capability probably will cause issues if your website relative hyperlinks or images added in for of relative links. That's because of how relative linked content is handled by a browser.

![IPFS Public Gateway Checker](images/post/ipfs/public-gateway-checker.png)

And probably the most exciting thing - if you or somebody else got a self-hosted gateway, you can access your website directly from it. Just go to `http://<your_gateway_ip>/ipns/<ipns_hash>`! Happy dWebbing :D