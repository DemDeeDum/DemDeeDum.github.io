'use strict';

function askName() {
    return prompt('What is your name?');
}

function sayHello(name) {
    alert('Hello, $(name)! How are you?');
}

let userName = askName();
sayHello(name);