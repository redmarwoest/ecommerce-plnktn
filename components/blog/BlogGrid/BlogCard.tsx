import { Button } from "@components/ui";
import { FC } from "react";
import s from "./BlogCard.module.scss";
import Image from "next/image";
import { Article } from "../../../framework/common/types/article";
import { ProductCard } from "@components/product";
import Link from "next/link";

interface Props {
  article: Article;
}

const BlogCard: FC<Props> = ({ article }) => {
  return (
    <div className={s.container}>
      <div key="article" className={s.containerBox}>
        <Image
          className={s.articleImage}
          alt={article.title ?? "article image"}
          height={320}
          width={320}
          quality={85}
          src={article.image}
        ></Image>
        <div>
          <h3>{article.title}</h3>
          <Link href={`/articles/${article.slug}`}>
            <Button buttonStyle="B" color="outline" className={s.button}>
              DIVE HERE
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
