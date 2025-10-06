!function (a) { a.fn.isOnScreen = function (b) { var c = this.outerHeight(), d = this.outerWidth(); if (!d || !c) return !1; var e = a(window), f = { top: e.scrollTop(), left: e.scrollLeft() }; f.right = f.left + e.width(), f.bottom = f.top + e.height(); var g = this.offset(); g.right = g.left + d, g.bottom = g.top + c; var h = { top: f.bottom - g.top, left: f.right - g.left, bottom: g.bottom - f.top, right: g.right - f.left }; return "function" == typeof b ? b.call(this, h) : h.top > 0 && h.left > 0 && h.right > 0 && h.bottom > 0 } }(jQuery);



 document.addEventListener('DOMContentLoaded', () => {
    const dropdowns = document.querySelectorAll('.nav-item');

    dropdowns.forEach((item) => {
      const toggle = item.querySelector('.toggle-dropdown');
      const submenu = item.querySelector('.dropdown');

      if (toggle && submenu) {
        toggle.addEventListener('click', (e) => {
          if (window.innerWidth < 769) {
            e.preventDefault();
            item.classList.toggle('open');

            // Toggle icon + / −
            if (item.classList.contains('open')) {
              toggle.classList.add('open');
            } else {
              toggle.classList.remove('open');
            }

            // Close other open dropdowns (optional)
            dropdowns.forEach((other) => {
              if (other !== item) {
                other.classList.remove('open');
                const otherIcon = other.querySelector('.toggle-dropdown');
                if (otherIcon) otherIcon.classList.remove('open');
              }
            });
          }
        });
      }
    });
  });









$(window).on('scroll', function (event) {
    var scrollValue = $(window).scrollTop();
    if (scrollValue > 200) {
      $('#header').addClass('fixed');
    } else {
      $('#header').removeClass('fixed');
    }
  });




AOS.init({
    duration: 1000, // animation duration
    once: true      // whether animation should happen only once
  });





//========home page=========
var slider1 = $('.slider1');
slider1.owlCarousel({
  loop: true,
  nav: true,
  dots: false,
  smartSpeed: 450,
  autoplay: true,
  autoplayTimeout: 5000,
  margin: 20,
  responsive: {
    320: { items: 1.2 },
    480: { items: 1.3 },
    600: { items: 2 },
    960: { items: 3 },
    1200: { items: 3.5 }

  }
});





