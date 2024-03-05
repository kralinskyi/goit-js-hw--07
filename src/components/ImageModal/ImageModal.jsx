import css from "./ImageModal.module.css";
export default function ImageModal({ image: { description, urls } }) {
  return (
    <>
      <img className={css.image} src={urls.regular} alt={description} />
    </>
  );
}
