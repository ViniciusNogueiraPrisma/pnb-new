let swiperHome = new Swiper(".mySwiper", {
  slidesPerView: 2,
  spaceBetween: 30,
  // autoplay: {
  //   delay: 2000,
  //   disableOnInteraction: true,
  // },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

var swiperFooter = new Swiper(".mySwiper-footer", {
  slidesPerView: 1,
  spaceBetween: 24,
  loop: false,

  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination-footer",
    clickable: true,
  },
});

var swiperAval = new Swiper(".mySwiper-avaliacao", {
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

document.addEventListener("DOMContentLoaded", function () {
  new Splide(".splide", {
    type: "loop", // Pode ser 'loop', 'fade', etc.
    perPage: 1, // Quantidade de slides visíveis
    // autoplay: true,   // Ativar reprodução automática
    // interval: 2000,
    focus: "center",
    arrows: false,
    rewind: true, // Intervalo entre slides em milissegundos
    pagination: true, // Ocultar paginação (pontos indicando o slide atual)
  }).mount();
});

var swiper = new Swiper(".mySwiper-carrosel-cards-qs", {
  spaceBetween: 20,
  slidesPerView: 1,
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination-carrosel-h",
    clickable: true,
  },
});

// const link1 = document.getElementById("link1");
// const link2 = document.getElementById("link2");
// const div1 = document.getElementById("div1");
// const div2 = document.getElementById("div2");

// // Adicionar ouvintes de evento para os links
// link1.addEventListener("click", (event) => {
//   event.preventDefault(); // Impede o comportamento padrão do link
//   showDiv(div1, div2, link1, link2);
// });

// link2.addEventListener("click", (event) => {
//   event.preventDefault(); // Impede o comportamento padrão do link
//   showDiv(div2, div1, link2, link1);
// });

// const link1 = document.getElementById("link1");
// const link2 = document.getElementById("link2");
// const div1 = document.getElementById("div1");
// const div2 = document.getElementById("div2");

// // Função para mostrar uma div e aplicar uma classe
// function showDivAndApplyClass(
//   divToShow,
//   divToHide,
//   linkToShow,
//   linkToHide,
//   className
// ) {
//   divToShow.classList.add(className);
//   divToShow.style.display = "block";

//   divToHide.style.display = "none";
//   divToHide.classList.remove(className);

//   linkToShow.classList.add("active");
//   linkToHide.classList.remove("active");
// }

// // Adicionar ouvintes de evento para os links
// link1.addEventListener("click", (event) => {
//   event.preventDefault(); // Impede o comportamento padrão do link
//   showDivAndApplyClass(div1, div2, link1, link2, "showing");
// });

// link2.addEventListener("click", (event) => {
//   event.preventDefault(); // Impede o comportamento padrão do link
//   showDivAndApplyClass(div2, div1, link2, link1, "showing");
// });

const link1 = document.getElementById("link1");
const link2 = document.getElementById("link2");
const div1 = document.getElementById("div1");
const div2 = document.getElementById("div2");

// Adicionar ouvintes de evento para os links
link1.addEventListener("click", (event) => {
  event.preventDefault(); // Impede o comportamento padrão do link
  showDiv(div1, div2, link1, link2);
});

link2.addEventListener("click", (event) => {
  event.preventDefault(); // Impede o comportamento padrão do link
  showDiv(div2, div1, link2, link1);
});

function checkWindowSizeHome() {
  if (window.innerWidth <= 1000) {
    swiperHome.params.slidesPerView = 1;
  } else {
    swiperHome.params.slidesPerView = 2;
  }

  // if (window.innerWidth <= 780) {
  //   swiperHome.params.slidesPerView = 1;
  // } else {
  //   swiperHome.params.slidesPerView = 2;
  // }

  // swiperQuemSomos.update();
}

checkWindowSizeHome();
window.addEventListener("resize", checkWindowSizeHome);

function checkWindowSize() {
  if (window.innerWidth <= 1200) {
    swiperHome.params.slidesPerView = 1;
  } else {
    swiperHome.params.slidesPerView = 2;
  }

  swiperHome.update();
}

checkWindowSize();
window.addEventListener("resize", checkWindowSize);

var swiperCarosselHome = new Swiper(".mySwiper-carrosel-h", {
  slidesPerView: 1,
  spaceBetween: 20,
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination-carrosel-h",
    clickable: true,
  },
});

function checkWindowSizeCarroselHome() {
  if (window.innerWidth <= 1200) {
    swiperCarosselHome.params.slidesPerView = 1;
  } else {
    swiperCarosselHome.params.slidesPerView = 2;
  }

  swiperCarosselHome.update();
}

checkWindowSizeCarroselHome();
window.addEventListener("resize", checkWindowSizeCarroselHome);

var swiperProdutos = new Swiper(".mySwiper-carrosel-produtos", {
  slidesPerView: 3,
  spaceBetween: 30,
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination-carrosel-produtos",
    clickable: true,
  },
});

