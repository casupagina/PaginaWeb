// ============================================================
// 6_emprendimiento.js
// UNIDADES DE EMPRENDIMIENTO E INCUBADORAS DE LA INNOVACIÓN
// ============================================================

// ============================================================
// 1. DATOS DE UNIDADES DE EMPRENDIMIENTO
// ============================================================

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

// ============================================================
// 2. MUNICIPIOS CON INCUBADORAS
// ============================================================

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

// ============================================================
// 3. FUNCIONES GENERALES
// ============================================================

function normalizarTexto(texto) {
  return (texto || "")
    .toString()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]/g, "");
}

function obtenerNombreMunicipio(feature) {
  return (
    feature?.properties?.NOMGEO ||
    feature?.properties?.nomgeo ||
    feature?.properties?.NOM_MUN ||
    feature?.properties?.nombre ||
    "Municipio"
  );
}

/**
 * Elimina la selección visual de todos los filtros de un módulo.
 */
function limpiarFiltrosModulo(selectorModulo) {
  const modulo = document.querySelector(selectorModulo);

  if (!modulo) return;

  modulo.querySelectorAll(".filter-btn").forEach((boton) => {
    boton.classList.remove("active");
  });

  modulo.querySelectorAll(".filter-count-box").forEach((caja) => {
    caja.remove();
  });
}

/**
 * Marca un filtro como activo y agrega debajo su caja de cantidad.
 */
function activarFiltroConConteo(
  selectorModulo,
  filtroNormalizado,
  etiqueta,
  cantidad,
) {
  limpiarFiltrosModulo(selectorModulo);

  const botones = document.querySelectorAll(`${selectorModulo} .filter-btn`);

  const botonActivo = Array.from(botones).find((boton) => {
    return normalizarTexto(boton.dataset.filtro) === filtroNormalizado;
  });

  if (!botonActivo) return;

  botonActivo.classList.add("active");

  const cajaCantidad = document.createElement("div");

  cajaCantidad.className = "filter-count-box";
  cajaCantidad.innerHTML = `
    ${etiqueta}: <strong>${cantidad}</strong>
  `;

  botonActivo.insertAdjacentElement("afterend", cajaCantidad);
}

// ============================================================
// 4. VARIABLES GLOBALES DE EMPRENDIMIENTO
// ============================================================

let mapEmprendimiento = null;
let markersEmprendimiento = null;

let marcadoresPorSede = new Map();

let filtroEmprendimiento = null;

// ============================================================
// 5. VARIABLES GLOBALES DE INCUBADORAS
// ============================================================

let mapIncubadoras = null;

let capaBaseIncubadoras = null;
let capaMunicipiosIncubadoras = null;

let capasPorMunicipio = new Map();

let filtroIncubadoras = null;

// ============================================================
// 6. FUNCIÓN DE COMPATIBILIDAD CON EL MENÚ PRINCIPAL
// ============================================================

/**
 * Esta función conserva compatibilidad con los onclick existentes
 * en el menú principal del index.html.
 */
function initMapaPuntosInteractivos(
  mapId,
  data = null,
  listId = null,
  isTolucaOnly = false,
) {
  if (mapId === "map-emprendimiento") {
    iniciarMapaEmprendimiento();
    return;
  }

  if (mapId === "map-incubadoras") {
    iniciarMapaIncubadoras();
  }
}

// ============================================================
// 7. UNIDADES DE EMPRENDIMIENTO E INNOVACIÓN
// ============================================================

