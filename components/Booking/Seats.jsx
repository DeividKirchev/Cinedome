import { useState } from "react";
import Seat from "./Seat";
import classes from "./Seats.module.css";
import { useMutation } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { queryClient } from "../../pages/tickets/[scheduleID]";
function Seats({ booked = [], scheduleID }) {
  const [selected, setSelected] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: async (seats) => {
      fetch("/api/seats", {
        method: "POST",
        body: JSON.stringify(seats),
        headers: {
          "Content-Type": "application/json",
        },
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["booked", { scheduleid: scheduleID }],
      });
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
      <div className={classes.row}>
        {item.map((i, seat) => (
          <Seat
            isTaken={i}
            isSelected={
              selected.filter((s) => s.row === row && s.seat === seat)
                .length === 1
            }
            onClick={seatClickHandler.bind(null, row, seat)}
          />
        ))}
      </div>
    );
  });
  function bookSeatsHandler() {
    setShowForm(true);

    mutate({
      seats: selected,
    });
  }
  console.log(error);
  return (
    <div className={classes.seats}>
      {content}
      <p>SCREEN</p>

      <motion.button
        whileHover={{ scale: 1.2, transition: { type: "spring" } }}
        className={classes.button}
        onClick={bookSeatsHandler}
      >
        Book seats
      </motion.button>
    </div>
  );
}

export default Seats;
