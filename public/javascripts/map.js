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
    style: MAPBOX_STYLE_ID, //hosted style id
    center: center, // starting position
    zoom: 12 // starting zoom
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
