import { galleryItems } from "./gallery-items.js";

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

function galeryMarckup(images) {
  return images
    .map(
      ({ original, description, preview }) =>
        `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
    )
    .join("");
}

gallery.insertAdjacentHTML("afterbegin", galeryMarckup(galleryItems));

gallery.addEventListener("click", (el) => {
  el.preventDefault();
  if (el.target.nodeName !== "IMG") {
    return;
  }
  const instance = basicLightbox.create(
    `<img src="${el.target.dataset.source}" width="800" height="600"></img>
  `,
    {
      onClose: () => {
        document.removeEventListener("keydown", closeModal);
      },
    }
  );
  function closeModal (el){
    if (el.code === "Escape") {
      instance.close();
      
    }
  };

  instance.show();
  document.addEventListener("keydown", closeModal);
});




