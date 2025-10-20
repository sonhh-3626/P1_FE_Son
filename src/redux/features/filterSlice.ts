import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface FilterState {
  selectedFilters: string[];
  currentSort: string;
  currentPage: number;
  itemsPerPage: number;
  inStock: boolean;
  onSale: boolean;
  searchTerm: string;
}

const initialState: FilterState = {
  selectedFilters: [],
  currentSort: 'latest',
  currentPage: 1,
  itemsPerPage: 10,
  inStock: false,
  onSale: false,
  searchTerm: '',
};

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setFilters: (state, action: PayloadAction<string[]>) => {
      state.selectedFilters = action.payload;
    },
    addFilter: (state, action: PayloadAction<string>) => {
      if (!state.selectedFilters.includes(action.payload)) {
        state.selectedFilters.push(action.payload);
      }
    },
    removeFilter: (state, action: PayloadAction<string>) => {
      state.selectedFilters = state.selectedFilters.filter(
        (filter) => filter !== action.payload
      );
    },
    clearFilters: (state) => {
      state.selectedFilters = [];
    },
    setCurrentSort: (state, action: PayloadAction<string>) => {
      state.currentSort = action.payload;
    },
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
    setItemsPerPage: (state, action: PayloadAction<number>) => {
      state.itemsPerPage = action.payload;
    },
    resetFilterState: (state) => {
      state.selectedFilters = [];
      state.currentSort = 'latest';
      state.currentPage = 1;
      state.itemsPerPage = 10;
      state.inStock = false;
      state.onSale = false;
    },
    setInStock: (state, action: PayloadAction<boolean>) => {
      state.inStock = action.payload;
    },
    setOnSale: (state, action: PayloadAction<boolean>) => {
      state.onSale = action.payload;
    },
    setSearchTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload;
    },
  },
});

export const {
  setFilters,
  addFilter,
  removeFilter,
  clearFilters,
  setCurrentSort,
  setCurrentPage,
  setItemsPerPage,
  resetFilterState,
  setInStock,
  setOnSale,
  setSearchTerm,
} = filterSlice.actions;

export default filterSlice.reducer;
