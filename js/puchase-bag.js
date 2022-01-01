'use strict';

const dataProvider = new CommonDataProvider();
const itemsCollection = dataProvider.getClothesItemsData();
const purchaseBag = new PurchaseBag(itemsCollection);