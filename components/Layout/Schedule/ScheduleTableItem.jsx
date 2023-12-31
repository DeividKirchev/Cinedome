import ButtonMain from "../../UI/ButtonMain";
import classes from "./ScheduleTableItem.module.css";
import { useRouter } from "next/router";
function ScheduleTableItem({ item }) {
  const { movie, schedule } = item;
  const { push } = useRouter();
  function clickHandler() {
    push("/movies/" + item.movie.id);
  }
  return (
    <li className={classes.item}>
      <span className={classes.date}>
        {new Date(schedule.date).toLocaleTimeString("en-US")}
      </span>
      <img onClick={clickHandler} src={movie.image} alt={movie.title} />
      <h2 onClick={clickHandler} className={classes.title}>
        {movie.title}
      </h2>
      <div className={classes.prices}>
        <span>
          Normal Ticket
          <i className={classes.price}>${schedule.normalTicket}</i>
        </span>
        <span>
          Reduced Ticket
          <i className={classes.price}>${schedule.cheapTicket}</i>
        </span>
      </div>
      <ButtonMain
        className={classes.link}
        isLink={true}
        href={`/tickets/${schedule.id}`}
      >
        Tickets
      </ButtonMain>
    </li>
  );
}

export default ScheduleTableItem;
