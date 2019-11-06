
import './css/app.css';
import { puntos } from './data/establecimientos_salud';
import { barrios } from './data/barrios.js.js';
import GEOCHICAS from './images/geochicas.png'
import HEALTH from './images/health.png'


export default () => {

  //crear objeto mapa
  var mymap = L.map("mymap").setView([-25.301, -57.636], 12);

  var osm = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', 
    {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'
    });

   

  var mapboxLight = L.tileLayer('https://api.tiles.mapbox.com/v4/mapbox.light/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', 
    {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'
    });


    mapboxLight.addTo(mymap);
    osm.addTo(mymap);

    var baseLayers = {
      "OpenStreetMap": osm,
      "Mapbox Light": mapboxLight
    };
    var overlays = {};
    
    const myControl = L.control.layers(baseLayers, overlays)
    myControl.addTo(mymap);

    const healthIcon = L.icon({
      iconUrl: HEALTH,
      iconSize: [40, 30]
    });

    var markers = L.markerClusterGroup();

    const puntosLayer = L.geoJSON(puntos, {
      pointToLayer: function (feature, latlng) {
        const marker =  L.marker(latlng, {icon: healthIcon})
        markers.addLayer(marker)
        return marker;
      }
    }).bindPopup(function (layer) {
      return `<div class="infowindow"><h2>${layer.feature.properties.nombre}</h2><h3>${layer.feature.properties.tipo}</h3><p>${layer.feature.properties.direccion}</p><div>`;
  });
  puntosLayer.addTo(mymap);
  mymap.addLayer(markers);

  const barriosLayer = L.geoJSON(barrios, {
    style: function(){
      return  { color: "#888", weight: 2, fillColor: '#8fb8ca', fillOpacity: .6 };;
    }
  }).bindPopup(function ({feature}) {
    const area = turf.area(feature.geometry).toFixed(2);
    return `<div class="infowindow"><h2>${feature.properties.nombre}</h2><h3>${area} m2</h3><div>`;
});

  barriosLayer.addTo(mymap);


  myControl.addOverlay(barriosLayer, 'Barrios');
  myControl.addOverlay(puntosLayer, 'Centros');

}