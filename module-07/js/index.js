"use strict";

const posts = [
  {
    img: "https://placeimg.com/400/150/arch",
    title: "Post title 1",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
    link: "link-1.com"
  },
  {
    img: "https://placeimg.com/400/150/nature",
    title: "Post title 2",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
    link: "link-2.com"
  },
  {
    img: "https://placeimg.com/400/150/arch",
    title: "Post title 3",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
    link: "link-3.com"
  }
];

class Post {
  constructor(items) {
    this.items = items;
    this.body = document.querySelector("body");
  }

  createCards() {
    this.items.forEach(item => this.body.append(this.createPostCard(item)));
  }

  createPostCard(item) {
    const post = document.createElement("div");
    post.classList.add("post");

    const createPostImg = document.createElement("img");
    createPostImg.classList.add("post__image");
    createPostImg.setAttribute("src", `${item.img}`);

    const creatPostTitle = document.createElement("h2");
    creatPostTitle.classList.add("post__title");
    creatPostTitle.textContent = `${item.title}`;

    const createPostText = document.createElement("p");
    createPostText.classList.add("post__text");
    createPostText.textContent = `${item.text}`;

    const createButtonPost = document.createElement("a");
    createButtonPost.classList.add("button");
    createButtonPost.setAttribute("href", `${item.link}`);
    createButtonPost.textContent = "Read more";
    post.append(
      createPostImg,
      creatPostTitle,
      createPostText,
      createButtonPost
    );
    return post;
  }
}

const post = new Post(posts);
post.createCards();
