import Head from "next/head";
import AutoSlider from "../../UI/AutoSlider";
import PageTransition from "../PageTransition";
import { motion, useScroll, useTransform } from "framer-motion";
import classes from "./Home.module.css";
import HomeComponents from "./HomeComponenets/HomeComponents";
function Home(props) {
  const images = ["cinema.jpg", "movie-set.jpg", "popcorn.jpg"];
  const { scrollY } = useScroll();
  const opacityImage = useTransform(scrollY, [0, 250], [1, 0]);
  const yImage = useTransform(scrollY, [0, 200], [0, -100]);
  const scaleText = useTransform(scrollY, [0, 150], [1, 1.5]);
  return (
    <>
      <Head>
        {images.map((image) => (
          <link key={image} rel="preload" href={`/${image}`} as="image" />
        ))}
      </Head>
      <PageTransition isToTop={false}>
        <motion.div
          style={{
            opacity: opacityImage,
            y: yImage,
          }}
        >
          <AutoSlider images={images} />
        </motion.div>
        <div className={`wrap ${classes.main}`}>
          <motion.h1 className={classes.h1} style={{ scale: scaleText }}>
            Cinedome
          </motion.h1>
          <motion.h2 className={classes.h2} style={{ scale: scaleText }}>
            All movies in one place
          </motion.h2>
          <HomeComponents data={props.data} />
        </div>
      </PageTransition>
    </>
  );
}

export default Home;
