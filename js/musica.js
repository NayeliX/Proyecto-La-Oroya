document.addEventListener('DOMContentLoaded', function () {
    var musica = document.getElementById('miMusica');
    
    musica.volume = 0.5;

    musica.addEventListener('ended', function () {
        // Reiniciar la reproducción cuando la pista termina
        musica.currentTime = 0;
        musica.play();
    });
});

var musica = document.getElementById("miMusicaFondo");

    function toggleReproduccion() {
        if (musica.paused) {
            musica.play();
        } else {
            musica.pause();
        }
    }

    function ajustarVolumen(direccion) {
        var volumenActual = musica.volume;
        if (direccion === '+' && volumenActual < 1.0) {
            musica.volume += 0.1;
        } else if (direccion === '-' && volumenActual > 0.0) {
            musica.volume -= 0.1;
        }
    }