import Header from "../components/user/header/Header";
import Footer from "../components/user/footer/Footer";
import { Outlet } from "react-router-dom";

export default function UserLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}
