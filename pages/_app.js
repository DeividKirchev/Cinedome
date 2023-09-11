import { AnimatePresence } from "framer-motion";
import Header from "../components/Layout/Header/Header";
import "../styles/style.css";
import { useRouter } from "next/router";
export default function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const pageKey = router.asPath;
  return (
    <>
      <Header />
      <AnimatePresence mode="wait" initial={false}>
        <Component key={pageKey} {...pageProps} />
      </AnimatePresence>
    </>
  );
}
