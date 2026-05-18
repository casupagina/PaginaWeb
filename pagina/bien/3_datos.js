// ==========================================
// 3_datos.js: INV, PATENTES Y LABORATORIOS (FINAL CON MAPA PATENTES)
// ==========================================

const norm2 = (str) =>
  str
    ? str
        .toString()
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/\s+/g, " ") // normaliza espacios
        .replace(/[^\w\s]/g, "") // elimina puntos y símbolos
        .trim()
    : "";

// ==========================================
// Variables Globales
// ==========================================
let investigaciones = [];
let patentes = [];
let laboratorios = [];
let mapPatentes = null;
let markersPatentesGroup = null;
// Asegúrate de definir esta variable al principio para que sea global
let mapLabs;
let textoBusquedaActual = "";

// Agrega estas a tus variables globales al inicio de 3_datos.js
let mapInv = null;
let markersInvGroup = null;
let markersLabsGroup = null;
// Declaramos las variables del mapa para que no se pierdan
let mapInvestigacion = null;
let markersInvestigacion = null;

// Nueva función para inicializar el mapa de investigación
function initMapInv() {
  if (mapInv) return;
  const mapDiv = document.getElementById("map-investigacion");
  if (!mapDiv) return;

  // Vista inicial (Estado de México)
  mapInv = L.map("map-investigacion", { zoomControl: false }).setView(
    [19.35, -99.6],
    9,
  );

  L.tileLayer(
    "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
    {
      attribution: "&copy; CARTO",
    },
  ).addTo(mapInv);

  L.control.zoom({ position: "topright" }).addTo(mapInv);
  markersInvGroup = L.layerGroup().addTo(mapInv);
}

// Coordenadas aproximadas de espacios UAEMex
const coordenadasSedes = {
  "facultad de ingenieria": [19.2827, -99.6769],
  "facultad de quimica": [19.2845, -99.674],
  "facultad de medicina": [19.2801, -99.6755],
  "facultad de arquitectura y diseno": [19.2812, -99.6775],
  "facultad de ciencias": [19.4097, -99.6886],
  "facultad de ciencias agricolas": [19.4088, -99.6937],
  "instituto interamericano de tecnologia y ciencias del agua": [
    19.4003, -99.7134,
  ],
  "centro universitario uaem zumpango": [19.8034, -99.0886],
  "centro universitario uaem valle de chalco": [19.2985, -98.9561],
  "centro universitario uaem texcoco": [19.4348, -98.9171],
  "centro universitario uaem ecatepec": [19.6056, -99.0617],
  "facultad de odontologia": [19.2795, -99.6748],
  "facultad de economia": [19.2838, -99.6752],
  "ciudad universitaria": [19.283, -99.676],
  "centro universitario uaem valle de mexico": [19.5855, -99.2834],
  "centro universitario uaem amecameca": [19.1319, -98.7864],
  "centro universitario uaem texcoco": [19.4348, -98.9171],
  "centro universitario uaem valle de chalco": [19.2985, -98.9561],
  "centro universitario uaem ecatepec": [19.6056, -99.0617],
  "centro universitario uaem zumpango": [19.8034, -99.0886],
  "unidad academica profesional chimalhuacan": [19.4222, -98.9885],
  "campus chimalhuacan": [19.4222, -98.9885],
  "uap tianguistenco": [19.1969, -99.5175],
  "cu atlacomulco": [19.7617, -99.8408],
};

// ==========================================
// CONFIGURACIÓN: ENLACES Y COLORES DE INVESTIGACIÓN
// ==========================================

// Diccionario de enlaces oficiales (se usa si el Excel no trae uno)
const enlacesPorEspacio = {
  "facultad de ciencias": "https://facciencias.uaemex.mx/",
  "facultad de ingenieria": "https://ingenieria.uaemex.mx/",
  "facultad de medicina": "https://medicina.uaemex.mx/",
  "facultad de quimica": "https://quimica.uaemex.mx/",
  "facultad de geografia": "https://geografia.uaemex.mx/",
  "facultad de ciencias agricolas": "https://facagricolas.uaemex.mx/",
  "facultad de medicina veterinaria y zootecnia": "https://fmvz.uaemex.mx/",
  "facultad de odontologia": "https://odontologia.uaemex.mx/",
  "facultad de planeacion urbana y regional": "https://fapur.uaemex.mx/",
  "facultad de turismo y gastronomia": "https://ftug.uaemex.mx/",
  "cu amecameca": "https://cuamecameca.uaemex.mx/",
  "cu atlacomulco": "https://cuatlacomulco.uaemex.mx/",
  "cu ecatepec": "https://cuecatepec.uaemex.mx/",
  "cu temascaltepec": "https://cutemascaltepec.uaemex.mx/",
  "cu tenancingo": "https://cutenancingo.uaemex.mx/",
  "cu valle de mexico": "https://cuvm.uaemex.mx/",
  "uap tianguistenco": "https://uaptianguistenco.uaemex.mx/",
  "uap cuautitlan izcalli": "https://uapcizcalli.uaemex.mx/",
  "instituto de estudios sobre la universidad": "https://iesu.uaemex.mx/",
  "instituto de ciencias agropecuarias y rurales": "https://icar.uaemex.mx/",
  "instituto interamericano de tecnologia y ciencias del agua":
    "https://iitca.uaemex.mx/",
};

