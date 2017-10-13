$(document).ready(function(){
//
  $('.container').on('click',function(){
    $('.container').addClass('container-enlarge');
    $('.container').addClass('container-move');
    $('#background').addClass('black-background');

  });
$('.slicon').on('click',function(){
  $('#content').addClass('display-el');
});

  $('body').on('click',function(e){
    if (!$(e.target).closest('.container-enlarge').length) {
      $('#background').removeClass('black-background');
      $('.container').removeClass('container-enlarge');
      $('.container').removeClass('container-move');
      $('#content').addClass('display-el');
      $('#content').removeClass('par-container');
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
