'use strict'

let userInput;
const numbers = [];
let total = 0;

while (userInput !== null) {
    userInput = prompt('Введите число');
    const inputResult = Number(userInput);
    if (!Number.isNaN(inputResult) && userInput !== null && inputResult > 0) {
        numbers.push(inputResult);
    } else {
        alert('Было введено не число, попробуйте еще раз');
    }
}

for (let value of numbers) {
    total += value;
}
alert(`Общая сумма чисел равна ${total}`);
