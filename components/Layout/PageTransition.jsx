import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, y: 0 },
  enter: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -100 },
};

const PageTransition = ({ children, isToTop = true, wrap = false }) => (
  <div>
    <motion.main
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ type: "linear", duration: 0.3 }}
      style={isToTop && { marginTop: 60 }}
      className={wrap ? "wrap" : ""}
    >
      {children}
    </motion.main>
  </div>
);

export default PageTransition;
