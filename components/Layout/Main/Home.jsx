import AutoSlider from "../../UI/AutoSlider";
import PageTransition from "../PageTransition";
function Home() {
  const images = ["cinema.jpg", "movie-set.jpg", "popcorn.jpg"];

  return (
    <PageTransition isToTop={false}>
      <AutoSlider images={images} />
      <div>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex et quod
        animi voluptates illum molestiae cumque, adipisci eligendi ad alias
        similique, rem deserunt placeat error magnam dignissimos, eum iure
        fugit.
      </div>
      <div>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex et quod
        animi voluptates illum molestiae cumque, adipisci eligendi ad alias
        similique, rem deserunt placeat error magnam dignissimos, eum iure
        fugit.
        <div>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex et quod
          animi voluptates illum molestiae cumque, adipisci eligendi ad alias
          similique, rem deserunt placeat error magnam dignissimos, eum iure
          fugit.
        </div>
        <div>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex et quod
          animi voluptates illum molestiae cumque, adipisci eligendi ad alias
          similique, rem deserunt placeat error magnam dignissimos, eum iure
          fugit.
        </div>
        <div>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex et quod
          animi voluptates illum molestiae cumque, adipisci eligendi ad alias
          similique, rem deserunt placeat error magnam dignissimos, eum iure
          fugit.
        </div>
      </div>
    </PageTransition>
  );
}

export default Home;
