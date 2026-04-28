$(document).ready(function () {
    // Efecto flip al hacer click
    $(".flip-card").click(function () {
        $(this).toggleClass("active");
    });

    // Sistema de rating con jQuery
    $(".rating input").change(function () {
        var rating = $(this).val();
        var agencia = $(this).closest(".flip-back").find("h2").text();
        alert("Gracias por calificar a " + agencia + " con " + rating + " estrellas!");
    });
});