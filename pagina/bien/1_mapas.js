// ==========================================
// 1_mapas.js: MAPA DINÁMICO (TÍTULOS Y FUENTES FINALES)
// ==========================================

let mapDigital = null,
  mapAgua = null,
  mapOferta = null;
mapAlimenticio = null;

let markersOfertaLayer = null;
let geoLayerDigital = null;
let geoLayerAgua = null;
let geoLayerOferta = null;
let geoLayerFondo = null;
let geoLayerAlimenticio = null;

// --- CONFIGURACIÓN DE VISTAS ---
const ZOOM_LEVEL = 8.9;
// 1. VISTA CENTRO (Posición normal)
const VIEW_CENTER = [19.35, -99.6];
// 2. VISTA DERECHA (Para cuando la lista tapa el mapa)
const VIEW_RIGHT = [19.347596598250473, -100.46940595192122];

// --- DATOS ---
const labsDigital = [
  {
    name: "Unidad de Laboratorio Nacional de Observación de la Tierra",
    space: "Facultad de Geografía, Toluca de Lerdo",
    loc: [19.286363637666106, -99.67692734195538],
  },
  {
    name: "Laboratorio de Realidad Virtual y Edición Digital",
    space: "Facultad Arquitectura y Diseño, Toluca de Lerdo",
    loc: [19.281199138645203, -99.67755792407178],
  },
  {
    name: "Fábrica de Software en Convenio con ADEM",
    space: "C.U. Santiago Tianguistenco",
    loc: [19.197030735294735, -99.5174113862526],
  },
  {
    name: "Centro de Innovación Digital Mandra",
    space: "Facultad de Ciencias, Cerrillo Piedras Blancas",
    loc: [19.40971271665087, -99.68864857724706],
  },
];

const centrosAgua = [
  {
    name: "Instituto Interamericano de Tecnología y Ciencias del Agua (IITCA)",
    loc: [19.40035957071676, -99.71348444915596],
    space: "Unidad San Cayetano",
  },
  {
    name: "Instituto de Ciencias Agropecuarias y Rurales (ICAR)",
    loc: [19.40882563668419, -99.69370593530273],
    space: "San Cayetano Morelos",
  },
  {
    name: "Facultad de Ingeniería",
    loc: [19.282779899086794, -99.6769200502339],
    space: "C.U. Toluca de Lerdo",
  },
  {
    name: "Unidad de Laboratorio Nacional de Observación de la Tierra (LANOT)",
    loc: [19.286362822609824, -99.67695058694817],
    space: "Facultad de Geografía, Toluca de Lerdo",
  },
  {
    name: "Centro de Investigación en Ciencias Sociales y Humanas",
    loc: [19.28599058336545, -99.67808079769918],
    space: "C.U. Toluca de Lerdo",
  },
];

const centrosAlimenticio = [
  {
    name: "ICAR (Instituto de Ciencias Agropecuarias y Rurales)",
    space: "San Cayetano Morelos",
    loc: [19.409007806089125, -99.69371013557677],
  },
  {
    name: "Facultad de Planeación Urbana y Regional",
    space: "Toluca",
    loc: [19.273479375630036, -99.65655657742224],
  },
  {
    name: "Centro Universitario Amecameca",
    space: "Amecameca",
    loc: [19.131873820509142, -98.78648988113859],
  },
  {
    name: "Dirección de Entornos Académicos y del Conocimiento",
    space: "Toluca",
    loc: [19.291517095805034, -99.64612260610195],
  },
];

