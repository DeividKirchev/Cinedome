import Link from "next/link";

function HeaderNavigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/schedule">Schedule</Link>
        </li>
        <li>
          <Link href="/movies">Movies</Link>
        </li>
        <li>
          <Link href="/comming-up">Comming up</Link>
        </li>
      </ul>
    </nav>
  );
}

export default HeaderNavigation;
