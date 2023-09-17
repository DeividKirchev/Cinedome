import { AnimatePresence } from "framer-motion";
import Header from "../components/Layout/Header/Header";
import "../styles/style.css";
import { useNextCssRemovalPrevention } from "@madeinhaus/nextjs-page-transition";
import Footer from "../components/Layout/Footer/Footer";
export default function MyApp({ Component, pageProps, router }) {
  useNextCssRemovalPrevention();
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
      <Footer />
    </>
  );
}
