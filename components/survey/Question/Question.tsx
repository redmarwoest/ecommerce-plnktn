import { Button, Container } from "@components/ui";
import { AnimatePresence, motion } from "framer-motion";
import { FC, useState } from "react";
import s from "./Question.module.scss";

interface Props {
  formData: object;
  setFormData: Function;
  items: any;
  title: string;
  subtitle?: string;
}

const Question: React.FC<Props> = ({
  formData,
  setFormData,
  items,
  title,
  subtitle,
}) => {
  const [activeId, setActiveId] = useState();
  return (
    <motion.div
      className={s.root}
      variants={container}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <div className={s.container}>
        <motion.div variants={item} className={s.titles}>
          <h2>{title}</h2>
          <p>{subtitle}</p>
        </motion.div>
        <motion.div variants={item} className={s.gridContainer}>
          <div className={s.grid}>
            {items.map((item: any) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveId(item.id);
                  setFormData({
                    ...formData,
                    topHealthGoal: item.value,
                  });
                }}
                className={activeId === item.id ? s.buttonActive : s.button}
              >
                {item.value}
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

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

export default Question;