const PALETA_COLORES_INV = {
  "CIENCIAS SOCIALES": "#C57CB9", // Púrpura/Rosa
  "BIOLOGÍA Y QUÍMICA": "#71D094", // Verde brillante
  "CIENCIAS DE LA SALUD": "#4DC4D1", // Turquesa
  INGENIERÍA: "#fba854", // Naranja
  HUMANIDADES: "#b3975d", // Dorado
  "CIENCIAS AGROPECUARIAS": "#7d6608", // Café/Verde olivo
  DEFAULT: "#2d4d2b", // Verde UAEM
};

// ==========================================
// LÓGICA DE CARGA Y RENDERIZADO
// ==========================================

async function cargarBaseDeDatos() {
  try {
    const response = await fetch("data/investigaciones.json");
    if (!response.ok) throw new Error("investigaciones.json");
    const datosRaw = await response.json();

    investigaciones = datosRaw.map((fila) => {
      const sede =
        fila["Espacio académico (agrupado)"] ||
        fila["Sede"] ||
        "No especificado";
      const area =
        fila["Área CONACYT"] || fila["Área SECIHTI/PORNACES"] || "General";

      // Prioridad de Link: 1. Excel/JSON -> 2. Diccionario JS -> 3. Home UAEMex
      let linkFinal =
        (fila["url"] || "").trim() ||
        (fila["Enlace"] || "").trim() ||
        (fila["Links"] || "").trim() ||
        enlacesPorEspacio[norm2(sede)] ||
        "https://www.uaemex.mx/";

      return {
        area: area.trim(),
        titulo: fila["Nombre del proyecto"] || "Sin título",
        sede: sede.trim(),
        estatus: fila["Estatus (Nuevo, Vigente, Concluido)"] || "Vigente",
        descripcion:
          fila["Resumen"] ||
          "Información disponible en la coordinación correspondiente.",
        enlace: linkFinal,
      };
    });

    generarFiltrosAreas();
    // Cargar Facultad de Ciencias por defecto para no usar "Todos"
    filterInvestigacion(investigaciones[0]?.sede);
  } catch (error) {
    console.error("Error cargando investigaciones:", error);
  }
}

function generarFiltrosAreas() {
  const contenedor = document.getElementById("filtrosAreas");
  if (!contenedor) return;
  contenedor.innerHTML = "";

  // Obtenemos espacios únicos y quitamos el botón de "Todos"
  const espaciosUnicos = [
    ...new Set(investigaciones.map((i) => i.sede)),
  ].sort();

  espaciosUnicos.forEach((sede) => {
    const boton = document.createElement("button");
    btnId = "btn-" + norm2(sede).replace(/\s+/g, "-");
    boton.className = "filter-btn";
    boton.textContent = sede;
    boton.onclick = () => filterInvestigacion(sede);
    contenedor.appendChild(boton);
  });
}

