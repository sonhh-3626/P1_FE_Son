import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { type RootState, type AppDispatch } from '../redux/store';
import { setFilters, removeFilter, clearFilters, setInStock, setOnSale } from '../redux/features/filterSlice';

export const useFilterState = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { selectedFilters, inStock, onSale } = useSelector((state: RootState) => state.filters);

    const handleFilterChange = useCallback((newFilters: string[]) => {
        dispatch(setFilters(newFilters));
    }, [dispatch]);

    const handleClearFilters = useCallback(() => {
        dispatch(clearFilters());
    }, [dispatch]);

    const handleRemoveFilter = useCallback((filterToRemove: string) => {
        dispatch(removeFilter(filterToRemove));
    }, [dispatch]);

    const handleInStockChange = useCallback((checked: boolean) => {
        dispatch(setInStock(checked));
    }, [dispatch]);

    const handleOnSaleChange = useCallback((checked: boolean) => {
        dispatch(setOnSale(checked));
    }, [dispatch]);

    return {
        selectedFilters,
        inStock,
        onSale,
        handleFilterChange,
        handleClearFilters,
        handleRemoveFilter,
        handleInStockChange,
        handleOnSaleChange,
    };
};
