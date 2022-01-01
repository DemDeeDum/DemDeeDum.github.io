'use strict';

const dataProvider = new CommonDataProvider();
const itemsCollection = dataProvider.getClothesItemsData();
const purchaseBag = new PurchaseBag(itemsCollection);

function handleClientLoad() {
    gapi.load('client:auth2', initClient);
}

function initClient() {
    var API_KEY = 'AIzaSyCQc89-y4cimUMnpadCkIwW3_Qn1m739n0'; // TODO: Update placeholder with desired API key.

    var CLIENT_ID = '964402361940-blp2af4544qgj4om0ct4fkgciq7ve4td.apps.googleusercontent.com'; // TODO: Update placeholder with desired client ID.

    var SCOPE = 'https://www.googleapis.com/auth/spreadsheets.readonly';

    gapi.client.init({
        'apiKey': API_KEY,
        'clientId': CLIENT_ID,
        'scope': SCOPE,
        'discoveryDocs': ['https://sheets.googleapis.com/$discovery/rest?version=v4'],
    }).then(function() {
        gapi.auth2.getAuthInstance().isSignedIn.listen(updateSignInStatus);
        updateSignInStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
    });
}

function makeApiCall() {
    var params = {
        // The spreadsheet to request.
        spreadsheetId: '1yCvXswSRiiWyU6V90QZOFGSGSXuST4R7nUBLN21LttM', // TODO: Update placeholder value.

        // The ranges to retrieve from the spreadsheet.
        ranges: ['A2', 'G2'], // TODO: Update placeholder value.

        // True if grid data should be returned.
        // This parameter is ignored if a field mask was set in the request.
        includeGridData: false, // TODO: Update placeholder value.
    };

    var request = gapi.client.sheets.spreadsheets.get(params);
    request.then(function(response) {
        // TODO: Change code below to process the `response` object:
        console.log(response.result);
    }, function(reason) {
        console.error('error: ' + reason.result.error.message);
    });
}

setTimeout(makeApiCall, 5000);