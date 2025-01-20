import Footer from "./Footer";
import Navbar from "./Navbar";
import ScrollToTopButton from "./ScrollToTopButton";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main className="w-10/12 rounded-lg m-auto max-w-screen-2xl min-h-screen mt-[76px] shadow-sm text-text-primary">
        {children}
      </main>
      <ScrollToTopButton />
      <Footer />
    </div>
  );
};

export default Layout;
