// ============================================================
// 8_nodos.js
// FILTROS DE PARTICIPACIÓN PARA LOS NODOS
// ============================================================

// ============================================================
// 1. COLORES DE PARTICIPACIÓN
// ============================================================

const COLORES_PARTICIPACION_NODO = {
  universidad: {
    etiqueta: "Universidad",
    color: "#5692B8",
  },

  gobierno: {
    etiqueta: "Gobierno",
    color: "#B8A656",
  },

  empresas: {
    etiqueta: "Empresas",
    color: "#537F6E",
  },

  sociedad: {
    etiqueta: "Sociedad",
    color: "#537F6E",
  },
};

// ============================================================
// 2. INFORMACIÓN DE LOS NODOS
// ============================================================

const DATOS_NODOS_PARTICIPACION = {
  // ==========================================================
  // NODO CREATIVO DIGITAL
  // ==========================================================
  digital: {
    mapId: "map-digital",
    listId: "list-digital",
    filtrosId: "filtros-digital",

    centroInicial: [19.35, -99.6],
    zoomInicial: 8.9,

    integrantes: [
      {
        id: "digital-universidad-lanot",
        nombre: "Laboratorio Nacional de Observación de la Tierra",
        direccion: "Facultad de Geografía, Toluca de Lerdo",
        participacion: "universidad",
        loc: [19.286363637666106, -99.67692734195538],
      },
      {
        id: "digital-universidad-realidad-virtual",
        nombre: "Laboratorio de Realidad Virtual y Edición Digital",
        direccion: "Facultad de Arquitectura y Diseño, Toluca de Lerdo",
        participacion: "universidad",
        loc: [19.281199138645203, -99.67755792407178],
      },
      {
        id: "digital-universidad-fabrica-software",
        nombre: "Departamento de desarrollo de Software en Convenio con ADEM",
        direccion: "C.U. Santiago Tianguistenco",
        participacion: "universidad",
        loc: [19.197030735294735, -99.5174113862526],
      },
      {
        id: "digital-universidad-mandra",
        nombre: "Centro de Innovación Digital Mandra",
        direccion: "Facultad de Ciencias, Cerrillo Piedras Blancas",
        participacion: "universidad",
        loc: [19.40971271665087, -99.68864857724706],
      },
      {
        id: "digital-gobierno-secretaria-desarrollo",
        nombre: "Secretaría de Desarrollo Económico",
        direccion:
          "Av. Primero de Mayo núm. 1731, esquina Robert Bosch, Zona Industrial, Toluca.",
        participacion: "gobierno",
        nivel: "Estatal",
        loc: [19.291468379121014, -99.62016889145423],
      },
      {
        id: "digital-empresa-coparmex",
        nombre: "COPARMEX",
        direccion:
          "Av. Independencia 1605, Zona Industrial, 50071 Toluca de Lerdo, Estado de México.",
        participacion: "empresas",
        loc: [19.292696116659265, -99.62660265855652],
      },
    ],
  },

  // ==========================================================
  // NODO HÍDRICO
  // ==========================================================
  agua: {
    mapId: "map-agua",
    listId: "list-agua",
    filtrosId: "filtros-agua",

    centroInicial: [19.35, -99.6],
    zoomInicial: 8.9,

    integrantes: [
      {
        id: "agua-universidad-iitca",
        nombre:
          "Instituto Interamericano de Tecnología y Ciencias del Agua (IITCA)",
        direccion: "Unidad San Cayetano",
        participacion: "universidad",
        loc: [19.40035957071676, -99.71348444915596],
      },
      {
        id: "agua-universidad-icar",
        nombre: "Instituto de Ciencias Agropecuarias y Rurales (ICAR)",
        direccion: "San Cayetano Morelos",
        participacion: "universidad",
        loc: [19.40882563668419, -99.69370593530273],
      },
      {
        id: "agua-universidad-ingenieria",
        nombre: "Facultad de Ingeniería",
        direccion: "C.U. Toluca de Lerdo",
        participacion: "universidad",
        loc: [19.282779899086794, -99.6769200502339],
      },
      {
        id: "agua-universidad-lanot",
        nombre: "Laboratorio Nacional de Observación de la Tierra (LANOT)",
        direccion: "Facultad de Geografía, Toluca de Lerdo",
        participacion: "universidad",
        loc: [19.286362822609824, -99.67695058694817],
      },
      {
        id: "agua-universidad-ciencias-sociales",
        nombre: "Centro de Investigación en Ciencias Sociales y Humanas",
        direccion: "C.U. Toluca de Lerdo",
        participacion: "universidad",
        loc: [19.28599058336545, -99.67808079769918],
      },
      {
        id: "agua-gobierno-chimalhuacan",
        nombre: "H. Ayuntamiento de Chimalhuacán",
        direccion:
          "Oyamel 48, Tlatel Xochitenco, 56366 Chimalhuacán, Estado de México.",
        participacion: "gobierno",
        nivel: "Municipal",
        loc: [19.445107239924628, -98.96409598559454],
      },
      {
        id: "agua-sociedad-villa-allende",
        nombre: "Comisariado Ejidal de Villa de Allende",
        direccion:
          "Manzana 014, 51013 San José Villa de Allende, Estado de México.",
        participacion: "sociedad",
        loc: [19.410926047313424, -100.12295249916184],
      },
    ],
  },

  // ==========================================================
  // NODO ALIMENTARIO
  // ==========================================================
  alimenticio: {
    mapId: "map-alimenticio",
    listId: "list-alimenticio",
    filtrosId: "filtros-alimenticio",

    centroInicial: [19.35, -99.6],
    zoomInicial: 8.9,

    integrantes: [
      {
        id: "alimenticio-universidad-icar",
        nombre: "ICAR (Instituto de Ciencias Agropecuarias y Rurales)",
        direccion: "San Cayetano Morelos",
        participacion: "universidad",
        loc: [19.409007806089125, -99.69371013557677],
      },
      {
        id: "alimenticio-universidad-planeacion",
        nombre: "Facultad de Planeación Urbana y Regional",
        direccion: "Toluca",
        participacion: "universidad",
        loc: [19.273479375630036, -99.65655657742224],
      },
      {
        id: "alimenticio-universidad-amecameca",
        nombre: "Centro Universitario Amecameca",
        direccion: "Amecameca",
        participacion: "universidad",
        loc: [19.131873820509142, -98.78648988113859],
      },
      {
        id: "alimenticio-universidad-entornos",
        nombre: "Dirección de Entornos Académicos y del Conocimiento",
        direccion: "Toluca",
        participacion: "universidad",
        loc: [19.291517095805034, -99.64612260610195],
      },
      {
        id: "alimenticio-gobierno-tenancingo",
        nombre: "Ayuntamiento de Tenancingo",
        direccion:
          "Jardín Morelos 101, Centro, 52400 Tenancingo de Degollado, Estado de México.",
        participacion: "gobierno",
        nivel: "Municipal",
        loc: [18.961863562902145, -99.5935383952058],
      },
    ],
  },
};