function iniciarMapaEmprendimiento() {
  const contenedorMapa = document.getElementById("map-emprendimiento");

  if (!contenedorMapa) {
    console.error("No se encontró el contenedor map-emprendimiento.");
    return;
  }

  if (!mapEmprendimiento) {
    mapEmprendimiento = L.map("map-emprendimiento", {
      zoomControl: false,
      minZoom: 10,
      maxZoom: 18,
    }).setView([19.2828, -99.6565], 13);

    L.tileLayer(
      "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
      {
        attribution: "&copy; OpenStreetMap contributors &copy; CARTO",
        maxZoom: 20,
      },
    ).addTo(mapEmprendimiento);

    L.control
      .zoom({
        position: "topleft",
      })
      .addTo(mapEmprendimiento);

    markersEmprendimiento = L.featureGroup().addTo(mapEmprendimiento);
  }

  const buscador = document.getElementById("search-emprendimiento");

  if (buscador) {
    buscador.value = "";
  }

  /*
   * Al abrir el módulo:
   * - No se selecciona ningún filtro.
   * - Aparecen todos los marcadores.
   * - Aparecen todos los resultados.
   */
  filtroEmprendimiento = null;

  limpiarFiltrosModulo("#emprendimiento");
  actualizarEmprendimiento();

  setTimeout(() => {
    mapEmprendimiento.invalidateSize();

    if (markersEmprendimiento && markersEmprendimiento.getLayers().length > 0) {
      mapEmprendimiento.fitBounds(markersEmprendimiento.getBounds().pad(0.2), {
        maxZoom: 14,
      });
    }
  }, 200);
}

/**
 * Activa el filtro seleccionado.
 * Si se vuelve a presionar el mismo filtro, se desactiva
 * y vuelven a aparecer todos los resultados.
 */
function seleccionarFiltroEmprendimiento(filtro) {
  const filtroNormalizado = normalizarTexto(filtro);

  if (filtroEmprendimiento === filtroNormalizado) {
    filtroEmprendimiento = null;

    limpiarFiltrosModulo("#emprendimiento");
    actualizarEmprendimiento();

    return;
  }

  filtroEmprendimiento = filtroNormalizado;

  const buscador = document.getElementById("search-emprendimiento");

  if (buscador) {
    buscador.value = "";
  }

  const sedeSeleccionada = centrosEmprendimiento.find((sede) => {
    return normalizarTexto(sede.name) === filtroEmprendimiento;
  });

  activarFiltroConConteo(
    "#emprendimiento",
    filtroEmprendimiento,
    "Total de espacios",
    sedeSeleccionada ? sedeSeleccionada.space.length : 0,
  );

  actualizarEmprendimiento();
}

function buscarEmprendimiento() {
  actualizarEmprendimiento();
}

function actualizarEmprendimiento() {
  if (!mapEmprendimiento || !markersEmprendimiento) return;

  const buscador = document.getElementById("search-emprendimiento");

  const textoBusqueda = normalizarTexto(buscador?.value);

  /*
   * Primero se aplica el filtro lateral.
   * Si no existe un filtro activo, aparecen todas las sedes.
   */
  let resultados = centrosEmprendimiento.filter((sede) => {
    return (
      !filtroEmprendimiento ||
      normalizarTexto(sede.name) === filtroEmprendimiento
    );
  });

  /*
   * Después se aplica la búsqueda.
   * Puede buscarse por nombre de sede o por espacio universitario.
   */
  if (textoBusqueda) {
    resultados = resultados
      .map((sede) => {
        const coincideNombreSede = normalizarTexto(sede.name).includes(
          textoBusqueda,
        );

        const espaciosCoincidentes = sede.space.filter((espacio) => {
          return normalizarTexto(espacio).includes(textoBusqueda);
        });

        return {
          ...sede,
          space: coincideNombreSede ? sede.space : espaciosCoincidentes,
        };
      })
      .filter((sede) => sede.space.length > 0);
  }

  markersEmprendimiento.clearLayers();
  marcadoresPorSede.clear();

  resultados.forEach((sede) => {
    /*
     * L.marker sin icono personalizado utiliza
     * el marcador azul clásico de Leaflet.
     */
    const marcador = L.marker(sede.loc);

    marcador.bindTooltip(sede.name, {
      direction: "top",
      offset: [0, -28],
    });

    marcador.bindPopup(`
      <div class="popup-emprendimiento">
        <strong>${sede.name}</strong>

        <ul>
          ${sede.space.map((espacio) => `<li>${espacio}</li>`).join("")}
        </ul>
      </div>
    `);

    marcador.addTo(markersEmprendimiento);

    marcadoresPorSede.set(normalizarTexto(sede.name), marcador);
  });

  mostrarListaEmprendimiento(resultados);

  /*
   * Ajuste automático de la vista.
   */
  if (resultados.length === 1) {
    mapEmprendimiento.setView(resultados[0].loc, 16);
  } else if (
    resultados.length > 1 &&
    markersEmprendimiento.getBounds().isValid()
  ) {
    mapEmprendimiento.fitBounds(markersEmprendimiento.getBounds().pad(0.2), {
      maxZoom: 14,
    });
  } else {
    mapEmprendimiento.setView([19.2828, -99.6565], 13);
  }
}

