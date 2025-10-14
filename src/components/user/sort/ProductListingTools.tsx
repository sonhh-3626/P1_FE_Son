import { useState } from 'react';
import ResultSummary from '../../../components/user/sort/ResultSummary';
import SortingControl from '../../../components/user/sort/SortingControl';
import ViewModeToggle from '../../../components/user/sort/ViewModeToggle';
import PaginationOption from '../../../components/user/sort/PaginationOptions';

interface ProductListingToolsProps {
  totalResults: number;
  currentSort: string;
  onSortChange: (sortValue: string) => void;
  itemsPerPage: number;
  onItemsPerPageChange: (itemsPerPage: number) => void;
  currentPage: number;
}

export default function ProductListingTools ({
  totalResults,
  currentSort,
  onSortChange,
  itemsPerPage,
  onItemsPerPageChange,
  currentPage,
} : ProductListingToolsProps) {
  const [currentView, setCurrentView] = useState<'grid' | 'list'>('grid');

  const handleSortChange = (sortValue: string) => {
    onSortChange(sortValue);
  };

  const handleViewChange = (viewMode: 'grid' | 'list') => {
    setCurrentView(viewMode);
  };

  const startIndex = (currentPage - 1) * itemsPerPage + 1;
  const endIndex = Math.min(currentPage * itemsPerPage, totalResults);

  return (
    <div className="bg-[#F3F4F6] py-2 px-4 rounded-lg flex items-center justify-between">
      <ResultSummary
        startIndex={startIndex}
        endIndex={endIndex}
        totalResults={totalResults}
      />

      <div className="flex items-center space-x-4">
        <SortingControl
          onSortChange={handleSortChange}
          currentSort={currentSort}
        />

        <PaginationOption
          itemsPerPage={itemsPerPage}
          onItemsPerPageChange={onItemsPerPageChange}
        />

        <ViewModeToggle
          currentView={currentView}
          onViewChange={handleViewChange}
        />
      </div>
    </div>
  );
};
