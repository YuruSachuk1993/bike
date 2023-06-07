$('.icon-menu').click(function (event) {
   $(this).toggleClass('active');
   $('.menu__body').toggleClass('active');
   $('body').toggleClass('lock');
});

$(document).ready(function () {
   $('.slider__body').slick({
      dots: true,
      infinite: true,
      speed: 300,
      

      arrows: false,
      accessibility: false,
      autoplaySpeed: 3000,
      adaptiveHeight: true,
      nextArrow: '<button type="button" class="slick-next"></button>',
      prevArrow: '<button type="button" class="slick-prev"></button>',
      responsive: [{
         dreakpoint: 768,
         settings: {}
      }]


   });
});