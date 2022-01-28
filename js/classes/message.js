'use strict';

class Message {
    static body = document.querySelector('body');

    static step = 2;

    static topMargin = 0;

    static delayForAddedProductMessage = 3000;

    static goTopDelayForAddedProductMessage = 3000;

    static marginDataAttribute = 'data-top-margin';

    static showProductAddedMessage(product) {
        const messageContainer = document.createElement('div');
        messageContainer.classList.add('added-product-message');
        messageContainer.innerHTML = `${product.title.text} добавлено в корнизу`;
        Message.setMessageMargin(messageContainer, Message.topMargin);

        setTimeout(() => {
            messageContainer.classList.add('added-product-message-hidden');
            setTimeout(Message.moveMessagesToTop, Message.goTopDelayForAddedProductMessage);
        }, Message.delayForAddedProductMessage);

        Message.body.appendChild(messageContainer);

        Message.topMargin += Message.step;
    }

    static moveMessagesToTop() {
        document.querySelectorAll('.added-product-message').forEach((element) => {
            let savedMargin = Number(element.getAttribute(Message.marginDataAttribute));
            if (!isNaN(savedMargin) && savedMargin > 0) {
                savedMargin -= Message.step;
                Message.setMessageMargin(element, savedMargin);
            }
        });
        Message.topMargin -= Message.step;
    }

    static setMessageMargin(messageContainer, margin) {
        messageContainer.style = `top: ${margin}em;`;
        messageContainer.setAttribute(Message.marginDataAttribute, margin);
    }
}