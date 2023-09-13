import Head from "next/head";
import MovieItem from "./MovieItem";
import classes from "./MoviesList.module.css";
import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";

function MoviesList({ search, movies }) {
  const [schedules, setSchedules] = useState([]);
  let filtered = movies;
  if (search) {
    filtered = filtered.filter((movie) =>
      movie.title.toLowerCase().includes(search.trim().toLowerCase())
    );
  }
  if (filtered.length === 0) {
    return (
      <motion.div
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        className={classes.noMovies}
      >
        No movies found.
      </motion.div>
    );
  }
  const now = new Date();
  const ids = filtered.map((movie) => movie.id);

  const fetchSchedule = () => {
    fetch("/api/schedule")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setSchedules(
          data.schedules.map((s) => ({ ...s, date: new Date(s.date) }))
        );
      });
  };

  useEffect(() => {
    fetchSchedule();
  }, []);
  ///console.log(schedules);
  //console.log(schedules);
  const filteredSchedule = schedules.filter(
    (s) => s.date > now && ids.includes(s.movieID)
  );
  //console.log(filteredSchedule);
  //console.log(DUMMY_SCHEDULE);
  //console.log(filtered);
  return (
    <>
      <Head>
        {filtered.map((movie) => (
          <link
            key={movie.image}
            rel="preload"
            href={`${movie.image}`}
            as="image"
          />
        ))}
      </Head>
      <motion.ul exit={{ opacity: 0 }} className={classes.list}>
        <AnimatePresence>
          {filtered.map((movie, i) => (
            <motion.li
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { type: "linear" } }}
              transition={{ type: "spring", delay: i * 0.1 }}
              key={movie.id}
            >
              <MovieItem
                movie={movie}
                schedule={filteredSchedule.filter(
                  (s) => s.movieID === movie.id
                )}
              />
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>
    </>
  );
}

export default MoviesList;
