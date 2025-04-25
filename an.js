const preguntasLengua = [
  { texto: "Que es un sustantivo?", opciones: ["Una accion", "Un objeto o persona", "Una caracteristica", "Un adverbio"], correcta: "Un objeto o persona" },
{ texto: "Cual es un ejemplo de verbo?", opciones: ["Mesa", "Bonito", "Cantar", "Rojo"], correcta: "Cantar" },
{ texto: "Que es un adjetivo?", opciones: ["Describe a un sustantivo", "Es una accion", "Es una preposicion", "Un numero"], correcta: "Describe a un sustantivo" },
{ texto: "Que palabra es un adverbio?", opciones: ["Grande", "Rapidamente", "Libro", "Ellos"], correcta: "Rapidamente" },
{ texto: "Cual es el antonimo de 'feliz'?", opciones: ["Triste", "Contento", "Alegre", "Divertido"], correcta: "Triste" },
{ texto: "Que es un sinonimo?", opciones: ["Palabra parecida en significado", "Palabra contraria", "Palabra inventada", "Palabra con tilde"], correcta: "Palabra parecida en significado" },
{ texto: "Que es una fabula?", opciones: ["Un poema", "Una historia con moraleja", "Una noticia", "Un ensayo"], correcta: "Una historia con moraleja" },
{ texto: "Que signo se usa para cerrar una pregunta?", opciones: [".", "!", ":", "?"], correcta: "?" },
{ texto: "Que tipo de palabra es 'el'?", opciones: ["Verbo", "Pronombre", "Adjetivo", "Adverbio"], correcta: "Pronombre" },
{ texto: "Que es una oracion?", opciones: ["Un verbo", "Un grupo de palabras con sentido", "Una palabra", "Un punto"], correcta: "Un grupo de palabras con sentido" },
{ texto: "Cual es el genero narrativo?", opciones: ["Cuento", "Oda", "Ensayo", "Carta"], correcta: "Cuento" },
{ texto: "Que es un poema?", opciones: ["Texto con versos y rimas", "Texto informativo", "Texto cientifico", "Texto legal"], correcta: "Texto con versos y rimas" },
{ texto: "Que es una silaba?", opciones: ["Letra", "Parte de una palabra", "Palabra completa", "Una frase"], correcta: "Parte de una palabra" },
{ texto: "Que es una metafora?", opciones: ["Comparacion sin usar 'como'", "Una adivinanza", "Un poema", "Un refran"], correcta: "Comparacion sin usar 'como'" },
{ texto: "Que es una comparacion?", opciones: ["Relacion entre dos cosas usando 'como'", "Una definicion", "Una critica", "Un resumen"], correcta: "Relacion entre dos cosas usando 'como'" },
{ texto: "Que es un prefijo?", opciones: ["Parte inicial de una palabra", "Final de la palabra", "Sinonimo", "Antonimo"], correcta: "Parte inicial de una palabra" },
{ texto: "Que es un sufijo?", opciones: ["Parte final de una palabra", "Inicio de una palabra", "Pronombre", "Verbo"], correcta: "Parte final de una palabra" },
{ texto: "Que es un articulo?", opciones: ["Palabra que acompana al sustantivo", "Verbo auxiliar", "Adverbio de lugar", "Sinonimo"], correcta: "Palabra que acompana al sustantivo" },
{ texto: "Cual es un articulo definido?", opciones: ["El", "Un", "Alguno", "Muchos"], correcta: "El" },
{ texto: "Cual es un articulo indefinido?", opciones: ["Un", "El", "Este", "Aquel"], correcta: "Un" },
{ texto: "Que es una conjuncion?", opciones: ["Une palabras u oraciones", "Adjetivo", "Verbo", "Pronombre"], correcta: "Une palabras u oraciones" },
{ texto: "Que es una preposicion?", opciones: ["Palabra que indica lugar, tiempo o causa", "Verbo principal", "Sustantivo comun", "Adjetivo calificativo"], correcta: "Palabra que indica lugar, tiempo o causa" },
{ texto: "Que es una narracion?", opciones: ["Relato de hechos reales o imaginarios", "Una explicacion cientifica", "Una critica", "Una metafora"], correcta: "Relato de hechos reales o imaginarios" },
{ texto: "Que es una descripcion?", opciones: ["Detallar como es algo", "Contar un hecho", "Inventar una historia", "Hacer un resumen"], correcta: "Detallar como es algo" },
{ texto: "Que es el sujeto de una oracion?", opciones: ["De quien se habla", "La accion", "El final", "La coma"], correcta: "De quien se habla" },
{ texto: "Que es el predicado?", opciones: ["Lo que se dice del sujeto", "Nombre del sujeto", "Un articulo", "Una letra"], correcta: "Lo que se dice del sujeto" },
{ texto: "Que son los signos de puntuacion?", opciones: ["Marcas para organizar el texto", "Numeros romanos", "Pronombres", "Letras"], correcta: "Marcas para organizar el texto" },
{ texto: "Que signo indica emocion?", opciones: ["!", "?", ".", ","], correcta: "!" },
{ texto: "Que signo separa elementos en una lista?", opciones: [",", ".", ":", "?"], correcta: "," },
{ texto: "Que es una biografia?", opciones: ["Relato de la vida de alguien", "Un poema", "Una receta", "Una noticia"], correcta: "Relato de la vida de alguien" },
{ texto: "Que es una autobiografia?", opciones: ["Relato escrito por uno mismo sobre su vida", "Una historia inventada", "Un informe", "Un poema"], correcta: "Relato escrito por uno mismo sobre su vida" },
{ texto: "Que es un cuento?", opciones: ["Narracion breve y ficticia", "Articulo de opinion", "Poema largo", "Texto legal"], correcta: "Narracion breve y ficticia" },
{ texto: "Que es el mensaje en una comunicacion?", opciones: ["Lo que se quiere transmitir", "El receptor", "El telefono", "El codigo"], correcta: "Lo que se quiere transmitir" },
{ texto: "Que es el emisor en la comunicacion?", opciones: ["El que envia el mensaje", "El que escucha", "El canal", "El contenido"], correcta: "El que envia el mensaje" },
{ texto: "Que es el receptor?", opciones: ["El que recibe el mensaje", "El que lo escribe", "El canal", "La idea"], correcta: "El que recibe el mensaje" },
{ texto: "Que es el canal en la comunicacion?", opciones: ["Medio por el que se transmite el mensaje", "El mensaje mismo", "El lenguaje", "La idea principal"], correcta: "Medio por el que se transmite el mensaje" },
{ texto: "Que es el contexto en la comunicacion?", opciones: ["Situacion en que ocurre la comunicacion", "El contenido del mensaje", "La estructura del poema", "El titulo del cuento"], correcta: "Situacion en que ocurre la comunicacion" },
{ texto: "Que es un dialogo?", opciones: ["Intercambio de palabras entre dos o mas personas", "Una carta", "Una biografia", "Un informe"], correcta: "Intercambio de palabras entre dos o mas personas" },
{ texto: "Que es una oracion interrogativa?", opciones: ["Pregunta", "Exclamacion", "Declaracion", "Negacion"], correcta: "Pregunta" },
{ texto: "Que es una oracion exclamativa?", opciones: ["Expresa emocion", "Una pregunta", "Una afirmacion", "Un mandato"], correcta: "Expresa emocion" },
{ texto: "Que es una oracion negativa?", opciones: ["Niega algo", "Afirma algo", "Pregunta", "Ordena"], correcta: "Niega algo" },
{ texto: "Que es una oracion afirmativa?", opciones: ["Asegura algo", "Niega", "Pregunta", "Exclama"], correcta: "Asegura algo" },
{ texto: "Que es una novela?", opciones: ["Narracion extensa y compleja", "Un poema", "Un ensayo", "Un reportaje"], correcta: "Narracion extensa y compleja" },
{ texto: "Que es un ensayo?", opciones: ["Texto que expresa ideas y reflexiones", "Un cuento", "Un poema", "Una biografia"], correcta: "Texto que expresa ideas y reflexiones" },
{ texto: "Que es una rima?", opciones: ["Repeticion de sonidos al final de los versos", "Una descripcion", "Un sustantivo", "Un adverbio"], correcta: "Repeticion de sonidos al final de los versos" },
{ texto: "Que es un verso?", opciones: ["Linea de un poema", "Capitulo", "Frase larga", "Una silaba"], correcta: "Linea de un poema" },
{ texto: "Que es una estrofa?", opciones: ["Conjunto de versos en un poema", "Una palabra", "Una silaba", "Un parrafo"], correcta: "Conjunto de versos en un poema" },
{ texto: "Las personas se comunican mediante la lengua?", opciones: ["Identidad", "Oral", "Salud"], correcta: "Oral" },
{ texto: "La lengua escrita a diferencia de la lengua oral, es totalmente?", opciones: ["Util", "Inexplicada", "Artificial"], correcta: "Artificial" },
{ texto: "En la comunicacion oral, la comunicacion es?", opciones: ["Inmediata", "Comunicativa", "Necesaria"], correcta: "Inmediata" }
];

