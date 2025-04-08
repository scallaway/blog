import { useGetArticle } from "@/hooks/useGetArticle";
import { useParseArticleText } from "@/hooks/useParseArticleText";
import "./page.scss";

const ArticlePage = async ({
  params,
}: {
  params: Promise<{ readonly slug: string }>;
}) => {
  const { slug } = await params;
  const article = await useGetArticle(slug);
  const parsedArticle = useParseArticleText(article ?? "");

  const date = slug.split("_")[0].replaceAll("-", "/");

  if (!article) {
    return <p>There doesn't appear to be an article with the name: {slug}</p>;
  }

  return parsedArticle ? (
    <article>
      <h1>{parsedArticle.title}</h1>
      <h3>{date}</h3>
      {parsedArticle.body.map((text) => (
        <p key={text}>{text}</p>
      ))}
      {parsedArticle.footer.length ? (
        <>
          <p>---</p>
          {parsedArticle.footer.map((text) => {
            return <p key={text}>{text}</p>;
          })}
        </>
      ) : null}
    </article>
  ) : (
    <p>There was a problem interpreting this article, try again maybe?</p>
  );
};

export default ArticlePage;
