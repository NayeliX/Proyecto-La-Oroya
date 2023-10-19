/* $(document).ready(function(){
    function initSlider() {
        if ($(window).width() < 700) { // Cambia 700 al ancho que consideres responsive
            $('.row').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 2000,
                dots: true // Agrega los puntos indicadores de los slides
                // Otros opciones de configuración del slider si las necesitas
            });
        } else {
            if ($('.row').hasClass('slick-initialized')) {
                $('.row').slick('unslick'); // Destruye el slider si la pantalla no es lo suficientemente pequeña
            }
        }
    }

    initSlider(); // Inicializa el slider cuando la página se carga

    $(window).on('resize', function(){
        initSlider(); // Vuelve a inicializar el slider cuando la ventana cambia de tamaño
    });
}); */

// Espera a que el documento esté completamente cargado
/* document.addEventListener("DOMContentLoaded", function() {
    var cols = document.querySelectorAll('.col'); // Selecciona todos los elementos con clase .col
    var screenWidth = window.innerWidth; // Obtiene el ancho de la pantalla al cargar la página

    // Función para inicializar el slider
    function initSlider() {
        // Verifica si el ancho de la pantalla es menor de 700 px
        if (screenWidth < 700) {
            // Usa un bucle para ocultar todos los elementos .col excepto el primero
            for (var i = 1; i < cols.length; i++) {
                cols[i].style.display = 'none';
            }
        }
    }

    // Llama a la función para inicializar el slider
    initSlider();

    // Agrega un event listener para cambiar los slides cuando se hace clic en los botones del slider
    document.getElementById('prevBtn').addEventListener('click', function() {
        // Código para mostrar el slide anterior
    });

    document.getElementById('nextBtn').addEventListener('click', function() {
        // Código para mostrar el siguiente slide
    });

    // Actualiza el ancho de la pantalla cuando se redimensiona la ventana
    window.addEventListener('resize', function() {
        screenWidth = window.innerWidth;
        initSlider(); // Vuelve a inicializar el slider cuando se redimensiona la ventana
    });
}); */

