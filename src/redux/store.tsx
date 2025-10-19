import { configureStore } from '@reduxjs/toolkit';
import productReducer from './features/productSlice';
import cartReducer from './features/cartSlice';
import filterReducer from './features/filterSlice';
import reviewsReducer from './features/reviewSlice';

export const store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer,
    filters: filterReducer,
    reviews: reviewsReducer,
  },
});

import { useDispatch, useSelector, type TypedUseSelectorHook } from 'react-redux';

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
