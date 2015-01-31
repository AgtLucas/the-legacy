'use strict';

var loadDisqus = function () {
  var disqus_shortname = 'agt-lucas',
    disqus_url = 'http://lucas.ninja/blog{{ page.url }}',
    dsq = document.createElement('script');

  dsq.type = 'text/javascript';
  dsq.async = true;
  dsq.src = 'http://' + disqus_shortname + '.disqus.com/embed.js';
  (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);

};

module.exports = loadDisqus;
