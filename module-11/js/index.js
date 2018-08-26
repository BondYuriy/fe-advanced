"use strict";

const laptops = [
  {
    size: 13,
    color: 'white',
    price: 28000,
    release_date: 2015,
    name: 'Macbook Air White 13"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
  },
  {
    size: 13,
    color: 'gray',
    price: 32000,
    release_date: 2016,
    name: 'Macbook Air Gray 13"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
  },
  {
    size: 13,
    color: 'black',
    price: 35000,
    release_date: 2017,
    name: 'Macbook Air Black 13"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
  },
  {
    size: 15,
    color: 'white',
    price: 45000,
    release_date: 2015,
    name: 'Macbook Air White 15"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
  },
  {
    size: 15,
    color: 'gray',
    price: 55000,
    release_date: 2016,
    name: 'Macbook Pro Gray 15"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
  },
  {
    size: 15,
    color: 'black',
    price: 45000,
    release_date: 2017,
    name: 'Macbook Pro Black 15"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
  },
  {
    size: 17,
    color: 'white',
    price: 65000,
    release_date: 2015,
    name: 'Macbook Air White 17"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
  },
  {
    size: 17,
    color: 'gray',
    price: 75000,
    release_date: 2016,
    name: 'Macbook Pro Gray 17"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
  },
  {
    size: 17,
    color: 'black',
    price: 80000,
    release_date: 2017,
    name: 'Macbook Pro Black 17"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
  },
];

const filter = { size: [], color: [], release_date: [] };
const submitBtn = document.querySelector('.js-submit');
const resetBtn = document.querySelector('.js-reset');
const form = document.querySelector('.js-form');
let selectedLaptops;

submitBtn.addEventListener('click', filtration);
resetBtn.addEventListener('click', filterReset);

/*
  Реализовует список отфильтрованных товаров
*/
function filtration(evt) {
  evt.preventDefault();
  filterChoice();
  filterResults(filter);
  renderingResult(selectedLaptops);

  form.reset();
}

/*
  Получает результат выбора фильтров пользователем
*/
function filterChoice() {
  form.querySelectorAll('input[type="checkbox"]:checked').forEach(checked => {
    filter[checked.name].push(checked.value);
  });
}

/*
  Выберит из массива объекты, которые подходят под выбраные пользователем критерии
*/
function filterResults(filter) {
  selectedLaptops = laptops.filter(laptop => {
    let size;
    let color;
    let release_date;

    if (filter.size.length == 0 && filter.color.length == 0 && filter.release_date.length == 0) {
      return;
    }

    if (filter.size.length === 0 || filter.size.includes(String(laptop.size))) {
      size = laptop;
    }

    if (filter.color.length === 0 || filter.color.includes(laptop.color)) {
      color = laptop;
    }

    if (filter.release_date.length === 0 || filter.release_date.includes(String(laptop.release_date))) {
      release_date = laptop;
    }

    return size && color && release_date;
  })
  return selectedLaptops;
}

/*
  Рендерит новые карточки товаров, соответствующие текущим критериям фильтра
*/
function renderingResult(elem) {
  const source = document.querySelector('#template-card').innerHTML.trim();
  const cards = document.querySelector('.cards');
  const template = Handlebars.compile(source);
  const markup = template(elem);
  filterReset();
  cards.insertAdjacentHTML('afterbegin', markup);
}

/*
  Очищает фильтр
*/
function filterReset() {
  const cards = document.querySelector('.cards');
  cards.innerHTML = '';

  filter.size = [];
  filter.color = [];
  filter.release_date = [];

  form.reset();
}