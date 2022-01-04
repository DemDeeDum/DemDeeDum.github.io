'use strict';

const dataProvider = new CommonDataProvider();
dataProvider.downloadClothesItemsData(initProductPage);

function initProductPage(itemsCollection) {
    const purchaseBag = new PurchaseBag(itemsCollection);
}