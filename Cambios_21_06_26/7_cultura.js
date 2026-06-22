// ============================================================
// 7_cultura.js
// EQUIPAMIENTO PARA LA CULTURA
// ============================================================

// ============================================================
// 1. DATOS DE EQUIPAMIENTO CULTURAL
// ============================================================

const espaciosCultura = [
  // ================= MUSEOS =================
  {
    categoria: "Museo",
    nombre: 'Museo Universitario "Dr. Luis Mario Schneider"',
    ciudad: "Malinalco",
    direccion: "Amajac esq. Agustín Melgar, Barrio Santa Mónica, Malinalco",
    loc: [18.95111, -99.50115],
  },
  {
    categoria: "Museo",
    nombre: 'Museo de Historia Universitaria "José María Morelos y Pavón"',
    ciudad: "Toluca",
    direccion: "Edificio Central de Rectoría, Instituto Literario 100, Centro",
    loc: [19.285789, -99.653996],
  },
  {
    categoria: "Museo",
    nombre: 'Museo Universitario de Historia Natural "Dr. Manuel M. Villada"',
    ciudad: "Toluca",
    direccion: "Edificio Central de Rectoría, Instituto Literario 100, Centro",
    loc: [19.285789, -99.653996],
  },
  {
    categoria: "Museo",
    nombre: 'Museo Universitario "Leopoldo Flores"',
    ciudad: "Toluca",
    direccion: "Cerro de Coatepec, Ciudad Universitaria",
    loc: [19.28651, -99.67818],
  },
  {
    categoria: "Museo",
    nombre: 'Pinacoteca Universitaria "Los Autonomistas"',
    ciudad: "Toluca",
    direccion: "Edificio Central de Rectoría, Instituto Literario 100, Centro",
    loc: [19.285789, -99.653996],
  },

  // ================= TEATROS =================
  {
    categoria: "Teatro",
    nombre: 'Teatro Isabelino "Antonio Hernández Zimbrón"',
    ciudad: "Toluca",
    direccion: "Casa de las Diligencias, Av. Juárez Norte 114, Centro",
    loc: [19.292, -99.65433],
  },
  {
    categoria: "Teatro",
    nombre: 'Teatro Universitario "Los Jaguares"',
    ciudad: "Toluca",
    direccion: "Valentín Gómez Farías 601, Col. La Merced",
    loc: [19.285341, -99.660151],
  },
  {
    categoria: "Teatro",
    nombre: 'Teatro Universitario de Cámara "Esvón Gamaliel"',
    ciudad: "Toluca",
    direccion: "Edificio Central de Rectoría, Instituto Literario 100, Centro",
    loc: [19.285789, -99.653996],
  },

  // ================= GALERÍAS =================
  {
    categoria: "Galería",
    nombre: "Galería Délfica",
    ciudad: "Toluca",
    direccion: "Edificio UAEMitas, Leona Vicario 201 esq. Primero de Mayo",
    loc: [19.291098, -99.645881],
  },
  {
    categoria: "Galería",
    nombre: 'Galería Universitaria "Fernando Cano"',
    ciudad: "Toluca",
    direccion: "Edificio Central de Rectoría, Instituto Literario 100, Centro",
    loc: [19.285789, -99.653996],
  },
  {
    categoria: "Galería",
    nombre: "Corredor Cultural Universitario",
    ciudad: "Toluca",
    direccion: "Corredor Matamoros–Jesús Carranza–Paseo Tollocan",
    loc: [19.276, -99.661],
  },

  // ================= CENTROS CULTURALES =================
  {
    categoria: "Centro cultural",
    nombre: "Centro Cultural Universitario Casa de las Diligencias",
    ciudad: "Toluca",
    direccion: "Av. Juárez Norte 114, Centro",
    loc: [19.292, -99.65433],
  },
  {
    categoria: "Centro cultural",
    nombre: "Centro de Actividades Culturales (CeAC)",
    ciudad: "Toluca",
    direccion: "Instituto Literario 211, Centro",
    loc: [19.28627, -99.651877],
  },
  {
    categoria: "Centro cultural",
    nombre: 'Centro Cultural Universitario "Dr. Luis Mario Schneider"',
    ciudad: "Malinalco",
    direccion: "Finca El Olvido, carretera Malinalco–Chalma, Barrio San Juan",
    loc: [18.9477, -99.5047],
  },
  {
    categoria: "Centro cultural",
    nombre: "Casa de Cultura de la UAEMéx en Tlalpan",
    ciudad: "Ciudad de México",
    direccion: "Av. Triunfo de la Libertad 9 Bis, Centro de Tlalpan",
    loc: [19.28649, -99.16781],
  },

  // ================= BIBLIOTECAS =================
  {
    categoria: "Biblioteca",
    nombre: 'Biblioteca Central "Lic. Juan Josafat Pichardo Cruz"',
    ciudad: "Toluca",
    direccion: "Cerro de Coatepec, Ciudad Universitaria",
    loc: [19.28716, -99.67913],
  },
  {
    categoria: "Biblioteca",
    nombre: 'Biblioteca de Área "Dr. Rafael López Castañares"',
    ciudad: "Toluca",
    direccion: "Área de la Salud, Paseo Tollocan esq. Jesús Carranza",
    loc: [19.27221, -99.65894],
  },
  {
    categoria: "Biblioteca",
    nombre: 'Biblioteca de Área "El Cerrillo"',
    ciudad: "Toluca",
    direccion: "Campus El Cerrillo, carretera Toluca–Ixtlahuaca",
    loc: [19.40925, -99.69115],
  },

  // ================= OTROS =================
  {
    categoria: "Otro",
    nombre: "Ágora de Cénide",
    ciudad: "Toluca",
    direccion: "Entorno de la Facultad de Humanidades, Ciudad Universitaria",
    loc: [19.28029, -99.677032],
  },
  {
    categoria: "Otro",
    nombre: 'Observatorio Meteorológico Universitario "Mariano Bárcena"',
    ciudad: "Toluca",
    direccion: "Edificio Central de Rectoría, Instituto Literario 100, Centro",
    loc: [19.285789, -99.653996],
  },
];

