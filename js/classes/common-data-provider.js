'use strict';

class CommonDataProvider extends DataProvider {
    constructor() {
        super({
            getDataUrl: 'https://script.google.com/macros/s/AKfycbxeD6NTqmLFJW71ll-K52uWmvjL7N6oTmPt-leiyesKb_iGJE0WeEg5xHOwzRMqTRM/exec',
            getIsShouldUpdateUrlPart: 'https://script.google.com/macros/s/AKfycbxeD6NTqmLFJW71ll-K52uWmvjL7N6oTmPt-leiyesKb_iGJE0WeEg5xHOwzRMqTRM/exec?lastUpdated=',
            dataKey: 'items-data-spoon-shop',
            lastUpdatedKey: 'last-update-items-data-spoon-shop',
            method: 'GET'
        });
    }

    downloadClothesItemsData(onGetData) {
        super.getData((jsonData) => onGetData(jsonData));
    }
}