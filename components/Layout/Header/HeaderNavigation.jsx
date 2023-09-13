import { AnimatePresence, motion } from "framer-motion";
import classes from "./HeaderNavigation.module.css";
import NavLink from "./NavLink";
const links = [
  {
    to: "/",
    title: "Home",
  },
  {
    to: "/schedule",
    title: "Schedule",
  },
  {
    to: "/movies",
    title: "Movies",
  },
  {
    to: "/coming-up",
    title: "Coming up",
  },
];
function HeaderNavigation({ isNavShown, onClick = undefined }) {
  const listNav = (
    <ul>
      {links.map((item) => (
        <li key={item.to + "nav"}>
          <NavLink navId={"Nav"} href={item.to}>
            {item.title}
          </NavLink>
        </li>
      ))}
    </ul>
  );
  const listMob = (
    <ul>
      {links.map((item) => (
        <li key={item.to + "nav"}>
          <NavLink onClick={onClick} navId={"Mob"} href={item.to}>
            {item.title}
          </NavLink>
        </li>
      ))}
    </ul>
  );
  return (
    <>
      <nav className={classes.navigation}>{listNav}</nav>
      <AnimatePresence>
        {isNavShown && (
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ height: 0, paddingTop: 0, paddingBottom: 0 }}
            transition={{ duration: 0.5 }}
            className={classes.sidebar}
          >
            {listMob}
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}

export default HeaderNavigation;
