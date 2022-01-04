/*====== Show Menu ======*/
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show-menu");
    });
  }
};

showMenu("nav__toggle", "nav__menu");

/*====== Remove Menu ======*/
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.getElementById("nav__menu");
  navMenu.classList.remove("show-menu");
}

navLink.forEach((el) => el.addEventListener("click", linkAction));

/*====== Scroll Section Active Link ======*/

const section = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;
  section.forEach((sec) => {
    const sectionHeight = sec.offsetHeight;
    const sectionTop = sec.offsetTop - 50;
    const sectionId = sec.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(`.nav__menu a[href*=${sectionId}]`)
        .classList.add("active-link");
    } else {
      document
        .querySelector(`.nav__menu a[href*=${sectionId}]`)
        .classList.remove("active-link");
    }
  });
}

window.addEventListener("scroll", scrollActive);

/*====== Change Header BG ======*/

function scrollHeader() {
  const header = document.getElementById("header");
  // console.log(this.scrollY);
  this.scrollY >= 450
    ? header.classList.add("scroll-header")
    : header.classList.remove("scroll-header");
}

window.addEventListener("scroll", scrollHeader);

/*====== SCROLL TO TOP ======*/
function scrollTop() {
  const scrollTop = document.getElementById("scroll-top");
  // console.log(this.scrollY);
  this.scrollY >= 600
    ? scrollTop.classList.add("show-scroll")
    : scrollTop.classList.remove("show-scroll");
}

window.addEventListener("scroll", scrollTop);

/* ====== MixItUp Filter Portfolio ======= */

const mixer = mixitup(".portfolio__container", {
  selectors: {
    target: ".portfolio__content",
  },
  animation: {
    duration: 300,
  },
});

/* ====== Active Filter Portfolio ======= */

const activeSkill = document.querySelectorAll(".portfolio__item");

function activeSkills() {
  if (activeSkill) {
    activeSkill.forEach((s) => s.classList.remove("active-skill"));
    this.classList.add("active-skill");
  }
}

activeSkill.forEach((s) => s.addEventListener("click", activeSkills));

/* ====== Swiper ======= */

const swiper = new Swiper(".testimonial__container", {
  // Optional parameters
  spaceBetween: 16,
  loop: true,
  grabCursor: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});
