import { useState } from "react";
import Seat from "./Seat";
import classes from "./Seats.module.css";
import { useMutation } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { queryClient } from "../../pages/tickets/[scheduleID]";
import BookingForm from "./BookingForm/BookingForm";
function Seats({ booked = [], scheduleID, selected, setSelected }) {
  const [showForm, setShowForm] = useState(false);

  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: async (content) => {
      fetch("/api/seats", {
        method: "POST",
        body: JSON.stringify(content),
        headers: {
          "Content-Type": "application/json",
        },
      });
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ["booked", { scheduleid: scheduleID }],
      });
      setSelected([]);
      setShowForm(false);
    },
  });
  const seats = [[], [], [], []];
  for (let row = 0; row < 4; row++) {
    const maxSeats = row % 2 === 0 ? 10 : 9;
    const bookedRow = booked.filter((seat) => seat.row === row);
    //console.log(bookedRow);
    for (let s = 0; s < maxSeats; s++) {
      if (bookedRow.filter((seat) => seat.seat === s).length > 0) {
        seats[row].push(true);
      } else {
        seats[row].push(false);
      }
    }
  }
  let content = [];
  function seatClickHandler(row, seat) {
    const findSeat = selected.filter((s) => s.row === row && s.seat === seat);
    if (findSeat.length === 0 && selected.length < 6)
      setSelected((prev) => [...prev, { scheduleID, row, seat }]);
    else {
      setSelected((prev) =>
        prev.filter((s) => s.row !== row || s.seat !== seat)
      );
    }
  }
  seats.forEach((item, row) => {
    //console.log(item);
    content.push(
      <div key={`row${row}`} className={classes.row}>
        {item.map((i, seat) => {
          //console.log(`seatR${row}S${seat}`);
          return (
            <Seat
              key={`seatR${row}S${seat}`}
              isTaken={i}
              isSelected={
                selected.filter((s) => s.row === row && s.seat === seat)
                  .length === 1
              }
              onClick={seatClickHandler.bind(null, row, seat)}
            />
          );
        })}
      </div>
    );
  });
  function bookSeatsHandler() {
    if (selected.length > 0) {
      setShowForm(true);
    }
  }
  function formSubmitHandler(details) {
    mutate({ seats: selected, details });
  }
  function hideFormHandler() {
    setShowForm(false);
  }
  return (
    <div className={classes.seats}>
      {content}
      <p key={"screen"}>SCREEN</p>
      <motion.button
        whileHover={
          selected.length !== 0 && {
            scale: 1.2,
            transition: { type: "spring" },
          }
        }
        className={classes.button}
        onClick={bookSeatsHandler}
        key={"button"}
        disabled={selected.length === 0}
      >
        Book seats
      </motion.button>
      {showForm && (
        <BookingForm
          isPending={isPending}
          hideForm={hideFormHandler}
          submit={formSubmitHandler}
        />
      )}
    </div>
  );
}

export default Seats;
