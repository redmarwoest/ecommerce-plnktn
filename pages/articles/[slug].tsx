import { BlogView } from "@components/blog";
import { Layout } from "@components/common";
import { getConfig } from "@framework/api/config";
import { getAllArticlesPaths, getArticle } from "@framework/article";

import {
  GetStaticPaths,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from "next";

// fetch all of the article slugs
export const getStaticPaths: GetStaticPaths = async () => {
  const config = getConfig();
  const { articles } = await getAllArticlesPaths(config);
  return {
    paths: articles.map((p) => ({ params: { slug: p.slug } })),
    fallback: false,
  };
};

// provide product spefici data to the page
export const getStaticProps = async ({
  params,
}: GetStaticPropsContext<{ slug: string }>) => {
  const config = getConfig();

  const { article } = await getArticle({
    config,
    variables: { slug: params!.slug },
  });
  return {
    props: {
      article,
    },
  };
};

export default function ArticleSlug({
  article,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return <>{article && <BlogView article={article} />}</>;
}

ArticleSlug.Layout = Layout;
