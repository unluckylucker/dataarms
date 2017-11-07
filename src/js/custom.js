(function ($) {

	/*==========FOR SVG ==============*/
	svg4everybody();
//search header
$(".form-search__btn").click(function(){
  $('.form-search__input').toggleClass('active');
  if ($(window).width() >= '890'){
    $('.header-middle-content-menu').animate({opacity: 0});
  } 
  if ($(this).hasClass('clicked')){
    $(this).attr('type', 'submit');
  } 
  $(this).toggleClass('clicked');
});


$(function(){
  $(document).click(function(event) {
    if ($(event.target).closest(".form-search").length) return;
      $('.form-search__input').removeClass('active');
      if ($(window).width() >= '890'){
        $('.header-middle-content-menu').delay(300).animate({opacity: 1});
      }
      $('.form-search__btn').removeClass('clicked');
      event.stopPropagation();
  });
});

//open menu
$(".header-middle-content__menu-btn").click(function(){
  $(".header-middle-content-menu").toggle( 
        function() { 
            $("#slide").hide("slide", { direction: "right" }, 1000); 
        }, 
        function() { 
            $("#slide").show("slide", { direction: "right" }, 500); 
        } 
    );

});

//open form
$("#open-form").click(function(){
  $('#header-form').slideToggle();
  // $('body').css('overflow', 'hidden');
  // $('#header-form').css('overflow', 'scroll;');
});

//close menu
$("#close-menu").click(function(){
  $(".header-middle-content-menu").toggle( 
        function() { 
            $("#slide").hide("slide", { direction: "right" }, 1000); 
        }, 
        function() { 
            $("#slide").show("slide", { direction: "right" }, 500); 
        } 
    );
});

//close from
$("#close-form").click(function(){
  $('#header-form').slideToggle();
});

//form valid
$("#header-form").validate({
  rules:{

    headerName:{
      required: true,
      minlength: 4,
      maxlength: 20,
    },

    headerPhone:{
      required: true,
      minlength: 6,
    },

    headerEmail:{
      required: true,
      email: true,
    },
  },

  messages:{

    headerName:{
      required: "*Выделенные поля заполнены некорректно",
      minlength: "*Выделенные поля заполнены некорректно",
      maxlength: "*Выделенные поля заполнены некорректно",
    },

    headerPhone:{
      required: "*Выделенные поля заполнены некорректно",
      minlength: "*Выделенные поля заполнены некорректно",
    },

    headerEmail:{
      required: "*Выделенные поля заполнены некорректно",
      email: "*Выделенные поля заполнены некорректно",
    },
  },
  
  errorLabelContainer: ".error_label",
  groups: {
    inputGroup: "headerName headerPhone  headerEmail",      
  },
  submitHandler: function(form) { 
    $('.overlay').fadeIn(400, 
      function(){ 
        $('.modal') 
          .css('display', 'block') 
          .animate({opacity: 1, top: '50%'}, 200); 
    });
    return false;
  }
});

$(".tab-content-slide__form").validate({
  rules:{

    contactsName:{
      required: true,
      minlength: 4,
      maxlength: 20,
    },

    contactsPhone:{
      required: true,
      minlength: 6,
    },

    contactsEmail:{
      required: true,
      email: true,
    },
  },

  messages:{

    contactsName:{
      required: "*Выделенные поля заполнены некорректно",
      minlength: "*Выделенные поля заполнены некорректно",
      maxlength: "*Выделенные поля заполнены некорректно",
    },

    contactsPhone:{
      required: "*Выделенные поля заполнены некорректно",
      minlength: "*Выделенные поля заполнены некорректно",
    },

    contactsEmail:{
      required: "*Выделенные поля заполнены некорректно",
      email: "*Выделенные поля заполнены некорректно",
    },
  },
  
  errorLabelContainer: ".error_label-contacts",
  groups: {
    inputGroup: "contactsName contactsPhone  contactsEmail",      
  },
  submitHandler: function(form) { 
     $('.overlay').fadeIn(400, 
      function(){ 
        $('.modal') 
          .css('display', 'block') 
          .animate({opacity: 1, top: '50%'}, 200); 
    });
    return false;
  }
});

//mask for phone
jQuery(function($){
 $("#phone").mask("+7(999) 999-9999");
 $("#phone2").mask("+7(999) 999-9999");
});

//anchor
$(".anchor").click(function() {
  var elementClick = $('.contacts')
  var destination = $(elementClick).offset().top;
  jQuery("html:not(:animated),body:not(:animated)").animate({
    scrollTop: destination
  }, 800);
  return false;
});

$(".anchor-link").click(function() {
  var elementClick = $(this).attr("href")
  var destination = $(elementClick).offset().top;
  jQuery("html:not(:animated),body:not(:animated)").animate({
    scrollTop: destination
  }, 800);
  return false;
});

//slick
$('.slider').slick({
  
});

//tabs
$('.tab-menu__button').click(function(){
  var num = $(this).data('num');
  $('.tab-content-slide').hide();
  $('.tab-content-slide'+num).show();
  $('.tab-menu__button').removeClass('tab-menu__button_active');
  $(this).addClass('tab-menu__button_active');
  $('.tab-menu__button span').removeClass('cssarrow');
  $(this).children().addClass('cssarrow');
});
     
//modal
  /*close modal */
  $('.modal__close, .overlay').click( function(){ // лoвим клик пo крестику или пoдлoжке
    $('.modal')
      .animate({opacity: 0, top: '45%'}, 200,  
        function(){ 
          $(this).css('display', 'none'); 
          $('.overlay').fadeOut(400); 
        }
      );
  });
})(jQuery);

