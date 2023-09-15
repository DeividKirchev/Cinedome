import classes from "./MovieDetails.module.css";
function MovieDetails({ movie }) {
  //console.log(movie);
  if (!movie) {
    return <p>No such movie found.</p>;
  }
  return (
    <div className="wrap">
      <article className={classes.article}>
        <section className={classes.top}>
          <img src={movie.image} alt={movie.title} />
          <div className={classes.right}>
            <h1>{movie.title}</h1>
            <span className={classes.rating}>
              Rating: <i>{movie.rating}/5</i>
            </span>
            <p className={classes.description}>
              {movie.description ? (
                movie.description
              ) : (
                <i>No description available for this movie</i>
              )}
            </p>
          </div>
        </section>
      </article>
    </div>
  );
}

export default MovieDetails;
