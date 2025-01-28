import Footer from "./Footer";
import Navbar from "./Navbar";
import ScrollToTopButton from "./ScrollToTopButton";
import { motion, useIsPresent } from "framer-motion";

const Layout = ({ children }) => {
  const isPresent = useIsPresent();
  return (
    <>
      <Navbar />
      <main className="w-10/12 rounded-lg m-auto max-w-screen-2xl min-h-screen mt-[76px] text-text-primary">
        {children}
      </main>
      <ScrollToTopButton />
      <Footer />
      <motion.div
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0, transition: { duration: 0.5, ease: "circOut" } }}
        exit={{ scaleX: 1, transition: { duration: 0.5, ease: "circIn" } }}
        style={{ originX: isPresent ? 0 : 1 }}
        className="privacy-screen"
      />
    </>
  );
};

export default Layout;
