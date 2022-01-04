'use strict';

class PurchaseBag {
    constructor(itemsCollection) {
        this.PURCHASE_LIST_KEY = 'purchase-list-key-spoon-shop';

        this.itemsCollection = itemsCollection;
        this.purchaseCounterSpan = document.getElementById('purchase-counter');
        this.purchaseListContainer = document.getElementsByClassName('purchase-list-container')[0];

        this.initPurchaseListData();
        this.updatePurhaseData();
    }

    initPurchaseListData() {
        const storedPurchaseList = localStorage.getItem(this.PURCHASE_LIST_KEY);
        if (storedPurchaseList) {
            this.purchaseList = storedPurchaseList.split(',');
        } else {
            this.purchaseList = [];
        }
    }

    fillPurchaseListContainer() {
        this.purchaseList
            .forEach(element => {
                const htmlItem = this.createPurchaseBagHtmlItem(element);

                this.purchaseListContainer.appendChild(htmlItem);
            })
    }

    createPurchaseBagHtmlItem(objectPurchaseItem) {

    }

    setEvents() {
        const buttons = document.getElementsByClassName('clothes-item-button');
        const purchaseBag = this;
        for (const button of buttons) {
            button.addEventListener('click', (e) => {
                const button = e.target;
                const itemId = button.getAttribute('data-clothes-item-id');

                purchaseBag.purchaseList.push(itemId);
                purchaseBag.updatePurhaseData();
            });
        };
    }

    updatePurhaseData() {
        this.purchaseCounterSpan.innerText = this.purchaseList.length;
        localStorage.setItem(this.PURCHASE_LIST_KEY, this.purchaseList);
    }
}