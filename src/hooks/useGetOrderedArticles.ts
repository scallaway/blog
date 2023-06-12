import path from "path";
import fs, { promises } from "fs";

export const useGetOrderedArticles = async () => {
  const articleDirectory = path.join(process.cwd(), "public/texts");
  const files = await promises.readdir(articleDirectory);

  return files
    .map((file) => ({
      file,
      mtime: fs.lstatSync(path.join("public/texts", file)).mtime,
    }))
    .sort((a, b) => b.mtime.getTime() - a.mtime.getTime())
    .map(({ file }) => file);
};
