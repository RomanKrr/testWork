document.addEventListener("DOMContentLoaded", function () {
    const burgerMenu = document.querySelector(".burger-menu");
    const navbarList = document.querySelector('.navbar__list');
    const body = document.body;

    burgerMenu.addEventListener("click", function () {
        this.classList.toggle("active");
        navbarList.classList.toggle('active');

        if (navbarList.classList.contains("active")) {
            body.classList.add("no-scroll");
        } else {
            body.classList.remove("no-scroll");
        }
    });
});

const plusButton = document.querySelector('.plus');
const closePopup = document.querySelector('.popup__btn-close');
const popup = document.querySelector('.popup');

plusButton.addEventListener('click', () => {
    popup.classList.toggle('active');
});
closePopup.addEventListener('click', () => {
    popup.classList.remove('active');
});


new Swiper(".comments__slider", {
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    slidesPerView: 1,
    breakpoints: {
        768: {
            slidesPerView: 2
        },
        1200: {
            slidesPerView: 3
        }
    }
});