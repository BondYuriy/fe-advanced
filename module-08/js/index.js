'use strict'

const galleryItems = [
  { preview: 'img/preview-1.jpeg', fullview: 'img/fullview-1.jpeg', alt: "alt text 1" },
  { preview: 'img/preview-2.jpeg', fullview: 'img/fullview-2.jpeg', alt: "alt text 2" },
  { preview: 'img/preview-3.jpeg', fullview: 'img/fullview-3.jpeg', alt: "alt text 3" },
  { preview: 'img/preview-4.jpeg', fullview: 'img/fullview-4.jpeg', alt: "alt text 4" },
  { preview: 'img/preview-5.jpeg', fullview: 'img/fullview-5.jpeg', alt: "alt text 5" },
  { preview: 'img/preview-6.jpeg', fullview: 'img/fullview-6.jpeg', alt: "alt text 6" },
];

class Gallery {
  constructor({ items, parentNode, defaultActiveItem }) {
    this.items = items;
    this.parentNode = parentNode;
    this.defaultActiveItem = defaultActiveItem;
    this.setActivePreviewItems(this.items[defaultActiveItem]);
    this.list = document.querySelector(".preview");
    this.list.addEventListener("click", this.onClick);
  }

  setActivePreviewItems() {
    const fullviewImgSrc = this.items[this.defaultActiveItem].fullview;
    const fullviewImgAlt = this.items[this.defaultActiveItem].alt;
    const fullview = this.createFullview(fullviewImgSrc, fullviewImgAlt);
    const preview = this.createPreview(this.items);
    this.parentNode.append(fullview, preview);
  }

  createFullview(src, alt) {
    const fullview = document.createElement("div");
    fullview.classList.add("fullview");

    const fullviewImg = document.createElement("img");
    fullviewImg.setAttribute("src", src);
    fullviewImg.setAttribute("alt", alt);
    fullviewImg.classList.add("js-fullview-img");

    fullview.appendChild(fullviewImg);
    return fullview;
  }

  createPreview(items) {
    const list = document.createElement("ul");
    list.classList.add("preview");

    const itemList = items.map(item => {
      const listItem = document.createElement("li");
      const listItemImg = document.createElement("img");
      listItemImg.classList.add("js-img");
      listItemImg.setAttribute("src", item.preview);
      listItemImg.setAttribute("data-fullview", item.fullview);
      listItemImg.setAttribute("alt", item.alt);
      listItem.append(listItemImg);
      return listItem;
    });

    list.append(...itemList);
    return list;
  }

  onClick(evt) {
    evt.preventDefault();
    const target = event.target;
    const nodeName = event.target.nodeName;

    if (nodeName === "IMG") {
      const fullviewImg = document.querySelector(".js-fullview-img");
      const imeges = document.querySelectorAll(".js-img");

      fullviewImg.removeAttribute("src", "");
      fullviewImg.removeAttribute("alt", "");
      fullviewImg.setAttribute("src", target.dataset.fullview);
      fullviewImg.setAttribute("alt", target.alt);

      imeges.forEach(imege => {
        imege.classList.remove("selected");
      });
      target.classList.add("selected");
    }
  }
}

const gallery = new Gallery({
  items: galleryItems,
  parentNode: document.querySelector(".image-gallery"),
  defaultActiveItem: 0
});