import { normalizeArticle, getAllArticlesQuery } from "../utils";
import { ArticleConnection } from "../schema";
import { Article } from "@common/types/article";
import { ApiConfig } from "@common/types/api";
type ReturnType = {
  articles: ArticleConnection;
};

const getAllArticles = async (config: ApiConfig): Promise<Article[]> => {
  const { data } = await config.fetch<ReturnType>({
    query: getAllArticlesQuery,
  });

  const articles =
    data.articles.edges.map(({ node: article }) => normalizeArticle(article)) ??
    [];
  console.log(articles, "get all articles");

  return articles;
};

export default getAllArticles;

// type FetchParams = {
//   query: string;
// };

// const fetchApi = async ({ query }: FetchParams) => {
//   const url = "http://localhost:4000/graphql";

//   const res = await fetch(url, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       query,
//     }),
//   });

//   const data = await res.json();
//   console.log(data);
//   return { data };
// };

// const getAllArticles = async (): Promise<any[]> => {
//   const articles = await fetchApi({ query: getAllArticlesQuery });
//   console.log(articles.data);
//   return articles.data;
// };

// export default getAllArticles;