// ============================================================
// 2. CONFIGURACIÓN DE CATEGORÍAS
// ============================================================

const ordenCategoriasCultura = {
  museo: 1,
  teatro: 2,
  galeria: 3,
  centrocultural: 4,
  biblioteca: 5,
  otro: 6,
};

const nombresCategoriasCultura = {
  museo: "Museos",
  teatro: "Teatros",
  galeria: "Galerías",
  centrocultural: "Centros culturales",
  biblioteca: "Bibliotecas",
  otro: "Otros",
};

// ============================================================
// 3. VARIABLES GLOBALES
// ============================================================

let mapCultura = null;
let markersCultura = null;

let filtroCulturaActual = null;

let marcadoresCulturaPorEspacio = new Map();

// ============================================================
// 4. FUNCIONES GENERALES
// ============================================================

function normalizarCultura(texto) {
  return (texto || "")
    .toString()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]/g, "");
}

function obtenerClaveCategoriaCultura(categoria) {
  return normalizarCultura(categoria);
}

function obtenerIdEspacioCultura(espacio) {
  return [
    normalizarCultura(espacio.nombre),
    espacio.loc[0].toFixed(6),
    espacio.loc[1].toFixed(6),
  ].join("-");
}

function obtenerClaveInmuebleCultura(espacio) {
  return `${espacio.loc[0].toFixed(6)},${espacio.loc[1].toFixed(6)}`;
}

// ============================================================
// 5. CONTROL DE FILTROS LATERALES
// ============================================================

function limpiarFiltrosCultura() {
  const modulo = document.getElementById("cultura");

  if (!modulo) return;

  modulo.querySelectorAll(".filter-btn").forEach((boton) => {
    boton.classList.remove("active");
  });

  modulo.querySelectorAll(".filter-count-box").forEach((caja) => {
    caja.remove();
  });
}

