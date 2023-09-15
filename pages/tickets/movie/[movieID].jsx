import Schedule from "../../../components/Layout/Main/Schedule";
import PageTransition from "../../../components/Layout/PageTransition";
import { getAllMovies, getAllSchedules } from "../../../db/movies";
function MovieTicketsPage({ data }) {
  //console.log(data.schedule);
  try {
    data.schedule = JSON.parse(data.schedule);
    data.schedule = data.schedule
      .map((schedule) => {
        return { ...schedule, date: new Date(schedule.date) };
      })
      .sort((a, b) => {
        return a.date - b.date;
      });
  } catch {}
  return (
    <PageTransition>
      <Schedule data={data} showMissing={false} />
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
  const filtered = movies.filter(
    (movie) => movie.id === context.params.movieID
  );

  const schedule = await getAllSchedules();
  const filteredSchedule = JSON.stringify(
    schedule.filter((s) => s.movieID === context.params.movieID)
  );
  return {
    props: { data: { movies: filtered, schedule: filteredSchedule } },
    revalidate: 60,
  };
}
export default MovieTicketsPage;
