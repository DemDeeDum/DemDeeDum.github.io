'use strict';

const dataProvider = new CommonDataProvider();
dataProvider.downloadClothesItemsData(initProductPage);

function initProductPage(itemsCollection) {
    const purchaseBag = new PurchaseBag(itemsCollection);

    $('.product-all-images-container').slick({
        infinite: true,
        slidesToShow: 4,
        speed: 1000,
    });

    const productImageGallery = new ProductImageGallery();
    productImageGallery.setEvents();
}