function activarFiltroCulturaConConteo(filtroNormalizado, cantidad) {
  limpiarFiltrosCultura();

  const botones = document.querySelectorAll("#cultura .filter-btn");

  const botonActivo = Array.from(botones).find((boton) => {
    return normalizarCultura(boton.dataset.filtro) === filtroNormalizado;
  });

  if (!botonActivo) return;

  botonActivo.classList.add("active");

  const cajaCantidad = document.createElement("div");

  cajaCantidad.className = "filter-count-box";
  cajaCantidad.innerHTML = `
    Total de espacios: <strong>${cantidad}</strong>
  `;

  botonActivo.insertAdjacentElement("afterend", cajaCantidad);
}

// ============================================================
// 6. INICIALIZAR MAPA
// ============================================================

function initMapaCultura() {
  const contenedor = document.getElementById("map-cultura");

  if (!contenedor) {
    console.error("No se encontró el contenedor #map-cultura.");
    return;
  }

  if (!mapCultura) {
    mapCultura = L.map("map-cultura", {
      zoomControl: false,
      minZoom: 7,
      maxZoom: 18,
    }).setView([19.285, -99.66], 11);

    L.tileLayer(
      "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
      {
        attribution: "&copy; OpenStreetMap contributors &copy; CARTO",
        maxZoom: 20,
      },
    ).addTo(mapCultura);

    L.control
      .zoom({
        position: "topleft",
      })
      .addTo(mapCultura);

    markersCultura = L.featureGroup().addTo(mapCultura);
  }

  const buscador = document.getElementById("search-cultura");

  if (buscador) {
    buscador.value = "";
  }

  /*
   * Al abrir el módulo:
   * - No hay filtro activo.
   * - Aparecen todos los marcadores.
   * - Aparecen todos los resultados.
   */
  filtroCulturaActual = null;

  limpiarFiltrosCultura();
  actualizarCultura();

  setTimeout(() => {
    mapCultura.invalidateSize();

    ajustarVistaMapaCultura();
  }, 200);
}

// ============================================================
// 7. SELECCIÓN DE FILTROS
// ============================================================

function seleccionarFiltroCultura(filtro) {
  const filtroNormalizado = normalizarCultura(filtro);

  /*
   * Si se presiona nuevamente el filtro activo,
   * se desactiva y vuelven a aparecer todos.
   */
  if (filtroCulturaActual === filtroNormalizado) {
    filtroCulturaActual = null;

    limpiarFiltrosCultura();
    actualizarCultura();

    return;
  }

  filtroCulturaActual = filtroNormalizado;

  const buscador = document.getElementById("search-cultura");

  if (buscador) {
    buscador.value = "";
  }

  const cantidad = espaciosCultura.filter((espacio) => {
    return (
      obtenerClaveCategoriaCultura(espacio.categoria) === filtroCulturaActual
    );
  }).length;

  activarFiltroCulturaConConteo(filtroCulturaActual, cantidad);

  actualizarCultura();
}

function buscarCultura() {
  actualizarCultura();
}

// ============================================================
// 8. FILTRAR DATOS
// ============================================================

function obtenerResultadosCultura() {
  const buscador = document.getElementById("search-cultura");

  const textoBusqueda = normalizarCultura(buscador?.value);

  const resultados = espaciosCultura.filter((espacio) => {
    const categoria = obtenerClaveCategoriaCultura(espacio.categoria);

    const coincideFiltro =
      !filtroCulturaActual || categoria === filtroCulturaActual;

    const contenidoBusqueda = normalizarCultura(
      [
        espacio.nombre,
        espacio.categoria,
        espacio.ciudad,
        espacio.direccion,
      ].join(" "),
    );

    const coincideBusqueda =
      !textoBusqueda || contenidoBusqueda.includes(textoBusqueda);

    return coincideFiltro && coincideBusqueda;
  });

  return resultados.sort((a, b) => {
    const categoriaA = obtenerClaveCategoriaCultura(a.categoria);

    const categoriaB = obtenerClaveCategoriaCultura(b.categoria);

    const ordenA = ordenCategoriasCultura[categoriaA] || 99;

    const ordenB = ordenCategoriasCultura[categoriaB] || 99;

    if (ordenA !== ordenB) {
      return ordenA - ordenB;
    }

    return a.nombre.localeCompare(b.nombre, "es");
  });
}

