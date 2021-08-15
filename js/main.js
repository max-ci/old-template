(function($, window, document) {
  // iOS Switch

  /*$(function() {

      cmnToggle();
      topSection();
      stickySidebar();
      accordionIcon();
      testimonialsCarousel();
      fadeOutHeader();
      buttonOverlay();
      pullQuotes();
      tooltip();
      popover();
      progressBars();
      iconProgressBar();
      smoothScroll();
      alertDismiss();
      counters();
      pieCharts();
      eventsCalendar();
      animsition();
      flipBoxes();

  });*/



$('.go-to-top').click(function (e) {
  e.preventDefault();
  $("body").velocity("scroll", {
    duration: 1000,
    easing: "easeInBack"
  });
});



  $('.cmn-toggle').each(function () {
    $(this).change(function() {
      $(this).parent().find('label').toggleClass('active');
    });
  });

  $('#monthly-yearly').change(function () {
    $('.monthly-yearly').find('.flip-box-wrapper').toggleClass('flip');
  });

  // Top section

  $('.top-bar-toggle').on('click', function (e) {
    e.preventDefault();
    if ($(this).hasClass('active')) {
      $('.top-section').velocity('slideUp', { delay: 0, duration: 750 });
    } else {
      $('.top-section').velocity('slideDown', { delay: 0, duration: 750 });
    }
    $(this).toggleClass('active');
  });

  /*$('.top-bar-toggle').on('click', function (e) {
    e.preventDefault();
    $('.top-section').slideToggle(500, 'easeInSine');
    $(this).toggleClass('active');
  });*/

  // Mobile device detection

  var isMobile = false;
  if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) {
    isMobile = true;
  }

  // Navbar fixed top desktop

  if(isMobile) {
    $('.navbar').removeClass('navbar-fixed-top-desktop');
  }

  // Sticky sidebar

  if( !isMobile && $().hcSticky ) {
    $('#sticker').hcSticky({
      top: 30,
      bottomEnd: 50,
      stickTo: '#sticky-wrapper',
      followScroll: false
    });
  }



  // Navbar smaller

  $(window).scroll(function () {
      var outerHeightHeader = $('.header-top').outerHeight();
      if ($(this).scrollTop() > outerHeightHeader) {
        $('.header-v1').addClass('sticky-header');
      } else {
        $('.header-v1').removeClass('sticky-header');
      }
      if ($(this).scrollTop() > 800) {
          $('.header-v1').addClass('navbar-smalle');
      } else {
          $('.header-v1').removeClass('navbar-smalle');
      }
  });

  $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
          $('.floating-header').addClass('navbar-fixed-top-desktop');
      } else {
          $('.floating-header').removeClass('navbar-fixed-top-desktop');
      }
  });

  // IE10 fix

  if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
    var msViewportStyle = document.createElement('style');
    msViewportStyle.appendChild(
      document.createTextNode(
        '@-ms-viewport{width:auto!important}'
      )
    );
    document.querySelector('head').appendChild(msViewportStyle);
  }

  // Accordion arrow animation

  var accordionArrowWrapper = $('.accordion-default, .accordion-v2');

  accordionArrowWrapper.find('.collapse.in').parent().find('.accordion-toggle-icon').addClass('accordion-toggle-icon-rotate');
  accordionArrowWrapper.find('.panel-collapse').on('shown.bs.collapse', function () {
    $(this).parent().find('.accordion-toggle-icon').addClass('accordion-toggle-icon-rotate');
  });
  accordionArrowWrapper.find('.panel-collapse').on('hidden.bs.collapse', function () {
    $(this).parent().find('.accordion-toggle-icon').removeClass('accordion-toggle-icon-rotate');
  });

  // Close alerts

  $('.alert-dismissable > .close, .alert-dismissible > .close').click(function () {
      $(this).closest('.alert').fadeOut(350);
  });

  // Testimonials carousel (hover and click)

  if($().hoverIntent) {

    $('#testimonials-carousel-hover').carousel({
      interval: false
    });

    $('#testimonials-carousel-click').carousel({
      interval: false
    });
    //Handles the carousel thumbnails
    $('#testimonials-carousel-hover').parent().find('.author-thumbs a').hoverIntent( function (){
      var id_selector = $(this).data('carouselSelector');
      $('#testimonials-carousel-hover').carousel(id_selector);
      $('#testimonials-carousel-hover').parent().find('.author-thumbs a').removeClass('active');
      $(this).addClass('active');
    });

    $('#testimonials-carousel-click').parent().find('.author-thumbs a').on('click', function (){
      var id_selector = $(this).data('carouselSelector');
      $('#testimonials-carousel-click').carousel(id_selector);
      $('#testimonials-carousel-click').parent().find('.author-thumbs a').removeClass('active');
      $(this).addClass('active');
    });

  }

  // iLightBox

  if($().iLightBox) {

    /*$('[rel='ilightbox']').each(function() {
        $(this).iLightBox( {
          skin: 'custom'
        });
    });*/

    $('#video-presentation').iLightBox({
      social: {
        buttons: {
          facebook: {
            text: 'Share this on Facebook'
          },
          twitter: {
            text: 'Share this on Twitter'
          },
          googleplus: {
            text: 'Share this on Google+'
          }
        }
      },
      linkId: 'video-presentation',
      skin: 'custom',
      path: 'horizontal',
      controls: {
        thumbnail: 0
      }
    });

    $('#youtube').iLightBox({
      social: {
        buttons: {
          facebook: {
            text: 'Share this on Facebook'
          },
          twitter: {
            text: 'Share this on Twitter'
          },
          googleplus: {
            text: 'Share this on Google+'
          }
        }
      },
      linkId: 'youtube',
      skin: 'custom',
      path: 'horizontal',
      controls: {
        thumbnail: 0
      }
    });

    $('#vimeo').iLightBox({
      social: {
        buttons: {
          facebook: {
            text: 'Share this on Facebook'
          },
          twitter: {
            text: 'Share this on Twitter'
          },
          googleplus: {
            text: 'Share this on Google+'
          }
        }
      },
      linkId: 'vimeo',
      skin: 'custom',
      path: 'horizontal',
      controls: {
        thumbnail: 0
      }
    });

    $('#iframe1').iLightBox();
    $('#video_html5').iLightBox();

  }

  // Fade Out on scroll

  $(window).scroll(function () {
    $(".fade-out-header").css({
      'opacity' : 1-(($(this).scrollTop())/250)
    });
  });

  // Pull quotes

  $('.pullquote-left').each(function () {
      var $parentParagraph = $(this).parent('p');
      $parentParagraph.css('position', 'relative');
      $(this).clone()
             .addClass('pulledquote-left')
             .prependTo($parentParagraph);
  });

  $('.pullquote-right').each(function () {
      var $parentParagraph = $(this).parent('p');
      $parentParagraph.css('position', 'relative');
      $(this).clone()
             .addClass('pulledquote-right')
             .prependTo($parentParagraph);
  });

  // Loading effect for buttons

  $('.btn-et-loading-left, .btn-et-loading-right, .btn-et-loading-top, .btn-et-loading-bottom').on('click', function () {
    var button = $(this), resetTimeout;
    button.off();
    if(button.hasClass('btn-activated')) {
        button.removeClass('btn-activated');
    } else {
        button.addClass('btn-activated');
    }
    clearTimeout(resetTimeout);
    resetTimeout = setTimeout(function () {
        button.removeClass('btn-activated');
    }, 3000);
  });

  // Line for tabs

  if ($('.nav-tabs-moving-line').length) {

    var $navTabLink = $('.nav-tabs-moving-line > .nav-tabs a'),
        $leftPos,
        $newWidth,
        $movingLine = $('.moving-line');

    $movingLine.width($('.moving-line-link.active').width());
    $movingLine.css('left', $('.moving-line-link.active a').position().left);

    $navTabLink.on('click', function() {
      $navTabLink.removeClass('active');
      var $navTabLinkActive = $(this);
      $navTabLinkActive.addClass('active');
      $leftPos = $navTabLinkActive.parent().position().left;
      $newWidth = $navTabLinkActive.parent().width();
      $movingLine.stop().animate({
        left: $leftPos,
        width: $newWidth
      },'700', 'easeOutQuad');
    });

    $(window).on('resize', function() {
      $movingLine.width($('.moving-line-link.active').width());
      $leftPos = $('.moving-line-link.active').position().left;
      $movingLine.css('left', $leftPos);
    });

    $('.nav-tabs-moving-line > .nav-tabs a').mouseenter();

  }

  // Tooltips and popovers

  $("[data-toggle='tooltip']").tooltip( {
      container: 'body'
  });
  $('.tooltip-custom').tooltip({
      template: "<div class='tooltip custom-tooltip' role='tooltip'><div class='tooltip-arrow'></div><div class='tooltip-inner'></div></div>",
      container: 'body'
  });
  $("[data-toggle='popover']").popover( {
      container: 'body'
  });
  $('.popover-custom').popover({
      template: "<div class='popover custom-popover' role='tooltip'><div class='arrow'></div><h3 class='popover-title'></h3><div class='popover-content'></div></div>",
      container: 'body'
  });

  $("[data-toggle='tooltip-image']").popover({
    html: true,
    trigger: 'hover',
    placement: 'bottom',
    content: function () {
      return '<img src="'+$(this).data('img') + '" class="img-responsive">';
    }
  });

  $('.tooltip-line.onclick').on('click', function (e) {
    e.preventDefault();
    $(this).toggleClass('activated');
  });

  // Flip boxes

  function handleFlipBoxes() {

    $('.flip-box-wrapper').each(function() {

      var frontBox = $(this).find('.flip-box-front'),
          backBox = $(this).find('.flip-box-back'),
          frontBoxHeight = frontBox.find('.flip-box-inner').outerHeight();

      backBox.find('.flip-box-inner').css('height', frontBoxHeight + 'px');

      $(window).resize(function() {
        frontBoxHeight = frontBox.find('.flip-box-inner').outerHeight(),
        backBox.find('.flip-box-inner').css('height', frontBoxHeight + 'px');
      });

    });

  }

  setTimeout(handleFlipBoxes, 500);


  $('.flip-box-wrapper.on-hover').on('mouseenter', function() {
    $(this).addClass('flip');
  });
  $('.flip-box-wrapper.on-hover').on('mouseleave', function() {
    $(this).removeClass('flip');
  });
  $('.flip-box-wrapper.on-click').on('click', function() {
    $(this).toggleClass('flip');
  });


  $('.monthly').on('click', function (e) {
    e.preventDefault();
    if($('.flip-box').hasClass('flip')) {
        $('.flip-box').removeClass('flip');
    } else {
        $('.flip-box').addClass('flip');
    }
  });




  if($().owlCarousel) {

    $('#testimonials-carousel-v1').owlCarousel({
      dots: false,
      animateIn: 'zoomIn',
      animateOut: 'zoomOut',
      items: 1,
    });

    $('#carousel-1').owlCarousel({
      nav: true,
      dots: true,
      animateIn: 'zoomIn',
      animateOut: 'zoomOut',
      navText: false,
      responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 4
        }
      }
    });

    $('#carousel-2').owlCarousel({
      nav: true,
      animateIn: 'zoomIn',
      animateOut: 'zoomOut',
      navText: false,
      responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 3
        }
      }
    });

    $('#carousel-3').owlCarousel({
      animateIn: 'zoomIn',
      animateOut: 'zoomOut',
      responsive: {
        0: {
            items: 1
        },
        600: {
            items: 4
        },
        1000: {
            items: 6
        }
      }
    });

    $('#carousel-3-2').owlCarousel({
      animateIn: 'zoomIn',
      animateOut: 'zoomOut',
      responsive: {
        0: {
            items: 1
        },
        600: {
            items: 4
        },
        1000: {
            items: 6
        }
      }
    });

    $('#carousel-4').owlCarousel({
      nav: true,
      loop: true,
      animateIn: 'slideInDown',
      animateOut: 'slideOutDown',
      items: 1,
      autoplay: false
    });


    $('#owl-carousel-video').owlCarousel({
        items: 1,
        merge: true,
        loop: true,
        margin: 10,
        video: true,
        lazyLoad: true,
        center: true,
        responsive: {
            480: {
                items: 2
            },
            600: {
                items: 4
            }
        }
    });

    $('.fancy-carousel').owlCarousel({
      items : 1,
      slideBy:1,
      responsiveClass:true,
      responsive:{
        650: {
          margin: 0,
        },
        768: {
          margin: -400,
        },
        800: {
          margin: -450,
        },
        900: {
          margin: -500,
        },
        1000: {
          margin: -550,
        },
        1200: {
          margin: -600,
        }
      },
      autoplay: false,
      smartSpeed:1000,
      autoplayTimeout:5000,
      autoplayHoverPause:true,
      loop:true,
      dots:false,
      nav:true,
      navText: false
    });

  }



  // Zoom out on scroll

  /*var bigImage = $('.bigimage'),
    smallImage = $('.smallimage')
    offset = bigImage.offset(),
    windowHeight = $(window).height();

  $(window).on('scroll', function() {

    var windowTop = $(window).scrollTop(),
      scrollPercent = (offset.top - windowTop) / offset.top,
      scale = 'scale(' + scrollPercent + ')';

    if (scrollPercent >= 0.3) {
            bigImage.css({
                'transform': 'translateY(0px) scale(' + scrollPercent + ')'
            });

    } else {
      bigImage.css({
                'transform': 'translateY(-' + ($scroll - el.data('scroll-point')) + 'px) scale(' + 0.3 + ')'
            });
    }

    if (windowTop >= 960) {
      bigImage.hide();
    } else {
      bigImage.show();
    }

  });*/

  // Progress bars

  if($().appear && $().progressbar) {

    $('.progress.horizontal .progress-bar').each(function() {
      $(this).appear(function() {
        $(this).progressbar();
      }, {accX: 0, accY: -100});
    });

    $('.progress.vertical .progress-bar').each(function() {
      $(this).appear(function() {
        $(this).progressbar({display_text: 'fill'});
      }, {accX: 0, accY: -100});
    });

  }

  // Outline only for keyboard

  $(function(){
    $('*').on('keydown.tab', function(e){
      if ( 9== e.which && this == e.target ){
        window.setTimeout( function() {
          $('.outline').removeClass('outline');
          $(document.activeElement).addClass('outline');
        }, 100 );
      }
    });
    $(document.activeElement).on('click', function() {
      window.setTimeout( function() {
        $('.outline').removeClass('outline');
      }, 100 );
    });
  });

  // Process icons animation

  /*if($().velocity && $().appear) {

    $('.velo').velocity(
        {
            //rotateY: '360deg',
            //'margin-left': '60px',
        },
        {
            //duration: 4000,
            //loop: true // Loop one time (animate scale to 1.5 then back to its original value).
        }
    );

    $('.line').appear(function() {

        var processNumber1 = $(this).parent().find('.process-number-1');
        var processNumber2 = $(this).parent().find('.process-number-2');
        var processNumber3 = $(this).parent().find('.process-number-3');
        var processNumber4 = $(this).parent().find('.process-number-4');

        $(this).velocity(
            {
                width: '100%'
            },
            {
                duration: 5000
            }
        );
        processNumber1.velocity('fadeIn', {duration: 500, delay: 700});
        processNumber2.velocity('fadeIn', {duration: 500, delay: 1800});
        processNumber3.velocity('fadeIn', {duration: 500, delay: 2600});
        processNumber4.velocity('fadeIn', {duration: 500, delay: 3500});
    });

  }*/

  // jFlatTimeline (Events Calendar)

  if($().jflatTimeline) {

    $('div.jflatTimeline').jflatTimeline({
      scroll : '2',    //max dates scrolling per arrow click
      scrollingTime : '300' // scrolling time
    });

  }


  // Animsition

    /*if($().animsition) {

      $('.animsition').animsition({

        inClass               :   'fade-in',
        outClass              :   'fade-out',
        inDuration            :    1000,
        outDuration           :    800,
        linkElement           :   '.animsition-link',
        // e.g. linkElement   :   'a:not([target='_blank']):not([href^=#])'
        loading               :    true,
        loadingParentElement  :   'body', //animsition wrapper element
        loadingClass          :   'loadero',
        unSupportCss          : [ 'animation-duration',
                                  '-webkit-animation-duration',
                                  '-o-animation-duration'
                                ],
        overlay               :   false,
        overlayClass          :   'animsition-overlay-slide',
        overlayParentElement  :   'body'

      });

    }*/

        if($().animsition) {

        $(".animsition").animsition({
          inClass: 'fade-in',
          outClass: 'fade-out',
          inDuration: 500,
          outDuration: 500,
          linkElement: '.animsition-link, [data-link="animsition"]',
          // e.g. linkElement: 'a:not([target="_blank"]):not([href^=#])'
          loading: true,
          loadingParentElement: 'body', //animsition wrapper element
          loadingClass: 'loadero',
          loadingInner: '', // e.g '<img src="loading.svg" />'
          timeout: true,
          timeoutCountdown: 5000,
          onLoadEvent: true,
          browser: [ 'animation-duration', '-webkit-animation-duration'],
          // "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
          // The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
          overlay : false,
          overlayClass : 'animsition-overlay-slide',
          overlayParentElement : 'body',
          transition: function(url){ window.location.href = url; }
        });

}



  // easyPieChart

  if($().appear && $().easyPieChart) {

    $('.pie-chart-wrapper').each( function() {
      $(this).appear(function() {
        $(this).find('.pie-chart-default').easyPieChart({
          easing: 'easeInQuad',
          scaleColor: false,
          onStep: function(from, to, percent) {
            $(this.el).find('.percent').text(Math.round(percent));
          }
        });
      }, {accX: 0, accY: -100});
    });

    $('.pie-chart-wrapper').each( function() {
      $(this).appear(function() {
        $(this).find('.pie-chart-gradient').easyPieChart({
          easing: 'easeInQuad',
          scaleColor: false,
          onStep: function(from, to, percent) {
            $(this.el).find('.percent').text(Math.round(percent));
          },
          barColor: function(percent) {
            var ctx = this.renderer.getCtx();
            var gradient = ctx.createRadialGradient(0,0,100,0,150,100);
            gradient.addColorStop(0, '#1573d2');
            gradient.addColorStop(0.75, '#ff0066');
            return gradient;
          }
        });
      }, {accX: 0, accY: -100});
    });

  }

  // Counters

  if($().appear && $().countTo) {
    $('.counter-wrapper').each(function() {
      $(this).appear(function() {
        $(this).find('.counter').countTo({
          refreshInterval: 1
        });
      }, {accX: 0, accY: -100});
    });
  }

  // FitVids.js

  if($().fitVids) {
    $('.fit-vids').fitVids();
  }

  // WOW init

  if(Modernizr.cssanimations) {
    new WOW().init();
  }

  // Smooth scroll

  /*$('a[href^=#onepage], a[href^=#smooth], [data-scroll=smooth]').click(function () {
      if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          if (target.length) {
          // stop() = without anchor
              $('html,body').stop().animate({
                  scrollTop: target.offset().top - 20 // dodalem minus 50
              }, 1000, 'easeInQuad');
              return false;
          }
      }
  });*/

