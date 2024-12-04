import React, { lazy, Suspense, useEffect } from "react";
import Fallback from "./components/Fallback";
import { ThemeProvider } from "./context/ThemeContext";
import AOS from "aos";
import "aos/dist/aos.css";

const HomePage = lazy(() => import("./pages/HomePage"));

export default function App() {
  useEffect(() => {
    AOS.init({
      offset: 80,
      duration: 600,
      easing: "linear",
    });
    AOS.refresh();
  }, []);

  return (
    <Suspense fallback={<Fallback />}>
      <ThemeProvider>
        <HomePage />
      </ThemeProvider>
    </Suspense>
  );
}
