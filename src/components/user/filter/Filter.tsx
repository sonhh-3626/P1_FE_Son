import { useState, useEffect } from 'react';
import FilterTitle from './FilterTitle';
import PriceFilter from './PriceFilter';
import FilterByCategories from './FilterByCategories';
import FilterByStatus from './FilterByStatus';
import { categories } from '../../../constants/categories';

interface FilterProps {
  onFilterChange: (filters: string[]) => void;
  resetTrigger: boolean;
}

export default function Filter({ onFilterChange, resetTrigger }: FilterProps) {
  const [selectedPriceRange, setSelectedPriceRange] = useState({ min: 0, max: 30 });
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedStatus, setSelectedStatus] = useState<string[]>([]);

  useEffect(() => {
    const allSelectedFilters: string[] = [];
    if (selectedPriceRange.min !== 0 || selectedPriceRange.max !== 30) {
      allSelectedFilters.push(`price:${selectedPriceRange.min}-${selectedPriceRange.max}`);
    }
    allSelectedFilters.push(...selectedCategories);
    allSelectedFilters.push(...selectedStatus);
    onFilterChange(allSelectedFilters);
  }, [selectedCategories, selectedStatus, selectedPriceRange, onFilterChange]);

  useEffect(() => {
    setSelectedPriceRange({ min: 0, max: 30 });
    setSelectedCategories([]);
    setSelectedStatus([]);
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
      <FilterByStatus />
    </div>
  );
}
