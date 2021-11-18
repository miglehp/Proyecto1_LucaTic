let sudokuFacil = {
    a: [9, 6, 3, 1, 7, 4, 2, 5, 8],
    b: [1, 7, 8, 3, 2, 5, 6, 4, 9],
    c: [2, 5, 4, 6, 8, 9, 7, 3, 1],
    d: [8, 2, 1, 4, 3, 7, 5, 9, 6],
    e: [4, 9, 6, 8, 5, 2, 3, 1, 7],
    f: [7, 3, 5, 9, 6, 1, 8, 2, 4],
    g: [5, 8, 9, 7, 1, 3, 4, 6, 2],
    h: [3, 1, 7, 2, 4, 6, 9, 8, 5],
    i: [6, 4, 2, 5, 9, 8, 1, 7, 3]
}

let sudokuFacilVacio = {
    a: [0, 6, 0, 1, 0, 4, 0, 5, 0],
    b: [0, 0, 8, 3, 0, 5, 6, 0, 0],
    c: [2, 0, 0, 0, 0, 0, 0, 0, 1],
    d: [8, 0, 0, 4, 0, 7, 0, 0, 6],
    e: [0, 0, 6, 0, 0, 0, 3, 0, 0],
    f: [7, 0, 0, 9, 0, 1, 0, 0, 4],
    g: [5, 0, 0, 0, 0, 0, 0, 0, 2],
    h: [0, 0, 7, 2, 0, 6, 9, 0, 0],
    i: [0, 4, 0, 5, 0, 8, 0, 7, 0]
}

let sudokuInter = {
    a: [7, 4, 1, 9, 5, 2, 8, 6, 3],
    b: [5, 2, 6, 8, 4, 3, 1, 7, 9],
    c: [9, 8, 3, 6, 7, 1, 5, 2, 4],
    d: [4, 5, 9, 1, 3, 7, 2, 8, 6],
    e: [6, 7, 2, 4, 9, 8, 3, 5, 1],
    f: [1, 3, 8, 2, 6, 5, 9, 4, 7],
    g: [8, 6, 4, 5, 1, 9, 7, 3, 2],
    h: [2, 1, 7, 3, 8, 4, 6, 9, 5],
    i: [3, 9, 5, 7, 2, 6, 4, 1, 8]
}

let sudokuIntervacio = {
    a: [0, 0, 1, 9, 0, 2, 0, 0, 0],
    b: [5, 2, 6, 8, 0, 0, 1, 0, 9],
    c: [0, 0, 0, 0, 0, 1, 5, 0, 0],
    d: [4, 0, 0, 0, 3, 7, 2, 0, 0],
    e: [6, 7, 2, 0, 0, 0, 0, 5, 0],
    f: [1, 3, 0, 2, 0, 0, 0, 4, 7],
    g: [8, 6, 0, 0, 0, 9, 7, 0, 0],
    h: [2, 0, 0, 0, 8, 0, 0, 9, 0],
    i: [0, 0, 5, 0, 2, 6, 4, 0, 8]
}

let sudokuDificil = {
    a: [6, 5, 9, 2, 3, 4, 1, 8, 7],
    b: [2, 4, 8, 1, 5, 7, 6, 3, 9],
    c: [7, 3, 1, 9, 6, 8, 2, 4, 5],
    d: [8, 9, 3, 7, 1, 5, 4, 2, 6],
    e: [4, 1, 6, 3, 9, 2, 7, 5, 8],
    f: [5, 7, 2, 8, 4, 6, 3, 9, 1],
    g: [9, 8, 7, 4, 2, 1, 5, 6, 3],
    h: [1, 2, 5, 6, 8, 3, 9, 7, 4],
    i: [3, 6, 4, 5, 7, 9, 8, 1, 2]
}

let sudokuDificilVacio = {
    a: [0, 5, 0, 2, 0, 4, 0, 0, 7],
    b: [0, 0, 8, 0, 0, 0, 6, 3, 0],
    c: [7, 3, 0, 0, 0, 8, 2, 0, 5],
    d: [0, 9, 0, 7, 0, 0, 0, 2, 0],
    e: [4, 0, 6, 3, 0, 0, 7, 0, 0],
    f: [0, 0, 0, 8, 4, 6, 3, 0, 0],
    g: [0, 0, 0, 0, 0, 0, 5, 6, 0],
    h: [0, 2, 0, 0, 0, 0, 0, 0, 0],
    i: [3, 0, 0, 5, 0, 9, 8, 0, 0]
}

class Sudoku {
    constructor(x, y) {
        this.completo = x,
        this.vacio = y
    }
}
let setSudoku;

function setDificultad() {

    let dificultad = document.querySelector('#dificultad').value

    function selectDif(n1) {

        switch (n1) {
            case '1':
                setSudoku = new Sudoku (sudokuFacil, sudokuFacilVacio);
                break;
            case '2':
                setSudoku = new Sudoku (sudokuInter, sudokuIntervacio);
                break;
            case '3':
                setSudoku = new Sudoku (sudokuDificil, sudokuDificilVacio);
                break;
        }
    }

    selectDif(dificultad)
    
}

module.exports = {sudokuFacil, sudokuFacilVacio, setDificultad, Sudoku}