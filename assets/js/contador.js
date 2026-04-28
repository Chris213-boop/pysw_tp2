
$(document).ready(function() {
    let visitas = 1250; 

    function formatear(num) {
        return num.toLocaleString('es-AR');
    }

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

    setInterval(function() {
        let nuevos = Math.floor(Math.random() * 5) + 1;
        visitas += nuevos;
        
        $('#contador-vivo').fadeOut(200, function() {
            $(this).text(formatear(visitas)).fadeIn(200);
        });
    }, 3000); 
});