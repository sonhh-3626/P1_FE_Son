import { useMemo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { type RootState, type AppDispatch } from '../redux/store';
import { setCurrentPage } from '../redux/features/filterSlice';
import { useSortingState } from './useSortingState';
import { usePaginationState } from './usePaginationState';
import { type Product } from '../types/Product';
import { useFilterState } from './useFilterState';
import { useQueryParamsSync } from './useQueryParamsSync';

const DEFAULT_ITEMS_PER_PAGE = 20;

export const useProductData = (searchTerm: string) => {
    const dispatch = useDispatch<AppDispatch>();
    const productsFromStore: Product[] = useSelector((state: RootState) => state.products.items as Product[]);

    const { selectedFilters, inStock, onSale } = useFilterState();
    const { currentSort } = useSortingState();
    const { currentPage, itemsPerPage } = usePaginationState();

    const sortedAndFilteredProducts = useMemo(() => {
        let products = [...productsFromStore];

        const activeFilters = selectedFilters.reduce((acc, filter) => {
            const [key, value] = filter.split(':');
            if (key && value) {
                if (!acc[key]) acc[key] = [];
                acc[key].push(value);
            }
            return acc;
        }, {} as Record<string, string[]>);

        products = products.filter(product => {
            if (activeFilters.category?.length && !activeFilters.category.includes(product.category)) {
                return false;
            }
            if (activeFilters.type?.length && !activeFilters.type.includes(product.type)) {
                return false;
            }
            if (activeFilters.price?.length) {
                const matchesPrice = activeFilters.price.some(priceRange => {
                    const [min, max] = priceRange.split('-').map(Number);
                    return product.price >= min && product.price <= max;
                });
                if (!matchesPrice) {
                    return false;
                }
            }
            if (inStock && !product.inStock) {
                return false;
            }
            if (onSale && !product.onSale) {
                return false;
            }
            if (searchTerm && !product.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                return false;
            }
            return true;
        });

        switch (currentSort) {
            case 'latest':
                products.sort((a, b) => b.id - a.id);
                break;
            case 'price-asc':
                products.sort((a, b) => a.price - b.price);
                break;
            case 'price-desc':
                products.sort((a, b) => b.price - a.price);
                break;
            case 'name-asc':
                products.sort((a, b) => a.name.localeCompare(b.name));
                break;
            case 'name-desc':
                products.sort((a, b) => b.name.localeCompare(a.name));
                break;
            default:
                break;
        }

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
