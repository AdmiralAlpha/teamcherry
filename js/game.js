function startMap () {
  var myPos = navigator.geolocation.watchPosition(initMap);
}

function initMap (myPos) {
var MapCenter = new google.maps.LatLng(myPos.coords.latitude, myPos.coords.longitude);
var MapZoom = 15;
var MapZoomMax = 24;
var MapZoomMin = 12;

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
  styles: [
    {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
    {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
    {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
    {
      featureType: 'administrative.locality',
      elementType: 'labels.text.fill',
      stylers: [{"visibility": "off"}]
    },
    {
      featureType: 'poi',
      elementType: 'labels.text.fill',
      stylers: [{"visibility": "off"}]
    },
    {
      featureType: 'poi.park',
      elementType: 'geometry',
      stylers: [{color: '#263c3f'}]
    },
    {
      featureType: 'poi.park',
      elementType: 'labels.text.fill',
      stylers: [{"visibility": "off"}]
    },
    {
      featureType: 'road',
      elementType: 'geometry',
      stylers: [{color: '#38414e'}]
    },
    {
      featureType: 'road',
      elementType: 'geometry.stroke',
      stylers: [{color: '#212a37'}]
    },
    {
      featureType: 'road',
      elementType: 'labels.text.fill',
      stylers: [{"visibility": "off"}]
    },
    {
      featureType: 'road.highway',
      elementType: 'geometry',
      stylers: [{color: '#746855'}]
    },
    {
      featureType: 'road.highway',
      elementType: 'geometry.stroke',
      stylers: [{color: '#1f2835'}]
    },
    {
      featureType: 'road.highway',
      elementType: 'labels.text.fill',
      stylers: [{"visibility": "off"}]
    },
    {
      featureType: 'transit',
      elementType: 'geometry',
      stylers: [{color: '#2f3948'}]
    },
    {
      featureType: 'transit.station',
      elementType: 'labels.text.fill',
      stylers: [{"visibility": "off"}]
    },
    {
      featureType: 'water',
      elementType: 'geometry',
      stylers: [{color: '#17263c'}]
    },
    {
      featureType: 'water',
      elementType: 'labels.text.fill',
      stylers: [{color: '#515c6d'}]
    },
    {
      featureType: 'water',
      elementType: 'labels.text.stroke',
      stylers: [{color: '#17263c'}]
    }
  ]
};

myMap = new google.maps.Map(document.getElementById("myMap"), mapOptions);	
runMap(MapCenter);
newMarker();
}

google.maps.event.addDomListener(window, 'load', startMap);

function newMarker() {
var myLatLng = {lat: 59.313289, lng: 18.110288};

var marker = new google.maps.Marker({
    position: myLatLng,
    map: myMap,
    title: 'Quest'
  });
  marker.setAnimation(google.maps.Animation.BOUNCE);
}

function runMap (MapCenter) {
var marker = new google.maps.Marker({
  position: MapCenter,
  map: myMap,
  animation: google.maps.Animation.DROP,
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