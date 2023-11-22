import { galleryItems } from "./gallery-items.js";

const gallery = document.querySelector(".gallery");
const galleryMarkup = imagesMarkup(galleryItems);

gallery.insertAdjacentHTML("afterbegin", galleryMarkup);
gallery.addEventListener("click", onImageClick);

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

function onImageClick(e) {
  e.preventDefault();
  if (e.target.nodeName !== "IMG") return;

  const originalImgSize = e.target.dataset.source;

  const instance = basicLightbox.create(`<img src=${originalImgSize}>`, {
    onShow: () => window.addEventListener("keydown", onEscClose),
    onClose: () => window.removeEventListener("keydown", onEscClose),
  });

  instance.show();

  function onEscClose(e) {
    if (e.code === "Escape") {
      instance.close();
    }
  }
}
