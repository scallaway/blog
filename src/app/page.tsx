import { useGetLatestArticle } from "@/hooks/useGetLatestArticle";
import { useParseArticleText } from "@/hooks/useParseArticleText";

import "./home.scss";
import { useGetOrderedArticles } from "@/hooks/useGetOrderedArticles";

const Home = async () => {
  const orderedArticles = await useGetOrderedArticles();
  const latestArticleName = orderedArticles[orderedArticles.length - 1];
  const parsedArticle = useParseArticleText(
    (await useGetLatestArticle()) || "",
  );

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
            <h4>My most recent thoughts:</h4>
            <div className="article">
              <p>{latestArticleDate}</p>
              {parsedArticle.body.map((text) => (
                <p key={text}>{text}</p>
              ))}
            </div>
          </section>
        ) : null
      }
    </>
  );
};

export default Home;
