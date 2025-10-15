import { useMemo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { type RootState, type AppDispatch } from '../redux/store';
import { setCurrentPage } from '../redux/features/filterSlice';
import { useSortingState } from './useSortingState';
import { usePaginationState } from './usePaginationState';
import { type Product } from '../types/Product';
import { useFilterState } from './useFilterState';
import { useQueryParamsSync } from './useQueryParamsSync';
import { applyFilters } from '../utils/productFilterUtils';
import { applySorting } from '../utils/productSortUtils';
import { DEFAULT_ITEMS_PER_PAGE } from '../constants/paginationConstants';

export const useProductData = (searchTerm: string) => {
    const dispatch = useDispatch<AppDispatch>();
    const productsFromStore: Product[] = useSelector((state: RootState) => state.products.items as Product[]);

    const { selectedFilters, inStock, onSale } = useFilterState();
    const { currentSort } = useSortingState();
    const { currentPage, itemsPerPage } = usePaginationState();

    const sortedAndFilteredProducts = useMemo(() => {
        let products = [...productsFromStore];

        products = applyFilters(products, selectedFilters, inStock, onSale, searchTerm);
        products = applySorting(products, currentSort);

        return products;
    }, [selectedFilters, currentSort, productsFromStore, inStock, onSale, searchTerm]);

    const totalResults = sortedAndFilteredProducts.length;
    const limit = itemsPerPage || DEFAULT_ITEMS_PER_PAGE;
    const totalPages = Math.ceil(totalResults / limit);

    const finalPage = Math.min(currentPage, totalPages > 0 ? totalPages : 1);

    const paginatedProducts = useMemo(() => {
        const startIndex = (finalPage - 1) * limit;
        const endIndex = startIndex + limit;
        return sortedAndFilteredProducts.slice(startIndex, endIndex);
    }, [finalPage, limit, sortedAndFilteredProducts]);

    useEffect(() => {
        if (currentPage > totalPages && totalPages > 0) {
            dispatch(setCurrentPage(totalPages));
        }
    }, [currentPage, totalPages, dispatch]);

    useQueryParamsSync({
        selectedFilters,
        currentSort,
        finalPage,
        itemsPerPage: limit,
        inStock,
        onSale,
    });

    return {
        paginatedProducts,
        totalResults,
        totalPages,
        finalPage,
        currentSort,
        currentPage,
        itemsPerPage: limit,
        selectedFilters,
        inStock,
        onSale,
    };
};
