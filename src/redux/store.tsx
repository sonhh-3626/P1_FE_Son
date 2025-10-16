import { configureStore } from '@reduxjs/toolkit';
import productReducer from './features/productSlice';
import cartReducer from './features/cartSlice';
import filterReducer from './features/filterSlice';

export const store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer,
    filters: filterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
