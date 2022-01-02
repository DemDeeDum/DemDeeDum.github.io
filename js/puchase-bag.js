'use strict';

const dataProvider = new CommonDataProvider();
dataProvider.downloadClothesItemsData();

function initPurchaseBagPage(itemsCollection) {
    const purchaseBag = new PurchaseBag(itemsCollection);
}