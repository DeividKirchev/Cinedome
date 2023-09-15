import Schedule from "../components/Layout/Main/Schedule";
import PageTransition from "../components/Layout/PageTransition";
import { getAllMovies, getAllSchedules } from "../db/movies";
function SchedulePage({ data }) {
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
      <Schedule data={data} />
    </PageTransition>
  );
}
export async function getStaticProps() {
  const movies = await getAllMovies();
  const schedule = JSON.stringify(await getAllSchedules());
  //console.log(movies);
  return { props: { data: { movies, schedule } }, revalidate: 60 };
}
export default SchedulePage;
