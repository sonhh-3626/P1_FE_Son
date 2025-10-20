import { useTranslation } from "react-i18next";
import { ImStatsBars2 } from "react-icons/im";
import { MdReceipt, MdOutlineLocalShipping, MdTableRows } from "react-icons/md";
import { IoWalletOutline } from "react-icons/io5";
import { FaUsers, FaRegFileAlt, FaCog, FaComments } from "react-icons/fa";
import { FaRegRectangleList } from "react-icons/fa6";
import { RiMailLine, RiUser3Line, RiErrorWarningLine } from "react-icons/ri";

export interface NavItemData {
  id: string;
  label: string;
  icon?: React.ReactNode;
  type: "item";
  path?: string;
}

export interface NavToggleData {
  id: string;
  label: string;
  icon: React.ReactNode;
  type: "toggle";
  items: NavItemData[];
}

export type NavSection = {
  title?: string;
  items: (NavItemData | NavToggleData)[];
};

export const useNavConfig = (): NavSection[] => {
  const { t } = useTranslation();

  return [
    {
      title: t("sideNav.ecommerceSection"),
      items: [
        { id: "dashboard", label: t("sideNav.dashboard"), icon: <ImStatsBars2 />, type: "item", path: "/dashboard" },
        {
          id: "orders",
          label: t("sideNav.orders"),
          icon: <MdReceipt />,
          type: "toggle",
          items: [
            { id: "all-orders", label: t("sideNav.allOrders"), path: "/orders", type: "item" },
            { id: "pending-orders", label: t("sideNav.pendingOrders"), path: "/orders/pending", type: "item" },
            { id: "completed-orders", label: t("sideNav.completedOrders"), path: "/orders/completed", type: "item" },
          ],
        },
        {
          id: "products",
          label: t("sideNav.products"),
          icon: <MdOutlineLocalShipping />,
          type: "toggle",
          items: [
            { id: "all-products", label: t("sideNav.allProducts"), path: "/products", type: "item" },
            { id: "add-new-product", label: t("sideNav.addNewProduct"), path: "/products/new", type: "item" },
          ],
        },
        {
          id: "billing",
          label: t("sideNav.billing"),
          icon: <IoWalletOutline />,
          type: "toggle",
          items: [
            { id: "all-bills", label: t("sideNav.allBills"), path: "/billing", type: "item" },
            { id: "add-new-bill", label: t("sideNav.addNewBill"), path: "/billing/new", type: "item" },
          ],
        },
        { id: "customers", label: t("sideNav.customers"), icon: <FaUsers />, type: "item", path: "/customers" },
        {
          id: "invoices",
          label: t("sideNav.invoices"),
          icon: <FaRegRectangleList />,
          type: "toggle",
          items: [
            { id: "all-invoices", label: t("sideNav.allInvoices"), path: "/invoices", type: "item" },
            { id: "new-invoice", label: t("sideNav.newInvoice"), path: "/invoices/new", type: "item" },
          ],
        },
      ],
    },
    {
      title: t("sideNav.appSection"),
      items: [
        { id: "chats", label: t("sideNav.chats"), icon: <FaComments />, type: "item", path: "/chats" },
        {
          id: "emails",
          label: t("sideNav.emails"),
          icon: <RiMailLine />,
          type: "toggle",
          items: [
            { id: "inbox", label: t("sideNav.inbox"), path: "/emails/inbox", type: "item" },
            { id: "sent-emails", label: t("sideNav.sentEmails"), path: "/emails/sent", type: "item" },
            { id: "drafts", label: t("sideNav.drafts"), path: "/emails/drafts", type: "item" },
          ],
        },
        {
          id: "todo-apps",
          label: t("sideNav.todoApps"),
          icon: <FaCog />,
          type: "toggle",
          items: [
            { id: "tasks", label: t("sideNav.tasks"), path: "/todos/tasks", type: "item" },
            { id: "projects", label: t("sideNav.projects"), path: "/todos/projects", type: "item" },
          ],
        },
      ],
    },
    {
      title: t("sideNav.pagesSection"),
      items: [
        {
          id: "profiles",
          label: t("sideNav.profiles"),
          icon: <RiUser3Line />,
          type: "toggle",
          items: [
            { id: "view-profile", label: t("sideNav.viewProfile"), path: "/profiles/view", type: "item" },
            { id: "edit-profile", label: t("sideNav.editProfile"), path: "/profiles/edit", type: "item" },
          ],
        },
        {
          id: "users",
          label: t("sideNav.users"),
          icon: <FaUsers />,
          type: "toggle",
          items: [
            { id: "user-list", label: t("sideNav.userList"), path: "/users/list", type: "item" },
            { id: "add-user", label: t("sideNav.addUser"), path: "/users/add", type: "item" },
          ],
        },
        {
          id: "authentication",
          label: t("sideNav.authentication"),
          icon: <FaRegFileAlt />,
          type: "toggle",
          items: [
            { id: "login", label: t("sideNav.login"), path: "/auth/login", type: "item" },
            { id: "register", label: t("sideNav.register"), path: "/auth/register", type: "item" },
          ],
        },
        {
          id: "error-pages",
          label: t("sideNav.errorPages"),
          icon: <RiErrorWarningLine />,
          type: "toggle",
          items: [
            { id: "404", label: "404", path: "/404", type: "item" },
            { id: "500", label: "500", path: "/500", type: "item" },
          ],
        },
        { id: "settings", label: t("sideNav.settings"), icon: <FaCog />, type: "item", path: "/settings" },
        { id: "pricing-table", label: t("sideNav.pricingTable"), icon: <MdTableRows />, type: "item", path: "/pricing" },
      ],
    },
  ];
};
