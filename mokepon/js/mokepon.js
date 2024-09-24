let ataqueJugador;
let ataquePC;
let resultado;
let vidaJugador = 3;
let vidaPC = 3;

function iniciarJuego() {
  let btnSelecionar = document.getElementById("btn-select");
  btnSelecionar.addEventListener("click", selectMascotaJugador);

  let botonFuego = document.getElementById("btn-fuego");
  botonFuego.addEventListener("click", ataqueFuego);
  let botonAgua = document.getElementById("btn-agua");
  botonAgua.addEventListener("click", ataqueAgua);
  let botonTierra = document.getElementById("btn-tierra");
  botonTierra.addEventListener("click", ataqueTierra);
}

function ataqueFuego() {
  ataqueJugador = "FUEGO";
  ataqueEnemigo();
}
function ataqueAgua() {
  ataqueJugador = "AGUA";
  ataqueEnemigo();
}
function ataqueTierra() {
  ataqueJugador = "TIERRA";
  ataqueEnemigo();
}

function ataqueEnemigo() {
  let ataqueEnemigoAletorio = aleatorio(1, 3);
  if (ataqueEnemigoAletorio == 1) {
    ataquePC = "FUEGO";
  } else if (ataqueEnemigoAletorio == 2) {
    ataquePC = "AGUA";
  } else {
    ataquePC = "TIERRA";
  }

  crearmsj();
}
function combate(resultado) {
  let spanVidaJugador = document.getElementById("vida-jugador");
  let spanVidaPC = document.getElementById("vida-enemiga");

  if (ataqueJugador == ataquePC) {
    resultado = "Empate";
  } else if (ataqueJugador == "FUEGO" && ataquePC == "TIERRA") {
    resultado = "Ganaste";
    vidaPC--;
    spanVidaPC.innerHTML = vidaPC;
  } else if (ataqueJugador == "AGUA" && ataquePC == "FUEGO") {
    resultado = "Ganaste";
    vidaPC--;
    spanVidaPC.innerHTML = vidaPC;
  } else if (ataqueJugador == "TIERRA" && ataquePC == "AGUA") {
    resultado = "Ganaste";
    vidaPC--;
    spanVidaPC.innerHTML = vidaPC;
  } else {
    resultado = "Perdiste";
    vidaJugador--;
    spanVidaJugador.innerHTML = vidaJugador;
  }
  revisarVidas();
  return resultado;
}
function crearmsj() {
  let sectionMensajes = document.getElementById("mensajes");
  let parrafo = document.createElement("p");
  parrafo.innerHTML =
    "Tu mascota ataco con " +
    ataqueJugador +
    ", el enemigo con " +
    ataquePC +
    " " +
    combate();

  sectionMensajes.appendChild(parrafo);
}

function revisarVidas() {
  if (vidaJugador == 0) {
    crearmsjFinal("Perdiste, suerte para la proxima 😣🙇‍♂️");
  } else if (vidaPC == 0) {
    crearmsjFinal("Felicitaciones, ganaste 👌😘😂");
  }
}

function crearmsjFinal(resultadoFinal) {
  let sectionMensajes = document.getElementById("mensajes");
  let parrafo = document.createElement("p");
  parrafo.innerHTML = resultadoFinal;

  sectionMensajes.appendChild(parrafo);
}

function selectMascotaJugador() {
  let inputHipodoge = document.getElementById("hipodoge");
  let inputcapipepo = document.getElementById("capipepo");
  let inputrapigueya = document.getElementById("rapigueya");

  //mascota jgr
  let spanMascotajugador = document.getElementById("jgr-pet");

  if (inputHipodoge.checked) {
    alert("SELECCIONASTE A HIPODOGE");
    spanMascotajugador.innerHTML = "HIPODOGE";
  } else if (inputcapipepo.checked) {
    alert("SELECCIONASTE A CAPIPEPO");
    spanMascotajugador.innerHTML = "CAPIPEPO";
  } else if (inputrapigueya.checked) {
    alert("SELECCIONASTE A RAPIGUEYA");
    spanMascotajugador.innerHTML = "RAPIGUEYA";
  } else {
    alert("SELECCIONA UNA MASCOTA");
  }

  selecionarMarcotaEnemi();
}

function selecionarMarcotaEnemi() {
  let mascota = aleatorio(1, 3);
  let spanMascotaPC = document.getElementById("pc-pet");
  if (mascota == 1) {
    spanMascotaPC.innerHTML = "HIPODOGE";
  } else if (mascota == 2) {
    spanMascotaPC.innerHTML = "CAPIPEPO";
  } else if (mascota == 3) {
    spanMascotaPC.innerHTML = "RAPIGUEYA";
  }
}

function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

window.addEventListener("load", iniciarJuego);
