$('.main-inner').slick({
    infinite: true,
    autoplay: true,
    arrows: false,
});

let menuBurger = document.querySelector('.menu-burger');
let menuBurgerBody = document.querySelector('.menu-burger-inner');
let mobileMenu = document.querySelector('.mobile-menu');
let mobileMenuBody = document.querySelector('.mobile-menu-inner');
menuBurger.addEventListener('click', () => {
    menuBurgerBody.classList.toggle('__show-mobile');
    mobileMenu.classList.toggle('__show-mobile');
    mobileMenuBody.classList.toggle('__show-mobile');
})

$('.our-projects-items-content').slick({
    infinite: true,
    autoplay: false,
    arrows: false,
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
});

let contactBtn = document.querySelector('.contact-button');
let contactBtnBody = document.querySelector('.contact-button-inner');
let contactBtnWp = document.querySelector('.contact-button-whatsapp');
let contactBtnPhone = document.querySelector('.contact-button-phone');


contactBtn.addEventListener('click', () => {
    contactBtnBody.classList.toggle('__active');
    contactBtnPhone.classList.toggle('__active');
    contactBtnWp.classList.toggle('__active');
})

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    // если страница прокручена больше чем на 400px, то делаем кнопку видимой, иначе скрываем
    if (scrollY > 400){
        contactBtn.classList.add('show_btn')
    } 
    else if (scrollY < 400){
        contactBtn.classList.remove('show_btn')

    }
})