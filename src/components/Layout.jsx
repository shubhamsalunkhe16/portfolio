import Footer from "./Footer";
import Navbar from "./Navbar";
import ScrollToTop from "./ScrollToTop";
import ScrollToTopButton from "./ScrollToTopButton";

const Layout = ({ children }) => {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main className="w-11/12 sm:w-10/12 p-4 sm:p-6 rounded-lg m-auto max-w-screen-2xl bg-bg-card my-3 sm:my-6 mt-[82px] sm:mt-[90px] min-h-screen shadow-sm">
        {children}
      </main>
      <ScrollToTopButton />
      <Footer />
    </>
  );
};

export default Layout;
