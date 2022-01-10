'use strict';

class PurchaseBagItem {
    constructor(objectPurchaseItem) {
        this.objectPurchaseItem = objectPurchaseItem;
        this.emptyDiv = document.createElement('div');
    }

    getPrice() {
        return this.objectPurchaseItem.count * (this.objectPurchaseItem.isPromotion ?
            this.objectPurchaseItem.pricing.promotionPrice :
            this.objectPurchaseItem.pricing.retailPrice);
    }

    createItemContainer() {
        const container = document.createElement('article');
        container.classList.add('purchase-list-item');

        return container;
    }

    createLeftEdgeContainer() {
        return this.emptyDiv.cloneNode();
    }

    createDeletingCrossContainer() {
        const deletingCrossTopContainer = this.emptyDiv.cloneNode();
        const deletingCrossContainer = this.emptyDiv.cloneNode();

        const deletingButton = document.createElement('button');
        deletingButton.classList.add('purchase-item-deleting-cross');
        deletingButton.setAttribute('data-purchase-bag-item-id', this.objectPurchaseItem.id);
        deletingButton.innerHTML = '&#10006;';

        deletingCrossContainer.appendChild(deletingButton);
        deletingCrossTopContainer.appendChild(deletingCrossContainer);

        return deletingCrossTopContainer;
    }

    createItemInfoContainer() {
        const itemInfoContainer = this.emptyDiv.cloneNode();
        itemInfoContainer.classList.add('purchase-item-info-container');

        const itemPhotoContainer = this.emptyDiv.cloneNode();
        itemPhotoContainer.classList.add('purchase-item-image-container');

        const itemPhoto = document.createElement('img');
        itemPhoto.classList.add('purchase-list-item-image');
        itemPhoto.setAttribute('src', this.objectPurchaseItem.image.src);
        itemPhoto.setAttribute('alt', this.objectPurchaseItem.image.alt);

        itemPhotoContainer.appendChild(itemPhoto);

        const itemNameContainer = this.emptyDiv.cloneNode();
        itemNameContainer.classList.add('purchase-item-name-container');
        itemNameContainer.innerText = this.objectPurchaseItem.title.text;

        itemInfoContainer.appendChild(itemPhotoContainer);
        itemInfoContainer.appendChild(itemNameContainer);

        return itemInfoContainer;
    }

    createItemQuantityContainer() {
        const itemQuantityVeryTopContainer = this.emptyDiv.cloneNode();
        const itemQuantityTopContainer = this.emptyDiv.cloneNode();

        const itemQuantityContainer = this.emptyDiv.cloneNode();
        itemQuantityContainer.classList.add('purchase-item-quantity-container');

        const itemQuantity = this.emptyDiv.cloneNode();
        itemQuantity.classList.add('purchase-item-quantity');
        itemQuantity.innerText = this.objectPurchaseItem.count;

        const itemQuantityArrowsContainer = this.emptyDiv.cloneNode();

        const buttonArrowUp = document.createElement('button');
        buttonArrowUp.classList.add('purchase-item-quantity-arrow');
        buttonArrowUp.innerHTML = '&#8963';

        const buttonArrowDown = buttonArrowUp.cloneNode();
        buttonArrowDown.classList.add('arrow-down');
        buttonArrowDown.innerHTML = '&#8963';

        itemQuantityArrowsContainer.appendChild(buttonArrowUp);
        itemQuantityArrowsContainer.appendChild(buttonArrowDown);

        itemQuantityContainer.appendChild(itemQuantity);
        itemQuantityContainer.appendChild(itemQuantityArrowsContainer);

        itemQuantityTopContainer.appendChild(itemQuantityContainer);
        itemQuantityVeryTopContainer.appendChild(itemQuantityTopContainer);

        return itemQuantityVeryTopContainer;
    }

    createItemPriceContainer() {
        const itemPriceTopContainer = this.emptyDiv.cloneNode();

        const itemPriceContainer = this.emptyDiv.cloneNode();
        itemPriceContainer.innerText = this.getPrice();

        itemPriceTopContainer.appendChild(itemPriceContainer);

        return itemPriceTopContainer;
    }

    createRightEdgeContainer() {
        return this.emptyDiv.cloneNode();
    }
}