import { AnimatePresence } from "framer-motion";
import Header from "../components/Layout/Header/Header";
import "../styles/style.css";
import { fixTimeoutTransition } from "../components/UI/fixTimeoutTransition";
export default function MyApp({ Component, pageProps, router }) {
  fixTimeoutTransition(500);
  return (
    <>
      <Header />
      <AnimatePresence
        mode="wait"
        initial={false}
        onExitComplete={() => window.scrollTo(0, 0)}
      >
        <Component key={router.asPath} {...pageProps} />
      </AnimatePresence>
    </>
  );
}