// ============================================================
// 3. ESTADO INTERNO DE LOS MAPAS
// ============================================================

const ESTADO_NODOS = {
  digital: {
    map: null,
    markerGroup: null,
    polygonLayer: null,
    presenciaLayer: null,
    marcadores: new Map(),
    filtroParticipacion: null,
    filtroTematico: null,
  },

  agua: {
    map: null,
    markerGroup: null,
    polygonLayer: null,
    presenciaLayer: null,
    marcadores: new Map(),
    filtroParticipacion: null,
    filtroTematico: null,
  },

  alimenticio: {
    map: null,
    markerGroup: null,
    polygonLayer: null,
    presenciaLayer: null,
    marcadores: new Map(),
    filtroParticipacion: null,
    filtroTematico: null,
  },
};

// ============================================================
// 4. NORMALIZACIÓN
// ============================================================

function normalizarNodo(texto) {
  return (texto || "")
    .toString()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]/g, "");
}

// ============================================================
// 5. ASIGNACIÓN A LAS VARIABLES GLOBALES EXISTENTES
// ============================================================

function asignarMapaGlobalNodo(tipo, mapa) {
  if (tipo === "digital") {
    mapDigital = mapa;
  } else if (tipo === "agua") {
    mapAgua = mapa;
  } else if (tipo === "alimenticio") {
    mapAlimenticio = mapa;
  }
}

