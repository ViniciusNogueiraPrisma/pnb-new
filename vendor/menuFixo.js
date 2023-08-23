let offset = 0;
let isMenuActive = false; // Variável para verificar se o menu está ativo

function menuFixo() {
  const header = document.querySelector(".headerFixoMenu");
  const banner = document.querySelector(".banner-home");

  if (header) {
    if (window.pageYOffset > header.clientHeight && window.pageYOffset < 450) {
      header.classList.add("menu-bar");
      setTimeout(() => (header.style.top = "0"), 100);
      isMenuActive = true;
    } else if (
      window.pageYOffset >= header.clientHeight &&
      header.classList.contains("menu-bar") &&
      offset <= window.pageYOffset
    ) {
      header.style.top = "";
      setTimeout(() => header.classList.remove("menu-bar"), 600);
      isMenuActive = false;
    } else if (
      offset > window.pageYOffset &&
      !header.classList.contains("menu-bar")
    ) {
      header.classList.add("menu-bar");
      setTimeout(() => (header.style.top = "0"), 100);
      isMenuActive = true;
    }
    offset = window.pageYOffset;

    if (window.pageYOffset == 0) {
      header.classList.remove("menu-bar");
      setTimeout(() => (header.style.top = ""), 100);
      isMenuActive = false;
    }
  }

  // Atualiza o margin-top da classe .banner-home de acordo com o estado de isMenuActive
  if (isMenuActive) {
    banner.style.marginTop = "0";
  } else {
    banner.style.marginTop = "-110px";
  }
}

menuFixo();

window.addEventListener("scroll", debounce(menuFixo, 140));

// Função debounce para limitar a frequência de chamadas durante o scroll
function debounce(func, delay) {
  let timer;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(func, delay);
  };
}
