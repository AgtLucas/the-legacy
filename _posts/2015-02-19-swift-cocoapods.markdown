---
layout: post
title:  "Swift + Cocoapods"
date:   2015-02-19 07:50:00
categories: blog
description: How to use Swift + Cocoapods
---

<div class="wrapper" markdown="1">
Yo!

So, in the later days I've been digging into Swift, yeah, the Apple language for iOS and OS X, it's rad!

But one of the things that I got stuck was how to use <a href="http://cocoapods.org/" target="_blank">Cocoapods</a> with Swift, 'cause we can't just `#import <things/things.h>` in our `.swift` files.

First of all, if you install the beta version of cocoapods, you can simply import your `pods` with Swift syntax.

But, if you're using the stable version of the cocoapods, you must create a "bridge" (a header file), we can do that by simply creating an Objective-C `Cocoa Touch Class`:

<img src="/img/cocoa-touch.png" alt="Creating a Objective-C Cocoa Touch Class" />

Name this file with whatever you want and hit next, select the folder of your app and click create, when you click create, the following popup will appear:

<img src="/img/save.png" alt="Popup, wow!" />

Just click yes and we're done, now you can delete the Cocoa Touch Class file that you just create!

Now you're ready to import your `pods` in the header file, like so:
</div>

{% highlight objective-c %}
//
//  Use this file to import your target's public headers that you would like to expose to Swift.
//

#import <FlatUIKit/UIColor+FlatUI.h>
#import <MKUnits/MKUnits.h>
{% endhighlight %}

<div class="wrapper" markdown="1">
That's it!
</div>
