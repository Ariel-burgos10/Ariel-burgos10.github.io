// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Clear blue water", time: 27 },
  { text: "high tide came and brought you in", time: 30 },
  { text: "And I could go on and on, on and on, and i will", time: 34 },
  { text: "Skies grew darker", time: 37 },
  { text: "Currents swept you out again", time: 43 },
  { text: "And you were just gone and gone, gone and gone", time: 47 },
  { text: "In silent screams", time: 53 },
  { text: "In wildest dreams", time: 54 },
  { text: "I never dreamed of thise", time: 59 },
  { text: "This love is good", time: 62 },
  { text: "This love is bad", time: 64 },
  { text: "This love is alive back from the dead, oh, oh, oh", time: 66 },
  { text: "These hands had to let it go free, and", time: 70 },
  { text: "This love came back to me, oh, oh, oh", time: 75 },
  { text: "Ohh", time: 80 },
  { text: "Tossing, turning", time: 93 },
  { text: "Struggled through the night with someone new", time: 95 },
  { text: "And I could go on and on, on and on", time: 101 },
  { text: "Lantern, burning", time: 106 },
  { text: "Flickered in the night, only you", time: 110 },
  { text: "But you were still gone, gone, gone", time: 119 },
  { text: "In losing grip", time: 124 },
  { text: "On sinking ships", time: 126 },
  { text: "You showed up just in time", time: 129 },
  { text: "This love is good", time: 132 },
  { text: "This love is bad", time: 132 },
  { text: "This love is alive back from the dead, oh, oh, oh", time: 134 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);