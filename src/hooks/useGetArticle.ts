import { promises as fs } from "fs";
import path from "path";

export const useGetArticle = async (slug: string) => {
  const articleDirectory = path.join(process.cwd(), "public/texts");
  try {
    return fs.readFile(path.join(articleDirectory, slug), "utf8");
  } catch (error) {
    console.error({ error });
  }
};
