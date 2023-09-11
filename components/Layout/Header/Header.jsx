import Logo from "./Logo";
import HeaderNavigation from "./HeaderNavigation";
import TicketsLink from "./TicketsLink";
import classes from "./Header.module.css";
import MobileMenuButton from "./Mobile/MobileMenuButton";
import React, { useState } from "react";

function Header() {
  const [isNavShown, setIsNavShown] = useState(false);
  function changeIsShownHandler(isShown) {
    setIsNavShown(isShown);
  }
  return (
    <header className={classes.header}>
      <Logo />
      <HeaderNavigation
        onClick={changeIsShownHandler}
        isNavShown={isNavShown}
      />
      <TicketsLink />
      <MobileMenuButton
        onClick={changeIsShownHandler}
        isNavShown={isNavShown}
      />
    </header>
  );
}

export default Header;
