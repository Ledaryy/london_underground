function Map() {
    
var map = L.map('mapid').setView([0, 0], 0);
L.tileLayer('static/map/{z}/{x}/{y}.png', {
  continuousWorld: false,
  noWrap: true,  
  minZoom: 1,
  maxZoom: 5,
}).addTo(map);

var marker = L.marker([0, 0], {
  draggable: true,
}).addTo(map);
marker.bindPopup('Marker').openPopup();
marker.on('dragend', function(e) {
  marker.getPopup().setContent(marker.getLatLng().toString()).openOn(map);
});
}



    
export default Map;

