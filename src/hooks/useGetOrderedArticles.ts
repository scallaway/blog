import path from "path";
import { promises as fs } from "fs";

export const useGetOrderedArticles = async (): Promise<
  ReadonlyArray<string>
> => {
  const articleDirectory = path.join(process.cwd(), "public/texts");
  const files = await fs.readdir(articleDirectory);

  // First get a map of all the file dates to the file names, filtering out
  // those that are WIP.
  const fileMap = new Map(
    files
      .filter((file) => !file.startsWith("wip-"))
      .map((file) => [new Date(file.split("_")[0]), file]),
  );

  // Sort those dates, newest first.
  const sortedFileDates = [...fileMap.keys()].sort((a, b) =>
    b.toISOString().localeCompare(a.toISOString()),
  );

  // Return an array of files, in date order (newest first)
  return sortedFileDates
    .map((date) => fileMap.get(date) ?? null)
    .filter((file) => file !== null) as ReadonlyArray<string>;
};
