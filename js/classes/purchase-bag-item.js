'use strict';

class PurchaseBagItem {
    constructor(count, price, title, imageSrc) {
        this.count = count;
        this.price = price;
        this.title = title;
        this.imageSrc = imageSrc;
    }

    incrementCount() {
        this.count++;
    }
}