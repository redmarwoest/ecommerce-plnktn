import { Grid } from "@components/ui";
import { getAllArticles } from "@framework/article";
import { InferGetStaticPropsType } from "next";
import { getConfig } from "@framework/api/config";

import Layout from "../components/common/Layout/Layout";
import BlogCard from "@components/blog/BlogGrid";

export async function getStaticProps() {
  const config = getConfig();
  const articles = await getAllArticles(config);

  return {
    props: {
      articles,
    },
    revalidate: 4 * 60 * 60,
  };
}

export default function Products({
  articles,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div className="articles">
      <Grid layout="C">
        {articles.slice(0, 6).map((article: any) => (
          <BlogCard key={article.id} article={article} />
        ))}
      </Grid>
    </div>
  );
}

Products.Layout = Layout;
