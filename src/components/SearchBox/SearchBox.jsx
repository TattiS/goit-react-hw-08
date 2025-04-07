import css from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter, selectFilterTxt } from "../../redux/filtersSlice";

function SearchBox() {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilterTxt);

  const handleChange = (event) => {
    dispatch(changeFilter(event.target.value));
  };
  return (
    <div className={css.searchBoxContainer}>
      <label className={css.searchBoxLabel} htmlFor="searchBoxInput">
        Find contacts by name:
      </label>
      <input
        id="searchBoxInput"
        className={css.searchBoxInput}
        type="text"
        value={filter}
        onChange={handleChange}
      />
    </div>
  );
}

export default SearchBox;
