// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"../node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"css/app.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"data/establecimientos_salud.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.puntos = void 0;
var puntos = {
  "type": "FeatureCollection",
  "crs": {
    "type": "name",
    "properties": {
      "name": "urn:ogc:def:crs:OGC:1.3:CRS84"
    }
  },
  "features": [{
    "type": "Feature",
    "properties": {
      "nombre": "HMI- SANTISIMA TRINIDAD",
      "tipo": "HOSPITAL MATERNO INFANTIL",
      "direccion": "Avda. Santisima Trinidad c/ Itapua",
      "telefono": "021290165",
      "responsabl": "DR. RICARDO OVIEDO",
      "dependeDe": "PARQUE REGIONAL VIRTUAL HOSPITALES ESPECIALIZADOS",
      "estado": "ACTIVO",
      "codigo": 677,
      "nombreMuni": "ASUNCIÓN",
      "codigoMuni": "1",
      "internet": "SI",
      "codigoSaa": 18030203,
      "fechaActiv": "1442232007000",
      "fechaInact": "null",
      "nombreDist": "ASUNCION",
      "codigoDist": 30,
      "nombreRegi": "CAPITAL",
      "codigoRegi": 18,
      "nombreDi_1": "ASUNCION",
      "id": 28715
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-57.576308, -25.260985]
    }
  }, {
    "type": "Feature",
    "properties": {
      "nombre": "H.D.- CARAPEGUA",
      "tipo": "HOSPITAL DISTRITAL",
      "direccion": "Tte. 1° Manuel Cabello y Monseñor Mercado",
      "telefono": "0218212268",
      "responsabl": "DR. ALCIDES OCHOA",
      "dependeDe": "IX PARAGUARI",
      "estado": "ACTIVO",
      "codigo": 1226,
      "nombreMuni": "CARAPEGUÁ",
      "codigoMuni": "905",
      "internet": "SI",
      "codigoSaa": 9005215,
      "fechaActiv": "1442232007000",
      "fechaInact": "null",
      "nombreDist": "CARAPEGUA",
      "codigoDist": 5,
      "nombreRegi": "PARAGUARI",
      "codigoRegi": 9,
      "nombreDi_1": "CARAPEGUA",
      "id": 28693
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-57.246008, -25.762559]
    }
  }, {
    "type": "Feature",
    "properties": {
      "nombre": "H.D.- FDO. DE LA MORA",
      "tipo": "HOSPITAL DISTRITAL",
      "direccion": "1ra. Junta Municipal y Cabo Liborio Talavera",
      "telefono": "021500003",
      "responsabl": "DRA. JUANA PAVON",
      "dependeDe": "PARQUE REGIONAL VIRTUAL HOSPITALES ESPECIALIZADOS",
      "estado": "ACTIVO",
      "codigo": 216,
      "nombreMuni": "FERNADO DE LA MORA",
      "codigoMuni": "1103",
      "internet": "SI",
      "codigoSaa": 11003223,
      "fechaActiv": "1467108294000",
      "fechaInact": "null",
      "nombreDist": "FERNANDO DE LA MORA",
      "codigoDist": 3,
      "nombreRegi": "CENTRAL",
      "codigoRegi": 11,
      "nombreDi_1": "FERNANDO DE LA MORA",
      "id": 28727
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-57.5545639, -25.3213929]
    }
  }, {
    "type": "Feature",
    "properties": {
      "nombre": "HOSPITAL NACIONAL",
      "tipo": "HOSPITAL ESPECIALIZADO",
      "direccion": "Ruta Marcial Samaniego. Itaugua Guazu",
      "telefono": "0294321403",
      "responsabl": "DR. HERNAN MARTINEZ",
      "dependeDe": "PARQUE REGIONAL VIRTUAL HOSPITALES ESPECIALIZADOS",
      "estado": "ACTIVO",
      "codigo": 325,
      "nombreMuni": "ASUNCIÓN",
      "codigoMuni": "1",
      "internet": "SI",
      "codigoSaa": 11006245,
      "fechaActiv": "1442232007000",
      "fechaInact": "null",
      "nombreDist": "ITAUGUA",
      "codigoDist": 6,
      "nombreRegi": "CENTRAL",
      "codigoRegi": 11,
      "nombreDi_1": "ITAUGUA",
      "id": 28701
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-57.362797, -25.448242]
    }
  }, {
    "type": "Feature",
    "properties": {
      "nombre": "H.D.- LAMBARE",
      "tipo": "HOSPITAL DISTRITAL",
      "direccion": "Nanawa y 5 de Junio. Bo. Centro Urbano",
      "telefono": "021908900",
      "responsabl": "DR. ROBERT NUÑEZ",
      "dependeDe": "PARQUE REGIONAL VIRTUAL HOSPITALES ESPECIALIZADOS",
      "estado": "ACTIVO",
      "codigo": 236,
      "nombreMuni": "ASUNCIÓN",
      "codigoMuni": "1",
      "internet": "SI",
      "codigoSaa": 11007205,
      "fechaActiv": "1442232007000",
      "fechaInact": "null",
      "nombreDist": "LAMBARE",
      "codigoDist": 7,
      "nombreRegi": "CENTRAL",
      "codigoRegi": 11,
      "nombreDi_1": "LAMBARE",
      "id": 28702
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-57.6274187, -25.3488864]
    }
  }, {
    "type": "Feature",
    "properties": {
      "nombre": "HMI - M. R. ALONSO",
      "tipo": "HOSPITAL MATERNO INFANTIL",
      "direccion": "Boqueron y Sargento Triay",
      "telefono": "021752881",
      "responsabl": "DR. LUIS LIGGIER",
      "dependeDe": "PARQUE REGIONAL VIRTUAL HOSPITALES ESPECIALIZADOS",
      "estado": "ACTIVO",
      "codigo": 253,
      "nombreMuni": "ASUNCIÓN",
      "codigoMuni": "1",
      "internet": "SI",
      "codigoSaa": 11010236,
      "fechaActiv": "1442232007000",
      "fechaInact": "null",
      "nombreDist": "MARIANO ROQUE ALONSO",
      "codigoDist": 10,
      "nombreRegi": "CENTRAL",
      "codigoRegi": 11,
      "nombreDi_1": "MARIANO ROQUE ALONSO",
      "id": 28705
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-57.536574, -25.212376]
    }
  }, {
    "type": "Feature",
    "properties": {
      "nombre": "HOSPITAL GENERAL BARRIO OBRERO",
      "tipo": "HOSPITAL GENERAL",
      "direccion": "Yegros e/ 11 Proyectadas",
      "telefono": "021372989",
      "responsabl": "DR. JOSE DARIO RAMIREZ",
      "dependeDe": "PARQUE REGIONAL VIRTUAL HOSPITALES ESPECIALIZADOS",
      "estado": "ACTIVO",
      "codigo": 508,
      "nombreMuni": "ASUNCIÓN",
      "codigoMuni": "1",
      "internet": "SI",
      "codigoSaa": 18030201,
      "fechaActiv": "1467108294000",
      "fechaInact": "null",
      "nombreDist": "ASUNCION",
      "codigoDist": 30,
      "nombreRegi": "CAPITAL",
      "codigoRegi": 18,
      "nombreDi_1": "ASUNCION",
      "id": 28733
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-57.6441056, -25.2994417]
    }
  }, {
    "type": "Feature",
    "properties": {
      "nombre": "H.D.- LA COLMENA",
      "tipo": "HOSPITAL DISTRITAL",
      "direccion": "Antonio Kazamatzu c/Villarrica",
      "telefono": "0537223234",
      "responsabl": "DR. LUIS GONZALEZ",
      "dependeDe": "IX PARAGUARI",
      "estado": "ACTIVO",
      "codigo": 1194,
      "nombreMuni": "LA COLMENA",
      "codigoMuni": "907",
      "internet": "SI",
      "codigoSaa": 9007222,
      "fechaActiv": "1442232007000",
      "fechaInact": "null",
      "nombreDist": "LA COLMENA",
      "codigoDist": 7,
      "nombreRegi": "PARAGUARI",
      "codigoRegi": 9,
      "nombreDi_1": "LA COLMENA",
      "id": 28665
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-56.8362777, -25.8836111]
    }
  }, {
    "type": "Feature",
    "properties": {
      "nombre": "H.D.- QUIINDY",
      "tipo": "HOSPITAL DISTRITAL",
      "direccion": "Del Maestro c/Ruta N° 1",
      "telefono": "0531282224",
      "responsabl": "DR. LUIS SANTIAGO IBARROLA",
      "dependeDe": "IX PARAGUARI",
      "estado": "ACTIVO",
      "codigo": 1183,
      "nombreMuni": "QUIINDY",
      "codigoMuni": "910",
      "internet": "SI",
      "codigoSaa": 9010218,
      "fechaActiv": "1442232007000",
      "fechaInact": "null",
      "nombreDist": "QUIINDY",
      "codigoDist": 10,
      "nombreRegi": "PARAGUARI",
      "codigoRegi": 9,
      "nombreDi_1": "QUIINDY",
      "id": 28694
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-57.2293333, -25.9801389]
    }
  }, {
    "type": "Feature",
    "properties": {
      "nombre": "H.D.- YBYCUI",
      "tipo": "HOSPITAL DISTRITAL",
      "direccion": "Avda. Colon c/Mauricio Cardozo Ocampo",
      "telefono": "0534226230",
      "responsabl": "DRA. LIZ CABRERA",
      "dependeDe": "IX PARAGUARI",
      "estado": "ACTIVO",
      "codigo": 1190,
      "nombreMuni": "YBYCUÍ",
      "codigoMuni": "916",
      "internet": "SI",
      "codigoSaa": 9016220,
      "fechaActiv": "1442232007000",
      "fechaInact": "null",
      "nombreDist": "YBYCUI",
      "codigoDist": 16,
      "nombreRegi": "PARAGUARI",
      "codigoRegi": 9,
      "nombreDi_1": "YBYCUI",
      "id": 28695
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-57.0251339, -26.0187277]
    }
  }, {
    "type": "Feature",
    "properties": {
      "nombre": "H.R.- CIUDAD DEL ESTE",
      "tipo": "HOSPITAL REGIONAL",
      "direccion": "Super Carretera Bo. Sta. Ana",
      "telefono": "061506710",
      "responsabl": "DR. NELSON ZENA GAUTO",
      "dependeDe": "X ALTO PARANA",
      "estado": "ACTIVO",
      "codigo": 495,
      "nombreMuni": "CIUDAD DEL ESTE",
      "codigoMuni": "1001",
      "internet": "SI",
      "codigoSaa": 10001101,
      "fechaActiv": "1442232007000",
      "fechaInact": "null",
      "nombreDist": "CIUDAD DEL ESTE",
      "codigoDist": 1,
      "nombreRegi": "ALTO PARANA",
      "codigoRegi": 10,
      "nombreDi_1": "CIUDAD DEL ESTE",
      "id": 28661
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-54.6345556, -25.5329167]
    }
  }, {
    "type": "Feature",
    "properties": {
      "nombre": "H.D.- PDTE. FRANCO",
      "tipo": "HOSPITAL DISTRITAL",
      "direccion": "Avda. Mcal. Lopez c/Van AAken",
      "telefono": "061550030",
      "responsabl": "DR. ALFREDO MEZA",
      "dependeDe": "X ALTO PARANA",
      "estado": "ACTIVO",
      "codigo": 498,
      "nombreMuni": "PRESIDENTE FRANCO",
      "codigoMuni": "1002",
      "internet": "SI",
      "codigoSaa": 10002204,
      "fechaActiv": "1442232007000",
      "fechaInact": "null",
      "nombreDist": "PRESIDENTE FRANCO",
      "codigoDist": 2,
      "nombreRegi": "ALTO PARANA",
      "codigoRegi": 10,
      "nombreDi_1": "PRESIDENTE FRANCO",
      "id": 28662
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-54.6100575, -25.5600893]
    }
  }, {
    "type": "Feature",
    "properties": {
      "nombre": "H.D.- HERNANDARIAS",
      "tipo": "HOSPITAL DISTRITAL",
      "direccion": "Avda. Las Acasias c/Paraguay Villa Deportiva",
      "telefono": "063122598",
      "responsabl": "DRA. MARTA GRACIELA SOSA",
      "dependeDe": "X ALTO PARANA",
      "estado": "ACTIVO",
      "codigo": 496,
      "nombreMuni": "HERNANDARIAS",
      "codigoMuni": "1005",
      "internet": "SI",
      "codigoSaa": 10005202,
      "fechaActiv": "1442232007000",
      "fechaInact": "null",
      "nombreDist": "HERNANDARIAS",
      "codigoDist": 5,
      "nombreRegi": "ALTO PARANA",
      "codigoRegi": 10,
      "nombreDi_1": "HERNANDARIAS",
      "id": 28696
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-54.6383333, -25.4050833]
    }
  }, {
    "type": "Feature",
    "properties": {
      "nombre": "H.D.- MINGA GUAZÚ",
      "tipo": "HOSPITAL DISTRITAL",
      "direccion": "Avda. Los Mingueros c/ Don Bosco",
      "telefono": "064420221",
      "responsabl": "DRA. MA. FATIMA LOPEZ",
      "dependeDe": "X ALTO PARANA",
      "estado": "ACTIVO",
      "codigo": 394,
      "nombreMuni": "MINGA GUAZÚ",
      "codigoMuni": "1011",
      "internet": "SI",
      "codigoSaa": 10011201,
      "fechaActiv": "1442232007000",
      "fechaInact": "null",
      "nombreDist": "MINGA GUAZU",
      "codigoDist": 11,
      "nombreRegi": "ALTO PARANA",
      "codigoRegi": 10,
      "nombreDi_1": "MINGA GUAZU",
      "id": 28697
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-54.7623656, -25.4843045]
    }
  }, {
    "type": "Feature",
    "properties": {
      "nombre": "H.D.- SANTA RITA",
      "tipo": "HOSPITAL DISTRITAL",
      "direccion": "Calle Sinuelo",
      "telefono": "0673221136",
      "responsabl": "DRA. MARTA BOGADO",
      "dependeDe": "X ALTO PARANA",
      "estado": "ACTIVO",
      "codigo": 499,
      "nombreMuni": "SANTA RITA",
      "codigoMuni": "1013",
      "internet": "SI",
      "codigoSaa": 10013319,
      "fechaActiv": "1442232007000",
      "fechaInact": "null",
      "nombreDist": "SANTA RITA",
      "codigoDist": 13,
      "nombreRegi": "ALTO PARANA",
      "codigoRegi": 10,
      "nombreDi_1": "SANTA RITA",
      "id": 28663
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-55.0725198, -25.7835989]
    }
  }, {
    "type": "Feature",
    "properties": {
      "nombre": "H.D. - AREGUA",
      "tipo": "HOSPITAL DISTRITAL",
      "direccion": "Calle sin nombre c/Mcal. Lopez. Bo. Sto. Domingo",
      "telefono": "0291433481",
      "responsabl": "DR. VICTOR HUGO FRUTOS",
      "dependeDe": "XI CENTRAL",
      "estado": "ACTIVO",
      "codigo": 202,
      "nombreMuni": "AREGUÁ",
      "codigoMuni": "1101",
      "internet": "SI",
      "codigoSaa": 11001233,
      "fechaActiv": "1467108294000",
      "fechaInact": "null",
      "nombreDist": "AREGUA",
      "codigoDist": 1,
      "nombreRegi": "CENTRAL",
      "codigoRegi": 11,
      "nombreDi_1": "AREGUA",
      "id": 28726
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-57.3805, -25.309025]
    }
  }, {
    "type": "Feature",
    "properties": {
      "nombre": "HMI - CAPIATA",
      "tipo": "HOSPITAL MATERNO INFANTIL",
      "direccion": "Rta. II Mcal. Estigarribia e/Andres Barbero",
      "telefono": "0228634080",
      "responsabl": "DR. GABRIEL AGUILERA",
      "dependeDe": "PARQUE REGIONAL VIRTUAL HOSPITALES ESPECIALIZADOS",
      "estado": "ACTIVO",
      "codigo": 205,
      "nombreMuni": "ASUNCIÓN",
      "codigoMuni": "1",
      "internet": "SI",
      "codigoSaa": 11002222,
      "fechaActiv": "1442232007000",
      "fechaInact": "null",
      "nombreDist": "CAPIATA",
      "codigoDist": 2,
      "nombreRegi": "CENTRAL",
      "codigoRegi": 11,
      "nombreDi_1": "CAPIATA",
      "id": 28698
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-57.4459604, -25.3510916]
    }
  }, {
    "type": "Feature",
    "properties": {
      "nombre": "HOSPITAL DEL CANCER",
      "tipo": "HOSPITAL ESPECIALIZADO",
      "direccion": "Ruta Aregua y Calle 5 de Mayo",
      "telefono": "0228632899",
      "responsabl": "DR. JULIO ROLON VICIOSO",
      "dependeDe": "PARQUE REGIONAL VIRTUAL HOSPITALES ESPECIALIZADOS",
      "estado": "ACTIVO",
      "codigo": 295,
      "nombreMuni": "ASUNCIÓN",
      "codigoMuni": "1",
      "internet": "SI",
      "codigoSaa": 11002226,
      "fechaActiv": "1442232007000",
      "fechaInact": "null",
      "nombreDist": "CAPIATA",
      "codigoDist": 2,
      "nombreRegi": "CENTRAL",
      "codigoRegi": 11,
      "nombreDi_1": "CAPIATA",
      "id": 28699
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-57.4167553, -25.3508881]
    }
  }, {
    "type": "Feature",
    "properties": {
      "nombre": "H.R.- PARAGUARI",
      "tipo": "HOSPITAL REGIONAL",
      "direccion": "Tte. 1° Derlis Caceres y Ruta N° 1 km.63.5",
      "telefono": "0531432240",
      "responsabl": "DR. LUCAS BARRIOS",
      "dependeDe": "IX PARAGUARI",
      "estado": "ACTIVO",
      "codigo": 387,
      "nombreMuni": "PARAGUARÍ",
      "codigoMuni": "901",
      "internet": "SI",
      "codigoSaa": 9001101,
      "fechaActiv": "1442232007000",
      "fechaInact": "null",
      "nombreDist": "PARAGUARI",
      "codigoDist": 1,
      "nombreRegi": "PARAGUARI",
      "codigoRegi": 9,
      "nombreDi_1": "PARAGUARI",
      "id": 28692
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-57.1498468, -25.6255314]
    }
  }, {
    "type": "Feature",
    "properties": {
      "nombre": "H.D. - ITA",
      "tipo": "HOSPITAL DISTRITAL",
      "direccion": "Antonio DelValle y Enrique Doldan",
      "telefono": "0224632271",
      "responsabl": "DR. CARLOS BENITEZ",
      "dependeDe": "PARQUE REGIONAL VIRTUAL HOSPITALES ESPECIALIZADOS",
      "estado": "ACTIVO",
      "codigo": 224,
      "nombreMuni": "ASUNCIÓN",
      "codigoMuni": "1",
      "internet": "SI",
      "codigoSaa": 11005221,
      "fechaActiv": "1442232007000",
      "fechaInact": "null",
      "nombreDist": "ITA",
      "codigoDist": 5,
      "nombreRegi": "CENTRAL",
      "codigoRegi": 11,
      "nombreDi_1": "ITA",
      "id": 28700
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-57.3640588, -25.5156309]
    }
  }, {
    "type": "Feature",
    "properties": {
      "nombre": "H.D. -  ITAUGUA",
      "tipo": "HOSPITAL DISTRITAL",
      "direccion": "Rodriguez de Francia c/Rta. II Mcal. Estigarribia",
      "telefono": "0294220351",
      "responsabl": "DR. LUIS MEZA",
      "dependeDe": "XI CENTRAL",
      "estado": "ACTIVO",
      "codigo": 229,
      "nombreMuni": "ITAUGUÁ",
      "codigoMuni": "1106",
      "internet": "SI",
      "codigoSaa": 11006219,
      "fechaActiv": "1467108294000",
      "fechaInact": "null",
      "nombreDist": "ITAUGUA",
      "codigoDist": 6,
      "nombreRegi": "CENTRAL",
      "codigoRegi": 11,
      "nombreDi_1": "ITAUGUA",
      "id": 28728
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-57.3562589, -25.3906965]
    }
  }, {
    "type": "Feature",
    "properties": {
      "nombre": "HMI-LIMPIO",
      "tipo": "HOSPITAL MATERNO INFANTIL",
      "direccion": "Mcal. Estigarribia y Pedro de Portugal",
      "telefono": "021780412",
      "responsabl": "DR. JORGE PAREDES",
      "dependeDe": "PARQUE REGIONAL VIRTUAL HOSPITALES ESPECIALIZADOS",
      "estado": "ACTIVO",
      "codigo": 241,
      "nombreMuni": "LIMPIO",
      "codigoMuni": "1108",
      "internet": "SI",
      "codigoSaa": 11008229,
      "fechaActiv": "1467108294000",
      "fechaInact": "null",
      "nombreDist": "LIMPIO",
      "codigoDist": 8,
      "nombreRegi": "CENTRAL",
      "codigoRegi": 11,
      "nombreDi_1": "LIMPIO",
      "id": 28729
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-57.4764927, -25.1646076]
    }
  }, {
    "type": "Feature",
    "properties": {
      "nombre": "HOSPITAL DEL INDIGENA",
      "tipo": "HOSPITAL ESPECIALIZADO",
      "direccion": "Avda. San Jose N 231",
      "telefono": "021780500",
      "responsabl": "DR. MARTINUS BEUMER",
      "dependeDe": "PARQUE REGIONAL VIRTUAL HOSPITALES ESPECIALIZADOS",
      "estado": "ACTIVO",
      "codigo": 675,
      "nombreMuni": "ASUNCIÓN",
      "codigoMuni": "1",
      "internet": "SI",
      "codigoSaa": 11008240,
      "fechaActiv": "1442232007000",
      "fechaInact": "null",
      "nombreDist": "LIMPIO",
      "codigoDist": 8,
      "nombreRegi": "CENTRAL",
      "codigoRegi": 11,
      "nombreDi_1": "LIMPIO",
      "id": 28703
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-57.475162, -25.16139]
    }
  }, {
    "type": "Feature",
    "properties": {
      "nombre": "H.D.- VILLA ELISA",
      "tipo": "HOSPITAL DISTRITAL",
      "direccion": "Los Alamos c/ Los Nogales",
      "telefono": "021941863",
      "responsabl": "DR. CESAR CENTURION",
      "dependeDe": "PARQUE REGIONAL VIRTUAL HOSPITALES ESPECIALIZADOS",
      "estado": "ACTIVO",
      "codigo": 274,
      "nombreMuni": "ASUNCIÓN",
      "codigoMuni": "1",
      "internet": "SI",
      "codigoSaa": 11015228,
      "fechaActiv": "1442232007000",
      "fechaInact": "null",
      "nombreDist": "VILLA ELISA",
      "codigoDist": 15,
      "nombreRegi": "CENTRAL",
      "codigoRegi": 11,
      "nombreDi_1": "VILLA ELISA",
      "id": 28708
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-57.5749944, -25.3594222]
    }
  }, {
    "type": "Feature",
    "properties": {
      "nombre": "H.D. - VILLETA",
      "tipo": "HOSPITAL DISTRITAL",
      "direccion": "Gral. Diaz y Mcal. Estigarribia",
      "telefono": "0225952390",
      "responsabl": "DR. DOMITILO RAMOS",
      "dependeDe": "PARQUE REGIONAL VIRTUAL HOSPITALES ESPECIALIZADOS",
      "estado": "ACTIVO",
      "codigo": 276,
      "nombreMuni": "ASUNCIÓN",
      "codigoMuni": "1",
      "internet": "SI",
      "codigoSaa": 11016232,
      "fechaActiv": "1467108294000",
      "fechaInact": "null",
      "nombreDist": "VILLETA",
      "codigoDist": 16,
      "nombreRegi": "CENTRAL",
      "codigoRegi": 11,
      "nombreDi_1": "VILLETA",
      "id": 28731
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-57.5613611, -25.5064167]
    }
  }, {
    "type": "Feature",
    "properties": {
      "nombre": "H.D. - ÑEMBY",
      "tipo": "HOSPITAL DISTRITAL",
      "direccion": "Defensores del Chaco y Batalla de Ytororo",
      "telefono": "021961940",
      "responsabl": "DR. NILTON TORRES",
      "dependeDe": "PARQUE REGIONAL VIRTUAL HOSPITALES ESPECIALIZADOS",
      "estado": "ACTIVO",
      "codigo": 260,
      "nombreMuni": "ASUNCIÓN",
      "codigoMuni": "1",
      "internet": "SI",
      "codigoSaa": 11012237,
      "fechaActiv": "1442232007000",
      "fechaInact": "null",
      "nombreDist": "ÑEMBY",
      "codigoDist": 12,
      "nombreRegi": "CENTRAL",
      "codigoRegi": 11,
      "nombreDi_1": "ÑEMBY",
      "id": 28706
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-57.5462778, -25.3964222]
    }
  }, {
    "type": "Feature",
    "properties": {
      "nombre": "HMI- SAN LORENZO",
      "tipo": "HOSPITAL MATERNO INFANTIL",
      "direccion": "Dr. Pellon c/Jaime Bestard",
      "telefono": "021573537",
      "responsabl": "DR. JUAN AGUILERA",
      "dependeDe": "PARQUE REGIONAL VIRTUAL HOSPITALES ESPECIALIZADOS",
      "estado": "ACTIVO",
      "codigo": 263,
      "nombreMuni": "ASUNCIÓN",
      "codigoMuni": "1",
      "internet": "SI",
      "codigoSaa": 11014101,
      "fechaActiv": "1467108294000",
      "fechaInact": "null",
      "nombreDist": "SAN LORENZO",
      "codigoDist": 14,
      "nombreRegi": "CENTRAL",
      "codigoRegi": 11,
      "nombreDi_1": "SAN LORENZO",
      "id": 28730
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-57.5084472, -25.3335094]
    }
  }, {
    "type": "Feature",
    "properties": {
      "nombre": "HOSPITAL GENERAL PEDIÁTRICO ACOSTA ÑU",
      "tipo": "HOSPITAL ESPECIALIZADO",
      "direccion": "Arnaldo Bacigalupo y Gerardo Paciello",
      "telefono": "021589010",
      "responsabl": "DR. EDUARDO PIO ALFIERI",
      "dependeDe": "PARQUE REGIONAL VIRTUAL HOSPITALES ESPECIALIZADOS",
      "estado": "ACTIVO",
      "codigo": 681,
      "nombreMuni": "ASUNCIÓN",
      "codigoMuni": "1",
      "internet": "SI",
      "codigoSaa": 11014972,
      "fechaActiv": "1442232007000",
      "fechaInact": "null",
      "nombreDist": "SAN LORENZO",
      "codigoDist": 14,
      "nombreRegi": "CENTRAL",
      "codigoRegi": 11,
      "nombreDi_1": "SAN LORENZO",
      "id": 28707
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-57.499019, -25.393319]
    }
  }, {
    "type": "Feature",
    "properties": {
      "nombre": "H.R.- PILAR",
      "tipo": "HOSPITAL REGIONAL",
      "direccion": "Tte. Rene Rios y Bco. Rio Paraguay",
      "telefono": "0786232216",
      "responsabl": "DR. BIYAN PAKRAVAN",
      "dependeDe": "XII ÑEEMBUCU",
      "estado": "ACTIVO",
      "codigo": 417,
      "nombreMuni": "PILAR",
      "codigoMuni": "1201",
      "internet": "SI",
      "codigoSaa": 12001101,
      "fechaActiv": "1442232007000",
      "fechaInact": "null",
      "nombreDist": "PILAR",
      "codigoDist": 1,
      "nombreRegi": "ÑEEMBUCU",
      "codigoRegi": 12,
      "nombreDi_1": "PILAR",
      "id": 28709
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-58.3101119, -26.8618441]
    }
  }, {
    "type": "Feature",
    "properties": {
      "nombre": "H.D.- ALBERDI",
      "tipo": "HOSPITAL DISTRITAL",
      "direccion": "14 de Mayo c/ Asuncion",
      "telefono": "0780210260",
      "responsabl": "DRA. NILDA ALFONSO DI NATALE",
      "dependeDe": "XII ÑEEMBUCU",
      "estado": "ACTIVO",
      "codigo": 418,
      "nombreMuni": "ALBERDI",
      "codigoMuni": "1202",
      "internet": "SI",
      "codigoSaa": 12002227,
      "fechaActiv": "1442232007000",
      "fechaInact": "null",
      "nombreDist": "ALBERDI",
      "codigoDist": 2,
      "nombreRegi": "ÑEEMBUCU",
      "codigoRegi": 12,
      "nombreDi_1": "ALBERDI",
      "id": 28710
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-58.144358, -26.185278]
    }
  }, {
    "type": "Feature",
    "properties": {
      "nombre": "H.R.- PEDRO JUAN CABALLERO",
      "tipo": "HOSPITAL REGIONAL",
      "direccion": "Aquidaban c/Cerro Leon y Rubio Eu",
      "telefono": "0336272208",
      "responsabl": "DRA. INGRID MONTANIA",
      "dependeDe": "XIII AMAMBAY",
      "estado": "ACTIVO",
      "codigo": 937,
      "nombreMuni": "PEDRO JUAN CABALLERO",
      "codigoMuni": "1301",
      "internet": "SI",
      "codigoSaa": 13001101,
      "fechaActiv": "1442232007000",
      "fechaInact": "null",
      "nombreDist": "PEDRO JUAN CABALLERO",
      "codigoDist": 1,
      "nombreRegi": "AMAMBAY",
      "codigoRegi": 13,
      "nombreDi_1": "PEDRO JUAN CABALLERO",
      "id": 28711
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-55.74175, -22.535]
    }
  }, {
    "type": "Feature",
    "properties": {
      "nombre": "H.D. BELLA VISTA",
      "tipo": "HOSPITAL DISTRITAL",
      "direccion": "14 de Mayo e/Cnel. Martinez y Gral. Diaz",
      "telefono": "038238235",
      "responsabl": "DR. NELSON FLORENTIN",
      "dependeDe": "XIII AMAMBAY",
      "estado": "ACTIVO",
      "codigo": 1068,
      "nombreMuni": "BELLA VISTA - AMAMBAY",
      "codigoMuni": "1302",
      "internet": "SI",
      "codigoSaa": 13002202,
      "fechaActiv": "1442232007000",
      "fechaInact": "null",
      "nombreDist": "BELLA VISTA",
      "codigoDist": 2,
      "nombreRegi": "AMAMBAY",
      "codigoRegi": 13,
      "nombreDi_1": "BELLA VISTA",
      "id": 28712
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-56.5156933, -22.1171383]
    }
  }, {
    "type": "Feature",
    "properties": {
      "nombre": "H.D. - CAPITÁN BADO",
      "tipo": "HOSPITAL DISTRITAL",
      "direccion": "Estrella e/Rep. de Colombia y PJC",
      "telefono": "0337230331",
      "responsabl": "DR. GUILIANO REICHARD",
      "dependeDe": "XIII AMAMBAY",
      "estado": "ACTIVO",
      "codigo": 1069,
      "nombreMuni": "CAPITÁN BADO",
      "codigoMuni": "1303",
      "internet": "SI",
      "codigoSaa": 13003201,
      "fechaActiv": "1467108294000",
      "fechaInact": "null",
      "nombreDist": "CAPITAN BADO",
      "codigoDist": 3,
      "nombreRegi": "AMAMBAY",
      "codigoRegi": 13,
      "nombreDi_1": "CAPITAN BADO",
      "id": 28732
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-55.53275, -23.2654167]
    }
  }, {
    "type": "Feature",
    "properties": {
      "nombre": "H.R.- SALTOS DEL GUAIRA",
      "tipo": "HOSPITAL REGIONAL",
      "direccion": "Bo San Jorge Km 2",
      "telefono": "046242317",
      "responsabl": "DR. OSVALDO LEON MANCUELLO",
      "dependeDe": "XIV CANINDEYU",
      "estado": "ACTIVO",
      "codigo": 1330,
      "nombreMuni": "SALTO DEL GUAIRÁ",
      "codigoMuni": "1401",
      "internet": "SI",
      "codigoSaa": 14001101,
      "fechaActiv": "1442232007000",
      "fechaInact": "null",
      "nombreDist": "SALTOS DEL GUAIRA",
      "codigoDist": 1,
      "nombreRegi": "CANINDEYU",
      "codigoRegi": 14,
      "nombreDi_1": "SALTOS DEL GUAIRA",
      "id": 28713
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-54.3272879, -24.0757727]
    }
  }, {
    "type": "Feature",
    "properties": {
      "nombre": "H.D. -  CURUGUATY",
      "tipo": "HOSPITAL DISTRITAL",
      "direccion": "Nanawa e Independencia Nacional",
      "telefono": "048210223",
      "responsabl": "DRA. LIDIA LEZCANO",
      "dependeDe": "XIV CANINDEYU",
      "estado": "ACTIVO",
      "codigo": 1353,
      "nombreMuni": "CURUGUATY",
      "codigoMuni": "1403",
      "internet": "SI",
      "codigoSaa": 14003201,
      "fechaActiv": "1442232007000",
      "fechaInact": "null",
      "nombreDist": "VILLA SAN ISIDRO CURUGUATY",
      "codigoDist": 3,
      "nombreRegi": "CANINDEYU",
      "codigoRegi": 14,
      "nombreDi_1": "VILLA SAN ISIDRO CURUGUATY",
      "id": 28714
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-55.695643, -24.472425]
    }
  }, {
    "type": "Feature",
    "properties": {
      "nombre": "INERAM JUAN MAX BOETTNER",
      "tipo": "HOSPITAL ESPECIALIZADO",
      "direccion": "Avda. Venezuela N 1356 c/ Tte. Insaurralde",
      "telefono": "021290123",
      "responsabl": "DR. FELIPE GONZALEZ AVILA",
      "dependeDe": "PARQUE REGIONAL VIRTUAL HOSPITALES ESPECIALIZADOS",
      "estado": "ACTIVO",
      "codigo": 674,
      "nombreMuni": "ASUNCIÓN",
      "codigoMuni": "1",
      "internet": "SI",
      "codigoSaa": 18030213,
      "fechaActiv": "1442232007000",
      "fechaInact": "null",
      "nombreDist": "ASUNCION",
      "codigoDist": 30,
      "nombreRegi": "CAPITAL",
      "codigoRegi": 18,
      "nombreDi_1": "ASUNCION",
      "id": 28719
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-57.59311, -25.275276]
    }
  }, {
    "type": "Feature",
    "properties": {
      "nombre": "H. DE TRAUMA MANUEL GIAGNI",
      "tipo": "HOSPITAL ESPECIALIZADO",
      "direccion": "Gral. Santos e/ Teodoro S. Mongelos",
      "telefono": "021204532",
      "responsabl": "DR. ANIBAL FILARTIGA",
      "dependeDe": "PARQUE REGIONAL VIRTUAL HOSPITALES ESPECIALIZADOS",
      "estado": "ACTIVO",
      "codigo": 203,
      "nombreMuni": "ASUNCIÓN",
      "codigoMuni": "1",
      "internet": "SI",
      "codigoSaa": 18030218,
      "fechaActiv": "1442232007000",
      "fechaInact": "null",
      "nombreDist": "ASUNCION",
      "codigoDist": 30,
      "nombreRegi": "CAPITAL",
      "codigoRegi": 18,
      "nombreDi_1": "ASUNCION",
      "id": 28720
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-57.612854, -25.300562]
    }
  }, {
    "type": "Feature",
    "properties": {
      "nombre": "CENTRO NACIONAL DEL QUEMADO",
      "tipo": "CENTRO ESPECIALIZADO",
      "direccion": "Manuel Dominguez e/ Brasil",
      "telefono": "021227544",
      "responsabl": "DR.BRUNO GERARDO BALMELLI",
      "dependeDe": "PARQUE REGIONAL VIRTUAL HOSPITALES ESPECIALIZADOS",
      "estado": "ACTIVO",
      "codigo": 509,
      "nombreMuni": "ASUNCIÓN",
      "codigoMuni": "1",
      "internet": "SI",
      "codigoSaa": 18030225,
      "fechaActiv": "1442232007000",
      "fechaInact": "null",
      "nombreDist": "ASUNCION",
      "codigoDist": 30,
      "nombreRegi": "CAPITAL",
      "codigoRegi": 18,
      "nombreDi_1": "ASUNCION",
      "id": 28721
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-57.627029, -25.292992]
    }
  }, {
    "type": "Feature",
    "properties": {
      "nombre": "I.N.CARDIOLOGIA PROF. DR JUAN CATTONI",
      "tipo": "HOSPITAL ESPECIALIZADO",
      "direccion": "Via Ferrea c/ Madame Lynch",
      "telefono": "02192519",
      "responsabl": "DR.CESAR MARIA DELMAS BARCHELO",
      "dependeDe": "PARQUE REGIONAL VIRTUAL HOSPITALES ESPECIALIZADOS",
      "estado": "ACTIVO",
      "codigo": 1703,
      "nombreMuni": "ASUNCIÓN",
      "codigoMuni": "1",
      "internet": "SI",
      "codigoSaa": 18030342,
      "fechaActiv": "1442232007000",
      "fechaInact": "null",
      "nombreDist": "ASUNCION",
      "codigoDist": 30,
      "nombreRegi": "CAPITAL",
      "codigoRegi": 18,
      "nombreDi_1": "ASUNCION",
      "id": 28723
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-57.546601, -25.257175]
    }
  }, {
    "type": "Feature",
    "properties": {
      "nombre": "H.R. - LUQUE",
      "tipo": "HOSPITAL REGIONAL",
      "direccion": "Independencia Nacional y Blas Garay",
      "telefono": "021650345",
      "responsabl": "DR. FRANCISCO DUARTE",
      "dependeDe": "PARQUE REGIONAL VIRTUAL HOSPITALES ESPECIALIZADOS",
      "estado": "ACTIVO",
      "codigo": 246,
      "nombreMuni": "ASUNCIÓN",
      "codigoMuni": "1",
      "internet": "SI",
      "codigoSaa": 11009225,
      "fechaActiv": "1442232007000",
      "fechaInact": "null",
      "nombreDist": "LUQUE",
      "codigoDist": 9,
      "nombreRegi": "CENTRAL",
      "codigoRegi": 11,
      "nombreDi_1": "LUQUE",
      "id": 28704
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-57.4817907, -25.2664389]
    }
  }, {
    "type": "Feature",
    "properties": {
      "nombre": "HMI- SAN PABLO",
      "tipo": "HOSPITAL MATERNO INFANTIL",
      "direccion": "Avda. La Victoria",
      "telefono": "021500078",
      "responsabl": "DR. VICENTE ACUÑA",
      "dependeDe": "PARQUE REGIONAL VIRTUAL HOSPITALES ESPECIALIZADOS",
      "estado": "ACTIVO",
      "codigo": 507,
      "nombreMuni": "ASUNCIÓN",
      "codigoMuni": "1",
      "internet": "SI",
      "codigoSaa": 18030204,
      "fechaActiv": "1442232007000",
      "fechaInact": "null",
      "nombreDist": "ASUNCION",
      "codigoDist": 30,
      "nombreRegi": "CAPITAL",
      "codigoRegi": 18,
      "nombreDi_1": "ASUNCION",
      "id": 28716
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-57.5776801, -25.3203216]
    }
  }, {
    "type": "Feature",
    "properties": {
      "nombre": "HOSPITAL LOMA PYTA - MATERNO INFANTIL",
      "tipo": "HOSPITAL MATERNO INFANTIL",
      "direccion": "Ruta Transchaco Km 12.5",
      "telefono": "021290300",
      "responsabl": "DR. DERLIS LEON",
      "dependeDe": "PARQUE REGIONAL VIRTUAL HOSPITALES ESPECIALIZADOS",
      "estado": "ACTIVO",
      "codigo": 676,
      "nombreMuni": "ASUNCIÓN",
      "codigoMuni": "1",
      "internet": "SI",
      "codigoSaa": 18030210,
      "fechaActiv": "1442232007000",
      "fechaInact": "null",
      "nombreDist": "ASUNCION",
      "codigoDist": 30,
      "nombreRegi": "CAPITAL",
      "codigoRegi": 18,
      "nombreDi_1": "ASUNCION",
      "id": 28717
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-57.544377, -25.241503]
    }
  }, {
    "type": "Feature",
    "properties": {
      "nombre": "INSTITUTO DE MEDICINA TROPICAL",
      "tipo": "HOSPITAL ESPECIALIZADO",
      "direccion": "Avda. Venezuela y Florida",
      "telefono": "021293500",
      "responsabl": "DR. OSCAR MANUEL MERLO",
      "dependeDe": "PARQUE REGIONAL VIRTUAL HOSPITALES ESPECIALIZADOS",
      "estado": "ACTIVO",
      "codigo": 673,
      "nombreMuni": "ASUNCIÓN",
      "codigoMuni": "1",
      "internet": "SI",
      "codigoSaa": 18030212,
      "fechaActiv": "1442232007000",
      "fechaInact": "null",
      "nombreDist": "ASUNCION",
      "codigoDist": 30,
      "nombreRegi": "CAPITAL",
      "codigoRegi": 18,
      "nombreDi_1": "ASUNCION",
      "id": 28718
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-57.593249, -25.277527]
    }
  }, {
    "type": "Feature",
    "properties": {
      "nombre": "HOSPITAL PSIQUIÁTRICO",
      "tipo": "HOSPITAL ESPECIALIZADO",
      "direccion": "Avda. Venezuela 1004 c/ Concordia",
      "telefono": "021290101",
      "responsabl": "DRA. MIRTHA RODRIGUEZ ROSSI",
      "dependeDe": "PARQUE REGIONAL VIRTUAL HOSPITALES ESPECIALIZADOS",
      "estado": "ACTIVO",
      "codigo": 672,
      "nombreMuni": "ASUNCIÓN",
      "codigoMuni": "1",
      "internet": "SI",
      "codigoSaa": 18030247,
      "fechaActiv": "1442232007000",
      "fechaInact": "null",
      "nombreDist": "ASUNCION",
      "codigoDist": 30,
      "nombreRegi": "CAPITAL",
      "codigoRegi": 18,
      "nombreDi_1": "ASUNCION",
      "id": 28722
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-57.592489, -25.279467]
    }
  }, {
    "type": "Feature",
    "properties": {
      "nombre": "H.R. - CONCEPCIÓN",
      "tipo": "HOSPITAL REGIONAL",
      "direccion": "Prof. Guillermo Cabral e/ Dr. Marcial Royg Bernal",
      "telefono": "0331242214",
      "responsabl": "DR. SAMUEL PEREZ",
      "dependeDe": "I CONCEPCION",
      "estado": "ACTIVO",
      "codigo": 1311,
      "nombreMuni": "CONCEPCIÓN",
      "codigoMuni": "101",
      "internet": "SI",
      "codigoSaa": 1001101,
      "fechaActiv": "1442232007000",
      "fechaInact": "null",
      "nombreDist": "CONCEPCION",
      "codigoDist": 1,
      "nombreRegi": "CONCEPCION",
      "codigoRegi": 1,
      "nombreDi_1": "CONCEPCION",
      "id": 28667
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-57.4379283, -23.4114226]
    }
  }, {
    "type": "Feature",
    "properties": {
      "nombre": "H.D. - HORQUETA",
      "tipo": "HOSPITAL DISTRITAL",
      "direccion": "Km 39 Ruta V",
      "telefono": "0332222325",
      "responsabl": "DR. JUAN JOSE GIMENEZ",
      "dependeDe": "I CONCEPCION",
      "estado": "ACTIVO",
      "codigo": 1277,
      "nombreMuni": "HORQUETA",
      "codigoMuni": "103",
      "internet": "SI",
      "codigoSaa": 1003201,
      "fechaActiv": "1467108294000",
      "fechaInact": "null",
      "nombreDist": "HORQUETA",
      "codigoDist": 3,
      "nombreRegi": "CONCEPCION",
      "codigoRegi": 1,
      "nombreDi_1": "HORQUETA",
      "id": 28724
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-57.0603294, -23.3552715]
    }
  }, {
    "type": "Feature",
    "properties": {
      "nombre": "H.R. - SAN PEDRO",
      "tipo": "HOSPITAL REGIONAL",
      "direccion": "Benjamin Griffi y Fretes Ayala",
      "telefono": "0342222220",
      "responsabl": "DRA MONICA RAFAELA SOSA",
      "dependeDe": "II SAN PEDRO NORTE",
      "estado": "ACTIVO",
      "codigo": 934,
      "nombreMuni": "SAN PEDRO",
      "codigoMuni": "201",
      "internet": "SI",
      "codigoSaa": 2001101,
      "fechaActiv": "1467127979000",
      "fechaInact": "null",
      "nombreDist": "SAN PEDRO DEL YCUAMANDIYU",
      "codigoDist": 1,
      "nombreRegi": "SAN PEDRO NORTE",
      "codigoRegi": 2,
      "nombreDi_1": "SAN PEDRO DEL YCUAMANDIYU",
      "id": 28734
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-57.073843, -24.0959056]
    }
  }, {
    "type": "Feature",
    "properties": {
      "nombre": "H.D.- SAN ESTANISLAO",
      "tipo": "HOSPITAL DISTRITAL",
      "direccion": "Avda. Tapiracuai c/Tte. Quintana",
      "telefono": "0343420250",
      "responsabl": "DRA. LOURDES JARA",
      "dependeDe": "II SAN PEDRO SUR",
      "estado": "ACTIVO",
      "codigo": 34,
      "nombreMuni": "SAN PEDRO",
      "codigoMuni": "201",
      "internet": "SI",
      "codigoSaa": 2008201,
      "fechaActiv": "1442232007000",
      "fechaInact": "null",
      "nombreDist": "SAN ESTANISLAO",
      "codigoDist": 8,
      "nombreRegi": "SAN PEDRO SUR",
      "codigoRegi": 2,
      "nombreDi_1": "SAN ESTANISLAO",
      "id": 28668
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-56.4438256, -24.6614505]
    }
  }, {
    "type": "Feature",
    "properties": {
      "nombre": "H.D. - GRAL. AQUINO",
      "tipo": "HOSPITAL DISTRITAL",
      "direccion": "Aka Juasa e/Juan Pio Escalda y Rubio Ru",
      "telefono": "0418215539",
      "responsabl": "DR. HECTOR DECLESSIS",
      "dependeDe": "II SAN PEDRO SUR",
      "estado": "ACTIVO",
      "codigo": 94,
      "nombreMuni": "GRAL. ELIZARDO AQUINO",
      "codigoMuni": "204",
      "internet": "SI",
      "codigoSaa": 2022204,
      "fechaActiv": "1442232007000",
      "fechaInact": "null",
      "nombreDist": "GRAL. AQUINO - SPS",
      "codigoDist": 22,
      "nombreRegi": "SAN PEDRO SUR",
      "codigoRegi": 2,
      "nombreDi_1": "GRAL. AQUINO - SPS",
      "id": 28669
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-56.8961201, -24.4460601]
    }
  }, {
    "type": "Feature",
    "properties": {
      "nombre": "H.R. - CAACUPE",
      "tipo": "HOSPITAL REGIONAL",
      "direccion": "Intendente Parquet y 8 de diciembre c/ Tte. Godoy",
      "telefono": "05112423323",
      "responsabl": "DRA. CARMEN ALMIRON",
      "dependeDe": "III CORDILLERA",
      "estado": "ACTIVO",
      "codigo": 392,
      "nombreMuni": "CAACUPÉ",
      "codigoMuni": "301",
      "internet": "SI",
      "codigoSaa": 3001101,
      "fechaActiv": "1442232007000",
      "fechaInact": "null",
      "nombreDist": "CAACUPE",
      "codigoDist": 1,
      "nombreRegi": "CORDILLERA",
      "codigoRegi": 3,
      "nombreDi_1": "CAACUPE",
      "id": 28670
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-57.148707, -25.390917]
    }
  }, {
    "type": "Feature",
    "properties": {
      "nombre": "H.D. - ALTOS",
      "tipo": "HOSPITAL DISTRITAL",
      "direccion": "Mcal. Lopez c/Federico Chavez Bo San Blas",
      "telefono": "0512230074",
      "responsabl": "DRA. PAOLA CABRERA",
      "dependeDe": "III CORDILLERA",
      "estado": "ACTIVO",
      "codigo": 866,
      "nombreMuni": "ALTOS",
      "codigoMuni": "302",
      "internet": "SI",
      "codigoSaa": 3002211,
      "fechaActiv": "1442232007000",
      "fechaInact": "null",
      "nombreDist": "ALTOS",
      "codigoDist": 2,
      "nombreRegi": "CORDILLERA",
      "codigoRegi": 3,
      "nombreDi_1": "ALTOS",
      "id": 28671
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-57.2505029, -25.2652981]
    }
  }, {
    "type": "Feature",
    "properties": {
      "nombre": "C.S.- ARROYOS Y ESTEROS",
      "tipo": "CENTRO DE SALUD",
      "direccion": "Gral. Bernardino Caballero N°115",
      "telefono": "0510272061",
      "responsabl": "DR. RAMON ESCOBAR ALDERETE",
      "dependeDe": "III CORDILLERA",
      "estado": "ACTIVO",
      "codigo": 823,
      "nombreMuni": "ARROYOS Y ESTEROS",
      "codigoMuni": "303",
      "internet": "SI",
      "codigoSaa": 3003201,
      "fechaActiv": "1442232007000",
      "fechaInact": "null",
      "nombreDist": "ARROYOS Y ESTEROS",
      "codigoDist": 3,
      "nombreRegi": "CORDILLERA",
      "codigoRegi": 3,
      "nombreDi_1": "ARROYOS Y ESTEROS",
      "id": 28672
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-57.0881111, -25.0525]
    }
  }, {
    "type": "Feature",
    "properties": {
      "nombre": "H.D. - EUSEBIO AYALA",
      "tipo": "HOSPITAL DISTRITAL",
      "direccion": "Intendencia Nacional y Colon Bo. Inmaculada",
      "telefono": "0514215244",
      "responsabl": "DR. VICTOR ROJAS",
      "dependeDe": "III CORDILLERA",
      "estado": "ACTIVO",
      "codigo": 865,
      "nombreMuni": "ASUNCIÓN",
      "codigoMuni": "1",
      "internet": "SI",
      "codigoSaa": 3007203,
      "fechaActiv": "1442232007000",
      "fechaInact": "null",
      "nombreDist": "EUSEBIO AYALA",
      "codigoDist": 7,
      "nombreRegi": "CORDILLERA",
      "codigoRegi": 3,
      "nombreDi_1": "EUSEBIO AYALA",
      "id": 28673
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-56.9590278, -25.3816111]
    }
  }, {
    "type": "Feature",
    "properties": {
      "nombre": "H.D. - TOBATI",
      "tipo": "HOSPITAL DISTRITAL",
      "direccion": "14 de Mayo c/Estrella Bo Virgen del Rosario",
      "telefono": "0516262219",
      "responsabl": "DR. MARCOS GALLAGHER",
      "dependeDe": "III CORDILLERA",
      "estado": "ACTIVO",
      "codigo": 817,
      "nombreMuni": "ASUNCIÓN",
      "codigoMuni": "1",
      "internet": "SI",
      "codigoSaa": 3018209,
      "fechaActiv": "1442232007000",
      "fechaInact": "null",
      "nombreDist": "TOBATI",
      "codigoDist": 18,
      "nombreRegi": "CORDILLERA",
      "codigoRegi": 3,
      "nombreDi_1": "TOBATI",
      "id": 28674
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-57.082702, -25.264701]
    }
  }, {
    "type": "Feature",
    "properties": {
      "nombre": "H.R. - VILLARRICA",
      "tipo": "HOSPITAL REGIONAL",
      "direccion": "Avda. Epaña e/Spezzini",
      "telefono": "054143111",
      "responsabl": "DR. RICARDO OVIEDO GAMARRA",
      "dependeDe": "IV GUAIRA",
      "estado": "ACTIVO",
      "codigo": 512,
      "nombreMuni": "VILLARRICA",
      "codigoMuni": "401",
      "internet": "SI",
      "codigoSaa": 4001101,
      "fechaActiv": "1442232007000",
      "fechaInact": "null",
      "nombreDist": "VILLARRICA",
      "codigoDist": 1,
      "nombreRegi": "GUAIRA",
      "codigoRegi": 4,
      "nombreDi_1": "VILLARRICA",
      "id": 28664
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-56.40325, -25.7868333]
    }
  }, {
    "type": "Feature",
    "properties": {
      "nombre": "H.D. - COLONIA INDEPENDENCIA",
      "tipo": "HOSPITAL DISTRITAL",
      "direccion": "Avda. Vicepresidente Argaña. Bo. Las Mercedes",
      "telefono": "0548265215",
      "responsabl": "DRA. NATALIA ALMADA OCAMPOS",
      "dependeDe": "IV GUAIRA",
      "estado": "ACTIVO",
      "codigo": 510,
      "nombreMuni": "ASUNCIÓN",
      "codigoMuni": "1",
      "internet": "SI",
      "codigoSaa": 4007203,
      "fechaActiv": "1442232007000",
      "fechaInact": "null",
      "nombreDist": "INDEPENDENCIA",
      "codigoDist": 7,
      "nombreRegi": "GUAIRA",
      "codigoRegi": 4,
      "nombreDi_1": "INDEPENDENCIA",
      "id": 28675
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-56.222448, -25.716752]
    }
  }, {
    "type": "Feature",
    "properties": {
      "nombre": "H.D.- CAAGUAZU",
      "tipo": "HOSPITAL DISTRITAL",
      "direccion": "M.J.Troche e/ Tte. Rojas Silva y Carlos A.",
      "telefono": "052242568",
      "responsabl": "DR. LUCAS ESCOBAR",
      "dependeDe": "V CAAGUAZU",
      "estado": "ACTIVO",
      "codigo": 409,
      "nombreMuni": "CAAGUAZÚ",
      "codigoMuni": "502",
      "internet": "SI",
      "codigoSaa": 5002201,
      "fechaActiv": "1442232007000",
      "fechaInact": "null",
      "nombreDist": "CAAGUAZU",
      "codigoDist": 2,
      "nombreRegi": "CAAGUAZU",
      "codigoRegi": 5,
      "nombreDi_1": "CAAGUAZU",
      "id": 28677
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-56.013518, -25.472645]
    }
  }, {
    "type": "Feature",
    "properties": {
      "nombre": "H.D.- DR. JUAN MANUEL FRUTOS",
      "tipo": "HOSPITAL DISTRITAL",
      "direccion": "Barbara Barreto e/Hector Soto",
      "telefono": "0524225215",
      "responsabl": "DR. LUIS SANCHEZ",
      "dependeDe": "V CAAGUAZU",
      "estado": "ACTIVO",
      "codigo": 845,
      "nombreMuni": "ASUNCIÓN",
      "codigoMuni": "1",
      "internet": "SI",
      "codigoSaa": 5006205,
      "fechaActiv": "1442232007000",
      "fechaInact": "null",
      "nombreDist": "JUAN MANUEL  FRUTOS",
      "codigoDist": 6,
      "nombreRegi": "CAAGUAZU",
      "codigoRegi": 5,
      "nombreDi_1": "JUAN MANUEL  FRUTOS",
      "id": 28678
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-55.8284722, -25.3887222]
    }
  }, {
    "type": "Feature",
    "properties": {
      "nombre": "H.D.- YHU",
      "tipo": "HOSPITAL DISTRITAL",
      "direccion": "Julia Miranda Cueto",
      "telefono": "0981680159",
      "responsabl": "DR. HERNAN JARA",
      "dependeDe": "V CAAGUAZU",
      "estado": "ACTIVO",
      "codigo": 846,
      "nombreMuni": "ASUNCIÓN",
      "codigoMuni": "1",
      "internet": "NO",
      "codigoSaa": 5011208,
      "fechaActiv": "1442232007000",
      "fechaInact": "null",
      "nombreDist": "YHU",
      "codigoDist": 11,
      "nombreRegi": "CAAGUAZU",
      "codigoRegi": 5,
      "nombreDi_1": "YHU",
      "id": 28680
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-55.937696, -25.070576]
    }
  }, {
    "type": "Feature",
    "properties": {
      "nombre": "H.R.- CAAZAPA",
      "tipo": "HOSPITAL REGIONAL",
      "direccion": "Boulevar Madame Eliza Lynch",
      "telefono": "0542232223",
      "responsabl": "DRA.ZONIA MABEL AQUINO",
      "dependeDe": "VI  CAAZAPA",
      "estado": "ACTIVO",
      "codigo": 35,
      "nombreMuni": "null",
      "codigoMuni": "null",
      "internet": "SI",
      "codigoSaa": 6001101,
      "fechaActiv": "1442232007000",
      "fechaInact": "null",
      "nombreDist": "CAAZAPA",
      "codigoDist": 1,
      "nombreRegi": "CAAZAPA",
      "codigoRegi": 6,
      "nombreDi_1": "CAAZAPA",
      "id": 28681
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-56.3738333, -26.1924722]
    }
  }, {
    "type": "Feature",
    "properties": {
      "nombre": "H.D.- YUTY",
      "tipo": "HOSPITAL DISTRITAL",
      "direccion": "Ntra. Sra. de la Natividad y 14 de Mayo",
      "telefono": "0547257209",
      "responsabl": "DR. RICHARD NAPOLEON ACOSTA",
      "dependeDe": "VI  CAAZAPA",
      "estado": "ACTIVO",
      "codigo": 31,
      "nombreMuni": "YUTY",
      "codigoMuni": "610",
      "internet": "SI",
      "codigoSaa": 6010208,
      "fechaActiv": "1442232007000",
      "fechaInact": "null",
      "nombreDist": "YUTY",
      "codigoDist": 10,
      "nombreRegi": "CAAZAPA",
      "codigoRegi": 6,
      "nombreDi_1": "YUTY",
      "id": 28683
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-56.247277, -26.620951]
    }
  }, {
    "type": "Feature",
    "properties": {
      "nombre": "H.D.- SAN JUAN NEPOMUCENO",
      "tipo": "HOSPITAL DISTRITAL",
      "direccion": "Tte. Silverio Mendoza",
      "telefono": "0544320012",
      "responsabl": "DR. THADEO TEXIERA",
      "dependeDe": "VI  CAAZAPA",
      "estado": "ACTIVO",
      "codigo": 57,
      "nombreMuni": "SAN JUAN NEPOMUCENO",
      "codigoMuni": "607",
      "internet": "SI",
      "codigoSaa": 6007206,
      "fechaActiv": "1442232007000",
      "fechaInact": "null",
      "nombreDist": "SAN JUAN NEPOMUCENO",
      "codigoDist": 7,
      "nombreRegi": "CAAZAPA",
      "codigoRegi": 6,
      "nombreDi_1": "SAN JUAN NEPOMUCENO",
      "id": 28682
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-55.932195, -26.109452]
    }
  }, {
    "type": "Feature",
    "properties": {
      "nombre": "H.R. - ENCARNACION",
      "tipo": "HOSPITAL REGIONAL",
      "direccion": "Independencia Nac. e/ Gral. Bruguez y Jorge Memmel",
      "telefono": "071202271",
      "responsabl": "DRA. CAROLINA MADRAZO",
      "dependeDe": "VII ITAPUA",
      "estado": "ACTIVO",
      "codigo": 297,
      "nombreMuni": "ENCARNACIÓN",
      "codigoMuni": "701",
      "internet": "SI",
      "codigoSaa": 7001101,
      "fechaActiv": "1467108294000",
      "fechaInact": "null",
      "nombreDist": "ENCARNACION",
      "codigoDist": 1,
      "nombreRegi": "ITAPUA",
      "codigoRegi": 7,
      "nombreDi_1": "ENCARNACION",
      "id": 28725
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-55.860063, -27.341093]
    }
  }, {
    "type": "Feature",
    "properties": {
      "nombre": "CARMEN DEL PARANA",
      "tipo": "CENTRO DE SALUD",
      "direccion": "Gral Diaz e/Alberdi",
      "telefono": "0762260204",
      "responsabl": "DRA. FATIMA INSFRAN",
      "dependeDe": "VII ITAPUA",
      "estado": "ACTIVO",
      "codigo": 319,
      "nombreMuni": "CARMEN DEL PARANÁ",
      "codigoMuni": "707",
      "internet": "SI",
      "codigoSaa": 7007202,
      "fechaActiv": "1442232007000",
      "fechaInact": "null",
      "nombreDist": "CARMEN DEL PARANA",
      "codigoDist": 7,
      "nombreRegi": "ITAPUA",
      "codigoRegi": 7,
      "nombreDi_1": "CARMEN DEL PARANA",
      "id": 28684
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-56.157122, -27.223426]
    }
  }, {
    "type": "Feature",
    "properties": {
      "nombre": "H.D. - NATALIO",
      "tipo": "HOSPITAL DISTRITAL",
      "direccion": "Avda. Los Lapachos",
      "telefono": "0765206056",
      "responsabl": "DR OSVALDO MARTINEZ",
      "dependeDe": "VII ITAPUA",
      "estado": "ACTIVO",
      "codigo": 345,
      "nombreMuni": "NATALIO",
      "codigoMuni": "710",
      "internet": "SI",
      "codigoSaa": 7010207,
      "fechaActiv": "1442232007000",
      "fechaInact": "null",
      "nombreDist": "NATALIO",
      "codigoDist": 10,
      "nombreRegi": "ITAPUA",
      "codigoRegi": 7,
      "nombreDi_1": "NATALIO",
      "id": 28685
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-55.1390754, -26.7596736]
    }
  }, {
    "type": "Feature",
    "properties": {
      "nombre": "C.S.- FRAM",
      "tipo": "CENTRO DE SALUD",
      "direccion": "Colombia e/Constantino Trociuk y Guaira",
      "telefono": "0761265266",
      "responsabl": "null",
      "dependeDe": "VII ITAPUA",
      "estado": "ACTIVO",
      "codigo": 331,
      "nombreMuni": "FRAM",
      "codigoMuni": "711",
      "internet": "SI",
      "codigoSaa": 7011210,
      "fechaActiv": "1442232007000",
      "fechaInact": "null",
      "nombreDist": "COLONIA FRAM",
      "codigoDist": 11,
      "nombreRegi": "ITAPUA",
      "codigoRegi": 7,
      "nombreDi_1": "COLONIA FRAM",
      "id": 28686
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-56.0196046, -27.0989132]
    }
  }, {
    "type": "Feature",
    "properties": {
      "nombre": "HMI- HOHENAU",
      "tipo": "HOSPITAL MATERNO INFANTIL",
      "direccion": "Ruta 6 -frente a la ESSO",
      "telefono": "0775232284",
      "responsabl": "DRA. MARTINA ISASA",
      "dependeDe": "VII ITAPUA",
      "estado": "ACTIVO",
      "codigo": 337,
      "nombreMuni": "HOHENAU",
      "codigoMuni": "714",
      "internet": "SI",
      "codigoSaa": 7014311,
      "fechaActiv": "1442232007000",
      "fechaInact": "null",
      "nombreDist": "HOHENAU",
      "codigoDist": 14,
      "nombreRegi": "ITAPUA",
      "codigoRegi": 7,
      "nombreDi_1": "HOHENAU",
      "id": 28687
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-55.6449167, -27.0794722]
    }
  }, {
    "type": "Feature",
    "properties": {
      "nombre": "H.D. - SAN PEDRO DEL PARANÁ",
      "tipo": "HOSPITAL DISTRITAL",
      "direccion": "Bo. Fatima",
      "telefono": "0762260204",
      "responsabl": "DR. FERNANDO MARTINEZ",
      "dependeDe": "VII ITAPUA",
      "estado": "ACTIVO",
      "codigo": 358,
      "nombreMuni": "SAN PEDRO DEL PARANÁ",
      "codigoMuni": "720",
      "internet": "SI",
      "codigoSaa": 7020206,
      "fechaActiv": "1442232007000",
      "fechaInact": "null",
      "nombreDist": "SAN PEDRO DEL PARANA",
      "codigoDist": 20,
      "nombreRegi": "ITAPUA",
      "codigoRegi": 7,
      "nombreDi_1": "SAN PEDRO DEL PARANA",
      "id": 28688
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-56.20357, -26.835731]
    }
  }, {
    "type": "Feature",
    "properties": {
      "nombre": "H.D. - MA. AUXILIADORA",
      "tipo": "HOSPITAL DISTRITAL",
      "direccion": "Itaipu y Ruta 6",
      "telefono": "076420226",
      "responsabl": "DR. CARLOS PONILLAU",
      "dependeDe": "VII ITAPUA",
      "estado": "ACTIVO",
      "codigo": 372,
      "nombreMuni": "TOMÁS ROMERO PEREIRA",
      "codigoMuni": "724",
      "internet": "SI",
      "codigoSaa": 7024212,
      "fechaActiv": "1442232007000",
      "fechaInact": "null",
      "nombreDist": "TOMAS ROMERO PEREIRA",
      "codigoDist": 24,
      "nombreRegi": "ITAPUA",
      "codigoRegi": 7,
      "nombreDi_1": "TOMAS ROMERO PEREIRA",
      "id": 28660
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-55.2620348, -26.5286932]
    }
  }, {
    "type": "Feature",
    "properties": {
      "nombre": "H.R. - SAN JUAN BAUTISTA",
      "tipo": "HOSPITAL REGIONAL",
      "direccion": "Colon e/ Rca. Argentina",
      "telefono": "081212246",
      "responsabl": "DRA. UBALDINA AREVALOS",
      "dependeDe": "VIII MISIONES",
      "estado": "ACTIVO",
      "codigo": 984,
      "nombreMuni": "SAN JUAN BAUTISTA",
      "codigoMuni": "801",
      "internet": "SI",
      "codigoSaa": 8001101,
      "fechaActiv": "1442232007000",
      "fechaInact": "null",
      "nombreDist": "SAN JUAN BAUTISTA",
      "codigoDist": 1,
      "nombreRegi": "MISIONES",
      "codigoRegi": 8,
      "nombreDi_1": "SAN JUAN BAUTISTA",
      "id": 28689
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-57.1498005, -26.6722898]
    }
  }, {
    "type": "Feature",
    "properties": {
      "nombre": "H.D.- SAN IGNACIO",
      "tipo": "HOSPITAL DISTRITAL",
      "direccion": "San Roque Gonzalez e/Dr. Francia y 14 de Mayo",
      "telefono": "0782232284",
      "responsabl": "DR. AMADO AQUINO",
      "dependeDe": "VIII MISIONES",
      "estado": "ACTIVO",
      "codigo": 985,
      "nombreMuni": "SAN IGNACIO",
      "codigoMuni": "803",
      "internet": "SI",
      "codigoSaa": 8003202,
      "fechaActiv": "1442232007000",
      "fechaInact": "null",
      "nombreDist": "SAN IGNACIO",
      "codigoDist": 3,
      "nombreRegi": "MISIONES",
      "codigoRegi": 8,
      "nombreDi_1": "SAN IGNACIO",
      "id": 28690
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-57.0179167, -26.8898611]
    }
  }, {
    "type": "Feature",
    "properties": {
      "nombre": "H.D. SANTA ROSA",
      "tipo": "HOSPITAL DISTRITAL",
      "direccion": "Sgto. Eladio del Puerto e/14 de Mayo",
      "telefono": "0858285226",
      "responsabl": "DR. RAMON SALINAS",
      "dependeDe": "VIII MISIONES",
      "estado": "ACTIVO",
      "codigo": 983,
      "nombreMuni": "SANTA ROSA",
      "codigoMuni": "807",
      "internet": "SI",
      "codigoSaa": 8007203,
      "fechaActiv": "1442232007000",
      "fechaInact": "null",
      "nombreDist": "SANTA ROSA",
      "codigoDist": 7,
      "nombreRegi": "MISIONES",
      "codigoRegi": 8,
      "nombreDi_1": "SANTA ROSA",
      "id": 28691
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-56.848522, -26.8880785]
    }
  }]
};
exports.puntos = puntos;
},{}],"data/barrios.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.barrios = void 0;
var barrios = {
  "type": "FeatureCollection",
  "name": "barrios",
  "crs": {
    "type": "name",
    "properties": {
      "name": "urn:ogc:def:crs:OGC:1.3:CRS84"
    }
  },
  "features": [{
    "type": "Feature",
    "properties": {
      "nombre": "SANTA ROSA",
      "zona": 15,
      "ordenanza": "N� 10811\/83",
      "st_area_sh": 647946.98379299999
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[-57.578252820852107, -25.252013307188843], [-57.57912925462383, -25.252671536775907], [-57.579999361583255, -25.253325181176084], [-57.580922861760072, -25.254009733796877], [-57.581777711261893, -25.254649594462087], [-57.582621112663048, -25.255279120047408], [-57.583827065670462, -25.256176948071502], [-57.58488951321916, -25.256971771077577], [-57.585642495362116, -25.256152331098235], [-57.586383400947561, -25.255340046788323], [-57.587174983342742, -25.254567738425376], [-57.587803199450697, -25.253951055513713], [-57.589207469462224, -25.252348676466269], [-57.589885494656819, -25.251573420374669], [-57.590157291166719, -25.251314118765784], [-57.589658129965898, -25.250859385275767], [-57.589440362310995, -25.250631422217381], [-57.589267163772966, -25.250338351834191], [-57.589144605285121, -25.250044808308715], [-57.588285461892355, -25.248761208541239], [-57.587783480379763, -25.248315772820636], [-57.587098711433832, -25.247815918252179], [-57.586729627178308, -25.247539951187139], [-57.586566120329252, -25.247218434365085], [-57.586167178760498, -25.247282379105648], [-57.585861296265847, -25.247377453825095], [-57.585622868948441, -25.247533345405959], [-57.58507816203867, -25.247531034075426], [-57.584884926353197, -25.248289967653161], [-57.584474463508812, -25.248501154074869], [-57.583473237915449, -25.249081406183549], [-57.582443289453693, -25.249680475139286], [-57.58140501213439, -25.25026085952117], [-57.581150433425066, -25.250374126758267], [-57.580444602199115, -25.250777313579224], [-57.580124380790316, -25.250932000732114], [-57.579299570450175, -25.251410493268622], [-57.578252820852107, -25.252013307188843]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "nombre": "VIRGEN DE FATIMA",
      "zona": 15,
      "ordenanza": "N� 10811\/83",
      "st_area_sh": 716812.56429200002
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[-57.58488951321916, -25.256971771077577], [-57.58617627537199, -25.257930703377646], [-57.587077442853221, -25.258597891310636], [-57.588212003454501, -25.259446417667352], [-57.589966110759022, -25.260744500614475], [-57.590770755741083, -25.261339140661811], [-57.591696201590054, -25.26204265732067], [-57.592254231952815, -25.262453054197437], [-57.592502256019714, -25.262237519580136], [-57.592852977619508, -25.261983610833234], [-57.593011953098596, -25.261699913384778], [-57.592958251387856, -25.26144601994935], [-57.593145530415072, -25.26104239156982], [-57.593795635912585, -25.260648160532522], [-57.59399127548911, -25.26038843945846], [-57.593757130888072, -25.260246243892599], [-57.593301581929595, -25.260035781605662], [-57.593084249972932, -25.259835083045107], [-57.593240984589791, -25.259576054713488], [-57.593564879072659, -25.25938448104294], [-57.593737491963182, -25.259117304284505], [-57.593754661667191, -25.258647615769878], [-57.593734484181255, -25.258256347177436], [-57.59391597529234, -25.257997219474277], [-57.594657606480546, -25.257395950719388], [-57.595484054304485, -25.256926795155625], [-57.595829043017282, -25.256839020726076], [-57.596467553161524, -25.256734354320646], [-57.596803483247101, -25.256560231493751], [-57.597074487521233, -25.256189890997298], [-57.595046855706386, -25.254720725468708], [-57.594833135862466, -25.25441761637914], [-57.594631053479176, -25.254187801966641], [-57.594331387641432, -25.253851071844338], [-57.594133140720118, -25.253581984000338], [-57.59397227958474, -25.253269932930532], [-57.593687538105009, -25.253363928365712], [-57.593361020301188, -25.253417563262111], [-57.593000487202438, -25.25339085445539], [-57.592622227051059, -25.253269965750032], [-57.59235537659908, -25.253052208125588], [-57.59255970712664, -25.252781243519898], [-57.592262941658319, -25.252752615387255], [-57.591997063443699, -25.252861883725043], [-57.591448669595849, -25.252675373042056], [-57.590977391362969, -25.252306288688231], [-57.590908548425915, -25.252037204893373], [-57.590756568350621, -25.251802642132301], [-57.590470050382272, -25.25159801319586], [-57.590157291166719, -25.251314118765784], [-57.589885494656819, -25.251573420374669], [-57.589207469462224, -25.252348676466269], [-57.587803199450697, -25.253951055513713], [-57.587174983342742, -25.254567738425376], [-57.586383400947561, -25.255340046788323], [-57.585642495362116, -25.256152331098235], [-57.58488951321916, -25.256971771077577]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "nombre": "SANTISIMA TRINIDAD",
      "zona": 15,
      "ordenanza": "N� 10811\/83",
      "st_area_sh": 916543.08848499996
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[-57.570255689474116, -25.256544130656785], [-57.569919739833985, -25.256741532989654], [-57.568574854760236, -25.257516397577554], [-57.569802396781661, -25.257979217540793], [-57.571523892858423, -25.258601898119583], [-57.572309578515174, -25.258892544369591], [-57.573268130467319, -25.259151047662847], [-57.573707014662659, -25.259275209901006], [-57.574781455096947, -25.259648630916836], [-57.575683237663512, -25.260096140564951], [-57.57696297394039, -25.260814213154298], [-57.577494424990213, -25.261245958744642], [-57.578326681042455, -25.261953689600091], [-57.579170249241194, -25.262677812975181], [-57.580058666998227, -25.261823744447401], [-57.580639264057439, -25.261239793817747], [-57.581031002960636, -25.260848676987838], [-57.582334234944696, -25.259572550758335], [-57.58325341261073, -25.258616896272059], [-57.583970186018931, -25.257890913338461], [-57.58488951321916, -25.256971771077577], [-57.583827065670462, -25.256176948071502], [-57.582621112663048, -25.255279120047408], [-57.581777711261893, -25.254649594462087], [-57.580922861760072, -25.254009733796877], [-57.579999361583255, -25.253325181176084], [-57.57912925462383, -25.252671536775907], [-57.578252820852107, -25.252013307188843], [-57.575165678914701, -25.253763107895431], [-57.574285192388039, -25.254257592073653], [-57.57343035730446, -25.254740280581903], [-57.572716551131919, -25.255140573939656], [-57.570934175650621, -25.256145180353379], [-57.570255689474116, -25.256544130656785]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "nombre": "MBOCAYATY",
      "zona": 15,
      "ordenanza": "N� 214\/91",
      "st_area_sh": 1589402.3747099999
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[-57.56645276113084, -25.256489334725174], [-57.558886620901163, -25.256512295295984], [-57.551566105983525, -25.256672697455439], [-57.549118365199412, -25.256797047974647], [-57.549036176407377, -25.257205929253459], [-57.548915419294183, -25.257664899816586], [-57.548794608466828, -25.258112113639928], [-57.54858480361726, -25.258894730656046], [-57.548273759385125, -25.260165638193346], [-57.548097008533688, -25.261112729835808], [-57.547551015719812, -25.263330941932868], [-57.546822430499681, -25.266643224438624], [-57.546714717196942, -25.267131537014119], [-57.546416984517585, -25.2684964458482], [-57.546106658004888, -25.269937820223781], [-57.547395938459246, -25.269245026953858], [-57.548097916174029, -25.268856455738586], [-57.549191261096084, -25.268209692140804], [-57.550897789472508, -25.267288310566162], [-57.552697169695683, -25.266318112339277], [-57.55401937929804, -25.265603784155388], [-57.554509142789499, -25.265338378453638], [-57.556143579780134, -25.264439329708281], [-57.557583335807422, -25.263659335030848], [-57.5588885792694, -25.262939755808127], [-57.55984890211699, -25.262415489256203], [-57.560525093806831, -25.26204141703462], [-57.561308612395599, -25.261577120042098], [-57.561957877286545, -25.261207227296914], [-57.564384794412398, -25.259834421213103], [-57.565580389818116, -25.259172566130985], [-57.566861019567767, -25.258457303732534], [-57.568574854760236, -25.257516397577554], [-57.569919739833985, -25.256741532989654], [-57.570255689474116, -25.256544130656785], [-57.569659966849635, -25.256489476588207], [-57.569285109528181, -25.256461290517567], [-57.567579775276336, -25.256448100250033], [-57.56645276113084, -25.256489334725174]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "nombre": "TABLADA NUEVA",
      "zona": 15,
      "ordenanza": "N� 10811\/83",
      "st_area_sh": 1724053.2233899999
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[-57.597314705843559, -25.255459636165099], [-57.597074487521233, -25.256189890997298], [-57.596803483247101, -25.256560231493751], [-57.596467553161524, -25.256734354320646], [-57.595829043017282, -25.256839020726076], [-57.595484054304485, -25.256926795155625], [-57.594657606480546, -25.257395950719388], [-57.59391597529234, -25.257997219474277], [-57.593734484181255, -25.258256347177436], [-57.593754661667191, -25.258647615769878], [-57.593737491963182, -25.259117304284505], [-57.593564879072659, -25.25938448104294], [-57.593240984589791, -25.259576054713488], [-57.593084249972932, -25.259835083045107], [-57.593301581929595, -25.260035781605662], [-57.593757130888072, -25.260246243892599], [-57.59399127548911, -25.26038843945846], [-57.593795635912585, -25.260648160532522], [-57.593145530415072, -25.26104239156982], [-57.592958251387856, -25.26144601994935], [-57.593011953098596, -25.261699913384778], [-57.592852977619508, -25.261983610833234], [-57.592502256019714, -25.262237519580136], [-57.592254231952815, -25.262453054197437], [-57.59383174263327, -25.263636889739924], [-57.594800778078991, -25.264349537534404], [-57.595597235560135, -25.264946813877952], [-57.596371355651236, -25.265513899599007], [-57.597563304303144, -25.266412333456465], [-57.598146704962822, -25.265805501947487], [-57.599163628398337, -25.264726246531694], [-57.59998186385512, -25.263859043951079], [-57.600492373997447, -25.263226489105701], [-57.609699173966312, -25.251680479827481], [-57.609043411944931, -25.251388316827899], [-57.60873312826444, -25.251194736866804], [-57.608372306095433, -25.251046417400872], [-57.607695077027373, -25.25084616387295], [-57.607183761252493, -25.250668322377763], [-57.606637218134708, -25.250518442132684], [-57.606231086569657, -25.250347988284322], [-57.605945115953283, -25.25012140635695], [-57.60572047074286, -25.249924996886534], [-57.605404488371271, -25.249814153098296], [-57.605094184842443, -25.249691984632779], [-57.604722348097027, -25.249497046217268], [-57.604447389165792, -25.24927345857056], [-57.60320558363366, -25.248565276746113], [-57.602858643058546, -25.248378055832319], [-57.602588559566406, -25.248269625640212], [-57.602154105215241, -25.247974098216631], [-57.601163468585206, -25.247410916213905], [-57.600658996899334, -25.247162176168839], [-57.599358717234047, -25.246532249356534], [-57.599099888759511, -25.246977982613917], [-57.598772411450916, -25.247756862455702], [-57.598684169091051, -25.24828692702307], [-57.598484880551581, -25.249055566995679], [-57.598139864706269, -25.249528354496757], [-57.597971085949986, -25.249980989645689], [-57.597840947333147, -25.250686172396083], [-57.597890823174339, -25.25105044845079], [-57.598128722991916, -25.25161806885907], [-57.598269750020449, -25.252045150875443], [-57.598058600876875, -25.252575712711707], [-57.597832821838139, -25.253393055364281], [-57.597434030030875, -25.25388949381864], [-57.597314705843559, -25.255459636165099]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "nombre": "MBURUCUYA",
      "zona": 15,
      "ordenanza": "N� 10811\/83",
      "st_area_sh": 2107434.6772799999
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[-57.5588885792694, -25.262939755808127], [-57.559356703379137, -25.263673787716108], [-57.55974176313191, -25.264271153909501], [-57.560132370605722, -25.264857581890467], [-57.560519112250653, -25.265454711910671], [-57.560901858128993, -25.266034040648904], [-57.56128464044528, -25.266620494122247], [-57.561675246601766, -25.267203354210203], [-57.562246791606469, -25.267935173722947], [-57.562692132423123, -25.268489317673723], [-57.563137478301513, -25.269043460166071], [-57.563582876613587, -25.269608289500017], [-57.564068255079718, -25.27034399382913], [-57.564451048915224, -25.270926874894354], [-57.565236290746363, -25.272103249679166], [-57.565694160637811, -25.272817673838599], [-57.566148033346352, -25.273514297348395], [-57.566933425398567, -25.274715602038576], [-57.567377425150511, -25.275418384696199], [-57.568653415438362, -25.274475075640776], [-57.569271038566427, -25.274005187018982], [-57.569996961104252, -25.273459966240029], [-57.570227337444614, -25.273166315620223], [-57.570784640934875, -25.272347052556544], [-57.571771237725599, -25.270959923307402], [-57.572422694381551, -25.270201701082165], [-57.572898880894229, -25.269617069216501], [-57.573263279274961, -25.269224996993948], [-57.574194955897056, -25.268151871277915], [-57.57550115576435, -25.266600165750727], [-57.575875874680406, -25.266160015625609], [-57.576310438712099, -25.265716428731068], [-57.577319439704553, -25.264623769298272], [-57.578412601539029, -25.26346032659167], [-57.579170249241194, -25.262677812975181], [-57.578326681042455, -25.261953689600091], [-57.577494424990213, -25.261245958744642], [-57.57696297394039, -25.260814213154298], [-57.575683237663512, -25.260096140564951], [-57.574781455096947, -25.259648630916836], [-57.573707014662659, -25.259275209901006], [-57.573268130467319, -25.259151047662847], [-57.572309578515174, -25.258892544369591], [-57.571523892858423, -25.258601898119583], [-57.569802396781661, -25.257979217540793], [-57.568574854760236, -25.257516397577554], [-57.566861019567767, -25.258457303732534], [-57.565580389818116, -25.259172566130985], [-57.564384794412398, -25.259834421213103], [-57.561957877286545, -25.261207227296914], [-57.561308612395599, -25.261577120042098], [-57.560525093806831, -25.26204141703462], [-57.55984890211699, -25.262415489256203], [-57.5588885792694, -25.262939755808127]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "nombre": "VIRGEN DE LA ASUNCION",
      "zona": 15,
      "ordenanza": "N� 10811\/83",
      "st_area_sh": 1277958.841
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[-57.581031002960636, -25.260848676987838], [-57.581178548952039, -25.261364836389571], [-57.581550191110097, -25.26265822751607], [-57.58192930616017, -25.263915728813579], [-57.582443500313993, -25.265619305958648], [-57.582838326803284, -25.267012680516874], [-57.583113388246495, -25.267961409705638], [-57.583337146931967, -25.268691263678193], [-57.584108508042632, -25.270845889864923], [-57.584874542648571, -25.269852837828946], [-57.585094083776291, -25.269483564612322], [-57.585922553125236, -25.268268492292368], [-57.586541410308328, -25.26738299880715], [-57.587504553734298, -25.267940242986572], [-57.588479668928876, -25.268496229227917], [-57.589557678828214, -25.269094384662527], [-57.589918172680164, -25.26890131443448], [-57.590550019471806, -25.268541663077929], [-57.591234338059493, -25.26820972919429], [-57.59166691373985, -25.267988552206102], [-57.593063887547743, -25.267581486361504], [-57.594621179738283, -25.267903862241159], [-57.595102318043246, -25.268017905929934], [-57.59538773680098, -25.268027930157849], [-57.596630317859912, -25.268952169946346], [-57.597819106840312, -25.269802191421768], [-57.597616138200486, -25.269005413330227], [-57.597349928951189, -25.267922593854678], [-57.597238150468378, -25.267442116787933], [-57.597175000495675, -25.26666469947509], [-57.598043651605266, -25.267154471288002], [-57.598262815438929, -25.266911274514108], [-57.597563304303144, -25.266412333456465], [-57.596371355651236, -25.265513899599007], [-57.595597235560135, -25.264946813877952], [-57.594800778078991, -25.264349537534404], [-57.59383174263327, -25.263636889739924], [-57.592254231952815, -25.262453054197437], [-57.591696201590054, -25.26204265732067], [-57.590770755741083, -25.261339140661811], [-57.589966110759022, -25.260744500614475], [-57.588212003454501, -25.259446417667352], [-57.587077442853221, -25.258597891310636], [-57.58617627537199, -25.257930703377646], [-57.58488951321916, -25.256971771077577], [-57.583970186018931, -25.257890913338461], [-57.58325341261073, -25.258616896272059], [-57.582334234944696, -25.259572550758335], [-57.581031002960636, -25.260848676987838]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "nombre": "CA�ADA DEL YBYRAY",
      "zona": 15,
      "ordenanza": "N� 10811\/83",
      "st_area_sh": 883010.89935299999
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[-57.579170249241194, -25.262677812975181], [-57.578412601539029, -25.26346032659167], [-57.577319439704553, -25.264623769298272], [-57.576310438712099, -25.265716428731068], [-57.575875874680406, -25.266160015625609], [-57.57550115576435, -25.266600165750727], [-57.574194955897056, -25.268151871277915], [-57.574943790560248, -25.26865886219252], [-57.574467441558212, -25.269187106773721], [-57.575349032853374, -25.270109543930303], [-57.576216048290583, -25.271082674399082], [-57.576892405560649, -25.271841307203843], [-57.575989151789194, -25.272523539641163], [-57.575599703014966, -25.272839140473476], [-57.576667089872842, -25.273478213983083], [-57.576761795028901, -25.273733537044908], [-57.577049667298112, -25.274509623273023], [-57.584567026557529, -25.27266153331616], [-57.584187891985835, -25.271465422949877], [-57.584108508042632, -25.270845889864923], [-57.583337146931967, -25.268691263678193], [-57.583113388246495, -25.267961409705638], [-57.582838326803284, -25.267012680516874], [-57.582443500313993, -25.265619305958648], [-57.58192930616017, -25.263915728813579], [-57.581550191110097, -25.26265822751607], [-57.581178548952039, -25.261364836389571], [-57.581031002960636, -25.260848676987838], [-57.580639264057439, -25.261239793817747], [-57.580058666998227, -25.261823744447401], [-57.579170249241194, -25.262677812975181]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "nombre": "MADAME ELISA ALICIA LYNCH",
      "zona": 15,
      "ordenanza": "N� 10811\/83",
      "st_area_sh": 1899821.1414600001
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[-57.549191261096084, -25.268209692140804], [-57.549813222041742, -25.269691587983903], [-57.549864812407442, -25.270417216585706], [-57.549984123781051, -25.270898821755171], [-57.550222860561554, -25.27127785756862], [-57.550620265689304, -25.271762574683169], [-57.550944415129329, -25.272019891838902], [-57.552374020733751, -25.272717850384598], [-57.552747018526546, -25.272943699018086], [-57.552992488466188, -25.273244011368369], [-57.553664103326632, -25.274176273639053], [-57.553671630593406, -25.274492110202385], [-57.553704827875187, -25.274756590687826], [-57.553916341013881, -25.275075461776126], [-57.554385290668954, -25.275673249357208], [-57.554693485553656, -25.276071790505824], [-57.55508229681687, -25.276621429243725], [-57.555484680272329, -25.277225519262895], [-57.555847326778064, -25.277878206298794], [-57.556138870299151, -25.278591603131741], [-57.556670914489871, -25.279022665443811], [-57.557214651970689, -25.279418590974707], [-57.557481051894129, -25.279559719089018], [-57.558008512224994, -25.279813567897499], [-57.560081322070204, -25.280787858541309], [-57.560664710938511, -25.280087730984864], [-57.561593494297846, -25.2792397495489], [-57.562346694436798, -25.278559897190231], [-57.562600475756192, -25.278355833593384], [-57.563315628543897, -25.277925536786324], [-57.56428881767215, -25.277365978532249], [-57.564925865710869, -25.276996544558784], [-57.565707554048025, -25.276551727881195], [-57.567055421171283, -25.275670038233311], [-57.567377425150511, -25.275418384696199], [-57.566933425398567, -25.274715602038576], [-57.566148033346352, -25.273514297348395], [-57.565694160637811, -25.272817673838599], [-57.565236290746363, -25.272103249679166], [-57.564451048915224, -25.270926874894354], [-57.564068255079718, -25.27034399382913], [-57.563582876613587, -25.269608289500017], [-57.563137478301513, -25.269043460166071], [-57.562692132423123, -25.268489317673723], [-57.562246791606469, -25.267935173722947], [-57.561675246601766, -25.267203354210203], [-57.56128464044528, -25.266620494122247], [-57.560901858128993, -25.266034040648904], [-57.560519112250653, -25.265454711910671], [-57.560132370605722, -25.264857581890467], [-57.55974176313191, -25.264271153909501], [-57.559356703379137, -25.263673787716108], [-57.5588885792694, -25.262939755808127], [-57.557583335807422, -25.263659335030848], [-57.556143579780134, -25.264439329708281], [-57.554509142789499, -25.265338378453638], [-57.55401937929804, -25.265603784155388], [-57.552697169695683, -25.266318112339277], [-57.550897789472508, -25.267288310566162], [-57.549191261096084, -25.268209692140804]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "nombre": "SALVADOR DEL MUNDO",
      "zona": 15,
      "ordenanza": "N� 10811\/83",
      "st_area_sh": 575821.43655099999
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[-57.546106658004888, -25.269937820223781], [-57.545886565725226, -25.271083192479477], [-57.545646200436998, -25.272151987459615], [-57.54541535082145, -25.273163284826182], [-57.545207099714666, -25.274213606634127], [-57.545166941614184, -25.274991556118618], [-57.545198007200106, -25.275399406626928], [-57.547260886379156, -25.27588184003066], [-57.548377514394964, -25.276187422837964], [-57.549174172728975, -25.27641993856826], [-57.549461512032885, -25.276499482390467], [-57.550459044670866, -25.276780035705787], [-57.551776617413452, -25.277146363960565], [-57.553367364653788, -25.277637634193166], [-57.554834843460327, -25.278144904698468], [-57.555627494045424, -25.278415374341851], [-57.556138870299151, -25.278591603131741], [-57.555847326778064, -25.277878206298794], [-57.555484680272329, -25.277225519262895], [-57.55508229681687, -25.276621429243725], [-57.554693485553656, -25.276071790505824], [-57.554385290668954, -25.275673249357208], [-57.553916341013881, -25.275075461776126], [-57.553704827875187, -25.274756590687826], [-57.553671630593406, -25.274492110202385], [-57.553664103326632, -25.274176273639053], [-57.552992488466188, -25.273244011368369], [-57.552747018526546, -25.272943699018086], [-57.552374020733751, -25.272717850384598], [-57.550944415129329, -25.272019891838902], [-57.550620265689304, -25.271762574683169], [-57.550222860561554, -25.27127785756862], [-57.549984123781051, -25.270898821755171], [-57.549864812407442, -25.270417216585706], [-57.549813222041742, -25.269691587983903], [-57.549191261096084, -25.268209692140804], [-57.548097916174029, -25.268856455738586], [-57.547395938459246, -25.269245026953858], [-57.546106658004888, -25.269937820223781]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "nombre": "JARA",
      "zona": 12,
      "ordenanza": "N� 10811\/83",
      "st_area_sh": 1402145.4785
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[-57.597819106840312, -25.269802191421768], [-57.598207094528085, -25.271444398436657], [-57.5985117298573, -25.272721392279365], [-57.598806181393051, -25.273921970259405], [-57.598950181917502, -25.27453678348374], [-57.599084385152054, -25.275071262632231], [-57.599326936134872, -25.27605132229219], [-57.599551095013716, -25.277009286366741], [-57.599792955493847, -25.277990108968972], [-57.600032827607635, -25.279002420076484], [-57.600217153757335, -25.27974793564217], [-57.600451792016393, -25.28070396768943], [-57.600635157379138, -25.281447721853038], [-57.601313297901982, -25.281685175634518], [-57.60220805967537, -25.281998176769456], [-57.603106886092618, -25.282303704778577], [-57.604018027365306, -25.282612901873065], [-57.604912728670996, -25.282910985510682], [-57.605598859431829, -25.283135504651202], [-57.605549738153471, -25.283533263464982], [-57.606030397826963, -25.285057702315282], [-57.607138943750734, -25.284827815824052], [-57.608256515092783, -25.28462204744498], [-57.608578105560525, -25.284553598184587], [-57.609536921567567, -25.284349515219851], [-57.609546101450299, -25.283589017560328], [-57.609552240393754, -25.282673174834784], [-57.609590812147296, -25.281357460955881], [-57.609618547612797, -25.280096235138426], [-57.609664169948424, -25.279009014720149], [-57.609666046816614, -25.278533189334407], [-57.609685347758038, -25.278138528742456], [-57.609716425866033, -25.277546529027234], [-57.609737806817115, -25.276544472317845], [-57.609726619272088, -25.276180927310286], [-57.609757182583074, -25.275445675353456], [-57.608444490054111, -25.274461102361876], [-57.60617091071191, -25.272777432136085], [-57.603803761578519, -25.270997572993942], [-57.601556536449614, -25.26935567849246], [-57.600869091795282, -25.268850821146025], [-57.599746209489162, -25.268017586155555], [-57.598733893019762, -25.267277609200907], [-57.598262815438929, -25.266911274514108], [-57.598043651605266, -25.267154471288002], [-57.597175000495675, -25.26666469947509], [-57.597238150468378, -25.267442116787933], [-57.597349928951189, -25.267922593854678], [-57.597616138200486, -25.269005413330227], [-57.597819106840312, -25.269802191421768]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "nombre": "VIRGEN DEL HUERTO",
      "zona": 12,
      "ordenanza": "N� 10811\/83",
      "st_area_sh": 803309.87617099995
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[-57.594491059782754, -25.282367143056625], [-57.595327142624164, -25.282247772482332], [-57.596290641075377, -25.28209442004966], [-57.597210051366368, -25.281956855234892], [-57.598149120058267, -25.281825897481944], [-57.598916486064141, -25.281704554691451], [-57.599652008475658, -25.28159448992832], [-57.600635157379138, -25.281447721853038], [-57.600451792016393, -25.28070396768943], [-57.600217153757335, -25.27974793564217], [-57.600032827607635, -25.279002420076484], [-57.599792955493847, -25.277990108968972], [-57.599551095013716, -25.277009286366741], [-57.599326936134872, -25.27605132229219], [-57.599084385152054, -25.275071262632231], [-57.598950181917502, -25.27453678348374], [-57.598806181393051, -25.273921970259405], [-57.5985117298573, -25.272721392279365], [-57.598207094528085, -25.271444398436657], [-57.597819106840312, -25.269802191421768], [-57.596630317859912, -25.268952169946346], [-57.59538773680098, -25.268027930157849], [-57.595102318043246, -25.268017905929934], [-57.594621179738283, -25.267903862241159], [-57.593063887547743, -25.267581486361504], [-57.593198579902484, -25.268896658147799], [-57.593354701389799, -25.270471047432416], [-57.593404661863623, -25.271133353073001], [-57.59354092436206, -25.27258031962883], [-57.593685386613977, -25.27410496426878], [-57.593807231037005, -25.27532427527315], [-57.593992862471652, -25.277308547387143], [-57.594143070726098, -25.278792955670045], [-57.59424157356807, -25.279822568440871], [-57.594461702357222, -25.282111701766038], [-57.594491059782754, -25.282367143056625]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "nombre": "LAS LOMAS",
      "zona": 15,
      "ordenanza": "N� 10811\/83",
      "st_area_sh": 1455745.3428100001
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[-57.573263279274961, -25.269224996993948], [-57.572898880894229, -25.269617069216501], [-57.572422694381551, -25.270201701082165], [-57.571771237725599, -25.270959923307402], [-57.570784640934875, -25.272347052556544], [-57.570227337444614, -25.273166315620223], [-57.569996961104252, -25.273459966240029], [-57.569271038566427, -25.274005187018982], [-57.568653415438362, -25.274475075640776], [-57.567377425150511, -25.275418384696199], [-57.567055421171283, -25.275670038233311], [-57.565707554048025, -25.276551727881195], [-57.564925865710869, -25.276996544558784], [-57.56428881767215, -25.277365978532249], [-57.563315628543897, -25.277925536786324], [-57.562600475756192, -25.278355833593384], [-57.562346694436798, -25.278559897190231], [-57.561593494297846, -25.2792397495489], [-57.560664710938511, -25.280087730984864], [-57.560081322070204, -25.280787858541309], [-57.56142093261451, -25.281923169149582], [-57.56241469718546, -25.282759882985204], [-57.562941700854658, -25.283042375465495], [-57.563898016221884, -25.283360616540282], [-57.563919480269398, -25.282457502189033], [-57.563936479366561, -25.28193351381876], [-57.564900392945617, -25.281798232872973], [-57.565605028812726, -25.281699222689266], [-57.565952409146547, -25.281655753634066], [-57.566621963595253, -25.281567691665568], [-57.567598746202513, -25.281444141144341], [-57.568619481650266, -25.281312420139933], [-57.569143884007438, -25.28124224274514], [-57.570937640311477, -25.280950134650482], [-57.571139168430939, -25.282058675680634], [-57.572021509701273, -25.281915695550406], [-57.572950943712002, -25.281765078088025], [-57.574475163896061, -25.281529972158175], [-57.57559429064775, -25.28135590140888], [-57.575978863480792, -25.281269545138024], [-57.578272818254476, -25.280369596532253], [-57.579370542028066, -25.280084374759539], [-57.578939208982639, -25.278653911279108], [-57.57820215584529, -25.277467374919016], [-57.577046590789998, -25.275564095494691], [-57.576771798036752, -25.275648367360482], [-57.576463206721591, -25.274658208691488], [-57.577049667298112, -25.274509623273023], [-57.576761795028901, -25.273733537044908], [-57.576667089872842, -25.273478213983083], [-57.575599703014966, -25.272839140473476], [-57.575989151789194, -25.272523539641163], [-57.576892405560649, -25.271841307203843], [-57.576216048290583, -25.271082674399082], [-57.575349032853374, -25.270109543930303], [-57.574467441558212, -25.269187106773721], [-57.574943790560248, -25.26865886219252], [-57.574194955897056, -25.268151871277915], [-57.573263279274961, -25.269224996993948]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "nombre": "SANTO DOMINGO",
      "zona": 15,
      "ordenanza": "N� 10811\/83",
      "st_area_sh": 1060491.6396699999
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[-57.577049667298112, -25.274509623273023], [-57.576463206721591, -25.274658208691488], [-57.576771798036752, -25.275648367360482], [-57.577046590789998, -25.275564095494691], [-57.57820215584529, -25.277467374919016], [-57.578939208982639, -25.278653911279108], [-57.579370542028066, -25.280084374759539], [-57.579614014977089, -25.280892672877201], [-57.580094033830562, -25.282490620673276], [-57.580524924535105, -25.283833533003719], [-57.580239432149355, -25.285054080041874], [-57.581069582121579, -25.285134615464486], [-57.582058238660785, -25.285223172124034], [-57.582328837693204, -25.285306991426019], [-57.582615106903788, -25.285439080194898], [-57.58344315043523, -25.285837735018923], [-57.583789085239196, -25.285954432415771], [-57.584176859293251, -25.286024751842266], [-57.585442383246495, -25.286166429585393], [-57.586756404513544, -25.286302190900873], [-57.587936743426106, -25.286429436507461], [-57.588710837086182, -25.286508712641904], [-57.588149064637904, -25.284686155113011], [-57.587903819117813, -25.28391850379213], [-57.587419594805532, -25.282362948222573], [-57.587304132570551, -25.281968997750667], [-57.587060928154543, -25.281139192554726], [-57.5867185343157, -25.279993389568951], [-57.586230858033574, -25.278374270912835], [-57.585771742905926, -25.276743478669999], [-57.585271007411322, -25.275046389895483], [-57.585032943176088, -25.274255473861722], [-57.584946628492091, -25.273953326383495], [-57.584798234734421, -25.273447707634311], [-57.58468780343091, -25.273071576854434], [-57.584567026557529, -25.27266153331616], [-57.577049667298112, -25.274509623273023]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "nombre": "LAS MERCEDES",
      "zona": 12,
      "ordenanza": "N� 10811\/83",
      "st_area_sh": 1603521.36528
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[-57.61168181773386, -25.272323391141779], [-57.611175967703218, -25.272476369877271], [-57.610831223361814, -25.272700557938865], [-57.610556398089564, -25.273019883257881], [-57.61033804615144, -25.273306418934684], [-57.610118887429081, -25.273631225885779], [-57.609896325440168, -25.27399328085124], [-57.609807776239499, -25.274246889837077], [-57.609771482802898, -25.274752219233864], [-57.609757182583074, -25.275445675353456], [-57.609726619272088, -25.276180927310286], [-57.609737806817115, -25.276544472317845], [-57.609716425866033, -25.277546529027234], [-57.609685347758038, -25.278138528742456], [-57.609666046816614, -25.278533189334407], [-57.609664169948424, -25.279009014720149], [-57.609618547612797, -25.280096235138426], [-57.609590812147296, -25.281357460955881], [-57.609552240393754, -25.282673174834784], [-57.609546101450299, -25.283589017560328], [-57.609536921567567, -25.284349515219851], [-57.60953727549613, -25.287486222755813], [-57.610065059872319, -25.289586686206849], [-57.610138327686037, -25.289890147275049], [-57.610446881639717, -25.291126461421353], [-57.610862298826447, -25.292635189497311], [-57.610943045576441, -25.292959908198114], [-57.611207651825985, -25.293881875729628], [-57.612147570803153, -25.293490096787259], [-57.613022366907991, -25.293004922839916], [-57.613917006698053, -25.292480164907417], [-57.614771760833143, -25.291999620878908], [-57.615633161289438, -25.291512968570579], [-57.615928021098156, -25.291337045439278], [-57.616441155664809, -25.291040204712004], [-57.616892665958652, -25.290783116218439], [-57.617355808613574, -25.290513824564222], [-57.617822306959802, -25.290247555249341], [-57.618247108265628, -25.289996650180878], [-57.618648594387288, -25.289761031724723], [-57.61910508507335, -25.289499358022013], [-57.618477644059254, -25.288658899701712], [-57.618233348040413, -25.288339472562427], [-57.617719318808412, -25.287644077553637], [-57.617217304979413, -25.286962200328048], [-57.616666863844088, -25.286219524167311], [-57.616463051460421, -25.284697472233095], [-57.616267757537734, -25.283438611556512], [-57.616149656883103, -25.282500072743254], [-57.61609736845795, -25.28212238811652], [-57.616023920034593, -25.281653515064676], [-57.615904929161346, -25.28075781075945], [-57.61582208189693, -25.280093233408071], [-57.615934459129896, -25.279704016646697], [-57.616004638830859, -25.279328663355042], [-57.616024761685516, -25.278955270895267], [-57.61626915927485, -25.278596324378626], [-57.61654622087007, -25.278060153577211], [-57.616695212386198, -25.277820913930146], [-57.617957243187178, -25.275874662444462], [-57.618550825149399, -25.275397589239255], [-57.618397850542117, -25.275084630919309], [-57.618279669930352, -25.274765309209521], [-57.618116723798174, -25.274380269055733], [-57.617895274077277, -25.274047895236993], [-57.617504847099134, -25.273790032898891], [-57.617113988024848, -25.273582887966981], [-57.616867351906144, -25.273384849657258], [-57.616672252958381, -25.27317041126172], [-57.616268945581496, -25.272964933385744], [-57.61586407223659, -25.272801541798497], [-57.615372007348185, -25.27278882409751], [-57.614912143481867, -25.272849415060037], [-57.614596359767908, -25.272546181929883], [-57.614211678455241, -25.272409177072262], [-57.6139017579561, -25.272177756863726], [-57.613363573303396, -25.271964569007189], [-57.612937830209212, -25.271823924177987], [-57.612535786098341, -25.272074557715062], [-57.612147275903943, -25.272331120312884], [-57.61168181773386, -25.272323391141779]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "nombre": "DR. GASPAR RODRIGUEZ DE FRANCIA",
      "zona": 10,
      "ordenanza": "N� 10811\/83",
      "st_area_sh": 1791422.4912700001
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[-57.639205970094686, -25.275658068237032], [-57.639348046716449, -25.276057642028054], [-57.639458667111377, -25.276459447908671], [-57.639729153296145, -25.276545963456023], [-57.640127586124073, -25.276695279909209], [-57.640766065278207, -25.27758456465628], [-57.641310162913385, -25.278355841080231], [-57.641737144908809, -25.2789792129368], [-57.642226967344804, -25.279663885463687], [-57.642634615511753, -25.280241550943234], [-57.643169987960768, -25.281000227975277], [-57.643904827846633, -25.28204222686918], [-57.644699130686519, -25.283161325234271], [-57.64544442671108, -25.284236490125309], [-57.646205988326038, -25.285313103980588], [-57.646978859019548, -25.286448903208505], [-57.647537669821176, -25.287230208551499], [-57.64788652221754, -25.287727956315049], [-57.648821048282009, -25.287864617373529], [-57.649848259400557, -25.288039832983323], [-57.650948210829895, -25.288225293198273], [-57.652048151280894, -25.288408102014362], [-57.65304731885066, -25.288574368004035], [-57.653322096722071, -25.287407518082187], [-57.653574302227575, -25.286293010931313], [-57.653775259633036, -25.285421764664466], [-57.653969360105982, -25.284550549363384], [-57.65416110571369, -25.283666879569441], [-57.654355134061632, -25.282783200244392], [-57.654565063044942, -25.281882832376006], [-57.654777340319626, -25.280994916545307], [-57.654984989250458, -25.280096635063778], [-57.655192557179781, -25.279183812880717], [-57.655388844806147, -25.27829804487612], [-57.655607908443216, -25.277399711640097], [-57.655796819861841, -25.276630299636999], [-57.656179439901877, -25.27547301219829], [-57.655734792591268, -25.275471441437329], [-57.655213978827895, -25.275410266572393], [-57.654867643944002, -25.275105316346867], [-57.654693327846736, -25.274748184185285], [-57.654242937478408, -25.274729353827485], [-57.653827346699948, -25.274855646890874], [-57.653502179530918, -25.275125042010867], [-57.653107366973707, -25.275278668136608], [-57.652525369820466, -25.275299893048352], [-57.652103236951525, -25.275130494099134], [-57.65180462409527, -25.275191408371612], [-57.651507684444177, -25.27541711644071], [-57.65122483048534, -25.275230795677864], [-57.651417905100082, -25.27494466291693], [-57.651767097901917, -25.274701254995147], [-57.652071297967375, -25.274491644409053], [-57.652150824420261, -25.273947392998096], [-57.651934384187257, -25.273644503901942], [-57.651609348704426, -25.273399064850882], [-57.651202419307097, -25.27318247096515], [-57.650959716806582, -25.272989568939153], [-57.650605059303082, -25.272783595514944], [-57.6498182078384, -25.27260192280059], [-57.64872891330625, -25.272606714774476], [-57.647762656502195, -25.272654156534688], [-57.647190723264707, -25.272706669582444], [-57.646802273454874, -25.272815357299983], [-57.64649890571846, -25.272869993783715], [-57.646208272101298, -25.272945678822115], [-57.644902889752537, -25.273511859924437], [-57.641478455874555, -25.275464157619872], [-57.639205970094686, -25.275658068237032]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "nombre": "SAN JORGE",
      "zona": 14,
      "ordenanza": "N� 10811\/83",
      "st_area_sh": 1688776.3205599999
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[-57.550171543968382, -25.293331675812567], [-57.551367011775106, -25.292023483362687], [-57.552053973600096, -25.291327473364049], [-57.552513684468416, -25.290865816895963], [-57.552939612350059, -25.290392492755068], [-57.55328010592018, -25.289959584037184], [-57.553729665884106, -25.28954985277872], [-57.554887561501069, -25.288587892987355], [-57.555591125026552, -25.288127668397131], [-57.556925672411658, -25.287223993686606], [-57.558260394252933, -25.286362761338662], [-57.559734644108545, -25.285383056183253], [-57.560852311821854, -25.284718391905198], [-57.562266434791177, -25.284210619390244], [-57.563815165439038, -25.283708193445992], [-57.564359054842605, -25.283447864410395], [-57.563898016221884, -25.283360616540282], [-57.562941700854658, -25.283042375465495], [-57.56241469718546, -25.282759882985204], [-57.56142093261451, -25.281923169149582], [-57.560081322070204, -25.280787858541309], [-57.558008512224994, -25.279813567897499], [-57.557481051894129, -25.279559719089018], [-57.557214651970689, -25.279418590974707], [-57.556670914489871, -25.279022665443811], [-57.556138870299151, -25.278591603131741], [-57.555627494045424, -25.278415374341851], [-57.554834843460327, -25.278144904698468], [-57.553367364653788, -25.277637634193166], [-57.551776617413452, -25.277146363960565], [-57.550459044670866, -25.276780035705787], [-57.549461512032885, -25.276499482390467], [-57.549174172728975, -25.27641993856826], [-57.548377514394964, -25.276187422837964], [-57.547260886379156, -25.27588184003066], [-57.545198007200106, -25.275399406626928], [-57.545606546642325, -25.276627182736014], [-57.545792138079769, -25.277321786594552], [-57.546216154969059, -25.278864868774889], [-57.546640377686266, -25.280451403221281], [-57.547081673231972, -25.281966763916657], [-57.547574791209449, -25.283900331754236], [-57.54791857951885, -25.285474121291166], [-57.548539071096371, -25.287640810099443], [-57.548834287744633, -25.288778601453423], [-57.549062770219201, -25.289736814737381], [-57.549491049096524, -25.291137850254625], [-57.549928406574978, -25.292621559458819], [-57.550026966346323, -25.293012021661639], [-57.550171543968382, -25.293331675812567]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "nombre": "LA ENCARNACION",
      "zona": 10,
      "ordenanza": "N� 10811\/83",
      "st_area_sh": 982989.16224600002
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[-57.633610191745021, -25.277602091540693], [-57.634059352381691, -25.27773293720205], [-57.634303862900559, -25.278162724965313], [-57.634375118993454, -25.278435542174197], [-57.634354594120929, -25.278826615962597], [-57.634562270699043, -25.279182061648623], [-57.635311868812238, -25.279947499991838], [-57.634610602325942, -25.280522926426013], [-57.635000792205645, -25.280907598808614], [-57.635202371053126, -25.2811060861785], [-57.635713155834097, -25.28163144746182], [-57.636197016780635, -25.282120455530727], [-57.636812627046424, -25.282747469221], [-57.637216812528109, -25.283338926924635], [-57.637728874889525, -25.284104959512469], [-57.638432231949253, -25.285144883104387], [-57.639200235829421, -25.286272044520928], [-57.639957526321815, -25.287360507689201], [-57.640705688086634, -25.28845742256614], [-57.641442097752339, -25.289565806004493], [-57.642348780552084, -25.289028570982904], [-57.643138167662627, -25.288592740080738], [-57.644136626417655, -25.288032452235019], [-57.644899471132383, -25.287607470467581], [-57.645559249830505, -25.287244706323705], [-57.646978859019548, -25.286448903208505], [-57.646205988326038, -25.285313103980588], [-57.64544442671108, -25.284236490125309], [-57.644699130686519, -25.283161325234271], [-57.643904827846633, -25.28204222686918], [-57.643169987960768, -25.281000227975277], [-57.642634615511753, -25.280241550943234], [-57.642226967344804, -25.279663885463687], [-57.641737144908809, -25.2789792129368], [-57.641310162913385, -25.278355841080231], [-57.640766065278207, -25.27758456465628], [-57.640127586124073, -25.276695279909209], [-57.639729153296145, -25.276545963456023], [-57.639458667111377, -25.276459447908671], [-57.639348046716449, -25.276057642028054], [-57.639205970094686, -25.275658068237032], [-57.638603156222139, -25.275693613647082], [-57.638057757771762, -25.27570759663363], [-57.637895256242913, -25.275968125348903], [-57.637598476049924, -25.27609175261022], [-57.637327011123425, -25.275892123471817], [-57.636842867278951, -25.275529491931909], [-57.636293844829609, -25.275547982974718], [-57.635494797815852, -25.276037608281818], [-57.635314566279462, -25.276425009140624], [-57.635178525929291, -25.276832372720367], [-57.634769624251973, -25.277072823670977], [-57.634459137987591, -25.277228511896787], [-57.634115243177938, -25.277019828210936], [-57.633774829639165, -25.27705241836227], [-57.633764251179954, -25.277317585529421], [-57.633610191745021, -25.277602091540693]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "nombre": "SAN ANTONIO",
      "zona": 10,
      "ordenanza": "N� 10811\/83",
      "st_area_sh": 1204039.9128099999
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[-57.65304731885066, -25.288574368004035], [-57.654017055609344, -25.288740889502392], [-57.655036964550234, -25.288906695976809], [-57.656029459249503, -25.289072617266356], [-57.657012750380446, -25.289226110022128], [-57.657982403127036, -25.289392119810948], [-57.658979496764672, -25.289562154566188], [-57.659972002539909, -25.289728049998114], [-57.660955348335584, -25.289889823977852], [-57.661943310708097, -25.29005988037251], [-57.662926593725537, -25.29020917861228], [-57.663900830446281, -25.290375128620752], [-57.664879617033641, -25.290536897680575], [-57.66587454662946, -25.290700946058845], [-57.666126458269254, -25.289537161302885], [-57.66637581570096, -25.288402105868766], [-57.664408974038018, -25.28808206551264], [-57.663431333378711, -25.28792562745085], [-57.662449781411283, -25.287759824211584], [-57.661469353662028, -25.287594619806278], [-57.661668575447969, -25.286722215681369], [-57.661813472945411, -25.28604078061484], [-57.662018445330034, -25.285155104388163], [-57.662222997444147, -25.284226389203099], [-57.661244740816663, -25.284049441687994], [-57.661660659297667, -25.282249158801875], [-57.662618376300962, -25.282423970979639], [-57.662823366166656, -25.28154359142907], [-57.663011434667084, -25.280766597635832], [-57.663111564953439, -25.280380856396292], [-57.663239069005321, -25.279816581849992], [-57.662942218146362, -25.279428381094256], [-57.662568252526576, -25.279345217724934], [-57.662402752816426, -25.278989312762505], [-57.661871023503025, -25.278426336318109], [-57.661466137061105, -25.27801720501504], [-57.661037371288074, -25.277750143232193], [-57.660248794381907, -25.277302877485297], [-57.659672199628353, -25.277051416413705], [-57.659229852154418, -25.27680433455421], [-57.658858300839533, -25.276478481195653], [-57.6585425957011, -25.276349134154309], [-57.65815335745021, -25.276298568471457], [-57.657563332108921, -25.276094479852095], [-57.657151229717705, -25.275867181462456], [-57.656522217398653, -25.275543714466611], [-57.656179439901877, -25.27547301219829], [-57.655796819861841, -25.276630299636999], [-57.655607908443216, -25.277399711640097], [-57.655388844806147, -25.27829804487612], [-57.655192557179781, -25.279183812880717], [-57.654984989250458, -25.280096635063778], [-57.654777340319626, -25.280994916545307], [-57.654565063044942, -25.281882832376006], [-57.654355134061632, -25.282783200244392], [-57.65416110571369, -25.283666879569441], [-57.653969360105982, -25.284550549363384], [-57.653775259633036, -25.285421764664466], [-57.653574302227575, -25.286293010931313], [-57.653322096722071, -25.287407518082187], [-57.65304731885066, -25.288574368004035]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "nombre": "MANORA",
      "zona": 15,
      "ordenanza": "N� 10811\/83",
      "st_area_sh": 688233.06659900001
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[-57.570937640311477, -25.280950134650482], [-57.569143884007438, -25.28124224274514], [-57.568619481650266, -25.281312420139933], [-57.567598746202513, -25.281444141144341], [-57.566621963595253, -25.281567691665568], [-57.565952409146547, -25.281655753634066], [-57.565605028812726, -25.281699222689266], [-57.564900392945617, -25.281798232872973], [-57.563936479366561, -25.28193351381876], [-57.563919480269398, -25.282457502189033], [-57.563898016221884, -25.283360616540282], [-57.564359054842605, -25.283447864410395], [-57.565028680774908, -25.283537499041458], [-57.565637015609177, -25.283588626710518], [-57.566538016410739, -25.283761317177817], [-57.567584609595855, -25.284173162051502], [-57.568078409084599, -25.284420531270076], [-57.568606807044702, -25.284737871642442], [-57.569849601230956, -25.285557514373675], [-57.571888099580413, -25.286484194077939], [-57.572267983494122, -25.286446370742759], [-57.57285447348459, -25.286322403847358], [-57.573791436682519, -25.286094661225057], [-57.575268767211462, -25.285752756835727], [-57.576659528638878, -25.285423244430223], [-57.577655650016979, -25.285183176996931], [-57.578626128955989, -25.284992618978574], [-57.579325120264123, -25.28498370548634], [-57.580239432149355, -25.285054080041874], [-57.580524924535105, -25.283833533003719], [-57.580094033830562, -25.282490620673276], [-57.579614014977089, -25.280892672877201], [-57.579370542028066, -25.280084374759539], [-57.578272818254476, -25.280369596532253], [-57.575978863480792, -25.281269545138024], [-57.57559429064775, -25.28135590140888], [-57.574475163896061, -25.281529972158175], [-57.572950943712002, -25.281765078088025], [-57.572021509701273, -25.281915695550406], [-57.571139168430939, -25.282058675680634], [-57.570937640311477, -25.280950134650482]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "nombre": "ITA PYTA PUNTA",
      "zona": 10,
      "ordenanza": "N� 10811\/83",
      "st_area_sh": 393777.98293100001
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[-57.66637581570096, -25.288402105868766], [-57.666566518215433, -25.287562819636399], [-57.666703850266565, -25.286958411732858], [-57.666913685224877, -25.286083652161768], [-57.667113721937881, -25.285124100889469], [-57.667386409193099, -25.284672781290485], [-57.667340359127905, -25.284267025520709], [-57.667252729711635, -25.283771795364469], [-57.666977206660412, -25.283481643317877], [-57.666788185973886, -25.282979400287914], [-57.666701375670996, -25.282633601214417], [-57.66672238701468, -25.282183830617122], [-57.666606774455502, -25.281864439019895], [-57.666244895435298, -25.281811280872748], [-57.665970276750123, -25.281685500493246], [-57.665789766274571, -25.281235519579564], [-57.665475727092542, -25.281071943444623], [-57.665024624911396, -25.281074592208984], [-57.66461558410461, -25.280912056418956], [-57.664254521998274, -25.280505226356073], [-57.66388566393217, -25.280175639125439], [-57.663239069005321, -25.279816581849992], [-57.663111564953439, -25.280380856396292], [-57.663011434667084, -25.280766597635832], [-57.662823366166656, -25.28154359142907], [-57.662618376300962, -25.282423970979639], [-57.661660659297667, -25.282249158801875], [-57.661244740816663, -25.284049441687994], [-57.662222997444147, -25.284226389203099], [-57.662018445330034, -25.285155104388163], [-57.661813472945411, -25.28604078061484], [-57.661668575447969, -25.286722215681369], [-57.661469353662028, -25.287594619806278], [-57.662449781411283, -25.287759824211584], [-57.663431333378711, -25.28792562745085], [-57.664408974038018, -25.28808206551264], [-57.66637581570096, -25.288402105868766]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "nombre": "MCAL. FRANCISCO SOLANO LOPEZ",
      "zona": 12,
      "ordenanza": "N� 10811\/83",
      "st_area_sh": 1576441.6821300001
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[-57.594491059782754, -25.282367143056625], [-57.59467749814106, -25.284398243418543], [-57.59481668967419, -25.285817374843681], [-57.594952565929191, -25.287171896525422], [-57.595073355142937, -25.287806419291588], [-57.596962293887032, -25.291352030181077], [-57.597953880374689, -25.291495479028999], [-57.598905220298079, -25.291670076989647], [-57.599650378562103, -25.291794775978115], [-57.603295812363299, -25.292472564522271], [-57.606094857158013, -25.292988136535222], [-57.607662952686752, -25.29327694775078], [-57.608073607556612, -25.293350522991442], [-57.609531082627996, -25.293610305768393], [-57.609951568192137, -25.293685984356845], [-57.611207651825985, -25.293881875729628], [-57.610943045576441, -25.292959908198114], [-57.610862298826447, -25.292635189497311], [-57.610446881639717, -25.291126461421353], [-57.610138327686037, -25.289890147275049], [-57.610065059872319, -25.289586686206849], [-57.60953727549613, -25.287486222755813], [-57.609536921567567, -25.284349515219851], [-57.608578105560525, -25.284553598184587], [-57.608256515092783, -25.28462204744498], [-57.607138943750734, -25.284827815824052], [-57.606030397826963, -25.285057702315282], [-57.605549738153471, -25.283533263464982], [-57.605598859431829, -25.283135504651202], [-57.604912728670996, -25.282910985510682], [-57.604018027365306, -25.282612901873065], [-57.603106886092618, -25.282303704778577], [-57.60220805967537, -25.281998176769456], [-57.601313297901982, -25.281685175634518], [-57.600635157379138, -25.281447721853038], [-57.599652008475658, -25.28159448992832], [-57.598916486064141, -25.281704554691451], [-57.598149120058267, -25.281825897481944], [-57.597210051366368, -25.281956855234892], [-57.596290641075377, -25.28209442004966], [-57.595327142624164, -25.282247772482332], [-57.594491059782754, -25.282367143056625]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "nombre": "YCUA SATI",
      "zona": 14,
      "ordenanza": "N� 10811\/83",
      "st_area_sh": 1471970.3543
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[-57.550171543968382, -25.293331675812567], [-57.550867477903864, -25.293345332377999], [-57.552038154884109, -25.293276761777303], [-57.553649540935936, -25.293195451624054], [-57.555256160036649, -25.293114895880901], [-57.556996409767322, -25.293030466014766], [-57.558532898621024, -25.292931338918041], [-57.56013299188217, -25.292834329343574], [-57.561709669151156, -25.292764139829085], [-57.562721730445418, -25.292754932765749], [-57.563667976572248, -25.292510590531322], [-57.564719887483321, -25.292212342266762], [-57.565959812128185, -25.291854520164488], [-57.567052925223464, -25.291561446940403], [-57.568169419352309, -25.291236178680247], [-57.569268354567193, -25.290932367454154], [-57.570367260116967, -25.290623198576959], [-57.571468918155944, -25.290319494202233], [-57.572554034907256, -25.290005370540438], [-57.573710599602791, -25.289687235148282], [-57.573026576347324, -25.288550800791285], [-57.572629385757182, -25.287903455374565], [-57.572489858376308, -25.287681243600389], [-57.571888099580413, -25.286484194077939], [-57.569849601230956, -25.285557514373675], [-57.568606807044702, -25.284737871642442], [-57.568078409084599, -25.284420531270076], [-57.567584609595855, -25.284173162051502], [-57.566538016410739, -25.283761317177817], [-57.565637015609177, -25.283588626710518], [-57.565028680774908, -25.283537499041458], [-57.564359054842605, -25.283447864410395], [-57.563815165439038, -25.283708193445992], [-57.562266434791177, -25.284210619390244], [-57.560852311821854, -25.284718391905198], [-57.559734644108545, -25.285383056183253], [-57.558260394252933, -25.286362761338662], [-57.556925672411658, -25.287223993686606], [-57.555591125026552, -25.288127668397131], [-57.554887561501069, -25.288587892987355], [-57.553729665884106, -25.28954985277872], [-57.55328010592018, -25.289959584037184], [-57.552939612350059, -25.290392492755068], [-57.552513684468416, -25.290865816895963], [-57.552053973600096, -25.291327473364049], [-57.551367011775106, -25.292023483362687], [-57.550171543968382, -25.293331675812567]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "nombre": "SAN ROQUE",
      "zona": 12,
      "ordenanza": "N� 10811\/83",
      "st_area_sh": 1253886.2714499999
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[-57.616666863844088, -25.286219524167311], [-57.617217304979413, -25.286962200328048], [-57.617719318808412, -25.287644077553637], [-57.618233348040413, -25.288339472562427], [-57.618477644059254, -25.288658899701712], [-57.61910508507335, -25.289499358022013], [-57.619458301298472, -25.289976612041965], [-57.619938631969539, -25.290602453607015], [-57.620372559197996, -25.291156190366443], [-57.620869796124865, -25.291812399933345], [-57.621307975849476, -25.29237753115008], [-57.621872618840385, -25.293117167613069], [-57.622272827287162, -25.293621572894754], [-57.62264366184143, -25.294110879376436], [-57.623322012902605, -25.294983211843604], [-57.623899893983697, -25.295760923831399], [-57.624493465668152, -25.294555342687747], [-57.624977693860956, -25.293451023305163], [-57.62521232602483, -25.292873286785522], [-57.625565122100831, -25.291934306319597], [-57.626164335021898, -25.290807227243771], [-57.626869637128003, -25.291737262605636], [-57.627691010641009, -25.29284939851528], [-57.628514768388939, -25.293945931951775], [-57.630180205855808, -25.292990209277491], [-57.630591871032642, -25.293560868910561], [-57.630966724918046, -25.2941174023122], [-57.631488395679177, -25.294868262187435], [-57.631681744777659, -25.295234650219015], [-57.633005352824405, -25.294448180039669], [-57.633965622040627, -25.293893415744762], [-57.634821262575485, -25.293406802705061], [-57.634091763152441, -25.292337376795885], [-57.633712736332861, -25.291775770709325], [-57.633300721060458, -25.29118270425613], [-57.632537639545255, -25.290077463234272], [-57.631739905274976, -25.288956460165192], [-57.631029759130826, -25.287927662757841], [-57.630491117196414, -25.287153956178042], [-57.630090158988907, -25.286574576022328], [-57.629608201025754, -25.285877372229173], [-57.629261017719713, -25.285330651515505], [-57.62878186228825, -25.284655360420302], [-57.628414828647664, -25.284167875738678], [-57.627536423779532, -25.284658333093812], [-57.62701658950251, -25.283881443646344], [-57.626098528485194, -25.284104307841162], [-57.624321007967687, -25.284561941531894], [-57.622531304076176, -25.284944588009857], [-57.622083890436798, -25.285042925302804], [-57.6195053372468, -25.285605685495618], [-57.618598765717785, -25.285813107034432], [-57.617603759639245, -25.2860155346252], [-57.616666863844088, -25.286219524167311]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "nombre": "VILLA MORRA",
      "zona": 14,
      "ordenanza": "N� 10811\/83",
      "st_area_sh": 1235215.60014
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[-57.571888099580413, -25.286484194077939], [-57.572489858376308, -25.287681243600389], [-57.572629385757182, -25.287903455374565], [-57.573026576347324, -25.288550800791285], [-57.573710599602791, -25.289687235148282], [-57.574391503669652, -25.290819193611302], [-57.575186719282229, -25.292137312532823], [-57.575656846514697, -25.292936590084633], [-57.576135068594468, -25.293725974010226], [-57.577105310800953, -25.295318715117372], [-57.578024727901962, -25.294933736860898], [-57.578925250945552, -25.294538522458204], [-57.579825753396193, -25.294140219705536], [-57.580716117497985, -25.293751203112492], [-57.58162000123184, -25.293352876211095], [-57.58252386323484, -25.292951459119024], [-57.583427764465647, -25.292559288978239], [-57.584324845026359, -25.292160971685689], [-57.585211786787042, -25.291771942707442], [-57.586132557604891, -25.291364267969573], [-57.587022865829347, -25.290972130046882], [-57.587922533181718, -25.290581657163969], [-57.588829577500341, -25.29018575733588], [-57.589311274836021, -25.289963577931399], [-57.589513082280924, -25.289542755312208], [-57.589217030756693, -25.288143768261609], [-57.588710837086182, -25.286508712641904], [-57.587936743426106, -25.286429436507461], [-57.586756404513544, -25.286302190900873], [-57.585442383246495, -25.286166429585393], [-57.584176859293251, -25.286024751842266], [-57.583789085239196, -25.285954432415771], [-57.58344315043523, -25.285837735018923], [-57.582615106903788, -25.285439080194898], [-57.582328837693204, -25.285306991426019], [-57.582058238660785, -25.285223172124034], [-57.581069582121579, -25.285134615464486], [-57.580239432149355, -25.285054080041874], [-57.579325120264123, -25.28498370548634], [-57.578626128955989, -25.284992618978574], [-57.577655650016979, -25.285183176996931], [-57.576659528638878, -25.285423244430223], [-57.575268767211462, -25.285752756835727], [-57.573791436682519, -25.286094661225057], [-57.57285447348459, -25.286322403847358], [-57.572267983494122, -25.286446370742759], [-57.571888099580413, -25.286484194077939]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "nombre": "SAN JUAN",
      "zona": 12,
      "ordenanza": "N� 552\/15",
      "st_area_sh": 554925.48357200006
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[-57.597563304303144, -25.266412333456465], [-57.598262815438929, -25.266911274514108], [-57.598733893019762, -25.267277609200907], [-57.599746209489162, -25.268017586155555], [-57.600869091795282, -25.268850821146025], [-57.601556536449614, -25.26935567849246], [-57.603803761578519, -25.270997572993942], [-57.60617091071191, -25.272777432136085], [-57.608444490054111, -25.274461102361876], [-57.609757182583074, -25.275445675353456], [-57.609771482802898, -25.274752219233864], [-57.609807776239499, -25.274246889837077], [-57.609896325440168, -25.27399328085124], [-57.610118887429081, -25.273631225885779], [-57.61033804615144, -25.273306418934684], [-57.610556398089564, -25.273019883257881], [-57.610831223361814, -25.272700557938865], [-57.611175967703218, -25.272476369877271], [-57.61168181773386, -25.272323391141779], [-57.61151046633605, -25.271975694502093], [-57.611148451858682, -25.271899194500307], [-57.610065763703268, -25.271330147197482], [-57.609778485375436, -25.271062159658101], [-57.609288290019222, -25.270577833656741], [-57.608734780959516, -25.270213060946062], [-57.608160251907165, -25.269680138352832], [-57.607572623542701, -25.269217619872265], [-57.607099294917937, -25.268739334943117], [-57.605945155460795, -25.268336784526998], [-57.604717252698698, -25.267615873491607], [-57.60382893587164, -25.266966999749283], [-57.603234905390266, -25.266240600958657], [-57.602519445990602, -25.26592976991703], [-57.60177356976947, -25.265656624203565], [-57.6008413145682, -25.265205043932127], [-57.600619729061052, -25.264759242608147], [-57.600587657551692, -25.264285572346282], [-57.600653465449412, -25.263861361871182], [-57.600492373997447, -25.263226489105701], [-57.59998186385512, -25.263859043951079], [-57.599163628398337, -25.264726246531694], [-57.598146704962822, -25.265805501947487], [-57.597563304303144, -25.266412333456465]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "nombre": "RECOLETA",
      "zona": 14,
      "ordenanza": "N� 10811\/83",
      "st_area_sh": 2493228.8187500001
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[-57.577105310800953, -25.295318715117372], [-57.57811834590126, -25.296997193382602], [-57.578554282128074, -25.297720023811596], [-57.579025082674278, -25.29850158894472], [-57.579522232898675, -25.299326883491073], [-57.579995627272375, -25.300123779501298], [-57.580482015954559, -25.300930584139952], [-57.580957969904567, -25.301720986406718], [-57.581440247543057, -25.302524174403501], [-57.581921381555595, -25.303317230315827], [-57.582403803524628, -25.304120285109374], [-57.583091776504489, -25.305234193309477], [-57.583728648628416, -25.306282024214408], [-57.58394383407871, -25.306624198055015], [-57.584527607387393, -25.307576506656186], [-57.585026726272368, -25.307345843544908], [-57.585588097459244, -25.307048333120203], [-57.586452238898516, -25.306617835807593], [-57.58732002871912, -25.306183983122239], [-57.588301879197793, -25.305725431818161], [-57.589169319399289, -25.305305798092846], [-57.590421512715402, -25.304673541442515], [-57.592446361205333, -25.303677838654608], [-57.593537518757628, -25.303146295860852], [-57.594659363353074, -25.302902733939312], [-57.594438913211988, -25.302135854351096], [-57.594217734879741, -25.301362469029751], [-57.594103162156749, -25.300953425715903], [-57.593866879375611, -25.30015627016725], [-57.59374103775378, -25.299767113482908], [-57.593552060659839, -25.299138777374562], [-57.593315601425687, -25.298304063845404], [-57.592876909395791, -25.296817715874909], [-57.592680889017608, -25.2961395568489], [-57.593661278542356, -25.29585882345987], [-57.59469656592524, -25.295590419069327], [-57.594593773374385, -25.295233897964415], [-57.594336491430305, -25.294890691611418], [-57.594137676515423, -25.294438860721748], [-57.594037643209745, -25.294117011170304], [-57.594461233278587, -25.2940756637677], [-57.594852568669189, -25.293968762455208], [-57.595174064858782, -25.29367412672665], [-57.595494050534036, -25.293230410445478], [-57.596149256638292, -25.292204288219995], [-57.596962293887032, -25.291352030181077], [-57.595073355142937, -25.287806419291588], [-57.594952565929191, -25.287171896525422], [-57.593665630116718, -25.287024780762064], [-57.593090730854669, -25.286965338428352], [-57.591635694662791, -25.286795363513864], [-57.589626845868558, -25.286600533398367], [-57.588710837086182, -25.286508712641904], [-57.589217030756693, -25.288143768261609], [-57.589513082280924, -25.289542755312208], [-57.589311274836021, -25.289963577931399], [-57.588829577500341, -25.29018575733588], [-57.587922533181718, -25.290581657163969], [-57.587022865829347, -25.290972130046882], [-57.586132557604891, -25.291364267969573], [-57.585211786787042, -25.291771942707442], [-57.584324845026359, -25.292160971685689], [-57.583427764465647, -25.292559288978239], [-57.58252386323484, -25.292951459119024], [-57.58162000123184, -25.293352876211095], [-57.580716117497985, -25.293751203112492], [-57.579825753396193, -25.294140219705536], [-57.578925250945552, -25.294538522458204], [-57.578024727901962, -25.294933736860898], [-57.577105310800953, -25.295318715117372]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "nombre": "SAN CRISTOBAL",
      "zona": 14,
      "ordenanza": "N� 10811\/83",
      "st_area_sh": 1420386.36727
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[-57.573710599602791, -25.289687235148282], [-57.572554034907256, -25.290005370540438], [-57.571468918155944, -25.290319494202233], [-57.570367260116967, -25.290623198576959], [-57.569268354567193, -25.290932367454154], [-57.568169419352309, -25.291236178680247], [-57.567052925223464, -25.291561446940403], [-57.565959812128185, -25.291854520164488], [-57.564719887483321, -25.292212342266762], [-57.563667976572248, -25.292510590531322], [-57.562721730445418, -25.292754932765749], [-57.561709669151156, -25.292764139829085], [-57.56013299188217, -25.292834329343574], [-57.558532898621024, -25.292931338918041], [-57.556996409767322, -25.293030466014766], [-57.557528240942325, -25.293852503554646], [-57.558016483764959, -25.29459077119964], [-57.558558286338474, -25.295425877365449], [-57.559080709535436, -25.296261053905891], [-57.559632299911272, -25.297113743379235], [-57.560183777574139, -25.297939993462847], [-57.560715956602806, -25.298783939398803], [-57.561262663588572, -25.299623421072003], [-57.561794756046446, -25.30044533237384], [-57.562351151078538, -25.301280367666607], [-57.562886544560506, -25.302134779794134], [-57.564126594396498, -25.301458355011988], [-57.565349827464928, -25.300797394846995], [-57.566474385683016, -25.300186249907235], [-57.56766647256827, -25.299529120861358], [-57.568763633676348, -25.29893898224319], [-57.569711881699789, -25.298435373462539], [-57.571862880345911, -25.297578720891003], [-57.572915945998886, -25.297122569197953], [-57.573948949003331, -25.296679306849054], [-57.574942331844525, -25.296256929293126], [-57.576193909866689, -25.29570911528711], [-57.577105310800953, -25.295318715117372], [-57.576135068594468, -25.293725974010226], [-57.575656846514697, -25.292936590084633], [-57.575186719282229, -25.292137312532823], [-57.574391503669652, -25.290819193611302], [-57.573710599602791, -25.289687235148282]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "nombre": "CIUDAD NUEVA",
      "zona": 12,
      "ordenanza": "N� 10811\/83",
      "st_area_sh": 1137620.6288900001
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[-57.611207651825985, -25.293881875729628], [-57.611365169783895, -25.294451423472545], [-57.611628419553917, -25.295374322113435], [-57.611828413754125, -25.29606001997573], [-57.612054826416035, -25.296856110150046], [-57.612260139629754, -25.297569998825374], [-57.612544069091442, -25.298488107269606], [-57.612720135917861, -25.299042239669813], [-57.612943123315105, -25.299669062026751], [-57.6133078202704, -25.300908007002644], [-57.613676915895134, -25.302094715114311], [-57.61391868169504, -25.302853120550775], [-57.614731909992805, -25.302583224174349], [-57.615766603842204, -25.302250464727969], [-57.616412129030792, -25.302048974632033], [-57.616772812062337, -25.301926461119368], [-57.617778992885661, -25.30159812887889], [-57.618551074774686, -25.301233883696565], [-57.619644621179972, -25.300602815120524], [-57.620490727307853, -25.300117398792867], [-57.621310867953071, -25.299668820881458], [-57.621741942415809, -25.299368813550103], [-57.622034735397961, -25.298987277678052], [-57.622336792087438, -25.298558164374665], [-57.622662416533274, -25.298090057079147], [-57.623086629275129, -25.297379522706787], [-57.62374586810602, -25.296149400706966], [-57.623899893983697, -25.295760923831399], [-57.623322012902605, -25.294983211843604], [-57.62264366184143, -25.294110879376436], [-57.622272827287162, -25.293621572894754], [-57.621872618840385, -25.293117167613069], [-57.621307975849476, -25.29237753115008], [-57.620869796124865, -25.291812399933345], [-57.620372559197996, -25.291156190366443], [-57.619938631969539, -25.290602453607015], [-57.619458301298472, -25.289976612041965], [-57.61910508507335, -25.289499358022013], [-57.618648594387288, -25.289761031724723], [-57.618247108265628, -25.289996650180878], [-57.617822306959802, -25.290247555249341], [-57.617355808613574, -25.290513824564222], [-57.616892665958652, -25.290783116218439], [-57.616441155664809, -25.291040204712004], [-57.615928021098156, -25.291337045439278], [-57.615633161289438, -25.291512968570579], [-57.614771760833143, -25.291999620878908], [-57.613917006698053, -25.292480164907417], [-57.613022366907991, -25.293004922839916], [-57.612147570803153, -25.293490096787259], [-57.611207651825985, -25.293881875729628]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "nombre": "GRAL. JOSE EDUVIGIS DIAZ",
      "zona": 11,
      "ordenanza": "N� 10811\/83",
      "st_area_sh": 858279.47881
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[-57.633300721060458, -25.29118270425613], [-57.633712736332861, -25.291775770709325], [-57.634091763152441, -25.292337376795885], [-57.634821262575485, -25.293406802705061], [-57.633965622040627, -25.293893415744762], [-57.633005352824405, -25.294448180039669], [-57.631681744777659, -25.295234650219015], [-57.631743045487106, -25.296182469295871], [-57.631818626136223, -25.296828927534104], [-57.631851601527565, -25.29761674371818], [-57.631885109832403, -25.298114646279785], [-57.63195696017506, -25.298433798863229], [-57.632084210508673, -25.299293440264279], [-57.633152310557627, -25.299127268140264], [-57.634383421680361, -25.298927551874687], [-57.635466025757452, -25.298384835265658], [-57.636964658239307, -25.2975352695466], [-57.639189327676327, -25.296278415104293], [-57.639355406914262, -25.296056765412203], [-57.64016933648815, -25.295601043573146], [-57.641041588595186, -25.295076801456375], [-57.641771164440335, -25.294638931132972], [-57.64250406499216, -25.294215829100928], [-57.643129965924608, -25.293858245746321], [-57.64398900585109, -25.29336153973501], [-57.643474685439863, -25.292584304378259], [-57.642954376923683, -25.291815326138511], [-57.642440012923224, -25.291027107872956], [-57.641934956932026, -25.290285506174079], [-57.641442097752339, -25.289565806004493], [-57.640705688086634, -25.28845742256614], [-57.639957526321815, -25.287360507689201], [-57.639095643243941, -25.287857512283534], [-57.638459365872187, -25.288230640329736], [-57.637775525981645, -25.288597799036022], [-57.636971035952186, -25.289059640833035], [-57.636138635717373, -25.289529729621101], [-57.635458341386368, -25.289915945453721], [-57.634813197933731, -25.290293120130528], [-57.634057207908711, -25.290742743388584], [-57.633300721060458, -25.29118270425613]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "nombre": "SILVIO PETTIROSSI",
      "zona": 12,
      "ordenanza": "N� 10811\/83",
      "st_area_sh": 1538231.9867
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[-57.623899893983697, -25.295760923831399], [-57.62374586810602, -25.296149400706966], [-57.623086629275129, -25.297379522706787], [-57.622662416533274, -25.298090057079147], [-57.622336792087438, -25.298558164374665], [-57.622034735397961, -25.298987277678052], [-57.621741942415809, -25.299368813550103], [-57.621481224850974, -25.299901376945641], [-57.62072060912908, -25.30139782072283], [-57.620313709799866, -25.302913183520683], [-57.620167974044151, -25.303475836791932], [-57.619966927193374, -25.304170102796519], [-57.621461561072607, -25.306062659204002], [-57.622541215861013, -25.307430426905228], [-57.623500692557663, -25.308600067666774], [-57.624774421197678, -25.307776098571825], [-57.625764530741257, -25.307170004605783], [-57.626404940070117, -25.306806148023721], [-57.627018798458835, -25.306430364120875], [-57.627934264874405, -25.306204160391346], [-57.628312344443714, -25.306172690873872], [-57.628785526199309, -25.306200139890453], [-57.629978697050532, -25.306277461648879], [-57.630891829983582, -25.306335596977284], [-57.631931403683701, -25.306406938946047], [-57.632006756361392, -25.305184008859857], [-57.63206044316491, -25.304355114105363], [-57.632087530304148, -25.304048690548854], [-57.632269031984833, -25.302946429325836], [-57.632478982753156, -25.302024571928698], [-57.632489670556886, -25.301566928209549], [-57.632420945278312, -25.301097190219195], [-57.632269298102123, -25.300162682904602], [-57.6322021283247, -25.29974601045015], [-57.632084210508673, -25.299293440264279], [-57.63195696017506, -25.298433798863229], [-57.631885109832403, -25.298114646279785], [-57.631851601527565, -25.29761674371818], [-57.631818626136223, -25.296828927534104], [-57.631743045487106, -25.296182469295871], [-57.631681744777659, -25.295234650219015], [-57.631488395679177, -25.294868262187435], [-57.630966724918046, -25.2941174023122], [-57.630591871032642, -25.293560868910561], [-57.630180205855808, -25.292990209277491], [-57.628514768388939, -25.293945931951775], [-57.627691010641009, -25.29284939851528], [-57.626869637128003, -25.291737262605636], [-57.626164335021898, -25.290807227243771], [-57.625565122100831, -25.291934306319597], [-57.62521232602483, -25.292873286785522], [-57.624977693860956, -25.293451023305163], [-57.624493465668152, -25.294555342687747], [-57.623899893983697, -25.295760923831399]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "nombre": "MBURICAO",
      "zona": 12,
      "ordenanza": "N� 10811\/83",
      "st_area_sh": 1829060.9526899999
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[-57.594659363353074, -25.302902733939312], [-57.595034439818548, -25.304187295941833], [-57.595263170336921, -25.304962201439473], [-57.595485390678867, -25.305758183535822], [-57.59568043018789, -25.306406926738969], [-57.595942897184671, -25.307314007133733], [-57.596306553094649, -25.308617613595604], [-57.59792755193466, -25.308076820946059], [-57.59901227853679, -25.307704314468388], [-57.599744804762693, -25.307460793850357], [-57.600845556748183, -25.307088209727738], [-57.601225794956527, -25.306955454364555], [-57.601726150566158, -25.306789406762558], [-57.602242505362511, -25.306616003695705], [-57.60335530597407, -25.306250640232808], [-57.605646650893696, -25.305520446407851], [-57.607611206683586, -25.304895741595065], [-57.607310067231765, -25.304139414967221], [-57.606890541914446, -25.303119808659858], [-57.606467742440699, -25.302091384457817], [-57.606123665213069, -25.301265725394078], [-57.605792500271853, -25.300431182400118], [-57.605461559298476, -25.299640786329842], [-57.605140217751341, -25.298826804102905], [-57.604786242825298, -25.297959975254003], [-57.604599522070274, -25.297522185380096], [-57.604461020489396, -25.297159415499518], [-57.603295812363299, -25.292472564522271], [-57.599650378562103, -25.291794775978115], [-57.598905220298079, -25.291670076989647], [-57.597953880374689, -25.291495479028999], [-57.596962293887032, -25.291352030181077], [-57.596149256638292, -25.292204288219995], [-57.595494050534036, -25.293230410445478], [-57.595174064858782, -25.29367412672665], [-57.594852568669189, -25.293968762455208], [-57.594461233278587, -25.2940756637677], [-57.594037643209745, -25.294117011170304], [-57.594137676515423, -25.294438860721748], [-57.594336491430305, -25.294890691611418], [-57.594593773374385, -25.295233897964415], [-57.59469656592524, -25.295590419069327], [-57.593661278542356, -25.29585882345987], [-57.592680889017608, -25.2961395568489], [-57.592876909395791, -25.296817715874909], [-57.593315601425687, -25.298304063845404], [-57.593552060659839, -25.299138777374562], [-57.59374103775378, -25.299767113482908], [-57.593866879375611, -25.30015627016725], [-57.594103162156749, -25.300953425715903], [-57.594217734879741, -25.301362469029751], [-57.594438913211988, -25.302135854351096], [-57.594659363353074, -25.302902733939312]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "nombre": "BERNARDINO CABALLERO",
      "zona": 12,
      "ordenanza": "N� 10811\/83",
      "st_area_sh": 887588.58398700005
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[-57.607611206683586, -25.304895741595065], [-57.608536712207304, -25.304596893865053], [-57.609414589286764, -25.304300478569974], [-57.610302756750905, -25.304017957533812], [-57.610782670006927, -25.303870539606663], [-57.611195986322571, -25.30372611613365], [-57.612367907893649, -25.303351903784748], [-57.613124628554033, -25.303108653902338], [-57.61391868169504, -25.302853120550775], [-57.613676915895134, -25.302094715114311], [-57.6133078202704, -25.300908007002644], [-57.612943123315105, -25.299669062026751], [-57.612720135917861, -25.299042239669813], [-57.612544069091442, -25.298488107269606], [-57.612260139629754, -25.297569998825374], [-57.612054826416035, -25.296856110150046], [-57.611828413754125, -25.29606001997573], [-57.611628419553917, -25.295374322113435], [-57.611365169783895, -25.294451423472545], [-57.611207651825985, -25.293881875729628], [-57.609951568192137, -25.293685984356845], [-57.609531082627996, -25.293610305768393], [-57.608073607556612, -25.293350522991442], [-57.607662952686752, -25.29327694775078], [-57.606094857158013, -25.292988136535222], [-57.603295812363299, -25.292472564522271], [-57.604461020489396, -25.297159415499518], [-57.604599522070274, -25.297522185380096], [-57.604786242825298, -25.297959975254003], [-57.605140217751341, -25.298826804102905], [-57.605461559298476, -25.299640786329842], [-57.605792500271853, -25.300431182400118], [-57.606123665213069, -25.301265725394078], [-57.606467742440699, -25.302091384457817], [-57.606890541914446, -25.303119808659858], [-57.607310067231765, -25.304139414967221], [-57.607611206683586, -25.304895741595065]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "nombre": "LUIS ALBERTO DE HERRERA",
      "zona": 14,
      "ordenanza": "N� 10811\/83",
      "st_area_sh": 1165495.8909100001
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[-57.550171543968382, -25.293331675812567], [-57.550461517043829, -25.294381473998406], [-57.551121192986429, -25.29679957709121], [-57.551630506691971, -25.298739136555625], [-57.552139067575396, -25.300508818099225], [-57.552550201994968, -25.302867368078726], [-57.552851401323188, -25.304528615595721], [-57.553160165487718, -25.306383979281794], [-57.553368611935369, -25.30731145776743], [-57.554018128428631, -25.307017633217498], [-57.55577721419985, -25.306000597311122], [-57.55799883902322, -25.304784182304623], [-57.559211659592975, -25.304123644192011], [-57.560423653030739, -25.303455482180894], [-57.561663371830882, -25.302791404786568], [-57.562472788961522, -25.302350731373682], [-57.562886544560506, -25.302134779794134], [-57.562351151078538, -25.301280367666607], [-57.561794756046446, -25.30044533237384], [-57.561262663588572, -25.299623421072003], [-57.560715956602806, -25.298783939398803], [-57.560183777574139, -25.297939993462847], [-57.559632299911272, -25.297113743379235], [-57.559080709535436, -25.296261053905891], [-57.558558286338474, -25.295425877365449], [-57.558016483764959, -25.29459077119964], [-57.557528240942325, -25.293852503554646], [-57.556996409767322, -25.293030466014766], [-57.555256160036649, -25.293114895880901], [-57.553649540935936, -25.293195451624054], [-57.552038154884109, -25.293276761777303], [-57.550867477903864, -25.293345332377999], [-57.550171543968382, -25.293331675812567]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "nombre": "TERMINAL",
      "zona": 14,
      "ordenanza": "N� 10811\/83",
      "st_area_sh": 989768.29477599997
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[-57.58653651528703, -25.33040040792357], [-57.586996553495659, -25.330918037209745], [-57.587981030869841, -25.332029886395517], [-57.588619191229604, -25.33270514534577], [-57.589126900627555, -25.333294023686346], [-57.589434606062909, -25.333650814170813], [-57.58993305238981, -25.33425256329075], [-57.589139066572834, -25.334936070180703], [-57.589839403950144, -25.335161630921096], [-57.591570234112744, -25.33568710233957], [-57.591869957671975, -25.335723568739251], [-57.592488403582323, -25.333914212164714], [-57.593434244803461, -25.332322951058732], [-57.594361084596038, -25.332819154856843], [-57.594748602097475, -25.332227966237451], [-57.595180889507972, -25.331571652908963], [-57.595694001167701, -25.330874973600402], [-57.596189311193889, -25.330347860218655], [-57.595610482472104, -25.329886948114837], [-57.596358901543624, -25.329135532927207], [-57.595717900894584, -25.328479116639766], [-57.596370180020209, -25.327977186724155], [-57.5966877901812, -25.328265512481188], [-57.59745871299048, -25.329121389946984], [-57.59820889982457, -25.328547157828972], [-57.599043175927449, -25.327949644777963], [-57.598224887586447, -25.327097336143183], [-57.597344635591782, -25.3261002604143], [-57.596640454005097, -25.325029048440744], [-57.596132173140305, -25.324348742456866], [-57.595292387823292, -25.323180197898012], [-57.594921161467127, -25.322712242261833], [-57.59418745789398, -25.321691478378806], [-57.593447990054727, -25.322125293128366], [-57.592743394093894, -25.322558132271993], [-57.592023983003514, -25.322985653619714], [-57.591322347765107, -25.323421161610383], [-57.59060887922903, -25.323856713727583], [-57.589898259186477, -25.324270751479197], [-57.58966263070598, -25.324462508423132], [-57.589346433534502, -25.324946790803892], [-57.589598648929368, -25.325079099424496], [-57.589234963317274, -25.325626973908232], [-57.588825636682763, -25.326200486542618], [-57.588558306376449, -25.3265667434367], [-57.588107940595791, -25.327198409352114], [-57.587077122149175, -25.328626421568821], [-57.587747122139852, -25.329021752412771], [-57.587185070281642, -25.329661830246256], [-57.58653651528703, -25.33040040792357]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "nombre": "OBRERO INTENDENTE B. GUGGIARI",
      "zona": 11,
      "ordenanza": "N� 10811\/83",
      "st_area_sh": 2391451.896
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[-57.632084210508673, -25.299293440264279], [-57.6322021283247, -25.29974601045015], [-57.632269298102123, -25.300162682904602], [-57.632420945278312, -25.301097190219195], [-57.632489670556886, -25.301566928209549], [-57.632478982753156, -25.302024571928698], [-57.632269031984833, -25.302946429325836], [-57.632087530304148, -25.304048690548854], [-57.63206044316491, -25.304355114105363], [-57.632006756361392, -25.305184008859857], [-57.631931403683701, -25.306406938946047], [-57.631873517180011, -25.307299809022506], [-57.631748432387397, -25.308340882509228], [-57.63167560051329, -25.308811672079216], [-57.631323091879388, -25.310537129061665], [-57.631004126574375, -25.312094251798726], [-57.630915933424568, -25.312542533388179], [-57.631274692857659, -25.31260961207682], [-57.631891290619507, -25.312769623502035], [-57.632531216353172, -25.312930312452878], [-57.633051557743833, -25.313119870198726], [-57.6333443214669, -25.313055179873704], [-57.634268191241354, -25.312679067745137], [-57.63497844706292, -25.312379989709616], [-57.635372875237429, -25.312183762876778], [-57.635748560441591, -25.311962241430823], [-57.636518427396766, -25.311497973979858], [-57.637293071458281, -25.311059054509151], [-57.638016890416381, -25.310688012731116], [-57.638829580063017, -25.310228243844531], [-57.639637469735284, -25.309774642844456], [-57.640400285515206, -25.309311004586856], [-57.641309334636581, -25.308836495955205], [-57.642184346724157, -25.308310982125516], [-57.642958612771928, -25.30788819838823], [-57.643732495035948, -25.307393805229029], [-57.645482850924431, -25.306414350654478], [-57.646212188964789, -25.306012205918595], [-57.646941467816511, -25.305599827400826], [-57.647771638022618, -25.305115396872047], [-57.648523356809143, -25.304692682480905], [-57.649264506284553, -25.30426601672697], [-57.649914634626946, -25.303919344718775], [-57.650787944321465, -25.303413855334835], [-57.650246576961685, -25.302624627626624], [-57.649867727086097, -25.302076925366979], [-57.64947437455168, -25.301486027809858], [-57.649076336828145, -25.300908127242419], [-57.648697451609735, -25.300351769858022], [-57.648323305001568, -25.299791065032746], [-57.647915600224152, -25.299182922930306], [-57.647555759091084, -25.29862647865361], [-57.647157694068106, -25.298039920533313], [-57.646769194893537, -25.297461971274387], [-57.646385504324861, -25.296892650904113], [-57.646068913692446, -25.296413877376253], [-57.645536510596244, -25.295615940330531], [-57.644970646831474, -25.294787866863526], [-57.644471998977984, -25.294071967877258], [-57.64398900585109, -25.29336153973501], [-57.643129965924608, -25.293858245746321], [-57.64250406499216, -25.294215829100928], [-57.641771164440335, -25.294638931132972], [-57.641041588595186, -25.295076801456375], [-57.64016933648815, -25.295601043573146], [-57.639355406914262, -25.296056765412203], [-57.639189327676327, -25.296278415104293], [-57.636964658239307, -25.2975352695466], [-57.635466025757452, -25.298384835265658], [-57.634383421680361, -25.298927551874687], [-57.633152310557627, -25.299127268140264], [-57.632084210508673, -25.299293440264279]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "nombre": "MCAL. JOSE FELIX ESTIGARRIBIA",
      "zona": 14,
      "ordenanza": "N� 10811\/83",
      "st_area_sh": 2213750.21257
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[-57.562886544560506, -25.302134779794134], [-57.562472788961522, -25.302350731373682], [-57.563127538425526, -25.303134954029943], [-57.563526206697219, -25.303618010073677], [-57.564293189812993, -25.304567352457418], [-57.564720946923806, -25.30510228919831], [-57.565115833386407, -25.305592034041819], [-57.565713113728265, -25.306334534531899], [-57.566530479092791, -25.307329245961931], [-57.567615987241595, -25.308667435132634], [-57.568322329673208, -25.309522316177205], [-57.569019930015862, -25.31037365490835], [-57.569738154322209, -25.31122130185091], [-57.570444434920375, -25.312075683726274], [-57.57119448450343, -25.311742815984967], [-57.572361048180802, -25.311217994662648], [-57.574326343696782, -25.310524881196244], [-57.575765600614055, -25.310032005758778], [-57.57695692921525, -25.309628178583242], [-57.578375016812025, -25.309146371531689], [-57.579439204815792, -25.308758164483518], [-57.579721926520179, -25.308597385342509], [-57.580357706870792, -25.30830445408375], [-57.581303528809386, -25.307865771625128], [-57.582343054909146, -25.307390924650502], [-57.58344901162512, -25.30687726755437], [-57.58394383407871, -25.306624198055015], [-57.583728648628416, -25.306282024214408], [-57.583091776504489, -25.305234193309477], [-57.582403803524628, -25.304120285109374], [-57.581921381555595, -25.303317230315827], [-57.581440247543057, -25.302524174403501], [-57.580957969904567, -25.301720986406718], [-57.580482015954559, -25.300930584139952], [-57.579995627272375, -25.300123779501298], [-57.579522232898675, -25.299326883491073], [-57.579025082674278, -25.29850158894472], [-57.578554282128074, -25.297720023811596], [-57.57811834590126, -25.296997193382602], [-57.577105310800953, -25.295318715117372], [-57.576193909866689, -25.29570911528711], [-57.574942331844525, -25.296256929293126], [-57.573948949003331, -25.296679306849054], [-57.572915945998886, -25.297122569197953], [-57.571862880345911, -25.297578720891003], [-57.569711881699789, -25.298435373462539], [-57.568763633676348, -25.29893898224319], [-57.56766647256827, -25.299529120861358], [-57.566474385683016, -25.300186249907235], [-57.565349827464928, -25.300797394846995], [-57.564126594396498, -25.301458355011988], [-57.562886544560506, -25.302134779794134]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "nombre": "PINOZA",
      "zona": 12,
      "ordenanza": "N� 10811\/83",
      "st_area_sh": 1014867.0955000001
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[-57.621310867953071, -25.299668820881458], [-57.620490727307853, -25.300117398792867], [-57.619644621179972, -25.300602815120524], [-57.618551074774686, -25.301233883696565], [-57.617778992885661, -25.30159812887889], [-57.616772812062337, -25.301926461119368], [-57.616412129030792, -25.302048974632033], [-57.615766603842204, -25.302250464727969], [-57.614731909992805, -25.302583224174349], [-57.61391868169504, -25.302853120550775], [-57.613124628554033, -25.303108653902338], [-57.612367907893649, -25.303351903784748], [-57.611195986322571, -25.30372611613365], [-57.610782670006927, -25.303870539606663], [-57.610302756750905, -25.304017957533812], [-57.609414589286764, -25.304300478569974], [-57.608536712207304, -25.304596893865053], [-57.607611206683586, -25.304895741595065], [-57.608038107021244, -25.305834988761031], [-57.608152642808243, -25.30608340310323], [-57.608410360295338, -25.306644481919509], [-57.608630015495507, -25.307145640838584], [-57.608897286189297, -25.307728135434207], [-57.609088106116168, -25.308126424629911], [-57.609326670373711, -25.308631795457135], [-57.609560452455185, -25.309124311884553], [-57.609789514683307, -25.309616848305723], [-57.610013837490925, -25.310105111778363], [-57.610242967956381, -25.310610519910274], [-57.610448282069754, -25.311073114752162], [-57.61067737420106, -25.31156993977196], [-57.610901789403371, -25.312075366232733], [-57.611402901315117, -25.313154660023073], [-57.612223825499882, -25.314901902416253], [-57.613498298253035, -25.313685454942355], [-57.614612859350061, -25.312551451530485], [-57.615787155065846, -25.31139056967324], [-57.616608197848755, -25.310578264370985], [-57.616166826145424, -25.309682994660971], [-57.615722530278028, -25.308792419698353], [-57.616620161617654, -25.308262395742386], [-57.617340024317585, -25.307838206403549], [-57.618107393298892, -25.30737315877202], [-57.618622043001764, -25.306952775434734], [-57.618796003516699, -25.306750712206707], [-57.619429437618841, -25.305355767179424], [-57.619966927193374, -25.304170102796519], [-57.620167974044151, -25.303475836791932], [-57.620313709799866, -25.302913183520683], [-57.62072060912908, -25.30139782072283], [-57.621481224850974, -25.299901376945641], [-57.621741942415809, -25.299368813550103], [-57.621310867953071, -25.299668820881458]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "nombre": "TEMBETARY",
      "zona": 14,
      "ordenanza": "N� 10811\/83",
      "st_area_sh": 648416.00880299998
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[-57.584527607387393, -25.307576506656186], [-57.585514789230487, -25.309188023545037], [-57.586287096652839, -25.310444626572842], [-57.58713103825842, -25.311874480838661], [-57.588692928317947, -25.311316961222719], [-57.590395886236848, -25.310715672445564], [-57.592158702870094, -25.310099262435322], [-57.593497087469011, -25.309623252227365], [-57.595221650581699, -25.3089920976835], [-57.596306553094649, -25.308617613595604], [-57.595942897184671, -25.307314007133733], [-57.59568043018789, -25.306406926738969], [-57.595485390678867, -25.305758183535822], [-57.595263170336921, -25.304962201439473], [-57.595034439818548, -25.304187295941833], [-57.594659363353074, -25.302902733939312], [-57.593537518757628, -25.303146295860852], [-57.592446361205333, -25.303677838654608], [-57.590421512715402, -25.304673541442515], [-57.589169319399289, -25.305305798092846], [-57.588301879197793, -25.305725431818161], [-57.58732002871912, -25.306183983122239], [-57.586452238898516, -25.306617835807593], [-57.585588097459244, -25.307048333120203], [-57.585026726272368, -25.307345843544908], [-57.584527607387393, -25.307576506656186]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "nombre": "LOS LAURELES",
      "zona": 14,
      "ordenanza": "N� 10811\/83",
      "st_area_sh": 887316.61472199997
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[-57.570444434920375, -25.312075683726274], [-57.571142008550993, -25.312924744289052], [-57.571864335023889, -25.313781876029235], [-57.572557347570751, -25.314612576542022], [-57.573291398536611, -25.315474963364505], [-57.574051408669767, -25.316351293818904], [-57.576449652907037, -25.315635275011861], [-57.57786078738016, -25.315151668132877], [-57.579053484987227, -25.314736598044458], [-57.58046010045382, -25.314248328175715], [-57.581632971421307, -25.313823597847062], [-57.583966799272488, -25.312987781736243], [-57.58548251627078, -25.312441723378715], [-57.586207465569437, -25.312190249788596], [-57.58713103825842, -25.311874480838661], [-57.586287096652839, -25.310444626572842], [-57.585514789230487, -25.309188023545037], [-57.584527607387393, -25.307576506656186], [-57.58394383407871, -25.306624198055015], [-57.58344901162512, -25.30687726755437], [-57.582343054909146, -25.307390924650502], [-57.581303528809386, -25.307865771625128], [-57.580357706870792, -25.30830445408375], [-57.579721926520179, -25.308597385342509], [-57.579439204815792, -25.308758164483518], [-57.578375016812025, -25.309146371531689], [-57.57695692921525, -25.309628178583242], [-57.575765600614055, -25.310032005758778], [-57.574326343696782, -25.310524881196244], [-57.572361048180802, -25.311217994662648], [-57.57119448450343, -25.311742815984967], [-57.570444434920375, -25.312075683726274]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "nombre": "HIPODROMO",
      "zona": 14,
      "ordenanza": "N� 10811\/83",
      "st_area_sh": 1992664.25685
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[-57.574051408669767, -25.316351293818904], [-57.574817494148768, -25.317208658727374], [-57.57543895716514, -25.317938658332139], [-57.576379658442846, -25.319024308882284], [-57.576918664226334, -25.319642899104725], [-57.577303200863746, -25.320088296697151], [-57.578219974168782, -25.321161614354491], [-57.579060980859147, -25.322095567522098], [-57.580355411748322, -25.323592565279988], [-57.580815434829098, -25.324109035746464], [-57.581278875702012, -25.324625491206604], [-57.582178289858369, -25.325624368386062], [-57.582654213888041, -25.326119231541984], [-57.583127494481452, -25.326628117805114], [-57.584054234392163, -25.327661442158341], [-57.585513499542877, -25.329269210421629], [-57.58653651528703, -25.33040040792357], [-57.587185070281642, -25.329661830246256], [-57.587747122139852, -25.329021752412771], [-57.587077122149175, -25.328626421568821], [-57.588107940595791, -25.327198409352114], [-57.588558306376449, -25.3265667434367], [-57.588825636682763, -25.326200486542618], [-57.589234963317274, -25.325626973908232], [-57.589598648929368, -25.325079099424496], [-57.589346433534502, -25.324946790803892], [-57.58966263070598, -25.324462508423132], [-57.589898259186477, -25.324270751479197], [-57.59060887922903, -25.323856713727583], [-57.591322347765107, -25.323421161610383], [-57.592023983003514, -25.322985653619714], [-57.592743394093894, -25.322558132271993], [-57.593447990054727, -25.322125293128366], [-57.59418745789398, -25.321691478378806], [-57.593306734308115, -25.320501137328115], [-57.592415334389322, -25.319275198652793], [-57.59221720690654, -25.318994322373172], [-57.591543757258037, -25.318076001181311], [-57.591058494046131, -25.317416240012836], [-57.59067228517263, -25.316894681503733], [-57.590256220272479, -25.316301705331046], [-57.589810429450736, -25.315664136399384], [-57.588929002001876, -25.314451548715002], [-57.58804776592757, -25.313274722187778], [-57.58713103825842, -25.311874480838661], [-57.586207465569437, -25.312190249788596], [-57.58548251627078, -25.312441723378715], [-57.583966799272488, -25.312987781736243], [-57.581632971421307, -25.313823597847062], [-57.58046010045382, -25.314248328175715], [-57.579053484987227, -25.314736598044458], [-57.57786078738016, -25.315151668132877], [-57.576449652907037, -25.315635275011861], [-57.574051408669767, -25.316351293818904]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "nombre": "�U GUAZU",
      "zona": 15,
      "ordenanza": "N� 10811\/83",
      "st_area_sh": 1398912.5854199999
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[-57.53595947944526, -25.259271034986643], [-57.536058737262877, -25.259696803360626], [-57.536209404089412, -25.260054657829482], [-57.536328473490784, -25.260359581615081], [-57.536399579901321, -25.260823028831858], [-57.536546359703983, -25.261124475204877], [-57.536724146130226, -25.261411983870314], [-57.536905572840006, -25.261681163361793], [-57.537052946983728, -25.261937495047665], [-57.537256904304108, -25.262260199072834], [-57.537549496911247, -25.262586286212137], [-57.537690646887135, -25.262846444418621], [-57.53783678224184, -25.263203414028855], [-57.538101979161972, -25.263655373202525], [-57.538340718858649, -25.264096678402808], [-57.538526161667221, -25.264421311000422], [-57.538640686027996, -25.2646600790032], [-57.538715819805489, -25.264952210181381], [-57.538852452164257, -25.26536346681084], [-57.539127260844609, -25.265740069828013], [-57.539327327171634, -25.2660926487894], [-57.5395300170917, -25.266386726334115], [-57.539718282414505, -25.266731191480382], [-57.539954239301657, -25.26703528079479], [-57.540121985864069, -25.267378126297686], [-57.540301326539307, -25.267719058926733], [-57.540494152277596, -25.268107406285353], [-57.540716432080202, -25.268484698683014], [-57.540896609325387, -25.268832353353002], [-57.541011678764804, -25.269082965289357], [-57.541241345427935, -25.269401917945014], [-57.541501540883885, -25.269710928514407], [-57.541689943990747, -25.269992927249472], [-57.541828992077775, -25.270328205369314], [-57.541895404122393, -25.270744824985069], [-57.542011113971817, -25.271174072384564], [-57.542221032415448, -25.271562291183468], [-57.542390313107177, -25.271903306649531], [-57.54255777232995, -25.272206797825472], [-57.542712289545889, -25.272594918758085], [-57.542748003310507, -25.273051493254446], [-57.542690965157568, -25.273350096003828], [-57.542749050043369, -25.273637154347359], [-57.542770777242218, -25.273967076883981], [-57.542538372301856, -25.274582406285344], [-57.545198007200106, -25.275399406626928], [-57.545166941614184, -25.274991556118618], [-57.545207099714666, -25.274213606634127], [-57.54541535082145, -25.273163284826182], [-57.545646200436998, -25.272151987459615], [-57.545886565725226, -25.271083192479477], [-57.546106658004888, -25.269937820223781], [-57.546416984517585, -25.2684964458482], [-57.546714717196942, -25.267131537014119], [-57.546822430499681, -25.266643224438624], [-57.547551015719812, -25.263330941932868], [-57.548097008533688, -25.261112729835808], [-57.548273759385125, -25.260165638193346], [-57.54858480361726, -25.258894730656046], [-57.548794608466828, -25.258112113639928], [-57.548915419294183, -25.257664899816586], [-57.549036176407377, -25.257205929253459], [-57.549118365199412, -25.256797047974647], [-57.547977433084561, -25.257005829455242], [-57.544651834570487, -25.25756465789825], [-57.537511189508656, -25.258830290990456], [-57.53595947944526, -25.259271034986643]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "nombre": "SAJONIA",
      "zona": 10,
      "ordenanza": "N� 10811\/83",
      "st_area_sh": 773976.49521900003
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[-57.666655049325946, -25.302151515056181], [-57.666769194071009, -25.302199230903671], [-57.66695369979017, -25.302294565068074], [-57.667221270321669, -25.302439698417128], [-57.667433213076684, -25.302505638710169], [-57.667520833256411, -25.302547055253601], [-57.667644088630439, -25.302547005672736], [-57.667750967250925, -25.30257528153939], [-57.667898471822781, -25.302633150845484], [-57.668050874790538, -25.302745354080912], [-57.668216960260139, -25.302836589033717], [-57.668424557216234, -25.302948541752123], [-57.668553618511801, -25.302998130998795], [-57.668608950621646, -25.303022968189566], [-57.66867214934819, -25.303000541966107], [-57.668671585068275, -25.302465221136735], [-57.669059868646421, -25.301823674603742], [-57.669455113781822, -25.301129329424672], [-57.669684314894795, -25.300587439651665], [-57.66993397493637, -25.299808010318301], [-57.670202641430642, -25.29852721856339], [-57.670394324889813, -25.297761243315779], [-57.67066225675805, -25.296348539624084], [-57.670860136673895, -25.295391259404074], [-57.671079343074631, -25.294354732715913], [-57.670930068852904, -25.293596903137679], [-57.670769930377539, -25.293224793149989], [-57.670558919470338, -25.292682363617914], [-57.670519562196361, -25.29226310399164], [-57.6703920505174, -25.292031480989884], [-57.670465917929576, -25.291754498051322], [-57.670460584875201, -25.291450863514111], [-57.67045570210054, -25.291095618512589], [-57.67051791579825, -25.290657030912772], [-57.670293909941172, -25.290146642560519], [-57.670422475191934, -25.289883290678574], [-57.670533750611447, -25.289642838759573], [-57.670481621295792, -25.289374445543476], [-57.670298789660031, -25.289133508800909], [-57.66995960168898, -25.289024825211513], [-57.669660374109455, -25.288177012539776], [-57.669541035411832, -25.287706647801805], [-57.669533472121635, -25.28744586763316], [-57.669279507100299, -25.287230858754249], [-57.668922703623146, -25.287010773815293], [-57.668610413774502, -25.286834783732342], [-57.668002677211632, -25.285783387795778], [-57.667841947085215, -25.285197157934132], [-57.667386409193099, -25.284672781290485], [-57.667113721937881, -25.285124100889469], [-57.666913685224877, -25.286083652161768], [-57.666703850266565, -25.286958411732858], [-57.666566518215433, -25.287562819636399], [-57.66637581570096, -25.288402105868766], [-57.666126458269254, -25.289537161302885], [-57.66587454662946, -25.290700946058845], [-57.666852727562869, -25.290865662107034], [-57.666644405132708, -25.291791940583543], [-57.666430796065264, -25.29268128951211], [-57.666235839442571, -25.293575173750618], [-57.666030659786834, -25.294458325214858], [-57.665840845731644, -25.295364502975026], [-57.665628470224519, -25.296247560724716], [-57.665421995013553, -25.297129303765789], [-57.665199876262555, -25.298014070843802], [-57.665011969220068, -25.298899479746218], [-57.664904296859781, -25.299404176901881], [-57.664824539963831, -25.299686293863452], [-57.664426824609954, -25.300093771485614], [-57.664755939206586, -25.300330273854865], [-57.665102331411774, -25.300511915001415], [-57.665393817390722, -25.300803351877722], [-57.665669109867693, -25.301081898194816], [-57.665878591291808, -25.301297363543707], [-57.666139667986648, -25.301545786515899], [-57.666401749363921, -25.301790994176862], [-57.666655049325946, -25.302151515056181]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "nombre": "YTAY",
      "zona": 14,
      "ordenanza": "N� 10811\/83",
      "st_area_sh": 1469411.30277
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[-57.545190923362668, -25.298736808853516], [-57.54583025558788, -25.298070975699492], [-57.546559394341699, -25.297230970534699], [-57.54763465769593, -25.296004256701451], [-57.548659411659393, -25.294859990563694], [-57.549019204030607, -25.294441985987788], [-57.550171543968382, -25.293331675812567], [-57.550026966346323, -25.293012021661639], [-57.549928406574978, -25.292621559458819], [-57.549491049096524, -25.291137850254625], [-57.549062770219201, -25.289736814737381], [-57.548834287744633, -25.288778601453423], [-57.548539071096371, -25.287640810099443], [-57.54791857951885, -25.285474121291166], [-57.547574791209449, -25.283900331754236], [-57.547081673231972, -25.281966763916657], [-57.546640377686266, -25.280451403221281], [-57.546216154969059, -25.278864868774889], [-57.545792138079769, -25.277321786594552], [-57.545606546642325, -25.276627182736014], [-57.545198007200106, -25.275399406626928], [-57.542538372301856, -25.274582406285344], [-57.542553646811683, -25.274927592406918], [-57.542578533265527, -25.275286141721484], [-57.54246486859374, -25.275558426306432], [-57.542326455250496, -25.275803231641316], [-57.542468870778769, -25.276153877155892], [-57.542562224198903, -25.276575472180038], [-57.542086501644988, -25.276739143531032], [-57.54180876783564, -25.276945033827268], [-57.54158294451269, -25.277232820320279], [-57.541735284343076, -25.277493916173192], [-57.541450721458645, -25.277742210087677], [-57.541458568331571, -25.278073310605297], [-57.54152436278099, -25.278431458825672], [-57.541484034276444, -25.27869318322027], [-57.541569832057242, -25.278954593767217], [-57.541592927310504, -25.279342539396431], [-57.541487614570627, -25.279681910742816], [-57.541431310134712, -25.280065912402399], [-57.541313694280134, -25.280439298752313], [-57.540919828534484, -25.280709370463516], [-57.540692915353048, -25.281061617410224], [-57.540555555860344, -25.281494171936888], [-57.540627119960263, -25.281874405006523], [-57.540726648271104, -25.282148916722306], [-57.540823060390267, -25.282424578521834], [-57.540910732956533, -25.28273552099424], [-57.541041226969853, -25.283043607167833], [-57.541110987830052, -25.283428534231749], [-57.541147070358058, -25.283823387357476], [-57.541163147234364, -25.28420328890266], [-57.541151097118508, -25.284563027370986], [-57.540945630465046, -25.284835417004462], [-57.540837347536929, -25.28507241997465], [-57.540746549872082, -25.285367281227], [-57.540570224640575, -25.285674236984708], [-57.540812874298361, -25.286011513261062], [-57.541230708192543, -25.286371317868653], [-57.541131911768531, -25.286755496669947], [-57.541135849455792, -25.287127368432781], [-57.541315991696536, -25.287354588232876], [-57.541334337877352, -25.28770572276116], [-57.541462874861452, -25.288039546914124], [-57.541621881174308, -25.288381088498614], [-57.541738623420734, -25.288650310054344], [-57.541757636096648, -25.288909224528194], [-57.541587758572049, -25.289119712165128], [-57.541665160920672, -25.289370578320902], [-57.5418575311474, -25.289660180151778], [-57.541784395486033, -25.290090475746293], [-57.541930715993985, -25.29051536872208], [-57.542048380654229, -25.290949210363127], [-57.542154911086044, -25.29133501001299], [-57.541922645877122, -25.291909972530952], [-57.542269917070499, -25.292228408645538], [-57.542539841358732, -25.292517653836732], [-57.54291885195336, -25.292690514119748], [-57.54316670913154, -25.292999828290114], [-57.543514917297259, -25.293333606089682], [-57.543792958672348, -25.29367209555409], [-57.543769299979324, -25.294030959894389], [-57.543487631123689, -25.294298055632385], [-57.543383117280051, -25.294552318010616], [-57.543522144450087, -25.294818692381423], [-57.54337269449654, -25.295116421437584], [-57.543259395924714, -25.295388142177881], [-57.5433736919219, -25.295763810529184], [-57.54325779487835, -25.296118156999697], [-57.544205270456438, -25.297416204124286], [-57.545190923362668, -25.298736808853516]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "nombre": "SANTA MARIA",
      "zona": 14,
      "ordenanza": "N�10811\/83",
      "st_area_sh": 661468.68492599996
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[-57.545190923362668, -25.298736808853516], [-57.545827963981161, -25.299579780897918], [-57.546741677091937, -25.300929353929074], [-57.5477494472416, -25.302412047072966], [-57.548280324602324, -25.303216994488899], [-57.548878277412733, -25.304094494605863], [-57.549617381674544, -25.305189881125425], [-57.550417033168202, -25.306388178011073], [-57.551552776379772, -25.308106980044517], [-57.552345956550667, -25.309341692342528], [-57.553761256397458, -25.309409187752927], [-57.553563784710647, -25.30854840667703], [-57.553368611935369, -25.30731145776743], [-57.553160165487718, -25.306383979281794], [-57.552851401323188, -25.304528615595721], [-57.552550201994968, -25.302867368078726], [-57.552139067575396, -25.300508818099225], [-57.551630506691971, -25.298739136555625], [-57.551121192986429, -25.29679957709121], [-57.550461517043829, -25.294381473998406], [-57.550171543968382, -25.293331675812567], [-57.549019204030607, -25.294441985987788], [-57.548659411659393, -25.294859990563694], [-57.54763465769593, -25.296004256701451], [-57.546559394341699, -25.297230970534699], [-57.54583025558788, -25.298070975699492], [-57.545190923362668, -25.298736808853516]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "nombre": "VILLA AURELIA",
      "zona": 14,
      "ordenanza": "N�10811\/83",
      "st_area_sh": 2250039.4305699999
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[-57.553368611935369, -25.30731145776743], [-57.553563784710647, -25.30854840667703], [-57.553761256397458, -25.309409187752927], [-57.554233183599607, -25.310444881601338], [-57.554469081229946, -25.310947561033053], [-57.555343677095301, -25.312461033827248], [-57.555899855323304, -25.313498277993393], [-57.556696242348607, -25.314858486754506], [-57.557107611041673, -25.31560048426703], [-57.55772751514467, -25.316440042981338], [-57.558954675247207, -25.318174021861644], [-57.559670139931185, -25.319177674222356], [-57.560370496089661, -25.320220256243836], [-57.561251378229429, -25.319963765493863], [-57.561793682117248, -25.319812018374368], [-57.562549395581705, -25.319610910067478], [-57.564207354275311, -25.319135303361747], [-57.568057145022777, -25.318145569071966], [-57.570302038067098, -25.317558404640597], [-57.572164268321316, -25.31699696495691], [-57.572977538028304, -25.316738944078075], [-57.574051408669767, -25.316351293818904], [-57.573291398536611, -25.315474963364505], [-57.572557347570751, -25.314612576542022], [-57.571864335023889, -25.313781876029235], [-57.571142008550993, -25.312924744289052], [-57.570444434920375, -25.312075683726274], [-57.569738154322209, -25.31122130185091], [-57.569019930015862, -25.31037365490835], [-57.568322329673208, -25.309522316177205], [-57.567615987241595, -25.308667435132634], [-57.566530479092791, -25.307329245961931], [-57.565713113728265, -25.306334534531899], [-57.565115833386407, -25.305592034041819], [-57.564720946923806, -25.30510228919831], [-57.564293189812993, -25.304567352457418], [-57.563526206697219, -25.303618010073677], [-57.563127538425526, -25.303134954029943], [-57.562472788961522, -25.302350731373682], [-57.561663371830882, -25.302791404786568], [-57.560423653030739, -25.303455482180894], [-57.559211659592975, -25.304123644192011], [-57.55799883902322, -25.304784182304623], [-57.55577721419985, -25.306000597311122], [-57.554018128428631, -25.307017633217498], [-57.553368611935369, -25.30731145776743]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "nombre": "SAN VICENTE",
      "zona": 12,
      "ordenanza": "N� 10811\/83",
      "st_area_sh": 2755792.34516
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[-57.614612859350061, -25.312551451530485], [-57.615468318878634, -25.313232089041676], [-57.615720155779336, -25.313446141005684], [-57.615979497460046, -25.31374920067298], [-57.616280530500724, -25.314084324007005], [-57.616666979309429, -25.314845955201502], [-57.617077387741354, -25.315629428744074], [-57.61745219716969, -25.316307665668948], [-57.618090377323469, -25.317602948777303], [-57.618373382811633, -25.317852819594396], [-57.619364717132243, -25.318885526870218], [-57.619692471840054, -25.319243162295404], [-57.619255377164535, -25.319731195127478], [-57.619439108938259, -25.31996778713237], [-57.61961366917091, -25.320221576945347], [-57.619791868954756, -25.320502394458551], [-57.620538958465971, -25.321827545914427], [-57.621146848384569, -25.322821603777836], [-57.621589455795601, -25.323524797405891], [-57.620033076069852, -25.324955425822086], [-57.620911591272922, -25.325841051910544], [-57.621121554399046, -25.326276249309977], [-57.621191997439624, -25.32662664532906], [-57.621143413411048, -25.326913569307827], [-57.621210107695802, -25.327281799778358], [-57.621443427135198, -25.327640530225974], [-57.621735477108935, -25.32778515746913], [-57.622074319965876, -25.327835793736927], [-57.622422162738566, -25.327936679431691], [-57.622861505107394, -25.327927903991093], [-57.62319528302568, -25.327976331288252], [-57.62337429211383, -25.328208731464635], [-57.623448014546391, -25.328455683211942], [-57.623748151801671, -25.328758911032196], [-57.624023743161978, -25.328983018002578], [-57.624350923767722, -25.329216603545866], [-57.624634420237562, -25.329446666565879], [-57.624822757254385, -25.329827495970349], [-57.624951146454364, -25.330285147675593], [-57.625280694274061, -25.33064039497096], [-57.625511265240924, -25.330895160231449], [-57.625680312685361, -25.331320948382633], [-57.625898781312181, -25.331572026713861], [-57.626262978687379, -25.330608128057367], [-57.626840571073608, -25.328417987759074], [-57.626945288443153, -25.328023196047308], [-57.627188418653873, -25.32708949902689], [-57.62729573202131, -25.326731327588295], [-57.62751401360665, -25.325840607300389], [-57.62789943751909, -25.324347531121422], [-57.628376442697331, -25.322467927288272], [-57.628545370666878, -25.321810823138911], [-57.628922351288182, -25.320386274195251], [-57.629441001968793, -25.318365424590993], [-57.629704266668917, -25.317353903490297], [-57.629931860694569, -25.31646768240477], [-57.630166233061288, -25.31555839819961], [-57.630510196105007, -25.314170872021514], [-57.630661777575504, -25.313569577343007], [-57.630915933424568, -25.312542533388179], [-57.631004126574375, -25.312094251798726], [-57.631323091879388, -25.310537129061665], [-57.63167560051329, -25.308811672079216], [-57.631748432387397, -25.308340882509228], [-57.631873517180011, -25.307299809022506], [-57.631931403683701, -25.306406938946047], [-57.630891829983582, -25.306335596977284], [-57.629978697050532, -25.306277461648879], [-57.628785526199309, -25.306200139890453], [-57.628312344443714, -25.306172690873872], [-57.627934264874405, -25.306204160391346], [-57.627018798458835, -25.306430364120875], [-57.626404940070117, -25.306806148023721], [-57.625764530741257, -25.307170004605783], [-57.624774421197678, -25.307776098571825], [-57.623500692557663, -25.308600067666774], [-57.622541215861013, -25.307430426905228], [-57.621461561072607, -25.306062659204002], [-57.619966927193374, -25.304170102796519], [-57.619429437618841, -25.305355767179424], [-57.618796003516699, -25.306750712206707], [-57.618622043001764, -25.306952775434734], [-57.618107393298892, -25.30737315877202], [-57.617340024317585, -25.307838206403549], [-57.616620161617654, -25.308262395742386], [-57.615722530278028, -25.308792419698353], [-57.616166826145424, -25.309682994660971], [-57.616608197848755, -25.310578264370985], [-57.615787155065846, -25.31139056967324], [-57.614612859350061, -25.312551451530485]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "nombre": "VISTA ALEGRE",
      "zona": 12,
      "ordenanza": "N� 10811\/83",
      "st_area_sh": 2228926.80754
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[-57.596306553094649, -25.308617613595604], [-57.596699889619281, -25.309874969604092], [-57.596922483954103, -25.310665945297806], [-57.597058150315519, -25.311116934906035], [-57.597341267860564, -25.312153651790997], [-57.597663237475494, -25.313245412323599], [-57.597940584968867, -25.314166296462474], [-57.59820078475547, -25.315010463152237], [-57.598740180900776, -25.316946412147306], [-57.599080269864423, -25.318138984235759], [-57.599339413658626, -25.318932092003401], [-57.599844023674329, -25.32052053053863], [-57.599923089131018, -25.320766195524708], [-57.60015238702649, -25.321503244891392], [-57.600454265325112, -25.322475831960986], [-57.600632131657441, -25.323035785542906], [-57.600909586564804, -25.323943686961456], [-57.601554871286091, -25.324700350385974], [-57.602341875728172, -25.325606982435641], [-57.603347987210263, -25.326588248554042], [-57.603948373684077, -25.326087671048928], [-57.605479550348157, -25.324769801102185], [-57.604454781372283, -25.323724165220018], [-57.605814403008189, -25.322608881186294], [-57.606930871669675, -25.321663141890618], [-57.607914283889286, -25.320821156717248], [-57.609376453356916, -25.322219412218114], [-57.609305843511194, -25.321547810939197], [-57.608291202688662, -25.319638183604269], [-57.608169527343719, -25.318989276914039], [-57.607876259787126, -25.318294596630846], [-57.611399917482679, -25.317339219281614], [-57.611136975723319, -25.316748697141616], [-57.612678695736165, -25.315870015137421], [-57.612223825499882, -25.314901902416253], [-57.611402901315117, -25.313154660023073], [-57.610901789403371, -25.312075366232733], [-57.61067737420106, -25.31156993977196], [-57.610448282069754, -25.311073114752162], [-57.610242967956381, -25.310610519910274], [-57.610013837490925, -25.310105111778363], [-57.609789514683307, -25.309616848305723], [-57.609560452455185, -25.309124311884553], [-57.609326670373711, -25.308631795457135], [-57.609088106116168, -25.308126424629911], [-57.608897286189297, -25.307728135434207], [-57.608630015495507, -25.307145640838584], [-57.608410360295338, -25.306644481919509], [-57.608152642808243, -25.30608340310323], [-57.608038107021244, -25.305834988761031], [-57.607611206683586, -25.304895741595065], [-57.605646650893696, -25.305520446407851], [-57.60335530597407, -25.306250640232808], [-57.602242505362511, -25.306616003695705], [-57.601726150566158, -25.306789406762558], [-57.601225794956527, -25.306955454364555], [-57.600845556748183, -25.307088209727738], [-57.599744804762693, -25.307460793850357], [-57.59901227853679, -25.307704314468388], [-57.59792755193466, -25.308076820946059], [-57.596306553094649, -25.308617613595604]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "nombre": "NAZARETH",
      "zona": 14,
      "ordenanza": "N� 10811\/83",
      "st_area_sh": 1378298.3495100001
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[-57.593497087469011, -25.309623252227365], [-57.592158702870094, -25.310099262435322], [-57.590395886236848, -25.310715672445564], [-57.588692928317947, -25.311316961222719], [-57.58713103825842, -25.311874480838661], [-57.58804776592757, -25.313274722187778], [-57.588929002001876, -25.314451548715002], [-57.589810429450736, -25.315664136399384], [-57.590256220272479, -25.316301705331046], [-57.59067228517263, -25.316894681503733], [-57.591058494046131, -25.317416240012836], [-57.591543757258037, -25.318076001181311], [-57.59221720690654, -25.318994322373172], [-57.592415334389322, -25.319275198652793], [-57.593306734308115, -25.320501137328115], [-57.59418745789398, -25.321691478378806], [-57.594921161467127, -25.322712242261833], [-57.595292387823292, -25.323180197898012], [-57.596132173140305, -25.324348742456866], [-57.596640454005097, -25.325029048440744], [-57.597344635591782, -25.3261002604143], [-57.598224887586447, -25.327097336143183], [-57.599043175927449, -25.327949644777963], [-57.600000027680387, -25.327353457592491], [-57.601142856646376, -25.326486210308449], [-57.602341875728172, -25.325606982435641], [-57.601554871286091, -25.324700350385974], [-57.600909586564804, -25.323943686961456], [-57.600632131657441, -25.323035785542906], [-57.600454265325112, -25.322475831960986], [-57.60015238702649, -25.321503244891392], [-57.599923089131018, -25.320766195524708], [-57.599844023674329, -25.32052053053863], [-57.599339413658626, -25.318932092003401], [-57.599080269864423, -25.318138984235759], [-57.598740180900776, -25.316946412147306], [-57.59820078475547, -25.315010463152237], [-57.597940584968867, -25.314166296462474], [-57.597663237475494, -25.313245412323599], [-57.597341267860564, -25.312153651790997], [-57.597058150315519, -25.311116934906035], [-57.596922483954103, -25.310665945297806], [-57.596699889619281, -25.309874969604092], [-57.596306553094649, -25.308617613595604], [-57.595221650581699, -25.3089920976835], [-57.593497087469011, -25.309623252227365]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "nombre": "SAN PABLO",
      "zona": 14,
      "ordenanza": "N� 25584\/89",
      "st_area_sh": 3063667.0545600001
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[-57.560370496089661, -25.320220256243836], [-57.561903321522657, -25.32137378612309], [-57.563489637431772, -25.32261206492203], [-57.565405897834182, -25.324140623797792], [-57.56713550277766, -25.325481019512129], [-57.572654281597245, -25.329645362446033], [-57.574142803581388, -25.330777220771395], [-57.575210492977334, -25.331616968052831], [-57.57726677435047, -25.333200868242582], [-57.578325604274283, -25.33403097331415], [-57.581324705189544, -25.33638692880734], [-57.583027524437249, -25.337750477284231], [-57.584524161339949, -25.338883085078734], [-57.584930962338007, -25.339324795114521], [-57.58613042329096, -25.341386495294724], [-57.587145219332314, -25.34091405375959], [-57.588335670448117, -25.340321915142155], [-57.588418383470355, -25.340222460164966], [-57.588535052252276, -25.34001188529021], [-57.589004210111234, -25.340174756639559], [-57.58950450700079, -25.340407966757841], [-57.589726426417393, -25.340055154057463], [-57.590479484280429, -25.338836446988999], [-57.589179512487178, -25.338386351337263], [-57.588163670320228, -25.338034154197235], [-57.588784471522693, -25.336881583652133], [-57.589839403950144, -25.335161630921096], [-57.589139066572834, -25.334936070180703], [-57.58993305238981, -25.33425256329075], [-57.589434606062909, -25.333650814170813], [-57.589126900627555, -25.333294023686346], [-57.588619191229604, -25.33270514534577], [-57.587981030869841, -25.332029886395517], [-57.586996553495659, -25.330918037209745], [-57.58653651528703, -25.33040040792357], [-57.585513499542877, -25.329269210421629], [-57.584054234392163, -25.327661442158341], [-57.583127494481452, -25.326628117805114], [-57.582654213888041, -25.326119231541984], [-57.582178289858369, -25.325624368386062], [-57.581278875702012, -25.324625491206604], [-57.580815434829098, -25.324109035746464], [-57.580355411748322, -25.323592565279988], [-57.579060980859147, -25.322095567522098], [-57.578219974168782, -25.321161614354491], [-57.577303200863746, -25.320088296697151], [-57.576918664226334, -25.319642899104725], [-57.576379658442846, -25.319024308882284], [-57.57543895716514, -25.317938658332139], [-57.574817494148768, -25.317208658727374], [-57.574051408669767, -25.316351293818904], [-57.572977538028304, -25.316738944078075], [-57.572164268321316, -25.31699696495691], [-57.570302038067098, -25.317558404640597], [-57.568057145022777, -25.318145569071966], [-57.564207354275311, -25.319135303361747], [-57.562549395581705, -25.319610910067478], [-57.561793682117248, -25.319812018374368], [-57.561251378229429, -25.319963765493863], [-57.560370496089661, -25.320220256243836]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "nombre": "PRESIDENTE CARLOS ANTONIO LOPEZ",
      "zona": 10,
      "ordenanza": "N� 10811\/83",
      "st_area_sh": 1514530.12387
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[-57.659066933433941, -25.300490787364765], [-57.661332196062304, -25.29876886906148], [-57.661647782171194, -25.298859840297265], [-57.661930404047752, -25.299015732550167], [-57.662283909289215, -25.299252122087484], [-57.662680259347923, -25.299495391699438], [-57.663460575853605, -25.299016254384711], [-57.663806428373874, -25.299372145146997], [-57.664426824609954, -25.300093771485614], [-57.664824539963831, -25.299686293863452], [-57.664904296859781, -25.299404176901881], [-57.665011969220068, -25.298899479746218], [-57.665199876262555, -25.298014070843802], [-57.665421995013553, -25.297129303765789], [-57.665628470224519, -25.296247560724716], [-57.665840845731644, -25.295364502975026], [-57.666030659786834, -25.294458325214858], [-57.666235839442571, -25.293575173750618], [-57.666430796065264, -25.29268128951211], [-57.666644405132708, -25.291791940583543], [-57.666852727562869, -25.290865662107034], [-57.66587454662946, -25.290700946058845], [-57.664879617033641, -25.290536897680575], [-57.663900830446281, -25.290375128620752], [-57.662926593725537, -25.29020917861228], [-57.661943310708097, -25.29005988037251], [-57.660955348335584, -25.289889823977852], [-57.659972002539909, -25.289728049998114], [-57.658979496764672, -25.289562154566188], [-57.657982403127036, -25.289392119810948], [-57.657012750380446, -25.289226110022128], [-57.656029459249503, -25.289072617266356], [-57.655036964550234, -25.288906695976809], [-57.654017055609344, -25.288740889502392], [-57.65304731885066, -25.288574368004035], [-57.652048151280894, -25.288408102014362], [-57.650948210829895, -25.288225293198273], [-57.649848259400557, -25.288039832983323], [-57.648821048282009, -25.287864617373529], [-57.64788652221754, -25.287727956315049], [-57.64833585248315, -25.288371484112471], [-57.648500378663776, -25.288599163421054], [-57.649012810907493, -25.289328378879876], [-57.649666350536847, -25.29024523070176], [-57.650172060535439, -25.290943197400789], [-57.650684870706442, -25.291681766628329], [-57.651139274813794, -25.292329040111134], [-57.651408991100233, -25.292713231718711], [-57.652039436873508, -25.293585688676387], [-57.652624892994893, -25.294402075407188], [-57.653154907276154, -25.295137432815075], [-57.653629478634294, -25.29579176246142], [-57.654104138997155, -25.296461717981206], [-57.654616627361662, -25.297131504841413], [-57.655254281870022, -25.298057053935214], [-57.655659805827916, -25.298655416895532], [-57.656835469701001, -25.299157662204994], [-57.659066933433941, -25.300490787364765]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "nombre": "TACUMBU",
      "zona": 10,
      "ordenanza": "N� 10811\/83",
      "st_area_sh": 4119488.2916700002
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[-57.641442097752339, -25.289565806004493], [-57.641934956932026, -25.290285506174079], [-57.642440012923224, -25.291027107872956], [-57.642954376923683, -25.291815326138511], [-57.643474685439863, -25.292584304378259], [-57.64398900585109, -25.29336153973501], [-57.644471998977984, -25.294071967877258], [-57.644970646831474, -25.294787866863526], [-57.645536510596244, -25.295615940330531], [-57.646068913692446, -25.296413877376253], [-57.646385504324861, -25.296892650904113], [-57.646769194893537, -25.297461971274387], [-57.647157694068106, -25.298039920533313], [-57.647555759091084, -25.29862647865361], [-57.647915600224152, -25.299182922930306], [-57.648323305001568, -25.299791065032746], [-57.648697451609735, -25.300351769858022], [-57.649076336828145, -25.300908127242419], [-57.64947437455168, -25.301486027809858], [-57.649867727086097, -25.302076925366979], [-57.650246576961685, -25.302624627626624], [-57.650787944321465, -25.303413855334835], [-57.651257738998289, -25.304112554390127], [-57.651641475567772, -25.304681860627621], [-57.652010778732219, -25.305220949032552], [-57.652502845202427, -25.304953021937688], [-57.653383482521349, -25.30626892888441], [-57.653815662140133, -25.306931847748622], [-57.654041916981903, -25.307255530238887], [-57.654666371599255, -25.308134311592699], [-57.655233354963322, -25.308892152923391], [-57.665161474927984, -25.322328984470378], [-57.665663311584034, -25.321820082187113], [-57.666853894922646, -25.320907752613529], [-57.667355801638436, -25.320346190423052], [-57.667779521756188, -25.319553970112143], [-57.668152648459795, -25.319293911119196], [-57.668307326899573, -25.31966799483018], [-57.668721099589767, -25.319824684927617], [-57.669113166359722, -25.31946585708684], [-57.669592846623367, -25.318816860243832], [-57.670057151754158, -25.31777074801812], [-57.670231615014508, -25.317285447973681], [-57.670272873721458, -25.316725034319695], [-57.670440571555282, -25.315721899843744], [-57.670693770994781, -25.31514861633088], [-57.670880227126098, -25.314373405887128], [-57.671024425680585, -25.313957632377139], [-57.671171104718169, -25.313650702443159], [-57.671047778393884, -25.312585917912518], [-57.67083026498473, -25.31194912281536], [-57.670368144161166, -25.311183041980303], [-57.669945821244468, -25.310785507383066], [-57.669842702945125, -25.310475192985461], [-57.669659029236868, -25.310150590912173], [-57.66958498551756, -25.309821305170033], [-57.669511541793177, -25.309511095004328], [-57.66936767880879, -25.309110756807275], [-57.669378765221367, -25.308767706858088], [-57.669188234225572, -25.308549350752688], [-57.669024232880595, -25.308281295725479], [-57.669087366612985, -25.308003268102897], [-57.669151814287581, -25.307627372867543], [-57.669176682838206, -25.307370369866526], [-57.66909413878183, -25.30698197004893], [-57.668976018982207, -25.306489013210712], [-57.668993681439311, -25.306100110739251], [-57.668972530180689, -25.30563522438219], [-57.669063211268011, -25.305312363466093], [-57.669041966865123, -25.304985389552481], [-57.668988065930307, -25.304614365748009], [-57.668919647938743, -25.303960536337694], [-57.668672696501929, -25.303520239462241], [-57.66867214934819, -25.303000541966107], [-57.668608950621646, -25.303022968189566], [-57.668553618511801, -25.302998130998795], [-57.668424557216234, -25.302948541752123], [-57.668216960260139, -25.302836589033717], [-57.668050874790538, -25.302745354080912], [-57.667898471822781, -25.302633150845484], [-57.667750967250925, -25.30257528153939], [-57.667644088630439, -25.302547005672736], [-57.667520833256411, -25.302547055253601], [-57.667433213076684, -25.302505638710169], [-57.667221270321669, -25.302439698417128], [-57.66695369979017, -25.302294565068074], [-57.666769194071009, -25.302199230903671], [-57.666655049325946, -25.302151515056181], [-57.666401749363921, -25.301790994176862], [-57.666139667986648, -25.301545786515899], [-57.665878591291808, -25.301297363543707], [-57.665669109867693, -25.301081898194816], [-57.665393817390722, -25.300803351877722], [-57.665102331411774, -25.300511915001415], [-57.664755939206586, -25.300330273854865], [-57.664426824609954, -25.300093771485614], [-57.663806428373874, -25.299372145146997], [-57.663460575853605, -25.299016254384711], [-57.662680259347923, -25.299495391699438], [-57.662283909289215, -25.299252122087484], [-57.661930404047752, -25.299015732550167], [-57.661647782171194, -25.298859840297265], [-57.661332196062304, -25.29876886906148], [-57.659066933433941, -25.300490787364765], [-57.656835469701001, -25.299157662204994], [-57.655659805827916, -25.298655416895532], [-57.655254281870022, -25.298057053935214], [-57.654616627361662, -25.297131504841413], [-57.654104138997155, -25.296461717981206], [-57.653629478634294, -25.29579176246142], [-57.653154907276154, -25.295137432815075], [-57.652624892994893, -25.294402075407188], [-57.652039436873508, -25.293585688676387], [-57.651408991100233, -25.292713231718711], [-57.651139274813794, -25.292329040111134], [-57.650684870706442, -25.291681766628329], [-57.650172060535439, -25.290943197400789], [-57.649666350536847, -25.29024523070176], [-57.649012810907493, -25.289328378879876], [-57.648500378663776, -25.288599163421054], [-57.64833585248315, -25.288371484112471], [-57.64788652221754, -25.287727956315049], [-57.647537669821176, -25.287230208551499], [-57.646978859019548, -25.286448903208505], [-57.645559249830505, -25.287244706323705], [-57.644899471132383, -25.287607470467581], [-57.644136626417655, -25.288032452235019], [-57.643138167662627, -25.288592740080738], [-57.642348780552084, -25.289028570982904], [-57.641442097752339, -25.289565806004493]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "nombre": "ITA ENRAMADA",
      "zona": 13,
      "ordenanza": "N� 10811\/83",
      "st_area_sh": 2166996.15074
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[-57.644557906464172, -25.344782279628387], [-57.643010176127852, -25.34424293494132], [-57.642238996883336, -25.343970680988175], [-57.641666136463797, -25.343768353134134], [-57.641130063773154, -25.343575657169602], [-57.640831318376151, -25.343478446462605], [-57.640508564472647, -25.343310170742146], [-57.640031008390316, -25.343275435465539], [-57.638401844149357, -25.343059984210424], [-57.634529022507309, -25.342664076572206], [-57.634929800042492, -25.344041276634211], [-57.635219613547207, -25.345046070368578], [-57.635519387163384, -25.346060139633575], [-57.635838171063227, -25.347079058361278], [-57.636135104970087, -25.348088731411242], [-57.636442280206758, -25.349103029869472], [-57.635323531685131, -25.349390367439309], [-57.635537335618011, -25.350117327734001], [-57.635757449676383, -25.350864037648115], [-57.635971007858018, -25.351624874451705], [-57.636214193857867, -25.352377143098725], [-57.636408269593822, -25.353003247054499], [-57.636345232664844, -25.353582000883137], [-57.635728595321702, -25.355106265456769], [-57.636710994989059, -25.355097589468645], [-57.636630709565182, -25.356894995696685], [-57.63658822101015, -25.35849912420754], [-57.636751174712721, -25.361758513987294], [-57.636825833360952, -25.362269809630458], [-57.637335630414192, -25.362299241069433], [-57.637730975895707, -25.362234253689373], [-57.638036346419462, -25.363722766204656], [-57.638180187652431, -25.364590733851671], [-57.638624163770956, -25.365345229671824], [-57.637926552814243, -25.36572215190467], [-57.637402783437444, -25.366049422796195], [-57.636061137666481, -25.367258047446096], [-57.635274166492465, -25.367608858484896], [-57.635653937764111, -25.368498141795378], [-57.636270264186791, -25.368067270667908], [-57.637079380394177, -25.367521867747481], [-57.637683474364195, -25.367068423771219], [-57.638578910504876, -25.366666101116984], [-57.639083454495832, -25.366524871150769], [-57.639344200853458, -25.366285330228791], [-57.639843326682922, -25.366105250352518], [-57.640581152634972, -25.365409415633899], [-57.641424565711745, -25.364773967815982], [-57.642419449549919, -25.364261124014053], [-57.643207734850478, -25.363874119467877], [-57.644054173194206, -25.363238203826569], [-57.644437597968796, -25.362870687286549], [-57.645033491006032, -25.362628018184072], [-57.64580275568678, -25.361826247350198], [-57.646334152278406, -25.361243804349915], [-57.646740259321078, -25.360891876966271], [-57.646824867975752, -25.360436535097186], [-57.646713279375646, -25.359923520821685], [-57.646837705683026, -25.359516231132218], [-57.646868852181825, -25.358987564232436], [-57.646824578226649, -25.358528908165514], [-57.646592678103644, -25.358121506717783], [-57.646288630527927, -25.357709783616837], [-57.645806288925272, -25.357196939670224], [-57.645476508372482, -25.356585195599919], [-57.645317758370169, -25.355688584709924], [-57.645163183639866, -25.355004099396673], [-57.644985677958822, -25.354371778444175], [-57.644954262950385, -25.352773303516603], [-57.645008186960567, -25.350471379741698], [-57.6448502338868, -25.348951918779708], [-57.644775163558627, -25.347565152350565], [-57.644646293020941, -25.346600057301234], [-57.644577927555702, -25.345596674191089], [-57.644557906464172, -25.344782279628387]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "nombre": "BELLA VISTA",
      "zona": 15,
      "ordenanza": "N� 10811\/83",
      "st_area_sh": 1623340.17723
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[-57.584108508042632, -25.270845889864923], [-57.584187891985835, -25.271465422949877], [-57.584567026557529, -25.27266153331616], [-57.58468780343091, -25.273071576854434], [-57.584798234734421, -25.273447707634311], [-57.584946628492091, -25.273953326383495], [-57.585032943176088, -25.274255473861722], [-57.585271007411322, -25.275046389895483], [-57.585771742905926, -25.276743478669999], [-57.586230858033574, -25.278374270912835], [-57.5867185343157, -25.279993389568951], [-57.587060928154543, -25.281139192554726], [-57.587304132570551, -25.281968997750667], [-57.587419594805532, -25.282362948222573], [-57.587903819117813, -25.28391850379213], [-57.588149064637904, -25.284686155113011], [-57.588710837086182, -25.286508712641904], [-57.589626845868558, -25.286600533398367], [-57.591635694662791, -25.286795363513864], [-57.593090730854669, -25.286965338428352], [-57.593665630116718, -25.287024780762064], [-57.594952565929191, -25.287171896525422], [-57.59481668967419, -25.285817374843681], [-57.59467749814106, -25.284398243418543], [-57.594491059782754, -25.282367143056625], [-57.594461702357222, -25.282111701766038], [-57.59424157356807, -25.279822568440871], [-57.594143070726098, -25.278792955670045], [-57.593992862471652, -25.277308547387143], [-57.593807231037005, -25.27532427527315], [-57.593685386613977, -25.27410496426878], [-57.59354092436206, -25.27258031962883], [-57.593404661863623, -25.271133353073001], [-57.593354701389799, -25.270471047432416], [-57.593198579902484, -25.268896658147799], [-57.593063887547743, -25.267581486361504], [-57.59166691373985, -25.267988552206102], [-57.591234338059493, -25.26820972919429], [-57.590550019471806, -25.268541663077929], [-57.589918172680164, -25.26890131443448], [-57.589557678828214, -25.269094384662527], [-57.588479668928876, -25.268496229227917], [-57.587504553734298, -25.267940242986572], [-57.586541410308328, -25.26738299880715], [-57.585922553125236, -25.268268492292368], [-57.585094083776291, -25.269483564612322], [-57.584874542648571, -25.269852837828946], [-57.584108508042632, -25.270845889864923]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "nombre": "LA CATEDRAL",
      "zona": 11,
      "ordenanza": "N� 10811\/83",
      "st_area_sh": 833519.50697700004
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[-57.629078078127392, -25.283786849028544], [-57.628414828647664, -25.284167875738678], [-57.62878186228825, -25.284655360420302], [-57.629261017719713, -25.285330651515505], [-57.629608201025754, -25.285877372229173], [-57.630090158988907, -25.286574576022328], [-57.630491117196414, -25.287153956178042], [-57.631029759130826, -25.287927662757841], [-57.631739905274976, -25.288956460165192], [-57.632537639545255, -25.290077463234272], [-57.633300721060458, -25.29118270425613], [-57.634057207908711, -25.290742743388584], [-57.634813197933731, -25.290293120130528], [-57.635458341386368, -25.289915945453721], [-57.636138635717373, -25.289529729621101], [-57.636971035952186, -25.289059640833035], [-57.637775525981645, -25.288597799036022], [-57.638459365872187, -25.288230640329736], [-57.639095643243941, -25.287857512283534], [-57.639957526321815, -25.287360507689201], [-57.639200235829421, -25.286272044520928], [-57.638432231949253, -25.285144883104387], [-57.637728874889525, -25.284104959512469], [-57.637216812528109, -25.283338926924635], [-57.636812627046424, -25.282747469221], [-57.636197016780635, -25.282120455530727], [-57.635713155834097, -25.28163144746182], [-57.635202371053126, -25.2811060861785], [-57.635000792205645, -25.280907598808614], [-57.634610602325942, -25.280522926426013], [-57.635311868812238, -25.279947499991838], [-57.634562270699043, -25.279182061648623], [-57.634354594120929, -25.278826615962597], [-57.634040609383284, -25.279044517061319], [-57.633747124460697, -25.279271832150286], [-57.633456623225257, -25.279482737361956], [-57.63319690086977, -25.279784036072254], [-57.632955878725731, -25.280066068134655], [-57.632717160172746, -25.280274657441392], [-57.632353951959935, -25.280498088584299], [-57.63206153491894, -25.280605578663813], [-57.631645360704979, -25.280771935269723], [-57.631301767382666, -25.281014429756095], [-57.631013107166936, -25.281214591533132], [-57.630577107301619, -25.28157779512491], [-57.630226893396632, -25.281712965665523], [-57.629801636154362, -25.281924601849941], [-57.629221094797209, -25.282023498050634], [-57.628874199385081, -25.282053482315238], [-57.628071838936862, -25.282123586662323], [-57.629078078127392, -25.283786849028544]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "nombre": "BA�ADO CARA CARA",
      "zona": 15,
      "ordenanza": "N� 10811\/83",
      "st_area_sh": 933990.77024400001
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[-57.586566120329252, -25.247218434365085], [-57.586729627178308, -25.247539951187139], [-57.587098711433832, -25.247815918252179], [-57.587783480379763, -25.248315772820636], [-57.588285461892355, -25.248761208541239], [-57.589144605285121, -25.250044808308715], [-57.589267163772966, -25.250338351834191], [-57.589440362310995, -25.250631422217381], [-57.589658129965898, -25.250859385275767], [-57.590157291166719, -25.251314118765784], [-57.590470050382272, -25.25159801319586], [-57.590756568350621, -25.251802642132301], [-57.590908548425915, -25.252037204893373], [-57.590977391362969, -25.252306288688231], [-57.591448669595849, -25.252675373042056], [-57.591997063443699, -25.252861883725043], [-57.592262941658319, -25.252752615387255], [-57.59255970712664, -25.252781243519898], [-57.59235537659908, -25.253052208125588], [-57.592622227051059, -25.253269965750032], [-57.593000487202438, -25.25339085445539], [-57.593361020301188, -25.253417563262111], [-57.593687538105009, -25.253363928365712], [-57.59397227958474, -25.253269932930532], [-57.594133140720118, -25.253581984000338], [-57.594331387641432, -25.253851071844338], [-57.594631053479176, -25.254187801966641], [-57.594833135862466, -25.25441761637914], [-57.595046855706386, -25.254720725468708], [-57.597074487521233, -25.256189890997298], [-57.597314705843559, -25.255459636165099], [-57.597434030030875, -25.25388949381864], [-57.597832821838139, -25.253393055364281], [-57.598058600876875, -25.252575712711707], [-57.598269750020449, -25.252045150875443], [-57.598128722991916, -25.25161806885907], [-57.597890823174339, -25.25105044845079], [-57.597840947333147, -25.250686172396083], [-57.597971085949986, -25.249980989645689], [-57.598139864706269, -25.249528354496757], [-57.598484880551581, -25.249055566995679], [-57.598684169091051, -25.24828692702307], [-57.598772411450916, -25.247756862455702], [-57.599099888759511, -25.246977982613917], [-57.599358717234047, -25.246532249356534], [-57.597963734080651, -25.245779657630109], [-57.597656066527875, -25.245596819270215], [-57.597058856938517, -25.245565540004119], [-57.596708811944268, -25.245520946961836], [-57.59637152306744, -25.245462047873716], [-57.5955111828683, -25.245189263074117], [-57.595101355965411, -25.245060238313346], [-57.594720235188618, -25.24492483328153], [-57.59446005232985, -25.244751789177709], [-57.593627810152675, -25.244443458093109], [-57.5931543792695, -25.244217334828694], [-57.592754650479456, -25.243924043530406], [-57.592379441085505, -25.243814325646895], [-57.586855042124014, -25.24711794408185], [-57.586566120329252, -25.247218434365085]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "nombre": "BANCO SAN MIGUEL",
      "zona": 12,
      "ordenanza": "S\/D",
      "st_area_sh": 4122504.09234
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[-57.625422355407345, -25.25987220622007], [-57.625053556650158, -25.259623075978954], [-57.624873571469337, -25.259857289846636], [-57.624819162510477, -25.260160204827457], [-57.62464677659343, -25.260515279353235], [-57.624340653809732, -25.260838258920398], [-57.624296412894729, -25.260445115622964], [-57.624302419167201, -25.260026075474126], [-57.624522843103605, -25.259488532401306], [-57.624387205514665, -25.25904970144968], [-57.624412672079579, -25.258691253509429], [-57.624449459754267, -25.258314680547862], [-57.624673961428002, -25.257937074215192], [-57.624956330932832, -25.258039969528145], [-57.624848903527131, -25.258435388269071], [-57.624834595048505, -25.258858648337174], [-57.625012076462546, -25.259200416040539], [-57.625053556650158, -25.259623075978954], [-57.625365522407627, -25.25956064331454], [-57.625422355407345, -25.25987220622007], [-57.625639702393769, -25.260046426973663], [-57.625756607301795, -25.260370075231062], [-57.625722842535041, -25.260653538142346], [-57.625707276677701, -25.260982600726315], [-57.625580118202549, -25.261250096229457], [-57.625297152354186, -25.26133983831075], [-57.625118541927726, -25.261568303278317], [-57.625128726200529, -25.261845917861812], [-57.624984024453113, -25.262105916023188], [-57.624827927263432, -25.262596730360958], [-57.624667466040151, -25.262954166403478], [-57.624605349242735, -25.263530385403701], [-57.624469957867603, -25.263891199985466], [-57.624366219603921, -25.264168216370518], [-57.624198524692162, -25.264462588686111], [-57.623996755623637, -25.264850484875474], [-57.624020381347101, -25.265193974675618], [-57.624343833304181, -25.265201884001353], [-57.624659201202284, -25.265292590674974], [-57.62494720389823, -25.265251194452155], [-57.6254322597011, -25.264905407922331], [-57.625458855974799, -25.264569799591083], [-57.625768019036116, -25.264287557387753], [-57.626008379944565, -25.263917363706966], [-57.6262615175702, -25.263586901688154], [-57.626514988585107, -25.263162608088741], [-57.626669444538656, -25.262760299045308], [-57.626808469473652, -25.26252591923928], [-57.626892862382803, -25.262218440617449], [-57.627065841793183, -25.261829717331675], [-57.627390177362678, -25.261399875449985], [-57.627554717740111, -25.261092421563326], [-57.627566843349349, -25.260754413496336], [-57.627681268106286, -25.260395955498559], [-57.627887479950196, -25.260588674789506], [-57.628266002620677, -25.260671313901838], [-57.628646286922475, -25.260406116878208], [-57.62894611891236, -25.260525137845271], [-57.628826965041526, -25.260842752421116], [-57.628832725362408, -25.261236958357237], [-57.628683525632958, -25.261606660035223], [-57.62850545419024, -25.261906048057224], [-57.628429589079055, -25.262404909166772], [-57.628306917188915, -25.262706995098956], [-57.628218131850915, -25.263016525900699], [-57.628171983331349, -25.263285456856259], [-57.628195051505308, -25.263594046577893], [-57.628106624515503, -25.264040365003893], [-57.628209004483701, -25.264300184355765], [-57.628266733259494, -25.264718105037467], [-57.62822571651332, -25.265061701123138], [-57.628309895534251, -25.265390829533754], [-57.628177291944269, -25.265785420039233], [-57.628115665097802, -25.266221875977045], [-57.628523348589447, -25.266160383718503], [-57.628776595701645, -25.265848359878795], [-57.62911712960296, -25.265862407911733], [-57.629428978164114, -25.266069642418515], [-57.629292368031656, -25.266487857348483], [-57.629520831053192, -25.266817411897296], [-57.629990839484599, -25.266934215440404], [-57.630442268965815, -25.266860511675311], [-57.630677112486637, -25.266643840475648], [-57.630702345903288, -25.26635396282925], [-57.630699324258636, -25.266096682885973], [-57.630753793527916, -25.265844723645319], [-57.630856156953357, -25.26551638993956], [-57.631221116625859, -25.265301423901235], [-57.631455750941278, -25.265651776828992], [-57.631433750573088, -25.266052349171666], [-57.631738371751389, -25.266288367906501], [-57.631975450114226, -25.266742979145835], [-57.63214810152386, -25.267079841055224], [-57.632515143368046, -25.267213144328952], [-57.632806243886932, -25.267524336373882], [-57.632834881418873, -25.267842723512164], [-57.633068712633488, -25.268012072366595], [-57.633355654557036, -25.2680762387999], [-57.633659629993538, -25.268248547491492], [-57.634007253167823, -25.26847658347463], [-57.63434345160691, -25.268658910620115], [-57.634740597296165, -25.26892842629929], [-57.635167227910927, -25.268857782967597], [-57.635229928917767, -25.268507560390187], [-57.635483222324531, -25.268269031759537], [-57.635307841378193, -25.267982251215589], [-57.635175290605012, -25.267673247429205], [-57.635414529614742, -25.26739840579733], [-57.635699695377461, -25.26712485151003], [-57.636025220719944, -25.267158933371576], [-57.636325513574938, -25.267492296253902], [-57.636621695135922, -25.267808431747664], [-57.636940098191381, -25.268086901517655], [-57.637224476300688, -25.268410385941309], [-57.637367228957267, -25.268692681437521], [-57.637499796477158, -25.268924139840323], [-57.637634631186458, -25.269171827695075], [-57.637783206962361, -25.269390947045586], [-57.637974012624404, -25.269679168593619], [-57.638173935983829, -25.269927295185532], [-57.638580900796121, -25.270152875493693], [-57.638866396292173, -25.270334233910102], [-57.639269350025771, -25.270291460500758], [-57.639603684311602, -25.270136525949127], [-57.63973309626757, -25.269810562663455], [-57.64012386202598, -25.269737255604582], [-57.640410883396065, -25.269708953679608], [-57.640539108069788, -25.270020293837948], [-57.640607121105887, -25.270341306686092], [-57.640828021784849, -25.27052776924128], [-57.641084810678876, -25.270394114931907], [-57.641280341011885, -25.270078111768967], [-57.641704907324247, -25.270089351605616], [-57.642138800057239, -25.270176825822798], [-57.642638168509805, -25.27032335786587], [-57.64302196309324, -25.270486377355535], [-57.643430183466315, -25.270620897778738], [-57.643858306485946, -25.270771867604733], [-57.644220540919363, -25.270861850719736], [-57.644638413166412, -25.270906703458643], [-57.645016431806319, -25.271017614043725], [-57.645386348689378, -25.271180835129201], [-57.645748219484005, -25.271243708604924], [-57.646073238665537, -25.271259938872003], [-57.646337216936331, -25.271143628442161], [-57.646266523998392, -25.270770143781419], [-57.645806944257281, -25.270620594621839], [-57.64541784760587, -25.270623252887145], [-57.64514580460127, -25.270385313715607], [-57.644699370400303, -25.270115207396159], [-57.644533596166823, -25.269720790978788], [-57.644342940618522, -25.269505489835076], [-57.644081176537128, -25.269306785056123], [-57.643719831822693, -25.269012720531659], [-57.643380928634535, -25.268819129740837], [-57.643148143107588, -25.268622384758373], [-57.642908969918253, -25.268477916212369], [-57.642526163035285, -25.268256225077845], [-57.642161557070331, -25.268060731311039], [-57.641854167341656, -25.267834660132859], [-57.641483354600759, -25.267597749302929], [-57.641192096617488, -25.267433742093996], [-57.640937617995306, -25.267216963463902], [-57.64059029520147, -25.266975405123247], [-57.640310601362465, -25.266783152104786], [-57.640011229288902, -25.266569523095303], [-57.639736186930868, -25.266322503743993], [-57.639566877288409, -25.266101028858024], [-57.639292557160168, -25.26583073956122], [-57.639053751332035, -25.265616627679901], [-57.63874104208498, -25.265395771597486], [-57.638416071280901, -25.265130286289224], [-57.638171461647687, -25.264889933065234], [-57.637843920697769, -25.264710417134999], [-57.63750696184313, -25.264530241272851], [-57.637214787302639, -25.264374100820923], [-57.636854040650547, -25.264133504278032], [-57.636494284664323, -25.263937883947928], [-57.63603916290603, -25.263767837774939], [-57.635724104613914, -25.26355410388841], [-57.635505338018056, -25.263370939992082], [-57.635292344788347, -25.263186436987382], [-57.63503034967659, -25.263002417167257], [-57.634768354296099, -25.262767200722251], [-57.634436921448952, -25.262565369656265], [-57.634117141125202, -25.262353749371425], [-57.633772758932743, -25.262070045716818], [-57.633387754697459, -25.261742792920593], [-57.633008841219741, -25.261532995122945], [-57.632432204817519, -25.261205180509766], [-57.632086105680564, -25.261004885105244], [-57.631781941415014, -25.260850282168349], [-57.631449374963744, -25.260629115806942], [-57.631098021642266, -25.260453179292234], [-57.630679503269448, -25.260189730536666], [-57.630432660697956, -25.260034598128517], [-57.630105739282058, -25.259888840205484], [-57.629780432523411, -25.259658986936763], [-57.629552405922084, -25.259498188336302], [-57.62921453507559, -25.259353077408271], [-57.628727847255512, -25.259090952859552], [-57.628272123167349, -25.258832253805423], [-57.627923251178473, -25.25866616382913], [-57.627629681688241, -25.258484127702634], [-57.627314505396647, -25.258220858325856], [-57.626897114963398, -25.257934974789229], [-57.626591996078659, -25.257742145436261], [-57.626298668985626, -25.257665214369908], [-57.626014985106998, -25.257566892079794], [-57.625760775008146, -25.257451189880133], [-57.62541261872822, -25.257299909739697], [-57.624969849609172, -25.256889732949148], [-57.624542099898306, -25.256600322989236], [-57.62415886262832, -25.256399973214158], [-57.623856286472623, -25.256387608712771], [-57.62332217548699, -25.256348423666235], [-57.622901397907157, -25.256353239859941], [-57.622610044234094, -25.256309361604451], [-57.622238867175724, -25.256238802802844], [-57.621814923798965, -25.255892721700089], [-57.621345838645901, -25.255793933749757], [-57.62092466111487, -25.255605892767989], [-57.620571639820646, -25.255404111494041], [-57.620202340895169, -25.255287501514314], [-57.619827640410172, -25.255145401367429], [-57.619475225688966, -25.25500972945358], [-57.619185305285185, -25.254905138418259], [-57.618902275768541, -25.2548187567124], [-57.618543985900992, -25.254770233800105], [-57.618176677812265, -25.254692477384559], [-57.617826384937352, -25.254626229502144], [-57.617427096899981, -25.254620529800299], [-57.617040497467492, -25.254594975840771], [-57.616688528875656, -25.254397096320293], [-57.616335883704515, -25.254211713290427], [-57.615919562354875, -25.254034964419976], [-57.615576253914725, -25.253884324978593], [-57.615292018086379, -25.25377199229963], [-57.614974439300646, -25.253669197719447], [-57.614580155940864, -25.253497707379697], [-57.614191733972646, -25.253352013261161], [-57.613876908481963, -25.253166387463089], [-57.613358869415954, -25.252983959392953], [-57.612975912449471, -25.252888620220535], [-57.612675623514178, -25.252868707114896], [-57.612328512604414, -25.252803125486714], [-57.612015203579261, -25.252673172944036], [-57.611626445452352, -25.2524988937869], [-57.611209912419106, -25.252335490138218], [-57.610902522278508, -25.252222078872336], [-57.610595935349622, -25.252137333529319], [-57.610393015092605, -25.251957352844322], [-57.610090883859193, -25.251826919188428], [-57.609699173966312, -25.251680479827481], [-57.600492373997447, -25.263226489105701], [-57.600653465449412, -25.263861361871182], [-57.600587657551692, -25.264285572346282], [-57.600619729061052, -25.264759242608147], [-57.6008413145682, -25.265205043932127], [-57.60177356976947, -25.265656624203565], [-57.602519445990602, -25.26592976991703], [-57.603234905390266, -25.266240600958657], [-57.60382893587164, -25.266966999749283], [-57.604717252698698, -25.267615873491607], [-57.605945155460795, -25.268336784526998], [-57.607099294917937, -25.268739334943117], [-57.607572623542701, -25.269217619872265], [-57.608160251907165, -25.269680138352832], [-57.608734780959516, -25.270213060946062], [-57.609288290019222, -25.270577833656741], [-57.609778485375436, -25.271062159658101], [-57.610065763703268, -25.271330147197482], [-57.611148451858682, -25.271899194500307], [-57.61151046633605, -25.271975694502093], [-57.61168181773386, -25.272323391141779], [-57.612147275903943, -25.272331120312884], [-57.612535786098341, -25.272074557715062], [-57.612937830209212, -25.271823924177987], [-57.613443312562083, -25.271433439774768], [-57.61372030644079, -25.271290814839407], [-57.614005823608821, -25.271141247461319], [-57.614291269739816, -25.271340726709784], [-57.614610891451719, -25.271466976205581], [-57.614805289559044, -25.271234478280853], [-57.614824606688892, -25.27096295575754], [-57.61458805236267, -25.270665995457982], [-57.614392034228985, -25.270389811203611], [-57.614321932646995, -25.270052188783048], [-57.614285748605745, -25.269541300947765], [-57.614223442302169, -25.269117725039305], [-57.614616063880639, -25.268807030512964], [-57.615134689987066, -25.268872837658456], [-57.615415931144497, -25.268709441780217], [-57.615620660170421, -25.268336048456835], [-57.615874191115928, -25.267852164383299], [-57.616118798892131, -25.267417049844344], [-57.61641916944366, -25.266853460881581], [-57.616676238458403, -25.266269688578596], [-57.616750213579401, -25.265961737957582], [-57.616843814864282, -25.265720799599059], [-57.617054298191434, -25.265342417104147], [-57.61724227666928, -25.265026844771434], [-57.617505651743116, -25.264847798616483], [-57.617768817103219, -25.264527782386015], [-57.618000454966527, -25.264256857078927], [-57.618209087075009, -25.26406181476953], [-57.618365338383477, -25.263731468247805], [-57.618533481578396, -25.263471413400605], [-57.618652670075548, -25.263195601321861], [-57.618809433106257, -25.262883978593944], [-57.618954849044023, -25.262543269282158], [-57.619022735278421, -25.262255973946161], [-57.619057188697468, -25.261938710389089], [-57.619234227870223, -25.261429424364668], [-57.619347104386854, -25.26096517748422], [-57.619562917173745, -25.260566548998447], [-57.619832856438357, -25.260321224849587], [-57.619994564358365, -25.260016468499892], [-57.620043958278835, -25.259648203937338], [-57.620049301277085, -25.259205375798096], [-57.620069189334934, -25.258688835197649], [-57.620124145083288, -25.258392040277776], [-57.620243658614882, -25.25811577577208], [-57.620463276822733, -25.257925073870922], [-57.62078582535333, -25.257929805534889], [-57.620904336955306, -25.25827474496533], [-57.620562131751463, -25.258446324290706], [-57.620472983082088, -25.258895404254883], [-57.620529331073115, -25.259209601866296], [-57.620576853114223, -25.259558755428859], [-57.620621188268316, -25.259895308638271], [-57.620752256864726, -25.260126240224007], [-57.62117939551058, -25.260193311656359], [-57.621295683984449, -25.260443965074042], [-57.621281097683351, -25.260867561068448], [-57.621264251819426, -25.261318421299965], [-57.621027387234321, -25.261552821144811], [-57.620992673206736, -25.261807673258041], [-57.620821846785525, -25.262132265487061], [-57.620602925537398, -25.262456141304682], [-57.620334940273956, -25.262769614017095], [-57.620024378517286, -25.263189040339007], [-57.61985347295424, -25.263551140592142], [-57.619714269438951, -25.263904236072008], [-57.619379983045249, -25.264043017133389], [-57.619026096105095, -25.264102423565429], [-57.618775121092149, -25.264287845573651], [-57.618655721228791, -25.264562658036379], [-57.618517628198127, -25.264971966712285], [-57.618274298053045, -25.265387102698288], [-57.61813918979086, -25.265698495077558], [-57.618468981404384, -25.266041276141873], [-57.618513981828748, -25.266381542978156], [-57.618408571997691, -25.266726087363505], [-57.618381336330287, -25.267068957765741], [-57.618304525292402, -25.267317871908602], [-57.618389052320403, -25.267580464977424], [-57.618689362394448, -25.267306709771489], [-57.618867515087082, -25.266999042155735], [-57.619089659163549, -25.266719338588743], [-57.619220732045903, -25.266368004481585], [-57.619378926260424, -25.265942613489401], [-57.619584025118904, -25.265576692227302], [-57.619823108641469, -25.265330334479952], [-57.620065034694782, -25.264793517759568], [-57.620227090522349, -25.264509129741192], [-57.620537876867047, -25.264190426611869], [-57.62079635235753, -25.264008068446902], [-57.62095335014908, -25.26377433183098], [-57.62090955057149, -25.263493013119863], [-57.621009231172152, -25.26321631591032], [-57.621179658557573, -25.262966125099606], [-57.621281701697107, -25.26265372858979], [-57.621292596316344, -25.262134804015648], [-57.621447390123073, -25.261808776986321], [-57.621776262466781, -25.261892800324759], [-57.621995453362466, -25.262065313709421], [-57.621984039513045, -25.262463417822183], [-57.6220450601378, -25.262932645635622], [-57.622147349169481, -25.263459875317533], [-57.622503899024409, -25.263545362431991], [-57.622871709610038, -25.263463418543029], [-57.62322471615736, -25.263378992368466], [-57.623577527709315, -25.263583488430136], [-57.623904548862335, -25.263535513350639], [-57.624028448592583, -25.263274724604898], [-57.623941608885552, -25.262969604881803], [-57.624057959755923, -25.262595187409509], [-57.624273208428178, -25.262251281806236], [-57.624429699911651, -25.26195310978899], [-57.624493654380849, -25.261585457008554], [-57.624633464372934, -25.261212607747829], [-57.62501263876085, -25.260971568415524], [-57.625214818179423, -25.260688518660771], [-57.625372570962803, -25.260322760173818], [-57.625422355407345, -25.25987220622007]]], [[[-57.627924616493608, -25.268353669083556], [-57.627786216461402, -25.26782994714889], [-57.627520660579179, -25.268184363461263], [-57.627627077718756, -25.268506888452876], [-57.627924616493608, -25.268353669083556]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "nombre": "LOMA PYTA",
      "zona": 15,
      "ordenanza": "N� 472\/14",
      "st_area_sh": 4568207.6365700001
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[-57.539762062781769, -25.236216162409896], [-57.540108374222562, -25.236810607697976], [-57.540480161821023, -25.237563921773049], [-57.540925674273652, -25.238284443161547], [-57.541256313000268, -25.238801814766319], [-57.541725650206857, -25.239350110539689], [-57.541985651250279, -25.239628001973632], [-57.542287108855938, -25.239949547905887], [-57.542512641892309, -25.240164991361691], [-57.543185902395862, -25.24080232026504], [-57.542535801196657, -25.241308705426771], [-57.541511638346883, -25.242104176031976], [-57.540980644173736, -25.242471034826103], [-57.54041891935276, -25.242786787461153], [-57.539122178847421, -25.243497878384655], [-57.537387738326146, -25.244455960520046], [-57.535817009291719, -25.245298192714984], [-57.534372758709523, -25.246093002885168], [-57.533789881196263, -25.246408808016223], [-57.533544098270347, -25.246544138235311], [-57.532943764706019, -25.246803806962635], [-57.532293842733019, -25.247171775568642], [-57.531867671437496, -25.24737390624772], [-57.531493640971497, -25.246886567575039], [-57.530656630996546, -25.247380574074381], [-57.530797263787285, -25.247751153595644], [-57.530938515622225, -25.248077994009094], [-57.53110862870583, -25.248296120163008], [-57.531432874381323, -25.248573387075364], [-57.531922389680744, -25.248704193221947], [-57.532323049167019, -25.248702330677851], [-57.532677438092776, -25.248784648653874], [-57.53288824518539, -25.249090655601048], [-57.532963168852973, -25.249431174287661], [-57.532942336429102, -25.249726390923573], [-57.5328712245744, -25.250026617595424], [-57.532961854589864, -25.250327496009071], [-57.533324731049625, -25.250344853063414], [-57.533598716353076, -25.250434547140504], [-57.533730364916778, -25.250664598438195], [-57.533769599970292, -25.250928498666827], [-57.533701312959103, -25.251252902848801], [-57.533650693491339, -25.25153199655654], [-57.533617156814806, -25.251837363359886], [-57.533620131835541, -25.252142156626245], [-57.533626494123659, -25.252495616732826], [-57.533604202768259, -25.252766637672103], [-57.533614258097877, -25.253195791878888], [-57.533781587351442, -25.253646898902062], [-57.533889383433248, -25.253964768646465], [-57.533992280680117, -25.254241782918506], [-57.53408745517978, -25.254553181689104], [-57.534237856453515, -25.254854527376253], [-57.534403732992061, -25.25517795613144], [-57.534514939326073, -25.255452074508291], [-57.53461486183879, -25.255869181491899], [-57.534801123042769, -25.256369331988697], [-57.534975799690045, -25.256668105481179], [-57.53510136652524, -25.256923764375045], [-57.535205324702822, -25.257197147120674], [-57.535291264855616, -25.257442474039333], [-57.535346273206358, -25.257693915636796], [-57.535477908086605, -25.257995925705185], [-57.535706665469853, -25.258401425297311], [-57.535831768115976, -25.258812581747918], [-57.53595947944526, -25.259271034986643], [-57.537511189508656, -25.258830290990456], [-57.544651834570487, -25.25756465789825], [-57.547977433084561, -25.257005829455242], [-57.549118365199412, -25.256797047974647], [-57.551566105983525, -25.256672697455439], [-57.558886620901163, -25.256512295295984], [-57.56645276113084, -25.256489334725174], [-57.565717578832967, -25.256055708315142], [-57.564504648561353, -25.255531196383458], [-57.563822530252466, -25.255198357282598], [-57.562817706170215, -25.254734455634896], [-57.561500377283856, -25.254096926717637], [-57.560161783409825, -25.253350801478494], [-57.559849233406233, -25.253167727344785], [-57.558843900292352, -25.252585686388109], [-57.557932540105369, -25.252102498928714], [-57.557375633388482, -25.251879276164356], [-57.557014133410206, -25.251740268915938], [-57.557232789753165, -25.25148070451085], [-57.557756210354626, -25.251075814253717], [-57.557459058631956, -25.250674653952608], [-57.557755184303154, -25.250330951634595], [-57.557920002149928, -25.249990436824383], [-57.557908534552816, -25.249683297288914], [-57.557884295853889, -25.249297753388099], [-57.557853640144216, -25.248976862384652], [-57.557803391067743, -25.248477349522634], [-57.557735457765453, -25.248125051128355], [-57.55766095362673, -25.247779741824882], [-57.557563834919918, -25.247408865747687], [-57.55746110861557, -25.247026449876525], [-57.557227637059626, -25.246401579183718], [-57.556847299649682, -25.245564370900318], [-57.556565864045197, -25.244967713217228], [-57.556367249206694, -25.244603680777399], [-57.556222338613601, -25.244349270513009], [-57.556106832754587, -25.244110047998287], [-57.555522690919538, -25.243025606717044], [-57.554834584090408, -25.241906799372469], [-57.554143996880796, -25.242141336122412], [-57.553923813794341, -25.242203031290227], [-57.553792772826661, -25.241954673792215], [-57.552141394500353, -25.24266409333892], [-57.549953512539034, -25.240888643771523], [-57.548987279468761, -25.240098496215239], [-57.548590335726026, -25.239773886303233], [-57.547834701769126, -25.239342444402062], [-57.547322173452905, -25.239864638459604], [-57.546989077924337, -25.239296520293848], [-57.546804778916346, -25.238980033823619], [-57.546659441242831, -25.238631728323686], [-57.546470193878527, -25.238158085873835], [-57.546301274249409, -25.237665808402397], [-57.546162753756548, -25.23726218671942], [-57.546045234703705, -25.23691975857211], [-57.545905023095315, -25.236507907884363], [-57.545769683031146, -25.23610063557927], [-57.545632433327818, -25.235685509984048], [-57.54552605415752, -25.235363756239138], [-57.545424264909165, -25.235055882556576], [-57.545325187513143, -25.234756209346376], [-57.545198029330827, -25.234371600836042], [-57.541901251830282, -25.235487355607461], [-57.541447472888692, -25.235643693539149], [-57.540725139098299, -25.235896096716967], [-57.539762062781769, -25.236216162409896]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "nombre": "SAN BLAS",
      "zona": 15,
      "ordenanza": "N� 10811\/83",
      "st_area_sh": 1187467.3971500001
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[-57.530656630996546, -25.247380574074381], [-57.531493640971497, -25.246886567575039], [-57.531867671437496, -25.24737390624772], [-57.532293842733019, -25.247171775568642], [-57.532943764706019, -25.246803806962635], [-57.533544098270347, -25.246544138235311], [-57.533789881196263, -25.246408808016223], [-57.534372758709523, -25.246093002885168], [-57.535817009291719, -25.245298192714984], [-57.537387738326146, -25.244455960520046], [-57.539122178847421, -25.243497878384655], [-57.54041891935276, -25.242786787461153], [-57.540980644173736, -25.242471034826103], [-57.541511638346883, -25.242104176031976], [-57.542535801196657, -25.241308705426771], [-57.543185902395862, -25.24080232026504], [-57.542512641892309, -25.240164991361691], [-57.542287108855938, -25.239949547905887], [-57.541985651250279, -25.239628001973632], [-57.541725650206857, -25.239350110539689], [-57.541256313000268, -25.238801814766319], [-57.540925674273652, -25.238284443161547], [-57.540480161821023, -25.237563921773049], [-57.540108374222562, -25.236810607697976], [-57.539762062781769, -25.236216162409896], [-57.538475072685863, -25.236573415697013], [-57.538173523910622, -25.236642788078164], [-57.536905039067186, -25.237052372781331], [-57.536120252400188, -25.237289820080861], [-57.533844570159417, -25.237961666021576], [-57.532803751815543, -25.238280065764169], [-57.532266475812733, -25.238615796916029], [-57.531751140314022, -25.23888664844009], [-57.531475378296165, -25.239098324431566], [-57.531218714277436, -25.239263113249095], [-57.530871891738215, -25.239410667530848], [-57.530169007631578, -25.239827624468635], [-57.529775931618346, -25.240058423270536], [-57.527834224472791, -25.241161299071965], [-57.526847665725221, -25.241707666354845], [-57.525084182783615, -25.242654025890339], [-57.525285417837232, -25.243226258403883], [-57.525278216210189, -25.243685199535356], [-57.525323001555869, -25.244143954860046], [-57.52562683880226, -25.244395972346343], [-57.526119703827902, -25.244619125353207], [-57.526450119844135, -25.244526179653452], [-57.526725381362816, -25.244452208933815], [-57.527012981730387, -25.244493576113285], [-57.527445704905162, -25.244580395513271], [-57.527847203606257, -25.244783211542408], [-57.528132112026022, -25.244984859411353], [-57.528665748532553, -25.245474561696192], [-57.529029240378335, -25.245828489446907], [-57.529133508140511, -25.246167994101171], [-57.529109547070121, -25.246468726664332], [-57.529114917017786, -25.246740655974094], [-57.529222189572963, -25.247075815988822], [-57.529708927096678, -25.247042393829616], [-57.530184719024255, -25.246918367986364], [-57.530445959565689, -25.24709125804144], [-57.530656630996546, -25.247380574074381]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "nombre": "SANTA ANA",
      "zona": 11,
      "ordenanza": "N� 102\/12",
      "st_area_sh": 1619911.4466500001
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[-57.646111771562651, -25.314030041234943], [-57.64632159847848, -25.314257690228093], [-57.646554308277302, -25.314640308467006], [-57.646638579815303, -25.315352248496406], [-57.646945933859726, -25.315880097690858], [-57.647670558699325, -25.316975547478421], [-57.647907728776609, -25.317315356157934], [-57.649185683231373, -25.319055417923934], [-57.649477393331509, -25.318916301051939], [-57.649830981627865, -25.318769788594569], [-57.65011009200807, -25.318691630208701], [-57.650489464040447, -25.318709588392394], [-57.650802134295049, -25.318474960133329], [-57.651479151701047, -25.318699637532614], [-57.651911861118194, -25.318951234620197], [-57.652183551707786, -25.319109372878071], [-57.652644426328202, -25.319373534352177], [-57.653184892853318, -25.319686267960972], [-57.653468796371698, -25.319850543560431], [-57.653859561034011, -25.320077909042425], [-57.654299309396677, -25.320333745359918], [-57.655138130244517, -25.320816440355518], [-57.655556294002309, -25.321211359878355], [-57.656067258068816, -25.321700399915855], [-57.656385729588642, -25.32200250727195], [-57.656577960893586, -25.3224117955419], [-57.656884686827659, -25.323057524313469], [-57.657177986736272, -25.323386422084347], [-57.657399079289341, -25.323636418367762], [-57.657738078877301, -25.324017703659941], [-57.658087878752355, -25.324339999919939], [-57.658329937486947, -25.324562296320082], [-57.658713485860389, -25.32491446515192], [-57.659001906562644, -25.325179805654628], [-57.659444983576485, -25.325590583018013], [-57.660149932946311, -25.325410541027811], [-57.660859453063949, -25.324919995903194], [-57.661597823254866, -25.324528654047512], [-57.662218448690204, -25.324175574446748], [-57.662839281610118, -25.323881889114936], [-57.663432829236974, -25.323480252882902], [-57.663908252927421, -25.323130345628496], [-57.664625844086167, -25.322710445511664], [-57.665161474927984, -25.322328984470378], [-57.655233354963322, -25.308892152923391], [-57.654813227708338, -25.309129872914514], [-57.654140170447867, -25.309510960039805], [-57.653596073290664, -25.309819025694416], [-57.653206955209846, -25.310039341307871], [-57.652810787672337, -25.310263645121616], [-57.652111066608427, -25.310659813484982], [-57.651468670784077, -25.311023519468954], [-57.651146756798283, -25.31120577598799], [-57.650828620465859, -25.311385892104685], [-57.65055601703277, -25.311540229089928], [-57.650050449802052, -25.311826457969957], [-57.649284357313292, -25.312260178485968], [-57.648518379156918, -25.312693826848534], [-57.647533324517561, -25.313251492912958], [-57.646111771562651, -25.314030041234943]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "nombre": "BOTANICO",
      "zona": 15,
      "ordenanza": "N� 10811\/83",
      "st_area_sh": 5790915.7738800002
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[-57.575403448411961, -25.234808315501937], [-57.574099810071104, -25.235216318289176], [-57.572247276853275, -25.23584275180739], [-57.569937366731565, -25.236412843986066], [-57.569228593980576, -25.236587763128171], [-57.565983986780488, -25.237507764056208], [-57.563849166956906, -25.238210032783716], [-57.563528766322847, -25.238393447851742], [-57.563208973313564, -25.238644935604061], [-57.562859116725427, -25.23906592181309], [-57.562227544010163, -25.239427608756941], [-57.561301275289821, -25.239934243051646], [-57.560180091609432, -25.240547476565929], [-57.558642241545897, -25.241388581945934], [-57.557716971864799, -25.241894632163294], [-57.556979103776776, -25.242275252319498], [-57.555522690919538, -25.243025606717044], [-57.556106832754587, -25.244110047998287], [-57.556222338613601, -25.244349270513009], [-57.556367249206694, -25.244603680777399], [-57.556565864045197, -25.244967713217228], [-57.556847299649682, -25.245564370900318], [-57.557227637059626, -25.246401579183718], [-57.55746110861557, -25.247026449876525], [-57.557563834919918, -25.247408865747687], [-57.55766095362673, -25.247779741824882], [-57.557735457765453, -25.248125051128355], [-57.557803391067743, -25.248477349522634], [-57.557853640144216, -25.248976862384652], [-57.557884295853889, -25.249297753388099], [-57.557908534552816, -25.249683297288914], [-57.557920002149928, -25.249990436824383], [-57.557755184303154, -25.250330951634595], [-57.557459058631956, -25.250674653952608], [-57.557756210354626, -25.251075814253717], [-57.557232789753165, -25.25148070451085], [-57.557014133410206, -25.251740268915938], [-57.557375633388482, -25.251879276164356], [-57.557932540105369, -25.252102498928714], [-57.558843900292352, -25.252585686388109], [-57.559849233406233, -25.253167727344785], [-57.560161783409825, -25.253350801478494], [-57.561500377283856, -25.254096926717637], [-57.562817706170215, -25.254734455634896], [-57.563822530252466, -25.255198357282598], [-57.564504648561353, -25.255531196383458], [-57.565717578832967, -25.256055708315142], [-57.56645276113084, -25.256489334725174], [-57.567579775276336, -25.256448100250033], [-57.569285109528181, -25.256461290517567], [-57.569659966849635, -25.256489476588207], [-57.570255689474116, -25.256544130656785], [-57.570934175650621, -25.256145180353379], [-57.572716551131919, -25.255140573939656], [-57.57343035730446, -25.254740280581903], [-57.574285192388039, -25.254257592073653], [-57.575165678914701, -25.253763107895431], [-57.578252820852107, -25.252013307188843], [-57.579299570450175, -25.251410493268622], [-57.580124380790316, -25.250932000732114], [-57.580444602199115, -25.250777313579224], [-57.581150433425066, -25.250374126758267], [-57.58140501213439, -25.25026085952117], [-57.582443289453693, -25.249680475139286], [-57.583473237915449, -25.249081406183549], [-57.584474463508812, -25.248501154074869], [-57.584884926353197, -25.248289967653161], [-57.58507816203867, -25.247531034075426], [-57.585622868948441, -25.247533345405959], [-57.585861296265847, -25.247377453825095], [-57.586167178760498, -25.247282379105648], [-57.586566120329252, -25.247218434365085], [-57.586855042124014, -25.24711794408185], [-57.592379441085505, -25.243814325646895], [-57.592005116194279, -25.243470607089264], [-57.591717419150136, -25.243242519102516], [-57.591442214342145, -25.243008342731969], [-57.591126824620154, -25.242647556641099], [-57.590236269540533, -25.241779466794352], [-57.589246202938192, -25.240785299821798], [-57.588774465031108, -25.24039673287858], [-57.588366394848286, -25.240098841569992], [-57.587971995558512, -25.239727654656651], [-57.587585065695933, -25.23949307917562], [-57.58715152777684, -25.239313343176395], [-57.586739482905692, -25.23910400614696], [-57.58639098533115, -25.238862715964927], [-57.586126452444852, -25.238763361924832], [-57.585859547017357, -25.238567493419779], [-57.585584806630905, -25.238104719314691], [-57.585260300746043, -25.237915630505558], [-57.584987184224325, -25.237602984459812], [-57.584789933780421, -25.237321191930764], [-57.584500306942282, -25.237073833077822], [-57.584098970602774, -25.236755498484406], [-57.583862142719461, -25.23649043929704], [-57.583481400677591, -25.236121737006894], [-57.583328860669276, -25.235889503125438], [-57.582967448316339, -25.235456956907658], [-57.58280963428286, -25.23517686350884], [-57.582598483747695, -25.234952293902381], [-57.582412614208863, -25.234737800804321], [-57.582256927808444, -25.234503088412115], [-57.582062295630465, -25.234291909253979], [-57.581877622065988, -25.233998706229777], [-57.581701507445558, -25.233750105256739], [-57.581528451594217, -25.233335191566589], [-57.581316287826404, -25.232987824392229], [-57.581047407912635, -25.23267764270409], [-57.580719498946436, -25.232374803121349], [-57.580405957439936, -25.232129396391343], [-57.580054819126048, -25.231611797953512], [-57.579794426347341, -25.231204734581677], [-57.5791347267117, -25.231262028432837], [-57.578312853532239, -25.230862665060471], [-57.578045501946541, -25.231204675435045], [-57.577029450219371, -25.232219116240508], [-57.575722334573783, -25.233363320618729], [-57.575437013277025, -25.233611986501316], [-57.57455287083058, -25.234342008020452], [-57.575144672240867, -25.234688411682122], [-57.575403448411961, -25.234808315501937]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "nombre": "RICARDO BRUGADA",
      "zona": 12,
      "ordenanza": "N� 10811\/83",
      "st_area_sh": 1293290.85091
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[-57.618550825149399, -25.275397589239255], [-57.617957243187178, -25.275874662444462], [-57.616695212386198, -25.277820913930146], [-57.61654622087007, -25.278060153577211], [-57.61626915927485, -25.278596324378626], [-57.616024761685516, -25.278955270895267], [-57.616004638830859, -25.279328663355042], [-57.615934459129896, -25.279704016646697], [-57.61582208189693, -25.280093233408071], [-57.615904929161346, -25.28075781075945], [-57.616023920034593, -25.281653515064676], [-57.61609736845795, -25.28212238811652], [-57.616149656883103, -25.282500072743254], [-57.616267757537734, -25.283438611556512], [-57.616463051460421, -25.284697472233095], [-57.616666863844088, -25.286219524167311], [-57.617603759639245, -25.2860155346252], [-57.618598765717785, -25.285813107034432], [-57.6195053372468, -25.285605685495618], [-57.622083890436798, -25.285042925302804], [-57.622531304076176, -25.284944588009857], [-57.624321007967687, -25.284561941531894], [-57.626098528485194, -25.284104307841162], [-57.62701658950251, -25.283881443646344], [-57.627536423779532, -25.284658333093812], [-57.628414828647664, -25.284167875738678], [-57.629078078127392, -25.283786849028544], [-57.628071838936862, -25.282123586662323], [-57.628874199385081, -25.282053482315238], [-57.629221094797209, -25.282023498050634], [-57.629801636154362, -25.281924601849941], [-57.630226893396632, -25.281712965665523], [-57.630577107301619, -25.28157779512491], [-57.631013107166936, -25.281214591533132], [-57.631301767382666, -25.281014429756095], [-57.631645360704979, -25.280771935269723], [-57.63206153491894, -25.280605578663813], [-57.632353951959935, -25.280498088584299], [-57.632717160172746, -25.280274657441392], [-57.632955878725731, -25.280066068134655], [-57.63319690086977, -25.279784036072254], [-57.633456623225257, -25.279482737361956], [-57.633747124460697, -25.279271832150286], [-57.634040609383284, -25.279044517061319], [-57.634354594120929, -25.278826615962597], [-57.634375118993454, -25.278435542174197], [-57.634303862900559, -25.278162724965313], [-57.634059352381691, -25.27773293720205], [-57.633610191745021, -25.277602091540693], [-57.633128623722577, -25.277698486388786], [-57.63281879352229, -25.277581775362854], [-57.632491086548448, -25.27765108440062], [-57.6322765856576, -25.277848143034564], [-57.632228189284675, -25.278182921351366], [-57.631864828455129, -25.278275975501831], [-57.631513439707646, -25.27804702382311], [-57.631186178080398, -25.277947876754027], [-57.630935574943649, -25.277810410306611], [-57.630341003543968, -25.277613121016145], [-57.629882821612199, -25.27757568318092], [-57.629524678851936, -25.277589043068406], [-57.629425580703327, -25.277840514657967], [-57.629118157909211, -25.277955273667313], [-57.628752758833485, -25.277872702833832], [-57.628256319183016, -25.277771547281333], [-57.627851002572427, -25.277753179651938], [-57.62777824733238, -25.277444945453432], [-57.627534728738674, -25.277154617805156], [-57.627292033599602, -25.276817531285669], [-57.627203236651106, -25.276460829183083], [-57.626942614526975, -25.276195357118858], [-57.62658501730975, -25.276164174032441], [-57.626263578224886, -25.276323054106893], [-57.625889631377134, -25.276337236163926], [-57.625466712009711, -25.276215478749997], [-57.62503849030665, -25.276727342431919], [-57.624781682348306, -25.277107738781183], [-57.624488841694678, -25.27734995301897], [-57.624305205696146, -25.277683495242098], [-57.624186680989638, -25.27812214673283], [-57.623792074866678, -25.278401472458008], [-57.623423995198984, -25.278501980475514], [-57.622763728871867, -25.27824414171894], [-57.622403724706409, -25.27814632874404], [-57.622236285079801, -25.278532297542935], [-57.622080809523538, -25.278870939699615], [-57.621694914072187, -25.278598469498547], [-57.621147252759364, -25.27799874610211], [-57.620699215989376, -25.27752966899137], [-57.620550804188738, -25.277196878480968], [-57.6205641159655, -25.276872575492764], [-57.620525352211601, -25.276497121041483], [-57.620442503307046, -25.276090575961504], [-57.620075427035516, -25.276018773721059], [-57.619810641343001, -25.27586639150995], [-57.619515867573739, -25.275561093487816], [-57.618957336134571, -25.275323242365129], [-57.618550825149399, -25.275397589239255]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "nombre": "ZEBALLOS CUE",
      "zona": 15,
      "ordenanza": "N� 52\/11",
      "st_area_sh": 3441532.2414000002
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[-57.545198029330827, -25.234371600836042], [-57.545325187513143, -25.234756209346376], [-57.545424264909165, -25.235055882556576], [-57.54552605415752, -25.235363756239138], [-57.545632433327818, -25.235685509984048], [-57.545769683031146, -25.23610063557927], [-57.545905023095315, -25.236507907884363], [-57.546045234703705, -25.23691975857211], [-57.546162753756548, -25.23726218671942], [-57.546301274249409, -25.237665808402397], [-57.546470193878527, -25.238158085873835], [-57.546659441242831, -25.238631728323686], [-57.546804778916346, -25.238980033823619], [-57.546989077924337, -25.239296520293848], [-57.547322173452905, -25.239864638459604], [-57.547834701769126, -25.239342444402062], [-57.548590335726026, -25.239773886303233], [-57.548987279468761, -25.240098496215239], [-57.549953512539034, -25.240888643771523], [-57.552141394500353, -25.24266409333892], [-57.553792772826661, -25.241954673792215], [-57.553923813794341, -25.242203031290227], [-57.554143996880796, -25.242141336122412], [-57.554834584090408, -25.241906799372469], [-57.555522690919538, -25.243025606717044], [-57.556979103776776, -25.242275252319498], [-57.557716971864799, -25.241894632163294], [-57.558642241545897, -25.241388581945934], [-57.560180091609432, -25.240547476565929], [-57.561301275289821, -25.239934243051646], [-57.562227544010163, -25.239427608756941], [-57.562859116725427, -25.23906592181309], [-57.563208973313564, -25.238644935604061], [-57.563528766322847, -25.238393447851742], [-57.563849166956906, -25.238210032783716], [-57.565983986780488, -25.237507764056208], [-57.569228593980576, -25.236587763128171], [-57.569937366731565, -25.236412843986066], [-57.572247276853275, -25.23584275180739], [-57.574099810071104, -25.235216318289176], [-57.575403448411961, -25.234808315501937], [-57.575144672240867, -25.234688411682122], [-57.57455287083058, -25.234342008020452], [-57.575437013277025, -25.233611986501316], [-57.575722334573783, -25.233363320618729], [-57.577029450219371, -25.232219116240508], [-57.578045501946541, -25.231204675435045], [-57.578312853532239, -25.230862665060471], [-57.577695442250366, -25.230677136974968], [-57.577400071537546, -25.23058390173567], [-57.577104556657495, -25.230460031332616], [-57.57513062218527, -25.227817919309906], [-57.575018349482782, -25.227571994497076], [-57.574219589565523, -25.226430748546335], [-57.572133483369448, -25.22536199931135], [-57.571797034183206, -25.225598768831453], [-57.571217410903529, -25.225793812037978], [-57.570177130637219, -25.2260178932078], [-57.569202298333913, -25.226215301643048], [-57.56900386513103, -25.226012292730829], [-57.567690774814196, -25.226346067356481], [-57.567783199022273, -25.22658731877284], [-57.564130175423969, -25.227454867137723], [-57.563365795926266, -25.227570801964525], [-57.56079076464458, -25.228248541353388], [-57.559704664545635, -25.228233661314349], [-57.558984614783938, -25.228340872728467], [-57.557817835380604, -25.228953195766969], [-57.555453906323464, -25.23012724477455], [-57.550793988078738, -25.232519353422457], [-57.545198029330827, -25.234371600836042]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "nombre": "SANTA LIBRADA",
      "zona": 13,
      "ordenanza": "N� 102\/12",
      "st_area_sh": 1790230.67337
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[-57.62729573202131, -25.326731327588295], [-57.627188418653873, -25.32708949902689], [-57.626945288443153, -25.328023196047308], [-57.626840571073608, -25.328417987759074], [-57.626262978687379, -25.330608128057367], [-57.625898781312181, -25.331572026713861], [-57.626282868365024, -25.331817094592598], [-57.626618514068689, -25.332149340495576], [-57.626828878920811, -25.332488938346618], [-57.627001664643032, -25.332752197059762], [-57.627242270373586, -25.333211355505021], [-57.627668376430087, -25.333035453959347], [-57.627992400079606, -25.333146736649745], [-57.628277741473013, -25.333417702708402], [-57.628643722422431, -25.333604389848414], [-57.628902619465187, -25.333778664057917], [-57.629105738464609, -25.333984597940894], [-57.6294896983554, -25.334221386827828], [-57.629859827163308, -25.33450886961792], [-57.630096997858814, -25.334767238327515], [-57.630409101002307, -25.334917758209325], [-57.630651830068416, -25.335146191924661], [-57.630858077488426, -25.335331636310869], [-57.631312705971581, -25.335621404756818], [-57.631732205752634, -25.335833120619313], [-57.631947690295405, -25.336021851488514], [-57.632236747564839, -25.336257610529156], [-57.632686872612048, -25.336408476738242], [-57.632834426498299, -25.336689316568332], [-57.632836143104065, -25.337026422243358], [-57.632886062039276, -25.337324564464335], [-57.633027074258621, -25.337604848787606], [-57.633395463774917, -25.337837141811899], [-57.633856934925419, -25.338033770885922], [-57.633369246718672, -25.338187630348706], [-57.633011089040927, -25.338169416848903], [-57.632396192911642, -25.338366152045165], [-57.632461055060666, -25.339079572014459], [-57.632553801007298, -25.339713454031902], [-57.633310242180521, -25.339639400694256], [-57.633484436982194, -25.341112947944104], [-57.633909100619469, -25.341176034611607], [-57.633951589852508, -25.341875485054398], [-57.634002840069556, -25.342609209312524], [-57.634529022507309, -25.342664076572206], [-57.638401844149357, -25.343059984210424], [-57.638491875486331, -25.342705229911914], [-57.638618772385755, -25.342356942166639], [-57.638751100019135, -25.340188263114278], [-57.638700399624447, -25.339709815514613], [-57.638421560208492, -25.338125721576933], [-57.638525334955368, -25.337729165756841], [-57.638912711059717, -25.337899513844139], [-57.639523940322668, -25.337840828513094], [-57.63938871814814, -25.337218327791931], [-57.639253011905055, -25.336782379190094], [-57.638898930716017, -25.336506223722431], [-57.638726525545586, -25.336150628400212], [-57.63851245951696, -25.335480407251495], [-57.638527793160776, -25.335198740032862], [-57.638328451426986, -25.334738286046701], [-57.6380917567324, -25.334318157706079], [-57.638001101653863, -25.333949301123848], [-57.637932804794346, -25.3336596023276], [-57.637877887907898, -25.333350231682886], [-57.63807729913119, -25.333129257566416], [-57.637946468133805, -25.33251169086202], [-57.638388078628807, -25.330819546879223], [-57.63847621915577, -25.330220137052017], [-57.639142870318047, -25.329919912380337], [-57.63954216796256, -25.329785745526571], [-57.639204243404123, -25.329033063545136], [-57.639473569910542, -25.328907892271467], [-57.639328050137927, -25.328357984074394], [-57.639179650155796, -25.327860837957459], [-57.639303212935943, -25.327357983300612], [-57.639889174792494, -25.326407191726791], [-57.640259179957781, -25.325776540536804], [-57.640464550693764, -25.325225760321501], [-57.640753767408178, -25.324490595094669], [-57.640918771321573, -25.324100437123239], [-57.640423022202796, -25.323863280215583], [-57.640014841121939, -25.323704815496281], [-57.638319546669152, -25.323046649994623], [-57.637873382519523, -25.322894865460864], [-57.635195296670879, -25.323138734199112], [-57.633569059053109, -25.323380109670676], [-57.633507405912873, -25.324086453764156], [-57.633433407436833, -25.324780089157446], [-57.633479400437324, -25.325070207977092], [-57.633644015333132, -25.325420891691479], [-57.633882376330185, -25.325759456244601], [-57.634220917887902, -25.32624677952807], [-57.634612906493921, -25.326839895219123], [-57.633907754457191, -25.327003454495696], [-57.632909561114467, -25.327099211584542], [-57.632107324171663, -25.327202147672374], [-57.631378063681836, -25.327304764949094], [-57.630600148561847, -25.327407586849951], [-57.629857463633954, -25.327267054259377], [-57.629114751765698, -25.327120989634295], [-57.628383947107487, -25.326964583090312], [-57.62729573202131, -25.326731327588295]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "nombre": "JUKYTY",
      "zona": 13,
      "ordenanza": "N� 102\/12",
      "st_area_sh": 1913233.76538
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[-57.640259179957781, -25.325776540536804], [-57.639889174792494, -25.326407191726791], [-57.639303212935943, -25.327357983300612], [-57.639179650155796, -25.327860837957459], [-57.639328050137927, -25.328357984074394], [-57.639473569910542, -25.328907892271467], [-57.639204243404123, -25.329033063545136], [-57.63954216796256, -25.329785745526571], [-57.639142870318047, -25.329919912380337], [-57.63847621915577, -25.330220137052017], [-57.638388078628807, -25.330819546879223], [-57.637946468133805, -25.33251169086202], [-57.63807729913119, -25.333129257566416], [-57.637877887907898, -25.333350231682886], [-57.637932804794346, -25.3336596023276], [-57.638001101653863, -25.333949301123848], [-57.6380917567324, -25.334318157706079], [-57.638328451426986, -25.334738286046701], [-57.638527793160776, -25.335198740032862], [-57.63851245951696, -25.335480407251495], [-57.638726525545586, -25.336150628400212], [-57.638898930716017, -25.336506223722431], [-57.639253011905055, -25.336782379190094], [-57.63938871814814, -25.337218327791931], [-57.639523940322668, -25.337840828513094], [-57.638912711059717, -25.337899513844139], [-57.638525334955368, -25.337729165756841], [-57.638421560208492, -25.338125721576933], [-57.638700399624447, -25.339709815514613], [-57.638751100019135, -25.340188263114278], [-57.638618772385755, -25.342356942166639], [-57.638491875486331, -25.342705229911914], [-57.638401844149357, -25.343059984210424], [-57.640031008390316, -25.343275435465539], [-57.640508564472647, -25.343310170742146], [-57.640831318376151, -25.343478446462605], [-57.641130063773154, -25.343575657169602], [-57.641666136463797, -25.343768353134134], [-57.642238996883336, -25.343970680988175], [-57.643010176127852, -25.34424293494132], [-57.644557906464172, -25.344782279628387], [-57.644537545851414, -25.344349486496654], [-57.644937454809735, -25.342532929335466], [-57.645256645851994, -25.340248382676265], [-57.64657862855961, -25.338774850634632], [-57.646899044614393, -25.338038696185031], [-57.647086975933952, -25.337333501893994], [-57.647038061650569, -25.336385487728474], [-57.647043116063443, -25.335876987469643], [-57.647561026961057, -25.335389100411017], [-57.647841118040006, -25.335012950213983], [-57.648209729944327, -25.334674667883611], [-57.648360080296875, -25.334278521841679], [-57.648707880100574, -25.33425700677688], [-57.649206874107875, -25.334430615502839], [-57.649470842483964, -25.334706900361624], [-57.650038451362377, -25.334706250094708], [-57.650059409664912, -25.33432573039061], [-57.650035148517937, -25.334056169692435], [-57.649815569262898, -25.333737797514114], [-57.649401097649289, -25.333561587791621], [-57.649551229714575, -25.333145437562752], [-57.649484488250906, -25.332847441494518], [-57.64939579658806, -25.332509385212692], [-57.649499798572705, -25.331546519856754], [-57.649692117275009, -25.331008275963388], [-57.650190590026384, -25.330590742172586], [-57.650820435301448, -25.330330785311947], [-57.651318467379227, -25.329813769029528], [-57.652450148200522, -25.329350131581084], [-57.652641889157863, -25.329036842526108], [-57.653098808592787, -25.329014554941708], [-57.653358046557045, -25.328878171311846], [-57.653664468870488, -25.32873895371938], [-57.652982893995897, -25.328486626249013], [-57.652300543339535, -25.328234006425198], [-57.650662365275458, -25.327641810039612], [-57.649424101188913, -25.327208649764057], [-57.647285973433483, -25.326469971353493], [-57.645697122979023, -25.325925287095338], [-57.644707555284725, -25.325533964777243], [-57.643795789971705, -25.325214246802947], [-57.643258698727188, -25.324995439321373], [-57.642402892203712, -25.324690042376623], [-57.641833181257709, -25.324484508225648], [-57.640918771321573, -25.324100437123239], [-57.640753767408178, -25.324490595094669], [-57.640464550693764, -25.325225760321501], [-57.640259179957781, -25.325776540536804]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "nombre": "SAN CAYETANO",
      "zona": 11,
      "ordenanza": "N� 102\/12",
      "st_area_sh": 1641306.67808
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[-57.638708336295167, -25.318149660901497], [-57.637156635626603, -25.319087203973702], [-57.638968634939992, -25.319859097641707], [-57.639289673975725, -25.319995852622185], [-57.639980712195594, -25.320297814683503], [-57.64030684290536, -25.320421441368204], [-57.641081502246024, -25.320715086365595], [-57.641694408240284, -25.320388423237564], [-57.642147380455448, -25.320358993671324], [-57.642364185456323, -25.320554168030199], [-57.642615348277566, -25.320717813637319], [-57.643083532767648, -25.321058631844021], [-57.642597431938086, -25.322369350831213], [-57.642318968756484, -25.323120184654428], [-57.642108528986348, -25.323687596300889], [-57.641833181257709, -25.324484508225648], [-57.642402892203712, -25.324690042376623], [-57.643258698727188, -25.324995439321373], [-57.643795789971705, -25.325214246802947], [-57.644707555284725, -25.325533964777243], [-57.645697122979023, -25.325925287095338], [-57.647285973433483, -25.326469971353493], [-57.649424101188913, -25.327208649764057], [-57.650662365275458, -25.327641810039612], [-57.652300543339535, -25.328234006425198], [-57.652982893995897, -25.328486626249013], [-57.653664468870488, -25.32873895371938], [-57.654037355084441, -25.328568403315032], [-57.654353517637198, -25.328225431598554], [-57.655396509792183, -25.327747856190577], [-57.656341108873875, -25.327104740903788], [-57.659444983576485, -25.325590583018013], [-57.659001906562644, -25.325179805654628], [-57.658713485860389, -25.32491446515192], [-57.658329937486947, -25.324562296320082], [-57.658087878752355, -25.324339999919939], [-57.657738078877301, -25.324017703659941], [-57.657399079289341, -25.323636418367762], [-57.657177986736272, -25.323386422084347], [-57.656884686827659, -25.323057524313469], [-57.656577960893586, -25.3224117955419], [-57.656385729588642, -25.32200250727195], [-57.656067258068816, -25.321700399915855], [-57.655556294002309, -25.321211359878355], [-57.655138130244517, -25.320816440355518], [-57.654299309396677, -25.320333745359918], [-57.653859561034011, -25.320077909042425], [-57.653468796371698, -25.319850543560431], [-57.653184892853318, -25.319686267960972], [-57.652644426328202, -25.319373534352177], [-57.652183551707786, -25.319109372878071], [-57.651911861118194, -25.318951234620197], [-57.651479151701047, -25.318699637532614], [-57.650802134295049, -25.318474960133329], [-57.650489464040447, -25.318709588392394], [-57.65011009200807, -25.318691630208701], [-57.649830981627865, -25.318769788594569], [-57.649477393331509, -25.318916301051939], [-57.649185683231373, -25.319055417923934], [-57.647907728776609, -25.317315356157934], [-57.647670558699325, -25.316975547478421], [-57.646945933859726, -25.315880097690858], [-57.646638579815303, -25.315352248496406], [-57.646554308277302, -25.314640308467006], [-57.64632159847848, -25.314257690228093], [-57.646111771562651, -25.314030041234943], [-57.64548312595619, -25.31417020902558], [-57.64524203298626, -25.314328338285844], [-57.645047796728932, -25.314632866140062], [-57.643623792879652, -25.31542843186158], [-57.642746654588706, -25.315918596347942], [-57.641997728287024, -25.316343624962716], [-57.641527646386074, -25.31661040153379], [-57.638708336295167, -25.318149660901497]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "nombre": "REPUBLICANO",
      "zona": 13,
      "ordenanza": "N� 102\/12",
      "st_area_sh": 1264708.55743
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[-57.62729573202131, -25.326731327588295], [-57.628383947107487, -25.326964583090312], [-57.629114751765698, -25.327120989634295], [-57.629857463633954, -25.327267054259377], [-57.630600148561847, -25.327407586849951], [-57.631378063681836, -25.327304764949094], [-57.632107324171663, -25.327202147672374], [-57.632909561114467, -25.327099211584542], [-57.633907754457191, -25.327003454495696], [-57.634612906493921, -25.326839895219123], [-57.634220917887902, -25.32624677952807], [-57.633882376330185, -25.325759456244601], [-57.633644015333132, -25.325420891691479], [-57.633479400437324, -25.325070207977092], [-57.633433407436833, -25.324780089157446], [-57.633507405912873, -25.324086453764156], [-57.633569059053109, -25.323380109670676], [-57.635195296670879, -25.323138734199112], [-57.637873382519523, -25.322894865460864], [-57.638319546669152, -25.323046649994623], [-57.640014841121939, -25.323704815496281], [-57.640423022202796, -25.323863280215583], [-57.640918771321573, -25.324100437123239], [-57.641833181257709, -25.324484508225648], [-57.642108528986348, -25.323687596300889], [-57.642318968756484, -25.323120184654428], [-57.642597431938086, -25.322369350831213], [-57.643083532767648, -25.321058631844021], [-57.642615348277566, -25.320717813637319], [-57.642364185456323, -25.320554168030199], [-57.642147380455448, -25.320358993671324], [-57.641694408240284, -25.320388423237564], [-57.641081502246024, -25.320715086365595], [-57.64030684290536, -25.320421441368204], [-57.639980712195594, -25.320297814683503], [-57.639289673975725, -25.319995852622185], [-57.638968634939992, -25.319859097641707], [-57.637156635626603, -25.319087203973702], [-57.638708336295167, -25.318149660901497], [-57.638663184272872, -25.318112427569361], [-57.638663679886321, -25.31805651584046], [-57.638686221111406, -25.317994058212175], [-57.638719664911775, -25.317905032113377], [-57.638706587465997, -25.31777172140227], [-57.638627480307605, -25.317640922762106], [-57.638563648330191, -25.317537545373892], [-57.638521458427064, -25.317458281857576], [-57.638461325664231, -25.31732348175084], [-57.638424543277026, -25.317273532572418], [-57.638368845030087, -25.317240939457303], [-57.638200840034649, -25.317228208125215], [-57.63804347076114, -25.31718478607862], [-57.637923392232423, -25.317116744687066], [-57.637877422182115, -25.317031903032131], [-57.637782176490035, -25.316987350356605], [-57.637695914841423, -25.316929643073671], [-57.637614886684077, -25.316911139129047], [-57.637523521697993, -25.316888576456215], [-57.637419781967665, -25.316835524792644], [-57.637331678726611, -25.316772330287243], [-57.637280572652124, -25.316705688733574], [-57.637139014712318, -25.316549215029269], [-57.637037221071623, -25.31645330656858], [-57.636955225234274, -25.316414967659952], [-57.636916282482026, -25.316373683011207], [-57.636776824196133, -25.316286090603921], [-57.636670833819359, -25.316197082941599], [-57.63653995968096, -25.31605415948485], [-57.636473774731343, -25.315960097067595], [-57.636426841926642, -25.315918882902718], [-57.636353253026265, -25.315802469764179], [-57.63629408704962, -25.315674866226555], [-57.636230978526164, -25.315541086662218], [-57.636218123413855, -25.315403541254462], [-57.636188819300813, -25.315329002066843], [-57.636133250752074, -25.315258758171453], [-57.636096288279688, -25.315227856873747], [-57.636068435914154, -25.315179594235129], [-57.636060662206745, -25.31512469343447], [-57.636055882857633, -25.314999018772426], [-57.636016124311837, -25.314935873999399], [-57.635953147948683, -25.314881684544524], [-57.635849524447323, -25.314806478864579], [-57.635752579151372, -25.314760740151101], [-57.635619190461355, -25.314700113042292], [-57.635554246845551, -25.314703716223146], [-57.635494087531356, -25.314763801673294], [-57.63540321334257, -25.31485130832052], [-57.635218775076865, -25.314893915546612], [-57.635055869553703, -25.31490716150152], [-57.634967660666902, -25.314878272297385], [-57.634913248914231, -25.314903593888328], [-57.634861792459475, -25.314933427842305], [-57.634797332837998, -25.314980550399156], [-57.634744182448458, -25.314995712766542], [-57.63469883629265, -25.31499531020695], [-57.634667848528068, -25.314975732167635], [-57.634640687704234, -25.31493403675665], [-57.6346147790142, -25.314880389693791], [-57.634584286609538, -25.314811915551818], [-57.634560838159352, -25.314743834604492], [-57.63456095119875, -25.314659511374572], [-57.634526011130525, -25.314535375194172], [-57.634464590323411, -25.314410027320339], [-57.634368337925551, -25.314374323745209], [-57.634317809698182, -25.314323510635752], [-57.634281851767682, -25.314297641677758], [-57.634253311553067, -25.314243408055439], [-57.634251267275765, -25.314189479439612], [-57.634209181485048, -25.314036145360554], [-57.634201370090267, -25.314011034843194], [-57.634162487210368, -25.31398969812987], [-57.634109224218015, -25.313983356762442], [-57.634034501602045, -25.313970652776], [-57.633842638804808, -25.313939756012616], [-57.633646474179628, -25.313930031099197], [-57.63348889449793, -25.31398733771363], [-57.633424604392196, -25.313957987177229], [-57.633359113146966, -25.313899970389233], [-57.633204033439959, -25.313800285841886], [-57.633076442971515, -25.313699127621099], [-57.63298157563419, -25.313667282167454], [-57.632914040514272, -25.313677011567098], [-57.632823223827394, -25.313696633399228], [-57.632746758884188, -25.313803631822104], [-57.632718500326924, -25.313924328254668], [-57.632717397593908, -25.313965069834246], [-57.6326821810853, -25.314105751406103], [-57.632586040093663, -25.314254707958124], [-57.632476663402372, -25.314310265163417], [-57.632299691680643, -25.314286804023112], [-57.632146097431345, -25.314270737620845], [-57.632079812750604, -25.31424410325387], [-57.631875472784081, -25.314141592504484], [-57.631721943076755, -25.314024723098274], [-57.631569297640262, -25.31391700652151], [-57.631470421237601, -25.313841172328289], [-57.631414527467143, -25.313808917800557], [-57.631307643977259, -25.313768775067313], [-57.631239662591682, -25.31374611100475], [-57.631183959601884, -25.313750650674134], [-57.631125919988023, -25.313705735627735], [-57.631043631646357, -25.313656635841934], [-57.630897779029759, -25.313623205722678], [-57.630661777575504, -25.313569577343007], [-57.630510196105007, -25.314170872021514], [-57.630166233061288, -25.31555839819961], [-57.629931860694569, -25.31646768240477], [-57.629704266668917, -25.317353903490297], [-57.629441001968793, -25.318365424590993], [-57.628922351288182, -25.320386274195251], [-57.628545370666878, -25.321810823138911], [-57.628376442697331, -25.322467927288272], [-57.62789943751909, -25.324347531121422], [-57.62751401360665, -25.325840607300389], [-57.62729573202131, -25.326731327588295]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "nombre": "ROBERTO L. PETIT",
      "zona": 11,
      "ordenanza": "N� 102\/12",
      "st_area_sh": 1532853.6069700001
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[-57.630915933424568, -25.312542533388179], [-57.630661777575504, -25.313569577343007], [-57.630897779029759, -25.313623205722678], [-57.631043631646357, -25.313656635841934], [-57.631125919988023, -25.313705735627735], [-57.631183959601884, -25.313750650674134], [-57.631239662591682, -25.31374611100475], [-57.631307643977259, -25.313768775067313], [-57.631414527467143, -25.313808917800557], [-57.631470421237601, -25.313841172328289], [-57.631569297640262, -25.31391700652151], [-57.631721943076755, -25.314024723098274], [-57.631875472784081, -25.314141592504484], [-57.632079812750604, -25.31424410325387], [-57.632146097431345, -25.314270737620845], [-57.632299691680643, -25.314286804023112], [-57.632476663402372, -25.314310265163417], [-57.632586040093663, -25.314254707958124], [-57.6326821810853, -25.314105751406103], [-57.632717397593908, -25.313965069834246], [-57.632718500326924, -25.313924328254668], [-57.632746758884188, -25.313803631822104], [-57.632823223827394, -25.313696633399228], [-57.632914040514272, -25.313677011567098], [-57.63298157563419, -25.313667282167454], [-57.633076442971515, -25.313699127621099], [-57.633204033439959, -25.313800285841886], [-57.633359113146966, -25.313899970389233], [-57.633424604392196, -25.313957987177229], [-57.63348889449793, -25.31398733771363], [-57.633646474179628, -25.313930031099197], [-57.633842638804808, -25.313939756012616], [-57.634034501602045, -25.313970652776], [-57.634109224218015, -25.313983356762442], [-57.634162487210368, -25.31398969812987], [-57.634201370090267, -25.314011034843194], [-57.634209181485048, -25.314036145360554], [-57.634251267275765, -25.314189479439612], [-57.634253311553067, -25.314243408055439], [-57.634281851767682, -25.314297641677758], [-57.634317809698182, -25.314323510635752], [-57.634368337925551, -25.314374323745209], [-57.634464590323411, -25.314410027320339], [-57.634526011130525, -25.314535375194172], [-57.63456095119875, -25.314659511374572], [-57.634560838159352, -25.314743834604492], [-57.634584286609538, -25.314811915551818], [-57.6346147790142, -25.314880389693791], [-57.634640687704234, -25.31493403675665], [-57.634667848528068, -25.314975732167635], [-57.63469883629265, -25.31499531020695], [-57.634744182448458, -25.314995712766542], [-57.634797332837998, -25.314980550399156], [-57.634861792459475, -25.314933427842305], [-57.634913248914231, -25.314903593888328], [-57.634967660666902, -25.314878272297385], [-57.635055869553703, -25.31490716150152], [-57.635218775076865, -25.314893915546612], [-57.63540321334257, -25.31485130832052], [-57.635494087531356, -25.314763801673294], [-57.635554246845551, -25.314703716223146], [-57.635619190461355, -25.314700113042292], [-57.635752579151372, -25.314760740151101], [-57.635849524447323, -25.314806478864579], [-57.635953147948683, -25.314881684544524], [-57.636016124311837, -25.314935873999399], [-57.636055882857633, -25.314999018772426], [-57.636060662206745, -25.31512469343447], [-57.636068435914154, -25.315179594235129], [-57.636096288279688, -25.315227856873747], [-57.636133250752074, -25.315258758171453], [-57.636188819300813, -25.315329002066843], [-57.636218123413855, -25.315403541254462], [-57.636230978526164, -25.315541086662218], [-57.63629408704962, -25.315674866226555], [-57.636353253026265, -25.315802469764179], [-57.636426841926642, -25.315918882902718], [-57.636473774731343, -25.315960097067595], [-57.63653995968096, -25.31605415948485], [-57.636670833819359, -25.316197082941599], [-57.636776824196133, -25.316286090603921], [-57.636916282482026, -25.316373683011207], [-57.636955225234274, -25.316414967659952], [-57.637037221071623, -25.31645330656858], [-57.637139014712318, -25.316549215029269], [-57.637280572652124, -25.316705688733574], [-57.637331678726611, -25.316772330287243], [-57.637419781967665, -25.316835524792644], [-57.637523521697993, -25.316888576456215], [-57.637614886684077, -25.316911139129047], [-57.637695914841423, -25.316929643073671], [-57.637782176490035, -25.316987350356605], [-57.637877422182115, -25.317031903032131], [-57.637923392232423, -25.317116744687066], [-57.63804347076114, -25.31718478607862], [-57.638200840034649, -25.317228208125215], [-57.638368845030087, -25.317240939457303], [-57.638424543277026, -25.317273532572418], [-57.638461325664231, -25.31732348175084], [-57.638521458427064, -25.317458281857576], [-57.638563648330191, -25.317537545373892], [-57.638627480307605, -25.317640922762106], [-57.638706587465997, -25.31777172140227], [-57.638719664911775, -25.317905032113377], [-57.638663679886321, -25.31805651584046], [-57.638663184272872, -25.318112427569361], [-57.638708336295167, -25.318149660901497], [-57.641527646386074, -25.31661040153379], [-57.641997728287024, -25.316343624962716], [-57.642746654588706, -25.315918596347942], [-57.643623792879652, -25.31542843186158], [-57.645047796728932, -25.314632866140062], [-57.64524203298626, -25.314328338285844], [-57.64548312595619, -25.31417020902558], [-57.646111771562651, -25.314030041234943], [-57.647533324517561, -25.313251492912958], [-57.648518379156918, -25.312693826848534], [-57.649284357313292, -25.312260178485968], [-57.650050449802052, -25.311826457969957], [-57.65055601703277, -25.311540229089928], [-57.650828620465859, -25.311385892104685], [-57.651146756798283, -25.31120577598799], [-57.651468670784077, -25.311023519468954], [-57.652111066608427, -25.310659813484982], [-57.652810787672337, -25.310263645121616], [-57.653206955209846, -25.310039341307871], [-57.653596073290664, -25.309819025694416], [-57.654140170447867, -25.309510960039805], [-57.654813227708338, -25.309129872914514], [-57.655233354963322, -25.308892152923391], [-57.654666371599255, -25.308134311592699], [-57.654041916981903, -25.307255530238887], [-57.653815662140133, -25.306931847748622], [-57.653383482521349, -25.30626892888441], [-57.652502845202427, -25.304953021937688], [-57.652010778732219, -25.305220949032552], [-57.651641475567772, -25.304681860627621], [-57.651257738998289, -25.304112554390127], [-57.650787944321465, -25.303413855334835], [-57.649914634626946, -25.303919344718775], [-57.649264506284553, -25.30426601672697], [-57.648523356809143, -25.304692682480905], [-57.647771638022618, -25.305115396872047], [-57.646941467816511, -25.305599827400826], [-57.646212188964789, -25.306012205918595], [-57.645482850924431, -25.306414350654478], [-57.643732495035948, -25.307393805229029], [-57.642958612771928, -25.30788819838823], [-57.642184346724157, -25.308310982125516], [-57.641309334636581, -25.308836495955205], [-57.640400285515206, -25.309311004586856], [-57.639637469735284, -25.309774642844456], [-57.638829580063017, -25.310228243844531], [-57.638016890416381, -25.310688012731116], [-57.637293071458281, -25.311059054509151], [-57.636518427396766, -25.311497973979858], [-57.635748560441591, -25.311962241430823], [-57.635372875237429, -25.312183762876778], [-57.63497844706292, -25.312379989709616], [-57.634268191241354, -25.312679067745137], [-57.6333443214669, -25.313055179873704], [-57.633051557743833, -25.313119870198726], [-57.632531216353172, -25.312930312452878], [-57.631891290619507, -25.312769623502035], [-57.631274692857659, -25.31260961207682], [-57.630915933424568, -25.312542533388179]]]]
    }
  }]
};
exports.barrios = barrios;
},{}],"images/geochicas.png":[function(require,module,exports) {
module.exports = "/geochicas.6ec8bcd8.png";
},{}],"images/health.png":[function(require,module,exports) {
module.exports = "/health.9af5620c.png";
},{}],"app.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("./css/app.css");

