// Alfabeto completo (A-Z + Ñ)
const alfabetoEgipcio = [
  { letra: 'A', simbolo: '𓄿' },
  { letra: 'B', simbolo: '𓎡' },
  { letra: 'C', simbolo: '𓎡' },
  { letra: 'D', simbolo: '𓂠' },
  { letra: 'E', simbolo: '𓇋' },
  { letra: 'F', simbolo: '𓆑' },
  { letra: 'G', simbolo: '𓎡' },
  { letra: 'H', simbolo: '𓉔' },
  { letra: 'I', simbolo: '𓇌' },
  { letra: 'J', simbolo: '𓆓' },
  { letra: 'K', simbolo: '𓎡' },
  { letra: 'L', simbolo: '𓃩' },
  { letra: 'M', simbolo: '𓅓' },
  { letra: 'N', simbolo: '𓈎' },
  { letra: 'Ñ', simbolo: '𓈎𓇌' },
  { letra: 'O', simbolo: '𓏲' },
  { letra: 'P', simbolo: '𓊪' },
  { letra: 'Q', simbolo: '𓎛' },
  { letra: 'R', simbolo: '𓏏' },
  { letra: 'S', simbolo: '𓋴' },
  { letra: 'T', simbolo: '𓏏' },
  { letra: 'U', simbolo: '𓏲' },
  { letra: 'V', simbolo: '𓆑' },
  { letra: 'W', simbolo: '𓏲' },
  { letra: 'X', simbolo: '𓎡𓋴' },
  { letra: 'Y', simbolo: '𓇌' },
  { letra: 'Z', simbolo: '𓈖' }
];

// Diccionario de interpretación a Emojis (incluye letras y la frase completa)
const diccionario = {
  // Frase completa: "¿Cómo se creó el universo?"
  "𓎡𓏲𓅓𓏲𓋴𓇋𓎡𓏏𓇋𓏲𓇋𓃩𓏲𓈎𓇌𓆑𓇋𓏏𓋴𓏲": {
    emojis: "❓ 🦅 ⛰️ ✨ 🌍 🌌",
    explicacion: "Pregunta (❓) + Dios Creador (🦅) + Colina Primordial (⛰️) + Cosmos (✨🌍🌌)"
  },

  // Letras individuales
  "𓄿": { emojis: "🦅", explicacion: "A - Buitre" },
  "𓎡": { emojis: "🦶", explicacion: "B/C/G/K - Pie / Cesta" },
  "𓂠": { emojis: "✋", explicacion: "D - Mano" },
  "𓇋": { emojis: "🌿", explicacion: "E - Junco" },
  "𓆑": { emojis: "🐍", explicacion: "F/V - Víbora" },
  "𓉔": { emojis: "🏠", explicacion: "H - Choza" },
  "𓇌": { emojis: "🌱", explicacion: "I/Y - Juncos" },
  "𓆓": { emojis: "🐉", explicacion: "J - Cobra" },
  "𓃩": { emojis: "🦁", explicacion: "L - León" },
  "𓅓": { emojis: "🦉", explicacion: "M - Búho" },
  "𓈎": { emojis: "🌊", explicacion: "N - Agua" },
  "𓏲": { emojis: "🪢", explicacion: "O/U/W - Cuerda" },
  "𓊪": { emojis: "🧘", explicacion: "P - Estera" },
  "𓎛": { emojis: "⛰️", explicacion: "Q - Montaña" },
  "𓏏": { emojis: "👄", explicacion: "R/T - Boca / Pan" },
  "𓋴": { emojis: "🧵", explicacion: "S - Tela" },
  "𓈖": { emojis: "🔒", explicacion: "Z - Cerrojo" }
};

let seleccionados = [];

function cargarTeclado() {
  const contenedor = document.getElementById("teclado");
  if (!contenedor) return;
  
  contenedor.innerHTML = "";
  alfabetoEgipcio.forEach(item => {
    const btn = document.createElement("button");
    btn.className = "tecla";
    btn.innerHTML = `<small style="font-size: 0.75rem; display:block; color: #8b5a2b;">${item.letra}</small>${item.simbolo}`;
    btn.onclick = function() {
      seleccionados.push(item.simbolo);
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

  const textoUnido = seleccionados.join("");
  const resDiv = document.getElementById("resultado-emojis");
  const expDiv = document.getElementById("explicacion-traduccion");

  // 1. Revisa si coincide exactamente con la frase del universo
  if (diccionario[textoUnido]) {
    resDiv.innerText = diccionario[textoUnido].emojis;
    expDiv.innerText = diccionario[textoUnido].explicacion;
  } else {
    // 2. Si es otra combinación, traduce símbolo por símbolo
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

    resDiv.innerText = emojisResultantes.join(" ");
    expDiv.innerText = explicaciones.join(" + ");
  }
}

window.addEventListener("DOMContentLoaded", cargarTeclado);