function asignarCapaGlobalNodo(tipo, capa) {
  if (tipo === "digital") {
    geoLayerDigital = capa;
  } else if (tipo === "agua") {
    geoLayerAgua = capa;
  } else if (tipo === "alimenticio") {
    geoLayerAlimenticio = capa;
  }
}

// ============================================================
// 6. CAPAS TEMÁTICAS
// ============================================================

function obtenerGeoJSONNodo(tipo) {
  if (tipo === "digital" && typeof datosIndustria !== "undefined") {
    return datosIndustria;
  }

  if (tipo === "agua" && typeof datosMunicipios !== "undefined") {
    return datosMunicipios;
  }

  if (tipo === "alimenticio" && typeof datosAlimentacion !== "undefined") {
    datosAlimentacion.features.forEach((feature) => {
      const valor = Number(feature.properties["2020"]);

      feature.properties.vulnerabilidad =
        valor > 30 ? "Alta" : valor >= 14.5 ? "Media" : "Baja";

      if (!feature.properties.NOMGEO) {
        feature.properties.NOMGEO = feature.properties.nomgeo;
      }
    });

    return datosAlimentacion;
  }

  return null;
}

function obtenerNombreMunicipioNodo(feature) {
  return (
    feature?.properties?.NOMGEO ||
    feature?.properties?.nomgeo ||
    feature?.properties?.NOM_MUN ||
    feature?.properties?.nombre ||
    "Municipio"
  );
}

function obtenerEstiloTematicoNodo(tipo, feature) {
  const propiedades = feature.properties || {};

  let color = "#d8d8d8";

  if (tipo === "digital") {
    const valor = Number(propiedades.N_parquesIndus);

    color =
      valor >= 15
        ? "#153221"
        : valor >= 5
          ? "#365a41"
          : valor >= 1
            ? "#577a5f"
            : "#84ac9c";
  }

  if (tipo === "agua") {
    const nivel = propiedades["Nivel de sequia"];

    color =
      nivel === "Nivel crítico"
        ? "#153221"
        : nivel === "Nivel severo"
          ? "#365a41"
          : nivel === "Nivel moderado"
            ? "#577a5f"
            : "#cccccc";
  }

  if (tipo === "alimenticio") {
    const nivel = propiedades.vulnerabilidad;

    color =
      nivel === "Alta"
        ? "#153221"
        : nivel === "Media"
          ? "#365a41"
          : nivel === "Baja"
            ? "#577a5f"
            : "#cccccc";
  }

  return {
    fillColor: color,
    fillOpacity: 0.7,
    color: "#ffffff",
    weight: 0.8,
    opacity: 1,
  };
}

function crearCapaTematicaNodo(tipo) {
  const estado = ESTADO_NODOS[tipo];
  const geoJSON = obtenerGeoJSONNodo(tipo);

  if (!estado?.map || !geoJSON) return;

  estado.polygonLayer = L.geoJSON(geoJSON, {
    style: (feature) => obtenerEstiloTematicoNodo(tipo, feature),

    onEachFeature: (feature, layer) => {
      layer.bindTooltip(
        `<strong>${obtenerNombreMunicipioNodo(feature)}</strong>`,
        {
          sticky: true,
          direction: "top",
        },
      );
    },
  }).addTo(estado.map);

  estado.polygonLayer.bringToBack();

  asignarCapaGlobalNodo(tipo, estado.polygonLayer);
}

