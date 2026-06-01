// ==========================================
// 1. SEDES Y OFERTA: REGIÓN ORIENTE
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

const ofertaOriente = [
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

// ==========================================
// 2. SEDES Y OFERTA: REGIÓN SUR
// ==========================================
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

const ofertaSur = [
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

// ==========================================
// 3. SEDES Y OFERTA: REGIÓN VALLE DE MÉXICO
// ==========================================
const sedesValle = [
  {
    name: "C.U. UAEM Ecatepec",
    loc: [19.59825641434787, -99.05715935696747],
    space: "Ecatepec",
  },
  {
    name: "C.U. UAEM Valle de México",
    loc: [19.585648329455754, -99.28348130673135],
    space: "Valle de México",
  },
  {
    name: "C.U. UAEM Valle de Teotihuacán",
    loc: [19.771938954867665, -98.77464574716551],
    space: "Teotihuacán",
  },
  {
    name: "C.U. UAEM Zumpango",
    loc: [19.82819043618442, -99.0768755932464],
    space: "Zumpango",
  },
  {
    name: "UAP Acolman",
    loc: [19.651235596047727, -98.9327418067499],
    space: "Acolman",
  },
  {
    name: "UAP Cuautitlán Izcalli",
    loc: [19.6438868955785, -99.21388654907307],
    space: "Cuautitlán",
  },
  {
    name: "UAP Huehuetoca",
    loc: [19.850588234573205, -99.21659589691937],
    space: "Huehuetoca",
  },
  {
    name: "UAP Tlalnepantla",
    loc: [19.530441634596414, -99.0898267760406],
    space: "Tlalnepantla",
  },
];

const ofertaValle = [
  {
    area: "Ciencias Sociales y Administrativas",
    space: "Ecatepec",
    carreras: [
      "Lic. en Informática administrativa",
      "Lic. en Psicología",
      "Lic. en Administración",
      "Lic. en Contaduría",
      "Lic. en Derecho",
    ],
  },
  {
    area: "Ciencias Sociales y Administrativas",
    space: "Valle de México",
    carreras: [
      "Lic. en Informática administrativa",
      "Lic. en Economía",
      "Lic. en Administración",
      "Lic. en Contaduría",
      "Lic. en Relaciones Económicas Internacionales",
      "Lic. en Derecho",
    ],
  },
  {
    area: "Ciencias Sociales y Administrativas",
    space: "Teotihuacán",
    carreras: [
      "Lic. en Contaduría",
      "Lic. en Derecho",
      "Lic. en Informática Administrativa Financiera",
      "Lic. en Psicología",
      "Lic. en Turismo",
      "Lic. en Ciencias Políticas y Administrativas",
    ],
  },
  {
    area: "Ciencias Sociales y Administrativas",
    space: "Zumpango",
    carreras: [
      "Lic. en Administración",
      "Lic. en Contaduría",
      "Lic. en Ciencias Políticas y Administración Pública",
      "Lic. en Derecho",
      "Lic. en Psicología",
      "Lic. en Turismo",
    ],
  },
  {
    area: "Ciencias Sociales y Administrativas",
    space: "Acolman",
    carreras: ["Lic. en Mercadotecnia"],
  },
  {
    area: "Ciencias Sociales y Administrativas",
    space: "Cuautitlán",
    carreras: [
      "Lic. en Derecho Internacional",
      "Lic. en Negocios Internacionales",
    ],
  },
  {
    area: "Ciencias Sociales y Administrativas",
    space: "Huehuetoca",
    carreras: ["Lic. en Comunicación", "Lic. en Trabajo Social"],
  },
  {
    area: "Ciencias Sociales y Administrativas",
    space: "Tlalnepantla",
    carreras: [
      "Lic. en Administración",
      "Lic. en Medios Alternos de Solución de Conflictos",
      "Lic. en Negocios Internacionales Bilingüe",
    ],
  },
  {
    area: "Ingeniería y Tecnología",
    space: "Ecatepec",
    carreras: ["Ing. en Computación"],
  },
  {
    area: "Ingeniería y Tecnología",
    space: "Valle de México",
    carreras: [
      "Ing. en Computación",
      "Ing. en Sistemas y Comunicaciones",
      "Ing. Industrial",
      "Ing. Informática administrativa a distancia",
    ],
  },
  {
    area: "Ingeniería y Tecnología",
    space: "Teotihuacán",
    carreras: ["Lic. de Ingeniería en Computación"],
  },
  {
    area: "Ingeniería y Tecnología",
    space: "Zumpango",
    carreras: ["Ing. en Computación", "Ing. Agrónomo en Producción"],
  },
  {
    area: "Ingeniería y Tecnología",
    space: "Acolman",
    carreras: ["Ing. Química", "Ing. en Producción Industrial"],
  },
  {
    area: "Ingeniería y Tecnología",
    space: "Cuautitlán",
    carreras: ["Lic. en Loguística"],
  },
  {
    area: "Ingeniería y Tecnología",
    space: "Tlalnepantla",
    carreras: ["Lic. en Loguística"],
  },
  {
    area: "Ciencias Naturales y Exactas",
    space: "Valle de México",
    carreras: ["Lic. en Actuaría"],
  },
  {
    area: "Ciencias Naturales y Exactas",
    space: "Cuautitlán",
    carreras: ["Lic. en Actuaría"],
  },
  {
    area: "Ciencias Naturales y Exactas",
    space: "Huehuetoca",
    carreras: ["Lic. en Actuaría"],
  },
  {
    area: "Educación y Humanidades",
    space: "Zumpango",
    carreras: ["Lic. en Diseño Industrial"],
  },
  {
    area: "Educación y Humanidades",
    space: "Huehuetoca",
    carreras: ["Lic. en Educación", "Lic. en Lenguas Modernas"],
  },
  {
    area: "Ciencias de la Salud",
    space: "Zumpango",
    carreras: ["Lic. en Enfermería"],
  },
  {
    area: "Ciencias de la Salud",
    space: "Acolman",
    carreras: ["Lic. en Nutrición"],
  },
  {
    area: "Ciencias de la Salud",
    space: "Huehuetoca",
    carreras: ["Lic. en Cirujano Dentista"],
  },
];

// =====================================================
// LÓGICA DE CARRETE (SITUACIÓN REGIONAL)
// =====================================================
const fichasMunicipios = {
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
  ixtapandelasal: [
    "img/Imagenes_ficahas/Ixtapan_sal/10.png",
    "img/Imagenes_ficahas/10.png",
  ],
  tejupilco: [
    "img/Imagenes_ficahas/Tejupilco/9.png",
    "img/Imagenes_ficahas/10.png",
  ],
  ecatepec: [
    "img/Imagenes_ficahas/region_valle/14.png",
    "img/Imagenes_ficahas/10.png",
  ],
  huehuetoca: [
    "img/Imagenes_ficahas/region_valle/15.png",
    "img/Imagenes_ficahas/10.png",
  ],
  acolman: [
    "img/Imagenes_ficahas/region_valle/16.png",
    "img/Imagenes_ficahas/10.png",
  ],
  teotihuacan: [
    "img/Imagenes_ficahas/region_valle/17.png",
    "img/Imagenes_ficahas/10.png",
  ],
  zumpango: [
    "img/Imagenes_ficahas/region_valle/18.png",
    "img/Imagenes_ficahas/10.png",
  ],
  cuautitlan: [
    "img/Imagenes_ficahas/region_valle/19.png",
    "img/Imagenes_ficahas/10.png",
  ],
  atizapan: [
    "img/Imagenes_ficahas/region_valle/20.png",
    "img/Imagenes_ficahas/10.png",
  ],
};

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
        "Ixtapan de la Sal",
        "Tejupilco",
      ],
    },
  ],
  valle_mexico: [
    {
      categoria: "Municipios",
      municipios: [
        "Ecatepec",
        "Huehuetoca",
        "Acolman",
        "Teotihucán",
        "Zumpango",
        "Cuautitlán",
        "Atizapán",
      ],
    },
  ],
};

