import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { UIProvider } from "@components/ui/context";
import { Layout } from "@components/common";
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { InitialLoader, TransitionLoader } from "@components/ui";

function MyApp({ Component, pageProps, ...appProps }: AppProps) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loading
      ? document.querySelector("body").classList.add("loading")
      : document.querySelector("body").classList.remove("loading");
  }, [loading]);
  return (
    <AnimateSharedLayout type="crossfade">
      <AnimatePresence>
        {loading ? (
          <div key="loader">
            <InitialLoader setLoading={setLoading} />
          </div>
        ) : (
          <>
            {!loading && (
              <UIProvider>
                <Layout>
                  <TransitionLoader />
                  <Component {...pageProps} />
                </Layout>
              </UIProvider>
            )}
          </>
        )}
      </AnimatePresence>
    </AnimateSharedLayout>
  );
}

export default MyApp;
