// ==========================================
// 7_cultura.js: EQUIPAMIENTO PARA LA CULTURA
// ==========================================

const espaciosCultura = [
  {
    categoria: "Museo",
    nombre: 'Museo Universitario "Dr. Luis Mario Schneider"',
    filtro: "fuera",
    ciudad: "Malinalco",
    direccion: "Amajac esq. Agustín Melgar, Barrio Santa Mónica, Malinalco",
    loc: [18.95111, -99.50115],
  },
  {
    categoria: "Museo",
    nombre: 'Museo de Historia Universitaria "José María Morelos y Pavón"',
    filtro: "toluca",
    ciudad: "Toluca",
    direccion: "Edificio Central de Rectoría, Instituto Literario 100, Centro",
    loc: [19.285789, -99.653996],
  },
  {
    categoria: "Museo",
    nombre: 'Museo Universitario de Historia Natural "Dr. Manuel M. Villada"',
    filtro: "toluca",
    ciudad: "Toluca",
    direccion: "Edificio Central de Rectoría, Instituto Literario 100, Centro",
    loc: [19.285789, -99.653996],
  },
  {
    categoria: "Museo",
    nombre: 'Museo Universitario "Leopoldo Flores"',
    filtro: "toluca",
    ciudad: "Toluca",
    direccion: "Cerro de Coatepec, Ciudad Universitaria",
    loc: [19.28651, -99.67818],
  },
  {
    categoria: "Museo",
    nombre: 'Pinacoteca Universitaria "Los Autonomistas"',
    filtro: "toluca",
    ciudad: "Toluca",
    direccion: "Edificio Central de Rectoría, Instituto Literario 100, Centro",
    loc: [19.285789, -99.653996],
  },
  {
    categoria: "Teatro",
    nombre: 'Teatro Isabelino "Antonio Hernández Zimbrón"',
    filtro: "toluca",
    ciudad: "Toluca",
    direccion: "Casa de las Diligencias, Av. Juárez Norte 114, Centro",
    loc: [19.292, -99.65433],
  },
  {
    categoria: "Teatro",
    nombre: 'Teatro Universitario "Los Jaguares"',
    filtro: "toluca",
    ciudad: "Toluca",
    direccion: "Valentín Gómez Farías 601, Col. La Merced",
    loc: [19.285341, -99.660151],
  },
  {
    categoria: "Teatro",
    nombre: 'Teatro Universitario de Cámara "Esvón Gamaliel"',
    filtro: "toluca",
    ciudad: "Toluca",
    direccion: "Edificio Central de Rectoría, Instituto Literario 100, Centro",
    loc: [19.285789, -99.653996],
  },
  {
    categoria: "Galería",
    nombre: "Galería Délfica",
    filtro: "toluca",
    ciudad: "Toluca",
    direccion: "Edificio UAEMitas, Leona Vicario 201 esq. Primero de Mayo",
    loc: [19.291098, -99.645881],
  },
  {
    categoria: "Galería",
    nombre: 'Galería Universitaria "Fernando Cano"',
    filtro: "toluca",
    ciudad: "Toluca",
    direccion: "Edificio Central de Rectoría, Instituto Literario 100, Centro",
    loc: [19.285789, -99.653996],
  },
  {
    categoria: "Galería",
    nombre: "Corredor Cultural Universitario",
    filtro: "toluca",
    ciudad: "Toluca",
    direccion: "Corredor Matamoros–Jesús Carranza–Paseo Tollocan",
    loc: [19.276, -99.661],
  },
  {
    categoria: "Centro cultural",
    nombre: "Centro Cultural Universitario Casa de las Diligencias",
    filtro: "toluca",
    ciudad: "Toluca",
    direccion: "Av. Juárez Norte 114, Centro",
    loc: [19.292, -99.65433],
  },
  {
    categoria: "Centro cultural",
    nombre: "Centro de Actividades Culturales (CeAC)",
    filtro: "toluca",
    ciudad: "Toluca",
    direccion: "Instituto Literario 211, Centro",
    loc: [19.28627, -99.651877],
  },
  {
    categoria: "Centro cultural",
    nombre: 'Centro Cultural Universitario "Dr. Luis Mario Schneider"',
    filtro: "fuera",
    ciudad: "Malinalco",
    direccion: "Finca El Olvido, carretera Malinalco–Chalma, Barrio San Juan",
    loc: [18.9477, -99.5047],
  },
  {
    categoria: "Centro cultural",
    nombre: "Casa de Cultura de la UAEMéx en Tlalpan",
    filtro: "fuera",
    ciudad: "Ciudad de México",
    direccion: "Av. Triunfo de la Libertad 9 Bis, Centro de Tlalpan",
    loc: [19.28649, -99.16781],
  },
  {
    categoria: "Biblioteca",
    nombre: 'Biblioteca Central "Lic. Juan Josafat Pichardo Cruz"',
    filtro: "toluca",
    ciudad: "Toluca",
    direccion: "Cerro de Coatepec, Ciudad Universitaria",
    loc: [19.28716, -99.67913],
  },
  {
    categoria: "Biblioteca",
    nombre: 'Biblioteca de Área "Dr. Rafael López Castañares"',
    filtro: "toluca",
    ciudad: "Toluca",
    direccion: "Área de la Salud, Paseo Tollocan esq. Jesús Carranza",
    loc: [19.27221, -99.65894],
  },
  {
    categoria: "Biblioteca",
    nombre: 'Biblioteca de Área "El Cerrillo"',
    filtro: "toluca",
    ciudad: "Toluca",
    direccion: "Campus El Cerrillo, carretera Toluca–Ixtlahuaca",
    loc: [19.40925, -99.69115],
  },
  {
    categoria: "Otro",
    nombre: "Ágora de Cénide",
    filtro: "toluca",
    ciudad: "Toluca",
    direccion: "Entorno de la Facultad de Humanidades, Ciudad Universitaria",
    loc: [19.28029, -99.677032],
  },
  {
    categoria: "Otro",
    nombre: 'Observatorio Meteorológico Universitario "Mariano Bárcena"',
    filtro: "toluca",
    ciudad: "Toluca",
    direccion: "Edificio Central de Rectoría, Instituto Literario 100, Centro",
    loc: [19.285789, -99.653996],
  },
];

