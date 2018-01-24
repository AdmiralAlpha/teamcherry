function startMap () {
  var myPos = navigator.geolocation.watchPosition(initMap);
}

function initMap (myPos) {
var MapCenter = new google.maps.LatLng(myPos.coords.latitude, myPos.coords.longitude);
var MapZoom = 6;
var MapZoomMax = 24;
var MapZoomMin = 6;
// var MapZoomMin = 12;

var mapOptions = { 
  center: MapCenter, 
  zoom: MapZoom,
  //The type of map. In addition to ROADMAP, the other 'premade' map styles are SATELLITE, TERRAIN and HYBRID. 
  mapTypeId: google.maps.MapTypeId.ROADMAP,
  maxZoom:MapZoomMax,
  minZoom:MapZoomMin,
  //Turn off the map controls as we will be adding our own later.
  panControl: false,
  mapTypeControl: false,
};

myMap = new google.maps.Map(document.getElementById("myMap"), mapOptions);	
runMap(MapCenter);
newMarker();
}

google.maps.event.addDomListener(window, 'load', startMap);
//var myLatlng = {lat: myPos.coords.latitude, lng: myPos.coords.longitude};

function newMarker() {
  var myLatLng = {lat: 59.313289, lng: 18.110288};

  var marker = new google.maps.Marker({
      position: myLatLng,
      map: myMap,
      title: 'Quest'
    });
}


function runMap (MapCenter) {
var marker = new google.maps.Marker({
  position: MapCenter,
  map: myMap,
  title: 'Click to zoom'
});
}


const e = React.createElement;

ReactDOM.render(
    e('a', { href: "https://google.se" },
      e('img', { src: "https://imgs.xkcd.com/comics/random_number.png"})
  ),
    document.getElementById('react')

);