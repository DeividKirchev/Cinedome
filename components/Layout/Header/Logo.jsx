import Link from "next/link";
import classes from "./Logo.module.css";
function Logo() {
  return (
    <Link scroll={false} className={classes.logo} href="/">
      <img src="/logo.png" alt="Cineland" />
    </Link>
  );
}

export default Logo;
