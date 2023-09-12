import PageTransition from "../../components/Layout/PageTransition";
import Movies from "../../components/Movies/Movies";
import { getAllMovies } from "../../db/movies";

function MoviesPage(props) {
  return (
    <PageTransition wrap={true}>
      <Movies movies={props.movies} />
    </PageTransition>
  );
}
export async function getStaticProps() {
  const movies = await getAllMovies();
  //console.log(movies);
  return { props: { movies }, revalidate: 60 };
}

export default MoviesPage;
