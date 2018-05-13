"use strict";

const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];
const userInput = prompt("Введите логин от 4-х до 16-ти символов");

const addLogin = function(logins, login) {
  let isValidInput;
  let resultChecking;
  let resultAddLogin;

  const heckLoginValidity = login => {
    if (userInput.length >= 4 && userInput.length <= 16) {
      isValidInput = true;
    } else {
      isValidInput = false;
    }
    return isValidInput;
  };
  heckLoginValidity(login);

  if (isValidInput === false) {
    return alert("Ошибка! Логин должен быть от 4 до 16 символов");
  }

  if (isValidInput === true) {
    const checkIfLoginExists = (logins, login) => {
      resultChecking = logins.includes(userInput);
      return resultChecking;
    };
    checkIfLoginExists(logins, login);
  }

  if (resultChecking === false) {
    logins.push(userInput);
    resultAddLogin = alert("Логин успешно добавлен!");
  } else {
    resultAddLogin = alert("Такой логин уже используется!");
  }
  return resultAddLogin;
};

addLogin(logins, userInput);