import BubbleFloat from "./BubbleFloat";
import Footer from "./Footer";
import Navbar from "./Navbar";
import ScrollToTopButton from "./ScrollToTopButton";

const Layout = ({ children }) => {
  return (
    <div id="home_section">
      <Navbar />
      <main className="w-11/12 sm:w-10/12 p-4 sm:p-6 rounded-lg m-auto max-w-screen-2xl my-3 sm:my-6 mt-[82px] sm:mt-[90px] min-h-screen shadow-sm text-text-primary">
        {children}
      </main>
      <ScrollToTopButton />
      <Footer />
    </div>
  );
};

export default Layout;
