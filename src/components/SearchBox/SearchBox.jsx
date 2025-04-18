import { TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { selectFilterTxt } from "../../redux/filters/selectors";
import { changeFilter } from "../../redux/filters/slice";

function SearchBox() {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilterTxt);

  const handleChange = (event) => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <div>
      <TextField
        id="searchBoxInput"
        label="Find contacts by name"
        variant="outlined"
        fullWidth
        value={filter}
        onChange={handleChange}
        margin="normal"
      />
    </div>
  );
}

export default SearchBox;

// import css from "./SearchBox.module.css";
// import { useDispatch, useSelector } from "react-redux";
// import { selectFilterTxt } from "../../redux/filters/selectors";
// import { changeFilter } from "../../redux/filters/slice";

// function SearchBox() {
//   const dispatch = useDispatch();
//   const filter = useSelector(selectFilterTxt);

//   const handleChange = (event) => {
//     dispatch(changeFilter(event.target.value));
//   };
//   return (
//     <div className={css.searchBoxContainer}>
//       <label className={css.searchBoxLabel} htmlFor="searchBoxInput">
//         Find contacts by name:
//       </label>
//       <input
//         id="searchBoxInput"
//         className={css.searchBoxInput}
//         type="text"
//         value={filter}
//         onChange={handleChange}
//       />
//     </div>
//   );
// }

// export default SearchBox;
