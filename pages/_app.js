import { AnimatePresence } from "framer-motion";
import Header from "../components/Layout/Header/Header";
import "../styles/style.css";
export default function MyApp({ Component, pageProps, router }) {
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
