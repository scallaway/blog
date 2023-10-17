import React from "react";
import Link from "next/link";

import { useGetArticleNames } from "@/hooks/useGetArticleNames";
import { useGetOrderedArticles } from "@/hooks/useGetOrderedArticles";

const Articles = async () => {
  const articles = useGetArticleNames(await useGetOrderedArticles());

  return articles.map((article) => (
    <p key={article.name} className="article-name">
      <Link href={`articles/${article.slug}`}>
        {" "}
        {article.date} - {article.name}
      </Link>
    </p>
  ));
};

export default Articles;
