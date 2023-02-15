import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);
const gallery = document.querySelector(".gallery");

function galeryMarckup(images) {
  return images
    .map(
      ({ original, description, preview }) =>
        `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`
    )
    .join("");
}

gallery.insertAdjacentHTML("afterbegin", galeryMarckup(galleryItems));

const lightbox = new SimpleLightbox(".gallery a", {
  captionSelector: "img",
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
});
