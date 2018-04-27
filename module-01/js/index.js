"use strict";

const groupTripSharm = "sharm";
const groupTripHurgada = "hurgada";
const groupTripTaba = "taba";

let placesGroupSharm = 15;
let placesGroupHurgada = 25;
let placesGroupTaba = 6;

const userInput = prompt("Укажите количество место поездки");

const inputResult = Number(userInput);

const isValidInput =
  userInput !== null &&
  !Number.isNaN(inputResult) &&
  inputResult % 1 === 0 &&
  inputResult > 0;

if (isValidInput) {
  if (inputResult <= placesGroupTaba) {
    const groupSection = confirm(
      `Есть место в группе ${groupTripTaba} согласны ли Вы?`
    );
    if (groupSection) {
      const restPlaces = placesGroupTaba - inputResult;
      alert(`Приятного путешествия в группе ${groupTripTaba}`);
    } else {
      alert('Нам очень жаль, приходите ещё!');
    }
  } else if (inputResult <= placesGroupSharm) {
    const groupSection = confirm(
       `Есть место в группе ${groupTripSharm} согласны ли Вы?`
    );
    if (groupSection) {
      const restPlaces = placesGroupSharm - inputResult;
      alert(`Приятного путешествия в группе ${groupTripSharm}`);
    } else {
      alert('Нам очень жаль, приходите ещё!');
    }
  } else if (inputResult <= placesGroupHurgada) {
    const groupSection = confirm(
        `Есть место в группе ${groupTripHurgada} согласны ли Вы?`
    );
    if (groupSection) {
      const restPlaces = placesGroupHurgada - inputResult;
      alert(`Приятного путешествия в группе ${groupTripHurgada}`);
    } else {
        alert('Нам очень жаль, приходите ещё!');
    } 
  } else {
    alert("Извините, мест нет.");
  }
} else {
  alert("Ошибка ввода");
}
