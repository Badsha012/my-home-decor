import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import Products from "../Pages/Products";
import Layouts from "../Layouts/Layouts";
// named export
  const router = createBrowserRouter([

    {

        path:"/",
        element:<Layouts></Layouts>,
        children:[
              {
    path: "/home",
    element:<Home></Home>
  },

        ]
    },

  {
    path:"/products",
    element:<Products></Products>
  }
]);

export default router