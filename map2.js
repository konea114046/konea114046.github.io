
var lab8Map2 = L.map('map2id').setView([32.18, -99.14], 4);


L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png', {
    maxZoom: 20,
    attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
}).addTo(lab8Map2);

L.tileLayer.wms('https://nowcoast.noaa.gov/arcgis/services/nowcoast/radar_meteo_imagery_nexrad_time/MapServer/WMSServer', {
    layers: '1',
    format: 'image/png',
    transparent: true,
    attribution: 'NOAA'
}).addTo(lab8Map2);

L.tileLayer.wms('https://mesonet.agron.iastate.edu/cgi-bin/wms/us/wwa.cgi', {
    layers: 'warnings_c',
    format: 'image/png',
    transparent: true,
    attribution: 'NOAA, Iowa State University'
}).addTo(lab8Map2);

L.tileLayer.wms('http://mesonet.agron.iastate.edu/cgi-bin/wms/nexrad/n0r.cgi', {
    layers: 'nexrad-n0r-900913',
    format: 'image/png',
    transparent: true,
    attribution: 'NOAA, Iowa State University'
}).addTo(lab8Map2);

 L.esri.dynamicMapLayer({
     url: 'https://nowcoast.noaa.gov/arcgis/rest/services/nowcoast/radar_meteo_imagery_nexrad_time/MapServer'
}).addTo(lab8Map2);