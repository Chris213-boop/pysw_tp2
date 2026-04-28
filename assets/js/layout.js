$(document).ready(function(){

  // ===== FILTRO POR CATEGORÍA =====
  $('.filtro').click(function(){
    let categoria = $(this).data('categoria');

    if(categoria === 'all'){
      $('.post').show();
    } else {
      $('.post').hide();
      $('.post[data-categoria="'+categoria+'"]').show();
    }
  });

  // ===== COMENTARIOS =====
  $('.btn-comentar').click(function(){

    let input = $(this).siblings('.input-comentario');
    let texto = input.val().trim();

    if(texto !== ''){
      let lista = $(this).closest('.comentarios').find('.lista-comentarios');
      lista.append(`<li>🧑 ${texto}</li>`);
      input.val('');
    }

  });

  // ===== ANIMACIÓN AL SCROLL =====
  function mostrarPosts(){
    $('.post-card').each(function(){
      let top = $(this).offset().top;
      let scroll = $(window).scrollTop();
      let alturaPantalla = $(window).height();

      if(top < scroll + alturaPantalla - 50){
        $(this).addClass('visible');
      }
    });
  }

  $(window).on('scroll', mostrarPosts);
  mostrarPosts(); // ejecutar al cargar

});

$(document).ready(function(){

  function animarScroll(){
    $('.post-card').each(function(){

      let elementoTop = $(this).offset().top;
      let scrollTop = $(window).scrollTop();
      let alturaPantalla = $(window).height();

      if(elementoTop < scrollTop + alturaPantalla - 50){
        $(this).addClass('visible');
      }

    });
  }

  // Evento scroll
  $(window).on('scroll', animarScroll);

  // Ejecutar al cargar
  animarScroll();

});