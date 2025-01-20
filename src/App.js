import React, { lazy, Suspense, useEffect } from "react";
import Fallback from "./components/Fallback";
import { ThemeProvider } from "./context/ThemeContext";
import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import navConstants from "./constants/navConstants";
import ScrollToTop from "./components/ScrollToTop";

const HomePage = lazy(() => import("./pages/HomePage"));
const ExperiencePage = lazy(() => import("./pages/ExperiencePage"));
const ProjectsPage = lazy(() => import("./pages/ProjectsPage"));
const ArticlesPage = lazy(() => import("./pages/ArticlesPage"));
const ArticlePage = lazy(() => import("./pages/ArticlePage"));
const ResourcesPage = lazy(() => import("./pages/ResourcesPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const ErrorPage = lazy(() => import("./pages/ErrorPage"));

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
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path={navConstants.HOME} element={<HomePage />} />
            <Route
              path={navConstants.EXPERIENCE}
              element={<ExperiencePage />}
            />
            <Route path={navConstants.PROJECTS} element={<ProjectsPage />} />
            <Route path={navConstants.ARTICLE} element={<ArticlePage />} />
            <Route path={navConstants.ARTICLES} element={<ArticlesPage />} />
            <Route path={navConstants.RESOURCES} element={<ResourcesPage />} />
            <Route path={navConstants.CONTACT} element={<ContactPage />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </Suspense>
  );
}
