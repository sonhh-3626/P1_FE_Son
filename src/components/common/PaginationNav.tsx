import { useTranslation } from "react-i18next";

interface PaginationNavProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function PaginationNav({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationNavProps) {
  const { t } = useTranslation();
  const safeTotalPages = Math.max(1, totalPages);
  const safeCurrentPage = Math.min(Math.max(1, currentPage), safeTotalPages);

  const pageNumbers = Array.from({ length: safeTotalPages }, (_, i) => i + 1);

  return (
    <div className="flex items-center justify-center space-x-2 mt-4">
      <button
        onClick={() => onPageChange(safeCurrentPage - 1)}
        disabled={safeCurrentPage === 1}
        className="px-3 py-1 border rounded-md disabled:opacity-50"
      >
        {t("pagination_previous")}
      </button>
      {pageNumbers.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`px-3 py-1 border rounded-md ${
            safeCurrentPage === page ? 'bg-blue-500 text-white' : 'bg-white text-gray-700'
          }`}
        >
          {page}
        </button>
      ))}
      <button
        onClick={() => onPageChange(safeCurrentPage + 1)}
        disabled={safeCurrentPage === safeTotalPages}
        className="px-3 py-1 border rounded-md disabled:opacity-50"
      >
        {t("pagination_next")}
      </button>
    </div>
  );
}