// ============================================================
// 9. AGRUPAR ESPACIOS POR INMUEBLE
// ============================================================

function agruparEspaciosCultura(lista) {
  const grupos = new Map();

  lista.forEach((espacio) => {
    const clave = obtenerClaveInmuebleCultura(espacio);

    if (!grupos.has(clave)) {
      grupos.set(clave, []);
    }

    grupos.get(clave).push(espacio);
  });

  return Array.from(grupos.values());
}

// ============================================================
// 10. MARCADOR PARA INMUEBLES CON VARIOS ESPACIOS
// ============================================================
function crearIconoAgrupadoCultura(cantidad) {
  const tamanoTexto = cantidad >= 10 ? 11 : 13;

  return L.divIcon({
    className: "marcador-cultura-agrupado",

    html: `
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="52"
        viewBox="0 0 40 52"
        aria-hidden="true"
      >
        <path
          d="
            M20 1
            C9.5 1 1 9.5 1 20
            C1 33.5 20 51 20 51
            C20 51 39 33.5 39 20
            C39 9.5 30.5 1 20 1
            Z
          "
          fill="#3388c9"
          stroke="#ffffff"
          stroke-width="2"
        />

        <circle
          cx="20"
          cy="20"
          r="12"
          fill="#2877ae"
        />

        <text
          x="20"
          y="24"
          text-anchor="middle"
          fill="#ffffff"
          font-family="Arial, sans-serif"
          font-size="${tamanoTexto}"
          font-weight="700"
        >
          ${cantidad}
        </text>
      </svg>
    `,

    iconSize: [40, 52],
    iconAnchor: [20, 51],
    popupAnchor: [0, -48],
    tooltipAnchor: [0, -45],
  });
}

// ============================================================
// 11. CONTENIDO DEL POPUP
// ============================================================

function crearPopupCultura(grupo) {
  const primerEspacio = grupo[0];

  const espaciosHTML = grupo
    .map((espacio) => {
      return `
        <div class="cultura-popup-item">
          <strong>${espacio.nombre}</strong>
          <span>${espacio.categoria}</span>
        </div>
      `;
    })
    .join("");

  return `
    <div class="cultura-popup">
      <div class="cultura-popup-direccion">
        <strong>${primerEspacio.ciudad}</strong>
        <br>
        ${primerEspacio.direccion}
      </div>

      ${
        grupo.length > 1
          ? `
            <div class="cultura-popup-cantidad">
              ${grupo.length} espacios culturales en este inmueble
            </div>
          `
          : ""
      }

      <div class="cultura-popup-lista">
        ${espaciosHTML}
      </div>
    </div>
  `;
}

// ============================================================
// 12. ACTUALIZAR MAPA Y LISTA
// ============================================================

