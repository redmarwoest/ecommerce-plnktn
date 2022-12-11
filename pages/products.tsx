import { ProductCard } from "@components/product";
import { Grid } from "@components/ui";
import { getAllProducts } from "@framework/product";
import { InferGetStaticPropsType } from "next";
import { getConfig } from "@framework/api/config";

import Layout from "../components/common/Layout/Layout";

export async function getStaticProps() {
  const config = getConfig();
  const products = await getAllProducts(config);

  return {
    props: {
      products,
    },
    revalidate: 4 * 60 * 60,
  };
}

export default function Products({
  products,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div>
      <Grid layout="A">
        {products.slice(0, 6).map((product: any) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Grid>
    </div>
  );
}

Products.Layout = Layout;
