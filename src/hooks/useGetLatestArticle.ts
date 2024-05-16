import { promises as fs } from "fs";
import path from "path";
import { useGetOrderedArticles } from "./useGetOrderedArticles";

export const useGetLatestArticle = async () => {
  const orderedArticles = await useGetOrderedArticles();

  // If there was a problem getting the articles then don't panic!
  if (orderedArticles.length === 0) {
    return null;
  }

  return fs.readFile(
    path.join(process.cwd(), "public/texts/") + orderedArticles[0],
    "utf-8",
  );
};
