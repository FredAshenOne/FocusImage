$(document).ready(function(){
//
  $('.container').on('click',function(){
    $(this).addClass('container-enlarge');
    $(this).addClass('container-move');
    $('#background').addClass('black-background');
    $('#content').removeClass('hide-el');
    $('#content').addClass('content-container');
  });

  $('body').on('click',function(e){
    if (!$(e.target).closest('.container-enlarge').length) {
      $('#background').removeClass('black-background');
      $('.container').removeClass('container-enlarge');
      $('.container').removeClass('container-move');
      $('#content').addClass('hide-el');
      $('#content').removeClass('content-container');
      $('#icon-el').val('keyboard_arrow_left');
    }
  });

  $('#arrow').on('click',function(){
    if (!$('#content').hasClass('move-container')) {
    $('#content').addClass('move-container');
    console.log($('#icon-el').val());
    $('#icon-el').val('keyboard_arrow_right');
  }else{
    $('#content').removeClass('move-container');
    $('#icon-el').val('keyboard_arrow_left');
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
