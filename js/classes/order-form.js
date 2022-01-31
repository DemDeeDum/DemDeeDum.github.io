'use strict';

class OrderForm {
    constructor() {
        this.form = document.querySelector('#order-form');
        this.validationMessage = document.querySelector('.order-form-validation');
        this.nameInput = document.querySelector('#name');
        this.surnameInput = document.querySelector('#surname');
        this.patronymicInput = document.querySelector('#patronymic');
        this.phoneInput = document.querySelector('#phone');
        this.postDepartmentNumberInput = document.querySelector('#post-department-number');
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

            }
        });
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
}