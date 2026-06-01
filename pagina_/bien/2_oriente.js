// 2_oriente.js: REGIÓN ORIENTE Y OFERTA
// ==========================================

const sedesOriente = [
  {
    name: "C.U. UAEM Amecameca",
    loc: [19.13196486557817, -98.78643691990735],
    space: "Amecameca",
  },
  {
    name: "C.U. UAEM Texcoco",
    loc: [19.43487015367749, -98.91717334509472],
    space: "Texcoco",
  },
  {
    name: "C.U. UAEM Valle de Chalco",
    loc: [19.29853299967006, -98.9561527490447],
    space: "Valle de Chalco Solidaridad",
  },
  {
    name: "C.U. UAEM Nezahualcóyotl",
    loc: [19.4231010047507, -99.02028460104142],
    space: "Nezahualcóyotl",
  },
  {
    name: "Campus Chimalhuacan",
    loc: [19.422229877967204, -98.98859044368021],
    space: "Chimalhuacan",
  },
];

const sedesSur = [
  {
    name: "C.U. UAEM Atlacomulco",
    loc: [19.76176449530711, -99.84085350230627],
    space: "Atlacomulco",
  },
  {
    name: "C.U. UAEM Tenancingo",
    loc: [18.96832739857548, -99.6124040915006],
    space: "Tenancingo",
  },
  {
    name: "C.U. UAEM Temascaltepec",
    loc: [19.04509951361619, -100.05175075913317],
    space: "Temascaltepec",
  },
  {
    name: "Campus Tianguistenco",
    loc: [19.196800008810165, -99.51780876309819],
    space: "Tianguistenco",
  },
];

const ofertaOriente = [
  // ---------------------------------------------------------
  // 2. CIENCIAS SOCIALES Y ADMINISTRATIVAS
  // ---------------------------------------------------------
  {
    area: "Ciencias Sociales y Administrativas",
    space: "Amecameca",
    carreras: [
      "Lic. Administración",
      "Lic. Ciencias Políticas y Administración Pública",
      "Lic. Administración Pública",
      "Lic. Contaduría",
      "Lic. Derecho",
    ],
  },
  {
    area: "Ciencias Sociales y Administrativas",
    space: "Nezahualcóyotl",
    carreras: ["Lic. Comercio internacional", "Lic. Seguridad ciudadana"],
  },
  {
    area: "Ciencias Sociales y Administrativas",
    space: "Texcoco",
    carreras: [
      "Lic. Administración",
      "Lic. Contaduría",
      "Lic. Informática Administrativa",
      "Lic. Derecho",
      "Lic. Ciencias Políticas y administración pública",
      "Lic. Turismo",
      "Lic. Economía",
    ],
  },
  {
    area: "Ciencias Sociales y Administrativas",
    space: "Valle de Chalco Solidaridad",
    carreras: ["Lic. Contaduría", "Lic. Derecho"],
  },
  {
    area: "Ciencias Sociales y Administrativas",
    space: "Chimalhuacán",
    carreras: [
      "Lic. Derecho",
      "Lic. Turismo",
      "Lic. Administración y Promoción de la Obra Urbana",
    ],
  },

  // ---------------------------------------------------------
  // 3. INGENIERÍA Y TECNOLOGÍA
  // ---------------------------------------------------------
  {
    area: "Ingeniería y Tecnología",
    space: "Nezahualcóyotl",
    carreras: ["Ing. en sistemas inteligentes", "Ing. en transporte"],
  },
  {
    area: "Ingeniería y Tecnología",
    space: "Texcoco",
    carreras: ["Lic. en informática", "Ing. en computación"],
  },
  {
    area: "Ingeniería y Tecnología",
    space: "Valle de Chalco Solidaridad",
    carreras: ["Ing. en computación", "Lic. Informática administrativa"],
  },
  {
    area: "Ingeniería y Tecnología",
    space: "Chimalhuacán",
    carreras: ["Ing. Industrial", "Ing. Mecatrónica"],
  },

  // ---------------------------------------------------------
  // 6. CIENCIAS DE LA SALUD
  // ---------------------------------------------------------
  {
    area: "Ciencias de la Salud",
    space: "Amecameca",
    carreras: ["Lic. Medicina veterinaria y zootecnia", "Lic. Nutrición"],
  },
  {
    area: "Ciencias de la Salud",
    space: "Nezahualcoyotl",
    carreras: ["Lic. Educación para la salud"],
  },
  {
    area: "Ciencias de la Salud",
    space: "Valle de Chalco Solidaridad",
    carreras: ["Lic. Enfermería"],
  },
  {
    area: "Ciencias de la Salud",
    space: "Chimalhuacán",
    carreras: ["Lic. Medico cirujano"],
  },

  // ---------------------------------------------------------
  // 5. EDUCACIÓN Y HUMANIDADES
  // ---------------------------------------------------------
  {
    area: "Educación y Humanidades",
    space: "Amecameca",
    carreras: ["Lic. en Lengua y Literatura Hispánica"],
  },
  {
    area: "Educación y Humanidades",
    space: "Texcoco",
    carreras: ["Lic. en Lenguas"],
  },
  {
    area: "Educación y Humanidades",
    space: "Valle de Chalco Solidaridad",
    carreras: ["Lic. en Diseño Industrial"],
  },
];