function cumpleFiltroTematicoNodo(tipo, feature, filtro) {
  if (!filtro) return true;

  const propiedades = feature.properties || {};

  if (tipo === "digital") {
    const valor = Number(propiedades.N_parquesIndus);

    if (filtro === "alta") return valor >= 15;
    if (filtro === "media") return valor >= 5 && valor < 15;
    if (filtro === "baja") return valor >= 1 && valor < 5;
    if (filtro === "sin") return valor === 0;
  }

  if (tipo === "agua") {
    return (
      normalizarNodo(propiedades["Nivel de sequia"]) === normalizarNodo(filtro)
    );
  }

  if (tipo === "alimenticio") {
    return (
      normalizarNodo(propiedades.vulnerabilidad) === normalizarNodo(filtro)
    );
  }

  return false;
}

function filtrarCapaTematicaNodo(tipo, filtro) {
  const estado = ESTADO_NODOS[tipo];

  if (!estado?.polygonLayer) return;

  estado.filtroTematico = estado.filtroTematico === filtro ? null : filtro;

  estado.polygonLayer.eachLayer((layer) => {
    const mostrar = cumpleFiltroTematicoNodo(
      tipo,
      layer.feature,
      estado.filtroTematico,
    );

    if (mostrar) {
      layer.setStyle(obtenerEstiloTematicoNodo(tipo, layer.feature));
    } else {
      layer.setStyle({
        fillColor: "#d1d1d1",
        fillOpacity: 0.32,
        color: "#ffffff",
        weight: 0.7,
        opacity: 1,
      });
    }
  });

  actualizarLeyendaTematicaNodo(tipo);
}

function actualizarLeyendaTematicaNodo(tipo) {
  const estado = ESTADO_NODOS[tipo];

  document
    .querySelectorAll(
      `#${DATOS_NODOS_PARTICIPACION[tipo].mapId} .nodo-leyenda-item`,
    )
    .forEach((elemento) => {
      elemento.classList.toggle(
        "active",
        elemento.dataset.filtro === estado.filtroTematico,
      );
    });
}

// ============================================================
// 7. LEYENDA TEMÁTICA
// ============================================================

function obtenerElementosLeyendaNodo(tipo) {
  if (tipo === "digital") {
    return [
      { color: "#153221", texto: "Alta", filtro: "alta" },
      { color: "#365a41", texto: "Media", filtro: "media" },
      { color: "#577a5f", texto: "Baja", filtro: "baja" },
      {
        color: "#84ac9c",
        texto: "Sin parques",
        filtro: "sin",
      },
    ];
  }

  if (tipo === "agua") {
    return [
      {
        color: "#153221",
        texto: "Nivel crítico",
        filtro: "Nivel crítico",
      },
      {
        color: "#365a41",
        texto: "Nivel severo",
        filtro: "Nivel severo",
      },
      {
        color: "#577a5f",
        texto: "Nivel moderado",
        filtro: "Nivel moderado",
      },
    ];
  }

  return [
    { color: "#153221", texto: "Alta", filtro: "Alta" },
    { color: "#365a41", texto: "Media", filtro: "Media" },
    { color: "#577a5f", texto: "Baja", filtro: "Baja" },
  ];
}

function obtenerTituloLeyendaNodo(tipo) {
  if (tipo === "digital") {
    return "Parques industriales";
  }

  if (tipo === "agua") {
    return "Impacto municipal de sequía";
  }

  return "Vulnerabilidad alimentaria";
}

