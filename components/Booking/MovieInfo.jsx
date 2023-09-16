import classes from "./MovieInfo.module.css";
import Card from "../UI/Card";
import { useQuery } from "@tanstack/react-query";
import Loader from "../UI/Loader";
function formatDate(date) {
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-indexed
  const year = date.getFullYear();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");

  return `${day}-${month}-${year} ${hours}:${minutes}`;
}

function MovieInfo({ schedule, takenSeats, freeSeats = 38 }) {
  const { data, isLoading } = useQuery({
    queryKey: ["movies", { id: schedule.movieID }],
    queryFn: async ({ signal, queryKey }) =>
      await (await fetch("/api/movieByID?movieID=" + schedule.movieID)).json(),
    staleTime: 5000,
  });
  if (isLoading) {
    return (
      <Card>
        <Loader />
      </Card>
    );
  }
  if (data) {
    const { movie } = data;
    //console.log(schedule);
    return (
      <Card>
        <div className={classes.content}>
          <img src={movie.image} alt={movie.title} />
          <div className={classes.right}>
            <div>
              <h2>
                <strong>Movie:</strong>
                {movie.title}
              </h2>
              <span>
                <strong>Date:</strong>
                {formatDate(new Date(schedule.date))}
              </span>
            </div>
            <div>
              <span>
                <strong>Normal ticket:</strong>
                {schedule.normalTicket}$
              </span>
              <span>
                <strong>Reduced ticket:</strong>
                {schedule.cheapTicket}$
              </span>
            </div>
            <span>
              <strong>Seats left:</strong>
              {freeSeats - takenSeats}/{freeSeats}
            </span>
          </div>
        </div>
        <div className={classes.info}>
          <i>
            You can book 6 tickets at max. You will receive a verification email
            with the details. You need to cofirm the booking at the cinema 20
            minutes before the movie starts or you will lose your reservation.
            For booking more than 6 tickets, please contact us at
            <a href="tel:+49 12345679">+49 12345679</a>
          </i>
        </div>
      </Card>
    );
  }
}

export default MovieInfo;
