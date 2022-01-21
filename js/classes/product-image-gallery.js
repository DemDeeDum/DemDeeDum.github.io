'use strict';

class ProductImageGallery {
    constructor() {}

    setEvents() {
        document.querySelectorAll('.product-image')
            .forEach(element => {
                element.addEventListener('click', (e) => {
                    const newSelectedImage = e.target;
                    const newSelectedImageContainer = newSelectedImage.closest('.product-image-container');

                    const currentSelectedImage = document.querySelector('.product-mini-selected-image');
                    if (currentSelectedImage) {
                        const currentSelectedImageContainer = currentSelectedImage.closest('.product-image-container');

                        currentSelectedImageContainer.classList.remove('product-mini-selected-image-container');
                        currentSelectedImage.classList.remove('product-mini-selected-image');
                    }

                    newSelectedImageContainer.classList.add('product-mini-selected-image-container');
                    newSelectedImage.classList.add('product-mini-selected-image');

                    const newSelectedImageSrc = newSelectedImage.getAttribute('src');

                    const bigSelectedImage = document.querySelector('.product-selected-image');
                    bigSelectedImage.setAttribute('src', newSelectedImageSrc);
                });
            });
    }

    selectFirstOne() {
        document.querySelector('.slick-active').querySelector('.product-image').click();
    }
}