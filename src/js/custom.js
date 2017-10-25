(function ($) {

	/*==========FOR SVG ==============*/
	svg4everybody();
//search header
$(".form-search__btn").click(function(){
  $('.form-search__input').toggleClass('active');
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
    if ($(event.target).closest(".form-search").length) return;
      $('.form-search__input').removeClass('active');
      if ($(window).width() >= '890'){
        $('.header-bottom-content-menu').delay(300).animate({opacity: 1});
      }
      $('.form-search__btn').removeClass('clicked');
      event.stopPropagation();
  });
});

//open menu
$(".header-bottom-content__menu-btn").click(function(){
  $(".header-bottom-content-menu").toggle( 
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
  $(".header-bottom-content-menu").toggle( 
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
    alert('valid form');
    return false;
  }
});

//mask for phone
jQuery(function($){
 $("#phone").mask("+7(999) 999-9999");
});


})(jQuery);

