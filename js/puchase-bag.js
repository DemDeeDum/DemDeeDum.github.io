'use strict';

const dataProvider = new CommonDataProvider();
dataProvider.downloadClothesItemsData(initPurchaseBagPage);

function initPurchaseBagPage(itemsCollection) {
    const purchaseBag = new PurchaseBag(itemsCollection);
}