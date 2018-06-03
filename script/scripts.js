$(function () {

  $('.toggle').on('click', function () {
    if ($(this).next().is(':hidden')) {
      $(this).next().slideDown('fast');
    } else {
      // $(this).next().hide();
      $(this).next().fadeOut();
    };
  });

  $(window).resize(function () {
    winWidth = $(window).width();
    if (winWidth > 900) {
      $('.nav__list').css('display', 'flex');
    } else {
      $('.nav__list').css('display', 'none');
    }
  });

  const m = $(".header__wrapper .fa-times");

  m.on('click', () => {
    if (m.hasClass('fa-bars')) {
      m
        .removeClass('fa-bars')
        .addClass('fa-times');
    } else {
      m
        .removeClass('fa-times')
        .addClass('fa-bars');
    }
  });

  $('a').smoothScroll();

});