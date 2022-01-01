'use strict';

class PuchaseBag {
    constructor(itemsCollection) {
        this.PURCHASE_LIST_KEY = 'purchase-list-key-spoon-shop';

        this.itemsCollection = itemsCollection;
        this.purchaseCounterSpan = document.getElementById('purchase-counter');

        this.initPurchaseListData();
        this.updatePurhaseCounterValue();
    }

    initPurchaseListData() {
        const storedPurchaseList = localStorage.getItem(this.PURCHASE_LIST_KEY);
        if (storedPurchaseList) {
            this.purchaseList = storedPurchaseList.split(',');
        } else {
            this.purchaseList = [];
        }
    }

    setEvents() {
        const buttons = document.getElementsByClassName('clothes-item-button');
        const purchaseBag = this;
        for (const button of buttons) {
            button.addEventListener('click', (e) => {
                const button = e.target;
                const itemId = button.getAttribute('data-clothes-item-id');

                purchaseBag.purchaseList.push(itemId);
                purchaseBag.updatePurhaseCounterValue();
                purchaseBag.savePurchaseData();
            });
        };
    }

    updatePurhaseCounterValue() {
        this.purchaseCounter = this.purchaseList.length;
        this.purchaseCounterSpan.innerText = this.purchaseCounter;
    }

    savePurchaseData() {
        localStorage.setItem(this.PURCHASE_LIST_KEY, this.purchaseList);
    }
}