let respuestas = [];
let temporizador;
let tiempoRestante = 1800; // 30 minutos en segundos
let cuestionarioTerminado = false;

function actualizarTemporizador() {
const minutos = Math.floor(tiempoRestante / 60);
const segundos = tiempoRestante % 60;
document.getElementById("tiempo").textContent = 
  `${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`;

if (tiempoRestante <= 0) {
  clearInterval(temporizador);
  mostrarResultados();
  alert("¡Se acabó el tiempo!");
} else {
  tiempoRestante--;
}
}

function iniciarTemporizador() {
// Limpiar cualquier temporizador existente antes de iniciar uno nuevo
if (temporizador) {
  clearInterval(temporizador);
}

tiempoRestante = 1800; // Resetear a 30 minutos
actualizarTemporizador(); // Actualizar inmediatamente para mostrar tiempo inicial
temporizador = setInterval(actualizarTemporizador, 1000);
}

function generarPreguntas() {
let quizForm = document.getElementById("quizForm");
quizForm.innerHTML = ""; // Limpiar el formulario antes de generar preguntas

preguntasLengua.forEach((pregunta, index) => {
  let divPregunta = document.createElement("div");
  divPregunta.classList.add("pregunta");
  divPregunta.id = `pregunta-container-${index}`;
  
  // Crear el select con las opciones
  let selectHTML = `
    <select name="pregunta${index}" id="pregunta${index}">
      <option value="">-- Selecciona una respuesta --</option>
      ${pregunta.opciones.map(opcion => `<option value="${opcion}">${opcion}</option>`).join("")}
    </select>
  `;
  
  divPregunta.innerHTML = `
    <p>${index + 1}. ${pregunta.texto}</p>
    <div class="opciones">
      ${selectHTML}
    </div>
  `;
  quizForm.appendChild(divPregunta);
});

// Iniciar el temporizador cuando se generan las preguntas
iniciarTemporizador();

// Resetear variable de cuestionario terminado
cuestionarioTerminado = false;

// Mostrar el botón para enviar respuestas
document.getElementById("btnEnviar").style.display = "block";

// Ocultar el botón de reinicio si existe
if (document.getElementById("btnReiniciar")) {
  document.getElementById("btnReiniciar").style.display = "none";
}

// Ocultar área de resultados
document.getElementById("resultados").innerHTML = "";
}

