import classes from "./Loader.module.css";
function Loader() {
  return (
    <div className={classes.container}>
      <div className={classes["lds-ring"]}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default Loader;
