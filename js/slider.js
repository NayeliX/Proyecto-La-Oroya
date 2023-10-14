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
