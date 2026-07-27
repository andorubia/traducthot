// Lista de jeroglíficos para el teclado
const listaJeroglificos = [
  "𓄿", "𓎡", "𓂠", "𓇋", "𓆑", "𓉔", "𓇌", "𓆓", "𓃩", "𓅓", 
  "𓈎", "𓏲", "𓊪", "𓎛", "𓏏", "𓋴", "𓈖", "𓇳", "𓀔", "𓈗", 
  "𓉐", "𓊹", "𓁹", "𓃠", "𓆏", "𓅓", "𓊝", "⛰️", "🦅", "🌌"
];

// Diccionario de "combinaciones/frases de jeroglíficos" a emojis
const traducciones = {
  // Ejemplo: Creación del universo / Sol
  "❓ 🦅 ⛰️ ✨ 🌍 🌌": "❓ 🦅 ⛰️ ✨ 🌍 🌌",
  
  // Mapeos por símbolos individuales o patrones
  "𓇳": { emojis: "☀️ 👑", explicacion: "El Sol / Ra" },
  "𓀔": { emojis: "🤴 👑", explicacion: "El Faraón / Rey" },
  "𓈗": { emojis: "🌊 🩵", explicacion: "Agua / Río Nilo" },
  "𓉐": { emojis: "🏠 🏛️", explicacion: "Casa / Templo" },
  "𓊹": { emojis: "✨ 𓋹 🔱", explicacion: "Dios / Sagrado" },
  "𓁹": { emojis: "👁️ 🔮", explicacion: "Ojo de Horus / Visión" },
  "𓃠": { emojis: "🐱 🐾", explicacion: "Gato / Bastet" }
};

let mensajeActual = [];

// Inicializar el teclado
window.onload = () => {
  const contenedorTeclado = document.getElementById("teclado");
  listaJeroglificos.forEach(simbolo => {
    const boton = document.createElement("button");
    boton.className = "tecla";
    boton.innerText = simbolo;
    boton.onclick = () => agregarSimbolo(simbolo);
    contenedorTeclado.appendChild(boton);
  });
};

function agregarSimbolo(simbolo) {
  mensajeActual.push(simbolo);
  actualizarPantalla();
}

function borrarUltimo() {
  mensajeActual.pop();
  actualizarPantalla();
}

function limpiarTodo() {
  mensajeActual = [];
  actualizarPantalla();
  document.getElementById("resultado-emojis").innerText = "...";
  document.getElementById("explicacion-traduccion").innerText = "";
}

function actualizarPantalla() {
  const pantalla = document.getElementById("pantalla-jeroglifica");
  pantalla.innerText = mensajeActual.join(" ");
}

function traducirAEmojis() {
  if (mensajeActual.length === 0) return;

  const textoJeroglifico = mensajeActual.join("");
  const resDiv = document.getElementById("resultado-emojis");
  const expDiv = document.getElementById("explicacion-traduccion");

  // Buscar si la secuencia exacta tiene una traducción directa
  if (traducciones[textoJeroglifico]) {
    resDiv.innerText = traducciones[textoJeroglifico].emojis;
    expDiv.innerText = traducciones[textoJeroglifico].explicacion;
  } else {
    // Si es una mezcla personalizada, traduce símbolo por símbolo
    let resultadoEmojis = [];
    let explicaciones = [];

    mensajeActual.forEach(simbolo => {
      if (traducciones[simbolo]) {
        resultadoEmojis.push(traducciones[simbolo].emojis);
        explicaciones.push(traducciones[simbolo].explicacion);
      } else {
        resultadoEmojis.push("❓"); // Si el símbolo no está en el diccionario
      }
    });

    resDiv.innerText = resultadoEmojis.join(" ");
    expDiv.innerText = explicaciones.length > 0 ? explicaciones.join(" + ") : "Interpretación mística";
  }
}
