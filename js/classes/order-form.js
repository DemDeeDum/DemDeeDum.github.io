'use strict';

class OrderForm {
    constructor(purchaseBag) {
        this.form = document.querySelector('#order-form');
        this.validationMessage = document.querySelector('.order-form-validation');
        this.successMessage = document.querySelector('.order-form-order-added');
        this.failMessage = document.querySelector('.order-form-order-adding-error');
        this.nameInput = document.querySelector('#name');
        this.surnameInput = document.querySelector('#surname');
        this.patronymicInput = document.querySelector('#patronymic');
        this.phoneInput = document.querySelector('#phone');
        this.postDepartmentNumberInput = document.querySelector('#post-department-number');
        this.loader = document.querySelector('.order-form-loader');
        this.addOrderUrl = 'https://script.google.com/macros/s/AKfycbyam1JtguVr9640J1D-fW3siMueRuwVttWnbDUit2gd91-37OPhaHaNFnTZhsfAd4fX/exec?order=';
        this.method = 'GET';
        this.purchaseBag = purchaseBag;

        OrderForm.IS_INITIALIZED = true;
    }

    static IS_INITIALIZED = false;
    static LOADER_ANIMATION_INTERVAL = 3000;
    static LOADER_ANIMATION_STEP = 500;

    setValidation() {
        this.postDepartmentNumberInput.addEventListener('keyup', (e) => {
            const input = e.target;

            if (input.value > 9999) {
                input.value = 9999;
            } else if (input.value < 1) {
                input.value = 1;
            }
        });

        this.phoneInput.addEventListener('keyup', (e) => {
            const input = e.target;
            
            this.validateInput(input, /^\+?(38)?0\(?\d{2}\)?\s?\d{3}\s?\-?\s?\d{2}\s?\-?\s?\d{2}$/);
        });

        const orderForm = this;
        [this.nameInput , this.surnameInput, this.patronymicInput].forEach((input) => {
            input.addEventListener('keyup', (e) => {
                const input = e.target;

                orderForm.validateInput(input, /^[а-яА-ЯёЁa-zA-Z]{3,}(\-[а-яА-ЯёЁa-zA-Z]{3,})?$/);
            })
        });
    }

    setEvents() {
        const orderForm = this;

        this.form.addEventListener('submit', (e) => {
            e.preventDefault();

            if (orderForm.validateForm()) {
                const addOrderRequest = {
                    name: orderForm.nameInput.value,
                    surname: orderForm.surnameInput.value,
                    patronymic: orderForm.patronymicInput.value,
                    phoneNumber: orderForm.preparePhoneNumber(orderForm.phoneInput.value),
                    postDepartmentNumber: orderForm.postDepartmentNumberInput.value,
                    items: orderForm.purchaseBag.getPurchaseListItems().map(orderForm.preparePurchaseItem)
                };

                const serializedRequest = JSON.stringify(addOrderRequest);
                const encodedRequest = encodeURI(serializedRequest);
                const url = orderForm.addOrderUrl.concat(encodedRequest);

                const xhr = new XMLHttpRequest();
                xhr.open(orderForm.method, url);
                xhr.addEventListener("load", () => orderForm.hideLoader(orderForm));
                xhr.addEventListener("error", () => orderForm.hideLoader(orderForm));
                xhr.addEventListener("abort", () => orderForm.hideLoader(orderForm));
                xhr.onreadystatechange = function() {
                    if (xhr.readyState === 4 && xhr.status === 200) {
                        const response = xhr.response;

                        if (response === 'true') {
                            orderForm.success();
                        }
                    } else {
                        orderForm.fail();
                    }
                }

                xhr.send();

                orderForm.showLoader();
            } else {
                orderForm.showValidationMessage();
            }
        });
    }

    startLoaderAnimation() {
        const loaderTextContainer = this.loader.querySelector('div');
        const loaderInitialText = loaderTextContainer.innerText;

        this.animateLoader(loaderTextContainer, loaderInitialText);

        setInterval(() => {
            this.animateLoader(loaderTextContainer, loaderInitialText);
        }, OrderForm.LOADER_ANIMATION_INTERVAL);
    }

    animateLoader(loaderTextContainer, loaderInitialText) {
        setTimeout(() => { 
            loaderTextContainer.innerText = loaderInitialText.concat('.');
        }, OrderForm.LOADER_ANIMATION_STEP);

        setTimeout(() => { 
            loaderTextContainer.innerText = loaderInitialText.concat('..');
        }, OrderForm.LOADER_ANIMATION_STEP * 2);

        setTimeout(() => { 
            loaderTextContainer.innerText = loaderInitialText.concat('...');
        }, OrderForm.LOADER_ANIMATION_STEP * 3);

        setTimeout(() => { 
            loaderTextContainer.innerText = loaderInitialText.concat('....');
        }, OrderForm.LOADER_ANIMATION_STEP * 4);

        setTimeout(() => { 
            loaderTextContainer.innerText = loaderInitialText;
        }, OrderForm.LOADER_ANIMATION_STEP * 5);
    }

    preparePhoneNumber(phoneNumber) {
        const withoutBeginning = /^0\(?\d{2}\)?\s?\d{3}\s?\-?\s?\d{2}\s?\-?\s?\d{2}$/
        if (withoutBeginning.test(phoneNumber)) {
            phoneNumber = `\+38${phoneNumber}`;
        }

        const withoutPlus = /^380\(?\d{2}\)?\s?\d{3}\s?\-?\s?\d{2}\s?\-?\s?\d{2}$/;
        if (withoutPlus.test(phoneNumber)) {
            phoneNumber = `\+${phoneNumber}`;
        }

        return phoneNumber;
    }

    preparePurchaseItem(item) {
        return  {
            id: item.id,
            title: item.title.text,
            count: item.count,
            price: ProductHelper.getPrice(item)
        };
    }

    validateInput(input, regex) {
        const result = regex.test(input.value);
        if (!result) {
            input.classList.add('invalid-input');
            this.showValidationMessage();
        } else {
            input.classList.remove('invalid-input');
            this.hideValidationMessage();
        }
    }

    validateForm() {
        const allInputs = this.form.querySelectorAll('input');
        allInputs.forEach((input) => input.dispatchEvent(new KeyboardEvent('keyup')));
        
        const purchaseNotListEmpty = this.purchaseBag.itemsCollection.some(item => item.count > 0);

        return this.form.querySelectorAll('.invalid-input').length === 0 && purchaseNotListEmpty;
    }

    fail() {
        this.successMessage.classList.add('hide');
        this.failMessage.classList.remove('hide');
    }

    success() {
        this.form.querySelectorAll('input').forEach(input => input.value = '');

        this.successMessage.classList.remove('hide');
        this.failMessage.classList.add('hide');

        this.purchaseBag.clearPurchaseList(true);
    }

    showValidationMessage() {
        this.validationMessage.classList.remove('hide');
    }

    hideValidationMessage() {
        this.validationMessage.classList.add('hide');
    }

    showLoader() {
        this.loader.classList.remove('hide');

        this.startLoaderAnimation();
    }

    hideLoader(orderForm) {
        orderForm.loader.classList.add('hide');
    }
}