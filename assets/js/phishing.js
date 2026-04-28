$("#btn-phishing").click(function () {
    $("#phishing-demo").slideDown();
});

$("#btn-login").click(function () {
    $("#mensaje-alerta").removeClass("d-none");
});

$("#verificar").click(function () {

    let cantidad = $(".fraude:checked").length;

    $("#resultado").removeClass("d-none alert-success alert-warning alert-danger");

    if (cantidad >= 4) {
        $("#resultado")
            .addClass("alert-danger")
            .text("⚠ Correcto. Detectaste un mensaje fraudulento.");
    }

    else if (cantidad >= 2) {
        $("#resultado")
            .addClass("alert-warning")
            .text("🟡 Atención. Hay señales sospechosas.");
    }

    else {
        $("#resultado")
            .addClass("alert-success")
            .text("🟢 Revisá mejor. Faltan señales por detectar.");
    }

});