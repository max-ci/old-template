!function($,e,o){$(function(){function e(e){var t,i=new google.maps.LatLng(52.229675,21.012228),a={zoom:8,center:i,scrollwheel:!1};t=new google.maps.Map(o.getElementById("map-1"),a),t.setOptions({styles:l});var n=new google.maps.DirectionsService,s={origin:e,destination:i,travelMode:google.maps.DirectionsTravelMode.DRIVING,unitSystem:google.maps.UnitSystem.METRIC};n.route(s,function(e,o){o==google.maps.DirectionsStatus.OK?new google.maps.DirectionsRenderer({map:t,directions:e}):($("#calculate-route-error").append("Unable to retrieve your route<br />"),setTimeout(function(){$("#calculate-route-error").empty()},3e3))})}var t,i=new google.maps.LatLng(52.229675,21.012228),a={zoom:8,center:i,scrollwheel:!1};t=new google.maps.Map(o.getElementById("map-1"),a);var n=new google.maps.Marker({position:i,map:t,title:"Our location",animation:google.maps.Animation.DROP}),s='<div class="google-maps-iw"><h4 class="google-maps-iw-heading">EveryTheme</h3><p class="google-maps-iw-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis ullam, asperiores numquam minus earum sequi quia deserunt?</p></div>',r=new google.maps.InfoWindow({maxWidth:350,content:s});google.maps.event.addListener(n,"click",function(){r.open(t,n)}),google.maps.event.addListener(t,"click",function(){r.close()});var l=[{featureType:"landscape",stylers:[{saturation:-100},{lightness:65},{visibility:"on"}]},{featureType:"poi",stylers:[{saturation:-100},{lightness:51},{visibility:"simplified"}]},{featureType:"road.highway",stylers:[{saturation:-100},{visibility:"simplified"}]},{featureType:"road.arterial",stylers:[{saturation:-100},{lightness:30},{visibility:"on"}]},{featureType:"road.local",stylers:[{saturation:-100},{lightness:40},{visibility:"on"}]},{featureType:"transit",stylers:[{saturation:-100},{visibility:"simplified"}]},{featureType:"administrative.province",stylers:[{visibility:"off"}]},{featureType:"water",elementType:"labels",stylers:[{visibility:"on"},{lightness:-25},{saturation:-100}]},{featureType:"water",elementType:"geometry",stylers:[{hue:"#ffff00"},{lightness:-25},{saturation:-97}]}];if(t.setOptions({styles:l}),autocompleteTo=new google.maps.places.Autocomplete(o.getElementById("from"),{types:["geocode"]}),google.maps.event.addListener(autocompleteTo,"place_changed",function(){e($("#from").val())}),"undefined"==typeof navigator.geolocation)return void $("#calculate-route-error").text("Your browser doesn't support the Geolocation API");$("#from-your-location, #to-your-location").click(function(e){e.preventDefault();var o=this.id.substring(0,this.id.indexOf("-"));navigator.geolocation.getCurrentPosition(function(e){var t=new google.maps.Geocoder;t.geocode({location:new google.maps.LatLng(e.coords.latitude,e.coords.longitude)},function(e,t){t==google.maps.GeocoderStatus.OK?$("#"+o).val(e[0].formatted_address):($("#calculate-route-error").append("Unable to retrieve your address<br />"),setTimeout(function(){$("#calculate-route-error").empty()},3e3))})},function(e){$("#calculate-route-error").append("Error: "+e.message+"<br />"),setTimeout(function(){$("#calculate-route-error").empty()},3e3)},{enableHighAccuracy:!0,timeout:1e4})}),$("#from-your-location").click(function(o){o.preventDefault(),setTimeout(function(){e($("#from").val())},500)});var g,m=new google.maps.LatLng(52.229675,21.012228),p={zoom:8,center:m,scrollwheel:!1};g=new google.maps.Map(o.getElementById("map-2"),p);var c=new google.maps.Marker({position:m,map:g,title:"Our location",animation:google.maps.Animation.DROP}),u='<div class="google-maps-iw"><h4 class="google-maps-iw-heading">EveryTheme</h3><p class="google-maps-iw-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis ullam, asperiores numquam minus earum sequi quia deserunt?</p></div>',d=new google.maps.InfoWindow({maxWidth:350,content:u});google.maps.event.addListener(c,"click",function(){d.open(g,c)}),google.maps.event.addListener(g,"click",function(){d.close()});var y,f=new google.maps.LatLng(52.229675,21.012228),v=new google.maps.LatLng(52.229226,20.238987),w=new google.maps.LatLng(52.165179,21.800523),h={zoom:9,center:f,scrollwheel:!1};y=new google.maps.Map(o.getElementById("map-3"),h);var L=new google.maps.Marker({position:f,map:y,title:"Our location",animation:google.maps.Animation.DROP}),T=new google.maps.Marker({position:v,map:y,title:"Our location",animation:google.maps.Animation.DROP}),b=new google.maps.Marker({position:w,map:y,title:"Our location",animation:google.maps.Animation.DROP}),O='<div class="google-maps-iw"><h4 class="google-maps-iw-heading">EveryTheme</h3><p class="google-maps-iw-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis ullam, asperiores numquam minus earum sequi quia deserunt?</p></div>',k=new google.maps.InfoWindow({maxWidth:350,content:O});google.maps.event.addListener(L,"click",function(){k.open(y,L)}),google.maps.event.addListener(T,"click",function(){k.open(y,T)}),google.maps.event.addListener(b,"click",function(){k.open(y,b)}),google.maps.event.addListener(y,"click",function(){k.close()});var D=[{stylers:[{hue:"#ff1a00"},{invert_lightness:!0},{saturation:-100},{lightness:33},{gamma:.5}]},{featureType:"water",elementType:"geometry",stylers:[{color:"#2D333C"}]}];y.setOptions({styles:D});var I,M={position:{lat:37.86926,lng:-122.254811},pov:{heading:165,pitch:0},zoom:0,scrollwheel:!1};I=new google.maps.StreetViewPanorama(o.getElementById("street-view"),M)})}(window.jQuery,window,document);