import Link from "next/link";

const NotFound = () => {
  return (
    <>
      <p>That article couldn't be be found.</p>
      <p>
        Click <Link href="/articles">here</Link> to go back to the articles
        page.
      </p>
    </>
  );
};

export default NotFound;
