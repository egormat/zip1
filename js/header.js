$(function(){
  $(window).scroll(function(){
    let addingPoint = $('header').offset().top;
    let removingPoint = $('header').outerHeight();
    if ($(window).scrollTop() >= addingPoint){
      $('header').addClass('white')
    }
     if ($(window).scrollTop() == 0 ){
      $('header').removeClass('white')
    }
  })
})
