
import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import Root from "../Root/Root";
import Loing from "../Login/Loing";
import Register from "../Register/Register";
import CardDetails from "../CardDetails/CardDetails";
import PrivateRoute from './PrivateRoute';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: '/card/:id',
        element: <PrivateRoute><CardDetails></CardDetails></PrivateRoute>
      },
      {
        path: "/login",
        element: <Loing></Loing>
      },
      {
        path: "/register",
        element: <Register></Register>
      }
    ]
  },
]);

export default router;