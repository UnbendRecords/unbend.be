'use strict';

$(document).ready(function () {

  // --------- 1. HOMEPAGE ----------  //

  if ($(window).width() >= 768) {
    $('#HUW').height($(document).height() - 20);
  }

  $(window).resize(function () {
    if ($(window).width() >= 768) {
      $('#HUW').height($(document).height() - 20);
    }
  });

  // --------- 2. LOGO & NAV ----------  //

  $('#logo').clone().appendTo('#nav-header');
  $('#primary-nav li a').each(function () {
    $(this).clone().appendTo('#mobileNav ul').wrap('<li></li>');
  });
  $('#mobileNav li').each(function () {
    var child = $(this).find('a');
    if (child.children().length === 0) {
      child.prepend('&nbsp;- ').addClass('child');
    }
  });
  $('#sec-nav ul').html($('#primary-nav ul li.active ul').html());


  // --------- 3. SCROLL FUNCTION ----------  //

  $(window).scroll(function () {
    if ($(this).scrollTop() > 120) {
      $('#fixy, #page').addClass('fixed');
    } else {
      $('#fixy, #page').removeClass('fixed');
    }
  });

});