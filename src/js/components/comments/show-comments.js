'use strict';

var loadDisqus = require('./load-disqus');

var showComments = function () {
  var showComments = document.getElementById('show-comments');

  if (showComments) {
    showComments.addEventListener('click', function () {
      showComments.parentNode.removeChild(showComments);
      loadDisqus();
    });
  }
};

module.exports = {
  showComments: showComments
};
