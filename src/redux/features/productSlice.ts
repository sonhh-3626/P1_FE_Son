import { createSlice, createAsyncThunk, type PayloadAction } from '@reduxjs/toolkit';
import { type Product } from '../../types/Product';

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

export const fetchProductsByCategory = createAsyncThunk(
  'products/fetchProductsByCategory',
  async (category: string, { getState, rejectWithValue }) => {
    const state = getState() as { products: ProductState };
    const productsForCategory = state.products.items.filter(p => p.category === category);

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

const initialState: ProductState = {
  items: [],
  status: 'idle',
  error: null,
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    updateProduct: (state, action: PayloadAction<Product>) => {
      const index = state.items.findIndex(product => product.id === action.payload.id);
      if (index !== -1) {
        state.items[index] = action.payload;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action: PayloadAction<Product[]>) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string;
      })
      .addCase(fetchProductsByCategory.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchProductsByCategory.fulfilled, (state, action: PayloadAction<Product[]>) => {
        state.status = 'succeeded';
        action.payload.forEach(newProduct => {
          const existingIndex = state.items.findIndex(item => item.id === newProduct.id);
          if (existingIndex === -1) {
            state.items.push(newProduct);
          } else {
            state.items[existingIndex] = newProduct;
          }
        });
      })
      .addCase(fetchProductsByCategory.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string;
      });
  },
});

export const { updateProduct } = productSlice.actions;
export default productSlice.reducer;
