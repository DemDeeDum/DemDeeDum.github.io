'use strict';

const dataProvider = new CommonDataProvider();
dataProvider.downloadClothesItemsData(initProductPage);

function initProductPage(itemsCollection) {
    const purchaseBag = new PurchaseBag(itemsCollection);

    $('.product-all-images-slider-container').slick({
        infinite: true,
        slidesToShow: 6,
        speed: 1000,
        responsive: [{
                breakpoint: 1350,
                settings: {
                    slidesToShow: 5
                }
            },
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 950,
                settings: {
                    slidesToShow: 6
                }
            },
            {
                breakpoint: 760,
                settings: {
                    slidesToShow: 5
                }
            },
            {
                breakpoint: 710,
                settings: {
                    slidesToShow: 6
                }
            },
            {
                breakpoint: 540,
                settings: {
                    slidesToShow: 5
                }
            },
            {
                breakpoint: 440,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 360,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 285,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 240,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    const productImageGallery = new ProductImageGallery();
    productImageGallery.setEvents();
    productImageGallery.selectFirstOne();
}