import css from "./ImageCard.module.css";

export default function ImageCard({
  onOpen,
  image,
  image: {
    description,
    urls: { small },
  },
}) {
  return (
    <li className={css.gallery_item}>
      <img
        src={small}
        alt={description}
        className={css.gallery_item_image}
        onClick={() => onOpen(image)}
      />
    </li>
  );
}
