!function (a) { a.fn.isOnScreen = function (b) { var c = this.outerHeight(), d = this.outerWidth(); if (!d || !c) return !1; var e = a(window), f = { top: e.scrollTop(), left: e.scrollLeft() }; f.right = f.left + e.width(), f.bottom = f.top + e.height(); var g = this.offset(); g.right = g.left + d, g.bottom = g.top + c; var h = { top: f.bottom - g.top, left: f.right - g.left, bottom: g.bottom - f.top, right: g.right - f.left }; return "function" == typeof b ? b.call(this, h) : h.top > 0 && h.left > 0 && h.right > 0 && h.bottom > 0 } }(jQuery);











// $(window).on('scroll', function (event) {
//     var scrollValue = $(window).scrollTop();
//     if (scrollValue > 200) {
//       $('#header').addClass('fixed');
//     } else {
//       $('#header').removeClass('fixed');
//     }
//   });




// AOS.init({
//     duration: 1000, // animation duration
//     once: true      // whether animation should happen only once
//   });





//========home page=========
var blogslider = $('.blogslider');
blogslider.owlCarousel({
  loop: true,
  nav: true,
  dots: false,
  smartSpeed: 450,
  autoplay: true,
  autoplayTimeout: 5000,
  margin: 20,
  responsive: {
    320: { items: 1 },
    480: { items: 1 },
    600: { items: 2 },
    960: { items: 3 },
    1200: { items: 4 }

  }
});


//========about page=========
var valuesilder = $('.valuesilder');
valuesilder.owlCarousel({
  loop: true,
  nav: true,
  dots: false,
  smartSpeed: 450,
  autoplay: true,
  autoplayTimeout: 5000,
  margin: 20,
  responsive: {
    320: { items: 1.2 },
    480: { items: 1.2 },
    600: { items: 2.1 },
    960: { items: 3.2 },
    1200: { items: 4.5 }

  }
});


var technicalslider = $('.technicalslider');
technicalslider.owlCarousel({
  loop: true,
  nav: false,
  dots: true,
  smartSpeed: 450,
  autoplay: true,
  autoplayTimeout: 5000,
  margin: 20,
  responsive: {
    320: { items: 1 },
    480: { items: 1 },
    600: { items: 1 },
    960: { items: 1 },
    1200: { items: 1 }

  }
});


var technicalslider = $('.technicalslider');
technicalslider.owlCarousel({
  loop: true,
  nav: false,
  dots: true,
  smartSpeed: 450,
  autoplay: true,
  autoplayTimeout: 5000,
  margin: 20,
  responsive: {
    320: { items: 1 },
    480: { items: 1 },
    600: { items: 1 },
    960: { items: 1 },
    1200: { items: 1 }

  }
});





var SSMmachinesilder = $('.SSMmachinesilder');
SSMmachinesilder.owlCarousel({
  loop: true,
  nav: false,
  dots: true,
  smartSpeed: 450,
  autoplay: true,
  autoplayTimeout: 5000,
  margin: 20,
  responsive: {
    320: { items: 1 },
    480: { items: 1 },
    600: { items: 1 },
    960: { items: 1 },
    1200: { items: 1 }

  }
});


var precisionslider = $('.precisionslider');
precisionslider.owlCarousel({
  loop: true,
  nav: true,
  dots: false,
  smartSpeed: 450,
  autoplay: true,
  autoplayTimeout: 5000,
  margin: 20,
  responsive: {
    320: { items: 1.2},
    480: { items: 1.2},
    600: { items: 2.2},
    960: { items: 2.2 },
    1200: { items: 3.5 }

  }
});






