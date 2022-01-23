'use strict';

class ProductInfoSection {
    constructor(product) {
        this.product = product;
        this.productInfoTemplate = document.querySelector('#product-info').innerHTML;
        this.productInfoContainer = document.querySelector('.product-info-container')
    }
}