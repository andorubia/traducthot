// Lista de jeroglíficos únicos (sin repetidos)
const jeroglificosUnicos = [
  { simbolo: '𓄿', emoji: '🦅' }, // A
  { simbolo: '𓎡', emoji: '🧺' }, // B / C / G / K
  { simbolo: '𓂠', emoji: '✋' }, // D
  { simbolo: '𓇋', emoji: '🌿' }, // E
  { simbolo: '𓆑', emoji: '🐍' }, // F / V
  { simbolo: '𓉔', emoji: '🏠' }, // H
  { simbolo: '𓇌', emoji: '🌱' }, // I / Y
  { simbolo: '𓆓', emoji: '🐉' }, // J
  { simbolo: '𓃩', emoji: '🦁' }, // L
  { simbolo: '𓅓', emoji: '🦉' }, // M
  { simbolo: '𓈎', emoji: '🌊' }, // N
  { simbolo: '𓏲', emoji: '🪢' }, // O / U / W
  { simbolo: '𓊪', emoji: '🧘' }, // P
  { simbolo: '𓎛', emoji: '⛰️' }, // Q
  { simbolo: '𓏏', emoji: '👄' }, // R / T
  { simbolo: '𓋴', emoji: '🧵' }, // S
  { simbolo: '𓈖', emoji: '🔒' }  // Z
];

let seleccionados = [];

function cargarTeclado() {
  const contenedor = document.getElementById("teclado");
  if (!contenedor) return;
  
  contenedor.innerHTML = "";
  jeroglificosUnicos.forEach(item => {
    const btn = document.createElement("button");
    btn.className = "tecla";
    btn.innerHTML = `${item.simbolo}`;
    btn.onclick = function() {
      seleccionados.push(item);
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
  pantalla.innerText = seleccionados.length > 0 
    ? seleccionados.map(item => item.simbolo).join(" ") 
    : "...";
}

function traducirAEmojis() {
  if (seleccionados.length === 0) return;

  const resDiv = document.getElementById("resultado-emojis");
  const expDiv = document.getElementById("explicacion-traduccion");

  // Efecto visual de revelación mística
  resDiv.classList.remove("animacion-revelar");
  void resDiv.offsetWidth;
  resDiv.classList.add("animacion-revelar");

  // Secuencia jeroglífica exacta de "COMOSECREOELUNIVERSO"
  const secuenciaSimbolos = seleccionados.map(item => item.simbolo).join("");
  const secretoUniverso = "𓎡𓏲𓅓𓏲𓋴𓇋𓎡𓏏𓇋𓏲𓇋𓃩𓏲𓈎𓇌𓆑𓇋𓏏𓋴𓏲";

  if (secuenciaSimbolos === secretoUniverso) {
    resDiv.innerText = "❓ 🦅 ⛰️ ✨ 🌍 🌌";
    expDiv.innerText = "";
    return;
  }

  // Traducción a emojis
  const emojisResultantes = seleccionados.map(item => item.emoji).join(" ");
  resDiv.innerText = emojisResultantes;
  expDiv.innerText = "";
}

window.addEventListener("DOMContentLoaded", cargarTeclado);
