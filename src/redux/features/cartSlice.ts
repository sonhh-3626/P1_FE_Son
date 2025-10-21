import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { type Product } from '../../types/Product';

export interface CartItem extends Product {
  quantity: number;
}

interface CartState {
  items: CartItem[];
  totalQuantity: number;
}

const initialState: CartState = {
  items: [],
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart: (state, action: PayloadAction<Product>) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      state.totalQuantity++;
    },
    removeItemFromCart: (state, action: PayloadAction<number>) => {
      const existingItem = state.items.find(item => item.id === action.payload);
      if (existingItem) {
        state.totalQuantity -= existingItem.quantity;
        state.items = state.items.filter(item => item.id !== action.payload);
      }
    },
    incrementQuantity: (state, action: PayloadAction<number>) => {
      const existingItem = state.items.find(item => item.id === action.payload);
      if (existingItem) {
        existingItem.quantity++;
        state.totalQuantity++;
      }
    },
    decrementQuantity: (state, action: PayloadAction<number>) => {
      const existingItem = state.items.find(item => item.id === action.payload);
      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity--;
        state.totalQuantity--;
      } else if (existingItem && existingItem.quantity === 1) {
        state.totalQuantity--;
        state.items = state.items.filter(item => item.id !== action.payload);
      }
    },
    clearCart: (state) => {
      state.items = [];
      state.totalQuantity = 0;
    },
    updateItemQuantity: (
      state,
      action: PayloadAction<{ productId: number; quantity: number }>
    ) => {
      const { productId, quantity } = action.payload;
      const existingItem = state.items.find(item => item.id === productId);

      if (existingItem) {
        const diff = quantity - existingItem.quantity;
        existingItem.quantity = quantity;
        state.totalQuantity += diff;
      } else {
        state.items.push({ id: productId, quantity } as any);
        state.totalQuantity += quantity;
      }
    },
  },
});

export const getQuantityFromCart = (state: { cart: CartState }, productId: number): number => {
  const item = state.cart.items.find(i => i.id === productId);
  return item ? item.quantity : 0;
};

export const getTotalQuantity = (state: { cart: CartState }) => state.cart.totalQuantity;

export const {
  addItemToCart, removeItemFromCart, incrementQuantity,
  decrementQuantity, clearCart, updateItemQuantity
} = cartSlice.actions;

export default cartSlice.reducer;
