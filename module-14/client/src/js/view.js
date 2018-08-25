import EventEnitter from '../services/event-emitter';
import isValidInputUrl from '../services/valid-input';

export default class View extends EventEnitter {
  constructor() {
    super();

    this.form = document.querySelector('.js-form');
    this.input = document.querySelector('.input-url');
    this.list = document.querySelector('.js-list');

    this.form.addEventListener('submit', this.handleAdd.bind(this));
  }

  handleAdd(evt) {
    evt.preventDefault();
    const { value } = this.input;
    this.form.reset();
    const isValid = isValidInputUrl(value);
    if(isValid === null) return;
    this.emit('add', isValid);
  }

  createElem(elem) {
    const listItem = document.createElement('li');
    listItem.dataset.id = elem.id;
    listItem.classList.add('list-item');

    const listItemLink = document.createElement('a');
    listItemLink.classList.add('list-item-link');
    listItemLink.setAttribute('href', elem.text);
    listItemLink.setAttribute('target', '_blank');
    listItemLink.textContent = elem.text;

    const listItemBtn = document.createElement('button');
    listItemBtn.classList.add('list-item-btn');
    listItemBtn.classList.add('js-del');
    listItemBtn.setAttribute('type', 'submit');
    listItemBtn.textContent = 'delete';

    listItem.append(listItemLink, listItemBtn);

    this.appendEvent(listItem);

    return listItem;
  }

  addElem(elem) {
    const item = this.createElem(elem);
    this.form.reset();
    this.list.appendChild(item);
  }

  appendEvent(item) {
    const removeBtn = item.querySelector('.js-del');
    removeBtn.addEventListener('click', this.handleRemove.bind(this));
  }

  handleRemove({ target }) {
    const parent = target.closest('.list-item');
    this.emit('remove', parent.dataset.id);
  }

  removeElem(id) {
    const elem = this.list.querySelector(`[data-id="${id}"]`);
    this.list.removeChild(elem);
  }

  initStory(notes) {
    const items = notes.map(note => this.createElem(note));
    this.list.append(...items);
  }
}
