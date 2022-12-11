import * as React from "react";
import Image from "next/image";
import s from "./Recipe.module.scss";
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";
import Button from "../../../ui/Button/Button";

const Recipe: React.FC<any> = ({ logo, tekst, button, href }) => {
  return (
    <AnimateSharedLayout>
      <AnimatePresence>
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          exit="exit"
          className={s.recipe}
        >
          <motion.li variants={item}>
            <Image src={logo} width={100} height={100} alt="" />
          </motion.li>
          <motion.li variants={item}>
            <p>{tekst}</p>
          </motion.li>
          <motion.li variants={item}>
            <Button href={href} isIconLeft image="/website.svg" color="outline">
              {button}
            </Button>
          </motion.li>
        </motion.div>
      </AnimatePresence>
    </AnimateSharedLayout>
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

export default Recipe;
