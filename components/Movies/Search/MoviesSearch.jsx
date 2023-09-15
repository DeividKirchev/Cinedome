import SearchIcon from "./SearchIcon";
import classes from "./MoviesSearch.module.css";
import { useRef } from "react";
function MoviesSearch({ searchHandler }) {
  const ref = useRef();
  function clickHandler(e) {
    e.preventDefault();
    searchHandler(ref.current.value);
  }
  return (
    <div className={classes.search}>
      <label htmlFor="moviesSearch">Search by title</label>
      <form className={classes.input}>
        <input
          ref={ref}
          type="search"
          placeholder="Movie Title"
          id="moviesSearch"
        />
        <button onClick={clickHandler}>
          <SearchIcon />
        </button>
      </form>
    </div>
  );
}

export default MoviesSearch;
