import { createSlice, createAsyncThunk, type PayloadAction } from '@reduxjs/toolkit';
import { type Order, OrderSortOption } from '../../types/Order';
import { orderService } from '../../services/orderService';

interface OrderState {
  orders: Order[];
  loading: boolean;
  error: string | null;
  sortOption: OrderSortOption;
  currentPage: number;
  itemsPerPage: number;
  totalPages: number;
}

const initialState: OrderState = {
  orders: [],
  loading: false,
  error: null,
  sortOption: OrderSortOption.DATE_DESC,
  currentPage: 1,
  itemsPerPage: 10,
  totalPages: 1,
};

export const fetchOrders = createAsyncThunk(
  'order/fetchOrders',
  async ({ sortOption, currentPage, itemsPerPage }: { sortOption: OrderSortOption; currentPage: number; itemsPerPage: number }, { rejectWithValue }) => {
    try {
      const response = await orderService.fetchOrders(sortOption, currentPage, itemsPerPage);
      return response;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    setSortOption: (state, action: PayloadAction<OrderSortOption>) => {
      state.sortOption = action.payload;
      state.currentPage = 1;
    },
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
    setItemsPerPage: (state, action: PayloadAction<number>) => {
      state.itemsPerPage = action.payload;
      state.currentPage = 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrders.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchOrders.fulfilled, (state, action: PayloadAction<{ data: Order[]; totalPages: number }>) => {
        state.loading = false;
        state.orders = action.payload.data;
        state.totalPages = action.payload.totalPages;
      })
      .addCase(fetchOrders.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { setSortOption, setCurrentPage, setItemsPerPage } = orderSlice.actions;
export default orderSlice.reducer;
