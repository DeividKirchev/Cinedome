import classes from "./HeaderNavigation.module.css";
import NavLink from "./NavLink";
function HeaderNavigation() {
  return (
    <nav className={classes.navigation}>
      <ul>
        <li>
          <NavLink href="/">Home</NavLink>
        </li>
        <li>
          <NavLink href="/schedule">Schedule</NavLink>
        </li>
        <li>
          <NavLink href="/movies">Movies</NavLink>
        </li>
        <li>
          <NavLink href="/coming-up">Coming up</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default HeaderNavigation;