function renderInvestigaciones(lista) {
  const contenedor = document.getElementById("investigacion-list");
  if (!contenedor) return;
  contenedor.innerHTML = "";

  if (lista.length === 0) {
    contenedor.innerHTML =
      "<p style='text-align:center;width:100%;'>No hay investigaciones registradas en este espacio.</p>";
    return;
  }

  lista.forEach((item) => {
    const card = document.createElement("div");
    card.className = "inv-clickable";
    card.style.cursor = "pointer";
    card.style.padding = "12px 0";
    card.style.borderBottom = "1px dotted #ccc";
    card.style.marginBottom = "5px";

    // Le quitamos el borde izquierdo de color
    card.style.borderLeft = "none";

    // Estructura limpia tipo Canva
    card.innerHTML = `
        <div style="font-size: 0.8rem; color: #666; margin-bottom: 4px;">
            ${item.sede} > 
        </div>
        <div style="display: flex; justify-content: space-between; align-items: center; font-size: 1rem; color: #333; font-weight: 500;">
            <a href="${item.enlace}" target="_blank" style="text-decoration:none; color:inherit; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: 80%;">
                ${item.titulo}
            </a>
            <span style="color: #ccc; letter-spacing: 2px;">.........</span>
        </div>
    `;
    contenedor.appendChild(card);
  });
}
// ============================================================
// 📍 DICCIONARIO DE COORDENADAS PARA INVESTIGACIONES (1:1 CON JSON)
// ============================================================
const coordsInvestigacion = {
  // --- FACULTADES ---
  "facultad de antropologia": { lat: 19.2745, lng: -99.6565 },
  "facultad de arquitectura y diseno": { lat: 19.2812, lng: -99.6775 },
  "facultad de ciencias": { lat: 19.4097, lng: -99.6886 },
  "facultad de ciencias agricolas": { lat: 19.4088, lng: -99.6937 },
  "facultad de ciencias de la conducta": { lat: 19.3095, lng: -99.639 },
  "facultad de ciencias politicas y sociales": { lat: 19.2866, lng: -99.679 },
  "facultad de contaduria y administracion": { lat: 19.2826, lng: -99.679 },
  "facultad de derecho": { lat: 19.2855, lng: -99.6768 },
  "facultad de economia": { lat: 19.2838, lng: -99.6752 },
  "facultad de enfermeria y obstetricia": { lat: 19.272, lng: -99.658 },
  "facultad de geografia": { lat: 19.2847, lng: -99.6757 },
  "facultad de humanidades": { lat: 19.284, lng: -99.6775 },
  "facultad de ingenieria": { lat: 19.2827, lng: -99.6769 },
  "facultad de lenguas": { lat: 19.2848, lng: -99.6761 },
  "facultad de medicina": { lat: 19.272, lng: -99.659 },
  "facultad de medicina veterinaria y zootecnia": { lat: 19.407, lng: -99.689 },
  "facultad de odontologia": { lat: 19.273, lng: -99.658 },
  "facultad de planeacion urbana y regional": { lat: 19.2735, lng: -99.6565 },
  "facultad de quimica": { lat: 19.2727, lng: -99.659 },
  "facultad de turismo y gastronomia": { lat: 19.283, lng: -99.678 },

  // --- CENTROS UNIVERSITARIOS ---
  "centro universitario uaem amecameca": { lat: 19.1319, lng: -98.7865 },
  "centro universitario uaem atlacomulco": { lat: 19.7619, lng: -99.8408 },
  "centro universitario uaem temascaltepec": { lat: 19.0451, lng: -100.0518 },
  "centro universitario uaem tenancingo": { lat: 18.9683, lng: -99.6124 },
  "centro universitario uaem texcoco": { lat: 19.435, lng: -98.9175 },
  "centro universitario uaem valle de chalco": { lat: 19.2995, lng: -98.956 },
  "centro universitario uaem valle de mexico": { lat: 19.5855, lng: -99.2834 },
  "centro universitario uaem valle de teotihuacan": {
    lat: 19.7717,
    lng: -99.7753,
  },
  "centro universitario uaem zumpango": { lat: 19.8282, lng: -99.0768 },

  // --- INSTITUTOS Y CENTROS DE INVESTIGACIÓN ---
  "centro de estudios e investigacion en desarrollo sustentable": {
    lat: 19.2883,
    lng: -99.6491,
  },
  "centro de investigacion en ciencias sociales y humanidades": {
    lat: 19.286,
    lng: -99.678,
  },
  "centro de investigacion multidisciplinaria en educacion": {
    lat: 19.2786,
    lng: -99.6561,
  },
  "centro de investigacion y estudios avanzados de la poblacion": {
    lat: 19.2811,
    lng: -99.6791,
  },
  "instituto de ciencias agropecuarias y rurales": {
    lat: 19.4087,
    lng: -99.6937,
  },
  "instituto de estudios sobre la universidad": { lat: 19.2851, lng: -99.6764 },
  "instituto interamericano de tecnologia y ciencias del agua": {
    lat: 19.4003,
    lng: -99.7134,
  },
  siea: { lat: 19.2859, lng: -99.6534 },

  // --- UNIDADES ACADÉMICAS PROFESIONALES ---
  "unidad academica profesional de cuautitlan izcalli": {
    lat: 19.644,
    lng: -99.2139,
  },
  "unidad academica profesional tianguistenco": { lat: 19.1969, lng: -99.5175 },

  // --- ESCUELAS Y PLANTELES (PREPAS) ---
  "escuela de artes escenicas": { lat: 19.2771, lng: -99.7008 },
  "plantel cuauhtemoc": { lat: 19.3052, lng: -99.645 },
  "plantel dr pablo gonzalez casanova": { lat: 18.966, lng: -99.598 },
  "plantel ignacio ramirez calzada": { lat: 19.2951, lng: -99.6708 },
  "plantel lic adolfo lopez mateos": { lat: 19.2794, lng: -99.6573 },

  // --- SECRETARÍAS (ADMINISTRACIÓN CENTRAL) ---
  "secretaria de administracion": { lat: 19.2884, lng: -99.6586 },
  "secretaria de extencion y vinculacion": { lat: 19.2884, lng: -99.6586 },
};

