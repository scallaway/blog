type ArticleContent = {
  readonly title: string;
  readonly body: string[];
  readonly footer: string[];
};

const isNotEmpty = (str: string) => str.length > 0;

/**
 * Parse the contents of an article, splitting the body and title up, whilst
 * also ensuring the body is split into paragraphs.
 */
export const useParseArticleText = (text: string): ArticleContent | null => {
  if (!text) {
    return null;
  }

  const [title, body, footer] = text.split("===");

  return {
    title,
    body: body.split("\n\n").filter(isNotEmpty),
    footer: footer.split("\n").filter(isNotEmpty),
  };
};