function checkWindowSizeProdutos() {
  if (window.innerWidth < 993) {
    swiperProdutos.params.slidesPerView = 2;
  } else {
    swiperProdutos.params.slidesPerView = 3;
  }

  if (window.innerWidth < 767) {
    swiperProdutos.params.slidesPerView = 1;
  } else {
    swiperProdutos.params.slidesPerView = 2;
  }

  swiperProdutos.update();
}

checkWindowSizeProdutos();
window.addEventListener("resize", checkWindowSizeProdutos);

var swiperCursos = new Swiper(".mySwiper-carrosel-cursos", {
  slidesPerView: 1,
  centeredSlides: true,
  spaceBetween: 10,
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// var swiperAvalQs = new Swiper(".mySwiper-avaliacao-qs", {
//   slidesPerView: "auto",
//   centeredSlides: true,
//   spaceBetween: 24,
//   autoplay: {
//     delay: 2000,
//     disableOnInteraction: false,
//   },
//   pagination: {
//     // el: ".swiper-pagination",
//     clickable: true,
//   },
// });

// function checkWindowSizeAval() {
//   if (window.innerWidth <= 1200) {
//     swiperAval.params.slidesPerView = 1;
//   } else {
//     swiperAval.params.slidesPerView = 2;
//   }

//   swiperAval.update();
// }

// checkWindowSizeAval();
// window.addEventListener("resize", checkWindowSizeAval);

// function checkWindowSizeFooter() {
//   if (window.innerWidth <= 600) {
//     swiperFooter.params.slidesPerView = 1;
//   } else {
//     swiperFooter.params.slidesPerView = 2;
//   }

//   swiperFooter.update();
// }

// checkWindowSizeFooter();
// window.addEventListener("resize", checkWindowSizeFooter);

// function checkWindowSizeFooter() {
//   if (window.innerWidth <= 1270) {
//     swiperFooter.params.slidesPerView = 1;
//   } else {
//     swiperFooter.params.slidesPerView = 2;
//   }

//   swiperFooter.update();
// }

// checkWindowSizeFooter();
// window.addEventListener("resize", checkWindowSizeFooter);

var swiperEquipe = new Swiper(".mySwiperEquipe", {
  slidesPerView: 3,
  spaceBetween: 30,
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

var swiper = new Swiper(".myPNB", {
  slidesPerView: 2,
  spaceBetween: 24,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".el-pagination",
    clickable: true,
  },
});

// var splide = new Splide(".splide", {
//   perPage: 1,
//   rewind: true,
// });

// splide.mount();

// $(document).ready(function () {
//   $(".slick-carousel").slick({
//     // infinite: true,
//     // centerMode: true,
//     // slidesToShow: 1,
//     // // slidesToScroll: 3,
//     // adaptiveHeight: true,
//     // fade: true,
//     // autoplay: true,
//     // autoplaySpeed: 2000,
//     rtl: true
//   });
// });

// Função para mostrar a div correta e aplicar a classe "active-border"
function showDiv(showElement, hideElement, showLink, hideLink) {
  showElement.style.display = "block";
  hideElement.style.display = "none";

  showLink.classList.add("active-border");
  hideLink.classList.remove("active-border");
}

$(document).ready(function () {
  $("#voltar-ao-topo").click(function (event) {
    event.preventDefault();

    $("html, body").animate({ scrollTop: 0 }, 800);
  });
});

// $(document).ready(function () {
//   function animateImage() {
//     $(".animate-img").animate({ top: "-130px" }, 200, function () {
//       // Após subir, inverte a direção para descer
//       $(".animate-img").animate({ top: "130px" }, 200, animateImage);
//     });
//   }

//   animateImage();
// });

//////////
