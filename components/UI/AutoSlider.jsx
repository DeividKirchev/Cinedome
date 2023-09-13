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
    <AnimatePresence initial={false}>
      <div className={classes.container}>
        <motion.img
          key={currImageID}
          initial={{ opacity: 0.2 }}
          animate={{
            opacity: 1,
          }}
          transition={{ duration: 1 }}
          className={classes.image}
          src={`/${images[currImageID]}`}
          alt="The best movies from the whole world!"
        />
      </div>
    </AnimatePresence>
  );
}

export default AutoSlider;
