function doGet(event) {
    if (event) {
      const lastUpdatedOnClient = event.parameter['lastUpdated'];
      if (lastUpdatedOnClient) {
        const sheet = getSheet();
        const fileId = sheet.getId();
        const lastUpdatedDate = DriveApp.getFileById(fileId).getLastUpdated();
        const lastUpdatedOnClientDate = new Date(lastUpdatedOnClient);
  
        lastUpdatedOnClientDate.setDate(lastUpdatedOnClientDate.getDate() - 1)
  
        return createTextResponse(lastUpdatedOnClientDate < lastUpdatedDate);
      }
  
      const itemId = event.parameter['id'];
      if (itemId) {
        const selectedItem = getItemFromSheet(itemId);
  
        return createJsonResponse(selectedItem ?? false);
      }
    }
  }
  
  function getItemFromSheet(id) {
    const fullItemInfoSheet = getSheet();
    const dataRange = fullItemInfoSheet.getDataRange();
    const values = dataRange.getValues();
  
    values.shift();
  
    const selectedItem = values.find(x => x[0] == id);
  
    return selectedItem ? createItemObject(selectedItem) : null;
  }
  
  function createItemObject(arrayOfValues) {
    const srcArray = arrayOfValues[1].split('$');
  
    return {
      images: srcArray,
      description: arrayOfValues[2]
    };
  }
  
  function createJsonResponse(data) {
    const jsonData = JSON.stringify(data);
    const resultJson = ContentService.createTextOutput(jsonData).setMimeType(ContentService.MimeType.JSON);
  
    return resultJson;
  }
  
  function createTextResponse(data) {
    const resultText = ContentService.createTextOutput(`${data}`).setMimeType(ContentService.MimeType.TEXT);
  
    return resultText;
  }
  
  function getSheet() {
    return SpreadsheetApp.getActiveSpreadsheet();
  }
  