// ==========================================
// VARIABLES GLOBALES
// ==========================================

let mapCultura = null;
let markersCultura = null;
let capaMunicipiosCultura = null;
let filtroCulturaActual = "toluca";
let boundsMunicipioCultura = null;

// ==========================================
// NORMALIZAR TEXTOS
// ==========================================

function normalizarCultura(texto) {
  return (texto || "")
    .toString()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]/g, "");
}

// ==========================================
// INICIALIZAR MAPA
// ==========================================

function initMapaCultura() {
  const contenedor = document.getElementById("map-cultura");

  if (!contenedor) {
    console.error("No se encontró el elemento #map-cultura");
    return;
  }

  if (!mapCultura) {
    mapCultura = L.map("map-cultura", {
      zoomControl: false,
      minZoom: 7,
      maxZoom: 18,
    }).setView([19.285, -99.66], 13);

    L.tileLayer(
      "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
      {
        attribution: "&copy; OpenStreetMap &copy; CARTO",
      },
    ).addTo(mapCultura);

    L.control
      .zoom({
        position: "topright",
      })
      .addTo(mapCultura);

    markersCultura = L.layerGroup().addTo(mapCultura);
  }

  setTimeout(() => {
    mapCultura.invalidateSize();
    filtrarCultura(filtroCulturaActual);
  }, 150);
}

// ==========================================
// CREAR CONTENIDO DEL POPUP
// ==========================================

function crearPopupInmueble(lista) {
  const direccion = lista[0]?.direccion || "Dirección no disponible";
  const ciudad = lista[0]?.ciudad || "";

  const espaciosHtml = lista
    .map(
      (item) => `
        <div class="cultura-popup-item">
          <strong>${item.nombre}</strong>
          <span>${item.categoria}</span>
        </div>
      `,
    )
    .join("");

  const cantidad = lista.length;

  return `
    <div class="cultura-popup">
      <div class="cultura-popup-direccion">
        <strong>${ciudad}</strong><br>
        ${direccion}
      </div>

      ${
        cantidad > 1
          ? `<div style="margin-bottom:8px; color:#777; font-size:0.82rem;">
               ${cantidad} espacios culturales en este inmueble
             </div>`
          : ""
      }

      <div class="cultura-popup-lista">
        ${espaciosHtml}
      </div>
    </div>
  `;
}

// ==========================================
// AGRUPAR ESPACIOS POR COORDENADAS
// ==========================================

function agruparPorInmueble(lista) {
  const grupos = new Map();

  lista.forEach((item) => {
    const clave = `${item.loc[0].toFixed(6)},${item.loc[1].toFixed(6)}`;

    if (!grupos.has(clave)) {
      grupos.set(clave, []);
    }

    grupos.get(clave).push(item);
  });

  return [...grupos.values()];
}

// ==========================================
// DIBUJAR MUNICIPIOS DEL GEOJSON
// ==========================================

