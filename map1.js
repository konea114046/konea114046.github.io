var lab7Map1 = L.map('mapid').setView([32.18, -99.14], 5);

L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png', {
    maxZoom: 20,
    attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
}).addTo(lab7Map1);

var MarkerObject1 = L.marker([30, -90]).addTo(lab7Map1);

var PolygonObject1 = L.polygon([
    [31, -88],
    [35, -88],
    [32, -82]
]).addTo(lab7Map1);

PolygonObject1.bindPopup('You have located the First polygon.');
PolygonObject1.bindPopup('You have located the First Marker.');