import Link from "next/link";
import s from "./Result.module.scss";
import Image from "next/image";
import { motion } from "framer-motion";

interface Props {
  products: any;
  articles: any;
}

const Result: React.FC<Props> = ({ products, articles }) => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      exit="exit"
      className={s.root}
    >
      <motion.div variants={item} className={s.product}>
        <Image
          className={s.productFit}
          src="/find-fit.svg"
          alt={""}
          width={72}
          height={72}
        ></Image>
        {products.map((product: any) => (
          <Link href={product.link} key={product.id}>
            <div className={s.productImage}>
              <Image
                src={product.image}
                alt={product.imageAlt}
                width={280}
                height={280}
              ></Image>
            </div>
          </Link>
        ))}
      </motion.div>
      <ul className={s.listItems}>
        {articles.map((article: any) => (
          <Link href={article.link} key={article.id}>
            <motion.li variants={item}>
              <Image
                src="/articles.svg"
                alt={""}
                width={24}
                height={24}
              ></Image>
              <h6>{article.title}</h6>
              <Image
                src="/arrow-right.svg"
                alt={""}
                width={16}
                height={16}
              ></Image>
            </motion.li>
          </Link>
        ))}
      </ul>
    </motion.div>
  );
};

export default Result;

const container = {
  show: {
    transition: {
      staggerChildren: 0.2,
      type: "spring",
      stiffness: 100,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1.6,
    },
  },
  exit: {
    opacity: 0,
    y: -10,
    transition: {
      ease: "easeInOut",
      duration: 0.6,
    },
  },
};
