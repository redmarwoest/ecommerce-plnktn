import { motion } from "framer-motion";
import s from "./InitialLoader.module.scss";
import Lottie from "react-lottie";
import animationData from "../../../public/data.json";

interface LayoutProps {
  children?: React.ReactNode;
  setLoading: any;
}

const container = {
  show: {
    transition: {
      staggerChildren: 2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 200 },
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
    y: -200,
    transition: {
      ease: "easeInOut",
      duration: 3,
    },
  },
};

const itemMain = {
  hidden: { opacity: 0, y: 200 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1.6,
    },
  },
};

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const InitialLoader: React.FC<LayoutProps> = ({ setLoading }) => {
  return (
    <motion.div
      variants={container}
      onAnimationComplete={() => setLoading(false)}
      initial="hidden"
      animate="show"
      exit="exit"
      className={s.root}
    >
      <motion.div className={s.hallo} variants={item}>
        <Lottie options={defaultOptions} height={400} width={400} />;
      </motion.div>
    </motion.div>
  );
};

export default InitialLoader;
