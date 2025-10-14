import { useState, useEffect } from 'react';
import FilterTitle from './FilterTitle';
import PriceFilter from './PriceFilter';
import FilterByCategories from './FilterByCategories';
import FilterByStatus from './FilterByStatus';
import { categories } from '../../../constants/categories';
import { setInStock, setOnSale } from '../../../redux/features/filterSlice';
import { useDispatch, useSelector } from 'react-redux';
import { DEFAULT_MIN_PRICE, DEFAULT_MAX_PRICE } from '../../../constants/priceConstants';
import type { AppDispatch, RootState } from '../../../redux/store';

interface FilterProps {
  onFilterChange: (filters: string[]) => void;
  resetTrigger: boolean;
}

export default function Filter({ onFilterChange, resetTrigger }: FilterProps) {
  const dispatch = useDispatch<AppDispatch>();

  const [selectedPriceRange, setSelectedPriceRange] = useState({ min: DEFAULT_MIN_PRICE, max: DEFAULT_MAX_PRICE });
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const { inStock, onSale } = useSelector((state: RootState) => state.filters);

  const handleInStockToggle = () => {
    dispatch(setInStock(!inStock));
  };

  const handleOnSaleToggle = () => {
    dispatch(setOnSale(!onSale));
  };

  useEffect(() => {
    const allSelectedFilters: string[] = [];
    if (selectedPriceRange.min !== DEFAULT_MIN_PRICE || selectedPriceRange.max !== DEFAULT_MAX_PRICE) {
      allSelectedFilters.push(`price:${selectedPriceRange.min}-${selectedPriceRange.max}`);
    }
    allSelectedFilters.push(...selectedCategories);
    onFilterChange(allSelectedFilters);
  }, [selectedCategories, selectedPriceRange, onFilterChange]);

  useEffect(() => {
    setSelectedPriceRange({ min: DEFAULT_MIN_PRICE, max: DEFAULT_MAX_PRICE });
    setSelectedCategories([]);
  }, [resetTrigger]);

  const handlePriceChange = (min: number, max: number) => {
    setSelectedPriceRange({ min, max });
  };

  const handleCategoriesChange = (categories: string[]) => {
    setSelectedCategories(categories);
  };

  return (
    <div>
      <FilterTitle title="Filters" />
      <PriceFilter onApplyFilter={handlePriceChange} />
      <FilterByCategories
        categories={categories}
        onCategoryChange={handleCategoriesChange}
      />
      <FilterByStatus
        inStock={inStock}
        onSale={onSale}
        handleInStockToggle={handleInStockToggle}
        handleOnSaleToggle={handleOnSaleToggle} />
    </div>
  );
}
