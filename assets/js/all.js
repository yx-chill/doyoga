"use strict";

(function (d) {
  var config = {
    kitId: 'kfd7may',
    scriptTimeout: 3000,
    async: true
  },
      h = d.documentElement,
      t = setTimeout(function () {
    h.className = h.className.replace(/\bwf-loading\b/g, "") + " wf-inactive";
  }, config.scriptTimeout),
      tk = d.createElement("script"),
      f = false,
      s = d.getElementsByTagName("script")[0],
      a;
  h.className += " wf-loading";
  tk.src = 'https://use.typekit.net/' + config.kitId + '.js';
  tk.async = true;

  tk.onload = tk.onreadystatechange = function () {
    a = this.readyState;
    if (f || a && a != "complete" && a != "loaded") return;
    f = true;
    clearTimeout(t);

    try {
      Typekit.load(config);
    } catch (e) {}
  };

  s.parentNode.insertBefore(tk, s);
})(document);

var courseSwiper = new Swiper(".courseSwiper", {
  slidesPerColumnFill: 'row',
  slidesPerView: 2,
  slidesPerColumn: 2,
  spaceBetween: 30,
  breakpoints: {
    992: {
      slidesPerView: 1.5,
      slidesPerColumn: 1
    }
  }
});
var swiper = new Swiper(".mySwiper", {
  slidesPerColumnFill: 'row',
  slidesPerView: 1,
  slidesPerColumn: 3,
  spaceBetween: 30,
  loop: false,
  breakpoints: {
    768: {
      slidesPerView: 2,
      slidesPerColumn: 2
    },
    992: {
      slidesPerView: 3,
      slidesPerColumn: 1
    }
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
});
var chooseSwiper = new Swiper(".chooseSwiper", {
  slidesPerColumnFill: 'row',
  slidesPerView: 1,
  slidesPerColumn: 3,
  spaceBetween: 30,
  loop: false,
  breakpoints: {
    768: {
      slidesPerView: 1.5,
      slidesPerColumn: 1,
      spaceBetween: 30
    },
    992: {
      slidesPerView: 2,
      slidesPerColumn: 1,
      spaceBetween: 30
    },
    1200: {
      slidesPerView: 3,
      slidesPerColumn: 1,
      spaceBetween: 20
    }
  }
});
var teacherSwiper = new Swiper(".teacherSwiper", {
  slidesPerColumnFill: 'row',
  slidesPerView: 1,
  slidesPerColumn: 4,
  spaceBetween: 30,
  breakpoints: {
    768: {
      slidesPerView: 2,
      slidesPerColumn: 1
    },
    1200: {
      slidesPerView: 3,
      slidesPerColumn: 1
    }
  }
});
var curriculumSwiper = new Swiper(".curriculumSwiper", {
  slidesPerView: .3,
  freeMode: true,
  breakpoints: {
    576: {
      slidesPerView: .5
    },
    768: {
      slidesPerView: .75
    },
    1200: {
      slidesPerView: 1
    }
  }
});
var surroundingsSwiper = new Swiper(".surroundingsSwiper", {
  slidesPerView: 1.5,
  spaceBetween: 30,
  breakpoints: {
    768: {
      slidesPerView: 3
    },
    1200: {
      slidesPerView: 4.5
    }
  }
});
var hamburger = document.querySelector('.ham');
var hamMenu = document.querySelector('.ham-menu');
hamburger.addEventListener('click', function (e) {
  hamMenu.classList.toggle('menu-active');
});
var step = document.querySelectorAll('.step');
var course = document.querySelectorAll('.choose-course');
var level = document.querySelectorAll('.level');
var courseLevel = document.querySelector('.course-level');
var choosen = document.querySelector('.choosen');
var choose = document.querySelector('.choose');
var info = document.querySelector('.info');
var done = document.querySelector('.done');
var continueChoose = document.querySelector('.continue-choose');
var continueInfo = document.querySelector('.continue-info');
var stepInfo = document.querySelector('.step-info');
var stepDone = document.querySelector('.step-done');
info.classList.add('d-none');
done.classList.add('d-none');
courseLevel.classList.add('d-none');
step.forEach(function (item) {
  item.addEventListener('click', function (e) {
    step.forEach(function (item) {
      item.classList.remove('choose-step');
    });
    item.classList.add('choose-step');
    var chooseStep = e.target.getAttribute('data-value');
    choose.classList.add('d-none');
    info.classList.add('d-none');
    done.classList.add('d-none');

    switch (chooseStep) {
      case '1':
        choose.classList.remove('d-none');
        break;

      case '2':
        info.classList.remove('d-none');
        break;

      case '3':
        done.classList.remove('d-none');
        break;

      default:
        return;
    }
  });
});
course.forEach(function (item) {
  item.addEventListener('click', function (e) {
    course.forEach(function (item) {
      item.classList.remove('active');
      item.classList.add('d-none');
    });
    item.classList.add('active');
    item.classList.remove('d-none');
    courseLevel.classList.remove('d-none');
  });
});
level.forEach(function (item) {
  item.addEventListener('click', function (e) {
    level.forEach(function (item) {
      item.classList.remove('choose-level');
    });
    item.classList.add('choose-level');
    choosen.classList.add('d-block');
  });
});
continueChoose.addEventListener('click', function (e) {
  step.forEach(function (item) {
    item.classList.remove('choose-step');
  });
  stepInfo.classList.add('choose-step');
  choose.classList.add('d-none');
  info.classList.remove('d-none');
  done.classList.add('d-none');
  scrollTo(0, 0);
});
continueInfo.addEventListener('click', function (e) {
  step.forEach(function (item) {
    item.classList.remove('choose-step');
  });
  stepDone.classList.add('choose-step');
  choose.classList.add('d-none');
  info.classList.add('d-none');
  done.classList.remove('d-none');
  scrollTo(0, 0);
});
//# sourceMappingURL=all.js.map
