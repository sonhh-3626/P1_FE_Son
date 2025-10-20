import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#F7F6FF] text-gray-600 text-sm py-4 px-8 flex flex-col md:flex-row items-center justify-between border-t border-gray-200">
      <div className="text-center md:text-left mb-2 md:mb-0">
        © {currentYear}{" "}
        <span className="font-medium text-gray-800">{t("footer.shopStore")}</span> —{" "}
        <Link
          to="/about"
          className="text-purple-600 hover:text-purple-700 transition"
        >
          {t("footer.blockRiseThemes")}
        </Link>
      </div>

      {/* RIGHT: Links */}
      <div className="flex gap-4 text-sm">
        <Link to="/licenses" className="hover:text-purple-700 transition">
          {t("footer.licenses")}
        </Link>
        <Link to="/changelog" className="hover:text-purple-700 transition">
          {t("footer.changeLog")}
        </Link>
        <Link to="/help" className="hover:text-purple-700 transition">
          {t("footer.getHelp")}
        </Link>
      </div>
    </footer>
  );
}
