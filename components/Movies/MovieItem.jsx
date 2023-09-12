import Link from "next/link";
import classes from "./MovieItem.module.css";
import { motion } from "framer-motion";
import ButtonMain from "../UI/ButtonMain";
function MovieItem(props) {
  const { movie } = props;
  //console.log(props.schedule);
  return (
    <motion.div
      whileHover={{
        scale: 1.2,
      }}
      transition={{
        type: "spring",
      }}
      className={classes.movie}
    >
      <img src={movie.image} alt={movie.title} />
      <div className={classes.overlay}>
        {props.schedule.length > 0 && (
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
