$(document).ready(function(){
//
  $('.container').on('click',function(){
    $('.container').addClass('container-enlarge');
    $('.container').addClass('container-move');
    $('#background').addClass('black-background');

  });

  $('body').on('click',function(e){
    if (!$(e.target).closest('.container-enlarge').length) {
      $('#background').removeClass('black-background');
      $('.container').removeClass('container-enlarge');
      $('.container').removeClass('container-move');

    }
  });
  // $(document).scroll(function(){
  //   if ($('#black-background').hasClass('black-background')) {
  //
  //     $('#black-background').removeClass('black-background');
  //     $('.container').removeClass('container-enlarge');
  //   }
  //
  // });

});
