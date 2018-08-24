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

    const postImg = document.createElement("img");
    postImg.classList.add("post__image");
    postImg.setAttribute("src", `${item.img}`);

    const postTitle = document.createElement("h2");
    postTitle.classList.add("post__title");
    postTitle.textContent = `${item.title}`;

    const postText = document.createElement("p");
    postText.classList.add("post__text");
    postText.textContent = `${item.text}`;

    const postBtn = document.createElement("a");
    postBtn.classList.add("button");
    postBtn.setAttribute("href", `${item.link}`);
    postBtn.textContent = "Read more";
    post.append(
      postImg,
      postTitle,
      postText,
      postBtn
    );
    return post;
  }
}

const post = new Post(posts);
post.createCards();
