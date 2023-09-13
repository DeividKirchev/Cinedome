import classes from "./MovieItem.module.css";
import { motion } from "framer-motion";
import ButtonMain from "../UI/ButtonMain";
import { useRouter } from "next/router";
function MovieItem(props) {
  const { movie } = props;
  //console.log(props.schedule);
  const { push } = useRouter();

  function clickHandler() {
    push(`/movies/${props.movie.id}`);
  }
  const now = new Date();
  const nextWeek = new Date(new Date().setDate(now.getDate() + 7));
  const filtered = props.schedule.filter((s) => {
    const newDate = new Date(s.date);
    return newDate >= now && newDate <= nextWeek;
  });
  return (
    <motion.div
      whileHover={{
        scale: 1.2,
      }}
      transition={{
        type: "spring",
      }}
      className={classes.movie}
      onClick={clickHandler}
    >
      <img src={movie.image} alt={movie.title} />
      <div className={classes.overlay}>
        {filtered.length > 0 && (
          <ButtonMain isLink={true} href={`/tickets/${movie.id}`}>
            Tickets
          </ButtonMain>
        )}
        <ButtonMain isLink={true} href={`/movies/${movie.id}`}>
          Movie
        </ButtonMain>
        <div className={classes.rating}>
          Rating: <i>{movie.rating}/5</i>
        </div>
      </div>
    </motion.div>
  );
}

export default MovieItem;
