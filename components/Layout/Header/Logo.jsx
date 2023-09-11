import Link from "next/link";
import logoImage from "../../../public/logo.png";
function Logo() {
  return (
    <Link href="/">
      <img src={logoImage} />
    </Link>
  );
}

export default Logo;
