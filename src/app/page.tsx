import Link from "next/link";
import { useGetLatestArticle } from "@/hooks/useGetLatestArticle";
import { useParseArticleText } from "@/hooks/useParseArticleText";

import "./home.scss";
import { useGetOrderedArticles } from "@/hooks/useGetOrderedArticles";
import { useGetArticleNames } from "@/hooks/useGetArticleNames";

const Home = async () => {
  const orderedArticles = await useGetOrderedArticles();
  const latestArticleName = orderedArticles[orderedArticles.length - 1];
  const parsedArticle = useParseArticleText(
    (await useGetLatestArticle()) || "",
  );
  const articleSlug = useGetArticleNames(orderedArticles)[0].slug;

  const latestArticleDate = latestArticleName
    ? latestArticleName.split("_")[0].replaceAll("-", "/")
    : null;

  return (
    <>
      {
        // Frustrating that we have to check both here, but such is the nature
        // of hooks
        parsedArticle && latestArticleName ? (
          <section>
            <div className="recent-article-header">
              <h4>My most recent thoughts</h4>
              <Link href={`articles/${articleSlug}`}>
                <h6>Click for the links</h6>
              </Link>
            </div>
            <article className="article">
              <p>{latestArticleDate}</p>
              {parsedArticle.body.map((text) => (
                <p key={text}>{text}</p>
              ))}
            </article>
          </section>
        ) : null
      }
    </>
  );
};

export default Home;
