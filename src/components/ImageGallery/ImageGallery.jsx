import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

export default function ImageGallery({ images, onOpen }) {
  if (!images || images.length === 0) {
    return null;
  }

  return (
    <ul className={css.image_gallery}>
      {images.map((image) => (
        <ImageCard image={image} onOpen={onOpen} key={image.id} />
      ))}
    </ul>
  );
}
