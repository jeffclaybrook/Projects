const nav = document.querySelector('nav');
const navBtn = document.querySelector('.menu-btn');

window.addEventListener("scroll", (e) => {
   const header = document.querySelector("header");
   if (window.pageYOffset > 0) {
      header.classList.add("header-scroll");
   } else {
      header.classList.remove("header-scroll");
   }
});

const toggleMenu = () => {
   nav.classList.toggle('expanded');
}

navBtn.addEventListener('click', toggleMenu);