import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import Products from "../Pages/Products";
// named export
  const router = createBrowserRouter([
  {
    path: "/",
    element:<Home></Home>
  },
  {
    path:"/products",
    element:<Products></Products>
  }
]);

export default router