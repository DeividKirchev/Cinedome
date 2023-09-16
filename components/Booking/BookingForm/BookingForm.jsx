import Modal from "../../UI/Modal/Modal";
import { motion } from "framer-motion";
import classes from "./BookingForm.module.css";
import { useReducer } from "react";
import Loader from "../../UI/Loader";

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};
function reducer(state, action) {
  //console.log(action);
  if (action.type === "setName") {
    const isNameValid = action.value.length > 0;
    return {
      ...state,
      name: action.value,
      isNameValid,
      isFormValid: state.isEmailValid && isNameValid,
    };
  }
  if (action.type === "setEmail") {
    const isEmailValid = validateEmail(action.value);
    return {
      ...state,
      email: action.value,
      isEmailValid,
      isFormValid: state.isNameValid && isEmailValid,
    };
  }
  if (action.type === "interact") {
    return {
      ...state,
      interacted: true,
    };
  }
  return initial;
}
const initial = {
  name: "",
  email: "",
  isNameValid: false,
  isEmailValid: false,
  isFormValid: false,
  interacted: false,
};

function BookingForm({ isPending, hideForm, submit }) {
  const [state, dispatch] = useReducer(reducer, initial);
  function submitHandler(e) {
    e.preventDefault();
    dispatch({ type: "interact" });
    if (state.isFormValid) {
      submit({ name: state.name, email: state.email });
    }
  }
  if (isPending) {
    return (
      <Modal>
        <Loader />
      </Modal>
    );
  }
  return (
    <Modal hide={hideForm}>
      <form className={classes.form} onSubmit={submitHandler}>
        <span className={classes.title}>Booking details</span>
        <label
          htmlFor="bookName"
          className={
            !state.isNameValid && state.interacted ? classes.error : ""
          }
        >
          <span className={classes.label}>Your Name</span>
          <input
            type="text"
            id="bookName"
            autoComplete="name"
            placeholder="John Doe"
            value={state.name}
            onChange={(e) =>
              dispatch({ type: "setName", value: e.target.value })
            }
          />
        </label>
        <label
          htmlFor="bookEmail"
          className={
            !state.isEmailValid && state.interacted ? classes.error : ""
          }
        >
          <span className={classes.label}>Your Email</span>
          <input
            type="text"
            id="bookEmail"
            autoComplete="email"
            placeholder="johndoe@email.abc"
            value={state.email}
            onChange={(e) =>
              dispatch({ type: "setEmail", value: e.target.value })
            }
          />
        </label>
        <i className={classes.info}>
          You will receive the booking details on your email.
        </i>
        <motion.button
          className={classes.button}
          whileHover={{
            scale: 1.2,
            transition: { type: "spring", duration: 0.5 },
          }}
          type="submit"
        >
          Book
        </motion.button>
      </form>
    </Modal>
  );
}

export default BookingForm;
