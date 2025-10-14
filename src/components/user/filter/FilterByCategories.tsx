import { useState, useCallback, useEffect } from 'react';
import CategoryItem from './CategoryItem';
import { type Category } from '../../../constants/categories';

interface FilterByCategoriesProps {
  categories: Category[];
  onCategoryChange: (selectedCategories: string[]) => void;
}

const getAllCategoryIds = (category: Category): string[] => {
  let ids: string[] = [];
  if (category.id) {
    ids.push(category.id);
  }
  if (category.subcategories) {
    category.subcategories.forEach((sub) => {
      ids = ids.concat(getAllCategoryIds(sub));
    });
  }
  return ids;
};


export default function FilterByCategories({ categories, onCategoryChange }: FilterByCategoriesProps) {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(new Set());

  const handleCategoryToggle = useCallback((categoryId: string, isChecked: boolean) => {
    setSelectedCategories((prevSelected) => {
      const newSelected = new Set(prevSelected);
      const formattedCategoryId = `category:${categoryId}`;

      if (isChecked) {
        newSelected.add(formattedCategoryId);
      } else {
        newSelected.delete(formattedCategoryId);
      }

      return Array.from(newSelected);
    });
  }, []);

  const handleSubcategoryToggle = useCallback((categoryId: string) => {
    setExpandedCategories((prev) => {
      const newExpanded = new Set(prev);
      if (newExpanded.has(categoryId)) {
        newExpanded.delete(categoryId);
      } else {
        newExpanded.add(categoryId);
      }
      return newExpanded;
    });
  }, []);

  useEffect(() => {
    onCategoryChange(selectedCategories);
  }, [selectedCategories, onCategoryChange]);

  return (
    <div className="pr-5 py-4 border-b border-gray-200">
      <div className="text-lg font-semibold mb-3">Product Categories</div>
      {categories.map((category) => (
        <CategoryItem
          key={category.id}
          category={category}
          level={0}
          selectedCategories={selectedCategories}
          onCategoryToggle={handleCategoryToggle}
          onSubcategoryToggle={handleSubcategoryToggle}
          expandedCategories={expandedCategories}
        />
      ))}
    </div>
  );
}
