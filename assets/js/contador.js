
$(document).ready(function() {
    // 1. Configuración inicial
    let visitas = 1250; 

    // Función para formatear números con puntos (ej: 1.250)
    function formatear(num) {
        return num.toLocaleString('es-AR');
    }

    // 2. Animación inicial de 0 a 1250
    $({ countNum: 0 }).animate({ countNum: visitas }, {
        duration: 2000,
        easing: 'swing',
        step: function() {
            $('#contador-vivo').text(formatear(Math.floor(this.countNum)));
        },
        complete: function() {
            $('#contador-vivo').text(formatear(visitas));
        }
    });

    // 3. Actualización artificial "en vivo" cada 3 segundos
    setInterval(function() {
        // Genera un número aleatorio entre 1 y 5 para sumar
        let nuevos = Math.floor(Math.random() * 5) + 1;
        visitas += nuevos;
        
        // Actualizamos el texto con un efecto de parpadeo suave
        $('#contador-vivo').fadeOut(200, function() {
            $(this).text(formatear(visitas)).fadeIn(200);
        });
    }, 3000); 
});