let swiperQuemSomos = new Swiper(".mySwiper-quem-somos", {
  slidesPerView: 3,
  spaceBetween: 30,
  autoplay: {
    delay: 2000,
    disableOnInteraction: true,
  },
  pagination: {
    el: ".swiper-pagination-quem-somos",
    clickable: true,
  },
});

function checkWindowSizeQs() {
  if (window.innerWidth <= 1135) {
    swiperQuemSomos.params.slidesPerView = 2;
  } else {
    swiperQuemSomos.params.slidesPerView = 3;
  }

  if (window.innerWidth <= 850) {
    swiperQuemSomos.params.slidesPerView = 1;
  }

  

  swiperQuemSomos.update();
}

checkWindowSizeQs();
window.addEventListener("resize", checkWindowSizeQs);

var swiperAval = new Swiper(".mySwiper-quem-somos-aval", {
  slidesPerView: "auto",
  centeredSlides: true,
  spaceBetween: 24,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
