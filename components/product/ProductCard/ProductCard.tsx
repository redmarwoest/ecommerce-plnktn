import { Product } from "@common/types/product";
import Link from "next/link";
import { FC } from "react";
import s from "./ProductCard.module.scss";
import Image from "next/image";
import { Button } from "@components/ui";

interface Props {
  product: Product;
  variant?: "simple" | "slim";
}

const ProductCard: FC<Props> = ({ product, variant = "simple" }) => {
  return (
    <Link href={`/products/${product.slug}`}>
      <div className={s.root}>
        {variant === "slim" ? (
          <>
            {product.images && (
              <Image
                className={s.productImage}
                alt={product.name ?? "Product image"}
                src={product.images[0].url}
                height={320}
                width={320}
                quality="85"
              />
            )}
          </>
        ) : (
          <>
            <div className={s.productBg}></div>
            <div className={s.productTag}>
              <div className={s.productInfo}>
                <Button
                  isIconLeft
                  image="/performance.svg"
                  color="dark-blue"
                  buttonStyle="A"
                >
                  {product.name}
                </Button>
                <Button color="dark-blue" buttonStyle="A">
                  {product.price.currencyCode} {product.price.value}
                </Button>
              </div>
              {product.images && (
                <Image
                  className={s.productImage}
                  alt={product.name ?? "Product image"}
                  src={product.images[0].url}
                  height={540}
                  width={540}
                  quality="85"
                />
              )}
              <div className={s.productBenefits}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
          </>
        )}
      </div>
    </Link>
  );
};

export default ProductCard;
