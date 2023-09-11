import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0 },
  enter: { opacity: 1 },
  exit: { opacity: 0 },
};

const PageTransition = ({ children, isToTop = true }) => (
  <motion.main
    initial="hidden"
    animate="enter"
    exit="exit"
    variants={variants}
    transition={{ type: "linear" }}
    style={isToTop && { marginTop: 60 }}
  >
    {children}
  </motion.main>
);

export default PageTransition;
