let casillasArray = [];
let casillas_count = 0;

class Casilla {
    constructor(id, valor, resuelto, input) {
        this.id = id;
        this.valor = valor;
        this.resuelto = resuelto
        this.input = input;
    }

    esCorrecto() {
        if (this.resuelto === this.input) {
            return true;
        } else return false;
    }
}

function sudoku_terminado() {
    if (casillas_count === 81) {
        console.log("You won")
        clearInterval(start)
        btnVerHighscore.classList.remove('trans');
        imprScore();
    }
}

function rellenarSudoku(casillasArray) {
    let cas;
    for (let i = 0; i < 81; i++) {
        cas = document.getElementById(casillasArray[i].id);
        cas.value = casillasArray.filter(item => item.id === casillasArray[i].id).map(item => item.valor)

        if (cas.value) {
            cas.disabled = true;
            casillas_count++;
        }

        document.getElementById(casillasArray[i].id).addEventListener('blur', (e) => {

            let casilla = casillasArray.filter(item => item.id === e.target.id)
            casilla[0].input = Number(e.target.value);

            if (casilla[0].esCorrecto()) {
                e.target.disabled = true;
                casillas_count++;
                sudoku_terminado();
            } else {
                e.target.classList.add('input-err2');
                setTimeout(() => {
                    e.target.classList.remove('input-err2');
                    e.target.value = "";
                }, 500);
            }
        });

    }
}

function rellenarCasilla(sudoku) {
    let letra;
    for (let i = 65; i <= 73; i++) {
        letra = String.fromCharCode(i).toLocaleLowerCase()
        for (let j = 0; j < 9; j++) {
            casillasArray.push(new Casilla(letra + (j + 1), sudoku.vacio[letra][j] === 0 ? null : sudoku.vacio[letra][j], sudoku.completo[letra][j], null));

        }
    }
    rellenarSudoku(casillasArray)
}

module.exports =  {Casilla, rellenarCasilla, rellenarSudoku,casillasArray};