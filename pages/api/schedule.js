import { getAllSchedules } from "../../db/movies";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const schedules = await getAllSchedules();
    res.status(200).json({ schedules });
  }
}
