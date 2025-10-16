import Header from "../components/user/header/Header";
import Footer from "../components/user/footer/Footer";
import { Outlet, useLocation } from "react-router-dom";
import Breadcrumb from "../components/common/Breadcrumb";

interface BreadcrumbItem {
  label: string;
  path: string;
}

const generateBreadcrumbs = (pathname: string): BreadcrumbItem[] => {
  const pathnames = pathname.split('/').filter((x) => x);
  const breadcrumbs: BreadcrumbItem[] = [
    { label: "Home", path: "/" },
  ];

  for (let i = 0; i < pathnames.length; i++) {
    const path = `/${pathnames.slice(0, i + 1).join('/')}`;
    breadcrumbs.push({ label: pathnames[i].charAt(0).toUpperCase() + pathnames[i].slice(1), path });
  }
  return breadcrumbs;
};

export default function UserLayout() {
  const location = useLocation();
  const { pathname } = location;

  const excludedPaths = ["/"];
  const shouldShowBreadcrumb = !excludedPaths.includes(pathname);

  const breadcrumbItems = generateBreadcrumbs(pathname);

  return (
    <>
      <Header />
      {shouldShowBreadcrumb && <Breadcrumb items={breadcrumbItems} />}
      <Outlet />
      <Footer />
    </>
  );
}
