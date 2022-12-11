import { Button } from "@components/ui";
import { FC } from "react";
import s from "./BlogView.module.scss";
import Image from "next/image";
import { Article } from "@common/types/article";

interface Props {
  article: Article;
}

const BlogView: FC<Props> = ({ article }) => {
  return (
    <section className={s.root}>
      <div className={s.articleImage}>
        <Image src={article.image} alt={""} width={100} height={100}></Image>
      </div>
      <div className={s.articleAuthor}>
        <span className={s.articleAuthorImage}></span>
        <span className={s.articleAuthorName}>
          <span>
            <p>{article.authorV2}</p>
          </span>
          <span className={s.articleAuthorPublished}>
            <p>{article.publishedAt}</p>
            <p>3 Min Read</p>
          </span>
        </span>
      </div>
      <div className={s.articleContent}>
        <h2>{article.title}</h2>
        <p>{article.content}</p>
      </div>
    </section>
  );
};

export default BlogView;