function crearLeyendaTematicaNodo(tipo) {
  const estado = ESTADO_NODOS[tipo];

  const control = L.control({
    position: "bottomright",
  });

  control.onAdd = function () {
    const div = L.DomUtil.create("div", "nodo-leyenda-tematica");

    const elementos = obtenerElementosLeyendaNodo(tipo);

    div.innerHTML = `
      <h4>${obtenerTituloLeyendaNodo(tipo)}</h4>

      ${elementos
        .map(
          (elemento) => `
            <button
              type="button"
              class="nodo-leyenda-item"
              data-filtro="${elemento.filtro}"
            >
              <i style="background:${elemento.color}"></i>
              <span>${elemento.texto}</span>
            </button>
          `,
        )
        .join("")}
    `;

    L.DomEvent.disableClickPropagation(div);
    L.DomEvent.disableScrollPropagation(div);

    div.querySelectorAll(".nodo-leyenda-item").forEach((boton) => {
      boton.addEventListener("click", () => {
        filtrarCapaTematicaNodo(tipo, boton.dataset.filtro);
      });
    });

    return div;
  };

  control.addTo(estado.map);
}

// ============================================================
// 8. ICONOS DE PARTICIPACIÓN
// ============================================================

function crearIconoParticipacionNodo(participacion) {
  const configuracion = COLORES_PARTICIPACION_NODO[participacion];

  const color = configuracion?.color || "#5692B8";

  return L.divIcon({
    className: "nodo-marker-icon",

    html: `
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="36"
        height="48"
        viewBox="0 0 36 48"
        aria-hidden="true"
      >
        <path
          d="
            M18 1
            C8.6 1 1 8.6 1 18
            C1 30.4 18 47 18 47
            C18 47 35 30.4 35 18
            C35 8.6 27.4 1 18 1
            Z
          "
          fill="${color}"
          stroke="#ffffff"
          stroke-width="2"
        />

        <circle
          cx="18"
          cy="18"
          r="7"
          fill="#ffffff"
          fill-opacity="0.92"
        />
      </svg>
    `,

    iconSize: [36, 48],
    iconAnchor: [18, 47],
    popupAnchor: [0, -44],
    tooltipAnchor: [0, -40],
  });
}

// ============================================================
// ICONOS DE PRESENCIA UNIVERSITARIA
// ============================================================

async function agregarPresenciaUniversitariaNodo(tipo) {
  const estado = ESTADO_NODOS[tipo];

  if (!estado?.map) return;

  // Evita que los iconos se agreguen dos veces
  if (estado.presenciaLayer) return;

  try {
    let datosPresencia = [];

    /*
     * Primero intenta utilizar los datos ya cargados
     * por 5_visualizador.js.
     */
    if (
      typeof datosPresenciaUAEM !== "undefined" &&
      Array.isArray(datosPresenciaUAEM) &&
      datosPresenciaUAEM.length > 0
    ) {
      datosPresencia = datosPresenciaUAEM;
    } else {
      /*
       * Si todavía no estaban cargados, se leen
       * directamente desde el archivo JSON.
       */
      const respuesta = await fetch("data/presencia_u.json");

      if (!respuesta.ok) {
        throw new Error(
          `No se pudo cargar presencia_u.json: ${respuesta.status}`,
        );
      }

      datosPresencia = await respuesta.json();
    }

    const iconoPresencia = L.icon({
      iconUrl: "img/icono_presencia1.png",
      iconSize: [35, 35],
      iconAnchor: [17, 34],
      popupAnchor: [0, -32],
      tooltipAnchor: [0, -30],
    });

    estado.presenciaLayer = L.layerGroup().addTo(estado.map);

    datosPresencia.forEach((registro) => {
      const latitud = Number(
        registro.Latitud ?? registro.latitud ?? registro.LATITUD,
      );

      const longitud = Number(
        registro.Longitud ?? registro.longitud ?? registro.LONGITUD,
      );

      if (!Number.isFinite(latitud) || !Number.isFinite(longitud)) {
        return;
      }

      const nombre =
        registro["Presencia Universitaria"] ||
        registro.nombre ||
        registro.Nombre ||
        "Presencia universitaria";

      const clasificacion =
        registro.Clasificacion || registro.clasificacion || "";

      const marcador = L.marker([latitud, longitud], {
        icon: iconoPresencia,

        /*
         * Mantiene los marcadores de participación
         * por encima de los iconos de presencia.
         */
        zIndexOffset: -100,
      });

      marcador.bindTooltip(
        `
          <div>
            <strong>${nombre}</strong>
            ${clasificacion ? `<br><span>${clasificacion}</span>` : ""}
          </div>
        `,
        {
          direction: "top",
          offset: [0, -25],
        },
      );

      marcador.addTo(estado.presenciaLayer);
    });

    console.log(
      `Presencia universitaria agregada al nodo ${tipo}:`,
      datosPresencia.length,
    );
  } catch (error) {
    console.error(`Error cargando presencia universitaria en ${tipo}:`, error);
  }
}

