import Link from "next/link";
import { Divider } from "./Divider";

const Footer = () => {
  return (
    <footer>
      <Divider />
      <p>
        {"> "}
        <Link href="https://github.com/scallaway">Github</Link>
      </p>
      <p>
        {"> "}
        <Link href="https://scottcallaway.co.uk">Personal site</Link>
      </p>
    </footer>
  );
};

export default Footer;
