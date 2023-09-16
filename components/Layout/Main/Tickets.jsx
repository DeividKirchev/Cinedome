import { useState } from "react";
import Card from "../../UI/Card";
import { useQuery } from "@tanstack/react-query";
import classes from "./Tickets.module.css";
import Seats from "../../Booking/Seats";
import Loader from "../../UI/Loader";
import MovieInfo from "../../Booking/MovieInfo";
function Tickets({ schedule }) {
  const [selected, setSelected] = useState([]);
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["booked", { scheduleid: schedule.id }],
    queryFn: async ({ signal, queryKey }) =>
      await (await fetch("/api/seats?scheduleID=" + schedule.id)).json(),
  });
  let content = <></>;

  if (isLoading) {
    content = <Loader />;
  }

  if (isError) {
    content = <p className={classes.error}>Error: {error.message}</p>;
  }
  if (data) {
    content = (
      <Seats
        selected={selected}
        setSelected={setSelected}
        scheduleID={schedule.id}
        booked={data.booked}
      />
    );
  }
  // console.log(movie);
  // console.log(schedule);

  return (
    <div className="wrap">
      <h1>Book Tickets</h1>
      {data && (
        <MovieInfo
          freeSeats={38}
          takenSeats={selected.length + data.booked.length}
          schedule={schedule}
        />
      )}
      <Card>{content}</Card>
    </div>
  );
}

export default Tickets;
