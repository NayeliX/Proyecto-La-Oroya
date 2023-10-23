document.addEventListener("DOMContentLoaded", function() {
    var cols = document.querySelectorAll('.col');
    var currentSlide = 0;

    function showSlide(index) {

        for (var i = 0; i < cols.length; i++) {
            cols[i].style.display = 'none';
        }
        cols[index].style.display = 'block';
    }

    function nextSlide() {
        currentSlide++;
        if (currentSlide >= cols.length) {
            currentSlide = 0;
        }
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide--;
        if (currentSlide < 0) {
            currentSlide = cols.length - 1;
        }
        showSlide(currentSlide);
    }

    document.getElementById('prevBtn').addEventListener('click', function() {
        prevSlide(); 
    });

    document.getElementById('nextBtn').addEventListener('click', function() {
        nextSlide();
    });


    function initSlider() {
        if (window.innerWidth < 780) {
            showSlide(currentSlide);
        }
    }

    initSlider();

    window.addEventListener('resize', function() {
        initSlider();
    });
});
