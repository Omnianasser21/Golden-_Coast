import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./components/home/Home";
import Layout from "./components/layout/Layout";
import Aboutus from "./components/aboutus/Aboutus";
import Contactus from "./components/contact/Contactus";
import Allprojects from "./components/projects/Allprojects";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/about",
          element: <Aboutus />,
        },
        {
          path: "/contact",
          element: <Contactus />,
        },
        {
          path: "/projects",
          element: <Allprojects />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
