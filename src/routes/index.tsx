import { createBrowserRouter } from "react-router-dom";

import UserLayout from "../layout/UserLayout";
import HomePage from "../pages/user/home-page/HomePage";
import NotFoundPage from "../pages/NotFoundPage";
import CartPage from "../pages/user/cart-page/CartPage";
import FilterPage from "../pages/user/filter/FilterPage";
import ProductDetailPage from "../pages/user/product-detail/ProductDetailPage";
import AuthPage from "../pages/user/auths/AuthPage";

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
        path: "/shop",
        element: <FilterPage />,
      },
      {
        path: "/products/:id",
        element: <ProductDetailPage />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
      {
        path: "/login",
        element: <AuthPage />
      },
      {
        path: "/register",
        element: <AuthPage />
      }
    ],
  },
]);