let indiceActual = 0;
let imagenesActuales = [];
let capasRegionalesGuardadas = {};

function mostrarFichaImagen(municipio) {
  const munKey = municipio
    .toLowerCase()
    .normalize("NFD")
    .replace(/\s+/g, "")
    .replace(/[\u0300-\u036f]/g, "");
  imagenesActuales = fichasMunicipios[munKey] || [];
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
  if (indiceActual >= imagenesActuales.length) indiceActual = 0;
  document.getElementById("imagen-ficha-actual").src =
    imagenesActuales[indiceActual];
}

function anteriorFicha() {
  if (imagenesActuales.length === 0) return;
  indiceActual--;
  if (indiceActual < 0) indiceActual = imagenesActuales.length - 1;
  document.getElementById("imagen-ficha-actual").src =
    imagenesActuales[indiceActual];
}

function cargarSituacionRegional(municipio) {
  if (typeof openModule === "function") openModule("situacion");
  setTimeout(() => {
    mostrarFichaImagen(municipio);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, 50);
}

// ==========================================
// VARIABLES GLOBALES MAPA
// ==========================================
let marcadoresOfertaActivos = {};
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
// GENERADOR MENÚ DINÁMICO
// ==========================================
function generarMenuRegional(region) {
  const menu = document.getElementById("menu-oferta-dinamico");
  if (!menu) return;
  menu.innerHTML = "";

  let datos;
  if (region === "sur") {
    datos = ofertaSur;
  } else if (region === "valle") {
    datos = ofertaValle;
  } else {
    datos = ofertaOriente;
  }

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
    areaLi.innerHTML = `<span class="situacion-menu-title">${area}</span>`;

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
// FUNCIÓN PRINCIPAL DE MAPA REGIONAL
// =====================================================
function cargarMapaRegion(region) {
  if (typeof openModule === "function") openModule("oferta-regional");

  // 1. RUTINA DE LIMPIEZA Y AJUSTE AL ENTRAR
  if (mapaRegional) {
    // Apagamos las capas si alguna se quedó encendida
    for (let nom in capasRegionalesGuardadas) {
      if (mapaRegional.hasLayer(capasRegionalesGuardadas[nom])) {
        mapaRegional.removeLayer(capasRegionalesGuardadas[nom]);
      }
    }

    // Activamos la opción "Sin capa" por defecto para reiniciar los botones
    if (capasRegionalesGuardadas["🗺️ Sin capa temática"]) {
      mapaRegional.addLayer(capasRegionalesGuardadas["🗺️ Sin capa temática"]);
    }

    // Restauramos la leyenda a su estado original
    let leyendaDiv = document.querySelector("#mapa-reutilizable .legend");
    if (leyendaDiv) {
      leyendaDiv.innerHTML = "<h4>Selecciona una capa</h4>";
    }

    // Forzamos el tamaño para evitar la pantalla gris
    mapaRegional.invalidateSize();
  }

  let nombreRegion =
    region === "sur"
      ? "Sur"
      : region === "valle"
        ? "Valle de México"
        : "Oriente";
  const titulo = document.getElementById("titulo-oferta");
  if (titulo) {
    titulo.innerText = `Capacidades Estratégicas Regionales (Oferta Educativa - ${nombreRegion})`;
  }

  regionActual = region;

  // --- A. INICIALIZACIÓN ---
  if (!mapaRegional) {
    mapaRegional = L.map("mapa-reutilizable", { zoomControl: false }).setView(
      [19.2, -99.3],
      9,
    );
    L.control.zoom({ position: "topright" }).addTo(mapaRegional);

    const resetControl = L.control({ position: "topright" });
    resetControl.onAdd = function () {
      const div = L.DomUtil.create("div", "leaflet-bar leaflet-control");
      div.innerHTML = `<a href="#" title="Restablecer mapa" style="font-size:18px; width:34px; height:34px; line-height:34px; text-align:center; display:block; text-decoration:none; color:#134a2c; font-weight:bold;">⟳</a>`;
      div.onclick = function (e) {
        e.preventDefault();
        let centro, zoom;
        if (regionActual === "sur") {
          centro = [19.15, -99.7];
          zoom = 9;
        } else if (regionActual === "valle") {
          centro = [19.65, -99.1];
          zoom = 10;
        } else {
          centro = [19.35, -98.95];
          zoom = 10;
        }
        mapaRegional.setView(centro, zoom);
      };
      return div;
    };
    resetControl.addTo(mapaRegional);

    var leyendaRegional = L.control({ position: "bottomright" });
    leyendaRegional.onAdd = function () {
      var div = L.DomUtil.create("div", "legend");
      div.innerHTML = "<h4>Selecciona una capa</h4>";
      return div;
    };
    leyendaRegional.addTo(mapaRegional);

    marcadoresActivos.addTo(mapaRegional);

    L.geoJSON(datosMunicipios, {
      style: {
        fillColor: "#d9d9d9",
        weight: 1,
        color: "#ffffff",
        fillOpacity: 0.55,
      },
      interactive: false,
    }).addTo(mapaRegional);

    const configCapas = {
      Pobreza: { prop: "porcentaje_2", url: "pobreza" },
      "Rezago educativo": { prop: "porcentaje", url: "rezago_educativo" },
      "Carencia salud": { prop: "porcentaje", url: "carencia_salud" },
      "Carencia alimentación": { prop: "2020", url: "carencia_alimentacion" },
      "Carencia vivienda": { prop: "poblacion", url: "carencia_vivienda" },
      "Servicios básicos": { prop: "porcentaje", url: "servicios_basicos" },
    };

    if (!capasYaCargadas) {
      // 🔥 NUEVO: Agregamos una capa vacía para poder "apagar" el mapa
      capasRegionalesGuardadas["🗺️ Sin capa temática"] = L.layerGroup();

      Object.keys(configCapas).forEach((nom) => {
        capasRegionalesGuardadas[nom] = L.layerGroup();
        capasRegionalesGuardadas[nom].urlDeDatos =
          `http://localhost:5000/api/${configCapas[nom].url}`;
        capasRegionalesGuardadas[nom].propiedadValor = configCapas[nom].prop;
        capasRegionalesGuardadas[nom].datosYaCargados = false;
      });

      L.control
        .layers(capasRegionalesGuardadas, null, {
          collapsed: false,
          position: "topright",
        })
        .addTo(mapaRegional);

      // Evento para descargar los datos SÓLO cuando se seleccionen
      mapaRegional.on("baselayerchange", function (e) {
        let grupoSeleccionado = e.layer;
        let nombreCapa = e.name;
        let leyendaDiv = document.querySelector("#mapa-reutilizable .legend");

        // Si eligen apagar la capa, limpiamos la leyenda y detenemos el proceso
        if (nombreCapa === "🗺️ Sin capa temática") {
          if (leyendaDiv) leyendaDiv.innerHTML = "<h4>Selecciona una capa</h4>";
          return;
        }

        // Si es una capa normal, actualizamos la leyenda
        if (leyendaDiv) {
          leyendaDiv.innerHTML = `
            <h4>${nombreCapa}</h4>
            <div class="legend-row">
              <i style="background: #132d1e"></i> <span>Alto</span>
            </div>
            <div class="legend-row">
              <i style="background: #6d8f75"></i> <span>Medio</span>
            </div>
            <div class="legend-row">
              <i style="background: #b8c9b0"></i> <span>Bajo</span>
            </div>
          `;
        }

        // Petición a la base de datos (Lazy Loading)
        if (
          grupoSeleccionado.urlDeDatos &&
          !grupoSeleccionado.datosYaCargados
        ) {
          fetch(grupoSeleccionado.urlDeDatos)
            .then((r) => (r.ok ? r.json() : null))
            .then((data) => {
              if (!data) return;

              L.geoJSON(data, {
                style: (f) => ({
                  fillColor:
                    typeof getColor === "function"
                      ? getColor(
                          f.properties[grupoSeleccionado.propiedadValor],
                          nombreCapa,
                        )
                      : "#d7c986",
                  weight: 1.5,
                  color: "white",
                  fillOpacity: 0.7,
                }),
                onEachFeature: (f, l) => {
                  let val = f.properties[grupoSeleccionado.propiedadValor];
                  let txt =
                    nombreCapa === "Carencia vivienda"
                      ? `${Number(val).toLocaleString()} personas`
                      : `${Number(val).toFixed(2)}%`;
                  const nombreMunicipio =
                    f.properties.NOMGEO || f.properties.nomgeo || "Municipio";
                  l.bindTooltip(
                    `<b>${nombreMunicipio}</b><br>${txt} de ${nombreCapa}`,
                    { sticky: true },
                  );
                },
              }).addTo(grupoSeleccionado);

              grupoSeleccionado.datosYaCargados = true;
            })
            .catch((err) => console.error("Error al obtener la capa:", err));
        }
      });

      capasYaCargadas = true;
    }
  }

  // --- B. ACTUALIZACIÓN E INTERACTIVIDAD ---
  marcadoresActivos.clearLayers();
  if (capaMunicipiosActiva) mapaRegional.removeLayer(capaMunicipiosActiva);

  let config = {};
  if (region === "sur") {
    config = {
      municipios: [
        "Atlacomulco",
        "Tenancingo",
        "Temascaltepec",
        "Tianguistenco",
      ],
      centro: [19.15, -99.7],
      zoom: 9,
      sedes: sedesSur,
      oferta: ofertaSur,
    };
  } else if (region === "valle") {
    config = {
      municipios: [
        "Ecatepec",
        "Atizapán",
        "Teotihuacán",
        "Axapusco",
        "Zumpango",
        "Acolman",
        "Cuautitlán",
        "Huehuetoca",
        "Tlalnepantla",
      ],
      centro: [19.65, -99.1],
      zoom: 10,
      sedes: sedesValle,
      oferta: ofertaValle,
    };
  } else {
    config = {
      municipios: [
        "Amecameca",
        "Texcoco",
        "Valle de Chalco Solidaridad",
        "Nezahualcóyotl",
        "Chimalhuacán",
      ],
      centro: [19.35, -98.95],
      zoom: 10,
      sedes: sedesOriente,
      oferta: ofertaOriente,
    };
  }

  mapaRegional.flyTo(config.centro, config.zoom);

  capaMunicipiosActiva = L.geoJSON(datosMunicipios, {
    style: function (feature) {
      const geoNorm = norm(
        feature.properties.NOMGEO || feature.properties.nomgeo,
      );
      const esSeleccionado = config.municipios.some((m) =>
        geoNorm.includes(norm(m)),
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

  const sedesYaDibujadas = new Set();
  config.oferta.forEach((item) => {
    const sede = config.sedes.find((s) => s.space === item.space);
    if (sede && !sedesYaDibujadas.has(sede.name)) {
      sedesYaDibujadas.add(sede.name);
      L.marker(sede.loc)
        .bindPopup(`<b>${sede.name}</b>`)
        .addTo(marcadoresActivos);
    }
  });

  generarMenuRegional(region);

  setTimeout(() => {
    document.querySelectorAll(".area-btn").forEach((btn) => {
      btn.addEventListener("mouseenter", () => {
        resaltarMunicipiosPorArea(btn.dataset.area);
      });
      btn.addEventListener("mouseleave", () => {
        if (window.capaHighlightArea)
          mapaRegional.removeLayer(window.capaHighlightArea);
      });
    });
  }, 100);

  function resaltarMunicipiosPorArea(areaSeleccionada) {
    let datos =
      regionActual === "sur"
        ? ofertaSur
        : regionActual === "valle"
          ? ofertaValle
          : ofertaOriente;
    const municipiosArea = datos
      .filter((item) => item.area === areaSeleccionada)
      .map((item) => norm(item.space));

    if (window.capaHighlightArea)
      mapaRegional.removeLayer(window.capaHighlightArea);

    const mapeoValleGeo = {
      ecatepec: ["ecatepec"],
      "valle de mexico": ["atizapan"],
      teotihuacan: ["teotihuacan", "axapusco"],
      zumpango: ["zumpango"],
      acolman: ["acolman"],
      cuautitlan: ["cuautitlan"],
      huehuetoca: ["huehuetoca"],
      tlalnepantla: ["tlalnepantla"],
    };

    window.capaHighlightArea = L.geoJSON(datosMunicipios, {
      style: (feature) => {
        const geoNorm = norm(
          feature.properties.NOMGEO || feature.properties.nomgeo,
        );
        let activo = false;
        if (regionActual === "valle") {
          activo = municipiosArea.some((spaceNorm) => {
            const palabrasClave = mapeoValleGeo[spaceNorm] || [spaceNorm];
            return palabrasClave.some((palabra) => geoNorm.includes(palabra));
          });
        } else {
          activo = municipiosArea.some((spaceNorm) =>
            geoNorm.includes(spaceNorm),
          );
        }

        return {
          fillColor: activo ? "#0f766e" : "transparent",
          fillOpacity: activo ? 0.85 : 0,
          color: activo ? "#ffffff" : "transparent",
          weight: activo ? 2 : 0,
        };
      },
    }).addTo(mapaRegional);
  }

  // Dejamos un resguardo secundario del tamaño por si las animaciones tardan
  setTimeout(() => {
    if (mapaRegional) mapaRegional.invalidateSize();
  }, 500);
}
