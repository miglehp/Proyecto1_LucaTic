//import * as pepe from '../localStorage.js';

class Usuario {
    constructor(nombre, puntuacion) {
        this.nombre = nombre;
        this.puntuacion = puntuacion;
    }

    get nuevoScore() {
        return this.puntuacion;
    }

    set nuevoScore(newScore) {
        this.puntuacion = newScore;
    }
}

//Lista de scores predeterminados
const highScores = [{
        nombre: "Red",
        puntuacion: 9999
    }, {
        nombre: "Ash",
        puntuacion: 2500
    },
    {
        nombre: "Misty",
        puntuacion: 2000
    },
]

//Crear primera entrada de scores en la pagina
const setScore = function () {

    let checkUsers = JSON.parse(localStorage.getItem("scores"))

    /*let checkUsers = JSON.parse = jest.fn().mockImplementationOnce(() => {
        localStorage.getItem("scores")
      });*/

    //Revisa la existencia de un array ya existente para crear uno base o no
    let existingUsers = checkUsers ? "" : localStorage.setItem("scores", JSON.stringify(highScores))

    return existingUsers



}
setScore()





export {

    setScore

}

export default Usuario;
//module.exports = {Usuario,highScores};