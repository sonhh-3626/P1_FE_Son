import Header from "../components/admin/header/Header";
import Footer from "../components/admin/footer/Footer";
import SideNav from "../components/admin/sidenav/SideNav";
import { Outlet, useLocation, useParams } from "react-router-dom";
import Breadcrumb from "../components/common/Breadcrumb";
import { generateBreadcrumbs } from "../utils/generateBreadcrumbsUtil";
import { useSelector } from "react-redux";

export default function AdminLayout() {
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
    <div className="flex min-h-screen bg-[#F5F4FE] text-gray-700">
      <aside className="w-[260px] fixed top-0 left-0 bottom-0 z-40">
        <SideNav />
      </aside>

      <main className="flex-1 ml-[260px] flex flex-col min-h-screen">
        <Header title="Dashboard" />

        <div className="px-6 py-4 flex-1 overflow-y-auto">
          {shouldShowBreadcrumb && (
            <div className="mb-4">
              <Breadcrumb items={breadcrumbItems} />
            </div>
          )}
          <Outlet />
        </div>

        <Footer />
      </main>
    </div>
  );
}
