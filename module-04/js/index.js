"use strict";

const products = {
    bread: 10,
    milk: 15,
    apples: 20,
    chicken: 50,
    pork: 80,
    cheese: 60,
    tea: 20,
    candy: 25
};

function Cashier(name, products) {
    this.name = name;
    this.products = products;
    this.totalPrice = 0;
    this.customerMoney = 0;
    this.changeAmount = 0;
    this.countTotalPrice = function (order) {
        let sum;
        for (let key in order) {
            sum = order[key] * this.products[key];
            this.totalPrice += sum;
        }
    };
    this.getCustomerMoney = function () {
        let userInput;
        let isValidInput;
        do {
            userInput = prompt(`Общая сумма покупок ${this.totalPrice}`);
            isValidInput = Number(userInput);
            if (isValidInput >= this.totalPrice) {
                this.customerMoney = isValidInput;
                break;
            } else {
                this.customerMoney = null;
            }
        } while (userInput !== null);
    };
    this.countChange = function () {
        this.changeAmount = this.customerMoney - this.totalPrice;
    };
    this.reset = function () {
        this.totalPrice = 0,
            this.customerMoney = 0,
            this.changeAmount = 0;
    };
    this.server = function (order) {
        this.countTotalPrice(order);
        this.getCustomerMoney();
        if (this.customerMoney === null) {
            this.reset();
            return alert('Очень жаль, что-то пошло не так, приходите еще');
        }
        this.countChange();
        alert(`Менеджер ${this.name}: Спасибо за покупку, ваша сдача ${this.changeAmount}`);
        this.reset();
    };
};

const order = {
    bread: 2,
    milk: 2,
    apples: 1,
    cheese: 1
};

const cashier = new Cashier('Mango', products);
cashier.server(order);