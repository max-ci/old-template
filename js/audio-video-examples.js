// Audio and video examples

(function($, window, document) {

  $(function() {

    // Media element player
    if($().mediaelementplayer) {

      $('.video-default').each(function () {
        $(this).mediaelementplayer({
          // if the <video width> is not specified, this is the default
          defaultVideoWidth: 480,
          // if the <video height> is not specified, this is the default
          defaultVideoHeight: 270,
          // if set, overrides <video width>
          videoWidth: -1,
          // if set, overrides <video height>
          videoHeight: -1,
          // initial volume when the player starts
          startVolume: 0.5,
          // useful for <audio> player loops
          loop: false,
          // the order of controls you want on the control bar (and other plugins below)
          features: ['playpause','current','progress','duration','volume','fullscreen'],
          // Hide controls when playing and mouse is not over the video
          alwaysShowControls: true,
          // when this player starts, it will pause other players
          pauseOtherPlayers: true,
          videoVolume: 'horizontal'
        });
      });

      $('.video-playlist').each(function () {
        $(this).mediaelementplayer({
          // if the <video width> is not specified, this is the default
          defaultVideoWidth: 480,
          // if the <video height> is not specified, this is the default
          defaultVideoHeight: 270,
          // if set, overrides <video width>
          videoWidth: -1,
          // if set, overrides <video height>
          videoHeight: -1,
          // height of audio player
          audioHeight: -200,
          // initial volume when the player starts
          startVolume: 0.5,
          // useful for <audio> player loops
          loop: false,
          // the order of controls you want on the control bar (and other plugins below)
          features: ['playpause','progress','current','duration','volume', 'playlistfeature', 'prevtrack', 'nexttrack', 'playlist', 'fullscreen'],
          // Hide controls when playing and mouse is not over the video
          alwaysShowControls: true,
          // when this player starts, it will pause other players
          pauseOtherPlayers: true,
          playlist: true,
          playlistposition: 'top',
          videoVolume: 'horizontal'
        });
      });

      $('.audio-default').each(function () {
        $(this).mediaelementplayer({
          // width of audio player
          audioWidth: '100%',
          // height of audio player
          audioHeight: 30,
          // initial volume when the player starts
          startVolume: 0.5,
          // useful for <audio> player loops
          loop: false,
          // the order of controls you want on the control bar (and other plugins below)
          features: ['playpause','current','progress','duration','volume'],
          // Hide controls when playing and mouse is not over the video
          alwaysShowControls: true,
          // when this player starts, it will pause other players
          pauseOtherPlayers: true
        });
      });

      $('.audio-playlist').each(function () {
        $(this).mediaelementplayer({
          // width of audio player
          audioWidth: '100%',
          // height of audio player
          audioHeight: 30,
          // initial volume when the player starts
          startVolume: 0.5,
          // useful for <audio> player loops
          loop: false,
          // the order of controls you want on the control bar (and other plugins below)
          features: ['playpause', 'current', 'progress','duration', 'volume', 'playlistfeature', 'prevtrack', 'nexttrack', 'loop', 'shuffle', 'playlist'],
          // Hide controls when playing and mouse is not over the video
          alwaysShowControls: true,
          // when this player starts, it will pause other players
          pauseOtherPlayers: true,
          playlist: true,
          playlistposition: 'bottom'
        });
      });

      $('.mejs-playlist-button').click(function () {
        $(this).closest('.mejs-video').toggleClass('video-playlist');
        $(this).closest('.mejs-audio').toggleClass('audio-playlist');
      });

    }

    // Video Background
    if (typeof video_background === 'function') {

      // Video Background - fixed
      var bgVideoFixed = new video_background($("#video-fixed"), {
        "position": "fixed",      // Follow page scroll
        "z-index": "-10",         // Behind everything
        "loop": true,             // Loop when it reaches the end
        "autoplay": true,         // Autoplay at start
        "muted": true,            // Muted at start
        "youtube": "XSGBVzeBUbk", // Youtube video id
        "start": 6,               // Start with 6 seconds offset (to pass black introduction in this case for example)
        "video_ratio": 1.7778,    // Width/height -> If none provided sizing of the video is set to adjust
        "fallback_image": "../images/pattern1.png", // Fallback image path
      });

      // Video Background - 1
      var bgVideo1 = new video_background($("#video-1"), {
        "position": "absolute",   // Stick within the div
        "z-index": "-1",          // Behind everything
        "loop": true,             // Loop when it reaches the end
        "autoplay": true,         // Autoplay at start
        "muted": true,            // Muted at start
        "youtube": "8vkDbXUL3WE", // Youtube video id
        "start": 30,              // Start with 30 seconds offset (to pass the introduction in this case for example)
        "video_ratio": 1.7778,    // Width/height -> If none provided sizing of the video is set to adjust
        "fallback_image": "../images/pattern1.png", // Fallback image path
      });
      $('.play-toggle').on('click', function () { // Toggle play/pause on button click
        bgVideo1.toggle_play();
        $(this).toggleClass('fa-pause fa-play');
      });
      $('.volume-toggle').on('click', function () { // Toggle volume on/off on button click
        bgVideo1.toggle_mute();
        $(this).toggleClass('fa-volume-off fa-volume-up');
      });

      // Video Background - 2
      var bgVideo2 = new video_background($("#video-2"), {
        "position": "absolute",   // Stick within the div
        "z-index": "-1",          // Behind everything
        "loop": true,             // Loop when it reaches the end
        "autoplay": true,         // Autoplay at start
        "muted": true,            // Muted at start
        "youtube": "ks9DOyVrxcA", // Youtube video id
        "start": 10,              // Start with 10 seconds offset (to pass the introduction in this case for example)
        "video_ratio": 1.7778,    // Width/height -> If none provided sizing of the video is set to adjust
        "fallback_image": "../images/pattern1.png", // Fallback image path
      });

      // Video Background - 3
      var bgVideo3 = new video_background($("#video-3"), {
        "position": "absolute",  // Stick within the div
        "z-index": "-1",         // Behind everything
        "loop": true,            // Loop when it reaches the end
        "autoplay": true,        // Autoplay at start
        "muted": true,           // Muted at start
        "mp4": "videos/1.mp4",   // The path to the mp4 video format
        "webm": "videos/1.webm", // The path to the webm video format
        "start": 20,             // Start with 20 seconds offset (to pass the introduction in this case for example)
        "video_ratio": 1.7778,   // Width/height -> If none provided sizing of the video is set to adjust
        "fallback_image": "../images/pattern1.png", // Fallback image path
      });

      // Video Background - 4
      var bgVideo4 = new video_background($("#video-4"), {
        "position": "absolute",  // Stick within the div
        "z-index": "-1",         // Behind everything
        "loop": true,            // Loop when it reaches the end
        "autoplay": false,       // Autoplay at start
        "muted": true,           // Muted at start
        "mp4": "videos/1.mp4",   // The path to the mp4 video format
        "webm": "videos/1.webm", // The path to the webm video format
        "start": 20,             // Start with 6 seconds offset (to pass the introduction in this case for example)
        "video_ratio": 1.7778,   // Width/height -> If none provided sizing of the video is set to adjust
        "fallback_image": "../images/pattern1.png", // Fallback image path
      });
      $("#video-4").hover(function () { // Toggle play/pause on hover
        bgVideo4.play();
      }, function() {
        bgVideo4.pause();
      });

      // Video Background - 5
      var bgVideo5 = new video_background($("#video-5"), {
        "position": "absolute",   // Stick within the div
        "z-index": "-1",          // Behind everything
        "loop": true,             // Loop when it reaches the end
        "autoplay": true,         // Autoplay at start
        "muted": true,            // Muted at start
        "youtube": "8vkDbXUL3WE", // Youtube video id
        "start": 30,              //Start with 6 seconds offset (to pass the introduction in this case for example)
        "video_ratio": 1.7778,    // Width/height -> If none provided sizing of the video is set to adjust
        "fallback_image": "../images/pattern1.png", // Fallback image path
      });
      $("#video-5").click(function () { // Toggle volume on/off on click
        bgVideo5.toggle_mute();
      });

      // Video Background - 6
      var bgVideo6 = new video_background($("#video-6"), {
        "position": "absolute",  // Stick within the div
        "z-index": "-1",         // Behind everything
        "loop": true,            // Loop when it reaches the end
        "autoplay": true,        // Autoplay at start
        "muted": true,           // Muted at start
        "mp4": "videos/1.mp4",   // The path to the mp4 video format
        "webm": "videos/1.webm", // The path to the webm video format
        "start": 20,             // Start with 20 seconds offset (to pass the introduction in this case for example)
        "video_ratio": 1.7778,   // Width/height -> If none provided sizing of the video is set to adjust
        "fallback_image": "../images/pattern1.png", // Fallback image path
      });

      // Video Background - 7
      var bgVideo7 = new video_background($("#video-7"), {
        "position": "absolute",  // Stick within the div
        "z-index": "-1",         // Behind everything
        "loop": true,            // Loop when it reaches the end
        "autoplay": true,        // Autoplay at start
        "muted": true,           // Muted at start
        "mp4": "videos/1.mp4",   // The path to the mp4 video format
        "webm": "videos/1.webm", // The path to the webm video format
        "start": 20,             // Start with 20 seconds offset (to pass the introduction in this case for example)
        "video_ratio": 1.7778,   // Width/height -> If none provided sizing of the video is set to adjust
        "fallback_image": "../images/pattern1.png", // Fallback image path
      });

      // Video Background - 8
      var bgVideo8 = new video_background($("#video-8"), {
        "position": "absolute",  // Stick within the div
        "z-index": "-1",         // Behind everything
        "loop": true,            // Loop when it reaches the end
        "autoplay": true,        // Autoplay at start
        "muted": true,           // Muted at start
        "mp4": "videos/1.mp4",   // The path to the mp4 video format
        "webm": "videos/1.webm", // The path to the webm video format
        "start": 20,             // Start with 20 seconds offset (to pass the introduction in this case for example)
        "video_ratio": 1.7778,   // Width/height -> If none provided sizing of the video is set to adjust
        "fallback_image": "../images/pattern1.png", // Fallback image path
      });

      // Video Background - 9
      var bgVideo9 = new video_background($("#video-9"), {
        "position": "absolute",  // Stick within the div
        "z-index": "-1",         // Behind everything
        "loop": true,            // Loop when it reaches the end
        "autoplay": true,        // Autoplay at start
        "muted": true,           // Muted at start
        "mp4": "videos/1.mp4",   // The path to the mp4 video format
        "webm": "videos/1.webm", // The path to the webm video format
        "start": 20,             // Start with 20 seconds offset (to pass the introduction in this case for example)
        "video_ratio": 1.7778,   // Width/height -> If none provided sizing of the video is set to adjust
        "fallback_image": "../images/pattern1.png", // Fallback image path
      });

      // Video Background - 10
      var bgVideo10 = new video_background($("#video-10"), {
        "position": "absolute",  // Stick within the div
        "z-index": "-1",         // Behind everything
        "loop": true,            // Loop when it reaches the end
        "autoplay": true,        // Autoplay at start
        "muted": true,           // Muted at start
        "mp4": "videos/1.mp4",   // The path to the mp4 video format
        "webm": "videos/1.webm", // The path to the webm video format
        "start": 20,             // Start with 20 seconds offset (to pass the introduction in this case for example)
        "video_ratio": 1.7778,   // Width/height -> If none provided sizing of the video is set to adjust
        "fallback_image": "../images/pattern1.png", // Fallback image path
      });

      // Video Background - 11
      var bgVideo11 = new video_background($("#video-11"), {
        "position": "absolute",  // Stick within the div
        "z-index": "-1",         // Behind everything
        "loop": true,            // Loop when it reaches the end
        "autoplay": true,        // Autoplay at start
        "muted": true,           // Muted at start
        "mp4": "videos/1.mp4",   // The path to the mp4 video format
        "webm": "videos/1.webm", // The path to the webm video format
        "start": 20,             // Start with 20 seconds offset (to pass the introduction in this case for example)
        "video_ratio": 1.7778,   // Width/height -> If none provided sizing of the video is set to adjust
        "fallback_image": "../images/pattern1.png", // Fallback image path
      });

    }

  });

}(window.jQuery, window, document));