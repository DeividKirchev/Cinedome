import Head from "next/head";
import AutoSlider from "../../UI/AutoSlider";
import PageTransition from "../PageTransition";
function Home() {
  const images = ["cinema.jpg", "movie-set.jpg", "popcorn.jpg"];
  return (
    <>
      <Head>
        {images.map((image) => (
          <link key={image} rel="preload" href={`/${image}`} as="image" />
        ))}
      </Head>
      <PageTransition isToTop={false}>
        <AutoSlider images={images} />
      </PageTransition>
    </>
  );
}

export default Home;
