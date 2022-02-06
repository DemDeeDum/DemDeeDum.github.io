'use strict';

const dataProvider = new CommonDataProvider();
dataProvider.downloadClothesItemsData(initPurchaseBagPage);

function initPurchaseBagPage(itemsCollection) {
    const purchaseBag = new PurchaseBag(itemsCollection);
    purchaseBag.fillPurchaseListContainer();
    purchaseBag.setPurchaseBagPageEvents();

    if (!OrderForm.IS_INITIALIZED) {
        const orderForm = new OrderForm(purchaseBag);
        orderForm.setValidation();
        orderForm.setEvents();
    }
}