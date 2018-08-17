import './styles.css';
import isValidInputUrl from './services/valid-input';
import * as storage from './services/storage';
import fetchData from './services/api';
import renderingCard from './services/rendering';

const inputUrl = document.querySelector('.input-url');
const submitUrlBtn = document.querySelector('.js-url-btn');
const formUrl = document.querySelector('.js-form');
const list = document.querySelector('.js-list');
const persistedUrl = storage.get();
const fetchUrl = persistedUrl ? persistedUrl : [];

getStorage();
submitUrlBtn.addEventListener('click', addUrl);
list.addEventListener('click', removeCard);

function getStorage() {
  if (fetchUrl.length > 0) {
    storage.get().forEach(data => renderingCard(data));
  }
}

function addUrl(evt) {
  evt.preventDefault();
  const isValid = isValidInputUrl(inputUrl.value);
  if (isValid !== null) {
    fetchData(isValid).then(data => {
      fetchUrl.push(data);
      storage.set(fetchUrl);
      renderingCard(data);
    });
  }
  formUrl.reset();
}

function removeCard() {
  if (event.target.nodeName === 'BUTTON') {
    event.target.parentNode.remove();
    // localStorage.removeItem('storage-url'); //Из-за того, что массив имеет один ключ, при удаление удаляется весь массив
  }
}
