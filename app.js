//mostrar menu
const $nav = document.querySelector(".nav");
const $close = document.querySelector(".nav-close");
const $open = document.querySelector(".nav-toggle");

$open.addEventListener("click", () => {
    $nav.classList.add("show-menu");
});

$close.addEventListener("click", () => {
    $nav.classList.remove("show-menu");
});

/* remver el menu al escoger una opcion */
const navlist = document.querySelectorAll(".nav-link");

function removerMenu() {
    $nav.classList.remove("show-menu");
}

navlist.forEach((n) => n.addEventListener("click", removerMenu));

//cambiar la actividad de link
const linkColor = document.querySelectorAll(".nav-link");

function colorlink() {
    if (colorlink) {
        linkColor.forEach((i) => {
            i.classList.remove("active");
            this.classList.add("active");
        });
    }
}

linkColor.forEach((i) => {
    i.addEventListener("click", colorlink);
});

/* Slider Testimonio */
var swiper = new Swiper(".slide", {
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    slidesPerView: 1,
    spaceBetween: 10,
    breakPoints: {
        560: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        860: {
            slidesPerView: 1,
            spaceBetween: 40,
        },
        1060: {
            slidesPerView: 2,
            spaceBetween: 50,
        },
    },
});

/* shadow header */

const header = document.querySelector(".header");
window.addEventListener("scroll", () => {
    if (window.scrollY >= 70) {
        header.classList.add("header-sh");
    } else {
        header.classList.remove("header-sh");
    }
});

/* arriba */
const up = document.querySelector(".up");
window.addEventListener("scroll", () => {
    up.classList.toggle("show", window.scrollY >= 560);
    up.onclick = () => {
        window.scrollTo({ behavior: "smooth", top: "0" });
    };
});
