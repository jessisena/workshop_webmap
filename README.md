
# Workshop web map SOTM Latam

## Preparar entorno

Tener instalado:
- Node.js
- Git
- Npm
- VS Code o similar

------

### Steps:

1. Descargar/Clonar repositorio [https://github.com/jessisena/workshop_webmap](https://github.com/jessisena/workshop_webmap)

2. Instalar parcel
```
npm -g install parcel-bundler
```

3. Dentro de la carpeta del proyecto clonado, ejecutar:
```
npm i
```

4. Ejecutar:
```
parcel index.html
```

o

```
npm run dev
```

Si todo ha ido bien verás como se abre una página en tu navegador!
ya tendrás todo preparado para empezar el taller.

-----

## Temario Workshop


1. Añade Leaflet.js al proyecto

2. Crea un Mapa
    - Crea el objeto mapa
    - Añade capas base
    - Añade un control de capas

3. Añade tus datos
    - Geojson
    - Infowindow
    - Estilización

4. Clustering/HeatMap

5. Operaciones con turf.js

9. Publica tu mapa

-----

## 1. Añadir Leaflet.js al proyecto


[leafletjs.com](https://leafletjs.com/)

> Leaflet is the leading open-source JavaScript library for mobile-friendly interactive maps. Weighing just about 38 KB of JS, it has all the mapping features most developers ever need.
> Leaflet is designed with simplicity, performance and usability in mind.


Puedes añadir la librería de 3 formas distintas:

1. A través de npm:
```
npm install leaflet
```

2. Descargando el paquete (como se explicado en sú página)

3. Invcluyendo la librería a través de CDN directamente en tu fichero HTML:

```html
<header>
  ...
<link rel="stylesheet" href="https://unpkg.com/leaflet@1.5.1/dist/leaflet.css" integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ==" crossorigin=""/>

<script src="https://unpkg.com/leaflet@1.5.1/dist/leaflet.js" integrity="sha512-GffPMF3RvMeYyc1LWMHtK8EbPv0iNZ8/oTtHPx9/cc2ILxQu905qIwdpULaqDkyBKgOaB57QTMg7ztg8Jm2Og==" crossorigin=""></script>
...
</header>
```

## 2. Crea un mapa

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

Ahora crearemos el objeto mapa usando leaflet. Sigue los siguientes pasos:

1. En index.js añade:

```javascript
  var mymap = L.map("mymap").setView([-25.301, -57.636], 12);
```
*Estamos diciendole al mapa que se centro en las coordenadas de Asunción, y con nivel de zoom 12*


2. Añade una capa base:

```javascript
  L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', 
    {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'
    }).addTo(mymap);
```



List of tile servers based on OSM:
[Tile_servers](https://wiki.openstreetmap.org/wiki/Tile_servers)


3.  Prueba a añadir otras url's de capas base distintas, y observa los cambios en el visor:

*Ejemplos:*

https://api.tiles.mapbox.com/v4/mapbox.streets/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw


https://api.tiles.mapbox.com/v4/mapbox.light/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw


4. Añade un control de capas:
En un mismo mapa podemos tener diferentes capas base añadidas y esocger cuál visualizar usando un control de capas.
Añade ahora un control de capas a tu mapa:

*Nota: habrá que modificar ligeramente el código que ya tenás*


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

## Añade tus datos:

Usaremos un [GEOJSON](https://geojson.org/) de ejemplo con nuestros datos.

*TIP: Herramienta online de conversor de formatos de ficheros [CONVERTBOX]()*


```javascript

import { puntos } from './data/puntos.js';

(...)

const puntosLayer = L.geoJSON(puntos);
puntosLayer.addTo(mymap);


```


Ahora podemos añadir una infowindow a cada uno de los puntos del mapa:

```javascript


const puntosLayer = L.geoJSON(puntos)
.bindPopup(function (layer) {
    return `<h2>${layer.feature.properties.nom}</h2><p>${layer.feature.properties.description}</p>`;
});

puntosLayer.addTo(mymap);

```

En la infowindow se añade HTML, y se mostrará como tal. Por tanto, podemos añadir clases CSS a ese HTML para estilizarlo:

```css

/* app.css */
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


Añadiremos ahora un GEOJSON con polígonos:


```javascript

import { barrios } from './data/puntos.js';

(...)

const barriosLayer = L.geoJSON(barrios);
barriosLayer.addTo(mymap);


```


Ahora añadiremos ambas capas, puntos y poligonos, a nuestro control de capas:

```javascript

myControl.addOverlay(barriosLayer);
myControl.addOverlay(puntosLayer);

```


## Estilizar GEOJSON

Podemos personalizar la imagen de cada uno de los puntos, con una imagen propia:

```javascript
import GEOCHICAS from './images/geochicas.png'


// creamos el icono con la imagen
  const myIcon = L.icon({
    iconUrl: GEOCHICAS,
    iconSize: [50, 40]
  });

// A la vez que vamos añadiendo cada punto al mapa
// le asociamos el icono que hemos creado.
 const puntosLayer = L.geoJSON(puntos, {
      pointToLayer: function (feature, latlng) {
        return  L.marker(latlng, {icon: myIcon});
      }
  })...
```

También podemos estilizar los poligonos, cambiando su color, opacidad, etc:

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