function getColorAgua(n) {
  return n === "Nivel crítico"
    ? "#153221"
    : n === "Nivel severo"
      ? "#365a41"
      : n === "Nivel moderado"
        ? "#577a5f"
        : "#CCCCCC";
}
function getColorIndustrial(d) {
  return d >= 15
    ? "#153221"
    : d >= 5
      ? "#365a41"
      : d >= 1
        ? "#577a5f"
        : "#84ac9c";
}
function getColorAlimentario(nivel) {
  return nivel === "Alta"
    ? "#153221"
    : nivel === "Media"
      ? "#365a41"
      : nivel === "Baja"
        ? "#577a5f"
        : "#CCCCCC";
}
// =====================================================
// FILTRAR MAPA
// =====================================================
function filtrarMapa(tipo, filtro) {
  // 0. Identificar la capa y el mapa según el tipo
  let capa;
  let mapaActivo;

  if (tipo === "digital") {
    capa = geoLayerDigital;
    mapaActivo = mapDigital;
  } else if (tipo === "agua") {
    capa = geoLayerAgua;
    mapaActivo = mapAgua;
  } else if (tipo === "alimenticio") {
    capa = geoLayerAlimenticio;
    mapaActivo = mapAlimenticio;
  }

  let cajaFlotante = document.getElementById(`lista-flotante-${tipo}`);
  let municipiosVisibles = [];

  if (!capa) return;

  // 1. Filtrar visualmente los polígonos
  capa.eachLayer((layer) => {
    let mostrar = false;
    const prop = layer.feature.properties;

    if (filtro === "Todos") {
      mostrar = true;
    } else if (tipo === "digital") {
      const val = prop.N_parquesIndus;
      if (filtro === "Alta" && val >= 15) mostrar = true;
      if (filtro === "Media" && val >= 5 && val < 15) mostrar = true;
      if (filtro === "Baja" && val >= 1 && val < 5) mostrar = true;
      if (filtro === "Sin" && val === 0) mostrar = true;
    } else if (tipo === "agua") {
      if (prop["Nivel de sequia"] === filtro) mostrar = true;
    } else if (tipo === "alimenticio") {
      // Filtra por la propiedad 'vulnerabilidad' que calculamos al cargar
      if (prop.vulnerabilidad === filtro) mostrar = true;
    }

    if (mostrar) {
      // Asignar color según el nodo
      let color;
      if (tipo === "digital") {
        color = getColorIndustrial(prop.N_parquesIndus);
      } else if (tipo === "agua") {
        color = getColorAgua(prop["Nivel de sequia"]);
      } else if (tipo === "alimenticio") {
        color = getColorAlimentario(prop.vulnerabilidad);
      }

      layer.setStyle({
        fillColor: color,
        fillOpacity: 0.75,
        opacity: 1,
        color: "white",
        weight: 0.8,
      });

      // Guardar el nombre del municipio (usamos NOMGEO que estandarizamos antes)
      municipiosVisibles.push(prop.NOMGEO || prop.nomgeo);
    } else {
      // Estilo para municipios ocultos (fondo gris claro para dar contexto)
      layer.setStyle({
        fillColor: "#c4bdbd" /* Un tono gris muy suave y elegante */,
        fillOpacity: 0.55 /* Lo hace semi-sólido pero sutil */,
        opacity: 1 /* Mantiene visible... */,
        color: "#ffffff" /* ...el borde blanco de los municipios */,
        weight: 0.8,
      });
    }
  });

  // 2. Gestionar Panel Inferior y Movimiento de Cámara
  if (cajaFlotante) {
    if (filtro === "Todos") {
      cajaFlotante.style.display = "none";

      // 👇 NUEVO: Limpiamos la lista de columnas de la izquierda
      let contenedorIzquierdo = document.getElementById(`municipios-${tipo}`);
      if (contenedorIzquierdo) {
        contenedorIzquierdo.innerHTML = "";
      }

      if (mapaActivo) {
        mapaActivo.closePopup();
        mapaActivo.setView(VIEW_CENTER, ZOOM_LEVEL, { animate: true });
      }
    } else {
      cajaFlotante.style.display = "flex";

      // Seleccionamos el contenedor que está fuera del mapa (a la izquierda)
      let contenedorIzquierdo = document.getElementById(`municipios-${tipo}`);

      if (contenedorIzquierdo) {
        if (municipiosVisibles.length === 0) {
          contenedorIzquierdo.innerHTML =
            "<div style='color:#999; font-size:0.9rem; text-align:right;'>Sin resultados</div>";
        } else {
          // Limpieza y orden alfabético
          let nombresLimpios = municipiosVisibles
            .map((n) => (n ? n.trim() : null))
            .filter((n) => n !== null);
          let sortedMuns = [...new Set(nombresLimpios)].sort();

          // Contador para que compruebes que no falta ninguno
          let htmlContent = `
            <div style="color: #b3975d; font-weight: bold; font-size: 0.75rem; margin-bottom: 15px; text-align: right; width: 100%;">
                MUNICIPIOS: ${sortedMuns.length}
            </div>
            <div class="contenedor-columnas-seguro">`;

          // JS CREA LAS COLUMNAS INFALIBLES (Corte cada 18 municipios)
          const MAX_ITEMS = 32;
          for (let i = 0; i < sortedMuns.length; i += MAX_ITEMS) {
            let grupo = sortedMuns.slice(i, i + MAX_ITEMS);

            htmlContent += `<div class="columna-mun">`;
            grupo.forEach((mun) => {
              htmlContent += `<div class="mun-item-seguro">${mun}</div>`;
            });
            htmlContent += `</div>`;
          }

          htmlContent += `</div>`;
          contenedorIzquierdo.innerHTML = htmlContent;
        }
      }
    }
  }
}

