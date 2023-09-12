import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "GET") {
    const client = await MongoClient.connect(process.env.ConnString);
    const db = client.db();

    const movieCollection = db.collection("movies");
    const movies = await movieCollection.find();
    console.log(movies);

    res.status(200).json({ movies });
  }
}
export default handler;
