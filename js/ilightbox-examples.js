$(document).ready(function() {

  // Single Image
  $('#singleimage_1').iLightBox( {
    skin: 'custom',
    path: 'horizontal',
    show: {  title: false },
    smartRecognition: true,
    linkId: 'gallery1',
    social: {
      buttons: {
        facebook: {
          text: "Share this photo on Facebook"
        },
        twitter: {
          text: "Share this photo on Twitter"
        },
        googleplus: {
          text: "Share this photo on Google+"
        },
        pinterest: {
          text: "Share this photo on Pinterest"
        },
        instagram: {
          text: "Share this photo on Instagram"
        },
      }
    },
    controls: {
      thumbnail: false,
      fullscreen: false,
      slideshow: false
    }
  });
  $('#singleimage_2').iLightBox({
    skin: 'custom'
  });
  $('#singleimage_3').iLightBox({
    skin: 'custom'
  });
  $('#singleimage_4').iLightBox({
    skin: 'custom'
  });

  // Image gallery
  $('#image_gallery a').iLightBox({
    skin: 'custom',
    linkId: 'gallery',
    social: {
      buttons: {
        facebook: {
          text: "Share this on Facebook"
        },
        twitter: {
          text: "Share this on Twitter"
        },
        googleplus: {
          text: "Share this on Google+"
        },
        pinterest: {
          text: "Share this on Pinterest"
        },
        instagram: {
          text: "Share this on Instagram"
        },
      }
    },
  });

  // IMAGES - Deeplinking & Looping
  $('#deeplinking_looping_gallery a').iLightBox({
    skin: 'custom',
    path: 'horizontal',
    fullViewPort: 'fill',
    infinite: true,
    linkId: "music",
    overlay: {
      opacity: 1,
      blur: false
    },
    controls: {
      thumbnail: false
    },
    styles: {
      nextOffsetX: -45,
      prevOffsetX: -45
    }
  });
  // End of the "Deeplinking & Looping" Example

  // IMAGES - Advanced Examples - Begins "Inline Image Gallery" Example
  $('#inline_gallery').click(function(){
    $.iLightBox(
      [
        {
          URL: "../images/bs/bigstock1.jpg",
          type: "image",
          options: {
            thumbnail: "/../images/bs/bigstock1.jpg",
          }
        },
        {
          URL: "../images/bs/bigstock2.jpg",
          type: "image",
          options: {
            thumbnail: "/../images/bs/bigstock2.jpg",
          }
        },
        {
          URL: "../images/bs/bigstock3.jpg",
          type: "image",
          options: {
            thumbnail: "/../images/bs/bigstock3.jpg",
          }
        },
        {
          URL: "../images/bs/bigstock4.jpg",
          type: "image",
          options: {
            thumbnail: "/../images/bs/bigstock4.jpg",
          }
        },
        {
          URL: "../images/bs/bigstock5.jpg",
          type: "image",
          options: {
            thumbnail: "/../images/bs/bigstock5.jpg",
          }
        },
        {
          URL: "../images/bs/bigstock6.jpg",
          type: "image",
          options: {
            thumbnail: "/../images/bs/bigstock6.jpg",
          }
        },
        {
          URL: "../images/bs/bigstock7.jpg",
          type: "image",
          options: {
            thumbnail: "/../images/bs/bigstock7.jpg",
          }
        },
        {
          URL: "../images/bs/bigstock8.jpg",
          type: "image",
          options: {
            thumbnail: "/../images/bs/bigstock8.jpg",
          }
        },
        {
          URL: "../images/bs/bigstock9.jpg",
          type: "image",
          options: {
            thumbnail: "/../images/bs/bigstock9.jpg",
          }
        },
        {
          URL: "../images/bs/bigstock10.jpg",
          type: "image",
          options: {
            thumbnail: "/../images/bs/bigstock10.jpg",
          }
        },
        {
          URL: "../images/bs/bigstock11.jpg",
          type: "image",
          options: {
            thumbnail: "/../images/bs/bigstock11.jpg",
          }
        },
        {
          URL: "../images/bs/bigstock12.jpg",
          type: "image",
          options: {
            thumbnail: "/../images/bs/bigstock12.jpg",
          }
        },
        {
          URL: "../images/bs/bigstock13.jpg",
          type: "image",
          options: {
            thumbnail: "/../images/bs/bigstock13.jpg",
          }
        },
        {
          URL: "../images/bs/bigstock14.jpg",
          type: "image",
          options: {
            thumbnail: "/../images/bs/bigstock14.jpg",
          }
        },
        {
          URL: "../images/bs/bigstock15.jpg",
          type: "image",
          options: {
            thumbnail: "/../images/bs/bigstock15.jpg",
          }
        },
        {
          URL: "../images/bs/bigstock16.jpg",
          type: "image",
          options: {
            thumbnail: "/../images/bs/bigstock16.jpg",
          }
        }
      ],
      {
        startFrom: 3,
        skin: 'custom',
        path: 'horizontal',
        maxScale: 1.3,
        overlay: {
          opacity: .4
        },
        styles: {
          nextOffsetX: 75,
          nextOpacity: .55,
          prevOffsetX: 75,
          prevOpacity: .55
        },
        thumbnails: {
          normalOpacity: .6,
          activeOpacity: 1
        }
      }
    );
    return false;
  });
  // End of the "Inline Image Gallery" Example

  // IMAGES - Advanced Examples - Begins "Force Size & Custom Attribute" Example
  $('#forceresize').iLightBox({
    attr: 'photo',
    skin: 'custom',
    innerToolbar: true,
    overlay: {
      opacity: 0.7
    },
    controls: {
      fullscreen: false
    }
  });
  // End of the "Force Size & Custom Attribute" Example

  // IMAGES - Advanced Examples - Begins "Auto cycling & Arrows" Example
  $('#cycling_arrows').click(function(){
    $.iLightBox(
      [
        {
          URL: "../images/bs/bigstock1.jpg",
          options: {
            thumbnail: "../images/bs/bigstock1.jpg"
          },
          caption: "Presenting Tonia Sotiropoulou, in a new 2012 shooting. Tonia is currently in the big screen with James Bond's Skyfall. This photo is a sample for magazine use, more photos will follow in the future. See previous work with her at <a href='http://nikosalpha.com/tonia'>nikosalpha.com/tonia</a>."
        },
        {
          URL: "../images/bs/bigstock2.jpg",
          options: {
            thumbnail: "../images/bs/bigstock2.jpg"
          },
          caption: "Presenting Catharine. She is a young multitalented beautiful voice singing in the UK. Follow her work <a href='https://www.facebook.com/CatharineAmorosoMusic'>here</a>"
        },
        {
          URL: "../images/bs/bigstock3.jpg",
          options: {
            thumbnail: "../images/bs/bigstock3.jpg"
          }
        },
        {
          URL: "../images/bs/bigstock4.jpg",
          options: {
            thumbnail: "../images/bs/bigstock4.jpg"
          },
          caption: "One more photo of one of my favorite subjects, the Lips. I decided to create a unique tag in my website only for them. Here they are so far: <a href='http://nikosalpha.com/lips'>nikosalpha.com/lips</a>."
        },
        {
          URL: "../images/bs/bigstock5.jpg",
          options: {
            thumbnail: "../images/bs/bigstock5.jpg"
          },
          caption: "The sweetest piece of my life"
        },
        {
          URL: "../images/bs/bigstock6.jpg",
          options: {
            thumbnail: "../images/bs/bigstock6.jpg"
          },
          caption: "New session with the singer Valerie Kalenti! (:"
        }
      ],
      {
        skin: 'custom',
        path: 'horizontal',
        fullAlone: 0,
        controls: {
          thumbnail: 0,
          arrows: 1,
          slideshow: 1
        }
      }
    );
    return false;
  });
  // End of the "Auto cycling & Arrows" Example





      // IMAGES - Advanced Examples - Begins "Auto recognition" Example
      $('#image_recognizer').click(function(){
        var socialButtons = {
          facebook: true,
          twitter: true,
          googleplus: {
            source: "https://plus.google.com/share?url={URL}",
            text: "Share on Google+"
          },
          digg: {
            width: 800,
            height: 480
          }
        };

        $.iLightBox(
          [
            {
              URL: "http://instagram.com/p/P72Lw9Oc7L/",
              caption: "This one recognized from this <a href='http://instagram.com/p/P72Lw9Oc7L/' target='_blank'>URL</a> on instagram.",
              options: {
                social: $.extend(true, {}, socialButtons, {
                  facebook: {
                    URL: "http://instagram.com/p/P72Lw9Oc7L/"
                  },
                  twitter: {
                    URL: "http://instagram.com/p/P72Lw9Oc7L/"
                  },
                  googleplus: {
                    URL: "http://instagram.com/p/P72Lw9Oc7L/"
                  },
                  digg: {
                    URL: "http://instagram.com/p/P72Lw9Oc7L/"
                  }
                })
              }
            },
            {
              URL: "http://www.flickr.com/photos/bruce-hood/8584616829/",
              caption: "This one recognized from this <a href='http://www.flickr.com/photos/bruce-hood/8584616829/' target='_blank'>URL</a> on flickr.",
              options: {
                social: {
                  facebook: {
                    URL: "http://www.flickr.com/photos/bruce-hood/8584616829/"
                  },
                  twitter: {
                    URL: "http://www.flickr.com/photos/bruce-hood/8584616829/"
                  }
                }
              }
            },
            {
              URL: "http://oer-wout.deviantart.com/art/Amber-473365198",
              caption: "This one recognized from this <a href='http://oer-wout.deviantart.com/art/Amber-473365198' target='_blank'>URL</a> on deviantArt.",
              options: {
                social: $.extend(true, {}, socialButtons, {
                  facebook: {
                    URL: "http://oer-wout.deviantart.com/art/Amber-473365198"
                  },
                  twitter: {
                    URL: "http://oer-wout.deviantart.com/art/Amber-473365198"
                  },
                  googleplus: {
                    URL: "http://oer-wout.deviantart.com/art/Amber-473365198"
                  },
                  digg: {
                    URL: "http://oer-wout.deviantart.com/art/Amber-473365198"
                  }
                })
              }
            }
          ],
          {
            smartRecognition: true,
            skin: 'smooth',
            path: 'horizontal',
            fullAlone: false,
            caption: {
              start: false
            },
            social: {
              start: false,
              buttons: socialButtons
            },
            styles: {
              nextScale: 0.6,
              prevScale: 0.6,
              nextOpacity: 0.6,
              prevOpacity: 0.6
            },
            thumbnails: {
              normalOpacity: .6,
              activeOpacity: 1
            }
          }
        );
        return false;
      });
      // End of the "Auto recognition" Example



      // HTML - Inline Content
      $('#inline_html_simple').iLightBox({
        attr: 'target',
        skin: 'metro-white'
      });

      $('#inline_html_forced').click(function(){
        $.iLightBox([
          {
            URL: '#demo_inline_element',
            type: 'inline',
            options: {
              width: 720,
              height: 360
            }
          }
        ],{
          skin: 'metro-white'
        });
        return false;
      });
      // End of the "Inline Content" Example

      // HTML - Ajax
      $('#ajax_simple').iLightBox({
        attr: 'target',
        overlay: {
          opacity: .6
        },
        skin: 'parade',
        minScale: 1
      });

      $('#ajax_forced').iLightBox({
        attr: 'target',
        overlay: {
          opacity: .6
        },
        skin: 'parade',
        minScale: 1
      });

      $('#ajax_modal').iLightBox({
        attr: 'target',
        innerToolbar: true,
        overlay: {
          opacity: .6,
          blur: false
        },
        controls: {
          fullscreen: false
        },
        keyboard: {
          esc: false
        },
        skin: 'parade',
        minScale: 1
      });
      // End of the "Ajax" Example

      //HTML - FLASH / SWF
      $('#flash_simple').iLightBox({
        innerToolbar: true,
        controls: {
          fullscreen: false
        },
        skin: 'dark'
      });

      $('#flash_forced').iLightBox({
        innerToolbar: true,
        controls: {
          fullscreen: false
        },
        minScale: 1
      });
      // End of the "FLASH / SWF" Example

      //HTML - IFRAME
      $('#iframe_1').iLightBox();

      $('#iframe_2').iLightBox({
        minScale: 1
      });

      $('#iframe_3').iLightBox({
        minScale: 1
      });
      // End of the "IFRAME" Example

      // HTML - Advanced Examples
      $('#DOM').click(function(){
        var html = $('<div class="center"><h2><img src="assets/img/smile.gif">It\'s time to upgrade.</h2><hr><p>iLightBox supports DOM elements created on the fly.</p></div>');
        $.iLightBox([
          {
            URL: html,
            type: 'html'
          }
        ],
        {
          innerToolbar: true,
          controls: {
            fullscreen: false
          },
          skin: 'parade',
          minScale: 1
        });
        return false;
      });
      // End of the "HTML - Advanced Examples" Example

      // Video - Simple Usage
      $('#video_1').iLightBox();
      $('#video_2').iLightBox();
      $('#video_3').iLightBox();
      $('#video_html5').iLightBox();
      // End of the "Video - Simple Usage" Example

      // Video - Advanced Examples
      $('#video_4').iLightBox({
        smartRecognition: true
      });
      $('#video_5').iLightBox({
        smartRecognition: true
      });
      $('#video_6').iLightBox({
        smartRecognition: true
      });
      $('#video_7').iLightBox({
        smartRecognition: true
      });
      $('#video_8').iLightBox({
        smartRecognition: true
      });
      $('#video_9').iLightBox({
        smartRecognition: true
      });

      $('#video_gallery').click(function(){
        $.iLightBox(
          [
            {
              URL: "http://www.youtube.com/watch?v=_pV2zz3z0oM"
            },
            {
              URL: "http://vimeo.com/55331511"
            },
            {
              URL: "http://www.hulu.com/watch/424558"
            },
            {
              URL: "http://www.metacafe.com/watch/9542534/man_of_steel_trailer/"
            },
            {
              URL: "http://www.dailymotion.com/video/xp53r5_the-avengers-official-trailer-2_shortfilms"
            },
            {
              URL: "http://www.gametrailers.com/videos/za4633/crysis-3-the-7-wonders---episode-1--hell-of-a-town",
              options: {
                width: 1280,
                height: 720
              }
            }
          ],
          {
            smartRecognition: true,
            skin: 'dark',
            overlay: {
              blur: false
            },
            keyboard: {
              esc: false
            },
            styles: {
              nextOpacity: .55,
              prevOpacity: .55
            }
          }
        );
        return false;
      });
      // End of the "Video - Advanced Examples" Example

      // Advanced Examples - Mixed & Google Maps
      // Advanced Examples - Mixed
      $('#mixed_contents').click(function(){
        $.iLightBox(
          [
            {
              URL: "http://iprodev.com/ilightbox/assets/MV5BMTM1NTMyMDE4OV5BMTFeQW1wNF5BbWU3MDEyNTI0OTU.mp4",
              options: {
                thumbnail: "assets/img/thumbnails/sherlock_holmes/trailer.jpg",
                html5video: {
                  webm: "http://iprodev.com/ilightbox/assets/MV5BMTM1NTMyMDE4OV5BMTFeQW1wNF5BbWU3MDEyNTI0OTU.webm",
                  poster: "assets/img/sherlock_holmes/trailer.jpg"
                },
                width: 1280,
                height: 544
              }
            },
            {
              URL: "assets/img/sherlock_holmes/1.jpg",
              caption: 'This one fill the screen when you enter fullscreen.',
              options: {
                thumbnail: "assets/img/thumbnails/sherlock_holmes/1.jpg",
                fullViewPort: 'fill'
              }
            },
            {
              URL: "assets/img/sherlock_holmes/2.jpg",
              caption: 'This one fit to the screen when you enter fullscreen.',
              options: {
                thumbnail: "assets/img/thumbnails/sherlock_holmes/2.jpg",
                fullViewPort: 'fit'
              }
            },
            {
              URL: "http://www.youtube.com/embed/lNxhpNpnAkk?autohide=1&border=0&egm=0&showinfo=0&showsearch=0",
              options: {
                thumbnail: "assets/img/thumbnails/sherlock_holmes/mqdefault.jpg",
                fullViewPort: 'stretch',
                icon: "video",
                width: 1280,
                height: 720
              }
            },
            {
              URL: "assets/img/sherlock_holmes/3.jpg",
              options: {
                thumbnail: "assets/img/thumbnails/sherlock_holmes/3.jpg"
              }
            },
            {
              URL: "assets/img/sherlock_holmes/4.jpg",
              options: {
                thumbnail: "assets/img/thumbnails/sherlock_holmes/4.jpg"
              }
            },
            {
              URL: "assets/img/sherlock_holmes/5.jpg",
              options: {
                thumbnail: "assets/img/thumbnails/sherlock_holmes/5.jpg"
              }
            },
            {
              URL: "assets/img/sherlock_holmes/6.jpg",
              options: {
                thumbnail: "assets/img/thumbnails/sherlock_holmes/6.jpg"
              }
            },
            {
              URL: "assets/img/sherlock_holmes/7.jpg",
              options: {
                thumbnail: "assets/img/thumbnails/sherlock_holmes/7.jpg"
              }
            },
            {
              URL: "assets/img/sherlock_holmes/8.jpg",
              options: {
                thumbnail: "assets/img/thumbnails/sherlock_holmes/8.jpg"
              }
            }
          ],
          {
            path: 'horizontal',
            skin: 'metro-black',
            styles: {
              nextOpacity: 0,
              prevOpacity: 0
            }
          }
        );
        return false;
      });
      // End of the "Advanced Examples - Mixed" Example

      // Advanced Examples - Google Maps
      $('#google_maps').click(function(){
        $.iLightBox([
          {
            URL: "assets/ajax/maps.html",
            options: {
              width: 720,
              height: 420
            },
            type: 'iframe'
          }
        ],
        {
          minScale: 1,
          skin: 'metro-black'
        });
        return false;
      });
      // End of the "Advanced Examples - Google Maps" Example
      // End of the "Advanced Examples - Mixed & Google Maps" Examples

      // Advanced Examples - Image Gallery with Slideshow
      var slideShowButton = $('<a class="btn btn-primary slideshow_button">Slideshow</a>'),
        slideshow = false,
        pauseTime = 5000,
        changeTimeout = null;
      $('ul#image_gallery_with_slideshow li a').iLightBox({
        skin: 'metro-white',
        path: 'horizontal',
        controls: {
          thumbnail: false
        },
        styles: {
          pageOffsetY: 100,
          nextScale: 0.6,
          prevScale: 0.6,
          nextOpacity: 0.6,
          prevOpacity: 0.6
        },
        effects: {
          switchSpeed: 700
        },
        callback: {
          onOpen: function(){
            var t = this;
            $('body').append(slideShowButton);
            slideShowButton.on('click', function(){
              if(slideshow) {
                stopSlideshow();
              }
              else {
                if(t.vars.current == t.vars.total-1) t.goTo(0);
                startSlideshow();
                changeTimeout = setTimeout(function(){
                  t.moveTo('next');
                }, pauseTime);
              }
            });
          },
          onHide: function(){
            slideShowButton.off('click').hide().remove();
          },
          onAfterLoad: function(){
            slideShowButton.fadeIn(this.options.effects.loadedFadeSpeed);
          },
          onBeforeChange: function(){
            clearTimeout(changeTimeout);
          },
          onAfterChange: function(api){
            var t = this;
            if(slideshow){
              if(api.currentItem == this.vars.total-1) {
                stopSlideshow();
              } else changeTimeout = setTimeout(function(){
                t.moveTo('next');
              }, pauseTime);
            }
          },
          onEnterFullScreen: function(){
            slideShowButton.hide();
            clearTimeout(changeTimeout);
          },
          onExitFullScreen: function(){
            var t = this;
            slideShowButton.show();
            if(slideshow){
              if(t.vars.current != t.vars.total-1) changeTimeout = setTimeout(function(){
                t.moveTo('next');
              }, pauseTime);
            }
          }
        }
      });

      function startSlideshow(){
        slideshow = true;
        slideShowButton.text('Stop');
      }

      function stopSlideshow(){
        slideshow = false;
        clearTimeout(changeTimeout);
        slideShowButton.text('Slideshow');
      }
      // End of the "Advanced Examples - Image Gallery with Slideshow" Examples


      //Advanced Examples - Alert/Confirm/Prompt
      function dialogue(content, title) {
        content = $('<div />', {
          'class': 'dialogue clearfix'
        }).append(content);

        $.iLightBox([
          {
            URL: content,
            type: "html",
            title: (title) ? title : null
          }
        ],
        {
          skin: 'metro-white ilightbox-dialogue',
          minScale: 1,
          innerToolbar: true,
          show: {
            effect: false
          },
          hide: {
            effect: false
          },
          overlay: {
            blur: false
          },
          controls: {
            fullscreen: false
          },
          callback: {
            // Hide the iLightBox when any buttons in the dialogue are clicked
            onRender: function(api) {
              $('.btn', api.currentElement).click(function(){
                $('.btn', api.currentElement).unbind('click');
                api.hide();
              });
            },
            // Hide the iLightBox when any buttons in the dialogue are clicked
            onShow: function(api) {
              $('.btn-primary', api.currentElement).focus();
            }
          }
        });
      }

      // Our Alert method
      function Alert(message, title)
      {
        // Content will consist of the message and an ok button
        var message = $('<p />', { html: message, 'class': 'dialogue_message' }),
          ok = $('<button />', { html: "OK", 'class': 'btn btn-primary', keyup: function(e){
            if(e.keyCode == 13) $(this).trigger('click');
          }
          });

        dialogue( message.add(ok) , title);
      }

      // Our Prompt method
      function Prompt(question, title, initial, callback)
      {
        // Content will consist of a question elem and input, with ok/cancel buttons
        var message = $('<p />', {
          html: question,
          'class': 'dialogue_message'
        }),
        input = $('<input />', {
          'type': 'text',
          val: initial
        }),
        clear = $('<div />', {
          'class': 'clear'
        }),
        ok = $('<button />', {
          html: "OK",
          'class': 'btn btn-primary',
          click: function() { callback( input.val() ); },
          keyup: function(e){
            if(e.keyCode == 13) $(this).trigger('click');
          }
        }),
        cancel = $('<button />', {
          html: "Cancel",
          'class': 'btn',
          click: function() { callback(null); }
        });

        dialogue( message.add(input).add(clear).add(ok).add(cancel), title );
      }

      // Our Confirm method
      function Confirm(question, title, callback)
      {
        // Content will consist of the question and ok/cancel buttons
        var message = $('<p />', { html: question }),
        ok = $('<button />', {
          html: "Yes",
          'class': 'btn btn-primary',
          click: function() { callback(true); },
          keyup: function(e){
            if(e.keyCode == 13) $(this).trigger('click');
          }
        }),
        cancel = $('<button />', {
          html: "No",
          'class': 'btn',
          click: function() { callback(false); }
        });

        dialogue( message.add(cancel).add(ok), title, function() { callback(false); } );
      }

      $('#show_alert').click(function(){
        Alert('Custom alert() functions are cool.', 'Alert!');
      });

      $('#show_prompt').click(function(){
        Prompt('How would you describe iLightBox?', 'Attention!', 'Awesome!', function(response){
          alert(response);
          // do something with response
        });
      });

      $('#show_confirm').click(function(){
        Confirm('Click Yes if you love iLightBox', 'Do you agree?', function(yes) {
          // do something with yes
          alert(yes);
        });
      });

      // Advanced Examples - Events
      $('#events_gallery').click(function(){
        var con = $('#pre_events');
        $.iLightBox(
          [
            {
              URL: "assets/img/photos/MS-test-day-27898.jpg",
              options: {
                thumbnail: "assets/img/thumbnails/MS-test-day-27898.jpg"
              },
              type: "image",
              caption: "First Caption. It'll blow your mind."
            },
            {
              URL: "assets/img/photos/MS-test-day-27771.jpg",
              options: {
                thumbnail: "assets/img/thumbnails/MS-test-day-27771.jpg"
              },
              type: "image",
              caption: "Oh yeah, it's that good. See for yourself."
            },
            {
              URL: "assets/img/photos/MS-test-day-27845.jpg",
              options: {
                thumbnail: "assets/img/thumbnails/MS-test-day-27845.jpg"
              },
              type: "image",
              caption: "And lastly, this one. Checkmate."
            },
            {
              URL: "assets/img/photos/MS-test-day-27780.jpg",
              options: {
                thumbnail: "assets/img/thumbnails/MS-test-day-27780.jpg"
              },
              type: "image"
            },
            {
              URL: "assets/img/photos/MS-test-day-278081.jpg",
              options: {
                thumbnail: "assets/img/thumbnails/MS-test-day-278081.jpg"
              },
              type: "image"
            },
            {
              URL: "assets/img/photos/MS-test-day-27749.jpg",
              options: {
                thumbnail: "assets/img/thumbnails/MS-test-day-27749_2.jpg"
              },
              type: "image"
            }
          ],
          {
            path: 'horizontal',
            overlay: {
              opacity: .7
            },
            callback: {
              onOpen: function(){
                var d = new Date();
                con.append(d.getHours()+':'+d.getMinutes()+':'+d.getSeconds()+'.'+d.getMilliseconds()+' - Event "onOpen" fired<br />').scrollTop(10000);
              },
              onRender: function(api, position){
                var d = new Date();
                con.append(d.getHours()+':'+d.getMinutes()+':'+d.getSeconds()+'.'+d.getMilliseconds()+' - Event "onRender" fired for item '+position+'.<br />').scrollTop(10000);
              },
              onShow: function(api, position){
                var d = new Date();
                con.append(d.getHours()+':'+d.getMinutes()+':'+d.getSeconds()+'.'+d.getMilliseconds()+' - Event "onShow" fired for item '+position+'.<br />').scrollTop(10000);
              },
              onHide: function(){
                var d = new Date();
                con.append(d.getHours()+':'+d.getMinutes()+':'+d.getSeconds()+'.'+d.getMilliseconds()+' - Event "onHide" fired.<br /><p>-----------------------------------</p>').scrollTop(10000);
              },
              onEnterFullScreen: function(){
                var d = new Date();
                con.append(d.getHours()+':'+d.getMinutes()+':'+d.getSeconds()+'.'+d.getMilliseconds()+' - Event "onEnterFullScreen" fired.<br />').scrollTop(10000);
              },
              onExitFullScreen: function(){
                var d = new Date();
                con.append(d.getHours()+':'+d.getMinutes()+':'+d.getSeconds()+'.'+d.getMilliseconds()+' - Event "onExitFullScreen" fired.<br />').scrollTop(10000);
              },
              onBeforeLoad: function(api, position){
                var d = new Date();
                con.append(d.getHours()+':'+d.getMinutes()+':'+d.getSeconds()+'.'+d.getMilliseconds()+' - Event "onBeforeLoad" fired for item '+position+'.<br />').scrollTop(10000);
              },
              onAfterLoad: function(api, position){
                var d = new Date();
                con.append(d.getHours()+':'+d.getMinutes()+':'+d.getSeconds()+'.'+d.getMilliseconds()+' - Event "onAfterLoad" fired for item '+position+'.<br />').scrollTop(10000);
              },
              onBeforeChange: function(){
                var d = new Date();
                con.append(d.getHours()+':'+d.getMinutes()+':'+d.getSeconds()+'.'+d.getMilliseconds()+' - Event "onBeforeChange" fired.<br />').scrollTop(10000);
              },
              onAfterChange: function(){
                var d = new Date();
                con.append(d.getHours()+':'+d.getMinutes()+':'+d.getSeconds()+'.'+d.getMilliseconds()+' - Event "onAfterChange" fired.<br />').scrollTop(10000);
              }
            }
          }
        );
        return false;
      });
      // End of the "Advanced Examples - Events" Examples
    });


