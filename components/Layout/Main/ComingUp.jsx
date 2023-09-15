import MoviesList from "../../Movies/MoviesList";
import MoviesSearch from "../../Movies/Search/MoviesSearch";
import Link from "next/link";
import classes from "./Movies.module.css";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
function ComingUp({ data }) {
  const [search, setSearch] = useState("");
  const { movies, schedule } = data;
  function searchHandler(search) {
    setSearch(search);
  }
  const now = new Date();
  const nextWeek = new Date(new Date().setDate(now.getDate() + 7));
  const filteredSchedule = schedule.filter((s) => {
    const newDate = new Date(s.date);
    return newDate >= nextWeek;
  });
  //console.log(filteredSchedule);

  const ids = filteredSchedule.map((s) => s.movieID);
  const filteredMovies = movies.filter((movie) => ids.includes(movie.id));
  return (
    <div className="wrap">
      <h1>Upcoming Movies</h1>
      <div className={classes.navigation}>
        <Link href="/schedule" scroll={false} className={classes.link}>
          Currently running
        </Link>
        <Link href="/movies" scroll={false} className={classes.link}>
          All movies
        </Link>
      </div>
      <MoviesSearch searchHandler={searchHandler} />
      <AnimatePresence>
        <MoviesList
          movies={filteredMovies}
          schedule={data.schedule}
          search={search}
        />
      </AnimatePresence>
    </div>
  );
}

export default ComingUp;
