import { createBrowserRouter } from "react-router-dom";
import Wrapper from "./Common/Wrapper";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import ProtectedRoute from "./Common/ProtectedRoute";

export const router = createBrowserRouter([
  {
    element: <Wrapper />,
    errorElement: <div>Error 404, Page not foun</div>,
    children: [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/home",
        element: (
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        ),
      },
      {
        path: "/signup",
        element: <div>Sign up</div>,
      },
    ],
  },
]);
