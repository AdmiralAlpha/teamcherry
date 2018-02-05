options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

var marker, questmarker;
var presetDistance = 5; //meter?

var locs = [ {lat: 59.313289, lng: 18.110288}, {lat: 59.313289, lng: 18.112088}, {lat: 59.313289, lng: 18.113888}, {lat: 59.313289, lng: 18.116888} ];

var i = 0;

function error(err) {
  console.warn('ERROR(' + err.code + '): ' + err.message);
}

function checkQuest(pos) {
  playerPos = new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude);
  questPos = questmarker.getPosition();
  marker.setPosition(playerPos);
  dist = google.maps.geometry.spherical.computeDistanceBetween(playerPos, questPos);
  console.log(dist);
  if (dist <= presetDistance) {
    questmarker.addListener('click', function() {
    //   for (i = 0; i < locs.length; i++) { 
    //     questmarker.setPosition( new google.maps.LatLng( locs[i] ) );
    // }
      if (i<3) {
        i++;
      }
      infowindow.open(myMap, marker);
      questmarker.setPosition( new google.maps.LatLng(locs[i]) );
    });
  } else if (dist > presetDistance) {
    google.maps.event.clearInstanceListeners(questmarker);
  }

}


function startMap() {
  var myPos = navigator.geolocation.getCurrentPosition(initMap);
}

function initMap(myPos) {
  var MapCenter = new google.maps.LatLng(myPos.coords.latitude, myPos.coords.longitude);
  var MapZoom = 15;
  var MapZoomMax = 24;
  var MapZoomMin = 6;

  var mapOptions = {
    center: MapCenter,
    zoom: MapZoom,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    maxZoom: MapZoomMax,
    minZoom: MapZoomMin,
    //Turn off the map controls as we will be adding our own later.
    panControl: false,
    mapTypeControl: false,
    styles: [
      { elementType: 'geometry', stylers: [{ color: '#242f3e' }] },
      { elementType: 'labels.text.stroke', stylers: [{ color: '#242f3e' }] },
      { elementType: 'labels.text.fill', stylers: [{ color: '#746855' }] },
      {
        featureType: 'administrative.locality',
        elementType: 'labels.text.fill',
        stylers: [{ "visibility": "off" }]
      },
      {
        featureType: 'poi',
        elementType: 'labels.text.fill',
        stylers: [{ "visibility": "off" }]
      },
      {
        featureType: 'poi.park',
        elementType: 'geometry',
        stylers: [{ color: '#263c3f' }]
      },
      {
        featureType: 'poi.park',
        elementType: 'labels.text.fill',
        stylers: [{ "visibility": "off" }]
      },
      {
        featureType: 'road',
        elementType: 'geometry',
        stylers: [{ color: '#38414e' }]
      },
      {
        featureType: 'road',
        elementType: 'geometry.stroke',
        stylers: [{ color: '#212a37' }]
      },
      {
        featureType: 'road',
        elementType: 'labels.text.fill',
        stylers: [{ "visibility": "off" }]
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry',
        stylers: [{ color: '#746855' }]
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry.stroke',
        stylers: [{ color: '#1f2835' }]
      },
      {
        featureType: 'road.highway',
        elementType: 'labels.text.fill',
        stylers: [{ "visibility": "off" }]
      },
      {
        featureType: 'transit',
        elementType: 'geometry',
        stylers: [{ color: '#2f3948' }]
      },
      {
        featureType: 'transit.station',
        elementType: 'labels.text.fill',
        stylers: [{ "visibility": "off" }]
      },
      {
        featureType: 'water',
        elementType: 'geometry',
        stylers: [{ color: '#17263c' }]
      },
      {
        featureType: 'water',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#515c6d' }]
      },
      {
        featureType: 'water',
        elementType: 'labels.text.stroke',
        stylers: [{ color: '#17263c' }]
      }
    ]
  };

  myMap = new google.maps.Map(document.getElementById("myMap"), mapOptions);
  runMap(MapCenter);

}

google.maps.event.addDomListener(window, 'load', startMap);

// marker.setPosition(LatLng);
function newMarker() {
  var myLatLng = locs[i];

  questmarker = new google.maps.Marker({
    position: myLatLng,
    map: myMap,
    icon: '../img/usa.pin.png',
    title: 'Quest'
  });
  questmarker.setAnimation(google.maps.Animation.BOUNCE);

}

function runMap(MapCenter) {
  marker = new google.maps.Marker({
    position: MapCenter,
    map: myMap,
    animation: google.maps.Animation.DROP,
    title: 'Player'
  });
  newMarker();
  navigator.geolocation.watchPosition(checkQuest, error, options);

}





var contentString = '<div id="content">'+
'<div id="siteNotice">'+
'</div>'+
'<h1 id="firstHeading" class="firstHeading">Spy Quest</h1>'+
'<div id="bodyContent">'+
'<p>Welcome <b>Agent Cherry</b>.' +
'This is the beginning of your mission. ' +
'Proceed to the next marker to continue.</p>'+
'</div>'+
'</div>';

var contentString2 = '<div id="content">'+
'<div id="siteNotice">'+
'</div>'+
'<h1 id="firstHeading" class="firstHeading">Quest 2</h1>'+
'<div id="bodyContent">'+
'<p>Welcome <b>Agent Cherry</b>.' +
'This is the beginning of your mission. ' +
'Proceed to the next marker to continue.</p>'+
'</div>'+
'</div>';

var contentString3 = '<div id="content">'+
'<div id="siteNotice">'+
'</div>'+
'<h1 id="firstHeading" class="firstHeading">Quest 3</h1>'+
'<div id="bodyContent">'+
'<p>Welcome <b>Agent Cherry</b>.' +
'This is the beginning of your mission. ' +
'Proceed to the next marker to continue.</p>'+
'</div>'+
'</div>';

var contentString4 = '<div id="content">'+
'<div id="siteNotice">'+
'</div>'+
'<h1 id="firstHeading" class="firstHeading">Quest 4</h1>'+
'<div id="bodyContent">'+
'<p>Welcome <b>Agent Cherry</b>.' +
'This is the beginning of your mission. ' +
'Proceed to the next marker to continue.</p>'+
'</div>'+
'</div>';

var ques = [ contentString, contentString2, contentString3, contentString4 ];

var infowindow = new google.maps.InfoWindow({
  content: ques[i]
});


// const e = React.createElement;

// ReactDOM.render(
//     e('a', { href: "https://google.se" },
//       e('img', { src: "../img/mapHeader.jpg"})
//   ),
//     document.getElementById('react')

// );
