let start;
let count = 0;

function cronometro() {
    let crono = document.getElementById('cronometro');

    function mostrarTiempo() {
        let horas = Math.floor(count / 3600);
        let minutos = Math.floor((count % 3600) / 60);
        let secundos = count % 60;
        if (horas < 10) {
            horas = '0' + horas;
        }
        if (minutos < 10) {
            minutos = '0' + minutos;
        }
        if (secundos < 10) {
            secundos = '0' + secundos;
        }
        crono.innerHTML = horas + ':' + minutos + ':' + secundos;
        count++;
    }

    function startCronometro() {
        start = setInterval(
            () => mostrarTiempo(),
            1000);
    }
    return startCronometro();
}