function mostrarResultados() {
// Si el cuestionario ya fue terminado, no hacer nada
if (cuestionarioTerminado) {
  return;
}

// Marcar como terminado
cuestionarioTerminado = true;

// Detener el temporizador cuando se muestran los resultados
clearInterval(temporizador);

// Recoger las respuestas
respuestas = [];
preguntasLengua.forEach((pregunta, index) => {
  let selectElement = document.getElementById(`pregunta${index}`);
  let respuestaSeleccionada = selectElement ? selectElement.value : "";
  respuestas.push(respuestaSeleccionada);
});

// Calcular aciertos
let aciertos = 0;
respuestas.forEach((respuesta, index) => {
  if (respuesta === preguntasLengua[index].correcta) {
    aciertos++;
  }
});

// Deshabilitar todos los selects para que no se puedan cambiar las respuestas
preguntasLengua.forEach((_, index) => {
  let selectElement = document.getElementById(`pregunta${index}`);
  if (selectElement) {
    selectElement.disabled = true;
  }
});

// Mostrar solo el resultado final sin detalle de cuáles son correctas/incorrectas
document.getElementById("resultados").innerHTML = `
  <div class="resultado-final">
    <h3>Tu resultado</h3>
    <div class="puntaje">
      <span class="puntos">${aciertos}</span>
      <span class="divisor">/</span>
      <span class="total">${preguntasLengua.length}</span>
    </div>
    <p class="mensaje">Has respondido correctamente ${aciertos} de ${preguntasLengua.length} preguntas.</p>
    <button id="btnReiniciar" onclick="reiniciarCuestionario()">Reiniciar Cuestionario</button>
  </div>
`;

// Ocultar el botón de enviar respuestas
document.getElementById("btnEnviar").style.display = "none";

// Hacer scroll hacia los resultados
document.getElementById("resultados").scrollIntoView({ behavior: "smooth" });
}

function reiniciarCuestionario() {
// Reiniciar el cuestionario generando nuevas preguntas
generarPreguntas();

// Limpiar área de resultados
document.getElementById("resultados").innerHTML = "";

// Hacer scroll hacia arriba al inicio del cuestionario
document.getElementById("cuestionarioContainer").scrollIntoView({ behavior: "smooth" });
}

function iniciarSesion() {
const usuario = document.getElementById("usuario").value;
const contrasena = document.getElementById("contrasena").value;

if (usuario === "admin2" && contrasena === "1234") {
  document.getElementById("loginContainer").classList.add("oculto");
  document.getElementById("cuestionarioContainer").classList.remove("oculto");
  generarPreguntas();
} else {
  document.getElementById("loginError").innerText = "Usuario o contraseña incorrectos.";
}
}

// Evento para comprobar si la página ha sido recargada
window.onload = function() {
// Comprueba si hay un cuestionario visible
if (!document.getElementById("cuestionarioContainer").classList.contains("oculto")) {
  generarPreguntas();
}
};