var _establecimientos_salud = require("./data/establecimientos_salud");

var _barrios = require("./data/barrios.js");

var _geochicas = _interopRequireDefault(require("./images/geochicas.png"));

var _health = _interopRequireDefault(require("./images/health.png"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = function _default() {
  //crear objeto mapa
  var mymap = L.map("mymap").setView([-25.301, -57.636], 12);
  var osm = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'
  });
  var mapboxLight = L.tileLayer('https://api.tiles.mapbox.com/v4/mapbox.light/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'
  });
  mapboxLight.addTo(mymap);
  osm.addTo(mymap);
  var baseLayers = {
    "OpenStreetMap": osm,
    "Mapbox Light": mapboxLight
  };
  var overlays = {};
  var myControl = L.control.layers(baseLayers, overlays);
  myControl.addTo(mymap);
  var healthIcon = L.icon({
    iconUrl: _health.default,
    iconSize: [40, 30]
  });
  var markers = L.markerClusterGroup();
  var puntosLayer = L.geoJSON(_establecimientos_salud.puntos, {
    pointToLayer: function pointToLayer(feature, latlng) {
      var marker = L.marker(latlng, {
        icon: healthIcon
      });
      markers.addLayer(marker);
      return marker;
    }
  }).bindPopup(function (layer) {
    return "<div class=\"infowindow\"><h2>".concat(layer.feature.properties.nombre, "</h2><h3>").concat(layer.feature.properties.tipo, "</h3><p>").concat(layer.feature.properties.direccion, "</p><div>");
  });
  puntosLayer.addTo(mymap);
  mymap.addLayer(markers);
  var barriosLayer = L.geoJSON(_barrios.barrios, {
    style: function style() {
      return {
        color: "#888",
        weight: 2,
        fillColor: '#8fb8ca',
        fillOpacity: .6
      };
      ;
    }
  }).bindPopup(function (_ref) {
    var feature = _ref.feature;
    var area = turf.area(feature.geometry).toFixed(2);
    return "<div class=\"infowindow\"><h2>".concat(feature.properties.nombre, "</h2><h3>").concat(area, " m2</h3><div>");
  });
  barriosLayer.addTo(mymap);
  myControl.addOverlay(barriosLayer, 'Barrios');
  myControl.addOverlay(puntosLayer, 'Centros');
};

exports.default = _default;
},{"./css/app.css":"css/app.css","./data/establecimientos_salud":"data/establecimientos_salud.js","./data/barrios.js":"data/barrios.js","./images/geochicas.png":"images/geochicas.png","./images/health.png":"images/health.png"}],"index.js":[function(require,module,exports) {
"use strict";

var _app = _interopRequireDefault(require("./app"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _app.default)();
},{"./app":"app.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "49390" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/src.e31bb0bc.js.map