function mostrarListaEmprendimiento(resultados) {
  const lista = document.getElementById("list-emprendimiento");

  if (!lista) return;

  if (!resultados.length) {
    lista.innerHTML = `
      <p class="sin-resultados">
        No se encontraron espacios universitarios.
      </p>
    `;

    return;
  }

  /*
   * La lista no incluye círculos ni números de cantidad.
   */
  lista.innerHTML = resultados
    .map((sede) => {
      return `
        <article
          class="resultado-emprendimiento"
          data-sede="${normalizarTexto(sede.name)}"
        >
          <div class="resultado-encabezado">
            <h4>${sede.name}</h4>
          </div>

          <ul>
            ${sede.space.map((espacio) => `<li>${espacio}</li>`).join("")}
          </ul>
        </article>
      `;
    })
    .join("");

  lista.querySelectorAll("[data-sede]").forEach((elemento) => {
    elemento.addEventListener("click", () => {
      const identificadorSede = elemento.dataset.sede;

      const marcador = marcadoresPorSede.get(identificadorSede);

      if (!marcador) return;

      mapEmprendimiento.setView(marcador.getLatLng(), 16);

      marcador.openPopup();
    });
  });
}

// ============================================================
// 8. INCUBADORAS DE LA INNOVACIÓN
// ============================================================

function iniciarMapaIncubadoras() {
  const contenedorMapa = document.getElementById("map-incubadoras");

  if (!contenedorMapa) {
    console.error("No se encontró el contenedor map-incubadoras.");
    return;
  }

  if (!mapIncubadoras) {
    mapIncubadoras = L.map("map-incubadoras", {
      zoomControl: false,
      minZoom: 7,
      maxZoom: 14,
    }).setView([19.35, -99.6], 8.2);

    L.tileLayer(
      "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
      {
        attribution: "&copy; OpenStreetMap contributors &copy; CARTO",
        maxZoom: 20,
        opacity: 1,
      },
    ).addTo(mapIncubadoras);

    L.control
      .zoom({
        position: "topleft",
      })
      .addTo(mapIncubadoras);

    /*
     * Capa base del Estado de México.
     * Se deja con mayor opacidad para que los municipios
     * se distingan claramente.
     */
    if (typeof datosMunicipios !== "undefined") {
      capaBaseIncubadoras = L.geoJSON(datosMunicipios, {
        interactive: false,

        style: {
          fillColor: "#d9ded9",
          color: "#ffffff",
          weight: 1.1,
          fillOpacity: 0.82,
        },
      }).addTo(mapIncubadoras);
    } else {
      console.error(
        "No se encontró la variable datosMunicipios. Revisa que el archivo GeoJSON se cargue antes de 6_emprendimiento.js.",
      );
    }
  }

  const buscador = document.getElementById("search-incubadoras");

  if (buscador) {
    buscador.value = "";
  }

  /*
   * Al abrir el módulo:
   * - No hay filtro seleccionado.
   * - Aparecen los municipios de ambas clasificaciones.
   */
  filtroIncubadoras = null;

  limpiarFiltrosModulo("#incubadoras");
  actualizarIncubadoras();

  setTimeout(() => {
    mapIncubadoras.invalidateSize();

    if (
      capaMunicipiosIncubadoras &&
      capaMunicipiosIncubadoras.getBounds().isValid()
    ) {
      mapIncubadoras.fitBounds(
        capaMunicipiosIncubadoras.getBounds().pad(0.08),
        {
          maxZoom: 9,
        },
      );
    }
  }, 200);
}

