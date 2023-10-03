const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
let intentos = 0;

while (true) {
  const intento = prompt("Adivina el número (entre 1 y 100):");
  intentos++;

  if (!intento) break;

  const numero = parseInt(intento);

  if (numero === numeroAleatorio) {
    alert(`¡Felicidades! Adivinaste el número en ${intentos} intentos.`);
    break;
  } else if (numero < numeroAleatorio) {
    alert("El número es mayor. Sigue intentando.");
  } else {
    alert("El número es menor. Sigue intentando.");
  }
}