// ============================================================
// FUNCIÓN DE FILTRADO PARA INVESTIGACIONES
// ============================================================
function filterInvestigacion(categoria) {
  const cat = norm2(categoria);

  // 1. FILTRAR PRIMERO para saber la cantidad exacta
  let resultado =
    cat === "todos"
      ? investigaciones
      : investigaciones.filter((inv) => {
          // Comparamos la sede de forma EXACTA con "==="
          return norm2(inv.sede) === cat;
        });

  console.log("Filtrados:", resultado.length);
  renderInvestigaciones(resultado);

  // 2. ACTUALIZAR BOTONES Y DESPLEGAR LEYENDA DINÁMICA

  // A. Buscamos y eliminamos cualquier leyenda abierta previamente
  document
    .querySelectorAll(
      "#investigacion .leyenda-conteo, #filtrosAreas .leyenda-conteo",
    )
    .forEach((el) => el.remove());

  document.querySelectorAll("#filtrosAreas .filter-btn").forEach((btn) => {
    // B. Verificamos si este es el botón seleccionado
    if (norm2(btn.innerText) === cat) {
      btn.classList.add("active");

      // C. Creamos la cajita desplegable y la insertamos justo debajo del botón
      const htmlLeyenda = `
        <div class="leyenda-conteo" style="background-color: #f8f9fa; border-left: 4px solid #b3975d; padding: 8px 12px; margin: -5px 0 10px 0; border-radius: 0 0 6px 6px; font-size: 0.85rem; color: #333; text-align: left; box-shadow: inset 0 2px 4px rgba(0,0,0,0.05);">
          Total de investigaciones: <strong>${resultado.length}</strong>
        </div>
      `;

      btn.insertAdjacentHTML("afterend", htmlLeyenda);
    } else {
      btn.classList.remove("active");
    }
  });

  // 3. MAPA (Intacto)
  if (!mapInvestigacion) {
    mapInvestigacion = L.map("map-investigacion").setView([19.35, -99.6], 9);
    L.tileLayer(
      "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
    ).addTo(mapInvestigacion);
  }

  if (markersInvestigacion) mapInvestigacion.removeLayer(markersInvestigacion);
  markersInvestigacion = L.featureGroup().addTo(mapInvestigacion);

  // 4. Búsqueda directa y EXACTA en el diccionario
  resultado.forEach((inv) => {
    let sedeNorm = norm2(inv.sede);

    // Aquí obligamos a que busque el nombre completo, 1 a 1
    let coord = coordsInvestigacion[sedeNorm];

    if (coord) {
      let marker = L.marker([coord.lat, coord.lng]);
      marker.bindPopup(`<b>${inv.sede}</b>`);
      markersInvestigacion.addLayer(marker);
    } else {
      console.log("No se encontró ubicación para:", inv.sede);
    }
  });

  setTimeout(() => {
    mapInvestigacion.invalidateSize();
    if (markersInvestigacion.getLayers().length > 0) {
      mapInvestigacion.fitBounds(markersInvestigacion.getBounds(), {
        padding: [40, 40],
        maxZoom: 14,
      });
    }
  }, 250);
}

function actualizarMapaInvestigaciones(lista) {
  if (!mapInvestigacion) return;

  // Limpiar markers anteriores
  if (markersInvestigacion) {
    mapInvestigacion.removeLayer(markersInvestigacion);
  }

  markersInvestigacion = L.featureGroup().addTo(mapInvestigacion);

  // ===================================================
  // AGRUPAR POR SEDE
  // ===================================================
  const sedesAgrupadas = {};

  lista.forEach((inv) => {
    const sedeNorm = norm2(inv.sede);

    if (!coordsInvestigacion[sedeNorm]) return;

    if (!sedesAgrupadas[sedeNorm]) {
      sedesAgrupadas[sedeNorm] = {
        nombre: inv.sede,
        total: 0,
        coord: coordsInvestigacion[sedeNorm],
      };
    }

    sedesAgrupadas[sedeNorm].total++;
  });

  // ===================================================
  // CREAR SOLO 1 MARCADOR POR SEDE
  // ===================================================
  Object.values(sedesAgrupadas).forEach((sede) => {
    const marker = L.marker([sede.coord.lat, sede.coord.lng]);

    marker.bindPopup(`
      <div style="text-align:center;">
        <b>${sede.nombre}</b><br>
        ${sede.total} investigación(es)
      </div>
    `);

    markersInvestigacion.addLayer(marker);
  });

  // Ajustar mapa
  if (markersInvestigacion.getLayers().length > 0) {
    mapInvestigacion.fitBounds(markersInvestigacion.getBounds(), {
      padding: [20, 20],
      maxZoom: 14,
    });
  }
}

// ==========================================
// 2. PATENTES (CORREGIDO CON TU JSON REAL)
// ==========================================

async function cargarPatentes() {
  try {
    const response = await fetch("data/patentes.json");
    if (!response.ok) throw new Error("No se encontró patentes.json");
    const datosRaw = await response.json();

    // MAPEADO EXACTO DE TU JSON
    patentes = datosRaw.map((fila) => ({
      area: fila["Área a la que impacta"] || "General",
      titulo: fila["Nombre del proyecto"] || "Sin título",
      sede: fila["Espacio Académico"] || "No especificado",
      expediente: fila["Núm. de Expediente"] || "En trámite",
      tipo: fila["Tipo de Registro"] || "Patente",
    }));

    console.log("🚀 Patentes mapeadas con éxito:", patentes.length);

    // Inicializar mapa y cargar 'Patente' por defecto (ADIÓS A "TODOS")
    if (typeof initMapPatentes === "function") initMapPatentes();
    filterPatentes("Patente");
  } catch (e) {
    console.error("Error cargando patentes:", e);
  }
}

