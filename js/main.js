//nav-line
$(function () {
  $('.nav-link').click(function(){
    $('.nav-link').removeClass('nav-line');
  });
  $('.nav-link').on('click', function(){
    $(this).addClass('nav-line');
  });
});


//scroll
$(function () {
  $('header a').click(function () {
    var id = $(this).attr('href');
    var headerHeight = 80; //固定ヘッダがある場合その高さ
    var position = $(id).offset().top - headerHeight;
    $('html, body').animate( {
      'scrollTop': position
    }, 500);
  });
  $('.main-inner a').click(function () {
    var id = $(this).attr('href');
    var headerHeight = 80; //固定ヘッダがある場合その高さ
    var position = $(id).offset().top - headerHeight;
    $('html, body').animate( {
      'scrollTop': position
    }, 500);
  });
  $('.to-top a').click(function () {
    var id = $(this).attr('href');
    var headerHeight = 80; //固定ヘッダがある場合その高さ
    var position = $(id).offset().top - headerHeight;
    $('html, body').animate( {
      'scrollTop': position
    }, 500);
  });
});

//accordion
$(function () {
  $('.qa-item').click(function () {
    var open = $(this).find('.answer');
    var btn = $(this).find('.q-btn');
    $(open).slideToggle();
    if ($(open).hasClass('accordion-active')) {
      $(open).removeClass('accordion-active');
      $(btn).html('<img src="img/plus.svg">');
    } else {
      $(open).addClass('accordion-active');
      $(btn).html('<img src="img/minus.svg">');
    }
  });
});

//wow
$(function(){
  new WOW().init();
});

//slider 
$(function(){
  $('.results-slider ul').slick({
    autoplay: true,
    autoplaySpeed: 5000,
    dots: true,
    slidesToShow: 2.5,
    slidesToScroll: 1,
    infinite: true,
    responsive: [
      {
        breakpoint: 958,
        settings: {
          autoplay: true,
          slidesToShow: 2,
          touchMove: true,
        }
      },
      {
        breakpoint: 558,
        settings: {
          autoplay: true,
          slidesToShow: 1.5,
          dots: false,
          touchMove:true,
        }
      },
    ]
  });
});

//menu-toggle
$(function () {
  $('.navbar_toggle').on('click', function () {
    $('.menu').toggleClass('open');
    $('.nav-bk').css('display', 'block');
  });
  $('.nav-list').on('click', function () {
    $('.menu').toggleClass('open');
    $('.nav-bk').css('display', 'none');
  });
});