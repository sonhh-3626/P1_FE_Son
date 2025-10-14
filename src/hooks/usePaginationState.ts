import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { type RootState, type AppDispatch } from '../redux/store';
import { setCurrentPage, setItemsPerPage } from '../redux/features/filterSlice';

export const usePaginationState = () => {
    const dispatch = useDispatch<AppDispatch>();
    const currentPage = useSelector((state: RootState) => state.filters.currentPage);
    const itemsPerPage = useSelector((state: RootState) => state.filters.itemsPerPage);

    const handlePageChange = useCallback((page: number) => {
        dispatch(setCurrentPage(page));
    }, [dispatch]);

    const handleItemsPerPageChange = useCallback((limit: number) => {
        dispatch(setItemsPerPage(limit));
    }, [dispatch]);

    return {
        currentPage,
        itemsPerPage,
        handlePageChange,
        handleItemsPerPageChange,
    };
};
