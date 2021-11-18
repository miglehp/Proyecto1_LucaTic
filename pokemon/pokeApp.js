import Usuario from "./usuario.js";
import {
  pokeName,
  isLegendary,
  types,
  pokeId,
  imgPokemon,
  traerPokemon
} from "./pokeFetch.js";

let valorNombre = '';

let textoPista = document.querySelector("#texto-carta");

let validar = document.querySelector("#boton-validar");
let aciertosTexto = document.querySelector("#aciertos");
let intentosTexto = document.querySelector("#intentos");
let tablaJuego = document.getElementById("juego")


let intentosRestantes = 3;
let numRespuestaCorrecta = 0;
let genPoke;

function crearUsuario() {
  //maria
  if (nombre.value.trim().length > 0) {
    //esto es lo que estaba dentro de crearUsuario que lo metí dentro del if
    let nombreUsuario = document.getElementById("nombre").value;
    let usuario = new Usuario(nombreUsuario, 0);
    //Guarda el usuario creado en el localStorage para pedirlo luego 
    localStorage.setItem("usuario", JSON.stringify(usuario))

  } else {
    nombre.classList.add('input-err');
    setTimeout(() => {
      nombre.classList.remove('input-err');
      nombre.focus();
    }, 500);
  }
  //aqui termina lo que modificó maria
}
const mostrarScore = function () {
  
  let scores = JSON.parse(localStorage.getItem("scores"))
  let usuario1 = JSON.parse(localStorage.getItem("usuario"))
  //Copia de los scores predeterminados
  //-Joseba
  //Evalua el valor de intentos para sumar el total de puntaje 
  //-Joseba
  if (intentosRestantes === 0) {
    document.getElementById("agradecimiento").classList.remove("hidden");
    usuario1.puntuacion = numRespuestaCorrecta * 50;
    //Desabilita el boton para dejar de intentar
    //-Joseba
    validar.disabled = true
    localStorage.setItem("usuario", JSON.stringify(usuario1))
    localStorage.setItem("scores", JSON.stringify([usuario1, ...scores]))

    bestScores()

  }

  console.log(usuario1)

}

const resetGame = function () {
  location.reload()
}

const bestScores = function () {
  let highScores = JSON.parse(localStorage.getItem("scores"))
  let topFive = [...highScores]
  topFive.sort((a, b) => {
    return b.puntuacion - a.puntuacion
  })
  let topSorted = topFive.slice(0, 5)
  let displayScores = topSorted.map((data) => {
    return `${data.nombre}: ${data.puntuacion}`
  })
  tablaJuego.classList.add("hidden")

  let ol = document.createElement("ol");
  let resetBtn = document.getElementById("boton-reiniciar")

  let scoreBoard = document.getElementById("puntuacion")
  scoreBoard.insertBefore(ol, resetBtn)
  scoreBoard.classList.remove("hidden")

  displayScores.forEach((value) => {
    let li = document.createElement("li")
    ol.appendChild(li)
    li.innerText = value
  })
  resetBtn.addEventListener("click", resetGame)
  console.log("qlq", topFive, topSorted, displayScores)
}




//funcion para saber de que generacion es el pokemon
function queGeneracion() {
  if (pokeId >= 1 && pokeId <= 151) {
    genPoke = "El pokemon es de primera generación.";
  } else if (pokeId >= 152 && pokeId <= 251) {
    genPoke = "El pokemon es de segunda generación.";
  } else if (pokeId >= 252 && pokeId <= 386) {
    genPoke = "El pokemon es de tercera generación.";
  } else if (pokeId >= 387 && pokeId <= 493) {
    genPoke = "El pokemon es de cuarta generación.";
  } else if (pokeId >= 494 && pokeId <= 649) {
    genPoke = "El pokemon es de quinta generación.";
  } else if (pokeId >= 650 && pokeId <= 721) {
    genPoke = "El pokemon es de sexta generación.";
  } else if (pokeId >= 722 && pokeId <= 809) {
    genPoke = "El pokemon es de séptima generación.";
  } else if (pokeId >= 810 && pokeId <= 898) {
    genPoke = "El pokemon es de octava generación.";
  }
  return genPoke;
}