function actualizarMapaPatentes(listaFiltrada) {
  if (!mapPatentes || !markersPatentesGroup) return;

  // 1. Limpiar marcadores anteriores
  markersPatentesGroup.clearLayers();
  let bounds = L.latLngBounds();
  let hayMarcadores = false;

  // Objeto temporal para agrupar proyectos por SEDE REAL
  const conteoPorSede = {};

  listaFiltrada.forEach((p) => {
    if (!p.sede) return;

    // 2. SEPARAR SEDES: Divide si encuentra "y", "/" o ","
    const sedesIndividuales = p.sede.split(/[,/y]+/).map((s) => s.trim());

    sedesIndividuales.forEach((nombreSede) => {
      const nSede = norm2(nombreSede);

      // 3. BUSCAR COORDENADA: Busca la llave que coincida (ej. "texcoco" en "centro universitario uaem texcoco")
      const llaveSede = Object.keys(coordenadasSedes).find(
        (k) => k.includes(nSede) || nSede.includes(k),
      );

      if (llaveSede) {
        if (!conteoPorSede[llaveSede]) {
          conteoPorSede[llaveSede] = { total: 0, items: [] };
        }
        // Sumamos el proyecto a esta sede específica
        conteoPorSede[llaveSede].total++;
        conteoPorSede[llaveSede].items.push(p);
      }
    });
  });

  // 4. DIBUJAR MARCADORES: Crea un círculo por cada sede encontrada
  Object.keys(conteoPorSede).forEach((key) => {
    const info = conteoPorSede[key];
    const coord = coordenadasSedes[key];

    if (coord) {
      hayMarcadores = true;

      const icon = L.divIcon({
        className: "custom-pin",
        html: `<div style="background:#b3975d; color:white; border-radius:50%; width:30px; height:30px; display:flex; align-items:center; justify-content:center; font-weight:bold; border:2px solid white; box-shadow:0 2px 5px rgba(0,0,0,0.2);">${info.total}</div>`,
        iconSize: [30, 30],
      });

      const marker = L.marker(coord, { icon: icon }).addTo(
        markersPatentesGroup,
      );

      marker.bindPopup(`
                <div style="text-align:center;">
                    <b style="color:#2d4d2b">${key.toUpperCase()}</b><br>
                    ${info.total} Registro(s) en esta sede.
                </div>
            `);

      // Al hacer clic, filtra la lista de la derecha para mostrar solo los de esta sede
      marker.on("click", () => {
        renderPatentes(info.items);
      });
      bounds.extend(coord);
    }
  });

  // 5. Ajustar vista para ver todos los puntos
  if (hayMarcadores) {
    mapPatentes.fitBounds(bounds, { padding: [50, 50], maxZoom: 12 });
  }
}

function renderPatentes(lista) {
  const contenedor = document.getElementById("patentes-list");
  if (!contenedor) return;
  contenedor.innerHTML = "";

  if (lista.length === 0) {
    contenedor.innerHTML =
      "<p style='text-align:center; padding:20px;'>No hay resultados para esta categoría.</p>";
    return;
  }

  lista.forEach((p) => {
    const card = document.createElement("div");
    card.className = "patente-clickable";
    card.style.cursor = "pointer";
    card.style.padding = "12px 0";
    card.style.borderBottom = "1px dotted #ccc";
    card.style.marginBottom = "5px";
    card.style.borderLeft = "none"; /* Aseguramos que no haya bordes de color */

    // Estructura limpia tipo Canva
    card.innerHTML = `
        <div style="font-size: 0.8rem; color: #666; margin-bottom: 4px; text-transform: capitalize;">
            ${p.sede.toLowerCase()} > ${p.tipo}
        </div>
        <div style="display: flex; justify-content: space-between; align-items: center; font-size: 1rem; color: #333; font-weight: 500;">
            <span style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: 80%;">
                ${p.titulo}
            </span>
            <span style="color: #ccc; letter-spacing: 2px;">.........</span>
        </div>
    `;

    contenedor.appendChild(card);
  });

  // Resetear el scroll para que siempre inicie arriba
  contenedor.scrollTop = 0;
}

function filterPatentes(tipoBusqueda) {
  // 1. Actualizar botones (Cambiamos .includes por comparación directa para evitar errores)
  document.querySelectorAll("#patentes .filter-btn").forEach((b) => {
    const busquedaNorm = norm2(tipoBusqueda);
    const botonNorm = norm2(b.innerText);

    // Si el texto del botón coincide exactamente con la categoría, se pone verde
    if (botonNorm === busquedaNorm) {
      b.classList.add("active");
    } else {
      b.classList.remove("active");
    }
  });

  // 2. Filtrar Datos (Aseguramos que 'Todos' funcione si decides agregarlo luego)
  let res =
    tipoBusqueda === "Todos"
      ? patentes
      : patentes.filter((p) => norm2(p.tipo).includes(norm2(tipoBusqueda)));

  // 3. Renderizar Lista
  renderPatentes(res);

  // 4. Actualizar Mapa
  // Añadimos un pequeño delay para que el mapa se ajuste al nuevo tamaño del contenedor
  setTimeout(() => {
    if (!mapPatentes) {
      initMapPatentes();
    } else {
      mapPatentes.invalidateSize();
      actualizarMapaPatentes(res);
    }
  }, 100);
}

