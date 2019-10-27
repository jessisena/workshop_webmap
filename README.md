
# Workshop web map SOTM Latam

## Set up environment

To be installed:
- Node.js
- Git
- Yarn or Npm
- VS Code or similar

------

### Steps:

1. Download/Clone repo [REPO](http://)




2. Install parcel
```
yarn global add parcel-bundler
```

3. Install dependencies
```
yarn
```

4. Execute command:
```
parcel index.html
```

or 

```
yarn dev
```

-----

## Workshop


1. Add Leaflet library to the project
2. Add a Map
3. Change BaseLayers
4. Adding a Geojson
6. Add infowindow
5. Style geojson
7. Clustering/HeatMap

8. Publish your map!


## 1. Add leaflet


https://leafletjs.com/

> Leaflet is the leading open-source JavaScript library for mobile-friendly interactive maps. Weighing just about 38 KB of JS, it has all the mapping features most developers ever need.
> Leaflet is designed with simplicity, performance and usability in mind.


You can add the library through 3 ways:

1. Through npm:
```
npm install leaflet
```

2. Downloading the package (as is explained in the page)

3. Including the library through CDN directly in your HTML:

```html
<header>
  ...
<link rel="stylesheet" href="https://unpkg.com/leaflet@1.5.1/dist/leaflet.css" integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ==" crossorigin=""/>

<script src="https://unpkg.com/leaflet@1.5.1/dist/leaflet.js" integrity="sha512-GffPMF3RvMeYyc1LWMHtK8EbPv0iNZ8/oTtHPx9/cc2ILxQu905qIwdpULaqDkyBKgOaB57QTMg7ztg8Jm2Og==" crossorigin=""></script>
...
</header>
```

## 2. Add a map

Para añadir un mapa primero tenemos que crear en nuestro fichero index.html un elemento div con un id:

```html

<div id="map"></div>

```


Y en app.css:

```css
#map {
  height: 100%;
  width: 100%;
}
```

Ahora crearemos el objeto mapa usando leaflet. Sigue los sieguientes pasos:

1. En index.js añade:

  var mymap = L.map("mymap").setView([-25.301, -57.636], 12);


2. Añade una capa base:

```javascript
  L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', 
    {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'
    }).addTo(mymap);
```



List of tile servers based on OSM:
[Tile_servers](https://wiki.openstreetmap.org/wiki/Tile_servers)


3.  Añades otras capas base

https://api.tiles.mapbox.com/v4/mapbox.streets/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw


https://api.tiles.mapbox.com/v4/mapbox.light/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw


4. Añadir un control de capas:


```javascript
  const osm = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', 
    {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'
    });

   

  const mapboxLight = L.tileLayer('https://api.tiles.mapbox.com/v4/mapbox.light/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', 
    {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'
    });


    osm.addTo(mymap);
    mapboxLight.addTo(mymap);

    const baseLayers = {
        "MapboxLight": mapboxLight,
        "OpenStreetMap": osm
    };
    const overlays = {};
    
    const myControl = L.control.layers(baseLayers, overlays)
    myControl.addTo(map);

```

## Add your own data

Añadir un [GEOJSON](https://geojson.org/).


```javascript

import { puntos } from './data/puntos.js';

(...)

const puntosLayer = L.geoJSON(puntos);
puntosLayer.addTo(mymap);


```


Añadir infowindow

```javascript


const puntosLayer = L.geoJSON(puntos)
.bindPopup(function (layer) {
    return `<h2>${layer.feature.properties.nom}</h2><p>${layer.feature.properties.description}</p>`;
});

puntosLayer.addTo(mymap);

```

Estilizarla añadiendo una clase:

```css

.infowindow {
  padding: 5px;
  background-color: #dedede;
  border-radius: 5px;
}

```

```javascript
.bindPopup(function (layer) {
      return `<div class="infowindow"><h2>${layer.feature.properties.nom}</h2><p>${layer.feature.properties.description}</p><div>`;
  })

```


Añadir capa de poligonos


```javascript

import { barrios } from './data/puntos.js';

(...)

const barriosLayer = L.geoJSON(barrios);
barriosLayer.addTo(mymap);


```


Añadir ambas capas, puntos y poligonos, al control:

```javascript

myControl.addOverlay(barriosLayer);
myControl.addOverlay(puntosLayer);

```


## Estilizar geojson

Añadir una imagen al punto:

```javascript
import GEOCHICAS from './images/geochicas.png'


  const myIcon = L.icon({
    iconUrl: GEOCHICAS,
    iconSize: [50, 40]
  });

 const puntosLayer = L.geoJSON(puntos, {
      pointToLayer: function (feature, latlng) {
        return  L.marker(latlng, {icon: myIcon});
      }
  })...
```

Estilizar poligonos:

```javascript
  const barriosLayer = L.geoJSON(barrios, {
    style: function(){
      return  { color: "#999", weight: 2, fillColor: '#FFCA3A', fillOpacity: .6 };;
    }
  });
```


## HeatMap / Clustering

Heatmap:

Add this in the html file:

```html
<script src="https://github.com/Leaflet/Leaflet.heat/blob/gh-pages/dist/leaflet-heat.js"></script>
```




Para improve de las explicaciones de cada punto:
https://maptimeboston.github.io/leaflet-intro/



http://osmtools.de/osmlinks/
https://hackathon.innovando.gov.py/edicion-2018/datos-abiertos-publicados-por-la-municipalidad-de-asuncion

