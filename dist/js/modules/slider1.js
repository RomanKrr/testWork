document.addEventListener("DOMContentLoaded", function () {
    new Swiper('.training__slider', {
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'fraction',
        },
        slidesPerView: 1,
        spaceBetween: 20,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        }
    });
});