const listaJeroglificos = ["𓄿", "𓎡", "𓂠", "𓇋", "𓆑", "𓉔", "𓇌", "𓆓", "𓃩", "𓅓", "𓈎", "𓏲", "𓊪", "𓎛", "𓏏", "𓋴", "𓈖", "𓇳", "𓀔", "𓈗", "𓉐", "𓊹", "𓁹", "𓃠"];

const diccionario = {
  "𓇳": { emojis: "☀️ 👑", explicacion: "El Sol / Ra" },
  "𓀔": { emojis: "🤴 👑", explicacion: "El Faraón / Rey" },
  "𓈗": { emojis: "🌊 🩵", explicacion: "Agua / Río Nilo" },
  "𓉐": { emojis: "🏠 🏛️", explicacion: "Casa / Templo" },
  "𓊹": { emojis: "✨ 𓋹 🔱", explicacion: "Dios / Sagrado" },
  "𓁹": { emojis: "👁️ 🔮", explicacion: "Ojo de Horus" },
  "𓃠": { emojis: "🐱 🐾", explicacion: "Gato" }
};

let seleccionados = [];

// Función para dibujar los botones al cargar la página
function cargarTeclado() {
  const contenedor = document.getElementById("teclado");
  if (!contenedor) return;
  
  contenedor.innerHTML = "";
  listaJeroglificos.forEach(simbolo => {
    const btn = document.createElement("button");
    btn.className = "tecla";
    btn.innerText = simbolo;
    btn.onclick = function() {
      seleccionados.push(simbolo);
      actualizarPantalla();
    };
    contenedor.appendChild(btn);
  });
}

function borrarUltimo() {
  seleccionados.pop();
  actualizarPantalla();
}

function limpiarTodo() {
  seleccionados = [];
  actualizarPantalla();
  document.getElementById("resultado-emojis").innerText = "...";
  document.getElementById("explicacion-traduccion").innerText = "";
}

function actualizarPantalla() {
  const pantalla = document.getElementById("pantalla-jeroglifica");
  pantalla.innerText = seleccionados.length > 0 ? seleccionados.join(" ") : "...";
}

function traducirAEmojis() {
  if (seleccionados.length === 0) return;

  let emojisResultantes = [];
  let explicaciones = [];

  seleccionados.forEach(simbolo => {
    if (diccionario[simbolo]) {
      emojisResultantes.push(diccionario[simbolo].emojis);
      explicaciones.push(diccionario[simbolo].explicacion);
    } else {
      emojisResultantes.push("❓");
    }
  });

  document.getElementById("resultado-emojis").innerText = emojisResultantes.join(" ");
  document.getElementById("explicacion-traduccion").innerText = explicaciones.join(" + ");
}

// Ejecutar cuando la página termine de cargar
window.addEventListener("DOMContentLoaded", cargarTeclado);
