$(document).ready(function(){function t(){l=!0,a.text("Stop")}function e(){l=!1,clearTimeout(c),a.text("Slideshow")}function i(t,e){t=$("<div />",{"class":"dialogue clearfix"}).append(t),$.iLightBox([{URL:t,type:"html",title:e?e:null}],{skin:"metro-white ilightbox-dialogue",minScale:1,innerToolbar:!0,show:{effect:!1},hide:{effect:!1},overlay:{blur:!1},controls:{fullscreen:!1},callback:{onRender:function(t){$(".btn",t.currentElement).click(function(){$(".btn",t.currentElement).unbind("click"),t.hide()})},onShow:function(t){$(".btn-primary",t.currentElement).focus()}}})}function o(t,e){var t=$("<p />",{html:t,"class":"dialogue_message"}),o=$("<button />",{html:"OK","class":"btn btn-primary",keyup:function(t){13==t.keyCode&&$(this).trigger("click")}});i(t.add(o),e)}function s(t,e,o,s){var n=$("<p />",{html:t,"class":"dialogue_message"}),a=$("<input />",{type:"text",val:o}),l=$("<div />",{"class":"clear"}),r=$("<button />",{html:"OK","class":"btn btn-primary",click:function(){s(a.val())},keyup:function(t){13==t.keyCode&&$(this).trigger("click")}}),c=$("<button />",{html:"Cancel","class":"btn",click:function(){s(null)}});i(n.add(a).add(l).add(r).add(c),e)}function n(t,e,o){var s=$("<p />",{html:t}),n=$("<button />",{html:"Yes","class":"btn btn-primary",click:function(){o(!0)},keyup:function(t){13==t.keyCode&&$(this).trigger("click")}}),a=$("<button />",{html:"No","class":"btn",click:function(){o(!1)}});i(s.add(a).add(n),e,function(){o(!1)})}$("#singleimage_1").iLightBox({skin:"custom",path:"horizontal",show:{title:!1},smartRecognition:!0,linkId:"gallery1",social:{buttons:{facebook:{text:"Share this photo on Facebook"},twitter:{text:"Share this photo on Twitter"},googleplus:{text:"Share this photo on Google+"},pinterest:{text:"Share this photo on Pinterest"},instagram:{text:"Share this photo on Instagram"}}},controls:{thumbnail:!1,fullscreen:!1,slideshow:!1}}),$("#singleimage_2").iLightBox({skin:"custom"}),$("#singleimage_3").iLightBox({skin:"custom"}),$("#singleimage_4").iLightBox({skin:"custom"}),$("#image_gallery a").iLightBox({skin:"custom",linkId:"gallery",social:{buttons:{facebook:{text:"Share this on Facebook"},twitter:{text:"Share this on Twitter"},googleplus:{text:"Share this on Google+"},pinterest:{text:"Share this on Pinterest"},instagram:{text:"Share this on Instagram"}}}}),$("#deeplinking_looping_gallery a").iLightBox({skin:"custom",path:"horizontal",fullViewPort:"fill",infinite:!0,linkId:"music",overlay:{opacity:1,blur:!1},controls:{thumbnail:!1},styles:{nextOffsetX:-45,prevOffsetX:-45}}),$("#inline_gallery").click(function(){return $.iLightBox([{URL:"../images/bs/bigstock1.jpg",type:"image",options:{thumbnail:"/../images/bs/bigstock1.jpg"}},{URL:"../images/bs/bigstock2.jpg",type:"image",options:{thumbnail:"/../images/bs/bigstock2.jpg"}},{URL:"../images/bs/bigstock3.jpg",type:"image",options:{thumbnail:"/../images/bs/bigstock3.jpg"}},{URL:"../images/bs/bigstock4.jpg",type:"image",options:{thumbnail:"/../images/bs/bigstock4.jpg"}},{URL:"../images/bs/bigstock5.jpg",type:"image",options:{thumbnail:"/../images/bs/bigstock5.jpg"}},{URL:"../images/bs/bigstock6.jpg",type:"image",options:{thumbnail:"/../images/bs/bigstock6.jpg"}},{URL:"../images/bs/bigstock7.jpg",type:"image",options:{thumbnail:"/../images/bs/bigstock7.jpg"}},{URL:"../images/bs/bigstock8.jpg",type:"image",options:{thumbnail:"/../images/bs/bigstock8.jpg"}},{URL:"../images/bs/bigstock9.jpg",type:"image",options:{thumbnail:"/../images/bs/bigstock9.jpg"}},{URL:"../images/bs/bigstock10.jpg",type:"image",options:{thumbnail:"/../images/bs/bigstock10.jpg"}},{URL:"../images/bs/bigstock11.jpg",type:"image",options:{thumbnail:"/../images/bs/bigstock11.jpg"}},{URL:"../images/bs/bigstock12.jpg",type:"image",options:{thumbnail:"/../images/bs/bigstock12.jpg"}},{URL:"../images/bs/bigstock13.jpg",type:"image",options:{thumbnail:"/../images/bs/bigstock13.jpg"}},{URL:"../images/bs/bigstock14.jpg",type:"image",options:{thumbnail:"/../images/bs/bigstock14.jpg"}},{URL:"../images/bs/bigstock15.jpg",type:"image",options:{thumbnail:"/../images/bs/bigstock15.jpg"}},{URL:"../images/bs/bigstock16.jpg",type:"image",options:{thumbnail:"/../images/bs/bigstock16.jpg"}}],{startFrom:3,skin:"custom",path:"horizontal",maxScale:1.3,overlay:{opacity:.4},styles:{nextOffsetX:75,nextOpacity:.55,prevOffsetX:75,prevOpacity:.55},thumbnails:{normalOpacity:.6,activeOpacity:1}}),!1}),$("#forceresize").iLightBox({attr:"photo",skin:"custom",innerToolbar:!0,overlay:{opacity:.7},controls:{fullscreen:!1}}),$("#cycling_arrows").click(function(){return $.iLightBox([{URL:"../images/bs/bigstock1.jpg",options:{thumbnail:"../images/bs/bigstock1.jpg"},caption:"Presenting Tonia Sotiropoulou, in a new 2012 shooting. Tonia is currently in the big screen with James Bond's Skyfall. This photo is a sample for magazine use, more photos will follow in the future. See previous work with her at <a href='http://nikosalpha.com/tonia'>nikosalpha.com/tonia</a>."},{URL:"../images/bs/bigstock2.jpg",options:{thumbnail:"../images/bs/bigstock2.jpg"},caption:"Presenting Catharine. She is a young multitalented beautiful voice singing in the UK. Follow her work <a href='https://www.facebook.com/CatharineAmorosoMusic'>here</a>"},{URL:"../images/bs/bigstock3.jpg",options:{thumbnail:"../images/bs/bigstock3.jpg"}},{URL:"../images/bs/bigstock4.jpg",options:{thumbnail:"../images/bs/bigstock4.jpg"},caption:"One more photo of one of my favorite subjects, the Lips. I decided to create a unique tag in my website only for them. Here they are so far: <a href='http://nikosalpha.com/lips'>nikosalpha.com/lips</a>."},{URL:"../images/bs/bigstock5.jpg",options:{thumbnail:"../images/bs/bigstock5.jpg"},caption:"The sweetest piece of my life"},{URL:"../images/bs/bigstock6.jpg",options:{thumbnail:"../images/bs/bigstock6.jpg"},caption:"New session with the singer Valerie Kalenti! (:"}],{skin:"custom",path:"horizontal",fullAlone:0,controls:{thumbnail:0,arrows:1,slideshow:1}}),!1}),$("#image_recognizer").click(function(){var t={facebook:!0,twitter:!0,googleplus:{source:"https://plus.google.com/share?url={URL}",text:"Share on Google+"},digg:{width:800,height:480}};return $.iLightBox([{URL:"http://instagram.com/p/P72Lw9Oc7L/",caption:"This one recognized from this <a href='http://instagram.com/p/P72Lw9Oc7L/' target='_blank'>URL</a> on instagram.",options:{social:$.extend(!0,{},t,{facebook:{URL:"http://instagram.com/p/P72Lw9Oc7L/"},twitter:{URL:"http://instagram.com/p/P72Lw9Oc7L/"},googleplus:{URL:"http://instagram.com/p/P72Lw9Oc7L/"},digg:{URL:"http://instagram.com/p/P72Lw9Oc7L/"}})}},{URL:"http://www.flickr.com/photos/bruce-hood/8584616829/",caption:"This one recognized from this <a href='http://www.flickr.com/photos/bruce-hood/8584616829/' target='_blank'>URL</a> on flickr.",options:{social:{facebook:{URL:"http://www.flickr.com/photos/bruce-hood/8584616829/"},twitter:{URL:"http://www.flickr.com/photos/bruce-hood/8584616829/"}}}},{URL:"http://oer-wout.deviantart.com/art/Amber-473365198",caption:"This one recognized from this <a href='http://oer-wout.deviantart.com/art/Amber-473365198' target='_blank'>URL</a> on deviantArt.",options:{social:$.extend(!0,{},t,{facebook:{URL:"http://oer-wout.deviantart.com/art/Amber-473365198"},twitter:{URL:"http://oer-wout.deviantart.com/art/Amber-473365198"},googleplus:{URL:"http://oer-wout.deviantart.com/art/Amber-473365198"},digg:{URL:"http://oer-wout.deviantart.com/art/Amber-473365198"}})}}],{smartRecognition:!0,skin:"smooth",path:"horizontal",fullAlone:!1,caption:{start:!1},social:{start:!1,buttons:t},styles:{nextScale:.6,prevScale:.6,nextOpacity:.6,prevOpacity:.6},thumbnails:{normalOpacity:.6,activeOpacity:1}}),!1}),$("#inline_html_simple").iLightBox({attr:"target",skin:"metro-white"}),$("#inline_html_forced").click(function(){return $.iLightBox([{URL:"#demo_inline_element",type:"inline",options:{width:720,height:360}}],{skin:"metro-white"}),!1}),$("#ajax_simple").iLightBox({attr:"target",overlay:{opacity:.6},skin:"parade",minScale:1}),$("#ajax_forced").iLightBox({attr:"target",overlay:{opacity:.6},skin:"parade",minScale:1}),$("#ajax_modal").iLightBox({attr:"target",innerToolbar:!0,overlay:{opacity:.6,blur:!1},controls:{fullscreen:!1},keyboard:{esc:!1},skin:"parade",minScale:1}),$("#flash_simple").iLightBox({innerToolbar:!0,controls:{fullscreen:!1},skin:"dark"}),$("#flash_forced").iLightBox({innerToolbar:!0,controls:{fullscreen:!1},minScale:1}),$("#iframe_1").iLightBox(),$("#iframe_2").iLightBox({minScale:1}),$("#iframe_3").iLightBox({minScale:1}),$("#DOM").click(function(){var t=$('<div class="center"><h2><img src="assets/img/smile.gif">It\'s time to upgrade.</h2><hr><p>iLightBox supports DOM elements created on the fly.</p></div>');return $.iLightBox([{URL:t,type:"html"}],{innerToolbar:!0,controls:{fullscreen:!1},skin:"parade",minScale:1}),!1}),$("#video_1").iLightBox(),$("#video_2").iLightBox(),$("#video_3").iLightBox(),$("#video_html5").iLightBox(),$("#video_4").iLightBox({smartRecognition:!0}),$("#video_5").iLightBox({smartRecognition:!0}),$("#video_6").iLightBox({smartRecognition:!0}),$("#video_7").iLightBox({smartRecognition:!0}),$("#video_8").iLightBox({smartRecognition:!0}),$("#video_9").iLightBox({smartRecognition:!0}),$("#video_gallery").click(function(){return $.iLightBox([{URL:"http://www.youtube.com/watch?v=_pV2zz3z0oM"},{URL:"http://vimeo.com/55331511"},{URL:"http://www.hulu.com/watch/424558"},{URL:"http://www.metacafe.com/watch/9542534/man_of_steel_trailer/"},{URL:"http://www.dailymotion.com/video/xp53r5_the-avengers-official-trailer-2_shortfilms"},{URL:"http://www.gametrailers.com/videos/za4633/crysis-3-the-7-wonders---episode-1--hell-of-a-town",options:{width:1280,height:720}}],{smartRecognition:!0,skin:"dark",overlay:{blur:!1},keyboard:{esc:!1},styles:{nextOpacity:.55,prevOpacity:.55}}),!1}),$("#mixed_contents").click(function(){return $.iLightBox([{URL:"http://iprodev.com/ilightbox/assets/MV5BMTM1NTMyMDE4OV5BMTFeQW1wNF5BbWU3MDEyNTI0OTU.mp4",options:{thumbnail:"assets/img/thumbnails/sherlock_holmes/trailer.jpg",html5video:{webm:"http://iprodev.com/ilightbox/assets/MV5BMTM1NTMyMDE4OV5BMTFeQW1wNF5BbWU3MDEyNTI0OTU.webm",poster:"assets/img/sherlock_holmes/trailer.jpg"},width:1280,height:544}},{URL:"assets/img/sherlock_holmes/1.jpg",caption:"This one fill the screen when you enter fullscreen.",options:{thumbnail:"assets/img/thumbnails/sherlock_holmes/1.jpg",fullViewPort:"fill"}},{URL:"assets/img/sherlock_holmes/2.jpg",caption:"This one fit to the screen when you enter fullscreen.",options:{thumbnail:"assets/img/thumbnails/sherlock_holmes/2.jpg",fullViewPort:"fit"}},{URL:"http://www.youtube.com/embed/lNxhpNpnAkk?autohide=1&border=0&egm=0&showinfo=0&showsearch=0",options:{thumbnail:"assets/img/thumbnails/sherlock_holmes/mqdefault.jpg",fullViewPort:"stretch",icon:"video",width:1280,height:720}},{URL:"assets/img/sherlock_holmes/3.jpg",options:{thumbnail:"assets/img/thumbnails/sherlock_holmes/3.jpg"}},{URL:"assets/img/sherlock_holmes/4.jpg",options:{thumbnail:"assets/img/thumbnails/sherlock_holmes/4.jpg"}},{URL:"assets/img/sherlock_holmes/5.jpg",options:{thumbnail:"assets/img/thumbnails/sherlock_holmes/5.jpg"}},{URL:"assets/img/sherlock_holmes/6.jpg",options:{thumbnail:"assets/img/thumbnails/sherlock_holmes/6.jpg"}},{URL:"assets/img/sherlock_holmes/7.jpg",options:{thumbnail:"assets/img/thumbnails/sherlock_holmes/7.jpg"}},{URL:"assets/img/sherlock_holmes/8.jpg",options:{thumbnail:"assets/img/thumbnails/sherlock_holmes/8.jpg"}}],{path:"horizontal",skin:"metro-black",styles:{nextOpacity:0,prevOpacity:0}}),!1}),$("#google_maps").click(function(){return $.iLightBox([{URL:"assets/ajax/maps.html",options:{width:720,height:420},type:"iframe"}],{minScale:1,skin:"metro-black"}),!1});var a=$('<a class="btn btn-primary slideshow_button">Slideshow</a>'),l=!1,r=5e3,c=null;$("ul#image_gallery_with_slideshow li a").iLightBox({skin:"metro-white",path:"horizontal",controls:{thumbnail:!1},styles:{pageOffsetY:100,nextScale:.6,prevScale:.6,nextOpacity:.6,prevOpacity:.6},effects:{switchSpeed:700},callback:{onOpen:function(){var i=this;$("body").append(a),a.on("click",function(){l?e():(i.vars.current==i.vars.total-1&&i.goTo(0),t(),c=setTimeout(function(){i.moveTo("next")},r))})},onHide:function(){a.off("click").hide().remove()},onAfterLoad:function(){a.fadeIn(this.options.effects.loadedFadeSpeed)},onBeforeChange:function(){clearTimeout(c)},onAfterChange:function(t){var i=this;l&&(t.currentItem==this.vars.total-1?e():c=setTimeout(function(){i.moveTo("next")},r))},onEnterFullScreen:function(){a.hide(),clearTimeout(c)},onExitFullScreen:function(){var t=this;a.show(),l&&t.vars.current!=t.vars.total-1&&(c=setTimeout(function(){t.moveTo("next")},r))}}}),$("#show_alert").click(function(){o("Custom alert() functions are cool.","Alert!")}),$("#show_prompt").click(function(){s("How would you describe iLightBox?","Attention!","Awesome!",function(t){alert(t)})}),$("#show_confirm").click(function(){n("Click Yes if you love iLightBox","Do you agree?",function(t){alert(t)})}),$("#events_gallery").click(function(){var t=$("#pre_events");return $.iLightBox([{URL:"assets/img/photos/MS-test-day-27898.jpg",options:{thumbnail:"assets/img/thumbnails/MS-test-day-27898.jpg"},type:"image",caption:"First Caption. It'll blow your mind."},{URL:"assets/img/photos/MS-test-day-27771.jpg",options:{thumbnail:"assets/img/thumbnails/MS-test-day-27771.jpg"},type:"image",caption:"Oh yeah, it's that good. See for yourself."},{URL:"assets/img/photos/MS-test-day-27845.jpg",options:{thumbnail:"assets/img/thumbnails/MS-test-day-27845.jpg"},type:"image",caption:"And lastly, this one. Checkmate."},{URL:"assets/img/photos/MS-test-day-27780.jpg",options:{thumbnail:"assets/img/thumbnails/MS-test-day-27780.jpg"},type:"image"},{URL:"assets/img/photos/MS-test-day-278081.jpg",options:{thumbnail:"assets/img/thumbnails/MS-test-day-278081.jpg"},type:"image"},{URL:"assets/img/photos/MS-test-day-27749.jpg",options:{thumbnail:"assets/img/thumbnails/MS-test-day-27749_2.jpg"},type:"image"}],{path:"horizontal",overlay:{opacity:.7},callback:{onOpen:function(){var e=new Date;t.append(e.getHours()+":"+e.getMinutes()+":"+e.getSeconds()+"."+e.getMilliseconds()+' - Event "onOpen" fired<br />').scrollTop(1e4)},onRender:function(e,i){var o=new Date;t.append(o.getHours()+":"+o.getMinutes()+":"+o.getSeconds()+"."+o.getMilliseconds()+' - Event "onRender" fired for item '+i+".<br />").scrollTop(1e4)},onShow:function(e,i){var o=new Date;t.append(o.getHours()+":"+o.getMinutes()+":"+o.getSeconds()+"."+o.getMilliseconds()+' - Event "onShow" fired for item '+i+".<br />").scrollTop(1e4)},onHide:function(){var e=new Date;t.append(e.getHours()+":"+e.getMinutes()+":"+e.getSeconds()+"."+e.getMilliseconds()+' - Event "onHide" fired.<br /><p>-----------------------------------</p>').scrollTop(1e4)},onEnterFullScreen:function(){var e=new Date;t.append(e.getHours()+":"+e.getMinutes()+":"+e.getSeconds()+"."+e.getMilliseconds()+' - Event "onEnterFullScreen" fired.<br />').scrollTop(1e4)},onExitFullScreen:function(){var e=new Date;t.append(e.getHours()+":"+e.getMinutes()+":"+e.getSeconds()+"."+e.getMilliseconds()+' - Event "onExitFullScreen" fired.<br />').scrollTop(1e4)},onBeforeLoad:function(e,i){var o=new Date;t.append(o.getHours()+":"+o.getMinutes()+":"+o.getSeconds()+"."+o.getMilliseconds()+' - Event "onBeforeLoad" fired for item '+i+".<br />").scrollTop(1e4)},onAfterLoad:function(e,i){var o=new Date;t.append(o.getHours()+":"+o.getMinutes()+":"+o.getSeconds()+"."+o.getMilliseconds()+' - Event "onAfterLoad" fired for item '+i+".<br />").scrollTop(1e4)},onBeforeChange:function(){var e=new Date;t.append(e.getHours()+":"+e.getMinutes()+":"+e.getSeconds()+"."+e.getMilliseconds()+' - Event "onBeforeChange" fired.<br />').scrollTop(1e4)},onAfterChange:function(){var e=new Date;t.append(e.getHours()+":"+e.getMinutes()+":"+e.getSeconds()+"."+e.getMilliseconds()+' - Event "onAfterChange" fired.<br />').scrollTop(1e4)}}}),!1})});