function ejecutarBusquedaPatentes() {
  const txt = norm2(document.getElementById("search-patentes").value);
  const res = patentes.filter(
    (p) =>
      norm2(p.titulo).includes(txt) ||
      norm2(p.sede).includes(txt) ||
      norm2(p.expediente).includes(txt) ||
      norm2(p.tipo).includes(txt),
  );

  renderPatentes(res);
  actualizarMapaPatentes(res);
}

function initMapPatentes() {
  if (mapPatentes) return;
  const mapDiv = document.getElementById("map-patentes");
  if (!mapDiv) return;

  mapPatentes = L.map("map-patentes", { zoomControl: false }).setView(
    [19.35, -99.6],
    9,
  );
  if (typeof inyectarPresenciaUAEM === "function")
    inyectarPresenciaUAEM(mapPatentes);

  L.tileLayer(
    "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
    {
      attribution: "&copy; CARTO",
    },
  ).addTo(mapPatentes);

  L.control.zoom({ position: "topright" }).addTo(mapPatentes);
  markersPatentesGroup = L.layerGroup().addTo(mapPatentes);
}

// ==========================================
// 3. CONFIGURACIÓN Y LÓGICA DE LABORATORIOS
// ==========================================

// ============================================================
// 1. CONFIGURACIÓN DE SEDES PARA LABORATORIOS (1:1 CON JSON)
// ============================================================
const CONFIG_SEDES = {
  // --- FACULTADES ---
  "facultad de ciencias": { color: "#8c7c54", coords: [19.409337, -99.689127] },
  "facultad de ciencias agricolas": {
    color: "#cc9c54",
    coords: [19.408256, -99.689321],
  },
  "facultad de geografia": {
    color: "#cc9c5c",
    coords: [19.286684, -99.676875],
  },
  "facultad de ingenieria": { color: "#bac6dc", coords: [19.2829, -99.676624] },
  "facultad de medicina": { color: "#a4a394", coords: [19.272664, -99.65899] },
  "facultad de medicina veterinaria y zootecnia": {
    color: "#848b88",
    coords: [19.40752, -99.689875],
  },
  "facultad de odontologia": {
    color: "#9eaecd",
    coords: [19.273683, -99.658293],
  },
  "facultad de planeacion urbana y regional": {
    color: "#8c7c54",
    coords: [19.273598, -99.656565],
  },
  "facultad de quimica": { color: "#646c5c", coords: [19.272732, -99.659712] },

  // --- CENTROS UNIVERSITARIOS (CU) Y UNIDADES ACADÉMICAS ---
  "cu amecameca": { color: "#a4a394", coords: [19.13191, -98.786391] },
  "cu atlacomulco": { color: "#646c5c", coords: [19.761749, -99.84081] },
  "cu ecatepec": { color: "#848b88", coords: [19.598108, -99.057516] },
  "cu temascaltepec": { color: "#cc9c54", coords: [19.045188, -100.051644] },
  "cu tenancingo": { color: "#646c5c", coords: [18.968358, -99.61224] },
  "cu valle de mexico": { color: "#8c7c54", coords: [19.585531, -99.283479] },
  tianguistenco: { color: "#bac6dc", coords: [19.196961, -99.517585] },
};

// ==========================================
// LÓGICA DE LABORATORIOS (A PRUEBA DE FALLOS)
// ==========================================

async function cargarLaboratorios() {
  try {
    console.log("Iniciando carga de Laboratorios...");
    const response = await fetch("data/Laboratorios.json");
    if (!response.ok) throw new Error("No se pudo cargar el archivo JSON");
    const datosRaw = await response.json();

    // Guardamos los datos en la variable global
    laboratorios = datosRaw.map((fila) => ({
      nombre: fila["NOMBRE DEL LABORATORIO O TALLER"] || "Sin nombre",
      sede: fila["ESPACIO ACADÉMICO"] || "No especificado",
      categoria: fila["CATEGORÍA"] || "Laboratorio",
      funcion: fila["FUNCIÓN"] || "No especificada",
    }));

    console.log("✅ Laboratorios listos:", laboratorios.length);

    // Disparamos el filtro inicial
    filterLabs("todos");
  } catch (e) {
    console.error("❌ Error al cargar laboratorios:", e);
  }
  document.addEventListener("DOMContentLoaded", () => {
    filterLabs("todos");
  });
}

