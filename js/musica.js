document.addEventListener('DOMContentLoaded', function () {
    var musica = document.getElementById('miMusica');
    
    musica.volume = 0.5;

    musica.addEventListener('ended', function () {
        // Reiniciar la reproducción cuando la pista termina
        musica.currentTime = 0;
        musica.play();
    });
});
