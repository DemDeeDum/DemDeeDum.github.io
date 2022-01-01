'use strict';

const itemsCollection = [{
    id: '12',
    image: {
        alt: 'grey-dress',
        src: 'images/2.jpg'
    },
    isTopSell: true,
    title: {
        text: 'Платье Футляр'
    },
    pricing: {
        retailPrice: 2000,
        wholesalePrice: 1700
    }
}];

const clothesShowcase = new ClothesShowcase(itemsCollection);

clothesShowcase.fillTopSellsContainer();
clothesShowcase.fillClothesContainer();

const purchaseBag = new PuchaseBag(itemsCollection);
purchaseBag.setEvents();

$('.top-sells-item-container').slick({
    infinite: true,
    slidesToShow: 4,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 1000,
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