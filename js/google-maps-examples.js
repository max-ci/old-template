(function($, window, document) {

  $(function() {

    // Google Maps with route planner and light style

    var map1;
    var myLatlng = new google.maps.LatLng(52.229675,21.012228);
    //var markerImage = '../images/pattern1.png';
    var mapOptions = {
      zoom: 8,
      center: myLatlng,
      scrollwheel: false,
    };

    map1 = new google.maps.Map(document.getElementById('map-1'), mapOptions);

    var marker = new google.maps.Marker({
      position: myLatlng,
      map: map1,
      title: 'Our location',
      animation: google.maps.Animation.DROP,
      //icon: markerImage
    });

    var contentString1 = '<div class="google-maps-iw">' +
                         '<h4 class="google-maps-iw-heading">EveryTheme</h3>' +
                         '<p class="google-maps-iw-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis ullam, asperiores numquam minus earum sequi quia deserunt?</p>' +
                         '</div>';

    var infoWindow1 = new google.maps.InfoWindow({
      maxWidth: 350,
      content: contentString1
    });

    google.maps.event.addListener(marker, 'click', function() {
      infoWindow1.open(map1,marker);
    });

    google.maps.event.addListener(map1, 'click', function() {
      infoWindow1.close();
    });

    var styles1 = [
      {
        "featureType": "landscape",
        "stylers": [
          {
            "saturation": -100
          },
          {
            "lightness": 65
          },
          {
            "visibility": "on"
          }
        ]
      },
      {
        "featureType": "poi",
        "stylers": [
          {
            "saturation": -100
          },
          {
            "lightness": 51
          },
          {
            "visibility": "simplified"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "stylers": [
          {
            "saturation": -100
          },
          {
            "visibility": "simplified"
          }
        ]
      },
      {
        "featureType": "road.arterial",
        "stylers": [
          {
            "saturation": -100
          },
          {
            "lightness": 30
          },
          {
            "visibility": "on"
          }
        ]
      },
      {
        "featureType": "road.local",
        "stylers": [
          {
            "saturation": -100
          },
          {
            "lightness": 40
          },
          {
            "visibility": "on"
          }
        ]
      },
      {
        "featureType": "transit",
        "stylers": [
          {
            "saturation": -100
          },
          {
            "visibility": "simplified"
          }
        ]
      },
      {
        "featureType": "administrative.province",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "labels",
        "stylers": [
          {
            "visibility": "on"
          },
          {
            "lightness": -25
          },
          {
            "saturation": -100
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
          {
            "hue": "#ffff00"
          },
          {
            "lightness": -25
          },
          {
            "saturation": -97
          }
        ]
      }
    ];
    map1.setOptions({styles: styles1});

    function calculateRoute(from) {
      // Draw the map
      var map1;
      var myLatlng = new google.maps.LatLng(52.229675,21.012228);
      var mapOptions = {
        zoom: 8,
        center: myLatlng,
        scrollwheel: false,
      };
      map1 = new google.maps.Map(document.getElementById('map-1'), mapOptions);
      map1.setOptions({styles: styles1});

      var directionsService = new google.maps.DirectionsService();
      var directionsRequest = {
        origin: from,
        destination: myLatlng,
        travelMode: google.maps.DirectionsTravelMode.DRIVING,
        unitSystem: google.maps.UnitSystem.METRIC
      };
      directionsService.route(
        directionsRequest,
        function(response, status) {
          if (status == google.maps.DirectionsStatus.OK) {
            new google.maps.DirectionsRenderer({
              map: map1,
              directions: response
            });
          } else {
            $("#calculate-route-error").append("Unable to retrieve your route<br />");
            setTimeout(function () {
              $("#calculate-route-error").empty();
            }, 3000);
          }
        }
      );
    }

    autocompleteTo = new google.maps.places.Autocomplete(
      (document.getElementById('from')),
      {types: ['geocode']}
    );

    google.maps.event.addListener(autocompleteTo, 'place_changed', function () {
      calculateRoute($("#from").val());
    });

    // If the browser supports the Geolocation API
    if (typeof navigator.geolocation == "undefined") {
      $("#calculate-route-error").text("Your browser doesn't support the Geolocation API");
      return;
    }

    $("#from-your-location, #to-your-location").click(function(event) {
      event.preventDefault();
      var addressId = this.id.substring(0, this.id.indexOf("-"));

      navigator.geolocation.getCurrentPosition(function(position) {
        var geocoder = new google.maps.Geocoder();
        geocoder.geocode({
          "location": new google.maps.LatLng(position.coords.latitude, position.coords.longitude)
        },
        function(results, status) {
          if (status == google.maps.GeocoderStatus.OK) {
            $("#" + addressId).val(results[0].formatted_address);
          } else {
            $("#calculate-route-error").append("Unable to retrieve your address<br />");
            setTimeout(function () {
              $("#calculate-route-error").empty();
            }, 3000);
          }
        });
      },
      function(positionError) {
        $("#calculate-route-error").append("Error: " + positionError.message + "<br />");
        setTimeout(function () {
          $("#calculate-route-error").empty();
        }, 3000);
      },
      {
        enableHighAccuracy: true,
        timeout: 10 * 1000 // 10 seconds
      });
    });

    $("#from-your-location").click(function(e) {
      e.preventDefault();
      setTimeout(function () {
        calculateRoute($("#from").val());
      }, 500);
    });

    // Default Google Maps

    var map2;
    var myLatlng2 = new google.maps.LatLng(52.229675,21.012228);
    //var image = 'images/beachflag.png';
    var mapOptions2 = {
      zoom: 8,
      center: myLatlng2,
      scrollwheel: false,
    };

    map2 = new google.maps.Map(document.getElementById('map-2'), mapOptions2);

    var marker2 = new google.maps.Marker({
      position: myLatlng2,
      map: map2,
      title: 'Our location',
      animation: google.maps.Animation.DROP,
      //icon: image
    });

    var contentString2 = '<div class="google-maps-iw">' +
                         '<h4 class="google-maps-iw-heading">EveryTheme</h3>' +
                         '<p class="google-maps-iw-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis ullam, asperiores numquam minus earum sequi quia deserunt?</p>' +
                         '</div>';

    var infoWindow2 = new google.maps.InfoWindow({
      maxWidth: 350,
      content: contentString2
    });

    google.maps.event.addListener(marker2, 'click', function() {
      infoWindow2.open(map2,marker2);
    });

    google.maps.event.addListener(map2, 'click', function() {
      infoWindow2.close();
    });

    // Default Google Maps (dark style, three markers)

    var map3;
    var myLatlng3 = new google.maps.LatLng(52.229675,21.012228);
    var myLatlng4 = new google.maps.LatLng(52.229226,20.238987);
    var myLatlng5 = new google.maps.LatLng(52.165179,21.800523);

    //var image = 'images/beachflag.png';
    var mapOptions3 = {
      zoom: 9,
      center: myLatlng3,
      scrollwheel: false,
    };

    map3 = new google.maps.Map(document.getElementById('map-3'), mapOptions3);

    var marker3a = new google.maps.Marker({
      position: myLatlng3,
      map: map3,
      title: 'Our location',
      animation: google.maps.Animation.DROP,
      //icon: image
    });
    var marker3b = new google.maps.Marker({
      position: myLatlng4,
      map: map3,
      title: 'Our location',
      animation: google.maps.Animation.DROP,
      //icon: image
    });
    var marker3c = new google.maps.Marker({
      position: myLatlng5,
      map: map3,
      title: 'Our location',
      animation: google.maps.Animation.DROP,
      //icon: image
    });

    var contentString3 = '<div class="google-maps-iw">' +
                         '<h4 class="google-maps-iw-heading">EveryTheme</h3>' +
                         '<p class="google-maps-iw-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis ullam, asperiores numquam minus earum sequi quia deserunt?</p>' +
                         '</div>';

    var infoWindow3 = new google.maps.InfoWindow({
      maxWidth: 350,
      content: contentString3
    });

    google.maps.event.addListener(marker3a, 'click', function() {
      infoWindow3.open(map3,marker3a);
    });
    google.maps.event.addListener(marker3b, 'click', function() {
      infoWindow3.open(map3,marker3b);
    });
    google.maps.event.addListener(marker3c, 'click', function() {
      infoWindow3.open(map3,marker3c);
    });

    google.maps.event.addListener(map3, 'click', function() {
      infoWindow3.close();
    });

    var styles3 = [
      {
        "stylers": [
          {
            "hue": "#ff1a00"
          },
          {
            "invert_lightness": true
          },
          {
            "saturation": -100
          },
          {
            "lightness": 33
          },
          {
            "gamma": 0.5
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#2D333C"
          }
        ]
      }
    ];
    map3.setOptions({styles: styles3});

    // Street View

    var panorama;
    var streetViewOptions = {
      position: { lat: 37.869260, lng: -122.254811 },
      pov: { heading: 165, pitch: 0 },
      zoom: 0,
      scrollwheel: false
    };
    panorama = new google.maps.StreetViewPanorama(document.getElementById('street-view'), streetViewOptions);

  });

}(window.jQuery, window, document));