"use strict";

const initialUsers = [
  {
    id: "-s19a6hqce",
    login: "mangozedog@mail.com",
    password: "qwe123zv",
    isActive: true
  },
  {
    id: "-qkpzenjxe",
    login: "polysweet@skynet.ze",
    password: "123zxc78",
    isActive: true
  },
  {
    id: "-e51cpd4di",
    login: "ajax2k@change.ua",
    password: "ert234qw",
    isActive: false
  }
];

const initialPosts = {
  "-s19a6hqce": [
    { id: "-5sgljaskg", text: "post #1", likes: 3 },
    { id: "-199hb6igr", text: "post #2", likes: 5 },
    { id: "-hy0eyw5qo", text: "post #3", likes: 13 }
  ],
  "-qkpzenjxe": [
    { id: "-5tu69g5rf", text: "post #1", likes: 8 },
    { id: "-bje766393", text: "post #2", likes: 15 }
  ],
  "-e51cpd4di": [
    { id: "-9y6nkmlj4", text: "post #1", likes: 18 },
    { id: "-i03pbhy3s", text: "post #2", likes: 45 }
  ]
};

const newUser = {
  login: "alex@mail.com",
  password: "123456"
};

const getId = () =>
  "-" +
  Math.random()
    .toString(36)
    .substr(2, 9);

function SocialBook(users = [], posts = {}) {
  this.users = users;
  this.posts = posts;
  this.getAllUsers = () => this.users.map(user => user);
  this.getUserByLogin = login => this.users.find(user => user.login === login);
  this.getUserStatus = userId => {
    const searchById = this.users.find(user => user.id === userId);
    if (searchById.isActive) {
      return "active";
    }
    return "inactive";
  };
  this.addUser = user => {
    user.id = getId();
    user.isActive = false;
    this.users.push(user);
  };
  this.removeUserById = userId => {
    this.users = this.users.filter(user => user.id !== userId);
  };
  this.getUsersCount = () => this.users.reduce((acc, value) => acc + 1, 0);
}

const book = new SocialBook(initialUsers, initialPosts);

//=====================================================================================
console.log(book.getAllUsers());
console.log(book.getUserByLogin("mangozedog@mail.com"));
console.log(book.getUserStatus("-e51cpd4di"));
console.log(book.addUser(newUser));
console.log("removeUserById:", book.removeUserById("-e51cpd4di"));
console.log(book.getUsersCount());