function filterLabs(categoria) {
  try {
    if (!categoria) categoria = "todos";

    const catNorm = norm2(categoria);
    let colorFinal = "#2d4d2b";
    let res = [];

    // 1. Inicializar mapa y marcadores con protección
    const divMapa = document.getElementById("map-laboratorios");
    if (!divMapa) {
      console.warn(
        "⚠️ No se encontró el recuadro del mapa en el HTML, pero las fichas seguirán funcionando.",
      );
    } else {
      if (!mapLabs) {
        mapLabs = L.map("map-laboratorios").setView([19.35, -99.6], 9);
        L.tileLayer(
          "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
        ).addTo(mapLabs);
      }
      if (!mapLabs.markersGroup) {
        mapLabs.markersGroup = L.featureGroup().addTo(mapLabs);
      }
      // Limpiamos los pines viejos
      mapLabs.markersGroup.clearLayers();
    }

    // 2. ¿Es "Todos" o una Sede específica?
    if (!catNorm || catNorm === "todos" || categoria === "todos") {
      res = laboratorios; // Todas las fichas

      if (mapLabs) {
        mapLabs.setView([19.35, -99.6], 9);

        // Dibujar un pin por cada laboratorio existente
        res.forEach((lab) => {
          const sedeNorm = norm2(lab.sede);
          const info = CONFIG_SEDES[sedeNorm];

          if (info) {
            let marker = L.marker(info.coords);
            marker.bindPopup(`<b>${lab.sede}</b>`);
            mapLabs.markersGroup.addLayer(marker);
          }
        });
      }
    } else {
      // Búsqueda EXACTA
      res = laboratorios.filter((lab) => norm2(lab.sede) === catNorm);
      const key = Object.keys(CONFIG_SEDES).find(
        (k) => catNorm.includes(k) || k.includes(catNorm),
      );
      const infoSede = CONFIG_SEDES[key];

      if (infoSede) {
        colorFinal = infoSede.color;

        if (mapLabs) {
          mapLabs.setView(infoSede.coords, 15);

          res.forEach((lab) => {
            let marker = L.marker(infoSede.coords);
            marker.bindPopup(`<b>${lab.sede}</b>`);
            mapLabs.markersGroup.addLayer(marker);
          });

          setTimeout(() => {
            mapLabs.invalidateSize();
          }, 250);
        }
      }
    }

    // 3. Actualizar botones y desplegar leyenda interactiva sin deformar el botón

    // A. Buscamos y eliminamos cualquier cajita de leyenda que esté abierta
    document
      .querySelectorAll("#laboratorios .leyenda-conteo")
      .forEach((el) => el.remove());

    document.querySelectorAll("#laboratorios .filter-btn").forEach((btn) => {
      // B. Verificamos si este es el botón que acabas de presionar
      if (btn.getAttribute("onclick").includes(`'${categoria}'`)) {
        btn.classList.add("active");

        // C. Creamos un panel desplegable y lo insertamos AFUERA del botón (justo debajo)
        const htmlLeyenda = `
          <div class="leyenda-conteo" style="background-color: #f8f9fa; border-left: 4px solid #b3975d; padding: 8px 12px; margin: -5px 0 10px 0; border-radius: 0 0 6px 6px; font-size: 0.85rem; color: #333; text-align: left; box-shadow: inset 0 2px 4px rgba(0,0,0,0.05);">
            Total de laboratorios: <strong>${res.length}</strong>
          </div>
        `;

        // insertAdjacentHTML lo coloca inmediatamente después del cierre del </button>
        // Así el botón no cambia de tamaño absoluto.
        btn.insertAdjacentHTML("afterend", htmlLeyenda);
      } else {
        btn.classList.remove("active");
      }
    });

    // 4. Pintar las tarjetas
    renderLabs(res, colorFinal);
  } catch (e) {
    console.error("❌ Error en filterLabs:", e);
  }
  actualizarMapaLabs(res);
  actualizarLeyendaLabs(res);
}

// NUEVA FUNCIÓN: Genera un resumen de laboratorios por espacio académico
function actualizarLeyendaLabs(listaLaboratorios) {
  const contenedor = document.getElementById("leyenda-labs-conteo");
  if (!contenedor) return;

  // 1. Si no hay resultados, limpiamos la leyenda
  if (listaLaboratorios.length === 0) {
    contenedor.innerHTML = "";
    return;
  }

  // 2. Agrupar y contar usando un objeto
  const conteoPorSede = {};
  listaLaboratorios.forEach((lab) => {
    // Usamos el nombre original de la sede tal como viene en el JSON
    const sede = lab.sede || "No especificado";
    conteoPorSede[sede] = (conteoPorSede[sede] || 0) + 1;
  });

  // 3. Construir el HTML de la leyenda (con los colores de la UAEMéx)
  let html = `
    <div style="background: white; padding: 15px; border-radius: 8px; box-shadow: 0 2px 5px rgba(0,0,0,0.1); border-left: 5px solid #b3975d;">
      <h4 style="margin: 0 0 10px 0; color: #2d4d2b; display: flex; justify-content: space-between;">
        <span>📊 Laboratorios Mostrados</span>
        <span>Total: ${listaLaboratorios.length}</span>
      </h4>
      <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 10px; font-size: 0.85rem;">
  `;

  // Iterar sobre nuestro objeto de conteo para crear los items
  for (let sede in conteoPorSede) {
    html += `
      <div style="display: flex; justify-content: space-between; border-bottom: 1px solid #eee; padding-bottom: 3px;">
        <span style="color: #555; text-transform: capitalize;">${sede.toLowerCase()}</span>
        <strong style="color: #2d4d2b;">${conteoPorSede[sede]}</strong>
      </div>
    `;
  }

  html += `</div></div>`;

  // 4. Inyectar al DOM
  contenedor.innerHTML = html;
}

