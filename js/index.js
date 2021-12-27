'use strict';

$('.top-sells-item-container').slick({
    infinite: true,
    slidesToShow: 4,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 1000,
    prevArrow: '',
    nextArrow: '',
    responsive: [{
            breakpoint: 1350,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 1100,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 800,
            settings: {
                slidesToShow: 1
            }
        }
    ]
});