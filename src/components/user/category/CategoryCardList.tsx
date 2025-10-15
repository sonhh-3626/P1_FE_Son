import CategoryCard from "./CategoryCard";
import { useState, useEffect } from 'react';
import { categories } from "../../../constants/categories";
import { getVisibleCardCount } from "../../../utils/responsiveUtils";

interface CategoryCardListProps {
  onCategorySelect: (categoryName: string) => void;
}

export default function CategoryCardList({ onCategorySelect }: CategoryCardListProps) {
  const [visibleCardCount, setVisibleCardCount] = useState(2);

  useEffect(() => {
    const handleResize = () => {
      setVisibleCardCount(getVisibleCardCount(window.innerWidth));
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7 xl:grid-cols-9 border-b border-gray-200 overflow-hidden">
        {categories.slice(0, visibleCardCount).map((category) => (
          <CategoryCard
            key={category.id}
            imgUrl={category.imgUrl}
            title={category.name}
            pathTo={category.pathTo}
            onClick={onCategorySelect}
          />
        ))}
      </div>
    </div>
  );
}
