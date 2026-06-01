// ==========================================
// 4_main.js: ARQUITECTURA DE LIMPIEZA INTELIGENTE
// ==========================================

// --- EL MOTOR DE LIMPIEZA ---
function limpiarMapasAlSalir(seccionDestino) {
  // 1. Limpiar Visualizador de Necesidades (Solo si nos vamos a otro lado)
  if (seccionDestino !== "necesidades") {
    if (typeof mapaNecesidades !== "undefined" && mapaNecesidades) {
      mapaNecesidades.closePopup();
      if (typeof capaActiva !== "undefined" && capaActiva) {
        mapaNecesidades.removeLayer(capaActiva);
        window.capaActiva = null;
      }
      // 🔥 MAGIA: Desmarcar las casillas del menú de capas directamente en el HTML
      document
        .querySelectorAll("#necesidades .leaflet-control-layers-selector")
        .forEach((input) => {
          input.checked = false;
        });
      const titulo = document.getElementById("titulo-visualizador");
      if (titulo)
        titulo.innerText =
          "Visualizador de Necesidades Sociales del Estado de México";
    }
  }

  // 2. Limpiar Mapa Regional (Oferta - Oriente y Sur)
  if (seccionDestino !== "oferta-regional") {
    if (typeof mapaRegional !== "undefined" && mapaRegional) {
      mapaRegional.closePopup();
      if (typeof marcadoresActivos !== "undefined" && marcadoresActivos)
        marcadoresActivos.clearLayers();
      if (typeof capaMunicipiosActiva !== "undefined" && capaMunicipiosActiva)
        mapaRegional.removeLayer(capaMunicipiosActiva);
      const menuOferta = document.getElementById("menu-oferta-dinamico");
      if (menuOferta) menuOferta.innerHTML = "";
    }
  }

  // 3. Limpiar Situación Regional (Fichas)
  if (seccionDestino !== "situacion") {
    const imgFicha = document.getElementById("imagen-ficha-actual");
    const placeholderFicha = document.getElementById("placeholder-ficha");
    if (imgFicha) imgFicha.style.display = "none";
    if (placeholderFicha) placeholderFicha.style.display = "block";
  }
}

// --- FUNCIONES DE NAVEGACIÓN ---
function openModule(id) {
  let targetSectionId = id;

  if (id.startsWith("situacion-")) {
    targetSectionId = "situacion";
    let municipioSeleccionado = id.split("-")[1];
    let nombreMayus =
      municipioSeleccionado.charAt(0).toUpperCase() +
      municipioSeleccionado.slice(1);
    let tituloElement = document.getElementById("titulo-situacion");
    if (tituloElement)
      tituloElement.innerHTML = `Situación Regional: ${nombreMayus}`;
  }

  // 👇 Limpiamos SOLO los módulos que estamos abandonando
  limpiarMapasAlSalir(targetSectionId);

  // 1. APAGAR TODAS LAS SECCIONES
  document.querySelectorAll("section").forEach((s) => {
    s.classList.remove("active-section");
    s.style.display = "none";
  });

  // 2. ENCENDER LA SECCIÓN SOLICITADA
  const section = document.getElementById(targetSectionId);
  if (section) {
    section.classList.add("active-section");
    section.style.display = "";
  } else {
    console.error("Error: No se encontró la sección:", targetSectionId);
    return;
  }

  // 3. REDIMENSIONAR MAPAS Y RESETEAR NODOS
  setTimeout(() => {
    section.scrollIntoView({ behavior: "smooth", block: "start" });

    // --- NODOS QUE YA FUNCIONABAN BIEN ---
    if (targetSectionId === "digital") {
      if (typeof mapDigital !== "undefined" && mapDigital)
        mapDigital.invalidateSize();
      initMap(
        "map-digital",
        typeof labsDigital !== "undefined" ? labsDigital : [],
        "list-digital",
        "digital",
      );
      if (typeof filtrarMapa === "function") filtrarMapa("digital", "Todos");
    } else if (targetSectionId === "agua") {
      if (typeof mapAgua !== "undefined" && mapAgua) mapAgua.invalidateSize();
      initMap(
        "map-agua",
        typeof centrosAgua !== "undefined" ? centrosAgua : [],
        "list-agua",
        "agua",
      );
      if (typeof filtrarMapa === "function") filtrarMapa("agua", "Todos");
    } else if (targetSectionId === "alimenticio") {
      if (typeof mapAlimenticio !== "undefined" && mapAlimenticio)
        mapAlimenticio.invalidateSize();
      initMap(
        "map-alimenticio",
        typeof centrosAlimenticio !== "undefined" ? centrosAlimenticio : [],
        "list-alimenticio",
        "alimenticio",
      );
      if (typeof filtrarMapa === "function")
        filtrarMapa("alimenticio", "Todos");
    }

    // --- INVESTIGACIONES, PATENTES Y LABORATORIOS ---
    else if (targetSectionId === "investigacion") {
      if (typeof mapInvestigacion !== "undefined" && mapInvestigacion)
        mapInvestigacion.invalidateSize();
      if (typeof filterInvestigacion === "function")
        filterInvestigacion("Todos");
      const s = document.getElementById("search-investigacion");
      if (s) s.value = "";
    } else if (targetSectionId === "patentes") {
      if (typeof mapPatentes !== "undefined" && mapPatentes)
        mapPatentes.invalidateSize();
      if (typeof initMapPatentes === "function") initMapPatentes();
      if (typeof filterPatentes === "function") filterPatentes("Todos");
      const s = document.getElementById("search-patentes");
      if (s) s.value = "";
    } else if (targetSectionId === "laboratorios") {
      if (typeof mapLabs !== "undefined" && mapLabs) mapLabs.invalidateSize();
      if (typeof filterLabs === "function") filterLabs("Todos");
      const s = document.getElementById("search-labs");
      if (s) s.value = "";
    }

    // --- VISUALIZADOR DE NECESIDADES ---
    else if (targetSectionId === "necesidades") {
      if (typeof mapaNecesidades !== "undefined" && mapaNecesidades)
        mapaNecesidades.invalidateSize();
      if (typeof iniciarMapaNecesidades === "function")
        iniciarMapaNecesidades();
    }

    // --- MAPA REGIONAL (OFERTA) ---
    else if (targetSectionId === "oferta-regional") {
      if (typeof mapaRegional !== "undefined" && mapaRegional)
        mapaRegional.invalidateSize();
    }
  }, 200);
}