const ofertaSur = [
  // ================= ATLACOMULCO =================
  {
    area: "Ciencias Sociales y Administrativas",
    space: "Atlacomulco",
    carreras: [
      "Lic. Administración",
      "Lic. Contaduría",
      "Lic. Derecho",
      "Lic. Informática Administrativa",
      "Lic. Psicología",
    ],
  },
  {
    area: "Ingeniería y Tecnología",
    space: "Atlacomulco",
    carreras: ["Ing. en Computación"],
  },

  // ================= TENANCINGO =================
  {
    area: "Ciencias Sociales y Administrativas",
    space: "Tenancingo",
    carreras: [
      "Lic. Arqueología",
      "Lic. Gastronomía",
      "Lic. Turismo",
      "Lic. Gestión e Innovación Turística",
      "Lic. Relaciones Económicas Internacionales",
    ],
  },
  {
    area: "Ingeniería y Tecnología",
    space: "Tenancingo",
    carreras: ["Ing. Agrónomo en Floricultura"],
  },
  {
    area: "Ciencias Agropecuarias",
    space: "Tenancingo",
    carreras: ["Ing. Agrónomo en Floricultura"],
  },

  // ================= TEMASCALTEPEC =================
  {
    area: "Ciencias Sociales y Administrativas",
    space: "Temascaltepec",
    carreras: [
      "Lic. Informática Administrativa",
      "Lic. Derecho",
      "Lic. Gestión e Innovación Turística",
      "Lic. Contaduría",
    ],
  },
  {
    area: "Ciencias Agropecuarias",
    space: "Temascaltepec",
    carreras: ["Ing. Agrónomo"],
  },
  {
    area: "Ingeniería y Tecnología",
    space: "Temascaltepec",
    carreras: ["Ing. Agrónomo Zootecnista"],
  },

  // ================= TIANGUISTENCO =================
  {
    area: "Ciencias Sociales y Administrativas",
    space: "Tianguistenco",
    carreras: ["Lic. Seguridad Ciudadana"],
  },
  {
    area: "Ingeniería y Tecnología",
    space: "Tianguistenco",
    carreras: [
      "Ing. en Computación",
      "Ing. Mecánica",
      "Ing. en Plásticos",
      "Ing. en Producción Industrial",
      "Ing. en Software",
      "Ing. en Ciberseguridad",
    ],
  },
];
// =================================================
// LÓGICA DE CARRETE (SITUACIÓN REGIONAL)
// =====================================================

