import { ApiConfig } from "@common/types/api";
import { Article } from "@common/types/article";
import { ArticleConnection } from "@framework/schema";
import getAllArticlesPathsQuery from "@framework/utils/queries/get-all-articles-paths";

type ReturnType = {
  articles: Pick<Article, "slug">[];
};

const getAllArticlesPaths = async (config: ApiConfig): Promise<ReturnType> => {
  const { data } = await config.fetch<{ articles: ArticleConnection }>({
    query: getAllArticlesPathsQuery,
  });

  const articles = data.articles.edges.map(({ node: { handle } }) => {
    return {
      slug: handle,
    };
  });

  return { articles };
};

export default getAllArticlesPaths;
