import PageTransition from "../../components/Layout/PageTransition";
import MovieDetails from "../../components/Layout/Main/MovieDetails";
import { getAllMovies } from "../../db/movies";
function MovieDetailsPage({ movie }) {
  return (
    <PageTransition>
      <MovieDetails movie={movie} />
    </PageTransition>
  );
}

export async function getStaticPaths() {
  const movies = await getAllMovies();
  return {
    fallback: true,
    paths: movies.map((m) => ({
      params: { movieID: m.id },
    })),
  };
}
export async function getStaticProps(context) {
  const movies = await getAllMovies();
  const movie = movies.filter((m) => m.id === context.params.movieID)[0];
  //console.log(movies);
  return { props: { movie }, revalidate: 60 };
}

export default MovieDetailsPage;
