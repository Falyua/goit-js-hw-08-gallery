import itemsGallery from "./gallery-items.js";

const list = document.querySelector(".js-gallery");

const div = document.querySelector(".js-lightbox");

const modalImg = document.querySelector(".lightbox__image");

const btn = document.querySelector(".lightbox__button");

itemsGallery.map((item) => {
  const img = document.createElement("img");
  img.classList.add("gallery__image");
  img.src = item.preview;
  img.setAttribute("data-source", item.original);
  img.alt = item.description;

  const link = document.createElement("a");
  link.classList.add("gallery__link");
  link.href = item.original;
  link.append(img);

  const listItem = document.createElement("li");
  list.classList.add("gallery__item");

  listItem.append(link);

  list.append(listItem);
});

list.addEventListener("click", (e) => {
  e.preventDefault();

  const modalLink = e.target.dataset.source;
  console.log(modalLink);
  div.classList.add("is-open");
  modalImg.src = modalLink;
});

btn.addEventListener("click", () => {
  div.classList.remove("is-open");
  modalImg.src = "";
});