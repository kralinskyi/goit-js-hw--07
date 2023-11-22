import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

function imagesMarkup(images) {
  return images
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
         <a class="gallery__link" href=${original}>
           <img
             class="gallery__image"
             src=${preview}
             data-source=${original}
             alt=${description}
           />
         </a>
       </li>`;
    })
    .join("");
}

gallery.insertAdjacentHTML("afterbegin", imagesMarkup(galleryItems));

gallery.addEventListener("click", onImageClick);

function onImageClick(e) {
  e.preventDefault();
  console.log(e);
}
