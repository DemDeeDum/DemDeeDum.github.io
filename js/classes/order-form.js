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
        this.addOrderUrl = 'https://script.google.com/macros/s/AKfycbwsADMluzvvk-PZLhajuIjnoEMWKEzxcBH0a1sKGMnU8oRs-uccAb3ccpnmV6Ug0VE/exec?order=';
        this.method = 'GET';
        this.purchaseBag = purchaseBag;
    }

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
                xhr.onreadystatechange = function() {
                    if (xhr.readyState === 4 && xhr.status === 200) {
                        const response = xhr.response;

                        if (response === 'true') {
                            orderForm.success();
                        } else {
                            orderForm.fail();
                        }
                    }
                }

                xhr.send();
            }
        });
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
            price: ProductHelper.getPrice(item) * item.count
        };
    }

    validateInput(input, regex) {
        const result = regex.test(input.value);
        if (!result) {
            input.classList.add('invalid-input');
            this.validationMessage.classList.remove('hide');
        } else {
            input.classList.remove('invalid-input');
            this.validationMessage.classList.add('hide');
        }
    }

    validateForm() {
        const allInputs = this.form.querySelectorAll('input');
        allInputs.forEach((input) => input.dispatchEvent(new KeyboardEvent('keyup')));

        return this.form.querySelectorAll('.invalid-input').length === 0;
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
}