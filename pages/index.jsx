import Home from "../components/Layout/Main/Home";
import { getAllSchedules, getAllMovies } from "../db/movies";

export default function HomePage({ data }) {
  //console.log(data.schedule);
  try {
    data.schedule = JSON.parse(data.schedule);
  } catch {}
  return <Home data={data} />;
}
export async function getStaticProps() {
  const movies = await getAllMovies();
  const schedule = JSON.stringify(await getAllSchedules());
  //console.log(movies);
  return { props: { data: { movies, schedule } }, revalidate: 60 };
}
