import Head from "next/head";
import MoviesList from "./MoviesList";
function Upcoming({ data }) {
  const { movies, schedule } = data;
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
    <>
      <Head>
        {filteredMovies.map((movie) => (
          <link key={movie.image} rel="preload" href={movie.image} as="image" />
        ))}
      </Head>
      <MoviesList movies={filteredMovies} schedule={schedule} />
    </>
  );
}

export default Upcoming;
