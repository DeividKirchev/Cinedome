import Link from "next/link";
import { motion } from "framer-motion";
import classes from "./TicketsLink.module.css";
function TicketsLink() {
  return (
    <motion.div
      className={classes.link}
      whileHover={{
        scale: 1.1,
      }}
      transition={{ type: "spring", stiffness: 500 }}
    >
      <Link href="/tickets">Tickets</Link>
    </motion.div>
  );
}

export default TicketsLink;
