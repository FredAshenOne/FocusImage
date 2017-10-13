$(document).ready(function(){
//
  $('.small-img').on('click',function(){
    $('#black-background').addClass('black-background');
    $('#contain-img').addClass('container-enlarge');
    $('.small-img').addClass('img-enlarge');

  });

  $('body').on('click',function(e){
    if (!$(e.target).closest('.small-img').length) {

      $('#black-background').removeClass('black-background');
      $('#contain-img').removeClass('container-enlarge');
      $('.small-img').removeClass('img-enlarge');
    }
  });
  $(document).scroll(function(){
    if ($('#black-background').hasClass('black-background')) {

      $('#black-background').removeClass('black-background');
      $('#contain-img').removeClass('container-enlarge');
      $('.small-img').removeClass('img-enlarge');
    }

  });

});
