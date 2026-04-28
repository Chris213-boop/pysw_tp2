$(document).ready(function () {

    $("button").click(function () {

        let categoria = $(this).data("filtro");

        $(".destino").hide();

        if (categoria == "todos") {
            $(".destino").show();
        } else {
            $(".destino").filter("." + categoria).show();
        }

    });

});