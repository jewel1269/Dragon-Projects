
import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import Root from "../Root/Root";
import Loing from "../Login/Loing";
import Register from "../Register/Register";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {
            path: "/",
            element:<Home></Home>
        },
        {
          path: "/login",
          element:<Loing></Loing>
        },
        {
          path: "/register",
          element:<Register></Register>
        }
      ]
    },
  ]);
  
  export default router;