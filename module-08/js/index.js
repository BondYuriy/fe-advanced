'use strict'

const galleryItems = [
  { preview: 'img/preview-1.jpeg', fullview: 'img/fullview-1.jpeg', alt: "alt text 1" },
  { preview: 'img/preview-2.jpeg', fullview: 'img/fullview-2.jpeg', alt: "alt text 2" },
  { preview: 'img/preview-3.jpeg', fullview: 'img/fullview-3.jpeg', alt: "alt text 3" },
  { preview: 'img/preview-4.jpeg', fullview: 'img/fullview-4.jpeg', alt: "alt text 4" },
  { preview: 'img/preview-5.jpeg', fullview: 'img/fullview-5.jpeg', alt: "alt text 5" },
  { preview: 'img/preview-6.jpeg', fullview: 'img/fullview-6.jpeg', alt: "alt text 6" },
];

const gallery = document.querySelector('.js-image-gallery');

const fullview = document.createElement('div');
fullview.classList.add('fullview');

const fullviewImg = document.createElement('img');
fullviewImg.setAttribute('src', galleryItems[0].fullview);

const list = document.createElement('ul');
list.classList.add('preview');

const itemList = galleryItems.map(elem => {
  const item = document.createElement('li');
  const img = document.createElement('img');
  img.classList.add('js-img');
  img.setAttribute('src', elem.preview);
  img.setAttribute('data-fullview', elem.fullview);
  img.setAttribute('alt', elem.alt);
  item.append(img);
  return item;
});

gallery.append(fullview, list);
fullview.appendChild(fullviewImg);
list.append(...itemList);

const img = document.querySelector('.js-img');
img.classList.add('selected');

const onClickImg = (event) => {
  const target = event.target;
  const nodeName = event.target.nodeName;
  const imeges = document.querySelectorAll('.js-img');
  if (nodeName === 'IMG') {
    const fullviewImgNew = target.dataset.fullview;
    fullviewImg.removeAttribute('src','');
    fullviewImg.setAttribute('src', fullviewImgNew);
    imeges.forEach(imege => {
      imege.classList.remove('selected');
    })
    target.classList.add('selected');
  }
}

list.addEventListener('click', onClickImg);