import { AnimatePresence, motion } from "framer-motion";
import classes from "./AutoSlider.module.css";
import { useState } from "react";
function AutoSlider(props) {
  const [currImageID, setCurrImageID] = useState(0);
  const images = props.images;
  setTimeout(() => {
    setCurrImageID((prevState) => {
      //console.log(prevState === images.length - 1 ? 0 : +prevState + 1);
      return prevState === images.length - 1 ? 0 : +prevState + 1;
    });
  }, 8000);
  return (
    <AnimatePresence mode="popLayout" initial={false}>
      <div className={classes.container}></div>
      <motion.img
        key={currImageID}
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
        }}
        exit={{ opacity: 0, position: "absolute" }}
        transition={{ duration: 1 }}
        className={classes.image}
        src={`/${images[currImageID]}`}
        alt="The best movies from the whole world!"
      />
    </AnimatePresence>
  );
}

export default AutoSlider;
