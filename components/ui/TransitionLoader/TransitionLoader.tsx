import s from "./TransitionLoader.module.scss";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";

function TransitionLoader() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = (url: any) => url !== router.asPath && setLoading(true);
    const handleComplete = (url: any) =>
      url === router.asPath &&
      setTimeout(() => {
        setLoading(false);
      }, 2000);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  });

  return (
    loading && (
      <AnimateSharedLayout type="crossfade">
        <AnimatePresence>
          <motion.div className={s.spinnerWrapper}>
            <div className={s.spinner}></div>
          </motion.div>
        </AnimatePresence>
      </AnimateSharedLayout>
    )
  );
}

export default TransitionLoader;
