import { createBrowserRouter } from "react-router-dom";

import UserLayout from "../layout/UserLayout";
import HomePage from "../pages/user/HomePage";
import NotFoundPage from "../pages/NotFoundPage";

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
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);
