import { useState } from "react";
import Card from "../../UI/Card";
import { useQuery } from "@tanstack/react-query";
import classes from "./Tickets.module.css";
import Seats from "../../Booking/Seats";
import Loader from "../../UI/Loader";
function Tickets({ schedule }) {
  const [seatsSelected, setSeatsSelected] = useState([]);
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["booked", { scheduleid: schedule.id }],
    queryFn: async ({ signal, queryKey }) =>
      await (await fetch("/api/seats?scheduleID=" + schedule.id)).json(),
    staleTime: 5000,
  });
  let content = <></>;

  if (isLoading) {
    content = <Loader />;
  }

  if (isError) {
    content = <p className={classes.error}>Error: {error.message}</p>;
  }
  if (data) {
    content = <Seats scheduleID={schedule.id} booked={data.booked} />;
  }
  return (
    <div className="wrap">
      <h1>Book Tickets</h1>
      <Card>{content}</Card>
    </div>
  );
}

export default Tickets;