function dibujarGeoJSONCultura(filtro) {
  if (!mapCultura) return;

  boundsMunicipioCultura = L.latLngBounds();

  if (capaMunicipiosCultura) {
    mapCultura.removeLayer(capaMunicipiosCultura);
    capaMunicipiosCultura = null;
  }

  if (typeof datosMunicipios === "undefined") {
    console.warn("No se encontró la variable datosMunicipios.");
    return;
  }

  capaMunicipiosCultura = L.geoJSON(datosMunicipios, {
    style: function (feature) {
      const propiedades = feature.properties || {};

      const nombre = normalizarCultura(
        propiedades.NOMGEO ||
          propiedades.nomgeo ||
          propiedades.NOM_MUN ||
          propiedades.nombre ||
          "",
      );

      const esToluca = nombre === "toluca";
      const esMalinalco = nombre === "malinalco";

      let destacado = false;

      if (filtro === "toluca") {
        destacado = esToluca;
      } else if (filtro === "fuera") {
        destacado = esMalinalco;
      }

      return {
        fillColor: destacado ? "#aeb9b0" : "#eeeeee",
        fillOpacity: destacado ? 0.7 : 0.2,
        color: destacado ? "#667568" : "#d6d6d6",
        weight: destacado ? 2 : 0.7,
      };
    },

    onEachFeature: function (feature, layer) {
      const propiedades = feature.properties || {};

      const nombre =
        propiedades.NOMGEO ||
        propiedades.nomgeo ||
        propiedades.NOM_MUN ||
        propiedades.nombre ||
        "Municipio";

      const nombreNormalizado = normalizarCultura(nombre);

      const municipioSeleccionado =
        filtro === "toluca"
          ? nombreNormalizado === "toluca"
          : nombreNormalizado === "malinalco";

      if (municipioSeleccionado && layer.getBounds) {
        boundsMunicipioCultura.extend(layer.getBounds());
      }

      layer.bindTooltip(nombre, {
        sticky: true,
        direction: "top",
      });
    },
  }).addTo(mapCultura);

  capaMunicipiosCultura.bringToBack();
}

// ==========================================
// CREAR ICONO DE MARCADOR
// ==========================================

function crearIconoCultura(cantidad) {
  if (cantidad > 1) {
    return L.divIcon({
      className: "marcador-cultura-agrupado",
      html: `
        <div style="
          width:38px;
          height:38px;
          border-radius:50%;
          background:#134a2c;
          border:3px solid white;
          box-shadow:0 3px 10px rgba(0,0,0,0.35);
          display:flex;
          justify-content:center;
          align-items:center;
          color:white;
          font-weight:bold;
          font-size:14px;
        ">
          ${cantidad}
        </div>
      `,
      iconSize: [38, 38],
      iconAnchor: [19, 38],
      popupAnchor: [0, -38],
    });
  }

  return L.divIcon({
    className: "marcador-cultura-simple",
    html: `
      <div style="
        width:30px;
        height:30px;
        border-radius:50% 50% 50% 0;
        background:#b3975d;
        border:3px solid white;
        box-shadow:0 3px 9px rgba(0,0,0,0.35);
        transform:rotate(-45deg);
      ">
        <div style="
          width:8px;
          height:8px;
          background:white;
          border-radius:50%;
          position:absolute;
          top:8px;
          left:8px;
        "></div>
      </div>
    `,
    iconSize: [30, 30],
    iconAnchor: [15, 30],
    popupAnchor: [0, -30],
  });
}

// ==========================================
// FILTRAR MAPA
// ==========================================

function filtrarCultura(filtro) {
  filtroCulturaActual = filtro;

  if (!mapCultura || !markersCultura) return;

  document.querySelectorAll(".btn-filtro-cultura").forEach((boton) => {
    const esActivo = boton.dataset.filtro === filtro;
    boton.classList.toggle("active", esActivo);
  });

  markersCultura.clearLayers();

  dibujarGeoJSONCultura(filtro);

  const espaciosFiltrados = espaciosCultura.filter(
    (item) => item.filtro === filtro,
  );

  const grupos = agruparPorInmueble(espaciosFiltrados);
  const puntos = [];

  grupos.forEach((grupo) => {
    const cantidad = grupo.length;
    const posicion = grupo[0].loc;

    const marcador = L.marker(posicion, {
      icon: crearIconoCultura(cantidad),
      title: cantidad > 1 ? `${cantidad} espacios culturales` : grupo[0].nombre,
    });

    marcador.bindPopup(crearPopupInmueble(grupo), {
      maxWidth: 380,
      minWidth: 260,
    });

    marcador.bindTooltip(
      cantidad > 1 ? `${cantidad} espacios en este inmueble` : grupo[0].nombre,
      {
        direction: "top",
        offset: [0, -25],
      },
    );

    marcador.addTo(markersCultura);
    puntos.push(posicion);
  });

  const contador = document.getElementById("contador-cultura");

  if (contador) {
    const textoFiltro = filtro === "toluca" ? "en Toluca" : "fuera de Toluca";

    contador.textContent = `${espaciosFiltrados.length} espacios culturales ${textoFiltro}`;
  }

  if (filtro === "toluca") {
    if (boundsMunicipioCultura && boundsMunicipioCultura.isValid()) {
      mapCultura.fitBounds(boundsMunicipioCultura, {
        padding: [30, 30],
        maxZoom: 11,
      });
    } else {
      mapCultura.setView([19.28511573496013, -99.65827219501965], 11);
    }
  }
}

// ==========================================
// RESTABLECER MAPA AL SALIR
// ==========================================

function limpiarMapaCultura() {
  if (!mapCultura) return;

  mapCultura.closePopup();

  if (markersCultura) {
    markersCultura.clearLayers();
  }

  if (capaMunicipiosCultura) {
    mapCultura.removeLayer(capaMunicipiosCultura);
    capaMunicipiosCultura = null;
  }

  filtroCulturaActual = "toluca";
}
