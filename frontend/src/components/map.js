function Map() {
        
    var southWest = L.latLng(85.0, -180.0)
    var northEast = L.latLng(-85.0, 180.0)
    var bounds = L.latLngBounds(southWest, northEast);

    var map = L.map('mapid').setView([0, 0], 0);
    L.tileLayer('static/map/{z}/{x}/{y}.png', {
    continuousWorld: false,
    noWrap: true,  
    minZoom: 0,
    maxZoom: 5,
    bounds: bounds
    }).addTo(map);

    map.flyTo([65.9, -21.7], 3); // Center of the map

    var marker = L.marker([65.9, -21.7], {
    draggable: true,
    }).addTo(map);
    marker.bindPopup('You can drag me to move around').openPopup();
    marker.on('dragend', function(e) {
    marker.getPopup().setContent(marker.getLatLng().toString()).openOn(map);
    map.flyTo(marker.getLatLng(), 3);
    });

}

export default Map;