function actualizarCultura() {
  if (!mapCultura || !markersCultura) return;

  const resultados = obtenerResultadosCultura();

  markersCultura.clearLayers();
  marcadoresCulturaPorEspacio.clear();

  const grupos = agruparEspaciosCultura(resultados);

  grupos.forEach((grupo) => {
    const primerEspacio = grupo[0];
    const cantidad = grupo.length;

    const opcionesMarcador = {
      title:
        cantidad > 1 ? `${cantidad} espacios culturales` : primerEspacio.nombre,
    };

    /*
     * Cuando varios espacios comparten coordenadas,
     * se muestra un marcador con la cantidad.
     *
     * Cuando es un solo espacio, se usa el marcador
     * azul normal de Leaflet.
     */
    if (cantidad > 1) {
      opcionesMarcador.icon = crearIconoAgrupadoCultura(cantidad);
    }

    const marcador = L.marker(primerEspacio.loc, opcionesMarcador);

    marcador.bindPopup(crearPopupCultura(grupo), {
      maxWidth: 380,
      minWidth: 260,
    });

    marcador.bindTooltip(
      cantidad > 1
        ? `${cantidad} espacios en este inmueble`
        : primerEspacio.nombre,
      {
        direction: "top",
        offset: [0, -25],
      },
    );

    marcador.addTo(markersCultura);

    grupo.forEach((espacio) => {
      marcadoresCulturaPorEspacio.set(
        obtenerIdEspacioCultura(espacio),
        marcador,
      );
    });
  });

  mostrarListaCultura(resultados);
  ajustarVistaMapaCultura();
}

// ============================================================
// 13. AJUSTAR VISTA DEL MAPA
// ============================================================

function ajustarVistaMapaCultura() {
  if (!mapCultura || !markersCultura) return;

  const capas = markersCultura.getLayers();

  if (!capas.length) {
    mapCultura.setView([19.285, -99.66], 11);
    return;
  }

  if (capas.length === 1) {
    mapCultura.setView(capas[0].getLatLng(), 15);
    return;
  }

  const limites = markersCultura.getBounds();

  if (limites.isValid()) {
    mapCultura.fitBounds(limites.pad(0.12), {
      maxZoom: 13,
      padding: [25, 25],
    });
  }
}

// ============================================================
// 14. MOSTRAR LISTA DE RESULTADOS
// ============================================================

function mostrarListaCultura(resultados) {
  const lista = document.getElementById("list-cultura");

  if (!lista) return;

  if (!resultados.length) {
    lista.innerHTML = `
      <p class="sin-resultados">
        No se encontraron espacios culturales.
      </p>
    `;

    return;
  }

  lista.innerHTML = resultados
    .map((espacio) => {
      const categoria = obtenerClaveCategoriaCultura(espacio.categoria);

      const etiquetaCategoria =
        nombresCategoriasCultura[categoria] || espacio.categoria;

      return `
        <article
          class="resultado-cultura"
          data-espacio-cultura="${obtenerIdEspacioCultura(espacio)}"
        >
          <div class="resultado-cultura-superior">
            <span class="resultado-cultura-categoria">
              ${etiquetaCategoria}
            </span>

            <span class="resultado-cultura-ciudad">
              ${espacio.ciudad}
            </span>
          </div>

          <h4>${espacio.nombre}</h4>

          <p>${espacio.direccion}</p>
        </article>
      `;
    })
    .join("");

  lista.querySelectorAll("[data-espacio-cultura]").forEach((elemento) => {
    elemento.addEventListener("click", () => {
      const identificador = elemento.dataset.espacioCultura;

      const marcador = marcadoresCulturaPorEspacio.get(identificador);

      if (!marcador) return;

      mapCultura.flyTo(marcador.getLatLng(), 16, {
        duration: 0.6,
      });

      marcador.openPopup();
    });
  });
}

// ============================================================
// 15. LIMPIAR MAPA
// ============================================================

function limpiarMapaCultura() {
  if (!mapCultura) return;

  mapCultura.closePopup();

  filtroCulturaActual = null;

  limpiarFiltrosCultura();

  const buscador = document.getElementById("search-cultura");

  if (buscador) {
    buscador.value = "";
  }

  if (markersCultura) {
    markersCultura.clearLayers();
  }

  marcadoresCulturaPorEspacio.clear();
}

// ============================================================
// 16. AJUSTAR MAPA AL CAMBIAR EL TAMAÑO DE LA VENTANA
// ============================================================

window.addEventListener("resize", () => {
  if (mapCultura) {
    mapCultura.invalidateSize();
  }
});
