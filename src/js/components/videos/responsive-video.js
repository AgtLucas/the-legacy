var fluidvids = require('fluidvids.js/dist/fluidvids')()

var rwdVideos = function () {
  fluidvids.init({
    selector: ['iframe', 'object'],
    players: ['www.youtube.com', 'player.vimeo.com']
  })
}

module.exports = {
  rwdVideos: rwdVideos
}
