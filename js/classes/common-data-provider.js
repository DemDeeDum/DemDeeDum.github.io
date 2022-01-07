'use strict';

class CommonDataProvider {
    constructor() {
        this.ITEMS_DATA_KEY = 'items-data-spoon-shop';
        this.getMethod = 'GET';
        this.url = 'https://script.google.com/macros/s/AKfycbx-nhzPuzmbvOID3FFCw8_N3shtZo_SgaV2A7Zdittq--Ef-cEf9tvKJE-c2DxnUmaO/exec';
    }

    downloadClothesItemsData(onGetData) {
        const itemsData = sessionStorage.getItem(this.ITEMS_DATA_KEY);
        if (itemsData) {
            const jsonData = JSON.parse(itemsData);

            onGetData(jsonData);
        } else {
            const commonDataProvider = this;
            const xhr = new XMLHttpRequest();
            xhr.open(this.getMethod, this.url);
            xhr.onreadystatechange = function() {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    const response = xhr.response;
                    const jsonResult = JSON.parse(response);

                    onGetData(jsonResult);

                    sessionStorage.setItem(commonDataProvider.ITEMS_DATA_KEY, response);
                }
            }

            xhr.send();
        }
    }
}