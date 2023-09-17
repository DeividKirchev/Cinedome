import classes from "./Footer.module.css";
import Logo from "../Header/Logo";
import { motion } from "framer-motion";
function Footer() {
  return (
    <footer className={classes.footer}>
      <motion.div
        initial="hidden"
        // animate="visible"
        whileInView="visible"
        viewport={{ once: true }}
        exit="hidden"
        transition={{ delay: 0.2, duration: 0.5 }}
        variants={{
          visible: { opacity: 1, translateY: 0 },
          hidden: { opacity: 0, translateY: -40 },
        }}
        className="wrap"
      >
        <div className={classes.left}>
          <Logo />
          <div>
            Tel:{" "}
            <a title="+49 12345679" href="tel:+49 12345679">
              +49 12345679
            </a>
          </div>
          <div>
            Email:{" "}
            <a title="cinedome@cinedome.com" href="mail:cinedome@cinedome.com">
              cinedome@cinedome.com
            </a>
          </div>
        </div>
        <div className={classes.right}>
          <div>Copyright &copy;2023 by Cinedome</div>
          <div>
            Web Development by{" "}
            <a
              target="_blank"
              title="Deyvid Kirchev"
              href="https://www.linkedin.com/in/deivid-kirchev-00378b252/"
            >
              Deyvid Kirchev
            </a>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}

export default Footer;
