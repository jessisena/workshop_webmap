
# Workshop desarrollo de mapas web

## Preparar entorno

Tener instalado:
- Node.js + npm
- Git
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

4. Clustering

5. Operaciones con turf.js

6. Publica tu mapa



La idea es tener finalmente algo parecido a [Visor establecimientos de SALUD](https://jessisena.github.io/workshop_webmap/)

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

2. Descargando el paquete (como se explica en su página)

3. Incluyendo la librería a través de CDN directamente en tu fichero HTML:

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
*Estamos diciendole al mapa que se centre en las coordenadas de Asunción, y con nivel de zoom 12*


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

*Nota: habrá que modificar ligeramente el código que ya tenías*


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

## 3. Añade tus datos:

Usaremos un [GEOJSON](https://geojson.org/) con datos de establecimientos de salud, como ejemplo sobre como añadir nuestros datos al mapa.

*TIP: Herramienta online de conversor de formatos de ficheros [CONVERTBOX](https://betaportal.icgc.cat/convertbox/)*


```javascript

import { puntos } from './data/establecimientos_salud.js';

(...)

const puntosLayer = L.geoJSON(puntos);
puntosLayer.addTo(mymap);


```


Ahora podemos añadir una infowindow a cada uno de los puntos del mapa:

```javascript


const puntosLayer = L.geoJSON(puntos)
.bindPopup(function (layer) {
    return `<h2>${layer.feature.properties.nombre}</h2><h3>${layer.feature.properties.tipo}</h3><p>${layer.feature.properties.direccion}</p>`;
});

puntosLayer.addTo(mymap);

```

*TIP: consultar el GEOJSON para ver qué propiedades tiene cada elemento*

En la infowindow se añade HTML y se mostrará como tal. Por tanto, podemos añadir clases CSS a ese HTML para estilizarlo:

```css

/* app.css */
.infowindow {
  padding: 5px;
  background-color: #dedede;
  border-radius: 5px;
  text-align: center
}

```

```javascript
.bindPopup(function (layer) {
      return `<div class="infowindow"><h2>${layer.feature.properties.nombre}</h2>
<h3>${layer.feature.properties.tipo}</h3><p>${layer.feature.properties.direccion}</p><div>`;
  })

```


Añadiremos ahora un fichero GEOJSON con los barrios de Asunción (polígonos):


```javascript

import { barrios } from './data/barrios.js';

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
import HEALTH from './images/health.png'


// creamos el icono con la imagen
    const healthIcon = L.icon({
      iconUrl: HEALTH,
      iconSize: [40, 30]
    });

// A la vez que vamos añadiendo cada punto al mapa
// le asociamos el icono que hemos creado.
 const puntosLayer = L.geoJSON(puntos, {
      pointToLayer: function (feature, latlng) {
        return  L.marker(latlng, {icon: healthIcon});
      }
  })...
```

También podemos estilizar los poligonos, cambiando su color, opacidad, etc:

```javascript
  const barriosLayer = L.geoJSON(barrios, {
    style: function(){
      return  { color: "#888", weight: 2, fillColor: '#8fb8ca', fillOpacity: .6 };;
    }
  });
```


## 4. Clustering

A continuación vamos a añadir una capa de Cluster a nuestro mapa, para agrupar nuestros establecimientos de salud.
Usaremos el siguiente plugin de leaflet:
[Plugin cluster](https://github.com/Leaflet/Leaflet.markercluster)

Añadimos los ficheros a nuestro index.html:

```html
      <link href="https://unpkg.com/leaflet.markercluster@1.4.1/dist/MarkerCluster.css" rel="stylesheet">
      <link href="https://unpkg.com/leaflet.markercluster@1.4.1/dist/MarkerCluster.Default.css" rel="stylesheet">
      <script src="https://unpkg.com/leaflet.markercluster@1.4.1/dist/leaflet.markercluster.js"></script>
```

```javascript
  const markers = L.markerClusterGroup();
  ...
  const marker =  L.marker(latlng, {icon: healthIcon})
  markers.addLayer(marker)

```

Dónde tendríamos que poner este código?

**Solución**
```javascript
  const puntosLayer = L.geoJSON(puntos, {
      pointToLayer: function (feature, latlng) {
        const marker =  L.marker(latlng, {icon: healthIcon})
        markers.addLayer(marker)
        return marker;
      }
  })

```


## 5. Turf.js - Operaciones GIS

Turf.js es una libnrería javascript que nos permite hacer operaciones de análisis geospacial en el browser:

>Advanced geospatial analysis for browsers and Node.js
[turfjs.org](https://turfjs.org/)

Para añadir la librería copia esto en tu index.html:

```html
<script src='https://npmcdn.com/@turf/turf/turf.min.js'></script>
```

Consulta la cantidad de operaciones disponibles.

**Ejercicio:**
Usa la funcionalidad de cáclulo de [area](https://turfjs.org/docs/#area) para calcular el área de cada barrio, y hacer que se muestre en su infowindow.

**Solución:**

```javascript
...
.bindPopup(function ({feature}) {
    const area = turf.area(feature.geometry).toFixed(2);
    return `<div class="infowindow"><h2>${feature.properties.nombre}</h2><h3>${area} m2</h3><div>`;
});
```

## 6. Publica tu mapa

Para acabar vamos a publicar nuestro visor en github, haciendo uso de github pages.

Ejecutamos:

```node
npm run dev
```

Esto nos creará una carpeta _'docs'_ con los ficheros finales dentro.
>Si abrimos index.html de esa carpeta tendremos que ver nuestro visor final.

Ahora vamos a publicarlo.

En nuestro perfil de github, creamos un proyecto nuevo y seguimos los pasos para vincularlo a nuestro código:

```node
git init
git add'-A
git commit -m "first commit"
git remote add origin _TU_URL_
git push -u origin master
```

Ve a _Settings_, y hacia el final de la página verás:

![](https://raw.githubusercontent.com/jessisena/workshop_webmap/master/github-pages.png)


una vez seleccionado aparecerá la URL de tu visor.

CONSEGUIDO! 
![GIF](https://media.giphy.com/media/26u4cqiYI30juCOGY/giphy.gif)

-------

## Reconocimientos
Datos ejemplo de Paraguay:
https://github.com/josego85/ProyectosBeta/tree/master/GIS/GeoJSON

https://maptimeboston.github.io/leaflet-intro/

http://osmtools.de/osmlinks/

## Licencia
This project is licensed under the MIT License - see the LICENSE.md file for details
