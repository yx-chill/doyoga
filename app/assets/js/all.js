var courseSwiper = new Swiper(".courseSwiper", {
  slidesPerView: 1.5,
  spaceBetween: 30,
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  slidesPerColumn: 3,
  spaceBetween: 30,
  loop: false,
  breakpoints: {
    768:{
      slidesPerView: 2,
      slidesPerColumn: 2,
      spaceBetween: 30,
    },
    992:{
      slidesPerView: 3,
      slidesPerColumn: 1,
      spaceBetween: 30,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});