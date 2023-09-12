import MovieItem from "./MovieItem";
import classes from "./MoviesList.module.css";
import { AnimatePresence, motion } from "framer-motion";

const DUMMY_MOVIES = [
  {
    id: "m1",
    title: "Openheimer",
    rating: "4.9",
    image:
      "https://m.media-amazon.com/images/M/MV5BMDBmYTZjNjUtN2M1MS00MTQ2LTk2ODgtNzc2M2QyZGE5NTVjXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_.jpg",
  },
  {
    id: "m2",
    title: "Barbie",
    rating: "4.8",
    image:
      "https://m.media-amazon.com/images/M/MV5BNjU3N2QxNzYtMjk1NC00MTc4LTk1NTQtMmUxNTljM2I0NDA5XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_FMjpg_UX1000_.jpg",
  },
  {
    id: "m3",
    title: "Inception",
    rating: "4.6",
    image:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg",
  },
  {
    id: "m4",
    title: "Jurassic Park",
    rating: "4.2",
    image:
      "https://m.media-amazon.com/images/M/MV5BMjM2MDgxMDg0Nl5BMl5BanBnXkFtZTgwNTM2OTM5NDE@._V1_FMjpg_UX1000_.jpg",
  },
  {
    id: "m5",
    title: "Indiana Jones 5",
    rating: "3.2",
    image:
      "https://m.media-amazon.com/images/M/MV5BMzk3ZWJiY2MtMGY1Ny00MjU4LWE1NmEtODYzZWM5NzVmNGEzXkEyXkFqcGdeQXVyMTYzMDA4NDM3._V1_.jpg",
  },
];

const DUMMY_SCHEDULE = [
  {
    id: "s1",
    movieID: "m1",
    date: new Date(Date.parse("2023-09-13T13:51:50.417-07:00")),
    normalTicket: 10,
    cheapTicket: 7,
  },
  {
    id: "s2",
    movieID: "m1",
    date: new Date(Date.parse("2023-09-13T21:51:50.417-07:00")),
    normalTicket: 10,
    cheapTicket: 7,
  },
  {
    id: "s3",
    movieID: "m1",
    date: new Date(Date.parse("2023-09-14T13:51:50.417-07:00")),
    normalTicket: 10,
    cheapTicket: 7,
  },
  {
    id: "s4",
    movieID: "m3",
    date: new Date(Date.parse("2023-09-15T13:51:50.417-07:00")),
    normalTicket: 10,
    cheapTicket: 7,
  },
  {
    id: "s5",
    movieID: "m2",
    date: new Date(Date.parse("2023-09-11T13:51:50.417-07:00")),
    normalTicket: 10,
    cheapTicket: 7,
  },
];

function MoviesList({ search }) {
  let filtered = DUMMY_MOVIES;
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
  //console.log(ids);
  const filteredSchedule = DUMMY_SCHEDULE.filter(
    (s) => s.date > now && ids.includes(s.movieID)
  );
  //console.log(filteredSchedule);
  //console.log(DUMMY_SCHEDULE);
  //console.log(filtered);
  return (
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
              schedule={filteredSchedule.filter((s) => s.movieID === movie.id)}
            />
          </motion.li>
        ))}
      </AnimatePresence>
    </motion.ul>
  );
}

export default MoviesList;
