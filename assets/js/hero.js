$(document).ready(function() {
    // Animación del título: Deslizar hacia abajo y aparecer
    $("#hero-title").css({ marginTop: "-50px" }).animate({
        opacity: 1,
        marginTop: "0px"
    }, 1000);

    // Animación del subtítulo: Aparecer después de un retraso
    $("#hero-subtitle").delay(800).animate({
        opacity: 1
    }, 1200);
});