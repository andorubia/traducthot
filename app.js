const alfabetoEgipcio = [
  { letra: 'A', simbolo: '𓄿', emoji: '🦅' },
  { letra: 'B', simbolo: '𓎡', emoji: '🦶' },
  { letra: 'C', simbolo: '𓎡', emoji: '🧺' },
  { letra: 'D', simbolo: '𓂠', emoji: '✋' },
  { letra: 'E', simbolo: '𓇋', emoji: '🌿' },
  { letra: 'F', simbolo: '𓆑', emoji: '🐍' },
  { letra: 'G', simbolo: '𓎡', emoji: '🏺' },
  { letra: 'H', simbolo: '𓉔', emoji: '🏠' },
  { letra: 'I', simbolo: '𓇌', emoji: '🌱' },
  { letra: 'J', simbolo: '𓆓', emoji: '🐉' },
  { letra: 'K', simbolo: '𓎡', emoji: '🧺' },
  { letra: 'L', simbolo: '𓃩', emoji: '🦁' },
  { letra: 'M', simbolo: '𓅓', emoji: '🦉' },
  { letra: 'N', simbolo: '𓈎', emoji: '🌊' },
  { letra: 'Ñ', simbolo: '𓈎𓇌', emoji: '🌊🌱' },
  { letra: 'O', simbolo: '𓏲', emoji: '🪢' },
  { letra: 'P', simbolo: '𓊪', emoji: '🧘' },
  { letra: 'Q', simbolo: '𓎛', emoji: '⛰️' },
  { letra: 'R', simbolo: '𓏏', emoji: '👄' },
  { letra: 'S', simbolo: '𓋴', emoji: '🧵' },
  { letra: 'T', simbolo: '𓏏', emoji: '🍞' },
  { letra: 'U', simbolo: '𓏲', emoji: '🐤' },
  { letra: 'V', simbolo: '𓆑', emoji: '🐍' },
  { letra: 'W', simbolo: '𓏲', emoji: '🪢' },
  { letra: 'X', simbolo: '𓎡𓋴', emoji: '🧺🧵' },
  { letra: 'Y', simbolo: '𓇌', emoji: '🌱' },
  { letra: 'Z', simbolo: '𓈖', emoji: '🔒' }
];

let seleccionados = [];

function cargarTeclado() {
  const contenedor = document.getElementById("teclado");
  if (!contenedor) return;
  
  contenedor.innerHTML = "";
  alfabetoEgipcio.forEach(item => {
    const btn = document.createElement("button");
    btn.className = "tecla";
    // Muestra únicamente el símbolo jeroglífico en la tecla
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

  // Efecto de animación mística al consultar a Thot
  resDiv.classList.remove("animacion-revelar");
  void resDiv.offsetWidth;
  resDiv.classList.add("animacion-revelar");

  const textoEscrito = seleccionados.map(item => item.letra).join("");

  // Detección especial para la pregunta del universo (solo emojis)
  if (textoEscrito === "COMOSECREOELUNIVERSO") {
    resDiv.innerText = "❓ 🦅 ⛰️ ✨ 🌍 🌌";
    expDiv.innerText = "";
    return;
  }

  // Muestra únicamente los emojis resultantes
  const emojisResultantes = seleccionados.map(item => item.emoji).join(" ");

  resDiv.innerText = emojisResultantes;
  expDiv.innerText = ""; // Mantiene la explicación vacía
}

window.addEventListener("DOMContentLoaded", cargarTeclado);
