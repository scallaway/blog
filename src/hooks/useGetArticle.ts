import path from "path";
import { promises as fs } from "fs";

export const useGetArticle = async (slug: string) => {
  const articleDirectory = path.join(process.cwd(), "public/texts");
  try {
    return fs.readFile(path.join(articleDirectory, slug), "utf8");
  } catch (error) {
    console.error({ error });
  }
};
