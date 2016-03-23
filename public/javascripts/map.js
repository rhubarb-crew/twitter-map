window.onload = function() {
  var mapID = 'twitterMap';
  // [latitude, longitude]
  var mapCenter = [34.052234, -118.243685];
  
  //createLeafletMap(mapID, mapCenter);
  createMapboxGLMap(mapID, mapCenter.reverse());
};

function createLeafletMap(id, center) {
      var mymap = L.map(id); //pass in the id of the div your map will display in
    // Currently set to center on Downtown Los Angeles
    mymap.setView(center, 15);
    // Currently using 'Mapbox' - you can also pass in 'OSM':
    mymap.addLayer(createLeafletTileLayer('Mapbox'));
    
    // Marker created in Downtown Los Angeles
    var marker = L.marker(center).addTo(mymap);
}

function createMapboxGLMap(id, center) {
  mapboxgl.accessToken = MAPBOX_ACCESS_TOKEN;
  
  var map = new mapboxgl.Map({
    container: id, // container id
    style: MAPBOX_STYLE_ID, //hosted style i
    center: center, // starting position
    zoom: 12 // starting zoom
  });
  
  // Add markers, reference: https://www.mapbox.com/maki/
  // Note: coordinates are [longitude, latitude]
  map.on('style.load', function () {
    //console.log(tweetsRaw);
    
    /* Features example:
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [-118.243685, 34.052234]
        },
        "properties": {
          "title": "DTLA",
          "marker-symbol": "marker"
        }
      }
    */
    
    
    var geojsonMarkers = {
      "type": "geojson",
      "data": {
        "type": "FeatureCollection",
        "features": [
        ]
      }
    };
    
    if (tweetsRaw.statuses.length > 0) {
      tweetsRaw.statuses.forEach(function (tweet) {
        if (tweet.coordinates != null) {
          geojsonMarkers.data.features.push({
            "type": "Feature",
            "geometry": {
              "type": "Point",
              "coordinates": tweet.coordinates.coordinates
            },
            "properties": {
              "title": tweet.user.screen_name,
              "marker-symbol": "marker"
            }
          });
        }
      });
    }
    
    
    map.addSource("markers", geojsonMarkers);

    map.addLayer({
        "id": "markers",
        "type": "symbol",
        "source": "markers",
        "layout": {
            "icon-image": "{marker-symbol}-15",
            "text-field": "{title}",
            "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
            "text-offset": [0, 0.6],
            "text-anchor": "top"
        }
    });
  });
  
  
}

// Source options: 'OSM' or 'Mapbox'
function createLeafletTileLayer(source) {
  var tileLayer;
  var minZoom = 12;
  var maxZoom = 18;
  
  switch (source) {
    case 'OSM':
      tileLayer = new L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
        minZoom: minZoom,
        maxZoom: maxZoom
      });
      break;
    case 'Mapbox':
      tileLayer = new L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=' + MAPBOX_ACCESS_TOKEN, {
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
        minZoom: minZoom,
        maxZoom: maxZoom,
        id: MAPBOX_MAP_ID,
        accessToken: MAPBOX_ACCESS_TOKEN
      });
      break;
    default:
      break;
  }
  return tileLayer;
}
