import React, { lazy, Suspense, useEffect } from "react";
import Fallback from "./components/Fallback";
import { ThemeProvider } from "./context/ThemeContext";
import AOS from "aos";
import "aos/dist/aos.css";
import navConstants from "./constants/navConstants";
import ScrollToTop from "./components/ScrollToTop";
import { AnimatePresence } from "framer-motion";
import { useLocation, useRoutes } from "react-router-dom";

// const HomePage = lazy(() => import("./pages/HomePage"));
// const ExperiencePage = lazy(() => import("./pages/ExperiencePage"));
// const ProjectsPage = lazy(() => import("./pages/ProjectsPage"));
// const ArticlesPage = lazy(() => import("./pages/ArticlesPage"));
// const ArticlePage = lazy(() => import("./pages/ArticlePage"));
// const ResourcesPage = lazy(() => import("./pages/ResourcesPage"));
// const ContactPage = lazy(() => import("./pages/ContactPage"));
// const ErrorPage = lazy(() => import("./pages/ErrorPage"));

import HomePage from "./pages/HomePage";
import ExperiencePage from "./pages/ExperiencePage";
import ProjectsPage from "./pages/ProjectsPage";
import ArticlesPage from "./pages/ArticlesPage";
import ArticlePage from "./pages/ArticlePage";
import ResourcesPage from "./pages/ResourcesPage";
import ContactPage from "./pages/ContactPage";
import ErrorPage from "./pages/ErrorPage";

const RoutesArray = [
  {
    path: navConstants.HOME,
    element: <HomePage />,
  },
  {
    path: navConstants.EXPERIENCE,
    element: <ExperiencePage />,
  },
  {
    path: navConstants.PROJECTS,
    element: <ProjectsPage />,
  },
  {
    path: navConstants.ARTICLES,
    element: <ArticlesPage />,
  },
  {
    path: navConstants.ARTICLE,
    element: <ArticlePage />,
  },
  {
    path: navConstants.RESOURCES,
    element: <ResourcesPage />,
  },
  {
    path: navConstants.CONTACT,
    element: <ContactPage />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
];

export default function App() {
  const element = useRoutes(RoutesArray);

  const location = useLocation();

  useEffect(() => {
    AOS.init({
      offset: 80,
      duration: 600,
      easing: "linear",
    });
    AOS.refresh();
  }, []);

  if (!element) return <></>;

  return (
    <Suspense fallback={<Fallback />}>
      <ThemeProvider>
        <ScrollToTop />
        <AnimatePresence mode="wait" initial={false}>
          {React.cloneElement(element, { key: location.pathname })}
        </AnimatePresence>
      </ThemeProvider>
    </Suspense>
  );
}
