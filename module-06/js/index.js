"use strict";

/**
 *Класс, объекты которого описывают параметры гамбургера.
 * @class Hamburger
 */
class Hamburger {
  /**
   *Создает экземпляр Hamburger.
   * @param {String} size - Размер
   * @param {String} stuffing - Начинка
   * @memberof Hamburger
   */
  constructor(size, stuffing) {
    this.size = size;
    this.stuffing = stuffing;
    this.toppings = [];
  }

  /**
   * Добавить добавку к гамбургеру. Можно добавить несколько добавок, при условии, что они разные.
   * @param {String} topping - Дабовка
   * @memberof Hamburger
   */
  addTopping(topping) {
    if (this.toppings !== topping) {
      this.toppings.push(topping);
    }
  }

  /**
   * Убрать добавку, при условии, что она ранее была добавлена.
   * @param {String} topping - Дабовка
   * @memberof Hamburger
   */
  removeTopping(topping) {
    this.toppings = this.toppings.filter(elem => elem !== topping);
  }

  /**
   * Получить список добавок.
   * @returns {Array} - Массив добавок
   * @memberof Hamburger
   */
  getToppings() {
    return this.toppings;
  }

  /**
   * Узнать размер гамбургера.
   * @returns {String} - Размер гамбургура
   * @memberof Hamburger
   */
  getSize() {
    return this.size;
  }

  /**
   * Узнать начинку гамбургера.
   * @returns {String} - Начинка гамбургера
   * @memberof Hamburger
   */
  getStuffing() {
    return this.stuffing;
  }

  /**
   * Узнать цену гамбургера.
   * @returns {Number} - Цена за гамбургер
   * @memberof Hamburger
   */
  calculatePrice() {
    const priceSize = Hamburger.SIZES[this.size].price;
    const priceStuffing = Hamburger.STUFFINGS[this.stuffing].price;
    const priceTopping = this.toppings.reduce((acc, topping) => { return acc + Hamburger.TOPPINGS[topping].price }, 0);
    return priceSize + priceStuffing + priceTopping;
  }
  
  /**
   *Узнать калорийность.
   * @returns {Number} - Калорийность в калориях   
   * @memberof Hamburger
   */
  calculateCalories() {
    const caloriesSize = Hamburger.SIZES[this.size].calories;
    const caloriesStuffing = Hamburger.STUFFINGS[this.stuffing].calories;
    const caloriesTopping = this.toppings.reduce((acc, topping) => { return acc + Hamburger.TOPPINGS[topping].calories }, 0);
    return caloriesSize + caloriesStuffing + caloriesTopping;
  }
}

Hamburger.SIZE_SMALL = 'SIZE_SMALL';
Hamburger.SIZE_LARGE = 'SIZE_LARGE';

Hamburger.SIZES = {
  [Hamburger.SIZE_SMALL]: {
    price: 30,
    calories: 50,
  },
  [Hamburger.SIZE_LARGE]: {
    price: 50,
    calories: 100,
  }
};

Hamburger.STUFFING_CHEESE = 'STUFFING_CHEESE';
Hamburger.STUFFING_SALAD = 'STUFFING_SALAD';
Hamburger.STUFFING_MEAT = 'STUFFING_MEAT';

Hamburger.STUFFINGS = {
  [Hamburger.STUFFING_CHEESE]: {
    price: 15,
    calories: 20,
  },
  [Hamburger.STUFFING_SALAD]: {
    price: 20,
    calories: 5,
  },
  [Hamburger.STUFFING_MEAT]: {
    price: 35,
    calories: 15,
  }
};

Hamburger.TOPPING_SPICE = 'TOPPING_SPICE';
Hamburger.TOPPING_SAUCE = 'TOPPING_SAUCE';

Hamburger.TOPPINGS = {
  [Hamburger.TOPPING_SPICE]: {
    price: 10,
    calories: 0,
  },
  [Hamburger.TOPPING_SAUCE]: {
    price: 15,
    calories: 5,
  }
};

// Маленький гамбургер с начинкой из сыра
const hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);

// Добавка из приправы
hamburger.addTopping(Hamburger.TOPPING_SPICE);

// Спросим сколько там калорий
console.log("Calories: ", hamburger.calculateCalories());

// Сколько стоит?
console.log("Price: ", hamburger.calculatePrice());

// Я тут передумал и решил добавить еще соус
hamburger.addTopping(Hamburger.TOPPING_SAUCE);

// А сколько теперь стоит? 
console.log("Price with sauce: ", hamburger.calculatePrice());

// Проверить, большой ли гамбургер? 
console.log("Is hamburger large: ", hamburger.getSize() === Hamburger.SIZE_LARGE); // -> false 

// Убрать добавку
hamburger.removeTopping(Hamburger.TOPPING_SPICE);

// Смотрим сколько добавок
console.log("Hamburger has %d toppings", hamburger.getToppings().length); // 1