/**
 * Al seleccionar un filtro se muestran únicamente
 * los municipios correspondientes.
 *
 * Al volver a pulsar el mismo filtro, se desactiva
 * y vuelven a aparecer todos los municipios.
 */
function seleccionarFiltroIncubadoras(filtro) {
  const filtroNormalizado = normalizarTexto(filtro);

  if (filtroIncubadoras === filtroNormalizado) {
    filtroIncubadoras = null;

    limpiarFiltrosModulo("#incubadoras");
    actualizarIncubadoras();

    return;
  }

  filtroIncubadoras = filtroNormalizado;

  const buscador = document.getElementById("search-incubadoras");

  if (buscador) {
    buscador.value = "";
  }

  const totalMunicipios =
    typeof datosMunicipios !== "undefined"
      ? datosMunicipios.features.filter((feature) => {
          const nombreNormalizado = normalizarTexto(
            obtenerNombreMunicipio(feature),
          );

          return (
            obtenerCategoriaIncubadora(nombreNormalizado) === filtroIncubadoras
          );
        }).length
      : 0;

  activarFiltroConConteo(
    "#incubadoras",
    filtroIncubadoras,
    "Total de municipios",
    totalMunicipios,
  );

  actualizarIncubadoras();
}

function buscarIncubadoras() {
  actualizarIncubadoras();
}

/**
 * Devuelve la categoría de un municipio.
 */
function obtenerCategoriaIncubadora(nombreNormalizado) {
  if (munsAlbergue.includes(nombreNormalizado)) {
    return "albergue";
  }

  if (munsSinAlbergue.includes(nombreNormalizado)) {
    return "sinalbergue";
  }

  return null;
}

function actualizarIncubadoras() {
  if (!mapIncubadoras) return;

  if (typeof datosMunicipios === "undefined") {
    console.error("La variable datosMunicipios no está disponible.");
    return;
  }

  const buscador = document.getElementById("search-incubadoras");

  const textoBusqueda = normalizarTexto(buscador?.value);

  const municipiosFiltrados = datosMunicipios.features.filter((feature) => {
    const nombreMunicipio = obtenerNombreMunicipio(feature);

    const nombreNormalizado = normalizarTexto(nombreMunicipio);

    const categoria = obtenerCategoriaIncubadora(nombreNormalizado);

    /*
     * Solo se consideran municipios que pertenecen
     * a alguna clasificación de incubadoras.
     */
    if (!categoria) return false;

    const coincideFiltro =
      !filtroIncubadoras || filtroIncubadoras === categoria;

    const coincideBusqueda =
      !textoBusqueda || nombreNormalizado.includes(textoBusqueda);

    return coincideFiltro && coincideBusqueda;
  });

  /*
   * Elimina la capa coloreada anterior.
   */
  if (capaMunicipiosIncubadoras) {
    mapIncubadoras.removeLayer(capaMunicipiosIncubadoras);
  }

  capasPorMunicipio.clear();

  capaMunicipiosIncubadoras = L.geoJSON(
    {
      type: "FeatureCollection",
      features: municipiosFiltrados,
    },
    {
      style: (feature) => {
        const nombreNormalizado = normalizarTexto(
          obtenerNombreMunicipio(feature),
        );

        const tieneAlbergue = munsAlbergue.includes(nombreNormalizado);

        return {
          /*
           * Dorado: con servicio de albergue.
           * Verde: sin servicio de albergue.
           */
          fillColor: tieneAlbergue ? "#b3975d" : "#134a2c",
          color: "#ffffff",
          weight: 1.5,
          fillOpacity: 0.9,
        };
      },

      onEachFeature: (feature, layer) => {
        const nombre = obtenerNombreMunicipio(feature);

        const nombreNormalizado = normalizarTexto(nombre);

        const tieneAlbergue = munsAlbergue.includes(nombreNormalizado);

        const clasificacion = tieneAlbergue
          ? "Con servicio de albergue"
          : "Sin servicio de albergue";

        /*
         * Información especial de Toluca.
         */
        const informacionToluca =
          nombreNormalizado === "toluca"
            ? `
              <br><strong>4 sedes de incubadoras</strong>
              <br>
              <span style="color:#9b7a39;">
                Facultad de Geografía, Ciencias Agrícolas,
                Contaduría y Administración e Incubadora Toluca
              </span>
            `
            : "";

        layer.bindTooltip(
          `
            <div style="text-align:center;">
              <strong>${nombre}</strong>
              <br>
              ${clasificacion}
              ${informacionToluca}
            </div>
          `,
          {
            sticky: true,
            direction: "top",
          },
        );

        layer.on("mouseover", function () {
          this.setStyle({
            weight: 2.5,
            fillOpacity: 1,
          });
        });

        layer.on("mouseout", function () {
          this.setStyle({
            weight: 1.5,
            fillOpacity: 0.9,
          });
        });

        capasPorMunicipio.set(nombreNormalizado, layer);
      },
    },
  ).addTo(mapIncubadoras);

  mostrarListaIncubadoras(municipiosFiltrados);

  /*
   * Ajusta la vista a los municipios visibles.
   */
  if (
    municipiosFiltrados.length > 0 &&
    capaMunicipiosIncubadoras.getBounds().isValid()
  ) {
    mapIncubadoras.fitBounds(capaMunicipiosIncubadoras.getBounds().pad(0.08), {
      maxZoom: filtroIncubadoras ? 10 : 9,
    });
  } else {
    mapIncubadoras.setView([19.35, -99.6], 8.2);
  }
}

