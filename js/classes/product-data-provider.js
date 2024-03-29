'use strict';

class ProductDataProvider extends DataProvider {
    constructor(itemsCollection) {
        const queryString = location.search;
        const urlParams = new URLSearchParams(queryString);
        const itemId = urlParams.get('id');

        if (itemId) {
            super({
                getDataUrl: `https://script.google.com/macros/s/AKfycbzNENRPZjl8OelHY7-GhruoSandvLpStQ70-19Njahu0C5x2Pns9PWPaRojkIWYhTvnqQ/exec?id=${itemId}`,
                getIsShouldUpdateUrlPart: 'https://script.google.com/macros/s/AKfycbzNENRPZjl8OelHY7-GhruoSandvLpStQ70-19Njahu0C5x2Pns9PWPaRojkIWYhTvnqQ/exec?lastUpdated=',
                dataKey: `product-additional-info-${itemId}`,
                lastUpdatedKey: `last-update-product-addition-info-${itemId}`,
                method: 'GET'
            });

            this.product = itemsCollection.find(x => x.id === itemId);
        }
    }

    getAdditionalProductInfo(onGetData) {
        const productDataProvider = this;

        let additionalData = {};

        super.getData((jsonData) => {
            Object.keys(additionalData).forEach(propertyName => delete this.product[propertyName]);
            Object.assign(productDataProvider.product, jsonData);

            additionalData = jsonData;

            onGetData(productDataProvider.product);
        });
    }
}