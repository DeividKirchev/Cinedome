import Logo from "./Logo";
import HeaderNavigation from "./HeaderNavigation";
import TicketsLink from "./TicketsLink";
import classes from "./Header.module.css";
function Header() {
  return (
    <header className={classes.header}>
      <Logo />
      <HeaderNavigation />
      <TicketsLink />
    </header>
  );
}

export default Header;