// =====================================================
// INICIALIZACIÓN
// =====================================================
function initMap(mapId, data, listId, type) {
  let currentMap =
    type === "digital"
      ? mapDigital
      : type === "agua"
        ? mapAgua
        : type === "oferta"
          ? mapOferta
          : mapAlimenticio;

  if (currentMap) return;

  // 1. INICIO DE MAPA Y CAPA BASE
  const map = L.map(mapId, {
    attributionControl: false,
    zoomControl: false, // Cambiado de 0.1 a false (o true si quieres los botones)
    zoomSnap: 0.1, // ¡ESTA ES LA CLAVE! Permite que el zoom use decimales
    zoomDelta: 0.1, // Opcional: hace que el zoom con la rueda sea más suave
  }).setView(VIEW_CENTER, 8.9);

  if (typeof inyectarPresenciaUAEM === "function") inyectarPresenciaUAEM(map);

  // 2. CONTROLES GENERALES (Logo, Zoom y Reset)
  if (
    type === "digital" ||
    type === "agua" ||
    type === "oferta" ||
    type === "alimenticio"
  ) {
    L.control.zoom({ position: "topright" }).addTo(map);

    const ResetControl = L.Control.extend({
      options: { position: "topright" },
      onAdd: function (map) {
        const btn = L.DomUtil.create("div", "reset-map-btn");
        btn.innerHTML = "RESTABLECER";
        L.DomEvent.on(btn, "click", function (e) {
          L.DomEvent.stopPropagation(e);
          if (type === "oferta") {
            if (geoLayerOferta && geoLayerOferta.getLayers().length > 0)
              map.fitBounds(geoLayerOferta.getBounds(), { padding: [50, 50] });
            else map.setView(VIEW_CENTER, ZOOM_LEVEL);
          } else {
            filtrarMapa(type, "Todos");
            map.setView(VIEW_CENTER, ZOOM_LEVEL, { animate: true });
          }
          map.closePopup();
        });
        return btn;
      },
    });
    map.addControl(new ResetControl());
  }

  // 3. LÓGICA DE POLÍGONOS Y LEYENDAS (Digital, Agua y Alimenticio)
  if (type === "digital" || type === "agua" || type === "alimenticio") {
    const isDigital = type === "digital";
    const isAgua = type === "agua";
    const isAlim = type === "alimenticio";

    // Preparar datos de alimentación si es el caso
    if (isAlim && typeof datosAlimentacion !== "undefined") {
      datosAlimentacion.features.forEach((f) => {
        const val = f.properties["2020"];
        // Clasificación basada en tus rangos del visualizador
        f.properties.vulnerabilidad =
          val > 30 ? "Alta" : val >= 14.5 ? "Media" : "Baja";
        f.properties.NOMGEO = f.properties.nomgeo; // Estandarizamos nombre para el filtro
      });
    }

    const geoData = isDigital
      ? datosIndustria
      : isAgua
        ? datosMunicipios
        : datosAlimentacion;

    const layer = L.geoJSON(geoData, {
      style: (f) => ({
        fillColor: isDigital
          ? getColorIndustrial(f.properties.N_parquesIndus)
          : isAgua
            ? getColorAgua(f.properties["Nivel de sequia"])
            : getColorAlimentario(f.properties.vulnerabilidad),
        weight: 0.8,
        color: "white",
        fillOpacity: 0.7,
      }),
      onEachFeature: (f, l) => {
        l.bindTooltip(`<b>${f.properties.NOMGEO}</b>`, { sticky: true });
      },
    }).addTo(map);

    // Guardar referencia de la capa
    if (isDigital) geoLayerDigital = layer;
    else if (isAgua) geoLayerAgua = layer;
    else {
      geoLayerAlimenticio = layer;
      mapAlimenticio = map;
    }

    // --- CREACIÓN DE LEYENDA Y PANEL INFERIOR ---
    const wrapper = document.createElement("div");
    wrapper.className = "map-bottom-panel";

    const listDiv = document.createElement("div");
    listDiv.className = "list-block";
    listDiv.id = `lista-flotante-${type}`;
    wrapper.appendChild(listDiv);

    const legendDiv = document.createElement("div");
    legendDiv.className = "legend-block";

    const title = document.createElement("div");
    title.className = "legend-title";
    title.innerHTML = isDigital
      ? "Impacto municipal en función al<br>número de Parques Industriales"
      : isAgua
        ? "Impacto municipal de Sequía"
        : "Impacto municipal de Vulnerabilidad Alimentaria";
    legendDiv.appendChild(title);

    const createBtn = (color, text, filterVal) => {
      const btn = document.createElement("div");
      btn.className = "legend-item";
      btn.innerHTML = `<i style="background:${color}"></i> ${text}`;
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        filtrarMapa(type, filterVal);
      });
      return btn;
    };

    if (isDigital) {
      legendDiv.appendChild(createBtn("#153221", "Alta (35-15)", "Alta"));
      legendDiv.appendChild(createBtn("#365A41", "Media (14-5)", "Media"));
      legendDiv.appendChild(createBtn("#577A5F", "Baja (4-1)", "Baja"));
      legendDiv.appendChild(
        createBtn("#94A193", "Sin presencia de parques", "Sin"),
      );
      const src = document.createElement("div");
      src.className = "source-text";
      src.innerHTML = "Fuente: FIDEPAR 2026";
      legendDiv.appendChild(src);
    } else if (isAgua) {
      legendDiv.appendChild(
        createBtn("#153221", "Municipios críticos en sequía", "Nivel crítico"),
      );
      legendDiv.appendChild(
        createBtn("#365A41", "Municipios severos en sequía", "Nivel severo"),
      );
      legendDiv.appendChild(
        createBtn(
          "#6a8771",
          "Municipios moderados en sequía",
          "Nivel moderado",
        ),
      );
      const src = document.createElement("div");
      src.className = "source-text";
      src.innerHTML = "Fuente: CONAGUA";
      legendDiv.appendChild(src);
    } else if (isAlim) {
      legendDiv.appendChild(
        createBtn("#153221", "Vulnerabilidad Alta", "Alta"),
      );
      legendDiv.appendChild(
        createBtn("#365A41", "Vulnerabilidad Media", "Media"),
      );
      legendDiv.appendChild(
        createBtn("#577A5F", "Vulnerabilidad Baja", "Baja"),
      );
      const src = document.createElement("div");
      src.className = "source-text";
      src.innerHTML = "Fuente: CONEVAL";
      legendDiv.appendChild(src);
    }

    wrapper.appendChild(legendDiv);
   
    map.getContainer().appendChild(wrapper);
    
  }

  // 4. LÓGICA DE OFERTA Y MARCADORES LATERALES
  if (type === "oferta") {
    markersOfertaLayer = L.layerGroup().addTo(map);
    mapOferta = map;
  }

  if (listId && data) {
    const list = document.getElementById(listId);
    data.forEach((item) => {
      const marker = L.marker(item.loc)
        .addTo(map)
        .bindPopup(`<strong>${item.name}</strong><br>${item.space}`);

      const div = document.createElement("div");
      div.className = "sidebar-item";
      div.innerHTML = `<strong>${item.name}</strong><br><small>${item.space}</small>`;
      div.onclick = () => {
        map.panTo(item.loc, { animate: true });
        marker.openPopup();
        const iconElement = marker._icon;
        iconElement.style.transition = "transform 0.2s";
        iconElement.style.transform += " scale(1.5)";
        setTimeout(() => {
          iconElement.style.transform = iconElement.style.transform.replace(
            " scale(1.5)",
            "",
          );
        }, 300);
      };
      list.appendChild(div);
    });
  }
}