// Diccionario de imágenes por municipi
const fichasMunicipios = {
  //  REGIÓN SUR
  amecameca: [
    "img/Imagenes_ficahas/Amecameca/3.png",
    "img/Imagenes_ficahas/9.png",
  ],
  chalco: ["img/Imagenes_ficahas/Chalco/1.png", "img/Imagenes_ficahas/9.png"],
  chimalhuacan: [
    "img/Imagenes_ficahas/Chimalhuacan/2.png",
    "img/Imagenes_ficahas/9.png",
  ],
  texcoco: ["img/Imagenes_ficahas/Texcoco/1.png", "img/Imagenes_ficahas/9.png"],
  nezahualcoyotl: [
    "img/Imagenes_ficahas/Nezahualcoyotl/4.png",
    "img/Imagenes_ficahas/9.png",
  ],

  //  REGIÓN SUR
  temascaltepec: [
    "img/Imagenes_ficahas/Temascaltepec/6.png",
    "img/Imagenes_ficahas/10.png",
  ],
  tenancingo: [
    "img/Imagenes_ficahas/Tenancingo/5.png",
    "img/Imagenes_ficahas/10.png",
  ],
  atlacomulco: [
    "img/Imagenes_ficahas/Atlacomulco/8.png",
    "img/Imagenes_ficahas/10.png",
  ],
  santiagotianguistenco: [
    "img/Imagenes_ficahas/Tianguistenco/7.png",
    "img/Imagenes_ficahas/10.png",
  ],
};

// ==========================================
// DATOS MENU SITUACION REGIONAL
// ==========================================

const situacionRegionalMenus = {
  oriente: [
    {
      categoria: "Municipios",
      municipios: [
        "Amecameca",
        "Chalco",
        "Chimalhuacán",
        "Texcoco",
        "Nezahualcóyotl",
      ],
    },
  ],

  sur: [
    {
      categoria: "Municipios",
      municipios: [
        "Temascaltepec",
        "Tenancingo",
        "Atlacomulco",
        "Santiago Tianguistenco",
      ],
    },
  ],
};

// ==========================================
// GENERADOR MENU SITUACION
// ==========================================

let indiceActual = 0;
let imagenesActuales = [];

// 2. Función para cambiar la imagen según el municipio seleccionado
function mostrarFichaImagen(municipio) {
  const munKey = municipio
    .toLowerCase()
    .normalize("NFD")
    .replace(/\s+/g, "")
    .replace(/[\u0300-\u036f]/g, "");

  // 👇 AHORA GUARDAMOS TODAS LAS IMÁGENES
  imagenesActuales = fichasMunicipios[munKey] || [];

  // 👇 Reiniciamos índice
  indiceActual = 0;

  const imgElement = document.getElementById("imagen-ficha-actual");
  const placeholder = document.getElementById("placeholder-ficha");

  if (imagenesActuales.length > 0) {
    imgElement.src = imagenesActuales[indiceActual];

    imgElement.style.display = "block";
    placeholder.style.display = "none";
  } else {
    alert(`La ficha para ${municipio} se encuentra en proceso.`);

    imgElement.style.display = "none";
    placeholder.style.display = "flex";
  }
}

function siguienteFicha() {
  if (imagenesActuales.length === 0) return;

  indiceActual++;

  if (indiceActual >= imagenesActuales.length) {
    indiceActual = 0;
  }

  document.getElementById("imagen-ficha-actual").src =
    imagenesActuales[indiceActual];
}

function anteriorFicha() {
  if (imagenesActuales.length === 0) return;

  indiceActual--;

  if (indiceActual < 0) {
    indiceActual = imagenesActuales.length - 1;
  }

  document.getElementById("imagen-ficha-actual").src =
    imagenesActuales[indiceActual];
}

