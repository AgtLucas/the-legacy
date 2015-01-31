---
layout: post
title: "Bower to rescue"
date: 2014-02-12 08:00:00
categories: blog
description: Managing dependencies with bower, like a boss
---

<div class="wrapper" markdown="1">
Was a time, we (Front-Enders and no Front-Enders too) used to manage dependencies with the CCCV method.

The CCCV method (aka CMD + C, CMD + V or CTRL + C, CTRL + V) is a pain! A lot of people still using this method nowadays.

Meet <a href="http://bower.io" target="_blank">Bower</a>!

<img src="/img/bower-logo.png" alt="Bower - A package manager for the web">

>Bower is a package manager for the web. It offers a generic, unopinionated solution to the problem of front-end package management, while exposing the package dependency model via an API that can be consumed by a more opinionated build stack. There are no system wide dependencies, no dependencies are shared between different apps, and the dependency tree is flat.

>Bower runs over Git, and is package-agnostic. A packaged component can be made up of any type of asset, and use any type of transport (e.g., AMD, CommonJS, etc.).

Let's install bower (I don't need ask to you if you have Node.js installed, right?):
</div>

{% highlight bash %}
[sudo] npm install -g bower
{% endhighlight %}

<div class="wrapper" markdown="1">
Now, we can create to files, `bower.json` and `.bowerrc`. The first one will contain all our dependencies, the second one, the Bower configuration, like the location of Bower installation, etc.

Here's an example of a `bower.json` file, if you're familiar with Node.js... package.json...
</div>

{% highlight json %}
{
  "name": "project-name",
  "version": "0.0.0",
  "dependencies": {
    "lodash": "~2.4.1",
    "jquery": "2.1.0",
    "normalize-css": "~3.0.0"
  }
}
{% endhighlight %}

<div class="wrapper" markdown="1">
And `.bowerrc`:
</div>

{% highlight json %}
{
  "directory": "path-to-bower-dependencies"
}
{% endhighlight %}

<div class="wrapper" markdown="1">
Like you see above, you can set a directory path where Bower will store our dependencies, the default directory name is `bower_components`. Personally, I don't like this name...

Everything setting, now it's time to tell Bower to work!
</div>

{% highlight bash %}
bower install
{% endhighlight %}

<div class="wrapper" markdown="1">
Ensure that you run this command at the same level of the bower configurations files (`bower.json` and `.bowerrc`).

That's it!

<img src="/img/yougotitdude.jpg" alt="You got it, dude!">
</div>
