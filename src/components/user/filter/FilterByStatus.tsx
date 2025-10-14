import { useDispatch, useSelector } from 'react-redux';
import { type RootState, type AppDispatch } from '../../../redux/store';
import { setInStock, setOnSale } from '../../../redux/features/filterSlice';

export default function FilterByStatus() {
  const dispatch = useDispatch<AppDispatch>();
  const { inStock, onSale } = useSelector((state: RootState) => state.filters);

  const handleInStockToggle = () => {
    const newValue = !inStock;
    dispatch(setInStock(newValue));
  };

  const handleOnSaleToggle = () => {
    const newValue = !onSale;
    dispatch(setOnSale(newValue));
  };

  return (
    <div className="pr-5 py-5 border-b border-gray-200">
      <div className="text-lg font-semibold mb-3">Product Status</div>

      <div className="flex items-center mb-2">
        <input
          id="status-in-stock"
          type="checkbox"
          checked={inStock}
          onChange={handleInStockToggle}
          role="switch"
          aria-checked={inStock}
          aria-label="Filter products by In Stock status"
          className="form-checkbox h-4 w-4 text-blue-600 rounded focus:ring-blue-500 transition duration-150 ease-in-out"
        />
        <label htmlFor="status-in-stock" className="ml-2 text-sm text-gray-700 cursor-pointer">
          In Stock
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
          aria-label="Filter products by On Sale status"
          className="form-checkbox h-4 w-4 text-blue-600 rounded focus:ring-blue-500 transition duration-150 ease-in-out"
        />
        <label htmlFor="status-on-sale" className="ml-2 text-sm text-gray-700 cursor-pointer">
          On Sale
        </label>
      </div>
    </div>
  );
}
