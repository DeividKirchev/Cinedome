import { addBookedForSchedule, getBookedForSchedule } from "../../db/movies";
import { sendMail } from "../../service/mailService";
export default async function handler(req, res) {
  if (req.method === "GET") {
    const query = req.query;
    const booked = await getBookedForSchedule(query.scheduleID);
    console.log(booked);
    res.status(200).json({ booked });
  } else if (req.method === "POST") {
    //console.log(req.body);
    //console.log(req.body);
    const { seats, details } = req.body;

    const uniqueID = (
      Date.now().toString(36) + Math.random().toString(36)
    ).toUpperCase();
    const booked = {
      ...(await addBookedForSchedule(seats, { ...details, uniqueID })),
    };
    await sendMail(
      "Seats booked #" + uniqueID,
      details.email,
      `Greetings ${details.name}<br/>
      You have booked ${booked.insertedCount} seats.<br/>
      Your booking id is: #${uniqueID}<br/>
      You need to cofirm the booking at the cinema 20 minutes before the movie starts or you will lose your reservation.<br/>
      <br/>
      <br/>
      Kind regards,<br/>
      The Cinedome Team
      `
    );
    //console.log(booked);
    res.status(200).json({ booked });
  }
}
