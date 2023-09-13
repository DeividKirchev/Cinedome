import ComingUp from "../components/Layout/Main/ComingUp";
import { getAllSchedules, getAllMovies } from "../db/movies";
function ComingUpPage({ data }) {
  try {
    data.schedule = JSON.parse(data.schedule);
  } catch {}
  return <ComingUp data={data}></ComingUp>;
}
export async function getStaticProps() {
  const movies = await getAllMovies();
  const schedule = JSON.stringify(await getAllSchedules());
  //console.log(movies);
  return { props: { data: { movies, schedule } }, revalidate: 60 };
}
export default ComingUpPage;
