'use strict';

class ProductDataProvider extends DataProvider {
    constructor(itemsCollection) {
        const queryString = location.search;
        const urlParams = new URLSearchParams(queryString);
        const itemId = urlParams.get('id');

        if (itemId) {
            super({
                getDataUrl: `https://script.google.com/macros/s/AKfycbxbKo46WpQqeAnZNRhMeRqM1MMzgAS7qMdl2orIy-KzgiwQJi_fd5QLrCz6ZXu_QqdoIg/exec?id=${itemId}`,
                getIsShouldUpdateUrlPart: 'https://script.google.com/macros/s/AKfycbxbKo46WpQqeAnZNRhMeRqM1MMzgAS7qMdl2orIy-KzgiwQJi_fd5QLrCz6ZXu_QqdoIg/exec?lastUpdated=',
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