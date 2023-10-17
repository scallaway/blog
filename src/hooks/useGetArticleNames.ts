export const useGetArticleNames = (articles: ReadonlyArray<string>) => {
  return articles.map((article) => {
    const [rawDate, rawName] = article.split("_");

    const name = rawName.split(".")[0].replaceAll("-", " ");

    const date = rawDate.replaceAll("-", "/");

    return {
      name,
      date,
      slug: article,
    };
  });
};