// ============================================================
// 9. INICIALIZAR MAPA
// ============================================================

function crearMapaNodoParticipacion(tipo) {
  const configuracion = DATOS_NODOS_PARTICIPACION[tipo];
  const estado = ESTADO_NODOS[tipo];

  if (!configuracion || !estado) return;

  estado.map = L.map(configuracion.mapId, {
    attributionControl: false,
    zoomControl: false,
    minZoom: 7,
    maxZoom: 18,
    zoomSnap: 0.1,
    zoomDelta: 0.1,
  }).setView(configuracion.centroInicial, configuracion.zoomInicial);

  L.tileLayer(
    "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
    {
      attribution: "&copy; OpenStreetMap contributors &copy; CARTO",
      maxZoom: 20,
    },
  ).addTo(estado.map);

  L.control
    .zoom({
      position: "topright",
    })
    .addTo(estado.map);

  asignarMapaGlobalNodo(tipo, estado.map);

  crearCapaTematicaNodo(tipo);
  crearLeyendaTematicaNodo(tipo);

  estado.markerGroup = L.featureGroup().addTo(estado.map);

  // Agregar los iconos de presencia universitaria
  agregarPresenciaUniversitariaNodo(tipo);

  crearControlRestablecerNodo(tipo);
}

function crearControlRestablecerNodo(tipo) {
  const estado = ESTADO_NODOS[tipo];

  const ResetControl = L.Control.extend({
    options: {
      position: "topright",
    },

    onAdd: function () {
      const boton = L.DomUtil.create("button", "reset-map-btn");

      boton.type = "button";
      boton.innerHTML = "RESTABLECER";
      boton.title = "Restablecer mapa y filtros";

      L.DomEvent.disableClickPropagation(boton);

      L.DomEvent.on(boton, "click", (evento) => {
        L.DomEvent.preventDefault(evento);
        reiniciarNodoParticipacion(tipo);
      });

      return boton;
    },
  });

  estado.map.addControl(new ResetControl());
}

function iniciarNodoParticipacion(tipo) {
  const configuracion = DATOS_NODOS_PARTICIPACION[tipo];
  const estado = ESTADO_NODOS[tipo];

  if (!configuracion || !estado) {
    console.error("Tipo de nodo no reconocido:", tipo);
    return;
  }

  const contenedor = document.getElementById(configuracion.mapId);

  if (!contenedor) {
    console.error(`No se encontró el contenedor #${configuracion.mapId}`);
    return;
  }

  if (!estado.map) {
    crearMapaNodoParticipacion(tipo);
  }

  estado.filtroParticipacion = null;
  estado.filtroTematico = null;

  limpiarFiltrosParticipacionNodo(tipo);
  restaurarCapaTematicaNodo(tipo);
  actualizarNodoParticipacion(tipo);

  setTimeout(() => {
    estado.map.invalidateSize();
  }, 200);
}

// ============================================================
// 10. FILTROS DE PARTICIPACIÓN
// ============================================================

function limpiarFiltrosParticipacionNodo(tipo) {
  const configuracion = DATOS_NODOS_PARTICIPACION[tipo];

  const contenedor = document.getElementById(configuracion.filtrosId);

  if (!contenedor) return;

  contenedor.querySelectorAll(".nodo-filter-btn").forEach((boton) => {
    boton.classList.remove("active");
  });

  contenedor.querySelectorAll(".nodo-filter-count").forEach((caja) => {
    caja.remove();
  });
}

