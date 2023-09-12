import PageTransition from "../../components/Layout/PageTransition";
import Movies from "../../components/Movies/Movies";

function MoviesPage() {
  return (
    <PageTransition wrap={true}>
      <Movies />
    </PageTransition>
  );
}

export default MoviesPage;
