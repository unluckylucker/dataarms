(function ($) {

	/*==========FOR SVG ==============*/
	svg4everybody();
//submit form
$("#btn-review").click(function(){
  $(".review-people-textarea").show();
  $(this).text('Отправить');        
  if ($(this).hasClass('clicked')){
    $('#review').submit();  
  } 
  $(this).addClass('clicked');
  var scroll_el = $("#review"); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
        if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
      $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500); // анимируем скроолинг к элементу scroll_el
    }
      return false; // выключаем стандартное действие
});	

	jQuery('.textarea-scrollbar').scrollbar();
//placeholder
    $( "#search" ).focus(function() {
      $('label.placeholder').hide();
    });

    $( "#search" ).focusout(function() {
          if($(this).val().length >= 1){
              $('label.placeholder').hide();
          }else{
              $('label.placeholder').show();
          }
    });


//form-search
       $(document).ready(function(){
          $('#search').autoSearch();
        });


   var btnEdit = $('.btn-edit'),
   btnSave = $('.btn-save');

   btnEdit.click(function(e) {
    e.preventDefault();
    var $this = $(this);
    var idText = $(this).attr('data-text');

    $(this).addClass('hide').siblings(btnSave).addClass('show');

    $('#' + idText).each(function(){
      var content = $(this).html();
      $(this).toggleClass('active');
      $(this).html('<textarea>' + content + '</textarea>');
      $(this).children().focus();
    });
  });

   btnSave.click(function(e) {
    e.preventDefault();
    var idText = $(this).attr('data-text');

    $(this).removeClass('show').siblings(btnSave).removeClass('hide');

    $('#' + idText + '>textarea').each(function(){
      $('#' + idText).toggleClass('active');
      var content = $(this).val();
      $(this).html(content);
      $(this).contents().unwrap();
    });
  });


//search-header
  

   $(".btn_search_header").click(function(){
      if ($(window).width() <= '480'){
        $(".header-search").toggleClass('header-search_clicked');
        $("#search-header").toggleClass('search-header_clicked');
        $(".icon-search_sm").toggleClass('icon-search_clicked');
        $(this).attr('type', 'button');
        if ($(this).hasClass('clicked')){
            $(this).attr('type', 'submit');
        } 
        $(this).toggleClass('clicked');
      } 
      if ($(window).width() > '480'){
        $(this).attr('type', 'submit');
      }
    });
//modal
$('.open-modal').click(function(){
  $('#modal').arcticmodal({
    afterClose: function(data, el) {
      $('body').css('overflow', 'auto');
    }
  });
});

$('.edit-photo').click(function(){
  $('#modal-photo').arcticmodal({
    afterClose: function(data, el) {
      $('body').css('overflow', 'auto');
    }
  });
});

$('.btn_enter').click(function(){
  $('#modal').arcticmodal('close');
  function openModal(){
    $('#modal_enter').arcticmodal({
      afterClose: function(data, el) {
        $('body').css('overflow', 'auto');
      }
    });
  }
  setTimeout(openModal, 400)
});

$('.modal-form__link').click(function(){
  $('#modal_enter').arcticmodal('close');
  function openModal(){
    $('#modal_password').arcticmodal({
      afterClose: function(data, el) {
        $('body').css('overflow', 'auto');
      }
    });
  }
  setTimeout(openModal, 400)
});


      $(function(){
  $(document).click(function(event) {
    if ($(event.target).closest(".header-search").length) return;
        $(".header-search").removeClass('header-search_clicked');
        $("#search-header").removeClass('search-header_clicked');
        $(".icon-search_sm").addClass('icon-search_clicked');
        $('.btn_search_header').removeClass('clicked');
    event.stopPropagation();
  });
});
    
