'use strict'

let userInput;
const numbers = [];
let total = 0;

do {
    userInput = prompt('Введите число');
    if (userInput === null) {
        break;
    }

    const inputResult = Number(userInput);
    if (inputResult) {
        numbers.push(inputResult)
    } else {
        alert('Было введено не число, попробуйте еще раз');
    }
} while (true);

if (numbers.length > 0) {
    for (let value of numbers) {
        total += value;
    }
    alert(`Общая сумма чисел равна ${total}`);
}
