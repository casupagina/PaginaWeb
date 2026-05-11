// ==========================================
// 5.visualizador.js
// ==========================================

var mapaNecesidades;
var controlCapas;
var capas = {};
var capaActiva = null;

var variablesCapas = {
  Pobreza: "porcentaje_2",
  "Rezago educativo": "porcentaje",
  "Carencia salud": "porcentaje",
  "Carencia alimentación": "2020",
  "Carencia vivienda": "poblacion",
  "Servicios básicos": "porcentaje",
};

// 🔥 RANGOS REALES (Ajustados a 2 cortes para 3 categorías)
const rangosCapas = {
  Pobreza: [41, 61],
  "Servicios básicos": [20, 40],
  "Rezago educativo": [10, 20],
  "Carencia alimentación": [14, 30], // El tercer rango empieza en 30 según tus datos
  "Carencia vivienda": [31000, 61000],
  "Carencia salud": [20, 41],
};

// ==========================
// DATOS UAEM
// ==========================
let datosPresenciaUAEM = [];

async function cargarDatosPresencia() {
  try {
    const response = await fetch("data/presencia_u.json");
    datosPresenciaUAEM = await response.json();
    console.log("📍 Datos de presencia universitaria listos");
  } catch (error) {
    console.error("Error:", error);
  }
}
cargarDatosPresencia();

function inyectarPresenciaUAEM(mapaTarget) {
  if (!mapaTarget) return;

  const iconoBirrete = L.icon({
    iconUrl: "img/icono_presencia1.png",
    iconSize: [35, 35],
    iconAnchor: [17, 34],
  });

  datosPresenciaUAEM.forEach((p) => {
    L.marker([p.Latitud, p.Longitud], { icon: iconoBirrete })
      .bindTooltip(
        `<b>${p["Presencia Universitaria"]}</b><br>${p.Clasificacion}`,
      )
      .addTo(mapaTarget);
  });
}

// ==========================
// COLORES DINÁMICOS
// ==========================
function getColor(valor, nombreCapa) {
  valor = Number(valor);

  let r = rangosCapas[nombreCapa];
  if (!r || isNaN(valor)) return "#ccc";

  return valor > r[1] ? "#132d1e" : valor > r[0] ? "#6d8f75" : "#b8c9b0";
}

