import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

export default function ImageGallery({ images }) {
  if (!images || images.length === 0) {
    return null;
  }

  return (
    <ul className={css.image_gallery}>
      {images.map((image) => (
        <li key={image.id}>
          <ImageCard />
        </li>
      ))}
    </ul>
  );
}