function goHome() {
  // 👇 Al ir al Home (Menú principal), limpiamos TODOS los mapas rebeldes
  limpiarMapasAlSalir("home");

  document.querySelectorAll("section").forEach((s) => {
    s.classList.remove("active-section");
    s.style.display = "none";
  });

  const home = document.getElementById("home");
  if (home) {
    home.classList.add("active-section");
    home.style.display = "";
  }
  window.scrollTo(0, 0);
}

// ==========================================
// FUNCIONES GLOBALES PARA EL MODAL Y ARRANQUE
// ==========================================
function openInfoModal() {
  document.getElementById("info-modal").style.display = "flex";
}
function closeInfoModal() {
  document.getElementById("info-modal").style.display = "none";
}

document.addEventListener("DOMContentLoaded", () => {
  console.log("🚀 Sistema Iniciado correctamente.");
  if (typeof cargarBaseDeDatos === "function") cargarBaseDeDatos();
  if (typeof cargarPatentes === "function") cargarPatentes();
  if (typeof cargarLaboratorios === "function") cargarLaboratorios();

  window.addEventListener("resize", () => {
    const maps = [
      typeof mapDigital !== "undefined" ? mapDigital : null,
      typeof mapAgua !== "undefined" ? mapAgua : null,
      typeof mapPatentes !== "undefined" ? mapPatentes : null,
      typeof mapaNecesidades !== "undefined" ? mapaNecesidades : null,
      typeof mapInvestigacion !== "undefined" ? mapInvestigacion : null,
      typeof mapaRegional !== "undefined" ? mapaRegional : null,
    ];
    maps.forEach((m) => {
      if (m) m.invalidateSize();
    });
  });
});

// ==========================================
// EFECTOS HOVER DE IMÁGENES EN EL MENÚ
// ==========================================
const rutaOriginal = "img/mapa_principal.png"; // Tu mapa por defecto

function cambiarImagenHover(nuevaRuta) {
  const imagen = document.getElementById("imagen-cambiante");
  if (imagen) {
    imagen.src = nuevaRuta;
    // Efecto de parpadeo suave
    imagen.style.opacity = "0.6";
    setTimeout(() => (imagen.style.opacity = "1"), 150);
  }
}

function restaurarImagenHover() {
  const imagen = document.getElementById("imagen-cambiante");
  if (imagen) {
    imagen.src = rutaOriginal;
  }
}
