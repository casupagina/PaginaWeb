// ==========================================
// 4_main.js: ARQUITECTURA DE LIMPIEZA INTELIGENTE
// ==========================================

// --- EL MOTOR DE LIMPIEZA ---
function limpiarMapasAlSalir(seccionDestino) {
  // 1. Limpiar Visualizador de Necesidades
  if (seccionDestino !== "necesidades") {
    if (typeof mapaNecesidades !== "undefined" && mapaNecesidades) {
      mapaNecesidades.closePopup();

      if (typeof capaActiva !== "undefined" && capaActiva) {
        mapaNecesidades.removeLayer(capaActiva);
        window.capaActiva = null;
      }

      // Desmarcar las casillas del menú de capas
      document
        .querySelectorAll("#necesidades .leaflet-control-layers-selector")
        .forEach((input) => {
          input.checked = false;
        });

      const titulo = document.getElementById("titulo-visualizador");

      if (titulo) {
        titulo.innerText =
          "Visualizador de Necesidades Sociales del Estado de México";
      }
    }
  }

  // 2. Limpiar Mapa Regional
  if (seccionDestino !== "oferta-regional") {
    if (typeof mapaRegional !== "undefined" && mapaRegional) {
      mapaRegional.closePopup();

      if (typeof marcadoresActivos !== "undefined" && marcadoresActivos) {
        marcadoresActivos.clearLayers();
      }

      if (typeof capaMunicipiosActiva !== "undefined" && capaMunicipiosActiva) {
        mapaRegional.removeLayer(capaMunicipiosActiva);
      }

      const menuOferta = document.getElementById("menu-oferta-dinamico");

      if (menuOferta) {
        menuOferta.innerHTML = "";
      }
    }
  }

  // 3. Limpiar Situación Regional
  if (seccionDestino !== "situacion") {
    const imgFicha = document.getElementById("imagen-ficha-actual");

    const placeholderFicha = document.getElementById("placeholder-ficha");

    if (imgFicha) {
      imgFicha.style.display = "none";
    }

    if (placeholderFicha) {
      placeholderFicha.style.display = "block";
    }
  }
}

// ==========================================
// FUNCIONES DE NAVEGACIÓN
// ==========================================

function openModule(id) {
  let targetSectionId = id;

  // ------------------------------------------
  // Situación Regional
  // ------------------------------------------
  if (id.startsWith("situacion-")) {
    targetSectionId = "situacion";

    const municipioSeleccionado = id.split("-")[1];

    const nombreMayus =
      municipioSeleccionado.charAt(0).toUpperCase() +
      municipioSeleccionado.slice(1);

    const tituloElement = document.getElementById("titulo-situacion");

    if (tituloElement) {
      tituloElement.innerHTML = `Situación Regional: ${nombreMayus}`;
    }
  }

  // Limpiar únicamente los módulos que abandonamos
  limpiarMapasAlSalir(targetSectionId);

  // 1. Ocultar todas las secciones
  document.querySelectorAll("section").forEach((seccion) => {
    seccion.classList.remove("active-section");
    seccion.style.display = "none";
  });

  // 2. Mostrar la sección solicitada
  const section = document.getElementById(targetSectionId);

  if (section) {
    section.classList.add("active-section");
    section.style.display = "";
  } else {
    console.error("Error: No se encontró la sección:", targetSectionId);

    return;
  }

  // 3. Inicializar o redimensionar mapas
  setTimeout(() => {
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    // ==========================================
    // NODOS DE PARTICIPACIÓN
    // ==========================================
    if (
      targetSectionId === "digital" ||
      targetSectionId === "agua" ||
      targetSectionId === "alimenticio"
    ) {
      if (typeof iniciarNodoParticipacion === "function") {
        iniciarNodoParticipacion(targetSectionId);
      } else {
        console.error(
          "No se encontró iniciarNodoParticipacion(). " +
            "Revisa que 8_nodos.js esté cargado antes de 4_main.js.",
        );
      }
    }

    // ==========================================
    // INVESTIGACIÓN
    // ==========================================
    else if (targetSectionId === "investigacion") {
      if (typeof mapInvestigacion !== "undefined" && mapInvestigacion) {
        mapInvestigacion.invalidateSize();
      }

      if (typeof filterInvestigacion === "function") {
        filterInvestigacion("Todos");
      }

      const buscador = document.getElementById("search-investigacion");

      if (buscador) {
        buscador.value = "";
      }
    }

    // ==========================================
    // PATENTES
    // ==========================================
    else if (targetSectionId === "patentes") {
      if (typeof mapPatentes !== "undefined" && mapPatentes) {
        mapPatentes.invalidateSize();
      }

      if (typeof initMapPatentes === "function") {
        initMapPatentes();
      }

      if (typeof filterPatentes === "function") {
        filterPatentes("Todos");
      }

      const buscador = document.getElementById("search-patentes");

      if (buscador) {
        buscador.value = "";
      }
    }

    // ==========================================
    // LABORATORIOS
    // ==========================================
    else if (targetSectionId === "laboratorios") {
      if (typeof mapLabs !== "undefined" && mapLabs) {
        mapLabs.invalidateSize();
      }

      if (typeof filterLabs === "function") {
        filterLabs("Todos");
      }

      const buscador = document.getElementById("search-labs");

      if (buscador) {
        buscador.value = "";
      }
    }

    // ==========================================
    // VISUALIZADOR DE NECESIDADES
    // ==========================================
    else if (targetSectionId === "necesidades") {
      if (typeof mapaNecesidades !== "undefined" && mapaNecesidades) {
        mapaNecesidades.invalidateSize();
      }

      if (typeof iniciarMapaNecesidades === "function") {
        iniciarMapaNecesidades();
      }
    }

    // ==========================================
    // MAPA REGIONAL
    // ==========================================
    else if (targetSectionId === "oferta-regional") {
      if (typeof mapaRegional !== "undefined" && mapaRegional) {
        mapaRegional.invalidateSize();
      }
    }
  }, 200);
}

