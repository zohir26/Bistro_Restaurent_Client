import {
    createBrowserRouter,
  } from "react-router-dom";
import Home from "../Home/Home";
import HomeLayout from "../Layout/HomeLayout";
import Banner from "../Home/Banner";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout></HomeLayout>,
      children: [
          {
            path:'/',
            element:<Banner></Banner>
          }
      ]
    },
  ]);

  export default router;