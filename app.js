// Mapa del alfabeto español a Jeroglíficos Unicode (Unilíteros)
const mapaJeroglificos = {
  'a': '𓄿', 'b': '𓎡', 'c': '𓎡', 'd': '𓂠', 
  'e': '𓇋', 'f': '𓆑', 'g': '𓎡', 'h': '𓉔', 
  'i': '𓇌', 'j': '𓆓', 'k': '𓎡', 'l': '𓃩', 
  'm': '𓅓', 'n': '𓈎', 'o': '𓏲', 'p': '𓊪', 
  'q': '𓎛', 'r': '31', 's': '𓋴', 't': '𓏏', 
  'u': '𓏲', 'v': '𓆑', 'w': '𓏲', 'x': '𓎡𓋴', 
  'y': '𓇌', 'z': '𓈖', ' ': '  '
};

// Mapeo conceptual para palabras completas
const diccionarioPalabras = {
  "sol": "𓇳",
  "rey": "𓀔",
  "agua": "𓈗",
  "casa": "𓉐",
  "dios": "𓊹",
  "ojo": "𓁹",
  "universo": "🌌✨🌍"
};

function convertirEnVivo() {
  const texto = document.getElementById("editor").value.toLowerCase();
  const contenedorResultado = document.getElementById("resultado");

  if (texto.trim() === "") {
    contenedorResultado.innerText = "𓀀";
    return;
  }

  let palabras = texto.split(" ");
  let salida = palabras.map(palabra => {
    if (diccionarioPalabras[palabra]) {
      return diccionarioPalabras[palabra];
    }
    return palabra.split('').map(letra => mapaJeroglificos[letra] || letra).join('');
  });

  contenedorResultado.innerText = salida.join('  ');
}