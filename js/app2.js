const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
let intentos = 0;

const numeroAdivinar = document.getElementById("numeroAdivinar");
const inputAdivina = document.getElementById("adivinaInput");
const botonAdivina = document.getElementById("adivinaButton");

numeroAdivinar.textContent = "?";

botonAdivina.addEventListener("click", function () {
  const intento = parseInt(inputAdivina.value);
  intentos++;

  if (intento === numeroAleatorio) {
    numeroAdivinar.textContent = numeroAleatorio;
    inputAdivina.value = "";
    alert(`¡Felicidades! Adivinaste el número en ${intentos} intentos.`);
    botonAdivina.disabled = true;
  } else if (intento < numeroAleatorio) {
    alert("El número es mayor. Sigue intentando.");
  } else {
    alert("El número es menor. Sigue intentando.");
  }
});
