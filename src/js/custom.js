(function ($) {

	/*==========FOR SVG ==============*/
	svg4everybody();
//search header
$(".header-bottom-content-search__btn").click(function(){
  $('.header-bottom-content-search__input').toggleClass('active');
  if ($(window).width() >= '890'){
    $('.header-bottom-content-menu').animate({opacity: 0});
  } 
  if ($(this).hasClass('clicked')){
    $(this).attr('type', 'submit');
  } 
  $(this).toggleClass('clicked');
});


$(function(){
  $(document).click(function(event) {
    if ($(event.target).closest(".header-bottom-content-search").length) return;
      $('.header-bottom-content-search__input').removeClass('active');
      if ($(window).width() >= '890'){
        $('.header-bottom-content-menu').delay(1000).animate({opacity: 1});
      }
      $('.header-bottom-content-search__btn').removeClass('clicked');
      event.stopPropagation();
  });
});

//open menu
$(".header-bottom-content__menu-btn").click(function(){
  $('.header-bottom-content-menu').slideToggle();
});

//close menu
$(".header-bottom-content-menu__close").click(function(){
  $('.header-bottom-content-menu').slideToggle();
});

//form valid
$(".header-form").validate({

});

})(jQuery);

