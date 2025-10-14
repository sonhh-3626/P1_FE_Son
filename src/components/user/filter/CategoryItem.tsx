import type { Category } from "../../../constants/categories";

interface CategoryItemProps {
  category: Category;
  level: number;
  selectedCategories: string[];
  onCategoryToggle: (categoryId: string, isChecked: boolean) => void;
  onSubcategoryToggle: (categoryId: string) => void;
  expandedCategories: Set<string>;
}

export default function CategoryItem({
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

  const handleToggleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (hasSubcategories && category.id) {
      onSubcategoryToggle(category.id);
    }
  };

  return (
    <div style={{ paddingLeft: `${level * 16}px` }}>
      <div className="flex items-center mb-2">
        <input
          id={`category-${category.id}`}
          type="checkbox"
          checked={isChecked}
          onChange={(e) => onCategoryToggle(category.id, e.target.checked)}
          className={`form-checkbox h-4 w-4 rounded focus:ring-blue-500 ${isChecked ? 'text-[#634C9F]' : 'text-blue-600'}`}
        />
        <label htmlFor={`category-${category.id}`} className={`ml-2 text-sm flex-grow ${isChecked ? 'text-[#634C9F]' : 'text-gray-700'}`}>
          {category.name}
        </label>
        {hasSubcategories && (
          <span
            className="ml-auto text-gray-500 cursor-pointer"
            onClick={handleToggleClick}
          >
            {isExpanded ? '-' : '+'}
          </span>
        )}
      </div>
      {hasSubcategories && isExpanded && (
        <div className="ml-4">
          {category.subcategories?.map((subCategory: Category) => (
            <CategoryItem
              key={subCategory.id}
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
};
