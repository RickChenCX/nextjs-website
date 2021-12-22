import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/childPage/child">
        <a>childPage</a>
      </Link>
      <Link href="/sayHello">
        <a>say hello</a>
      </Link>
      <Link href="/ssrFile/1">
        <a>ssr page1</a>
      </Link>
      <Link href="/ssrFile/2">
        <a>ssr page2</a>
      </Link>
      <Link href="/mysqlDemo">
        <a>mysql demo</a>
      </Link>
    </nav>
  );
}
