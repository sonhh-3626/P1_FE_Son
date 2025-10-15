import { useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { type AppDispatch } from '../redux/store';
import {
    setFilters,
    setCurrentSort,
    setCurrentPage,
    setItemsPerPage,
    setInStock,
    setOnSale,
} from '../redux/features/filterSlice';

const DEFAULT_ITEMS_PER_PAGE = 20;

interface QueryParamsSyncProps {
    selectedFilters: string[];
    currentSort: string;
    finalPage: number;
    itemsPerPage: number;
    inStock: boolean;
    onSale: boolean;
}

export const useQueryParamsSync = ({
    selectedFilters,
    currentSort,
    finalPage,
    itemsPerPage,
    inStock,
    onSale,
}: QueryParamsSyncProps) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const dispatch = useDispatch<AppDispatch>();
    const limit = itemsPerPage || DEFAULT_ITEMS_PER_PAGE;

    useEffect(() => {
        const initialFilters: string[] = [];
        searchParams.forEach((value, key) => {
            if (key !== 'sort' && key !== 'page' && key !== 'limit' && key !== 'inStock' && key !== 'onSale') {
                initialFilters.push(`${key}:${value}`);
            }
        });

        const initialSort = searchParams.get('sort') || 'latest';
        const initialPage = Number(searchParams.get('page')) || 1;
        const initialLimit = Number(searchParams.get('limit')) || DEFAULT_ITEMS_PER_PAGE;
        const initialInStock = searchParams.get('inStock') === 'true';
        const initialOnSale = searchParams.get('onSale') === 'true';

        dispatch(setFilters(initialFilters));
        dispatch(setCurrentSort(initialSort));
        dispatch(setCurrentPage(initialPage));
        dispatch(setItemsPerPage(initialLimit));
        dispatch(setInStock(initialInStock));
        dispatch(setOnSale(initialOnSale));

    }, [dispatch]);

    const updateSearchParams = useCallback(() => {
        const params = new URLSearchParams();

        selectedFilters.forEach(filter => {
            const [key, value] = filter.split(':');
            if (key && value) {
                params.append(key, value);
            }
        });

        if (currentSort !== 'latest') params.set('sort', currentSort);
        if (finalPage !== 1) params.set('page', String(finalPage));
        if (limit !== DEFAULT_ITEMS_PER_PAGE) params.set('limit', String(limit));
        if (inStock) params.set('inStock', 'true');
        if (onSale) params.set('onSale', 'true');

        setSearchParams(params, { replace: true });
    }, [selectedFilters, currentSort, finalPage, limit, inStock, onSale, setSearchParams]);

    useEffect(() => {
        updateSearchParams();
    }, [selectedFilters, currentSort, finalPage, limit, inStock, onSale, updateSearchParams]);
};
