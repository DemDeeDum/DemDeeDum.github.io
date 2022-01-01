'use strict';

class ClothesShowcaseItem {
    constructor(objectClothesItem) {
        this.objectClothesItem = objectClothesItem;
    }

    createItemContainer() {
        const container = document.createElement('article');
        container.classList.add('clothes-item');

        return container;
    }

    createImageContainer() {
        const imageContainer = document.createElement('div');
        imageContainer.classList.add('clothes-item-image-container');

        const image = document.createElement('img');
        image.classList.add('clothes-item-image');
        image.setAttribute('src', this.objectClothesItem.image.src);
        image.setAttribute('alt', this.objectClothesItem.image.alt);

        imageContainer.appendChild(image);

        return imageContainer;
    }

    createTitleContainer() {
        const titleContainer = document.createElement('div');
        titleContainer.classList.add('clothes-item-title-container');

        const title = document.createElement('h1');
        title.classList.add('clothes-item-title');
        title.innerText = this.objectClothesItem.title.text;

        titleContainer.appendChild(title);

        return titleContainer;
    }

    createPriceContainer() {
        const priceContainer = document.createElement('div');
        priceContainer.classList.add('clothes-item-price-container');

        const emptyDiv = document.createElement('div');

        const retailPriceContainer = emptyDiv.cloneNode();

        const retailPriceHeader = emptyDiv.cloneNode();
        retailPriceHeader.innerText = 'Розница';

        const retailPrice = emptyDiv.cloneNode();
        retailPrice.innerText = `${this.objectClothesItem.pricing.retailPrice} грн`;

        retailPriceContainer.appendChild(retailPriceHeader);
        retailPriceContainer.appendChild(retailPrice);

        const wholesalePriceContainer = emptyDiv.cloneNode();

        const wholesalePriceHeader = emptyDiv.cloneNode();
        wholesalePriceHeader.innerText = 'Опт (от 3 единиц)';

        const wholesalePrice = emptyDiv.cloneNode();
        wholesalePrice.innerText = `${this.objectClothesItem.pricing.wholesalePrice} грн`;

        wholesalePriceContainer.appendChild(wholesalePriceHeader);
        wholesalePriceContainer.appendChild(wholesalePrice);

        priceContainer.appendChild(emptyDiv.cloneNode());
        priceContainer.appendChild(retailPriceContainer);
        priceContainer.appendChild(emptyDiv.cloneNode());
        priceContainer.appendChild(wholesalePriceContainer);
        priceContainer.appendChild(emptyDiv.cloneNode());

        return priceContainer;
    }

    createButtonContainer() {
        const buttonContainer = document.createElement('div');
        buttonContainer.classList.add('clothes-item-button-container');

        const button = document.createElement('button');
        button.classList.add('clothes-item-button');
        button.setAttribute("data-clothes-item-id", this.objectClothesItem.id);
        button.innerText = 'Добавить в корзину';

        buttonContainer.appendChild(button);

        return buttonContainer;
    }
}