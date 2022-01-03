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
  this.scrollY >= 200
    ? header.classList.add("scroll-header")
    : header.classList.remove("scroll-header");
}

window.addEventListener("scroll", scrollHeader);

/*====== SCROLL TO TOP ======*/
function scrollTop() {
  const scrollTop = document.getElementById("scroll-top");
  this.scrollY >= 560
    ? scrollTop.classList.add("show-scroll")
    : scrollTop.classList.remove("show-scroll");
}

window.addEventListener("scroll", scrollTop);
