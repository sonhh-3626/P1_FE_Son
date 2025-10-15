import { useTranslation } from 'react-i18next';

interface FilterByStatusProps {
  inStock: boolean;
  onSale: boolean;
  handleInStockToggle: () => void;
  handleOnSaleToggle: () => void;
}

export default function FilterByStatus({
  inStock,
  onSale,
  handleInStockToggle,
  handleOnSaleToggle
} : FilterByStatusProps) {
  const { t } = useTranslation();
  return (
    <div className="pr-5 py-5 border-b border-gray-200">
      <div className="text-lg font-semibold mb-3">{t('filterByStatus.productStatus')}</div>

      <div className="flex items-center mb-2">
        <input
          id="status-in-stock"
          type="checkbox"
          checked={inStock}
          onChange={handleInStockToggle}
          role="switch"
          aria-checked={inStock}
          aria-label={t('filterByStatus.inStock')}
          className="form-checkbox h-4 w-4 text-blue-600 rounded focus:ring-blue-500 transition duration-150 ease-in-out"
        />
        <label htmlFor="status-in-stock" className="ml-2 text-sm text-gray-700 cursor-pointer">
          {t('filterByStatus.inStock')}
        </label>
      </div>

      <div className="flex items-center mb-2">
        <input
          id="status-on-sale"
          type="checkbox"
          checked={onSale}
          onChange={handleOnSaleToggle}
          role="switch"
          aria-checked={onSale}
          aria-label={t('filterByStatus.onSale')}
          className="form-checkbox h-4 w-4 text-blue-600 rounded focus:ring-blue-500 transition duration-150 ease-in-out"
        />
        <label htmlFor="status-on-sale" className="ml-2 text-sm text-gray-700 cursor-pointer">
          {t('filterByStatus.onSale')}
        </label>
      </div>
    </div>
  );
}
