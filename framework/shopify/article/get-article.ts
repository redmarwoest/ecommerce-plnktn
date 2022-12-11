import { ApiConfig, Variables } from "@common/types/api";
import { getArticleQuery, normalizeArticle } from "@framework/utils";
import { Article as ShopifyArticle } from "@framework/schema";
import { Article } from "@common/types/article";

type FetchType = {
  articleByHandle: ShopifyArticle;
};

type ReturnType = {
  article: Article | null;
};

const getArticle = async (options: {
  config: ApiConfig;
  variables: Variables;
}): Promise<ReturnType> => {
  const { config, variables } = options;
  const { data } = await config.fetch<FetchType>({
    query: getArticleQuery,
    variables,
  });

  const { articleByHandle } = data;

  return {
    article: articleByHandle ? normalizeArticle(articleByHandle) : null,
  };
};

export default getArticle;
