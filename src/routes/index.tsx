import { createBrowserRouter } from "react-router-dom";

import UserLayout from "../layout/UserLayout";
import HomePage from "../pages/user/home-page/HomePage";
import NotFoundPage from "../pages/NotFoundPage";
import CartPage from "../pages/user/cart-page/CartPage";

export const router = createBrowserRouter([
  {
    element: <UserLayout />,
    children: [
      {
        index: true,
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);
