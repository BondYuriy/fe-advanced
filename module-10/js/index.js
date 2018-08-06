"use strict";

const apiUrl = "https://test-users-api.herokuapp.com/users/";

const getBtn = document.querySelector(".js-get");
const result = document.querySelector(".result");

const input = document.querySelector("input");
const submitBtn = document.querySelector(".js-submit");
const resultId = document.querySelector(".js-result");
const searchForm = document.querySelector(".js-search-form");

const newUserName = document.querySelector(".js-new-name");
const newUserAge = document.querySelector(".js-new-age");
const newUserBtn = document.querySelector(".js-create-user");
const addsForm = document.querySelector(".js-form-adds");
const resultNewId = document.querySelector(".js-result-id");

const inputRemoveById = document.querySelector(".remove-user");
const submitRemoveBtn = document.querySelector(".js-remove");
const resultRemove = document.querySelector(".js-result-remove");
const removeForm = document.querySelector(".js-form-remove");

const inputUserId = document.querySelector(".js-user-id");
const inputUpdateName = document.querySelector(".js-update-name");
const inputUpdateAge = document.querySelector(".js-update-age");
const submitUpdateBtn = document.querySelector(".js-update-user");
const resultUpdate = document.querySelector(".js-result-update");
const updateForm = document.querySelector(".js-form-update");

getBtn.addEventListener("click", getAllUsers);
submitBtn.addEventListener("click", getUserById);
newUserBtn.addEventListener("click", addsUser);
submitRemoveBtn.addEventListener("click", removeUser);
submitUpdateBtn.addEventListener("click", updateUser);

/*
  Возвращает текущий список всех пользователей
*/
function getAllUsers(evt) {
  evt.preventDefault();

  fetch(apiUrl)
    .then(response => {
      if (response.ok) return response.json();
      throw new Error(`ERROR: ${response.statusText}`);
    })
    .then(data => updateResultUsers(data))
    .catch(err => console.log(err));
}

function updateResultUsers(data) {
  const table = document.createElement("table");
  const headerLine = document.createElement("tr");

  const columnId = document.createElement("th");
  columnId.textContent = "ID";

  const columnName = document.createElement("th");
  columnName.textContent = "NAME";

  const columnAge = document.createElement("th");
  columnAge.textContent = "AGE";
  headerLine.append(columnId, columnName, columnAge);

  data.data.forEach(elem => {
    const line = document.createElement("tr");
    const cellId = document.createElement("td");
    cellId.textContent = elem.id;

    const cellName = document.createElement("td");
    cellName.textContent = elem.name;

    const cellAge = document.createElement("td");
    cellAge.textContent = elem.age;
    line.append(cellId, cellName, cellAge);
    table.prepend(headerLine);
    table.append(line);
    result.append(table);
  });
}

/*
  Возвращает пользователя с переданным id
*/
function getUserById(evt) {
  evt.preventDefault();
  fetchDataId(input.value);
  searchForm.reset();
}

function fetchDataId(id) {
  fetch(apiUrl + id, {
    method: "GET",
    headers: { "Content-type": "application/json" }
  })
    .then(response => {
      if (response.ok) return response.json();

      throw new Error(`ERROR: ${response.statusText}`);
    })
    .then(data => updateResultUserId(data.data))
    .catch(err => console.log(err));
}

function updateResultUserId(user) {
  result.classList.add("js-result");

  const sId = document.createElement("span");
  sId.textContent = `ID: ${user.id}`;
  sId.classList.add("js-text");

  const sName = document.createElement("span");
  sName.textContent = `NAME: ${user.name}`;
  sName.classList.add("js-text");

  const sAge = document.createElement("span");
  sAge.textContent = `AGE: ${user.age}`;
  sAge.classList.add("js-text");

  resultId.append(sId, sName, sAge);
}

/*
  Записывает в БД юзера с полями name и age и выводит присвоенный id
*/
function addsUser(evt) {
  evt.preventDefault();
  const newUser = {
    name: newUserName.value,
    age: Number(newUserAge.value)
  };
  dataTransfer(newUser);
  addsForm.reset();
}

function dataTransfer(newUser) {
  fetch(apiUrl, {
    method: "POST",
    body: JSON.stringify(newUser),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  })
    .then(response => {
      if (response.ok) return response.json();
      throw new Error(`ERROR: ${response.statusText}`);
    })
    .then(data => getNewUserId(data))
    .catch(err => console.log(err));
}

function getNewUserId(data) {
  resultNewId.textContent = `Account created Your ID: ${data.data._id}`;
}

/*
  Удаляет из БД юзера по указанному id
*/
function removeUser(evt) {
  evt.preventDefault();
  dataRemove(inputRemoveById.value);
  removeForm.reset();
}

function dataRemove(id) {
  fetch(apiUrl + id, {
    method: "DELETE"
  })
    .then(data => getResultRemove(data, id))
    .catch(err => console.log(err));
}

function getResultRemove(data, id) {
  if (data.ok) {
    resultRemove.textContent = `Account with ID: ${id} successfully deleted`;
  }
}

/*
  Обновляет данные пользователя по id
*/
function updateUser(evt) {
  evt.preventDefault();
  const id = inputUserId.value;
  const updateUser = {
    name: inputUpdateName.value,
    age: Number(inputUpdateAge.value)
  };
  dataUpdate(id, updateUser);
  updateForm.reset();
}

function dataUpdate(id, updateUser) {
  fetch(apiUrl + id, {
    method: "PUT",
    body: JSON.stringify(updateUser),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  })
    .then(data => getResultUpdate(data))
    .catch(err => console.log(err));
}

function getResultUpdate(data) {
  if (data.ok) {
    resultUpdate.textContent = "Data successfully changed!";
  }
}
