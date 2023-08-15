let swiperCardInvest = new Swiper(".mySwiper-cambio", {
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay: {
      delay: 2000,
      disableOnInteraction: true,
    },
    pagination: {
        el: ".pagination-invest",
        clickable: true,
      },
  });
  

  let swiperBanking = new Swiper(".mySwiper-banking", {
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay: {
      delay: 2000,
      disableOnInteraction: true,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
  