import cardTpl from '../templates/url-card.hbs';

export default function renderingCard(data) {
  const list = document.querySelector('.js-list');
  const markup = cardTpl(data);
  list.insertAdjacentHTML('afterbegin', markup);
}
