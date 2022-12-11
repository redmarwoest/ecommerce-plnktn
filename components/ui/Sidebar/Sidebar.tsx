import { FC, useEffect, useRef } from "react";
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from "body-scroll-lock";
import s from "./Sidebar.module.scss";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import cn from "classnames";

interface Props {
  children: any;
  initial: any;
  animate: any;
  exit: any;
  isOpen: boolean;
  onClose: () => void;
  layout: "Left" | "Right";
}

const Sidebar: FC<Props> = ({
  children,
  isOpen,
  onClose,
  initial,
  animate,
  layout,
  exit,
}) => {
  const ref = useRef() as React.MutableRefObject<HTMLDivElement>;
  const rootClassName = cn({
    [s.layoutLeft]: layout === "Left",
    [s.layoutRight]: layout === "Right",
  });

  useEffect(() => {
    if (ref.current) {
      if (isOpen) {
        disableBodyScroll(ref.current);
      } else {
        enableBodyScroll(ref.current);
      }
    }
    return () => {
      clearAllBodyScrollLocks();
    };
  }, [isOpen]);
  return (
    <>
      <AnimateSharedLayout>
        <AnimatePresence>
          {isOpen ? (
            <div ref={ref} className={s.root}>
              <motion.div variants={container} className={s.sideNavChild}>
                <motion.div
                  key="sidebar"
                  onClick={onClose}
                  className={s.sideNavClose}
                  initial={{
                    opacity: 0,
                  }}
                  animate={{ opacity: 0.5 }}
                  exit={{ opacity: 0 }}
                  transition={{
                    type: "tween",
                    duration: 0.3,
                  }}
                />
                <motion.section
                  key="sidebar"
                  className={rootClassName}
                  initial={initial}
                  animate={animate}
                  exit={exit}
                  transition={{
                    type: "tween",
                    duration: 0.3,
                  }}
                >
                  <div className={s.sideNavSectionContainer}>
                    <div className={s.sideNavSectionContainerDiv}>
                      {children}
                    </div>
                  </div>
                </motion.section>
              </motion.div>
            </div>
          ) : null}
        </AnimatePresence>
      </AnimateSharedLayout>
    </>
  );
};

export default Sidebar;

const container = {
  show: {
    transition: {
      staggerChildren: 2,
    },
  },
};