// ==========================================
// REGRESAR AL HOME
// ==========================================

function goHome() {
  // Al regresar al menú principal, limpiar mapas
  limpiarMapasAlSalir("home");

  document.querySelectorAll("section").forEach((seccion) => {
    seccion.classList.remove("active-section");
    seccion.style.display = "none";
  });

  const home = document.getElementById("home");

  if (home) {
    home.classList.add("active-section");
    home.style.display = "";
  }

  window.scrollTo(0, 0);
}

// ==========================================
// FUNCIONES GLOBALES PARA EL MODAL
// ==========================================

function openInfoModal() {
  const modal = document.getElementById("info-modal");

  if (modal) {
    modal.style.display = "flex";
  }
}

function closeInfoModal() {
  const modal = document.getElementById("info-modal");

  if (modal) {
    modal.style.display = "none";
  }
}

// ==========================================
// ARRANQUE DEL SISTEMA
// ==========================================

document.addEventListener("DOMContentLoaded", () => {
  console.log("🚀 Sistema Iniciado correctamente.");

  if (typeof cargarBaseDeDatos === "function") {
    cargarBaseDeDatos();
  }

  if (typeof cargarPatentes === "function") {
    cargarPatentes();
  }

  if (typeof cargarLaboratorios === "function") {
    cargarLaboratorios();
  }

  // Redimensionar mapas al cambiar el tamaño de ventana
  window.addEventListener("resize", () => {
    const maps = [
      typeof mapDigital !== "undefined" ? mapDigital : null,

      typeof mapAgua !== "undefined" ? mapAgua : null,

      typeof mapAlimenticio !== "undefined" ? mapAlimenticio : null,

      typeof mapPatentes !== "undefined" ? mapPatentes : null,

      typeof mapaNecesidades !== "undefined" ? mapaNecesidades : null,

      typeof mapInvestigacion !== "undefined" ? mapInvestigacion : null,

      typeof mapaRegional !== "undefined" ? mapaRegional : null,
    ];

    maps.forEach((mapa) => {
      if (mapa && typeof mapa.invalidateSize === "function") {
        mapa.invalidateSize();
      }
    });
  });
});

// ==========================================
// EFECTOS HOVER DE IMÁGENES EN EL MENÚ
// ==========================================

const rutaOriginal = "img/mapa_principal.png";

function cambiarImagenHover(nuevaRuta) {
  const imagen = document.getElementById("imagen-cambiante");

  if (imagen) {
    imagen.src = nuevaRuta;

    // Efecto de parpadeo suave
    imagen.style.opacity = "0.6";

    setTimeout(() => {
      imagen.style.opacity = "1";
    }, 150);
  }
}

function restaurarImagenHover() {
  const imagen = document.getElementById("imagen-cambiante");

  if (imagen) {
    imagen.src = rutaOriginal;
  }
}