function seleccionarParticipacionNodo(tipo, participacion) {
  const estado = ESTADO_NODOS[tipo];

  if (!estado) return;

  const participacionNormalizada = normalizarNodo(participacion);

  if (normalizarNodo(estado.filtroParticipacion) === participacionNormalizada) {
    estado.filtroParticipacion = null;
  } else {
    estado.filtroParticipacion = participacion;
  }

  actualizarBotonesParticipacionNodo(tipo);
  actualizarNodoParticipacion(tipo);
}

function actualizarBotonesParticipacionNodo(tipo) {
  const configuracion = DATOS_NODOS_PARTICIPACION[tipo];
  const estado = ESTADO_NODOS[tipo];

  const contenedor = document.getElementById(configuracion.filtrosId);

  if (!contenedor) return;

  contenedor.querySelectorAll(".nodo-filter-count").forEach((caja) => {
    caja.remove();
  });

  contenedor.querySelectorAll(".nodo-filter-btn").forEach((boton) => {
    const participacionBoton = boton.dataset.participacion;

    const esActivo =
      normalizarNodo(participacionBoton) ===
      normalizarNodo(estado.filtroParticipacion);

    boton.classList.toggle("active", esActivo);

    if (esActivo) {
      const total = configuracion.integrantes.filter(
        (integrante) =>
          normalizarNodo(integrante.participacion) ===
          normalizarNodo(estado.filtroParticipacion),
      ).length;

      const caja = document.createElement("div");

      caja.className = "nodo-filter-count";
      caja.innerHTML = `
          Total de integrantes:
          <strong>${total}</strong>
        `;

      boton.insertAdjacentElement("afterend", caja);
    }
  });
}

// ============================================================
// 11. ACTUALIZAR MARCADORES Y LISTA
// ============================================================

function obtenerResultadosNodo(tipo) {
  const configuracion = DATOS_NODOS_PARTICIPACION[tipo];
  const estado = ESTADO_NODOS[tipo];

  return configuracion.integrantes.filter((integrante) => {
    return (
      !estado.filtroParticipacion ||
      normalizarNodo(integrante.participacion) ===
        normalizarNodo(estado.filtroParticipacion)
    );
  });
}

function actualizarNodoParticipacion(tipo) {
  const estado = ESTADO_NODOS[tipo];

  if (!estado?.map || !estado.markerGroup) return;

  const resultados = obtenerResultadosNodo(tipo);

  estado.markerGroup.clearLayers();
  estado.marcadores.clear();

  resultados.forEach((integrante) => {
    const participacion = COLORES_PARTICIPACION_NODO[integrante.participacion];

    const marcador = L.marker(integrante.loc, {
      icon: crearIconoParticipacionNodo(integrante.participacion),
      title: integrante.nombre,
    });

    const nivelHTML = integrante.nivel
      ? `
        <span class="nodo-popup-nivel">
          ${integrante.nivel}
        </span>
      `
      : "";

    const estadoHTML = integrante.estado
      ? `
        <span class="nodo-popup-estado">
          ${integrante.estado}
        </span>
      `
      : "";

    marcador.bindPopup(
      `
        <div class="nodo-popup">
          <div
            class="nodo-popup-participacion"
            style="color:${participacion.color}"
          >
            ${participacion.etiqueta}
            ${nivelHTML}
          </div>

          <strong>${integrante.nombre}</strong>

          <p>${integrante.direccion}</p>

          ${estadoHTML}
        </div>
      `,
      {
        maxWidth: 330,
        minWidth: 230,
      },
    );

    marcador.bindTooltip(integrante.nombre, {
      direction: "top",
      offset: [0, -38],
    });

    marcador.addTo(estado.markerGroup);

    estado.marcadores.set(integrante.id, marcador);
  });

  mostrarListaNodoParticipacion(tipo, resultados);
}

