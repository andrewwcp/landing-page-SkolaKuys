const hamburger = document.querySelector("#hamburger");
const showMenu = document.querySelector(".nav-menu");

addEventListener("click", function () {
  hamburger.classList.toggle("is-active");
  showMenu.classList.toggle("active");
});

const highlightMenu = () => {
  const borderBottom = document.querySelector(".highlight");
  const homeMenu = document.querySelector("#home-page");
  const aboutMenu = document.querySelector("#about-page");
  const coursesMenu = document.querySelector("#courses-page");
  let scrollPos = window.scrollY;

  if (window.innerWidth > 960 && scrollPos < 600) {
    homeMenu.classList.add("highlight");
    aboutMenu.classList.remove("highlight");
    return;
  } else if (window.innerWidth > 960 && scrollPos < 1200) {
    aboutMenu.classList.add("highlight");
    homeMenu.classList.remove("highlight");
    coursesMenu.classList.remove("highlight");
    return;
  } else if (window.innerWidth > 960 && scrollPos < 1850) {
    coursesMenu.classList.add("highlight");
    aboutMenu.classList.remove("highlight");
    return;
  }

  if (
    (borderBottom && window.innerWidth < 960 && scrollPos < 600) ||
    borderBottom
  ) {
    borderBottom.classList.remove("highlight");
  }
};

window.addEventListener("scroll", highlightMenu);
window.addEventListener("click", highlightMenu);
