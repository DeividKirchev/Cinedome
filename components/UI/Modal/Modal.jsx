import Card from "../Card";
import classes from "./Modal.module.css";
import { AnimatePresence, motion } from "framer-motion";
function Backdrop({ onClick }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.8 }}
      exit={{ opacity: 0 }}
      onClick={onClick}
      className={classes.backdrop}
    ></motion.div>
  );
}
function ModalContent(props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={classes.modal}
    >
      <Card>{props.children}</Card>
    </motion.div>
  );
}
function Modal(props) {
  return (
    <AnimatePresence>
      <Backdrop key={"backdrop"} onClick={props.hide} />
      <ModalContent key={"content"}>{props.children}</ModalContent>
    </AnimatePresence>
  );
}

export default Modal;
