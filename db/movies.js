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
  client.close();
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
  client.close();
  return newSchedules;
}
export async function getBookedForSchedule(scheduleID) {
  const client = await MongoClient.connect(process.env.ConnString);
  const db = client.db();

  const bookedCollection = db.collection("booked");
  const booked = await bookedCollection.find({ scheduleID }).toArray();
  //console.log(movies);
  const newBooked = booked.map(({ _id, ...rest }) => ({
    ...rest,
    id: _id.toString(),
  }));
  //console.log(newSchedules);
  client.close();
  return newBooked;
}

export async function addBookedForSchedule({ seats = [] }) {
  const client = await MongoClient.connect(process.env.ConnString);
  const db = client.db();

  const bookedCollection = db.collection("booked");

  const result = await bookedCollection.insertMany(seats);
  //console.log(result);
  client.close();
  return result;
}