$('a[href^=#onepage], a[href^=#smooth], [data-scroll=smooth]').click(function () {
      if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          if (target.length) {
            target.velocity("scroll",{ duration: 1500, offset: -20, easing: 'easeInSine' });
            return false;
          }
      }
  });

  // Icon progress bar

  $('.icon-progress-bar').each(function () {

    var $infographic = $(this).find('.icons');
    var $icon = $infographic.attr('data-icon');
    var $all = $infographic.attr('data-all');
    var $htmlIcons = '';
    for (var j = 0; j < $all; j++) {
      $htmlIcons += '<i class="fa ' + $icon + '"></i> ';
    }
    $infographic.html($htmlIcons);
    $(this).appear(function() {
        function myLoop () {
            setTimeout(function() {
                $($icons[i]).css('color', $color);
                i++;
                if (i < $active) {
                    myLoop();
                }
            }, $delay);
        }
        var i = 0;
        var $active = $infographic.attr('data-active');
        var $delay = $infographic.attr('data-delay');
        var $color = $infographic.attr('data-color');
        var $fontsize = $infographic.attr('data-font-size');
        var $icons = $infographic.find('i');
        $icons.css('font-size', $fontsize);
        myLoop();
    }, {accX: 0, accY: -100});

  });

  // Fixed alert close

  if($().velocity) {

    $('.alert-fixed-top .alert-close, .alert-fixed-bottom .alert-close').click(function (e) {
        e.preventDefault();
        $('.alert-dismiss').velocity('slideUp', 700);
    });

  }

}(window.jQuery, window, document));





function countCSSRules() {
    var results = '',
        log = '';
    if (!document.styleSheets) {
        return;
    }
    for (var i = 0; i < document.styleSheets.length; i++) {
        countSheet(document.styleSheets[i]);
    }
    function countSheet(sheet) {
        var count = 0;
        if (sheet && sheet.cssRules) {
            for (var j = 0, l = sheet.cssRules.length; j < l; j++) {
                if( !sheet.cssRules[j].selectorText ) {
                    continue;
                }
                count += sheet.cssRules[j].selectorText.split(',').length;
            }

            log += '\nFile: ' + (sheet.href ? sheet.href : 'inline <style> tag');
            log += '\nRules: ' + sheet.cssRules.length;
            log += '\nSelectors: ' + count;
            log += '\n--------------------------';
            if (count >= 4096) {
                results += '\n********************************\nWARNING:\n There are ' + count + ' CSS rules in the stylesheet ' + sheet.href + ' - IE will ignore the last ' + (count - 4096) + ' rules!\n';
            }
        }
    }
    console.log(log);
    console.log(results);
}
countCSSRules();


