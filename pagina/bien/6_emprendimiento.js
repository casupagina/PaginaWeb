// ==========================================
// 6_emprendimiento.js: INCUBADORAS Y EMPRENDIMIENTO
// ==========================================

const centrosIncubadoras = [];

const centrosEmprendimiento = [
  {
    name: "Ciudad Universitaria",
    space: [
      "Facultad de Arquitectura y Diseño",
      "Facultad de Economía",
      "Facultad de Turismo y Gastronomía",
    ],
    loc: [19.2828, -99.68],
  },
  {
    name: "Colonia Guadalupe",
    space: [
      "Facultad de Ciencias de la Conducta",
      'Plantel "Cuauhtémoc" de la Escuela Preparatoria',
    ],
    loc: [19.2974, -99.6366],
  },
  {
    name: "Colón",
    space: [
      "Facultad de Medicina",
      "Facultad de Planeación Urbana y Regional",
      "Facultad de Química",
      'Plantel "Lic. Adolfo López Mateos" de la Escuela Preparatoria',
    ],
    loc: [19.2734, -99.6565],
  },
  {
    name: "Ceboruco",
    space: [
      'Plantel "Dr. Ángel Ma. Garibay Kintana" de la Escuela Preparatoria',
    ],
    loc: [19.260655661883547, -99.64506801242638],
  },
];

const munsAlbergue = [
  "ecatepecdemorelos",
  "tecamac",
  "nezahualcoyotl",
  "valledechalcosolidaridad",
  "atizapandezaragoza",
  "toluca",
];
const munsSinAlbergue = [
  "atlacomulco",
  "tenancingo",
  "texcoco",
  "temascaltepec",
];

const normalizarTexto = (str) => {
  return str
    ? str
        .toString()
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/\s+/g, "")
    : "";
};

let mapIncubadoras = null;
let mapEmprendimiento = null;

