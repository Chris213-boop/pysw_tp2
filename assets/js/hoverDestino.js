$(document).ready(function () {

    $(".destino-card").mouseenter(function () {
        $(this).addClass("zoom");
    });

    $(".destino-card").mouseleave(function () {
        $(this).removeClass("zoom");
    });

});