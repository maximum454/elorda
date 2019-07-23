import './elorda.scss'
import './js/slick'

import './img/logo.png'
import './img/logo-light.png'
import './img/mega-bord.png'
import './img/city-bord.png'
import './img/pilony.png'
import './img/rotondy.png'
import './img/map.jpg'
import './img/partners-img.png'
import './img/box-img-1.jpg'
import './img/box-img-2.jpg'
import './img/partners-logo.png'
import './img/map2.jpg'
import './img/map-slider.png'


$('.js-partners').slick({
    dots: false,
    arrows: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    variableWidth: true,
    responsive: [
        {
            breakpoint: 1024,
            settings: {

            }
        },
        {
            breakpoint: 900,
            settings: {
                arrows: false,
            }
        }
    ]
});

$('.js-map-slider').slick({
    dots: false,
    arrows: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true
});


$('.js-nav-btn').on('click', function () {
    $('.nav__list').slideToggle();
});



