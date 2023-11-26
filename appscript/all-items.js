function doGet(event) {
    if (event) {
        const lastUpdatedOnClient = event.parameter['lastUpdated'];
        if (lastUpdatedOnClient) {
            const sheet = getSheet();
            const fileId = sheet.getId();
            const lastUpdatedDate = DriveApp.getFileById(fileId).getLastUpdated();
            const lastUpdatedOnClientDate = new Date(lastUpdatedOnClient);

            lastUpdatedOnClientDate.setDate(lastUpdatedOnClientDate.getDate() - 1);

            return createJsonResponse(lastUpdatedOnClientDate < lastUpdatedDate);
        }
    }
    const itemsData = getItemsData();

    return createJsonResponse(itemsData);
}

function getItemsData() {
    const spoonShopItemsSheet = getSheet();
    const dataRange = spoonShopItemsSheet.getDataRange();
    const values = dataRange.getValues();

    values.shift();

    const objects = values.map(x => createItemObject(x));

    return objects;
}

function createItemObject(array) {
    return {
        count: 0,
        id: `${array[0]}`,
        image: {
            alt: array[6],
            src: array[5]
        },
        isTopSell: array[4],
        title: {
            text: array[1]
        },
        pricing: {
            retailPrice: array[2],
            promotionPrice: array[3]
        },
        isPromotion: array[7],
        sizes: {
            length: array[9],
            heigth: array[10],
            width: array[11]
        },
        tags: array[8].split('$')
    }
}

function createJsonResponse(data) {
    const jsonData = JSON.stringify(data);
    const resultJson = ContentService.createTextOutput(jsonData).setMimeType(ContentService.MimeType.JSON);

    return resultJson;
}

function getSheet() {
    return SpreadsheetApp.getActiveSpreadsheet();
}