function mostrarListaNodoParticipacion(tipo, resultados) {
  const configuracion = DATOS_NODOS_PARTICIPACION[tipo];
  const estado = ESTADO_NODOS[tipo];

  const lista = document.getElementById(configuracion.listId);

  if (!lista) return;

  if (!resultados.length) {
    lista.innerHTML = `
      <p class="nodo-sin-resultados">
        No se encontraron integrantes.
      </p>
    `;

    return;
  }

  lista.innerHTML = resultados
    .map((integrante) => {
      const participacion =
        COLORES_PARTICIPACION_NODO[integrante.participacion];

      const nivelHTML = integrante.nivel
        ? `
          <span class="nodo-result-nivel">
            ${integrante.nivel}
          </span>
        `
        : "";

      const estadoHTML = integrante.estado
        ? `
          <span class="nodo-result-estado">
            ${integrante.estado}
          </span>
        `
        : "";

      return `
        <article
          class="nodo-result-item"
          data-integrante-id="${integrante.id}"
        >
          <div class="nodo-result-superior">
            <span
              class="nodo-result-participacion"
              style="color:${participacion.color}"
            >
              ${participacion.etiqueta}
            </span>

            ${nivelHTML}
          </div>

          <h4>${integrante.nombre}</h4>

          <p>${integrante.direccion}</p>

          ${estadoHTML}
        </article>
      `;
    })
    .join("");

  lista.querySelectorAll("[data-integrante-id]").forEach((elemento) => {
    elemento.addEventListener("click", () => {
      const marcador = estado.marcadores.get(elemento.dataset.integranteId);

      if (!marcador) return;

      /*
       * Centra el marcador seleccionado, pero conserva
       * exactamente el nivel de zoom actual.
       */
      estado.map.panTo(marcador.getLatLng(), {
        animate: true,
        duration: 0.5,
      });

      marcador.openPopup();
    });
  });
}

// ============================================================
// 12. AJUSTAR VISTA
// ============================================================

function ajustarVistaNodoParticipacion(tipo) {
  const configuracion = DATOS_NODOS_PARTICIPACION[tipo];
  const estado = ESTADO_NODOS[tipo];

  if (!estado?.map || !estado.markerGroup) return;

  const capas = estado.markerGroup.getLayers();

  if (!capas.length) {
    estado.map.setView(configuracion.centroInicial, configuracion.zoomInicial);

    return;
  }

  if (capas.length === 1) {
    estado.map.setView(capas[0].getLatLng(), 14);
    return;
  }

  const limites = estado.markerGroup.getBounds();

  if (limites.isValid()) {
    estado.map.fitBounds(limites.pad(0.22), {
      padding: [30, 30],
      maxZoom: 11,
    });
  }
}

// ============================================================
// 13. RESTABLECER
// ============================================================

function restaurarCapaTematicaNodo(tipo) {
  const estado = ESTADO_NODOS[tipo];

  if (!estado?.polygonLayer) return;

  estado.filtroTematico = null;

  estado.polygonLayer.eachLayer((layer) => {
    layer.setStyle(obtenerEstiloTematicoNodo(tipo, layer.feature));
  });

  actualizarLeyendaTematicaNodo(tipo);
}

function reiniciarNodoParticipacion(tipo) {
  const estado = ESTADO_NODOS[tipo];

  if (!estado) return;

  estado.filtroParticipacion = null;

  limpiarFiltrosParticipacionNodo(tipo);
  restaurarCapaTematicaNodo(tipo);
  actualizarNodoParticipacion(tipo);

  estado.map.closePopup();
}

// ============================================================
// 14. REDIMENSIONAR MAPAS
// ============================================================

window.addEventListener("resize", () => {
  Object.values(ESTADO_NODOS).forEach((estado) => {
    if (estado.map) {
      estado.map.invalidateSize();
    }
  });
});
