import type { InferGetStaticPropsType } from "next";
import { getAllProducts } from "@framework/product";
import { getConfig } from "@framework/api/config";
import { Grid, Marquee, Header } from "@components/ui";
import { ProductCard } from "@components/product";
import { Landing, Benefits, Recipes, Impact } from "@components/general";
import { getAllArticles } from "@framework/article";
import BlogCard from "@components/blog/BlogGrid";

export async function getStaticProps() {
  const config = getConfig();
  const products = await getAllProducts(config);
  const articles = await getAllArticles(config);

  return {
    props: {
      products,
      articles,
    },
    revalidate: 4 * 60 * 60,
  };
}

export default function Home({
  products,
  articles,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <main>
      <Landing></Landing>
      <Benefits></Benefits>
      <Impact></Impact>
      <Marquee>
        {products.slice(0, 3).map((product: any) => (
          <ProductCard variant="slim" key={product.id} product={product} />
        ))}
      </Marquee>
      {/* <Recipes></Recipes> */}
      <Grid layout="C">
        {articles.slice(0, 6).map((article: any) => (
          <BlogCard key={article.id} article={article} />
        ))}
      </Grid>
      <Header header={"MORE ARTICLES"} layout={"bottom"}></Header>
    </main>
  );
}
