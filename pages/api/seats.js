import { addBookedForSchedule, getBookedForSchedule } from "../../db/movies";
export default async function handler(req, res) {
  if (req.method === "GET") {
    const query = req.query;
    const booked = await getBookedForSchedule(query.scheduleID);
    res.status(200).json({ booked });
  } else if (req.method === "POST") {
    //console.log(req.body);
    const booked = await addBookedForSchedule(req.body);
    res.status(200).json({ booked });
  }
}
