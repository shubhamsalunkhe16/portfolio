import React, { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import navConstants from "./constants/navStrings";
import Fallback from "./components/Fallback";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
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

const queryClient = new QueryClient();

export default function App() {
  return (
    <Suspense fallback={<Fallback />}>
      <ThemeProvider>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </ThemeProvider>
    </Suspense>
  );
}
