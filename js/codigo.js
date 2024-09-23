function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
function eleccion(jugada) {
  let result = "";
  if (jugada == 1) {
    result = "Elegiste papel";
  } else if (jugada == 2) {
    result = "Elegiste tijera";
  } else if (jugada == 3) {
    result = "Elegiste piedra";
  } else {
    result = "Elejiste Perder";
  }
  return result;
}
let jugador = 0;

let pc = 0;
let triunfo = 0;
let perdidas = 0;

while (triunfo < 3 && perdidas < 3) {
  pc = aleatorio(1, 3);
  jugador = prompt(
    "Elije una opción: 1 para papel, 2 para tijera, 3 para piedra"
  );

  alert("jugador " + eleccion(jugador));
  alert("pc " + eleccion(pc));
  //combate
  if (jugador == pc) {
    alert("Empate");
  } else if (jugador == 1 && pc == 3) {
    alert("Ganaste");
    triunfo++;
  } else if (jugador == 2 && pc == 1) {
    alert("Ganaste");
    triunfo++;
  } else if (jugador == 3 && pc == 2) {
    alert("Ganaste");
    triunfo++;
  } else {
    alert("Perdiste");
    perdidas++;
  }
}
if (triunfo == 3) {
  alert("Ganaste el juego" + triunfo + "veces que perdiste" + perdidas);
} else {
  alert("Perdiste el juego" + triunfo + "veces que perdiste" + perdidas);
}
