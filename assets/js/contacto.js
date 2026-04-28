$(document).ready(function(){

  function validarNombre(){
    let nombre = $('#nombre').val().trim();
    if(nombre.length < 3){
      $('#errorNombre').removeClass('d-none');
      return false;
    }
    $('#errorNombre').addClass('d-none');
    return true;
  }

  function validarEmail(){
    let email = $('#email').val().trim();
    let regex = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if(!regex.test(email)){
      $('#errorEmail').removeClass('d-none');
      return false;
    }
    $('#errorEmail').addClass('d-none');
    return true;
  }

  function validarMensaje(){
    let mensaje = $('#mensaje').val().trim();
    if(mensaje.length < 10){
      $('#errorMensaje').removeClass('d-none');
      return false;
    }
    $('#errorMensaje').addClass('d-none');
    return true;
  }

  // ===== VALIDACIÓN EN TIEMPO REAL =====

  $('#nombre').on('input', validarNombre);
  $('#email').on('input', validarEmail);
  $('#mensaje').on('input', validarMensaje);

  // ===== ENVÍO DEL FORMULARIO =====

  $('#formContacto').submit(function(e){
    e.preventDefault();

    let nombreValido = validarNombre();
    let emailValido = validarEmail();
    let mensajeValido = validarMensaje();

    if(nombreValido && emailValido && mensajeValido){

      // Mostrar spinner
      $('#spinner').removeClass('d-none');

      // Desactivar botón
      $('#btnEnviar').prop('disabled', true);

      // Simulación de envío (2 segundos)
      setTimeout(function(){

        // Ocultar spinner
        $('#spinner').addClass('d-none');

        // Activar botón
        $('#btnEnviar').prop('disabled', false);

        // Mostrar modal
        let modal = new bootstrap.Modal(document.getElementById('modalConfirmacion'));
        modal.show();

        // Resetear formulario
        $('#formContacto')[0].reset();

      }, 2000);

    }
  });

});