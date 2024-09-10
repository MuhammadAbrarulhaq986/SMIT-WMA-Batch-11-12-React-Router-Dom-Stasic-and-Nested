import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Layout from "./Layout";
import Contact from "./pages/Contact";
import Services from "./pages/Services";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },

      {
        path: "contact",
        element: <Contact />,
      },

      {
        path: "services",
        element: <Services />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}>
    <Layout />
  </RouterProvider>
);
