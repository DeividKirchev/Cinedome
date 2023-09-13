import { useRouter } from "next/router";
import classes from "./NavLink.module.css";
import Link from "next/link";
import { motion } from "framer-motion";
function NavLink(props) {
  const router = useRouter();
  const isActive = router.pathname == props.href;
  function clickHandler() {
    if (props.onClick) {
      props.onClick(false);
    }
  }
  return (
    <>
      <Link
        scroll={false}
        className={`${classes.link} ${isActive ? classes.active : ""}`}
        href={props.href}
        onClick={clickHandler}
      >
        {props.children}
      </Link>
      {isActive && (
        <motion.hr
          layoutId={props.navId === "Mob" ? null : "navigationUnderline"}
          className={classes.activeLine}
        />
      )}
    </>
  );
}

export default NavLink;
