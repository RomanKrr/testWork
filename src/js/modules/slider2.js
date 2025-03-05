document.addEventListener("DOMContentLoaded", function () {
    const swiper = new Swiper('.slider__swiper', {
        loop: true,
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

    // Отримуємо всі кнопки
    const buttons = document.querySelectorAll('.slider__btn');

    // Додаємо обробник події для кожної кнопки
    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const slideIndex = parseInt(this.getAttribute('data-slide')); // Отримуємо номер слайда
            swiper.slideTo(slideIndex); // Перемикаємо слайд
        });
    });
});
