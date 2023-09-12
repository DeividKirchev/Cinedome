import MoviesList from "./MoviesList";
import MoviesSearch from "./Search/MoviesSearch";
import Link from "next/link";
import classes from "./Movies.module.css";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
function Movies({ movies }) {
  const [search, setSearch] = useState("");
  function searchHandler(search) {
    setSearch(search);
  }
  return (
    <>
      <h1>Movies</h1>
      <div className={classes.navigation}>
        <Link href="/schedule" scroll={false} className={classes.link}>
          Currently running
        </Link>
        <Link href="/coming-up" scroll={false} className={classes.link}>
          Upcoming movies
        </Link>
      </div>
      <MoviesSearch searchHandler={searchHandler} />
      <AnimatePresence>
        <MoviesList movies={movies} search={search} />
      </AnimatePresence>
    </>
  );
}

export default Movies;
