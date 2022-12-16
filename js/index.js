const swiper = new Swiper('.swiper', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,

  navigation: {
    nextEl: '.swiper-button-right',
    prevEl: '.swiper-button-left',
  },
});