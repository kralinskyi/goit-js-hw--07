import css from "./ImageCard.module.css";

export default function ImageCard({ urls, alt }) {
  return (
    <li className={css.gallery_item}>
      <img src={urls.small} alt={alt} className={css.gallery_item_image} />
    </li>
  );
}