function actualizarMapaLabsFiltrados(lista) {
  if (!mapLabs || !mapLabs.markersGroup) return;

  // Limpiar markers anteriores
  mapLabs.markersGroup.clearLayers();

  const sedesAgrupadas = {};

  lista.forEach((lab) => {
    const sedeNorm = norm2(lab.sede);
    const info = CONFIG_SEDES[sedeNorm];

    if (!info) return;

    if (!sedesAgrupadas[sedeNorm]) {
      sedesAgrupadas[sedeNorm] = {
        nombre: lab.sede,
        total: 0,
        coords: info.coords,
      };
    }

    sedesAgrupadas[sedeNorm].total++;
  });

  // Crear 1 marcador por sede
  Object.values(sedesAgrupadas).forEach((sede) => {
    const marker = L.marker(sede.coords);

    marker.bindPopup(`
      <div style="text-align:center;">
        <b>${sede.nombre}</b><br>
        ${sede.total} laboratorio(s)
      </div>
    `);

    mapLabs.markersGroup.addLayer(marker);
  });

  // Ajustar vista
  const layers = mapLabs.markersGroup.getLayers();

  if (layers.length > 0) {
    const group = L.featureGroup(layers);

    mapLabs.fitBounds(group.getBounds(), {
      padding: [20, 20],
      maxZoom: 14,
    });
  }
}

// ARRANQUE AUTOMÁTICO PROTEGIDO
window.addEventListener("load", async () => {
  await cargarLaboratorios();
});

// 3. BUSCADOR CORREGIDO
function ejecutarBusquedaLabs() {
  const buscador = document.getElementById("search-labs");
  if (!buscador) return;

  const txt = norm2(buscador.value);
  const res = laboratorios.filter(
    (lab) =>
      norm2(lab.nombre).includes(txt) ||
      norm2(lab.sede).includes(txt) ||
      norm2(lab.funcion).includes(txt) ||
      norm2(lab.categoria).includes(txt),
  );

  // Al buscar, usamos el color institucional verde
  renderLabs(res, "#2d4d2b");
  actualizarMapaLabsFiltrados(res);
  actualizarLeyendaLabs(res);
}

function renderLabs(lista, colorArea) {
  const contenedor = document.getElementById("labs-list");
  if (!contenedor) return;
  contenedor.innerHTML = "";

  if (lista.length === 0) {
    contenedor.innerHTML =
      "<p style='text-align:center; padding:20px;'>No se encontraron laboratorios.</p>";
    return;
  }

  lista.forEach((lab) => {
    const card = document.createElement("div");
    card.className = "lab-clickable";
    card.style.cursor = "pointer";
    card.style.padding = "12px 0";
    card.style.borderBottom = "1px dotted #ccc";
    card.style.marginBottom = "5px";
    card.style.borderLeft = "none"; /* Quitamos la barra lateral de color */

    // Mantenemos la magia para que el mapa se mueva al hacer clic
    card.onclick = () => {
      filterLabs(lab.sede);
      const wrapper = document.querySelector(".geo-wrapper");
      if (wrapper) wrapper.scrollIntoView({ behavior: "smooth" });
    };

    // Estructura limpia tipo Canva
    card.innerHTML = `
        <div style="font-size: 0.8rem; color: #666; margin-bottom: 4px;">
            ${lab.sede} > 
        </div>
        <div style="display: flex; justify-content: space-between; align-items: center; font-size: 1rem; color: #333; font-weight: 500;">
            <span style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: 80%;">
                ${lab.nombre}
            </span>
            <span style="color: #ccc; letter-spacing: 2px;">.........</span>
        </div>
    `;

    contenedor.appendChild(card);

    const cont = document.getElementById("laboratorios-lista");

    if (!cont) {
      console.warn("⚠️ Contenedor de laboratorios no encontrado");
      return;
    }

    cont.innerHTML = "";
  });
}

function ejecutarBusqueda() {
  const input = document.getElementById("search-investigacion");
  textoBusquedaActual = input.value; // 👈 guardas lo que escribe

  const texto = norm2(textoBusquedaActual);

  const resultado = investigaciones.filter((inv) => {
    return (
      norm2(inv.titulo).includes(texto) ||
      norm2(inv.descripcion).includes(texto) ||
      norm2(inv.sede).includes(texto) ||
      norm2(inv.responsable).includes(texto)
    );
  });

  renderInvestigaciones(resultado);
  actualizarMapaInvestigaciones(resultado);
}

function resaltarTexto(texto, busqueda) {
  if (!busqueda) return texto;

  const textoNorm = norm2(texto);
  const busquedaNorm = norm2(busqueda);

  if (!textoNorm.includes(busquedaNorm)) return texto;

  const regex = new RegExp(`(${busqueda})`, "gi");
  return texto.replace(regex, `<span class="highlight">$1</span>`);
}
