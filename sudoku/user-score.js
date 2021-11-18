const divScore = document.querySelector('.score');
const nombre = document.querySelector('.nombre');
let arrayScore = new Array;

class userScore {
    constructor(name, score) {
        this.name = name;
        this.score = score;
    }
}

function getScore() {
    let dificultad = (document.querySelector('#dificultad').value) / 2;
    let tiempo = count;
    let score = 30000 * dificultad / tiempo;
    return score.toFixed(0);
}

function imprScore() {
    divScore.innerHTML = getScore();
}

function crearUserScores() {
    let usuarioActual = new userScore(nombre.value, getScore());
    arrayScore.push(usuarioActual);
}

function guardarUserScores() {
    crearUserScores();
    localStorage.setItem('userScores', JSON.stringify(arrayScore));
}

function cargarUserScores() {
    let recuperarScore = localStorage.getItem('userScores');
    if (recuperarScore != null) {
        arrayScore = JSON.parse(recuperarScore);
    }
}

function imprRespuesta(respuesta) {
    let answer = document.querySelector('#highScores');
    answer.innerHTML += respuesta;
}

function imprHighScore() {
    let topFive = [...arrayScore];
    topFive.sort((a, b) => {
        return b.score - a.score
    });
    let topSorted = topFive.slice(0, 5);

    for (i = 0; i < 5; i++) {
        let nombre = topSorted[i].name;
        let score = topSorted[i].score;
        imprRespuesta(
            `<tr>
        <td>${nombre}</td>
        <td>${score}</td>
        </tr>`
        )
    }
}
