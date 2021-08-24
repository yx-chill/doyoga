(function (d) {
  var config = {
    kitId: 'kfd7may',
    scriptTimeout: 3000,
    async: true
  },
    h = d.documentElement, t = setTimeout(function () { h.className = h.className.replace(/\bwf-loading\b/g, "") + " wf-inactive"; }, config.scriptTimeout), tk = d.createElement("script"), f = false, s = d.getElementsByTagName("script")[0], a; h.className += " wf-loading"; tk.src = 'https://use.typekit.net/' + config.kitId + '.js'; tk.async = true; tk.onload = tk.onreadystatechange = function () { a = this.readyState; if (f || a && a != "complete" && a != "loaded") return; f = true; clearTimeout(t); try { Typekit.load(config) } catch (e) { } }; s.parentNode.insertBefore(tk, s)
})(document);

var courseSwiper = new Swiper(".courseSwiper", {
  slidesPerColumnFill: 'row',
  slidesPerView: 2,
  slidesPerColumn: 2,
  spaceBetween: 30,
  breakpoints: {
    992: {
      slidesPerView: 1.5,
      slidesPerColumn: 1,
    },
  },
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
      slidesPerColumn: 2,
    },
    992: {
      slidesPerView: 3,
      slidesPerColumn: 1,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
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
      spaceBetween: 30,
    },
    992: {
      slidesPerView: 2,
      slidesPerColumn: 1,
      spaceBetween: 30,
    },
    1200: {
      slidesPerView: 3,
      slidesPerColumn: 1,
      spaceBetween: 20,
    },
  },
});

var teacherSwiper = new Swiper(".teacherSwiper", {
  slidesPerColumnFill: 'row',
  slidesPerView: 1,
  slidesPerColumn: 4,
  spaceBetween: 30,
  breakpoints: {
    768: {
      slidesPerView: 2,
      slidesPerColumn: 1,
    },
    1200: {
      slidesPerView: 3,
      slidesPerColumn: 1,
    },
  },
});

var curriculumSwiper = new Swiper(".curriculumSwiper", {
  slidesPerView: .5,
  breakpoints: {
    768: {
      slidesPerView: .75,
    },
    1200: {
      slidesPerView: 1,
    },
  },
});

var surroundingsSwiper = new Swiper(".surroundingsSwiper", {
  slidesPerView: 1.5,
  spaceBetween: 30,
  breakpoints: {
    768: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4.5,
    },
  },
});

const step = document.querySelectorAll('.step');
const course = document.querySelectorAll('.choose-course');
const level = document.querySelectorAll('.level');
const courseLevel = document.querySelector('.course-level');
const choosen = document.querySelector('.choosen');
const choose = document.querySelector('.choose');
const info = document.querySelector('.info');
const done = document.querySelector('.done');
const continueChoose = document.querySelector('.continue-choose');
const continueInfo = document.querySelector('.continue-info');
const stepInfo = document.querySelector('.step-info');
const stepDone = document.querySelector('.step-done');
const hamberger = document.querySelector('.ham');
const hamMenu = document.querySelector('.ham-menu');

info.classList.add('d-none');
done.classList.add('d-none');
courseLevel.classList.add('d-none');

hamberger.addEventListener('click', (e) => {
  hamMenu.classList.toggle('menu-active');
  console.log(111);
})

step.forEach((item) => {
  item.addEventListener('click', (e) => {
    step.forEach((item) => {
      item.classList.remove('choose-step');
    })
    item.classList.add('choose-step');
    let chooseStep = e.target.getAttribute('data-value');

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

  })
})

course.forEach((item) => {
  item.addEventListener('click', (e) => {
    course.forEach((item) => {
      item.classList.remove('active');
      item.classList.add('d-none');
    })
    item.classList.add('active');
    item.classList.remove('d-none');
    courseLevel.classList.remove('d-none');
  })
})

level.forEach((item) => {
  item.addEventListener('click', (e) => {
    level.forEach((item) => {
      item.classList.remove('choose-level');
    })
    item.classList.add('choose-level');
    choosen.classList.add('d-block');
  })
})

continueChoose.addEventListener('click', (e) => {
  step.forEach((item) => {
    item.classList.remove('choose-step');
  })
  stepInfo.classList.add('choose-step');
  choose.classList.add('d-none');
  info.classList.remove('d-none');
  done.classList.add('d-none');
  scrollTo(0, 0)
})

continueInfo.addEventListener('click', (e) => {
  step.forEach((item) => {
    item.classList.remove('choose-step');
  })
  stepDone.classList.add('choose-step');
  choose.classList.add('d-none');
  info.classList.add('d-none');
  done.classList.remove('d-none');
  scrollTo(0, 0)
})
