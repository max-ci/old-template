(function($) {

  $('#social-stream').dcSocialStream({
    feeds: {
      twitter: {
        id: 'designchemical'
      },
      rss: {
        id: 'http://feeds.feedburner.com/DesignChemical'
      },
      stumbleupon: {
        id: 'designchemical'
      },
      facebook: {
        id: '157969574262873,Facebook Timeline/376995711728'
      },
      google: {
        id: '111470071138275408587',
        api_key: 'AIzaSyB1UZNnscjMDjjH-pi_XbnLRld2wAqi3Ek'
      },
      delicious: {
        id: 'designchemical'
      },
      vimeo: {
        id: 'brad'
      },
      youtube: {
        id: 'FilmTrailerZone/UUPPPrnT5080hPMxK1N4QSjA',
        thumb: '0'
      },
      pinterest: {
        id: 'jaffrey,designchemical/design-ideas'
      },
      flickr: {
        id: ''
      },
      lastfm: {
        id: 'lastfm'
      },
      dribbble: {
        id: 'frogandcode'
      },
      deviantart: {
        id: 'isacg'
      },
      tumblr: {
        id: 'richters',
        thumb: 250
      }
    },
    twitterId: 'designchemical',
    iconPath: 'vendors/social-stream/images/dcsns-dark/',
    imagePath: 'vendors/social-stream/images/dcsns-dark/',
  });

  $('#social-wall').dcSocialStream({
    feeds: {
      twitter: {
        id: ''
      },
      rss: {
        id: 'http://feeds.feedburner.com/DesignChemical,http://feeds.feedburner.com/designmodo'
      },
      stumbleupon: {
        id: 'remix4'
      },
      facebook: {
        id: '157969574262873,Facebook Timeline/376995711728',
        out: 'intro,thumb,text,user,share'
      },
      google: {
        id: '111470071138275408587'
      },
      delicious: {
        id: 'designchemical'
      },
      vimeo: {
        id: 'brad'
      },
      youtube: {
        id: 'FilmTrailerZone',
        thumb: '0'
      },
      pinterest: {
        id: 'jaffrey,designchemical/design-ideas'
      },
      flickr: {
        id: '75034991@N05'
      },
      lastfm: {
        id: 'lastfm'
      },
      dribbble: {
        id: 'frogandcode'
      },
      deviantart: {
        id: 'isacg'
      },
      tumblr: {
        id: 'richters',
        thumb: 250
      },
      instagram: {
        id: '!186786085',
        accessToken: '186786085.91dbf99.da4d8fab71544cdba8645bd0a02f07a1',
        clientId: '91dbf99a184e43dca3cc115500a5ba58',
        comments: 3,
        likes: 10
      }
    },
    rotate: {
      delay: 0
    },
    twitterId: 'designchemical',
    control: false,
    filter: true,
    wall: true,
    cache: false,
    max: 'limit',
    limit: 3,
    iconPath: 'vendors/social-stream/images/dcsns-dark/',
    imagePath: 'vendors/social-stream/images/dcsns-dark/',
    center: true
  });

})(jQuery);