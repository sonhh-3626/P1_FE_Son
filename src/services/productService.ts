import { createAsyncThunk } from "@reduxjs/toolkit";
import type { Product } from "../types/Product";

const serverUrl = import.meta.env.VITE_SERVER_URL;

interface ProductState {
  items: Product[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(`${serverUrl}/products`);
      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }
      const data = await response.json();
      return data as Product[];
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchProductById = createAsyncThunk(
  'product/fetchProductById',
  async (id: number, { rejectWithValue }) => {
    try {
      const response = await fetch(`${serverUrl}/products/${id}`);
      const data = await response.json();
      return data;
    } catch (error: any) {

      if (error.response) {
        return rejectWithValue(error.response.data);
      } else {
        return rejectWithValue({ message: 'Network error' });
      }
    }
  }
)

export const fetchProductsByCategory = createAsyncThunk(
  'products/fetchProductsByCategory',
  async (category: string, { getState, rejectWithValue }) => {
    const state = getState() as { products: ProductState };
    const productsForCategory = state.products.items.filter(p => p.category.name === category);

    if (productsForCategory.length > 0 && state.products.status === 'succeeded') {
      return productsForCategory;
    }

    try {
      const response = await fetch(`${serverUrl}/products?category=${category}`);
      if (!response.ok) {
        throw new Error('Failed to fetch products by category');
      }
      const data = await response.json();
      return data as Product[];
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);
