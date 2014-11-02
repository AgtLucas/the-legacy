var app = (function (window, document, undefined) {

  var app = {

    init: function () {
      this.alerter();
    },

    alerter: function () {
      alert('WOW!!!');
    }

  };

  return app.init();

})(window, document);