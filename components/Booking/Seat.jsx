import ImageSeat from "./ImageSeat";
import classes from "./Seat.module.css";

function Seat({ onClick, isTaken = false, isSelected = false }) {
  return (
    <div
      onClick={!isTaken ? onClick : null}
      className={`${classes.seat} ${isTaken ? classes.taken : ""} ${
        isSelected ? classes.selected : ""
      }`}
    >
      <ImageSeat />
    </div>
  );
}

export default Seat;
