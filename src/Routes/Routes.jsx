import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import Products from "../Pages/Products";
import Layouts from "../Layouts/Layouts";
import Wishlist from "../Pages/Wishlist";
import Errorpage from "../Pages/Errorpage";
// named export
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layouts></Layouts>,
    errorElement:<Errorpage></Errorpage>,
    children: [
      {
        index:true,
        element: <Home></Home>,
      },

        {
    path: "/products",
    element: <Products></Products>,
  },

  {
    path:"/wishlist",
    element:<Wishlist></Wishlist>
  }
    ],
  },


]);

export default router;
