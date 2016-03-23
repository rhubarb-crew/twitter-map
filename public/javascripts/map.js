

window.onload = function() {
    var mymap = L.map('twitterMap'); //pass in the id of the div your map will display in
    // Currently set to center on Downtown Los Angeles
    mymap.setView([34.052234, -118.243685], 15);
    // Currently using 'Mapbox' - you can also pass in 'OSM':
    mymap.addLayer(createTileLayer('Mapbox'));
    
    // Marker created in Downtown Los Angeles
    var marker = L.marker([34.052234, -118.243685]).addTo(mymap);
};


function createTileLayer(source) {
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
      tileLayer = new L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWF0aWtpbjkiLCJhIjoiYjMyMjBjZTE4NWUxMDkxOWZjZjFjZWEzZTcxNDUxOTkifQ._ldFl3e17jCs7aWm6zMZ3Q', {
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
        minZoom: minZoom,
        maxZoom: maxZoom,
        id: MAPBOX_MAP_ID,
        accessToken: 'pk.eyJ1IjoibWF0aWtpbjkiLCJhIjoiYjMyMjBjZTE4NWUxMDkxOWZjZjFjZWEzZTcxNDUxOTkifQ._ldFl3e17jCs7aWm6zMZ3Q'
      });
      break;
    default:
      break;
  }
  return tileLayer;
}
