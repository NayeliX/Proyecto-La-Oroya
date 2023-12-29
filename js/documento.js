document.addEventListener("DOMContentLoaded", function() {
    var miDocumento = document.getElementById("miDocumento");

    // Incrustar el documento PDF utilizando el elemento <embed>
    miDocumento.innerHTML = '<embed src="../documento/REVISTA-ARQUELOGÍA - PALEONTOLOGÍA-2015.pdf" type="application/pdf" width="800px" height="600px" />';
});
