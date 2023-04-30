import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home/Home";
import SinglePlace from "../Pages/SinglePlace/SinglePlace";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: ":id",
        element: <SinglePlace></SinglePlace>,
        loader: ({params})=> fetch(`http://localhost:5000/place/${params.id}`)
      }
    ],
  },
]);

export default router;
