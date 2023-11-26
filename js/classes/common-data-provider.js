'use strict';

class CommonDataProvider extends DataProvider {
    constructor() {
        super({
            getDataUrl: 'https://script.google.com/macros/s/AKfycbwWsfzeoYLVOeqE0LpiFe767x_-7Y-XZD9XIlI-a1djOjiJD6aeXYZuTTtkYGO3Pe7l/exec',
            getIsShouldUpdateUrlPart: 'https://script.google.com/macros/s/AKfycbwWsfzeoYLVOeqE0LpiFe767x_-7Y-XZD9XIlI-a1djOjiJD6aeXYZuTTtkYGO3Pe7l/exec?lastUpdated=',
            dataKey: 'items-data-spoon-shop',
            lastUpdatedKey: 'last-update-items-data-spoon-shop',
            method: 'GET'
        });
    }

    downloadClothesItemsData(onGetData) {
        super.getData((jsonData) => onGetData(jsonData));
    }
}