const rellenarCasilla = require('./casillas').rellenarCasilla;
const casillasArray = require('./casillas').casillasArray;
const Casilla = require('./casillas').Casilla;
const Sudoku = require('./sudoku').Sudoku;
const sudokuFacil = require('./sudoku').sudokuFacil;
const sudokuFacilVacio = require('./sudoku').sudokuFacilVacio;

test('SudokuFacial tiene las propriedades a,b,c,d,e,f,g,h,i ', () => {
    expect(sudokuFacil).toHaveProperty('a');
    expect(sudokuFacil).toHaveProperty('b');
    expect(sudokuFacil).toHaveProperty('c');
    expect(sudokuFacil).toHaveProperty('d');
    expect(sudokuFacil).toHaveProperty('e');
    expect(sudokuFacil).toHaveProperty('f');
    expect(sudokuFacil).toHaveProperty('g');
    expect(sudokuFacil).toHaveProperty('h');
    expect(sudokuFacil).toHaveProperty('i');
});

describe("Casilla", () => {
    const casilla = new Casilla(1, 2, 3, 3);
    const casilla2 = new Casilla(1, 2, 3, 4);

    test("esCorrecto es una function()", () => {
        expect(typeof casilla.esCorrecto).toBe("function");
    });

    test("esCorrecto devuelve True con casilla1", () => {
        expect(casilla.esCorrecto()).toBe(true);
    })

    test("esCorrecto devuelve False con casilla2", () => {
        expect(casilla2.esCorrecto()).toBe(false);
    })
});

describe("RellenarCasilla", () => {
    let sudokuContainer = {
        vacio: sudokuFacilVacio,
        completo: sudokuFacil
    }

    document.body.innerHTML = `
    <div class="row">
        <div class="col"><input type="number" id="a1"></div>
        <div class="col"><input type="number" id="a2"></div>
        <div class="col border_right"><input type="number" id="a3"></div>
        <div class="col"><input type="number" id="a4"></div>
        <div class="col"><input type="number" id="a5"></div>
        <div class="col border_right"><input type="number" id="a6"></div>
        <div class="col"><input type="number" id="a7"></div>
        <div class="col"><input type="number" id="a8"></div>
        <div class="col"><input type="number" id="a9"></div>

    </div>
    <div class="row">
        <div class="col"><input type="number" id="b1"></div>
        <div class="col"><input type="number" id="b2"></div>
        <div class="col border_right"><input type="number" id="b3"></div>
        <div class="col"><input type="number" id="b4"></div>
        <div class="col"><input type="number" id="b5"></div>
        <div class="col border_right"><input type="number" id="b6"></div>
        <div class="col"><input type="number" id="b7"></div>
        <div class="col"><input type="number" id="b8"></div>
        <div class="col"><input type="number" id="b9"></div>
    </div>
    <div class="row border_bottom">
        <div class="col"><input type="number" id="c1"></div>
        <div class="col"><input type="number" id="c2"></div>
        <div class="col border_right"><input type="number" id="c3"></div>
        <div class="col"><input type="number" id="c4"></div>
        <div class="col"><input type="number" id="c5"></div>
        <div class="col border_right"><input type="number" id="c6"></div>
        <div class="col"><input type="number" id="c7"></div>
        <div class="col"><input type="number" id="c8"></div>
        <div class="col"><input type="number" id="c9"></div>
    </div>
    <div class="row">
        <div class="col"><input type="number" id="d1"></div>
        <div class="col"><input type="number" id="d2"></div>
        <div class="col border_right"><input type="number" id="d3"></div>
        <div class="col"><input type="number" id="d4"></div>
        <div class="col"><input type="number" id="d5"></div>
        <div class="col border_right"><input type="number" id="d6"></div>
        <div class="col"><input type="number" id="d7"></div>
        <div class="col"><input type="number" id="d8"></div>
        <div class="col"><input type="number" id="d9"></div>
    </div>
    <div class="row">
        <div class="col"><input type="number" id="e1"></div>
        <div class="col"><input type="number" id="e2"></div>
        <div class="col border_right"><input type="number" id="e3"></div>
        <div class="col"><input type="number" id="e4"></div>
        <div class="col"><input type="number" id="e5"></div>
        <div class="col border_right"><input type="number" id="e6"></div>
        <div class="col"><input type="number" id="e7"></div>
        <div class="col"><input type="number" id="e8"></div>
        <div class="col"><input type="number" id="e9"></div>
    </div>
    <div class="row border_bottom">
        <div class="col"><input type="number" id="f1"></div>
        <div class="col"><input type="number" id="f2"></div>
        <div class="col border_right"><input type="number" id="f3"></div>
        <div class="col"><input type="number" id="f4"></div>
        <div class="col"><input type="number" id="f5"></div>
        <div class="col border_right"><input type="number" id="f6"></div>
        <div class="col"><input type="number" id="f7"></div>
        <div class="col"><input type="number" id="f8"></div>
        <div class="col"><input type="number" id="f9"></div>
    </div>
    <div class="row">
        <div class="col"><input type="number" id="g1"></div>
        <div class="col"><input type="number" id="g2"></div>
        <div class="col border_right"><input type="number" id="g3"></div>
        <div class="col"><input type="number" id="g4"></div>
        <div class="col"><input type="number" id="g5"></div>
        <div class="col border_right"><input type="number" id="g6"></div>
        <div class="col"><input type="number" id="g7"></div>
        <div class="col"><input type="number" id="g8"></div>
        <div class="col"><input type="number" id="g9"></div>
    </div>
    <div class="row">
        <div class="col"><input type="number" id="h1"></div>
        <div class="col"><input type="number" id="h2"></div>
        <div class="col border_right"><input type="number" id="h3"></div>
        <div class="col"><input type="number" id="h4"></div>
        <div class="col"><input type="number" id="h5"></div>
        <div class="col border_right"><input type="number" id="h6"></div>
        <div class="col"><input type="number" id="h7"></div>
        <div class="col"><input type="number" id="h8"></div>
        <div class="col"><input type="number" id="h9"></div>
    </div>
    <div class="row">
        <div class="col"><input type="number" id="i1"></div>
        <div class="col"><input type="number" id="i2"></div>
        <div class="col border_right"><input type="number" id="i3"></div>
        <div class="col"><input type="number" id="i4"></div>
        <div class="col"><input type="number" id="i5"></div>
        <div class="col border_right"><input type="number" id="i6"></div>
        <div class="col"><input type="number" id="i7"></div>
        <div class="col"><input type="number" id="i8"></div>
        <div class="col"><input type="number" id="i9"></div>
    </div>
  `;

    rellenarCasilla(sudokuContainer)

    test("casillasArray tiene los 81 valores()", () => {
        expect(casillasArray.length).toBe(81)
    });


});

describe("Sudoku", () => {
    const sudoku1 = new Sudoku(1, 2);
    test("la propiedad vacio de sudoku1 vale2", () => {
        expect(sudoku1.vacio).toBe(2);
    })
    test("la propiedad completa de sudoku1 vale1", () => {
        expect(sudoku1.completo).toBe(1);
    })
});
