import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/childPage/child">
            <a>childPage</a>
          </Link>
        </li>
        <li>
          <Link href="/sayHello">
            <a>say hello</a>
          </Link>
        </li>
        <li>
          <Link href="/ssrFile/1">
            <a>ssr page1</a>
          </Link>
        </li>
        <li>
          <Link href="/ssrFile/2">
            <a>ssr page2</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
