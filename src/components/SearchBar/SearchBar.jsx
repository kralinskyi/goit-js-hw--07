import toast from "react-hot-toast";
import { IoSearchSharp } from "react-icons/io5";
import css from "./SearchBar.module.css";

export default function SearchBar({ onSubmit }) {
  const onSearchSubmit = (e) => {
    e.preventDefault();
    const query = e.currentTarget.elements.searchQuery.value.trim();

    if (query === "") {
      toast.error("Please, enter query for searching!");
      return;
    }
    toast.success(`Lokking for ${query}...`);
    onSubmit(query);

    e.currentTarget.reset();
  };

  return (
    <header className={css.searchbar}>
      <form className={css.form} onSubmit={onSearchSubmit}>
        <button type="submit" className={css.form_button}>
          <span className={css.form_label}>
            <IoSearchSharp />
          </span>
        </button>

        <input
          className={css.form_input}
          type="text"
          autoComplete="off"
          autoFocus
          name="searchQuery"
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
}
