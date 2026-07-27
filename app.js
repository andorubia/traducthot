const alfabetoEgipcio = [
  { letra: 'A', simbolo: '𓄿', emoji: '🦅', explicacion: 'A - Buitre' },
  { letra: 'B', simbolo: '𓎡', emoji: '🦶', explicacion: 'B - Pie' },
  { letra: 'C', simbolo: '𓎡', emoji: '🧺', explicacion: 'C - Cesta' },
  { letra: 'D', simbolo: '𓂠', emoji: '✋', explicacion: 'D - Mano' },
  { letra: 'E', simbolo: '𓇋', emoji: '🌿', explicacion: 'E - Junco' },
  { letra: 'F', simbolo: '𓆑', emoji: '🐍', explicacion: 'F - Víbora' },
  { letra: 'G', simbolo: '𓎡', emoji: '🏺', explicacion: 'G - Jarra' },
  { letra: 'H', simbolo: '𓉔', emoji: '🏠', explicacion: 'H - Choza' },
  { letra: 'I', simbolo: '𓇌', emoji: '🌱', explicacion: 'I - Juncos' },
  { letra: 'J', simbolo: '𓆓', emoji: '🐉', explicacion: 'J - Cobra' },
  { letra: 'K', simbolo: '𓎡', emoji: '🧺', explicacion: 'K - Cesta' },
  { letra: 'L', simbolo: '𓃩', emoji: '🦁', explicacion: 'L - León' },
  { letra: 'M', simbolo: '𓅓', emoji: '🦉', explicacion: 'M - Búho' },
  { letra: 'N', simbolo: '𓈎', emoji: '🌊', explicacion: 'N - Agua' },
  { letra: 'Ñ', simbolo: '𓈎𓇌', emoji: '🌊🌱', explicacion: 'Ñ - Agua y Junco' },
  { letra: 'O', simbolo: '𓏲', emoji: '🪢', explicacion: 'O - Cuerda' },
  { letra: 'P', simbolo: '𓊪', emoji: '🧘', explicacion: 'P - Estera' },
  { letra: 'Q', simbolo: '𓎛', emoji: '⛰️', explicacion: 'Q - Montaña' },
  { letra: 'R', simbolo: '𓏏', emoji: '👄', explicacion: 'R - Boca' },
  { letra: 'S', simbolo: '𓋴', emoji: '🧵', explicacion: 'S - Tela' },
  { letra: 'T', simbolo: '𓏏', emoji: '🍞', explicacion: 'T - Pan' },
  { letra: 'U', simbolo: '𓏲', emoji: '🐤', explicacion: 'U - Codorniz' },
  { letra: 'V', simbolo: '𓆑', emoji: '🐍', explicacion: 'V - Víbora' },
  { letra: 'W', simbolo: '𓏲', emoji: '🪢', explicacion: 'W - Cuerda' },
  { letra: 'X', simbolo: '𓎡𓋴', emoji: '🧺🧵', explicacion: 'X - Cesta y Tela' },
  { letra: 'Y', simbolo: '𓇌', emoji: '🌱', explicacion: 'Y - Juncos' },
  { letra: 'Z', simbolo: '𓈖', emoji: '🔒', explicacion: 'Z - Cerrojo' }
];

let seleccionados = [];

function cargarTeclado() {
  const contenedor = document.getElementById("teclado");
  if (!contenedor) return;
  
  contenedor.innerHTML = "";
  alfabetoEgipcio.forEach(item => {
    const btn = document.createElement("button");
    btn.className = "tecla";
    btn.innerHTML = `<small style="font-size: 0.7rem; display:block; color: #8b5a2b; font-weight: bold;">${item.letra}</small>${item.simbolo}`;
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

  // Efecto de animación mística al consultar a Thot
  resDiv.classList.remove("animacion-revelar");
  void resDiv.offsetWidth; // Reinicia el ciclo de animación CSS
  resDiv.classList.add("animacion-revelar");

  const textoEscrito = seleccionados.map(item => item.letra).join("");

  // Detección especial para la pregunta del universo
  if (textoEscrito === "COMOSECREOELUNIVERSO") {
    resDiv.innerText = "❓ 🦅 ⛰️ ✨ 🌍 🌌";
    expDiv.innerText = "Pregunta (❓) + Dios Creador (🦅) + Colina Primordial (⛰️) + Cosmos (✨🌍🌌)";
    return;
  }

  // Traducción por defecto de cada letra
  const emojisResultantes = seleccionados.map(item => item.emoji).join(" ");
  const explicaciones = seleccionados.map(item => item.explicacion).join(" + ");

  resDiv.innerText = emojisResultantes;
  expDiv.innerText = explicaciones;
}

window.addEventListener("DOMContentLoaded", cargarTeclado);