//form valid
  $("#modal-reg").validate({

   rules:{

    login:{
      required: true,
      minlength: 4,
      maxlength: 20,
    },

    email:{
      required: true,
      email: true,
    },

    country:{
      required: true,
    },

    age:{
      required: true,
      digits: true,
      maxlength: 2,
    },

    gender:{
      required: true,
    },

    pswd:{
      required: true,
      minlength: 6,
    },

    pswd2:{
      equalTo: "#pswd",
      required: true,
    },
  },

  messages:{

    login:{
      required: "Это поле обязательно для заполнения",
      minlength: "Логин должен быть минимум 4 символа",
      maxlength: "Максимальное число символо - 20",
    },

    pswd:{
      required: "Это поле обязательно для заполнения",
      minlength: "Пароль должен быть минимум 6 символа",
    },

    email:{
      required: "Это поле обязательно для заполнения",
      email: "Это email",
    },

    country:{
      required: "Это поле обязательно для заполнения",
    },

    age:{
      required: "Это поле обязательно для заполнения",
      digits: "Введите возраст",
      maxlength: "Введите возраст",
    },

    gender:{
      required: "Это поле обязательно для заполнения",
    },

    pswd2:{
      equalTo: "Неправильный пароль",
      required: "Это поле обязательно для заполнения",
    },

  }

  });

  $("#modal-enter").validate({

   rules:{

    loginEnter:{
      required: true,
      minlength: 4,
      maxlength: 20,
    },

    pswdEnter:{
      required: true,
      minlength: 6,
    },
  },

  messages:{

    loginEnter:{
      required: "Это поле обязательно для заполнения",
      minlength: "Логин должен быть минимум 4 символа",
      maxlength: "Максимальное число символо - 20",
    },

    pswdEnter:{
      required: "Это поле обязательно для заполнения",
      minlength: "Пароль должен быть минимум 6 символа",
    },

  }

  });

    $("#modal-password").validate({

   rules:{

    emailPassword:{
      required: true,
      email: true,
    },
  },

  messages:{

    emailPassword:{
      required: "Это поле обязательно для заполнения",
      email: "Это email",
    },

  }

  });

    $("#profile-form").validate({

     rules:{

      loginProfile:{
        required: true,
        minlength: 4,
        maxlength: 20,
      },

      pswdProfile:{
        required: true,
        minlength: 6,
      },

      emailProfile:{
        required: true,
        email: true,
      },

      cityProfile:{
        required: "Это поле обязательно для заполнения",
      },
    },

    messages:{

      loginProfile:{
        required: "Это поле обязательно для заполнения",
        minlength: "Логин должен быть минимум 4 символа",
        maxlength: "Максимальное число символо - 20",
      },

      pswdProfile:{
        required: "Это поле обязательно для заполнения",
        minlength: "Пароль должен быть минимум 6 символа",
      },

      emailProfile:{
        required: "Это поле обязательно для заполнения",
        email: "Это email",
      },

      cityProfile:{
        required: "Это поле обязательно для заполнения",
      },

    }

  });

//selectize
  $('.profile-form-field__select').selectize({
    create: false,
    sortField: 'text'
  });

//pswd visible
$(".profile-form-field__btn").click(function(){
  $(".icon-eye").slideToggle();
  $(".icon-eye-close").slideToggle();
  $('input[name="pswdProfile"]').attr('type', 'text');
  if ($(this).hasClass('clicked')){
      $('input[name="pswdProfile"]').attr('type', 'password');
  } else{
      $('input[name="pswdProfile"]').attr('type', 'text');
  }
  $(this).toggleClass('clicked')
}); 

// send form profile
$("#btn-save-profile").click(function(){
  $('#profile-form').submit();
});

//tabs
$('.profile-review-block').click(function(){
  var num = $(this).data('num');
  $('.review-people').hide();
  $('.review-people_tab'+num).show();
  $('.profile-review-block').removeClass('active');
  $(this).addClass('active');
});

//upload file
$(".inputfile").on('change', function() {
    //Get count of selected files
    var countFiles = $(this)[0].files.length;
    var imgPath = $(this)[0].value;
    var extn = imgPath.substring(imgPath.lastIndexOf('.') + 1).toLowerCase();

    var idImage = $(this).attr('data-image'),
    idLabel = $(this).attr('data-label');

    var image_holder = $('#' + idImage),
    label = $('#' + idLabel);

    var file_name = this.value.replace(/\\/g, '/').replace(/.*\//, '');


    image_holder.empty();


    if (extn == "gif" || extn == "png" || extn == "jpg" || extn == "jpeg") {
      //change label text
      $(label).text(file_name);

      if (typeof(FileReader) != "undefined") {
        //loop for each file selected for uploaded.
        for (var i = 0; i < countFiles; i++)
        {
          var reader = new FileReader();
          reader.onload = function(e) {
            image_holder.prop('src', e.target.result)
            image_holder.prop('alt', e.target.result)
            $('#modal-photo').arcticmodal('close');
          }
          image_holder.show();
          reader.readAsDataURL($(this)[0].files[i]);
        }
      } else {
        alert("Браузер не поддерживает загрузку изображений.");
      }
    } else {
      alert("Выберите только одно изображение , которое поддерживает форматы .gif, .png, .jpeg");
    }


  });
})(jQuery);

