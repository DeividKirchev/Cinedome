import Link from "next/link";
import classes from "./ButtonMain.module.css";
function ButtonMain(props) {
  const { isLink, ...restProps } = props;
  if (isLink) {
    return (
      <Link
        {...restProps}
        className={`${props.className ? props.className : ""} ${
          classes.btnMain
        }`}
      >
        {props.children}
      </Link>
    );
  }
  return (
    <button
      {...restProps}
      className={`${props.className ? props.className : ""} ${classes.btnMain}`}
    >
      {props.children}
    </button>
  );
}

export default ButtonMain;
