import { galleryItems } from "./gallery-items.js";

const gallery = document.querySelector(".gallery");
const galleryMarkup = imagesMarkup(galleryItems);

gallery.insertAdjacentHTML("afterbegin", galleryMarkup);

function imagesMarkup(images) {
  return images
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
         <a class="gallery__link" href=${original}>
           <img
             class="gallery__image"
             src=${preview}
             alt=${description}
           />
         </a>
       </li>`;
    })
    .join("");
}

new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
  captionPosition: "bottom",
});