function mostrarListaIncubadoras(features) {
  const lista = document.getElementById("list-incubadoras");

  if (!lista) return;

  const municipios = features
    .map((feature) => {
      const nombre = obtenerNombreMunicipio(feature);

      const nombreNormalizado = normalizarTexto(nombre);

      return {
        nombre,
        nombreNormalizado,
        tieneAlbergue: munsAlbergue.includes(nombreNormalizado),
      };
    })
    .sort((a, b) => {
      return a.nombre.localeCompare(b.nombre, "es");
    });

  if (!municipios.length) {
    lista.innerHTML = `
      <p class="sin-resultados">
        No se encontraron municipios.
      </p>
    `;

    return;
  }

  /*
   * No se muestran círculos de colores en la lista.
   * Toluca incluye información complementaria.
   */
  lista.innerHTML = municipios
    .map((municipio) => {
      const complementoToluca =
        municipio.nombreNormalizado === "toluca"
          ? `
            <div class="detalle-toluca">
              <strong>4 sedes:</strong>

              <ul>
                <li>Facultad de Geografía*</li>
                <li>Facultad de Ciencias Agrícolas</li>
                <li>
                  Facultad de Contaduría y Administración
                </li>
                <li>Incubadora Toluca</li>
              </ul>

              <span class="detalle-toluca-nota">
                * Con servicio de albergue
              </span>
            </div>
          `
          : "";

      return `
        <article
          class="resultado-incubadora"
          data-municipio="${municipio.nombreNormalizado}"
        >
          <div>
            <h4>${municipio.nombre}</h4>

            <p>
              ${
                municipio.tieneAlbergue
                  ? "Con servicio de albergue"
                  : "Sin servicio de albergue"
              }
            </p>

            ${complementoToluca}
          </div>
        </article>
      `;
    })
    .join("");

  lista.querySelectorAll("[data-municipio]").forEach((elemento) => {
    elemento.addEventListener("click", () => {
      const nombreNormalizado = elemento.dataset.municipio;

      const capaMunicipio = capasPorMunicipio.get(nombreNormalizado);

      if (!capaMunicipio) return;

      mapIncubadoras.fitBounds(capaMunicipio.getBounds(), {
        maxZoom: 11,
        padding: [30, 30],
      });

      capaMunicipio.openTooltip();
    });
  });
}
