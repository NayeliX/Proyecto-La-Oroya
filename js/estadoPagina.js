window.addEventListener('beforeunload', function() {
    var scrollPosition = {
        x: window.pageXOffset,
        y: window.pageYOffset
    };
    localStorage.setItem('scrollPosition', JSON.stringify(scrollPosition));
});

document.addEventListener('DOMContentLoaded', function() {
    var savedScrollPosition = localStorage.getItem('scrollPosition');

    if (savedScrollPosition) {
        var scrollPosition = JSON.parse(savedScrollPosition);
        window.scrollTo(scrollPosition.x, scrollPosition.y);
        localStorage.removeItem('scrollPosition'); // Limpia la posición de desplazamiento guardada
    }
});

