options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

var marker, questmarker, currentQuest;
var presetDistance = 10000; //meter?

//const api_url = "http://localhost:3000/api";
const api_url = "https://gentle-eyrie-55166.herokuapp.com/api";

var locs = [];
var obj = {};
function fetchLocs() {
var locs2 = [{ lat: 59.313289, lng: 18.110288 }, { lat: 59.313289, lng: 18.112088 }, { lat: 59.313289, lng: 18.113888 }, { lat: 59.313289, lng: 18.116888 }, { lat: 59.313289, lng: 18.117888 }];
fetch(api_url + '/markers', {
	method: 'get'
}).then(function(res) {
  return res.json();
}).then(function(j) {
  var m = j.Markers;
  //console.log(m);
  for (i in m) {
    obj = new google.maps.LatLng(m[i].latitude, m[i].longitude);
    //obj.lat = parseFloat(m[i].latitude);
    //obj.lng = parseFloat(m[i].longitude);

    locs.push(obj);
  }
  startMap();
}).catch(function(err) {
	// Error :(
});
console.log(locs);
//console.log(locs2);

}
var links = ['../index.html', 'quest1.html?currentQuest=', 'quest2.html?currentQuest=', 'quest3.html?currentQuest=', 'quest4.html?currentQuest=', 'quest5.html?currentQuest='];


var urlParams = new URLSearchParams(window.location.search);
var c = parseInt(urlParams.get('currentQuest'));
if (c) {
  currentQuest = c;
} else {
  currentQuest = 0;
}


function error(err) {
  console.warn('ERROR(' + err.code + '): ' + err.message);
}

function checkQuest(pos) {
  playerPos = new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude);

  questPos = questmarker.getPosition();
  marker.setPosition(playerPos);
  dist = google.maps.geometry.spherical.computeDistanceBetween(playerPos, questPos);
  // console.log(dist);
  if (dist <= presetDistance) {
    console.log("close");
    questmarker.addListener('click', function () {
      window.location.href = links[currentQuest + 1] + currentQuest;
      questmarker.setPosition(new google.maps.LatLng(locs[currentQuest]));
    });
  } else if (dist > presetDistance) {
    console.log("not close");
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

google.maps.event.addDomListener(window, 'load', fetchLocs);


function newMarker() {
  var myLatLng = locs[currentQuest];
  questmarker = new google.maps.Marker({
    position: myLatLng,
    map: myMap,
    icon: '../img/blackpin.png.png',
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


const e = React.createElement;

ReactDOM.render(
  e('a', { href: "../html/leaderboard.php" },
    e('img', { src: "../img/usertiny.png" })
  ),
  document.getElementById('react')
);