//funcion para cambiar la silueta del pokemon
function cambiarPokemon() {
  traerPokemon();
  imgPokemon.classList.add("oculto");
  document.getElementById("nombre-pokemon").value = "";
  document.getElementById("texto-carta").innerHTML = "";
}

function pintarEstadisticas() {
  intentosTexto.innerHTML = `Intentos restantes: ${intentosRestantes}`;
  aciertosTexto.innerHTML = `Aciertos: ${numRespuestaCorrecta}`;
}

function validarRespuesta() {
  //guardamos el valor que el usuario escribe en el imput
  valorNombre = document.querySelector("#nombre-pokemon").value;
  valorNombre = valorNombre.toLowerCase();
  const sumarScore = function () {
    return numRespuestaCorrecta++
  }
  const contarIntentos = function () {
    const negative = intentosRestantes <= 0 ? intentosRestantes = 0 : intentosRestantes--;
    return negative
  }

  //comparamos el valor que pone el usuario con la variable que guarda el nombre del pokemon actual
  if (valorNombre == pokeName) {
    //window.alert("respuesta correcta");
    document.getElementById("correcto").classList.remove("hidden");
    sumarScore()
    setTimeout(() => {
      cambiarPokemon();
    }, 1000);
    aciertosTexto.innerHTML = `Aciertos: ${numRespuestaCorrecta}`;
  } else {
    //window.alert("respuesta incorrecta");
    document.getElementById("incorrecto").classList.remove("hidden");
    contarIntentos()
    intentosTexto.innerHTML = `Intentos restantes: ${intentosRestantes}`;
  }
  console.log(numRespuestaCorrecta, intentosRestantes);
  mostrarScore()

}

//funcion para que segun un num aleatorio imprima una pista en pantalla
function mostrarPista() {
  let aleatorio = Math.floor((Math.random() * 5))

  switch (aleatorio) {
    case 0:
    case 1:
      imgPokemon.classList.remove("oculto");
      textoPista.innerHTML = "aqui tienes los coloritos de la imagen";
      break;

    case 2:
      let tipo2 = " ";
      try {
        if (types.length = 2) {
          tipo2 = types[1].type.name;
        }
      } catch (err) {
        console.log("Este pokemon no tiene tipo secundario");
      }
      textoPista.innerHTML = `El pokemon es de tipo: ${types[0].type.name}  ${tipo2}`;
      break;

    case 3:
      if (isLegendary == true) {
        textoPista.innerHTML = `El pokemon es legendario`;
      } else {
        textoPista.innerHTML = `El pokemon no es legendario`;
      }
      break;
    case 4:
      queGeneracion();
      textoPista.innerHTML = genPoke;
      break;
  }

}

//función para ocultar ventana de agradecimiento
function cerrarAgradecimiento(){
  document.getElementById("agradecimiento").classList.add("hidden");
}

//función para ocultar ventana de correcto
function cerrarCorrecto(){
  document.getElementById("correcto").classList.add("hidden");
}

//función para ocultar ventana de incorrecto
function cerrarIncorrecto(){
  document.getElementById("incorrecto").classList.add("hidden");
}

pintarEstadisticas()

//boton para crear un objeto de tipo usuario
let newuser = document.getElementById("boton-comenzar");
newuser.addEventListener("click", crearUsuario);
//añadimos al boton de validar la funcion para validar la respuesta
validar.addEventListener("click", validarRespuesta);
//añadimos al boton de mostar pista la funcion para mostrar la pista
let pista = document.querySelector("#boton-pista");
pista.addEventListener("click", mostrarPista);

//para cerrar la ventana modal de agradecimiento
let ventanaAgradecimiento = document.getElementById("continuarHighscore");
ventanaAgradecimiento.addEventListener("click", cerrarAgradecimiento);

//para cerrar la ventana modal de acierto
let ventanaCorrecto = document.getElementById("continuarCorrecto");
ventanaCorrecto.addEventListener("click", cerrarCorrecto);

//para cerrar la ventana modal de error
let ventanaIncorrecto = document.getElementById("continuarIncorrecto");
ventanaIncorrecto.addEventListener("click", cerrarIncorrecto);

export {
  validarRespuesta,
  valorNombre,
  intentosRestantes,
  numRespuestaCorrecta,
  queGeneracion,
  genPoke
};