// ==========================
// LEYENDA DINÁMICA
// ==========================
function actualizarLeyenda(nombreCapa) {
  let div = document.querySelector(".legend");
  if (!div) return;

  // Colores definidos en tus rangos reales
  const colorAlto = "#132d1e"; // El más oscuro
  const colorMedio = "#6d8f75"; // El intermedio
  const colorBajo = "#b8c9b0"; // El más claro

  // Generamos el HTML.
  // 1. El <h4> tomará automáticamente el nombre de cualquiera de tus 6 capas.
  // 2. Usamos 'legend-row' para que tu CSS pinte los cuadritos.
  // 3. El orden es Alto -> Medio -> Bajo como pediste.
  div.innerHTML = `
    <h4>${nombreCapa}</h4>
    <div class="legend-row">
      <i style="background: ${colorAlto}"></i> 
      <span>Alto</span>
    </div>
    <div class="legend-row">
      <i style="background: ${colorMedio}"></i> 
      <span>Medio</span>
    </div>
    <div class="legend-row">
      <i style="background: ${colorBajo}"></i> 
      <span>Bajo</span>
    </div>
  `;
}
// ==========================
// MAPA
// ==========================
function iniciarMapaNecesidades() {
  if (mapaNecesidades) return;

  mapaNecesidades = L.map("mapa-necesidades", {
    minZoom: 9,
    maxZoom: 12,
  }).setView([19.3, -99.6], 9);

  // CONTORNO
  fetch("http://127.0.0.1:5000/api/contorno_estado")
    .then((res) => res.json())
    .then((data) => {
      L.geoJSON(data, {
        style: {
          color: "#2d4d2b",
          weight: 2,
          fillOpacity: 0,
          interactive: false,
        },
      }).addTo(mapaNecesidades);
    });

  inyectarPresenciaUAEM(mapaNecesidades);

  L.tileLayer(
    "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
  ).addTo(mapaNecesidades);

  controlCapas = L.control
    .layers(null, null, {
      collapsed: false,
      sortLayers: true,
    })
    .addTo(mapaNecesidades);

  // ==========================
  // FUNCIÓN PARA CARGAR CAPAS
  // ==========================
  function cargarCapa(nombre, url) {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        var capa = L.geoJSON(data, {
          style: function (feature) {
            var campo = variablesCapas[nombre];
            var valor = feature.properties[campo];

            return {
              fillColor: getColor(valor, nombre),
              weight: 1,
              color: "white",
              fillOpacity: 0.7,
            };
          },

          onEachFeature: function (feature, layer) {
            var campo = variablesCapas[nombre];
            var valorRaw = feature.properties[campo];
            var nombreMun = feature.properties.nomgeo;

            let textoValor;

            if (nombre === "Carencia vivienda") {
              // ENTERO con separador de miles
              let valor = Number(valorRaw).toLocaleString("es-MX", {
                maximumFractionDigits: 0,
              });

              textoValor = `${valor} personas con Carencia a la vivienda`;
            } else {
              // DECIMALES para las demás capas
              let valor = Number(valorRaw).toFixed(2);

              textoValor = `${valor}% de ${nombre}`;
            }

            layer.bindTooltip(`<b>${nombreMun}</b><br>${textoValor}`, {
              sticky: true,
            });

            layer.on("mouseover", function () {
              this.setStyle({ weight: 1.5, color: "#000" });
            });

            layer.on("mouseout", function () {
              this.setStyle({ weight: 1, color: "white" });
            });
          },
        });

        capas[nombre] = capa;
        controlCapas.addBaseLayer(capa, nombre);
      });
  }

  // ==========================
  // CARGAR CAPAS
  // ==========================
  cargarCapa("Rezago educativo", "http://127.0.0.1:5000/api/rezago_educativo");
  cargarCapa("Carencia salud", "http://127.0.0.1:5000/api/carencia_salud");
  cargarCapa(
    "Carencia alimentación",
    "http://127.0.0.1:5000/api/carencia_alimentacion",
  );
  cargarCapa(
    "Carencia vivienda",
    "http://127.0.0.1:5000/api/carencia_vivienda",
  );
  cargarCapa(
    "Servicios básicos",
    "http://127.0.0.1:5000/api/servicios_basicos",
  );
  cargarCapa("Pobreza", "http://127.0.0.1:5000/api/pobreza");

  // ==========================
  // LEYENDA
  // ==========================
  var leyenda = L.control({ position: "bottomright" });

  leyenda.onAdd = function () {
    var div = L.DomUtil.create("div", "legend");
    div.innerHTML = "<h4>Selecciona una capa</h4>";

    return div;
  };

  leyenda.addTo(mapaNecesidades);

  // ==========================
  // EVENTO CAMBIO DE CAPA (LIMPIO Y NATIVO)
  // ==========================
  mapaNecesidades.on("baselayerchange", function (e) {
    // Si eligieron la capa vacía, limpiamos título y leyenda
    if (e.name === "🗺️ Sin capa temática") {
      document.getElementById("titulo-visualizador").innerText =
        "Visualizador de Necesidades Sociales";
      document.querySelector(".legend").innerHTML =
        "<h4>Selecciona una capa</h4>";
      return;
    }

    // Actualizamos el título del HTML
    document.getElementById("titulo-visualizador").innerText =
      "Mapa de " + e.name;

    // Actualizamos la leyenda de colores
    actualizarLeyenda(e.name);
  });

  // Evento separado para limpiar la referencia si el usuario desmarca manualmente
  mapaNecesidades.on("overlayremove", function (e) {
    if (capaActiva === e.layer) {
      capaActiva = null;
      // Opcional: Resetear la leyenda a "Selecciona una capa"
      document.querySelector(".legend").innerHTML =
        "<h4>Selecciona una capa</h4>";
    }
  });
}
