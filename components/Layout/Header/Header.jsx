import Link from "next/link";
import Logo from "./Logo";
import HeaderNavigation from "./HeaderNavigation";
import BookLink from "./BookButton";

function Header() {
  return (
    <header>
      <Logo />
      <HeaderNavigation />
      <BookLink />
    </header>
  );
}

export default Header;
