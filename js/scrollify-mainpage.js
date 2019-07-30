$(function(){
  $.scrollify({
    section: ".scroll-item",
    before: function(){
      if (!$.scrollify.current().hasClass('first'))
      {
          $('header').addClass('white')
      }
      else {
        $('header').removeClass('white')
      }
    }
  })
})



// $(function(){
//   $('.down-arrow').click(function() {
//     $.scrollify.next()
//   })
// })
