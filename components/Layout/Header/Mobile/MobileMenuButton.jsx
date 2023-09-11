import MobileIcon from "./MobileIcon";
import classes from "./MobileMenuButton.module.css";
function MobileMenuButton({ onClick, isNavShown }) {
  function clickHandler() {
    onClick(!isNavShown);
  }
  return (
    <button onClick={clickHandler} className={classes.button}>
      <MobileIcon />
    </button>
  );
}

export default MobileMenuButton;
