document.addEventListener("DOMContentLoaded", function() {
    // Obtén el botón
    var scrollToTopBtn = document.getElementById("scrollToTopBtn");

    // Cuando el usuario hace scroll hacia abajo 20px desde la parte superior de la página, muestra el botón
    window.onscroll = function() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollToTopBtn.style.display = "block";
        } else {
            scrollToTopBtn.style.display = "none";
        }
    };

    // Cuando el usuario hace clic en el botón, haz que la página vuelva al principio
    scrollToTopBtn.addEventListener("click", function() {
        document.body.scrollTop = 0; // Para Safari
        document.documentElement.scrollTop = 0; // Para Chrome, Firefox, IE y Opera
    });

});