function initMapaPuntosInteractivos(mapId, data, listId, isTolucaOnly = false) {
  let mapInstance;

  // ==========================================
  // MAPA 1: INCUBADORAS
  // ==========================================
  if (mapId === "map-incubadoras") {
    // TAREA 3: Si el mapa ya existe al volver a entrar, lo reseteamos a su vista general
    if (mapIncubadoras) {
      mapIncubadoras.setView([19.35, -99.6], 8);
      mapIncubadoras.closePopup();
      return;
    }

    mapIncubadoras = L.map(mapId, { zoomControl: false }).setView(
      [19.35, -99.6],
      8.5,
    );
    mapInstance = mapIncubadoras;

    if (typeof datosMunicipios !== "undefined") {
      L.geoJSON(datosMunicipios, {
        style: function (feature) {
          const nombreMun = normalizarTexto(
            feature.properties.NOMGEO || feature.properties.nomgeo,
          );

          if (munsAlbergue.includes(nombreMun)) {
            return {
              fillColor: "#b3975d",
              weight: 1.5,
              color: "#ffffff",
              fillOpacity: 0.85,
            };
          } else if (munsSinAlbergue.includes(nombreMun)) {
            return {
              fillColor: "#134a2c",
              weight: 1.5,
              color: "#ffffff",
              fillOpacity: 0.85,
            };
          } else {
            return {
              fillColor: "#e5e5e5",
              weight: 1,
              color: "#ffffff",
              fillOpacity: 0.5,
            };
          }
        },
        onEachFeature: function (feature, layer) {
          const nombreMun = normalizarTexto(
            feature.properties.NOMGEO || feature.properties.nomgeo,
          );
          let tituloReal =
            feature.properties.NOMGEO || feature.properties.nomgeo;

          if (
            munsAlbergue.includes(nombreMun) ||
            munsSinAlbergue.includes(nombreMun)
          ) {
            let popupContent = "";

            if (nombreMun === "toluca") {
              popupContent = `<div style="text-align:center; padding: 4px;"><strong>${tituloReal}</strong><br><span style="color:#666;">4 Sedes de Incubadoras</span><br><em style="color:#b3975d; font-size:0.95em;">* Incubadora con servicio de albergue</em></div>`;
            } else if (munsAlbergue.includes(nombreMun)) {
              popupContent = `<div style="text-align:center; padding: 4px;"><strong>${tituloReal}</strong><br><em style="color:#b3975d;">* Incubadora con servicio de albergue</em></div>`;
            } else {
              popupContent = `<div style="text-align:center; padding: 4px;"><strong>${tituloReal}</strong><br><span style="color:#134a2c;">Incubadora sin servicio de albergue</span></div>`;
            }

            layer.bindTooltip(popupContent, {
              sticky: true,
              direction: "top",
              offset: [0, -5],
            });

            layer.on("mouseover", function () {
              this.setStyle({ fillOpacity: 1, weight: 2.5 });
            });
            layer.on("mouseout", function () {
              this.setStyle({ fillOpacity: 0.85, weight: 1.5 });
            });
          }
        },
      }).addTo(mapInstance);
    }

    const legendIncubadoras = L.control({ position: "bottomright" });
    legendIncubadoras.onAdd = function () {
      const div = L.DomUtil.create("div", "info legend legend-incubadoras");
      div.innerHTML = `
        <div class="legend-inc-main">
          <ul class="legend-inc-list">
            <li class="text-green">• Atlacomulco</li>
            <li class="text-gold">• Ecatepec*</li>
            <li class="text-gold">• Tecámac*</li>
            <li class="text-green">• Tenancingo</li>
            <li class="text-gold">• Nezahualcóyotl*</li>
            <li class="text-green">• Texcoco</li>
            <li class="text-green">• Temascaltepec</li>
            <li class="text-gold">• Valle de Chalco*</li>
            <li class="text-gold">• Valle de México*</li>
            <li>
              <span class="text-green">• Toluca</span> 
              <span class="text-light">(4): Facultad de:</span> 
              <span class="text-gold">Geografía*</span><span class="text-light">, Ciencias Agrícolas, Contaduría y Administración e Incubadora Toluca</span>
            </li>
          </ul>
        </div>
        
        <div class="legend-inc-note">
          <strong class="text-green">6 de incubadoras*</strong><br>
          <span class="text-light">cuentan con servicio de albergue</span>
        </div>
      `;
      return div;
    };
    legendIncubadoras.addTo(mapInstance);
  }
  // ==========================================
  // MAPA 2: EMPRENDIMIENTO (TOLUCA SÓLO)
  // ==========================================
  else if (mapId === "map-emprendimiento") {
    // TAREA 3: Si el mapa ya existe al volver a entrar, lo reseteamos a su vista general
    if (mapEmprendimiento) {
      mapEmprendimiento.setView([19.29, -99.65], 10.8);
      mapEmprendimiento.closePopup();
      return;
    }

    mapEmprendimiento = L.map(mapId, { zoomControl: false }).setView(
      [19.29, -99.65],
      11,
    );
    mapInstance = mapEmprendimiento;

    L.tileLayer(
      "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
      {
        attribution: "© OpenStreetMap contributors",
      },
    ).addTo(mapInstance);

    if (typeof datosMunicipios !== "undefined") {
      L.geoJSON(datosMunicipios, {
        filter: function (feature) {
          return (
            normalizarTexto(
              feature.properties.NOMGEO || feature.properties.nomgeo,
            ) === "toluca"
          );
        },
        style: {
          fillColor: "#a4b73b",
          weight: 3.5,
          color: "#a4b73b",
          fillOpacity: 0.08,
        },
        interactive: false,
      }).addTo(mapInstance);
    }

    if (data) {
      data.forEach((item) => {
        const iconHtml = `
          <div style="background-color: white; border: 2.5px solid #1c5270; border-radius: 50%; width: 20px; height: 20px; display: flex; justify-content: center; align-items: center; box-shadow: 0 2px 5px rgba(0,0,0,0.2); transition: transform 0.2s;">
            <div style="background-color: #d0a34b; width: 8px; height: 8px; border-radius: 50%;"></div>
          </div>
        `;

        const customIcon = L.divIcon({
          className: "custom-div-icon",
          html: iconHtml,
          iconSize: [20, 20],
          iconAnchor: [10, 10],
        });

        const marker = L.marker(item.loc, { icon: customIcon }).addTo(
          mapInstance,
        );

        let listaHTML = item.space
          .map((facultad) => `<li style="margin-bottom: 3px;">${facultad}</li>`)
          .join("");

        const tooltipContent = `
          <div style="border-left: 2px solid #d0a34b; padding-left: 12px; margin-left: 5px; font-family: 'DM Sans', sans-serif;">
            <strong style="color: #174a68; font-size: 14px;">${item.name}</strong>
            <ul style="color: #666666; font-size: 12px; margin: 6px 0 0 0; padding-left: 16px; list-style-type: disc;">
              ${listaHTML}
            </ul>
          </div>
        `;

        marker.bindTooltip(tooltipContent, {
          permanent: false,
          direction: "right",
          className: "tooltip-emprendimiento",
          opacity: 0.95,
          offset: [8, 0],
        });

        marker.on("mouseover", function (e) {
          const element = e.target.getElement().firstElementChild;
          if (element) element.style.transform = "scale(1.3)";
        });
        marker.on("mouseout", function (e) {
          const element = e.target.getElement().firstElementChild;
          if (element) element.style.transform = "scale(1)";
        });
      });
    }
  }

  // ==========================================
  // CONTROLES COMPARTIDOS PARA AMBOS MAPAS
  // ==========================================

  // Agregar botones de Zoom por defecto
  L.control.zoom({ position: "topright" }).addTo(mapInstance);

  // TAREA 2: Botón personalizado para restablecer la vista (⟳)
  const resetControl = L.control({ position: "topright" });

  resetControl.onAdd = function () {
    const div = L.DomUtil.create("div", "leaflet-bar leaflet-control");
    div.innerHTML = `<a href="#" title="Restablecer mapa" style="font-size:20px; width:34px; height:34px; line-height:34px; text-align:center; display:block; text-decoration:none; color:#134a2c; font-weight:bold; background-color: white;">⟳</a>`;

    div.onclick = function (e) {
      e.preventDefault();
      e.stopPropagation();
      // Regresa el mapa a su posición original según el que esté abierto
      if (mapId === "map-incubadoras")
        mapInstance.setView([19.35, -99.6], 8.5, { animate: true });
      if (mapId === "map-emprendimiento")
        mapInstance.setView([19.29, -99.65], 10.8, { animate: true });
      mapInstance.closePopup();
    };
    return div;
  };
  resetControl.addTo(mapInstance);
}
