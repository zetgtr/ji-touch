"use strict";

(function (w, d) {
  window.addEventListener('DOMContentLoaded', function () {
    var swiper2 = new Swiper(".mySwiper", {
      spaceBetween: 10,
      slidesPerView: 6,
      freeMode: true,
      watchSlidesProgress: true
    });
    var swiper = new Swiper(".serviceSwiper", {
      pagination: {
        el: ".swiper-pagination",
        type: "fraction"
      },
      effect: 'fade',
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      thumbs: {
        swiper: swiper2
      },
      loop: true,
      on: {
        realIndexChange: function realIndexChange(swiper) {
          var activeIndex = swiper.realIndex;
          animateText(activeIndex);
        }
      }
    });

    function animateText(slideNum) {
      var slideNumber = document.querySelector('.count');
      slideNumber.classList.add('move');
      setTimeout(function () {
        slideNumber.innerHTML = "".concat(slideNum + 1);
        slideNumber.classList.remove('move');
      }, 400);
    }

    ;
    $(function () {
      window.addEventListener("scroll", function (event) {
        var _this = this;

        var top = this.pageYOffset;
        var layers = $(".parralax__img-container");
        var speed, yPos;
        layers.each(function (el) {
          speed = $(_this).attr("data-speed");
          var yPos = -(top * speed / 100);
          $(_this).attr("style", "transform: translate3d(0px, " + yPos + "px, 0px)");
        });
      });
    });
    var dropdown = document.querySelectorAll('.dropdown');
    dropdown.forEach(function (el) {
      return el.addEventListener('click', function (e) {
        e.target.closest('.dropdown').classList.toggle('active');
      });
    });
    var option = document.querySelectorAll('.option');
    option.forEach(function (el) {
      el.querySelectorAll('div').forEach(function (el) {
        el.addEventListener('click', function (e) {
          // console.dir(e.target.innerHTML);
          console.log(e.target);
          e.target.closest('.option').previousElementSibling.value = e.target.innerHTML; // textBox.value = e.target.innerHTML
        });
      });
    });
  });
  var form = d.getElementById('form__zakaz');
  var ds = d.getElementById('file_display');
  var input_f = d.getElementById('myfile');
  if (!input_f) return true;

  input_f.onchange = function () {
    ds.innerHTML = '';
    if (this.files.length == 0) ds.closest('.file-display--container').classList.add('d-none');else ds.closest('.file-display--container').classList.remove('d-none');
    [].forEach.call(this.files, function (el) {
      var file_name = document.createElement('div');
      file_name.innerText = el.name;
      ds.append(file_name);
    });
  };

  var array = document.querySelectorAll('.porfolio__item-mobile');
  array.forEach(function (el) {
    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        start: "top 60%",
        end: 'top 20%',
        scrub: 1
      }
    });
    tl.to(el, {
      y: 40,
      duration: 2
    });
  });
  VanillaTilt.init(document.querySelectorAll('.porfolio__item'), {
    max: 10,
    speed: 400
  });
  new WOW().init();
})(window, document);
// const header = document.querySelector('.header');
// let prevScroll = window.scrollY;
// window.addEventListener('scroll', () => {
//     scroll = window.scrollY
//     if (scroll > 0) {
//         header.classList.add('fixed')
//     } else {
//         header.classList.remove('fixed')
//     }
//     prevScroll = scroll;
// });
"use strict";
"use strict";
"use strict";

(function () {
  var scrol_fix = 0;
  var direction = 0;
  var header = document.querySelector('.header'); // const s = document.querySelector('.sss');

  var timerId = {
    id: null
  };
  window.addEventListener('scroll', function () {
    var scrolled_y = window.pageYOffset;
    direction = scrolled_y > scrol_fix ? 1 : 0;

    if (direction) {
      if (window.scrollY > 20 && timerId.id === null) {
        timerId.id = setTimeout(function () {
          header.classList.add('header_fix'); // s.classList.add('_fix');

          timerId.id = null;
        }, 50);
      }
    } else {
      if (window.scrollY <= 10 && header.classList.contains('header_fix')) {
        header.classList.remove('header_fix'); // s.classList.remove('_fix');

        if (timerId.id !== null) {
          clearTimeout(timerId.id);
          timerId.id = null;
        }

        ;
      }
    }

    scrol_fix = scrolled_y;
  }); // burger

  var menuWrapper = document.querySelector('.bur__wrapper');
  var burger = document.querySelector('#burger-btn');
  var burgerWrapper = document.querySelector('.bur');
  var headerWrapper = document.querySelector('.header__wrapper');
  var body = document.querySelector('body');
  var headerMain = document.querySelector('.header');
  burger.addEventListener('click', function () {
    console.log(headerWrapper);
    burger.classList.toggle('active');
    menuWrapper.classList.toggle('visibility');
    burgerWrapper.classList.toggle('show');
    headerWrapper.classList.toggle('hidden');
    body.classList.toggle('no-scroll');
    headerMain.classList.toggle('burger__open');
    burgerWrapper.classList.toggle('visibility');
    setTimeout(function () {}, 400);
  }); // animation fullsreen

  var cont = document.querySelector('.animate-container');

  for (var i = 1; i <= 100; i++) {
    var dot = document.createElement('div');
    dot.classList.add('element');
    cont.appendChild(dot);
  }

  var dotAll = document.querySelectorAll('.element');
  var animation = anime.timeline({
    targets: dotAll,
    easing: 'easeInOutExpo',
    loop: true,
    delay: anime.stagger(40, {
      grid: [10, 10],
      from: 'center'
    })
  });
  animation.add({
    rotateZ: 180,
    translateY: anime.stagger(-60, {
      grid: [10, 10],
      from: 'center',
      axis: 'y'
    }),
    translateX: anime.stagger(-60, {
      grid: [10, 10],
      from: 'center',
      axis: 'x'
    })
  }).add({
    rotateZ: 180,
    translateY: anime.stagger(0, {
      grid: [10, 10],
      from: 'center',
      axis: 'y'
    }),
    translateX: anime.stagger(0, {
      grid: [10, 10],
      from: 'center',
      axis: 'x'
    }),
    opacite: 1
  }); // parallax 3d

  var c5 = new Rellax('.animate-container', {
    speed: -2
  }); // click button

  var allBtns = document.querySelectorAll('.button-click');
  allBtns.forEach(function (el) {
    el.addEventListener('click', function (e) {
      e.preventDefault();
      var x = e.clientX - e.target.offsetLeft;
      var y = e.clientY - e.target.offsetTop;
      var riples = document.createElement('i');
      riples.style.left = x + 'px';
      riples.style.top = y + 'px';
      this.appendChild(riples);
      setTimeout(function () {
        riples.remove();
      }, 1200);
    });
  });
})();
//# sourceMappingURL=main.js.map
