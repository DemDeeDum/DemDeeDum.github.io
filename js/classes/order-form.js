'use strict';

class OrderForm {
    constructor() {
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
            const regex = new RegExp('^\+?(38)?0\(?\d{2}\)?\s?\d{3}\s?\-?\s?\d{2}\s?\-?\s?\d{2}$', 'im');
            const result = regex.test(input.value);
            if (!result) {
                input.classList.add('invalid-input');
            } else {
                input.classList.remove('invalid-input');
            }
        });
    }
}