'use strict';

class CommonDataProvider extends DataProvider {
    constructor() {
        super({
            getDataUrl: 'https://script.google.com/macros/s/AKfycbzXwJjUQkgh8txe1vIPYlMazDP4toIIqKzb-GwvTjSUwASp47-c6STIOVEtNwi3pAye/exec',
            getIsShouldUpdateUrlPart: 'https://script.google.com/macros/s/AKfycbzXwJjUQkgh8txe1vIPYlMazDP4toIIqKzb-GwvTjSUwASp47-c6STIOVEtNwi3pAye/exec?lastUpdated=',
            dataKey: 'items-data-spoon-shop',
            lastUpdatedKey: 'last-update-items-data-spoon-shop',
            method: 'GET'
        });
    }

    downloadClothesItemsData(onGetData) {
        super.getData((jsonData) => onGetData(jsonData));
    }
}