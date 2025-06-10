import Link from "next/link";
import "./header.scss";
import { Divider } from "./Divider.tsx";

export const Header = () => {
  return (
    <header className="header">
      <Link href="/">
        <h1>scallaway.dev</h1>
      </Link>
      <p>== An archive of my online ramblings ==</p>
      <nav>
        <p>
          {"> "}
          <Link href="/articles">Articles</Link>
        </p>
      </nav>
      <Divider />
    </header>
  );
};
