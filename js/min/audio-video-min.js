!function($,e,o){$(function(){if($().mediaelementplayer&&($(".video-default").each(function(){$(this).mediaelementplayer({defaultVideoWidth:480,defaultVideoHeight:270,videoWidth:-1,videoHeight:-1,startVolume:.5,loop:!1,features:["playpause","current","progress","duration","volume","fullscreen"],alwaysShowControls:!0,pauseOtherPlayers:!0,videoVolume:"horizontal"})}),$(".video-playlist").each(function(){$(this).mediaelementplayer({defaultVideoWidth:480,defaultVideoHeight:270,videoWidth:-1,videoHeight:-1,audioHeight:-200,startVolume:.5,loop:!1,features:["playpause","progress","current","duration","volume","playlistfeature","prevtrack","nexttrack","playlist","fullscreen"],alwaysShowControls:!0,pauseOtherPlayers:!0,playlist:!0,playlistposition:"top",videoVolume:"horizontal"})}),$(".audio-default").each(function(){$(this).mediaelementplayer({audioWidth:"100%",audioHeight:30,startVolume:.5,loop:!1,features:["playpause","current","progress","duration","volume"],alwaysShowControls:!0,pauseOtherPlayers:!0})}),$(".audio-playlist").each(function(){$(this).mediaelementplayer({audioWidth:"100%",audioHeight:30,startVolume:.5,loop:!1,features:["playpause","current","progress","duration","volume","playlistfeature","prevtrack","nexttrack","loop","shuffle","playlist"],alwaysShowControls:!0,pauseOtherPlayers:!0,playlist:!0,playlistposition:"bottom"})}),$(".mejs-playlist-button").on("click",function(){$(this).closest(".mejs-video").toggleClass("video-playlist"),$(this).closest(".mejs-audio").toggleClass("audio-playlist")})),"function"==typeof video_background){var e=new video_background($("#video-fixed"),{position:"fixed","z-index":"-10",loop:!0,autoplay:!0,muted:!0,youtube:"XSGBVzeBUbk",start:6,video_ratio:1.7778,fallback_image:"../images/pattern1.png"}),o=new video_background($("#video-1"),{position:"absolute","z-index":"-1",loop:!0,autoplay:!0,muted:!0,youtube:"8vkDbXUL3WE",start:30,video_ratio:1.7778,fallback_image:"../images/pattern1.png"});$(".play-toggle").on("click",function(){o.toggle_play(),$(this).toggleClass("fa-pause fa-play")}),$(".volume-toggle").on("click",function(){o.toggle_mute(),$(this).toggleClass("fa-volume-off fa-volume-up")});var a=new video_background($("#video-2"),{position:"absolute","z-index":"-1",loop:!0,autoplay:!0,muted:!0,youtube:"ks9DOyVrxcA",start:10,video_ratio:1.7778,fallback_image:"../images/pattern1.png"}),t=new video_background($("#video-3"),{position:"absolute","z-index":"-1",loop:!0,autoplay:!0,muted:!0,mp4:"videos/1.mp4",webm:"videos/1.webm",start:20,video_ratio:1.7778,fallback_image:"../images/pattern1.png"}),i=new video_background($("#video-4"),{position:"absolute","z-index":"-1",loop:!0,autoplay:!1,muted:!0,mp4:"videos/1.mp4",webm:"videos/1.webm",start:20,video_ratio:1.7778,fallback_image:"../images/pattern1.png"});$("#video-4").hover(function(){i.play()},function(){i.pause()});var l=new video_background($("#video-5"),{position:"absolute","z-index":"-1",loop:!0,autoplay:!0,muted:!0,youtube:"8vkDbXUL3WE",start:30,video_ratio:1.7778,fallback_image:"../images/pattern1.png"});$("#video-5").click(function(){l.toggle_mute()});var s=new video_background($("#video-6"),{position:"absolute","z-index":"-1",loop:!0,autoplay:!0,muted:!0,mp4:"videos/1.mp4",webm:"videos/1.webm",start:20,video_ratio:1.7778,fallback_image:"../images/pattern1.png"}),d=new video_background($("#video-7"),{position:"absolute","z-index":"-1",loop:!0,autoplay:!0,muted:!0,mp4:"videos/1.mp4",webm:"videos/1.webm",start:20,video_ratio:1.7778,fallback_image:"../images/pattern1.png"}),n=new video_background($("#video-8"),{position:"absolute","z-index":"-1",loop:!0,autoplay:!0,muted:!0,mp4:"videos/1.mp4",webm:"videos/1.webm",start:20,video_ratio:1.7778,fallback_image:"../images/pattern1.png"}),u=new video_background($("#video-9"),{position:"absolute","z-index":"-1",loop:!0,autoplay:!0,muted:!0,mp4:"videos/1.mp4",webm:"videos/1.webm",start:20,video_ratio:1.7778,fallback_image:"../images/pattern1.png"}),p=new video_background($("#video-10"),{position:"absolute","z-index":"-1",loop:!0,autoplay:!0,muted:!0,mp4:"videos/1.mp4",webm:"videos/1.webm",start:20,video_ratio:1.7778,fallback_image:"../images/pattern1.png"}),r=new video_background($("#video-11"),{position:"absolute","z-index":"-1",loop:!0,autoplay:!0,muted:!0,mp4:"videos/1.mp4",webm:"videos/1.webm",start:20,video_ratio:1.7778,fallback_image:"../images/pattern1.png"})}})}(window.jQuery,window,document);