// Función puente para conectar el menú principal superior con el nuevo Dashboard
function cargarSituacionRegional(municipio) {
  // 1. Abrimos el módulo de situación
  if (typeof openModule === "function") {
    openModule("situacion");
  }

  // 2. Disparamos la función que muestra la imagen de la ficha
  setTimeout(() => {
    mostrarFichaImagen(municipio);

    // Hacemos scroll hacia arriba por si la página quedó movida
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, 50);
}

// Variable global para guardar los marcadores y poder abrirlos desde las tarjetas
let marcadoresOfertaActivos = {};

// Al inicio del archivo, junto a las de Oriente
// ==========================================
// MINI VISUALIZADOR OFERTA
// ==========================================
// Variables únicas para el mapa reutilizable
let mapaRegional = null;
let capaMunicipiosActiva = null;
let marcadoresActivos = L.layerGroup();
let capasTematicas = {};
let regionActual = "oriente";
let capasYaCargadas = false;

const norm = (str) =>
  str
    ? str
        .toString()
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .trim()
    : "";
// ==========================================
// FUNCIÓN PARA GENERAR EL MENÚ DESPLEGABLE DEL SUR
// ==========================================
function generarMenuRegional(region) {
  // Este ID es el que pusimos en el paso anterior en el index.html
  const menu = document.getElementById("menu-oferta-dinamico");
  if (!menu) return;
  menu.innerHTML = "";

  // Seleccionamos automáticamente los datos correctos
  const datos = region === "sur" ? ofertaSur : ofertaOriente;

  const agrupado = {};
  datos.forEach((item) => {
    if (!agrupado[item.area]) agrupado[item.area] = {};
    if (!agrupado[item.area][item.space]) agrupado[item.area][item.space] = [];
    agrupado[item.area][item.space].push(...item.carreras);
  });

  Object.keys(agrupado).forEach((area) => {
    const areaLi = document.createElement("li");

    areaLi.className = "area-btn";
    areaLi.dataset.area = area;

    areaLi.innerHTML = `
  <span class="situacion-menu-title">
    ${area}
  </span>
`;

    const municipiosUl = document.createElement("ul");
    municipiosUl.className = "menu-municipios";

    Object.keys(agrupado[area]).forEach((municipio) => {
      const municipioLi = document.createElement("li");
      municipioLi.className = "menu-municipio";
      municipioLi.innerHTML = `<span class="menu-municipio-title">${municipio}</span>`;

      const carrerasUl = document.createElement("ul");
      carrerasUl.className = "menu-carreras";

      agrupado[area][municipio].forEach((carrera) => {
        const carreraLi = document.createElement("li");
        carreraLi.textContent = carrera;
        carrerasUl.appendChild(carreraLi);
      });

      municipioLi.appendChild(carrerasUl);
      municipiosUl.appendChild(municipioLi);
    });

    areaLi.appendChild(municipiosUl);
    menu.appendChild(areaLi);
  });
}

// =====================================================
// FUNCIÓN PRINCIPAL DE MAPA REGIONAL (REFACORIZADA)
// =====================================================
function cargarMapaRegion(region) {
  // 1. Abrir la sección única y cambiar el título
  if (typeof openModule === "function") openModule("oferta-regional");

  const titulo = document.getElementById("titulo-oferta");
  if (titulo) {
    titulo.innerText = `Capacidades Estratégicas Regionales (Oferta Educativa - ${region === "sur" ? "Sur" : "Oriente"})`;
  }

  // ¡CLAVE! Actualizamos la región global SIEMPRE que entramos
  regionActual = region;

  // =================================================================
  // A. INICIALIZACIÓN (SOLO SE EJECUTA LA PRIMERA VEZ QUE ENTRAS)
  // =================================================================
  if (!mapaRegional) {
    mapaRegional = L.map("mapa-reutilizable", { zoomControl: false }).setView(
      [19.2, -99.3],
      9,
    );
    L.control.zoom({ position: "topright" }).addTo(mapaRegional);

    /* --- BOTÓN RESET --- */
    const resetControl = L.control({ position: "topright" });
    resetControl.onAdd = function () {
      const div = L.DomUtil.create("div", "leaflet-bar leaflet-control");
      div.innerHTML = `<a href="#" title="Restablecer mapa" style="font-size:18px; width:34px; height:34px; line-height:34px; text-align:center; display:block; text-decoration:none; color:#134a2c; font-weight:bold;">⟳</a>`;
      div.onclick = function (e) {
        e.preventDefault();
        const centro =
          regionActual === "sur" ? [19.15, -99.7] : [19.35, -98.95];
        const zoom = regionActual === "sur" ? 9 : 10;
        mapaRegional.setView(centro, zoom);
      };
      return div;
    };
    resetControl.addTo(mapaRegional);

    /* --- LEYENDA REGIONAL --- */
    var leyendaRegional = L.control({ position: "bottomright" });
    leyendaRegional.onAdd = function () {
      var div = L.DomUtil.create("div", "legend");
      div.innerHTML = "<h4>Selecciona una capa</h4>";
      return div;
    };
    leyendaRegional.addTo(mapaRegional);

    // Agregamos el grupo de marcadores al mapa
    marcadoresActivos.addTo(mapaRegional);

    /* --- FONDO GRIS DEL ESTADO (SE DIBUJA SOLO UNA VEZ) --- */
    L.geoJSON(datosMunicipios, {
      style: {
        fillColor: "#d9d9d9",
        weight: 1,
        color: "#ffffff",
        fillOpacity: 0.55,
      },
      interactive: false,
    }).addTo(mapaRegional);

    /* --- CAPAS TEMÁTICAS (Pobreza, Salud, etc.) --- */
    const configCapas = {
      Pobreza: { prop: "porcentaje_2", url: "pobreza" },
      "Rezago educativo": { prop: "porcentaje", url: "rezago_educativo" },
      "Carencia salud": { prop: "porcentaje", url: "carencia_salud" },
      "Carencia alimentación": { prop: "2020", url: "carencia_alimentacion" },
      "Carencia vivienda": { prop: "poblacion", url: "carencia_vivienda" },
      "Servicios básicos": { prop: "porcentaje", url: "servicios_basicos" },
    };

    if (!capasYaCargadas) {
      const overlaysValidos = {};

      Object.keys(configCapas).forEach((nom) => {
        const grupo = L.layerGroup();

        fetch(`http://localhost:5000/api/${configCapas[nom].url}`)
          .then((r) => {
            if (!r.ok) {
              throw new Error(`Error HTTP: ${r.status}`);
            }

            return r.json();
          })

          .then((data) => {
            // Validar GeoJSON
            if (!data || !data.features || data.features.length === 0) {
              console.warn(`Capa vacía: ${nom}`);
              return;
            }

            L.geoJSON(data, {
              style: (f) => ({
                fillColor:
                  typeof getColor === "function"
                    ? getColor(f.properties[configCapas[nom].prop], nom)
                    : "#d7c986",

                weight: 1.5,
                color: "white",
                fillOpacity: 0.7,
              }),

              onEachFeature: (f, l) => {
                let val = f.properties[configCapas[nom].prop];

                let txt =
                  nom === "Carencia vivienda"
                    ? `${Number(val).toLocaleString()} personas`
                    : `${Number(val).toFixed(2)}%`;

                const nombreMunicipio =
                  f.properties.NOMGEO || f.properties.nomgeo || "Municipio";

                l.bindTooltip(`<b>${nombreMunicipio}</b><br>${txt} de ${nom}`, {
                  sticky: true,
                });
              },
            }).addTo(grupo);

            overlaysValidos[nom] = grupo;
          })

          .catch((err) => {
            console.error(`Error cargando capa ${nom}:`, err);
          });
      });

      // Esperar un poco para asegurar que cargaron
      setTimeout(() => {
        L.control
          .layers(overlaysValidos, null, {
            collapsed: false,
            position: "topright",
          })
          .addTo(mapaRegional);
      }, 1000);

      capasYaCargadas = true;
    }
  }

  // =================================================================
  // B. ACTUALIZACIÓN DE DATOS (SE EJECUTA SIEMPRE QUE CAMBIAS DE REGIÓN)
  // =================================================================

  // 1. Limpiamos los pines y polígonos resaltados de la región anterior
  marcadoresActivos.clearLayers();
  if (capaMunicipiosActiva) {
    mapaRegional.removeLayer(capaMunicipiosActiva);
  }

  // 2. Definimos qué datos usar dependiendo de si es "sur" u "oriente"
  const config = {
    municipios:
      region === "sur"
        ? ["Atlacomulco", "Tenancingo", "Temascaltepec", "Tianguistenco"]
        : [
            "Amecameca",
            "Texcoco",
            "Valle de Chalco Solidaridad",
            "Nezahualcóyotl",
            "Chimalhuacán",
          ],
    centro: region === "sur" ? [19.15, -99.7] : [19.35, -98.95],
    zoom: region === "sur" ? 9 : 10,
    sedes: region === "sur" ? sedesSur : sedesOriente,
    oferta: region === "sur" ? ofertaSur : ofertaOriente,
  };

  // 3. Movemos la cámara a la nueva región
  mapaRegional.flyTo(config.centro, config.zoom);
  const listaNorm = config.municipios.map((m) => norm(m));

  // 4. Dibujamos SOLO los municipios de la nueva región (Capa superior oscura)
  capaMunicipiosActiva = L.geoJSON(datosMunicipios, {
    style: function (feature) {
      const esSeleccionado = listaNorm.includes(
        norm(feature.properties.NOMGEO),
      );

      return {
        fillColor: esSeleccionado ? "#848482" : "transparent",
        weight: esSeleccionado ? 2 : 0,
        color: esSeleccionado ? "white" : "transparent",
        fillOpacity: esSeleccionado ? 0.9 : 0,
      };
    },

    onEachFeature: function (feature, layer) {
      layer.defaultStyle = {
        fillColor: "#848482",
        fillOpacity: 0.9,
        color: "white",
        weight: 2,
      };
    },
  }).addTo(mapaRegional);
  // 5. Agregamos los nuevos marcadores (pines)
  config.oferta.forEach((item) => {
    const sede = config.sedes.find((s) => s.space === item.space);
    if (sede) {
      L.marker(sede.loc)
        .bindPopup(`<b>${sede.name}</b><br>${item.area}`)
        .addTo(marcadoresActivos);
    }
  });

  // 6. Regeneramos el menú dinámico superior (Salud, Derecho, etc.) para la nueva región
  generarMenuRegional(region);

  // EVENTOS PARA RESALTAR MUNICIPIOS
  setTimeout(() => {
    document.querySelectorAll(".area-btn").forEach((btn) => {
      // CUANDO PASAS EL CURSOR
      btn.addEventListener("mouseenter", () => {
        const areaSeleccionada = btn.dataset.area;

        resaltarMunicipiosPorArea(areaSeleccionada);
      });

      // CUANDO SALES DEL CURSOR
      btn.addEventListener("mouseleave", () => {
        if (window.capaHighlightArea) {
          mapaRegional.removeLayer(window.capaHighlightArea);
        }
      });
    });
  }, 100);

  // =====================================================
  // RESALTAR MUNICIPIOS SEGÚN ÁREA
  // =====================================================
  function resaltarMunicipiosPorArea(areaSeleccionada) {
    const datos = regionActual === "sur" ? ofertaSur : ofertaOriente;

    // Sacamos municipios que pertenecen al área
    const municipiosArea = datos
      .filter((item) => item.area === areaSeleccionada)
      .map((item) => norm(item.space));

    // Quitamos capa anterior
    if (window.capaHighlightArea) {
      mapaRegional.removeLayer(window.capaHighlightArea);
    }

    // Creamos nueva capa resaltada
    window.capaHighlightArea = L.geoJSON(datosMunicipios, {
      style: (feature) => {
        const nombre = norm(feature.properties.NOMGEO);

        const activo = municipiosArea.includes(nombre);

        return {
          fillColor: activo ? "#0f766e" : "transparent",
          fillOpacity: activo ? 0.85 : 0,
          color: activo ? "#ffffff" : "transparent",
          weight: activo ? 2 : 0,
        };
      },
    }).addTo(mapaRegional);
  }

  console.log(municipiosArea);

  // 7. Despertamos el mapa para evitar errores gráficos
  setTimeout(() => {
    if (mapaRegional) {
      mapaRegional.invalidateSize();
    }
  }, 500);
}
