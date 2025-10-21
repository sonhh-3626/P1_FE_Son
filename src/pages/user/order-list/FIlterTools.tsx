import { useState } from "react";
import { useTranslation } from "react-i18next";
import DropdownToggle from "../../../components/common/DropdownToggle";
import { FaSearch } from "react-icons/fa";
import { OrderSortOption } from "../../../types/Order";

interface FilterToolsProps {
  onSearch: (searchTerm: string) => void;
  onSort: (sortOption: OrderSortOption) => void;
  currentSort: OrderSortOption;
  onItemsPerPageChange: (items: number) => void;
  currentItemPerPage: number;
}

export default function FilterTools({ onSearch, onSort, currentSort, onItemsPerPageChange, currentItemPerPage }: FilterToolsProps) {
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState("");

  const sortByOptions = [
    { value: OrderSortOption.DATE_DESC, label: t("sort.date_desc") },
    { value: OrderSortOption.DATE_ASC, label: t("sort.date_asc") },
    { value: OrderSortOption.TOTAL_DESC, label: t("sort.total_desc") },
    { value: OrderSortOption.TOTAL_ASC, label: t("sort.total_asc") },
  ];

  const itemsPerPageOptions = [
    { value: 10, label: "10" },
    { value: 20, label: "20" },
    { value: 50, label: "50" },
  ];

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    onSearch(e.target.value);
  };

  const handleSortChange = (option: OrderSortOption) => {
    onSort(option);
  };

  const handleItemsPerPage = (items: number) => {
    onItemsPerPageChange(items);
  };

  return (
    <div className="flex items-center justify-between mb-6 p-4 bg-white rounded-lg shadow">
      <div className="flex items-center space-x-4">
        <span className="text-gray-700 font-medium">{t('filterTools.allOrders')}</span>
        <DropdownToggle label={t("sort.sortBy")}>
          {sortByOptions.map((option) => (
            <li key={option.value}>
              <a
                href="#"
                className={`block px-4 py-2 ${currentSort === option.value ? 'bg-gray-200' : 'hover:bg-gray-100'} dark:hover:bg-gray-600 dark:hover:text-white`}
                onClick={() => handleSortChange(option.value)}
              >
                {option.label}
              </a>
            </li>
          ))}
        </DropdownToggle>
        <DropdownToggle label={t('filterTools.itemsOnPage')}>
          {itemsPerPageOptions.map((option) => (
            <li key={option.value}>
              <a
                href="#"
                className={`block px-4 py-2 ${currentItemPerPage === option.value ? 'bg-gray-200' : 'hover:bg-gray-100'} dark:hover:bg-gray-600 dark:hover:text-white`}
                onClick={() => handleItemsPerPage(option.value)}
              >
                {option.label}
              </a>
            </li>
          ))}
        </DropdownToggle>
        <div className="relative">
          <input
            type="text"
            id="search-orders"
            className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder={t('filterTools.search')}
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <FaSearch className="text-gray-400"/>
          </div>
        </div>
      </div>
      <button className="bg-[#634C9F] text-white px-4 py-2 rounded-md text">
        {t('filterTools.actions')} <span className="ml-1">▼</span>
      </button>
    </div>
  );
}
