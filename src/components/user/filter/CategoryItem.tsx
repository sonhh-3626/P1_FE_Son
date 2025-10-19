import React, { useMemo, useCallback } from 'react';
import type { Category } from "../../../constants/categories";

interface CategoryItemProps {
  category: Category;
  level: number;
  selectedCategories: string[];
  onCategoryToggle: (categoryId: string, isChecked: boolean) => void;
  onSubcategoryToggle: (categoryId: string) => void;
  expandedCategories: Set<string>;
}

function CategoryItem({
  category,
  level,
  selectedCategories,
  onCategoryToggle,
  onSubcategoryToggle,
  expandedCategories,
}: CategoryItemProps) {
  const hasSubcategories = category.subcategories && category.subcategories.length > 0;
  const isExpanded = expandedCategories.has(category.id || '');
  const isChecked = selectedCategories.includes(`category:${category.id}` || '');

  const subcategoriesToRender = useMemo(() => {
    if (!isExpanded || !hasSubcategories) return null;
    return category.subcategories;
  }, [isExpanded, hasSubcategories, category.subcategories]);

  const handleToggleClick = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    if (hasSubcategories && category.id) {
      onSubcategoryToggle(category.id);
    }
  }, [hasSubcategories, category.id, onSubcategoryToggle]);

  const handleCheckboxChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    onCategoryToggle(category.id, e.target.checked);
  }, [category.id, onCategoryToggle]);

  return (
    <div style={{ paddingLeft: `${level * 16}px` }}>
      <div className="flex items-center mb-2">
        <input
          id={`category-${category.id}`}
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
          className={`form-checkbox h-4 w-4 rounded focus:ring-blue-500 ${isChecked ? 'text-[#634C9F]' : 'text-blue-600'}`}
        />
        <label
          htmlFor={`category-${category.id}`}
          className={`ml-2 text-sm flex-grow cursor-pointer ${isChecked ? 'text-[#634C9F]' : 'text-gray-700'}`}
        >
          {category.name}
        </label>
        {hasSubcategories && (
          <span
            className="ml-auto text-gray-500 cursor-pointer select-none px-2"
            onClick={handleToggleClick}
            role="button"
            aria-expanded={isExpanded}
            aria-label={isExpanded ? 'Collapse' : 'Expand'}
          >
            {isExpanded ? '-' : '+'}
          </span>
        )}
      </div>

      {subcategoriesToRender && (
        <div className="ml-4">
          {subcategoriesToRender.map((subCategory: Category) => (
            <CategoryItem
              key={`${category.id}-${subCategory.id}`}
              category={subCategory}
              level={level + 1}
              selectedCategories={selectedCategories}
              onCategoryToggle={onCategoryToggle}
              onSubcategoryToggle={onSubcategoryToggle}
              expandedCategories={expandedCategories}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default React.memo(CategoryItem, (prevProps, nextProps) => {
  const prevExpanded = prevProps.expandedCategories.has(prevProps.category.id || '');
  const nextExpanded = nextProps.expandedCategories.has(nextProps.category.id || '');
  const prevChecked = prevProps.selectedCategories.includes(`category:${prevProps.category.id}`);
  const nextChecked = nextProps.selectedCategories.includes(`category:${nextProps.category.id}`);

  return (
    prevProps.category.id === nextProps.category.id &&
    prevProps.level === nextProps.level &&
    prevExpanded === nextExpanded &&
    prevChecked === nextChecked &&
    (!prevExpanded || prevProps.category.subcategories === nextProps.category.subcategories)
  );
});
