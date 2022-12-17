const swiper = new Swiper('.swiper', {
  effect: "coverflow",
  centeredSlides: true,
  slidesPerView: "auto",
  spaceBetween: 250,
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: false,
  },
  navigation: {
    nextEl: '.swiper-button-right',
    prevEl: '.swiper-button-left',
  },
});