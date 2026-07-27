// Alfabeto completo (Letra en español -> Jeroglífico Unilítero real)
const alfabetoEgipcio = [
  { letra: 'A', simbolo: '𓄿' }, // Buitre
  { letra: 'B', simbolo: '𓎡' }, // Pie/Pierna
  { letra: 'C', simbolo: '𓎡' }, // Cesta (Mismo sonido 'K')
  { letra: 'D', simbolo: '𓂠' }, // Mano
  { letra: 'E', simbolo: '𓇋' }, // Junco
  { letra: 'F', simbolo: '𓆑' }, // Víbora cornuda
  { letra: 'G', simbolo: '𓎡' }, // Jarra de agua
  { letra: 'H', simbolo: '𓉔' }, // Choza
  { letra: 'I', simbolo: '𓇌' }, // Dos juncos
  { letra: 'J', simbolo: '𓆓' }, // Serpiente
  { letra: 'K', simbolo: '𓎡' }, // Cesta con asa
  { letra: 'L', simbolo: '𓃩' }, // León
  { letra: 'M', simbolo: '𓅓' }, // Búho
  { letra: 'N', simbolo: '𓈎' }, // Agua
  { letra: 'Ñ', simbolo: '𓈎𓇌' }, // Combinación N + I
  { letra: 'O', simbolo: '𓏲' }, // Cuerda trenzada
  { letra: 'P', simbolo: '𓊪' }, // Estera de juncos
  { letra: 'Q', simbolo: '𓎛' }, // Ladera de montaña
  { letra: 'R', simbolo: '𓏏' }, // Boca
  { letra: 'S', simbolo: '𓋴' }, // Tela plegada
  { letra: 'T', simbolo: '𓏏' }, // Pan
  { letra: 'U', simbolo: '𓏲' }, // Cuerda/Polluelo
  { letra: 'V', simbolo: '𓆑' }, // Víbora (Mismo sonido F)
  { letra: 'W', simbolo: '𓏲' }, // Cuerda
  { letra: 'X', simbolo: '𓎡𓋴' }, // Combinación K + S
  { letra: 'Y', simbolo: '𓇌' }, // Dos juncos
  { letra: 'Z', simbolo: '𓈖' }  // Cerrojo de puerta
];

// Diccionario de interpretación semántica a Emojis
const diccionario = {
  "𓄿": { emojis: "🦅 ✨", explicacion: "A - Buitre / Fuerza" },
  "𓎡": { emojis: "🦶 🚶", explicacion: "B/C/K - Pie / Movimiento" },
  "𓂠": { emojis: "✋ 🛠️", explicacion: "D - Mano / Acción" },
  "𓇋": { emojis: "🌿 🌾", explicacion: "E - Junco / Naturaleza" },
  "𓆑": { emojis: "🐍 ⚡", explicacion: "F/V - Víbora / Alerta" },
  "𓉔": { emojis: "🏠 🏛️", explicacion: "H - Refugio / Casa" },
  "𓇌": { emojis: "✨ 🌱", explicacion: "I/Y - Dualidad vegetal" },
  "𓆓": { emojis: "🐉 🔮", explicacion: "J - Serpiente / Misterio" },
  "𓃩": { emojis: "🦁 👑", explicacion: "L - León / Realeza" },
  "𓅓": { emojis: "🦉 🌙", explicacion: "M - Búho / Sabiduría" },
  "𓈎": { emojis: "🌊 🩵", explicacion: "N - Agua / Fluidez" },
  "𓏲": { emojis: "🪢 📜", explicacion: "O/U/W - Cuerda / Unión" },
  "𓊪": { emojis: "🧘 🟫", explicacion: "P - Estera / Cimiento" },
  "𓎛": { emojis: "⛰️ 🌅", explicacion: "Q - Montaña / Elevación" },
  "𓏏": { emojis: "🗣️ 👄", explicacion: "R/T - Boca / Palabra / Pan" },
  "𓋴": { emojis: "👕 🧵", explicacion: "S - Tela / Vestidura" },
  "𓈖": { emojis: "🔒 🛡️", explicacion: "Z - Cerrojo / Protección" }
};

let seleccionados = [];

// Función para dibujar los botones con la letra y el símbolo
function cargarTeclado() {
  const contenedor = document.getElementById("teclado");
  if (!contenedor) return;
  
  contenedor.innerHTML = "";
  alfabetoEgipcio.forEach(item => {
    const btn = document.createElement("button");
    btn.className = "tecla";
    // Muestra la letra del abecedario y su jeroglífico debajo
    btn.innerHTML = `<small style="font-size: 0.8rem; display:block; color: #8b5a2b;">${item.letra}</small>${item.simbolo}`;
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

window.addEventListener("DOMContentLoaded", cargarTeclado);
