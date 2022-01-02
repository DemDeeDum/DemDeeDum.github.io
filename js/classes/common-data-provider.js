'use strict';

class CommonDataProvider {
    constructor() {
        this.getMethod = 'GET';
        this.url = 'https://script.google.com/macros/s/AKfycbx1m-It-W5hd-MsnaW-NxiLn1pcquQRR2xrKWgNXjUP6D71oCZFzUkbOoXIRxcIbAkN/exec';
    }

    downloadClothesItemsData(onGetData) {
        const xhr = new XMLHttpRequest();
        xhr.open(this.getMethod, this.url);
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status === 200) {
                const response = xhr.response;
                const jsonResult = JSON.parse(response);

                onGetData(jsonResult);
            }
        }

        xhr.send();
    }
}