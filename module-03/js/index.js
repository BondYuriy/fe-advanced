"use strict";

const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];
const login = prompt("Введите логин от 4-х до 16-ти символов");

const heckLoginValidity = login => {
  let isValidInput;
  if (login.length >= 4 && login.length <= 16) {
    isValidInput = true;
  } else {
    isValidInput = false;
  }
  return isValidInput;
};

const checkIfLoginExists = (logins, login) => {
  let resultChecking;
  resultChecking = logins.includes(login);
  return resultChecking;
};

const addLogin = function (logins, login) {
  let resultAddLogin;
  const result = heckLoginValidity(login);
  if (result) {
    const resultChecking = checkIfLoginExists(logins, login);
    if (resultChecking) {
      resultAddLogin = alert("Такой логин уже используется!");
    } else {
      logins.push(login);
      resultAddLogin = alert("Логин успешно добавлен!");
    }
  }
  else {
    return alert("Ошибка! Логин должен быть от 4 до 16 символов");
  }
  return resultAddLogin;
};

addLogin(logins, login);
console.log(logins);