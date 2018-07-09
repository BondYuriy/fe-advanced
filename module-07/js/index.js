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

const createCards = function (posts) {
  posts.forEach(element => {
    createPostCard(element);
  });
};

const createPostCard = function (obj) {
  const body = document.querySelector("body");

  const createPost = document.createElement("div");
  createPost.classList.add("post");
  body.prepend(createPost);

  const post = document.querySelector(".post");

  const createPostImg = document.createElement("img");
  createPostImg.classList.add("post__image");
  createPostImg.setAttribute("src", `${obj.img}`);

  const creatPostTitle = document.createElement("h2");
  creatPostTitle.classList.add("post__title");
  creatPostTitle.textContent = `${obj.title}`;

  const createPostText = document.createElement("p");
  createPostText.classList.add("post__text");
  createPostText.textContent = `${obj.text}`;

  const createButtonPost = document.createElement("a");
  createButtonPost.classList.add("button");
  createButtonPost.setAttribute("href", `${obj.link}`);
  createButtonPost.textContent = "Read more";
  return post.prepend(
    createPostImg,
    creatPostTitle,
    createPostText,
    createButtonPost
  );
};

createCards(posts);