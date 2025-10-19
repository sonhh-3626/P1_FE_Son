import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { type RootState, type AppDispatch } from '../redux/store';
import { setCurrentSort } from '../redux/features/filterSlice';

export const useSortingState = () => {
    const dispatch = useDispatch<AppDispatch>();
    const currentSort = useSelector((state: RootState) => state.filters.currentSort);

    const handleSortChange = useCallback((sortOption: string) => {
        dispatch(setCurrentSort(sortOption));
    }, [dispatch]);

    return {
        currentSort,
        handleSortChange,
    };
};
