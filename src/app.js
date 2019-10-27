
import './css/app.css';
import './lib/leaflet-heat'
import { puntos } from './data/puntos.js';
import { barrios } from './data/barrios.js';
import GEOCHICAS from './images/geochicas.png'
import { removeDotSegments } from 'uri-js';

export default () => {

  console.log('Init app final...')
  // Codigo de tu aplicación

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


    osm.addTo(mymap);
    mapboxLight.addTo(mymap);

    var baseLayers = {
        "Mapbox Light": mapboxLight,
        "OpenStreetMap": osm
    };
    var overlays = {};
    
    const myControl = L.control.layers(baseLayers, overlays)
    myControl.addTo(mymap);

    const squidIcon = L.icon({
      iconUrl: GEOCHICAS,
      iconSize: [50, 40]
    });

    const puntosArray = [];
    const puntosLayer = L.geoJSON(puntos, {
      pointToLayer: function (feature, latlng) {
        puntosArray.push(latlng);
        return  L.marker(latlng, {icon: squidIcon});
      }
    }).bindPopup(function (layer) {
      return `<div class="infowindow"><h2>${layer.feature.properties.nom}</h2><p>${layer.feature.properties.description}</p><div>`;
  });
  puntosLayer.addTo(mymap);


  const barriosLayer = L.geoJSON(barrios, {
    style: function(){
      return  { color: "#999", weight: 2, fillColor: '#FFCA3A', fillOpacity: .6 };;
    }
  });

  barriosLayer.addTo(mymap);


  myControl.addOverlay(barriosLayer, 'Barrios');
  myControl.addOverlay(puntosLayer, 'Centros');

  console.log(puntosArray)

  var heat = L.heatLayer(puntosArray, {radius: 25}).addTo(mymap);

}