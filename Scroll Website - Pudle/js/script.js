const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar-menu");
const navlogo = document.querySelector("#navbar-logo");

// Display Mobile Menu
const mobileMenu = () => {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
};

menu.addEventListener("click", mobileMenu);

//Show Active Menu Scrolling
const highlightMenu = () => {
  const elem = document.querySelector(".highlight");
  const homeMenu = document.querySelector("#home-page");
  const aboutMenu = document.querySelector("#about-page");
  const newsMenu = document.querySelector("#news-page");
  const galleryMenu = document.querySelector("#gallery-page");
  const contactMenu = document.querySelector("#contact-page");

  let scrollPos = window.scrollY;
  // console.log(scrollPos);

  // add 'highlight' class to my menu items

  if (window.innerWidth > 960 && scrollPos < 600) {
    homeMenu.classList.add("highlight");
    aboutMenu.classList.remove("highlight");
    return;
  } else if (window.innerWidth > 960 && scrollPos < 1000) {
    aboutMenu.classList.add("highlight");
    homeMenu.classList.remove("highlight");
    newsMenu.classList.remove("highlight");
    return;
  } else if (window.innerWidth > 960 && scrollPos < 1400) {
    newsMenu.classList.add("highlight");
    aboutMenu.classList.remove("highlight");
    galleryMenu.classList.remove("highlight");
    return;
  } else if (window.innerWidth > 960 && scrollPos < 1800) {
    galleryMenu.classList.add("highlight");
    newsMenu.classList.remove("highlight");
    aboutMenu.classList.remove("highlight");
    contactMenu.classList.remove("highlight");
    return;
  } else if (window.innerWidth > 960 && scrollPos < 2345) {
    contactMenu.classList.add("highlight");
    galleryMenu.classList.remove("highlight");
    return;
  }
  if ((elem && window.innerWidth < 960 && scrollPos < 600) || elem) {
    elem.classList.remove("highlight");
  }
};

window.addEventListener("scroll", highlightMenu);
window.addEventListener("click", highlightMenu);

// Close Mobile Menu

const hideMobileMenu = () => {
  const menuBars = document.querySelector(".is-active");
  if (window.innerWidth <= 768 && menuBars) {
    menu.classList.toggle("is-active");
    menuLinks.classList.remove("active");
  }
};

menuLinks.addEventListener("click", hideMobileMenu);
navlogo.addEventListener("click", hideMobileMenu);

//Scroll to top button

const btnToTop = document.querySelector(".btn-to-top");

window.onscroll = function () {
  if (document.documentElement.scrollTop > 800) {
    btnToTop.style.display = "block";
  } else {
    btnToTop.style.display = "none";
  }
};

function toTop() {
  document.documentElement.scrollTop = 0;
}

btnToTop.addEventListener("click", toTop);

//Swiper
var swiper = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween: 25,
  loop: true,
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 2,
    },
    950: {
      slidesPerView: 3,
    },
  },
});
