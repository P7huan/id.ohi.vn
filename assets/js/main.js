// Chuyển form
$(document).ready(function () {
  // Chuyển form
  $('.form-navs .item').click(function () {
    $('.form__block').removeClass('active')
    var tab_id = $(this).attr('rel')
    $(tab_id).addClass('active')
  })
  $('.wrap__form .form__head .item').click(function () {
    $('.wrap__form .form__head .item').removeClass('active')
    $(this).addClass('active')
  })
  $('.wrap__form .form__block a').click(function () {
    $('.wrap__form .form__head .item').removeClass('active')
  })

  // Chuyển tab
  $('.nav__box').click(function () {
    $('.nav__box').removeClass('active')
    $(this).addClass('active')
    $('.box__main').removeClass('active')
    var box_id = $(this).attr('rel')
    $(box_id).addClass('active')
  })

  // Đóng/mở slide
  $('.item__head').click(function () {
    if ($(this).hasClass('hide')) {
      $(this).removeClass('hide')
      $(this).next().slideDown(350)
    } else {
      $(this).addClass('hide')
      $(this).next().slideUp(350)
    }
  })

  // Ẩn/hiện mật khẩu
  $('.toogle-eye').click(function () {
    var input = $('.pass-form')
    if (input.attr('type') === 'password') {
      input.attr('type', 'text')
      $(this).removeClass('fa-eye')
      $(this).addClass('fa-eye-slash')
    } else {
      input.attr('type', 'password')
      $(this).removeClass('fa-eye-slash')
      $(this).addClass('fa-eye')
    }
  })
})
