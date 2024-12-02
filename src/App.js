import React, { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import navConstants from "./constants/navStrings";
import Fallback from "./components/Fallback";
import { ThemeProvider } from "./context/ThemeContext";

const HomePage = lazy(() => import("./pages/HomePage"));
const ResourcesPage = lazy(() => import("./pages/ResourcesPage"));

const router = createBrowserRouter([
  {
    path: navConstants.HOME,
    element: <HomePage />,
  },
  {
    path: navConstants.RESOURCES,
    element: <ResourcesPage />,
  },
]);

export default function App() {
  return (
    <Suspense fallback={<Fallback />}>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </Suspense>
  );
}
