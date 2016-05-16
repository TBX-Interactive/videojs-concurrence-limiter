var PlayerModule = PlayerModule || (function () {

    var player = videojs('myVideo',
    {
        controls: true,
        width: 320,
        height: 240,
        plugins: {
          concurrenceview: {
            playerID: Math.random().toString(32),
            accessurl: '/path/to/limiter-server' + '/canplay',
            updateurl: '/path/to/limiter-server' + '/nowplaying',
            disposeurl: '/path/to/limiter-server' + '/stop',
            startPosition: 123
          }

        }
    });

    /**
     * HANDLERS
     **/

    // error handling
    player.on('deviceError', function() {
        console.log('device error:', player.deviceErrorCode);
    });

    player.on('error', function(error) {
        console.log('error:', error);
    });

})();
