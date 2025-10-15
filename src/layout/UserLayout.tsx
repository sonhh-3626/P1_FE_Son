import Header from "../components/user/header/Header";
import Footer from "../components/user/footer/Footer";
import { Outlet, useLocation, useParams } from "react-router-dom";
import Breadcrumb from "../components/common/Breadcrumb";
import { generateBreadcrumbs } from "../utils/generateBreadcrumbsUtil";
import { useSelector } from "react-redux";

export default function UserLayout() {
  const location = useLocation();
  const { pathname } = location;

  const excludedPaths = ["/"];
  const shouldShowBreadcrumb = !excludedPaths.includes(pathname);

  const { id } = useParams();
  const product = useSelector((state: any) =>
    state.products.items.find((p: any) => p.id == Number(id))
  );

  const breadcrumbItems = generateBreadcrumbs(pathname, product);

  return (
    <>
      <Header />
      {shouldShowBreadcrumb && <Breadcrumb items={breadcrumbItems} />}
      <Outlet />
      <Footer />
    </>
  );
}
