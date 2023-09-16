import { getAllMovies } from "../../db/movies";

async function handler(req, res) {
  if (req.method === "GET") {
    const movies = await getAllMovies();
    const query = req.query;
    const movie = movies.filter((m) => m.id === query.movieID)[0];
    //console.log(movie);

    res.status(200).json({ movie });
  }
}
export default handler;
