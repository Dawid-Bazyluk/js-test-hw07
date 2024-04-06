import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector("gallery");
const galleryCreator = galleryItems
  .map(
    (image) => `<div class="gallery__item">
  <a class="gallery__link" href=${image.original}
    <img
      class="gallery__image"
      src=${image.preview}
      data-source=${image.original}
      alt=${image.description}
    />
  </a>
</div>
`
  )
  .join("");

gallery.insertAdjacentHTML("afterbegin", galleryCreator);
