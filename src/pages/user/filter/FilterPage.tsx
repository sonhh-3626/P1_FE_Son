import Filter from '../../../components/user/filter/Filter';
import ProductListingTools from '../../../components/user/sort/ProductListingTools';
import SelectedFilters from '../../../components/user/filter/SelectedFilters';
import PaginationNav from '../../../components/common/PaginationNav';
import FilteredProductList from './FilteredProductList';
import { useFilterState } from '../../../hooks/useFilterState';
import { useSortingState } from '../../../hooks/useSortingState';
import { usePaginationState } from '../../../hooks/usePaginationState';
import { useProductData } from '../../../hooks/useProductData';
import { useSelector } from 'react-redux';
import type { RootState } from '../../../redux/store';

export default function FilterPage() {

  const filter = useFilterState();
  const sort = useSortingState();
  const pagination = usePaginationState();
  const searchTerm = useSelector((state: RootState) => state.filters.searchTerm);

  const {
    paginatedProducts,
    totalResults,
    totalPages,
    finalPage,
  } = useProductData(searchTerm);

  return (
    <div className="mx-[15%] p-4">
      <div className="flex">
        <div className="w-1/4 pr-4">
          <Filter
            onFilterChange={filter.handleFilterChange} resetTrigger={false} />
        </div>

        <div className="w-3/4">
          <SelectedFilters
            selectedFilters={filter.selectedFilters}
            onClearFilters={filter.handleClearFilters}
            onRemoveFilter={filter.handleRemoveFilter}
          />

          <ProductListingTools
            totalResults={totalResults}
            currentSort={sort.currentSort}
            onSortChange={sort.handleSortChange}
            itemsPerPage={pagination.itemsPerPage}
            onItemsPerPageChange={pagination.handleItemsPerPageChange}
            currentPage={finalPage}
          />

          <FilteredProductList paginatedProducts={paginatedProducts} />

          <PaginationNav
              currentPage={finalPage}
              totalPages={totalPages}
              onPageChange={pagination.handlePageChange}
            />
        </div>
      </div>
    </div>
  );
}
