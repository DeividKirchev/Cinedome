import { MongoClient } from "mongodb";
export async function getAllMovies() {
  const client = await MongoClient.connect(process.env.ConnString);
  const db = client.db();

  const movieCollection = db.collection("movies");
  const movies = await movieCollection.find().toArray();
  //console.log(movies);
  const newMovies = movies.map(({ _id, ...rest }) => ({
    ...rest,
    id: _id.toString(),
  }));
  //console.log(newMovies);
  return newMovies;
}
export async function getAllSchedules() {
  const client = await MongoClient.connect(process.env.ConnString);
  const db = client.db();

  const scheduleCollection = db.collection("schedule");
  const schedules = await scheduleCollection.find().toArray();
  //console.log(movies);
  const newSchedules = schedules.map(({ _id, ...rest }) => ({
    ...rest,
    id: _id.toString(),
  }));
  //console.log(newSchedules);
  return newSchedules;
}
