import ThisWeek from "../../../Movies/ThisWeek";
import { useRef } from "react";
import { useInView } from "framer-motion";
import Upcoming from "../../../Movies/Upcoming";
import classes from "./HomeComponents.module.css";
function HomeComponents({ data }) {
  const refWeek = useRef(null);
  const refUpcoming = useRef(null);
  const weekIsInView = useInView(refWeek, { once: true });
  const upcomingIsInView = useInView(refUpcoming, { once: true });
  return (
    <div className={classes.container}>
      <h3
        ref={refWeek}
        style={{
          transform: weekIsInView ? "none" : "translateX(200px)",
          opacity: weekIsInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
        }}
        className={classes.h3}
      >
        This week
      </h3>
      <ThisWeek data={data} />
      <h3
        ref={refUpcoming}
        style={{
          transform: upcomingIsInView ? "none" : "translateX(-200px)",
          opacity: upcomingIsInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
        }}
        className={classes.reverse + " " + classes.h3}
      >
        Upcoming
      </h3>
      <Upcoming data={data} />
    </div>
  );
}

export default HomeComponents;
