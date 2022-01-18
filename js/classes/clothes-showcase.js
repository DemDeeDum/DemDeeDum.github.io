'use strict';

class ClothesShowcase {
    constructor(itemsCollection) {
        this.itemsCollection = itemsCollection;
        this.topSellsContainer = document.getElementsByClassName('top-sells-item-container')[0];
        this.clothesContainer = document.getElementsByClassName('clothes-item-container')[0];
    }

    fillTopSellsContainer() {
        this.itemsCollection
            .filter(x => x.isTopSell)
            .forEach(element => {
                const htmlItem = this.createClothesHtmlItem(element);

                this.topSellsContainer.appendChild(htmlItem);
            });
    }

    fillClothesContainer() {
        this.itemsCollection
            .forEach(element => {
                const htmlItem = this.createClothesHtmlItem(element);

                this.clothesContainer.appendChild(htmlItem);
            });
    }

    createClothesHtmlItem(objectClothesItem) {
        const clothesShowcaseItem = new ClothesShowcaseItem(objectClothesItem);

        const container = clothesShowcaseItem.createItemContainer();
        const imageContainer = clothesShowcaseItem.createImageContainer();
        const titleContainer = clothesShowcaseItem.createTitleContainer();
        const priceContainer = clothesShowcaseItem.createPriceContainer();
        const sizesContainer = clothesShowcaseItem.createSizesContainer();
        const buttonContainer = clothesShowcaseItem.createButtonContainer();

        container.appendChild(imageContainer);
        container.appendChild(titleContainer);
        container.appendChild(priceContainer);
        container.appendChild(sizesContainer);
        container.appendChild(buttonContainer);

        return container;
    }
}