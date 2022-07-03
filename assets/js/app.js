/*======= PRE-Loader =========*/
const main = document.querySelector(".l-main");
const loader = document.querySelector(".pre__loader");

window.addEventListener("load", () => {
  loader.style.display = "none";
  main.style.display = "block";
});

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

const section = document.querySelectorAll(".in-nav");

function scrollActive() {
  const scrollY = window.pageYOffset;
  section.forEach((sec) => {
    const sectionHeight = sec.offsetHeight;
    const sectionTop = sec.offsetTop - 20;
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

// const swiper = new Swiper(".testimonial__container", {
//   // Optional parameters
//   spaceBetween: 16,
//   loop: true,
//   grabCursor: true,

//   // If we need pagination
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
//   breakpoints: {
//     640: {
//       slidesPerView: 2,
//     },
//     1024: {
//       slidesPerView: 3,
//     },
//   },
// });

/* ====== GSAP Animations ======= */

gsap.from(".home__img", { opacity: 0, duration: 2, delay: 0.7, x: 60 });
gsap.from(".home__data", { opacity: 0, duration: 2, delay: 1, y: 25 });
gsap.from(".home__greeting, .home__name, .home__profession, .home__button", {
  opacity: 0,
  duration: 2,
  delay: 1.2,
  y: 25,
  ease: "expo.out",
  stagger: 0.2,
});

gsap.from(".nav__logo, .nav__toggle", {
  opacity: 0,
  duration: 2,
  delay: 1.7,
  y: 25,
  ease: "expo.out",
  stagger: 0.2,
});

gsap.from(".nav__item", {
  opacity: 0,
  duration: 2,
  delay: 2,
  y: 25,
  ease: "expo.out",
  stagger: 0.2,
});

gsap.from(".home__social-icon", {
  opacity: 0,
  duration: 2,
  delay: 2.5,
  y: 25,
  ease: "expo.out",
  stagger: 0.2,
});
